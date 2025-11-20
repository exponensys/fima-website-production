import { useState } from 'react';
import { CallToAction } from './CallToAction';
import { useCallToAction } from '../hooks/useCallToAction';
import { initCallToActionData, checkCallToActionData } from '../utils/initCallToActionData';
import { PlayCircle, CheckCircle, XCircle, Loader2, Database, Eye } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

/**
 * Composant de test pour les Call to Action
 * Utilisé pour vérifier et initialiser les CTAs
 */
export function CallToActionTest() {
  const [isChecking, setIsChecking] = useState(false);
  const [isInitializing, setIsInitializing] = useState(false);
  const [checkResult, setCheckResult] = useState<any>(null);
  const [selectedPosition, setSelectedPosition] = useState<'hero' | 'footer' | 'sidebar' | 'inline'>('hero');
  const [showPreview, setShowPreview] = useState(false);

  const { ctas, isLoading, error } = useCallToAction(selectedPosition);

  const handleCheck = async () => {
    setIsChecking(true);
    setCheckResult(null);
    
    try {
      const result = await checkCallToActionData();
      setCheckResult(result);
      
      if (result.exists) {
        toast.success(`${result.count} CTAs trouvés dans Supabase`);
      } else {
        toast.info('Aucun CTA trouvé - Cliquez sur "Initialiser" pour créer les CTAs par défaut');
      }
    } catch (err) {
      toast.error('Erreur lors de la vérification');
      console.error(err);
    } finally {
      setIsChecking(false);
    }
  };

  const handleInit = async () => {
    if (!confirm('Voulez-vous initialiser les CTAs par défaut ? Cela créera 5 nouveaux CTAs.')) {
      return;
    }

    setIsInitializing(true);
    
    try {
      const result = await initCallToActionData();
      
      if (result.success) {
        toast.success(`${result.count} CTAs initialisés avec succès !`);
        // Re-vérifier après initialisation
        setTimeout(handleCheck, 1000);
      } else {
        toast.error(`Erreur: ${result.error}`);
      }
    } catch (err) {
      toast.error('Erreur lors de l\'initialisation');
      console.error(err);
    } finally {
      setIsInitializing(false);
    }
  };

  return (
    <div className="p-8 bg-white border-2 border-dashed border-gray-300 m-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl text-gray-900 mb-2">🧪 Test Call to Action</h2>
            <p className="text-gray-600">
              Vérifiez et initialisez les Call to Action dans Supabase
            </p>
          </div>
          
          <button
            onClick={() => setShowPreview(!showPreview)}
            className="px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 transition-colors flex items-center gap-2"
          >
            <Eye className="w-4 h-4" />
            {showPreview ? 'Masquer' : 'Prévisualiser'}
          </button>
        </div>

        {/* Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <button
            onClick={handleCheck}
            disabled={isChecking}
            className="p-4 border-2 border-gray-300 hover:border-green-500 hover:bg-green-50 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-3"
          >
            {isChecking ? (
              <Loader2 className="w-5 h-5 animate-spin text-gray-500" />
            ) : (
              <Database className="w-5 h-5 text-green-600" />
            )}
            <div className="text-left">
              <div className="font-medium text-gray-900">Vérifier les données</div>
              <div className="text-sm text-gray-500">
                Compter les CTAs dans Supabase
              </div>
            </div>
          </button>

          <button
            onClick={handleInit}
            disabled={isInitializing}
            className="p-4 border-2 border-gray-300 hover:border-blue-500 hover:bg-blue-50 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-3"
          >
            {isInitializing ? (
              <Loader2 className="w-5 h-5 animate-spin text-gray-500" />
            ) : (
              <PlayCircle className="w-5 h-5 text-blue-600" />
            )}
            <div className="text-left">
              <div className="font-medium text-gray-900">Initialiser les données</div>
              <div className="text-sm text-gray-500">
                Créer 5 CTAs par défaut
              </div>
            </div>
          </button>
        </div>

        {/* Résultat de la vérification */}
        {checkResult && (
          <div className={`p-4 mb-6 border-2 ${
            checkResult.exists 
              ? 'border-green-300 bg-green-50' 
              : 'border-yellow-300 bg-yellow-50'
          }`}>
            <div className="flex items-start gap-3">
              {checkResult.exists ? (
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              ) : (
                <XCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
              )}
              <div className="flex-1">
                <h3 className="font-medium text-gray-900 mb-2">
                  {checkResult.exists 
                    ? `✅ ${checkResult.count} Call to Action trouvés`
                    : '⚠️ Aucun Call to Action trouvé'
                  }
                </h3>
                
                {checkResult.exists && checkResult.data.length > 0 && (
                  <div className="space-y-2 mt-3">
                    {checkResult.data.map((cta: any) => (
                      <div key={cta.id} className="text-sm bg-white p-2 border border-gray-200">
                        <div className="flex items-center justify-between">
                          <span className="font-medium text-gray-900">{cta.title}</span>
                          <span className="text-xs bg-gray-100 px-2 py-1">
                            {cta.position}
                          </span>
                        </div>
                        <div className="text-gray-600 text-xs mt-1">{cta.description}</div>
                      </div>
                    ))}
                  </div>
                )}
                
                {!checkResult.exists && (
                  <p className="text-gray-700 text-sm">
                    Cliquez sur "Initialiser les données" pour créer les CTAs par défaut.
                  </p>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Prévisualisation par position */}
        {showPreview && (
          <div className="border-2 border-gray-300 p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Prévisualisation des CTAs
            </h3>
            
            {/* Sélecteur de position */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Position à afficher :
              </label>
              <div className="flex gap-2">
                {(['hero', 'footer', 'sidebar', 'inline'] as const).map((pos) => (
                  <button
                    key={pos}
                    onClick={() => setSelectedPosition(pos)}
                    className={`px-4 py-2 border transition-colors ${
                      selectedPosition === pos
                        ? 'bg-green-600 text-white border-green-600'
                        : 'bg-white text-gray-700 border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    {pos}
                  </button>
                ))}
              </div>
            </div>

            {/* Affichage des CTAs */}
            <div className="bg-gray-50 p-4 min-h-[200px]">
              {isLoading ? (
                <div className="flex items-center justify-center h-40">
                  <Loader2 className="w-8 h-8 animate-spin text-gray-400" />
                </div>
              ) : error ? (
                <div className="text-center text-red-600 p-4">
                  ❌ Erreur: {error}
                </div>
              ) : ctas.length === 0 ? (
                <div className="text-center text-gray-500 p-4">
                  Aucun CTA actif pour la position "{selectedPosition}"
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="text-sm text-gray-600 mb-2">
                    {ctas.length} CTA{ctas.length > 1 ? 's' : ''} trouvé{ctas.length > 1 ? 's' : ''} :
                  </div>
                  <CallToAction
                    position={selectedPosition}
                    onNavigate={(page) => {
                      toast.info(`Navigation vers: /${page}`);
                    }}
                  />
                </div>
              )}
            </div>
          </div>
        )}

        {/* Instructions */}
        <div className="mt-6 bg-blue-50 border border-blue-200 p-4">
          <h4 className="font-medium text-blue-900 mb-2">📖 Instructions</h4>
          <ol className="text-sm text-blue-800 space-y-1 list-decimal list-inside">
            <li>Cliquez sur "Vérifier les données" pour voir les CTAs existants</li>
            <li>Si aucun CTA n'existe, cliquez sur "Initialiser les données"</li>
            <li>Utilisez "Prévisualiser" pour voir les CTAs par position</li>
            <li>Modifiez les CTAs depuis le CMS (/cms → Call to Action)</li>
          </ol>
        </div>

        {/* Lien vers le CMS */}
        <div className="mt-4 text-center">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.location.hash = '#/cms';
            }}
            className="text-blue-600 hover:text-blue-800 underline text-sm"
          >
            Gérer les CTAs dans le CMS →
          </a>
        </div>
      </div>
    </div>
  );
}
