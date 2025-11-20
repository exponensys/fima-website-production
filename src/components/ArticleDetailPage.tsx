import { useState } from "react";
import {
  ArrowLeft,
  Calendar,
  Clock,
  User,
  Share2,
  Heart,
  MessageSquare,
  Send,
  Mail,
  Tag,
  ChevronRight,
} from "lucide-react";
import { useLanguage } from "../hooks/useLanguage";
import { Breadcrumb, BreadcrumbItem } from "./Breadcrumb";

interface ArticleDetailPageProps {
  article: any;
  onBack: () => void;
  onNavigate: (
    page: string,
    category?: string,
    data?: any,
  ) => void;
}

export function ArticleDetailPage({
  article,
  onBack,
  onNavigate,
}: ArticleDetailPageProps) {
  const { t, selectedLanguage } = useLanguage();
  const [newComment, setNewComment] = useState("");
  const [email, setEmail] = useState("");
  const [isLiked, setIsLiked] = useState(false);

  // Breadcrumb items
  const breadcrumbItems: BreadcrumbItem[] = [
    { label: 'Accueil', onClick: onBack },
    { label: 'Blog', onClick: () => onNavigate('blog') },
    { label: article.title }
  ];

  if (!article) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2
            className="text-2xl mb-4"
            style={{ color: "#000000" }}
          >
            {t("article.notFound")}
          </h2>
          <button onClick={onBack} className="fima-btn-primary">
            {t("article.backToArticles")}
          </button>
        </div>
      </div>
    );
  }

  // Données exemple simplifiées
  const defaultArticle = {
    id: 1,
    title:
      "Comment choisir le matelas parfait pour un sommeil réparateur",
    subtitle:
      "Guide complet pour faire le bon choix selon votre morphologie",
    content: `
      <p>Un bon sommeil est essentiel pour notre bien-être et notre santé. Le choix d'un matelas adapté joue un rôle crucial dans la qualité de votre repos nocturne.</p>
      
      <h3>1. Les différents types de matelas</h3>
      
      <h4>Matelas à ressorts</h4>
      <p>Les matelas à ressorts offrent un excellent soutien et une bonne ventilation. Ils sont particulièrement recommandés pour les personnes qui bougent beaucoup pendant leur sommeil.</p>
      
      <h4>Matelas en mousse</h4>
      <p>Les matelas en mousse à mémoire de forme s'adaptent parfaitement aux contours de votre corps. Ils offrent un excellent soulagement des points de pression.</p>
      
      <h4>Matelas en latex naturel</h4>
      <p>Le latex naturel combine le confort de la mousse avec la résilience des ressorts. C'est un choix écologique et durable.</p>
      
      <h3>2. Choisir selon votre morphologie</h3>
      
      <ul>
      <li><strong>Morphologie légère (moins de 60kg)</strong> : Privilégiez un matelas plus souple.</li>
      <li><strong>Morphologie moyenne (60-90kg)</strong> : Un matelas mi-ferme sera idéal.</li>
      <li><strong>Morphologie forte (plus de 90kg)</strong> : Un matelas ferme sera nécessaire.</li>
      </ul>
      
      <h3>3. Nos recommandations FIMA</h3>
      
      <p>Chez FIMA, nous recommandons de tester votre matelas pendant au moins 15 minutes en magasin. Nos conseillers experts sont là pour vous guider selon vos besoins spécifiques.</p>
    `,
    author: "Dr. Marie ADJOUA",
    authorRole: "Experte en Ergonomie du Sommeil",
    category: "Conseils Literie",
    readTime: "8 min",
    publishDate: "15 janvier 2024",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4Mjl8MHwxfHNlYXJjaHwxfHxiZWRyb29tfGVufDB8fHx8MTc1NTYxMDkyNXww&ixlib=rb-4.1.0&q=80&w=800",
    tags: ["Conseils", "Matelas", "Sommeil", "Santé"],
    likes: 127,
    comments: 23,
    shares: 45,
  };

  // Si l'article a blogData, on utilise les données complètes selon la langue
  let currentArticle = { ...defaultArticle, ...article };

  if (article?.blogData) {
    const blog = article.blogData;
    currentArticle = {
      ...currentArticle,
      title:
        selectedLanguage.toLowerCase() === "fr"
          ? blog.titleFr
          : blog.titleEn,
      subtitle:
        selectedLanguage.toLowerCase() === "fr"
          ? blog.summaryFr
          : blog.summaryEn,
      content:
        selectedLanguage.toLowerCase() === "fr"
          ? blog.contentFr
          : blog.contentEn,
      excerpt:
        selectedLanguage.toLowerCase() === "fr"
          ? blog.summaryFr
          : blog.summaryEn,
    };
  }

  // Articles similaires simplifiés
  const relatedArticles = [
    {
      id: 2,
      title: "Les bienfaits d'un sommeil de qualité",
      image:
        "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4Mjl8MHwxfHNlYXJjaHwxfHxzbGVlcGluZ3xlbnwwfHx8fDE3NTU2MTA5MjV8MA&ixlib=rb-4.1.0&q=80&w=400",
      category: "Santé & Bien-être",
      readTime: "5 min",
    },
    {
      id: 3,
      title: "Tendances mobilier de chambre 2024",
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4Mjl8MHwxfHNlYXJjaHwxfHxiZWRyb29tfGVufDB8fHx8MTc1NTYxMDkyNXww&ixlib=rb-4.1.0&q=80&w=400",
      category: "Design & Tendances",
      readTime: "6 min",
    },
  ];

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const title = currentArticle.title;

    let shareUrl = "";
    switch (platform) {
      case "Facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
        break;
      case "Twitter":
        shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${title}`;
        break;
      case "WhatsApp":
        shareUrl = `https://wa.me/?text=${title} ${url}`;
        break;
    }

    if (shareUrl) {
      window.open(shareUrl, "_blank", "width=600,height=400");
    }
  };

  const handleNewsletterSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      console.log("Newsletter signup:", email);
      setEmail("");
    }
  };

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment) {
      console.log("New comment:", newComment);
      setNewComment("");
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <Breadcrumb items={breadcrumbItems} accentColor="#B5C233" />
      
      {/* Header simplifié */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-blue-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <button
              onClick={onBack}
              className="flex items-center gap-2 hover:bg-blue-200 p-2 rounded-lg transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>{t("article.backToArticles")}</span>
            </button>

            <button
              onClick={() => handleShare("Facebook")}
              className="p-2 hover:bg-blue-200 rounded-full transition-colors"
            >
              <Share2 className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Hero Image réduit */}
      <div className="relative h-[40vh] bg-gray-900">
        <img
          src={currentArticle.image}
          alt={currentArticle.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="absolute top-6 left-6">
          <span className="px-3 py-1 bg-blue-600 text-white rounded-full font-medium text-sm">
            {currentArticle.category}
          </span>
        </div>
      </div>

      {/* Article Content simplifié */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <article className="lg:col-span-3">
              {/* Article Header */}
              <header className="mb-6">
                <h1
                  className="text-3xl mb-3"
                  style={{
                    fontFamily: "Montserrat",
                    color: "#000000",
                  }}
                >
                  {currentArticle.title}
                </h1>

                {currentArticle.subtitle && (
                  <p
                    className="text-lg mb-4"
                    style={{ color: "#6E6E6E" }}
                  >
                    {currentArticle.subtitle}
                  </p>
                )}

                {/* Article Meta */}
                <div className="flex flex-wrap items-center gap-4 py-3 border-y border-gray-200">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                      <User className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <div
                        className="font-semibold text-sm"
                        style={{ color: "#000000" }}
                      >
                        {currentArticle.author}
                      </div>
                      <div className="text-xs text-gray-600">
                        {currentArticle.authorRole}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{currentArticle.publishDate}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{currentArticle.readTime}</span>
                    </div>
                  </div>
                </div>

                {/* Actions simplifiées */}
                <div className="flex items-center gap-4 py-3">
                  <button
                    onClick={() => setIsLiked(!isLiked)}
                    className={`flex items-center gap-2 px-3 py-1 rounded-full transition-colors ${
                      isLiked
                        ? "bg-red-100 text-red-600"
                        : "bg-gray-100 text-gray-600 hover:bg-red-50"
                    }`}
                  >
                    <Heart
                      className={`w-4 h-4 ${isLiked ? "fill-current" : ""}`}
                    />
                    <span>
                      {currentArticle.likes + (isLiked ? 1 : 0)}
                    </span>
                  </button>

                  <div className="flex items-center gap-2 text-gray-600">
                    <MessageSquare className="w-4 h-4" />
                    <span>{currentArticle.comments}</span>
                  </div>
                </div>
              </header>

              {/* Article Body */}
              <div
                className="prose prose-lg max-w-none mb-8"
                style={{ color: "#6E6E6E" }}
                dangerouslySetInnerHTML={{
                  __html: currentArticle.content,
                }}
              />

              {/* Tags */}
              <div className="mb-6">
                <h3
                  className="font-semibold mb-3 flex items-center gap-2"
                  style={{ color: "#000000" }}
                >
                  <Tag className="w-4 h-4" />
                  {t("article.keywords")}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {currentArticle.tags.map(
                    (tag: string, index: number) => (
                      <button
                        key={index}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-blue-100 hover:text-blue-700 transition-colors"
                        onClick={() =>
                          onNavigate("content-hub", tag)
                        }
                      >
                        #{tag}
                      </button>
                    ),
                  )}
                </div>
              </div>

              {/* Share simplifié */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 mb-8">
                <h3
                  className="font-semibold mb-3"
                  style={{ color: "#000000" }}
                >
                  {t("article.shareArticle")}
                </h3>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleShare("Facebook")}
                    className="px-3 py-2 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-all text-sm"
                  >
                    📘 Facebook
                  </button>
                  <button
                    onClick={() => handleShare("Twitter")}
                    className="px-3 py-2 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-all text-sm"
                  >
                    🐦 Twitter
                  </button>
                  <button
                    onClick={() => handleShare("WhatsApp")}
                    className="px-3 py-2 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-all text-sm"
                  >
                    💬 WhatsApp
                  </button>
                </div>
              </div>
            </article>

            {/* Sidebar simplifié */}
            <aside className="lg:col-span-1 space-y-6">
              {/* Newsletter */}
              <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-4">
                <h3
                  className="font-semibold mb-2"
                  style={{ color: "#000000" }}
                >
                  📧 {t("article.newsletter")}
                </h3>
                <p
                  className="text-sm mb-3"
                  style={{ color: "#6E6E6E" }}
                >
                  {t("article.newsletterDesc")}
                </p>
                <form
                  onSubmit={handleNewsletterSignup}
                  className="space-y-2"
                >
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t("article.yourEmail")}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    required
                  />
                  <button
                    type="submit"
                    className="w-full fima-btn-secondary flex items-center justify-center gap-2 text-sm py-2"
                  >
                    <Mail className="w-4 h-4" />
                    {t("article.subscribe")}
                  </button>
                </form>
              </div>

              {/* Liens utiles */}
              <div className="bg-gray-50 rounded-xl p-4">
                <h3
                  className="font-semibold mb-3"
                  style={{ color: "#000000" }}
                >
                  🔗 {t("article.usefulLinks")}
                </h3>
                <div className="space-y-2">
                  <button
                    onClick={() => onNavigate("all-products")}
                    className="w-full text-left p-2 bg-white rounded-lg hover:bg-blue-50 transition-colors flex items-center justify-between text-sm"
                  >
                    <span>{t("article.productCatalog")}</span>
                    <ChevronRight className="w-3 h-3" />
                  </button>
                  <button
                    onClick={() => onNavigate("quote-request")}
                    className="w-full text-left p-2 bg-white rounded-lg hover:bg-blue-50 transition-colors flex items-center justify-between text-sm"
                  >
                    <span>{t("article.freeQuote")}</span>
                    <ChevronRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </aside>
          </div>

          {/* Commentaires simplifiés */}
          <div className="mt-12 pt-6 border-t border-gray-200">
            <h3
              className="text-xl mb-6"
              style={{
                fontFamily: "Montserrat",
                color: "#000000",
              }}
            >
              {t("article.comments")} ({currentArticle.comments}
              )
            </h3>

            {/* Form simplifié */}
            <form
              onSubmit={handleCommentSubmit}
              className="mb-6 p-4 bg-gray-50 rounded-xl"
            >
              <textarea
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder={t("article.yourComment")}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                required
              />
              <div className="flex justify-end mt-2">
                <button
                  type="submit"
                  className="fima-btn-secondary flex items-center gap-2 text-sm px-4 py-2"
                >
                  <Send className="w-4 h-4" />
                  {t("article.post")}
                </button>
              </div>
            </form>

            {/* Commentaires exemple */}
            <div className="space-y-4">
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="text-xs font-bold">
                      JK
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span
                        className="font-semibold text-sm"
                        style={{ color: "#000000" }}
                      >
                        Jean Kouassi
                      </span>
                      <span className="text-xs text-gray-500">
                        Il y a 2 jours
                      </span>
                    </div>
                    <p
                      className="text-sm"
                      style={{ color: "#6E6E6E" }}
                    >
                      Excellent article ! J'ai suivi vos
                      conseils et je dors beaucoup mieux depuis.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Articles similaires */}
      <div className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2
            className="text-2xl text-center mb-8"
            style={{
              fontFamily: "Montserrat",
              color: "#000000",
            }}
          >
            {t("article.relatedArticles")}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {relatedArticles.map((relatedArticle) => (
              <article
                key={relatedArticle.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
                onClick={() =>
                  onNavigate(
                    "article-detail",
                    undefined,
                    relatedArticle,
                  )
                }
              >
                <div className="aspect-video">
                  <img
                    src={relatedArticle.image}
                    alt={relatedArticle.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-4">
                  <span className="inline-block px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium mb-2">
                    {relatedArticle.category}
                  </span>
                  <h3
                    className="font-bold mb-2 line-clamp-2"
                    style={{ color: "#000000" }}
                  >
                    {relatedArticle.title}
                  </h3>
                  <div className="flex items-center gap-1 text-sm text-gray-600">
                    <Clock className="w-3 h-3" />
                    <span>{relatedArticle.readTime}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* CTA simplifié */}
      <div
        className="py-12 bg-gradient-to-r text-white"
        style={{
          backgroundColor: "#B5C233",
          opacity: 0.9,
          color: "#333333",
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <h2
            className="text-2xl mb-4"
            style={{ fontFamily: "Montserrat" }}
          >
            {t("article.needAdvice")}
          </h2>
          <p className="text-lg mb-6 opacity-90 max-w-xl mx-auto">
            {t("article.expertsHelp")}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => onNavigate("quote-request")}
              className="px-6 py-3 rounded-xl font-semibold transition-colors"
              style={{ backgroundColor: "#B5C233", color: "#6E6E6E" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor =
                  "#a3af2e")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor =
                  "#B5C233")
              }
            >
              {t("article.freeConsultation")}
            </button>
            <button
              onClick={() => onNavigate("all-products")}
              className="px-6 py-3 bg-[rgb(86,87,87)] text-[rgb(181,194,51)] rounded-xl font-semibold hover:bg-gray-100 transition-colors"
            >
              {t("article.viewProducts")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}