# Guide d'implémentation Strapi pour FIMA E-commerce

Ce guide explique comment configurer un vrai backend Strapi pour remplacer l'API simulée.

## 🚀 Installation de Strapi

### 1. Créer un nouveau projet Strapi

```bash
npx create-strapi-app@latest fima-backend --quickstart
cd fima-backend
npm run develop
```

### 2. Configuration initiale

- Créer un compte administrateur sur http://localhost:1337/admin
- Installer les plugins nécessaires :

```bash
npm install @strapi/plugin-upload
npm install @strapi/plugin-users-permissions
npm install @strapi/plugin-i18n
```

## 📋 Modèles de contenu (Content Types)

### 1. Category (Collection Type)

```json
{
  "name": {
    "type": "string",
    "required": true,
    "unique": true
  },
  "slug": {
    "type": "uid",
    "targetField": "name",
    "required": true
  },
  "description": {
    "type": "text"
  },
  "icon": {
    "type": "string",
    "required": true
  },
  "featured": {
    "type": "boolean",
    "default": false
  }
}
```

### 2. Product (Collection Type)

```json
{
  "title": {
    "type": "string",
    "required": true
  },
  "slug": {
    "type": "uid",
    "targetField": "title",
    "required": true
  },
  "description": {
    "type": "richtext",
    "required": true
  },
  "shortDescription": {
    "type": "text"
  },
  "price": {
    "type": "decimal",
    "required": true
  },
  "originalPrice": {
    "type": "decimal"
  },
  "discount": {
    "type": "integer"
  },
  "sku": {
    "type": "string",
    "required": true,
    "unique": true
  },
  "stock": {
    "type": "integer",
    "default": 0
  },
  "featured": {
    "type": "boolean",
    "default": false
  },
  "bestSeller": {
    "type": "boolean",
    "default": false
  },
  "new": {
    "type": "boolean",
    "default": false
  },
  "rating": {
    "type": "decimal",
    "default": 0
  },
  "reviewsCount": {
    "type": "integer",
    "default": 0
  },
  "specifications": {
    "type": "json"
  },
  "sizes": {
    "type": "json"
  },
  "image": {
    "type": "media",
    "multiple": false,
    "required": true,
    "allowedTypes": ["images"]
  },
  "gallery": {
    "type": "media",
    "multiple": true,
    "allowedTypes": ["images"]
  },
  "category": {
    "type": "relation",
    "relation": "manyToOne",
    "target": "api::category.category",
    "inversedBy": "products"
  }
}
```

### 3. Testimonial (Collection Type)

```json
{
  "name": {
    "type": "string",
    "required": true
  },
  "location": {
    "type": "string",
    "required": true
  },
  "avatar": {
    "type": "string",
    "required": true
  },
  "rating": {
    "type": "integer",
    "min": 1,
    "max": 5,
    "required": true
  },
  "content": {
    "type": "text",
    "required": true
  },
  "productName": {
    "type": "string",
    "required": true
  },
  "verified": {
    "type": "boolean",
    "default": false
  },
  "product": {
    "type": "relation",
    "relation": "manyToOne",
    "target": "api::product.product"
  }
}
```

### 4. Video (Collection Type)

```json
{
  "title": {
    "type": "string",
    "required": true
  },
  "description": {
    "type": "text"
  },
  "duration": {
    "type": "string",
    "required": true
  },
  "videoId": {
    "type": "string"
  },
  "provider": {
    "type": "enumeration",
    "enum": ["youtube", "vimeo", "local"],
    "default": "local"
  },
  "featured": {
    "type": "boolean",
    "default": false
  },
  "thumbnail": {
    "type": "media",
    "multiple": false,
    "required": true,
    "allowedTypes": ["images"]
  },
  "video": {
    "type": "media",
    "multiple": false,
    "allowedTypes": ["videos"]
  }
}
```

### 5. Hero Slide (Collection Type)

```json
{
  "title": {
    "type": "string",
    "required": true
  },
  "subtitle": {
    "type": "string"
  },
  "description": {
    "type": "text",
    "required": true
  },
  "ctaPrimary": {
    "type": "string",
    "required": true
  },
  "ctaSecondary": {
    "type": "string"
  },
  "badge": {
    "type": "string"
  },
  "order": {
    "type": "integer",
    "required": true
  },
  "active": {
    "type": "boolean",
    "default": true
  },
  "image": {
    "type": "media",
    "multiple": false,
    "required": true,
    "allowedTypes": ["images"]
  }
}
```

### 6. Order (Collection Type)

```json
{
  "orderNumber": {
    "type": "string",
    "required": true,
    "unique": true
  },
  "status": {
    "type": "enumeration",
    "enum": ["pending", "confirmed", "processing", "shipped", "delivered", "cancelled"],
    "default": "pending"
  },
  "totalAmount": {
    "type": "decimal",
    "required": true
  },
  "shippingCost": {
    "type": "decimal",
    "default": 0
  },
  "currency": {
    "type": "string",
    "default": "EUR"
  },
  "customerInfo": {
    "type": "json",
    "required": true
  },
  "shippingAddress": {
    "type": "json",
    "required": true
  },
  "billingAddress": {
    "type": "json",
    "required": true
  },
  "items": {
    "type": "json",
    "required": true
  },
  "paymentMethod": {
    "type": "string"
  },
  "paymentStatus": {
    "type": "enumeration",
    "enum": ["pending", "paid", "failed", "refunded"],
    "default": "pending"
  },
  "notes": {
    "type": "text"
  }
}
```

### 7. Company Info (Single Type)

