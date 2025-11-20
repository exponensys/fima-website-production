# 📱 Guide de Test - Refactorisation Mobile Anti-Bounce

## 🎯 Objectif

Tester la nouvelle architecture mobile avec MobileHeader et MobileHero pour vérifier que:
1. ✅ Pas d'erreurs au chargement
2. ✅ Pas de bounce sur le header et le hero
3. ✅ Tous les éléments fonctionnent correctement
4. ✅ Le design FIMA est préservé

---

## 🔧 Correctifs Appliqués

### **Erreur Corrigée:**
```
TypeError: Cannot read properties of undefined (reading 'reduce')
at MobileHeader (components/MobileHeader.tsx:39:26)
```

### **Solution:**
```tsx
// AVANT (❌ Erreur si cart est undefined)
const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

// APRÈS (✅ Sécurisé avec optional chaining)
const totalItems = cart?.reduce((sum, item) => sum + item.quantity, 0) || 0;
```

**Autres correctifs:**
- `favorites?.length || 0` au lieu de `favorites.length`
- Ajout du prop `isMobile` dans tous les usages de `MemoizedHomeView`

---

## ✅ Checklist de Test Mobile

### **1. Chargement Initial (Critical)**

- [ ] **Ouvrir en mode mobile** (DevTools → Toggle device toolbar → 375x667)
- [ ] **Pas d'erreur dans la console** - Vérifier qu'il n'y a pas de red errors
- [ ] **Header s'affiche** - Logo FIMA + Menu + Panier visible
- [ ] **Hero s'affiche** - Image de fond + Texte + CTA visible
- [ ] **Page scroll** - La page scroll normalement

**Console attendue:**
```
✅ Aucune erreur rouge
✅ Possibles logs: "🏠 AppContent - Vue actuelle: home"
```

---

### **2. Header Mobile**

