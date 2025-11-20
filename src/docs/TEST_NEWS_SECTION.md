# 🧪 Guide de Test - NewsSection Supabase

## ⚡ Test Rapide (2 minutes)

### Étape 1: Initialiser les données de démo

Ouvrez la console du navigateur (F12) et exécutez :

```javascript
// Importer les infos Supabase
import { projectId, publicAnonKey } from './utils/supabase/info';

// Initialiser les blogs
fetch(`https://${projectId}.supabase.co/functions/v1/make-server-ead4d8e2/init-blogs`, {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${publicAnonKey}`
  }
})
.then(r => r.json())
.then(result => {
  if (result.success) {
    console.log('✅ Blogs initialisés:', result.data);
    alert('✅ 4 blogs créés avec succès ! Rechargez la page.');
  } else {
    console.error('❌ Erreur:', result.error);
  }
});
```

**Ou via curl :**

```bash
curl -X POST \
  https://{VOTRE_PROJECT_ID}.supabase.co/functions/v1/make-server-ead4d8e2/init-blogs \
  -H "Authorization: Bearer {VOTRE_PUBLIC_ANON_KEY}"
```

### Étape 2: Rafraîchir la page

Rechargez la page d'accueil (F5)

### Étape 3: Vérifier NewsSection

Descendez jusqu'à la section "Actualités & Blog"

**Vous devriez voir :**
- ✅ 4 articles avec images
- ✅ Filtres par catégorie (Tous, Tendances, Innovation, Projets, Actualités)
- ✅ Auteurs, dates, temps de lecture
- ✅ Compteur de vues
- ✅ Bouton "Voir tous les articles"

### Étape 4: Tester les filtres

Cliquez sur les filtres :
- ✅ **Tendances** → 1 article affiché
- ✅ **Innovation** → 1 article affiché
- ✅ **Projets** → 1 article affiché
- ✅ **Actualités** → 1 article affiché
- ✅ **Tous** → 4 articles affichés

### Étape 5: Tester le multilingue

1. Cliquez sur le sélecteur de langue (EN/FR) dans le header
2. Changez de langue
3. Les titres et résumés des articles doivent changer

---

## 🔍 Tests Détaillés

### Test 1: Vérifier les données dans Supabase

```javascript
// Dans la console du navigateur
import { projectId, publicAnonKey } from './utils/supabase/info';

