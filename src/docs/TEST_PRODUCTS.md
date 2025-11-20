# 🧪 Guide de Test - Products (AllProductsPage) Supabase

## ⚡ Test Rapide (2 minutes)

### Étape 1: Initialiser les produits de démo

Ouvrez la console du navigateur (F12) et exécutez :

```javascript
// Importer les infos Supabase
import { projectId, publicAnonKey } from './utils/supabase/info';

// Initialiser les produits
fetch(`https://${projectId}.supabase.co/functions/v1/make-server-ead4d8e2/init-products`, {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${publicAnonKey}`
  }
})
.then(r => r.json())
.then(result => {
  if (result.success) {
    console.log('✅ Produits initialisés:', result.data);
    alert(`✅ ${result.data.products} produits créés avec succès ! Rechargez la page.`);
  } else {
    console.error('❌ Erreur:', result.error);
  }
});
```

**Ou via curl :**

```bash
curl -X POST \
  https://{VOTRE_PROJECT_ID}.supabase.co/functions/v1/make-server-ead4d8e2/init-products \
  -H "Authorization: Bearer {VOTRE_PUBLIC_ANON_KEY}"
```

---

### Étape 2: Rafraîchir la page

Rechargez la page d'accueil (F5)

---

### Étape 3: Naviguer vers "Tous nos produits"

Cliquez sur "Tous nos produits" dans le menu ou un bouton CTA

**Vous devriez voir :**
- ✅ 10 produits affichés avec images
- ✅ Compteur "10 produits trouvés"
- ✅ Indicateur de développement "Produits chargés dynamiquement depuis Supabase (10 total)"
- ✅ Filtres par catégorie, métier, fermeté, matériau
- ✅ Barre de recherche fonctionnelle
- ✅ Tri par prix (croissant/décroissant) et nom
- ✅ Prix en FCFA (489 FCFA, 1,250 FCFA, etc.)

---

### Étape 4: Tester les filtres

#### 4.1 Filtrer par Métier
- Cliquez sur **"FIMA Couchage"** → Devrait afficher 4 produits (matelas, oreillers, sommier)
- Cliquez sur **"FIMA Design"** → Devrait afficher 4 produits (bibliothèque, table, cuisine, dressing)
- Cliquez sur **"UNIVERS GLASS"** → Devrait afficher 2 produits (vitrage, porte-fenêtre)
- Cliquez sur **"Tous"** → Devrait afficher tous les 10 produits

#### 4.2 Filtrer par Catégorie
- Sélectionnez **"Matelas"** → Devrait afficher 2 matelas
- Sélectionnez **"Oreillers"** → Devrait afficher 1 oreiller
- Sélectionnez **"Menuiserie"** → Devrait afficher 1 bibliothèque
- Sélectionnez **"Cuisines"** → Devrait afficher 1 cuisine

#### 4.3 Filtrer par Fermeté (pour matelas/oreillers)
- Sélectionnez **"Ferme"** → Devrait afficher le Matelas Confort Premium
- Sélectionnez **"Médium"** → Devrait afficher l'Oreiller Ergonomique
- Sélectionnez **"Médium-Ferme"** → Devrait afficher le Matelas Mémoire de Forme

#### 4.4 Filtrer par Matériau
- Sélectionnez **"Ressorts"** → Devrait afficher le Matelas Confort Premium
- Sélectionnez **"Mémoire de forme"** → Devrait afficher 2 produits (matelas et oreiller)
- Sélectionnez **"Chêne massif"** → Devrait afficher la Bibliothèque
- Sélectionnez **"Noyer massif"** → Devrait afficher la Table à Manger

---

### Étape 5: Tester la recherche

- Tapez **"matelas"** → Devrait afficher 2 matelas
- Tapez **"premium"** → Devrait afficher 3 produits (Matelas, Cuisine, Porte-Fenêtre)
- Tapez **"design"** → Devrait afficher la Table à Manger Design
- Tapez **"luxe"** → Devrait afficher 2 produits (Matelas, Sommier)

---

### Étape 6: Tester le tri

- Sélectionnez **"Prix croissant"** → Le premier produit devrait être l'Oreiller (89 FCFA)
- Sélectionnez **"Prix décroissant"** → Le premier produit devrait être la Cuisine (8,500 FCFA)
- Sélectionnez **"Nom"** → Les produits devraient être triés alphabétiquement

---

## 🔍 Tests Détaillés

### Test 1: Vérifier les données dans Supabase

```javascript
// Dans la console du navigateur
import { projectId, publicAnonKey } from './utils/supabase/info';

