import { Hono } from 'npm:hono'
import { cors } from 'npm:hono/cors'
import { logger } from 'npm:hono/logger'
import { createClient } from 'npm:@supabase/supabase-js@2'
import * as kv from './kv_store.tsx'

const app = new Hono()

// Middleware
app.use('*', cors())
app.use('*', logger(console.log))

// Initialize Supabase client
const supabase = createClient(
  Deno.env.get('SUPABASE_URL')!,
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
)

// Routes pour l'équipe
app.get('/make-server-98c6ec1c/team', async (c) => {
  try {
    const team = await kv.get('fima_team_members') || []
    return c.json({ success: true, data: team })
  } catch (error) {
    console.log('Error fetching team members:', error)
    return c.json({ success: false, error: 'Failed to fetch team members' }, 500)
  }
})

app.post('/make-server-98c6ec1c/team', async (c) => {
  try {
    const accessToken = c.req.header('Authorization')?.split(' ')[1]
    const { data: { user }, error } = await supabase.auth.getUser(accessToken)
    if (!user?.id) {
      return c.json({ success: false, error: 'Unauthorized' }, 401)
    }

    const teamData = await c.req.json()
    await kv.set('fima_team_members', teamData)
    return c.json({ success: true, message: 'Team members updated successfully' })
  } catch (error) {
    console.log('Error updating team members:', error)
    return c.json({ success: false, error: 'Failed to update team members' }, 500)
  }
})

// Routes pour les articles
app.get('/make-server-98c6ec1c/articles', async (c) => {
  try {
    const category = c.req.query('category')
    let articles = await kv.get('fima_articles') || []
    
    if (category && category !== 'all') {
      articles = articles.filter((article: any) => article.category === category)
    }
    
    // Trier par date décroissante
    articles.sort((a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime())
    
    return c.json({ success: true, data: articles })
  } catch (error) {
    console.log('Error fetching articles:', error)
    return c.json({ success: false, error: 'Failed to fetch articles' }, 500)
  }
})

app.post('/make-server-98c6ec1c/articles', async (c) => {
  try {
    const accessToken = c.req.header('Authorization')?.split(' ')[1]
    const { data: { user }, error } = await supabase.auth.getUser(accessToken)
    if (!user?.id) {
      return c.json({ success: false, error: 'Unauthorized' }, 401)
    }

    const articleData = await c.req.json()
    const articles = await kv.get('fima_articles') || []
    
    // Ajouter un nouvel article
    const newArticle = {
      ...articleData,
      id: Date.now(),
      date: new Date().toLocaleDateString('fr-FR', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      })
    }
    
    articles.unshift(newArticle)
    await kv.set('fima_articles', articles)
    
    return c.json({ success: true, data: newArticle, message: 'Article created successfully' })
  } catch (error) {
    console.log('Error creating article:', error)
    return c.json({ success: false, error: 'Failed to create article' }, 500)
  }
})

app.get('/make-server-98c6ec1c/articles/:id', async (c) => {
  try {
    const articleId = parseInt(c.req.param('id'))
    const articles = await kv.get('fima_articles') || []
    const article = articles.find((a: any) => a.id === articleId)
    
    if (!article) {
      return c.json({ success: false, error: 'Article not found' }, 404)
    }
    
    return c.json({ success: true, data: article })
  } catch (error) {
    console.log('Error fetching article:', error)
    return c.json({ success: false, error: 'Failed to fetch article' }, 500)
  }
})

// Routes pour les blogs (nouveau système avec Types.md)
app.get('/make-server-98c6ec1c/blogs', async (c) => {
  try {
    console.log('Fetching blogs...')
    let blogs = []
    
    try {
      const result = await kv.getByPrefix('blogs:')
      blogs = result || []
      console.log(`Found ${blogs.length} blogs`)
    } catch (kvError) {
      console.log('KV error while fetching blogs:', kvError)
      // Continue with empty array instead of failing
      blogs = []
    }
    
    // S'assurer que blogs est un tableau
    if (!Array.isArray(blogs)) {
      console.log('Warning: blogs is not an array, converting to empty array')
      blogs = []
    }
    
    const category = c.req.query('category')
    if (category && category !== 'all') {
      blogs = blogs.filter((blog: any) => blog?.category === category)
    }
    
    // Trier par date de publication décroissante
    if (blogs.length > 0) {
      blogs.sort((a: any, b: any) => {
        const dateA = new Date(a?.publishedDate || a?.createdAt || Date.now()).getTime()
        const dateB = new Date(b?.publishedDate || b?.createdAt || Date.now()).getTime()
        return dateB - dateA
      })
    }
    
    return c.json({ success: true, data: blogs })
  } catch (error) {
    console.log('Error fetching blogs:', error)
    return c.json({ success: false, error: `Failed to fetch blogs: ${error?.message || String(error)}` }, 500)
  }
})

app.get('/make-server-98c6ec1c/blogs/:slug', async (c) => {
  try {
    const slug = c.req.param('slug')
    const blogs = await kv.getByPrefix('blogs:') || []
    const blog = blogs.find((b: any) => b.slug === slug)
    
    if (!blog) {
      return c.json({ success: false, error: 'Blog not found' }, 404)
    }
    
    return c.json({ success: true, data: blog })
  } catch (error) {
    console.log('Error fetching blog:', error)
    return c.json({ success: false, error: 'Failed to fetch blog' }, 500)
  }
})

app.post('/make-server-98c6ec1c/blogs', async (c) => {
  try {
    const accessToken = c.req.header('Authorization')?.split(' ')[1]
    const { data: { user }, error } = await supabase.auth.getUser(accessToken)
    if (!user?.id) {
      return c.json({ success: false, error: 'Unauthorized' }, 401)
    }

    const blogData = await c.req.json()
    
    // Générer un UUID pour le blog
    const blogId = crypto.randomUUID()
    const now = new Date().toISOString()
    
    const newBlog = {
      id: blogId,
      ...blogData,
      createdAt: now,
      views: 0,
      likes: 0
    }
    
    await kv.set(`blogs:${blogId}`, newBlog)
    
    return c.json({ success: true, data: newBlog, message: 'Blog created successfully' })
  } catch (error) {
    console.log('Error creating blog:', error)
    return c.json({ success: false, error: 'Failed to create blog' }, 500)
  }
})

app.put('/make-server-98c6ec1c/blogs/:id', async (c) => {
  try {
    const accessToken = c.req.header('Authorization')?.split(' ')[1]
    const { data: { user }, error } = await supabase.auth.getUser(accessToken)
    if (!user?.id) {
      return c.json({ success: false, error: 'Unauthorized' }, 401)
    }

    const blogId = c.req.param('id')
    const blogData = await c.req.json()
    
    const existingBlog = await kv.get(`blogs:${blogId}`)
    if (!existingBlog) {
      return c.json({ success: false, error: 'Blog not found' }, 404)
    }
    
    const updatedBlog = {
      ...existingBlog,
      ...blogData,
      updatedAt: new Date().toISOString()
    }
    
    await kv.set(`blogs:${blogId}`, updatedBlog)
    
    return c.json({ success: true, data: updatedBlog, message: 'Blog updated successfully' })
  } catch (error) {
    console.log('Error updating blog:', error)
    return c.json({ success: false, error: 'Failed to update blog' }, 500)
  }
})

app.delete('/make-server-98c6ec1c/blogs/:id', async (c) => {
  try {
    const accessToken = c.req.header('Authorization')?.split(' ')[1]
    const { data: { user }, error } = await supabase.auth.getUser(accessToken)
    if (!user?.id) {
      return c.json({ success: false, error: 'Unauthorized' }, 401)
    }

    const blogId = c.req.param('id')
    await kv.del(`blogs:${blogId}`)
    
    return c.json({ success: true, message: 'Blog deleted successfully' })
  } catch (error) {
    console.log('Error deleting blog:', error)
    return c.json({ success: false, error: 'Failed to delete blog' }, 500)
  }
})

// Routes pour les catégories d'articles
app.get('/make-server-98c6ec1c/article-categories', async (c) => {
  try {
    console.log('Fetching article categories...')
    const categories = await kv.getByPrefix('article-categories:') || []
    
    console.log('Article categories found:', categories.length)
    return c.json({ success: true, data: categories })
  } catch (error) {
    console.log('Error fetching article categories:', error)
    return c.json({ success: false, error: 'Failed to fetch article categories' }, 500)
  }
})

app.post('/make-server-98c6ec1c/article-categories', async (c) => {
  try {
    const body = await c.req.json()
    const id = `cat-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`
    
    const newCategory = {
      id,
      ...body,
      createdAt: new Date().toISOString()
    }
    
    await kv.set(`article-categories:${id}`, newCategory)
    
    console.log('Article category created:', id)
    return c.json({ success: true, data: newCategory })
  } catch (error) {
    console.log('Error creating article category:', error)
    return c.json({ success: false, error: 'Failed to create article category' }, 500)
  }
})

app.put('/make-server-98c6ec1c/article-categories/:id', async (c) => {
  try {
    const id = c.req.param('id')
    const body = await c.req.json()
    
    const existingCategory = await kv.get(`article-categories:${id}`)
    if (!existingCategory) {
      return c.json({ success: false, error: 'Article category not found' }, 404)
    }
    
    const updatedCategory = {
      ...existingCategory,
      ...body,
      id,
      updatedAt: new Date().toISOString()
    }
    
    await kv.set(`article-categories:${id}`, updatedCategory)
    
    console.log('Article category updated:', id)
    return c.json({ success: true, data: updatedCategory })
  } catch (error) {
    console.log('Error updating article category:', error)
    return c.json({ success: false, error: 'Failed to update article category' }, 500)
  }
})

app.delete('/make-server-98c6ec1c/article-categories/:id', async (c) => {
  try {
    const id = c.req.param('id')
    await kv.del(`article-categories:${id}`)
    
    console.log('Article category deleted:', id)
    return c.json({ success: true })
  } catch (error) {
    console.log('Error deleting article category:', error)
    return c.json({ success: false, error: 'Failed to delete article category' }, 500)
  }
})

// Route pour initialiser les données par défaut
app.post('/make-server-98c6ec1c/init-data', async (c) => {
  try {
    // Initialiser les données d'équipe
    const defaultTeam = [
      {
        id: 1,
        name: "Marie Dubois",
        position: "Directrice Générale",
        description: "25 ans d'expérience dans l'industrie du mobilier et de l'ameublement",
        image: "https://images.unsplash.com/photo-1709715357519-2a84f9765e57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHdvbWFuJTIwZXhlY3V0aXZlfGVufDF8fHx8MTc1NjAwODc5OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        department: "Direction"
      },
      {
        id: 2,
        name: "Jean-Pierre Martin",
        position: "Responsable Commercial",
        description: "Expert en solutions B2B pour l'hôtellerie et les collectivités",
        image: "https://images.unsplash.com/photo-1629507208649-70919ca33793?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1hbiUyMHN1aXQlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzU1OTYxMjA2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        department: "Commercial"
      },
      {
        id: 3,
        name: "Sophie Laurent",
        position: "Responsable Design",
        description: "Créatrice des collections FIMA Design et experte en menuiserie",
        image: "https://images.unsplash.com/photo-1753162658593-1282a070d8f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGRlc2lnbmVyJTIwYXJjaGl0ZWN0JTIwY3JlYXRpdmV8ZW58MXx8fHwxNzU2MDA4Nzk5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        department: "Design"
      },
      {
        id: 4,
        name: "Thomas Moreau",
        position: "Chef d'atelier",
        description: "20 ans d'expertise en fabrication et contrôle qualité",
        image: "https://images.unsplash.com/photo-1578988254148-9937ccb32ae7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwd29ya2VyJTIwbWFuJTIwZmFjdG9yeXxlbnwxfHx8fDE3NTYwMDg4MDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        department: "Production"
      }
    ]

    // Initialiser les articles
    const defaultArticles = [
      {
        id: 1,
        title: "Les tendances literie 2025 : confort et écologie",
        excerpt: "Découvrez les nouvelles tendances qui révolutionnent l'industrie de la literie en 2025, avec un focus sur les matériaux durables.",
        image: "https://images.unsplash.com/photo-1750420556288-d0e32a6f517b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBiZWRyb29tJTIwaW50ZXJpb3IlMjBkZXNpZ258ZW58MXx8fHwxNzU2MDA4ODAwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        date: "15 Janvier 2025",
        author: "Marie Dubois",
        category: "tendances",
        readTime: "5 min"
      },
      {
        id: 2,
        title: "FIMA Design lance sa nouvelle collection éco-responsable",
        excerpt: "Notre engagement pour l'environnement se concrétise avec une nouvelle gamme de meubles fabriqués à partir de matériaux recyclés.",
        image: "https://images.unsplash.com/photo-1725891261511-e6d40fead7a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY28lMjBmdXJuaXR1cmUlMjBzdXN0YWluYWJsZSUyMGRlc2lnbnxlbnwxfHx8fDE3NTYwMDg4MDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        date: "12 Janvier 2025",
        author: "Sophie Laurent",
        category: "innovation",
        readTime: "3 min"
      },
      {
        id: 3,
        title: "Projet hôtelier : 200 chambres équipées en Provence",
        excerpt: "Retour sur notre récent projet d'aménagement pour un complexe hôtelier de luxe en Provence, mêlant confort et élégance.",
        image: "https://images.unsplash.com/photo-1632598024410-3d8f24daab57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMHJvb20lMjBpbnRlcmlvcnxlbnwxfHx8fDE3NTU5MzIxMjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        date: "8 Janvier 2025",
        author: "Jean-Pierre Martin",
        category: "projets",
        readTime: "7 min"
      },
      {
        id: 4,
        title: "FIMA reçoit le label « Entreprise du Patrimoine Vivant »",
        excerpt: "Cette distinction officielle reconnaît notre savoir-faire d'excellence et notre engagement dans la préservation des métiers traditionnels.",
        image: "https://images.unsplash.com/photo-1725891261511-e6d40fead7a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY28lMjBmdXJuaXR1cmUlMjBzdXN0YWluYWJsZSUyMGRlc2lnbnxlbnwxfHx8fDE3NTYwMDg4MDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        date: "5 Janvier 2025",
        author: "Direction FIMA",
        category: "actualites",
        readTime: "4 min"
      }
    ]

    // Initialiser les témoignages
    const defaultTestimonials = [
      {
        id: 1,
        name: "Catherine Moreau",
        company: "Hôtel des Oliviers",
        location: "Provence",
        rating: 5,
        comment: "FIMA a transformé notre établissement avec un mobilier de qualité exceptionnelle. Nos clients remarquent immédiatement la différence de confort.",
        project: "Rénovation complète - 85 chambres",
        image: "https://images.unsplash.com/photo-1709715357519-2a84f9765e57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHdvbWFuJTIwZXhlY3V0aXZlfGVufDF8fHx8MTc1NjAwODc5OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        createdAt: new Date().toISOString()
      },
      {
        id: 2,
        name: "Marc Dubois",
        company: "Résidence Les Jardins",
        location: "Lyon",
        rating: 5,
        comment: "Un accompagnement professionnel du début à la fin. FIMA a su adapter ses solutions à nos contraintes techniques spécifiques.",
        project: "Aménagement EHPAD - 120 chambres",
        image: "https://images.unsplash.com/photo-1629507208649-70919ca33793?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1hbiUyMHN1aXQlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzU1OTYxMjA2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        createdAt: new Date().toISOString()
      },
      {
        id: 3,
        name: "Sophie Lemaire",
        company: "TechCorp",
        location: "Paris",
        rating: 5,
        comment: "Nos nouveaux espaces de travail ont révolutionné l'ambiance de l'entreprise. Design moderne et fonctionnalité parfaite.",
        project: "Open space - 200 postes",
        image: "https://images.unsplash.com/photo-1753162658593-1282a070d8f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGRlc2lnbmVyJTIwYXJjaGl0ZWN0JTIwY3JlYXRpdmV8ZW58MXx8fHwxNzU2MDA4Nzk5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        createdAt: new Date().toISOString()
      }
    ]

    // Sauvegarder les données
    await kv.set('fima_team_members', defaultTeam)
    await kv.set('fima_articles', defaultArticles)
    await kv.set('fima_testimonials', defaultTestimonials)

    return c.json({ 
      success: true, 
      message: 'Default data initialized successfully',
      data: {
        team: defaultTeam.length,
        articles: defaultArticles.length,
        testimonials: defaultTestimonials.length
      }
    })
  } catch (error) {
    console.log('Error initializing data:', error)
    return c.json({ success: false, error: 'Failed to initialize data' }, 500)
  }
})

