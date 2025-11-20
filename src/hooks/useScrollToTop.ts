import { useEffect, useCallback } from 'react';

/**
 * Hook personnalisé pour gérer le scroll vers le haut de manière fiable
 * Prend en compte les composants lazy-loaded et les animations
 */
export const useScrollToTop = () => {
  const scrollToTop = useCallback(() => {
    // Scroll immédiat synchrone d'abord
    window.scrollTo(0, 0);
    
    // Force scroll pour les cas où le contenu n'est pas encore rendu
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, behavior: 'instant' });
      
      // Double sécurité après un délai minimal
      setTimeout(() => {
        if (window.scrollY > 0) {
          window.scrollTo({ top: 0, behavior: 'instant' });
        }
      }, 50);
    });
  }, []);

  return scrollToTop;
};

/**
 * Hook qui s'exécute automatiquement le scroll to top sur le mount du composant
 * Utile pour les pages lazy-loaded
 */
export const useAutoScrollToTop = (dependency?: any) => {
  const scrollToTop = useScrollToTop();
  
  useEffect(() => {
    scrollToTop();
  }, [dependency, scrollToTop]);
};