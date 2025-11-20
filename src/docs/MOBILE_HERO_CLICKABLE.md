# 📱 Mobile Hero Cliquable - Navigation vers Pages Métiers

## 🎯 Objectif

Rendre le Hero mobile entièrement cliquable pour naviguer vers les pages métiers correspondantes (FIMA Couchage, FIMA Design, Univers Glass).

---

## ✅ Implémentation

### **Fonctionnalité Principale**

Le Hero mobile est maintenant **cliquable** avec une logique intelligente de mapping:

```tsx
// Clic sur le Hero → Navigate vers la page métier correspondante
<section onClick={handleHeroClick} className="cursor-pointer">
  {/* Logo FIMA */}
</section>
```

---

## 🗺️ Mapping Slide → Page Métier

### **Logique de Détection:**

La fonction `getPageFromSlideTitle()` analyse le titre du slide pour déterminer la page cible:

```tsx
const getPageFromSlideTitle = (title: string): string => {
  const titleLower = title.toLowerCase();
  
  // FIMA Couchage
  if (titleLower.includes('couchage') || 
      titleLower.includes('literie') || 
      titleLower.includes('matelas')) {
    return 'fima-couchage';
  }
  
  // FIMA Design
  else if (titleLower.includes('design') || 
           titleLower.includes('menuiserie') || 
           titleLower.includes('ameublement')) {
    return 'fima-design';
  }
  
  // Univers Glass
  else if (titleLower.includes('glass') || 
           titleLower.includes('univers glass') || 
           titleLower.includes('vitrerie') || 
           titleLower.includes('aluminium')) {
    return 'univers-glass';
  }
  
  // Fallback par défaut
  return 'all-products';
};
```

### **Exemples de Mapping:**

| Titre du Slide | Mots-clés détectés | Page de destination |
|----------------|-------------------|---------------------|
| "FIMA Couchage" | "couchage" | `/fima-couchage` |
| "Literie Premium" | "literie" | `/fima-couchage` |
| "Matelas de qualité" | "matelas" | `/fima-couchage` |
| "FIMA Design" | "design" | `/fima-design` |
| "Menuiserie sur mesure" | "menuiserie" | `/fima-design` |
| "Ameublement moderne" | "ameublement" | `/fima-design` |
| "Univers Glass" | "glass" | `/univers-glass` |
| "Vitrerie aluminium" | "vitrerie" | `/univers-glass` |
| "Solutions aluminium" | "aluminium" | `/univers-glass` |
| "Groupe FIMA" | *(aucun)* | `/all-products` *(fallback)* |

---

## 🎨 UX/UI Améliorée

### **Indicateurs Visuels:**

1. **Cursor pointer** sur le Hero → Indique que c'est cliquable
2. **Touch-action optimisé** → Interactions tactiles fluides
3. **Logo au centre** → Point focal naturel pour le clic

### **Navigation Controls:**

- **Boutons Prev/Next** → `e.stopPropagation()` pour ne pas déclencher la navigation
- **Indicateurs dots** → `e.stopPropagation()` pour changer de slide sans naviguer
- **Clic sur le Hero** → Navigate vers la page métier

```tsx
// Empêcher la propagation sur les contrôles
<button
  onClick={(e) => {
    e.stopPropagation(); // ✅ Ne déclenche pas handleHeroClick
    goToNextSlide();
  }}
>
  <ChevronRight />
</button>
```

---

## 🧪 Test de Validation

### **Checklist:**

#### **1. Navigation fonctionnelle:**
- [ ] **Clic sur Hero** avec slide "FIMA Couchage" → Navigate vers `/fima-couchage`
- [ ] **Clic sur Hero** avec slide "FIMA Design" → Navigate vers `/fima-design`
- [ ] **Clic sur Hero** avec slide "Univers Glass" → Navigate vers `/univers-glass`
- [ ] **Clic sur Hero** avec slide sans mots-clés → Navigate vers `/all-products`

#### **2. Contrôles indépendants:**
- [ ] **Clic sur bouton Prev** → Change de slide SANS naviguer
- [ ] **Clic sur bouton Next** → Change de slide SANS naviguer
- [ ] **Clic sur dot indicateur** → Change de slide SANS naviguer

#### **3. UX:**
- [ ] **Cursor pointer** visible sur desktop quand on survole le Hero
- [ ] **Touch feedback** responsive sur mobile
- [ ] **Auto-play** continue normalement
- [ ] **Transitions** fluides entre les slides

---

## 📊 Architecture

### **Flux de Navigation:**

