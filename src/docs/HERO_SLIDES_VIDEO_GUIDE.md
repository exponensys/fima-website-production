# 🎬 Guide Complet : Hero Slides avec Vidéos Dynamiques

## 📋 Table des matières
1. [Vue d'ensemble](#vue-densemble)
2. [Initialisation rapide](#initialisation-rapide)
3. [Structure des slides](#structure-des-slides)
4. [Gestion via le CMS](#gestion-via-le-cms)
5. [Configuration vidéo](#configuration-vidéo)
6. [URLs de vidéos recommandées](#urls-de-vidéos-recommandées)
7. [Personnalisation avancée](#personnalisation-avancée)

---

## 🎯 Vue d'ensemble

Le système de **Hero Slides** de FIMA supporte maintenant :
- ✅ **Images statiques** avec dégradés colorés
- ✅ **Vidéos en auto-play** avec fallback sur image
- ✅ **Multilingue** (Français/Anglais)
- ✅ **Durées personnalisées** par slide
- ✅ **Loop vidéo configurable**
- ✅ **Gestion complète via CMS**

### Architecture
```
┌─────────────────────────────────────────┐
│  Supabase KV Store                       │
│  Clé: hero-slides:{uuid}                 │
│  ├── 7 slides par défaut                 │
│  │   ├── 3 vidéos (showroom, artisans,   │
│  │   │           projets)                 │
│  │   └── 4 images (métiers FIMA)         │
│  └── Traductions FR/EN                   │
└─────────────────────────────────────────┘
           ↓
┌─────────────────────────────────────────┐
│  API Backend                             │
│  /api/hero-slides (GET/POST/PUT/DELETE)  │
│  /api/init-hero-slides (POST)            │
└─────────────────────────────────────────┘
           ↓
┌─────────────────────────────────────────┐
│  Hook: useHeroSlides()                   │
│  ├── Récupère les slides actifs          │
│  ├── Gère le fallback                    │
│  └── Support multilingue                 │
└─────────────────────────────────────────┘
           ↓
┌─────────────────────────────────────────┐
│  Composant Hero                          │
│  ├── Affichage conditionnel vidéo/image │
│  ├── Auto-play + navigation              │
│  └── Animations CSS                      │
└─────────────────────────────────────────┘
```

---

## 🚀 Initialisation rapide

### Méthode 1 : Via le CMS (Recommandée)
1. Accédez au CMS : `https://votresite.com/cms`
2. Cliquez sur **"Hero Slides"** dans le menu
3. Cliquez sur le bouton **"Initialiser 7 slides"** (rouge)
4. Confirmez l'action
5. ✅ Les 7 slides sont créés automatiquement !

### Méthode 2 : Via la Console Navigateur
```javascript
// Ouvrez la console (F12) et exécutez :
const { initHeroSlides } = await import('./utils/initHeroSlidesData.ts');
await initHeroSlides();
```

### Méthode 3 : Via Code/Composant
```typescript
import { initHeroSlides } from './utils/initHeroSlidesData';

// Dans un useEffect ou au clic d'un bouton
await initHeroSlides();
```

---

## 📦 Structure des slides

### Slides initialisés par défaut

| # | Type   | Titre FR              | Description                        | Durée |
|---|--------|----------------------|-------------------------------------|-------|
| 1 | IMAGE  | FIMA Couchage        | Literie premium ouest-africaine     | 5s    |
| 2 | VIDÉO  | Visite Showroom      | Immersion dans l'univers FIMA       | 12s   |
| 3 | IMAGE  | FIMA Design          | Menuiserie & ameublement sur-mesure | 5s    |
| 4 | VIDÉO  | Savoir-faire Artisanal | 30 ans d'excellence               | 10s   |
| 5 | IMAGE  | UNIVERS GLASS        | Vitrerie & aluminium premium        | 5s    |
| 6 | VIDÉO  | Nos Grands Projets   | Hôtellerie de luxe                  | 15s   |
| 7 | IMAGE  | Groupe FIMA          | 3 métiers, 1 excellence             | 6s    |

### Exemple de structure JSON
```json
{
  "id": "uuid-unique",
  "sort_order": 2,
  "background_image_url": "https://...",
  "is_video": true,
  "video_url": "https://.../video.mp4",
  "slide_duration": 12000,
  "video_play_duration": 12000,
  "video_loop": true,
  "is_active": true,
  "translations": {
    "fr": {
      "title": "Visite Showroom",
      "subtitle": "IMMERSION DANS L'UNIVERS FIMA",
      "description": "Découvrez nos espaces d'exposition...",
      "cta_primary": "Voir la visite virtuelle",
      "badge": "NOUVEAU"
    },
    "en": { ... }
  }
}
```

---

## 🎛️ Gestion via le CMS

### Accéder à la gestion
1. URL : `https://votresite.com/cms`
2. Menu : **Hero Slides**

### Créer un nouveau slide
1. Cliquez sur **"+ Nouveau Slide"**
2. Remplissez les onglets :
   - **Contenu** : Titres, sous-titres, descriptions (FR/EN)
   - **Média** : Image de fond + configuration vidéo
   - **Paramètres** : Durée, ordre, activation

### Configuration vidéo
```
┌────────────────────────────────────┐
│ Type de slide                      │
│ ○ Image statique                   │
│ ● Vidéo                            │
│                                    │
│ URL de la vidéo *                  │
│ https://example.com/video.mp4      │
│                                    │
│ Durée d'affichage (ms)             │
│ 12000 (12 secondes)                │
│                                    │
│ Durée de lecture vidéo (ms)        │
│ 12000                              │
│                                    │
│ ☑ Boucle vidéo en continu          │
└────────────────────────────────────┘
```

### Modifier un slide existant
1. Cliquez sur **"Modifier"** sur la carte du slide
2. Modifiez les champs souhaités
3. Sauvegardez

### Supprimer un slide
1. Cliquez sur l'icône **Poubelle** 🗑️
2. Confirmez la suppression

---

## 🎥 Configuration vidéo

### Paramètres clés

| Paramètre               | Description                                    | Valeur recommandée |
|------------------------|------------------------------------------------|--------------------|
| `is_video`             | Active le mode vidéo                           | `true`             |
| `video_url`            | URL de la vidéo (MP4)                          | Voir section URLs  |
| `slide_duration`       | Temps d'affichage total du slide (ms)          | 10000-15000        |
| `video_play_duration`  | Durée de lecture de la vidéo (ms)              | Même que slide_duration |
| `video_loop`           | Répéter la vidéo en boucle                     | `true` / `false`   |
| `background_image_url` | Image de fallback si vidéo non disponible      | Requis             |

### Bonnes pratiques vidéo

✅ **À FAIRE :**
- Format : **MP4 (H.264)**
- Résolution : **1920x1080 (Full HD)** minimum
- Durée : **10-15 secondes** maximum
- Poids : **< 10 Mo** pour performance
- Auto-play : Toujours en **muted** (navigateurs)
- Fallback : Toujours fournir une **image de fond**

❌ **À ÉVITER :**
- Vidéos > 20 secondes (attention perdante)
- Fichiers > 20 Mo (temps de chargement)
- Formats non supportés (WebM, AVI)
- Vidéos sans image de fallback

---

## 🔗 URLs de vidéos recommandées

### Vidéos de test (publiques)
```javascript
// Google Test Videos (Development)
const testVideos = {
  short: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
  medium: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
  long: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
};
```

### Pour la production

**Option 1 : Hébergement Supabase Storage**
```typescript
// Upload dans Supabase puis récupérer l'URL signée
const { data } = await supabase.storage
  .from('videos')
  .upload('hero/showroom.mp4', videoFile);

const { data: url } = await supabase.storage
  .from('videos')
  .createSignedUrl('hero/showroom.mp4', 3600);
```

**Option 2 : CDN externe**
- Cloudinary
- Vimeo (via API)
- YouTube (embed iframe)
- AWS S3 + CloudFront

**Option 3 : Serveur direct**
```
https://votredomaine.com/videos/hero-showroom.mp4
```

---

## ⚙️ Personnalisation avancée

### Ajouter un slide programmatiquement
```typescript
const response = await fetch(
  `https://${projectId}.supabase.co/functions/v1/make-server-98c6ec1c/api/hero-slides`,
  {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${publicAnonKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      sort_order: 8,
      background_image_url: "https://...",
      is_video: true,
      video_url: "https://.../ma-video.mp4",
      slide_duration: 12000,
      video_play_duration: 12000,
      video_loop: true,
      is_active: true,
      translations: {
        fr: {
          title: "Mon Slide",
          subtitle: "SOUS-TITRE",
          description: "Description...",
          cta_primary: "Action",
          badge: "BADGE"
        },
        en: { ... }
      }
    })
  }
);
```

### Modifier l'ordre des slides
Modifiez la propriété `sort_order` via le CMS ou l'API :
```typescript
await fetch(`/api/hero-slides/${slideId}`, {
  method: 'PUT',
  body: JSON.stringify({ sort_order: 1 })
});
```

### Désactiver temporairement un slide
```typescript
await fetch(`/api/hero-slides/${slideId}`, {
  method: 'PUT',
  body: JSON.stringify({ is_active: false })
});
```

---

## 🎨 Styles et animations

### Animations CSS disponibles
Les vidéos et images utilisent automatiquement :
- **Zoom doux** : Animation d'entrée
- **Fade in** : Apparition progressive
- **Slide up** : Texte qui monte
- **Overlay gradient** : Dégradé pour lisibilité

### Personnaliser le Hero
Fichier : `/components/Hero.tsx`

```tsx
// Modifier le gradient overlay
<div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/30" />

// Changer la durée d'animation
style={{
  animation: "videoZoomIn 20s ease-out infinite alternate"
}}
```

---

## 🐛 Dépannage

### La vidéo ne se charge pas
1. ✅ Vérifiez l'URL de la vidéo (accessible publiquement)
2. ✅ Format MP4 (H.264) supporté
3. ✅ CORS activé sur le serveur hébergeant la vidéo
4. ✅ Vérifiez la console navigateur (F12)

### La vidéo ne s'affiche pas sur mobile
- Auto-play avec son = bloqué sur mobile
- Solution : Toujours `muted={true}` et `playsInline`

### Le slide reste bloqué
- Vérifiez `slide_duration` vs `video_play_duration`
- Si `video_loop: false`, la vidéo s'arrête à la fin

### Performance lente
- Compressez les vidéos (< 10 Mo)
- Utilisez un CDN
- Activez la mise en cache

---

## 📊 Monitoring

### Vérifier les slides actifs
```typescript
import { getHeroSlides, checkHeroSlidesExist } from './utils/initHeroSlidesData';

// Vérifier l'existence
const exists = await checkHeroSlidesExist();
console.log('Slides exists:', exists);

// Récupérer tous les slides
const { data } = await getHeroSlides('fr');
console.log('Slides actifs:', data);
```

### Analytics
Ajoutez des événements Google Analytics :
```typescript
// Quand une vidéo démarre
onPlay={() => {
  gtag('event', 'video_start', {
    video_title: currentHeroSlide.title
  });
}}
```

---

## 🎯 Prochaines étapes

- [ ] Remplacer les vidéos de test par vos vidéos réelles
- [ ] Tester sur mobile et desktop
- [ ] Configurer le CDN pour les vidéos
- [ ] Ajouter des analytics vidéo
- [ ] Optimiser les tailles de fichiers

---

## 📞 Support

Pour toute question :
- Documentation technique : `/docs`
- CMS : `https://votresite.com/cms`
- Backend API : `/supabase/functions/server/index.tsx`

**Date de création** : 10 Octobre 2025
**Version** : 1.0.0
**Auteur** : Équipe FIMA
