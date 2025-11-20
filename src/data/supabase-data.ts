import { createClient } from '@supabase/supabase-js';

// Types pour TypeScript
export interface TeamMember {
  id: number;
  name: string;
  position: string;
  description: string;
  image: string;
  department: string;
  email?: string;
  linkedin?: string;
  order_index: number;
  is_active: boolean;
  created_at: string;
}

export interface Article {
  id: number;
  title: string;
  excerpt: string;
  content?: string;
  image: string;
  date: string;
  author: string;
  category: string;
  read_time: string;
  slug: string;
  is_published: boolean;
  views: number;
  created_at: string;
}

export interface Testimonial {
  id: number;
  name: string;
  company: string;
  location: string;
  rating: number;
  comment: string;
  project: string;
  image: string;
  is_featured: boolean;
  order_index: number;
  created_at: string;
}

// Structure des données pour initialiser Supabase
export const initialTeamData: Omit<TeamMember, 'id' | 'created_at'>[] = [
  {
    name: "Marie Dubois",
    position: "Directrice Générale",
    description: "25 ans d'expérience dans l'industrie du mobilier et de l'ameublement",
    image: "https://images.unsplash.com/photo-1709715357519-2a84f9765e57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHdvbWFuJTIwZXhlY3V0aXZlfGVufDF8fHx8MTc1NjAwODc5OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    department: "Direction",
    email: "marie.dubois@fima.fr",
    order_index: 1,
    is_active: true
  },
  {
    name: "Jean-Pierre Martin",
    position: "Responsable Commercial",
    description: "Expert en solutions B2B pour l'hôtellerie et les collectivités",
    image: "https://images.unsplash.com/photo-1629507208649-70919ca33793?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1hbiUyMHN1aXQlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzU1OTYxMjA2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    department: "Commercial",
    email: "jp.martin@fima.fr",
    order_index: 2,
    is_active: true
  },
  {
    name: "Sophie Laurent",
    position: "Responsable Design",
    description: "Créatrice des collections FIMA Design et experte en menuiserie",
    image: "https://images.unsplash.com/photo-1753162658593-1282a070d8f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGRlc2lnbmVyJTIwYXJjaGl0ZWN0JTIwY3JlYXRpdmV8ZW58MXx8fHwxNzU2MDA4Nzk5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    department: "Design",
    email: "sophie.laurent@fima.fr",
    order_index: 3,
    is_active: true
  },
  {
    name: "Thomas Moreau",
    position: "Chef d'atelier",
    description: "20 ans d'expertise en fabrication et contrôle qualité",
    image: "https://images.unsplash.com/photo-1578988254148-9937ccb32ae7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwd29ya2VyJTIwbWFuJTIwZmFjdG9yeXxlbnwxfHx8fDE3NTYwMDg4MDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    department: "Production",
    email: "thomas.moreau@fima.fr",
    order_index: 4,
    is_active: true
  }
];

