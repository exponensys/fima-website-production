import { useState } from "react";
import {
  ArrowLeft,
  Search,
  BookOpen,
  Video,
  Download,
  Clock,
  User,
  ChevronRight,
  Star,
} from "lucide-react";
import { useBlogs } from "../hooks/useBlogs";
import { useLanguage } from "../hooks/useLanguage";

interface SEOContentHubProps {
  onNavigate: (page: string) => void;
  onArticleClick: (article: any) => void;
  onBack: () => void;
}

export function SEOContentHub({
  onNavigate,
  onArticleClick,
  onBack,
}: SEOContentHubProps) {
  const { selectedLanguage } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("tous");
  const [searchQuery, setSearchQuery] = useState("");

  // Récupérer les blogs depuis le CMS
  const { blogs, loading, error } = useBlogs(
    selectedLanguage === "en" ? "en" : "fr",
    undefined,
    true // Seulement les articles publiés
  );

  console.log('📚 SEOContentHub - Blogs loaded from CMS:', blogs);

  // Mapper les blogs du CMS vers le format attendu par la page
  const cmsArticles = blogs.map((blog) => ({
    id: blog.id,
    title: selectedLanguage === "en" ? blog.titleEn : blog.titleFr,
    subtitle: "", // Pas de subtitle dans le modèle Blog
    category: blog.category,
    type: "article",
    readTime: `${blog.readTime} min`,
    author: blog.author,
    authorRole: "", // Pas de authorRole dans le modèle Blog
    publishDate: blog.publishedDate || blog.createdAt,
    excerpt: selectedLanguage === "en" ? blog.summaryEn : blog.summaryFr,
    image: blog.featuredImage || "https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=1080",
    featured: false, // Tous les blogs du CMS ne sont pas featured par défaut
    keywords: blog.tags || [],
    tags: blog.tags || [],
    likes: blog.likes || 0,
    comments: 0, // Pas de comments dans le modèle Blog
    shares: 0, // Pas de shares dans le modèle Blog
    content: selectedLanguage === "en" ? blog.contentEn : blog.contentFr,
    slug: blog.slug
  }));

  // Compter les articles par catégorie depuis le CMS
  const categoryCounts = {
    tous: cmsArticles.length,
    guides: cmsArticles.filter(a => a.category.toLowerCase().includes('guide')).length,
    conseils: cmsArticles.filter(a => a.category.toLowerCase().includes('conseil')).length,
    tendances: cmsArticles.filter(a => a.category.toLowerCase().includes('tendance')).length,
    technique: cmsArticles.filter(a => a.category.toLowerCase().includes('technique')).length,
  };

  const contentCategories = [
    { key: "tous", name: "Tous les contenus", count: categoryCounts.tous },
    { key: "guides", name: "Guides d'achat", count: categoryCounts.guides },
    { key: "conseils", name: "Conseils sommeil", count: categoryCounts.conseils },
    { key: "tendances", name: "Tendances déco", count: categoryCounts.tendances },
    { key: "technique", name: "Fiches techniques", count: categoryCounts.technique },
  ];

  // Filtrer les articles du CMS selon la catégorie et la recherche
  const filteredContent = cmsArticles.filter((item) => {
    const matchesCategory =
      activeCategory === "tous" ||
      (activeCategory === "guides" && item.category.toLowerCase().includes("guide")) ||
      (activeCategory === "conseils" && item.category.toLowerCase().includes("conseil")) ||
      (activeCategory === "tendances" && item.category.toLowerCase().includes("tendance")) ||
      (activeCategory === "technique" && item.category.toLowerCase().includes("technique"));

    const matchesSearch =
      !searchQuery ||
      item.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      item.excerpt
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      item.keywords.some((keyword) =>
        keyword
          .toLowerCase()
          .includes(searchQuery.toLowerCase()),
      );

    return matchesCategory && matchesSearch;
  });

  // Articles en vedette (les 3 premiers du CMS)
  const featuredContent = cmsArticles.slice(0, 3);

  // États de chargement et d'erreur
  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p style={{ color: "#6E6E6E" }}>Chargement des articles...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <BookOpen className="w-16 h-16 mx-auto mb-4 text-gray-400" />
          <h2 className="text-2xl font-bold mb-2" style={{ fontFamily: "Montserrat" }}>
            Impossible de charger les articles
          </h2>
          <p style={{ color: "#6E6E6E" }} className="mb-4">{error}</p>
          <button
            onClick={onBack}
            className="px-6 py-3 text-white rounded-lg"
            style={{ backgroundColor: "#0EA5E9" }}
          >
            Retour à l'accueil
          </button>
        </div>
      </div>
    );
  }

  if (cmsArticles.length === 0) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <BookOpen className="w-16 h-16 mx-auto mb-4 text-gray-400" />
          <h2 className="text-2xl font-bold mb-2" style={{ fontFamily: "Montserrat" }}>
            Aucun article disponible
          </h2>
          <p style={{ color: "#6E6E6E" }} className="mb-4">
            Les articles seront bientôt disponibles. Revenez plus tard !
          </p>
          <button
            onClick={onBack}
            className="px-6 py-3 text-white rounded-lg"
            style={{ backgroundColor: "#0EA5E9" }}
          >
            Retour à l'accueil
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div
        className=" border-b"
        style={{ borderColor: "#0EA5E9" }}
      >
        <div className="container mx-auto px-4 bg-gray-50">
          <div className="flex items-center py-4">
            <button
              onClick={onBack}
              className="flex items-center gap-2 p-2 rounded-lg transition-colors mr-4"
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor =
                  "rgba(14, 165, 233, 0.2)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor =
                  "transparent")
              }
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Accueil</span>
            </button>

            <div className="flex items-center gap-4">
              <div
                className="w-16 h-16 rounded-full bg-gradient-to-r flex items-center justify-center text-white"
                style={{ backgroundColor: "#0EA5E9" }}
              >
                <BookOpen className="w-8 h-8" />
              </div>
              <div>
                <h1
                  className="text-3xl font-bold"
                  style={{
                    fontFamily: "Montserrat",
                    color: "#000000",
                  }}
                >
                  Centre de Ressources FIMA
                </h1>
                <p style={{ color: "#6E6E6E" }}>
                  Guides • Conseils • Expertise • 40 ans de
                  savoir-faire
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2
              className="text-4xl font-bold mb-6"
              style={{
                fontFamily: "Montserrat",
                color: "#0EA5E9",
              }}
            >
              Tout savoir sur l'habitat et l'aménagement
            </h2>
            <p
              className="text-xl mb-8"
              style={{ color: "#6E6E6E", textAlign: "justify" }}
            >
              Inspirez-vous. Découvrez. Passez à l’action. Avec
              plus de 40 ans d’expertise, FIMA partage avec vous
              ses meilleurs conseils, astuces pratiques et
              tendances du moment pour sublimer votre intérieur.
              Apprenez à choisir la literie idéale, à harmoniser
              votre mobilier, ou à réussir vos projets de
              construction avec les recommandations de nos
              experts. Explorez nos guides et trouvez
              l’inspiration pour vos projets dès aujourd’hui !
            </p>

            {/* Barre de recherche */}
            <div className="relative max-w-xl mx-auto mb-8">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Rechercher dans nos guides et conseils..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
              />
            </div>

            {/* Filtres */}
            <div className="flex flex-wrap justify-center gap-3">
              {contentCategories.map((category) => (
                <button
                  key={category.key}
                  onClick={() =>
                    setActiveCategory(category.key)
                  }
                  className={`px-6 py-3 rounded-full font-medium transition-all ${
                    activeCategory === category.key
                      ? "text-white shadow-lg"
                      : "bg-white text-gray-700 border border-gray-300"
                  }`}
                  style={
                    activeCategory === category.key
                      ? { backgroundColor: "#0EA5E9" }
                      : {}
                  }
                  onMouseEnter={(e) => {
                    if (activeCategory !== category.key) {
                      e.currentTarget.style.backgroundColor =
                        "rgba(14, 165, 233, 0.05)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeCategory !== category.key) {
                      e.currentTarget.style.backgroundColor =
                        "white";
                    }
                  }}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contenu en vedette */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2
            className="text-3xl font-bold mb-8"
            style={{
              fontFamily: "Montserrat",
              color: "#000000",
            }}
          >
            À la une
          </h2>

          {/* Article à la une - Pleine largeur */}
          <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="relative h-64 lg:h-[400px]">
                <img
                  src={featuredContent[0].image}
                  alt={featuredContent[0].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span
                    className="px-3 py-1 text-white rounded-full text-xs font-medium"
                    style={{ backgroundColor: "#0EA5E9" }}
                  >
                    {featuredContent[0].category}
                  </span>
                </div>
              </div>

              <div className="lg:p-6 flex flex-col justify-center pt-[0px] pr-[40px] pb-[40px] pl-[40px]">
                <h3
                  onClick={() =>
                    onArticleClick(featuredContent[0])
                  }
                  className="text-3xl font-bold mb-4 cursor-pointer"
                  style={{ color: "#000000" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#0EA5E9")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#000000")
                  }
                >
                  {featuredContent[0].title}
                </h3>

                <p
                  className="text-lg mb-6"
                  style={{ color: "#6E6E6E" }}
                >
                  {featuredContent[0].excerpt}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <span>{featuredContent[0].author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{featuredContent[0].readTime}</span>
                    </div>
                  </div>

                  <button
                    onClick={() =>
                      onArticleClick(featuredContent[0])
                    }
                    className="font-medium flex items-center gap-1"
                    style={{ color: "#0EA5E9" }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "#0c93d1")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "#0EA5E9")
                    }
                  >
                    Lire l'article{" "}
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Mots-clés SEO */}
                <div className="flex flex-wrap gap-2">
                  {featuredContent[0].keywords.map(
                    (keyword, keywordIndex) => (
                      <span
                        key={keywordIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-600 rounded text-sm"
                      >
                        {keyword}
                      </span>
                    ),
                  )}
                </div>
              </div>
            </div>
          </article>

          {/* Autres articles - Grille */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredContent.slice(1).map((content, index) => (
              <article
                key={content.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="aspect-[4/3] relative">
                  <img
                    src={content.image}
                    alt={content.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span
                      className="px-3 py-1 text-white rounded-full text-xs font-medium"
                      style={{ backgroundColor: "#0EA5E9" }}
                    >
                      {content.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3
                    onClick={() => onArticleClick(content)}
                    className="text-lg font-bold mb-3 cursor-pointer"
                    style={{ color: "#000000" }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "#0EA5E9")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "#000000")
                    }
                  >
                    {content.title}
                  </h3>

                  <p
                    className="mb-4"
                    style={{ color: "#6E6E6E" }}
                  >
                    {content.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        <span>{content.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{content.readTime}</span>
                      </div>
                    </div>

                    <button
                      onClick={() => onArticleClick(content)}
                      className="font-medium flex items-center gap-1"
                      style={{ color: "#0EA5E9" }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color =
                          "#0c93d1")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color =
                          "#0EA5E9")
                      }
                    >
                      Lire <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Mots-clés SEO */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {content.keywords.map(
                      (keyword, keywordIndex) => (
                        <span
                          key={keywordIndex}
                          className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs"
                        >
                          {keyword}
                        </span>
                      ),
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Liste des articles */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2
              className="text-3xl font-bold"
              style={{
                fontFamily: "Montserrat",
                color: "#0EA5E9",
              }}
            >
              Tous nos contenus
            </h2>
            <div className="text-sm text-gray-600">
              {filteredContent.length} résultat
              {filteredContent.length > 1 ? "s" : ""}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredContent.map((content) => (
              <article
                key={content.id}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                    {content.category}
                  </span>
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                    {content.type}
                  </span>
                </div>

                <h3
                  onClick={() => onArticleClick(content)}
                  className="font-bold text-lg mb-3 hover:text-blue-600 cursor-pointer"
                  style={{ color: "#000000" }}
                >
                  {content.title}
                </h3>

                <p
                  className="mb-4 text-sm"
                  style={{ color: "#6E6E6E" }}
                >
                  {content.excerpt}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    <span>{content.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{content.readTime}</span>
                  </div>
                </div>

                <button
                  onClick={() => onArticleClick(content)}
                  className="w-full py-2 text-blue-600 hover:text-blue-700 font-medium flex items-center justify-center gap-1 border border-blue-200 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  Lire l'article{" "}
                  <ChevronRight className="w-4 h-4" />
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Keywords Strategy */}
      <section className="py-16"></section>

      {/* CTA Newsletter */}
      <section
        className="py-16 text-white"
        style={{
          background:
            "linear-gradient(to right, #0EA5E9, #0c93d1)",
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2
              className="text-3xl font-bold mb-4"
              style={{ fontFamily: "Montserrat" }}
            >
              Restez informé de nos derniers conseils
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Recevez chaque mois nos guides exclusifs,
              tendances et conseils d'experts directement dans
              votre boîte mail.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="flex-1 px-4 py-3 bg-white rounded-lg text-gray-900 focus:outline-none"
              />
              <button
                className="px-6 py-3 rounded-lg font-semibold transition-colors"
                style={{
                  backgroundColor: "#FFF",
                  color: "#0EA5E9",
                }}
              >
                S'abonner
              </button>
            </div>

            <p className="text-sm mt-4 opacity-75">
              ✓ Gratuit • ✓ Sans spam • ✓ Désabonnement en un
              clic
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}