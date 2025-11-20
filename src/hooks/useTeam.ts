import { useState, useEffect } from 'react';
import { projectId, publicAnonKey } from '../utils/supabase/info';

// Types pour les membres de l'équipe
export interface TeamMember {
  id: string;
  nameFr: string;
  nameEn: string;
  positionFr: string;
  positionEn: string;
  descriptionFr: string;
  descriptionEn: string;
  image: string;
  departmentFr: string;
  departmentEn: string;
  email?: string;
  phone?: string;
  linkedIn?: string;
  order: number;
  active: boolean;
  featured: boolean;
  createdAt: string;
  updatedAt?: string;
}

const API_BASE_URL = `https://${projectId}.supabase.co/functions/v1/make-server-98c6ec1c`;

// Données par défaut pour fallback
const DEFAULT_TEAM_MEMBERS: TeamMember[] = [
  {
    id: '750e8400-e29b-41d4-a716-446655440001',
    nameFr: 'Marie Dubois',
    nameEn: 'Marie Dubois',
    positionFr: 'Directrice Générale',
    positionEn: 'General Manager',
    descriptionFr: '25 ans d\'expérience dans l\'industrie du mobilier et de l\'ameublement',
    descriptionEn: '25 years of experience in the furniture and furnishing industry',
    image: 'https://images.unsplash.com/photo-1754298949882-216a1c92dbb5?w=1080',
    departmentFr: 'Direction',
    departmentEn: 'Management',
    email: 'marie.dubois@fima.fr',
    order: 1,
    active: true,
    featured: true,
    createdAt: '2024-01-01T00:00:00.000Z'
  },
  {
    id: '750e8400-e29b-41d4-a716-446655440002',
    nameFr: 'Jean-Pierre Martin',
    nameEn: 'Jean-Pierre Martin',
    positionFr: 'Responsable Commercial',
    positionEn: 'Sales Manager',
    descriptionFr: 'Expert en solutions B2B pour l\'hôtellerie et les collectivités',
    descriptionEn: 'Expert in B2B solutions for hospitality and public institutions',
    image: 'https://images.unsplash.com/photo-1629507208649-70919ca33793?w=1080',
    departmentFr: 'Commercial',
    departmentEn: 'Sales',
    email: 'jp.martin@fima.fr',
    order: 2,
    active: true,
    featured: true,
    createdAt: '2024-01-01T00:00:00.000Z'
  },
  {
    id: '750e8400-e29b-41d4-a716-446655440003',
    nameFr: 'Sophie Laurent',
    nameEn: 'Sophie Laurent',
    positionFr: 'Responsable Design',
    positionEn: 'Design Manager',
    descriptionFr: 'Créatrice des collections FIMA Design et experte en menuiserie',
    descriptionEn: 'Creator of FIMA Design collections and carpentry expert',
    image: 'https://images.unsplash.com/photo-1754298949882-216a1c92dbb5?w=1080',
    departmentFr: 'Design',
    departmentEn: 'Design',
    email: 'sophie.laurent@fima.fr',
    order: 3,
    active: true,
    featured: false,
    createdAt: '2024-01-01T00:00:00.000Z'
  },
  {
    id: '750e8400-e29b-41d4-a716-446655440004',
    nameFr: 'Thomas Moreau',
    nameEn: 'Thomas Moreau',
    positionFr: 'Chef d\'atelier',
    positionEn: 'Workshop Manager',
    descriptionFr: '20 ans d\'expertise en fabrication et contrôle qualité',
    descriptionEn: '20 years of expertise in manufacturing and quality control',
    image: 'https://images.unsplash.com/photo-1629507208649-70919ca33793?w=1080',
    departmentFr: 'Production',
    departmentEn: 'Production',
    email: 'thomas.moreau@fima.fr',
    order: 4,
    active: true,
    featured: false,
    createdAt: '2024-01-01T00:00:00.000Z'
  }
];

/**
 * Hook pour récupérer les membres de l'équipe depuis l'API backend
 * @param locale - Langue actuelle ('fr' ou 'en')
 * @param activeOnly - Afficher uniquement les membres actifs
 */
