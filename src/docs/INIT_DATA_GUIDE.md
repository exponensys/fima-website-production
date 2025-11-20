# 🚀 GUIDE D'INITIALISATION DES DONNÉES - PHASE 1 & 2

> **Correction des erreurs backend** : Ce guide vous montre comment initialiser les données dans le KV Store de Supabase

---

## 🎯 PROBLÈME RÉSOLU

Les erreurs suivantes ont été corrigées :

```
❌ Error fetching site settings: Error: Failed to fetch site settings
❌ Error fetching product categories: Error: Failed to fetch product categories
❌ Could not find the table 'public.business_units' in the schema cache
```

**Solution** : Le système utilise le **KV Store** (key-value store) de Supabase, pas des tables PostgreSQL classiques. Les données doivent être initialisées via une route API.

---

## ✅ CORRECTIONS APPORTÉES

### 1. Ajout de la route `/business-units` dans le backend

**Fichier** : `/supabase/functions/server/index.tsx`

- ✅ Route `GET /make-server-4a2f605a/business-units` ajoutée
- ✅ Route `POST /make-server-4a2f605a/business-units` ajoutée
- ✅ Données de fallback incluses

### 2. Modification du hook `useSupabaseBusinessUnits`

**Fichier** : `/hooks/useSupabaseBusinessUnits.ts`

- ✅ Supprimé l'accès direct à la table PostgreSQL
- ✅ Utilise maintenant la route API `/business-units`
- ✅ Fallback local si API indisponible
- ✅ Types TypeScript simplifiés

### 3. Route d'initialisation des données

**Nouvelle route** : `POST /make-server-4a2f605a/init-phase-1-2`

Cette route initialise automatiquement :
- 6 clés site_settings
- 3 business units
- 15 catégories de produits

---

## 🚀 INITIALISATION DES DONNÉES

### Étape 1 : Appeler la route d'initialisation

**Option A : Via curl (Terminal)**

```bash
# Remplacer [PROJECT_ID] par votre ID Supabase
# Remplacer [ANON_KEY] par votre clé anonyme Supabase

curl -X POST "https://[PROJECT_ID].supabase.co/functions/v1/make-server-4a2f605a/init-phase-1-2" \
  -H "Authorization: Bearer [ANON_KEY]" \
  -H "Content-Type: application/json"
```

**Option B : Via le navigateur (DevTools Console)**

```javascript
// Remplacer les valeurs
const PROJECT_ID = 'votre-project-id';
const ANON_KEY = 'votre-anon-key';

fetch(`https://${PROJECT_ID}.supabase.co/functions/v1/make-server-4a2f605a/init-phase-1-2`, {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${ANON_KEY}`,
    'Content-Type': 'application/json'
  }
})
.then(res => res.json())
.then(data => console.log('✅ Données initialisées:', data))
.catch(err => console.error('❌ Erreur:', err));
```

**Option C : Via Postman ou Insomnia**

1. Méthode : `POST`
2. URL : `https://[PROJECT_ID].supabase.co/functions/v1/make-server-4a2f605a/init-phase-1-2`
3. Headers :
   - `Authorization: Bearer [ANON_KEY]`
   - `Content-Type: application/json`
4. Envoyer la requête

---

### Étape 2 : Vérifier que les données sont bien initialisées

**Test 1 : Site Settings**

```bash
curl "https://[PROJECT_ID].supabase.co/functions/v1/make-server-4a2f605a/site-settings" \
  -H "Authorization: Bearer [ANON_KEY]"
```

**Réponse attendue** :
```json
{
  "success": true,
  "data": {
    "languages": [
      { "code": "FR", "name": "Français", "flag": "🇫🇷" },
      { "code": "EN", "name": "English", "flag": "🇬🇧" }
    ],
    "currencies": [...],
    "company_description": "...",
    "certifications": [...],
    "social_links": {...},
    "contact_info": {...}
  }
}
```

**Test 2 : Business Units**

```bash
curl "https://[PROJECT_ID].supabase.co/functions/v1/make-server-4a2f605a/business-units" \
  -H "Authorization: Bearer [ANON_KEY]"
```

**Réponse attendue** :
```json
{
  "success": true,
  "data": [
    {
      "id": "fima-couchage",
      "slug": "fima-couchage",
      "name": "FIMA Couchage",
      "description": "Solutions complètes pour literie professionnelle et particuliers",
      "icon": "Bed",
      "primary_color": "#B5C233"
    },
    {...},
    {...}
  ]
}
```

**Test 3 : Product Categories**

```bash
curl "https://[PROJECT_ID].supabase.co/functions/v1/make-server-4a2f605a/product-categories" \
  -H "Authorization: Bearer [ANON_KEY]"
```

