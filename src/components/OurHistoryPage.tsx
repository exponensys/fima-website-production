const image_76eb04a06107aac17049b46414ee32567a0e3dc5 = '/76eb04a06107aac17049b46414ee32567a0e3dc5.png';
const image1985 = 'https://jxikbrjmdmznoehhccdw.supabase.co/storage/v1/object/public/make-98c6ec1c-media/images/63f05d3b-ef84-477f-94b9-d8dbbd8566a4.jpg';
const image2015 = '/1ce167b002f03ad021af8910a7cb432549feb714.png';
const image2008 = '/ec8b6823107c5a366f55b7ba8faa0ab7d47e5ce5.png';
const image2024 = '/c6487dd8bc2d05ff3b91c3d417a7256b9b9356c7.png';
const image1992 = '/1d8dcb4c235fc7ed31159b70c89822799bfe54f5.png';
const image2013Archibat = '/4b7d065ded94b2dc2df9d37aa63ccfce50b2cca7.png';
import { useState } from "react";
import {
  ArrowLeft,
  Calendar,
  Users,
  Award,
  Building2,
  Target,
  Heart,
  Star,
  ChevronRight,
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ImageLightbox } from "./ImageLightbox";

interface OurHistoryPageProps {
  onBack: () => void;
  onNavigate: (page: string) => void;
  onExpertClick?: (type: "expert" | "appointment") => void;
}

