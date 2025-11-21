import { X, Plus, Minus, ShoppingBag, Truck } from 'lucide-react';
import { useApp } from '../contexts/AppContext';
import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useCurrency } from '../hooks/useCurrency';
import { smartConvertPrice, CURRENCIES } from '../utils/currency';

interface CartModalProps {
  onNavigate?: (page: string) => void;
}

// Utility function to safely calculate item total
const calculateItemTotal = (price: number, quantity: number): number => {
  const safePrice = isNaN(price) ? 0 : price;
  const safeQuantity = isNaN(quantity) ? 0 : quantity;
  return safePrice * safeQuantity;
};

// Format a number in the selected currency without conversion
const formatInCurrency = (amount: number, currency: string): string => {
  const currencyInfo = CURRENCIES[currency as keyof typeof CURRENCIES];
  if (!currencyInfo) return amount.toFixed(2);
  
  switch (currency) {
    case 'XOF':
      return `${Math.round(amount).toLocaleString('fr-FR')} F CFA`;
    case 'EUR':
      return `€${amount.toFixed(2)}`;
    case 'USD':
      return `$${amount.toFixed(2)}`;
    case 'GBP':
      return `£${amount.toFixed(2)}`;
    default:
      return amount.toFixed(2);
  }
};

export function CartModal({ onNavigate }: CartModalProps = {}) {
  const { 
    isCartOpen, 
    setIsCartOpen, 
    cartItems, 
    updateQuantity, 
    removeFromCart, 
    getCartCount 
  } = useApp();
  
  const { selectedCurrency } = useCurrency();
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  if (!isCartOpen) return null;

  const handleCheckout = () => {
    if (onNavigate) {
      setIsCartOpen(false);
      onNavigate('checkout');
    } else {
      setIsCheckingOut(true);
      // Fallback si onNavigate n'est pas fourni
      setTimeout(() => {
        alert('Redirection vers le checkout sécurisé...');
        setIsCheckingOut(false);
      }, 1000);
    }
  };

  // Calculer le sous-total en convertissant chaque item dans la devise sélectionnée
  const calculateSubtotalInSelectedCurrency = () => {
    return cartItems.reduce((total, item) => {
      const itemPrice = isNaN(item.price) ? 0 : item.price;
      const itemQuantity = isNaN(item.quantity) ? 0 : item.quantity;
      const itemTotal = itemPrice * itemQuantity;
      
      // Convertir le prix de l'item vers la devise sélectionnée
      // On extrait la valeur numérique du prix converti
      const convertedPriceStr = smartConvertPrice(itemTotal, item.currency || 'FCFA', selectedCurrency);
      const numericValue = parseFloat(convertedPriceStr.replace(/[^0-9.]/g, ''));
      
      return total + (isNaN(numericValue) ? 0 : numericValue);
    }, 0);
  };

  const subtotal = calculateSubtotalInSelectedCurrency();
  const safeSubtotal = isNaN(subtotal) ? 0 : Math.max(0, subtotal);
  
  // Calculer le seuil de livraison gratuite selon la devise
  const freeShippingThreshold = selectedCurrency === 'XOF' ? 500000 : selectedCurrency === 'EUR' ? 762 : selectedCurrency === 'USD' ? 830 : 650;
  const shippingCost = selectedCurrency === 'XOF' ? 49000 : selectedCurrency === 'EUR' ? 75 : selectedCurrency === 'USD' ? 82 : 65;
  
  const shipping = safeSubtotal > freeShippingThreshold ? 0 : shippingCost;
  const total = safeSubtotal + shipping;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black/50 transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />
      
      {/* Modal */}
      <div className="absolute right-0 top-0 h-full w-full sm:max-w-md bg-white shadow-xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-6 h-6" style={{ color: '#B5C233' }} />
            <h2 style={{ fontFamily: 'Montserrat', color: '#000000' }}>
              Panier ({getCartCount()})
            </h2>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors z-10"
            style={{ minWidth: '40px', minHeight: '40px' }}
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {cartItems.length === 0 ? (
            <div className="text-center py-12">
              <ShoppingBag className="w-16 h-16 mx-auto mb-4" style={{ color: '#C0C0C0' }} />
              <h3 className="mb-2" style={{ fontFamily: 'Montserrat', color: '#000000' }}>
                Votre panier est vide
              </h3>
              <p style={{ color: '#6E6E6E' }}>
                Ajoutez des produits pour commencer vos achats
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={`${item.id}-${item.size}`} className="flex gap-4 p-4 border rounded-lg">
                  <ImageWithFallback 
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h4 
                      className="mb-1"
                      style={{ fontFamily: 'Montserrat', color: '#000000' }}
                    >
                      {item.title}
                    </h4>
                    <p className="text-sm mb-2" style={{ color: '#6E6E6E' }}>
                      Taille: {item.size}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)}
                          className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}
                          className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="text-right">
                        <div 
                          className="font-semibold"
                          style={{ color: '#E30613' }}
                        >
                          {smartConvertPrice(calculateItemTotal(item.price, item.quantity), item.currency, selectedCurrency)}
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id, item.size)}
                          className="text-sm text-gray-500 hover:text-red-600 transition-colors"
                        >
                          Supprimer
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer with total and checkout */}
        {cartItems.length > 0 && (
          <div className="border-t p-6 space-y-4">
            {/* Shipping info */}
            <div className="flex items-center gap-2 p-3 rounded-lg" style={{ backgroundColor: 'rgba(181, 194, 51, 0.05)' }}>
              <Truck className="w-5 h-5" style={{ color: '#B5C233' }} />
              <span className="text-sm" style={{ color: '#B5C233' }}>
                {shipping === 0 
                  ? 'Livraison gratuite !' 
                  : `Livraison gratuite dès ${formatInCurrency(freeShippingThreshold, selectedCurrency)} (${formatInCurrency(Math.max(0, freeShippingThreshold - safeSubtotal), selectedCurrency)} restants)`
                }
              </span>
            </div>

            {/* Totals */}
            <div className="space-y-2">
              <div className="flex justify-between">
                <span style={{ color: '#6E6E6E' }}>Sous-total</span>
                <span>{formatInCurrency(safeSubtotal, selectedCurrency)}</span>
              </div>
              <div className="flex justify-between">
                <span style={{ color: '#6E6E6E' }}>Livraison</span>
                <span>{shipping === 0 ? 'Gratuite' : formatInCurrency(shipping, selectedCurrency)}</span>
              </div>
              <div className="flex justify-between border-t pt-2">
                <span style={{ fontFamily: 'Montserrat', color: '#000000' }}>
                  Total
                </span>
                <span 
                  className="text-xl font-bold"
                  style={{ color: '#E30613' }}
                >
                  {formatInCurrency(total, selectedCurrency)}
                </span>
              </div>
            </div>

            {/* Checkout button */}
            <button
              onClick={handleCheckout}
              disabled={isCheckingOut}
              className="w-full fima-btn-primary text-lg py-4 disabled:opacity-50"
            >
              {isCheckingOut ? 'Traitement...' : 'Procéder au paiement'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}