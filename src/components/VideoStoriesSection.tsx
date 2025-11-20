import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useVideoStories } from '../hooks/useVideoStories';
import { useLanguage } from '../hooks/useLanguage';
import { isYouTubeUrl, getYouTubeThumbnail } from '../utils/videoUtils';

export function VideoStoriesSection() {
  const { selectedLanguage } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3); // Nombre de vidéos visibles à la fois
  
  // Récupération des video stories depuis Supabase
  const { 
    videoStories, 
    loading, 
    error 
  } = useVideoStories(
    selectedLanguage.toLowerCase() === 'en' ? 'en' : 'fr',
    undefined, // category
    false, // featuredOnly
    true // publishedOnly
  );

  // Récupérer la citation principale (depuis la vidéo featured avec quote)
  const mainQuote = videoStories.find(v => v.quoteFr || v.quoteEn);
  
  // Détecter la taille de l'écran pour le responsive
  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth < 768) {
        setVisibleCount(1); // Mobile: 1 vidéo
        setCurrentIndex(0); // Reset index on resize
      } else {
        setVisibleCount(3); // Desktop: 3 vidéos
        setCurrentIndex(0); // Reset index on resize
      }
    };

    // Initial check
    updateVisibleCount();

    // Add resize listener
    window.addEventListener('resize', updateVisibleCount);

    // Cleanup
    return () => window.removeEventListener('resize', updateVisibleCount);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => 
      prev + visibleCount >= videoStories.length ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? Math.max(0, videoStories.length - visibleCount) : prev - 1
    );
  };

  const handleVideoClick = (videoId: string, videoUrl: string) => {
    // Ouvrir la vidéo dans une nouvelle fenêtre
    console.log(`Playing video ${videoId}:`, videoUrl);
    // TODO: Implémenter modal vidéo ou redirection
    if (videoUrl) {
      window.open(videoUrl, '_blank');
    }
  };

  // States de chargement et erreur
  if (loading) {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="h-8 bg-gray-200 w-64 mx-auto mb-6 animate-pulse"></div>
          </div>
          <div className="relative max-w-6xl mx-auto">
            <div className="overflow-hidden">
              <div className="flex gap-4 md:gap-6">
                {Array.from({ length: 3 }).map((_, index) => (
                  <div 
                    key={index}
                    className="flex-shrink-0 px-2 md:px-0"
                    style={{ width: `${100 / 3}%` }}
                  >
                    <div className="relative aspect-video bg-gray-200 animate-pulse">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 bg-gray-300"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center py-12">
            <p style={{ color: '#6E6E6E' }}>
              {selectedLanguage.toLowerCase() === 'en' 
                ? 'Unable to load video stories at this time.' 
                : 'Impossible de charger les vidéos pour le moment.'}
            </p>
          </div>
        </div>
      </section>
    );
  }

  if (videoStories.length === 0) {
    return (
      <section className="hidden py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center py-12">
            <p style={{ color: '#6E6E6E' }}>
              {selectedLanguage.toLowerCase() === 'en' 
                ? 'No video stories available at this time.' 
                : 'Aucune vidéo disponible pour le moment.'}
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-8 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 
            className="text-xl md:text-3xl mb-4 md:mb-6"
            style={{ fontFamily: 'Montserrat', color: '#000000' }}
          >
            {selectedLanguage.toLowerCase() === 'en' 
              ? 'Our story is your story.' 
              : 'Notre histoire, c\'est votre histoire.'}
          </h2>
        </div>

        {/* Video Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out gap-4 md:gap-6"
              style={{
                transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`
              }}
            >
              {videoStories.map((video) => {
                const title = selectedLanguage.toLowerCase() === 'en' ? video.titleEn : video.titleFr;
                const description = selectedLanguage.toLowerCase() === 'en' ? video.descriptionEn : video.descriptionFr;
                
                // ✅ Utiliser le thumbnail YouTube automatiquement si c'est une vidéo YouTube
                const thumbnailUrl = isYouTubeUrl(video.videoUrl) && !video.thumbnailUrl
                  ? getYouTubeThumbnail(video.videoUrl, 'hq')
                  : video.thumbnailUrl;
                
                return (
                  <div 
                    key={video.id}
                    className="flex-shrink-0 px-2 md:px-0"
                    style={{ width: `${100 / visibleCount}%` }}
                  >
                    <div 
                      className="relative aspect-video overflow-hidden cursor-pointer group shadow-lg hover:shadow-xl transition-all duration-300"
                      onClick={() => handleVideoClick(video.id, video.videoUrl)}
                    >
                      <ImageWithFallback 
                        src={thumbnailUrl || 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1080'}
                        alt={title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                      
                      {/* Play Button */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 bg-white/90 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Play 
                            className="w-8 h-8 ml-1"
                            style={{ color: '#B5C233' }}
                          />
                        </div>
                      </div>
                      
                      {/* Video Info */}
                      <div className="absolute bottom-4 left-4 right-4">
                        <h4 
                          className="text-white mb-1"
                          style={{ fontFamily: 'Montserrat' }}
                        >
                          {title}
                        </h4>
                        <span 
                          className="text-white/80 text-sm"
                          style={{ fontFamily: 'Inter' }}
                        >
                          {video.duration}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className="absolute left-0 md:left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed z-10"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" style={{ color: '#6E6E6E' }} />
          </button>

          <button
            onClick={nextSlide}
            disabled={currentIndex + visibleCount >= videoStories.length}
            className="absolute right-0 md:right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed z-10"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" style={{ color: '#6E6E6E' }} />
          </button>
        </div>

        {/* Quote Section - Afficher si une citation existe */}
        {mainQuote && (
          <div className="max-w-4xl mx-auto text-center mt-8 md:mt-12">
            <blockquote 
              className="text-base md:text-xl leading-relaxed mb-4 md:mb-6"
              style={{ 
                color: '#000000',
                fontFamily: 'Montserrat',
                fontWeight: '400',
                fontStyle: 'italic'
              }}
            >
              "{selectedLanguage.toLowerCase() === 'en' ? mainQuote.quoteEn : mainQuote.quoteFr}"
            </blockquote>
            <cite 
              style={{ 
                color: '#B5C233',
                fontFamily: 'Montserrat'
              }}
            >
              - {selectedLanguage.toLowerCase() === 'en' ? mainQuote.quoteAuthorEn : mainQuote.quoteAuthorFr}
            </cite>
          </div>
        )}
      </div>
    </section>
  );
}