# 🧪 Tests - Bedtime Stories & Video Stories

## ✅ Liste de Vérification Complète

---

## 📋 1. TESTS API (Backend)

### Testimonials (Bedtime Stories)

#### Test 1: Liste des témoignages
```bash
curl -X GET "https://{PROJECT_ID}.supabase.co/functions/v1/make-server-ead4d8e2/testimonials" \
  -H "Authorization: Bearer {ANON_KEY}"
```

**Résultat attendu**:
```json
{
  "success": true,
  "data": [
    {
      "id": "uuid",
      "clientName": "...",
      "testimonialFr": "...",
      "rating": 5,
      ...
    }
  ]
}
```

#### Test 2: Initialisation des témoignages
```bash
curl -X POST "https://{PROJECT_ID}.supabase.co/functions/v1/make-server-ead4d8e2/init-testimonials" \
  -H "Authorization: Bearer {ANON_KEY}"
```

**Résultat attendu**:
```json
{
  "success": true,
  "message": "Default testimonials initialized successfully",
  "data": {
    "testimonials": 3
  }
}
```

### Video Stories

#### Test 3: Liste des vidéos
```bash
curl -X GET "https://{PROJECT_ID}.supabase.co/functions/v1/make-server-ead4d8e2/video-stories" \
  -H "Authorization: Bearer {ANON_KEY}"
```

**Résultat attendu**:
```json
{
  "success": true,
  "data": [
    {
      "id": "uuid",
      "titleFr": "...",
      "titleEn": "...",
      "videoUrl": "...",
      "duration": "3:45",
      ...
    }
  ]
}
```

#### Test 4: Initialisation des vidéos ✨ NOUVEAU
```bash
curl -X POST "https://{PROJECT_ID}.supabase.co/functions/v1/make-server-ead4d8e2/init-video-stories" \
  -H "Authorization: Bearer {ANON_KEY}"
```

**Résultat attendu**:
```json
{
  "success": true,
  "message": "Default video stories initialized successfully",
  "data": {
    "videoStories": 5
  }
}
```

---

## 🎨 2. TESTS FRONTEND (Composants)

### BedtimeStoriesSection

#### Test 5: Affichage de la section
1. Aller sur la **page d'accueil**
2. Scroller jusqu'à **"FIMA bedtime stories"**
3. Vérifier:
   - ✅ Le titre "FIMA bedtime stories" s'affiche
   - ✅ Le sous-titre "Témoignages de nos clients..." s'affiche
   - ✅ **3 cartes de témoignages** s'affichent

#### Test 6: Contenu des témoignages
Pour chaque carte:
- ✅ **Avatar/Photo** s'affiche (emoji ou image)
- ✅ **Étoiles** s'affichent (rating)
- ✅ **Nom du client** s'affiche
- ✅ **Localisation** s'affiche
- ✅ **Nom du projet** s'affiche (optionnel)
- ✅ **Témoignage** s'affiche en français
- ✅ Hover: **ombre augmente**

#### Test 7: États de chargement
1. Ouvrir les DevTools
2. Throttler le réseau à "Slow 3G"
3. Rafraîchir la page
4. Vérifier:
   - ✅ **Skeleton loader** s'affiche pendant le chargement
   - ✅ Transition fluide vers le contenu réel

#### Test 8: Gestion d'erreur
1. Arrêter le serveur Supabase (ou simuler)
2. Rafraîchir la page
3. Vérifier:
   - ✅ Message d'erreur s'affiche
   - ✅ Pas de crash de l'application

### VideoStoriesSection

#### Test 9: Affichage de la section
1. Aller sur la **page d'accueil**
2. Scroller jusqu'à **"Notre histoire, c'est votre histoire"**
3. Vérifier:
   - ✅ Le titre s'affiche
   - ✅ **Carousel de vidéos** s'affiche

#### Test 10: Carousel Desktop
Sur **écran desktop** (>768px):
- ✅ **3 vidéos** visibles simultanément
- ✅ **Flèches de navigation** à gauche et droite
- ✅ Clic sur **flèche droite**: slide vers la vidéo suivante
- ✅ Clic sur **flèche gauche**: slide vers la vidéo précédente
- ✅ **Flèche gauche désactivée** au début
- ✅ **Flèche droite désactivée** à la fin

#### Test 11: Carousel Mobile
Sur **écran mobile** (<768px):
- ✅ **1 vidéo** visible
- ✅ **Flèches de navigation** fonctionnent
- ✅ Navigation fluide entre les vidéos

#### Test 12: Cartes vidéo
Pour chaque vidéo:
- ✅ **Miniature** s'affiche
- ✅ **Overlay noir semi-transparent** s'affiche
- ✅ **Bouton Play** centré s'affiche
- ✅ **Titre** s'affiche en bas à gauche
- ✅ **Durée** s'affiche en bas à gauche
- ✅ Hover: **miniature zoom légèrement**
- ✅ Hover: **bouton play grossit**
- ✅ Clic: **vidéo s'ouvre** (nouvelle fenêtre)

