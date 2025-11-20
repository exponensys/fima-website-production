# 💬🎥 Guide CMS : Témoignages et Video Stories Dynamiques

## ✅ STATUT : COMPLÈTEMENT DYNAMIQUE

Les sections **Bedtime Stories (Témoignages)** et **Video Stories** sont maintenant **100% dynamiques** et gérables depuis le CMS, comme les Hero Slides.

---

## 📍 Accès CMS

### Page Témoignages (Bedtime Stories)
- **URL** : `/cms/testimonials`
- **Menu CMS** : "Témoignages"
- **Composant** : `/cms/pages/CMSTestimonials.tsx`

### Page Video Stories
- **URL** : `/cms/videos`
- **Menu CMS** : "Video Stories" 
- **Composant** : `/cms/pages/CMSVideos.tsx`

---

## 🎯 FONCTIONNALITÉS

### 1️⃣ Témoignages (Bedtime Stories)

#### **Création d'un témoignage**
1. Cliquez sur **"Nouveau témoignage"**
2. Remplissez les champs :
   - **Nom du client** (requis)
   - **Localisation** (requis) - Ex: "Abidjan, Côte d'Ivoire"
   - **Photo URL ou emoji** - Ex: "👤" ou URL d'image
   - **Témoignage FR** (requis)
   - **Témoignage EN** (requis)
   - **Projet/Produit** - Ex: "Matelas King Size Premium"
   - **Note** (1-5 étoiles)
   - **Catégorie** : general / couchage / design / glass
   - **En vedette** ⭐ - Apparaît en premier
   - **Publié** 👁️ - Visible sur le site

#### **Affichage Frontend**
- **Composant** : `/components/BedtimeStoriesSection.tsx`
- **Hook** : `useTestimonials()`
- **Limite** : 3 témoignages affichés
- **Ordre** : Featured → Date de publication

---

### 2️⃣ Video Stories

#### **Création d'une vidéo**
1. Cliquez sur **"Nouvelle vidéo"**
2. Remplissez les champs :
   - **Titre FR** (requis)
   - **Titre EN** (requis)
   - **Description FR**
   - **Description EN**
   - **URL vidéo** (requis) - YouTube, Vimeo, etc.
   - **URL miniature** - Image de prévisualisation
   - **Durée** (requis) - Format: "3:45"
   - **Catégorie** : general / couchage / design / glass
   - **Ordre** - Pour tri manuel
   - **Citation FR** (optionnel)
   - **Citation EN** (optionnel)
   - **Auteur citation FR**
   - **Auteur citation EN**
   - **En vedette** ⭐
   - **Publié** 👁️

#### **Affichage Frontend**
- **Composant** : `/components/VideoStoriesSection.tsx`
- **Hook** : `useVideoStories()`
- **Carousel** : 3 vidéos desktop, 1 mobile
- **Citation** : Affichée sous le carousel (si présente)

---

## 🔄 INITIALISATION DES DONNÉES DÉMO

### **Bouton "Initialiser données démo"**

Chaque page CMS (Témoignages et Vidéos) dispose d'un bouton pour créer des données de démonstration :

#### Témoignages :
- **Fonction** : `initTestimonials()`
- **Fichier** : `/utils/initTestimonialsData.ts`
- **Bouton** : `/cms/components/TestimonialsInitButton.tsx`
- **Crée** : ~6 témoignages répartis sur les 3 métiers FIMA

#### Video Stories :
- **Fonction** : Backend `/init-video-stories`
- **Bouton** : `/cms/components/VideoStoriesInitButton.tsx`
- **Crée** : ~6 vidéos réparties sur les 3 métiers FIMA

> ⚠️ **ATTENTION** : L'initialisation crée de nouvelles données. Utilisez uniquement sur une base vide ou pour tester.

---

## 🛠️ ARCHITECTURE TECHNIQUE

### **Backend API**

#### Témoignages :
```
GET    /make-server-ead4d8e2/testimonials
GET    /make-server-ead4d8e2/testimonials/:id
POST   /make-server-ead4d8e2/testimonials
PUT    /make-server-ead4d8e2/testimonials/:id
DELETE /make-server-ead4d8e2/testimonials/:id
POST   /make-server-ead4d8e2/init-testimonials
```

#### Video Stories :
```
GET    /make-server-ead4d8e2/video-stories
GET    /make-server-ead4d8e2/video-stories/:id
POST   /make-server-ead4d8e2/video-stories
PUT    /make-server-ead4d8e2/video-stories/:id
DELETE /make-server-ead4d8e2/video-stories/:id
POST   /make-server-ead4d8e2/init-video-stories
```

### **Stockage KV**
```
testimonials:${uuid}    → Testimonial
video-stories:${uuid}   → VideoStory
```

### **Hooks Frontend**

#### Témoignages :
- `useTestimonials(locale, category?, featuredOnly?, publishedOnly?)`
- `useTestimonial(id, locale)`
- `useTestimonialMutation()` → create, update, delete

#### Video Stories :
- `useVideoStories(locale, category?, featuredOnly?, publishedOnly?)`
- `useVideoStory(id, locale)`
- `useVideoStoryMutation()` → create, update, delete

---

## 📊 TYPES DE DONNÉES

