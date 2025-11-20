import { useState } from 'react';
import { RefreshCw } from 'lucide-react';
import { toast } from 'sonner@2.0.3';
import { projectId, publicAnonKey } from '../../utils/supabase/info';

export function QuickInitButton() {
  const [isInitializing, setIsInitializing] = useState(false);

  const initializeAllData = async () => {
    setIsInitializing(true);
    try {
      let blogsOk = false;
      let testimonialsOk = false;
      let errors: string[] = [];

      // Initialiser les blogs
      try {
        const blogsResponse = await fetch(
          `https://${projectId}.supabase.co/functions/v1/make-server-98c6ec1c/init-blogs`,
          {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${publicAnonKey}`,
              'Content-Type': 'application/json'
            }
          }
        );

        if (blogsResponse.ok) {
          const result = await blogsResponse.json();
          console.log('Blogs initialisés:', result);
          blogsOk = true;
        } else {
          const error = await blogsResponse.text();
          console.error('Erreur blogs:', error);
          errors.push(`Blogs: ${blogsResponse.status} - ${error}`);
        }
      } catch (error) {
        console.error('Erreur initialisation blogs:', error);
        errors.push(`Blogs: ${error}`);
      }

      // Initialiser les testimonials
      try {
        const testimonialsResponse = await fetch(
          `https://${projectId}.supabase.co/functions/v1/make-server-98c6ec1c/init-testimonials`,
          {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${publicAnonKey}`,
              'Content-Type': 'application/json'
            }
          }
        );

        if (testimonialsResponse.ok) {
          const result = await testimonialsResponse.json();
          console.log('Testimonials initialisés:', result);
          testimonialsOk = true;
        } else {
          const error = await testimonialsResponse.text();
          console.error('Erreur testimonials:', error);
          errors.push(`Testimonials: ${testimonialsResponse.status} - ${error}`);
        }
      } catch (error) {
        console.error('Erreur initialisation testimonials:', error);
        errors.push(`Testimonials: ${error}`);
      }

      // Afficher le résultat
      if (blogsOk && testimonialsOk) {
        toast.success('✅ Blogs et Testimonials initialisés avec succès !');
        setTimeout(() => window.location.reload(), 1000);
      } else if (blogsOk || testimonialsOk) {
        toast.warning(`Initialisation partielle : ${blogsOk ? '✅ Blogs' : '❌ Blogs'} | ${testimonialsOk ? '✅ Testimonials' : '❌ Testimonials'}`);
        console.error('Erreurs détaillées:', errors);
        setTimeout(() => window.location.reload(), 1500);
      } else {
        toast.error('❌ Échec de l\'initialisation. Voir la console pour plus de détails.');
        console.error('Erreurs:', errors);
      }
    } catch (error) {
      console.error('Erreur lors de l\'initialisation:', error);
      toast.error('Erreur lors de l\'initialisation des données');
    } finally {
      setIsInitializing(false);
    }
  };

  return (
    <div className="mb-6 bg-gradient-to-r from-blue-50 to-green-50 border-2 border-blue-200 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-1">
            🚀 Initialisation rapide
          </h3>
          <p className="text-sm text-gray-700">
            Cliquez ici pour initialiser des données de démonstration (Blogs, Témoignages, etc.)
          </p>
        </div>
        <button
          onClick={initializeAllData}
          disabled={isInitializing}
          className="flex items-center space-x-2 px-6 py-3 text-white hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
          style={{ backgroundColor: '#B5C233' }}
        >
          <RefreshCw className={`w-5 h-5 ${isInitializing ? 'animate-spin' : ''}`} />
          <span>{isInitializing ? 'Initialisation...' : 'Initialiser les données'}</span>
        </button>
      </div>
    </div>
  );
}