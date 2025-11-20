import { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

interface MobileCategoryCardsProps {
  onNavigate: (page: string, category?: string) => void;
}

export function MobileCategoryCards({ onNavigate }: MobileCategoryCardsProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Fonction pour naviguer vers tous les produits avec la catégorie sélectionnée
  const handleCategoryClick = (categorySlug: string) => {
    // Navigation vers "all-products" avec la catégorie en paramètre
    onNavigate('all-products', categorySlug);
  };

  // Catégories de produits FIMA Couchage
  const categories = [
    {
      id: 'matelas-tissus-brode',
      title: 'Matelas Tissus Brodé',
      subtitle: 'FIMA Couchage',
      image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&q=80',
      color: '#B5C233',
    },
    {
      id: 'matelas-hopital',
      title: 'Matelas Hôpital',
      subtitle: 'FIMA Couchage',
      image: 'https://images.unsplash.com/photo-1631049035182-249067d7618e?w=800&q=80',
      color: '#B5C233',
    },
    {
      id: 'matelas-bebe',
      title: 'Matelas pour Bébé',
      subtitle: 'FIMA Couchage',
      image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&q=80',
      color: '#B5C233',
    },
    {
      id: 'coussins-traversins',
      title: 'Coussins et Traversins',
      subtitle: 'Tissus unis',
      image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80',
      color: '#B5C233',
    },
    {
      id: 'couette-housse',
      title: 'Couette et Housse de Couette',
      subtitle: 'FIMA Couchage',
      image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80',
      color: '#B5C233',
    },
    {
      id: 'kit-parure-lit',
      title: 'Kit de Parure de Lit',
      subtitle: 'FIMA Couchage',
      image: 'https://jxikbrjmdmznoehhccdw.supabase.co/storage/v1/object/public/make-98c6ec1c-media/images/8895139f-16cf-4424-9a58-671e1ff7e2ee.png',
      color: '#B5C233',
    },
  ];

  // Fonction pour scroller vers une slide spécifique
  const scrollToSlide = (index: number) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const slideWidth = container.offsetWidth;
      container.scrollTo({
        left: slideWidth * index,
        behavior: 'smooth'
      });
      setCurrentSlide(index);
    }
  };

  // Détecter le changement de slide au scroll
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const slideWidth = container.offsetWidth;
      const newIndex = Math.round(container.scrollLeft / slideWidth);
      setCurrentSlide(newIndex);
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="md:hidden bg-white">
      {/* Container scrollable */}
      <div 
        ref={scrollContainerRef}
        className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-3 pb-4"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {categories.map((category) => (
          <div 
            key={category.id} 
            className="snap-center flex-shrink-0 w-[85%]"
          >
            <div className="relative overflow-hidden group bg-gray-100 min-h-[70vh]">
              {/* Image de fond */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ 
                  backgroundImage: `url(${category.image})`,
                }}
              >
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
              </div>

              {/* Contenu */}
              <div className="relative h-full flex flex-col justify-between p-5 pt-12 text-white">
                <div className="mb-3">
                  <p 
                    className="text-xm uppercase tracking-wider mb-1 opacity-90"
                    style={{ color: category.color }}
                  >
                    {category.subtitle}
                  </p>
                  <h3 
                    className="text-xl mb-2"
                    style={{ fontFamily: 'Montserrat' }}
                  >
                    {category.title}
                  </h3>
                </div>

                {/* CTA Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCategoryClick(category.id);
                  }}
                  className="flex items-center justify-between w-full py-2.5 px-4 transition-all duration-300 cursor-pointer"
                  style={{
                    backgroundColor: category.color,
                    color: category.color === '#B5C233' ? '#333333' : 
                           category.color === '#6E6E6E' ? '#B5C233' : 
                           'white',
                    fontFamily: 'Inter',
                  }}
                >
                  <span className="text-sm font-medium pt-[5px] pr-[0px] pb-[0px] pl-[0px]">Voir les produits</span>
                  <FontAwesomeIcon icon={faChevronRight} className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Indicateurs de pagination */}
      <div className="flex justify-center gap-2 pb-8">
        {categories.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToSlide(index)}
            className="w-2 h-2 transition-all duration-300"
            style={{
              backgroundColor: currentSlide === index ? '#B5C233' : '#E0E0E0',
              opacity: currentSlide === index ? 1 : 0.5,
              minWidth: '8px',
              minHeight: '8px',
              width: '8px',
              height: '8px',
              padding: 0,
              border: 'none'
            }}
            aria-label={`Aller à la catégorie ${index + 1}`}
          />
        ))}
      </div>
      
      {/* Séparateur visuel */}
      <div className="h-2 bg-gray-100"></div>
    </div>
  );
}