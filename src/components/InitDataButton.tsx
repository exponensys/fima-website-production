/**
 * Composant bouton pour initialiser les données Supabase Phase 1 & 2
 * 
 * À utiliser temporairement pendant le développement
 * Peut être supprimé une fois les données initialisées
 */

import { useState } from 'react';
import { projectId, publicAnonKey } from '../utils/supabase/info';
import { Button } from './ui/button';
import { toast } from 'sonner@2.0.3';

export function InitDataButton() {
  const [loading, setLoading] = useState(false);
  const [initialized, setInitialized] = useState(false);

  const initializeData = async () => {
    setLoading(true);
    
    try {
      const url = `https://${projectId}.supabase.co/functions/v1/make-server-98c6ec1c/init-phase-1-2`;
      
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${publicAnonKey}`,
          'Content-Type': 'application/json'
        }
      });
      
      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
      }
      
      const result = await response.json();
      
      if (result.success) {
        toast.success('✅ Données initialisées !', {
          description: `${result.data.site_settings} site settings, ${result.data.business_units} business units, ${result.data.product_categories} catégories créées`
        });
        setInitialized(true);
        
        // Recharger la page après 2 secondes
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      } else {
        throw new Error(result.error || 'Unknown error');
      }
    } catch (error) {
      console.error('Erreur initialisation:', error);
      toast.error('❌ Erreur lors de l\'initialisation', {
        description: error instanceof Error ? error.message : 'Erreur inconnue'
      });
    } finally {
      setLoading(false);
    }
  };

  if (initialized) {
    return (
      <div className="fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 shadow-lg z-50">
        ✅ Données initialisées ! Rechargement...
      </div>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Button
        onClick={initializeData}
        disabled={loading}
        className="bg-red-600 hover:bg-red-700 text-white px-6 py-6 shadow-lg"
        style={{ backgroundColor: '#E30613' }}
      >
        {loading ? (
          <>
            <span className="mr-2">⏳</span>
            Initialisation...
          </>
        ) : (
          <>
            <span className="mr-2">🚀</span>
            Initialiser Données Phase 1 & 2
          </>
        )}
      </Button>
      <p className="text-xs text-gray-600 mt-2 text-center">
        Cliquez si erreurs backend
      </p>
    </div>
  );
}