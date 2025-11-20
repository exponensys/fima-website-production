# Migration Supabase - Guide étape par étape

## 🎯 Objectif
Migrer progressivement l'application FIMA de données mockées vers Supabase tout en conservant la compatibilité et sans interruption de service.

## ✅ Système déjà en place

### Hooks Supabase créés
- ✅ `useSupabaseProducts` - Produits avec traductions
- ✅ `useSupabaseBusinessUnits` - Métiers FIMA
- ✅ `useSupabaseSocialProofs` - Témoignages et études de cas
- ✅ `useCreateQuote` - Création de devis
- ✅ `useCreateConsultation` - Consultation expert

### Types TypeScript
- ✅ `/types/supabase.ts` - Types complets pour toutes les tables

### Utilitaires
- ✅ `/utils/supabaseMapper.ts` - Mappers de données
- ✅ `/components/DataWrapper.tsx` - Wrapper universel pour états

## 📋 Plan de migration

### Phase 1: Préparation des données (URGENT)
1. **Créer les tables Supabase** si pas déjà fait
2. **Insérer les données de test** dans Supabase
3. **Vérifier les relations** entre tables

### Phase 2: Migration des composants principaux

#### Étape 1: NewsSection → Témoignages Supabase
**Priorité**: HAUTE
**Fichier**: `/components/NewsSection.tsx`
**Changements**:
```typescript
// AVANT
import { useArticles } from '../hooks/useSupabaseData';
const { articles, loading, error } = useArticles();

// APRÈS
import { useSupabaseTestimonials } from '../hooks/useSupabaseSocialProofs';
import { useApp } from '../contexts/AppContext';
import { mapSupabaseSocialProofToTestimonial } from '../utils/supabaseMapper';

const { selectedLanguage } = useApp();
const { 
  socialProofs: supabaseTestimonials, 
  loading, 
  error 
} = useSupabaseTestimonials(selectedLanguage, true);

const testimonials = supabaseTestimonials.map(mapSupabaseSocialProofToTestimonial);
```

#### Étape 2: AllProductsPage → Produits Supabase
**Priorité**: HAUTE  
**Fichier**: `/components/AllProductsPage.tsx`
**Changements**:
```typescript
// Import des hooks Supabase
import { useSupabaseProducts } from '../hooks/useSupabaseProducts';
import { useApp } from '../contexts/AppContext';
import { mapSupabaseProductToAppProduct } from '../utils/supabaseMapper';

function AllProductsPage() {
  const { selectedLanguage } = useApp();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 10000]);
  
  // Récupérer les produits depuis Supabase
  const { 
    products: supabaseProducts, 
    loading, 
    error,
    total 
  } = useSupabaseProducts({
    category: selectedCategory !== 'all' ? selectedCategory : undefined,
    minPrice: priceRange[0],
    maxPrice: priceRange[1],
    locale: selectedLanguage,
    limit: 20,
    offset: (currentPage - 1) * 20
  });

  // Mapper au format attendu
  const products = supabaseProducts.map(mapSupabaseProductToAppProduct);
  
  return (
    <DataWrapper loading={loading} error={error} data={products}>
      {/* Rendu des produits */}
    </DataWrapper>
  );
}
```

#### Étape 3: ProductDetailPage → Détail produit Supabase
**Priorité**: MOYENNE
**Fichier**: `/components/ProductDetailPage.tsx`
**Changements**:
```typescript
import { useSupabaseProduct } from '../hooks/useSupabaseProducts';

function ProductDetailPage({ product }) {
  const { selectedLanguage } = useApp();
  
  // Si on reçoit un slug, charger depuis Supabase
  const shouldLoadFromSupabase = typeof product === 'string';
  
  const { 
    product: supabaseProduct, 
    loading, 
    error 
  } = useSupabaseProduct(
    shouldLoadFromSupabase ? product : product?.slug,
    selectedLanguage
  );

  const displayProduct = shouldLoadFromSupabase 
    ? mapSupabaseProductToAppProduct(supabaseProduct) 
    : product;

  return (
    <DataWrapper loading={loading} error={error} data={displayProduct}>
      {/* Rendu du produit */}
    </DataWrapper>
  );
}
```

