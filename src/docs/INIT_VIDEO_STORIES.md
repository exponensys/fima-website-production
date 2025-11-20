# 🎬 Guide d'Initialisation des Video Stories

## 🎯 Objectif

Initialiser les 5 vidéos de démonstration par défaut dans Supabase pour la section Video Stories.

---

## ⚡ Méthode Rapide (Recommandée)

### Option 1: Via la Console Développeur

1. **Ouvrir le site FIMA**
2. **Ouvrir la Console Développeur** (F12)
3. **Copier-coller ce code** dans la console:

```javascript
// Initialiser les Video Stories
fetch('https://{VOTRE_PROJECT_ID}.supabase.co/functions/v1/make-server-ead4d8e2/init-video-stories', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer {VOTRE_ANON_KEY}',
    'Content-Type': 'application/json',
  },
})
.then(res => res.json())
.then(data => {
  console.log('✅ Video Stories initialisées:', data);
})
.catch(err => {
  console.error('❌ Erreur:', err);
});
```

4. **Appuyer sur Entrée**
5. **Vérifier le message de succès** dans la console

---

## 🔧 Méthode Alternative: Via Composant React

### Créer un bouton d'initialisation temporaire

Ajoutez ce bouton dans n'importe quelle page admin:

```tsx
import { initVideoStoriesData } from '../utils/initVideoStoriesData';

function InitButton() {
  const handleInit = async () => {
    console.log('🎬 Initialisation des Video Stories...');
    const result = await initVideoStoriesData();
    
    if (result.success) {
      alert('✅ ' + result.message);
    } else {
      alert('❌ ' + result.message);
    }
  };

  return (
    <button 
      onClick={handleInit}
      className="px-6 py-3 bg-green-600 text-white"
    >
      Initialiser Video Stories
    </button>
  );
}
```

---

## 📋 Vidéos Initialisées

Après l'initialisation, vous aurez **5 vidéos de démonstration**:

### 1. Transformation Complète d'une Suite Hôtelière
- **Catégorie**: General
- **Featured**: Oui ⭐
- **Durée**: 3:45
- **Citation**: "FIMA a transformé notre vision en réalité avec un professionnalisme exceptionnel."
- **Auteur**: Marie Diallo, Directrice Générale - Hôtel Le Palmier

### 2. Installation de Literie Premium - Résidence Cocody
- **Catégorie**: Couchage
- **Featured**: Oui ⭐
- **Durée**: 2:30

### 3. Projet Menuiserie sur Mesure - Villa Moderne
- **Catégorie**: Design
- **Durée**: 4:15

### 4. Installation Vitrerie & Aluminium - Immeuble de Bureaux
- **Catégorie**: Glass
- **Durée**: 5:20

### 5. Témoignage Client - Restaurant Le Jardin
- **Catégorie**: General
- **Durée**: 2:15

---

## ✅ Vérification

### Vérifier que les vidéos sont bien créées

**Via la Console**:

```javascript
fetch('https://{VOTRE_PROJECT_ID}.supabase.co/functions/v1/make-server-ead4d8e2/video-stories', {
  headers: {
    'Authorization': 'Bearer {VOTRE_ANON_KEY}',
  },
})
.then(res => res.json())
.then(data => {
  console.log('📊 Nombre de vidéos:', data.data.length);
  console.log('📝 Liste des vidéos:', data.data);
});
```

**Via le CMS**:

1. Aller dans **CMS → HomePage → Video Stories**
2. Vous devriez voir **5 vidéos**
3. Les vidéos featured devraient avoir un badge ⭐

**Sur le site**:

1. Aller sur la **page d'accueil**
2. Scroller jusqu'à la section **"Notre histoire, c'est votre histoire"**
3. Vous devriez voir le **carousel de 3 vidéos** (desktop) ou **1 vidéo** (mobile)
4. La **citation** devrait s'afficher en dessous du carousel

---

## 🔄 Réinitialisation

Si vous voulez réinitialiser les vidéos:

1. **Supprimer toutes les vidéos** via le CMS
2. **Relancer l'initialisation** avec le code ci-dessus

**Note**: L'initialisation crée de nouvelles vidéos avec des UUIDs uniques à chaque fois. Pour éviter les doublons, supprimez les anciennes vidéos avant de réinitialiser.

---

## 🎨 Personnalisation

Après l'initialisation, vous pouvez:

1. **Modifier les vidéos** dans le CMS
2. **Changer les URLs** vers de vraies vidéos YouTube/Vimeo
3. **Ajuster les miniatures** avec vos propres images
4. **Modifier les citations** avec de vrais témoignages
5. **Ajouter de nouvelles vidéos** via le CMS

---

## 🐛 Dépannage

### Erreur: "Failed to fetch"

**Cause**: Le serveur Supabase n'est pas accessible

**Solution**:
1. Vérifier que le serveur est déployé
2. Vérifier l'URL du projet
3. Vérifier la clé ANON dans `/utils/supabase/info.tsx`

### Erreur: "Unauthorized"

**Cause**: La clé d'authentification est invalide

**Solution**:
1. Vérifier la clé ANON dans l'environnement Supabase
2. S'assurer que la route n'est pas protégée par auth

### Les vidéos n'apparaissent pas sur le site

**Cause**: Les vidéos ne sont pas publiées

**Solution**:
1. Aller dans le CMS
2. Éditer chaque vidéo
3. Cocher "Publié"
4. Sauvegarder

---

## 📊 Stockage des Données

Les vidéos sont stockées dans Supabase KV Store avec:
- **Clé**: `video-stories:{uuid}`
- **Valeur**: Objet VideoStory complet
- **Préfixe**: `video-stories:`

**Exemple**:
```
video-stories:123e4567-e89b-12d3-a456-426614174000
```

---

## ✨ Prochaines Étapes

Après l'initialisation:

1. ✅ Vérifier que les vidéos s'affichent
2. ✅ Remplacer les URLs par de vraies vidéos
3. ✅ Personnaliser les miniatures
4. ✅ Ajouter vos propres vidéos
5. ✅ Configurer les citations
6. ✅ Organiser l'ordre d'affichage

---

**Bonne initialisation ! 🚀**
