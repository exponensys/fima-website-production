# Guide d'utilisation du système de devises FIMA

## Vue d'ensemble

Le site FIMA supporte plusieurs devises grâce à un système de conversion centralisé. Les prix sont stockés en EUR (devise de base) et convertis dynamiquement selon la devise sélectionnée par l'utilisateur.

## Devises supportées

- **XOF** (Franc CFA) - Devise par défaut - Taux fixe : 655.957 F CFA = 1 EUR
- **EUR** (Euro) - Devise de base
- **USD** (Dollar américain) - Taux approximatif : 1.09 USD = 1 EUR
- **GBP** (Livre sterling) - Taux approximatif : 0.86 GBP = 1 EUR

## Utilisation dans les composants

### 1. Hook useCurrency

Le moyen le plus simple d'utiliser les devises :

```tsx
import { useCurrency } from '../hooks/useCurrency';

function MonComposant() {
  const { formatPrice, selectedCurrency } = useCurrency();
  
  // Prix de base en EUR
  const priceEUR = 500;
  
  return (
    <div>
      <p>Prix: {formatPrice(priceEUR)}</p>
      {/* Affichera automatiquement dans la devise sélectionnée */}
      {/* Ex: "327 978 F CFA" ou "€500.00" */}
    </div>
  );
}
```

### 2. Avec prix barré (réduction)

```tsx
import { useCurrency } from '../hooks/useCurrency';

function ProductPrice() {
  const { formatPriceWithDiscount } = useCurrency();
  
  const currentPrice = 400; // EUR
  const originalPrice = 500; // EUR
  
  const prices = formatPriceWithDiscount(currentPrice, originalPrice);
  
  return (
    <div>
      <span className="line-through">{prices.originalPrice}</span>
      <span className="text-red-600">{prices.price}</span>
    </div>
  );
}
```

### 3. Accès direct au contexte

```tsx
import { useApp } from '../contexts/AppContext';

function CurrencySelector() {
  const { selectedCurrency, setSelectedCurrency } = useApp();
  
  return (
    <select 
      value={selectedCurrency} 
      onChange={(e) => setSelectedCurrency(e.target.value as CurrencyCode)}
    >
      <option value="XOF">F CFA</option>
      <option value="EUR">€</option>
      <option value="USD">$</option>
      <option value="GBP">£</option>
    </select>
  );
}
```

## Fonctions utilitaires

### formatCurrency

Convertit et formate un prix EUR vers une devise spécifique :

```tsx
import { formatCurrency } from '../utils/currency';

const priceInCFA = formatCurrency(100, 'XOF'); // "65 596 F CFA"
const priceInUSD = formatCurrency(100, 'USD'); // "$109.00"
```

### convertCurrency

Convertit un prix EUR vers une autre devise (valeur numérique) :

```tsx
import { convertCurrency } from '../utils/currency';

const priceInCFA = convertCurrency(100, 'XOF'); // 65595.7
```

### formatPriceForDisplay

Convertit et retourne un objet complet avec prix actuel et prix barré :

```tsx
import { formatPriceForDisplay } from '../utils/currency';

const result = formatPriceForDisplay(400, 500, 'XOF');
/*
{
  price: "262 382 F CFA",
  originalPrice: "327 978 F CFA",
  numericPrice: 262382.8,
  numericOriginalPrice: 327978.5
}
*/
```

## Stockage et persistance

La devise sélectionnée est automatiquement :
- Stockée dans `localStorage` (clé: `fima-currency`)
- Restaurée au chargement de la page
- Synchronisée avec le contexte global `AppContext`

## Notes importantes

1. **Tous les prix de base doivent être en EUR** - C'est la devise de référence du système
2. **Le Franc CFA est affiché sans décimales** - Les montants sont arrondis
3. **Les autres devises affichent 2 décimales** - Format standard
4. **Les taux USD et GBP sont approximatifs** - Ils peuvent être ajustés dans `/utils/currency.ts`

## Mise à jour des taux de change

Pour mettre à jour les taux de change, modifier le fichier `/utils/currency.ts` :

```tsx
export const CURRENCIES: Record<CurrencyCode, Currency> = {
  // ...
  USD: {
    code: 'USD',
    symbol: '$',
    name: 'US Dollar',
    rate: 1.09 // ← Modifier ici
  },
  // ...
};
```

## Exemple complet

```tsx
import { useCurrency } from '../hooks/useCurrency';
import { calculateDiscountPercentage } from '../utils/currency';

function ProductCard({ product }) {
  const { formatPrice, selectedCurrency } = useCurrency();
  
  const currentPrice = 400; // EUR
  const originalPrice = 500; // EUR
  const discount = calculateDiscountPercentage(currentPrice, originalPrice);
  
  return (
    <div className="product-card">
      <h3>{product.title}</h3>
      
      {originalPrice && (
        <div className="prices">
          <span className="original-price line-through">
            {formatPrice(originalPrice)}
          </span>
          <span className="discount-badge">-{discount}%</span>
        </div>
      )}
      
      <div className="current-price">
        {formatPrice(currentPrice)}
      </div>
      
      <button>Ajouter au panier</button>
    </div>
  );
}
```
