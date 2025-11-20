import { useState, useEffect, useRef } from "react";
import { ProductCard } from "./ProductCard";
import { BusinessUnitCard } from "./BusinessUnitCard";
import { HeroBusinessUnitCard } from "./HeroBusinessUnitCard";
import { ProductCategoryCarousel } from "./ProductCategoryCarousel";
import {
  StrapiDataWrapper,
  ProductsSkeleton,
} from "./StrapiDataWrapper";
import {
  useProducts,
  useCategories,
} from "../hooks/useStrapiData";
import { StrapiProduct, StrapiCategory } from "../types/strapi";
import { extractImageUrl } from "./figma/ImageWithFallback";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faHouse,
  faWrench,
  faChevronLeft,
  faChevronRight,
  faBed,
} from "@fortawesome/free-solid-svg-icons";
import { useProductCategories } from "../hooks/useProductCategories";

interface ProductsSectionProps {
  onProductClick: (product: any) => void;
  onNavigate?: (page: string, category?: string) => void;
  externalCategoryChange?: string;
  onExternalCategoryHandled?: () => void;
}

export function ProductsSection({
  onProductClick,
  onNavigate,
  externalCategoryChange,
  onExternalCategoryHandled,
}: ProductsSectionProps) {
  const [activeCategory, setActiveCategory] =
    useState<string>("matelas");

  // Écouter les changements de catégorie externes (depuis MobileCategoryCards ou Hero)
  useEffect(() => {
    if (externalCategoryChange) {
      setActiveCategory(externalCategoryChange);
      if (onExternalCategoryHandled) {
        onExternalCategoryHandled();
      }
    }
  }, [externalCategoryChange, onExternalCategoryHandled]);

  // Récupération des catégories depuis Strapi
  const {
    data: categories,
    loading: categoriesLoading,
    error: categoriesError,
  } = useCategories({
    populate: [],
    filters: { featured: true },
    sort: ["name:asc"],
  });

  // Récupération des produits par catégorie depuis Strapi
  const {
    data: products,
    loading: productsLoading,
    error: productsError,
  } = useProducts({
    populate: ["image", "category"],
    filters: {
      category: {
        slug: { $eq: activeCategory },
      },
    },
    sort: ["featured:desc", "createdAt:desc"],
    pagination: { pageSize: 6 },
  });

  const handleCategoryClick = (categorySlug: string, businessUnit?: string) => {
    // Navigation différente selon le business unit
    if (businessUnit === "fima-design") {
      // FIMA Design: vers category-detail (pages de détail de catégorie)
      if (onNavigate) {
        onNavigate("category-detail", categorySlug);
      }
    } else {
      // FIMA Couchage et Univers Glass: vers all-products avec filtre
      if (onNavigate) {
        onNavigate("all-products", categorySlug);
      }
    }
  };

  const handleViewAllClick = () => {
    if (onNavigate) {
      onNavigate("all-products");
    }
  };

  const handleViewCategoryClick = (categorySlug: string) => {
    if (onNavigate) {
      onNavigate("category", categorySlug);
    }
  };

  const handleBusinessUnitClick = (businessUnit: string) => {
    if (onNavigate) {
      onNavigate(businessUnit);
    }
  };

  // Charger les catégories dynamiques depuis le CMS
  const { categories: cmsCategories, loading: cmsLoading } = useProductCategories();

  console.log('📦 ProductsSection - CMS Categories loaded:', cmsCategories);

  // Données organisées par métiers FIMA avec images réelles (maintenant dynamiques)
  const fimaBusinessUnits = [
    {
      id: "fima-couchage",
      name: "FIMA Couchage",
      title: "Literie premium depuis 1985",
      color: "#B5C233",
      heroData: {
        heroTitle: "FIMA Couchage",
        heroSubtitle: "Literie Premium",
        heroDescription: "Matelas, sommiers et accessoires",
        heroFeatures: [
          "14 nuits d'essai",
          "Livraison rapide sous 48h",
          "Garantie 10 ans",
        ],
        heroCtaText: "Découvrir FIMA Couchage",
      },
      categories: (() => {
        // Charger dynamiquement depuis le CMS uniquement
        if (cmsCategories && !Array.isArray(cmsCategories) && cmsCategories['fima-couchage']) {
          return cmsCategories['fima-couchage'].map((cat: any) => ({
            key: cat.slug,
            name: cat.name,
            slug: cat.slug,
            image: cat.thumbnail || `https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=400&h=400&fit=crop`,
          }));
        }
        // Retourner tableau vide si pas de catégories CMS
        return [];
      })(),
    },
    {
      id: "fima-design",
      name: "FIMA Design",
      title: "Menuiserie & ameublement sur mesure",
      color: "#6E6E6E",
      heroData: {
        heroTitle: "FIMA Design",
        heroSubtitle: "Menuiserie & Ameublement",
        heroDescription:
          "Créations sur-mesure et mobilier contemporain",
        heroFeatures: [
          "Design personnalisé",
          "Bois nobles",
          "Installation incluse",
        ],
        heroCtaText: "Découvrir FIMA Design",
      },
      categories: (() => {
        // Charger dynamiquement depuis le CMS uniquement
        if (cmsCategories && !Array.isArray(cmsCategories) && cmsCategories['fima-design']) {
          return cmsCategories['fima-design'].map((cat: any) => ({
            key: cat.slug,
            name: cat.name,
            slug: cat.slug,
            image: cat.thumbnail || `https://images.unsplash.com/photo-1658595148963-13b7da6dcd6d?w=400&h=400&fit=crop`,
          }));
        }
        // Retourner tableau vide si pas de catégories CMS
        return [];
      })(),
    },
    {
      id: "univers-glass",
      name: "UNIVERS GLASS",
      title: "Solutions vitrerie & aluminium",
      color: "#0EA5E9",
      heroData: {
        heroTitle: "UNIVERS GLASS",
        heroSubtitle: "Vitrerie & Aluminium",
        heroDescription:
          "Solutions techniques pour professionnels",
        heroFeatures: [
          "Solutions B2B",
          "Projets complexes",
          "Expertise technique",
        ],
        heroCtaText: "Découvrir UNIVERS GLASS",
      },
      categories: (() => {
        // Charger dynamiquement depuis le CMS uniquement
        if (cmsCategories && !Array.isArray(cmsCategories) && cmsCategories['univers-glass']) {
          return cmsCategories['univers-glass'].map((cat: any) => ({
            key: cat.slug,
            name: cat.name,
            slug: cat.slug,
            image: cat.thumbnail || `https://images.unsplash.com/photo-1749815362047-373af7e61072?w=400&h=400&fit=crop`,
          }));
        }
        // Retourner tableau vide si pas de catégories CMS
        return [];
      })(),
    },
  ];

  // Données de fallback avec de vraies images
  const fallbackProducts = [
    {
      id: "fallback-1",
      title: "Matelas Confort Premium",
      description:
        "Matelas ressorts ensachés 7 zones de confort",
      price: "489€",
      originalPrice: "599€",
      discount: "18%",
      badge: "BEST SELLER",
      image:
        "https://images.unsplash.com/photo-1648634158203-199accfd7afc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtYXR0cmVzcyUyMGJlZHJvb218ZW58MXx8fHwxNzU4MTAyOTUzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "Matelas",
    },
    {
      id: "fallback-2",
      title: "Matelas Mémoire de Forme Luxe",
      description:
        "Matelas mousse mémoire avec gel refroidissant",
      price: "699€",
      originalPrice: "899€",
      discount: "22%",
      badge: "NOUVEAU",
      image:
        "https://images.unsplash.com/photo-1691703028663-c5ff8cbb07c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW1vcnklMjBmb2FtJTIwbWF0dHJlc3N8ZW58MXx8fHwxNzU1OTg4NDU2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "Matelas",
    },
    {
      id: "fallback-3",
      title: "Matelas Bio Natural",
      description: "Matelas latex naturel 100% bio",
      price: "799€",
      originalPrice: "999€",
      discount: "20%",
      badge: "NOUVEAU",
      image:
        "https://images.unsplash.com/photo-1691703028663-c5ff8cbb07c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmdhbmljJTIwbGF0ZXglMjBtYXR0cmVzc3xlbnwxfHx8fDE3NTU5ODg0NjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "Matelas",
    },
    {
      id: "fallback-4",
      title: "Matelas Relax Ergonomique",
      description:
        "Matelas ergonomique à ressorts micro-ensachés",
      price: "549€",
      originalPrice: "699€",
      discount: "21%",
      badge: "PROMO",
      image:
        "https://images.unsplash.com/photo-1742319096912-7bb94fdfeb03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtYXR0cmVzcyUyMGJlZHJvb20lMjBjb21mb3J0fGVufDF8fHx8MTc1ODEwNDcyMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "Matelas",
    },
    {
      id: "fallback-5",
      title: "Matelas Prestige Collection",
      description:
        "Matelas haut de gamme multi-zones de confort",
      price: "1299€",
      originalPrice: "1599€",
      discount: "19%",
      badge: "PRESTIGE",
      image:
        "https://images.unsplash.com/photo-1550926807-a6d0500b6502?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBiZWRyb29tJTIwbWF0dHJlc3MlMjBkZXNpZ258ZW58MXx8fHwxNzU4MTA0NzI0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "Matelas",
    },
    {
      id: "fallback-6",
      title: "Matelas Pure Comfort",
      description:
        "Matelas hypoallergénique en fibres naturelles",
      price: "399€",
      originalPrice: "499€",
      discount: "20%",
      badge: "ECO+",
      image:
        "https://images.unsplash.com/photo-1691703011149-5fc5a062319d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwd2hpdGUlMjBtYXR0cmVzcyUyMGJlZGRpbmd8ZW58MXx8fHwxNzU4MTA0NzI4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "Matelas",
    },
  ];

  // Convertir les données Strapi en format compatible
  const convertStrapiProduct = (
    strapiProduct: StrapiProduct,
  ) => {
    const formattedPrice = `${strapiProduct.attributes.price}€`;
    const formattedOriginalPrice = strapiProduct.attributes
      .originalPrice
      ? `${strapiProduct.attributes.originalPrice}€`
      : undefined;

    // Extraire l'URL d'image AVANT le spread pour éviter l'écrasement
    const imageUrl = extractImageUrl(
      strapiProduct.attributes.image,
    );

    // Créer une copie des attributes sans l'objet image original
    const {
      image: originalImage,
      category: originalCategory,
      ...cleanAttributes
    } = strapiProduct.attributes;

    return {
      // Données complètes pour la page produit (sans image et category originales)
      ...cleanAttributes,
      // Puis les données formatées (qui écrasent les valeurs brutes)
      id: strapiProduct.id.toString(),
      title: strapiProduct.attributes.title,
      description:
        strapiProduct.attributes.shortDescription ||
        strapiProduct.attributes.description,
      price: formattedPrice,
      originalPrice: formattedOriginalPrice,
      discount: strapiProduct.attributes.discount
        ? `${strapiProduct.attributes.discount}%`
        : undefined,
      badge: strapiProduct.attributes.bestSeller
        ? "BEST SELLER"
        : strapiProduct.attributes.new
          ? "NOUVEAU"
          : undefined,
      image: imageUrl,
      category:
        strapiProduct.attributes.category?.data?.attributes
          ?.name || "Produit",
      sourceCurrency: 'EUR',
    };
  };

  const convertStrapiCategory = (
    strapiCategory: StrapiCategory,
  ) => ({
    icon: strapiCategory.attributes.icon,
    name: strapiCategory.attributes.name,
    value: strapiCategory.attributes.slug,
    business:
      (strapiCategory.attributes as any).business || "fima-couchage",
    color: (strapiCategory.attributes as any).color || "#B5C233",
  });

  // Obtenir le nombre de produits pour la catégorie active
  const getCurrentCategoryName = () => {
    if (categories && Array.isArray(categories)) {
      const currentCategory = categories.find(
        (c) => c.attributes.slug === activeCategory,
      );
      return currentCategory?.attributes.name || "Produits";
    }
    return "Produits";
  };

  // Gérer le changement externe de catégorie
  useEffect(() => {
    if (externalCategoryChange) {
      setActiveCategory(externalCategoryChange);
      if (onExternalCategoryHandled) {
        onExternalCategoryHandled();
      }
      // Scroll vers la section produits après changement
      setTimeout(() => {
        const productsSection = document.getElementById(
          "products-section",
        );
        if (productsSection) {
          productsSection.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 100);
    }
  }, [externalCategoryChange, onExternalCategoryHandled]);

  // Données des 3 métiers avec le design Hero (avec features)
  const heroStyleBusinessUnits = [
    {
      key: "fima-couchage",
      title: "FIMA Couchage",
      subtitle: "Literie Premium",
      description: "Matelas, sommiers et accessoires",
      icon: (
        <FontAwesomeIcon icon={faBed} className="w-5 h-5" />
      ),
      color: "#B5C233",
      features: [
        "14 nuits d'essai",
        "Livraison rapide sous 48h",
        "Garantie 10 ans",
      ],
      ctaText: "Découvrir FIMA Couchage",
    },
    {
      key: "fima-design",
      title: "FIMA Design",
      subtitle: "Menuiserie & Ameublement",
      description:
        "Créations sur-mesure et mobilier contemporain",
      icon: (
        <FontAwesomeIcon icon={faHouse} className="w-5 h-5" />
      ),
      color: "#6E6E6E",
      features: [
        "Design personnalisé",
        "Bois nobles",
        "Installation incluse",
      ],
      ctaText: "Découvrir FIMA Design",
    },
    {
      key: "univers-glass",
      title: "UNIVERS GLASS",
      subtitle: "Vitrerie & Aluminium",
      description: "Solutions techniques pour professionnels",
      icon: (
        <FontAwesomeIcon
          icon={faBuilding}
          className="w-5 h-5"
        />
      ),
      color: "#0EA5E9",
      features: [
        "Solutions B2B",
        "Projets complexes",
        "Expertise technique",
      ],
      ctaText: "Découvrir UNIVERS GLASS",
    },
  ];

  // État du carousel mobile
  const [currentSlide, setCurrentSlide] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Fonction pour scroller vers une slide spécifique
  const scrollToSlide = (index: number) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const slideWidth = container.offsetWidth;
      container.scrollTo({
        left: slideWidth * index,
        behavior: "smooth",
      });
      setCurrentSlide(index);
    }
  };

  // Dtecter le changement de slide au scroll
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const slideWidth = container.offsetWidth;
      const newIndex = Math.round(
        container.scrollLeft / slideWidth,
      );
      setCurrentSlide(newIndex);
    };

    container.addEventListener("scroll", handleScroll);
    return () =>
      container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className="relative z-10 w-full mt-0 md:mt-0"
      id="products-section"
    >
      {/* Desktop Only: Hero Style Business Units - Cartes flottantes */}
      {/* <div className="mb-12 w-full max-w-full hidden md:block">
        <div className="products-grid pt-[15px] md:mt-[77px]">
          {heroStyleBusinessUnits.map((unit) => (
            <HeroBusinessUnitCard
              key={unit.key}
              unit={unit}
              onBusinessUnitClick={handleBusinessUnitClick}
            />
          ))}
        </div>
      </div> */}

      {/* Featured Products Section - Sous les cartes flottantes */}
      {activeCategory && (
        <div className="mt-0 md:mt-24">
          <div className="md:py-12 rounded-t-xl mt-[10px] mr-[0px] mb-[0px] ml-[0px] py-[58px] px-[0px] pt-[80px] pr-[0px] pb-[48px] pl-[0px]">
            {/* Titre principal mobile uniquement */}
            <div className="md:hidden px-4 mb-6">
              <h2
                className="text-2xl mb-1"
                style={{
                  fontFamily: "Montserrat",
                  color: "#000000",
                }}
              >
                Nos Catégories
              </h2>
              <p
                className="text-sm"
                style={{ color: "#6E6E6E" }}
              >
                Parcourez nos produits par métier
              </p>
            </div>

            {/* Carrousels de catégories par métier - Mobile uniquement */}
            <div className="md:hidden space-y-8 mb-8">
              {/* FIMA Couchage */}
              <div>
                <div className="px-4 mb-4">
                  <div className="flex items-center gap-2 mb-1">
                    <div
                      style={{
                        width: "4px",
                        height: "24px",
                        backgroundColor: "#B5C233",
                      }}
                    />
                    <h3
                      className="text-xl"
                      style={{
                        fontFamily: "Montserrat",
                        color: "#B5C233",
                        fontWeight: 600,
                      }}
                    >
                      FIMA Couchage
                    </h3>
                  </div>
                  <p
                    className="text-sm ml-6"
                    style={{ color: "#6E6E6E" }}
                  >
                    Literie premium
                  </p>
                </div>
                <ProductCategoryCarousel
                  categories={
                    fimaBusinessUnits
                      .find(
                        (unit) => unit.id === "fima-couchage",
                      )
                      ?.categories.map((cat, index) => ({
                        id: `couchage-${cat.slug}-${index}`,
                        name: cat.name,
                        image: cat.image,
                        slug: cat.slug,
                      })) || []
                  }
                  onCategoryClick={(slug) => handleCategoryClick(slug, "fima-couchage")}
                  accentColor="#B5C233"
                />
              </div>

              {/* FIMA Design */}
              <div>
                <div className="px-4 mb-4">
                  <div className="flex items-center gap-2 mb-1">
                    <div
                      style={{
                        width: "4px",
                        height: "24px",
                        backgroundColor: "#6E6E6E",
                      }}
                    />
                    <h3
                      className="text-xl"
                      style={{
                        fontFamily: "Montserrat",
                        color: "#6E6E6E",
                        fontWeight: 600,
                      }}
                    >
                      FIMA Design
                    </h3>
                  </div>
                  <p
                    className="text-sm ml-6"
                    style={{ color: "#6E6E6E" }}
                  >
                    Menuiserie & ameublement
                  </p>
                </div>
                <ProductCategoryCarousel
                  categories={
                    fimaBusinessUnits
                      .find((unit) => unit.id === "fima-design")
                      ?.categories.map((cat, index) => ({
                        id: `design-${cat.slug}-${index}`,
                        name: cat.name,
                        image: cat.image,
                        slug: cat.slug,
                      })) || []
                  }
                  onCategoryClick={(slug) => handleCategoryClick(slug, "fima-design")}
                  accentColor="#6E6E6E"
                />
              </div>

              {/* UNIVERS GLASS */}
              <div>
                <div className="px-4 mb-4">
                  <div className="flex items-center gap-2 mb-1">
                    <div
                      style={{
                        width: "4px",
                        height: "24px",
                        backgroundColor: "#0EA5E9",
                      }}
                    />
                    <h3
                      className="text-xl"
                      style={{
                        fontFamily: "Montserrat",
                        color: "#0EA5E9",
                        fontWeight: 600,
                      }}
                    >
                      UNIVERS GLASS
                    </h3>
                  </div>
                  <p
                    className="text-sm ml-6"
                    style={{ color: "#6E6E6E" }}
                  >
                    Vitrerie & aluminium
                  </p>
                </div>
                <ProductCategoryCarousel
                  categories={
                    fimaBusinessUnits
                      .find(
                        (unit) => unit.id === "univers-glass",
                      )
                      ?.categories.map((cat, index) => ({
                        id: `glass-${cat.slug}-${index}`,
                        name: cat.name,
                        image: cat.image,
                        slug: cat.slug,
                      })) || []
                  }
                  onCategoryClick={(slug) => handleCategoryClick(slug, "univers-glass")}
                  accentColor="#0EA5E9"
                />
              </div>
            </div>

            {/* Business Units Grid - MÊME STRUCTURE que les produits */}
            <div
              className="mb-16 w-full max-w-full hidden md:block"
              id="business-categories"
            >
              <div className="products-grid w-full">
                {fimaBusinessUnits.map((businessUnit) => (
                  <BusinessUnitCard
                    key={businessUnit.id}
                    id={businessUnit.id}
                    name={businessUnit.name}
                    title={businessUnit.title}
                    color={businessUnit.color}
                    categories={businessUnit.categories.slice(
                      0,
                      6,
                    )}
                    heroData={businessUnit.heroData}
                    onCategoryClick={(slug) => handleCategoryClick(slug, businessUnit.id)}
                    onBusinessUnitClick={
                      handleBusinessUnitClick
                    }
                  />
                ))}
              </div>
            </div>

            {/* Featured Products Section - Alignement parfait avec Business Units */}
            <div
              className="bg-white shadow-lg overflow-hidden"
              id="featured-products"
            >
              {/* Header avec padding pour le styling */}
              {/* <div className="p-4 md:p-8 pb-0">
                <div className="flex flex-col md:flex-row justify-between items-center mb-6 md:mb-8">
                  <div className="hidden md:block text-center md:text-left mb-4 md:mb-0">
                    <h3
                      className="text-2xl mb-2"
                      style={{
                        fontFamily: "Montserrat",
                        color: "#000000",
                      }}
                    >
                      {getCurrentCategoryName()}
                    </h3>
                    <p style={{ color: "#6E6E6E" }}>
                      {products && Array.isArray(products)
                        ? products.length
                        : 0}{" "}
                      produit
                      {products &&
                      Array.isArray(products) &&
                      products.length > 1
                        ? "s"
                        : ""}{" "}
                      disponible
                      {products &&
                      Array.isArray(products) &&
                      products.length > 1
                        ? "s"
                        : ""}
                    </p>
                  </div>

                  {/* Action buttons - Desktop only
                  <div className="hidden md:flex gap-3">
                    <button
                      onClick={() =>
                        handleViewCategoryClick(activeCategory)
                      }
                      className="px-6 py-3 rounded-xl font-medium border-2 transition-all hover:shadow-lg"
                      style={{
                        borderColor: "#B5C233",
                        color: "#B5C233",
                        borderStyle: "solid",
                        borderWidth: "4px",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor =
                          "#B5C233";
                        e.currentTarget.style.color = "#333333";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor =
                          "transparent";
                        e.currentTarget.style.color = "#B5C233";
                      }}
                    >
                      Voir la catégorie
                    </button>
                    <button
                      onClick={handleViewAllClick}
                      className="px-6 py-3 rounded-xl font-medium border-2 transition-all hover:shadow-lg"
                      style={{
                        borderColor: "#6E6E6E",
                        backgroundColor: "#0EA5E9",
                        color: "white",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor =
                          "#0D94D1";
                        e.currentTarget.style.color = "white";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor =
                          "#0EA5E9";
                        e.currentTarget.style.color = "white";
                      }}
                    >
                      Tous les produits
                    </button>
                  </div>
                </div>
              </div> */}

              {/* Products Grid - MEMES CONTRAINTES que Business Units */}
              {/* <div className="pb-4 md:pb-8 px-4 md:px-0 w-full max-w-full">
                <StrapiDataWrapper
                  loading={productsLoading}
                  error={productsError}
                  data={products}
                  emptyMessage="Aucun produit disponible dans cette catégorie"
                  minHeight="400px"
                >
                  {productsLoading ? (
                    <ProductsSkeleton count={6} />
                  ) : (
                    <div className="products-grid w-full">
                      {(() => {
                        // Combinaison intelligente des produits Strapi et fallback
                        const strapiProducts =
                          products && Array.isArray(products)
                            ? products
                            : [];
                        const availableFallbackProducts =
                          fallbackProducts.filter(
                            (fallback) =>
                              !strapiProducts.some(
                                (strapi) =>
                                  strapi.attributes?.title ===
                                  fallback.title,
                              ),
                          );

                        // Prendre jusqu'à 6 produits au total (Strapi + fallback si nécessaire)
                        const combinedProducts = [
                          ...strapiProducts.slice(0, 6),
                          ...availableFallbackProducts.slice(
                            0,
                            Math.max(
                              0,
                              6 - strapiProducts.length,
                            ),
                          ),
                        ];

                        return combinedProducts.length > 0 ? (
                          combinedProducts.map(
                            (product, index) => {
                              // Distinguer les produits Strapi des fallback
                              const isStrapiProduct =
                                index < strapiProducts.length;

                              if (isStrapiProduct) {
                                return (
                                  <ProductCard
                                    key={product.id}
                                    {...convertStrapiProduct(
                                      product,
                                    )}
                                    onProductClick={(
                                      convertedProduct,
                                    ) => {
                                      // Passer les données Strapi complètes
                                      onProductClick({
                                        ...convertedProduct,
                                        strapiData: product, // Données originales pour les détails
                                      });
                                    }}
                                  />
                                );
                              } else {
                                return (
                                  <ProductCard
                                    key={product.id}
                                    {...product}
                                    onProductClick={(
                                      convertedProduct,
                                    ) => {
                                      onProductClick({
                                        ...convertedProduct,
                                        // Données mockées pour les détails
                                        sizes: [
                                          {
                                            name: "Single",
                                            price: "489€",
                                            dimensions:
                                              "90x200cm",
                                            available: true,
                                          },
                                          {
                                            name: "Queen",
                                            price: "629€",
                                            dimensions:
                                              "160x200cm",
                                            available: true,
                                          },
                                          {
                                            name: "King",
                                            price: "759€",
                                            dimensions:
                                              "180x200cm",
                                            available: true,
                                          },
                                        ],
                                        colors: [
                                          {
                                            name: "Blanc",
                                            hex: "#FFFFFF",
                                          },
                                          {
                                            name: "Gris",
                                            hex: "#6E6E6E",
                                          },
                                        ],
                                        rating: 4.5,
                                        reviewsCount: 1234,
                                      });
                                    }}
                                  />
                                );
                              }
                            },
                          )
                        ) : (
                          <div className="col-span-full text-center py-12">
                            <p style={{ color: "#6E6E6E" }}>
                              Aucun produit disponible dans
                              cette catégorie
                            </p>
                          </div>
                        );
                      })()}
                    </div>
                  )}
                </StrapiDataWrapper>

                {/* Bouton Voir tout - Mobile uniquement
                <div className="md:hidden mt-6 text-center">
                  <button
                    onClick={handleViewAllClick}
                    className="w-full py-4 font-medium transition-all duration-300"
                    style={{
                      backgroundColor: "#B5C233",
                      color: "#6E6E6E",
                      fontFamily: "Inter",
                    }}
                  >
                    Voir tous les produits
                  </button>
                </div>
              </div> */}
            </div>

            {/* Call to action section */}
            <div className="text-center px-4 py-8 md:py-12 bg-gradient-to-r from-gray-100 to-green-50 rounded-lg">
              <h3
                className="text-lg md:text-2xl mb-3 md:mb-4"
                style={{
                  fontFamily: "Montserrat",
                  color: "#000000",
                }}
              >
                3 métiers, une expertise reconnue depuis 1985
              </h3>
              <p
                className="text-sm md:text-lg mb-6 md:mb-8 max-w-2xl mx-auto px-2"
                style={{ color: "#6E6E6E" }}
              >
                FIMA Couchage, FIMA Design et UNIVERS GLASS vous
                accompagnent dans tous vos projets. Découvrez
                nos solutions complètes et bénéficiez de nos
                conseils d'experts.
              </p>
              <div className="flex flex-col gap-3 md:gap-4 md:flex-row md:justify-center">
                <button
                  onClick={handleViewAllClick}
                  className="w-full md:w-auto py-4 px-6 md:px-8 md:text-lg flex items-center justify-center gap-3 border-2 transition-all duration-300 hover:shadow-lg"
                  style={{
                    backgroundColor: "#6E6E6E",
                    color: "#B5C233",
                    borderColor: "#6E6E6E",
                    touchAction: "manipulation",
                    WebkitTapHighlightColor: "transparent",
                    userSelect: "none",
                    cursor: "pointer",
                    minHeight: "48px",
                  }}
                >
                  Découvrir tous nos produits
                </button>
                <button
                  className="fima-btn-secondary w-full md:w-auto py-4 px-6 md:px-8 md:text-lg text-[rgb(246,246,246)] bg-[rgb(23,199,255)]"
                  onClick={() => {
                    // Ici on pourrait ouvrir le chat ou rediriger vers contact
                    console.log("Contact expert");
                  }}
                >
                  Parler à un expert
                </button>
              </div>
            </div>
          </div>{" "}
          {/* Fermeture du fond gris */}
        </div>
      )}
    </section>
  );
}