# 🧪 Test YouTube Integration

## ✅ Checklist de Test

### Préparation
- [ ] Avez-vous une vidéo YouTube de test ? (Utilisez: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`)
- [ ] Êtes-vous connecté au CMS ?

---

## 🎯 Test 1: Hero Slides avec YouTube

### Étapes:
1. Connectez-vous au CMS
2. Allez dans **Hero Slides**
3. Créez un nouveau slide:
   - **Titre**: "Test YouTube Hero"
   - **Sous-titre**: "Test d'intégration"
   - **Description**: "Vérification du support YouTube"
   - **Est une vidéo**: ✅ COCHER
   - **URL Vidéo**: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`
   - **Durée du slide**: 10000
   - **Active**: ✅ COCHER
4. Sauvegardez
5. Retournez sur le site principal (pas le CMS)
6. Vérifiez le Hero

### ✅ Résultat attendu:
- La vidéo YouTube s'affiche en plein écran dans le Hero
- La vidéo démarre automatiquement (sans son)
- Les contrôles YouTube sont visibles au survol
- Pas d'erreur dans la console (F12)

### ❌ Si ça ne marche pas:
- Vérifiez la console (F12) pour les erreurs
- Vérifiez que la vidéo est publique sur YouTube
- Vérifiez que "Est une vidéo" est coché
- Essayez avec un autre format d'URL: `https://youtu.be/dQw4w9WgXcQ`

---

## 🎯 Test 2: Video Stories avec YouTube

### Étapes:
1. Dans le CMS, allez dans **Vidéos**
2. Créez une nouvelle vidéo:
   - **Titre (FR)**: "Test YouTube Stories"
   - **Titre (EN)**: "YouTube Stories Test"
   - **Description (FR)**: "Test d'intégration YouTube"
   - **Description (EN)**: "YouTube integration test"
   - **URL Vidéo**: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`
   - **Durée**: "3:32"
   - **Publié**: ✅ COCHER
   - **Thumbnail URL**: LAISSER VIDE (pour tester l'extraction auto)
3. Sauvegardez
4. Retournez sur le site
5. Scrollez jusqu'à "Notre histoire, c'est votre histoire"

### ✅ Résultat attendu:
- La vidéo apparaît dans le carrousel
- Le thumbnail YouTube est automatiquement extrait et affiché
- Cliquer sur la vidéo ouvre YouTube dans un nouvel onglet
- L'icône Play est visible au centre
- Pas d'erreur dans la console

### ❌ Si ça ne marche pas:
- Vérifiez que "Publié" est coché
- Vérifiez que la vidéo YouTube est publique
- Vérifiez la console pour les erreurs

---

## 🎯 Test 3: Thumbnail Personnalisé (Video Stories)

### Étapes:
1. Éditez la vidéo créée au Test 2
2. Ajoutez un **Thumbnail URL personnalisé**:
   `https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1080`
3. Sauvegardez
4. Rafraîchissez le site

### ✅ Résultat attendu:
- Le thumbnail personnalisé s'affiche au lieu du thumbnail YouTube
- Le reste fonctionne normalement

---

## 🎯 Test 4: Formats d'URL YouTube Multiples

### Étapes:
Testez ces 3 formats d'URL dans Hero Slides (un par un):

1. **Format standard**:
   `https://www.youtube.com/watch?v=dQw4w9WgXcQ`

2. **Format court**:
   `https://youtu.be/dQw4w9WgXcQ`

3. **Format embed**:
   `https://www.youtube.com/embed/dQw4w9WgXcQ`

### ✅ Résultat attendu:
- Les 3 formats fonctionnent parfaitement
- La vidéo s'affiche dans tous les cas
- Pas d'erreur dans la console

---

## 🎯 Test 5: Régression - Vidéo MP4

### Étapes:
1. Créez un Hero Slide avec une vidéo MP4:
   - **URL Vidéo**: `https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4`
   - **Est une vidéo**: ✅ COCHER
2. Sauvegardez

### ✅ Résultat attendu:
- La vidéo MP4 continue de fonctionner (pas de régression)
- Utilise la balise `<video>` HTML5
- Autoplay avec loop

---

## 🎯 Test 6: Console Développeur

### Étapes:
1. Ouvrez la console (F12)
2. Rafraîchissez le site
3. Regardez les messages de log

### ✅ Messages attendus (en mode développement):
```
🎥 Début de chargement de la vidéo: https://www.youtube.com/...
✅ Vidéo YouTube chargée: https://www.youtube.com/watch?v=...
```

### ❌ PAS d'erreurs:
```
❌ Erreur de chargement vidéo
❌ Failed to load resource
❌ CORS error
```

---

## 🎯 Test 7: Responsive Mobile

### Étapes:
1. Ouvrez les DevTools (F12)
2. Activez le mode responsive (Ctrl+Shift+M ou Cmd+Shift+M)
3. Testez en mode iPhone / Android
4. Vérifiez le Hero et les Video Stories

### ✅ Résultat attendu:
- Les vidéos YouTube sont responsive
- Pas de débordement horizontal
- Les contrôles restent accessibles
- Le carousel Video Stories affiche 1 vidéo à la fois sur mobile

---

## 📊 Résumé des Tests

| Test | Composant | Type | Résultat |
|------|-----------|------|----------|
| 1 | Hero Slides | YouTube | ⬜ |
| 2 | Video Stories | YouTube + Auto Thumbnail | ⬜ |
| 3 | Video Stories | Thumbnail Personnalisé | ⬜ |
| 4 | Hero Slides | Formats URL YouTube | ⬜ |
| 5 | Hero Slides | MP4 (régression) | ⬜ |
| 6 | Console | Logs | ⬜ |
| 7 | Responsive | Mobile | ⬜ |

**Légende**: ✅ = Réussi | ❌ = Échoué | ⬜ = Pas testé

---

## 🐛 Bugs Connus

Aucun pour le moment.

---

## 📝 Notes de Test

### Browser Testing
- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge

### Performance
- [ ] Temps de chargement acceptable
- [ ] Pas de lag au scroll
- [ ] Autoplay fonctionne

### UX
- [ ] Les contrôles vidéo sont accessibles
- [ ] Le son peut être activé par l'utilisateur
- [ ] Navigation fluide entre les slides

---

## ✅ Validation Finale

Après avoir complété tous les tests:

- [ ] Tous les tests Hero Slides passent
- [ ] Tous les tests Video Stories passent
- [ ] Pas de régression sur les vidéos MP4
- [ ] Console sans erreurs
- [ ] Responsive fonctionne
- [ ] Documentation créée et à jour

---

**Date de test**: _____________________  
**Testeur**: _____________________  
**Résultat global**: ⬜ Réussi / ⬜ Échoué  
**Commentaires**:

_____________________________________________________________________________________

_____________________________________________________________________________________

_____________________________________________________________________________________

---

**Prochaines étapes si tous les tests passent**:
1. ✅ Déployer en production
2. ✅ Informer l'équipe
3. ✅ Mettre à jour la documentation utilisateur

**Si des tests échouent**:
1. ❌ Noter les bugs dans la section "Bugs Connus"
2. ❌ Créer des issues GitHub
3. ❌ Corriger avant déploiement
