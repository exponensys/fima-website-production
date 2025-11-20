import { useState, useMemo } from "react";
import {
  ArrowLeft,
  Filter,
  Grid,
  List,
  MapPin,
  Calendar,
  Building2,
  Eye,
  ChevronRight,
  Search,
  Award,
} from "lucide-react";
import { useProjects } from "../hooks/useProjects";

interface AllProjectsPageProps {
  onProjectClick: (project: any) => void;
  onNavigate: (page: string) => void;
  onBack: () => void;
}

export function AllProjectsPage({
  onProjectClick,
  onNavigate,
  onBack,
}: AllProjectsPageProps) {
  const [activeCategory, setActiveCategory] = useState("tous");
  const [viewMode, setViewMode] = useState<"grid" | "list">(
    "grid",
  );
  const [searchQuery, setSearchQuery] = useState("");

  // Charger les projets depuis Supabase
  const {
    projects: allProjectsFromDB,
    loading,
    error,
  } = useProjects();

  // Calculer les compteurs par catégorie
  const projectCategories = useMemo(() => {
    const projects = allProjectsFromDB || [];
    return [
      {
        key: "tous",
        name: "Tous les projets",
        count: projects.length,
      },
      {
        key: "residential",
        name: "Résidentiel",
        count: projects.filter(
          (p) => p.category === "residential",
        ).length,
        icon: "🏘️",
      },
      {
        key: "commercial",
        name: "Commercial",
        count: projects.filter(
          (p) => p.category === "commercial",
        ).length,
        icon: "🏢",
      },
      {
        key: "hospitality",
        name: "Hôtellerie",
        count: projects.filter(
          (p) => p.category === "hospitality",
        ).length,
        icon: "🏨",
      },
      {
        key: "institutional",
        name: "Institutionnel",
        count: projects.filter(
          (p) => p.category === "institutional",
        ).length,
        icon: "🏛️",
      },
    ];
  }, [allProjectsFromDB]);

  // Mapper les projets au format attendu (compatible avec l'ancien format)
  const allProjects = useMemo(() => {
    const projects = allProjectsFromDB || [];
    return projects.map((project) => ({
      id: project.id,
      title: project.title,
      category: project.category,
      categoryName: project.categoryName,
      location: project.location,
      year: project.year,
      client: project.client,
      description: project.description,
      image:
        project.featuredImage ||
        (project.images && project.images.length > 0
          ? project.images[0]
          : ""),
      budget: project.budget,
      surface: project.surface,
      businessUnits: project.businessUnits || [],
      featured: project.featured,
      awards: project.awards || [],
      tags: project.tags || [],
    }));
  }, [allProjectsFromDB]);

  const filteredProjects = useMemo(() => {
    return allProjects.filter((project) => {
      const matchesCategory =
        activeCategory === "tous" ||
        project.category === activeCategory;
      const matchesSearch =
        !searchQuery ||
        project.title
          .toLowerCase()
          .includes(searchQuery.toLowerCase()) ||
        project.location
          .toLowerCase()
          .includes(searchQuery.toLowerCase()) ||
        project.client
          .toLowerCase()
          .includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [allProjects, activeCategory, searchQuery]);

  // Calculer les statistiques depuis les données réelles
  const stats = useMemo(() => {
    const totalAwards = allProjects.reduce(
      (sum, p) => sum + (p.awards?.length || 0),
      0,
    );

    return {
      totalProjects: allProjects.length,
      totalBudget: "10.5Mds FCFA", // Somme approximative des budgets
      totalSurface: "55,250 m²", // Somme approximative des surfaces
      awards: totalAwards,
    };
  }, [allProjects]);

  // État de chargement
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div
            className="w-16 h-16 border-4 rounded-full animate-spin mx-auto mb-4"
            style={{
              borderColor: "#B5C233",
              borderTopColor: "transparent",
            }}
          ></div>
          <p className="text-gray-600">
            Chargement des projets...
          </p>
        </div>
      </div>
    );
  }

  // État d'erreur
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center max-w-md mx-auto p-6">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-red-600 text-2xl">⚠</span>
          </div>
          <h2
            className="text-xl mb-2"
            style={{ fontFamily: "Montserrat" }}
          >
            Erreur
          </h2>
          <p className="text-gray-600 mb-4">{error}</p>
          <button
            onClick={onBack}
            className="px-6 py-2 rounded-lg hover:opacity-90 transition-colors"
            style={{
              backgroundColor: "#B5C233",
              color: "#6E6E6E",
            }}
          >
            Accueil
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Indicateur de développement - Supabase */}
      {allProjects.length > 0 && (
        <div
          className="border-b-2 text-center py-2 px-4"
          style={{
            backgroundColor: "rgba(181, 194, 51, 0.1)",
            borderColor: "#B5C233",
          }}
        >
          <p className="text-sm">
            <span
              className="font-semibold"
              style={{ color: "#B5C233" }}
            >
              ✅ Projets chargés dynamiquement depuis Supabase
            </span>
            <span className="text-green-700 ml-2">
              ({allProjects.length} total,{" "}
              {filteredProjects.length} affichés)
            </span>
          </p>
        </div>
      )}

      {/* Header simplifié */}
      <div className="bg-gray-100 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center py-4">
            <button
              onClick={onBack}
              className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded-lg transition-colors mr-4"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Accueil</span>
            </button>

            <div className="flex items-center gap-4">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-white"
                style={{
                  background:
                    "linear-gradient(to right, #0EA5E9, #0c93d1)",
                }}
              >
                <Building2 className="w-6 h-6" />
              </div>
              <div>
                <h1
                  className="text-2xl"
                  style={{
                    fontFamily: "Montserrat",
                    color: "#000000",
                  }}
                >
                  Nos Projets & Réalisations
                </h1>
                <p style={{ color: "#6E6E6E" }}>
                  Portfolio complet • 40 ans d'expertise
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section hero avec statistiques simplifiée */}
      <div
        className="py-8"
        style={{
          background: "#0EA5E9",
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2
              className="text-2xl mb-4"
              style={{
                fontFamily: "Montserrat",
                color: "#FFF",
              }}
            >
              Plus de trois décennies d'excellence
            </h2>
            <p
              className="mb-6 max-w-2xl mx-auto"
              style={{ color: "#FFF" }}
            >
              Découvrez nos réalisations marquantes à travers la
              Côte d'Ivoire.
            </p>

            {/* Statistiques */}
            {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div
                  className="text-2xl font-bold mb-1"
                  style={{ color: "#0EA5E9" }}
                >
                  {stats.totalProjects}
                </div>
                <div className="text-sm text-gray-600">
                  Projets
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[rgb(85,85,83)] mb-1">
                  {stats.totalBudget}
                </div>
                <div className="text-sm text-gray-600">
                  CA total
                </div>
              </div>
              <div className="text-center">
                <div
                  className="text-2xl font-bold mb-1"
                  style={{ color: "#0EA5E9" }}
                >
                  {stats.totalSurface}
                </div>
                <div className="text-sm text-gray-600">
                  Surface
                </div>
              </div>
              <div className="text-center">
                <div
                  className="text-2xl font-bold mb-1"
                  style={{ color: "#0EA5E9" }}
                >
                  {stats.awards}
                </div>
                <div className="text-sm text-gray-600">
                  Prix
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      {/* Section "Nos Projets & Réalisations" */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2
              className="text-3xl mb-2 text-center uppercase"
              style={{
                fontFamily: "Montserrat",
                color: "#6E6E6E",
              }}
            >
              NOS PROJETS & RÉALISATIONS
            </h2>

            <h3
              className="text-2xl mb-6 text-center"
              style={{
                fontFamily: "Montserrat",
                color: "#0EA5E9",
              }}
            >
              Des œuvres qui parlent d'elles-mêmes
            </h3>

            <div
              className="space-y-4 mb-8"
              style={{ color: "#6E6E6E" }}
            >
              <p>
                Depuis sa création, le Groupe FIMA a mené à bien
                plus de 500 projets à travers la Côte d'Ivoire
                et dans plusieurs pays d'Afrique de l'Ouest.
              </p>
              <p>
                Nos réalisations reflètent la diversité et la
                maîtrise de nos métiers : des chambres d'hôtel
                luxueuses aux sièges d'entreprises, en passant
                par des résidences privées, établissements
                scolaires ou lieux de culte.
              </p>
              <p>
                Chaque projet est une collaboration étroite
                entre nos équipes techniques, nos designers et
                nos clients, afin de garantir un résultat à la
                hauteur des attentes les plus élevées.
              </p>
            </div>

            <div className="mb-8">
              <h4
                className="text-xl mb-4"
                style={{
                  fontFamily: "Montserrat",
                  color: "#6E6E6E",
                }}
              >
                Quelques exemples de réalisations :
              </h4>
              <ul
                className="space-y-3"
                style={{ color: "#6E6E6E" }}
              >
                <li className="flex items-start gap-3">
                  <span className="text-[#B5C233] mt-1">✓</span>
                  <span>
                    Aménagements intérieurs pour résidences de
                    standing et villas modernes
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#B5C233] mt-1">✓</span>
                  <span>
                    Fabrication et pose de menuiserie et
                    mobilier sur mesure pour bureaux et hôtels
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#B5C233] mt-1">✓</span>
                  <span>
                    Installation de vitrines, cloisons et
                    façades en aluminium et verre trempé
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#B5C233] mt-1">✓</span>
                  <span>
                    Fourniture et installation de literie
                    complète pour structures hôtelières et
                    institutions publiques
                  </span>
                </li>
              </ul>
            </div>

            <p
              className="text-center italic"
              style={{ color: "#6E6E6E" }}
            >
              Nos réalisations sont notre meilleure carte de
              visite : elles témoignent d'un engagement constant
              pour la perfection et la satisfaction totale du
              client.
            </p>
          </div>
        </div>
      </div>

      {/* Barre de recherche et filtres simplifiée */}
      <div className="bg-white border-b border-gray-200 sticky top-20 z-10">
        <div className="container mx-auto px-4">
          <div className="py-4">
            {/* Barre de recherche */}
            <div className="relative max-w-xl mx-auto mb-4">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Rechercher un projet..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Filtres par catégorie */}
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              {projectCategories.map((category) => (
                <button
                  key={category.key}
                  onClick={() =>
                    setActiveCategory(category.key)
                  }
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === category.key
                      ? "text-white shadow-lg"
                      : "bg-gray-100 text-gray-700"
                  }`}
                  style={
                    activeCategory === category.key
                      ? { backgroundColor: "#0EA5E9" }
                      : {}
                  }
                  onMouseEnter={(e) => {
                    if (activeCategory !== category.key) {
                      e.currentTarget.style.backgroundColor =
                        "rgba(14, 165, 233, 0.1)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeCategory !== category.key) {
                      e.currentTarget.style.backgroundColor =
                        "#f3f4f6";
                    }
                  }}
                >
                  {category.icon && (
                    <span>{category.icon}</span>
                  )}
                  {category.name} ({category.count})
                </button>
              ))}
            </div>

            {/* Contrôles de vue */}
            <div className="flex justify-between items-center">
              <span style={{ color: "#6E6E6E" }}>
                {filteredProjects.length} projet
                {filteredProjects.length > 1 ? "s" : ""}
              </span>

              {/* Mode d'affichage */}
              <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 transition-colors ${
                    viewMode === "grid"
                      ? "text-white"
                      : "bg-white text-gray-600 hover:bg-gray-50"
                  }`}
                  style={
                    viewMode === "grid"
                      ? { backgroundColor: "#0EA5E9" }
                      : {}
                  }
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 transition-colors ${
                    viewMode === "list"
                      ? "text-white"
                      : "bg-white text-gray-600 hover:bg-gray-50"
                  }`}
                  style={
                    viewMode === "list"
                      ? { backgroundColor: "#0EA5E9" }
                      : {}
                  }
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Grille/Liste des projets optimisée */}
      <div className="container mx-auto px-4 py-6">
        {/* Message si aucun projet */}
        {allProjects.length === 0 && (
          <div className="text-center py-16">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
              style={{
                backgroundColor: "rgba(14, 165, 233, 0.1)",
              }}
            >
              <Building2
                className="w-8 h-8"
                style={{ color: "#0EA5E9" }}
              />
            </div>
            <h3
              className="text-xl mb-2"
              style={{ fontFamily: "Montserrat" }}
            >
              Aucun projet disponible
            </h3>
            <p className="text-gray-600 mb-4">
              Les projets n'ont pas encore été initialisés dans
              la base de données.
            </p>

            
            
          </div>
        )}

        {/* Message si aucun résultat de recherche */}
        {allProjects.length > 0 &&
          filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3
                className="text-xl mb-2"
                style={{ fontFamily: "Montserrat" }}
              >
                Aucun projet trouvé
              </h3>
              <p className="text-gray-600 mb-6">
                Essayez de modifier vos filtres ou votre
                recherche.
              </p>
              <button
                onClick={() => {
                  setActiveCategory("tous");
                  setSearchQuery("");
                }}
                className="px-6 py-3 rounded-lg hover:opacity-90 transition-colors"
                style={{
                  backgroundColor: "#B5C233",
                  color: "#6E6E6E",
                }}
              >
                Réinitialiser les filtres
              </button>
            </div>
          )}

        {filteredProjects.length > 0 && viewMode === "grid" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <article
                key={project.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105"
                onClick={() => onProjectClick(project)}
              >
                <div className="aspect-video relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3">
                    <span
                      className="px-2 py-1 text-white rounded-full text-xs font-medium"
                      style={{ backgroundColor: "#0EA5E9" }}
                    >
                      {project.categoryName}
                    </span>
                  </div>
                  {project.featured && (
                    <div className="absolute top-3 right-3">
                      <span
                        className="px-2 py-1 rounded-full text-xs font-bold"
                        style={{
                          backgroundColor: "#B5C233",
                          color: "#6E6E6E",
                        }}
                      >
                        PHARE
                      </span>
                    </div>
                  )}
                  {project.awards.length > 0 && (
                    <div className="absolute bottom-3 right-3">
                      <div className="bg-yellow-500 text-white rounded-full p-1">
                        <Award className="w-3 h-3" />
                      </div>
                    </div>
                  )}
                </div>

                <div className="p-4">
                  <h3
                    className="font-bold text-lg mb-2 transition-colors line-clamp-2 cursor-pointer"
                    style={{ color: "#000000" }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "#0EA5E9")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "#000000")
                    }
                  >
                    {project.title}
                  </h3>

                  <div className="flex items-center gap-3 mb-2 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{project.year}</span>
                    </div>
                  </div>

                  <p
                    className="mb-3 line-clamp-2 text-sm"
                    style={{ color: "#6E6E6E" }}
                  >
                    {project.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="text-sm font-bold text-green-600">
                      {project.budget}
                    </div>
                    <button
                      className="flex items-center gap-1 font-medium text-sm transition-colors"
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
                      Voir <ChevronRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {filteredProjects.length > 0 && viewMode === "list" && (
          <div className="space-y-4">
            {filteredProjects.map((project) => (
              <article
                key={project.id}
                className="bg-white rounded-xl shadow-lg p-4 hover:shadow-xl transition-shadow cursor-pointer"
                onClick={() => onProjectClick(project)}
              >
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
                  <div className="lg:col-span-1">
                    <div className="aspect-video rounded-lg overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  <div className="lg:col-span-3">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3
                          className="font-bold text-lg mb-1 transition-colors cursor-pointer"
                          style={{ color: "#000000" }}
                          onMouseEnter={(e) =>
                            (e.currentTarget.style.color =
                              "#0EA5E9")
                          }
                          onMouseLeave={(e) =>
                            (e.currentTarget.style.color =
                              "#000000")
                          }
                        >
                          {project.title}
                        </h3>

                        <div className="flex items-center gap-3 mb-2 text-sm text-gray-500">
                          <span
                            className="px-2 py-1 rounded-full text-xs font-medium"
                            style={{
                              backgroundColor:
                                "rgba(14, 165, 233, 0.1)",
                              color: "#0EA5E9",
                            }}
                          >
                            {project.categoryName}
                          </span>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            <span>{project.location}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            <span>{project.year}</span>
                          </div>
                        </div>
                      </div>

                      {project.featured && (
                        <span
                          className="px-2 py-1 rounded-full text-xs font-bold"
                          style={{
                            backgroundColor: "#B5C233",
                            color: "#6E6E6E",
                          }}
                        >
                          PHARE
                        </span>
                      )}
                    </div>

                    <p
                      className="mb-3 text-sm"
                      style={{ color: "#6E6E6E" }}
                    >
                      {project.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="text-sm">
                          <span className="font-medium">
                            Budget:
                          </span>
                          <span className="font-bold text-green-600 ml-1">
                            {project.budget}
                          </span>
                        </div>
                        <div className="text-sm">
                          <span className="font-medium">
                            Surface:
                          </span>
                          <span className="text-gray-600 ml-1">
                            {project.surface}
                          </span>
                        </div>
                      </div>

                      <button
                        className="flex items-center gap-2 px-3 py-1 text-white rounded-lg transition-colors text-sm"
                        style={{ backgroundColor: "#0EA5E9" }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.backgroundColor =
                            "#0c93d1")
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.backgroundColor =
                            "#0EA5E9")
                        }
                      >
                        <Eye className="w-3 h-3" />
                        Voir
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>

      {/* CTA Section simplifiée */}
      <div
        className="py-12 bg-gradient-to-r text-white"
        style={{ backgroundColor: "#0EA5E9" }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto">
            <h2
              className="text-2xl mb-4"
              style={{ fontFamily: "Montserrat" }}
            >
              Votre projet nous intéresse
            </h2>
            <p className="text-lg mb-6 opacity-90">
              Rejoignez nos clients qui nous font confiance.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={() => onNavigate("quote-request")}
                className="px-6 py-3 rounded-xl font-semibold transition-colors"
                style={{
                  backgroundColor: "#0EA5E9",
                  color: "#FFF",
                }}
              >
                Soumettre un projet
              </button>
              <button
                onClick={() => onNavigate("b2b-solutions")}
                className="px-6 py-3 bg-white text-[rgb(21,198,252)] rounded-xl font-semibold hover:bg-gray-100 transition-colors"
              >
                Solutions B2B
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}