import { useCallToAction, CallToAction as CTAType } from '../hooks/useCallToAction';
import { ArrowRight, Loader2 } from 'lucide-react';

interface CallToActionProps {
  /** Position du CTA à afficher */
  position: 'hero' | 'footer' | 'sidebar' | 'inline';
  /** Handler de navigation pour les liens internes */
  onNavigate?: (page: string) => void;
  /** Classe CSS personnalisée */
  className?: string;
  /** Afficher seulement le premier CTA */
  single?: boolean;
}

export function CallToAction({ 
  position, 
  onNavigate, 
  className = '',
  single = false 
}: CallToActionProps) {
  const { ctas, isLoading, error } = useCallToAction(position);

  const handleCTAClick = (cta: CTAType) => {
    // Si le lien commence par /, c'est une navigation interne
    if (cta.button_link.startsWith('/')) {
      const route = cta.button_link.substring(1); // Enlever le /
      if (onNavigate) {
        onNavigate(route);
      }
    } else {
      // Sinon, c'est un lien externe
      window.open(cta.button_link, '_blank', 'noopener,noreferrer');
    }
  };

  const getButtonStyle = (cta: CTAType) => {
    const baseStyle = 'px-6 py-3 font-medium transition-all duration-300 flex items-center gap-2 hover:opacity-90';
    
    switch (cta.button_style) {
      case 'primary':
        return `${baseStyle} text-white shadow-md hover:shadow-lg`;
      case 'secondary':
        return `${baseStyle} text-white shadow-md hover:shadow-lg opacity-95`;
      case 'outline':
        return `${baseStyle} bg-transparent border-2`;
      default:
        return baseStyle;
    }
  };

  const getContainerStyle = (cta: CTAType) => {
    return {
      backgroundColor: cta.background_color,
      color: cta.text_color,
    };
  };

  const getButtonInlineStyle = (cta: CTAType) => {
    if (cta.button_style === 'outline') {
      return {
        color: cta.text_color,
        borderColor: cta.text_color,
        backgroundColor: 'transparent',
      };
    }
    
    // Pour primary et secondary, utiliser une couleur de bouton contrastée
    return {
      backgroundColor: cta.button_style === 'primary' ? '#E30613' : '#6E6E6E',
      color: '#FFFFFF',
    };
  };

  // État de chargement
  if (isLoading) {
    return (
      <div className={`flex items-center justify-center p-8 ${className}`}>
        <Loader2 className="w-6 h-6 animate-spin text-gray-400" />
      </div>
    );
  }

  // Erreur ou pas de CTAs
  if (error || ctas.length === 0) {
    return null;
  }

  // Filtrer si single est activé
  const displayCTAs = single ? ctas.slice(0, 1) : ctas;

  return (
    <div className={className}>
      {displayCTAs.map((cta) => (
        <div
          key={cta.id}
          className="p-8 text-center"
          style={getContainerStyle(cta)}
        >
          <h3 
            className="text-2xl mb-2"
            style={{ color: cta.text_color }}
          >
            {cta.title}
          </h3>
          
          {cta.description && (
            <p 
              className="mb-6 opacity-90 max-w-2xl mx-auto"
              style={{ color: cta.text_color }}
            >
              {cta.description}
            </p>
          )}
          
          <button
            onClick={() => handleCTAClick(cta)}
            className={getButtonStyle(cta)}
            style={getButtonInlineStyle(cta)}
          >
            <span>{cta.button_text}</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      ))}
    </div>
  );
}

// Variante pour un CTA inline dans le contenu
interface InlineCTAProps {
  cta: CTAType;
  onNavigate?: (page: string) => void;
  className?: string;
}

export function InlineCTA({ cta, onNavigate, className = '' }: InlineCTAProps) {
  const handleClick = () => {
    if (cta.button_link.startsWith('/')) {
      const route = cta.button_link.substring(1);
      if (onNavigate) {
        onNavigate(route);
      }
    } else {
      window.open(cta.button_link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div
      className={`p-6 text-center ${className}`}
      style={{ backgroundColor: cta.background_color, color: cta.text_color }}
    >
      <h4 className="text-xl mb-2" style={{ color: cta.text_color }}>
        {cta.title}
      </h4>
      
      {cta.description && (
        <p className="mb-4 text-sm opacity-90" style={{ color: cta.text_color }}>
          {cta.description}
        </p>
      )}
      
      <button
        onClick={handleClick}
        className="px-4 py-2 font-medium transition-all duration-300 inline-flex items-center gap-2 hover:opacity-90"
        style={
          cta.button_style === 'outline'
            ? {
                color: cta.text_color,
                borderColor: cta.text_color,
                backgroundColor: 'transparent',
                border: `2px solid ${cta.text_color}`,
              }
            : {
                backgroundColor: cta.button_style === 'primary' ? '#E30613' : '#6E6E6E',
                color: '#FFFFFF',
              }
        }
      >
        <span>{cta.button_text}</span>
        <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
}
