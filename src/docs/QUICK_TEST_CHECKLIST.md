# ✅ CHECKLIST DE TEST RAPIDE - PHASE 1 & 2

> **Objectif** : Valider que tous les composants migrés fonctionnent correctement  
> **Durée estimée** : 30 minutes  
> **Prérequis** : Application lancée et accessible

---

## 🎯 TESTS VISUELS (15 minutes)

### 1. Header - Navigation principale

**Page** : Toutes les pages

**Éléments à vérifier** :

- [ ] **Logo FIMA** s'affiche correctement
- [ ] **Menu métiers** (FIMA Couchage, FIMA Design, UNIVERS GLASS) fonctionne
- [ ] **Sélecteur de langue** affiche FR et EN
- [ ] **Sélecteur de devise** affiche XOF, EUR, USD, GBP
- [ ] **Panier** affiche le nombre d'articles
- [ ] **Icône favoris** fonctionne
- [ ] **Menu utilisateur** (si connecté) fonctionne
- [ ] **Recherche** fonctionne

**Test de fallback** :
- [ ] Ouvrir DevTools → Console
- [ ] Vérifier qu'il n'y a pas d'erreur `Failed to fetch`
- [ ] Si erreur, vérifier que les données par défaut s'affichent quand même

---

### 2. Footer - Pied de page

**Page** : Toutes les pages

**Éléments à vérifier** :

- [ ] **Description entreprise** s'affiche (texte "Leader dans la literie...")
- [ ] **Certifications** s'affichent (ISO 9001, EPV)
- [ ] **Liens réseaux sociaux** sont présents (Facebook, LinkedIn, Instagram, YouTube)
- [ ] **Informations de contact** s'affichent (Email, Téléphone, Adresse)
- [ ] **Horaires d'ouverture** s'affichent
- [ ] **Liens footer** fonctionnent (À propos, Nos métiers, etc.)

**Test de fallback** :
- [ ] Tous les liens sociaux ouvrent dans un nouvel onglet (`target="_blank"`)
- [ ] Vérifier Console pour erreurs

---

### 3. QuoteRequestModal - Modal de devis

**Comment ouvrir** : 
- Cliquer sur "Demander un devis" (bouton présent sur plusieurs pages)

**Éléments à vérifier** :

**Étape 1 - Sélection métier** :
- [ ] Les 3 métiers s'affichent (FIMA Couchage, FIMA Design, UNIVERS GLASS)
- [ ] Icônes des métiers s'affichent correctement
- [ ] Description de chaque métier visible
- [ ] Bouton "Suivant" est cliquable après sélection

**Étape 2 - Type de projet** :
- [ ] 5 types de projets s'affichent (Résidentiel, Commercial, Hôtellerie, Institutionnel, Industriel)
- [ ] Descriptions visibles
- [ ] Sélection fonctionne

**Étape 3 - Budget** :
- [ ] 6 fourchettes de budget s'affichent (< 5M, 5-15M, 15-50M, 50-100M, > 100M, À discuter)
- [ ] Toutes en **F CFA** (devise ouest-africaine)

**Étape 4 - Délais** :
- [ ] 5 options de délais s'affichent (Urgent, 1-3 mois, 3-6 mois, 6-12 mois, Flexible)

**Étape 5 - Coordonnées** :
- [ ] Formulaire complet s'affiche
- [ ] Bouton "Envoyer la demande" fonctionne

**Test de fallback** :
- [ ] Vérifier Console pour erreurs de chargement

---

### 4. ExpertConsultationModal - Modal consultation expert

**Comment ouvrir** :
- Cliquer sur "Consultation gratuite" ou "Prendre rendez-vous"

**Éléments à vérifier** :

**Mode "Consultation"** :
- [ ] **Services** s'affichent (Literie & Couchage, Menuiserie & Design, Vitrerie & Aluminium, Solutions B2B, Autre)
- [ ] Icônes des services visibles
- [ ] Descriptions complètes

**Budget et délais** :
- [ ] 5 fourchettes budget s'affichent (< 500k, 500k-2M, 2M-10M, > 10M, À discuter)
- [ ] 5 options délais s'affichent (Urgent, 1-3 mois, 3-6 mois, 6+ mois, Flexible)

**Mode "Rendez-vous"** :
- [ ] Sélecteur de date fonctionne
- [ ] **12 créneaux horaires** s'affichent (09:00 → 16:30)

**Test de fallback** :
- [ ] Vérifier Console pour erreurs

---

### 5. ChatWidget - Widget de chat

**Localisation** : Coin inférieur droit de toutes les pages

**Éléments à vérifier** :

**État fermé** :
- [ ] Icône de chat (bulle) visible
- [ ] Animation/badge si non ouvert

**État ouvert** :
- [ ] **Message de bienvenue** s'affiche : "Bonjour ! Je suis Sophie, votre conseillère FIMA..."
- [ ] **4 réponses rapides** s'affichent en bas :
  - "Informations sur les matelas"
  - "Délais de livraison"
  - "Retours et garanties"
  - "Aide au choix"

**Interaction** :
- [ ] Cliquer sur une réponse rapide affiche une réponse automatique
- [ ] Taper un message fonctionne
- [ ] Envoyer un message fonctionne

**Réponses automatiques à tester** :
- [ ] Taper "matelas" → Réponse sur la gamme de matelas
- [ ] Taper "livraison" → Réponse sur délais de livraison (3-5 jours)
- [ ] Taper "garantie" → Réponse sur garantie 10 ans et 100 nuits d'essai
- [ ] Taper "prix" → Réponse sur prix à partir de 489€
- [ ] Taper "taille" → Réponse sur les tailles disponibles

**Test de fallback** :
- [ ] Vérifier que le chat fonctionne même si backend lent

---

