import { useState } from 'react';
import { Wand2, CheckCircle, XCircle, Loader2 } from 'lucide-react';
import { initHeroSlides, checkHeroSlidesExist, getHeroSlides } from '../utils/initHeroSlidesData';

/**
 * 🎬 Composant de bouton pour initialiser les Hero Slides
 * 
 * Utilisation :
 * ```tsx
 * import { HeroSlidesInitButton } from './components/HeroSlidesInitButton';
 * 
 * <HeroSlidesInitButton />
 * ```
 */
export function HeroSlidesInitButton() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');
  const [slidesInfo, setSlidesInfo] = useState<any>(null);

  const handleInit = async () => {
    setStatus('loading');
    setMessage('Initialisation en cours...');

    try {
      // Vérifier si des slides existent déjà
      const exists = await checkHeroSlidesExist();
      
      if (exists) {
        const confirmOverwrite = window.confirm(
          '⚠️ Des slides existent déjà. Voulez-vous les remplacer par les 7 slides par défaut ?\n\n' +
          'Cette action ne supprimera pas les slides existants, mais ajoutera 7 nouveaux slides.'
        );
        
        if (!confirmOverwrite) {
          setStatus('idle');
          setMessage('');
          return;
        }
      }

      // Initialiser les slides
      const result = await initHeroSlides();

      if (result.success) {
        setSlidesInfo(result.data);
        setStatus('success');
        setMessage(`✅ ${result.message}`);
        
        // Auto-reload après 2 secondes pour voir les slides
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      } else {
        setStatus('error');
        setMessage(`❌ Erreur: ${result.error}`);
      }
    } catch (error) {
      setStatus('error');
      setMessage(`❌ Erreur: ${error instanceof Error ? error.message : 'Erreur inconnue'}`);
    }
  };

  const handleCheckSlides = async () => {
    setStatus('loading');
    setMessage('Vérification...');

    try {
      const { data, success, error } = await getHeroSlides('fr');
      
      if (success && data) {
        setStatus('success');
        setSlidesInfo({
          total_slides: data.length,
          video_slides: data.filter((s: any) => s.is_video).length,
          image_slides: data.filter((s: any) => !s.is_video).length,
          slides: data.map((s: any) => ({
            order: s.sort_order,
            type: s.is_video ? 'VIDEO' : 'IMAGE',
            title_fr: s.translation?.title || 'Sans titre'
          }))
        });
        setMessage(`✅ ${data.length} slides trouvés`);
      } else {
        setStatus('error');
        setMessage(`❌ Aucun slide trouvé. ${error || ''}`);
      }
    } catch (error) {
      setStatus('error');
      setMessage(`❌ Erreur: ${error instanceof Error ? error.message : 'Erreur inconnue'}`);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-md">
      <div className="bg-white shadow-2xl border-2 p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold text-gray-900">Hero Slides Manager</h3>
          {status === 'success' && <CheckCircle className="w-5 h-5 text-green-600" />}
          {status === 'error' && <XCircle className="w-5 h-5 text-red-600" />}
          {status === 'loading' && <Loader2 className="w-5 h-5 text-blue-600 animate-spin" />}
        </div>

        {message && (
          <div className={`mb-4 p-3 text-sm ${
            status === 'success' ? 'bg-green-50 text-green-800' :
            status === 'error' ? 'bg-red-50 text-red-800' :
            'bg-blue-50 text-blue-800'
          }`}>
            {message}
          </div>
        )}

        {slidesInfo && (
          <div className="mb-4 p-4 bg-gray-50 text-sm">
            <div className="font-semibold mb-2">📊 Statistiques :</div>
            <div className="space-y-1">
              <div>Total : {slidesInfo.total_slides} slides</div>
              <div>🎥 Vidéos : {slidesInfo.video_slides}</div>
              <div>🖼️ Images : {slidesInfo.image_slides}</div>
            </div>
            
            {slidesInfo.slides && slidesInfo.slides.length > 0 && (
              <div className="mt-3">
                <div className="font-semibold mb-1">Slides :</div>
                <div className="space-y-1 max-h-40 overflow-y-auto">
                  {slidesInfo.slides.map((slide: any, index: number) => (
                    <div key={index} className="text-xs flex items-center space-x-2">
                      <span className="text-gray-500">#{slide.order}</span>
                      <span className={slide.type === 'VIDEO' ? 'text-purple-600' : 'text-blue-600'}>
                        {slide.type}
                      </span>
                      <span className="text-gray-700 truncate">{slide.title_fr}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        <div className="space-y-2">
          <button
            onClick={handleInit}
            disabled={status === 'loading'}
            className="w-full flex items-center justify-center space-x-2 px-4 py-3 text-white transition-all disabled:opacity-50 hover:opacity-90"
            style={{ backgroundColor: '#E30613' }}
          >
            {status === 'loading' ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Initialisation...</span>
              </>
            ) : (
              <>
                <Wand2 className="w-5 h-5" />
                <span>Initialiser 7 Slides</span>
              </>
            )}
          </button>

          <button
            onClick={handleCheckSlides}
            disabled={status === 'loading'}
            className="w-full flex items-center justify-center space-x-2 px-4 py-3 border-2 transition-all disabled:opacity-50 hover:bg-gray-50"
            style={{ 
              borderColor: '#B5C233',
              color: '#B5C233'
            }}
          >
            <span>Vérifier les Slides</span>
          </button>
        </div>

        <div className="mt-4 pt-4 border-t border-gray-200 text-xs text-gray-500">
          <div>💡 <strong>Astuce :</strong> Après initialisation, allez dans</div>
          <div className="ml-5">
            <code className="text-purple-600">/cms</code> → <strong>Hero Slides</strong>
          </div>
          <div className="ml-5">pour gérer vos slides.</div>
        </div>
      </div>
    </div>
  );
}

/**
 * 🎯 Version compacte du bouton (sans détails)
 */
export function HeroSlidesInitButtonCompact() {
  const [loading, setLoading] = useState(false);

  const handleQuickInit = async () => {
    if (!confirm('Initialiser 7 slides Hero (3 vidéos + 4 images) ?')) return;
    
    setLoading(true);
    try {
      const result = await initHeroSlides();
      if (result.success) {
        alert('✅ Slides initialisés ! Rechargement...');
        window.location.reload();
      } else {
        alert(`❌ Erreur: ${result.error}`);
      }
    } catch (error) {
      alert('❌ Erreur lors de l\'initialisation');
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleQuickInit}
      disabled={loading}
      className="fixed bottom-6 right-6 z-50 flex items-center space-x-2 px-6 py-3 text-white shadow-lg transition-all disabled:opacity-50 hover:shadow-xl hover:scale-105"
      style={{ backgroundColor: '#E30613' }}
    >
      {loading ? (
        <>
          <Loader2 className="w-5 h-5 animate-spin" />
          <span>Initialisation...</span>
        </>
      ) : (
        <>
          <Wand2 className="w-5 h-5" />
          <span>Init Hero Slides</span>
        </>
      )}
    </button>
  );
}
