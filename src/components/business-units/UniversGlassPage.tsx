import { useState, useMemo, useEffect } from "react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Breadcrumb, BreadcrumbItem } from "../Breadcrumb";
const universGlassLogo = '/f0de3e8715f2ded08408ceda5ecebe082177873c.png';
import { useCMSCategories } from "../../hooks/useCMSCategories";

interface UniversGlassPageProps {
  onNavigate: (page: string, categoryKey?: string) => void;
  onBack: () => void;
  onQuoteRequest: () => void;
}

export function UniversGlassPage({
  onNavigate,
  onBack,
  onQuoteRequest,
}: UniversGlassPageProps) {
  const { categories } = useCMSCategories();
  const [activeCategory, setActiveCategory] = useState("");

  // Breadcrumb items
  const breadcrumbItems: BreadcrumbItem[] = [
    { label: 'Accueil', onClick: onBack },
    { label: 'Univers Glass' }
  ];

  // Charger les catégories Univers Glass depuis Supabase
  const productCategories = useMemo(() => {
    return categories
      .filter(cat => cat.business_unit === 'univers-glass' && cat.is_active)
      .sort((a, b) => a.order_index - b.order_index)
      .slice(0, 4) // Limiter aux 4 premiers
      .map(cat => ({
        key: cat.slug,
        name: cat.name,
        description: cat.description,
        image: cat.thumbnail || cat.images?.[0] || 'https://images.unsplash.com/photo-1749815362047-373af7e61072?w=400&h=400&fit=crop',
      }));
  }, [categories]);

  // Initialiser activeCategory avec la première catégorie
  useEffect(() => {
    if (!activeCategory && productCategories.length > 0) {
      setActiveCategory(productCategories[0].key);
    }
  }, [productCategories, activeCategory]);

  const expertisePoints = [
    {
      icon: <i className="fa-solid fa-building text-2xl"></i>,
      title: "Projets d'envergure",
      description:
        "Spécialistes des grands chantiers et bâtiments complexes",
    },
    {
      icon: <i className="fa-solid fa-shield text-2xl"></i>,
      title: "Normes et sécurité",
      description:
        "Conformité aux standards techniques les plus exigeants",
    },
    {
      icon: <i className="fa-solid fa-award text-2xl"></i>,
      title: "Matériaux premium",
      description:
        "Profilés aluminium haute qualité et verres techniques",
    },
    {
      icon: <i className="fa-solid fa-users text-2xl"></i>,
      title: "Équipe technique",
      description:
        "Ingénieurs, techniciens et poseurs certifiés",
    },
  ];

  const references = [
    {
      id: 1,
      title: "Centre Commercial Playce Marcory",
      category: "Façade commerciale",
      image:
        "https://images.unsplash.com/photo-1600607687644-c7171b42498f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4Mjl8MHwxfHNlYXJjaHwxfHxnbGFzcyUyMGJ1aWxkaW5nfGVufDB8fHx8MTc1NTYxMDkyNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description:
        "Façade complète en mur-rideau avec verrière d'accueil",
      surface: "2,500 m²",
    },
    {
      id: 2,
      title: "Immeuble de bureaux - Plateau",
      category: "Façade tertiaire",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4Mjl8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBidWlsZGluZ3xlbnwwfHx8fDE3NTU2MTA5MjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description:
        "Tour de bureaux avec façade structurelle vitrée",
      surface: "4,200 m²",
    },
    {
      id: 3,
      title: "Résidence haut standing - Cocody",
      category: "Résidentiel premium",
      image:
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4Mjl8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3VzZXxlbnwwfHx8fDE3NTU2MTA5MjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description:
        "Baies vitrées sur-mesure et garde-corps design",
      surface: "800 m²",
    },
  ];

  const technicalSpecs = [
    {
      category: "Profilés Aluminium",
      specs: [
        "Série 40-50-60mm",
        "Rupture de pont thermique",
        "Anodisation classe 1",
        "Laquage RAL",
      ],
    },
    {
      category: "Vitrages",
      specs: [
        "Double vitrage 4/16/4",
        "Verres feuilletés sécurit",
        "Contrôle solaire",
        "Isolation thermique renforcée",
      ],
    },
    {
      category: "Quincaillerie",
      specs: [
        "Ferrures européennes",
        "Serrures multipoints",
        "Systèmes de ventilation",
        "Accessoires design",
      ],
    },
    {
      category: "Finitions",
      specs: [
        "Joints EPDM",
        "Calfeutrements étanches",
        "Habillages sur-mesure",
        "Couleurs personnalisées",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <Breadcrumb items={breadcrumbItems} accentColor="#0EA5E9" />
      
      {/* Header de la page */}
      <div
        className="border-b"
        style={{ borderColor: "#0EA5E9" }}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center py-4">
            <button
              onClick={onBack}
              className="flex items-center gap-2 p-2 rounded-lg transition-colors mr-4"
              style={{
                ":hover": {
                  backgroundColor: "rgba(14, 165, 233, 0.2)",
                },
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor =
                  "rgba(14, 165, 233, 0.2)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor =
                  "transparent")
              }
            >
              <i className="fa-solid fa-arrow-left"></i>
              <span>Accueil</span>
            </button>

            <div className="flex items-center gap-4">
              <div className="w-20 h-24 rounded-lg overflow-hidden bg-white shadow-lg">
                <img
                  src={universGlassLogo}
                  alt="Univers Glass Logo"
                  className="w-full h-full object-contain p-2"
                />
              </div>
              <div>
                <p style={{ color: "#6E6E6E" }}>
                  Vitrerie & Aluminium • Solutions techniques
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="pt-[25px] pr-[0px] pb-[0px] pl-[0px]">
              <div className="inline-block mb-3">
                <span
                  className="px-4 py-2 text-sm font-bold text-white"
                  style={{ backgroundColor: "#0EA5E9" }}
                >
                  SOLUTIONS TECHNIQUES B2B
                </span>
              </div>

              <h2
                className="text-3xl lg:text-4xl font-bold mb-4"
                style={{
                  fontFamily: "Montserrat",
                  color: "#0EA5E9",
                }}
              >
                Expertise technique en vitrerie et aluminium
              </h2>

              <p
                className="mb-6 leading-relaxed"
                style={{
                  color: "#6E6E6E",
                  textAlign: "justify",
                }}
              >
                L'alliance parfaite du verre et de l'aluminium
                pour sublimer vos espaces. De la vitre
                décorative aux façades modernes, UNIVERS GLASS
                conçoit et installe des solutions sur mesure qui
                allient design, sécurité et durabilité.
                Professionnels ou particuliers, transformez vos
                projets en réalisations d'exception avec un
                partenaire de confiance.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={onQuoteRequest}
                  className="px-8 py-4 text-lg flex items-center justify-center gap-3 bg-[rgb(14,165,233)] text-[rgb(255,255,255)] transition-all"
                  style={{ border: "none" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor =
                      "white";
                    e.currentTarget.style.color = "#0EA5E9";
                    e.currentTarget.style.border =
                      "2px solid #0EA5E9";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor =
                      "rgb(14,165,233)";
                    e.currentTarget.style.color =
                      "rgb(255,255,255)";
                    e.currentTarget.style.border = "none";
                  }}
                >
                  Demande une Étude technique
                  <i className="fa-solid fa-chevron-right"></i>
                </button>
              </div>
            </div>

            <div className="relative">
              {/* Mobile et tablet: Carrousel de catégories */}
              <div className="bg-blue-50 p-4 lg:hidden">
                <h3
                  className="text-lg mb-3"
                  style={{
                    fontFamily: "Montserrat",
                    color: "#000000",
                  }}
                >
                  Nos catégories de produits
                </h3>
                <div className="grid grid-cols-4 gap-2">
                  {productCategories.map((category) => (
                    <button
                      key={category.key}
                      onClick={() => {
                        setActiveCategory(category.key);
                        onNavigate("all-products", category.key);
                      }}
                      className="flex flex-col items-center text-center gap-2"
                    >
                      <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-100 flex-shrink-0">
                        <ImageWithFallback
                          src={category.image}
                          alt={category.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <span
                        className="text-xs"
                        style={{
                          fontFamily: "Montserrat",
                          color: "#000000",
                        }}
                      >
                        {category.name}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Desktop: Section Nos catégories de produits */}
              <div className="hidden lg:block lg:max-w-3xl">
                {/* Section principale - Nos catégories */}
                <div className="bg-blue-50 self-start pt-[24px] pr-[24px] pb-[46px] pl-[24px]">
                  <h3
                    className="text-xl mb-4 text-center"
                    style={{
                      fontFamily: "Montserrat",
                      color: "#000000",
                    }}
                  >
                    Nos catégories de produits
                  </h3>

                  {/* Grille 4 colonnes pour toutes les catégories */}
                  <div className="grid grid-cols-4 gap-4 mb-6">
                    {productCategories.map((category) => (
                      <div
                        key={category.key}
                        onClick={() => {
                          setActiveCategory(category.key);
                          onNavigate("all-products", category.key);
                        }}
                        className="group cursor-pointer flex flex-col items-center text-center"
                      >
                        <div className="w-24 h-24 rounded-full overflow-hidden mb-3 bg-gray-100 flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                          <ImageWithFallback
                            src={category.image}
                            alt={category.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <h4
                          className="text-sm mb-1"
                          style={{
                            fontFamily: "Montserrat",
                            color: "#000000",
                          }}
                        >
                          {category.name}
                        </h4>
                        {/* <p
                          className="text-xs"
                          style={{ color: "#6E6E6E" }}
                        >
                          {category.description}
                        </p> */}
                      </div>
                    ))}
                  </div>

                  <div className="text-center mb-8">
                    {/* <button
                      onClick={() => onNavigate("all-products")}
                      className="px-6 py-3 text-white transition-all hover:scale-105"
                      style={{
                        backgroundColor: "#0EA5E9",
                        fontFamily: "Montserrat",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.backgroundColor =
                          "#0284c7")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.backgroundColor =
                          "#0EA5E9")
                      }
                    >
                      Voir tous les produits
                      <i className="fa-solid fa-arrow-right ml-2"></i>
                    </button> */}
                  </div>
                </div>
              </div>

              {/* Badge projets - uniquement sur mobile/tablet */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-lg p-6 shadow-xl lg:hidden">
                <div
                  className="text-3xl font-bold"
                  style={{ color: "#0EA5E9" }}
                >
                  500+
                </div>
                <div
                  className="text-sm"
                  style={{ color: "#6E6E6E" }}
                >
                  Projets réalisés
                </div>
                <div className="text-xs text-gray-500">
                  Depuis 1994
                </div>
              </div>

              {/* Badge repositionné pour desktop */}
              <div className="hidden lg:block absolute -bottom-4 -right-4 bg-white rounded-lg p-4 shadow-xl">
                <div
                  className="text-2xl font-bold"
                  style={{ color: "#0EA5E9" }}
                >
                  500+
                </div>
                <div
                  className="text-sm"
                  style={{ color: "#6E6E6E" }}
                >
                  Projets réalisés
                </div>
                <div className="text-xs text-gray-500">
                  Depuis 1994
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Présentation UNIVERS GLASS */}
      <section className="py-12  bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto p-8">
            <h2
              className="text-3xl mb-3 text-center"
              style={{
                fontFamily: "Montserrat",
                color: "#0EA5E9",
              }}
            >
              Transparence, Résistance, Modernité
            </h2>

            <h3
              className="text-2xl mb-6 text-center"
              style={{
                fontFamily: "Montserrat",
                color: "#6E6E6E",
              }}
            >
              L'excellence dans la précision et la finition.
            </h3>

            <div
              className="space-y-4 mb-8"
              style={{ color: "#6E6E6E", textAlign: "justify" }}
            >
              <p>
                Véritable symbole de la modernité du Groupe
                FIMA, UNIVERS GLASS offre des solutions
                techniques et esthétiques parfaitement adaptées
                aux exigences du marché contemporain.
              </p>
              <p>
                Nous réalisons des ouvrages sur mesure : façades
                vitrées, portes coulissantes, garde-corps,
                vitrines, fenêtres et cloisons en aluminium,
                alliant élégance et performance.
              </p>
              <p>
                Nos installations reposent sur l’utilisation de
                verres trempés, laqués ou double vitrage,
                associés à des profilés aluminium de haute
                qualité, garantissant isolation, sécurité et
                design moderne.
              </p>
              <p
                className="text-center italic"
                style={{
                  color: "#0EA5E9",
                  fontFamily: "Montserrat",
                  textAlign: "justify",
                }}
              >
                Alliant la maîtrise technique à une finition
                irréprochable, FIMA Vitrerie & Aluminium
                redéfinit les standards de la construction
                moderne en Afrique.
              </p>
            </div>

            {/* Points forts */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {expertisePoints.map((point, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg"
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center text-white flex-shrink-0"
                    style={{ backgroundColor: "#0EA5E9" }}
                  >
                    {point.icon}
                  </div>
                  <div>
                    <div
                      className="font-semibold mb-1"
                      style={{
                        color: "#0EA5E9",
                        fontFamily: "Montserrat",
                      }}
                    >
                      {point.title}
                    </div>
                    <div
                      className="text-sm"
                      style={{ color: "#6E6E6E" }}
                    >
                      {point.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Caractéristiques techniques */}
            <div className="mt-12">
              <h3
                className="text-2xl mb-6 text-center"
                style={{
                  fontFamily: "Montserrat",
                  color: "#0EA5E9",
                }}
              >
                Caractéristiques techniques
              </h3>

              {/* Grille 4 colonnes pour les caractéristiques techniques */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Profilés Aluminium */}
                <div
                  className="relative overflow-hidden p-4 bg-white border-2"
                  style={{
                    borderColor: "#0EA5E9",
                  }}
                >
                  <div className="text-center">
                    <h4
                      className="text-sm font-semibold mb-3"
                      style={{ fontFamily: "Montserrat", color: "#0EA5E9" }}
                    >
                      Profilés Aluminium
                    </h4>
                    <ul className="space-y-1 flex flex-col items-center">
                      <li className="flex items-center gap-1">
                        <i className="fa-solid fa-check text-xs flex-shrink-0" style={{ color: "#0EA5E9" }}></i>
                        <span className="text-xs" style={{ color: "#0EA5E9" }}>
                          Série 40-50-60mm
                        </span>
                      </li>
                      <li className="flex items-center gap-1">
                        <i className="fa-solid fa-check text-xs flex-shrink-0" style={{ color: "#0EA5E9" }}></i>
                        <span className="text-xs" style={{ color: "#0EA5E9" }}>
                          Rupture thermique
                        </span>
                      </li>
                      <li className="flex items-center gap-1">
                        <i className="fa-solid fa-check text-xs flex-shrink-0" style={{ color: "#0EA5E9" }}></i>
                        <span className="text-xs" style={{ color: "#0EA5E9" }}>
                          Anodisation classe 1
                        </span>
                      </li>
                      <li className="flex items-center gap-1">
                        <i className="fa-solid fa-check text-xs flex-shrink-0" style={{ color: "#0EA5E9" }}></i>
                        <span className="text-xs" style={{ color: "#0EA5E9" }}>
                          Powdercoating
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Vitrages */}
                <div
                  className="relative overflow-hidden p-4 bg-white border-2"
                  style={{
                    borderColor: "#0EA5E9",
                  }}
                >
                  <div className="text-center text-[#B5C233]">
                    <h4
                      className="text-sm font-semibold mb-3"
                      style={{ fontFamily: "Montserrat", color: "#0EA5E9" }}
                    >
                      Vitrages
                    </h4>
                    <ul className="space-y-1 flex flex-col items-center">
                      <li className="flex items-center gap-1">
                        <i className="fa-solid fa-check text-xs flex-shrink-0" style={{ color: "#0EA5E9" }}></i>
                        <span className="text-xs" style={{ color: "#0EA5E9" }}>
                          Double vitrage
                        </span>
                      </li>
                      <li className="flex items-center gap-1">
                        <i className="fa-solid fa-check text-xs flex-shrink-0" style={{ color: "#0EA5E9" }}></i>
                        <span className="text-xs" style={{ color: "#0EA5E9" }}>
                          Verres sécurit
                        </span>
                      </li>
                      <li className="flex items-center gap-1">
                        <i className="fa-solid fa-check text-xs flex-shrink-0" style={{ color: "#0EA5E9" }}></i>
                        <span className="text-xs" style={{ color: "#0EA5E9" }}>
                          Triplex
                        </span>
                      </li>
                      <li className="flex items-center gap-1">
                        <i className="fa-solid fa-check text-xs flex-shrink-0" style={{ color: "#0EA5E9" }}></i>
                        <span className="text-xs" style={{ color: "#0EA5E9" }}>
                          Isolation thermique
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Quincaillerie */}
                <div
                  className="relative overflow-hidden p-4 bg-white border-2"
                  style={{
                    borderColor: "#0EA5E9",
                  }}
                >
                  <div className="text-center">
                    <h4
                      className="text-sm font-semibold mb-3"
                      style={{ fontFamily: "Montserrat", color: "#0EA5E9" }}
                    >
                      Quincaillerie
                    </h4>
                    <ul className="space-y-1 flex flex-col items-center">
                      <li className="flex items-center gap-1">
                        <i className="fa-solid fa-check text-xs flex-shrink-0" style={{ color: "#0EA5E9" }}></i>
                        <span className="text-xs" style={{ color: "#0EA5E9" }}>
                          Ferrures européennes
                        </span>
                      </li>
                      <li className="flex items-center gap-1">
                        <i className="fa-solid fa-check text-xs flex-shrink-0" style={{ color: "#0EA5E9" }}></i>
                        <span className="text-xs" style={{ color: "#0EA5E9" }}>
                          Serrures multipoints
                        </span>
                      </li>
                      <li className="flex items-center gap-1">
                        <i className="fa-solid fa-check text-xs flex-shrink-0" style={{ color: "#0EA5E9" }}></i>
                        <span className="text-xs" style={{ color: "#0EA5E9" }}>
                          Ventilation intégrée
                        </span>
                      </li>
                      <li className="flex items-center gap-1">
                        <i className="fa-solid fa-check text-xs flex-shrink-0" style={{ color: "#0EA5E9" }}></i>
                        <span className="text-xs" style={{ color: "#0EA5E9" }}>
                          Accessoires design
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Finitions */}
                <div
                  className="relative overflow-hidden p-4 bg-white border-2"
                  style={{
                    borderColor: "#0EA5E9",
                  }}
                >
                  <div className="text-center">
                    <h4
                      className="text-sm font-semibold mb-3"
                      style={{ fontFamily: "Montserrat", color: "#0EA5E9" }}
                    >
                      Finitions
                    </h4>
                    <ul className="space-y-1 flex flex-col items-center">
                      <li className="flex items-center gap-1">
                        <i className="fa-solid fa-check text-xs flex-shrink-0" style={{ color: "#0EA5E9" }}></i>
                        <span className="text-xs" style={{ color: "#0EA5E9" }}>
                          Joints EPDM
                        </span>
                      </li>
                      <li className="flex items-center gap-1">
                        <i className="fa-solid fa-check text-xs flex-shrink-0" style={{ color: "#0EA5E9" }}></i>
                        <span className="text-xs" style={{ color: "#0EA5E9" }}>
                          Calfeutrements
                        </span>
                      </li>
                      <li className="flex items-center gap-1">
                        <i className="fa-solid fa-check text-xs flex-shrink-0" style={{ color: "#0EA5E9" }}></i>
                        <span className="text-xs" style={{ color: "#0EA5E9" }}>
                          Sur-mesure
                        </span>
                      </li>
                      <li className="flex items-center gap-1">
                        <i className="fa-solid fa-check text-xs flex-shrink-0" style={{ color: "#0EA5E9" }}></i>
                        <span className="text-xs" style={{ color: "#0EA5E9" }}>
                          Couleurs RAL
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Références projets */}
      <section className="py-16" id="nos-references">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2
              className="text-3xl font-bold mb-4"
              style={{
                fontFamily: "Montserrat",
                color: "#0EA5E9",
              }}
            >
              Nos références marquantes
            </h2>
            <p
              className="text-lg max-w-2xl mx-auto"
              style={{ color: "#6E6E6E" }}
            >
              Découvrez quelques-uns de nos projets
              emblématiques qui témoignent de notre expertise
              technique et de notre capacité à relever les défis
              les plus complexes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {references.map((reference) => (
              <div
                key={reference.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="aspect-video relative">
                  <ImageWithFallback
                    src={reference.image}
                    alt={reference.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span
                      className="px-3 py-1 rounded-full text-xs font-bold text-white"
                      style={{ backgroundColor: "#0EA5E9" }}
                    >
                      {reference.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-white rounded-lg px-3 py-1">
                    <span className="text-xs font-bold text-blue-600">
                      {reference.surface}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3
                    className="font-bold text-lg mb-2"
                    style={{ color: "#000000" }}
                  >
                    {reference.title}
                  </h3>
                  <p
                    className="text-sm mb-4"
                    style={{ color: "#6E6E6E" }}
                  >
                    {reference.description}
                  </p>
                  <button
                    className="flex items-center gap-2 transition-colors"
                    style={{ color: "#0EA5E9" }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "#0c93d1")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "#0EA5E9")
                    }
                  >
                    <i className="fa-solid fa-eye text-sm"></i>
                    <span className="text-sm font-medium">
                      Voir le projet
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              className="px-8 py-3 rounded-xl font-semibold text-white transition-colors"
              style={{ backgroundColor: "#0EA5E9" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor =
                  "#0891c7")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor =
                  "#0EA5E9")
              }
            >
              Voir toutes nos références
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-16 text-white"
        style={{
          background:
            "linear-gradient(to right, #0EA5E9, #0c93d1)",
        }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2
              className="text-3xl font-bold mb-4"
              style={{ fontFamily: "Montserrat" }}
            >
              Un projet technique à réaliser ?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Nos ingénieurs et techniciens sont à votre
              disposition pour étudier vos besoins et vous
              proposer la solution optimale.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={onQuoteRequest}
                className="px-8 py-4 bg-white rounded-xl font-semibold transition-colors"
                style={{ color: "#0EA5E9" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor =
                    "#f3f4f6")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor =
                    "white")
                }
              >
                Demander une étude technique
              </button>
              <button
                className="px-8 py-4 border-2 border-white text-white rounded-xl font-semibold transition-colors"
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor =
                    "white";
                  e.currentTarget.style.color = "#0EA5E9";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor =
                    "transparent";
                  e.currentTarget.style.color = "white";
                }}
              >
                Contacter un expert
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}