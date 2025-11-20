import { useState, useEffect } from 'react';
import { TeamMember, Article, Testimonial } from '../data/supabase-data';

// Simulation d'appels API Supabase pour le moment
// En production, ces fonctions feraient de vrais appels à Supabase

export const useTeamMembers = () => {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        setLoading(true);
        // Simulation d'un délai d'API
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Données simulées (en production, ce serait un appel Supabase)
        const mockTeamData: TeamMember[] = [
          {
            id: 1,
            name: "Marie Dubois",
            position: "Directrice Générale", 
            description: "25 ans d'expérience dans l'industrie du mobilier et de l'ameublement",
            image: "https://images.unsplash.com/photo-1754298949882-216a1c92dbb5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHdvbWFuJTIwcHJvZmVzc2lvbmFsJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzU4MTA2MzQ0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            department: "Direction",
            email: "marie.dubois@fima.fr",
            order_index: 1,
            is_active: true,
            created_at: new Date().toISOString()
          },
          {
            id: 2,
            name: "Jean-Pierre Martin",
            position: "Responsable Commercial",
            description: "Expert en solutions B2B pour l'hôtellerie et les collectivités",
            image: "https://images.unsplash.com/photo-1629507208649-70919ca33793?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1hbiUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc1ODEwMTk1M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            department: "Commercial",
            email: "jp.martin@fima.fr",
            order_index: 2,
            is_active: true,
            created_at: new Date().toISOString()
          },
          {
            id: 3,
            name: "Sophie Laurent",
            position: "Responsable Design",
            description: "Créatrice des collections FIMA Design et experte en menuiserie",
            image: "https://images.unsplash.com/photo-1754298949882-216a1c92dbb5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHdvbWFuJTIwcHJvZmVzc2lvbmFsJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzU4MTA2MzQ0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            department: "Design",
            email: "sophie.laurent@fima.fr",
            order_index: 3,
            is_active: true,
            created_at: new Date().toISOString()
          },
          {
            id: 4,
            name: "Thomas Moreau",
            position: "Chef d'atelier",
            description: "20 ans d'expertise en fabrication et contrôle qualité",
            image: "https://images.unsplash.com/photo-1629507208649-70919ca33793?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1hbiUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc1ODEwMTk1M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            department: "Production",
            email: "thomas.moreau@fima.fr",
            order_index: 4,
            is_active: true,
            created_at: new Date().toISOString()
          }
        ];

        setTeamMembers(mockTeamData);
        setError(null);
      } catch (err) {
        setError('Erreur lors du chargement de l\'équipe');
        console.error('Erreur useTeamMembers:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchTeamMembers();
  }, []);

  return { teamMembers, loading, error };
};

