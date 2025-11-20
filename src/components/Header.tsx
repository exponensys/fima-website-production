const image_657c215f98beaa37718ea9d4ec19b4ef660894a8 = '/657c215f98beaa37718ea9d4ec19b4ef660894a8.png';
const image_2eef465a3db6c27eb58e43a0e5473c9b7b3caf5d = '/2eef465a3db6c27eb58e43a0e5473c9b7b3caf5d.png';
const image_16f5aa14051faa89fe781369ef2ec1badcac7e8d = '/16f5aa14051faa89fe781369ef2ec1badcac7e8d.png';
const image_f854c7794a9ab7d0c09684a330f067a2080edcf6 = '/f854c7794a9ab7d0c09684a330f067a2080edcf6.png';
const image_bfee1efa158eed65cd0e62adf3c79b0e7a321689 = '/bfee1efa158eed65cd0e62adf3c79b0e7a321689.png';
const image_2a3a1c86b3f1ff31c7ff112d18730075fb8f827d = '/2a3a1c86b3f1ff31c7ff112d18730075fb8f827d.png';
const newHeaderLogo = '/90a0803cf2304a13ca1191a66fb32d2239a69bdf.png';
import React, {
  useState,
  useEffect,
  useRef,
  useMemo,
} from "react";
import { createPortal } from "react-dom";
import { motion } from "motion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
  faHouse,
  faWrench,
  faFolderOpen,
  faUsers,
  faBox,
  faPhone,
  faEnvelope,
  faClock,
  faTrophy,
  faRightFromBracket,
  faUserCircle,
  faStore,
  faBed,
  faWindowMaximize,
} from "@fortawesome/free-solid-svg-icons";
import { toast } from 'sonner';
import { useApp } from "../contexts/AppContext";
import { useUser } from "../contexts/UserContext";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
const fimaLogo = '/4b857e02fcaeb1cf1a3cbd382b322ca5ae9584ec.png';
import {
  useLanguages,
  useCurrencies,
} from "../hooks/useSiteSettings";
import { LanguageCode } from "../utils/translations";
import { CurrencyCode } from "../utils/currency";
import { useProductCategories } from "../hooks/useProductCategories";
import { useSupabaseBusinessUnits } from "../hooks/useSupabaseBusinessUnits";
import { ProductsMegaMenu } from "./ProductsMegaMenu";
// Logo FIMA officiel

interface HeaderProps {
  onNavigate: (
    page: string,
    category?: string,
    data?: any,
  ) => void;
  onFavoritesClick?: () => void;
  onExpertClick?: (type: "expert" | "appointment") => void;
}

