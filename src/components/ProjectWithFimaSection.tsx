import {
  ArrowRight,
  CheckCircle,
  Users,
  Calendar,
  Award,
  Star,
  Quote,
} from "lucide-react";
import { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useTestimonials } from "../hooks/useTestimonials";
import { useApp } from "../contexts/AppContext";
import { TestimonialsInitButton } from "./TestimonialsInitButton";

interface ProjectWithFimaSectionProps {
  onNavigate?: (page: string) => void;
  onQuoteRequest?: () => void;
  onExpertClick?: (type: 'expert' | 'appointment') => void;
}

const processSteps = [
  {
    step: 1,
    title: "Consultation gratuite",
    description:
      "Analyse de vos besoins et étude de faisabilité",
    icon: Users,
  },
  {
    step: 2,
    title: "Devis personnalisé",
    description: "Proposition détaillée adaptée à votre budget",
    icon: Calendar,
  },
  {
    step: 3,
    title: "Réalisation & livraison",
    description:
      "Fabrication sur-mesure et installation professionnelle",
    icon: Award,
  },
];

const projectTypes = [
  {
    title: "FIMA Couchage",
    description:
      "Hôtellerie, résidences seniors, chambres médicalisées",
    image:
      "https://images.unsplash.com/photo-1742039953129-e4edcc82d319?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMGx1eHVyeSUyMGJlZHJvb218ZW58MXx8fHwxNzU2MDA4ODAxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    projects: "150+ projets",
    business: "fima-couchage",
    color: "#B5C233",
    categories: [
      "Matelas",
      "Sommiers",
      "Oreillers",
      "Linge de lit",
      "Accessoires literie",
    ],
  },
  {
    title: "FIMA Design",
    description: "Menuiserie, ameublement, cuisines sur mesure",
    image:
      "https://images.unsplash.com/photo-1661446600373-125cfeadf275?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kJTIwZnVybml0dXJlJTIwY3JhZnRzbWFufGVufDF8fHx8MTc1ODExMTY2MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    projects: "200+ projets",
    business: "fima-design",
    color: "#6E6E6E",
    categories: [
      "Menuiserie",
      "Ameublement",
      "Cuisines",
      "Dressings",
      "Aménagements sur mesure",
    ],
  },
  {
    title: "UNIVERS GLASS",
    description: "Vitrerie, menuiserie aluminium, fenêtres",
    image:
      "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbGFzcyUyMHdpbmRvdyUyMG1vZGVybnxlbnwxfHx8fDE3NTU2NDI0ODd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    projects: "80+ projets",
    business: "univers-glass",
    color: "#0EA5E9",
    categories: [
      "Vitrerie",
      "Menuiserie Alu",
      "Fenêtres",
      "Portes",
      "Cloisons",
    ],
  },
];

