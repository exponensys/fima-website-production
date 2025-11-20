# 🧪 Guide de Test - Hero Slides Migration

## Date de création
7 octobre 2025

## Objectif
Tester la migration des slides du Hero depuis les données hardcodées vers Supabase avec support multilingue.

---

## 🎯 Prérequis

### 1. Initialisation des données
Les slides de démonstration doivent être initialisés avant les tests.

**Commande d'initialisation :**
```bash
curl -X POST https://{projectId}.supabase.co/functions/v1/make-server-98c6ec1c/api/init-hero-slides \
  -H "Authorization: Bearer {publicAnonKey}"
```

**Réponse attendue :**
```json
{
  "success": true,
  "message": "Default hero slides initialized successfully",
  "data": {
    "slides": 4
  }
}
```

---

## ✅ Tests Fonctionnels

### Test 1 : Récupération des slides (Français)
**Objectif :** Vérifier que les slides sont correctement récupérés en français.

**Requête :**
```bash
curl -X GET "https://{projectId}.supabase.co/functions/v1/make-server-98c6ec1c/api/hero-slides?locale=fr" \
  -H "Authorization: Bearer {publicAnonKey}"
```

**Résultat attendu :**
- ✅ Statut HTTP 200
- ✅ 4 slides retournés
- ✅ Chaque slide contient : `id`, `sort_order`, `background_image_url`, `translation`
- ✅ `translation` contient les textes en français
- ✅ Les slides sont triés par `sort_order`
- ✅ Tous les slides ont `is_active: true`

**Données attendues (extraits) :**
```json
{
  "success": true,
  "locale": "fr",
  "data": [
    {
      "id": "...",
      "sort_order": 1,
      "background_image_url": "...",
      "is_video": false,
      "slide_duration": 5000,
      "translation": {
        "title": "FIMA Couchage",
        "subtitle": "LITERIE PREMIUM",
        "description": "Matelas, sommiers, oreillers...",
        "cta_primary": "Découvrir nos produits",
        "badge": "100 NUITS D'ESSAI"
      }
    },
    // ... 3 autres slides
  ]
}
```

---

### Test 2 : Récupération des slides (Anglais)
**Objectif :** Vérifier le support multilingue.

**Requête :**
```bash
curl -X GET "https://{projectId}.supabase.co/functions/v1/make-server-98c6ec1c/api/hero-slides?locale=en" \
  -H "Authorization: Bearer {publicAnonKey}"
```

**Résultat attendu :**
- ✅ Statut HTTP 200
- ✅ 4 slides retournés
- ✅ `locale: "en"`
- ✅ `translation` contient les textes en anglais

**Données attendues (extraits) :**
```json
{
  "translation": {
    "title": "FIMA Bedding",
    "subtitle": "PREMIUM BEDDING",
    "description": "High-quality mattresses...",
    "cta_primary": "Discover our products",
    "badge": "100-NIGHT TRIAL"
  }
}
```

---

### Test 3 : Affichage dans le Hero (Frontend)
**Objectif :** Vérifier l'intégration frontend.

**Actions :**
1. Ouvrir l'application dans le navigateur
2. Observer le carrousel Hero sur la page d'accueil

**Résultat attendu :**
- ✅ 4 slides s'affichent dans le carrousel
- ✅ Slide 1 : "FIMA Couchage" avec background chambre
- ✅ Slide 2 : "FIMA Design" avec background cuisine
- ✅ Slide 3 : "UNIVERS GLASS" avec background immeuble en verre
- ✅ Slide 4 : Vidéo "Découvrez FIMA"
- ✅ Les slides défilent automatiquement
- ✅ Durée : 5 secondes par slide (sauf vidéo : 15 secondes)
- ✅ Navigation manuelle fonctionne (boutons prev/next)
- ✅ Pause automatique après interaction manuelle

---

### Test 4 : Support vidéo (Slide 4)
**Objectif :** Vérifier la lecture vidéo.

**Actions :**
1. Attendre que le slide 4 s'affiche
2. Observer la lecture de la vidéo

