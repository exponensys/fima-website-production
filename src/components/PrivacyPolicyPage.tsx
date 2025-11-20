interface PrivacyPolicyPageProps {
  onBack: () => void;
  onNavigate?: (page: string, category?: string, data?: any) => void;
}

export function PrivacyPolicyPage({ onBack, onNavigate }: PrivacyPolicyPageProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div
        className="border-b"
        style={{ borderColor: "#B5C233" }}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center py-4">
            <button
              onClick={onBack}
              className="flex items-center gap-2 p-2 transition-colors"
              style={{ color: "#6E6E6E" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "#B5C233")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "#6E6E6E")
              }
            >
              <i className="fa-solid fa-arrow-left"></i>
              <span>Retour</span>
            </button>
          </div>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* En-tête */}
          <div className="text-center mb-12">
            <h1
              className="mb-4"
              style={{
                fontFamily: "Montserrat",
                color: "#B5C233",
              }}
            >
              Politique de Confidentialité de FIMA
            </h1>
            <p
              style={{
                fontFamily: "Montserrat",
                color: "#6E6E6E",
              }}
            >
              Fabrique Ivoirienne de Mousses et Ameublement
            </p>
            <p
              className="mt-4"
              style={{
                fontFamily: "Montserrat",
                color: "#6E6E6E",
              }}
            >
              Dernière mise à jour: 20/10/2025
            </p>
          </div>

          {/* Contenu */}
          <div
            className="space-y-8"
            style={{
              color: "#6E6E6E",
              textAlign: "justify",
            }}
          >
            {/* Section 1 */}
            <section>
              <h2
                className="mb-4"
                style={{
                  fontFamily: "Montserrat",
                  color: "#B5C233",
                }}
              >
                1. À propos de cette notification
              </h2>
              <p>
                Cette notification de confidentialité fournit des informations sur la manière dont FIMA
                recueille et traite vos données personnelles lorsque vous visitez notre site Web ou
                nos applications mobiles. Elle explique ce que nous faisons de vos données personnelles et
                comment nous les conservons en toute sécurité, ainsi que les droits dont vous disposez en
                ce qui concerne vos données personnelles.
              </p>
            </section>

            {/* Section 2 */}
            <section>
              <h2
                className="mb-4"
                style={{
                  fontFamily: "Montserrat",
                  color: "#B5C233",
                }}
              >
                2. Présentation générale
              </h2>
              <p className="mb-4">
                La Fabrique Ivoirienne de Mousses et Ameublement (FIMA), société ivoirienne spécialisée
                dans la conception, la fabrication et la commercialisation de produits de literie, mobilier et
                design, accorde une importance primordiale à la protection des données personnelles
                de ses clients, partenaires et visiteurs.
              </p>
              <p className="mb-4">
                D'ores et déjà, rappelons que FIMA intervient à travers trois branches d'activités
                complémentaires:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>FIMA Couchage:</strong> dédiée à la fabrication de mousses de différentes densités moyen
                  et haut de gamme et de certaines mousses spéciales sur commandes.
                </li>
                <li>
                  <strong>FIMA Design:</strong> consacrée à la conception et à la fabrication de meubles de tout genre
                  en mélaminé, meubles de maison de tout genre et d'articles de décoration ;
                </li>
                <li>
                  <strong>Univers Glass:</strong> spécialisée dans les solutions de vitrerie, aluminium et ameublement moderne.
                </li>
              </ul>
              <p className="mt-4">
                La présente Politique de Confidentialité a pour objectif d'informer toute personne utilisant
                le site www.fima.ci ou ses plateformes affiliées sur la manière dont FIMA collecte, utilise,
                conserve, protège et partage ses données personnelles.
              </p>
            </section>

            {/* Section 3 */}
            <section>
              <h2
                className="mb-4"
                style={{
                  fontFamily: "Montserrat",
                  color: "#B5C233",
                }}
              >
                3. Champ d'application
              </h2>
              <p className="mb-4">Cette politique s'applique à:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Tous les sites web, boutiques en ligne et plateformes numériques exploités par FIMA;</li>
                <li>
                  Toutes les opérations commerciales, de communication, de fidélisation ou de prestations
                  réalisées avec FIMA ;
                </li>
                <li>
                  Tous les utilisateurs, clients, fournisseurs, partenaires ou visiteurs, qu'ils agissent à titre
                  professionnel ou particulier.
                </li>
              </ul>
            </section>

            {/* Section 4 */}
            <section>
              <h2
                className="mb-4"
                style={{
                  fontFamily: "Montserrat",
                  color: "#B5C233",
                }}
              >
                4. Définitions
              </h2>
              <p className="mb-4">Au sens de la loi ivoirienne, on entend par:</p>
              <div className="space-y-4">
                <div>
                  <strong style={{ color: "#B5C233" }}>Données personnelles:</strong> Toute information permettant d'identifier directement ou
                  indirectement une personne physique (nom, adresse, téléphone, e-mail, etc.) ou de quelque
                  nature qu'elle soit, y compris sonore, visuelle ou numérique, se rapportant à une personne
                  physique identifiée ou identifiable, directement ou indirectement, par référence à un ou
                  plusieurs éléments qui lui sont propres.
                </div>
                <div>
                  <strong style={{ color: "#B5C233" }}>Traitement:</strong> toute opération appliquée à ces données (collecte, enregistrement,
                  conservation, modification, diffusion, suppression, etc.);
                </div>
                <div>
                  <strong style={{ color: "#B5C233" }}>Responsable du traitement:</strong> la société FIMA, qui détermine les finalités et les moyens
                  du traitement.
                </div>
              </div>
            </section>

            {/* Section 5 */}
            <section>
              <h2
                className="mb-4"
                style={{
                  fontFamily: "Montserrat",
                  color: "#B5C233",
                }}
              >
                5. Collecte des données personnelles
              </h2>
              <p className="mb-4">
                Les données à caractère personnel désignent toute information qui peut être utilisée pour
                identifier directement ou indirectement une personne spécifique. Nous collectons vos
                données personnelles afin de vous fournir des produits et services sur mesure et afin
                d'analyser et d'améliorer continuellement nos produits et services. Nous pouvons collecter,
                utiliser, stocker et transférer différents types de données personnelles à des fins de
                marketing et d'optimisation des données personnelles.
              </p>
              <p className="mb-4">
                Vous nous fournissez vos données personnelles lorsque vous enregistrez vos données
                personnelles sur notre site web et nos plateformes mobiles et que vous effectuez
                des transactions avec ces derniers.
              </p>
              <p className="mb-4">Les données personnelles que nous recueillons sont les suivantes :</p>

              <div className="space-y-6">
                <div>
                  <h3
                    className="mb-3"
                    style={{
                      fontFamily: "Montserrat",
                      color: "#6E6E6E",
                    }}
                  >
                    A. Les informations que vous nous fournissez:
                  </h3>
                  <p className="mb-3">
                    Nous recevons et conservons les informations que vous nous fournissez, y compris vos données d'identité, vos
                    données de contact, vos données biométriques, votre adresse de livraison et vos
                    données financières. Ces types de données personnelles peuvent inclure:
                  </p>
                  <ol className="list-decimal pl-6 space-y-2">
                    <li>les coordonnées (telles que le nom, l'adresse postale, le numéro de téléphone et l'adresse électronique),</li>
                    <li>les informations démographiques (telles que votre date de naissance, votre âge ou votre tranche d'âge et votre sexe),</li>
                    <li>les informations relatives à l'inscription en ligne (telles que votre mot de passe et d'autres informations d'authentification),</li>
                    <li>les informations relatives au paiement (telles que les informations relatives à votre carte de crédit et l'adresse de facturation),</li>
                    <li>les informations fournies dans le cadre de questionnaires en ligne (telles que les réponses à des enquêtes de satisfaction de la clientèle ou à des études de marché),</li>
                    <li>les inscriptions/soumissions à des concours, et</li>
                    <li>dans certains cas, vos préférences en matière de marketing.</li>
                  </ol>
                </div>

                <div>
                  <h3
                    className="mb-3"
                    style={{
                      fontFamily: "Montserrat",
                      color: "#6E6E6E",
                    }}
                  >
                    B. Les informations que nous collectons/générons automatiquement ou que nous obtenons de tiers:
                  </h3>
                  <p className="mb-3">
                    Nous collectons et stockons automatiquement certains types d'informations concernant votre utilisation de la place de marché FIMA, y compris
                    des informations sur vos recherches, vos vues, vos téléchargements et vos achats.
                    En outre, nous pouvons recevoir des informations vous concernant de la part de
                    tiers, notamment nos opérateurs, nos prestataires de services de paiement,
                    nos marchands/marques et nos prestataires de services publicitaires.
                  </p>
                  <p className="mb-3">
                    Ces types de données personnelles peuvent concerner votre appareil (tel que votre
                    PC, tablette ou autre appareil mobile), votre utilisation de nos sites web et applis (ainsi
                    que certains sites web de tiers avec lesquels nous avons conclu des partenariats),
                    et/ou vos préférences personnelles, vos centres d'intérêt ou votre situation
                    géographique. Voici quelques exemples de ces types d'informations :
                  </p>
                  <ol className="list-decimal pl-6 space-y-2">
                    <li>le nom et l'âge (ou la tranche d'âge prévue),</li>
                    <li>les informations sur votre appareil, votre système d'exploitation, votre navigateur et votre adresse IP,</li>
                    <li>les identifiants uniques associés à votre appareil,</li>
                    <li>les détails des pages web que vous avez visitées,</li>
                    <li>les produits que vous avez consultés en ligne (y compris les informations sur les produits que vous avez recherchés ou consultés, achetés ou ajoutés à un panier d'achat en ligne),</li>
                    <li>le temps que vous passez sur certaines zones d'un site web ou d'une application, ainsi que la date et l'heure de votre visite/utilisation,</li>
                    <li>les données personnelles contenues dans les contenus générés par les utilisateurs (tels que les blogs et les publications sur les médias sociaux),</li>
                    <li>le nom d'utilisateur ou l'identifiant d'un média social, et</li>
                    <li>la photo de votre profil dans les médias sociaux et d'autres informations relatives à votre profil dans les médias sociaux (telles que le nombre de personnes qui vous suivent).</li>
                  </ol>
                </div>
              </div>

              <p className="mt-4">
                Nous nous efforçons de vous offrir des choix concernant les données personnelles que
                vous nous fournissez. Lorsque la loi l'exige, si vous souhaitez que vos données
                personnelles soient utilisées par FIMA pour vous offrir une expérience personnalisée/
                une publicité et un contenu ciblés, vous pouvez l'indiquer en cochant la ou les cases
                correspondantes situées sur le formulaire d'inscription ou en répondant aux questions
                posées par les représentants de FIMA. Si vous décidez de ne plus bénéficier de
                cette personnalisation, vous pouvez vous y opposer ou ajuster vos préférences à tout
                moment en fermant votre compte ou en envoyant un e-mail à{" "}
                <a href="mailto:fima@fimagroup.net" style={{ color: "#B5C233" }}>
                  fima@fimagroup.net
                </a>
                .
              </p>
            </section>

            {/* Section 6 */}
            <section>
              <h2
                className="mb-4"
                style={{
                  fontFamily: "Montserrat",
                  color: "#B5C233",
                }}
              >
                6. Finalités du traitement
              </h2>
              <p className="mb-4">
                Les données personnelles collectées par FIMA sont traitées pour des finalités précises,
                légitimes et proportionnées, notamment pour:
              </p>
              <ol className="list-decimal pl-6 space-y-2">
                <li>La gestion des commandes et des livraisons;</li>
                <li>La facturation et le suivi des paiements;</li>
                <li>Le service client, l'assistance et le support après-vente;</li>
                <li>La personnalisation de l'expérience utilisateur sur nos plateformes;</li>
                <li>L'envoi d'informations commerciales, de newsletters et d'offres promotionnelles;</li>
                <li>La gestion des comptes clients et des programmes de fidélité;</li>
                <li>La réalisation d'analyses statistiques ou marketing;</li>
                <li>La conformité aux obligations légales et réglementaires (fiscales, comptables ou administratives).</li>
              </ol>
            </section>

            {/* Section 7 */}
            <section>
              <h2
                className="mb-4"
                style={{
                  fontFamily: "Montserrat",
                  color: "#B5C233",
                }}
              >
                7. Base légale du traitement
              </h2>
              <p className="mb-4">
                Nous ne traiterons vos données à caractère personnel que si nous disposons d'une base
                juridique pour le faire. La base juridique dépend des raisons pour lesquelles nous avons
                collecté et utilisé vos données à caractère personnel. Dans presque tous les cas, la base
                juridique sera l'une des suivantes:
              </p>
              <div className="space-y-4">
                <div>
                  <strong style={{ color: "#B5C233" }}>1. Le consentement:</strong> Par exemple, lorsque vous avez consenti à recevoir certains
                  messages publicitaires de notre part. Vous pouvez retirer votre consentement à tout
                  moment, notamment en cliquant sur le lien "se désinscrire" au bas de tout courriel de
                  marketing que nous vous envoyons.
                </div>
                <div>
                  <strong style={{ color: "#B5C233" }}>2. Nos intérêts commerciaux légitimes:</strong> Lorsque cela est nécessaire pour comprendre
                  nos clients, promouvoir nos services et fonctionner efficacement, à condition dans chaque
                  cas que cela soit fait d'une manière légitime qui n'affecte pas indûment votre vie privée
                  et d'autres droits.
                </div>
                <div>
                  <strong style={{ color: "#B5C233" }}>3. Exécution d'un contrat avec vous:</strong> Ce principe s'applique également lorsque nous
                  devons prendre des mesures avant de conclure un contrat avec vous. Par exemple,
                  lorsque vous avez acheté un produit chez nous et que nous devons utiliser vos
                  coordonnées et vos informations de paiement pour traiter votre commande et vous
                  envoyer le produit.
                </div>
                <div>
                  <strong style={{ color: "#B5C233" }}>4. Respect de la loi:</strong> Lorsque nous sommes soumis à une obligation légale et que nous
                  avons besoin d'utiliser vos données à caractère personnel pour nous conformer à cette
                  obligation.
                </div>
              </div>
            </section>

            {/* Section 8 */}
            <section>
              <h2
                className="mb-4"
                style={{
                  fontFamily: "Montserrat",
                  color: "#B5C233",
                }}
              >
                8. Consentement
              </h2>
              <p className="mb-4">
                En utilisant les services, en créant un compte ou en passant commande, le client consent
                expressément à la collecte et au traitement de ses données conformément à la présente
                politique.
              </p>
              <p>
                Ce consentement peut être retiré à tout moment en adressant une demande à:{" "}
                <a href="mailto:fima@fimagroup.net" style={{ color: "#B5C233" }}>
                  fima@fimagroup.net
                </a>
              </p>
            </section>

            {/* Section 9 */}
            <section>
              <h2
                className="mb-4"
                style={{
                  fontFamily: "Montserrat",
                  color: "#B5C233",
                }}
              >
                9. Vos droits légaux
              </h2>
              <div className="space-y-4">
                <p>
                  <strong>A.</strong> Il est important que les données personnelles que nous détenons à votre sujet soient
                  exactes et à jour. Veuillez nous informer si vos données personnelles changent au cours de
                  votre relation avec nous.
                </p>
                <p>
                  <strong>B.</strong> Dans certaines circonstances, vous avez des droits en vertu des lois sur la protection
                  des données en ce qui concerne vos données personnelles, y compris le droit d'accéder,
                  de corriger ou d'effacer vos données personnelles, de vous opposer au traitement de
                  vos données personnelles ou de le restreindre, le droit de demander que nous transférons
                  vos données personnelles à un tiers et de vous désabonner de nos courriels et de
                  nos bulletins d'information.
                </p>
                <p>
                  <strong>C.</strong> Si vous souhaitez supprimer définitivement vos données de notre site web et d'autres
                  applications, vous pouvez choisir l'option de fermeture de votre compte. Vous pouvez fermer
                  votre compte. Une fois votre compte fermé, tous les produits et services auxquels vous avez
                  accédé par l'intermédiaire de votre compte ne seront plus disponibles.
                </p>
                <p>
                  <strong>D.</strong> Nous pouvons refuser d'accéder à votre demande si elle est déraisonnable ou si vous
                  n'avez pas fourni les informations supplémentaires nécessaires pour confirmer votre
                  identité.
                </p>
              </div>
            </section>

            {/* Section 10 */}
            <section>
              <h2
                className="mb-4"
                style={{
                  fontFamily: "Montserrat",
                  color: "#B5C233",
                }}
              >
                10. Partage et communication des données
              </h2>
              <p className="mb-4">FIMA ne vend ni ne loue vos données personnelles.</p>
              <p className="mb-4">
                Elles peuvent toutefois être partagées avec certains destinataires strictement nécessaires à
                leur traitement:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Partenaires logistiques et de livraison;</li>
                <li>Prestataires techniques et informatiques (hébergement, maintenance, paiement en ligne);</li>
                <li>Autorités administratives ou judiciaires, si la loi l'exige.</li>
              </ul>
              <p className="mt-4">
                FIMA veille à ce que tout tiers respectant les données personnelles agisse en conformité
                avec la législation ivoirienne et avec des garanties de sécurité équivalentes.
              </p>
            </section>

            {/* Section 11 */}
            <section>
              <h2
                className="mb-4"
                style={{
                  fontFamily: "Montserrat",
                  color: "#B5C233",
                }}
              >
                11. Durée de conservation
              </h2>
              <p className="mb-4">
                Les données sont conservées pendant une durée limitée et proportionnée aux finalités
                du traitement:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Données client: 5 ans à compter de la dernière transaction;</li>
                <li>Données de facturation: 10 ans (obligation légale);</li>
                <li>Données marketing : 3 ans après le dernier contact;</li>
                <li>Cookies : 13 mois maximum.</li>
              </ul>
              <p className="mt-4">
                Au terme de ces durées, les données sont supprimées ou anonymisées de manière
                sécurisée.
              </p>
            </section>

            {/* Section 12 */}
            <section>
              <h2
                className="mb-4"
                style={{
                  fontFamily: "Montserrat",
                  color: "#B5C233",
                }}
              >
                12. Sécurité et confidentialité
              </h2>
              <p className="mb-4">
                FIMA met en œuvre toutes les mesures techniques, organisationnelles et physiques
                nécessaires pour protéger les données contre:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>La perte ou la destruction accidentelle ;</li>
                <li>L'accès non autorisé ;</li>
                <li>La divulgation ou la modification frauduleuse.</li>
              </ul>
              <p className="mt-4">
                Les systèmes de FIMA sont protégés par des dispositifs de cryptage, pare-feu, antivirus et
                contrôle d'accès, et les équipes internes sont formées à la confidentialité des données.
              </p>
              <p className="mt-4">
                Nous avons mis en place des mesures de sécurité pour éviter que vos données
                personnelles ne soient accidentellement perdues, utilisées ou consultées de manière non
                autorisée, modifiées ou divulguées.
              </p>
              <p className="mt-4">
                En outre, nous limitons l'accès à vos données à caractère personnel aux employés,
                agents, sous-traitants et autres tiers qui ont un besoin professionnel de les connaître. Ils
                ne traiteront vos données personnelles que sur nos instructions et sont soumis à un devoir
                de confidentialité.
              </p>
              <p className="mt-4">
                Nous avons mis en place des procédures pour faire face à toute suspicion de violation de
                données à caractère personnel et nous vous notifierons, ainsi qu'à tout régulateur
                applicable, une violation lorsque nous sommes légalement tenus de le faire.
              </p>
            </section>

            {/* Section 13 */}
            <section>
              <h2
                className="mb-4"
                style={{
                  fontFamily: "Montserrat",
                  color: "#B5C233",
                }}
              >
                13. Droits des personnes concernées
              </h2>
              <p className="mb-4">
                Conformément à la Loi n° 2013-450, chaque personne dispose des droits suivants sur ses
                données :
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Droit d'accès :</strong> obtenir une copie des données détenues par FIMA ;</li>
                <li><strong>Droit de rectification :</strong> corriger les informations inexactes ou incomplètes ;</li>
                <li><strong>Droit d'opposition :</strong> s'opposer à certains traitements (marketing, prospection, etc.) ;</li>
                <li><strong>Droit à l'effacement :</strong> demander la suppression de ses données ;</li>
                <li><strong>Droit à la limitation et à la portabilité des données.</strong></li>
              </ul>
              <p className="mt-4">
                Pour exercer ces droits, il suffit d'envoyer une demande écrite accompagnée d'un justificatif
                d'identité à :{" "}
                <a href="mailto:fima@fimagroup.net" style={{ color: "#B5C233" }}>
                  fima@fimagroup.net
                </a>
                , Ou par courrier à: Abidjan-Yopougon, Zone Industrielle
              </p>
            </section>

            {/* Section 14 */}
            <section>
              <h2
                className="mb-4"
                style={{
                  fontFamily: "Montserrat",
                  color: "#B5C233",
                }}
              >
                14. Utilisation des cookies
              </h2>
              <p>
                Un cookie est un petit fichier de lettres et de chiffres que nous plaçons sur votre ordinateur,
                votre téléphone mobile ou votre tablette si vous y consentez. Les cookies nous permettent
                de vous distinguer des autres utilisateurs de notre site web et de nos applications mobiles,
                ce qui nous aide à vous offrir une expérience de navigation améliorée.
              </p>
            </section>

            {/* Section 15 */}
            <section>
              <h2
                className="mb-4"
                style={{
                  fontFamily: "Montserrat",
                  color: "#B5C233",
                }}
              >
                15. Hébergement et transfert des données
              </h2>
              <p className="mb-4">
                Les données sont hébergées sur des serveurs situés principalement en Côte d'Ivoire et,
                si nécessaire, à l'étranger, auprès de prestataires certifiés garantissant un niveau de
                protection équivalent.
              </p>
              <p>
                Aucun transfert ne sera effectué vers un pays ne disposant pas d'une législation adéquate
                sans l'accord préalable de l'autorité de protection compétente (ARTCI).
              </p>
            </section>

            {/* Section 16 */}
            <section>
              <h2
                className="mb-4"
                style={{
                  fontFamily: "Montserrat",
                  color: "#B5C233",
                }}
              >
                16. Liens vers des sites tiers
              </h2>
              <p>
                Le site www.fima.ci peut contenir des liens vers des sites de partenaires ou réseaux sociaux.
                FIMA n'est pas responsable du contenu ni des politiques de confidentialité de ces sites tiers.
                Il est recommandé aux utilisateurs de consulter leurs politiques respectives avant toute
                interaction.
              </p>
            </section>

            {/* Section 17 */}
            <section>
              <h2
                className="mb-4"
                style={{
                  fontFamily: "Montserrat",
                  color: "#B5C233",
                }}
              >
                17. Mise à jour de la politique de confidentialité
              </h2>
              <p className="mb-4">
                FIMA se réserve le droit de modifier la présente politique pour l'adapter à l'évolution de ses
                services ou à la législation en vigueur.
              </p>
              <p>
                Toute mise à jour sera publiée sur le site avec la mention de la date de dernière modification.
                L'utilisateur est invité à consulter régulièrement cette page.
              </p>
            </section>

            {/* Section 18 */}
            <section>
              <h2
                className="mb-4"
                style={{
                  fontFamily: "Montserrat",
                  color: "#B5C233",
                }}
              >
                18. Contact
              </h2>
              <p className="mb-4">
                Pour toute question relative à la politique de confidentialité, à la gestion ou à la suppression
                de vos données, vous pouvez contacter :
              </p>
              <div className="space-y-2">
                <p><strong>Service Protection des Données – FIMA</strong></p>
                <p>
                  <i className="fa-solid fa-envelope mr-2" style={{ color: "#B5C233" }}></i>
                  <a href="mailto:fima@fimagroup.net" style={{ color: "#B5C233" }}>
                    fima@fimagroup.net
                  </a>
                </p>
                <p>
                  <i className="fa-solid fa-phone mr-2" style={{ color: "#B5C233" }}></i>
                  (225) 2723466675 / 2723466914
                </p>
                <p>
                  <i className="fa-solid fa-location-dot mr-2" style={{ color: "#B5C233" }}></i>
                  Abidjan-Yopougon, Zone Industrielle
                </p>
              </div>
            </section>

            {/* Section 19 */}
            <section>
              <h2
                className="mb-4"
                style={{
                  fontFamily: "Montserrat",
                  color: "#B5C233",
                }}
              >
                19. Référence légale
              </h2>
              <p>
                La présente politique est conforme aux dispositions de la Loi n° 2013-450 du 19 juin 2013
                relative à la protection des données à caractère personnel et à la réglementation en vigueur
                en République de Côte d'Ivoire.
              </p>
            </section>

            {/* Footer de la page */}
            <div
              className="mt-12 pt-8 border-t text-center"
              style={{ borderColor: "#B5C233" }}
            >
              <p
                className="mb-2"
                style={{
                  fontFamily: "Montserrat",
                  color: "#B5C233",
                }}
              >
                <strong>FIMA – Fabrique Ivoirienne de Mousses et Ameublement</strong>
              </p>
              <p style={{ color: "#6E6E6E" }}>
                FIMA Couchage – FIMA Design – Univers Glass
              </p>
              <p
                className="mt-2 italic"
                style={{ color: "#6E6E6E" }}
              >
                « De la conception à la réalisation »
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}