// Route pour initialiser les blogs de démonstration
app.post('/make-server-98c6ec1c/init-blogs', async (c) => {
  try {
    // Vérifier d'abord s'il existe déjà des blogs
    const existingBlogs = await kv.getByPrefix('blogs:') || []
    
    const defaultBlogs = [
      {
        id: crypto.randomUUID(),
        titleFr: "Les tendances literie 2025 : confort et écologie",
        titleEn: "2025 Bedding Trends: Comfort and Ecology",
        slug: "tendances-literie-2025",
        summaryFr: "Découvrez les nouvelles tendances qui révolutionnent l'industrie de la literie en 2025, avec un focus sur les matériaux durables.",
        summaryEn: "Discover the new trends revolutionizing the bedding industry in 2025, with a focus on sustainable materials.",
        contentFr: "<p>L'année 2025 marque un tournant dans l'industrie de la literie...</p>",
        contentEn: "<p>The year 2025 marks a turning point in the bedding industry...</p>",
        author: "Marie Dubois",
        category: "tendances",
        tags: ["literie", "écologie", "tendances"],
        featuredImage: "https://images.unsplash.com/photo-1640109478916-f445f8f19b11?w=1080",
        published: true,
        publishedDate: "2025-01-15T10:00:00Z",
        createdAt: new Date().toISOString(),
        readTime: 5,
        views: 245
      },
      {
        id: crypto.randomUUID(),
        titleFr: "FIMA Design lance sa nouvelle collection éco-responsable",
        titleEn: "FIMA Design Launches Its New Eco-Responsible Collection",
        slug: "collection-eco-responsable",
        summaryFr: "Notre engagement pour l'environnement se concrétise avec une nouvelle gamme de meubles fabriqués à partir de matériaux recyclés.",
        summaryEn: "Our commitment to the environment is realized with a new range of furniture made from recycled materials.",
        contentFr: "<p>FIMA Design est fière de présenter sa nouvelle collection...</p>",
        contentEn: "<p>FIMA Design is proud to present its new collection...</p>",
        author: "Sophie Laurent",
        category: "innovation",
        tags: ["design", "écologie", "mobilier"],
        featuredImage: "https://images.unsplash.com/photo-1593069431672-f903a33c286f?w=1080",
        published: true,
        publishedDate: "2025-01-12T10:00:00Z",
        createdAt: new Date().toISOString(),
        readTime: 3,
        views: 189
      },
      {
        id: crypto.randomUUID(),
        titleFr: "Projet hôtelier : 200 chambres équipées en Provence",
        titleEn: "Hotel Project: 200 Rooms Equipped in Provence",
        slug: "projet-hotel-provence",
        summaryFr: "Retour sur notre récent projet d'aménagement pour un complexe hôtelier de luxe en Provence, mêlant confort et élégance.",
        summaryEn: "Overview of our recent project for a luxury hotel complex in Provence, combining comfort and elegance.",
        contentFr: "<p>Ce projet d'envergure nous a permis de démontrer notre expertise...</p>",
        contentEn: "<p>This major project allowed us to demonstrate our expertise...</p>",
        author: "Jean-Pierre Martin",
        category: "projets",
        tags: ["hôtellerie", "projet", "B2B"],
        featuredImage: "https://images.unsplash.com/photo-1632598024410-3d8f24daab57?w=1080",
        published: true,
        publishedDate: "2025-01-08T10:00:00Z",
        createdAt: new Date().toISOString(),
        readTime: 7,
        views: 312
      },
      {
        id: crypto.randomUUID(),
        titleFr: "FIMA reçoit le label « Entreprise du Patrimoine Vivant »",
        titleEn: "FIMA Receives the 'Living Heritage Company' Label",
        slug: "label-patrimoine-vivant",
        summaryFr: "Cette distinction officielle reconnaît notre savoir-faire d'excellence et notre engagement dans la préservation des métiers traditionnels.",
        summaryEn: "This official distinction recognizes our excellence and commitment to preserving traditional crafts.",
        contentFr: "<p>Nous sommes honorés de recevoir cette distinction prestigieuse...</p>",
        contentEn: "<p>We are honored to receive this prestigious distinction...</p>",
        author: "Direction FIMA",
        category: "actualites",
        tags: ["actualités", "distinction", "patrimoine"],
        featuredImage: "https://images.unsplash.com/photo-1680210849773-f97a41c6b7ed?w=1080",
        published: true,
        publishedDate: "2025-01-05T10:00:00Z",
        createdAt: new Date().toISOString(),
        readTime: 4,
        views: 156
      }
    ]

    // Sauvegarder uniquement les blogs qui n'existent pas déjà
    let addedCount = 0
    for (const blog of defaultBlogs) {
      // Vérifier si un blog similaire existe déjà (même slug)
      const exists = existingBlogs.some((b: any) => 
        b.slug === blog.slug
      )
      
      if (!exists) {
        await kv.set(`blogs:${blog.id}`, blog)
        addedCount++
      }
    }

    return c.json({ 
      success: true, 
      message: `Blogs initialized successfully. ${addedCount} new blogs added, ${existingBlogs.length} existing preserved`,
      data: {
        added: addedCount,
        existing: existingBlogs.length,
        total: existingBlogs.length + addedCount
      }
    })
  } catch (error) {
    console.log('Error initializing blogs:', error)
    return c.json({ success: false, error: 'Failed to initialize blogs' }, 500)
  }
})

// Routes pour les testimonials (nouveau système avec Types.md)
app.get('/make-server-98c6ec1c/testimonials', async (c) => {
  try {
    console.log('Fetching testimonials...')
    const category = c.req.query('category')
    const featured = c.req.query('featured')
    
    let testimonials = []
    
    try {
      // Lire depuis la clé kv_store_ead4d8e2
      const legacyResult = await kv.get('kv_store_ead4d8e2')
      if (legacyResult && Array.isArray(legacyResult)) {
        // Mapper les données vers le bon format
        testimonials = legacyResult.map((t: any) => ({
          id: t.id,
          clientName: t.clientName,
          clientPosition: t.clientPosition || '',
          clientCompany: t.clientCompany || '',
          clientLocation: t.clientLocation,
          clientPhoto: t.clientPhoto,
          testimonialFr: t.testimonialFr,
          testimonialEn: t.testimonialEn,
          rating: t.rating,
          project: t.project,
          projectId: t.projectId,
          category: t.category,
          featured: t.featured || false,
          published: t.published,
          publishedDate: t.testimonialDate || t.publishedDate || t.createdAt,
          videoUrl: t.videoUrl,
          createdAt: t.testimonialDate || t.createdAt || t.updatedAt,
          updatedAt: t.updatedAt
        }))
        console.log(`Found ${testimonials.length} testimonials from kv_store_ead4d8e2`)
      } else {
        console.log('No data in kv_store_ead4d8e2, initializing with default data')
        testimonials = []
      }
    } catch (kvError) {
      console.log('KV error while fetching testimonials:', kvError)
      // Continue with empty array instead of failing
      testimonials = []
    }
    
    // S'assurer que testimonials est un tableau
    if (!Array.isArray(testimonials)) {
      console.log('Warning: testimonials is not an array, converting to empty array')
      testimonials = []
    }
    
    // Filtrer par catégorie si spécifié
    if (category && category !== 'all') {
      testimonials = testimonials.filter((t: any) => t?.category === category)
    }
    
    // Filtrer par featured si spécifié
    if (featured === 'true') {
      testimonials = testimonials.filter((t: any) => t?.featured === true)
    }
    
    // Trier par featured d'abord, puis par date (seulement si on a des testimonials)
    if (testimonials.length > 0) {
      testimonials.sort((a: any, b: any) => {
        // Featured first
        if (a?.featured && !b?.featured) return -1
        if (!a?.featured && b?.featured) return 1
        
        // Then by date
        const dateA = new Date(a?.publishedDate || a?.createdAt || Date.now()).getTime()
        const dateB = new Date(b?.publishedDate || b?.createdAt || Date.now()).getTime()
        return dateB - dateA
      })
    }
    
    return c.json({ success: true, data: testimonials })
  } catch (error) {
    console.log('Error fetching testimonials:', error)
    return c.json({ success: false, error: `Failed to fetch testimonials: ${error?.message || String(error)}` }, 500)
  }
})

app.get('/make-server-98c6ec1c/testimonials/:id', async (c) => {
  try {
    const id = c.req.param('id')
    const testimonial = await kv.get(`testimonials:${id}`)
    
    if (!testimonial) {
      return c.json({ success: false, error: 'Testimonial not found' }, 404)
    }
    
    return c.json({ success: true, data: testimonial })
  } catch (error) {
    console.log('Error fetching testimonial:', error)
    return c.json({ success: false, error: 'Failed to fetch testimonial' }, 500)
  }
})

app.post('/make-server-98c6ec1c/testimonials', async (c) => {
  try {
    const accessToken = c.req.header('Authorization')?.split(' ')[1]
    const { data: { user }, error } = await supabase.auth.getUser(accessToken)
    if (!user?.id) {
      return c.json({ success: false, error: 'Unauthorized' }, 401)
    }

    const testimonialData = await c.req.json()
    
    // Générer un UUID pour le testimonial
    const testimonialId = crypto.randomUUID()
    const now = new Date().toISOString()
    
    const newTestimonial = {
      id: testimonialId,
      ...testimonialData,
      createdAt: now
    }
    
    await kv.set(`testimonials:${testimonialId}`, newTestimonial)
    
    return c.json({ success: true, data: newTestimonial, message: 'Testimonial created successfully' })
  } catch (error) {
    console.log('Error creating testimonial:', error)
    return c.json({ success: false, error: 'Failed to create testimonial' }, 500)
  }
})

app.put('/make-server-98c6ec1c/testimonials/:id', async (c) => {
  try {
    const accessToken = c.req.header('Authorization')?.split(' ')[1]
    const { data: { user }, error } = await supabase.auth.getUser(accessToken)
    if (!user?.id) {
      return c.json({ success: false, error: 'Unauthorized' }, 401)
    }

    const testimonialId = c.req.param('id')
    const testimonialData = await c.req.json()
    
    const existingTestimonial = await kv.get(`testimonials:${testimonialId}`)
    if (!existingTestimonial) {
      return c.json({ success: false, error: 'Testimonial not found' }, 404)
    }
    
    const updatedTestimonial = {
      ...existingTestimonial,
      ...testimonialData,
      updatedAt: new Date().toISOString()
    }
    
    await kv.set(`testimonials:${testimonialId}`, updatedTestimonial)
    
    return c.json({ success: true, data: updatedTestimonial, message: 'Testimonial updated successfully' })
  } catch (error) {
    console.log('Error updating testimonial:', error)
    return c.json({ success: false, error: 'Failed to update testimonial' }, 500)
  }
})

app.delete('/make-server-98c6ec1c/testimonials/:id', async (c) => {
  try {
    const accessToken = c.req.header('Authorization')?.split(' ')[1]
    const { data: { user }, error } = await supabase.auth.getUser(accessToken)
    if (!user?.id) {
      return c.json({ success: false, error: 'Unauthorized' }, 401)
    }

    const testimonialId = c.req.param('id')
    await kv.del(`testimonials:${testimonialId}`)
    
    return c.json({ success: true, message: 'Testimonial deleted successfully' })
  } catch (error) {
    console.log('Error deleting testimonial:', error)
    return c.json({ success: false, error: 'Failed to delete testimonial' }, 500)
  }
})

// Route pour initialiser les testimonials de démonstration
app.post('/make-server-98c6ec1c/init-testimonials', async (c) => {
  try {
    // Vérifier d'abord s'il existe déjà des testimonials dans kv_store_ead4d8e2
    let existingTestimonials = []
    
    try {
      existingTestimonials = await kv.get('kv_store_ead4d8e2') || []
    } catch (kvError) {
      console.log('KV error while checking existing testimonials:', kvError)
      existingTestimonials = []
    }
    
    const defaultTestimonials = [
      {
        id: crypto.randomUUID(),
        clientName: "Catherine Moreau",
        clientPosition: "Directrice Générale",
        clientCompany: "Hôtel des Oliviers",
        clientLocation: "Dakar, Sénégal",
        clientPhoto: "https://images.unsplash.com/photo-1709715357519-2a84f9765e57?w=1080",
        testimonialFr: "FIMA a transformé notre établissement avec un mobilier de qualité exceptionnelle. Nos clients remarquent immédiatement la différence de confort. Un investissement qui en valait vraiment la peine.",
        testimonialEn: "FIMA transformed our establishment with exceptional quality furniture. Our clients immediately notice the difference in comfort. An investment that was truly worth it.",
        rating: 5,
        project: "Rénovation complète - 85 chambres",
        projectId: null,
        category: "Hôtellerie",
        featured: true,
        published: true,
        publishedDate: "2025-01-10T10:00:00Z",
        createdAt: new Date().toISOString()
      },
      {
        id: crypto.randomUUID(),
        clientName: "Marc Dubois",
        clientPosition: "Directeur d'établissement",
        clientCompany: "Résidence Les Jardins",
        clientLocation: "Abidjan, Côte d'Ivoire",
        clientPhoto: "https://images.unsplash.com/photo-1629507208649-70919ca33793?w=1080",
        testimonialFr: "Un accompagnement professionnel du début à la fin. FIMA a su adapter ses solutions à nos contraintes techniques spécifiques. Le résultat dépasse nos attentes.",
        testimonialEn: "Professional support from start to finish. FIMA adapted their solutions to our specific technical constraints. The result exceeds our expectations.",
        rating: 5,
        project: "Aménagement EHPAD - 120 chambres",
        projectId: null,
        category: "Santé",
        featured: true,
        published: true,
        publishedDate: "2025-01-08T10:00:00Z",
        createdAt: new Date().toISOString()
      },
      {
        id: crypto.randomUUID(),
        clientName: "Sophie Lemaire",
        clientPosition: "DRH",
        clientCompany: "TechCorp Afrique",
        clientLocation: "Lomé, Togo",
        clientPhoto: "https://images.unsplash.com/photo-1753162658593-1282a070d8f2?w=1080",
        testimonialFr: "Nos nouveaux espaces de travail ont révolutionné l'ambiance de l'entreprise. Design moderne et fonctionnalité parfaite. Nos employés sont ravis !",
        testimonialEn: "Our new workspaces have revolutionized the company atmosphere. Modern design and perfect functionality. Our employees are delighted!",
        rating: 5,
        project: "Open space - 200 postes de travail",
        projectId: null,
        category: "Bureaux",
        featured: true,
        published: true,
        publishedDate: "2025-01-05T10:00:00Z",
        createdAt: new Date().toISOString()
      },
      {
        id: crypto.randomUUID(),
        clientName: "Jean-Claude Kouassi",
        clientPosition: "Gérant",
        clientCompany: "Restaurant Le Palmier",
        clientLocation: "Cotonou, Bénin",
        clientPhoto: "https://images.unsplash.com/photo-1578988254148-9937ccb32ae7?w=1080",
        testimonialFr: "La menuiserie sur mesure réalisée par FIMA Design a donné une âme unique à notre restaurant. Un travail d'artisan d'une qualité rare.",
        testimonialEn: "The custom woodwork by FIMA Design gave our restaurant a unique soul. Craftsman work of rare quality.",
        rating: 5,
        project: "Aménagement restaurant - Menuiserie sur mesure",
        projectId: null,
        category: "Restauration",
        featured: false,
        published: true,
        publishedDate: "2025-01-03T10:00:00Z",
        createdAt: new Date().toISOString()
      },
      {
        id: crypto.randomUUID(),
        clientName: "Mme Marie-Claire Kouassi",
        clientPosition: "Directrice Générale",
        clientCompany: "Hôtel Ivoire",
        clientLocation: "Abidjan, Côte d'Ivoire",
        clientPhoto: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1080",
        testimonialFr: "Nous avons fait appel à FIMA pour rénover entièrement notre établissement. Le résultat est au-delà de nos attentes : un mobilier élégant, confortable et durable. Nos clients apprécient vraiment la différence.",
        testimonialEn: "We called upon FIMA to completely renovate our establishment. The result is beyond our expectations: elegant, comfortable and durable furniture. Our clients really appreciate the difference.",
        rating: 5,
        project: "Rénovation hôtelière complète",
        projectId: null,
        category: "Hôtellerie",
        featured: true,
        published: true,
        publishedDate: "2025-01-15T10:00:00Z",
        createdAt: new Date().toISOString()
      }
    ]

    // Sauvegarder dans kv_store_ead4d8e2 (écraser avec les nouvelles données)
    await kv.set('kv_store_ead4d8e2', defaultTestimonials)

    return c.json({ 
      success: true, 
      message: `Testimonials initialized successfully in kv_store_ead4d8e2. ${defaultTestimonials.length} testimonials created.`,
      data: {
        total: defaultTestimonials.length
      }
    })
  } catch (error) {
    console.log('Error initializing testimonials:', error)
    return c.json({ success: false, error: `Failed to initialize testimonials: ${error?.message || String(error)}` }, 500)
  }
})

// Routes pour les produits (nouveau système avec Types.md)
app.get('/make-server-98c6ec1c/products', async (c) => {
  try {
    const business = c.req.query('business')
    const category = c.req.query('category')
    const featured = c.req.query('featured')
    
    let products = await kv.getByPrefix('products:') || []
    
    // Filtrer par business si spécifié
    if (business && business !== 'all') {
      products = products.filter((p: any) => p.business === business)
    }
    
    // Filtrer par catégorie si spécifié
    if (category && category !== 'all') {
      products = products.filter((p: any) => p.category === category)
    }
    
    // Filtrer par featured si spécifié
    if (featured === 'true') {
      products = products.filter((p: any) => p.featured === true)
    }
    
    // Trier par featured d'abord, puis par nom
    products.sort((a: any, b: any) => {
      // Featured first
      if (a.featured && !b.featured) return -1
      if (!a.featured && b.featured) return 1
      
      // Then by name
      return a.name.localeCompare(b.name)
    })
    
    return c.json({ success: true, data: products })
  } catch (error) {
    console.log('Error fetching products:', error)
    return c.json({ success: false, error: 'Failed to fetch products' }, 500)
  }
})

app.get('/make-server-98c6ec1c/products/:sku', async (c) => {
  try {
    const sku = c.req.param('sku')
    const products = await kv.getByPrefix('products:') || []
    const product = products.find((p: any) => p.sku === sku || p.id === sku)
    
    if (!product) {
      return c.json({ success: false, error: 'Product not found' }, 404)
    }
    
    return c.json({ success: true, data: product })
  } catch (error) {
    console.log('Error fetching product:', error)
    return c.json({ success: false, error: 'Failed to fetch product' }, 500)
  }
})

