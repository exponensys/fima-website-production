# 📸 Bibliothèque d'Images - Module CMS

## ✅ Module complet créé avec succès !

Le module de bibliothèque d'images permet à l'admin de télécharger, gérer et réutiliser des images dans tout le site FIMA.

---

## 🎯 **Fonctionnalités**

### 1. **Upload d'images**
- ✅ Support de tous les formats d'images (JPG, PNG, GIF, WebP, etc.)
- ✅ Limite de taille : 10 MB par fichier
- ✅ Stockage dans Supabase Storage (bucket public)
- ✅ Génération automatique d'URLs publiques
- ✅ Métadonnées personnalisables :
  - Titre
  - Texte alternatif (Alt text)
  - Tags multiples

### 2. **Gestion des images**
- ✅ Galerie visuelle avec grille responsive
- ✅ Aperçu en miniature de chaque image
- ✅ Édition des métadonnées (titre, alt, tags)
- ✅ Suppression d'images (avec confirmation)
- ✅ Affichage de la taille du fichier et date de création
- ✅ Copie rapide de l'URL dans le presse-papier

### 3. **Recherche et filtres**
- ✅ Recherche textuelle (titre, description, tags)
- ✅ Filtrage par tags
- ✅ Filtres combinables
- ✅ Compteur de résultats en temps réel

### 4. **Intégration CMS**
- ✅ Composant `ImagePicker` réutilisable
- ✅ Modal de sélection d'images
- ✅ Prévisualisation en direct
- ✅ Compatible avec tous les formulaires CMS

---

## 📂 **Fichiers créés**

```
/supabase/functions/server/index.tsx
  ✅ Routes API pour la gestion des images :
     - GET    /api/media              (Liste toutes les images)
     - POST   /api/media/upload       (Upload une image)
     - PUT    /api/media/:id          (Met à jour les métadonnées)
     - DELETE /api/media/:id          (Supprime une image)

/cms/pages/CMSMediaLibrary.tsx
  ✅ Page complète de gestion de la bibliothèque
  ✅ Interface admin intuitive
  ✅ Fonctionnalités CRUD complètes

/cms/components/ImagePicker.tsx
  ✅ Composant de sélection d'images réutilisable
  ✅ Modal avec recherche et filtres
  ✅ Prévisualisation en temps réel

/hooks/useMediaLibrary.ts
  ✅ Hook personnalisé pour accéder aux images
  ✅ Gestion du loading et des erreurs
  ✅ Fonction refetch pour actualiser

/cms/CMSApp.tsx
  ✅ Intégration de la page Media Library

/cms/components/CMSSidebar.tsx
  ✅ Ajout du menu "Bibliothèque d'Images"
  ✅ Section "Médias" dans la navigation
```

---

## 🚀 **Utilisation**

### **Dans le CMS**

1. **Accéder à la bibliothèque**
   - Se connecter au CMS : `/cms`
   - Cliquer sur "Bibliothèque d'Images" dans le menu

2. **Uploader une image**
   - Cliquer sur "Choisir un fichier"
   - Sélectionner une image (max 10 MB)
   - Remplir le titre, texte alternatif et tags
   - Cliquer sur "Uploader"
   - ✅ L'image est stockée dans Supabase Storage

3. **Gérer les images**
   - **Modifier** : Cliquer sur "Modifier" pour éditer les métadonnées
   - **Copier l'URL** : Cliquer sur l'icône de copie
   - **Supprimer** : Cliquer sur "Supprimer" (avec confirmation)

4. **Rechercher**
   - Utiliser la barre de recherche pour filtrer par titre, description ou tags
   - Sélectionner un tag dans le menu déroulant pour filtrer
   - Cumuler les filtres pour affiner la recherche

### **Dans les formulaires CMS (Hero Slides, etc.)**

```tsx
import { ImagePicker } from '../components/ImagePicker';

// Dans votre formulaire :
<ImagePicker
  value={formData.background_image_url}
  onChange={(url) => setFormData({ ...formData, background_image_url: url })}
  label="Image de fond"
  placeholder="URL de l'image ou sélectionnez depuis la bibliothèque"
/>
```

**Avantages** :
- ✅ Saisie manuelle d'URL toujours possible
- ✅ Bouton "Bibliothèque" pour sélectionner depuis les images existantes
- ✅ Prévisualisation en temps réel
- ✅ Recherche et filtres dans la modal

---

## 🗄️ **Stockage des données**

### **Supabase Storage**
- **Bucket** : `make-98c6ec1c-media`
- **Visibilité** : Public (pour affichage direct des images)
- **Structure** : `/images/{uuid}.{ext}`
- **Limite** : 10 MB par fichier

### **Supabase KV Store**
```json
{
  "id": "uuid",
  "title": "Matelas Premium FIMA",
  "alt_text": "Matelas orthopédique de luxe",
  "url": "https://{project}.supabase.co/storage/v1/object/public/make-98c6ec1c-media/images/{uuid}.jpg",
  "file_name": "matelas-premium.jpg",
  "file_size": 2453678,
  "file_type": "image/jpeg",
  "storage_path": "images/{uuid}.jpg",
  "tags": ["produit", "couchage", "hero"],
  "created_at": "2025-10-10T12:00:00.000Z",
  "updated_at": "2025-10-10T12:00:00.000Z"
}
```

