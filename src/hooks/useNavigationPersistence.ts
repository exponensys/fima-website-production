import { useEffect, useCallback } from 'react';

type ViewType = 
  | 'home' 
  | 'product' 
  | 'all-products' 
  | 'category'
  | 'category-detail'
  | 'fima-couchage'
  | 'fima-design' 
  | 'univers-glass'
  | 'b2b-solutions'
  | 'large-accounts'
  | 'content-hub'
  | 'all-projects'
  | 'project-detail'
  | 'article-detail'
  | 'careers'
  | 'our-history'
  | 'our-certifications'
  | 'checkout'
  | 'auth'
  | 'login'
  | 'signup'
  | 'account'
  | 'order-detail'
  | 'order-tracking'
  | 'sitemap'
  | 'brand-guidelines'
  | 'cms';

interface NavigationState {
  view: ViewType;
  selectedProduct?: any;
  selectedProject?: any;
  selectedArticle?: any;
  selectedCategory?: string;
  categoryDetailSlug?: string;
  selectedOrderId?: string;
  initialCategoryFilter?: string;
}

const STORAGE_KEY = 'fima_navigation_state';

/**
 * Hook pour gérer la persistence de la navigation
 * - Sauvegarde l'état dans localStorage
 * - Synchronise avec l'URL du navigateur
 * - Restaure l'état lors du rechargement
 */