app.post('/make-server-98c6ec1c/products', async (c) => {
  try {
    // Temporairement désactivé pour le prototype - À sécuriser en production
    // const accessToken = c.req.header('Authorization')?.split(' ')[1]
    // const { data: { user }, error } = await supabase.auth.getUser(accessToken)
    // if (!user?.id) {
    //   return c.json({ success: false, error: 'Unauthorized' }, 401)
    // }

    const productData = await c.req.json()
    
    // Générer un UUID pour le produit
    const productId = crypto.randomUUID()
    const now = new Date().toISOString()
    
    const newProduct = {
      id: productId,
      ...productData,
      createdAt: now
    }
    
    await kv.set(`products:${productId}`, newProduct)
    
    return c.json({ success: true, data: newProduct, message: 'Product created successfully' })
  } catch (error) {
    console.log('Error creating product:', error)
    return c.json({ success: false, error: 'Failed to create product' }, 500)
  }
})

app.put('/make-server-98c6ec1c/products/:id', async (c) => {
  try {
    // Temporairement désactivé pour le prototype - À sécuriser en production
    // const accessToken = c.req.header('Authorization')?.split(' ')[1]
    // const { data: { user }, error } = await supabase.auth.getUser(accessToken)
    // if (!user?.id) {
    //   return c.json({ success: false, error: 'Unauthorized' }, 401)
    // }

    const productId = c.req.param('id')
    const productData = await c.req.json()
    
    const existingProduct = await kv.get(`products:${productId}`)
    if (!existingProduct) {
      return c.json({ success: false, error: 'Product not found' }, 404)
    }
    
    const updatedProduct = {
      ...existingProduct,
      ...productData,
      updatedAt: new Date().toISOString()
    }
    
    await kv.set(`products:${productId}`, updatedProduct)
    
    return c.json({ success: true, data: updatedProduct, message: 'Product updated successfully' })
  } catch (error) {
    console.log('Error updating product:', error)
    return c.json({ success: false, error: 'Failed to update product' }, 500)
  }
})

app.delete('/make-server-98c6ec1c/products/:id', async (c) => {
  try {
    // Temporairement désactivé pour le prototype - À sécuriser en production
    // const accessToken = c.req.header('Authorization')?.split(' ')[1]
    // const { data: { user }, error } = await supabase.auth.getUser(accessToken)
    // if (!user?.id) {
    //   return c.json({ success: false, error: 'Unauthorized' }, 401)
    // }

    const productId = c.req.param('id')
    await kv.del(`products:${productId}`)
    
    return c.json({ success: true, message: 'Product deleted successfully' })
  } catch (error) {
    console.log('Error deleting product:', error)
    return c.json({ success: false, error: 'Failed to delete product' }, 500)
  }
})

// Route pour initialiser les produits de démonstration
app.post('/make-server-98c6ec1c/init-products', async (c) => {
  try {
    const defaultProducts = [
      // FIMA COUCHAGE - Matelas
      {
        id: crypto.randomUUID(),
        name: "Matelas Confort Premium",
        sku: "MAT-CONF-PREM",
        category: "matelas",
        business: "fima-couchage",
        price: 489000, // Prix en FCFA (centimes)
        compareAtPrice: 599000,
        stock: 25,
        lowStockThreshold: 5,
        unit: "pièce",
        description: "Matelas ressorts ensachés 7 zones de confort, soutien ferme, garnissage naturel. Fabriqué en France avec des matériaux de haute qualité.",
        shortDescription: "Matelas ressorts ensachés 7 zones, soutien ferme",
        images: ["https://images.unsplash.com/photo-1648634158203-199accfd7afc?w=1080"],
        tags: ["matelas", "ressorts", "confort", "premium"],
        featured: true,
        badge: null,
        discount: "18%",
        firmness: "Ferme",
        material: "Ressorts",
        size: ["90x190", "140x190", "160x200"],
        status: "active",
        createdAt: new Date().toISOString()
      },
      {
        id: crypto.randomUUID(),
        name: "Matelas Mémoire de Forme Luxe",
        sku: "MAT-MEM-LUXE",
        category: "matelas",
        business: "fima-couchage",
        price: 699000,
        compareAtPrice: 899000,
        stock: 15,
        lowStockThreshold: 3,
        unit: "pièce",
        description: "Matelas mousse mémoire avec gel rafraîchissant, housse bambou hypoallergénique. Technologie de pointe pour un sommeil réparateur.",
        shortDescription: "Matelas mémoire de forme avec gel rafraîchissant",
        images: ["https://images.unsplash.com/photo-1722349673556-62570c88ea84?w=1080"],
        tags: ["matelas", "mémoire de forme", "luxe", "gel"],
        featured: true,
        badge: "NOUVEAU",
        discount: "22%",
        firmness: "Médium-Ferme",
        material: "Mémoire de forme",
        size: ["90x190", "140x190", "160x200", "180x200"],
        status: "active",
        createdAt: new Date().toISOString()
      },
      
      // FIMA COUCHAGE - Oreillers
      {
        id: crypto.randomUUID(),
        name: "Oreiller Ergonomique",
        sku: "ORL-ERGO",
        category: "oreillers",
        business: "fima-couchage",
        price: 89000,
        compareAtPrice: 119000,
        stock: 50,
        lowStockThreshold: 10,
        unit: "pièce",
        description: "Oreiller mémoire de forme, housse hypoallergénique lavable. Soutien optimal de la nuque et des cervicales.",
        shortDescription: "Oreiller mémoire de forme ergonomique",
        images: ["https://images.unsplash.com/photo-1585086287371-e455901ee81e?w=1080"],
        tags: ["oreiller", "ergonomique", "mémoire de forme"],
        featured: false,
        badge: "Promo",
        discount: null,
        firmness: "Médium",
        material: "Mémoire de forme",
        size: ["50x70", "60x60"],
        status: "active",
        createdAt: new Date().toISOString()
      },
      
      // FIMA COUCHAGE - Sommiers
      {
        id: crypto.randomUUID(),
        name: "Sommier Tapissier Luxe",
        sku: "SOM-TAP-LUXE",
        category: "sommiers",
        business: "fima-couchage",
        price: 329000,
        stock: 20,
        lowStockThreshold: 5,
        unit: "pièce",
        description: "Sommier tapissier 18 lattes bois massif, finition tissu anti-acariens. Structure robuste garantie 10 ans.",
        shortDescription: "Sommier tapissier 18 lattes bois massif",
        images: ["https://images.unsplash.com/photo-1723111568816-48c31eca8132?w=1080"],
        tags: ["sommier", "tapissier", "bois massif"],
        featured: false,
        badge: null,
        discount: null,
        material: "Bois",
        size: ["90x190", "140x190", "160x200"],
        status: "active",
        createdAt: new Date().toISOString()
      },
      
      // FIMA DESIGN - Menuiserie
      {
        id: crypto.randomUUID(),
        name: "Bibliothèque sur Mesure",
        sku: "BIB-MESURE",
        category: "menuiserie",
        business: "fima-design",
        price: 1250000,
        stock: 5,
        lowStockThreshold: 2,
        unit: "pièce",
        description: "Bibliothèque en chêne massif, finition vernis naturel, modules modulaires. Fabrication artisanale française.",
        shortDescription: "Bibliothèque chêne massif modulaire",
        images: ["https://images.unsplash.com/photo-1682718619781-252f23e21132?w=1080"],
        tags: ["bibliothèque", "chêne", "sur mesure"],
        featured: true,
        badge: "Sur mesure",
        discount: null,
        material: "Chêne massif",
        size: ["200x180", "250x220", "300x250"],
        status: "active",
        createdAt: new Date().toISOString()
      },
      
      // FIMA DESIGN - Ameublement
      {
        id: crypto.randomUUID(),
        name: "Table à Manger Design",
        sku: "TAB-DES",
        category: "ameublement",
        business: "fima-design",
        price: 1650000,
        stock: 8,
        lowStockThreshold: 2,
        unit: "pièce",
        description: "Table en noyer massif, pieds acier brossé, finition huile naturelle. Design contemporain et élégant.",
        shortDescription: "Table noyer massif pieds acier",
        images: ["https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1080"],
        tags: ["table", "noyer", "design", "contemporain"],
        featured: true,
        badge: "Nouveau",
        discount: null,
        material: "Noyer massif",
        size: ["160x90", "180x90", "200x100"],
        status: "active",
        createdAt: new Date().toISOString()
      },
      
      // FIMA DESIGN - Cuisines
      {
        id: crypto.randomUUID(),
        name: "Cuisine Équipée Premium",
        sku: "CUI-EQUIP-PREM",
        category: "cuisines",
        business: "fima-design",
        price: 8500000,
        compareAtPrice: 10200000,
        stock: 2,
        lowStockThreshold: 1,
        unit: "projet",
        description: "Cuisine complète, plan de travail quartz, électroménager intégré. Installation et pose incluses.",
        shortDescription: "Cuisine complète avec plan quartz",
        images: ["https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1080"],
        tags: ["cuisine", "équipée", "premium", "quartz"],
        featured: true,
        badge: "Projet complet",
        discount: "17%",
        material: "Laque + Quartz",
        size: ["L-shape", "U-shape", "Linéaire"],
        status: "active",
        createdAt: new Date().toISOString()
      },
      
      // FIMA DESIGN - Dressings
      {
        id: crypto.randomUUID(),
        name: "Dressing Walk-in",
        sku: "DRE-WALK",
        category: "dressings",
        business: "fima-design",
        price: 3200000,
        stock: 3,
        lowStockThreshold: 1,
        unit: "pièce",
        description: "Dressing sur mesure, éclairage LED intégré, miroirs escamotables. Optimisation maximale de l'espace.",
        shortDescription: "Dressing sur mesure avec LED",
        images: ["https://images.unsplash.com/photo-1646840725886-73171776d2bc?w=1080"],
        tags: ["dressing", "walk-in", "sur mesure", "LED"],
        featured: false,
        badge: "Sur mesure",
        discount: null,
        material: "Mélaminé",
        size: ["250x200", "300x250", "350x300"],
        status: "active",
        createdAt: new Date().toISOString()
      },
      
      // UNIVERS GLASS - Vitrerie
      {
        id: crypto.randomUUID(),
        name: "Vitrage Double Sécurit",
        sku: "VIT-DOU-SEC",
        category: "vitrerie",
        business: "univers-glass",
        price: 185000, // Prix au m²
        stock: 100,
        lowStockThreshold: 20,
        unit: "m²",
        description: "Vitrage double 4/16/4, argon, coating bas émissif, sécurité renforcée. Isolation thermique et phonique optimale.",
        shortDescription: "Vitrage double sécurit 4/16/4",
        images: ["https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=1080"],
        tags: ["vitrage", "double", "sécurit", "isolation"],
        featured: true,
        badge: "Sécurisé",
        discount: null,
        material: "Verre sécurit",
        size: ["Sur mesure"],
        status: "active",
        createdAt: new Date().toISOString()
      },
      
      // UNIVERS GLASS - Menuiserie Aluminium
      {
        id: crypto.randomUUID(),
        name: "Porte-Fenêtre Alu Premium",
        sku: "PF-ALU-PREM",
        category: "menuiserie-aluminium",
        business: "univers-glass",
        price: 1850000,
        stock: 10,
        lowStockThreshold: 3,
        unit: "pièce",
        description: "Porte-fenêtre aluminium à rupture de pont thermique, double vitrage, seuil PMR. Garantie 10 ans.",
        shortDescription: "Porte-fenêtre alu rupture pont thermique",
        images: ["https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=1080"],
        tags: ["porte-fenêtre", "aluminium", "isolation"],
        featured: false,
        badge: null,
        discount: null,
        material: "Aluminium",
        size: ["215x140", "215x180", "215x240"],
        status: "active",
        createdAt: new Date().toISOString()
      }
    ]

    // Sauvegarder chaque produit avec son UUID comme clé
    for (const product of defaultProducts) {
      await kv.set(`products:${product.id}`, product)
    }

    return c.json({ 
      success: true, 
      message: 'Default products initialized successfully',
      data: {
        products: defaultProducts.length,
        byCat: {
          'fima-couchage': defaultProducts.filter((p: any) => p.business === 'fima-couchage').length,
          'fima-design': defaultProducts.filter((p: any) => p.business === 'fima-design').length,
          'univers-glass': defaultProducts.filter((p: any) => p.business === 'univers-glass').length
        }
      }
    })
  } catch (error) {
    console.log('Error initializing products:', error)
    return c.json({ success: false, error: 'Failed to initialize products' }, 500)
  }
})

// Routes pour les projets/solutions
app.get('/make-server-98c6ec1c/projects', async (c) => {
  try {
    const category = c.req.query('category')
    const featured = c.req.query('featured')
    const limit = c.req.query('limit')
    
    let projects = await kv.getByPrefix('projects:') || []
    
    // Filtrer par catégorie si spécifié
    if (category && category !== 'tous') {
      projects = projects.filter((p: any) => p.category === category)
    }
    
    // Filtrer par featured si spécifié
    if (featured === 'true') {
      projects = projects.filter((p: any) => p.featured === true)
    }
    
    // Filtrer les projets publiés uniquement
    projects = projects.filter((p: any) => p.published === true)
    
    // Trier par featured d'abord, puis par année décroissante
    projects.sort((a: any, b: any) => {
      // Featured first
      if (a.featured && !b.featured) return -1
      if (!a.featured && b.featured) return 1
      
      // Then by year (descending)
      return parseInt(b.year) - parseInt(a.year)
    })
    
    // Limiter le nombre de résultats si spécifié
    if (limit) {
      projects = projects.slice(0, parseInt(limit))
    }
    
    return c.json({ success: true, data: projects })
  } catch (error) {
    console.log('Error fetching projects:', error)
    return c.json({ success: false, error: 'Failed to fetch projects' }, 500)
  }
})

app.get('/make-server-98c6ec1c/projects/:slug', async (c) => {
  try {
    const slug = c.req.param('slug')
    const projects = await kv.getByPrefix('projects:') || []
    const project = projects.find((p: any) => p.slug === slug || p.id === slug)
    
    if (!project) {
      return c.json({ success: false, error: 'Project not found' }, 404)
    }
    
    return c.json({ success: true, data: project })
  } catch (error) {
    console.log('Error fetching project:', error)
    return c.json({ success: false, error: 'Failed to fetch project' }, 500)
  }
})

app.post('/make-server-98c6ec1c/projects', async (c) => {
  try {
    const accessToken = c.req.header('Authorization')?.split(' ')[1]
    const { data: { user }, error } = await supabase.auth.getUser(accessToken)
    if (!user?.id) {
      return c.json({ success: false, error: 'Unauthorized' }, 401)
    }

    const projectData = await c.req.json()
    
    // Générer un UUID pour le projet
    const projectId = crypto.randomUUID()
    const now = new Date().toISOString()
    
    const newProject = {
      id: projectId,
      ...projectData,
      createdAt: now
    }
    
    await kv.set(`projects:${projectId}`, newProject)
    
    return c.json({ success: true, data: newProject, message: 'Project created successfully' })
  } catch (error) {
    console.log('Error creating project:', error)
    return c.json({ success: false, error: 'Failed to create project' }, 500)
  }
})

app.put('/make-server-98c6ec1c/projects/:id', async (c) => {
  try {
    const accessToken = c.req.header('Authorization')?.split(' ')[1]
    const { data: { user }, error } = await supabase.auth.getUser(accessToken)
    if (!user?.id) {
      return c.json({ success: false, error: 'Unauthorized' }, 401)
    }

    const projectId = c.req.param('id')
    const projectData = await c.req.json()
    
    const existingProject = await kv.get(`projects:${projectId}`)
    if (!existingProject) {
      return c.json({ success: false, error: 'Project not found' }, 404)
    }
    
    const updatedProject = {
      ...existingProject,
      ...projectData,
      updatedAt: new Date().toISOString()
    }
    
    await kv.set(`projects:${projectId}`, updatedProject)
    
    return c.json({ success: true, data: updatedProject, message: 'Project updated successfully' })
  } catch (error) {
    console.log('Error updating project:', error)
    return c.json({ success: false, error: 'Failed to update project' }, 500)
  }
})

app.delete('/make-server-98c6ec1c/projects/:id', async (c) => {
  try {
    const accessToken = c.req.header('Authorization')?.split(' ')[1]
    const { data: { user }, error } = await supabase.auth.getUser(accessToken)
    if (!user?.id) {
      return c.json({ success: false, error: 'Unauthorized' }, 401)
    }

    const projectId = c.req.param('id')
    await kv.del(`projects:${projectId}`)
    
    return c.json({ success: true, message: 'Project deleted successfully' })
  } catch (error) {
    console.log('Error deleting project:', error)
    return c.json({ success: false, error: 'Failed to delete project' }, 500)
  }
})

