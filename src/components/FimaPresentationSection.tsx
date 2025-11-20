import { useState } from 'react';
import { Play } from 'lucide-react';

interface FimaPresentationSectionProps {
  onNavigate: (page: string) => void;
}

export function FimaPresentationSection({ onNavigate }: FimaPresentationSectionProps) {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <section className="py-16 mt-8 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ fontFamily: 'Montserrat', color: '#000000' }}>
            Présentation de FIMA
          </h2>
          {/* <p className="text-lg lg:text-xl max-w-3xl mx-auto" style={{ color: '#6E6E6E' }}>
            Découvrez l'histoire et l'expertise du Groupe FIMA à travers notre vidéo de présentation
          </p> */}
        </div>

        <div className="max-w-4xl mx-auto">
          {!isVideoPlaying ? (
            <div className="relative">
              <div 
                className="aspect-video bg-black/20 rounded-2xl overflow-hidden backdrop-blur-sm border border-gray-200"
                style={{
                  backgroundImage: `url(https://images.unsplash.com/photo-1648634158203-199accfd7afc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBiZWRyb29tJTIwZnVybml0dXJlJTIwc2hvd3Jvb218ZW58MXx8fHwxNzU2MTIzNDIwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral)`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="flex items-center justify-center h-full bg-black/40">
                  <button 
                    onClick={() => setIsVideoPlaying(true)}
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-red-600 flex items-center justify-center text-white hover:bg-red-700 transition-all shadow-xl hover:scale-105"
                  >
                    <Play className="w-8 h-8 sm:w-10 sm:h-10 ml-1" />
                  </button>
                </div>
              </div>
              {/* <div className="absolute -bottom-4 -right-4 bg-white rounded-lg p-4 shadow-lg max-w-[250px]">
                <div className="text-sm text-gray-600">Découvrez FIMA</div>
                <div className="font-bold text-gray-900">Vidéo de présentation</div>
                <div className="text-xs text-gray-500 mt-1">40 ans d'expertise</div>
              </div> */}
            </div>
          ) : (
            <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          )}
        </div>

        {/* Informations complémentaires */}
        <div className="mt-12 text-center">
          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2" style={{ color: '#B5C233' }}>30+</div>
              <div className="text-gray-600">Années d'expertise</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2" style={{ color: '#E30613' }}>10 000+</div>
              <div className="text-gray-600">Clients satisfaits</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2" style={{ color: '#0EA5E9' }}>3</div>
              <div className="text-gray-600">Métiers maîtrisés</div>
            </div>
          </div> */}
          
          {/* <div className="mt-8">
            <button 
              onClick={() => onNavigate('our-history')}
              className="fima-btn-primary px-8 py-3"
            >
              Découvrir notre histoire
            </button>
          </div> */}
        </div>
      </div>
    </section>
  );
}