import { ArrowLeft, Copy, Check, Palette, Type, Layout, Layers, Zap } from 'lucide-react';
import { useState } from 'react';
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { ScrollManager } from './ScrollManager';

interface BrandGuidelinesPageProps {
  onBack: () => void;
  onNavigate: (page: string) => void;
}

interface ColorSwatch {
  name: string;
  hex: string;
  rgb: string;
  usage: string;
  cssVar: string;
}

interface TypographyExample {
  element: string;
  font: string;
  size: string;
  weight: string;
  lineHeight: string;
  usage: string;
}

export function BrandGuidelinesPage({ onBack, onNavigate }: BrandGuidelinesPageProps) {
  const [copiedColor, setCopiedColor] = useState<string | null>(null);

  const colors: ColorSwatch[] = [
    {
      name: "FIMA Vert Anis",
      hex: "#B5C233",
      rgb: "181, 194, 51",
      usage: "Couleur principale - Actions secondaires, accents positifs",
      cssVar: "--fima-green"
    },
    {
      name: "FIMA Rouge",
      hex: "#E30613",
      rgb: "227, 6, 19",
      usage: "Couleur d'action principale - Boutons CTA, alertes importantes",
      cssVar: "--fima-red"
    },
    {
      name: "FIMA Bleu Cyan (Univers Glass)",
      hex: "#0EA5E9",
      rgb: "14, 165, 233",
      usage: "Couleur spécifique à Univers Glass - Accents métier",
      cssVar: "--fima-blue"
    },
    {
      name: "FIMA Gris",
      hex: "#6E6E6E",
      rgb: "110, 110, 110",
      usage: "Texte secondaire, éléments neutres",
      cssVar: "--fima-gray"
    },
    {
      name: "FIMA Gris Clair",
      hex: "#C0C0C0",
      rgb: "192, 192, 192",
      usage: "Bordures, séparateurs, éléments désactivés",
      cssVar: "--fima-gray-light"
    },
    {
      name: "FIMA Noir",
      hex: "#000000",
      rgb: "0, 0, 0",
      usage: "Texte principal, titres, éléments de forte hiérarchie",
      cssVar: "--fima-black"
    },
    {
      name: "FIMA Blanc",
      hex: "#FFFFFF",
      rgb: "255, 255, 255",
      usage: "Arrière-plans, texte sur fonds colorés",
      cssVar: "--fima-white"
    }
  ];

  const typography: TypographyExample[] = [
    {
      element: "H1",
      font: "Montserrat",
      size: "2.5rem (40px)",
      weight: "700 (Bold)",
      lineHeight: "1.2",
      usage: "Titres principaux de page"
    },
    {
      element: "H2",
      font: "Montserrat",
      size: "2rem (32px)",
      weight: "600 (Semi-bold)",
      lineHeight: "1.3",
      usage: "Titres de section"
    },
    {
      element: "H3",
      font: "Montserrat",
      size: "1.5rem (24px)",
      weight: "600 (Semi-bold)",
      lineHeight: "1.4",
      usage: "Sous-titres"
    },
    {
      element: "H4",
      font: "Montserrat",
      size: "1.25rem (20px)",
      weight: "600 (Semi-bold)",
      lineHeight: "1.4",
      usage: "Titres de composants"
    },
    {
      element: "Paragraphe",
      font: "Inter",
      size: "1rem (16px)",
      weight: "400 (Regular)",
      lineHeight: "1.6",
      usage: "Texte de contenu principal"
    },
    {
      element: "Label",
      font: "Inter",
      size: "1rem (16px)",
      weight: "500 (Medium)",
      lineHeight: "1.5",
      usage: "Étiquettes de formulaire"
    },
    {
      element: "Bouton",
      font: "Inter",
      size: "1rem (16px)",
      weight: "500 (Medium)",
      lineHeight: "1.5",
      usage: "Texte des boutons et liens d'action"
    }
  ];

  const copyToClipboard = async (text: string, type: 'hex' | 'rgb' | 'css') => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedColor(`${text}-${type}`);
      setTimeout(() => setCopiedColor(null), 2000);
    } catch (err) {
      console.error('Erreur lors de la copie:', err);
    }
  };

  const CopyButton = ({ text, type, label }: { text: string; type: 'hex' | 'rgb' | 'css'; label: string }) => {
    const isActive = copiedColor === `${text}-${type}`;
    
    return (
      <button
        onClick={() => copyToClipboard(text, type)}
        className="inline-flex items-center gap-1 px-2 py-1 text-xs bg-gray-100 hover:bg-gray-200 rounded transition-colors"
        title={`Copier ${label}`}
      >
        {isActive ? (
          <Check className="w-3 h-3 text-green-600" />
        ) : (
          <Copy className="w-3 h-3" />
        )}
        <span className="font-mono">{text}</span>
      </button>
    );
  };

  return (
    <ScrollManager>
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={onBack}
                className="flex items-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Retour
              </Button>
              <div className="h-6 w-px bg-gray-300" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Charte Graphique FIMA</h1>
                <p className="text-sm text-gray-600">Guide des couleurs, typographies et éléments de design</p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-8 space-y-12">
          {/* Introduction */}
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <Palette className="w-6 h-6" style={{ color: '#B5C233' }} />
                </div>
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-3">À propos de cette charte</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Cette charte graphique définit l'identité visuelle de FIMA, groupe spécialisé dans la literie, 
                  l'ameublement et la vitrerie depuis 1985. Elle garantit la cohérence visuelle sur l'ensemble 
                  de nos supports de communication.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-green-100 text-green-800">FIMA Couchage</Badge>
                  <Badge variant="secondary" className="bg-red-100 text-red-800">FIMA Design</Badge>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800">Univers Glass</Badge>
                </div>
              </div>
            </div>
          </div>

          {/* Palette de couleurs */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                <Palette className="w-5 h-5" style={{ color: '#E30613' }} />
              </div>
              <div>
                <h2 className="text-2xl font-semibold">Palette de couleurs</h2>
                <p className="text-gray-600">Couleurs officielles du groupe FIMA</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {colors.map((color, index) => (
                <Card key={index} className="overflow-hidden">
                  <div 
                    className="h-24 w-full"
                    style={{ backgroundColor: color.hex }}
                  />
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">{color.name}</CardTitle>
                    <CardDescription className="text-sm">
                      {color.usage}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">HEX</span>
                        <CopyButton text={color.hex} type="hex" label="HEX" />
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">RGB</span>
                        <CopyButton text={`rgb(${color.rgb})`} type="rgb" label="RGB" />
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">CSS Var</span>
                        <CopyButton text={color.cssVar} type="css" label="CSS Variable" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Typographie */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <Type className="w-5 h-5" style={{ color: '#0EA5E9' }} />
              </div>
              <div>
                <h2 className="text-2xl font-semibold">Typographie</h2>
                <p className="text-gray-600">Polices et hiérarchie typographique</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm space-y-8">
              {/* Polices principales */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle style={{ fontFamily: 'Montserrat' }}>Montserrat</CardTitle>
                    <CardDescription>Police principale pour les titres</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <p style={{ fontFamily: 'Montserrat', fontWeight: 400 }}>Regular 400</p>
                      <p style={{ fontFamily: 'Montserrat', fontWeight: 500 }}>Medium 500</p>
                      <p style={{ fontFamily: 'Montserrat', fontWeight: 600 }}>Semi-bold 600</p>
                      <p style={{ fontFamily: 'Montserrat', fontWeight: 700 }}>Bold 700</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle style={{ fontFamily: 'Inter' }}>Inter</CardTitle>
                    <CardDescription>Police pour le contenu et les interfaces</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <p style={{ fontFamily: 'Inter', fontWeight: 400 }}>Regular 400</p>
                      <p style={{ fontFamily: 'Inter', fontWeight: 500 }}>Medium 500</p>
                      <p style={{ fontFamily: 'Inter', fontWeight: 600 }}>Semi-bold 600</p>
                      <p style={{ fontFamily: 'Inter', fontWeight: 700 }}>Bold 700</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Hiérarchie typographique */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Hiérarchie typographique</h3>
                <div className="space-y-6">
                  {typography.map((typo, index) => (
                    <div key={index} className="border-l-4 border-gray-200 pl-6">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="mb-2">
                            {typo.element === 'H1' && <h1>Exemple de titre H1</h1>}
                            {typo.element === 'H2' && <h2>Exemple de titre H2</h2>}
                            {typo.element === 'H3' && <h3>Exemple de titre H3</h3>}
                            {typo.element === 'H4' && <h4>Exemple de titre H4</h4>}
                            {typo.element === 'Paragraphe' && <p>Exemple de paragraphe avec du texte courant pour illustrer la police Inter.</p>}
                            {typo.element === 'Label' && <label>Exemple de label</label>}
                            {typo.element === 'Bouton' && <button className="fima-btn-primary">Exemple de bouton</button>}
                          </div>
                          <p className="text-sm text-gray-600">{typo.usage}</p>
                        </div>
                        <div className="text-right text-sm space-y-1">
                          <div><span className="font-medium">Police:</span> {typo.font}</div>
                          <div><span className="font-medium">Taille:</span> {typo.size}</div>
                          <div><span className="font-medium">Poids:</span> {typo.weight}</div>
                          <div><span className="font-medium">Ligne:</span> {typo.lineHeight}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Composants UI */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <Layout className="w-5 h-5" style={{ color: '#B5C233' }} />
              </div>
              <div>
                <h2 className="text-2xl font-semibold">Composants UI</h2>
                <p className="text-gray-600">Éléments d'interface utilisateur</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Boutons */}
              <Card>
                <CardHeader>
                  <CardTitle>Boutons</CardTitle>
                  <CardDescription>Styles de boutons principaux</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm font-medium mb-2">Bouton Principal (Rouge)</p>
                    <button className="fima-btn-primary">Action Principale</button>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-2">Bouton Secondaire (Vert)</p>
                    <button className="fima-btn-secondary">Action Secondaire</button>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-2">Bouton Neutre</p>
                    <Button variant="outline">Action Neutre</Button>
                  </div>
                </CardContent>
              </Card>

              {/* Badges */}
              <Card>
                <CardHeader>
                  <CardTitle>Badges</CardTitle>
                  <CardDescription>Étiquettes et indicateurs</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm font-medium mb-2">Badge Vert</p>
                    <span className="fima-badge-green">Nouveau</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-2">Badge Rouge</p>
                    <span className="fima-badge-red">Urgent</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-2">Badge Standard</p>
                    <Badge variant="secondary">Information</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Espacement et grille */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                <Layers className="w-5 h-5 text-gray-600" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold">Espacement & Grille</h2>
                <p className="text-gray-600">Système d'espacement et de mise en page</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold mb-4">Échelle d'espacement</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-4">
                      <div className="w-4 h-4 bg-gray-300" />
                      <span className="text-sm font-mono">4px (0.25rem)</span>
                      <span className="text-sm text-gray-600">- Espacement minimal</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-4 bg-gray-300" />
                      <span className="text-sm font-mono">8px (0.5rem)</span>
                      <span className="text-sm text-gray-600">- Espacement petit</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-4 bg-gray-300" />
                      <span className="text-sm font-mono">12px (0.75rem)</span>
                      <span className="text-sm text-gray-600">- Espacement moyen</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-4 bg-gray-300" />
                      <span className="text-sm font-mono">16px (1rem)</span>
                      <span className="text-sm text-gray-600">- Espacement standard</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-24 h-4 bg-gray-300" />
                      <span className="text-sm font-mono">24px (1.5rem)</span>
                      <span className="text-sm text-gray-600">- Espacement large</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-4">Rayons de bordure</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gray-300 rounded-sm" />
                      <span className="text-sm font-mono">2px</span>
                      <span className="text-sm text-gray-600">- Petit</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gray-300 rounded" />
                      <span className="text-sm font-mono">6px</span>
                      <span className="text-sm text-gray-600">- Moyen</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gray-300 rounded-lg" />
                      <span className="text-sm font-mono">12px</span>
                      <span className="text-sm text-gray-600">- Standard (défaut)</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gray-300 rounded-xl" />
                      <span className="text-sm font-mono">16px</span>
                      <span className="text-sm text-gray-600">- Large</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Usage et bonnes pratiques */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-yellow-600" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold">Bonnes pratiques</h2>
                <p className="text-gray-600">Recommandations d'usage</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-green-200 bg-green-50">
                <CardHeader>
                  <CardTitle className="text-green-800">✅ À faire</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm text-green-700">
                  <p>• Utiliser le rouge FIMA pour les actions principales</p>
                  <p>• Respecter les contrastes pour l'accessibilité</p>
                  <p>• Utiliser Montserrat pour tous les titres</p>
                  <p>• Maintenir un espacement cohérent</p>
                  <p>• Adapter les couleurs selon le métier (bleu pour Univers Glass)</p>
                </CardContent>
              </Card>

              <Card className="border-red-200 bg-red-50">
                <CardHeader>
                  <CardTitle className="text-red-800">❌ À éviter</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm text-red-700">
                  <p>• Mélanger plusieurs polices de titre</p>
                  <p>• Utiliser des couleurs hors charte</p>
                  <p>• Négliger les espaces blancs</p>
                  <p>• Surcharger l'interface avec trop de couleurs</p>
                  <p>• Ignorer la hiérarchie visuelle établie</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Footer */}
          <div className="text-center py-8 border-t border-gray-200">
            <p className="text-gray-600 mb-4">
              Cette charte graphique est appliquée sur l'ensemble du site web FIMA.
            </p>
            <Button
              onClick={() => onNavigate('home')}
              className="fima-btn-secondary"
            >
              Retour à l'accueil
            </Button>
          </div>
        </div>
      </div>
    </ScrollManager>
  );
}