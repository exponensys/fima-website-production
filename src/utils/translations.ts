// Système de traductions pour FIMA

export type LanguageCode = 'FR' | 'EN';

export interface Language {
  code: LanguageCode;
  name: string;
  flag: string;
  nativeName: string;
}

export const LANGUAGES: Record<LanguageCode, Language> = {
  FR: {
    code: 'FR',
    name: 'Français',
    flag: '🇫🇷',
    nativeName: 'Français'
  },
  EN: {
    code: 'EN',
    name: 'English',
    flag: '🇬🇧',
    nativeName: 'English'
  }
};

// Type pour les clés de traduction
export type TranslationKey = keyof typeof translations.FR;

// Traductions complètes du site
export const translations = {
  FR: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.products': 'Produits',
    'nav.projects': 'Projets',
    'nav.about': 'À propos',
    'nav.contact': 'Contact',
    'nav.account': 'Mon compte',
    'nav.cart': 'Panier',
    'nav.favorites': 'Favoris',
    'nav.login': 'Se connecter',
    'nav.logout': 'Déconnexion',
    'nav.signup': 'Créer un compte',
    
    // Header
    'header.search': 'Rechercher...',
    'header.searchPlaceholder': 'Rechercher des produits...',
    'header.businessUnits': 'Nos Métiers',
    'header.catalogue': 'Catalogue',
    'header.projects': 'Projets',
    
    // Business Units
    'business.fimaCouchage': 'FIMA Couchage',
    'business.fimaCouchage.desc': 'Literie & Mobilier de chambre',
    'business.fimaDesign': 'FIMA Design',
    'business.fimaDesign.desc': 'Menuiserie & Ameublement',
    'business.universGlass': 'UNIVERS GLASS',
    'business.universGlass.desc': 'Vitrerie & Aluminium',
    
    // Hero
    'hero.title': 'Confort & Design depuis 1985',
    'hero.subtitle': 'Leader ouest-africain en literie, menuiserie et vitrerie',
    'hero.cta.catalogue': 'Découvrir le catalogue',
    'hero.cta.quote': 'Demander un devis',
    'hero.cta.expert': 'Parler à un expert',
    
    // Products
    'products.title': 'Nos Produits',
    'products.viewAll': 'Voir tous les produits',
    'products.addToCart': 'Ajouter au panier',
    'products.addedToCart': 'Ajouté au panier',
    'products.quickView': 'Aperçu rapide',
    'products.learnMore': 'En savoir plus',
    'products.inStock': 'En stock',
    'products.outOfStock': 'Rupture de stock',
    'products.newProduct': 'Nouveau',
    'products.bestseller': 'Meilleure vente',
    'products.discount': 'Promo',
    
    // Cart
    'cart.title': 'Panier',
    'cart.empty': 'Votre panier est vide',
    'cart.emptyDesc': 'Ajoutez des produits pour commencer vos achats',
    'cart.subtotal': 'Sous-total',
    'cart.shipping': 'Livraison',
    'cart.shippingFree': 'Livraison gratuite',
    'cart.shippingCost': 'Frais de livraison',
    'cart.total': 'Total',
    'cart.checkout': 'Procéder au paiement',
    'cart.continueShopping': 'Continuer les achats',
    'cart.remove': 'Supprimer',
    'cart.quantity': 'Quantité',
    'cart.size': 'Taille',
    'cart.processing': 'Traitement...',
    
    // Favorites
    'favorites.title': 'Mes Favoris',
    'favorites.empty': 'Aucun favori',
    'favorites.emptyDesc': 'Ajoutez vos produits préférés ici',
    'favorites.addedToFavorites': 'Ajouté aux favoris !',
    'favorites.removedFromFavorites': 'Retiré des favoris',
    
    // Quote Request
    'quote.title': 'Demande de devis',
    'quote.desc': 'Remplissez ce formulaire et notre équipe vous contactera',
    'quote.name': 'Nom complet',
    'quote.email': 'Email',
    'quote.phone': 'Téléphone',
    'quote.company': 'Entreprise',
    'quote.project': 'Type de projet',
    'quote.message': 'Décrivez votre projet',
    'quote.submit': 'Envoyer la demande',
    'quote.success': 'Demande envoyée avec succès !',
    'quote.error': 'Erreur lors de l\'envoi',
    
    // Expert Consultation
    'expert.title': 'Consultation Expert',
    'expert.desc': 'Nos experts sont à votre écoute',
    'expert.appointment': 'Prendre rendez-vous',
    'expert.call': 'Appelez-nous',
    'expert.email': 'Envoyez-nous un email',
    
    // Footer
    'footer.about': 'À propos de FIMA',
    'footer.aboutDesc': 'Leader ouest-africain en literie et ameublement depuis 1985',
    'footer.contact': 'Nous contacter',
    'footer.followUs': 'Suivez-nous',
    'footer.newsletter': 'Newsletter',
    'footer.newsletterDesc': 'Inscrivez-vous pour recevoir nos offres',
    'footer.legal': 'Mentions légales',
    'footer.privacy': 'Politique de confidentialité',
    'footer.terms': 'Conditions générales',
    'footer.sitemap': 'Plan du site',
    'footer.careers': 'Carrières',
    'footer.copyright': '© 2025 Groupe FIMA. Tous droits réservés.',
    
    // Checkout
    'checkout.title': 'Finaliser la commande',
    'checkout.deliveryInfo': 'Informations de livraison',
    'checkout.paymentInfo': 'Informations de paiement',
    'checkout.orderSummary': 'Récapitulatif',
    'checkout.placeOrder': 'Confirmer la commande',
    
    // Account
    'account.dashboard': 'Mon tableau de bord',
    'account.orders': 'Mes commandes',
    'account.profile': 'Mon profil',
    'account.addresses': 'Mes adresses',
    'account.settings': 'Paramètres',
    
    // Projects
    'projects.title': 'Nos Projets',
    'projects.viewAll': 'Voir tous les projets',
    'projects.residential': 'Résidentiel',
    'projects.commercial': 'Commercial',
    'projects.hospitality': 'Hôtellerie',
    'projects.institutional': 'Institutionnel',
    
    // News & Blog
    'news.title': 'Actualités & Blog',
    'news.subtitle': 'Restez informé des dernières innovations, projets et tendances de l\'industrie du mobilier',
    'news.viewAll': 'Voir tous les articles',
    'news.viewMore': 'Voir plus d\'articles',
    'news.loading': 'Chargement des articles...',
    'news.readMore': 'Lire la suite',
    'news.filterBy': 'Filtrer par :',
    'news.category.all': 'Tous',
    'news.category.tendances': 'Tendances',
    'news.category.innovation': 'Innovation',
    'news.category.projets': 'Projets',
    'news.category.actualites': 'Actualités',
    'news.views': 'vues',
    'news.resultsCount': '{count} article{plural} dans la catégorie "{category}"',
    
    // Article Detail
    'article.notFound': 'Article introuvable',
    'article.backToArticles': 'Retour aux articles',
    'article.keywords': 'Mots-clés',
    'article.shareArticle': 'Partager cet article',
    'article.newsletter': 'Newsletter FIMA',
    'article.newsletterDesc': 'Recevez nos conseils par email.',
    'article.yourEmail': 'Votre email',
    'article.subscribe': 'S\'abonner',
    'article.usefulLinks': 'Liens utiles',
    'article.productCatalog': 'Catalogue produits',
    'article.freeQuote': 'Devis gratuit',
    'article.comments': 'Commentaires',
    'article.yourComment': 'Votre commentaire...',
    'article.post': 'Publier',
    'article.relatedArticles': 'Articles similaires',
    'article.needAdvice': 'Besoin de conseils personnalisés ?',
    'article.expertsHelp': 'Nos experts FIMA sont là pour vous accompagner.',
    'article.freeConsultation': 'Conseil gratuit',
    'article.viewProducts': 'Voir nos produits',
    
    // Common
    'common.back': 'Retour',
    'common.next': 'Suivant',
    'common.previous': 'Précédent',
    'common.save': 'Enregistrer',
    'common.cancel': 'Annuler',
    'common.delete': 'Supprimer',
    'common.edit': 'Modifier',
    'common.view': 'Voir',
    'common.close': 'Fermer',
    'common.loading': 'Chargement...',
    'common.error': 'Erreur',
    'common.success': 'Succès',
    'common.confirm': 'Confirmer',
    'common.yes': 'Oui',
    'common.no': 'Non',
    'common.or': 'ou',
    'common.and': 'et',
    'common.of': 'de',
    'common.in': 'dans',
    'common.from': 'à partir de',
    'common.to': 'à',
    'common.more': 'Plus',
    'common.less': 'Moins',
    'common.all': 'Tout',
    'common.none': 'Aucun',
    'common.search': 'Rechercher',
    'common.filter': 'Filtrer',
    'common.sort': 'Trier',
    'common.share': 'Partager',
    'common.download': 'Télécharger',
    'common.print': 'Imprimer',
  },
  
  EN: {
    // Navigation
    'nav.home': 'Home',
    'nav.products': 'Products',
    'nav.projects': 'Projects',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.account': 'My Account',
    'nav.cart': 'Cart',
    'nav.favorites': 'Favorites',
    'nav.login': 'Login',
    'nav.logout': 'Logout',
    'nav.signup': 'Sign Up',
    
    // Header
    'header.search': 'Search...',
    'header.searchPlaceholder': 'Search products...',
    'header.businessUnits': 'Our Services',
    'header.catalogue': 'Catalogue',
    'header.projects': 'Projects',
    
    // Business Units
    'business.fimaCouchage': 'FIMA Bedding',
    'business.fimaCouchage.desc': 'Bedding & Bedroom Furniture',
    'business.fimaDesign': 'FIMA Design',
    'business.fimaDesign.desc': 'Carpentry & Furniture',
    'business.universGlass': 'UNIVERS GLASS',
    'business.universGlass.desc': 'Glass & Aluminum',
    
    // Hero
    'hero.title': 'Comfort & Design since 1985',
    'hero.subtitle': 'West African leader in bedding, carpentry and glazing',
    'hero.cta.catalogue': 'Explore Catalogue',
    'hero.cta.quote': 'Request a Quote',
    'hero.cta.expert': 'Talk to an Expert',
    
    // Products
    'products.title': 'Our Products',
    'products.viewAll': 'View All Products',
    'products.addToCart': 'Add to Cart',
    'products.addedToCart': 'Added to Cart',
    'products.quickView': 'Quick View',
    'products.learnMore': 'Learn More',
    'products.inStock': 'In Stock',
    'products.outOfStock': 'Out of Stock',
    'products.newProduct': 'New',
    'products.bestseller': 'Bestseller',
    'products.discount': 'Sale',
    
    // Cart
    'cart.title': 'Cart',
    'cart.empty': 'Your cart is empty',
    'cart.emptyDesc': 'Add products to start shopping',
    'cart.subtotal': 'Subtotal',
    'cart.shipping': 'Shipping',
    'cart.shippingFree': 'Free Shipping',
    'cart.shippingCost': 'Shipping Cost',
    'cart.total': 'Total',
    'cart.checkout': 'Proceed to Checkout',
    'cart.continueShopping': 'Continue Shopping',
    'cart.remove': 'Remove',
    'cart.quantity': 'Quantity',
    'cart.size': 'Size',
    'cart.processing': 'Processing...',
    
    // Favorites
    'favorites.title': 'My Favorites',
    'favorites.empty': 'No favorites',
    'favorites.emptyDesc': 'Add your favorite products here',
    'favorites.addedToFavorites': 'Added to favorites!',
    'favorites.removedFromFavorites': 'Removed from favorites',
    
    // Quote Request
    'quote.title': 'Request a Quote',
    'quote.desc': 'Fill out this form and our team will contact you',
    'quote.name': 'Full Name',
    'quote.email': 'Email',
    'quote.phone': 'Phone',
    'quote.company': 'Company',
    'quote.project': 'Project Type',
    'quote.message': 'Describe your project',
    'quote.submit': 'Submit Request',
    'quote.success': 'Request sent successfully!',
    'quote.error': 'Error sending request',
    
    // Expert Consultation
    'expert.title': 'Expert Consultation',
    'expert.desc': 'Our experts are here to help',
    'expert.appointment': 'Schedule Appointment',
    'expert.call': 'Call Us',
    'expert.email': 'Email Us',
    
    // Footer
    'footer.about': 'About FIMA',
    'footer.aboutDesc': 'West African leader in bedding and furniture since 1985',
    'footer.contact': 'Contact Us',
    'footer.followUs': 'Follow Us',
    'footer.newsletter': 'Newsletter',
    'footer.newsletterDesc': 'Subscribe to receive our offers',
    'footer.legal': 'Legal Notice',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms & Conditions',
    'footer.sitemap': 'Sitemap',
    'footer.careers': 'Careers',
    'footer.copyright': '© 2025 FIMA Group. All rights reserved.',
    
    // Checkout
    'checkout.title': 'Complete Order',
    'checkout.deliveryInfo': 'Delivery Information',
    'checkout.paymentInfo': 'Payment Information',
    'checkout.orderSummary': 'Order Summary',
    'checkout.placeOrder': 'Place Order',
    
    // Account
    'account.dashboard': 'My Dashboard',
    'account.orders': 'My Orders',
    'account.profile': 'My Profile',
    'account.addresses': 'My Addresses',
    'account.settings': 'Settings',
    
    // Projects
    'projects.title': 'Our Projects',
    'projects.viewAll': 'View All Projects',
    'projects.residential': 'Residential',
    'projects.commercial': 'Commercial',
    'projects.hospitality': 'Hospitality',
    'projects.institutional': 'Institutional',
    
    // News & Blog
    'news.title': 'News & Blog',
    'news.subtitle': 'Stay informed about the latest innovations, projects and industry trends',
    'news.viewAll': 'View All Articles',
    'news.viewMore': 'View More Articles',
    'news.loading': 'Loading articles...',
    'news.readMore': 'Read More',
    'news.filterBy': 'Filter by:',
    'news.category.all': 'All',
    'news.category.tendances': 'Trends',
    'news.category.innovation': 'Innovation',
    'news.category.projets': 'Projects',
    'news.category.actualites': 'News',
    'news.views': 'views',
    'news.resultsCount': '{count} article{plural} in category "{category}"',
    
    // Article Detail
    'article.notFound': 'Article not found',
    'article.backToArticles': 'Back to articles',
    'article.keywords': 'Keywords',
    'article.shareArticle': 'Share this article',
    'article.newsletter': 'FIMA Newsletter',
    'article.newsletterDesc': 'Receive our tips by email.',
    'article.yourEmail': 'Your email',
    'article.subscribe': 'Subscribe',
    'article.usefulLinks': 'Useful links',
    'article.productCatalog': 'Product catalog',
    'article.freeQuote': 'Free quote',
    'article.comments': 'Comments',
    'article.yourComment': 'Your comment...',
    'article.post': 'Post',
    'article.relatedArticles': 'Related articles',
    'article.needAdvice': 'Need personalized advice?',
    'article.expertsHelp': 'Our FIMA experts are here to support you.',
    'article.freeConsultation': 'Free consultation',
    'article.viewProducts': 'View our products',
    
    // Common
    'common.back': 'Back',
    'common.next': 'Next',
    'common.previous': 'Previous',
    'common.save': 'Save',
    'common.cancel': 'Cancel',
    'common.delete': 'Delete',
    'common.edit': 'Edit',
    'common.view': 'View',
    'common.close': 'Close',
    'common.loading': 'Loading...',
    'common.error': 'Error',
    'common.success': 'Success',
    'common.confirm': 'Confirm',
    'common.yes': 'Yes',
    'common.no': 'No',
    'common.or': 'or',
    'common.and': 'and',
    'common.of': 'of',
    'common.in': 'in',
    'common.from': 'from',
    'common.to': 'to',
    'common.more': 'More',
    'common.less': 'Less',
    'common.all': 'All',
    'common.none': 'None',
    'common.search': 'Search',
    'common.filter': 'Filter',
    'common.sort': 'Sort',
    'common.share': 'Share',
    'common.download': 'Download',
    'common.print': 'Print',
  }
};

/**
 * Récupère une traduction selon la langue sélectionnée
 * @param key Clé de traduction
 * @param language Langue sélectionnée
 * @returns Texte traduit
 */
export function getTranslation(key: TranslationKey, language: LanguageCode = 'FR'): string {
  return translations[language][key] || translations.FR[key] || key;
}

/**
 * Alias court pour getTranslation
 */
export const t = getTranslation;
