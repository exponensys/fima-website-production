# 📊 INVENTAIRE DES DONNÉES HARDCODÉES RESTANTES

> **Date**: 8 octobre 2025  
> **État de migration Supabase**: 10/10 sections migrées (100%)  
> **Objectif**: Identifier toutes les données hardcodées pour une migration complète vers Supabase

---

## ✅ SECTIONS DÉJÀ MIGRÉES (10/10)

Ces sections utilisent déjà Supabase avec hooks personnalisés et données de fallback locales :

1. ✅ **Hero Slides** (`useHeroSlides`)
2. ✅ **Products** (`useProducts`)
3. ✅ **Bedtime Stories / Testimonials** (`useTestimonials`)
4. ✅ **Video Stories** (`useVideoStories`)
5. ✅ **Company Presentation** (`useCompanyPresentation`)
6. ✅ **Team Section** (`useTeam`)
7. ✅ **News Section** (`useBlogs`)
8. ✅ **Projects** (`useProjects`)
9. ✅ **Newsletter** (`useNewsletter`)
10. ✅ **Business Units** (`useSupabaseBusinessUnits`)

---

## 🔴 DONNÉES HARDCODÉES À MIGRER

### 1️⃣ **HEADER** (`/components/Header.tsx`)

#### A. Langues (lignes 95-100)
```typescript
const languages = [
  { code: "FR" as const, name: "Français", flag: "🇫🇷" },
  { code: "EN" as const, name: "English", flag: "🇬🇧" }
];
```
**Migration recommandée**: Table `site_settings` avec clé `languages`

#### B. Devises (lignes 103-108)
```typescript
const currencies = [
  { code: "XOF" as const, symbol: "F CFA", name: "Franc CFA" },
  { code: "EUR" as const, symbol: "€", name: "Euro" },
  { code: "USD" as const, symbol: "$", name: "US Dollar" },
  { code: "GBP" as const, symbol: "£", name: "British Pound" }
];
```
**Migration recommandée**: Table `site_settings` avec clé `currencies`

#### C. Informations métiers (lignes 110-135)
```typescript
const businessUnits = [
  {
    key: "fima-couchage",
    name: "FIMA Couchage",
    description: "Literie & Mobilier de chambre",
    icon: <Home className="w-5 h-5" />,
    color: "#B5C233",
    projects: "150+ projets"
  },
  // ... FIMA Design, UNIVERS GLASS
];
```
**Migration recommandée**: Déjà disponible via `useSupabaseBusinessUnits`, mais utilisé en local ici

#### D. Catégories de produits par métier (lignes 138-250+)
**Structure complète** avec :
- `fima-couchage` : Matelas, Sommiers, Oreillers, Linge de lit, Accessoires
- `fima-design` : Menuiserie, Ameublement, Cuisines, Dressings, Aménagements
- `univers-glass` : Vitrerie, Menuiserie Aluminium, Fenêtres, Portes, Cloisons

**Migration recommandée**: Table `product_categories` avec relations vers `business_units`

---

### 2️⃣ **FOOTER** (`/components/Footer.tsx`)

#### A. Description entreprise (ligne 58-61)
```typescript
"Leader dans la litterie, l'ameublement et la vitrerie depuis plus de 40 ans..."
```

#### B. Certifications (lignes 65-84)
```typescript
- "Entreprise du Patrimoine Vivant"
- "Certifié ISO 9001"
```

#### C. Liens réseaux sociaux (lignes 87-128)
- Facebook, Instagram, LinkedIn, Twitter (liens hardcodés)

#### D. Informations de contact (structure complète)
- Adresses physiques
- Téléphones
- Emails
- Horaires d'ouverture

**Migration recommandée**: Table `site_settings` avec clés :
- `company_description`
- `certifications`
- `social_links`
- `contact_info`

---

### 3️⃣ **CHATWIDGET** (`/components/ChatWidget.tsx`)

#### A. Messages initiaux (lignes 12-19)
```typescript
const initialMessages = [
  {
    id: '1',
    text: 'Bonjour ! Je suis Sophie, votre conseillère FIMA...',
    sender: 'support',
    timestamp: new Date()
  }
];
```

#### B. Quick Replies (lignes 21-26)
```typescript
const quickReplies = [
  'Informations sur les matelas',
  'Délais de livraison',
  'Retours et garanties',
  'Aide au choix'
];
```

#### C. Réponses automatiques (lignes 28-34)
```typescript
const autoReplies = {
  'matelas': 'Notre gamme de matelas...',
  'livraison': 'Nous livrons gratuitement...',
  'garantie': 'Tous nos matelas...',
  'prix': 'Nos prix commencent...',
  'taille': 'Nous proposons...'
};
```

