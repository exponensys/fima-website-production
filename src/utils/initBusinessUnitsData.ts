import { projectId, publicAnonKey } from './supabase/info';

/**
 * Teste si l'API Business Units est accessible
 */
export async function testBusinessUnitsAPI(): Promise<{ success: boolean; message: string; status?: number }> {
  try {
    console.log('🔍 Vérification de l\'existence des business units...');
    
    const response = await fetch(
      `https://${projectId}.supabase.co/functions/v1/make-server-98c6ec1c/business-units`,
      {
        headers: {
          'Authorization': `Bearer ${publicAnonKey}`,
          'Content-Type': 'application/json',
        },
      }
    );

    console.log(`📡 Status de la réponse: ${response.status}`);

    if (!response.ok) {
      return {
        success: false,
        message: `L'API répond avec le status ${response.status}. ${response.status === 404 ? 'La route n\'existe pas ou le serveur n\'a pas été redémarré.' : 'Erreur serveur.'}`,
        status: response.status
      };
    }

    const result = await response.json();
    
    if (result.success) {
      console.log('✅ API Business Units accessible et fonctionnelle');
      return {
        success: true,
        message: 'API accessible et fonctionnelle',
        status: 200
      };
    } else {
      return {
        success: false,
        message: 'API accessible mais retourne une erreur',
        status: 200
      };
    }
  } catch (error) {
    console.error('❌ Erreur lors du test de l\'API:', error);
    return {
      success: false,
      message: error instanceof Error ? error.message : 'Erreur inconnue'
    };
  }
}

const DEMO_BUSINESS_UNITS = [
  {
    id: 'fima-couchage',
    slug: 'fima-couchage',
    name: 'FIMA Couchage',
    name_fr: 'FIMA Couchage',
    name_en: 'FIMA Bedding',
    description: 'Solutions complètes pour literie professionnelle et particuliers',
    description_fr: 'Solutions complètes pour literie professionnelle et particuliers',
    description_en: 'Complete solutions for professional and residential bedding',
    icon: 'Bed',
    primary_color: '#B5C233',
    order_index: 1,
    is_active: true
  },
  {
    id: 'fima-design',
    slug: 'fima-design',
    name: 'FIMA Design',
    name_fr: 'FIMA Design',
    name_en: 'FIMA Design',
    description: 'Menuiserie et ameublement sur mesure',
    description_fr: 'Menuiserie et ameublement sur mesure',
    description_en: 'Custom carpentry and furniture',
    icon: 'Armchair',
    primary_color: '#6E6E6E',
    order_index: 2,
    is_active: true
  },
  {
    id: 'univers-glass',
    slug: 'univers-glass',
    name: 'UNIVERS GLASS',
    name_fr: 'UNIVERS GLASS',
    name_en: 'UNIVERS GLASS',
    description: 'Vitrerie et menuiserie aluminium',
    description_fr: 'Vitrerie et menuiserie aluminium',
    description_en: 'Glazing and aluminum carpentry',
    icon: 'Building2',
    primary_color: '#0EA5E9',
    order_index: 3,
    is_active: true
  }
];

/**
 * Initialise les données de démo pour les Business Units dans Supabase
 */
export async function initBusinessUnitsData(): Promise<{ success: boolean; message: string }> {
  try {
    console.log('🏢 Initialisation des Business Units de démo...');
    
    // Test de l'API d'abord
    const apiTest = await testBusinessUnitsAPI();
    if (!apiTest.success) {
      console.error('❌ L\'API n\'est pas accessible:', apiTest.message);
      return {
        success: false,
        message: `Erreur API: ${apiTest.message}. ${apiTest.status === 404 ? '\n\n⚠️ SOLUTION: Redémarrez le serveur Supabase avec "supabase functions deploy server" ou "supabase functions serve"' : ''}`
      };
    }
    
    const response = await fetch(
      `https://${projectId}.supabase.co/functions/v1/make-server-98c6ec1c/business-units`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${publicAnonKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(DEMO_BUSINESS_UNITS),
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    
    if (result.success) {
      console.log('✅ Business Units initialisés avec succès');
      return {
        success: true,
        message: '3 Business Units de démo initialisés avec succès'
      };
    } else {
      throw new Error(result.error || 'Erreur lors de l\'initialisation');
    }
  } catch (error) {
    console.error('❌ Erreur lors de l\'initialisation des Business Units:', error);
    return {
      success: false,
      message: error instanceof Error ? error.message : 'Erreur inconnue'
    };
  }
}