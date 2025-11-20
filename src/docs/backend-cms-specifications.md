# Spécifications Techniques pour le Développement du CMS et Backend FIMA

## Contexte

Ce document guide la création du backend et du système de gestion de contenu (CMS) pour FIMA, une entreprise spécialisée dans la literie, l'ameublement et la vitrerie depuis 1985. Le projet combine les activités B2B et B2C avec 3 métiers distincts et utilise une architecture moderne avec React, Supabase et Strapi.

**⚠️ IMPORTANT - GESTION MULTILINGUE :**
L'application FIMA est **multilingue** et doit supporter au minimum le **français** et l'**anglais**, avec possibilité d'extension vers d'autres langues locales (Wolof, Bambara, etc.). **Tout contenu créé doit obligatoirement prendre en compte cette dimension multilingue** dès la conception.

## Architecture et Technologies

**Frontend :** React avec Vite (déjà implémenté)
**Backend :** Node.js avec Express + Strapi CMS
**Base de Données :** PostgreSQL gérée via Supabase
**Authentification :** Supabase Auth
**Storage :** Supabase Storage pour les médias
**Internationalisation :** react-i18next pour le frontend, Strapi i18n plugin pour le CMS
**Langues supportées :** Français (fr), Anglais (en), avec extension possible vers langues locales

## Instructions d'Installation (Backend)

Créez un nouveau dossier `fima-backend` et installez les dépendances :

```bash
npm init -y
npm install express cors @supabase/supabase-js dotenv
npm install @strapi/strapi @strapi/plugin-users-permissions @strapi/plugin-i18n
npm install bcryptjs jsonwebtoken nodemailer
npm install react-i18next i18next i18next-browser-languagedetector i18next-http-backend
```

Créez un fichier `.env` avec les variables suivantes :

```env
SUPABASE_URL=your_supabase_project_url
SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
STRAPI_API_TOKEN=your_strapi_api_token
STRAPI_URL=http://localhost:1337
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email
EMAIL_PASS=your_app_password
FCFA_CONVERSION_RATE=655.957
DEFAULT_LOCALE=fr
SUPPORTED_LOCALES=fr,en
FALLBACK_LOCALE=fr
```

## Schéma de Base de Données (Supabase)

