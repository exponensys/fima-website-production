# 🎬 Animation du Logo au Premier Scroll

## 📋 Vue d'ensemble

L'animation du logo FIMA au premier scroll crée une transition fluide et élégante où le logo du Hero "monte" vers le Header lorsque l'utilisateur scrolle pour la première fois sur la page d'accueil.

## ✨ Fonctionnalités

### **Animation du Hero**
- Le logo FIMA démarre centré en haut du Hero
- Au premier scroll (> 50px), il:
  - **Monte** vers le haut avec une translation de -500px
  - **Rétrécit** avec un scale de 1.0 → 0.1
  - **Disparaît** progressivement (opacity 1 → 0)
  - Durée: **1.0 seconde**
  - Courbe: **easeInOutQuart** `[0.43, 0.13, 0.23, 0.96]`

### **Animation du Header**
- Le logo du Header démarre avec une opacité réduite (0.3)
- Lorsque l'animation du Hero se déclenche:
  - Le logo **s'agrandit** depuis scale 6 → 1
  - Il **apparaît** progressivement (opacity 0 → 1)
  - Délai: **0.3 secondes** après le début du scroll
  - Durée: **1.0 seconde**
  - Courbe: **easeInOutQuart** (même que Hero)

## 🔧 Architecture Technique

### **Hook personnalisé: `useLogoScrollAnimation`**
```typescript
// hooks/useLogoScrollAnimation.ts
export function useLogoScrollAnimation() {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  
  // Détecte le premier scroll > 50px
  // Déclenche l'animation une seule fois
  // Reset possible pour développement
}
```

**États gérés:**
- `hasScrolled`: Boolean - True après le premier scroll
- `isAnimating`: Boolean - True pendant l'animation (1.3s)
- `hasTriggered`: Boolean - Empêche les déclenchements multiples
- `captureLogoPositions`: Function - Pour calculer les positions (future amélioration)
- `resetAnimation`: Function - Reset pour développement/test

### **Composants modifiés**

#### **1. Hero.tsx**
```tsx
import { motion, AnimatePresence } from "motion/react";
import { useLogoScrollAnimation } from "../hooks/useLogoScrollAnimation";

const { hasScrolled, isAnimating } = useLogoScrollAnimation();

<AnimatePresence mode="wait">
  {!hasScrolled ? (
    <motion.img
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ 
        opacity: isAnimating ? 0 : 1, 
        y: isAnimating ? -500 : 0,
        scale: isAnimating ? 0.1 : 1,
      }}
      // ...
    />
  ) : null}
</AnimatePresence>
```

#### **2. Header.tsx**
```tsx
import { motion } from "motion/react";

const [hasScrolled, setHasScrolled] = useState(false);

// Détection du scroll
useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setHasScrolled(true);
    }
  };
  // ...
}, []);

// Logo mobile
<motion.img
  initial={{ scale: 1, opacity: 0.3 }}
  animate={{ 
    scale: hasScrolled ? [6, 1] : 1,
    opacity: hasScrolled ? [0, 1] : 0.3,
  }}
  transition={{ 
    duration: 1.0,
    delay: hasScrolled ? 0.3 : 0,
  }}
/>

// Logo desktop (même principe)
```

## 🎨 Paramètres d'Animation

### **Timing**
- **Détection du scroll**: 50px minimum
- **Délai avant animation**: 100ms (debounce)
- **Durée de l'animation**: 1.0 seconde
- **Délai du Header**: 0.3 secondes
- **Fin de l'état `isAnimating`**: 1.3 secondes

### **Transformations**

| Propriété | Hero (Initial) | Hero (Animé) | Header (Initial) | Header (Animé) |
|-----------|----------------|--------------|------------------|----------------|
| **Opacity** | 0 → 1 | 1 → 0 | 0.3 | 0 → 1 |
| **Scale** | 0.9 → 1 | 1 → 0.1 | 1 | 6 → 1 |
| **TranslateY** | 50px → 0 | 0 → -500px | - | - |

### **Courbe d'accélération**
```
ease: [0.43, 0.13, 0.23, 0.96]
```
Courbe **easeInOutQuart** - accélération douce au début et à la fin

## 🚀 Optimisations Performances

### **1. Will-Change**
```css
willChange: 'transform, opacity'
```
Prépare le GPU pour l'animation, réduit les reflows

