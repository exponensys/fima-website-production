import { useState, useEffect } from 'react';
import { projectId, publicAnonKey } from '../utils/supabase/info';

// Types pour la présentation de l'entreprise
export interface CompanyHighlight {
  iconName: string; // 'Building', 'Users', 'Award'
  value: string;
  labelFr: string;
  labelEn: string;
}

export interface CompanyService {
  id: string;
  titleFr: string;
  titleEn: string;
  descriptionFr?: string;
  descriptionEn?: string;
  iconName?: string;
  order: number;
  published: boolean;
}

export interface CompanyTestimonial {
  id: string;
  quoteFr: string;
  quoteEn: string;
  authorName: string;
  authorTitleFr: string;
  authorTitleEn: string;
  companyName: string;
  rating: number;
  clientSince?: string;
  projectsInfo?: string;
  iconEmoji?: string;
  featured: boolean;
  published: boolean;
}

export interface CompanyPresentation {
  id: string;
  taglineFr: string;
  taglineEn: string;
  titleFr: string;
  titleEn: string;
  descriptionFr: string;
  descriptionEn: string;
  highlights: CompanyHighlight[];
  services: CompanyService[];
  testimonials: CompanyTestimonial[];
  imageUrl: string;
  badgeTitleFr: string;
  badgeTitleEn: string;
  badgeSubtitleFr: string;
  badgeSubtitleEn: string;
  statsValue: string; // "1000+"
  statsLabelFr: string;
  statsLabelEn: string;
  ctaB2BTextFr: string;
  ctaB2BTextEn: string;
  ctaB2BUrl: string;
  ctaQuoteTextFr: string;
  ctaQuoteTextEn: string;
  published: boolean;
  createdAt: string;
  updatedAt?: string;
}

const API_BASE_URL = `https://${projectId}.supabase.co/functions/v1/make-server-98c6ec1c`;

/**
 * Hook pour récupérer la présentation de l'entreprise depuis l'API backend
 * @param locale - Langue actuelle ('fr' ou 'en')
 */
// Données par défaut pour fallback
const DEFAULT_COMPANY_PRESENTATION: CompanyPresentation = {
  id: 'company-presentation-main',
  taglineFr: 'Notre entreprise',
  taglineEn: 'Our company',
  titleFr: 'FIMA, leader de la literie professionnelle',
  titleEn: 'FIMA, leader in professional bedding',
  descriptionFr: 'Depuis 40 ans, FIMA accompagne les professionnels de l\'hôtellerie, de la santé et du bien-être avec des solutions de literie sur-mesure. Notre expertise technique et notre service client d\'excellence font de nous le partenaire de référence pour vos projets B2B.',
  descriptionEn: 'For 40 years, FIMA has been supporting hospitality, healthcare and wellness professionals with tailor-made bedding solutions. Our technical expertise and excellent customer service make us the partner of choice for your B2B projects.',
  highlights: [
    {
      iconName: 'Building',
      value: '1985',
      labelFr: 'Année de création',
      labelEn: 'Year of establishment'
    },
    {
      iconName: 'Users',
      value: '50+',
      labelFr: 'Collaborateurs',
      labelEn: 'Employees'
    },
    {
      iconName: 'Award',
      value: 'N°1',
      labelFr: 'Fabricant local',
      labelEn: 'Local manufacturer'
    }
  ],
  services: [
    {
      id: 'service-1',
      titleFr: 'Hôtellerie & Résidences',
      titleEn: 'Hotels & Residences',
      order: 1,
      published: true
    },
    {
      id: 'service-2',
      titleFr: 'Établissements de santé',
      titleEn: 'Healthcare facilities',
      order: 2,
      published: true
    },
    {
      id: 'service-3',
      titleFr: 'Collectivités publiques',
      titleEn: 'Public institutions',
      order: 3,
      published: true
    },
    {
      id: 'service-4',
      titleFr: 'Spas & Centres de bien-être',
      titleEn: 'Spas & Wellness centers',
      order: 4,
      published: true
    }
  ],
  testimonials: [
    {
      id: 'testimonial-1',
      quoteFr: 'FIMA nous accompagne depuis 5 ans dans l\'équipement de nos 12 hôtels. Leur expertise technique et leur service après-vente sont exceptionnels.',
      quoteEn: 'FIMA has been supporting us for 5 years in equipping our 12 hotels. Their technical expertise and after-sales service are exceptional.',
      authorName: 'Marie Dubois',
      authorTitleFr: 'Directrice Achats',
      authorTitleEn: 'Purchasing Director',
      companyName: 'Groupe Hôtelier Étoile',
      rating: 5,
      clientSince: '2019',
      projectsInfo: '500+ chambres équipées',
      iconEmoji: '🏨',
      featured: true,
      published: true
    }
  ],
  imageUrl: 'https://images.unsplash.com/photo-1590650486895-79681b6f26a7?w=1080',
  badgeTitleFr: 'Solutions B2B',
  badgeTitleEn: 'B2B Solutions',
  badgeSubtitleFr: 'Expertise professionnelle',
  badgeSubtitleEn: 'Professional expertise',
  statsValue: '1000+',
  statsLabelFr: 'Projets B2B réalisés',
  statsLabelEn: 'B2B projects completed',
  ctaB2BTextFr: 'Découvrir nos solutions B2B',
  ctaB2BTextEn: 'Discover our B2B solutions',
  ctaB2BUrl: 'https://b2b.fima.fr',
  ctaQuoteTextFr: 'Demander un devis',
  ctaQuoteTextEn: 'Request a quote',
  published: true,
  createdAt: new Date().toISOString()
};

