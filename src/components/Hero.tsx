import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRight,
  faPlay,
  faChevronDown,
  faChevronLeft,
  faChevronRight,
  faCheckCircle,
  faBuilding,
  faHouse,
  faWrench,
} from '@fortawesome/free-solid-svg-icons';
import { MobileScrollIndicator } from "./MobileScrollIndicator";
import { ProductsSection } from "./ProductsSection";
import { useHeroSlides } from "../hooks/useHeroSlides";
import { useLogoScrollAnimation } from "../hooks/useLogoScrollAnimation";
import {
  isYouTubeUrl,
  getYouTubeEmbedUrl,
} from "../utils/videoUtils";
import fimaLogo from "figma:asset/1da2d5f603cd62a74c69b55293bcdadb2f6d8468.png";

interface HeroProps {
  onNavigate: (page: string) => void;
  onScrollToProducts?: (category?: string) => void;
  onProductClick?: (product: any) => void;
  externalCategoryChange?: string;
  onExternalCategoryHandled?: () => void;
}

export function Hero({
  onNavigate,
  onScrollToProducts,
  onProductClick,
  externalCategoryChange,
  onExternalCategoryHandled,
}: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [videoDuration, setVideoDuration] = useState<
    number | null
  >(null);
  const [isScrolled, setIsScrolled] = useState(false);

  // Animation du logo au scroll
  const logoRef = useRef<HTMLDivElement>(null);
  const { hasScrolled, isAnimating } = useLogoScrollAnimation();

  // Récupérer les slides depuis Supabase
  const {
    slides: heroSlidesData,
    loading,
    error,
  } = useHeroSlides();

  // Filtrer uniquement les slides actifs et les mapper au format attendu par le Hero
  const heroSlides = heroSlidesData
    .filter((slide) => slide.is_active) // ✅ Filtrer les slides actifs uniquement
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
      videoPlayDuration: slide.video_play_duration,
      videoLoop: slide.video_loop,
      ctaBgColor: slide.cta_bg_color || "#FFFFFF",
      ctaTextColor: slide.cta_text_color || "#B5C233",
    }));

  // Slides par défaut en cas de chargement ou d'erreur
  const defaultHeroSlides = [
    {
      id: "1",
      title: "FIMA Couchage",
      subtitle: "LITERIE PREMIUM",
      description:
        "Matelas, sommiers et accessoires. 14 nuits d'essai, livraison rapide sous 48h et garantie 10 ans.",
      ctaPrimary: "Découvrir nos produits",
      badge: "14 NUITS D'ESSAI",
      background:
        "https://images.unsplash.com/photo-1718939045285-b67f9e9f9f8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiZWRyb29tJTIwZGVzaWduJTIwY29tZm9ydGFibGV8ZW58MXx8fHwxNzU4MTA2MzMxfDA&ixlib=rb-4.1.0&q=80&w=1080",
      slideDuration: 5000,
      ctaBgColor: "#FFFFFF",
      ctaTextColor: "#B5C233",
    },
  ];

  // Utiliser les slides Supabase ou les slides par défaut
  const slidesToDisplay =
    loading || error || heroSlides.length === 0
      ? defaultHeroSlides
      : heroSlides;

  // Définir currentHeroSlide avant les useEffect
  const currentHeroSlide = slidesToDisplay[currentSlide];

  // Validation du slide en mode développement
  useEffect(() => {
    if (
      process.env.NODE_ENV === "development" &&
      currentHeroSlide
    ) {
      if (
        currentHeroSlide.isVideo &&
        !currentHeroSlide.videoUrl
      ) {
        console.warn(
          `⚠️ Slide "${currentHeroSlide.id}" configuré comme vidéo mais sans videoUrl. ` +
            `Le slide sera affiché en mode image. Ajoutez une URL vidéo dans le CMS.`,
        );
      }
    }
  }, [currentHeroSlide]);

  // Détecter le scroll pour cacher les boutons de navigation
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      setIsScrolled(scrollY > 5);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-défilement des slides
  useEffect(() => {
    if (!isPaused && slidesToDisplay.length > 0) {
      const currentSlideDuration =
        currentHeroSlide.slideDuration || 5000;

      const interval = setInterval(() => {
        setCurrentSlide(
          (prev) => (prev + 1) % slidesToDisplay.length,
        );
      }, currentSlideDuration); // Utilise la durée personnalisée de chaque slide

      return () => clearInterval(interval);
    }
  }, [
    isPaused,
    slidesToDisplay.length,
    currentHeroSlide.slideDuration,
  ]);

  // Gestion de la durée vidéo
  useEffect(() => {
    if (
      currentHeroSlide.isVideo &&
      currentHeroSlide.videoPlayDuration
    ) {
      const videoElement = document.querySelector(
        "video",
      ) as HTMLVideoElement;
      if (videoElement) {
        // Timer pour arrêter la vidéo après la durée définie
        const stopTimer = setTimeout(() => {
          videoElement.pause();
          console.log(
            `Vidéo arrêtée après ${currentHeroSlide.videoPlayDuration}ms`,
          );
        }, currentHeroSlide.videoPlayDuration);

        return () => clearTimeout(stopTimer);
      }
    }
  }, [currentSlide, currentHeroSlide]);

  const handleSlideChange = (slideIndex: number) => {
    setCurrentSlide(slideIndex);
    setIsPaused(true); // Pause l'auto-défilement quand l'utilisateur clique

    // Reprend l'auto-défilement après 10 secondes
    setTimeout(() => {
      setIsPaused(false);
    }, 10000);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? slidesToDisplay.length - 1 : prev - 1,
    );
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 10000);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) =>
      prev === slidesToDisplay.length - 1 ? 0 : prev + 1,
    );
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 10000);
  };

  const handleCTAClick = (action: string) => {
    // Tous les boutons des slides scrollent vers les catégories de produits (Business Units)
    const businessCategoriesSection = document.getElementById(
      "business-categories",
    );

    if (businessCategoriesSection) {
      businessCategoriesSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // Données des 3 métiers intégrées dans le hero
  const businessUnits = [
    {
      key: "fima-couchage",
      title: "FIMA Couchage",
      subtitle: "Literie Premium",
      description: "Matelas, sommiers et accessoires",
      icon: <FontAwesomeIcon icon={faHouse} className="w-5 h-5" />,
      color: "#B5C233",
      features: [
        "14 nuits d'essai",
        "Livraison rapide sous 48h",
        "Garantie 10 ans",
      ],
      ctaText: "Découvrir FIMA Couchage",
    },
    {
      key: "fima-design",
      title: "FIMA Design",
      subtitle: "Menuiserie & Ameublement",
      description:
        "Créations sur-mesure et mobilier contemporain",
      icon: <FontAwesomeIcon icon={faWrench} className="w-5 h-5" />,
      color: "#6E6E6E",
      features: [
        "Design personnalisé",
        "Bois nobles",
        "Installation incluse",
      ],
      ctaText: "Découvrir FIMA Design",
    },
    {
      key: "univers-glass",
      title: "UNIVERS GLASS",
      subtitle: "Vitrerie & Aluminium",
      description: "Solutions techniques pour professionnels",
      icon: <FontAwesomeIcon icon={faBuilding} className="w-5 h-5" />,
      color: "#0EA5E9",
      features: [
        "Solutions B2B",
        "Projets complexes",
        "Expertise technique",
      ],
      ctaText: "Découvrir UNIVERS GLASS",
    },
  ];

  return (
    <section
      className="hero-full-width relative w-full overflow-visible force-zero-margin hidden md:block"
      style={{ margin: 0, padding: 0, border: "none" }}
    >
      {/* Hero Principal - style Amazon avec cartes flottantes intégrées */}
      <div
        className="relative w-full force-zero-margin"
        style={{ margin: 0, padding: 0 }}
      >
        {/* Background Hero avec contenu centré - hauteur augmentée pour espacer le logo */}
        <div
          className="relative h-[50vh] md:h-[55vh] lg:h-[60vh] flex items-start justify-center w-full pt-10 md:pt-24 lg:pt-32 overflow-hidden"
          style={{
            backgroundImage: `linear-gradient(135deg, 
              rgba(181, 194, 51, 0.9) 0%, 
              rgba(227, 6, 19, 0.8) 50%, \n              rgba(14, 165, 233, 0.9) 100%),
              url(${currentHeroSlide.background})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundBlendMode: "overlay",
            margin: 0,
            padding: 0,
            paddingTop: "80px",
          }}
        >
          {/* <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/30"></div> */}

          {/* Affichage conditionnel : vidéo ou contenu classique */}
          {currentHeroSlide.isVideo &&
          currentHeroSlide.videoUrl ? (
            // Slide vidéo
            <div className="absolute inset-0 z-10 w-full h-full flex items-start justify-center overflow-hidden">
              {/* Détection YouTube vs vidéo directe */}
              {isYouTubeUrl(currentHeroSlide.videoUrl) ? (
                // ✅ Vidéo YouTube avec iframe embed
                <>
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src={
                      getYouTubeEmbedUrl(
                        currentHeroSlide.videoUrl,
                        true,
                      ) || ""
                    }
                    title={currentHeroSlide.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{
                      animation:
                        "videoFadeIn 1.5s ease-out forwards",
                      pointerEvents: "auto",
                    }}
                    onLoad={() => {
                      if (
                        process.env.NODE_ENV === "development"
                      ) {
                        console.log(
                          "✅ Vidéo YouTube chargée:",
                          currentHeroSlide.videoUrl,
                        );
                      }
                    }}
                  />
                  {/* Overlay sombre pour la lisibilité - avec dégradé du haut */}
                  <div className="absolute inset-0 top-0 bg-gradient-to-b from-black/30 via-black/20 to-black/10 pointer-events-none"></div>
                </>
              ) : (
                // 🎬 Vidéo directe (MP4, WebM, etc.)
                <>
                  <video
                    className="absolute inset-0 w-full h-full object-cover"
                    autoPlay
                    muted
                    loop={currentHeroSlide.videoLoop !== false} // Contrôle du loop basé sur la config
                    playsInline
                    preload="metadata"
                    style={{
                      animation:
                        "videoZoomIn 15s ease-out infinite alternate, videoFadeIn 1.5s ease-out forwards",
                      maxWidth: "100%",
                      maxHeight: "100%",
                    }}
                    onError={(e) => {
                      // Logger les informations utiles sans l'événement complet
                      const videoElement =
                        e.currentTarget as HTMLVideoElement;
                      const errorInfo = {
                        slideId: currentHeroSlide.id,
                        configuredUrl:
                          currentHeroSlide.videoUrl,
                        videoSrc:
                          videoElement?.currentSrc ||
                          videoElement?.src ||
                          "Non défini",
                        networkState:
                          videoElement?.networkState,
                        readyState: videoElement?.readyState,
                        error: videoElement?.error?.code,
                        errorMessage:
                          videoElement?.error?.message,
                      };

                      if (
                        process.env.NODE_ENV === "development"
                      ) {
                        console.error(
                          "🎥 Erreur de chargement vidéo:",
                          errorInfo,
                        );
                      }

                      // Fallback vers l'image de background si la vidéo ne charge pas
                      e.currentTarget.style.display = "none";
                    }}
                    onLoadStart={() => {
                      if (
                        process.env.NODE_ENV === "development"
                      ) {
                        console.log(
                          "🎥 Début de chargement de la vidéo:",
                          currentHeroSlide.videoUrl?.substring(
                            0,
                            60,
                          ) + "...",
                        );
                      }
                    }}
                    onCanPlay={() => {
                      if (
                        process.env.NODE_ENV === "development"
                      ) {
                        console.log(
                          "✅ Vidéo prête à être lue",
                        );
                      }
                    }}
                    onLoadedMetadata={(e) => {
                      const video = e.currentTarget;
                      setVideoDuration(video.duration);
                      if (
                        process.env.NODE_ENV === "development"
                      ) {
                        console.log(
                          `📊 Durée de la vidéo: ${video.duration} secondes`,
                        );
                      }
                    }}
                    onTimeUpdate={(e) => {
                      const video = e.currentTarget;
                      // Optionnel: log du temps de lecture
                      if (
                        currentHeroSlide.videoPlayDuration &&
                        video.currentTime * 1000 >=
                          currentHeroSlide.videoPlayDuration
                      ) {
                        video.pause();
                      }
                    }}
                  >
                    <source
                      src={currentHeroSlide.videoUrl}
                      type="video/mp4"
                    />
                    <source
                      src="https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4"
                      type="video/mp4"
                    />
                    Votre navigateur ne supporte pas les vidéos
                    HTML5.
                  </video>

                  {/* Overlay sombre pour la lisibilité - avec dégradé du haut */}
                  <div className="absolute inset-0 top-0 bg-gradient-to-b from-black/70 via-black/50 to-black/30"></div>
                </>
              )}

              {/* Contenu par-dessus la vidéo */}
              {/* <div className="relative z-20 text-center text-white px-4 max-w-4xl mt-[67px] mr-[0px] mb-[0px] ml-[0px]">
                <div
                  className="opacity-0"
                  style={{
                    animation: "slideUp 0.8s ease-out forwards",
                    animationDelay: "0.2s",
                  }}
                >
                  <h2
                    className="text-base lg:text-lg font-medium mb-2 opacity-90"
                    style={{ color: "#B5C233" }}
                  >
                    {currentHeroSlide.subtitle}
                  </h2>
                  <h1
                    className="text-3xl lg:text-4xl font-bold mb-4"
                    style={{
                      fontFamily: "Montserrat",
                      color: "#FFFFFF",
                      textShadow: "2px 2px 4px rgba(0,0,0,0.7)",
                    }}
                  >
                    {currentHeroSlide.title}
                  </h1>
                 
                </div>

                <div
                  className="opacity-0"
                  style={{
                    animation:
                      "fadeInUp 0.8s ease-out forwards",
                    animationDelay: "0.6s",
                  }}
                >
                  <button
                    onClick={() =>
                      handleCTAClick(
                        currentHeroSlide.ctaPrimary,
                      )
                    }
                    className="px-8 py-4 font-semibold transition-all hover:shadow-lg flex items-center justify-center gap-3 hover:scale-105 mx-auto text-lg border-1"
                    style={{
                      backgroundColor:
                        currentHeroSlide.ctaBgColor ||
                        "#FFFFFF",
                      color:
                        currentHeroSlide.ctaTextColor ||
                        "#B5C233",
                      borderColor:
                        currentHeroSlide.ctaTextColor ||
                        "#B5C233",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.opacity = "0.9";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.opacity = "1";
                    }}
                  >
                    <FontAwesomeIcon icon={faPlay} className="w-5 h-5" />
                    <span>{currentHeroSlide.ctaPrimary}</span>
                  </button>
                </div>
              </div> */}
            </div>
          ) : (
            // Slide classique - REMPLACÉ PAR LE LOGO
            /*
            <div className="relative z-10 text-center text-white px-4 max-w-4xl">
              <div
                className="opacity-0"
                style={{
                  animation: "slideUp 0.8s ease-out forwards",
                  animationDelay: "0.2s",
                }}
              >
                <h2
                  className="text-base lg:text-lg font-medium mb-2 opacity-90"
                  style={{ color: "#B5C233" }}
                >
                  {currentHeroSlide.subtitle}
                </h2>
                <h1
                  className="text-3xl lg:text-4xl font-bold mb-4"
                  style={{
                    fontFamily: "Montserrat",
                    color: "#FFFFFF",
                    textShadow: "2px 2px 4px rgba(0,0,0,0.7)",
                  }}
                >
                  {currentHeroSlide.title}
                </h1>
              </div>

              <div
                className="opacity-0"
                style={{
                  animation: "fadeInUp 0.8s ease-out forwards",
                  animationDelay: "0.6s",
                }}
              >
                <button
                  onClick={() =>
                    handleCTAClick(currentHeroSlide.ctaPrimary)
                  }
                  className="px-6 py-3 font-semibold transition-all hover:shadow-lg flex items-center justify-center gap-2 hover:scale-105 mx-auto border"
                  style={{
                    backgroundColor:
                      currentHeroSlide.ctaBgColor || "#FFFFFF",
                    borderColor:
                      currentHeroSlide.ctaTextColor ||
                      "#B5C233",
                    color:
                      currentHeroSlide.ctaTextColor ||
                      "#B5C233",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.opacity = "0.9";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.opacity = "1";
                  }}
                >
                  <span>{currentHeroSlide.ctaPrimary}</span>
                  <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
                </button>
              </div>
            </div> */

            // Logo FIMA - centré verticalement avec animation au scroll
            <div
              ref={logoRef}
              className="relative z-10 flex items-center justify-center w-full h-full px-4 -mt-12 md:-mt-16"
            >
              <div className="relative inline-block">

                {/* Logo FIMA - Réduit de 25% */}
                <motion.img
                  key="hero-logo"
                  src={fimaLogo}
                  alt="Group FIMA"
                  className="relative z-10 w-full max-w-lg md:max-w-2xl"
                  style={{
                    objectFit: "contain",
                    willChange: isAnimating
                      ? "transform, opacity"
                      : "auto",
                  }}
                  initial={{ opacity: 1, y: 0, scale: 1 }}
                  animate={{
                    opacity: hasScrolled ? 0 : 1,
                    y: hasScrolled ? -300 : 0,
                    scale: hasScrolled ? 0.2 : 1,
                  }}
                  transition={{
                    duration: 0.6,
                    ease: [0.43, 0.13, 0.23, 0.96],
                  }}
                />
              </div>
            </div>
          )}

          {/* Boutons de navigation Prev/Next - cachés au scroll pour ne pas bloquer le logo */}
          <button
            onClick={handlePrevSlide}
            className={`absolute left-4 top-[45%] -translate-y-1/2 z-10 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white transition-all duration-300 hover:scale-110 shadow-lg p-3 ${isScrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
            aria-label="Slide précédent"
          >
            <FontAwesomeIcon icon={faChevronLeft} className="w-6 h-6" />
          </button>
          <button
            onClick={handleNextSlide}
            className={`absolute right-4 top-[45%] -translate-y-1/2 z-10 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white p-3 transition-all duration-300 hover:scale-110 shadow-lg ${isScrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
            aria-label="Slide suivant"
          >
            <FontAwesomeIcon icon={faChevronRight} className="w-6 h-6" />
          </button>
        </div>

        {/* Section des 3 métiers avec continuité de l'image du hero */}
        <div
          className="relative w-full"
          style={{
            backgroundImage: `linear-gradient(180deg, 
               rgba(181, 194, 51, 0.21) 0%, 
              rgba(227, 6, 19, 0.3) 20%, 
              rgba(14, 165, 233, 0.4) 40%,
              rgba(249, 250, 251, 0.9) 55%),
              url(${currentHeroSlide.background})`,
            backgroundSize: "100% 192px",
            backgroundPosition: "center top",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "scroll",
          }}
        >
          {/* Zone des cartes métiers - format épinglé */}
          {/* <div className="relative z-20 px-4 p-[14px] m-[0px]">
            <div className="container mx-auto max-w-6xl">
               <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 m-[0px]">
                {businessUnits.map((unit) => (
                  <div
                    key={unit.key}
                    className="bg-white/95 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group border border-white/20 max-w-[410px] mx-auto p-6 relative"
                    onClick={() => onNavigate(unit.key)}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform =
                        "scale(1.02)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform =
                        "scale(1)";
                    }}
                  >
                    {/* Effet épingle 
                    <div
                      className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full shadow-md"
                      style={{ backgroundColor: unit.color }}
                    ></div>

                    {/* Icône colorée en cercle
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg"
                        style={{ backgroundColor: unit.color }}
                      >
                        {unit.icon}
                      </div>
                      <div>
                        <h3
                          className="font-bold text-lg"
                          style={{ fontFamily: "Montserrat" }}
                        >
                          {unit.title}
                        </h3>
                        <h4
                          className="font-semibold text-sm"
                          style={{ color: unit.color }}
                        >
                          {unit.subtitle}
                        </h4>
                      </div>
                    </div>

                    <p className="text-sm text-gray-600 mb-4">
                      {unit.description}
                    </p>

                    {/* Liste des caractéristiques avec checkmarks 
                    <div className="space-y-2 mb-6">
                      {unit.features.map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-2"
                        >
                          <CheckCircle
                            className="w-4 h-4"
                            style={{ color: unit.color }}
                          />
                          <span className="text-sm text-gray-700">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Bouton CTA
                    <button
                      className="w-full py-3 px-4 rounded-xl font-medium text-white transition-all duration-300 hover:shadow-md"
                      style={{
                        backgroundColor: unit.color,
                        fontFamily: "Inter",
                      }}
                      onMouseEnter={(e) => {
                        const darkerColor =
                          unit.color === "#B5C233"
                            ? "#a3b030"
                            : unit.color === "#6E6E6E"
                              ? "#5a5a5a"
                              : "#0c93d1";
                        e.currentTarget.style.backgroundColor =
                          darkerColor;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor =
                          unit.color;
                      }}
                    >
                      {unit.ctaText}
                    </button>
                  </div>
                ))}
              </div> 
            </div>
          </div>*/}
        </div>
      </div>

      {/* ProductsSection avec marge négative pour superposition - Style Amazon */}
      <div className="relative z-30 -mt-[300px] md:-mt-[350px] lg:-mt-[400px]">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 pt-[160px] pr-[32px] pb-[0px] pl-[32px] pointer-events-none">
          <div className="pointer-events-auto">
            {onProductClick && (
              <ProductsSection
                onProductClick={onProductClick}
                onNavigate={onNavigate}
                externalCategoryChange={externalCategoryChange}
                onExternalCategoryHandled={
                  onExternalCategoryHandled
                }
              />
            )}
          </div>
        </div>
      </div>

      {/* Indicateur de scroll mobile */}
      <MobileScrollIndicator />

      {/* Styles intégrés pour les animations */}
      <style>
        {`
          @keyframes progress {
            from { width: 0%; }
            to { width: 100%; }
          }
          
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          
          @keyframes slideUp {
            from { 
              opacity: 0; 
              transform: translateY(20px); 
            }
            to { 
              opacity: 1; 
              transform: translateY(0); 
            }
          }
          
          @keyframes fadeInUp {
            from { 
              opacity: 0; 
              transform: translateY(10px); 
            }
            to { 
              opacity: 1; 
              transform: translateY(0); 
            }
          }

          @keyframes videoZoomIn {
            from { 
              transform: scale(1);
            }
            to { 
              transform: scale(1.08);
            }
          }

          @keyframes videoFadeIn {
            from { 
              opacity: 0;
            }
            to { 
              opacity: 1;
            }
          }

          .line-clamp-2 {
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
        `}
      </style>
    </section>
  );
}