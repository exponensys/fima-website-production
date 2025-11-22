const logoAzalai = '/0830b98154b75ab80e3cd699a5e2aa2e1ec34152.png';
const logoIbis = '/4037f113fae77642415a905d8754f0d8f97275e0.png';
const logoSogelux = '/2e32728242ef61bf86f6ae110315f7b4aa3c42f0.png';
const logoDesign = '/c5289162cd684976dd7a7917d335170174c8652f.png';
const logoSofitel = '/bc319577ff36e534afc433da243e1f45577b2ee8.png';
const logoTiama = '/f9f04472112108f54be0f6fac5b31408d105f61a.png';
const logoBoyoot = '/4673c7c573ce3de055ad9297c46aedc13b9bd55a.png';
const logoZino = '/0da4bee747388108bad21044a698ea1d39bed9f0.png';
const logoSamsung = '/samsung-logo.svg';
const logoAeria = '/aeria-logo.svg';
const logoSocieteGenerale = '/angola-flag.svg';
const logoPullman = '/pullman-logo.svg';
const logoDipndip = '/dipndip-logo.svg';
const logoKpmg = '/kpmg-logo.svg';
const logoSara = '/sara-logo.svg';
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PartnersSectionProps {
  onNavigate?: (page: string) => void;
}

export function PartnersSection({ onNavigate }: PartnersSectionProps) {
  const partners = [
    { name: "Azalaï Hotels", logo: logoAzalai },
    { name: "Ibis", logo: logoIbis },
    { name: "Sofitel Luxury Hotels", logo: logoSofitel },
    { name: "Hôtel TIAMA", logo: logoTiama },
    { name: "Samsung", logo: logoSamsung },
    { name: "AERIA", logo: logoAeria },
    { name: "Société Générale", logo: logoSocieteGenerale },
    { name: "Pullman Hotels", logo: logoPullman },
    { name: "dipndip", logo: logoDipndip },
    { name: "KPMG", logo: logoKpmg },
    { name: "SARA 2025", logo: logoSara },
    { name: "Sogelux", logo: logoSogelux },
    { name: "Partenaire Design", logo: logoDesign },
    { name: "BOYOOT Immobilier", logo: logoBoyoot },
    { name: "Zino", logo: logoZino },
    // Duplicate for seamless loop
    { name: "Azalaï Hotels", logo: logoAzalai },
    { name: "Ibis", logo: logoIbis },
    { name: "Sofitel Luxury Hotels", logo: logoSofitel },
    { name: "Hôtel TIAMA", logo: logoTiama },
    { name: "Samsung", logo: logoSamsung },
    { name: "AERIA", logo: logoAeria },
    { name: "Société Générale", logo: logoSocieteGenerale },
    { name: "Pullman Hotels", logo: logoPullman },
    { name: "dipndip", logo: logoDipndip },
    { name: "KPMG", logo: logoKpmg },
    { name: "SARA 2025", logo: logoSara },
    { name: "Sogelux", logo: logoSogelux },
    { name: "Partenaire Design", logo: logoDesign },
    { name: "BOYOOT Immobilier", logo: logoBoyoot },
    { name: "Zino", logo: logoZino },
  ];

  const [isPaused, setIsPaused] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % (partners.length / 2));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + (partners.length / 2)) % (partners.length / 2));
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2
            className="mb-4"
            style={{ fontFamily: "Montserrat", color: "#0EA5E9" }}
          >
            Nos Partenaires
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ils nous font confiance pour leurs projets d'aménagement et
            d'équipement
          </p>
        </div>

        <div className="max-w-6xl mx-auto overflow-hidden relative">
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
          <motion.div
            className="flex gap-8"
            animate={{
              x: [0, -3600],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
              },
            }}
            style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {partners.map((partner, index) => (
              <div key={index} className="flex-shrink-0 w-64">
                <div className="flex items-center justify-center bg-white p-8 hover:shadow-lg transition-shadow duration-300 h-40">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-full h-28 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}