export function Header({
  onNavigate,
  onFavoritesClick,
  onExpertClick,
}: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] =
    useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isCurrencyOpen, setIsCurrencyOpen] = useState(false);
  const [isBusinessUnitsOpen, setIsBusinessUnitsOpen] =
    useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [hasScrolled, setHasScrolled] = useState(false);

  // États pour le positionnement dynamique des dropdowns
  const [dropdownPosition, setDropdownPosition] = useState({
    top: 0,
    left: 0,
  });
  const [
    productsDropdownPosition,
    setProductsDropdownPosition,
  ] = useState({ top: 0, left: 0 });
  const [
    languageDropdownPosition,
    setLanguageDropdownPosition,
  ] = useState({ top: 0, left: 0 });
  const [
    currencyDropdownPosition,
    setCurrencyDropdownPosition,
  ] = useState({ top: 0, left: 0 });
  const [
    userMenuDropdownPosition,
    setUserMenuDropdownPosition,
  ] = useState({ top: 0, left: 0 });

  // Refs pour les dropdowns
  const headerRef = useRef<HTMLElement>(null);
  const businessUnitsButtonRef =
    useRef<HTMLButtonElement>(null);
  const productsButtonRef = useRef<HTMLButtonElement>(null);
  const languageButtonRef = useRef<HTMLButtonElement>(null);
  const currencyButtonRef = useRef<HTMLButtonElement>(null);
  const userMenuButtonRef = useRef<HTMLButtonElement>(null);

  const {
    setIsCartOpen,
    getCartCount,
    favorites,
    isCartAnimating,
    selectedCurrency,
    setSelectedCurrency,
    selectedLanguage,
    setSelectedLanguage,
  } = useApp();

  const { user, isAuthenticated, logout } = useUser();

  // Détecter le scroll pour l'animation du header
  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        if (window.scrollY > 50) {
          setHasScrolled(true);
        }
      }, 100);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  // Utiliser les hooks Supabase pour les données dynamiques
  const { languages, loading: langLoading } = useLanguages();
  const { currencies, loading: currLoading } = useCurrencies();
  const { businessUnits, loading: buLoading } =
    useSupabaseBusinessUnits();
  const {
    categories: allProductCategories,
    loading: catLoading,
  } = useProductCategories();

  // DEBUG: Log pour vérifier les données
  useEffect(() => {
    console.log("🔍 Header Debug - Languages:", languages);
    console.log("🔍 Header Debug - Currencies:", currencies);
    console.log(
      "🔍 Header Debug - Selected Language:",
      selectedLanguage,
    );
    console.log(
      "🔍 Header Debug - Selected Currency:",
      selectedCurrency,
    );
  }, [
    languages,
    currencies,
    selectedLanguage,
    selectedCurrency,
  ]);

  // Créer la structure productCategoriesByBusiness à partir des données Supabase
  const productCategoriesByBusiness = useMemo(() => {
    if (
      typeof allProductCategories === "object" &&
      !Array.isArray(allProductCategories)
    ) {
      return allProductCategories;
    }
    // Fallback: organiser par business si on reçoit un array
    const organized: any = {
      "fima-couchage": [],
      "fima-design": [],
      "univers-glass": [],
    };
    if (Array.isArray(allProductCategories)) {
      allProductCategories.forEach((cat: any) => {
        if (cat.business && organized[cat.business]) {
          organized[cat.business].push(cat);
        }
      });
    }
    return organized;
  }, [allProductCategories]);

  // Catégories principales pour compatibilité
  const productCategories = useMemo(() => {
    return [
      ...(productCategoriesByBusiness["fima-couchage"] || []),
      ...(productCategoriesByBusiness["fima-design"] || []),
      ...(productCategoriesByBusiness["univers-glass"] || []),
    ];
  }, [productCategoriesByBusiness]);

  // Enrichir les businessUnits avec les icônes React
  const enrichedBusinessUnits = useMemo(() => {
    if (!businessUnits || businessUnits.length === 0) return [];

    const iconMap: Record<string, any> = {
      "fima-couchage": (
        <FontAwesomeIcon icon={faBed} className="w-5 h-5" />
      ),
      "fima-design": (
        <FontAwesomeIcon icon={faHouse} className="w-5 h-5" />
      ),
      "univers-glass": (
        <FontAwesomeIcon
          icon={faWindowMaximize}
          className="w-5 h-5"
        />
      ),
    };

    return businessUnits.map((bu) => ({
      ...bu,
      icon: iconMap[bu.slug] || (
        <FontAwesomeIcon
          icon={faBuilding}
          className="w-5 h-5"
        />
      ),
      projects:
        bu.slug === "fima-couchage"
          ? "150+ projets"
          : bu.slug === "fima-design"
            ? "200+ réalisations"
            : "180+ installations",
    }));
  }, [businessUnits]);

  // Trouver la langue correspondant à celle du contexte
  const currentLanguageObj = languages?.find(
    (l) => l.code === selectedLanguage,
  ) ||
    languages?.[0] || {
      code: "FR",
      name: "Français",
      flag: "🇫🇷",
    };

  // Trouver la devise correspondant à celle du contexte
  const currentCurrencyObj = currencies?.find(
    (c) => c.code === selectedCurrency,
  ) ||
    currencies?.[0] || {
      code: "XOF",
      symbol: "F CFA",
      name: "Franc CFA",
    };

  const cartCount = getCartCount();
  const favoritesCount = favorites.length;

  // Fermer tous les dropdowns
  const closeAllDropdowns = () => {
    setIsLanguageOpen(false);
    setIsCurrencyOpen(false);
    setIsBusinessUnitsOpen(false);
    setIsProductsOpen(false);
    setIsUserMenuOpen(false);
  };

  // Gestionnaires pour ouvrir un dropdown en fermant les autres
  const handleBusinessUnitsToggle = () => {
    const newState = !isBusinessUnitsOpen;
    closeAllDropdowns();
    setIsBusinessUnitsOpen(newState);

    // Calculer la position du dropdown quand il s'ouvre
    if (
      newState &&
      businessUnitsButtonRef.current &&
      headerRef.current
    ) {
      const buttonRect =
        businessUnitsButtonRef.current.getBoundingClientRect();
      const headerRect =
        headerRef.current.getBoundingClientRect();
      setDropdownPosition({
        top: headerRect.bottom, // Aligné au bottom du header (pas de marge)
        left:
          buttonRect.left +
          buttonRect.width / 2 +
          window.scrollX, // Centré sur le bouton
      });
    }
  };

  const handleProductsToggle = () => {
    const newState = !isProductsOpen;
    closeAllDropdowns();
    setIsProductsOpen(newState);

    // Calculer la position du dropdown quand il s'ouvre
    if (newState && productsButtonRef.current) {
      const buttonRect =
        productsButtonRef.current.getBoundingClientRect();
      setProductsDropdownPosition({
        top: buttonRect.bottom + window.scrollY + 8, // 8px de marge
        left:
          buttonRect.left +
          buttonRect.width / 2 +
          window.scrollX, // Centré sur le bouton
      });
    }
  };

  const handleUserMenuToggle = () => {
    const newState = !isUserMenuOpen;
    closeAllDropdowns();
    setIsUserMenuOpen(newState);

    if (newState && userMenuButtonRef.current) {
      const buttonRect =
        userMenuButtonRef.current.getBoundingClientRect();
      setUserMenuDropdownPosition({
        top: buttonRect.bottom + window.scrollY + 8,
        left: buttonRect.right + window.scrollX - 200, // Aligné à droite du bouton
      });
    }
  };

  const handleLanguageToggle = () => {
    const newState = !isLanguageOpen;
    closeAllDropdowns();
    setIsLanguageOpen(newState);

    if (newState && languageButtonRef.current) {
      const buttonRect =
        languageButtonRef.current.getBoundingClientRect();
      const dropdownWidth = 150;

      // Position fixe donc utiliser les coordonnées du viewport
      // Calculer la position left en s'assurant que le dropdown reste dans l'écran
      let left = buttonRect.right - dropdownWidth;

      // Si on est sur mobile ou que le dropdown déborderait à gauche
      if (window.innerWidth < 768 || left < 10) {
        left = Math.max(
          10,
          Math.min(
            buttonRect.left,
            window.innerWidth - dropdownWidth - 10,
          ),
        );
      }

      setLanguageDropdownPosition({
        top: buttonRect.bottom + 8, // Position fixe, pas besoin de window.scrollY
        left: left,
      });
    }
  };

  const handleCurrencyToggle = () => {
    const newState = !isCurrencyOpen;
    closeAllDropdowns();
    setIsCurrencyOpen(newState);

    if (newState && currencyButtonRef.current) {
      const buttonRect =
        currencyButtonRef.current.getBoundingClientRect();
      setCurrencyDropdownPosition({
        top: buttonRect.bottom + window.scrollY + 8,
        left: buttonRect.right + window.scrollX - 140, // Aligné à droite du bouton
      });
    }
  };

  // Gestionnaire de clic en dehors avec support tactile
  useEffect(() => {
    const handleClickOutside = (
      event: MouseEvent | TouchEvent,
    ) => {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
        closeAllDropdowns();
      }
    };

    const handleResize = () => {
      // Recalculer la position du dropdown si il est ouvert
      if (
        isBusinessUnitsOpen &&
        businessUnitsButtonRef.current &&
        headerRef.current
      ) {
        const buttonRect =
          businessUnitsButtonRef.current.getBoundingClientRect();
        const headerRect =
          headerRef.current.getBoundingClientRect();
        setDropdownPosition({
          top: headerRect.bottom,
          left:
            buttonRect.left +
            buttonRect.width / 2 +
            window.scrollX,
        });
      }
      if (isProductsOpen && productsButtonRef.current) {
        const buttonRect =
          productsButtonRef.current.getBoundingClientRect();
        setProductsDropdownPosition({
          top: buttonRect.bottom + window.scrollY + 8,
          left:
            buttonRect.left +
            buttonRect.width / 2 +
            window.scrollX,
        });
      }
      if (isLanguageOpen && languageButtonRef.current) {
        const buttonRect =
          languageButtonRef.current.getBoundingClientRect();
        const dropdownWidth = 150;
        let left = buttonRect.right - dropdownWidth;
        if (window.innerWidth < 768 || left < 10) {
          left = Math.max(
            10,
            Math.min(
              buttonRect.left,
              window.innerWidth - dropdownWidth - 10,
            ),
          );
        }
        setLanguageDropdownPosition({
          top: buttonRect.bottom + 8,
          left: left,
        });
      }
      if (isCurrencyOpen && currencyButtonRef.current) {
        const buttonRect =
          currencyButtonRef.current.getBoundingClientRect();
        setCurrencyDropdownPosition({
          top: buttonRect.bottom + window.scrollY + 8,
          left: buttonRect.right + window.scrollX - 140,
        });
      }
      if (isUserMenuOpen && userMenuButtonRef.current) {
        const buttonRect =
          userMenuButtonRef.current.getBoundingClientRect();
        setUserMenuDropdownPosition({
          top: buttonRect.bottom + window.scrollY + 8,
          left: buttonRect.right + window.scrollX - 200,
        });
      }
    };

    const handleScroll = () => {
      // Recalculer la position du dropdown si il est ouvert
      if (
        isBusinessUnitsOpen &&
        businessUnitsButtonRef.current &&
        headerRef.current
      ) {
        const buttonRect =
          businessUnitsButtonRef.current.getBoundingClientRect();
        const headerRect =
          headerRef.current.getBoundingClientRect();
        setDropdownPosition({
          top: headerRect.bottom,
          left:
            buttonRect.left +
            buttonRect.width / 2 +
            window.scrollX,
        });
      }
      if (isProductsOpen && productsButtonRef.current) {
        const buttonRect =
          productsButtonRef.current.getBoundingClientRect();
        setProductsDropdownPosition({
          top: buttonRect.bottom + window.scrollY + 8,
          left:
            buttonRect.left +
            buttonRect.width / 2 +
            window.scrollX,
        });
      }
      if (isLanguageOpen && languageButtonRef.current) {
        const buttonRect =
          languageButtonRef.current.getBoundingClientRect();
        const dropdownWidth = 150;
        let left = buttonRect.right - dropdownWidth;
        if (window.innerWidth < 768 || left < 10) {
          left = Math.max(
            10,
            Math.min(
              buttonRect.left,
              window.innerWidth - dropdownWidth - 10,
            ),
          );
        }
        setLanguageDropdownPosition({
          top: buttonRect.bottom + 8,
          left: left,
        });
      }
      if (isCurrencyOpen && currencyButtonRef.current) {
        const buttonRect =
          currencyButtonRef.current.getBoundingClientRect();
        setCurrencyDropdownPosition({
          top: buttonRect.bottom + window.scrollY + 8,
          left: buttonRect.right + window.scrollX - 140,
        });
      }
      if (isUserMenuOpen && userMenuButtonRef.current) {
        const buttonRect =
          userMenuButtonRef.current.getBoundingClientRect();
        setUserMenuDropdownPosition({
          top: buttonRect.bottom + window.scrollY + 8,
          left: buttonRect.right + window.scrollX - 200,
        });
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside,
      );
      document.removeEventListener(
        "touchstart",
        handleClickOutside,
      );
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [
    isBusinessUnitsOpen,
    isProductsOpen,
    isLanguageOpen,
    isCurrencyOpen,
    isUserMenuOpen,
  ]);

  // Fermer les dropdowns lors de la navigation
  const handleNavigateWithClose = (
    page: string,
    category?: string,
    data?: any,
  ) => {
    closeAllDropdowns();
    onNavigate(page, category, data);
  };

  return (
    <header
      ref={headerRef}
      className="bg-white shadow-sm sticky top-0 z-50 px-[1px] py-[2px] md:py-[0px]"
    >
      {/* VERSION MOBILE - Style Amazon */}
      <div
        className="lg:hidden"
        style={{ backgroundColor: "#565757" }}
      >
        <div className="px-2 py-2">
          {/* Première ligne: Menu + Logo + Actions */}
          <div className="flex items-center justify-between mb-2">
            {/* Menu hamburger */}
            <button
              onClick={() =>
                setIsMobileMenuOpen(!isMobileMenuOpen)
              }
              className="p-2 -ml-2 text-white min-w-[44px] min-h-[44px] flex items-center justify-center active:bg-white/10 transition-colors"
              style={{
                touchAction: "manipulation",
                WebkitTapHighlightColor: "transparent",
                userSelect: "none",
              }}
            >
              {isMobileMenuOpen ? (
                <FontAwesomeIcon
                  icon={faXmark}
                  className="w-5 h-5 pointer-events-none"
                />
              ) : (
                <FontAwesomeIcon
                  icon={faBars}
                  className="w-5 h-5 pointer-events-none"
                />
              )}
            </button>

            {/* Logo FIMA au centre */}
            <div
              className="flex items-center cursor-pointer"
              onClick={() => handleNavigateWithClose("home")}
            >
              <img
                src="https://jxikbrjmdmznoehhccdw.supabase.co/storage/v1/object/public/make-98c6ec1c-media/images/b10bd9f8-288d-4f40-8f3e-0f10bfa1961f.PNG"
                alt="GROUP FIMA - Literie - Menuiserie - Vitres - Aluminium"
                className="fima-logo-mobile"
                style={{
                  height: "24px",
                  width: "auto",
                  objectFit: "contain",
                }}
              />
            </div>

            {/* Actions à droite */}
            <div className="flex items-center gap-0.5">
              {/* Sélecteur de langue - juste le flag */}
              <button
                ref={languageButtonRef}
                onClick={handleLanguageToggle}
                className="text-white p-2 min-w-[44px] min-h-[44px] flex items-center justify-center active:bg-white/10 transition-colors"
                style={{
                  touchAction: "manipulation",
                  WebkitTapHighlightColor: "transparent",
                  userSelect: "none",
                }}
              >
                <span className="text-base pointer-events-none">
                  {currentLanguageObj.flag}
                </span>
              </button>

              {/* Panier */}
              <button
                onClick={() => setIsCartOpen(true)}
                className="text-white relative p-2 min-w-[44px] min-h-[44px] flex items-center justify-center active:bg-white/10 transition-colors"
                style={{
                  touchAction: "manipulation",
                  WebkitTapHighlightColor: "transparent",
                  userSelect: "none",
                }}
              >
                <FontAwesomeIcon
                  icon={faShoppingCart}
                  className={`w-5 h-5 pointer-events-none ${isCartAnimating ? "animate-bounce" : ""}`}
                />
                {cartCount > 0 && (
                  <span
                    className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center pointer-events-none"
                    style={{ fontSize: "10px" }}
                  >
                    {cartCount > 9 ? "9+" : cartCount}
                  </span>
                )}
              </button>

              {/* Favoris */}
              <button
                onClick={onFavoritesClick}
                className="text-white relative p-2 min-w-[44px] min-h-[44px] flex items-center justify-center active:bg-white/10 transition-colors"
                style={{
                  touchAction: "manipulation",
                  WebkitTapHighlightColor: "transparent",
                  userSelect: "none",
                }}
              >
                <FontAwesomeIcon
                  icon={faHeart}
                  className="w-5 h-5 pointer-events-none"
                />
                {favoritesCount > 0 && (
                  <span
                    className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center pointer-events-none"
                    style={{ fontSize: "10px" }}
                  >
                    {favoritesCount > 9 ? "9+" : favoritesCount}
                  </span>
                )}
              </button>

              {/* Compte */}
              {isAuthenticated ? (
                <button
                  onClick={handleUserMenuToggle}
                  className="text-white p-2 min-w-[44px] min-h-[44px] flex items-center justify-center active:bg-white/10 transition-colors"
                  style={{
                    touchAction: "manipulation",
                    WebkitTapHighlightColor: "transparent",
                    userSelect: "none",
                  }}
                >
                  <FontAwesomeIcon
                    icon={faUser}
                    className="w-5 h-5 pointer-events-none"
                  />
                </button>
              ) : (
                <button
                  onClick={() => onNavigate("auth")}
                  className="text-white p-2 min-w-[44px] min-h-[44px] flex items-center justify-center active:bg-white/10 transition-colors"
                  style={{
                    touchAction: "manipulation",
                    WebkitTapHighlightColor: "transparent",
                    userSelect: "none",
                  }}
                >
                  <FontAwesomeIcon
                    icon={faUser}
                    className="w-5 h-5 pointer-events-none"
                  />
                </button>
              )}
            </div>
          </div>

          {/* Barre de recherche pleine largeur */}
          <div className="flex items-center bg-white overflow-hidden h-7">
            <div className="flex-1 flex items-center h-full">
              <FontAwesomeIcon
                icon={faSearch}
                className="w-3 h-3 text-gray-400 ml-2"
              />
              <Input
                type="text"
                placeholder="Rechercher des produits..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="border-0 outline-0 ring-0 focus:ring-0 focus:border-0 bg-transparent text-xs px-1.5 py-0 flex-1 h-full"
                style={{ fontFamily: "Inter" }}
              />
            </div>
          </div>
        </div>

        {/* Dropdown langue mobile */}
        {isLanguageOpen && (
          <div
            className="absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg z-[9999]"
            onMouseDown={(e) => e.stopPropagation()}
            onTouchStart={(e) => e.stopPropagation()}
          >
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setSelectedLanguage(lang.code as LanguageCode);
                  setIsLanguageOpen(false);
                }}
                className="w-full text-left px-4 py-3 hover:bg-gray-100 active:bg-gray-200 flex items-center gap-3 text-gray-800 border-b border-gray-100 last:border-b-0"
              >
                <span className="text-xl">{lang.flag}</span>
                <span>{lang.name}</span>
              </button>
            ))}
          </div>
        )}

        {/* Dropdown menu utilisateur mobile */}
        {isUserMenuOpen && isAuthenticated && (
          <div
            className="absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg z-[9999]"
            onMouseDown={(e) => e.stopPropagation()}
            onTouchStart={(e) => e.stopPropagation()}
          >
            <div className="px-4 py-3 border-b border-gray-200 bg-gray-50">
              <p className="font-medium text-gray-900">
                {user?.firstName} {user?.lastName}
              </p>
              <p className="text-sm text-gray-600">
                {user?.email}
              </p>
            </div>
            <button
              onClick={() => {
                handleNavigateWithClose("account");
                setIsUserMenuOpen(false);
              }}
              className="w-full text-left px-4 py-3 hover:bg-gray-100 active:bg-gray-200 flex items-center gap-3 text-gray-800 border-b border-gray-100"
            >
              <FontAwesomeIcon
                icon={faUserCircle}
                className="w-5 h-5"
              />
              <span>Mon compte</span>
            </button>
            <button
              onClick={() => {
                handleNavigateWithClose("account");
                setIsUserMenuOpen(false);
              }}
              className="w-full text-left px-4 py-3 hover:bg-gray-100 active:bg-gray-200 flex items-center gap-3 text-gray-800 border-b border-gray-100"
            >
              <FontAwesomeIcon
                icon={faBox}
                className="w-5 h-5"
              />
              <span>Mes commandes</span>
            </button>
            <button
              onClick={() => {
                logout();
                setIsUserMenuOpen(false);
                onNavigate("home");
              }}
              className="w-full text-left px-4 py-3 hover:bg-gray-100 active:bg-gray-200 flex items-center gap-3 text-gray-800"
            >
              <FontAwesomeIcon
                icon={faRightFromBracket}
                className="w-5 h-5"
              />
              <span>Se déconnecter</span>
            </button>
          </div>
        )}
      </div>

      {/* VERSION DESKTOP - Inchangée */}
      {/* Top Information Bar */}
      <div className="hidden lg:block py-1 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-3">
            {/* Informations principales */}
            <div className="flex flex-col lg:flex-row items-center gap-4 text-gray-700">
              {/* Espace pour pousser les informations vers la droite sur grands écrans */}
              <div className="hidden xl:block xl:w-16"></div>

              {/* Commentaires cachés pour l'instant */}
              <div className="hidden md:flex items-center gap-4 text-sm">
                {/* Informations de contact cachées */}
              </div>
            </div>

            {/* Actions utilisateur - Nouveau layout avec barre de recherche et actions */}
            <div className="flex items-center gap-8">
              {/* Barre de recherche style Amazon - repositionnée à gauche */}
              <div className="hidden md:flex items-left bg-white border border-gray-300 rounded-md overflow-hidden min-w-[280px] lg:min-w-[350px] xl:min-w-[400px] mt-[0px] mr-[10px] mb-[0px] ml-[0px]">
                <Input
                  type="text"
                  placeholder="Rechercher des produits, catégories..."
                  value={searchQuery}
                  onChange={(e) =>
                    setSearchQuery(e.target.value)
                  }
                  size={110}
                  className="border-0 outline-0 ring-0 focus:ring-0 focus:border-0 bg-transparent text-sm lg:text-base px-3 lg:px-4 py-1.5 lg:py-2 flex-1"
                />
                <button
                  className="px-3 py-1.5 transition-colors"
                  style={{ backgroundColor: "#0EA5E9" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor =
                      "#0c93d1")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor =
                      "#0EA5E9")
                  }
                  onClick={() => {
                    if (searchQuery.trim()) {
                      // Navigation vers recherche
                      handleNavigateWithClose("all-products");
                    }
                  }}
                >
                  <FontAwesomeIcon
                    icon={faSearch}
                    className="w-4 h-4 text-white"
                  />
                </button>
              </div>

              {/* Version mobile de la recherche */}
              <button className="md:hidden p-1.5 hover:bg-gray-200 rounded-full transition-colors">
                <FontAwesomeIcon
                  icon={faSearch}
                  className="w-4 h-4 text-gray-600"
                />
              </button>

              {/* Boutiques - remis à sa position originale */}
              <button
                onClick={() =>
                  handleNavigateWithClose("all-products")
                }
                className="hidden lg:flex items-center gap-2 px-3 py-2 transition-colors text-sm touch-manipulation"
                style={{ color: "#0EA5E9" }}
                title="Boutiques"
              >
                <FontAwesomeIcon
                  icon={faStore}
                  className="w-4 h-4"
                />
                <span>Boutiques</span>
              </button>

              {/* Favoris */}
              <button
                onClick={onFavoritesClick}
                className="flex items-center gap-2 px-3 py-2 transition-colors text-sm touch-manipulation relative"
                style={{ color: "#0EA5E9" }}
                title="Mes favoris"
              >
                <FontAwesomeIcon
                  icon={faHeart}
                  className="w-4 h-4"
                />
                <span className="hidden lg:inline">
                  Favoris
                </span>
                {favoritesCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {favoritesCount > 99
                      ? "99+"
                      : favoritesCount}
                  </span>
                )}
              </button>

              {/* Panier */}
              <button
                onClick={() => setIsCartOpen(true)}
                className="flex items-center gap-2 px-3 py-2 transition-colors text-sm touch-manipulation relative"
                style={{ color: "#0EA5E9" }}
                title="Mon panier"
              >
                <FontAwesomeIcon
                  icon={faShoppingCart}
                  className={`w-4 h-4 ${isCartAnimating ? "animate-bounce" : ""}`}
                />
                <span className="hidden lg:inline">Panier</span>
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartCount > 99 ? "99+" : cartCount}
                  </span>
                )}
              </button>

              {/* Account - Style cohérent */}
              {isAuthenticated ? (
                <div className="relative">
                  <button
                    ref={userMenuButtonRef}
                    onClick={handleUserMenuToggle}
                    onTouchStart={() => {}} // Force touch recognition
                    className="flex items-center gap-2 px-3 py-2 transition-colors touch-manipulation text-sm"
                    style={{ color: "#0EA5E9" }}
                    title="Mon compte"
                  >
                    <Avatar className="w-4 h-4">
                      <AvatarFallback
                        className="text-xs"
                        style={{
                          backgroundColor: "#E30613",
                          color: "white",
                        }}
                      >
                        {user?.firstName[0]}
                        {user?.lastName[0]}
                      </AvatarFallback>
                    </Avatar>
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      className="w-3 h-3"
                    />
                  </button>
                  {isUserMenuOpen && (
                    <div
                      className="bg-white rounded-lg shadow-xl py-2 min-w-[200px] z-[9999] max-w-[250px] overflow-hidden"
                      style={{
                        position: "fixed",
                        top: `${userMenuDropdownPosition.top}px`,
                        left: `${userMenuDropdownPosition.left}px`,
                        border: "3px solid #B5C233",
                        boxShadow:
                          "0 10px 30px rgba(0, 0, 0, 0.3)",
                      }}
                      onMouseDown={(e) => e.stopPropagation()}
                      onTouchStart={(e) => e.stopPropagation()}
                    >
                      <div className="px-4 py-2 border-b border-gray-200">
                        <p className="font-medium text-gray-900">
                          {user?.firstName} {user?.lastName}
                        </p>
                        <p className="text-sm text-gray-600">
                          {user?.email}
                        </p>
                      </div>
                      <button
                        onClick={() => {
                          handleNavigateWithClose("account");
                          setIsUserMenuOpen(false);
                        }}
                        onTouchStart={() => {}} // Force touch recognition
                        className="w-full text-left px-4 py-2 hover:bg-gray-100 active:bg-gray-200 flex items-center gap-3 text-gray-800 text-sm touch-manipulation transition-colors"
                      >
                        <FontAwesomeIcon
                          icon={faUserCircle}
                          className="w-4 h-4"
                        />
                      </button>
                      {/* Lien rapide vers mes commandes */}
                      <button
                        onClick={() => {
                          handleNavigateWithClose("account");
                          setIsUserMenuOpen(false);
                        }}
                        onTouchStart={() => {}} // Force touch recognition
                        className="w-full text-left px-4 py-2 hover:bg-gray-100 active:bg-gray-200 flex items-center gap-3 text-gray-800 text-sm touch-manipulation transition-colors"
                      >
                        <FontAwesomeIcon
                          icon={faBox}
                          className="w-4 h-4"
                        />
                        <span>Mes commandes</span>
                      </button>
                      <button
                        onClick={() => {
                          logout();
                          setIsUserMenuOpen(false);
                          onNavigate("home");
                        }}
                        onTouchStart={() => {}} // Force touch recognition
                        className="w-full text-left px-4 py-2 hover:bg-gray-100 active:bg-gray-200 flex items-center gap-3 text-gray-800 text-sm touch-manipulation transition-colors"
                      >
                        <FontAwesomeIcon
                          icon={faRightFromBracket}
                          className="w-4 h-4"
                        />
                        <span>Se déconnecter</span>
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <button
                  onClick={() => onNavigate("auth")}
                  className="flex items-center gap-2 px-3 py-2 transition-colors text-sm touch-manipulation"
                  style={{ color: "#0EA5E9" }}
                  title="Se connecter"
                >
                  <FontAwesomeIcon
                    icon={faUser}
                    className="w-4 h-4"
                  />
                  <span className="hidden lg:inline">
                    Compte
                  </span>
                </button>
              )}

              {/* Language Selector - Plus compact */}
              <div className="relative">
                <button
                  ref={languageButtonRef}
                  onClick={handleLanguageToggle}
                  onTouchEnd={(e) => {
                    e.preventDefault();
                    handleLanguageToggle();
                  }}
                  className="flex items-center gap-1 px-3 py-2 transition-colors text-sm touch-manipulation relative z-[60]"
                  style={{
                    position: "relative",
                    zIndex: 60,
                    color: "#0EA5E9",
                  }}
                >
                  <span className="text-xl">
                    {currentLanguageObj.flag}
                  </span>
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className="w-3 h-3"
                  />
                </button>
                {isLanguageOpen && (
                  <div
                    className="bg-white rounded-lg shadow-xl py-2 min-w-[150px] z-[9999] max-w-[200px] overflow-hidden"
                    style={{
                      position: "fixed",
                      top: `${languageDropdownPosition.top}px`,
                      left: `${languageDropdownPosition.left}px`,
                      border: "3px solid #B5C233",
                      boxShadow:
                        "0 10px 30px rgba(0, 0, 0, 0.3)",
                    }}
                    onMouseDown={(e) => e.stopPropagation()}
                    onTouchStart={(e) => e.stopPropagation()}
                  >
                    <div className="max-h-[200px] overflow-y-auto">
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => {
                            setSelectedLanguage(lang.code as LanguageCode);
                            setIsLanguageOpen(false);
                          }}
                          onTouchStart={() => {}} // Force touch recognition
                          className="w-full text-left px-4 py-2 hover:bg-gray-100 active:bg-gray-200 flex items-center gap-3 text-gray-800 text-sm touch-manipulation transition-colors whitespace-nowrap"
                        >
                          <span>{lang.flag}</span>
                          <span>{lang.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Currency Selector - Plus compact */}
              <div className="relative">
                <button
                  ref={currencyButtonRef}
                  onClick={handleCurrencyToggle}
                  onTouchStart={() => {}} // Force touch recognition
                  className="flex items-center gap-2 px-3 py-2 transition-colors text-sm touch-manipulation"
                  style={{ color: "#0EA5E9" }}
                >
                  {/* <FontAwesomeIcon icon={faCreditCard} className="w-4 h-4" /> */}
                  <span>{currentCurrencyObj.code}</span>
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className="w-3 h-3"
                  />
                </button>
                {isCurrencyOpen && (
                  <div
                    className="bg-white rounded-lg shadow-xl py-2 min-w-[120px] z-[9999] max-w-[200px] overflow-hidden"
                    style={{
                      position: "fixed",
                      top: `${currencyDropdownPosition.top}px`,
                      left: `${currencyDropdownPosition.left}px`,
                      border: "3px solid #B5C233",
                      boxShadow:
                        "0 10px 30px rgba(0, 0, 0, 0.3)",
                    }}
                    onMouseDown={(e) => e.stopPropagation()}
                    onTouchStart={(e) => e.stopPropagation()}
                  >
                    <div className="max-h-[200px] overflow-y-auto">
                      {currencies.map((currency) => (
                        <button
                          key={currency.code}
                          onClick={() => {
                            setSelectedCurrency(currency.code as CurrencyCode);
                            setIsCurrencyOpen(false);
                          }}
                          onTouchStart={() => {}} // Force touch recognition
                          className="w-full text-left px-4 py-2 hover:bg-gray-100 active:bg-gray-200 text-gray-800 text-sm touch-manipulation transition-colors whitespace-nowrap"
                        >
                          {currency.symbol} {currency.code}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Boutons CTA Expert - Plus compacts - SUPPRIMÉS */}
              {/* 
              <div className="hidden xl:flex items-center gap-2">
                <button
                  onClick={() => onExpertClick?.("expert")}
                  className="px-2 py-1 text-xs font-medium text-gray-700 border border-gray-300 hover:bg-gray-200 rounded-lg transition-colors whitespace-nowrap"
                >
                  Expert
                </button>
                <button
                  onClick={() => onExpertClick?.("appointment")}
                  className="px-2 py-1 text-xs font-medium bg-green-600 text-white hover:bg-green-700 rounded-lg transition-colors whitespace-nowrap"
                >
                  RDV
                </button>
              </div>
              */}
            </div>
          </div>
        </div>
      </div>

      {/* Main Header - Plus espacé - DESKTOP SEULEMENT */}
      <div
        className="hidden lg:block"
        style={{ backgroundColor: "#565757" }}
      >
        <div className="container mx-auto px-4 px-[16px] py-[0px] overflow-visible">
          <div className="flex items-center justify-between py-3 px-[7px] py-[2px] mt-[0px] mr-[0px] mb-[0px] ml-[7px]">
            {/* Logo FIMA */}
            <div
              className="cursor-pointer transition-transform hover:scale-105 flex-shrink-0"
              onClick={() => handleNavigateWithClose("home")}
            >
              <div className="h-12 flex items-center">
                <img
                  src={newHeaderLogo}
                  alt="GROUP FIMA - Literie - Menuiserie - Vitres - Aluminium"
                  className="fima-logo-desktop lg:ml-15"
                  style={{
                    height: "48px",
                    width: "auto",
                    objectFit: "contain",
                  }}
                />
              </div>
            </div>

            {/* Desktop Navigation - Plus espacée */}
            <nav className="flex items-center space-x-6 px-3 overflow-visible lg:ml-auto">
              {/* À propos - Déplacé avant Nos Métiers */}
              <button
                onClick={() =>
                  handleNavigateWithClose("our-history")
                }
                className="hover:text-gray-300 transition-colors font-normal text-sm"
                style={{ color: "#B5C233" }}
              >
                À propos
              </button>

              {/* Métiers Dropdown */}
              <div className="relative overflow-visible">
                <button
                  ref={businessUnitsButtonRef}
                  onClick={handleBusinessUnitsToggle}
                  className="flex items-center gap-2 hover:text-gray-300 transition-colors font-normal text-sm"
                  style={{ color: "#B5C233" }}
                >
                  <FontAwesomeIcon
                    icon={faBuilding}
                    className="w-4 h-4"
                  />
                  Nos Métiers
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className="w-4 h-4"
                  />
                </button>
                {isBusinessUnitsOpen &&
                  createPortal(
                    <div
                      className="fixed bg-white shadow-2xl z-[99999] border-t-4"
                      style={{
                        top: `${dropdownPosition.top}px`,
                        left: "20px",
                        right: "20px",
                        borderTopColor: "#B5C233",
                      }}
                      onMouseDown={(e) => e.stopPropagation()}
                      onTouchStart={(e) => e.stopPropagation()}
                    >
                      <div className="px-[22px] mx-[20px] px-[-1px] py-[16px] mx-[8px] my-[0px]">
                        <div className="p-0">
                          {/* Header du Mega Menu */}
                          <div className="px-6 py-3 bg-gradient-to-r from-gray-50 to-white border-b border-gray-200 pt-[5px] pr-[20px] pb-[12px] pl-[20px]">
                            {/* <h3 className="text-lg font-semibold text-gray-900">
                            Nos 3 Métiers
                          </h3> */}
                            <p className="text-xs text-gray-600 mt-1">
                              Une expertise complète pour tous
                              vos projets
                            </p>
                          </div>

                          {/* Grille des 3 métiers */}
                          <div className="grid grid-cols-3 gap-0 divide-x divide-gray-200">
                            {enrichedBusinessUnits.map(
                              (unit, index) => (
                                <button
                                  key={unit.id}
                                  onClick={() => {
                                    handleNavigateWithClose(
                                      unit.slug,
                                    );
                                  }}
                                  className="group text-left p-5 hover:bg-gray-50 transition-all duration-300 flex flex-col items-center text-center"
                                >
                                  {/* Icône */}
                                  <div
                                    className="w-16 h-16 flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110"
                                    style={{
                                      backgroundColor:
                                        unit.primary_color,
                                      color:
                                        unit.slug ===
                                        "fima-couchage"
                                          ? "#6E6E6E"
                                          : unit.slug ===
                                              "fima-design"
                                            ? "#B5C233"
                                            : "#FFFFFF",
                                    }}
                                  >
                                    <div className="text-2xl">
                                      {unit.icon}
                                    </div>
                                  </div>

                                  {/* Nom du métier */}
                                  <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
                                    {unit.name}
                                  </h4>

                                  {/* Description */}
                                  <p className="text-xs text-gray-600 mb-3 line-clamp-2 leading-snug">
                                    {unit.description ||
                                      (index === 0
                                        ? "Matelas, sommiers et accessoires premium"
                                        : index === 1
                                          ? "Menuiserie sur mesure et ameublement design"
                                          : "Vitrerie et aluminium pour vos projets")}
                                  </p>

                                  {/* Badge projets */}
                                  <div
                                    className="text-xs px-3 py-1 inline-block font-medium"
                                    style={{
                                      backgroundColor:
                                        unit.primary_color,
                                      color:
                                        unit.slug ===
                                        "fima-couchage"
                                          ? "#6E6E6E"
                                          : unit.slug ===
                                              "fima-design"
                                            ? "#B5C233"
                                            : "#FFFFFF",
                                    }}
                                  >
                                    {unit.projects}
                                  </div>

                                  {/* Call to action */}
                                  <div
                                    className="mt-3 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    style={{
                                      color: unit.primary_color,
                                    }}
                                  >
                                    Découvrir →
                                  </div>
                                </button>
                              ),
                            )}
                          </div>

                          {/* Footer avec CTA B2B */}
                          <div className="px-6 py-3 bg-[rgb(110,110,110)] border-t border-gray-300">
                            <div className="flex items-center justify-between pt-[0px] pr-[79px] pb-[0px] pl-[0px]">
                              <div>
                                <h4 className="text-[rgb(181,194,51)] font-semibold text-sm">
                                  Vous êtes un professionnel ?
                                </h4>
                                <p className="text-[rgb(181,194,51)] text-xs mt-0.5">
                                  Solutions intégrées pour les
                                  grands comptes
                                </p>
                              </div>
                              <button
                                onClick={() => {
                                  handleNavigateWithClose(
                                    "b2b-solutions",
                                  );
                                }}
                                className="px-5 py-2 bg-white text-[rgb(17,163,255)] font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2 text-sm"
                              >
                                <FontAwesomeIcon
                                  icon={faBuilding}
                                  className="w-3 h-3"
                                />
                                Solutions B2B
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>,
                    document.body,
                  )}
              </div>

              {/* Nos Produits Megamenu */}
              <div className="relative overflow-visible">
                <button
                  ref={productsButtonRef}
                  onClick={handleProductsToggle}
                  className="flex items-center gap-2 hover:text-gray-300 transition-colors font-normal text-sm py-2"
                  style={{ color: "#B5C233" }}
                >
                  <FontAwesomeIcon
                    icon={faBox}
                    className="w-4 h-4"
                  />
                  Nos Produits
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className="w-4 h-4"
                  />
                </button>
              </div>

              {/* Nos Réalisations - Lien direct */}
              <button
                onClick={() => onNavigate("all-projects")}
                className="flex items-center gap-2 hover:text-gray-300 transition-colors font-normal text-sm"
                style={{ color: "#B5C233" }}
              >
                <FontAwesomeIcon
                  icon={faFolderOpen}
                  className="w-4 h-4"
                />
                Nos Réalisations
              </button>

              {/* Hub de Contenu */}
              <button
                onClick={() =>
                  handleNavigateWithClose("content-hub")
                }
                className="hover:text-gray-300 transition-colors font-normal text-sm"
                style={{ color: "#B5C233" }}
              >
                Conseils
              </button>

              {/* Contact */}
              <button
                onClick={() => onExpertClick?.("appointment")}
                className="hover:text-gray-300 transition-colors font-normal text-sm"
                style={{ color: "#B5C233" }}
              >
                Contact
              </button>
            </nav>

            {/* Bouton Grands comptes CTA - À droite */}
            <div className="hidden lg:flex items-center ml-6">
              <button
                onClick={() =>
                  handleNavigateWithClose("large-accounts")
                }
                className="px-4 py-2 text-white font-semibold transition-all hover:shadow-lg transform hover:scale-105"
                style={{
                  backgroundColor: "#0EA5E9",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor =
                    "#0c93d1")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor =
                    "#0EA5E9")
                }
              >
                Grands comptes
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-1.5 hover:bg-gray-700 rounded-lg transition-colors"
              style={{ color: "#B5C233" }}
            >
              <FontAwesomeIcon
                icon={faBars}
                className="w-6 h-6"
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-[rgba(0,0,0,0.44)] bg-opacity-50 z-[9998] lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div
            className="fixed top-0 right-0 h-full w-80 bg-white shadow-xl transform transition-transform duration-300 ease-in-out overflow-y-auto z-[9999]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 border-b border-gray-200 flex justify-between items-center">
              <h2 className="text-lg font-semibold">Menu</h2>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <FontAwesomeIcon
                  icon={faXmark}
                  className="w-5 h-5"
                />
              </button>
            </div>

            <div className="p-4 space-y-4">
              {/* Langue et Devise Mobile - Section améliorée avec indicateur */}
              <div
                className="space-y-4 pb-4 border-b-2 border-[#B5C233] bg-gradient-to-br from-gray-50 to-gray-100 p-4 shadow-sm relative"
                style={{ minHeight: "280px" }}
                onClick={(e) => e.stopPropagation()}
                onTouchStart={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-gray-900 flex items-center gap-2">
                    <FontAwesomeIcon
                      icon={faGlobe}
                      className="w-5 h-5 text-[#B5C233]"
                    />
                    Paramètres
                  </h3>
                  <span
                    className="text-xs px-2 py-1 font-semibold"
                    style={{
                      backgroundColor: "#B5C233",
                      color: "#6E6E6E",
                    }}
                  >
                    ✓ ACTIF
                  </span>
                </div>

                {/* Message d'info visible */}
                <div
                  className="text-xs text-gray-600 p-2 border-l-4 mb-3"
                  style={{
                    backgroundColor: "rgba(14, 165, 233, 0.05)",
                    borderColor: "#0EA5E9",
                  }}
                >
                  📍 Sélectionnez votre langue et devise
                  ci-dessous
                </div>

                {/* Language Selector Mobile - Version ultra-visible */}
                <div
                  className="relative z-10 bg-white p-3 shadow-lg"
                  style={{ border: "2px solid #B5C233" }}
                >
                  <label
                    htmlFor="mobile-lang-select"
                    className="block text-base text-gray-900 mb-2 font-bold flex items-center gap-2"
                  >
                    <span className="text-2xl">🌐</span>
                    <span>LANGUE</span>
                  </label>
                  <select
                    id="mobile-lang-select"
                    value={selectedLanguage}
                    onChange={(e) => {
                      const newLang = e.target.value;
                      console.log(
                        "✅ Langue changée vers:",
                        newLang,
                      );
                      setSelectedLanguage(newLang as LanguageCode);
                      toast.success(
                        `Langue changée: ${newLang === "FR" ? "🇫🇷 Français" : "🇬🇧 English"}`,
                      );
                    }}
                    className="w-full px-4 py-4 text-lg focus:outline-none bg-white cursor-pointer shadow-lg"
                    style={{
                      minHeight: "56px",
                      fontSize: "18px",
                      fontFamily: "Inter",
                      WebkitAppearance: "menulist",
                      MozAppearance: "menulist",
                      appearance: "menulist",
                      color: "#000",
                      fontWeight: "600",
                      border: "3px solid #6E6E6E",
                      borderRadius: "0",
                    }}
                  >
                    <option
                      value="FR"
                      style={{
                        fontSize: "18px",
                        padding: "12px",
                        fontWeight: "600",
                      }}
                    >
                      🇫🇷 Français
                    </option>
                    <option
                      value="EN"
                      style={{
                        fontSize: "18px",
                        padding: "12px",
                        fontWeight: "600",
                      }}
                    >
                      🇬🇧 English
                    </option>
                  </select>
                </div>

                {/* Currency Selector Mobile - Version ultra-visible */}
                <div
                  className="relative z-10 bg-white p-3 shadow-lg"
                  style={{ border: "2px solid #B5C233" }}
                >
                  <label
                    htmlFor="mobile-currency-select"
                    className="block text-base text-gray-900 mb-2 font-bold flex items-center gap-2"
                  >
                    <span className="text-2xl">💰</span>
                    <span>DEVISE</span>
                  </label>
                  <select
                    id="mobile-currency-select"
                    value={selectedCurrency}
                    onChange={(e) => {
                      const newCurr = e.target.value;
                      console.log(
                        "✅ Devise changée vers:",
                        newCurr,
                      );
                      setSelectedCurrency(newCurr as CurrencyCode);
                      toast.success(
                        `Devise changée: ${newCurr}`,
                      );
                    }}
                    className="w-full px-4 py-4 text-lg focus:outline-none bg-white cursor-pointer shadow-lg"
                    style={{
                      minHeight: "56px",
                      fontSize: "18px",
                      fontFamily: "Inter",
                      WebkitAppearance: "menulist",
                      MozAppearance: "menulist",
                      appearance: "menulist",
                      color: "#000",
                      fontWeight: "600",
                      border: "3px solid #6E6E6E",
                      borderRadius: "0",
                    }}
                  >
                    <option
                      value="XOF"
                      style={{
                        fontSize: "18px",
                        padding: "12px",
                        fontWeight: "600",
                      }}
                    >
                      F CFA - Franc CFA
                    </option>
                    <option
                      value="EUR"
                      style={{
                        fontSize: "18px",
                        padding: "12px",
                        fontWeight: "600",
                      }}
                    >
                      € - Euro
                    </option>
                    <option
                      value="USD"
                      style={{
                        fontSize: "18px",
                        padding: "12px",
                        fontWeight: "600",
                      }}
                    >
                      $ - US Dollar
                    </option>
                    <option
                      value="GBP"
                      style={{
                        fontSize: "18px",
                        padding: "12px",
                        fontWeight: "600",
                      }}
                    >
                      £ - British Pound
                    </option>
                  </select>
                </div>
              </div>

              {/* Diagnostic Info - Temporaire pour débogage */}
              <div className="bg-yellow-50 border-2 border-yellow-400 p-3 text-xs space-y-1">
                <div className="font-bold text-yellow-900">
                  🔍 Diagnostic Sélecteurs:
                </div>
                <div className="text-yellow-800">
                  • Langue actuelle:{" "}
                  <span className="font-mono font-bold">
                    {selectedLanguage}
                  </span>
                </div>
                <div className="text-yellow-800">
                  • Devise actuelle:{" "}
                  <span className="font-mono font-bold">
                    {selectedCurrency}
                  </span>
                </div>
                <div className="text-yellow-800">
                  • Langues chargées:{" "}
                  <span className="font-mono">
                    {languages?.length || 0}
                  </span>
                </div>
                <div className="text-yellow-800">
                  • Devises chargées:{" "}
                  <span className="font-mono">
                    {currencies?.length || 0}
                  </span>
                </div>
                <div
                  className="font-bold mt-2"
                  style={{ color: "#B5C233" }}
                >
                  {languages?.length > 0 &&
                  currencies?.length > 0
                    ? "✅ Données OK"
                    : "❌ Données manquantes"}
                </div>
              </div>

              {/* Nos Métiers Mobile */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">
                  Nos Métiers
                </h3>
                <div className="space-y-2 ml-4">
                  {businessUnits.map((unit) => (
                    <button
                      key={unit.id}
                      onClick={() => {
                        handleNavigateWithClose(unit.slug);
                        setIsMobileMenuOpen(false);
                      }}
                      className="w-full text-left p-3 hover:bg-gray-50 rounded-lg transition-colors flex items-center gap-3"
                    >
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center text-white"
                        style={{
                          backgroundColor: unit.primary_color,
                        }}
                      >
                        <FontAwesomeIcon
                          icon={faBuilding}
                          className="w-5 h-5"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-gray-900 text-sm">
                          {unit.name}
                        </div>
                        <div className="text-xs text-gray-600">
                          {unit.description}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Nos Produits Mobile */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">
                  Nos Produits
                </h3>
                <div className="space-y-2 ml-4">
                  <button
                    onClick={() => {
                      handleNavigateWithClose("all-products");
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full text-left p-3 hover:bg-gray-50 rounded-lg transition-colors text-sm text-gray-700"
                  >
                    Tous les produits
                  </button>
                  {productCategories
                    .slice(0, 3)
                    .map((category) => (
                      <button
                        key={category.key}
                        onClick={() => {
                          handleNavigateWithClose(
                            "category",
                            category.key,
                          );
                          setIsMobileMenuOpen(false);
                        }}
                        className="w-full text-left p-3 hover:bg-gray-50 rounded-lg transition-colors text-sm text-gray-700"
                      >
                        {category.icon} {category.name}
                      </button>
                    ))}
                </div>
              </div>

              {/* Nos Solutions Mobile */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">
                  Nos Solutions
                </h3>
                <div className="space-y-2 ml-4">
                  <button
                    onClick={() => {
                      handleNavigateWithClose("all-projects");
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full text-left p-3 hover:bg-gray-50 rounded-lg transition-colors text-sm text-gray-700"
                  >
                    Voir nos solutions
                  </button>
                </div>
              </div>

              {/* Navigation Mobile */}
              <div className="space-y-2">
                <button
                  onClick={() => {
                    handleNavigateWithClose("our-history");
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full text-left p-3 hover:bg-gray-50 rounded-lg transition-colors text-sm text-gray-700"
                >
                  À propos
                </button>
                <button
                  onClick={() => {
                    handleNavigateWithClose("content-hub");
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full text-left p-3 hover:bg-gray-50 rounded-lg transition-colors text-sm text-gray-700"
                >
                  Conseils
                </button>
                <button
                  onClick={() => {
                    onExpertClick?.("appointment");
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full text-left p-3 hover:bg-gray-50 rounded-lg transition-colors text-sm text-gray-700"
                >
                  Contact
                </button>
              </div>

              {/* CTA Mobile */}
              <div className="pt-4 border-t border-gray-200">
                <button
                  onClick={() => {
                    handleNavigateWithClose("large-accounts");
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full px-6 py-3 text-white font-semibold rounded-lg transition-all"
                  style={{ backgroundColor: "#0EA5E9" }}
                >
                  Grands comptes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Megamenu Produits - affiché en dehors du header pour être en pleine largeur */}
      {isProductsOpen && (
        <ProductsMegaMenu
          onNavigate={handleNavigateWithClose}
          onClose={() => setIsProductsOpen(false)}
          position={productsDropdownPosition}
        />
      )}
    </header>
  );
}