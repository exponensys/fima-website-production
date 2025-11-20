import React, { useMemo } from "react";
import { createPortal } from "react-dom";
import { ImageWithFallback } from "./figma/ImageWithFallback";
const megaMenuImage = '/5bb4257f511908ba6d68f0f0b3c015dccb725fae.png';
import { useCMSCategories } from "../hooks/useCMSCategories";

interface ProductsMegaMenuProps {
  onNavigate: (page: string, category?: string) => void;
  onClose: () => void;
  position: { top: number; left: number };
}

export function ProductsMegaMenu({
  onNavigate,
  onClose,
  position,
}: ProductsMegaMenuProps) {
  const { categories } = useCMSCategories();

  // Grouper et trier les catégories par business_unit et order_index
  const categoriesByBusinessUnit = useMemo(() => {
    const couchageCategories = categories
      .filter(cat => cat.business_unit === 'couchage' && cat.is_active)
      .sort((a, b) => a.order_index - b.order_index)
      .slice(0, 4); // Limiter aux 4 premiers
    
    const designCategories = categories
      .filter(cat => cat.business_unit === 'design' && cat.is_active)
      .sort((a, b) => a.order_index - b.order_index)
      .slice(0, 4); // Limiter aux 4 premiers
    
    const glassCategories = categories
      .filter(cat => cat.business_unit === 'univers-glass' && cat.is_active)
      .sort((a, b) => a.order_index - b.order_index)
      .slice(0, 4); // Limiter aux 4 premiers

    return {
      couchage: {
        title: "FIMA Couchage",
        color: "#B5C233",
        items: couchageCategories,
      },
      design: {
        title: "FIMA Design",
        color: "#6E6E6E",
        items: designCategories,
      },
      glass: {
        title: "Univers Glass",
        color: "#0EA5E9",
        items: glassCategories,
      },
    };
  }, [categories]);

  return createPortal(
    <div
      className="fixed bg-white shadow-2xl z-[99999] border-t-4"
      style={{
        top: `${position.top}px`,
        left: "20px",
        right: "20px",
        borderTopColor: "#B5C233",
        maxHeight: "calc(100vh - 150px)",
        overflow: "auto",
      }}
      onMouseDown={(e) => e.stopPropagation()}
      onTouchStart={(e) => e.stopPropagation()}
    >
      <div className="m-0 p-4">
        <div className="p-0">
          <div className="grid grid-cols-5 gap-8">
            {/* Colonne 1: FIMA Couchage */}
            <div>
              <h3
                className="font-bold mb-5 pb-3 border-b-2 text-base"
                style={{
                  color: categoriesByBusinessUnit.couchage.color,
                  borderBottomColor:
                    categoriesByBusinessUnit.couchage.color,
                  fontFamily: "Montserrat",
                }}
              >
                {categoriesByBusinessUnit.couchage.title}
              </h3>
              <div className="space-y-4">
                {categoriesByBusinessUnit.couchage.items.map(
                  (item) => (
                    <button
                      key={item.id}
                      onClick={() => {
                        onNavigate("all-products", item.slug);
                        onClose();
                      }}
                      className="w-full text-left group transition-all hover:translate-x-1"
                    >
                      <div
                        className="font-semibold text-sm group-hover:underline transition-colors"
                        style={{ color: "#2C2C2C" }}
                      >
                        {item.name}
                      </div>
                      <div
                        className="text-xs mt-0.5"
                        style={{ color: "#888" }}
                      >
                        {item.description}
                      </div>
                    </button>
                  ),
                )}
              </div>
            </div>

            {/* Colonne 2: FIMA Design */}
            <div>
              <h3
                className="font-bold mb-5 pb-3 border-b-2 text-base"
                style={{
                  color: categoriesByBusinessUnit.design.color,
                  borderBottomColor:
                    categoriesByBusinessUnit.design.color,
                  fontFamily: "Montserrat",
                }}
              >
                {categoriesByBusinessUnit.design.title}
              </h3>
              <div className="space-y-4">
                {categoriesByBusinessUnit.design.items.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      onNavigate("category-detail", item.slug);
                      onClose();
                    }}
                    className="w-full text-left group transition-all hover:translate-x-1"
                  >
                    <div
                      className="font-semibold text-sm group-hover:underline transition-colors"
                      style={{ color: "#2C2C2C" }}
                    >
                      {item.name}
                    </div>
                    <div
                      className="text-xs mt-0.5"
                      style={{ color: "#888" }}
                    >
                      {item.description}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Colonne 3: Univers Glass */}
            <div>
              <h3
                className="font-bold mb-5 pb-3 border-b-2 text-base"
                style={{
                  color: categoriesByBusinessUnit.glass.color,
                  borderBottomColor:
                    categoriesByBusinessUnit.glass.color,
                  fontFamily: "Montserrat",
                }}
              >
                {categoriesByBusinessUnit.glass.title}
              </h3>
              <div className="space-y-4">
                {categoriesByBusinessUnit.glass.items.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      onNavigate("all-products", item.slug);
                      onClose();
                    }}
                    className="w-full text-left group transition-all hover:translate-x-1"
                  >
                    <div
                      className="font-semibold text-sm group-hover:underline transition-colors"
                      style={{ color: "#2C2C2C" }}
                    >
                      {item.name}
                    </div>
                    {/* <div
                      className="text-xs mt-0.5"
                      style={{ color: "#888" }}
                    >
                      {item.description}
                    </div> */}
                  </button>
                ))}
              </div>
            </div>

            {/* Image promotionnelle - 2 colonnes */}
            <div
              className="overflow-hidden relative group cursor-pointer h-[320px] col-span-2"
              onClick={() => {
                onNavigate("all-products");
                onClose();
              }}
            >
              <ImageWithFallback
                src={megaMenuImage}
                alt="Découvrez notre catalogue"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-white/10 group-hover:bg-white/20 transition-all flex flex-col items-center justify-center p-6 text-center">
                <h4
                  className="font-bold text-xl mb-3 text-white"
                  style={{
                    fontFamily: "Montserrat",
                    textShadow: "0 2px 4px rgba(0,0,0,0.3)",
                  }}
                >
                  Découvrez notre catalogue
                </h4>
                <div
                  className="px-6 py-3 bg-white font-semibold transition-all hover:scale-105"
                  style={{ color: "#6E6E6E" }}
                >
                  Voir tous les produits →
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}