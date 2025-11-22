import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useHeroSlides } from "../hooks/useHeroSlides";
const fimaLogo = '/1da2d5f603cd62a74c69b55293bcdadb2f6d8468.png';

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

  // Auto-défilement
  useEffect(() => {
    if (slidesToDisplay.length <= 1) return;

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

  const handleHeroClick = () => {
    const targetPage = getPageFromSlideTitle(currentHeroSlide.title);
    onNavigate(targetPage);
  };

  return (
    <section
      className="relative w-full overflow-hidden cursor-pointer"
      onClick={handleHeroClick}
      style={{
        height: '60vh',
        minHeight: '400px',
        maxHeight: '600px',
        position: 'relative',
        overscrollBehavior: 'none',
        WebkitOverflowScrolling: 'touch',
        touchAction: 'manipulation',
        WebkitTapHighlightColor: 'transparent',
        marginTop: '60px', // Compenser la hauteur du header mobile
      }}
    >
      {/* Image ou vidéo de fond */}
      {currentHeroSlide.isVideo && currentHeroSlide.videoUrl ? (
        <div className="absolute inset-0">
          {currentHeroSlide.videoUrl.includes('youtube.com') || currentHeroSlide.videoUrl.includes('youtu.be') ? (
            <iframe
              className="absolute inset-0 w-full h-full"
              src={currentHeroSlide.videoUrl.replace('watch?v=', 'embed/').replace('youtu.be/', 'youtube.com/embed/') + '?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&modestbranding=1'}
              frameBorder="0"
              allow="autoplay; encrypted-media"
              style={{ pointerEvents: 'none' }}
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
          )}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60" />
        </div>
      ) : (
        <div
          className="absolute inset-0 transition-opacity duration-700"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url(${currentHeroSlide.background})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />
      )}

      {/* Logo FIMA centré - Cliquable */}
      <div className="relative z-10 h-full flex items-center justify-center p-4">
        <img 
          src={fimaLogo} 
          alt="GROUP FIMA" 
          style={{
            width: 'auto',
            height: 'auto',
            maxWidth: '80%',
            maxHeight: '30%',
            objectFit: 'contain',
            pointerEvents: 'none', // Le clic est géré par le parent
          }}
        />
      </div>

      {/* Navigation si plusieurs slides */}
      {slidesToDisplay.length > 1 && (
        <>
          {/* Boutons Prev/Next - Stop propagation pour ne pas déclencher navigation */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToPrevSlide();
            }}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 p-2 bg-black/30 backdrop-blur-sm text-white"
            style={{
              touchAction: 'manipulation',
              WebkitTapHighlightColor: 'transparent',
            }}
          >
            <FontAwesomeIcon icon={faChevronLeft} className="w-6 h-6" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToNextSlide();
            }}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 p-2 bg-black/30 backdrop-blur-sm text-white"
            style={{
              touchAction: 'manipulation',
              WebkitTapHighlightColor: 'transparent',
            }}
          >
            <FontAwesomeIcon icon={faChevronRight} className="w-6 h-6" />
          </button>

          {/* Indicateurs - Stop propagation pour ne pas déclencher navigation */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
            {slidesToDisplay.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentSlide(index);
                }}
                className="w-2 h-2 transition-all"
                style={{
                  backgroundColor:
                    index === currentSlide
                      ? '#B5C233'
                      : 'rgba(255,255,255,0.5)',
                  touchAction: 'manipulation',
                  WebkitTapHighlightColor: 'transparent',
                }}
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
}
