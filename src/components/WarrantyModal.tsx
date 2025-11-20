import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faAward, faMoon, faHeadset, faShieldHalved, faWrench, faHandshake } from "@fortawesome/free-solid-svg-icons";

interface WarrantyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function WarrantyModal({
  isOpen,
  onClose,
}: WarrantyModalProps) {
  if (!isOpen) return null;

  const warrantyPoints = [
    {
      icon: faMoon,
      text: "Garantie 14 nuits d'essai - Satisfait ou remboursé",
    },
    {
      icon: faHeadset,
      text: "Conseils personnalisés gratuits par nos experts",
    },
    {
      icon: faWrench,
      text: "Service après-vente (SAV) réactif et professionnel",
    },
    {
      icon: faShieldHalved,
      text: "Garantie fabrication sur tous nos produits",
    },
    {
      icon: faHandshake,
      text: "Engagement qualité - Satisfaction client garantie",
    },
    {
      icon: faAward,
      text: "Certification qualité FIMA depuis 1985",
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
          style={{ backgroundColor: "#B5C233" }}
        >
          <div className="flex items-center gap-3">
            <div
              className="w-12 h-12 flex items-center justify-center"
              style={{ backgroundColor: "#6E6E6E" }}
            >
              <FontAwesomeIcon
                icon={faAward}
                className="text-2xl"
                style={{ color: "#B5C233" }}
              />
            </div>
            <h2
              className="text-2xl font-bold"
              style={{
                fontFamily: "Montserrat",
                color: "#6E6E6E",
              }}
            >
              Nos Garanties
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
              style={{ color: "#6E6E6E" }}
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
              FIMA Design s'engage à vous offrir des produits de qualité
              exceptionnelle avec des garanties complètes pour votre
              tranquillité d'esprit.
            </p>
          </div>

          {/* Warranty Points */}
          <div className="space-y-4">
            {warrantyPoints.map((point, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 border-l-4 transition-all hover:bg-gray-50"
                style={{ borderColor: "#B5C233" }}
              >
                <div
                  className="w-12 h-12 flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "#B5C233" }}
                >
                  <FontAwesomeIcon
                    icon={point.icon}
                    className="text-xl"
                    style={{ color: "#6E6E6E" }}
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
              FIMA DESIGN : Plus de 40 ans d'expertise
              <br />
              <span style={{ color: "#B5C233" }}>
                Votre confiance est notre plus belle récompense
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
              backgroundColor: "#B5C233",
              color: "#6E6E6E",
              fontFamily: "Montserrat",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#a3b030";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#B5C233";
            }}
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
}
