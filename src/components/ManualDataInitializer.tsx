/**
 * Initialiseur de données manuel - Version alternative
 * Initialise les données en appelant les routes POST individuelles
 */

import { useState } from 'react';
import { projectId, publicAnonKey } from '../utils/supabase/info';
import { Button } from './ui/button';
import { toast } from 'sonner';

export function ManualDataInitializer({ onClose }: { onClose: () => void }) {
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState('');

  const initializeData = async () => {
    setLoading(true);
    setProgress(0);
    
    try {
      const baseUrl = `https://${projectId}.supabase.co/functions/v1/make-server-98c6ec1c`;
      const headers = {
        'Authorization': `Bearer ${publicAnonKey}`,
        'Content-Type': 'application/json'
      };

      // Données à initialiser
      const initSteps = [
        {
          name: 'Langues',
          url: `${baseUrl}/site-settings`,
          data: {
            key: 'languages',
            value: [
              { code: "FR", name: "Français", flag: "🇫🇷" },
              { code: "EN", name: "English", flag: "🇬🇧" }
            ]
          }
        },
        {
          name: 'Devises',
          url: `${baseUrl}/site-settings`,
          data: {
            key: 'currencies',
            value: [
              { code: "XOF", symbol: "F CFA", name: "Franc CFA" },
              { code: "EUR", symbol: "€", name: "Euro" },
              { code: "USD", symbol: "$", name: "US Dollar" },
              { code: "GBP", symbol: "£", name: "British Pound" }
            ]
          }
        },
        {
          name: 'Description entreprise',
          url: `${baseUrl}/site-settings`,
          data: {
            key: 'company_description',
            value: "Leader dans la litterie, l'ameublement et la vitrerie depuis plus de 40 ans. FIMA accompagne les professionnels et les particuliers avec expertise et innovation."
          }
        },
        {
          name: 'Certifications',
          url: `${baseUrl}/site-settings`,
          data: {
            key: 'certifications',
            value: [
              "Entreprise du Patrimoine Vivant",
              "Certifié ISO 9001"
            ]
          }
        },
        {
          name: 'Liens réseaux sociaux',
          url: `${baseUrl}/site-settings`,
          data: {
            key: 'social_links',
            value: {
              facebook: "#",
              instagram: "#",
              linkedin: "#",
              twitter: "#"
            }
          }
        },
        {
          name: 'Informations contact',
          url: `${baseUrl}/site-settings`,
          data: {
            key: 'contact_info',
            value: {
              email: "contact@fima.ci",
              phone: "+225 27 22 12 34 56",
              address: "Zone Industrielle, Abidjan, Côte d'Ivoire",
              hours: "Lun-Ven: 8h-18h, Sam: 9h-13h"
            }
          }
        },
        {
          name: 'Business Units',
          url: `${baseUrl}/business-units`,
          data: [
            {
              id: 'fima-couchage',
              slug: 'fima-couchage',
              name: 'FIMA Couchage',
              description: 'Solutions complètes pour literie professionnelle et particuliers',
              icon: 'Bed',
              primary_color: '#B5C233'
            },
            {
              id: 'fima-design',
              slug: 'fima-design',
              name: 'FIMA Design',
              description: 'Menuiserie et ameublement sur mesure',
              icon: 'Armchair',
              primary_color: '#6E6E6E'
            },
            {
              id: 'univers-glass',
              slug: 'univers-glass',
              name: 'UNIVERS GLASS',
              description: 'Vitrerie et menuiserie aluminium',
              icon: 'Building2',
              primary_color: '#0EA5E9'
            }
          ]
        },
        {
          name: 'Catégories de produits',
          url: `${baseUrl}/product-categories`,
          data: {
            "fima-couchage": [
              { key: "matelas", name: "Matelas", icon: "🛏️", description: "Ressorts, mousse, latex naturel", count: "45 modèles", business: "fima-couchage" },
              { key: "sommiers", name: "Sommiers", icon: "🏠", description: "Tapissiers, électriques, à lattes", count: "32 modèles", business: "fima-couchage" },
              { key: "oreillers", name: "Oreillers", icon: "💤", description: "Mémoire de forme, duvet, ergonomiques", count: "28 modèles", business: "fima-couchage" },
              { key: "linge-de-lit", name: "Linge de lit", icon: "🌿", description: "Parures, draps, couettes", count: "150+ articles", business: "fima-couchage" },
              { key: "accessoires-literie", name: "Accessoires", icon: "✨", description: "Protections, surmatelas, coussins", count: "45 articles", business: "fima-couchage" }
            ],
            "fima-design": [
              { key: "menuiserie", name: "Menuiserie", icon: "🪵", description: "Bois massif, aggloméré, MDF", count: "60+ références", business: "fima-design" },
              { key: "ameublement", name: "Ameublement", icon: "🪑", description: "Mobilier sur mesure et standard", count: "85+ modèles", business: "fima-design" },
              { key: "cuisines", name: "Cuisines", icon: "🍳", description: "Cuisines équipées modernes", count: "40+ modèles", business: "fima-design" },
              { key: "dressings", name: "Dressings", icon: "👔", description: "Rangements sur mesure", count: "35+ modèles", business: "fima-design" },
              { key: "amenagements-mesure", name: "Aménagements sur mesure", icon: "📐", description: "Projets personnalisés", count: "Sur mesure", business: "fima-design" }
            ],
            "univers-glass": [
              { key: "vitrerie", name: "Vitrerie", icon: "🪟", description: "Vitres et miroirs", count: "50+ types", business: "univers-glass" },
              { key: "menuiserie-aluminium", name: "Menuiserie Aluminium", icon: "🔩", description: "Cadres et structures", count: "45+ profils", business: "univers-glass" },
              { key: "fenetres", name: "Fenêtres", icon: "🏠", description: "Fenêtres sur mesure", count: "60+ modèles", business: "univers-glass" },
              { key: "portes", name: "Portes", icon: "🚪", description: "Portes vitrées et alu", count: "55+ modèles", business: "univers-glass" },
              { key: "cloisons", name: "Cloisons", icon: "🧱", description: "Séparations d'espaces", count: "30+ solutions", business: "univers-glass" }
            ]
          }
        }
      ];

      // Initialiser chaque donnée
      let completed = 0;
      for (const step of initSteps) {
        setCurrentStep(`Initialisation: ${step.name}...`);
        
        try {
          const response = await fetch(step.url, {
            method: 'POST',
            headers,
            body: JSON.stringify(step.data)
          });

          if (!response.ok) {
            console.warn(`Échec pour ${step.name}:`, response.status);
            // Continue même en cas d'erreur
          }
          
          completed++;
          setProgress(Math.round((completed / initSteps.length) * 100));
        } catch (error) {
          console.error(`Erreur ${step.name}:`, error);
          // Continue même en cas d'erreur
        }
      }

      setCurrentStep('Initialisation terminée !');
      toast.success('✅ Données initialisées avec succès !', {
        description: 'La page va se recharger dans 2 secondes...'
      });

      // Recharger la page
      setTimeout(() => {
        window.location.reload();
      }, 2000);

    } catch (error) {
      console.error('Erreur globale:', error);
      toast.error('❌ Erreur lors de l\'initialisation', {
        description: error instanceof Error ? error.message : 'Erreur inconnue'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999]">
      <div className="bg-white p-8 shadow-2xl max-w-md w-full mx-4">
        <div className="text-center mb-6">
          <div className="text-6xl mb-4">🚀</div>
          <h2 className="text-2xl mb-2">Initialisation des données</h2>
          <p className="text-gray-600">
            Cette opération va créer les données essentielles dans le KV Store.
          </p>
        </div>

        {loading && (
          <div className="mb-6">
            <div className="w-full bg-gray-200 h-2 mb-2">
              <div 
                className="h-2 transition-all duration-300"
                style={{ 
                  width: `${progress}%`,
                  backgroundColor: '#B5C233'
                }}
              />
            </div>
            <p className="text-sm text-gray-600 text-center">
              {currentStep}
            </p>
          </div>
        )}

        <div className="bg-gray-50 p-4 mb-6 text-sm">
          <p className="mb-2">Cette opération va créer :</p>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            <li>6 clés site_settings</li>
            <li>3 business units</li>
            <li>15 catégories de produits</li>
          </ul>
        </div>

        <Button
          onClick={initializeData}
          disabled={loading}
          className="w-full py-6 text-lg mb-4"
          style={{ backgroundColor: '#E30613' }}
        >
          {loading ? (
            <>
              <span className="mr-2">⏳</span>
              Initialisation... {progress}%
            </>
          ) : (
            <>
              <span className="mr-2">🚀</span>
              Initialiser maintenant
            </>
          )}
        </Button>

        <button
          onClick={onClose}
          disabled={loading}
          className="w-full text-sm text-gray-500 hover:text-gray-700"
        >
          Fermer
        </button>
      </div>
    </div>
  );
}