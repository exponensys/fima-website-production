import { Calendar, ArrowRight, User, Filter, RefreshCw } from 'lucide-react';
import { useState, useEffect } from 'react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { projectId, publicAnonKey } from '../../utils/supabase/info';

interface NewsSectionProps {
  onNavigate?: (page: string) => void;
  onArticleClick?: (article: any) => void;
}

interface Article {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
  category: string;
  readTime: string;
}

const categories = [
  { name: 'Tous', value: 'all' },
  { name: 'Tendances', value: 'tendances' },
  { name: 'Innovation', value: 'innovation' },
  { name: 'Projets', value: 'projets' },
  { name: 'Actualités', value: 'actualites' }
];

export function EnhancedNewsSection({ onNavigate, onArticleClick }: NewsSectionProps) {
  const [articles, setArticles] = useState<Article[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showAllArticles, setShowAllArticles] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchArticles();
  }, [selectedCategory]);

  const fetchArticles = async () => {
    try {
      setLoading(true);
      setError(null);
      const url = new URL(`https://${projectId}.supabase.co/functions/v1/make-server-98c6ec1c/articles`);
      if (selectedCategory !== 'all') {
        url.searchParams.set('category', selectedCategory);
      }

      const response = await fetch(url.toString(), {
        headers: {
          'Authorization': `Bearer ${publicAnonKey}`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch articles');
      }

      const data = await response.json();
      if (data.success) {
        setArticles(data.data);
      } else {
        throw new Error(data.error || 'Failed to fetch articles');
      }
    } catch (err) {
      console.error('Error fetching articles:', err);
      setError('Erreur lors du chargement des articles');
      // Fallback avec données statiques
      setArticles([
        {
          id: 1,
          title: "Les tendances literie 2025 : confort et écologie",
          excerpt: "Découvrez les nouvelles tendances qui révolutionnent l'industrie de la literie en 2025, avec un focus sur les matériaux durables.",
          image: "https://images.unsplash.com/photo-1750420556288-d0e32a6f517b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBiZWRyb29tJTIwaW50ZXJpb3IlMjBkZXNpZ258ZW58MXx8fHwxNzU2MDA4ODAwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          date: "15 Janvier 2025",
          author: "Marie Dubois",
          category: "tendances",
          readTime: "5 min"
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const displayedArticles = showAllArticles 
    ? articles 
    : articles.slice(0, 3);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-12">
          <div>
            <h2 style={{ fontFamily: 'Montserrat', color: '#000000' }}>
              Actualités & Blog
              {error && (
                <span className="block text-sm mt-2" style={{ color: '#E30613' }}>
                  {error}
                </span>
              )}
            </h2>
            <p className="mt-4 max-w-2xl" style={{ color: '#6E6E6E' }}>
              Restez informé des dernières innovations, projets et tendances de l'industrie du mobilier
            </p>
          </div>
          <div className="flex gap-2 mt-6 lg:mt-0">
            <button
              onClick={fetchArticles}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border transition-colors"
              style={{ 
                borderColor: '#B5C233',
                color: '#B5C233',
                fontFamily: 'Inter',
                fontSize: '14px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#B5C233';
                e.currentTarget.style.color = '#FFFFFF';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = '#B5C233';
              }}
            >
              <RefreshCw className="w-4 h-4" />
              Actualiser
            </button>
            <button
              onClick={() => onNavigate?.('content-hub')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg transition-colors"
              style={{ 
                backgroundColor: '#B5C233', 
                color: '#FFFFFF',
                fontFamily: 'Inter',
                fontWeight: '500'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#a3b030';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#B5C233';
              }}
            >
              Voir tous les articles
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-3 mb-8">
          <div className="flex items-center gap-2 text-sm" style={{ color: '#6E6E6E' }}>
            <Filter className="w-4 h-4" />
            <span>Filtrer par :</span>
          </div>
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => {
                setSelectedCategory(category.value);
                setShowAllArticles(false);
              }}
              className={`px-4 py-2 rounded-full text-sm transition-all ${
                selectedCategory === category.value
                  ? 'shadow-md'
                  : 'hover:shadow-md'
              }`}
              style={{
                backgroundColor: selectedCategory === category.value ? '#B5C233' : '#f8f9fa',
                color: selectedCategory === category.value ? '#FFFFFF' : '#6E6E6E',
                fontFamily: 'Inter',
                fontWeight: selectedCategory === category.value ? '600' : '500'
              }}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Loading State */}
        {loading && (
          <div className="text-center py-12">
            <div className="w-12 h-12 border-4 rounded-full animate-spin mx-auto mb-4" 
                 style={{ 
                   borderColor: '#B5C233', 
                   borderTopColor: 'transparent' 
                 }}>
            </div>
            <p style={{ color: '#6E6E6E' }}>Chargement des articles...</p>
          </div>
        )}

        {/* Articles Grid */}
        {!loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedArticles.map((article) => (
              <article 
                key={article.id} 
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all cursor-pointer group"
                onClick={() => onArticleClick?.(article)}
              >
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <ImageWithFallback
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div 
                    className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs"
                    style={{ backgroundColor: '#B5C233', color: '#FFFFFF' }}
                  >
                    {categories.find(c => c.value === article.category)?.name || article.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Meta */}
                  <div className="flex items-center gap-4 mb-3 text-xs" style={{ color: '#6E6E6E' }}>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {article.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      {article.author}
                    </div>
                    <span>{article.readTime}</span>
                  </div>

                  {/* Title */}
                  <h3 className="mb-3 group-hover:text-primary transition-colors" style={{ color: '#000000' }}>
                    {article.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-sm leading-relaxed" style={{ color: '#6E6E6E' }}>
                    {article.excerpt}
                  </p>

                  {/* Read More */}
                  <div className="mt-4">
                    <span 
                      className="text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all"
                      style={{ color: '#B5C233' }}
                    >
                      Lire la suite
                      <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Empty State */}
        {!loading && articles.length === 0 && (
          <div className="text-center py-12">
            <p style={{ color: '#6E6E6E' }}>
              Aucun article trouvé pour cette catégorie.
            </p>
          </div>
        )}

        {/* Show More Button */}
        {!loading && articles.length > 3 && !showAllArticles && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAllArticles(true)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border transition-colors"
              style={{ 
                borderColor: '#B5C233',
                color: '#B5C233',
                fontFamily: 'Inter',
                fontWeight: '500'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#B5C233';
                e.currentTarget.style.color = '#FFFFFF';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = '#B5C233';
              }}
            >
              Voir plus d'articles
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Results count */}
        {!loading && selectedCategory !== 'all' && articles.length > 0 && (
          <div className="text-center mt-6">
            <p className="text-sm" style={{ color: '#6E6E6E' }}>
              {articles.length} article{articles.length > 1 ? 's' : ''} dans la catégorie "
              {categories.find(c => c.value === selectedCategory)?.name}"
            </p>
          </div>
        )}
      </div>
    </section>
  );
}