// Route pour initialiser les projets de démonstration
app.post('/make-server-98c6ec1c/init-projects', async (c) => {
  try {
    const defaultProjects = [
      // Projet 1 - Résidentiel Featured
      {
        id: crypto.randomUUID(),
        title: "Résidence Les Jardins de Cocody",
        slug: "residence-jardins-cocody",
        category: "residential",
        categoryName: "Résidentiel",
        location: "Cocody, Abidjan",
        city: "Abidjan",
        country: "Côte d'Ivoire",
        year: "2024",
        completionDate: "2024-06-15",
        client: "Promoteur Excellence",
        clientLogo: null,
        description: "Aménagement complet de 24 villas de standing avec mobilier sur-mesure et literie premium.",
        longDescription: "Ce projet d'envergure comprend l'aménagement complet de 24 villas de standing dans le quartier résidentiel de Cocody. Chaque villa a été équipée de mobilier sur-mesure, de literie premium FIMA Couchage, et de menuiseries aluminium UNIVERS GLASS pour une isolation optimale.",
        challenges: "Livraison simultanée de 24 villas avec des exigences de qualité très élevées et des délais serrés.",
        solution: "Mise en place d'une chaîne logistique optimisée et d'équipes dédiées pour chaque phase du projet.",
        results: "Livraison à temps, satisfaction client à 100%, et plusieurs demandes de projets similaires.",
        images: ["https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1080"],
        featuredImage: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1080",
        budget: "2.5Mds FCFA",
        surface: "4,800 m²",
        duration: "8 mois",
        businessUnits: ["FIMA Couchage", "FIMA Design", "UNIVERS GLASS"],
        products: ["MAT-CONF-PREM", "SOM-TAP-LUXE", "BIB-MESURE"],
        featured: true,
        published: true,
        awards: ["Prix Architecture 2024"],
        tags: ["Luxe", "Écologique", "Sur-mesure"],
        testimonial: {
          content: "FIMA a transformé notre vision en réalité. La qualité du travail et le respect des délais ont dépassé nos attentes.",
          author: "Michel Tanoh",
          role: "Directeur - Promoteur Excellence",
          rating: 5
        },
        metrics: [
          { label: "Villas équipées", value: "24" },
          { label: "Surface totale", value: "4,800 m²" },
          { label: "Satisfaction client", value: "100%" }
        ],
        gallery: [
          "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1080",
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1080",
          "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1080"
        ],
        createdAt: new Date().toISOString()
      },
      
      // Projet 2 - Hôtellerie Featured
      {
        id: crypto.randomUUID(),
        title: "Hôtel Pullman Abidjan",
        slug: "hotel-pullman-abidjan",
        category: "hospitality",
        categoryName: "Hôtellerie",
        location: "Plateau, Abidjan",
        city: "Abidjan",
        country: "Côte d'Ivoire",
        year: "2023",
        completionDate: "2023-11-30",
        client: "Groupe Pullman",
        clientLogo: null,
        description: "Rénovation complète de 180 chambres avec literie premium et mobilier design.",
        longDescription: "Projet majeur de rénovation hôtelière comprenant 180 chambres, espaces communs, restaurant et spa. Fourniture de literie premium FIMA Couchage selon les standards internationaux Pullman.",
        challenges: "Rénovation en site occupé avec maintien partiel de l'activité hôtelière.",
        solution: "Planification par phases avec rotation des étages pour minimiser l'impact sur les clients.",
        results: "Augmentation de 35% du taux d'occupation et excellent retour client sur le confort.",
        images: ["https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1080"],
        featuredImage: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1080",
        budget: "1.8Mds FCFA",
        surface: "12,000 m²",
        duration: "10 mois",
        businessUnits: ["FIMA Couchage", "FIMA Design", "UNIVERS GLASS"],
        products: ["MAT-MEM-LUXE", "ORL-ERGO", "TAB-DES"],
        featured: true,
        published: true,
        awards: ["Best Hotel Renovation 2023"],
        tags: ["Hôtellerie", "Luxe", "International"],
        testimonial: {
          content: "La qualité de la literie FIMA a considérablement amélioré l'expérience de nos clients. Un partenaire fiable et professionnel.",
          author: "Sophie Martin",
          role: "Directrice Générale - Pullman Abidjan",
          rating: 5
        },
        metrics: [
          { label: "Chambres rénovées", value: "180" },
          { label: "Augmentation occupation", value: "+35%" },
          { label: "Note satisfaction", value: "4.8/5" }
        ],
        gallery: [
          "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1080",
          "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1080"
        ],
        createdAt: new Date().toISOString()
      },
      
      // Projet 3 - Commercial Featured
      {
        id: crypto.randomUUID(),
        title: "Immeuble NSIA",
        slug: "immeuble-nsia",
        category: "commercial",
        categoryName: "Commercial",
        location: "Plateau, Abidjan",
        city: "Abidjan",
        country: "Côte d'Ivoire",
        year: "2023",
        completionDate: "2023-09-20",
        client: "Groupe NSIA",
        clientLogo: null,
        description: "Aménagement de 15 étages de bureaux avec mobilier professionnel et menuiseries aluminium.",
        longDescription: "Aménagement complet de la nouvelle tour NSIA avec espaces de travail modernes, salles de réunion équipées, et menuiseries aluminium haute performance pour une isolation optimale.",
        challenges: "Coordination de multiples corps de métier et respect des normes internationales de bureaux.",
        solution: "Gestion de projet intégrée avec planning détaillé et checkpoints hebdomadaires.",
        results: "Certification HQE obtenue, espaces de travail modernes et fonctionnels appréciés des collaborateurs.",
        images: ["https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1080"],
        featuredImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1080",
        budget: "3.2Mds FCFA",
        surface: "18,500 m²",
        duration: "12 mois",
        businessUnits: ["FIMA Design", "UNIVERS GLASS"],
        products: ["BIB-MESURE", "CUI-EQUIP-PREM", "PF-ALU-PREM"],
        featured: true,
        published: true,
        awards: [],
        tags: ["Bureaux", "Structurel", "High-tech"],
        testimonial: {
          content: "FIMA a su comprendre nos besoins et livrer des espaces de travail modernes qui favorisent la productivité.",
          author: "Amadou Koné",
          role: "DG Groupe NSIA",
          rating: 5
        },
        metrics: [
          { label: "Étages aménagés", value: "15" },
          { label: "Postes de travail", value: "450" },
          { label: "Certification", value: "HQE" }
        ],
        gallery: [
          "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1080",
          "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1080"
        ],
        createdAt: new Date().toISOString()
      },
      
      // Projet 4 - Institutionnel
      {
        id: crypto.randomUUID(),
        title: "Ministère des Finances",
        slug: "ministere-finances",
        category: "institutional",
        categoryName: "Institutionnel",
        location: "Plateau, Abidjan",
        city: "Abidjan",
        country: "Côte d'Ivoire",
        year: "2022",
        completionDate: "2022-12-15",
        client: "État de Côte d'Ivoire",
        clientLogo: null,
        description: "Modernisation des espaces de travail avec mobilier ergonomique et durable.",
        longDescription: "Projet de modernisation complète des bureaux du Ministère avec mobilier ergonomique, espaces collaboratifs, et solutions de rangement optimisées.",
        challenges: "Contraintes budgétaires et exigences de durabilité dans un contexte institutionnel.",
        solution: "Sélection de matériaux durables et conception optimisée pour un excellent rapport qualité-prix.",
        results: "Amélioration significative du confort de travail et réduction des arrêts maladie.",
        images: ["https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1080"],
        featuredImage: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1080",
        budget: "800M FCFA",
        surface: "8,200 m²",
        duration: "6 mois",
        businessUnits: ["FIMA Design"],
        products: ["BIB-MESURE", "DRE-WALK"],
        featured: false,
        published: true,
        awards: [],
        tags: ["Institutionnel", "Ergonomique", "Durable"],
        metrics: [
          { label: "Bureaux aménagés", value: "320" },
          { label: "Surface rénovée", value: "8,200 m²" },
          { label: "Économies énergie", value: "-25%" }
        ],
        gallery: ["https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1080"],
        createdAt: new Date().toISOString()
      },
      
      // Projet 5 - Résidentiel
      {
        id: crypto.randomUUID(),
        title: "Résidence Le Vallon",
        slug: "residence-le-vallon",
        category: "residential",
        categoryName: "Résidentiel",
        location: "Riviera Golf, Abidjan",
        city: "Abidjan",
        country: "Côte d'Ivoire",
        year: "2023",
        completionDate: "2023-08-30",
        client: "SCI Le Vallon",
        description: "12 appartements haut standing avec literie premium et dressings sur-mesure.",
        images: ["https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1080"],
        featuredImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1080",
        budget: "950M FCFA",
        surface: "2,400 m²",
        duration: "5 mois",
        businessUnits: ["FIMA Couchage", "FIMA Design"],
        products: ["MAT-CONF-PREM", "DRE-WALK"],
        featured: false,
        published: true,
        awards: [],
        tags: ["Résidentiel", "Standing", "Confort"],
        metrics: [
          { label: "Appartements", value: "12" },
          { label: "Surface moyenne", value: "200 m²" }
        ],
        createdAt: new Date().toISOString()
      },
      
      // Projet 6 - Hôtellerie
      {
        id: crypto.randomUUID(),
        title: "Hôtel Étoile du Sud",
        slug: "hotel-etoile-sud",
        category: "hospitality",
        categoryName: "Hôtellerie",
        location: "Grand-Bassam",
        city: "Grand-Bassam",
        country: "Côte d'Ivoire",
        year: "2024",
        completionDate: "2024-03-20",
        client: "Étoile du Sud SA",
        description: "Hôtel boutique 45 chambres avec literie de luxe et mobilier design.",
        images: ["https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1080"],
        featuredImage: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1080",
        budget: "650M FCFA",
        surface: "3,500 m²",
        duration: "7 mois",
        businessUnits: ["FIMA Couchage", "FIMA Design"],
        products: ["MAT-MEM-LUXE", "TAB-DES"],
        featured: false,
        published: true,
        awards: [],
        tags: ["Boutique", "Luxe", "Balnéaire"],
        metrics: [
          { label: "Chambres", value: "45" },
          { label: "Taux occupation", value: "82%" }
        ],
        createdAt: new Date().toISOString()
      },
      
      // Projet 7 - Commercial
      {
        id: crypto.randomUUID(),
        title: "Centre Commercial Playce Marcory",
        slug: "playce-marcory",
        category: "commercial",
        categoryName: "Commercial",
        location: "Marcory, Abidjan",
        city: "Abidjan",
        country: "Côte d'Ivoire",
        year: "2024",
        completionDate: "2024-05-10",
        client: "Playce CI",
        description: "Menuiseries aluminium et vitrerie pour centre commercial moderne.",
        images: ["https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?w=1080"],
        featuredImage: "https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?w=1080",
        budget: "1.2Mds FCFA",
        surface: "15,000 m²",
        duration: "9 mois",
        businessUnits: ["UNIVERS GLASS"],
        products: ["VIT-DOU-SEC", "PF-ALU-PREM"],
        featured: false,
        published: true,
        awards: [],
        tags: ["Retail", "Vitrerie", "Moderne"],
        metrics: [
          { label: "Surface vitrée", value: "5,000 m²" },
          { label: "Boutiques", value: "120" }
        ],
        createdAt: new Date().toISOString()
      },
      
      // Projet 8 - Résidentiel
      {
        id: crypto.randomUUID(),
        title: "Villa Prestige Bingerville",
        slug: "villa-prestige-bingerville",
        category: "residential",
        categoryName: "Résidentiel",
        location: "Bingerville",
        city: "Bingerville",
        country: "Côte d'Ivoire",
        year: "2023",
        completionDate: "2023-07-15",
        client: "Client Privé",
        description: "Villa individuelle sur-mesure avec aménagement intérieur complet.",
        images: ["https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1080"],
        featuredImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1080",
        budget: "450M FCFA",
        surface: "650 m²",
        duration: "4 mois",
        businessUnits: ["FIMA Couchage", "FIMA Design", "UNIVERS GLASS"],
        products: ["MAT-CONF-PREM", "BIB-MESURE", "VIT-DOU-SEC"],
        featured: false,
        published: true,
        awards: [],
        tags: ["Villa", "Sur-mesure", "Luxe"],
        metrics: [
          { label: "Surface habitable", value: "650 m²" },
          { label: "Pièces", value: "8" }
        ],
        createdAt: new Date().toISOString()
      }
    ]

    // Sauvegarder chaque projet avec son UUID comme clé
    for (const project of defaultProjects) {
      await kv.set(`projects:${project.id}`, project)
    }

    return c.json({ 
      success: true, 
      message: 'Default projects initialized successfully',
      data: {
        projects: defaultProjects.length,
        byCategory: {
          residential: defaultProjects.filter((p: any) => p.category === 'residential').length,
          commercial: defaultProjects.filter((p: any) => p.category === 'commercial').length,
          hospitality: defaultProjects.filter((p: any) => p.category === 'hospitality').length,
          institutional: defaultProjects.filter((p: any) => p.category === 'institutional').length
        },
        featured: defaultProjects.filter((p: any) => p.featured).length
      }
    })
  } catch (error) {
    console.log('Error initializing projects:', error)
    return c.json({ success: false, error: 'Failed to initialize projects' }, 500)
  }
})

// Routes pour les catégories de produits
app.get('/make-server-98c6ec1c/product-categories', async (c) => {
  try {
    const business = c.req.query('business')
    const categories = await kv.get('product_categories') || {}
    
    if (business && categories[business]) {
      return c.json({ success: true, data: { [business]: categories[business] } })
    }
    
    return c.json({ success: true, data: categories })
  } catch (error) {
    console.log('Error fetching product categories:', error)
    return c.json({ success: false, error: 'Failed to fetch product categories' }, 500)
  }
})

// Routes pour les catégories CMS créées par l'utilisateur
app.get('/make-server-98c6ec1c/categories', async (c) => {
  try {
    const categories = await kv.get('cms_categories') || []
    return c.json({ success: true, data: categories })
  } catch (error) {
    console.log('Error fetching CMS categories:', error)
    return c.json({ success: false, error: 'Failed to fetch categories' }, 500)
  }
})

app.post('/make-server-98c6ec1c/categories', async (c) => {
  try {
    const categoryData = await c.req.json()
    const categories = await kv.get('cms_categories') || []
    
    // Ajouter la nouvelle catégorie
    const newCategory = {
      ...categoryData,
      id: `cat-${Date.now()}`,
    }
    
    categories.push(newCategory)
    await kv.set('cms_categories', categories)
    
    return c.json({ success: true, data: newCategory, message: 'Category created successfully' })
  } catch (error) {
    console.log('Error creating category:', error)
    return c.json({ success: false, error: 'Failed to create category' }, 500)
  }
})

app.put('/make-server-98c6ec1c/categories/:id', async (c) => {
  try {
    const id = c.req.param('id')
    const categoryData = await c.req.json()
    const categories = await kv.get('cms_categories') || []
    
    const index = categories.findIndex((cat: any) => cat.id === id)
    if (index === -1) {
      return c.json({ success: false, error: 'Category not found' }, 404)
    }
    
    categories[index] = { ...categories[index], ...categoryData }
    await kv.set('cms_categories', categories)
    
    return c.json({ success: true, data: categories[index], message: 'Category updated successfully' })
  } catch (error) {
    console.log('Error updating category:', error)
    return c.json({ success: false, error: 'Failed to update category' }, 500)
  }
})

app.delete('/make-server-98c6ec1c/categories/:id', async (c) => {
  try {
    const id = c.req.param('id')
    const categories = await kv.get('cms_categories') || []
    
    const filteredCategories = categories.filter((cat: any) => cat.id !== id)
    if (filteredCategories.length === categories.length) {
      return c.json({ success: false, error: 'Category not found' }, 404)
    }
    
    await kv.set('cms_categories', filteredCategories)
    
    return c.json({ success: true, message: 'Category deleted successfully' })
  } catch (error) {
    console.log('Error deleting category:', error)
    return c.json({ success: false, error: 'Failed to delete category' }, 500)
  }
})

app.post('/make-server-98c6ec1c/product-categories', async (c) => {
  try {
    const categoriesData = await c.req.json()
    await kv.set('product_categories', categoriesData)
    
    const stats = {
      'fima-couchage': categoriesData['fima-couchage']?.length || 0,
      'fima-design': categoriesData['fima-design']?.length || 0,
      'univers-glass': categoriesData['univers-glass']?.length || 0,
      total: (categoriesData['fima-couchage']?.length || 0) + 
             (categoriesData['fima-design']?.length || 0) + 
             (categoriesData['univers-glass']?.length || 0)
    }
    
    return c.json({ 
      success: true, 
      message: `Product categories initialized successfully - ${stats.total} categories created`,
      data: stats
    })
  } catch (error) {
    console.log('Error saving product categories:', error)
    return c.json({ success: false, error: 'Failed to save product categories' }, 500)
  }
})

// Route de santé
app.get('/make-server-98c6ec1c/health', (c) => {
  return c.json({ success: true, message: 'FIMA server is running', timestamp: new Date().toISOString() })
})

// Routes pour les Hero Slides
app.get('/make-server-98c6ec1c/api/hero-slides', async (c) => {
  try {
    const locale = c.req.query('locale') || 'fr'
    let slides = await kv.getByPrefix('hero-slides:') || []
    
    // Filtrer par active et trier par sort_order
    slides = slides.filter((slide: any) => slide.is_active)
    slides.sort((a: any, b: any) => a.sort_order - b.sort_order)
    
    // Retourner les slides avec leurs traductions dans la locale appropriée
    const slidesWithTranslation = slides.map((slide: any) => {
      const translation = slide.translations?.[locale] || slide.translations?.['fr'] || {
        title: slide.title || '',
        subtitle: slide.subtitle || '',
        description: slide.description || '',
        cta_primary: slide.cta_primary || 'Découvrir',
        badge: slide.badge || ''
      }
      
      return {
        id: slide.id,
        sort_order: slide.sort_order,
        background_image_url: slide.background_image_url,
        is_video: slide.is_video || false,
        video_url: slide.video_url,
        slide_duration: slide.slide_duration || 5000,
        video_play_duration: slide.video_play_duration,
        video_loop: slide.video_loop !== false,
        is_active: slide.is_active,
        cta_bg_color: slide.cta_bg_color || '#FFFFFF',
        cta_text_color: slide.cta_text_color || '#B5C233',
        translation,
        translations: slide.translations
      }
    })
    
    return c.json({ success: true, data: slidesWithTranslation, locale })
  } catch (error) {
    console.log('Error fetching hero slides:', error)
    return c.json({ success: false, error: 'Failed to fetch hero slides' }, 500)
  }
})

