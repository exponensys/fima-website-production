import { useState, useEffect } from 'react';
import { strapiApi } from '../services/strapiApi';
import {
  StrapiProduct,
  StrapiCategory,
  StrapiTestimonial,
  StrapiHeroSlide,
  StrapiCollectionResponse,
  StrapiResponse,
  StrapiQueryParams
} from '../types/strapi';

// Hook générique pour les données
export function useStrapiData<T>(
  apiCall: () => Promise<StrapiCollectionResponse<T> | StrapiResponse<T>>,
  dependencies: any[] = []
) {
  const [data, setData] = useState<T | T[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await apiCall();
        
        if (isMounted) {
          // Vérifier si c'est une collection ou un élément unique
          if ('data' in response && Array.isArray(response.data)) {
            setData(response.data);
          } else if ('data' in response) {
            setData(response.data);
          }
        }
      } catch (err) {
        if (isMounted) {
          setError(err instanceof Error ? err.message : 'Une erreur est survenue');
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, dependencies);

  return { data, loading, error };
}

// Hook pour récupérer tous les produits
export function useProducts(params: StrapiQueryParams = {}) {
  return useStrapiData<StrapiProduct>(
    () => strapiApi.getProducts(params),
    [JSON.stringify(params)]
  );
}

// Hook pour récupérer un produit par ID
export function useProduct(id: number, params: StrapiQueryParams = {}) {
  return useStrapiData<StrapiProduct>(
    () => strapiApi.getProduct(id, params),
    [id, JSON.stringify(params)]
  );
}

// Hook pour récupérer un produit par slug
export function useProductBySlug(slug: string, params: StrapiQueryParams = {}) {
  return useStrapiData<StrapiProduct>(
    () => strapiApi.getProductBySlug(slug, params),
    [slug, JSON.stringify(params)]
  );
}

// Hook pour récupérer les produits par catégorie
export function useProductsByCategory(categorySlug: string, params: StrapiQueryParams = {}) {
  return useStrapiData<StrapiProduct>(
    () => strapiApi.getProductsByCategory(categorySlug, params),
    [categorySlug, JSON.stringify(params)]
  );
}

// Hook pour récupérer toutes les catégories
export function useCategories(params: StrapiQueryParams = {}) {
  return useStrapiData<StrapiCategory>(
    () => strapiApi.getCategories(params),
    [JSON.stringify(params)]
  );
}

// Hook pour récupérer les témoignages
export function useTestimonials(params: StrapiQueryParams = {}) {
  return useStrapiData<StrapiTestimonial>(
    () => strapiApi.getTestimonials(params),
    [JSON.stringify(params)]
  );
}

// Hook pour récupérer les slides du hero
export function useHeroSlides(params: StrapiQueryParams = {}) {
  return useStrapiData<StrapiHeroSlide>(
    () => strapiApi.getHeroSlides(params),
    [JSON.stringify(params)]
  );
}

// Hook pour les opérations de mutation (création, mise à jour, suppression)
export function useStrapiMutation<T, P>(
  mutationFn: (params: P) => Promise<StrapiResponse<T>>
) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const mutate = async (params: P): Promise<T | null> => {
    try {
      setLoading(true);
      setError(null);
      const response = await mutationFn(params);
      return response.data;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Une erreur est survenue');
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { mutate, loading, error };
}

// Hook pour créer une commande
export function useCreateOrder() {
  return useStrapiMutation(strapiApi.createOrder.bind(strapiApi));
}

// Hook avec pagination avancée
export function usePaginatedProducts(initialParams: StrapiQueryParams = {}) {
  const [params, setParams] = useState<StrapiQueryParams>({
    pagination: { page: 1, pageSize: 12 },
    ...initialParams
  });
  
  const { data, loading, error } = useProducts(params);
  
  const [allProducts, setAllProducts] = useState<StrapiProduct[]>([]);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    if (data && Array.isArray(data)) {
      if (params.pagination?.page === 1) {
        setAllProducts(data);
      } else {
        setAllProducts(prev => [...prev, ...data]);
      }
    }
  }, [data, params.pagination?.page]);

  const loadMore = () => {
    if (!loading && hasMore) {
      setParams(prev => ({
        ...prev,
        pagination: {
          ...prev.pagination,
          page: (prev.pagination?.page || 1) + 1
        }
      }));
    }
  };

  const updateFilters = (newFilters: StrapiQueryParams) => {
    setParams({
      ...newFilters,
      pagination: { page: 1, pageSize: 12 }
    });
    setAllProducts([]);
    setHasMore(true);
  };

  return {
    products: allProducts,
    loading,
    error,
    hasMore,
    loadMore,
    updateFilters
  };
}

// Hook pour la recherche avec debounce
export function useProductSearch(searchTerm: string, delay: number = 300) {
  const [debouncedTerm, setDebouncedTerm] = useState(searchTerm);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedTerm(searchTerm);
    }, delay);

    return () => clearTimeout(timer);
  }, [searchTerm, delay]);

  const searchParams: StrapiQueryParams = {
    filters: debouncedTerm ? {
      $or: [
        { title: { $containsi: debouncedTerm } },
        { description: { $containsi: debouncedTerm } }
      ]
    } : {},
    populate: ['image', 'category']
  };

  return useProducts(debouncedTerm ? searchParams : {});
}