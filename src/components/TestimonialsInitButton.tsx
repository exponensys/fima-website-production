import { useState } from 'react';
import { projectId, publicAnonKey } from '../utils/supabase/info';

export function TestimonialsInitButton() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const initializeTestimonials = async () => {
    setLoading(true);
    setMessage(null);
    setError(null);

    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-98c6ec1c/init-testimonials`,
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${publicAnonKey}`,
            'Content-Type': 'application/json',
          },
        }
      );

      if (!response.ok) {
        throw new Error(`Erreur ${response.status}: ${response.statusText}`);
      }

      const result = await response.json();

      if (result.success) {
        setMessage('✅ Testimonials initialisés avec succès !');
        // Recharger la page après 2 secondes
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      } else {
        throw new Error(result.error || 'Erreur inconnue');
      }
    } catch (err) {
      console.error('Error initializing testimonials:', err);
      setError(err instanceof Error ? err.message : 'Erreur inconnue');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="bg-white rounded-lg shadow-xl p-4 border-2 border-red-500 max-w-sm">
        <h3 className="font-bold text-red-600 mb-2">
          ⚠️ Données Testimonials manquantes
        </h3>
        <p className="text-sm text-gray-600 mb-4">
          Les testimonials doivent être initialisés. Cliquez sur le bouton ci-dessous pour créer les données de démonstration.
        </p>
        
        <button
          onClick={initializeTestimonials}
          disabled={loading}
          className="w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? 'Initialisation...' : 'Initialiser les Testimonials'}
        </button>

        {message && (
          <div className="mt-3 p-2 bg-green-50 border border-green-200 rounded text-sm text-green-700">
            {message}
          </div>
        )}

        {error && (
          <div className="mt-3 p-2 bg-red-50 border border-red-200 rounded text-sm text-red-700">
            ❌ {error}
          </div>
        )}
      </div>
    </div>
  );
}