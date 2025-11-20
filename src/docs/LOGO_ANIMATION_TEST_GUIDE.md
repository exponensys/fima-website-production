# 🧪 Guide de Test - Animation du Logo au Premier Scroll

## ⚠️ **IMPORTANT : Animation Desktop Uniquement**

L'animation du logo au premier scroll **fonctionne uniquement sur DESKTOP** (écrans ≥ 768px).

### **Pourquoi ?**

Sur **mobile** (< 768px), le composant `Hero` est **caché** (`hidden md:block`) et remplacé par `MobileCategoryCards`. 

Le Hero (et donc le logo animé) n'est visible que sur **desktop**.

---

## 📋 Checklist de Test

### **1. Ouvrir le site en mode Desktop**
- ✅ Largeur d'écran ≥ 768px
- ✅ Ou utiliser Chrome DevTools et sélectionner "Responsive" avec largeur > 768px

### **2. Vérifier que le logo Hero est visible**
- ✅ Au chargement de la page, le logo FIMA doit apparaître en haut du Hero
- ✅ Animation d'apparition : le logo "monte" légèrement (translateY: 30 → 0)

### **3. Scroller vers le bas**
- ✅ Scroller de **plus de 20px** vers le bas
- ✅ Observer la console pour voir les logs:
  ```
  📜 Scroll détecté: XX px - Déclenchement dans 50ms
  🎬 Logo Animation - Déclenchement !
  ```

### **4. Observer l'animation**
L'animation doit se dérouler en 2 phases:

#### **Phase 1 : Logo Hero disparaît (1.0s)**
- Le logo **monte** de -500px
- Il **rétrécit** (scale: 1 → 0.15)
- Il **disparaît** (opacity: 1 → 0)

#### **Phase 2 : Logo Header apparaît (0.8s, délai 0.4s)**
- Le logo du Header **s'agrandit** (scale: 5 → 1)
- Il **apparaît** (opacity: 0.3 → 1)
- Impression visuelle: le logo "arrive" du Hero vers le Header

### **5. Vérifier le résultat final**
- ✅ Logo Hero: **disparu** (retiré du DOM)
- ✅ Logo Header: **visible** et à taille normale

---

## 🐛 Debugging

### **Console Logs à observer**

```javascript
// Au chargement
🎬 Hero - Animation state: { hasScrolled: false, isAnimating: false }

// Au premier scroll > 20px
📜 Scroll détecté: 45 px - Déclenchement dans 50ms
🎬 Logo Animation - Déclenchement !
🎬 Hero - Animation state: { hasScrolled: true, isAnimating: true }

// Après 1.3s
✅ Logo Animation - Terminée
🎬 Hero - Animation state: { hasScrolled: true, isAnimating: false }
```

### **Si l'animation ne se déclenche pas**

#### **Vérifier la largeur d'écran**
```javascript
console.log('Largeur:', window.innerWidth, 'px');
// Doit être ≥ 768px
```

#### **Vérifier que le Hero est visible**
```javascript
const hero = document.querySelector('.hero-full-width');
console.log('Hero visible:', hero && hero.offsetParent !== null);
// Doit être true
```

#### **Vérifier le scroll**
```javascript
window.addEventListener('scroll', () => {
  console.log('Scroll Y:', window.scrollY);
});
// Scroller et voir si la valeur change
```

#### **Forcer le déclenchement (pour test)**
Ouvrir la console et taper:
```javascript
// Scroller programmatiquement
window.scrollTo({ top: 100, behavior: 'smooth' });
```

---

## 🎨 Paramètres d'Animation Actuels

### **Seuils & Timings**
- **Seuil de scroll**: 20px (était 50px)
- **Délai de détection**: 50ms (était 100ms)
- **Durée animation Hero**: 1.0s
- **Durée animation Header**: 0.8s
- **Délai Header**: 0.4s
- **Durée totale état `isAnimating`**: 1.3s

### **Transformations Hero**
| État | Opacity | TranslateY | Scale |
|------|---------|-----------|-------|
| Initial | 0 | 30px | 0.95 |
| Affiché | 1 | 0 | 1.0 |
| Animé (scroll) | 0 | -500px | 0.15 |

### **Transformations Header**
| État | Opacity | Scale |
|------|---------|-------|
| Initial | 1 | 1.0 |
| Pendant animation | 0.3 → 1 | 5 → 1 |

---

## 🔧 Ajustements possibles

### **Pour tester plus facilement**

Réduire encore le seuil de scroll dans `/hooks/useLogoScrollAnimation.ts`:

```typescript
// Ligne ~68
if (!hasTriggered && currentScrollY > 10 && currentScrollY > lastScrollY) {
  // Maintenant se déclenche à 10px au lieu de 20px
}
```

### **Pour ralentir l'animation**

Dans `/components/Hero.tsx`:

```typescript
transition={{ 
  opacity: { duration: 1.5 }, // Au lieu de 0.8
  y: { duration: 1.5 },       // Au lieu de 1.0
  scale: { duration: 1.5 },   // Au lieu de 1.0
  ease: [0.43, 0.13, 0.23, 0.96],
}}
```

### **Pour accélérer l'animation**

```typescript
transition={{ 
  opacity: { duration: 0.5 },
  y: { duration: 0.6 },
  scale: { duration: 0.6 },
  ease: [0.43, 0.13, 0.23, 0.96],
}}
```

---

## 📱 Test Mobile (optionnel)

Si vous voulez tester l'animation sur mobile, il faut temporairement retirer le `hidden md:block` du Hero:

**⚠️ À faire uniquement pour test, ne pas commiter !**

Dans `/components/Hero.tsx` ligne ~235:

```tsx
// AVANT (production)
className="hero-full-width relative w-full overflow-visible force-zero-margin hidden md:block"

// APRÈS (test mobile uniquement)
className="hero-full-width relative w-full overflow-visible force-zero-margin"
```

Puis tester sur mobile. **Ne pas oublier de remettre `hidden md:block` après !**

---

## ✅ Critères de Validation

L'animation est **réussie** si:

1. ✅ Le logo Hero apparaît au chargement (fade in depuis le bas)
2. ✅ Au premier scroll > 20px, l'animation se déclenche
3. ✅ Le logo Hero monte et rétrécit de manière fluide
4. ✅ Le logo Header s'agrandit et apparaît avec un léger délai
5. ✅ L'impression visuelle est celle d'un "voyage" du logo Hero → Header
6. ✅ L'animation ne se répète pas lors des scrolls suivants
7. ✅ Aucun saut ou glitch visuel

---

## 🎯 Performance

L'animation utilise:
- ✅ **Transformations GPU** (scale, translateY)
- ✅ **Opacity** (compositée)
- ✅ **will-change** activé pendant l'animation uniquement
- ✅ **Pas de reflow** (pas de changement de layout)

Performance attendue: **60 FPS** constant sur desktop moderne.

---

## 📞 Support

Si l'animation ne fonctionne pas après avoir suivi ce guide:

1. Vérifier les logs console
2. Vérifier la version de Motion (doit être `motion/react`)
3. Vérifier qu'aucune erreur JavaScript n'est présente
4. Essayer de recharger la page (Cmd/Ctrl + Shift + R)
5. Essayer un autre navigateur (Chrome recommandé)

---

**Dernière mise à jour**: 2025-01-14
**Version**: 1.0.0
