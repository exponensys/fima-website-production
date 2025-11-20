import React, { useState } from 'react';
import { MorphingLogo } from './MorphingLogo';
import { useLogoScrollAnimation } from '../hooks/useLogoScrollAnimation';
import { Button } from './ui/button';
import { Card } from './ui/card';

/**
 * Composant de test pour l'animation de morphing du logo
 * 
 * Permet de tester facilement différentes configurations
 * et de visualiser l'effet en temps réel.
 */
export function LogoMorphingTest() {
  const { hasScrolled } = useLogoScrollAnimation({ threshold: 100 });
  const [manualScrolled, setManualScrolled] = useState(false);
  const [duration, setDuration] = useState(0.6);
  const [height, setHeight] = useState(40);

  // Logos par défaut (actuellement le même logo, à remplacer)
  const logo1 = "https://jxikbrjmdmznoehhccdw.supabase.co/storage/v1/object/public/make-98c6ec1c-media/images/b10bd9f8-288d-4f40-8f3e-0f10bfa1961f.PNG";
  const logo2 = "https://jxikbrjmdmznoehhccdw.supabase.co/storage/v1/object/public/make-98c6ec1c-media/images/b10bd9f8-288d-4f40-8f3e-0f10bfa1961f.PNG";

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* En-tête */}
        <div>
          <h1 className="text-gray-900 mb-2">
            🎨 Test d'Animation de Morphing du Logo
          </h1>
          <p className="text-gray-600">
            Testez l'animation de morphing avec différentes configurations
          </p>
        </div>

        {/* Instructions */}
        <Card className="p-6 bg-blue-50 border-blue-200">
          <h2 className="text-blue-900 mb-3">
            📋 Instructions
          </h2>
          <ul className="space-y-2 text-blue-800 text-sm">
            <li>✅ Scrollez la page vers le bas pour déclencher l'animation automatique (seuil: 100px)</li>
            <li>✅ Ou utilisez le bouton "Déclencher l'animation" pour tester manuellement</li>
            <li>✅ Ajustez la durée et la hauteur avec les contrôles ci-dessous</li>
            <li>⚠️ Actuellement, les 2 logos sont identiques - uploadez 2 logos différents pour voir le vrai morphing</li>
          </ul>
        </Card>

        {/* Zone de test */}
        <Card className="p-8">
          <div className="flex flex-col items-center space-y-6">
            {/* Logo avec animation automatique (scroll) */}
            <div className="space-y-2">
              <p className="text-sm text-gray-600 text-center">
                Animation Automatique (Scroll)
              </p>
              <div className="bg-gray-900 p-8 rounded-lg">
                <MorphingLogo
                  logo1Src={logo1}
                  logo2Src={logo2}
                  alt="Test Logo - Auto"
                  height={height}
                  hasScrolled={hasScrolled}
                  animationDuration={duration}
                />
              </div>
              <p className="text-xs text-gray-500 text-center">
                État: {hasScrolled ? '✅ Scrollé' : '⏸️ Non scrollé'}
              </p>
            </div>

            {/* Logo avec contrôle manuel */}
            <div className="space-y-2">
              <p className="text-sm text-gray-600 text-center">
                Animation Manuelle
              </p>
              <div className="bg-gray-900 p-8 rounded-lg">
                <MorphingLogo
                  logo1Src={logo1}
                  logo2Src={logo2}
                  alt="Test Logo - Manual"
                  height={height}
                  hasScrolled={manualScrolled}
                  animationDuration={duration}
                />
              </div>
              <div className="flex justify-center">
                <Button
                  onClick={() => setManualScrolled(!manualScrolled)}
                  variant="outline"
                  className="text-sm"
                >
                  {manualScrolled ? '🔄 Revenir au Logo 1' : '▶️ Passer au Logo 2'}
                </Button>
              </div>
            </div>
          </div>
        </Card>

        {/* Contrôles */}
        <Card className="p-6">
          <h3 className="text-gray-900 mb-4">
            ⚙️ Contrôles
          </h3>
          <div className="space-y-4">
            {/* Durée de l'animation */}
            <div>
              <label className="block text-sm text-gray-700 mb-2">
                Durée de l'animation: {duration.toFixed(1)}s
              </label>
              <input
                type="range"
                min="0.1"
                max="2"
                step="0.1"
                value={duration}
                onChange={(e) => setDuration(parseFloat(e.target.value))}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>0.1s (rapide)</span>
                <span>2s (lent)</span>
              </div>
            </div>

            {/* Hauteur du logo */}
            <div>
              <label className="block text-sm text-gray-700 mb-2">
                Hauteur du logo: {height}px
              </label>
              <input
                type="range"
                min="20"
                max="100"
                step="5"
                value={height}
                onChange={(e) => setHeight(parseInt(e.target.value))}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>20px (petit)</span>
                <span>100px (grand)</span>
              </div>
            </div>
          </div>
        </Card>

        {/* Informations de configuration */}
        <Card className="p-6 bg-green-50 border-green-200">
          <h3 className="text-green-900 mb-3">
            ✅ Configuration Actuelle
          </h3>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-green-700">Logo 1:</span>
              <p className="text-green-900 font-mono text-xs break-all mt-1">
                {logo1.substring(0, 50)}...
              </p>
            </div>
            <div>
              <span className="text-green-700">Logo 2:</span>
              <p className="text-green-900 font-mono text-xs break-all mt-1">
                {logo2.substring(0, 50)}...
              </p>
            </div>
            <div>
              <span className="text-green-700">Durée:</span>
              <p className="text-green-900">{duration}s</p>
            </div>
            <div>
              <span className="text-green-700">Hauteur:</span>
              <p className="text-green-900">{height}px</p>
            </div>
          </div>
        </Card>

        {/* Guide rapide */}
        <Card className="p-6 bg-purple-50 border-purple-200">
          <h3 className="text-purple-900 mb-3">
            🎯 Comment Utiliser dans Votre Code
          </h3>
          <pre className="bg-purple-900 text-purple-100 p-4 rounded-lg overflow-x-auto text-sm">
{`import { MorphingLogo } from './components/MorphingLogo';
import { useLogoScrollAnimation } from '../hooks/useLogoScrollAnimation';

function MyHeader() {
  const { hasScrolled } = useLogoScrollAnimation({ threshold: 50 });
  
  return (
    <MorphingLogo
      logo1Src="/logo-initial.png"
      logo2Src="/logo-scrolled.png"
      alt="Mon Logo"
      height={${height}}
      hasScrolled={hasScrolled}
      animationDuration={${duration}}
      onClick={() => navigate('home')}
    />
  );
}`}
          </pre>
        </Card>

        {/* Espace pour le scroll */}
        <div className="h-screen flex items-center justify-center bg-gradient-to-b from-transparent to-gray-100 rounded-lg">
          <div className="text-center space-y-4">
            <p className="text-gray-600">⬇️ Scrollez vers le bas</p>
            <p className="text-sm text-gray-500">
              pour tester l'animation automatique au scroll
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
