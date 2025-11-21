import { useState, useEffect } from 'react';
import { supabase } from '../utils/supabase/client';

// Types pour les testimonials basés sur Types.md
export interface Testimonial {
  id: string;
  clientName: string;
  clientPosition: string;
  clientCompany: string;
  clientLocation: string;
  clientPhoto?: string;
  testimonialFr: string;
  testimonialEn: string;
  rating: 1 | 2 | 3 | 4 | 5;
  project?: string;
  projectId?: string;
  category: string;
  featured?: boolean;
  published: boolean;
  publishedDate?: string;
  videoUrl?: string;
  createdAt: string;
  updatedAt?: string;
}

// Utilisation directe du client Supabase au lieu des Edge Functions

/**
 * Hook pour récupérer les testimonials depuis l'API backend
 * @param locale - Langue actuelle ('fr' ou 'en')
 * @param category - Catégorie optionnelle pour filtrer
 * @param featuredOnly - Afficher uniquement les testimonials mis en avant
 * @param publishedOnly - Afficher uniquement les testimonials publiés
 */
export const useTestimonials = (
  locale: 'fr' | 'en' = 'fr',
  category?: string,
  featuredOnly: boolean = false,
  publishedOnly: boolean = true
) => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchTestimonials = async () => {
      try {
        setLoading(true);
        setError(null);

        let query = supabase.from('testimonials').select('*');
        
        // Ajouter les paramètres de filtrage
        if (category) {
          query = query.eq('category', category);
        }
        if (featuredOnly) {
          query = query.eq('featured', true);
        }
        
        const { data, error: supabaseError } = await query.order('created_at', { ascending: false });

        if (supabaseError) {
          console.error('Testimonials Supabase error:', supabaseError);
          setTestimonials([]);
          setError(`Erreur lors du chargement des témoignages: ${supabaseError.message}`);
          setLoading(false);
          return;
        }

        let testimonialsData: Testimonial[] = (data || []).map(item => ({
          id: item.id,
          clientName: item.client_name,
          clientPosition: item.client_position,
          clientCompany: item.client_company,
          clientLocation: item.client_location,
          clientPhoto: item.client_photo,
          testimonialFr: item.testimonial_fr,
          testimonialEn: item.testimonial_en,
          rating: item.rating,
          project: item.project,
          projectId: item.project_id,
          category: item.category,
          featured: item.featured,
          published: item.published,
          publishedDate: item.published_date,
          videoUrl: item.video_url,
          createdAt: item.created_at,
          updatedAt: item.updated_at
        }));

        // Filtrer les testimonials publiés uniquement si demandé
        if (publishedOnly) {
          testimonialsData = testimonialsData.filter(t => t.published);
        }

        // Trier par date de publication décroissante, puis par featured
        testimonialsData.sort((a, b) => {
          // Featured first
          if (a.featured && !b.featured) return -1;
          if (!a.featured && b.featured) return 1;
          
          // Then by date
          const dateA = new Date(a.publishedDate || a.createdAt).getTime();
          const dateB = new Date(b.publishedDate || b.createdAt).getTime();
          return dateB - dateA;
        });

        setTestimonials(testimonialsData);
      } catch (err) {
        console.error('Error fetching testimonials:', err);
        const errorMessage = err instanceof Error ? err.message : 'Erreur de connexion au serveur';
        setError(errorMessage);
        setTestimonials([]);
      } finally {
        setLoading(false);
      }
    };

  useEffect(() => {
    fetchTestimonials();
  }, [locale, category, featuredOnly, publishedOnly]);

  return { testimonials, loading, error, refetch: fetchTestimonials };
};

/**
 * Hook pour récupérer un testimonial par son ID
 * @param id - ID du testimonial
 * @param locale - Langue actuelle ('fr' ou 'en')
 */
