/**
 * Types TypeScript pour FIMA CMS
 * Structure complète de la base de données
 */

// ============================================================================
// BLOGS
// ============================================================================

export interface Blog {
  id: string;
  titleFr: string;
  titleEn: string;
  slug: string;
  summaryFr: string;
  summaryEn: string;
  contentFr: string;
  contentEn: string;
  author: string;
  category: string;
  tags: string[];
  featuredImage: string;
  published: boolean;
  publishedDate?: string;
  createdAt: string;
  updatedAt?: string;
  readTime: number;
  views?: number;
  likes?: number;
}

// ============================================================================
// E-COMMERCE
// ============================================================================

export interface ProductVariant {
  id: string;
  name: string;
  sku: string;
  price: number;
  stock: number;
  attributes: {
    [key: string]: string;
  };
}

export interface Product {
  id: string;
  name: string;
  sku: string;
  category: string;
  price: number;
  compareAtPrice?: number;
  stock: number;
  lowStockThreshold?: number;
  unit: string;
  description: string;
  shortDescription?: string;
  supplier?: string;
  supplierSku?: string;
  minOrder?: number;
  maxOrder?: number;
  images: string[];
  variants?: ProductVariant[];
  weight?: number;
  dimensions?: {
    length: number;
    width: number;
    height: number;
  };
  tags?: string[];
  featured?: boolean;
  status: 'active' | 'inactive' | 'out_of_stock';
  seo?: {
    title?: string;
    description?: string;
    keywords?: string[];
  };
  createdAt: string;
  updatedAt?: string;
}

export interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  type: 'B2B' | 'B2C';
  companyName?: string;
  companyRegistration?: string;
  taxId?: string;
  address?: string;
  address2?: string;
  city?: string;
  region?: string;
  postalCode?: string;
  country: string;
  totalOrders: number;
  totalSpent: number;
  lastOrderDate?: string;
  averageOrderValue?: number;
  status: 'active' | 'inactive' | 'suspended';
  customerGroup?: string;
  discount?: number;
  creditLimit?: number;
  paymentTerms?: string;
  newsletter?: boolean;
  tags?: string[];
  notes?: string;
  createdAt: string;
  updatedAt?: string;
}

export interface OrderItem {
  id: string;
  productId: string;
  variantId?: string;
  name: string;
  sku: string;
  quantity: number;
  price: number;
  total: number;
  image?: string;
  attributes?: {
    [key: string]: string;
  };
}

export interface ShippingAddress {
  name: string;
  phone: string;
  address: string;
  address2?: string;
  city: string;
  region?: string;
  postalCode?: string;
  country: string;
  instructions?: string;
}

export interface BillingAddress {
  name: string;
  address: string;
  city: string;
  country: string;
}

export interface Order {
  id: string;
  orderNumber: string;
  customerId: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  items: OrderItem[];
  subtotal: number;
  discount: number;
  tax: number;
  shipping: number;
  total: number;
  status: 'pending' | 'confirmed' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  paymentStatus: 'pending' | 'paid' | 'failed' | 'refunded';
  fulfillmentStatus: 'unfulfilled' | 'partially_fulfilled' | 'fulfilled';
  paymentMethod: 'mobile_money' | 'card' | 'bank_transfer' | 'cash' | 'credit';
  paymentProvider?: string;
  paymentReference?: string;
  paidAt?: string;
  shippingAddress: ShippingAddress;
  billingAddress?: BillingAddress;
  shippingMethod?: string;
  estimatedDelivery?: string;
  actualDelivery?: string;
  trackingNumber?: string;
  notes?: string;
  internalNotes?: string;
  source?: string;
  tags?: string[];
  createdAt: string;
  updatedAt?: string;
  confirmedAt?: string;
  shippedAt?: string;
  deliveredAt?: string;
  cancelledAt?: string;
}

// ============================================================================
// CONTENU DYNAMIQUE
// ============================================================================

export interface Project {
  id: string;
  titleFr: string;
  titleEn: string;
  slug?: string;
  descriptionFr: string;
  descriptionEn: string;
  client: string;
  clientLogo?: string;
  category: string;
  status: 'En cours' | 'Terminé' | 'Suspendu' | 'Planifié';
  startDate: string;
  endDate?: string;
  estimatedEndDate?: string;
  budget?: number;
  actualCost?: number;
  team: string[];
  projectManager?: string;
  technologies: string[];
  images: string[];
  videoUrl?: string;
  featured?: boolean;
  tags?: string[];
  results?: {
    fr: string;
    en: string;
  };
  testimonial?: string;
  createdAt: string;
  updatedAt?: string;
}

export interface Testimonial {
  id: string;
  clientName: string;
  clientPosition: string;
  clientCompany: string;
  clientLocation: string;
  clientPhoto?: string;
  testimonialFr: string;
  testimonialEn: string;
  rating: 1 | 2 | 3 | 4 | 5;
  project?: string;
  projectId?: string;
  category: string;
  featured?: boolean;
  published: boolean;
  publishedDate?: string;
  videoUrl?: string;
  createdAt: string;
  updatedAt?: string;
}

