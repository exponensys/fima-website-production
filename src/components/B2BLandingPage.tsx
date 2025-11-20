import { useState } from "react";
import {
  ArrowLeft,
  Building2,
  CheckCircle,
  Users,
  Award,
  Handshake,
  ChevronRight,
  Clock,
  Euro,
  Shield,
} from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faBed,
  faBuilding,
} from "@fortawesome/free-solid-svg-icons";

interface B2BLandingPageProps {
  onNavigate: (page: string) => void;
  onBack: () => void;
  onQuoteRequest: () => void;
}

export function B2BLandingPage({
  onNavigate,
  onBack,
  onQuoteRequest,
}: B2BLandingPageProps) {
  const [activeTab, setActiveTab] = useState("avantages");

  const businessUnits = [
    {
      name: "FIMA Couchage",
      icon: "🛏️",
      color: "#B5C233",
      services: [
        "Literie hôtelière",
        "Mobilier de chambre",
        "Linge professionnel",
        "Solutions sur-mesure",
      ],
      clients:
        "Hôtels, résidences, collectivités, promoteurs immobiliers...",
    },
    {
      name: "FIMA Design",
      icon: "🔨",
      color: "#6E6E6E",
      services: [
        "Aménagement bureaux",
        "Mobilier professionnel",
        "Cuisines collectives",
        "Menuiserie technique",
      ],
      clients:
        "Entreprises, administrations, promoteurs immobiliers...",
    },
    {
      name: "UNIVERS GLASS",
      icon: "🏗️",
      color: "#E30613",
      services: [
        "Façades vitrées",
        "Menuiserie aluminium",
        "Solutions techniques",
        "Grands projets",
      ],
      clients:
        "Promoteurs immobiliers, architectes, bureaux d'études...",
    },
  ];

  const avantagesUniques = [
    {
      icon: <Handshake className="w-8 h-8" />,
      title: "Interlocuteur unique",
      description:
        "Un seul contact pour tous vos besoins de finition et d'aménagement",
      benefit:
        "Simplification des échanges et coordination optimale",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Gestion de projet intégrée",
      description:
        "Planification et suivi centralisés pour respecter vos délais",
      benefit:
        "Réduction des risques et livraison dans les temps",
    },
    {
      icon: <Euro className="w-8 h-8" />,
      title: "Optimisation budgétaire",
      description:
        "Négociation globale et économies d'échelle sur l'ensemble du projet",
      benefit: "Meilleur rapport qualité-prix garanti",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Garantie groupe",
      description:
        "Engagement qualité unifié sur tous les corps de métier",
      benefit: "Sécurité et tranquillité d'esprit totales",
    },
  ];

  const processusB2B = [
    {
      step: "01",
      title: "Étude de faisabilité",
      description:
        "Analyse de vos besoins et définition du cahier des charges",
      duration: "1-2 semaines",
    },
    {
      step: "02",
      title: "Proposition commerciale",
      description:
        "Devis détaillé intégrant tous les métiers concernés",
      duration: "1 semaine",
    },
    {
      step: "03",
      title: "Planification projet",
      description:
        "Ordonnancement des interventions et coordination équipes",
      duration: "2-3 jours",
    },
    {
      step: "04",
      title: "Réalisation",
      description:
        "Exécution coordonnée avec suivi quotidien et reporting",
      duration: "Selon projet",
    },
    {
      step: "05",
      title: "Livraison & SAV",
      description:
        "Réception, formation et service après-vente intégré",
      duration: "Permanent",
    },
  ];

  const clientsReferences = [
    {
      nom: "Groupe Bolloré",
      projet: "Aménagement sièges sociaux",
      description: "Mobilier bureau + cloisons vitrées",
      budget: "500M+ FCFA",
    },
    {
      nom: "Hôtel Pullman Abidjan",
      projet: "Rénovation complète chambres",
      description: "Literie + mobilier + salle de bains",
      budget: "2Mds FCFA",
    },
    {
      nom: "Ministère des Finances",
      projet: "Aménagement bureaux",
      description: "Mobilier + menuiserie + vitrerie",
      budget: "800M FCFA",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div
        className="bg-gradient-to-r border-b"
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
                className="w-16 h-16 rounded-full flex items-center justify-center text-white"
                style={{
                  background:
                    "linear-gradient(to right, #0EA5E9, #0c93d1)",
                }}
              >
                <Building2 className="w-8 h-8" />
              </div>
              <div>
                <h1
                  className="text-3xl font-bold"
                  style={{
                    fontFamily: "Montserrat",
                    color: "#000000",
                  }}
                >
                  Solutions B2B Intégrées
                </h1>
                <p style={{ color: "#6E6E6E" }}>
                  Groupe FIMA • Un partenaire • Trois expertises
                  • Une excellence
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block mb-6">
              <span
                className="px-6 p-2 text-sm font-bold text-white"
                style={{
                  background:
                    "linear-gradient(to right, #0EA5E9, #0c93d1)",
                }}
              >
                AVANTAGE CONCURRENTIEL UNIQUE
              </span>
            </div>

            <h2
              className="text-5xl font-bold mb-6"
              style={{
                fontFamily: "Montserrat",
                color: "#0EA5E9",
              }}
            >
              L'unique interlocuteur pour vos projets complets
            </h2>

            <p
              className="text-xl mb-8 leading-relaxed max-w-3xl mx-auto"
              style={{ color: "#6E6E6E" }}
            >
              Simplifiez vos projets avec le Groupe FIMA :
              literie professionnelle, menuiserie sur-mesure et
              solutions vitrerie-aluminium. Un seul contact,
              trois expertises, une livraison coordonnée.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button
                onClick={onQuoteRequest}
                className="px-10 py-4 rounded-xl font-semibold text-lg hover:shadow-lg transition-all"
                style={{
                  backgroundColor: "#FFFFFF",
                  color: "#0EA5E9",
                  borderBottomColor: "#0EA5E9",
                }}
              >
                Demander une étude projet
              </button>
              <button
                className="px-10 py-4 rounded-xl font-semibold text-lg transition-all"
                style={{
                  background:
                    "linear-gradient(to right, #0EA5E9, #0EA5E9)",
                  color: "#FFF",
                }}
              >
                Télécharger notre plaquette B2B
              </button>
            </div>

            {/* Métriques impressionnantes */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div
                  className="text-4xl font-bold mb-2"
                  style={{ color: "#0EA5E9" }}
                >
                  500+
                </div>
                <div className="text-sm text-gray-600">
                  Projets B2B réalisés
                </div>
              </div>
              <div className="text-center">
                <div
                  className="text-4xl font-bold mb-2"
                  style={{ color: "#0EA5E9" }}
                >
                  30+
                </div>
                <div className="text-sm text-gray-600">
                  Années d'expérience
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[rgb(14,165,233)] mb-2">
                  3
                </div>
                <div className="text-sm text-gray-600">
                  Métiers maîtrisés
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[rgb(14,165,233)] mb-2">
                  95%
                </div>
                <div className="text-sm text-gray-600">
                  Clients satisfaits
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nos 3 métiers */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2
              className="text-3xl font-bold mb-4"
              style={{
                fontFamily: "Montserrat",
                color: "#0EA5E9",
              }}
            >
              Trois métiers, une synergie unique
            </h2>
            <p
              className="text-lg max-w-2xl mx-auto"
              style={{ color: "#6E6E6E" }}
            >
              Le Groupe FIMA est le seul acteur du marché
              ivoirien capable de vous proposer une solution de
              finition complète avec un interlocuteur unique.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {businessUnits.map((unit, index) => {
              // Déterminer l'icône et la couleur selon le métier
              let icon;
              let bgColor = unit.color;
              let textColor = unit.color;
              let iconColor = "white";

              if (unit.name === "FIMA Couchage") {
                icon = faBed;
                bgColor = "#B5C233";
                textColor = "#B5C233";
                iconColor = "#6E6E6E";
              } else if (unit.name === "FIMA Design") {
                icon = faHouse;
                bgColor = "#6E6E6E";
                textColor = "#6E6E6E";
                iconColor = "#B5C233";
              } else if (unit.name === "UNIVERS GLASS") {
                icon = faBuilding;
                bgColor = "#0EA5E9";
                textColor = "#0EA5E9";
                iconColor = "white";
              }

              return (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all"
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                    style={{ backgroundColor: bgColor }}
                  >
                    <FontAwesomeIcon
                      icon={icon}
                      className="w-7 h-7"
                      style={{ color: iconColor }}
                    />
                  </div>

                  <h3
                    className="text-2xl font-bold mb-3"
                    style={{
                      fontFamily: "Montserrat",
                      color: textColor,
                    }}
                  >
                    {unit.name}
                  </h3>

                  <p
                    className="text-sm mb-4"
                    style={{ color: "#6E6E6E" }}
                  >
                    <strong>Clientèle cible :</strong>{" "}
                    {unit.clients}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {unit.services.map(
                      (service, serviceIndex) => (
                        <li
                          key={serviceIndex}
                          className="flex items-center gap-2"
                        >
                          <CheckCircle
                            className="w-4 h-4"
                            style={{ color: textColor }}
                          />
                          <span
                            className="text-sm"
                            style={{ color: "#6E6E6E" }}
                          >
                            {service}
                          </span>
                        </li>
                      ),
                    )}
                  </ul>

                  <button
                    className="w-full py-3 rounded-lg font-semibold transition-all pl-4"
                    style={{
                      backgroundColor: bgColor,
                      color:
                        unit.name === "FIMA Couchage"
                          ? "#6E6E6E"
                          : unit.name === "FIMA Design"
                            ? "#B5C233"
                            : "white",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.opacity = "0.9";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.opacity = "1";
                    }}
                  >
                    En savoir plus
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Avantages uniques */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2
              className="text-3xl font-bold mb-4"
              style={{
                fontFamily: "Montserrat",
                color: "#000000",
              }}
            >
              Pourquoi choisir notre approche intégrée ?
            </h2>
            <p
              className="text-lg max-w-2xl mx-auto"
              style={{ color: "#6E6E6E" }}
            >
              Notre force : la capacité unique à coordonner
              trois métiers complémentaires pour une efficacité
              maximale sur vos projets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {avantagesUniques.map((avantage, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center"
                    style={{
                      backgroundColor:
                        "rgba(14, 165, 233, 0.1)",
                      color: "#0EA5E9",
                    }}
                  >
                    {avantage.icon}
                  </div>
                  <div className="flex-1">
                    <h3
                      className="font-bold text-xl mb-3"
                      style={{ color: "#000000" }}
                    >
                      {avantage.title}
                    </h3>
                    <p
                      className="mb-3"
                      style={{ color: "#6E6E6E" }}
                    >
                      {avantage.description}
                    </p>
                    <div
                      className="px-4 py-2 rounded-lg"
                      style={{
                        backgroundColor:
                          "rgba(181, 194, 51, 0.1)",
                      }}
                    >
                      <p
                        className="text-sm font-medium"
                        style={{ color: "#B5C233" }}
                      >
                        💡 {avantage.benefit}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Processus B2B */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2
              className="text-3xl font-bold mb-4"
              style={{
                fontFamily: "Montserrat",
                color: "#000000",
              }}
            >
              Notre processus projet éprouvé
            </h2>
            <p
              className="text-lg max-w-2xl mx-auto"
              style={{ color: "#6E6E6E" }}
            >
              Une méthodologie rodée depuis 40 ans pour garantir
              le succès de vos projets, du cahier des charges à
              la livraison finale.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {processusB2B.map((etape, index) => (
              <div
                key={index}
                className="flex items-start gap-6 mb-8 last:mb-0"
              >
                <div className="flex-shrink-0">
                  <div
                    className="w-16 h-16 rounded-full text-white flex items-center justify-center font-bold text-lg"
                    style={{
                      background:
                        "linear-gradient(to right, #0EA5E9, #0c93d1)",
                    }}
                  >
                    {etape.step}
                  </div>
                </div>
                <div className="flex-1 pb-8 border-b border-gray-200 last:border-b-0">
                  <div className="flex items-center justify-between mb-3">
                    <h3
                      className="font-bold text-xl"
                      style={{ color: "#000000" }}
                    >
                      {etape.title}
                    </h3>
                    <span
                      className="text-sm px-3 py-1 rounded-full"
                      style={{
                        backgroundColor:
                          "rgba(14, 165, 233, 0.1)",
                        color: "#0EA5E9",
                      }}
                    >
                      {etape.duration}
                    </span>
                  </div>
                  <p style={{ color: "#6E6E6E" }}>
                    {etape.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Références clients */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2
              className="text-3xl font-bold mb-4"
              style={{
                fontFamily: "Montserrat",
                color: "#000000",
              }}
            >
              Ils nous font confiance
            </h2>
            <p
              className="text-lg max-w-2xl mx-auto"
              style={{ color: "#6E6E6E" }}
            >
              Grandes entreprises, institutions et promoteurs
              immobiliers nous choisissent pour leurs projets
              les plus ambitieux.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {clientsReferences.map((client, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg"
              >
                <div className="text-center mb-4">
                  <h3
                    className="font-bold text-lg mb-2"
                    style={{ color: "#000000" }}
                  >
                    {client.nom}
                  </h3>
                  <p
                    className="text-sm font-medium"
                    style={{ color: "#0EA5E9" }}
                  >
                    {client.projet}
                  </p>
                </div>

                <p
                  className="text-sm mb-4"
                  style={{ color: "#6E6E6E" }}
                >
                  {client.description}
                </p>

                <div className="text-center">
                  <span
                    className="inline-block px-4 py-2 rounded-full text-sm font-bold"
                    style={{
                      backgroundColor:
                        "rgba(181, 194, 51, 0.1)",
                      color: "#B5C233",
                    }}
                  >
                    {client.budget}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section
        className="py-16 text-white"
        style={{
          background:
            "linear-gradient(to right, #0EA5E9, #0c93d1)",
        }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2
              className="text-4xl font-bold mb-6"
              style={{ fontFamily: "Montserrat" }}
            >
              Prêt à simplifier votre prochain projet ?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Parlons de votre projet. Nos experts vous
              proposeront une solution intégrée parfaitement
              adaptée à vos besoins et votre budget.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={onQuoteRequest}
                className="px-8 py-4 rounded-xl font-semibold transition-colors"
                style={{
                  backgroundColor: "#0EA5E9",
                  color: "#FFF",
                }}
              >
                Demander une étude
              </button>
              <button
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
            </div>

            <div className="mt-8 flex items-center justify-center gap-8 text-sm opacity-75">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                <span>Devis sous 48h</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                <span>Accompagnement projet</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}