### Testimonial
```typescript
{
  id: string;
  clientName: string;
  clientPosition: string;
  clientCompany: string;
  clientLocation: string;
  clientPhoto?: string;
  testimonialFr: string;
  testimonialEn: string;
  rating: 1 | 2 | 3 | 4 | 5;
  project?: string;
  projectId?: string;
  category: string;
  featured?: boolean;
  published: boolean;
  publishedDate?: string;
  videoUrl?: string;
  createdAt: string;
  updatedAt?: string;
}
```

### VideoStory
```typescript
{
  id: string;
  titleFr: string;
  titleEn: string;
  descriptionFr?: string;
  descriptionEn?: string;
  videoUrl: string;
  thumbnailUrl?: string;
  duration: string;
  category: string;
  featured?: boolean;
  published: boolean;
  publishedDate?: string;
  order?: number;
  quoteFr?: string;
  quoteEn?: string;
  quoteAuthorFr?: string;
  quoteAuthorEn?: string;
  createdAt: string;
  updatedAt?: string;
}
```

---

## ✨ WORKFLOW D'UTILISATION

### **Scénario 1 : Nouveau site (pas de données)**
1. Se connecter au CMS `/cms`
2. Aller dans **"Témoignages"**
3. Cliquer sur **"Initialiser données démo"**
4. Aller dans **"Video Stories"**
5. Cliquer sur **"Initialiser données démo"**
6. ✅ Le site affiche maintenant des témoignages et vidéos

### **Scénario 2 : Ajouter un vrai témoignage client**
1. Aller dans **"Témoignages"**
2. Cliquer sur **"Nouveau témoignage"**
3. Remplir les informations du client
4. Cocher **"Publié"** pour le rendre visible
5. Optionnel : Cocher **"En vedette"** pour le mettre en avant
6. Cliquer sur **"Créer"**
7. ✅ Le témoignage apparaît sur la page d'accueil

### **Scénario 3 : Ajouter une vidéo YouTube**
1. Copier l'URL de la vidéo YouTube
2. Aller dans **"Video Stories"**
3. Cliquer sur **"Nouvelle vidéo"**
4. Coller l'URL dans **"URL vidéo"**
5. Remplir titre FR/EN et durée
6. Copier l'URL de la miniature YouTube (thumbnail)
7. Cocher **"Publié"**
8. Cliquer sur **"Créer"**
9. ✅ La vidéo apparaît dans le carousel

---

## 🎨 PERSONNALISATION

### Modifier le nombre de témoignages affichés
```typescript
// Dans /components/BedtimeStoriesSection.tsx ligne 21
const displayedTestimonials = testimonials.slice(0, 3); // Changer 3 par le nombre souhaité
```

### Modifier le nombre de vidéos dans le carousel
```typescript
// Dans /components/VideoStoriesSection.tsx ligne 32-34
if (window.innerWidth < 768) {
  setVisibleCount(1); // Mobile: 1 vidéo
} else {
  setVisibleCount(3); // Desktop: 3 vidéos (modifier ici)
}
```

---

## 🔍 DÉBOGAGE

### Vérifier si les données sont chargées
```javascript
// Ouvrir la console développeur (F12)
// Les hooks loggent automatiquement les erreurs

// Témoignages
console.log('Testimonials:', testimonials);

// Video Stories  
console.log('Video Stories:', videoStories);
```

### Erreur "Failed to fetch"
- ✅ Vérifier que le backend Supabase est actif
- ✅ Vérifier la clé API dans `/utils/supabase/info.tsx`
- ✅ Vérifier que les routes existent dans `/supabase/functions/server/index.tsx`

### Les données ne s'affichent pas
- ✅ Vérifier que `published: true`
- ✅ Vérifier la langue (FR/EN)
- ✅ Recharger la page (Ctrl+R)

---

## 📚 FICHIERS CONCERNÉS

### CMS
- `/cms/pages/CMSTestimonials.tsx` - Page admin témoignages
- `/cms/pages/CMSVideos.tsx` - Page admin vidéos
- `/cms/components/TestimonialsInitButton.tsx` - Bouton init témoignages
- `/cms/components/VideoStoriesInitButton.tsx` - Bouton init vidéos

### Frontend
- `/components/BedtimeStoriesSection.tsx` - Affichage témoignages
- `/components/VideoStoriesSection.tsx` - Affichage vidéos

### Hooks
- `/hooks/useTestimonials.ts` - Logique témoignages
- `/hooks/useVideoStories.ts` - Logique vidéos

### Utils
- `/utils/initTestimonialsData.ts` - Init témoignages
- `/utils/initBedtimeStoriesData.ts` - Alias (obsolète)

### Backend
- `/supabase/functions/server/index.tsx` - Routes API (lignes 515-740 et 2233-2500)

---

## 🎉 CONCLUSION

Les sections **Témoignages** et **Video Stories** sont maintenant **entièrement dynamiques** et peuvent être gérées facilement depuis le CMS sans toucher au code. 

**Architecture identique aux Hero Slides** :
✅ CRUD complet  
✅ Multilingue FR/EN  
✅ Featured/Published  
✅ Données démo disponibles  
✅ Interface CMS intuitive  

---

**Date de migration** : Octobre 2025  
**Statut** : ✅ Production Ready
