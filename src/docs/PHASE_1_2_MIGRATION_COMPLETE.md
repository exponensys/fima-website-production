# 🎯 MIGRATION PHASE 1 & 2 - CONFIGURATION GÉNÉRALE ET FORMULAIRES

> **Date**: 8 octobre 2025  
> **État**: ✅ BACKEND COMPLET | ⏳ FRONTEND EN COURS  
> **Objectif**: Migrer les données hardcodées critiques (Priorités 1 & 2) vers Supabase

---

## ✅ CE QUI A ÉTÉ FAIT

### 🎯 BACKEND - Routes API Supabase (100%)

Toutes les routes backend ont été implémentées dans `/supabase/functions/server/index.tsx` :

#### Phase 1 : Configuration Générale (Priorité 1)

**1. Site Settings**
- ✅ `GET /make-server-4a2f605a/site-settings` - Récupérer toutes les configurations
- ✅ `GET /make-server-4a2f605a/site-settings?key=languages` - Récupérer une config spécifique
- ✅ `POST /make-server-4a2f605a/site-settings` - Mettre à jour une configuration

**Données disponibles** :
- `languages` : Langues disponibles (FR, EN)
- `currencies` : Devises supportées (XOF, EUR, USD, GBP)
- `company_description` : Description de l'entreprise
- `certifications` : Certifications (EPV, ISO 9001)
- `social_links` : Liens réseaux sociaux
- `contact_info` : Informations de contact

**2. Product Categories**
- ✅ `GET /make-server-4a2f605a/product-categories` - Toutes les catégories
- ✅ `GET /make-server-4a2f605a/product-categories?business=fima-couchage` - Catégories par métier
- ✅ `POST /make-server-4a2f605a/product-categories` - Mettre à jour les catégories

**Métiers couverts** :
- `fima-couchage` : 5 catégories (Matelas, Sommiers, Oreillers, Linge de lit, Accessoires)
- `fima-design` : 5 catégories (Menuiserie, Ameublement, Cuisines, Dressings, Aménagements)
- `univers-glass` : 5 catégories (Vitrerie, Menuiserie Alu, Fenêtres, Portes, Cloisons)

#### Phase 2 : Formulaires et Modals (Priorité 2)

**3. Form Options**
- ✅ `GET /make-server-4a2f605a/form-options` - Toutes les options
- ✅ `GET /make-server-4a2f605a/form-options?category=quote_project_types` - Options spécifiques
- ✅ `POST /make-server-4a2f605a/form-options` - Mettre à jour les options

**Catégories disponibles** :
- `quote_project_types` : Types de projets (Résidentiel, Commercial, Hôtellerie, etc.)
- `quote_budget_ranges` : Fourchettes de budget pour devis
- `quote_timelines` : Délais pour devis
- `consultation_services` : Services de consultation
- `consultation_budget_ranges` : Fourchettes budget consultation
- `consultation_timelines` : Délais consultation
- `appointment_time_slots` : Créneaux horaires rendez-vous

**4. Chatbot Configuration**
- ✅ `GET /make-server-4a2f605a/chatbot-config` - Configuration complète du chatbot
- ✅ `POST /make-server-4a2f605a/chatbot-config` - Mettre à jour la configuration

**Données configurables** :
- `initial_messages` : Messages initiaux du bot
- `quick_replies` : Réponses rapides
- `auto_responses` : Réponses automatiques par mot-clé

---

### 🎨 FRONTEND - Hooks Personnalisés (100%)

Tous les hooks ont été créés avec stratégie de fallback robuste :

#### 1. `/hooks/useSiteSettings.ts`

**Hook principal** :
```typescript
const { settings, loading, error } = useSiteSettings(); // Toutes les configs
const { settings, loading, error } = useSiteSettings('languages'); // Config spécifique
```

**Hooks spécialisés** :
- `useLanguages()` - Langues disponibles
- `useCurrencies()` - Devises supportées
- `useCompanyDescription()` - Description entreprise
- `useCertifications()` - Certifications
- `useSocialLinks()` - Liens réseaux sociaux
- `useContactInfo()` - Informations de contact

**Fallback** : Données locales en cas d'erreur backend

#### 2. `/hooks/useProductCategories.ts`

**Usage** :
```typescript
const { categories, loading, error } = useProductCategories(); // Toutes les catégories
const { categories, loading, error } = useProductCategories('fima-couchage'); // Par métier
```

**Fallback** : Catégories hardcodées par métier

#### 3. `/hooks/useFormOptions.ts`

**Hook principal** :
```typescript
const { options, loading, error } = useFormOptions(); // Toutes les options
const { options, loading, error } = useFormOptions('quote_project_types'); // Options spécifiques
```

**Hooks spécialisés** :
- `useQuoteProjectTypes()` - Types de projets devis
- `useQuoteBudgetRanges()` - Budgets devis
- `useQuoteTimelines()` - Délais devis
- `useConsultationServices()` - Services consultation
- `useConsultationBudgetRanges()` - Budgets consultation
- `useConsultationTimelines()` - Délais consultation
- `useAppointmentTimeSlots()` - Créneaux horaires

