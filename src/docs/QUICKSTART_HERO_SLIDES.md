# 🚀 Quickstart : Hero Slides avec Vidéos

## ⚡ Démarrage ultra-rapide (3 minutes)

### Option 1 : Via le CMS (Recommandé) ✅

1. **Ouvrez le CMS** :
   ```
   https://votresite.com/cms
   ```

2. **Naviguez vers "Hero Slides"** (menu latéral gauche)

3. **Cliquez sur le bouton rouge "Initialiser 7 slides"**

4. **Confirmez** → Les 7 slides sont créés !

5. **Retournez à la page d'accueil** → Le Hero affiche maintenant vos slides 🎉

---

### Option 2 : Bouton flottant temporaire

Ajoutez ce code temporairement dans votre `/App.tsx` pour avoir un bouton d'initialisation :

```tsx
import { HeroSlidesInitButtonCompact } from "./components/HeroSlidesInitButton";

// Dans le return de App() ou AppContent()
// Juste avant le </> final
<HeroSlidesInitButtonCompact />
```

**Résultat** : Un bouton rouge apparaît en bas à droite de votre site.  
Cliquez dessus → Confirmez → Slides créés !

---

### Option 3 : Console Navigateur

1. Ouvrez la console (F12)
2. Exécutez ce code :

```javascript
// Copier-coller dans la console
const module = await import('./utils/initHeroSlidesData.ts');
await module.initHeroSlides();

// Si succès, rechargez la page
location.reload();
```

---

## 📋 Vérification rapide

### Tester si les slides existent

```javascript
// Dans la console (F12)
const module = await import('./utils/initHeroSlidesData.ts');
const exists = await module.checkHeroSlidesExist();
console.log('Slides exist:', exists);

// Voir les slides
const { data } = await module.getHeroSlides('fr');
console.log('Slides:', data);
```

---

## 🎬 Ce que vous obtenez

### 7 Slides créés automatiquement :

```
┌───────────────────────────────────────────────┐
│ 1. FIMA Couchage (Image)                      │
│    "LITERIE PREMIUM OUEST-AFRICAINE"          │
│    Durée: 5s                                  │
├───────────────────────────────────────────────┤
│ 2. Visite Showroom (VIDÉO) 🎥                │
│    "IMMERSION DANS L'UNIVERS FIMA"            │
│    Durée: 12s                                 │
├───────────────────────────────────────────────┤
│ 3. FIMA Design (Image)                        │
│    "MENUISERIE & AMEUBLEMENT SUR-MESURE"      │
│    Durée: 5s                                  │
├───────────────────────────────────────────────┤
│ 4. Savoir-faire Artisanal (VIDÉO) 🎥         │
│    "30 ANS D'EXCELLENCE"                      │
│    Durée: 10s                                 │
├───────────────────────────────────────────────┤
│ 5. UNIVERS GLASS (Image)                      │
│    "VITRERIE & ALUMINIUM PREMIUM"             │
│    Durée: 5s                                  │
├───────────────────────────────────────────────┤
│ 6. Nos Grands Projets (VIDÉO) 🎥             │
│    "HÔTELLERIE DE LUXE"                       │
│    Durée: 15s                                 │
├───────────────────────────────────────────────┤
│ 7. Groupe FIMA (Image)                        │
│    "3 MÉTIERS, 1 EXCELLENCE"                  │
│    Durée: 6s                                  │
└───────────────────────────────────────────────┘
```

**Total : 3 vidéos + 4 images = 7 slides**

---

## 🎥 Caractéristiques vidéo

- ✅ **Auto-play** (avec muted pour compatibilité mobile)
- ✅ **Loop** (répétition en boucle)
- ✅ **Fallback** (image si vidéo ne charge pas)
- ✅ **Responsive** (mobile + desktop)
- ✅ **Overlay** (texte toujours lisible)

---

## 🔧 Personnalisation rapide

### Changer une vidéo

1. **CMS** → **Hero Slides**
2. Cliquez sur **"Modifier"** sur le slide vidéo
3. Changez l'**URL de la vidéo**
4. Sauvegardez

