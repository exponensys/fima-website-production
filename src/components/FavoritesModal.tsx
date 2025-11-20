import { X, Heart, ShoppingCart } from 'lucide-react';
import { useApp } from '../contexts/AppContext';
import { toast } from 'sonner@2.0.3';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useCurrency } from '../hooks/useCurrency';
import { smartConvertPrice } from '../utils/currency';

interface FavoritesModalProps {
  isOpen: boolean;
  onClose: () => void;
  onProductClick: (product: any) => void;
}

// Fonction pour nettoyer et extraire un aperçu de la description HTML
const getDescriptionPreview = (htmlString: string, maxLength: number = 150): string => {
  if (!htmlString) return '';
  
  // Créer un élément temporaire pour extraire le texte
  const temp = document.createElement('div');
  temp.innerHTML = htmlString;
  const text = temp.textContent || temp.innerText || '';
  
  // Tronquer si nécessaire
  if (text.length > maxLength) {
    return text.substring(0, maxLength) + '...';
  }
  return text;
};

export function FavoritesModal({ isOpen, onClose, onProductClick }: FavoritesModalProps) {
  const { favorites, removeFromFavorites, addToCart, setIsCartOpen } = useApp();
  const { selectedCurrency } = useCurrency();

  if (!isOpen) return null;

  const handleAddToCart = (favorite: any) => {
    // Ensure prices are properly formatted for cart
    const formattedPrice = typeof favorite.price === 'number' ? 
      favorite.price : 
      parseFloat(String(favorite.price).replace(/[€$,\s]/g, '')) || 0;
    
    const formattedOriginalPrice = favorite.originalPrice ? 
      (typeof favorite.originalPrice === 'number' ? 
        favorite.originalPrice : 
        parseFloat(String(favorite.originalPrice).replace(/[€$,\s]/g, '')) || 0) : 
      undefined;

    const productForCart = {
      ...favorite,
      price: formattedPrice,
      originalPrice: formattedOriginalPrice
    };
    
    addToCart(productForCart, 'Taille unique', 1);
    
    // Show success notification
    toast.success(`${favorite.title} ajouté au panier !`, {
      description: 'Depuis vos favoris',
      action: {
        label: "Voir le panier",
        onClick: () => setIsCartOpen(true)
      }
    });
  };

  const handleProductClick = (product: any) => {
    // Fermer la modal avant de naviguer
    onClose();
    // Petit délai pour que la fermeture s'effectue avant la navigation
    setTimeout(() => {
      onProductClick(product);
    }, 100);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black/50 transition-opacity"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <div className="flex items-center gap-3">
            <Heart className="w-6 h-6" style={{ color: '#E30613' }} />
            <h2 style={{ fontFamily: 'Montserrat', color: '#000000' }}>
              Mes favoris ({favorites.length})
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Favorites Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {favorites.length === 0 ? (
            <div className="text-center py-12">
              <Heart className="w-16 h-16 mx-auto mb-4" style={{ color: '#C0C0C0' }} />
              <h3 className="mb-2" style={{ fontFamily: 'Montserrat', color: '#000000' }}>
                Aucun favori pour le moment
              </h3>
              <p style={{ color: '#6E6E6E' }}>
                Ajoutez des produits à vos favoris pour les retrouver ici
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6">
              {favorites.map((favorite) => (
                <div key={favorite.id} className="flex gap-4 p-4 border rounded-lg hover:shadow-md transition-shadow">
                  <ImageWithFallback 
                    src={favorite.image}
                    alt={favorite.title}
                    className="w-24 h-24 object-cover rounded-lg cursor-pointer"
                    onClick={() => handleProductClick(favorite)}
                  />
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h4 
                        className="cursor-pointer hover:underline"
                        style={{ fontFamily: 'Montserrat', color: '#000000' }}
                        onClick={() => handleProductClick(favorite)}
                      >
                        {favorite.title}
                      </h4>
                      <button
                        onClick={() => removeFromFavorites(favorite.id)}
                        className="p-1 hover:bg-red-50 rounded-full transition-colors"
                      >
                        <Heart className="w-5 h-5 fill-current" style={{ color: '#E30613' }} />
                      </button>
                    </div>
                    
                    <p className="text-sm mb-3" style={{ color: '#6E6E6E' }}>
                      {getDescriptionPreview(favorite.description)}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span 
                          className="text-lg font-bold"
                          style={{ color: '#E30613' }}
                        >
                          {smartConvertPrice(favorite.price, favorite.currency, selectedCurrency)}
                        </span>
                        {favorite.originalPrice && (
                          <span 
                            className="line-through text-sm"
                            style={{ color: '#6E6E6E' }}
                          >
                            {smartConvertPrice(favorite.originalPrice, favorite.currency, selectedCurrency)}
                          </span>
                        )}
                      </div>
                      
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleProductClick(favorite)}
                          className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          Voir détails
                        </button>
                        <button
                          onClick={() => handleAddToCart(favorite)}
                          className="flex items-center gap-2 fima-btn-secondary px-4 py-2"
                        >
                          <ShoppingCart className="w-4 h-4" />
                          Ajouter
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}