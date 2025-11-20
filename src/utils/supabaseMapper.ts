/**
 * Utilitaires pour mapper les données Supabase au format attendu par les composants
 */

import { ProductWithTranslation, SocialProofWithTranslation } from '../types/supabase';

/**
 * Mapper un produit Supabase vers le format Product utilisé dans l'app
 */
export const mapSupabaseProductToAppProduct = (supabaseProduct: ProductWithTranslation) => {
  return {
    id: supabaseProduct.id,
    name: supabaseProduct.translation.name,
    description: supabaseProduct.translation.description,
    price: supabaseProduct.price_fcfa, // Prix en FCFA par défaut
    priceEur: supabaseProduct.price_eur,
    priceFcfa: supabaseProduct.price_fcfa,
    category: supabaseProduct.translation.category,
    subcategory: supabaseProduct.translation.subcategory || '',
    image: supabaseProduct.images[0] || '',
    images: supabaseProduct.images,
    slug: supabaseProduct.slug,
    business: supabaseProduct.business_unit?.slug || '',
    businessName: supabaseProduct.business_unit?.translation.name || '',
    businessColor: supabaseProduct.business_unit?.primary_color || '#B5C233',
    isBestSeller: false, // À déterminer via analytics
    isNew: isProductNew(supabaseProduct.created_at),
    isB2BOnly: supabaseProduct.is_b2b_only,
    minimumOrderQty: supabaseProduct.minimum_order_qty,
    specifications: {
      ...supabaseProduct.specifications,
      ...supabaseProduct.translation.specifications_translated
    },
    rating: 0, // À implémenter via système d'évaluation
    reviewCount: 0, // À implémenter via système d'évaluation
    stock: 'in-stock', // À implémenter via système de stock
    tags: [], // À implémenter
  };
};

/**
 * Mapper une preuve sociale Supabase vers le format Testimonial
 */
export const mapSupabaseSocialProofToTestimonial = (proof: SocialProofWithTranslation) => {
  return {
    id: proof.id,
    name: proof.client_name,
    company: '', // Peut être extrait du contenu ou ajouté au schéma
    location: proof.client_location,
    rating: proof.rating,
    comment: proof.translation.content,
    project: '', // Peut être extrait du contenu
    image: proof.images[0] || '',
    is_featured: proof.is_featured,
    order_index: 0,
    created_at: proof.created_at,
    businessUnit: proof.business_unit?.slug,
    businessName: proof.business_unit?.translation.name,
    projectValue: proof.project_value,
    completionDate: proof.completion_date,
    type: proof.type
  };
};

/**
 * Mapper une preuve sociale de type case_study vers le format Project
 */
export const mapSupabaseCaseStudyToProject = (proof: SocialProofWithTranslation) => {
  return {
    id: proof.id,
    title: `${proof.client_name} - ${proof.client_location}`,
    description: proof.translation.content,
    category: proof.business_unit?.slug || 'general',
    images: proof.images,
    mainImage: proof.images[0] || '',
    client: proof.client_name,
    location: proof.client_location,
    completionDate: proof.completion_date || new Date().toISOString(),
    value: proof.project_value,
    tags: [],
    stats: {
      duration: '', // À ajouter au schéma si nécessaire
      area: '', // À ajouter au schéma si nécessaire
      team: '' // À ajouter au schéma si nécessaire
    },
    businessUnit: proof.business_unit?.slug,
    businessName: proof.business_unit?.translation.name,
    businessColor: proof.business_unit?.primary_color,
    isFeatured: proof.is_featured
  };
};

/**
 * Vérifier si un produit est "nouveau" (créé dans les 30 derniers jours)
 */
const isProductNew = (createdAt: string): boolean => {
  const productDate = new Date(createdAt);
  const thirtyDaysAgo = new Date();
  thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
  
  return productDate >= thirtyDaysAgo;
};

/**
 * Convertir un prix en fonction de la devise sélectionnée
 */
export const formatPrice = (
  priceEur: number,
  priceFcfa: number,
  currency: string = 'XOF'
): { value: number; formatted: string } => {
  if (currency === 'EUR') {
    return {
      value: priceEur,
      formatted: `${priceEur.toFixed(2)} €`
    };
  }
  
  // Par défaut, afficher en FCFA
  return {
    value: priceFcfa,
    formatted: `${Math.round(priceFcfa).toLocaleString('fr-FR')} F CFA`
  };
};

/**
 * Extraire les catégories uniques des produits
 */
export const extractUniqueCategories = (products: ProductWithTranslation[]): string[] => {
  const categories = new Set<string>();
  products.forEach(product => {
    if (product.translation.category) {
      categories.add(product.translation.category);
    }
  });
  return Array.from(categories).sort();
};

/**
 * Filtrer les produits par critères
 */
export const filterProducts = (
  products: ProductWithTranslation[],
  filters: {
    category?: string;
    businessUnit?: string;
    minPrice?: number;
    maxPrice?: number;
    searchQuery?: string;
  }
) => {
  return products.filter(product => {
    // Filtre par catégorie
    if (filters.category && product.translation.category !== filters.category) {
      return false;
    }
    
    // Filtre par unité métier
    if (filters.businessUnit && product.business_unit?.slug !== filters.businessUnit) {
      return false;
    }
    
    // Filtre par prix minimum
    if (filters.minPrice && product.price_fcfa < filters.minPrice) {
      return false;
    }
    
    // Filtre par prix maximum
    if (filters.maxPrice && product.price_fcfa > filters.maxPrice) {
      return false;
    }
    
    // Recherche textuelle
    if (filters.searchQuery) {
      const query = filters.searchQuery.toLowerCase();
      const nameMatch = product.translation.name.toLowerCase().includes(query);
      const descMatch = product.translation.description.toLowerCase().includes(query);
      const categoryMatch = product.translation.category.toLowerCase().includes(query);
      
      if (!nameMatch && !descMatch && !categoryMatch) {
        return false;
      }
    }
    
    return true;
  });
};
