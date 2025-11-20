# 📍 GUIDE DES EMPLACEMENTS - COMPOSANTS MIGRÉS

> **Objectif** : Savoir exactement où trouver et tester chaque composant migré  
> **Audience** : Développeurs, testeurs, équipe produit

---

## 🎯 VUE D'ENSEMBLE

### Composants migrés (5)

| # | Composant | Fichier | Présent sur | Facilement testable |
|---|-----------|---------|-------------|---------------------|
| 1 | **Header** | `/components/Header.tsx` | **TOUTES LES PAGES** | ✅ Oui |
| 2 | **Footer** | `/components/Footer.tsx` | **TOUTES LES PAGES** | ✅ Oui |
| 3 | **QuoteRequestModal** | `/components/QuoteRequestModal.tsx` | Modal (bouton sur plusieurs pages) | ✅ Oui |
| 4 | **ExpertConsultationModal** | `/components/ExpertConsultationModal.tsx` | Modal (bouton sur plusieurs pages) | ✅ Oui |
| 5 | **ChatWidget** | `/components/ChatWidget.tsx` | **TOUTES LES PAGES** (coin inf. droit) | ✅ Oui |

---

## 🗺️ CARTE VISUELLE DU SITE

```
┌─────────────────────────────────────────────────────────┐
│ 🔝 HEADER (Migré ✅)                                    │
│ Logo | Métiers ▼ | Produits ▼ | Langue 🌐 | Devise 💰  │
│ Search 🔍 | Favoris ❤️ | Panier 🛒 | Compte 👤           │
└─────────────────────────────────────────────────────────┘
│
│ ┌─────────────────────────────────────────────────────┐
│ │ PAGE CONTENT                                        │
│ │                                                     │
│ │ [Bouton "Demander un devis"] ────────────┐         │
│ │                                           │         │
│ │ [Bouton "Consultation gratuite"] ─────┐  │         │
│ │                                        │  │         │
│ └────────────────────────────────────────┼──┼─────────┘
│                                           │  │
│                                           │  │
│ ┌─────────────────────────────────────────┼──┼─────────┐
│ │ 🔽 FOOTER (Migré ✅)                    │  │         │
│ │ Description | Certifications | Social  │  │         │
│ │ Contact | Horaires | Liens navigation  │  │         │
│ └─────────────────────────────────────────┼──┼─────────┘
│                                           │  │
│                    ┌──────────────────────┘  │
│                    │ ExpertConsultationModal │
│                    │ (Migré ✅)              │
│                    └─────────────────────────┘
│
│              ┌────────────────────────────────┘
│              │ QuoteRequestModal
│              │ (Migré ✅)
│              └─────────────────────────────────
│
│ ┌──────────────────┐
│ │ 💬 CHAT         │ ← ChatWidget (Migré ✅)
│ │    (coin inf.)  │    Toujours visible
│ └──────────────────┘
```

---

## 📍 1. HEADER - Barre de navigation

### Localisation

**Fichier** : `/components/Header.tsx`  
**Présence** : **100% des pages** (toujours visible en haut)  
**Hooks utilisés** :
- `useLanguages()` → Ligne ~99
- `useCurrencies()` → Ligne ~100
- `useSupabaseBusinessUnits()` → Ligne ~101
- `useProductCategories()` → Ligne ~102

### Comment le tester

1. **Ouvrir n'importe quelle page du site**
2. **Regarder en haut** → Le Header est toujours là

### Éléments dynamiques à vérifier

**Desktop** (écran > 1024px) :

```
┌────────────────────────────────────────────────────────┐
│ [Logo FIMA] | Nos Métiers ▼ | Produits ▼ | Projets   │
│                                                         │
│ [Search 🔍_______________]  🌐 FR ▼  💰 XOF ▼  ❤️ 🛒 👤│
└────────────────────────────────────────────────────────┘
           │              │                │   │
           │              │                │   └─ Sélecteur devise (4 devises)
           │              │                └───── Sélecteur langue (FR/EN)
           │              └────────────────────── Menu produits (15 catégories)
           └───────────────────────────────────── Menu métiers (3 business units)
```

**Mobile** (écran < 768px) :

```
┌──────────────────────────┐
│ ☰ [Logo FIMA]  ❤️ 🛒 👤 │
└──────────────────────────┘
 │
 └─ Menu hamburger ouvre :
    - Nos Métiers (3 unités)
    - Produits (15 catégories)
    - Langue (FR/EN)
    - Devise (XOF/EUR/USD/GBP)
```

### Données Supabase utilisées

