import { ImageWithFallback } from "./figma/ImageWithFallback";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

interface Category {
  name: string;
  slug: string;
  image: string;
  key: string;
}

interface HeroData {
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;
  heroFeatures: string[];
  heroCtaText: string;
}

interface BusinessUnitCardProps {
  id: string;
  name: string;
  title: string;
  color: string;
  categories: Category[];
  onCategoryClick: (categorySlug: string) => void;
  onBusinessUnitClick: (businessUnitId: string) => void;
  heroData?: HeroData;
}

export function BusinessUnitCard({
  id,
  name,
  title,
  color,
  categories,
  onCategoryClick,
  onBusinessUnitClick,
  heroData,
}: BusinessUnitCardProps) {
  const handleCardClick = () => {
    onBusinessUnitClick(id);
  };

  return (
    <div
      className="bg-white shadow-lg hover:shadow-xl active:shadow-md transition-all duration-300 overflow-hidden group cursor-pointer flex flex-col h-full"
      style={{
        touchAction: "manipulation",
        WebkitTapHighlightColor: "transparent",
        userSelect: "none",
      }}
    >
      {/* Header with business color - Similar to ProductCard image section */}
      <div
        className="relative h-24 text-white overflow-hidden flex items-center flex-shrink-0"
        style={{ backgroundColor: color }}
      >
        <div className="relative z-10 text-left pt-[0px] pr-[0px] pb-[0px] pl-[23px]">
          <h3
            className="text-xl font-bold mb-1"
            style={{
              fontFamily: "Montserrat",
              color:
                name === "FIMA Design"
                  ? "#B5C233"
                  : name === "UNIVERS GLASS"
                    ? "#FFFFFF"
                    : "#6E6E6E",
              textTransform: "uppercase",
            }}
          >
            {name}
          </h3>
          <p
            className="text-sm opacity-90"
            style={{
              color:
                name === "FIMA Couchage"
                  ? "#6E6E6E"
                  : name === "FIMA Design"
                    ? "#B5C233"
                    : "rgba(219,213,213,1)", // UNIVERS GLASS reste en blanc
            }}
          >
            {title}
          </p>
        </div>
        {/* Background pattern */}
        <div className="absolute top-0 right-0 w-24 h-24 opacity-10">
          <div className="w-full h-full bg-white transform translate-x-8 -translate-y-8"></div>
        </div>
      </div>

      {/* Content section - Similar to ProductCard content */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Hero Data Section - Contenu enrichi du Hero */}
        {heroData && (
          <div className="mb-6">
            {/* Description enrichie du Hero */}
            <p
              className="text-sm text-gray-600 mb-4"
              style={{ fontFamily: "Inter" }}
            >
              {heroData.heroDescription}
            </p>

            {/* Features du Hero avec checkmarks */}
            <div className="space-y-2 mb-4">
              {heroData.heroFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2"
                >
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="w-4 h-4"
                    style={{ color }}
                  />
                  <span
                    className="text-sm text-gray-700"
                    style={{ fontFamily: "Inter" }}
                  >
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Categories Grid - Taking inspiration from ProductCard description */}
        <div className="mb-4 flex-grow">
          <h4
            className="text-sm font-medium mb-3 opacity-75"
            style={{ color: "#6E6E6E", fontFamily: "Inter" }}
          >
            Nos spécialités :
          </h4>
          <div
            className="grid grid-cols-2 gap-3"
            style={{
              gridAutoRows: "1fr",
            }}
          >
            {categories.slice(0, 4).map((category) => (
              <button
                key={category.slug}
                onClick={(e) => {
                  e.stopPropagation();
                  onCategoryClick(category.slug);
                }}
                className="group/cat relative overflow-hidden bg-gray-50 hover:bg-gray-100 active:bg-gray-200 transition-all duration-300 border border-gray-200 hover:border-gray-300 flex flex-col"
                style={{
                  touchAction: "manipulation",
                  WebkitTapHighlightColor: "transparent",
                  userSelect: "none",
                  cursor: "pointer",
                  minHeight: "44px",
                }}
              >
                <div
                  className="relative w-full"
                  style={{ paddingBottom: "100%" }}
                >
                  <ImageWithFallback
                    src={category.image}
                    alt={category.name}
                    className="absolute inset-0 w-full h-full object-cover group-hover/cat:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover/cat:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-2">
                    <span
                      className="text-white font-medium text-xs text-left opacity-0 group-hover/cat:opacity-100 transition-opacity duration-300 block"
                      style={{ fontFamily: "Inter" }}
                    >
                      {category.name}
                    </span>
                  </div>
                </div>
                <div
                  className="p-2 flex items-center justify-center"
                  style={{ minHeight: "44px" }}
                >
                  <span
                    className="text-xs font-medium text-gray-700 group-hover/cat:text-black transition-colors"
                    style={{ fontFamily: "Inter" }}
                  >
                    {category.name}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Action button - Similar to ProductCard button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleCardClick();
          }}
          className="business-unit-btn w-full py-3 px-4 font-medium border-2 transition-all duration-300 hover:shadow-lg mt-auto"
          style={{
            borderColor: color,
            color: name === "FIMA Couchage" ? "#6E6E6E" : (name === "FIMA Design" ? "#B5C233" : color),
            fontFamily: "Inter",
            backgroundColor: "transparent",
            touchAction: "manipulation",
            WebkitTapHighlightColor: "transparent",
            userSelect: "none",
            cursor: "pointer",
            minHeight: "48px",
          }}
          data-hover-bg={color}
        >
          {heroData?.heroCtaText || "Découvrir plus"}
        </button>
      </div>
    </div>
  );
}