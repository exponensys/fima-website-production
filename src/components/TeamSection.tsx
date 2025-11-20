import { ImageWithFallback } from './figma/ImageWithFallback';
import { useTeam } from '../hooks/useTeam';
import { useLanguage } from '../hooks/useLanguage';

interface TeamSectionProps {
  onNavigate?: (page: string) => void;
  onExpertClick?: (type: 'expert' | 'appointment') => void;
}

export function TeamSection({ onNavigate, onExpertClick }: TeamSectionProps) {
  const { selectedLanguage } = useLanguage();
  const { teamMembers, loading, error } = useTeam(
    selectedLanguage.toLowerCase() === 'en' ? 'en' : 'fr',
    true // activeOnly
  );

  // Loading state
  if (loading) {
    return (
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <div className="h-10 bg-gray-200 w-48 mx-auto mb-4 animate-pulse"></div>
            <div className="h-4 bg-gray-200 w-96 max-w-full mx-auto animate-pulse"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="bg-white p-4 md:p-6 shadow-lg animate-pulse">
                <div className="relative mb-4">
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-gray-200 mx-auto"></div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-6 bg-gray-200"></div>
                </div>
                <div className="text-center space-y-2">
                  <div className="h-4 bg-gray-200 mx-auto w-3/4"></div>
                  <div className="h-3 bg-gray-200 mx-auto w-1/2"></div>
                  <div className="h-3 bg-gray-200 mx-auto w-full"></div>
                  <div className="h-3 bg-gray-200 mx-auto w-2/3"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Error state
  if (error) {
    return (
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 style={{ fontFamily: 'Montserrat', color: '#000000' }}>
              {selectedLanguage.toLowerCase() === 'en' ? 'Our team' : 'Notre équipe'}
            </h2>
            <p className="mt-4" style={{ color: '#6E6E6E' }}>
              {selectedLanguage.toLowerCase() === 'en' 
                ? 'Unable to load team members at this time.' 
                : 'Impossible de charger les membres de l\'équipe pour le moment.'}
            </p>
          </div>
        </div>
      </section>
    );
  }

  // Empty state
  if (teamMembers.length === 0) {
    return (
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 style={{ fontFamily: 'Montserrat', color: '#000000' }}>
              {selectedLanguage.toLowerCase() === 'en' ? 'Our team' : 'Notre équipe'}
            </h2>
            <p className="mt-4" style={{ color: '#6E6E6E' }}>
              {selectedLanguage.toLowerCase() === 'en' 
                ? 'No team members available at this time.' 
                : 'Aucun membre de l\'équipe disponible pour le moment.'}
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 style={{ fontFamily: 'Montserrat', color: '#000000' }}>
            {selectedLanguage.toLowerCase() === 'en' ? 'Our team' : 'Notre équipe'}
          </h2>
          <p className="mt-4 max-w-2xl mx-auto" style={{ color: '#6E6E6E' }}>
            {selectedLanguage.toLowerCase() === 'en' 
              ? 'Meet the passionate experts who have made FIMA a leader in furniture and furnishings since 1985' 
              : 'Découvrez les experts passionnés qui font de FIMA un leader dans le mobilier et l\'ameublement depuis 1985'}
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {teamMembers.map((member) => {
            const name = selectedLanguage.toLowerCase() === 'en' ? member.nameEn : member.nameFr;
            const position = selectedLanguage.toLowerCase() === 'en' ? member.positionEn : member.positionFr;
            const description = selectedLanguage.toLowerCase() === 'en' ? member.descriptionEn : member.descriptionFr;
            const department = selectedLanguage.toLowerCase() === 'en' ? member.departmentEn : member.departmentFr;
            
            return (
              <div key={member.id} className="bg-white p-4 md:p-6 shadow-lg hover:shadow-xl transition-shadow">
                {/* Photo */}
                <div className="relative mb-4">
                  <ImageWithFallback
                    src={member.image}
                    alt={name}
                    className="w-20 h-20 md:w-24 md:h-24 mx-auto object-cover"
                  />
                  <div 
                    className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 px-2 md:px-3 py-1 text-xs"
                    style={{ backgroundColor: '#B5C233', color: '#6E6E6E' }}
                  >
                    {department}
                  </div>
                </div>

                {/* Info */}
                <div className="text-center">
                  <h4 style={{ fontFamily: 'Montserrat', color: '#000000', marginBottom: '8px' }}>
                    {name}
                  </h4>
                  <p className="text-sm mb-3" style={{ color: '#B5C233', fontWeight: '600' }}>
                    {position}
                  </p>
                  <p className="text-xs leading-relaxed" style={{ color: '#6E6E6E' }}>
                    {description}
                  </p>
                  
                  {/* Contact Email (optionnel) */}
                  {member.email && (
                    <div className="mt-3">
                      <a 
                        href={`mailto:${member.email}`}
                        className="text-xs hover:underline"
                        style={{ color: '#B5C233' }}
                      >
                        {selectedLanguage.toLowerCase() === 'en' ? 'Contact' : 'Contacter'}
                      </a>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-8 md:mt-12">
          <button
            onClick={() => onNavigate?.('careers')}
            className="inline-flex items-center gap-2 px-6 py-3 transition-colors"
            style={{ 
              backgroundColor: '#B5C233', 
              color: '#6E6E6E',
              fontFamily: 'Inter',
              fontWeight: '500'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#a3b030';
              e.currentTarget.style.color = '#6E6E6E';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#B5C233';
              e.currentTarget.style.color = '#6E6E6E';
            }}
          >
            {selectedLanguage.toLowerCase() === 'en' ? 'Join our team' : 'Rejoindre notre équipe'}
          </button>
        </div>

        {/* Admin indicator (en mode développement) */}
        {process.env.NODE_ENV === 'development' && (
          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-800 text-xs">
              <div className="w-2 h-2 bg-green-500 animate-pulse"></div>
              {selectedLanguage.toLowerCase() === 'en' 
                ? 'Data loaded dynamically from Supabase' 
                : 'Données chargées dynamiquement depuis Supabase'}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}