**Fallback** : Options hardcodées pour chaque catégorie

#### 4. `/hooks/useChatbotConfig.ts`

**Usage** :
```typescript
const { config, loading, error } = useChatbotConfig();
```

**Fallback** : Configuration chatbot par défaut

---

## ⏳ PROCHAINES ÉTAPES - MIGRATION DES COMPOSANTS

### 🔴 Priorité Immédiate : Composants Critiques

#### 1. Header (`/components/Header.tsx`)

**À migrer** :
- ❌ Langues (ligne 95-100) → Utiliser `useLanguages()`
- ❌ Devises (ligne 103-108) → Utiliser `useCurrencies()`
- ❌ Business Units (ligne 110-135) → Utiliser `useSupabaseBusinessUnits()` (déjà disponible)
- ❌ Catégories produits (ligne 138-250+) → Utiliser `useProductCategories()`

**Exemple de migration** :
```typescript
// AVANT
const languages = [
  { code: "FR", name: "Français", flag: "🇫🇷" },
  { code: "EN", name: "English", flag: "🇬🇧" }
];

// APRÈS
import { useLanguages } from '../hooks/useSiteSettings';

const { languages, loading } = useLanguages();
```

#### 2. Footer (`/components/Footer.tsx`)

**À migrer** :
- ❌ Description entreprise (ligne 58-61) → Utiliser `useCompanyDescription()`
- ❌ Certifications (ligne 65-84) → Utiliser `useCertifications()`
- ❌ Liens sociaux (ligne 87-128) → Utiliser `useSocialLinks()`
- ❌ Informations contact → Utiliser `useContactInfo()`

#### 3. QuoteRequestModal (`/components/QuoteRequestModal.tsx`)

**À migrer** :
- ❌ Business Units (ligne 37-41) → Utiliser `useSupabaseBusinessUnits()`
- ❌ Types de projets (ligne 43-49) → Utiliser `useQuoteProjectTypes()`
- ❌ Fourchettes budget (ligne 51-58) → Utiliser `useQuoteBudgetRanges()`
- ❌ Délais (ligne 60-66) → Utiliser `useQuoteTimelines()`

#### 4. ExpertConsultationModal (`/components/ExpertConsultationModal.tsx`)

**À migrer** :
- ❌ Services (ligne 42-48) → Utiliser `useConsultationServices()`
- ❌ Fourchettes budget (ligne 50-56) → Utiliser `useConsultationBudgetRanges()`
- ❌ Délais (ligne 58-64) → Utiliser `useConsultationTimelines()`
- ❌ Créneaux horaires (ligne 66-69) → Utiliser `useAppointmentTimeSlots()`

#### 5. ChatWidget (`/components/ChatWidget.tsx`)

**À migrer** :
- ❌ Messages initiaux (ligne 12-19) → Utiliser `useChatbotConfig().config.initial_messages`
- ❌ Quick replies (ligne 21-26) → Utiliser `useChatbotConfig().config.quick_replies`
- ❌ Réponses auto (ligne 28-34) → Utiliser `useChatbotConfig().config.auto_responses`

---

## 📊 STATISTIQUES DE MIGRATION

### Backend
- ✅ **4 groupes de routes** créés
- ✅ **10 endpoints GET** implémentés
- ✅ **4 endpoints POST** implémentés
- ✅ **Fallback data** intégré dans chaque route
- ✅ **Authentification** pour routes POST

### Frontend
- ✅ **4 fichiers hooks** créés
- ✅ **14 hooks spécialisés** disponibles
- ✅ **Stratégie de fallback** sur chaque hook
- ✅ **TypeScript types** définis
- ❌ **0 composants migrés** (à faire)

### Données Migrées
- ✅ **2 langues** (FR, EN)
- ✅ **4 devises** (XOF, EUR, USD, GBP)
- ✅ **15 catégories produits** (5 par métier)
- ✅ **5 types de projets** pour devis
- ✅ **6 fourchettes budget** pour devis
- ✅ **5 options délais** pour devis
- ✅ **5 services** pour consultation
- ✅ **5 fourchettes budget** pour consultation
- ✅ **5 options délais** pour consultation
- ✅ **12 créneaux horaires** pour RDV
- ✅ **4 quick replies** chatbot
- ✅ **5 réponses auto** chatbot

---

## 🎨 GUIDE DE MIGRATION DES COMPOSANTS

### Étapes générales

**1. Importer le hook nécessaire**
```typescript
import { useLanguages } from '../hooks/useSiteSettings';
```

**2. Utiliser le hook dans le composant**
```typescript
const { languages, loading, error } = useLanguages();
```

**3. Gérer l'état de chargement (optionnel)**
```typescript
if (loading) return <Spinner />;
if (error) return <ErrorMessage error={error} />;
```