**Migration recommandée**: Table `chatbot_config` avec :
- `initial_messages`
- `quick_replies`
- `auto_responses`

---

### 4️⃣ **QUOTE REQUEST MODAL** (`/components/QuoteRequestModal.tsx`)

#### A. Business Units (lignes 37-41)
```typescript
const businessUnits = [
  { id: 'fima-couchage', name: 'FIMA Couchage', icon: '🛏️', description: '...' },
  { id: 'fima-design', name: 'FIMA Design', icon: '🔨', description: '...' },
  { id: 'univers-glass', name: 'UNIVERS GLASS', icon: '🏗️', description: '...' }
];
```

#### B. Types de projets (lignes 43-49)
```typescript
const projectTypes = [
  { id: 'residential', name: 'Projet résidentiel', description: '...' },
  { id: 'commercial', name: 'Projet commercial', description: '...' },
  { id: 'hospitality', name: 'Hôtellerie', description: '...' },
  { id: 'institutional', name: 'Institutionnel', description: '...' },
  { id: 'industrial', name: 'Industriel', description: '...' }
];
```

#### C. Fourchettes budget (lignes 51-58)
```typescript
const budgetRanges = [
  { id: 'under-5m', name: 'Moins de 5M FCFA' },
  { id: '5m-15m', name: '5M - 15M FCFA' },
  { id: '15m-50m', name: '15M - 50M FCFA' },
  { id: '50m-100m', name: '50M - 100M FCFA' },
  { id: 'over-100m', name: 'Plus de 100M FCFA' },
  { id: 'to-discuss', name: 'À discuter' }
];
```

#### D. Délais (lignes 60-66)
```typescript
const timelineOptions = [
  { id: 'urgent', name: 'Urgent (< 1 mois)' },
  { id: '1-3months', name: '1 à 3 mois' },
  { id: '3-6months', name: '3 à 6 mois' },
  { id: '6-12months', name: '6 à 12 mois' },
  { id: 'flexible', name: 'Flexible' }
];
```

**Migration recommandée**: Table `form_options` avec catégories :
- `quote_project_types`
- `quote_budget_ranges`
- `quote_timelines`

---

### 5️⃣ **EXPERT CONSULTATION MODAL** (`/components/ExpertConsultationModal.tsx`)

#### A. Services (lignes 42-48)
```typescript
const services = [
  { id: 'literie', name: 'Literie & Couchage', icon: '🛏️', description: '...' },
  { id: 'menuiserie', name: 'Menuiserie & Design', icon: '🪚', description: '...' },
  { id: 'vitrerie', name: 'Vitrerie & Aluminium', icon: '🏢', description: '...' },
  { id: 'b2b', name: 'Solutions B2B', icon: '🏗️', description: '...' },
  { id: 'autre', name: 'Autre projet', icon: '💡', description: '...' }
];
```

#### B. Fourchettes budget (lignes 50-56)
```typescript
const budgetRanges = [
  { id: 'small', label: 'Moins de 500 000 F CFA', value: '<500k' },
  { id: 'medium', label: '500k - 2M F CFA', value: '500k-2M' },
  { id: 'large', label: '2M - 10M F CFA', value: '2M-10M' },
  { id: 'enterprise', label: 'Plus de 10M F CFA', value: '10M+' },
  { id: 'discuss', label: 'À discuter', value: 'discuss' }
];
```

#### C. Créneaux horaires (lignes 66-69)
```typescript
const timeSlots = [
  '09:00', '09:30', '10:00', '10:30', '11:00', '11:30', 
  '14:00', '14:30', '15:00', '15:30', '16:00', '16:30'
];
```

**Migration recommandée**: Table `form_options` avec catégories :
- `consultation_services`
- `consultation_budget_ranges`
- `consultation_timelines`
- `appointment_time_slots`

---

### 6️⃣ **PAGES MÉTIERS**

#### A. FIMA COUCHAGE PAGE (`/components/business-units/FimaCouchagePage.tsx`)

**Points d'expertise** (lignes 68-88) :
```typescript
const expertisePoints = [
  { icon: <Award />, title: "30 ans d'expertise", description: "..." },
  { icon: <Shield />, title: "Garantie 10 ans", description: "..." },
  { icon: <RotateCcw />, title: "100 nuits d'essai", description: "..." }
];
```

**Migration recommandée**: Table `business_unit_features` liée à `business_units`

