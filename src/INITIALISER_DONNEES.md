# 🚀 INITIALISER LES DONNÉES SUPABASE

## Vous voyez ces erreurs ?

```
Error fetching product categories
Error fetching site settings
Error fetching business units
```

## ✅ SOLUTION EN 1 CLIC

### Un modal devrait s'afficher automatiquement

Si vous voyez un modal "Initialisation requise" :
1. **Cliquez sur le bouton** "Initialiser les données"
2. **Attendez 2 secondes**
3. **La page se recharge** automatiquement
4. **✅ Terminé !**

---

## 🔧 Si le modal ne s'affiche PAS

Utilisez cette commande dans votre terminal :

```bash
curl -X POST "https://jxikbrjmdmznoehhccdw.supabase.co/functions/v1/make-server-4a2f605a/init-phase-1-2" \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp4aWticmptZG16bm9laGhjY2R3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTYwMDE3MTEsImV4cCI6MjA3MTU3NzcxMX0.XbVLAaIA_tSV7toWwi-yVdmIlD2AE08ihGLPxyqHZio" \
  -H "Content-Type: application/json"
```

**Puis rechargez la page** (F5)

---

## ✅ Vérification

Les erreurs ont disparu ? **C'est bon !** ✅

Sinon, consultez : `/docs/INIT_DATA_GUIDE.md`
