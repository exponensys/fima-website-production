import { useState, useEffect } from 'react';
import { projectId, publicAnonKey } from '../utils/supabase/info';

// Types pour les projets/solutions
export interface Project {
  id: string;
  title: string;
  slug: string;
  category: string; // 'residential', 'commercial', 'hospitality', 'institutional'
  categoryName: string; // Nom français de la catégorie
  location: string;
  city?: string;
  country?: string;
  year: string;
  completionDate?: string;
  client: string;
  clientLogo?: string;
  description: string;
  longDescription?: string;
  challenges?: string;
  solution?: string;
  results?: string;
  images: string[]; // URLs des images
  featuredImage?: string; // Image principale
  budget?: string; // Budget du projet
  surface?: string; // Surface en m²
  duration?: string; // Durée du projet
  businessUnits: string[]; // ['FIMA Couchage', 'FIMA Design', 'UNIVERS GLASS']
  products?: string[]; // Produits utilisés (SKUs)
  featured: boolean; // Mis en avant
  published: boolean; // Publié ou brouillon
  awards?: string[]; // Récompenses
  tags?: string[]; // Tags pour recherche
  testimonial?: {
    content: string;
    author: string;
    role: string;
    rating?: number;
  };
  metrics?: {
    label: string;
    value: string;
  }[];
  gallery?: string[]; // Galerie d'images supplémentaires
  seo?: {
    title?: string;
    description?: string;
    keywords?: string[];
  };
  createdAt: string;
  updatedAt?: string;
}

const API_BASE_URL = `https://${projectId}.supabase.co/functions/v1/make-server-98c6ec1c`;

/**
 * Hook pour récupérer les projets depuis l'API backend
 * @param category - Catégorie optionnelle pour filtrer
 * @param featuredOnly - Afficher uniquement les projets featured
 * @param limit - Limiter le nombre de résultats
 */
export const useProjects = (
  category?: string,
  featuredOnly: boolean = false,
  limit?: number
) => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        setError(null);

        const url = new URL(`${API_BASE_URL}/projects`);
        
        // Ajouter les paramètres de filtrage
        if (category && category !== 'tous') {
          url.searchParams.append('category', category);
        }
        if (featuredOnly) {
          url.searchParams.append('featured', 'true');
        }
        if (limit) {
          url.searchParams.append('limit', limit.toString());
        }
        
        const response = await fetch(url.toString(), {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${publicAnonKey}`,
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error(`Erreur lors du chargement des projets: ${response.statusText}`);
        }

        const result = await response.json();
        
        if (!result.success) {
          throw new Error(result.error || 'Erreur lors du chargement des projets');
        }

        let projectsData: Project[] = result.data || [];

        // Filtrer les projets publiés uniquement
        projectsData = projectsData.filter(p => p.published);

        // Trier par featured first, puis par année décroissante
        projectsData.sort((a, b) => {
          // Featured first
          if (a.featured && !b.featured) return -1;
          if (!a.featured && b.featured) return 1;
          
          // Then by year (descending)
          return parseInt(b.year) - parseInt(a.year);
        });

        setProjects(projectsData);
      } catch (err) {
        console.error('Error fetching projects:', err);
        setError(err instanceof Error ? err.message : 'Erreur inconnue');
        setProjects([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, [category, featuredOnly, limit]);

  return { projects, loading, error };
};

/**
 * Hook pour récupérer un projet par son slug
 * @param slug - Slug du projet
 */
export const useProject = (slug: string) => {
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(`${API_BASE_URL}/projects/${slug}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${publicAnonKey}`,
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error(`Erreur lors du chargement du projet: ${response.statusText}`);
        }

        const result = await response.json();
        
        if (!result.success) {
          throw new Error(result.error || 'Projet non trouvé');
        }

        setProject(result.data);
      } catch (err) {
        console.error('Error fetching project:', err);
        setError(err instanceof Error ? err.message : 'Erreur inconnue');
        setProject(null);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchProject();
    }
  }, [slug]);

  return { project, loading, error };
};

/**
 * Hook pour créer ou mettre à jour un projet
 */
export const useProjectMutation = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const createProject = async (projectData: Omit<Project, 'id' | 'createdAt'>) => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(`${API_BASE_URL}/projects`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${publicAnonKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(projectData),
      });

      if (!response.ok) {
        throw new Error(`Erreur lors de la création du projet: ${response.statusText}`);
      }

      const result = await response.json();
      
      if (!result.success) {
        throw new Error(result.error || 'Erreur lors de la création du projet');
      }

      return { success: true, data: result.data };
    } catch (err) {
      console.error('Error creating project:', err);
      const errorMessage = err instanceof Error ? err.message : 'Erreur inconnue';
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  };

  const updateProject = async (id: string, projectData: Partial<Project>) => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(`${API_BASE_URL}/projects/${id}`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${publicAnonKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(projectData),
      });

      if (!response.ok) {
        throw new Error(`Erreur lors de la mise à jour du projet: ${response.statusText}`);
      }

      const result = await response.json();
      
      if (!result.success) {
        throw new Error(result.error || 'Erreur lors de la mise à jour du projet');
      }

      return { success: true, data: result.data };
    } catch (err) {
      console.error('Error updating project:', err);
      const errorMessage = err instanceof Error ? err.message : 'Erreur inconnue';
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  };

  const deleteProject = async (id: string) => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(`${API_BASE_URL}/projects/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${publicAnonKey}`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`Erreur lors de la suppression du projet: ${response.statusText}`);
      }

      const result = await response.json();
      
      if (!result.success) {
        throw new Error(result.error || 'Erreur lors de la suppression du projet');
      }

      return { success: true };
    } catch (err) {
      console.error('Error deleting project:', err);
      const errorMessage = err instanceof Error ? err.message : 'Erreur inconnue';
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  };

  return { createProject, updateProject, deleteProject, loading, error };
};