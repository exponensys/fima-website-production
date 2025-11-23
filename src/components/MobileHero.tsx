import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faHouse, faWrench, faBuilding } from '@fortawesome/free-solid-svg-icons';
import { useHeroSlides } from "../hooks/useHeroSlides";

interface MobileHeroProps {
  onNavigate: (page: string) => void;
}

/**
 * MobileHero - Version simplifiée anti-bounce
 * 
 * Changements clés:
 * - Hauteur fixe au lieu de min-h-screen
 * - Pas de position fixed/absolute qui interfère
 * - Structure HTML simplifiée
 * - Transitions CSS simples
 */
export function MobileHero({ onNavigate }: MobileHeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mounted, setMounted] = useState(false);

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
  
  // Récupérer les slides
  const { slides: heroSlidesData, loading } = useHeroSlides();

  // Filtrer les slides actifs
  const heroSlides = heroSlidesData
    .filter((slide) => slide.is_active)
    .map((slide) => ({
      id: slide.id,
      title: slide.translation.title,
      subtitle: slide.translation.subtitle,
      description: slide.translation.description,
      ctaPrimary: slide.translation.cta_primary,
      badge: slide.translation.badge,
      background: slide.background_image_url,
      slideDuration: slide.slide_duration,
      isVideo: slide.is_video,
      videoUrl: slide.video_url,
      ctaBgColor: slide.cta_bg_color || "#FFFFFF",
      ctaTextColor: slide.cta_text_color || "#B5C233",
    }));

  // Slide par défaut
  const defaultHeroSlides = [
    {
      id: "1",
      title: "FIMA Couchage",
      subtitle: "LITERIE PREMIUM",
      description: "Matelas, sommiers et accessoires.",
      ctaPrimary: "Découvrir",
      badge: "14 NUITS D'ESSAI",
      background:
        "https://images.unsplash.com/photo-1718939045285-b67f9e9f9f8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      slideDuration: 5000,
      ctaBgColor: "#FFFFFF",
      ctaTextColor: "#B5C233",
    },
  ];

  const slidesToDisplay =
    loading || heroSlides.length === 0
      ? defaultHeroSlides
      : heroSlides;

  const currentHeroSlide = slidesToDisplay[currentSlide];

  // Détection client
  useEffect(() => {
    setMounted(true);
  }, []);

  // Auto-défilement
  useEffect(() => {
    if (!mounted || slidesToDisplay.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slidesToDisplay.length);
    }, currentHeroSlide.slideDuration || 5000);

    return () => clearInterval(timer);
  }, [currentSlide, slidesToDisplay.length, currentHeroSlide.slideDuration]);

  const goToPrevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? slidesToDisplay.length - 1 : prev - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slidesToDisplay.length);
  };

  // Mapper le titre du slide à la page métier correspondante
  const getPageFromSlideTitle = (title: string): string => {
    const titleLower = title.toLowerCase();
    
    if (titleLower.includes('couchage') || titleLower.includes('literie') || titleLower.includes('matelas')) {
      return 'fima-couchage';
    } else if (titleLower.includes('design') || titleLower.includes('menuiserie') || titleLower.includes('ameublement')) {
      return 'fima-design';
    } else if (titleLower.includes('glass') || titleLower.includes('univers glass') || titleLower.includes('vitrerie') || titleLower.includes('aluminium')) {
      return 'univers-glass';
    }
    
    // Par défaut, retourner à la page produits
    return 'all-products';
  };

  return (
    <div className="w-full" style={{ marginTop: '60px' }}>
      {/* Hero Slide */}
      <div className="relative w-full h-48 overflow-hidden">
        <div
          className="absolute inset-0 transition-opacity duration-700"
          style={{
            backgroundImage: `url(${currentHeroSlide.background})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        
        {/* Navigation - visible seulement côté client */}
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
        Meilleures offres
      </div>

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
