import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faMapPin,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { ImageWithFallback } from "./figma/ImageWithFallback";
const fimaFooterLogo = '/1da2d5f603cd62a74c69b55293bcdadb2f6d8468.png';

interface FooterProps {
  onNavigate?: (
    page: string,
    category?: string,
    data?: any,
  ) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer
      className="border-t"
      style={{
        backgroundColor: "#565757",
        borderColor: "#C0C0C0",
      }}
    >
      <div className="container mx-auto px-4 pt-[48px] pr-[16px] pb-[15px] pl-[16px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-y-8 gap-x-12">
          {/* Logo et description */}
          <div className="lg:col-span-2">
            <div>
              {/* Logo FIMA stylisé */}
              <div className="flex mt-0 mb-4">
                <img
                  src={fimaFooterLogo}
                  alt="GROUP FIMA - Literie - Menuiserie - Vitres - Aluminium"
                  className="w-auto object-contain ml-0"
                  style={{ maxWidth: "220px" }}
                />
              </div>
            </div>
            <p
              className="text-sm mb-1 pr-24"
              style={{ color: "#B5C233", textAlign: "justify" }}
            >
              Expert ivoirien en conception et fabrique des
              solutions en literie, menuiserie et
              vitrerie-aluminium depuis 1985, alliant
              savoir-faire local, innovation et qualité,
              GROUPFIMA équipe particuliers et professionnels
              avec des produits durables, élégants et 100 %
              confort. FIMA – De la conception à la réalisation.
            </p>

            {/* Certifications */}
            <div className="flex flex-wrap gap-2 mb-6">
              {/* <div
                className="px-3 py-1 text-xs"
                style={{
                  backgroundColor: "#B5C233",
                  color: "#6E6E6E",
                }}
              >
                Entreprise du Patrimoine Vivant
              </div> */}
              {/* <div
                className="px-3 py-1 text-xs"
                style={{
                  backgroundColor: "#0EA5E9",
                  color: "#FFFFFF",
                }}
              >
                Certifié ISO 9001
              </div> */}
            </div>

            {/* Réseaux sociaux */}
            <div className="flex gap-4 mb-[24px] mt-[-9px] mr-[0px] ml-[0px]">
              <a
                href="#"
                className="p-2 transition-colors hover:bg-gray-100"
                aria-label="Facebook"
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="w-5 h-5"
                  style={{ color: "#B5C233" }}
                />
              </a>
              <a
                href="#"
                className="p-2 transition-colors hover:bg-gray-100"
                aria-label="Instagram"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="w-5 h-5"
                  style={{ color: "#B5C233" }}
                />
              </a>
              <a
                href="#"
                className="p-2 transition-colors hover:bg-gray-100"
                aria-label="LinkedIn"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="w-5 h-5"
                  style={{ color: "#B5C233" }}
                />
              </a>
              <a
                href="#"
                className="p-2 transition-colors hover:bg-gray-100"
                aria-label="Twitter"
              >
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="w-5 h-5"
                  style={{ color: "#B5C233" }}
                />
              </a>
            </div>

            {/* Copyright */}
            <div
              className="text-sm"
              style={{ color: "#B5C233" }}
            >
              © 2025 FIMA. Tous droits réservés.
            </div>
          </div>

