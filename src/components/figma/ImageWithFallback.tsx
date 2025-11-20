import React, { useState } from 'react'

const ERROR_IMG_SRC =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg=='

// FIMA brand fallback for logo
const FIMA_LOGO_FALLBACK = 
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjQwIiB2aWV3Qm94PSIwIDAgMTIwIDQwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMjAiIGhlaWdodD0iNDAiIGZpbGw9IiNCNUMyMzMiIHJ4PSI0Ii8+PHRleHQgeD0iNjAiIHk9IjI2IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSIgZm9udC1mYW1pbHk9Ik1vbnRzZXJyYXQsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTgiIGZvbnQtd2VpZ2h0PSJib2xkIj5GSU1BPC90ZXh0Pjwvc3ZnPg=='

// Map des URLs défaillantes vers leurs remplacements
const BROKEN_IMAGE_REPLACEMENTS: Record<string, string> = {
  'photo-1586880244386-8b3345c9bca8': 'https://images.unsplash.com/photo-1659986480984-9b7a847168d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBiZWRyb29tJTIwbHV4dXJ5JTIwbWF0dHJlc3N8ZW58MXx8fHwxNzU3NjMyMjA0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  'photo-1723111568816-48c31eca8132': 'https://images.unsplash.com/photo-1641893979088-87d4d9604c36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXJuaXR1cmUlMjBkZXNpZ24lMjB3b3Jrc2hvcHxlbnwxfHx8fDE3NTc2MzIyMDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  // URLs problématiques signalées dans les erreurs
  'photo-1586047844853-e2044ab00b8e': 'https://images.unsplash.com/photo-1585086287371-e455901ee81e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW1vcnklMjBmb2FtJTIwcGlsbG93JTIwY29tZm9ydHxlbnwxfHx8fDE3NTc5NDAzNjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  'photo-1520637836862-4d197d17c50a': 'https://images.unsplash.com/photo-1595622543083-5081cbe96e24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb3duJTIwZmVhdGhlciUyMHBpbGxvdyUyMGx1eHVyeXxlbnwxfHx8fDE3NTc5NDAzNzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  // Fallbacks supplémentaires pour différents contextes
  'broken-glass': 'https://images.unsplash.com/photo-1634412114581-6376e49ef8e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbGFzcyUyMGJ1aWxkaW5nJTIwbW9kZXJuJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc1NzYzMjIxMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  'broken-furniture': 'https://images.unsplash.com/photo-1641893979088-87d4d9604c36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXJuaXR1cmUlMjBkZXNpZ24lMjB3b3Jrc2hvcHxlbnwxfHx8fDE3NTc2MzIyMDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
};

// Fonction pour remplacer les URLs défaillantes
const replaceBrokenImageUrl = (url: string): string => {
  for (const [brokenId, replacementUrl] of Object.entries(BROKEN_IMAGE_REPLACEMENTS)) {
    if (url.includes(brokenId)) {
      if (process.env.NODE_ENV === 'development') {
        console.log(`🔄 Replacing broken image URL: ${brokenId} → new image`);
      }
      return replacementUrl;
    }
  }
  
  // Vérification supplémentaire pour les URLs avec des paramètres différents mais même ID de photo
  const photoIdMatch = url.match(/photo-([a-f0-9-]+)/);
  if (photoIdMatch) {
    const photoId = `photo-${photoIdMatch[1]}`;
    if (BROKEN_IMAGE_REPLACEMENTS[photoId]) {
      if (process.env.NODE_ENV === 'development') {
        console.log(`🔄 Replacing broken image URL by photo ID: ${photoId} → new image`);
      }
      return BROKEN_IMAGE_REPLACEMENTS[photoId];
    }
  }
  
  return url;
};

