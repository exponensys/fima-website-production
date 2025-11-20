# 🔄 RÉACTIVER L'API BUSINESS UNITS

**Guide rapide** pour réactiver la synchronisation Supabase après redéploiement du serveur.

---

## ⚡ ÉTAPES RAPIDES (2 minutes)

### 1️⃣ Redéployer le serveur (30 secondes)

Dans votre terminal:

```bash
supabase functions deploy server
```

Attendez que le déploiement soit terminé.

---

### 2️⃣ Modifier le hook frontend (30 secondes)

**Fichier**: `/hooks/useSupabaseBusinessUnits.ts`

**Trouvez cette ligne** (vers ligne 76):
```typescript
setBusinessUnits(DEFAULT_BUSINESS_UNITS);
```

**Commentez-la**:
```typescript
// setBusinessUnits(DEFAULT_BUSINESS_UNITS);  // ← MODE LOCAL DÉSACTIVÉ
```

**Décommentez le bloc** marqué "CODE API À DÉCOMMENTER" (lignes 82-126):
- Supprimez les `/*` et `*/` qui entourent le code
- OU sélectionnez tout le bloc et faites `Ctrl+/` (Windows) ou `Cmd+/` (Mac)

---

### 3️⃣ Modifier le CMS (30 secondes)

**Fichier**: `/cms/pages/CMSBusinessUnits.tsx`

**Trouvez ces lignes** (vers ligne 141-143):
```typescript
setBusinessUnits(DEFAULT_BUSINESS_UNITS);
setIsApiAvailable(false);
setIsLoading(false);
```

**Commentez-les**:
```typescript
// setBusinessUnits(DEFAULT_BUSINESS_UNITS);  // ← MODE LOCAL DÉSACTIVÉ
// setIsApiAvailable(false);
// setIsLoading(false);
```

**Décommentez le bloc** marqué "CODE API À DÉCOMMENTER" (lignes 149-185):
- Supprimez les `/*` et `*/` qui entourent le code
- OU sélectionnez tout le bloc et faites `Ctrl+/` (Windows) ou `Cmd+/` (Mac)

---

### 4️⃣ Recharger la page (5 secondes)

Appuyez sur `F5` ou `Ctrl+R` (Windows) / `Cmd+R` (Mac)

---

### 5️⃣ Vérifier que ça marche (5 secondes)

Ouvrez la console du navigateur (F12) et cherchez:

✅ **Succès** - Vous devriez voir:
```
🏢 useSupabaseBusinessUnits: Récupération depuis l'API...
✅ Business Units récupérés depuis Supabase: [...]
```

❌ **Problème** - Si vous voyez toujours 404:
- Le serveur n'a pas été correctement redéployé
- Réessayez l'étape 1

---

## 📝 EXEMPLE COMPLET

### Avant (mode local):

**Hook** (`/hooks/useSupabaseBusinessUnits.ts`):
```typescript
// API désactivée
setBusinessUnits(DEFAULT_BUSINESS_UNITS);

/* CODE API COMMENTÉ
const response = await fetch(...);
...
*/
```

### Après (mode API):

**Hook** (`/hooks/useSupabaseBusinessUnits.ts`):
```typescript
// API activée
// setBusinessUnits(DEFAULT_BUSINESS_UNITS);  // ← Commenté

// CODE API DÉCOMMENTÉ
const response = await fetch(
  `https://${projectId}.supabase.co/functions/v1/make-server-4a2f605a/business-units`,
  {
    headers: {
      'Authorization': `Bearer ${publicAnonKey}`,
      'Content-Type': 'application/json',
    },
  }
);

if (!response.ok) {
  if (response.status === 404) {
    console.warn('⚠️ Route /business-units retourne 404');
    console.log('💡 SOLUTION: Redéployez le serveur Supabase');
  }
  throw new Error(`HTTP error! status: ${response.status}`);
}

const result = await response.json();
// ... reste du code
```

---

## 🧪 TEST RAPIDE AVANT MODIFICATION

Avant de modifier les fichiers, testez si l'API fonctionne:

Dans la console du navigateur (F12):

```javascript
fetch('https://jxikbrjmdmznoehhccdw.supabase.co/functions/v1/make-server-4a2f605a/business-units', {
  headers: {
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp4aWticmptZG16bm9laGhjY2R3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTYwMDE3MTEsImV4cCI6MjA3MTU3NzcxMX0.XbVLAaIA_tSV7toWwi-yVdmIlD2AE08ihGLPxyqHZio',
  },
})
.then(r => {
  console.log('Status:', r.status);
  if (r.status === 200) {
    console.log('✅ API prête! Vous pouvez modifier les fichiers');
  } else {
    console.log('❌ API pas encore prête, redéployez d\'abord');
  }
  return r.json();
})
.then(data => console.log('Data:', data));
```

**Si status = 200** → Modifiez les fichiers  
**Si status = 404** → Redéployez d'abord le serveur

---

## ⚠️ ERREURS COMMUNES

### Erreur: "Still getting 404 after reactivation"

**Cause**: Le serveur n'a pas été redéployé

**Solution**:
```bash
supabase functions deploy server
```

### Erreur: "Code commented but still local mode"

**Cause**: Vous avez oublié de décommenter le code API

**Solution**: Vérifiez que vous avez bien supprimé les `/*` et `*/` autour du code API

### Erreur: "Syntax error after uncommenting"

**Cause**: Vous avez peut-être décommenté partiellement

**Solution**: Assurez-vous que TOUT le bloc entre `/*` et `*/` est décommenté

---

## 📊 CHECKLIST COMPLÈTE

- [ ] Serveur redéployé (`supabase functions deploy server`)
- [ ] Test API retourne status 200
- [ ] Hook modifié (`useSupabaseBusinessUnits.ts`)
  - [ ] Ligne `setBusinessUnits(DEFAULT_BUSINESS_UNITS)` commentée
  - [ ] Bloc "CODE API À DÉCOMMENTER" décommenté
- [ ] CMS modifié (`CMSBusinessUnits.tsx`)
  - [ ] Lignes mode local commentées
  - [ ] Bloc "CODE API À DÉCOMMENTER" décommenté
- [ ] Page rechargée (`F5`)
- [ ] Console vérifiée → `✅ Business Units récupérés depuis Supabase`

---

## 🎯 RÉSULTAT FINAL

**Avant réactivation** (mode local):
- ✅ Site fonctionne
- ⚠️ Modifications CMS non sauvegardées
- 📦 Données locales uniquement

**Après réactivation** (mode API):
- ✅ Site fonctionne
- ✅ Modifications CMS sauvegardées dans Supabase
- ✅ Données synchronisées
- ✅ Persistance complète

---

## 💡 ASTUCE

Pour basculer rapidement entre mode local et mode API:

1. **Créez une constante** au début du fichier:
```typescript
const USE_API = true;  // false pour mode local, true pour mode API
```

2. **Utilisez-la dans le code**:
```typescript
if (USE_API) {
  // Code API
} else {
  setBusinessUnits(DEFAULT_BUSINESS_UNITS);
}
```

Ainsi, vous pouvez basculer en changeant juste `true` ↔ `false` !

---

**Temps total**: 2 minutes  
**Difficulté**: Très facile  
**Résultat**: API Supabase activée et fonctionnelle ! 🎉
