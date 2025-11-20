# Guide d'Intégration YouTube

## ✅ Support YouTube Activé

L'application FIMA supporte maintenant **complètement** les vidéos YouTube dans tous les composants vidéo.

## 🎯 Où utiliser YouTube ?

### 1. **Hero Slides** (Carrousel principal)
- Accès: CMS → Hero Slides
- Utilisation: Créer ou modifier un slide, activer "Est une vidéo", puis coller l'URL YouTube dans le champ "URL Vidéo"

### 2. **Video Stories** (Carrousel de vidéos)
- Accès: CMS → Vidéos
- Utilisation: Coller l'URL YouTube dans le champ "URL Vidéo"
- Bonus: Le thumbnail YouTube sera automatiquement extrait si aucun thumbnail personnalisé n'est fourni

## 📝 Formats d'URL YouTube Supportés

L'application détecte et traite automatiquement tous les formats d'URL YouTube :

```
✅ https://www.youtube.com/watch?v=VIDEO_ID
✅ https://youtu.be/VIDEO_ID
✅ https://www.youtube.com/embed/VIDEO_ID
```

## 🎬 Comment Utiliser

### Dans le CMS - Hero Slides

1. Connectez-vous au CMS
2. Allez dans **Hero Slides**
3. Créez un nouveau slide ou modifiez un existant
4. Activez l'option **"Est une vidéo"** (checkbox)
5. Dans le champ **"URL Vidéo"**, collez votre lien YouTube
   - Exemple: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`
6. Configurez les autres options:
   - **Durée du slide**: Combien de temps afficher ce slide (millisecondes)
   - **Loop vidéo**: Si la vidéo doit boucler (pour YouTube, ceci est géré automatiquement)
7. Sauvegardez

### Dans le CMS - Video Stories

1. Connectez-vous au CMS
2. Allez dans **Vidéos**
3. Créez une nouvelle vidéo
4. Dans le champ **"URL Vidéo"**, collez votre lien YouTube
5. Le **thumbnail** sera automatiquement extrait de YouTube (vous pouvez aussi uploader un thumbnail personnalisé)
6. Remplissez les champs titre, description, durée, etc.
7. Activez **"Publié"** et sauvegardez

## 🔧 Fonctionnalités Techniques

### Détection Automatique
- L'application détecte automatiquement si une URL est YouTube ou un fichier vidéo direct
- Pour YouTube → Utilise un iframe embed
- Pour vidéos directes (MP4, WebM) → Utilise la balise HTML5 `<video>`

### Thumbnail Automatique (Video Stories)
- Si aucun thumbnail n'est fourni pour une vidéo YouTube, l'application extrait automatiquement le thumbnail haute qualité depuis YouTube
- Format utilisé: `https://img.youtube.com/vi/VIDEO_ID/hqdefault.jpg`

### Autoplay
- Hero: Les vidéos YouTube s'autoplay avec le son coupé (muted) conformément aux bonnes pratiques web
- Video Stories: Clic pour ouvrir la vidéo YouTube dans une nouvelle fenêtre

## 📊 Exemple Complet - Hero Slide YouTube

```json
{
  "title": "Découvrez FIMA",
  "subtitle": "NOTRE HISTOIRE",
  "description": "40 ans d'excellence",
  "is_video": true,
  "video_url": "https://www.youtube.com/watch?v=ABC123XYZ",
  "slide_duration": 10000,
  "video_loop": true,
  "is_active": true
}
```

## 🚀 Avantages YouTube

1. **Pas de stockage** - Les vidéos sont hébergées sur YouTube
2. **Performance** - YouTube optimise automatiquement la qualité selon la connexion
3. **Analytics** - Trackez les vues sur YouTube
4. **SEO** - Les vidéos YouTube sont indexées par Google
5. **Facilité** - Copiez-collez simplement l'URL

## ⚠️ Notes Importantes

### Autoplay avec Son
- Les navigateurs modernes bloquent l'autoplay avec son
- Les vidéos YouTube dans le Hero sont automatiquement en **muted** pour permettre l'autoplay
- Les utilisateurs peuvent activer le son en cliquant sur la vidéo

### Qualité
- YouTube sélectionne automatiquement la meilleure qualité selon la bande passante de l'utilisateur
- Pour une meilleure expérience, uploadez des vidéos en HD (1080p minimum)

### Confidentialité
- Les vidéos YouTube utilisent le mode `youtube.com/embed` avec `rel=0` pour minimiser les recommandations de vidéos tierces

## 🐛 Dépannage

### La vidéo YouTube ne s'affiche pas
1. Vérifiez que l'URL est correcte
2. Vérifiez que la vidéo n'est pas "Privée" sur YouTube (doit être "Publique" ou "Non listée")
3. Vérifiez que l'option "Est une vidéo" est bien activée
4. Ouvrez la console développeur (F12) pour voir les messages de débogage

### Le thumbnail ne s'affiche pas (Video Stories)
1. Uploadez un thumbnail personnalisé dans le CMS
2. Ou assurez-vous que la vidéo YouTube est publique

## 📚 Ressources

- [Documentation YouTube Embed](https://developers.google.com/youtube/player_parameters)
- [Paramètres Iframe YouTube](https://developers.google.com/youtube/iframe_api_reference)

---

**Dernière mise à jour**: 17 octobre 2025
**Testé avec**: YouTube, Vidéos directes MP4/WebM
**Compatibilité**: Chrome, Firefox, Safari, Edge
