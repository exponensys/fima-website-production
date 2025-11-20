# 🔍 Diagnostic de l'Animation - Checklist Complète

## 🎯 **Objectif**
Déterminer pourquoi l'animation du logo ne fonctionne pas.

---

## ✅ **Checklist de Diagnostic**

### **1. Environnement de Test**

```javascript
// Ouvrir la console (F12) et taper:
console.log('Desktop:', window.innerWidth >= 768);
console.log('Largeur:', window.innerWidth, 'px');
```

**Résultat attendu:**
- Desktop: `true`
- Largeur: `>= 768`

**Si NON** → Agrandir la fenêtre ou utiliser DevTools > Responsive > 1024px

---

### **2. Vérifier que le Hero est visible**

```javascript
// Dans la console:
const hero = document.querySelector('.hero-full-width');
console.log('Hero exists:', !!hero);
console.log('Hero visible:', hero && hero.offsetParent !== null);
```

**Résultat attendu:**
- Hero exists: `true`
- Hero visible: `true`

**Si NON** → Le Hero est caché (mobile) ou n'est pas chargé

---

### **3. Vérifier que le logo Hero est présent**

```javascript
// Dans la console:
const heroLogo = document.querySelector('img[alt="Group FIMA"]');
console.log('Hero Logo:', heroLogo);
console.log('Logo src:', heroLogo?.src);
```

**Résultat attendu:**
- Hero Logo: `<img ...>`
- Logo src: URL de l'image

**Si NULL** → Le logo n'est pas rendu

---

### **4. Vérifier que Motion est chargé**

```javascript
// Dans la console:
console.log('Motion loaded:', typeof window !== 'undefined');
```

**Résultat attendu:**
- Motion loaded: `true`

**Si NON** → Problème d'import de Motion

---

### **5. Tester Motion directement**

**Ajouter temporairement le MotionTest:**

Dans `/App.tsx`, après les imports, ajouter:
```tsx
import { MotionTest } from './components/MotionTest';
```

Puis dans le rendu, juste après `<Header>`:
```tsx
<MotionTest />
```

**Résultat attendu:**
- Un carré bleu/violet apparaît en haut à gauche
- Cliquer "Animate!" → Le carré tourne et change de taille

**Si ça marche** → Motion fonctionne ✅
**Si ça ne marche pas** → Problème avec Motion ❌

---

### **6. Vérifier le debugger**

**Le debugger est-il visible ?**
- Coin bas-droit de l'écran
- Fond noir avec texte blanc

**Si OUI:**
- Desktop: ✅ ou ❌ ?
- Scroll Y: valeur en px
- hasScrolled: true ou false ?

**Si NON:**
- Le Hero n'est pas chargé
- Ou le debugger a une erreur

---

### **7. Vérifier les logs console**

**Au chargement de la page:**
```
🎬 Hero - Animation state: { hasScrolled: false, isAnimating: false }
```

**Après scroll > 20px:**
```
📜 Scroll détecté: XX px - Déclenchement dans 50ms
🎬 Logo Animation - Déclenchement !
🎬 Hero - Animation state: { hasScrolled: true, isAnimating: true }
✅ Logo Animation - Terminée
```

**Si AUCUN log:**
- Le Hero ne se charge pas
- Ou le hook ne fonctionne pas

**Si logs au chargement mais PAS au scroll:**
- La détection du scroll ne fonctionne pas
- Ou le seuil n'est pas atteint

---

### **8. Forcer l'animation**

**Méthode 1 - Bouton "Force Animation":**
- Visible dans le debugger (si Desktop + pas scrollé)
- Cliquer dessus

**Méthode 2 - Console:**
```javascript
window.scrollTo({ top: 100, behavior: 'smooth' });
```

**Résultat attendu:**
- L'animation se lance
- Logs dans la console

---

### **9. Inspecter l'élément du logo**

**Clic droit sur le logo Hero → Inspecter**

**Vérifier:**
- Tag: `<img>`
- Classes: contient motion-related classes ?
- Style: `transform`, `opacity` changent au scroll ?

**Au scroll, les styles devraient changer:**
```css
transform: translateY(-300px) scale(0.2);
opacity: 0;
```

---

### **10. Vérifier les erreurs**

**Console → onglet "Console"**

**Erreurs possibles:**
- `Cannot find module 'motion/react'`
- `motion is not defined`
- `Uncaught ReferenceError`
- Erreurs de compilation

