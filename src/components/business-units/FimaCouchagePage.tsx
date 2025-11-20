import { useState } from "react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { ProductCategoryCarousel } from "../ProductCategoryCarousel";
import { DeliveryInstallationModal } from "../DeliveryInstallationModal";
import { PersonalizationModal } from "../PersonalizationModal";
import { QualityExpertiseModal } from "../QualityExpertiseModal";
import { WarrantyModal } from "../WarrantyModal";
import { Breadcrumb, BreadcrumbItem } from "../Breadcrumb";
import { useProductCategories, DEFAULT_CATEGORIES } from "../../hooks/useProductCategories";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faTruck,
  faAward,
  faShieldHalved,
  faChevronRight,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import confortBrodeImage from "figma:asset/5bb4257f511908ba6d68f0f0b3c015dccb725fae.png";
import eleganceUnieImage from "figma:asset/8005bf1c9e6576805405eb708f88ae021abea6d1.png";

interface FimaCouchagePageProps {
  onNavigate: (page: string, category?: string) => void;
  onBack: () => void;
  onQuoteRequest: () => void;
}

export function FimaCouchagePage({
  onNavigate,
  onBack,
  onQuoteRequest,
}: FimaCouchagePageProps) {
  const [isDeliveryModalOpen, setIsDeliveryModalOpen] =
    useState(false);
  const [
    isPersonalizationModalOpen,
    setIsPersonalizationModalOpen,
  ] = useState(false);
  const [isQualityModalOpen, setIsQualityModalOpen] =
    useState(false);
  const [isWarrantyModalOpen, setIsWarrantyModalOpen] =
    useState(false);

  // Récupérer les catégories dynamiques depuis la BD
  const { categories: allCategories } = useProductCategories();

  // Breadcrumb items
  const breadcrumbItems: BreadcrumbItem[] = [
    { label: 'Accueil', onClick: onBack },
    { label: 'FIMA Couchage' }
  ];

  // Extraire les catégories FIMA Couchage avec fallback robuste
  const fimaCouchageCategories =
    allCategories?.["fima-couchage"] &&
    allCategories["fima-couchage"].length > 0
      ? allCategories["fima-couchage"]
      : DEFAULT_CATEGORIES["fima-couchage"];
  
  // Mapper les catégories pour ajouter l'image principale (thumbnail ou première image)
  const categoriesWithImages = fimaCouchageCategories.map(cat => ({
    ...cat,
    image: cat.thumbnail || (cat.images && cat.images.length > 0 ? cat.images[0] : undefined)
  }));

  const expertisePoints = [
    {
      icon: (
        <FontAwesomeIcon icon={faTruck} className="text-2xl" />
      ),
      title: "Livraison rapide",
      description: "Livraison à domicile partout à Abidjan",
      details: [
        "Livraison rapide sous 48h",
        "Livraison partout à Abidjan",
        "Reprise de votre ancienne literie",
        "Service après-vente disponible 7j/7",
      ],
    },
    {
      icon: (
        <FontAwesomeIcon
          icon={faShieldHalved}
          className="text-2xl"
        />
      ),
      title: "Garantie & durabilité",
      description:
        "Garantie fabricant de 5 à 10 ans selon les gammes",
      details: [
        "Garantie 10 ans sur matelas médicaux",
        "Garantie 5 ans sur gamme confort",
        "Matériaux testés et certifiés",
        "Service de maintenance inclus",
      ],
    },
    {
      icon: (
        <FontAwesomeIcon icon={faAward} className="text-2xl" />
      ),
      title: "Qualité & expertise",
      description:
        "Leader de la literie en Côte d'Ivoire depuis 1985",
      details: [
        "Matières premières importées d'Europe",
        "Fabrication locale sous contrôle qualité",
        "Technologies de confort avancées",
        "Certifié ISO 9001 et Oeko-Tex",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <Breadcrumb items={breadcrumbItems} accentColor="#B5C233" />

      {/* Header de la page */}
      <div className="bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center py-4">
            <button
              onClick={onBack}
              className="flex items-center gap-2 hover:bg-gray-200 p-2 rounded-lg transition-colors mr-4"
            >
              <FontAwesomeIcon icon={faArrowLeft} />
              <span>Accueil</span>
            </button>

            <div className="flex items-center gap-4">
              <div className="w-20 h-20 rounded-lg overflow-hidden bg-white shadow-lg">
                <div className="text-center w-full h-full flex flex-col items-center justify-center">
                  <div style={{ color: "#6E6E6E" }}>FIMA</div>
                  <div style={{ color: "#B5C233" }}>
                    Couchage
                  </div>
                </div>
              </div>
              <div>
                <p style={{ color: "#6E6E6E" }}>
                  Literie & Matelas • Depuis 1985
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white pt-[64px] pr-[0px] pb-[30px] pl-[0px]">
        <div className="container mx-auto px-4">
          {/* Mobile: Affichage en colonne */}
          <div className="lg:hidden">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <div className="inline-block mb-4">
                <span
                  className="px-4 py-2"
                  style={{
                    backgroundColor: "#B5C233",
                    color: "#6E6E6E",
                  }}
                >
                  MADE IN CÔTE D'IVOIRE
                </span>
              </div>

              <h2
                className="mb-6 text-2xl"
                style={{
                  color: "#B5C233",
                }}
              >
                Le confort ivoirien, signé FIMA.
              </h2>

              <p
                className="mb-8 text-lg max-w-3xl mx-auto leading-relaxed text-left"
                style={{
                  color: "#6E6E6E",
                  textAlign: "justify",
                }}
              >
                Premier pilier historique du groupe, FIMA
                COUCHAGE est le cœur fondateur de l'aventure
                FIMA.
                <br />
                Depuis 1985, l'entreprise façonne des mousses,
                matelas orthopédiques et accessoires de literie
                répondant aux plus hauts critères de confort et
                de durabilité.
                <br />
                Chaque produit est conçu pour offrir un sommeil
                réparateur et une qualité de vie optimale, grâce
                à des technologies inspirées des meilleures
                innovations mondiales.
                <br />
                Des gammes comme FIMAflex, Majestic, Super
                Confort, Ressort Ergonomique incarnent la
                précision et la fiabilité du savoir-faire
                ivoirien.
                <br />
                Avec FIMA Couchage, le confort devient un art —
                celui de bien dormir, durablement.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <button
                  onClick={onQuoteRequest}
                  className="fima-btn-primary px-8 py-4 border-2"
                  style={{
                    backgroundColor: "#B5C233",
                    color: "#6E6E6E",
                    borderColor: "#B5C233",
                  }}
                >
                  Demander un Devis
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="ml-2"
                  />
                </button>
              </div>
            </div>

            {/* Mobile: Carrousel de catégories */}
            <div className="bg-gray-50 p-4">
              <h3
                className="mb-3"
                style={{
                  color: "#000000",
                }}
              >
                Nos gammes de produits
              </h3>
              <ProductCategoryCarousel
                categories={categoriesWithImages}
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
                    "✅ Mobile - Navigating to all-products with category filter:",
                    slug,
                  );
                  onNavigate("all-products", slug);
                }}
                accentColor="#B5C233"
              />
            </div>
          </div>

          {/* Desktop: Layout 40/60 côte à côte */}
          <div className="hidden lg:grid lg:grid-cols-2 lg:gap-8 lg:items-start">
            {/* Colonne gauche: Texte de présentation (50%) */}
            <div>
              <div className="text-center">
                <div className="inline-block mb-4">
                  <span
                    className="px-4"
                    style={{
                      backgroundColor: "#B5C233",
                      color: "#6E6E6E",
                    }}
                  >
                    MADE IN CÔTE D'IVOIRE
                  </span>
                </div>

                <h2
                  className="mb-6 text-2xl"
                  style={{
                    color: "#B5C233",
                  }}
                >
                  Le confort ivoirien, signé FIMA.
                </h2>

                <p
                  className="mb-8 text-lg leading-relaxed text-left"
                  style={{
                    color: "#6E6E6E",
                    textAlign: "justify",
                  }}
                >
                  Premier pilier historique du groupe, FIMA
                  COUCHAGE est le cœur fondateur de l'aventure
                  FIMA.
                  <br />
                  Depuis 1985, l'entreprise façonne des mousses,
                  matelas orthopédiques et accessoires de
                  literie répondant aux plus hauts critères de
                  confort et de durabilité.
                  <br />
                  Chaque produit est conçu pour offrir un
                  sommeil réparateur et une qualité de vie
                  optimale, grâce à des technologies inspirées
                  des meilleures innovations mondiales.
                  <br />
                  Des gammes comme FIMAflex, Majestic, Super
                  Confort, Ressort Ergonomique incarnent la
                  précision et la fiabilité du savoir-faire
                  ivoirien.
                  <br />
                  Avec FIMA Couchage, le confort devient un art
                  — celui de bien dormir, durablement.
                </p>
              </div>
            </div>

            {/* Colonne droite: Nos gammes de produits (50%) */}
            <div>
              <div className="bg-gray-50 pt-[24px] pr-[24px] pb-[20px] pl-[24px]">
                <h3
                  className="mb-4 text-center text-3xl"
                  style={{
                    color: "#B5C233",
                  }}
                >
                  Nos gammes de produits
                </h3>

                {/* Grille 3 colonnes pour toutes les catégories - Design en cercle */}
                <div className="grid grid-cols-3 gap-8 mb-6">
                  {categoriesWithImages.map((category) => (
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
                          "✅ Desktop - Navigating to all-products with category filter:",
                          category.slug,
                        );
                        onNavigate(
                          "all-products",
                          category.slug,
                        );
                      }}
                      className="group cursor-pointer flex flex-col items-center text-center"
                    >
                      {/* Image circulaire */}
                      <div className="w-24 h-24 rounded-full overflow-hidden mb-3 bg-gray-100 flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
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
                      {/* Nom de catégorie */}
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
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Expertise */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3
              className="mb-4 text-3xl"
              style={{ color: "#B5C233" }}
            >
              Pourquoi choisir FIMA Couchage ?
            </h3>
            <p
              className="max-w-2xl mx-auto"
              style={{ color: "#6E6E6E" }}
            >
              40 ans d'expertise au service de votre confort
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {expertisePoints.map((point, index) => (
              <div
                key={index}
                onClick={() => {
                  if (index === 0) setIsDeliveryModalOpen(true);
                  if (index === 1) setIsWarrantyModalOpen(true);
                  if (index === 2) setIsQualityModalOpen(true);
                }}
                className="group p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <div
                  className="w-16 h-16 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                  style={{
                    backgroundColor: "#B5C233",
                    color: "#6E6E6E",
                  }}
                >
                  {point.icon}
                </div>
                <h4
                  className="mb-3"
                  style={{ color: "#000000" }}
                >
                  {point.title}
                </h4>
                <p
                  className="mb-4"
                  style={{ color: "#6E6E6E" }}
                >
                  {point.description}
                </p>
                <button
                  className="mt-4 text-sm hover:underline"
                  style={{ color: "#B5C233" }}
                >
                  En savoir plus →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-gradient-to-r from-[#B5C233] to-[#a3b030]">
        <div className="container mx-auto px-4 text-center">
          <h3
            className="mb-4 text-3xl"
            style={{ color: "#6E6E6E" }}
          >
            Prêt à améliorer votre sommeil ?
          </h3>
          <p
            className="mb-8 text-lg max-w-2xl mx-auto"
            style={{ color: "#6E6E6E" }}
          >
            Passez votre commande en ligne ou appelez-nous
            directement pour bénéficier de nos conseils
            professionnels.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={onQuoteRequest}
              className="px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors"
              style={{
                backgroundColor: "#6E6E6E",
                color: "#B5C233",
              }}
            >
              <FontAwesomeIcon
                icon={faEnvelope}
                className="mr-2"
              />
              Demander un devis
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-[#B5C233] text-[rgb(110,110,110)] rounded-lg hover:bg-white/10 transition-colors">
              <FontAwesomeIcon
                icon={faPhone}
                className="mr-2"
              />
              <a
                href="tel:+2252723506102"
                className="text-sm hover:underline transition-colors"
                style={{ color: "#6E6E6E" }}
              >
                +225 27 23 50 61 02
              </a>
            </button>
          </div>
        </div>
      </section>

      {/* Modals */}
      <DeliveryInstallationModal
        isOpen={isDeliveryModalOpen}
        onClose={() => setIsDeliveryModalOpen(false)}
        businessUnit="FIMA Couchage"
        details={expertisePoints[0].details}
      />
      <WarrantyModal
        isOpen={isWarrantyModalOpen}
        onClose={() => setIsWarrantyModalOpen(false)}
        businessUnit="FIMA Couchage"
        details={expertisePoints[1].details}
      />
      <QualityExpertiseModal
        isOpen={isQualityModalOpen}
        onClose={() => setIsQualityModalOpen(false)}
        businessUnit="FIMA Couchage"
        details={expertisePoints[2].details}
      />
    </div>
  );
}