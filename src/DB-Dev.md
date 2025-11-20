# 🚀 Guide de Démarrage Rapide - Développement FIMA CMS

**Pour les développeurs qui souhaitent utiliser la base de données**

---

## 📚 Documentation Disponible

| Fichier | Description |
|---------|-------------|
| **[DATABASE_STRUCTURE.md](./DATABASE_STRUCTURE.md)** | Structure complète de la BD avec exemples |
| **[/types/index.ts](./types/index.ts)** | Types TypeScript pour toutes les entités |
| **[/utils/api.ts](./utils/api.ts)** | Fonctions API prêtes à l'emploi |
| **[/utils/initData.ts](./utils/initData.ts)** | Données de démonstration |

---

## ⚡ Démarrage en 3 Étapes

### 1. Importer les Types

```typescript
import {
  Blog,
  Product,
  Customer,
  Order,
  Project,
  Testimonial,
  Career,
  BedtimeStory,
  VideoStory,
  CustomPage,
  Language
} from './types';
```

### 2. Utiliser l'API

```typescript
import { 
  blogsAPI,
  productsAPI,
  customersAPI,
  ordersAPI,
  projectsAPI,
  testimonialsAPI,
  careersAPI
} from './utils/api';
```

### 3. Récupérer des Données

```typescript
// Dans votre composant React
const [blogs, setBlogs] = useState<Blog[]>([]);

useEffect(() => {
  const fetchData = async () => {
    const data = await blogsAPI.getAll();
    setBlogs(data);
  };
  fetchData();
}, []);
```

---

## 📊 Exemples par Section

### Blogs

```typescript
import { blogsAPI } from './utils/api';
import { Blog } from './types';

// Récupérer tous les blogs
const blogs: Blog[] = await blogsAPI.getAll();

// Récupérer un blog par ID
const blog: Blog = await blogsAPI.getById('uuid-123');

// Créer un nouveau blog
const newBlog = await blogsAPI.create({
  titleFr: "Mon titre",
  titleEn: "My title",
  slug: "mon-titre",
  summaryFr: "Résumé",
  summaryEn: "Summary",
  contentFr: "<p>Contenu...</p>",
  contentEn: "<p>Content...</p>",
  author: "John Doe",
  category: "IoT & Innovation",
  tags: ["IoT", "Tech"],
  featuredImage: "https://...",
  published: true,
  publishedDate: new Date().toISOString(),
  createdAt: new Date().toISOString(),
  readTime: 5
});

// Mettre à jour un blog
await blogsAPI.update('uuid-123', {
  titleFr: "Nouveau titre"
});

// Supprimer un blog
await blogsAPI.delete('uuid-123');
```

### Produits (E-commerce)

```typescript
import { productsAPI } from './utils/api';
import { Product } from './types';

// Récupérer tous les produits
const products: Product[] = await productsAPI.getAll();

// Filtrer les produits actifs en stock
const availableProducts = products.filter(
  p => p.status === 'active' && p.stock > 0
);

// Créer un nouveau produit
const newProduct = await productsAPI.create({
  name: "Riz Basmati",
  sku: "RIZ-BAS-25KG",
  category: "Céréales",
  price: 35000,
  stock: 100,
  unit: "sac",
  description: "Description...",
  images: ["https://..."],
  status: "active",
  createdAt: new Date().toISOString()
});

// Produit avec variantes
const productWithVariants = await productsAPI.create({
  name: "Huile de Palme",
  sku: "HUILE-PALME",
  category: "Huiles",
  price: 12500,
  stock: 50,
  unit: "bidon",
  description: "...",
  variants: [
    {
      id: "var-1",
      name: "5L",
      sku: "HUILE-PALME-5L",
      price: 12500,
      stock: 30,
      attributes: { volume: "5L" }
    },
    {
      id: "var-2",
      name: "10L",
      sku: "HUILE-PALME-10L",
      price: 23000,
      stock: 20,
      attributes: { volume: "10L" }
    }
  ],
  images: ["https://..."],
  status: "active",
  createdAt: new Date().toISOString()
});
```

### Clients

