# 🧪 TESTS API - PHASE 1 & 2

> **Guide de test des nouvelles routes API Supabase**

---

## 📋 CHECKLIST DES TESTS

### Phase 1 : Configuration Générale

- [ ] ✅ Site Settings - GET toutes les configs
- [ ] ✅ Site Settings - GET config spécifique (languages)
- [ ] ✅ Site Settings - GET config spécifique (currencies)
- [ ] ✅ Product Categories - GET toutes les catégories
- [ ] ✅ Product Categories - GET par métier (fima-couchage)
- [ ] ✅ Product Categories - GET par métier (fima-design)
- [ ] ✅ Product Categories - GET par métier (univers-glass)

### Phase 2 : Formulaires et Modals

- [ ] ✅ Form Options - GET toutes les options
- [ ] ✅ Form Options - GET quote_project_types
- [ ] ✅ Form Options - GET quote_budget_ranges
- [ ] ✅ Form Options - GET quote_timelines
- [ ] ✅ Form Options - GET consultation_services
- [ ] ✅ Form Options - GET consultation_budget_ranges
- [ ] ✅ Form Options - GET consultation_timelines
- [ ] ✅ Form Options - GET appointment_time_slots
- [ ] ✅ Chatbot Config - GET configuration complète

---

## 🔧 COMMANDES CURL

### 1. Site Settings

```bash
# Toutes les configurations
curl "https://${PROJECT_ID}.supabase.co/functions/v1/make-server-4a2f605a/site-settings" \
  -H "Authorization: Bearer ${ANON_KEY}" \
  | jq '.'

# Langues uniquement
curl "https://${PROJECT_ID}.supabase.co/functions/v1/make-server-4a2f605a/site-settings?key=languages" \
  -H "Authorization: Bearer ${ANON_KEY}" \
  | jq '.data'

# Devises uniquement
curl "https://${PROJECT_ID}.supabase.co/functions/v1/make-server-4a2f605a/site-settings?key=currencies" \
  -H "Authorization: Bearer ${ANON_KEY}" \
  | jq '.data'

# Description entreprise
curl "https://${PROJECT_ID}.supabase.co/functions/v1/make-server-4a2f605a/site-settings?key=company_description" \
  -H "Authorization: Bearer ${ANON_KEY}" \
  | jq '.data'
```

**Réponse attendue** :
```json
{
  "success": true,
  "data": {
    "languages": [
      { "code": "FR", "name": "Français", "flag": "🇫🇷" },
      { "code": "EN", "name": "English", "flag": "🇬🇧" }
    ],
    "currencies": [
      { "code": "XOF", "symbol": "F CFA", "name": "Franc CFA" },
      { "code": "EUR", "symbol": "€", "name": "Euro" },
      { "code": "USD", "symbol": "$", "name": "US Dollar" },
      { "code": "GBP", "symbol": "£", "name": "British Pound" }
    ],
    "company_description": "Leader dans la litterie...",
    "certifications": ["Entreprise du Patrimoine Vivant", "Certifié ISO 9001"],
    "social_links": { "facebook": "#", "instagram": "#", ... },
    "contact_info": { "email": "contact@fima.ci", ... }
  }
}
```

---

### 2. Product Categories

```bash
# Toutes les catégories (tous métiers)
curl "https://${PROJECT_ID}.supabase.co/functions/v1/make-server-4a2f605a/product-categories" \
  -H "Authorization: Bearer ${ANON_KEY}" \
  | jq '.'

# Catégories FIMA Couchage
curl "https://${PROJECT_ID}.supabase.co/functions/v1/make-server-4a2f605a/product-categories?business=fima-couchage" \
  -H "Authorization: Bearer ${ANON_KEY}" \
  | jq '.data'

# Catégories FIMA Design
curl "https://${PROJECT_ID}.supabase.co/functions/v1/make-server-4a2f605a/product-categories?business=fima-design" \
  -H "Authorization: Bearer ${ANON_KEY}" \
  | jq '.data'

# Catégories UNIVERS GLASS
curl "https://${PROJECT_ID}.supabase.co/functions/v1/make-server-4a2f605a/product-categories?business=univers-glass" \
  -H "Authorization: Bearer ${ANON_KEY}" \
  | jq '.data'
```

