import { projectId, publicAnonKey } from './supabase/info';

const API_BASE_URL = `https://${projectId}.supabase.co/functions/v1/make-server-98c6ec1c`;

/**
 * Initialise les video stories par défaut dans la base de données
 * À exécuter une seule fois lors de la configuration initiale
 */
export async function initVideoStoriesData(): Promise<{ success: boolean; message: string; data?: any }> {
  try {
    console.log('🎬 Initialisation des video stories par défaut...');

    const response = await fetch(`${API_BASE_URL}/init-video-stories`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${publicAnonKey}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Erreur HTTP ${response.status}: ${errorText}`);
    }

    const result = await response.json();

    if (!result.success) {
      throw new Error(result.error || 'Échec de l\'initialisation des video stories');
    }

    console.log('✅ Video stories initialisées avec succès:', result.data);
    return {
      success: true,
      message: `${result.data.videoStories} video stories initialisées avec succès`,
      data: result.data
    };

  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Erreur inconnue';
    console.error('❌ Erreur lors de l\'initialisation des video stories:', errorMessage);
    return {
      success: false,
      message: `Erreur: ${errorMessage}`
    };
  }
}

/**
 * Fonction helper pour vérifier si les video stories existent déjà
 */
export async function checkVideoStoriesExist(): Promise<boolean> {
  try {
    const response = await fetch(`${API_BASE_URL}/video-stories`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${publicAnonKey}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      return false;
    }

    const result = await response.json();
    return result.success && result.data && result.data.length > 0;
  } catch (error) {
    console.error('Erreur lors de la vérification des video stories:', error);
    return false;
  }
}