**4. Remplacer les données hardcodées**
```typescript
// AVANT
const languages = [...]

// APRÈS
// Les données viennent du hook
languages.map(lang => ...)
```

### Exemple complet : Migration du Header

**Avant** :
```typescript
export function Header({ onNavigate }: HeaderProps) {
  const languages = [
    { code: "FR", name: "Français", flag: "🇫🇷" },
    { code: "EN", name: "English", flag: "🇬🇧" }
  ];
  
  const currencies = [
    { code: "XOF", symbol: "F CFA", name: "Franc CFA" },
    // ...
  ];
  
  // ... rest of component
}
```

**Après** :
```typescript
import { useLanguages, useCurrencies } from '../hooks/useSiteSettings';
import { useProductCategories } from '../hooks/useProductCategories';

export function Header({ onNavigate }: HeaderProps) {
  // Hooks pour récupérer les données
  const { languages, loading: langLoading } = useLanguages();
  const { currencies, loading: currLoading } = useCurrencies();
  const { categories: productCategories, loading: catLoading } = useProductCategories();
  
  // ... rest of component (utilise languages, currencies, productCategories)
}
```

**Avantages** :
- ✅ Données éditables depuis Supabase
- ✅ Fallback automatique si backend down
- ✅ Pas de break si erreur
- ✅ Type-safe avec TypeScript
- ✅ Facile à tester

---

## 🔧 TESTS À EFFECTUER

### Backend API

```bash
# Test site settings
curl "https://{projectId}.supabase.co/functions/v1/make-server-4a2f605a/site-settings" \
  -H "Authorization: Bearer {publicAnonKey}"

# Test catégories produits
curl "https://{projectId}.supabase.co/functions/v1/make-server-4a2f605a/product-categories?business=fima-couchage" \
  -H "Authorization: Bearer {publicAnonKey}"

# Test form options
curl "https://{projectId}.supabase.co/functions/v1/make-server-4a2f605a/form-options?category=quote_project_types" \
  -H "Authorization: Bearer {publicAnonKey}"

# Test chatbot config
curl "https://{projectId}.supabase.co/functions/v1/make-server-4a2f605a/chatbot-config" \
  -H "Authorization: Bearer {publicAnonKey}"
```

### Frontend Hooks

```typescript
// Test dans composant
const TestComponent = () => {
  const { languages, loading, error } = useLanguages();
  
  console.log('Languages:', languages);
  console.log('Loading:', loading);
  console.log('Error:', error);
  
  return <div>{JSON.stringify(languages)}</div>;
};
```

---

## 📝 DOCUMENTATION TECHNIQUE

### Structure KV Store

```
site_settings_languages: Language[]
site_settings_currencies: Currency[]
site_settings_company_description: string
site_settings_certifications: string[]
site_settings_social_links: SocialLinks
site_settings_contact_info: ContactInfo

product_categories: ProductCategoriesByBusiness

form_options_quote_project_types: ProjectType[]
form_options_quote_budget_ranges: BudgetRange[]
form_options_quote_timelines: Timeline[]
form_options_consultation_services: ConsultationService[]
form_options_consultation_budget_ranges: BudgetRange[]
form_options_consultation_timelines: Timeline[]
form_options_appointment_time_slots: string[]

chatbot_initial_messages: ChatMessage[]
chatbot_quick_replies: string[]
chatbot_auto_responses: Record<string, string>
```

### Types TypeScript

Tous les types sont définis dans les fichiers hooks :
- `/hooks/useSiteSettings.ts` - Types pour site settings
- `/hooks/useProductCategories.ts` - Types pour catégories
- `/hooks/useFormOptions.ts` - Types pour formulaires
- `/hooks/useChatbotConfig.ts` - Types pour chatbot

---

## ✅ VALIDATION

**Phase 1 & 2 Backend** : ✅ COMPLET
- Routes API créées
- Fallback data intégré
- Authentification configurée
- KV Store structuré

**Phase 1 & 2 Hooks** : ✅ COMPLET
- Hooks personnalisés créés
- Fallback strategy implémentée
- Types TypeScript définis
- Documentation inline

**Phase 1 & 2 Composants** : ⏳ À FAIRE
- Header
- Footer
- QuoteRequestModal
- ExpertConsultationModal
- ChatWidget

---

## 🎯 PROCHAINES ACTIONS RECOMMANDÉES

1. **Migrer le Header** (composant le plus critique)
2. **Migrer le Footer** (présent sur toutes les pages)
3. **Migrer QuoteRequestModal** (formulaire principal)
4. **Migrer ExpertConsultationModal** (formulaire secondaire)
5. **Migrer ChatWidget** (interaction utilisateur)
6. **Tester l'ensemble** (vérifier fallback et performance)
7. **Documenter les changements** (guide pour l'équipe)
8. **Passer à Phase 3** (pages métiers)

---

**Prêt pour la migration des composants !** 🚀
