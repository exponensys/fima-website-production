import { projectId, publicAnonKey } from './supabase/info';

/**
 * 📰 Initialise les Articles/Blog dynamiques dans Supabase
 * 
 * Cette fonction crée des articles de blog de démonstration :
 * 
 * ARTICLES CRÉÉS :
 * - Actualités FIMA (nouveautés entreprise)
 * - Conseils décoration et aménagement
 * - Tendances design et literie
 * - Innovations produits
 * - Projets réalisés
 * 
 * CARACTÉRISTIQUES :
 * - Support multilingue (FR/EN)
 * - Images featured
 * - Catégories multiples
 * - Temps de lecture
 * - Système published/draft
 * - Slugs SEO-friendly
 * 
 * @returns Promise avec le résultat de l'initialisation
 */
export async function initArticles(): Promise<{
  success: boolean;
  message?: string;
  data?: any;
  error?: string;
}> {
  try {
    console.log('📤 Envoi de la requête d\'initialisation des blogs...');
    
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
      console.log('✅ Articles initialisés avec succès !', result.data);
      return {
        success: true,
        message: `${result.data?.blogs || 0} articles créés`,
        data: result.data,
      };
    } else {
      console.error('❌ Erreur lors de l\'initialisation des articles:', result.error);
      return {
        success: false,
        error: result.error || 'Erreur inconnue',
      };
    }
  } catch (error) {
    console.error('❌ Erreur fatale lors de l\'initialisation des articles:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Erreur inconnue',
    };
  }
}