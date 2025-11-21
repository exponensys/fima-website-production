import { useState, useEffect } from 'react';
import { supabase } from '../utils/supabase/client';

// Types pour les testimonials basés sur le schéma DB
export interface Testimonial {
  id: string;
  name: string;
  company: string;
  position: string;
  content_fr: string;
  content_en: string;
  avatar?: string;
  rating: 1 | 2 | 3 | 4 | 5;
  location: string;
  is_featured: boolean;
  is_active: boolean;
  created_at: string;
  updated_at?: string;
}

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
        
        // Filtrer les testimonials actifs seulement si publishedOnly est true
        if (publishedOnly) {
          query = query.eq('is_active', true);
        }
        
        // Ajouter les paramètres de filtrage
        if (featuredOnly) {
          query = query.eq('is_featured', true);
        }
        
        const { data, error: supabaseError } = await query.order('created_at', { ascending: false });

        if (supabaseError) {
          console.error('Testimonials Supabase error:', supabaseError);
          setTestimonials([]);
          setError(`Erreur lors du chargement des témoignages: ${supabaseError.message}`);
          setLoading(false);
          return;
        }

        let testimonialsData: Testimonial[] = data || [];

        // Trier par featured puis par date
        testimonialsData.sort((a, b) => {
          if (a.is_featured && !b.is_featured) return -1;
          if (!a.is_featured && b.is_featured) return 1;
          
          const dateA = new Date(a.created_at).getTime();
          const dateB = new Date(b.created_at).getTime();
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
          setTestimonial(data);
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

  const createTestimonial = async (testimonialData: Omit<Testimonial, 'id' | 'created_at'>) => {
    try {
      setLoading(true);
      setError(null);

      const { error: supabaseError } = await supabase
        .from('testimonials')
        .insert(testimonialData);

      if (supabaseError) {
        throw new Error(`Erreur lors de la création du testimonial: ${supabaseError.message}`);
      }

      return { success: true };
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

      console.log('Updating testimonial:', id, testimonialData);
      
      const { data, error: supabaseError } = await supabase
        .rpc('update_testimonial', {
          testimonial_id: id,
          testimonial_data: testimonialData
        });

      if (supabaseError) {
        // Fallback vers update direct si RPC n'existe pas
        const { data: fallbackData, error: fallbackError } = await supabase
          .from('testimonials')
          .update(testimonialData)
          .eq('id', id)
          .select();
        
        if (fallbackError) {
          throw new Error(`Erreur lors de la mise à jour: ${fallbackError.message}`);
        }
        
        return { success: true, data: fallbackData };
      }

      console.log('Update result:', { data, error: supabaseError, count });

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

      console.log('Deleting testimonial:', id);
      
      const { data, error: supabaseError } = await supabase
        .rpc('delete_testimonial', {
          testimonial_id: id
        });

      if (supabaseError) {
        // Fallback vers delete direct si RPC n'existe pas
        const { data: fallbackData, error: fallbackError } = await supabase
          .from('testimonials')
          .delete()
          .eq('id', id)
          .select();
        
        if (fallbackError) {
          throw new Error(`Erreur lors de la suppression: ${fallbackError.message}`);
        }
        
        return { success: true, data: fallbackData };
      }

      console.log('Delete result:', { data, error: supabaseError, count });

      if (supabaseError) {
        throw new Error(`Erreur lors de la suppression du testimonial: ${supabaseError.message}`);
      }

      return { success: true, data };
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