### Table : profiles
```sql
CREATE TABLE profiles (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  business_type VARCHAR CHECK (business_type IN ('b2c', 'b2b', 'both')),
  company_name VARCHAR,
  company_size VARCHAR CHECK (company_size IN ('startup', 'sme', 'enterprise')),
  annual_revenue DECIMAL,
  preferred_currency VARCHAR DEFAULT 'FCFA',
  preferred_language VARCHAR DEFAULT 'fr' CHECK (preferred_language IN ('fr', 'en')),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

### Table : business_units
```sql
CREATE TABLE business_units (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug VARCHAR UNIQUE NOT NULL,
  primary_color VARCHAR DEFAULT '#B5C233',
  icon_name VARCHAR,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Table pour les traductions des unités métier
CREATE TABLE business_units_i18n (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  business_unit_id UUID REFERENCES business_units(id) ON DELETE CASCADE,
  locale VARCHAR NOT NULL CHECK (locale IN ('fr', 'en')),
  name VARCHAR NOT NULL,
  description TEXT,
  UNIQUE(business_unit_id, locale)
);

-- Insertion des données de base
INSERT INTO business_units (slug, primary_color, icon_name) VALUES
('fima-couchage', '#B5C233', 'bed'),
('fima-design', '#E30613', 'hammer'),
('univers-glass', '#4A52A8', 'glass');

-- Traductions françaises
INSERT INTO business_units_i18n (business_unit_id, locale, name, description) VALUES
((SELECT id FROM business_units WHERE slug = 'fima-couchage'), 'fr', 'FIMA Couchage', 'Literie et matelas professionnels'),
((SELECT id FROM business_units WHERE slug = 'fima-design'), 'fr', 'FIMA Design', 'Menuiserie et ameublement'),
((SELECT id FROM business_units WHERE slug = 'univers-glass'), 'fr', 'UNIVERS GLASS', 'Vitrerie et solutions aluminium');

-- Traductions anglaises
INSERT INTO business_units_i18n (business_unit_id, locale, name, description) VALUES
((SELECT id FROM business_units WHERE slug = 'fima-couchage'), 'en', 'FIMA Bedding', 'Professional bedding and mattresses'),
((SELECT id FROM business_units WHERE slug = 'fima-design'), 'en', 'FIMA Design', 'Carpentry and furniture'),
((SELECT id FROM business_units WHERE slug = 'univers-glass'), 'en', 'UNIVERS GLASS', 'Glazing and aluminum solutions');
```

### Table : products
```sql
CREATE TABLE products (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  business_unit_id UUID REFERENCES business_units(id),
  slug VARCHAR UNIQUE NOT NULL,
  price_eur DECIMAL NOT NULL,
  price_fcfa DECIMAL GENERATED ALWAYS AS (price_eur * 655.957) STORED,
  is_b2b_only BOOLEAN DEFAULT FALSE,
  minimum_order_qty INTEGER DEFAULT 1,
  images JSONB DEFAULT '[]',
  specifications JSONB DEFAULT '{}',
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Table pour les traductions des produits
CREATE TABLE products_i18n (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  product_id UUID REFERENCES products(id) ON DELETE CASCADE,
  locale VARCHAR NOT NULL CHECK (locale IN ('fr', 'en')),
  name VARCHAR NOT NULL,
  description TEXT,
  category VARCHAR,
  subcategory VARCHAR,
  specifications_translated JSONB DEFAULT '{}',
  UNIQUE(product_id, locale)
);
```

### Table : quotes
```sql
CREATE TABLE quotes (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id),
  business_unit_id UUID REFERENCES business_units(id),
  status VARCHAR CHECK (status IN ('pending', 'processing', 'completed', 'cancelled')) DEFAULT 'pending',
  estimated_budget DECIMAL,
  contact_preferences JSONB DEFAULT '{}',
  preferred_language VARCHAR DEFAULT 'fr' CHECK (preferred_language IN ('fr', 'en')),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Table pour les traductions des devis
CREATE TABLE quotes_i18n (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  quote_id UUID REFERENCES quotes(id) ON DELETE CASCADE,
  locale VARCHAR NOT NULL CHECK (locale IN ('fr', 'en')),
  project_type VARCHAR,
  requirements TEXT,
  UNIQUE(quote_id, locale)
);
```

### Table : expert_consultations
```sql
CREATE TABLE expert_consultations (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id),
  business_unit_id UUID REFERENCES business_units(id),
  consultation_type VARCHAR CHECK (consultation_type IN ('expert', 'appointment')),
  preferred_datetime TIMESTAMP,
  topic VARCHAR,
  description TEXT,
  status VARCHAR CHECK (status IN ('pending', 'scheduled', 'completed', 'cancelled')) DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT NOW()
);
```

### Table : social_proofs
```sql
CREATE TABLE social_proofs (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  type VARCHAR CHECK (type IN ('testimonial', 'case_study', 'certification')),
  business_unit_id UUID REFERENCES business_units(id),
  client_name VARCHAR,
  client_location VARCHAR,
  rating INTEGER CHECK (rating >= 1 AND rating <= 5),
  project_value DECIMAL,
  completion_date DATE,
  images JSONB DEFAULT '[]',
  is_featured BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Table pour les traductions des preuves sociales
CREATE TABLE social_proofs_i18n (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  social_proof_id UUID REFERENCES social_proofs(id) ON DELETE CASCADE,
  locale VARCHAR NOT NULL CHECK (locale IN ('fr', 'en')),
  content TEXT,
  UNIQUE(social_proof_id, locale)
);
```

## Flux d'Autorisation et Authentification

1. **Authentification utilisateur :** Utilise Supabase Auth pour l'inscription/connexion
2. **Vérification du token :** Chaque requête API doit inclure le JWT Supabase dans l'en-tête Authorization
3. **Autorisation métier :** Vérifier les permissions selon le type de compte (B2C/B2B) et l'unité métier
4. **Gestion des sessions :** Utiliser la session Supabase pour maintenir l'état utilisateur
5. **Gestion des langues :** Récupérer la langue préférée de l'utilisateur depuis son profil ou utiliser l'en-tête Accept-Language

## Endpoints API Backend

### 1. Endpoint pour les Produits par Métier

**URL :** `/api/products/:businessUnit`
**Méthode :** GET
**Paramètres :** `businessUnit` (fima-couchage, fima-design, univers-glass)
**Query params :** `category`, `minPrice`, `maxPrice`, `limit`, `offset`, `locale` (fr, en)
**Headers :** `Accept-Language` (optionnel, fallback si locale non spécifié)

**Logique :**
```javascript
// Déterminer la langue à utiliser
const locale = req.query.locale || req.headers['accept-language']?.split(',')[0].split('-')[0] || 'fr';
if (!['fr', 'en'].includes(locale)) locale = 'fr';

// Vérifier l'authentification utilisateur
const { data: user } = await supabase.auth.getUser(token);
if (!user) return res.status(401).json({ error: 'Non autorisé' });

// Récupérer le profil utilisateur pour déterminer les prix à afficher
const { data: profile } = await supabase
  .from('profiles')
  .select('business_type, preferred_currency, preferred_language')
  .eq('user_id', user.id)
  .single();

// Utiliser la langue préférée de l'utilisateur si disponible
const userLocale = profile?.preferred_language || locale;

// Construire la requête produits avec traductions
let query = supabase
  .from('products')
  .select(`
    *,
    business_units!inner(slug, primary_color),
    business_units_i18n!inner(name, description),
    products_i18n!inner(name, description, category, subcategory)
  `)
  .eq('business_units.slug', businessUnit)
  .eq('business_units_i18n.locale', userLocale)
  .eq('products_i18n.locale', userLocale);

// Appliquer les filtres si fournis (sur les traductions)
if (category) query = query.eq('products_i18n.category', category);
if (minPrice) query = query.gte('price_fcfa', minPrice);
if (maxPrice) query = query.lte('price_fcfa', maxPrice);

// Exécuter la requête
const { data: products, error } = await query
  .range(offset || 0, (offset || 0) + (limit || 20));
```

**Réponse :**
```json
{
  "products": [
    {
      "id": "uuid",
      "slug": "matelas-premium-140x190",
      "price_eur": 299.99,
      "price_fcfa": 196721.89,
      "translations": {
        "name": "Matelas Premium 140x190",
        "description": "Matelas haute qualité...",
        "category": "matelas",
        "subcategory": "premium"
      },
      "business_unit": {
        "slug": "fima-couchage",
        "primary_color": "#B5C233",
        "translations": {
          "name": "FIMA Couchage",
          "description": "Literie et matelas professionnels"
        }
      }
    }
  ],
  "pagination": {
    "total": 150,
    "offset": 0,
    "limit": 20
  },
  "locale": "fr"
}
```

### 2. Endpoint pour les Demandes de Devis

**URL :** `/api/quotes`
**Méthode :** POST
**Body :**
```json
{
  "business_unit_slug": "fima-design",
  "estimated_budget": 15000,
  "contact_preferences": {
    "preferred_contact": "email",
    "phone": "+221701234567",
    "availability": "weekdays_morning"
  },
  "locale": "fr",
  "translations": {
    "fr": {
      "project_type": "aménagement_bureau",
      "requirements": "Aménagement complet d'un bureau de 50m²"
    },
    "en": {
      "project_type": "office_layout",
      "requirements": "Complete office layout for 50m²"
    }
  }
}
```

**Logique :**
```javascript
// Authentification requise
const { data: user } = await supabase.auth.getUser(token);
if (!user) return res.status(401).json({ error: 'Non autorisé' });

// Déterminer la langue de l'utilisateur
const locale = req.body.locale || 'fr';

// Récupérer le profil utilisateur
const { data: profile } = await supabase
  .from('profiles')
  .select('preferred_language')
  .eq('user_id', user.id)
  .single();

const userLocale = profile?.preferred_language || locale;

// Valider l'unité métier
const { data: businessUnit } = await supabase
  .from('business_units')
  .select('id')
  .eq('slug', req.body.business_unit_slug)
  .single();

if (!businessUnit) {
  return res.status(400).json({ error: 'Unité métier invalide' });
}

// Créer la demande de devis principal
const { data: quote, error } = await supabase
  .from('quotes')
  .insert({
    user_id: user.id,
    business_unit_id: businessUnit.id,
    estimated_budget: req.body.estimated_budget,
    contact_preferences: req.body.contact_preferences,
    preferred_language: userLocale
  })
  .select()
  .single();

// Insérer les traductions pour chaque langue fournie
if (req.body.translations) {
  const translations = Object.entries(req.body.translations).map(([lang, data]) => ({
    quote_id: quote.id,
    locale: lang,
    project_type: data.project_type,
    requirements: data.requirements
  }));

  await supabase
    .from('quotes_i18n')
    .insert(translations);
}

// Envoyer notification email au commercial dans la langue appropriée
await sendQuoteNotification(quote, userLocale);
```

### 3. Endpoint pour les Consultations Expert

**URL :** `/api/consultations`
**Méthode :** POST
**Body :**
```json
{
  "business_unit_slug": "univers-glass",
  "consultation_type": "appointment",
  "preferred_datetime": "2024-12-01T10:00:00Z",
  "topic": "Facade vitrée immeuble",
  "description": "Besoin de conseils pour une façade vitrée de 200m²"
}
```

### 4. Endpoint pour les Preuves Sociales Géolocalisées

**URL :** `/api/social-proofs`
**Méthode :** GET
**Query params :** `location`, `business_unit`, `type`, `featured_only`

**Logique :**
```javascript
// Pas d'authentification requise pour les preuves sociales publiques
let query = supabase
  .from('social_proofs')
  .select(`
    *,
    business_units(name, slug, primary_color)
  `);

// Filtrer par localisation si fournie
if (location) {
  query = query.ilike('client_location', `%${location}%`);
}

// Filtrer par unité métier
if (business_unit) {
  query = query.eq('business_units.slug', business_unit);
}

// Filtrer par type
if (type) {
  query = query.eq('type', type);
}

// Afficher seulement les éléments mis en avant
if (featured_only === 'true') {
  query = query.eq('is_featured', true);
}

const { data: proofs, error } = await query
  .order('created_at', { ascending: false })
  .limit(12);
```

### 5. Endpoint pour les Statistiques Dashboard

**URL :** `/api/dashboard/business-stats`
**Méthode :** GET
**Paramètres :** `period` (7_days, current_month, current_year)

**Logique :**
```javascript
// Vérifier que l'utilisateur est admin/commercial
const { data: user } = await supabase.auth.getUser(token);
const { data: profile } = await supabase
  .from('profiles')
  .select('business_type')
  .eq('user_id', user.id)
  .single();

if (profile.business_type !== 'admin') {
  return res.status(403).json({ error: 'Accès interdit' });
}

// Calculer les statistiques par période
const dateFilter = getDateFilter(period);

const [quotesStats, consultationsStats, productsStats] = await Promise.all([
  supabase
    .from('quotes')
    .select('status, estimated_budget, business_unit_id')
    .gte('created_at', dateFilter),
  
  supabase
    .from('expert_consultations')
    .select('status, business_unit_id')
    .gte('created_at', dateFilter),
    
  supabase
    .from('products')
    .select('price_fcfa, business_unit_id')
]);
```

**Réponse :**
```json
{
  "period": "current_month",
  "total_quotes": 45,
  "pending_quotes": 12,
  "completed_quotes": 28,
  "total_revenue_potential": 2500000,
  "consultations_scheduled": 18,
  "by_business_unit": {
    "fima-couchage": {
      "quotes": 20,
      "revenue_potential": 1200000
    },
    "fima-design": {
      "quotes": 15,
      "revenue_potential": 800000
    },
    "univers-glass": {
      "quotes": 10,
      "revenue_potential": 500000
    }
  }
}
```

## Configuration Strapi CMS avec Internationalisation

### Installation du Plugin i18n
```bash
npm install @strapi/plugin-i18n
```

### Configuration des Langues (config/plugins.js)
```javascript
module.exports = {
  i18n: {
    enabled: true,
    config: {
      defaultLocale: 'fr',
      locales: ['fr', 'en'],
      fallbackLocale: 'fr'
    }
  }
};
```

### Content Types à créer (avec i18n activé)

1. **Business Unit** ✅ Internationalisé
   - Slug (UID) - Non traduit
   - Name (Text) - Traduit
   - Description (Rich Text) - Traduit
   - Primary Color (Text) - Non traduit
   - Icon Name (Text) - Non traduit
   - Hero Image (Media) - Peut être traduit
   - SEO Meta (Component) - Traduit

2. **Product** ✅ Internationalisé
   - Slug (UID) - Non traduit
   - Name (Text) - Traduit
   - Description (Rich Text) - Traduit
   - Price EUR (Decimal) - Non traduit
   - Category (Enumeration) - Traduit
   - Subcategory (Text) - Traduit
   - Images (Media - Multiple) - Non traduit
   - Business Unit (Relation) - Non traduit
   - Specifications (JSON) - Traduit
   - SEO Meta (Component) - Traduit

3. **Article** ✅ Internationalisé (pour SEO Content Hub)
   - Slug (UID) - Peut être traduit
   - Title (Text) - Traduit
   - Content (Rich Text) - Traduit
   - Featured Image (Media) - Peut être traduit
   - Business Unit (Relation) - Non traduit
   - SEO Meta (Component) - Traduit
   - Publication Date (DateTime) - Non traduit

4. **Social Proof** ✅ Internationalisé
   - Client Name (Text) - Non traduit
   - Location (Text) - Non traduit
   - Content (Rich Text) - Traduit
   - Rating (Integer) - Non traduit
   - Images (Media - Multiple) - Non traduit
   - Business Unit (Relation) - Non traduit
   - Project Value (Decimal) - Non traduit

5. **Global Settings** ✅ Internationalisé
   - Site Title (Text) - Traduit
   - Site Description (Text) - Traduit
   - Contact Email (Email) - Non traduit
   - Phone Number (Text) - Non traduit
   - Address (Rich Text) - Traduit
   - Social Media Links (JSON) - Non traduit

6. **Navigation Menu** ✅ Internationalisé
   - Menu Items (Component Repeatable) - Traduit
     - Label (Text) - Traduit
     - URL (Text) - Peut être traduit
     - Order (Integer) - Non traduit

7. **FAQ** ✅ Internationalisé
   - Question (Text) - Traduit
   - Answer (Rich Text) - Traduit
   - Category (Enumeration) - Traduit
   - Business Unit (Relation) - Non traduit

## Tâches à Accomplir

### Backend (Express + Supabase)
1. ✅ Créer le serveur Express avec les endpoints listés
2. ✅ Implémenter l'authentification Supabase
3. ✅ Créer les tables PostgreSQL avec les schémas fournis
4. ✅ Intégrer le système de conversion FCFA automatique
5. ✅ Développer le système de notifications email pour les devis
6. ✅ Implémenter la géolocalisation des preuves sociales

### CMS (Strapi)
1. ✅ Configurer Strapi avec les content types
2. ✅ Intégrer l'authentification avec Supabase
3. ✅ Créer les relations entre contenus
4. ✅ Configurer les permissions par rôle (admin, commercial, client)
5. ✅ Implémenter l'upload média vers Supabase Storage

### Frontend (Intégration Multilingue)
1. ✅ Adapter les hooks existants (useSupabaseData, useStrapiData) avec support i18n
2. ✅ Implémenter les appels API dans les composants existants avec gestion des locales
3. ✅ Mettre à jour le contexte AppContext avec les nouvelles données et état de langue
4. ✅ Intégrer la conversion FCFA dans l'affichage des prix
5. ✅ Développer les formulaires de devis et consultation expert multilingues
6. ✅ Créer un LanguageContext pour la gestion globale des langues
7. ✅ Implémenter le sélecteur de langue dans le Header
8. ✅ Adapter tous les composants pour utiliser les traductions
9. ✅ Créer les fichiers de traduction JSON pour les textes statiques

## Fonctionnalités Spécifiques FIMA

### Gestion Multi-Métiers
- Filtrage automatique par unité métier
- Affichage des couleurs de marque selon le métier
- Navigation contextuelle entre les métiers

### Système de Devis B2B
- Formulaires multi-étapes selon le type de projet
- Calcul automatique des estimations
- Workflow d'approbation pour les commerciaux

### Preuves Sociales Géolocalisées
- Affichage des témoignages par région
- Carte interactive des réalisations
- Filtrage par valeur de projet et secteur

### Conversion Automatique FCFA
- Taux de change configurable en base
- Affichage dual EUR/FCFA selon les préférences utilisateur
- Historique des taux pour les commandes

## Structure des Fichiers de Traduction Frontend

### Création des fichiers de traduction
```
/public/locales/
├── fr/
│   ├── common.json
│   ├── navigation.json
│   ├── products.json
│   ├── forms.json
│   └── business-units.json
└── en/
    ├── common.json
    ├── navigation.json
    ├── products.json
    ├── forms.json
    └── business-units.json
```

### Configuration react-i18next (src/i18n.js)
```javascript
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'fr',
    debug: false,
    
    interpolation: {
      escapeValue: false,
    },
    
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
    
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },
  });

