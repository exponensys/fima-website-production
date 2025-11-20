# 🚀 INITIALISER LES CALL TO ACTION MAINTENANT

## ⚡ Guide rapide d'initialisation

Les Call to Action sont maintenant complètement connectés à Supabase ! Suivez ces étapes pour les initialiser.

## 📋 Étape 1 : Vérifier le serveur Supabase

Assurez-vous que le serveur Supabase est déployé avec les nouvelles routes CTA :

```bash
# Les routes suivantes doivent être disponibles :
GET    /make-server-98c6ec1c/call-to-actions
GET    /make-server-98c6ec1c/call-to-actions/all
GET    /make-server-98c6ec1c/call-to-actions/:id
POST   /make-server-98c6ec1c/call-to-actions
PUT    /make-server-98c6ec1c/call-to-actions/:id
DELETE /make-server-98c6ec1c/call-to-actions/:id
```

## 🔑 Étape 2 : Initialiser les données

### Option A : Via le navigateur (Recommandé)

1. Ouvrez la console du navigateur (F12)
2. Copiez et exécutez ce code :

```javascript
// Importer la fonction d'initialisation
import { initCallToActionData } from './utils/initCallToActionData';

// Initialiser les CTAs
const result = await initCallToActionData();

if (result.success) {
  console.log(`✅ ${result.count} CTAs initialisés avec succès !`);
} else {
  console.error('❌ Erreur:', result.error);
}
```

### Option B : Via le CMS

1. Allez dans le CMS : `/cms`
2. Connectez-vous (si nécessaire)
3. Accédez à la section "Call to Action"
4. Créez manuellement les CTAs via l'interface

## 📊 Données initialisées par défaut

5 Call to Action seront créés :

### 1️⃣ Devis gratuit (Hero)
- **Position** : Hero
- **Style** : Primary (rouge)
- **Fond** : Vert anis (#B5C233)
- **Lien** : `/quote-request`

### 2️⃣ Consultation expert (Footer)
- **Position** : Footer
- **Style** : Secondary
- **Fond** : Rouge (#E30613)
- **Lien** : `/expert-consultation`

### 3️⃣ Réalisations (Inline)
- **Position** : Inline
- **Style** : Outline
- **Fond** : Blanc (#FFFFFF)
- **Lien** : `/all-projects`

### 4️⃣ Grands comptes (Inline)
- **Position** : Inline
- **Style** : Primary
- **Fond** : Gris (#6E6E6E)
- **Lien** : `/large-accounts`

### 5️⃣ Aide au choix (Sidebar)
- **Position** : Sidebar
- **Style** : Secondary
- **Fond** : Vert anis (#B5C233)
- **Lien** : `/expert-consultation`

## ✅ Étape 3 : Vérifier l'initialisation

```javascript
import { checkCallToActionData } from './utils/initCallToActionData';

const check = await checkCallToActionData();
console.log(`📊 ${check.count} CTAs trouvés dans Supabase`);
```

## 🔄 Étape 4 : Réactiver l'API

Une fois les données initialisées, réactivez l'API dans le hook :

1. Ouvrez `/hooks/useCallToAction.ts`
2. Trouvez la ligne : `// TEMPORAIREMENT DÉSACTIVÉ`
3. Suivez les instructions pour décommenter le code API
4. Commentez/supprimez les lignes de fallback

## 🎨 Étape 5 : Personnaliser via le CMS

1. Allez dans `/cms`
2. Section "Call to Action"
3. Modifiez les CTAs selon vos besoins :
   - Textes et descriptions
   - Couleurs de fond et de texte
   - Styles de boutons
   - Positions d'affichage
   - Ordre d'affichage

## 🧪 Étape 6 : Tester

### Test du hook
```tsx
import { useCallToAction } from './hooks/useCallToAction';

function TestComponent() {
  const { ctas, isLoading, error } = useCallToAction('hero');
  
  console.log('CTAs Hero:', ctas);
  
  return <div>Test CTA</div>;
}
```

### Test du composant
```tsx
import { CallToAction } from './components/CallToAction';

<CallToAction 
  position="hero" 
  onNavigate={(page) => console.log('Navigate to:', page)}
/>
```

## 🚨 Troubleshooting

### Erreur 404 sur les routes API
➡️ Le serveur Supabase n'est pas encore déployé avec les nouvelles routes.
**Solution** : Attendre le déploiement ou utiliser le fallback temporaire.

### CTAs vides dans le CMS
➡️ Les données n'ont pas encore été initialisées.
**Solution** : Exécuter `initCallToActionData()` ou créer manuellement via le CMS.

### CTAs ne s'affichent pas sur le site
➡️ Vérifier que `is_active` est à `true` et que la position correspond.
**Solution** : Modifier les CTAs dans le CMS pour les activer.

## 📖 Documentation complète

Voir `/docs/CALL_TO_ACTION_MIGRATION_COMPLETE.md` pour :
- Structure détaillée des données
- Guide d'utilisation complet
- Exemples de code
- API reference

## ✨ Prochaines étapes

Après l'initialisation, vous pouvez :

1. **Intégrer les CTAs** dans vos pages
2. **Personnaliser** les textes et couleurs
3. **Créer de nouveaux CTAs** pour des campagnes
4. **A/B tester** différents messages
5. **Analyser** les performances via le CMS

---

**Prêt à commencer ?** Suivez les étapes ci-dessus ! 🚀