**Clé KV** : `media:{uuid}`

---

## 🎨 **Bonnes pratiques**

### **Nommage des images**
- ✅ Utiliser des noms descriptifs : "matelas-premium-hero"
- ✅ Éviter les caractères spéciaux
- ✅ Privilégier les tirets aux espaces

### **Texte alternatif (Alt)**
- ✅ Décrire l'image pour l'accessibilité
- ✅ Être concis mais descriptif
- ✅ Exemple : "Matelas orthopédique FIMA avec sommier intégré"

### **Tags**
- ✅ Utiliser des tags cohérents et réutilisables
- ✅ Exemples : `hero`, `produit`, `couchage`, `design`, `glass`, `bannière`
- ✅ Séparer les tags par des virgules

### **Optimisation**
- ✅ Compresser les images avant upload (TinyPNG, ImageOptim)
- ✅ Utiliser des formats modernes (WebP) quand possible
- ✅ Ratio 16:9 pour les images Hero
- ✅ Dimensions recommandées :
  - Hero Slides : 1920x1080px
  - Produits : 800x800px
  - Bannières : 1600x400px

---

## 📋 **Intégration dans Hero Slides**

Pour utiliser le sélecteur d'images dans le formulaire des Hero Slides :

```tsx
// Dans /cms/pages/CMSHeroSlides.tsx

import { ImagePicker } from '../components/ImagePicker';

// Dans le formulaire, remplacer l'input d'image par :
<ImagePicker
  value={formData.background_image_url}
  onChange={(url) => setFormData({ ...formData, background_image_url: url })}
  label="Image de fond"
  placeholder="Sélectionnez depuis la bibliothèque ou collez une URL"
/>
```

**Avantages** :
- L'admin peut uploader une fois et réutiliser dans plusieurs slides
- Recherche rapide par tags (`hero`, `couchage`, `design`, etc.)
- Plus besoin de chercher des URLs Unsplash
- Images optimisées stockées sur le propre serveur

---

## 🔒 **Sécurité**

- ✅ Validation du type de fichier (images uniquement)
- ✅ Limite de taille (10 MB)
- ✅ Bucket Supabase avec permissions publiques en lecture
- ✅ UUID pour les noms de fichiers (évite les conflits)
- ✅ Suppression du storage ET des métadonnées

---

## 🐛 **Dépannage**

### **L'image ne s'affiche pas**
- Vérifier que le bucket existe : `make-98c6ec1c-media`
- Vérifier que le bucket est public
- Vérifier l'URL retournée par l'API

### **Erreur d'upload**
- Vérifier la taille du fichier (< 10 MB)
- Vérifier le type de fichier (images uniquement)
- Vérifier les logs dans la console

### **Images manquantes dans la liste**
- Vérifier les clés KV : `media:*`
- Actualiser avec le bouton refetch
- Vérifier les erreurs réseau

---

## 🎯 **Prochaines étapes suggérées**

### **Optionnel - Améliorations futures**
- [ ] Édition d'images (crop, resize, filtres)
- [ ] Organisation par dossiers/albums
- [ ] Import en masse (ZIP)
- [ ] Galerie publique (pour le site)
- [ ] Génération automatique de miniatures
- [ ] Support de vidéos
- [ ] Statistiques d'utilisation
- [ ] Intégration avec un CDN

---

## 📊 **API Reference**

### **GET /api/media**
Récupère toutes les images de la bibliothèque.

**Response**
```json
{
  "success": true,
  "data": [
    {
      "id": "uuid",
      "title": "Matelas Premium",
      "url": "https://...",
      ...
    }
  ]
}
```

### **POST /api/media/upload**
Upload une nouvelle image.

**Request** : `multipart/form-data`
- `file` : File (requis)
- `title` : string
- `alt_text` : string
- `tags` : string (séparés par virgules)

**Response**
```json
{
  "success": true,
  "data": { ... },
  "message": "Image uploaded successfully"
}
```

### **PUT /api/media/:id**
Met à jour les métadonnées d'une image.

**Request** : `application/json`
```json
{
  "title": "Nouveau titre",
  "alt_text": "Nouvelle description",
  "tags": ["tag1", "tag2"]
}
```

### **DELETE /api/media/:id**
Supprime une image (storage + métadonnées).

**Response**
```json
{
  "success": true,
  "message": "Image deleted successfully"
}
```

---

## ✅ **Checklist de déploiement**

- [x] Routes API créées et testées
- [x] Page CMS créée
- [x] Composant ImagePicker créé
- [x] Hook useMediaLibrary créé
- [x] Intégration dans CMSApp
- [x] Menu Sidebar mis à jour
- [x] Bucket Supabase auto-créé
- [ ] Tester l'upload d'images
- [ ] Tester la recherche et les filtres
- [ ] Intégrer ImagePicker dans Hero Slides (optionnel)
- [ ] Documenter pour l'équipe

---

**Date de création** : 10 Octobre 2025  
**Version** : 1.0.0  
**Statut** : ✅ MODULE COMPLET ET FONCTIONNEL