## 🧪 TESTS TECHNIQUES (10 minutes)

### Test 1 : Vérifier les appels API

1. **Ouvrir DevTools** (F12)
2. **Onglet Network**
3. **Recharger la page**
4. **Filtrer par** : `make-server-4a2f605a`

**Vérifier qu'on voit ces appels** :

**Site Settings** :
- [ ] `GET /site-settings?key=languages` → Status 200
- [ ] `GET /site-settings?key=currencies` → Status 200
- [ ] `GET /site-settings?key=company_description` → Status 200
- [ ] `GET /site-settings?key=certifications` → Status 200
- [ ] `GET /site-settings?key=social_links` → Status 200
- [ ] `GET /site-settings?key=contact_info` → Status 200

**Business Units & Categories** :
- [ ] `GET /business-units` → Status 200
- [ ] `GET /product-categories` → Status 200

**Temps de réponse** :
- [ ] Tous les appels < 500ms
- [ ] Aucun timeout

---

### Test 2 : Tester les fallbacks

**Objectif** : Vérifier que le site fonctionne même si le backend est indisponible

**Comment** :
1. **DevTools** → **Network** → **Throttling** → **Offline**
2. **Recharger la page**

**Vérifier** :
- [ ] Le Header s'affiche avec données par défaut
- [ ] Le Footer s'affiche avec données par défaut
- [ ] Les modals s'ouvrent avec données par défaut
- [ ] Le ChatWidget fonctionne avec données par défaut
- [ ] **Aucune page blanche**
- [ ] **Aucun crash**

**Remettre en ligne** :
- DevTools → Network → Online

---

### Test 3 : Vérifier la Console

**DevTools** → **Console**

**Vérifier qu'il n'y a PAS** :
- [ ] ❌ Erreurs rouges critiques
- [ ] ❌ `TypeError`, `ReferenceError`, `SyntaxError`
- [ ] ❌ Messages "Failed to fetch" (sauf si backend vraiment down)

**Warnings acceptables** :
- ⚠️ Warnings Supabase de développement (normaux)
- ⚠️ Warnings React DevTools (normaux)

---

### Test 4 : Test mobile

**Ouvrir DevTools** → **Toggle device toolbar** (Ctrl+Shift+M)

**Sélectionner** : iPhone 12 Pro ou Samsung Galaxy S20

**Vérifier** :
- [ ] Header mobile s'affiche correctement
- [ ] Menu hamburger fonctionne
- [ ] Footer mobile lisible
- [ ] Modals s'affichent bien sur mobile
- [ ] ChatWidget ne masque pas le contenu
- [ ] Tous les boutons sont cliquables

**Tester rotation** :
- [ ] Portrait → Paysage fonctionne
- [ ] Pas de débordement horizontal

---

## 📊 TESTS DE DONNÉES (5 minutes)

### Test langues et devises

**Actions** :
1. Ouvrir le sélecteur de **langue** dans le Header
2. Changer de FR → EN
3. Vérifier que l'interface change (si traduction implémentée)

**Devises** :
1. Ouvrir le sélecteur de **devise**
2. Changer de XOF (F CFA) → EUR
3. **Ouvrir un produit**
4. Vérifier que le **prix change** selon la devise sélectée

**Persistance** :
- [ ] Recharger la page
- [ ] La langue/devise sélectionnée est conservée

---

### Test données dynamiques

**Ouvrir DevTools** → **Application/Storage** → **Local Storage**

**Vérifier qu'on voit** :
- [ ] `selectedLanguage: "FR"` (ou EN si changé)
- [ ] `selectedCurrency: "XOF"` (ou autre si changé)

---

## 🐛 SI DES BUGS SONT TROUVÉS

### Reporter le bug

Créer un fichier `/docs/BUGS_FOUND.md` avec ce format :

```markdown
# BUG 1 : [Titre court]

**Composant** : Header / Footer / QuoteModal / ExpertModal / ChatWidget

**Gravité** : Critique / Haute / Moyenne / Basse

**Description** :
[Décrire le bug en détail]

**Étapes pour reproduire** :
1. Aller sur la page X
2. Cliquer sur Y
3. Observer Z

**Comportement attendu** :
[Ce qui devrait se passer]

**Comportement observé** :
[Ce qui se passe réellement]

**Console errors** :
```
[Copier les erreurs de la console]
```

**Screenshot** :
[Ajouter si possible]

---
```

---

## ✅ VALIDATION FINALE

**Si tous les tests passent** :

- [x] **Header** : 100% fonctionnel ✅
- [x] **Footer** : 100% fonctionnel ✅
- [x] **QuoteRequestModal** : 100% fonctionnel ✅
- [x] **ExpertConsultationModal** : 100% fonctionnel ✅
- [x] **ChatWidget** : 100% fonctionnel ✅
- [x] **Fallbacks** : Fonctionnent correctement ✅
- [x] **Performance** : Appels API < 500ms ✅
- [x] **Mobile** : Responsive OK ✅

**→ Phase 1 & 2 VALIDÉE ✅**

**→ Prêt pour Phase 3 🚀**

---

**Si des bugs sont trouvés** :

1. **Reporter** dans `/docs/BUGS_FOUND.md`
2. **Prioriser** (Critiques d'abord)
3. **Corriger** avant de passer à Phase 3
4. **Re-tester** après correction

---

## 📞 SUPPORT

**Documentation** :
- Guide complet : `/docs/FINAL_MIGRATION_REPORT.md`
- Tests API : `/docs/TEST_API_PHASE_1_2.md`
- TODO restant : `/docs/TODO_REMAINING_WORK.md`

**Questions** :
- Créer un fichier `/docs/QUESTIONS.md` si nécessaire

---

**🎯 Bon courage pour les tests ! 🚀**
