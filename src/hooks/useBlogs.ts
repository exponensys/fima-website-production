import { useState, useEffect } from 'react';
import { projectId, publicAnonKey } from '../utils/supabase/info';

// Types pour les blogs basés sur Types.md
export interface Blog {
  id: string;
  titleFr: string;
  titleEn: string;
  slug: string;
  summaryFr: string;
  summaryEn: string;
  contentFr: string;
  contentEn: string;
  author: string;
  category: string;
  tags: string[];
  featuredImage: string;
  published: boolean;
  publishedDate?: string;
  createdAt: string;
  updatedAt?: string;
  readTime: number;
  views?: number;
  likes?: number;
}

const API_BASE_URL = `https://${projectId}.supabase.co/functions/v1/make-server-4a2f605a`;

/**
 * Hook pour récupérer les blogs depuis l'API backend
 * @param locale - Langue actuelle ('fr' ou 'en')
 * @param category - Catégorie optionnelle pour filtrer
 * @param publishedOnly - Afficher uniquement les articles publiés
 */
export const useBlogs = (locale: 'fr' | 'en' = 'fr', category?: string, publishedOnly: boolean = true) => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(`${API_BASE_URL}/blogs`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${publicAnonKey}`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`Erreur lors du chargement des blogs: ${response.statusText}`);
      }

      const result = await response.json();
      
      if (!result.success) {
        throw new Error(result.error || 'Erreur lors du chargement des blogs');
      }

      let blogsData: Blog[] = result.data || [];

      // Filtrer par catégorie si spécifié
      if (category && category !== 'all') {
        blogsData = blogsData.filter(blog => blog.category === category);
      }

      // Filtrer les articles publiés uniquement si demandé
      if (publishedOnly) {
        blogsData = blogsData.filter(blog => blog.published);
      }

      // Trier par date de publication décroissante
      blogsData.sort((a, b) => {
        const dateA = new Date(a.publishedDate || a.createdAt).getTime();
        const dateB = new Date(b.publishedDate || b.createdAt).getTime();
        return dateB - dateA;
      });

      setBlogs(blogsData);
    } catch (err) {
      console.error('Error fetching blogs:', err);
      const errorMessage = err instanceof Error ? err.message : 'Erreur inconnue';
      setError(errorMessage);
      setBlogs([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, [locale, category, publishedOnly]);

  return { blogs, loading, error, refetch: fetchBlogs };
};

/**
 * Hook pour récupérer un blog par son slug
 * @param slug - Slug du blog
 * @param locale - Langue actuelle ('fr' ou 'en')
 */
export const useBlog = (slug: string, locale: 'fr' | 'en' = 'fr') => {
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(`${API_BASE_URL}/blogs/${slug}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${publicAnonKey}`,
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error(`Erreur lors du chargement du blog: ${response.statusText}`);
        }

        const result = await response.json();
        
        if (!result.success) {
          throw new Error(result.error || 'Blog non trouvé');
        }

        setBlog(result.data);
      } catch (err) {
        console.error('Error fetching blog:', err);
        setError(err instanceof Error ? err.message : 'Erreur inconnue');
        setBlog(null);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchBlog();
    }
  }, [slug, locale]);

  return { blog, loading, error };
};

/**
 * Hook pour créer ou mettre à jour un blog
 */
export const useBlogMutation = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const createBlog = async (blogData: Omit<Blog, 'id' | 'createdAt' | 'views' | 'likes'>) => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(`${API_BASE_URL}/blogs`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${publicAnonKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(blogData),
      });

      if (!response.ok) {
        throw new Error(`Erreur lors de la création du blog: ${response.statusText}`);
      }

      const result = await response.json();
      
      if (!result.success) {
        throw new Error(result.error || 'Erreur lors de la création du blog');
      }

      return { success: true, data: result.data };
    } catch (err) {
      console.error('Error creating blog:', err);
      const errorMessage = err instanceof Error ? err.message : 'Erreur inconnue';
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  };

  const updateBlog = async (id: string, blogData: Partial<Blog>) => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(`${API_BASE_URL}/blogs/${id}`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${publicAnonKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(blogData),
      });

      if (!response.ok) {
        throw new Error(`Erreur lors de la mise à jour du blog: ${response.statusText}`);
      }

      const result = await response.json();
      
      if (!result.success) {
        throw new Error(result.error || 'Erreur lors de la mise à jour du blog');
      }

      return { success: true, data: result.data };
    } catch (err) {
      console.error('Error updating blog:', err);
      const errorMessage = err instanceof Error ? err.message : 'Erreur inconnue';
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  };

  const deleteBlog = async (id: string) => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(`${API_BASE_URL}/blogs/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${publicAnonKey}`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`Erreur lors de la suppression du blog: ${response.statusText}`);
      }

      const result = await response.json();
      
      if (!result.success) {
        throw new Error(result.error || 'Erreur lors de la suppression du blog');
      }

      return { success: true };
    } catch (err) {
      console.error('Error deleting blog:', err);
      const errorMessage = err instanceof Error ? err.message : 'Erreur inconnue';
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  };

  return { createBlog, updateBlog, deleteBlog, loading, error };
};