| Élément UI | Hook | KV Store Key | Fallback local |
|------------|------|--------------|----------------|
| Sélecteur langue | `useLanguages()` | `site_settings_languages` | FR, EN |
| Sélecteur devise | `useCurrencies()` | `site_settings_currencies` | XOF, EUR, USD, GBP |
| Menu métiers | `useSupabaseBusinessUnits()` | `business_units` | 3 métiers |
| Menu produits | `useProductCategories()` | `product_categories` | 15 catégories |

---

## 📍 2. FOOTER - Pied de page

### Localisation

**Fichier** : `/components/Footer.tsx`  
**Présence** : **100% des pages** (toujours visible en bas)  
**Hooks utilisés** :
- `useCompanyDescription()` → Ligne ~58
- `useCertifications()` → Ligne ~59
- `useSocialLinks()` → Ligne ~60
- `useContactInfo()` → Ligne ~61

### Comment le tester

1. **Ouvrir n'importe quelle page du site**
2. **Scroller tout en bas** → Le Footer est toujours là

### Structure visuelle

```
┌─────────────────────────────────────────────────────────┐
│ À PROPOS DE FIMA                                        │
│ ─────────────────                                       │
│ "Leader dans la literie, le mobilier et l'aménagement   │
│ depuis 1985. FIMA propose des solutions..."             │
│                                                          │
│ 🏆 Certifications                                       │
│ • Entreprise du Patrimoine Vivant                      │
│ • Certifié ISO 9001:2015                                │
├──────────────────────────────────────────────────────────┤
│ SUIVEZ-NOUS                                             │
│ ────────────                                            │
│ 📘 Facebook  💼 LinkedIn  📷 Instagram  📺 YouTube      │
├──────────────────────────────────────────────────────────┤
│ CONTACT                                                  │
│ ───────                                                  │
│ 📧 contact@fima.ci                                      │
│ 📞 +225 XX XX XX XX XX                                  │
│ 📍 Zone industrielle de Yopougon, Abidjan, Côte d'Ivoire│
│ 🕐 Lun-Ven: 8h-18h | Sam: 9h-13h                       │
├──────────────────────────────────────────────────────────┤
│ NAVIGATION                                               │
│ ──────────                                               │
│ Accueil | Produits | Nos Métiers | Projets | Blog...   │
└──────────────────────────────────────────────────────────┘
```

### Données Supabase utilisées

| Élément UI | Hook | KV Store Key | Contenu |
|------------|------|--------------|---------|
| Description | `useCompanyDescription()` | `site_settings_company_description` | Texte "Leader dans..." |
| Certifications | `useCertifications()` | `site_settings_certifications` | 2 certifications |
| Réseaux sociaux | `useSocialLinks()` | `site_settings_social_links` | 4 liens (FB, LinkedIn, IG, YT) |
| Contact | `useContactInfo()` | `site_settings_contact_info` | Email, tél, adresse, horaires |

### Test spécial : Liens sociaux

**Vérifier** :
- Tous les liens ouvrent dans **nouvel onglet** (`target="_blank"`)
- Tous ont `rel="noopener noreferrer"` (sécurité)

---

## 📍 3. QUOTEREQUESTMODAL - Modal demande de devis

### Localisation

**Fichier** : `/components/QuoteRequestModal.tsx`  
**Présence** : Modal (popup)  
**Hooks utilisés** :
- `useSupabaseBusinessUnits()` → Ligne ~37
- `useQuoteProjectTypes()` → Ligne ~43
- `useQuoteBudgetRanges()` → Ligne ~51
- `useQuoteTimelines()` → Ligne ~60

### Comment ouvrir le modal

**Méthode 1** : Via boutons spécifiques

Pages avec bouton "Demander un devis" :
- ✅ Homepage (Hero section)
- ✅ FimaCouchagePage
- ✅ FimaDesignPage
- ✅ UniversGlassPage
- ✅ B2BLandingPage
- ✅ LargeAccountsPage
- ✅ AllProjectsPage
- ✅ ProjectWithFimaSection

**Méthode 2** : Via Header
- Cliquer sur un métier → Puis "Demander un devis"

**Méthode 3** : Programmatiquement
- Console : `window.dispatchEvent(new Event('open-quote-modal'))`

### Flux du modal (5 étapes)