export const useTeam = (
  locale: 'fr' | 'en' = 'fr',
  activeOnly: boolean = true
) => {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        setLoading(true);
        setError(null);

        try {
          const response = await fetch(`${API_BASE_URL}/team`, {
            method: 'GET',
            headers: {
              'Authorization': `Bearer ${publicAnonKey}`,
              'Content-Type': 'application/json',
            },
          });

          if (response.ok) {
            const result = await response.json();
            
            if (result.success && result.data && result.data.length > 0) {
              let membersData: TeamMember[] = result.data;

              // Filtrer les membres actifs si demandé
              if (activeOnly) {
                membersData = membersData.filter(m => m.active);
              }

              // Trier par ordre personnalisé
              membersData.sort((a, b) => a.order - b.order);

              setTeamMembers(membersData);
              return;
            }
          }
        } catch (fetchErr) {
          console.log('Backend unavailable, using fallback data:', fetchErr);
        }

        // Utiliser les données par défaut si l'API échoue
        console.log('Using default team members data');
        let membersData = [...DEFAULT_TEAM_MEMBERS];

        // Filtrer les membres actifs si demandé
        if (activeOnly) {
          membersData = membersData.filter(m => m.active);
        }

        // Trier par ordre personnalisé
        membersData.sort((a, b) => a.order - b.order);

        setTeamMembers(membersData);
      } catch (err) {
        console.error('Error fetching team members:', err);
        // Même en cas d'erreur, utiliser les données par défaut
        let membersData = [...DEFAULT_TEAM_MEMBERS];
        if (activeOnly) {
          membersData = membersData.filter(m => m.active);
        }
        membersData.sort((a, b) => a.order - b.order);
        setTeamMembers(membersData);
        setError(null); // Ne pas afficher d'erreur car on a les données par défaut
      } finally {
        setLoading(false);
      }
    };

    fetchTeamMembers();
  }, [locale, activeOnly]);

  return { teamMembers, loading, error };
};

/**
 * Hook pour récupérer un membre de l'équipe par son ID
 * @param id - ID du membre
 * @param locale - Langue actuelle ('fr' ou 'en')
 */
export const useTeamMember = (id: string, locale: 'fr' | 'en' = 'fr') => {
  const [teamMember, setTeamMember] = useState<TeamMember | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTeamMember = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(`${API_BASE_URL}/team/${id}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${publicAnonKey}`,
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error(`Erreur lors du chargement du membre: ${response.statusText}`);
        }

        const result = await response.json();
        
        if (!result.success) {
          throw new Error(result.error || 'Membre non trouvé');
        }

        setTeamMember(result.data);
      } catch (err) {
        console.error('Error fetching team member:', err);
        setError(err instanceof Error ? err.message : 'Erreur inconnue');
        setTeamMember(null);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchTeamMember();
    }
  }, [id, locale]);

  return { teamMember, loading, error };
};

/**
 * Hook pour créer ou mettre à jour un membre de l'équipe
 */
export const useTeamMutation = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const createTeamMember = async (memberData: Omit<TeamMember, 'id' | 'createdAt'>) => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(`${API_BASE_URL}/team`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${publicAnonKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(memberData),
      });

      if (!response.ok) {
        throw new Error(`Erreur lors de la création du membre: ${response.statusText}`);
      }

      const result = await response.json();
      
      if (!result.success) {
        throw new Error(result.error || 'Erreur lors de la création du membre');
      }

      return { success: true, data: result.data };
    } catch (err) {
      console.error('Error creating team member:', err);
      const errorMessage = err instanceof Error ? err.message : 'Erreur inconnue';
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  };

  const updateTeamMember = async (id: string, memberData: Partial<TeamMember>) => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(`${API_BASE_URL}/team/${id}`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${publicAnonKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(memberData),
      });

      if (!response.ok) {
        throw new Error(`Erreur lors de la mise à jour du membre: ${response.statusText}`);
      }

      const result = await response.json();
      
      if (!result.success) {
        throw new Error(result.error || 'Erreur lors de la mise à jour du membre');
      }

      return { success: true, data: result.data };
    } catch (err) {
      console.error('Error updating team member:', err);
      const errorMessage = err instanceof Error ? err.message : 'Erreur inconnue';
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  };

  const deleteTeamMember = async (id: string) => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(`${API_BASE_URL}/team/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${publicAnonKey}`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`Erreur lors de la suppression du membre: ${response.statusText}`);
      }

      const result = await response.json();
      
      if (!result.success) {
        throw new Error(result.error || 'Erreur lors de la suppression du membre');
      }

      return { success: true };
    } catch (err) {
      console.error('Error deleting team member:', err);
      const errorMessage = err instanceof Error ? err.message : 'Erreur inconnue';
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  };

  return { createTeamMember, updateTeamMember, deleteTeamMember, loading, error };
};