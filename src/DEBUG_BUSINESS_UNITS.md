# 🔍 DEBUG: Business Units - Erreur 404

## ❌ Problème constaté

```
❌ Erreur lors de la récupération des business units: Error: HTTP error! status: 404
```

## 🎯 Cause probable

La route `/make-server-4a2f605a/business-units` existe bien dans le code backend (ligne 3044 de `/supabase/functions/server/index.tsx`), mais **le serveur Supabase Edge Function n'a pas été redémarré** depuis l'ajout de cette route.

## ✅ SOLUTION

### Option 1: Redémarrer le serveur Supabase (Recommandé)

Dans votre terminal Supabase ou dashboard:

1. **Arrêter le serveur** (si vous utilisez Supabase CLI):
   ```bash
   supabase functions stop
   ```

2. **Redémarrer le serveur**:
   ```bash
   supabase functions serve
   ```

3. **OU redéployer la fonction**:
   ```bash
   supabase functions deploy server
   ```

### Option 2: Test manuel de l'API

Testez si la route répond dans la console du navigateur:

```javascript
const projectId = "jxikbrjmdmznoehhccdw";
const publicAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp4aWticmptZG16bm9laGhjY2R3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTYwMDE3MTEsImV4cCI6MjA3MTU3NzcxMX0.XbVLAaIA_tSV7toWwi-yVdmIlD2AE08ihGLPxyqHZio";

fetch(`https://${projectId}.supabase.co/functions/v1/make-server-4a2f605a/business-units`, {
  headers: {
    'Authorization': `Bearer ${publicAnonKey}`,
    'Content-Type': 'application/json',
  },
})
.then(r => {
  console.log('Status:', r.status);
  return r.json();
})
.then(data => console.log('Response:', data))
.catch(err => console.error('Error:', err));
```

**Résultat attendu**:
```javascript
Status: 200
Response: {
  success: true,
  data: [
    { id: 'fima-couchage', name: 'FIMA Couchage', ... },
    { id: 'fima-design', name: 'FIMA Design', ... },
    { id: 'univers-glass', name: 'UNIVERS GLASS', ... }
  ]
}
```

### Option 3: Utiliser les données de fallback (Temporaire)

En attendant le redémarrage du serveur, le hook `useSupabaseBusinessUnits` a déjà un fallback intégré. Les 3 business units par défaut devraient s'afficher automatiquement.

## 📋 Vérifications

### ✅ Ce qui est correct

1. **Route backend existe** ✅
   - Ligne 3044: `app.get('/make-server-4a2f605a/business-units', ...)`
   - Ligne 3080: `app.post('/make-server-4a2f605a/business-units', ...)`

2. **Hook utilise le bon endpoint** ✅
   - `/hooks/useSupabaseBusinessUnits.ts` ligne 79
   - URL: `https://${projectId}.supabase.co/functions/v1/make-server-4a2f605a/business-units`

3. **CMS utilise le bon endpoint** ✅
   - `/cms/pages/CMSBusinessUnits.tsx` ligne 72
   - URL: `https://${projectId}.supabase.co/functions/v1/make-server-4a2f605a/business-units`

4. **Credentials définis** ✅
   - `projectId`: "jxikbrjmdmznoehhccdw"
   - `publicAnonKey`: Défini

5. **Fallback données locales** ✅
   - Le hook retourne les données par défaut si l'API échoue

### ❓ À vérifier

- [ ] Le serveur Supabase Edge Function est-il démarré ?
- [ ] Le serveur a-t-il été redémarré depuis l'ajout de la route ?
- [ ] Y a-t-il des erreurs dans les logs du serveur ?

## 🔧 Dépannage avancé

### Vérifier les logs du serveur

Si vous utilisez Supabase CLI:

```bash
supabase functions logs server
```

Recherchez des erreurs de type:
- Erreurs de syntaxe TypeScript
- Erreurs d'import
- Erreurs de démarrage de Hono

### Vérifier que toutes les routes se chargent

Dans la console du navigateur, testez d'autres routes pour voir si elles fonctionnent:

```javascript
// Test de la route team (devrait fonctionner)
fetch(`https://jxikbrjmdmznoehhccdw.supabase.co/functions/v1/make-server-4a2f605a/team`, {
  headers: {
    'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp4aWticmptZG16bm9laGhjY2R3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTYwMDE3MTEsImV4cCI6MjA3MTU3NzcxMX0.XbVLAaIA_tSV7toWwi-yVdmIlD2AE08ihGLPxyqHZio`,
    'Content-Type': 'application/json',
  },
})
.then(r => r.json())
.then(data => console.log('Team route works:', data))
.catch(err => console.error('Team route error:', err));
```

Si cette route fonctionne mais pas `/business-units`, c'est que le serveur doit être redémarré.

## 🎯 Actions immédiates

1. **Redémarrer le serveur Supabase** (voir Option 1 ci-dessus)
2. **Recharger la page** (F5)
3. **Vérifier la console** pour voir si l'erreur persiste

## 💡 Note importante

Le hook `useSupabaseBusinessUnits` est conçu pour être résilient. Même si l'API échoue, il affichera les 3 business units par défaut:
- FIMA Couchage (Vert)
- FIMA Design (Gris)
- UNIVERS GLASS (Cyan)

Donc le site continue de fonctionner normalement en attendant que l'API soit disponible.

## 📞 Besoin d'aide ?

Si le problème persiste après redémarrage:

1. Vérifiez les logs du serveur
2. Assurez-vous que le fichier `/supabase/functions/server/index.tsx` n'a pas d'erreurs de syntaxe
3. Testez la route manuellement (Option 2)
4. Consultez les logs Supabase dans le dashboard

---

**TL;DR**: Redémarrez le serveur Supabase Edge Function, rechargez la page, et tout devrait fonctionner ! 🚀
