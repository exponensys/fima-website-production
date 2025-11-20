import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { projectId, publicAnonKey } from '../utils/supabase/info';
import { Quote, ExpertConsultation, LanguageCode } from '../types/supabase';

const supabase = createClient(
  `https://${projectId}.supabase.co`,
  publicAnonKey
);

/**
 * Hook pour créer une demande de devis
 */
export const useCreateQuote = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const createQuote = async (quoteData: {
    business_unit_slug: string;
    estimated_budget?: number;
    contact_preferences: Record<string, any>;
    locale: LanguageCode;
    translations: {
      fr?: { project_type: string; requirements: string };
      en?: { project_type: string; requirements: string };
    };
  }) => {
    try {
      setLoading(true);
      setError(null);

      // 1. Récupérer l'utilisateur connecté
      const { data: { user }, error: authError } = await supabase.auth.getUser();
      
      if (authError || !user) {
        throw new Error('Vous devez être connecté pour créer une demande de devis');
      }

      // 2. Récupérer l'ID de l'unité métier
      const { data: businessUnit, error: businessUnitError } = await supabase
        .from('business_units')
        .select('id')
        .eq('slug', quoteData.business_unit_slug)
        .single();

      if (businessUnitError || !businessUnit) {
        throw new Error('Unité métier invalide');
      }

      // 3. Créer la demande de devis principale
      const { data: quote, error: quoteError } = await supabase
        .from('quotes')
        .insert({
          user_id: user.id,
          business_unit_id: businessUnit.id,
          estimated_budget: quoteData.estimated_budget,
          contact_preferences: quoteData.contact_preferences,
          preferred_language: quoteData.locale,
          status: 'pending'
        })
        .select()
        .single();

      if (quoteError || !quote) {
        throw quoteError || new Error('Erreur lors de la création du devis');
      }

      // 4. Insérer les traductions
      const translations = Object.entries(quoteData.translations)
        .filter(([_, data]) => data)
        .map(([lang, data]) => ({
          quote_id: quote.id,
          locale: lang as LanguageCode,
          project_type: data!.project_type,
          requirements: data!.requirements
        }));

      if (translations.length > 0) {
        const { error: translationsError } = await supabase
          .from('quotes_i18n')
          .insert(translations);

        if (translationsError) {
          console.error('Erreur lors de l\'insertion des traductions:', translationsError);
        }
      }

      return { success: true, quoteId: quote.id };
    } catch (err: any) {
      console.error('Erreur lors de la création du devis:', err);
      setError(err.message || 'Erreur lors de la création du devis');
      return { success: false, error: err.message };
    } finally {
      setLoading(false);
    }
  };

  return { createQuote, loading, error };
};

/**
 * Hook pour créer une demande de consultation expert
 */
export const useCreateConsultation = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const createConsultation = async (consultationData: {
    business_unit_slug: string;
    consultation_type: 'expert' | 'appointment';
    preferred_datetime?: string;
    topic: string;
    description: string;
  }) => {
    try {
      setLoading(true);
      setError(null);

      // 1. Récupérer l'utilisateur connecté
      const { data: { user }, error: authError } = await supabase.auth.getUser();
      
      if (authError || !user) {
        throw new Error('Vous devez être connecté pour créer une demande de consultation');
      }

      // 2. Récupérer l'ID de l'unité métier
      const { data: businessUnit, error: businessUnitError } = await supabase
        .from('business_units')
        .select('id')
        .eq('slug', consultationData.business_unit_slug)
        .single();

      if (businessUnitError || !businessUnit) {
        throw new Error('Unité métier invalide');
      }

      // 3. Créer la consultation
      const { data: consultation, error: consultationError } = await supabase
        .from('expert_consultations')
        .insert({
          user_id: user.id,
          business_unit_id: businessUnit.id,
          consultation_type: consultationData.consultation_type,
          preferred_datetime: consultationData.preferred_datetime,
          topic: consultationData.topic,
          description: consultationData.description,
          status: 'pending'
        })
        .select()
        .single();

      if (consultationError || !consultation) {
        throw consultationError || new Error('Erreur lors de la création de la consultation');
      }

      return { success: true, consultationId: consultation.id };
    } catch (err: any) {
      console.error('Erreur lors de la création de la consultation:', err);
      setError(err.message || 'Erreur lors de la création de la consultation');
      return { success: false, error: err.message };
    } finally {
      setLoading(false);
    }
  };

  return { createConsultation, loading, error };
};

/**
 * Hook pour récupérer les devis d'un utilisateur
 */
export const useUserQuotes = (locale: LanguageCode = 'fr') => {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchUserQuotes = async () => {
    try {
      setLoading(true);
      setError(null);

      // Récupérer l'utilisateur connecté
      const { data: { user }, error: authError } = await supabase.auth.getUser();
      
      if (authError || !user) {
        throw new Error('Vous devez être connecté');
      }

      // Récupérer les devis de l'utilisateur
      const { data, error: queryError } = await supabase
        .from('quotes')
        .select(`
          *,
          business_units (
            slug,
            primary_color,
            business_units_i18n!inner (
              locale,
              name,
              description
            )
          ),
          quotes_i18n!inner (
            locale,
            project_type,
            requirements
          )
        `)
        .eq('user_id', user.id)
        .eq('quotes_i18n.locale', locale)
        .eq('business_units.business_units_i18n.locale', locale)
        .order('created_at', { ascending: false });

      if (queryError) {
        throw queryError;
      }

      setQuotes(data || []);
    } catch (err: any) {
      console.error('Erreur lors de la récupération des devis:', err);
      setError(err.message || 'Erreur lors du chargement des devis');
      setQuotes([]);
    } finally {
      setLoading(false);
    }
  };

  // Charger les devis au montage
  useState(() => {
    fetchUserQuotes();
  });

  return { quotes, loading, error, refetch: fetchUserQuotes };
};

/**
 * Hook pour récupérer les consultations d'un utilisateur
 */
export const useUserConsultations = () => {
  const [consultations, setConsultations] = useState<ExpertConsultation[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchUserConsultations = async () => {
    try {
      setLoading(true);
      setError(null);

      // Récupérer l'utilisateur connecté
      const { data: { user }, error: authError } = await supabase.auth.getUser();
      
      if (authError || !user) {
        throw new Error('Vous devez être connecté');
      }

      // Récupérer les consultations de l'utilisateur
      const { data, error: queryError } = await supabase
        .from('expert_consultations')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });

      if (queryError) {
        throw queryError;
      }

      setConsultations(data || []);
    } catch (err: any) {
      console.error('Erreur lors de la récupération des consultations:', err);
      setError(err.message || 'Erreur lors du chargement des consultations');
      setConsultations([]);
    } finally {
      setLoading(false);
    }
  };

  // Charger les consultations au montage
  useState(() => {
    fetchUserConsultations();
  });

  return { consultations, loading, error, refetch: fetchUserConsultations };
};
