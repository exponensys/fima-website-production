# Guide de Persistence de Navigation FIMA

## 🎯 Objectif

Ce système permet de **maintenir la page actuelle lors du rechargement** de l'application. Plus besoin de retourner à l'accueil et de naviguer à nouveau vers la page souhaitée.

## ✨ Fonctionnalités

### 1. **Persistence d'URL**
- Chaque page a maintenant une URL unique et partageable
- Exemples :
  - `/fima-design` → Page FIMA Design
  - `/category-detail/cuisine` → Détail de la catégorie Cuisine
  - `/product/123` → Page produit
  - `/products?category=Matelas` → Tous les produits filtrés par catégorie

### 2. **Sauvegarde automatique**
- L'état de navigation est sauvegardé automatiquement dans :
  - **localStorage** : pour la persistence des données
  - **URL du navigateur** : pour les URLs partageables

### 3. **Restauration au rechargement**
- Lors du rechargement (F5 ou Ctrl+R), vous restez sur la même page
- Les données de la page sont restaurées automatiquement

### 4. **Historique du navigateur**
- Les boutons retour/avant du navigateur fonctionnent correctement
- Chaque changement de page crée une entrée dans l'historique

### 5. **Titre de page dynamique**
- Le titre de l'onglet change selon la page actuelle
- Améliore le SEO et l'expérience utilisateur

## 🏗️ Architecture

### Hook principal : `useNavigationPersistence`

Localisation : `/hooks/useNavigationPersistence.ts`

**Fonctions exposées :**
```typescript
const {
  saveNavigationState,      // Sauvegarde l'état actuel
  restoreNavigationState,   // Restaure l'état au chargement
  clearNavigationState      // Efface l'état (retour à l'accueil)
} = useNavigationPersistence();
```

### Intégration dans App.tsx

Le hook est intégré dans le composant `AppContent` :

1. **Au montage** : Restaure l'état depuis l'URL ou localStorage
2. **À chaque changement** : Sauvegarde l'état automatiquement
3. **Bouton retour** : Gère les événements `popstate` du navigateur

## 📋 Structure des URLs

| Page | URL | État sauvegardé |
|------|-----|----------------|
| Accueil | `/` | - |
| FIMA Couchage | `/fima-couchage` | - |
| FIMA Design | `/fima-design` | - |
| Univers Glass | `/univers-glass` | - |
| Catégorie Detail | `/category-detail/cuisine` | Slug de catégorie |
| Tous les produits | `/products` | - |
| Produits filtrés | `/products?category=Matelas` | Filtre de catégorie |
| Détail produit | `/product/123` | ID du produit |
| Tous les projets | `/projects` | - |
| Détail projet | `/project/123` | ID du projet |
| Détail article | `/article/123` | ID de l'article |
| Connexion | `/login` | - |
| Inscription | `/signup` | - |
| Mon compte | `/account` | - |
| Panier | `/checkout` | - |
| CMS | `/cms` | - |

## 🔧 Utilisation pour les développeurs

### Comment tester

1. **Naviguer vers une page** : 
   - Cliquez sur "FIMA Design" depuis l'accueil
   
2. **Recharger la page** : 
   - Appuyez sur F5 ou Ctrl+R
   - ✅ Vous devez rester sur la page FIMA Design

3. **Vérifier l'URL** :
   - L'URL doit afficher `/fima-design`
   - Le titre de l'onglet doit afficher "FIMA Design - Menuiserie & Ameublement"

4. **Tester le bouton retour** :
   - Cliquez sur le bouton retour du navigateur
   - ✅ Vous devez retourner à la page précédente

### Ajouter une nouvelle page avec persistence

Si vous ajoutez une nouvelle page, suivez ces étapes :

1. **Ajouter le type de vue dans `App.tsx`** :
```typescript
type ViewType = 
  | 'home' 
  | 'ma-nouvelle-page'  // ← Ajouter ici
  | ... ;
```

2. **Ajouter le mapping URL dans `useNavigationPersistence.ts`** :