export const initialArticleData: Omit<Article, 'id' | 'created_at'>[] = [
  {
    title: "Les tendances literie 2025 : confort et écologie",
    excerpt: "Découvrez les nouvelles tendances qui révolutionnent l'industrie de la literie en 2025, avec un focus sur les matériaux durables.",
    content: "Article complet à développer...",
    image: "https://images.unsplash.com/photo-1750420556288-d0e32a6f517b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBiZWRyb29tJTIwaW50ZXJpb3IlMjBkZXNpZ258ZW58MXx8fHwxNzU2MDA4ODAwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    date: "15 Janvier 2025",
    author: "Marie Dubois",
    category: "tendances",
    read_time: "5 min",
    slug: "tendances-literie-2025",
    is_published: true,
    views: 245
  },
  {
    title: "FIMA Design lance sa nouvelle collection éco-responsable",
    excerpt: "Notre engagement pour l'environnement se concrétise avec une nouvelle gamme de meubles fabriqués à partir de matériaux recyclés.",
    content: "Article complet à développer...",
    image: "https://images.unsplash.com/photo-1725891261511-e6d40fead7a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY28lMjBmdXJuaXR1cmUlMjBzdXN0YWluYWJsZSUyMGRlc2lnbnxlbnwxfHx8fDE3NTYwMDg4MDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    date: "12 Janvier 2025",
    author: "Sophie Laurent",
    category: "innovation",
    read_time: "3 min",
    slug: "collection-eco-responsable",
    is_published: true,
    views: 189
  },
  {
    title: "Projet hôtelier : 200 chambres équipées en Provence",
    excerpt: "Retour sur notre récent projet d'aménagement pour un complexe hôtelier de luxe en Provence, mêlant confort et élégance.",
    content: "Article complet à développer...",
    image: "https://images.unsplash.com/photo-1632598024410-3d8f24daab57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMHJvb20lMjBpbnRlcmlvcnxlbnwxfHx8fDE3NTU5MzIxMjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    date: "8 Janvier 2025",
    author: "Jean-Pierre Martin",
    category: "projets",
    read_time: "7 min",
    slug: "projet-hotel-provence",
    is_published: true,
    views: 312
  },
  {
    title: "FIMA reçoit le label « Entreprise du Patrimoine Vivant »",
    excerpt: "Cette distinction officielle reconnaît notre savoir-faire d'excellence et notre engagement dans la préservation des métiers traditionnels.",
    content: "Article complet à développer...",
    image: "https://images.unsplash.com/photo-1725891261511-e6d40fead7a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY28lMjBmdXJuaXR1cmUlMjBzdXN0YWluYWJsZSUyMGRlc2lnbnxlbnwxfHx8fDE3NTYwMDg4MDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    date: "5 Janvier 2025",
    author: "Direction FIMA",
    category: "actualites",
    read_time: "4 min",
    slug: "label-patrimoine-vivant",
    is_published: true,
    views: 156
  }
];

export const initialTestimonialData: Omit<Testimonial, 'id' | 'created_at'>[] = [
  {
    name: "Catherine Moreau",
    company: "Hôtel des Oliviers",
    location: "Provence",
    rating: 5,
    comment: "FIMA a transformé notre établissement avec un mobilier de qualité exceptionnelle. Nos clients remarquent immédiatement la différence de confort.",
    project: "Rénovation complète - 85 chambres",
    image: "https://images.unsplash.com/photo-1709715357519-2a84f9765e57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHdvbWFuJTIwZXhlY3V0aXZlfGVufDF8fHx8MTc1NjAwODc5OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    is_featured: true,
    order_index: 1
  },
  {
    name: "Marc Dubois",
    company: "Résidence Les Jardins",
    location: "Lyon",
    rating: 5,
    comment: "Un accompagnement professionnel du début à la fin. FIMA a su adapter ses solutions à nos contraintes techniques spécifiques.",
    project: "Aménagement EHPAD - 120 chambres",
    image: "https://images.unsplash.com/photo-1629507208649-70919ca33793?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1hbiUyMHN1aXQlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzU1OTYxMjA2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    is_featured: true,
    order_index: 2
  },
  {
    name: "Sophie Lemaire",
    company: "TechCorp",
    location: "Paris",
    rating: 5,
    comment: "Nos nouveaux espaces de travail ont révolutionné l'ambiance de l'entreprise. Design moderne et fonctionnalité parfaite.",
    project: "Open space - 200 postes",
    image: "https://images.unsplash.com/photo-1753162658593-1282a070d8f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGRlc2lnbmVyJTIwYXJjaGl0ZWN0JTIwY3JlYXRpdmV8ZW58MXx8fHwxNzU2MDA4Nzk5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    is_featured: true,
    order_index: 3
  }
];

// Fonctions pour initialiser les données
export const initializeSupabaseData = async () => {
  try {
    // Note: Cette fonction serait utilisée pour initialiser les données Supabase
    // Elle nécessiterait des appels API vers le serveur Supabase
    console.log('Initialisation des données Supabase...');
    
    return {
      success: true,
      message: 'Données initialisées avec succès'
    };
  } catch (error) {
    console.error('Erreur lors de l\'initialisation:', error);
    return {
      success: false,
      message: 'Erreur lors de l\'initialisation des données'
    };
  }
};