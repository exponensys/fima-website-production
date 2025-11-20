/**
 * Icon Mapping Guide - Lucide to Font Awesome
 * 
 * Ce fichier documente le mapping entre les icônes Lucide React et Font Awesome
 * pour faciliter le remplacement à travers toute l'application FIMA.
 */

/**
 * MAPPING LUCIDE → FONT AWESOME
 * 
 * Lucide Icon          → Font Awesome Icon
 * -------------------- → ------------------
 * Search               → faSearch
 * User                 → faUser
 * ShoppingCart         → faShoppingCart
 * Heart                → faHeart
 * Menu                 → faBars
 * X                    → faTimes / faXmark
 * Globe                → faGlobe
 * CreditCard           → faCreditCard
 * ChevronDown          → faChevronDown
 * ChevronUp            → faChevronUp
 * ChevronLeft          → faChevronLeft
 * ChevronRight         → faChevronRight
 * Building2            → faBuilding
 * Home                 → faHome / faHouse
 * Wrench               → faWrench
 * FolderOpen           → faFolderOpen
 * Users                → faUsers
 * Package              → faBox
 * Phone                → faPhone
 * Mail                 → faEnvelope
 * Clock                → faClock
 * Award                → faAward / faTrophy
 * LogOut               → faSignOutAlt / faRightFromBracket
 * UserCircle           → faUserCircle
 * Store                → faStore
 * MapPin               → faMapMarkerAlt / faLocationDot
 * Facebook             → faFacebook (brands)
 * Instagram            → faInstagram (brands)
 * Linkedin             → faLinkedin (brands)
 * Twitter              → faTwitter (brands)
 * Youtube              → faYoutube (brands)
 * CheckCircle          → faCheckCircle
 * Shield               → faShield
 * Truck                → faTruck
 * ArrowRight           → faArrowRight
 * ExternalLink         → faExternalLink
 * Palette              → faPalette
 * Star                 → faStar
 * Quote                → faQuoteLeft / faQuoteRight
 * Bed                  → faBed
 * Filter               → faFilter
 * SortAsc              → faSortUp
 * SortDesc             → faSortDown
 * Grid                 → faGrip / faTableCells
 * List                 → faList
 * MessageSquare        → faComment / faMessage
 * ArrowLeft            → faArrowLeft
 * Send                 → faPaperPlane
 * Calendar             → faCalendar
 * Eye                  → faEye
 * Download             → faDownload
 * Upload               → faUpload
 * Edit                 → faEdit / faPenToSquare
 * Trash                → faTrash
 * Plus                 → faPlus
 * Minus                → faMinus
 * Check                → faCheck
 * Info                 → faInfoCircle
 * AlertCircle          → faExclamationCircle
 * Settings             → faCog / faGear
 * PlayCircle           → faPlayCircle
 * PauseCircle          → faPauseCircle
 * Volume2              → faVolumeHigh
 * VolumeX              → faVolumeXmark
 */

// Ce fichier sert de référence pour le remplacement des icônes
export const iconMapping = {
  // Navigation & UI
  'Search': 'faSearch',
  'User': 'faUser',
  'ShoppingCart': 'faShoppingCart',
  'Heart': 'faHeart',
  'Menu': 'faBars',
  'X': 'faXmark',
  'Globe': 'faGlobe',
  'CreditCard': 'faCreditCard',
  
  // Chevrons & Arrows
  'ChevronDown': 'faChevronDown',
  'ChevronUp': 'faChevronUp',
  'ChevronLeft': 'faChevronLeft',
  'ChevronRight': 'faChevronRight',
  'ArrowRight': 'faArrowRight',
  'ArrowLeft': 'faArrowLeft',
  
  // Business & Places
  'Building2': 'faBuilding',
  'Home': 'faHouse',
  'Store': 'faStore',
  'MapPin': 'faLocationDot',
  
  // Tools & Objects
  'Wrench': 'faWrench',
  'Package': 'faBox',
  'Truck': 'faTruck',
  'Bed': 'faBed',
  'Palette': 'faPalette',
  'Shield': 'faShield',
  
  // People & Social
  'Users': 'faUsers',
  'UserCircle': 'faUserCircle',
  'LogOut': 'faRightFromBracket',
  
  // Communication
  'Phone': 'faPhone',
  'Mail': 'faEnvelope',
  'MessageSquare': 'faMessage',
  
  // Status & Feedback
  'CheckCircle': 'faCheckCircle',
  'Award': 'faTrophy',
  'Star': 'faStar',
  'Clock': 'faClock',
  
  // Files & Folders
  'FolderOpen': 'faFolderOpen',
  'ExternalLink': 'faExternalLink',
  
  // Social Media (brands)
  'Facebook': 'faFacebook',
  'Instagram': 'faInstagram',
  'Linkedin': 'faLinkedin',
  'Twitter': 'faTwitter',
  'Youtube': 'faYoutube',
  
  // Actions
  'Edit': 'faPenToSquare',
  'Trash': 'faTrash',
  'Plus': 'faPlus',
  'Minus': 'faMinus',
  'Check': 'faCheck',
  
  // Info & Alerts
  'Info': 'faInfoCircle',
  'AlertCircle': 'faExclamationCircle',
  
  // Media
  'PlayCircle': 'faPlayCircle',
  'PauseCircle': 'faPauseCircle',
  
  // Misc
  'Quote': 'faQuoteLeft',
  'Filter': 'faFilter',
  'Grid': 'faGrip',
  'List': 'faList',
  'Settings': 'faGear',
  'Calendar': 'faCalendar',
  'Eye': 'faEye',
  'Download': 'faDownload',
  'Upload': 'faUpload',
  'Send': 'faPaperPlane',
};

export default iconMapping;
