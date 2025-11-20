// Types Supabase pour FIMA
// Générés à partir du schéma de base de données

export type LanguageCode = 'fr' | 'en';
export type BusinessType = 'b2c' | 'b2b' | 'both';
export type CompanySize = 'startup' | 'sme' | 'enterprise';
export type QuoteStatus = 'pending' | 'processing' | 'completed' | 'cancelled';
export type ConsultationType = 'expert' | 'appointment';
export type ConsultationStatus = 'pending' | 'scheduled' | 'completed' | 'cancelled';
export type SocialProofType = 'testimonial' | 'case_study' | 'certification';

// Profile
export interface Profile {
  id: string;
  user_id: string;
  business_type: BusinessType;
  company_name?: string;
  company_size?: CompanySize;
  annual_revenue?: number;
  preferred_currency: string;
  preferred_language: LanguageCode;
  created_at: string;
  updated_at: string;
}

// Business Units
export interface BusinessUnit {
  id: string;
  slug: string;
  primary_color: string;
  icon_name: string;
  created_at: string;
}

export interface BusinessUnitI18n {
  id: string;
  business_unit_id: string;
  locale: LanguageCode;
  name: string;
  description: string;
}

export interface BusinessUnitWithTranslation extends BusinessUnit {
  translation: BusinessUnitI18n;
}

// Products
export interface Product {
  id: string;
  business_unit_id: string;
  slug: string;
  price_eur: number;
  price_fcfa: number;
  is_b2b_only: boolean;
  minimum_order_qty: number;
  images: string[];
  specifications: Record<string, any>;
  created_at: string;
  updated_at: string;
}

export interface ProductI18n {
  id: string;
  product_id: string;
  locale: LanguageCode;
  name: string;
  description: string;
  category: string;
  subcategory?: string;
  specifications_translated: Record<string, any>;
}

export interface ProductWithTranslation extends Product {
  translation: ProductI18n;
  business_unit?: BusinessUnitWithTranslation;
}

// Quotes
export interface Quote {
  id: string;
  user_id: string;
  business_unit_id: string;
  status: QuoteStatus;
  estimated_budget?: number;
  contact_preferences: Record<string, any>;
  preferred_language: LanguageCode;
  created_at: string;
  updated_at: string;
}

export interface QuoteI18n {
  id: string;
  quote_id: string;
  locale: LanguageCode;
  project_type: string;
  requirements: string;
}

export interface QuoteWithTranslation extends Quote {
  translation: QuoteI18n;
  business_unit?: BusinessUnitWithTranslation;
}

// Expert Consultations
export interface ExpertConsultation {
  id: string;
  user_id: string;
  business_unit_id: string;
  consultation_type: ConsultationType;
  preferred_datetime?: string;
  topic: string;
  description: string;
  status: ConsultationStatus;
  created_at: string;
}

// Social Proofs
export interface SocialProof {
  id: string;
  type: SocialProofType;
  business_unit_id?: string;
  client_name: string;
  client_location: string;
  rating: number;
  project_value?: number;
  completion_date?: string;
  images: string[];
  is_featured: boolean;
  created_at: string;
}

export interface SocialProofI18n {
  id: string;
  social_proof_id: string;
  locale: LanguageCode;
  content: string;
}

export interface SocialProofWithTranslation extends SocialProof {
  translation: SocialProofI18n;
  business_unit?: BusinessUnitWithTranslation;
}

// API Response Types
export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    total: number;
    offset: number;
    limit: number;
  };
  locale: LanguageCode;
}

// Filter Types
export interface ProductFilters {
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  businessUnit?: string;
  limit?: number;
  offset?: number;
  locale?: LanguageCode;
}

export interface SocialProofFilters {
  location?: string;
  businessUnit?: string;
  type?: SocialProofType;
  featuredOnly?: boolean;
  locale?: LanguageCode;
}

// Dashboard Stats
export interface BusinessStats {
  period: '7_days' | 'current_month' | 'current_year';
  total_quotes: number;
  pending_quotes: number;
  completed_quotes: number;
  total_revenue_potential: number;
  consultations_scheduled: number;
  by_business_unit: Record<string, {
    quotes: number;
    revenue_potential: number;
  }>;
}

// Hero Slides
export interface HeroSlide {
  id: string;
  sort_order: number;
  background_image_url: string;
  is_video: boolean;
  video_url?: string;
  slide_duration: number;
  video_play_duration?: number;
  video_loop: boolean;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface HeroSlideI18n {
  id: string;
  hero_slide_id: string;
  locale: LanguageCode;
  title: string;
  subtitle: string;
  description: string;
  cta_primary: string;
  badge: string;
}

export interface HeroSlideWithTranslation extends HeroSlide {
  translation: HeroSlideI18n;
}
