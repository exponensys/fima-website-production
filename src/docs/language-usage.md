# Guide d'utilisation du système de langues FIMA

## Vue d'ensemble

Le site FIMA supporte plusieurs langues grâce à un système de traductions centralisé. Les traductions sont gérées via un fichier de ressources et accessibles facilement dans tous les composants.

## Langues supportées

- **FR** (Français) - Langue par défaut 🇫🇷
- **EN** (English) - Anglais 🇬🇧

## Utilisation dans les composants

### 1. Hook useLanguage

Le moyen le plus simple d'utiliser les traductions :

```tsx
import { useLanguage } from '../hooks/useLanguage';

function MonComposant() {
  const { t, selectedLanguage } = useLanguage();
  
  return (
    <div>
      <h1>{t('products.title')}</h1>
      <button>{t('products.addToCart')}</button>
      <p>Langue actuelle: {selectedLanguage}</p>
    </div>
  );
}
```

### 2. Changer de langue

```tsx
import { useLanguage } from '../hooks/useLanguage';

function LanguageSelector() {
  const { selectedLanguage, changeLanguage } = useLanguage();
  
  return (
    <select 
      value={selectedLanguage} 
      onChange={(e) => changeLanguage(e.target.value as LanguageCode)}
    >
      <option value="FR">🇫🇷 Français</option>
      <option value="EN">🇬🇧 English</option>
    </select>
  );
}
```

### 3. Accès direct au contexte

```tsx
import { useApp } from '../contexts/AppContext';

function MonComposant() {
  const { selectedLanguage, setSelectedLanguage } = useApp();
  
  // ...
}
```

## Clés de traduction disponibles

### Navigation
- `nav.home` - Accueil / Home
- `nav.products` - Produits / Products
- `nav.cart` - Panier / Cart
- `nav.account` - Mon compte / My Account
- `nav.login` - Se connecter / Login
- `nav.logout` - Déconnexion / Logout

### Header
- `header.search` - Rechercher... / Search...
- `header.businessUnits` - Nos Métiers / Our Services
- `header.catalogue` - Catalogue / Catalogue

### Business Units
- `business.fimaCouchage` - FIMA Couchage / FIMA Bedding
- `business.fimaCouchage.desc` - Description du métier
- `business.fimaDesign` - FIMA Design / FIMA Design
- `business.universGlass` - UNIVERS GLASS / UNIVERS GLASS

### Hero
- `hero.title` - Confort & Design depuis 1985
- `hero.subtitle` - Leader ouest-africain...
- `hero.cta.catalogue` - Découvrir le catalogue
- `hero.cta.quote` - Demander un devis

### Products
- `products.title` - Nos Produits / Our Products
- `products.addToCart` - Ajouter au panier / Add to Cart
- `products.viewAll` - Voir tous les produits / View All Products
- `products.inStock` - En stock / In Stock
- `products.newProduct` - Nouveau / New
- `products.bestseller` - Meilleure vente / Bestseller

### Cart
- `cart.title` - Panier / Cart
- `cart.empty` - Votre panier est vide / Your cart is empty
- `cart.subtotal` - Sous-total / Subtotal
- `cart.shipping` - Livraison / Shipping
- `cart.total` - Total / Total
- `cart.checkout` - Procéder au paiement / Proceed to Checkout
- `cart.remove` - Supprimer / Remove

### Favorites
- `favorites.title` - Mes Favoris / My Favorites
- `favorites.addedToFavorites` - Ajouté aux favoris ! / Added to favorites!
- `favorites.removedFromFavorites` - Retiré des favoris / Removed from favorites

### Quote Request
- `quote.title` - Demande de devis / Request a Quote
- `quote.name` - Nom complet / Full Name
- `quote.email` - Email / Email
- `quote.submit` - Envoyer la demande / Submit Request
- `quote.success` - Demande envoyée avec succès !

