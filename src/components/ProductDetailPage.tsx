import { useState, useRef, useEffect } from 'react';
import { ArrowLeft, Heart, ShoppingCart, Star, Truck, Shield, RotateCcw, MessageCircle, Minus, Plus, Share2, ZoomIn, Play, RotateCw, ChevronLeft, ChevronRight, User, Verified, ThumbsUp, ThumbsDown, Filter, SortDesc } from 'lucide-react';
import { useApp } from '../contexts/AppContext';
import { toast } from 'sonner';
import { ProductCard } from './ProductCard';
import { useProducts as useSupabaseProducts } from '../hooks/useProducts';
import { ImageWithFallback, extractImageUrl } from './figma/ImageWithFallback';
import { CustomOrderModal } from './CustomOrderModal';
import { Breadcrumb, BreadcrumbItem } from './Breadcrumb';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription } from './ui/dialog';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Separator } from './ui/separator';
import { Avatar, AvatarFallback } from './ui/avatar';
import { Progress } from './ui/progress';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { smartConvertPrice, extractNumericPrice, formatPriceForDisplay } from '../utils/currency';

interface ProductDetailPageProps {
  product: any;
  onBack: () => void;
  onExpertClick?: (type: 'expert' | 'appointment') => void;
  onProductClick?: (product: any) => void;
  onViewAllProducts?: () => void;
}

interface Review {
  id: string;
  user: {
    name: string;
    avatar?: string;
    verified: boolean;
  };
  rating: number;
  title: string;
  comment: string;
  date: string;
  verified: boolean;
  helpful: number;
  images?: string[];
  size?: string;
  color?: string;
}

interface TechnicalSpec {
  category: string;
  specs: { label: string; value: string }[];
}

