// Utilitaires de conversion de devises pour FIMA

export type CurrencyCode = 'XOF' | 'EUR' | 'USD' | 'GBP';

export interface Currency {
  code: CurrencyCode;
  symbol: string;
  name: string;
  rate: number; // Taux par rapport à l'EUR
}

// Taux de change par rapport à l'EUR (base)
export const CURRENCIES: Record<CurrencyCode, Currency> = {
  XOF: {
    code: 'XOF',
    symbol: 'F CFA',
    name: 'Franc CFA',
    rate: 655.957 // Taux fixe EUR vers FCFA
  },
  EUR: {
    code: 'EUR',
    symbol: '€',
    name: 'Euro',
    rate: 1 // EUR est la devise de base
  },
  USD: {
    code: 'USD',
    symbol: '$',
    name: 'US Dollar',
    rate: 1.09 // Approximatif
  },
  GBP: {
    code: 'GBP',
    symbol: '£',
    name: 'British Pound',
    rate: 0.86 // Approximatif
  }
};

/**
 * Convertit un prix en euros vers les francs CFA
 * @param eurPrice Prix en euros (peut être number ou string)
 * @returns Prix formaté en francs CFA
 */
export function convertEurToXOF(eurPrice: number | string): string {
  let numericPrice: number;
  
  if (typeof eurPrice === 'string') {
    // Extraire le prix numérique de la chaîne
    const numericString = eurPrice.replace(/[^0-9.,]/g, '');
    const normalizedString = numericString.replace(',', '.');
    numericPrice = parseFloat(normalizedString);
  } else {
    numericPrice = eurPrice;
  }
  
  if (isNaN(numericPrice) || numericPrice <= 0) {
    return '0 F CFA';
  }
  
  const xofPrice = Math.round(numericPrice * CURRENCIES.XOF.rate);
  return `${xofPrice.toLocaleString('fr-FR')} F CFA`;
}

/**
 * Convertit un prix d'EUR vers une autre devise
 * @param eurPrice Prix en euros
 * @param targetCurrency Devise cible
 * @returns Prix converti
 */
export function convertCurrency(eurPrice: number | string, targetCurrency: CurrencyCode): number {
  const numericPrice = extractNumericPrice(eurPrice);
  const currency = CURRENCIES[targetCurrency];
  
  if (!currency) return numericPrice;
  
  return numericPrice * currency.rate;
}

/**
 * Extrait le prix numérique d'une chaîne ou d'un nombre
 * @param price Prix sous forme de chaîne ou de nombre
 * @returns Prix numérique
 */
export function extractNumericPrice(price: any): number {
  if (typeof price === 'number') {
    return price;
  }
  if (typeof price === 'string') {
    const numericString = price.replace(/[^0-9.,]/g, '');
    const normalizedString = numericString.replace(',', '.');
    const parsed = parseFloat(normalizedString);
    return isNaN(parsed) ? 0 : parsed;
  }
  return 0;
}

/**
 * Convertit intelligemment un prix en tenant compte de sa devise source
 * @param price Prix numérique
 * @param sourceCurrency Devise source du prix (FCFA, EUR, USD)
 * @param targetCurrency Devise cible pour l'affichage
 * @returns Prix formaté dans la devise cible
 */
export function smartConvertPrice(
  price: number,
  sourceCurrency: string | undefined,
  targetCurrency: CurrencyCode = 'XOF'
): string {
  // Normaliser la devise source
  const normalizedSource = sourceCurrency?.toUpperCase();
  
  // Si la devise source est la même que la devise cible, pas de conversion
  if (normalizedSource === 'FCFA' && targetCurrency === 'XOF') {
    return `${Math.round(price).toLocaleString('fr-FR')} F CFA`;
  }
  
  if (normalizedSource === 'EUR' && targetCurrency === 'EUR') {
    return `€${price.toFixed(2)}`;
  }
  
  if (normalizedSource === 'USD' && targetCurrency === 'USD') {
    return `$${price.toFixed(2)}`;
  }
  
  // Sinon, conversion nécessaire
  let priceInEur = price;
  
  // Convertir d'abord vers EUR si nécessaire
  if (normalizedSource === 'FCFA' || normalizedSource === 'XOF') {
    priceInEur = price / CURRENCIES.XOF.rate;
  } else if (normalizedSource === 'USD') {
    priceInEur = price / CURRENCIES.USD.rate;
  } else if (normalizedSource === 'GBP') {
    priceInEur = price / CURRENCIES.GBP.rate;
  }
  // Si source est déjà EUR ou undefined, on garde le prix tel quel
  
  // Convertir vers la devise cible
  return formatCurrency(priceInEur, targetCurrency);
}

/**
 * Formate un prix dans une devise spécifique
 * @param price Prix en euros
 * @param targetCurrency Devise cible
 * @returns Prix formaté
 */
export function formatCurrency(price: number, targetCurrency: CurrencyCode): string {
  const currency = CURRENCIES[targetCurrency];
  
  if (!currency) return price.toFixed(2);
  
  const formattedPrice = Math.round(price * currency.rate);
  
  switch (currency.code) {
    case 'XOF':
      return `${formattedPrice.toLocaleString('fr-FR')} F CFA`;
    case 'EUR':
      return `€${formattedPrice.toFixed(2)}`;
    case 'USD':
      return `$${formattedPrice.toFixed(2)}`;
    case 'GBP':
      return `£${formattedPrice.toFixed(2)}`;
    default:
      return formattedPrice.toFixed(2);
  }
}

/**
 * Convertit et formate un prix pour l'affichage dans la devise spécifiée
 * @param price Prix original (EUR)
 * @param originalPrice Prix original barré (EUR) - optionnel
 * @param currency Devise pour l'affichage (défaut: XOF)
 * @returns Objet avec les prix formatés
 */
export function formatPriceForDisplay(
  price: number | string, 
  originalPrice?: number | string,
  currency: CurrencyCode = 'XOF'
) {
  const currentPrice = formatCurrency(extractNumericPrice(price), currency);
  const currentOriginalPrice = originalPrice ? formatCurrency(extractNumericPrice(originalPrice), currency) : null;
  
  const currencyInfo = CURRENCIES[currency];
  const rate = currencyInfo?.rate || 1;
  
  return {
    price: currentPrice,
    originalPrice: currentOriginalPrice,
    numericPrice: extractNumericPrice(price) * rate,
    numericOriginalPrice: originalPrice ? extractNumericPrice(originalPrice) * rate : null
  };
}

/**
 * Calcule le pourcentage de réduction
 * @param currentPrice Prix actuel
 * @param originalPrice Prix original
 * @returns Pourcentage de réduction arrondi
 */
export function calculateDiscountPercentage(currentPrice: number | string, originalPrice: number | string): number {
  const current = extractNumericPrice(currentPrice);
  const original = extractNumericPrice(originalPrice);
  
  if (original <= 0 || current >= original) {
    return 0;
  }
  
  return Math.round(((original - current) / original) * 100);
}