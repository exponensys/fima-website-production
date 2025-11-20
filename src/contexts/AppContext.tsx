import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { toast } from 'sonner@2.0.3';
import { CurrencyCode } from '../utils/currency';
import { LanguageCode } from '../utils/translations';

interface CartItem {
  id: string;
  title: string;
  image: string;
  price: number;
  originalPrice?: number;
  currency?: string; // Devise source du produit (FCFA, EUR, USD, etc.)
  size: string;
  quantity: number;
  category?: string;
}

interface FavoriteItem {
  id: string;
  title: string;
  image: string;
  price: number;
  originalPrice?: number;
  currency?: string; // Devise source du produit (FCFA, EUR, USD, etc.)
  category: string;
  description: string;
}

interface AppContextType {
  // Cart
  cartItems: CartItem[];
  addToCart: (product: any, size: string, quantity: number) => void;
  removeFromCart: (id: string, size: string) => void;
  updateQuantity: (id: string, size: string, quantity: number) => void;
  clearCart: () => void;
  getCartTotal: () => number;
  getCartCount: () => number;
  
  // Favorites
  favorites: FavoriteItem[];
  addToFavorites: (product: any) => void;
  removeFromFavorites: (id: string) => void;
  isFavorite: (id: string) => boolean;
  
  // Currency
  selectedCurrency: CurrencyCode;
  setSelectedCurrency: (currency: CurrencyCode) => void;
  
  // Language
  selectedLanguage: LanguageCode;
  setSelectedLanguage: (language: LanguageCode) => void;
  
  // UI States
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  isChatOpen: boolean;
  setIsChatOpen: (open: boolean) => void;
  
  // Cart animation state
  isCartAnimating: boolean;
  setIsCartAnimating: (animating: boolean) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

// Utility function to normalize price values
const normalizePrice = (price: string | number | undefined): number => {
  if (price === undefined || price === null) return 0;
  if (typeof price === 'number') {
    // Check for NaN and return 0 if invalid
    return isNaN(price) ? 0 : price;
  }
  if (typeof price === 'string') {
    // Remove currency symbols and parse
    const cleanPrice = price.replace(/[€$,\s]/g, '');
    const parsed = parseFloat(cleanPrice);
    // Return 0 if parsing resulted in NaN
    return isNaN(parsed) ? 0 : parsed;
  }
  return 0;
};

// Utility function to safely format prices for display
const formatPrice = (price: number): string => {
  if (isNaN(price) || !isFinite(price)) return '0';
  return price.toFixed(0);
};

export function AppProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [favorites, setFavorites] = useState<FavoriteItem[]>([]);
  const [selectedCurrency, setSelectedCurrency] = useState<CurrencyCode>('XOF');
  const [selectedLanguage, setSelectedLanguage] = useState<LanguageCode>('FR');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isCartAnimating, setIsCartAnimating] = useState(false);

  // CRITICAL FIX: Force close cart/chat on mobile mount to prevent stuck overlays
  useEffect(() => {
    const isMobile = window.innerWidth <= 768;
    if (isMobile) {
      setIsCartOpen(false);
      setIsChatOpen(false);
      console.log('📱 Mobile: Cart & Chat forcés fermés');
    }
  }, []);

  // Load data from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('fima-cart');
    const savedFavorites = localStorage.getItem('fima-favorites');
    const savedCurrency = localStorage.getItem('fima-currency') as CurrencyCode;
    const savedLanguage = localStorage.getItem('fima-language') as LanguageCode;
    
    if (savedCart) {
      try {
        setCartItems(JSON.parse(savedCart));
      } catch (e) {
        console.error('Error loading cart from localStorage', e);
      }
    }
    
    if (savedFavorites) {
      try {
        setFavorites(JSON.parse(savedFavorites));
      } catch (e) {
        console.error('Error loading favorites from localStorage', e);
      }
    }
    
    if (savedCurrency) {
      try {
        setSelectedCurrency(savedCurrency as CurrencyCode);
      } catch (e) {
        console.error('Error loading currency from localStorage', e);
      }
    }
    
    if (savedLanguage) {
      try {
        setSelectedLanguage(savedLanguage as LanguageCode);
      } catch (e) {
        console.error('Error loading language from localStorage', e);
      }
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('fima-cart', JSON.stringify(cartItems));
  }, [cartItems]);

  // Save favorites to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('fima-favorites', JSON.stringify(favorites));
  }, [favorites]);

  // Save selected currency to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('fima-currency', selectedCurrency);
  }, [selectedCurrency]);

  // Save selected language to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('fima-language', selectedLanguage);
  }, [selectedLanguage]);

  // Cart functions
  const addToCart = (product: any, size: string, quantity: number) => {
    const cartItemId = `${product.id}-${size}`;
    let wasUpdated = false;
    
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id && item.size === size);
      
      if (existingItem) {
        wasUpdated = true;
        return prevItems.map(item =>
          item.id === product.id && item.size === size
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        const newItem: CartItem = {
          id: product.id,
          title: product.title,
          image: product.image,
          price: normalizePrice(product.price),
          originalPrice: normalizePrice(product.originalPrice),
          currency: product.currency, // Ajout de la devise source
          size,
          quantity,
          category: product.category || 'Produit'
        };
        return [...prevItems, newItem];
      }
    });

    // Trigger cart animation
    setIsCartAnimating(true);
    setTimeout(() => setIsCartAnimating(false), 600);

    // Show notification only if not already handled by the calling component
    if (wasUpdated) {
      toast.success('Quantité mise à jour dans le panier', {
        description: `${product.title} • ${size}`,
      });
    }
  };

  const removeFromCart = (id: string, size: string) => {
    setCartItems(prevItems => 
      prevItems.filter(item => !(item.id === id && item.size === size))
    );
  };

  const updateQuantity = (id: string, size: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id, size);
      return;
    }
    
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id && item.size === size
          ? { ...item, quantity }
          : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => {
      const itemPrice = isNaN(item.price) ? 0 : item.price;
      const itemQuantity = isNaN(item.quantity) ? 0 : item.quantity;
      return total + (itemPrice * itemQuantity);
    }, 0);
  };

  const getCartCount = () => {
    return cartItems.reduce((count, item) => {
      const itemQuantity = isNaN(item.quantity) ? 0 : item.quantity;
      return count + itemQuantity;
    }, 0);
  };

  // Favorites functions
  const addToFavorites = (product: any) => {
    const favoriteItem: FavoriteItem = {
      id: product.id,
      title: product.title,
      image: product.image,
      price: normalizePrice(product.price),
      originalPrice: normalizePrice(product.originalPrice),
      currency: product.currency, // Ajout de la devise source
      category: product.category || 'Produit',
      description: product.description || ''
    };
    
    setFavorites(prevFavorites => {
      if (!prevFavorites.find(fav => fav.id === product.id)) {
        return [...prevFavorites, favoriteItem];
      }
      return prevFavorites;
    });
  };

  const removeFromFavorites = (id: string) => {
    setFavorites(prevFavorites => 
      prevFavorites.filter(fav => fav.id !== id)
    );
  };

  const isFavorite = (id: string) => {
    return favorites.some(fav => fav.id === id);
  };

  const value: AppContextType = {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartTotal,
    getCartCount,
    favorites,
    addToFavorites,
    removeFromFavorites,
    isFavorite,
    selectedCurrency,
    setSelectedCurrency,
    selectedLanguage,
    setSelectedLanguage,
    isCartOpen,
    setIsCartOpen,
    isChatOpen,
    setIsChatOpen,
    isCartAnimating,
    setIsCartAnimating
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}