import React, { useState } from "react";
import {
  ChevronDown,
  ChevronRight,
  Home,
  Package,
  Building2,
  FileText,
  User,
  ShoppingCart,
  Phone,
  Settings,
  Eye,
  Search,
  Calendar,
  Award,
  History,
  Users,
  BookOpen,
  Camera,
  MessageSquare,
  ArrowLeft,
} from "lucide-react";

interface SitemapNode {
  id: string;
  title: string;
  type: "page" | "section" | "modal" | "category";
  icon: React.ReactNode;
  children?: SitemapNode[];
  description?: string;
  color?: string;
}

const sitemapData: SitemapNode = {
  id: "root",
  title: "FIMA - Site E-commerce B2B/B2C",
  type: "page",
  icon: <Home className="w-5 h-5" />,
  children: [
    {
      id: "home",
      title: "Accueil",
      type: "page",
      icon: <Home className="w-4 h-4" />,
      description: "Page principale avec toutes les sections",
      color: "#B5C233",
      children: [
        {
          id: "hero",
          title: "Section Héro",
          type: "section",
          icon: <Eye className="w-4 h-4" />,
          description: "Bannière principale avec CTA",
        },
        {
          id: "products-section",
          title: "Section Produits",
          type: "section",
          icon: <Package className="w-4 h-4" />,
          description: "Aperçu catalogue produits",
        },
        {
          id: "bedtime-stories",
          title: "Bedtime Stories",
          type: "section",
          icon: <BookOpen className="w-4 h-4" />,
          description: "Contenu lifestyle",
        },
        {
          id: "video-stories",
          title: "Vidéos Stories",
          type: "section",
          icon: <Camera className="w-4 h-4" />,
          description: "Contenus vidéo",
        },
        {
          id: "company-presentation",
          title: "Présentation Entreprise",
          type: "section",
          icon: <Building2 className="w-4 h-4" />,
          description: "Présentation du groupe FIMA",
        },
        {
          id: "team-section",
          title: "Section Équipe",
          type: "section",
          icon: <Users className="w-4 h-4" />,
          description: "Présentation de l'équipe",
        },
        {
          id: "news-section",
          title: "Section Actualités",
          type: "section",
          icon: <FileText className="w-4 h-4" />,
          description: "Articles et news",
        },
        {
          id: "projects-section",
          title: "Projets avec FIMA",
          type: "section",
          icon: <Settings className="w-4 h-4" />,
          description: "Showcase de projets clients",
        },
        {
          id: "newsletter",
          title: "Newsletter",
          type: "section",
          icon: <FileText className="w-4 h-4" />,
          description: "Inscription newsletter",
        },
        {
          id: "about-section",
          title: "Section À Propos",
          type: "section",
          icon: <Building2 className="w-4 h-4" />,
          description: "Informations générales",
        },
      ],
    },
    {
      id: "business-units",
      title: "Métiers du Groupe FIMA",
      type: "category",
      icon: <Building2 className="w-4 h-4" />,
      description: "3 unités d'affaires spécialisées",
      color: "#E30613",
      children: [
        {
          id: "fima-couchage",
          title: "FIMA Couchage",
          type: "page",
          icon: <Package className="w-4 h-4" />,
          description: "Spécialiste literie et matelas",
        },
        {
          id: "fima-design",
          title: "FIMA Design",
          type: "page",
          icon: <Settings className="w-4 h-4" />,
          description: "Menuiserie et ameublement",
        },
        {
          id: "univers-glass",
          title: "UNIVERS GLASS",
          type: "page",
          icon: <Eye className="w-4 h-4" />,
          description: "Vitrerie et aluminium",
        },
      ],
    },
    {
      id: "catalog",
      title: "Catalogue Produits",
      type: "category",
      icon: <Package className="w-4 h-4" />,
      description: "Navigation produits complète",
      color: "#B5C233",
      children: [
        {
          id: "all-products",
          title: "Tous les Produits",
          type: "page",
          icon: <Package className="w-4 h-4" />,
          description: "Vue d'ensemble du catalogue",
        },
        {
          id: "category-pages",
          title: "Pages Catégories",
          type: "page",
          icon: <Search className="w-4 h-4" />,
          description: "Filtrage par catégorie",
        },
        {
          id: "product-detail",
          title: "Détail Produit",
          type: "page",
          icon: <Eye className="w-4 h-4" />,
          description: "Galerie HD, zoom, vidéos 360°, avis",
        },
      ],
    },
    {
      id: "user-area",
      title: "Espace Utilisateur",
      type: "category",
      icon: <User className="w-4 h-4" />,
      description: "Gestion compte et commandes",
      color: "#6E6E6E",
      children: [
        {
          id: "auth",
          title: "Authentification",
          type: "page",
          icon: <User className="w-4 h-4" />,
          description: "Connexion / Inscription",
        },
        {
          id: "account-dashboard",
          title: "Tableau de Bord",
          type: "page",
          icon: <Settings className="w-4 h-4" />,
          description: "Gestion compte utilisateur",
        },
        {
          id: "order-detail",
          title: "Détail Commande",
          type: "page",
          icon: <FileText className="w-4 h-4" />,
          description: "Informations complètes commande",
        },
        {
          id: "order-tracking",
          title: "Suivi Commande",
          type: "page",
          icon: <Search className="w-4 h-4" />,
          description: "Tracking en temps réel",
        },
        {
          id: "checkout",
          title: "Tunnel d'Achat",
          type: "page",
          icon: <ShoppingCart className="w-4 h-4" />,
          description: "Processus de commande",
        },
      ],
    },
    {
      id: "content-pages",
      title: "Pages de Contenu",
      type: "category",
      icon: <FileText className="w-4 h-4" />,
      description: "Contenu éditorial et SEO",
      color: "#B5C233",
      children: [
        {
          id: "content-hub",
          title: "Hub de Contenu SEO",
          type: "page",
          icon: <Search className="w-4 h-4" />,
          description: "Articles et contenus optimisés",
        },
        {
          id: "all-projects",
          title: "Tous les Projets",
          type: "page",
          icon: <Settings className="w-4 h-4" />,
          description: "Galerie de réalisations",
        },
        {
          id: "project-detail",
          title: "Détail Projet",
          type: "page",
          icon: <Eye className="w-4 h-4" />,
          description: "Showcase projet individuel",
        },
        {
          id: "article-detail",
          title: "Détail Article",
          type: "page",
          icon: <FileText className="w-4 h-4" />,
          description: "Page article complète",
        },
      ],
    },
    {
      id: "corporate",
      title: "Pages Corporatives",
      type: "category",
      icon: <Building2 className="w-4 h-4" />,
      description: "Informations entreprise",
      color: "#6E6E6E",
      children: [
        {
          id: "our-history",
          title: "Notre Histoire",
          type: "page",
          icon: <History className="w-4 h-4" />,
          description: "Histoire de FIMA depuis 1985",
        },
        {
          id: "our-certifications",
          title: "Nos Certifications",
          type: "page",
          icon: <Award className="w-4 h-4" />,
          description: "Labels et certifications",
        },
        {
          id: "careers",
          title: "Carrières",
          type: "page",
          icon: <Users className="w-4 h-4" />,
          description: "Offres d'emploi et recrutement",
        },
      ],
    },
    {
      id: "b2b-solutions",
      title: "Solutions B2B",
      type: "page",
      icon: <Building2 className="w-4 h-4" />,
      description: "Landing page solutions professionnelles",
      color: "#E30613",
    },
    {
      id: "modals-widgets",
      title: "Modales & Widgets",
      type: "category",
      icon: <MessageSquare className="w-4 h-4" />,
      description: "Interactions utilisateur",
      color: "#B5C233",
      children: [
        {
          id: "cart-modal",
          title: "Panier",
          type: "modal",
          icon: <ShoppingCart className="w-4 h-4" />,
          description: "Gestion panier d'achat",
        },
        {
          id: "favorites-modal",
          title: "Favoris",
          type: "modal",
          icon: <User className="w-4 h-4" />,
          description: "Liste des produits favoris",
        },
        {
          id: "quote-request-modal",
          title: "Demande de Devis",
          type: "modal",
          icon: <FileText className="w-4 h-4" />,
          description: "Formulaire devis multi-étapes",
        },
        {
          id: "expert-consultation-modal",
          title: "Consultation Expert",
          type: "modal",
          icon: <Phone className="w-4 h-4" />,
          description: "Prise de RDV expert",
        },
        {
          id: "chat-widget",
          title: "Chat Widget",
          type: "modal",
          icon: <MessageSquare className="w-4 h-4" />,
          description: "Support client en temps réel",
        },
      ],
    },
  ],
};

