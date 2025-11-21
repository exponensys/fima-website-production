import { useState, Suspense, lazy, Component, ReactNode, memo, useCallback, useEffect } from 'react';
import { Toaster } from 'sonner';
import { AppProvider } from './contexts/AppContext';
import { UserProvider } from './contexts/UserContext';
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ProductsSection } from "./components/ProductsSection";
import { Footer } from "./components/Footer";
import { CartModal } from "./components/CartModal";
import { FavoritesModal } from "./components/FavoritesModal";
import { QuoteRequestModal } from "./components/QuoteRequestModal";
import { ExpertConsultationModal } from "./components/ExpertConsultationModal";
import { useAutoScrollToTop } from './hooks/useScrollToTop';
import { ScrollManager } from './components/ScrollManager';
import { useNavigationPersistence } from './hooks/useNavigationPersistence';
import { useFavicon } from './hooks/useFavicon';
import { useProducts } from './hooks/useProducts';
const faviconImage = '/ab0efc907f1f64cc2226cae1503e7b66f25a4a90.png';

// Lazy load des composants lourds pour éviter les timeouts
const ProductDetailPage = lazy(() => import("./components/ProductDetailPage").then(module => ({ default: module.ProductDetailPage })));
const AllProductsPage = lazy(() => import("./components/AllProductsPage").then(module => ({ default: module.AllProductsPage })));
const CategoryPage = lazy(() => import("./components/CategoryPage").then(module => ({ default: module.CategoryPage })));
const AllProjectsPage = lazy(() => import("./components/AllProjectsPage").then(module => ({ default: module.AllProjectsPage })));
const ProjectDetailPage = lazy(() => import("./components/ProjectDetailPage").then(module => ({ default: module.ProjectDetailPage })));
const ArticleDetailPage = lazy(() => import("./components/ArticleDetailPage").then(module => ({ default: module.ArticleDetailPage })));
const CareersPage = lazy(() => import("./components/CareersPage").then(module => ({ default: module.CareersPage })));
const OurHistoryPage = lazy(() => import("./components/OurHistoryPage").then(module => ({ default: module.OurHistoryPage })));
const OurCertificationsPage = lazy(() => import("./components/OurCertificationsPage").then(module => ({ default: module.OurCertificationsPage })));
const CheckoutPage = lazy(() => import("./components/CheckoutPage").then(module => ({ default: module.CheckoutPage })));
const AuthPage = lazy(() => import("./components/AuthPage").then(module => ({ default: module.AuthPage })));
const AccountDashboard = lazy(() => import("./components/AccountDashboard").then(module => ({ default: module.AccountDashboard })));
const OrderDetailPage = lazy(() => import("./components/OrderDetailPage").then(module => ({ default: module.OrderDetailPage })));
const OrderTrackingPage = lazy(() => import("./components/OrderTrackingPage").then(module => ({ default: module.OrderTrackingPage })));

// Pages métiers lazy loaded
const FimaCouchagePage = lazy(() => import("./components/business-units/FimaCouchagePage").then(module => ({ default: module.FimaCouchagePage })));
const FimaDesignPage = lazy(() => import("./components/business-units/FimaDesignPage").then(module => ({ default: module.FimaDesignPage })));
const UniversGlassPage = lazy(() => import("./components/business-units/UniversGlassPage").then(module => ({ default: module.UniversGlassPage })));
const B2BLandingPage = lazy(() => import("./components/B2BLandingPage").then(module => ({ default: module.B2BLandingPage })));
const LargeAccountsPage = lazy(() => import("./components/LargeAccountsPage").then(module => ({ default: module.LargeAccountsPage })));
const SEOContentHub = lazy(() => import("./components/SEOContentHub").then(module => ({ default: module.SEOContentHub })));
const BrandGuidelinesPage = lazy(() => import("./components/BrandGuidelinesPage").then(module => ({ default: module.BrandGuidelinesPage })));
const CategoryDetailPage = lazy(() => import("./components/CategoryDetailPage").then(module => ({ default: module.CategoryDetailPage })));
const PrivacyPolicyPage = lazy(() => import("./components/PrivacyPolicyPage").then(module => ({ default: module.PrivacyPolicyPage })));

// CMS lazy loaded
const CMSApp = lazy(() => import("./cms/CMSApp").then(module => ({ default: module.CMSApp })));

// Composants légers chargés normalement
import { VideoStoriesSection } from "./components/VideoStoriesSection";
import { CompanyPresentationSection } from "./components/CompanyPresentationSection";
import { AboutSection } from "./components/AboutSection";
import { TeamSection } from "./components/TeamSection";
import { NewsSection } from "./components/NewsSection";
import { ProjectWithFimaSection } from "./components/ProjectWithFimaSection";
import { PartnersSection } from "./components/PartnersSection";
import { NewsletterSection } from "./components/NewsletterSection";
import { BedtimeStoriesSection } from "./components/BedtimeStoriesSection";
import { ChatWidget } from "./components/ChatWidget";
import { FimaSitemap } from "./components/FimaSitemap";
import { FimaPresentationSection } from "./components/FimaPresentationSection";
import { MobileCategoryCards } from "./components/MobileCategoryCards";
import { EmergencyFallback } from "./components/EmergencyFallback";
import { MobileLayout } from "./components/MobileLayout";
import { MobileHeader } from "./components/MobileHeader";
import { MobileHeaderV2 } from "./components/MobileHeaderV2";
import { MobileHero } from "./components/MobileHero";
// BusinessUnitsSection fusionnée dans Hero - plus besoin d'import
// SimpleDataInitializer et LoadingDiagnostic désactivés - données locales utilisées par défaut

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
  | 'privacy-policy'
  | 'cms'
  | 'admin-dashboard';

