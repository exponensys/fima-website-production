import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

interface MobileScrollIndicatorProps {
  showOnTop?: boolean;
}

export function MobileScrollIndicator({ showOnTop = true }: MobileScrollIndicatorProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      
      setScrollProgress(progress);
      
      // Masquer l'indicateur après 20% de scroll ou sur les grands écrans
      if (window.innerWidth >= 768 || progress > 20) {
        setIsVisible(false);
      } else if (progress < 5) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    
    // Check initial state
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const scrollToNext = () => {
    const sections = document.querySelectorAll('section');
    if (sections.length > 1) {
      sections[1].scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Indicateur de scroll en bas à droite */}
      <button
        onClick={scrollToNext}
        className="scroll-indicator lg:hidden"
        style={{
          background: '#B5C233',
          border: 'none',
          cursor: 'pointer',
          transition: 'all 0.3s ease'
        }}
        aria-label="Faire défiler vers le bas"
      >
        <ChevronDown className="w-6 h-6" />
      </button>

      {/* Barre de progression en haut (optionnelle) */}
      {showOnTop && (
        <div 
          className="fixed top-0 left-0 h-1 z-50 lg:hidden transition-all duration-300"
          style={{
            width: `${scrollProgress}%`,
            background: 'linear-gradient(90deg, #B5C233, #E30613)',
            opacity: scrollProgress > 5 ? 1 : 0
          }}
        />
      )}
    </>
  );
}