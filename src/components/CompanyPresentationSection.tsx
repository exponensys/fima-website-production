import { ArrowRight, Users, Building, Award, ExternalLink } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useCompanyPresentation } from "../hooks/useCompanyPresentation";
import { useLanguage } from "../hooks/useLanguage";

interface CompanyPresentationSectionProps {
  onNavigate?: (page: string) => void;
  onExpertClick?: (type: 'expert' | 'appointment') => void;
}

export function CompanyPresentationSection({ onNavigate, onExpertClick }: CompanyPresentationSectionProps) {
  const { selectedLanguage } = useLanguage();
  const { companyPresentation, loading, error } = useCompanyPresentation(
    selectedLanguage === 'en' ? 'en' : 'fr'
  );

  // Map icon names to components
  const iconMap: Record<string, typeof Building> = {
    Building,
    Users,
    Award
  };

  // Loading state
  if (loading) {
    return (
      <section className="py-20" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="h-8 bg-gray-200 w-40 mb-6 animate-pulse"></div>
              <div className="h-12 bg-gray-200 w-full mb-6 animate-pulse"></div>
              <div className="space-y-3 mb-8">
                <div className="h-4 bg-gray-200 w-full animate-pulse"></div>
                <div className="h-4 bg-gray-200 w-full animate-pulse"></div>
                <div className="h-4 bg-gray-200 w-3/4 animate-pulse"></div>
              </div>
              <div className="grid grid-cols-3 gap-6 mb-8">
                {Array.from({ length: 3 }).map((_, i) => (
                  <div key={i} className="text-center">
                    <div className="w-12 h-12 bg-gray-200 mx-auto mb-3 animate-pulse"></div>
                    <div className="h-6 bg-gray-200 w-16 mx-auto mb-1 animate-pulse"></div>
                    <div className="h-4 bg-gray-200 w-20 mx-auto animate-pulse"></div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gray-200 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Error state
  if (error || !companyPresentation) {
    return (
      <section className="py-20" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container mx-auto px-4">
          <div className="text-center py-12">
            <p style={{ color: '#6E6E6E' }}>
              {selectedLanguage === 'en' 
                ? 'Unable to load company information at this time.' 
                : 'Impossible de charger les informations de l\'entreprise pour le moment.'}
            </p>
          </div>
        </div>
      </section>
    );
  }

  // Get localized content
  const tagline = selectedLanguage === 'en' ? companyPresentation.taglineEn : companyPresentation.taglineFr;
  const title = selectedLanguage === 'en' ? companyPresentation.titleEn : companyPresentation.titleFr;
  const description = selectedLanguage === 'en' ? companyPresentation.descriptionEn : companyPresentation.descriptionFr;
  const badgeTitle = selectedLanguage === 'en' ? companyPresentation.badgeTitleEn : companyPresentation.badgeTitleFr;
  const badgeSubtitle = selectedLanguage === 'en' ? companyPresentation.badgeSubtitleEn : companyPresentation.badgeSubtitleFr;
  const statsLabel = selectedLanguage === 'en' ? companyPresentation.statsLabelEn : companyPresentation.statsLabelFr;
  const ctaB2BText = selectedLanguage === 'en' ? companyPresentation.ctaB2BTextEn : companyPresentation.ctaB2BTextFr;
  const ctaQuoteText = selectedLanguage === 'en' ? companyPresentation.ctaQuoteTextEn : companyPresentation.ctaQuoteTextFr;
  const solutionsTitle = selectedLanguage === 'en' ? 'Our B2B solutions' : 'Nos solutions B2B';

  // Filter and sort services
  const activeServices = companyPresentation.services
    .filter(s => s.published)
    .sort((a, b) => a.order - b.order);

  // Get featured testimonial
  const featuredTestimonial = companyPresentation.testimonials
    .find(t => t.featured && t.published);

  return (
    <section className="py-12 md:py-20" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Contenu texte */}
          <div>
            <div 
              className="inline-block px-4 py-2 text-sm mb-4 md:mb-6"
              style={{ backgroundColor: '#B5C233', color: '#6E6E6E' }}
            >
              {tagline}
            </div>
            
            <h2 className="mb-4 md:mb-6" style={{ fontFamily: 'Montserrat', color: '#000000' }}>
              {title}
            </h2>
            
            <p className="mb-6 md:mb-8 text-base md:text-lg" style={{ color: '#6E6E6E' }}>
              {description}
            </p>

            {/* Points clés */}
            <div className="grid grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
              {companyPresentation.highlights.map((highlight, index) => {
                const Icon = iconMap[highlight.iconName] || Building;
                const label = selectedLanguage === 'en' ? highlight.labelEn : highlight.labelFr;
                
                return (
                  <div key={index} className="text-center">
                    <div 
                      className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 mb-2 md:mb-3"
                      style={{ backgroundColor: '#B5C233' }}
                    >
                      <Icon className="w-5 h-5 md:w-6 md:h-6" style={{ color: '#6E6E6E' }} />
                    </div>
                    <div className="text-lg md:text-xl mb-1" style={{ fontFamily: 'Montserrat', color: '#E30613' }}>
                      {highlight.value}
                    </div>
                    <div className="text-xs md:text-sm" style={{ color: '#6E6E6E' }}>
                      {label}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Services B2B */}
            <div className="bg-white p-4 md:p-6 mb-6 md:mb-8 border" style={{ borderColor: '#C0C0C0' }}>
              <h4 className="mb-3 md:mb-4" style={{ fontFamily: 'Montserrat', color: '#000000' }}>
                {solutionsTitle}
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 text-sm">
                {activeServices.map((service) => {
                  const serviceTitle = selectedLanguage === 'en' ? service.titleEn : service.titleFr;
                  
                  return (
                    <div key={service.id} className="flex items-center gap-2">
                      <div className="w-2 h-2 flex-shrink-0" style={{ backgroundColor: '#B5C233' }}></div>
                      <span style={{ color: '#6E6E6E' }}>{serviceTitle}</span>
                    </div>
                  );
                })}
              </div>
            </div>
            
            {/* CTA vers site B2B */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <button 
                className="px-6 md:px-8 py-3 md:py-4 text-base md:text-lg transition-all hover:shadow-lg flex items-center justify-center gap-2 md:gap-3"
                style={{ backgroundColor: '#6E6E6E', color: '#B5C233' }}
                onMouseEnter={(e) => {
                  const target = e.target as HTMLButtonElement;
                  target.style.backgroundColor = '#5a5a5a';
                }}
                onMouseLeave={(e) => {
                  const target = e.target as HTMLButtonElement;
                  target.style.backgroundColor = '#6E6E6E';
                }}
                onClick={() => window.open(companyPresentation.ctaB2BUrl, '_blank')}
              >
                <span>{ctaB2BText}</span>
                <ExternalLink className="w-4 h-4 md:w-5 md:h-5" />
              </button>
              <button 
                className="px-6 md:px-8 py-3 md:py-4 text-base md:text-lg border-2 transition-all hover:shadow-lg flex items-center justify-center gap-2 md:gap-3"
                style={{ borderColor: '#B5C233', color: '#B5C233' }}
                onMouseEnter={(e) => {
                  const target = e.target as HTMLButtonElement;
                  target.style.backgroundColor = '#B5C233';
                  target.style.color = '#6E6E6E';
                }}
                onMouseLeave={(e) => {
                  const target = e.target as HTMLButtonElement;
                  target.style.backgroundColor = 'transparent';
                  target.style.color = '#B5C233';
                }}
                onClick={() => onExpertClick?.('expert')}
              >
                <span>{ctaQuoteText}</span>
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
              </button>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative">
            <ImageWithFallback 
              src={companyPresentation.imageUrl}
              alt={title}
              className="w-full h-64 md:h-96 object-cover"
            />
            
            {/* Badge flottant */}
            <div className="absolute top-4 md:top-6 left-4 md:left-6 bg-white/95 backdrop-blur-sm px-3 md:px-4 py-2 md:py-3 shadow-sm">
              <div className="flex items-center gap-2 md:gap-3">
                <div 
                  className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center"
                  style={{ backgroundColor: '#B5C233' }}
                >
                  <Building className="w-4 h-4 md:w-5 md:h-5" style={{ color: '#6E6E6E' }} />
                </div>
                <div>
                  <div className="text-xs md:text-sm" style={{ color: '#000000' }}>
                    {badgeTitle}
                  </div>
                  <div className="text-xs" style={{ color: '#6E6E6E' }}>
                    {badgeSubtitle}
                  </div>
                </div>
              </div>
            </div>

            {/* Statistique flottante */}
            <div className="absolute bottom-4 md:bottom-6 right-4 md:right-6 bg-white/95 backdrop-blur-sm px-4 md:px-6 py-3 md:py-4 shadow-sm text-center">
              <div className="text-xl md:text-2xl mb-1" style={{ fontFamily: 'Montserrat', color: '#E30613' }}>
                {companyPresentation.statsValue}
              </div>
              <div className="text-xs md:text-sm" style={{ color: '#6E6E6E' }}>
                {statsLabel}
              </div>
            </div>
          </div>
        </div>

        {/* Section témoignage */}
        {featuredTestimonial && (
          <div className="mt-12 md:mt-16 text-center">
            <div className="bg-white p-6 md:p-8 max-w-4xl mx-auto shadow-sm border" style={{ borderColor: '#C0C0C0' }}>
              <div className="mb-4 md:mb-6">
                <div className="text-3xl md:text-4xl mb-3 md:mb-4">{featuredTestimonial.iconEmoji || '🏨'}</div>
                <blockquote className="text-base md:text-lg italic mb-3 md:mb-4" style={{ color: '#6E6E6E' }}>
                  "{selectedLanguage === 'en' ? featuredTestimonial.quoteEn : featuredTestimonial.quoteFr}"
                </blockquote>
                <cite style={{ color: '#000000' }}>
                  {featuredTestimonial.authorName}, {selectedLanguage === 'en' ? featuredTestimonial.authorTitleEn : featuredTestimonial.authorTitleFr} - {featuredTestimonial.companyName}
                </cite>
              </div>
              <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4 text-xs md:text-sm" style={{ color: '#6E6E6E' }}>
                <span>{'⭐'.repeat(featuredTestimonial.rating)}</span>
                {featuredTestimonial.clientSince && (
                  <>
                    <span>•</span>
                    <span>{selectedLanguage === 'en' ? 'Client since' : 'Client depuis'} {featuredTestimonial.clientSince}</span>
                  </>
                )}
                {featuredTestimonial.projectsInfo && (
                  <>
                    <span>•</span>
                    <span>{featuredTestimonial.projectsInfo}</span>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