```json
{
  "name": {
    "type": "string",
    "required": true
  },
  "description": {
    "type": "richtext"
  },
  "email": {
    "type": "email",
    "required": true
  },
  "phone": {
    "type": "string",
    "required": true
  },
  "address": {
    "type": "richtext",
    "required": true
  },
  "socialMedia": {
    "type": "json"
  },
  "businessHours": {
    "type": "json"
  }
}
```

## 🔧 Configuration API

### 1. Permissions et rôles

Dans l'interface d'administration Strapi :

**Public (non authentifié) :**
- `find` et `findOne` pour : Product, Category, Testimonial, Video, Hero Slide, Company Info
- `create` pour : Order

**Authenticated (utilisateurs connectés) :**
- Toutes les permissions Public +
- `update` pour : Order (leurs propres commandes)

### 2. Variables d'environnement

Créer un fichier `.env` :

```bash
# Database
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_NAME=fima_strapi
DATABASE_USERNAME=postgres
DATABASE_PASSWORD=your_password
DATABASE_SSL=false

# Strapi
HOST=0.0.0.0
PORT=1337
APP_KEYS=your_app_keys
API_TOKEN_SALT=your_api_token_salt
ADMIN_JWT_SECRET=your_admin_jwt_secret
JWT_SECRET=your_jwt_secret

# Upload (Cloudinary recommended for production)
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_KEY=your_cloudinary_key
CLOUDINARY_SECRET=your_cloudinary_secret

# Email (for notifications)
EMAIL_PROVIDER=nodemailer
EMAIL_PROVIDER_OPTIONS={"service":"gmail","auth":{"user":"your_email","pass":"your_password"}}
```

### 3. Configuration Cloudinary pour les médias

Installer le plugin Cloudinary :

```bash
npm install @strapi/provider-upload-cloudinary
```

Configurer dans `config/plugins.js` :

```javascript
module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME'),
        api_key: env('CLOUDINARY_KEY'),
        api_secret: env('CLOUDINARY_SECRET'),
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
});
```

## 🔗 Intégration Frontend

### 1. Remplacer l'API simulée

Dans `/services/strapiApi.ts`, décommenter les vraies méthodes API et configurer :

```typescript
const API_BASE_URL = 'http://localhost:1337/api'; // URL de votre Strapi
const API_TOKEN = process.env.NEXT_PUBLIC_STRAPI_TOKEN; // Token API
```

### 2. Variables d'environnement Frontend

Créer un fichier `.env.local` dans votre projet React :

```bash
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
NEXT_PUBLIC_STRAPI_TOKEN=your_api_token
```

### 3. Middleware Strapi

Créer un middleware pour gérer les erreurs et l'authentification :

```typescript
// services/strapiMiddleware.ts
export const strapiErrorHandler = (error: any) => {
  if (error.response?.status === 401) {
    // Rediriger vers la page de connexion
    window.location.href = '/login';
  }
  return Promise.reject(error);
};
```

## 🚀 Déploiement

### 1. Production Strapi

Options recommandées :
- **Heroku** : Simple et rapide
- **DigitalOcean** : Plus de contrôle
- **AWS** : Pour les grandes applications
- **Strapi Cloud** : Solution officielle

### 2. Base de données

Recommandé pour la production :
- **PostgreSQL** sur Heroku Postgres
- **MySQL** sur PlanetScale
- **MongoDB** sur MongoDB Atlas

### 3. Stockage des médias

- **Cloudinary** : Recommandé (CDN intégré)
- **AWS S3** : Pour plus de contrôle
- **DigitalOcean Spaces** : Alternative économique

## 📊 Sécurité et optimisation

### 1. Sécurité

```javascript
// config/middlewares.js
module.exports = [
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': ["'self'", 'data:', 'blob:', 'res.cloudinary.com'],
          'media-src': ["'self'", 'data:', 'blob:', 'res.cloudinary.com'],
        },
      },
    },
  },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
```

### 2. Performance

- Activer la cache avec Redis
- Utiliser un CDN pour les images
- Optimiser les requêtes avec `populate`
- Implémenter la pagination

### 3. Monitoring

- Configurer les logs avec Winston
- Utiliser PM2 pour la gestion des processus
- Monitorer avec des outils comme DataDog ou New Relic

## 🔄 Migration des données

Pour migrer les données mockées vers Strapi, créer un script de migration :

```javascript
// scripts/migrate-data.js
const axios = require('axios');
const fs = require('fs');

const STRAPI_URL = 'http://localhost:1337/api';
const API_TOKEN = 'your_api_token';

async function migrateProducts() {
  const mockProducts = JSON.parse(fs.readFileSync('./mockData.json'));
  
  for (const product of mockProducts.products) {
    try {
      await axios.post(`${STRAPI_URL}/products`, {
        data: product
      }, {
        headers: {
          'Authorization': `Bearer ${API_TOKEN}`,
          'Content-Type': 'application/json'
        }
      });
      console.log(`✅ Produit migré: ${product.title}`);
    } catch (error) {
      console.error(`❌ Erreur migration: ${product.title}`, error.message);
    }
  }
}

migrateProducts();
```

## 📚 Ressources

- [Documentation officielle Strapi](https://docs.strapi.io/)
- [API REST Strapi](https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/rest-api.html)
- [Strapi Cloud](https://cloud.strapi.io/)
- [Plugins Strapi](https://market.strapi.io/)

Cette structure vous donne une base solide pour créer un vrai backend Strapi qui remplacera parfaitement l'API simulée de votre application FIMA.