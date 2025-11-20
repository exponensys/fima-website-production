# 🧪 Guide de Test - Testimonials Supabase

## ⚡ Test Rapide (2 minutes)

### Étape 1: Initialiser les données de démo

Ouvrez la console du navigateur (F12) et exécutez :

```javascript
// Importer les infos Supabase
import { projectId, publicAnonKey } from './utils/supabase/info';

// Initialiser les testimonials
fetch(`https://${projectId}.supabase.co/functions/v1/make-server-ead4d8e2/init-testimonials`, {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${publicAnonKey}`
  }
})
.then(r => r.json())
.then(result => {
  if (result.success) {
    console.log('✅ Testimonials initialisés:', result.data);
    alert('✅ 4 testimonials créés avec succès ! Rechargez la page.');
  } else {
    console.error('❌ Erreur:', result.error);
  }
});
```

**Ou via curl :**

```bash
curl -X POST \
  https://{VOTRE_PROJECT_ID}.supabase.co/functions/v1/make-server-ead4d8e2/init-testimonials \
  -H "Authorization: Bearer {VOTRE_PUBLIC_ANON_KEY}"
```

---

### Étape 2: Rafraîchir la page

Rechargez la page d'accueil (F5)

---

### Étape 3: Vérifier ProjectWithFimaSection

Descendez jusqu'à la section "Votre projet avec FIMA"

**Vous devriez voir :**
- ✅ Carousel de testimonials clients avec navigation
- ✅ Photo du client (ronde)
- ✅ Nom, entreprise, localisation
- ✅ Projet associé
- ✅ Citation complète du client
- ✅ 5 étoiles de notation (rating)
- ✅ 3-4 testimonials "featured" dans la navigation

---

### Étape 4: Tester la navigation

Cliquez sur les mini-cartes de testimonials (côté droit sur desktop) :
- ✅ Le testimonial actif change
- ✅ La citation change
- ✅ Le style visuel change (carte active surlignée)
- ✅ Animation fluide

---

### Étape 5: Tester le multilingue

1. Cliquez sur le sélecteur de langue (EN/FR) dans le header
2. Changez de langue
3. Les citations des testimonials doivent changer de langue

---

## 🔍 Tests Détaillés

### Test 1: Vérifier les données dans Supabase

```javascript
// Dans la console du navigateur
import { projectId, publicAnonKey } from './utils/supabase/info';

