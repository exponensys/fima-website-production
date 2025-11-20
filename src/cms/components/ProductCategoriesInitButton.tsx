import { useState } from 'react';
import { toast } from 'sonner';
import { initProductCategories } from '../../utils/initProductCategoriesData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolderTree, faSpinner, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

export function ProductCategoriesInitButton() {
  const [isInitializing, setIsInitializing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInit = async () => {
    if (isInitializing) return;
    
    const confirmed = window.confirm(
      '⚠️ Voulez-vous initialiser les catégories de produits ?\n\n' +
      'Cela va créer/mettre à jour :\n' +
      '• 6 catégories FIMA Couchage\n' +
      '• 9 catégories FIMA Design\n' +
      '• 5 catégories UNIVERS GLASS\n\n' +
      'Total : 20 catégories\n\n' +
      'Continuer ?'
    );

    if (!confirmed) return;

    setIsInitializing(true);
    setIsSuccess(false);

    try {
      console.log('🚀 Initialisation des catégories de produits...');
      
      const result = await initProductCategories();

      if (result.success) {
        console.log('✅ Catégories initialisées avec succès !');
        toast.success('✅ Catégories de produits initialisées avec succès !', {
          description: 'Les 20 catégories ont été créées dans Supabase',
          duration: 5000,
        });
        setIsSuccess(true);
        
        // Recharger la page après 2 secondes
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      } else {
        throw new Error(result.error || 'Erreur inconnue');
      }
    } catch (error) {
      console.error('❌ Erreur lors de l\'initialisation des catégories:', error);
      toast.error('❌ Erreur lors de l\'initialisation', {
        description: error instanceof Error ? error.message : 'Erreur inconnue',
        duration: 7000,
      });
      setIsSuccess(false);
    } finally {
      setIsInitializing(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border-2 border-gray-200">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          <div
            className="w-12 h-12 rounded-lg flex items-center justify-center"
            style={{ backgroundColor: '#B5C233' }}
          >
            <FontAwesomeIcon 
              icon={faFolderTree} 
              className="text-white text-xl"
            />
          </div>
        </div>
        
        <div className="flex-1">
          <h3 className="mb-2" style={{ color: '#000000' }}>
            Initialiser les Catégories de Produits
          </h3>
          <p className="text-sm mb-4" style={{ color: '#6E6E6E' }}>
            Initialise les catégories pour les 3 métiers du Groupe FIMA :
          </p>
          
          <ul className="text-sm mb-4 space-y-2" style={{ color: '#6E6E6E' }}>
            <li className="flex items-center gap-2">
              <span style={{ color: '#B5C233' }}>✓</span>
              <strong>FIMA Couchage</strong> : 6 gammes (Confort Brodé, Médicale, BabyCare, Élégance Unie, ThermoConfort, Parure de Lit)
            </li>
            <li className="flex items-center gap-2">
              <span style={{ color: '#6E6E6E' }}>✓</span>
              <strong>FIMA Design</strong> : 9 catégories (Cuisine, Dressing, Aménagement buanderie, Bureaux, Chambres, Panneaux décoratifs, Portes, Salles à manger, Salon)
            </li>
            <li className="flex items-center gap-2">
              <span style={{ color: '#0EA5E9' }}>✓</span>
              <strong>UNIVERS GLASS</strong> : 5 catégories (Vitrerie, Menuiserie Aluminium, Fenêtres, Portes, Cloisons)
            </li>
          </ul>

          <div className="mb-4 p-3 border-2 rounded" style={{ 
            borderColor: '#FFA500', 
            backgroundColor: '#FFF8DC' 
          }}>
            <p className="text-sm mb-2" style={{ color: '#000000' }}>
              <strong>💡 En cas d'erreur 404 :</strong>
            </p>
            <ol className="text-sm space-y-1 ml-4 list-decimal" style={{ color: '#6E6E6E' }}>
              <li>Le serveur Edge Functions se redémarre</li>
              <li>Attendez <strong>1-2 minutes</strong></li>
              <li>Rafraîchissez cette page (F5)</li>
              <li>Réessayez l'initialisation</li>
            </ol>
            <p className="text-xs mt-2" style={{ color: '#6E6E6E' }}>
              Consultez la console du navigateur (F12) pour plus de détails.
            </p>
          </div>
          
          <button
            onClick={handleInit}
            disabled={isInitializing || isSuccess}
            className="px-6 py-3 rounded-lg transition-all duration-200 flex items-center gap-2"
            style={{
              backgroundColor: isSuccess ? '#10b981' : isInitializing ? '#9ca3af' : '#B5C233',
              color: '#FFFFFF',
              cursor: isInitializing || isSuccess ? 'not-allowed' : 'pointer',
              opacity: isInitializing || isSuccess ? 0.7 : 1,
            }}
          >
            {isInitializing ? (
              <>
                <FontAwesomeIcon icon={faSpinner} spin />
                <span>Initialisation en cours...</span>
              </>
            ) : isSuccess ? (
              <>
                <FontAwesomeIcon icon={faCheckCircle} />
                <span>Catégories initialisées ✓</span>
              </>
            ) : (
              <>
                <FontAwesomeIcon icon={faFolderTree} />
                <span>Initialiser les Catégories</span>
              </>
            )}
          </button>
          
          {isSuccess && (
            <p className="text-sm mt-3" style={{ color: '#10b981' }}>
              ✅ Rechargement automatique dans 2 secondes...
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
