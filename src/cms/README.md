# 🎛️ FIMA CMS - Content Management System

## 📋 Vue d'ensemble

Le CMS FIMA est une interface d'administration complète permettant de gérer tout le contenu du site FIMA de manière dynamique. Il est construit sur l'infrastructure Supabase existante et utilise les hooks personnalisés déjà créés.

## 🏗️ Architecture

```
/cms
├── CMSApp.tsx                 # Point d'entrée principal du CMS
├── index.ts                   # Exports du CMS
├── /layouts
│   └── CMSLayout.tsx         # Layout principal avec sidebar
├── /components
│   ├── CMSSidebar.tsx        # Barre latérale de navigation
│   ├── CMSHeader.tsx         # En-tête avec recherche et profil
│   └── StatsCard.tsx         # Carte de statistiques
└── /pages
    ├── CMSDashboard.tsx      # Tableau de bord avec stats
    ├── CMSProducts.tsx       # Gestion des produits
    ├── CMSHeroSlides.tsx     # Gestion des slides Hero
    ├── CMSArticles.tsx       # Gestion des articles/blog
    ├── CMSTestimonials.tsx   # Gestion des témoignages
    ├── CMSTeam.tsx           # Gestion de l'équipe
    ├── CMSVideos.tsx         # Gestion des vidéos
    ├── CMSOrders.tsx         # Gestion des commandes
    ├── CMSClients.tsx        # Gestion des clients
    ├── CMSSettings.tsx       # Paramètres du site
    └── CMSLogin.tsx          # Page de connexion
```

## 🚀 Accès au CMS

### Depuis le site web

Pour accéder au CMS depuis le site :

```typescript
// Depuis n'importe quel composant avec accès à onNavigate
onNavigate('cms');
```

### URL directe

Le CMS sera accessible via :
```
https://votre-site.com/cms
```

### Identifiants de démonstration

```
Email: admin@fima.com
Mot de passe: admin123
```

## 🎨 Fonctionnalités principales

### ✅ Implémentées

1. **Dashboard**
   - Statistiques en temps réel (ventes, articles, commandes, clients)
   - Activité récente sur le contenu
   - Commandes récentes
   - Actions rapides

2. **Gestion des Hero Slides** (COMPLET)
   - Création/modification/suppression de slides
   - Support images ET vidéos
   - Traductions FR/EN
   - Gestion de l'ordre d'affichage
   - Paramètres de durée et lecture
   - Prévisualisation en temps réel

3. **Catalogue Produits**
   - Liste complète des produits
   - Filtrage par métier (FIMA Couchage, Design, Univers Glass)
   - Recherche par nom/SKU
   - Visualisation des stocks
   - Statuts (Actif/Inactif/Rupture)

4. **Articles & Blog**
   - Liste des articles
   - Statuts (Publié/Brouillon/Programmé)
   - Compteur de vues
   - Catégories

### 🚧 En développement

- Formulaires de création/édition pour :
  - Produits
  - Articles
  - Témoignages
  - Équipe
  - Vidéos
- Gestion des commandes (détails, statuts)
- Gestion des clients
- Upload d'images/médias
- Éditeur de texte riche pour articles

## 🔌 Intégration avec Supabase

Le CMS utilise les hooks existants et l'API Supabase :

### Hooks utilisés

```typescript
// Hero Slides
import { useHeroSlides } from '../hooks/useHeroSlides';

// Produits
import { useProducts } from '../hooks/useProducts';

// Articles
import { useArticles } from '../hooks/useBlogs';

// Témoignages
import { useTestimonials } from '../hooks/useTestimonials';

// Équipe
import { useTeam } from '../hooks/useTeam';

// Vidéos
import { useVideoStories } from '../hooks/useVideoStories';
```

### Routes API utilisées

Le CMS communique avec :
- `/make-server-98c6ec1c/api/hero-slides`
- `/make-server-98c6ec1c/api/products`
- `/make-server-98c6ec1c/api/articles`
- `/make-server-98c6ec1c/api/testimonials`
- `/make-server-98c6ec1c/api/team`
- `/make-server-98c6ec1c/api/videos`

## 🎨 Design System

Le CMS suit la charte graphique FIMA :

