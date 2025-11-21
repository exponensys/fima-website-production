import {
  Calendar,
  ArrowRight,
  User,
  Filter,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useBlogs } from "../hooks/useBlogs";
import { useApp } from "../contexts/AppContext";
import { useLanguage } from "../hooks/useLanguage";
import Slider from "react-slick";

interface NewsSectionProps {
  onNavigate?: (page: string) => void;
  onArticleClick?: (article: any) => void;
}

const categoryKeys = [
  { key: "news.category.all" as const, value: "all" },
  {
    key: "news.category.tendances" as const,
    value: "tendances",
  },
  {
    key: "news.category.innovation" as const,
    value: "innovation",
  },
  { key: "news.category.projets" as const, value: "projets" },
  {
    key: "news.category.actualites" as const,
    value: "actualites",
  },
];

export function NewsSection({
  onNavigate,
  onArticleClick,
}: NewsSectionProps) {
  const [selectedCategory, setSelectedCategory] =
    useState("all");
  const [showAllArticles, setShowAllArticles] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { selectedLanguage } = useApp();
  const { t } = useLanguage();
  const sliderRef = useRef<Slider>(null);

  const { blogs, loading, error } = useBlogs(
    selectedLanguage.toLowerCase() as "fr" | "en",
    selectedCategory,
    false // Afficher tous les articles (publiés et brouillons)
  );



  // Détecter si on est sur mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () =>
      window.removeEventListener("resize", checkMobile);
  }, []);

  // Mapper les blogs au format attendu par le composant
  const articles = blogs.map((blog) => ({
    id: blog.id,
    title:
      selectedLanguage.toLowerCase() === "fr"
        ? blog.titleFr
        : blog.titleEn,
    excerpt:
      selectedLanguage.toLowerCase() === "fr"
        ? blog.summaryFr
        : blog.summaryEn,
    content:
      selectedLanguage.toLowerCase() === "fr"
        ? blog.contentFr
        : blog.contentEn,
    image: blog.featuredImage,
    date: blog.publishedDate
      ? new Date(blog.publishedDate).toLocaleDateString(
          "fr-FR",
          { year: "numeric", month: "long", day: "numeric" },
        )
      : new Date(blog.createdAt).toLocaleDateString("fr-FR", {
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
    author: blog.author,
    category: blog.category,
    read_time: `${blog.readTime} min`,
    slug: blog.slug,
    views: blog.views || 0,
    // Données complètes du blog pour passage au détail
    blogData: blog,
  }));

  const displayedArticles = showAllArticles
    ? articles
    : articles.slice(0, 3);

  if (loading) {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-12">
            <div>
              <h2
                style={{
                  fontFamily: "Montserrat",
                  color: "#000000",
                }}
              >
                {t("news.title")}
              </h2>
              <p
                className="mt-4 max-w-2xl"
                style={{ color: "#6E6E6E" }}
              >
                {t("news.loading")}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(3)].map((_, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg animate-pulse"
              >
                <div className="aspect-[16/10] bg-gray-200"></div>
                <div className="p-6 space-y-4">
                  <div className="flex gap-4">
                    <div className="h-3 bg-gray-200 rounded w-16"></div>
                    <div className="h-3 bg-gray-200 rounded w-20"></div>
                    <div className="h-3 bg-gray-200 rounded w-12"></div>
                  </div>
                  <div className="h-6 bg-gray-200 rounded"></div>
                  <div className="h-4 bg-gray-200 rounded"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Affichage de l'erreur
  if (error) {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2
              style={{
                fontFamily: "Montserrat",
                color: "#000000",
              }}
            >
              {t("news.title")}
            </h2>
            {/* Message d'erreur plus discret */}
            <div className="mt-4 max-w-md mx-auto p-4 bg-gray-50 border border-gray-200 rounded-lg">
              <p className="text-sm text-gray-600">
                Les articles ne sont pas disponibles pour le moment.
              </p>
              <p className="text-xs text-gray-500 mt-2">
                {process.env.NODE_ENV === "development" && error}
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-12">
          <div>
            <h2
              style={{
                fontFamily: "Montserrat",
                color: "#000000",
              }}
            >
              {t("news.title")}
            </h2>
            <p
              className="mt-4 max-w-2xl"
              style={{ color: "#6E6E6E" }}
            >
              {t("news.subtitle")}
            </p>
          </div>
          <button
            onClick={() => onNavigate?.("content-hub")}
            className="mt-6 lg:mt-0 inline-flex items-center gap-2 px-6 py-3 rounded-lg transition-colors"
            style={{
              backgroundColor: "#B5C233",
              color: "#333333",
              fontFamily: "Inter",
              fontWeight: "500",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#a3b030";
              e.currentTarget.style.color = "#333333";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#B5C233";
              e.currentTarget.style.color = "#333333";
            }}
          >
            {t("news.viewAll")}
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-3 mb-8">
          <div
            className="flex items-center gap-2 text-sm"
            style={{ color: "#6E6E6E" }}
          >
            <Filter className="w-4 h-4" />
            <span>{t("news.filterBy")}</span>
          </div>
          {categoryKeys.map((category) => (
            <button
              key={category.value}
              onClick={() => {
                setSelectedCategory(category.value);
                setShowAllArticles(false);
              }}
              className={`px-4 py-2 rounded-full text-sm transition-all ${
                selectedCategory === category.value
                  ? "shadow-md"
                  : "hover:shadow-md"
              }`}
              style={{
                backgroundColor:
                  selectedCategory === category.value
                    ? "#B5C233"
                    : "#f8f9fa",
                color:
                  selectedCategory === category.value
                    ? "#333333"
                    : "#6E6E6E",
                fontFamily: "Inter",
                fontWeight:
                  selectedCategory === category.value
                    ? "600"
                    : "500",
              }}
            >
              {t(category.key)}
            </button>
          ))}
        </div>

        {/* Articles Grid - Desktop / Carousel - Mobile */}
        {isMobile ? (
          <div className="relative px-4 mb-12">
            {/* Carousel mobile */}
            <Slider
              ref={sliderRef}
              dots={true}
              infinite={displayedArticles.length > 1}
              speed={500}
              slidesToShow={1}
              slidesToScroll={1}
              arrows={false}
              autoplay={true}
              autoplaySpeed={5000}
              dotsClass="slick-dots !bottom-[-40px]"
            >
              {displayedArticles.map((article) => (
                <div key={article.id} className="px-2">
                  <article
                    className="bg-white border rounded-xl overflow-hidden shadow-lg cursor-pointer flex flex-col"
                    onClick={() => onArticleClick?.(article)}
                    style={{ height: "580px" }}
                  >
                    {/* Image */}
                    <div className="relative aspect-[16/10] overflow-hidden flex-shrink-0">
                      <ImageWithFallback
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover"
                      />
                      <div
                        className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs"
                        style={{
                          backgroundColor: "#B5C233",
                          color: "#333333",
                        }}
                      >
                        {(() => {
                          const categoryKey = categoryKeys.find(
                            (c) => c.value === article.category,
                          );
                          return categoryKey
                            ? t(categoryKey.key)
                            : article.category;
                        })()}
                      </div>

                      {/* Views indicator */}
                      <div
                        className="absolute top-4 right-4 px-2 py-1 rounded text-xs"
                        style={{
                          backgroundColor: "rgba(0,0,0,0.7)",
                          color: "#FFFFFF",
                        }}
                      >
                        {article.views} {t("news.views")}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-grow">
                      {/* Meta */}
                      <div
                        className="flex flex-wrap items-center gap-3 mb-3 text-xs"
                        style={{ color: "#6E6E6E" }}
                      >
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {article.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <User className="w-3 h-3" />
                          {article.author}
                        </div>
                        <span>{article.read_time}</span>
                      </div>

                      {/* Title */}
                      <h3
                        className="mb-3 line-clamp-2"
                        style={{ color: "#000000" }}
                      >
                        {article.title}
                      </h3>

                      {/* Excerpt */}
                      <p
                        className="text-sm leading-relaxed flex-grow"
                        style={{ color: "#6E6E6E" }}
                      >
                        {(() => {
                          if (!article.excerpt) return "";
                          const words = article.excerpt.split(" ");
                          if (words.length > 15) {
                            return (
                              words.slice(0, 15).join(" ") +
                              "..."
                            );
                          }
                          return article.excerpt;
                        })()}
                      </p>

                      {/* Read More */}
                      <div className="mt-4">
                        <span
                          className="text-sm font-medium inline-flex items-center gap-1"
                          style={{ color: "#B5C233" }}
                        >
                          {t("news.readMore")}
                          <ArrowRight className="w-3 h-3" />
                        </span>
                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </Slider>

            {/* Navigation arrows pour mobile */}
            {displayedArticles.length > 1 && (
              <>
                <button
                  onClick={() => sliderRef.current?.slickPrev()}
                  className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all"
                  style={{
                    backgroundColor: "#B5C233",
                    color: "#333333",
                  }}
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => sliderRef.current?.slickNext()}
                  className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all"
                  style={{
                    backgroundColor: "#B5C233",
                    color: "#333333",
                  }}
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedArticles.map((article) => (
              <article
                key={article.id}
                className="bg-white border rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all cursor-pointer group"
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
                    style={{
                      backgroundColor: "#B5C233",
                      color: "#333333",
                    }}
                  >
                    {(() => {
                      const categoryKey = categoryKeys.find(
                        (c) => c.value === article.category,
                      );
                      return categoryKey
                        ? t(categoryKey.key)
                        : article.category;
                    })()}
                  </div>

                  {/* Views indicator */}
                  <div
                    className="absolute top-4 right-4 px-2 py-1 rounded text-xs"
                    style={{
                      backgroundColor: "rgba(0,0,0,0.7)",
                      color: "#FFFFFF",
                    }}
                  >
                    {article.views} {t("news.views")}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Meta */}
                  <div
                    className="flex items-center gap-4 mb-3 text-xs"
                    style={{ color: "#6E6E6E" }}
                  >
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {article.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      {article.author}
                    </div>
                    <span>{article.read_time}</span>
                  </div>

                  {/* Title */}
                  <h3
                    className="mb-3 group-hover:text-primary transition-colors"
                    style={{ color: "#000000" }}
                  >
                    {article.title}
                  </h3>

                  {/* Excerpt */}
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "#6E6E6E" }}
                  >
                    {article.excerpt}
                  </p>

                  {/* Read More */}
                  <div className="mt-4">
                    <span
                      className="text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all"
                      style={{ color: "#B5C233" }}
                    >
                      {t("news.readMore")}
                      <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Show More Button */}
        {articles.length > 3 && !showAllArticles && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAllArticles(true)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border transition-colors"
              style={{
                borderColor: "#6E6E6E",
                color: "#B5C233",
                fontFamily: "Inter",
                fontWeight: "500",
                backgroundColor: "#6E6E6E",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor =
                  "#B5C233";
                e.currentTarget.style.color = "#333333";
              }}
              
            >
              {t("news.viewMore")}
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Results count */}
        {selectedCategory !== "all" && (
          <div className="text-center mt-6">
            <p className="text-sm" style={{ color: "#6E6E6E" }}>
              {articles.length} article
              {articles.length > 1 ? "s" : ""}{" "}
              {selectedLanguage.toLowerCase() === "fr"
                ? "dans la catégorie"
                : "in category"}{" "}
              "
              {(() => {
                const categoryKey = categoryKeys.find(
                  (c) => c.value === selectedCategory,
                );
                return categoryKey
                  ? t(categoryKey.key)
                  : selectedCategory;
              })()}
              "
            </p>
          </div>
        )}

        {/* Admin indicator (en mode développement) */}
        {process.env.NODE_ENV === "development" && (
          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              Articles chargés dynamiquement depuis Supabase
            </div>
          </div>
        )}
      </div>
    </section>
  );
}