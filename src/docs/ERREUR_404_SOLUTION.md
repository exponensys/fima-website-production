# ❌ ERREUR 404 - BUSINESS UNITS

## 🎯 Le problème

```
❌ Erreur lors de la récupération des business units: Error: HTTP error! status: 404
```

## ✅ La solution (2 minutes)

### Étape 1: Redémarrer le serveur Supabase

La route `/business-units` existe dans le code mais le serveur ne l'a pas encore chargée.

**Choix A - Via Supabase CLI** (recommandé):

```bash
supabase functions deploy server
```

**Choix B - Via Dashboard Supabase**:

1. Allez sur https://supabase.com/dashboard
2. Sélectionnez votre projet "jxikbrjmdmznoehhccdw"
3. Allez dans "Edge Functions"
4. Trouvez la fonction "server"
5. Cliquez sur "Deploy"

**Choix C - Via Supabase CLI (mode dev)**:

```bash
# Arrêter
supabase functions stop

# Redémarrer
supabase functions serve
```

### Étape 2: Vérifier que ça marche

Dans la console du navigateur (F12), collez ce code:

```javascript
fetch('https://jxikbrjmdmznoehhccdw.supabase.co/functions/v1/make-server-4a2f605a/business-units', {
  headers: {
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp4aWticmptZG16bm9laGhjY2R3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTYwMDE3MTEsImV4cCI6MjA3MTU3NzcxMX0.XbVLAaIA_tSV7toWwi-yVdmIlD2AE08ihGLPxyqHZio',
    'Content-Type': 'application/json',
  },
})
.then(r => {
  console.log('📡 Status:', r.status);
  return r.json();
})
.then(data => {
  if (data.success) {
    console.log('✅ API FONCTIONNE!');
    console.log('📊 Données:', data.data);
  } else {
    console.error('❌ Erreur:', data.error);
  }
})
.catch(err => console.error('❌ Erreur réseau:', err));
```

**Résultat attendu**:
```
📡 Status: 200
✅ API FONCTIONNE!
📊 Données: Array(3)
  0: {id: 'fima-couchage', name: 'FIMA Couchage', ...}
  1: {id: 'fima-design', name: 'FIMA Design', ...}
  2: {id: 'univers-glass', name: 'UNIVERS GLASS', ...}
```

### Étape 3: Recharger le site

Appuyez sur `F5` ou `Ctrl+R` (Windows) / `Cmd+R` (Mac)

L'erreur devrait avoir disparu ! ✨

---

## 🔍 Pourquoi cette erreur ?

La route `/make-server-4a2f605a/business-units` existe bien dans votre code:

**Fichier**: `/supabase/functions/server/index.tsx`
**Ligne**: 3044

```typescript
app.get('/make-server-4a2f605a/business-units', async (c) => {
  // ... code de la route
})
```

**MAIS** le serveur Supabase Edge Function doit être **redémarré** pour charger cette nouvelle route.

C'est comme si vous aviez ajouté une nouvelle page à votre site mais que vous n'aviez pas rechargé le serveur web.

---

## 💡 Pas de panique !

Même avec cette erreur, **votre site fonctionne quand même** ! 

Le hook `useSupabaseBusinessUnits` a un **fallback automatique** qui affiche les 3 métiers par défaut:
- ✅ FIMA Couchage (Vert)
- ✅ FIMA Design (Gris)
- ✅ UNIVERS GLASS (Cyan)

Donc vos visiteurs voient toujours les cartes des métiers.

L'erreur 404 empêche juste:
- ❌ La modification via le CMS
- ❌ L'initialisation de nouvelles données
- ❌ La synchronisation avec Supabase

Mais l'affichage fonctionne parfaitement grâce au fallback !

---

## 🚀 Après le redémarrage

Une fois le serveur redémarré, vous pouvez:

1. **Initialiser les données** (voir `/BUSINESS_UNITS_READY.md`)
2. **Utiliser le CMS** pour modifier les métiers
3. **Tout est dynamique** et connecté à Supabase

---

## 📞 Besoin d'aide ?

### Logs du serveur

Pour voir les logs du serveur Supabase:

```bash
supabase functions logs server
```

Recherchez des erreurs qui pourraient empêcher le démarrage.

### Vérifier d'autres routes

Pour voir si c'est un problème général ou spécifique aux business units:

```javascript
// Test route "team" (devrait fonctionner)
fetch('https://jxikbrjmdmznoehhccdw.supabase.co/functions/v1/make-server-4a2f605a/team', {
  headers: {
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp4aWticmptZG16bm9laGhjY2R3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTYwMDE3MTEsImV4cCI6MjA3MTU3NzcxMX0.XbVLAaIA_tSV7toWwi-yVdmIlD2AE08ihGLPxyqHZio',
  },
})
.then(r => r.json())
.then(data => console.log('Route team:', data));
```

Si la route `team` fonctionne (status 200) mais pas `business-units` (status 404), c'est que le serveur doit être redémarré.

---

## ✨ Résumé

1. **Redémarrer**: `supabase functions deploy server`
2. **Tester**: Coller le code de test dans la console
3. **Recharger**: `F5`
4. **Profiter**: Les Business Units sont maintenant 100% dynamiques ! 🎉

**Temps total**: 2 minutes  
**Difficulté**: Très facile  
**Résultat**: Problème résolu définitivement