**Résultat attendu :**
- ✅ La vidéo démarre automatiquement
- ✅ Durée de lecture : 15 secondes
- ✅ La vidéo s'arrête après 15 secondes (pas de boucle)
- ✅ Le CTA "Voir notre histoire" s'affiche
- ✅ Cliquer sur le CTA redirige vers `/our-history`

---

### Test 5 : Actions CTA par slide
**Objectif :** Vérifier que chaque slide a l'action correcte.

**Actions :**
Cliquer sur le bouton CTA de chaque slide.

**Résultat attendu :**

| Slide | CTA | Action attendue |
|-------|-----|-----------------|
| Slide 1 (Couchage) | "Découvrir nos produits" | Scroll vers section produits avec filtre "matelas" |
| Slide 2 (Design) | "Découvrir nos produits" | Scroll vers section produits avec filtre "cuisines" |
| Slide 3 (Glass) | "Découvrir nos produits" | Scroll vers section produits avec filtre "fenetres" |
| Slide 4 (Vidéo) | "Voir notre histoire" | Navigation vers page "our-history" |

---

### Test 6 : Changement de langue
**Objectif :** Vérifier que les slides changent de langue dynamiquement.

**Actions :**
1. Observer les slides en français
2. Changer la langue vers l'anglais (si switcher disponible)
3. Observer les slides

**Résultat attendu :**
- ✅ Les titres/descriptions/CTA changent en anglais
- ✅ Les images restent identiques
- ✅ Pas de clignotement ou rechargement de page
- ✅ La navigation du carrousel continue normalement

---

### Test 7 : Fallback en cas d'erreur
**Objectif :** Vérifier le comportement en cas d'erreur API.

