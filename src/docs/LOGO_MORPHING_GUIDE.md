# 🎨 Guide d'Animation de Morphing du Logo

## ✅ Implémentation Complète

L'animation de morphing du logo a été implémentée avec succès en utilisant la **Méthode 1 : Fondu Enchaîné**.

## 📦 Composants Créés

### 1. **MorphingLogo** (`/components/MorphingLogo.tsx`)

Composant React réutilisable qui gère le fondu enchaîné entre deux logos.

**Fonctionnalités :**
- ✅ Transition fluide entre deux logos avec opacité
- ✅ Déclenché par le scroll (seuil personnalisable)
- ✅ Animation basée sur Motion (ex-Framer Motion)
- ✅ Hauteur personnalisable
- ✅ Durée d'animation personnalisable
- ✅ Support du clic (callback onClick)

**Props :**
```typescript
interface MorphingLogoProps {
  logo1Src: string;           // Premier logo (avant le scroll)
  logo2Src: string;           // Deuxième logo (après le scroll)
  alt: string;                // Alt text pour l'accessibilité
  height?: number;            // Hauteur en pixels (défaut: 24)
  scrollThreshold?: number;   // Seuil de scroll en px (défaut: 50)
  hasScrolled?: boolean;      // État du scroll (externe)
  animationDuration?: number; // Durée en secondes (défaut: 0.6)
  className?: string;         // Classe CSS personnalisée
  onClick?: () => void;       // Callback au clic
}
```

**Exemple d'utilisation :**
```tsx
import { MorphingLogo } from './components/MorphingLogo';

<MorphingLogo
  logo1Src="/logo-initial.png"
  logo2Src="/logo-scrolled.png"
  alt="Mon entreprise"
  height={30}
  animationDuration={0.8}
  onClick={() => navigate('home')}
/>
```

### 2. **useLogoScrollAnimation** (`/hooks/useLogoScrollAnimation.ts`)

Hook React simplifié pour détecter le scroll et gérer l'état de l'animation.

**Fonctionnalités :**
- ✅ Détection automatique du scroll
- ✅ Seuil personnalisable
- ✅ Retourne un état `hasScrolled` boolean
- ✅ Performance optimisée avec `passive: true`

**Exemple d'utilisation :**
```tsx
import { useLogoScrollAnimation } from '../hooks/useLogoScrollAnimation';

function MyHeader() {
  const { hasScrolled } = useLogoScrollAnimation({ threshold: 50 });
  
  return (
    <MorphingLogo
      logo1Src="/logo1.png"
      logo2Src="/logo2.png"
      alt="Logo"
      hasScrolled={hasScrolled}
    />
  );
}
```

## 🎯 Intégration dans le Header

Le composant a été intégré dans **2 emplacements** du Header :

### Version Mobile
```tsx
<MorphingLogo
  logo1Src="https://jxikbrjmdmznoehhccdw.supabase.co/storage/v1/object/public/make-98c6ec1c-media/images/b10bd9f8-288d-4f40-8f3e-0f10bfa1961f.PNG"
  logo2Src="https://jxikbrjmdmznoehhccdw.supabase.co/storage/v1/object/public/make-98c6ec1c-media/images/b10bd9f8-288d-4f40-8f3e-0f10bfa1961f.PNG"
  alt="GROUP FIMA - Literie - Menuiserie - Vitres - Aluminium"
  height={24}
  hasScrolled={logoHasScrolled}
  animationDuration={0.6}
  className="fima-logo-mobile"
  onClick={() => handleNavigateWithClose("home")}
/>
```

### Version Desktop
```tsx
<MorphingLogo
  logo1Src={newHeaderLogo}
  logo2Src={newHeaderLogo}
  alt="GROUP FIMA - Literie - Menuiserie - Vitres - Aluminium"
  height={23.2}
  hasScrolled={logoHasScrolled}
  animationDuration={0.6}
  className="fima-logo-desktop"
  onClick={() => handleNavigateWithClose("home")}
/>
```

## 📝 Comment Changer les Logos

### Option 1 : Utiliser des Logos Différents

Pour créer un vrai morphing entre 2 logos différents :

1. **Téléchargez vos 2 logos** dans Supabase Storage ou utilisez des imports Figma
2. **Modifiez les props** `logo1Src` et `logo2Src` :

```tsx
<MorphingLogo
  logo1Src="https://votre-storage.com/logo-initial.png"
  logo2Src="https://votre-storage.com/logo-groupe.png"
  alt="Votre entreprise"
  height={24}
/>
```

### Option 2 : Utiliser des Logos SVG (Recommandé)

