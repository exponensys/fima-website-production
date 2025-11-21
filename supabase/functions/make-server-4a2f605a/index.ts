import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
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