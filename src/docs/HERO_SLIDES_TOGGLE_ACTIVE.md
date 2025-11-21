# ✅ Hero Slides - Activation/Désactivation au lieu de Suppression

## 🎯 Fonctionnalité implémentée

Au lieu de supprimer définitivement les slides du Hero, l'admin peut maintenant les **activer/désactiver** d'un simple clic. Les slides désactivés sont **masqués du site web** mais restent disponibles dans le CMS pour être réactivés à tout moment.

---

## 🔧 **Modifications effectuées**

### **1. Frontend Site Web - Hero.tsx**

Le composant Hero filtre maintenant uniquement les slides actifs :

```typescript
// /components/Hero.tsx

// Filtrer uniquement les slides actifs et les mapper au format attendu par le Hero
const heroSlides = heroSlidesData
  .filter((slide) => slide.is_active) // ✅ Filtrer les slides actifs uniquement
  .map((slide) => ({
    // ... mapping
  }));
```

**Résultat** : Les slides avec `is_active = false` ne sont **jamais affichés** sur le site web.

---

### **2. CMS - CMSHeroSlides.tsx**

#### **A. Nouveau bouton Toggle Actif/Inactif**

Ajout d'un bouton avec icône d'œil pour activer/désactiver :

```typescript
<button
  onClick={() => handleToggleActive(slide.id, slide.is_active)}
  className={`px-4 py-2 border transition-colors ${
    slide.is_active
      ? 'border-gray-300 text-gray-700 hover:bg-gray-50'
      : 'border-green-300 text-green-600 hover:bg-green-50'
  }`}
  title={slide.is_active ? 'Désactiver le slide' : 'Activer le slide'}
>
  {slide.is_active ? (
    <EyeOffIcon /> // Icône œil barré
  ) : (
    <EyeIcon /> // Icône œil ouvert
  )}
</button>
```

#### **B. Fonction handleToggleActive**

```typescript
const handleToggleActive = async (id: string, currentStatus: boolean) => {
  try {
    const newStatus = !currentStatus;
    const response = await fetch(
      `https://${projectId}.supabase.co/functions/v1/make-server-98c6ec1c/api/hero-slides/${id}`,
      {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${publicAnonKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          is_active: newStatus
        })
      }
    );

    if (!response.ok) {
      throw new Error('Erreur lors de la mise à jour');
    }

    toast.success(newStatus ? 'Slide activé avec succès' : 'Slide désactivé avec succès');
    await refetch();
  } catch (err) {
    console.error('Erreur:', err);
    toast.error('Erreur lors de la mise à jour du slide');
  }
};
```

#### **C. Indicateurs visuels améliorés**

**Badge de statut :**
```typescript
<div className="absolute top-2 left-2">
  <span className={`px-3 py-1.5 text-xs font-semibold text-white shadow-lg ${
    slide.is_active ? 'bg-green-600' : 'bg-red-600'
  }`}>
    {slide.is_active ? '✓ Visible sur le site' : '✕ Masqué du site'}
  </span>
</div>
```

**Ordre du slide :**
```typescript
<div className="absolute top-2 right-2">
  <span className="px-2 py-1 text-xs bg-black bg-opacity-50 text-white">
    Ordre: {slide.sort_order}
  </span>
</div>
```

**Overlay pour slides inactifs :**
```typescript
{!slide.is_active && (
  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
    <div className="text-center">
      <EyeOffIcon className="w-16 h-16 text-white mx-auto mb-2" />
      <p className="text-white font-medium">Masqué du site</p>
    </div>
  </div>
)}
```

**Carte atténuée pour slides inactifs :**
```typescript
<div className={`bg-white border overflow-hidden hover:shadow-lg transition-shadow ${
  slide.is_active ? 'border-gray-200' : 'border-gray-300 bg-gray-50 opacity-75'
}`}>
```

#### **D. Statistiques dans le header**

```typescript
<p className="text-gray-600">
  {slides.length} slides configurés 
  <span className="ml-2 text-green-600 font-medium">
    • {slides.filter(s => s.is_active).length} actifs
  </span>
  {slides.filter(s => !s.is_active).length > 0 && (
    <span className="ml-2 text-red-600 font-medium">
      • {slides.filter(s => !s.is_active).length} masqués
    </span>
  )}
  {slides.filter(s => s.is_video).length > 0 && (
    <span className="ml-2 text-gray-500">
      • {slides.filter(s => s.is_video).length} vidéo(s)
    </span>
  )}
