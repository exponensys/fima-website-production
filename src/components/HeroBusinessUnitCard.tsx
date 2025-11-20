import { CheckCircle } from 'lucide-react';
import { ReactNode, useState } from 'react';

interface HeroBusinessUnitCardProps {
  unit: {
    key: string;
    title: string;
    subtitle: string;
    description: string;
    icon: ReactNode;
    color: string;
    features: string[];
    ctaText: string;
  };
  onBusinessUnitClick: (key: string) => void;
}

export function HeroBusinessUnitCard({ unit, onBusinessUnitClick }: HeroBusinessUnitCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    onBusinessUnitClick(unit.key);
  };

  // Calcul de la couleur plus foncée pour le hover
  const getDarkerColor = (color: string): string => {
    if (color === '#B5C233') return '#a3b030';
    if (color === '#6E6E6E') return '#5a5a5a';
    if (color === '#0EA5E9') return '#0EA5E0';
    return color;
  };

  // Calcul de la couleur du texte du bouton
  const getButtonTextColor = (color: string): string => {
    if (color === '#B5C233') return '#333333';
    if (color === '#6E6E6E') return '#B5C233';
    return 'white';
  };

  return (
    <div
      className="shadow-2xl hover:shadow-3xl transition-all duration-300 cursor-pointer group border border-white/20 p-6 relative rounded-lg bg-white mx-2"
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transform: isHovered ? 'scale(1.02)' : 'scale(1)',
        touchAction: 'manipulation',
        WebkitTapHighlightColor: 'transparent',
        userSelect: 'none',
      }}
    >
      {/* Effet épingle */}
      <div
        className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full shadow-md"
        style={{ backgroundColor: unit.color }}
      />

      {/* Icône colorée en cercle */}
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
            style={{ fontFamily: 'Montserrat' }}
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

      {/* Liste des caractéristiques avec checkmarks */}
      <div className="space-y-2 mb-6">
        {unit.features.map((feature, index) => (
          <div key={index} className="flex items-center gap-2">
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

      {/* Bouton CTA */}
      <button
        className="w-full py-3 px-4 rounded-xl font-medium transition-all duration-300 hover:shadow-md"
        style={{
          backgroundColor: isHovered ? getDarkerColor(unit.color) : unit.color,
          color: getButtonTextColor(unit.color),
          fontFamily: 'Inter',
          touchAction: 'manipulation',
          WebkitTapHighlightColor: 'transparent',
          userSelect: 'none',
          cursor: 'pointer',
          minHeight: '48px',
        }}
        onClick={(e) => {
          e.stopPropagation();
          handleClick();
        }}
      >
        {unit.ctaText}
      </button>
    </div>
  );
}
