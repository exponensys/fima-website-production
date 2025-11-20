import { projectId, publicAnonKey } from './supabase/info';

/**
 * Initialise les Call to Action par défaut dans Supabase KV Store
 * À exécuter une seule fois pour peupler la base de données
 */
export async function initCallToActionData() {
  const defaultCTAs = [
    {
      title: 'Demandez votre devis gratuit',
      description: 'Nos experts vous répondent en moins de 24h',
      button_text: 'Obtenir un devis',
      button_link: '/quote-request',
      button_style: 'primary',
      background_color: '#B5C233',
      text_color: '#FFFFFF',
      position: 'hero',
      is_active: true,
      order_index: 1,
    },
    {
      title: 'Consultez nos experts',
      description: 'Un accompagnement personnalisé pour votre projet',
      button_text: 'Prendre rendez-vous',
      button_link: '/expert-consultation',
      button_style: 'secondary',
      background_color: '#E30613',
      text_color: '#FFFFFF',
      position: 'footer',
      is_active: true,
      order_index: 2,
    },
    {
      title: 'Découvrez nos réalisations',
      description: "Plus de 500 projets réussis en Afrique de l'Ouest",
      button_text: 'Voir les projets',
      button_link: '/all-projects',
      button_style: 'outline',
      background_color: '#FFFFFF',
      text_color: '#000000',
      position: 'inline',
      is_active: true,
      order_index: 3,
    },
    {
      title: 'Rejoignez nos grands comptes',
      description: 'Solutions B2B pour hôtels, cliniques et entreprises',
      button_text: 'En savoir plus',
      button_link: '/large-accounts',
      button_style: 'primary',
      background_color: '#6E6E6E',
      text_color: '#FFFFFF',
      position: 'inline',
      is_active: true,
      order_index: 4,
    },
    {
      title: 'Besoin d\'aide pour choisir ?',
      description: 'Laissez-vous guider par nos experts literie',
      button_text: 'Parler à un expert',
      button_link: '/expert-consultation',
      button_style: 'secondary',
      background_color: '#B5C233',
      text_color: '#333333',
      position: 'sidebar',
      is_active: true,
      order_index: 5,
    },
  ];

  try {
    console.log('🚀 Initialisation des Call to Action...');
    
    const results = [];
    
    for (const cta of defaultCTAs) {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-98c6ec1c/call-to-actions`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${publicAnonKey}`,
          },
          body: JSON.stringify(cta),
        }
      );

      if (!response.ok) {
        throw new Error(`Erreur ${response.status}: ${response.statusText}`);
      }

      const data = await response.json();
      
      if (data.success) {
        console.log(`✅ CTA créé: ${cta.title}`);
        results.push(data.data);
      } else {
        console.error(`❌ Erreur lors de la création du CTA: ${cta.title}`, data.error);
      }
    }

    console.log(`✅ ${results.length} Call to Action initialisés avec succès`);
    return { success: true, count: results.length, data: results };
  } catch (error) {
    console.error('❌ Erreur lors de l\'initialisation des Call to Action:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Erreur inconnue' 
    };
  }
}

/**
 * Vérifie si des CTAs existent déjà dans Supabase
 */
export async function checkCallToActionData() {
  try {
    const response = await fetch(
      `https://${projectId}.supabase.co/functions/v1/make-server-98c6ec1c/call-to-actions`,
      {
        headers: {
          Authorization: `Bearer ${publicAnonKey}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Erreur ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();
    
    if (data.success && Array.isArray(data.data)) {
      console.log(`📊 ${data.data.length} Call to Action trouvés dans Supabase`);
      return { exists: data.data.length > 0, count: data.data.length, data: data.data };
    }
    
    return { exists: false, count: 0, data: [] };
  } catch (error) {
    console.error('❌ Erreur lors de la vérification des Call to Action:', error);
    return { 
      exists: false, 
      count: 0, 
      data: [],
      error: error instanceof Error ? error.message : 'Erreur inconnue' 
    };
  }
}