app.post('/make-server-98c6ec1c/api/hero-slides', async (c) => {
  try {
    // Vérification auth optionnelle pour le CMS
    const accessToken = c.req.header('Authorization')?.split(' ')[1]
    
    // Pour le moment, on permet la création sans auth pour faciliter le CMS
    // TODO: Implémenter l'auth CMS proprement
    /* 
    const { data: { user }, error } = await supabase.auth.getUser(accessToken)
    if (!user?.id) {
      return c.json({ success: false, error: 'Unauthorized' }, 401)
    }
    */

    const slideData = await c.req.json()
    console.log('📥 Données reçues pour création slide:', slideData)
    
    const slideId = crypto.randomUUID()
    const now = new Date().toISOString()
    
    const newSlide = {
      id: slideId,
      ...slideData,
      created_at: now,
      updated_at: now
    }
    
    console.log('💾 Sauvegarde du slide:', newSlide)
    await kv.set(`hero-slides:${slideId}`, newSlide)
    
    return c.json({ success: true, data: newSlide, message: 'Hero slide created successfully' })
  } catch (error) {
    console.log('❌ Error creating hero slide:', error)
    return c.json({ success: false, error: `Failed to create hero slide: ${error}` }, 500)
  }
})

app.put('/make-server-98c6ec1c/api/hero-slides/:id', async (c) => {
  try {
    // Vérification auth optionnelle pour le CMS
    const accessToken = c.req.header('Authorization')?.split(' ')[1]
    
    // Pour le moment, on permet la modification sans auth pour faciliter le CMS
    // TODO: Implémenter l'auth CMS proprement
    /* 
    const { data: { user }, error } = await supabase.auth.getUser(accessToken)
    if (!user?.id) {
      return c.json({ success: false, error: 'Unauthorized' }, 401)
    }
    */

    const slideId = c.req.param('id')
    const slideData = await c.req.json()
    
    console.log('📥 Données reçues pour modification slide:', slideData)
    
    const existingSlide = await kv.get(`hero-slides:${slideId}`)
    if (!existingSlide) {
      console.log('❌ Slide non trouvé:', slideId)
      return c.json({ success: false, error: 'Hero slide not found' }, 404)
    }
    
    const updatedSlide = {
      ...existingSlide,
      ...slideData,
      updated_at: new Date().toISOString()
    }
    
    console.log('💾 Mise à jour du slide:', updatedSlide)
    await kv.set(`hero-slides:${slideId}`, updatedSlide)
    
    return c.json({ success: true, data: updatedSlide, message: 'Hero slide updated successfully' })
  } catch (error) {
    console.log('❌ Error updating hero slide:', error)
    return c.json({ success: false, error: `Failed to update hero slide: ${error}` }, 500)
  }
})

app.delete('/make-server-98c6ec1c/api/hero-slides/:id', async (c) => {
  try {
    // Vérification auth optionnelle pour le CMS
    const accessToken = c.req.header('Authorization')?.split(' ')[1]
    
    // Pour le moment, on permet la suppression sans auth pour faciliter le CMS
    // TODO: Implémenter l'auth CMS proprement
    /* 
    const { data: { user }, error } = await supabase.auth.getUser(accessToken)
    if (!user?.id) {
      return c.json({ success: false, error: 'Unauthorized' }, 401)
    }
    */

    const slideId = c.req.param('id')
    console.log('🗑️ Suppression du slide:', slideId)
    
    await kv.del(`hero-slides:${slideId}`)
    
    return c.json({ success: true, message: 'Hero slide deleted successfully' })
  } catch (error) {
    console.log('❌ Error deleting hero slide:', error)
    return c.json({ success: false, error: `Failed to delete hero slide: ${error}` }, 500)
  }
})

// ========================================
// Routes pour la Bibliothèque d'Images (Media Library)
// ========================================

// Initialiser le bucket de stockage des images
async function ensureMediaBucket() {
  const bucketName = 'make-98c6ec1c-media'
  const { data: buckets } = await supabase.storage.listBuckets()
  const bucketExists = buckets?.some(bucket => bucket.name === bucketName)
  
  if (!bucketExists) {
    await supabase.storage.createBucket(bucketName, {
      public: true, // Public pour faciliter l'affichage des images
      fileSizeLimit: 10485760 // 10MB max
    })
    console.log('📦 Bucket media créé:', bucketName)
  }
  
  return bucketName
}

// GET - Lister toutes les images de la bibliothèque
app.get('/make-server-98c6ec1c/api/media', async (c) => {
  try {
    const images = await kv.getByPrefix('media:') || []
    
    // Trier par date de création (plus récent en premier)
    images.sort((a: any, b: any) => {
      const dateA = new Date(a.created_at).getTime()
      const dateB = new Date(b.created_at).getTime()
      return dateB - dateA
    })
    
    return c.json({ success: true, data: images })
  } catch (error) {
    console.log('❌ Error fetching media:', error)
    return c.json({ success: false, error: `Failed to fetch media: ${error}` }, 500)
  }
})

// POST - Upload une nouvelle image
app.post('/make-server-98c6ec1c/api/media/upload', async (c) => {
  try {
    const bucketName = await ensureMediaBucket()
    const formData = await c.req.formData()
    const file = formData.get('file') as File
    const title = formData.get('title') as string
    const altText = formData.get('alt_text') as string
    const tags = formData.get('tags') as string
    const category = formData.get('category') as string
    
    if (!file) {
      return c.json({ success: false, error: 'No file provided' }, 400)
    }
    
    // Générer un nom de fichier unique
    const fileExt = file.name.split('.').pop()
    const fileName = `${crypto.randomUUID()}.${fileExt}`
    const filePath = `images/${fileName}`
    
    // Upload vers Supabase Storage
    const fileBuffer = await file.arrayBuffer()
    const { data: uploadData, error: uploadError } = await supabase.storage
      .from(bucketName)
      .upload(filePath, fileBuffer, {
        contentType: file.type,
        upsert: false
      })
    
    if (uploadError) {
      console.log('❌ Upload error:', uploadError)
      return c.json({ success: false, error: `Upload failed: ${uploadError.message}` }, 500)
    }
    
    // Obtenir l'URL publique
    const { data: urlData } = supabase.storage
      .from(bucketName)
      .getPublicUrl(filePath)
    
    const imageUrl = urlData.publicUrl
    
    // Sauvegarder les métadonnées dans KV
    const imageId = crypto.randomUUID()
    const imageData = {
      id: imageId,
      title: title || file.name,
      alt_text: altText || title || file.name,
      url: imageUrl,
      file_name: file.name,
      file_size: file.size,
      file_type: file.type,
      storage_path: filePath,
      tags: tags ? tags.split(',').map((t: string) => t.trim()) : [],
      category: category || 'other',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    }
    
    await kv.set(`media:${imageId}`, imageData)
    
    console.log('✅ Image uploadée:', imageData)
    
    return c.json({ 
      success: true, 
      data: imageData,
      message: 'Image uploaded successfully' 
    })
  } catch (error) {
    console.log('❌ Error uploading media:', error)
    return c.json({ success: false, error: `Failed to upload media: ${error}` }, 500)
  }
})

// PUT - Mettre à jour les métadonnées d'une image
app.put('/make-server-98c6ec1c/api/media/:id', async (c) => {
  try {
    const imageId = c.req.param('id')
    const updates = await c.req.json()
    
    const existingImage = await kv.get(`media:${imageId}`)
    
    if (!existingImage) {
      return c.json({ success: false, error: 'Image not found' }, 404)
    }
    
    const updatedImage = {
      ...existingImage,
      ...updates,
      id: imageId, // Préserver l'ID
      url: existingImage.url, // Préserver l'URL
      storage_path: existingImage.storage_path, // Préserver le path
      created_at: existingImage.created_at, // Préserver la date de création
      updated_at: new Date().toISOString()
    }
    
    await kv.set(`media:${imageId}`, updatedImage)
    
    console.log('✅ Image mise à jour:', updatedImage)
    
    return c.json({ 
      success: true, 
      data: updatedImage,
      message: 'Image updated successfully' 
    })
  } catch (error) {
    console.log('❌ Error updating media:', error)
    return c.json({ success: false, error: `Failed to update media: ${error}` }, 500)
  }
})

// DELETE - Supprimer une image
app.delete('/make-server-98c6ec1c/api/media/:id', async (c) => {
  try {
    const imageId = c.req.param('id')
    const image = await kv.get(`media:${imageId}`)
    
    if (!image) {
      return c.json({ success: false, error: 'Image not found' }, 404)
    }
    
    // Supprimer du storage Supabase
    const bucketName = 'make-98c6ec1c-media'
    const { error: deleteError } = await supabase.storage
      .from(bucketName)
      .remove([image.storage_path])
    
    if (deleteError) {
      console.log('⚠️ Warning: Could not delete from storage:', deleteError)
      // Continue quand même pour supprimer des métadonnées
    }
    
    // Supprimer des métadonnées KV
    await kv.del(`media:${imageId}`)
    
    console.log('✅ Image supprimée:', imageId)
    
    return c.json({ 
      success: true, 
      message: 'Image deleted successfully' 
    })
  } catch (error) {
    console.log('❌ Error deleting media:', error)
    return c.json({ success: false, error: `Failed to delete media: ${error}` }, 500)
  }
})

// Route pour initialiser les hero slides de démonstration
app.post('/make-server-98c6ec1c/api/init-hero-slides', async (c) => {
  try {
    const defaultSlides = [
      // Slide 1: FIMA Couchage - Image statique
      {
        id: crypto.randomUUID(),
        sort_order: 1,
        background_image_url: "https://images.unsplash.com/photo-1718939045285-b67f9e9f9f8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiZWRyb29tJTIwZGVzaWduJTIwY29tZm9ydGFibGV8ZW58MXx8fHwxNzU4MTA2MzMxfDA&ixlib=rb-4.1.0&q=80&w=1080",
        is_video: false,
        video_url: null,
        slide_duration: 5000,
        video_play_duration: null,
        video_loop: true,
        is_active: true,
        cta_bg_color: "#FFFFFF",
        cta_text_color: "#B5C233",
        translations: {
          fr: {
            title: "FIMA Couchage",
            subtitle: "LITERIE PREMIUM OUEST-AFRICAINE",
            description: "Matelas orthopédiques, sommiers renforcés, oreillers ergonomiques. 14 nuits d'essai, livraison gratuite et garantie 10 ans.",
            cta_primary: "Découvrir nos produits",
            badge: "14 NUITS D'ESSAI"
          },
          en: {
            title: "FIMA Bedding",
            subtitle: "PREMIUM WEST AFRICAN BEDDING",
            description: "Orthopedic mattresses, reinforced box springs, ergonomic pillows. 100-night trial, free delivery and 10-year warranty.",
            cta_primary: "Discover our products",
            badge: "100-NIGHT TRIAL"
          }
        },
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      },
      
      // Slide 2: VIDÉO - Visite de notre showroom
      {
        id: crypto.randomUUID(),
        sort_order: 2,
        background_image_url: "https://images.unsplash.com/photo-1556228720-195a672e8a03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaG93cm9vbSUyMGZ1cm5pdHVyZSUyMG1vZGVybnxlbnwxfHx8fDE3NTgyODA2NjF8MA&ixlib=rb-4.1.0&q=80&w=1080",
        is_video: true,
        video_url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
        slide_duration: 12000,
        video_play_duration: 12000,
        video_loop: true,
        is_active: true,
        cta_bg_color: "#FFFFFF",
        cta_text_color: "#B5C233",
        translations: {
          fr: {
            title: "Visitez notre Showroom",
            subtitle: "IMMERSION DANS L'UNIVERS FIMA",
            description: "Découvrez nos espaces d'exposition à Abidjan : 2000m² dédiés au confort et au design.",
            cta_primary: "Voir la visite virtuelle",
            badge: "NOUVEAU"
          },
          en: {
            title: "Visit our Showroom",
            subtitle: "IMMERSION IN THE FIMA UNIVERSE",
            description: "Discover our showrooms in Abidjan: 2000m² dedicated to comfort and design.",
            cta_primary: "See virtual tour",
            badge: "NEW"
          }
        },
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      },
      
      // Slide 3: FIMA Design - Image statique
      {
        id: crypto.randomUUID(),
        sort_order: 3,
        background_image_url: "https://images.unsplash.com/photo-1680210849773-f97a41c6b7ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBraXRjaGVuJTIwaW50ZXJpb3IlMjBkZXNpZ258ZW58MXx8fHwxNzU4MDA0MDcxfDA&ixlib=rb-4.1.0&q=80&w=1080",
        is_video: false,
        video_url: null,
        slide_duration: 5000,
        video_play_duration: null,
        video_loop: true,
        is_active: true,
        cta_bg_color: "#FFFFFF",
        cta_text_color: "#B5C233",
        translations: {
          fr: {
            title: "FIMA Design",
            subtitle: "MENUISERIE & AMEUBLEMENT SUR-MESURE",
            description: "Créations exclusives en bois noble africain. Mobilier contemporain, cuisines équipées, dressings et aménagements complets.",
            cta_primary: "Nos réalisations",
            badge: "FAIT MAIN"
          },
          en: {
            title: "FIMA Design",
            subtitle: "CUSTOM WOODWORK & FURNITURE",
            description: "Exclusive creations in noble African wood. Contemporary furniture, fitted kitchens, dressing rooms and complete fittings.",
            cta_primary: "Our projects",
            badge: "HANDMADE"
          }
        },
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      },
      
      // Slide 4: VIDÉO - Fabrication artisanale
      {
        id: crypto.randomUUID(),
        sort_order: 4,
        background_image_url: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kd29ya2luZyUyMGNyYWZ0c21hbiUyMGZ1cm5pdHVyZXxlbnwxfHx8fDE3NTgyODA2NjF8MA&ixlib=rb-4.1.0&q=80&w=1080",
        is_video: true,
        video_url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        slide_duration: 10000,
        video_play_duration: 10000,
        video_loop: true,
        is_active: true,
        cta_bg_color: "#FFFFFF",
        cta_text_color: "#B5C233",
        translations: {
          fr: {
            title: "Savoir-faire Artisanal",
            subtitle: "40 ANS D'EXCELLENCE",
            description: "Découvrez le processus de création de nos meubles, de la sélection du bois à la finition parfaite.",
            cta_primary: "Voir nos artisans",
            badge: "DEPUIS 1985"
          },
          en: {
            title: "Artisanal Craftsmanship",
            subtitle: "30 YEARS OF EXCELLENCE",
            description: "Discover the creation process of our furniture, from wood selection to perfect finishing.",
            cta_primary: "Meet our craftsmen",
            badge: "SINCE 1994"
          }
        },
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      },
      
      // Slide 5: UNIVERS GLASS - Image statique
      {
        id: crypto.randomUUID(),
        sort_order: 5,
        background_image_url: "https://images.unsplash.com/photo-1662916368397-5a48e96938f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbGFzcyUyMGJ1aWxkaW5nJTIwYXJjaGl0ZWN0dXJlJTIwbW9kZXJufGVufDF8fHx8MTc1ODEwNjMyN3ww&ixlib=rb-4.1.0&q=80&w=1080",
        is_video: false,
        video_url: null,
        slide_duration: 5000,
        video_play_duration: null,
        video_loop: true,
        is_active: true,
        cta_bg_color: "#FFFFFF",
        cta_text_color: "#0EA5E9",
        translations: {
          fr: {
            title: "UNIVERS GLASS",
            subtitle: "VITRERIE & ALUMINIUM PREMIUM",
            description: "Solutions techniques pour l'architecture moderne : baies vitrées, façades, menuiserie aluminium. Expertise reconnue.",
            cta_primary: "Nos solutions",
            badge: "HAUTE TECHNICITÉ"
          },
          en: {
            title: "UNIVERS GLASS",
            subtitle: "PREMIUM GLASS & ALUMINUM",
            description: "Technical solutions for modern architecture: bay windows, facades, aluminum joinery. Recognized expertise.",
            cta_primary: "Our solutions",
            badge: "HIGH TECH"
          }
        },
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      },
      
      // Slide 6: VIDÉO - Projet phare (hôtel de luxe)
      {
        id: crypto.randomUUID(),
        sort_order: 6,
        background_image_url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGxvYmJ5fGVufDF8fHx8MTc1ODI4MDY2MXww&ixlib=rb-4.1.0&q=80&w=1080",
        is_video: true,
        video_url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        slide_duration: 15000,
        video_play_duration: 15000,
        video_loop: false,
        is_active: true,
        cta_bg_color: "#FFFFFF",
        cta_text_color: "#B5C233",
        translations: {
          fr: {
            title: "Nos Grands Projets",
            subtitle: "HÔTELLERIE DE LUXE",
            description: "Découvrez notre dernier projet : 250 chambres équipées pour un complexe hôtelier 5 étoiles à Abidjan.",
            cta_primary: "Voir le projet",
            badge: "RÉFÉRENCE B2B"
          },
          en: {
            title: "Our Major Projects",
            subtitle: "LUXURY HOSPITALITY",
            description: "Discover our latest project: 250 equipped rooms for a 5-star hotel complex in Abidjan.",
            cta_primary: "View project",
            badge: "B2B REFERENCE"
          }
        },
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      },
      
      // Slide 7: Groupe FIMA - Image statique de synthèse
      {
        id: crypto.randomUUID(),
        sort_order: 7,
        background_image_url: "https://images.unsplash.com/photo-1497366216548-37526070297c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG9mZmljZSUyMHRlYW0lMjBtb2Rlcm58ZW58MXx8fHwxNzU4MjgwNjYxfDA&ixlib=rb-4.1.0&q=80&w=1080",
        is_video: false,
        video_url: null,
        slide_duration: 6000,
        video_play_duration: null,
        video_loop: true,
        is_active: true,
        cta_bg_color: "#FFFFFF",
        cta_text_color: "#B5C233",
        translations: {
          fr: {
            title: "Groupe FIMA",
            subtitle: "3 MÉTIERS, 1 EXCELLENCE",
            description: "Leader ouest-africain de l'habitat et de l'aménagement. Couchage, Design et Vitrerie pour vos projets B2B et B2C.",
            cta_primary: "Découvrir le groupe",
            badge: "PARTENAIRE DE CONFIANCE"
          },
          en: {
            title: "FIMA Group",
            subtitle: "3 BUSINESSES, 1 EXCELLENCE",
            description: "West African leader in housing and development. Bedding, Design and Glass for your B2B and B2C projects.",
            cta_primary: "Discover the group",
            badge: "TRUSTED PARTNER"
          }
        },
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      }
    ]

    // Sauvegarder chaque slide avec son UUID comme clé
    for (const slide of defaultSlides) {
      await kv.set(`hero-slides:${slide.id}`, slide)
    }

    return c.json({ 
      success: true, 
      message: 'Hero slides initialized successfully with 7 slides (3 videos + 4 images)',
      data: {
        total_slides: defaultSlides.length,
        video_slides: defaultSlides.filter(s => s.is_video).length,
        image_slides: defaultSlides.filter(s => !s.is_video).length,
        slides: defaultSlides.map(s => ({
          order: s.sort_order,
          type: s.is_video ? 'VIDEO' : 'IMAGE',
          title_fr: s.translations.fr.title
        }))
      }
    })
  } catch (error) {
    console.log('Error initializing hero slides:', error)
    return c.json({ success: false, error: 'Failed to initialize hero slides' }, 500)
  }
})