#### Étape 4: QuoteRequestModal → Création devis Supabase
**Priorité**: HAUTE
**Fichier**: `/components/QuoteRequestModal.tsx`
**Changements**:
```typescript
import { useCreateQuote } from '../hooks/useSupabaseQuotes';
import { useApp } from '../contexts/AppContext';
import { toast } from 'sonner@2.0.3';

function QuoteRequestModal({ isOpen, onClose }) {
  const { selectedLanguage } = useApp();
  const { createQuote, loading, error } = useCreateQuote();

  const handleSubmit = async (formData) => {
    const result = await createQuote({
      business_unit_slug: formData.businessUnit,
      estimated_budget: formData.budget,
      contact_preferences: {
        preferred_contact: formData.contactMethod,
        phone: formData.phone,
        email: formData.email,
        availability: formData.availability
      },
      locale: selectedLanguage,
      translations: {
        fr: {
          project_type: formData.projectType_fr,
          requirements: formData.requirements_fr
        },
        en: {
          project_type: formData.projectType_en,
          requirements: formData.requirements_en
        }
      }
    });

    if (result.success) {
      toast.success(
        selectedLanguage === 'fr' 
          ? 'Demande de devis envoyée avec succès !' 
          : 'Quote request sent successfully!'
      );
      onClose();
    } else {
      toast.error(result.error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Formulaire */}
      <button type="submit" disabled={loading}>
        {loading ? 'Envoi...' : 'Envoyer'}
      </button>
      {error && <p className="text-red-500">{error}</p>}
    </form>
  );
}
```

#### Étape 5: ExpertConsultationModal → Consultation Supabase
**Priorité**: MOYENNE
**Fichier**: `/components/ExpertConsultationModal.tsx`
**Changements**: similaires à QuoteRequestModal

#### Étape 6: Hero → Business Units Supabase
**Priorité**: BASSE (peut utiliser les données hardcodées)
**Fichier**: `/components/Hero.tsx`
**Changements**:
```typescript
import { useSupabaseBusinessUnits } from '../hooks/useSupabaseBusinessUnits';

function Hero() {
  const { selectedLanguage } = useApp();
  const { businessUnits, loading, error } = useSupabaseBusinessUnits(selectedLanguage);

  // Mapper au format attendu par Hero
  const fimaBusinessUnits = businessUnits.map(bu => ({
    id: bu.slug,
    name: bu.translation.name,
    title: bu.translation.description,
    color: bu.primary_color,
    icon: bu.icon_name
  }));

  return (
    <DataWrapper loading={loading} error={error} data={businessUnits}>
      {/* Rendu du Hero */}
    </DataWrapper>
  );
}
```

## 🔧 Instructions d'implémentation

### 1. Préparation Supabase

#### A. Créer les tables (si pas déjà fait)
Exécuter les scripts SQL du fichier `/docs/backend-cms-specifications.md` dans Supabase SQL Editor.

#### B. Insérer des données de test
```sql
-- Exemple pour business_units
INSERT INTO business_units (slug, primary_color, icon_name) VALUES
('fima-couchage', '#B5C233', 'bed'),
('fima-design', '#6E6E6E', 'wrench'),
('univers-glass', '#0EA5E9', 'building');

-- Traductions FR
INSERT INTO business_units_i18n (business_unit_id, locale, name, description) 
SELECT id, 'fr', 
  CASE slug
    WHEN 'fima-couchage' THEN 'FIMA Couchage'
    WHEN 'fima-design' THEN 'FIMA Design'
    WHEN 'univers-glass' THEN 'UNIVERS GLASS'
  END,
  CASE slug
    WHEN 'fima-couchage' THEN 'Literie et matelas professionnels'
    WHEN 'fima-design' THEN 'Menuiserie et ameublement'
    WHEN 'univers-glass' THEN 'Vitrerie et solutions aluminium'
  END
FROM business_units;

-- Traductions EN
INSERT INTO business_units_i18n (business_unit_id, locale, name, description)
SELECT id, 'en',
  CASE slug
    WHEN 'fima-couchage' THEN 'FIMA Bedding'
    WHEN 'fima-design' THEN 'FIMA Design'
    WHEN 'univers-glass' THEN 'UNIVERS GLASS'
  END,
  CASE slug
    WHEN 'fima-couchage' THEN 'Professional bedding and mattresses'
    WHEN 'fima-design' THEN 'Carpentry and furniture'
    WHEN 'univers-glass' THEN 'Glazing and aluminum solutions'
  END
FROM business_units;
```

