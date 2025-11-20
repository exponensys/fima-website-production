# 🧪 Guide de Test - Projects/Solutions Supabase

## ⚡ Test Rapide (2 minutes)

### Étape 1: Initialiser les projets de démo

Ouvrez la console du navigateur (F12) et exécutez :

```javascript
// Importer les infos Supabase
import { projectId, publicAnonKey } from './utils/supabase/info';

// Initialiser les projets
fetch(`https://${projectId}.supabase.co/functions/v1/make-server-ead4d8e2/init-projects`, {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${publicAnonKey}`
  }
})
.then(r => r.json())
.then(result => {
  if (result.success) {
    console.log('✅ Projets initialisés:', result.data);
    alert(`✅ ${result.data.projects} projets créés avec succès ! Rechargez la page.`);
  } else {
    console.error('❌ Erreur:', result.error);
  }
});
```

**Ou via curl :**

```bash
curl -X POST \
  https://{VOTRE_PROJECT_ID}.supabase.co/functions/v1/make-server-ead4d8e2/init-projects \
  -H "Authorization: Bearer {VOTRE_PUBLIC_ANON_KEY}"
```

---

### Étape 2: Rafraîchir la page

Rechargez la page d'accueil (F5)

---

### Étape 3: Naviguer vers "Nos Projets & Réalisations"

Cliquez sur "Nos Projets" dans le menu ou la section ProjectWithFimaSection

**Vous devriez voir :**
- ✅ 8 projets affichés avec images
- ✅ Statistiques en haut : "8 Projets", "10.5Mds FCFA", "55,250 m²", "2 Prix"
- ✅ Indicateur de développement "Projets chargés dynamiquement depuis Supabase (8 total, 8 affichés)"
- ✅ Filtres par catégorie avec compteurs dynamiques
- ✅ Barre de recherche fonctionnelle
- ✅ 3 projets avec badge "Featured"

---

### Étape 4: Tester les filtres par catégorie

#### 4.1 Tous les projets
- Catégorie **"Tous les projets"** sélectionnée par défaut → 8 projets

#### 4.2 Résidentiel
- Cliquez sur **"Résidentiel 🏘️"** → Devrait afficher 3 projets :
  - Résidence Les Jardins de Cocody (Featured)
  - Résidence Le Vallon
  - Villa Prestige Bingerville

#### 4.3 Commercial
- Cliquez sur **"Commercial 🏢"** → Devrait afficher 2 projets :
  - Immeuble NSIA (Featured)
  - Centre Commercial Playce Marcory

#### 4.4 Hôtellerie
- Cliquez sur **"Hôtellerie 🏨"** → Devrait afficher 2 projets :
  - Hôtel Pullman Abidjan (Featured)
  - Hôtel Étoile du Sud

#### 4.5 Institutionnel
- Cliquez sur **"Institutionnel 🏛️"** → Devrait afficher 1 projet :
  - Ministère des Finances

---

### Étape 5: Tester la recherche

- Tapez **"Cocody"** → Devrait afficher 1 projet (Résidence Les Jardins de Cocody)
- Tapez **"Pullman"** → Devrait afficher 1 projet (Hôtel Pullman Abidjan)
- Tapez **"Plateau"** → Devrait afficher 3 projets (Hôtel Pullman, Immeuble NSIA, Ministère)
- Tapez **"NSIA"** → Devrait afficher 1 projet (Immeuble NSIA)
- Tapez **"villa"** → Devrait afficher 2 projets (Résidence Jardins + Villa Prestige)

---

## 🔍 Tests Détaillés

### Test 1: Vérifier les données dans Supabase

```javascript
// Dans la console du navigateur
import { projectId, publicAnonKey } from './utils/supabase/info';

