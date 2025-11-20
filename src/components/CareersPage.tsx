import { useState } from 'react';
import { ArrowLeft, MapPin, Clock, Users, Star, Send, Download, Building2, Heart, Award, TrendingUp, Lightbulb, Target, ChevronDown, ChevronUp } from 'lucide-react';

interface CareersPageProps {
  onNavigate: (page: string) => void;
  onBack: () => void;
}

export function CareersPage({ onNavigate, onBack }: CareersPageProps) {
  const [selectedDepartment, setSelectedDepartment] = useState('tous');
  const [expandedJob, setExpandedJob] = useState<number | null>(null);
  const [applicationForm, setApplicationForm] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    message: '',
    cv: null as File | null
  });

  const departments = [
    { key: 'tous', name: 'Tous les postes', count: 12 },
    { key: 'commercial', name: 'Commercial', count: 4, icon: '💼' },
    { key: 'production', name: 'Production', count: 3, icon: '🏭' },
    { key: 'design', name: 'Design & Architecture', count: 2, icon: '🎨' },
    { key: 'logistique', name: 'Logistique', count: 2, icon: '🚛' },
    { key: 'administration', name: 'Administration', count: 1, icon: '📊' }
  ];

  const openPositions = [
    {
      id: 1,
      title: "Responsable Commercial Grands Comptes",
      department: "commercial",
      location: "Abidjan, Côte d'Ivoire",
      type: "CDI",
      experience: "5+ ans",
      salary: "À négocier",
      urgent: true,
      description: "Développer et gérer un portefeuille de clients grands comptes B2B dans le secteur de l'hôtellerie et de l'immobilier.",
      requirements: [
        "Diplôme en Commerce/Marketing ou équivalent",
        "Minimum 5 ans d'expérience en vente B2B",
        "Excellente maîtrise du français et de l'anglais",
        "Permis de conduire et véhicule personnel",
        "Esprit d'équipe et sens du résultat"
      ],
      responsibilities: [
        "Prospection et développement commercial",
        "Négociation et conclusion de contrats",
        "Suivi et fidélisation des clients",
        "Reporting et analyse des ventes",
        "Participation aux salons professionnels"
      ],
      benefits: [
        "Salaire attractif + commissions",
        "Véhicule de fonction",
        "Formation continue",
        "Mutuelle santé",
        "Perspectives d'évolution"
      ]
    },
    {
      id: 2,
      title: "Technicien Menuiserie Ébénisterie",
      department: "production",
      location: "Zone Industrielle, Yopougon",
      type: "CDI",
      experience: "3+ ans",
      salary: "800k - 1.2M FCFA",
      urgent: false,
      description: "Réaliser des meubles sur-mesure en bois massif et dérivés selon les plans et spécifications techniques.",
      requirements: [
        "CAP/BEP Menuiserie ou formation équivalente",
        "Maîtrise des machines-outils traditionnelles",
        "Lecture de plans techniques",
        "Respect des normes de sécurité",
        "Sens du détail et de la finition"
      ],
      responsibilities: [
        "Fabrication de meubles sur-mesure",
        "Assemblage et finition",
        "Contrôle qualité",
        "Maintenance de premier niveau",
        "Optimisation des processus"
      ],
      benefits: [
        "Salaire selon expérience",
        "Prime de rendement",
        "Formation aux nouvelles techniques",
        "Équipements de protection",
        "Évolution vers chef d'équipe"
      ]
    },
    {
      id: 3,
      title: "Architecte d'Intérieur Senior",
      department: "design",
      location: "Plateau, Abidjan",
      type: "CDI",
      experience: "7+ ans",
      salary: "1.5M - 2M FCFA",
      urgent: true,
      description: "Concevoir et superviser des projets d'aménagement intérieur pour notre clientèle haut de gamme.",
      requirements: [
        "Master en Architecture d'Intérieur",
        "Minimum 7 ans d'expérience",
        "Maîtrise des logiciels CAO/DAO",
        "Portfolio de réalisations",
        "Créativité et sens esthétique"
      ],
      responsibilities: [
        "Conception de projets d'aménagement",
        "Supervision des travaux",
        "Relation client et présentation",
        "Coordination avec les équipes",
        "Veille tendances et innovations"
      ],
      benefits: [
        "Rémunération attractive",
        "Projets prestigieux",
        "Formation continue",
        "Voyages professionnels",
        "Reconnaissance professionnelle"
      ]
    },
    {
      id: 4,
      title: "Chauffeur-Livreur",
      department: "logistique",
      location: "Abidjan et environs",
      type: "CDI",
      experience: "2+ ans",
      salary: "400k - 600k FCFA",
      urgent: false,
      description: "Assurer la livraison et l'installation de nos produits chez les clients avec excellence du service.",
      requirements: [
        "Permis de conduire catégorie C",
        "Expérience conduite poids lourds",
        "Bonne condition physique",
        "Sens du service client",
        "Ponctualité et fiabilité"
      ],
      responsibilities: [
        "Livraison des commandes",
        "Installation chez le client",
        "Vérification des produits",
        "Maintenance véhicule",
        "Relation client de qualité"
      ],
      benefits: [
        "Salaire fixe + primes",
        "Formation conduite défensive",
        "Mutuelle santé",
        "Congés payés",
        "Stabilité de l'emploi"
      ]
    },
    {
      id: 5,
      title: "Assistant(e) Marketing Digital",
      department: "administration",
      location: "Plateau, Abidjan",
      type: "Stage/CDD",
      experience: "Junior",
      salary: "300k - 500k FCFA",
      urgent: false,
      description: "Supporter les équipes marketing dans la mise en œuvre de la stratégie digitale de FIMA.",
      requirements: [
        "Formation Marketing/Communication",
        "Connaissance réseaux sociaux",
        "Maîtrise Pack Office",
        "Créativité et autonomie",
        "Anglais courant"
      ],
      responsibilities: [
        "Gestion des réseaux sociaux",
        "Création de contenus",
        "Analyse des performances",
        "Support événementiel",
        "Veille concurrentielle"
      ],
      benefits: [
        "Formation complète",
        "Environnement dynamique",
        "Possibilité de CDI",
        "Mentorat senior",
        "Projets variés"
      ]
    }
  ];

  const companyValues = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Excellence",
      description: "Nous visons l'excellence dans chaque détail, chaque produit, chaque service depuis 1994."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Esprit d'équipe",
      description: "Ensemble, nous construisons l'avenir de l'habitat en Afrique de l'Ouest."
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation",
      description: "Nous innovons constamment pour répondre aux besoins évolutifs de nos clients."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Engagement",
      description: "Nous nous engageons pour la satisfaction de nos clients et le développement de nos équipes."
    }
  ];

  const benefits = [
    {
      icon: '💰',
      title: 'Rémunération attractive',
      description: 'Salaires compétitifs avec primes de performance'
    },
    {
      icon: '🎓',
      title: 'Formation continue',
      description: 'Développement des compétences et certification'
    },
    {
      icon: '🏥',
      title: 'Protection sociale',
      description: 'Mutuelle santé et prévoyance pour vous et votre famille'
    },
    {
      icon: '🚗',
      title: 'Avantages mobilité',
      description: 'Véhicules de fonction et transport personnel'
    },
    {
      icon: '🏖️',
      title: 'Équilibre vie pro/perso',
      description: 'Horaires flexibles et congés supplémentaires'
    },
    {
      icon: '🎯',
      title: 'Évolution de carrière',
      description: 'Promotion interne et mobilité entre métiers'
    }
  ];

  const testimonials = [
    {
      name: "Jean-Claude KOUASSI",
      role: "Directeur Commercial",
      experience: "8 ans chez FIMA",
      quote: "FIMA m'a donné l'opportunité de grandir professionnellement. Aujourd'hui, je dirige une équipe de 15 commerciaux et je contribue au développement de l'entreprise.",
      image: "👨‍💼"
    },
    {
      name: "Marie ADJOUA",
      role: "Architecte d'Intérieur",
      experience: "5 ans chez FIMA",
      quote: "La diversité des projets chez FIMA me permet d'exprimer ma créativité tout en développant mes compétences techniques. C'est passionnant !",
      image: "👩‍🎨"
    },
    {
      name: "Mamadou TRAORE",
      role: "Chef d'Atelier",
      experience: "12 ans chez FIMA",
      quote: "J'ai commencé comme simple ouvrier et aujourd'hui je manage toute la production. FIMA valorise le talent et l'engagement.",
      image: "👨‍🔧"
    }
  ];

  const filteredJobs = openPositions.filter(job => 
    selectedDepartment === 'tous' || job.department === selectedDepartment
  );

  const handleApplicationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Application submitted:', applicationForm);
    // Ici on enverrait les données �� notre API
    alert('Votre candidature a été envoyée avec succès !');
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setApplicationForm(prev => ({ ...prev, cv: e.target.files![0] }));
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 border-b border-green-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center py-4">
            <button 
              onClick={onBack}
              className="flex items-center gap-2 hover:bg-green-200 p-2 rounded-lg transition-colors mr-4"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Retour</span>
            </button>
            
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-green-600 to-blue-600 flex items-center justify-center text-white">
                <Users className="w-8 h-8" />
              </div>
              <div>
                <h1 className="text-3xl font-bold" style={{ fontFamily: 'Montserrat', color: '#000000' }}>
                  Carrières chez FIMA
                </h1>
                <p style={{ color: '#6E6E6E' }}>
                  Rejoignez une équipe passionnée • Construisez votre avenir • Développez vos talents
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative h-[50vh] bg-gray-900">
        <img 
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4Mjl8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwd29ya3xlbnwwfHx8fDE3NTU2MTA5MjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Équipe FIMA"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl mx-auto px-4">
            <h2 className="text-5xl font-bold mb-6" style={{ fontFamily: 'Montserrat' }}>
              Construisons ensemble l'avenir de l'habitat
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Depuis 40 ans, FIMA rassemble des talents passionnés pour créer des espaces de vie exceptionnels. 
              Rejoignez notre aventure humaine et professionnelle !
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => document.getElementById('jobs')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 rounded-xl font-semibold transition-colors"
                style={{ backgroundColor: '#B5C233', color: '#6E6E6E' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#a3af2e'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#B5C233'}
              >
                Voir nos offres
              </button>
              <button 
                onClick={() => document.getElementById('culture')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-white text-gray-900 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
              >
                Notre culture
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-gradient-to-r from-green-600 to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">150+</div>
              <div className="text-sm opacity-90">Collaborateurs</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">30</div>
              <div className="text-sm opacity-90">Années d'expertise</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-sm opacity-90">Satisfaction employés</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">3</div>
              <div className="text-sm opacity-90">Métiers d'excellence</div>
            </div>
          </div>
        </div>
      </div>

      {/* Company Values */}
      <div id="culture" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Montserrat', color: '#000000' }}>
              Nos valeurs
            </h2>
            <p className="text-xl max-w-2xl mx-auto" style={{ color: '#6E6E6E' }}>
              Les valeurs qui nous guident au quotidien et font de FIMA un employeur de référence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6 text-green-600">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4" style={{ color: '#000000' }}>
                  {value.title}
                </h3>
                <p style={{ color: '#6E6E6E' }}>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Montserrat', color: '#000000' }}>
              Avantages & Bénéfices
            </h2>
            <p className="text-xl max-w-2xl mx-auto" style={{ color: '#6E6E6E' }}>
              Chez FIMA, nous prenons soin de nos collaborateurs avec des avantages compétitifs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-semibold mb-3" style={{ color: '#000000' }}>
                  {benefit.title}
                </h3>
                <p style={{ color: '#6E6E6E' }}>
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-16 bg-gradient-to-r from-blue-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Montserrat', color: '#000000' }}>
              Témoignages de nos équipes
            </h2>
            <p className="text-xl max-w-2xl mx-auto" style={{ color: '#6E6E6E' }}>
              Découvrez ce que nos collaborateurs disent de leur expérience chez FIMA.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">{testimonial.image}</div>
                  <h3 className="font-semibold text-lg" style={{ color: '#000000' }}>
                    {testimonial.name}
                  </h3>
                  <p className="text-blue-600 font-medium">{testimonial.role}</p>
                  <p className="text-sm text-gray-500">{testimonial.experience}</p>
                </div>
                
                <blockquote className="text-center" style={{ color: '#6E6E6E' }}>
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="flex justify-center mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Jobs Section */}
      <div id="jobs" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Montserrat', color: '#000000' }}>
              Postes ouverts
            </h2>
            <p className="text-xl max-w-2xl mx-auto" style={{ color: '#6E6E6E' }}>
              Trouvez le poste qui correspond à vos compétences et à vos aspirations.
            </p>
          </div>

          {/* Department Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {departments.map((department) => (
              <button
                key={department.key}
                onClick={() => setSelectedDepartment(department.key)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${
                  selectedDepartment === department.key
                    ? 'bg-green-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-green-50'
                }`}
              >
                {department.icon && <span>{department.icon}</span>}
                {department.name} ({department.count})
              </button>
            ))}
          </div>

          {/* Jobs List */}
          <div className="space-y-6 max-w-4xl mx-auto">
            {filteredJobs.map((job) => (
              <div key={job.id} className="bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold" style={{ color: '#000000' }}>
                          {job.title}
                        </h3>
                        {job.urgent && (
                          <span className="px-3 py-1 rounded-full text-xs font-bold" style={{ backgroundColor: '#B5C233', color: '#6E6E6E' }}>
                            URGENT
                          </span>
                        )}
                      </div>
                      
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{job.type}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Building2 className="w-4 h-4" />
                          <span>{job.experience}</span>
                        </div>
                        <div className="font-semibold text-green-600">
                          {job.salary}
                        </div>
                      </div>

                      <p className="mb-4" style={{ color: '#6E6E6E' }}>
                        {job.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <button
                      onClick={() => setExpandedJob(expandedJob === job.id ? null : job.id)}
                      className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
                    >
                      Voir détails 
                      {expandedJob === job.id ? 
                        <ChevronUp className="w-4 h-4" /> : 
                        <ChevronDown className="w-4 h-4" />
                      }
                    </button>
                    
                    <button 
                      onClick={() => {
                        setApplicationForm(prev => ({ ...prev, position: job.title }));
                        document.getElementById('application')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="fima-btn-primary flex items-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      Postuler
                    </button>
                  </div>

                  {/* Expanded Details */}
                  {expandedJob === job.id && (
                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                          <h4 className="font-semibold mb-3" style={{ color: '#000000' }}>
                            Profil recherché
                          </h4>
                          <ul className="space-y-2">
                            {job.requirements.map((req, index) => (
                              <li key={index} className="flex items-start gap-2 text-sm" style={{ color: '#6E6E6E' }}>
                                <span className="text-green-600 mt-1">•</span>
                                <span>{req}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-3" style={{ color: '#000000' }}>
                            Missions
                          </h4>
                          <ul className="space-y-2">
                            {job.responsibilities.map((resp, index) => (
                              <li key={index} className="flex items-start gap-2 text-sm" style={{ color: '#6E6E6E' }}>
                                <span className="text-blue-600 mt-1">•</span>
                                <span>{resp}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-3" style={{ color: '#000000' }}>
                            Avantages
                          </h4>
                          <ul className="space-y-2">
                            {job.benefits.map((benefit, index) => (
                              <li key={index} className="flex items-start gap-2 text-sm" style={{ color: '#6E6E6E' }}>
                                <span className="text-red-600 mt-1">•</span>
                                <span>{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Application Form */}
      <div id="application" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Montserrat', color: '#000000' }}>
                Candidature spontanée
              </h2>
              <p className="text-xl" style={{ color: '#6E6E6E' }}>
                Vous ne trouvez pas le poste qui vous correspond ? Envoyez-nous votre candidature !
              </p>
            </div>

            <form onSubmit={handleApplicationSubmit} className="bg-white rounded-xl p-8 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-medium mb-2" style={{ color: '#000000' }}>
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    value={applicationForm.name}
                    onChange={(e) => setApplicationForm(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  />
                </div>

                <div>
                  <label className="block font-medium mb-2" style={{ color: '#000000' }}>
                    Email *
                  </label>
                  <input
                    type="email"
                    value={applicationForm.email}
                    onChange={(e) => setApplicationForm(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  />
                </div>

                <div>
                  <label className="block font-medium mb-2" style={{ color: '#000000' }}>
                    Téléphone *
                  </label>
                  <input
                    type="tel"
                    value={applicationForm.phone}
                    onChange={(e) => setApplicationForm(prev => ({ ...prev, phone: e.target.value }))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  />
                </div>

                <div>
                  <label className="block font-medium mb-2" style={{ color: '#000000' }}>
                    Poste visé
                  </label>
                  <input
                    type="text"
                    value={applicationForm.position}
                    onChange={(e) => setApplicationForm(prev => ({ ...prev, position: e.target.value }))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Ex: Commercial, Technicien..."
                  />
                </div>
              </div>

              <div className="mt-6">
                <label className="block font-medium mb-2" style={{ color: '#000000' }}>
                  CV / Lettre de motivation *
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-green-500 transition-colors">
                  <input
                    type="file"
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx"
                    className="hidden"
                    id="cv-upload"
                    required
                  />
                  <label htmlFor="cv-upload" className="cursor-pointer">
                    <Download className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                    <p className="text-gray-600">
                      Cliquez pour choisir votre fichier
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      PDF, DOC, DOCX - Max 5MB
                    </p>
                  </label>
                </div>
                {applicationForm.cv && (
                  <p className="mt-2 text-sm text-green-600">
                    ✓ {applicationForm.cv.name}
                  </p>
                )}
              </div>

              <div className="mt-6">
                <label className="block font-medium mb-2" style={{ color: '#000000' }}>
                  Message de motivation
                </label>
                <textarea
                  value={applicationForm.message}
                  onChange={(e) => setApplicationForm(prev => ({ ...prev, message: e.target.value }))}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
                  placeholder="Parlez-nous de votre motivation à rejoindre FIMA..."
                />
              </div>

              <div className="mt-8">
                <button 
                  type="submit"
                  className="w-full fima-btn-primary py-4 flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Envoyer ma candidature
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Montserrat', color: '#000000' }}>
              Processus de recrutement
            </h2>
            <p className="text-xl max-w-2xl mx-auto" style={{ color: '#6E6E6E' }}>
              Un processus transparent et équitable pour vous permettre de donner le meilleur de vous-même.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="font-semibold mb-2" style={{ color: '#000000' }}>
                Candidature
              </h3>
              <p className="text-sm" style={{ color: '#6E6E6E' }}>
                Envoi de votre CV et lettre de motivation
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h3 className="font-semibold mb-2" style={{ color: '#000000' }}>
                Présélection
              </h3>
              <p className="text-sm" style={{ color: '#6E6E6E' }}>
                Étude de votre profil par nos RH
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-yellow-100 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-yellow-600">3</span>
              </div>
              <h3 className="font-semibold mb-2" style={{ color: '#000000' }}>
                Entretiens
              </h3>
              <p className="text-sm" style={{ color: '#6E6E6E' }}>
                Entretien RH puis entretien technique
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-red-600">4</span>
              </div>
              <h3 className="font-semibold mb-2" style={{ color: '#000000' }}>
                Intégration
              </h3>
              <p className="text-sm" style={{ color: '#6E6E6E' }}>
                Accueil et formation dans vos nouvelles fonctions
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Final */}
      <div className="py-16 bg-gradient-to-r from-green-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: 'Montserrat' }}>
            Prêt(e) à rejoindre l'aventure FIMA ?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Découvrez un environnement de travail stimulant où vos talents seront valorisés 
            et votre carrière accompagnée.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => document.getElementById('application')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 rounded-xl font-semibold transition-colors"
              style={{ backgroundColor: '#B5C233', color: '#6E6E6E' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#a3af2e'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#B5C233'}
            >
              Postuler maintenant
            </button>
            <button 
              onClick={() => onNavigate('content-hub')}
              className="px-8 py-4 bg-white text-green-600 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
            >
              En savoir plus sur FIMA
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}