import { useState, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { ProductCard } from './ProductCard';
import { ProductControls } from './product-filters/ProductControls';
import { FilterSidebar } from './product-filters/FilterSidebar';
import { Breadcrumb, BreadcrumbItem } from './Breadcrumb';
import { useProducts } from '../hooks/useProducts';
import { useProductCategories } from '../hooks/useProductCategories';
import { Filters } from '../data/filters';

interface AllProductsPageProps {
  onProductClick: (product: any) => void;
  onBack: () => void;
  initialCategory?: string;
}

export function AllProductsPage({ onProductClick, onBack, initialCategory }: AllProductsPageProps) {
  const [filters, setFilters] = useState<Filters>({
    category: initialCategory || "all",
    business: "all",
    firmness: "all",
    material: "all",
    priceRange: [0, 1200],
    search: ""
  });
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('name');
  const [showFilters, setShowFilters] = useState(false);

  // Charger les produits depuis Supabase
  const { products: allProducts, loading, error } = useProducts();
  
  // Charger les catégories depuis le CMS
  const { categories: cmsCategories, loading: categoriesLoading } = useProductCategories();

  // Construire les options de filtre à partir des catégories CMS
  // Si cmsCategories est un objet groupé par business, on l'aplatit en array
  const categoriesArray = Array.isArray(cmsCategories) 
    ? cmsCategories 
    : [
        ...(cmsCategories['fima-couchage'] || []),
        ...(cmsCategories['fima-design'] || []),
        ...(cmsCategories['univers-glass'] || [])
      ];

  // Trier les catégories par ordre alphabétique (A à Z)
  const sortedCategories = [...categoriesArray].sort((a, b) => 
    a.name.localeCompare(b.name, 'fr', { sensitivity: 'base' })
  );

  // Filtrer pour n'afficher que les catégories qui ont des produits
  const categoriesWithProducts = sortedCategories.filter(cat => 
    allProducts?.some(product => product.category === cat.slug)
  );

  const dynamicCategories = [
    { name: "Tous", value: "all" },
    ...categoriesWithProducts.map(cat => ({ 
      name: cat.name,  // Utilise le nom lisible pour l'affichage
      value: cat.slug  // Utilise le slug pour matcher les produits
    }))
  ];

  // Mettre à jour les filtres quand initialCategory change
  useEffect(() => {
    if (initialCategory) {
      setFilters(prev => ({
        ...prev,
        category: initialCategory
      }));
    }
  }, [initialCategory]);

  const filteredProducts = (allProducts || []).filter(product => {
    const productName = product.name || '';
    const productDescription = product.description || '';
    const searchLower = filters.search.toLowerCase();
    
    return (
      (filters.category === "all" || product.category === filters.category) &&
      (filters.business === "all" || product.business === filters.business) &&
      (filters.firmness === "all" || !product.firmness || product.firmness === filters.firmness) &&
      (filters.material === "all" || !product.material || product.material === filters.material) &&
      (productName.toLowerCase().includes(searchLower) ||
       productDescription.toLowerCase().includes(searchLower))
    );
  }).sort((a, b) => {
    // Extraction des prix numériques pour le tri
    const aPrice = typeof a.price === 'number' ? a.price : parseInt(String(a.price).replace(/[€,\\s/m²]/g, '')) || 0;
    const bPrice = typeof b.price === 'number' ? b.price : parseInt(String(b.price).replace(/[€,\\s/m²]/g, '')) || 0;
    
    switch (sortBy) {
      case 'price-low': return aPrice - bPrice;
      case 'price-high': return bPrice - aPrice;
      case 'name': 
        const aName = a.name || '';
        const bName = b.name || '';
        return aName.localeCompare(bName);
      default: return 0;
    }
  });

  // États de chargement et d'erreur
  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-6">
          <button
            onClick={onBack}
            className="flex items-center gap-2 mb-4 text-sm hover:opacity-70"
            style={{ color: '#6E6E6E' }}
          >
            <ArrowLeft className="w-4 h-4" />
            Accueil
          </button>
          
          <div className="flex items-center justify-center py-16">
            <div className="text-center">
              <div className="w-16 h-16 border-4 rounded-full animate-spin mx-auto mb-4" 
                   style={{ 
                     borderColor: '#B5C233', 
                     borderTopColor: 'transparent' 
                   }}>
              </div>
              <p style={{ color: '#6E6E6E' }}>Chargement des produits...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-6">
          <button
            onClick={onBack}
            className="flex items-center gap-2 mb-4 text-sm hover:opacity-70"
            style={{ color: '#6E6E6E' }}
          >
            <ArrowLeft className="w-4 h-4" />
            Accueil
          </button>
          
          <div className="flex items-center justify-center py-16">
            <div className="text-center max-w-md">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-red-600 text-2xl">⚠</span>
              </div>
              <h2 className="text-xl mb-2" style={{ color: '#000000' }}>Erreur de chargement</h2>
              <p style={{ color: '#6E6E6E' }}>{error}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Déterminer le nom de la catégorie pour le breadcrumb
  const getCategoryName = () => {
    if (filters.category === 'all') return null;
    const category = categoriesWithProducts.find(cat => cat.slug === filters.category);
    return category?.name;
  };

  // Breadcrumb items
  const breadcrumbItems: BreadcrumbItem[] = [
    { label: 'Accueil', onClick: onBack },
    { label: 'Produits' },
    ...(getCategoryName() ? [{ label: getCategoryName()! }] : [])
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <Breadcrumb items={breadcrumbItems} accentColor="#B5C233" />
      
      {/* Header */}
      <div className="container mx-auto px-4 py-6">
        <button
          onClick={onBack}
          className="flex items-center gap-2 mb-4 text-sm hover:opacity-70"
          style={{ color: '#6E6E6E' }}
        >
          <ArrowLeft className="w-4 h-4" />
          Accueil
        </button>
        
        <div className="space-y-4">
          <div>
            <h1 style={{ fontFamily: 'Montserrat', color: '#000000' }}>
              {getCategoryName() || 'Tous nos produits'}
            </h1>
            <p style={{ color: '#6E6E6E' }}>
              {filteredProducts.length} produits trouvés
            </p>
            
            {/* Indicateur de développement */}
            {process.env.NODE_ENV === 'development' && (
              <div className="mt-2 inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs" style={{ backgroundColor: 'rgba(14, 165, 233, 0.1)', color: '#0EA5E9' }}>
                <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: '#B5C233' }}></div>
                Produits chargés dynamiquement depuis Supabase ({allProducts.length} total)
              </div>
            )}
          </div>
          
          <ProductControls
            filters={filters}
            setFilters={setFilters}
            viewMode={viewMode}
            setViewMode={setViewMode}
            sortBy={sortBy}
            setSortBy={setSortBy}
            showFilters={showFilters}
            setShowFilters={setShowFilters}
          />
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        <div className="flex relative">
          <FilterSidebar
            filters={filters}
            setFilters={setFilters}
            showFilters={showFilters}
            setShowFilters={setShowFilters}
            categories={dynamicCategories}
          />

          {/* Products Grid */}
          <div className="flex-1 min-w-0">
            <div className={viewMode === 'grid' 
              ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6"
              : "space-y-4"
            }>
              {filteredProducts.map((product) => {
                // Mapper le produit Supabase vers le format attendu par ProductCard
                const productCurrency = product.currency || 'FCFA';
                const mappedProduct = {
                  id: product.id,
                  image: product.images?.[0] || '',
                  title: product.name || '',
                  description: product.shortDescription || product.description || '',
                  // Passer le prix numérique et la devise source
                  price: product.price,
                  originalPrice: product.compareAtPrice || undefined,
                  discount: product.discount || undefined,
                  badge: product.badge || (product.featured ? 'FEATURED' : undefined),
                  category: product.category,
                  sourceCurrency: productCurrency,
                  isCustom: product.isCustom || false
                };
                
                return (
                  <ProductCard 
                    key={product.id}
                    {...mappedProduct}
                    onProductClick={() => onProductClick(product)}
                  />
                );
              })}
            </div>
            
            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <p style={{ color: '#6E6E6E' }}>
                  Aucun produit ne correspond à vos critères
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}