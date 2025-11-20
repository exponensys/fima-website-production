# 📊 Inventaire Complet des Données Mockées - FIMA

## 🎯 Résumé Exécutif

Actuellement, votre application FIMA utilise **3 fichiers principaux** contenant des données mockées hardcodées. Voici l'inventaire complet avec le plan d'action pour chaque fichier.

---

## 📁 Fichiers de Données Mockées

### 1. `/data/products.ts` ⚠️ CRITIQUE
**Taille**: ~320 lignes  
**Statut**: ❌ Données mockées actives  
**Utilisation**: Utilisé par AllProductsPage, CategoryPage, ProductCard, etc.

#### Contenu:
- ✅ **~50+ produits mockés** pour les 3 métiers FIMA
  - **FIMA Couchage**: Matelas (10+), Sommiers (5+), Oreillers (5+), Linge de lit (5+), Accessoires (5+)
  - **FIMA Design**: Cuisines (5+), Dressings (3+), Ameublement (5+), Menuiserie (3+)
  - **UNIVERS GLASS**: Fenêtres (3+), Portes (3+), Vitrerie (3+), Cloisons (2+)

#### Structure d'un produit mocké:
```typescript
{
  id: "1",
  image: "https://images.unsplash.com/...",
  title: "Matelas Confort Premium",
  description: "Matelas ressorts ensachés 7 zones de confort...",
  price: "489€",
  originalPrice: "599€",
  discount: "18%",
  badge: null,
  category: "matelas",
  business: "fima-couchage",
  firmness: "Ferme",
  material: "Ressorts",
  size: ["90x190", "140x190", "160x200"]
}
```

#### Exports:
- `allProducts` - Array de tous les produits
- `productCategoriesByBusiness` - Catégories par métier
- `allCategories` - Liste de toutes les catégories

#### Migration vers Supabase:
```typescript
// AVANT (données mockées)
import { allProducts } from '../data/products';
const products = allProducts.filter(p => p.category === 'matelas');

// APRÈS (Supabase)
import { useSupabaseProducts } from '../hooks/useSupabaseProducts';
import { useApp } from '../contexts/AppContext';

const { selectedLanguage } = useApp();
const { products, loading, error } = useSupabaseProducts({
  category: 'matelas',
  locale: selectedLanguage,
  limit: 20
});
```

#### Composants utilisant ce fichier:
- ✅ `AllProductsPage.tsx`
- ✅ `CategoryPage.tsx`
- ✅ `ProductCard.tsx`
- ✅ `ProductsSection.tsx` (via fallback)
- ✅ `FimaCouchagePage.tsx`
- ✅ `FimaDesignPage.tsx`
- ✅ `UniversGlassPage.tsx`

---

### 2. `/data/filters.ts` ⚠️ MOYEN
**Taille**: ~73 lignes  
**Statut**: ⚠️ Données de référence  
**Utilisation**: Filtres pour AllProductsPage et CategoryPage

#### Contenu:
- ✅ **Catégories** (24 catégories)
  - FIMA Couchage: 5 catégories
  - FIMA Design: 5 catégories
  - UNIVERS GLASS: 5 catégories

- ✅ **Business Units** (3 métiers)
  ```typescript
  { name: "FIMA Couchage", value: "fima-couchage", color: "#B5C233" },
  { name: "FIMA Design", value: "fima-design", color: "#6E6E6E" },
  { name: "UNIVERS GLASS", value: "univers-glass", color: "#4A52A8" }
  ```

- ✅ **Firmness** (Fermeté des matelas)
  - Moelleux, Médium, Ferme

- ✅ **Materials** (20+ matériaux)
  - FIMA Couchage: Ressorts, Mémoire de forme, Latex, Hybride, Plumes, Coton
  - FIMA Design: Chêne massif, Noyer massif, MDF laqué, etc.
  - UNIVERS GLASS: Verre sécurit, Verre feuilleté, Aluminium, etc.

#### Migration vers Supabase:
**Option A**: Garder ce fichier (données de référence statiques)
```typescript
// Ces données peuvent rester statiques car elles changent rarement
import { categories, materials, firmness } from '../data/filters';
```

**Option B**: Migrer vers Supabase (plus flexible)
```typescript
// Créer des tables de référence dans Supabase
CREATE TABLE product_categories (
  slug VARCHAR PRIMARY KEY,
  business_unit_slug VARCHAR,
  name_fr VARCHAR,
  name_en VARCHAR
);

CREATE TABLE product_materials (
  slug VARCHAR PRIMARY KEY,
  name_fr VARCHAR,
  name_en VARCHAR,
  category VARCHAR
);
```

#### Recommandation:
⚠️ **GARDER EN L'ÉTAT** pour l'instant. Ces données de référence changent rarement et peuvent rester hardcodées. Migration optionnelle plus tard.

---