Dans `getUrlFromState()` :
```typescript
case 'ma-nouvelle-page':
  return '/ma-nouvelle-page';
```

Dans `getStateFromUrl()` :
```typescript
if (path === '/ma-nouvelle-page') {
  return { view: 'ma-nouvelle-page' };
}
```

3. **Ajouter le titre dans `App.tsx`** :
```typescript
const titles: Record<ViewType, string> = {
  'ma-nouvelle-page': 'Ma Nouvelle Page - FIMA',
  // ...
};
```

## 🐛 Dépannage

### Problème : La page ne se restaure pas après rechargement

**Solutions** :
1. Vérifiez que le localStorage n'est pas désactivé dans le navigateur
2. Ouvrez la console et cherchez les erreurs liées à `useNavigationPersistence`
3. Vérifiez que la page a bien une entrée dans `getUrlFromState()` et `getStateFromUrl()`

### Problème : L'URL ne change pas lors de la navigation

**Solutions** :
1. Vérifiez que `saveNavigationState()` est bien appelé
2. Ouvrez les DevTools → Application → Local Storage
3. Cherchez la clé `fima_navigation_state` et vérifiez son contenu

### Problème : Le bouton retour ne fonctionne pas correctement

**Solutions** :
1. Assurez-vous que `window.history.pushState()` est appelé correctement
2. Vérifiez que l'event listener `popstate` est bien enregistré
3. Regardez la console pour les logs `Navigation arrière détectée:`

## 📊 Données sauvegardées

Les données suivantes sont sauvegardées dans le localStorage :

```typescript
interface NavigationState {
  view: ViewType;                    // Page actuelle
  selectedProduct?: any;             // Produit sélectionné (si applicable)
  selectedProject?: any;             // Projet sélectionné (si applicable)
  selectedArticle?: any;             // Article sélectionné (si applicable)
  selectedCategory?: string;         // Catégorie sélectionnée (si applicable)
  categoryDetailSlug?: string;       // Slug de catégorie détail (si applicable)
  selectedOrderId?: string;          // ID de commande (si applicable)
  initialCategoryFilter?: string;    // Filtre de catégorie initial (si applicable)
}
```

## 🔒 Sécurité

- **Pas de données sensibles** : Seules les données de navigation sont sauvegardées
- **localStorage** : Les données restent locales au navigateur
- **Pas de tokens** : Les tokens d'authentification ne sont PAS sauvegardés dans ce système

## 🚀 Améliorations futures possibles

1. **Cache des données** : 
   - Sauvegarder les données des produits/projets pour éviter de les recharger

2. **Gestion avancée de l'historique** :
   - Implémenter un système de breadcrumbs basé sur l'historique

3. **URLs SEO-friendly** :
   - Utiliser les slugs au lieu des IDs dans les URLs
   - Exemple : `/product/matelas-orthopedique-premium` au lieu de `/product/123`

4. **Analytics** :
   - Tracker les changements de page avec Google Analytics

5. **Deep linking** :
   - Supporter les URLs complexes avec plusieurs paramètres

## 📝 Notes importantes

- ⚠️ **Pas de React Router** : Ce système est custom et n'utilise pas React Router
- ⚠️ **localStorage limité** : Attention à la taille des données sauvegardées (limite ~5MB)
- ✅ **Compatible mobile** : Fonctionne sur tous les navigateurs modernes
- ✅ **SEO-friendly** : Les URLs sont indexables par les moteurs de recherche

## 🎓 Ressources

- [History API - MDN](https://developer.mozilla.org/fr/docs/Web/API/History_API)
- [localStorage - MDN](https://developer.mozilla.org/fr/docs/Web/API/Window/localStorage)
- [popstate event - MDN](https://developer.mozilla.org/fr/docs/Web/API/Window/popstate_event)

---

**Dernière mise à jour** : 5 novembre 2025
**Version** : 1.0.0
**Auteur** : Équipe FIMA Dev
