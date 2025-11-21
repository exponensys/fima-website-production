import { useState, useEffect } from 'react';
import { supabase } from '../utils/supabase/client';

// Types pour les blogs basés sur Types.md
export interface Blog {
  id: string;
  titleFr: string;
  titleEn: string;
  slug: string;
  summaryFr: string;
  summaryEn: string;
  contentFr: string;
  contentEn: string;
  author: string;
  category: string;
  tags: string[];
  featuredImage: string;
  published: boolean;
  publishedDate?: string;
  createdAt: string;
  updatedAt?: string;
  readTime: number;
  views?: number;
  likes?: number;
}

/**
 * Hook pour récupérer les blogs depuis l'API backend
 * @param locale - Langue actuelle ('fr' ou 'en')
 * @param category - Catégorie optionnelle pour filtrer
 * @param publishedOnly - Afficher uniquement les articles publiés
 */
export const useBlogs = (locale: 'fr' | 'en' = 'fr', category?: string, publishedOnly: boolean = true) => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      setError(null);

      const { data, error: supabaseError } = await supabase
        .from('blogs')
        .select('*')
        .order('created_at', { ascending: false });

      if (supabaseError) {
        throw new Error(`Erreur lors du chargement des blogs: ${supabaseError.message}`);
      }

      let blogsData: Blog[] = (data || []).map(item => ({
        id: item.id,
        titleFr: item.title_fr || item.titleFr,
        titleEn: item.title_en || item.titleEn,
        slug: item.slug,
        summaryFr: item.summary_fr || item.summaryFr,
        summaryEn: item.summary_en || item.summaryEn,
        contentFr: item.content_fr || item.contentFr,
        contentEn: item.content_en || item.contentEn,
        author: 'FIMA', // Valeur par défaut car colonne n'existe pas en DB
        category: item.category,
        tags: item.tags || [],
        featuredImage: item.featured_image || item.featuredImage || '',
        published: item.published,
        publishedDate: item.published_date || item.publishedDate,
        createdAt: item.created_at || item.createdAt,
        updatedAt: item.updated_at || item.updatedAt,
        readTime: item.read_time || item.readTime || 5,
        views: item.views || 0,
        likes: item.likes || 0
      }));

      // Filtrer par catégorie si spécifié
      if (category && category !== 'all') {
        blogsData = blogsData.filter(blog => blog.category === category);
      }

      // Filtrer les articles publiés uniquement si demandé
      if (publishedOnly) {
        blogsData = blogsData.filter(blog => blog.published);
      }

      // Trier par date de publication décroissante
      blogsData.sort((a, b) => {
        const dateA = new Date(a.publishedDate || a.createdAt).getTime();
        const dateB = new Date(b.publishedDate || b.createdAt).getTime();
        return dateB - dateA;
      });

      setBlogs(blogsData);
    } catch (err) {
      console.error('Error fetching blogs:', err);
      const errorMessage = err instanceof Error ? err.message : 'Erreur inconnue';
      setError(errorMessage);
      setBlogs([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, [locale, category, publishedOnly]);

  return { blogs, loading, error, refetch: fetchBlogs };
};

/**
 * Hook pour récupérer un blog par son slug
 * @param slug - Slug du blog
 * @param locale - Langue actuelle ('fr' ou 'en')
 */
export const useBlog = (slug: string, locale: 'fr' | 'en' = 'fr') => {
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        setLoading(true);
        setError(null);

        const { data, error: supabaseError } = await supabase
          .from('blogs')
          .select('*')
          .eq('slug', slug)
          .single();

        if (supabaseError) {
          throw new Error(`Blog non trouvé: ${supabaseError.message}`);
        }

        if (data) {
          setBlog({
            id: data.id,
            titleFr: data.title_fr || data.titleFr,
            titleEn: data.title_en || data.titleEn,
            slug: data.slug,
            summaryFr: data.summary_fr || data.summaryFr,
            summaryEn: data.summary_en || data.summaryEn,
            contentFr: data.content_fr || data.contentFr,
            contentEn: data.content_en || data.contentEn,
            author: 'FIMA', // Valeur par défaut car colonne n'existe pas en DB
            category: data.category,
            tags: data.tags || [],
            featuredImage: data.featured_image || data.featuredImage || '',
            published: data.published,
            publishedDate: data.published_date || data.publishedDate,
            createdAt: data.created_at || data.createdAt,
            updatedAt: data.updated_at || data.updatedAt,
            readTime: data.read_time || data.readTime || 5,
            views: data.views || 0,
            likes: data.likes || 0
          });
        }
      } catch (err) {
        console.error('Error fetching blog:', err);
        setError(err instanceof Error ? err.message : 'Erreur inconnue');
        setBlog(null);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchBlog();
    }
  }, [slug, locale]);

  return { blog, loading, error };
};

