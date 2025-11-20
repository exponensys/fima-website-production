import logoAzalai from "figma:asset/0830b98154b75ab80e3cd699a5e2aa2e1ec34152.png";
import logoIbis from "figma:asset/4037f113fae77642415a905d8754f0d8f97275e0.png";
import logoSogelux from "figma:asset/2e32728242ef61bf86f6ae110315f7b4aa3c42f0.png";
import logoDesign from "figma:asset/c5289162cd684976dd7a7917d335170174c8652f.png";
import logoSofitel from "figma:asset/bc319577ff36e534afc433da243e1f45577b2ee8.png";
import logoTiama from "figma:asset/f9f04472112108f54be0f6fac5b31408d105f61a.png";
import logoBoyoot from "figma:asset/4673c7c573ce3de055ad9297c46aedc13b9bd55a.png";
import logoZino from "figma:asset/0da4bee747388108bad21044a698ea1d39bed9f0.png";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

interface PartnersSectionProps {
  onNavigate?: (page: string) => void;
}

export function PartnersSection({ onNavigate }: PartnersSectionProps) {
  const partners = [
    { name: "Azalaï Hotels", logo: logoAzalai },
    { name: "Ibis", logo: logoIbis },
    { name: "Sofitel Luxury Hotels", logo: logoSofitel },
    { name: "Hôtel TIAMA", logo: logoTiama },
    { name: "Sogelux", logo: logoSogelux },
    { name: "Partenaire Design", logo: logoDesign },
    { name: "BOYOOT Immobilier", logo: logoBoyoot },
    { name: "Zino", logo: logoZino },
    // Duplicate for seamless loop
    { name: "Azalaï Hotels", logo: logoAzalai },
    { name: "Ibis", logo: logoIbis },
    { name: "Sofitel Luxury Hotels", logo: logoSofitel },
    { name: "Hôtel TIAMA", logo: logoTiama },
    { name: "Sogelux", logo: logoSogelux },
    { name: "Partenaire Design", logo: logoDesign },
    { name: "BOYOOT Immobilier", logo: logoBoyoot },
    { name: "Zino", logo: logoZino },
  ];

  const [isPaused, setIsPaused] = useState(false);

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

        <div className="max-w-6xl mx-auto overflow-hidden">
          <motion.div
            className="flex gap-8"
            animate={{
              x: isPaused ? undefined : [0, -3600],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
              },
            }}
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