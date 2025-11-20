import { useState, useEffect } from 'react';
import { projectId, publicAnonKey } from '../utils/supabase/info';

export interface CallToAction {
  id: string;
  title: string;
  description: string;
  button_text: string;
  button_link: string;
  button_style: 'primary' | 'secondary' | 'outline';
  background_color: string;
  text_color: string;
  position: 'hero' | 'footer' | 'sidebar' | 'inline';
  is_active: boolean;
  order_index: number;
  created_at?: string;
  updated_at?: string;
}

// Données de fallback par défaut
const defaultCTAs: CallToAction[] = [
  {
    id: '1',
    title: 'Demandez votre devis gratuit',
    description: 'Nos experts vous répondent en moins de 24h',
    button_text: 'Obtenir un devis',
    button_link: '/quote-request',
    button_style: 'primary',
    background_color: '#B5C233',
    text_color: '#FFFFFF',
    position: 'hero',
    is_active: true,
    order_index: 1,
  },
  {
    id: '2',
    title: 'Consultez nos experts',
    description: 'Un accompagnement personnalisé pour votre projet',
    button_text: 'Prendre rendez-vous',
    button_link: '/expert-consultation',
    button_style: 'secondary',
    background_color: '#E30613',
    text_color: '#FFFFFF',
    position: 'footer',
    is_active: true,
    order_index: 2,
  },
  {
    id: '3',
    title: 'Découvrez nos réalisations',
    description: "Plus de 500 projets réussis en Afrique de l'Ouest",
    button_text: 'Voir les projets',
    button_link: '/all-projects',
    button_style: 'outline',
    background_color: '#FFFFFF',
    text_color: '#000000',
    position: 'inline',
    is_active: true,
    order_index: 3,
  },
];

export function useCallToAction(position?: 'hero' | 'footer' | 'sidebar' | 'inline') {
  const [ctas, setCtas] = useState<CallToAction[]>(defaultCTAs);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchCTAs();
  }, [position]);

  const fetchCTAs = async () => {
    // TEMPORAIREMENT DÉSACTIVÉ - Utilise les données de fallback
    // Pour éviter les erreurs 404 en attendant le déploiement du serveur
    console.log('📣 useCallToAction - Utilisation des données de fallback (API désactivée temporairement)');
    
    // Filtrer par position si spécifiée
    const filteredCTAs = position 
      ? defaultCTAs.filter(cta => cta.position === position && cta.is_active)
      : defaultCTAs.filter(cta => cta.is_active);
    
    setCtas(filteredCTAs.sort((a, b) => a.order_index - b.order_index));
    return;

    /* CODE API À RÉACTIVER PLUS TARD
    try {
      setIsLoading(true);
      setError(null);

      const url = position
        ? `https://${projectId}.supabase.co/functions/v1/make-server-98c6ec1c/call-to-actions?position=${position}`
        : `https://${projectId}.supabase.co/functions/v1/make-server-98c6ec1c/call-to-actions`;

      const response = await fetch(url, {
        headers: {
          Authorization: `Bearer ${publicAnonKey}`,
        },
      });

      if (!response.ok) {
        throw new Error(`Erreur ${response.status}: ${response.statusText}`);
      }

      const data = await response.json();
      
      if (data.success && Array.isArray(data.data)) {
        const activeCTAs = data.data
          .filter((cta: CallToAction) => cta.is_active)
          .sort((a: CallToAction, b: CallToAction) => a.order_index - b.order_index);
        
        setCtas(activeCTAs);
        console.log(`✅ ${activeCTAs.length} CTAs chargés depuis Supabase`);
      } else {
        console.warn('⚠️ Format de réponse inattendu, utilisation du fallback');
        const filteredCTAs = position 
          ? defaultCTAs.filter(cta => cta.position === position && cta.is_active)
          : defaultCTAs.filter(cta => cta.is_active);
        setCtas(filteredCTAs);
      }
    } catch (err) {
      console.warn('⚠️ Erreur lors du chargement des CTAs, utilisation du fallback:', err);
      setError(err instanceof Error ? err.message : 'Erreur inconnue');
      
      const filteredCTAs = position 
        ? defaultCTAs.filter(cta => cta.position === position && cta.is_active)
        : defaultCTAs.filter(cta => cta.is_active);
      setCtas(filteredCTAs);
    } finally {
      setIsLoading(false);
    }
    */
  };

  return {
    ctas,
    isLoading,
    error,
    refetch: fetchCTAs,
  };
}

// Hook spécifique pour obtenir un CTA unique par ID
export function useCallToActionById(id: string) {
  const [cta, setCta] = useState<CallToAction | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;
    fetchCTA();
  }, [id]);

  const fetchCTA = async () => {
    // TEMPORAIREMENT DÉSACTIVÉ - Utilise les données de fallback
    console.log(`📣 useCallToActionById - Utilisation des données de fallback pour CTA ${id}`);
    
    const foundCTA = defaultCTAs.find(c => c.id === id);
    setCta(foundCTA || null);
    return;

    /* CODE API À RÉACTIVER PLUS TARD
    try {
      setIsLoading(true);
      setError(null);

      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-98c6ec1c/call-to-actions/${id}`,
        {
          headers: {
            Authorization: `Bearer ${publicAnonKey}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error(`Erreur ${response.status}: ${response.statusText}`);
      }

      const data = await response.json();
      
      if (data.success && data.data) {
        setCta(data.data);
        console.log('✅ CTA chargé depuis Supabase');
      } else {
        console.warn('⚠️ CTA non trouvé, utilisation du fallback');
        const foundCTA = defaultCTAs.find(c => c.id === id);
        setCta(foundCTA || null);
      }
    } catch (err) {
      console.warn('⚠️ Erreur lors du chargement du CTA, utilisation du fallback:', err);
      setError(err instanceof Error ? err.message : 'Erreur inconnue');
      
      const foundCTA = defaultCTAs.find(c => c.id === id);
      setCta(foundCTA || null);
    } finally {
      setIsLoading(false);
    }
    */
  };

  return {
    cta,
    isLoading,
    error,
    refetch: fetchCTA,
  };
}
