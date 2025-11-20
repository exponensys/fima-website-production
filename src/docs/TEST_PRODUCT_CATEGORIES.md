# 🧪 Guide de Test - Catégories de Produits

**Objectif**: Tester la migration complète des catégories de produits vers Supabase

---

## 📋 Prérequis

1. ✅ Serveur Supabase redéployé avec les routes API
2. ✅ Accès au CMS (`/cms` dans l'application)
3. ✅ Connexion internet active

---

## 🎯 Tests étape par étape

### 1️⃣ Test de l'interface CMS

#### Étape 1: Accéder à la page Catégories
```
1. Ouvrir l'application
2. Naviguer vers /cms
3. Se connecter (si nécessaire)
4. Cliquer sur "Catégories" dans le menu latéral
```

**Résultat attendu**:
- ✅ Page "Catégories de produits" s'affiche
- ✅ Trois onglets visibles: FIMA Couchage, FIMA Design, Univers Glass
- ✅ Compteur "X catégories" visible en haut

#### Étape 2: Initialiser les données par défaut
```
1. Cliquer sur le bouton "Réinitialiser"
2. Attendre la confirmation
```

**Résultat attendu**:
- ✅ Toast "Catégories de produits initialisées avec succès"
- ✅ Compteur affiche "15 catégories"
- ✅ Onglet FIMA Couchage: 5 catégories
- ✅ Onglet FIMA Design: 5 catégories
- ✅ Onglet Univers Glass: 5 catégories

**Vérification visuelle**:
```
FIMA Couchage (vert #B5C233):
- 🛏️ Matelas
- 🏠 Sommiers
- 💤 Oreillers
- 🌿 Linge de lit
- ✨ Accessoires

FIMA Design (gris #6E6E6E):
- 🪵 Menuiserie
- 🪑 Ameublement
- 🍳 Cuisines
- 👔 Dressings
- 📐 Aménagements sur mesure

Univers Glass (bleu #0EA5E9):
- 🪟 Vitrerie
- 🔩 Menuiserie Aluminium
- 🏠 Fenêtres
- 🚪 Portes
- 🧱 Cloisons
```

---

### 2️⃣ Test de création de catégorie

#### Étape 1: Ouvrir le formulaire
```
1. Cliquer sur "Nouvelle catégorie"
```

**Résultat attendu**:
- ✅ Formulaire de création s'affiche
- ✅ Tous les champs sont vides (sauf icône = 📦)
- ✅ Métier par défaut = FIMA Couchage

#### Étape 2: Remplir le formulaire
```
Nom: Couettes
Description: Couettes chaudes et légères
Métier: FIMA Couchage
Nombre: 30 modèles
Icône: 🛌
```

**Résultat attendu**:
- ✅ La clé "couettes" est générée automatiquement
- ✅ Tous les champs sont remplis

#### Étape 3: Sauvegarder
```
1. Cliquer sur "Enregistrer"
```

**Résultat attendu**:
- ✅ Toast "Catégorie créée avec succès"
- ✅ Formulaire se ferme
- ✅ Nouvelle catégorie "Couettes" visible dans la liste FIMA Couchage
- ✅ Compteur FIMA Couchage passe à 6

---

### 3️⃣ Test de modification de catégorie

#### Étape 1: Modifier une catégorie
```
1. Dans l'onglet FIMA Design
2. Cliquer sur l'icône Edit (crayon) de "Menuiserie"
```

**Résultat attendu**:
- ✅ Formulaire de modification s'affiche
- ✅ Champs pré-remplis avec les données existantes

#### Étape 2: Modifier les données
```
Nom: Menuiserie Premium
Description: Bois massif, aggloméré, MDF de qualité supérieure
Nombre: 75+ références
```

#### Étape 3: Sauvegarder
```
1. Cliquer sur "Enregistrer"
```

**Résultat attendu**:
- ✅ Toast "Catégorie mise à jour avec succès"
- ✅ Formulaire se ferme
- ✅ Modifications visibles dans la liste
- ✅ Nom changé en "Menuiserie Premium"

---

### 4️⃣ Test de suppression de catégorie

#### Étape 1: Supprimer la catégorie créée
```
1. Dans l'onglet FIMA Couchage
2. Cliquer sur l'icône Supprimer (poubelle) de "Couettes"
3. Confirmer la suppression
```

**Résultat attendu**:
- ✅ Popup de confirmation apparaît
- ✅ Toast "Catégorie supprimée avec succès"
- ✅ Catégorie disparaît de la liste
- ✅ Compteur FIMA Couchage revient à 5

---

### 5️⃣ Test de navigation par onglets

#### Étape 1: Tester tous les onglets
```
1. Cliquer sur "FIMA Couchage"
2. Cliquer sur "FIMA Design"
3. Cliquer sur "Univers Glass"
```

**Résultat attendu pour chaque onglet**:
- ✅ Bordure colorée sous l'onglet actif
- ✅ Couleur appropriée (vert/gris/bleu)
- ✅ Liste des catégories du métier correspondant
- ✅ Compteur correct de catégories

---

### 6️⃣ Test du hook React

#### Créer un composant de test
```typescript
// Dans /components/TestProductCategories.tsx
import { useProductCategories } from '../hooks/useProductCategories';

export function TestProductCategories() {
  const { categories, loading, error } = useProductCategories();
  
  console.log('📊 Test Categories:', {
    loading,
    error,
    categoriesKeys: Object.keys(categories),
    fimaCouchageCount: Array.isArray(categories) ? 0 : categories['fima-couchage']?.length,
    fimaDesignCount: Array.isArray(categories) ? 0 : categories['fima-design']?.length,
    universGlassCount: Array.isArray(categories) ? 0 : categories['univers-glass']?.length
  });
  
  if (loading) return <div>Chargement des catégories...</div>;
  if (error) return <div>Erreur: {error}</div>;
  
  return (
    <div className="p-8">
      <h2 className="text-2xl mb-4">Test Hook Categories</h2>
      
      <div className="grid grid-cols-3 gap-4">
        <div>
          <h3 className="font-bold mb-2">FIMA Couchage ({categories['fima-couchage']?.length || 0})</h3>
          {!Array.isArray(categories) && categories['fima-couchage']?.map(cat => (
            <div key={cat.key} className="mb-2">
              <span>{cat.icon}</span> {cat.name}
            </div>
          ))}
        </div>
        
        <div>
          <h3 className="font-bold mb-2">FIMA Design ({categories['fima-design']?.length || 0})</h3>
          {!Array.isArray(categories) && categories['fima-design']?.map(cat => (
            <div key={cat.key} className="mb-2">
              <span>{cat.icon}</span> {cat.name}
            </div>
          ))}
        </div>
        
        <div>
          <h3 className="font-bold mb-2">Univers Glass ({categories['univers-glass']?.length || 0})</h3>
          {!Array.isArray(categories) && categories['univers-glass']?.map(cat => (
            <div key={cat.key} className="mb-2">
              <span>{cat.icon}</span> {cat.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
```

#### Ajouter au site
```typescript
// Dans App.tsx, ajouter temporairement:
import { TestProductCategories } from './components/TestProductCategories';

// Dans la vue home, ajouter:
<TestProductCategories />
```

**Résultat attendu dans la console**:
```javascript
📊 Test Categories: {
  loading: false,
  error: null,
  categoriesKeys: ["fima-couchage", "fima-design", "univers-glass"],
  fimaCouchageCount: 5,
  fimaDesignCount: 5,
  universGlassCount: 5
}
```

**Résultat attendu visuellement**:
- ✅ Trois colonnes affichées
- ✅ Catégories correctes dans chaque colonne
- ✅ Icônes emoji visibles
- ✅ Compteurs corrects

---

### 7️⃣ Test avec filtrage par métier

```typescript
// Test du hook avec filtrage
function TestFilteredCategories() {
  const couchage = useProductCategories('fima-couchage');
  const design = useProductCategories('fima-design');
  const glass = useProductCategories('univers-glass');
  
  console.log('📊 Filtered Test:', {
    couchage: Array.isArray(couchage.categories) ? couchage.categories.length : 0,
    design: Array.isArray(design.categories) ? design.categories.length : 0,
    glass: Array.isArray(glass.categories) ? glass.categories.length : 0
  });
  
  return <div>Check console for filtered results</div>;
}
```

**Résultat attendu dans la console**:
```javascript
📊 Filtered Test: {
  couchage: 5,
  design: 5,
  glass: 5
}
```

---

### 8️⃣ Test de l'API directement

#### Test GET - Toutes les catégories
```bash
curl "https://YOUR_PROJECT_ID.supabase.co/functions/v1/make-server-4a2f605a/product-categories" \
  -H "Authorization: Bearer YOUR_PUBLIC_ANON_KEY"
```

**Résultat attendu**:
```json
{
  "success": true,
  "data": {
    "fima-couchage": [...],
    "fima-design": [...],
    "univers-glass": [...]
  }
}
```

#### Test GET - Catégories filtrées
```bash
curl "https://YOUR_PROJECT_ID.supabase.co/functions/v1/make-server-4a2f605a/product-categories?business=fima-couchage" \
  -H "Authorization: Bearer YOUR_PUBLIC_ANON_KEY"
```

**Résultat attendu**:
```json
{
  "success": true,
  "data": [
    {
      "key": "matelas",
      "name": "Matelas",
      "icon": "🛏️",
      "description": "Ressorts, mousse, latex naturel",
      "count": "45 modèles",
      "business": "fima-couchage"
    }
    // ... 4 autres catégories
  ]
}
```

---

## ✅ Checklist de validation

### Interface CMS
- [ ] Page catégories accessible
- [ ] Bouton "Réinitialiser" fonctionne
- [ ] 15 catégories par défaut créées
- [ ] Création de catégorie fonctionne
- [ ] Modification de catégorie fonctionne
- [ ] Suppression de catégorie fonctionne
- [ ] Navigation par onglets fonctionne
- [ ] Couleurs d'onglets correctes
- [ ] Compteurs de catégories corrects
- [ ] Génération automatique des slugs fonctionne

### Hook React
- [ ] Hook charge les données depuis Supabase
- [ ] Hook retourne toutes les catégories sans filtre
- [ ] Hook filtre correctement par métier
- [ ] Fallback sur données locales en cas d'erreur
- [ ] États loading/error gérés correctement

### API
- [ ] Route GET retourne toutes les catégories
- [ ] Route GET filtre correctement par métier
- [ ] Route POST sauvegarde les catégories
- [ ] Authentification requise pour POST

---

## 🐛 Problèmes courants et solutions

### Problème: "Aucune catégorie" dans le CMS
**Solution**:
1. Cliquer sur "Réinitialiser"
2. Vérifier que le serveur Supabase est déployé
3. Vérifier la console pour les erreurs API

### Problème: Hook retourne des données vides
**Solution**:
1. Vérifier que les données sont initialisées dans le CMS
2. Vérifier la console pour les logs `📊 useProductCategories`
3. Vérifier les credentials Supabase dans `/utils/supabase/info.tsx`

### Problème: Erreur 401 lors de la sauvegarde
**Solution**:
1. L'utilisateur doit être authentifié dans le CMS
2. Le token d'accès doit être valide
3. Vérifier que la route POST nécessite bien l'authentification

### Problème: Clé en double lors de la création
**Solution**:
1. Modifier le nom pour générer une clé unique
2. Ou modifier manuellement la clé dans le formulaire

---

## 📊 Résultats attendus - Récapitulatif

Après tous les tests, vous devriez avoir:

- **15 catégories** au total dans Supabase
- **5 catégories** par métier
- **CMS fonctionnel** avec CRUD complet
- **Hook React** qui charge les données
- **API** qui répond correctement
- **Aucune erreur** dans la console

---

## 🎉 Validation finale

Si tous les tests passent, la migration des catégories de produits est **COMPLÈTE** et **FONCTIONNELLE** ! ✅

Vous pouvez maintenant:
1. Utiliser le hook dans vos composants
2. Gérer les catégories via le CMS
3. Construire des pages de catégories dynamiques
4. Lier les produits aux catégories

---

**Bon testing ! 🚀**
