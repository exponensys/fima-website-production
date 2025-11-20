import { useState, useEffect } from 'react';
import { projectId, publicAnonKey } from '../utils/supabase/info';

export interface ProductCategory {
  id: string;
  key: string;
  slug: string;
  name: string;
  icon: string;
  description: string;
  count?: string;
  business: string;
  images?: string[]; // URLs des images
  thumbnail?: string; // Image principale
  color?: string;
  order_index?: number;
  is_active?: boolean;
}

export interface ProductCategoriesByBusiness {
  'fima-couchage': ProductCategory[];
  'fima-design': ProductCategory[];
  'univers-glass': ProductCategory[];
}

// Mapper le business_unit du CMS vers le format utilisé dans l'app
const mapBusinessUnit = (unit: string): 'fima-couchage' | 'fima-design' | 'univers-glass' => {
  switch (unit) {
    case 'couchage':
      return 'fima-couchage';
    case 'design':
      return 'fima-design';
    case 'univers-glass':
      return 'univers-glass';
    default:
      return 'fima-design';
  }
};

// Données de fallback locales (utilisées uniquement si le CMS est vide)
const DEFAULT_CATEGORIES: ProductCategoriesByBusiness = {
  "fima-couchage": [
    { id: '1', key: "matelas", slug: "matelas", name: "Matelas", icon: "🛏️", description: "Ressorts, mousse, latex naturel", count: "45 modèles", business: "fima-couchage" },
    { id: '2', key: "sommiers", slug: "sommiers", name: "Sommiers", icon: "🏠", description: "Tapissiers, électriques, à lattes", count: "32 modèles", business: "fima-couchage" },
    { id: '3', key: "oreillers", slug: "oreillers", name: "Oreillers", icon: "💤", description: "Mémoire de forme, duvet, ergonomiques", count: "28 modèles", business: "fima-couchage" },
    { id: '4', key: "linge-de-lit", slug: "linge-de-lit", name: "Linge de lit", icon: "🌿", description: "Parures, draps, couettes", count: "150+ articles", business: "fima-couchage" },
    { id: '5', key: "accessoires-literie", slug: "accessoires-literie", name: "Accessoires", icon: "✨", description: "Protections, surmatelas, coussins", count: "45 articles", business: "fima-couchage" }
  ],
  "fima-design": [
    { id: '6', key: "habillement-mural", slug: "habillement-mural", name: "Habillage mural", icon: "🎨", description: "Revêtements et finitions", count: "45+ références", business: "fima-design" },
    { id: '7', key: "portes", slug: "portes", name: "Portes", icon: "🚪", description: "Portes intérieures et menuiserie", count: "50+ modèles", business: "fima-design" },
    { id: '8', key: "chambres", slug: "chambres", name: "Chambres", icon: "🛏️", description: "Mobilier pour chambres", count: "35+ modèles", business: "fima-design" },
    { id: '9', key: "cuisine", slug: "cuisine", name: "Cuisine", icon: "🍳", description: "Cuisines équipées modernes", count: "40+ modèles", business: "fima-design" },
    { id: '10', key: "dressing", slug: "dressing", name: "Dressing", icon: "👔", description: "Rangements sur mesure", count: "30+ modèles", business: "fima-design" },
    { id: '11', key: "amenagement-buanderie", slug: "amenagement-buanderie", name: "Aménagement buanderie", icon: "🧺", description: "Espaces optimisés pour buanderie", count: "12+ modèles", business: "fima-design" },
    { id: '12', key: "bureaux", slug: "bureaux", name: "Bureaux", icon: "🖥️", description: "Mobilier de bureau professionnel", count: "25+ modèles", business: "fima-design" },
    { id: '13', key: "salles-a-manger", slug: "salles-a-manger", name: "Salles à manger", icon: "🍽️", description: "Mobilier salle à manger", count: "28+ ensembles", business: "fima-design" },
    { id: '14', key: "salon", slug: "salon", name: "Salon", icon: "🛋️", description: "Mobilier de salon", count: "42+ modèles", business: "fima-design" }
  ],
  "univers-glass": [
    { id: '15', key: "vitrerie", slug: "vitrerie", name: "Vitrerie", icon: "🪟", description: "Vitres et miroirs", count: "50+ types", business: "univers-glass" },
    { id: '16', key: "menuiserie-aluminium", slug: "menuiserie-aluminium", name: "Menuiserie Aluminium", icon: "🔩", description: "Cadres et structures", count: "45+ profils", business: "univers-glass" },
    { id: '17', key: "fenetres", slug: "fenetres", name: "Fenêtres", icon: "🏠", description: "Fenêtres sur mesure", count: "60+ modèles", business: "univers-glass" },
    { id: '18', key: "portes-vitrees", slug: "portes-vitrees", name: "Portes vitrées", icon: "🚪", description: "Portes vitrées et alu", count: "55+ modèles", business: "univers-glass" },
    { id: '19', key: "cloisons", slug: "cloisons", name: "Cloisons", icon: "🧱", description: "Séparations d'espaces", count: "30+ solutions", business: "univers-glass" }
  ]
};