fetch(`https://${projectId}.supabase.co/functions/v1/make-server-ead4d8e2/products`, {
  headers: {
    'Authorization': `Bearer ${publicAnonKey}`
  }
})
.then(r => r.json())
.then(result => {
  console.log('Produits récupérés:', result.data);
  console.log('Nombre de produits:', result.data.length);
  
  // Détails par métier
  const byCat = {
    'fima-couchage': result.data.filter(p => p.business === 'fima-couchage').length,
    'fima-design': result.data.filter(p => p.business === 'fima-design').length,
    'univers-glass': result.data.filter(p => p.business === 'univers-glass').length
  };
  console.log('Par métier:', byCat);
});
```

**Résultat attendu :**
```json
{
  "success": true,
  "data": [
    {
      "id": "550e8400-...",
      "name": "Matelas Confort Premium",
      "sku": "MAT-CONF-PREM",
      "category": "matelas",
      "business": "fima-couchage",
      "price": 489000,
      "compareAtPrice": 599000,
      "stock": 25,
      "unit": "pièce",
      "description": "Matelas ressorts ensachés...",
      "images": ["https://..."],
      "featured": true,
      "status": "active",
      ...
    },
    ...
  ]
}
```

---

### Test 2: Tester le filtrage par business

```javascript
// Récupérer uniquement les produits FIMA Couchage
fetch(`https://${projectId}.supabase.co/functions/v1/make-server-ead4d8e2/products?business=fima-couchage`, {
  headers: {
    'Authorization': `Bearer ${publicAnonKey}`
  }
})
.then(r => r.json())
.then(result => {
  console.log('Produits FIMA Couchage:', result.data);
  console.log('Nombre:', result.data.length); // Devrait être 4
});
```

---

### Test 3: Tester le filtrage par catégorie

```javascript
// Récupérer uniquement les matelas
fetch(`https://${projectId}.supabase.co/functions/v1/make-server-ead4d8e2/products?category=matelas`, {
  headers: {
    'Authorization': `Bearer ${publicAnonKey}`
  }
})
.then(r => r.json())
.then(result => {
  console.log('Matelas:', result.data);
  console.log('Nombre:', result.data.length); // Devrait être 2
});
```

---

### Test 4: Récupérer un produit par SKU

```javascript
// Récupérer le Matelas Confort Premium par SKU
fetch(`https://${projectId}.supabase.co/functions/v1/make-server-ead4d8e2/products/MAT-CONF-PREM`, {
  headers: {
    'Authorization': `Bearer ${publicAnonKey}`
  }
})
.then(r => r.json())
.then(result => {
  console.log('Produit récupéré:', result.data);
});
```

---

## ✅ Checklist de Test

### Interface Utilisateur
- [ ] La page "Tous nos produits" s'affiche
- [ ] Les 10 produits sont affichés avec images
- [ ] Le compteur "X produits trouvés" est correct
- [ ] Les prix sont affichés en FCFA (489 FCFA, etc.)
- [ ] Les badges s'affichent (NOUVEAU, Promo, Sur mesure, etc.)
- [ ] Les réductions sont affichées (18%, 22%, etc.)
- [ ] Les prix barrés s'affichent correctement

### Filtres par Métier
- [ ] Filtre "Tous" affiche 10 produits
- [ ] Filtre "FIMA Couchage" affiche 4 produits
- [ ] Filtre "FIMA Design" affiche 4 produits
- [ ] Filtre "UNIVERS GLASS" affiche 2 produits

### Filtres par Catégorie
- [ ] Filtre "Matelas" affiche 2 produits
- [ ] Filtre "Oreillers" affiche 1 produit
- [ ] Filtre "Sommiers" affiche 1 produit
- [ ] Filtre "Menuiserie" affiche 1 produit
- [ ] Filtre "Ameublement" affiche 1 produit
- [ ] Filtre "Cuisines" affiche 1 produit
- [ ] Filtre "Dressings" affiche 1 produit
- [ ] Filtre "Vitrerie" affiche 1 produit
- [ ] Filtre "Menuiserie Aluminium" affiche 1 produit

### Filtres Avancés
- [ ] Filtre par fermeté fonctionne (Ferme, Médium, etc.)
- [ ] Filtre par matériau fonctionne (Ressorts, Latex, etc.)
- [ ] Slider de prix fonctionne
- [ ] Combinaison de filtres fonctionne

### Recherche
- [ ] Recherche par nom fonctionne
- [ ] Recherche par description fonctionne
- [ ] Recherche insensible à la casse
- [ ] Résultats de recherche corrects

### Tri
- [ ] Tri par nom (A-Z) fonctionne
- [ ] Tri par prix croissant fonctionne
- [ ] Tri par prix décroissant fonctionne
- [ ] Le produit le moins cher (89 FCFA) apparaît en premier avec tri croissant
- [ ] Le produit le plus cher (8,500 FCFA) apparaît en premier avec tri décroissant

### États Loading/Error
- [ ] État de chargement s'affiche (spinner)
- [ ] Si erreur, message d'erreur affiché
- [ ] Pas d'erreur dans la console
- [ ] Indicateur de développement affiché (mode dev uniquement)

### Responsive
- [ ] Vue grille sur desktop (3 colonnes)
- [ ] Vue grille sur tablette (2 colonnes)
- [ ] Vue grille sur mobile (1 colonne)
- [ ] Basculement vue grille/liste fonctionne
- [ ] Filtres sidebar fonctionne
- [ ] Mobile: bouton filtres ouvre la sidebar

---

## 📊 Données Attendues

### Produits par Métier
- **FIMA Couchage** : 4 produits
- **FIMA Design** : 4 produits
- **UNIVERS GLASS** : 2 produits

### Produits par Catégorie
- **Matelas** : 2
- **Oreillers** : 1
- **Sommiers** : 1
- **Menuiserie** : 1
- **Ameublement** : 1
- **Cuisines** : 1
- **Dressings** : 1
- **Vitrerie** : 1
- **Menuiserie Aluminium** : 1

### Produits Featured
- Matelas Confort Premium ✅
- Matelas Mémoire de Forme Luxe ✅
- Bibliothèque sur Mesure ✅
- Table à Manger Design ✅
- Cuisine Équipée Premium ✅
- Vitrage Double Sécurit ✅

### Fourchette de Prix
- **Min** : 89 FCFA (Oreiller Ergonomique)
- **Max** : 8,500 FCFA (Cuisine Équipée Premium)

---

## 🐛 Problèmes Courants

### Problème: "Chargement..." infini

**Causes possibles :**
1. Les produits n'ont pas été initialisés
2. Le serveur Edge Function n'est pas déployé
3. Problème de connexion réseau

**Solution :**
```javascript
// Vérifier l'état du serveur
fetch('https://{projectId}.supabase.co/functions/v1/make-server-4a2f605a/health')
  .then(r => r.json())
  .then(console.log);

