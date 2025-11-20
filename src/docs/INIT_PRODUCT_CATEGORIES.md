# 🚀 Guide d'initialisation - Catégories de Produits

**Objectif**: Initialiser les catégories de produits dans Supabase en 5 minutes

---

## ⚡ Méthode rapide (5 minutes)

### Étape 1: Accéder au CMS
```
1. Ouvrir votre application FIMA
2. Naviguer vers /cms
3. Se connecter (si nécessaire)
4. Cliquer sur "Catégories" dans le menu latéral
```

### Étape 2: Initialiser les données
```
1. Cliquer sur le bouton "Réinitialiser" (en haut à droite)
2. Attendre la confirmation (toast vert)
3. Vérifier que le compteur affiche "15 catégories"
```

### Étape 3: Vérifier les données
```
1. Cliquer sur l'onglet "FIMA Couchage" → 5 catégories
2. Cliquer sur l'onglet "FIMA Design" → 5 catégories
3. Cliquer sur l'onglet "Univers Glass" → 5 catégories
```

**✅ Terminé ! Vos catégories sont maintenant dans Supabase.**

---

## 🔧 Méthode via le code (Alternative)

Si vous préférez initialiser via le code :

### Étape 1: Créer un composant temporaire
```typescript
// Dans /components/InitCategories.tsx
import { useState } from 'react';
import { initProductCategories } from '../utils/initProductCategoriesData';
import { toast } from 'sonner@2.0.3';

export function InitCategories() {
  const [loading, setLoading] = useState(false);
  
  const handleInit = async () => {
    setLoading(true);
    const result = await initProductCategories();
    
    if (result.success) {
      toast.success(result.message);
    } else {
      toast.error(result.error || 'Erreur');
    }
    setLoading(false);
  };
  
  return (
    <div className="p-8">
      <button 
        onClick={handleInit}
        disabled={loading}
        className="px-6 py-3 bg-green-600 text-white"
      >
        {loading ? 'Initialisation...' : 'Initialiser les catégories'}
      </button>
    </div>
  );
}
```

### Étape 2: Utiliser le composant temporairement
```typescript
// Dans App.tsx, ajouter temporairement:
import { InitCategories } from './components/InitCategories';

// Dans le rendu:
<InitCategories />
```

### Étape 3: Cliquer sur le bouton
```
1. Ouvrir l'application
2. Cliquer sur "Initialiser les catégories"
3. Attendre la confirmation
4. Retirer le composant d'App.tsx
```

---

## 📊 Données initialisées

Après l'initialisation, vous aurez **15 catégories** réparties comme suit:

### FIMA Couchage (5 catégories)
```
🛏️  Matelas               - Ressorts, mousse, latex naturel         (45 modèles)
🏠  Sommiers              - Tapissiers, électriques, à lattes       (32 modèles)
💤  Oreillers             - Mémoire de forme, duvet, ergonomiques   (28 modèles)
🌿  Linge de lit          - Parures, draps, couettes                (150+ articles)
✨  Accessoires           - Protections, surmatelas, coussins       (45 articles)
```

### FIMA Design (5 catégories)
```
🪵  Menuiserie            - Bois massif, aggloméré, MDF             (60+ références)
🪑  Ameublement           - Mobilier sur mesure et standard         (85+ modèles)
🍳  Cuisines              - Cuisines équipées modernes              (40+ modèles)
👔  Dressings             - Rangements sur mesure                   (35+ modèles)
📐  Aménagements sur mesure - Projets personnalisés                (Sur mesure)
```

### Univers Glass (5 catégories)
```
🪟  Vitrerie              - Vitres et miroirs                       (50+ types)
🔩  Menuiserie Aluminium - Cadres et structures                    (45+ profils)
🏠  Fenêtres              - Fenêtres sur mesure                     (60+ modèles)
🚪  Portes                - Portes vitrées et alu                   (55+ modèles)
🧱  Cloisons              - Séparations d'espaces                   (30+ solutions)
```

---

## 🧪 Tester l'initialisation

### Test 1: Via le CMS
```
1. Aller sur /cms → Catégories
2. Vérifier que 15 catégories sont affichées
3. Cliquer sur chaque onglet métier
4. Vérifier les icônes emoji
5. Vérifier les descriptions
```

