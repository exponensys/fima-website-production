import { useState } from 'react';
import { ArrowLeft, MapPin, Calendar, Building2, Users, Award, Share2, Download, ChevronLeft, ChevronRight, Eye, ExternalLink } from 'lucide-react';

interface ProjectDetailPageProps {
  project: any;
  onBack: () => void;
  onNavigate: (page: string, category?: string, data?: any) => void;
}

export function ProjectDetailPage({ project, onBack, onNavigate }: ProjectDetailPageProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('overview');

  if (!project) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4" style={{ color: '#000000' }}>
            Projet introuvable
          </h2>
          <button 
            onClick={onBack}
            className="fima-btn-primary"
          >
            Retour aux projets
          </button>
        </div>
      </div>
    );
  }

  // Images du projet (simulées)
  const projectImages = [
    project.image,
    "https://images.unsplash.com/photo-1600607687644-c7171b42498f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4Mjl8MHwxfHNlYXJjaHwxfHxnbGFzcyUyMGJ1aWxkaW5nfGVufDB8fHx8MTc1NTYxMDkyNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4Mjl8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBidWlsZGluZ3xlbnwwfHx8fDE3NTU2MTA5MjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4Mjl8MHwxfHNlYXJjaHwxfHxob3RlbCUyMGx1eHVyeXxlbnwwfHx8fDE3NTU2MTA5MjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  ];

  // Détails techniques simulés
  const technicalDetails = {
    durée: "18 mois",
    équipe: "25 personnes",
    matériaux: ["Bois noble africain", "Aluminium haute performance", "Verres techniques", "Textiles premium"],
    défis: [
      "Intégration de trois métiers sur un même site",
      "Respect des délais très serrés",
      "Normes environnementales strictes",
      "Coordination avec 8 corps de métier"
    ],
    innovations: [
      "Système de façade ventilée innovant",
      "Mobilier modulaire breveté",
      "Solutions domotiques intégrées",
      "Matériaux écologiques locaux"
    ]
  };

  // Projets similaires
  const relatedProjects = [
    {
      id: 7,
      title: "Villa Moderne Riviera",
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4Mjl8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjBob3VzZXxlbnwwfHx8fDE3NTU2MTA5MjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "Résidentiel",
      location: "Riviera, Abidjan"
    },
    {
      id: 8, 
      title: "Centre d'Affaires Treichville",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4Mjl8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBidWlsZGluZ3xlbnwwfHx8fDE3NTU2MTA5MjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "Commercial",
      location: "Treichville, Abidjan"
    },
    {
      id: 9,
      title: "Résidence Ambassadeur",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4Mjl8MHwxfHNlYXJjaHwxfHxob3RlbCUyMGx1eHVyeXxlbnwwfHx8fDE3NTU2MTA5MjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "Hôtellerie",
      location: "Cocody, Abidjan"
    }
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % projectImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + projectImages.length) % projectImages.length);
  };

  const tabs = [
    { key: 'overview', name: 'Vue d\'ensemble', icon: <Eye className="w-4 h-4" /> },
    { key: 'technical', name: 'Détails techniques', icon: <Building2 className="w-4 h-4" /> },
    { key: 'team', name: 'Équipe projet', icon: <Users className="w-4 h-4" /> },
    { key: 'gallery', name: 'Galerie', icon: <ExternalLink className="w-4 h-4" /> }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-blue-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <button 
              onClick={onBack}
              className="flex items-center gap-2 hover:bg-blue-200 p-2 rounded-lg transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Accueil</span>
            </button>
            
            <div className="flex items-center gap-3">
              <button 
                onClick={() => navigator.share?.({ title: project.title, url: window.location.href })}
                className="p-2 hover:bg-blue-200 rounded-full transition-colors"
              >
                <Share2 className="w-5 h-5" />
              </button>
              
              <button className="p-2 hover:bg-blue-200 rounded-full transition-colors">
                <Download className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Image avec navigation */}
      <div className="relative h-[60vh] bg-gray-900">
        <img 
          src={projectImages[currentImageIndex]} 
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Navigation images */}
        {projectImages.length > 1 && (
          <>
            <button 
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Indicateurs */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
              {projectImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentImageIndex === index 
                      ? 'bg-white scale-125' 
                      : 'bg-white/50 hover:bg-white/75'
                  }`}
                />
              ))}
            </div>
          </>
        )}

        {/* Info overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-8">
          <div className="container mx-auto">
            <div className="flex items-end justify-between">
              <div className="text-white">
                <div className="flex items-center gap-4 mb-2">
                  <span className="px-3 py-1 bg-blue-600 rounded-full text-sm font-medium">
                    {project.categoryName}
                  </span>
                  {project.featured && (
                    <span className="px-3 py-1 rounded-full text-sm font-bold" style={{ backgroundColor: '#B5C233', color: '#6E6E6E' }}>
                      PROJET PHARE
                    </span>
                  )}
                  {project.awards && project.awards.length > 0 && (
                    <div className="flex items-center gap-1 px-3 py-1 bg-yellow-500 rounded-full text-sm font-medium">
                      <Award className="w-4 h-4" />
                      <span>Primé</span>
                    </div>
                  )}
                </div>
                
                <h1 className="text-4xl font-bold mb-4" style={{ fontFamily: 'Montserrat' }}>
                  {project.title}
                </h1>
                
                <div className="flex items-center gap-6 text-lg">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    <span>{project.year}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Building2 className="w-5 h-5" />
                    <span>{project.surface}</span>
                  </div>
                </div>
              </div>
              
              <div className="text-right text-white">
                <div className="text-3xl font-bold mb-2" style={{ color: '#B5C233' }}>
                  {project.budget}
                </div>
                <div className="text-sm opacity-75">Budget total</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation par onglets */}
      <div className="bg-white border-b border-gray-200 sticky top-20 z-10">
        <div className="container mx-auto px-4">
          <div className="flex space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`flex items-center gap-2 py-4 px-2 border-b-2 font-medium transition-colors ${
                  activeTab === tab.key
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                {tab.icon}
                {tab.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Contenu par onglets */}
      <div className="container mx-auto px-4 py-12">
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Description principale */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Montserrat', color: '#000000' }}>
                  Description du projet
                </h2>
                <p className="text-lg leading-relaxed mb-6" style={{ color: '#6E6E6E' }}>
                  {project.description}
                </p>
                
                <div className="prose max-w-none" style={{ color: '#6E6E6E' }}>
                  <p>
                    Ce projet d'envergure illustre parfaitement l'approche intégrée du Groupe FIMA. 
                    En combinant l'expertise de nos trois métiers - FIMA Couchage, FIMA Design et UNIVERS GLASS - 
                    nous avons pu offrir une solution complète et cohérente à notre client.
                  </p>
                  
                  <p>
                    La coordination entre nos équipes a permis d'optimiser les délais de livraison 
                    tout en maintenant les plus hauts standards de qualité. Chaque détail a été pensé 
                    pour créer un environnement harmonieux et fonctionnel.
                  </p>
                </div>
              </div>

              {/* Défis et solutions */}
              <div>
                <h3 className="text-xl font-semibold mb-4" style={{ color: '#000000' }}>
                  Défis relevés
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {technicalDetails.défis.map((défi, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                      <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mt-1">
                        <span className="text-red-600 font-bold text-sm">{index + 1}</span>
                      </div>
                      <span className="text-sm" style={{ color: '#6E6E6E' }}>{défi}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Innovations */}
              <div>
                <h3 className="text-xl font-semibold mb-4" style={{ color: '#000000' }}>
                  Innovations apportées
                </h3>
                <div className="space-y-3">
                  {technicalDetails.innovations.map((innovation, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-1">
                        <span className="text-green-600 font-bold text-sm">✓</span>
                      </div>
                      <span style={{ color: '#6E6E6E' }}>{innovation}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar info */}
            <div className="space-y-8">
              {/* Informations client */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold mb-4" style={{ color: '#000000' }}>
                  Informations projet
                </h3>
                <div className="space-y-3">
                  <div>
                    <span className="font-medium text-gray-600">Client:</span>
                    <div style={{ color: '#000000' }}>{project.client}</div>
                  </div>
                  <div>
                    <span className="font-medium text-gray-600">Durée:</span>
                    <div style={{ color: '#000000' }}>{technicalDetails.durée}</div>
                  </div>
                  <div>
                    <span className="font-medium text-gray-600">Équipe:</span>
                    <div style={{ color: '#000000' }}>{technicalDetails.équipe}</div>
                  </div>
                  <div>
                    <span className="font-medium text-gray-600">Métiers FIMA:</span>
                    <div className="mt-2 space-y-1">
                      {project.businessUnits.map((unit: string, index: number) => (
                        <span key={index} className="inline-block px-2 py-1 bg-blue-100 text-blue-700 rounded text-sm mr-2">
                          {unit}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Prix et distinctions */}
              {project.awards && project.awards.length > 0 && (
                <div className="bg-yellow-50 rounded-xl p-6">
                  <h3 className="font-semibold mb-4 flex items-center gap-2" style={{ color: '#000000' }}>
                    <Award className="w-5 h-5 text-yellow-600" />
                    Prix & Distinctions
                  </h3>
                  <div className="space-y-2">
                    {project.awards.map((award: string, index: number) => (
                      <div key={index} className="flex items-center gap-2">
                        <span className="text-yellow-600">🏆</span>
                        <span style={{ color: '#000000' }}>{award}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tags */}
              {project.tags && (
                <div>
                  <h3 className="font-semibold mb-4" style={{ color: '#000000' }}>
                    Mots-clés
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag: string, index: number) => (
                      <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === 'technical' && (
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-2xl font-bold" style={{ fontFamily: 'Montserrat', color: '#000000' }}>
              Spécifications Techniques
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="font-semibold mb-4" style={{ color: '#000000' }}>
                  Matériaux utilisés
                </h3>
                <div className="space-y-3">
                  {technicalDetails.matériaux.map((matériau, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                      <span style={{ color: '#6E6E6E' }}>{matériau}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="font-semibold mb-4" style={{ color: '#000000' }}>
                  Données techniques
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Surface totale:</span>
                    <span className="font-medium" style={{ color: '#000000' }}>{project.surface}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Budget:</span>
                    <span className="font-medium" style={{ color: '#000000' }}>{project.budget}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Durée:</span>
                    <span className="font-medium" style={{ color: '#000000' }}>{technicalDetails.durée}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Équipe:</span>
                    <span className="font-medium" style={{ color: '#000000' }}>{technicalDetails.équipe}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'team' && (
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8" style={{ fontFamily: 'Montserrat', color: '#000000' }}>
              Équipe Projet
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">👨‍💼</span>
                </div>
                <h3 className="font-semibold mb-2" style={{ color: '#000000' }}>
                  Jean-Claude KOUASSI
                </h3>
                <p className="text-sm text-gray-600 mb-2">Chef de Projet</p>
                <p className="text-xs text-gray-500">
                  Coordination générale et suivi client
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">👩‍🔧</span>
                </div>
                <h3 className="font-semibold mb-2" style={{ color: '#000000' }}>
                  Marie ADJOUA
                </h3>
                <p className="text-sm text-gray-600 mb-2">Architecte d'intérieur</p>
                <p className="text-xs text-gray-500">
                  Conception et design d'espace
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">👨‍🔬</span>
                </div>
                <h3 className="font-semibold mb-2" style={{ color: '#000000' }}>
                  Mamadou TRAORE
                </h3>
                <p className="text-sm text-gray-600 mb-2">Ingénieur Structure</p>
                <p className="text-xs text-gray-500">
                  Études techniques et normes
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'gallery' && (
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-8" style={{ fontFamily: 'Montserrat', color: '#000000' }}>
              Galerie Photos
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projectImages.map((image, index) => (
                <div 
                  key={index} 
                  className="aspect-video bg-gray-200 rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
                  onClick={() => setCurrentImageIndex(index)}
                >
                  <img 
                    src={image} 
                    alt={`${project.title} - Photo ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Projets similaires */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ fontFamily: 'Montserrat', color: '#000000' }}>
            Projets similaires
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedProjects.map((relatedProject) => (
              <div 
                key={relatedProject.id} 
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
                onClick={() => onNavigate('project-detail', undefined, relatedProject)}
              >
                <div className="aspect-video">
                  <img 
                    src={relatedProject.image}
                    alt={relatedProject.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium mb-3">
                    {relatedProject.category}
                  </span>
                  <h3 className="font-bold mb-2" style={{ color: '#000000' }}>
                    {relatedProject.title}
                  </h3>
                  <p className="text-sm text-gray-600 flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {relatedProject.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: 'Montserrat' }}>
            Intéressé par un projet similaire ?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Contactez nos experts pour discuter de votre projet et découvrir comment 
            nous pouvons vous accompagner.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => onNavigate('quote-request')}
              className="px-8 py-4 rounded-xl font-semibold transition-colors"
              style={{ backgroundColor: '#B5C233', color: '#6E6E6E' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#a3af2e'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#B5C233'}
            >
              Demander un devis
            </button>
            <button 
              onClick={() => onNavigate('all-projects')}
              className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
            >
              Voir tous nos projets
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}