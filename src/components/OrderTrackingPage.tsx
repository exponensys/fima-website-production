import { useState, useEffect } from 'react';
import { ArrowLeft, Package, Truck, MapPin, Clock, CheckCircle, Phone, RefreshCw, Navigation, AlertCircle } from 'lucide-react';
import { useUser } from '../contexts/UserContext';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Separator } from './ui/separator';

interface OrderTrackingPageProps {
  orderId: string;
  onBack: () => void;
  onNavigate: (page: string, data?: any) => void;
}

interface TrackingEvent {
  id: string;
  status: string;
  title: string;
  description: string;
  location: string;
  timestamp: string;
  icon: React.ComponentType<any>;
  completed: boolean;
}

interface DeliveryInfo {
  estimatedDelivery: string;
  deliveryWindow: string;
  driverName?: string;
  driverPhone?: string;
  vehicleType: string;
  currentLocation?: string;
  nextUpdate: string;
}

export function OrderTrackingPage({ orderId, onBack, onNavigate }: OrderTrackingPageProps) {
  const { getOrderById } = useUser();
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [lastUpdate, setLastUpdate] = useState(new Date().toLocaleTimeString('fr-FR'));

  const order = getOrderById(orderId);

  // Données de suivi simulées
  const trackingEvents: TrackingEvent[] = [
    {
      id: '1',
      status: 'confirmed',
      title: 'Commande confirmée',
      description: 'Votre commande a été confirmée et enregistrée dans notre système',
      location: 'Centre FIMA - Abidjan',
      timestamp: '2024-10-23T10:30:00',
      icon: CheckCircle,
      completed: true
    },
    {
      id: '2',
      status: 'processing',
      title: 'En cours de préparation',
      description: 'Nos équipes préparent soigneusement votre commande',
      location: 'Entrepôt FIMA - Zone Industrielle',
      timestamp: '2024-10-23T14:15:00',
      icon: Package,
      completed: true
    },
    {
      id: '3',
      status: 'quality_check',
      title: 'Contrôle qualité',
      description: 'Vérification finale de la qualité de vos produits',
      location: 'Centre de contrôle - Abidjan',
      timestamp: '2024-10-24T09:00:00',
      icon: CheckCircle,
      completed: true
    },
    {
      id: '4',
      status: 'shipped',
      title: 'Expédié',
      description: 'Votre commande est en route vers vous',
      location: 'En transit - Abidjan → Cocody',
      timestamp: '2024-10-24T16:45:00',
      icon: Truck,
      completed: true
    },
    {
      id: '5',
      status: 'out_for_delivery',
      title: 'En cours de livraison',
      description: 'Le livreur est en route pour la livraison',
      location: 'Secteur Cocody - À 10 min de votre adresse',
      timestamp: '2024-10-25T08:30:00',
      icon: Navigation,
      completed: false
    },
    {
      id: '6',
      status: 'delivered',
      title: 'Livré',
      description: 'Commande livrée avec succès',
      location: 'Votre adresse',
      timestamp: '',
      icon: CheckCircle,
      completed: false
    }
  ];

  const deliveryInfo: DeliveryInfo = {
    estimatedDelivery: '25 octobre 2024',
    deliveryWindow: '09h00 - 12h00',
    driverName: 'Kouadio Jean-Claude',
    driverPhone: '+225 07 88 99 00',
    vehicleType: 'Camion de livraison FIMA',
    currentLocation: 'Boulevard Valery Giscard d\'Estaing, Cocody',
    nextUpdate: '10 minutes'
  };

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

  const handleRefresh = async () => {
    setIsRefreshing(true);
    // Simulation de la mise à jour
    await new Promise(resolve => setTimeout(resolve, 1000));
    setLastUpdate(new Date().toLocaleTimeString('fr-FR'));
    setIsRefreshing(false);
  };

  const getProgressPercentage = () => {
    const completedEvents = trackingEvents.filter(event => event.completed).length;
    return (completedEvents / trackingEvents.length) * 100;
  };

  const currentEvent = trackingEvents.find(event => !event.completed) || trackingEvents[trackingEvents.length - 1];

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
            Retour aux détails
          </button>
          
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold" style={{ fontFamily: 'Montserrat' }}>
                Suivi de commande #{order.orderNumber}
              </h1>
              <p className="text-gray-600">
                Dernière mise à jour : {lastUpdate}
              </p>
            </div>
            
            <Button variant="outline" onClick={handleRefresh} disabled={isRefreshing}>
              <RefreshCw className={`w-4 h-4 mr-2 ${isRefreshing ? 'animate-spin' : ''}`} />
              Actualiser
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Colonne principale - Suivi détaillé */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* État actuel */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <currentEvent.icon className="w-6 h-6 text-primary" />
                  État actuel de votre commande
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold">{currentEvent.title}</h3>
                    <p className="text-gray-600">{currentEvent.description}</p>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <MapPin className="w-4 h-4" />
                    <span>{currentEvent.location}</span>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">Progression</span>
                      <span className="text-sm text-gray-600">{Math.round(getProgressPercentage())}%</span>
                    </div>
                    <Progress value={getProgressPercentage()} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Historique de suivi */}
            <Card>
              <CardHeader>
                <CardTitle>Historique de suivi</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {trackingEvents.map((event, index) => {
                    const EventIcon = event.icon;
                    const isCompleted = event.completed;
                    const hasTimestamp = event.timestamp;
                    
                    return (
                      <div key={event.id} className="flex gap-4">
                        <div className="flex flex-col items-center">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                            isCompleted 
                              ? 'bg-green-500 text-white' 
                              : index === trackingEvents.findIndex(e => !e.completed)
                              ? 'bg-primary text-white'
                              : 'bg-gray-200 text-gray-400'
                          }`}>
                            <EventIcon className="w-5 h-5" />
                          </div>
                          {index < trackingEvents.length - 1 && (
                            <div className={`w-0.5 h-12 mt-2 ${
                              isCompleted ? 'bg-green-500' : 'bg-gray-200'
                            }`} />
                          )}
                        </div>
                        
                        <div className="flex-1 pb-6">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                            <div>
                              <h3 className={`font-semibold ${
                                isCompleted ? 'text-gray-900' : 'text-gray-500'
                              }`}>
                                {event.title}
                              </h3>
                              <p className={`text-sm ${
                                isCompleted ? 'text-gray-600' : 'text-gray-400'
                              }`}>
                                {event.description}
                              </p>
                            </div>
                            
                            {hasTimestamp && (
                              <div className="flex items-center gap-1 text-xs text-gray-500">
                                <Clock className="w-3 h-3" />
                                <span>
                                  {new Date(event.timestamp).toLocaleDateString('fr-FR', {
                                    day: 'numeric',
                                    month: 'short',
                                    hour: '2-digit',
                                    minute: '2-digit'
                                  })}
                                </span>
                              </div>
                            )}
                          </div>
                          
                          <div className="flex items-center gap-1 text-xs text-gray-400 mt-1">
                            <MapPin className="w-3 h-3" />
                            <span>{event.location}</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Carte de livraison (simulée) */}
            <Card>
              <CardHeader>
                <CardTitle>Position du livreur</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                    <p className="text-gray-600">Carte de suivi en temps réel</p>
                    <p className="text-sm text-gray-500">
                      Position actuelle : {deliveryInfo.currentLocation}
                    </p>
                  </div>
                </div>
                
                {deliveryInfo.driverName && (
                  <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-blue-900">Votre livreur : {deliveryInfo.driverName}</p>
                        <p className="text-sm text-blue-700">{deliveryInfo.vehicleType}</p>
                      </div>
                      <Button variant="outline" size="sm">
                        <Phone className="w-4 h-4 mr-2" />
                        Appeler
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Colonne latérale - Informations */}
          <div className="space-y-6">
            
            {/* Informations de livraison */}
            <Card>
              <CardHeader>
                <CardTitle>Informations de livraison</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500">Livraison prévue</p>
                  <p className="font-semibold text-lg">{deliveryInfo.estimatedDelivery}</p>
                  <p className="text-sm text-gray-600">{deliveryInfo.deliveryWindow}</p>
                </div>
                
                <Separator />
                
                <div>
                  <p className="text-sm text-gray-500">Adresse de livraison</p>
                  <div className="mt-2">
                    <p className="font-medium">
                      {order.shippingAddress.firstName} {order.shippingAddress.lastName}
                    </p>
                    <p className="text-sm text-gray-600">{order.shippingAddress.address}</p>
                    <p className="text-sm text-gray-600">
                      {order.shippingAddress.city} {order.shippingAddress.postalCode}
                    </p>
                  </div>
                </div>
                
                <Separator />
                
                <div>
                  <p className="text-sm text-gray-500">Numéro de suivi</p>
                  <p className="font-mono text-sm bg-gray-100 p-2 rounded mt-1">
                    {order.trackingNumber}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Articles à livrer */}
            <Card>
              <CardHeader>
                <CardTitle>Articles en livraison</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {order.items.map((item) => (
                  <div key={item.id} className="flex gap-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-12 h-12 bg-gray-200 rounded"></div>
                    <div className="flex-1">
                      <p className="font-medium text-sm">{item.title}</p>
                      <p className="text-xs text-gray-600">Qté: {item.quantity}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Prochaine mise à jour */}
            <Card>
              <CardHeader>
                <CardTitle>Prochaine mise à jour</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-3">
                  <Clock className="w-8 h-8 text-blue-500" />
                  <div>
                    <p className="font-medium">Dans {deliveryInfo.nextUpdate}</p>
                    <p className="text-sm text-gray-600">
                      Nous vous tiendrons informé des prochaines étapes
                    </p>
                  </div>
                </div>
                
                <div className="mt-4 p-3 bg-yellow-50 rounded-lg">
                  <div className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-yellow-600 mt-0.5" />
                    <div className="text-sm">
                      <p className="font-medium text-yellow-800">Conseil</p>
                      <p className="text-yellow-700">
                        Assurez-vous d'être disponible pendant la fenêtre de livraison
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Support */}
            <Card>
              <CardHeader>
                <CardTitle>Besoin d'aide ?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full">
                  <Phone className="w-4 h-4 mr-2" />
                  Contacter le service client
                </Button>
                
                <div className="text-xs text-gray-500 text-center space-y-1">
                  <p>📞 +225 01 02 03 04 05</p>
                  <p>🕐 Disponible 7j/7 de 8h à 20h</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}