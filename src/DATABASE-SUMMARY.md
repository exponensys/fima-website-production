# 📋 Résumé de la Structure de Base de Données - FIMA CMS

**Système :** Supabase Key-Value Store  
**Architecture :** Clé-Valeur avec préfixes par type d'entité  
**Format :** JSON

---

## 🗂️ Table des Matières

1. [Vue d'Ensemble](#vue-densemble)
2. [Entités Principales](#entités-principales)
3. [Clés et Préfixes](#clés-et-préfixes)
4. [API Disponible](#api-disponible)
5. [Fichiers Importants](#fichiers-importants)

---

## 📊 Vue d'Ensemble

### Architecture

```
Supabase KV Store
├── blogs:{uuid}              → Articles de blog (FR/EN)
├── products:{uuid}           → Catalogue e-commerce avec variantes
├── customers:{uuid}          → Clients B2B et B2C
├── orders:{uuid}             → Commandes avec items et paiements
├── projects:{uuid}           → Portfolio de projets
├── testimonials:{uuid}       → Témoignages clients
├── careers:{uuid}            → Offres d'emploi
├── bedtime-stories:{uuid}    → Histoires pour enfants
├── video-stories:{uuid}      → Vidéos de présentation
├── team:{uuid}               → Membres de l'équipe
├── custom-pages:{uuid}       → Pages personnalisées
├── static-pages:{type}       → Pages statiques (about, contact, etc.)
├── languages:{code}          → Configuration multilingue (fr, en)
└── homepage:{section}        → Sections de la page d'accueil
```

### Statistiques

- **13 types d'entités** différents
- **Tous multilingues** (français/anglais)
- **E-commerce complet** avec variantes produits
- **Gestion B2B et B2C**
- **Pages personnalisables**

---

## 🎯 Entités Principales

### 1. **Contenu Dynamique** (Dynamic Content)

| Entité | Clé | Multilingue | Description |
|--------|-----|-------------|-------------|
| **Blogs** | `blogs:{uuid}` | ✅ | Articles de blog avec catégories et tags |
| **Projets** | `projects:{uuid}` | ✅ | Portfolio de projets clients |
| **Témoignages** | `testimonials:{uuid}` | ✅ | Avis clients avec notation |
| **Carrière** | `careers:{uuid}` | ✅ | Offres d'emploi |
| **Histoires du soir** | `bedtime-stories:{uuid}` | ✅ | Contes pour enfants |
| **Vidéos** | `video-stories:{uuid}` | ✅ | Vidéos de présentation |
| **Équipe** | `team:{uuid}` | ✅ | Membres de l'équipe |

### 2. **E-commerce**

| Entité | Clé | Caractéristiques |
|--------|-----|------------------|
| **Produits** | `products:{uuid}` | Variantes, stock, prix, images multiples |
| **Clients** | `customers:{uuid}` | B2B/B2C, remises, historique |
| **Commandes** | `orders:{uuid}` | Items, paiements, livraison, statuts |

### 3. **Pages**

| Entité | Clé | Type |
|--------|-----|------|
| **Pages personnalisées** | `custom-pages:{uuid}` | Flexibles, SEO |
| **Pages statiques** | `static-pages:{type}` | Prédéfinies (about, contact, etc.) |

### 4. **Configuration**

| Entité | Clé | Usage |
|--------|-----|-------|
| **Langues** | `languages:{code}` | Configuration FR/EN |
| **Sections Homepage** | `homepage:{section}` | Hero, About, CTA, etc. |

---

## 🔑 Clés et Préfixes

### Format Général

```
{entity_type}:{identifier}
```

### Exemples de Clés Réelles

```
blogs:550e8400-e29b-41d4-a716-446655440000
products:7c9e6679-7425-40de-944b-e07fc1f90ae7
customers:a1b2c3d4-e5f6-7890-abcd-ef1234567890
orders:ORD-2024-0123
languages:fr
static-pages:about
homepage:hero
```

---

## 📡 API Disponible

### Endpoints Principaux

**Base URL :** `https://{projectId}.supabase.co/functions/v1/make-server-ead4d8e2`

| Endpoint | Méthodes Supportées |
|----------|-------------------|
| `/blogs` | GET (liste), POST (créer) |
| `/blogs/:id` | GET (détail), PUT (modifier), DELETE (supprimer) |
| `/products` | GET, POST |
| `/products/:id` | GET, PUT, DELETE |
| `/customers` | GET, POST |
| `/customers/:id` | GET, PUT, DELETE |
| `/orders` | GET, POST |
| `/orders/:id` | GET, PUT, DELETE |
| `/projects` | GET, POST |
| `/projects/:id` | GET, PUT, DELETE |
| `/testimonials` | GET, POST |
| `/testimonials/:id` | GET, PUT, DELETE |
| `/careers` | GET, POST |
| `/careers/:id` | GET, PUT, DELETE |
| `/bedtime-stories` | GET, POST |
| `/bedtime-stories/:id` | GET, PUT, DELETE |
| `/video-stories` | GET, POST |
| `/video-stories/:id` | GET, PUT, DELETE |
| `/team` | GET, POST |
| `/team/:id` | GET, PUT, DELETE |
| `/custom-pages` | GET, POST |
| `/custom-pages/:id` | GET, PUT, DELETE |
| `/static-pages` | GET |
| `/static-pages/:type` | GET, PUT |
| `/languages` | GET |
| `/languages/:code` | GET, PUT |

### Utilisation dans le Code

```typescript
import { blogsAPI, productsAPI, customersAPI } from './utils/api';

// Récupérer des données
const blogs = await blogsAPI.getAll();
const products = await productsAPI.getAll();
const customers = await customersAPI.getAll();

// Créer une entité
const newBlog = await blogsAPI.create({ ... });

// Mettre à jour
await blogsAPI.update('id', { ... });

// Supprimer
await blogsAPI.delete('id');
```

---

## 📁 Fichiers Importants

### Documentation

| Fichier | Description |
|---------|-------------|
| **[DATABASE_STRUCTURE.md](./DATABASE_STRUCTURE.md)** | 📖 Documentation complète avec exemples détaillés |
| **[DATABASE_SUMMARY.md](./DATABASE_SUMMARY.md)** | 📋 Ce fichier (résumé rapide) |
| **[QUICK_START_DEVELOPMENT.md](./QUICK_START_DEVELOPMENT.md)** | 🚀 Guide pratique pour développeurs |

### Code

| Fichier | Description |
|---------|-------------|
| **[/types/index.ts](./types/index.ts)** | 🔷 Tous les types TypeScript |
| **[/utils/api.ts](./utils/api.ts)** | 🌐 Fonctions API client |
| **[/utils/initData.ts](./utils/initData.ts)** | 💾 Données de démonstration |

### Backend

| Fichier | Description |
|---------|-------------|
| **[/supabase/functions/server/index.tsx](./supabase/functions/server/index.tsx)** | 🖥️ Serveur Edge Function |
| **[/supabase/functions/server/kv_store.tsx](./supabase/functions/server/kv_store.tsx)** | 🗄️ Utilitaires KV Store |

---

## 🎨 Structure des Données - Exemples

### Blog (Exemple Minimal)

```json
{
  "id": "uuid-123",
  "titleFr": "Mon Article",
  "titleEn": "My Article",
  "slug": "mon-article",
  "summaryFr": "Résumé...",
  "summaryEn": "Summary...",
  "contentFr": "<p>Contenu...</p>",
  "contentEn": "<p>Content...</p>",
  "author": "John Doe",
  "category": "IoT & Innovation",
  "tags": ["IoT", "Tech"],
  "featuredImage": "https://...",
  "published": true,
  "publishedDate": "2024-09-15T00:00:00Z",
  "createdAt": "2024-09-10T10:30:00Z",
  "readTime": 5
}
```

### Produit (Exemple avec Variantes)

```json
{
  "id": "uuid-456",
  "name": "Riz Basmati Premium",
  "sku": "RIZ-BAS",
  "category": "Céréales & Grains",
  "price": 35000,
  "stock": 150,
  "unit": "sac",
  "description": "Riz de qualité...",
  "images": ["https://..."],
  "variants": [
    {
      "id": "var-1",
      "name": "25kg",
      "sku": "RIZ-BAS-25KG",
      "price": 35000,
      "stock": 100,
      "attributes": { "poids": "25kg" }
    },
    {
      "id": "var-2",
      "name": "50kg",
      "sku": "RIZ-BAS-50KG",
      "price": 65000,
      "stock": 50,
      "attributes": { "poids": "50kg" }
    }
  ],
  "status": "active",
  "createdAt": "2024-01-10T00:00:00Z"
}
```

### Commande (Exemple)

```json
{
  "id": "uuid-789",
  "orderNumber": "ORD-2024-0123",
  "customerId": "customer-uuid",
  "customerName": "Hôtel Ivoire",
  "customerEmail": "achats@hotel-ivoire.ci",
  "customerPhone": "+225 27 22 48 00 00",
  "items": [
    {
      "id": "item-1",
      "productId": "uuid-456",
      "name": "Riz Basmati - 25kg",
      "sku": "RIZ-BAS-25KG",
      "quantity": 10,
      "price": 35000,
      "total": 350000
    }
  ],
  "subtotal": 350000,
  "discount": 52500,
  "tax": 0,
  "shipping": 5000,
  "total": 302500,
  "status": "delivered",
  "paymentStatus": "paid",
  "paymentMethod": "mobile_money",
  "paymentProvider": "Orange Money",
  "shippingAddress": {
    "name": "Hôtel Ivoire",
    "phone": "+225 27 22 48 00 00",
    "address": "Boulevard de la République",
    "city": "Abidjan",
    "country": "Côte d'Ivoire"
  },
  "createdAt": "2024-09-20T10:00:00Z",
  "deliveredAt": "2024-09-21T16:45:00Z"
}
```

---

## 🌍 Multilingue

### Tous les champs texte ont FR et EN

**Exemple :**
```typescript
interface Blog {
  titleFr: string;    // "Mon Article"
  titleEn: string;    // "My Article"
  summaryFr: string;  // "Résumé..."
  summaryEn: string;  // "Summary..."
  contentFr: string;  // "<p>Contenu...</p>"
  contentEn: string;  // "<p>Content...</p>"
  // ...
}
```

### Affichage selon la langue

```typescript
const { language } = useLanguage(); // 'fr' ou 'en'

<h1>{language === 'fr' ? blog.titleFr : blog.titleEn}</h1>
```

---

## 💰 Gestion des Montants

**Tous les montants sont en FCFA (entiers)**

```typescript
interface Product {
  price: 35000;        // 35,000 FCFA
  stock: 150;          // 150 unités
}

interface Order {
  subtotal: 350000;    // 350,000 FCFA
  discount: 52500;     // 52,500 FCFA (remise)
  total: 302500;       // 302,500 FCFA
}
```

**Formatage pour affichage :**
```typescript
const formatPrice = (amount: number) => {
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'XOF', // Franc CFA
    minimumFractionDigits: 0
  }).format(amount);
};

// Usage
formatPrice(35000); // "35 000 FCFA"
```

---

## 📅 Gestion des Dates

**Toutes les dates sont en ISO 8601**

```typescript
interface Blog {
  createdAt: "2024-09-10T10:30:00Z";
  publishedDate: "2024-09-15T00:00:00Z";
  updatedAt: "2024-09-16T14:20:00Z";
}
```

**Création de dates :**
```typescript
const now = new Date().toISOString();
// "2024-10-07T14:30:00.000Z"
```

**Formatage pour affichage :**
```typescript
const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

// Usage
formatDate("2024-09-15T00:00:00Z"); // "15 septembre 2024"
```

---

## 🚀 Démarrage Rapide

### 1. Initialiser les Données de Démo

```typescript
import { initializeAllData } from './utils/initData';

await initializeAllData();
// ✅ Crée des données de démonstration pour toutes les entités
```

### 2. Récupérer des Données

```typescript
import { blogsAPI, productsAPI } from './utils/api';

const blogs = await blogsAPI.getAll();
const products = await productsAPI.getAll();
```

### 3. Créer une Nouvelle Entité

```typescript
const newBlog = await blogsAPI.create({
  titleFr: "Mon Nouveau Blog",
  titleEn: "My New Blog",
  // ... autres champs
  createdAt: new Date().toISOString()
});
```

---

## 📊 Cas d'Usage Fréquents

### Afficher les Blogs Publiés

```typescript
const blogs = await blogsAPI.getAll();
const publishedBlogs = blogs.filter(b => b.published);
```

### Calculer le Total d'une Commande

```typescript
const calculateOrderTotal = (items: OrderItem[]) => {
  const subtotal = items.reduce((sum, item) => sum + item.total, 0);
  const shipping = 5000; // Frais de livraison
  const discount = 0;    // Remise
  const tax = 0;         // TVA
  
  return {
    subtotal,
    discount,
    tax,
    shipping,
    total: subtotal - discount + tax + shipping
  };
};
```

### Vérifier le Stock Disponible

```typescript
const products = await productsAPI.getAll();

const lowStockProducts = products.filter(p => 
  p.stock > 0 && 
  p.lowStockThreshold && 
  p.stock <= p.lowStockThreshold
);

const outOfStockProducts = products.filter(p => p.stock === 0);
```

---

## 🎯 Bonnes Pratiques

### 1. Toujours Gérer les Erreurs

```typescript
try {
  const data = await blogsAPI.getAll();
} catch (error) {
  console.error('Error:', error);
  // Afficher un message d'erreur à l'utilisateur
}
```

### 2. Utiliser les Types TypeScript

```typescript
import { Blog, Product, Order } from './types';

const [blogs, setBlogs] = useState<Blog[]>([]);
```

### 3. Valider les Données Avant Création

```typescript
const createProduct = async (data: CreateProductInput) => {
  // Validation
  if (!data.name || !data.sku || !data.price) {
    throw new Error('Champs obligatoires manquants');
  }
  
  if (data.price < 0) {
    throw new Error('Le prix ne peut pas être négatif');
  }
  
  // Création
  return await productsAPI.create(data);
};
```

### 4. Confirmer les Actions Destructives

```typescript
const handleDelete = async (id: string) => {
  if (confirm('Supprimer définitivement ?')) {
    await blogsAPI.delete(id);
  }
};
```

---

## 📚 Prochaines Étapes

1. ✅ **Lire** [DATABASE_STRUCTURE.md](./DATABASE_STRUCTURE.md) pour les détails complets
2. ✅ **Consulter** [/types/index.ts](./types/index.ts) pour tous les types
3. ✅ **Utiliser** [QUICK_START_DEVELOPMENT.md](./QUICK_START_DEVELOPMENT.md) pour commencer
4. ✅ **Initialiser** les données de démo avec `/utils/initData.ts`
5. ✅ **Développer** vos composants avec `/utils/api.ts`

---

## 🎉 Félicitations !

Vous avez maintenant toutes les informations pour utiliser la base de données FIMA CMS.

**Questions ?** Consultez la documentation complète ou les types TypeScript.

**Prêt à coder ?** Utilisez le Quick Start Guide !

---

**Créé le :** 7 octobre 2025  
**Version :** 1.0.0  
**Statut :** ✅ Production Ready
