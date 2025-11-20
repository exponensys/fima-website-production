import { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faUser,
  faShoppingCart,
  faHeart,
  faBars,
  faXmark,
  faGlobe,
  faCreditCard,
  faChevronDown,
  faBuilding,
  faBox,
  faFolderOpen,
} from '@fortawesome/free-solid-svg-icons';
import { useApp } from "../contexts/AppContext";
import { useUser } from "../contexts/UserContext";
const fimaLogo = '/f854c7794a9ab7d0c09684a330f067a2080edcf6.png';

interface MobileHeaderProps {
  onNavigate: (page: string, category?: string, data?: any) => void;
  onFavoritesClick?: () => void;
}

/**
 * MobileHeader - Version simplifiée anti-bounce
 * 
 * Changements clés:
 * - Position relative au lieu de sticky/fixed
 * - Structure HTML simplifiée
 * - Pas d'animations complexes au scroll
 * - Dropdowns simplifiés
 */
export function MobileHeader({ onNavigate, onFavoritesClick }: MobileHeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartItems, favorites, getCartCount } = useApp();
  const { user } = useUser();

  const totalItems = getCartCount();

  const handleNavigateWithClose = (page: string, category?: string) => {
    setIsMobileMenuOpen(false);
    onNavigate(page, category);
  };

  return (
    <header 
      className="bg-white relative w-full"
      style={{
        // Anti-bounce strict
        position: 'relative',
        overscrollBehavior: 'none',
        WebkitOverflowScrolling: 'touch',
      }}
    >
      {/* Header Principal */}
      <div style={{ backgroundColor: '#565757' }}>
        <div className="px-3 py-2.5">
          {/* Ligne 1: Menu + Logo + Actions */}
          <div className="flex items-center justify-between gap-3">
            {/* Menu Hamburger */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 -ml-2 text-white min-w-[44px] min-h-[44px] flex items-center justify-center"
              style={{
                touchAction: 'manipulation',
                WebkitTapHighlightColor: 'transparent',
              }}
            >
              <FontAwesomeIcon icon={isMobileMenuOpen ? faXmark : faBars} className="w-5 h-5" />
            </button>

            {/* Logo FIMA */}
            <div 
              className="flex-1 flex items-center justify-center cursor-pointer"
              onClick={() => handleNavigateWithClose("home")}
              style={{
                touchAction: 'manipulation',
                WebkitTapHighlightColor: 'transparent',
              }}
            >
              <img 
                src={fimaLogo} 
                alt="FIMA Group" 
                className="h-6 w-auto object-contain"
              />
            </div>

            {/* Actions rapides */}
            <div className="flex items-center gap-2">
              {/* Panier */}
              <button
                onClick={() => handleNavigateWithClose("checkout")}
                className="relative p-2 text-white min-w-[44px] min-h-[44px] flex items-center justify-center"
                style={{
                  touchAction: 'manipulation',
                  WebkitTapHighlightColor: 'transparent',
                }}
              >
                <FontAwesomeIcon icon={faShoppingCart} className="w-5 h-5" />
                {totalItems > 0 && (
                  <span 
                    className="absolute -top-1 -right-1 w-5 h-5 rounded-full text-xs flex items-center justify-center"
                    style={{ backgroundColor: '#B5C233', color: '#000' }}
                  >
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Ligne 2: Barre de recherche */}
          <div className="mt-2">
            <div className="relative">
              <input
                type="search"
                placeholder="Rechercher..."
                className="w-full px-3 py-2 pr-10 rounded text-sm"
                style={{
                  backgroundColor: '#fff',
                  border: 'none',
                  outline: 'none',
                  fontSize: '16px', // Évite le zoom iOS
                }}
              />
              <FontAwesomeIcon 
                icon={faSearch}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4" 
                style={{ color: '#6E6E6E' }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Menu Mobile Full-Screen */}
      {isMobileMenuOpen && (
        <div 
          className="absolute top-full left-0 w-full bg-white shadow-xl z-50"
          style={{
            maxHeight: 'calc(100vh - 120px)',
            overflowY: 'auto',
            overflowX: 'hidden',
            overscrollBehavior: 'contain',
            WebkitOverflowScrolling: 'touch',
          }}
        >
          <nav className="py-2">
            {/* Accueil */}
            <button
              onClick={() => handleNavigateWithClose("home")}
              className="w-full text-left px-4 py-3 hover:bg-gray-100 flex items-center gap-3"
              style={{
                touchAction: 'manipulation',
                WebkitTapHighlightColor: 'transparent',
              }}
            >
              <span>🏠</span>
              <span>Accueil</span>
            </button>

            {/* Produits */}
            <button
              onClick={() => handleNavigateWithClose("all-products")}
              className="w-full text-left px-4 py-3 hover:bg-gray-100 flex items-center gap-3"
              style={{
                touchAction: 'manipulation',
                WebkitTapHighlightColor: 'transparent',
              }}
            >
              <FontAwesomeIcon icon={faBox} className="w-5 h-5" />
              <span>Nos Produits</span>
            </button>

            {/* Métiers */}
            <div className="px-4 py-2 text-xs uppercase" style={{ color: '#6E6E6E' }}>
              Nos Métiers
            </div>
            <button
              onClick={() => handleNavigateWithClose("fima-couchage")}
              className="w-full text-left px-4 py-3 hover:bg-gray-100 flex items-center gap-3"
            >
              <FontAwesomeIcon icon={faBuilding} className="w-5 h-5" style={{ color: '#B5C233' }} />
              <span>FIMA Couchage</span>
            </button>
            <button
              onClick={() => handleNavigateWithClose("fima-design")}
              className="w-full text-left px-4 py-3 hover:bg-gray-100 flex items-center gap-3"
            >
              <FontAwesomeIcon icon={faBuilding} className="w-5 h-5" style={{ color: '#6E6E6E' }} />
              <span>FIMA Design</span>
            </button>
            <button
              onClick={() => handleNavigateWithClose("univers-glass")}
              className="w-full text-left px-4 py-3 hover:bg-gray-100 flex items-center gap-3"
            >
              <FontAwesomeIcon icon={faBuilding} className="w-5 h-5" style={{ color: '#0EA5E9' }} />
              <span>Univers Glass</span>
            </button>

            {/* Projets */}
            <button
              onClick={() => handleNavigateWithClose("all-projects")}
              className="w-full text-left px-4 py-3 hover:bg-gray-100 flex items-center gap-3"
            >
              <FontAwesomeIcon icon={faFolderOpen} className="w-5 h-5" />
              <span>Nos Projets</span>
            </button>

            {/* Favoris */}
            {onFavoritesClick && (
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onFavoritesClick();
                }}
                className="w-full text-left px-4 py-3 hover:bg-gray-100 flex items-center gap-3"
              >
                <FontAwesomeIcon icon={faHeart} className="w-5 h-5" />
                <span>Mes Favoris ({favorites?.length || 0})</span>
              </button>
            )}

            {/* Compte */}
            <button
              onClick={() => handleNavigateWithClose(user ? "account" : "auth")}
              className="w-full text-left px-4 py-3 hover:bg-gray-100 flex items-center gap-3"
            >
              <FontAwesomeIcon icon={faUser} className="w-5 h-5" />
              <span>{user ? "Mon Compte" : "Se connecter"}</span>
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