interface SitemapNodeProps {
  node: SitemapNode;
  level: number;
}

const SitemapNodeComponent: React.FC<SitemapNodeProps> = ({
  node,
  level,
}) => {
  const [isExpanded, setIsExpanded] = useState(level < 2);

  const getTypeColor = (type: string) => {
    switch (type) {
      case "page":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "section":
        return "bg-green-100 text-green-800 border-green-200";
      case "modal":
        return "bg-purple-100 text-purple-800 border-purple-200";
      case "category":
        return "bg-orange-100 text-orange-800 border-orange-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getConnectorColor = (color?: string) => {
    return color || "#B5C233";
  };

  return (
    <div className="relative">
      {/* Connector line */}
      {level > 0 && (
        <div
          className="absolute -left-4 top-6 w-4 h-px"
          style={{
            backgroundColor: getConnectorColor(node.color),
          }}
        ></div>
      )}

      {/* Vertical line for children */}
      {level > 0 && node.children && isExpanded && (
        <div
          className="absolute -left-4 top-6 w-px h-full"
          style={{
            backgroundColor: getConnectorColor(node.color),
          }}
        ></div>
      )}

      <div
        className={`flex items-start gap-3 p-4 rounded-lg border transition-all duration-200 hover:shadow-md ${level === 0 ? "bg-gradient-to-r from-[#B5C233]/10 to-[#E30613]/10 border-[#B5C233]" : "bg-white border-gray-200"}`}
      >
        {/* Expand/Collapse button */}
        {node.children && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex-shrink-0 p-1 rounded hover:bg-gray-100 transition-colors"
            style={{ color: getConnectorColor(node.color) }}
          >
            {isExpanded ? (
              <ChevronDown className="w-4 h-4" />
            ) : (
              <ChevronRight className="w-4 h-4" />
            )}
          </button>
        )}

        {/* Node content */}
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <div
              className="p-2 rounded-lg"
              style={{
                backgroundColor: node.color
                  ? `${node.color}15`
                  : "#B5C23315",
                color: node.color || "#B5C233",
              }}
            >
              {node.icon}
            </div>

            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-semibold text-gray-900">
                  {node.title}
                </h3>
                <span
                  className={`px-2 py-1 text-xs rounded-full border ${getTypeColor(node.type)}`}
                >
                  {node.type}
                </span>
              </div>

              {node.description && (
                <p className="text-sm text-gray-600">
                  {node.description}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Children */}
      {node.children && isExpanded && (
        <div className="ml-8 mt-4 space-y-4">
          {node.children.map((child) => (
            <SitemapNodeComponent
              key={child.id}
              node={child}
              level={level + 1}
            />
          ))}
        </div>
      )}
    </div>
  );
};

interface FimaSitemapProps {
  onNavigate?: (page: string) => void;
}

export const FimaSitemap: React.FC<FimaSitemapProps> = ({
  onNavigate,
}) => {
  return (
    <div className="max-w-6xl mx-auto p-6 bg-gray-50 min-h-screen">
      {/* Back button */}
      <div className="mb-6">
        <button
          onClick={() => onNavigate?.("home")}
          className="flex items-center gap-2 px-4 py-2 bg-white border rounded-lg hover:bg-gray-50 transition-colors"
          style={{ borderColor: "#B5C233", color: "#6E6E6E" }}
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Retour à l'accueil</span>
        </button>
      </div>

      <div className="text-center mb-8">
        <h1 className="mb-4 bg-gradient-to-r from-[#B5C233] to-[#E30613] bg-clip-text text-transparent">
          Architecture de Navigation - Site FIMA
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Cartographie complète du site e-commerce B2B/B2C FIMA
          avec ses 3 métiers : Couchage, Design et Univers
          Glass. Navigation structurée pour une expérience
          utilisateur optimale.
        </p>
      </div>

      {/* Stats overview */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white p-4 rounded-lg border text-center">
          <div className="text-2xl font-bold text-[#B5C233]">
            15+
          </div>
          <div className="text-sm text-gray-600">
            Pages Principales
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg border text-center">
          <div className="text-2xl font-bold text-[#E30613]">
            3
          </div>
          <div className="text-sm text-gray-600">Métiers</div>
        </div>
        <div className="bg-white p-4 rounded-lg border text-center">
          <div className="text-2xl font-bold text-[#6E6E6E]">
            10+
          </div>
          <div className="text-sm text-gray-600">Sections</div>
        </div>
        <div className="bg-white p-4 rounded-lg border text-center">
          <div className="text-2xl font-bold text-[#B5C233]">
            5
          </div>
          <div className="text-sm text-gray-600">
            Modales/Widgets
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="bg-white p-4 rounded-lg border mb-6">
        <h3 className="font-semibold mb-3 text-gray-900">
          Légende
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded bg-blue-500"></span>
            <span>Page</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded bg-green-500"></span>
            <span>Section</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded bg-purple-500"></span>
            <span>Modale</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded bg-orange-500"></span>
            <span>Catégorie</span>
          </div>
        </div>
      </div>

      {/* Sitemap tree */}
      <div className="bg-white p-6 rounded-lg border">
        <SitemapNodeComponent node={sitemapData} level={0} />
      </div>

      {/* Technical details */}
      <div className="mt-8 bg-white p-6 rounded-lg border">
        <h3 className="font-semibold mb-4 text-gray-900">
          Détails Techniques
        </h3>
        <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-600">
          {/* <div>
            <h4 className="font-medium text-gray-900 mb-2">Stack Technique</h4>
            <ul className="space-y-1">
              <li>• React + TypeScript</li>
              <li>• Tailwind CSS v4</li>
              <li>• Supabase (Backend)</li>
              <li>• Shadcn/ui (Composants)</li>
              <li>• Lazy Loading (Performance)</li>
            </ul>
          </div> */}
          <div>
            <h4 className="font-medium text-gray-900 mb-2">
              Fonctionnalités Clés
            </h4>
            <ul className="space-y-1">
              <li>• Panier et favoris persistants</li>
              <li>• Système d'avis modérés</li>
              <li>• Devis multi-étapes</li>
              <li>• Suivi de commandes</li>
              <li>• Chat support temps réel</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};