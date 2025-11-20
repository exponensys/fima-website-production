import { useState, useEffect } from 'react';
import { projectId, publicAnonKey } from '../utils/supabase/info';

export interface CMSCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  parent_id: string | null;
  color: string;
  icon_emoji: string;
  order_index: number;
  is_active: boolean;
  business_unit: 'couchage' | 'design' | 'univers-glass' | 'all';
  images?: string[]; // URLs des images de la catégorie
  thumbnail?: string; // Image principale/miniature
}

export function useCMSCategories() {
  const [categories, setCategories] = useState<CMSCategory[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchCategories = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-98c6ec1c/categories`,
        {
          headers: {
            'Authorization': `Bearer ${publicAnonKey}`,
            'Content-Type': 'application/json'
          }
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      
      if (result.success && result.data) {
        setCategories(result.data);
        setError(null);
      } else {
        setCategories([]);
      }
    } catch (err) {
      console.error('Erreur lors du chargement des catégories:', err);
      setError(err instanceof Error ? err.message : 'Erreur inconnue');
      setCategories([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return { 
    categories, 
    loading, 
    error,
    refetch: fetchCategories 
  };
}