```
ÉTAPE 1          ÉTAPE 2              ÉTAPE 3           ÉTAPE 4        ÉTAPE 5
────────         ────────             ────────          ────────       ────────
Métier           Type projet          Budget            Délais         Coordonnées
                                                                        
□ Couchage       □ Résidentiel        □ < 5M F CFA      □ Urgent       [Nom]
□ Design         □ Commercial         □ 5-15M           □ 1-3 mois     [Email]
□ UNIVERS GLASS  □ Hôtellerie         □ 15-50M          □ 3-6 mois     [Tel]
                 □ Institutionnel     □ 50-100M         □ 6-12 mois    [Message]
[Suivant]        □ Industriel         □ > 100M          □ Flexible     
                                      □ À discuter                     [Envoyer]
                 [Précédent][Suivant] [Préc][Suivant]   [Préc][Suivant]
```

### Données Supabase utilisées

| Étape | Élément | Hook | KV Key | Nombre d'options |
|-------|---------|------|--------|------------------|
| 1 | Métiers | `useSupabaseBusinessUnits()` | `business_units` | 3 |
| 2 | Types projet | `useQuoteProjectTypes()` | `form_options_quote_project_types` | 5 |
| 3 | Budgets | `useQuoteBudgetRanges()` | `form_options_quote_budget_ranges` | 6 |
| 4 | Délais | `useQuoteTimelines()` | `form_options_quote_timelines` | 5 |

### Points d'attention

**Devise** :
- ✅ Tous les budgets sont en **F CFA** (XOF - devise ouest-africaine)
- ✅ Même si on change la devise dans le Header, le modal reste en F CFA

**Validation** :
- ✅ Impossible de passer à l'étape suivante sans sélection
- ✅ Email et téléphone validés à l'étape 5

---

## 📍 4. EXPERTCONSULTATIONMODAL - Modal consultation expert

### Localisation

**Fichier** : `/components/ExpertConsultationModal.tsx`  
**Présence** : Modal (popup)  
**Hooks utilisés** :
- `useConsultationServices()` → Ligne ~42
- `useConsultationBudgetRanges()` → Ligne ~50
- `useConsultationTimelines()` → Ligne ~58
- `useAppointmentTimeSlots()` → Ligne ~66

### Comment ouvrir le modal

**Méthode 1 : Mode "Consultation"**

Pages avec bouton "Consultation gratuite" :
- ✅ Homepage (CompanyPresentationSection)
- ✅ FimaCouchagePage
- ✅ FimaDesignPage
- ✅ UniversGlassPage
- ✅ TeamSection

**Méthode 2 : Mode "Rendez-vous"**

Pages avec bouton "Prendre rendez-vous" :
- ✅ Homepage
- ✅ Pages métiers

### Deux modes du modal

**MODE 1 : CONSULTATION EXPERT** (Demande info générale)

```
┌─────────────────────────────────────┐
│ 👨‍💼 CONSULTATION GRATUITE          │
├─────────────────────────────────────┤
│                                     │
│ QUEL SERVICE VOUS INTÉRESSE ?      │
│                                     │
│ □ 🛏️ Literie & Couchage            │
│ □ 🪚 Menuiserie & Design            │
│ □ 🏢 Vitrerie & Aluminium           │
│ □ 🏗️ Solutions B2B                 │
│ □ 💡 Autre projet                   │
│                                     │
│ QUEL EST VOTRE BUDGET ?             │
│ □ < 500 000 F CFA                   │
│ □ 500k - 2M F CFA                   │
│ □ 2M - 10M F CFA                    │
│ □ > 10M F CFA                       │
│ □ À discuter                        │
│                                     │
│ DÉLAIS SOUHAITÉS ?                  │
│ □ Urgent (< 1 mois)                 │
│ □ 1-3 mois                          │
│ □ 3-6 mois                          │
│ □ 6+ mois                           │
│ □ Flexible                          │
│                                     │
│ [Coordonnées]                       │
│ [Envoyer la demande]                │
└─────────────────────────────────────┘
```

**MODE 2 : PRISE DE RENDEZ-VOUS** (Consultation physique)

```
┌─────────────────────────────────────┐
│ 📅 PRENDRE RENDEZ-VOUS              │
├─────────────────────────────────────┤
│                                     │
│ CHOISIR UNE DATE                    │
│ [Calendrier]                        │
│                                     │
│ CHOISIR UN CRÉNEAU                  │
│ Matin:                              │
│ □ 09:00  □ 09:30  □ 10:00          │
│ □ 10:30  □ 11:00  □ 11:30          │
│                                     │
│ Après-midi:                         │
│ □ 14:00  □ 14:30  □ 15:00          │
│ □ 15:30  □ 16:00  □ 16:30          │
│                                     │
│ [Coordonnées]                       │
│ [Confirmer le rendez-vous]          │
└─────────────────────────────────────┘
```

### Données Supabase utilisées

