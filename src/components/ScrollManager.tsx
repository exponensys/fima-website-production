import { useEffect } from 'react';

interface ScrollManagerProps {
  children: React.ReactNode;
  scrollToTop?: boolean;
}

/**
 * Composant utilitaire pour gérer le scroll de manière robuste
 * Force le scroll vers le haut quand une nouvelle page se charge
 */
export function ScrollManager({ children, scrollToTop = true }: ScrollManagerProps) {
  useEffect(() => {
    if (scrollToTop) {
      // Méthode ultra-agressive pour s'assurer que le scroll fonctionne
      const forceScrollToTop = () => {
        // 1. Scroll synchrone immédiat multiple
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
        
        // 2. Force scroll avec requestAnimationFrame (double)
        requestAnimationFrame(() => {
          window.scrollTo({ top: 0, behavior: 'instant' });
          document.documentElement.scrollTop = 0;
          document.body.scrollTop = 0;
          
          requestAnimationFrame(() => {
            window.scrollTo({ top: 0, behavior: 'instant' });
            document.documentElement.scrollTop = 0;
            document.body.scrollTop = 0;
          });
        });
        
        // 3. Vérifications multiples avec délais
        [0, 50, 100, 200].forEach(delay => {
          setTimeout(() => {
            if (window.scrollY > 0 || document.documentElement.scrollTop > 0) {
              window.scrollTo({ top: 0, behavior: 'instant' });
              document.documentElement.scrollTop = 0;
              document.body.scrollTop = 0;
            }
          }, delay);
        });
      };
      
      forceScrollToTop();
      
      // Nettoyage au cas où
      return () => {
        // Pas de nettoyage nécessaire
      };
    }
  }, [scrollToTop]);

  return <>{children}</>;
}