# Guide d'ajout d'images aux catégories FIMA Design

## 📋 Vue d'ensemble

Ce guide explique comment ajouter des images personnalisées pour chaque catégorie de FIMA Design. Chaque catégorie peut avoir **plusieurs images** qui s'afficheront dans une galerie sur sa page dédiée.

## 🗂️ Structure des fichiers

- **`/data/fima-design-images.ts`** : Fichier contenant les images de toutes les catégories
- **`/components/CategoryDetailPage.tsx`** : Composant de la page de détail de catégorie
- **`/components/business-units/FimaDesignPage.tsx`** : Page principale FIMA Design

## 📸 Format des images

### Structure actuelle

```typescript
export const fimaDesignImages: Record<string, string[]> = {
  'Cuisine': [cuisineImg],
  'Dressing': [dressingImg],
  'Bureaux': ['https://images.unsplash.com/photo-xxx?w=800&h=800&fit=crop'],
  // ... autres catégories
};
```

### Images multiples par catégorie

Pour ajouter **plusieurs images** à une catégorie :

```typescript
'Cuisine': [
  cuisineImg,
  'https://images.unsplash.com/photo-1-cuisine?w=800',
  'https://images.unsplash.com/photo-2-cuisine?w=800',
  'https://images.unsplash.com/photo-3-cuisine?w=800',
  'https://images.unsplash.com/photo-4-cuisine?w=800',
]
```

## 🎯 Comment ajouter vos images

### Option 1 : Images locales (Figma assets)

```typescript
import cuisineImg1 from 'figma:asset/xxxxx.png';
import cuisineImg2 from 'figma:asset/yyyyy.png';
import cuisineImg3 from 'figma:asset/zzzzz.png';

export const fimaDesignImages: Record<string, string[]> = {
  'Cuisine': [cuisineImg1, cuisineImg2, cuisineImg3],
};
```

### Option 2 : URLs externes (Unsplash, etc.)

```typescript
export const fimaDesignImages: Record<string, string[]> = {
  'Cuisine': [
    'https://images.unsplash.com/photo-1-cuisine?w=800',
    'https://images.unsplash.com/photo-2-cuisine?w=800',
    'https://votre-cdn.com/image-cuisine-1.jpg',
  ],
};
```

### Option 3 : Mixte (local + URL)

```typescript
import cuisineImg from 'figma:asset/xxxxx.png';

export const fimaDesignImages: Record<string, string[]> = {
  'Cuisine': [
    cuisineImg,
    'https://images.unsplash.com/photo-1-cuisine?w=800',
    'https://images.unsplash.com/photo-2-cuisine?w=800',
  ],
};
```

## 📝 Liste des catégories actuelles

Voici les catégories FIMA Design disponibles :

1. **Cuisine** ✅ (1 image Figma)
2. **Dressing** ✅ (1 image Figma)
3. **Amenagement Buanderie** (1 image Unsplash)
4. **Bureaux** (1 image Unsplash)
5. **Chambres** (1 image Unsplash)
6. **Panneaux Décoratifs** (1 image Unsplash)
7. **Portes** (1 image Unsplash)
8. **Salles à Manger** (1 image Unsplash)
9. **Salon** (1 image Unsplash)
10. **Meuble Table** (1 image Unsplash)
11. **Table Basse** (1 image Unsplash)
12. **Table Appoint** (1 image Unsplash)
13. **Petite Bibliothèque** (1 image Unsplash)
14. **Table à Manger** (1 image Unsplash)
15. **Buffet Miroir** (1 image Unsplash)
16. **Lits Chevets** (1 image Unsplash)
17. **Armoires** (1 image Unsplash)
18. **Bibliothèque** (1 image Unsplash)
19. **Coiffeuses Tiroirs** (1 image Unsplash)

## 🎨 Recommandations

### Nombre d'images
- **Minimum recommandé** : 3 images par catégorie
- **Optimal** : 6-9 images par catégorie
- **Maximum** : 12 images (pour la performance)

### Qualité des images
- **Résolution** : Minimum 800x800px
- **Format** : JPG, PNG, WebP
- **Poids** : Maximum 500 KB par image (optimisées)
- **Ratio** : Carré (1:1) de préférence

### Contenu des images
- Photos de **réalisations réelles** FIMA si disponibles
- **Avant/Après** pour montrer la transformation
- **Détails** de la finition et des matériaux
- **Vues d'ensemble** et **gros plans**
- Mettez en valeur le **savoir-faire** artisanal

## 🚀 Exemple complet

```typescript
// 1. Importer vos images locales
import cuisine1 from 'figma:asset/xxxxx1.png';
import cuisine2 from 'figma:asset/xxxxx2.png';
import cuisine3 from 'figma:asset/xxxxx3.png';

// 2. Les ajouter dans fimaDesignImages
export const fimaDesignImages: Record<string, string[]> = {
  'Cuisine': [
    cuisine1,  // Vue d'ensemble
    cuisine2,  // Détail du plan de travail
    cuisine3,  // Rangements et finitions
    'https://images.unsplash.com/photo-cuisine-moderne?w=800',  // Photo d'inspiration
    'https://images.unsplash.com/photo-cuisine-equipee?w=800',  // Autre angle
  ],
  
  'Bureaux': [
    'https://images.unsplash.com/photo-bureau-1?w=800',
    'https://images.unsplash.com/photo-bureau-2?w=800',
    'https://images.unsplash.com/photo-bureau-3?w=800',
  ],
  
  // ... autres catégories
};

// 3. Mettre à jour les thumbnails (image de vignette)
export const fimaDesignThumbnails: Record<string, string> = {
  'Cuisine': cuisine1,  // Première image par défaut
  'Bureaux': 'https://images.unsplash.com/photo-bureau-1?w=400',
  // ... autres catégories
};
```

## 🔄 Workflow d'ajout

1. **Collecter vos images** (photos de réalisations FIMA)
2. **Les importer** dans le fichier si nécessaire
3. **Les ajouter** au tableau de la catégorie concernée
4. **Tester** en cliquant sur la catégorie dans FIMA Design
5. **Vérifier** que la galerie s'affiche correctement

## 📍 Navigation

Pour accéder à une page de catégorie :
1. Aller sur la page **FIMA Design**
2. Cliquer sur une **catégorie** dans la grille
3. La page de détail s'ouvre avec :
   - La galerie d'images
   - Les informations (Livraison, Personnalisation, Qualité)
   - Les boutons CTA (Devis, Expert)

## ✅ Vérification

Après avoir ajouté vos images, vérifiez :
- [ ] Les images s'affichent dans la galerie
- [ ] Le hover effect fonctionne
- [ ] Les images se chargent rapidement
- [ ] Le responsive est correct
- [ ] Les thumbnails dans la grille sont OK

## 🆘 Support

Si vous avez des questions ou rencontrez des problèmes :
- Consultez `/components/CategoryDetailPage.tsx` pour le code de la galerie
- Vérifiez `/data/fima-design-images.ts` pour la structure des données
- Les images doivent correspondre au **name** de la catégorie (pas au slug)

---

**Note** : Les images seront ajoutées au fur et à mesure. Pour l'instant, chaque catégorie dispose d'une image placeholder Unsplash qui peut être remplacée par vos vraies photos de réalisations FIMA Design.