fetch(`https://${projectId}.supabase.co/functions/v1/make-server-ead4d8e2/blogs`, {
  headers: {
    'Authorization': `Bearer ${publicAnonKey}`
  }
})
.then(r => r.json())
.then(result => {
  console.log('Blogs récupérés:', result.data);
  console.log('Nombre de blogs:', result.data.length);
});
```

**Résultat attendu :**
```json
{
  "success": true,
  "data": [
    {
      "id": "550e8400-...",
      "titleFr": "Les tendances literie 2025...",
      "titleEn": "2025 Bedding Trends...",
      "category": "tendances",
      "published": true,
      "views": 245,
      ...
    },
    ...
  ]
}
```

### Test 2: Tester un blog spécifique

```javascript
fetch(`https://${projectId}.supabase.co/functions/v1/make-server-ead4d8e2/blogs/tendances-literie-2025`, {
  headers: {
    'Authorization': `Bearer ${publicAnonKey}`
  }
})
.then(r => r.json())
.then(result => {
  console.log('Blog récupéré:', result.data);
});
```

### Test 3: Tester le filtrage par catégorie

```javascript
// Récupérer uniquement les articles "innovation"
fetch(`https://${projectId}.supabase.co/functions/v1/make-server-ead4d8e2/blogs?category=innovation`, {
  headers: {
    'Authorization': `Bearer ${publicAnonKey}`
  }
})
.then(r => r.json())
.then(result => {
  console.log('Articles Innovation:', result.data);
  console.log('Nombre:', result.data.length); // Devrait être 1
});
```

---

## ✅ Checklist de Test

### Interface Utilisateur
- [ ] La section "Actualités & Blog" s'affiche correctement
- [ ] Les 4 articles ont des images qui se chargent
- [ ] Les titres sont visibles et lisibles
- [ ] Les résumés s'affichent correctement
- [ ] Les auteurs, dates et temps de lecture sont affichés
- [ ] Les compteurs de vues fonctionnent
- [ ] Les badges de catégorie s'affichent

### Filtres
- [ ] Le filtre "Tous" affiche 4 articles
- [ ] Le filtre "Tendances" affiche 1 article
- [ ] Le filtre "Innovation" affiche 1 article
- [ ] Le filtre "Projets" affiche 1 article
- [ ] Le filtre "Actualités" affiche 1 article
- [ ] Le compteur "X articles dans la catégorie Y" est correct

### Multilingue
- [ ] Changer en anglais change les titres
- [ ] Changer en anglais change les résumés
- [ ] Changer en français restaure les textes français

### États Loading/Error
- [ ] État de chargement s'affiche (animation skeleton)
- [ ] Si erreur, message d'erreur affiché
- [ ] Pas d'erreur dans la console

### Interactions
- [ ] Cliquer sur un article ouvre le détail (si implémenté)
- [ ] Bouton "Voir tous les articles" fonctionne
- [ ] Bouton "Voir plus d'articles" affiche tous les articles
- [ ] Survol des articles change le style (hover)

---

## 🐛 Problèmes Courants

### Problème: "Chargement..." infini

**Causes possibles :**
1. Les données de démo n'ont pas été initialisées
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

### Problème: Erreur "Failed to fetch blogs"

**Causes possibles :**
1. `projectId` ou `publicAnonKey` incorrects
2. CORS bloqué
3. Route backend manquante

**Solution :**
1. Vérifier `/utils/supabase/info.tsx`
2. Vérifier les logs Supabase
3. Redéployer l'Edge Function

### Problème: Articles en double ou vides

**Solution :**
```javascript
// Nettoyer les blogs
// (Nécessite authentification - à faire dans l'admin)
```

---

## 📊 Données Attendues

### Blog 1
- **Titre FR**: "Les tendances literie 2025 : confort et écologie"
- **Titre EN**: "2025 Bedding Trends: Comfort and Ecology"
- **Catégorie**: tendances
- **Auteur**: Marie Dubois
- **Temps de lecture**: 5 min
- **Vues**: 245

### Blog 2
- **Titre FR**: "FIMA Design lance sa nouvelle collection éco-responsable"
- **Titre EN**: "FIMA Design Launches Its New Eco-Responsible Collection"
- **Catégorie**: innovation
- **Auteur**: Sophie Laurent
- **Temps de lecture**: 3 min
- **Vues**: 189

### Blog 3
- **Titre FR**: "Projet hôtelier : 200 chambres équipées en Provence"
- **Titre EN**: "Hotel Project: 200 Rooms Equipped in Provence"
- **Catégorie**: projets
- **Auteur**: Jean-Pierre Martin
- **Temps de lecture**: 7 min
- **Vues**: 312

### Blog 4
- **Titre FR**: "FIMA reçoit le label « Entreprise du Patrimoine Vivant »"
- **Titre EN**: "FIMA Receives the 'Living Heritage Company' Label"
- **Catégorie**: actualites
- **Auteur**: Direction FIMA
- **Temps de lecture**: 4 min
- **Vues**: 156

---

## 🎯 Résultat Attendu

Après ces tests, vous devriez avoir :

✅ **NewsSection 100% fonctionnel** avec données Supabase  
✅ **4 blogs affichés** avec images et métadonnées  
✅ **Filtres par catégorie** opérationnels  
✅ **Multilingue FR/EN** fonctionnel  
✅ **États loading/error** gérés correctement  
✅ **Pas d'erreurs** dans la console  

---

**Si tous les tests passent** : ✅ Migration NewsSection réussie !

**Si des problèmes** : Consultez `/docs/NEWS_SECTION_MIGRATION_COMPLETE.md` pour plus de détails.

---

**Créé le :** 7 octobre 2025  
**Version :** 1.0.0