export interface Career {
  id: string;
  title: {
    fr: string;
    en: string;
  };
  description: {
    fr: string;
    en: string;
  };
  requirements: {
    fr: string;
    en: string;
  };
  responsibilities: {
    fr: string;
    en: string;
  };
  benefits: {
    fr: string;
    en: string;
  };
  location: string;
  contract: 'CDI' | 'CDD' | 'Stage' | 'Freelance' | 'Temps partiel';
  salary?: string;
  department: string;
  experience: string;
  education?: string;
  status: 'Actif' | 'Fermé' | 'Pourvue' | 'Brouillon';
  openings?: number;
  publishDate?: string;
  closingDate?: string;
  primaryLanguage: 'fr' | 'en';
  applicationUrl?: string;
  applicationEmail?: string;
  createdAt: string;
  updatedAt?: string;
}

export interface BedtimeStory {
  id: string;
  titleFr: string;
  titleEn: string;
  summaryFr: string;
  summaryEn: string;
  contentFr: string;
  contentEn: string;
  author: string;
  ageCategory: string;
  theme: string;
  readingTime: number;
  coverImage: string;
  audioUrl?: string;
  tags: string[];
  published: boolean;
  publishedDate?: string;
  views?: number;
  likes?: number;
  createdAt: string;
  updatedAt?: string;
}

export interface VideoStory {
  id: string;
  titleFr: string;
  titleEn: string;
  descriptionFr: string;
  descriptionEn: string;
  thumbnailUrl: string;
  videoUrl: string;
  duration: number;
  category: string;
  tags: string[];
  published: boolean;
  publishedDate?: string;
  views?: number;
  likes?: number;
  createdAt: string;
  updatedAt?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  position: {
    fr: string;
    en: string;
  };
  bio: {
    fr: string;
    en: string;
  };
  email?: string;
  phone?: string;
  photo: string;
  social?: {
    linkedin?: string;
    twitter?: string;
    github?: string;
    facebook?: string;
  };
  department: string;
  order?: number;
  featured?: boolean;
  skills?: string[];
  status: 'active' | 'inactive';
  createdAt: string;
  updatedAt?: string;
}

// ============================================================================
// PAGES
// ============================================================================

export interface CustomPage {
  id: string;
  title: {
    fr: string;
    en: string;
  };
  slug: string;
  content: {
    fr: string;
    en: string;
  };
  seo: {
    titleFr?: string;
    titleEn?: string;
    descriptionFr?: string;
    descriptionEn?: string;
    keywords?: string[];
    ogImage?: string;
  };
  template?: string;
  layout?: 'full' | 'sidebar' | 'centered';
  published: boolean;
  publishedDate?: string;
  createdAt: string;
  updatedAt?: string;
  author?: string;
}

export interface StaticPageSection {
  id: string;
  type: string;
  data: any;
}

export interface StaticPage {
  id: string;
  type: 'about' | 'contact' | 'privacy' | 'terms' | 'faq' | 'services' | string;
  content: {
    fr: string;
    en: string;
  };
  sections?: StaticPageSection[];
  seo: {
    titleFr?: string;
    titleEn?: string;
    descriptionFr?: string;
    descriptionEn?: string;
  };
  updatedAt?: string;
  updatedBy?: string;
}

// ============================================================================
// CONFIGURATION
// ============================================================================

export interface Language {
  code: string;
  name: string;
  nativeName: string;
  isDefault: boolean;
  isActive: boolean;
  flag?: string;
  direction?: 'ltr' | 'rtl';
}

// ============================================================================
// HOMEPAGE SECTIONS
// ============================================================================

export interface HeroSection {
  titleFr: string;
  titleEn: string;
  subtitleFr: string;
  subtitleEn: string;
  ctaTextFr: string;
  ctaTextEn: string;
  ctaLink: string;
  backgroundImage: string;
  videoUrl?: string;
}

export interface AboutSection {
  titleFr: string;
  titleEn: string;
  contentFr: string;
  contentEn: string;
  image: string;
  stats?: Array<{
    labelFr: string;
    labelEn: string;
    value: string;
  }>;
}

export interface TestimonialsHomepage {
  titleFr: string;
  titleEn: string;
  featuredIds: string[];
  displayCount: number;
}

export interface CTASection {
  titleFr: string;
  titleEn: string;
  descriptionFr: string;
  descriptionEn: string;
  buttonTextFr: string;
  buttonTextEn: string;
  buttonLink: string;
  backgroundImage?: string;
  backgroundColor?: string;
}

export interface ProductCardsSection {
  titleFr: string;
  titleEn: string;
  featuredProductIds: string[];
  displayCount: number;
  showPrice: boolean;
  showAddToCart: boolean;
}

export interface ProductCategoriesSection {
  titleFr: string;
  titleEn: string;
  categories: Array<{
    id: string;
    nameFr: string;
    nameEn: string;
    image: string;
    slug: string;
    productCount?: number;
  }>;
}

