import { useState, useEffect } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import {
  useProductCategories,
  DEFAULT_CATEGORIES,
} from "../hooks/useProductCategories";
import { QuoteRequestModal } from "./QuoteRequestModal";
import { ExpertConsultationModal } from "./ExpertConsultationModal";
import { ImageLightbox } from "./ImageLightbox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTruckFast,
  faRulerCombined,
  faCertificate,
  faFileInvoice,
  faUserTie,
  faCircleExclamation,
  faArrowLeft,
  faSpinner,
  faCheck,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

interface CategoryDetailPageProps {
  categorySlug: string;
  onNavigate: (page: string) => void;
}

export function CategoryDetailPage({
  categorySlug,
  onNavigate,
}: CategoryDetailPageProps) {
  const { categories: allCategories, loading } =
    useProductCategories();
  const [category, setCategory] = useState<any>(null);
  const [categoryImages, setCategoryImages] = useState<
    string[]
  >([]);
  const [showQuoteModal, setShowQuoteModal] = useState(false);
  const [showExpertModal, setShowExpertModal] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Textes personnalisés par catégorie pour les 3 blocs avantages
  const categorySpecificTexts: Record<
    string,
    {
      delivery: string[];
      customization: string[];
      quality: string[];
    }
  > = {
    "amenagement-buanderie": {
      delivery: [
        "Service complet : conception, fabrication, livraison et pose",
      ],
      customization: [
        "Chaque création est unique, conçue sur mesure selon vos envies",
      ],
      quality: [
        "Fabrication locale avec des matériaux importés d'Europe",
      ],
    },
    bureau: {
      delivery: [
        "Nos équipes assurent la livraison et la pose clé en main",
      ],
      customization: [
        "Choisissez vos dimensions, vos couleurs et vos finitions",
      ],
      quality: [
        "Finition haut de gamme, qualité garantie par le Groupe FIMA",
      ],
    },
    cuisine: {
      delivery: [
        "Livraison et pose à domicile partout à Abidjan",
      ],
      customization: [
        "Du sur-mesure pour un intérieur qui vous ressemble",
      ],
      quality: [
        "FIMA DESIGN : de la conception à la réalisation, sans compromis sur la qualité",
      ],
    },
    dressing: {
      delivery: [
        "Nos équipes assurent la livraison et la pose clé en main",
      ],
      customization: [
        "Nos experts vous accompagnent dans la conception personnalisée de votre mobilier",
      ],
      quality: [
        "Un savoir-faire ivoirien reconnu depuis plusieurs générations",
      ],
    },
    "panneaux-decoratif": {
      delivery: [
        "Service complet : conception, fabrication, livraison et pose",
      ],
      customization: [
        "Chaque création est unique, conçue sur mesure selon vos envies",
      ],
      quality: [
        "Finition haut de gamme, qualité garantie par le Groupe FIMA",
      ],
    },
    "panneaux-decoratifs": {
      delivery: [
        "Service complet : conception, fabrication, livraison et pose",
      ],
      customization: [
        "Chaque création est unique, conçue sur mesure selon vos envies",
      ],
      quality: [
        "Finition haut de gamme, qualité garantie par le Groupe FIMA",
      ],
    },
    chambres: {
      delivery: [
        "Service complet : conception, fabrication, livraison et pose",
      ],
      customization: [
        "Un design qui s'adapte à votre espace et à votre style",
      ],
      quality: [
        "Design contemporain, robustesse et élégance à la fois",
      ],
    },
    portes: {
      delivery: ["Livré et installé sous 72H"],
      customization: [
        "Choisissez vos dimensions, vos couleurs et vos finitions",
      ],
      quality: [
        "Fabrication locale avec des matériaux importés d'Europe",
      ],
    },
    "salle-a-manger": {
      delivery: [
        "Livraison et pose à domicile partout à Abidjan",
      ],
      customization: [
        "Un design qui s'adapte à votre espace et à votre style",
      ],
      quality: [
        "FIMA DESIGN : de la conception à la réalisation, sans compromis sur la qualité",
      ],
    },
    "salles-a-manger": {
      delivery: [
        "Livraison et pose à domicile partout à Abidjan",
      ],
      customization: [
        "Un design qui s'adapte à votre espace et à votre style",
      ],
      quality: [
        "FIMA DESIGN : de la conception à la réalisation, sans compromis sur la qualité",
      ],
    },
    salon: {
      delivery: [
        "Service complet : conception, fabrication, livraison et pose",
      ],
      customization: [
        "Choisissez vos dimensions, vos couleurs et vos finitions",
      ],
      quality: [
        "Finition haut de gamme, qualité garantie par le Groupe FIMA",
      ],
    },
    bureaux: {
      delivery: [
        "Nos équipes assurent la livraison et la pose clé en main",
      ],
      customization: [
        "Choisissez vos dimensions, vos couleurs et vos finitions",
      ],
      quality: [
        "Finition haut de gamme, qualité garantie par le Groupe FIMA",
      ],
    },
    panneaux: {
      delivery: [
        "Service complet : conception, fabrication, livraison et pose",
      ],
      customization: [
        "Chaque création est unique, conçue sur mesure selon vos envies",
      ],
      quality: [
        "Finition haut de gamme, qualité garantie par le Groupe FIMA",
      ],
    },
    "panneaux-decoratifs-interieurs": {
      delivery: [
        "Service complet : conception, fabrication, livraison et pose",
      ],
      customization: [
        "Chaque création est unique, conçue sur mesure selon vos envies",
      ],
      quality: [
        "Finition haut de gamme, qualité garantie par le Groupe FIMA",
      ],
    },
    "habillement-mural": {
      delivery: [
        "Service complet : conception, fabrication, livraison et pose",
      ],
      customization: [
        "Chaque création est unique, conçue sur mesure selon vos envies",
      ],
      quality: [
        "Finition haut de gamme, qualité garantie par le Groupe FIMA",
      ],
    },
  };

  // Textes par défaut si la catégorie n'a pas de textes spécifiques
  const defaultTexts = {
    delivery: [
      "Livraison et pose à domicile partout à Abidjan",
      "Livré et installé sous 48h",
      "Nos équipes assurent la livraison et la pose clé en main",
      "Livraison express avec installation professionnelle",
      "Service complet : conception, fabrication, livraison et pose",
    ],
    customization: [
      "Chaque création est unique, conçue sur mesure selon vos envies",
      "Choisissez vos dimensions, vos couleurs et vos finitions",
      "Un design qui s'adapte à votre espace et à votre style",
      "Du sur-mesure pour un intérieur qui vous ressemble",
      "Nos experts vous accompagnent dans la conception personnalisée de votre mobilier",
    ],
    quality: [
      "Fabrication locale avec des matériaux importés d'Italie et d'Europe",
      "Finition haut de gamme, qualité garantie par le Groupe FIMA",
      "Design contemporain, robustesse et élégance à la fois",
      "Un savoir-faire ivoirien reconnu depuis plusieurs générations",
      "FIMA DESIGN : de la conception à la réalisation, sans compromis sur la qualité",
    ],
  };

  // Récupérer les textes appropriés selon la catégorie
  const getTextsForCategory = () => {
    const slug = category?.slug || categorySlug;
    // Extraire le slug réel en enlevant le préfixe "category-detail/"
    const actualSlug = slug.replace("category-detail/", "");
    console.log("🔍 Getting texts for category slug:", slug);
    console.log("🔍 Actual slug (without prefix):", actualSlug);
    console.log(
      "📝 Available specific texts:",
      Object.keys(categorySpecificTexts),
    );
    const texts =
      categorySpecificTexts[actualSlug] || defaultTexts;
    console.log(
      "✅ Using texts:",
      texts === defaultTexts ? "DEFAULT" : "SPECIFIC",
    );
    return texts;
  };

  useEffect(() => {
    console.log(
      "🔍 CategoryDetailPage - Loading category:",
      categorySlug,
    );
    console.log("📦 allCategories from hook:", allCategories);
    console.log("⏳ loading:", loading);

    // Si le slug est vide, marquer comme non trouvé
    if (!categorySlug || categorySlug.trim() === "") {
      console.error("❌ Category slug is empty");
      setNotFound(true);
      return;
    }

    // Si en cours de chargement, attendre
    if (loading) {
      console.log("⏳ Still loading, waiting...");
      return;
    }

    // Utiliser DEFAULT_CATEGORIES comme fallback si allCategories est vide ou invalide
    const categoriesToUse =
      allCategories &&
      (Array.isArray(allCategories)
        ? allCategories.length > 0
        : Object.keys(allCategories).length > 0)
        ? allCategories
        : DEFAULT_CATEGORIES;

    console.log("📦 Using categories:", categoriesToUse);
    console.log(
      "🔍 Type of categories:",
      typeof categoriesToUse,
    );
    console.log(
      "🔍 Is Array?:",
      Array.isArray(categoriesToUse),
    );

    // Extraire les catégories FIMA Design
    const fimaDesignCategories = Array.isArray(categoriesToUse)
      ? categoriesToUse
      : (categoriesToUse as any)["fima-design"] || [];

    console.log(
      "🗂️ FIMA Design categories:",
      fimaDesignCategories,
    );
    console.log(
      "🗂️ Number of categories:",
      fimaDesignCategories.length,
    );

    // Trouver la catégorie correspondante par slug ou key
    const foundCategory = fimaDesignCategories.find(
      (cat: any) =>
        cat.slug === categorySlug || cat.key === categorySlug,
    );

    if (foundCategory) {
      console.log("✅ Category found:", foundCategory.name);
      setCategory(foundCategory);
      setNotFound(false);

      // Récupérer les images de la catégorie depuis les données dynamiques
      const images = foundCategory.images || [];
      console.log(
        "📷 Images for category:",
        foundCategory.name,
        ":",
        images.length,
        "images",
      );
      if (images.length > 0) {
        console.log("🖼️ First image:", images[0]);
        console.log("🖼️ All images:", images);
      } else {
        console.warn(
          "⚠️ No images found for category:",
          foundCategory.name,
        );
      }
      setCategoryImages(images);
    } else {
      // Si aucune catégorie trouvée après le chargement
      console.error(
        "❌ Category not found for slug:",
        categorySlug,
      );
      console.error(
        "Available categories:",
        fimaDesignCategories.map((c: any) => ({
          key: c.key,
          slug: c.slug,
          name: c.name,
        })),
      );
      setNotFound(true);
    }
  }, [categorySlug, allCategories, loading]);

  // Message d'erreur si la catégorie n'existe pas
  if (notFound && !loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center max-w-md px-4">
          <FontAwesomeIcon
            icon={faCircleExclamation}
            className="text-5xl mb-4"
            style={{ color: "#E30613" }}
          />
          <h2
            className="text-2xl mb-4"
            style={{
              fontFamily: "Montserrat",
              color: "#000000",
            }}
          >
            Catégorie introuvable
          </h2>
          <p
            className="mb-6"
            style={{
              color: "#6E6E6E",
              fontFamily: "Montserrat",
            }}
          >
            La catégorie "{categorySlug}" n'existe pas ou n'est
            plus disponible.
          </p>
          <button
            onClick={() => onNavigate("fima-design")}
            className="px-6 py-3 transition-all"
            style={{
              backgroundColor: "#B5C233",
              color: "#FFFFFF",
              fontFamily: "Montserrat",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor =
                "#a0ad2a")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor =
                "#B5C233")
            }
          >
            <FontAwesomeIcon
              icon={faArrowLeft}
              className="mr-2"
            />
            Retour à FIMA Design
          </button>
        </div>
      </div>
    );
  }

  // Chargement en cours
  if (!category || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <FontAwesomeIcon
            icon={faSpinner}
            className="fa-spin text-4xl mb-4"
            style={{ color: "#B5C233" }}
          />
          <p
            style={{
              color: "#6E6E6E",
              fontFamily: "Montserrat",
            }}
          >
            Chargement de la catégorie...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div
        className="relative py-16 px-4"
        style={{ backgroundColor: "#F5F5F5" }}
      >
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <div className="mb-8">
            <button
              onClick={() => onNavigate("fima-design")}
              className="flex items-center gap-2 transition-colors"
              style={{
                color: "#6E6E6E",
                fontFamily: "Montserrat",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "#B5C233")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "#6E6E6E")
              }
            >
              <FontAwesomeIcon icon={faArrowLeft} />
              <span>Retour à FIMA Design</span>
            </button>
          </div>

          {/* Title */}
          <h1
            className="text-4xl mb-4"
            style={{
              fontFamily: "Montserrat",
              color: "#000000",
            }}
          >
            {category.name}
          </h1>
          <p
            className="text-xl max-w-3xl"
            style={{
              fontFamily: "Montserrat",
              color: "#6E6E6E",
            }}
          >
            {category.description ||
              "Découvrez notre collection de mobilier sur mesure, conçue avec expertise et passion"}
          </p>
        </div>
      </div>

      {/* Images Gallery */}
      {categoryImages.length > 0 && (
        <div className="py-16 px-4 max-w-7xl mx-auto">
          <h2
            className="text-3xl mb-8"
            style={{
              fontFamily: "Montserrat",
              color: "#000000",
            }}
          >
            Notre collection
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoryImages.map((image, index) => (
              <div
                key={index}
                className="aspect-square overflow-hidden bg-gray-100 group cursor-pointer"
                onClick={() => {
                  setLightboxOpen(true);
                  setLightboxIndex(index);
                }}
              >
                <ImageWithFallback
                  src={image}
                  alt={`${category.name} ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* CTA Buttons Section */}
      <div
        className="py-12 px-4"
        style={{ backgroundColor: "#F5F5F5" }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h3
            className="text-2xl mb-6"
            style={{
              fontFamily: "Montserrat",
              color: "#000000",
            }}
          >
            Prêt à concrétiser votre projet ?
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setShowQuoteModal(true)}
              className="px-8 py-4 transition-all duration-300"
              style={{
                backgroundColor: "#B5C233",
                color: "#6E6E6E",
                fontFamily: "Montserrat",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor =
                  "#a0ad2a")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor =
                  "#B5C233")
              }
            >
              <FontAwesomeIcon
                icon={faFileInvoice}
                className="mr-2"
              />
              Demander un devis
            </button>
            <button
              onClick={() => setShowExpertModal(true)}
              className="px-8 py-4 transition-all duration-300"
              style={{
                backgroundColor: "#6E6E6E",
                color: "#B5C233",
                border: "2px solid #6E6E6E",
                fontFamily: "Montserrat",
              }}
           
            >
              <FontAwesomeIcon
                icon={faUserTie}
                className="mr-2"
              />
              Contacter un expert
            </button>
          </div>
        </div>
      </div>

      {/* Information Sections */}
      <div className="py-16 px-4 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Livraison & installation */}
          <div className="text-center">
            <div
              className="w-20 h-20 mx-auto mb-6 flex items-center justify-center"
              style={{ backgroundColor: "#B5C233" }}
            >
              <FontAwesomeIcon
                icon={faTruckFast}
                className="text-3xl"
                style={{ color: "#6E6E6E" }}
              />
            </div>
            <h3
              className="text-2xl mb-4"
              style={{
                fontFamily: "Montserrat",
                color: "#6E6E6E",
              }}
            >
              Livraison & installation
            </h3>
            <div
              className="space-y-3 text-left"
              style={{
                fontFamily: "Montserrat",
                color: "#6E6E6E",
              }}
            >
              {getTextsForCategory().delivery.map(
                (text, index) => (
                  <p
                    key={index}
                    className="flex items-start gap-2"
                  >
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="mt-1 flex-shrink-0"
                      style={{ color: "#B5C233" }}
                    />
                    <span>{text}</span>
                  </p>
                ),
              )}
            </div>
          </div>

          {/* Personnalisation & sur mesure */}
          <div className="text-center">
            <div
              className="w-20 h-20 mx-auto mb-6 flex items-center justify-center"
              style={{ backgroundColor: "#B5C233" }}
            >
              <FontAwesomeIcon
                icon={faRulerCombined}
                className="text-3xl"
                style={{ color: "#6E6E6E" }}
              />
            </div>
            <h3
              className="text-2xl mb-4"
              style={{
                fontFamily: "Montserrat",
                color: "#6E6E6E",
              }}
            >
              Personnalisation & sur mesure
            </h3>
            <div
              className="space-y-3 text-left"
              style={{
                fontFamily: "Montserrat",
                color: "#6E6E6E",
              }}
            >
              {getTextsForCategory().customization.map(
                (text, index) => (
                  <p
                    key={index}
                    className="flex items-start gap-2"
                  >
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="mt-1 flex-shrink-0"
                      style={{ color: "#B5C233" }}
                    />
                    <span>{text}</span>
                  </p>
                ),
              )}
            </div>
          </div>

          {/* Qualité & expertise */}
          <div className="text-center">
            <div
              className="w-20 h-20 mx-auto mb-6 flex items-center justify-center"
              style={{ backgroundColor: "#B5C233" }}
            >
              <FontAwesomeIcon
                icon={faCertificate}
                className="text-3xl"
                style={{ color: "#6E6E6E" }}
              />
            </div>
            <h3
              className="text-2xl mb-4"
              style={{
                fontFamily: "Montserrat",
                color: "#6E6E6E",
              }}
            >
              Qualité & expertise
            </h3>
            <div
              className="space-y-3 text-left"
              style={{
                fontFamily: "Montserrat",
                color: "#6E6E6E",
              }}
            >
              {getTextsForCategory().quality.map(
                (text, index) => (
                  <p
                    key={index}
                    className="flex items-start gap-2"
                  >
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="mt-1 flex-shrink-0"
                      style={{ color: "#B5C233" }}
                    />
                    <span>{text}</span>
                  </p>
                ),
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div
        className="py-16 px-4"
        style={{ backgroundColor: "#6E6E6E" }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h3
            className="text-3xl mb-4"
            style={{
              fontFamily: "Montserrat",
              color: "#B5C233",
            }}
          >
            Transformons ensemble votre espace
          </h3>
          <p
            className="text-xl mb-8"
            style={{
              fontFamily: "Montserrat",
              color: "#B5C233",
            }}
          >
            40 ans d'expertise au service de votre projet
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setShowQuoteModal(true)}
              className="px-8 py-4 transition-all duration-300"
              style={{
                backgroundColor: "#B5C233",
                color: "#6E6E6E",
                fontFamily: "Montserrat",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor =
                  "#a0ad2a")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor =
                  "#B5C233")
              }
            >
              <FontAwesomeIcon
                icon={faFileInvoice}
                className="mr-2"
              />
              Demander un devis
            </button>
            <button
              onClick={() => setShowExpertModal(true)}
              className="px-8 py-4 transition-all duration-300"
              style={{
                backgroundColor: "transparent",
                color: "#B5C233",
                border: "2px solid #6E6E6E",
                fontFamily: "Montserrat",
              }}
            
            >
              <FontAwesomeIcon
                icon={faPhone}
                className="mr-2"
              />
              Parler à un expert
            </button>
          </div>
        </div>
      </div>

      {/* Modals */}
      <QuoteRequestModal
        isOpen={showQuoteModal}
        onClose={() => setShowQuoteModal(false)}
      />
      <ExpertConsultationModal
        isOpen={showExpertModal}
        onClose={() => setShowExpertModal(false)}
      />
      <ImageLightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        images={categoryImages}
        startIndex={lightboxIndex}
      />
    </div>
  );
}