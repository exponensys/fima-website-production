import { useState } from 'react';
import { RefreshCw } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { initTestimonials } from '../../utils/initTestimonialsData';
import { toast } from 'sonner@2.0.3';

/**
 * 💬 Bouton d'initialisation des Témoignages
 * 
 * Crée des témoignages de démonstration pour tous les métiers FIMA
 */
export function TestimonialsInitButton() {
  const [isInitializing, setIsInitializing] = useState(false);

  const handleInit = async () => {
    if (!confirm('⚠️ Cette action va créer des témoignages de démonstration. Continuer ?')) {
      return;
    }

    setIsInitializing(true);
    
    try {
      const result = await initTestimonials();
      
      if (result.success) {
        toast.success(result.message || 'Témoignages initialisés avec succès !');
        // Recharger la page pour voir les nouveaux témoignages
        setTimeout(() => window.location.reload(), 1500);
      } else {
        toast.error(result.error || 'Erreur lors de l\'initialisation');
      }
    } catch (error) {
      console.error('Error initializing testimonials:', error);
      toast.error('Erreur fatale lors de l\'initialisation');
    } finally {
      setIsInitializing(false);
    }
  };

  return (
    <Button
      onClick={handleInit}
      disabled={isInitializing}
      variant="outline"
      className="flex items-center space-x-2"
    >
      <RefreshCw className={`w-4 h-4 ${isInitializing ? 'animate-spin' : ''}`} />
      <span>{isInitializing ? 'Initialisation...' : 'Initialiser données démo'}</span>
    </Button>
  );
}