### 2. Tester les hooks

Créer un composant de test :
```typescript
// /components/TestSupabase.tsx
import { useSupabaseProducts } from '../hooks/useSupabaseProducts';
import { useApp } from '../contexts/AppContext';

export function TestSupabase() {
  const { selectedLanguage } = useApp();
  const { products, loading, error } = useSupabaseProducts({
    locale: selectedLanguage,
    limit: 3
  });

  if (loading) return <div>Chargement...</div>;
  if (error) return <div>Erreur: {error}</div>;

  return (
    <div>
      <h2>Test Supabase - {products.length} produits trouvés</h2>
      {products.map(p => (
        <div key={p.id}>
          <h3>{p.translation.name}</h3>
          <p>{p.translation.description}</p>
          <p>Prix: {p.price_fcfa} F CFA</p>
        </div>
      ))}
    </div>
  );
}
```

### 3. Migration progressive

#### Option A: Double source (recommandé pour la transition)
```typescript
// Garder les deux sources pendant la migration
const { products: supabaseProducts, loading: supabaseLoading } = useSupabaseProducts(...);
const { products: mockProducts } = useMockProducts();

// Utiliser Supabase si disponible, sinon fallback sur mock
const products = supabaseProducts.length > 0 ? supabaseProducts : mockProducts;
```

#### Option B: Feature flag
```typescript
const USE_SUPABASE = true; // ou depuis env variable

const products = USE_SUPABASE 
  ? useSupabaseProducts(...) 
  : useMockProducts();
```

## 🚨 Points d'attention

### Authentification requise
Les hooks `useCreateQuote` et `useCreateConsultation` requièrent une authentification Supabase :
```typescript
// Vérifier si l'utilisateur est connecté
const { user, isAuthenticated } = useUser();

if (!isAuthenticated) {
  // Rediriger vers login ou afficher message
  toast.error('Veuillez vous connecter pour créer un devis');
  return;
}
```

### Gestion des images
Les URLs d'images Supabase peuvent être différentes. S'assurer que :
- Le champ `images` est un tableau JSON dans Supabase
- Les images sont stockées dans Supabase Storage avec des URLs signées
- Fallback sur images Unsplash si pas d'image dans Supabase

### Conversion des devises
Les prix sont stockés en EUR dans `price_eur` et auto-calculés en FCFA dans `price_fcfa`.
Utiliser le hook `useCurrency` pour afficher dans la bonne devise.

## 📊 Checklist de migration

- [ ] Tables Supabase créées
- [ ] Données de test insérées
- [ ] Hooks testés individuellement
- [ ] NewsSection migré
- [ ] AllProductsPage migré
- [ ] ProductDetailPage migré
- [ ] QuoteRequestModal migré
- [ ] ExpertConsultationModal migré
- [ ] Hero migré (optionnel)
- [ ] Tests end-to-end
- [ ] Suppression des données mockées

## 🐛 Débogage

### Problème: "Pas de données retournées"
1. Vérifier que les tables contiennent des données
2. Vérifier la locale (fr/en)
3. Vérifier les jointures dans les requêtes
4. Consulter les logs Supabase

### Problème: "Erreur d'authentification"
1. Vérifier `projectId` et `publicAnonKey` dans `/utils/supabase/info.tsx`
2. Vérifier que l'utilisateur est connecté pour les opérations protégées
3. Vérifier les RLS (Row Level Security) dans Supabase

### Problème: "Traductions manquantes"
1. Vérifier que les traductions existent pour la locale demandée
2. Vérifier le filtre `.eq('locale', selectedLanguage)` dans les requêtes
3. Ajouter un fallback vers 'fr' si 'en' n'existe pas

## 📝 Prochaines étapes

Une fois la migration terminée :
1. Configurer Strapi pour le CMS
2. Implémenter l'upload d'images vers Supabase Storage
3. Ajouter la pagination côté serveur
4. Implémenter le cache avec React Query (optionnel)
5. Optimiser les performances des requêtes
