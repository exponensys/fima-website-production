import { useState } from 'react';
import { RefreshCw } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { projectId, publicAnonKey } from '../../utils/supabase/info';
import { toast } from 'sonner';

/**
 * 📰 Bouton d'initialisation des Articles/Blog
 * 
 * Crée des articles de démonstration pour le blog FIMA
 */
export function ArticlesInitButton() {
  const [isInitializing, setIsInitializing] = useState(false);

  const handleInit = async () => {
    if (!confirm('⚠️ Cette action va créer des articles de démonstration. Continuer ?')) {
      return;
    }

    setIsInitializing(true);
    
    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-98c6ec1c/init-blogs`,
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${publicAnonKey}`,
            'Content-Type': 'application/json',
          },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();

      if (result.success) {
        toast.success(result.message || 'Articles initialisés avec succès !');
        // Recharger la page pour voir les nouveaux articles
        setTimeout(() => window.location.reload(), 1500);
      } else {
        toast.error(result.error || 'Erreur lors de l\'initialisation');
      }
    } catch (error) {
      console.error('Error initializing articles:', error);
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