fetch(`https://${projectId}.supabase.co/functions/v1/make-server-ead4d8e2/projects`, {
  headers: {
    'Authorization': `Bearer ${publicAnonKey}`
  }
})
.then(r => r.json())
.then(result => {
  console.log('Projets récupérés:', result.data);
  console.log('Nombre de projets:', result.data.length);
  
  // Détails par catégorie
  const byCategory = {
    residential: result.data.filter(p => p.category === 'residential').length,
    commercial: result.data.filter(p => p.category === 'commercial').length,
    hospitality: result.data.filter(p => p.category === 'hospitality').length,
    institutional: result.data.filter(p => p.category === 'institutional').length
  };
  console.log('Par catégorie:', byCategory);
  
  // Projets featured
  const featured = result.data.filter(p => p.featured);
  console.log('Featured:', featured.length, featured.map(p => p.title));
});
```

**Résultat attendu :**
```json
{
  "success": true,
  "data": [
    {
      "id": "550e8400-...",
      "title": "Résidence Les Jardins de Cocody",
      "slug": "residence-jardins-cocody",
      "category": "residential",
      "categoryName": "Résidentiel",
      "location": "Cocody, Abidjan",
      "year": "2024",
      "client": "Promoteur Excellence",
      "description": "Aménagement complet de 24 villas...",
      "budget": "2.5Mds FCFA",
      "featured": true,
      "published": true,
      ...
    },
    ...
  ]
}
```

---

### Test 2: Tester le filtrage par catégorie

```javascript
// Récupérer uniquement les projets résidentiels
fetch(`https://${projectId}.supabase.co/functions/v1/make-server-ead4d8e2/projects?category=residential`, {
  headers: {
    'Authorization': `Bearer ${publicAnonKey}`
  }
})
.then(r => r.json())
.then(result => {
  console.log('Projets Résidentiels:', result.data);
  console.log('Nombre:', result.data.length); // Devrait être 3
});
```

---

### Test 3: Tester le filtrage par featured

```javascript
// Récupérer uniquement les projets featured
fetch(`https://${projectId}.supabase.co/functions/v1/make-server-ead4d8e2/projects?featured=true`, {
  headers: {
    'Authorization': `Bearer ${publicAnonKey}`
  }
})
.then(r => r.json())
.then(result => {
  console.log('Projets Featured:', result.data);
  console.log('Nombre:', result.data.length); // Devrait être 3
  console.log('Titres:', result.data.map(p => p.title));
});
```

---

### Test 4: Récupérer un projet par slug

```javascript
// Récupérer le projet "Résidence Les Jardins de Cocody"
fetch(`https://${projectId}.supabase.co/functions/v1/make-server-ead4d8e2/projects/residence-jardins-cocody`, {
  headers: {
    'Authorization': `Bearer ${publicAnonKey}`
  }
})
.then(r => r.json())
.then(result => {
  console.log('Projet récupéré:', result.data);
  console.log('Détails complets disponibles:', result.data.longDescription ? 'Oui' : 'Non');
  console.log('Témoignage client:', result.data.testimonial ? 'Oui' : 'Non');
  console.log('Métriques:', result.data.metrics?.length || 0);
});
```

---

### Test 5: Limiter le nombre de résultats

```javascript
// Récupérer seulement les 3 premiers projets
fetch(`https://${projectId}.supabase.co/functions/v1/make-server-ead4d8e2/projects?limit=3`, {
  headers: {
    'Authorization': `Bearer ${publicAnonKey}`
  }
})
.then(r => r.json())
.then(result => {
  console.log('3 premiers projets:', result.data);
  console.log('Nombre:', result.data.length); // Devrait être 3
});
```

---

## ✅ Checklist de Test

### Interface Utilisateur
- [ ] La page "Nos Projets & Réalisations" s'affiche
- [ ] Les 8 projets sont affichés avec images
- [ ] Les statistiques en haut sont correctes (8 projets, 10.5Mds FCFA, etc.)
- [ ] L'indicateur Supabase s'affiche (8 total, X affichés)
- [ ] Les badges "Featured" s'affichent sur 3 projets

### Filtres par Catégorie
- [ ] Filtre "Tous les projets" affiche 8 projets
- [ ] Filtre "Résidentiel" affiche 3 projets
- [ ] Filtre "Commercial" affiche 2 projets
- [ ] Filtre "Hôtellerie" affiche 2 projets
- [ ] Filtre "Institutionnel" affiche 1 projet
- [ ] Les compteurs sont corrects (Résidentiel (3), Commercial (2), etc.)

### Recherche
- [ ] Recherche par titre fonctionne (ex: "Cocody")
- [ ] Recherche par lieu fonctionne (ex: "Plateau")
- [ ] Recherche par client fonctionne (ex: "Pullman")
- [ ] Recherche insensible à la casse
- [ ] Résultats de recherche corrects

### Statistiques
- [ ] Total projets = 8
- [ ] CA total = 10.5Mds FCFA
- [ ] Surface totale = 55,250 m²
- [ ] Prix = 2

### Projets Featured
- [ ] 3 projets avec badge Featured
- [ ] Résidence Les Jardins de Cocody est Featured
- [ ] Hôtel Pullman Abidjan est Featured
- [ ] Immeuble NSIA est Featured

### Détails des Projets
- [ ] Chaque projet affiche : titre, catégorie, lieu, année, client
- [ ] Chaque projet affiche : budget, surface
- [ ] Les business units s'affichent (FIMA Couchage, FIMA Design, UNIVERS GLASS)
- [ ] Les tags s'affichent correctement
- [ ] Les awards s'affichent pour les projets concernés

### États Loading/Error
- [ ] État de chargement s'affiche (spinner)
- [ ] Si erreur, message d'erreur affiché
- [ ] Pas d'erreur dans la console
- [ ] Indicateur de développement affiché

### Responsive
- [ ] Vue grille sur desktop
- [ ] Vue grille/liste sur tablette
- [ ] Vue grille/liste sur mobile
- [ ] Basculement vue grille/liste fonctionne

---

## 📊 Données Attendues

### Projets par Catégorie
- **Résidentiel** : 3 projets
- **Commercial** : 2 projets
- **Hôtellerie** : 2 projets
- **Institutionnel** : 1 projet

### Projets Featured
1. Résidence Les Jardins de Cocody (Résidentiel) ✅
2. Hôtel Pullman Abidjan (Hôtellerie) ✅
3. Immeuble NSIA (Commercial) ✅

### Récompenses
- Résidence Les Jardins de Cocody : "Prix Architecture 2024"
- Hôtel Pullman Abidjan : "Best Hotel Renovation 2023"

### Budgets (du plus petit au plus grand)
1. Villa Prestige Bingerville : 450M FCFA
2. Hôtel Étoile du Sud : 650M FCFA
3. Ministère des Finances : 800M FCFA
4. Résidence Le Vallon : 950M FCFA
5. Centre Commercial Playce Marcory : 1.2Mds FCFA
6. Hôtel Pullman Abidjan : 1.8Mds FCFA
7. Résidence Les Jardins de Cocody : 2.5Mds FCFA
8. Immeuble NSIA : 3.2Mds FCFA

### Business Units
- **3 métiers** : Résidence Les Jardins de Cocody, Hôtel Pullman, Villa Prestige
- **2 métiers** : Immeuble NSIA, Hôtel Étoile du Sud, Résidence Le Vallon, Centre Commercial Playce
- **1 métier** : Ministère des Finances

---

## 🐛 Problèmes Courants

### Problème: "Chargement..." infini

**Causes possibles :**
1. Les projets n'ont pas été initialisés
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

### Problème: Erreur "Failed to fetch projects"

**Causes possibles :**
1. `projectId` ou `publicAnonKey` incorrects
2. CORS bloqué
3. Route backend manquante

**Solution :**
1. Vérifier `/utils/supabase/info.tsx`
2. Vérifier les logs Supabase
3. Redéployer l'Edge Function

---

### Problème: Aucun projet affiché

**Solution :**
```javascript
// Exécuter l'initialisation
// (Dans la console du navigateur)
import { projectId, publicAnonKey } from './utils/supabase/info';

