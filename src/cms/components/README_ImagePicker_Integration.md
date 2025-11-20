# ImagePicker - Guide d'intégration

Le composant `ImagePicker` est un sélecteur d'images puissant avec upload intégré et système de catégories.

## 📦 Fonctionnalités

✅ **Sélection d'images** depuis la bibliothèque média
✅ **Upload direct** avec formulaire intégré
✅ **Catégories** : Hero, Produits, Projets, Équipe, Blog, Icônes, Arrière-plans, Autres
✅ **Recherche** par titre, description ou tags
✅ **Filtrage** par catégorie
✅ **Aperçu** de l'image sélectionnée
✅ **Saisie manuelle** d'URL possible
✅ **Interface modale** responsive et intuitive

---

## 🚀 Utilisation de base

### Import

```tsx
import { ImagePicker } from '../components/ImagePicker';
```

### Exemple simple

```tsx
const [imageUrl, setImageUrl] = useState('');

<ImagePicker
  value={imageUrl}
  onChange={setImageUrl}
  label="Image de fond"
  placeholder="URL de l'image ou sélectionnez depuis la bibliothèque"
/>
```

### Exemple avec catégorie prédéfinie

```tsx
const [heroImageUrl, setHeroImageUrl] = useState('');

<ImagePicker
  value={heroImageUrl}
  onChange={setHeroImageUrl}
  label="Image Hero"
  placeholder="Sélectionnez une image de bannière"
  category="hero" // Filtre par défaut sur les images Hero
/>
```

---

## 📋 Props

| Prop | Type | Requis | Description |
|------|------|--------|-------------|
| `value` | `string` | ✅ | URL de l'image actuelle |
| `onChange` | `(url: string) => void` | ✅ | Callback appelé quand l'URL change |
| `label` | `string` | ❌ | Label affiché au-dessus du champ |
| `placeholder` | `string` | ❌ | Texte placeholder de l'input |
| `category` | `string` | ❌ | Catégorie par défaut pour filtrer/uploader |

---

## 🎨 Catégories disponibles

| Valeur | Label | Usage recommandé |
|--------|-------|------------------|
| `hero` | 🎯 Hero / Bannières | Images pour slides hero et bannières |
| `products` | 🛋️ Produits | Photos de produits |
| `projects` | 🏗️ Projets / Réalisations | Images de projets et réalisations |
| `team` | 👥 Équipe | Photos des membres de l'équipe |
| `blog` | 📝 Blog / Articles | Images pour articles de blog |
| `icons` | 🎨 Icônes / Logos | Logos et icônes |
| `backgrounds` | 🖼️ Arrière-plans | Images d'arrière-plan |
| `other` | 📦 Autres | Autres types d'images |

---

## 🔄 Intégration dans un formulaire existant

### Remplacer un input URL classique

**❌ Avant** :
```tsx
<div>
  <label className="block text-sm font-medium text-gray-700 mb-2">
    URL de l'image de fond *
  </label>
  <input
    type="url"
    required
    value={formData.background_image_url}
    onChange={(e) => setFormData({ ...formData, background_image_url: e.target.value })}
    className="w-full px-4 py-2 border border-gray-300"
    placeholder="https://images.unsplash.com/..."
  />
</div>
```

**✅ Après** :
```tsx
<ImagePicker
  value={formData.background_image_url}
  onChange={(url) => setFormData({ ...formData, background_image_url: url })}
  label="Image de fond *"
  placeholder="Sélectionnez une image de fond"
  category="hero"
/>
```

---

## 💡 Exemples d'intégration par page CMS

### CMSHeroSlides

```tsx
import { ImagePicker } from '../components/ImagePicker';

// Dans le formulaire, onglet "media"
<ImagePicker
  value={formData.background_image_url}
  onChange={(url) => setFormData({ ...formData, background_image_url: url })}
  label="Image de fond *"
  placeholder="Sélectionnez une image de bannière"
  category="hero"
/>
```

