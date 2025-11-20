# Initialisation des Hero Slides

## 📋 Vue d'ensemble

Ce document explique comment initialiser les slides Hero avec des données de démonstration dans Supabase.

## 🚀 Initialisation des données

### Méthode 1: Via API (Recommandée)

```bash
curl -X POST https://{projectId}.supabase.co/functions/v1/make-server-98c6ec1c/api/init-hero-slides \
  -H "Authorization: Bearer {publicAnonKey}"
```

Cette route crée automatiquement 3 slides de démonstration :
1. **FIMA Couchage** - Literie premium
2. **FIMA Design** - Menuiserie & Ameublement  
3. **UNIVERS GLASS** - Vitrerie & Aluminium

### Méthode 2: Via le CMS

1. Accédez au CMS : cliquez sur "Administration CMS" dans le footer
2. Naviguez vers "Hero Slides" dans le menu de gauche
3. Cliquez sur "Ajouter un slide"
4. Remplissez les informations :
   - **Onglet Contenu** : Textes FR et EN
   - **Onglet Média** : Image de fond ou vidéo
   - **Onglet Paramètres** : Durée, ordre, statut
5. Cliquez sur "Enregistrer"

## 📊 Structure des données

### Format des slides dans le KV Store

```json
{
  "id": "uuid",
  "sort_order": 1,
  "background_image_url": "https://...",
  "is_video": false,
  "video_url": null,
  "slide_duration": 5000,
  "video_play_duration": null,
  "video_loop": true,
  "is_active": true,
  "translations": {
    "fr": {
      "title": "FIMA Couchage",
      "subtitle": "LITERIE PREMIUM",
      "description": "Matelas, sommiers, oreillers...",
      "cta_primary": "Découvrir nos produits",
      "badge": "100 NUITS D'ESSAI"
    },
    "en": {
      "title": "FIMA Bedding",
      "subtitle": "PREMIUM BEDDING",
      "description": "High-quality mattresses...",
      "cta_primary": "Discover our products",
      "badge": "100-NIGHT TRIAL"
    }
  },
  "created_at": "2025-01-08T10:00:00.000Z",
  "updated_at": "2025-01-08T10:00:00.000Z"
}
```

### Clés KV Store

Les slides sont stockés avec le préfixe : `hero-slides:{uuid}`

Exemple : `hero-slides:550e8400-e29b-41d4-a716-446655440000`

## 🔧 Configuration des slides

### Paramètres disponibles

- **sort_order** : Ordre d'affichage (1, 2, 3...)
- **slide_duration** : Durée d'affichage en millisecondes (défaut: 5000ms)
- **is_video** : true si le slide contient une vidéo
- **video_url** : URL de la vidéo (si is_video = true)
- **video_play_duration** : Durée de lecture de la vidéo en ms
- **video_loop** : true pour lecture en boucle
- **is_active** : true pour afficher le slide

### Recommandations

- **Images** : Utilisez des images haute qualité (min 1920x1080px)
- **Vidéos** : Format MP4, max 30MB pour de bonnes performances
- **Durée** : 5-7 secondes par slide pour une expérience optimale
- **Nombre** : 3-5 slides maximum pour éviter la fatigue visuelle

## ✅ Vérification

### Tester le frontend

1. Actualisez la page d'accueil
2. Le Hero doit afficher les slides avec animation automatique
3. Les boutons Prev/Next doivent fonctionner
4. Le changement de langue (FR/EN) doit mettre à jour les textes

### Tester le CMS

1. Accédez au CMS
2. Naviguez vers "Hero Slides"
3. Vous devez voir la liste des slides avec :
   - Prévisualisation de l'image/vidéo
   - Statut (Actif/Inactif)
   - Titre et sous-titre
   - Boutons Modifier/Supprimer

## 🐛 Dépannage

### Les slides ne s'affichent pas

1. Vérifiez que les slides sont initialisés :
   ```bash
   curl -X GET "https://{projectId}.supabase.co/functions/v1/make-server-98c6ec1c/api/hero-slides?locale=fr" \
     -H "Authorization: Bearer {publicAnonKey}"
   ```

2. Vérifiez la console du navigateur pour des erreurs

3. Vérifiez que `is_active: true` pour les slides

### Les images ne se chargent pas

1. Vérifiez que les URLs sont valides et accessibles
2. Vérifiez les CORS si les images viennent d'un domaine externe
3. Utilisez des images Unsplash ou hébergées sur Supabase Storage

### Les traductions ne s'affichent pas

1. Vérifiez que les objets `translations.fr` et `translations.en` existent
2. Vérifiez que le hook `useLanguage()` fonctionne correctement
3. Vérifiez la console pour des erreurs de traduction

## 📝 Notes

- Les slides sont stockés dans le KV Store Supabase
- Le préfixe `hero-slides:` permet de filtrer facilement
- La route GET filtre automatiquement par `is_active: true`
- Les slides sont triés par `sort_order` croissant
- Les traductions sont sélectionnées selon la locale demandée