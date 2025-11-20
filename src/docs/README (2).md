# 🏢 FIMA - Site E-Commerce B2B/B2C

> Leader dans la literie, l'ameublement et la vitrerie depuis 1985

---

## 🚨 ERREURS BACKEND ?

**Si vous voyez ces erreurs :**
```
Error fetching product categories
Error fetching site settings
Error fetching business units
```

**→ Consultez immédiatement** : [`/INITIALISER_DONNEES.md`](/INITIALISER_DONNEES.md)

**Solution en 1 clic** : Un modal va s'afficher automatiquement pour initialiser les données.

---

## 🚀 Démarrage Rapide

```bash
# Installer les dépendances
npm install

# Lancer en développement
npm run dev
```

**Au premier lancement**, un modal d'initialisation s'affichera automatiquement pour configurer les données Supabase.

---

## 📚 Documentation

### 🆕 Guides Rapides - Nouveautés

- **🎥 YouTube Support** → [`/YOUTUBE_QUICKSTART.md`](/YOUTUBE_QUICKSTART.md) ⚡ (3 min) **NOUVEAU !**
- **Erreurs backend** → [`/INITIALISER_DONNEES.md`](/INITIALISER_DONNEES.md) ⚡ (1 min)
- **Correction rapide** → [`/QUICK_FIX.md`](/QUICK_FIX.md) ⚡ (30 sec)
- **Guide complet** → [`/docs/INIT_DATA_GUIDE.md`](/docs/INIT_DATA_GUIDE.md) 📖 (5 min)

### Documentation Complète

- **🎬 Guide YouTube** → [`/docs/YOUTUBE_INTEGRATION_GUIDE.md`](/docs/YOUTUBE_INTEGRATION_GUIDE.md) **NOUVEAU !**
- **README Migration** → [`/docs/README.md`](/docs/README.md)
- **Status du projet** → [`/docs/QUICK_STATUS.md`](/docs/QUICK_STATUS.md)
- **Ce qui reste à faire** → [`/docs/TODO_REMAINING_WORK.md`](/docs/TODO_REMAINING_WORK.md)

---

## 🎯 Architecture

### Frontend
- **React** avec TypeScript
- **Tailwind CSS v4** (design 100% carré, sans border-radius)
- **Shadcn/ui** pour les composants

### Backend
- **Supabase** Edge Functions (Hono)
- **KV Store** pour les données dynamiques
- **Fallback local** automatique si backend indisponible

### Couleurs FIMA
- **Vert anis** : `#B5C233` (FIMA Couchage)
- **Gris** : `#6E6E6E` (FIMA Design)
- **Rouge** : `#E30613` (Accent/CTA)
- **Bleu cyan** : `#0EA5E9` (UNIVERS GLASS)

---

## 📊 Status Migration

**Phase 1 & 2** : ✅ **100% Complétées**
- 44 routes API
- 27 hooks personnalisés
- 5 composants critiques migrés
- 10 sections dynamiques

**Phase 3 & 4** : ⏳ En attente (~22h restantes)

**Progression** : **63%** (15/24 composants)

---

## 🛠️ Structure du Projet

```
/
├── components/          # Composants React
├── hooks/              # Hooks personnalisés
├── contexts/           # Contextes React
├── supabase/           # Backend Supabase
│   └── functions/
│       └── server/     # Edge Functions
├── styles/            # CSS Global (Tailwind v4)
├── docs/              # Documentation complète
└── utils/             # Utilitaires
```

---

## 🎨 Design System

- **Typographie** : Montserrat (titres) + Inter (texte)
- **Design** : 100% carré, pas de border-radius
- **Responsive** : Mobile-first
- **Devise** : Franc CFA (F CFA) pour marché ouest-africain

---

## 🔧 Commandes Utiles

```bash
# Développement
npm run dev

# Build production
npm run build

# Tests
npm test

# Initialiser les données Supabase (si modal ne s'affiche pas)
# Voir /INITIALISER_DONNEES.md
```

---

## 📞 Support

**Problème d'initialisation ?** → [`/INITIALISER_DONNEES.md`](/INITIALISER_DONNEES.md)

**Documentation complète ?** → [`/docs/README.md`](/docs/README.md)

**Questions ?** → Consultez [`/docs/INDEX.md`](/docs/INDEX.md) pour navigation rapide

---

## ✅ État Actuel

- ✅ Infrastructure backend opérationnelle
- ✅ 63% du site migré vers Supabase
- ✅ Fallback automatique si backend down
- ✅ TypeScript type-safe
- ✅ Documentation exhaustive
- ✅ **Support YouTube complet (Hero + Video Stories)** 🆕
- ✅ Animation logo au scroll finalisée 🆕
- ⏳ Données à initialiser (1 clic)

---

## 🎉 NOUVEAUTÉS (17 Oct 2025)

### 💬 Témoignages Dynamiques
- ✅ Gestion complète depuis `/cms/testimonials`
- ✅ Initialisation en 1 clic
- ✅ Multilingue FR/EN
- ✅ Featured/Published

### 🎥 Video Stories Dynamiques
- ✅ Gestion complète depuis `/cms/videos`
- ✅ Initialisation en 1 clic
- ✅ Carousel responsive
- ✅ Citations optionnelles

### 📰 Actualités & Blog Dynamiques
- ✅ Gestion complète depuis `/cms/articles`
- ✅ Initialisation en 1 clic
- ✅ Multilingue FR/EN
- ✅ Slugs SEO automatiques
- ✅ 5 catégories (actualités, conseils, tendances, innovations, projets)

### 🌍 Sélecteur de Langue (FIX COMPLET)
- ✅ Le contenu s'affiche maintenant selon la langue sélectionnée
- ✅ Correction de `currentLanguage` → `selectedLanguage` dans 4 composants
- ✅ 35 occurrences corrigées dans les sections
- ✅ **NOUVEAU** : Articles multilingues (détail article)
- ✅ 12 traductions ajoutées dans ArticleDetailPage
- ✅ **TOTAL** : 47 corrections appliquées

### 📚 Documentation
- ✅ **[CMS_DOCUMENTATION_INDEX.md](/CMS_DOCUMENTATION_INDEX.md)** - Index complet
- ✅ **[STATUS_GLOBAL_CMS.md](/STATUS_GLOBAL_CMS.md)** - Vue d'ensemble
- ✅ **[ARTICLES_DYNAMIQUES_READY.md](/ARTICLES_DYNAMIQUES_READY.md)** - Articles/Blog
- ✅ **[TESTIMONIALS_VIDEOS_DYNAMIQUES_READY.md](/TESTIMONIALS_VIDEOS_DYNAMIQUES_READY.md)** - Témoignages/Vidéos
- ✅ **[FIX_LANGUAGE_SELECTOR.md](/FIX_LANGUAGE_SELECTOR.md)** - Fix sélecteur langue (sections)
- ✅ **[FIX_ARTICLES_LANGUE.md](/FIX_ARTICLES_LANGUE.md)** - Fix articles multilingues

---

**🎯 Prêt à commencer ? Lancez `npm run dev` ! 🚀**
