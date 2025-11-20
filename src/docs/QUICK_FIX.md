# ⚡ CORRECTION RAPIDE - 30 SECONDES

## Vous voyez des erreurs backend ? Voici la solution :

### 1️⃣ Lancer l'app
```bash
npm run dev
```

### 2️⃣ Cliquer sur le bouton
Un modal "Initialisation requise" s'affiche → Cliquer **"Initialiser les données"**

### 3️⃣ Attendre
La page se recharge automatiquement après 2 secondes

### ✅ Terminé !
Les erreurs ont disparu.

---

**Pas de modal ?** Utilisez cette commande :

```bash
curl -X POST "https://jxikbrjmdmznoehhccdw.supabase.co/functions/v1/make-server-4a2f605a/init-phase-1-2" \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp4aWticmptZG16bm9laGhjY2R3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTYwMDE3MTEsImV4cCI6MjA3MTU3NzcxMX0.XbVLAaIA_tSV7toWwi-yVdmIlD2AE08ihGLPxyqHZio" \
  -H "Content-Type: application/json"
```

Puis recharger la page (F5).

---

**Plus d'infos** : `/BACKEND_ERRORS_FIX.md` ou `/docs/INIT_DATA_GUIDE.md`