          {/* Nos métiers */}
          <div className="mt-[0px] mr-[0px] mb-[0px] ml-[-31px]">
            <h4
              className="mb-6"
              style={{
                fontFamily: "Montserrat",
                color: "#B5C233",
              }}
            >
              Nos métiers
            </h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => onNavigate?.("fima-couchage")}
                  className="text-sm hover:underline transition-colors"
                  style={{ color: "#B5C233" }}
                >
                  FIMA Couchage
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate?.("fima-design")}
                  className="text-sm hover:underline transition-colors"
                  style={{ color: "#B5C233" }}
                >
                  FIMA Design
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate?.("univers-glass")}
                  className="text-sm hover:underline transition-colors"
                  style={{ color: "#B5C233" }}
                >
                  Univers Glass
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate?.("b2b-solutions")}
                  className="text-sm hover:underline transition-colors"
                  style={{ color: "#B5C233" }}
                >
                  Solutions B2B
                </button>
              </li>
            </ul>
          </div>

          {/* Informations légales */}
          <div className="mt-[0px] mr-[0px] mb-[0px] ml-[-59px]">
            <h4
              className="mb-6"
              style={{
                fontFamily: "Montserrat",
                color: "#B5C233",
              }}
            >
              Informations légales
            </h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => onNavigate?.("legal")}
                  className="text-sm hover:underline transition-colors"
                  style={{ color: "#B5C233" }}
                >
                  Mentions légales
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate?.("privacy-policy")}
                  className="text-sm hover:underline transition-colors"
                  style={{ color: "#B5C233" }}
                >
                  Politique de confidentialité
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate?.("terms")}
                  className="text-sm hover:underline transition-colors"
                  style={{ color: "#B5C233" }}
                >
                  CGV
                </button>
              </li>
              {/* <li>
                <button
                  onClick={() => onNavigate?.("cms")}
                  className="text-sm hover:underline transition-colors"
                  style={{ color: "#B5C233" }}
                >
                  CMS
                </button>
              </li> */}

              {/* <li>
                <button
                  onClick={() => onNavigate?.("careers")}
                  className="text-sm hover:underline transition-colors"
                  style={{ color: "#B5C233" }}
                >
                  Carrières
                </button>
              </li> */}
              {/* <li>
                <button
                  onClick={() => onNavigate?.("sitemap")}
                  className="text-sm hover:underline transition-colors"
                  style={{ color: "#B5C233" }}
                >
                  Plan du site
                </button>
              </li> */}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="mb-6"
              style={{
                fontFamily: "Montserrat",
                color: "#B5C233",
              }}
            >
              Contact
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <FontAwesomeIcon
                  icon={faMapPin}
                  className="w-4 h-4 mt-1 flex-shrink-0"
                  style={{ color: "#B5C233" }}
                />
                <div
                  className="text-sm"
                  style={{ color: "#B5C233" }}
                >
                  <p style={{ color: "#B5C233" }}>
                    Abidjan, Yopougon
                  </p>
                  <p style={{ color: "#B5C233" }}>
                    Zone Industrielle
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="w-4 h-4 flex-shrink-0"
                  style={{ color: "#B5C233" }}
                />

                <a
                  href="tel:+2252723506102"
                  className="text-sm hover:underline transition-colors"
                  style={{ color: "#B5C233" }}
                >
                  +225 27 23 50 61 02
                </a>
              </div>
              <div className="flex items-center gap-3">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="w-4 h-4 flex-shrink-0"
                  style={{ color: "#B5C233" }}
                />

                <a
                  href="tel:+2250788989998"
                  className="text-sm hover:underline transition-colors"
                  style={{ color: "#B5C233" }}
                >
                  +225 07 88 98 99 98
                </a>
              </div>

              <div className="flex items-center gap-3">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="w-4 h-4 flex-shrink-0"
                  style={{ color: "#B5C233" }}
                />
                <a
                  href="mailto:contact@fima.fr"
                  className="text-sm hover:underline transition-colors"
                  style={{ color: "#B5C233" }}
                >
                  contact@groupfima.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Séparateur */}
        {/* <div
          className="border-t mt-12 pt-8"
          style={{ borderColor: "#C0C0C0" }}
        >
          {/* <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            {/* Badge qualité 
            <div className="flex items-center gap-2">
              <div
                className="px-3 py-1 rounded-full text-xs"
                style={{
                  backgroundColor: "#B5C233",
                  color: "#6E6E6E",
                }}
              >
                Fabriqué en Côte d'Ivoire
              </div>
            </div>
          </div> 
        </div>*/}
      </div>
    </footer>
  );
}