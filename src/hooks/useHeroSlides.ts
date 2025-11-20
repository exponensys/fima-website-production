import { useState, useEffect } from 'react';
import { projectId, publicAnonKey } from '../utils/supabase/info';
import { useLanguage } from './useLanguage';

interface HeroSlideTranslation {
  title: string;
  subtitle: string;
  description: string;
  cta_primary: string;
  badge: string;
}

export interface HeroSlide {
  id: string;
  sort_order: number;
  background_image_url: string;
  is_video: boolean;
  video_url?: string;
  slide_duration: number;
  video_play_duration?: number;
  video_loop: boolean;
  is_active: boolean;
  cta_bg_color?: string;
  cta_text_color?: string;
  translation: HeroSlideTranslation;
  translations?: {
    fr: HeroSlideTranslation;
    en: HeroSlideTranslation;
  };
}

interface UseHeroSlidesReturn {
  slides: HeroSlide[];
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

export function useHeroSlides(): UseHeroSlidesReturn {
  const [slides, setSlides] = useState<HeroSlide[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { currentLanguage } = useLanguage();

  const fetchSlides = async () => {
      try {
        setLoading(true);
        setError(null);

        const locale = currentLanguage === 'en' ? 'en' : 'fr';
        const response = await fetch(
          `https://${projectId}.supabase.co/functions/v1/make-server-98c6ec1c/api/hero-slides?locale=${locale}`,
          {
            headers: {
              'Authorization': `Bearer ${publicAnonKey}`,
              'Content-Type': 'application/json',
            },
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();

        if (result.success && result.data) {
          setSlides(result.data);
        } else {
          throw new Error(result.error || 'Failed to fetch hero slides');
        }
      } catch (err) {
        // Log silencieux pour "Failed to fetch" (serveur non accessible)
        const errorMessage = err instanceof Error ? err.message : 'An error occurred';
        if (errorMessage.includes('Failed to fetch')) {
          console.log('ℹ️ Hero slides backend not available, using fallback slides');
        } else {
          console.error('Error fetching hero slides:', err);
        }
        setError(errorMessage);
        
        // Fallback vers un slide par défaut en cas d'erreur
        setSlides([{
          id: 'fallback-1',
          sort_order: 1,
          background_image_url: 'https://images.unsplash.com/photo-1718939045285-b67f9e9f9f8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiZWRyb29tJTIwZGVzaWduJTIwY29tZm9ydGFibGV8ZW58MXx8fHwxNzU4MTA2MzMxfDA&ixlib=rb-4.1.0&q=80&w=1080',
          is_video: false,
          slide_duration: 5000,
          video_loop: true,
          is_active: true,
          cta_bg_color: '#FFFFFF',
          cta_text_color: '#B5C233',
          translation: {
            title: 'FIMA Couchage',
            subtitle: 'LITERIE PREMIUM',
            description: 'Matelas, sommiers et accessoires.',
            cta_primary: 'Découvrir nos produits',
            badge: '14 NUITS D\'ESSAI'
          }
        }]);
      } finally {
        setLoading(false);
      }
    };

  useEffect(() => {
    fetchSlides();
  }, [currentLanguage]);

  return { slides, loading, error, refetch: fetchSlides };
}