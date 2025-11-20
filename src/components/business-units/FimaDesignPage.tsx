import { useState, useEffect } from "react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Breadcrumb, BreadcrumbItem } from "../Breadcrumb";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  useProductCategories,
  DEFAULT_CATEGORIES,
} from "../../hooks/useProductCategories";
import { ProductCategoryCarousel } from "../ProductCategoryCarousel";
import { DeliveryInstallationModal } from "../DeliveryInstallationModal";
import { PersonalizationModal } from "../PersonalizationModal";
import { QualityExpertiseModal } from "../QualityExpertiseModal";
import { ImageLightbox } from "../ImageLightbox";

interface FimaDesignPageProps {
  onNavigate: (page: string, category?: string) => void;
  onBack: () => void;
  onQuoteRequest: () => void;
}

export function FimaDesignPage({
  onNavigate,
  onBack,
  onQuoteRequest,
}: FimaDesignPageProps) {
  const [activeCategory, setActiveCategory] =
    useState("mobilier");
  const [isDeliveryModalOpen, setIsDeliveryModalOpen] =
    useState(false);
  const [
    isPersonalizationModalOpen,
    setIsPersonalizationModalOpen,
  ] = useState(false);
  const [isQualityModalOpen, setIsQualityModalOpen] =
    useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState<
    string[]
  >([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Récupérer les catégories de produits dynamiques depuis Supabase
  const { categories: allCategories } = useProductCategories();

  // Breadcrumb items
  const breadcrumbItems: BreadcrumbItem[] = [
    { label: "Accueil", onClick: onBack },
    { label: "FIMA Design" },
  ];

  // Extraire les catégories FIMA Design avec fallback robuste
  const fimaDesignCategories =
    (allCategories as any)?.["fima-design"] &&
    (allCategories as any)["fima-design"].length > 0
      ? (allCategories as any)["fima-design"]
      : DEFAULT_CATEGORIES["fima-design"];

  // Helper pour mapper les catégories avec les vraies images
  const mapCategoriesWithImages = (prefix: string) => {
    const mappedCategories = fimaDesignCategories.map(
      (cat: any, index: number) => {
        const slug = cat.slug || cat.key;
        console.log(
          `🗂️ Mapping category [${prefix}]:`,
          cat.name,
          "-> slug:",
          slug,
        );
        return {
          id: `design-cat-${prefix}-${slug}-${index}`,
          name: cat.name,
          // Ne pas afficher d'image par défaut - attendre le chargement des vraies images
          image: cat.thumbnail || undefined,
          slug: slug,
          productCount: cat.count,
        };
      },
    );
    console.log(
      `📋 Total mapped categories [${prefix}]:`,
      mappedCategories.length,
    );
    return mappedCategories;
  };

  const designCategories = [
    {
      key: "mobilier",
      name: "Mobilier sur-mesure",
      icon: "🪑",
      description: "Créations uniques en bois noble africain",
    },
    {
      key: "cuisines",
      name: "Cuisines équipées",
      icon: "🏠",
      description: "Aménagements complets et fonctionnels",
    },
    {
      key: "dressings",
      name: "Dressings & Rangements",
      icon: "👔",
      description: "Solutions d'organisation sur-mesure",
    },
    {
      key: "bureaux",
      name: "Mobilier de bureau",
      icon: "💼",
      description: "Espaces de travail contemporains",
    },
  ];

  const expertisePoints = [
    {
      icon: <i className="fa-solid fa-truck text-2xl"></i>,
      title: "Livraison & installation",
      description:
        "Livraison et pose à domicile partout à Abidjan",
      details: [
        "Livré et installé sous 48h",
        "Nos équipes assurent la livraison et la pose clé en main",
        "Livraison express avec installation professionnelle",
        "Service complet : conception, fabrication, livraison et pose",
      ],
    },
    {
      icon: (
        <i className="fa-solid fa-ruler-combined text-2xl"></i>
      ),
      title: "Personnalisation & sur mesure",
      description:
        "Chaque création est unique, conçue sur mesure selon vos envies",
      details: [
        "Choisissez vos dimensions, vos couleurs et vos finitions",
        "Un design qui s'adapte à votre espace et à votre style",
        "Du sur-mesure pour un intérieur qui vous ressemble",
        "Nos experts vous accompagnent dans la conception personnalisée de votre mobilier",
      ],
    },
    {
      icon: <i className="fa-solid fa-award text-2xl"></i>,
      title: "Qualité & expertise",
      description:
        "Fabrication locale avec des matériaux importés d'Italie et d'Europe",
      details: [
        "Finition haut de gamme, qualité garantie par le Groupe FIMA",
        "Design contemporain, robustesse et élégance à la fois",
        "Un savoir-faire ivoirien reconnu depuis plusieurs générations",
        "FIMA DESIGN : de la conception à la réalisation, sans compromis sur la qualité",
      ],
    },
  ];

  const realisations = [
    {
      id: 1,
      title: "Villa Moderne - Cocody",
      category: "Aménagement complet",
      image:
        "https://images.unsplash.com/photo-1680176832018-afc055ac7dc7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZGp1c3RhYmxlJTIwYmVkfGVufDF8fHx8MTc1ODExODg5M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description:
        "Mobilier sur-mesure en acajou pour villa contemporaine",
    },
    {
      id: 2,
      title: "Bureau Exécutif - Plateau",
      category: "Mobilier professionnel",
      image:
        "https://images.unsplash.com/photo-1585086287371-e455901ee81e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaWxsb3clMjBtZW1vcnklMjBmb2FtfGVufDF8fHx8MTc1ODExODg5Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description:
        "Aménagement bureau direction avec bibliothèque intégrée",
    },
    {
      id: 3,
      title: "Cuisine Équipée - Deux Plateaux",
      category: "Cuisine sur-mesure",
      image:
        "https://images.unsplash.com/photo-1688382575764-8a6a65d3821e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWQlMjBmcmFtZSUyMHdvb2R8ZW58MXx8fHwxNzU4MTE4OTAwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description:
        "Cuisine moderne en bois massif avec îlot central",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <Breadcrumb items={breadcrumbItems} accentColor="#6E6E6E" />
      
      {/* Header de la page */}
      <div className="bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center py-4">
            <button
              onClick={onBack}
              className="flex items-center gap-2 hover:bg-gray-200 p-2 rounded-lg transition-colors mr-4"
            >
              <i className="fa-solid fa-arrow-left"></i>
              <span>Accueil</span>
            </button>

            <div className="flex items-center gap-4">
              <div className="w-20 h-20 rounded-lg overflow-hidden bg-white shadow-lg">
                <div className="text-center w-full h-full flex flex-col items-center justify-center">
                  <div
                    style={{
                      color: "#6E6E6E",
                    }}
                  >
                    FIMA
                  </div>
                  <div style={{ color: "#6E6E6E" }}>Design</div>
                </div>
              </div>
              <div>
                <p style={{ color: "#6E6E6E" }}>
                  Menuiserie & Ameublement • Sur-mesure
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          {/* Conteneur principal centré - Une seule colonne */}
          <div className="max-w-4xl mx-auto text-center mb-12">
            <div className="inline-block mb-4">
              <span
                className="px-4"
                style={{
                  backgroundColor: "#6E6E6E",
                  color: "#B5C233",
                }}
              >
                MADE IN CÔTE D'IVOIRE
              </span>
            </div>

            <h2
              className="mb-6 text-2xl"
              style={{
                color: "#6E6E6E",
              }}
            >
              L'art du bois noble au service de votre intérieur
            </h2>

            <p
              className="mb-8 text-lg max-w-3xl mx-auto"
              style={{ color: "#6E6E6E" }}
            >
              Créations sur-mesure en essences africaines
              nobles. Du mobilier contemporain aux aménagements
              complets, FIMA Design transforme vos espaces avec
              expertise et passion.
            </p>

            {/* <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button
                onClick={onQuoteRequest}
                className="fima-design-btn-primary px-8 py-4 border-2"
                style={{
                  backgroundColor: "#6E6E6E",
                  color: "#B5C233",
                  borderColor: "#B5C233",
                }}
              >
                Demander un Devis
                <i className="fa-solid fa-chevron-right"></i>
              </button>

              <button
                className="fima-design-btn-secondary px-8 py-4 border-2"
                style={{ borderColor: "#B5C233" }}
              >
                Nos réalisations
              </button>
            </div> */}
          </div>

          {/* Section Catégories de produits - Sous les 2 colonnes */}
          <div className="mt-12">
            <div className="relative">
              {/* Mobile et tablet: Carrousel de catégories */}
              <div className="bg-gray-50 p-4 lg:hidden">
                <h3
                  className="mb-3"
                  style={{
                    color: "#000000",
                  }}
                >
                  Nos catégories de produits
                </h3>
                {fimaDesignCategories.length > 0 ? (
                  <ProductCategoryCarousel
                    categories={mapCategoriesWithImages(
                      "mobile",
                    )}
                    onCategoryClick={(slug) => {
                      console.log(
                        "📱 Mobile - Category clicked with slug:",
                        slug,
                      );
                      if (!slug) {
                        console.error(
                          "❌ Mobile - Empty slug received!",
                        );
                        return;
                      }
                      console.log(
                        "✅ Mobile - Navigating to category-detail with slug:",
                        slug,
                      );
                      // Redirection vers category-detail pour afficher les images de la catégorie
                      onNavigate("category-detail", slug);
                    }}
                    accentColor="#6E6E6E"
                  />
                ) : (
                  <p style={{ color: "#6E6E6E" }}>
                    Chargement...
                  </p>
                )}
              </div>

              {/* Desktop: Section Nos catégories de produits */}
              <div className="hidden lg:block">
                {/* Section principale - Nos catégories */}
                <div className="bg-gray-50 p-6 self-start">
                  <h3
                    className="mb-4 text-center text-3xl"
                    style={{
                      color: "#6E6E6E",
                    }}
                  >
                    Nos catégories de produits
                  </h3>

                  {/* Toujours afficher les catégories (fallback inclus) */}
                  <>
                    {/* Grille 4 colonnes pour toutes les catégories */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {mapCategoriesWithImages("desktop").map(
                        (category: any) => (
                          <div
                            key={category.id}
                            onClick={() => {
                              console.log(
                                "🖱️ Desktop - Category clicked:",
                                category.name,
                                "with slug:",
                                category.slug,
                              );
                              if (!category.slug) {
                                console.error(
                                  "❌ Desktop - Empty slug for category:",
                                  category.name,
                                );
                                return;
                              }
                              console.log(
                                "✅ Desktop - Navigating to category-detail with slug:",
                                category.slug,
                              );
                              // Redirection vers category-detail pour afficher les images de la catégorie
                              onNavigate(
                                "category-detail",
                                category.slug,
                              );
                            }}
                            className="group cursor-pointer flex flex-col items-center text-center"
                          >
                            <div className="w-32 h-32 rounded-full overflow-hidden mb-3 bg-gray-100 flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                              {category.image ? (
                                <ImageWithFallback
                                  src={category.image}
                                  alt={category.name}
                                  className="w-full h-full object-cover"
                                />
                              ) : (
                                <div className="w-full h-full flex items-center justify-center bg-gray-200">
                                  <i
                                    className="fa-solid fa-image"
                                    style={{
                                      color: "#6E6E6E",
                                    }}
                                  ></i>
                                </div>
                              )}
                            </div>
                            <h4
                              className="mb-1 min-h-[2.5rem] flex items-center justify-center px-1"
                              style={{
                                color: "#000000",
                                lineHeight: "1.3",
                                wordWrap: "break-word",
                                width: "100%",
                              }}
                            >
                              {category.name}
                            </h4>
                            {/* {category.productCount !==
                              undefined && (
                              <p style={{ color: "#6E6E6E" }}>
                                {category.productCount}{" "}
                                produit
                                {category.productCount !== 1
                                  ? "s"
                                  : ""}
                              </p>
                            )} */}
                          </div>
                        ),
                      )}
                    </div>
                  </>
                </div>
              </div>

              {/* Badge expertise - uniquement sur mobile/tablet */}
              <div className="absolute -bottom-6 -right-6 bg-white p-6 shadow-xl lg:hidden">
                <div style={{ color: "#6E6E6E" }}>30+</div>
                <div style={{ color: "#6E6E6E" }}>
                  Années d'expertise
                </div>
                <div className="text-gray-500">
                  Menuiserie fine
                </div>
              </div>

              {/* Badge repositionné pour desktop */}
            </div>
          </div>

          {/* Section descriptive FIMA Design - Après les catégories */}
          <div className="mt-[30px] mr-[0px] mb-[0px] ml-[0px]">
            <div className="max-w-5xl mx-auto">
              <div
                className="bg-gray-50 p-4 md:p-8 border-l-4"
                style={{ borderLeftColor: "#6E6E6E" }}
              >
                <h3
                  className="mb-6 text-center md:text-left text-2xl"
                  style={{
                    color: "#6E6E6E",
                  }}
                >
                  Quand la créativité rencontre la précision.
                </h3>

                <div
                  className="space-y-4"
                  style={{ color: "#6E6E6E" }}
                >
                  <p>
                    <strong>FIMA DESIGN</strong> incarne
                    l'alliance du design contemporain et de la
                    tradition artisanale.
                  </p>

                  <p>
                    Spécialisée dans la menuiserie moderne et la
                    fabrication de meubles sur mesure, cette
                    division propose des créations à la fois
                    esthétiques, fonctionnelles et durables.
                  </p>

                  <p>
                    Ses ateliers utilisent des matériaux nobles
                    et innovants, tels que le mélaminé de
                    qualité supérieure, les vitres et
                    accessoires importés d'Italie, ainsi que des
                    bois sélectionnés avec soin pour leur
                    résistance et leur élégance.
                  </p>

                  <p>
                    De la conception 3D à la réalisation finale,
                    FIMA DESIGN transforme chaque espace en un
                    lieu unique, à l'image de ceux qui
                    l'habitent.
                  </p>

                  <div className="mt-6">
                    <h4
                      className="mb-3"
                      style={{
                        color: "#6E6E6E",
                      }}
                    >
                      Produits et services :
                    </h4>
                    <ul
                      className="space-y-2 pl-5 list-disc"
                      style={{ color: "#6E6E6E" }}
                    >
                      <li>
                        Meubles sur mesure (bureaux, cuisines,
                        chambres, dressings, etc.)
                      </li>
                      <li>
                        Agencements intérieurs et solutions
                        d'ameublement haut de gamme
                      </li>
                      <li>
                        Portes, placards et éléments décoratifs
                        modernes
                      </li>
                    </ul>
                  </div>

                  <p className="italic mt-6 pt-6 border-t border-gray-300">
                    <strong>FIMA DESIGN</strong>, c'est la
                    signature du raffinement ivoirien, nourri
                    par l'expertise internationale.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Catégories de produits - Carrousel Mobile */}
      {/* {fimaDesignCategories.length > 0 && (
        <section className="py-8 bg-white border-t border-b border-gray-100">
          <div className="container mx-auto px-4">
            <div className="mb-4">
              <h3
                className="text-lg mb-1"
                style={{
                  fontFamily: "Montserrat",
                  color: "#000000",
                }}
              >
                Nos catégories de produits
              </h3>
              <p
                className="text-sm"
                style={{ color: "#6E6E6E" }}
              >
                Explorez notre gamme complète
              </p>
            </div>

            <ProductCategoryCarousel
              categories={mapCategoriesWithImages("section")}
              onCategoryClick={(slug) => {
                console.log("Category clicked:", slug);
                // Vous pouvez ajouter une navigation ou un filtrage ici
                onNavigate("all-products");
              }}
              accentColor="#6E6E6E"
            />
          </div>
        </section>
      )} */}

      {/* Portfolio de réalisations */}
      <section
        className="py-16 bg-gray-50"
        id="nos-realisations"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1
              className="mb-4"
              style={{
                color: "#6E6E6E",
              }}
            >
              Nos dernières réalisations
            </h1>
            <p
              className="max-w-2xl mx-auto"
              style={{ color: "#6E6E6E" }}
            >
              Découvrez quelques-uns de nos projets récents qui
              illustrent notre savoir-faire et notre attention
              aux détails.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {realisations.map((realisation, index) => (
              <div
                key={realisation.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div
                  className="aspect-video relative cursor-pointer group"
                  onClick={() => {
                    setLightboxImages(
                      realisations.map((r) => r.image),
                    );
                    setLightboxIndex(index);
                    setLightboxOpen(true);
                  }}
                >
                  <ImageWithFallback
                    src={realisation.image}
                    alt={realisation.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span
                      className="px-3 py-1"
                      style={{
                        backgroundColor: "#6E6E6E",
                        color: "#B5C233",
                      }}
                    >
                      {realisation.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3
                    className="mb-2"
                    style={{ color: "#000000" }}
                  >
                    {realisation.title}
                  </h3>
                  <p
                    className="mb-4"
                    style={{ color: "#6E6E6E" }}
                  >
                    {realisation.description}
                  </p>
                  <button className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors">
                    <i className="fa-solid fa-eye"></i>
                    <span>Voir le projet</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              className="fima-btn-secondary px-8 py-3"
              style={{
                backgroundColor: "#6E6E6E",
                color: "#B5C233",
              }}
            >
              Voir toutes nos réalisations
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-16 bg-gradient-to-r"
        style={{
          backgroundColor: "#6E6E6E",
          color: "#B5C233",
        }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="mb-4">
              Un projet d'aménagement en tête ?
            </h2>
            <p className="mb-8 max-w-2xl mx-auto opacity-90">
              Nos experts vous accompagnent de la conception à
              la réalisation. Devis gratuit et conseil
              personnalisé.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={onQuoteRequest}
                className="px-8 py-4 text-white rounded-xl transition-colors"
                style={{
                  backgroundColor: "#B5C233",
                  color: "#656565",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor =
                    "#a3af2e")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor =
                    "#B5C233")
                }
              >
                Demander un devis gratuit
              </button>
              <button
                className=" px-8 py-4 bg-gray text-[#B5C233] rounded-xl  transition-colors"
                style={{
                  borderColor: "#0EA5E9",
                  // borderBottomColor: "gray",
                  boxShadow: "gray 0 0 4 0",
                }}
              >
                Prendre rendez-vous
              </button>
            </div>

            <div className="mt-8 flex items-center justify-center gap-8 opacity-75">
              <div className="flex items-center gap-2">
                <i className="fa-solid fa-circle-check"></i>
                <span>Devis </span>
              </div>
              <div className="flex items-center gap-2">
                <i className="fa-solid fa-circle-check"></i>
                <span>Conseil personnalisé</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="fa-solid fa-circle-check"></i>
                <span>Pose incluse</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Installation Modal */}
      <DeliveryInstallationModal
        isOpen={isDeliveryModalOpen}
        onClose={() => setIsDeliveryModalOpen(false)}
      />

      {/* Personalization Modal */}
      <PersonalizationModal
        isOpen={isPersonalizationModalOpen}
        onClose={() => setIsPersonalizationModalOpen(false)}
      />

      {/* Quality Expertise Modal */}
      <QualityExpertiseModal
        isOpen={isQualityModalOpen}
        onClose={() => setIsQualityModalOpen(false)}
      />

      {/* Image Lightbox */}
      <ImageLightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        images={lightboxImages}
        startIndex={lightboxIndex}
      />
    </div>
  );
}