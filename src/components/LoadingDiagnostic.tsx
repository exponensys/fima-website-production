/**
 * Composant de diagnostic pour identifier pourquoi l'écran est vide
 * Affiche des informations sur l'état de chargement de l'application
 */

import { useEffect, useState } from 'react';

export function LoadingDiagnostic() {
  const [diagnostics, setDiagnostics] = useState<string[]>([]);

  useEffect(() => {
    const logs: string[] = [];
    
    // Vérifier localStorage
    const dataInitialized = localStorage.getItem('fima_data_initialized');
    logs.push(`📊 Données initialisées: ${dataInitialized || 'NON'}`);
    
    // Vérifier si on est sur mobile ou desktop
    const isMobile = window.innerWidth < 768;
    logs.push(`📱 Mode: ${isMobile ? 'Mobile' : 'Desktop'}`);
    logs.push(`📐 Largeur écran: ${window.innerWidth}px`);
    
    // Vérifier les éléments DOM
    setTimeout(() => {
      const header = document.querySelector('header');
      const main = document.querySelector('main');
      const hero = document.querySelector('.hero-full-width');
      const mobileCards = document.querySelector('.md\\:hidden');
      
      logs.push(`🎯 Header trouvé: ${header ? 'OUI' : 'NON'}`);
      logs.push(`🎯 Main trouvé: ${main ? 'OUI' : 'NON'}`);
      logs.push(`🎯 Hero trouvé: ${hero ? 'OUI' : 'NON'}`);
      logs.push(`🎯 Mobile Cards trouvées: ${mobileCards ? 'OUI' : 'NON'}`);
      
      setDiagnostics(logs);
    }, 1000);
    
  }, []);

  return (
    <div className="fixed bottom-4 left-4 bg-black/90 text-white p-4 max-w-md z-[99998] text-xs font-mono">
      <div className="font-bold mb-2">🔍 Diagnostic de chargement</div>
      {diagnostics.map((log, index) => (
        <div key={index} className="py-0.5">{log}</div>
      ))}
      <div className="mt-2 pt-2 border-t border-gray-600 text-[10px] opacity-60">
        Ce panneau disparaîtra automatiquement
      </div>
    </div>
  );
}