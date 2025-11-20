import { useState, useEffect } from 'react';
import { projectId, publicAnonKey } from '../utils/supabase/info';

export interface BusinessUnit {
  id: string;
  slug: string;
  name: string;
  name_fr?: string;
  name_en?: string;
  description: string;
  description_fr?: string;
  description_en?: string;
  icon: string;
  primary_color: string;
  order_index?: number;
  is_active?: boolean;
}

// Données de fallback locales
const DEFAULT_BUSINESS_UNITS: BusinessUnit[] = [
  {
    id: 'fima-couchage',
    slug: 'fima-couchage',
    name: 'FIMA Couchage',
    name_fr: 'FIMA Couchage',
    name_en: 'FIMA Bedding',
    description: 'Solutions complètes pour literie professionnelle et particuliers',
    description_fr: 'Solutions complètes pour literie professionnelle et particuliers',
    description_en: 'Complete solutions for professional and residential bedding',
    icon: 'Bed',
    primary_color: '#B5C233',
    order_index: 1,
    is_active: true
  },
  {
    id: 'fima-design',
    slug: 'fima-design',
    name: 'FIMA Design',
    name_fr: 'FIMA Design',
    name_en: 'FIMA Design',
    description: 'Menuiserie et ameublement sur mesure',
    description_fr: 'Menuiserie et ameublement sur mesure',
    description_en: 'Custom carpentry and furniture',
    icon: 'Armchair',
    primary_color: '#6E6E6E',
    order_index: 2,
    is_active: true
  },
  {
    id: 'univers-glass',
    slug: 'univers-glass',
    name: 'UNIVERS GLASS',
    name_fr: 'UNIVERS GLASS',
    name_en: 'UNIVERS GLASS',
    description: 'Vitrerie et menuiserie aluminium',
    description_fr: 'Vitrerie et menuiserie aluminium',
    description_en: 'Glazing and aluminum carpentry',
    icon: 'Building2',
    primary_color: '#0EA5E9',
    order_index: 3,
    is_active: true
  }
];

/**
 * Hook pour récupérer les unités métier depuis l'API Supabase (KV Store)
 * 
 * ⚠️ MODE TEMPORAIRE: API désactivée pour éviter les erreurs 404
 * 📝 Pour réactiver l'API après redéploiement du serveur:
 *    1. Redéployez: supabase functions deploy server
 *    2. Décommentez le code dans fetchBusinessUnits()
 *    3. Commentez la ligne setBusinessUnits(DEFAULT_BUSINESS_UNITS)
 */
export const useSupabaseBusinessUnits = () => {
  const [businessUnits, setBusinessUnits] = useState<BusinessUnit[]>(DEFAULT_BUSINESS_UNITS);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBusinessUnits = async () => {
      try {
        // ⚠️ API TEMPORAIREMENT DÉSACTIVÉE - Utilisation des données locales uniquement
        // Pour éviter l'erreur 404 jusqu'au redéploiement du serveur
        console.log('🏢 Business Units: Mode local (API désactivée)');
        console.log('💡 Pour activer l\'API: redéployez avec "supabase functions deploy server"');
        
        // Utiliser directement les données de fallback
        setBusinessUnits(DEFAULT_BUSINESS_UNITS);
        setError(null);
        setLoading(false);
        
        /* 
        ==========================================
        CODE API À DÉCOMMENTER APRÈS REDÉPLOIEMENT
        ==========================================
        
        console.log('🏢 useSupabaseBusinessUnits: Récupération depuis l\'API...');
        
        const response = await fetch(
          `https://${projectId}.supabase.co/functions/v1/make-server-98c6ec1c/business-units`,
          {
            headers: {
              'Authorization': `Bearer ${publicAnonKey}`,
              'Content-Type': 'application/json',
            },
          }
        );

        if (!response.ok) {
          if (response.status === 404) {
            console.warn('⚠️ Route /business-units retourne 404');
            console.log('💡 SOLUTION: Redéployez le serveur Supabase avec: supabase functions deploy server');
            console.log('📦 Utilisation des données de fallback en attendant');
          }
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        
        if (result.success && result.data && result.data.length > 0) {
          console.log('✅ Business Units récupérés depuis Supabase:', result.data);
          
          const sortedUnits = result.data.sort((a: BusinessUnit, b: BusinessUnit) => {
            return (a.order_index || 0) - (b.order_index || 0);
          });
          
          const activeUnits = sortedUnits.filter((unit: BusinessUnit) => unit.is_active !== false);
          
          setBusinessUnits(activeUnits);
          setError(null);
        } else {
          console.log('⚠️ Aucune business unit Supabase, utilisation des données locales');
          setBusinessUnits(DEFAULT_BUSINESS_UNITS);
          setError(null);
        }
        
        ==========================================
        FIN DU CODE À DÉCOMMENTER
        ==========================================
        */
        
      } catch (err) {
        console.error('❌ Erreur API Business Units:', err instanceof Error ? err.message : 'Erreur inconnue');
        setBusinessUnits(DEFAULT_BUSINESS_UNITS);
        setError(null);
      } finally {
        setLoading(false);
      }
    };

    fetchBusinessUnits();
  }, []);

  return { businessUnits, loading, error };
};