/**
 * Hook pour créer ou mettre à jour un blog
 */
export const useBlogMutation = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const createBlog = async (blogData: Omit<Blog, 'id' | 'createdAt' | 'views' | 'likes'>) => {
    try {
      setLoading(true);
      setError(null);

      const { data, error: supabaseError } = await supabase
        .from('blogs')
        .insert({
          title_fr: blogData.titleFr,
          title_en: blogData.titleEn,
          slug: blogData.slug,
          summary_fr: blogData.summaryFr,
          summary_en: blogData.summaryEn,
          content_fr: blogData.contentFr,
          content_en: blogData.contentEn,
          category: blogData.category,
          tags: blogData.tags,
          featured_image: blogData.featuredImage,
          published: blogData.published,
          published_date: blogData.publishedDate,
          read_time: blogData.readTime
        })
        .select()
        .single();

      if (supabaseError) {
        throw new Error(`Erreur lors de la création du blog: ${supabaseError.message}`);
      }

      return { success: true, data };
    } catch (err) {
      console.error('Error creating blog:', err);
      const errorMessage = err instanceof Error ? err.message : 'Erreur inconnue';
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  };

  const updateBlog = async (id: string, blogData: Partial<Blog>) => {
    try {
      setLoading(true);
      setError(null);

      const updateData: any = {};
      if (blogData.titleFr) updateData.title_fr = blogData.titleFr;
      if (blogData.titleEn) updateData.title_en = blogData.titleEn;
      if (blogData.slug) updateData.slug = blogData.slug;
      if (blogData.summaryFr) updateData.summary_fr = blogData.summaryFr;
      if (blogData.summaryEn) updateData.summary_en = blogData.summaryEn;
      if (blogData.contentFr) updateData.content_fr = blogData.contentFr;
      if (blogData.contentEn) updateData.content_en = blogData.contentEn;
      // if (blogData.author) updateData.author = blogData.author; // Colonne author n'existe pas
      if (blogData.category) updateData.category = blogData.category;
      if (blogData.tags) updateData.tags = blogData.tags;
      if (blogData.featuredImage !== undefined) updateData.featured_image = blogData.featuredImage;
      if (blogData.published !== undefined) updateData.published = blogData.published;
      if (blogData.publishedDate) updateData.published_date = blogData.publishedDate;
      if (blogData.readTime) updateData.read_time = blogData.readTime;
      updateData.updated_at = new Date().toISOString();

      const { data, error: supabaseError } = await supabase
        .from('blogs')
        .update(updateData)
        .eq('id', id)
        .select()
        .single();

      if (supabaseError) {
        throw new Error(`Erreur lors de la mise à jour du blog: ${supabaseError.message}`);
      }

      return { success: true, data };
    } catch (err) {
      console.error('Error updating blog:', err);
      const errorMessage = err instanceof Error ? err.message : 'Erreur inconnue';
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  };

  const deleteBlog = async (id: string) => {
    try {
      setLoading(true);
      setError(null);

      const { error: supabaseError } = await supabase
        .from('blogs')
        .delete()
        .eq('id', id);

      if (supabaseError) {
        throw new Error(`Erreur lors de la suppression du blog: ${supabaseError.message}`);
      }

      return { success: true };
    } catch (err) {
      console.error('Error deleting blog:', err);
      const errorMessage = err instanceof Error ? err.message : 'Erreur inconnue';
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  };

  return { createBlog, updateBlog, deleteBlog, loading, error };
};