// Si erreur, redéployer l'Edge Function dans Supabase Dashboard
```

---

### Problème: Erreur "Failed to fetch products"

**Causes possibles :**
1. `projectId` ou `publicAnonKey` incorrects
2. CORS bloqué
3. Route backend manquante

**Solution :**
1. Vérifier `/utils/supabase/info.tsx`
2. Vérifier les logs Supabase
3. Redéployer l'Edge Function

---

### Problème: Aucun produit affiché

**Solution :**
```javascript
// Exécuter l'initialisation
// (Dans la console du navigateur)
import { projectId, publicAnonKey } from './utils/supabase/info';

fetch(`https://${projectId}.supabase.co/functions/v1/make-server-ead4d8e2/init-products`, {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${publicAnonKey}`
  }
})
.then(r => r.json())
.then(console.log);
```

---

### Problème: Prix incorrects ou en €

**Solution :**
1. Vérifier que les prix sont en centimes FCFA (489000 = 489 FCFA)
2. Vérifier la conversion dans AllProductsPage :
   ```typescript
   price: `${(product.price / 1000).toLocaleString('fr-FR')} FCFA`
   ```

---

### Problème: Filtres ne fonctionnent pas

**Causes possibles :**
1. Les champs `business`, `category` ne correspondent pas
2. Les valeurs de filtres sont incorrectes

**Solution :**
1. Vérifier que les produits ont bien les champs `business` et `category`
2. Vérifier les valeurs dans ProductControls et FilterSidebar

---

## 🎯 Résultat Attendu

Après ces tests, vous devriez avoir :

✅ **AllProductsPage 100% fonctionnel** avec données Supabase  
✅ **10 produits affichés** (4 FIMA Couchage, 4 FIMA Design, 2 UNIVERS GLASS)  
✅ **Filtres par métier** opérationnels  
✅ **Filtres par catégorie** opérationnels  
✅ **Filtres avancés** (fermeté, matériau, prix) fonctionnels  
✅ **Recherche full-text** fonctionnelle  
✅ **Tri par prix/nom** fonctionnel  
✅ **Prix en FCFA** correctement affichés  
✅ **États loading/error** gérés correctement  
✅ **Pas d'erreurs** dans la console  

---

**Si tous les tests passent** : ✅ Migration Products réussie !

**Si des problèmes** : Consultez `/docs/PRODUCTS_MIGRATION_COMPLETE.md` pour plus de détails.

---

**Créé le :** 7 octobre 2025  
**Version :** 1.0.0
