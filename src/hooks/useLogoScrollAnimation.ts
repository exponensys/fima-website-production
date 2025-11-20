import { useState, useEffect } from 'react';

interface UseLogoScrollAnimationOptions {
  /** Seuil de scroll en pixels pour déclencher l'animation (défaut: 50) */
  threshold?: number;
}

/**
 * Hook pour gérer l'animation du logo au scroll
 * 
 * Retourne un état `hasScrolled` qui devient true quand l'utilisateur
 * a scrollé au-delà du seuil défini.
 * 
 * @param options - Options de configuration
 * @returns État du scroll
 */
export function useLogoScrollAnimation(options: UseLogoScrollAnimationOptions = {}) {
  const { threshold = 50 } = options;
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      
      if (scrollY > threshold) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    // Vérifier immédiatement au montage
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [threshold]);

  return { hasScrolled };
}