export function ProductDetailPage({ product, onBack, onExpertClick, onProductClick, onViewAllProducts }: ProductDetailPageProps) {
  const { addToCart, addToFavorites, removeFromFavorites, favorites, setIsCartOpen, selectedCurrency } = useApp();
  
  // Normaliser le produit pour supporter les deux formats (ancien et Supabase)
  const normalizedProduct = {
    ...product,
    title: product.name || product.title || '',
    image: product.images?.[0] || product.image || '',
    description: product.description || '',
    // Stocker les prix numériques bruts et la devise source
    numericPrice: typeof product.price === 'number' ? product.price : extractNumericPrice(product.price),
    numericCompareAtPrice: product.compareAtPrice ? 
      (typeof product.compareAtPrice === 'number' ? product.compareAtPrice : extractNumericPrice(product.compareAtPrice)) 
      : null,
    sourceCurrency: product.currency || 'FCFA', // Devise du produit dans l'admin
  };
  
  // Utiliser le produit normalisé partout
  const productToUse = normalizedProduct;
  
  // État pour la variation sélectionnée
  // Ne pas sélectionner automatiquement une variation - laisser le client choisir
  const [selectedVariation, setSelectedVariation] = useState<any>(null);
  
  // Prix final basé sur la variation sélectionnée ou le prix de base
  const finalPrice = selectedVariation ? selectedVariation.price : productToUse.numericPrice;
  const finalCompareAtPrice = selectedVariation?.compareAtPrice || productToUse.numericCompareAtPrice;
  
  const [selectedSize, setSelectedSize] = useState(productToUse.sizes ? productToUse.sizes[0] : null);
  const [selectedColor, setSelectedColor] = useState(productToUse.colors ? productToUse.colors[0] : null);
  const [quantity, setQuantity] = useState(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [activeMediaType, setActiveMediaType] = useState<'image' | 'video' | '360'>('image');
  const [is360Playing, setIs360Playing] = useState(false);
  const [rotation360, setRotation360] = useState(0);
  const [reviewFilter, setReviewFilter] = useState('all');
  const [reviewSort, setReviewSort] = useState('recent');
  const [isCustomOrderModalOpen, setIsCustomOrderModalOpen] = useState(false);
  
  // États pour l'effet de zoom latéral
  const [isHovering, setIsHovering] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [imageContainerRect, setImageContainerRect] = useState<DOMRect | null>(null);
  
  const videoRef = useRef<HTMLVideoElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);

  // Récupération de TOUS les produits depuis Supabase pour les recommandations
  // On ne filtre pas par business/category ici car le produit actuel peut avoir des valeurs incorrectes
  const { 
    products: allProducts, 
    loading: similarLoading 
  } = useSupabaseProducts();

  // Filtrer les produits similaires côté client
  // 1. Exclure le produit actuel
  // 2. Prioriser la même catégorie si possible
  // 3. Sinon prendre des produits aléatoires
  const filteredSimilarProducts = (() => {
    if (!allProducts || allProducts.length === 0) return [];
    
    // Exclure le produit actuel
    let filtered = allProducts.filter(p => p.id !== product.id && p.sku !== product.sku);
    
    // Si le produit a une catégorie valide, prioriser les produits de la même catégorie
    if (productToUse.category && productToUse.category !== 'undefined') {
      const sameCategory = filtered.filter(p => p.category === productToUse.category);
      if (sameCategory.length > 0) {
        filtered = sameCategory;
      }
    }
    
    // Si le produit a un business valide, prioriser le même business
    if (productToUse.business && productToUse.business !== 'undefined') {
      const sameBusiness = filtered.filter(p => p.business === productToUse.business);
      if (sameBusiness.length > 0) {
        filtered = sameBusiness;
      }
    }
    
    // Retourner les 4 premiers
    return filtered.slice(0, 4);
  })();

  const isFavorite = favorites.some(fav => fav.id === product.id);
  
  // Debug logs pour les produits similaires
  useEffect(() => {
    console.log('🔍 Debug Produits Recommandés:', {
      productId: product.id,
      productSku: product.sku,
      productBusiness: productToUse.business,
      productCategory: productToUse.category,
      allProductsCount: allProducts?.length,
      filteredCount: filteredSimilarProducts.length,
      similarLoading,
      recommendedProducts: filteredSimilarProducts.map(p => ({ id: p.id, sku: p.sku, name: p.name, category: p.category }))
    });
  }, [allProducts, similarLoading, filteredSimilarProducts.length]);
  
  // Mapper les produits Supabase vers le format ProductCard
  const mapProductToCard = (p: any) => ({
    id: p.id,
    image: p.images?.[0] || '',
    title: p.name || p.title || '',
    description: p.shortDescription || p.description || '',
    price: p.price,
    originalPrice: p.compareAtPrice || undefined,
    discount: p.discount || undefined,
    badge: p.badge || (p.featured ? 'FEATURED' : undefined),
    category: p.category,
    sourceCurrency: p.currency || 'FCFA',
    isCustom: p.isCustom || false
  });

  // Données d'exemple pour les avis
  const sampleReviews: Review[] = [
    {
      id: '1',
      user: { name: 'Marie Kouassi', verified: true },
      rating: 5,
      title: 'Excellent matelas, très confortable',
      comment: 'Je recommande vivement ce matelas. La qualité est exceptionnelle et le confort incomparable. Livraison rapide et installation parfaite.',
      date: '2024-10-15',
      verified: true,
      helpful: 24,
      images: [],
      size: '160x200',
      color: 'Blanc'
    },
    {
      id: '2',
      user: { name: 'Jean-Baptiste Diabaté', verified: true },
      rating: 4,
      title: 'Très bon rapport qualité-prix',
      comment: 'Matelas de bonne qualité pour le prix. Confortable et bien fini. Juste un peu ferme à mon goût mais ça reste correct.',
      date: '2024-10-10',
      verified: true,
      helpful: 18,
      size: '140x190'
    },
    {
      id: '3',
      user: { name: 'Aminata Traoré', verified: false },
      rating: 5,
      title: 'Parfait pour le dos',
      comment: 'Depuis que j\'ai ce matelas, mes douleurs de dos ont considérablement diminué. Un excellent investissement pour la santé.',
      date: '2024-10-05',
      verified: true,
      helpful: 12,
      size: '160x200'
    }
  ];

  // Générer les spécifications techniques dynamiquement à partir des données du produit
  const generateTechnicalSpecs = (): TechnicalSpec[] => {
    const specs: TechnicalSpec[] = [];
    const specifications = productToUse.specifications || {};

    // Si le produit a des spécifications personnalisées, les utiliser
    if (Object.keys(specifications).length > 0) {
      // Grouper les spécifications par catégorie
      const groupedSpecs: Record<string, { label: string; value: string }[]> = {};
      
      Object.entries(specifications).forEach(([key, value]) => {
        // Déterminer la catégorie basée sur le nom de la clé
        let category = 'Informations générales';
        
        if (key.match(/dimension|taille|longueur|largeur|hauteur|épaisseur|poids/i)) {
          category = 'Dimensions & Poids';
        } else if (key.match(/matériau|matière|composition|tissu|bois/i)) {
          category = 'Composition';
        } else if (key.match(/couleur|finition|style|design/i)) {
          category = 'Design';
        } else if (key.match(/certif|garantie|norme/i)) {
          category = 'Certifications & Garanties';
        }

        if (!groupedSpecs[category]) {
          groupedSpecs[category] = [];
        }

        groupedSpecs[category].push({
          label: key.charAt(0).toUpperCase() + key.slice(1),
          value: String(value)
        });
      });

      // Convertir en format TechnicalSpec
      Object.entries(groupedSpecs).forEach(([category, categorySpecs]) => {
        specs.push({ category, specs: categorySpecs });
      });
    }

    // Ajouter des informations de base toujours présentes
    const basicSpecs: { label: string; value: string }[] = [];
    
    if (productToUse.unit) {
      basicSpecs.push({ label: 'Unité de vente', value: productToUse.unit });
    }
    
    // Utiliser le stock de la variation sélectionnée si applicable
    const currentStock = selectedVariation?.stock !== undefined ? selectedVariation.stock : productToUse.stock;
    if (currentStock !== undefined) {
      const stockDisplay = currentStock === -1 ? 'Illimité' : `${currentStock} unités`;
      basicSpecs.push({ label: 'Stock disponible', value: stockDisplay });
    }
    
    // Utiliser le SKU de la variation sélectionnée si applicable
    const currentSku = selectedVariation?.sku || productToUse.sku;
    if (currentSku) {
      basicSpecs.push({ label: 'Référence', value: currentSku });
    }

    if (basicSpecs.length > 0) {
      specs.unshift({ category: 'Informations produit', specs: basicSpecs });
    }

    return specs.length > 0 ? specs : [
      {
        category: 'Informations produit',
        specs: [
          { label: 'Référence', value: currentSku || 'N/A' },
          { label: 'Catégorie', value: productToUse.category || 'Non spécifié' },
          { label: 'Disponibilité', value: currentStock === -1 ? 'Stock illimité' : (currentStock > 0 ? 'En stock' : 'Rupture de stock') }
        ]
      }
    ];
  };

  const technicalSpecs = generateTechnicalSpecs();

  // Générer les bénéfices dynamiquement selon le business et la catégorie
  const generateBenefits = () => {
    const business = productToUse.business;
    
    // Bénéfices pour FIMA Couchage (literie, matelas)
    if (business === 'fima-couchage') {
      return [
        {
          icon: Shield,
          color: '#B5C233',
          bgColor: 'rgba(181, 194, 51, 0.1)',
          title: 'Confort optimal',
          description: 'Technologie adaptée pour un sommeil réparateur et un soutien parfait de votre corps.'
        },
        {
          icon: Heart,
          color: '#E30613',
          bgColor: 'rgba(227, 6, 19, 0.1)',
          title: 'Qualité certifiée',
          description: 'Matériaux de qualité supérieure conformes aux normes internationales.'
        },
        {
          icon: RotateCcw,
          color: '#0EA5E9',
          bgColor: 'rgba(14, 165, 233, 0.1)',
          title: 'Durabilité garantie',
          description: 'Produits conçus pour durer avec une garantie fabricant longue durée.'
        },
        {
          icon: Star,
          color: '#B5C233',
          bgColor: 'rgba(181, 194, 51, 0.1)',
          title: 'Santé du dos',
          description: 'Soutien ergonomique pour préserver votre santé et réduire les tensions.'
        },
        {
          icon: Truck,
          color: '#0EA5E9',
          bgColor: 'rgba(14, 165, 233, 0.1)',
          title: 'Livraison rapide',
          description: 'Livraison professionnelle sous 48h.'
        },
        {
          icon: MessageCircle,
          color: '#6E6E6E',
          bgColor: 'rgba(110, 110, 110, 0.1)',
          title: 'Conseils d\'experts',
          description: 'Notre équipe vous accompagne pour choisir le produit idéal.'
        }
      ];
    }
    
    // Bénéfices pour FIMA Design (menuiserie, ameublement)
    if (business === 'fima-design') {
      return [
        {
          icon: Shield,
          color: '#B5C233',
          bgColor: 'rgba(181, 194, 51, 0.1)',
          title: 'Design personnalisé',
          description: 'Créations sur mesure adaptées à vos besoins et votre espace.'
        },
        {
          icon: Star,
          color: '#B5C233',
          bgColor: 'rgba(181, 194, 51, 0.1)',
          title: 'Finitions premium',
          description: 'Travail artisanal de haute qualité avec finitions soignées.'
        },
        {
          icon: RotateCcw,
          color: '#0EA5E9',
          bgColor: 'rgba(14, 165, 233, 0.1)',
          title: 'Matériaux nobles',
          description: 'Bois et matériaux sélectionnés pour leur durabilité et beauté.'
        },
        {
          icon: Heart,
          color: '#E30613',
          bgColor: 'rgba(227, 6, 19, 0.1)',
          title: 'Made in Côte d\'Ivoire',
          description: 'Fabrication locale par des artisans qualifiés.'
        },
        {
          icon: Truck,
          color: '#0EA5E9',
          bgColor: 'rgba(14, 165, 233, 0.1)',
          title: 'Installation incluse',
          description: 'Livraison et installation professionnelle comprises dans le prix.'
        },
        {
          icon: MessageCircle,
          color: '#6E6E6E',
          bgColor: 'rgba(110, 110, 110, 0.1)',
          title: 'Service après-vente',
          description: 'Suivi et maintenance pour garantir la longévité de vos meubles.'
        }
      ];
    }
    
    // Bénéfices pour Univers Glass (vitrerie, aluminium)
    if (business === 'univers-glass') {
      return [
        {
          icon: Shield,
          color: '#0EA5E9',
          bgColor: 'rgba(14, 165, 233, 0.1)',
          title: 'Sécurité renforcée',
          description: 'Vitrages et structures conformes aux normes de sécurité les plus strictes.'
        },
        {
          icon: Star,
          color: '#0EA5E9',
          bgColor: 'rgba(14, 165, 233, 0.1)',
          title: 'Isolation thermique',
          description: 'Solutions performantes pour réduire votre consommation énergétique.'
        },
        {
          icon: RotateCcw,
          color: '#B5C233',
          bgColor: 'rgba(181, 194, 51, 0.1)',
          title: 'Résistance maximale',
          description: 'Matériaux ultra-résistants aux intempéries et au temps.'
        },
        {
          icon: Heart,
          color: '#E30613',
          bgColor: 'rgba(227, 6, 19, 0.1)',
          title: 'Design moderne',
          description: 'Esthétique contemporaine pour valoriser vos espaces.'
        },
        {
          icon: Truck,
          color: '#0EA5E9',
          bgColor: 'rgba(14, 165, 233, 0.1)',
          title: 'Installation certifiée',
          description: 'Pose par des techniciens certifiés avec garantie décennale.'
        },
        {
          icon: MessageCircle,
          color: '#6E6E6E',
          bgColor: 'rgba(110, 110, 110, 0.1)',
          title: 'Devis personnalisé',
          description: 'Étude de votre projet et conseil pour la meilleure solution.'
        }
      ];
    }

    // Bénéfices par défaut
    return [
      {
        icon: Shield,
        color: '#B5C233',
        bgColor: 'rgba(181, 194, 51, 0.1)',
        title: 'Qualité garantie',
        description: 'Produits de haute qualité sélectionnés avec soin.'
      },
      {
        icon: Truck,
        color: '#0EA5E9',
        bgColor: 'rgba(14, 165, 233, 0.1)',
        title: 'Livraison rapide',
        description: 'Livraison rapide et soignée à votre domicile.'
      },
      {
        icon: RotateCcw,
        color: '#B5C233',
        bgColor: 'rgba(181, 194, 51, 0.1)',
        title: 'Satisfaction client',
        description: 'Service client disponible pour vous accompagner.'
      }
    ];
  };

  const benefits = generateBenefits();

  const handleAddToCart = () => {
    const cartItem = {
      id: productToUse.id,
      title: productToUse.title,
      price: getCurrentPrice(),
      currency: productToUse.currency, // Ajout de la devise source
      image: productToUse.image,
      category: productToUse.category,
      selectedColor: selectedColor?.name,
      selectedVariation: selectedVariation?.name
    };

    const sizeForCart = selectedVariation?.name || selectedSize?.name || 'Taille unique';
    
    addToCart(cartItem, sizeForCart, quantity);
    
    const descriptionParts = [`Quantité: ${quantity}`];
    if (selectedVariation) {
      descriptionParts.push(`Option: ${selectedVariation.name}`);
    } else if (selectedSize) {
      descriptionParts.push(`Taille: ${selectedSize.name}`);
    }
    
    toast.success(`${productToUse.title} ajouté au panier !`, {
      description: descriptionParts.join(' • '),
      action: {
        label: "Voir le panier",
        onClick: () => setIsCartOpen(true)
      }
    });
  };

  const handleFavoriteToggle = () => {
    if (isFavorite) {
      removeFromFavorites(productToUse.id);
      toast.success('Retiré des favoris');
    } else {
      addToFavorites(productToUse);
      toast.success('Ajouté aux favoris');
    }
  };

  const getCurrentPrice = (): number => {
    // Priorité : variation > taille > prix de base
    if (selectedVariation) {
      return selectedVariation.price;
    }
    if (selectedSize && selectedSize.price !== undefined) {
      return extractNumericPrice(selectedSize.price);
    }
    return productToUse.numericPrice;
  };

  const getCurrentOriginalPrice = (): number | null => {
    // Priorité : variation > taille > prix de base
    if (selectedVariation && selectedVariation.compareAtPrice) {
      return selectedVariation.compareAtPrice;
    }
    if (selectedSize && selectedSize.originalPrice !== undefined) {
      return extractNumericPrice(selectedSize.originalPrice);
    }
    return productToUse.numericCompareAtPrice;
  };
  
  // Fonction pour formater le prix avec conversion intelligente
  const getFormattedPrice = (): string => {
    return smartConvertPrice(getCurrentPrice(), productToUse.sourceCurrency, selectedCurrency);
  };
  
  const getFormattedOriginalPrice = (): string | null => {
    const original = getCurrentOriginalPrice();
    if (!original) return null;
    return smartConvertPrice(original, productToUse.sourceCurrency, selectedCurrency);
  };

  // Images du produit avec support vidéo et 360°
  const getProductMedia = () => {
    const media = [];
    
    // Ajouter toutes les images du produit si elles existent
    if (productToUse.images && Array.isArray(productToUse.images) && productToUse.images.length > 0) {
      productToUse.images.forEach((imageSrc, index) => {
        media.push({
          type: 'image',
          src: imageSrc,
          alt: `${productToUse.title} - Image ${index + 1}`
        });
      });
    } else {
      // Fallback sur l'image principale si pas de tableau d'images
      media.push({ type: 'image', src: productToUse.image, alt: productToUse.title });
    }
    
    // Ajouter des variations de couleur
    if (productToUse.colors && productToUse.colors.length > 0) {
      productToUse.colors.forEach((color, index) => {
        if (color.image) {
          media.push({ 
            type: 'image', 
            src: color.image, 
            alt: `${productToUse.title} - ${color.name}` 
          });
        }
      });
    }
    
    // Ne plus ajouter d'images factices - utiliser uniquement les vraies images
    
    return media;
  };

  const productMedia = getProductMedia();

  // Effect pour gérer la rotation 360°
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (is360Playing) {
      interval = setInterval(() => {
        setRotation360(prev => (prev + 2) % 360);
      }, 50);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [is360Playing]);

  // Fonctions pour l'effet de zoom latéral
  const handleMouseEnter = () => {
    if (activeMediaType === 'image' && imageContainerRef.current) {
      const rect = imageContainerRef.current.getBoundingClientRect();
      setImageContainerRect(rect);
      setIsHovering(true);
    }
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setImageContainerRect(null);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isHovering && imageContainerRect && activeMediaType === 'image') {
      const x = e.clientX - imageContainerRect.left;
      const y = e.clientY - imageContainerRect.top;
      
      // S'assurer que les coordonnées sont dans les limites
      const clampedX = Math.max(0, Math.min(x, imageContainerRect.width));
      const clampedY = Math.max(0, Math.min(y, imageContainerRect.height));
      
      setMousePosition({ x: clampedX, y: clampedY });
    }
  };

  // Calculer la position du zoom pour le panneau latéral
  const getZoomStyle = () => {
    if (!imageContainerRect || !isHovering || activeMediaType !== 'image') return {};
    
    const zoomLevel = 2.5; // Niveau de zoom
    const containerWidth = imageContainerRect.width;
    const containerHeight = imageContainerRect.height;
    
    // Calculer le pourcentage de position de la souris
    const xPercent = (mousePosition.x / containerWidth) * 100;
    const yPercent = (mousePosition.y / containerHeight) * 100;
    
    // Calculer la position de l'image zoomée pour centrer la zone survolée
    const backgroundPosX = Math.max(0, Math.min(100, xPercent));
    const backgroundPosY = Math.max(0, Math.min(100, yPercent));
    
    return {
      backgroundImage: `url(${productMedia[selectedImageIndex]?.src || productToUse.image})`,
      backgroundSize: `${zoomLevel * 100}%`,
      backgroundPosition: `${backgroundPosX}% ${backgroundPosY}%`,
      backgroundRepeat: 'no-repeat',
      cursor: 'crosshair'
    };
  };

  const getAverageRating = () => {
    const total = sampleReviews.reduce((sum, review) => sum + review.rating, 0);
    return (total / sampleReviews.length).toFixed(1);
  };

  const getRatingDistribution = () => {
    const distribution = [0, 0, 0, 0, 0];
    sampleReviews.forEach(review => {
      distribution[review.rating - 1]++;
    });
    return distribution.reverse();
  };

  const filteredReviews = sampleReviews.filter(review => {
    if (reviewFilter === 'all') return true;
    if (reviewFilter === 'verified') return review.verified;
    if (reviewFilter === '5') return review.rating === 5;
    if (reviewFilter === '4') return review.rating === 4;
    if (reviewFilter === '3') return review.rating === 3;
    if (reviewFilter === '2') return review.rating === 2;
    if (reviewFilter === '1') return review.rating === 1;
    return true;
  }).sort((a, b) => {
    if (reviewSort === 'recent') return new Date(b.date).getTime() - new Date(a.date).getTime();
    if (reviewSort === 'helpful') return b.helpful - a.helpful;
    if (reviewSort === 'rating') return b.rating - a.rating;
    return 0;
  });

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4" style={{ color: '#000000' }}>
            Produit introuvable
          </h2>
          <button onClick={onBack} className="fima-btn-primary">
            Retour à l'accueil
          </button>
        </div>
      </div>
    );
  }

  // Déterminer la couleur d'accent en fonction du business
  const getAccentColor = () => {
    if (productToUse.business === 'fima-couchage') return '#B5C233';
    if (productToUse.business === 'univers-glass') return '#0EA5E9';
    return '#6E6E6E'; // fima-design ou par défaut
  };

  // Breadcrumb items
  const breadcrumbItems: BreadcrumbItem[] = [
    { label: 'Accueil', onClick: onBack },
    { label: 'Produits', onClick: onViewAllProducts || onBack },
    { label: productToUse.title }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <Breadcrumb items={breadcrumbItems} accentColor={getAccentColor()} />
      
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-20 z-10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-2 p-2">
              <button
                onClick={onBack}
                className="hover:opacity-70 transition-opacity"
                style={{ color: '#6E6E6E' }}
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
            </div>
            
            <div className="flex items-center gap-3">
              <button 
                onClick={() => navigator.share?.({ title: productToUse.title, url: window.location.href })}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <Share2 className="w-5 h-5" />
              </button>
              
              <button 
                onClick={handleFavoriteToggle}
                className={`p-2 rounded-full transition-colors ${
                  isFavorite 
                    ? 'bg-red-100 text-red-600 hover:bg-red-200' 
                    : 'hover:bg-gray-100 text-gray-600'
                }`}
              >
                <Heart className={`w-5 h-5 ${isFavorite ? 'fill-current' : ''}`} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Layout principal - desktop: 2 colonnes, mobile: colonne */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {/* Galerie média - Colonne gauche */}
          <div className="space-y-4">
            {/* Sélecteur de type de média */}
            <div className="flex gap-2 mb-4">
              <Button
                variant={activeMediaType === 'image' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setActiveMediaType('image')}
              >
                Photos
              </Button>
              <Button
                variant={activeMediaType === 'video' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setActiveMediaType('video')}
              >
                <Play className="w-4 h-4 mr-1" />
                Vidéo
              </Button>
              <Button
                variant={activeMediaType === '360' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setActiveMediaType('360')}
              >
                <RotateCw className="w-4 h-4 mr-1" />
                Vue 360°
              </Button>
            </div>

            <div className="flex gap-4">
              {/* Média principal avec zoom */}
              <div className="flex-1">
                <div 
                  ref={imageContainerRef}
                  className={`aspect-square bg-white rounded-2xl overflow-hidden shadow-lg relative product-zoom-container ${
                    activeMediaType === 'image' && isHovering ? 'zoom-active' : ''
                  }`}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  onMouseMove={handleMouseMove}
                >
                  {activeMediaType === 'image' && (
                    <div className="relative h-full">
                      <ImageWithFallback 
                        src={productMedia[selectedImageIndex]?.src || product.image} 
                        alt={product.title}
                        className="w-full h-full object-cover"
                      />
                      {/* Indicateur de zoom au hover */}
                      {isHovering && (
                        <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm rounded-full p-2 pointer-events-none">
                          <ZoomIn className="w-4 h-4 text-white" />
                        </div>
                      )}
                      {/* Bouton pour ouvrir en modal (toujours visible) */}
                      <Dialog open={isZoomed} onOpenChange={setIsZoomed}>
                        <DialogTrigger asChild>
                          <button className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm rounded-full p-2 hover:bg-black/70 transition-colors z-10">
                            <ZoomIn className="w-4 h-4 text-white" />
                          </button>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl">
                          <DialogTitle className="sr-only">
                            Vue agrandie de {product.title}
                          </DialogTitle>
                          <DialogDescription className="sr-only">
                            Image agrandie du produit {product.title} avec navigation entre les images
                          </DialogDescription>
                          <div className="relative">
                            <ImageWithFallback 
                              src={productMedia[selectedImageIndex]?.src || product.image} 
                              alt={product.title}
                              className="w-full h-auto max-h-[80vh] object-contain"
                            />
                            <div className="absolute top-4 left-4 right-4 flex justify-between">
                              <Button
                                variant="outline"
                                size="icon"
                                onClick={() => setSelectedImageIndex(Math.max(0, selectedImageIndex - 1))}
                                disabled={selectedImageIndex === 0}
                              >
                                <ChevronLeft className="w-4 h-4" />
                              </Button>
                              <Button
                                variant="outline"
                                size="icon"
                                onClick={() => setSelectedImageIndex(Math.min(productMedia.length - 1, selectedImageIndex + 1))}
                                disabled={selectedImageIndex === productMedia.length - 1}
                              >
                                <ChevronRight className="w-4 h-4" />
                              </Button>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  )}

                  {activeMediaType === 'video' && (
                    <video
                      ref={videoRef}
                      className="w-full h-full object-cover"
                      controls
                      poster={product.image}
                    >
                      <source src="/videos/product-demo.mp4" type="video/mp4" />
                      Votre navigateur ne supporte pas la lecture vidéo.
                    </video>
                  )}

                  {activeMediaType === '360' && (
                    <div className="relative w-full h-full bg-gray-100 flex items-center justify-center">
                      <div 
                        className="w-full h-full bg-cover bg-center transition-transform duration-75"
                        style={{ 
                          backgroundImage: `url(${product.image})`,
                          transform: `rotateY(${rotation360}deg)`
                        }}
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-black/50 backdrop-blur-sm rounded-lg p-4 text-white text-center">
                          <RotateCw className="w-8 h-8 mx-auto mb-2" />
                          <p className="text-sm">Glissez pour faire tourner</p>
                          <Button
                            size="sm"
                            className="mt-2"
                            onClick={() => {
                              setIs360Playing(!is360Playing);
                            }}
                          >
                            {is360Playing ? 'Pause' : 'Auto-rotation'}
                          </Button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Panneau de zoom latéral - visible uniquement sur desktop quand on hover */}
              {isHovering && activeMediaType === 'image' && (
                <div className="hidden lg:block w-80 aspect-square bg-white rounded-2xl shadow-2xl border-2 border-gray-200 overflow-hidden relative">
                  <div 
                    className="w-full h-full transition-all duration-100 ease-out"
                    style={getZoomStyle()}
                  />
                  <div className="absolute top-2 right-2 bg-black/50 backdrop-blur-sm rounded px-2 py-1">
                    <span className="text-white text-xs font-medium">Zoom 2.5x</span>
                  </div>
                </div>
              )}
            </div>
            
            {/* Miniatures */}
            {activeMediaType === 'image' && productMedia.filter(m => m.type === 'image').length >= 1 && (
              <div className="flex gap-3 overflow-x-auto pb-2">
                {productMedia.filter(m => m.type === 'image').map((media, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className="flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors"
                    style={{
                      borderColor: selectedImageIndex === index ? '#B5C233' : '#e5e7eb'
                    }}
                    onMouseEnter={(e) => {
                      if (selectedImageIndex !== index) e.currentTarget.style.borderColor = '#d1d5db';
                    }}
                    onMouseLeave={(e) => {
                      if (selectedImageIndex !== index) e.currentTarget.style.borderColor = '#e5e7eb';
                    }}
                  >
                    <ImageWithFallback 
                      src={media.src} 
                      alt={media.alt}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Informations produit - Colonne droite */}
          <div className="space-y-6">
            {/* Header avec badges et titre */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 pt-8 lg:pt-6 mt-[46px] mr-[0px] mb-[21px] ml-[0px]">
              {product.badge && (
                <div className="flex flex-wrap gap-2 mb-4">
                  <span 
                    className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                      product.badge.includes('BEST') ? 'fima-badge-green' : 'fima-badge-red'
                    }`}
                  >
                    {product.badge}
                  </span>
                  {getCurrentOriginalPrice() && (
                    <span className="fima-badge-red">
                      -{Math.round(((getCurrentOriginalPrice()! - getCurrentPrice()) / getCurrentOriginalPrice()!) * 100)}% DE RÉDUCTION
                    </span>
                  )}
                </div>
              )}
              
              <h1 className="text-4xl lg:text-5xl mb-4 leading-tight" style={{ fontFamily: 'Montserrat', color: '#000000', fontWeight: 700 }}>
                {productToUse.title}
              </h1>
              
              {/* Tagline */}
              {productToUse.tagline && (
                <p className="text-lg mb-4 italic" style={{ fontFamily: 'Montserrat', color: '#6E6E6E' }}>
                  {productToUse.tagline}
                </p>
              )}
              
              {/* Note et avis */}
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-5 h-5 ${
                        i < Math.floor(Number(getAverageRating())) 
                          ? 'text-yellow-400 fill-current' 
                          : 'text-gray-300'
                      }`} 
                    />
                  ))}
                  <span className="ml-2 font-semibold text-lg">{getAverageRating()}</span>
                </div>
                <span className="font-medium" style={{ color: '#0EA5E9' }}>
                  {sampleReviews.length} Avis vérifiés
                </span>
                <span className="text-orange-600 font-medium">26k+ Avis de moins</span>
                <Badge variant="secondary" className="border-0" style={{ backgroundColor: 'rgba(181, 194, 51, 0.1)', color: '#B5C233' }}>
                  <Verified className="w-3 h-3 mr-1" />
                  Certifié
                </Badge>
              </div>

              {/* Livraison info */}
              {/* <div className="flex items-center gap-2 font-medium" style={{ color: '#B5C233' }}>
                <Truck className="w-4 h-4" />
                <span>Livraison sous 48 jours ouvrés</span>
              </div> */}
            </div>

            {/* Prix et sélection */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              {/* Prix ou "Sur mesure" */}
              {!productToUse.isCustom ? (
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl font-bold" style={{ color: '#B5C233' }}>
                    {getFormattedPrice()}
                  </span>
                  {getFormattedOriginalPrice() && (
                    <span className="text-xl text-gray-500 line-through">
                      {getFormattedOriginalPrice()}
                    </span>
                  )}
                </div>
              ) : (
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl font-semibold" style={{ color: '#0EA5E9' }}>
                      Produit sur mesure
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">
                    Contactez notre service commercial pour un devis personnalisé
                  </p>
                </div>
              )}

              {/* Sélection des variations (ex: matelas 1 place, 2 places, 3 places) */}
              {productToUse.variations && productToUse.variations.length > 0 && (
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-3">Options disponibles</label>
                  <div className="grid grid-cols-1 gap-2">
                    {productToUse.variations.map((variation, index) => {
                      const isSelected = selectedVariation?.id === variation.id || 
                                        (selectedVariation?.name === variation.name && selectedVariation?.price === variation.price);
                      const variationPrice = smartConvertPrice(variation.price, productToUse.sourceCurrency, selectedCurrency);
                      const hasComparePrice = variation.compareAtPrice && variation.compareAtPrice > 0;
                      const variationComparePrice = hasComparePrice 
                        ? smartConvertPrice(variation.compareAtPrice!, productToUse.sourceCurrency, selectedCurrency)
                        : null;
                      
                      return (
                        <button
                          key={index}
                          onClick={() => setSelectedVariation(variation)}
                          className="p-4 rounded-lg border-2 text-left transition-all hover:shadow-md"
                          style={{
                            borderColor: isSelected ? '#B5C233' : '#e5e7eb',
                            backgroundColor: isSelected ? 'rgba(181, 194, 51, 0.05)' : 'white',
                          }}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                <span 
                                  className="font-semibold text-base"
                                  style={{ color: isSelected ? '#B5C233' : '#000000' }}
                                >
                                  {variation.name}
                                </span>
                                {variation.stock !== undefined && variation.stock >= 0 && variation.stock <= 5 && variation.stock !== -1 && (
                                  <span className="text-xs px-2 py-0.5 bg-orange-100 text-orange-700 rounded">
                                    Plus que {variation.stock} en stock
                                  </span>
                                )}
                                {variation.stock === -1 && (
                                  <span className="text-xs px-2 py-0.5 bg-green-100 text-green-700 rounded">
                                    Stock illimité
                                  </span>
                                )}
                              </div>
                              {variation.sku && (
                                <div className="text-xs text-gray-500 mb-1">Réf: {variation.sku}</div>
                              )}
                            </div>
                            <div className="text-right ml-4">
                              <div className="font-bold text-lg" style={{ color: isSelected ? '#B5C233' : '#000000' }}>
                                {variationPrice}
                              </div>
                              {variationComparePrice && (
                                <div className="text-sm text-gray-500 line-through">
                                  {variationComparePrice}
                                </div>
                              )}
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                  {selectedVariation && selectedVariation.stock !== undefined && (
                    <div className="mt-2 text-sm" style={{ color: '#6E6E6E' }}>
                      {selectedVariation.stock === -1 
                        ? '✓ Disponibilité: Stock illimité' 
                        : selectedVariation.stock > 0 
                          ? `✓ En stock: ${selectedVariation.stock} ${productToUse.unit || 'unités'} disponible(s)` 
                          : '✗ Rupture de stock'}
                    </div>
                  )}
                </div>
              )}

              {/* Sélection taille */}
              {product.sizes && product.sizes.length > 0 && (
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-3">Taille</label>
                  <div className="grid grid-cols-2 gap-2">
                    {product.sizes.map((size, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedSize(size)}
                        className="p-3 rounded-lg border-2 text-sm font-medium transition-colors"
                        style={{
                          borderColor: selectedSize?.name === size.name ? '#B5C233' : '#e5e7eb',
                          backgroundColor: selectedSize?.name === size.name ? 'rgba(181, 194, 51, 0.05)' : 'transparent',
                          color: selectedSize?.name === size.name ? '#B5C233' : 'inherit'
                        }}
                        onMouseEnter={(e) => {
                          if (selectedSize?.name !== size.name) e.currentTarget.style.borderColor = '#d1d5db';
                        }}
                        onMouseLeave={(e) => {
                          if (selectedSize?.name !== size.name) e.currentTarget.style.borderColor = '#e5e7eb';
                        }}
                      >
                        {size.name}
                        {size.price && size.price !== product.price && (
                          <div className="text-xs text-gray-500 mt-1">
                            +{extractNumericPrice(size.price) - extractNumericPrice(product.price)}€
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Sélection couleur */}
              {product.colors && product.colors.length > 0 && (
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-3">Couleur</label>
                  <div className="flex gap-3">
                    {product.colors.map((color, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedColor(color)}
                        className="w-12 h-12 rounded-full border-4 transition-all"
                        style={{
                          borderColor: selectedColor?.name === color.name ? '#B5C233' : '#e5e7eb',
                          transform: selectedColor?.name === color.name ? 'scale(1.1)' : 'scale(1)'
                        }}
                        onMouseEnter={(e) => {
                          if (selectedColor?.name !== color.name) e.currentTarget.style.borderColor = '#d1d5db';
                        }}
                        onMouseLeave={(e) => {
                          if (selectedColor?.name !== color.name) e.currentTarget.style.borderColor = '#e5e7eb';
                        }}
                        style={{ backgroundColor: color.value || color.name }}
                        title={color.name}
                      />
                    ))}
                  </div>
                  {selectedColor && (
                    <p className="text-sm text-gray-600 mt-2">
                      Couleur sélectionnée : {selectedColor.name}
                    </p>
                  )}
                </div>
              )}

              {/* Quantité */}
              <div className="mb-6">
                <label className="block text-sm font-medium mb-3">Quantité</label>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50"
                    disabled={quantity <= 1}
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-12 text-center font-medium">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Boutons d'action */}
              <div className="space-y-3">
                {!productToUse.isCustom ? (
                  <button
                    onClick={handleAddToCart}
                    className="w-full fima-btn-primary flex items-center justify-center gap-2"
                  >
                    <ShoppingCart className="w-5 h-5" />
                    Ajouter au panier
                  </button>
                ) : (
                  <button
                    onClick={() => setIsCustomOrderModalOpen(true)}
                    className="w-full fima-btn-primary flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Commander votre produit
                  </button>
                )}
                
                {/* <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => onExpertClick?.('expert')}
                    className="flex items-center justify-center gap-2 p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Conseils
                  </button>
                  <button
                    onClick={() => onExpertClick?.('appointment')}
                    className="flex items-center justify-center gap-2 p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <Shield className="w-4 h-4" />
                    Garantie
                  </button>
                </div> */}
              </div>
            </div>

            {/* Avantages */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="font-semibold mb-4">Pourquoi choisir ce produit ?</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5" style={{ color: '#B5C233' }} />
                  <span className="text-sm">Garantie 10 ans fabricant</span>
                </div>
                <div className="flex items-center gap-3">
                  <Truck className="w-5 h-5" style={{ color: '#B5C233' }} />
                  <span className="text-sm">Livraison et installation gratuites</span>
                </div>
                {/* <div className="flex items-center gap-3">
                  <RotateCcw className="w-5 h-5" style={{ color: '#B5C233' }} />
                  <span className="text-sm">Retour gratuit sous 30 jours</span>
                </div> */}
                <div className="flex items-center gap-3">
                  <MessageCircle className="w-5 h-5" style={{ color: '#B5C233' }} />
                  <span className="text-sm">Conseils d'experts disponibles</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section mobile des produits recommandés */}
        <div className="lg:hidden mb-12">
          <div className="bg-white rounded-2xl p-6">
            <h2 className="text-xl font-bold mb-4" style={{ fontFamily: 'Montserrat', color: '#000000' }}>
              Produits recommandés
            </h2>
            
            {similarLoading ? (
              <div className="grid grid-cols-2 gap-4">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="animate-pulse">
                    <div className="bg-gray-200 aspect-square rounded-lg mb-2"></div>
                    <div className="h-3 bg-gray-200 rounded mb-1"></div>
                    <div className="h-3 bg-gray-200 rounded w-2/3"></div>
                  </div>
                ))}
              </div>
            ) : filteredSimilarProducts && filteredSimilarProducts.length > 0 ? (
              <div className="grid grid-cols-2 gap-4">
                {filteredSimilarProducts.map((similarProduct) => (
                  <ProductCard 
                    key={similarProduct.id} 
                    {...mapProductToCard(similarProduct)}
                    onProductClick={(clickedProduct) => {
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <p style={{ color: '#6E6E6E' }} className="text-sm">
                  Aucun produit similaire disponible pour le moment.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Onglets de contenu détaillé */}
        <div className="bg-white rounded-2xl p-8 mb-16">
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="technical">Caractéristiques</TabsTrigger>
              <TabsTrigger value="benefits">Bénéfices</TabsTrigger>
              <TabsTrigger value="reviews">Avis ({sampleReviews.length})</TabsTrigger>
            </TabsList>

            <TabsContent value="description" className="mt-8">
              <div className="prose max-w-none" style={{ fontFamily: 'Montserrat' }}>
                {productToUse.description ? (
                  <div dangerouslySetInnerHTML={{ __html: productToUse.description }} />
                ) : (
                  <p className="text-gray-500 text-center py-8">
                    Aucune description disponible pour ce produit.
                  </p>
                )}
              </div>
            </TabsContent>

            <TabsContent value="technical" className="mt-8">
              {productToUse.features ? (
                <div className="prose max-w-none" style={{ fontFamily: 'Montserrat' }}>
                  <div dangerouslySetInnerHTML={{ __html: productToUse.features }} />
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {technicalSpecs.map((category, categoryIndex) => (
                    <Card key={categoryIndex}>
                      <CardHeader>
                        <CardTitle>{category.category}</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        {category.specs.map((spec, specIndex) => (
                          <div key={specIndex} className="flex justify-between items-start">
                            <span className="text-gray-600 flex-1">{spec.label}</span>
                            <span className="font-medium text-right ml-4">{spec.value}</span>
                          </div>
                        ))}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </TabsContent>

            <TabsContent value="benefits" className="mt-8">
              {productToUse.benefits && productToUse.benefits.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {productToUse.benefits.map((benefit: string, index: number) => (
                    <Card key={index}>
                      <CardContent className="p-6 text-center">
                        <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: 'rgba(181, 194, 51, 0.1)' }}>
                          <Shield className="w-8 h-8" style={{ color: '#B5C233' }} />
                        </div>
                        <h3 className="font-semibold mb-2" style={{ fontFamily: 'Montserrat' }}>
                          {benefit}
                        </h3>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {benefits.map((benefit, index) => {
                    const IconComponent = benefit.icon;
                    return (
                      <Card key={index}>
                        <CardContent className="p-6 text-center">
                          <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: benefit.bgColor }}>
                            <IconComponent className="w-8 h-8" style={{ color: benefit.color }} />
                          </div>
                          <h3 className="font-semibold mb-2">{benefit.title}</h3>
                          <p className="text-gray-600 text-sm">
                            {benefit.description}
                          </p>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              )}
            </TabsContent>

            <TabsContent value="reviews" className="mt-8">
              {sampleReviews.length === 0 ? (
                <div className="text-center py-12">
                  <Star className="w-16 h-16 mx-auto mb-4 text-gray-300" />
                  <h3 className="text-xl font-semibold mb-2">Aucun avis pour le moment</h3>
                  <p className="text-gray-600">
                    Soyez le premier à donner votre avis sur ce produit !
                  </p>
                </div>
              ) : (
                <div className="space-y-8">
                  {/* Résumé des avis */}
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-1">
                    <Card>
                      <CardContent className="p-6 text-center">
                        <div className="text-4xl font-bold mb-2">{getAverageRating()}</div>
                        <div className="flex justify-center mb-2">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`w-5 h-5 ${
                                i < Math.floor(Number(getAverageRating())) 
                                  ? 'text-yellow-400 fill-current' 
                                  : 'text-gray-300'
                              }`} 
                            />
                          ))}
                        </div>
                        <p className="text-gray-600">{sampleReviews.length} avis clients</p>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="lg:col-span-2">
                    <Card>
                      <CardContent className="p-6">
                        <h3 className="font-semibold mb-4">Distribution des notes</h3>
                        {getRatingDistribution().map((count, index) => (
                          <div key={index} className="flex items-center gap-3 mb-2">
                            <span className="w-8 text-sm">{5-index} ⭐</span>
                            <Progress value={(count / sampleReviews.length) * 100} className="flex-1" />
                            <span className="w-8 text-sm text-gray-600">{count}</span>
                          </div>
                        ))}
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Filtres et tri */}
                <div className="flex flex-wrap gap-4 items-center justify-between">
                  <div className="flex gap-2">
                    <Select value={reviewFilter} onValueChange={setReviewFilter}>
                      <SelectTrigger className="w-40">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Tous les avis</SelectItem>
                        <SelectItem value="verified">Avis vérifiés</SelectItem>
                        <SelectItem value="5">5 étoiles</SelectItem>
                        <SelectItem value="4">4 étoiles</SelectItem>
                        <SelectItem value="3">3 étoiles</SelectItem>
                        <SelectItem value="2">2 étoiles</SelectItem>
                        <SelectItem value="1">1 étoile</SelectItem>
                      </SelectContent>
                    </Select>

                    <Select value={reviewSort} onValueChange={setReviewSort}>
                      <SelectTrigger className="w-40">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="recent">Plus récents</SelectItem>
                        <SelectItem value="helpful">Plus utiles</SelectItem>
                        <SelectItem value="rating">Note la plus élevée</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Liste des avis */}
                <div className="space-y-6">
                  {filteredReviews.map((review) => (
                    <Card key={review.id}>
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <Avatar>
                            <AvatarFallback>
                              {review.user.name.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <span className="font-medium">{review.user.name}</span>
                              {review.user.verified && (
                                <Badge variant="secondary" className="text-xs">
                                  <Verified className="w-3 h-3 mr-1" />
                                  Achat vérifié
                                </Badge>
                              )}
                            </div>
                            
                            <div className="flex items-center gap-2 mb-2">
                              <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                  <Star 
                                    key={i} 
                                    className={`w-4 h-4 ${
                                      i < review.rating 
                                        ? 'text-yellow-400 fill-current' 
                                        : 'text-gray-300'
                                    }`} 
                                  />
                                ))}
                              </div>
                              <span className="text-sm text-gray-600">
                                {new Date(review.date).toLocaleDateString('fr-FR')}
                              </span>
                              {review.size && (
                                <Badge variant="outline" className="text-xs">
                                  Taille: {review.size}
                                </Badge>
                              )}
                            </div>
                            
                            <h4 className="font-medium mb-2">{review.title}</h4>
                            <p className="text-gray-700 mb-4">{review.comment}</p>
                            
                            <div className="flex items-center gap-4 text-sm">
                              <button 
                                className="flex items-center gap-1 text-gray-600 transition-colors"
                                onMouseEnter={(e) => e.currentTarget.style.color = '#B5C233'}
                                onMouseLeave={(e) => e.currentTarget.style.color = '#6b7280'}
                              >
                                <ThumbsUp className="w-4 h-4" />
                                Utile ({review.helpful})
                              </button>
                              <button className="flex items-center gap-1 text-gray-600 hover:text-red-600">
                                <ThumbsDown className="w-4 h-4" />
                                Pas utile
                              </button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}
            </TabsContent>
          </Tabs>
        </div>

        {/* Produits associés et recommandations desktop */}
        <div className="hidden lg:block bg-white rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: 'Montserrat', color: '#000000' }}>
            Produits recommandés
          </h2>
          
          {similarLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="animate-pulse">
                  <div className="bg-gray-200 aspect-square rounded-lg mb-3"></div>
                  <div className="h-4 bg-gray-200 rounded mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                </div>
              ))}
            </div>
          ) : filteredSimilarProducts && filteredSimilarProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredSimilarProducts.map((similarProduct) => (
                <ProductCard 
                  key={similarProduct.id} 
                  {...mapProductToCard(similarProduct)}
                  onProductClick={(clickedProduct) => {
                    if (onProductClick) {
                      onProductClick(similarProduct);
                    }
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p style={{ color: '#6E6E6E' }}>
                Aucun produit similaire disponible pour le moment.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Modal de commande sur mesure */}
      <CustomOrderModal
        isOpen={isCustomOrderModalOpen}
        onClose={() => setIsCustomOrderModalOpen(false)}
        productId={productToUse.id}
        productName={productToUse.title}
        productSku={productToUse.sku || product.sku || 'N/A'}
      />
    </div>
  );
}