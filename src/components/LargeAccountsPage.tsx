import { ArrowLeft } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

interface LargeAccountsPageProps {
  onBack: () => void;
  onNavigate: (page: string) => void;
}

export function LargeAccountsPage({
  onBack,
  onNavigate,
}: LargeAccountsPageProps) {
  const advantages = [
    "Tarifs préférentiels et conditions commerciales adaptées à vos volumes",
    "Accès prioritaire à nos nouveautés, catalogues professionnels et fiches techniques",
    "Accompagnement personnalisé pour vos projets sur mesure",
    "Partenariats durables fondés sur la confiance, la qualité et la réactivité",
  ];

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
            Accueil
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white px-[0px] pt-[55px] pr-[0px] pb-[24px] pl-[0px]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1
              className="text-5xl font-bold mb-6"
              style={{
                fontFamily: "Montserrat",
                color: "#0EA5E9",
              }}
            >
              Espace Grands Comptes
            </h1>
            <p
              className="text-2xl mb-8"
              style={{ color: "#6E6E6E" }}
            >
              Un accès privilégié réservé aux professionnels de l'habitat et de la construction.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white pt-[0px] pr-[0px] pb-[10px] pl-[0px]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p
              className="text-lg leading-relaxed mb-6"
              style={{ color: "#6E6E6E" }}
            >
              Architectes, décorateurs, hôteliers, opérateurs immobiliers, grossistes ou distributeurs…
              FIMA met à votre disposition un espace exclusif pensé pour répondre aux besoins des grands comptes.
            </p>
            <p
              className="text-lg leading-relaxed"
              style={{ color: "#6E6E6E" }}
            >
              En rejoignant notre base de données, vous bénéficiez de :
            </p>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {advantages.map((advantage, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm"
                >
                  <div
                    className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                    style={{ backgroundColor: "#B5C233" }}
                  ></div>
                  <p
                    className="text-lg"
                    style={{ color: "#6E6E6E" }}
                  >
                    {advantage}
                  </p>
                </div>
              ))}
            </div>

            <p
              className="text-lg leading-relaxed mt-8 text-center font-medium"
              style={{ color: "#0EA5E9" }}
            >
              Rejoignez dès aujourd'hui l'Espace Grand Compte FIMA et collaborez avec un partenaire de référence au service de l'excellence ivoirienne.
            </p>
          </div>
        </div>
      </section>

      {/* Already Member Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2" style={{ borderColor: "#0EA5E9" }}>
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-4xl">👋</span>
                  <h2
                    className="text-2xl font-bold"
                    style={{
                      fontFamily: "Montserrat",
                      color: "#0EA5E9",
                    }}
                  >
                    Déjà membre ?
                  </h2>
                </div>
                <p
                  className="text-lg mb-6"
                  style={{ color: "#6E6E6E" }}
                >
                  Connectez-vous pour retrouver vos commandes, vos devis et vos projets enregistrés.
                </p>
                <Button
                  onClick={() => onNavigate("auth")}
                  className="px-8 py-6 rounded-lg font-semibold transition-colors"
                  style={{
                    backgroundColor: "#0EA5E9",
                    color: "white",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#0c93d1";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#0EA5E9";
                  }}
                >
                  Se connecter
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* New Member Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2" style={{ borderColor: "#B5C233" }}>
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-4xl">🆕</span>
                  <h2
                    className="text-2xl font-bold"
                    style={{
                      fontFamily: "Montserrat",
                      color: "#B5C233",
                    }}
                  >
                    Nouveau chez FIMA ?
                  </h2>
                </div>
                <p
                  className="text-lg mb-6"
                  style={{ color: "#6E6E6E" }}
                >
                  Créez votre compte en quelques clics pour bénéficier d'un accompagnement exclusif et transformer vos idées en réalisations concrètes.
                </p>
                <Button
                  onClick={() => onNavigate("auth")}
                  className="px-8 py-6 rounded-lg font-semibold transition-colors"
                  style={{
                    backgroundColor: "#B5C233",
                    color: "#6E6E6E",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#a3af2e";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#B5C233";
                  }}
                >
                  👉 Créer mon compte FIMA
                </Button>
                <p
                  className="text-sm mt-4 italic"
                  style={{ color: "#6E6E6E" }}
                >
                  (C'est gratuit et réservé aux clients particuliers et professionnels.)
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}