#### Test 13: Section Citation
Si une vidéo a une citation:
- ✅ **Citation** s'affiche sous le carousel
- ✅ Citation en **italique**
- ✅ **Auteur** s'affiche en vert (#B5C233)
- ✅ Format: "Citation" - Auteur

#### Test 14: Responsive
1. Redimensionner la fenêtre
2. Vérifier:
   - ✅ **Desktop**: 3 vidéos
   - ✅ **Mobile**: 1 vidéo
   - ✅ **Index réinitialisé** lors du redimensionnement
   - ✅ Pas de débordement horizontal

---

## 🖥️ 3. TESTS CMS

### Page Testimonials

#### Test 15: Navigation CMS
1. Aller dans le **CMS**
2. Cliquer sur **HomePage → Témoignages (Bedtime)**
3. Vérifier:
   - ✅ Page se charge correctement
   - ✅ Titre "Témoignages" s'affiche
   - ✅ Compteur de témoignages correct

#### Test 16: Liste des témoignages
- ✅ **Tableau** s'affiche avec colonnes:
  - Client (avatar + nom + localisation)
  - Témoignage (texte tronqué + projet)
  - Note (étoiles)
  - Catégorie
  - Statut (publié/brouillon + featured)
  - Actions (modifier/supprimer)

#### Test 17: Créer un témoignage
1. Cliquer sur **"Nouveau témoignage"**
2. Remplir le formulaire:
   - Nom du client: "Test Client"
   - Localisation: "Abidjan, Côte d'Ivoire"
   - Photo: "👤"
   - Témoignage FR: "Excellent service"
   - Témoignage EN: "Excellent service"
   - Note: 5 étoiles
   - Catégorie: General
   - ✅ Publié
3. Cliquer sur **"Créer"**
4. Vérifier:
   - ✅ Toast de succès s'affiche
   - ✅ Page se recharge
   - ✅ Nouveau témoignage dans la liste

#### Test 18: Modifier un témoignage
1. Cliquer sur l'icône **Modifier** d'un témoignage
2. Modifier le **nom du client**
3. Cliquer sur **"Mettre à jour"**
4. Vérifier:
   - ✅ Toast de succès
   - ✅ Modification visible dans la liste

#### Test 19: Supprimer un témoignage
1. Cliquer sur l'icône **Supprimer**
2. Confirmer la suppression
3. Vérifier:
   - ✅ Modal de confirmation s'affiche
   - ✅ Toast de succès
   - ✅ Témoignage supprimé de la liste

### Page Video Stories

#### Test 20: Navigation CMS
1. Aller dans le **CMS**
2. Cliquer sur **HomePage → Video Stories**
3. Vérifier:
   - ✅ Page se charge correctement
   - ✅ Titre "Video Stories" s'affiche
   - ✅ Compteur de vidéos correct

#### Test 21: Liste des vidéos
- ✅ **Tableau** s'affiche avec colonnes:
  - Vidéo (miniature + titre FR + titre EN)
  - Catégorie
  - Durée
  - Statut (publié/brouillon + featured)
  - Actions (modifier/supprimer)

#### Test 22: Créer une vidéo
1. Cliquer sur **"Nouvelle vidéo"**
2. Remplir le formulaire:
   - Titre FR: "Ma Vidéo Test"
   - Titre EN: "My Test Video"
   - URL: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
   - Durée: "3:30"
   - Catégorie: General
   - ✅ Publié
3. Cliquer sur **"Créer"**
4. Vérifier:
   - ✅ Toast de succès
   - ✅ Nouvelle vidéo dans la liste

#### Test 23: Modifier une vidéo
1. Cliquer sur **Modifier**
2. Modifier le **titre**
3. Ajouter une **citation**:
   - Citation FR: "Une citation test"
   - Citation EN: "A test quote"
   - Auteur FR: "Test Auteur"
   - Auteur EN: "Test Author"
4. Cliquer sur **"Mettre à jour"**
5. Vérifier:
   - ✅ Toast de succès
   - ✅ Modifications visibles

#### Test 24: Supprimer une vidéo
1. Cliquer sur **Supprimer**
2. Confirmer
3. Vérifier:
   - ✅ Modal de confirmation
   - ✅ Toast de succès
   - ✅ Vidéo supprimée

---

## 🔄 4. TESTS DE SYNCHRONISATION

#### Test 25: Sync CMS → Frontend (Testimonials)
1. Dans le CMS, créer un **nouveau témoignage**
2. Le marquer comme **Publié**
3. Aller sur le **site web**
4. Vérifier:
   - ✅ Nouveau témoignage visible dans Bedtime Stories
   - ✅ Informations correctes (nom, note, texte)