fetch(`https://${projectId}.supabase.co/functions/v1/make-server-ead4d8e2/testimonials`, {
  headers: {
    'Authorization': `Bearer ${publicAnonKey}`
  }
})
.then(r => r.json())
.then(result => {
  console.log('Testimonials récupérés:', result.data);
  console.log('Nombre de testimonials:', result.data.length);
});
```

**Résultat attendu :**
```json
{
  "success": true,
  "data": [
    {
      "id": "550e8400-...",
      "clientName": "Catherine Moreau",
      "clientCompany": "Hôtel des Oliviers",
      "clientLocation": "Dakar, Sénégal",
      "testimonialFr": "FIMA a transformé notre établissement...",
      "testimonialEn": "FIMA transformed our establishment...",
      "rating": 5,
      "featured": true,
      "published": true,
      ...
    },
    ...
  ]
}
```

---

### Test 2: Tester le filtrage par featured

```javascript
fetch(`https://${projectId}.supabase.co/functions/v1/make-server-ead4d8e2/testimonials?featured=true`, {
  headers: {
    'Authorization': `Bearer ${publicAnonKey}`
  }
})
.then(r => r.json())
.then(result => {
  console.log('Testimonials featured:', result.data);
  console.log('Nombre:', result.data.length); // Devrait être 3
});
```

---

### Test 3: Tester le filtrage par catégorie

```javascript
fetch(`https://${projectId}.supabase.co/functions/v1/make-server-ead4d8e2/testimonials?category=Hôtellerie`, {
  headers: {
    'Authorization': `Bearer ${publicAnonKey}`
  }
})
.then(r => r.json())
.then(result => {
  console.log('Testimonials Hôtellerie:', result.data);
  console.log('Nombre:', result.data.length); // Devrait être 1
});
```

---

## ✅ Checklist de Test

### Interface Utilisateur
- [ ] La section "Votre projet avec FIMA" s'affiche
- [ ] Carousel de testimonials visible
- [ ] Photos des clients se chargent correctement
- [ ] Noms, entreprises, localisations affichés
- [ ] Citations complètes visibles
- [ ] 5 étoiles de notation visibles
- [ ] Navigation entre testimonials (mini-cartes) fonctionne

### Fonctionnalités
- [ ] Clic sur mini-carte change le testimonial actif
- [ ] Animation fluide lors du changement
- [ ] Carte active visuellement différenciée
- [ ] Changement de langue change les citations
- [ ] États loading affichés pendant le chargement
- [ ] Pas d'erreur en cas de problème de connexion

### Multilingue
- [ ] Changer en anglais change les citations
- [ ] Changer en français restaure les citations françaises
- [ ] Les noms et entreprises restent identiques (non traduits)

### États Loading/Error
- [ ] État de chargement s'affiche (animation skeleton)
- [ ] Si erreur, message d'erreur affiché
- [ ] Pas d'erreur dans la console

### Mobile
- [ ] Navigation entre testimonials fonctionne sur mobile
- [ ] Carousel responsive (vertical sur mobile)
- [ ] Photos et textes lisibles sur petit écran

---

## 📊 Données Attendues

### Testimonial 1
- **Client**: Catherine Moreau
- **Poste**: Directrice Générale
- **Entreprise**: Hôtel des Oliviers
- **Location**: Dakar, Sénégal
- **Projet**: Rénovation complète - 85 chambres
- **Catégorie**: Hôtellerie
- **Rating**: ⭐⭐⭐⭐⭐ (5/5)
- **Featured**: ✅ Oui

### Testimonial 2
- **Client**: Marc Dubois
- **Poste**: Directeur d'établissement
- **Entreprise**: Résidence Les Jardins
- **Location**: Abidjan, Côte d'Ivoire
- **Projet**: Aménagement EHPAD - 120 chambres
- **Catégorie**: Santé
- **Rating**: ⭐⭐⭐⭐⭐ (5/5)
- **Featured**: ✅ Oui

### Testimonial 3
- **Client**: Sophie Lemaire
- **Poste**: DRH
- **Entreprise**: TechCorp Afrique
- **Location**: Lomé, Togo
- **Projet**: Open space - 200 postes de travail
- **Catégorie**: Bureaux
- **Rating**: ⭐⭐⭐⭐⭐ (5/5)
- **Featured**: ✅ Oui

### Testimonial 4
- **Client**: Jean-Claude Kouassi
- **Poste**: Gérant
- **Entreprise**: Restaurant Le Palmier
- **Location**: Cotonou, Bénin
- **Projet**: Aménagement restaurant - Menuiserie sur mesure
- **Catégorie**: Restauration
- **Rating**: ⭐⭐⭐⭐⭐ (5/5)
- **Featured**: ❌ Non (ne s'affiche pas dans le carousel)

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

---

### Problème: Erreur "Failed to fetch testimonials"

**Causes possibles :**
1. `projectId` ou `publicAnonKey` incorrects
2. CORS bloqué
3. Route backend manquante

**Solution :**
1. Vérifier `/utils/supabase/info.tsx`
2. Vérifier les logs Supabase
3. Redéployer l'Edge Function

---

### Problème: Aucun testimonial affiché

**Solution :**
```javascript
// Nettoyer et réinitialiser
// (Nécessite authentification - à faire dans l'admin)
```

---

### Problème: Testimonials affichés mais pas de navigation

**Causes possibles :**
1. Moins de 2 testimonials featured
2. Problème de state React

**Solution :**
1. Vérifier qu'au moins 3 testimonials ont `featured: true`
2. Vérifier la console pour erreurs React

---

## 🎯 Résultat Attendu

Après ces tests, vous devriez avoir :

✅ **ProjectWithFimaSection 100% fonctionnel** avec données Supabase  
✅ **4 testimonials affichés** (3 featured dans carousel)  
✅ **Navigation entre testimonials** opérationnelle  
✅ **Multilingue FR/EN** fonctionnel  
✅ **États loading/error** gérés correctement  
✅ **Pas d'erreurs** dans la console  

---

## 📸 Capture d'Écran Attendue

```
┌─────────────────────────────────────────────────────────────────┐
│                   Votre projet avec FIMA                        │
│        Depuis 1985, nous accompagnons les professionnels        │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌─────────────────────────────────────┬──────────────────────┐│
│  │ 🖼️ Photo                            │  ┌────────────────┐ ││
│  │                                      │  │ 🖼️ Testimonial 1│ ││
│  │ Catherine Moreau                     │  └────────────────┘ ││
│  │ Hôtel des Oliviers                   │  ┌────────────────┐ ││
│  │ Dakar, Sénégal • Rénovation...      │  │ 🖼️ Testimonial 2│ ││
│  │                                      │  └────────────────┘ ││
│  │ "FIMA a transformé notre...         │  ┌────────────────┐ ││
│  │  établissement..."                   │  │ 🖼️ Testimonial 3│ ││
│  │                                      │  └────────────────┘ ││
│  │ ⭐⭐⭐⭐⭐                                │                      ││
│  └─────────────────────────────────────┴──────────────────────┘│
└─────────────────────────────────────────────────────────────────┘
```

---

**Si tous les tests passent** : ✅ Migration Testimonials réussie !

**Si des problèmes** : Consultez `/docs/TESTIMONIALS_MIGRATION_COMPLETE.md` pour plus de détails.

---

**Créé le :** 7 octobre 2025  
**Version :** 1.0.0
