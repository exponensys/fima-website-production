# 🧪 Guide de Test - VideoStoriesSection Migration

## Date de création
7 octobre 2025

## Objectif
Tester la migration de la section VideoStoriesSection depuis des données hardcodées vers Supabase avec support multilingue.

---

## 🎯 Prérequis

### 1. Initialisation des données
Les video stories de démonstration doivent être initialisées avant les tests.

**Commande d'initialisation :**
```bash
curl -X POST https://{projectId}.supabase.co/functions/v1/make-server-ead4d8e2/init-video-stories \
  -H "Authorization: Bearer {publicAnonKey}"
```

**Réponse attendue :**
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

## ✅ Tests Fonctionnels

### Test 1 : Affichage du carrousel (Français)
**Objectif :** Vérifier que le carrousel s'affiche correctement en français.

**Actions :**
1. Ouvrir l'application dans le navigateur
2. Naviguer vers la page d'accueil
3. Scroller jusqu'à la section "Notre histoire, c'est votre histoire."

**Résultat attendu :**
- ✅ Titre : "Notre histoire, c'est votre histoire."
- ✅ Desktop : 3 vidéos visibles
- ✅ Mobile : 1 vidéo visible
- ✅ Chaque vidéo contient :
  - Thumbnail de la vidéo
  - Bouton play centré (vert FIMA)
  - Titre de la vidéo en français
  - Durée (ex: "2:30")
- ✅ Boutons de navigation (prev/next) visibles
- ✅ Citation affichée en bas (si présente)

---

### Test 2 : Navigation du carrousel
**Objectif :** Vérifier que la navigation fonctionne.

**Actions :**
1. Observer le carrousel (desktop - 3 vidéos visibles)
2. Cliquer sur le bouton "Suivant" (chevron droit)
3. Observer le défilement
4. Cliquer sur le bouton "Précédent" (chevron gauche)

**Résultat attendu :**
- ✅ Click sur "Suivant" : défilement d'1 vidéo vers la gauche
- ✅ Transition fluide (500ms ease-in-out)
- ✅ Click sur "Précédent" : défilement d'1 vidéo vers la droite
- ✅ Bouton "Précédent" désactivé au début (opacity-50)
- ✅ Bouton "Suivant" désactivé à la fin (opacity-50)
- ✅ Pas de défilement au-delà des limites

---

### Test 3 : Click sur une vidéo
**Objectif :** Vérifier l'interaction avec les vidéos.

**Actions :**
1. Survoler une carte vidéo avec la souris (desktop)
2. Observer l'effet hover
3. Cliquer sur une carte vidéo

**Résultat attendu :**
- ✅ Hover : scale 105% sur la thumbnail
- ✅ Hover : overlay plus foncé (bg-black/30)
- ✅ Hover : scale 110% sur le bouton play
- ✅ Hover : shadow-xl sur la carte
- ✅ Click : ouverture de la vidéo dans un nouvel onglet
- ✅ Console log : "Playing video {id}: {url}"

---

### Test 4 : Changement de langue (Anglais)
**Objectif :** Vérifier le support multilingue.

**Actions :**
1. Changer la langue vers l'anglais
2. Observer la section VideoStoriesSection

**Résultat attendu :**
- ✅ Titre : "Our story is your story."
- ✅ Titres des vidéos en anglais
- ✅ Citation en anglais (si présente)
- ✅ Auteur de la citation en anglais
- ✅ Pas de rechargement de page
- ✅ Transition fluide

---

### Test 5 : Citation dynamique
**Objectif :** Vérifier l'affichage de la citation.

**Actions :**
1. Observer la section en bas du carrousel
2. Vérifier la présence d'une citation