#### **Structure:**
- [ ] **Background gris** (#565757) ✓
- [ ] **Logo FIMA centré** (blanc/vert) ✓
- [ ] **Menu hamburger à gauche** (icône ☰) ✓
- [ ] **Panier à droite** (icône 🛒) ✓
- [ ] **Barre de recherche** en dessous ✓

#### **Interactions:**
- [ ] **Clic sur logo** → Retour à l'accueil
- [ ] **Clic sur menu** → Menu s'ouvre
- [ ] **Clic sur panier** → Navigate vers checkout
- [ ] **Input recherche** → Pas de zoom iOS (font-size 16px)

#### **Menu Hamburger:**
- [ ] **Menu s'ouvre** - Full screen overlay
- [ ] **Accueil** visible
- [ ] **Nos Produits** visible
- [ ] **Nos Métiers** (3 options: Couchage, Design, Univers Glass)
- [ ] **Nos Projets** visible
- [ ] **Mes Favoris** avec compteur
- [ ] **Mon Compte** ou **Se connecter**
- [ ] **Clic sur item** → Menu se ferme + Navigation fonctionne
- [ ] **Clic sur X** → Menu se ferme

---

### **3. Hero Mobile**

#### **Structure:**
- [ ] **Hauteur ~60vh** (pas tout l'écran)
- [ ] **Image de fond** visible
- [ ] **Gradient overlay** noir semi-transparent
- [ ] **Badge** en haut (ex: "100 NUITS D'ESSAI")
- [ ] **Subtitle** en vert (#B5C233)
- [ ] **Titre** en blanc, grande taille
- [ ] **Description** en blanc semi-transparent
- [ ] **Bouton CTA** avec texte + flèche

#### **Interactions:**
- [ ] **Auto-play slides** - Change après 5 secondes
- [ ] **Bouton Prev** (←) fonctionne
- [ ] **Bouton Next** (→) fonctionne
- [ ] **Indicateurs dots** changent avec les slides
- [ ] **Clic sur dot** change le slide
- [ ] **Clic sur CTA** → Navigate vers produits

---

### **4. Anti-Bounce Test**

#### **Test du Header:**
- [ ] **Scroll vers le haut** - Pas d'espace blanc au-dessus du header ?
- [ ] **Pull down** (tirer vers le bas) - Pas de rebond blanc ?
- [ ] **Header reste en place** - Ne flotte pas, scroll avec la page ?

#### **Test du Hero:**
- [ ] **Scroll rapide** de haut en bas plusieurs fois
- [ ] **Pas d'espace blanc** qui apparaît en haut ou en bas ?
- [ ] **Hero reste stable** - Pas de glitches visuels ?

#### **Test Global:**
- [ ] **Pull-to-refresh désactivé** - Ne rafraîchit pas la page en tirant ?
- [ ] **Scroll horizontal bloqué** - Pas de scroll gauche/droite ?
- [ ] **Menu ouvert** → Scroll de la page bloqué ?
- [ ] **Menu fermé** → Scroll de la page débloqué ?

---

### **5. Navigation & Fonctionnalités**

#### **Depuis le Header:**
- [ ] **Logo** → Retour accueil ✓
- [ ] **Menu > Nos Produits** → Page produits ✓
- [ ] **Menu > FIMA Couchage** → Page métier ✓
- [ ] **Menu > Mes Favoris** → Modal favoris ✓
- [ ] **Panier** → Page checkout ✓

#### **Depuis le Hero:**
- [ ] **CTA "Découvrir"** → Page produits ✓
- [ ] **Slide change automatique** ✓
- [ ] **Navigation manuelle** ✓

---

### **6. Design FIMA Préservé**

#### **Couleurs:**
- [ ] **Header:** Gris #565757 ✓
- [ ] **Logo:** Original FIMA ✓
- [ ] **Subtitle Hero:** Vert #B5C233 ✓
- [ ] **Badge:** Vert #B5C233 ✓
- [ ] **CTA Button:** Blanc avec texte vert ✓

#### **Typographie:**
- [ ] **Titres:** Montserrat ✓
- [ ] **Texte:** Inter ✓
- [ ] **Hiérarchie:** Claire et lisible ✓

#### **Espacement:**
- [ ] **Padding header:** Confortable ✓
- [ ] **Espacement hero:** Aéré ✓
- [ ] **Marges globales:** Cohérentes ✓

---

### **7. Responsive Behavior**

#### **Portrait → Paysage:**
- [ ] **Rotation device** fonctionne
- [ ] **Header s'adapte**
- [ ] **Hero s'adapte**
- [ ] **Pas de débordement**

#### **Différentes tailles:**
- [ ] **iPhone SE (375px)** ✓
- [ ] **iPhone 12 (390px)** ✓
- [ ] **Pixel 5 (393px)** ✓
- [ ] **Samsung S20 (412px)** ✓

---

### **8. Performance**

#### **Chargement:**
- [ ] **Temps de chargement** < 2 secondes
- [ ] **Pas de flash** de contenu non-stylisé
- [ ] **Images** se chargent progressivement

#### **Interactions:**
- [ ] **Ouverture menu** instantanée
- [ ] **Changement slides** fluide
- [ ] **Navigation** rapide

---

## 🐛 Debugging

### **Si erreur persiste:**

**1. Vérifier les imports:**
```tsx
// Dans App.tsx
import { MobileHeader } from "./components/MobileHeader";
import { MobileHero } from "./components/MobileHero";
import { MobileLayout } from "./components/MobileLayout";
```

**2. Vérifier le contexte:**
```tsx
// Dans MobileHeader.tsx
const { cart, favorites } = useApp(); // ✅ Doit être dans AppProvider
```

**3. Vérifier isMobile:**
```javascript
// Console
window.innerWidth <= 768
// Devrait retourner true sur mobile
```

**4. Vérifier les composants rendus:**
```javascript
// Console
document.querySelector('header').className
// Devrait contenir "bg-white relative"
```

---

## 📊 Résultats Attendus

### **✅ Succès si:**
1. Aucune erreur dans la console
2. Header et Hero s'affichent correctement
3. Pas de bounce blanc visible
4. Toutes les interactions fonctionnent
5. Design FIMA préservé

### **❌ Échec si:**
1. Erreur "Cannot read properties of undefined"
2. Bounce blanc persiste
3. Header sticky/fixed au lieu de relative
4. Hero prend tout l'écran (min-h-screen)
5. Menu ne s'ouvre/ferme pas

---

## 🚀 Prochaines Étapes

### **Si tous les tests passent:**
1. ✅ Tester sur de vrais devices (iPhone, Android)
2. ✅ Valider avec différents navigateurs (Safari, Chrome, Firefox)
3. ✅ Tester les autres pages (produits, projets, etc.)
4. ✅ Documenter dans README principal

### **Si bounce persiste encore:**
1. Activer les logs de debug dans MobileLayout
2. Vérifier que les CSS sont appliqués (globals.css)
3. Essayer d'ajouter `will-change: auto` sur header/hero
4. Envisager `position: fixed` avec hack transform

---

## 📝 Notes

### **Différences Mobile vs Desktop:**

| Composant | Desktop | Mobile |
|-----------|---------|--------|
| **Header** | Header.tsx (sticky) | MobileHeader.tsx (relative) |
| **Hero** | Hero.tsx (min-h-screen) | MobileHero.tsx (60vh) |
| **Menu** | Dropdowns fixed | Full-screen overlay |
| **Logo** | Animation au scroll | Statique |

### **Architecture:**
```
App.tsx
  └─ isMobile ? (
       MobileLayout
         └─ MobileHeader
         └─ MobileHero
         └─ Content
     ) : (
       Header
       └─ Hero
       └─ Content
     )
```

---

**Date:** 2025-01-15  
**Version:** 2.1 (Post-Fix)  
**Status:** ✅ **PRÊT POUR TEST**  
**Prochaine action:** Ouvrir en mode mobile et dérouler la checklist
