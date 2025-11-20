import { useApp } from '../contexts/AppContext';
import { formatCurrency, formatPriceForDisplay, CurrencyCode } from '../utils/currency';

/**
 * Hook personnalisé pour gérer l'affichage des prix avec la devise sélectionnée
 */
export function useCurrency() {
  const { selectedCurrency } = useApp();

  /**
   * Formate un prix selon la devise sélectionnée
   * @param eurPrice Prix en euros (base)
   * @returns Prix formaté avec symbole
   */
  const formatPrice = (eurPrice: number | string): string => {
    const numericPrice = typeof eurPrice === 'string' ? parseFloat(eurPrice) : eurPrice;
    return formatCurrency(numericPrice, selectedCurrency);
  };

  /**
   * Formate un prix avec prix barré optionnel
   * @param price Prix actuel en euros
   * @param originalPrice Prix original en euros (optionnel)
   * @returns Objet avec prix formatés
   */
  const formatPriceWithDiscount = (price: number | string, originalPrice?: number | string) => {
    return formatPriceForDisplay(price, originalPrice, selectedCurrency);
  };

  return {
    selectedCurrency,
    formatPrice,
    formatPriceWithDiscount,
  };
}
