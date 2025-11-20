# Guide d'intégration Supabase pour FIMA

## Vue d'ensemble

Ce document explique comment utiliser les données Supabase dans l'application FIMA. Toutes les données mockées ont été remplacées par des appels dynamiques à Supabase.

## Architecture

```
Supabase Tables → TypeScript Types → Hooks → Mappers → Components
```

## Tables Supabase

### 1. business_units & business_units_i18n
- **Usage**: Gérer les 3 métiers FIMA (Couchage, Design, Univers Glass)
- **Multilingue**: Oui (FR/EN)
- **Hook**: `useSupabaseBusinessUnits(locale)`

### 2. products & products_i18n
- **Usage**: Catalogue produits complet
- **Multilingue**: Oui (FR/EN)
- **Hooks**: 
  - `useSupabaseProducts(filters)` - Liste avec filtres
  - `useSupabaseProduct(slug, locale)` - Produit unique

### 3. social_proofs & social_proofs_i18n
- **Usage**: Témoignages, études de cas, certifications
- **Multilingue**: Oui (FR/EN)
- **Hooks**:
  - `useSupabaseSocialProofs(filters)` - Liste générique
  - `useSupabaseTestimonials(locale, featuredOnly)` - Témoignages uniquement
  - `useSupabaseCaseStudies(locale, businessUnit)` - Études de cas
  - `useSupabaseCertifications(locale)` - Certifications

### 4. quotes & quotes_i18n
- **Usage**: Demandes de devis clients
- **Multilingue**: Oui (FR/EN)
- **Hooks**:
  - `useCreateQuote()` - Créer une demande
  - `useUserQuotes(locale)` - Récupérer les devis de l'utilisateur

### 5. expert_consultations
- **Usage**: Demandes de consultation expert
- **Hooks**:
  - `useCreateConsultation()` - Créer une demande
  - `useUserConsultations()` - Récupérer les consultations

### 6. profiles
- **Usage**: Profils utilisateurs étendus
- **Champs clés**: business_type, preferred_currency, preferred_language

## Utilisation dans les composants

### Exemple 1: Afficher les produits

```typescript
import { useSupabaseProducts } from '../hooks/useSupabaseProducts';
import { useLanguage } from '../hooks/useLanguage';
import { mapSupabaseProductToAppProduct } from '../utils/supabaseMapper';
import { DataWrapper } from './DataWrapper';

function ProductsList() {
  const { selectedLanguage } = useLanguage();
  
  const { products, loading, error } = useSupabaseProducts({
    locale: selectedLanguage,
    businessUnit: 'fima-couchage',
    limit: 12
  });

  // Mapper les produits au format attendu
  const mappedProducts = products.map(mapSupabaseProductToAppProduct);

  return (
    <DataWrapper 
      loading={loading} 
      error={error} 
      data={products}
      emptyMessage="Aucun produit disponible"
    >
      <div className="products-grid">
        {mappedProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </DataWrapper>
  );
}
```

### Exemple 2: Afficher les témoignages

```typescript
import { useSupabaseTestimonials } from '../hooks/useSupabaseSocialProofs';
import { mapSupabaseSocialProofToTestimonial } from '../utils/supabaseMapper';

function TestimonialsSection() {
  const { selectedLanguage } = useLanguage();
  
  const { socialProofs: testimonials, loading, error } = useSupabaseTestimonials(
    selectedLanguage,
    true // featured only
  );

  const mappedTestimonials = testimonials.map(mapSupabaseSocialProofToTestimonial);

  return (
    <DataWrapper loading={loading} error={error} data={testimonials}>
      {/* Render testimonials */}
    </DataWrapper>
  );
}
```

### Exemple 3: Créer un devis

```typescript
import { useCreateQuote } from '../hooks/useSupabaseQuotes';
import { useLanguage } from '../hooks/useLanguage';

function QuoteForm() {
  const { selectedLanguage } = useLanguage();
  const { createQuote, loading, error } = useCreateQuote();

  const handleSubmit = async (formData) => {
    const result = await createQuote({
      business_unit_slug: 'fima-design',
      estimated_budget: formData.budget,
      contact_preferences: {
        preferred_contact: 'email',
        phone: formData.phone,
        availability: formData.availability
      },
      locale: selectedLanguage,
      translations: {
        fr: {
          project_type: 'Aménagement bureau',
          requirements: formData.requirements_fr
        },
        en: {
          project_type: 'Office layout',
          requirements: formData.requirements_en
        }
      }
    });

    if (result.success) {
      // Afficher message de succès
      toast.success('Demande de devis envoyée !');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields */}
      <button type="submit" disabled={loading}>
        {loading ? 'Envoi...' : 'Envoyer la demande'}
      </button>
      {error && <p className="error">{error}</p>}
    </form>
  );
}
```