// Exporter les catégories par défaut pour utilisation directe
export { DEFAULT_CATEGORIES };

export const useProductCategories = (business?: 'fima-couchage' | 'fima-design' | 'univers-glass') => {
  const [categories, setCategories] = useState<ProductCategory[] | ProductCategoriesByBusiness>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  console.log('🔧 useProductCategories - business param:', business);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Charger les catégories CMS
        const response = await fetch(
          `https://${projectId}.supabase.co/functions/v1/make-server-98c6ec1c/categories`,
          {
            headers: {
              'Authorization': `Bearer ${publicAnonKey}`,
              'Content-Type': 'application/json'
            }
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        
        if (result.success && result.data && result.data.length > 0) {
          console.log('✅ useProductCategories: Catégories CMS chargées', result.data);
          
          // Convertir les catégories CMS au format ProductCategory
          const cmsCategories = result.data
            .filter((cat: any) => cat.is_active !== false)
            .map((cat: any) => ({
              id: cat.id,
              key: cat.slug,
              slug: cat.slug,
              name: cat.name,
              icon: cat.icon_emoji || '📦',
              description: cat.description || '',
              business: cat.business_unit === 'all' ? 'fima-design' : mapBusinessUnit(cat.business_unit),
              images: cat.images || [],
              thumbnail: cat.thumbnail || '',
              color: cat.color,
              order_index: cat.order_index,
              is_active: cat.is_active
            }))
            .sort((a: ProductCategory, b: ProductCategory) => {
              // Trier par order_index (les catégories sans order_index vont à la fin)
              const orderA = a.order_index ?? 9999;
              const orderB = b.order_index ?? 9999;
              return orderA - orderB;
            });

          // Organiser par business unit si pas de filtre, sinon filtrer
          if (business) {
            const filteredCategories = cmsCategories.filter((cat: ProductCategory) => cat.business === business);
            console.log(`✅ Catégories filtrées pour ${business}:`, filteredCategories);
            setCategories(filteredCategories);
          } else {
            // Grouper par business unit (les catégories sont déjà triées)
            const grouped: ProductCategoriesByBusiness = {
              'fima-couchage': cmsCategories.filter((cat: ProductCategory) => cat.business === 'fima-couchage'),
              'fima-design': cmsCategories.filter((cat: ProductCategory) => cat.business === 'fima-design'),
              'univers-glass': cmsCategories.filter((cat: ProductCategory) => cat.business === 'univers-glass')
            };
            console.log('✅ Catégories groupées par business:', grouped);
            setCategories(grouped);
          }
          
          setError(null);
        } else {
          // Si aucune catégorie CMS, utiliser les fallbacks
          console.log('⚠️ Aucune catégorie CMS trouvée, utilisation des données par défaut');
          if (business) {
            setCategories(DEFAULT_CATEGORIES[business]);
          } else {
            setCategories(DEFAULT_CATEGORIES);
          }
        }
      } catch (err) {
        console.log('⚠️ useProductCategories: Erreur lors du chargement des catégories CMS, utilisation des données locales', err instanceof Error ? err.message : err);
        // En cas d'erreur, utiliser les données locales
        if (business) {
          setCategories(DEFAULT_CATEGORIES[business]);
        } else {
          setCategories(DEFAULT_CATEGORIES);
        }
        setError(null); // Ne pas considérer comme une erreur car le fallback fonctionne
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, [business]);

  return { categories, loading, error };
};