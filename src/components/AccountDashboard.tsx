import { useState } from 'react';
import { 
  User, 
  Package, 
  MapPin, 
  Heart, 
  Settings, 
  LogOut, 
  Edit, 
  Plus,
  ArrowLeft,
  Eye,
  Truck,
  Calendar,
  CreditCard,
  Phone,
  Mail,
  Building
} from 'lucide-react';
import { useUser } from '../contexts/UserContext';
import { useApp } from '../contexts/AppContext';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Badge } from './ui/badge';
import { Avatar, AvatarFallback } from './ui/avatar';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Switch } from './ui/switch';
import { Separator } from './ui/separator';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { toast } from 'sonner@2.0.3';

interface AccountDashboardProps {
  onBack: () => void;
  onNavigate: (page: string, data?: any) => void;
}

type DashboardTab = 'overview' | 'orders' | 'addresses' | 'wishlist' | 'settings';

export function AccountDashboard({ onBack, onNavigate }: AccountDashboardProps) {
  const { user, logout, updateProfile, addresses, addAddress, updateAddress, deleteAddress, setDefaultAddress, orders, updatePreferences } = useUser();
  const { favorites, removeFromFavorites } = useApp();
  
  const [activeTab, setActiveTab] = useState<DashboardTab>('overview');
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [isAddingAddress, setIsAddingAddress] = useState(false);
  const [editingAddress, setEditingAddress] = useState<any>(null);
  
  // États des formulaires
  const [profileForm, setProfileForm] = useState({
    firstName: user?.firstName || '',
    lastName: user?.lastName || '',
    phone: user?.phone || '',
    company: user?.company || ''
  });

  const [addressForm, setAddressForm] = useState({
    type: 'home' as const,
    label: '',
    firstName: '',
    lastName: '',
    company: '',
    address: '',
    addressLine2: '',
    city: '',
    postalCode: '',
    country: 'CI',
    phone: '',
    isDefault: false
  });

  if (!user) {
    onNavigate('auth');
    return null;
  }

  const handleLogout = () => {
    logout();
    onNavigate('home');
  };

  const handleProfileUpdate = async () => {
    const success = await updateProfile(profileForm);
    if (success) {
      setIsEditingProfile(false);
    }
  };

  const handleAddAddress = () => {
    if (!addressForm.label || !addressForm.firstName || !addressForm.lastName || !addressForm.address || !addressForm.city) {
      toast.error('Veuillez remplir tous les champs obligatoires');
      return;
    }
    
    addAddress(addressForm);
    setAddressForm({
      type: 'home',
      label: '',
      firstName: '',
      lastName: '',
      company: '',
      address: '',
      addressLine2: '',
      city: '',
      postalCode: '',
      country: 'CI',
      phone: '',
      isDefault: false
    });
    setIsAddingAddress(false);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'delivered': return 'bg-green-100 text-green-800';
      case 'shipped': return 'bg-blue-100 text-blue-800';
      case 'processing': return 'bg-yellow-100 text-yellow-800';
      case 'confirmed': return 'bg-purple-100 text-purple-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'pending': return 'En attente';
      case 'confirmed': return 'Confirmée';
      case 'processing': return 'En préparation';
      case 'shipped': return 'Expédiée';
      case 'delivered': return 'Livrée';
      case 'cancelled': return 'Annulée';
      default: return status;
    }
  };

  const renderOverview = () => (
    <div className="space-y-6">
      {/* Welcome Section */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center gap-4">
            <Avatar className="w-16 h-16">
              <AvatarFallback className="text-lg" style={{ backgroundColor: '#B5C233', color: 'white' }}>
                {user.firstName[0]}{user.lastName[0]}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <h2 className="text-2xl font-bold" style={{ fontFamily: 'Montserrat' }}>
                Bonjour {user.firstName} !
              </h2>
              <p className="text-gray-600">
                Bienvenue dans votre espace personnel FIMA
              </p>
              <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                <span>Membre depuis {new Date(user.joinedDate).toLocaleDateString('fr-FR')}</span>
                {!user.isEmailVerified && (
                  <Badge variant="outline" className="text-orange-600 border-orange-600">
                    Email à vérifier
                  </Badge>
                )}
              </div>
            </div>
            <Button variant="outline" onClick={() => setIsEditingProfile(true)}>
              <Edit className="w-4 h-4 mr-2" />
              Modifier le profil
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <Package className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-2xl font-bold">{orders.length}</p>
                <p className="text-gray-600">Commandes</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <p className="text-2xl font-bold">{favorites.length}</p>
                <p className="text-gray-600">Favoris</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <MapPin className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-2xl font-bold">{addresses.length}</p>
                <p className="text-gray-600">Adresses</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Orders */}
      <Card>
        <CardHeader>
          <CardTitle>Commandes récentes</CardTitle>
        </CardHeader>
        <CardContent>
          {orders.length === 0 ? (
            <div className="text-center py-8">
              <Package className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 mb-4">Aucune commande pour le moment</p>
              <Button onClick={() => onNavigate('all-products')}>
                Découvrir nos produits
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              {orders.slice(0, 3).map((order) => (
                <div key={order.id} className="flex items-center justify-between p-4 border rounded-lg hover:border-primary/50 transition-colors">
                  <div className="flex items-center gap-4">
                    <div>
                      <button 
                        onClick={() => onNavigate('order-detail', { orderId: order.id })}
                        className="font-medium text-primary hover:text-primary/80 transition-colors"
                      >
                        #{order.orderNumber}
                      </button>
                      <p className="text-sm text-gray-600">
                        {new Date(order.date).toLocaleDateString('fr-FR')}
                      </p>
                    </div>
                    <Badge className={getStatusColor(order.status)}>
                      {getStatusText(order.status)}
                    </Badge>
                  </div>
                  <div className="text-right">
                    <p className="font-bold">{order.total.toLocaleString()} {order.currency}</p>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => onNavigate('order-detail', { orderId: order.id })}
                    >
                      <Eye className="w-4 h-4 mr-1" />
                      Voir
                    </Button>
                  </div>
                </div>
              ))}
              {orders.length > 3 && (
                <Button variant="outline" onClick={() => setActiveTab('orders')} className="w-full">
                  Voir toutes les commandes
                </Button>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );

  const renderOrders = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold" style={{ fontFamily: 'Montserrat' }}>
          Mes commandes
        </h2>
      </div>

      {orders.length === 0 ? (
        <Card>
          <CardContent className="p-12 text-center">
            <Package className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Aucune commande</h3>
            <p className="text-gray-600 mb-6">
              Vous n'avez pas encore passé de commande. Découvrez notre catalogue !
            </p>
            <Button onClick={() => onNavigate('all-products')}>
              Voir nos produits
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          {orders.map((order) => (
            <Card key={order.id}>
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <button 
                      onClick={() => onNavigate('order-detail', { orderId: order.id })}
                      className="font-bold text-lg text-primary hover:text-primary/80 transition-colors text-left"
                    >
                      Commande #{order.orderNumber}
                    </button>
                    <p className="text-gray-600">
                      Passée le {new Date(order.date).toLocaleDateString('fr-FR')}
                    </p>
                  </div>
                  <Badge className={getStatusColor(order.status)}>
                    {getStatusText(order.status)}
                  </Badge>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                  <div>
                    <h4 className="font-medium mb-2">Articles commandés</h4>
                    <div className="space-y-2">
                      {order.items.map((item) => (
                        <div key={item.id} className="flex items-center gap-3 text-sm">
                          <div className="w-10 h-10 bg-gray-100 rounded"></div>
                          <div className="flex-1">
                            <p className="font-medium">{item.title}</p>
                            <p className="text-gray-600">Taille: {item.size} • Qté: {item.quantity}</p>
                          </div>
                          <p className="font-medium">{item.price.toLocaleString()} F CFA</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">Détails</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Montant total:</span>
                        <span className="font-bold">{order.total.toLocaleString()} {order.currency}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Paiement:</span>
                        <span>{order.paymentMethod}</span>
                      </div>
                      {order.trackingNumber && (
                        <div className="flex justify-between">
                          <span>Suivi:</span>
                          <span className="font-mono">{order.trackingNumber}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => onNavigate('order-detail', { orderId: order.id })}
                  >
                    <Eye className="w-4 h-4 mr-1" />
                    Détails
                  </Button>
                  {order.status === 'shipped' && (
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => onNavigate('order-tracking', { orderId: order.id })}
                    >
                      <Truck className="w-4 h-4 mr-1" />
                      Suivre
                    </Button>
                  )}
                  {order.status === 'delivered' && (
                    <Button variant="outline" size="sm">
                      Racheter
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );

  const renderAddresses = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold" style={{ fontFamily: 'Montserrat' }}>
          Mes adresses
        </h2>
        <Dialog open={isAddingAddress} onOpenChange={setIsAddingAddress}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Ajouter une adresse
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Nouvelle adresse</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div className="grid grid-cols-3 gap-2">
                {['home', 'work', 'other'].map((type) => (
                  <button
                    key={type}
                    onClick={() => setAddressForm({...addressForm, type: type as any})}
                    className={`p-3 border rounded-lg text-sm ${
                      addressForm.type === type ? 'border-primary bg-primary/10' : 'border-gray-300'
                    }`}
                  >
                    {type === 'home' ? 'Domicile' : type === 'work' ? 'Travail' : 'Autre'}
                  </button>
                ))}
              </div>
              
              <div>
                <Label htmlFor="label">Nom de l'adresse *</Label>
                <Input
                  id="label"
                  value={addressForm.label}
                  onChange={(e) => setAddressForm({...addressForm, label: e.target.value})}
                  placeholder="Ex: Maison, Bureau..."
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <Label htmlFor="firstName">Prénom *</Label>
                  <Input
                    id="firstName"
                    value={addressForm.firstName}
                    onChange={(e) => setAddressForm({...addressForm, firstName: e.target.value})}
                  />
                </div>
                <div>
                  <Label htmlFor="lastName">Nom *</Label>
                  <Input
                    id="lastName"
                    value={addressForm.lastName}
                    onChange={(e) => setAddressForm({...addressForm, lastName: e.target.value})}
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="address">Adresse *</Label>
                <Input
                  id="address"
                  value={addressForm.address}
                  onChange={(e) => setAddressForm({...addressForm, address: e.target.value})}
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <Label htmlFor="city">Ville *</Label>
                  <Input
                    id="city"
                    value={addressForm.city}
                    onChange={(e) => setAddressForm({...addressForm, city: e.target.value})}
                  />
                </div>
                <div>
                  <Label htmlFor="postalCode">Code postal</Label>
                  <Input
                    id="postalCode"
                    value={addressForm.postalCode}
                    onChange={(e) => setAddressForm({...addressForm, postalCode: e.target.value})}
                  />
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Switch
                  id="default"
                  checked={addressForm.isDefault}
                  onCheckedChange={(checked) => setAddressForm({...addressForm, isDefault: checked})}
                />
                <Label htmlFor="default">Définir comme adresse par défaut</Label>
              </div>

              <div className="flex gap-2">
                <Button variant="outline" onClick={() => setIsAddingAddress(false)} className="flex-1">
                  Annuler
                </Button>
                <Button onClick={handleAddAddress} className="flex-1">
                  Ajouter
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {addresses.length === 0 ? (
        <Card>
          <CardContent className="p-12 text-center">
            <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Aucune adresse</h3>
            <p className="text-gray-600 mb-6">
              Ajoutez vos adresses pour faciliter vos commandes
            </p>
            <Button onClick={() => setIsAddingAddress(true)}>
              <Plus className="w-4 h-4 mr-2" />
              Ajouter une adresse
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {addresses.map((address) => (
            <Card key={address.id} className={address.isDefault ? 'ring-2 ring-primary' : ''}>
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <h3 className="font-medium">{address.label}</h3>
                    {address.isDefault && (
                      <Badge variant="secondary">Par défaut</Badge>
                    )}
                  </div>
                  <div className="flex gap-1">
                    <Button variant="ghost" size="sm">
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm" onClick={() => deleteAddress(address.id)}>
                      ×
                    </Button>
                  </div>
                </div>
                
                <div className="space-y-1 text-sm text-gray-600">
                  <p className="font-medium text-black">{address.firstName} {address.lastName}</p>
                  {address.company && <p>{address.company}</p>}
                  <p>{address.address}</p>
                  {address.addressLine2 && <p>{address.addressLine2}</p>}
                  <p>{address.city} {address.postalCode}</p>
                  {address.phone && <p>{address.phone}</p>}
                </div>

                {!address.isDefault && (
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => setDefaultAddress(address.id)}
                    className="mt-3 w-full"
                  >
                    Définir par défaut
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );

  const renderWishlist = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold" style={{ fontFamily: 'Montserrat' }}>
        Ma liste de souhaits
      </h2>

      {favorites.length === 0 ? (
        <Card>
          <CardContent className="p-12 text-center">
            <Heart className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Liste vide</h3>
            <p className="text-gray-600 mb-6">
              Ajoutez des produits à vos favoris pour les retrouver ici
            </p>
            <Button onClick={() => onNavigate('all-products')}>
              Découvrir nos produits
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {favorites.map((item) => (
            <Card key={item.id}>
              <CardContent className="p-4">
                <div className="aspect-square bg-gray-100 rounded-lg mb-4"></div>
                <div className="space-y-2">
                  <h3 className="font-medium">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.category}</p>
                  <div className="flex items-center justify-between">
                    <p className="font-bold text-lg">{item.price.toLocaleString()} F CFA</p>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => removeFromFavorites(item.id)}
                    >
                      <Heart className="w-4 h-4 fill-current" />
                    </Button>
                  </div>
                  <Button className="w-full" size="sm">
                    Ajouter au panier
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );

  const renderSettings = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold" style={{ fontFamily: 'Montserrat' }}>
        Paramètres du compte
      </h2>

      {/* Profile Settings */}
      <Card>
        <CardHeader>
          <CardTitle>Informations personnelles</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {!isEditingProfile ? (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Prénom</Label>
                  <p className="text-gray-900">{user.firstName}</p>
                </div>
                <div>
                  <Label>Nom</Label>
                  <p className="text-gray-900">{user.lastName}</p>
                </div>
              </div>
              <div>
                <Label>Email</Label>
                <p className="text-gray-900">{user.email}</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Téléphone</Label>
                  <p className="text-gray-900">{user.phone || 'Non renseigné'}</p>
                </div>
                {user.company && (
                  <div>
                    <Label>Entreprise</Label>
                    <p className="text-gray-900">{user.company}</p>
                  </div>
                )}
              </div>
              <Button variant="outline" onClick={() => setIsEditingProfile(true)}>
                <Edit className="w-4 h-4 mr-2" />
                Modifier
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">Prénom</Label>
                  <Input
                    id="firstName"
                    value={profileForm.firstName}
                    onChange={(e) => setProfileForm({...profileForm, firstName: e.target.value})}
                  />
                </div>
                <div>
                  <Label htmlFor="lastName">Nom</Label>
                  <Input
                    id="lastName"
                    value={profileForm.lastName}
                    onChange={(e) => setProfileForm({...profileForm, lastName: e.target.value})}
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="phone">Téléphone</Label>
                <Input
                  id="phone"
                  value={profileForm.phone}
                  onChange={(e) => setProfileForm({...profileForm, phone: e.target.value})}
                />
              </div>
              {user.accountType === 'business' && (
                <div>
                  <Label htmlFor="company">Entreprise</Label>
                  <Input
                    id="company"
                    value={profileForm.company}
                    onChange={(e) => setProfileForm({...profileForm, company: e.target.value})}
                  />
                </div>
              )}
              <div className="flex gap-2">
                <Button variant="outline" onClick={() => setIsEditingProfile(false)}>
                  Annuler
                </Button>
                <Button onClick={handleProfileUpdate}>
                  Enregistrer
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Preferences */}
      <Card>
        <CardHeader>
          <CardTitle>Préférences de communication</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="newsletter">Newsletter</Label>
              <p className="text-sm text-gray-600">Recevoir nos offres et actualités</p>
            </div>
            <Switch
              id="newsletter"
              checked={user.preferences.newsletter}
              onCheckedChange={(checked) => updatePreferences({ newsletter: checked })}
            />
          </div>
          
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="orderUpdates">Suivi de commandes</Label>
              <p className="text-sm text-gray-600">Notifications sur l'état de vos commandes</p>
            </div>
            <Switch
              id="orderUpdates"
              checked={user.preferences.orderUpdates}
              onCheckedChange={(checked) => updatePreferences({ orderUpdates: checked })}
            />
          </div>
          
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="promotions">Promotions</Label>
              <p className="text-sm text-gray-600">Offres spéciales et réductions</p>
            </div>
            <Switch
              id="promotions"
              checked={user.preferences.promotions}
              onCheckedChange={(checked) => updatePreferences({ promotions: checked })}
            />
          </div>
          
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="sms">Notifications SMS</Label>
              <p className="text-sm text-gray-600">Alertes par message</p>
            </div>
            <Switch
              id="sms"
              checked={user.preferences.smsNotifications}
              onCheckedChange={(checked) => updatePreferences({ smsNotifications: checked })}
            />
          </div>
        </CardContent>
      </Card>

      {/* Account Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Actions du compte</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button variant="outline" className="w-full justify-start" onClick={handleLogout}>
            <LogOut className="w-4 h-4 mr-2" />
            Se déconnecter
          </Button>
        </CardContent>
      </Card>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-6">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour
          </button>
          
          <h1 className="text-3xl font-bold" style={{ fontFamily: 'Montserrat' }}>
            Mon compte
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as DashboardTab)}>
          <TabsList className="grid w-full grid-cols-5 mb-8">
            <TabsTrigger value="overview" className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span className="hidden sm:inline">Aperçu</span>
            </TabsTrigger>
            <TabsTrigger value="orders" className="flex items-center gap-2">
              <Package className="w-4 h-4" />
              <span className="hidden sm:inline">Commandes</span>
            </TabsTrigger>
            <TabsTrigger value="addresses" className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span className="hidden sm:inline">Adresses</span>
            </TabsTrigger>
            <TabsTrigger value="wishlist" className="flex items-center gap-2">
              <Heart className="w-4 h-4" />
              <span className="hidden sm:inline">Favoris</span>
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center gap-2">
              <Settings className="w-4 h-4" />
              <span className="hidden sm:inline">Paramètres</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview">{renderOverview()}</TabsContent>
          <TabsContent value="orders">{renderOrders()}</TabsContent>
          <TabsContent value="addresses">{renderAddresses()}</TabsContent>
          <TabsContent value="wishlist">{renderWishlist()}</TabsContent>
          <TabsContent value="settings">{renderSettings()}</TabsContent>
        </Tabs>
      </div>
    </div>
  );
}