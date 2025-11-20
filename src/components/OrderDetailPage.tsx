import { useState } from 'react';
import { ArrowLeft, Package, Truck, CheckCircle, Clock, MapPin, CreditCard, Phone, Mail, Download, RefreshCw, MessageSquare, Star } from 'lucide-react';
import { useUser } from '../contexts/UserContext';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';
import { Progress } from './ui/progress';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Textarea } from './ui/textarea';
import { toast } from 'sonner';

interface OrderDetailPageProps {
  orderId: string;
  onBack: () => void;
  onNavigate: (page: string, data?: any) => void;
}

export function OrderDetailPage({ orderId, onBack, onNavigate }: OrderDetailPageProps) {
  const { getOrderById } = useUser();
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [reviewRating, setReviewRating] = useState(5);
  const [reviewComment, setReviewComment] = useState('');

  const order = getOrderById(orderId);

  if (!order) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Commande introuvable</h2>
          <Button onClick={onBack}>Retour</Button>
        </div>
      </div>
    );
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'delivered': return 'bg-green-100 text-green-800';
      case 'shipped': return 'bg-blue-100 text-blue-800';
      case 'processing': return 'bg-yellow-100 text-yellow-800';
      case 'confirmed': return 'bg-purple-100 text-purple-800';
      case 'pending': return 'bg-gray-100 text-gray-800';
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

  const getStatusProgress = (status: string) => {
    switch (status) {
      case 'pending': return 20;
      case 'confirmed': return 40;
      case 'processing': return 60;
      case 'shipped': return 80;
      case 'delivered': return 100;
      case 'cancelled': return 0;
      default: return 0;
    }
  };

  const orderSteps = [
    { key: 'confirmed', label: 'Confirmée', icon: CheckCircle },
    { key: 'processing', label: 'En préparation', icon: Package },
    { key: 'shipped', label: 'Expédiée', icon: Truck },
    { key: 'delivered', label: 'Livrée', icon: CheckCircle }
  ];

  const currentStepIndex = orderSteps.findIndex(step => step.key === order.status);

  const handleSubmitReview = () => {
    if (!reviewComment.trim()) {
      toast.error('Veuillez saisir un commentaire');
      return;
    }

    // Simulation d'envoi d'avis
    toast.success('Merci pour votre avis ! Il sera publié après modération.');
    setIsReviewModalOpen(false);
    setReviewComment('');
    setReviewRating(5);
  };

  const handleReorder = () => {
    // Simulation d'ajout au panier des articles de la commande
    toast.success('Articles ajoutés au panier');
    onNavigate('checkout');
  };

  const handleDownloadInvoice = () => {
    // Simulation de téléchargement de facture
    toast.info('Téléchargement de la facture en cours...');
  };

  const handleContactSupport = () => {
    // Redirection vers le support
    toast.info('Redirection vers le service client...');
  };

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
            Retour aux commandes
          </button>
          
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold" style={{ fontFamily: 'Montserrat' }}>
                Commande #{order.orderNumber}
              </h1>
              <p className="text-gray-600">
                Passée le {new Date(order.date).toLocaleDateString('fr-FR', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </p>
            </div>
            
            <div className="flex items-center gap-3">
              <Badge className={getStatusColor(order.status)}>
                {getStatusText(order.status)}
              </Badge>
              {order.status === 'shipped' && (
                <Button variant="outline" onClick={() => onNavigate('order-tracking', { orderId })}>
                  <Truck className="w-4 h-4 mr-2" />
                  Suivre
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 space-y-8">
        {/* Suivi de commande */}
        <Card>
          <CardHeader>
            <CardTitle>Suivi de votre commande</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-6">
              <Progress value={getStatusProgress(order.status)} className="h-2" />
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {orderSteps.map((step, index) => {
                const StepIcon = step.icon;
                const isCompleted = currentStepIndex >= index;
                const isCurrent = currentStepIndex === index;
                
                return (
                  <div key={step.key} className="text-center">
                    <div className={`w-12 h-12 rounded-full mx-auto mb-2 flex items-center justify-center ${
                      isCompleted 
                        ? 'bg-green-500 text-white' 
                        : isCurrent 
                        ? 'bg-primary text-white'
                        : 'bg-gray-200 text-gray-400'
                    }`}>
                      <StepIcon className="w-6 h-6" />
                    </div>
                    <p className={`text-sm font-medium ${
                      isCompleted ? 'text-green-600' : isCurrent ? 'text-primary' : 'text-gray-400'
                    }`}>
                      {step.label}
                    </p>
                  </div>
                );
              })}
            </div>

            {order.trackingNumber && (
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-blue-900">Numéro de suivi</p>
                    <p className="text-blue-700 font-mono">{order.trackingNumber}</p>
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => onNavigate('order-tracking', { orderId })}
                  >
                    Suivre en temps réel
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Articles commandés */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Articles commandés</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {order.items.map((item) => (
                  <div key={item.id} className="flex gap-4 p-4 border rounded-lg">
                    <div className="w-20 h-20 bg-gray-100 rounded-lg flex-shrink-0"></div>
                    <div className="flex-1">
                      <h3 className="font-medium">{item.title}</h3>
                      <p className="text-sm text-gray-600">Taille: {item.size}</p>
                      <p className="text-sm text-gray-600">Quantité: {item.quantity}</p>
                      <p className="font-semibold text-lg">{item.price.toLocaleString()} F CFA</p>
                    </div>
                    {order.status === 'delivered' && (
                      <Dialog open={isReviewModalOpen} onOpenChange={setIsReviewModalOpen}>
                        <DialogTrigger asChild>
                          <Button variant="outline" size="sm">
                            <Star className="w-4 h-4 mr-1" />
                            Donner un avis
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Donner votre avis sur {item.title}</DialogTitle>
                          </DialogHeader>
                          <div className="space-y-4">
                            <div>
                              <label className="block text-sm font-medium mb-2">Note</label>
                              <div className="flex gap-1">
                                {[1, 2, 3, 4, 5].map((rating) => (
                                  <button
                                    key={rating}
                                    onClick={() => setReviewRating(rating)}
                                    className={`w-8 h-8 ${rating <= reviewRating ? 'text-yellow-400' : 'text-gray-300'}`}
                                  >
                                    <Star className="w-full h-full fill-current" />
                                  </button>
                                ))}
                              </div>
                            </div>
                            
                            <div>
                              <label className="block text-sm font-medium mb-2">Votre commentaire</label>
                              <Textarea
                                value={reviewComment}
                                onChange={(e) => setReviewComment(e.target.value)}
                                placeholder="Partagez votre expérience avec ce produit..."
                                rows={4}
                              />
                            </div>
                            
                            <div className="flex gap-2 justify-end">
                              <Button variant="outline" onClick={() => setIsReviewModalOpen(false)}>
                                Annuler
                              </Button>
                              <Button onClick={handleSubmitReview}>
                                Publier l'avis
                              </Button>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Actions rapides */}
            <Card>
              <CardHeader>
                <CardTitle>Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  <Button variant="outline" onClick={handleReorder} className="flex flex-col items-center p-4 h-auto">
                    <RefreshCw className="w-6 h-6 mb-2" />
                    <span className="text-sm">Recommander</span>
                  </Button>
                  
                  <Button variant="outline" onClick={handleDownloadInvoice} className="flex flex-col items-center p-4 h-auto">
                    <Download className="w-6 h-6 mb-2" />
                    <span className="text-sm">Facture</span>
                  </Button>
                  
                  <Button variant="outline" onClick={handleContactSupport} className="flex flex-col items-center p-4 h-auto">
                    <MessageSquare className="w-6 h-6 mb-2" />
                    <span className="text-sm">Support</span>
                  </Button>
                  
                  <Button variant="outline" onClick={() => navigator.share?.({ title: `Commande ${order.orderNumber}`, url: window.location.href })} className="flex flex-col items-center p-4 h-auto">
                    <Package className="w-6 h-6 mb-2" />
                    <span className="text-sm">Partager</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Résumé et informations */}
          <div className="space-y-6">
            {/* Résumé financier */}
            <Card>
              <CardHeader>
                <CardTitle>Résumé de la commande</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span>Sous-total</span>
                  <span>{(order.total - 5000).toLocaleString()} F CFA</span>
                </div>
                <div className="flex justify-between">
                  <span>Livraison</span>
                  <span>5 000 F CFA</span>
                </div>
                <Separator />
                <div className="flex justify-between font-semibold text-lg">
                  <span>Total</span>
                  <span>{order.total.toLocaleString()} F CFA</span>
                </div>
              </CardContent>
            </Card>

            {/* Informations de paiement */}
            <Card>
              <CardHeader>
                <CardTitle>Paiement</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3">
                  <CreditCard className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="font-medium">{order.paymentMethod}</p>
                    <p className="text-sm text-gray-600">Paiement effectué</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Adresse de livraison */}
            <Card>
              <CardHeader>
                <CardTitle>Livraison</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-gray-400 mt-1" />
                  <div>
                    <p className="font-medium">
                      {order.shippingAddress.firstName} {order.shippingAddress.lastName}
                    </p>
                    {order.shippingAddress.company && (
                      <p className="text-sm text-gray-600">{order.shippingAddress.company}</p>
                    )}
                    <p className="text-sm text-gray-600">{order.shippingAddress.address}</p>
                    <p className="text-sm text-gray-600">
                      {order.shippingAddress.city} {order.shippingAddress.postalCode}
                    </p>
                    {order.shippingAddress.phone && (
                      <p className="text-sm text-gray-600 flex items-center gap-1 mt-2">
                        <Phone className="w-3 h-3" />
                        {order.shippingAddress.phone}
                      </p>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Support client */}
            <Card>
              <CardHeader>
                <CardTitle>Besoin d'aide ?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center space-y-3">
                  <p className="text-sm text-gray-600">
                    Notre équipe est là pour vous accompagner
                  </p>
                  
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full" onClick={handleContactSupport}>
                      <Mail className="w-4 h-4 mr-2" />
                      Nous contacter
                    </Button>
                    
                    <div className="text-xs text-gray-500">
                      <p>📞 +225 01 02 03 04 05</p>
                      <p>📧 support@fima.ci</p>
                      <p>🕐 Lun-Ven 8h-18h</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}