export interface NewsHomepageSection {
  titleFr: string;
  titleEn: string;
  featuredBlogIds: string[];
  displayCount: number;
}

export interface NewsletterSection {
  titleFr: string;
  titleEn: string;
  descriptionFr: string;
  descriptionEn: string;
  placeholderFr: string;
  placeholderEn: string;
  buttonTextFr: string;
  buttonTextEn: string;
  backgroundImage?: string;
}

export interface CardMetersSection {
  titleFr: string;
  titleEn: string;
  cards: Array<{
    id: string;
    labelFr: string;
    labelEn: string;
    value: string;
    icon?: string;
    color?: string;
  }>;
}

// ============================================================================
// ANALYTICS & REPORTS
// ============================================================================

export interface AnalyticsData {
  period: 'day' | 'week' | 'month' | 'year';
  startDate: string;
  endDate: string;
  metrics: {
    totalRevenue: number;
    totalOrders: number;
    averageOrderValue: number;
    totalCustomers: number;
    newCustomers: number;
    pageViews: number;
    conversionRate: number;
  };
  charts?: {
    revenueByDay?: Array<{ date: string; value: number }>;
    ordersByStatus?: Array<{ status: string; count: number }>;
    topProducts?: Array<{ productId: string; name: string; sales: number }>;
    customersByType?: Array<{ type: 'B2B' | 'B2C'; count: number }>;
  };
}

// ============================================================================
// SETTINGS
// ============================================================================

export interface SiteSettings {
  siteName: {
    fr: string;
    en: string;
  };
  siteDescription: {
    fr: string;
    en: string;
  };
  logo: string;
  favicon: string;
  primaryColor: string;
  secondaryColor: string;
  contactEmail: string;
  contactPhone: string;
  socialMedia: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    linkedin?: string;
    youtube?: string;
  };
  googleAnalyticsId?: string;
  facebookPixelId?: string;
  currencies: Array<{
    code: string;
    symbol: string;
    name: string;
  }>;
  defaultCurrency: string;
  timezone: string;
  dateFormat: string;
  timeFormat: string;
}

export interface PaymentGateway {
  id: string;
  name: string;
  provider: 'orange_money' | 'mtn_money' | 'moov_money' | 'wave' | 'stripe' | 'paypal';
  enabled: boolean;
  mode: 'test' | 'live';
  credentials: {
    [key: string]: string;
  };
  supportedMethods: string[];
  fees?: {
    percentage?: number;
    fixed?: number;
  };
  minAmount?: number;
  maxAmount?: number;
}

export interface ShippingMethod {
  id: string;
  name: {
    fr: string;
    en: string;
  };
  description: {
    fr: string;
    en: string;
  };
  enabled: boolean;
  price: number;
  freeShippingThreshold?: number;
  estimatedDays: {
    min: number;
    max: number;
  };
  zones?: string[];
}

// ============================================================================
// USER & PERMISSIONS
// ============================================================================

export interface AdminUser {
  id: string;
  email: string;
  name: string;
  role: string;
  avatar?: string;
  permissions?: string[];
  lastLogin?: string;
  createdAt: string;
  updatedAt?: string;
}

export interface Role {
  id: string;
  name: string;
  description?: string;
  permissions: string[];
  createdAt: string;
  updatedAt?: string;
}

export interface Permission {
  id: string;
  name: string;
  resource: string;
  action: 'create' | 'read' | 'update' | 'delete' | 'manage';
  description?: string;
}

// ============================================================================
// UTILITIES
// ============================================================================

export type LocalizedContent<T> = {
  fr: T;
  en: T;
};

export type Status = 'active' | 'inactive' | 'draft' | 'archived';

export type DateRange = {
  startDate: string;
  endDate: string;
};

export type PaginatedResponse<T> = {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
};

export type ApiResponse<T> = {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
};

// ============================================================================
// FORM DATA TYPES (pour les créations/mises à jour)
// ============================================================================

export type CreateBlogInput = Omit<Blog, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateBlogInput = Partial<CreateBlogInput>;

export type CreateProductInput = Omit<Product, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductInput = Partial<CreateProductInput>;

export type CreateCustomerInput = Omit<Customer, 'id' | 'createdAt' | 'updatedAt' | 'totalOrders' | 'totalSpent'>;
export type UpdateCustomerInput = Partial<CreateCustomerInput>;

export type CreateOrderInput = Omit<Order, 'id' | 'orderNumber' | 'createdAt' | 'updatedAt'>;
export type UpdateOrderInput = Partial<CreateOrderInput>;

// ============================================================================
// EXPORTS
// ============================================================================

export default {
  Blog,
  Product,
  Customer,
  Order,
  Project,
  Testimonial,
  Career,
  BedtimeStory,
  VideoStory,
  TeamMember,
  CustomPage,
  StaticPage,
  Language,
  HeroSection,
  AboutSection,
  TestimonialsHomepage,
  CTASection,
  AnalyticsData,
  SiteSettings,
  PaymentGateway,
  ShippingMethod,
  AdminUser,
  Role,
  Permission,
};