export function ProjectWithFimaSection({
  onNavigate,
  onQuoteRequest,
  onExpertClick,
}: ProjectWithFimaSectionProps) {
  const [currentTestimonial, setCurrentTestimonial] =
    useState(0);
  const { selectedLanguage } = useApp();
  const {
    testimonials,
    loading: testimonialsLoading,
    error: testimonialsError,
  } = useTestimonials(selectedLanguage.toLowerCase() as "fr" | "en", undefined, true, true);

  // Mapper les testimonials Supabase vers le format attendu
  const mappedTestimonials = testimonials.map((t) => ({
    id: t.id,
    name: t.clientName,
    company: t.clientCompany,
    location: t.clientLocation,
    image:
      t.clientPhoto ||
      "https://images.unsplash.com/photo-1709715357519-2a84f9765e57?w=1080",
    comment:
      selectedLanguage.toLowerCase() === "fr"
        ? t.testimonialFr
        : t.testimonialEn,
    rating: t.rating,
    project: t.project || "",
    featured: t.featured,
    published: t.published,
  }));

  const featuredTestimonials = mappedTestimonials.filter(
    (t) => t.featured && t.published,
  );

  const currentTestimonialData =
    featuredTestimonials[currentTestimonial];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            style={{
              fontFamily: "Montserrat",
              color: "#000000",
            }}
          >
            Votre projet avec FIMA
          </h2>
          <p
            className="mt-4 max-w-3xl mx-auto text-lg"
            style={{ color: "#6E6E6E" }}
          >
            Depuis 1985, nous accompagnons les professionnels
            dans la réalisation de leurs projets d'ameublement
            et de literie
          </p>
        </div>

        {/* Stats Banner */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div
              className="text-4xl mb-2"
              style={{
                color: "#B5C233",
                fontFamily: "Montserrat",
                fontWeight: "700",
              }}
            >
              40+
            </div>
            <p style={{ color: "#6E6E6E" }}>
              Années d'expérience
            </p>
          </div>
          <div className="text-center">
            <div
              className="text-4xl mb-2"
              style={{
                color: "#B5C233",
                fontFamily: "Montserrat",
                fontWeight: "700",
              }}
            >
              500+
            </div>
            <p style={{ color: "#6E6E6E" }}>Projets réalisés</p>
          </div>
          <div className="text-center">
            <div
              className="text-4xl mb-2"
              style={{
                color: "#B5C233",
                fontFamily: "Montserrat",
                fontWeight: "700",
              }}
            >
              98%
            </div>
            <p style={{ color: "#6E6E6E" }}>
              Clients satisfaits
            </p>
          </div>
        </div>

        {/* Project Types */}
        {/* <div className="mb-16">
          <h3 className="text-center mb-8" style={{ fontFamily: 'Montserrat', color: '#000000' }}>
            Nos 3 métiers d'expertise
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projectTypes.map((type, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:scale-105">
                <div className="aspect-[16/10] relative">
                  <ImageWithFallback
                    src={type.image}
                    alt={type.title}
                    className="w-full h-full object-cover"
                  />
                  <div 
                    className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold"
                    style={{ backgroundColor: type.color, color: '#FFFFFF' }}
                  >
                    {type.projects}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div 
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: type.color }}
                    ></div>
                    <h4 className="font-semibold" style={{ color: '#000000' }}>
                      {type.title}
                    </h4>
                  </div>
                  <p className="text-sm mb-3" style={{ color: '#6E6E6E' }}>
                    {type.description}
                  </p>
                  
                  {/* Catégories du métier
                  <div className="flex flex-wrap gap-1">
                    {type.categories.slice(0, 3).map((category, catIndex) => (
                      <span 
                        key={catIndex}
                        className="px-2 py-1 text-xs rounded-full"
                        style={{ 
                          backgroundColor: `${type.color}15`, 
                          color: type.color,
                          border: `1px solid ${type.color}30`
                        }}
                      >
                        {category}
                      </span>
                    ))}
                    {type.categories.length > 3 && (
                      <span 
                        className="px-2 py-1 text-xs rounded-full"
                        style={{ 
                          backgroundColor: '#f8f9fa', 
                          color: '#6E6E6E',
                          border: '1px solid #e9ecef'
                        }}
                      >
                        +{type.categories.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div> */}

        {/* Testimonials Section - DÉSACTIVÉE */}
        {/* <div className="mb-16">
          <h3
            className="text-center mb-8"
            style={{
              fontFamily: "Montserrat",
              color: "#000000",
            }}
          >
            Ils nous font confiance
          </h3>

          {testimonialsLoading ? (
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center animate-pulse">
                <div className="lg:col-span-2 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gray-200 rounded-full"></div>
                    <div className="space-y-2">
                      <div className="h-4 bg-gray-200 rounded w-32"></div>
                      <div className="h-3 bg-gray-200 rounded w-24"></div>
                      <div className="h-3 bg-gray-200 rounded w-40"></div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-4 bg-gray-200 rounded"></div>
                    <div className="h-4 bg-gray-200 rounded w-4/5"></div>
                  </div>
                </div>
                <div className="lg:col-span-1 space-y-4">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3"
                    >
                      <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                      <div className="space-y-2">
                        <div className="h-3 bg-gray-200 rounded w-20"></div>
                        <div className="h-2 bg-gray-200 rounded w-16"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : testimonialsError ? (
            <>
              <div className="bg-white rounded-2xl p-8 shadow-xl text-center">
                <p className="text-red-600">
                  {testimonialsError}
                </p>
              </div>
              <TestimonialsInitButton />
            </>
          ) : featuredTestimonials.length > 0 &&
            currentTestimonialData ? (
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                {/* Current Testimonial */}
        {/* <div className="lg:col-span-2">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex-shrink-0">
                      <ImageWithFallback
                        src={currentTestimonialData.image}
                        alt={currentTestimonialData.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                    </div>
                    <div>
                      <h4
                        style={{
                          color: "#000000",
                          marginBottom: "4px",
                        }}
                      >
                        {currentTestimonialData.name}
                      </h4>
                      <p
                        className="text-sm"
                        style={{
                          color: "#B5C233",
                          fontWeight: "600",
                        }}
                      >
                        {currentTestimonialData.company}
                      </p>
                      <p
                        className="text-xs"
                        style={{ color: "#6E6E6E" }}
                      >
                        {currentTestimonialData.location} •{" "}
                        {currentTestimonialData.project}
                      </p>
                    </div>
                  </div>

                  <div className="relative">
                    <Quote
                      className="absolute -top-2 -left-2 w-8 h-8 opacity-20"
                      style={{ color: "#B5C233" }}
                    />
                    <p
                      className="text-lg leading-relaxed pl-6"
                      style={{
                        color: "#000000",
                        fontStyle: "italic",
                      }}
                    >
                      "{currentTestimonialData.comment}"
                    </p>
                  </div>

                  <div className="flex items-center gap-1 mt-4">
                    {[
                      ...Array(currentTestimonialData.rating),
                    ].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-current"
                        style={{ color: "#B5C233" }}
                      />
                    ))}
                  </div>
                </div> */}

        {/* Navigation */}
        {/* <div className="lg:col-span-1">
                  <div className="flex lg:flex-col gap-4">
                    {featuredTestimonials.map(
                      (testimonial, index) => (
                        <button
                          key={testimonial.id}
                          onClick={() =>
                            setCurrentTestimonial(index)
                          }
                          className={`p-4 ml-2 rounded-xl text-left transition-all ${
                            index === currentTestimonial
                              ? "ring-2 shadow-md"
                              : "hover:shadow-md"
                          }`}
                          style={{
                            backgroundColor:
                              index === currentTestimonial
                                ? "#f8f9fa"
                                : "transparent",
                            ringColor:
                              index === currentTestimonial
                                ? "#B5C233"
                                : "transparent",
                          }}
                        >
                          <div className="flex items-center gap-3">
                            <ImageWithFallback
                              src={testimonial.image}
                              alt={testimonial.name}
                              className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                            />
                            <div className="min-w-0">
                              <p
                                className="text-sm truncate"
                                style={{
                                  color: "#000000",
                                  fontWeight: "600",
                                }}
                              >
                                {testimonial.name}
                              </p>
                              <p
                                className="text-xs truncate"
                                style={{ color: "#6E6E6E" }}
                              >
                                {testimonial.company}
                              </p>
                            </div>
                          </div>
                        </button>
                      ),
                    )}
                  </div>
                </div> */}
        {/* </div>
            </div>
          ) : null}

          {/* Admin indicator pour témoignages */}
        {/* {process.env.NODE_ENV === "development" &&
            !testimonialsLoading && (
              <div className="mt-4 text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-xs">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  Témoignages chargés dynamiquement depuis
                  Supabase
                </div>
              </div>
            )}
        </div> */}

        {/* Process Steps */}
        {/* <div className="mb-16">
          <h3 className="text-center mb-8" style={{ fontFamily: 'Montserrat', color: '#000000' }}>
            Notre processus en 3 étapes
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="text-center">
                  <div 
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{ backgroundColor: '#B5C233' }}
                  >
                    <Icon className="w-8 h-8" style={{ color: '#333333' }} />
                  </div>
                  <div 
                    className="w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-4 text-sm"
                    style={{ backgroundColor: '#E30613', color: '#FFFFFF', fontWeight: '700' }}
                  >
                    {step.step}
                  </div>
                  <h4 className="mb-2" style={{ color: '#000000' }}>
                    {step.title}
                  </h4>
                  <p className="text-sm" style={{ color: '#6E6E6E' }}>
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div> */}

        {/* CTA Section */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3
                className="mb-4"
                style={{
                  fontFamily: "Montserrat",
                  color: "#000000",
                }}
              >
                Prêt à démarrer votre projet ?
              </h3>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <CheckCircle
                    className="w-5 h-5"
                    style={{ color: "#B5C233" }}
                  />
                  <span
                    className="text-sm"
                    style={{ color: "#6E6E6E" }}
                  >
                    Devis sous 48h
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle
                    className="w-5 h-5"
                    style={{ color: "#B5C233" }}
                  />
                  <span
                    className="text-sm"
                    style={{ color: "#6E6E6E" }}
                  >
                    Accompagnement personnalisé
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle
                    className="w-5 h-5"
                    style={{ color: "#B5C233" }}
                  />
                  <span
                    className="text-sm"
                    style={{ color: "#6E6E6E" }}
                  >
                    Garantie qualité FIMA
                  </span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => onQuoteRequest?.()}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg transition-colors"
                  style={{
                    backgroundColor: "#B5C233",
                    color: "#6E6E6E",
                    fontFamily: "Inter",
                    fontWeight: "500",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor =
                      "#B5C233";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor =
                      "#B5C233";
                  }}
                >
                  Demander un devis
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onNavigate?.("all-projects")}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border transition-colors"
                  style={{
                    backgroundColor: "#6E6E6E",
                    borderColor: "#6E6E6E",
                    color: "#B5C233",
                    fontFamily: "Inter",
                    fontWeight: "500",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor =
                      "#B5C233";
                    e.currentTarget.style.color = "#333333";
                  }}
                >
                  Voir nos projets
                </button>
              </div>
            </div>
            <div className="relative">
              <ImageWithFallback
                src="https://jxikbrjmdmznoehhccdw.supabase.co/storage/v1/object/public/make-98c6ec1c-media/images/abd6e863-dab3-4e5a-9cca-5d58881ba6ac.png"
                alt="Équipe FIMA en réunion projet"
                className="w-full h-80 object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}