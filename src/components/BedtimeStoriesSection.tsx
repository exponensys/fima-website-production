import { Star } from "lucide-react";
import { useTestimonials } from "../hooks/useTestimonials";
import { useLanguage } from "../hooks/useLanguage";
import { TestimonialsInitButton } from "./TestimonialsInitButton";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function BedtimeStoriesSection() {
  const { selectedLanguage } = useLanguage();

  // Récupération des témoignages depuis Supabase
  const { testimonials, loading, error } = useTestimonials(
    selectedLanguage === "en" ? "en" : "fr",
    undefined, // category
    false, // featuredOnly
    true, // publishedOnly
  );

  // Limiter à 3 témoignages
  const displayedTestimonials = testimonials.slice(0, 3);

  return (
    <section className="py-8 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2
            className="text-xl md:text-3xl mb-3 md:mb-4"
            style={{
              fontFamily: "Montserrat",
              color: "#000000",
            }}
          >
            {selectedLanguage === "en"
              ? "FIMA bedtime stories"
              : "Avis et expériences clients"}
          </h2>
          <p
            className="text-sm md:text-lg max-w-2xl mx-auto"
            style={{ color: "#6E6E6E" }}
          >
            {selectedLanguage === "en"
              ? "Testimonials from our satisfied customers across West Africa."
              : "Témoignages de nos clients satisfaits."}
          </p>
        </div>

        {/* Testimonials Grid */}
        {loading ? (
          // Skeleton pour les témoignages
          <div className="products-grid w-full">
            {Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index}
                className="bg-white p-6 md:p-8 shadow-lg animate-pulse"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-gray-200"></div>
                  <div className="flex-1">
                    <div className="flex gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className="w-4 h-4 bg-gray-200"
                        ></div>
                      ))}
                    </div>
                    <div className="h-4 bg-gray-200 mb-1"></div>
                    <div className="h-3 bg-gray-200 w-2/3"></div>
                  </div>
                </div>
                <div className="h-4 bg-gray-200 mb-4"></div>
                <div className="space-y-2">
                  <div className="h-3 bg-gray-200"></div>
                  <div className="h-3 bg-gray-200"></div>
                  <div className="h-3 bg-gray-200 w-3/4"></div>
                </div>
              </div>
            ))}
          </div>
        ) : error ? (
          // Message d'erreur avec bouton d'initialisation
          <>
            <div className="text-center py-12">
              <p style={{ color: "#6E6E6E" }}>
                {selectedLanguage === "en"
                  ? "Unable to load testimonials at this time."
                  : "Impossible de charger les témoignages pour le moment."}
              </p>
            </div>
            <TestimonialsInitButton />
          </>
        ) : displayedTestimonials.length === 0 ? (
          // Message vide
          <div className="text-center py-12">
            <p style={{ color: "#6E6E6E" }}>
              {selectedLanguage === "en"
                ? "No testimonials available at this time."
                : "Aucun témoignage disponible pour le moment."}
            </p>
          </div>
        ) : (
          <div className="products-grid w-full">
            {displayedTestimonials.map((testimonial, index) => {
              // Avatar emoji basé sur le nom ou photo
              const avatar = testimonial.clientPhoto || "👤";
              const testimonialText =
                selectedLanguage === "en"
                  ? testimonial.testimonialEn
                  : testimonial.testimonialFr;

              return (
                <div
                  key={testimonial.id}
                  className="bg-white p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  {/* Header avec avatar et info */}
                  <div className="flex items-start gap-4 mb-6">
                    {testimonial.clientPhoto ? (
                      <img
                        src={testimonial.clientPhoto}
                        alt={testimonial.clientName}
                        className="w-12 h-12 object-cover rounded-full"
                      />
                    ) : (
                      <div className="w-12 h-12 rounded-full bg-[#B5C233] flex items-center justify-center text-white text-xl">
                        {testimonial.clientName.charAt(0)}
                      </div>
                    )}
                    <div className="flex-1">
                      <div className="flex items-center gap-1 mb-2">
                        {[...Array(testimonial.rating)].map(
                          (_, i) => (
                            <Star
                              key={i}
                              className="w-4 h-4 fill-current"
                              style={{ color: "#FFB800" }}
                            />
                          ),
                        )}
                      </div>
                      <h4
                        className="mb-1"
                        style={{
                          fontFamily: "Montserrat",
                          color: "#000000",
                        }}
                      >
                        {testimonial.clientName}
                      </h4>
                      <p
                        className="text-sm"
                        style={{ color: "#6E6E6E" }}
                      >
                        {testimonial.clientLocation}
                      </p>
                    </div>
                  </div>

                  {/* Nom du produit/projet */}
                  {testimonial.project && (
                    <h5
                      className="mb-4"
                      style={{
                        fontFamily: "Montserrat",
                        color: "#B5C233",
                        fontSize: "1.1rem",
                        fontWeight: "600",
                      }}
                    >
                      {testimonial.project}
                    </h5>
                  )}

                  {/* Témoignage */}
                  <blockquote
                    className="text-base leading-relaxed"
                    style={{
                      color: "#000000",
                      fontFamily: "Montserrat",
                      fontWeight: "400",
                      fontStyle: "italic",
                    }}
                  >
                    "{testimonialText}"
                  </blockquote>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}