**Réponse attendue** :
```json
{
  "success": true,
  "data": {
    "fima-couchage": [
      {
        "key": "matelas",
        "name": "Matelas",
        "icon": "🛏️",
        "description": "Ressorts, mousse, latex naturel",
        "count": "45 modèles",
        "business": "fima-couchage"
      },
      ...
    ],
    "fima-design": [...],
    "univers-glass": [...]
  }
}
```

---

### Étape 3 : Recharger l'application

Une fois les données initialisées :

1. **Recharger la page** dans le navigateur (F5 ou Cmd+R)
2. **Vérifier la console** : Les erreurs devraient avoir disparu
3. **Vérifier l'affichage** :
   - Header : Les langues et devises s'affichent
   - Footer : Certifications et liens sociaux visibles
   - Pages métiers : Les 3 business units apparaissent

---

## 🔍 TROUVER VOS CREDENTIALS SUPABASE

### PROJECT_ID

1. Aller sur https://supabase.com
2. Ouvrir votre projet FIMA
3. Aller dans **Settings** → **General**
4. Copier **Reference ID**

**Ou** regarder dans `/utils/supabase/info.tsx` :

```typescript
export const projectId = 'votre-project-id';
```

### ANON_KEY

1. Aller sur https://supabase.com
2. Ouvrir votre projet FIMA
3. Aller dans **Settings** → **API**
4. Copier **anon public** key

**Ou** regarder dans `/utils/supabase/info.tsx` :

```typescript
export const publicAnonKey = 'eyJhbGci...';
```

---

## 📊 DONNÉES INITIALISÉES

### Site Settings (6 clés)

| Clé | Contenu |
|-----|---------|
| `site_settings_languages` | 2 langues (FR, EN) |
| `site_settings_currencies` | 4 devises (XOF, EUR, USD, GBP) |
| `site_settings_company_description` | Description entreprise |
| `site_settings_certifications` | 2 certifications |
| `site_settings_social_links` | 4 réseaux sociaux |
| `site_settings_contact_info` | Email, téléphone, adresse, horaires |

### Business Units (1 clé)

| Clé | Contenu |
|-----|---------|
| `business_units` | 3 unités métier (FIMA Couchage, FIMA Design, UNIVERS GLASS) |

### Product Categories (1 clé)

| Clé | Contenu |
|-----|---------|
| `product_categories` | 15 catégories (5 par métier) |

**Total** : **8 clés KV Store créées**

---

## 🐛 DÉPANNAGE

### Erreur : "Failed to fetch"

**Cause** : URL ou credentials incorrects

**Solution** :
1. Vérifier PROJECT_ID dans `/utils/supabase/info.tsx`
2. Vérifier ANON_KEY dans `/utils/supabase/info.tsx`
3. Vérifier que le serveur backend est déployé

### Erreur : "Unauthorized"

**Cause** : Clé API invalide ou expirée

**Solution** :
1. Aller sur Supabase Dashboard
2. Settings → API
3. Copier une nouvelle clé `anon public`
4. Mettre à jour `/utils/supabase/info.tsx`

### Les données ne s'affichent toujours pas

**Solution** :
1. Ouvrir DevTools → Console
2. Vérifier qu'il n'y a plus d'erreurs rouges
3. Vérifier Network → Filter par "make-server"
4. Vérifier que les requêtes retournent Status 200
5. Si problème persiste, vider le cache du navigateur (Ctrl+Shift+Delete)

---

## ✅ VALIDATION

Une fois l'initialisation terminée :

- [ ] Route `/init-phase-1-2` appelée avec succès
- [ ] Test `/site-settings` retourne données complètes
- [ ] Test `/business-units` retourne 3 unités
- [ ] Test `/product-categories` retourne 15 catégories
- [ ] Application rechargée
- [ ] Aucune erreur dans la console
- [ ] Header affiche langues et devises
- [ ] Footer affiche certifications
- [ ] Pages métiers accessibles

---

## 🎉 SUCCÈS !

Si tous les tests passent, **Phase 1 & 2 est maintenant 100% fonctionnelle** ! ✅

Les hooks suivants fonctionnent maintenant correctement :
- ✅ `useSiteSettings()`
- ✅ `useLanguages()`
- ✅ `useCurrencies()`
- ✅ `useCompanyDescription()`
- ✅ `useCertifications()`
- ✅ `useSocialLinks()`
- ✅ `useContactInfo()`
- ✅ `useProductCategories()`
- ✅ `useSupabaseBusinessUnits()`

---

## 📞 PROCHAINES ÉTAPES

Une fois Phase 1 & 2 validée :

1. **Tester** tous les composants (voir `/docs/QUICK_TEST_CHECKLIST.md`)
2. **Valider** que le fallback fonctionne (mode offline)
3. **Décider** : Continuer avec Phase 3 ou optimiser Phase 1 & 2

**Documentation complète** : `/docs/TODO_REMAINING_WORK.md`

---

**Dernière mise à jour** : 8 octobre 2025  
**Version** : 1.0
