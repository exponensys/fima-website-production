import { StatsCard } from '../components/StatsCard';
import { QuickInitButton } from '../components/QuickInitButton';
import { Package, FileText, ShoppingCart, Users, TrendingUp } from 'lucide-react';
import { CMSPage } from '../CMSApp';
import { useEffect, useState } from 'react';
import { useProducts } from '../../hooks/useProducts';
import { useBlogs } from '../../hooks/useBlogs';

// Adapter les blogs pour correspondre au format du CMS
const adaptBlogToArticle = (blog: any) => ({
  id: blog.id,
  title: blog.titleFr,
  excerpt: blog.summaryFr,
  category: blog.category,
  status: blog.published ? 'published' : 'draft',
  publishDate: blog.publishedDate || blog.createdAt,
  views: blog.views || 0,
  author: blog.author,
  tags: blog.tags
});

interface CMSDashboardProps {
  onNavigate: (page: CMSPage) => void;
}

interface DashboardStats {
  totalProducts: number;
  totalArticles: number;
  totalOrders: number;
  activeClients: number;
}

export function CMSDashboard({ onNavigate }: CMSDashboardProps) {
  const { products, loading: productsLoading } = useProducts(undefined, undefined, false, 0, true); // includeInactive = true pour le CMS
  const { blogs, loading: articlesLoading } = useBlogs('fr', undefined, false);
  
  const articles = blogs.map(adaptBlogToArticle);
  
  const [stats, setStats] = useState<DashboardStats>({
    totalProducts: 0,
    totalArticles: 0,
    totalOrders: 0,
    activeClients: 0
  });

  useEffect(() => {
    setStats({
      totalProducts: products.length,
      totalArticles: articles.length,
      totalOrders: 0, // À implémenter avec l'API commandes
      activeClients: 0 // À implémenter avec l'API clients
    });
  }, [products.length, articles.length]);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Tableau de bord</h1>
        <p className="text-gray-600">
          Bienvenue dans votre espace d'administration FIMA
        </p>
      </div>

      {/* Bouton d'initialisation rapide */}
      <QuickInitButton />

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Produits"
          value={productsLoading ? '...' : stats.totalProducts}
          change={`${products.length} produits au catalogue`}
          changeType="neutral"
          icon={Package}
          color="#B5C233"
        />
        <StatsCard
          title="Articles publiés"
          value={articlesLoading ? '...' : stats.totalArticles}
          change={`${articles.filter(a => a.status === 'published').length} publiés`}
          changeType="neutral"
          icon={FileText}
          color="#6E6E6E"
        />
        <StatsCard
          title="Commandes"
          value={stats.totalOrders}
          change="À implémenter"
          changeType="neutral"
          icon={ShoppingCart}
          color="#4A52A8"
        />
        <StatsCard
          title="Clients"
          value={stats.activeClients}
          change="À implémenter"
          changeType="neutral"
          icon={Users}
          color="#E30613"
        />
      </div>

      {/* Actions rapides */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900">Actions rapides</h2>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={() => onNavigate('products')}
              className="p-4 border border-gray-200 hover:border-[#B5C233] hover:bg-gray-50 transition-all text-left"
            >
              <div className="w-10 h-10 bg-[#B5C233] flex items-center justify-center mb-3">
                <Package className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Gérer produits</h3>
              <p className="text-sm text-gray-600">Voir le catalogue</p>
            </button>

            <button
              onClick={() => onNavigate('articles')}
              className="p-4 border border-gray-200 hover:border-[#B5C233] hover:bg-gray-50 transition-all text-left"
            >
              <div className="w-10 h-10 bg-[#6E6E6E] flex items-center justify-center mb-3">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Gérer articles</h3>
              <p className="text-sm text-gray-600">Voir les articles</p>
            </button>
          </div>
        </div>

        {/* Articles récents */}
        <div className="bg-white border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-900">Articles récents</h2>
          </div>
          
          {articlesLoading ? (
            <p className="text-sm text-gray-500">Chargement...</p>
          ) : articles.length === 0 ? (
            <p className="text-sm text-gray-500">Aucun article</p>
          ) : (
            <div className="space-y-3">
              {articles.slice(0, 3).map((article) => (
                <div key={article.id} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">{article.title}</p>
                    <p className="text-sm text-gray-500">
                      {new Date(article.publishDate).toLocaleDateString('fr-FR')}
                    </p>
                  </div>
                  <span 
                    className={`px-3 py-1 text-xs text-white ${
                      article.status === 'published' 
                        ? 'bg-green-600' 
                        : article.status === 'draft'
                        ? 'bg-gray-600'
                        : 'bg-blue-600'
                    }`}
                  >
                    {article.status === 'published' ? 'Publié' : article.status === 'draft' ? 'Brouillon' : 'Programmé'}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Produits récents */}
      <div className="bg-white border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-gray-900">Produits récents</h2>
          <button
            onClick={() => onNavigate('products')}
            className="text-sm text-[#B5C233] hover:underline"
          >
            Voir tout
          </button>
        </div>
        
        {productsLoading ? (
          <p className="text-sm text-gray-500">Chargement...</p>
        ) : products.length === 0 ? (
          <p className="text-sm text-gray-500">Aucun produit</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Produit</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">SKU</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Prix</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Stock</th>
                </tr>
              </thead>
              <tbody>
                {products.slice(0, 5).map((product) => (
                  <tr key={product.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm text-gray-900">{product.name}</td>
                    <td className="px-4 py-3 text-sm text-gray-600">{product.sku}</td>
                    <td className="px-4 py-3 text-sm text-gray-900">
                      {product.price.toLocaleString()} FCFA
                    </td>
                    <td className="px-4 py-3">
                      <span className={`text-sm ${
                        product.stock > (product.lowStockThreshold || 10)
                          ? 'text-green-600'
                          : 'text-red-600'
                      }`}>
                        {product.stock}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}