type ConsultationType = 'expert' | 'appointment';

// Composant de chargement optimisé
const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="text-center">
      <div className="w-16 h-16 border-4 rounded-full animate-spin mx-auto mb-4" 
           style={{ 
             borderColor: '#B5C233', 
             borderTopColor: 'transparent' 
           }}>
      </div>
      <p className="text-gray-600">Chargement...</p>
    </div>
  </div>
);

// Wrapper pour s'assurer que le scroll to top fonctionne avec les lazy components
const LazyComponentWrapper = ({ children }: { children: ReactNode }) => {
  return <ScrollManager>{children}</ScrollManager>;
};

// Wrapper pour les composants non-lazy qui ont besoin de scroll
const ScrollWrapper = ({ children }: { children: ReactNode }) => {
  return <ScrollManager>{children}</ScrollManager>;
};

// Composant d'erreur
const ErrorFallback = ({ error, resetErrorBoundary }: { error: Error, resetErrorBoundary: () => void }) => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="text-center max-w-md mx-auto p-6">
      <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <span className="text-red-600 text-2xl">⚠</span>
      </div>
      <h2 className="text-xl font-semibold text-gray-900 mb-2">Oops, une erreur s'est produite</h2>
      <p className="text-gray-600 mb-4">Nous avons rencontré un problème technique.</p>
      <button 
        onClick={resetErrorBoundary}
        className="px-6 py-2 rounded-lg transition-colors"
        style={{ backgroundColor: '#B5C233', color: '#6E6E6E' }}
        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#a3b030'}
        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#B5C233'}
      >
        Réessayer
      </button>
    </div>
  </div>
);

// ErrorBoundary component
class ErrorBoundary extends Component<
  { children: ReactNode; FallbackComponent: any; onError?: (error: Error, errorInfo: any) => void },
  { hasError: boolean; error: Error | null }
> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: any) {
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <this.props.FallbackComponent 
          error={this.state.error} 
          resetErrorBoundary={() => this.setState({ hasError: false, error: null })}
        />
      );
    }

    return this.props.children;
  }
}

// Composant Home mémoïsé pour éviter les re-renders
const MemoizedHomeView = memo(({ 
  onNavigate, 
  onProductClick, 
  onArticleClick, 
  onExpertClick,
  onQuoteRequest,
  onScrollToProducts,
  externalCategoryChange,
  onExternalCategoryHandled,
  isMobile
}: {
  onNavigate: (page: string, category?: string, data?: any) => void;
  onProductClick: (product: any) => void;
  onArticleClick: (article: any) => void;
  onExpertClick: (type: ConsultationType) => void;
  onQuoteRequest: () => void;
  onScrollToProducts: (category?: string) => void;
  externalCategoryChange: string;
  onExternalCategoryHandled: () => void;
  isMobile: boolean;
}) => (
  <main className="force-zero-margin" style={{ margin: 0, padding: 0 }}>
    {isMobile ? (
      /* Mobile: Cartes catégories uniquement */
      <MobileCategoryCards onNavigate={onNavigate} />
    ) : (
      /* Desktop: Hero normal */
      <div className="force-zero-margin" style={{ margin: 0, padding: 0 }}>
        <Hero 
          onNavigate={onNavigate} 
          onScrollToProducts={onScrollToProducts}
          onProductClick={onProductClick}
          externalCategoryChange={externalCategoryChange}
          onExternalCategoryHandled={onExternalCategoryHandled}
        />
      </div>
    )}
    
    {/* Section Produits - MOBILE UNIQUEMENT */}
    <div className="md:hidden">
      <ProductsSection 
        onNavigate={onNavigate}
        onProductClick={onProductClick}
        externalCategoryChange={externalCategoryChange}
        onExternalCategoryHandled={onExternalCategoryHandled}
      />
    </div>
    
    {/* <FimaPresentationSection onNavigate={onNavigate} /> */}
    <VideoStoriesSection />
    {/* <CompanyPresentationSection 
      onNavigate={onNavigate}
      onExpertClick={onExpertClick}
    /> */}
    <BedtimeStoriesSection />
    <NewsSection 
      onNavigate={onNavigate}
      onArticleClick={onArticleClick}
    />
    <ProjectWithFimaSection 
      onNavigate={onNavigate}
      onQuoteRequest={onQuoteRequest}
      onExpertClick={onExpertClick}
    />
    <PartnersSection onNavigate={onNavigate} />
    <NewsletterSection onNavigate={onNavigate} />
    {/* <AboutSection onNavigate={onNavigate} /> */}
  </main>
));

