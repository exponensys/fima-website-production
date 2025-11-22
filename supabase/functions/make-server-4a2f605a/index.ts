import { serve } from "https://deno.land/std@0.200.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
import * as kv from './kv_store.tsx'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const url = new URL(req.url)
    const path = url.pathname.replace('/make-server-4a2f605a', '')

    // Routes pour les blogs
    if (path.startsWith('/blogs')) {
      return await handleBlogRoutes(req, path)
    }

    // Routes pour les hero slides
    if (path.startsWith('/api/init-hero-slides') || path.startsWith('/api/hero-slides')) {
      return await handleHeroSlidesRoutes(req, path, url)
    }

    return new Response(
      JSON.stringify({ error: 'Not found' }),
      { status: 404, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  }
})

async function handleBlogRoutes(req: Request, path: string) {
  const method = req.method
  
  // GET /blogs - Récupérer tous les blogs
  if (path === '/blogs' && method === 'GET') {
    try {
      const blogs = await kv.get('blogs') || []
      return new Response(
        JSON.stringify({ success: true, data: blogs }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    } catch (error) {
      return new Response(
        JSON.stringify({ success: false, error: error.message }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }
  }

  // POST /blogs - Créer un nouveau blog
  if (path === '/blogs' && method === 'POST') {
    try {
      const blogData = await req.json()
      const blogs = await kv.get('blogs') || []
      
      const newBlog = {
        ...blogData,
        id: Date.now().toString(),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      }
      
      blogs.push(newBlog)
      await kv.set('blogs', blogs)
      
      return new Response(
        JSON.stringify({ success: true, data: newBlog }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    } catch (error) {
      return new Response(
        JSON.stringify({ success: false, error: error.message }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }
  }

  // GET /blogs/{slug} - Récupérer un blog par slug
  const slugMatch = path.match(/^\/blogs\/(.+)$/)
  if (slugMatch && method === 'GET') {
    try {
      const slug = slugMatch[1]
      const blogs = await kv.get('blogs') || []
      const blog = blogs.find((b: any) => b.slug === slug)
      
      if (!blog) {
        return new Response(
          JSON.stringify({ success: false, error: 'Blog not found' }),
          { status: 404, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        )
      }
      
      return new Response(
        JSON.stringify({ success: true, data: blog }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    } catch (error) {
      return new Response(
        JSON.stringify({ success: false, error: error.message }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }
  }

  // PUT /blogs/{id} - Mettre à jour un blog
  const idMatch = path.match(/^\/blogs\/(.+)$/)
  if (idMatch && method === 'PUT') {
    try {
      const id = idMatch[1]
      const updateData = await req.json()
      const blogs = await kv.get('blogs') || []
      
      const blogIndex = blogs.findIndex((b: any) => b.id === id)
      if (blogIndex === -1) {
        return new Response(
          JSON.stringify({ success: false, error: 'Blog not found' }),
          { status: 404, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        )
      }
      
      blogs[blogIndex] = {
        ...blogs[blogIndex],
        ...updateData,
        updatedAt: new Date().toISOString()
      }
      
      await kv.set('blogs', blogs)
      
      return new Response(
        JSON.stringify({ success: true, data: blogs[blogIndex] }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    } catch (error) {
      return new Response(
        JSON.stringify({ success: false, error: error.message }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }
  }

  // DELETE /blogs/{id} - Supprimer un blog
  if (idMatch && method === 'DELETE') {
    try {
      const id = idMatch[1]
      const blogs = await kv.get('blogs') || []
      
      const filteredBlogs = blogs.filter((b: any) => b.id !== id)
      if (filteredBlogs.length === blogs.length) {
        return new Response(
          JSON.stringify({ success: false, error: 'Blog not found' }),
          { status: 404, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        )
      }
      
      await kv.set('blogs', filteredBlogs)
      
      return new Response(
        JSON.stringify({ success: true }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    } catch (error) {
      return new Response(
        JSON.stringify({ success: false, error: error.message }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }
  }

  return new Response(
    JSON.stringify({ error: 'Method not allowed' }),
    { status: 405, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
  )
}

async function handleHeroSlidesRoutes(req: Request, path: string, url: URL) {
  const method = req.method

  // POST /api/init-hero-slides - Initialize hero slides
  if (path === '/api/init-hero-slides' && method === 'POST') {
    try {
      const heroSlides = [
        {
          id: '1',
          title_fr: 'FIMA Couchage',
          title_en: 'FIMA Bedding',
          subtitle_fr: 'Literie Premium',
          subtitle_en: 'Premium Bedding',
          description_fr: 'Découvrez notre collection de matelas et sommiers haut de gamme',
          description_en: 'Discover our collection of high-end mattresses and box springs',
          media_type: 'image',
          media_url: 'https://jxikbrjmdmznoehhccdw.supabase.co/storage/v1/object/public/make-98c6ec1c-media/images/a2f308aa-a871-4d6c-bc9b-63f9f8ecb6e7.png',
          cta_text_fr: 'Découvrir',
          cta_text_en: 'Discover',
          cta_link: '/fima-couchage',
          order: 1,
          is_active: true
        },
        {
          id: '2',
          title_fr: 'Visite Showroom',
          title_en: 'Showroom Visit',
          subtitle_fr: 'Découvrez nos espaces',
          subtitle_en: 'Discover our spaces',
          description_fr: 'Une visite guidée de nos showrooms',
          description_en: 'A guided tour of our showrooms',
          media_type: 'video',
          media_url: 'https://youtu.be/YhY3YXF6tTg?si=CqVyNH4I0n3MzsAa',
          video_duration: 15,
          video_loop: true,
          cta_text_fr: 'Voir la vidéo',
          cta_text_en: 'Watch video',
          cta_link: '/all-products',
          order: 2,
          is_active: true
        },
        {
          id: '3',
          title_fr: 'FIMA Design',
          title_en: 'FIMA Design',
          subtitle_fr: 'Menuiserie Sur-Mesure',
          subtitle_en: 'Custom Carpentry',
          description_fr: 'Créations uniques en bois noble',
          description_en: 'Unique creations in noble wood',
          media_type: 'image',
          media_url: 'https://jxikbrjmdmznoehhccdw.supabase.co/storage/v1/object/public/make-98c6ec1c-media/images/c5e4f475-1ef9-4f9d-8ea3-9f3954a75ba9.jpg',
          cta_text_fr: 'Explorer',
          cta_text_en: 'Explore',
          cta_link: '/fima-design',
          order: 3,
          is_active: true
        },
        {
          id: '4',
          title_fr: 'UNIVERS GLASS',
          title_en: 'UNIVERS GLASS',
          subtitle_fr: 'Vitrerie & Aluminium',
          subtitle_en: 'Glass & Aluminum',
          description_fr: 'Solutions complètes pour vos projets',
          description_en: 'Complete solutions for your projects',
          media_type: 'image',
          media_url: 'https://jxikbrjmdmznoehhccdw.supabase.co/storage/v1/object/public/make-98c6ec1c-media/images/68ead3c5-93c8-40ff-85b4-8f4d677ff821.jpg',
          cta_text_fr: 'Découvrir',
          cta_text_en: 'Discover',
          cta_link: '/univers-glass',
          order: 4,
          is_active: true
        },
        {
          id: '5',
          title_fr: 'Groupe FIMA',
          title_en: 'FIMA Group',
          subtitle_fr: 'Excellence depuis 1985',
          subtitle_en: 'Excellence since 1985',
          description_fr: 'Un groupe, trois métiers, une passion',
          description_en: 'One group, three trades, one passion',
          media_type: 'image',
          media_url: 'https://jxikbrjmdmznoehhccdw.supabase.co/storage/v1/object/public/make-98c6ec1c-media/images/55e6bd91-d520-4a9a-8ae6-d1ac8d6db763.jpg',
          cta_text_fr: 'En savoir plus',
          cta_text_en: 'Learn more',
          cta_link: '/our-history',
          order: 5,
          is_active: true
        }
      ]

      await kv.set('hero-slides', heroSlides)

      return new Response(
        JSON.stringify({
          success: true,
          message: 'Hero slides initialized successfully',
          data: {
            total_slides: heroSlides.length,
            video_slides: heroSlides.filter(s => s.media_type === 'video').length,
            image_slides: heroSlides.filter(s => s.media_type === 'image').length,
            slides: heroSlides
          }
        }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    } catch (error) {
      return new Response(
        JSON.stringify({ success: false, error: error.message }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }
  }

  // GET /api/hero-slides - Get hero slides
  if (path === '/api/hero-slides' && method === 'GET') {
    try {
      const locale = url.searchParams.get('locale') || 'fr'
      const slides = await kv.get('hero-slides') || []
      
      return new Response(
        JSON.stringify({ success: true, data: slides }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    } catch (error) {
      return new Response(
        JSON.stringify({ success: false, error: error.message }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }
  }

  return new Response(
    JSON.stringify({ error: 'Method not allowed' }),
    { status: 405, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
  )
}