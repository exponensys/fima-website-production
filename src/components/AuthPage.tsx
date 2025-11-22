const image_1da2d5f603cd62a74c69b55293bcdadb2f6d8468 = '/1da2d5f603cd62a74c69b55293bcdadb2f6d8468.png';
const image_326535ed3b2f6d21affed9e27db43914fc840cfb = '/326535ed3b2f6d21affed9e27db43914fc840cfb.png';
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowLeft,
  faEye,
  faEyeSlash,
  faEnvelope,
  faLock,
  faUser,
  faPhone,
  faBuilding,
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "./ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "./ui/tabs";
import { Checkbox } from "./ui/checkbox";
import { Separator } from "./ui/separator";
import { toast } from 'sonner';
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useUser } from "../contexts/UserContext";
const fimaLogo = '/2a3a1c86b3f1ff31c7ff112d18730075fb8f827d.png';

interface AuthPageProps {
  onBack: () => void;
  onNavigate: (page: string) => void;
  initialTab?: "login" | "signup";
}

export default function AuthPage({
  onBack,
  onNavigate,
  initialTab = "login",
}: AuthPageProps) {
  const [activeTab, setActiveTab] = useState(initialTab);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { login, signup } = useUser();

  // États des formulaires
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const [signupData, setSignupData] = useState({
    accountType: "individual", // 'individual' ou 'business'
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    company: "",
    siret: "",
    acceptTerms: false,
    acceptNewsletter: false,
  });

  const [forgotPasswordEmail, setForgotPasswordEmail] =
    useState("");
  const [showForgotPassword, setShowForgotPassword] =
    useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    if (!loginData.email || !loginData.password) {
      toast.error("Veuillez remplir tous les champs");
      setIsLoading(false);
      return;
    }

    try {
      const success = await login(
        loginData.email,
        loginData.password,
      );
      if (success) {
        // Redirection vers le tableau de bord après connexion réussie
        onNavigate("account");
      }
    } catch (error) {
      toast.error("Email ou mot de passe incorrect");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Validations
    if (
      !signupData.firstName ||
      !signupData.lastName ||
      !signupData.email ||
      !signupData.password
    ) {
      toast.error(
        "Veuillez remplir tous les champs obligatoires",
      );
      setIsLoading(false);
      return;
    }

    if (signupData.password !== signupData.confirmPassword) {
      toast.error("Les mots de passe ne correspondent pas");
      setIsLoading(false);
      return;
    }

    if (signupData.password.length < 8) {
      toast.error(
        "Le mot de passe doit contenir au moins 8 caractères",
      );
      setIsLoading(false);
      return;
    }

    if (!signupData.acceptTerms) {
      toast.error(
        "Veuillez accepter les conditions d'utilisation",
      );
      setIsLoading(false);
      return;
    }

    try {
      const success = await signup(signupData);
      if (success) {
        // Redirection vers le tableau de bord après inscription réussie
        onNavigate("account");
      }
    } catch (error) {
      toast.error("Erreur lors de la création du compte");
    } finally {
      setIsLoading(false);
    }
  };

  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    if (!forgotPasswordEmail) {
      toast.error("Veuillez saisir votre adresse email");
      setIsLoading(false);
      return;
    }

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast.success(
        "Instructions de réinitialisation envoyées par email",
      );
      setShowForgotPassword(false);
      setForgotPasswordEmail("");
    } catch (error) {
      toast.error("Erreur lors de l'envoi");
    } finally {
      setIsLoading(false);
    }
  };

  const socialLoginButtons = [
    {
      name: "Google",
      icon: "🇬🇴",
      color: "border-red-300 hover:bg-red-50",
    },
    {
      name: "Facebook",
      icon: "📘",
      color: "border-blue-300 hover:bg-blue-50",
    },
    {
      name: "Apple",
      icon: "🍎",
      color: "border-gray-300 hover:bg-gray-50",
    },
  ];

  const handleSocialLogin = (provider: string) => {
    toast.info(`Connexion via ${provider} en cours...`);
    // Implémentation de l'authentification sociale
  };

  if (showForgotPassword) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <Card>
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <ImageWithFallback
                  src={fimaLogo}
                  alt="FIMA"
                  className="h-12 w-auto"
                />
              </div>
              <CardTitle>Mot de passe oublié</CardTitle>
              <p className="text-sm text-gray-600">
                Saisissez votre email pour recevoir les
                instructions de réinitialisation
              </p>
            </CardHeader>
            <CardContent>
              <form
                onSubmit={handleForgotPassword}
                className="space-y-4"
              >
                <div>
                  <Label htmlFor="forgotEmail">
                    Adresse email
                  </Label>
                  <div className="relative">
                    <FontAwesomeIcon icon={faEnvelope} className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="forgotEmail"
                      type="email"
                      value={forgotPasswordEmail}
                      onChange={(e) =>
                        setForgotPasswordEmail(e.target.value)
                      }
                      className="pl-10"
                      placeholder="votre@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setShowForgotPassword(false)}
                    className="flex-1"
                  >
                    Annuler
                  </Button>
                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="flex-1"
                  >
                    {isLoading ? "Envoi..." : "Envoyer"}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
          >
            <FontAwesomeIcon icon={faArrowLeft} className="w-4 h-4" />
            Retour
          </button>
        </div>
      </div>

      <div className="flex items-center justify-center p-4 pt-8 bg-gray-50">
        <div className="w-full max-w-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Colonne de gauche - Branding */}
            <div className="hidden lg:block">
              <div className="text-center lg:text-left">
                <ImageWithFallback
                  src={image_1da2d5f603cd62a74c69b55293bcdadb2f6d8468}
                  alt="FIMA"
                  className="h-8 w-auto mx-auto lg:mx-0 mb-6"
                />
                <h1
                  className="text-4xl font-bold mb-4"
                  style={{
                    fontFamily: "Montserrat",
                    color: "#000000",
                  }}
                >
                  Bienvenue chez FIMA
                </h1>
                <p className="text-xl text-gray-600 mb-4">
                  Votre partenaire literie et ameublement depuis
                  1985
                </p>
                
                <p className="text-lg text-gray-700 mb-2">
                  Créez votre compte en quelques clics pour bénéficier d'un accompagnement exclusif et transformer vos idées en réalisations concrètes.
                </p>
                <p className="text-sm italic text-gray-600 mb-8">
                  (C'est gratuit et réservé aux clients particuliers et professionnels.)
                </p>

                <div className="space-y-4">
                  {/* <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <FontAwesomeIcon icon={faBuilding} className="w-6 h-6 text-green-600" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-semibold">
                        3 Métiers d'Excellence
                      </h3>
                      <p className="text-sm text-gray-600">
                        Literie, Menuiserie, Vitrerie
                      </p>
                    </div>
                  </div> */}

                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <FontAwesomeIcon icon={faUser} className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-semibold">
                        10 000+ Clients
                      </h3>
                      <p className="text-sm text-gray-600">
                        Particuliers et professionnels
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-[rgb(57,207,253)] rounded-full flex items-center justify-center">
                      <FontAwesomeIcon icon={faPhone} className="w-6 h-6 text-white-600" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-semibold">
                        Service Client
                      </h3>
                      <p className="text-sm text-gray-600">
                        Accompagnement personnalisé
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Colonne de droite - Formulaires */}
            <div className="w-full max-w-md mx-auto">
              <Card>
                <CardHeader className="text-center lg:hidden">
                  <ImageWithFallback
                    src={fimaLogo}
                    alt="FIMA"
                    className="h-12 w-auto mx-auto mb-4"
                  />
                </CardHeader>

                <CardContent className="py-[35px] px-[24px]">
                  <Tabs
                    value={activeTab}
                    onValueChange={(value) =>
                      setActiveTab(value as "login" | "signup")
                    }
                  >
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="login">
                        Connexion
                      </TabsTrigger>
                      <TabsTrigger value="signup">
                        Inscription
                      </TabsTrigger>
                    </TabsList>

                    {/* Onglet Connexion */}
                    <TabsContent
                      value="login"
                      className="space-y-4"
                    >
                      <div className="text-center">
                        <h2
                          className="text-2xl font-bold mb-2"
                          style={{ fontFamily: "Montserrat" }}
                        >
                          Bon retour !
                        </h2>
                        <p className="text-gray-600">
                          Connectez-vous à votre compte FIMA
                        </p>
                      </div>

                      <form
                        onSubmit={handleLogin}
                        className="space-y-4"
                      >
                        <div>
                          <Label htmlFor="loginEmail">
                            Email
                          </Label>
                          <div className="relative">
                            <FontAwesomeIcon icon={faEnvelope} className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                            <Input
                              id="loginEmail"
                              type="email"
                              value={loginData.email}
                              onChange={(e) =>
                                setLoginData({
                                  ...loginData,
                                  email: e.target.value,
                                })
                              }
                              className="pl-10"
                              placeholder="votre@email.com"
                              required
                            />
                          </div>
                        </div>

                        <div>
                          <Label htmlFor="loginPassword">
                            Mot de passe
                          </Label>
                          <div className="relative">
                            <FontAwesomeIcon icon={faLock} className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                            <Input
                              id="loginPassword"
                              type={
                                showPassword
                                  ? "text"
                                  : "password"
                              }
                              value={loginData.password}
                              onChange={(e) =>
                                setLoginData({
                                  ...loginData,
                                  password: e.target.value,
                                })
                              }
                              className="pl-10 pr-10"
                              placeholder="••••••••"
                              required
                            />
                            <button
                              type="button"
                              onClick={() =>
                                setShowPassword(!showPassword)
                              }
                              className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                            >
                              <FontAwesomeIcon 
                                icon={showPassword ? faEyeSlash : faEye} 
                                className="h-4 w-4" 
                              />
                            </button>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <Checkbox
                              id="rememberMe"
                              checked={loginData.rememberMe}
                              onCheckedChange={(checked) =>
                                setLoginData({
                                  ...loginData,
                                  rememberMe: !!checked,
                                })
                              }
                            />
                            <Label
                              htmlFor="rememberMe"
                              className="text-sm"
                            >
                              Se souvenir de moi
                            </Label>
                          </div>
                          <button
                            type="button"
                            onClick={() =>
                              setShowForgotPassword(true)
                            }
                            className="text-sm text-primary hover:underline"
                          >
                            Mot de passe oublié ?
                          </button>
                        </div>

                        <Button
                          type="submit"
                          className="w-full"
                          disabled={isLoading}
                        >
                          {isLoading
                            ? "Connexion..."
                            : "Se connecter"}
                        </Button>
                      </form>

                      <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                          <Separator />
                        </div>
                      </div>
                    </TabsContent>

                    {/* Onglet Inscription */}
                    <TabsContent
                      value="signup"
                      className="space-y-4"
                    >
                      <div className="text-center">
                        <h2
                          className="text-2xl font-bold mb-2"
                          style={{ fontFamily: "Montserrat" }}
                        >
                          Créer un compte
                        </h2>
                        <p className="text-gray-600">
                          Rejoignez la famille FIMA
                        </p>
                      </div>

                      {/* Type de compte */}
                      <div className="space-y-2">
                        <Label>Type de compte</Label>
                        <div className="grid grid-cols-2 gap-2">
                          <button
                            type="button"
                            onClick={() =>
                              setSignupData({
                                ...signupData,
                                accountType: "individual",
                              })
                            }
                            className={`p-3 border rounded-lg text-sm transition-colors ${
                              signupData.accountType ===
                              "individual"
                                ? "border-primary bg-primary/10 text-primary"
                                : "border-gray-300 hover:border-gray-400"
                            }`}
                          >
                            <FontAwesomeIcon icon={faUser} className="w-4 h-4 mx-auto mb-1" />
                            Particulier
                          </button>
                          <button
                            type="button"
                            onClick={() =>
                              setSignupData({
                                ...signupData,
                                accountType: "business",
                              })
                            }
                            className={`p-3 border rounded-lg text-sm transition-colors ${
                              signupData.accountType ===
                              "business"
                                ? "border-primary bg-primary/10 text-primary"
                                : "border-gray-300 hover:border-gray-400"
                            }`}
                          >
                            <FontAwesomeIcon icon={faBuilding} className="w-4 h-4 mx-auto mb-1" />
                            Professionnel
                          </button>
                        </div>
                      </div>

                      <form
                        onSubmit={handleSignup}
                        className="space-y-4"
                      >
                        <div className="grid grid-cols-2 gap-2">
                          <div>
                            <Label htmlFor="firstName">
                              Prénom *
                            </Label>
                            <Input
                              id="firstName"
                              value={signupData.firstName}
                              onChange={(e) =>
                                setSignupData({
                                  ...signupData,
                                  firstName: e.target.value,
                                })
                              }
                              required
                            />
                          </div>
                          <div>
                            <Label htmlFor="lastName">
                              Nom *
                            </Label>
                            <Input
                              id="lastName"
                              value={signupData.lastName}
                              onChange={(e) =>
                                setSignupData({
                                  ...signupData,
                                  lastName: e.target.value,
                                })
                              }
                              required
                            />
                          </div>
                        </div>

                        <div>
                          <Label htmlFor="signupEmail">
                            Email *
                          </Label>
                          <div className="relative">
                            <FontAwesomeIcon icon={faEnvelope} className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                            <Input
                              id="signupEmail"
                              type="email"
                              value={signupData.email}
                              onChange={(e) =>
                                setSignupData({
                                  ...signupData,
                                  email: e.target.value,
                                })
                              }
                              className="pl-10"
                              placeholder="votre@email.com"
                              required
                            />
                          </div>
                        </div>

                        <div>
                          <Label htmlFor="phone">
                            Téléphone
                          </Label>
                          <div className="relative">
                            <FontAwesomeIcon icon={faPhone} className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                            <Input
                              id="phone"
                              value={signupData.phone}
                              onChange={(e) =>
                                setSignupData({
                                  ...signupData,
                                  phone: e.target.value,
                                })
                              }
                              className="pl-10"
                              placeholder="+225 XX XX XX XX"
                            />
                          </div>
                        </div>

                        {signupData.accountType ===
                          "business" && (
                          <>
                            <div>
                              <Label htmlFor="company">
                                Entreprise *
                              </Label>
                              <Input
                                id="company"
                                value={signupData.company}
                                onChange={(e) =>
                                  setSignupData({
                                    ...signupData,
                                    company: e.target.value,
                                  })
                                }
                                required={
                                  signupData.accountType ===
                                  "business"
                                }
                              />
                            </div>
                            <div>
                              <Label htmlFor="siret">
                                SIRET / Numéro d'entreprise
                              </Label>
                              <Input
                                id="siret"
                                value={signupData.siret}
                                onChange={(e) =>
                                  setSignupData({
                                    ...signupData,
                                    siret: e.target.value,
                                  })
                                }
                              />
                            </div>
                          </>
                        )}

                        <div>
                          <Label htmlFor="signupPassword">
                            Mot de passe *
                          </Label>
                          <div className="relative">
                            <FontAwesomeIcon icon={faLock} className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                            <Input
                              id="signupPassword"
                              type={
                                showPassword
                                  ? "text"
                                  : "password"
                              }
                              value={signupData.password}
                              onChange={(e) =>
                                setSignupData({
                                  ...signupData,
                                  password: e.target.value,
                                })
                              }
                              className="pl-10 pr-10"
                              placeholder="••••••••"
                              required
                            />
                            <button
                              type="button"
                              onClick={() =>
                                setShowPassword(!showPassword)
                              }
                              className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                            >
                              <FontAwesomeIcon 
                                icon={showPassword ? faEyeSlash : faEye} 
                                className="h-4 w-4" 
                              />
                            </button>
                          </div>
                          <p className="text-xs text-gray-500 mt-1">
                            Minimum 8 caractères
                          </p>
                        </div>

                        <div>
                          <Label htmlFor="confirmPassword">
                            Confirmer le mot de passe *
                          </Label>
                          <div className="relative">
                            <FontAwesomeIcon icon={faLock} className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                            <Input
                              id="confirmPassword"
                              type={
                                showConfirmPassword
                                  ? "text"
                                  : "password"
                              }
                              value={signupData.confirmPassword}
                              onChange={(e) =>
                                setSignupData({
                                  ...signupData,
                                  confirmPassword:
                                    e.target.value,
                                })
                              }
                              className="pl-10 pr-10"
                              placeholder="••••••••"
                              required
                            />
                            <button
                              type="button"
                              onClick={() =>
                                setShowConfirmPassword(
                                  !showConfirmPassword,
                                )
                              }
                              className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                            >
                              <FontAwesomeIcon 
                                icon={showConfirmPassword ? faEyeSlash : faEye} 
                                className="h-4 w-4" 
                              />
                            </button>
                          </div>
                        </div>

                        <div className="space-y-3">
                          <div className="flex items-start space-x-2">
                            <Checkbox
                              id="acceptTerms"
                              checked={signupData.acceptTerms}
                              onCheckedChange={(checked) =>
                                setSignupData({
                                  ...signupData,
                                  acceptTerms: !!checked,
                                })
                              }
                              className="mt-1"
                            />
                            <Label
                              htmlFor="acceptTerms"
                              className="text-sm leading-relaxed"
                            >
                              J'accepte les{" "}
                              <button
                                type="button"
                                className="text-primary hover:underline"
                                onClick={() =>
                                  onNavigate("terms")
                                }
                              >
                                conditions d'utilisation
                              </button>{" "}
                              et la{" "}
                              <button
                                type="button"
                                className="text-primary hover:underline"
                                onClick={() =>
                                  onNavigate("privacy")
                                }
                              >
                                politique de confidentialité
                              </button>
                            </Label>
                          </div>

                          <div className="flex items-start space-x-2">
                            <Checkbox
                              id="acceptNewsletter"
                              checked={
                                signupData.acceptNewsletter
                              }
                              onCheckedChange={(checked) =>
                                setSignupData({
                                  ...signupData,
                                  acceptNewsletter: !!checked,
                                })
                              }
                              className="mt-1"
                            />
                            <Label
                              htmlFor="acceptNewsletter"
                              className="text-sm"
                            >
                              Je souhaite recevoir les offres et
                              actualités FIMA par email
                            </Label>
                          </div>
                        </div>

                        <Button
                          type="submit"
                          className="w-full"
                          disabled={isLoading}
                        >
                          {isLoading
                            ? "Création..."
                            : "Créer mon compte"}
                        </Button>
                      </form>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>

              <p className="text-center text-sm text-gray-600 mt-4">
                En vous connectant, vous acceptez nos conditions
                d'utilisation
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Section Avantages du Compte */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2
              className="text-4xl font-bold mb-6"
              style={{
                fontFamily: "Montserrat",
                color: "#0EA5E9",
              }}
            >
              Rejoignez la communauté FIMA
            </h2>
            <p
              className="text-xl mb-4"
              style={{ color: "#6E6E6E" }}
            >
              Depuis 1985, FIMA met son savoir-faire au service des entreprises, institutions et particuliers exigeants à la recherche de confort, de qualité et de durabilité.
            </p>
            <p
              className="text-lg"
              style={{ color: "#6E6E6E" }}
            >
              En créant votre compte FIMA, vous accédez à bien plus qu'un simple espace client : vous entrez dans un univers de solutions personnalisées pour vos projets d'aménagement, d'équipement ou de revente.
            </p>
          </div>

          {/* Avantages exclusifs */}
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-4xl">🔑</span>
              <h3
                className="text-3xl font-bold"
                style={{
                  fontFamily: "Montserrat",
                  color: "#0EA5E9",
                }}
              >
                Vos avantages exclusifs
              </h3>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                <div
                  className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                  style={{ backgroundColor: "#B5C233" }}
                ></div>
                <p
                  className="text-lg"
                  style={{ color: "#6E6E6E" }}
                >
                  Devis express et suivi personnalisé pour vos commandes en literie, menuiserie et vitrerie
                </p>
              </div>

              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                <div
                  className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                  style={{ backgroundColor: "#B5C233" }}
                ></div>
                <p
                  className="text-lg"
                  style={{ color: "#6E6E6E" }}
                >
                  Tarifs préférentiels "Grand Compte" réservés aux professionnels, hôtels, écoles, hôpitaux et promoteurs
                </p>
              </div>

              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                <div
                  className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                  style={{ backgroundColor: "#B5C233" }}
                ></div>
                <p
                  className="text-lg"
                  style={{ color: "#6E6E6E" }}
                >
                  Accès prioritaire à nos nouveautés et collections premium
                </p>
              </div>

              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                <div
                  className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                  style={{ backgroundColor: "#B5C233" }}
                ></div>
                <p
                  className="text-lg"
                  style={{ color: "#6E6E6E" }}
                >
                  Historique complet de vos commandes et factures téléchargeables en ligne
                </p>
              </div>

              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                <div
                  className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                  style={{ backgroundColor: "#B5C233" }}
                ></div>
                <p
                  className="text-lg"
                  style={{ color: "#6E6E6E" }}
                >
                  Accompagnement technique par nos conseillers spécialisés selon votre secteur d'activité
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}