// Fonction utilitaire globale pour extraire l'URL d'image de manière sécurisée
export const extractImageUrl = (imageData: any): string => {
  // Cas 1: Structure Strapi complète { data: { attributes: { url: "..." } } }
  if (imageData?.data?.attributes?.url) {
    return replaceBrokenImageUrl(imageData.data.attributes.url);
  }
  
  // Cas 2: Structure simplifiée { attributes: { url: "..." } }
  if (imageData?.attributes?.url) {
    return replaceBrokenImageUrl(imageData.attributes.url);
  }
  
  // Cas 3: URL directe (string)
  if (typeof imageData === 'string') {
    return replaceBrokenImageUrl(imageData);
  }
  
  // Cas 4: URL dans la propriété url
  if (imageData?.url && typeof imageData.url === 'string') {
    return replaceBrokenImageUrl(imageData.url);
  }
  
  // Fallback par défaut - image moderne et fiable
  return 'https://images.unsplash.com/photo-1659986480984-9b7a847168d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBiZWRyb29tJTIwbHV4dXJ5JTIwbWF0dHJlc3N8ZW58MXx8fHwxNzU3NjMyMjA0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral';
};

export function ImageWithFallback(props: React.ImgHTMLAttributes<HTMLImageElement>) {
  const [didError, setDidError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const handleError = () => {
    // Ne logger que si c'est une vraie erreur (pas un fallback prévu)
    const isBrokenUrl = Object.keys(BROKEN_IMAGE_REPLACEMENTS).some(brokenId => validImageUrl.includes(brokenId));
    
    if (process.env.NODE_ENV === 'development' && validImageUrl && !validImageUrl.includes('data:image') && !isBrokenUrl) {
      console.warn('🖼️ Image failed to load, switching to fallback:', validImageUrl);
    }
    setIsLoading(false)
    setDidError(true)
  }

  const handleLoad = () => {
    setIsLoading(false)
  }

  const { src, alt, style, className, ...rest } = props

  // Choose appropriate fallback based on alt text
  const getFallbackImage = () => {
    if (alt && (alt.toLowerCase().includes('fima') || alt.toLowerCase().includes('logo'))) {
      return FIMA_LOGO_FALLBACK;
    }
    return ERROR_IMG_SRC;
  };

  // Obtenir l'URL valide
  const validImageUrl = extractImageUrl(src);

  // Debug: log seulement les erreurs critiques en développement
  React.useEffect(() => {
    if (process.env.NODE_ENV === 'development' && src && typeof src === 'object' && !validImageUrl) {
      // Éviter les erreurs de structure circulaire en ne loggant que le type
      const srcType = typeof src;
      const srcKeys = src && typeof src === 'object' ? Object.keys(src).join(', ') : '';
      console.warn('⚠️ Could not extract valid URL from image object. Type:', srcType, 'Keys:', srcKeys);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [validImageUrl]); // On évite 'src' dans les dépendances car il peut contenir des références circulaires

  // Reset states when source changes
  React.useEffect(() => {
    setDidError(false)
    setIsLoading(true)
    
    // Timeout de sécurité : forcer l'affichage après 2 secondes si onLoad ne se déclenche pas
    // Ceci résout les problèmes avec les images Figma qui peuvent ne pas déclencher onLoad
    const timeoutId = setTimeout(() => {
      if (isLoading) {
        console.log('⏱️ Image load timeout reached, forcing display:', validImageUrl);
        setIsLoading(false);
      }
    }, 2000);
    
    return () => clearTimeout(timeoutId);
  }, [validImageUrl]);

  return didError ? (
    <div
      className={`inline-block bg-muted text-center align-middle ${className ?? ''}`}
      style={style}
    >
      <div className="flex items-center justify-center w-full h-full">
        <img 
          src={getFallbackImage()} 
          alt={alt || "Image non disponible"} 
          {...rest} 
          data-original-url={validImageUrl} 
          onError={undefined} // Prevent infinite error loop
          onLoad={undefined}
        />
      </div>
    </div>
  ) : (
    <img 
      src={validImageUrl} 
      alt={alt} 
      className={`${className ?? ''} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`} 
      style={style} 
      {...rest} 
      onError={handleError}
      onLoad={handleLoad}
    />
  )
}