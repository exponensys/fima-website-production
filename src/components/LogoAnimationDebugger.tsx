import { useEffect, useState } from 'react';

/**
 * Composant de debug pour l'animation du logo
 * À ajouter temporairement dans Hero.tsx pour tester l'animation
 * 
 * Usage dans Hero.tsx:
 * import { LogoAnimationDebugger } from './LogoAnimationDebugger';
 * 
 * Puis ajouter dans le rendu:
 * <LogoAnimationDebugger hasScrolled={hasScrolled} isAnimating={isAnimating} onForceScroll={triggerAnimation} />
 */

interface LogoAnimationDebuggerProps {
  hasScrolled: boolean;
  isAnimating: boolean;
  onForceScroll?: () => void;
}

export function LogoAnimationDebugger({ hasScrolled, isAnimating, onForceScroll }: LogoAnimationDebuggerProps) {
  const [scrollY, setScrollY] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);
  
  useEffect(() => {
    const updateScrollY = () => setScrollY(window.scrollY);
    const updateWidth = () => setWindowWidth(window.innerWidth);
    
    updateScrollY();
    updateWidth();
    
    window.addEventListener('scroll', updateScrollY, { passive: true });
    window.addEventListener('resize', updateWidth);
    
    return () => {
      window.removeEventListener('scroll', updateScrollY);
      window.removeEventListener('resize', updateWidth);
    };
  }, []);
  
  const isDesktop = windowWidth >= 768;
  
  const handleForceAnimation = () => {
    window.scrollTo({ top: 100, behavior: 'smooth' });
    if (onForceScroll) {
      setTimeout(() => onForceScroll(), 300);
    }
  };
  
  return (
    <div 
      className="fixed bottom-4 right-4 z-[9999] bg-black/90 text-white p-4 rounded-lg text-xs font-mono max-w-xs"
      style={{ pointerEvents: 'none' }}
    >
      <div className="font-bold mb-2 text-sm">🎬 Logo Animation Debug</div>
      
      <div className="space-y-1">
        <div>
          <span className={isDesktop ? 'text-green-400' : 'text-red-400'}>
            {isDesktop ? '✅' : '❌'}
          </span>
          {' '}Desktop: {windowWidth}px {isDesktop ? '(≥768)' : '(<768)'}
        </div>
        
        <div>
          <span className={scrollY > 20 ? 'text-green-400' : 'text-yellow-400'}>
            {scrollY > 20 ? '✅' : '⏳'}
          </span>
          {' '}Scroll Y: {scrollY}px {scrollY > 20 ? '(>20)' : '(≤20)'}
        </div>
        
        <div>
          <span className={hasScrolled ? 'text-green-400' : 'text-gray-400'}>
            {hasScrolled ? '✅' : '⚪'}
          </span>
          {' '}hasScrolled: {hasScrolled.toString()}
        </div>
        
        <div>
          <span className={isAnimating ? 'text-yellow-400 animate-pulse' : 'text-gray-400'}>
            {isAnimating ? '🎬' : '⚪'}
          </span>
          {' '}isAnimating: {isAnimating.toString()}
        </div>
      </div>
      
      {!isDesktop && (
        <div className="mt-3 pt-3 border-t border-white/20 text-yellow-400">
          ⚠️ Animation desktop only
        </div>
      )}
      
      {isDesktop && !hasScrolled && scrollY < 20 && (
        <div className="mt-3 pt-3 border-t border-white/20 text-blue-400">
          👆 Scroll down to trigger!
        </div>
      )}
      
      {hasScrolled && !isAnimating && (
        <div className="mt-3 pt-3 border-t border-white/20 text-green-400">
          ✅ Animation complete!
        </div>
      )}
      
      {!hasScrolled && onForceScroll && (
        <button
          onClick={handleForceAnimation}
          className="mt-3 w-full py-2 px-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors text-xs"
          style={{ pointerEvents: 'auto' }}
        >
          🎬 Force Animation
        </button>
      )}
    </div>
  );
}