fetch(`https://${projectId}.supabase.co/functions/v1/make-server-ead4d8e2/init-projects`, {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${publicAnonKey}`
  }
})
.then(r => r.json())
.then(console.log);
```

---

### Problème: Compteurs incorrects

**Causes possibles :**
1. Les projets ne sont pas chargés
2. Le champ `category` est incorrect

**Solution :**
1. Vérifier que `allProjectsFromDB` contient bien les projets
2. Vérifier que chaque projet a un `category` valide
3. Vérifier la console pour les erreurs

---

### Problème: Filtres ne fonctionnent pas

**Causes possibles :**
1. Les champs `category` ne correspondent pas
2. Les valeurs de filtres sont incorrectes

**Solution :**
1. Vérifier que les projets ont bien le champ `category`
2. Vérifier les valeurs : 'residential', 'commercial', 'hospitality', 'institutional'

---

## 🎯 Résultat Attendu

Après ces tests, vous devriez avoir :

✅ **AllProjectsPage 100% fonctionnel** avec données Supabase  
✅ **8 projets affichés** (3 Résidentiel, 2 Commercial, 2 Hôtellerie, 1 Institutionnel)  
✅ **Filtres par catégorie** opérationnels avec compteurs dynamiques  
✅ **Recherche full-text** fonctionnelle  
✅ **Statistiques calculées** automatiquement  
✅ **3 projets Featured** bien identifiés  
✅ **États loading/error** gérés correctement  
✅ **Pas d'erreurs** dans la console  

---

**Si tous les tests passent** : ✅ Migration Projects réussie !

**Si des problèmes** : Consultez `/docs/PROJECTS_MIGRATION_COMPLETE.md` pour plus de détails.

---

**Créé le :** 7 octobre 2025  
**Version :** 1.0.0
