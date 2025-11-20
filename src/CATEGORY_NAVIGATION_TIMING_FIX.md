# Fix: Timing de navigation vers les pages de détail des catégories

## 🐛 Problème

L'erreur suivante apparaissait lors de la navigation vers une page de détail de catégorie :

```
❌ No category selected, redirecting to fima-design
```

### Cause racine

Le problème était un **timing issue** avec les states React :

1. Quand on appelait `handleNavigation('category-detail', 'salon')`, le code faisait :
   ```typescript
   setSelectedCategory(category);  // State 1 update
   setCurrentView('category-detail');  // State 2 update
   ```

2. React effectue un **re-render entre les deux `setState`**
3. Le composant `CategoryDetailPage` était rendu avec l'**ancien state** de `selectedCategory` (vide)
4. La condition `if (!selectedCategory)` était donc vraie, causant la redirection

### Schéma du problème

```
T0: selectedCategory = ''
T1: Appel handleNavigation('category-detail', 'salon')
T2: setSelectedCategory('salon') ← État mis en file d'attente
T3: setCurrentView('category-detail') ← État mis en file d'attente
T4: React re-render avec selectedCategory = '' (ancien état!)
T5: if (!selectedCategory) → true → Redirection
T6: React applique selectedCategory = 'salon' (trop tard!)
```

## ✅ Solution appliquée

### 1. Nouveau state dédié : `categoryDetailSlug`

Au lieu d'utiliser `selectedCategory` (qui était partagé avec d'autres vues), on crée un state spécifique pour la page de détail :

```typescript
const [categoryDetailSlug, setCategoryDetailSlug] = useState<string>('');
```

### 2. Mise à jour dans `handleNavigation`

```typescript
case 'category-detail':
  console.log('🔍 App.tsx - Navigating to category-detail with slug:', category);
  if (category && category.trim() !== '') {
    console.log('✅ App.tsx - Valid slug received:', category);
    setCategoryDetailSlug(category);  // Un seul setState avec le slug
    setCurrentView('category-detail');
  } else {
    console.error('❌ App.tsx - No category slug provided for category-detail');
  }
  break;
```

### 3. Utilisation dans le rendu

```typescript
case 'category-detail':
  if (!categoryDetailSlug || categoryDetailSlug.trim() === '') {
    console.error('❌ No category slug, redirecting to fima-design');
    handleNavigation('fima-design');
    return <LoadingSpinner />;
  }
  console.log('✅ Rendering CategoryDetailPage with slug:', categoryDetailSlug);
  return (
    <CategoryDetailPage 
      categorySlug={categoryDetailSlug}
      onNavigate={handleNavigation}
    />
  );
```

### 4. Reset automatique du slug

Quand on navigue vers une autre page, on reset le slug :

```typescript
const handleNavigation = useCallback((page: string, category?: string, data?: any) => {
  // Reset du slug de catégorie si on ne navigue pas vers category-detail
  if (page !== 'category-detail') {
    setCategoryDetailSlug('');
  }
  // ... reste du code
```

### 5. Logs de debug améliorés

```typescript
useEffect(() => {
  console.log('🏠 AppContent - Vue actuelle:', currentView);
  if (currentView === 'category-detail') {
    console.log('📂 AppContent - Category detail slug:', categoryDetailSlug);
  }
}, [currentView, categoryDetailSlug]);
```

## 🎯 Avantages de cette solution

1. ✅ **Séparation des responsabilités** : `categoryDetailSlug` est uniquement pour la page de détail
2. ✅ **Pas de timing issue** : Le slug est directement disponible lors du rendu
3. ✅ **Reset automatique** : Le slug est nettoyé lors de la navigation vers d'autres pages
4. ✅ **Traçabilité** : Logs détaillés à chaque étape
5. ✅ **Pas de setTimeout** : Solution propre sans hacks

## 🧪 Tests à effectuer

1. **Navigation basique** :
   - Aller sur FIMA Design
   - Cliquer sur "Salon"
   - Vérifier que la page se charge sans redirection

2. **Navigation multiple** :
   - Cliquer sur "Salon" → Vérifier le chargement
   - Retour à FIMA Design
   - Cliquer sur "Cuisine" → Vérifier le chargement
   - Etc.

3. **Vérifier les logs** :
   ```
   ✅ App.tsx - Valid slug received: salon
   🏠 AppContent - Vue actuelle: category-detail
   📂 AppContent - Category detail slug: salon
   ✅ Rendering CategoryDetailPage with slug: salon
   🔍 CategoryDetailPage - Loading category: salon
   ✅ Category found: Salon
   📷 Images for category: Salon : 3 images
   ```

4. **Navigation vers d'autres pages** :
   - Vérifier que le slug est bien reset
   - Pas de résidu dans les logs

## 📊 Flux de données corrigé

```
Clic sur catégorie "Salon"
    ↓
ProductCategoryCarousel.onClick('salon')
    ↓
FimaDesignPage.onNavigate('category-detail', 'salon')
    ↓
App.handleNavigation('category-detail', 'salon')
    ↓
setCategoryDetailSlug('salon') ← State dédié!
setCurrentView('category-detail')
    ↓
React re-render avec categoryDetailSlug = 'salon' ✅
    ↓
CategoryDetailPage reçoit categorySlug='salon'
    ↓
Page s'affiche correctement ✅
```

## 🔗 Fichiers modifiés

1. `/App.tsx`
   - Ajout du state `categoryDetailSlug`
   - Mise à jour de `handleNavigation`
   - Mise à jour du rendu du `case 'category-detail'`
   - Ajout du reset automatique
   - Logs améliorés

## 📝 Notes importantes

- Cette solution peut être appliquée à d'autres vues si elles rencontrent le même problème
- Le pattern "un state dédié par vue" est plus robuste que le partage de states
- React 18 avec `useDeferredValue` ou `useTransition` pourrait aussi résoudre ce type de problème, mais cette solution est plus simple

## 📅 Date

4 novembre 2025