#### B. FIMA DESIGN PAGE (`/components/business-units/FimaDesignPage.tsx`)

**Catégories design** (lignes 15-40) :
```typescript
const designCategories = [
  { key: 'mobilier', name: 'Mobilier sur-mesure', icon: '🪑', description: '...' },
  { key: 'cuisines', name: 'Cuisines équipées', icon: '🏠', description: '...' },
  { key: 'dressings', name: 'Dressings & Rangements', icon: '👔', description: '...' },
  { key: 'bureaux', name: 'Mobilier de bureau', icon: '💼', description: '...' }
];
```

**Points d'expertise** (lignes 42-63)

**Réalisations** (lignes 65-87) :
```typescript
const realisations = [
  { id: 1, title: "Villa Moderne - Cocody", category: "...", image: "...", description: "..." },
  { id: 2, title: "Bureau Exécutif - Plateau", category: "...", image: "...", description: "..." },
  { id: 3, title: "Cuisine Équipée - Deux Plateaux", category: "...", image: "...", description: "..." }
];
```

**Migration recommandée**: Tables :
- `business_unit_categories`
- `business_unit_features`
- `business_unit_showcase_projects`

#### C. UNIVERS GLASS PAGE (`/components/business-units/UniversGlassPage.tsx`)

**Services** (lignes 15-40)
**Points d'expertise** (lignes 42-63)
**Références** (lignes 65-90)
**Spécifications techniques** (lignes 92-110)

**Migration recommandée**: Mêmes tables que FIMA Design + `technical_specifications`

---

### 7️⃣ **PAGES B2B**

#### A. B2B LANDING PAGE (`/components/B2BLandingPage.tsx`)

**Business Units info** (lignes 13-35)
**Avantages uniques** (lignes 37-62)
**Processus B2B** (lignes 64-95)
**Clients références** (lignes 97-116)

**Migration recommandée**: Tables :
- `b2b_benefits`
- `b2b_process_steps`
- `b2b_client_references`

#### B. LARGE ACCOUNTS PAGE (`/components/LargeAccountsPage.tsx`)

**Statistiques** (lignes 54-59) :
```typescript
const stats = [
  { icon: Building2, value: '500+', label: 'Grandes Entreprises', color: '#B5C233' },
  { icon: Users, value: '50K+', label: 'Collaborateurs Équipés', color: '#E30613' },
  { icon: Briefcase, value: '1000+', label: 'Projets Réalisés', color: '#4A52A8' },
  { icon: Award, value: '15+', label: 'Années d\'Expérience', color: '#6E6E6E' }
];
```

**Avantages** (lignes 61-86)
**Services** (lignes 88-105)

**Migration recommandée**: Tables :
- `large_accounts_stats`
- `large_accounts_benefits`
- `large_accounts_services`

---

### 8️⃣ **PAGES INSTITUTIONNELLES**

#### A. OUR HISTORY PAGE (`/components/OurHistoryPage.tsx`)

**Jalons historiques** (lignes 29-120) :
```typescript
const milestones = [
  { year: "1985", title: "Création de FIMA", description: "...", image: "...", achievements: [...] },
  { year: "1992", title: "Expansion des activités", description: "...", image: "...", achievements: [...] },
  // ... 7 jalons au total jusqu'à 2024
];
```

**Valeurs** (lignes ~150+)
**Chiffres clés** (lignes ~180+)

**Migration recommandée**: Tables :
- `company_milestones`
- `company_values`
- `company_key_figures`

#### B. OUR CERTIFICATIONS PAGE

Similaire à History - **Certifications détaillées avec images et descriptions**

**Migration recommandée**: Table `certifications`

---

### 9️⃣ **PRODUCT DETAIL PAGE** (`/components/ProductDetailPage.tsx`)

#### Avis clients (lignes 90-320)
```typescript
const sampleReviews: Review[] = [
  { id: '1', author: '...', rating: 5, title: '...', content: '...', date: '...', verified: true, helpful: 12 },
  // ... Multiple reviews hardcodées
];
```

**Migration recommandée**: Table `product_reviews` avec relation vers `products`

---

### 🔟 **DATA FILES**

#### A. `/data/filters.ts`

**Catégories** (lignes 1-24) :
```typescript
export const categories = [
  { name: "Tous", value: "all" },
  // FIMA COUCHAGE
  { name: "Matelas", value: "matelas", business: "fima-couchage" },
  { name: "Sommiers", value: "sommiers", business: "fima-couchage" },
  // ... etc
];
```

**Business Units** (lignes 26-31)
**Fermeté** (lignes 33-38)
**Matériaux** (lignes 40-64)