export function useNavigationPersistence() {
  /**
   * Sauvegarde l'état de navigation
   */
  const saveNavigationState = useCallback((state: NavigationState) => {
    try {
      // Sauvegarder dans localStorage
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
      
      // Mettre à jour l'URL sans recharger la page
      const url = getUrlFromState(state);
      if (url !== window.location.pathname + window.location.search) {
        window.history.pushState({ ...state }, '', url);
      }
    } catch (error) {
      console.error('Erreur lors de la sauvegarde de la navigation:', error);
    }
  }, []);

  /**
   * Restaure l'état de navigation depuis l'URL ou localStorage
   */
  const restoreNavigationState = useCallback((): NavigationState | null => {
    try {
      // D'abord, essayer de parser l'URL
      const urlState = getStateFromUrl();
      if (urlState) {
        return urlState;
      }

      // Sinon, utiliser localStorage
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (error) {
      console.error('Erreur lors de la restauration de la navigation:', error);
    }
    return null;
  }, []);

  /**
   * Efface l'état de navigation
   */
  const clearNavigationState = useCallback(() => {
    try {
      localStorage.removeItem(STORAGE_KEY);
      window.history.pushState({}, '', '/');
    } catch (error) {
      console.error('Erreur lors de l\'effacement de la navigation:', error);
    }
  }, []);

  /**
   * Gère le bouton retour du navigateur
   */
  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      if (event.state) {
        // L'état est déjà dans event.state, le composant parent devra le gérer
        console.log('Navigation arrière détectée:', event.state);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  return {
    saveNavigationState,
    restoreNavigationState,
    clearNavigationState
  };
}

/**
 * Convertit un état de navigation en URL
 */
function getUrlFromState(state: NavigationState): string {
  switch (state.view) {
    case 'home':
      return '/';
    case 'product':
      return `/product/${state.selectedProduct?.slug || state.selectedProduct?.id || ''}`;
    case 'all-products':
      return state.initialCategoryFilter 
        ? `/products?category=${encodeURIComponent(state.initialCategoryFilter)}`
        : '/products';
    case 'category':
      return `/category/${encodeURIComponent(state.selectedCategory || '')}`;
    case 'category-detail':
      return `/category-detail/${encodeURIComponent(state.categoryDetailSlug || '')}`;
    case 'fima-couchage':
      return '/fima-couchage';
    case 'fima-design':
      return '/fima-design';
    case 'univers-glass':
      return '/univers-glass';
    case 'b2b-solutions':
      return '/b2b-solutions';
    case 'large-accounts':
      return '/large-accounts';
    case 'content-hub':
      return '/content-hub';
    case 'all-projects':
      return '/projects';
    case 'project-detail':
      return `/project/${state.selectedProject?.slug || state.selectedProject?.id || ''}`;
    case 'article-detail':
      return `/article/${state.selectedArticle?.slug || state.selectedArticle?.id || ''}`;
    case 'careers':
      return '/careers';
    case 'our-history':
      return '/our-history';
    case 'our-certifications':
      return '/our-certifications';
    case 'checkout':
      return '/checkout';
    case 'auth':
    case 'login':
      return '/login';
    case 'signup':
      return '/signup';
    case 'account':
      return '/account';
    case 'order-detail':
      return `/order/${state.selectedOrderId || ''}`;
    case 'order-tracking':
      return `/order-tracking/${state.selectedOrderId || ''}`;
    case 'sitemap':
      return '/sitemap';
    case 'brand-guidelines':
      return '/brand-guidelines';
    case 'cms':
      return '/cms';
    default:
      return '/';
  }
}

/**
 * Parse l'URL pour extraire l'état de navigation
 */
function getStateFromUrl(): NavigationState | null {
  const path = window.location.pathname;
  const params = new URLSearchParams(window.location.search);

  // Home
  if (path === '/' || path === '') {
    return { view: 'home' };
  }

  // Product detail
  if (path.startsWith('/product/')) {
    const id = path.replace('/product/', '');
    if (id) {
      // On ne peut pas restaurer le produit complet depuis l'URL
      // Le composant devra le charger depuis l'ID
      return { view: 'product', selectedProduct: { id } };
    }
  }

  // All products
  if (path === '/products') {
    const category = params.get('category');
    return { 
      view: 'all-products',
      initialCategoryFilter: category || undefined
    };
  }

  // Category
  if (path.startsWith('/category/') && !path.startsWith('/category-detail/')) {
    const category = decodeURIComponent(path.replace('/category/', ''));
    return { view: 'category', selectedCategory: category };
  }

  // Category detail
  if (path.startsWith('/category-detail/')) {
    const slug = decodeURIComponent(path.replace('/category-detail/', ''));
    return { view: 'category-detail', categoryDetailSlug: slug };
  }

  // Business units
  if (path === '/fima-couchage') return { view: 'fima-couchage' };
  if (path === '/fima-design') return { view: 'fima-design' };
  if (path === '/univers-glass') return { view: 'univers-glass' };
  if (path === '/b2b-solutions') return { view: 'b2b-solutions' };
  if (path === '/large-accounts') return { view: 'large-accounts' };

  // Content
  if (path === '/content-hub') return { view: 'content-hub' };
  if (path === '/projects') return { view: 'all-projects' };
  
  if (path.startsWith('/project/')) {
    const id = path.replace('/project/', '');
    return { view: 'project-detail', selectedProject: { id } };
  }
  
  if (path.startsWith('/article/')) {
    const id = path.replace('/article/', '');
    return { view: 'article-detail', selectedArticle: { id } };
  }

  // Company pages
  if (path === '/careers') return { view: 'careers' };
  if (path === '/our-history') return { view: 'our-history' };
  if (path === '/our-certifications') return { view: 'our-certifications' };

  // Auth & Account
  if (path === '/login') return { view: 'login' };
  if (path === '/signup') return { view: 'signup' };
  if (path === '/account') return { view: 'account' };
  if (path === '/checkout') return { view: 'checkout' };

  // Orders
  if (path.startsWith('/order/') && !path.startsWith('/order-tracking/')) {
    const orderId = path.replace('/order/', '');
    return { view: 'order-detail', selectedOrderId: orderId };
  }
  
  if (path.startsWith('/order-tracking/')) {
    const orderId = path.replace('/order-tracking/', '');
    return { view: 'order-tracking', selectedOrderId: orderId };
  }

  // Other pages
  if (path === '/sitemap') return { view: 'sitemap' };
  if (path === '/brand-guidelines') return { view: 'brand-guidelines' };
  if (path === '/cms' || path.startsWith('/cms/')) return { view: 'cms' };

  return null;
}
