# 🚀 Initialiser le Hero MAINTENANT

## Commande d'initialisation

Copiez et exécutez cette commande dans votre terminal (remplacez les valeurs entre accolades) :

```bash
curl -X POST https://{VOTRE_PROJECT_ID}.supabase.co/functions/v1/make-server-98c6ec1c/api/init-hero-slides \
  -H "Authorization: Bearer {VOTRE_PUBLIC_ANON_KEY}"
```

## Où trouver vos identifiants ?

Les identifiants sont dans : `/utils/supabase/info.tsx`

```typescript
export const projectId = 'votre-project-id'
export const publicAnonKey = 'votre-anon-key'
```

## Exemple de commande complète

```bash
curl -X POST https://abcdefghijklmnop.supabase.co/functions/v1/make-server-98c6ec1c/api/init-hero-slides \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
```

## Réponse attendue

```json
{
  "success": true,
  "message": "Hero slides initialized successfully",
  "data": {
    "slides_created": 3,
    "slide_ids": ["uuid1", "uuid2", "uuid3"]
  }
}
```

## Vérification

Après l'initialisation, vérifiez que les slides sont créés :

```bash
curl -X GET "https://{VOTRE_PROJECT_ID}.supabase.co/functions/v1/make-server-98c6ec1c/api/hero-slides?locale=fr" \
  -H "Authorization: Bearer {VOTRE_PUBLIC_ANON_KEY}"
```

Vous devriez voir 3 slides :
1. **FIMA Couchage** - Literie Premium
2. **FIMA Design** - Menuiserie & Ameublement
3. **UNIVERS GLASS** - Vitrerie & Aluminium

## Que faire ensuite ?

1. ✅ Actualisez la page d'accueil → Le Hero doit afficher les 3 slides
2. ✅ Accédez au CMS → Menu "Hero Slides" → Vous devez voir les 3 slides
3. ✅ Testez la modification d'un slide dans le CMS
4. ✅ Testez le changement de langue (FR/EN)

## En cas de problème

Si vous avez une erreur, vérifiez :
- [ ] Les identifiants sont corrects
- [ ] Le serveur Supabase est en cours d'exécution
- [ ] Pas de problème CORS
- [ ] La console du navigateur pour des erreurs détaillées

Pour plus de détails, consultez `/docs/HERO_CONNEXION_SUPABASE_COMPLETE.md`