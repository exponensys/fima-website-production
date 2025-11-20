import { useState, useEffect } from 'react';
import { projectId, publicAnonKey } from '../utils/supabase/info';

export interface ProjectType {
  id: string;
  name: string;
  description: string;
}

export interface BudgetRange {
  id: string;
  name?: string;
  label?: string;
  value?: string;
}

export interface Timeline {
  id: string;
  name?: string;
  label?: string;
  value?: string;
}

export interface ConsultationService {
  id: string;
  name: string;
  icon: string;
  description: string;
}

export interface FormOptions {
  quote_project_types: ProjectType[];
  quote_budget_ranges: BudgetRange[];
  quote_timelines: Timeline[];
  consultation_services: ConsultationService[];
  consultation_budget_ranges: BudgetRange[];
  consultation_timelines: Timeline[];
  appointment_time_slots: string[];
}

// Données de fallback locales
const DEFAULT_OPTIONS: FormOptions = {
  quote_project_types: [
    { id: 'residential', name: 'Projet résidentiel', description: 'Maison, appartement, villa' },
    { id: 'commercial', name: 'Projet commercial', description: 'Bureau, magasin, restaurant' },
    { id: 'hospitality', name: 'Hôtellerie', description: 'Hôtel, résidence, guesthouse' },
    { id: 'institutional', name: 'Institutionnel', description: 'Administration, école, clinique' },
    { id: 'industrial', name: 'Industriel', description: 'Usine, entrepôt, atelier' }
  ],
  quote_budget_ranges: [
    { id: 'under-5m', name: 'Moins de 5M FCFA' },
    { id: '5m-15m', name: '5M - 15M FCFA' },
    { id: '15m-50m', name: '15M - 50M FCFA' },
    { id: '50m-100m', name: '50M - 100M FCFA' },
    { id: 'over-100m', name: 'Plus de 100M FCFA' },
    { id: 'to-discuss', name: 'À discuter' }
  ],
  quote_timelines: [
    { id: 'urgent', name: 'Urgent (< 1 mois)' },
    { id: '1-3months', name: '1 à 3 mois' },
    { id: '3-6months', name: '3 à 6 mois' },
    { id: '6-12months', name: '6 à 12 mois' },
    { id: 'flexible', name: 'Flexible' }
  ],
  consultation_services: [
    { id: 'literie', name: 'Literie & Couchage', icon: '🛏️', description: 'Matelas, sommiers, oreillers' },
    { id: 'menuiserie', name: 'Menuiserie & Design', icon: '🪚', description: 'Mobilier sur-mesure, cuisines' },
    { id: 'vitrerie', name: 'Vitrerie & Aluminium', icon: '🏢', description: 'Façades, baies vitrées' },
    { id: 'b2b', name: 'Solutions B2B', icon: '🏗️', description: 'Projets professionnels' },
    { id: 'autre', name: 'Autre projet', icon: '💡', description: 'Besoin spécifique' }
  ],
  consultation_budget_ranges: [
    { id: 'small', label: 'Moins de 500 000 F CFA', value: '<500k' },
    { id: 'medium', label: '500k - 2M F CFA', value: '500k-2M' },
    { id: 'large', label: '2M - 10M F CFA', value: '2M-10M' },
    { id: 'enterprise', label: 'Plus de 10M F CFA', value: '10M+' },
    { id: 'discuss', label: 'À discuter', value: 'discuss' }
  ],
  consultation_timelines: [
    { id: 'urgent', label: 'Urgent (< 1 mois)', value: 'urgent' },
    { id: 'short', label: '1-3 mois', value: '1-3months' },
    { id: 'medium', label: '3-6 mois', value: '3-6months' },
    { id: 'long', label: '6+ mois', value: '6months+' },
    { id: 'flexible', label: 'Flexible', value: 'flexible' }
  ],
  appointment_time_slots: [
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '14:00', '14:30', '15:00', '15:30', '16:00', '16:30'
  ]
};

export const useFormOptions = (category?: keyof FormOptions) => {
  const [options, setOptions] = useState<any>(
    category ? DEFAULT_OPTIONS[category] : DEFAULT_OPTIONS
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchOptions = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const url = category
          ? `https://${projectId}.supabase.co/functions/v1/make-server-98c6ec1c/form-options?category=${category}`
          : `https://${projectId}.supabase.co/functions/v1/make-server-98c6ec1c/form-options`;
        
        const response = await fetch(url, {
          headers: {
            'Authorization': `Bearer ${publicAnonKey}`,
            'Content-Type': 'application/json'
          }
        });

        if (!response.ok) {
          throw new Error('Failed to fetch form options');
        }

        const result = await response.json();

        if (result.success) {
          if (category) {
            setOptions(result.data || DEFAULT_OPTIONS[category]);
          } else {
            setOptions(result.data || DEFAULT_OPTIONS);
          }
          setError(null);
        } else {
          throw new Error(result.error || 'Unknown error');
        }
      } catch (err) {
        console.error('Error fetching form options:', err);
        setError(err instanceof Error ? err.message : 'Unknown error');
        // Fallback vers les données locales en cas d'erreur
        if (category) {
          setOptions(DEFAULT_OPTIONS[category]);
        } else {
          setOptions(DEFAULT_OPTIONS);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchOptions();
  }, [category]);

  return { options, loading, error };
};

// Hooks spécialisés pour chaque catégorie
export const useQuoteProjectTypes = () => {
  const { options, loading, error } = useFormOptions('quote_project_types');
  return { projectTypes: options as ProjectType[], loading, error };
};

export const useQuoteBudgetRanges = () => {
  const { options, loading, error } = useFormOptions('quote_budget_ranges');
  return { budgetRanges: options as BudgetRange[], loading, error };
};

export const useQuoteTimelines = () => {
  const { options, loading, error } = useFormOptions('quote_timelines');
  return { timelines: options as Timeline[], loading, error };
};

export const useConsultationServices = () => {
  const { options, loading, error } = useFormOptions('consultation_services');
  return { services: options as ConsultationService[], loading, error };
};

export const useConsultationBudgetRanges = () => {
  const { options, loading, error } = useFormOptions('consultation_budget_ranges');
  return { budgetRanges: options as BudgetRange[], loading, error };
};

export const useConsultationTimelines = () => {
  const { options, loading, error } = useFormOptions('consultation_timelines');
  return { timelines: options as Timeline[], loading, error };
};

export const useAppointmentTimeSlots = () => {
  const { options, loading, error } = useFormOptions('appointment_time_slots');
  return { timeSlots: options as string[], loading, error };
};