**Migration recommandée**: Tables :
- `product_categories` (déjà partiellement migrée)
- `product_attributes` (fermeté, matériaux)
- Intégration avec Strapi existant

---

### 1️⃣1️⃣ **SITEMAP** (`/components/FimaSitemap.tsx`)

**Structure complète du site** (lignes 35-400+) :
```typescript
const sitemapData: SitemapNode = {
  id: "root",
  title: "FIMA - Site E-commerce B2B/B2C",
  type: "page",
  icon: <Home />,
  children: [
    // Toute l'arborescence du site hardcodée
  ]
};
```

**Migration recommandée**: Table `site_structure` avec hiérarchie récursive

---

## 📋 RÉCAPITULATIF PAR PRIORITÉ

### 🔴 **PRIORITÉ 1 - CRITIQUE** (Données utilisées partout)
1. **Langues et devises** (Header) → Table `site_settings`
2. **Business Units details** (Header, modals, pages) → Étendre `business_units`
3. **Catégories de produits** (Header, filtres) → Table `product_categories`

### 🟠 **PRIORITÉ 2 - IMPORTANTE** (Formulaires et modals)
4. **Options formulaires devis** (QuoteRequestModal) → Table `form_options`
5. **Options consultation expert** (ExpertConsultationModal) → Table `form_options`
6. **Configuration chatbot** (ChatWidget) → Table `chatbot_config`

### 🟡 **PRIORITÉ 3 - MOYENNE** (Pages métiers)
7. **Contenu pages métiers** (FimaCouchage, FimaDesign, UniversGlass) → Tables `business_unit_*`
8. **Contenu pages B2B** (B2BLanding, LargeAccounts) → Tables `b2b_*`

### 🟢 **PRIORITÉ 4 - BASSE** (Contenu éditorial)
9. **Footer et contact** → Table `site_settings`
10. **Notre histoire** (OurHistoryPage) → Table `company_milestones`
11. **Certifications** (OurCertificationsPage) → Table `certifications`
12. **Avis produits** (ProductDetailPage) → Table `product_reviews`
13. **Sitemap** (FimaSitemap) → Table `site_structure`

---

## 🎯 PLAN D'ACTION RECOMMANDÉ

### Phase 1 : Configuration générale (Priorité 1)
```sql
-- Créer tables de configuration
CREATE TABLE site_settings (
  id UUID PRIMARY KEY,
  key TEXT UNIQUE NOT NULL,
  value JSONB NOT NULL,
  category TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Étendre business_units existante
ALTER TABLE business_units ADD COLUMN features JSONB;
ALTER TABLE business_units ADD COLUMN categories JSONB;
ALTER TABLE business_units ADD COLUMN showcase_projects JSONB;
```

### Phase 2 : Formulaires et interactions (Priorité 2)
```sql
CREATE TABLE form_options (
  id UUID PRIMARY KEY,
  category TEXT NOT NULL,
  options JSONB NOT NULL,
  translations JSONB,
  active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE chatbot_config (
  id UUID PRIMARY KEY,
  initial_messages JSONB,
  quick_replies JSONB,
  auto_responses JSONB,
  active BOOLEAN DEFAULT true,
  updated_at TIMESTAMPTZ DEFAULT NOW()
);
```

### Phase 3 : Contenu riche (Priorités 3-4)
```sql
-- Tables pour contenu éditorial
CREATE TABLE company_milestones (...)
CREATE TABLE certifications (...)
CREATE TABLE product_reviews (...)
CREATE TABLE b2b_benefits (...)
CREATE TABLE b2b_client_references (...)
```

---

## 📊 STATISTIQUES

- **Total sections hardcodées** : ~25 composants
- **Total data structures** : ~50 arrays/objects
- **Estimation lignes de code** : ~2000 lignes de données
- **Tables Supabase à créer** : ~15 nouvelles tables
- **Hooks à créer** : ~8 nouveaux hooks

---

## ✅ VALIDATION

Une fois migrées, toutes les données seront :
- ✅ Éditables via interface admin Supabase
- ✅ Multilingues (FR/EN minimum)
- ✅ Versionnées et auditables
- ✅ Avec fallback local si Supabase indisponible
- ✅ Type-safe avec TypeScript
- ✅ Optimisées pour performance (cache, pagination)

---

**Prochaines étapes recommandées** :
1. Valider les priorités avec l'équipe
2. Créer les schémas de tables Supabase
3. Développer les hooks personnalisés
4. Migrer progressivement par priorité
5. Tester les fallbacks
6. Documenter l'interface admin
