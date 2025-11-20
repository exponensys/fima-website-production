import { useState } from 'react';
import { ArrowLeft, Award, Shield, CheckCircle, Download, Calendar, Building2, Users, Star, ChevronRight, ExternalLink } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface OurCertificationsPageProps {
  onBack: () => void;
  onNavigate: (page: string) => void;
  onExpertClick?: (type: 'expert' | 'appointment') => void;
}

export function OurCertificationsPage({ onBack, onNavigate, onExpertClick }: OurCertificationsPageProps) {
  const [activeCategory, setActiveCategory] = useState('all');

  const certifications = [
    {
      id: 1,
      name: 'ISO 9001:2015',
      category: 'quality',
      issuer: 'Bureau Veritas',
      description: 'Certification internationale pour les systèmes de management de la qualité',
      obtainedDate: '2001-03-15',
      expiryDate: '2025-03-15',
      status: 'active',
      badge: 'https://images.unsplash.com/photo-1715173679369-18006e84d6a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpc28lMjBjZXJ0aWZpY2F0ZSUyMGRvY3VtZW50fGVufDF8fHx8MTc1NjEyNjI4M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      benefits: ['Processus qualité optimisés', 'Satisfaction client garantie', 'Amélioration continue']
    },
    {
      id: 2,
      name: 'Label Qualité Ivoirienne',
      category: 'national',
      issuer: 'CODINORM',
      description: 'Reconnaissance officielle de la qualité des produits fabriqués en Côte d\'Ivoire',
      obtainedDate: '2005-07-20',
      expiryDate: '2025-07-20',
      status: 'active',
      badge: 'https://images.unsplash.com/photo-1715173679369-18006e84d6a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxxdWFsaXR5JTIwY2VydGlmaWNhdGUlMjBhd2FyZHxlbnwxfHx8fDE3NTYxMjYyNzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      benefits: ['Produits conformes aux normes', 'Made in Côte d\'Ivoire', 'Soutien à l\'économie locale']
    },
    {
      id: 3,
      name: 'OHSAS 18001',
      category: 'safety',
      issuer: 'SGS',
      description: 'Système de management de la santé et sécurité au travail',
      obtainedDate: '2010-02-10',
      expiryDate: '2025-02-10',
      status: 'active',
      badge: 'https://images.unsplash.com/photo-1694521787162-5373b598945c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWZldHklMjBoZWxtZXQlMjBjb25zdHJ1Y3Rpb258ZW58MXx8fHwxNzU2MTI2Mjg2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      benefits: ['Sécurité maximale', 'Protection des employés', 'Conformité réglementaire']
    },
    {
      id: 4,
      name: 'ISO 14001:2015',
      category: 'environment',
      issuer: 'AFNOR',
      description: 'Management environnemental et développement durable',
      obtainedDate: '2015-11-30',
      expiryDate: '2025-11-30',
      status: 'active',
      badge: 'https://images.unsplash.com/photo-1533805077376-a508b0086cd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb3Jlc3QlMjBlbnZpcm9ubWVudCUyMHN1c3RhaW5hYmlsaXR5fGVufDF8fHx8MTc1NjEyNjI5MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      benefits: ['Respect environnemental', 'Gestion des déchets', 'Eco-responsabilité']
    },
    {
      id: 5,
      name: 'PEFC',
      category: 'materials',
      issuer: 'PEFC International',
      description: 'Certification de gestion durable des forêts pour nos bois',
      obtainedDate: '2018-09-12',
      expiryDate: '2025-09-12',
      status: 'active',
      badge: 'https://images.unsplash.com/photo-1533805077376-a508b0086cd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb3Jlc3QlMjBlbnZpcm9ubWVudCUyMHN1c3RhaW5hYmlsaXR5fGVufDF8fHx8MTc1NjEyNjI5MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      benefits: ['Bois certifiés', 'Forêts durables', 'Traçabilité garantie']
    },
    {
      id: 6,
      name: 'CertiPUR-US',
      category: 'materials',
      issuer: 'CertiPUR-US',
      description: 'Certification des mousses de matelas sans substances nocives',
      obtainedDate: '2020-05-18',
      expiryDate: '2025-05-18',
      status: 'active',
      badge: 'https://images.unsplash.com/photo-1673201102066-b0599d45002b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXR0cmVzcyUyMGZvYW0lMjBtYXRlcmlhbHN8ZW58MXx8fHwxNzU2MTI2Mjk1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      benefits: ['Mousses sans COV', 'Santé préservée', 'Qualité garantie']
    }
  ];

  const categories = [
    { id: 'all', name: 'Toutes', icon: <Award className="w-5 h-5" />, count: certifications.length },
    { id: 'quality', name: 'Qualité', icon: <Star className="w-5 h-5" />, count: certifications.filter(c => c.category === 'quality').length },
    { id: 'safety', name: 'Sécurité', icon: <Shield className="w-5 h-5" />, count: certifications.filter(c => c.category === 'safety').length },
    { id: 'environment', name: 'Environnement', icon: <CheckCircle className="w-5 h-5" />, count: certifications.filter(c => c.category === 'environment').length },
    { id: 'materials', name: 'Matériaux', icon: <Building2 className="w-5 h-5" />, count: certifications.filter(c => c.category === 'materials').length },
    { id: 'national', name: 'Nationales', icon: <Users className="w-5 h-5" />, count: certifications.filter(c => c.category === 'national').length }
  ];

  const advantages = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Garantie de Qualité',
      description: 'Nos certifications garantissent le respect des plus hauts standards de qualité internationaux.',
      color: '#B5C233'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Confiance Client',
      description: 'Les labels reconnus renforcent la confiance de nos clients dans nos produits et services.',
      color: '#E30613'
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: 'Conformité Réglementaire',
      description: 'Respect strict de toutes les réglementations nationales et internationales en vigueur.',
      color: '#6E6E6E'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Excellence Continue',
      description: 'Un engagement permanent vers l\'amélioration et l\'innovation dans tous nos processus.',
      color: '#B5C233'
    }
  ];

  const filteredCertifications = activeCategory === 'all' 
    ? certifications 
    : certifications.filter(cert => cert.category === activeCategory);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const isExpiringSoon = (expiryDate: string) => {
    const expiry = new Date(expiryDate);
    const now = new Date();
    const sixMonthsFromNow = new Date();
    sixMonthsFromNow.setMonth(now.getMonth() + 6);
    return expiry <= sixMonthsFromNow;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 py-6">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors mb-4"
          >
            <ArrowLeft className="w-5 h-5" />
            Retour
          </button>
          
          <div className="flex items-center gap-4">
            <Award className="w-8 h-8" style={{ color: '#B5C233' }} />
            <div>
              <h1 className="text-3xl font-bold text-gray-900" style={{ fontFamily: 'Montserrat' }}>
                Nos Certifications
              </h1>
              <p className="text-gray-600 mt-1">
                Labels et certifications qui attestent de notre engagement qualité
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6" style={{ fontFamily: 'Montserrat', color: '#000000' }}>
                Excellence Certifiée depuis 2001
              </h2>
              <p className="text-lg mb-6" style={{ color: '#6E6E6E' }}>
                Nos certifications internationales et nationales témoignent de notre engagement 
                indéfectible pour la qualité, la sécurité et le respect de l'environnement.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold" style={{ color: '#B5C233' }}>6</div>
                  <div className="text-sm text-gray-600">Certifications actives</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold" style={{ color: '#E30613' }}>23</div>
                  <div className="text-sm text-gray-600">Années d'expérience</div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => onExpertClick?.('expert')}
                  className="px-6 py-3 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-colors flex items-center gap-2"
                >
                  Parler à un expert
                  <ChevronRight className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => onNavigate('our-history')}
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                >
                  Notre histoire
                </button>
              </div>
            </div>
            
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1715173679369-18006e84d6a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxxdWFsaXR5JTIwY2VydGlmaWNhdGUlMjBhd2FyZHxlbnwxfHx8fDE3NTYxMjYyNzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Certifications FIMA"
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                    <Shield className="w-6 h-6" style={{ color: '#B5C233' }} />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">ISO 9001</div>
                    <div className="text-sm text-gray-600">Depuis 2001</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${
                  activeCategory === category.id
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category.icon}
                {category.name}
                <span className="ml-1 text-xs opacity-75">({category.count})</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCertifications.map((cert) => (
              <div key={cert.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all">
                <div className="h-48 overflow-hidden">
                  <ImageWithFallback
                    src={cert.badge}
                    alt={cert.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold" style={{ fontFamily: 'Montserrat', color: '#000000' }}>
                      {cert.name}
                    </h3>
                    <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                      cert.status === 'active' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {cert.status === 'active' ? 'Actif' : 'Inactif'}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4 text-sm">
                    {cert.description}
                  </p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm">
                      <Building2 className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-600">Délivré par {cert.issuer}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-600">
                        Obtenu le {formatDate(cert.obtainedDate)}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      <span className={`${isExpiringSoon(cert.expiryDate) ? 'text-orange-600' : 'text-gray-600'}`}>
                        Expire le {formatDate(cert.expiryDate)}
                      </span>
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    <h4 className="font-semibold text-gray-900 text-sm">Avantages :</h4>
                    {cert.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-3 h-3" style={{ color: '#B5C233' }} />
                        <span className="text-xs text-gray-600">{benefit}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex gap-2">
                    <button className="flex-1 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
                      <Download className="w-4 h-4" />
                      Télécharger
                    </button>
                    <button className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700 transition-colors flex items-center justify-center gap-2">
                      <ExternalLink className="w-4 h-4" />
                      Vérifier
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: 'Montserrat', color: '#000000' }}>
              Pourquoi Nos Certifications Comptent
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: '#6E6E6E' }}>
              Des garanties concrètes pour votre tranquillité d'esprit
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center p-6 rounded-2xl bg-gray-50 hover:shadow-lg transition-all">
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white"
                  style={{ backgroundColor: advantage.color }}
                >
                  {advantage.icon}
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ fontFamily: 'Montserrat', color: '#000000' }}>
                  {advantage.title}
                </h3>
                <p style={{ color: '#6E6E6E' }}>
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-green-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6" style={{ fontFamily: 'Montserrat' }}>
            Des Questions sur Nos Certifications ?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Nos experts sont à votre disposition pour vous expliquer en détail 
            tous nos labels et certifications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => onExpertClick?.('expert')}
              className="px-8 py-4 bg-white text-green-600 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
            >
              Parler à un expert
            </button>
            <button 
              onClick={() => onNavigate('content-hub')}
              className="px-8 py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-green-600 transition-colors"
            >
              Documentation complète
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}