import { ReactNode, useEffect } from 'react';

/**
 * MobileLayout - Wrapper mobile anti-bounce
 * 
 * Architecture simplifiée pour éliminer le rebond sur mobile:
 * - Scroll natif sans interférences
 * - Aucun container avec position fixed/absolute qui interfère
 * - Overscroll-behavior strict
 * - Touch-action optimisé
 */

interface MobileLayoutProps {
  children: ReactNode;
}

export function MobileLayout({ children }: MobileLayoutProps) {
  useEffect(() => {
    // Configuration viewport stricte
    const setupViewport = () => {
      let viewportMeta = document.querySelector('meta[name="viewport"]') as HTMLMetaElement;
      
      if (!viewportMeta) {
        viewportMeta = document.createElement('meta');
        viewportMeta.name = 'viewport';
        document.head.appendChild(viewportMeta);
      }
      
      viewportMeta.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover';
    };

    // Forcer le déblocage du body au montage
    const unlockBody = () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.height = '';
      document.body.removeAttribute('data-scroll-locked');
      document.body.classList.remove('overflow-hidden', 'no-scroll', 'modal-open');
      document.documentElement.style.overflow = '';
      document.documentElement.style.position = '';
    };

    // Appliquer les fixes
    setupViewport();
    unlockBody();

    // Watchdog pour surveiller les modaux qui bloquent le scroll
    const watchdog = setInterval(() => {
      const hasVisibleModal = document.querySelector('[role="dialog"]:not([data-state="closed"])');
      
      if (!hasVisibleModal && document.body.style.overflow === 'hidden') {
        console.warn('🔓 MobileLayout: Déblocage du body détecté');
        unlockBody();
      }
    }, 1000);

    // Cleanup
    return () => {
      clearInterval(watchdog);
    };
  }, []);

  return (
    <div 
      className="mobile-layout-wrapper"
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        overflow: 'visible',
        // Anti-bounce strict
        overscrollBehavior: 'none',
        WebkitOverflowScrolling: 'auto',
        touchAction: 'pan-y',
      }}
    >
      {children}
    </div>
  );
}