// Routes pour les video stories (nouveau système avec Types.md)
app.get('/make-server-98c6ec1c/video-stories', async (c) => {
  try {
    console.log('Fetching video stories...')
    let videoStories = []
    
    try {
      const result = await kv.getByPrefix('video-stories:')
      videoStories = result || []
      console.log(`Found ${videoStories.length} video stories`)
    } catch (kvError) {
      console.log('KV error while fetching video stories:', kvError)
      // Continue with empty array instead of failing
      videoStories = []
    }
    
    // S'assurer que videoStories est un tableau
    if (!Array.isArray(videoStories)) {
      console.log('Warning: videoStories is not an array, converting to empty array')
      videoStories = []
    }
    
    const category = c.req.query('category')
    const featured = c.req.query('featured')
    
    // Filtrer par catégorie si spécifié
    if (category && category !== 'all') {
      videoStories = videoStories.filter((v: any) => v?.category === category)
    }
    
    // Filtrer par featured si spécifié
    if (featured === 'true') {
      videoStories = videoStories.filter((v: any) => v?.featured === true)
    }
    
    // Trier par order, featured, puis par date
    if (videoStories.length > 0) {
      videoStories.sort((a: any, b: any) => {
        // Order first
        if (a.order !== undefined && b.order !== undefined) {
          if (a.order !== b.order) return a.order - b.order
        }
        
        // Featured second
        if (a.featured && !b.featured) return -1
        if (!a.featured && b.featured) return 1
        
        // Then by date
        const dateA = new Date(a?.publishedDate || a?.createdAt || Date.now()).getTime()
        const dateB = new Date(b?.publishedDate || b?.createdAt || Date.now()).getTime()
        return dateB - dateA
      })
    }
    
    return c.json({ success: true, data: videoStories })
  } catch (error) {
    console.log('Error fetching video stories:', error)
    return c.json({ success: false, error: `Failed to fetch video stories: ${error?.message || String(error)}` }, 500)
  }
})

app.get('/make-server-98c6ec1c/video-stories/:id', async (c) => {
  try {
    const id = c.req.param('id')
    const videoStory = await kv.get(`video-stories:${id}`)
    
    if (!videoStory) {
      return c.json({ success: false, error: 'Video story not found' }, 404)
    }
    
    return c.json({ success: true, data: videoStory })
  } catch (error) {
    console.log('Error fetching video story:', error)
    return c.json({ success: false, error: 'Failed to fetch video story' }, 500)
  }
})

app.post('/make-server-98c6ec1c/video-stories', async (c) => {
  try {
    const accessToken = c.req.header('Authorization')?.split(' ')[1]
    const { data: { user }, error } = await supabase.auth.getUser(accessToken)
    if (!user?.id) {
      return c.json({ success: false, error: 'Unauthorized' }, 401)
    }

    const videoStoryData = await c.req.json()
    
    // Générer un UUID pour la video story
    const videoStoryId = crypto.randomUUID()
    const now = new Date().toISOString()
    
    const newVideoStory = {
      id: videoStoryId,
      ...videoStoryData,
      createdAt: now
    }
    
    await kv.set(`video-stories:${videoStoryId}`, newVideoStory)
    
    return c.json({ success: true, data: newVideoStory, message: 'Video story created successfully' })
  } catch (error) {
    console.log('Error creating video story:', error)
    return c.json({ success: false, error: 'Failed to create video story' }, 500)
  }
})

app.put('/make-server-98c6ec1c/video-stories/:id', async (c) => {
  try {
    const accessToken = c.req.header('Authorization')?.split(' ')[1]
    const { data: { user }, error } = await supabase.auth.getUser(accessToken)
    if (!user?.id) {
      return c.json({ success: false, error: 'Unauthorized' }, 401)
    }

    const id = c.req.param('id')
    const videoStoryData = await c.req.json()
    
    const existingVideoStory = await kv.get(`video-stories:${id}`)
    
    if (!existingVideoStory) {
      return c.json({ success: false, error: 'Video story not found' }, 404)
    }
    
    const updatedVideoStory = {
      ...existingVideoStory,
      ...videoStoryData,
      id, // Preserve ID
      updatedAt: new Date().toISOString()
    }
    
    await kv.set(`video-stories:${id}`, updatedVideoStory)
    
    return c.json({ success: true, data: updatedVideoStory, message: 'Video story updated successfully' })
  } catch (error) {
    console.log('Error updating video story:', error)
    return c.json({ success: false, error: 'Failed to update video story' }, 500)
  }
})

app.delete('/make-server-98c6ec1c/video-stories/:id', async (c) => {
  try {
    const accessToken = c.req.header('Authorization')?.split(' ')[1]
    const { data: { user }, error } = await supabase.auth.getUser(accessToken)
    if (!user?.id) {
      return c.json({ success: false, error: 'Unauthorized' }, 401)
    }

    const id = c.req.param('id')
    
    const existingVideoStory = await kv.get(`video-stories:${id}`)
    
    if (!existingVideoStory) {
      return c.json({ success: false, error: 'Video story not found' }, 404)
    }
    
    await kv.del(`video-stories:${id}`)
    
    return c.json({ success: true, message: 'Video story deleted successfully' })
  } catch (error) {
    console.log('Error deleting video story:', error)
    return c.json({ success: false, error: 'Failed to delete video story' }, 500)
  }
})

// Route pour initialiser les video stories de démonstration
app.post('/make-server-98c6ec1c/init-video-stories', async (c) => {
  try {
    const defaultVideoStories = [
      {
        id: crypto.randomUUID(),
        titleFr: 'Transformation Complète d\'une Suite Hôtelière',
        titleEn: 'Complete Hotel Suite Transformation',
        descriptionFr: 'Découvrez comment FIMA a transformé une suite hôtelière avec du mobilier sur mesure et une literie premium',
        descriptionEn: 'Discover how FIMA transformed a hotel suite with custom furniture and premium bedding',
        videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        thumbnailUrl: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=1080',
        duration: '3:45',
        category: 'general',
        featured: true,
        published: true,
        publishedDate: '2024-01-15',
        order: 1,
        quoteFr: 'FIMA a transformé notre vision en réalité avec un professionnalisme exceptionnel.',
        quoteEn: 'FIMA transformed our vision into reality with exceptional professionalism.',
        quoteAuthorFr: 'Marie Diallo, Directrice Générale - Hôtel Le Palmier',
        quoteAuthorEn: 'Marie Diallo, General Manager - Hotel Le Palmier',
        createdAt: new Date().toISOString()
      },
      {
        id: crypto.randomUUID(),
        titleFr: 'Installation de Literie Premium - Résidence Cocody',
        titleEn: 'Premium Bedding Installation - Cocody Residence',
        descriptionFr: 'Une installation de literie haut de gamme dans une résidence de luxe à Cocody',
        descriptionEn: 'High-end bedding installation in a luxury residence in Cocody',
        videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        thumbnailUrl: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=1080',
        duration: '2:30',
        category: 'couchage',
        featured: true,
        published: true,
        publishedDate: '2024-02-01',
        order: 2,
        createdAt: new Date().toISOString()
      },
      {
        id: crypto.randomUUID(),
        titleFr: 'Projet Menuiserie sur Mesure - Villa Moderne',
        titleEn: 'Custom Carpentry Project - Modern Villa',
        descriptionFr: 'Conception et installation de menuiserie sur mesure pour une villa contemporaine',
        descriptionEn: 'Design and installation of custom carpentry for a contemporary villa',
        videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        thumbnailUrl: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1080',
        duration: '4:15',
        category: 'design',
        featured: false,
        published: true,
        publishedDate: '2024-02-10',
        order: 3,
        createdAt: new Date().toISOString()
      },
      {
        id: crypto.randomUUID(),
        titleFr: 'Installation Vitrerie & Aluminium - Immeuble de Bureaux',
        titleEn: 'Glass & Aluminum Installation - Office Building',
        descriptionFr: 'Installation complète de vitrerie et structures aluminium pour un immeuble de bureaux',
        descriptionEn: 'Complete glass and aluminum structure installation for an office building',
        videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        thumbnailUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1080',
        duration: '5:20',
        category: 'glass',
        featured: false,
        published: true,
        publishedDate: '2024-02-15',
        order: 4,
        createdAt: new Date().toISOString()
      },
      {
        id: crypto.randomUUID(),
        titleFr: 'Témoignage Client - Restaurant Le Jardin',
        titleEn: 'Customer Testimonial - Le Jardin Restaurant',
        descriptionFr: 'Le propriétaire du Restaurant Le Jardin partage son expérience avec FIMA',
        descriptionEn: 'The owner of Le Jardin Restaurant shares their experience with FIMA',
        videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        thumbnailUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1080',
        duration: '2:15',
        category: 'general',
        featured: false,
        published: true,
        publishedDate: '2024-02-20',
        order: 5,
        createdAt: new Date().toISOString()
      }
    ]

    // Sauvegarder chaque video story avec son UUID comme clé
    for (const videoStory of defaultVideoStories) {
      await kv.set(`video-stories:${videoStory.id}`, videoStory)
    }

    return c.json({ 
      success: true, 
      message: 'Default video stories initialized successfully',
      data: {
        videoStories: defaultVideoStories.length
      }
    })
  } catch (error) {
    console.log('Error initializing video stories:', error)
    return c.json({ success: false, error: 'Failed to initialize video stories' }, 500)
  }
})

// Routes pour la présentation de l'entreprise
app.get('/make-server-98c6ec1c/company-presentation', async (c) => {
  try {
    const presentation = await kv.get('company-presentation')
    
    if (!presentation) {
      return c.json({ success: false, error: 'Company presentation not found' }, 404)
    }
    
    return c.json({ success: true, data: presentation })
  } catch (error) {
    console.log('Error fetching company presentation:', error)
    return c.json({ success: false, error: 'Failed to fetch company presentation' }, 500)
  }
})

app.put('/make-server-98c6ec1c/company-presentation', async (c) => {
  try {
    const accessToken = c.req.header('Authorization')?.split(' ')[1]
    const { data: { user }, error } = await supabase.auth.getUser(accessToken)
    if (!user?.id) {
      return c.json({ success: false, error: 'Unauthorized' }, 401)
    }

    const presentationData = await c.req.json()
    
    const existingPresentation = await kv.get('company-presentation')
    
    const updatedPresentation = {
      ...existingPresentation,
      ...presentationData,
      updatedAt: new Date().toISOString()
    }
    
    await kv.set('company-presentation', updatedPresentation)
    
    return c.json({ success: true, data: updatedPresentation, message: 'Company presentation updated successfully' })
  } catch (error) {
    console.log('Error updating company presentation:', error)
    return c.json({ success: false, error: 'Failed to update company presentation' }, 500)
  }
})

// Routes pour l'équipe (team members) - nouveau système multilingue
app.get('/make-server-98c6ec1c/team', async (c) => {
  try {
    let teamMembers = await kv.getByPrefix('team:') || []
    
    // Trier par ordre
    teamMembers.sort((a: any, b: any) => a.order - b.order)
    
    return c.json({ success: true, data: teamMembers })
  } catch (error) {
    console.log('Error fetching team members:', error)
    return c.json({ success: false, error: 'Failed to fetch team members' }, 500)
  }
})

app.get('/make-server-98c6ec1c/team/:id', async (c) => {
  try {
    const id = c.req.param('id')
    const teamMember = await kv.get(`team:${id}`)
    
    if (!teamMember) {
      return c.json({ success: false, error: 'Team member not found' }, 404)
    }
    
    return c.json({ success: true, data: teamMember })
  } catch (error) {
    console.log('Error fetching team member:', error)
    return c.json({ success: false, error: 'Failed to fetch team member' }, 500)
  }
})

app.post('/make-server-98c6ec1c/team', async (c) => {
  try {
    const accessToken = c.req.header('Authorization')?.split(' ')[1]
    const { data: { user }, error } = await supabase.auth.getUser(accessToken)
    if (!user?.id) {
      return c.json({ success: false, error: 'Unauthorized' }, 401)
    }

    const teamMemberData = await c.req.json()
    
    // Générer un UUID pour le membre
    const memberId = crypto.randomUUID()
    const now = new Date().toISOString()
    
    const newTeamMember = {
      id: memberId,
      ...teamMemberData,
      createdAt: now
    }
    
    await kv.set(`team:${memberId}`, newTeamMember)
    
    return c.json({ success: true, data: newTeamMember, message: 'Team member created successfully' })
  } catch (error) {
    console.log('Error creating team member:', error)
    return c.json({ success: false, error: 'Failed to create team member' }, 500)
  }
})

app.put('/make-server-98c6ec1c/team/:id', async (c) => {
  try {
    const accessToken = c.req.header('Authorization')?.split(' ')[1]
    const { data: { user }, error } = await supabase.auth.getUser(accessToken)
    if (!user?.id) {
      return c.json({ success: false, error: 'Unauthorized' }, 401)
    }

    const id = c.req.param('id')
    const teamMemberData = await c.req.json()
    
    const existingTeamMember = await kv.get(`team:${id}`)
    
    if (!existingTeamMember) {
      return c.json({ success: false, error: 'Team member not found' }, 404)
    }
    
    const updatedTeamMember = {
      ...existingTeamMember,
      ...teamMemberData,
      id, // Preserve ID
      updatedAt: new Date().toISOString()
    }
    
    await kv.set(`team:${id}`, updatedTeamMember)
    
    return c.json({ success: true, data: updatedTeamMember, message: 'Team member updated successfully' })
  } catch (error) {
    console.log('Error updating team member:', error)
    return c.json({ success: false, error: 'Failed to update team member' }, 500)
  }
})

app.delete('/make-server-98c6ec1c/team/:id', async (c) => {
  try {
    const accessToken = c.req.header('Authorization')?.split(' ')[1]
    const { data: { user }, error } = await supabase.auth.getUser(accessToken)
    if (!user?.id) {
      return c.json({ success: false, error: 'Unauthorized' }, 401)
    }

    const id = c.req.param('id')
    
    const existingTeamMember = await kv.get(`team:${id}`)
    
    if (!existingTeamMember) {
      return c.json({ success: false, error: 'Team member not found' }, 404)
    }
    
    await kv.del(`team:${id}`)
    
    return c.json({ success: true, message: 'Team member deleted successfully' })
  } catch (error) {
    console.log('Error deleting team member:', error)
    return c.json({ success: false, error: 'Failed to delete team member' }, 500)
  }
})

// Routes pour la newsletter
app.get('/make-server-98c6ec1c/newsletter/stats', async (c) => {
  try {
    const subscribers = await kv.getByPrefix('newsletter:') || []
    
    const activeSubscribers = subscribers.filter((s: any) => s.active)
    
    const stats = {
      totalSubscribers: subscribers.length,
      activeSubscribers: activeSubscribers.length,
      lastUpdated: new Date().toISOString()
    }
    
    return c.json({ success: true, data: stats })
  } catch (error) {
    console.log('Error fetching newsletter stats:', error)
    return c.json({ success: false, error: 'Failed to fetch newsletter stats' }, 500)
  }
})

