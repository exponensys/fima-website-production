# 🧪 Guide de Test - BedtimeStoriesSection Migration

## Date de création
7 octobre 2025

## Objectif
Tester la migration de la section BedtimeStoriesSection depuis Strapi vers Supabase avec support multilingue.

---

## 🎯 Prérequis

### 1. Initialisation des données
Les testimonials de démonstration doivent être initialisés avant les tests.

**Commande d'initialisation :**
```bash
curl -X POST https://{projectId}.supabase.co/functions/v1/make-server-ead4d8e2/init-testimonials \
  -H "Authorization: Bearer {publicAnonKey}"
```

**Réponse attendue :**
```json
{
  "success": true,
  "message": "Default testimonials initialized successfully",
  "data": {
    "testimonials": 4
  }
}
```

---

## ✅ Tests Fonctionnels

### Test 1 : Affichage de la section (Français)
**Objectif :** Vérifier que la section s'affiche correctement en français.

**Actions :**
1. Ouvrir l'application dans le navigateur
2. Naviguer vers la page d'accueil
3. Scroller jusqu'à la section "FIMA bedtime stories"

**Résultat attendu :**
- ✅ Titre : "FIMA bedtime stories"
- ✅ Sous-titre : "Témoignages de nos clients satisfaits en Afrique de l'Ouest."
- ✅ 3 cartes de testimonials affichées
- ✅ Layout : 3 colonnes sur desktop, 1 colonne sur mobile
- ✅ Chaque carte contient :
  - Avatar ou photo du client
  - Nom du client
  - Localisation
  - Note sur 5 étoiles (jaunes)
  - Nom du projet (en vert FIMA #B5C233)
  - Texte du témoignage en français (italique)

---

### Test 2 : Changement de langue (Anglais)
**Objectif :** Vérifier le support multilingue.

**Actions :**
1. Changer la langue vers l'anglais
2. Observer la section BedtimeStoriesSection

**Résultat attendu :**
- ✅ Sous-titre : "Testimonials from our satisfied customers across West Africa."
- ✅ Les témoignages s'affichent en anglais
- ✅ Noms des clients et localisations restent identiques
- ✅ Pas de rechargement de page
- ✅ Transition fluide

---

### Test 3 : États de chargement (Skeleton)
**Objectif :** Vérifier le skeleton de chargement.

**Actions :**
1. Ralentir la connexion réseau (DevTools > Network > Slow 3G)
2. Recharger la page
3. Observer la section pendant le chargement

**Résultat attendu :**
- ✅ 3 cartes de skeleton s'affichent
- ✅ Animation pulsante (animate-pulse)
- ✅ Skeleton respecte la structure des cartes :
  - Rectangle pour l'avatar
  - Rectangles pour les étoiles
  - Rectangles pour le nom et localisation
  - Rectangles pour le projet
  - Rectangles pour le témoignage
- ✅ Transition fluide vers le contenu réel

---

### Test 4 : Affichage des avatars/photos
**Objectif :** Vérifier l'affichage des avatars.

**Actions :**
1. Observer les avatars dans les testimonials

**Résultat attendu :**
- ✅ Si `clientPhoto` commence par "http" : image affichée
  - Taille : 48px x 48px
  - Object-fit : cover
- ✅ Sinon : emoji affiché (ex: 👤, 👩‍💼, 👨‍💼)
  - Taille : text-4xl
- ✅ Alignement correct avec le nom et les étoiles

---

### Test 5 : Affichage des étoiles (Rating)
**Objectif :** Vérifier l'affichage des notes.

**Actions :**
1. Observer les étoiles dans chaque testimonial

**Résultat attendu :**
- ✅ Nombre d'étoiles correspond au `rating` (1-5)
- ✅ Couleur : jaune (#FFB800)
- ✅ Taille : 16px (w-4 h-4)
- ✅ Étoiles remplies (fill-current)
- ✅ Alignées horizontalement

---

### Test 6 : Affichage du nom du projet
**Objectif :** Vérifier l'affichage conditionnel du projet.

**Actions :**
1. Observer les testimonials

**Résultat attendu :**
- ✅ Si `project` existe : nom affiché en vert FIMA (#B5C233)
  - Police : Montserrat
  - Taille : 1.1rem
  - Font-weight : 600
- ✅ Si `project` n'existe pas : rien affiché
- ✅ Espacement correct (mb-4)

---

### Test 7 : Limite de 3 testimonials
**Objectif :** Vérifier que seuls 3 testimonials sont affichés.

**Requête API :**
```bash
curl -X GET "https://{projectId}.supabase.co/functions/v1/make-server-ead4d8e2/testimonials" \
  -H "Authorization: Bearer {publicAnonKey}"
```

**Résultat attendu :**
- ✅ L'API retourne 4 testimonials (initialisés)
- ✅ La section affiche seulement 3 testimonials
- ✅ Les 3 premiers sont affichés (selon tri featured + date)

---

### Test 8 : Gestion d'erreur API
**Objectif :** Vérifier le comportement en cas d'erreur.

**Actions :**
1. Modifier temporairement l'URL de l'API pour provoquer une erreur
2. Recharger la page
3. Observer la section

**Résultat attendu :**
- ✅ Message d'erreur affiché :
  - FR : "Impossible de charger les témoignages pour le moment."
  - EN : "Unable to load testimonials at this time."
- ✅ Pas de crash de l'application
- ✅ Message centré (text-center)
- ✅ Couleur : gris FIMA (#6E6E6E)
- ✅ Console : erreur loggée pour debug

---

### Test 9 : Testimonials vides
**Objectif :** Vérifier l'affichage quand il n'y a pas de testimonials.

**Actions :**
1. Simuler une réponse vide de l'API
2. Observer la section

**Résultat attendu :**
- ✅ Message vide affiché :
  - FR : "Aucun témoignage disponible pour le moment."
  - EN : "No testimonials available at this time."
- ✅ Message centré
- ✅ Pas de cartes vides
- ✅ Couleur : gris FIMA (#6E6E6E)

---

## 📱 Tests Responsive

### Test 10 : Affichage mobile
**Objectif :** Vérifier le responsive sur mobile.

**Actions :**
1. Ouvrir DevTools > Responsive mode
2. Sélectionner un device mobile (iPhone 12, Samsung Galaxy S21)
3. Observer la section

**Résultat attendu :**
- ✅ Layout : 1 colonne (grid-cols-1)
- ✅ Gap entre cartes : 1rem (gap-4)
- ✅ Padding des cartes : 1.5rem (p-6)
- ✅ Texte lisible
- ✅ Cartes empilées verticalement
- ✅ Pas de débordement horizontal
- ✅ Espacement cohérent (py-8)

---

### Test 11 : Affichage desktop
**Objectif :** Vérifier l'affichage sur grand écran.

**Actions :**
1. Agrandir la fenêtre du navigateur (> 768px)
2. Observer la section

**Résultat attendu :**
- ✅ Layout : 3 colonnes (md:grid-cols-3)
- ✅ Gap entre cartes : 2rem (md:gap-8)
- ✅ Padding des cartes : 2rem (md:p-8)
- ✅ Cartes alignées horizontalement
- ✅ Hauteurs égales ou cohérentes
- ✅ Max-width : 6xl (max-w-6xl)
- ✅ Centré (mx-auto)
- ✅ Espacement cohérent (md:py-16)

---

### Test 12 : Breakpoints intermédiaires
**Objectif :** Tester les points de rupture.

**Actions :**
1. Redimensionner la fenêtre entre 768px et 1024px
2. Observer le comportement

**Résultat attendu :**
- ✅ Transition fluide du layout
- ✅ Pas de casse visuelle
- ✅ Grid s'adapte automatiquement
- ✅ Texte reste lisible

---

## 🎨 Tests Visuels

### Test 13 : Hover effects
**Objectif :** Vérifier les effets au survol.

**Actions :**
1. Survoler chaque carte avec la souris

**Résultat attendu :**
- ✅ Shadow passe de `shadow-lg` à `shadow-xl`
- ✅ Transition fluide (transition-shadow duration-300)
- ✅ Pas d'autres changements visuels
- ✅ Curseur par défaut (pas de clickable)

---

### Test 14 : Typographie et couleurs
**Objectif :** Vérifier la cohérence visuelle.

**Résultat attendu :**

| Élément | Police | Taille | Couleur | Style |
|---------|--------|--------|---------|-------|
| Titre section | Montserrat | text-xl (md:text-3xl) | #000000 | - |
| Sous-titre section | - | text-sm (md:text-lg) | #6E6E6E | - |
| Nom client | Montserrat | - | #000000 | - |
| Localisation | - | text-sm | #6E6E6E | - |
| Nom projet | Montserrat | 1.1rem | #B5C233 | font-weight: 600 |
| Témoignage | Montserrat | text-base | #000000 | italic |
| Étoiles | - | w-4 h-4 | #FFB800 | fill |

---

### Test 15 : Spacing et alignment
**Objectif :** Vérifier l'espacement et l'alignement.

**Résultat attendu :**
- ✅ Header centré (text-center)
- ✅ Espacement header : mb-8 (md:mb-12)
- ✅ Espacement avatar-info : gap-4
- ✅ Espacement étoiles : mb-2
- ✅ Espacement nom : mb-1
- ✅ Espacement projet : mb-4
- ✅ Espacement section : py-8 (md:py-16)
- ✅ Background : bg-gray-50

---

## 🚀 Tests de Performance

### Test 16 : Temps de chargement
**Objectif :** Vérifier les performances.

**Actions :**
1. Ouvrir DevTools > Network
2. Recharger la page
3. Observer la requête API testimonials

**Résultat attendu :**
- ✅ Requête API complète en < 500ms
- ✅ Pas de flash de contenu (FOUC)
- ✅ Skeleton s'affiche immédiatement
- ✅ Transition fluide vers le contenu

---

### Test 17 : Optimisation images
**Objectif :** Vérifier le chargement des photos.

**Actions :**
1. Observer le chargement des photos clients (si URLs http)

**Résultat attendu :**
- ✅ Images se chargent de manière asynchrone
- ✅ Pas de blocage du rendu
- ✅ Alt text présent pour accessibilité
- ✅ Object-fit : cover pour éviter la distorsion

---

## 🔒 Tests de Sécurité

### Test 18 : Données publiées uniquement
**Objectif :** Vérifier que seuls les testimonials publiés s'affichent.

**Requête :**
```bash
curl -X GET "https://{projectId}.supabase.co/functions/v1/make-server-ead4d8e2/testimonials" \
  -H "Authorization: Bearer {publicAnonKey}"
```

**Résultat attendu :**
- ✅ Tous les testimonials retournés ont `published: true`
- ✅ Testimonials non publiés ne s'affichent pas
- ✅ Filtrage côté frontend : `publishedOnly: true`

---

### Test 19 : XSS et injection
**Objectif :** Vérifier la sécurité contre les injections.

**Actions :**
1. Observer le rendu du contenu testimonial
2. Vérifier qu'aucun HTML/script ne s'exécute

**Résultat attendu :**
- ✅ Contenu rendu comme texte simple
- ✅ Balises HTML échappées
- ✅ Pas d'exécution de scripts
- ✅ React protège naturellement contre XSS

---

## 🔄 Tests de Régression

### Test 20 : Navigation entre pages
**Objectif :** Vérifier que la section fonctionne après navigation.

**Actions :**
1. Naviguer vers une autre page (Produits)
2. Revenir à la page d'accueil
3. Observer la section BedtimeStoriesSection

**Résultat attendu :**
- ✅ Section se charge correctement
- ✅ Pas de re-requête API inutile (si déjà en cache)
- ✅ Pas de duplication de testimonials
- ✅ État conservé ou rechargé correctement

---

### Test 21 : Compatibilité navigateurs
**Objectif :** Vérifier le support multi-navigateurs.

**Navigateurs à tester :**
- Chrome/Edge
- Firefox
- Safari (Desktop et iOS)
- Chrome mobile (Android)

**Résultat attendu :**
- ✅ Affichage identique sur tous les navigateurs
- ✅ Grid layout fonctionne partout
- ✅ Transitions fluides
- ✅ Pas de console errors
- ✅ Emojis affichés correctement

---

## 📊 Résumé des Tests

### Checklist globale
- [ ] Test 1 : Affichage section FR ✅
- [ ] Test 2 : Changement langue EN ✅
- [ ] Test 3 : Skeleton loading ✅
- [ ] Test 4 : Avatars/photos ✅
- [ ] Test 5 : Étoiles rating ✅
- [ ] Test 6 : Nom projet ✅
- [ ] Test 7 : Limite 3 testimonials ✅
- [ ] Test 8 : Gestion erreur ✅
- [ ] Test 9 : Testimonials vides ✅
- [ ] Test 10 : Responsive mobile ✅
- [ ] Test 11 : Responsive desktop ✅
- [ ] Test 12 : Breakpoints ✅
- [ ] Test 13 : Hover effects ✅
- [ ] Test 14 : Typographie ✅
- [ ] Test 15 : Spacing ✅
- [ ] Test 16 : Performance ✅
- [ ] Test 17 : Images ✅
- [ ] Test 18 : Sécurité published ✅
- [ ] Test 19 : XSS protection ✅
- [ ] Test 20 : Navigation ✅
- [ ] Test 21 : Compatibilité ✅

---

## 🔧 Dépannage

### Problème : Aucun testimonial ne s'affiche
**Solution :**
1. Vérifier que les données ont été initialisées (voir Prérequis)
2. Vérifier la console pour des erreurs réseau
3. Vérifier que `projectId` et `publicAnonKey` sont corrects
4. Vérifier que `published: true` pour au moins 3 testimonials

### Problème : Traductions ne changent pas
**Solution :**
1. Vérifier que le hook `useLanguage` fonctionne
2. Vérifier que les données ont `testimonialFr` ET `testimonialEn`
3. Vérifier la console DevTools pour voir la langue actuelle
4. Forcer un changement de langue manuellement

### Problème : Skeleton ne s'affiche pas
**Solution :**
1. Vérifier que le state `loading` est bien géré
2. Ralentir la connexion pour voir le skeleton
3. Vérifier que le composant affiche bien `{loading ? ... : ...}`

### Problème : Images ne se chargent pas
**Solution :**
1. Vérifier l'URL de l'image (doit commencer par http/https)
2. Vérifier les CORS si erreur réseau
3. Utiliser un fallback emoji si problème

---

## 📈 Métriques de Succès

### Critères d'acceptation
- ✅ 100% des tests fonctionnels passent
- ✅ 100% des tests responsive passent
- ✅ Support complet FR/EN
- ✅ Temps de chargement API < 500ms
- ✅ Aucune erreur console
- ✅ Compatible tous navigateurs majeurs
- ✅ Affichage de 3 testimonials max
- ✅ Skeleton fluide et rapide

---

**Tests validés par :** [Nom du testeur]  
**Date de validation :** [Date]  
**Version :** 1.0.0
