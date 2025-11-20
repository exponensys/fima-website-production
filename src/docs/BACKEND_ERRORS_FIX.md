# 🚨 CORRECTION DES ERREURS BACKEND

> **Si vous voyez des erreurs dans la console**, suivez ce guide rapide

---

## ❌ Erreurs que vous voyez probablement

```
Error fetching site settings: Error: Failed to fetch site settings
Error fetching product categories: Error: Failed to fetch product categories
Could not find the table 'public.business_units' in the schema cache
```

---

## ✅ SOLUTION RAPIDE (2 minutes)

### Option 1 : Via l'interface (Le plus simple ⚡)

1. **Lancer l'application** (si pas déjà lancée)
   ```bash
   npm run dev
   ```

2. **Un modal s'affiche automatiquement** avec le titre "Initialisation requise"

3. **Cliquer sur le bouton** "Initialiser les données"

4. **Attendre 2 secondes** → La page se recharge automatiquement

5. **C'est terminé !** ✅ Les erreurs ont disparu

---

### Option 2 : Via curl (Pour les développeurs)

```bash
# Remplacer les valeurs si nécessaire (voir /utils/supabase/info.tsx)
PROJECT_ID="jxikbrjmdmznoehhccdw"
ANON_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp4aWticmptZG16bm9laGhjY2R3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTYwMDE3MTEsImV4cCI6MjA3MTU3NzcxMX0.XbVLAaIA_tSV7toWwi-yVdmIlD2AE08ihGLPxyqHZio"

curl -X POST "https://${PROJECT_ID}.supabase.co/functions/v1/make-server-4a2f605a/init-phase-1-2" \
  -H "Authorization: Bearer ${ANON_KEY}" \
  -H "Content-Type: application/json"
```

**Réponse attendue** :
```json
{
  "success": true,
  "message": "Phase 1 & 2 data initialized successfully",
  "data": {
    "site_settings": 6,
    "business_units": 3,
    "product_categories": 15
  }
}
```

Puis **recharger la page** (F5).

---

## 🔍 VÉRIFICATION

Une fois initialisé :

1. **Ouvrir la console** (F12)
2. **Vérifier** : Plus d'erreurs rouges
3. **Vérifier le Header** : Langues (FR/EN) et devises (XOF/EUR/USD/GBP) s'affichent
4. **Vérifier le Footer** : Certifications visibles
5. **Cliquer sur "Nos métiers"** : 3 options visibles (FIMA Couchage, FIMA Design, UNIVERS GLASS)

---

## 📚 DOCUMENTATION COMPLÈTE

**Guide détaillé** : [`/docs/INIT_DATA_GUIDE.md`](/docs/INIT_DATA_GUIDE.md)

**Corrections appliquées** : [`/docs/FIXES_APPLIED.md`](/docs/FIXES_APPLIED.md)

**Documentation générale** : [`/docs/README.md`](/docs/README.md)

---

## 🎯 CE QUI A ÉTÉ CORRIGÉ

1. ✅ Ajout de la route API `/business-units`
2. ✅ Refactoring du hook `useSupabaseBusinessUnits`
3. ✅ Création de la route d'initialisation `/init-phase-1-2`
4. ✅ Composant `DataInitializer` pour initialisation automatique
5. ✅ Documentation complète

---

## 🆘 EN CAS DE PROBLÈME

### L'initialisation échoue

**Vérifier** :
1. Le serveur backend Supabase est accessible
2. Les credentials dans `/utils/supabase/info.tsx` sont corrects
3. Vous avez une connexion internet

### Les erreurs persistent après initialisation

**Actions** :
1. Vider le cache du navigateur (Ctrl+Shift+Delete)
2. Recharger la page en force (Ctrl+F5)
3. Vérifier la console pour de nouvelles erreurs

### Le modal ne s'affiche pas

**Solution** :
1. Utiliser l'Option 2 (curl) pour initialiser manuellement
2. Ou importer et appeler `initSupabaseData()` depuis la console

---

## ✅ VALIDATION FINALE

Si ces 3 points sont OK, tout fonctionne :

- [ ] Aucune erreur dans la console
- [ ] Header affiche 2 langues et 4 devises
- [ ] Footer affiche les certifications

**→ Vous pouvez continuer le développement ! 🚀**

---

**Besoin d'aide ?** Consultez `/docs/INIT_DATA_GUIDE.md`
