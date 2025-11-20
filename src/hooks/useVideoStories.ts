import { useState, useEffect } from 'react';
import { projectId, publicAnonKey } from '../utils/supabase/info';

// Types pour les video stories basés sur Types.md
export interface VideoStory {
  id: string;
  titleFr: string;
  titleEn: string;
  descriptionFr?: string;
  descriptionEn?: string;
  videoUrl: string;
  thumbnailUrl?: string;
  duration: string; // Format: "2:30"
  category: string; // 'couchage' | 'design' | 'glass' | 'general'
  featured?: boolean;
  published: boolean;
  publishedDate?: string;
  order?: number;
  quoteFr?: string;
  quoteEn?: string;
  quoteAuthorFr?: string;
  quoteAuthorEn?: string;
  createdAt: string;
  updatedAt?: string;
}

const API_BASE_URL = `https://${projectId}.supabase.co/functions/v1/make-server-98c6ec1c`;

/**
 * Hook pour récupérer les video stories depuis l'API backend
 * @param locale - Langue actuelle ('fr' ou 'en')
 * @param category - Catégorie optionnelle pour filtrer
 * @param featuredOnly - Afficher uniquement les vidéos mises en avant
 * @param publishedOnly - Afficher uniquement les vidéos publiées
 */
export const useVideoStories = (
  locale: 'fr' | 'en' = 'fr',
  category?: string,
  featuredOnly: boolean = false,
  publishedOnly: boolean = true
) => {
  const [videoStories, setVideoStories] = useState<VideoStory[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchVideoStories = async () => {
      try {
        setLoading(true);
        setError(null);

        const url = new URL(`${API_BASE_URL}/video-stories`);
        
        // Ajouter les paramètres de filtrage
        if (category) {
          url.searchParams.append('category', category);
        }
        if (featuredOnly) {
          url.searchParams.append('featured', 'true');
        }
        
        const response = await fetch(url.toString(), {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${publicAnonKey}`,
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error(`Erreur lors du chargement des video stories: ${response.statusText}`);
        }

        const result = await response.json();
        
        if (!result.success) {
          throw new Error(result.error || 'Erreur lors du chargement des video stories');
        }

        let videoStoriesData: VideoStory[] = result.data || [];

        // Filtrer les vidéos publiées uniquement si demandé
        if (publishedOnly) {
          videoStoriesData = videoStoriesData.filter(v => v.published);
        }

        // Trier par ordre personnalisé, puis par featured, puis par date
        videoStoriesData.sort((a, b) => {
          // Order first (si défini)
          if (a.order !== undefined && b.order !== undefined) {
            if (a.order !== b.order) return a.order - b.order;
          }
          
          // Featured second
          if (a.featured && !b.featured) return -1;
          if (!a.featured && b.featured) return 1;
          
          // Then by date
          const dateA = new Date(a.publishedDate || a.createdAt).getTime();
          const dateB = new Date(b.publishedDate || b.createdAt).getTime();
          return dateB - dateA;
        });

        setVideoStories(videoStoriesData);
      } catch (err) {
        console.error('Error fetching video stories:', err);
        setError(err instanceof Error ? err.message : 'Erreur inconnue');
        setVideoStories([]);
      } finally {
        setLoading(false);
      }
    };

  useEffect(() => {
    fetchVideoStories();
  }, [locale, category, featuredOnly, publishedOnly]);

  return { videoStories, loading, error, refetch: fetchVideoStories };
};

/**
 * Hook pour récupérer une video story par son ID
 * @param id - ID de la video story
 * @param locale - Langue actuelle ('fr' ou 'en')
 */
export const useVideoStory = (id: string, locale: 'fr' | 'en' = 'fr') => {
  const [videoStory, setVideoStory] = useState<VideoStory | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchVideoStory = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(`${API_BASE_URL}/video-stories/${id}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${publicAnonKey}`,
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error(`Erreur lors du chargement de la video story: ${response.statusText}`);
        }

        const result = await response.json();
        
        if (!result.success) {
          throw new Error(result.error || 'Video story non trouvée');
        }

        setVideoStory(result.data);
      } catch (err) {
        console.error('Error fetching video story:', err);
        setError(err instanceof Error ? err.message : 'Erreur inconnue');
        setVideoStory(null);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchVideoStory();
    }
  }, [id, locale]);

  return { videoStory, loading, error };
};

/**
 * Hook pour créer ou mettre à jour une video story
 */
export const useVideoStoryMutation = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const createVideoStory = async (videoStoryData: Omit<VideoStory, 'id' | 'createdAt'>) => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(`${API_BASE_URL}/video-stories`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${publicAnonKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(videoStoryData),
      });

      if (!response.ok) {
        throw new Error(`Erreur lors de la création de la video story: ${response.statusText}`);
      }

      const result = await response.json();
      
      if (!result.success) {
        throw new Error(result.error || 'Erreur lors de la création de la video story');
      }

      return { success: true, data: result.data };
    } catch (err) {
      console.error('Error creating video story:', err);
      const errorMessage = err instanceof Error ? err.message : 'Erreur inconnue';
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  };

  const updateVideoStory = async (id: string, videoStoryData: Partial<VideoStory>) => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(`${API_BASE_URL}/video-stories/${id}`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${publicAnonKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(videoStoryData),
      });

      if (!response.ok) {
        throw new Error(`Erreur lors de la mise à jour de la video story: ${response.statusText}`);
      }

      const result = await response.json();
      
      if (!result.success) {
        throw new Error(result.error || 'Erreur lors de la mise à jour de la video story');
      }

      return { success: true, data: result.data };
    } catch (err) {
      console.error('Error updating video story:', err);
      const errorMessage = err instanceof Error ? err.message : 'Erreur inconnue';
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  };

  const deleteVideoStory = async (id: string) => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(`${API_BASE_URL}/video-stories/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${publicAnonKey}`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`Erreur lors de la suppression de la video story: ${response.statusText}`);
      }

      const result = await response.json();
      
      if (!result.success) {
        throw new Error(result.error || 'Erreur lors de la suppression de la video story');
      }

      return { success: true };
    } catch (err) {
      console.error('Error deleting video story:', err);
      const errorMessage = err instanceof Error ? err.message : 'Erreur inconnue';
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  };

  return { createVideoStory, updateVideoStory, deleteVideoStory, loading, error };
};