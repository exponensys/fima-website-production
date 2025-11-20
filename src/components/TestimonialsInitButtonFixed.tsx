import { useState } from 'react';
import { projectId, publicAnonKey } from '../utils/supabase/info';

export function TestimonialsInitButtonFixed() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const initializeTestimonials = async () => {
    setLoading(true);
    setMessage(null);
    setError(null);

    try {
      // Essayer l'URL standard d'abord
      let response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-98c6ec1c/init-testimonials`,
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${publicAnonKey}`,
            'Content-Type': 'application/json',
          },
        }
      );

      // Si 404, essayer avec le préfixe /server/
      if (!response.ok && response.status === 404) {
        console.log('❌ Première URL échouée, essai avec /server/...');
        response = await fetch(
          `https://${projectId}.supabase.co/functions/v1/server/make-server-98c6ec1c/init-testimonials`,
          {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${publicAnonKey}`,
              'Content-Type': 'application/json',
            },
          }
        );
      }

      if (!response.ok) {
        throw new Error(`Erreur ${response.status}: ${response.statusText}`);
      }

      const result = await response.json();

      if (result.success) {
        setMessage('✅ Testimonials initialisés avec succès ! Rechargement dans 2 secondes...');
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
      <div className="bg-white rounded-lg shadow-xl p-4 border-2 border-[#B5C233] max-w-sm">
        <h3 className="font-bold text-[#B5C233] mb-2">
          🔧 Initialisation Testimonials
        </h3>
        <p className="text-sm text-gray-600 mb-4">
          Cliquez pour initialiser les testimonials avec Mme Marie-Claire Kouassi.
        </p>
        
        <button
          onClick={initializeTestimonials}
          disabled={loading}
          className="w-full py-2 px-4 bg-[#B5C233] text-white rounded hover:bg-[#9CAF2A] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
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