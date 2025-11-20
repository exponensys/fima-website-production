import { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import { projectId, publicAnonKey } from '../utils/supabase/info';
import { 
  ProductWithTranslation, 
  ProductFilters,
  LanguageCode 
} from '../types/supabase';

const supabase = createClient(
  `https://${projectId}.supabase.co`,
  publicAnonKey
);

/**
 * Hook pour récupérer les produits depuis Supabase avec traductions
 */
export const useSupabaseProducts = (filters?: ProductFilters) => {
  const [products, setProducts] = useState<ProductWithTranslation[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);

        const locale = filters?.locale || 'fr';
        
        // Construire la requête de base
        let query = supabase
          .from('products')
          .select(`
            *,
            business_units!inner (
              id,
              slug,
              primary_color,
              icon_name,
              business_units_i18n!inner (
                locale,
                name,
                description
              )
            ),
            products_i18n!inner (
              locale,
              name,
              description,
              category,
              subcategory,
              specifications_translated
            )
          `, { count: 'exact' })
          .eq('products_i18n.locale', locale)
          .eq('business_units.business_units_i18n.locale', locale);

        // Appliquer les filtres
        if (filters?.businessUnit) {
          query = query.eq('business_units.slug', filters.businessUnit);
        }

        if (filters?.category) {
          query = query.eq('products_i18n.category', filters.category);
        }

        if (filters?.minPrice) {
          query = query.gte('price_fcfa', filters.minPrice);
        }

        if (filters?.maxPrice) {
          query = query.lte('price_fcfa', filters.maxPrice);
        }

        // Pagination
        const offset = filters?.offset || 0;
        const limit = filters?.limit || 20;
        query = query.range(offset, offset + limit - 1);

        // Exécuter la requête
        const { data, error: queryError, count } = await query;

        if (queryError) {
          throw queryError;
        }

        // Transformer les données pour correspondre au type ProductWithTranslation
        const transformedProducts: ProductWithTranslation[] = (data || []).map((item: any) => {
          const productI18n = Array.isArray(item.products_i18n) 
            ? item.products_i18n[0] 
            : item.products_i18n;
          
          const businessUnitI18n = item.business_units?.business_units_i18n?.[0] || 
                                    item.business_units?.business_units_i18n;

          return {
            id: item.id,
            business_unit_id: item.business_unit_id,
            slug: item.slug,
            price_eur: item.price_eur,
            price_fcfa: item.price_fcfa,
            is_b2b_only: item.is_b2b_only,
            minimum_order_qty: item.minimum_order_qty,
            images: item.images || [],
            specifications: item.specifications || {},
            created_at: item.created_at,
            updated_at: item.updated_at,
            translation: {
              id: productI18n?.id || '',
              product_id: item.id,
              locale: productI18n?.locale || locale,
              name: productI18n?.name || '',
              description: productI18n?.description || '',
              category: productI18n?.category || '',
              subcategory: productI18n?.subcategory,
              specifications_translated: productI18n?.specifications_translated || {}
            },
            business_unit: item.business_units ? {
              id: item.business_units.id,
              slug: item.business_units.slug,
              primary_color: item.business_units.primary_color,
              icon_name: item.business_units.icon_name,
              created_at: item.business_units.created_at,
              translation: {
                id: businessUnitI18n?.id || '',
                business_unit_id: item.business_units.id,
                locale: businessUnitI18n?.locale || locale,
                name: businessUnitI18n?.name || '',
                description: businessUnitI18n?.description || ''
              }
            } : undefined
          };
        });

        setProducts(transformedProducts);
        setTotal(count || 0);
      } catch (err: any) {
        console.error('Erreur lors de la récupération des produits:', err);
        setError(err.message || 'Erreur lors du chargement des produits');
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [
    filters?.businessUnit,
    filters?.category,
    filters?.minPrice,
    filters?.maxPrice,
    filters?.offset,
    filters?.limit,
    filters?.locale
  ]);

  return { products, loading, error, total };
};

/**
 * Hook pour récupérer un seul produit par slug
 */
export const useSupabaseProduct = (slug: string, locale: LanguageCode = 'fr') => {
  const [product, setProduct] = useState<ProductWithTranslation | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      if (!slug) {
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);

        const { data, error: queryError } = await supabase
          .from('products')
          .select(`
            *,
            business_units!inner (
              id,
              slug,
              primary_color,
              icon_name,
              business_units_i18n!inner (
                locale,
                name,
                description
              )
            ),
            products_i18n!inner (
              locale,
              name,
              description,
              category,
              subcategory,
              specifications_translated
            )
          `)
          .eq('slug', slug)
          .eq('products_i18n.locale', locale)
          .eq('business_units.business_units_i18n.locale', locale)
          .single();

        if (queryError) {
          throw queryError;
        }

        if (data) {
          const productI18n = Array.isArray(data.products_i18n) 
            ? data.products_i18n[0] 
            : data.products_i18n;
          
          const businessUnitI18n = data.business_units?.business_units_i18n?.[0] || 
                                    data.business_units?.business_units_i18n;

          const transformedProduct: ProductWithTranslation = {
            id: data.id,
            business_unit_id: data.business_unit_id,
            slug: data.slug,
            price_eur: data.price_eur,
            price_fcfa: data.price_fcfa,
            is_b2b_only: data.is_b2b_only,
            minimum_order_qty: data.minimum_order_qty,
            images: data.images || [],
            specifications: data.specifications || {},
            created_at: data.created_at,
            updated_at: data.updated_at,
            translation: {
              id: productI18n?.id || '',
              product_id: data.id,
              locale: productI18n?.locale || locale,
              name: productI18n?.name || '',
              description: productI18n?.description || '',
              category: productI18n?.category || '',
              subcategory: productI18n?.subcategory,
              specifications_translated: productI18n?.specifications_translated || {}
            },
            business_unit: data.business_units ? {
              id: data.business_units.id,
              slug: data.business_units.slug,
              primary_color: data.business_units.primary_color,
              icon_name: data.business_units.icon_name,
              created_at: data.business_units.created_at,
              translation: {
                id: businessUnitI18n?.id || '',
                business_unit_id: data.business_units.id,
                locale: businessUnitI18n?.locale || locale,
                name: businessUnitI18n?.name || '',
                description: businessUnitI18n?.description || ''
              }
            } : undefined
          };

          setProduct(transformedProduct);
        }
      } catch (err: any) {
        console.error('Erreur lors de la récupération du produit:', err);
        setError(err.message || 'Erreur lors du chargement du produit');
        setProduct(null);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [slug, locale]);

  return { product, loading, error };
};
