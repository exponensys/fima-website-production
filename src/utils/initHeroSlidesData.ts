import { projectId, publicAnonKey } from './supabase/info.tsx';

/**
 * 🎬 Initialise les Hero Slides dynamiques dans Supabase
 * 
 * Cette fonction crée 7 slides Hero avec 3 vidéos et 4 images :
 * 
 * SLIDES CRÉÉS :
 * 1. FIMA Couchage - Image (Literie premium)
 * 2. Visite Showroom - VIDÉO (Découverte des espaces)
 * 3. FIMA Design - Image (Menuiserie sur-mesure)
 * 4. Savoir-faire Artisanal - VIDÉO (Fabrication)
 * 5. UNIVERS GLASS - Image (Vitrerie & Aluminium)
 * 6. Grands Projets - VIDÉO (Hôtellerie de luxe)
 * 7. Groupe FIMA - Image (Présentation groupe)
 * 
 * CARACTÉRISTIQUES VIDÉOS :
 * - Support multilingue (FR/EN)
 * - Durée personnalisée (10-15 secondes)
 - Loop configurable
 * - Fallback sur image si vidéo non disponible
 * - Auto-play avec mute
 * 
 * @returns Promise avec le résultat de l'initialisation
 */
export async function initHeroSlides(): Promise<{
  success: boolean;
  message?: string;
  data?: any;
  error?: string;
}> {
  try {
    console.log('🎬 Initialisation des Hero Slides...');
    
    const response = await fetch(
      `https://${projectId}.supabase.co/functions/v1/make-server-4a2f605a/api/init-hero-slides`,
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
      console.log('✅ Hero Slides initialisés avec succès !');
      console.log(`📊 Total: ${result.data.total_slides} slides`);
      console.log(`🎥 Vidéos: ${result.data.video_slides}`);
      console.log(`🖼️ Images: ${result.data.image_slides}`);
      console.log('📋 Détails:', result.data.slides);
    }

    return result;
  } catch (error) {
    console.error('❌ Erreur lors de l\'initialisation des Hero Slides:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    };
  }
}

/**
 * 📋 Récupère tous les Hero Slides depuis Supabase
 * 
 * @param locale - Langue souhaitée ('fr' ou 'en')
 * @returns Promise avec la liste des slides
 */
export async function getHeroSlides(locale: 'fr' | 'en' = 'fr'): Promise<{
  success: boolean;
  data?: any[];
  error?: string;
}> {
  try {
    const response = await fetch(
      `https://${projectId}.supabase.co/functions/v1/make-server-4a2f605a/api/hero-slides?locale=${locale}`,
      {
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
    return result;
  } catch (error) {
    console.error('❌ Erreur lors de la récupération des Hero Slides:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    };
  }
}

/**
 * 🎯 Vérifie si des Hero Slides existent déjà
 * 
 * @returns Promise<boolean> - true si des slides existent
 */
export async function checkHeroSlidesExist(): Promise<boolean> {
  try {
    const result = await getHeroSlides();
    return !!(result.success && result.data && result.data.length > 0);
  } catch (error) {
    console.error('Erreur lors de la vérification des slides:', error);
    return false;
  }
}

/**
 * 🔄 Guide d'utilisation rapide
 * 
 * INITIALISATION (À faire une seule fois) :
 * ```typescript
 * import { initHeroSlides } from './utils/initHeroSlidesData';
 * 
 * // Dans votre composant ou console
 * await initHeroSlides();
 * ```
 * 
 * VÉRIFICATION :
 * ```typescript
 * import { checkHeroSlidesExist, getHeroSlides } from './utils/initHeroSlidesData';
 * 
 * const exists = await checkHeroSlidesExist();
 * if (exists) {
 *   const { data } = await getHeroSlides('fr');
 *   console.log('Slides disponibles:', data);
 * }
 * ```
 * 
 * NOTES IMPORTANTES :
 * - Les slides sont stockés dans Supabase KV Store avec le préfixe 'hero-slides:'
 * - Chaque slide a un UUID unique
 * - Les vidéos utilisent des URLs publiques (remplacer par vos propres vidéos)
 * - Le composant Hero utilise automatiquement ces données via useHeroSlides()
 */