export const useCompanyPresentation = (locale: 'fr' | 'en' = 'fr') => {
  const [companyPresentation, setCompanyPresentation] = useState<CompanyPresentation | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCompanyPresentation = async () => {
      try {
        setLoading(true);
        setError(null);

        try {
          const response = await fetch(`${API_BASE_URL}/company-presentation`, {
            method: 'GET',
            headers: {
              'Authorization': `Bearer ${publicAnonKey}`,
              'Content-Type': 'application/json',
            },
          });

          if (response.ok) {
            const result = await response.json();
            
            if (result.success && result.data) {
              setCompanyPresentation(result.data);
              return;
            }
          }
        } catch (fetchErr) {
          console.log('Backend unavailable, using fallback data:', fetchErr);
        }

        // Utiliser les données par défaut si l'API échoue
        console.log('Using default company presentation data');
        setCompanyPresentation(DEFAULT_COMPANY_PRESENTATION);
      } catch (err) {
        console.error('Error fetching company presentation:', err);
        // Même en cas d'erreur, utiliser les données par défaut
        setCompanyPresentation(DEFAULT_COMPANY_PRESENTATION);
        setError(null); // Ne pas afficher d'erreur car on a les données par défaut
      } finally {
        setLoading(false);
      }
    };

    fetchCompanyPresentation();
  }, [locale]);

  return { companyPresentation, loading, error };
};

/**
 * Hook pour mettre à jour la présentation de l'entreprise
 */
export const useCompanyPresentationMutation = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const updateCompanyPresentation = async (data: Partial<CompanyPresentation>) => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(`${API_BASE_URL}/company-presentation`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${publicAnonKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`Erreur lors de la mise à jour: ${response.statusText}`);
      }

      const result = await response.json();
      
      if (!result.success) {
        throw new Error(result.error || 'Erreur lors de la mise à jour');
      }

      return { success: true, data: result.data };
    } catch (err) {
      console.error('Error updating company presentation:', err);
      const errorMessage = err instanceof Error ? err.message : 'Erreur inconnue';
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  };

  return { updateCompanyPresentation, loading, error };
};