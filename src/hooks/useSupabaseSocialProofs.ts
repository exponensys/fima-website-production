import { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import { projectId, publicAnonKey } from '../utils/supabase/info';
import { 
  SocialProofWithTranslation, 
  SocialProofFilters,
  LanguageCode 
} from '../types/supabase';

const supabase = createClient(
  `https://${projectId}.supabase.co`,
  publicAnonKey
);

/**
 * Hook pour récupérer les preuves sociales depuis Supabase avec traductions
 */
export const useSupabaseSocialProofs = (filters?: SocialProofFilters) => {
  const [socialProofs, setSocialProofs] = useState<SocialProofWithTranslation[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSocialProofs = async () => {
      try {
        setLoading(true);
        setError(null);

        const locale = filters?.locale || 'fr';
        
        // Construire la requête de base
        let query = supabase
          .from('social_proofs')
          .select(`
            *,
            business_units (
              id,
              slug,
              primary_color,
              icon_name,
              business_units_i18n!inner (
                locale,
                name,
                description
              )
            ),
            social_proofs_i18n!inner (
              locale,
              content
            )
          `)
          .eq('social_proofs_i18n.locale', locale);

        // Si business_unit est présent, ajouter le filtre sur les traductions
        if (filters?.businessUnit) {
          query = query
            .not('business_units', 'is', null)
            .eq('business_units.slug', filters.businessUnit)
            .eq('business_units.business_units_i18n.locale', locale);
        }

        // Appliquer les autres filtres
        if (filters?.type) {
          query = query.eq('type', filters.type);
        }

        if (filters?.location) {
          query = query.ilike('client_location', `%${filters.location}%`);
        }

        if (filters?.featuredOnly) {
          query = query.eq('is_featured', true);
        }

        // Trier par date de création (plus récents en premier)
        query = query.order('created_at', { ascending: false }).limit(12);

        // Exécuter la requête
        const { data, error: queryError } = await query;

        if (queryError) {
          throw queryError;
        }

        // Transformer les données
        const transformedProofs: SocialProofWithTranslation[] = (data || []).map((item: any) => {
          const proofI18n = Array.isArray(item.social_proofs_i18n) 
            ? item.social_proofs_i18n[0] 
            : item.social_proofs_i18n;
          
          const businessUnitI18n = item.business_units?.business_units_i18n?.[0] || 
                                    item.business_units?.business_units_i18n;

          return {
            id: item.id,
            type: item.type,
            business_unit_id: item.business_unit_id,
            client_name: item.client_name,
            client_location: item.client_location,
            rating: item.rating,
            project_value: item.project_value,
            completion_date: item.completion_date,
            images: item.images || [],
            is_featured: item.is_featured,
            created_at: item.created_at,
            translation: {
              id: proofI18n?.id || '',
              social_proof_id: item.id,
              locale: proofI18n?.locale || locale,
              content: proofI18n?.content || ''
            },
            business_unit: item.business_units ? {
              id: item.business_units.id,
              slug: item.business_units.slug,
              primary_color: item.business_units.primary_color,
              icon_name: item.business_units.icon_name,
              created_at: item.business_units.created_at,
              translation: {
                id: businessUnitI18n?.id || '',
                business_unit_id: item.business_units.id,
                locale: businessUnitI18n?.locale || locale,
                name: businessUnitI18n?.name || '',
                description: businessUnitI18n?.description || ''
              }
            } : undefined
          };
        });

        setSocialProofs(transformedProofs);
      } catch (err: any) {
        console.error('Erreur lors de la récupération des preuves sociales:', err);
        setError(err.message || 'Erreur lors du chargement des preuves sociales');
        setSocialProofs([]);
      } finally {
        setLoading(false);
      }
    };

    fetchSocialProofs();
  }, [
    filters?.businessUnit,
    filters?.type,
    filters?.location,
    filters?.featuredOnly,
    filters?.locale
  ]);

  return { socialProofs, loading, error };
};

/**
 * Hook pour récupérer uniquement les témoignages (type = 'testimonial')
 */
export const useSupabaseTestimonials = (locale: LanguageCode = 'fr', featuredOnly: boolean = false) => {
  return useSupabaseSocialProofs({
    type: 'testimonial',
    featuredOnly,
    locale
  });
};

/**
 * Hook pour récupérer uniquement les études de cas (type = 'case_study')
 */
export const useSupabaseCaseStudies = (locale: LanguageCode = 'fr', businessUnit?: string) => {
  return useSupabaseSocialProofs({
    type: 'case_study',
    businessUnit,
    locale
  });
};

/**
 * Hook pour récupérer uniquement les certifications (type = 'certification')
 */
export const useSupabaseCertifications = (locale: LanguageCode = 'fr') => {
  return useSupabaseSocialProofs({
    type: 'certification',
    locale
  });
};