</p>
```

#### **E. Message de confirmation amélioré pour la suppression**

```typescript
const handleDelete = async (id: string) => {
  if (!confirm(
    '⚠️ Êtes-vous sûr de vouloir SUPPRIMER DÉFINITIVEMENT ce slide ?\n\n' +
    'ℹ️ Conseil : Utilisez plutôt le bouton "Désactiver" pour masquer temporairement un slide.'
  )) return;
  
  // ... code de suppression
};
```

---

## 🎨 **Interface CMS - Vue d'ensemble**

### **Slide Actif**
```
┌─────────────────────────────────────┐
│ ✓ Visible sur le site    Ordre: 1  │
│                                     │
│     [Image du slide]                │
│                                     │
├─────────────────────────────────────┤
│ Titre du slide                      │
│ Sous-titre                          │
│ Description...                      │
├─────────────────────────────────────┤
│ [Modifier]  [👁️ Désactiver]  [🗑️]   │
└─────────────────────────────────────┘
```

### **Slide Inactif (Masqué)**
```
┌─────────────────────────────────────┐
│ ✕ Masqué du site     Ordre: 2      │
│                                     │
│     [Image atténuée + overlay]      │
│           👁️ avec barre             │
│        Masqué du site               │
├─────────────────────────────────────┤
│ Titre du slide (carte grisée)      │
│ Sous-titre                          │
│ Description...                      │
├─────────────────────────────────────┤
│ [Modifier]  [👁️ Activer]    [🗑️]    │
└─────────────────────────────────────┘
```

---

## 📊 **Flux d'utilisation**

### **Scénario 1 : Désactiver un slide temporairement**

1. Admin ouvre le CMS → Hero Slides
2. Voit un slide qu'il veut masquer temporairement (ex: promo expirée)
3. Clique sur le bouton **👁️** (œil barré)
4. ✅ Toast : "Slide désactivé avec succès"
5. Le slide devient grisé avec overlay "Masqué du site"
6. Badge change de **"✓ Visible sur le site"** (vert) → **"✕ Masqué du site"** (rouge)
7. Statistiques mises à jour : "6 actifs • 1 masqué"
8. **Sur le site web** : Le slide n'apparaît plus dans le Hero

### **Scénario 2 : Réactiver un slide**

1. Admin voit un slide grisé qu'il veut réactiver
2. Clique sur le bouton **👁️** (œil ouvert) vert
3. ✅ Toast : "Slide activé avec succès"
4. Le slide redevient normal (pas de grisé, pas d'overlay)
5. Badge change de **"✕ Masqué du site"** (rouge) → **"✓ Visible sur le site"** (vert)
6. Statistiques mises à jour : "7 actifs"
7. **Sur le site web** : Le slide réapparaît immédiatement dans le Hero

### **Scénario 3 : Supprimer définitivement**

1. Admin clique sur le bouton **🗑️** (poubelle rouge)
2. Message de confirmation s'affiche :
   ```
   ⚠️ Êtes-vous sûr de vouloir SUPPRIMER DÉFINITIVEMENT ce slide ?
   
   ℹ️ Conseil : Utilisez plutôt le bouton "Désactiver" 
   pour masquer temporairement un slide.
   ```
3. Admin confirme → Slide supprimé de la base de données
4. ✅ Toast : "Slide supprimé définitivement"
5. Le slide disparaît complètement du CMS

---

## 🎯 **Avantages de cette approche**

### **1. Gestion saisonnière simplifiée**
- ✅ Masquer les slides de Noël après les fêtes
- ✅ Réactiver les promos Black Friday chaque année
- ✅ Pas besoin de recréer les slides à chaque fois

### **2. A/B Testing facilité**
- ✅ Désactiver temporairement un slide pour tester l'impact
- ✅ Comparer les performances avec/sans certains slides
- ✅ Réactiver instantanément si besoin

### **3. Gestion d'urgence**
- ✅ Masquer rapidement un slide avec une info périmée
- ✅ Réactiver un slide d'urgence en 1 clic
- ✅ Pas de risque de perte de données

### **4. Workflow éditorial**
- ✅ Préparer des slides à l'avance (créer mais laisser inactifs)
- ✅ Les activer au moment opportun
- ✅ Planifier le contenu sans affecter le site

### **5. Sécurité**
- ✅ Confirmation double pour la suppression définitive
- ✅ Message qui encourage à utiliser la désactivation
- ✅ Évite les suppressions accidentelles

---

## 🔍 **Détails techniques**

### **API Backend**
L'API existante `/api/hero-slides/:id` avec méthode `PUT` permet de mettre à jour uniquement le champ `is_active` :

```json
PUT /api/hero-slides/abc123
{
  "is_active": false
}
```

### **Filtrage Frontend**
Le composant `Hero.tsx` filtre automatiquement :

```typescript
const activeSlides = allSlides.filter(slide => slide.is_active === true);
```

### **Base de données**
Le champ `is_active` (boolean) existe déjà dans la structure :

```typescript
interface HeroSlide {
  id: string;
  is_active: boolean; // ✅ true = visible, false = masqué
  sort_order: number;
  // ... autres champs
}
```

---

## 📋 **Checklist de vérification**

- [x] Hero.tsx filtre les slides actifs uniquement
- [x] CMSHeroSlides affiche le bouton toggle actif/inactif
- [x] Fonction `handleToggleActive()` créée
- [x] Indicateurs visuels pour slides inactifs (grisé + overlay)
- [x] Badge de statut mis à jour (vert/rouge)
- [x] Statistiques dans le header (actifs/masqués)
- [x] Message de confirmation amélioré pour suppression
- [x] Affichage de l'ordre du slide
- [x] Toast notifications pour activation/désactivation
- [x] Refetch des données après toggle
- [x] Design cohérent avec l'identité FIMA

---

## 🚀 **Utilisation recommandée**

### **✅ Utiliser la désactivation pour :**
- Gérer le contenu saisonnier
- Masquer temporairement un slide
- Préparer du contenu à l'avance
- Faire de l'A/B testing
- Gérer les urgences

### **🗑️ Utiliser la suppression pour :**
- Supprimer définitivement du contenu obsolète
- Nettoyer les slides jamais utilisés
- Libérer de l'espace dans la base de données

---

## 📸 **Captures d'écran conceptuelles**

### **Statistiques Header**
```
Gestion des Slides Hero
7 slides configurés • 6 actifs • 1 masqué • 2 vidéo(s)
```

### **Boutons d'action**
```
┌──────────┬──────────────┬──────────┐
│ Modifier │ 👁️ Désactiver │    🗑️    │
└──────────┴──────────────┴──────────┘
     ou
┌──────────┬──────────────┬──────────┐
│ Modifier │ 👁️ Activer    │    🗑️    │
└──────────┴──────────────┴──────────┘
```

---

**Date de création** : 10 Octobre 2025  
**Version** : 1.0.0  
**Statut** : ✅ FONCTIONNALITÉ COMPLÈTE ET OPÉRATIONNELLE
