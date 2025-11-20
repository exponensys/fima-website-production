import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { useApp } from '../contexts/AppContext';
import { toast } from 'sonner';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { smartConvertPrice } from '../utils/currency';

interface ProductCardProps {
  id: string;
  image: string;
  title: string;
  description: string;
  price: string | number;
  originalPrice?: string | number;
  discount?: string;
  badge?: string;
  category?: string;
  sourceCurrency?: string; // Devise dans laquelle le prix est stocké
  isCustom?: boolean; // Produit sur mesure
  onProductClick: (product: any) => void;
}

export function ProductCard({
  id,
  image,
  title,
  description,
  price,
  originalPrice,
  discount,
  badge,
  category,
  sourceCurrency,
  isCustom,
  onProductClick
}: ProductCardProps) {
  const { addToFavorites, removeFromFavorites, isFavorite } = useApp();
  
  const product = {
    id,
    image,
    title,
    description,
    price,
    originalPrice,
    discount,
    badge,
    category
  };

  const productIsFavorite = isFavorite(id);

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Empêcher le clic sur la carte
    
    if (productIsFavorite) {
      removeFromFavorites(id);
      toast.success('Retiré des favoris');
    } else {
      addToFavorites(product);
      toast.success('Ajouté aux favoris !');
    }
  };

  const handleCardClick = () => {
    onProductClick(product);
  };

  // Convertir les prix dans la devise sélectionnée
  const numericPrice = typeof price === 'string' ? parseFloat(price) : price;
  const numericOriginalPrice = typeof originalPrice === 'string' ? parseFloat(originalPrice) : originalPrice;
  
  const displayPrice = smartConvertPrice(numericPrice, sourceCurrency);
  const displayOriginalPrice = numericOriginalPrice ? smartConvertPrice(numericOriginalPrice, sourceCurrency) : null;

  return (
    <div 
      className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer"
      onClick={handleCardClick}
    >
      <div className="relative">
        <ImageWithFallback 
          src={image || 'https://images.unsplash.com/photo-1648634158203-199accfd7afc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtYXR0cmVzcyUyMGJlZHJvb218ZW58MXx8fHwxNzU1OTg4NDUyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'}
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Badge et bouton favoris */}
        <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
          {(badge || discount) && (
            <span className={badge ? "fima-badge-green" : "fima-badge-red"}>
              {badge || `${discount} OFF`}
            </span>
          )}
          
          <button
            onClick={handleFavoriteClick}
            className={`p-2 backdrop-blur-sm transition-all ${
              productIsFavorite 
                ? 'bg-red-500 text-white' 
                : 'bg-white/80 text-gray-600 hover:bg-white hover:text-red-500'
            }`}
          >
            <FontAwesomeIcon icon={faHeart} className="w-5 h-5" />
          </button>
        </div>
      </div>
      
      <div className="p-4 md:p-6">
        <h3 
          className="mb-2 transition-colors"
          style={{ fontFamily: 'Montserrat', color: '#000000' }}
          onMouseEnter={(e) => e.currentTarget.style.color = '#B5C233'}
          onMouseLeave={(e) => e.currentTarget.style.color = '#000000'}
        >
          {title}
        </h3>
        
        <p 
          className="text-sm mb-3 md:mb-4 line-clamp-2"
          style={{ color: '#6E6E6E' }}
        >
          {description}
        </p>
        
        {!isCustom ? (
          <div className="flex items-center justify-between mb-3 md:mb-4">
            <div className="flex items-center gap-2">
              <span 
                className="text-xl font-bold"
                style={{ color: '#E30613' }}
              >
                {displayPrice}
              </span>
              {displayOriginalPrice && (
                <span 
                  className="text-sm line-through"
                  style={{ color: '#6E6E6E' }}
                >
                  {displayOriginalPrice}
                </span>
              )}
            </div>
          </div>
        ) : (
          <div className="mb-3 md:mb-4">
            <span 
              className="text-sm font-semibold"
              style={{ color: '#0EA5E9' }}
            >
              Sur mesure - Prix sur devis
            </span>
          </div>
        )}
        
        <button 
          onClick={(e) => {
            e.stopPropagation();
            onProductClick(product);
          }}
          className="w-full fima-btn-secondary py-3.5 md:py-3 hover:shadow-lg transition-shadow text-[rgba(81,76,76,1)] pt-[5px] pr-[17px] pb-[14px] pl-[17px]"
        >
          Voir détails
        </button>
      </div>
    </div>
  );
}