### Couleurs principales

```css
--fima-green: #B5C233   /* Boutons primaires, accents */
--fima-gray: #6E6E6E    /* Textes secondaires */
--fima-red: #E30613     /* Actions destructives */
--fima-blue: #4A52A8    /* Informations */
```

### Typographie

- **Titres** : Montserrat (600-700)
- **Texte** : Inter (400-500)

### Composants

- **Badges de statut** : Carrés, sans border-radius
- **Boutons** : Carrés, avec hover opacity
- **Tables** : Lignes hover avec fond gris clair
- **Cartes** : Border simple, shadow au hover

## 📱 Responsive

Le CMS est optimisé pour :
- ✅ Desktop (1920px+)
- ✅ Laptop (1280px - 1920px)
- ⚠️ Tablet (768px - 1280px) - Partiellement responsive
- ❌ Mobile (< 768px) - Non recommandé

## 🔐 Authentification

### Système actuel (Demo)

Authentification simple avec credentials hardcodés :
```typescript
email === 'admin@fima.com' && password === 'admin123'
```

### TODO : Intégration Supabase Auth

```typescript
// À implémenter
import { useUser } from '../contexts/UserContext';

const { user, signIn, signOut } = useUser();

// Vérifier le rôle admin
if (user?.role === 'admin') {
  // Accès autorisé
}
```

## 🛠️ Développement

### Ajouter une nouvelle page CMS

1. Créer le fichier dans `/cms/pages/` :

```typescript
// /cms/pages/CMSNewFeature.tsx
export function CMSNewFeature() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Nouvelle Fonctionnalité
        </h1>
        <p className="text-gray-600">Description</p>
      </div>
      {/* Contenu */}
    </div>
  );
}
```

2. Ajouter dans `CMSApp.tsx` :

```typescript
import { CMSNewFeature } from './pages/CMSNewFeature';

// Dans le type CMSPage
type CMSPage = '...' | 'new-feature';

// Dans le switch renderPage()
case 'new-feature':
  return <CMSNewFeature />;
```

3. Ajouter dans la sidebar `CMSSidebar.tsx` :

```typescript
const menuItems: MenuItem[] = [
  // ...
  { id: 'new-feature', label: 'Nouvelle Fonctionnalité', icon: Icon, section: 'Section' },
];
```

## 📊 Statistiques du Dashboard

Les statistiques sont actuellement mockées. Pour les rendre dynamiques :

```typescript
// Remplacer les données mockées par des appels API
const [stats, setStats] = useState<DashboardStats>({
  totalSales: 0,
  totalArticles: 0,
  totalOrders: 0,
  activeClients: 0
});

useEffect(() => {
  // Récupérer les vraies stats depuis Supabase
  fetchDashboardStats().then(setStats);
}, []);
```

## 🎯 Prochaines étapes

### Priorité 1 - Fonctionnalités essentielles
- [ ] Formulaire complet de création/édition de produits
- [ ] Formulaire complet de création/édition d'articles
- [ ] Upload d'images (Supabase Storage)
- [ ] Éditeur de texte riche (TipTap / Lexical)

### Priorité 2 - Améliorations UX
- [ ] Prévisualisation en temps réel
- [ ] Drag & drop pour réorganiser
- [ ] Recherche globale dans le CMS
- [ ] Filtres avancés
- [ ] Export CSV/PDF

### Priorité 3 - Analytics
- [ ] Graphiques de ventes (Recharts)
- [ ] Analytics de contenu (vues, engagement)
- [ ] Rapports personnalisables

## 🐛 Debugging

### Erreurs communes

1. **"Cannot find module 'cms/CMSApp'"**
   - Vérifier que le lazy import dans App.tsx est correct
   - Path: `./cms/CMSApp` (relatif)

2. **"Unauthorized"**
   - Vérifier les identifiants
   - Vérifier que l'utilisateur a le rôle 'admin'

3. **"Failed to fetch"**
   - Vérifier que les routes API Supabase sont actives
   - Vérifier projectId et publicAnonKey

## 📝 License

Ce CMS est propriété de FIMA et fait partie intégrante du site web FIMA.

---

**Développé pour FIMA** | Version 1.0.0 | Janvier 2025
