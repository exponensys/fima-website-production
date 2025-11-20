import { Button } from "./ui/button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faAward, faUsers, faShield, faClock, faTruck } from '@fortawesome/free-solid-svg-icons';
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface AboutSectionProps {
  onNavigate?: (page: string) => void;
}

export function AboutSection({ onNavigate }: AboutSectionProps) {
  const stats = [
    { icon: faAward, value: "35+", label: "Années d'expertise" },
    { icon: faUsers, value: "3", label: "Métiers d'excellence" },
    { icon: faShield, value: "1985", label: "Année de création" }
  ];

  const expertises = [
    {
      title: "Fabrication de matelas",
      description: "Nous concevons et fabriquons des matelas qui conjuguent confort, résistance et innovation, en sélectionnant des matériaux de première qualité pour garantir un repos optimal. Nous mettons en œuvre des techniques avancées pour assurer résistance, sécurité et esthétique, répondant aux exigences spécifiques de chaque chantier. Notre engagement envers la qualité et la satisfaction client demeure au cœur de chaque projet."
    },
    {
      title: "Menuiserie moderne",
      description: "Nous créons des meubles sur-mesure, designs et fonctionnels, adaptés à tous types d'intérieurs résidentiels ou professionnels. Notre maîtrise de la mélamine nous permet d'offrir des solutions esthétiques et robustes."
    },
    {
      title: "Vitrerie aluminium",
      description: "Nous réalisons des ouvrages de vitrerie sur-mesure pour tous vos projets d'aménagement ou de rénovation. Nous privilégions l'aluminium pour sa durabilité, sa modernité et sa facilité d'entretien."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Stats section */}
        <div className="text-center mb-16">
          <h2 className="mb-4" style={{ fontFamily: 'Montserrat', color: '#000000' }}>
            GROUP FIMA - Notre entreprise
          </h2>
          <p className="mb-12 text-lg max-w-3xl mx-auto" style={{ color: '#6E6E6E' }}>
            Chez GROUP FIMA, nous sommes fiers de porter l'héritage d'une entreprise familiale qui a vu le jour en 1985. 
            Depuis nos débuts, notre objectif est d'offrir à nos clients un savoir-faire de qualité, fruit de décennies 
            d'expérience et d'innovation dans la fabrication de matelas, la menuiserie moderne en mélamine et la vitrerie aluminium.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div 
                  className="inline-flex items-center justify-center w-16 h-16 mb-4"
                  style={{ backgroundColor: '#B5C233' }}
                >
                  <FontAwesomeIcon icon={stat.icon} className="w-8 h-8" style={{ color: '#6E6E6E' }} />
                </div>
                <div className="text-3xl font-bold mb-2" style={{ fontFamily: 'Montserrat', color: '#E30613' }}>
                  {stat.value}
                </div>
                <div style={{ color: '#6E6E6E' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1676286168358-9b4ce60384d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbGVlcCUyMGxhYm9yYXRvcnklMjBleHBlcnRzJTIwdGVzdGluZ3xlbnwxfHx8fDE3NTU2NDI1NDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Laboratoire FIMA - Experts du sommeil"
              className="w-full h-96 object-cover"
            />
            
            {/* Floating quality card */}
            <div className="absolute -bottom-8 -right-8 bg-white p-6 shadow-xl max-w-xs border" style={{ borderColor: '#C0C0C0' }}>
              <div className="flex items-center gap-3 mb-3">
                <div 
                  className="w-12 h-12 flex items-center justify-center"
                  style={{ backgroundColor: '#B5C233' }}
                >
                  <FontAwesomeIcon icon={faAward} className="w-6 h-6" style={{ color: '#6E6E6E' }} />
                </div>
                <div>
                  <div className="font-semibold" style={{ color: '#000000' }}>Label Qualité</div>
                  <div className="text-sm" style={{ color: '#6E6E6E' }}>Certification Oeko-Tex</div>
                </div>
              </div>
              <p className="text-sm" style={{ color: '#6E6E6E' }}>
                "FIMA est certifié pour ses matériaux sans substances nocives."
              </p>
            </div>
          </div>
          
          <div>
            <div 
              className="inline-block px-4 py-2 text-sm mb-6"
              style={{ backgroundColor: '#B5C233', color: '#6E6E6E' }}
            >
              Entreprise familiale depuis 1985
            </div>
            
            <h3 className="mb-6" style={{ fontFamily: 'Montserrat', color: '#000000' }}>
              Notre histoire
            </h3>
            
            <p className="mb-8 text-lg" style={{ color: '#6E6E6E' }}>
              Née de la passion et du travail d'une équipe dévouée, GROUP FIMA s'est forgé une réputation de sérieux et 
              de fiabilité au fil des années. Nous avons grandi main dans la main avec nos clients et partenaires, en 
              adaptant sans cesse nos procédés de fabrication et nos offres aux exigences du marché. Depuis plus de 35 ans, 
              nous nous renouvelons pour proposer des produits durables, élégants et adaptés à tous les besoins.
            </p>
            
            <h4 className="mb-4" style={{ fontFamily: 'Montserrat', color: '#000000' }}>
              Nos expertises
            </h4>
            
            <div className="space-y-6 mb-8">
              {expertises.map((expertise, index) => (
                <div key={index} className="border-l-4 pl-4" style={{ borderColor: '#B5C233' }}>
                  <h5 className="font-semibold mb-2" style={{ color: '#000000' }}>{expertise.title}</h5>
                  <p className="text-sm" style={{ color: '#6E6E6E' }}>{expertise.description}</p>
                </div>
              ))}
            </div>

            <h4 className="mb-4" style={{ fontFamily: 'Montserrat', color: '#000000' }}>
              Nos valeurs
            </h4>
            
            <p className="mb-8" style={{ color: '#6E6E6E' }}>
              Depuis notre création, nous plaçons la qualité, l'écoute du client et la fiabilité au cœur de chaque projet. Notre équipe veille à respecter les normes les plus strictes et à entretenir une relation de confiance durable avec chacun de nos partenaires et clients. L'innovation est aussi dans notre ADN : nous sommes toujours à la recherche de nouvelles idées pour satisfaire notre clientèle et anticiper ses besoins, en garantissant un résultat à la hauteur de vos attentes et conforme aux délais convenus. Choisir GROUP FIMA, c'est opter pour un partenaire fiable et engagé dans la réussite de votre projet.
            </p>

            <div className="p-6 mb-8" style={{ backgroundColor: '#f8f9fa', borderLeft: '4px solid #E30613' }}>
              <h4 className="font-semibold mb-3" style={{ fontFamily: 'Montserrat', color: '#000000' }}>
                Pourquoi nous choisir ?
              </h4>
              <p className="text-sm leading-relaxed" style={{ color: '#6E6E6E' }}>
                En faisant confiance à GROUP FIMA, vous bénéficiez de l'expertise d'une entreprise expérimentée, d'un service 
                personnalisé et de produits qui allient performance, esthétique et longévité. Notre mission est de vous accompagner 
                à chaque étape, du conseil à la pose, pour donner vie à tous vos projets d'aménagement, de literie ou de menuiserie. 
                Nous nous engageons également à respecter l'environnement en adoptant des pratiques éco-responsables, afin de contribuer 
                à un avenir durable pour tous. Votre satisfaction reste notre priorité absolue, car chaque projet est unique et mérite 
                une attention particulière. Chez GROUP FIMA, nous valorisons l'écoute active et la transparence, afin de bâtir des 
                relations solides basées sur la confiance mutuelle. Ensemble, construisons des espaces qui reflètent vos aspirations 
                et subliment votre quotidien. Nous sommes impatients de collaborer avec vous et de transformer vos idées en réalisations 
                concrètes, durables et esthétiques. Faites confiance à GROUP FIMA pour un partenariat synonyme de réussite et de qualité.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => onNavigate?.('our-history')}
                className="px-8 py-4 text-white font-medium text-lg transition-all hover:shadow-lg"
                style={{ backgroundColor: '#E30613' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#c5050f'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#E30613'}
              >
                Notre histoire
              </button>
              <button 
                onClick={() => onNavigate?.('our-certifications')}
                className="px-8 py-4 font-medium text-lg border-2 transition-all hover:shadow-lg"
                style={{ borderColor: '#B5C233', color: '#B5C233' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#B5C233';
                  e.currentTarget.style.color = '#6E6E6E';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = '#B5C233';
                }}
              >
                Nos certifications
              </button>
            </div>
          </div>
        </div>

        {/* Services additionnels */}
        {/* <div className="mt-20">
          <h3 className="text-center mb-12" style={{ fontFamily: 'Montserrat', color: '#000000' }}>
            Services inclus avec tous nos matelas
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div 
                className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4"
                style={{ backgroundColor: '#f8f9fa' }}
              >
                <Truck className="w-8 h-8" style={{ color: '#B5C233' }} />
              </div>
              <h4 className="mb-2" style={{ fontFamily: 'Montserrat', color: '#000000' }}>
                Livraison Premium
              </h4>
              <p style={{ color: '#6E6E6E' }}>
                Livraison et installation gratuites sous 48h partout en France
              </p>
            </div>
            <div className="text-center p-6">
              <div 
                className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4"
                style={{ backgroundColor: '#f8f9fa' }}
              >
                <Clock className="w-8 h-8" style={{ color: '#B5C233' }} />
              </div>
              <h4 className="mb-2" style={{ fontFamily: 'Montserrat', color: '#000000' }}>
                14 Nuits d'Essai
              </h4>
              <p style={{ color: '#6E6E6E' }}>
                Testez votre matelas chez vous, satisfait ou remboursé
              </p>
            </div>
            <div className="text-center p-6">
              <div 
                className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4"
                style={{ backgroundColor: '#f8f9fa' }}
              >
                <Shield className="w-8 h-8" style={{ color: '#B5C233' }} />
              </div>
              <h4 className="mb-2" style={{ fontFamily: 'Montserrat', color: '#000000' }}>
                Garantie 10 ans
              </h4>
              <p style={{ color: '#6E6E6E' }}>
                Protection complète pour un investissement durable
              </p>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}