```typescript
import { customersAPI } from './utils/api';
import { Customer } from './types';

// Récupérer tous les clients
const customers: Customer[] = await customersAPI.getAll();

// Filtrer les clients B2B
const b2bCustomers = customers.filter(c => c.type === 'B2B');

// Créer un client B2B
const newB2BCustomer = await customersAPI.create({
  name: "Direction Achats",
  email: "achats@company.ci",
  phone: "+225 27 22 00 00 00",
  type: "B2B",
  companyName: "Ma Société",
  companyRegistration: "CI-ABJ-2024-001",
  address: "Adresse...",
  city: "Abidjan",
  country: "Côte d'Ivoire",
  totalOrders: 0,
  totalSpent: 0,
  status: "active",
  createdAt: new Date().toISOString()
});

// Créer un client B2C
const newB2CCustomer = await customersAPI.create({
  name: "Kouassi Jean",
  email: "jean@email.com",
  phone: "+225 07 00 00 00 00",
  type: "B2C",
  address: "Cocody",
  city: "Abidjan",
  country: "Côte d'Ivoire",
  totalOrders: 0,
  totalSpent: 0,
  status: "active",
  createdAt: new Date().toISOString()
});
```

### Commandes

```typescript
import { ordersAPI } from './utils/api';
import { Order } from './types';

// Récupérer toutes les commandes
const orders: Order[] = await ordersAPI.getAll();

// Filtrer les commandes en attente
const pendingOrders = orders.filter(o => o.status === 'pending');

// Créer une nouvelle commande
const newOrder = await ordersAPI.create({
  orderNumber: `ORD-${Date.now()}`,
  customerId: "customer-uuid",
  customerName: "Client Name",
  customerEmail: "client@email.com",
  customerPhone: "+225 07 00 00 00 00",
  items: [
    {
      id: "item-1",
      productId: "product-uuid",
      name: "Riz Basmati - 25kg",
      sku: "RIZ-BAS-25KG",
      quantity: 10,
      price: 35000,
      total: 350000,
      image: "https://..."
    }
  ],
  subtotal: 350000,
  discount: 0,
  tax: 0,
  shipping: 5000,
  total: 355000,
  status: "pending",
  paymentStatus: "pending",
  fulfillmentStatus: "unfulfilled",
  paymentMethod: "mobile_money",
  shippingAddress: {
    name: "Client Name",
    phone: "+225 07 00 00 00 00",
    address: "Adresse...",
    city: "Abidjan",
    country: "Côte d'Ivoire"
  },
  createdAt: new Date().toISOString()
});

// Mettre à jour le statut d'une commande
await ordersAPI.update('order-uuid', {
  status: 'confirmed',
  paymentStatus: 'paid',
  paidAt: new Date().toISOString()
});
```

### Projets

```typescript
import { projectsAPI } from './utils/api';
import { Project } from './types';

// Récupérer tous les projets
const projects: Project[] = await projectsAPI.getAll();

// Créer un nouveau projet
const newProject = await projectsAPI.create({
  titleFr: "Système IoT Hôtel",
  titleEn: "Hotel IoT System",
  descriptionFr: "Description...",
  descriptionEn: "Description...",
  client: "Hôtel Ivoire",
  category: "IoT & Automation",
  status: "En cours",
  startDate: "2024-01-15",
  budget: 45000000,
  team: ["Jean Kouassi", "Marie Traoré"],
  technologies: ["IoT", "Python", "React"],
  images: ["https://..."],
  featured: true,
  createdAt: new Date().toISOString()
});
```

### Témoignages

```typescript
import { testimonialsAPI } from './utils/api';
import { Testimonial } from './types';

// Récupérer tous les témoignages
const testimonials: Testimonial[] = await testimonialsAPI.getAll();

// Filtrer les témoignages publiés
const published = testimonials.filter(t => t.published);

// Créer un nouveau témoignage
const newTestimonial = await testimonialsAPI.create({
  clientName: "Kouadio Marcel",
  clientPosition: "Directeur Général",
  clientCompany: "Hôtel Ivoire",
  clientLocation: "Abidjan, Côte d'Ivoire",
  clientPhoto: "https://...",
  testimonialFr: "Excellent travail...",
  testimonialEn: "Excellent work...",
  rating: 5,
  project: "Système IoT Hôtelier",
  category: "IoT & Automation",
  featured: true,
  published: true,
  publishedDate: new Date().toISOString(),
  createdAt: new Date().toISOString()
});
```

---

## 🎨 Intégration dans les Composants React

### Exemple : Vue Liste de Blogs

