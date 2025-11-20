import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleCheck,
  faBuilding,
  faHouse,
  faWrench,
} from '@fortawesome/free-solid-svg-icons';

interface BusinessUnitsProps {
  onNavigate: (page: string, category?: string, data?: any) => void;
}

export function BusinessUnitsSection({ onNavigate }: BusinessUnitsProps) {
  const businessUnits = [
    {
      key: "fima-couchage",
      title: "FIMA Couchage",
      subtitle: "Literie & Mobilier de chambre",
      description: "Spécialistes du sommeil et du confort depuis 1994, nous proposons une gamme complète de matelas, sommiers, oreillers et mobilier de chambre.",
      icon: <FontAwesomeIcon icon={faHouse} className="w-6 h-6 sm:w-8 sm:h-8" />,
      color: "#B5C233",
      bgColor: "bg-green-50",
      features: [
        "Matelas ressorts, mousse, latex",
        "Sommiers tapissiers et électriques", 
        "Oreillers ergonomiques",
        "Mobilier de chambre sur mesure"
      ]
    },
    {
      key: "fima-design",
      title: "FIMA Design",
      subtitle: "Menuiserie & Ameublement",
      description: "Créateurs d'espaces uniques, nous concevons et réalisons vos projets de menuiserie et d'ameublement sur mesure avec un savoir-faire artisanal.",
      icon: <FontAwesomeIcon icon={faWrench} className="w-6 h-6 sm:w-8 sm:h-8" />,
      color: "#B5C233",
      bgColor: "bg-gray-50",
      features: [
        "Cuisines équipées sur mesure",
        "Dressings et rangements",
        "Menuiserie bois et MDF",
        "Aménagements intérieurs"
      ]
    },
    {
      key: "univers-glass",
      title: "UNIVERS GLASS",
      subtitle: "Vitrerie & Aluminium",
      description: "Experts en solutions vitrées et structures aluminium, nous apportons lumière et modernité à vos projets architecturaux.",
      icon: <FontAwesomeIcon icon={faBuilding} className="w-6 h-6 sm:w-8 sm:h-8" />,
      color: "#0EA5E9",
      bgColor: "bg-blue-50",
      features: [
        "Menuiserie aluminium",
        "Vitrages techniques",
        "Fenêtres et portes",
        "Cloisons vitrées"
      ]
    }
  ];

  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-[rgba(255,255,255,1)]">
      <div className="container mx-auto px-4 max-w-full bg-[rgba(255,255,255,0)]">
        <div className="text-center mb-6 sm:mb-8 lg:mb-12">
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 break-words"
            style={{
              fontFamily: "Montserrat",
              color: "#000000",
            }}
          >
            Nos 3 Métiers d'Excellence
          </h2>
          <p
            className="text-base sm:text-lg lg:text-xl max-w-3xl mx-auto break-words"
            style={{ color: "#6E6E6E" }}
          >
            Du mobilier de chambre aux solutions techniques
            les plus avancées, découvrez l'expertise unique du
            Groupe FIMA depuis 1985.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-full">
          {businessUnits.map((unit) => (
            <div
              key={unit.key}
              className={`${unit.bgColor} rounded-2xl p-6 lg:p-8 hover:shadow-xl transition-all duration-300 cursor-pointer transform  max-w-full`}
              onClick={() => onNavigate(unit.key)}
            >
              <div
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-4 sm:mb-6 flex-shrink-0"
                style={{ 
                  backgroundColor: unit.color,
                  color: unit.color === '#0EA5E9' ? 'white' : unit.color === '#B5C233' ? '#6E6E6E' : '#B5C233'
                }}
              >
                {unit.icon}
              </div>

              <h3
                className="text-xl sm:text-2xl font-bold mb-2 break-words"
                style={{
                  fontFamily: "Montserrat",
                  color: "#000000",
                }}
              >
                {unit.title}
              </h3>

              <h4
                className="font-semibold mb-3 sm:mb-4 break-words"
                style={{ color: unit.color }}
              >
                {unit.subtitle}
              </h4>

              <p
                className="mb-4 sm:mb-6 text-sm sm:text-base break-words"
                style={{ color: "#6E6E6E" }}
              >
                {unit.description}
              </p>

              <ul className="space-y-2 mb-4 sm:mb-6">
                {unit.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2"
                  >
                    <FontAwesomeIcon
                      icon={faCircleCheck}
                      className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0"
                      style={{ color: unit.color }}
                    />
                    <span
                      className="text-xs sm:text-sm break-words"
                      style={{ color: "#6E6E6E" }}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className="w-full py-2 px-4 sm:py-3 rounded-lg font-semibold transition-all hover:shadow-lg text-sm sm:text-base"
                style={{ 
                  backgroundColor: unit.color,
                  color: unit.color === '#0EA5E9' ? 'white' : unit.color === '#B5C233' ? '#6E6E6E' : '#B5C233'
                }}
                onMouseEnter={(e) => {
                  const darkColor =
                    unit.color === "#B5C233"
                      ? "#a3b030"
                      : unit.color === "#6E6E6E"
                        ? "#5a5a5a"
                        : unit.color === "#0EA5E9"
                          ? "#0c93d1"
                          : "#c5050f";
                  e.currentTarget.style.backgroundColor =
                    darkColor;
                }}
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor =
                    unit.color)
                }
              >
                Découvrir {unit.title}
              </button>
            </div>
          ))}
        </div>

        {/* CTA Section B2B */}
        <div className="mt-8 sm:mt-12 lg:mt-16 text-center">
          {/* Future B2B CTA section can be added here */}
        </div>
      </div>
    </section>
  );
}