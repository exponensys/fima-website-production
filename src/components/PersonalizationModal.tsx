import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faPalette, faRulerCombined, faLightbulb, faHeart } from "@fortawesome/free-solid-svg-icons";

interface PersonalizationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PersonalizationModal({
  isOpen,
  onClose,
}: PersonalizationModalProps) {
  if (!isOpen) return null;

  const personalizationPoints = [
    {
      icon: faLightbulb,
      text: "Chaque création est unique, conçue sur mesure selon vos envies",
    },
    {
      icon: faPalette,
      text: "Choisissez vos dimensions, vos couleurs et vos finitions",
    },
    {
      icon: faRulerCombined,
      text: "Un design qui s'adapte à votre espace et à votre style",
    },
    {
      icon: faHeart,
      text: "Du sur-mesure pour un intérieur qui vous ressemble",
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
                icon={faPalette}
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
              Personnalisation & Sur Mesure
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
              Nos experts vous accompagnent dans la conception personnalisée de
              votre mobilier.
            </p>
          </div>

          {/* Personalization Points */}
          <div className="space-y-4">
            {personalizationPoints.map((point, index) => (
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
          <div
            className="mt-8 p-6 border-2"
            style={{
              borderColor: "#B5C233",
              backgroundColor: "rgba(181, 194, 51, 0.05)",
            }}
          >
            <p
              className="text-center font-semibold"
              style={{
                color: "#6E6E6E",
                fontFamily: "Montserrat",
              }}
            >
              FIMA DESIGN : Votre mobilier sur mesure
              <br />
              <span style={{ color: "#B5C233" }}>
                Un projet unique pour chaque client
              </span>
            </p>
          </div>
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