```
┌─────────────────────────────────────────────┐
│           Mobile Hero (cliquable)           │
│                                             │
│  ┌───────────────────────────────────┐     │
│  │  Logo FIMA (centré)               │     │
│  │  + Image de fond                  │     │
│  └───────────────────────────────────┘     │
│                                             │
│  onClick → getPageFromSlideTitle()          │
│           ↓                                 │
│     Analyse du titre:                       │
│     • "couchage" → fima-couchage            │
│     • "design" → fima-design                │
│     • "glass" → univers-glass               │
│     • autre → all-products                  │
│           ↓                                 │
│     onNavigate(targetPage)                  │
└─────────────────────────────────────────────┘
           ↓
┌─────────────────────────────────────────────┐
│        App.tsx - handleNavigation()         │
│                                             │
│  switch (targetPage) {                      │
│    case 'fima-couchage':                    │
│      → <FimaCouchagePage />                 │
│    case 'fima-design':                      │
│      → <FimaDesignPage />                   │
│    case 'univers-glass':                    │
│      → <UniversGlassPage />                 │
│  }                                          │
└─────────────────────────────────────────────┘
```

---

## 🎯 Cas d'Usage

### **Scénario 1: Utilisateur découvre FIMA Couchage**

1. **Hero affiche** le slide "FIMA Couchage" avec image de lit
2. **Utilisateur tape** sur le Hero
3. **Navigation** vers `/fima-couchage`
4. **Page métier** s'affiche avec tous les détails literie

### **Scénario 2: Utilisateur explore les métiers**

1. **Auto-play** change les slides: Couchage → Design → Glass
2. **Utilisateur voit** "FIMA Design"
3. **Utilisateur tape** immédiatement
4. **Navigation** vers `/fima-design` avant le prochain slide

### **Scénario 3: Utilisateur navigue manuellement**

1. **Hero affiche** slide 1
2. **Utilisateur tape** sur "Next" (→) → Slide 2 s'affiche
3. **Utilisateur tape** sur le Hero → Navigate vers la page du slide 2
4. **Pas de conflit** entre navigation slides et navigation pages

---

## 🔧 Configuration CMS

### **Pour ajouter un nouveau métier:**

Dans le CMS, créer un slide Hero avec:

**Titre:** Doit contenir un mot-clé reconnu
- ✅ "FIMA Couchage" → Détecté
- ✅ "Nos matelas premium" → Détecté (contient "matelas")
- ✅ "Design d'intérieur" → Détecté (contient "design")
- ❌ "Groupe FIMA" → Pas détecté → Fallback all-products

**Keywords Reconnus:**

| Métier | Keywords |
|--------|----------|
| **FIMA Couchage** | couchage, literie, matelas |
| **FIMA Design** | design, menuiserie, ameublement |
| **Univers Glass** | glass, univers glass, vitrerie, aluminium |

### **Exemple de Configuration CMS:**

```javascript
// Dans Supabase → hero_slides
{
  title: "FIMA Couchage",  // ✅ Contient "couchage"
  subtitle: "LITERIE PREMIUM",
  background_image_url: "...",
  is_active: true
}

// → Clic sur ce slide navigue vers 'fima-couchage'
```

---

## 💡 Améliorations Futures

### **Options à considérer:**

1. **Champ CMS dédié:**
   - Ajouter `target_page` dans la table `hero_slides`
   - Mapping explicite au lieu de détecter par titre
   - Plus flexible, moins de "magie"

2. **Analytics:**
   - Tracker les clics sur Hero
   - Mesurer quel métier attire le plus
   - Optimiser l'ordre des slides

3. **Animation de feedback:**
   - Légère scale au touch
   - Overlay subtil au clic
   - Meilleure confirmation visuelle

4. **Deep linking:**
   - URL avec paramètre de slide
   - `/#hero-slide-2`
   - Partage direct d'un slide spécifique

---

## 🐛 Debugging

### **Si le clic ne fonctionne pas:**

**1. Vérifier la propagation:**
```javascript
// Console DevTools
const hero = document.querySelector('section');
hero.addEventListener('click', (e) => {
  console.log('Hero clicked!', e.target);
});
```

**2. Vérifier le mapping:**
```javascript
// Dans MobileHero.tsx, ajouter temporairement:
console.log('Current slide title:', currentHeroSlide.title);
console.log('Target page:', getPageFromSlideTitle(currentHeroSlide.title));
```

**3. Vérifier que onNavigate est bien appelé:**
```javascript
// Dans handleHeroClick
const handleHeroClick = () => {
  const targetPage = getPageFromSlideTitle(currentHeroSlide.title);
  console.log('🔄 Navigating to:', targetPage);
  onNavigate(targetPage);
};
```

**4. Vérifier les event listeners:**
- Les boutons Prev/Next/Dots ont bien `e.stopPropagation()`
- Le Hero parent a bien `onClick={handleHeroClick}`
- Le logo a `pointerEvents: 'none'` (clics passent au parent)

---

## 📝 Résumé

### **Avant:**
- ❌ Hero mobile = Image statique
- ❌ Pas d'interaction
- ❌ Utilisateur doit chercher le menu

### **Après:**
- ✅ Hero mobile = Call-to-action géant
- ✅ Clic intuitif sur logo/image
- ✅ Navigation directe vers métiers
- ✅ Contrôles de slides indépendants
- ✅ UX optimisée pour mobile

---

**Date:** 2025-01-15  
**Version:** 1.0  
**Status:** ✅ **IMPLÉMENTÉ**  
**Fichier:** `/components/MobileHero.tsx`  
**Testé:** En attente de validation utilisateur