Pour une meilleure qualité et un vrai morphing :

1. **Convertissez vos logos en SVG**
2. **Importez-les comme composants React :**

```tsx
import Logo1 from './logos/logo-initial.svg';
import Logo2 from './logos/logo-groupe.svg';

<MorphingLogo
  logo1Src={Logo1}
  logo2Src={Logo2}
  alt="Votre entreprise"
/>
```

### Option 3 : Upload via CMS

1. Allez dans **CMS > Media Library**
2. Uploadez vos 2 logos
3. Copiez les URLs générées
4. Utilisez-les dans le composant

## 🎨 Personnalisation de l'Animation

### Changer la Durée
```tsx
<MorphingLogo
  animationDuration={0.8}  // Animation plus lente
  // ou
  animationDuration={0.3}  // Animation plus rapide
/>
```

### Changer le Seuil de Scroll
```tsx
const { hasScrolled } = useLogoScrollAnimation({ threshold: 100 }); // Déclenche après 100px
```

### Changer la Courbe d'Animation

Dans `/components/MorphingLogo.tsx`, modifiez la valeur `ease` :

```tsx
transition={{ 
  duration: animationDuration,
  ease: [0.43, 0.13, 0.23, 0.96], // Cubic bezier personnalisé
}}
```

Exemples de courbes :
- `"easeIn"` - Démarrage lent
- `"easeOut"` - Fin lente
- `"easeInOut"` - Démarrage et fin lents
- `[0.6, 0.01, 0.05, 0.9]` - Courbe personnalisée

## 🔧 Méthodes Avancées (Pour Plus Tard)

### Méthode 2 : Vrai Morphing SVG avec Motion

Pour transformer réellement les paths SVG (nécessite des SVG avec le même nombre de points) :

```tsx
import { motion } from 'motion/react';

const pathLogo1 = "M10 10 L 90 10 L 90 90 L 10 90 Z";
const pathLogo2 = "M50 10 L 90 90 L 10 90 L 50 10 Z";

<svg width="100" height="100" viewBox="0 0 100 100">
  <motion.path
    fill="#B5C233"
    initial={{ d: pathLogo1 }}
    animate={{ d: hasScrolled ? pathLogo2 : pathLogo1 }}
    transition={{ duration: 0.8, ease: "easeInOut" }}
  />
</svg>
```

### Méthode 3 : Animation Lottie

Pour des animations complexes créées dans After Effects :

```bash
npm install lottie-react
```

```tsx
import Lottie from 'lottie-react';
import logoAnimation from './logo-morph.json';

<Lottie 
  animationData={logoAnimation}
  autoplay={false}
  loop={false}
  style={{ width: 80, height: 80 }}
/>
```

## 🎯 Avantages de la Méthode Actuelle

✅ **Simple** - Facile à implémenter et à maintenir  
✅ **Performant** - Utilise l'accélération GPU (opacity)  
✅ **Compatible** - Fonctionne avec PNG, JPG, SVG  
✅ **Flexible** - Hauteur et durée personnalisables  
✅ **Réutilisable** - Composant autonome  
✅ **Accessible** - Support du alt text  

## 📊 Performance

- ✅ Animation GPU-accélérée (opacity)
- ✅ Event listener `passive: true` pour le scroll
- ✅ `willChange: 'auto'` pour éviter les problèmes de mémoire
- ✅ Cleanup automatique des event listeners

## 🐛 Dépannage

### Le logo ne change pas au scroll
- Vérifiez que `hasScrolled` est passé en prop
- Vérifiez le seuil de scroll (threshold)
- Utilisez les DevTools React pour voir l'état

### L'animation est saccadée
- Réduisez `animationDuration`
- Vérifiez que les images sont optimisées
- Utilisez des SVG au lieu de PNG

### Les deux logos sont visibles en même temps
- Vérifiez que les URLs des logos sont différentes
- Vérifiez les z-index dans le CSS

## 📚 Ressources

- [Motion Documentation](https://motion.dev/)
- [React Hooks Guide](https://react.dev/reference/react)
- [SVG Optimization](https://jakearchibald.github.io/svgomg/)

## 🎉 Prochaines Étapes

Pour améliorer l'animation :

1. **Uploader 2 logos différents** dans Supabase Storage
2. **Créer des variantes SVG** pour une meilleure qualité
3. **Tester sur mobile** pour vérifier la performance
4. **Ajouter des effets supplémentaires** (scale, rotation, etc.)

---

**Date de création :** 21 octobre 2025  
**Version :** 1.0.0  
**Auteur :** FIMA Development Team