## Filtres disponibles

### ProductFilters
```typescript
{
  category?: string;          // Ex: 'matelas', 'sommiers'
  minPrice?: number;          // Prix minimum en FCFA
  maxPrice?: number;          // Prix maximum en FCFA
  businessUnit?: string;      // 'fima-couchage', 'fima-design', 'univers-glass'
  limit?: number;             // Nombre de résultats (défaut: 20)
  offset?: number;            // Pagination (défaut: 0)
  locale?: LanguageCode;      // 'fr' ou 'en' (défaut: 'fr')
}
```

### SocialProofFilters
```typescript
{
  location?: string;          // Ex: 'Dakar', 'Paris'
  businessUnit?: string;      // Filtrer par métier
  type?: SocialProofType;     // 'testimonial', 'case_study', 'certification'
  featuredOnly?: boolean;     // Afficher uniquement les mis en avant
  locale?: LanguageCode;      // 'fr' ou 'en'
}
```

## Mappers disponibles

### mapSupabaseProductToAppProduct
Convertit un `ProductWithTranslation` en objet Product compatible avec les composants existants.

### mapSupabaseSocialProofToTestimonial
Convertit un `SocialProofWithTranslation` en Testimonial.

### mapSupabaseCaseStudyToProject
Convertit une étude de cas en Project.

### formatPrice
Formate un prix selon la devise sélectionnée (EUR/XOF).

## Gestion des langues

Tous les hooks acceptent un paramètre `locale` de type `LanguageCode` ('fr' | 'en').

```typescript
import { useApp } from '../contexts/AppContext';

const { selectedLanguage } = useApp();

// Utiliser dans les hooks
const { products } = useSupabaseProducts({ 
  locale: selectedLanguage 
});
```

## Gestion des erreurs

Tous les hooks retournent un objet `{ data, loading, error }`.

```typescript
const { products, loading, error } = useSupabaseProducts(filters);

// Utiliser le DataWrapper pour gérer les états
<DataWrapper 
  loading={loading} 
  error={error} 
  data={products}
  onRetry={() => window.location.reload()}
>
  {/* Contenu */}
</DataWrapper>
```

## Migration des composants existants

### Avant (données mockées)
```typescript
import { PRODUCTS } from '../data/products';

function ProductsSection() {
  const products = PRODUCTS;
  // ...
}
```

### Après (Supabase)
```typescript
import { useSupabaseProducts } from '../hooks/useSupabaseProducts';
import { useApp } from '../contexts/AppContext';
import { mapSupabaseProductToAppProduct } from '../utils/supabaseMapper';

function ProductsSection() {
  const { selectedLanguage } = useApp();
  const { products: supabaseProducts, loading, error } = useSupabaseProducts({
    locale: selectedLanguage,
    limit: 12
  });
  
  const products = supabaseProducts.map(mapSupabaseProductToAppProduct);
  // ...
}
```

## Authentification

Les hooks pour les devis et consultations requièrent une authentification :

```typescript
// L'utilisateur doit être connecté
const { user, isAuthenticated } = useUser();

if (!isAuthenticated) {
  // Rediriger vers la page de connexion
  onNavigate('login');
  return;
}

// L'utilisateur peut créer un devis
const { createQuote } = useCreateQuote();
```

## Performance

### Pagination
Utiliser `offset` et `limit` pour paginer les résultats :

```typescript
const [page, setPage] = useState(0);
const limit = 20;

const { products } = useSupabaseProducts({
  offset: page * limit,
  limit: limit
});
```

### Cache
Les hooks utilisent les dépendances useEffect pour éviter les appels inutiles.

### Optimisation
- Les jointures sont effectuées côté Supabase (plus rapide)
- Les traductions sont récupérées en une seule requête
- Les filtres sont appliqués côté serveur

## Prochaines étapes

1. ✅ Implémenter les hooks Supabase
2. ✅ Créer les mappers de données
3. ⏳ Migrer les composants principaux
4. ⏳ Tester l'intégration complète
5. ⏳ Optimiser les performances
6. ⏳ Documenter les cas d'usage supplémentaires
