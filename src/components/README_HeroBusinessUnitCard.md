# HeroBusinessUnitCard Component

## Description
Composant réutilisable pour afficher les cartes flottantes des unités commerciales FIMA dans le style Hero avec épingles colorées, icônes circulaires et liste de caractéristiques.

## Emplacement
`/components/HeroBusinessUnitCard.tsx`

## Utilisation

```tsx
import { HeroBusinessUnitCard } from './components/HeroBusinessUnitCard';
import { Bed } from 'lucide-react';

const unit = {
  key: 'fima-couchage',
  title: 'FIMA Couchage',
  subtitle: 'Literie Premium',
  description: 'Matelas, sommiers et accessoires',
  icon: <Bed className="w-5 h-5" />,
  color: '#B5C233',
  features: [
    '100 nuits d\'essai',
    'Livraison gratuite',
    'Garantie 10 ans'
  ],
  ctaText: 'Découvrir FIMA Couchage'
};

<HeroBusinessUnitCard
  unit={unit}
  onBusinessUnitClick={(key) => console.log('Clicked:', key)}
/>
```

## Props

### `unit` (obligatoire)
Objet contenant les informations de l'unité commerciale :

- **key** `string` - Identifiant unique de l'unité (ex: 'fima-couchage')
- **title** `string` - Nom de l'unité (ex: 'FIMA Couchage')
- **subtitle** `string` - Sous-titre descriptif (ex: 'Literie Premium')
- **description** `string` - Description courte de l'unité
- **icon** `ReactNode` - Icône React (généralement depuis lucide-react)
- **color** `string` - Couleur hexadécimale de la marque (ex: '#B5C233')
- **features** `string[]` - Liste des caractéristiques clés (max 3-4 recommandé)
- **ctaText** `string` - Texte du bouton d'appel à l'action

### `onBusinessUnitClick` (obligatoire)
Fonction callback appelée lorsque la carte ou le bouton est cliqué.

**Signature:** `(key: string) => void`

## Caractéristiques

### Design
- ✨ **Épingle colorée** en haut de la carte (effet de suspension)
- 🎨 **Icône circulaire** avec la couleur de la marque
- 📝 **Liste de features** avec icônes CheckCircle colorées
- 🎯 **Bouton CTA** avec couleurs adaptatives selon la marque

### Interactions
- 🖱️ **Hover effect** : Agrandissement léger de la carte (scale 1.02)
- 🎨 **Couleurs dynamiques** : Le bouton change de couleur au hover
- 📱 **Touch-friendly** : Optimisé pour mobile avec `touchAction: 'manipulation'`
- ⚡ **Animations fluides** : Transitions de 300ms

### Couleurs spéciales
Le composant gère automatiquement les couleurs selon les unités FIMA :

| Unité | Couleur principale | Couleur hover | Couleur texte bouton |
|-------|-------------------|---------------|---------------------|
| FIMA Couchage | `#B5C233` (Vert anis) | `#a3b030` | `#333333` (Gris foncé) |
| FIMA Design | `#6E6E6E` (Gris) | `#5a5a5a` | `#B5C233` (Vert anis) |
| UNIVERS GLASS | `#0EA5E9` (Cyan) | `#0EA5E0` | `white` |

## Accessibilité
- ✅ Hauteur minimale du bouton : 48px (Apple HIG & Material Design)
- ✅ Tap highlight désactivé pour iOS
- ✅ User-select: none pour éviter la sélection accidentelle
- ✅ Cursor: pointer pour indiquer la cliquabilité

## Exemple d'utilisation dans ProductsSection

```tsx
import { HeroBusinessUnitCard } from './HeroBusinessUnitCard';
import { Bed, Home, Building2 } from 'lucide-react';

const heroStyleBusinessUnits = [
  {
    key: 'fima-couchage',
    title: 'FIMA Couchage',
    subtitle: 'Literie Premium',
    description: 'Matelas, sommiers et accessoires',
    icon: <Bed className="w-5 h-5" />,
    color: '#B5C233',
    features: ['100 nuits d\'essai', 'Livraison gratuite', 'Garantie 10 ans'],
    ctaText: 'Découvrir FIMA Couchage'
  },
  // ... autres unités
];

{heroStyleBusinessUnits.map((unit) => (
  <HeroBusinessUnitCard
    key={unit.key}
    unit={unit}
    onBusinessUnitClick={handleBusinessUnitClick}
  />
))}
```

## Notes techniques

### État interne
Le composant utilise un état `isHovered` pour gérer les effets de hover, assurant une synchronisation parfaite entre les styles CSS et JavaScript.

### Performance
- Utilisation de `useState` pour un rendu optimal
- Fonctions de calcul de couleur mémorisées localement
- Pas de re-renders inutiles grâce à la gestion d'état isolée

## Migration depuis l'ancien composant inline

Ce composant remplace l'ancien `BusinessUnitCardComponent` qui était défini inline dans `ProductsSection.tsx`. 

**Avantages de la migration :**
- ✅ Réutilisabilité : Peut être utilisé dans d'autres parties du site
- ✅ Maintenabilité : Code plus facile à tester et modifier
- ✅ Performance : Meilleure optimisation possible avec React.memo si nécessaire
- ✅ Organisation : Structure de fichiers plus claire

## Composants associés

- `BusinessUnitCard` : Composant alternatif avec grille de catégories en images
- `ProductCard` : Structure similaire pour les produits
- `ProductsSection` : Utilise ce composant pour afficher les 3 unités commerciales
