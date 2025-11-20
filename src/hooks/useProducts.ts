import { useState, useEffect } from 'react';
import { projectId, publicAnonKey } from '../utils/supabase/info';

// Types pour les variations de produits
export interface ProductVariation {
  id: string;
  name: string; // ex: "1 place (90x190 cm)"
  price: number;
  sku?: string; // SKU spécifique à la variation
  stock?: number;
  compareAtPrice?: number;
}

// Types pour les produits
export interface Product {
  id: string;
  name: string;
  sku: string;
  category: string;
  business: string; // fima-couchage, fima-design, univers-glass
  price: number;
  compareAtPrice?: number;
  currency?: string; // 'FCFA', 'EUR', 'USD' - devise dans laquelle le prix est stocké
  stock: number;
  lowStockThreshold?: number;
  unit: string; // 'pièce', 'm²', 'ml', etc.
  description: string;
  shortDescription?: string;
  tagline?: string; // Phrase accrocheuse du produit
  images: string[];
  tags?: string[];
  featured?: boolean;
  badge?: string | null;
  discount?: string | null;
  
  // Nouveaux champs pour les onglets de détail produit
  features?: string; // Caractéristiques techniques (HTML du RichTextEditor)
  benefits?: string[]; // Bénéfices sélectionnés (multiselect)
  isCustom?: boolean; // Produit sur mesure (prix sur devis)
  
  // Variations de produit (ex: différentes tailles avec prix différents)
  variations?: ProductVariation[];
  
  // Attributs spécifiques métier
  firmness?: string; // Pour matelas: 'Ferme', 'Médium', 'Moelleux'
  material?: string; // 'Ressorts', 'Latex', 'Mémoire de forme', 'Bois', etc.
  size?: string[]; // Tailles disponibles
  specifications?: Record<string, any>; // Spécifications techniques personnalisées
  
  // Gestion
  status: 'active' | 'inactive' | 'out-of-stock' | 'out_of_stock';
  seo?: {
    title?: string;
    description?: string;
    keywords?: string[];
  };
  
  createdAt: string;
  updatedAt?: string;
}

const API_BASE_URL = `https://${projectId}.supabase.co/functions/v1/make-server-98c6ec1c`;

/**
 * Hook pour récupérer les produits depuis l'API backend
 * @param business - Métier optionnel pour filtrer
 * @param category - Catégorie optionnelle pour filtrer
 * @param featuredOnly - Afficher uniquement les produits featured
 * @param refreshKey - Clé pour forcer le rafraîchissement
 * @param includeInactive - Inclure les produits inactifs (pour le CMS uniquement)
 */
export const useProducts = (
  business?: string,
  category?: string,
  featuredOnly: boolean = false,
  refreshKey: number = 0,
  includeInactive: boolean = false
) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);

        const url = new URL(`${API_BASE_URL}/products`);
        
        // Ajouter les paramètres de filtrage
        if (business && business !== 'all') {
          url.searchParams.append('business', business);
        }
        if (category && category !== 'all') {
          url.searchParams.append('category', category);
        }
        if (featuredOnly) {
          url.searchParams.append('featured', 'true');
        }
        
        const response = await fetch(url.toString(), {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${publicAnonKey}`,
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          const errorText = await response.text().catch(() => response.statusText);
          console.error(`HTTP ${response.status}: ${errorText}`);
          throw new Error(`Erreur HTTP ${response.status}`);
        }

        const result = await response.json();
        
        if (!result.success) {
          throw new Error(result.error || 'Erreur lors du chargement des produits');
        }

        let productsData: Product[] = result.data || [];

        // Filtrer les produits actifs uniquement (sauf si includeInactive est true)
        // includeInactive = true pour le CMS, false pour la boutique
        if (!includeInactive) {
          productsData = productsData.filter(p => p.status === 'active');
        }

        // Trier par featured first, puis par nom
        productsData.sort((a, b) => {
          // Featured first
          if (a.featured && !b.featured) return -1;
          if (!a.featured && b.featured) return 1;
          
          // Then by name
          return a.name.localeCompare(b.name);
        });

        setProducts(productsData);
        setError(null);
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Erreur inconnue';
        console.error('Error fetching products:', errorMessage);
        
        // En mode développement, retourner un tableau vide plutôt qu'une erreur
        // pour éviter de bloquer l'interface
        setError(errorMessage);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [business, category, featuredOnly, refreshKey, includeInactive]);

  return { products, loading, error };
};

/**
 * Hook pour récupérer un produit par son SKU
 * @param sku - SKU du produit
 */
export const useProduct = (sku: string) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(`${API_BASE_URL}/products/${sku}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${publicAnonKey}`,
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error(`Erreur lors du chargement du produit: ${response.statusText}`);
        }

        const result = await response.json();
        
        if (!result.success) {
          throw new Error(result.error || 'Produit non trouvé');
        }

        setProduct(result.data);
      } catch (err) {
        console.error('Error fetching product:', err);
        setError(err instanceof Error ? err.message : 'Erreur inconnue');
        setProduct(null);
      } finally {
        setLoading(false);
      }
    };

    if (sku) {
      fetchProduct();
    }
  }, [sku]);

  return { product, loading, error };
};

/**
 * Hook pour créer ou mettre à jour un produit
 */
export const useProductMutation = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const createProduct = async (productData: Omit<Product, 'id' | 'createdAt'>) => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(`${API_BASE_URL}/products`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${publicAnonKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(productData),
      });

      if (!response.ok) {
        throw new Error(`Erreur lors de la création du produit: ${response.statusText}`);
      }

      const result = await response.json();
      
      if (!result.success) {
        throw new Error(result.error || 'Erreur lors de la création du produit');
      }

      return { success: true, data: result.data };
    } catch (err) {
      console.error('Error creating product:', err);
      const errorMessage = err instanceof Error ? err.message : 'Erreur inconnue';
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  };

  const updateProduct = async (id: string, productData: Partial<Product>) => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(`${API_BASE_URL}/products/${id}`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${publicAnonKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(productData),
      });

      if (!response.ok) {
        throw new Error(`Erreur lors de la mise à jour du produit: ${response.statusText}`);
      }

      const result = await response.json();
      
      if (!result.success) {
        throw new Error(result.error || 'Erreur lors de la mise à jour du produit');
      }

      return { success: true, data: result.data };
    } catch (err) {
      console.error('Error updating product:', err);
      const errorMessage = err instanceof Error ? err.message : 'Erreur inconnue';
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  };

  const deleteProduct = async (id: string) => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(`${API_BASE_URL}/products/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${publicAnonKey}`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`Erreur lors de la suppression du produit: ${response.statusText}`);
      }

      const result = await response.json();
      
      if (!result.success) {
        throw new Error(result.error || 'Erreur lors de la suppression du produit');
      }

      return { success: true };
    } catch (err) {
      console.error('Error deleting product:', err);
      const errorMessage = err instanceof Error ? err.message : 'Erreur inconnue';
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  };

  return { createProduct, updateProduct, deleteProduct, loading, error };
};