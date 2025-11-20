/**
 * Images optimisées pour les catégories FIMA Couchage
 * Mapping des noms de catégories vers leurs images respectives
 */

export const fimaCouchageThumbnails: Record<string, string> = {
  // GAMME CONFORT BRODÉ
  "GAMME CONFORT BRODÉ": "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&h=600&fit=crop",
  "Gamme Confort Brodé": "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&h=600&fit=crop",
  "confort-brode": "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&h=600&fit=crop",
  
  // GAMME MÉDICALE FIMA
  "GAMME MÉDICALE FIMA": "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=600&fit=crop",
  "Gamme Médicale FIMA": "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=600&fit=crop",
  "medicale": "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=600&fit=crop",
  
  // GAMME BABYCARE FIMA
  "GAMME BABYCARE FIMA": "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=800&h=600&fit=crop",
  "Gamme BabyCare FIMA": "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=800&h=600&fit=crop",
  "babycare": "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=800&h=600&fit=crop",
  
  // COLLECTION ÉLÉGANCE UNIE COUSSINS ET TRAVERSINS
  "COLLECTION ÉLÉGANCE UNIE COUSSINS ET TRAVERSINS": "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&h=600&fit=crop",
  "Collection Élégance Unie": "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&h=600&fit=crop",
  "elegance-unie": "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&h=600&fit=crop",
  
  // GAMME THERMOCONFORT COUETTE ET HOUSSE
  "GAMME THERMOCONFORT COUETTE ET HOUSSE": "https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=800&h=600&fit=crop",
  "Gamme ThermoConfort": "https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=800&h=600&fit=crop",
  "thermoconfort": "https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=800&h=600&fit=crop",
  
  // GAMME PARURE DE LIT
  "GAMME PARURE DE LIT": "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&h=600&fit=crop",
  "Gamme Parure de Lit": "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&h=600&fit=crop",
  "parure-lit": "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&h=600&fit=crop",
};

/**
 * Obtenir l'image pour une catégorie donnée
 * @param categoryName - Nom de la catégorie
 * @returns URL de l'image ou une image par défaut
 */
export function getCouchageCategoryImage(categoryName: string): string {
  return fimaCouchageThumbnails[categoryName] || 
         "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800&h=600&fit=crop";
}
