import { useState, useEffect } from 'react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { projectId, publicAnonKey } from '../../utils/supabase/info';

interface TeamSectionProps {
  onNavigate?: (page: string) => void;
}

interface TeamMember {
  id: number;
  name: string;
  position: string;
  description: string;
  image: string;
  department: string;
}

export function EnhancedTeamSection({ onNavigate }: TeamSectionProps) {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchTeamMembers();
  }, []);

  const fetchTeamMembers = async () => {
    try {
      setLoading(true);
      const response = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-98c6ec1c/team`, {
        headers: {
          'Authorization': `Bearer ${publicAnonKey}`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch team members');
      }

      const data = await response.json();
      if (data.success) {
        setTeamMembers(data.data);
      } else {
        // Si pas de données, initialiser avec les données par défaut
        await initializeDefaultData();
        await fetchTeamMembers();
      }
    } catch (err) {
      console.error('Error fetching team members:', err);
      setError('Erreur lors du chargement de l\'équipe');
      // Fallback avec données statiques
      setTeamMembers([
        {
          id: 1,
          name: "Marie Dubois",
          position: "Directrice Générale",
          description: "25 ans d'expérience dans l'industrie du mobilier et de l'ameublement",
          image: "https://images.unsplash.com/photo-1709715357519-2a84f9765e57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHdvbWFuJTIwZXhlY3V0aXZlfGVufDF8fHx8MTc1NjAwODc5OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          department: "Direction"
        },
        {
          id: 2,
          name: "Jean-Pierre Martin",
          position: "Responsable Commercial",
          description: "Expert en solutions B2B pour l'hôtellerie et les collectivités",
          image: "https://images.unsplash.com/photo-1629507208649-70919ca33793?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1hbiUyMHN1aXQlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzU1OTYxMjA2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          department: "Commercial"
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const initializeDefaultData = async () => {
    try {
      await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-98c6ec1c/init-data`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${publicAnonKey}`,
          'Content-Type': 'application/json',
        },
      });
    } catch (err) {
      console.error('Error initializing data:', err);
    }
  };

  if (loading) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="w-16 h-16 border-4 rounded-full animate-spin mx-auto mb-4" 
                 style={{ 
                   borderColor: '#B5C233', 
                   borderTopColor: 'transparent' 
                 }}>
            </div>
            <p style={{ color: '#6E6E6E' }}>Chargement de l'équipe...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 style={{ fontFamily: 'Montserrat', color: '#000000' }}>
            Notre équipe
            {error && (
              <span className="block text-sm mt-2" style={{ color: '#E30613' }}>
                {error}
              </span>
            )}
          </h2>
          <p className="mt-4 max-w-2xl mx-auto" style={{ color: '#6E6E6E' }}>
            Découvrez les experts passionnés qui font de FIMA un leader dans le mobilier et l'ameublement depuis 1985
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div key={member.id} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              {/* Photo */}
              <div className="relative mb-4">
                <ImageWithFallback
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto object-cover"
                />
                <div 
                  className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 px-3 py-1 rounded-full text-xs"
                  style={{ backgroundColor: '#B5C233', color: '#FFFFFF' }}
                >
                  {member.department}
                </div>
              </div>

              {/* Info */}
              <div className="text-center">
                <h4 style={{ fontFamily: 'Montserrat', color: '#000000', marginBottom: '8px' }}>
                  {member.name}
                </h4>
                <p className="text-sm mb-3" style={{ color: '#B5C233', fontWeight: '600' }}>
                  {member.position}
                </p>
                <p className="text-xs leading-relaxed" style={{ color: '#6E6E6E' }}>
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button
            onClick={() => onNavigate?.('careers')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg transition-colors"
            style={{ 
              backgroundColor: '#B5C233', 
              color: '#FFFFFF',
              fontFamily: 'Inter',
              fontWeight: '500'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#a3b030';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#B5C233';
            }}
          >
            Rejoindre notre équipe
          </button>
        </div>

        {/* Refresh Button for Demo */}
        <div className="text-center mt-4">
          <button
            onClick={fetchTeamMembers}
            className="text-sm px-4 py-2 rounded-lg border transition-colors"
            style={{ 
              borderColor: '#B5C233',
              color: '#B5C233'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#B5C233';
              e.currentTarget.style.color = '#FFFFFF';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = '#B5C233';
            }}
          >
            🔄 Actualiser les données
          </button>
        </div>
      </div>
    </section>
  );
}