# 🚀 Initialisation des Catégories FIMA Couchage

## ⚠️ IMPORTANT - À FAIRE MAINTENANT

Les nouvelles catégories FIMA Couchage sont **définies dans le code** mais **pas encore dans la base de données Supabase**.

---

## 📋 Toutes les Catégories

### 🛏️ FIMA Couchage (6 gammes)

1. **GAMME CONFORT BRODÉ** (`confort-brode`)
2. **GAMME MÉDICALE FIMA** (`medicale`)
3. **GAMME BABYCARE FIMA** (`babycare`)
4. **COLLECTION ÉLÉGANCE UNIE COUSSINS ET TRAVERSINS** (`elegance-unie`)
5. **GAMME THERMOCONFORT COUETTE ET HOUSSE** (`thermoconfort`)
6. **GAMME PARURE DE LIT** (`parure-lit`)

### 🪵 FIMA Design (9 catégories)

1. **Cuisine** (`cuisine`)
2. **Dressing** (`dressing`)
3. **Aménagement buanderie** (`amenagement-buanderie`)
4. **Bureaux** (`bureaux`)
5. **Chambres** (`chambres`)
6. **Panneaux décoratifs intérieurs** (`panneaux-decoratifs-interieurs`)
7. **Portes** (`portes`)
8. **Salles à manger** (`salles-a-manger`)
9. **Salon** (`salon`)

### 🪟 UNIVERS GLASS (5 catégories)

1. **Vitrerie** (`vitrerie`)
2. **Menuiserie Aluminium** (`menuiserie-aluminium`)
3. **Fenêtres** (`fenetres`)
4. **Portes** (`portes`)
5. **Cloisons** (`cloisons`)

**TOTAL : 20 catégories**

---

## ✅ Comment Initialiser (3 méthodes)

### Méthode 1 : Via le CMS (RECOMMANDÉ) ⭐

1. Aller sur `/cms`
2. Cliquer sur **"Catégories"** dans le menu
3. Cliquer sur le bouton **"Initialiser les Catégories"**
4. Confirmer l'initialisation
5. ✅ Les **20 catégories** sont créées automatiquement !
   - **6 gammes FIMA Couchage** (Confort Brodé, Médicale, BabyCare, Élégance Unie, ThermoConfort, Parure de Lit)
   - **9 catégories FIMA Design** (Cuisine, Dressing, Aménagement buanderie, Bureaux, Chambres, Panneaux décoratifs, Portes, Salles à manger, Salon)
   - **5 catégories UNIVERS GLASS** (Vitrerie, Menuiserie Aluminium, Fenêtres, Portes, Cloisons)

### Méthode 2 : Via la Console Navigateur

1. Ouvrir la console du navigateur (F12)
2. Coller ce code :

```javascript
// Initialiser les catégories
const { initProductCategories } = await import('./utils/initProductCategoriesData');
const result = await initProductCategories();
console.log(result);
```

3. Appuyer sur Entrée
4. ✅ Vérifier que `result.success === true`

### Méthode 3 : Appel API Direct

```bash
curl -X POST https://YOUR_PROJECT_ID.supabase.co/functions/v1/make-server-4a2f605a/product-categories \
  -H "Authorization: Bearer YOUR_ANON_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "fima-couchage": [
      {
        "key": "confort-brode",
        "name": "GAMME CONFORT BRODÉ",
        "slug": "confort-brode",
        "icon": "✨",
        "description": "Matelas brodés haute qualité pour un confort optimal",
        "count": "35 modèles",
        "business": "fima-couchage"
      }
      // ... (autres catégories)
    ]
  }'
```

---

## 🔍 Vérification

### 1. Vérifier que les catégories sont sauvegardées

```javascript
// Dans la console du navigateur
const { getProductCategories } = await import('./utils/initProductCategoriesData');
const categories = await getProductCategories('fima-couchage');
console.log('Catégories FIMA Couchage:', categories);
```

Vous devriez voir les 6 catégories !

### 2. Tester la Navigation

1. Aller sur **Homepage**
2. Cliquer sur **"FIMA Couchage"**
3. **Vérifier** que les 6 catégories s'affichent en cercle
4. **Cliquer** sur une catégorie (ex: "GAMME CONFORT BRODÉ")
5. **Vérifier** que la page `AllProductsPage` s'ouvre avec le filtre activé

---

## 📁 Fichiers Concernés

### ✅ Définition des Catégories
- `/utils/initProductCategoriesData.ts` → Définition des 6 catégories