### Common (Commun)
- `common.back` - Retour / Back
- `common.next` - Suivant / Next
- `common.save` - Enregistrer / Save
- `common.cancel` - Annuler / Cancel
- `common.close` - Fermer / Close
- `common.loading` - Chargement... / Loading...
- `common.error` - Erreur / Error
- `common.search` - Rechercher / Search
- `common.filter` - Filtrer / Filter

## Ajouter de nouvelles traductions

### 1. Modifier le fichier `/utils/translations.ts`

```tsx
export const translations = {
  FR: {
    // ... traductions existantes
    'monNouveau.texte': 'Mon nouveau texte en français',
  },
  EN: {
    // ... traductions existantes
    'monNouveau.texte': 'My new text in English',
  }
};
```

### 2. Utiliser la nouvelle clé

```tsx
function MonComposant() {
  const { t } = useLanguage();
  
  return <p>{t('monNouveau.texte')}</p>;
}
```

## Conventions de nommage

Les clés de traduction suivent une structure hiérarchique :

- **Catégorie.élément** : Structure de base
- Exemples :
  - `nav.home` - Navigation > Accueil
  - `products.addToCart` - Products > Ajouter au panier
  - `common.save` - Commun > Enregistrer

## Stockage et persistance

La langue sélectionnée est automatiquement :
- Stockée dans `localStorage` (clé: `fima-language`)
- Restaurée au chargement de la page
- Synchronisée avec le contexte global `AppContext`

## Exemple complet d'utilisation

```tsx
import { useLanguage } from '../hooks/useLanguage';
import { useCurrency } from '../hooks/useCurrency';

function ProductCard({ product }) {
  const { t } = useLanguage();
  const { formatPrice } = useCurrency();
  
  return (
    <div className="product-card">
      <h3>{product.title}</h3>
      <p className="price">{formatPrice(product.price)}</p>
      
      <button className="fima-btn-primary">
        {t('products.addToCart')}
      </button>
      
      <a href="#" className="learn-more">
        {t('products.learnMore')}
      </a>
    </div>
  );
}
```

## Bonnes pratiques

1. **Toujours utiliser des clés de traduction** plutôt que du texte en dur
2. **Grouper les traductions par section** (nav, products, cart, etc.)
3. **Garder les clés courtes et descriptives**
4. **Éviter les traductions trop longues** dans les clés
5. **Tester dans toutes les langues** avant de déployer

## Traductions avec variables (Future)

Pour une version future avec variables dynamiques :

```tsx
// À implémenter
const { t } = useLanguage();
const message = t('cart.itemCount', { count: 5 });
// → "5 articles" (FR) ou "5 items" (EN)
```

## Notes importantes

- La langue par défaut est **FR** (Français)
- Les traductions manquantes reviennent automatiquement au français
- Le changement de langue est instantané et global
- Les traductions sont chargées au démarrage de l'application (pas de lazy loading)

## Support technique

Pour ajouter une nouvelle langue :

1. Ajouter le code langue dans `LanguageCode` type
2. Ajouter l'objet `Language` dans `LANGUAGES`
3. Copier toutes les traductions FR et les traduire
4. Mettre à jour le sélecteur de langue dans le Header
5. Tester l'intégralité du site dans la nouvelle langue

## Combinaison avec les devises

Le système de langues fonctionne en parallèle avec le système de devises :

```tsx
import { useLanguage } from '../hooks/useLanguage';
import { useCurrency } from '../hooks/useCurrency';

function Header() {
  const { t, selectedLanguage, changeLanguage } = useLanguage();
  const { formatPrice, selectedCurrency } = useCurrency();
  
  return (
    <header>
      <p>{t('header.welcome')}</p>
      <p>{formatPrice(500)} - Langue: {selectedLanguage}</p>
    </header>
  );
}
```

Les deux systèmes sont indépendants : un utilisateur peut choisir Anglais avec des prix en Franc CFA, ou Français avec des prix en USD.