**Réponse attendue pour fima-couchage** :
```json
{
  "success": true,
  "data": [
    {
      "key": "matelas",
      "name": "Matelas",
      "icon": "🛏️",
      "description": "Ressorts, mousse, latex naturel",
      "count": "45 modèles",
      "business": "fima-couchage"
    },
    // ... 4 autres catégories
  ]
}
```

---

### 3. Form Options

```bash
# Toutes les options de formulaires
curl "https://${PROJECT_ID}.supabase.co/functions/v1/make-server-4a2f605a/form-options" \
  -H "Authorization: Bearer ${ANON_KEY}" \
  | jq '.'

# Types de projets pour devis
curl "https://${PROJECT_ID}.supabase.co/functions/v1/make-server-4a2f605a/form-options?category=quote_project_types" \
  -H "Authorization: Bearer ${ANON_KEY}" \
  | jq '.data'

# Fourchettes budget pour devis
curl "https://${PROJECT_ID}.supabase.co/functions/v1/make-server-4a2f605a/form-options?category=quote_budget_ranges" \
  -H "Authorization: Bearer ${ANON_KEY}" \
  | jq '.data'

# Délais pour devis
curl "https://${PROJECT_ID}.supabase.co/functions/v1/make-server-4a2f605a/form-options?category=quote_timelines" \
  -H "Authorization: Bearer ${ANON_KEY}" \
  | jq '.data'

# Services de consultation
curl "https://${PROJECT_ID}.supabase.co/functions/v1/make-server-4a2f605a/form-options?category=consultation_services" \
  -H "Authorization: Bearer ${ANON_KEY}" \
  | jq '.data'

# Créneaux horaires rendez-vous
curl "https://${PROJECT_ID}.supabase.co/functions/v1/make-server-4a2f605a/form-options?category=appointment_time_slots" \
  -H "Authorization: Bearer ${ANON_KEY}" \
  | jq '.data'
```

**Réponse attendue pour quote_project_types** :
```json
{
  "success": true,
  "data": [
    {
      "id": "residential",
      "name": "Projet résidentiel",
      "description": "Maison, appartement, villa"
    },
    {
      "id": "commercial",
      "name": "Projet commercial",
      "description": "Bureau, magasin, restaurant"
    },
    // ... 3 autres types
  ]
}
```

---

### 4. Chatbot Configuration

```bash
# Configuration complète du chatbot
curl "https://${PROJECT_ID}.supabase.co/functions/v1/make-server-4a2f605a/chatbot-config" \
  -H "Authorization: Bearer ${ANON_KEY}" \
  | jq '.'
```

**Réponse attendue** :
```json
{
  "success": true,
  "data": {
    "initial_messages": [
      {
        "id": "1",
        "text": "Bonjour ! Je suis Sophie...",
        "sender": "support"
      }
    ],
    "quick_replies": [
      "Informations sur les matelas",
      "Délais de livraison",
      "Retours et garanties",
      "Aide au choix"
    ],
    "auto_responses": {
      "matelas": "Notre gamme de matelas...",
      "livraison": "Nous livrons gratuitement...",
      // ...
    }
  }
}
```

---

## 🎯 TESTS FRONTEND (Dans composant React)

### Test des hooks

