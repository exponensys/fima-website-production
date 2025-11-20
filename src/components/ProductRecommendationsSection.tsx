import { ImageWithFallback } from './figma/ImageWithFallback';
import { Star, Plus } from 'lucide-react';

interface RecommendedProduct {
  id: string;
  title: string;
  image: string;
  price: number;
  originalPrice?: number;
  rating?: number;
  description?: string;
}

interface ProductRecommendationsSectionProps {
  onProductClick?: (productId: string) => void;
}

export function ProductRecommendationsSection({ onProductClick }: ProductRecommendationsSectionProps) {
  // Données d'exemple de produits recommandés
  const recommendedProducts: RecommendedProduct[] = [
    {
      id: '1',
      title: 'LAMPE SPE NORA',
      image: 'https://images.unsplash.com/photo-1735807026641-dc0b979564bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkZXNrJTIwbGFtcHxlbnwxfHx8fDE3NTgyMTM3Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      price: 867,
      originalPrice: 1200,
      rating: 4.8,
      description: 'Éclairage LED moderne'
    },
    {
      id: '2', 
      title: 'EXECUTIVE Desk C',
      image: 'https://images.unsplash.com/photo-1616130007484-24a2c05fdfbe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGVjdXRpdmUlMjBvZmZpY2UlMjBkZXNrfGVufDF8fHx8MTc1ODIxMzczM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      price: 277150,
      originalPrice: 334413,
      rating: 4.9,
      description: 'Bureau exécutif premium'
    },
    {
      id: '3',
      title: 'BONHEUR Mattress',
      image: 'https://images.unsplash.com/photo-1640003145136-f998284e11de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXR0cmVzcyUyMGJlZHJvb218ZW58MXx8fHwxNzU4MjEzNzM2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      price: 195,
      originalPrice: 289,
      rating: 4.7,
      description: 'Matelas confort optimal'
    }
  ];

  return (
    <div className="mt-8 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 md:order-none order-2">
      <h3 className="font-semibold text-xl mb-6" style={{ color: '#000000' }}>
        Compléments recommandés
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {recommendedProducts.map((product) => (
          <div 
            key={product.id}
            className="group cursor-pointer bg-gray-50 rounded-xl p-4 hover:shadow-md transition-all duration-300 hover:bg-gray-100"
            onClick={() => onProductClick?.(product.id)}
          >
            <div className="relative mb-4">
              <div className="aspect-square w-full rounded-lg overflow-hidden bg-white">
                <ImageWithFallback 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              {/* Badge de réduction */}
              {product.originalPrice && (
                <div className="absolute top-2 left-2">
                  <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-md">
                    -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                  </span>
                </div>
              )}
              
              {/* Bouton d'ajout rapide */}
              <button className="absolute top-2 right-2 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white">
                <Plus className="w-4 h-4 text-gray-700" />
              </button>
            </div>
            
            <div>
              <h4 className="font-medium text-sm mb-2 line-clamp-2" style={{ color: '#000000' }}>
                {product.title}
              </h4>
              
              {product.description && (
                <p className="text-xs text-gray-500 mb-2">{product.description}</p>
              )}
              
              {/* Rating */}
              {product.rating && (
                <div className="flex items-center gap-1 mb-2">
                  <Star className="w-3 h-3 text-yellow-400 fill-current" />
                  <span className="text-xs text-gray-600">{product.rating}</span>
                </div>
              )}
              
              {/* Prix */}
              <div className="flex items-center gap-2">
                <span className="font-bold text-sm" style={{ color: '#E30613' }}>
                  {product.price.toLocaleString()} F
                </span>
                {product.originalPrice && (
                  <span className="text-xs text-gray-400 line-through">
                    {product.originalPrice.toLocaleString()} F
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Section footer */}
      <div className="mt-6 pt-4 border-t border-gray-100">
        <p className="text-sm text-gray-600 text-center">
          Ces produits sont souvent achetés ensemble
        </p>
      </div>
    </div>
  );
}