app.post('/make-server-98c6ec1c/newsletter/subscribe', async (c) => {
  try {
    const { email, preferences } = await c.req.json()
    
    if (!email) {
      return c.json({ success: false, error: 'Email is required' }, 400)
    }
    
    // Validation de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return c.json({ success: false, error: 'Invalid email address' }, 400)
    }
    
    // Vérifier si l'email existe déjà
    const existingSubscribers = await kv.getByPrefix('newsletter:') || []
    const existingSubscriber = existingSubscribers.find((s: any) => s.email === email)
    
    if (existingSubscriber) {
      // Réactiver si désactivé
      if (!existingSubscriber.active) {
        const reactivatedSubscriber = {
          ...existingSubscriber,
          active: true,
          resubscribedAt: new Date().toISOString()
        }
        await kv.set(`newsletter:${existingSubscriber.id}`, reactivatedSubscriber)
        return c.json({ 
          success: true, 
          data: reactivatedSubscriber, 
          message: 'Newsletter subscription reactivated successfully' 
        })
      }
      
      return c.json({ success: false, error: 'Email already subscribed' }, 400)
    }
    
    // Créer un nouvel abonné
    const subscriberId = crypto.randomUUID()
    const newSubscriber = {
      id: subscriberId,
      email,
      subscribedAt: new Date().toISOString(),
      active: true,
      preferences: preferences || {
        couchage: true,
        design: true,
        glass: true
      }
    }
    
    await kv.set(`newsletter:${subscriberId}`, newSubscriber)
    
    return c.json({ 
      success: true, 
      data: newSubscriber, 
      message: 'Newsletter subscription successful' 
    })
  } catch (error) {
    console.log('Error subscribing to newsletter:', error)
    return c.json({ success: false, error: 'Failed to subscribe to newsletter' }, 500)
  }
})

app.post('/make-server-98c6ec1c/newsletter/unsubscribe', async (c) => {
  try {
    const { email } = await c.req.json()
    
    if (!email) {
      return c.json({ success: false, error: 'Email is required' }, 400)
    }
    
    // Trouver l'abonné
    const subscribers = await kv.getByPrefix('newsletter:') || []
    const subscriber = subscribers.find((s: any) => s.email === email)
    
    if (!subscriber) {
      return c.json({ success: false, error: 'Email not found' }, 404)
    }
    
    // Désactiver l'abonné (soft delete)
    const unsubscribedSubscriber = {
      ...subscriber,
      active: false,
      unsubscribedAt: new Date().toISOString()
    }
    
    await kv.set(`newsletter:${subscriber.id}`, unsubscribedSubscriber)
    
    return c.json({ 
      success: true, 
      message: 'Newsletter unsubscription successful' 
    })
  } catch (error) {
    console.log('Error unsubscribing from newsletter:', error)
    return c.json({ success: false, error: 'Failed to unsubscribe from newsletter' }, 500)
  }
})

// Route pour initialiser des abonnés de démo
app.post('/make-server-98c6ec1c/init-newsletter', async (c) => {
  try {
    const defaultSubscribers = [
      {
        id: '850e8400-e29b-41d4-a716-446655440001',
        email: 'demo1@example.com',
        subscribedAt: '2024-01-01T00:00:00.000Z',
        active: true,
        preferences: { couchage: true, design: true, glass: true }
      },
      {
        id: '850e8400-e29b-41d4-a716-446655440002',
        email: 'demo2@example.com',
        subscribedAt: '2024-01-15T00:00:00.000Z',
        active: true,
        preferences: { couchage: true, design: false, glass: false }
      },
      {
        id: '850e8400-e29b-41d4-a716-446655440003',
        email: 'demo3@example.com',
        subscribedAt: '2024-02-01T00:00:00.000Z',
        active: true,
        preferences: { couchage: false, design: true, glass: false }
      }
    ]

    // Créer les abonnés
    for (const subscriber of defaultSubscribers) {
      await kv.set(`newsletter:${subscriber.id}`, subscriber)
    }

    return c.json({ 
      success: true, 
      message: 'Newsletter subscribers initialized successfully',
      data: {
        subscribers: defaultSubscribers.length
      }
    })
  } catch (error) {
    console.log('Error initializing newsletter subscribers:', error)
    return c.json({ success: false, error: 'Failed to initialize newsletter subscribers' }, 500)
  }
})

// Route pour initialiser l'équipe par défaut
app.post('/make-server-98c6ec1c/init-team', async (c) => {
  try {
    const defaultTeamMembers = [
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
    ]

    // Créer les membres de l'équipe
    for (const teamMember of defaultTeamMembers) {
      await kv.set(`team:${teamMember.id}`, teamMember)
    }

    return c.json({ 
      success: true, 
      message: 'Team members initialized successfully',
      data: {
        members: defaultTeamMembers.length
      }
    })
  } catch (error) {
    console.log('Error initializing team members:', error)
    return c.json({ success: false, error: 'Failed to initialize team members' }, 500)
  }
})

// Route pour initialiser la présentation de l'entreprise
app.post('/make-server-98c6ec1c/init-company-presentation', async (c) => {
  try {
    const defaultPresentation = {
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
    }

    await kv.set('company-presentation', defaultPresentation)

    return c.json({ 
      success: true, 
      message: 'Company presentation initialized successfully',
      data: defaultPresentation
    })
  } catch (error) {
    console.log('Error initializing company presentation:', error)
    return c.json({ success: false, error: 'Failed to initialize company presentation' }, 500)
  }
})

// Route pour initialiser les video stories par d��faut
app.post('/make-server-98c6ec1c/init-video-stories', async (c) => {
  try {
    const defaultVideoStories = [
      {
        id: '550e8400-e29b-41d4-a716-446655440011',
        titleFr: 'Installation facile',
        titleEn: 'Easy installation',
        descriptionFr: 'Découvrez comment installer votre matelas FIMA en quelques minutes',
        descriptionEn: 'Discover how to install your FIMA mattress in minutes',
        videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        thumbnailUrl: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1080',
        duration: '2:30',
        category: 'couchage',
        featured: true,
        published: true,
        publishedDate: '2024-01-10T00:00:00.000Z',
        order: 1,
        createdAt: '2024-01-10T00:00:00.000Z'
      },
      {
        id: '550e8400-e29b-41d4-a716-446655440012',
        titleFr: 'Témoignage client',
        titleEn: 'Customer testimonial',
        descriptionFr: 'M. Kouassi nous parle de son expérience avec FIMA Couchage',
        descriptionEn: 'Mr. Kouassi shares his experience with FIMA Couchage',
        videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        thumbnailUrl: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1080',
        duration: '1:45',
        category: 'couchage',
        featured: true,
        published: true,
        publishedDate: '2024-01-15T00:00:00.000Z',
        order: 2,
        quoteFr: 'Quand une marque repense ses matelas, les changements sont généralement superficiels, et la fermeté et la sensation restent les mêmes, mais le FIMA Premium est un grand départ de l\'ancien modèle. Il est significativement plus ferme et a aussi une sensation différente.',
        quoteEn: 'When a brand rethinks its mattresses, the changes are usually superficial, and the firmness and feel remain the same, but the FIMA Premium is a big departure from the old model. It is significantly firmer and has a different feel as well.',
        quoteAuthorFr: 'Les Numériques',
        quoteAuthorEn: 'Les Numériques',
        createdAt: '2024-01-15T00:00:00.000Z'
      },
      {
        id: '550e8400-e29b-41d4-a716-446655440013',
        titleFr: 'Matelas en détail',
        titleEn: 'Mattress details',
        descriptionFr: 'Explorez les technologies utilisées dans nos matelas premium',
        descriptionEn: 'Explore the technologies used in our premium mattresses',
        videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        thumbnailUrl: 'https://images.unsplash.com/photo-1648634158203-199accfd7afc?w=1080',
        duration: '3:15',
        category: 'couchage',
        featured: false,
        published: true,
        publishedDate: '2024-01-20T00:00:00.000Z',
        order: 3,
        createdAt: '2024-01-20T00:00:00.000Z'
      },
      {
        id: '550e8400-e29b-41d4-a716-446655440014',
        titleFr: 'Confort optimal',
        titleEn: 'Optimal comfort',
        descriptionFr: 'Les secrets du confort FIMA expliqués par nos experts',
        descriptionEn: 'The secrets of FIMA comfort explained by our experts',
        videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        thumbnailUrl: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1080',
        duration: '2:10',
        category: 'couchage',
        featured: false,
        published: true,
        publishedDate: '2024-01-25T00:00:00.000Z',
        order: 4,
        createdAt: '2024-01-25T00:00:00.000Z'
      },
      {
        id: '550e8400-e29b-41d4-a716-446655440015',
        titleFr: 'Qualité premium',
        titleEn: 'Premium quality',
        descriptionFr: 'Fabrication artisanale et contrôle qualité FIMA',
        descriptionEn: 'Artisanal manufacturing and FIMA quality control',
        videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        thumbnailUrl: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1080',
        duration: '1:55',
        category: 'couchage',
        featured: false,
        published: true,
        publishedDate: '2024-01-30T00:00:00.000Z',
        order: 5,
        createdAt: '2024-01-30T00:00:00.000Z'
      }
    ]

    // Créer les video stories
    for (const videoStory of defaultVideoStories) {
      await kv.set(`video-stories:${videoStory.id}`, videoStory)
    }

    return c.json({ 
      success: true, 
      message: 'Default video stories initialized successfully',
      data: {
        videoStories: defaultVideoStories.length
      }
    })
  } catch (error) {
    console.log('Error initializing video stories:', error)
    return c.json({ success: false, error: 'Failed to initialize video stories' }, 500)
  }
})

// ========================================
// PHASE 1 : CONFIGURATION GÉNÉRALE (PRIORITÉ 1)
// ========================================

// Route pour les langues et devises (site_settings)
app.get('/make-server-98c6ec1c/site-settings', async (c) => {
  try {
    const key = c.req.query('key')
    
    if (key) {
      // Récupérer une clé spécifique
      const value = await kv.get(`site_settings_${key}`)
      return c.json({ success: true, data: { key, value } })
    } else {
      // Récupérer toutes les configurations
      const settings = {
        languages: await kv.get('site_settings_languages') || [
          { code: "FR", name: "Français", flag: "🇫🇷" },
          { code: "EN", name: "English", flag: "🇬🇧" }
        ],
        currencies: await kv.get('site_settings_currencies') || [
          { code: "XOF", symbol: "F CFA", name: "Franc CFA" },
          { code: "EUR", symbol: "€", name: "Euro" },
          { code: "USD", symbol: "$", name: "US Dollar" },
          { code: "GBP", symbol: "£", name: "British Pound" }
        ],
        company_description: await kv.get('site_settings_company_description') || "Leader dans la litterie, l'ameublement et la vitrerie depuis plus de 40 ans. FIMA accompagne les professionnels et les particuliers avec expertise et innovation.",
        certifications: await kv.get('site_settings_certifications') || [
          "Entreprise du Patrimoine Vivant",
          "Certifié ISO 9001"
        ],
        social_links: await kv.get('site_settings_social_links') || {
          facebook: "#",
          instagram: "#",
          linkedin: "#",
          twitter: "#"
        },
        contact_info: await kv.get('site_settings_contact_info') || {
          email: "contact@fima.ci",
          phone: "+225 27 22 12 34 56",
          address: "Zone Industrielle, Abidjan, Côte d'Ivoire",
          hours: "Lun-Ven: 8h-18h, Sam: 9h-13h"
        }
      }
      return c.json({ success: true, data: settings })
    }
  } catch (error) {
    console.log('Error fetching site settings:', error)
    return c.json({ success: false, error: 'Failed to fetch site settings' }, 500)
  }
})

app.post('/make-server-98c6ec1c/site-settings', async (c) => {
  try {
    const accessToken = c.req.header('Authorization')?.split(' ')[1]
    const { data: { user }, error } = await supabase.auth.getUser(accessToken)
    if (!user?.id) {
      return c.json({ success: false, error: 'Unauthorized' }, 401)
    }

    const { key, value } = await c.req.json()
    await kv.set(`site_settings_${key}`, value)
    return c.json({ success: true, message: 'Site settings updated successfully' })
  } catch (error) {
    console.log('Error updating site settings:', error)
    return c.json({ success: false, error: 'Failed to update site settings' }, 500)
  }
})

// ========================================
// PHASE 2 : FORMULAIRES ET MODALS (PRIORITÉ 2)
// ========================================

// Route pour les options de formulaires
app.get('/make-server-98c6ec1c/form-options', async (c) => {
  try {
    const category = c.req.query('category')
    
    const allOptions = {
      quote_project_types: await kv.get('form_options_quote_project_types') || [
        { id: 'residential', name: 'Projet résidentiel', description: 'Maison, appartement, villa' },
        { id: 'commercial', name: 'Projet commercial', description: 'Bureau, magasin, restaurant' },
        { id: 'hospitality', name: 'Hôtellerie', description: 'Hôtel, résidence, guesthouse' },
        { id: 'institutional', name: 'Institutionnel', description: 'Administration, école, clinique' },
        { id: 'industrial', name: 'Industriel', description: 'Usine, entrepôt, atelier' }
      ],
      quote_budget_ranges: await kv.get('form_options_quote_budget_ranges') || [
        { id: 'under-5m', name: 'Moins de 5M FCFA' },
        { id: '5m-15m', name: '5M - 15M FCFA' },
        { id: '15m-50m', name: '15M - 50M FCFA' },
        { id: '50m-100m', name: '50M - 100M FCFA' },
        { id: 'over-100m', name: 'Plus de 100M FCFA' },
        { id: 'to-discuss', name: 'À discuter' }
      ],
      quote_timelines: await kv.get('form_options_quote_timelines') || [
        { id: 'urgent', name: 'Urgent (< 1 mois)' },
        { id: '1-3months', name: '1 à 3 mois' },
        { id: '3-6months', name: '3 à 6 mois' },
        { id: '6-12months', name: '6 à 12 mois' },
        { id: 'flexible', name: 'Flexible' }
      ],
      consultation_services: await kv.get('form_options_consultation_services') || [
        { id: 'literie', name: 'Literie & Couchage', icon: '🛏️', description: 'Matelas, sommiers, oreillers' },
        { id: 'menuiserie', name: 'Menuiserie & Design', icon: '🪚', description: 'Mobilier sur-mesure, cuisines' },
        { id: 'vitrerie', name: 'Vitrerie & Aluminium', icon: '🏢', description: 'Façades, baies vitrées' },
        { id: 'b2b', name: 'Solutions B2B', icon: '🏗️', description: 'Projets professionnels' },
        { id: 'autre', name: 'Autre projet', icon: '💡', description: 'Besoin spécifique' }
      ],
      consultation_budget_ranges: await kv.get('form_options_consultation_budget_ranges') || [
        { id: 'small', label: 'Moins de 500 000 F CFA', value: '<500k' },
        { id: 'medium', label: '500k - 2M F CFA', value: '500k-2M' },
        { id: 'large', label: '2M - 10M F CFA', value: '2M-10M' },
        { id: 'enterprise', label: 'Plus de 10M F CFA', value: '10M+' },
        { id: 'discuss', label: 'À discuter', value: 'discuss' }
      ],
      consultation_timelines: await kv.get('form_options_consultation_timelines') || [
        { id: 'urgent', label: 'Urgent (< 1 mois)', value: 'urgent' },
        { id: 'short', label: '1-3 mois', value: '1-3months' },
        { id: 'medium', label: '3-6 mois', value: '3-6months' },
        { id: 'long', label: '6+ mois', value: '6months+' },
        { id: 'flexible', label: 'Flexible', value: 'flexible' }
      ],
      appointment_time_slots: await kv.get('form_options_appointment_time_slots') || [
        '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
        '14:00', '14:30', '15:00', '15:30', '16:00', '16:30'
      ]
    }
    
    if (category && allOptions[category]) {
      return c.json({ success: true, data: allOptions[category] })
    }
    
    return c.json({ success: true, data: allOptions })
  } catch (error) {
    console.log('Error fetching form options:', error)
    return c.json({ success: false, error: 'Failed to fetch form options' }, 500)
  }
})

app.post('/make-server-98c6ec1c/form-options', async (c) => {
  try {
    const accessToken = c.req.header('Authorization')?.split(' ')[1]
    const { data: { user }, error } = await supabase.auth.getUser(accessToken)
    if (!user?.id) {
      return c.json({ success: false, error: 'Unauthorized' }, 401)
    }

    const { category, options } = await c.req.json()
    await kv.set(`form_options_${category}`, options)
    return c.json({ success: true, message: 'Form options updated successfully' })
  } catch (error) {
    console.log('Error updating form options:', error)
    return c.json({ success: false, error: 'Failed to update form options' }, 500)
  }
})