```typescript
// Créer un composant de test temporaire
import { useLanguages, useCurrencies } from '../hooks/useSiteSettings';
import { useProductCategories } from '../hooks/useProductCategories';
import { useFormOptions } from '../hooks/useFormOptions';
import { useChatbotConfig } from '../hooks/useChatbotConfig';

function TestAPIComponent() {
  const { languages, loading: langLoading, error: langError } = useLanguages();
  const { currencies, loading: currLoading, error: currError } = useCurrencies();
  const { categories, loading: catLoading, error: catError } = useProductCategories('fima-couchage');
  const { options, loading: optLoading, error: optError } = useFormOptions('quote_project_types');
  const { config, loading: chatLoading, error: chatError } = useChatbotConfig();

  return (
    <div className="p-8 space-y-4">
      <div>
        <h3>Langues ({langLoading ? 'Chargement...' : languages?.length || 0})</h3>
        {langError && <p className="text-red-500">{langError}</p>}
        <pre>{JSON.stringify(languages, null, 2)}</pre>
      </div>

      <div>
        <h3>Devises ({currLoading ? 'Chargement...' : currencies?.length || 0})</h3>
        {currError && <p className="text-red-500">{currError}</p>}
        <pre>{JSON.stringify(currencies, null, 2)}</pre>
      </div>

      <div>
        <h3>Catégories FIMA Couchage ({catLoading ? 'Chargement...' : categories?.length || 0})</h3>
        {catError && <p className="text-red-500">{catError}</p>}
        <pre>{JSON.stringify(categories, null, 2)}</pre>
      </div>

      <div>
        <h3>Types de projets ({optLoading ? 'Chargement...' : options?.length || 0})</h3>
        {optError && <p className="text-red-500">{optError}</p>}
        <pre>{JSON.stringify(options, null, 2)}</pre>
      </div>

      <div>
        <h3>Config Chatbot ({chatLoading ? 'Chargement...' : 'Chargé'})</h3>
        {chatError && <p className="text-red-500">{chatError}</p>}
        <pre>{JSON.stringify(config, null, 2)}</pre>
      </div>
    </div>
  );
}
```

---

## ✅ CRITÈRES DE SUCCÈS

### Backend
- [ ] Toutes les routes retournent `{"success": true}`
- [ ] Les données par défaut sont bien retournées
- [ ] Pas d'erreurs 500 ou 404
- [ ] Les query parameters fonctionnent
- [ ] L'authentification fonctionne sur routes POST

### Frontend
- [ ] Les hooks ne provoquent pas d'erreurs
- [ ] `loading` passe à `false` après fetch
- [ ] `error` reste `null` si tout va bien
- [ ] Les données sont bien typées (TypeScript)
- [ ] Le fallback fonctionne si backend down

### Performance
- [ ] Temps de réponse < 500ms
- [ ] Pas de boucles infinies de requêtes
- [ ] Pas de memory leaks

---

## 🐛 DÉBOGAGE

### Si les routes ne fonctionnent pas

1. **Vérifier les variables d'environnement** :
```typescript
console.log('PROJECT_ID:', projectId);
console.log('ANON_KEY:', publicAnonKey);
```

2. **Vérifier les headers** :
```typescript
console.log('Request headers:', {
  'Authorization': `Bearer ${publicAnonKey}`,
  'Content-Type': 'application/json'
});
```

3. **Vérifier la réponse brute** :
```typescript
const response = await fetch(url, { headers });
console.log('Status:', response.status);
console.log('OK:', response.ok);
const text = await response.text();
console.log('Raw response:', text);
```

4. **Vérifier les logs serveur** :
- Aller dans Supabase Dashboard
- Functions > Logs
- Chercher les erreurs backend

### Si le fallback ne fonctionne pas

1. **Vérifier que les données de fallback sont bien définies** :
```typescript
console.log('DEFAULT_SETTINGS:', DEFAULT_SETTINGS);
```

2. **Vérifier le catch d'erreur** :
```typescript
try {
  // fetch...
} catch (err) {
  console.error('Caught error:', err);
  // fallback doit être appliqué ici
}
```

---

## 📊 RÉSULTATS ATTENDUS

### Tous les tests passent ✅
- Backend répond correctement
- Hooks fonctionnent
- Fallback en place
- TypeScript happy
- Pas d'erreurs console

### Prêt pour migration des composants 🚀

---

**Note** : Ces tests doivent être exécutés avant de migrer les composants pour s'assurer que l'infrastructure backend est solide.
