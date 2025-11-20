import { useState } from 'react';
import { ArrowLeft, Filter, Grid, List } from 'lucide-react';
import { ProductCard } from './ProductCard';
import { Breadcrumb, BreadcrumbItem } from './Breadcrumb';
import { StrapiDataWrapper, ProductsSkeleton } from './StrapiDataWrapper';
import { useProductsByCategory, useCategories } from '../hooks/useStrapiData';
import { StrapiProduct, StrapiCategory } from '../types/strapi';

interface CategoryPageProps {
  category: string;
  onProductClick: (product: any) => void;
  onBack: () => void;
}

export function CategoryPage({ category, onProductClick, onBack }: CategoryPageProps) {
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 2000]);
  const [showFilters, setShowFilters] = useState(false);

  // Breadcrumb items
  const breadcrumbItems: BreadcrumbItem[] = [
    { label: 'Accueil', onClick: onBack },
    { label: 'Produits', onClick: onBack },
    { label: category }
  ];

  // Convertir le nom de catégorie en slug pour l'API
  const categorySlug = getCategorySlug(category);

  // Récupération des données de la catégorie
  const { 
    data: categoryData, 
    loading: categoryLoading 
  } = useCategories({
    filters: { slug: { $eq: categorySlug } }
  });

  // Récupération des produits de la catégorie
  const { 
    data: products, 
    loading: productsLoading, 
    error: productsError 
  } = useProductsByCategory(categorySlug, {
    populate: ['image', 'category'],
    sort: getSortOrder(sortBy),
    pagination: { pageSize: 20 }
  });

  function getCategorySlug(categoryName: string): string {
    const slugMap: { [key: string]: string } = {
      // FIMA COUCHAGE
      'Matelas': 'matelas',
      'matelas': 'matelas',
      'Sommiers': 'sommiers',
      'sommiers': 'sommiers', 
      'Oreillers': 'oreillers',
      'oreillers': 'oreillers',
      'Linge de lit': 'linge-de-lit',
      'linge-de-lit': 'linge-de-lit',
      'Accessoires': 'accessoires-literie',
      'accessoires-literie': 'accessoires-literie',
      
      // FIMA DESIGN
      'menuiserie': 'menuiserie',
      'ameublement': 'ameublement', 
      'cuisines': 'cuisines',
      'dressings': 'dressings',
      'amenagements-mesure': 'amenagements-mesure',
      
      // UNIVERS GLASS
      'vitrerie': 'vitrerie',
      'menuiserie-aluminium': 'menuiserie-aluminium',
      'fenetres': 'fenetres',
      'portes': 'portes',
      'cloisons': 'cloisons'
    };
    return slugMap[categoryName] || categoryName.toLowerCase().replace(/\s+/g, '-');
  }

  function getSortOrder(sort: string): string[] {
    switch (sort) {
      case 'price-asc':
        return ['price:asc'];
      case 'price-desc':
        return ['price:desc'];
      case 'name':
        return ['title:asc'];
      case 'newest':
        return ['createdAt:desc'];
      case 'rating':
        return ['rating:desc'];
      default:
        return ['featured:desc', 'createdAt:desc'];
    }
  }

  // Convertir les données Strapi
  const convertStrapiProduct = (strapiProduct: StrapiProduct) => ({
    id: strapiProduct.id.toString(),
    title: strapiProduct.attributes.title,
    description: strapiProduct.attributes.shortDescription || strapiProduct.attributes.description,
    price: `${strapiProduct.attributes.price}€`,
    originalPrice: strapiProduct.attributes.originalPrice ? `${strapiProduct.attributes.originalPrice}€` : undefined,
    discount: strapiProduct.attributes.discount ? `${strapiProduct.attributes.discount}%` : undefined,
    badge: strapiProduct.attributes.bestSeller ? "BEST SELLER" : (strapiProduct.attributes.new ? "NOUVEAU" : undefined),
    image: strapiProduct.attributes.image.data.attributes.url,
    category: strapiProduct.attributes.category.data.attributes.name,
    sourceCurrency: 'EUR',
    ...strapiProduct.attributes
  });

  // Obtenir les informations de la catégorie
  const getCurrentCategory = (): StrapiCategory | null => {
    if (categoryData && Array.isArray(categoryData) && categoryData.length > 0) {
      return categoryData[0];
    }
    return null;
  };

  const currentCategory = getCurrentCategory();
  const categoryName = currentCategory?.attributes.name || category;
  const categoryIcon = currentCategory?.attributes.icon || getCategoryIcon(categorySlug);
  const categoryDescription = currentCategory?.attributes.description || getCategoryDescription(categorySlug);

  // Filtrer les produits par prix
  const filteredProducts = products && Array.isArray(products) 
    ? products.filter(product => {
        const price = product.attributes.price;
        return price >= priceRange[0] && price <= priceRange[1];
      })
    : [];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header de la page */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center py-4">
            <Breadcrumb items={breadcrumbItems} />
          </div>
        </div>
      </div>

      {/* Section héro catégorie */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 
              className="text-3xl mb-4"
              style={{ fontFamily: 'Montserrat', color: '#000000' }}
            >
              {getCategoryHeroTitle(categorySlug)}
            </h2>
            <p 
              className="text-lg mb-8 max-w-2xl mx-auto"
              style={{ color: '#6E6E6E' }}
            >
              {getCategoryHeroDescription(categorySlug)}
            </p>
            
            {/* Stats catégorie */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div 
                  className="text-2xl font-bold mb-2"
                  style={{ color: '#B5C233' }}
                >
                  {filteredProducts.length}+
                </div>
                <div style={{ color: '#6E6E6E' }}>
                  Produits disponibles
                </div>
              </div>
              {/* <div className="text-center">
                <div 
                  className="text-2xl font-bold mb-2"
                  style={{ color: '#B5C233' }}
                >
                  100
                </div>
                <div style={{ color: '#6E6E6E' }}>
                  Nuits d'essai
                </div>
              </div> */}
              <div className="text-center">
                <div 
                  className="text-2xl font-bold mb-2"
                  style={{ color: '#B5C233' }}
                >
                  10 ans
                </div>
                <div style={{ color: '#6E6E6E' }}>
                  Garantie
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filtres et tri */}
      <div className="bg-white border-b border-gray-200 sticky top-20 z-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center py-4 gap-4">
            {/* Résultats et filtres */}
            <div className="flex items-center gap-4">
              <span style={{ color: '#6E6E6E' }}>
                {filteredProducts.length} produit{filteredProducts.length > 1 ? 's' : ''}
              </span>
              
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <Filter className="w-4 h-4" />
                Filtres
              </button>
            </div>

            {/* Tri et vue */}
            <div className="flex items-center gap-4">
              {/* Sélecteur de tri */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="featured">Recommandés</option>
                <option value="newest">Plus récents</option>
                <option value="price-asc">Prix croissant</option>
                <option value="price-desc">Prix décroissant</option>
                <option value="name">Nom A-Z</option>
                <option value="rating">Mieux notés</option>
              </select>

              {/* Mode d'affichage */}
              <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                <button
                  onClick={() => setViewMode('grid')}
                  className="p-2 transition-colors"
                  style={{
                    backgroundColor: viewMode === 'grid' ? '#B5C233' : 'white',
                    color: viewMode === 'grid' ? '#6E6E6E' : '#4b5563'
                  }}
                  onMouseEnter={(e) => {
                    if (viewMode !== 'grid') e.currentTarget.style.backgroundColor = '#f9fafb';
                  }}
                  onMouseLeave={(e) => {
                    if (viewMode !== 'grid') e.currentTarget.style.backgroundColor = 'white';
                  }}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className="p-2 transition-colors"
                  style={{
                    backgroundColor: viewMode === 'list' ? '#B5C233' : 'white',
                    color: viewMode === 'list' ? '#6E6E6E' : '#4b5563'
                  }}
                  onMouseEnter={(e) => {
                    if (viewMode !== 'list') e.currentTarget.style.backgroundColor = '#f9fafb';
                  }}
                  onMouseLeave={(e) => {
                    if (viewMode !== 'list') e.currentTarget.style.backgroundColor = 'white';
                  }}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Panneau de filtres */}
          {showFilters && (
            <div className="border-t border-gray-200 py-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Filtre prix */}
                <div>
                  <h3 className="font-medium mb-3" style={{ color: '#000000' }}>
                    Prix (€)
                  </h3>
                  <div className="space-y-3">
                    <input
                      type="range"
                      min="0"
                      max="2000"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm" style={{ color: '#6E6E6E' }}>
                      <span>{priceRange[0]}€</span>
                      <span>{priceRange[1]}€</span>
                    </div>
                  </div>
                </div>

                {/* Filtre caractéristiques spécifiques à la catégorie */}
                <div>
                  <h3 className="font-medium mb-3" style={{ color: '#000000' }}>
                    {getCategoryFilterTitle(categorySlug)}
                  </h3>
                  <div className="space-y-2">
                    {getCategoryFilters(categorySlug).map((filter, index) => (
                      <label key={index} className="flex items-center gap-2">
                        <input type="checkbox" className="rounded" />
                        <span className="text-sm" style={{ color: '#6E6E6E' }}>
                          {filter}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Filtre marques/matériaux */}
                <div>
                  <h3 className="font-medium mb-3" style={{ color: '#000000' }}>
                    Matériaux
                  </h3>
                  <div className="space-y-2">
                    {['Mousse mémoire', 'Ressorts ensachés', 'Latex naturel', 'Coton bio'].map((material, index) => (
                      <label key={index} className="flex items-center gap-2">
                        <input type="checkbox" className="rounded" />
                        <span className="text-sm" style={{ color: '#6E6E6E' }}>
                          {material}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Grille de produits */}
      <div className="container mx-auto px-4 py-8">
        <StrapiDataWrapper
          loading={productsLoading}
          error={productsError}
          data={filteredProducts}
          emptyMessage={`Aucun produit ${categoryName.toLowerCase()} disponible`}
          minHeight="400px"
        >
          {productsLoading ? (
            <ProductsSkeleton count={8} />
          ) : (
            <div className={
              viewMode === 'grid' 
                ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                : "space-y-6"
            }>
              {filteredProducts.map((product) => (
                <ProductCard 
                  key={product.id} 
                  {...convertStrapiProduct(product)}
                  onProductClick={(convertedProduct) => {
                    onProductClick({
                      ...convertedProduct,
                      strapiData: product
                    });
                  }}
                />
              ))}
            </div>
          )}
        </StrapiDataWrapper>
      </div>

      {/* Section conseil catégorie */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 
              className="text-2xl mb-4"
              style={{ fontFamily: 'Montserrat', color: '#000000' }}
            >
              {getCategoryAdviceTitle(categorySlug)}
            </h3>
            <p 
              className="text-lg mb-6"
              style={{ color: '#6E6E6E' }}
            >
              {getCategoryAdvice(categorySlug)}
            </p>
            <button className="fima-btn-secondary px-8 py-3">
              Parler à un expert
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Fonctions utilitaires pour le contenu spécifique à chaque catégorie
function getCategoryIcon(categorySlug: string): string {
  switch (categorySlug) {
    // FIMA COUCHAGE
    case 'matelas':
      return '🛏️';
    case 'sommiers':
      return '🏠';
    case 'oreillers':
      return '💤';
    case 'linge-de-lit':
      return '🌿';
    case 'accessoires-literie':
      return '✨';
    
    // FIMA DESIGN  
    case 'menuiserie':
      return '🪵';
    case 'ameublement':
      return '🪑';
    case 'cuisines':
      return '👩‍🍳';
    case 'dressings':
      return '👔';
    case 'amenagements-mesure':
      return '📐';
    
    // UNIVERS GLASS
    case 'vitrerie':
      return '🪟';
    case 'menuiserie-aluminium':
      return '🔧';
    case 'fenetres':
      return '🏠';
    case 'portes':
      return '🚪';
    case 'cloisons':
      return '🧱';
    
    default:
      return '📦';
  }
}

function getCategoryDescription(categorySlug: string): string {
  switch (categorySlug) {
    // FIMA COUCHAGE
    case 'matelas':
      return 'Matelas de qualité premium pour un sommeil optimal';
    case 'sommiers':
      return 'Sommiers robustes et élégants';
    case 'oreillers':
      return 'Oreillers ergonomiques pour tous les dormeurs';
    case 'linge-de-lit':
      return 'Linge de lit de luxe en matières naturelles';
    case 'accessoires-literie':
      return 'Accessoires pour optimiser votre sommeil';
    
    // FIMA DESIGN
    case 'menuiserie':
      return 'Menuiserie sur mesure et bois noble';
    case 'ameublement':
      return 'Mobilier design pour votre intérieur';
    case 'cuisines':
      return 'Cuisines équipées sur mesure';
    case 'dressings':
      return 'Dressings et rangements personnalisés';
    case 'amenagements-mesure':
      return 'Aménagements complets sur mesure';
    
    // UNIVERS GLASS
    case 'vitrerie':
      return 'Vitrages professionnels haute performance';
    case 'menuiserie-aluminium':
      return 'Menuiserie aluminium de précision';
    case 'fenetres':
      return 'Fenêtres sur mesure toutes finitions';
    case 'portes':
      return 'Portes d\'exception et sécurisées';
    case 'cloisons':
      return 'Cloisons modulaires et design';
    
    default:
      return 'Découvrez notre sélection premium';
  }
}

function getCategoryHeroTitle(categorySlug: string): string {
  switch (categorySlug) {
    // FIMA COUCHAGE
    case 'matelas':
      return 'Trouvez le matelas parfait pour vos nuits';
    case 'sommiers':
      return 'Des sommiers de qualité pour un soutien optimal';
    case 'oreillers':
      return 'L\'oreiller idéal pour chaque dormeur';
    case 'linge-de-lit':
      return 'Linge de lit luxueux pour un confort absolu';
    case 'accessoires-literie':
      return 'Accessoires pour optimiser votre sommeil';
    
    // FIMA DESIGN
    case 'menuiserie':
      return 'Menuiserie sur mesure et bois noble';
    case 'ameublement':
      return 'Mobilier design pour votre intérieur';
    case 'cuisines':
      return 'Cuisines équipées sur mesure';
    case 'dressings':
      return 'Dressings et rangements personnalisés';
    case 'amenagements-mesure':
      return 'Aménagements complets sur mesure';
    
    // UNIVERS GLASS
    case 'vitrerie':
      return 'Vitrages professionnels haute performance';
    case 'menuiserie-aluminium':
      return 'Menuiserie aluminium de précision';
    case 'fenetres':
      return 'Fenêtres sur mesure toutes finitions';
    case 'portes':
      return 'Portes d\'exception et sécurisées';
    case 'cloisons':
      return 'Cloisons modulaires et design';
    
    default:
      return 'Découvrez notre sélection premium';
  }
}

function getCategoryHeroDescription(categorySlug: string): string {
  switch (categorySlug) {
    // FIMA COUCHAGE
    case 'matelas':
      return 'Explorez notre gamme de matelas haute qualité : mousse mémoire, ressorts ensachés, latex naturel. Chaque matelas est conçu pour offrir le meilleur soutien et confort.';
    case 'sommiers':
      return 'Complétez votre literie avec nos sommiers tapissiers, à ressorts ou électriques. Un bon sommier prolonge la durée de vie de votre matelas.';
    case 'oreillers':
      return 'Trouvez l\'oreiller parfait selon votre position de sommeil et vos préférences : mémoire de forme, duvet, ergonomique ou bio.';
    case 'linge-de-lit':
      return 'Sublimez votre chambre avec notre linge de lit premium : parures en satin, draps en bambou bio, housse de couette de luxe.';
    case 'accessoires-literie':
      return 'Optimisez votre confort avec nos accessoires : surmatelas, protège-matelas, oreillers de voyage et produits d\'entretien.';
    
    // FIMA DESIGN
    case 'menuiserie':
      return 'Découvrez notre savoir-faire en menuiserie : bois massif, chêne, noyer, finitions sur mesure. Des créations uniques pour votre intérieur.';
    case 'ameublement':
      return 'Mobilier design et fonctionnel : tables, commodes, bibliothèques. Chaque pièce est conçue pour allier esthétique et durabilité.';
    case 'cuisines':
      return 'Cuisines équipées complètes : plans de travail quartz, électroménager intégré, rangements optimisés. Votre cuisine rêvée devient réalité.';
    case 'dressings':
      return 'Dressings sur mesure : walk-in, placards intégrés, éclairage LED. Optimisez votre espace de rangement avec style.';
    case 'amenagements-mesure':
      return 'Solutions d\'aménagement complètes : bibliothèques, placards, séparations. Nous transformons vos espaces selon vos besoins.';
    
    // UNIVERS GLASS
    case 'vitrerie':
      return 'Vitrages haute performance : double vitrage, verre sécurit, isolation thermique et phonique. Solutions professionnelles pour tous projets.';
    case 'menuiserie-aluminium':
      return 'Menuiserie aluminium de précision : profilés haute qualité, finitions durables, solutions techniques innovantes.';
    case 'fenetres':
      return 'Fenêtres sur mesure : aluminium, PVC, bois. Performances thermiques et acoustiques exceptionnelles pour votre confort.';
    case 'portes':
      return 'Portes d\'entrée et intérieures : sécurité renforcée, design contemporain, isolation optimale. L\'entrée parfaite pour votre foyer.';
    case 'cloisons':
      return 'Cloisons vitrées et séparations : modulaires, amovibles, design. Optimisez vos espaces avec nos solutions innovantes.';
    
    default:
      return 'Découvrez des produits de qualité exceptionnelle pour améliorer votre quotidien.';
  }
}

function getCategoryFilterTitle(categorySlug: string): string {
  switch (categorySlug) {
    case 'matelas':
      return 'Fermeté';
    case 'sommiers':
      return 'Type';
    case 'oreillers':
      return 'Garnissage';
    case 'linge-de-lit':
      return 'Matière';
    case 'accessoires-literie':
      return 'Fonction';
    default:
      return 'Caractéristiques';
  }
}

function getCategoryFilters(categorySlug: string): string[] {
  switch (categorySlug) {
    case 'matelas':
      return ['Ferme', 'Mi-ferme', 'Moelleux', 'Très ferme'];
    case 'sommiers':
      return ['Tapissier', 'À lattes', 'Électrique', 'Coffre'];
    case 'oreillers':
      return ['Duvet', 'Synthétique', 'Mémoire de forme', 'Latex'];
    case 'linge-de-lit':
      return ['Coton', 'Lin', 'Satin', 'Bambou'];
    case 'accessoires-literie':
      return ['Protection', 'Confort', 'Entretien', 'Voyage'];
    default:
      return ['Standard', 'Premium', 'Luxe'];
  }
}

function getCategoryAdviceTitle(categorySlug: string): string {
  switch (categorySlug) {
    case 'matelas':
      return 'Besoin d\'aide pour choisir votre matelas ?';
    case 'sommiers':
      return 'Quel sommier pour votre matelas ?';
    case 'oreillers':
      return 'Comment choisir le bon oreiller ?';
    case 'linge-de-lit':
      return 'Quelle matière choisir ?';
    case 'accessoires-literie':
      return 'Optimisez votre literie';
    default:
      return 'Nos experts vous conseillent';
  }
}

function getCategoryAdvice(categorySlug: string): string {
  switch (categorySlug) {
    case 'matelas':
      return 'Nos experts vous accompagnent dans le choix de votre matelas selon votre morphologie, vos habitudes de sommeil et vos préférences de confort.';
    case 'sommiers':
      return 'Le choix du sommier est crucial pour optimiser votre confort et prolonger la durée de vie de votre matelas. Laissez-nous vous guider.';
    case 'oreillers':
      return 'Position de sommeil, problèmes cervicaux, préférences de fermeté... Nos conseillers vous aident à trouver l\'oreiller parfait.';
    case 'linge-de-lit':
      return 'Coton, lin, satin, bambou... Chaque matière a ses avantages. Découvrez celle qui vous convient le mieux avec nos experts.';
    case 'accessoires-literie':
      return 'Protège-matelas, surmatelas, oreillers ergonomiques... Complétez votre literie avec les bons accessoires pour un sommeil optimal.';
    default:
      return 'Bénéficiez de 40 ans d\'expertise pour faire le meilleur choix selon vos besoins et votre budget.';
  }
}