### Ajouter un nouveau slide

1. **CMS** → **Hero Slides**
2. Cliquez sur **"+ Nouveau Slide"**
3. Remplissez les champs :
   - **Type** : Image ou Vidéo
   - **Titres** (FR/EN)
   - **Médias** (Image + optionnellement vidéo)
   - **Paramètres** (durée, ordre)
4. Sauvegardez

### Désactiver un slide

1. **CMS** → **Hero Slides**
2. Modifiez le slide
3. Décochez **"Actif"**
4. Sauvegardez

---

## 🎨 Styles appliqués

Les slides utilisent automatiquement :
- **Couleurs FIMA** : Vert anis #B5C233, Gris #6E6E6E, Rouge #E30613
- **Typographie** : Montserrat (titres) + Inter (texte)
- **Design carré** : Pas de coins arrondis
- **Animations** : Zoom, fade in, slide up

---

## 📱 Test Mobile

1. Ouvrez DevTools (F12)
2. Mode responsive (Ctrl + Shift + M)
3. Sélectionnez un device (iPhone, iPad, etc.)
4. Vérifiez que :
   - ✅ Les vidéos se lancent
   - ✅ Le texte est lisible
   - ✅ Les boutons sont cliquables
   - ✅ Le défilement est fluide

---

## 🐛 Problèmes courants

### Les slides ne s'affichent pas
```javascript
// Vérifiez dans la console
const module = await import('./utils/initHeroSlidesData.ts');
const exists = await module.checkHeroSlidesExist();
console.log('Slides exist:', exists); // Doit être true
```

### Les vidéos ne se lancent pas
- ✅ Vérifiez que `muted` est activé (requis pour auto-play)
- ✅ Testez l'URL de la vidéo directement dans le navigateur
- ✅ Vérifiez la console pour les erreurs CORS

### Erreur "Failed to fetch"
- ✅ Vérifiez que le serveur Supabase est démarré
- ✅ Vérifiez les variables d'environnement (projectId, publicAnonKey)

---

## ✅ Checklist de validation

Après initialisation :

- [ ] **7 slides créés** (visible dans le CMS)
- [ ] **Hero affiche les slides** sur la page d'accueil
- [ ] **Vidéos se lancent** automatiquement
- [ ] **Navigation fonctionne** (boutons prev/next)
- [ ] **Défilement automatique** fonctionne
- [ ] **Texte lisible** sur tous les slides
- [ ] **Responsive OK** (mobile + desktop)
- [ ] **Traductions FR/EN** disponibles

---

## 📚 Ressources

- **Guide complet** : `/docs/HERO_SLIDES_VIDEO_GUIDE.md`
- **Fichiers récap** : `/HERO_SLIDES_READY.md`
- **Code source** :
  - Backend : `/supabase/functions/server/index.tsx`
  - Frontend : `/components/Hero.tsx`
  - Hook : `/hooks/useHeroSlides.ts`
  - Utils : `/utils/initHeroSlidesData.ts`

---

## 🎯 Prochaines étapes

### Immédiat (maintenant)
1. ✅ **Initialiser les slides** (une des 3 options ci-dessus)
2. ✅ **Vérifier que ça fonctionne**

### Cette semaine
3. 🎥 **Préparer vos vidéos FIMA** (10-15s chacune)
4. 📤 **Uploader vos vidéos** (Supabase Storage ou autre)
5. 🔄 **Remplacer les URLs** dans le CMS

### Ce mois
6. 📊 **Analytics** (tracking des vidéos)
7. ⚡ **Optimisation** (compression vidéo, CDN)
8. 🎨 **A/B Testing** des messages

---

## 🚀 C'est parti !

**Temps estimé** : 2-3 minutes pour initialiser  
**Résultat** : Hero dynamique avec vidéos fonctionnel

**Choisissez une option ci-dessus et lancez-vous ! 🎉**

---

**Date** : 10 Octobre 2025  
**Version** : 1.0.0