export const useTestimonial = (id: string, locale: 'fr' | 'en' = 'fr') => {
  const [testimonial, setTestimonial] = useState<Testimonial | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTestimonial = async () => {
      try {
        setLoading(true);
        setError(null);

        const { data, error: supabaseError } = await supabase
          .from('testimonials')
          .select('*')
          .eq('id', id)
          .single();

        if (supabaseError) {
          throw new Error(`Erreur lors du chargement du testimonial: ${supabaseError.message}`);
        }

        if (data) {
          setTestimonial({
            id: data.id,
            clientName: data.client_name,
            clientPosition: data.client_position,
            clientCompany: data.client_company,
            clientLocation: data.client_location,
            clientPhoto: data.client_photo,
            testimonialFr: data.testimonial_fr,
            testimonialEn: data.testimonial_en,
            rating: data.rating,
            project: data.project,
            projectId: data.project_id,
            category: data.category,
            featured: data.featured,
            published: data.published,
            publishedDate: data.published_date,
            videoUrl: data.video_url,
            createdAt: data.created_at,
            updatedAt: data.updated_at
          });
        }
      } catch (err) {
        console.error('Error fetching testimonial:', err);
        setError(err instanceof Error ? err.message : 'Erreur inconnue');
        setTestimonial(null);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchTestimonial();
    }
  }, [id, locale]);

  return { testimonial, loading, error };
};

/**
 * Hook pour créer ou mettre à jour un testimonial
 */
export const useTestimonialMutation = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const createTestimonial = async (testimonialData: Omit<Testimonial, 'id' | 'createdAt'>) => {
    try {
      setLoading(true);
      setError(null);

      const { data, error: supabaseError } = await supabase
        .from('testimonials')
        .insert({
          client_name: testimonialData.clientName,
          client_position: testimonialData.clientPosition,
          client_company: testimonialData.clientCompany,
          client_location: testimonialData.clientLocation,
          client_photo: testimonialData.clientPhoto,
          testimonial_fr: testimonialData.testimonialFr,
          testimonial_en: testimonialData.testimonialEn,
          rating: testimonialData.rating,
          project: testimonialData.project,
          project_id: testimonialData.projectId,
          category: testimonialData.category,
          featured: testimonialData.featured,
          published: testimonialData.published,
          published_date: testimonialData.publishedDate,
          video_url: testimonialData.videoUrl
        })
        .select()
        .single();

      if (supabaseError) {
        throw new Error(`Erreur lors de la création du testimonial: ${supabaseError.message}`);
      }

      return { success: true, data };
    } catch (err) {
      console.error('Error creating testimonial:', err);
      const errorMessage = err instanceof Error ? err.message : 'Erreur inconnue';
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  };

  const updateTestimonial = async (id: string, testimonialData: Partial<Testimonial>) => {
    try {
      setLoading(true);
      setError(null);

      const { data, error: supabaseError } = await supabase
        .from('testimonials')
        .update({
          client_name: testimonialData.clientName,
          client_position: testimonialData.clientPosition,
          client_company: testimonialData.clientCompany,
          client_location: testimonialData.clientLocation,
          client_photo: testimonialData.clientPhoto,
          testimonial_fr: testimonialData.testimonialFr,
          testimonial_en: testimonialData.testimonialEn,
          rating: testimonialData.rating,
          project: testimonialData.project,
          project_id: testimonialData.projectId,
          category: testimonialData.category,
          featured: testimonialData.featured,
          published: testimonialData.published,
          published_date: testimonialData.publishedDate,
          video_url: testimonialData.videoUrl,
          updated_at: new Date().toISOString()
        })
        .eq('id', id)
        .select()
        .single();

      if (supabaseError) {
        throw new Error(`Erreur lors de la mise à jour du testimonial: ${supabaseError.message}`);
      }

      return { success: true, data };
    } catch (err) {
      console.error('Error updating testimonial:', err);
      const errorMessage = err instanceof Error ? err.message : 'Erreur inconnue';
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  };

  const deleteTestimonial = async (id: string) => {
    try {
      setLoading(true);
      setError(null);

      const { error: supabaseError } = await supabase
        .from('testimonials')
        .delete()
        .eq('id', id);

      if (supabaseError) {
        throw new Error(`Erreur lors de la suppression du testimonial: ${supabaseError.message}`);
      }

      return { success: true };
    } catch (err) {
      console.error('Error deleting testimonial:', err);
      const errorMessage = err instanceof Error ? err.message : 'Erreur inconnue';
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  };

  return { createTestimonial, updateTestimonial, deleteTestimonial, loading, error };
};