### **2. Hardware Acceleration**
Les transformations `scale` et `translateY` utilisent la composition GPU

### **3. Debounce du scroll**
```typescript
setTimeout(() => {
  if (currentScrollY > 50 && currentScrollY > lastScrollY) {
    triggerAnimation();
  }
}, 100);
```

### **4. One-time trigger**
L'animation ne se déclenche qu'une seule fois grâce à `hasTriggered`

### **5. Smooth Scroll**
```css
html {
  scroll-behavior: smooth;
}
```

## 📱 Responsive

L'animation fonctionne à la fois:
- **Mobile**: Logo mobile du Header (24px de hauteur)
- **Desktop**: Logo desktop du Header (48px de hauteur)

Les deux versions utilisent les mêmes paramètres d'animation pour une expérience cohérente.

## 🎯 User Experience

### **Comportement attendu**
1. L'utilisateur arrive sur la page d'accueil
2. Le logo FIMA est visible en haut du Hero
3. Au premier scroll vers le bas (> 50px):
   - Le logo du Hero monte et rétrécit
   - Le logo du Header s'agrandit et apparaît
   - Impression visuelle: le logo "voyage" du Hero vers le Header
4. L'animation ne se rejoue plus lors des scrolls suivants

### **Pourquoi cette approche?**
- ✅ **Élégance**: Transition fluide et professionnelle
- ✅ **Performance**: Animation GPU, une seule fois
- ✅ **UX**: Renforce la hiérarchie visuelle (Hero → Header)
- ✅ **Brand Identity**: Met en valeur le logo FIMA

## 🔄 États de l'animation

```
INITIAL
├─ Hero Logo: Visible (opacity: 1, scale: 1)
└─ Header Logo: Semi-transparent (opacity: 0.3)

SCROLL DÉTECTÉ (> 50px)
├─ hasScrolled: false → true
├─ isAnimating: false → true
└─ Délai: 100ms

ANIMATION EN COURS (0-1.0s)
├─ Hero Logo:
│  ├─ opacity: 1 → 0
│  ├─ scale: 1 → 0.1
│  └─ y: 0 → -500px
└─ Header Logo (délai 0.3s):
   ├─ opacity: 0 → 1
   └─ scale: 6 → 1

FIN DE L'ANIMATION (1.3s)
├─ hasScrolled: true
├─ isAnimating: true → false
├─ Hero Logo: Retiré du DOM (AnimatePresence)
└─ Header Logo: Visible normalement
```

## 🛠 Développement & Debug

### **Reset de l'animation**
```typescript
const { resetAnimation } = useLogoScrollAnimation();

// En dev, pour tester à nouveau:
resetAnimation();
```

### **Console logs**
Le hook peut être amélioré avec des logs pour debug:
```typescript
console.log('🎬 Animation déclenchée');
console.log('✅ Animation terminée');
```

## 📊 Métriques de Performance

### **Budget de performance**
- Animation: **1.0s** (optimal < 1.5s)
- FPS cible: **60 FPS**
- Reflow: **0** (transformations GPU uniquement)
- Repaint: **Minimal** (opacity transition)

### **Compatibilité**
- ✅ Chrome/Edge (Chromium)
- ✅ Firefox
- ✅ Safari (iOS/macOS)
- ✅ Mobile browsers

## 🎓 Améliorations futures possibles

1. **Calcul dynamique de la distance**
   - Utiliser `captureLogoPositions` pour calculer la vraie distance
   - Animation adaptative selon la taille d'écran

2. **Variants de Motion**
   - Définir des variants pour une meilleure organisation
   - Réutilisabilité du code

3. **Animation de retour**
   - Scroll vers le haut = retour du logo dans le Hero
   - Nécessite la gestion de `scrollDirection`

4. **Threshold personnalisable**
   - Permettre de configurer le seuil de déclenchement (actuellement 50px)

5. **Analytics**
   - Tracker combien d'utilisateurs déclenchent l'animation
   - Mesurer l'engagement

## 📝 Notes importantes

- L'animation est **unidirectionnelle** (ne revient pas en scrollant vers le haut)
- Elle ne se déclenche que sur la **page d'accueil** (Hero présent)
- Le logo du Header reste visible **même sans scroll** (opacity: 0.3)
- Utilise **Motion (Framer Motion)** v11+

---

**Date de création**: 2025-01-14
**Version**: 1.0.0
**Auteur**: Équipe FIMA Dev
