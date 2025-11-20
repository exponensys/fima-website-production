import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faStar, faShieldHalved, faGem, faAward } from "@fortawesome/free-solid-svg-icons";

interface QualityExpertiseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function QualityExpertiseModal({
  isOpen,
  onClose,
}: QualityExpertiseModalProps) {
  if (!isOpen) return null;

  const qualityPoints = [
    {
      icon: faStar,
      text: "Finition haut de gamme, qualité garantie par le Groupe FIMA",
    },
    {
      icon: faGem,
      text: "Design contemporain, robustesse et élégance à la fois",
    },
    {
      icon: faAward,
      text: "Un savoir-faire ivoirien reconnu depuis plusieurs générations",
    },
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
      onClick={onClose}
    >
      <div
        className="bg-white max-w-2xl w-full max-h-[90vh] overflow-y-auto relative"
        onClick={(e) => e.stopPropagation()}
        style={{ boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
      >
        {/* Header */}
        <div
          className="p-6 border-b border-gray-200 flex items-center justify-between"
          style={{ backgroundColor: "#6E6E6E" }}
        >
          <div className="flex items-center gap-3">
            <div
              className="w-12 h-12 flex items-center justify-center"
              style={{ backgroundColor: "#B5C233" }}
            >
              <FontAwesomeIcon
                icon={faShieldHalved}
                className="text-2xl"
                style={{ color: "#6E6E6E" }}
              />
            </div>
            <h2
              className="text-2xl font-bold"
              style={{
                fontFamily: "Montserrat",
                color: "#B5C233",
              }}
            >
              Qualité & Expertise
            </h2>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center hover:bg-white/10 transition-colors"
            aria-label="Fermer"
          >
            <FontAwesomeIcon
              icon={faXmark}
              className="text-2xl"
              style={{ color: "#B5C233" }}
            />
          </button>
        </div>

        {/* Content */}
        <div className="p-8">
          <div className="mb-6">
            <p
              className="text-xl mb-6"
              style={{
                color: "#6E6E6E",
                fontFamily: "Montserrat",
              }}
            >
              Fabrication locale avec des matériaux importés d'Italie et
              d'Europe
            </p>
          </div>

          {/* Quality Points */}
          <div className="space-y-4">
            {qualityPoints.map((point, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 border-l-4 transition-all hover:bg-gray-50"
                style={{ borderColor: "#B5C233" }}
              >
                <div
                  className="w-12 h-12 flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "#6E6E6E" }}
                >
                  <FontAwesomeIcon
                    icon={point.icon}
                    className="text-xl"
                    style={{ color: "#B5C233" }}
                  />
                </div>
                <p
                  className="text-lg flex-1 pt-2"
                  style={{ color: "#6E6E6E" }}
                >
                  {point.text}
                </p>
              </div>
            ))}
          </div>

          {/* Footer Note */}
          
        </div>

        {/* Close Button */}
        <div className="p-6 border-t border-gray-200 flex justify-center">
          <button
            onClick={onClose}
            className="px-8 py-3 font-semibold transition-colors"
            style={{
              backgroundColor: "#6E6E6E",
              color: "#B5C233",
              fontFamily: "Montserrat",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#5a5a5a";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#6E6E6E";
            }}
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
}
