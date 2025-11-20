import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { toast } from 'sonner@2.0.3';

interface Address {
  id: string;
  type: 'home' | 'work' | 'other';
  label: string;
  firstName: string;
  lastName: string;
  company?: string;
  address: string;
  addressLine2?: string;
  city: string;
  postalCode: string;
  country: string;
  phone?: string;
  isDefault: boolean;
}

interface Order {
  id: string;
  orderNumber: string;
  date: string;
  status: 'pending' | 'confirmed' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  total: number;
  currency: string;
  items: {
    id: string;
    title: string;
    image: string;
    price: number;
    quantity: number;
    size: string;
  }[];
  shippingAddress: Address;
  paymentMethod: string;
  trackingNumber?: string;
}

interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phone?: string;
  company?: string;
  accountType: 'individual' | 'business';
  role?: 'admin' | 'user'; // Ajout du rôle pour le CMS
  profileImage?: string;
  joinedDate: string;
  lastLoginDate: string;
  isEmailVerified: boolean;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    orderUpdates: boolean;
    promotions: boolean;
  };
}

interface UserContextType {
  // User authentication
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  
  // Auth actions
  login: (email: string, password: string) => Promise<boolean>;
  signup: (userData: any) => Promise<boolean>;
  logout: () => void;
  updateProfile: (userData: Partial<User>) => Promise<boolean>;
  
  // Addresses
  addresses: Address[];
  addAddress: (address: Omit<Address, 'id'>) => void;
  updateAddress: (id: string, address: Partial<Address>) => void;
  deleteAddress: (id: string) => void;
  setDefaultAddress: (id: string) => void;
  
  // Orders
  orders: Order[];
  getOrderById: (id: string) => Order | undefined;
  addOrder: (order: Omit<Order, 'id'>) => void;
  
  // Settings
  updatePreferences: (preferences: Partial<User['preferences']>) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [addresses, setAddresses] = useState<Address[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);

  const isAuthenticated = !!user;

  // Load user data from localStorage on mount
  useEffect(() => {
    const loadUserData = () => {
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
      } finally {
        setIsLoading(false);
      }
    };

    loadUserData();
  }, []);

  // Save user data to localStorage
  useEffect(() => {
    if (user) {
      localStorage.setItem('fima-user', JSON.stringify(user));
    } else {
      localStorage.removeItem('fima-user');
    }
  }, [user]);

  useEffect(() => {
    localStorage.setItem('fima-addresses', JSON.stringify(addresses));
  }, [addresses]);

  useEffect(() => {
    localStorage.setItem('fima-orders', JSON.stringify(orders));
  }, [orders]);

  // Auth functions
  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    
    try {
      // Simulation d'appel API
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Données utilisateur mockées
      const userData: User = {
        id: `user-${Date.now()}`,
        email,
        firstName: 'Jean',
        lastName: 'Dupont',
        phone: '+225 07 12 34 56',
        company: email.includes('business') ? 'Entreprise SARL' : undefined,
        accountType: email.includes('business') ? 'business' : 'individual',
        role: email.includes('admin') ? 'admin' : 'user', // Ajout du rôle pour le CMS
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
        const sampleOrders: Order[] = [
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
      
      toast.success('Connexion réussie !');
      return true;
    } catch (error) {
      toast.error('Erreur de connexion');
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const signup = async (userData: any): Promise<boolean> => {
    setIsLoading(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const newUser: User = {
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
      toast.success('Compte créé avec succès !');
      return true;
    } catch (error) {
      toast.error('Erreur lors de la création du compte');
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    setAddresses([]);
    setOrders([]);
    localStorage.removeItem('fima-user');
    localStorage.removeItem('fima-addresses');
    localStorage.removeItem('fima-orders');
    toast.success('Déconnexion réussie');
  };

  const updateProfile = async (userData: Partial<User>): Promise<boolean> => {
    if (!user) return false;
    
    try {
      await new Promise(resolve => setTimeout(resolve, 500));
      
      setUser(prev => prev ? { ...prev, ...userData } : null);
      toast.success('Profil mis à jour');
      return true;
    } catch (error) {
      toast.error('Erreur de mise à jour');
      return false;
    }
  };

  // Address functions
  const addAddress = (address: Omit<Address, 'id'>) => {
    const newAddress: Address = {
      ...address,
      id: `addr-${Date.now()}`,
      isDefault: addresses.length === 0 ? true : address.isDefault
    };
    
    setAddresses(prev => {
      if (newAddress.isDefault) {
        return [newAddress, ...prev.map(addr => ({ ...addr, isDefault: false }))];
      }
      return [...prev, newAddress];
    });
    
    toast.success('Adresse ajoutée');
  };

  const updateAddress = (id: string, updatedAddress: Partial<Address>) => {
    setAddresses(prev => prev.map(addr => 
      addr.id === id ? { ...addr, ...updatedAddress } : addr
    ));
    toast.success('Adresse mise à jour');
  };

  const deleteAddress = (id: string) => {
    setAddresses(prev => {
      const filtered = prev.filter(addr => addr.id !== id);
      // Si on supprime l'adresse par défaut, définir la première comme défaut
      if (prev.find(addr => addr.id === id)?.isDefault && filtered.length > 0) {
        filtered[0].isDefault = true;
      }
      return filtered;
    });
    toast.success('Adresse supprimée');
  };

  const setDefaultAddress = (id: string) => {
    setAddresses(prev => prev.map(addr => ({
      ...addr,
      isDefault: addr.id === id
    })));
    toast.success('Adresse par défaut mise à jour');
  };

  // Order functions
  const getOrderById = (id: string) => {
    return orders.find(order => order.id === id);
  };

  const addOrder = (order: Omit<Order, 'id'>) => {
    const newOrder: Order = {
      ...order,
      id: `order-${Date.now()}`
    };
    
    setOrders(prev => [newOrder, ...prev]);
    return newOrder;
  };

  const updatePreferences = (preferences: Partial<User['preferences']>) => {
    if (!user) return;
    
    setUser(prev => prev ? {
      ...prev,
      preferences: { ...prev.preferences, ...preferences }
    } : null);
    
    toast.success('Préférences mises à jour');
  };

  const value: UserContextType = {
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

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}