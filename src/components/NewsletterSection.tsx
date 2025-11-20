import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faCircleCheck,
  faArrowRight,
  faUser,
  faBell,
  faGift,
} from "@fortawesome/free-solid-svg-icons";
import {
  useNewsletterSubscription,
  useNewsletterStats,
} from "../hooks/useNewsletter";
import { useLanguage } from "../hooks/useLanguage";

interface NewsletterSectionProps {
  onNavigate?: (page: string) => void;
}

export function NewsletterSection({
  onNavigate,
}: NewsletterSectionProps) {
  const { selectedLanguage } = useLanguage();
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [emailError, setEmailError] = useState("");

  const {
    subscribe,
    loading,
    error: subscriptionError,
  } = useNewsletterSubscription();
  const { stats } = useNewsletterStats();

  // Validation d'email
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError(
        selectedLanguage === "EN"
          ? "Invalid email format (ex: example@email.com)"
          : "Format email invalide (ex: example@email.com)"
      );
      return false;
    }
    setEmailError("");
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || loading) return;

    // Valider l'email avant d'envoyer
    if (!validateEmail(email)) {
      return;
    }

    const result = await subscribe(email, {
      couchage: true,
      design: true,
      glass: true,
    });

    if (result.success) {
      setIsSubscribed(true);
      setEmail("");
      setEmailError("");
    }
  };

  const benefits = [
    {
      icon: faBell,
      titleFr: "Nouveautés FIMA Couchage",
      titleEn: "FIMA Couchage News",
      descriptionFr:
        "Matelas, sommiers, oreillers et accessoires literie",
      descriptionEn:
        "Mattresses, box springs, pillows and bedding accessories",
      color: "#B5C233",
    },
    {
      icon: faGift,
      titleFr: "Projets FIMA Design",
      titleEn: "FIMA Design Projects",
      descriptionFr:
        "Menuiserie, ameublement et aménagements sur mesure",
      descriptionEn:
        "Carpentry, furnishings and custom layouts",
      color: "#6E6E6E",
    },
    {
      icon: faUser,
      titleFr: "Solutions UNIVERS GLASS",
      titleEn: "UNIVERS GLASS Solutions",
      descriptionFr:
        "Vitrerie, menuiserie aluminium et cloisons",
      descriptionEn: "Glazing, aluminum joinery and partitions",
      color: "#0EA5E0",
    },
  ];

  // Get localized text
  const tagline =
    selectedLanguage === "EN"
      ? "FIMA Newsletter"
      : "Newsletter FIMA";
  const title =
    selectedLanguage === "EN"
      ? "Stay connected with FIMA"
      : "Restez connecté avec FIMA";
  const subtitle =
    selectedLanguage === "EN"
      ? "Follow the news of our 3 businesses: bedding, carpentry-furnishing, and glazing-aluminum"
      : "Suivez l'actualité de nos 3 métiers : literie, menuiserie-ameublement, et vitrerie-aluminium";
  const emailPlaceholder =
    selectedLanguage === "EN"
      ? "Your email address"
      : "Votre adresse email";
  const subscribeButton =
    selectedLanguage === "EN" ? "Subscribe" : "S'inscrire";
  const subscribingButton =
    selectedLanguage === "EN"
      ? "Subscribing..."
      : "Inscription...";
  const successTitle =
    selectedLanguage === "EN"
      ? "Subscription successful!"
      : "Inscription réussie !";
  const successMessage =
    selectedLanguage === "EN"
      ? "Thank you for subscribing! You will soon receive our first newsletter with our latest news."
      : "Merci de votre inscription ! Vous recevrez bientôt notre première newsletter avec nos dernières actualités.";
  const subscribeAnother =
    selectedLanguage === "EN"
      ? "Subscribe with another address"
      : "S'inscrire avec une autre adresse";
  const privacyText =
    selectedLanguage === "EN"
      ? "By subscribing, you agree to receive our marketing emails. You can unsubscribe at any time."
      : "En vous inscrivant, vous acceptez de recevoir nos emails marketing. Vous pouvez vous désabonner à tout moment.";
  const privacyLink =
    selectedLanguage === "EN"
      ? "Privacy Policy"
      : "Politique de confidentialité";
  const subscribersCount = stats
    ? stats.activeSubscribers
    : 2500;
  const subscribersText =
    selectedLanguage === "EN"
      ? `+${subscribersCount} subscribers • 3 businesses`
      : `+${subscribersCount} abonnés • 3 métiers`;
  const emailFrequency =
    selectedLanguage === "EN"
      ? "📧 1 email per week maximum"
      : "📧 1 email par semaine maximum";

  return (
    <section
      className="py-8 md:py-12 relative overflow-hidden"
      style={{ backgroundColor: "#f8f9fa" }}
    >
      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto">
          {/* Content */}
          <div>
            <div className="text-center mb-6 md:mb-8">
              <div className="flex items-center justify-center gap-2 mb-3 md:mb-4">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="w-5 h-5 md:w-6 md:h-6"
                  style={{ color: "#B5C233" }}
                />
                <span
                  className="px-3 py-1 text-sm"
                  style={{
                    backgroundColor: "#B5C233",
                    color: "#6E6E6E",
                  }}
                >
                  {tagline}
                </span>
              </div>

              <h2
                className="mb-2 md:mb-3"
                style={{
                  fontFamily: "Montserrat",
                  color: "#000000",
                }}
              >
                {title}
              </h2>

              <p
                className="text-sm md:text-base mb-4 md:mb-6"
                style={{
                  color: "#6E6E6E",
                  maxWidth: "600px",
                  margin: "0 auto",
                }}
              >
                {subtitle}
              </p>
            </div>

            {/* Benefits */}
            {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 mb-6 md:mb-8">
              {benefits.map((benefit, index) => {
                const title = currentLanguage === 'en' ? benefit.titleEn : benefit.titleFr;
                const description = currentLanguage === 'en' ? benefit.descriptionEn : benefit.descriptionFr;
                
                return (
                  <div key={index} className="flex flex-col items-center text-center p-3 md:p-4 bg-white" style={{ border: '1px solid #E5E5E5' }}>
                    <div 
                      className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center flex-shrink-0 mb-2 md:mb-3"
                      style={{ backgroundColor: benefit.color, color: '#FFFFFF' }}
                    >
                      {benefit.icon}
                    </div>
                    <h4 className="mb-1 md:mb-2 text-sm md:text-base" style={{ color: '#000000' }}>
                      {title}
                    </h4>
                    <p className="text-xs md:text-sm" style={{ color: '#6E6E6E' }}>
                      {description}
                    </p>
                  </div>
                );
              })}
            </div> */}

            {/* Newsletter Form */}
            {!isSubscribed ? (
              <form
                onSubmit={handleSubmit}
                className="space-y-3 md:space-y-4 max-w-2xl mx-auto"
              >
                {subscriptionError && (
                  <div
                    className="p-3 border text-sm"
                    style={{
                      borderColor: "#E30613",
                      backgroundColor: "#fff5f5",
                      color: "#E30613",
                    }}
                  >
                    {subscriptionError}
                  </div>
                )}

                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="flex-1">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={emailPlaceholder}
                      required
                      disabled={loading}
                      className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 transition-all text-sm md:text-base"
                      style={{
                        backgroundColor: "#FFFFFF",
                      }}
                    />
                    {emailError && (
                      <p
                        className="text-xs text-red-500"
                        style={{ color: "#E30613" }}
                      >
                        {emailError}
                      </p>
                    )}
                  </div>
                  <button
                    type="submit"
                    disabled={loading || !email}
                    className="inline-flex items-center justify-center gap-2 px-4 md:px-6 py-3 transition-all disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap text-sm md:text-base"
                    style={{
                      backgroundColor: "#B5C233",
                      color: "#6E6E6E",
                    }}
                    onMouseEnter={(e) => {
                      if (!loading && email) {
                        e.currentTarget.style.backgroundColor =
                          "#c5050f";
                      }
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor =
                        "#B5C233";
                    }}
                  >
                    {loading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent animate-spin"></div>
                        {subscribingButton}
                      </>
                    ) : (
                      <>
                        {subscribeButton}
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className="w-4 h-4"
                        />
                      </>
                    )}
                  </button>
                </div>

                <p
                  className="text-xs text-center"
                  style={{ color: "#6E6E6E" }}
                >
                  {privacyText}{" "}
                  <button
                    type="button"
                    onClick={() => onNavigate?.("privacy")}
                    className="underline hover:no-underline"
                    style={{ color: "#B5C233" }}
                  >
                    {privacyLink}
                  </button>
                </p>
              </form>
            ) : (
              <div
                className="p-4 md:p-6 border-2 border-dashed max-w-2xl mx-auto"
                style={{
                  borderColor: "#B5C233",
                  backgroundColor: "#f0f8e8",
                }}
              >
                <div className="flex flex-col items-center text-center gap-2 md:gap-3 mb-3 md:mb-4">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="w-6 h-6 md:w-8 md:h-8"
                    style={{ color: "#B5C233" }}
                  />
                  <h4 style={{ color: "#000000" }}>
                    {successTitle}
                  </h4>
                </div>
                <p
                  className="text-xs md:text-sm mb-3 md:mb-4 text-center"
                  style={{ color: "#6E6E6E" }}
                >
                  {successMessage}
                </p>
                <div className="text-center">
                  <button
                    onClick={() => setIsSubscribed(false)}
                    className="text-xs md:text-sm underline hover:no-underline"
                    style={{ color: "#B5C233" }}
                  >
                    {subscribeAnother}
                  </button>
                </div>
              </div>
            )}

            {/* Social proof */}
            {/* <div className="mt-4 md:mt-6 pt-4 md:pt-6 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 text-xs md:text-sm" style={{ color: '#6E6E6E' }}>
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    <div 
                      className="w-6 h-6 md:w-8 md:h-8 border-2 border-white flex items-center justify-center text-white text-xs" 
                      style={{ backgroundColor: '#B5C233' }}
                      title="FIMA Couchage"
                    >
                      C
                    </div>
                    <div 
                      className="w-6 h-6 md:w-8 md:h-8 border-2 border-white flex items-center justify-center text-xs" 
                      style={{ backgroundColor: '#6E6E6E', color: '#B5C233' }}
                      title="FIMA Design"
                    >
                      D
                    </div>
                    <div 
                      className="w-6 h-6 md:w-8 md:h-8 border-2 border-white flex items-center justify-center text-white text-xs" 
                      style={{ backgroundColor: '#0EA5E0' }}
                      title="UNIVERS GLASS"
                    >
                      G
                    </div>
                  </div>
                  <span>{subscribersText}</span>
                </div>
                <div className="hidden sm:block h-4 w-px bg-gray-300"></div>
                <span>{emailFrequency}</span>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}