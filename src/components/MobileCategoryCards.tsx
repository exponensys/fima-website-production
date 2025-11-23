import { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faHouse, faWrench, faBuilding } from '@fortawesome/free-solid-svg-icons';
import { useHeroSlides } from '../hooks/useHeroSlides';
import { isYouTubeUrl, getYouTubeEmbedUrl } from '../utils/videoUtils';

interface MobileCategoryCardsProps {
  onNavigate: (page: string, category?: string) => void;
}

export function MobileCategoryCards({ onNavigate }: MobileCategoryCardsProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mounted, setMounted] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Récupérer les slides depuis Supabase
  const { slides: heroSlidesData, loading } = useHeroSlides();

  // Filtrer les slides actifs
  const heroSlides = heroSlidesData
    .filter((slide) => slide.is_active)
    .map((slide) => ({
      id: slide.id,
      background: slide.background_image_url,
      slideDuration: slide.slide_duration,
      isVideo: slide.is_video,
      videoUrl: slide.video_url,
    }));

  // Slide par défaut
  const defaultSlide = {
    id: '1',
    background: 'https://images.unsplash.com/photo-1718939045285-b67f9e9f9f8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    slideDuration: 5000,
    isVideo: false,
    videoUrl: null,
  };

  const slidesToDisplay = loading || heroSlides.length === 0 ? [defaultSlide] : heroSlides;
  const currentHeroSlide = slidesToDisplay[currentSlide];

  // Catégories business units
  const businessCategories = [
    {
      key: 'fima-couchage',
      title: 'FIMA Couchage',
      subtitle: 'Literie Premium',
      icon: faHouse,
      color: '#B5C233',
    },
    {
      key: 'fima-design',
      title: 'FIMA Design',
      subtitle: 'Menuiserie',
      icon: faWrench,
      color: '#6E6E6E',
    },
    {
      key: 'univers-glass',
      title: 'UNIVERS GLASS',
      subtitle: 'Vitrerie',
      icon: faBuilding,
      color: '#0EA5E9',
    },
  ];

  // Détection client
  useEffect(() => {
    setMounted(true);
  }, []);

  // Auto-défilement des slides hero
  useEffect(() => {
    if (!mounted || slidesToDisplay.length <= 1 || !currentHeroSlide) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slidesToDisplay.length);
    }, currentHeroSlide.slideDuration || 5000);

    return () => clearInterval(timer);
  }, [mounted, currentSlide, slidesToDisplay.length, currentHeroSlide]);

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slidesToDisplay.length - 1 : prev - 1));
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slidesToDisplay.length);
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
    <div className="md:hidden bg-white w-full" style={{ marginTop: '100px' }}>
      {/* Hero Slide */}
      <div className="relative w-full h-64 overflow-hidden"  style={{ marginTop: '7.5rem' }}>
        {currentHeroSlide.isVideo && currentHeroSlide.videoUrl ? (
          isYouTubeUrl(currentHeroSlide.videoUrl) ? (
            <iframe
              className="absolute inset-0 w-full h-full"
              src={getYouTubeEmbedUrl(currentHeroSlide.videoUrl, true) || ''}
              frameBorder="0"
              allow="autoplay; encrypted-media"
              style={{ pointerEvents: 'none', objectFit: 'contain' }}
            />
          ) : (
            <video
              className="absolute inset-0 w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              style={{ pointerEvents: 'none' }}
            >
              <source src={currentHeroSlide.videoUrl} type="video/mp4" />
            </video>
          )
        ) : (
          <div
            className="absolute inset-0 transition-opacity duration-700"
            style={{
              backgroundImage: `url(${currentHeroSlide.background})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        )}
        
        {/* Navigation */}
        {mounted && slidesToDisplay.length > 1 && (
          <>
            <button
              onClick={goToPrevSlide}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-20 p-2 bg-black/30 text-white rounded"
            >
              <FontAwesomeIcon icon={faChevronLeft} className="w-4 h-4" />
            </button>
            <button
              onClick={goToNextSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-20 p-2 bg-black/30 text-white rounded"
            >
              <FontAwesomeIcon icon={faChevronRight} className="w-4 h-4" />
            </button>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-20 flex gap-1">
              {slidesToDisplay.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className="w-2 h-2 rounded-full"
                  style={{
                    backgroundColor: index === currentSlide ? '#B5C233' : 'rgba(255,255,255,0.5)',
                  }}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Titre section */}
      <div className="bg-black text-white p-3 text-sm font-semibold">
Nos Metiers      </div>

      {/* Catégories */}
      <div className="grid grid-cols-3 gap-2 p-2 bg-white">
        {businessCategories.map((category) => (
          <button
            key={category.key}
            onClick={() => onNavigate(category.key)}
            className="bg-white border border-gray-200 rounded-lg p-3 flex flex-col items-center gap-2 hover:shadow-md transition-shadow"
          >
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center text-white"
              style={{ backgroundColor: category.color }}
            >
              <FontAwesomeIcon icon={category.icon} className="w-6 h-6" />
            </div>
            <div className="text-center">
              <div className="text-xs font-bold text-gray-900">{category.title}</div>
              <div className="text-xs text-gray-500">{category.subtitle}</div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}