| Mode | Élément | Hook | KV Key | Options |
|------|---------|------|--------|---------|
| Consultation | Services | `useConsultationServices()` | `form_options_consultation_services` | 5 services |
| Consultation | Budgets | `useConsultationBudgetRanges()` | `form_options_consultation_budget_ranges` | 5 fourchettes |
| Consultation | Délais | `useConsultationTimelines()` | `form_options_consultation_timelines` | 5 options |
| RDV | Créneaux | `useAppointmentTimeSlots()` | `form_options_appointment_time_slots` | 12 créneaux (9h-16h30) |

### Points d'attention

**Créneaux horaires** :
- ✅ Uniquement jours ouvrés (Lun-Ven)
- ✅ Créneaux de 30 minutes (09:00, 09:30, ...)
- ✅ Pause déjeuner : 11:30 → 14:00

---

## 📍 5. CHATWIDGET - Widget de chat en direct

### Localisation

**Fichier** : `/components/ChatWidget.tsx`  
**Présence** : **100% des pages** (coin inférieur droit, z-index élevé)  
**Hook utilisé** :
- `useChatbotConfig()` → Ligne ~12

### Comment le tester

**Étape 1** : Ouvrir n'importe quelle page

**Étape 2** : Regarder **coin inférieur droit**
```
                              │
                              │
                              │
                        ┌─────┴────┐
                        │  💬      │ ← Bouton chat (fermé)
                        │  Chat    │
                        └──────────┘
```

**Étape 3** : Cliquer sur le bouton
```
┌──────────────────────────────┐
│ 💬 Chat en direct       [─][X]│
├──────────────────────────────┤
│                              │
│ 👩 Sophie (Conseillère)      │
│ Bonjour ! Je suis Sophie,    │
│ votre conseillère FIMA.      │
│ Comment puis-je vous aider ? │
│                              │
├──────────────────────────────┤
│ RÉPONSES RAPIDES:            │
│ [Infos matelas]              │
│ [Délais livraison]           │
│ [Retours & garanties]        │
│ [Aide au choix]              │
├──────────────────────────────┤
│ [Votre message...]    [Send] │
└──────────────────────────────┘
```

### Données Supabase utilisées

| Élément UI | Hook | KV Key | Contenu |
|------------|------|--------|---------|
| Message initial | `config.initial_messages` | `chatbot_initial_messages` | 1 message de bienvenue |
| Réponses rapides | `config.quick_replies` | `chatbot_quick_replies` | 4 boutons |
| Réponses auto | `config.auto_responses` | `chatbot_auto_responses` | 5 réponses pré-programmées |

### Réponses automatiques configurées

Tapez ces mots-clés pour déclencher une réponse :

| Mot-clé | Réponse automatique |
|---------|---------------------|
| `matelas` | "Notre gamme de matelas propose différents niveaux de fermeté et technologies. Quel type de confort recherchez-vous ?" |
| `livraison` | "Nous livrons gratuitement en 3-5 jours ouvrés avec installation incluse. Dans quelle région êtes-vous ?" |
| `garantie` | "Tous nos matelas bénéficient d'une garantie de 10 ans et de 100 nuits d'essai. Avez-vous des questions spécifiques ?" |
| `prix` | "Nos prix commencent à 489€ pour un matelas Queen. Nous avons régulièrement des promotions. Quel budget avez-vous en tête ?" |
| `taille` | "Nous proposons toutes les tailles standards : Single, Queen, King et California King. Quelle taille vous intéresse ?" |

### Test interactif

1. **Ouvrir le chat**
2. **Cliquer sur "Infos matelas"** → Devrait recevoir réponse automatique
3. **Taper "livraison"** dans le champ → Devrait recevoir réponse automatique
4. **Vérifier la fluidité** de la conversation

### Points d'attention

**Position** :
- ✅ Toujours visible (fixed position)
- ✅ Ne masque pas le contenu important
- ✅ Z-index élevé (au-dessus des modals)

**Responsive** :
- ✅ Desktop : 380px x 500px (coin inférieur droit)
- ✅ Mobile : Plein écran quand ouvert

---

## 🧪 SCÉNARIOS DE TEST RECOMMANDÉS

### Scénario 1 : Parcours client B2C

**Objectif** : Acheter un matelas

1. **Page d'accueil**
   - Vérifier Header ✅
   - Vérifier Footer ✅
   - Ouvrir ChatWidget → Demander info matelas ✅

2. **Cliquer sur "Nos Produits"**
   - Menu déroulant fonctionne (catégories) ✅

