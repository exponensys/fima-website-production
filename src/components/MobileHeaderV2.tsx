import { useState } from "react";
import { motion } from "motion/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faShoppingCart,
  faBars,
  faXmark,
  faHeart,
  faUser,
  faBox,
  faFolderOpen,
  faBuilding,
} from '@fortawesome/free-solid-svg-icons';
import { useApp } from "../contexts/AppContext";
import { useUser } from "../contexts/UserContext";
import { useLogoScrollAnimation } from "../hooks/useLogoScrollAnimation";
const fimaLogoIcon = '/f854c7794a9ab7d0c09684a330f067a2080edcf6.png';
const fimaLogoText = '/657c215f98beaa37718ea9d4ec19b4ef660894a8.png';

interface MobileHeaderV2Props {
  onNavigate: (page: string, category?: string, data?: any) => void;
  onFavoritesClick?: () => void;
}

/**
 * MobileHeaderV2 - Version FIXED avec transform hack anti-bounce
 * 
 * Technique: position fixed + transform: translate3d(0,0,0)
 * Ceci force une nouvelle couche de composition GPU et évite le bounce
 */
export function MobileHeaderV2({ onNavigate, onFavoritesClick }: MobileHeaderV2Props) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartItems, favorites, getCartCount } = useApp();
  const { user } = useUser();
  const { hasScrolled } = useLogoScrollAnimation();

  const totalItems = getCartCount();

  const handleNavigateWithClose = (page: string, category?: string) => {
    setIsMobileMenuOpen(false);
    onNavigate(page, category);
  };

  return (
    <>
      {/* Header FIXED avec GPU acceleration */}
      <header 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          backgroundColor: '#565757',
          transform: 'translate3d(0, 0, 0)', // GPU layer - anti-bounce
          WebkitTransform: 'translate3d(0, 0, 0)',
          backfaceVisibility: 'hidden',
          WebkitBackfaceVisibility: 'hidden',
          willChange: 'transform',
        }}
      >
        <div style={{ padding: '0.625rem 0.75rem' }}>
          {/* Ligne 1: Menu + Logo + Actions (FR + Favoris + Panier + Profil) */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem', marginBottom: '0.5rem' }}>
            {/* Menu */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              style={{
                padding: '0.5rem',
                marginLeft: '-0.5rem',
                color: '#fff',
                background: 'none',
                border: 'none',
                minWidth: '44px',
                minHeight: '44px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                touchAction: 'manipulation',
                WebkitTapHighlightColor: 'transparent',
                cursor: 'pointer',
              }}
            >
              <FontAwesomeIcon icon={isMobileMenuOpen ? faXmark : faBars} size="lg" />
            </button>

            {/* Logo avec animation au scroll */}
            <div 
              onClick={() => handleNavigateWithClose("home")}
              style={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                touchAction: 'manipulation',
                WebkitTapHighlightColor: 'transparent',
                position: 'relative',
                height: '32px',
              }}
            >
              {/* Logo icône - Disparaît au scroll */}
              <motion.img 
                src={fimaLogoIcon} 
                alt="FIMA" 
                style={{ 
                  height: '24px', 
                  width: 'auto',
                  objectFit: 'contain',
                  position: 'absolute',
                  willChange: hasScrolled ? 'opacity' : 'auto',
                }}
                animate={{ 
                  opacity: hasScrolled ? 0 : 1,
                }}
                transition={{ 
                  duration: 0.3,
                  ease: "easeOut",
                }}
              />
              {/* Logo GROUP FIMA - Apparaît au scroll */}
              <motion.img 
                src={fimaLogoText} 
                alt="GROUP FIMA" 
                style={{ 
                  height: '24px', 
                  width: 'auto',
                  objectFit: 'contain',
                  willChange: hasScrolled ? 'opacity, transform' : 'auto',
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                  opacity: hasScrolled ? 1 : 0,
                  scale: hasScrolled ? 1 : 0.8,
                }}
                transition={{ 
                  duration: 0.5,
                  delay: hasScrolled ? 0.2 : 0,
                  ease: [0.43, 0.13, 0.23, 0.96],
                }}
              />
            </div>

            {/* Actions à droite */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
              {/* Langue FR */}
              <button
                style={{
                  padding: '0.25rem 0.5rem',
                  color: '#fff',
                  background: 'none',
                  border: 'none',
                  minHeight: '44px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  touchAction: 'manipulation',
                  WebkitTapHighlightColor: 'transparent',
                  cursor: 'pointer',
                  fontSize: '14px',
                  fontWeight: 600,
                }}
              >
                FR
              </button>

              {/* Favoris */}
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  if (onFavoritesClick) onFavoritesClick();
                }}
                style={{
                  position: 'relative',
                  padding: '0.5rem',
                  color: '#fff',
                  background: 'none',
                  border: 'none',
                  minWidth: '44px',
                  minHeight: '44px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  touchAction: 'manipulation',
                  WebkitTapHighlightColor: 'transparent',
                  cursor: 'pointer',
                }}
              >
                <FontAwesomeIcon icon={faHeart} size="lg" />
                {favorites && favorites.length > 0 && (
                  <span 
                    style={{
                      position: 'absolute',
                      top: '4px',
                      right: '4px',
                      width: '18px',
                      height: '18px',
                      borderRadius: '9px',
                      backgroundColor: '#E30613',
                      color: '#fff',
                      fontSize: '11px',
                      fontWeight: 600,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {favorites.length}
                  </span>
                )}
              </button>

              {/* Panier */}
              <button
                onClick={() => handleNavigateWithClose("checkout")}
                style={{
                  position: 'relative',
                  padding: '0.5rem',
                  color: '#fff',
                  background: 'none',
                  border: 'none',
                  minWidth: '44px',
                  minHeight: '44px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  touchAction: 'manipulation',
                  WebkitTapHighlightColor: 'transparent',
                  cursor: 'pointer',
                }}
              >
                <FontAwesomeIcon icon={faShoppingCart} size="lg" />
                {totalItems > 0 && (
                  <span 
                    style={{
                      position: 'absolute',
                      top: '4px',
                      right: '4px',
                      width: '18px',
                      height: '18px',
                      borderRadius: '9px',
                      backgroundColor: '#B5C233',
                      color: '#000',
                      fontSize: '11px',
                      fontWeight: 600,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {totalItems}
                  </span>
                )}
              </button>

              {/* Profil Utilisateur */}
              <button
                onClick={() => handleNavigateWithClose(user ? "account" : "auth")}
                style={{
                  padding: '0.5rem',
                  color: '#fff',
                  background: 'none',
                  border: 'none',
                  minWidth: '44px',
                  minHeight: '44px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  touchAction: 'manipulation',
                  WebkitTapHighlightColor: 'transparent',
                  cursor: 'pointer',
                }}
              >
                <FontAwesomeIcon icon={faUser} size="lg" />
              </button>
            </div>
          </div>

          {/* Ligne 2: Recherche */}
          <div style={{ position: 'relative' }}>
            <input
              type="search"
              placeholder="Rechercher..."
              style={{
                width: '100%',
                padding: '0.5rem 2.5rem 0.5rem 0.75rem',
                backgroundColor: '#fff',
                border: 'none',
                outline: 'none',
                fontSize: '16px', // Anti-zoom iOS
                borderRadius: '0',
              }}
            />
            <FontAwesomeIcon 
              icon={faSearch}
              style={{
                position: 'absolute',
                right: '12px',
                top: '50%',
                transform: 'translateY(-50%)',
                color: '#6E6E6E',
                pointerEvents: 'none',
                fontSize: '16px',
              }}
            />
          </div>
        </div>
      </header>

      {/* Menu Full-Screen */}
      {isMobileMenuOpen && (
        <div 
          style={{
            position: 'fixed',
            top: '100px', // Sous le header
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: '#fff',
            zIndex: 999,
            overflowY: 'auto',
            overscrollBehavior: 'contain',
            WebkitOverflowScrolling: 'touch',
          }}
        >
          <nav>
            <MenuItem onClick={() => handleNavigateWithClose("home")} icon="🏠">
              Accueil
            </MenuItem>
            <MenuItem onClick={() => handleNavigateWithClose("all-products")} icon={<FontAwesomeIcon icon={faBox} size="lg" />}>
              Nos Produits
            </MenuItem>
            
            <MenuSeparator>Nos Métiers</MenuSeparator>
            <MenuItem onClick={() => handleNavigateWithClose("fima-couchage")} icon={<FontAwesomeIcon icon={faBuilding} size="lg" style={{ color: '#B5C233' }} />}>
              FIMA Couchage
            </MenuItem>
            <MenuItem onClick={() => handleNavigateWithClose("fima-design")} icon={<FontAwesomeIcon icon={faBuilding} size="lg" style={{ color: '#6E6E6E' }} />}>
              FIMA Design
            </MenuItem>
            <MenuItem onClick={() => handleNavigateWithClose("univers-glass")} icon={<FontAwesomeIcon icon={faBuilding} size="lg" style={{ color: '#0EA5E9' }} />}>
              Univers Glass
            </MenuItem>
            
            <MenuItem onClick={() => handleNavigateWithClose("all-projects")} icon={<FontAwesomeIcon icon={faFolderOpen} size="lg" />}>
              Nos Projets
            </MenuItem>
            
            {onFavoritesClick && (
              <MenuItem 
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onFavoritesClick();
                }} 
                icon={<FontAwesomeIcon icon={faHeart} size="lg" />}
              >
                Mes Favoris ({favorites?.length || 0})
              </MenuItem>
            )}
            
            <MenuItem onClick={() => handleNavigateWithClose(user ? "account" : "auth")} icon={<FontAwesomeIcon icon={faUser} size="lg" />}>
              {user ? "Mon Compte" : "Se connecter"}
            </MenuItem>
          </nav>
        </div>
      )}
    </>
  );
}

// Helper components
function MenuItem({ children, icon, onClick }: { children: React.ReactNode; icon: React.ReactNode; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      style={{
        width: '100%',
        textAlign: 'left',
        padding: '0.75rem 1rem',
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
        background: 'none',
        border: 'none',
        borderBottom: '1px solid #f0f0f0',
        fontSize: '15px',
        color: '#000',
        touchAction: 'manipulation',
        WebkitTapHighlightColor: 'transparent',
        cursor: 'pointer',
      }}
    >
      <span style={{ display: 'flex', alignItems: 'center', width: '20px' }}>{icon}</span>
      <span>{children}</span>
    </button>
  );
}

function MenuSeparator({ children }: { children: React.ReactNode }) {
  return (
    <div 
      style={{
        padding: '0.5rem 1rem',
        fontSize: '12px',
        color: '#6E6E6E',
        textTransform: 'uppercase',
        fontWeight: 600,
        backgroundColor: '#f8f9fa',
      }}
    >
      {children}
    </div>
  );
}