export const useArticles = (category?: string) => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setLoading(true);
        await new Promise(resolve => setTimeout(resolve, 800));
        
        // Données simulées
        const mockArticleData: Article[] = [
          {
            id: 1,
            title: "Les tendances literie 2025 : confort et écologie",
            excerpt: "Découvrez les nouvelles tendances qui révolutionnent l'industrie de la literie en 2025, avec un focus sur les matériaux durables.",
            content: "Article complet à développer...",
            image: "https://images.unsplash.com/photo-1640109478916-f445f8f19b11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiZWRyb29tJTIwaW50ZXJpb3IlMjBtb2Rlcm58ZW58MXx8fHwxNzU4MTA2MzE5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            date: "15 Janvier 2025",
            author: "Marie Dubois",
            category: "tendances",
            read_time: "5 min",
            slug: "tendances-literie-2025",
            is_published: true,
            views: 245,
            created_at: new Date().toISOString()
          },
          {
            id: 2,
            title: "FIMA Design lance sa nouvelle collection éco-responsable",
            excerpt: "Notre engagement pour l'environnement se concrétise avec une nouvelle gamme de meubles fabriqués à partir de matériaux recyclés.",
            content: "Article complet à développer...",
            image: "https://images.unsplash.com/photo-1593069431672-f903a33c286f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXJuaXR1cmUlMjBkZXNpZ24lMjBzdXN0YWluYWJsZSUyMHdvb2R8ZW58MXx8fHwxNzU4MTA2MzM2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            date: "12 Janvier 2025",
            author: "Sophie Laurent",
            category: "innovation",
            read_time: "3 min",
            slug: "collection-eco-responsable",
            is_published: true,
            views: 189,
            created_at: new Date().toISOString()
          },
          {
            id: 3,
            title: "Projet hôtelier : 200 chambres équipées en Provence",
            excerpt: "Retour sur notre récent projet d'aménagement pour un complexe hôtelier de luxe en Provence, mêlant confort et élégance.",
            content: "Article complet à développer...",
            image: "https://images.unsplash.com/photo-1632598024410-3d8f24daab57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMHJvb20lMjBpbnRlcmlvcnxlbnwxfHx8fDE3NTgwODg2NDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            date: "8 Janvier 2025",
            author: "Jean-Pierre Martin",
            category: "projets",
            read_time: "7 min",
            slug: "projet-hotel-provence",
            is_published: true,
            views: 312,
            created_at: new Date().toISOString()
          },
          {
            id: 4,
            title: "FIMA reçoit le label « Entreprise du Patrimoine Vivant »",
            excerpt: "Cette distinction officielle reconnaît notre savoir-faire d'excellence et notre engagement dans la préservation des métiers traditionnels.",
            content: "Article complet à développer...",
            image: "https://images.unsplash.com/photo-1680210849773-f97a41c6b7ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBraXRjaGVuJTIwaW50ZXJpb3IlMjBkZXNpZ258ZW58MXx8fHwxNzU4MDA0MDcxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            date: "5 Janvier 2025",
            author: "Direction FIMA",
            category: "actualites",
            read_time: "4 min",
            slug: "label-patrimoine-vivant",
            is_published: true,
            views: 156,
            created_at: new Date().toISOString()
          }
        ];

        // Filtrer par catégorie si spécifiée
        const filteredArticles = category && category !== 'all' 
          ? mockArticleData.filter(article => article.category === category)
          : mockArticleData;

        setArticles(filteredArticles);
        setError(null);
      } catch (err) {
        setError('Erreur lors du chargement des articles');
        console.error('Erreur useArticles:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, [category]);

  return { articles, loading, error };
};

export const useTestimonials = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        setLoading(true);
        await new Promise(resolve => setTimeout(resolve, 600));
        
        // Données simulées
        const mockTestimonialData: Testimonial[] = [
          {
            id: 1,
            name: "Catherine Moreau",
            company: "Hôtel des Oliviers",
            location: "Provence",
            rating: 5,
            comment: "FIMA a transformé notre établissement avec un mobilier de qualité exceptionnelle. Nos clients remarquent immédiatement la différence de confort.",
            project: "Rénovation complète - 85 chambres",
            image: "https://images.unsplash.com/photo-1754298949882-216a1c92dbb5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHdvbWFuJTIwcHJvZmVzc2lvbmFsJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzU4MTA2MzQ0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            is_featured: true,
            order_index: 1,
            created_at: new Date().toISOString()
          },
          {
            id: 2,
            name: "Marc Dubois",
            company: "Résidence Les Jardins",
            location: "Lyon",
            rating: 5,
            comment: "Un accompagnement professionnel du début à la fin. FIMA a su adapter ses solutions à nos contraintes techniques spécifiques.",
            project: "Aménagement EHPAD - 120 chambres",
            image: "https://images.unsplash.com/photo-1629507208649-70919ca33793?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1hbiUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc1ODEwMTk1M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            is_featured: true,
            order_index: 2,
            created_at: new Date().toISOString()
          },
          {
            id: 3,
            name: "Sophie Lemaire",
            company: "TechCorp",
            location: "Paris",
            rating: 5,
            comment: "Nos nouveaux espaces de travail ont révolutionné l'ambiance de l'entreprise. Design moderne et fonctionnalité parfaite.",
            project: "Open space - 200 postes",
            image: "https://images.unsplash.com/photo-1754298949882-216a1c92dbb5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHdvbWFuJTIwcHJvZmVzc2lvbmFsJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzU4MTA2MzQ0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            is_featured: true,
            order_index: 3,
            created_at: new Date().toISOString()
          }
        ];

        setTestimonials(mockTestimonialData);
        setError(null);
      } catch (err) {
        setError('Erreur lors du chargement des témoignages');
        console.error('Erreur useTestimonials:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  return { testimonials, loading, error };
};