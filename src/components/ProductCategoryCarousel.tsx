import { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Category {
  id: string;
  name: string;
  image: string;
  slug: string;
}

interface ProductCategoryCarouselProps {
  categories: Category[];
  onCategoryClick?: (slug: string) => void;
  accentColor?: string; // Couleur d'accent pour la barre de progression
}

/**
 * ProductCategoryCarousel - Carrousel horizontal de catégories de produits
 * Inspiré du design "La boutique Made in Italy"
 * Version mobile uniquement avec cercles et images
 */
export function ProductCategoryCarousel({
  categories,
  onCategoryClick,
  accentColor = "#0EA5E9",
}: ProductCategoryCarouselProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Vérifier si on peut scroller dans chaque direction
  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScrollButtons();
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", checkScrollButtons);
      return () => container.removeEventListener("scroll", checkScrollButtons);
    }
  }, [categories]);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative w-full mb-6">
      {/* Bouton Previous - Seulement si on peut scroller à gauche */}
      {canScrollLeft && (
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg"
          style={{
            width: "32px",
            height: "32px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid #E5E7EB",
            touchAction: "manipulation",
            WebkitTapHighlightColor: "transparent",
          }}
          aria-label="Catégorie précédente"
        >
          <FontAwesomeIcon icon={faChevronLeft} style={{ fontSize: '20px', color: '#6E6E6E' }} />
        </button>
      )}

      {/* Container scrollable */}
      <div
        ref={scrollContainerRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide px-4 py-2"
        style={{
          scrollSnapType: "x mandatory",
          WebkitOverflowScrolling: "touch",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => {
              console.log('🎯 ProductCategoryCarousel - Category clicked:', category.name, 'slug:', category.slug);
              if (!category.slug) {
                console.error('❌ ProductCategoryCarousel - Empty slug for category:', category.name);
                return;
              }
              onCategoryClick?.(category.slug);
            }}
            className="flex-shrink-0 flex flex-col items-center gap-2"
            style={{
              scrollSnapAlign: "start",
              touchAction: "manipulation",
              WebkitTapHighlightColor: "transparent",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0,
            }}
          >
            {/* Cercle avec image */}
            <div
              className="relative overflow-hidden"
              style={{
                width: "100px",
                height: "100px",
                borderRadius: "50%",
                backgroundColor: "#F3F4F6",
                border: "3px solid #E5E7EB",
              }}
            >
              <ImageWithFallback
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Label */}
            <span
              style={{
                fontSize: "12px",
                fontFamily: "Inter, sans-serif",
                color: "#1F2937",
                textAlign: "center",
                maxWidth: "100px",
                lineHeight: "1.3",
                fontWeight: 500,
              }}
            >
              {category.name}
            </span>
          </button>
        ))}
      </div>

      {/* Bouton Next - Seulement si on peut scroller à droite */}
      {canScrollRight && (
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg"
          style={{
            width: "32px",
            height: "32px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid #E5E7EB",
            touchAction: "manipulation",
            WebkitTapHighlightColor: "transparent",
          }}
          aria-label="Catégorie suivante"
        >
          <FontAwesomeIcon icon={faChevronRight} style={{ fontSize: '20px', color: '#6E6E6E' }} />
        </button>
      )}

      {/* Ligne de progression en bas */}
      <div
        className="mt-3 mx-auto bg-gray-200"
        style={{
          height: "3px",
          width: "80%",
          position: "relative",
          borderRadius: "0",
        }}
      >
        <div
          className="absolute left-0 top-0 transition-all duration-300"
          style={{
            height: "3px",
            width: canScrollLeft ? "50%" : "0%",
            borderRadius: "0",
            backgroundColor: accentColor,
          }}
        />
      </div>
    </div>
  );
}
