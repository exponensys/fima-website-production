// Types pour l'API Strapi simulée

export interface StrapiMedia {
  id: number;
  attributes: {
    name: string;
    alternativeText: string;
    caption: string;
    width: number;
    height: number;
    formats?: {
      thumbnail?: { url: string };
      small?: { url: string };
      medium?: { url: string };
      large?: { url: string };
    };
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl?: string;
    provider: string;
    provider_metadata?: any;
    createdAt: string;
    updatedAt: string;
  };
}

export interface StrapiCategory {
  id: number;
  attributes: {
    name: string;
    slug: string;
    description?: string;
    icon: string;
    featured: boolean;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}

export interface StrapiProduct {
  id: number;
  attributes: {
    title: string;
    slug: string;
    description: string;
    shortDescription?: string;
    price: number;
    originalPrice?: number;
    discount?: number;
    sku: string;
    stock: number;
    featured: boolean;
    bestSeller: boolean;
    new: boolean;
    rating: number;
    reviewsCount: number;
    specifications?: {
      firmness?: string;
      thickness?: string;
      materials?: string[];
      warranty?: string;
      trialPeriod?: string;
    };
    sizes: {
      name: string;
      price: number;
      originalPrice?: number;
      dimensions: string;
      available: boolean;
    }[];
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    image: {
      data: StrapiMedia;
    };
    gallery?: {
      data: StrapiMedia[];
    };
    category: {
      data: StrapiCategory;
    };
  };
}

export interface StrapiTestimonial {
  id: number;
  attributes: {
    name: string;
    location: string;
    avatar: string;
    rating: number;
    content: string;
    productName: string;
    verified: boolean;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    product?: {
      data: StrapiProduct;
    };
  };
}

export interface StrapiVideo {
  id: number;
  attributes: {
    title: string;
    description?: string;
    duration: string;
    videoId?: string;
    provider: 'youtube' | 'vimeo' | 'local';
    featured: boolean;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    thumbnail: {
      data: StrapiMedia;
    };
    video?: {
      data: StrapiMedia;
    };
  };
}

export interface StrapiHeroSlide {
  id: number;
  attributes: {
    title: string;
    subtitle?: string;
    description: string;
    ctaPrimary: string;
    ctaSecondary?: string;
    badge?: string;
    order: number;
    active: boolean;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    image: {
      data: StrapiMedia;
    };
  };
}

export interface StrapiCompanyInfo {
  id: number;
  attributes: {
    name: string;
    description: string;
    email: string;
    phone: string;
    address: string;
    socialMedia: {
      facebook?: string;
      instagram?: string;
      twitter?: string;
      linkedin?: string;
    };
    businessHours: {
      monday: string;
      tuesday: string;
      wednesday: string;
      thursday: string;
      friday: string;
      saturday: string;
      sunday: string;
    };
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}

export interface StrapiOrder {
  id: number;
  attributes: {
    orderNumber: string;
    status: 'pending' | 'confirmed' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
    totalAmount: number;
    shippingCost: number;
    currency: string;
    customerInfo: {
      firstName: string;
      lastName: string;
      email: string;
      phone: string;
    };
    shippingAddress: {
      street: string;
      city: string;
      postalCode: string;
      country: string;
    };
    billingAddress: {
      street: string;
      city: string;
      postalCode: string;
      country: string;
    };
    items: {
      productId: number;
      productName: string;
      size: string;
      quantity: number;
      unitPrice: number;
      totalPrice: number;
    }[];
    paymentMethod: string;
    paymentStatus: 'pending' | 'paid' | 'failed' | 'refunded';
    notes?: string;
    createdAt: string;
    updatedAt: string;
  };
}

// Types pour les réponses API
export interface StrapiResponse<T> {
  data: T;
  meta: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface StrapiCollectionResponse<T> {
  data: T[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

// Paramètres de requête Strapi
export interface StrapiQueryParams {
  populate?: string | string[];
  filters?: Record<string, any>;
  sort?: string | string[];
  pagination?: {
    page?: number;
    pageSize?: number;
    start?: number;
    limit?: number;
  };
  fields?: string[];
  locale?: string;
}