---

## 🐛 **Problèmes Courants**

### **Problème 1: Pas d'animation visible**

**Causes possibles:**
1. ❌ Mode mobile (largeur < 768px)
2. ❌ Scroll trop faible (< 20px)
3. ❌ Animation déjà jouée (hasScrolled = true)
4. ❌ Logo caché ou pas chargé

**Solutions:**
1. ✅ Agrandir la fenêtre (≥768px)
2. ✅ Scroller plus fort (>20px)
3. ✅ Recharger la page (Cmd/Ctrl + Shift + R)
4. ✅ Vérifier que le logo existe (point 3 ci-dessus)

---

### **Problème 2: Logo ne disparaît pas**

**Causes possibles:**
1. ❌ hasScrolled ne passe pas à `true`
2. ❌ Motion n'applique pas les styles
3. ❌ Conflit CSS qui override

**Solutions:**
1. ✅ Vérifier les logs console
2. ✅ Inspecter l'élément (point 9)
3. ✅ Tester avec MotionTest (point 5)

---

### **Problème 3: Animation saccadée**

**Causes possibles:**
1. ⚠️ Performance du navigateur
2. ⚠️ Trop d'éléments animés
3. ⚠️ will-change non actif

**Solutions:**
1. ✅ Fermer les autres onglets
2. ✅ Tester dans un navigateur Chromium
3. ✅ Vérifier que `willChange` est dans les styles

---

### **Problème 4: Logs mais pas d'animation**

**Causes possibles:**
1. ❌ Motion n'est pas correctement importé
2. ❌ Les valeurs animate ne sont pas appliquées
3. ❌ Le composant se re-render trop vite

**Solutions:**
1. ✅ Vérifier l'import: `import { motion } from 'motion/react'`
2. ✅ Inspecter les styles inline de l'image
3. ✅ Ajouter un `console.log` dans le composant Hero

---

## 📊 **États de l'Animation**

### **État Initial (page chargée)**
```javascript
hasScrolled: false
isAnimating: false
scrollY: 0
Logo Hero: visible (opacity: 1, y: 0, scale: 1)
Logo Header: normal
```

### **État Scroll Détecté (> 20px)**
```javascript
hasScrolled: true
isAnimating: true
scrollY: > 20
Logo Hero: animating...
Logo Header: animating...
```

### **État Final (animation terminée)**
```javascript
hasScrolled: true
isAnimating: false
scrollY: > 20
Logo Hero: invisible (opacity: 0, y: -300, scale: 0.2)
Logo Header: normal avec flash terminé
```

---

## 🔧 **Actions de Debug Avancées**

### **1. Ajouter des logs dans le hook**

Dans `/hooks/useLogoScrollAnimation.ts`:
```typescript
console.log('🔍 Hook mounted, hasTriggered:', hasTriggered);
```

### **2. Ajouter des logs dans Hero**

Dans `/components/Hero.tsx`:
```typescript
console.log('🔍 Hero render, hasScrolled:', hasScrolled, 'isAnimating:', isAnimating);
```

### **3. Vérifier les props de Motion**

Ajouter juste avant le `<motion.img>`:
```typescript
console.log('🔍 Motion props:', { 
  hasScrolled, 
  animate: { 
    opacity: hasScrolled ? 0 : 1,
    y: hasScrolled ? -300 : 0,
    scale: hasScrolled ? 0.2 : 1,
  }
});
```

---

## ✅ **Test de Validation Final**

Cochez chaque point:

- [ ] Mode Desktop (≥768px)
- [ ] Hero visible dans le DOM
- [ ] Logo Hero présent
- [ ] Debugger visible (coin bas-droit)
- [ ] Logs au chargement de la page
- [ ] Scroll > 20px → Logs de détection
- [ ] Animation visible (logo monte + rétrécit)
- [ ] Logo Header flash visible
- [ ] Pas d'erreurs dans la console

**Si tous cochés** → ✅ **ANIMATION FONCTIONNE !**

**Si manque des cases** → Suivre la checklist depuis le début

---

## 🎬 **Vidéo de Démonstration**

Si vous voulez partager le problème:
1. Enregistrer l'écran (> 768px)
2. Montrer la console (F12 ouvert)
3. Scroller et capturer les logs
4. Montrer le debugger

---

**Date**: 2025-01-14  
**Version**: 1.0  
**Auteur**: Diagnostic Complet
