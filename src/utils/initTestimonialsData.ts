import { projectId, publicAnonKey } from './supabase/info';

/**
 * 💬 Initialise les Témoignages (Bedtime Stories) dynamiques dans Supabase
 * 
 * Cette fonction crée des témoignages clients authentiques pour chaque métier :
 * 
 * TÉMOIGNAGES CRÉÉS :
 * - FIMA Couchage : Clients satisfaits des matelas et literie
 * - FIMA Design : Retours sur projets de menuiserie et ameublement
 * - UNIVERS GLASS : Témoignages vitrerie et aluminium
 * 
 * CARACTÉRISTIQUES :
 * - Support multilingue (FR/EN)
 * - Notes étoiles (1-5)
 * - Photos clients (emoji ou URL)
 * - Localisation géographique (Abidjan, Dakar, etc.)
 * - Système featured/published
 * - Catégories par métier
 * 
 * @returns Promise avec le résultat de l'initialisation
 */
export async function initTestimonials(): Promise<{
  success: boolean;
  message?: string;
  data?: any;
  error?: string;
}> {
  try {
    console.log('📤 Envoi de la requête d\'initialisation des témoignages...');
    
    const response = await fetch(
      `https://${projectId}.supabase.co/functions/v1/make-server-98c6ec1c/init-testimonials`,
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
      console.log('✅ Témoignages initialisés avec succès !', result.data);
      return {
        success: true,
        message: `${result.data?.testimonials || 0} témoignages créés`,
        data: result.data,
      };
    } else {
      console.error('❌ Erreur lors de l\'initialisation des témoignages:', result.error);
      return {
        success: false,
        error: result.error || 'Erreur inconnue',
      };
    }
  } catch (error) {
    console.error('❌ Erreur fatale lors de l\'initialisation des témoignages:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Erreur inconnue',
    };
  }
}