### CMSArticles

```tsx
<ImagePicker
  value={formData.featured_image}
  onChange={(url) => setFormData({ ...formData, featured_image: url })}
  label="Image mise en avant"
  category="blog"
/>
```

### CMSProducts

```tsx
<ImagePicker
  value={formData.image_url}
  onChange={(url) => setFormData({ ...formData, image_url: url })}
  label="Image du produit *"
  category="products"
/>
```

### CMSTeam

```tsx
<ImagePicker
  value={formData.photo_url}
  onChange={(url) => setFormData({ ...formData, photo_url: url })}
  label="Photo du membre"
  category="team"
/>
```

### CMSProjects

```tsx
<ImagePicker
  value={formData.cover_image}
  onChange={(url) => setFormData({ ...formData, cover_image: url })}
  label="Image de couverture"
  category="projects"
/>
```

---

## 🎬 Workflow utilisateur

1. **Saisie manuelle** : L'utilisateur peut taper directement une URL
2. **Bouton "Bibliothèque"** : Ouvre le modal de sélection
3. **Dans le modal** :
   - Rechercher par titre/description/tags
   - Filtrer par catégorie
   - Cliquer sur "Uploader" pour ajouter une nouvelle image
4. **Upload** :
   - Sélectionner un fichier
   - Remplir le titre, description, catégorie et tags
   - Cliquer sur "Uploader et Sélectionner"
   - L'image est automatiquement sélectionnée après l'upload
5. **Aperçu** : L'image sélectionnée s'affiche en aperçu
6. **Supprimer** : Bouton X pour retirer l'image

---

## ⚙️ Configuration backend

Le composant utilise l'API media existante :

- **GET** `/make-server-98c6ec1c/api/media` - Liste des images
- **POST** `/make-server-98c6ec1c/api/media/upload` - Upload d'image

Les images sont automatiquement stockées dans **Supabase Storage** et les métadonnées dans le **KV Store**.

---

## 🎯 Avantages

✅ **Centralisation** : Une seule bibliothèque pour toutes les images
✅ **Organisation** : Système de catégories et tags
✅ **Performance** : Images optimisées et hébergées sur Supabase
✅ **UX améliorée** : Upload et sélection dans la même interface
✅ **Cohérence** : Même composant partout dans le CMS
✅ **Flexibilité** : Saisie manuelle d'URL toujours possible

---

## 🔧 Migration progressive

Vous pouvez migrer progressivement vos pages CMS :

1. **Phase 1** : CMSHeroSlides, CMSArticles
2. **Phase 2** : CMSProducts, CMSProjects
3. **Phase 3** : CMSTeam, CMSBusinessUnits
4. **Phase 4** : Autres pages avec des images

Chaque page peut garder son input URL classique pendant la migration.

---

## 📝 Notes importantes

- **Upload max** : 10 MB par image
- **Formats acceptés** : Tous les formats image (jpg, png, gif, svg, webp...)
- **Catégorie obligatoire** : Lors de l'upload, une catégorie doit être sélectionnée
- **Fallback** : Si l'image ne charge pas, un placeholder est affiché
- **Responsive** : Le modal s'adapte à toutes les tailles d'écran

---

## 🐛 Dépannage

### L'image ne s'affiche pas
- Vérifier que l'URL est valide
- Vérifier que l'image existe dans Supabase Storage
- Vérifier les permissions du bucket

### L'upload échoue
- Vérifier la taille du fichier (max 10 MB)
- Vérifier que le format est bien une image
- Vérifier les logs du serveur

### La catégorie ne filtre pas
- Vérifier que les images ont bien une catégorie assignée
- Les anciennes images sans catégorie reçoivent automatiquement "other"

---

## 🎉 Prêt à l'emploi !

Le composant `ImagePicker` est maintenant prêt à être intégré dans toutes vos pages CMS. Il offre une expérience utilisateur moderne et professionnelle pour la gestion des images.
