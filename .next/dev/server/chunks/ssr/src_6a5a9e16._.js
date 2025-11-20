module.exports = [
"[project]/src/contexts/AppContext.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "AppProvider",
    ()=>AppProvider,
    "useApp",
    ()=>useApp
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$sonner__$5b$external$5d$__$28$sonner$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/sonner [external] (sonner, esm_import)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$sonner__$5b$external$5d$__$28$sonner$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$sonner__$5b$external$5d$__$28$sonner$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
const AppContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createContext"])(undefined);
// Utility function to normalize price values
const normalizePrice = (price)=>{
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
const formatPrice = (price)=>{
    if (isNaN(price) || !isFinite(price)) return '0';
    return price.toFixed(0);
};
function AppProvider({ children }) {
    const [cartItems, setCartItems] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])([]);
    const [favorites, setFavorites] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])([]);
    const [selectedCurrency, setSelectedCurrency] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])('XOF');
    const [selectedLanguage, setSelectedLanguage] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])('FR');
    const [isCartOpen, setIsCartOpen] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [isChatOpen, setIsChatOpen] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [isCartAnimating, setIsCartAnimating] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    // CRITICAL FIX: Force close cart/chat on mobile mount to prevent stuck overlays
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        const isMobile = window.innerWidth <= 768;
        if (isMobile) {
            setIsCartOpen(false);
            setIsChatOpen(false);
            console.log('📱 Mobile: Cart & Chat forcés fermés');
        }
    }, []);
    // Load data from localStorage on mount
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        const savedCart = localStorage.getItem('fima-cart');
        const savedFavorites = localStorage.getItem('fima-favorites');
        const savedCurrency = localStorage.getItem('fima-currency');
        const savedLanguage = localStorage.getItem('fima-language');
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
                setSelectedCurrency(savedCurrency);
            } catch (e) {
                console.error('Error loading currency from localStorage', e);
            }
        }
        if (savedLanguage) {
            try {
                setSelectedLanguage(savedLanguage);
            } catch (e) {
                console.error('Error loading language from localStorage', e);
            }
        }
    }, []);
    // Save cart to localStorage whenever it changes
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        localStorage.setItem('fima-cart', JSON.stringify(cartItems));
    }, [
        cartItems
    ]);
    // Save favorites to localStorage whenever they change
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        localStorage.setItem('fima-favorites', JSON.stringify(favorites));
    }, [
        favorites
    ]);
    // Save selected currency to localStorage whenever it changes
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        localStorage.setItem('fima-currency', selectedCurrency);
    }, [
        selectedCurrency
    ]);
    // Save selected language to localStorage whenever it changes
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        localStorage.setItem('fima-language', selectedLanguage);
    }, [
        selectedLanguage
    ]);
    // Cart functions
    const addToCart = (product, size, quantity)=>{
        const cartItemId = `${product.id}-${size}`;
        let wasUpdated = false;
        setCartItems((prevItems)=>{
            const existingItem = prevItems.find((item)=>item.id === product.id && item.size === size);
            if (existingItem) {
                wasUpdated = true;
                return prevItems.map((item)=>item.id === product.id && item.size === size ? {
                        ...item,
                        quantity: item.quantity + quantity
                    } : item);
            } else {
                const newItem = {
                    id: product.id,
                    title: product.title,
                    image: product.image,
                    price: normalizePrice(product.price),
                    originalPrice: normalizePrice(product.originalPrice),
                    currency: product.currency,
                    size,
                    quantity,
                    category: product.category || 'Produit'
                };
                return [
                    ...prevItems,
                    newItem
                ];
            }
        });
        // Trigger cart animation
        setIsCartAnimating(true);
        setTimeout(()=>setIsCartAnimating(false), 600);
        // Show notification only if not already handled by the calling component
        if (wasUpdated) {
            __TURBOPACK__imported__module__$5b$externals$5d2f$sonner__$5b$external$5d$__$28$sonner$2c$__esm_import$29$__["toast"].success('Quantité mise à jour dans le panier', {
                description: `${product.title} • ${size}`
            });
        }
    };
    const removeFromCart = (id, size)=>{
        setCartItems((prevItems)=>prevItems.filter((item)=>!(item.id === id && item.size === size)));
    };
    const updateQuantity = (id, size, quantity)=>{
        if (quantity <= 0) {
            removeFromCart(id, size);
            return;
        }
        setCartItems((prevItems)=>prevItems.map((item)=>item.id === id && item.size === size ? {
                    ...item,
                    quantity
                } : item));
    };
    const clearCart = ()=>{
        setCartItems([]);
    };
    const getCartTotal = ()=>{
        return cartItems.reduce((total, item)=>{
            const itemPrice = isNaN(item.price) ? 0 : item.price;
            const itemQuantity = isNaN(item.quantity) ? 0 : item.quantity;
            return total + itemPrice * itemQuantity;
        }, 0);
    };
    const getCartCount = ()=>{
        return cartItems.reduce((count, item)=>{
            const itemQuantity = isNaN(item.quantity) ? 0 : item.quantity;
            return count + itemQuantity;
        }, 0);
    };
    // Favorites functions
    const addToFavorites = (product)=>{
        const favoriteItem = {
            id: product.id,
            title: product.title,
            image: product.image,
            price: normalizePrice(product.price),
            originalPrice: normalizePrice(product.originalPrice),
            currency: product.currency,
            category: product.category || 'Produit',
            description: product.description || ''
        };
        setFavorites((prevFavorites)=>{
            if (!prevFavorites.find((fav)=>fav.id === product.id)) {
                return [
                    ...prevFavorites,
                    favoriteItem
                ];
            }
            return prevFavorites;
        });
    };
    const removeFromFavorites = (id)=>{
        setFavorites((prevFavorites)=>prevFavorites.filter((fav)=>fav.id !== id));
    };
    const isFavorite = (id)=>{
        return favorites.some((fav)=>fav.id === id);
    };
    const value = {
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(AppContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/contexts/AppContext.tsx",
        lineNumber: 307,
        columnNumber: 5
    }, this);
}
function useApp() {
    const context = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useContext"])(AppContext);
    if (context === undefined) {
        throw new Error('useApp must be used within an AppProvider');
    }
    return context;
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/contexts/UserContext.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "UserProvider",
    ()=>UserProvider,
    "useUser",
    ()=>useUser
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$sonner__$5b$external$5d$__$28$sonner$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/sonner [external] (sonner, esm_import)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$sonner__$5b$external$5d$__$28$sonner$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$sonner__$5b$external$5d$__$28$sonner$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
const UserContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createContext"])(undefined);
function UserProvider({ children }) {
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(true);
    const [addresses, setAddresses] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])([]);
    const [orders, setOrders] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])([]);
    const isAuthenticated = !!user;
    // Load user data from localStorage on mount
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        const loadUserData = ()=>{
            try {
                const savedUser = localStorage.getItem('fima-user');
                const savedAddresses = localStorage.getItem('fima-addresses');
                const savedOrders = localStorage.getItem('fima-orders');
                if (savedUser) {
                    setUser(JSON.parse(savedUser));
                }
                if (savedAddresses) {
                    setAddresses(JSON.parse(savedAddresses));
                }
                if (savedOrders) {
                    setOrders(JSON.parse(savedOrders));
                }
            } catch (error) {
                console.error('Error loading user data:', error);
            } finally{
                setIsLoading(false);
            }
        };
        loadUserData();
    }, []);
    // Save user data to localStorage
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        if (user) {
            localStorage.setItem('fima-user', JSON.stringify(user));
        } else {
            localStorage.removeItem('fima-user');
        }
    }, [
        user
    ]);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        localStorage.setItem('fima-addresses', JSON.stringify(addresses));
    }, [
        addresses
    ]);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        localStorage.setItem('fima-orders', JSON.stringify(orders));
    }, [
        orders
    ]);
    // Auth functions
    const login = async (email, password)=>{
        setIsLoading(true);
        try {
            // Simulation d'appel API
            await new Promise((resolve)=>setTimeout(resolve, 1000));
            // Données utilisateur mockées
            const userData = {
                id: `user-${Date.now()}`,
                email,
                firstName: 'Jean',
                lastName: 'Dupont',
                phone: '+225 07 12 34 56',
                company: email.includes('business') ? 'Entreprise SARL' : undefined,
                accountType: email.includes('business') ? 'business' : 'individual',
                role: email.includes('admin') ? 'admin' : 'user',
                joinedDate: '2023-01-15',
                lastLoginDate: new Date().toISOString(),
                isEmailVerified: true,
                preferences: {
                    newsletter: true,
                    smsNotifications: false,
                    orderUpdates: true,
                    promotions: true
                }
            };
            setUser(userData);
            // Charger des adresses par défaut
            if (addresses.length === 0) {
                setAddresses([
                    {
                        id: 'addr-1',
                        type: 'home',
                        label: 'Domicile',
                        firstName: userData.firstName,
                        lastName: userData.lastName,
                        address: '123 Rue de la Paix',
                        city: 'Abidjan',
                        postalCode: '01 BP 1234',
                        country: 'CI',
                        phone: userData.phone,
                        isDefault: true
                    }
                ]);
            }
            // Charger des commandes d'exemple
            if (orders.length === 0) {
                const sampleOrders = [
                    {
                        id: 'order-1',
                        orderNumber: 'FIMA-231024',
                        date: '2024-10-23',
                        status: 'delivered',
                        total: 285000,
                        currency: 'F CFA',
                        items: [
                            {
                                id: 'product-1',
                                title: 'Matelas PRESTIGE Memory Foam',
                                image: '',
                                price: 180000,
                                quantity: 1,
                                size: '160x200'
                            },
                            {
                                id: 'product-2',
                                title: 'Oreiller Ergonomique',
                                image: '',
                                price: 25000,
                                quantity: 2,
                                size: 'Standard'
                            }
                        ],
                        shippingAddress: {
                            id: 'addr-1',
                            type: 'home',
                            label: 'Domicile',
                            firstName: userData.firstName,
                            lastName: userData.lastName,
                            address: '123 Rue de la Paix',
                            city: 'Abidjan',
                            postalCode: '01 BP 1234',
                            country: 'CI',
                            phone: userData.phone,
                            isDefault: true
                        },
                        paymentMethod: 'Mobile Money',
                        trackingNumber: 'FIMA23102401'
                    },
                    {
                        id: 'order-2',
                        orderNumber: 'FIMA-151024',
                        date: '2024-10-15',
                        status: 'shipped',
                        total: 450000,
                        currency: 'F CFA',
                        items: [
                            {
                                id: 'product-3',
                                title: 'Ensemble Literie Complet',
                                image: '',
                                price: 450000,
                                quantity: 1,
                                size: '180x200'
                            }
                        ],
                        shippingAddress: {
                            id: 'addr-1',
                            type: 'home',
                            label: 'Domicile',
                            firstName: userData.firstName,
                            lastName: userData.lastName,
                            address: '123 Rue de la Paix',
                            city: 'Abidjan',
                            postalCode: '01 BP 1234',
                            country: 'CI',
                            phone: userData.phone,
                            isDefault: true
                        },
                        paymentMethod: 'Carte bancaire',
                        trackingNumber: 'FIMA15102401'
                    }
                ];
                setOrders(sampleOrders);
            }
            __TURBOPACK__imported__module__$5b$externals$5d2f$sonner__$5b$external$5d$__$28$sonner$2c$__esm_import$29$__["toast"].success('Connexion réussie !');
            return true;
        } catch (error) {
            __TURBOPACK__imported__module__$5b$externals$5d2f$sonner__$5b$external$5d$__$28$sonner$2c$__esm_import$29$__["toast"].error('Erreur de connexion');
            return false;
        } finally{
            setIsLoading(false);
        }
    };
    const signup = async (userData)=>{
        setIsLoading(true);
        try {
            await new Promise((resolve)=>setTimeout(resolve, 1500));
            const newUser = {
                id: `user-${Date.now()}`,
                email: userData.email,
                firstName: userData.firstName,
                lastName: userData.lastName,
                phone: userData.phone,
                company: userData.company,
                accountType: userData.accountType,
                joinedDate: new Date().toISOString(),
                lastLoginDate: new Date().toISOString(),
                isEmailVerified: false,
                preferences: {
                    newsletter: userData.acceptNewsletter || false,
                    smsNotifications: false,
                    orderUpdates: true,
                    promotions: userData.acceptNewsletter || false
                }
            };
            setUser(newUser);
            __TURBOPACK__imported__module__$5b$externals$5d2f$sonner__$5b$external$5d$__$28$sonner$2c$__esm_import$29$__["toast"].success('Compte créé avec succès !');
            return true;
        } catch (error) {
            __TURBOPACK__imported__module__$5b$externals$5d2f$sonner__$5b$external$5d$__$28$sonner$2c$__esm_import$29$__["toast"].error('Erreur lors de la création du compte');
            return false;
        } finally{
            setIsLoading(false);
        }
    };
    const logout = ()=>{
        setUser(null);
        setAddresses([]);
        setOrders([]);
        localStorage.removeItem('fima-user');
        localStorage.removeItem('fima-addresses');
        localStorage.removeItem('fima-orders');
        __TURBOPACK__imported__module__$5b$externals$5d2f$sonner__$5b$external$5d$__$28$sonner$2c$__esm_import$29$__["toast"].success('Déconnexion réussie');
    };
    const updateProfile = async (userData)=>{
        if (!user) return false;
        try {
            await new Promise((resolve)=>setTimeout(resolve, 500));
            setUser((prev)=>prev ? {
                    ...prev,
                    ...userData
                } : null);
            __TURBOPACK__imported__module__$5b$externals$5d2f$sonner__$5b$external$5d$__$28$sonner$2c$__esm_import$29$__["toast"].success('Profil mis à jour');
            return true;
        } catch (error) {
            __TURBOPACK__imported__module__$5b$externals$5d2f$sonner__$5b$external$5d$__$28$sonner$2c$__esm_import$29$__["toast"].error('Erreur de mise à jour');
            return false;
        }
    };
    // Address functions
    const addAddress = (address)=>{
        const newAddress = {
            ...address,
            id: `addr-${Date.now()}`,
            isDefault: addresses.length === 0 ? true : address.isDefault
        };
        setAddresses((prev)=>{
            if (newAddress.isDefault) {
                return [
                    newAddress,
                    ...prev.map((addr)=>({
                            ...addr,
                            isDefault: false
                        }))
                ];
            }
            return [
                ...prev,
                newAddress
            ];
        });
        __TURBOPACK__imported__module__$5b$externals$5d2f$sonner__$5b$external$5d$__$28$sonner$2c$__esm_import$29$__["toast"].success('Adresse ajoutée');
    };
    const updateAddress = (id, updatedAddress)=>{
        setAddresses((prev)=>prev.map((addr)=>addr.id === id ? {
                    ...addr,
                    ...updatedAddress
                } : addr));
        __TURBOPACK__imported__module__$5b$externals$5d2f$sonner__$5b$external$5d$__$28$sonner$2c$__esm_import$29$__["toast"].success('Adresse mise à jour');
    };
    const deleteAddress = (id)=>{
        setAddresses((prev)=>{
            const filtered = prev.filter((addr)=>addr.id !== id);
            // Si on supprime l'adresse par défaut, définir la première comme défaut
            if (prev.find((addr)=>addr.id === id)?.isDefault && filtered.length > 0) {
                filtered[0].isDefault = true;
            }
            return filtered;
        });
        __TURBOPACK__imported__module__$5b$externals$5d2f$sonner__$5b$external$5d$__$28$sonner$2c$__esm_import$29$__["toast"].success('Adresse supprimée');
    };
    const setDefaultAddress = (id)=>{
        setAddresses((prev)=>prev.map((addr)=>({
                    ...addr,
                    isDefault: addr.id === id
                })));
        __TURBOPACK__imported__module__$5b$externals$5d2f$sonner__$5b$external$5d$__$28$sonner$2c$__esm_import$29$__["toast"].success('Adresse par défaut mise à jour');
    };
    // Order functions
    const getOrderById = (id)=>{
        return orders.find((order)=>order.id === id);
    };
    const addOrder = (order)=>{
        const newOrder = {
            ...order,
            id: `order-${Date.now()}`
        };
        setOrders((prev)=>[
                newOrder,
                ...prev
            ]);
        return newOrder;
    };
    const updatePreferences = (preferences)=>{
        if (!user) return;
        setUser((prev)=>prev ? {
                ...prev,
                preferences: {
                    ...prev.preferences,
                    ...preferences
                }
            } : null);
        __TURBOPACK__imported__module__$5b$externals$5d2f$sonner__$5b$external$5d$__$28$sonner$2c$__esm_import$29$__["toast"].success('Préférences mises à jour');
    };
    const value = {
        user,
        isAuthenticated,
        isLoading,
        login,
        signup,
        logout,
        updateProfile,
        addresses,
        addAddress,
        updateAddress,
        deleteAddress,
        setDefaultAddress,
        orders,
        getOrderById,
        addOrder,
        updatePreferences
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(UserContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/contexts/UserContext.tsx",
        lineNumber: 438,
        columnNumber: 5
    }, this);
}
function useUser() {
    const context = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useContext"])(UserContext);
    if (context === undefined) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/assets/90a0803cf2304a13ca1191a66fb32d2239a69bdf.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/90a0803cf2304a13ca1191a66fb32d2239a69bdf.504c1017.png");}),
"[project]/src/assets/90a0803cf2304a13ca1191a66fb32d2239a69bdf.png.mjs { IMAGE => \"[project]/src/assets/90a0803cf2304a13ca1191a66fb32d2239a69bdf.png (static in ecmascript, tag client)\" } [ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$90a0803cf2304a13ca1191a66fb32d2239a69bdf$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/assets/90a0803cf2304a13ca1191a66fb32d2239a69bdf.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$90a0803cf2304a13ca1191a66fb32d2239a69bdf$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 342,
    height: 338,
    blurWidth: 8,
    blurHeight: 8,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAlUlEQVR42qXPuwqCUByA8X9LLUX0LF2GaIkeoKEnCBpraewtmtsKQdxsFWyRyLzhpu8gevQIIufmJk4iOPy2b/lACAFtoFNAKR4n+LdGubNAuTuPs++GUDStgyD8717ySZOU81tSLupTPuqerx845wMgNJuY/u2uanujybCvj5LEM2C8HCJsLaP0s21KsLlirBhB74sKglG4fQD6w5gAAAAASUVORK5CYII="
};
}),
"[project]/src/assets/5bb4257f511908ba6d68f0f0b3c015dccb725fae.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/5bb4257f511908ba6d68f0f0b3c015dccb725fae.326ea3df.png");}),
"[project]/src/assets/5bb4257f511908ba6d68f0f0b3c015dccb725fae.png.mjs { IMAGE => \"[project]/src/assets/5bb4257f511908ba6d68f0f0b3c015dccb725fae.png (static in ecmascript, tag client)\" } [ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$5bb4257f511908ba6d68f0f0b3c015dccb725fae$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/assets/5bb4257f511908ba6d68f0f0b3c015dccb725fae.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$5bb4257f511908ba6d68f0f0b3c015dccb725fae$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1171,
    height: 832,
    blurWidth: 8,
    blurHeight: 6,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAA0UlEQVR42gHGADn/ALyzq/+Rh3v/i4F1/5uQg/+eloj/lYl8/5qNgv+ZiX//AMC3sP96bFz/aF1J/4l/bP+NiHH/dGRN/4RyY/+Wgnb/AMjCvv97aVb/b11E/4t8ZP+ckHf/cVg7/3lkU/+Xg3f/AM/Jxv+Od2T/f2dQ/56Lef+llH7/f2FD/39mU/+ZhXr/AL21sf+Sfm//rqCX/8O6t//Lwr//vq+m/496bP+Vgnf/AG5lXv9JRD//WldU/6yln//Ty8X/zMK+/3NpYv9DODL/hkJ7ISfNzRkAAAAASUVORK5CYII="
};
}),
"[project]/src/assets/1da2d5f603cd62a74c69b55293bcdadb2f6d8468.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/1da2d5f603cd62a74c69b55293bcdadb2f6d8468.fff2c60a.png");}),
"[project]/src/assets/1da2d5f603cd62a74c69b55293bcdadb2f6d8468.png.mjs { IMAGE => \"[project]/src/assets/1da2d5f603cd62a74c69b55293bcdadb2f6d8468.png (static in ecmascript, tag client)\" } [ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$1da2d5f603cd62a74c69b55293bcdadb2f6d8468$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/assets/1da2d5f603cd62a74c69b55293bcdadb2f6d8468.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$1da2d5f603cd62a74c69b55293bcdadb2f6d8468$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1182,
    height: 145,
    blurWidth: 8,
    blurHeight: 1,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAYAAADjAO9DAAAALElEQVR42gEhAN7/ABETARghJAMtHB4CJhwfAicZGwMjICMDLh0fAigLDAEPMBwC1CJ7+N0AAAAASUVORK5CYII="
};
}),
"[project]/src/assets/ab0efc907f1f64cc2226cae1503e7b66f25a4a90.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/ab0efc907f1f64cc2226cae1503e7b66f25a4a90.2e684e88.png");}),
"[project]/src/assets/ab0efc907f1f64cc2226cae1503e7b66f25a4a90.png.mjs { IMAGE => \"[project]/src/assets/ab0efc907f1f64cc2226cae1503e7b66f25a4a90.png (static in ecmascript, tag client)\" } [ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$ab0efc907f1f64cc2226cae1503e7b66f25a4a90$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/assets/ab0efc907f1f64cc2226cae1503e7b66f25a4a90.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$ab0efc907f1f64cc2226cae1503e7b66f25a4a90$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 342,
    height: 338,
    blurWidth: 8,
    blurHeight: 8,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAs0lEQVR42o3MLwvCQBgG8DUFwSBiFvwAYtJvoRhFxGy2rGgxiMlPYBorBkVZMlqWxGQZTuE2mBwqh6c7726cHP7BA4PhecPz/t5XE0JoUURiCK8K54tdeqVI6CEjd5ocN7LPOqDXCU6zyjPzsuw+4Bpucx406ncK0/KScZSUvQI27kC3Fu3RxGqNl/awy1gYV4AD+vrONxuuZzRBMK1yjhMK8KFZe7/9zn+AsmMK4XX+F3gA+Mu6Tzgl+owAAAAASUVORK5CYII="
};
}),
"[project]/src/assets/0830b98154b75ab80e3cd699a5e2aa2e1ec34152.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/0830b98154b75ab80e3cd699a5e2aa2e1ec34152.4eae97d4.png");}),
"[project]/src/assets/0830b98154b75ab80e3cd699a5e2aa2e1ec34152.png.mjs { IMAGE => \"[project]/src/assets/0830b98154b75ab80e3cd699a5e2aa2e1ec34152.png (static in ecmascript, tag client)\" } [ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$0830b98154b75ab80e3cd699a5e2aa2e1ec34152$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/assets/0830b98154b75ab80e3cd699a5e2aa2e1ec34152.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$0830b98154b75ab80e3cd699a5e2aa2e1ec34152$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 2133,
    height: 1300,
    blurWidth: 8,
    blurHeight: 5,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAFAAgDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwCv5Z+0eZvbG3bt7detfK30sfVW1uf/2Q=="
};
}),
"[project]/src/assets/4037f113fae77642415a905d8754f0d8f97275e0.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/4037f113fae77642415a905d8754f0d8f97275e0.151626a5.png");}),
"[project]/src/assets/4037f113fae77642415a905d8754f0d8f97275e0.png.mjs { IMAGE => \"[project]/src/assets/4037f113fae77642415a905d8754f0d8f97275e0.png (static in ecmascript, tag client)\" } [ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$4037f113fae77642415a905d8754f0d8f97275e0$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/assets/4037f113fae77642415a905d8754f0d8f97275e0.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$4037f113fae77642415a905d8754f0d8f97275e0$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 4096,
    height: 4096,
    blurWidth: 8,
    blurHeight: 8,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAhUlEQVR42o2OPwtFYBSHD93rLjezMpC8ysRmNJuMMhjtUjafjInC/o7nM+ArvJxFvQtOnfr19Jw/AG/qD6rOQPMN+JjUlIldgnuCXmN8/Hk4fhl2YHFil0BTS5TiXrZizSoxuTESk4Q5SHArGrHmtZjDRBZoXafYfFAdHBQHKUsnHp+8qwOKhyXc5Rnh0QAAAABJRU5ErkJggg=="
};
}),
"[project]/src/assets/2e32728242ef61bf86f6ae110315f7b4aa3c42f0.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/2e32728242ef61bf86f6ae110315f7b4aa3c42f0.95589e3f.png");}),
"[project]/src/assets/2e32728242ef61bf86f6ae110315f7b4aa3c42f0.png.mjs { IMAGE => \"[project]/src/assets/2e32728242ef61bf86f6ae110315f7b4aa3c42f0.png (static in ecmascript, tag client)\" } [ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$2e32728242ef61bf86f6ae110315f7b4aa3c42f0$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/assets/2e32728242ef61bf86f6ae110315f7b4aa3c42f0.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$2e32728242ef61bf86f6ae110315f7b4aa3c42f0$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 561,
    height: 150,
    blurWidth: 8,
    blurHeight: 2,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAACAAgDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD1Rf8AXRj1xVWThZkdT//Z"
};
}),
"[project]/src/assets/c5289162cd684976dd7a7917d335170174c8652f.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/c5289162cd684976dd7a7917d335170174c8652f.c74b7401.png");}),
"[project]/src/assets/c5289162cd684976dd7a7917d335170174c8652f.png.mjs { IMAGE => \"[project]/src/assets/c5289162cd684976dd7a7917d335170174c8652f.png (static in ecmascript, tag client)\" } [ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$c5289162cd684976dd7a7917d335170174c8652f$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/assets/c5289162cd684976dd7a7917d335170174c8652f.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$c5289162cd684976dd7a7917d335170174c8652f$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 225,
    height: 224,
    blurWidth: 8,
    blurHeight: 8,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAIAAgDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDpTFq/9tt519fS6h9qUJCsbLCYtwyT/Dt25981KU2/etY5fe5t9T//2Q=="
};
}),
"[project]/src/assets/bc319577ff36e534afc433da243e1f45577b2ee8.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/bc319577ff36e534afc433da243e1f45577b2ee8.bc74dc33.png");}),
"[project]/src/assets/bc319577ff36e534afc433da243e1f45577b2ee8.png.mjs { IMAGE => \"[project]/src/assets/bc319577ff36e534afc433da243e1f45577b2ee8.png (static in ecmascript, tag client)\" } [ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$bc319577ff36e534afc433da243e1f45577b2ee8$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/assets/bc319577ff36e534afc433da243e1f45577b2ee8.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$bc319577ff36e534afc433da243e1f45577b2ee8$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 320,
    height: 200,
    blurWidth: 8,
    blurHeight: 5,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAFAAgDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD1zb+83Z56UrajP//Z"
};
}),
"[project]/src/assets/f9f04472112108f54be0f6fac5b31408d105f61a.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/f9f04472112108f54be0f6fac5b31408d105f61a.32db08d3.png");}),
"[project]/src/assets/f9f04472112108f54be0f6fac5b31408d105f61a.png.mjs { IMAGE => \"[project]/src/assets/f9f04472112108f54be0f6fac5b31408d105f61a.png (static in ecmascript, tag client)\" } [ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$f9f04472112108f54be0f6fac5b31408d105f61a$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/assets/f9f04472112108f54be0f6fac5b31408d105f61a.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$f9f04472112108f54be0f6fac5b31408d105f61a$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 225,
    height: 225,
    blurWidth: 8,
    blurHeight: 8,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAIAAgDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDtJbnwuPDmwpF/YJttoYJ8u7/4r39aAP/Z"
};
}),
"[project]/src/assets/4673c7c573ce3de055ad9297c46aedc13b9bd55a.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/4673c7c573ce3de055ad9297c46aedc13b9bd55a.f4567252.png");}),
"[project]/src/assets/4673c7c573ce3de055ad9297c46aedc13b9bd55a.png.mjs { IMAGE => \"[project]/src/assets/4673c7c573ce3de055ad9297c46aedc13b9bd55a.png (static in ecmascript, tag client)\" } [ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$4673c7c573ce3de055ad9297c46aedc13b9bd55a$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/assets/4673c7c573ce3de055ad9297c46aedc13b9bd55a.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$4673c7c573ce3de055ad9297c46aedc13b9bd55a$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 217,
    height: 232,
    blurWidth: 7,
    blurHeight: 8,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAIAAcDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDy+6jtF0SFkjQTnG5w4OfwqFe5btyn/9k="
};
}),
"[project]/src/assets/0da4bee747388108bad21044a698ea1d39bed9f0.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/0da4bee747388108bad21044a698ea1d39bed9f0.f001026f.png");}),
"[project]/src/assets/0da4bee747388108bad21044a698ea1d39bed9f0.png.mjs { IMAGE => \"[project]/src/assets/0da4bee747388108bad21044a698ea1d39bed9f0.png (static in ecmascript, tag client)\" } [ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$0da4bee747388108bad21044a698ea1d39bed9f0$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/assets/0da4bee747388108bad21044a698ea1d39bed9f0.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$0da4bee747388108bad21044a698ea1d39bed9f0$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 225,
    height: 225,
    blurWidth: 8,
    blurHeight: 8,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAIAAgDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDDP9tf8JYMNfDX/O5+Xq2fr939MV6nuez8ju93k8j/2Q=="
};
}),
"[project]/src/assets/f854c7794a9ab7d0c09684a330f067a2080edcf6.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/f854c7794a9ab7d0c09684a330f067a2080edcf6.e6a4455d.png");}),
"[project]/src/assets/f854c7794a9ab7d0c09684a330f067a2080edcf6.png.mjs { IMAGE => \"[project]/src/assets/f854c7794a9ab7d0c09684a330f067a2080edcf6.png (static in ecmascript, tag client)\" } [ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$f854c7794a9ab7d0c09684a330f067a2080edcf6$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/assets/f854c7794a9ab7d0c09684a330f067a2080edcf6.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$f854c7794a9ab7d0c09684a330f067a2080edcf6$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1080,
    height: 402,
    blurWidth: 8,
    blurHeight: 3,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAADAAgDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDCzx26elZgf//Z"
};
}),
"[project]/src/assets/657c215f98beaa37718ea9d4ec19b4ef660894a8.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/657c215f98beaa37718ea9d4ec19b4ef660894a8.5838fdb9.png");}),
"[project]/src/assets/657c215f98beaa37718ea9d4ec19b4ef660894a8.png.mjs { IMAGE => \"[project]/src/assets/657c215f98beaa37718ea9d4ec19b4ef660894a8.png (static in ecmascript, tag client)\" } [ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$657c215f98beaa37718ea9d4ec19b4ef660894a8$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/assets/657c215f98beaa37718ea9d4ec19b4ef660894a8.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$657c215f98beaa37718ea9d4ec19b4ef660894a8$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 60,
    height: 24,
    blurWidth: 8,
    blurHeight: 3,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAbklEQVR42gFjAJz/AAUFAwtYYBGKhpEVy3eAE7VxehOthpEVy2lyEqMNDQUZACYoDUZVWC64XWExyVtfMcZbXjHFXWExyVldMMMuMBdhAJSiDc+mtQ/qprUP6qa1D+qmtQ/qprUP6qa1D+qMmQzEvgwoDhLXEVYAAAAASUVORK5CYII="
};
}),
"[project]/src/hooks/useSiteSettings.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCertifications",
    ()=>useCertifications,
    "useCompanyDescription",
    ()=>useCompanyDescription,
    "useContactInfo",
    ()=>useContactInfo,
    "useCurrencies",
    ()=>useCurrencies,
    "useLanguages",
    ()=>useLanguages,
    "useSiteSettings",
    ()=>useSiteSettings,
    "useSocialLinks",
    ()=>useSocialLinks
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
;
// Données de fallback locales
const DEFAULT_SETTINGS = {
    languages: [
        {
            code: "FR",
            name: "Français",
            flag: "🇫🇷"
        },
        {
            code: "EN",
            name: "English",
            flag: "🇬🇧"
        }
    ],
    currencies: [
        {
            code: "XOF",
            symbol: "F CFA",
            name: "Franc CFA"
        },
        {
            code: "EUR",
            symbol: "€",
            name: "Euro"
        },
        {
            code: "USD",
            symbol: "$",
            name: "US Dollar"
        },
        {
            code: "GBP",
            symbol: "£",
            name: "British Pound"
        }
    ],
    company_description: "Leader dans la litterie, l'ameublement et la vitrerie depuis plus de 40 ans. FIMA accompagne les professionnels et les particuliers avec expertise et innovation.",
    certifications: [
        "Entreprise du Patrimoine Vivant",
        "Certifié ISO 9001"
    ],
    social_links: {
        facebook: "#",
        instagram: "#",
        linkedin: "#",
        twitter: "#"
    },
    contact_info: {
        email: "contact@fima.ci",
        phone: "+225 27 22 12 34 56",
        address: "Zone Industrielle, Abidjan, Côte d'Ivoire",
        hours: "Lun-Ven: 8h-18h, Sam: 9h-13h"
    }
};
const useSiteSettings = (key)=>{
    const [settings, setSettings] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(key ? DEFAULT_SETTINGS[key] : DEFAULT_SETTINGS);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        // TOUJOURS utiliser les données locales (pas d'appel API)
        // Les données Supabase ne sont pas configurées, donc on utilise les fallbacks
        console.log('📊 useSiteSettings: Utilisation des données locales');
        if (key) {
            setSettings(DEFAULT_SETTINGS[key]);
        } else {
            setSettings(DEFAULT_SETTINGS);
        }
        setError(null);
        setLoading(false);
    }, [
        key
    ]);
    return {
        settings,
        loading,
        error
    };
};
const useLanguages = ()=>{
    const { settings, loading, error } = useSiteSettings('languages');
    return {
        languages: settings,
        loading,
        error
    };
};
const useCurrencies = ()=>{
    const { settings, loading, error } = useSiteSettings('currencies');
    return {
        currencies: settings,
        loading,
        error
    };
};
const useCompanyDescription = ()=>{
    const { settings, loading, error } = useSiteSettings('company_description');
    return {
        description: settings,
        loading,
        error
    };
};
const useCertifications = ()=>{
    const { settings, loading, error } = useSiteSettings('certifications');
    return {
        certifications: settings,
        loading,
        error
    };
};
const useSocialLinks = ()=>{
    const { settings, loading, error } = useSiteSettings('social_links');
    return {
        socialLinks: settings,
        loading,
        error
    };
};
const useContactInfo = ()=>{
    const { settings, loading, error } = useSiteSettings('contact_info');
    return {
        contactInfo: settings,
        loading,
        error
    };
};
}),
"[project]/src/hooks/useProductCategories.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DEFAULT_CATEGORIES",
    ()=>DEFAULT_CATEGORIES,
    "useProductCategories",
    ()=>useProductCategories
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$info$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/supabase/info.tsx [ssr] (ecmascript)");
;
;
// Mapper le business_unit du CMS vers le format utilisé dans l'app
const mapBusinessUnit = (unit)=>{
    switch(unit){
        case 'couchage':
            return 'fima-couchage';
        case 'design':
            return 'fima-design';
        case 'univers-glass':
            return 'univers-glass';
        default:
            return 'fima-design';
    }
};
// Données de fallback locales (utilisées uniquement si le CMS est vide)
const DEFAULT_CATEGORIES = {
    "fima-couchage": [
        {
            id: '1',
            key: "matelas",
            slug: "matelas",
            name: "Matelas",
            icon: "🛏️",
            description: "Ressorts, mousse, latex naturel",
            count: "45 modèles",
            business: "fima-couchage"
        },
        {
            id: '2',
            key: "sommiers",
            slug: "sommiers",
            name: "Sommiers",
            icon: "🏠",
            description: "Tapissiers, électriques, à lattes",
            count: "32 modèles",
            business: "fima-couchage"
        },
        {
            id: '3',
            key: "oreillers",
            slug: "oreillers",
            name: "Oreillers",
            icon: "💤",
            description: "Mémoire de forme, duvet, ergonomiques",
            count: "28 modèles",
            business: "fima-couchage"
        },
        {
            id: '4',
            key: "linge-de-lit",
            slug: "linge-de-lit",
            name: "Linge de lit",
            icon: "🌿",
            description: "Parures, draps, couettes",
            count: "150+ articles",
            business: "fima-couchage"
        },
        {
            id: '5',
            key: "accessoires-literie",
            slug: "accessoires-literie",
            name: "Accessoires",
            icon: "✨",
            description: "Protections, surmatelas, coussins",
            count: "45 articles",
            business: "fima-couchage"
        }
    ],
    "fima-design": [
        {
            id: '6',
            key: "habillement-mural",
            slug: "habillement-mural",
            name: "Habillage mural",
            icon: "🎨",
            description: "Revêtements et finitions",
            count: "45+ références",
            business: "fima-design"
        },
        {
            id: '7',
            key: "portes",
            slug: "portes",
            name: "Portes",
            icon: "🚪",
            description: "Portes intérieures et menuiserie",
            count: "50+ modèles",
            business: "fima-design"
        },
        {
            id: '8',
            key: "chambres",
            slug: "chambres",
            name: "Chambres",
            icon: "🛏️",
            description: "Mobilier pour chambres",
            count: "35+ modèles",
            business: "fima-design"
        },
        {
            id: '9',
            key: "cuisine",
            slug: "cuisine",
            name: "Cuisine",
            icon: "🍳",
            description: "Cuisines équipées modernes",
            count: "40+ modèles",
            business: "fima-design"
        },
        {
            id: '10',
            key: "dressing",
            slug: "dressing",
            name: "Dressing",
            icon: "👔",
            description: "Rangements sur mesure",
            count: "30+ modèles",
            business: "fima-design"
        },
        {
            id: '11',
            key: "amenagement-buanderie",
            slug: "amenagement-buanderie",
            name: "Aménagement buanderie",
            icon: "🧺",
            description: "Espaces optimisés pour buanderie",
            count: "12+ modèles",
            business: "fima-design"
        },
        {
            id: '12',
            key: "bureaux",
            slug: "bureaux",
            name: "Bureaux",
            icon: "🖥️",
            description: "Mobilier de bureau professionnel",
            count: "25+ modèles",
            business: "fima-design"
        },
        {
            id: '13',
            key: "salles-a-manger",
            slug: "salles-a-manger",
            name: "Salles à manger",
            icon: "🍽️",
            description: "Mobilier salle à manger",
            count: "28+ ensembles",
            business: "fima-design"
        },
        {
            id: '14',
            key: "salon",
            slug: "salon",
            name: "Salon",
            icon: "🛋️",
            description: "Mobilier de salon",
            count: "42+ modèles",
            business: "fima-design"
        }
    ],
    "univers-glass": [
        {
            id: '15',
            key: "vitrerie",
            slug: "vitrerie",
            name: "Vitrerie",
            icon: "🪟",
            description: "Vitres et miroirs",
            count: "50+ types",
            business: "univers-glass"
        },
        {
            id: '16',
            key: "menuiserie-aluminium",
            slug: "menuiserie-aluminium",
            name: "Menuiserie Aluminium",
            icon: "🔩",
            description: "Cadres et structures",
            count: "45+ profils",
            business: "univers-glass"
        },
        {
            id: '17',
            key: "fenetres",
            slug: "fenetres",
            name: "Fenêtres",
            icon: "🏠",
            description: "Fenêtres sur mesure",
            count: "60+ modèles",
            business: "univers-glass"
        },
        {
            id: '18',
            key: "portes-vitrees",
            slug: "portes-vitrees",
            name: "Portes vitrées",
            icon: "🚪",
            description: "Portes vitrées et alu",
            count: "55+ modèles",
            business: "univers-glass"
        },
        {
            id: '19',
            key: "cloisons",
            slug: "cloisons",
            name: "Cloisons",
            icon: "🧱",
            description: "Séparations d'espaces",
            count: "30+ solutions",
            business: "univers-glass"
        }
    ]
};
;
const useProductCategories = (business)=>{
    const [categories, setCategories] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    console.log('🔧 useProductCategories - business param:', business);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        const fetchCategories = async ()=>{
            try {
                setLoading(true);
                setError(null);
                // Charger les catégories CMS
                const response = await fetch(`https://${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$info$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["projectId"]}.supabase.co/functions/v1/make-server-98c6ec1c/categories`, {
                    headers: {
                        'Authorization': `Bearer ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$info$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["publicAnonKey"]}`,
                        'Content-Type': 'application/json'
                    }
                });
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const result = await response.json();
                if (result.success && result.data && result.data.length > 0) {
                    console.log('✅ useProductCategories: Catégories CMS chargées', result.data);
                    // Convertir les catégories CMS au format ProductCategory
                    const cmsCategories = result.data.filter((cat)=>cat.is_active !== false).map((cat)=>({
                            id: cat.id,
                            key: cat.slug,
                            slug: cat.slug,
                            name: cat.name,
                            icon: cat.icon_emoji || '📦',
                            description: cat.description || '',
                            business: cat.business_unit === 'all' ? 'fima-design' : mapBusinessUnit(cat.business_unit),
                            images: cat.images || [],
                            thumbnail: cat.thumbnail || '',
                            color: cat.color,
                            order_index: cat.order_index,
                            is_active: cat.is_active
                        })).sort((a, b)=>{
                        // Trier par order_index (les catégories sans order_index vont à la fin)
                        const orderA = a.order_index ?? 9999;
                        const orderB = b.order_index ?? 9999;
                        return orderA - orderB;
                    });
                    // Organiser par business unit si pas de filtre, sinon filtrer
                    if (business) {
                        const filteredCategories = cmsCategories.filter((cat)=>cat.business === business);
                        console.log(`✅ Catégories filtrées pour ${business}:`, filteredCategories);
                        setCategories(filteredCategories);
                    } else {
                        // Grouper par business unit (les catégories sont déjà triées)
                        const grouped = {
                            'fima-couchage': cmsCategories.filter((cat)=>cat.business === 'fima-couchage'),
                            'fima-design': cmsCategories.filter((cat)=>cat.business === 'fima-design'),
                            'univers-glass': cmsCategories.filter((cat)=>cat.business === 'univers-glass')
                        };
                        console.log('✅ Catégories groupées par business:', grouped);
                        setCategories(grouped);
                    }
                    setError(null);
                } else {
                    // Si aucune catégorie CMS, utiliser les fallbacks
                    console.log('⚠️ Aucune catégorie CMS trouvée, utilisation des données par défaut');
                    if (business) {
                        setCategories(DEFAULT_CATEGORIES[business]);
                    } else {
                        setCategories(DEFAULT_CATEGORIES);
                    }
                }
            } catch (err) {
                console.log('⚠️ useProductCategories: Erreur lors du chargement des catégories CMS, utilisation des données locales', err instanceof Error ? err.message : err);
                // En cas d'erreur, utiliser les données locales
                if (business) {
                    setCategories(DEFAULT_CATEGORIES[business]);
                } else {
                    setCategories(DEFAULT_CATEGORIES);
                }
                setError(null); // Ne pas considérer comme une erreur car le fallback fonctionne
            } finally{
                setLoading(false);
            }
        };
        fetchCategories();
    }, [
        business
    ]);
    return {
        categories,
        loading,
        error
    };
};
}),
"[project]/src/hooks/useSupabaseBusinessUnits.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSupabaseBusinessUnits",
    ()=>useSupabaseBusinessUnits
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
;
// Données de fallback locales
const DEFAULT_BUSINESS_UNITS = [
    {
        id: 'fima-couchage',
        slug: 'fima-couchage',
        name: 'FIMA Couchage',
        name_fr: 'FIMA Couchage',
        name_en: 'FIMA Bedding',
        description: 'Solutions complètes pour literie professionnelle et particuliers',
        description_fr: 'Solutions complètes pour literie professionnelle et particuliers',
        description_en: 'Complete solutions for professional and residential bedding',
        icon: 'Bed',
        primary_color: '#B5C233',
        order_index: 1,
        is_active: true
    },
    {
        id: 'fima-design',
        slug: 'fima-design',
        name: 'FIMA Design',
        name_fr: 'FIMA Design',
        name_en: 'FIMA Design',
        description: 'Menuiserie et ameublement sur mesure',
        description_fr: 'Menuiserie et ameublement sur mesure',
        description_en: 'Custom carpentry and furniture',
        icon: 'Armchair',
        primary_color: '#6E6E6E',
        order_index: 2,
        is_active: true
    },
    {
        id: 'univers-glass',
        slug: 'univers-glass',
        name: 'UNIVERS GLASS',
        name_fr: 'UNIVERS GLASS',
        name_en: 'UNIVERS GLASS',
        description: 'Vitrerie et menuiserie aluminium',
        description_fr: 'Vitrerie et menuiserie aluminium',
        description_en: 'Glazing and aluminum carpentry',
        icon: 'Building2',
        primary_color: '#0EA5E9',
        order_index: 3,
        is_active: true
    }
];
const useSupabaseBusinessUnits = ()=>{
    const [businessUnits, setBusinessUnits] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(DEFAULT_BUSINESS_UNITS);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        const fetchBusinessUnits = async ()=>{
            try {
                // ⚠️ API TEMPORAIREMENT DÉSACTIVÉE - Utilisation des données locales uniquement
                // Pour éviter l'erreur 404 jusqu'au redéploiement du serveur
                console.log('🏢 Business Units: Mode local (API désactivée)');
                console.log('💡 Pour activer l\'API: redéployez avec "supabase functions deploy server"');
                // Utiliser directement les données de fallback
                setBusinessUnits(DEFAULT_BUSINESS_UNITS);
                setError(null);
                setLoading(false);
            /* 
        ==========================================
        CODE API À DÉCOMMENTER APRÈS REDÉPLOIEMENT
        ==========================================
        
        console.log('🏢 useSupabaseBusinessUnits: Récupération depuis l\'API...');
        
        const response = await fetch(
          `https://${projectId}.supabase.co/functions/v1/make-server-98c6ec1c/business-units`,
          {
            headers: {
              'Authorization': `Bearer ${publicAnonKey}`,
              'Content-Type': 'application/json',
            },
          }
        );

        if (!response.ok) {
          if (response.status === 404) {
            console.warn('⚠️ Route /business-units retourne 404');
            console.log('💡 SOLUTION: Redéployez le serveur Supabase avec: supabase functions deploy server');
            console.log('📦 Utilisation des données de fallback en attendant');
          }
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        
        if (result.success && result.data && result.data.length > 0) {
          console.log('✅ Business Units récupérés depuis Supabase:', result.data);
          
          const sortedUnits = result.data.sort((a: BusinessUnit, b: BusinessUnit) => {
            return (a.order_index || 0) - (b.order_index || 0);
          });
          
          const activeUnits = sortedUnits.filter((unit: BusinessUnit) => unit.is_active !== false);
          
          setBusinessUnits(activeUnits);
          setError(null);
        } else {
          console.log('⚠️ Aucune business unit Supabase, utilisation des données locales');
          setBusinessUnits(DEFAULT_BUSINESS_UNITS);
          setError(null);
        }
        
        ==========================================
        FIN DU CODE À DÉCOMMENTER
        ==========================================
        */ } catch (err) {
                console.error('❌ Erreur API Business Units:', err instanceof Error ? err.message : 'Erreur inconnue');
                setBusinessUnits(DEFAULT_BUSINESS_UNITS);
                setError(null);
            } finally{
                setLoading(false);
            }
        };
        fetchBusinessUnits();
    }, []);
    return {
        businessUnits,
        loading,
        error
    };
};
}),
"[project]/src/hooks/useCMSCategories.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCMSCategories",
    ()=>useCMSCategories
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$info$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/supabase/info.tsx [ssr] (ecmascript)");
;
;
function useCMSCategories() {
    const [categories, setCategories] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const fetchCategories = async ()=>{
        try {
            setLoading(true);
            const response = await fetch(`https://${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$info$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["projectId"]}.supabase.co/functions/v1/make-server-98c6ec1c/categories`, {
                headers: {
                    'Authorization': `Bearer ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$info$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["publicAnonKey"]}`,
                    'Content-Type': 'application/json'
                }
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const result = await response.json();
            if (result.success && result.data) {
                setCategories(result.data);
                setError(null);
            } else {
                setCategories([]);
            }
        } catch (err) {
            console.error('Erreur lors du chargement des catégories:', err);
            setError(err instanceof Error ? err.message : 'Erreur inconnue');
            setCategories([]);
        } finally{
            setLoading(false);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        fetchCategories();
    }, []);
    return {
        categories,
        loading,
        error,
        refetch: fetchCategories
    };
}
}),
"[project]/src/hooks/useStrapiData.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCategories",
    ()=>useCategories,
    "useCreateOrder",
    ()=>useCreateOrder,
    "useHeroSlides",
    ()=>useHeroSlides,
    "usePaginatedProducts",
    ()=>usePaginatedProducts,
    "useProduct",
    ()=>useProduct,
    "useProductBySlug",
    ()=>useProductBySlug,
    "useProductSearch",
    ()=>useProductSearch,
    "useProducts",
    ()=>useProducts,
    "useProductsByCategory",
    ()=>useProductsByCategory,
    "useStrapiData",
    ()=>useStrapiData,
    "useStrapiMutation",
    ()=>useStrapiMutation,
    "useTestimonials",
    ()=>useTestimonials
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$strapiApi$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/strapiApi.ts [ssr] (ecmascript)");
;
;
function useStrapiData(apiCall, dependencies = []) {
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        let isMounted = true;
        const fetchData = async ()=>{
            try {
                setLoading(true);
                setError(null);
                const response = await apiCall();
                if (isMounted) {
                    // Vérifier si c'est une collection ou un élément unique
                    if ('data' in response && Array.isArray(response.data)) {
                        setData(response.data);
                    } else if ('data' in response) {
                        setData(response.data);
                    }
                }
            } catch (err) {
                if (isMounted) {
                    setError(err instanceof Error ? err.message : 'Une erreur est survenue');
                }
            } finally{
                if (isMounted) {
                    setLoading(false);
                }
            }
        };
        fetchData();
        return ()=>{
            isMounted = false;
        };
    }, dependencies);
    return {
        data,
        loading,
        error
    };
}
function useProducts(params = {}) {
    return useStrapiData(()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$strapiApi$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["strapiApi"].getProducts(params), [
        JSON.stringify(params)
    ]);
}
function useProduct(id, params = {}) {
    return useStrapiData(()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$strapiApi$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["strapiApi"].getProduct(id, params), [
        id,
        JSON.stringify(params)
    ]);
}
function useProductBySlug(slug, params = {}) {
    return useStrapiData(()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$strapiApi$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["strapiApi"].getProductBySlug(slug, params), [
        slug,
        JSON.stringify(params)
    ]);
}
function useProductsByCategory(categorySlug, params = {}) {
    return useStrapiData(()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$strapiApi$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["strapiApi"].getProductsByCategory(categorySlug, params), [
        categorySlug,
        JSON.stringify(params)
    ]);
}
function useCategories(params = {}) {
    return useStrapiData(()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$strapiApi$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["strapiApi"].getCategories(params), [
        JSON.stringify(params)
    ]);
}
function useTestimonials(params = {}) {
    return useStrapiData(()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$strapiApi$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["strapiApi"].getTestimonials(params), [
        JSON.stringify(params)
    ]);
}
function useHeroSlides(params = {}) {
    return useStrapiData(()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$strapiApi$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["strapiApi"].getHeroSlides(params), [
        JSON.stringify(params)
    ]);
}
function useStrapiMutation(mutationFn) {
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const mutate = async (params)=>{
        try {
            setLoading(true);
            setError(null);
            const response = await mutationFn(params);
            return response.data;
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Une erreur est survenue');
            return null;
        } finally{
            setLoading(false);
        }
    };
    return {
        mutate,
        loading,
        error
    };
}
function useCreateOrder() {
    return useStrapiMutation(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$strapiApi$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["strapiApi"].createOrder.bind(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$strapiApi$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["strapiApi"]));
}
function usePaginatedProducts(initialParams = {}) {
    const [params, setParams] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])({
        pagination: {
            page: 1,
            pageSize: 12
        },
        ...initialParams
    });
    const { data, loading, error } = useProducts(params);
    const [allProducts, setAllProducts] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])([]);
    const [hasMore, setHasMore] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        if (data && Array.isArray(data)) {
            if (params.pagination?.page === 1) {
                setAllProducts(data);
            } else {
                setAllProducts((prev)=>[
                        ...prev,
                        ...data
                    ]);
            }
        }
    }, [
        data,
        params.pagination?.page
    ]);
    const loadMore = ()=>{
        if (!loading && hasMore) {
            setParams((prev)=>({
                    ...prev,
                    pagination: {
                        ...prev.pagination,
                        page: (prev.pagination?.page || 1) + 1
                    }
                }));
        }
    };
    const updateFilters = (newFilters)=>{
        setParams({
            ...newFilters,
            pagination: {
                page: 1,
                pageSize: 12
            }
        });
        setAllProducts([]);
        setHasMore(true);
    };
    return {
        products: allProducts,
        loading,
        error,
        hasMore,
        loadMore,
        updateFilters
    };
}
function useProductSearch(searchTerm, delay = 300) {
    const [debouncedTerm, setDebouncedTerm] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(searchTerm);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        const timer = setTimeout(()=>{
            setDebouncedTerm(searchTerm);
        }, delay);
        return ()=>clearTimeout(timer);
    }, [
        searchTerm,
        delay
    ]);
    const searchParams = {
        filters: debouncedTerm ? {
            $or: [
                {
                    title: {
                        $containsi: debouncedTerm
                    }
                },
                {
                    description: {
                        $containsi: debouncedTerm
                    }
                }
            ]
        } : {},
        populate: [
            'image',
            'category'
        ]
    };
    return useProducts(debouncedTerm ? searchParams : {});
}
}),
"[project]/src/hooks/useLanguage.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "useLanguage",
    ()=>useLanguage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$AppContext$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/AppContext.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$translations$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/translations.ts [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$AppContext$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$AppContext$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
function useLanguage() {
    const { selectedLanguage, setSelectedLanguage } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$AppContext$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["useApp"])();
    /**
   * Traduit une clé selon la langue sélectionnée
   * @param key Clé de traduction
   * @returns Texte traduit
   */ const t = (key)=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$translations$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["getTranslation"])(key, selectedLanguage);
    };
    /**
   * Change la langue de l'application
   * @param language Code de la nouvelle langue
   */ const changeLanguage = (language)=>{
        setSelectedLanguage(language);
    };
    return {
        selectedLanguage,
        changeLanguage,
        t
    };
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/hooks/useHeroSlides.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "useHeroSlides",
    ()=>useHeroSlides
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$info$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/supabase/info.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLanguage$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useLanguage.ts [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLanguage$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLanguage$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
function useHeroSlides() {
    const [slides, setSlides] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const { currentLanguage } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLanguage$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useLanguage"])();
    const fetchSlides = async ()=>{
        try {
            setLoading(true);
            setError(null);
            const locale = currentLanguage === 'en' ? 'en' : 'fr';
            const response = await fetch(`https://${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$info$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["projectId"]}.supabase.co/functions/v1/make-server-98c6ec1c/api/hero-slides?locale=${locale}`, {
                headers: {
                    'Authorization': `Bearer ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$info$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["publicAnonKey"]}`,
                    'Content-Type': 'application/json'
                }
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const result = await response.json();
            if (result.success && result.data) {
                setSlides(result.data);
            } else {
                throw new Error(result.error || 'Failed to fetch hero slides');
            }
        } catch (err) {
            // Log silencieux pour "Failed to fetch" (serveur non accessible)
            const errorMessage = err instanceof Error ? err.message : 'An error occurred';
            if (errorMessage.includes('Failed to fetch')) {
                console.log('ℹ️ Hero slides backend not available, using fallback slides');
            } else {
                console.error('Error fetching hero slides:', err);
            }
            setError(errorMessage);
            // Fallback vers un slide par défaut en cas d'erreur
            setSlides([
                {
                    id: 'fallback-1',
                    sort_order: 1,
                    background_image_url: 'https://images.unsplash.com/photo-1718939045285-b67f9e9f9f8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiZWRyb29tJTIwZGVzaWduJTIwY29tZm9ydGFibGV8ZW58MXx8fHwxNzU4MTA2MzMxfDA&ixlib=rb-4.1.0&q=80&w=1080',
                    is_video: false,
                    slide_duration: 5000,
                    video_loop: true,
                    is_active: true,
                    cta_bg_color: '#FFFFFF',
                    cta_text_color: '#B5C233',
                    translation: {
                        title: 'FIMA Couchage',
                        subtitle: 'LITERIE PREMIUM',
                        description: 'Matelas, sommiers et accessoires.',
                        cta_primary: 'Découvrir nos produits',
                        badge: '14 NUITS D\'ESSAI'
                    }
                }
            ]);
        } finally{
            setLoading(false);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        fetchSlides();
    }, [
        currentLanguage
    ]);
    return {
        slides,
        loading,
        error,
        refetch: fetchSlides
    };
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/hooks/useLogoScrollAnimation.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useLogoScrollAnimation",
    ()=>useLogoScrollAnimation
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
;
function useLogoScrollAnimation(options = {}) {
    const { threshold = 50 } = options;
    const [hasScrolled, setHasScrolled] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        const handleScroll = ()=>{
            const scrollY = window.scrollY || window.pageYOffset;
            if (scrollY > threshold) {
                setHasScrolled(true);
            } else {
                setHasScrolled(false);
            }
        };
        // Vérifier immédiatement au montage
        handleScroll();
        window.addEventListener('scroll', handleScroll, {
            passive: true
        });
        return ()=>{
            window.removeEventListener('scroll', handleScroll);
        };
    }, [
        threshold
    ]);
    return {
        hasScrolled
    };
}
}),
"[project]/src/hooks/useCurrency.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "useCurrency",
    ()=>useCurrency
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$AppContext$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/AppContext.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$currency$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/currency.ts [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$AppContext$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$AppContext$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
function useCurrency() {
    const { selectedCurrency } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$AppContext$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["useApp"])();
    /**
   * Formate un prix selon la devise sélectionnée
   * @param eurPrice Prix en euros (base)
   * @returns Prix formaté avec symbole
   */ const formatPrice = (eurPrice)=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$currency$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(eurPrice, selectedCurrency);
    };
    /**
   * Formate un prix avec prix barré optionnel
   * @param price Prix actuel en euros
   * @param originalPrice Prix original en euros (optionnel)
   * @returns Objet avec prix formatés
   */ const formatPriceWithDiscount = (price, originalPrice)=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$currency$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["formatPriceForDisplay"])(price, originalPrice, selectedCurrency);
    };
    return {
        selectedCurrency,
        formatPrice,
        formatPriceWithDiscount
    };
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/hooks/useScrollToTop.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAutoScrollToTop",
    ()=>useAutoScrollToTop,
    "useScrollToTop",
    ()=>useScrollToTop
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
;
const useScrollToTop = ()=>{
    const scrollToTop = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])(()=>{
        // Scroll immédiat synchrone d'abord
        window.scrollTo(0, 0);
        // Force scroll pour les cas où le contenu n'est pas encore rendu
        requestAnimationFrame(()=>{
            window.scrollTo({
                top: 0,
                behavior: 'instant'
            });
            // Double sécurité après un délai minimal
            setTimeout(()=>{
                if (window.scrollY > 0) {
                    window.scrollTo({
                        top: 0,
                        behavior: 'instant'
                    });
                }
            }, 50);
        });
    }, []);
    return scrollToTop;
};
const useAutoScrollToTop = (dependency)=>{
    const scrollToTop = useScrollToTop();
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        scrollToTop();
    }, [
        dependency,
        scrollToTop
    ]);
};
}),
"[project]/src/hooks/useNavigationPersistence.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useNavigationPersistence",
    ()=>useNavigationPersistence
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
;
const STORAGE_KEY = 'fima_navigation_state';
function useNavigationPersistence() {
    /**
   * Sauvegarde l'état de navigation
   */ const saveNavigationState = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])((state)=>{
        try {
            // Sauvegarder dans localStorage
            localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
            // Mettre à jour l'URL sans recharger la page
            const url = getUrlFromState(state);
            if (url !== window.location.pathname + window.location.search) {
                window.history.pushState({
                    ...state
                }, '', url);
            }
        } catch (error) {
            console.error('Erreur lors de la sauvegarde de la navigation:', error);
        }
    }, []);
    /**
   * Restaure l'état de navigation depuis l'URL ou localStorage
   */ const restoreNavigationState = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])(()=>{
        try {
            // D'abord, essayer de parser l'URL
            const urlState = getStateFromUrl();
            if (urlState) {
                return urlState;
            }
            // Sinon, utiliser localStorage
            const stored = localStorage.getItem(STORAGE_KEY);
            if (stored) {
                return JSON.parse(stored);
            }
        } catch (error) {
            console.error('Erreur lors de la restauration de la navigation:', error);
        }
        return null;
    }, []);
    /**
   * Efface l'état de navigation
   */ const clearNavigationState = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])(()=>{
        try {
            localStorage.removeItem(STORAGE_KEY);
            window.history.pushState({}, '', '/');
        } catch (error) {
            console.error('Erreur lors de l\'effacement de la navigation:', error);
        }
    }, []);
    /**
   * Gère le bouton retour du navigateur
   */ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        const handlePopState = (event)=>{
            if (event.state) {
                // L'état est déjà dans event.state, le composant parent devra le gérer
                console.log('Navigation arrière détectée:', event.state);
            }
        };
        window.addEventListener('popstate', handlePopState);
        return ()=>window.removeEventListener('popstate', handlePopState);
    }, []);
    return {
        saveNavigationState,
        restoreNavigationState,
        clearNavigationState
    };
}
/**
 * Convertit un état de navigation en URL
 */ function getUrlFromState(state) {
    switch(state.view){
        case 'home':
            return '/';
        case 'product':
            return `/product/${state.selectedProduct?.slug || state.selectedProduct?.id || ''}`;
        case 'all-products':
            return state.initialCategoryFilter ? `/products?category=${encodeURIComponent(state.initialCategoryFilter)}` : '/products';
        case 'category':
            return `/category/${encodeURIComponent(state.selectedCategory || '')}`;
        case 'category-detail':
            return `/category-detail/${encodeURIComponent(state.categoryDetailSlug || '')}`;
        case 'fima-couchage':
            return '/fima-couchage';
        case 'fima-design':
            return '/fima-design';
        case 'univers-glass':
            return '/univers-glass';
        case 'b2b-solutions':
            return '/b2b-solutions';
        case 'large-accounts':
            return '/large-accounts';
        case 'content-hub':
            return '/content-hub';
        case 'all-projects':
            return '/projects';
        case 'project-detail':
            return `/project/${state.selectedProject?.slug || state.selectedProject?.id || ''}`;
        case 'article-detail':
            return `/article/${state.selectedArticle?.slug || state.selectedArticle?.id || ''}`;
        case 'careers':
            return '/careers';
        case 'our-history':
            return '/our-history';
        case 'our-certifications':
            return '/our-certifications';
        case 'checkout':
            return '/checkout';
        case 'auth':
        case 'login':
            return '/login';
        case 'signup':
            return '/signup';
        case 'account':
            return '/account';
        case 'order-detail':
            return `/order/${state.selectedOrderId || ''}`;
        case 'order-tracking':
            return `/order-tracking/${state.selectedOrderId || ''}`;
        case 'sitemap':
            return '/sitemap';
        case 'brand-guidelines':
            return '/brand-guidelines';
        case 'cms':
            return '/cms';
        default:
            return '/';
    }
}
/**
 * Parse l'URL pour extraire l'état de navigation
 */ function getStateFromUrl() {
    const path = window.location.pathname;
    const params = new URLSearchParams(window.location.search);
    // Home
    if (path === '/' || path === '') {
        return {
            view: 'home'
        };
    }
    // Product detail
    if (path.startsWith('/product/')) {
        const id = path.replace('/product/', '');
        if (id) {
            // On ne peut pas restaurer le produit complet depuis l'URL
            // Le composant devra le charger depuis l'ID
            return {
                view: 'product',
                selectedProduct: {
                    id
                }
            };
        }
    }
    // All products
    if (path === '/products') {
        const category = params.get('category');
        return {
            view: 'all-products',
            initialCategoryFilter: category || undefined
        };
    }
    // Category
    if (path.startsWith('/category/') && !path.startsWith('/category-detail/')) {
        const category = decodeURIComponent(path.replace('/category/', ''));
        return {
            view: 'category',
            selectedCategory: category
        };
    }
    // Category detail
    if (path.startsWith('/category-detail/')) {
        const slug = decodeURIComponent(path.replace('/category-detail/', ''));
        return {
            view: 'category-detail',
            categoryDetailSlug: slug
        };
    }
    // Business units
    if (path === '/fima-couchage') return {
        view: 'fima-couchage'
    };
    if (path === '/fima-design') return {
        view: 'fima-design'
    };
    if (path === '/univers-glass') return {
        view: 'univers-glass'
    };
    if (path === '/b2b-solutions') return {
        view: 'b2b-solutions'
    };
    if (path === '/large-accounts') return {
        view: 'large-accounts'
    };
    // Content
    if (path === '/content-hub') return {
        view: 'content-hub'
    };
    if (path === '/projects') return {
        view: 'all-projects'
    };
    if (path.startsWith('/project/')) {
        const id = path.replace('/project/', '');
        return {
            view: 'project-detail',
            selectedProject: {
                id
            }
        };
    }
    if (path.startsWith('/article/')) {
        const id = path.replace('/article/', '');
        return {
            view: 'article-detail',
            selectedArticle: {
                id
            }
        };
    }
    // Company pages
    if (path === '/careers') return {
        view: 'careers'
    };
    if (path === '/our-history') return {
        view: 'our-history'
    };
    if (path === '/our-certifications') return {
        view: 'our-certifications'
    };
    // Auth & Account
    if (path === '/login') return {
        view: 'login'
    };
    if (path === '/signup') return {
        view: 'signup'
    };
    if (path === '/account') return {
        view: 'account'
    };
    if (path === '/checkout') return {
        view: 'checkout'
    };
    // Orders
    if (path.startsWith('/order/') && !path.startsWith('/order-tracking/')) {
        const orderId = path.replace('/order/', '');
        return {
            view: 'order-detail',
            selectedOrderId: orderId
        };
    }
    if (path.startsWith('/order-tracking/')) {
        const orderId = path.replace('/order-tracking/', '');
        return {
            view: 'order-tracking',
            selectedOrderId: orderId
        };
    }
    // Other pages
    if (path === '/sitemap') return {
        view: 'sitemap'
    };
    if (path === '/brand-guidelines') return {
        view: 'brand-guidelines'
    };
    if (path === '/cms' || path.startsWith('/cms/')) return {
        view: 'cms'
    };
    return null;
}
}),
"[project]/src/hooks/useFavicon.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useFavicon",
    ()=>useFavicon
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
;
const useFavicon = (faviconUrl)=>{
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        // Supprimer les anciens favicons
        const existingLinks = document.querySelectorAll("link[rel*='icon']");
        existingLinks.forEach((link)=>link.remove());
        // Créer le nouveau favicon principal
        const link = document.createElement('link');
        link.rel = 'icon';
        link.type = 'image/png';
        link.href = faviconUrl;
        document.head.appendChild(link);
        // Ajouter aussi apple-touch-icon pour iOS
        const appleLink = document.createElement('link');
        appleLink.rel = 'apple-touch-icon';
        appleLink.href = faviconUrl;
        document.head.appendChild(appleLink);
        // Mettre à jour le titre si nécessaire
        if (!document.title || document.title === 'React App') {
            document.title = 'FIMA - Literie, Menuiserie & Vitrerie depuis 1985';
        }
        // Cleanup
        return ()=>{
        // On ne supprime pas au démontage pour éviter de perdre le favicon
        };
    }, [
        faviconUrl
    ]);
};
}),
"[project]/src/hooks/useProducts.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useProduct",
    ()=>useProduct,
    "useProductMutation",
    ()=>useProductMutation,
    "useProducts",
    ()=>useProducts
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$info$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/supabase/info.tsx [ssr] (ecmascript)");
;
;
const API_BASE_URL = `https://${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$info$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["projectId"]}.supabase.co/functions/v1/make-server-98c6ec1c`;
const useProducts = (business, category, featuredOnly = false, refreshKey = 0, includeInactive = false)=>{
    const [products, setProducts] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        const fetchProducts = async ()=>{
            try {
                setLoading(true);
                setError(null);
                const url = new URL(`${API_BASE_URL}/products`);
                // Ajouter les paramètres de filtrage
                if (business && business !== 'all') {
                    url.searchParams.append('business', business);
                }
                if (category && category !== 'all') {
                    url.searchParams.append('category', category);
                }
                if (featuredOnly) {
                    url.searchParams.append('featured', 'true');
                }
                const response = await fetch(url.toString(), {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$info$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["publicAnonKey"]}`,
                        'Content-Type': 'application/json'
                    }
                });
                if (!response.ok) {
                    const errorText = await response.text().catch(()=>response.statusText);
                    console.error(`HTTP ${response.status}: ${errorText}`);
                    throw new Error(`Erreur HTTP ${response.status}`);
                }
                const result = await response.json();
                if (!result.success) {
                    throw new Error(result.error || 'Erreur lors du chargement des produits');
                }
                let productsData = result.data || [];
                // Filtrer les produits actifs uniquement (sauf si includeInactive est true)
                // includeInactive = true pour le CMS, false pour la boutique
                if (!includeInactive) {
                    productsData = productsData.filter((p)=>p.status === 'active');
                }
                // Trier par featured first, puis par nom
                productsData.sort((a, b)=>{
                    // Featured first
                    if (a.featured && !b.featured) return -1;
                    if (!a.featured && b.featured) return 1;
                    // Then by name
                    return a.name.localeCompare(b.name);
                });
                setProducts(productsData);
                setError(null);
            } catch (err) {
                const errorMessage = err instanceof Error ? err.message : 'Erreur inconnue';
                console.error('Error fetching products:', errorMessage);
                // En mode développement, retourner un tableau vide plutôt qu'une erreur
                // pour éviter de bloquer l'interface
                setError(errorMessage);
                setProducts([]);
            } finally{
                setLoading(false);
            }
        };
        fetchProducts();
    }, [
        business,
        category,
        featuredOnly,
        refreshKey,
        includeInactive
    ]);
    return {
        products,
        loading,
        error
    };
};
const useProduct = (sku)=>{
    const [product, setProduct] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        const fetchProduct = async ()=>{
            try {
                setLoading(true);
                setError(null);
                const response = await fetch(`${API_BASE_URL}/products/${sku}`, {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$info$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["publicAnonKey"]}`,
                        'Content-Type': 'application/json'
                    }
                });
                if (!response.ok) {
                    throw new Error(`Erreur lors du chargement du produit: ${response.statusText}`);
                }
                const result = await response.json();
                if (!result.success) {
                    throw new Error(result.error || 'Produit non trouvé');
                }
                setProduct(result.data);
            } catch (err) {
                console.error('Error fetching product:', err);
                setError(err instanceof Error ? err.message : 'Erreur inconnue');
                setProduct(null);
            } finally{
                setLoading(false);
            }
        };
        if (sku) {
            fetchProduct();
        }
    }, [
        sku
    ]);
    return {
        product,
        loading,
        error
    };
};
const useProductMutation = ()=>{
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const createProduct = async (productData)=>{
        try {
            setLoading(true);
            setError(null);
            const response = await fetch(`${API_BASE_URL}/products`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$info$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["publicAnonKey"]}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(productData)
            });
            if (!response.ok) {
                throw new Error(`Erreur lors de la création du produit: ${response.statusText}`);
            }
            const result = await response.json();
            if (!result.success) {
                throw new Error(result.error || 'Erreur lors de la création du produit');
            }
            return {
                success: true,
                data: result.data
            };
        } catch (err) {
            console.error('Error creating product:', err);
            const errorMessage = err instanceof Error ? err.message : 'Erreur inconnue';
            setError(errorMessage);
            return {
                success: false,
                error: errorMessage
            };
        } finally{
            setLoading(false);
        }
    };
    const updateProduct = async (id, productData)=>{
        try {
            setLoading(true);
            setError(null);
            const response = await fetch(`${API_BASE_URL}/products/${id}`, {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$info$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["publicAnonKey"]}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(productData)
            });
            if (!response.ok) {
                throw new Error(`Erreur lors de la mise à jour du produit: ${response.statusText}`);
            }
            const result = await response.json();
            if (!result.success) {
                throw new Error(result.error || 'Erreur lors de la mise à jour du produit');
            }
            return {
                success: true,
                data: result.data
            };
        } catch (err) {
            console.error('Error updating product:', err);
            const errorMessage = err instanceof Error ? err.message : 'Erreur inconnue';
            setError(errorMessage);
            return {
                success: false,
                error: errorMessage
            };
        } finally{
            setLoading(false);
        }
    };
    const deleteProduct = async (id)=>{
        try {
            setLoading(true);
            setError(null);
            const response = await fetch(`${API_BASE_URL}/products/${id}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$info$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["publicAnonKey"]}`,
                    'Content-Type': 'application/json'
                }
            });
            if (!response.ok) {
                throw new Error(`Erreur lors de la suppression du produit: ${response.statusText}`);
            }
            const result = await response.json();
            if (!result.success) {
                throw new Error(result.error || 'Erreur lors de la suppression du produit');
            }
            return {
                success: true
            };
        } catch (err) {
            console.error('Error deleting product:', err);
            const errorMessage = err instanceof Error ? err.message : 'Erreur inconnue';
            setError(errorMessage);
            return {
                success: false,
                error: errorMessage
            };
        } finally{
            setLoading(false);
        }
    };
    return {
        createProduct,
        updateProduct,
        deleteProduct,
        loading,
        error
    };
};
}),
"[project]/src/hooks/useVideoStories.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useVideoStories",
    ()=>useVideoStories,
    "useVideoStory",
    ()=>useVideoStory,
    "useVideoStoryMutation",
    ()=>useVideoStoryMutation
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$info$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/supabase/info.tsx [ssr] (ecmascript)");
;
;
const API_BASE_URL = `https://${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$info$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["projectId"]}.supabase.co/functions/v1/make-server-98c6ec1c`;
const useVideoStories = (locale = 'fr', category, featuredOnly = false, publishedOnly = true)=>{
    const [videoStories, setVideoStories] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const fetchVideoStories = async ()=>{
        try {
            setLoading(true);
            setError(null);
            const url = new URL(`${API_BASE_URL}/video-stories`);
            // Ajouter les paramètres de filtrage
            if (category) {
                url.searchParams.append('category', category);
            }
            if (featuredOnly) {
                url.searchParams.append('featured', 'true');
            }
            const response = await fetch(url.toString(), {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$info$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["publicAnonKey"]}`,
                    'Content-Type': 'application/json'
                }
            });
            if (!response.ok) {
                throw new Error(`Erreur lors du chargement des video stories: ${response.statusText}`);
            }
            const result = await response.json();
            if (!result.success) {
                throw new Error(result.error || 'Erreur lors du chargement des video stories');
            }
            let videoStoriesData = result.data || [];
            // Filtrer les vidéos publiées uniquement si demandé
            if (publishedOnly) {
                videoStoriesData = videoStoriesData.filter((v)=>v.published);
            }
            // Trier par ordre personnalisé, puis par featured, puis par date
            videoStoriesData.sort((a, b)=>{
                // Order first (si défini)
                if (a.order !== undefined && b.order !== undefined) {
                    if (a.order !== b.order) return a.order - b.order;
                }
                // Featured second
                if (a.featured && !b.featured) return -1;
                if (!a.featured && b.featured) return 1;
                // Then by date
                const dateA = new Date(a.publishedDate || a.createdAt).getTime();
                const dateB = new Date(b.publishedDate || b.createdAt).getTime();
                return dateB - dateA;
            });
            setVideoStories(videoStoriesData);
        } catch (err) {
            console.error('Error fetching video stories:', err);
            setError(err instanceof Error ? err.message : 'Erreur inconnue');
            setVideoStories([]);
        } finally{
            setLoading(false);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        fetchVideoStories();
    }, [
        locale,
        category,
        featuredOnly,
        publishedOnly
    ]);
    return {
        videoStories,
        loading,
        error,
        refetch: fetchVideoStories
    };
};
const useVideoStory = (id, locale = 'fr')=>{
    const [videoStory, setVideoStory] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        const fetchVideoStory = async ()=>{
            try {
                setLoading(true);
                setError(null);
                const response = await fetch(`${API_BASE_URL}/video-stories/${id}`, {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$info$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["publicAnonKey"]}`,
                        'Content-Type': 'application/json'
                    }
                });
                if (!response.ok) {
                    throw new Error(`Erreur lors du chargement de la video story: ${response.statusText}`);
                }
                const result = await response.json();
                if (!result.success) {
                    throw new Error(result.error || 'Video story non trouvée');
                }
                setVideoStory(result.data);
            } catch (err) {
                console.error('Error fetching video story:', err);
                setError(err instanceof Error ? err.message : 'Erreur inconnue');
                setVideoStory(null);
            } finally{
                setLoading(false);
            }
        };
        if (id) {
            fetchVideoStory();
        }
    }, [
        id,
        locale
    ]);
    return {
        videoStory,
        loading,
        error
    };
};
const useVideoStoryMutation = ()=>{
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const createVideoStory = async (videoStoryData)=>{
        try {
            setLoading(true);
            setError(null);
            const response = await fetch(`${API_BASE_URL}/video-stories`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$info$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["publicAnonKey"]}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(videoStoryData)
            });
            if (!response.ok) {
                throw new Error(`Erreur lors de la création de la video story: ${response.statusText}`);
            }
            const result = await response.json();
            if (!result.success) {
                throw new Error(result.error || 'Erreur lors de la création de la video story');
            }
            return {
                success: true,
                data: result.data
            };
        } catch (err) {
            console.error('Error creating video story:', err);
            const errorMessage = err instanceof Error ? err.message : 'Erreur inconnue';
            setError(errorMessage);
            return {
                success: false,
                error: errorMessage
            };
        } finally{
            setLoading(false);
        }
    };
    const updateVideoStory = async (id, videoStoryData)=>{
        try {
            setLoading(true);
            setError(null);
            const response = await fetch(`${API_BASE_URL}/video-stories/${id}`, {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$info$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["publicAnonKey"]}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(videoStoryData)
            });
            if (!response.ok) {
                throw new Error(`Erreur lors de la mise à jour de la video story: ${response.statusText}`);
            }
            const result = await response.json();
            if (!result.success) {
                throw new Error(result.error || 'Erreur lors de la mise à jour de la video story');
            }
            return {
                success: true,
                data: result.data
            };
        } catch (err) {
            console.error('Error updating video story:', err);
            const errorMessage = err instanceof Error ? err.message : 'Erreur inconnue';
            setError(errorMessage);
            return {
                success: false,
                error: errorMessage
            };
        } finally{
            setLoading(false);
        }
    };
    const deleteVideoStory = async (id)=>{
        try {
            setLoading(true);
            setError(null);
            const response = await fetch(`${API_BASE_URL}/video-stories/${id}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$info$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["publicAnonKey"]}`,
                    'Content-Type': 'application/json'
                }
            });
            if (!response.ok) {
                throw new Error(`Erreur lors de la suppression de la video story: ${response.statusText}`);
            }
            const result = await response.json();
            if (!result.success) {
                throw new Error(result.error || 'Erreur lors de la suppression de la video story');
            }
            return {
                success: true
            };
        } catch (err) {
            console.error('Error deleting video story:', err);
            const errorMessage = err instanceof Error ? err.message : 'Erreur inconnue';
            setError(errorMessage);
            return {
                success: false,
                error: errorMessage
            };
        } finally{
            setLoading(false);
        }
    };
    return {
        createVideoStory,
        updateVideoStory,
        deleteVideoStory,
        loading,
        error
    };
};
}),
"[project]/src/hooks/useBlogs.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useBlog",
    ()=>useBlog,
    "useBlogMutation",
    ()=>useBlogMutation,
    "useBlogs",
    ()=>useBlogs
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$info$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/supabase/info.tsx [ssr] (ecmascript)");
;
;
const API_BASE_URL = `https://${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$info$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["projectId"]}.supabase.co/functions/v1/make-server-98c6ec1c`;
const useBlogs = (locale = 'fr', category, publishedOnly = true)=>{
    const [blogs, setBlogs] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const fetchBlogs = async ()=>{
        try {
            setLoading(true);
            setError(null);
            const url = new URL(`${API_BASE_URL}/blogs`);
            const response = await fetch(url.toString(), {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$info$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["publicAnonKey"]}`,
                    'Content-Type': 'application/json'
                }
            });
            if (!response.ok) {
                throw new Error(`Erreur lors du chargement des blogs: ${response.statusText}`);
            }
            const result = await response.json();
            if (!result.success) {
                throw new Error(result.error || 'Erreur lors du chargement des blogs');
            }
            let blogsData = result.data || [];
            // Filtrer par catégorie si spécifié
            if (category && category !== 'all') {
                blogsData = blogsData.filter((blog)=>blog.category === category);
            }
            // Filtrer les articles publiés uniquement si demandé
            if (publishedOnly) {
                blogsData = blogsData.filter((blog)=>blog.published);
            }
            // Trier par date de publication décroissante
            blogsData.sort((a, b)=>{
                const dateA = new Date(a.publishedDate || a.createdAt).getTime();
                const dateB = new Date(b.publishedDate || b.createdAt).getTime();
                return dateB - dateA;
            });
            setBlogs(blogsData);
        } catch (err) {
            console.error('Error fetching blogs:', err);
            const errorMessage = err instanceof Error ? err.message : 'Erreur inconnue';
            // Si c'est une erreur de réseau (Failed to fetch), donner plus de détails
            if (errorMessage.includes('Failed to fetch')) {
                setError('Impossible de se connecter au serveur. Veuillez vérifier que le serveur backend est démarré.');
            } else {
                setError(errorMessage);
            }
            setBlogs([]);
        } finally{
            setLoading(false);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        fetchBlogs();
    }, [
        locale,
        category,
        publishedOnly
    ]);
    return {
        blogs,
        loading,
        error,
        refetch: fetchBlogs
    };
};
const useBlog = (slug, locale = 'fr')=>{
    const [blog, setBlog] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        const fetchBlog = async ()=>{
            try {
                setLoading(true);
                setError(null);
                const response = await fetch(`${API_BASE_URL}/blogs/${slug}`, {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$info$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["publicAnonKey"]}`,
                        'Content-Type': 'application/json'
                    }
                });
                if (!response.ok) {
                    throw new Error(`Erreur lors du chargement du blog: ${response.statusText}`);
                }
                const result = await response.json();
                if (!result.success) {
                    throw new Error(result.error || 'Blog non trouvé');
                }
                setBlog(result.data);
            } catch (err) {
                console.error('Error fetching blog:', err);
                setError(err instanceof Error ? err.message : 'Erreur inconnue');
                setBlog(null);
            } finally{
                setLoading(false);
            }
        };
        if (slug) {
            fetchBlog();
        }
    }, [
        slug,
        locale
    ]);
    return {
        blog,
        loading,
        error
    };
};
const useBlogMutation = ()=>{
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const createBlog = async (blogData)=>{
        try {
            setLoading(true);
            setError(null);
            const response = await fetch(`${API_BASE_URL}/blogs`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$info$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["publicAnonKey"]}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(blogData)
            });
            if (!response.ok) {
                throw new Error(`Erreur lors de la création du blog: ${response.statusText}`);
            }
            const result = await response.json();
            if (!result.success) {
                throw new Error(result.error || 'Erreur lors de la création du blog');
            }
            return {
                success: true,
                data: result.data
            };
        } catch (err) {
            console.error('Error creating blog:', err);
            const errorMessage = err instanceof Error ? err.message : 'Erreur inconnue';
            setError(errorMessage);
            return {
                success: false,
                error: errorMessage
            };
        } finally{
            setLoading(false);
        }
    };
    const updateBlog = async (id, blogData)=>{
        try {
            setLoading(true);
            setError(null);
            const response = await fetch(`${API_BASE_URL}/blogs/${id}`, {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$info$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["publicAnonKey"]}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(blogData)
            });
            if (!response.ok) {
                throw new Error(`Erreur lors de la mise à jour du blog: ${response.statusText}`);
            }
            const result = await response.json();
            if (!result.success) {
                throw new Error(result.error || 'Erreur lors de la mise à jour du blog');
            }
            return {
                success: true,
                data: result.data
            };
        } catch (err) {
            console.error('Error updating blog:', err);
            const errorMessage = err instanceof Error ? err.message : 'Erreur inconnue';
            setError(errorMessage);
            return {
                success: false,
                error: errorMessage
            };
        } finally{
            setLoading(false);
        }
    };
    const deleteBlog = async (id)=>{
        try {
            setLoading(true);
            setError(null);
            const response = await fetch(`${API_BASE_URL}/blogs/${id}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$info$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["publicAnonKey"]}`,
                    'Content-Type': 'application/json'
                }
            });
            if (!response.ok) {
                throw new Error(`Erreur lors de la suppression du blog: ${response.statusText}`);
            }
            const result = await response.json();
            if (!result.success) {
                throw new Error(result.error || 'Erreur lors de la suppression du blog');
            }
            return {
                success: true
            };
        } catch (err) {
            console.error('Error deleting blog:', err);
            const errorMessage = err instanceof Error ? err.message : 'Erreur inconnue';
            setError(errorMessage);
            return {
                success: false,
                error: errorMessage
            };
        } finally{
            setLoading(false);
        }
    };
    return {
        createBlog,
        updateBlog,
        deleteBlog,
        loading,
        error
    };
};
}),
"[project]/src/hooks/useTestimonials.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useTestimonial",
    ()=>useTestimonial,
    "useTestimonialMutation",
    ()=>useTestimonialMutation,
    "useTestimonials",
    ()=>useTestimonials
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$info$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/supabase/info.tsx [ssr] (ecmascript)");
;
;
const API_BASE_URL = `https://${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$info$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["projectId"]}.supabase.co/functions/v1/make-server-98c6ec1c`;
const useTestimonials = (locale = 'fr', category, featuredOnly = false, publishedOnly = true)=>{
    const [testimonials, setTestimonials] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const fetchTestimonials = async ()=>{
        try {
            setLoading(true);
            setError(null);
            const url = new URL(`${API_BASE_URL}/testimonials`);
            // Ajouter les paramètres de filtrage
            if (category) {
                url.searchParams.append('category', category);
            }
            if (featuredOnly) {
                url.searchParams.append('featured', 'true');
            }
            const response = await fetch(url.toString(), {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$info$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["publicAnonKey"]}`,
                    'Content-Type': 'application/json'
                }
            });
            if (!response.ok) {
                console.error(`Testimonials API error: ${response.status} ${response.statusText}`);
                // Ne pas throw l'erreur, juste retourner un tableau vide
                setTestimonials([]);
                setError(`Erreur API: ${response.statusText}. Veuillez initialiser les données depuis le CMS.`);
                setLoading(false);
                return;
            }
            const result = await response.json();
            // DEBUG: Afficher ce qui est retourné par l'API
            console.log('🔍 Testimonials API Response:', result);
            console.log('🔍 Number of testimonials:', result.data?.length);
            if (!result.success) {
                console.error('Testimonials API returned error:', result.error);
                setTestimonials([]);
                setError(result.error || 'Aucune donnée disponible. Veuillez initialiser les testimonials depuis le CMS.');
                setLoading(false);
                return;
            }
            let testimonialsData = result.data || [];
            // Filtrer les testimonials publiés uniquement si demandé
            if (publishedOnly) {
                testimonialsData = testimonialsData.filter((t)=>t.published);
            }
            // Trier par date de publication décroissante, puis par featured
            testimonialsData.sort((a, b)=>{
                // Featured first
                if (a.featured && !b.featured) return -1;
                if (!a.featured && b.featured) return 1;
                // Then by date
                const dateA = new Date(a.publishedDate || a.createdAt).getTime();
                const dateB = new Date(b.publishedDate || b.createdAt).getTime();
                return dateB - dateA;
            });
            setTestimonials(testimonialsData);
        } catch (err) {
            console.error('Error fetching testimonials:', err);
            const errorMessage = err instanceof Error ? err.message : 'Erreur de connexion au serveur';
            setError(errorMessage);
            setTestimonials([]);
        } finally{
            setLoading(false);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        fetchTestimonials();
    }, [
        locale,
        category,
        featuredOnly,
        publishedOnly
    ]);
    return {
        testimonials,
        loading,
        error,
        refetch: fetchTestimonials
    };
};
const useTestimonial = (id, locale = 'fr')=>{
    const [testimonial, setTestimonial] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        const fetchTestimonial = async ()=>{
            try {
                setLoading(true);
                setError(null);
                const response = await fetch(`${API_BASE_URL}/testimonials/${id}`, {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$info$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["publicAnonKey"]}`,
                        'Content-Type': 'application/json'
                    }
                });
                if (!response.ok) {
                    throw new Error(`Erreur lors du chargement du testimonial: ${response.statusText}`);
                }
                const result = await response.json();
                if (!result.success) {
                    throw new Error(result.error || 'Testimonial non trouvé');
                }
                setTestimonial(result.data);
            } catch (err) {
                console.error('Error fetching testimonial:', err);
                setError(err instanceof Error ? err.message : 'Erreur inconnue');
                setTestimonial(null);
            } finally{
                setLoading(false);
            }
        };
        if (id) {
            fetchTestimonial();
        }
    }, [
        id,
        locale
    ]);
    return {
        testimonial,
        loading,
        error
    };
};
const useTestimonialMutation = ()=>{
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const createTestimonial = async (testimonialData)=>{
        try {
            setLoading(true);
            setError(null);
            const response = await fetch(`${API_BASE_URL}/testimonials`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$info$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["publicAnonKey"]}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(testimonialData)
            });
            if (!response.ok) {
                throw new Error(`Erreur lors de la création du testimonial: ${response.statusText}`);
            }
            const result = await response.json();
            if (!result.success) {
                throw new Error(result.error || 'Erreur lors de la création du testimonial');
            }
            return {
                success: true,
                data: result.data
            };
        } catch (err) {
            console.error('Error creating testimonial:', err);
            const errorMessage = err instanceof Error ? err.message : 'Erreur inconnue';
            setError(errorMessage);
            return {
                success: false,
                error: errorMessage
            };
        } finally{
            setLoading(false);
        }
    };
    const updateTestimonial = async (id, testimonialData)=>{
        try {
            setLoading(true);
            setError(null);
            const response = await fetch(`${API_BASE_URL}/testimonials/${id}`, {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$info$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["publicAnonKey"]}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(testimonialData)
            });
            if (!response.ok) {
                throw new Error(`Erreur lors de la mise à jour du testimonial: ${response.statusText}`);
            }
            const result = await response.json();
            if (!result.success) {
                throw new Error(result.error || 'Erreur lors de la mise à jour du testimonial');
            }
            return {
                success: true,
                data: result.data
            };
        } catch (err) {
            console.error('Error updating testimonial:', err);
            const errorMessage = err instanceof Error ? err.message : 'Erreur inconnue';
            setError(errorMessage);
            return {
                success: false,
                error: errorMessage
            };
        } finally{
            setLoading(false);
        }
    };
    const deleteTestimonial = async (id)=>{
        try {
            setLoading(true);
            setError(null);
            const response = await fetch(`${API_BASE_URL}/testimonials/${id}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$info$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["publicAnonKey"]}`,
                    'Content-Type': 'application/json'
                }
            });
            if (!response.ok) {
                throw new Error(`Erreur lors de la suppression du testimonial: ${response.statusText}`);
            }
            const result = await response.json();
            if (!result.success) {
                throw new Error(result.error || 'Erreur lors de la suppression du testimonial');
            }
            return {
                success: true
            };
        } catch (err) {
            console.error('Error deleting testimonial:', err);
            const errorMessage = err instanceof Error ? err.message : 'Erreur inconnue';
            setError(errorMessage);
            return {
                success: false,
                error: errorMessage
            };
        } finally{
            setLoading(false);
        }
    };
    return {
        createTestimonial,
        updateTestimonial,
        deleteTestimonial,
        loading,
        error
    };
};
}),
"[project]/src/hooks/useNewsletter.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useNewsletterStats",
    ()=>useNewsletterStats,
    "useNewsletterSubscription",
    ()=>useNewsletterSubscription
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$info$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/supabase/info.tsx [ssr] (ecmascript)");
;
;
const API_BASE_URL = `https://${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$info$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["projectId"]}.supabase.co/functions/v1/make-server-98c6ec1c`;
// Statistiques par défaut pour fallback
const DEFAULT_NEWSLETTER_STATS = {
    totalSubscribers: 2500,
    activeSubscribers: 2500,
    lastUpdated: new Date().toISOString()
};
const useNewsletterStats = ()=>{
    const [stats, setStats] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        const fetchStats = async ()=>{
            try {
                setLoading(true);
                setError(null);
                try {
                    const response = await fetch(`${API_BASE_URL}/newsletter/stats`, {
                        method: 'GET',
                        headers: {
                            'Authorization': `Bearer ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$info$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["publicAnonKey"]}`,
                            'Content-Type': 'application/json'
                        }
                    });
                    if (response.ok) {
                        const result = await response.json();
                        if (result.success && result.data) {
                            setStats(result.data);
                            return;
                        }
                    }
                } catch (fetchErr) {
                    console.log('Backend unavailable, using fallback stats:', fetchErr);
                }
                // Utiliser les statistiques par défaut si l'API échoue
                console.log('Using default newsletter stats');
                setStats(DEFAULT_NEWSLETTER_STATS);
            } catch (err) {
                console.error('Error fetching newsletter stats:', err);
                // Même en cas d'erreur, utiliser les stats par défaut
                setStats(DEFAULT_NEWSLETTER_STATS);
                setError(null); // Ne pas afficher d'erreur car on a les stats par défaut
            } finally{
                setLoading(false);
            }
        };
        fetchStats();
    }, []);
    return {
        stats,
        loading,
        error
    };
};
const useNewsletterSubscription = ()=>{
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const subscribe = async (email, preferences)=>{
        try {
            setLoading(true);
            setError(null);
            // Validation de l'email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                throw new Error('Adresse email invalide');
            }
            try {
                const response = await fetch(`${API_BASE_URL}/newsletter/subscribe`, {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$info$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["publicAnonKey"]}`,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        email,
                        preferences
                    })
                });
                if (response.ok) {
                    const result = await response.json();
                    if (result.success) {
                        return {
                            success: true,
                            data: result.data
                        };
                    }
                }
            } catch (fetchErr) {
                console.log('Backend unavailable for subscription:', fetchErr);
            }
            // Si le backend n'est pas disponible, simuler le succès
            console.log('Simulating successful subscription (backend unavailable)');
            return {
                success: true,
                data: {
                    id: `sim-${Date.now()}`,
                    email,
                    subscribedAt: new Date().toISOString(),
                    active: true,
                    preferences: preferences || {
                        couchage: true,
                        design: true,
                        glass: true
                    }
                }
            };
        } catch (err) {
            console.error('Error subscribing to newsletter:', err);
            const errorMessage = err instanceof Error ? err.message : 'Erreur inconnue';
            setError(errorMessage);
            return {
                success: false,
                error: errorMessage
            };
        } finally{
            setLoading(false);
        }
    };
    const unsubscribe = async (email)=>{
        try {
            setLoading(true);
            setError(null);
            try {
                const response = await fetch(`${API_BASE_URL}/newsletter/unsubscribe`, {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$info$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["publicAnonKey"]}`,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        email
                    })
                });
                if (response.ok) {
                    const result = await response.json();
                    if (result.success) {
                        return {
                            success: true
                        };
                    }
                }
            } catch (fetchErr) {
                console.log('Backend unavailable for unsubscription:', fetchErr);
            }
            // Si le backend n'est pas disponible, simuler le succès
            console.log('Simulating successful unsubscription (backend unavailable)');
            return {
                success: true
            };
        } catch (err) {
            console.error('Error unsubscribing from newsletter:', err);
            const errorMessage = err instanceof Error ? err.message : 'Erreur inconnue';
            setError(errorMessage);
            return {
                success: false,
                error: errorMessage
            };
        } finally{
            setLoading(false);
        }
    };
    return {
        subscribe,
        unsubscribe,
        loading,
        error
    };
};
}),
"[project]/src/utils/supabase/info.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* AUTOGENERATED FILE - DO NOT EDIT CONTENTS */ __turbopack_context__.s([
    "projectId",
    ()=>projectId,
    "publicAnonKey",
    ()=>publicAnonKey
]);
const projectId = "jxikbrjmdmznoehhccdw";
const publicAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp4aWticmptZG16bm9laGhjY2R3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTYwMDE3MTEsImV4cCI6MjA3MTU3NzcxMX0.XbVLAaIA_tSV7toWwi-yVdmIlD2AE08ihGLPxyqHZio";
}),
"[project]/src/utils/translations.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Système de traductions pour FIMA
__turbopack_context__.s([
    "LANGUAGES",
    ()=>LANGUAGES,
    "getTranslation",
    ()=>getTranslation,
    "t",
    ()=>t,
    "translations",
    ()=>translations
]);
const LANGUAGES = {
    FR: {
        code: 'FR',
        name: 'Français',
        flag: '🇫🇷',
        nativeName: 'Français'
    },
    EN: {
        code: 'EN',
        name: 'English',
        flag: '🇬🇧',
        nativeName: 'English'
    }
};
const translations = {
    FR: {
        // Navigation
        'nav.home': 'Accueil',
        'nav.products': 'Produits',
        'nav.projects': 'Projets',
        'nav.about': 'À propos',
        'nav.contact': 'Contact',
        'nav.account': 'Mon compte',
        'nav.cart': 'Panier',
        'nav.favorites': 'Favoris',
        'nav.login': 'Se connecter',
        'nav.logout': 'Déconnexion',
        'nav.signup': 'Créer un compte',
        // Header
        'header.search': 'Rechercher...',
        'header.searchPlaceholder': 'Rechercher des produits...',
        'header.businessUnits': 'Nos Métiers',
        'header.catalogue': 'Catalogue',
        'header.projects': 'Projets',
        // Business Units
        'business.fimaCouchage': 'FIMA Couchage',
        'business.fimaCouchage.desc': 'Literie & Mobilier de chambre',
        'business.fimaDesign': 'FIMA Design',
        'business.fimaDesign.desc': 'Menuiserie & Ameublement',
        'business.universGlass': 'UNIVERS GLASS',
        'business.universGlass.desc': 'Vitrerie & Aluminium',
        // Hero
        'hero.title': 'Confort & Design depuis 1985',
        'hero.subtitle': 'Leader ouest-africain en literie, menuiserie et vitrerie',
        'hero.cta.catalogue': 'Découvrir le catalogue',
        'hero.cta.quote': 'Demander un devis',
        'hero.cta.expert': 'Parler à un expert',
        // Products
        'products.title': 'Nos Produits',
        'products.viewAll': 'Voir tous les produits',
        'products.addToCart': 'Ajouter au panier',
        'products.addedToCart': 'Ajouté au panier',
        'products.quickView': 'Aperçu rapide',
        'products.learnMore': 'En savoir plus',
        'products.inStock': 'En stock',
        'products.outOfStock': 'Rupture de stock',
        'products.newProduct': 'Nouveau',
        'products.bestseller': 'Meilleure vente',
        'products.discount': 'Promo',
        // Cart
        'cart.title': 'Panier',
        'cart.empty': 'Votre panier est vide',
        'cart.emptyDesc': 'Ajoutez des produits pour commencer vos achats',
        'cart.subtotal': 'Sous-total',
        'cart.shipping': 'Livraison',
        'cart.shippingFree': 'Livraison gratuite',
        'cart.shippingCost': 'Frais de livraison',
        'cart.total': 'Total',
        'cart.checkout': 'Procéder au paiement',
        'cart.continueShopping': 'Continuer les achats',
        'cart.remove': 'Supprimer',
        'cart.quantity': 'Quantité',
        'cart.size': 'Taille',
        'cart.processing': 'Traitement...',
        // Favorites
        'favorites.title': 'Mes Favoris',
        'favorites.empty': 'Aucun favori',
        'favorites.emptyDesc': 'Ajoutez vos produits préférés ici',
        'favorites.addedToFavorites': 'Ajouté aux favoris !',
        'favorites.removedFromFavorites': 'Retiré des favoris',
        // Quote Request
        'quote.title': 'Demande de devis',
        'quote.desc': 'Remplissez ce formulaire et notre équipe vous contactera',
        'quote.name': 'Nom complet',
        'quote.email': 'Email',
        'quote.phone': 'Téléphone',
        'quote.company': 'Entreprise',
        'quote.project': 'Type de projet',
        'quote.message': 'Décrivez votre projet',
        'quote.submit': 'Envoyer la demande',
        'quote.success': 'Demande envoyée avec succès !',
        'quote.error': 'Erreur lors de l\'envoi',
        // Expert Consultation
        'expert.title': 'Consultation Expert',
        'expert.desc': 'Nos experts sont à votre écoute',
        'expert.appointment': 'Prendre rendez-vous',
        'expert.call': 'Appelez-nous',
        'expert.email': 'Envoyez-nous un email',
        // Footer
        'footer.about': 'À propos de FIMA',
        'footer.aboutDesc': 'Leader ouest-africain en literie et ameublement depuis 1985',
        'footer.contact': 'Nous contacter',
        'footer.followUs': 'Suivez-nous',
        'footer.newsletter': 'Newsletter',
        'footer.newsletterDesc': 'Inscrivez-vous pour recevoir nos offres',
        'footer.legal': 'Mentions légales',
        'footer.privacy': 'Politique de confidentialité',
        'footer.terms': 'Conditions générales',
        'footer.sitemap': 'Plan du site',
        'footer.careers': 'Carrières',
        'footer.copyright': '© 2025 Groupe FIMA. Tous droits réservés.',
        // Checkout
        'checkout.title': 'Finaliser la commande',
        'checkout.deliveryInfo': 'Informations de livraison',
        'checkout.paymentInfo': 'Informations de paiement',
        'checkout.orderSummary': 'Récapitulatif',
        'checkout.placeOrder': 'Confirmer la commande',
        // Account
        'account.dashboard': 'Mon tableau de bord',
        'account.orders': 'Mes commandes',
        'account.profile': 'Mon profil',
        'account.addresses': 'Mes adresses',
        'account.settings': 'Paramètres',
        // Projects
        'projects.title': 'Nos Projets',
        'projects.viewAll': 'Voir tous les projets',
        'projects.residential': 'Résidentiel',
        'projects.commercial': 'Commercial',
        'projects.hospitality': 'Hôtellerie',
        'projects.institutional': 'Institutionnel',
        // News & Blog
        'news.title': 'Actualités & Blog',
        'news.subtitle': 'Restez informé des dernières innovations, projets et tendances de l\'industrie du mobilier',
        'news.viewAll': 'Voir tous les articles',
        'news.viewMore': 'Voir plus d\'articles',
        'news.loading': 'Chargement des articles...',
        'news.readMore': 'Lire la suite',
        'news.filterBy': 'Filtrer par :',
        'news.category.all': 'Tous',
        'news.category.tendances': 'Tendances',
        'news.category.innovation': 'Innovation',
        'news.category.projets': 'Projets',
        'news.category.actualites': 'Actualités',
        'news.views': 'vues',
        'news.resultsCount': '{count} article{plural} dans la catégorie "{category}"',
        // Article Detail
        'article.notFound': 'Article introuvable',
        'article.backToArticles': 'Retour aux articles',
        'article.keywords': 'Mots-clés',
        'article.shareArticle': 'Partager cet article',
        'article.newsletter': 'Newsletter FIMA',
        'article.newsletterDesc': 'Recevez nos conseils par email.',
        'article.yourEmail': 'Votre email',
        'article.subscribe': 'S\'abonner',
        'article.usefulLinks': 'Liens utiles',
        'article.productCatalog': 'Catalogue produits',
        'article.freeQuote': 'Devis gratuit',
        'article.comments': 'Commentaires',
        'article.yourComment': 'Votre commentaire...',
        'article.post': 'Publier',
        'article.relatedArticles': 'Articles similaires',
        'article.needAdvice': 'Besoin de conseils personnalisés ?',
        'article.expertsHelp': 'Nos experts FIMA sont là pour vous accompagner.',
        'article.freeConsultation': 'Conseil gratuit',
        'article.viewProducts': 'Voir nos produits',
        // Common
        'common.back': 'Retour',
        'common.next': 'Suivant',
        'common.previous': 'Précédent',
        'common.save': 'Enregistrer',
        'common.cancel': 'Annuler',
        'common.delete': 'Supprimer',
        'common.edit': 'Modifier',
        'common.view': 'Voir',
        'common.close': 'Fermer',
        'common.loading': 'Chargement...',
        'common.error': 'Erreur',
        'common.success': 'Succès',
        'common.confirm': 'Confirmer',
        'common.yes': 'Oui',
        'common.no': 'Non',
        'common.or': 'ou',
        'common.and': 'et',
        'common.of': 'de',
        'common.in': 'dans',
        'common.from': 'à partir de',
        'common.to': 'à',
        'common.more': 'Plus',
        'common.less': 'Moins',
        'common.all': 'Tout',
        'common.none': 'Aucun',
        'common.search': 'Rechercher',
        'common.filter': 'Filtrer',
        'common.sort': 'Trier',
        'common.share': 'Partager',
        'common.download': 'Télécharger',
        'common.print': 'Imprimer'
    },
    EN: {
        // Navigation
        'nav.home': 'Home',
        'nav.products': 'Products',
        'nav.projects': 'Projects',
        'nav.about': 'About',
        'nav.contact': 'Contact',
        'nav.account': 'My Account',
        'nav.cart': 'Cart',
        'nav.favorites': 'Favorites',
        'nav.login': 'Login',
        'nav.logout': 'Logout',
        'nav.signup': 'Sign Up',
        // Header
        'header.search': 'Search...',
        'header.searchPlaceholder': 'Search products...',
        'header.businessUnits': 'Our Services',
        'header.catalogue': 'Catalogue',
        'header.projects': 'Projects',
        // Business Units
        'business.fimaCouchage': 'FIMA Bedding',
        'business.fimaCouchage.desc': 'Bedding & Bedroom Furniture',
        'business.fimaDesign': 'FIMA Design',
        'business.fimaDesign.desc': 'Carpentry & Furniture',
        'business.universGlass': 'UNIVERS GLASS',
        'business.universGlass.desc': 'Glass & Aluminum',
        // Hero
        'hero.title': 'Comfort & Design since 1985',
        'hero.subtitle': 'West African leader in bedding, carpentry and glazing',
        'hero.cta.catalogue': 'Explore Catalogue',
        'hero.cta.quote': 'Request a Quote',
        'hero.cta.expert': 'Talk to an Expert',
        // Products
        'products.title': 'Our Products',
        'products.viewAll': 'View All Products',
        'products.addToCart': 'Add to Cart',
        'products.addedToCart': 'Added to Cart',
        'products.quickView': 'Quick View',
        'products.learnMore': 'Learn More',
        'products.inStock': 'In Stock',
        'products.outOfStock': 'Out of Stock',
        'products.newProduct': 'New',
        'products.bestseller': 'Bestseller',
        'products.discount': 'Sale',
        // Cart
        'cart.title': 'Cart',
        'cart.empty': 'Your cart is empty',
        'cart.emptyDesc': 'Add products to start shopping',
        'cart.subtotal': 'Subtotal',
        'cart.shipping': 'Shipping',
        'cart.shippingFree': 'Free Shipping',
        'cart.shippingCost': 'Shipping Cost',
        'cart.total': 'Total',
        'cart.checkout': 'Proceed to Checkout',
        'cart.continueShopping': 'Continue Shopping',
        'cart.remove': 'Remove',
        'cart.quantity': 'Quantity',
        'cart.size': 'Size',
        'cart.processing': 'Processing...',
        // Favorites
        'favorites.title': 'My Favorites',
        'favorites.empty': 'No favorites',
        'favorites.emptyDesc': 'Add your favorite products here',
        'favorites.addedToFavorites': 'Added to favorites!',
        'favorites.removedFromFavorites': 'Removed from favorites',
        // Quote Request
        'quote.title': 'Request a Quote',
        'quote.desc': 'Fill out this form and our team will contact you',
        'quote.name': 'Full Name',
        'quote.email': 'Email',
        'quote.phone': 'Phone',
        'quote.company': 'Company',
        'quote.project': 'Project Type',
        'quote.message': 'Describe your project',
        'quote.submit': 'Submit Request',
        'quote.success': 'Request sent successfully!',
        'quote.error': 'Error sending request',
        // Expert Consultation
        'expert.title': 'Expert Consultation',
        'expert.desc': 'Our experts are here to help',
        'expert.appointment': 'Schedule Appointment',
        'expert.call': 'Call Us',
        'expert.email': 'Email Us',
        // Footer
        'footer.about': 'About FIMA',
        'footer.aboutDesc': 'West African leader in bedding and furniture since 1985',
        'footer.contact': 'Contact Us',
        'footer.followUs': 'Follow Us',
        'footer.newsletter': 'Newsletter',
        'footer.newsletterDesc': 'Subscribe to receive our offers',
        'footer.legal': 'Legal Notice',
        'footer.privacy': 'Privacy Policy',
        'footer.terms': 'Terms & Conditions',
        'footer.sitemap': 'Sitemap',
        'footer.careers': 'Careers',
        'footer.copyright': '© 2025 FIMA Group. All rights reserved.',
        // Checkout
        'checkout.title': 'Complete Order',
        'checkout.deliveryInfo': 'Delivery Information',
        'checkout.paymentInfo': 'Payment Information',
        'checkout.orderSummary': 'Order Summary',
        'checkout.placeOrder': 'Place Order',
        // Account
        'account.dashboard': 'My Dashboard',
        'account.orders': 'My Orders',
        'account.profile': 'My Profile',
        'account.addresses': 'My Addresses',
        'account.settings': 'Settings',
        // Projects
        'projects.title': 'Our Projects',
        'projects.viewAll': 'View All Projects',
        'projects.residential': 'Residential',
        'projects.commercial': 'Commercial',
        'projects.hospitality': 'Hospitality',
        'projects.institutional': 'Institutional',
        // News & Blog
        'news.title': 'News & Blog',
        'news.subtitle': 'Stay informed about the latest innovations, projects and industry trends',
        'news.viewAll': 'View All Articles',
        'news.viewMore': 'View More Articles',
        'news.loading': 'Loading articles...',
        'news.readMore': 'Read More',
        'news.filterBy': 'Filter by:',
        'news.category.all': 'All',
        'news.category.tendances': 'Trends',
        'news.category.innovation': 'Innovation',
        'news.category.projets': 'Projects',
        'news.category.actualites': 'News',
        'news.views': 'views',
        'news.resultsCount': '{count} article{plural} in category "{category}"',
        // Article Detail
        'article.notFound': 'Article not found',
        'article.backToArticles': 'Back to articles',
        'article.keywords': 'Keywords',
        'article.shareArticle': 'Share this article',
        'article.newsletter': 'FIMA Newsletter',
        'article.newsletterDesc': 'Receive our tips by email.',
        'article.yourEmail': 'Your email',
        'article.subscribe': 'Subscribe',
        'article.usefulLinks': 'Useful links',
        'article.productCatalog': 'Product catalog',
        'article.freeQuote': 'Free quote',
        'article.comments': 'Comments',
        'article.yourComment': 'Your comment...',
        'article.post': 'Post',
        'article.relatedArticles': 'Related articles',
        'article.needAdvice': 'Need personalized advice?',
        'article.expertsHelp': 'Our FIMA experts are here to support you.',
        'article.freeConsultation': 'Free consultation',
        'article.viewProducts': 'View our products',
        // Common
        'common.back': 'Back',
        'common.next': 'Next',
        'common.previous': 'Previous',
        'common.save': 'Save',
        'common.cancel': 'Cancel',
        'common.delete': 'Delete',
        'common.edit': 'Edit',
        'common.view': 'View',
        'common.close': 'Close',
        'common.loading': 'Loading...',
        'common.error': 'Error',
        'common.success': 'Success',
        'common.confirm': 'Confirm',
        'common.yes': 'Yes',
        'common.no': 'No',
        'common.or': 'or',
        'common.and': 'and',
        'common.of': 'of',
        'common.in': 'in',
        'common.from': 'from',
        'common.to': 'to',
        'common.more': 'More',
        'common.less': 'Less',
        'common.all': 'All',
        'common.none': 'None',
        'common.search': 'Search',
        'common.filter': 'Filter',
        'common.sort': 'Sort',
        'common.share': 'Share',
        'common.download': 'Download',
        'common.print': 'Print'
    }
};
function getTranslation(key, language = 'FR') {
    return translations[language][key] || translations.FR[key] || key;
}
const t = getTranslation;
}),
"[project]/src/utils/videoUtils.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Utilitaires pour gérer les vidéos YouTube et les vidéos directes
 */ /**
 * Extrait l'ID de la vidéo YouTube depuis différents formats d'URL
 * Formats supportés:
 * - https://www.youtube.com/watch?v=VIDEO_ID
 * - https://youtu.be/VIDEO_ID
 * - https://www.youtube.com/embed/VIDEO_ID
 */ __turbopack_context__.s([
    "getYouTubeEmbedUrl",
    ()=>getYouTubeEmbedUrl,
    "getYouTubeThumbnail",
    ()=>getYouTubeThumbnail,
    "getYouTubeVideoId",
    ()=>getYouTubeVideoId,
    "isYouTubeUrl",
    ()=>isYouTubeUrl
]);
function getYouTubeVideoId(url) {
    if (!url) return null;
    // Format: https://www.youtube.com/watch?v=VIDEO_ID
    const watchMatch = url.match(/[?&]v=([^&]+)/);
    if (watchMatch) return watchMatch[1];
    // Format: https://youtu.be/VIDEO_ID
    const shortMatch = url.match(/youtu\.be\/([^?&]+)/);
    if (shortMatch) return shortMatch[1];
    // Format: https://www.youtube.com/embed/VIDEO_ID
    const embedMatch = url.match(/youtube\.com\/embed\/([^?&]+)/);
    if (embedMatch) return embedMatch[1];
    return null;
}
function isYouTubeUrl(url) {
    if (!url) return false;
    return url.includes('youtube.com') || url.includes('youtu.be');
}
function getYouTubeEmbedUrl(url, autoplay = false) {
    const videoId = getYouTubeVideoId(url);
    if (!videoId) return null;
    const autoplayParam = autoplay ? '&autoplay=1&mute=1' : '';
    return `https://www.youtube.com/embed/${videoId}?rel=0${autoplayParam}`;
}
function getYouTubeThumbnail(url, quality = 'hq') {
    const videoId = getYouTubeVideoId(url);
    if (!videoId) return null;
    const qualityMap = {
        'default': 'default.jpg',
        'mq': 'mqdefault.jpg',
        'hq': 'hqdefault.jpg',
        'sd': 'sddefault.jpg',
        'maxres': 'maxresdefault.jpg'
    };
    return `https://img.youtube.com/vi/${videoId}/${qualityMap[quality]}`;
}
}),
"[project]/src/utils/currency.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Utilitaires de conversion de devises pour FIMA
__turbopack_context__.s([
    "CURRENCIES",
    ()=>CURRENCIES,
    "calculateDiscountPercentage",
    ()=>calculateDiscountPercentage,
    "convertCurrency",
    ()=>convertCurrency,
    "convertEurToXOF",
    ()=>convertEurToXOF,
    "extractNumericPrice",
    ()=>extractNumericPrice,
    "formatCurrency",
    ()=>formatCurrency,
    "formatPriceForDisplay",
    ()=>formatPriceForDisplay,
    "smartConvertPrice",
    ()=>smartConvertPrice
]);
const CURRENCIES = {
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
function convertEurToXOF(eurPrice) {
    let numericPrice;
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
function convertCurrency(eurPrice, targetCurrency) {
    const numericPrice = extractNumericPrice(eurPrice);
    const currency = CURRENCIES[targetCurrency];
    if (!currency) return numericPrice;
    return numericPrice * currency.rate;
}
function extractNumericPrice(price) {
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
function smartConvertPrice(price, sourceCurrency, targetCurrency = 'XOF') {
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
function formatCurrency(price, targetCurrency) {
    const currency = CURRENCIES[targetCurrency];
    if (!currency) return price.toFixed(2);
    const formattedPrice = Math.round(price * currency.rate);
    switch(currency.code){
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
function formatPriceForDisplay(price, originalPrice, currency = 'XOF') {
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
function calculateDiscountPercentage(currentPrice, originalPrice) {
    const current = extractNumericPrice(currentPrice);
    const original = extractNumericPrice(originalPrice);
    if (original <= 0 || current >= original) {
        return 0;
    }
    return Math.round((original - current) / original * 100);
}
}),
"[project]/src/services/strapiApi.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "strapiApi",
    ()=>strapiApi
]);
// Configuration API simulée
const API_BASE_URL = 'https://strapi.fima.com/api'; // URL de votre vrai Strapi
const API_TOKEN = 'your-strapi-api-token'; // Token d'authentification
class StrapiApiService {
    baseUrl;
    headers;
    constructor(){
        this.baseUrl = API_BASE_URL;
        this.headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${API_TOKEN}`
        };
    }
    // Simulation de délai réseau
    async delay(ms = 300) {
        return new Promise((resolve)=>setTimeout(resolve, ms));
    }
    // Utilitaire pour construire les paramètres de requête
    buildQueryString(params) {
        const searchParams = new URLSearchParams();
        if (params.populate) {
            const populate = Array.isArray(params.populate) ? params.populate.join(',') : params.populate;
            searchParams.append('populate', populate);
        }
        if (params.filters) {
            Object.entries(params.filters).forEach(([key, value])=>{
                if (typeof value === 'object' && value !== null) {
                    Object.entries(value).forEach(([subKey, subValue])=>{
                        searchParams.append(`filters[${key}][${subKey}]`, subValue);
                    });
                } else {
                    searchParams.append(`filters[${key}]`, value);
                }
            });
        }
        if (params.sort) {
            const sort = Array.isArray(params.sort) ? params.sort.join(',') : params.sort;
            searchParams.append('sort', sort);
        }
        if (params.pagination) {
            Object.entries(params.pagination).forEach(([key, value])=>{
                if (value !== undefined) {
                    searchParams.append(`pagination[${key}]`, value.toString());
                }
            });
        }
        if (params.fields) {
            searchParams.append('fields', params.fields.join(','));
        }
        if (params.locale) {
            searchParams.append('locale', params.locale);
        }
        return searchParams.toString();
    }
    // DONNÉES SIMULÉES (à remplacer par de vrais appels API)
    mockData = {
        categories: [
            {
                id: 1,
                attributes: {
                    name: 'Matelas',
                    slug: 'matelas',
                    description: 'Matelas de qualité premium pour un sommeil optimal',
                    icon: '🛏️',
                    featured: true,
                    createdAt: '2024-01-01T00:00:00.000Z',
                    updatedAt: '2024-01-01T00:00:00.000Z',
                    publishedAt: '2024-01-01T00:00:00.000Z'
                }
            },
            {
                id: 2,
                attributes: {
                    name: 'Sommiers',
                    slug: 'sommiers',
                    description: 'Sommiers robustes et élégants',
                    icon: '🏠',
                    featured: true,
                    createdAt: '2024-01-01T00:00:00.000Z',
                    updatedAt: '2024-01-01T00:00:00.000Z',
                    publishedAt: '2024-01-01T00:00:00.000Z'
                }
            },
            {
                id: 3,
                attributes: {
                    name: 'Oreillers',
                    slug: 'oreillers',
                    description: 'Oreillers ergonomiques pour tous les dormeurs',
                    icon: '💤',
                    featured: true,
                    createdAt: '2024-01-01T00:00:00.000Z',
                    updatedAt: '2024-01-01T00:00:00.000Z',
                    publishedAt: '2024-01-01T00:00:00.000Z'
                }
            },
            {
                id: 4,
                attributes: {
                    name: 'Linge de lit',
                    slug: 'linge-de-lit',
                    description: 'Linge de lit de luxe en matières naturelles',
                    icon: '🌿',
                    featured: true,
                    createdAt: '2024-01-01T00:00:00.000Z',
                    updatedAt: '2024-01-01T00:00:00.000Z',
                    publishedAt: '2024-01-01T00:00:00.000Z'
                }
            },
            {
                id: 5,
                attributes: {
                    name: 'Accessoires',
                    slug: 'accessoires',
                    description: 'Accessoires pour optimiser votre sommeil',
                    icon: '✨',
                    featured: true,
                    createdAt: '2024-01-01T00:00:00.000Z',
                    updatedAt: '2024-01-01T00:00:00.000Z',
                    publishedAt: '2024-01-01T00:00:00.000Z'
                }
            }
        ],
        products: [
            // === MATELAS ===
            {
                id: 1,
                attributes: {
                    title: 'Matelas Confort Premium',
                    slug: 'matelas-confort-premium',
                    description: 'Matelas ressorts ensachés 7 zones de confort, soutien ferme, garnissage naturel. Technologie avancée pour un sommeil réparateur avec excellente aération et durabilité exceptionnelle.',
                    shortDescription: 'Matelas ressorts ensachés 7 zones de confort',
                    price: 489,
                    originalPrice: 599,
                    discount: 18,
                    sku: 'MAT-PREM-001',
                    stock: 25,
                    featured: true,
                    bestSeller: true,
                    new: false,
                    rating: 4.4,
                    reviewsCount: 17315,
                    specifications: {
                        firmness: 'Medium-Firm',
                        thickness: '25cm',
                        materials: [
                            'Ressorts ensachés',
                            'Mousse mémoire',
                            'Coton bio'
                        ],
                        warranty: '10 ans',
                        trialPeriod: '14 nuits'
                    },
                    sizes: [
                        {
                            name: 'Single',
                            price: 489,
                            originalPrice: 599,
                            dimensions: '90x200cm',
                            available: true
                        },
                        {
                            name: 'Queen',
                            price: 629,
                            originalPrice: 799,
                            dimensions: '160x200cm',
                            available: true
                        },
                        {
                            name: 'King',
                            price: 759,
                            originalPrice: 899,
                            dimensions: '180x200cm',
                            available: true
                        },
                        {
                            name: 'California King',
                            price: 859,
                            originalPrice: 999,
                            dimensions: '180x210cm',
                            available: true
                        }
                    ],
                    colors: [
                        {
                            name: 'Blanc Écru',
                            hex: '#F5F5DC',
                            image: 'https://images.unsplash.com/photo-1648634158203-199accfd7afc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtYXR0cmVzcyUyMGJlZHJvb218ZW58MXx8fHwxNzU1NjQyNDUwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
                        },
                        {
                            name: 'Gris Anthracite',
                            hex: '#2F4F4F',
                            image: 'https://images.unsplash.com/photo-1691703028663-c5ff8cbb07c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW1vcnklMjBmb2FtJTIwbWF0dHJlc3N8ZW58MXx8fHwxNzU1NjEwOTI1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
                        }
                    ],
                    createdAt: '2024-01-01T00:00:00.000Z',
                    updatedAt: '2024-01-01T00:00:00.000Z',
                    publishedAt: '2024-01-01T00:00:00.000Z',
                    image: {
                        data: {
                            id: 1,
                            attributes: {
                                name: 'matelas-premium.jpg',
                                alternativeText: 'Matelas Confort Premium',
                                caption: '',
                                width: 1080,
                                height: 1080,
                                url: 'https://images.unsplash.com/photo-1648634158203-199accfd7afc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtYXR0cmVzcyUyMGJlZHJvb218ZW58MXx8fHwxNzU1NjQyNDUwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
                                hash: 'matelas_premium_hash',
                                ext: '.jpg',
                                mime: 'image/jpeg',
                                size: 245.6,
                                provider: 'cloudinary',
                                createdAt: '2024-01-01T00:00:00.000Z',
                                updatedAt: '2024-01-01T00:00:00.000Z'
                            }
                        }
                    },
                    category: {
                        data: {
                            id: 1,
                            attributes: {
                                name: 'Matelas',
                                slug: 'matelas',
                                description: 'Matelas de qualité premium',
                                icon: '🛏️',
                                featured: true,
                                createdAt: '2024-01-01T00:00:00.000Z',
                                updatedAt: '2024-01-01T00:00:00.000Z',
                                publishedAt: '2024-01-01T00:00:00.000Z'
                            }
                        }
                    }
                }
            },
            {
                id: 2,
                attributes: {
                    title: 'Matelas Mémoire de Forme Luxe',
                    slug: 'matelas-memoire-forme-luxe',
                    description: 'Matelas 100% mousse mémoire de forme avec technologie de refroidissement gel-infusé. Épouse parfaitement les contours du corps pour un soutien personnalisé optimal.',
                    shortDescription: 'Matelas mousse mémoire avec gel refroidissant',
                    price: 699,
                    originalPrice: 899,
                    discount: 22,
                    sku: 'MAT-MEM-002',
                    stock: 18,
                    featured: true,
                    bestSeller: false,
                    new: true,
                    rating: 4.6,
                    reviewsCount: 8942,
                    specifications: {
                        firmness: 'Medium',
                        thickness: '28cm',
                        materials: [
                            'Mousse mémoire gel',
                            'Mousse haute densité',
                            'Housse bambou'
                        ],
                        warranty: '15 ans',
                        trialPeriod: '14 nuits'
                    },
                    sizes: [
                        {
                            name: 'Single',
                            price: 699,
                            originalPrice: 899,
                            dimensions: '90x200cm',
                            available: true
                        },
                        {
                            name: 'Queen',
                            price: 849,
                            originalPrice: 1099,
                            dimensions: '160x200cm',
                            available: true
                        },
                        {
                            name: 'King',
                            price: 999,
                            originalPrice: 1299,
                            dimensions: '180x200cm',
                            available: true
                        },
                        {
                            name: 'California King',
                            price: 1149,
                            originalPrice: 1499,
                            dimensions: '180x210cm',
                            available: true
                        }
                    ],
                    createdAt: '2024-01-15T00:00:00.000Z',
                    updatedAt: '2024-01-15T00:00:00.000Z',
                    publishedAt: '2024-01-15T00:00:00.000Z',
                    image: {
                        data: {
                            id: 2,
                            attributes: {
                                name: 'matelas-memoire.jpg',
                                alternativeText: 'Matelas Mémoire de Forme Luxe',
                                caption: '',
                                width: 1080,
                                height: 1080,
                                url: 'https://images.unsplash.com/photo-1691703011149-5fc5a062319d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxsYXRleCUyMG1hdHRyZXNzJTIwbmF0dXJhbHxlbnwxfHx8fDE3NTU2NDI0NjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
                                hash: 'matelas_memoire_hash',
                                ext: '.jpg',
                                mime: 'image/jpeg',
                                size: 198.3,
                                provider: 'cloudinary',
                                createdAt: '2024-01-15T00:00:00.000Z',
                                updatedAt: '2024-01-15T00:00:00.000Z'
                            }
                        }
                    },
                    category: {
                        data: {
                            id: 1,
                            attributes: {
                                name: 'Matelas',
                                slug: 'matelas',
                                description: 'Matelas de qualité premium',
                                icon: '🛏️',
                                featured: true,
                                createdAt: '2024-01-01T00:00:00.000Z',
                                updatedAt: '2024-01-01T00:00:00.000Z',
                                publishedAt: '2024-01-01T00:00:00.000Z'
                            }
                        }
                    }
                }
            },
            {
                id: 3,
                attributes: {
                    title: 'Matelas Bio Natural',
                    slug: 'matelas-bio-natural',
                    description: 'Matelas écologique en latex naturel 100% biologique avec garnissage en fibres de coco et laine de mouton. Idéal pour les dormeurs sensibles aux allergies.',
                    shortDescription: 'Matelas latex naturel 100% bio',
                    price: 799,
                    originalPrice: 999,
                    discount: 20,
                    sku: 'MAT-BIO-003',
                    stock: 12,
                    featured: false,
                    bestSeller: false,
                    new: true,
                    rating: 4.5,
                    reviewsCount: 3421,
                    specifications: {
                        firmness: 'Firm',
                        thickness: '22cm',
                        materials: [
                            'Latex naturel',
                            'Fibres de coco',
                            'Laine de mouton'
                        ],
                        warranty: '12 ans',
                        trialPeriod: '14 nuits'
                    },
                    sizes: [
                        {
                            name: 'Single',
                            price: 799,
                            originalPrice: 999,
                            dimensions: '90x200cm',
                            available: true
                        },
                        {
                            name: 'Queen',
                            price: 949,
                            originalPrice: 1199,
                            dimensions: '160x200cm',
                            available: true
                        },
                        {
                            name: 'King',
                            price: 1099,
                            originalPrice: 1399,
                            dimensions: '180x200cm',
                            available: true
                        },
                        {
                            name: 'California King',
                            price: 1249,
                            originalPrice: 1599,
                            dimensions: '180x210cm',
                            available: false
                        }
                    ],
                    createdAt: '2024-02-01T00:00:00.000Z',
                    updatedAt: '2024-02-01T00:00:00.000Z',
                    publishedAt: '2024-02-01T00:00:00.000Z',
                    image: {
                        data: {
                            id: 3,
                            attributes: {
                                name: 'matelas-bio.jpg',
                                alternativeText: 'Matelas Bio Natural',
                                caption: '',
                                width: 1080,
                                height: 1080,
                                url: 'https://images.unsplash.com/photo-1691703028663-c5ff8cbb07c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW1vcnklMjBmb2FtJTIwbWF0dHJlc3N8ZW58MXx8fHwxNzU1NjEwOTI1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
                                hash: 'matelas_bio_hash',
                                ext: '.jpg',
                                mime: 'image/jpeg',
                                size: 167.8,
                                provider: 'cloudinary',
                                createdAt: '2024-02-01T00:00:00.000Z',
                                updatedAt: '2024-02-01T00:00:00.000Z'
                            }
                        }
                    },
                    category: {
                        data: {
                            id: 1,
                            attributes: {
                                name: 'Matelas',
                                slug: 'matelas',
                                description: 'Matelas de qualité premium',
                                icon: '🛏️',
                                featured: true,
                                createdAt: '2024-01-01T00:00:00.000Z',
                                updatedAt: '2024-01-01T00:00:00.000Z',
                                publishedAt: '2024-01-01T00:00:00.000Z'
                            }
                        }
                    }
                }
            },
            // === SOMMIERS ===
            {
                id: 4,
                attributes: {
                    title: 'Sommier Tapissier Prestige',
                    slug: 'sommier-tapissier-prestige',
                    description: 'Sommier tapissier haut de gamme avec suspension à ressorts biconiques. Structure en bois massif et tissu noble pour une élégance intemporelle et un soutien parfait.',
                    shortDescription: 'Sommier tapissier à ressorts biconiques',
                    price: 329,
                    originalPrice: 429,
                    discount: 23,
                    sku: 'SOM-TAP-001',
                    stock: 22,
                    featured: true,
                    bestSeller: true,
                    new: false,
                    rating: 4.3,
                    reviewsCount: 5672,
                    specifications: {
                        firmness: 'Medium',
                        thickness: '15cm',
                        materials: [
                            'Bois massif',
                            'Ressorts biconiques',
                            'Tissu noble'
                        ],
                        warranty: '5 ans',
                        trialPeriod: '30 nuits'
                    },
                    sizes: [
                        {
                            name: 'Single',
                            price: 329,
                            originalPrice: 429,
                            dimensions: '90x200cm',
                            available: true
                        },
                        {
                            name: 'Queen',
                            price: 429,
                            originalPrice: 559,
                            dimensions: '160x200cm',
                            available: true
                        },
                        {
                            name: 'King',
                            price: 529,
                            originalPrice: 689,
                            dimensions: '180x200cm',
                            available: true
                        },
                        {
                            name: 'California King',
                            price: 629,
                            originalPrice: 819,
                            dimensions: '180x210cm',
                            available: true
                        }
                    ],
                    colors: [
                        {
                            name: 'Gris Perle',
                            hex: '#C0C0C0',
                            image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWQlMjBmcmFtZSUyMHdvb2R8ZW58MXx8fHwxNzU1NjEwOTI1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
                        },
                        {
                            name: 'Beige Naturel',
                            hex: '#F5F5DC',
                            image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZGp1c3RhYmxlJTIwYmVkfGVufDF8fHx8MTc1NTYxMDkyNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
                        }
                    ],
                    createdAt: '2024-01-01T00:00:00.000Z',
                    updatedAt: '2024-01-01T00:00:00.000Z',
                    publishedAt: '2024-01-01T00:00:00.000Z',
                    image: {
                        data: {
                            id: 4,
                            attributes: {
                                name: 'sommier-tapissier.jpg',
                                alternativeText: 'Sommier Tapissier Prestige',
                                caption: '',
                                width: 1080,
                                height: 1080,
                                url: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWQlMjBmcmFtZSUyMHdvb2R8ZW58MXx8fHwxNzU1NjEwOTI1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
                                hash: 'sommier_tapissier_hash',
                                ext: '.jpg',
                                mime: 'image/jpeg',
                                size: 234.1,
                                provider: 'cloudinary',
                                createdAt: '2024-01-01T00:00:00.000Z',
                                updatedAt: '2024-01-01T00:00:00.000Z'
                            }
                        }
                    },
                    category: {
                        data: {
                            id: 2,
                            attributes: {
                                name: 'Sommiers',
                                slug: 'sommiers',
                                description: 'Sommiers robustes et élégants',
                                icon: '🏠',
                                featured: true,
                                createdAt: '2024-01-01T00:00:00.000Z',
                                updatedAt: '2024-01-01T00:00:00.000Z',
                                publishedAt: '2024-01-01T00:00:00.000Z'
                            }
                        }
                    }
                }
            },
            {
                id: 5,
                attributes: {
                    title: 'Sommier Électrique Relaxation',
                    slug: 'sommier-electrique-relaxation',
                    description: 'Sommier électrique de relaxation avec 2 moteurs silencieux. Position massage et relevage tête et pieds pour un confort personnalisé. Télécommande sans fil incluse.',
                    shortDescription: 'Sommier électrique 2 moteurs avec massage',
                    price: 899,
                    originalPrice: 1199,
                    discount: 25,
                    sku: 'SOM-ELE-002',
                    stock: 8,
                    featured: true,
                    bestSeller: false,
                    new: true,
                    rating: 4.7,
                    reviewsCount: 1843,
                    specifications: {
                        firmness: 'Adjustable',
                        thickness: '12cm',
                        materials: [
                            'Métal renforcé',
                            'Moteurs Okin',
                            'Lattes multiplis'
                        ],
                        warranty: '3 ans',
                        trialPeriod: '30 nuits'
                    },
                    sizes: [
                        {
                            name: 'Single',
                            price: 899,
                            originalPrice: 1199,
                            dimensions: '90x200cm',
                            available: true
                        },
                        {
                            name: 'Queen',
                            price: 1199,
                            originalPrice: 1599,
                            dimensions: '160x200cm',
                            available: true
                        },
                        {
                            name: 'King',
                            price: 1499,
                            originalPrice: 1999,
                            dimensions: '180x200cm',
                            available: true
                        },
                        {
                            name: 'California King',
                            price: 1699,
                            originalPrice: 2299,
                            dimensions: '180x210cm',
                            available: false
                        }
                    ],
                    createdAt: '2024-01-20T00:00:00.000Z',
                    updatedAt: '2024-01-20T00:00:00.000Z',
                    publishedAt: '2024-01-20T00:00:00.000Z',
                    image: {
                        data: {
                            id: 5,
                            attributes: {
                                name: 'sommier-electrique.jpg',
                                alternativeText: 'Sommier Électrique Relaxation',
                                caption: '',
                                width: 1080,
                                height: 1080,
                                url: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZGp1c3RhYmxlJTIwYmVkfGVufDF8fHx8MTc1NTYxMDkyNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
                                hash: 'sommier_electrique_hash',
                                ext: '.jpg',
                                mime: 'image/jpeg',
                                size: 198.7,
                                provider: 'cloudinary',
                                createdAt: '2024-01-20T00:00:00.000Z',
                                updatedAt: '2024-01-20T00:00:00.000Z'
                            }
                        }
                    },
                    category: {
                        data: {
                            id: 2,
                            attributes: {
                                name: 'Sommiers',
                                slug: 'sommiers',
                                description: 'Sommiers robustes et élégants',
                                icon: '🏠',
                                featured: true,
                                createdAt: '2024-01-01T00:00:00.000Z',
                                updatedAt: '2024-01-01T00:00:00.000Z',
                                publishedAt: '2024-01-01T00:00:00.000Z'
                            }
                        }
                    }
                }
            },
            // === OREILLERS ===
            {
                id: 6,
                attributes: {
                    title: 'Oreiller Ergonomique Mémoire',
                    slug: 'oreiller-ergonomique-memoire',
                    description: 'Oreiller ergonomique en mousse mémoire de forme avec double contour cervical. Maintien optimal de la nuque et des cervicales pour réduire les tensions et améliorer la qualité du sommeil.',
                    shortDescription: 'Oreiller mémoire de forme double contour',
                    price: 79,
                    originalPrice: 99,
                    discount: 20,
                    sku: 'ORE-ERG-001',
                    stock: 45,
                    featured: true,
                    bestSeller: true,
                    new: false,
                    rating: 4.4,
                    reviewsCount: 12456,
                    specifications: {
                        firmness: 'Medium-Firm',
                        thickness: '12cm',
                        materials: [
                            'Mousse mémoire',
                            'Housse bambou',
                            'Gel refroidissant'
                        ],
                        warranty: '2 ans',
                        trialPeriod: '30 nuits'
                    },
                    sizes: [
                        {
                            name: 'Standard',
                            price: 79,
                            originalPrice: 99,
                            dimensions: '60x40cm',
                            available: true
                        }
                    ],
                    createdAt: '2024-01-01T00:00:00.000Z',
                    updatedAt: '2024-01-01T00:00:00.000Z',
                    publishedAt: '2024-01-01T00:00:00.000Z',
                    image: {
                        data: {
                            id: 6,
                            attributes: {
                                name: 'oreiller-ergonomique.jpg',
                                alternativeText: 'Oreiller Ergonomique Mémoire',
                                caption: '',
                                width: 1080,
                                height: 1080,
                                url: 'https://images.unsplash.com/photo-1586047844853-e2044ab00b8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaWxsb3clMjBtZW1vcnklMjBmb2FtfGVufDF8fHx8MTc1NTYxMDkyNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
                                hash: 'oreiller_ergonomique_hash',
                                ext: '.jpg',
                                mime: 'image/jpeg',
                                size: 123.4,
                                provider: 'cloudinary',
                                createdAt: '2024-01-01T00:00:00.000Z',
                                updatedAt: '2024-01-01T00:00:00.000Z'
                            }
                        }
                    },
                    category: {
                        data: {
                            id: 3,
                            attributes: {
                                name: 'Oreillers',
                                slug: 'oreillers',
                                description: 'Oreillers ergonomiques pour tous les dormeurs',
                                icon: '💤',
                                featured: true,
                                createdAt: '2024-01-01T00:00:00.000Z',
                                updatedAt: '2024-01-01T00:00:00.000Z',
                                publishedAt: '2024-01-01T00:00:00.000Z'
                            }
                        }
                    }
                }
            },
            {
                id: 7,
                attributes: {
                    title: 'Oreiller Duvet Premium',
                    slug: 'oreiller-duvet-premium',
                    description: 'Oreiller en duvet d\'oie 90% avec plumettes 10%. Gonflant exceptionnel et douceur incomparable. Enveloppe 100% coton percale 200 fils pour une respirabilité optimale.',
                    shortDescription: 'Oreiller duvet d\'oie 90% premium',
                    price: 129,
                    originalPrice: 179,
                    discount: 28,
                    sku: 'ORE-DUV-002',
                    stock: 32,
                    featured: true,
                    bestSeller: false,
                    new: false,
                    rating: 4.6,
                    reviewsCount: 7891,
                    specifications: {
                        firmness: 'Soft',
                        thickness: '15cm',
                        materials: [
                            'Duvet d\'oie 90%',
                            'Plumettes 10%',
                            'Coton percale'
                        ],
                        warranty: '3 ans',
                        trialPeriod: '30 nuits'
                    },
                    sizes: [
                        {
                            name: 'Standard',
                            price: 129,
                            originalPrice: 179,
                            dimensions: '65x65cm',
                            available: true
                        },
                        {
                            name: 'King Size',
                            price: 149,
                            originalPrice: 199,
                            dimensions: '50x70cm',
                            available: true
                        }
                    ],
                    createdAt: '2024-01-10T00:00:00.000Z',
                    updatedAt: '2024-01-10T00:00:00.000Z',
                    publishedAt: '2024-01-10T00:00:00.000Z',
                    image: {
                        data: {
                            id: 7,
                            attributes: {
                                name: 'oreiller-duvet.jpg',
                                alternativeText: 'Oreiller Duvet Premium',
                                caption: '',
                                width: 1080,
                                height: 1080,
                                url: 'https://images.unsplash.com/photo-1520637836862-4d197d17c50a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaWxsb3clMjBmbHVmZnl8ZW58MXx8fHwxNzU1NjEwOTI1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
                                hash: 'oreiller_duvet_hash',
                                ext: '.jpg',
                                mime: 'image/jpeg',
                                size: 156.2,
                                provider: 'cloudinary',
                                createdAt: '2024-01-10T00:00:00.000Z',
                                updatedAt: '2024-01-10T00:00:00.000Z'
                            }
                        }
                    },
                    category: {
                        data: {
                            id: 3,
                            attributes: {
                                name: 'Oreillers',
                                slug: 'oreillers',
                                description: 'Oreillers ergonomiques pour tous les dormeurs',
                                icon: '💤',
                                featured: true,
                                createdAt: '2024-01-01T00:00:00.000Z',
                                updatedAt: '2024-01-01T00:00:00.000Z',
                                publishedAt: '2024-01-01T00:00:00.000Z'
                            }
                        }
                    }
                }
            },
            // === LINGE DE LIT ===
            {
                id: 8,
                attributes: {
                    title: 'Parure Satin de Coton Luxe',
                    slug: 'parure-satin-coton-luxe',
                    description: 'Parure de lit en satin de coton 120 fils avec finition satinée brillante. Douceur soyeuse et élégance raffinée pour transformer votre chambre en suite présidentielle.',
                    shortDescription: 'Parure satin de coton 120 fils',
                    price: 149,
                    originalPrice: 199,
                    discount: 25,
                    sku: 'LIN-SAT-001',
                    stock: 28,
                    featured: true,
                    bestSeller: true,
                    new: false,
                    rating: 4.5,
                    reviewsCount: 6734,
                    specifications: {
                        firmness: 'N/A',
                        thickness: 'N/A',
                        materials: [
                            'Satin de coton 120 fils',
                            'Finition satinée'
                        ],
                        warranty: '2 ans',
                        trialPeriod: '30 nuits'
                    },
                    sizes: [
                        {
                            name: 'Queen',
                            price: 149,
                            originalPrice: 199,
                            dimensions: '220x240cm',
                            available: true
                        },
                        {
                            name: 'King',
                            price: 169,
                            originalPrice: 229,
                            dimensions: '240x260cm',
                            available: true
                        }
                    ],
                    colors: [
                        {
                            name: 'Blanc Pur',
                            hex: '#FFFFFF',
                            image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWQlMjBzaGVldHMlMjBzYXRpbnxlbnwxfHx8fDE3NTU2MTA5MjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
                        },
                        {
                            name: 'Gris Perle',
                            hex: '#E5E5E5',
                            image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW1ib28lMjBiZWQlMjBzaGVldHN8ZW58MXx8fHwxNzU1NjEwOTI1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
                        },
                        {
                            name: 'Bleu Nuit',
                            hex: '#1E3A8A',
                            image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWQlMjBzaGVldHMlMjBzYXRpbnxlbnwxfHx8fDE3NTU2MTA5MjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
                        }
                    ],
                    createdAt: '2024-01-01T00:00:00.000Z',
                    updatedAt: '2024-01-01T00:00:00.000Z',
                    publishedAt: '2024-01-01T00:00:00.000Z',
                    image: {
                        data: {
                            id: 8,
                            attributes: {
                                name: 'parure-satin.jpg',
                                alternativeText: 'Parure Satin de Coton Luxe',
                                caption: '',
                                width: 1080,
                                height: 1080,
                                url: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWQlMjBzaGVldHMlMjBzYXRpbnxlbnwxfHx8fDE3NTU2MTA5MjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
                                hash: 'parure_satin_hash',
                                ext: '.jpg',
                                mime: 'image/jpeg',
                                size: 189.3,
                                provider: 'cloudinary',
                                createdAt: '2024-01-01T00:00:00.000Z',
                                updatedAt: '2024-01-01T00:00:00.000Z'
                            }
                        }
                    },
                    category: {
                        data: {
                            id: 4,
                            attributes: {
                                name: 'Linge de lit',
                                slug: 'linge-de-lit',
                                description: 'Linge de lit de luxe en matières naturelles',
                                icon: '🌿',
                                featured: true,
                                createdAt: '2024-01-01T00:00:00.000Z',
                                updatedAt: '2024-01-01T00:00:00.000Z',
                                publishedAt: '2024-01-01T00:00:00.000Z'
                            }
                        }
                    }
                }
            },
            {
                id: 9,
                attributes: {
                    title: 'Drap-Housse Bambou Bio',
                    slug: 'drap-housse-bambou-bio',
                    description: 'Drap-housse en fibres de bambou biologique ultra-douces et naturellement antibactériennes. Thermorégulateur pour un sommeil frais été comme hiver. Élastique renforcé.',
                    shortDescription: 'Drap-housse bambou bio thermorégulateur',
                    price: 59,
                    originalPrice: 79,
                    discount: 25,
                    sku: 'LIN-BAM-002',
                    stock: 67,
                    featured: true,
                    bestSeller: false,
                    new: true,
                    rating: 4.3,
                    reviewsCount: 4521,
                    specifications: {
                        firmness: 'N/A',
                        thickness: 'N/A',
                        materials: [
                            'Fibres bambou bio',
                            'Élastique renforcé'
                        ],
                        warranty: '1 an',
                        trialPeriod: '30 nuits'
                    },
                    sizes: [
                        {
                            name: 'Single',
                            price: 59,
                            originalPrice: 79,
                            dimensions: '90x200cm',
                            available: true
                        },
                        {
                            name: 'Queen',
                            price: 69,
                            originalPrice: 89,
                            dimensions: '160x200cm',
                            available: true
                        },
                        {
                            name: 'King',
                            price: 79,
                            originalPrice: 99,
                            dimensions: '180x200cm',
                            available: true
                        }
                    ],
                    createdAt: '2024-02-05T00:00:00.000Z',
                    updatedAt: '2024-02-05T00:00:00.000Z',
                    publishedAt: '2024-02-05T00:00:00.000Z',
                    image: {
                        data: {
                            id: 9,
                            attributes: {
                                name: 'drap-bambou.jpg',
                                alternativeText: 'Drap-Housse Bambou Bio',
                                caption: '',
                                width: 1080,
                                height: 1080,
                                url: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW1ib28lMjBiZWQlMjBzaGVldHN8ZW58MXx8fHwxNzU1NjEwOTI1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
                                hash: 'drap_bambou_hash',
                                ext: '.jpg',
                                mime: 'image/jpeg',
                                size: 145.7,
                                provider: 'cloudinary',
                                createdAt: '2024-02-05T00:00:00.000Z',
                                updatedAt: '2024-02-05T00:00:00.000Z'
                            }
                        }
                    },
                    category: {
                        data: {
                            id: 4,
                            attributes: {
                                name: 'Linge de lit',
                                slug: 'linge-de-lit',
                                description: 'Linge de lit de luxe en matières naturelles',
                                icon: '🌿',
                                featured: true,
                                createdAt: '2024-01-01T00:00:00.000Z',
                                updatedAt: '2024-01-01T00:00:00.000Z',
                                publishedAt: '2024-01-01T00:00:00.000Z'
                            }
                        }
                    }
                }
            },
            // === ACCESSOIRES ===
            {
                id: 10,
                attributes: {
                    title: 'Surmatelas Rafraîchissant',
                    slug: 'surmatelas-rafraichissant',
                    description: 'Surmatelas avec technologie de refroidissement par gel et fibres thermorégulatrices. Améliore le confort de votre matelas existant tout en maintenant une température optimale.',
                    shortDescription: 'Surmatelas gel refroidissant thermorégulateur',
                    price: 199,
                    originalPrice: 269,
                    discount: 26,
                    sku: 'ACC-SUR-001',
                    stock: 19,
                    featured: true,
                    bestSeller: true,
                    new: false,
                    rating: 4.4,
                    reviewsCount: 3672,
                    specifications: {
                        firmness: 'Medium',
                        thickness: '5cm',
                        materials: [
                            'Gel refroidissant',
                            'Mousse mémoire',
                            'Fibres thermorégulatrices'
                        ],
                        warranty: '3 ans',
                        trialPeriod: '30 nuits'
                    },
                    sizes: [
                        {
                            name: 'Single',
                            price: 199,
                            originalPrice: 269,
                            dimensions: '90x200cm',
                            available: true
                        },
                        {
                            name: 'Queen',
                            price: 249,
                            originalPrice: 339,
                            dimensions: '160x200cm',
                            available: true
                        },
                        {
                            name: 'King',
                            price: 299,
                            originalPrice: 399,
                            dimensions: '180x200cm',
                            available: true
                        }
                    ],
                    createdAt: '2024-01-01T00:00:00.000Z',
                    updatedAt: '2024-01-01T00:00:00.000Z',
                    publishedAt: '2024-01-01T00:00:00.000Z',
                    image: {
                        data: {
                            id: 10,
                            attributes: {
                                name: 'surmatelas-gel.jpg',
                                alternativeText: 'Surmatelas Rafraîchissant',
                                caption: '',
                                width: 1080,
                                height: 1080,
                                url: 'https://images.unsplash.com/photo-1586880244386-8b3345c9bca8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXR0cmVzcyUyMHRvcHBlcnxlbnwxfHx8fDE3NTU2MTA5MjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
                                hash: 'surmatelas_gel_hash',
                                ext: '.jpg',
                                mime: 'image/jpeg',
                                size: 176.4,
                                provider: 'cloudinary',
                                createdAt: '2024-01-01T00:00:00.000Z',
                                updatedAt: '2024-01-01T00:00:00.000Z'
                            }
                        }
                    },
                    category: {
                        data: {
                            id: 5,
                            attributes: {
                                name: 'Accessoires',
                                slug: 'accessoires',
                                description: 'Accessoires pour optimiser votre sommeil',
                                icon: '✨',
                                featured: true,
                                createdAt: '2024-01-01T00:00:00.000Z',
                                updatedAt: '2024-01-01T00:00:00.000Z',
                                publishedAt: '2024-01-01T00:00:00.000Z'
                            }
                        }
                    }
                }
            },
            {
                id: 11,
                attributes: {
                    title: 'Protège-Matelas Imperméable',
                    slug: 'protege-matelas-impermeable',
                    description: 'Protège-matelas imperméable et respirant avec membrane polyuréthane. Protection totale contre les liquides tout en laissant passer l\'air. Silencieux et ultra-confortable.',
                    shortDescription: 'Protège-matelas imperméable et respirant',
                    price: 45,
                    originalPrice: 65,
                    discount: 31,
                    sku: 'ACC-PRO-002',
                    stock: 88,
                    featured: false,
                    bestSeller: false,
                    new: false,
                    rating: 4.2,
                    reviewsCount: 9834,
                    specifications: {
                        firmness: 'N/A',
                        thickness: '0.5cm',
                        materials: [
                            'Membrane polyuréthane',
                            'Coton jersey',
                            'Élastique tour'
                        ],
                        warranty: '2 ans',
                        trialPeriod: '30 nuits'
                    },
                    sizes: [
                        {
                            name: 'Single',
                            price: 45,
                            originalPrice: 65,
                            dimensions: '90x200cm',
                            available: true
                        },
                        {
                            name: 'Queen',
                            price: 55,
                            originalPrice: 75,
                            dimensions: '160x200cm',
                            available: true
                        },
                        {
                            name: 'King',
                            price: 65,
                            originalPrice: 85,
                            dimensions: '180x200cm',
                            available: true
                        }
                    ],
                    createdAt: '2024-01-15T00:00:00.000Z',
                    updatedAt: '2024-01-15T00:00:00.000Z',
                    publishedAt: '2024-01-15T00:00:00.000Z',
                    image: {
                        data: {
                            id: 11,
                            attributes: {
                                name: 'protege-matelas.jpg',
                                alternativeText: 'Protège-Matelas Imperméable',
                                caption: '',
                                width: 1080,
                                height: 1080,
                                url: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXR0cmVzcyUyMHByb3RlY3RvcnxlbnwxfHx8fDE3NTU2MTA5MjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
                                hash: 'protege_matelas_hash',
                                ext: '.jpg',
                                mime: 'image/jpeg',
                                size: 134.6,
                                provider: 'cloudinary',
                                createdAt: '2024-01-15T00:00:00.000Z',
                                updatedAt: '2024-01-15T00:00:00.000Z'
                            }
                        }
                    },
                    category: {
                        data: {
                            id: 5,
                            attributes: {
                                name: 'Accessoires',
                                slug: 'accessoires',
                                description: 'Accessoires pour optimiser votre sommeil',
                                icon: '✨',
                                featured: true,
                                createdAt: '2024-01-01T00:00:00.000Z',
                                updatedAt: '2024-01-01T00:00:00.000Z',
                                publishedAt: '2024-01-01T00:00:00.000Z'
                            }
                        }
                    }
                }
            }
        ],
        testimonials: [
            {
                id: 1,
                attributes: {
                    name: 'Marcus',
                    location: 'Lyon, France',
                    avatar: '👨‍💼',
                    rating: 5,
                    content: 'Vivant à Lyon avec des étés chauds, ce matelas est un must absolu. La sensation de fraîcheur et le toucher du matelas me donnent globalement le meilleur sommeil que j\'aie jamais eu.',
                    productName: 'Matelas Confort Premium',
                    verified: true,
                    createdAt: '2024-01-01T00:00:00.000Z',
                    updatedAt: '2024-01-01T00:00:00.000Z',
                    publishedAt: '2024-01-01T00:00:00.000Z'
                }
            },
            {
                id: 2,
                attributes: {
                    name: 'Sophie',
                    location: 'Paris, France',
                    avatar: '👩‍🦰',
                    rating: 5,
                    content: 'Le sommier électrique a changé ma vie ! Après des problèmes de dos, je peux enfin dormir confortablement. La position massage est un vrai plus.',
                    productName: 'Sommier Électrique Relaxation',
                    verified: true,
                    createdAt: '2024-01-15T00:00:00.000Z',
                    updatedAt: '2024-01-15T00:00:00.000Z',
                    publishedAt: '2024-01-15T00:00:00.000Z'
                }
            },
            {
                id: 3,
                attributes: {
                    name: 'Jean-Pierre',
                    location: 'Marseille, France',
                    avatar: '👨‍🦳',
                    rating: 4,
                    content: 'L\'oreiller ergonomique a résolu mes problèmes de cervicales. Maintien parfait et confort exceptionnel. Je le recommande à tous !',
                    productName: 'Oreiller Ergonomique Mémoire',
                    verified: true,
                    createdAt: '2024-02-01T00:00:00.000Z',
                    updatedAt: '2024-02-01T00:00:00.000Z',
                    publishedAt: '2024-02-01T00:00:00.000Z'
                }
            }
        ],
        heroSlides: [
            {
                id: 1,
                attributes: {
                    title: 'Des nuits de rêve vous attendent',
                    subtitle: 'EXCELLENCE LITERIE',
                    description: 'Découvrez notre gamme premium de matelas, oreillers et accessoires pour un sommeil réparateur.',
                    ctaPrimary: 'Découvrir nos produits',
                    ctaSecondary: 'Solutions B2B',
                    badge: 'NOUVEAUTÉ',
                    order: 1,
                    active: true,
                    createdAt: '2024-01-01T00:00:00.000Z',
                    updatedAt: '2024-01-01T00:00:00.000Z',
                    publishedAt: '2024-01-01T00:00:00.000Z',
                    image: {
                        data: {
                            id: 1,
                            attributes: {
                                name: 'hero-slide-1.jpg',
                                alternativeText: 'Hero slide 1',
                                caption: '',
                                width: 1080,
                                height: 720,
                                url: 'https://images.unsplash.com/photo-1648634158203-199accfd7afc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtYXR0cmVzcyUyMGJlZHJvb218ZW58MXx8fHwxNzU1NjQyNDUwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
                                hash: 'hero_slide_1_hash',
                                ext: '.jpg',
                                mime: 'image/jpeg',
                                size: 345.2,
                                provider: 'cloudinary',
                                createdAt: '2024-01-01T00:00:00.000Z',
                                updatedAt: '2024-01-01T00:00:00.000Z'
                            }
                        }
                    }
                }
            }
        ]
    };
    // MÉTHODES API
    // Récupérer tous les produits
    async getProducts(params = {}) {
        await this.delay();
        let filteredProducts = [
            ...this.mockData.products
        ];
        // Appliquer les filtres
        if (params.filters) {
            if (params.filters.category?.slug?.$eq) {
                filteredProducts = filteredProducts.filter((p)=>p.attributes.category.data.attributes.slug === params.filters.category.slug.$eq);
            }
            if (params.filters.featured !== undefined) {
                filteredProducts = filteredProducts.filter((p)=>p.attributes.featured === params.filters.featured);
            }
            if (params.filters.bestSeller !== undefined) {
                filteredProducts = filteredProducts.filter((p)=>p.attributes.bestSeller === params.filters.bestSeller);
            }
            if (params.filters.id?.$ne) {
                filteredProducts = filteredProducts.filter((p)=>p.id !== params.filters.id.$ne);
            }
        }
        // Appliquer le tri
        if (params.sort) {
            const sortField = Array.isArray(params.sort) ? params.sort[0] : params.sort;
            if (sortField === 'createdAt:desc') {
                filteredProducts.sort((a, b)=>new Date(b.attributes.createdAt).getTime() - new Date(a.attributes.createdAt).getTime());
            } else if (sortField === 'featured:desc') {
                filteredProducts.sort((a, b)=>{
                    if (a.attributes.featured && !b.attributes.featured) return -1;
                    if (!a.attributes.featured && b.attributes.featured) return 1;
                    return 0;
                });
            } else if (sortField === 'price:asc') {
                filteredProducts.sort((a, b)=>a.attributes.price - b.attributes.price);
            } else if (sortField === 'price:desc') {
                filteredProducts.sort((a, b)=>b.attributes.price - a.attributes.price);
            }
        }
        // Pagination
        const page = params.pagination?.page || 1;
        const pageSize = params.pagination?.pageSize || 25;
        const startIndex = (page - 1) * pageSize;
        const endIndex = startIndex + pageSize;
        const paginatedProducts = filteredProducts.slice(startIndex, endIndex);
        return {
            data: paginatedProducts,
            meta: {
                pagination: {
                    page,
                    pageSize,
                    pageCount: Math.ceil(filteredProducts.length / pageSize),
                    total: filteredProducts.length
                }
            }
        };
    }
    // Récupérer un produit par ID
    async getProduct(id, params = {}) {
        await this.delay();
        const product = this.mockData.products.find((p)=>p.id === id);
        if (!product) {
            throw new Error(`Product with ID ${id} not found`);
        }
        return {
            data: product,
            meta: {}
        };
    }
    // Récupérer un produit par slug
    async getProductBySlug(slug, params = {}) {
        await this.delay();
        const product = this.mockData.products.find((p)=>p.attributes.slug === slug);
        if (!product) {
            throw new Error(`Product with slug ${slug} not found`);
        }
        return {
            data: product,
            meta: {}
        };
    }
    // Récupérer les produits par catégorie
    async getProductsByCategory(categorySlug, params = {}) {
        await this.delay();
        const filteredProducts = this.mockData.products.filter((p)=>p.attributes.category.data.attributes.slug === categorySlug);
        // Appliquer les paramètres de tri
        let sortedProducts = [
            ...filteredProducts
        ];
        if (params.sort) {
            const sortField = Array.isArray(params.sort) ? params.sort[0] : params.sort;
            if (sortField === 'featured:desc') {
                sortedProducts.sort((a, b)=>{
                    if (a.attributes.featured && !b.attributes.featured) return -1;
                    if (!a.attributes.featured && b.attributes.featured) return 1;
                    return 0;
                });
            }
        }
        return {
            data: sortedProducts,
            meta: {
                pagination: {
                    page: 1,
                    pageSize: 25,
                    pageCount: 1,
                    total: sortedProducts.length
                }
            }
        };
    }
    // Récupérer toutes les catégories
    async getCategories(params = {}) {
        await this.delay();
        let filteredCategories = [
            ...this.mockData.categories
        ];
        // Appliquer les filtres
        if (params.filters?.slug?.$eq) {
            filteredCategories = filteredCategories.filter((c)=>c.attributes.slug === params.filters.slug.$eq);
        }
        return {
            data: filteredCategories,
            meta: {
                pagination: {
                    page: 1,
                    pageSize: 25,
                    pageCount: 1,
                    total: filteredCategories.length
                }
            }
        };
    }
    // Récupérer les témoignages
    async getTestimonials(params = {}) {
        await this.delay();
        return {
            data: this.mockData.testimonials,
            meta: {
                pagination: {
                    page: 1,
                    pageSize: 25,
                    pageCount: 1,
                    total: this.mockData.testimonials.length
                }
            }
        };
    }
    // Récupérer les slides du hero
    async getHeroSlides(params = {}) {
        await this.delay();
        return {
            data: this.mockData.heroSlides,
            meta: {
                pagination: {
                    page: 1,
                    pageSize: 25,
                    pageCount: 1,
                    total: this.mockData.heroSlides.length
                }
            }
        };
    }
    // Créer une commande
    async createOrder(orderData) {
        await this.delay();
        const order = {
            id: Date.now(),
            attributes: {
                ...orderData,
                orderNumber: `FIMA-${Date.now()}`,
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString()
            }
        };
        return {
            data: order,
            meta: {}
        };
    }
    // Méthode générique pour faire des appels API réels (à utiliser avec un vrai Strapi)
    async apiCall(endpoint, options = {}) {
        const url = `${this.baseUrl}${endpoint}`;
        const response = await fetch(url, {
            ...options,
            headers: {
                ...this.headers,
                ...options.headers
            }
        });
        if (!response.ok) {
            throw new Error(`API Error: ${response.status} ${response.statusText}`);
        }
        return response.json();
    }
}
const strapiApi = new StrapiApiService();
}),
];

//# sourceMappingURL=src_6a5a9e16._.js.map