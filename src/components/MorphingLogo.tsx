import React from 'react';
import { motion } from 'motion/react';

interface MorphingLogoProps {
  /** Premier logo (avant le scroll) */
  logo1Src: string;
  /** Deuxième logo (après le scroll) */
  logo2Src: string;
  /** Alt text pour l'accessibilité */
  alt: string;
  /** Hauteur du logo en pixels */
  height?: number;
  /** Seuil de scroll en pixels pour déclencher l'animation */
  scrollThreshold?: number;
  /** État du scroll (externe) */
  hasScrolled?: boolean;
  /** Durée de l'animation en secondes */
  animationDuration?: number;
  /** Classe CSS personnalisée */
  className?: string;
  /** Callback au clic */
  onClick?: () => void;
}

/**
 * Composant MorphingLogo - Fondu enchaîné entre deux logos au scroll
 * 
 * Utilise la technique de superposition avec opacité pour créer
 * un effet de morphing fluide entre deux logos.
 */
export function MorphingLogo({
  logo1Src,
  logo2Src,
  alt,
  height = 24,
  scrollThreshold = 50,
  hasScrolled = false,
  animationDuration = 0.6,
  className = '',
  onClick,
}: MorphingLogoProps) {
  const [isScrolled, setIsScrolled] = React.useState(false);

  // Si hasScrolled est fourni en prop, l'utiliser
  // Sinon, détecter le scroll automatiquement
  React.useEffect(() => {
    if (hasScrolled !== undefined) {
      setIsScrolled(hasScrolled);
      return;
    }

    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      setIsScrolled(scrollY > scrollThreshold);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Vérifier immédiatement au montage
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollThreshold, hasScrolled]);

  return (
    <div 
      className={`relative ${className}`}
      style={{ 
        height: `${height}px`,
        width: 'auto',
        cursor: onClick ? 'pointer' : 'default',
      }}
      onClick={onClick}
    >
      {/* Logo 1 - Disparaît au scroll */}
      <motion.img
        src={logo1Src}
        alt={alt}
        className="absolute top-0 left-0"
        style={{
          height: `${height}px`,
          width: 'auto',
          objectFit: 'contain',
        }}
        initial={{ opacity: 1 }}
        animate={{ 
          opacity: isScrolled ? 0 : 1,
        }}
        transition={{ 
          duration: animationDuration,
          ease: [0.43, 0.13, 0.23, 0.96], // Cubic bezier pour un mouvement naturel
        }}
      />

      {/* Logo 2 - Apparaît au scroll */}
      <motion.img
        src={logo2Src}
        alt={alt}
        className="absolute top-0 left-0"
        style={{
          height: `${height}px`,
          width: 'auto',
          objectFit: 'contain',
        }}
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: isScrolled ? 1 : 0,
        }}
        transition={{ 
          duration: animationDuration,
          ease: [0.43, 0.13, 0.23, 0.96],
        }}
      />
    </div>
  );
}
