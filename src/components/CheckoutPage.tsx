import { useState } from 'react';
import { ArrowLeft, Check, CreditCard, MapPin, Package, ShoppingBag, Truck } from 'lucide-react';
import { useApp } from '../contexts/AppContext';
import { useUser } from '../contexts/UserContext';
import { Breadcrumb, BreadcrumbItem } from './Breadcrumb';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select } from './ui/select';
import { Textarea } from './ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Separator } from './ui/separator';
import { Badge } from './ui/badge';
import { toast } from 'sonner@2.0.3';

interface CheckoutPageProps {
  onBack: () => void;
  onNavigate: (page: string, data?: any) => void;
}

type CheckoutStep = 'shipping' | 'payment' | 'confirmation';

export function CheckoutPage({ onBack, onNavigate }: CheckoutPageProps) {
  const { cartItems, getCartTotal, clearCart } = useApp();
  const { user, addresses, addOrder } = useUser();
  const [currentStep, setCurrentStep] = useState<CheckoutStep>('shipping');
  const [orderNumber, setOrderNumber] = useState<string>('');
  const [createdOrderId, setCreatedOrderId] = useState<string>('');

  // Breadcrumb items
  const breadcrumbItems: BreadcrumbItem[] = [
    { label: 'Accueil', onClick: onBack },
    { label: 'Panier', onClick: () => onNavigate('home') },
    { label: 'Paiement' }
  ];

  // États des formulaires - pré-remplis avec les données utilisateur
  const [shippingData, setShippingData] = useState({
    firstName: user?.firstName || '',
    lastName: user?.lastName || '',
    email: user?.email || '',
    phone: user?.phone || '',
    company: user?.company || '',
    address: addresses.find(addr => addr.isDefault)?.address || '',
    city: addresses.find(addr => addr.isDefault)?.city || '',
    postalCode: addresses.find(addr => addr.isDefault)?.postalCode || '',
    country: addresses.find(addr => addr.isDefault)?.country || 'CI',
    deliveryNotes: ''
  });

  const [paymentData, setPaymentData] = useState({
    method: 'card',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardName: '',
    mobileMoneyNumber: '',
    mobileMoneyProvider: 'orange'
  });

  const steps = [
    { id: 'shipping', label: 'Livraison', icon: MapPin },
    { id: 'payment', label: 'Paiement', icon: CreditCard },
    { id: 'confirmation', label: 'Confirmation', icon: Check }
  ];

  const countries = [
    { value: 'CI', label: 'Côte d\'Ivoire' },
    { value: 'SN', label: 'Sénégal' },
    { value: 'ML', label: 'Mali' },
    { value: 'BF', label: 'Burkina Faso' },
    { value: 'GH', label: 'Ghana' }
  ];

  const mobileMoneyProviders = [
    { value: 'orange', label: 'Orange Money' },
    { value: 'mtn', label: 'MTN Mobile Money' },
    { value: 'moov', label: 'Moov Money' },
    { value: 'wave', label: 'Wave' }
  ];

  const deliveryOptions = [
    {
      id: 'standard',
      name: 'Livraison Standard',
      duration: '3-5 jours ouvrés',
      price: 5000,
      description: 'Livraison en journée'
    },
    {
      id: 'express',
      name: 'Livraison Express',
      duration: '24-48h',
      price: 15000,
      description: 'Livraison prioritaire'
    },
    {
      id: 'premium',
      name: 'Livraison Premium',
      duration: 'Jour même',
      price: 25000,
      description: 'Installation incluse'
    }
  ];

  const [selectedDelivery, setSelectedDelivery] = useState('standard');

  const cartTotal = getCartTotal();
  const deliveryPrice = deliveryOptions.find(d => d.id === selectedDelivery)?.price || 0;
  const totalAmount = cartTotal + deliveryPrice;

  const handleShippingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!shippingData.firstName || !shippingData.lastName || !shippingData.address || !shippingData.city) {
      toast.error('Veuillez remplir tous les champs obligatoires');
      return;
    }
    setCurrentStep('payment');
  };

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (paymentData.method === 'card') {
      if (!paymentData.cardNumber || !paymentData.expiryDate || !paymentData.cvv) {
        toast.error('Veuillez remplir toutes les informations de carte');
        return;
      }
    } else if (paymentData.method === 'mobile_money') {
      if (!paymentData.mobileMoneyNumber) {
        toast.error('Veuillez saisir votre numéro de mobile money');
        return;
      }
    }

    // Simulation de traitement de paiement
    const newOrderNumber = `FIMA-${Date.now().toString().slice(-6)}`;
    setOrderNumber(newOrderNumber);
    
    // Créer l'objet commande
    const newOrder = {
      orderNumber: newOrderNumber,
      date: new Date().toISOString(),
      status: 'confirmed' as const,
      total: totalAmount + (paymentData.method === 'cash_on_delivery' ? 2000 : 0),
      currency: 'F CFA',
      items: cartItems.map(item => ({
        id: item.id,
        title: item.title,
        image: item.image,
        price: item.price,
        quantity: item.quantity,
        size: item.size
      })),
      shippingAddress: {
        id: 'temp-address',
        type: 'home' as const,
        label: 'Adresse de livraison',
        firstName: shippingData.firstName,
        lastName: shippingData.lastName,
        company: shippingData.company,
        address: shippingData.address,
        city: shippingData.city,
        postalCode: shippingData.postalCode,
        country: shippingData.country,
        phone: shippingData.phone,
        isDefault: false
      },
      paymentMethod: paymentData.method === 'card' ? 'Carte bancaire' :
                    paymentData.method === 'mobile_money' ? 'Mobile Money' :
                    paymentData.method === 'bank_transfer' ? 'Virement bancaire' :
                    'Paiement à la livraison'
    };
    
    // Ajouter la commande à l'historique
    const savedOrder = addOrder(newOrder);
    setCreatedOrderId(savedOrder.id);
    
    setCurrentStep('confirmation');
    
    // Vider le panier après commande réussie
    setTimeout(() => {
      clearCart();
      toast.success('Commande confirmée avec succès !', {
        action: {
          label: "Voir la commande",
          onClick: () => onNavigate('order-detail', { orderId: createdOrderId })
        }
      });
    }, 1000);
  };

  const renderStepIndicator = () => (
    <div className="flex items-center justify-center mb-8">
      {steps.map((step, index) => {
        const isCompleted = steps.findIndex(s => s.id === currentStep) > index;
        const isCurrent = step.id === currentStep;
        const StepIcon = step.icon;

        return (
          <div key={step.id} className="flex items-center">
            <div className={`flex items-center justify-center w-12 h-12 rounded-full border-2 transition-all ${
              isCompleted 
                ? 'bg-green-500 border-green-500 text-white' 
                : isCurrent
                ? 'border-primary bg-primary text-white'
                : 'border-gray-300 text-gray-400'
            }`}>
              {isCompleted ? (
                <Check className="w-5 h-5" />
              ) : (
                <StepIcon className="w-5 h-5" />
              )}
            </div>
            <div className="ml-3 mr-8">
              <p className={`text-sm font-medium ${
                isCurrent ? 'text-primary' : isCompleted ? 'text-green-600' : 'text-gray-400'
              }`}>
                {step.label}
              </p>
            </div>
            {index < steps.length - 1 && (
              <div className={`w-16 h-0.5 mx-4 ${
                isCompleted ? 'bg-green-500' : 'bg-gray-300'
              }`} />
            )}
          </div>
        );
      })}
    </div>
  );

  const renderShippingForm = () => (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              Informations de livraison
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleShippingSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">Prénom *</Label>
                  <Input
                    id="firstName"
                    value={shippingData.firstName}
                    onChange={(e) => setShippingData({...shippingData, firstName: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="lastName">Nom *</Label>
                  <Input
                    id="lastName"
                    value={shippingData.lastName}
                    onChange={(e) => setShippingData({...shippingData, lastName: e.target.value})}
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={shippingData.email}
                    onChange={(e) => setShippingData({...shippingData, email: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Téléphone *</Label>
                  <Input
                    id="phone"
                    value={shippingData.phone}
                    onChange={(e) => setShippingData({...shippingData, phone: e.target.value})}
                    placeholder="+225 XX XX XX XX"
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="company">Entreprise (optionnel)</Label>
                <Input
                  id="company"
                  value={shippingData.company}
                  onChange={(e) => setShippingData({...shippingData, company: e.target.value})}
                />
              </div>

              <div>
                <Label htmlFor="address">Adresse *</Label>
                <Input
                  id="address"
                  value={shippingData.address}
                  onChange={(e) => setShippingData({...shippingData, address: e.target.value})}
                  placeholder="Rue, numéro, quartier..."
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="city">Ville *</Label>
                  <Input
                    id="city"
                    value={shippingData.city}
                    onChange={(e) => setShippingData({...shippingData, city: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="postalCode">Code postal</Label>
                  <Input
                    id="postalCode"
                    value={shippingData.postalCode}
                    onChange={(e) => setShippingData({...shippingData, postalCode: e.target.value})}
                  />
                </div>
                <div>
                  <Label htmlFor="country">Pays *</Label>
                  <select
                    id="country"
                    value={shippingData.country}
                    onChange={(e) => setShippingData({...shippingData, country: e.target.value})}
                    className="w-full px-3 py-2 border border-border rounded-md"
                  >
                    {countries.map(country => (
                      <option key={country.value} value={country.value}>
                        {country.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <Label htmlFor="deliveryNotes">Instructions de livraison</Label>
                <Textarea
                  id="deliveryNotes"
                  value={shippingData.deliveryNotes}
                  onChange={(e) => setShippingData({...shippingData, deliveryNotes: e.target.value})}
                  placeholder="Étage, interphone, instructions spéciales..."
                  rows={3}
                />
              </div>

              {/* Options de livraison */}
              <div className="space-y-4">
                <Label>Options de livraison</Label>
                {deliveryOptions.map((option) => (
                  <label key={option.id} className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
                    <input
                      type="radio"
                      name="delivery"
                      value={option.id}
                      checked={selectedDelivery === option.id}
                      onChange={(e) => setSelectedDelivery(e.target.value)}
                      className="mr-3"
                    />
                    <Truck className="w-5 h-5 mr-3 text-primary" />
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="font-medium">{option.name}</span>
                        <span className="font-semibold">{option.price.toLocaleString()} F CFA</span>
                      </div>
                      <p className="text-sm text-gray-600">{option.duration} - {option.description}</p>
                    </div>
                  </label>
                ))}
              </div>

              <Button type="submit" className="w-full">
                Continuer vers le paiement
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>

      {/* Résumé de commande */}
      <div>
        <Card className="sticky top-24">
          <CardHeader>
            <CardTitle>Résumé de la commande</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center gap-3">
                <div className="w-16 h-16 bg-gray-100 rounded-lg"></div>
                <div className="flex-1">
                  <p className="font-medium text-sm">{item.title}</p>
                  <p className="text-sm text-gray-600">Qté: {item.quantity}</p>
                </div>
                <p className="font-semibold">{(item.price * item.quantity).toLocaleString()} F CFA</p>
              </div>
            ))}
            <Separator />
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Sous-total</span>
                <span>{cartTotal.toLocaleString()} F CFA</span>
              </div>
              <div className="flex justify-between">
                <span>Livraison</span>
                <span>{deliveryPrice.toLocaleString()} F CFA</span>
              </div>
              <Separator />
              <div className="flex justify-between font-semibold text-lg">
                <span>Total</span>
                <span>{totalAmount.toLocaleString()} F CFA</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const renderPaymentForm = () => (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CreditCard className="w-5 h-5" />
              Méthode de paiement
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handlePaymentSubmit} className="space-y-6">
              {/* Sélection méthode de paiement */}
              <div className="space-y-4">
                <Label>Choisissez votre méthode de paiement</Label>
                
                <label className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="card"
                    checked={paymentData.method === 'card'}
                    onChange={(e) => setPaymentData({...paymentData, method: e.target.value})}
                    className="mr-3"
                  />
                  <CreditCard className="w-5 h-5 mr-3" />
                  <span>Carte bancaire (Visa, Mastercard)</span>
                </label>

                <label className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="mobile_money"
                    checked={paymentData.method === 'mobile_money'}
                    onChange={(e) => setPaymentData({...paymentData, method: e.target.value})}
                    className="mr-3"
                  />
                  <div className="w-5 h-5 mr-3 bg-orange-500 rounded"></div>
                  <span>Mobile Money</span>
                </label>

                <label className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="bank_transfer"
                    checked={paymentData.method === 'bank_transfer'}
                    onChange={(e) => setPaymentData({...paymentData, method: e.target.value})}
                    className="mr-3"
                  />
                  <Package className="w-5 h-5 mr-3" />
                  <span>Virement bancaire</span>
                </label>

                <label className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="cash_on_delivery"
                    checked={paymentData.method === 'cash_on_delivery'}
                    onChange={(e) => setPaymentData({...paymentData, method: e.target.value})}
                    className="mr-3"
                  />
                  <ShoppingBag className="w-5 h-5 mr-3" />
                  <span>Paiement à la livraison</span>
                </label>
              </div>

              {/* Formulaire carte bancaire */}
              {paymentData.method === 'card' && (
                <div className="space-y-4 p-4 bg-gray-50 rounded-lg">
                  <div>
                    <Label htmlFor="cardNumber">Numéro de carte *</Label>
                    <Input
                      id="cardNumber"
                      value={paymentData.cardNumber}
                      onChange={(e) => setPaymentData({...paymentData, cardNumber: e.target.value})}
                      placeholder="1234 5678 9012 3456"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="expiryDate">Date d'expiration *</Label>
                      <Input
                        id="expiryDate"
                        value={paymentData.expiryDate}
                        onChange={(e) => setPaymentData({...paymentData, expiryDate: e.target.value})}
                        placeholder="MM/AA"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="cvv">CVV *</Label>
                      <Input
                        id="cvv"
                        value={paymentData.cvv}
                        onChange={(e) => setPaymentData({...paymentData, cvv: e.target.value})}
                        placeholder="123"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="cardName">Nom sur la carte *</Label>
                    <Input
                      id="cardName"
                      value={paymentData.cardName}
                      onChange={(e) => setPaymentData({...paymentData, cardName: e.target.value})}
                      placeholder="JOHN DOE"
                      required
                    />
                  </div>
                </div>
              )}

              {/* Formulaire Mobile Money */}
              {paymentData.method === 'mobile_money' && (
                <div className="space-y-4 p-4 bg-orange-50 rounded-lg">
                  <div>
                    <Label htmlFor="mobileProvider">Opérateur</Label>
                    <select
                      id="mobileProvider"
                      value={paymentData.mobileMoneyProvider}
                      onChange={(e) => setPaymentData({...paymentData, mobileMoneyProvider: e.target.value})}
                      className="w-full px-3 py-2 border border-border rounded-md"
                    >
                      {mobileMoneyProviders.map(provider => (
                        <option key={provider.value} value={provider.value}>
                          {provider.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <Label htmlFor="mobileNumber">Numéro Mobile Money *</Label>
                    <Input
                      id="mobileNumber"
                      value={paymentData.mobileMoneyNumber}
                      onChange={(e) => setPaymentData({...paymentData, mobileMoneyNumber: e.target.value})}
                      placeholder="+225 XX XX XX XX"
                      required
                    />
                  </div>
                </div>
              )}

              {paymentData.method === 'cash_on_delivery' && (
                <div className="p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-800">
                    Vous payerez en espèces ou par carte à la livraison. 
                    Frais supplémentaires de 2 000 F CFA appliqués.
                  </p>
                </div>
              )}

              <div className="flex gap-4">
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={() => setCurrentStep('shipping')}
                  className="flex-1"
                >
                  Retour
                </Button>
                <Button type="submit" className="flex-1">
                  Finaliser la commande
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>

      {/* Résumé de commande */}
      <div>
        <Card className="sticky top-24">
          <CardHeader>
            <CardTitle>Récapitulatif</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Articles ({cartItems.length})</span>
                <span>{cartTotal.toLocaleString()} F CFA</span>
              </div>
              <div className="flex justify-between">
                <span>Livraison</span>
                <span>{deliveryPrice.toLocaleString()} F CFA</span>
              </div>
              {paymentData.method === 'cash_on_delivery' && (
                <div className="flex justify-between">
                  <span>Frais paiement livraison</span>
                  <span>2 000 F CFA</span>
                </div>
              )}
              <Separator />
              <div className="flex justify-between font-semibold text-lg">
                <span>Total à payer</span>
                <span>{(totalAmount + (paymentData.method === 'cash_on_delivery' ? 2000 : 0)).toLocaleString()} F CFA</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const renderConfirmation = () => (
    <div className="max-w-2xl mx-auto text-center">
      <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
        <Check className="w-12 h-12 text-green-600" />
      </div>
      
      <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Montserrat' }}>
        Commande confirmée !
      </h2>
      
      <p className="text-xl text-gray-600 mb-6">
        Merci pour votre confiance. Votre commande a été enregistrée avec succès.
      </p>

      <Card className="text-left mb-8">
        <CardHeader>
          <CardTitle>Détails de la commande</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex justify-between">
            <span className="font-medium">Numéro de commande :</span>
            <Badge variant="secondary">{orderNumber}</Badge>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Montant total :</span>
            <span className="font-semibold">{totalAmount.toLocaleString()} F CFA</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Méthode de paiement :</span>
            <span>
              {paymentData.method === 'card' && 'Carte bancaire'}
              {paymentData.method === 'mobile_money' && 'Mobile Money'}
              {paymentData.method === 'bank_transfer' && 'Virement bancaire'}
              {paymentData.method === 'cash_on_delivery' && 'Paiement à la livraison'}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Adresse de livraison :</span>
            <div className="text-right text-sm">
              <p>{shippingData.firstName} {shippingData.lastName}</p>
              <p>{shippingData.address}</p>
              <p>{shippingData.city}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h3 className="font-semibold mb-2">Prochaines étapes</h3>
        <ul className="text-sm text-gray-700 space-y-1 text-left">
          <li>• Vous recevrez un email de confirmation sous peu</li>
          <li>• Notre équipe préparera votre commande</li>
          <li>• Vous serez notifié(e) lors de l'expédition</li>
          <li>• Livraison prévue dans {deliveryOptions.find(d => d.id === selectedDelivery)?.duration}</li>
        </ul>
      </div>

      <div className="flex gap-4 justify-center">
        <Button variant="outline" onClick={() => onNavigate('home')}>
          Retour à l'accueil
        </Button>
        <Button 
          variant="outline" 
          onClick={() => onNavigate('order-detail', { orderId: createdOrderId })}
        >
          Voir ma commande
        </Button>
        <Button onClick={() => onNavigate('all-products')}>
          Continuer mes achats
        </Button>
      </div>
    </div>
  );

  if (cartItems.length === 0 && currentStep !== 'confirmation') {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <ShoppingBag className="w-16 h-16 text-gray-400 mx-auto mb-4" />
        <h2 className="text-2xl font-bold mb-4">Votre panier est vide</h2>
        <p className="text-gray-600 mb-8">Ajoutez des produits pour passer commande</p>
        <Button onClick={() => onNavigate('all-products')}>
          Voir nos produits
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-6">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-4"
            style={{
              touchAction: 'manipulation',
              WebkitTapHighlightColor: 'transparent',
            }}
          >
            <ArrowLeft className="w-4 h-4" />
            Retour
          </button>
          
          <h1 className="text-3xl font-bold" style={{ fontFamily: 'Montserrat' }}>
            Finaliser ma commande
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <Breadcrumb items={breadcrumbItems} />
        
        {renderStepIndicator()}
        
        {currentStep === 'shipping' && renderShippingForm()}
        {currentStep === 'payment' && renderPaymentForm()}
        {currentStep === 'confirmation' && renderConfirmation()}
      </div>
    </div>
  );
}