import { projectId, publicAnonKey } from './supabase/info';

/**
 * Initialise les catégories de produits par défaut dans Supabase
 * Cette fonction doit être appelée depuis le CMS avec authentification admin
 */
export async function initProductCategories(accessToken?: string): Promise<{ success: boolean; message: string; error?: string }> {
  try {
    console.log('🚀 Initialisation des catégories de produits...');

    const defaultCategories = {
      "fima-couchage": [
        { 
          key: "confort-brode", 
          name: "GAMME CONFORT BRODÉ", 
          slug: "confort-brode",
          icon: "✨", 
          description: "Matelas brodés haute qualité pour un confort optimal", 
          count: "35 modèles", 
          business: "fima-couchage" 
        },
        { 
          key: "medicale", 
          name: "GAMME MÉDICALE FIMA", 
          slug: "medicale",
          icon: "🏥", 
          description: "Solutions orthopédiques certifiées", 
          count: "28 modèles", 
          business: "fima-couchage" 
        },
        { 
          key: "babycare", 
          name: "GAMME BABYCARE FIMA", 
          slug: "babycare",
          icon: "👶", 
          description: "Literie spécialisée pour bébés et enfants", 
          count: "22 modèles", 
          business: "fima-couchage" 
        },
        { 
          key: "elegance-unie", 
          name: "COLLECTION ÉLÉGANCE UNIE COUSSINS ET TRAVERSINS", 
          slug: "elegance-unie",
          icon: "🛋️", 
          description: "Coussins et traversins design", 
          count: "45 modèles", 
          business: "fima-couchage" 
        },
        { 
          key: "thermoconfort", 
          name: "GAMME THERMOCONFORT COUETTE ET HOUSSE", 
          slug: "thermoconfort",
          icon: "🌡️", 
          description: "Couettes et housses thermorégulatrices", 
          count: "38 modèles", 
          business: "fima-couchage" 
        },
        { 
          key: "parure-lit", 
          name: "GAMME PARURE DE LIT", 
          slug: "parure-lit",
          icon: "🛏️", 
          description: "Parures complètes haut de gamme", 
          count: "120+ modèles", 
          business: "fima-couchage" 
        }
      ],
      "fima-design": [
        { 
          key: "cuisine", 
          name: "Cuisine", 
          slug: "cuisine",
          icon: "🍳", 
          description: "Cuisines équipées modernes et fonctionnelles", 
          count: "40+ modèles", 
          business: "fima-design"
        },
        { 
          key: "dressing", 
          name: "Dressing", 
          slug: "dressing",
          icon: "👔", 
          description: "Rangements sur mesure et dressings", 
          count: "35+ modèles", 
          business: "fima-design"
        },
        { 
          key: "amenagement-buanderie", 
          name: "Aménagement buanderie", 
          slug: "amenagement-buanderie",
          icon: "🧺", 
          description: "Solutions complètes pour buanderies", 
          count: "25+ modèles", 
          business: "fima-design"
        },
        { 
          key: "bureaux", 
          name: "Bureaux", 
          slug: "bureaux",
          icon: "💼", 
          description: "Mobilier de bureau professionnel", 
          count: "30+ modèles", 
          business: "fima-design"
        },
        { 
          key: "chambres", 
          name: "Chambres", 
          slug: "chambres",
          icon: "🛏️", 
          description: "Aménagements de chambres complètes", 
          count: "45+ modèles", 
          business: "fima-design"
        },
        { 
          key: "panneaux-decoratifs-interieurs", 
          name: "Panneaux décoratifs intérieurs", 
          slug: "panneaux-decoratifs-interieurs",
          icon: "🎨", 
          description: "Panneaux décoratifs pour embellir vos intérieurs", 
          count: "50+ designs", 
          business: "fima-design"
        },
        { 
          key: "portes", 
          name: "Portes", 
          slug: "portes",
          icon: "🚪", 
          description: "Portes intérieures et design", 
          count: "40+ modèles", 
          business: "fima-design"
        },
        { 
          key: "salles-a-manger", 
          name: "Salles à manger", 
          slug: "salles-a-manger",
          icon: "🍽️", 
          description: "Mobilier pour salles à manger", 
          count: "35+ ensembles", 
          business: "fima-design"
        },
        { 
          key: "salon", 
          name: "Salon", 
          slug: "salon",
          icon: "🛋️", 
          description: "Mobilier de salon contemporain", 
          count: "55+ modèles", 
          business: "fima-design"
        }
      ],
      "univers-glass": [
        { 
          key: "vitrerie", 
          name: "Vitrerie", 
          icon: "🪟", 
          description: "Vitres et miroirs", 
          count: "50+ types", 
          business: "univers-glass" 
        },
        { 
          key: "menuiserie-aluminium", 
          name: "Menuiserie Aluminium", 
          icon: "🔩", 
          description: "Cadres et structures", 
          count: "45+ profils", 
          business: "univers-glass" 
        },
        { 
          key: "fenetres", 
          name: "Fenêtres", 
          icon: "🏠", 
          description: "Fenêtres sur mesure", 
          count: "60+ modèles", 
          business: "univers-glass" 
        },
        { 
          key: "portes", 
          name: "Portes", 
          icon: "🚪", 
          description: "Portes vitrées et alu", 
          count: "55+ modèles", 
          business: "univers-glass" 
        },
        { 
          key: "cloisons", 
          name: "Cloisons", 
          icon: "🧱", 
          description: "Séparations d'espaces", 
          count: "30+ solutions", 
          business: "univers-glass" 
        }
      ]
    };

    const url = `https://${projectId}.supabase.co/functions/v1/make-server-98c6ec1c/product-categories`;
    console.log('🌐 URL de la requête:', url);
    console.log('📦 Payload:', {
      'fima-couchage': defaultCategories['fima-couchage'].length,
      'fima-design': defaultCategories['fima-design'].length,
      'univers-glass': defaultCategories['univers-glass'].length
    });

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken || publicAnonKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(defaultCategories)
    });

    console.log('📡 Réponse HTTP:', response.status, response.statusText);

    if (!response.ok) {
      const errorText = await response.text();
      console.error('❌ Détails de l\'erreur:', errorText);
      throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
    }

    const result = await response.json();

    if (result.success) {
      console.log('✅ Catégories de produits initialisées avec succès');
      return {
        success: true,
        message: 'Catégories de produits initialisées avec succès'
      };
    } else {
      throw new Error(result.error || 'Failed to initialize product categories');
    }
  } catch (error) {
    console.error('❌ Erreur lors de l\'initialisation des catégories de produits:', error);
    return {
      success: false,
      message: 'Erreur lors de l\'initialisation',
      error: error instanceof Error ? error.message : 'Unknown error'
    };
  }
}

/**
 * Récupère les catégories de produits depuis Supabase
 */
export async function getProductCategories(business?: string) {
  try {
    const url = business 
      ? `https://${projectId}.supabase.co/functions/v1/make-server-98c6ec1c/product-categories?business=${business}`
      : `https://${projectId}.supabase.co/functions/v1/make-server-98c6ec1c/product-categories`;

    const response = await fetch(url, {
      headers: {
        'Authorization': `Bearer ${publicAnonKey}`,
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();

    if (result.success) {
      return result.data;
    } else {
      throw new Error(result.error || 'Failed to fetch product categories');
    }
  } catch (error) {
    console.error('❌ Erreur lors de la récupération des catégories:', error);
    throw error;
  }
}