import { X } from "lucide-react";
import {
  firmness,
  materials,
  Filters,
} from "../../data/filters";

interface FilterSidebarProps {
  filters: Filters;
  setFilters: (filters: Filters) => void;
  showFilters: boolean;
  setShowFilters: (show: boolean) => void;
  categories: { name: string; value: string }[];
}

export function FilterSidebar({
  filters,
  setFilters,
  showFilters,
  setShowFilters,
  categories,
}: FilterSidebarProps) {
  const FilterSection = ({
    title,
    options,
    filterKey,
    name,
  }: {
    title: string;
    options: { name: string; value: string }[];
    filterKey: keyof Filters;
    name: string;
  }) => (
    <div>
      <h4 className="mb-3" style={{ color: "#6E6E6E" }}>{title}</h4>
      <div className="space-y-2">
        {options.map((option) => (
          <label
            key={option.value}
            className="flex items-center gap-2 cursor-pointer"
          >
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={filters[filterKey] === option.value}
              onChange={(e) =>
                setFilters({
                  ...filters,
                  [filterKey]: e.target.value,
                })
              }
              className="text-primary focus:ring-primary"
            />
            <span className="text-sm" style={{ color: "#6E6E6E" }}>{option.name}</span>
          </label>
        ))}
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile Filters Overlay */}
      {showFilters && (
        <div
          className="lg:hidden fixed inset-0 z-50"
          style={{ backgroundColor: "rgba(181, 194, 51, 0.2)" }}
        >
          {/* Safe area container pour éviter les zones système mobile */}
          <div
            className="absolute left-0 w-80 max-w-[85vw] bg-white shadow-xl overflow-hidden flex flex-col"
            style={{
              top: "max(env(safe-area-inset-top, 0px), 20px)",
              bottom: "env(safe-area-inset-bottom, 0px)",
              height:
                "calc(100vh - max(env(safe-area-inset-top, 0px), 20px) - env(safe-area-inset-bottom, 0px))",
              maxHeight:
                "calc(100vh - max(env(safe-area-inset-top, 0px), 20px) - env(safe-area-inset-bottom, 0px))",
            }}
          >
            {/* Header fixe avec espacement sécurisé */}
            <div
              className="flex-shrink-0 bg-white border-b p-4 sm:p-6"
              style={{ borderColor: "#f1f5f9" }}
            >
              <div className="flex items-center justify-between">
                <h3
                  className="text-lg sm:text-xl font-semibold"
                  style={{
                    fontFamily: "Montserrat",
                    color: "#000000",
                  }}
                >
                  Filtres
                </h3>
                <button
                  onClick={() => setShowFilters(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors flex-shrink-0"
                  aria-label="Fermer les filtres"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Contenu scrollable */}
            <div className="flex-1 overflow-y-auto">
              <div
                className="p-4 sm:p-6 space-y-6"
                style={{ backgroundColor: "#B5C233" }}
              >
                <FilterSection
                  title="Catégorie"
                  options={categories}
                  filterKey="category"
                  name="category-mobile"
                />
                <FilterSection
                  title="Fermeté"
                  options={firmness}
                  filterKey="firmness"
                  name="firmness-mobile"
                />
                <FilterSection
                  title="Matériau"
                  options={materials}
                  filterKey="material"
                  name="material-mobile"
                />

                {/* Espacement pour éviter que le contenu soit masqué par le bouton */}
                <div className="h-20"></div>
              </div>
            </div>

            {/* Validation Button - Fixed at bottom */}
            <div
              className="flex-shrink-0 p-4 sm:p-6 border-t bg-white"
              style={{ borderColor: "#C0C0C0" }}
            >
              <button
                onClick={() => setShowFilters(false)}
                className="w-full py-3 px-6 rounded-lg transition-colors font-medium text-base"
                style={{
                  backgroundColor: "#B5C233",
                  color: "#6E6E6E",
                  fontFamily: "Inter",
                  fontWeight: "500",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor =
                    "#a3b030";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor =
                    "#B5C233";
                }}
              >
                Valider les filtres
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Desktop Filters Sidebar */}
      <div className="hidden lg:block w-64 flex-shrink-0 mr-8">
        <div className="sticky top-4 max-h-screen overflow-y-auto z-40">
          <div
            className="space-y-6 p-6 rounded-lg shadow-lg"
            style={{
              backgroundColor: "#B5C233",
            }}
          >
            <h3
              style={{
                fontFamily: "Montserrat",
                color: "#6E6E6E",
              }}
            >
              Filtres
            </h3>

            <FilterSection
              title="Catégorie"
              options={categories}
              filterKey="category"
              name="category-desktop"
            />
          </div>
        </div>
      </div>
    </>
  );
}