export default i18n;
```

### Hook personnalisé pour la gestion des langues
```javascript
// hooks/useLanguage.js
import { useTranslation } from 'react-i18next';
import { useContext } from 'react';
import { AppContext } from '../contexts/AppContext';

export const useLanguage = () => {
  const { i18n } = useTranslation();
  const { user } = useContext(AppContext);
  
  const changeLanguage = async (locale) => {
    await i18n.changeLanguage(locale);
    
    // Sauvegarder la préférence utilisateur si connecté
    if (user) {
      await updateUserLanguagePreference(user.id, locale);
    }
  };
  
  return {
    currentLanguage: i18n.language,
    changeLanguage,
    t: useTranslation().t,
  };
};
```

## Endpoints API Multilingues Supplémentaires

### 6. Endpoint pour la Gestion des Langues Utilisateur

**URL :** `/api/user/language`
**Méthode :** PATCH
**Body :**
```json
{
  "preferred_language": "en"
}
```

**Logique :**
```javascript
// Mettre à jour la langue préférée de l'utilisateur
const { data: user } = await supabase.auth.getUser(token);
const { preferred_language } = req.body;

if (!['fr', 'en'].includes(preferred_language)) {
  return res.status(400).json({ error: 'Langue non supportée' });
}

const { data, error } = await supabase
  .from('profiles')
  .update({ preferred_language })
  .eq('user_id', user.id);
```

### 7. Endpoint pour les Contenus Strapi Multilingues

**URL :** `/api/content/:contentType`
**Méthode :** GET
**Query params :** `locale`, `populate`

**Logique :**
```javascript
// Récupérer les contenus Strapi avec la locale appropriée
const locale = req.query.locale || 'fr';
const contentType = req.params.contentType;

const response = await fetch(`${STRAPI_URL}/api/${contentType}?locale=${locale}&populate=*`, {
  headers: {
    'Authorization': `Bearer ${STRAPI_API_TOKEN}`
  }
});

const data = await response.json();
```

Ce document servira de référence pour développer un backend robuste et un CMS adapté aux besoins spécifiques de FIMA tout en conservant l'architecture existante et en intégrant complètement la dimension multilingue dès la conception.