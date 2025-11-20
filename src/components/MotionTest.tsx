import { motion } from 'motion/react';
import { useState } from 'react';

/**
 * Composant de test simple pour vérifier que Motion fonctionne
 * 
 * Usage: Ajouter temporairement au début du Hero ou de App.tsx
 * import { MotionTest } from './components/MotionTest';
 * <MotionTest />
 */

export function MotionTest() {
  const [isAnimated, setIsAnimated] = useState(false);

  return (
    <div className="fixed top-20 left-4 z-[9999] bg-white p-4 rounded-lg shadow-2xl border-4 border-blue-500">
      <div className="text-sm font-bold mb-2">🧪 Motion Test</div>
      
      <motion.div
        className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg mb-3 flex items-center justify-center text-white font-bold"
        animate={{
          scale: isAnimated ? [1, 1.5, 1] : 1,
          rotate: isAnimated ? [0, 180, 360] : 0,
          opacity: isAnimated ? [1, 0.5, 1] : 1,
        }}
        transition={{
          duration: 1,
          ease: 'easeInOut',
        }}
      >
        {isAnimated ? '🎬' : '⏸️'}
      </motion.div>
      
      <button
        onClick={() => setIsAnimated(!isAnimated)}
        className="w-full py-2 px-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors text-sm font-medium"
      >
        {isAnimated ? 'Stop' : 'Animate!'}
      </button>
      
      <div className="mt-2 text-xs text-gray-600">
        {isAnimated ? '✅ Motion works!' : 'Click to test'}
      </div>
    </div>
  );
}