// Route pour la configuration du chatbot
app.get('/make-server-98c6ec1c/chatbot-config', async (c) => {
  try {
    const config = {
      initial_messages: await kv.get('chatbot_initial_messages') || [
        {
          id: '1',
          text: 'Bonjour ! Je suis Sophie, votre conseillère FIMA. Comment puis-je vous aider aujourd\'hui ?',
          sender: 'support'
        }
      ],
      quick_replies: await kv.get('chatbot_quick_replies') || [
        'Informations sur les matelas',
        'Délais de livraison',
        'Retours et garanties',
        'Aide au choix'
      ],
      auto_responses: await kv.get('chatbot_auto_responses') || {
        'matelas': 'Notre gamme de matelas propose différents niveaux de fermeté et technologies. Quel type de confort recherchez-vous ?',
        'livraison': 'Nous livrons gratuitement en 3-5 jours ouvrés avec installation incluse. Dans quelle région êtes-vous ?',
        'garantie': 'Tous nos matelas bénéficient d\'une garantie de 10 ans et de 14 nuits d\'essai. Avez-vous des questions spécifiques ?',
        'prix': 'Nos prix commencent à 489€ pour un matelas Queen. Nous avons régulièrement des promotions. Quel budget avez-vous en tête ?',
        'taille': 'Nous proposons toutes les tailles standards : Single, Queen, King et California King. Quelle taille vous intéresse ?'
      }
    }
    return c.json({ success: true, data: config })
  } catch (error) {
    console.log('Error fetching chatbot config:', error)
    return c.json({ success: false, error: 'Failed to fetch chatbot config' }, 500)
  }
})

app.post('/make-server-98c6ec1c/chatbot-config', async (c) => {
  try {
    const accessToken = c.req.header('Authorization')?.split(' ')[1]
    const { data: { user }, error } = await supabase.auth.getUser(accessToken)
    if (!user?.id) {
      return c.json({ success: false, error: 'Unauthorized' }, 401)
    }

    const config = await c.req.json()
    await kv.set('chatbot_initial_messages', config.initial_messages)
    await kv.set('chatbot_quick_replies', config.quick_replies)
    await kv.set('chatbot_auto_responses', config.auto_responses)
    return c.json({ success: true, message: 'Chatbot config updated successfully' })
  } catch (error) {
    console.log('Error updating chatbot config:', error)
    return c.json({ success: false, error: 'Failed to update chatbot config' }, 500)
  }
})

// Route d'initialisation pour Phase 1 & 2
app.post('/make-server-98c6ec1c/init-phase-1-2', async (c) => {
  try {
    // Initialiser site settings
    await kv.set('site_settings_languages', [
      { code: "FR", name: "Français", flag: "🇫🇷" },
      { code: "EN", name: "English", flag: "🇬🇧" }
    ])
    
    await kv.set('site_settings_currencies', [
      { code: "XOF", symbol: "F CFA", name: "Franc CFA" },
      { code: "EUR", symbol: "€", name: "Euro" },
      { code: "USD", symbol: "$", name: "US Dollar" },
      { code: "GBP", symbol: "£", name: "British Pound" }
    ])
    
    await kv.set('site_settings_company_description', 
      "Leader dans la litterie, l'ameublement et la vitrerie depuis plus de 40 ans. FIMA accompagne les professionnels et les particuliers avec expertise et innovation."
    )
    
    await kv.set('site_settings_certifications', [
      "Entreprise du Patrimoine Vivant",
      "Certifié ISO 9001"
    ])
    
    await kv.set('site_settings_social_links', {
      facebook: "#",
      instagram: "#",
      linkedin: "#",
      twitter: "#"
    })
    
    await kv.set('site_settings_contact_info', {
      email: "contact@fima.ci",
      phone: "+225 27 22 12 34 56",
      address: "Zone Industrielle, Abidjan, Côte d'Ivoire",
      hours: "Lun-Ven: 8h-18h, Sam: 9h-13h"
    })
    
    // Initialiser business units
    await kv.set('business_units', [
      {
        id: 'fima-couchage',
        slug: 'fima-couchage',
        name: 'FIMA Couchage',
        description: 'Solutions complètes pour literie professionnelle et particuliers',
        icon: 'Bed',
        primary_color: '#B5C233'
      },
      {
        id: 'fima-design',
        slug: 'fima-design',
        name: 'FIMA Design',
        description: 'Menuiserie et ameublement sur mesure',
        icon: 'Armchair',
        primary_color: '#6E6E6E'
      },
      {
        id: 'univers-glass',
        slug: 'univers-glass',
        name: 'UNIVERS GLASS',
        description: 'Vitrerie et menuiserie aluminium',
        icon: 'Building2',
        primary_color: '#0EA5E9'
      }
    ])
    
    // Initialiser product categories
    await kv.set('product_categories', {
      "fima-couchage": [
        { key: "matelas", name: "Matelas", icon: "🛏️", description: "Ressorts, mousse, latex naturel", count: "45 modèles", business: "fima-couchage" },
        { key: "sommiers", name: "Sommiers", icon: "🏠", description: "Tapissiers, électriques, à lattes", count: "32 modèles", business: "fima-couchage" },
        { key: "oreillers", name: "Oreillers", icon: "💤", description: "Mémoire de forme, duvet, ergonomiques", count: "28 modèles", business: "fima-couchage" },
        { key: "linge-de-lit", name: "Linge de lit", icon: "🌿", description: "Parures, draps, couettes", count: "150+ articles", business: "fima-couchage" },
        { key: "accessoires-literie", name: "Accessoires", icon: "✨", description: "Protections, surmatelas, coussins", count: "45 articles", business: "fima-couchage" }
      ],
      "fima-design": [
        { key: "menuiserie", name: "Menuiserie", icon: "🪵", description: "Bois massif, aggloméré, MDF", count: "60+ références", business: "fima-design" },
        { key: "ameublement", name: "Ameublement", icon: "🪑", description: "Mobilier sur mesure et standard", count: "85+ modèles", business: "fima-design" },
        { key: "cuisines", name: "Cuisines", icon: "🍳", description: "Cuisines équipées modernes", count: "40+ modèles", business: "fima-design" },
        { key: "dressings", name: "Dressings", icon: "👔", description: "Rangements sur mesure", count: "35+ modèles", business: "fima-design" },
        { key: "amenagements-mesure", name: "Aménagements sur mesure", icon: "📐", description: "Projets personnalisés", count: "Sur mesure", business: "fima-design" }
      ],
      "univers-glass": [
        { key: "vitrerie", name: "Vitrerie", icon: "🪟", description: "Vitres et miroirs", count: "50+ types", business: "univers-glass" },
        { key: "menuiserie-aluminium", name: "Menuiserie Aluminium", icon: "🔩", description: "Cadres et structures", count: "45+ profils", business: "univers-glass" },
        { key: "fenetres", name: "Fenêtres", icon: "🏠", description: "Fenêtres sur mesure", count: "60+ modèles", business: "univers-glass" },
        { key: "portes", name: "Portes", icon: "🚪", description: "Portes vitrées et alu", count: "55+ modèles", business: "univers-glass" },
        { key: "cloisons", name: "Cloisons", icon: "🧱", description: "Séparations d'espaces", count: "30+ solutions", business: "univers-glass" }
      ]
    })
    
    return c.json({ 
      success: true, 
      message: 'Phase 1 & 2 data initialized successfully',
      data: {
        site_settings: 6,
        business_units: 3,
        product_categories: 15
      }
    })
  } catch (error) {
    console.log('Error initializing Phase 1 & 2 data:', error)
    return c.json({ success: false, error: 'Failed to initialize Phase 1 & 2 data' }, 500)
  }
})

// Route pour les business units
app.get('/make-server-98c6ec1c/business-units', async (c) => {
  try {
    const businessUnits = await kv.get('business_units') || [
      {
        id: 'fima-couchage',
        slug: 'fima-couchage',
        name: 'FIMA Couchage',
        description: 'Solutions complètes pour literie professionnelle et particuliers',
        icon: 'Bed',
        primary_color: '#B5C233'
      },
      {
        id: 'fima-design',
        slug: 'fima-design',
        name: 'FIMA Design',
        description: 'Menuiserie et ameublement sur mesure',
        icon: 'Armchair',
        primary_color: '#6E6E6E'
      },
      {
        id: 'univers-glass',
        slug: 'univers-glass',
        name: 'UNIVERS GLASS',
        description: 'Vitrerie et menuiserie aluminium',
        icon: 'Building2',
        primary_color: '#0EA5E9'
      }
    ]
    
    return c.json({ success: true, data: businessUnits })
  } catch (error) {
    console.log('Error fetching business units:', error)
    return c.json({ success: false, error: 'Failed to fetch business units' }, 500)
  }
})

app.post('/make-server-98c6ec1c/business-units', async (c) => {
  try {
    const accessToken = c.req.header('Authorization')?.split(' ')[1]
    const { data: { user }, error } = await supabase.auth.getUser(accessToken)
    if (!user?.id) {
      return c.json({ success: false, error: 'Unauthorized' }, 401)
    }

    const businessUnitsData = await c.req.json()
    await kv.set('business_units', businessUnitsData)
    return c.json({ success: true, message: 'Business units updated successfully' })
  } catch (error) {
    console.log('Error updating business units:', error)
    return c.json({ success: false, error: 'Failed to update business units' }, 500)
  }
})

// ============================================================================
// ROUTES CALL TO ACTION
// ============================================================================

// GET - Récupérer tous les CTAs (avec filtre optionnel par position)
app.get('/make-server-98c6ec1c/call-to-actions', async (c) => {
  try {
    const position = c.req.query('position')
    
    let ctas = await kv.getByPrefix('cta:') || []
    
    // Filtrer par position si spécifié
    if (position && position !== 'all') {
      ctas = ctas.filter((cta: any) => cta.position === position)
    }
    
    // Filtrer seulement les CTAs actifs pour le frontend
    ctas = ctas.filter((cta: any) => cta.is_active === true)
    
    // Trier par ordre
    ctas.sort((a: any, b: any) => a.order_index - b.order_index)
    
    return c.json({ success: true, data: ctas })
  } catch (error) {
    console.log('Error fetching call to actions:', error)
    return c.json({ success: false, error: 'Failed to fetch call to actions' }, 500)
  }
})

// GET - Récupérer tous les CTAs (incluant inactifs) pour le CMS
app.get('/make-server-98c6ec1c/call-to-actions/all', async (c) => {
  try {
    const accessToken = c.req.header('Authorization')?.split(' ')[1]
    const { data: { user }, error } = await supabase.auth.getUser(accessToken)
    if (!user?.id) {
      return c.json({ success: false, error: 'Unauthorized' }, 401)
    }
    
    let ctas = await kv.getByPrefix('cta:') || []
    
    // Trier par ordre
    ctas.sort((a: any, b: any) => a.order_index - b.order_index)
    
    return c.json({ success: true, data: ctas })
  } catch (error) {
    console.log('Error fetching all call to actions:', error)
    return c.json({ success: false, error: 'Failed to fetch all call to actions' }, 500)
  }
})

// GET - Récupérer un CTA par ID
app.get('/make-server-98c6ec1c/call-to-actions/:id', async (c) => {
  try {
    const id = c.req.param('id')
    const cta = await kv.get(`cta:${id}`)
    
    if (!cta) {
      return c.json({ success: false, error: 'Call to action not found' }, 404)
    }
    
    return c.json({ success: true, data: cta })
  } catch (error) {
    console.log('Error fetching call to action:', error)
    return c.json({ success: false, error: 'Failed to fetch call to action' }, 500)
  }
})

// POST - Créer un nouveau CTA (CMS uniquement)
app.post('/make-server-98c6ec1c/call-to-actions', async (c) => {
  try {
    const accessToken = c.req.header('Authorization')?.split(' ')[1]
    const { data: { user }, error } = await supabase.auth.getUser(accessToken)
    if (!user?.id) {
      return c.json({ success: false, error: 'Unauthorized' }, 401)
    }

    const ctaData = await c.req.json()
    
    // Générer un UUID pour le CTA
    const ctaId = crypto.randomUUID()
    const now = new Date().toISOString()
    
    const newCTA = {
      id: ctaId,
      ...ctaData,
      created_at: now,
      updated_at: now
    }
    
    await kv.set(`cta:${ctaId}`, newCTA)
    
    return c.json({ success: true, data: newCTA, message: 'Call to action created successfully' })
  } catch (error) {
    console.log('Error creating call to action:', error)
    return c.json({ success: false, error: 'Failed to create call to action' }, 500)
  }
})

// PUT - Mettre à jour un CTA (CMS uniquement)
app.put('/make-server-98c6ec1c/call-to-actions/:id', async (c) => {
  try {
    const accessToken = c.req.header('Authorization')?.split(' ')[1]
    const { data: { user }, error } = await supabase.auth.getUser(accessToken)
    if (!user?.id) {
      return c.json({ success: false, error: 'Unauthorized' }, 401)
    }

    const id = c.req.param('id')
    const ctaData = await c.req.json()
    
    const existingCTA = await kv.get(`cta:${id}`)
    
    if (!existingCTA) {
      return c.json({ success: false, error: 'Call to action not found' }, 404)
    }
    
    const updatedCTA = {
      ...existingCTA,
      ...ctaData,
      id, // Preserve ID
      updated_at: new Date().toISOString()
    }
    
    await kv.set(`cta:${id}`, updatedCTA)
    
    return c.json({ success: true, data: updatedCTA, message: 'Call to action updated successfully' })
  } catch (error) {
    console.log('Error updating call to action:', error)
    return c.json({ success: false, error: 'Failed to update call to action' }, 500)
  }
})

// DELETE - Supprimer un CTA (CMS uniquement)
app.delete('/make-server-98c6ec1c/call-to-actions/:id', async (c) => {
  try {
    const accessToken = c.req.header('Authorization')?.split(' ')[1]
    const { data: { user }, error } = await supabase.auth.getUser(accessToken)
    if (!user?.id) {
      return c.json({ success: false, error: 'Unauthorized' }, 401)
    }

    const id = c.req.param('id')
    
    const existingCTA = await kv.get(`cta:${id}`)
    
    if (!existingCTA) {
      return c.json({ success: false, error: 'Call to action not found' }, 404)
    }
    
    await kv.del(`cta:${id}`)
    
    return c.json({ success: true, message: 'Call to action deleted successfully' })
  } catch (error) {
    console.log('Error deleting call to action:', error)
    return c.json({ success: false, error: 'Failed to delete call to action' }, 500)
  }
})

// ============================================================================
// Note: Routes product categories sont définies plus haut (lignes 1633-1672)
// ============================================================================

// ============================================================================
// ROUTES POUR LES COMMANDES SUR MESURE
// ============================================================================

app.post('/make-server-98c6ec1c/custom-order', async (c) => {
  try {
    const orderData = await c.req.json();
    const { 
      productId, 
      productName, 
      productSku, 
      firstName, 
      lastName, 
      email, 
      phone, 
      company, 
      message 
    } = orderData;

    // Validation
    if (!productId || !productName || !firstName || !lastName || !email || !phone) {
      return c.json({ 
        success: false, 
        error: 'Tous les champs obligatoires doivent être remplis' 
      }, 400);
    }

    // Créer l'objet de commande
    const customOrder = {
      id: `CO-${Date.now()}`,
      productId,
      productName,
      productSku,
      customer: {
        firstName,
        lastName,
        email,
        phone,
        company: company || null
      },
      message: message || '',
      status: 'pending',
      createdAt: new Date().toISOString()
    };

    // Enregistrer dans la base de données
    const orders = await kv.get('custom_orders') || [];
    orders.unshift(customOrder);
    await kv.set('custom_orders', orders);

    // Préparer le contenu de l'email
    const emailContent = `
Nouvelle demande de commande sur mesure - FIMA

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
INFORMATIONS PRODUIT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Produit : ${productName}
SKU : ${productSku}
ID Produit : ${productId}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
INFORMATIONS CLIENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Nom : ${firstName} ${lastName}
Email : ${email}
Téléphone : ${phone}
${company ? `Société : ${company}` : ''}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
MESSAGE DU CLIENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${message || 'Aucun message spécifique'}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Date de la demande : ${new Date().toLocaleString('fr-FR')}
Numéro de commande : ${customOrder.id}
    `.trim();

    // Envoyer l'email
    try {
      // Note: Vous devrez configurer un service d'email dans Supabase
      // Pour l'instant, on log l'email et on simule l'envoi
      console.log('Email à envoyer à sales@groupfima.com:');
      console.log(emailContent);
      
      // TODO: Implémenter l'envoi d'email réel via un service comme Resend, SendGrid, etc.
      // Exemple avec fetch vers un service d'email:
      /*
      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${Deno.env.get('RESEND_API_KEY')}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'noreply@groupfima.com',
          to: 'sales@groupfima.com',
          subject: `Nouvelle demande sur mesure - ${productName}`,
          text: emailContent,
        }),
      });
      */
    } catch (emailError) {
      console.error('Erreur lors de l\'envoi de l\'email:', emailError);
      // On ne bloque pas la commande si l'email échoue
    }

    return c.json({ 
      success: true, 
      data: customOrder,
      message: 'Demande de commande enregistrée avec succès'
    });
  } catch (error) {
    console.error('Erreur lors du traitement de la commande sur mesure:', error);
    return c.json({ 
      success: false, 
      error: error instanceof Error ? error.message : 'Erreur lors du traitement de la commande'
    }, 500);
  }
});

// Route pour récupérer les commandes sur mesure (pour le CMS)
app.get('/make-server-98c6ec1c/custom-orders', async (c) => {
  try {
    const accessToken = c.req.header('Authorization')?.split(' ')[1];
    const { data: { user }, error } = await supabase.auth.getUser(accessToken);
    if (!user?.id) {
      return c.json({ success: false, error: 'Unauthorized' }, 401);
    }

    const orders = await kv.get('custom_orders') || [];
    return c.json({ success: true, data: orders });
  } catch (error) {
    console.error('Erreur lors de la récupération des commandes:', error);
    return c.json({ 
      success: false, 
      error: 'Erreur lors de la récupération des commandes' 
    }, 500);
  }
});

Deno.serve(app.fetch)