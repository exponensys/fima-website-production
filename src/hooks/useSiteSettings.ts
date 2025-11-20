import { useState, useEffect } from 'react';
import { projectId, publicAnonKey } from '../utils/supabase/info';

export interface Language {
  code: string;
  name: string;
  flag: string;
}

export interface Currency {
  code: string;
  symbol: string;
  name: string;
}

export interface SocialLinks {
  facebook: string;
  instagram: string;
  linkedin: string;
  twitter: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  address: string;
  hours: string;
}

export interface SiteSettings {
  languages: Language[];
  currencies: Currency[];
  company_description: string;
  certifications: string[];
  social_links: SocialLinks;
  contact_info: ContactInfo;
}

// Données de fallback locales
const DEFAULT_SETTINGS: SiteSettings = {
  languages: [
    { code: "FR", name: "Français", flag: "🇫🇷" },
    { code: "EN", name: "English", flag: "🇬🇧" }
  ],
  currencies: [
    { code: "XOF", symbol: "F CFA", name: "Franc CFA" },
    { code: "EUR", symbol: "€", name: "Euro" },
    { code: "USD", symbol: "$", name: "US Dollar" },
    { code: "GBP", symbol: "£", name: "British Pound" }
  ],
  company_description: "Leader dans la litterie, l'ameublement et la vitrerie depuis plus de 40 ans. FIMA accompagne les professionnels et les particuliers avec expertise et innovation.",
  certifications: [
    "Entreprise du Patrimoine Vivant",
    "Certifié ISO 9001"
  ],
  social_links: {
    facebook: "#",
    instagram: "#",
    linkedin: "#",
    twitter: "#"
  },
  contact_info: {
    email: "contact@fima.ci",
    phone: "+225 27 22 12 34 56",
    address: "Zone Industrielle, Abidjan, Côte d'Ivoire",
    hours: "Lun-Ven: 8h-18h, Sam: 9h-13h"
  }
};

export const useSiteSettings = (key?: string) => {
  const [settings, setSettings] = useState<SiteSettings | any>(
    key ? DEFAULT_SETTINGS[key as keyof SiteSettings] : DEFAULT_SETTINGS
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // TOUJOURS utiliser les données locales (pas d'appel API)
    // Les données Supabase ne sont pas configurées, donc on utilise les fallbacks
    console.log('📊 useSiteSettings: Utilisation des données locales');
    
    if (key) {
      setSettings(DEFAULT_SETTINGS[key as keyof SiteSettings]);
    } else {
      setSettings(DEFAULT_SETTINGS);
    }
    setError(null);
    setLoading(false);
  }, [key]);

  return { settings, loading, error };
};

// Hook spécialisé pour les langues
export const useLanguages = () => {
  const { settings, loading, error } = useSiteSettings('languages');
  return { languages: settings as Language[], loading, error };
};

// Hook spécialisé pour les devises
export const useCurrencies = () => {
  const { settings, loading, error } = useSiteSettings('currencies');
  return { currencies: settings as Currency[], loading, error };
};

// Hook spécialisé pour la description de l'entreprise
export const useCompanyDescription = () => {
  const { settings, loading, error } = useSiteSettings('company_description');
  return { description: settings as string, loading, error };
};

// Hook spécialisé pour les certifications
export const useCertifications = () => {
  const { settings, loading, error } = useSiteSettings('certifications');
  return { certifications: settings as string[], loading, error };
};

// Hook spécialisé pour les liens sociaux
export const useSocialLinks = () => {
  const { settings, loading, error } = useSiteSettings('social_links');
  return { socialLinks: settings as SocialLinks, loading, error };
};

// Hook spécialisé pour les informations de contact
export const useContactInfo = () => {
  const { settings, loading, error } = useSiteSettings('contact_info');
  return { contactInfo: settings as ContactInfo, loading, error };
};