### 3. `/data/supabase-data.ts` ✅ INITIALISATION
**Taille**: ~240 lignes  
**Statut**: ✅ Données d'initialisation Supabase  
**Utilisation**: Script d'initialisation pour Supabase (non utilisé en production)

#### Contenu:
- ✅ **Team Members** (5 membres d'équipe)
- ✅ **Articles** (6 articles de blog)
- ✅ **Testimonials** (4 témoignages clients)
- ✅ Fonction `initializeSupabaseData()` pour charger les données

#### Structure:
```typescript
export interface TeamMember {
  id: number;
  name: string;
  position: string;
  description: string;
  image: string;
  department: string;
  email?: string;
  linkedin?: string;
  // ...
}

export const initialTeamData = [
  {
    name: "Amadou Diallo",
    position: "Directeur Général",
    description: "Leader visionnaire avec 25 ans d'expérience...",
    image: "...",
    // ...
  }
];
```

#### Migration:
✅ **DÉJÀ PRÊT POUR SUPABASE**

Ces données sont destinées à initialiser Supabase. Elles sont utilisées via:
- `useTeamMembers()` - Hook Supabase déjà créé
- `useArticles()` - Hook Supabase déjà créé
- `useTestimonials()` - Hook Supabase déjà créé

Pour activer:
```typescript
// Dans un composant de test ou script d'initialisation
import { initializeSupabaseData } from '../data/supabase-data';

// Exécuter une seule fois
await initializeSupabaseData();
```

---

## 📦 Données Mockées dans les Composants

### Composants avec données hardcodées inline:

#### 1. `ProductsSection.tsx`
**Données mockées**:
- ✅ `fimaBusinessUnits` - 3 métiers avec catégories et images
- ✅ `fallbackProducts` - 6 produits de fallback
- ✅ `heroStyleBusinessUnits` - 3 métiers avec features

**Code**:
```typescript
const fimaBusinessUnits = [
  {
    id: 'fima-couchage',
    name: 'FIMA Couchage',
    title: 'Literie premium depuis 1985',
    color: '#B5C233',
    categories: [
      { name: 'Matelas', slug: 'matelas', image: '...' },
      // ...
    ]
  },
  // ...
];
```

**Migration**: Utiliser `useSupabaseBusinessUnits()`

---

#### 2. `Hero.tsx`
**Données mockées**:
- ✅ Slides du Hero avec textes et images
- ✅ Business Units avec features

**Migration**: Les slides peuvent rester hardcodés (contenu marketing statique)

---

#### 3. `NewsSection.tsx`
**Données mockées**:
- ✅ Articles/témoignages hardcodés

**Code**:
```typescript
const newsItems = [
  {
    id: "1",
    type: "testimonial",
    name: "Hôtel des Oliviers",
    location: "Dakar, Sénégal",
    content: "FIMA a transformé notre établissement...",
    // ...
  }
];
```

**Migration**: Utiliser `useSupabaseTestimonials()` ou `useSupabaseCaseStudies()`

---

#### 4. `TeamSection.tsx`
**Données mockées**:
- ✅ Membres d'équipe hardcodés

**Migration**: Utiliser `useTeamMembers()` depuis `/hooks/useSupabaseData.ts`

---

#### 5. Pages Business Units
- `FimaCouchagePage.tsx`
- `FimaDesignPage.tsx`
- `UniversGlassPage.tsx`

**Données mockées**:
- ✅ Produits filtrés depuis `allProducts`
- ✅ Features et avantages hardcodés

**Migration**:
```typescript
// Utiliser useSupabaseProducts avec filtre business unit
const { products } = useSupabaseProducts({
  businessUnit: 'fima-couchage',
  locale: selectedLanguage
});
```

---

## 🔄 Plan de Migration Complet

### Phase 1: Priorités HAUTES (1-2 semaines)

#### Étape 1.1: NewsSection ✨ URGENT
- [ ] Migrer vers `useSupabaseTestimonials()`
- [ ] Tester l'affichage
- [ ] Vérifier les traductions FR/EN

#### Étape 1.2: AllProductsPage ✨ URGENT
- [ ] Remplacer `import { allProducts }` par `useSupabaseProducts()`
- [ ] Ajouter filtres Supabase
- [ ] Tester pagination
- [ ] Gérer les états loading/error avec DataWrapper

#### Étape 1.3: CategoryPage ✨ URGENT
- [ ] Migrer vers `useSupabaseProducts({ category: ... })`
- [ ] Tester filtres par catégorie
- [ ] Vérifier traductions

---

### Phase 2: Priorités MOYENNES (2-4 semaines)

#### Étape 2.1: ProductDetailPage
- [ ] Utiliser `useSupabaseProduct(slug)`
- [ ] Charger données complètes depuis Supabase
- [ ] Gérer les images multiples

#### Étape 2.2: Pages Business Units
- [ ] FimaCouchagePage → `useSupabaseProducts({ businessUnit: 'fima-couchage' })`
- [ ] FimaDesignPage → `useSupabaseProducts({ businessUnit: 'fima-design' })`
- [ ] UniversGlassPage → `useSupabaseProducts({ businessUnit: 'univers-glass' })`

#### Étape 2.3: TeamSection
- [ ] Migrer vers `useTeamMembers()`
- [ ] Tester affichage équipe

---

### Phase 3: Priorités BASSES (4-6 semaines)

#### Étape 3.1: ProductsSection
- [ ] Remplacer `fallbackProducts` par données Supabase
- [ ] Migrer `fimaBusinessUnits` vers `useSupabaseBusinessUnits()`
- [ ] Tester carousel mobile

#### Étape 3.2: Hero
- [ ] **OPTIONNEL**: Migrer les slides vers Supabase
- [ ] Peut rester hardcodé (contenu marketing)

---

## 📊 Statistiques

### Données mockées totales:
- **~70 produits** hardcodés
- **24 catégories** de référence
- **20+ matériaux** de référence
- **3 business units** avec détails
- **5 membres d'équipe**
- **6 articles** de blog
- **4 témoignages** clients
- **~10 slides Hero**

### Total estimé:
**~150 entités de données mockées**

---

## ✅ Checklist de Migration

### Données à migrer vers Supabase:
- [ ] **Produits** (70+) → `products` table ✨ PRIORITÉ 1
- [ ] **Témoignages** (10+) → `social_proofs` table ✨ PRIORITÉ 1
- [ ] **Business Units** (3) → `business_units` table
- [ ] **Membres équipe** (5) → `team_members` table
- [ ] **Articles** (6) → `articles` table
- [ ] **Case Studies** → `social_proofs` table

### Données à garder hardcodées:
- ✅ **Catégories** → `/data/filters.ts` (changent rarement)
- ✅ **Matériaux** → `/data/filters.ts` (référence statique)
- ✅ **Slides Hero** → Composants (marketing statique)
- ✅ **Traductions** → `/utils/translations.ts` (i18n)
- ✅ **Devises** → `/utils/currency.ts` (taux de change)

---

## 🎯 Actions Immédiates

### Cette semaine:
1. ✅ **Exécuter le script SQL** dans Supabase (`/docs/supabase-init-data.sql`)
2. ✅ **Tester la connexion** avec le composant TestSupabase
3. ✅ **Migrer NewsSection** (témoignages) - Plus simple pour commencer
4. ✅ **Tester en production** avec quelques utilisateurs

### Semaine prochaine:
5. ✅ **Migrer AllProductsPage** - Impact majeur, beaucoup d'utilisateurs
6. ✅ **Migrer CategoryPage** - Dépend de AllProductsPage
7. ✅ **Ajouter plus de produits** dans Supabase
8. ✅ **Former l'équipe** sur l'utilisation de Supabase Dashboard

---

## 🛠️ Outils de Migration

### Script de migration automatique (à créer):
```typescript
// /scripts/migrate-products-to-supabase.ts
import { allProducts } from '../data/products';
import { createClient } from '@supabase/supabase-js';

async function migrateProducts() {
  const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
  
  for (const product of allProducts) {
    // Insérer dans Supabase
    await supabase.from('products').insert({
      slug: product.id,
      price_eur: parseFloat(product.price.replace('€', '')),
      // ...
    });
  }
}
```

---

## 📝 Notes Importantes

### Avantages de la migration:
✅ **Administration facile** via Supabase Dashboard  
✅ **Multilingue natif** (FR/EN)  
✅ **Mise à jour en temps réel** sans redéploiement  
✅ **Scalabilité** (1000+ produits)  
✅ **Recherche performante** avec index SQL  
✅ **Images stockées** dans Supabase Storage  
✅ **Historique des modifications** (audit)  

### Risques à gérer:
⚠️ **Downtime pendant migration** → Migration progressive  
⚠️ **Données manquantes** → Garder fallback sur données mockées  
⚠️ **Erreurs de mapping** → Tests approfondis requis  
⚠️ **Performance** → Optimiser les requêtes, ajouter cache  

---

## 🎉 Conclusion

Votre application FIMA utilise actuellement **~150 entités de données mockées** réparties dans:
- **3 fichiers principaux** (`products.ts`, `filters.ts`, `supabase-data.ts`)
- **~10 composants** avec données inline

**Recommandation**: Commencer par migrer **NewsSection** (simple, faible risque), puis **AllProductsPage** (impact majeur), en conservant les données de référence (`filters.ts`) hardcodées pour l'instant.

Le système Supabase est **prêt et opérationnel** ✅. Il suffit d'exécuter le script SQL et de commencer la migration composant par composant selon le plan ci-dessus.