**Résultat attendu :**
- ✅ Citation affichée entre guillemets
- ✅ Style : Montserrat italic
- ✅ Couleur : noir (#000000)
- ✅ Auteur affiché avec tiret
- ✅ Couleur auteur : vert FIMA (#B5C233)
- ✅ Police auteur : Montserrat medium
- ✅ Max-width : 4xl (max-w-4xl)
- ✅ Centré (mx-auto text-center)

---

### Test 6 : États de chargement (Skeleton)
**Objectif :** Vérifier le skeleton de chargement.

**Actions :**
1. Ralentir la connexion réseau (DevTools > Network > Slow 3G)
2. Recharger la page
3. Observer la section pendant le chargement

**Résultat attendu :**
- ✅ 3 cartes de skeleton s'affichent
- ✅ Animation pulsante (animate-pulse)
- ✅ Skeleton respecte la structure :
  - Rectangle pour le titre
  - Rectangles pour les vidéos (aspect-video)
  - Cercle central pour le bouton play
- ✅ Transition fluide vers le contenu réel

---

### Test 7 : Gestion d'erreur API
**Objectif :** Vérifier le comportement en cas d'erreur.

**Actions :**
1. Modifier temporairement l'URL de l'API pour provoquer une erreur
2. Recharger la page
3. Observer la section

**Résultat attendu :**
- ✅ Message d'erreur affiché :
  - FR : "Impossible de charger les vidéos pour le moment."
  - EN : "Unable to load video stories at this time."
- ✅ Pas de crash de l'application
- ✅ Message centré (text-center)
- ✅ Couleur : gris FIMA (#6E6E6E)
- ✅ Console : erreur loggée pour debug

---

### Test 8 : Video stories vides
**Objectif :** Vérifier l'affichage quand il n'y a pas de vidéos.

**Actions :**
1. Simuler une réponse vide de l'API
2. Observer la section

**Résultat attendu :**
- ✅ Message vide affiché :
  - FR : "Aucune vidéo disponible pour le moment."
  - EN : "No video stories available at this time."
- ✅ Message centré
- ✅ Pas de carrousel vide
- ✅ Couleur : gris FIMA (#6E6E6E)

---

### Test 9 : Tri et ordre des vidéos
**Objectif :** Vérifier que les vidéos sont triées correctement.

**Requête API :**
```bash
curl -X GET "https://{projectId}.supabase.co/functions/v1/make-server-ead4d8e2/video-stories" \
  -H "Authorization: Bearer {publicAnonKey}"
```

**Résultat attendu :**
- ✅ L'API retourne 5 vidéos
- ✅ Tri par `order` (1, 2, 3, 4, 5)
- ✅ Les vidéos avec `featured: true` en premier (si même order)
- ✅ Puis tri par date décroissante (si même featured)
- ✅ La première vidéo affichée a `order: 1`

---

## 📱 Tests Responsive

### Test 10 : Affichage mobile
**Objectif :** Vérifier le responsive sur mobile.

**Actions :**
1. Ouvrir DevTools > Responsive mode
2. Sélectionner un device mobile (iPhone 12, Samsung Galaxy S21)
3. Observer la section

**Résultat attendu :**
- ✅ Visibilité : 1 vidéo à la fois (visibleCount: 1)
- ✅ Navigation : chevrons à gauche et droite
- ✅ Gap réduit : gap-4
- ✅ Padding des cartes : p-6
- ✅ Boutons de navigation : 40px x 40px (w-10 h-10)
- ✅ Icônes navigation : 20px (w-5 h-5)
- ✅ Texte lisible
- ✅ Pas de débordement horizontal
- ✅ Espacement vertical : py-8

---

### Test 11 : Affichage desktop
**Objectif :** Vérifier l'affichage sur grand écran.

**Actions :**
1. Agrandir la fenêtre du navigateur (> 768px)
2. Observer la section

**Résultat attendu :**
- ✅ Visibilité : 3 vidéos à la fois (visibleCount: 3)
- ✅ Gap entre vidéos : gap-6 (1.5rem)
- ✅ Boutons de navigation : 48px x 48px (md:w-12 md:h-12)
- ✅ Icônes navigation : 24px (md:w-6 md:h-6)
- ✅ Max-width : 6xl (max-w-6xl)
- ✅ Centré (mx-auto)
- ✅ Espacement vertical : md:py-16
- ✅ Citation visible et centrée

---

### Test 12 : Redimensionnement fenêtre
**Objectif :** Vérifier l'adaptation au resize.

**Actions :**
1. Commencer en mode desktop (3 vidéos)
2. Naviguer vers la vidéo 3
3. Redimensionner vers mobile
4. Observer le comportement

**Résultat attendu :**
- ✅ Passage de 3 à 1 vidéo visible
- ✅ `currentIndex` reset à 0
- ✅ Pas de cassure visuelle
- ✅ Transition fluide
- ✅ Navigation fonctionne correctement

---

## 🎨 Tests Visuels

### Test 13 : Bouton play
**Objectif :** Vérifier le style du bouton play.

**Résultat attendu :**
- ✅ Taille : 64px x 64px (w-16 h-16)
- ✅ Background : blanc semi-transparent (bg-white/90)
- ✅ Backdrop blur : actif
- ✅ Icône play : vert FIMA (#B5C233)
- ✅ Taille icône : 32px (w-8 h-8)
- ✅ Position : centrée (ml-1 pour compensation visuelle)
- ✅ Hover : scale 110%
- ✅ Transition : 300ms

---

### Test 14 : Typographie et couleurs
**Objectif :** Vérifier la cohérence visuelle.

**Résultat attendu :**

| Élément | Police | Taille | Couleur | Style |
|---------|--------|--------|---------|-------|
| Titre section | Montserrat | text-xl (md:text-3xl) | #000000 | - |
| Titre vidéo | Montserrat | - | #FFFFFF | - |
| Durée vidéo | Inter | text-sm | rgba(255,255,255,0.8) | - |
| Citation | Montserrat | text-base (md:text-xl) | #000000 | italic |
| Auteur citation | Montserrat | - | #B5C233 | medium |

---

### Test 15 : Overlay et transitions
**Objectif :** Vérifier les effets visuels.

**Résultat attendu :**
- ✅ Overlay par défaut : bg-black/20
- ✅ Overlay hover : bg-black/30
- ✅ Transition overlay : transition-colors
- ✅ Thumbnail scale : 100% → 105% au hover
- ✅ Bouton play scale : 100% → 110% au hover
- ✅ Shadow carte : shadow-lg → shadow-xl au hover
- ✅ Transition carrousel : 500ms ease-in-out

---

## 🚀 Tests de Performance

### Test 16 : Temps de chargement
**Objectif :** Vérifier les performances.

**Actions :**
1. Ouvrir DevTools > Network
2. Recharger la page
3. Observer la requête API video-stories

**Résultat attendu :**
- ✅ Requête API complète en < 500ms
- ✅ Pas de flash de contenu (FOUC)
- ✅ Skeleton s'affiche immédiatement
- ✅ Transition fluide vers le contenu
- ✅ Images thumbnails lazy loaded

---

### Test 17 : Optimisation images
**Objectif :** Vérifier le chargement des thumbnails.

**Actions :**
1. Observer le chargement des thumbnails

**Résultat attendu :**
- ✅ Images se chargent de manière asynchrone
- ✅ Pas de blocage du rendu
- ✅ Alt text présent pour accessibilité
- ✅ Object-fit : cover pour éviter distorsion
- ✅ Utilisation de ImageWithFallback component

---

### Test 18 : Mémoire et rerenders
**Objectif :** Vérifier les performances React.

**Actions :**
1. Observer les rerenders avec React DevTools
2. Changer de langue
3. Naviguer dans le carrousel

**Résultat attendu :**
- ✅ Pas de rerenders inutiles
- ✅ useEffect se déclenche uniquement au changement de langue
- ✅ Navigation fluide sans lag
- ✅ Pas de memory leaks

---

## 🔒 Tests de Sécurité

### Test 19 : Données publiées uniquement
**Objectif :** Vérifier que seules les vidéos publiées s'affichent.

**Requête :**
```bash
curl -X GET "https://{projectId}.supabase.co/functions/v1/make-server-ead4d8e2/video-stories" \
  -H "Authorization: Bearer {publicAnonKey}"
```

**Résultat attendu :**
- ✅ Toutes les vidéos retournées ont `published: true`
- ✅ Vidéos non publiées ne s'affichent pas
- ✅ Filtrage côté frontend : `publishedOnly: true`

---

### Test 20 : XSS et injection
**Objectif :** Vérifier la sécurité contre les injections.

**Actions :**
1. Observer le rendu du contenu vidéo
2. Vérifier qu'aucun HTML/script ne s'exécute

**Résultat attendu :**
- ✅ Contenu rendu comme texte simple
- ✅ Balises HTML échappées
- ✅ Pas d'exécution de scripts
- ✅ React protège naturellement contre XSS
- ✅ URLs vidéo validées avant ouverture

---

## 🔄 Tests de Régression

### Test 21 : Navigation entre pages
**Objectif :** Vérifier que la section fonctionne après navigation.

**Actions :**
1. Naviguer vers une autre page (Produits)
2. Revenir à la page d'accueil
3. Observer la section VideoStoriesSection

**Résultat attendu :**
- ✅ Section se charge correctement
- ✅ Pas de re-requête API inutile (si déjà en cache)
- ✅ Pas de duplication de vidéos
- ✅ État conservé ou rechargé correctement
- ✅ Index du carrousel reset à 0

---

### Test 22 : Compatibilité navigateurs
**Objectif :** Vérifier le support multi-navigateurs.

**Navigateurs à tester :**
- Chrome/Edge
- Firefox
- Safari (Desktop et iOS)
- Chrome mobile (Android)

**Résultat attendu :**
- ✅ Affichage identique sur tous les navigateurs
- ✅ Transitions CSS fonctionnent partout
- ✅ Backdrop blur supporté (avec fallback)
- ✅ Pas de console errors
- ✅ Navigation tactile fonctionne (mobile)

---

## 🎥 Tests spécifiques vidéo

### Test 23 : URLs vidéo
**Objectif :** Vérifier la gestion des URLs.

**Actions :**
1. Observer les URLs vidéo dans les données
2. Cliquer sur différentes vidéos

**Résultat attendu :**
- ✅ URLs valides (YouTube, Vimeo, etc.)
- ✅ Ouverture dans un nouvel onglet (_blank)
- ✅ Pas d'erreur si URL invalide
- ✅ Console log pour debug

---

### Test 24 : Durée des vidéos
**Objectif :** Vérifier l'affichage des durées.

**Actions :**
1. Observer les durées affichées
2. Vérifier le format

**Résultat attendu :**
- ✅ Format : "M:SS" (ex: "2:30", "1:45")
- ✅ Texte blanc semi-transparent
- ✅ Visible sur toutes les thumbnails
- ✅ Position : en bas à gauche

---

### Test 25 : Fallback thumbnail
**Objectif :** Vérifier le fallback des images.

**Actions :**
1. Simuler une vidéo sans thumbnailUrl
2. Observer le rendu

**Résultat attendu :**
- ✅ Fallback vers une image par défaut
- ✅ Pas d'image cassée
- ✅ ImageWithFallback component gère le fallback
- ✅ Alt text toujours présent

---

## 📊 Résumé des Tests

### Checklist globale
- [ ] Test 1 : Affichage carrousel FR ✅
- [ ] Test 2 : Navigation carrousel ✅
- [ ] Test 3 : Click vidéo ✅
- [ ] Test 4 : Changement langue EN ✅
- [ ] Test 5 : Citation dynamique ✅
- [ ] Test 6 : Skeleton loading ✅
- [ ] Test 7 : Gestion erreur ✅
- [ ] Test 8 : Vidéos vides ✅
- [ ] Test 9 : Tri et ordre ✅
- [ ] Test 10 : Responsive mobile ✅
- [ ] Test 11 : Responsive desktop ✅
- [ ] Test 12 : Redimensionnement ✅
- [ ] Test 13 : Bouton play ✅
- [ ] Test 14 : Typographie ✅
- [ ] Test 15 : Overlay transitions ✅
- [ ] Test 16 : Performance ✅
- [ ] Test 17 : Images ✅
- [ ] Test 18 : Mémoire ✅
- [ ] Test 19 : Sécurité published ✅
- [ ] Test 20 : XSS protection ✅
- [ ] Test 21 : Navigation ✅
- [ ] Test 22 : Compatibilité ✅
- [ ] Test 23 : URLs vidéo ✅
- [ ] Test 24 : Durée ✅
- [ ] Test 25 : Fallback thumbnail ✅

---

## 🔧 Dépannage

### Problème : Aucune vidéo ne s'affiche
**Solution :**
1. Vérifier que les données ont été initialisées (voir Prérequis)
2. Vérifier la console pour des erreurs réseau
3. Vérifier que `projectId` et `publicAnonKey` sont corrects
4. Vérifier que `published: true` pour au moins 1 vidéo

### Problème : Traductions ne changent pas
**Solution :**
1. Vérifier que le hook `useLanguage` fonctionne
2. Vérifier que les données ont `titleFr` ET `titleEn`
3. Vérifier la console DevTools pour voir la langue actuelle
4. Forcer un changement de langue manuellement

### Problème : Carrousel ne défile pas
**Solution :**
1. Vérifier que `videoStories.length > visibleCount`
2. Vérifier que les boutons ne sont pas disabled
3. Vérifier la transformation CSS (transform: translateX)
4. Vérifier qu'il n'y a pas de conflit CSS

### Problème : Citation ne s'affiche pas
**Solution :**
1. Vérifier qu'au moins une vidéo a `quoteFr` ou `quoteEn`
2. Vérifier le filtre : `videoStories.find(v => v.quoteFr || v.quoteEn)`
3. Vérifier le rendu conditionnel : `{mainQuote && ...}`

### Problème : Vidéo ne s'ouvre pas au click
**Solution :**
1. Vérifier que `videoUrl` est défini
2. Vérifier les bloqueurs de pop-ups
3. Vérifier la console pour les erreurs
4. Vérifier `window.open(videoUrl, '_blank')`

---

## 📈 Métriques de Succès

### Critères d'acceptation
- ✅ 100% des tests fonctionnels passent
- ✅ 100% des tests responsive passent
- ✅ Support complet FR/EN
- ✅ Temps de chargement API < 500ms
- ✅ Aucune erreur console
- ✅ Compatible tous navigateurs majeurs
- ✅ Navigation carrousel fluide
- ✅ Citation dynamique fonctionnelle

---

**Tests validés par :** [Nom du testeur]  
**Date de validation :** [Date]  
**Version :** 1.0.0