### ✅ Images des Catégories
- `/data/fima-couchage-images.ts` → Mapping des images

### ✅ Page FIMA Couchage
- `/components/business-units/FimaCouchagePage.tsx` → Affichage en cercle

### ✅ Serveur
- `/supabase/functions/server/index.tsx` → Routes API

### ✅ CMS
- `/cms/components/ProductCategoriesInitButton.tsx` → Bouton d'initialisation
- `/cms/pages/CMSCategories.tsx` → Page CMS

---

## 🎨 Aperçu des Catégories

```typescript
{
  "fima-couchage": [
    {
      key: "confort-brode",
      name: "GAMME CONFORT BRODÉ",
      slug: "confort-brode",
      icon: "✨",
      description: "Matelas brodés haute qualité pour un confort optimal",
      count: "35 modèles",
      business: "fima-couchage"
    },
    {
      key: "medicale",
      name: "GAMME MÉDICALE FIMA",
      slug: "medicale",
      icon: "🏥",
      description: "Solutions orthopédiques certifiées",
      count: "28 modèles",
      business: "fima-couchage"
    },
    {
      key: "babycare",
      name: "GAMME BABYCARE FIMA",
      slug: "babycare",
      icon: "👶",
      description: "Literie spécialisée pour bébés et enfants",
      count: "22 modèles",
      business: "fima-couchage"
    },
    {
      key: "elegance-unie",
      name: "COLLECTION ÉLÉGANCE UNIE COUSSINS ET TRAVERSINS",
      slug: "elegance-unie",
      icon: "🛋️",
      description: "Coussins et traversins design",
      count: "45 modèles",
      business: "fima-couchage"
    },
    {
      key: "thermoconfort",
      name: "GAMME THERMOCONFORT COUETTE ET HOUSSE",
      slug: "thermoconfort",
      icon: "🌡️",
      description: "Couettes et housses thermorégulatrices",
      count: "38 modèles",
      business: "fima-couchage"
    },
    {
      key: "parure-lit",
      name: "GAMME PARURE DE LIT",
      slug: "parure-lit",
      icon: "🛏️",
      description: "Parures complètes haut de gamme",
      count: "120+ modèles",
      business: "fima-couchage"
    }
  ]
}
```

---

## ⚡ Démarrage Rapide (TL;DR)

```bash
# 1. Aller dans le CMS
/cms

# 2. Cliquer sur "Catégories"

# 3. Cliquer sur "Initialiser les Catégories"

# 4. Confirmer

# ✅ FAIT !
```

---

## 🐛 Dépannage

### Problème : Catégories ne s'affichent pas

**Solution :**
```javascript
// Vérifier dans la console
const categories = await fetch('https://YOUR_PROJECT_ID.supabase.co/functions/v1/make-server-4a2f605a/product-categories', {
  headers: { 'Authorization': 'Bearer YOUR_ANON_KEY' }
}).then(r => r.json());

console.log(categories);
```

### Problème : Erreur lors de l'initialisation

**Solution :**
1. Vérifier que le serveur tourne (route `/health`)
2. Vérifier les logs de la console
3. Réessayer l'initialisation

### Problème : Images ne s'affichent pas

**Solution :**
- Les images sont définies dans `/data/fima-couchage-images.ts`
- Vérifier que le mapping correspond aux noms de catégories

---

## 📊 État Actuel

### ✅ Fait
- [x] Définition des 6 catégories dans le code
- [x] Mapping des images
- [x] Page FIMA Couchage avec design en cercle
- [x] Navigation vers AllProductsPage avec filtres
- [x] Route serveur `/product-categories`
- [x] Bouton d'initialisation dans le CMS
- [x] Documentation complète

### ⏳ À Faire
- [ ] **Initialiser les catégories dans Supabase** ← VOUS ÊTES ICI
- [ ] Tester la navigation complète
- [ ] Ajouter des produits dans chaque catégorie

---

## 🎉 Une Fois Initialisé

Après l'initialisation, vous pourrez :

1. ✅ Voir les 6 catégories sur la page FIMA Couchage
2. ✅ Cliquer sur une catégorie pour voir les produits filtrés
3. ✅ Gérer les catégories depuis le CMS
4. ✅ Ajouter de nouveaux produits dans chaque catégorie

---

**Action requise :** Allez dans le CMS et cliquez sur "Initialiser les Catégories" !

**Date:** 25 Octobre 2025  
**Status:** ⏳ EN ATTENTE D'INITIALISATION  
**Priority:** 🔴 HAUTE