function AppContent() {
  const [currentView, setCurrentView] = useState<ViewType>('home');
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [selectedArticle, setSelectedArticle] = useState<any>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [categoryDetailSlug, setCategoryDetailSlug] = useState<string>(''); // Slug temporaire pour category-detail
  const [initialCategoryFilter, setInitialCategoryFilter] = useState<string>('');
  const [isFavoritesOpen, setIsFavoritesOpen] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isExpertModalOpen, setIsExpertModalOpen] = useState(false);
  const [consultationType, setConsultationType] = useState<ConsultationType>('expert');
  const [authInitialTab, setAuthInitialTab] = useState<'login' | 'signup'>('login');
  const [selectedOrderId, setSelectedOrderId] = useState<string>('');
  const [externalCategoryChange, setExternalCategoryChange] = useState<string>('');
  const [isMobile, setIsMobile] = useState(false);
  const [isRestoringState, setIsRestoringState] = useState(true);

  // Définir le favicon du site
  useFavicon(faviconImage);

  // Hook de persistence de navigation
  const { saveNavigationState, restoreNavigationState } = useNavigationPersistence();

  // Hook pour récupérer les produits depuis Supabase
  const { products: allSupabaseProducts, loading: loadingProducts } = useProducts();

  // Restaurer l'état de navigation au chargement depuis l'URL
  useEffect(() => {
    const path = window.location.pathname;
    const searchParams = new URLSearchParams(window.location.search);
    
    // Parse l'URL pour restaurer la vue
    if (path === '/' || path === '') {
      const restored = restoreNavigationState();
      if (restored) {
        console.log('🔄 Restauration de la navigation depuis localStorage:', restored);
        setCurrentView(restored.view);
        if (restored.selectedProduct) setSelectedProduct(restored.selectedProduct);
        if (restored.selectedProject) setSelectedProject(restored.selectedProject);
        if (restored.selectedArticle) setSelectedArticle(restored.selectedArticle);
        if (restored.selectedCategory) setSelectedCategory(restored.selectedCategory);
        if (restored.categoryDetailSlug) setCategoryDetailSlug(restored.categoryDetailSlug);
        if (restored.selectedOrderId) setSelectedOrderId(restored.selectedOrderId);
        if (restored.initialCategoryFilter) setInitialCategoryFilter(restored.initialCategoryFilter);
        
        // Initialiser l'historique avec l'état restaur
        window.history.replaceState(restored, '', '/');
      } else {
        // Initialiser avec l'état home par défaut
        const initialState = {
          view: 'home',
          selectedProduct: null,
          selectedProject: null,
          selectedArticle: null,
          selectedCategory: '',
          categoryDetailSlug: '',
          selectedOrderId: '',
          initialCategoryFilter: ''
        };
        window.history.replaceState(initialState, '', '/');
      }
    } else {
      // Restaurer depuis l'URL
      console.log('🔄 Restauration depuis URL:', path);
      const viewFromPath = path.substring(1) as ViewType; // Enlever le '/' initial
      
      if (viewFromPath && ['home', 'product', 'all-products', 'category', 'category-detail', 'fima-couchage', 'fima-design', 'univers-glass', 'b2b-solutions', 'large-accounts', 'content-hub', 'all-projects', 'project-detail', 'article-detail', 'careers', 'our-history', 'our-certifications', 'checkout', 'auth', 'login', 'signup', 'account', 'order-detail', 'order-tracking', 'sitemap', 'brand-guidelines', 'privacy-policy', 'cms', 'admin-dashboard'].includes(viewFromPath)) {
        setCurrentView(viewFromPath);
        
        // Restaurer les données associées depuis les paramètres URL
        const productId = searchParams.get('productId');
        const category = searchParams.get('category');
        const slug = searchParams.get('slug');
        const orderId = searchParams.get('orderId');
        
        if (category) setSelectedCategory(category);
        if (slug) setCategoryDetailSlug(slug);
        if (orderId) setSelectedOrderId(orderId);
        
        // Initialiser l'historique avec l'état depuis l'URL
        const urlState = {
          view: viewFromPath,
          selectedProduct: null, // Sera chargé après
          selectedProject: null,
          selectedArticle: null,
          selectedCategory: category || '',
          categoryDetailSlug: slug || '',
          selectedOrderId: orderId || '',
          initialCategoryFilter: category || ''
        };
        window.history.replaceState(urlState, '', window.location.pathname + window.location.search);
        
        // Pour les produits, on doit attendre le chargement
        if (productId && viewFromPath === 'product') {
          // Le produit sera restauré dans le useEffect suivant
        }
      }
    }
    setIsRestoringState(false);
  }, [restoreNavigationState]);

  // Écouter les événements popstate (boutons précédent/suivant du navigateur)
  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      console.log('⬅️ Navigation navigateur (back/forward):', event.state);
      
      if (event.state) {
        const { view, selectedProduct, selectedProject, selectedArticle, selectedCategory, categoryDetailSlug, selectedOrderId, initialCategoryFilter } = event.state;
        
        setCurrentView(view || 'home');
        if (selectedProduct) setSelectedProduct(selectedProduct);
        if (selectedProject) setSelectedProject(selectedProject);
        if (selectedArticle) setSelectedArticle(selectedArticle);
        if (selectedCategory) setSelectedCategory(selectedCategory);
        if (categoryDetailSlug) setCategoryDetailSlug(categoryDetailSlug);
        if (selectedOrderId) setSelectedOrderId(selectedOrderId);
        if (initialCategoryFilter) setInitialCategoryFilter(initialCategoryFilter);
      } else {
        // Si pas d'état, retour à l'accueil
        setCurrentView('home');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Recharger le produit depuis Supabase après un refresh de la page
  useEffect(() => {
    if (currentView === 'product' && selectedProduct && allSupabaseProducts && allSupabaseProducts.length > 0) {
      // Si on a un produit sélectionné et qu'on a les produits Supabase chargés
      const productId = selectedProduct.id;
      if (productId) {
        const freshProduct = allSupabaseProducts.find(p => p.id === productId);
        if (freshProduct) {
          console.log('🔄 Rechargement du produit depuis Supabase:', freshProduct.name);
          setSelectedProduct(freshProduct);
        }
      }
    }
  }, [currentView, allSupabaseProducts, loadingProducts]);

  // Sauvegarder l'état à chaque changement
  useEffect(() => {
    if (!isRestoringState) {
      saveNavigationState({
        view: currentView,
        selectedProduct,
        selectedProject,
        selectedArticle,
        selectedCategory,
        categoryDetailSlug,
        selectedOrderId,
        initialCategoryFilter
      });
    }
  }, [
    currentView, 
    selectedProduct, 
    selectedProject, 
    selectedArticle, 
    selectedCategory,
    categoryDetailSlug,
    selectedOrderId,
    initialCategoryFilter,
    saveNavigationState,
    isRestoringState
  ]);

  // Détection mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Fermer les modaux au montage
  useEffect(() => {
    setIsFavoritesOpen(false);
    setIsQuoteModalOpen(false);
    setIsExpertModalOpen(false);
  }, []);

  // Auto scroll to top à chaque changement de vue - RENFORCÉ
  useAutoScrollToTop(currentView);
  
  // Force supplémentaire de scroll vers le haut à chaque changement de vue
  useEffect(() => {
    // Scroll immédiat
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    
    // Vérifications multiples pour garantir le scroll
    const timeouts = [0, 10, 50, 100, 200].map(delay => 
      setTimeout(() => {
        if (window.scrollY > 0) {
          window.scrollTo({ top: 0, behavior: 'instant' });
          document.documentElement.scrollTop = 0;
          document.body.scrollTop = 0;
        }
      }, delay)
    );
    
    return () => timeouts.forEach(t => clearTimeout(t));
  }, [currentView]);

  // Mettre à jour le titre de la page
  useEffect(() => {
    const titles: Record<ViewType, string> = {
      'home': 'FIMA - Literie, Ameublement & Vitrerie depuis 1985',
      'product': selectedProduct?.name ? `${selectedProduct.name} - FIMA` : 'Produit - FIMA',
      'all-products': 'Tous nos produits - FIMA',
      'category': selectedCategory ? `${selectedCategory} - FIMA` : 'Catégorie - FIMA',
      'category-detail': categoryDetailSlug ? `${categoryDetailSlug} - FIMA Design` : 'Catégorie - FIMA Design',
      'fima-couchage': 'FIMA Couchage - Literie & Matelas',
      'fima-design': 'FIMA Design - Menuiserie & Ameublement',
      'univers-glass': 'Univers Glass - Vitrerie & Aluminium',
      'b2b-solutions': 'Solutions B2B - FIMA',
      'large-accounts': 'Grands Comptes - FIMA',
      'content-hub': 'Actualités & Conseils - FIMA',
      'all-projects': 'Nos Projets - FIMA',
      'project-detail': selectedProject?.title ? `${selectedProject.title} - FIMA` : 'Projet - FIMA',
      'article-detail': selectedArticle?.title ? `${selectedArticle.title} - FIMA` : 'Article - FIMA',
      'careers': 'Carrières - FIMA',
      'our-history': 'Notre Histoire - FIMA',
      'our-certifications': 'Nos Certifications - FIMA',
      'checkout': 'Panier - FIMA',
      'auth': 'Connexion - FIMA',
      'login': 'Connexion - FIMA',
      'signup': 'Inscription - FIMA',
      'account': 'Mon Compte - FIMA',
      'order-detail': 'Détails de la commande - FIMA',
      'order-tracking': 'Suivi de commande - FIMA',
      'sitemap': 'Plan du site - FIMA',
      'brand-guidelines': 'Charte Graphique - FIMA',
      'privacy-policy': 'Politique de confidentialité - FIMA',
      'cms': 'Administration - FIMA',
      'admin-dashboard': 'Tableau de bord - FIMA'
    };
    
    document.title = titles[currentView] || 'FIMA';
  }, [currentView, selectedProduct, selectedProject, selectedArticle, selectedCategory, categoryDetailSlug]);

  // Log pour debug
  useEffect(() => {
    console.log('🏠 AppContent - Vue actuelle:', currentView);
    if (currentView === 'category-detail') {
      console.log('📂 AppContent - Category detail slug:', categoryDetailSlug);
    }
  }, [currentView, categoryDetailSlug]);

  const handleExpertClick = useCallback((type: ConsultationType) => {
    setConsultationType(type);
    setIsExpertModalOpen(true);
  }, []);

  const handleQuoteRequest = useCallback(() => {
    setIsQuoteModalOpen(true);
  }, []);

  const handleScrollToProducts = useCallback((category?: string) => {
    if (category) {
      setExternalCategoryChange(category);
    } else {
      // Scroll vers la section des 3 métiers pour le slide Groupe FIMA
      setTimeout(() => {
        const productsSection = document.getElementById('products-section');
        if (productsSection) {
          productsSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 100);
    }
  }, []);

  const handleExternalCategoryHandled = useCallback(() => {
    setExternalCategoryChange('');
  }, []);

  const handleNavigation = useCallback((page: string, category?: string, data?: any) => {
    // Scroll immédiat vers le haut avant tout changement de vue
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    
    // Reset du slug de catégorie si on ne navigue pas vers category-detail
    if (page !== 'category-detail') {
      setCategoryDetailSlug('');
    }
    
    // Préparer l'état de navigation
    let newState: any = {
      view: page,
      selectedProduct: null,
      selectedProject: null,
      selectedArticle: null,
      selectedCategory: '',
      categoryDetailSlug: '',
      selectedOrderId: '',
      initialCategoryFilter: ''
    };
    
    // Construire l'URL et l'état selon la page
    let url = '/';
    
    switch (page) {
      case 'home':
        setCurrentView('home');
        newState.view = 'home';
        url = '/';
        break;
      case 'all-products':
        // Si une catégorie est fournie, la stocker pour l'initialisation du filtre
        if (category) {
          setInitialCategoryFilter(category);
          newState.initialCategoryFilter = category;
          url = `/all-products?category=${encodeURIComponent(category)}`;
        } else {
          setInitialCategoryFilter('');
          url = '/all-products';
        }
        setCurrentView('all-products');
        newState.view = 'all-products';
        break;
      case 'category':
        if (category) {
          setSelectedCategory(category);
          setCurrentView('category');
          newState.view = 'category';
          newState.selectedCategory = category;
          url = `/category?name=${encodeURIComponent(category)}`;
        }
        break;
      case 'category-detail':
        console.log('🔍 App.tsx - Navigating to category-detail with slug:', category);
        if (category && category.trim() !== '') {
          console.log('✅ App.tsx - Valid slug received:', category);
          setCategoryDetailSlug(category);
          setCurrentView('category-detail');
          newState.view = 'category-detail';
          newState.categoryDetailSlug = category;
          url = `/category-detail?slug=${encodeURIComponent(category)}`;
        } else {
          console.error('❌ App.tsx - No category slug provided for category-detail');
        }
        break;
      case 'product':
        if (data) {
          setSelectedProduct(data);
          setCurrentView('product');
          newState.view = 'product';
          newState.selectedProduct = data;
          url = `/product?id=${data.id}&name=${encodeURIComponent(data.name || '')}`;
        }
        break;
      case 'project-detail':
        if (data) {
          setSelectedProject(data);
          setCurrentView('project-detail');
          newState.view = 'project-detail';
          newState.selectedProject = data;
          url = `/project-detail?id=${data.id}`;
        }
        break;
      case 'article-detail':
        if (data) {
          setSelectedArticle(data);
          setCurrentView('article-detail');
          newState.view = 'article-detail';
          newState.selectedArticle = data;
          url = `/article-detail?id=${data.id}`;
        }
        break;
      case 'order-detail':
        if (data?.orderId) {
          setSelectedOrderId(data.orderId);
          setCurrentView('order-detail');
          newState.view = 'order-detail';
          newState.selectedOrderId = data.orderId;
          url = `/order-detail?orderId=${data.orderId}`;
        }
        break;
      case 'order-tracking':
        if (data?.orderId) {
          setSelectedOrderId(data.orderId);
          setCurrentView('order-tracking');
          newState.view = 'order-tracking';
          newState.selectedOrderId = data.orderId;
          url = `/order-tracking?orderId=${data.orderId}`;
        }
        break;
      case 'auth':
      case 'login':
        setAuthInitialTab('login');
        setCurrentView('auth');
        newState.view = 'auth';
        url = '/login';
        break;
      case 'signup':
        setAuthInitialTab('signup');
        setCurrentView('auth');
        newState.view = 'auth';
        url = '/signup';
        break;
      default:
        // Pages simples sans paramètres
        setCurrentView(page as ViewType);
        newState.view = page;
        url = `/${page}`;
    }
    
    // Ne pas pousser dans l'historique pour les modals
    if (['favorites', 'quote-request', 'expert-consultation', 'schedule-appointment'].includes(page)) {
      if (page === 'favorites') {
        setIsFavoritesOpen(true);
      } else if (page === 'quote-request') {
        setIsQuoteModalOpen(true);
      } else if (page === 'expert-consultation') {
        setConsultationType('expert');
        setIsExpertModalOpen(true);
      } else if (page === 'schedule-appointment') {
        setConsultationType('appointment');
        setIsExpertModalOpen(true);
      }
      return;
    }
    
    // Pousser le nouvel état dans l'historique du navigateur
    window.history.pushState(newState, '', url);
    console.log('📍 URL mise à jour:', url, 'État:', newState);
    
    // Reset des states selon le contexte
    if (page !== 'product') setSelectedProduct(null);
    if (page !== 'project-detail') setSelectedProject(null);
    if (page !== 'article-detail') setSelectedArticle(null);
    if (page !== 'category') setSelectedCategory('');
    
    // Force scroll vers le haut après un délai pour s'assurer que le contenu est rendu
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'instant' });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }, 0);
    
    // Double vérification après un délai plus long
    setTimeout(() => {
      if (window.scrollY > 0) {
        window.scrollTo({ top: 0, behavior: 'instant' });
      }
    }, 100);
  }, []);

  const handleProductClick = useCallback((product: any) => {
    window.scrollTo(0, 0);
    handleNavigation('product', undefined, product);
    setTimeout(() => window.scrollTo({ top: 0, behavior: 'instant' }), 0);
  }, [handleNavigation]);

  const handleProjectClick = useCallback((project: any) => {
    window.scrollTo(0, 0);
    handleNavigation('project-detail', undefined, project);
    setTimeout(() => window.scrollTo({ top: 0, behavior: 'instant' }), 0);
  }, [handleNavigation]);

  const handleArticleClick = useCallback((article: any) => {
    window.scrollTo(0, 0);
    handleNavigation('article-detail', undefined, article);
    setTimeout(() => window.scrollTo({ top: 0, behavior: 'instant' }), 0);
  }, [handleNavigation]);

  const handleBackToHome = () => {
    window.scrollTo(0, 0);
    setCurrentView('home');
    setSelectedProduct(null);
    setSelectedProject(null);
    setSelectedArticle(null);
    setSelectedCategory('');
    setTimeout(() => window.scrollTo({ top: 0, behavior: 'instant' }), 0);
  };

  const handleBackFromCategory = () => {
    window.scrollTo(0, 0);
    setCurrentView('home');
    setSelectedCategory('');
    setTimeout(() => window.scrollTo({ top: 0, behavior: 'instant' }), 0);
  };

  const handleBackFromAllProducts = () => {
    window.scrollTo(0, 0);
    setCurrentView('home');
    setTimeout(() => window.scrollTo({ top: 0, behavior: 'instant' }), 0);
  };

  const handleBackFromProjects = () => {
    window.scrollTo(0, 0);
    setCurrentView('all-projects');
    setSelectedProject(null);
    setTimeout(() => window.scrollTo({ top: 0, behavior: 'instant' }), 0);
  };

  const handleBackFromArticles = () => {
    setCurrentView('content-hub');
    setSelectedArticle(null);
  };

  const handleBackFromCheckout = () => {
    setCurrentView('home');
  };

  const handleBackFromAuth = () => {
    setCurrentView('home');
  };

  const handleBackFromAccount = () => {
    setCurrentView('home');
  };

  const handleBackFromOrderDetail = () => {
    setCurrentView('account');
    setSelectedOrderId('');
  };

  const handleBackFromOrderTracking = () => {
    setCurrentView('order-detail');
  };

  const renderCurrentView = () => {
    switch (currentView) {
      case 'home':
        return (
          <ScrollManager>
            <MemoizedHomeView
              onNavigate={handleNavigation}
              onProductClick={handleProductClick}
              onArticleClick={handleArticleClick}
              onExpertClick={handleExpertClick}
              onQuoteRequest={handleQuoteRequest}
              onScrollToProducts={handleScrollToProducts}
              externalCategoryChange={externalCategoryChange}
              onExternalCategoryHandled={handleExternalCategoryHandled}
              isMobile={isMobile}
            />
          </ScrollManager>
        );
      
      case 'product':
        return (
          <main>
            <ErrorBoundary FallbackComponent={ErrorFallback}>
              <Suspense fallback={<LoadingSpinner />}>
                <LazyComponentWrapper>
                  <ProductDetailPage 
                    product={selectedProduct} 
                    onBack={handleBackToHome}
                    onExpertClick={handleExpertClick}
                    onProductClick={(product) => setSelectedProduct(product)}
                    onViewAllProducts={() => {
                      setSelectedProduct(null);
                      setCurrentView('all-products');
                    }}
                  />
                </LazyComponentWrapper>
              </Suspense>
            </ErrorBoundary>
          </main>
        );
      
      case 'all-products':
        return (
          <main>
            <ErrorBoundary FallbackComponent={ErrorFallback}>
              <Suspense fallback={<LoadingSpinner />}>
                <LazyComponentWrapper>
                  <AllProductsPage 
                    onProductClick={handleProductClick}
                    onBack={handleBackFromAllProducts}
                    initialCategory={initialCategoryFilter}
                  />
                </LazyComponentWrapper>
              </Suspense>
            </ErrorBoundary>
          </main>
        );
      
      case 'category':
        return (
          <main>
            <ErrorBoundary FallbackComponent={ErrorFallback}>
              <Suspense fallback={<LoadingSpinner />}>
                <LazyComponentWrapper>
                  <CategoryPage 
                    category={selectedCategory}
                    onProductClick={handleProductClick}
                    onBack={handleBackFromCategory}
                  />
                </LazyComponentWrapper>
              </Suspense>
            </ErrorBoundary>
          </main>
        );

      case 'category-detail':
        // Si aucune catégorie sélectionnée, retourner à fima-design
        if (!categoryDetailSlug || categoryDetailSlug.trim() === '') {
          console.error('❌ No category slug, redirecting to fima-design');
          handleNavigation('fima-design');
          return <LoadingSpinner />;
        }
        console.log('✅ Rendering CategoryDetailPage with slug:', categoryDetailSlug);
        return (
          <main>
            <ErrorBoundary FallbackComponent={ErrorFallback}>
              <Suspense fallback={<LoadingSpinner />}>
                <LazyComponentWrapper>
                  <CategoryDetailPage 
                    category={categoryDetailSlug}
                    onNavigate={handleNavigation}
                  />
                </LazyComponentWrapper>
              </Suspense>
            </ErrorBoundary>
          </main>
        );

      case 'fima-couchage':
        return (
          <main>
            <ErrorBoundary FallbackComponent={ErrorFallback}>
              <Suspense fallback={<LoadingSpinner />}>
                <LazyComponentWrapper>
                  <FimaCouchagePage 
                    onNavigate={handleNavigation}
                    onBack={handleBackToHome}
                    onQuoteRequest={() => setIsQuoteModalOpen(true)}
                  />
                </LazyComponentWrapper>
              </Suspense>
            </ErrorBoundary>
          </main>
        );

      case 'fima-design':
        return (
          <main>
            <ErrorBoundary FallbackComponent={ErrorFallback}>
              <Suspense fallback={<LoadingSpinner />}>
                <LazyComponentWrapper>
                  <FimaDesignPage 
                    onNavigate={handleNavigation}
                    onBack={handleBackToHome}
                    onQuoteRequest={() => setIsQuoteModalOpen(true)}
                  />
                </LazyComponentWrapper>
              </Suspense>
            </ErrorBoundary>
          </main>
        );

      case 'univers-glass':
        return (
          <main>
            <ErrorBoundary FallbackComponent={ErrorFallback}>
              <Suspense fallback={<LoadingSpinner />}>
                <LazyComponentWrapper>
                  <UniversGlassPage 
                    onNavigate={handleNavigation}
                    onBack={handleBackToHome}
                    onQuoteRequest={() => setIsQuoteModalOpen(true)}
                  />
                </LazyComponentWrapper>
              </Suspense>
            </ErrorBoundary>
          </main>
        );

      case 'b2b-solutions':
        return (
          <main>
            <ErrorBoundary FallbackComponent={ErrorFallback}>
              <Suspense fallback={<LoadingSpinner />}>
                <LazyComponentWrapper>
                  <B2BLandingPage 
                    onNavigate={handleNavigation}
                    onBack={handleBackToHome}
                    onQuoteRequest={() => setIsQuoteModalOpen(true)}
                  />
                </LazyComponentWrapper>
              </Suspense>
            </ErrorBoundary>
          </main>
        );

      case 'large-accounts':
        return (
          <main>
            <ErrorBoundary FallbackComponent={ErrorFallback}>
              <Suspense fallback={<LoadingSpinner />}>
                <LazyComponentWrapper>
                  <LargeAccountsPage 
                    onNavigate={handleNavigation}
                    onBack={handleBackToHome}
                  />
                </LazyComponentWrapper>
              </Suspense>
            </ErrorBoundary>
          </main>
        );

      case 'content-hub':
        return (
          <main>
            <ErrorBoundary FallbackComponent={ErrorFallback}>
              <Suspense fallback={<LoadingSpinner />}>
                <LazyComponentWrapper>
                  <SEOContentHub 
                    onNavigate={handleNavigation}
                    onArticleClick={handleArticleClick}
                    onBack={handleBackToHome}
                  />
                </LazyComponentWrapper>
              </Suspense>
            </ErrorBoundary>
          </main>
        );

      case 'all-projects':
        return (
          <main>
            <ErrorBoundary FallbackComponent={ErrorFallback}>
              <Suspense fallback={<LoadingSpinner />}>
                <LazyComponentWrapper>
                  <AllProjectsPage 
                    onProjectClick={handleProjectClick}
                    onNavigate={handleNavigation}
                    onBack={handleBackToHome}
                  />
                </LazyComponentWrapper>
              </Suspense>
            </ErrorBoundary>
          </main>
        );

      case 'project-detail':
        return (
          <main>
            <ErrorBoundary FallbackComponent={ErrorFallback}>
              <Suspense fallback={<LoadingSpinner />}>
                <LazyComponentWrapper>
                  <ProjectDetailPage 
                    project={selectedProject}
                    onBack={handleBackFromProjects}
                    onNavigate={handleNavigation}
                  />
                </LazyComponentWrapper>
              </Suspense>
            </ErrorBoundary>
          </main>
        );

      case 'article-detail':
        return (
          <main>
            <ErrorBoundary FallbackComponent={ErrorFallback}>
              <Suspense fallback={<LoadingSpinner />}>
                <LazyComponentWrapper>
                  <ArticleDetailPage 
                    article={selectedArticle}
                    onBack={handleBackFromArticles}
                    onNavigate={handleNavigation}
                  />
                </LazyComponentWrapper>
              </Suspense>
            </ErrorBoundary>
          </main>
        );

      case 'careers':
        return (
          <main>
            <ErrorBoundary FallbackComponent={ErrorFallback}>
              <Suspense fallback={<LoadingSpinner />}>
                <LazyComponentWrapper>
                  <CareersPage 
                    onNavigate={handleNavigation}
                    onBack={handleBackToHome}
                  />
                </LazyComponentWrapper>
              </Suspense>
            </ErrorBoundary>
          </main>
        );

      case 'our-history':
        return (
          <main>
            <ErrorBoundary FallbackComponent={ErrorFallback}>
              <Suspense fallback={<LoadingSpinner />}>
                <LazyComponentWrapper>
                  <OurHistoryPage 
                    onNavigate={handleNavigation}
                    onBack={handleBackToHome}
                    onExpertClick={handleExpertClick}
                  />
                </LazyComponentWrapper>
              </Suspense>
            </ErrorBoundary>
          </main>
        );

      case 'our-certifications':
        return (
          <main>
            <ErrorBoundary FallbackComponent={ErrorFallback}>
              <Suspense fallback={<LoadingSpinner />}>
                <LazyComponentWrapper>
                  <OurCertificationsPage 
                    onNavigate={handleNavigation}
                    onBack={handleBackToHome}
                    onExpertClick={handleExpertClick}
                  />
                </LazyComponentWrapper>
              </Suspense>
            </ErrorBoundary>
          </main>
        );

      case 'checkout':
        return (
          <main className="mt-[17px] mr-[0px] mb-[0px] ml-[0px]">
            <ErrorBoundary FallbackComponent={ErrorFallback}>
              <Suspense fallback={<LoadingSpinner />}>
                <LazyComponentWrapper>
                  <CheckoutPage 
                    onBack={handleBackFromCheckout}
                    onNavigate={handleNavigation}
                  />
                </LazyComponentWrapper>
              </Suspense>
            </ErrorBoundary>
          </main>
        );

      case 'auth':
        return (
          <main>
            <ErrorBoundary FallbackComponent={ErrorFallback}>
              <Suspense fallback={<LoadingSpinner />}>
                <LazyComponentWrapper>
                  <AuthPage 
                    onBack={handleBackFromAuth}
                    onNavigate={handleNavigation}
                    initialTab={authInitialTab}
                  />
                </LazyComponentWrapper>
              </Suspense>
            </ErrorBoundary>
          </main>
        );

      case 'account':
        return (
          <main>
            <ErrorBoundary FallbackComponent={ErrorFallback}>
              <Suspense fallback={<LoadingSpinner />}>
                <LazyComponentWrapper>
                  <AccountDashboard 
                    onBack={handleBackFromAccount}
                    onNavigate={handleNavigation}
                  />
                </LazyComponentWrapper>
              </Suspense>
            </ErrorBoundary>
          </main>
        );

      case 'order-detail':
        return (
          <main>
            <ErrorBoundary FallbackComponent={ErrorFallback}>
              <Suspense fallback={<LoadingSpinner />}>
                <LazyComponentWrapper>
                  <OrderDetailPage 
                    orderId={selectedOrderId}
                    onBack={handleBackFromOrderDetail}
                    onNavigate={handleNavigation}
                  />
                </LazyComponentWrapper>
              </Suspense>
            </ErrorBoundary>
          </main>
        );

      case 'order-tracking':
        return (
          <main>
            <ErrorBoundary FallbackComponent={ErrorFallback}>
              <Suspense fallback={<LoadingSpinner />}>
                <LazyComponentWrapper>
                  <OrderTrackingPage 
                    orderId={selectedOrderId}
                    onBack={handleBackFromOrderTracking}
                    onNavigate={handleNavigation}
                  />
                </LazyComponentWrapper>
              </Suspense>
            </ErrorBoundary>
          </main>
        );

      case 'sitemap':
        return (
          <main>
            <ErrorBoundary FallbackComponent={ErrorFallback}>
              <ScrollWrapper>
                <FimaSitemap onNavigate={handleNavigation} />
              </ScrollWrapper>
            </ErrorBoundary>
          </main>
        );

      case 'brand-guidelines':
        return (
          <main>
            <ErrorBoundary FallbackComponent={ErrorFallback}>
              <Suspense fallback={<LoadingSpinner />}>
                <LazyComponentWrapper>
                  <BrandGuidelinesPage 
                    onBack={handleBackToHome}
                    onNavigate={handleNavigation}
                  />
                </LazyComponentWrapper>
              </Suspense>
            </ErrorBoundary>
          </main>
        );

      case 'privacy-policy':
        return (
          <main>
            <ErrorBoundary FallbackComponent={ErrorFallback}>
              <Suspense fallback={<LoadingSpinner />}>
                <LazyComponentWrapper>
                  <PrivacyPolicyPage 
                    onBack={handleBackToHome}
                    onNavigate={handleNavigation}
                  />
                </LazyComponentWrapper>
              </Suspense>
            </ErrorBoundary>
          </main>
        );

      case 'cms':
        return (
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Suspense fallback={<LoadingSpinner />}>
              <CMSApp onBackToSite={handleBackToHome} />
            </Suspense>
          </ErrorBoundary>
        );
      
      case 'admin-dashboard':
        return (
          <main>
            <ErrorBoundary FallbackComponent={ErrorFallback}>
              <Suspense fallback={<LoadingSpinner />}>
                <CMSApp onBackToSite={handleBackToHome} />
              </Suspense>
            </ErrorBoundary>
          </main>
        );
      
      default:
        // Fallback vers la page d'accueil pour éviter la duplication
        return (
          <ScrollManager>
            <MemoizedHomeView
              onNavigate={handleNavigation}
              onProductClick={handleProductClick}
              onArticleClick={handleArticleClick}
              onExpertClick={handleExpertClick}
              onQuoteRequest={handleQuoteRequest}
              onScrollToProducts={handleScrollToProducts}
              externalCategoryChange={externalCategoryChange}
              onExternalCategoryHandled={handleExternalCategoryHandled}
              isMobile={isMobile}
            />
          </ScrollManager>
        );
    }
  };

  return (
    <>
      {/* CMS - Rendu indépendant sans Header/Footer du site */}
      {(currentView === 'cms' || currentView === 'admin-dashboard') ? (
        <div className="min-h-screen bg-gray-100">
          {renderCurrentView()}
        </div>
      ) : (
        /* Site Web - Rendu normal avec Header/Footer */
        <div 
          className="min-h-screen bg-gray-200" 
          style={{ 
            margin: 0, 
            padding: 0, 
            display: 'flex', 
            flexDirection: 'column',
            // Anti-bounce universel
            overscrollBehavior: 'none',
            WebkitOverflowScrolling: 'touch',
          }}
        >
          {isMobile ? (
            /* Mobile: Layout ultra-simplifié SANS wrappers */
            <div 
              className="w-full bg-white"
              style={{ 
                margin: 0,
                padding: 0,
                overflow: 'visible',
                position: 'relative',
                // Anti-bounce strict
                overscrollBehavior: 'none',
                WebkitOverflowScrolling: 'touch',
              }}
            >
              <ErrorBoundary FallbackComponent={ErrorFallback}>
                <MobileHeaderV2 
                  onNavigate={handleNavigation}
                  onFavoritesClick={() => setIsFavoritesOpen(true)}
                />
                {renderCurrentView()}
                <Footer onNavigate={handleNavigation} />
              </ErrorBoundary>
            </div>
          ) : (
            /* Desktop: Layout normal */
            <div className="max-w-[1600px] mx-auto w-[calc(100%-40px)] bg-white shadow-xl my-[20px]" style={{ overflow: 'visible' }}>
              <ErrorBoundary FallbackComponent={ErrorFallback}>
                <Header 
                  onNavigate={handleNavigation}
                  onFavoritesClick={() => setIsFavoritesOpen(true)}
                  onExpertClick={handleExpertClick}
                />
                {renderCurrentView()}
                <Footer onNavigate={handleNavigation} />
              </ErrorBoundary>
            </div>
          )}
          
          {/* Global Modals and Widgets - uniquement pour le site web */}
          <CartModal onNavigate={handleNavigation} />
          <FavoritesModal 
            isOpen={isFavoritesOpen}
            onClose={() => setIsFavoritesOpen(false)}
            onProductClick={(product) => {
              setIsFavoritesOpen(false);
              handleProductClick(product);
            }}
          />
          <QuoteRequestModal 
            isOpen={isQuoteModalOpen}
            onClose={() => setIsQuoteModalOpen(false)}
          />
          <ExpertConsultationModal 
            isOpen={isExpertModalOpen}
            onClose={() => setIsExpertModalOpen(false)}
            consultationType={consultationType}
          />
          
          {/* Widgets positionnés en dehors du conteneur principal */}
          <ChatWidget />
        </div>
      )}
      
      {/* Toast notifications - global pour CMS et site */}
      <Toaster 
        position="bottom-right"
        richColors
        expand={false}
        duration={3000}
      />
    </>
  );
}

export default function App() {
  return (
    <ErrorBoundary 
      FallbackComponent={ErrorFallback}
      onError={(error, errorInfo) => {
        console.error('❌ Application Error:', error);
        console.error('📋 Error Info:', errorInfo);
      }}
    >
      <UserProvider>
        <AppProvider>
          <AppContent />
        </AppProvider>
      </UserProvider>
    </ErrorBoundary>
  );
}