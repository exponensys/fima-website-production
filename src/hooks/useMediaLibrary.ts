import { useState, useEffect } from 'react';
import { projectId, publicAnonKey } from '../utils/supabase/info';

export interface MediaItem {
  id: string;
  title: string;
  alt_text: string;
  url: string;
  file_name: string;
  file_size: number;
  file_type: string;
  storage_path: string;
  tags: string[];
  category: string;
  created_at: string;
  updated_at: string;
}

interface UseMediaLibraryReturn {
  media: MediaItem[];
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

export function useMediaLibrary(): UseMediaLibraryReturn {
  const [media, setMedia] = useState<MediaItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchMedia = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-98c6ec1c/api/media`,
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
        setMedia(result.data);
      } else {
        throw new Error(result.error || 'Failed to fetch media');
      }
    } catch (err) {
      console.error('Error fetching media:', err);
      setError(err instanceof Error ? err.message : 'An error occurred');
      setMedia([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMedia();
  }, []);

  return { media, loading, error, refetch: fetchMedia };
}