### Test 2: Via le hook React
```typescript
// Dans n'importe quel composant
import { useProductCategories } from '../hooks/useProductCategories';

function TestComponent() {
  const { categories, loading } = useProductCategories();
  
  useEffect(() => {
    if (!loading) {
      console.log('📊 Catégories chargées:', {
        couchage: categories['fima-couchage']?.length,
        design: categories['fima-design']?.length,
        glass: categories['univers-glass']?.length,
        total: (
          categories['fima-couchage']?.length +
          categories['fima-design']?.length +
          categories['univers-glass']?.length
        )
      });
    }
  }, [categories, loading]);
  
  return <div>Check console</div>;
}
```

**Résultat attendu dans la console**:
```javascript
📊 Catégories chargées: {
  couchage: 5,
  design: 5,
  glass: 5,
  total: 15
}
```

### Test 3: Via l'API directement
```bash
# Test GET
curl "https://YOUR_PROJECT_ID.supabase.co/functions/v1/make-server-4a2f605a/product-categories" \
  -H "Authorization: Bearer YOUR_PUBLIC_ANON_KEY"
```

**Résultat attendu**:
- Status 200
- JSON avec 3 clés: fima-couchage, fima-design, univers-glass
- 5 catégories dans chaque clé
- Total: 15 catégories

---

## ⚠️ Problèmes courants

### Problème 1: Erreur "Failed to fetch"
**Cause**: Le serveur Supabase n'est pas déployé ou les routes n'existent pas.

**Solution**:
1. Vérifier que le serveur Supabase est déployé
2. Vérifier que les routes API existent dans `/supabase/functions/server/index.tsx`
3. Redéployer le serveur si nécessaire

### Problème 2: Erreur 401 Unauthorized
**Cause**: Le token d'authentification est manquant ou invalide.

**Solution**:
1. Vérifier que vous êtes connecté dans le CMS
2. Vérifier que le publicAnonKey est correct dans `/utils/supabase/info.tsx`
3. Essayer de vous reconnecter

### Problème 3: Données vides après initialisation
**Cause**: L'initialisation a échoué silencieusement.

**Solution**:
1. Ouvrir la console du navigateur
2. Regarder les erreurs dans l'onglet Network
3. Vérifier les logs du serveur Supabase
4. Réessayer l'initialisation

### Problème 4: Catégories en double
**Cause**: Vous avez initialisé plusieurs fois.

**Solution**:
1. C'est normal, les données sont écrasées
2. Les catégories par défaut sont réinitialisées
3. Vous pouvez supprimer les doublons manuellement dans le CMS

---

## 🔄 Réinitialiser les données

Si vous voulez remettre les données à zéro :

### Option 1: Via le CMS
```
1. Aller sur /cms → Catégories
2. Cliquer sur "Réinitialiser"
3. Confirmer
```

### Option 2: Via le code
```typescript
import { initProductCategories } from '../utils/initProductCategoriesData';

// Dans votre composant
await initProductCategories();
```

**Note**: Cette action écrase toutes les catégories existantes avec les 15 catégories par défaut.

---

## ✅ Checklist finale

Après l'initialisation, vérifier que:

- [ ] 15 catégories sont créées dans Supabase
- [ ] 5 catégories dans FIMA Couchage
- [ ] 5 catégories dans FIMA Design
- [ ] 5 catégories dans Univers Glass
- [ ] Chaque catégorie a une icône emoji
- [ ] Chaque catégorie a une description
- [ ] Chaque catégorie a un compteur
- [ ] Le hook useProductCategories() retourne les données
- [ ] Le CMS affiche correctement les catégories
- [ ] Les onglets métiers fonctionnent
- [ ] Aucune erreur dans la console

---

## 🎉 Prochaines étapes

Maintenant que vos catégories sont initialisées, vous pouvez:

1. **Les utiliser dans vos composants**
   ```typescript
   const { categories } = useProductCategories('fima-couchage');
   ```

2. **Créer de nouvelles catégories** via le CMS

3. **Modifier les catégories existantes** via le CMS

4. **Lier les produits aux catégories**

5. **Créer des pages de catégories dynamiques**

---

## 📞 Support

Pour toute question:
1. Consulter [PRODUCT_CATEGORIES_MIGRATION_COMPLETE.md](./PRODUCT_CATEGORIES_MIGRATION_COMPLETE.md)
2. Consulter [TEST_PRODUCT_CATEGORIES.md](./TEST_PRODUCT_CATEGORIES.md)
3. Vérifier les logs console
4. Tester l'API directement

---

**✅ Initialisation complète ! Vos catégories sont prêtes à l'emploi ! 🚀**