```typescript
import { useState, useEffect } from 'react';
import { blogsAPI } from './utils/api';
import { Blog } from './types';
import { Button } from './components/ui/button';
import { Card } from './components/ui/card';

export default function BlogsView() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const data = await blogsAPI.getAll();
      setBlogs(data);
    } catch (error) {
      console.error('Error fetching blogs:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (confirm('Supprimer ce blog ?')) {
      await blogsAPI.delete(id);
      fetchBlogs(); // Recharger la liste
    }
  };

  if (loading) {
    return <div>Chargement...</div>;
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h1>Blogs</h1>
        <Button onClick={() => {/* Ouvrir modal création */}}>
          Nouveau Blog
        </Button>
      </div>

      <div className="grid gap-4">
        {blogs.map(blog => (
          <Card key={blog.id} className="p-4">
            <h3>{blog.titleFr}</h3>
            <p className="text-muted-foreground">{blog.summaryFr}</p>
            <div className="flex gap-2 mt-4">
              <Button 
                size="sm" 
                onClick={() => {/* Ouvrir modal édition */}}
              >
                Modifier
              </Button>
              <Button 
                size="sm" 
                variant="destructive"
                onClick={() => handleDelete(blog.id)}
              >
                Supprimer
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
```

### Exemple : Formulaire de Création de Produit

```typescript
import { useState } from 'react';
import { productsAPI } from './utils/api';
import { CreateProductInput } from './types';
import { Button } from './components/ui/button';
import { Input } from './components/ui/input';
import { Textarea } from './components/ui/textarea';

export default function CreateProductForm({ onSuccess }: { onSuccess: () => void }) {
  const [formData, setFormData] = useState<CreateProductInput>({
    name: '',
    sku: '',
    category: '',
    price: 0,
    stock: 0,
    unit: '',
    description: '',
    images: [],
    status: 'active',
    createdAt: new Date().toISOString()
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await productsAPI.create(formData);
      onSuccess();
    } catch (error) {
      console.error('Error creating product:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        label="Nom du produit"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        required
      />

      <Input
        label="SKU"
        value={formData.sku}
        onChange={(e) => setFormData({ ...formData, sku: e.target.value })}
        required
      />

      <Input
        label="Catégorie"
        value={formData.category}
        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
        required
      />

      <Input
        label="Prix (FCFA)"
        type="number"
        value={formData.price}
        onChange={(e) => setFormData({ ...formData, price: parseInt(e.target.value) })}
        required
      />

      <Input
        label="Stock"
        type="number"
        value={formData.stock}
        onChange={(e) => setFormData({ ...formData, stock: parseInt(e.target.value) })}
        required
      />

      <Input
        label="Unité"
        value={formData.unit}
        onChange={(e) => setFormData({ ...formData, unit: e.target.value })}
        placeholder="sac, bidon, kg, pièce..."
        required
      />

      <Textarea
        label="Description"
        value={formData.description}
        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
        required
      />

      <Button type="submit">Créer le produit</Button>
    </form>
  );
}
```

---

## 🔍 Recherche et Filtrage

### Rechercher dans les Blogs

```typescript
const [searchTerm, setSearchTerm] = useState('');
const [filteredBlogs, setFilteredBlogs] = useState<Blog[]>([]);

useEffect(() => {
  const filtered = blogs.filter(blog => 
    blog.titleFr.toLowerCase().includes(searchTerm.toLowerCase()) ||
    blog.titleEn.toLowerCase().includes(searchTerm.toLowerCase()) ||
    blog.summaryFr.toLowerCase().includes(searchTerm.toLowerCase()) ||
    blog.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );
  setFilteredBlogs(filtered);
}, [searchTerm, blogs]);
```

### Filtrer les Produits par Catégorie

```typescript
const [selectedCategory, setSelectedCategory] = useState<string>('all');

const filteredProducts = selectedCategory === 'all'
  ? products
  : products.filter(p => p.category === selectedCategory);

const categories = [...new Set(products.map(p => p.category))];
```

### Tri des Commandes

```typescript
const [sortBy, setSortBy] = useState<'date' | 'total' | 'status'>('date');

const sortedOrders = [...orders].sort((a, b) => {
  switch (sortBy) {
    case 'date':
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    case 'total':
      return b.total - a.total;
    case 'status':
      return a.status.localeCompare(b.status);
    default:
      return 0;
  }
});
```

---

## 📊 Calculs et Statistiques

### Statistiques E-commerce