export function OurHistoryPage({
  onBack,
  onNavigate,
  onExpertClick,
}: OurHistoryPageProps) {
  const [activeTimelineItem, setActiveTimelineItem] =
    useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState<
    string[]
  >([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const milestones = [
    {
      year: "1985",
      title: "Les débuts d'une aventure",
      description:
        "C'est à Treichville, dans un petit magasin de vente de matelas, que l'histoire de FIMA commence mais très rapidement elle se transforme en une usine de fabrication situé jusqu'à ce jour à Yopougon zone industrielle. À cette époque, l'entreprise se consacre exclusivement à la commercialisation de matelas traditionnels, avec une vision claire : offrir aux foyers ivoiriens un confort de qualité, à un prix juste.",
      image: image1985,
      achievements: [
        "Mise en place d'un petit atelier de fabrication",
        "Équipe initiale de quelques employés passionnés",
        "Focus sur la literie et le service client personnalisé",
      ],
    },
    {
      year: "1992",
      title: "L'expansion et la diversification",
      description:
        "Fort du succès de sa première activité dans la literie, FIMA amorce une nouvelle phase de croissance. L'entreprise élargit son champ d'action à la menuiserie et à l'ameublement, posant ainsi les bases de son expertise multi-métiers qui fait aujourd'hui sa renommée.",
      image: image1992,
      achievements: [
        "Ouverture du premier atelier de menuiserie",
        "Renforcement des équipes, avec une vingtaine d'employés",
        "Signature des premiers contrats B2B avec des entreprises locales",
      ],
    },
    {
      year: "2008",
      title: "Naissance d'UNIVERS GLASS",
      description:
        "Toujours animée par l'esprit d'innovation, FIMA crée UNIVERS GLASS, sa division dédiée à la vitrerie et à l'aluminium. Cette nouvelle branche vient répondre à la demande croissante du secteur de la construction moderne, en alliant design, performance et durabilité.",
      image: image2008,
      achievements: [
        "Lancement du 3ᵉ métier du Groupe : vitrerie et aluminium",
        "Renforcement des effectifs avec l'intégration de nouveaux techniciens spécialisés",
        "Premiers projets institutionnels réalisés avec succès, consolidant la crédibilité du Groupe",
      ],
    },
    {
      year: "2013",
      title: "Une consécration à ARCHIBAT",
      description:
        "En 2013, 2015 et 2017, le Groupe FIMA a participé à trois éditions successives du prestigieux Salon ARCHIBAT, vitrine incontournable de l'innovation dans le secteur du bâtiment et du design en Côte d'Ivoire. À chacune de ces participations, le Groupe s'est illustré en remportant des distinctions, témoignant de la constance de son excellence. L'année 2013 marque un tournant majeur : pour sa troisième participation, FIMA décroche le 1er prix, consacrant ainsi la qualité, l'originalité et le savoir-faire local qui font la réputation du Groupe. Cette reconnaissance renforce notre position de référence dans le domaine du design et de la construction en Côte d'Ivoire.",
      image: image2013Archibat,
      achievements: [
        "Trois participations officielles au Salon ARCHIBAT (2013, 2015 et 2017)",
        "Distinctions à chaque édition, dont le 1er prix en 2013",
        "Valorisation du savoir-faire ivoirien et consolidation de la notoriété du Groupe sur le marché national",
      ],
    },
    {
      year: "2025",
      title: "Groupe FIMA aujourd'hui",
      description:
        "En 2025, le Groupe FIMA s'impose comme un leader incontesté dans le secteur de la literie, de la menuiserie et de la vitrerie en Côte d'Ivoire et dans toute la sous-région. Fort de plusieurs centaines d'employés et d'un réseau de partenaires fidèles, le Groupe continue d'incarner l'excellence ivoirienne à travers ses trois métiers, en alliant innovation, qualité et savoir-faire local.",
      image: image2024,
      achievements: [
        "Des centaines d'employés passionnés et formés aux standards les plus exigeants",
        "Une clientèle de plus de 10 000 clients particuliers, institutionnels et professionnels",
        "Une présence régionale consolidée à travers des chantiers et partenariats dans toute l'Afrique de l'Ouest",
      ],
    },
  ];

  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Passion",
      description:
        "L'amour du travail bien fait guide chacune de nos actions depuis 1985.",
      color: "#0EA5E9",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Excellence",
      description:
        "La recherche constante de la qualité et de l'innovation dans tous nos métiers.",
      color: "#B5C233",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Respect",
      description:
        "Le respect de nos clients, partenaires et collaborateurs est au cœur de notre philosophie.",
      color: "#6E6E6E",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Engagement",
      description:
        "Notre engagement total pour la satisfaction client et le développement local.",
      color: "#B5C233",
    },
  ];

  const stats = [
    {
      value: "40",
      label: "Années d'expérience",
      suffix: "ans",
    },
    { value: "150", label: "Collaborateurs", suffix: "+" },
    {
      value: "10,000",
      label: "Clients satisfaits",
      suffix: "+",
    },
    { value: "3", label: "Métiers d'excellence", suffix: "" },
    { value: "500", label: "Projets réalisés", suffix: "+" },
    { value: "5", label: "Pays de présence", suffix: "" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 py-6">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors mb-4"
          >
            <ArrowLeft className="w-5 h-5" />
            Accueil
          </button>

          <div className="flex items-center gap-4">
            <Calendar
              className="w-8 h-8"
              style={{ color: "#0EA5E9" }}
            />
            <div>
              <h1
                className="text-3xl font-bold text-gray-900"
                style={{ fontFamily: "Montserrat" }}
              >
                Notre Histoire
              </h1>
              <p className="text-gray-600 mt-1">
                40 années d'excellence et d'innovation au
                service de l'habitat ivoirien
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2
                className="text-4xl font-bold mb-6"
                style={{
                  fontFamily: "Montserrat",
                  color: "#0EA5E9",
                }}
              >
                Une aventure entrepreneuriale commencée en 1985
              </h2>
              <p
                className="text-lg mb-6"
                style={{
                  color: "#6E6E6E",
                  textAlign: "justify",
                }}
              >
                Chez GROUP FIMA, nous sommes fiers de porter
                l’héritage d'une entreprise familiale qui a vu
                le jour en 1985. Depuis nos débuts, notre
                objectif est d’offrir à nos clients un
                savoir-faire de qualité, fruit de décennies
                d’expérience et d’innovation dans la fabrication
                de matelas, la menuiserie moderne en mélamine et
                la vitrerie aluminium.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => onExpertClick?.("expert")}
                  className="px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2"
                  style={{
                    backgroundColor: "#B5C233",
                    color: "#6E6E6E",
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
                  Parler à un expert
                  <ChevronRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onNavigate("all-projects")}
                  className="px-6 py-3 border border-gray-300 bg-[#6E6E6E] text-[rgb(181,194,51)] rounded-lg font-medium hover:bg-gray-50 transition-colors"
                >
                  Nos réalisations
                </button>
              </div>
            </div>

            <div className="relative">
              <ImageWithFallback
                src={
                  image_76eb04a06107aac17049b46414ee32567a0e3dc5
                }
                alt="Équipe FIMA"
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div
                  className="text-3xl font-bold mb-2"
                  style={{ color: "#B5C233" }}
                >
                  {stat.value}
                  {stat.suffix}
                </div>
                <div
                  className="text-sm"
                  style={{ color: "#6E6E6E" }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2
              className="text-4xl font-bold mb-4"
              style={{
                fontFamily: "Montserrat",
                color: "#0EA5E9",
              }}
            >
              Les Grandes Étapes
            </h2>
            <p
              className="text-xl max-w-3xl mx-auto mb-6"
              style={{ color: "#6E6E6E", textAlign: "justify" }}
            >
              Née de la passion et du travail d'une équipe
              dévouée, GROUP FIMA s'est forgé une réputation de
              sérieux et de fiabilité au fil des années. Nous
              avons grandi main dans la main avec nos clients et
              partenaires, en adaptant sans cesse nos procédés
              de fabrication et nos offres aux exigences du
              marché. Depuis plus de 40 ans, nous nous
              renouvelons pour proposer des produits durables,
              élégants et adaptés à tous les besoins.
            </p>
            <p
              className="text-lg max-w-3xl mx-auto"
              style={{ color: "#6E6E6E" }}
            >
              Retracez avec nous les moments clés qui ont
              façonné l'histoire du Groupe FIMA
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Timeline Navigation */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {milestones.map((milestone, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTimelineItem(index)}
                  className="px-4 py-2 rounded-full font-medium transition-all"
                  style={{
                    backgroundColor:
                      activeTimelineItem === index
                        ? "#B5C233"
                        : "white",
                    color:
                      activeTimelineItem === index
                        ? "white"
                        : "#4b5563",
                  }}
                  onMouseEnter={(e) => {
                    if (activeTimelineItem !== index)
                      e.currentTarget.style.backgroundColor =
                        "#f3f4f6";
                  }}
                  onMouseLeave={(e) => {
                    if (activeTimelineItem !== index)
                      e.currentTarget.style.backgroundColor =
                        "white";
                  }}
                >
                  {milestone.year}
                </button>
              ))}
            </div>

            {/* Active Timeline Item */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-8 lg:p-12 min-h-[480px]">
                  <div
                    className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-4"
                    style={{
                      backgroundColor:
                        "rgba(181, 194, 51, 0.1)",
                      color: "#B5C233",
                    }}
                  >
                    {milestones[activeTimelineItem].year}
                  </div>
                  <h3
                    className="text-2xl font-bold mb-4"
                    style={{
                      fontFamily: "Montserrat",
                      color: "#000000",
                    }}
                  >
                    {milestones[activeTimelineItem].title}
                  </h3>
                  <p
                    className="text-lg mb-6"
                    style={{ color: "#6E6E6E" }}
                  >
                    {milestones[activeTimelineItem].description}
                  </p>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900 mb-3">
                      Réalisations clés :
                    </h4>
                    {milestones[
                      activeTimelineItem
                    ].achievements.map((achievement, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2"
                      >
                        <Star
                          className="w-4 h-4"
                          style={{ color: "#B5C233" }}
                        />
                        <span className="text-gray-700">
                          {achievement}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div
                  className="h-64 lg:h-auto cursor-pointer group"
                  onClick={() => {
                    setLightboxImages(
                      milestones.map((m) => m.image),
                    );
                    setLightboxIndex(activeTimelineItem);
                    setLightboxOpen(true);
                  }}
                >
                  <ImageWithFallback
                    src={milestones[activeTimelineItem].image}
                    alt={milestones[activeTimelineItem].title}
                    className="w-full h-[480px] object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertises */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2
              className="text-4xl font-bold mb-4"
              style={{
                fontFamily: "Montserrat",
                color: "#0EA5E9",
              }}
            >
              Nos expertises
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <p
              className="text-lg leading-relaxed"
              style={{ color: "#6E6E6E", textAlign: "justify" }}
            >
              <strong>Fabrication de matelas :</strong> Nous
              concevons et fabriquons des matelas qui conjuguent
              confort, résistance et innovation, en
              sélectionnant des matériaux de première qualité
              pour garantir un repos optimal. Nous mettons en
              œuvre des techniques avancées pour assurer
              résistance, sécurité et esthétique, répondant aux
              exigences spécifiques de chaque chantier. Notre
              engagement envers la qualité et la satisfaction
              client demeure au cœur de chaque projet.
            </p>
            <p
              className="text-lg leading-relaxed"
              style={{ color: "#6E6E6E", textAlign: "justify" }}
            >
              <strong>Menuiserie moderne :</strong> Nous créons
              des meubles sur-mesure, designs et fonctionnels,
              adaptés à tous types d'intérieurs résidentiels ou
              professionnels. Notre maîtrise du mélaminé et
              du bois massif nous permet d'offrir des solutions
              esthétiques et robustes.
            </p>
            <p
              className="text-lg leading-relaxed"
              style={{ color: "#6E6E6E", textAlign: "justify" }}
            >
              <strong>Vitrerie aluminium :</strong> Nous
              réalisons des ouvrages de vitrerie sur-mesure pour
              tous vos projets d'aménagement ou de rénovation.
              Nous privilégions l'aluminium pour sa durabilité,
              sa modernité et sa facilité d'entretien.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2
              className="text-4xl font-bold mb-4"
              style={{
                fontFamily: "Montserrat",
                color: "#0EA5E9",
              }}
            >
              Nos Valeurs Fondamentales
            </h2>
            <p
              className="text-xl max-w-3xl mx-auto"
              style={{ color: "#0EA5E9" }}
            >
              Les principes qui guident notre action depuis 40
              ans
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {/* Qualité */}
            <div className="text-center group">
              <div
                className="w-24 h-24 mx-auto mb-6 flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: "#0EA5E9" }}
              >
                <Award className="w-12 h-12 text-white" />
              </div>
              <h3
                className="text-2xl font-bold mb-3"
                style={{
                  fontFamily: "Montserrat",
                  color: "#000000",
                }}
              >
                Qualité
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{
                  color: "#6E6E6E",
                  fontFamily: "Montserrat",
                }}
              >
                Respect des normes les plus strictes pour chaque
                projet
              </p>
            </div>

            {/* Écoute Client */}
            <div className="text-center group">
              <div
                className="w-24 h-24 mx-auto mb-6 flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: "#B5C233" }}
              >
                <Heart className="w-12 h-12 text-[#6E6E6E]" />
              </div>
              <h3
                className="text-2xl font-bold mb-3"
                style={{
                  fontFamily: "Montserrat",
                  color: "#000000",
                }}
              >
                Écoute Client
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{
                  color: "#6E6E6E",
                  fontFamily: "Montserrat",
                }}
              >
                Une relation de confiance durable avec nos
                partenaires
              </p>
            </div>

            {/* Fiabilité */}
            <div className="text-center group">
              <div
                className="w-24 h-24 mx-auto mb-6 flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: "#6E6E6E" }}
              >
                <Target
                  className="w-12 h-12"
                  style={{ color: "#B5C233" }}
                />
              </div>
              <h3
                className="text-2xl font-bold mb-3"
                style={{
                  fontFamily: "Montserrat",
                  color: "#000000",
                }}
              >
                Fiabilité
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{
                  color: "#6E6E6E",
                  fontFamily: "Montserrat",
                }}
              >
                Résultats conformes aux délais et attentes
                convenus
              </p>
            </div>

            {/* Innovation */}
            <div className="text-center group">
              <div
                className="w-24 h-24 mx-auto mb-6 flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: "#0EA5E9" }}
              >
                <Star className="w-12 h-12 text-white" />
              </div>
              <h3
                className="text-2xl font-bold mb-3"
                style={{
                  fontFamily: "Montserrat",
                  color: "#000000",
                }}
              >
                Innovation
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{
                  color: "#6E6E6E",
                  fontFamily: "Montserrat",
                }}
              >
                À la recherche constante de nouvelles solutions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-[rgb(255,255,255)]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2
              className="text-4xl font-bold mb-4"
              style={{
                fontFamily: "Montserrat",
                color: "#0EA5E9",
              }}
            >
              Pourquoi nous choisir ?
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div
                  className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1"
                  style={{ backgroundColor: "#B5C233" }}
                >
                  <Star
                    className="w-4 h-4"
                    style={{ color: "#6E6E6E" }}
                  />
                </div>
                <p
                  className="text-lg leading-relaxed"
                  style={{
                    color: "#6E6E6E",
                    textAlign: "justify",
                  }}
                >
                  <strong>Expertise reconnue :</strong>{" "}
                  Bénéficiez de l'expérience d'une entreprise
                  établie depuis 40 ans, avec un service
                  personnalisé et des produits qui allient
                  performance, esthétique et longévité.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div
                  className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1"
                  style={{ backgroundColor: "#B5C233" }}
                >
                  <Star
                    className="w-4 h-4"
                    style={{ color: "#6E6E6E" }}
                  />
                </div>
                <p
                  className="text-lg leading-relaxed"
                  style={{
                    color: "#6E6E6E",
                    textAlign: "justify",
                  }}
                >
                  <strong>Accompagnement complet :</strong>{" "}
                  Notre mission est de vous accompagner à chaque
                  étape, du conseil à la pose, pour donner vie à
                  tous vos projets d'aménagement, de literie ou
                  de menuiserie.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div
                  className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1"
                  style={{ backgroundColor: "#B5C233" }}
                >
                  <Star
                    className="w-4 h-4"
                    style={{ color: "#6E6E6E" }}
                  />
                </div>
                <p
                  className="text-lg leading-relaxed"
                  style={{
                    color: "#6E6E6E",
                    textAlign: "justify",
                  }}
                >
                  <strong>Engagement éco-responsable :</strong>{" "}
                  Nous respectons l'environnement en adoptant
                  des pratiques éco-responsables, afin de
                  contribuer à un avenir durable pour tous.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div
                  className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1"
                  style={{ backgroundColor: "#B5C233" }}
                >
                  <Star
                    className="w-4 h-4"
                    style={{ color: "#6E6E6E" }}
                  />
                </div>
                <p
                  className="text-lg leading-relaxed"
                  style={{
                    color: "#6E6E6E",
                    textAlign: "justify",
                  }}
                >
                  <strong>Satisfaction prioritaire :</strong>{" "}
                  Votre satisfaction reste notre priorité
                  absolue, car chaque projet est unique et
                  mérite une attention particulière.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div
                  className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1"
                  style={{ backgroundColor: "#B5C233" }}
                >
                  <Star
                    className="w-4 h-4"
                    style={{ color: "#6E6E6E" }}
                  />
                </div>
                <p
                  className="text-lg leading-relaxed"
                  style={{
                    color: "#6E6E6E",
                    textAlign: "justify",
                  }}
                >
                  <strong>Transparence et confiance :</strong>{" "}
                  Nous valorisons l'écoute active et la
                  transparence, afin de bâtir des relations
                  solides basées sur la confiance mutuelle.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div
                  className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1"
                  style={{ backgroundColor: "#B5C233" }}
                >
                  <Star
                    className="w-4 h-4"
                    style={{ color: "#6E6E6E" }}
                  />
                </div>
                <p
                  className="text-lg leading-relaxed"
                  style={{
                    color: "#6E6E6E",
                    textAlign: "justify",
                  }}
                >
                  <strong>Partenariat de qualité :</strong>{" "}
                  Ensemble, construisons des espaces qui
                  reflètent vos aspirations et subliment votre
                  quotidien avec des réalisations concrètes,
                  durables et esthétiques.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section
        className="py-16 text-white"
        style={{
          background:
            "linear-gradient(to right, #0EA5E9, #0c93d1)",
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <h2
            className="text-4xl font-bold text-white mb-6"
            style={{ fontFamily: "Montserrat" }}
          >
            Construisons ensemble votre projet
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Fort de 40 années d'expérience, nous mettons notre
            expertise à votre service pour concrétiser vos
            projets les plus ambitieux.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onExpertClick?.("appointment")}
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
              Planifier un rendez-vous
            </button>
            <button
              onClick={() => onNavigate("quote-request")}
              className="px-8 py-4 border-2 border-white text-white rounded-xl font-semibold transition-colors"
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "white";
                e.currentTarget.style.color = "#0EA5E9";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor =
                  "transparent";
                e.currentTarget.style.color = "white";
              }}
            >
              Demander un devis
            </button>
          </div>
        </div>
      </section>

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