3. **Sélectionner "Matelas"**
   - Page catégorie s'affiche

4. **Cliquer sur un produit**
   - Page détail s'affiche

5. **Cliquer "Demander un devis"**
   - QuoteRequestModal s'ouvre ✅
   - Compléter le formulaire ✅

---

### Scénario 2 : Parcours client B2B

**Objectif** : Demander devis pour projet hôtel

1. **Page d'accueil**
   - Cliquer sur "Nos Métiers" → "FIMA Couchage"

2. **FimaCouchagePage**
   - Vérifier Header/Footer ✅
   - Cliquer "Demander un devis" ✅

3. **QuoteRequestModal**
   - Étape 1 : Sélectionner "FIMA Couchage" ✅
   - Étape 2 : Sélectionner "Hôtellerie" ✅
   - Étape 3 : Sélectionner "50M - 100M F CFA" ✅
   - Étape 4 : Sélectionner "3-6 mois" ✅
   - Étape 5 : Remplir coordonnées ✅

4. **Envoyer demande**
   - Vérifier confirmation

---

### Scénario 3 : Prise de rendez-vous

**Objectif** : Prendre RDV avec un expert

1. **Page d'accueil**
   - Scroller jusqu'à "Nos Experts"
   - Cliquer "Prendre rendez-vous"

2. **ExpertConsultationModal (mode RDV)**
   - Vérifier calendrier fonctionne ✅
   - Sélectionner une date
   - Choisir créneau (ex: 10:00) ✅
   - Remplir coordonnées ✅

3. **Confirmer**
   - Vérifier confirmation

---

### Scénario 4 : Multilingue

**Objectif** : Tester changement de langue

1. **Changer langue** dans Header : FR → EN ✅
2. **Vérifier** que l'interface change (si traductions)
3. **Ouvrir QuoteRequestModal**
   - Vérifier que le texte est en EN ✅
4. **Ouvrir Footer**
   - Vérifier description en EN ✅

---

### Scénario 5 : Multi-devise

**Objectif** : Tester changement de devise

1. **Changer devise** dans Header : XOF → EUR ✅
2. **Aller sur page produit**
   - Vérifier prix en EUR ✅
3. **Ajouter au panier**
   - Vérifier panier en EUR ✅
4. **Ouvrir QuoteRequestModal**
   - Vérifier que budgets restent en F CFA ✅ (normal, marché africain)

---

## 📊 MATRICE DE COMPATIBILITÉ

### Navigateurs testés

| Navigateur | Desktop | Mobile | Composants OK |
|------------|---------|--------|---------------|
| Chrome 120+ | ✅ | ✅ | Tous |
| Firefox 120+ | ✅ | ✅ | Tous |
| Safari 17+ | ✅ | ✅ | Tous |
| Edge 120+ | ✅ | ✅ | Tous |

### Résolutions testées

| Résolution | Catégorie | Header | Footer | Modals | Chat |
|------------|-----------|--------|--------|--------|------|
| 375x667 | Mobile (iPhone SE) | ✅ | ✅ | ✅ | ✅ |
| 390x844 | Mobile (iPhone 12) | ✅ | ✅ | ✅ | ✅ |
| 768x1024 | Tablette (iPad) | ✅ | ✅ | ✅ | ✅ |
| 1920x1080 | Desktop FHD | ✅ | ✅ | ✅ | ✅ |
| 2560x1440 | Desktop QHD | ✅ | ✅ | ✅ | ✅ |

---

## 🐛 PROBLÈMES CONNUS

### Header

**Aucun problème connu** ✅

### Footer

**Aucun problème connu** ✅

### QuoteRequestModal

**Limitation** :
- Budgets toujours en F CFA (XOF) même si devise changée
- **Normal** : Marché cible est l'Afrique de l'Ouest

### ExpertConsultationModal

**Limitation** :
- Créneaux fixes (9h-16h30)
- Pas de gestion des jours fériés (à implémenter)

### ChatWidget

**Limitation** :
- Réponses automatiques basiques (mots-clés simples)
- Pas de vraie IA (phase suivante)

---

## 📞 SUPPORT

**Si vous trouvez un bug** :
1. Créer `/docs/BUGS_FOUND.md`
2. Utiliser le template fourni
3. Inclure screenshot + console errors

**Documentation** :
- Tests complets : `/docs/QUICK_TEST_CHECKLIST.md`
- TODO restant : `/docs/TODO_REMAINING_WORK.md`
- Guide API : `/docs/TEST_API_PHASE_1_2.md`

---

**✅ Tous les composants migrés sont 100% fonctionnels et testables ! 🚀**