#### Test 26: Sync CMS → Frontend (Videos)
1. Dans le CMS, créer une **nouvelle vidéo**
2. La marquer comme **Featured** et **Publié**
3. Aller sur le **site web**
4. Vérifier:
   - ✅ Nouvelle vidéo dans le carousel
   - ✅ Si citation: affichée sous le carousel

#### Test 27: Publication/Dépublication
1. Dans le CMS, **décocher "Publié"** sur un témoignage
2. Sauvegarder
3. Rafraîchir le site web
4. Vérifier:
   - ✅ Témoignage **ne s'affiche plus**
5. Re-cocher "Publié"
6. Vérifier:
   - ✅ Témoignage **réapparaît**

---

## 🌐 5. TESTS MULTILINGUES

#### Test 28: Changement de langue (Testimonials)
1. Sur le site, section Bedtime Stories
2. Vérifier le **texte en français**
3. Changer la langue en **anglais** (si implémenté)
4. Vérifier:
   - ✅ Témoignages en **anglais** (testimonialEn)
   - ✅ Titre de section en anglais

#### Test 29: Changement de langue (Videos)
1. Sur le site, section Video Stories
2. Vérifier les **titres en français**
3. Changer la langue en **anglais**
4. Vérifier:
   - ✅ Titres en **anglais** (titleEn)
   - ✅ Citations en **anglais** (quoteEn)

---

## 📱 6. TESTS MOBILE

#### Test 30: Responsive Bedtime Stories
Sur mobile (<768px):
- ✅ **3 cartes** empilées verticalement
- ✅ **Pas de débordement** horizontal
- ✅ Cartes prennent **toute la largeur**
- ✅ **Espacement** adapté

#### Test 31: Responsive Video Stories
Sur mobile (<768px):
- ✅ **1 vidéo** visible
- ✅ **Flèches** visibles et fonctionnelles
- ✅ **Smooth scrolling** entre vidéos
- ✅ Citation **lisible** et bien formatée

---

## ⚡ 7. TESTS DE PERFORMANCE

#### Test 32: Temps de chargement
1. Ouvrir les **DevTools → Network**
2. Rafraîchir la page
3. Vérifier:
   - ✅ Appel API testimonials **< 500ms**
   - ✅ Appel API video-stories **< 500ms**
   - ✅ Images des miniatures **lazy load**

#### Test 33: Skeleton loaders
1. Throttler le réseau à **Slow 3G**
2. Rafraîchir
3. Vérifier:
   - ✅ Skeleton testimonials s'affiche
   - ✅ Skeleton videos s'affiche
   - ✅ Transition fluide vers contenu réel

---

## 🐛 8. TESTS D'ERREUR

#### Test 34: Erreur réseau
1. Simuler une **erreur réseau** (DevTools → Offline)
2. Rafraîchir
3. Vérifier:
   - ✅ Message d'erreur **clair**
   - ✅ Pas de **crash**
   - ✅ Reste de la page **fonctionne**

#### Test 35: Données vides
1. Supprimer tous les témoignages dans le CMS
2. Aller sur le site
3. Vérifier:
   - ✅ Message **"Aucun témoignage disponible"**
4. Même test pour les vidéos

#### Test 36: Données corrompues
1. Créer un témoignage avec **rating = 0**
2. Vérifier:
   - ✅ Gestion correcte (pas d'étoiles ou message)
3. Créer une vidéo avec **duration vide**
4. Vérifier:
   - ✅ Affichage sans crash

---

## 📊 RÉSUMÉ DES TESTS

| Catégorie | Tests | Statut |
|-----------|-------|--------|
| API Backend | 4 tests | ⏳ À tester |
| Frontend Components | 10 tests | ⏳ À tester |
| CMS Interface | 10 tests | ⏳ À tester |
| Synchronisation | 3 tests | ⏳ À tester |
| Multilingue | 2 tests | ⏳ À tester |
| Responsive Mobile | 2 tests | ⏳ À tester |
| Performance | 2 tests | ⏳ À tester |
| Gestion d'erreurs | 3 tests | ⏳ À tester |
| **TOTAL** | **36 tests** | **0/36** |

---

## ✅ Checklist Finale

Avant de déclarer la migration complète:

- [ ] Tous les tests API passent
- [ ] Tous les tests frontend passent
- [ ] CMS fonctionnel pour testimonials
- [ ] CMS fonctionnel pour video stories
- [ ] Sync CMS ↔ Frontend fonctionne
- [ ] Responsive mobile OK
- [ ] Multilingue fonctionne
- [ ] Performance acceptable (<1s)
- [ ] Gestion d'erreurs robuste
- [ ] Documentation complète

---

**Bons tests ! 🧪**