**Actions :**
1. Simuler une erreur API (débrancher le réseau ou modifier l'URL)
2. Recharger la page

**Résultat attendu :**
- ✅ Un slide par défaut s'affiche (FIMA Couchage)
- ✅ Pas de message d'erreur visible à l'utilisateur
- ✅ Le Hero reste fonctionnel
- ✅ Console : message d'erreur loggé (pour debug)

---

### Test 8 : Performance et chargement
**Objectif :** Vérifier les performances.

**Actions :**
1. Ouvrir DevTools > Network
2. Recharger la page
3. Observer la requête API hero-slides

**Résultat attendu :**
- ✅ Requête API complète en < 500ms
- ✅ Pas de flash de contenu (FOUC)
- ✅ Les images se chargent progressivement
- ✅ Pas de ralentissement lors du changement de slide

---

## 🔒 Tests de Sécurité

### Test 9 : Création de slide (non authentifié)
**Objectif :** Vérifier que les routes protégées nécessitent l'authentification.

**Requête :**
```bash
curl -X POST "https://{projectId}.supabase.co/functions/v1/make-server-98c6ec1c/api/hero-slides" \
  -H "Authorization: Bearer {publicAnonKey}" \
  -H "Content-Type: application/json" \
  -d '{
    "sort_order": 5,
    "background_image_url": "https://example.com/image.jpg",
    "is_video": false,
    "slide_duration": 5000,
    "is_active": true,
    "translations": {
      "fr": {
        "title": "Test",
        "subtitle": "Test",
        "description": "Test",
        "cta_primary": "Test",
        "badge": "Test"
      }
    }
  }'
```

**Résultat attendu :**
- ✅ Statut HTTP 401 (Unauthorized)
- ✅ Message : `"Unauthorized"`

---

### Test 10 : Mise à jour de slide (non authentifié)
**Requête :**
```bash
curl -X PUT "https://{projectId}.supabase.co/functions/v1/make-server-98c6ec1c/api/hero-slides/{slideId}" \
  -H "Authorization: Bearer {publicAnonKey}" \
  -H "Content-Type: application/json" \
  -d '{"is_active": false}'
```

**Résultat attendu :**
- ✅ Statut HTTP 401 (Unauthorized)

---

### Test 11 : Suppression de slide (non authentifié)
**Requête :**
```bash
curl -X DELETE "https://{projectId}.supabase.co/functions/v1/make-server-98c6ec1c/api/hero-slides/{slideId}" \
  -H "Authorization: Bearer {publicAnonKey}"
```

**Résultat attendu :**
- ✅ Statut HTTP 401 (Unauthorized)

---

## 📱 Tests Mobile

### Test 12 : Responsive sur mobile
**Objectif :** Vérifier l'affichage mobile.

**Actions :**
1. Ouvrir l'application sur un appareil mobile ou avec DevTools responsive
2. Observer le Hero

**Résultat attendu :**
- ✅ Les slides s'affichent correctement
- ✅ Les textes sont lisibles (pas trop petits)
- ✅ Les boutons CTA sont cliquables (taille suffisante)
- ✅ La navigation tactile fonctionne (swipe)
- ✅ La vidéo se lit correctement sur mobile
- ✅ Pas de débordement horizontal

---

## 🐛 Tests de Régression

### Test 13 : Navigation entre pages
**Objectif :** Vérifier que la navigation ne casse pas le Hero.

**Actions :**
1. Cliquer sur "Découvrir nos produits" (Slide 1)
2. Cliquer sur "Retour" ou naviguer vers Home
3. Observer le Hero

**Résultat attendu :**
- ✅ Le Hero se charge correctement au retour
- ✅ Pas de duplication de slides
- ✅ Le carrousel repart du premier slide
- ✅ L'auto-défilement fonctionne

---

### Test 14 : Compatibilité navigateurs
**Objectif :** Vérifier le support multi-navigateurs.

**Navigateurs à tester :**
- Chrome/Edge
- Firefox
- Safari (Desktop et iOS)
- Chrome mobile (Android)

**Résultat attendu :**
- ✅ Affichage identique sur tous les navigateurs
- ✅ Vidéo fonctionne partout
- ✅ Transitions fluides
- ✅ Pas de console errors

---

## 📊 Résumé des Tests

### Checklist globale
- [ ] Test 1 : Récupération slides FR ✅
- [ ] Test 2 : Récupération slides EN ✅
- [ ] Test 3 : Affichage Hero frontend ✅
- [ ] Test 4 : Support vidéo ✅
- [ ] Test 5 : Actions CTA ✅
- [ ] Test 6 : Changement langue ✅
- [ ] Test 7 : Fallback erreur ✅
- [ ] Test 8 : Performance ✅
- [ ] Test 9 : Sécurité POST ✅
- [ ] Test 10 : Sécurité PUT ✅
- [ ] Test 11 : Sécurité DELETE ✅
- [ ] Test 12 : Responsive mobile ✅
- [ ] Test 13 : Navigation pages ✅
- [ ] Test 14 : Compatibilité navigateurs ✅

---

## 🔧 Dépannage

### Problème : Aucun slide ne s'affiche
**Solution :**
1. Vérifier que les données ont été initialisées (voir Test 1)
2. Vérifier la console pour des erreurs réseau
3. Vérifier que `projectId` et `publicAnonKey` sont corrects

### Problème : Les traductions ne changent pas
**Solution :**
1. Vérifier que le hook `useLanguage` fonctionne
2. Vérifier que le paramètre `locale` est bien passé à l'API
3. Vérifier les données dans la console DevTools

### Problème : La vidéo ne se lit pas
**Solution :**
1. Vérifier l'URL de la vidéo (doit être accessible)
2. Vérifier le format vidéo (MP4 recommandé)
3. Tester sur un autre navigateur

---

## 📈 Métriques de Succès

### Critères d'acceptation
- ✅ 100% des tests fonctionnels passent
- ✅ 100% des tests de sécurité passent
- ✅ Temps de chargement API < 500ms
- ✅ Support complet FR/EN
- ✅ Aucune erreur console
- ✅ Compatible tous navigateurs majeurs
- ✅ Responsive sur tous devices

---

**Tests validés par :** [Nom du testeur]  
**Date de validation :** [Date]  
**Version :** 1.0.0