```typescript
import { ordersAPI, customersAPI, productsAPI } from './utils/api';

const calculateStats = async () => {
  const orders = await ordersAPI.getAll();
  const customers = await customersAPI.getAll();
  const products = await productsAPI.getAll();

  return {
    // Commandes
    totalOrders: orders.length,
    pendingOrders: orders.filter(o => o.status === 'pending').length,
    deliveredOrders: orders.filter(o => o.status === 'delivered').length,
    
    // Revenus
    totalRevenue: orders
      .filter(o => o.paymentStatus === 'paid')
      .reduce((sum, o) => sum + o.total, 0),
    
    // Panier moyen
    averageOrderValue: orders.length > 0
      ? orders.reduce((sum, o) => sum + o.total, 0) / orders.length
      : 0,
    
    // Clients
    totalCustomers: customers.length,
    b2bCustomers: customers.filter(c => c.type === 'B2B').length,
    b2cCustomers: customers.filter(c => c.type === 'B2C').length,
    
    // Produits
    totalProducts: products.length,
    activeProducts: products.filter(p => p.status === 'active').length,
    lowStockProducts: products.filter(p => 
      p.stock > 0 && 
      p.lowStockThreshold && 
      p.stock <= p.lowStockThreshold
    ).length,
    outOfStockProducts: products.filter(p => p.stock === 0).length
  };
};
```

### Top Produits

```typescript
const getTopProducts = async (limit: number = 5) => {
  const orders = await ordersAPI.getAll();
  const products = await productsAPI.getAll();

  // Compter les ventes par produit
  const salesByProduct = new Map<string, number>();
  
  orders.forEach(order => {
    order.items.forEach(item => {
      const current = salesByProduct.get(item.productId) || 0;
      salesByProduct.set(item.productId, current + item.quantity);
    });
  });

  // Trier et récupérer les produits
  const topProductIds = Array.from(salesByProduct.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, limit)
    .map(([id]) => id);

  return products
    .filter(p => topProductIds.includes(p.id))
    .map(p => ({
      ...p,
      totalSales: salesByProduct.get(p.id) || 0
    }));
};
```

---

## 🌍 Gestion Multilingue

### Hook personnalisé pour la langue

```typescript
import { useState, createContext, useContext } from 'react';

type Language = 'fr' | 'en';

const LanguageContext = createContext<{
  language: Language;
  setLanguage: (lang: Language) => void;
}>({
  language: 'fr',
  setLanguage: () => {}
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('fr');

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
```

### Utilisation dans les composants

```typescript
import { useLanguage } from './LanguageContext';

function BlogCard({ blog }: { blog: Blog }) {
  const { language } = useLanguage();

  return (
    <div>
      <h3>{language === 'fr' ? blog.titleFr : blog.titleEn}</h3>
      <p>{language === 'fr' ? blog.summaryFr : blog.summaryEn}</p>
    </div>
  );
}
```

---

## 💾 Initialiser les Données de Démonstration

```typescript
import { initializeAllData } from './utils/initData';

// Dans un composant ou au démarrage de l'app
const handleInitData = async () => {
  const result = await initializeAllData();
  if (result.success) {
    console.log('✅ Données initialisées avec succès');
  } else {
    console.error('❌ Erreur:', result.error);
  }
};
```

---

## 🎯 Bonnes Pratiques

### 1. Gestion des Erreurs

```typescript
try {
  const data = await blogsAPI.getAll();
  setBlogs(data);
} catch (error) {
  console.error('Error fetching blogs:', error);
  // Afficher un message d'erreur à l'utilisateur
  toast.error('Impossible de charger les blogs');
}
```

### 2. Loading States

```typescript
const [loading, setLoading] = useState(false);

const fetchData = async () => {
  setLoading(true);
  try {
    const data = await blogsAPI.getAll();
    setBlogs(data);
  } finally {
    setLoading(false);
  }
};
```

### 3. Optimisation avec useMemo

```typescript
import { useMemo } from 'react';

const filteredAndSortedBlogs = useMemo(() => {
  return blogs
    .filter(blog => blog.published)
    .sort((a, b) => 
      new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
    );
}, [blogs]);
```

### 4. Confirmation avant Suppression

```typescript
const handleDelete = async (id: string) => {
  if (window.confirm('Êtes-vous sûr de vouloir supprimer cet élément ?')) {
    await blogsAPI.delete(id);
    fetchBlogs();
  }
};
```

---

## 🔗 Ressources

- **Documentation complète :** [DATABASE_STRUCTURE.md](./DATABASE_STRUCTURE.md)
- **Types TypeScript :** [/types/index.ts](./types/index.ts)
- **API Client :** [/utils/api.ts](./utils/api.ts)
- **Données de démo :** [/utils/initData.ts](./utils/initData.ts)

---

**Dernière mise à jour :** 7 octobre 2025  
**Prêt à développer !** 🚀
