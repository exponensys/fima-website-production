import { useTestimonials } from '../hooks/useTestimonials';
import { useVideoStories } from '../hooks/useVideoStories';

/**
 * 🔍 Composant de debug pour tester les Témoignages et Video Stories
 * 
 * Affiche un récapitulatif des données chargées :
 * - Nombre de témoignages
 * - Nombre de vidéos
 * - État de chargement
 * - Erreurs éventuelles
 * 
 * Utilisation : Ajouter <TestimonialsVideosDebug /> dans App.tsx temporairement
 */
export function TestimonialsVideosDebug() {
  const { 
    testimonials, 
    loading: testimonialsLoading, 
    error: testimonialsError 
  } = useTestimonials('fr', undefined, false, false);
  
  const { 
    videoStories, 
    loading: videosLoading, 
    error: videosError 
  } = useVideoStories('fr', undefined, false, false);

  return (
    <div 
      style={{ 
        position: 'fixed', 
        bottom: 20, 
        right: 20, 
        backgroundColor: 'white', 
        padding: '20px',
        border: '2px solid #B5C233',
        borderRadius: '0px', // Design carré FIMA
        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
        zIndex: 9999,
        maxWidth: '350px',
        fontFamily: 'Inter'
      }}
    >
      <h3 
        style={{ 
          fontFamily: 'Montserrat', 
          color: '#B5C233', 
          marginBottom: '15px',
          fontSize: '18px',
          fontWeight: '600'
        }}
      >
        🔍 Debug : Témoignages & Vidéos
      </h3>

      {/* Témoignages */}
      <div style={{ marginBottom: '15px', paddingBottom: '15px', borderBottom: '1px solid #eee' }}>
        <h4 style={{ fontFamily: 'Montserrat', fontSize: '14px', marginBottom: '8px' }}>
          💬 Témoignages
        </h4>
        {testimonialsLoading ? (
          <p style={{ color: '#6E6E6E', fontSize: '13px' }}>⏳ Chargement...</p>
        ) : testimonialsError ? (
          <p style={{ color: '#E30613', fontSize: '13px' }}>❌ Erreur: {testimonialsError}</p>
        ) : (
          <div>
            <p style={{ color: '#000', fontSize: '13px' }}>
              ✅ <strong>{testimonials.length}</strong> témoignage(s) chargé(s)
            </p>
            <ul style={{ fontSize: '12px', color: '#6E6E6E', marginTop: '5px', paddingLeft: '20px' }}>
              <li>{testimonials.filter(t => t.published).length} publiés</li>
              <li>{testimonials.filter(t => t.featured).length} en vedette</li>
              <li>{testimonials.filter(t => t.category === 'couchage').length} couchage</li>
              <li>{testimonials.filter(t => t.category === 'design').length} design</li>
              <li>{testimonials.filter(t => t.category === 'glass').length} glass</li>
            </ul>
          </div>
        )}
      </div>

      {/* Video Stories */}
      <div>
        <h4 style={{ fontFamily: 'Montserrat', fontSize: '14px', marginBottom: '8px' }}>
          🎥 Video Stories
        </h4>
        {videosLoading ? (
          <p style={{ color: '#6E6E6E', fontSize: '13px' }}>⏳ Chargement...</p>
        ) : videosError ? (
          <p style={{ color: '#E30613', fontSize: '13px' }}>❌ Erreur: {videosError}</p>
        ) : (
          <div>
            <p style={{ color: '#000', fontSize: '13px' }}>
              ✅ <strong>{videoStories.length}</strong> vidéo(s) chargée(s)
            </p>
            <ul style={{ fontSize: '12px', color: '#6E6E6E', marginTop: '5px', paddingLeft: '20px' }}>
              <li>{videoStories.filter(v => v.published).length} publiées</li>
              <li>{videoStories.filter(v => v.featured).length} en vedette</li>
              <li>{videoStories.filter(v => v.category === 'couchage').length} couchage</li>
              <li>{videoStories.filter(v => v.category === 'design').length} design</li>
              <li>{videoStories.filter(v => v.category === 'glass').length} glass</li>
            </ul>
          </div>
        )}
      </div>

      <p style={{ 
        marginTop: '15px', 
        fontSize: '11px', 
        color: '#6E6E6E',
        textAlign: 'center',
        paddingTop: '10px',
        borderTop: '1px solid #eee'
      }}>
        🎯 Pour gérer : <strong>/cms/testimonials</strong> & <strong>/cms/videos</strong>
      </p>
    </div>
  );
}
