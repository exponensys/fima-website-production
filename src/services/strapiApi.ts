import {
  StrapiProduct,
  StrapiCategory,
  StrapiTestimonial,
  StrapiVideo,
  StrapiHeroSlide,
  StrapiCompanyInfo,
  StrapiOrder,
  StrapiResponse,
  StrapiCollectionResponse,
  StrapiQueryParams
} from '../types/strapi';

// Configuration API simulée
const API_BASE_URL = 'https://strapi.fima.com/api'; // URL de votre vrai Strapi
const API_TOKEN = 'your-strapi-api-token'; // Token d'authentification

class StrapiApiService {
  private baseUrl: string;
  private headers: HeadersInit;

  constructor() {
    this.baseUrl = API_BASE_URL;
    this.headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${API_TOKEN}`
    };
  }

  // Simulation de délai réseau
  private async delay(ms: number = 300): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  // Utilitaire pour construire les paramètres de requête
  private buildQueryString(params: StrapiQueryParams): string {
    const searchParams = new URLSearchParams();

    if (params.populate) {
      const populate = Array.isArray(params.populate) 
        ? params.populate.join(',') 
        : params.populate;
      searchParams.append('populate', populate);
    }

    if (params.filters) {
      Object.entries(params.filters).forEach(([key, value]) => {
        if (typeof value === 'object' && value !== null) {
          Object.entries(value).forEach(([subKey, subValue]) => {
            searchParams.append(`filters[${key}][${subKey}]`, subValue as string);
          });
        } else {
          searchParams.append(`filters[${key}]`, value as string);
        }
      });
    }

    if (params.sort) {
      const sort = Array.isArray(params.sort) ? params.sort.join(',') : params.sort;
      searchParams.append('sort', sort);
    }

    if (params.pagination) {
      Object.entries(params.pagination).forEach(([key, value]) => {
        if (value !== undefined) {
          searchParams.append(`pagination[${key}]`, value.toString());
        }
      });
    }

    if (params.fields) {
      searchParams.append('fields', params.fields.join(','));
    }

    if (params.locale) {
      searchParams.append('locale', params.locale);
    }

    return searchParams.toString();
  }

  // DONNÉES SIMULÉES (à remplacer par de vrais appels API)
  private mockData = {
    categories: [
      {
        id: 1,
        attributes: {
          name: 'Matelas',
          slug: 'matelas',
          description: 'Matelas de qualité premium pour un sommeil optimal',
          icon: '🛏️',
          featured: true,
          createdAt: '2024-01-01T00:00:00.000Z',
          updatedAt: '2024-01-01T00:00:00.000Z',
          publishedAt: '2024-01-01T00:00:00.000Z'
        }
      },
      {
        id: 2,
        attributes: {
          name: 'Sommiers',
          slug: 'sommiers',
          description: 'Sommiers robustes et élégants',
          icon: '🏠',
          featured: true,
          createdAt: '2024-01-01T00:00:00.000Z',
          updatedAt: '2024-01-01T00:00:00.000Z',
          publishedAt: '2024-01-01T00:00:00.000Z'
        }
      },
      {
        id: 3,
        attributes: {
          name: 'Oreillers',
          slug: 'oreillers',
          description: 'Oreillers ergonomiques pour tous les dormeurs',
          icon: '💤',
          featured: true,
          createdAt: '2024-01-01T00:00:00.000Z',
          updatedAt: '2024-01-01T00:00:00.000Z',
          publishedAt: '2024-01-01T00:00:00.000Z'
        }
      },
      {
        id: 4,
        attributes: {
          name: 'Linge de lit',
          slug: 'linge-de-lit',
          description: 'Linge de lit de luxe en matières naturelles',
          icon: '🌿',
          featured: true,
          createdAt: '2024-01-01T00:00:00.000Z',
          updatedAt: '2024-01-01T00:00:00.000Z',
          publishedAt: '2024-01-01T00:00:00.000Z'
        }
      },
      {
        id: 5,
        attributes: {
          name: 'Accessoires',
          slug: 'accessoires',
          description: 'Accessoires pour optimiser votre sommeil',
          icon: '✨',
          featured: true,
          createdAt: '2024-01-01T00:00:00.000Z',
          updatedAt: '2024-01-01T00:00:00.000Z',
          publishedAt: '2024-01-01T00:00:00.000Z'
        }
      }
    ],

    products: [
      // === MATELAS ===
      {
        id: 1,
        attributes: {
          title: 'Matelas Confort Premium',
          slug: 'matelas-confort-premium',
          description: 'Matelas ressorts ensachés 7 zones de confort, soutien ferme, garnissage naturel. Technologie avancée pour un sommeil réparateur avec excellente aération et durabilité exceptionnelle.',
          shortDescription: 'Matelas ressorts ensachés 7 zones de confort',
          price: 489,
          originalPrice: 599,
          discount: 18,
          sku: 'MAT-PREM-001',
          stock: 25,
          featured: true,
          bestSeller: true,
          new: false,
          rating: 4.4,
          reviewsCount: 17315,
          specifications: {
            firmness: 'Medium-Firm',
            thickness: '25cm',
            materials: ['Ressorts ensachés', 'Mousse mémoire', 'Coton bio'],
            warranty: '10 ans',
            trialPeriod: '14 nuits'
          },
          sizes: [
            { name: 'Single', price: 489, originalPrice: 599, dimensions: '90x200cm', available: true },
            { name: 'Queen', price: 629, originalPrice: 799, dimensions: '160x200cm', available: true },
            { name: 'King', price: 759, originalPrice: 899, dimensions: '180x200cm', available: true },
            { name: 'California King', price: 859, originalPrice: 999, dimensions: '180x210cm', available: true }
          ],
          colors: [
            { 
              name: 'Blanc Écru', 
              hex: '#F5F5DC',
              image: 'https://images.unsplash.com/photo-1648634158203-199accfd7afc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtYXR0cmVzcyUyMGJlZHJvb218ZW58MXx8fHwxNzU1NjQyNDUwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
            },
            { 
              name: 'Gris Anthracite', 
              hex: '#2F4F4F',
              image: 'https://images.unsplash.com/photo-1691703028663-c5ff8cbb07c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW1vcnklMjBmb2FtJTIwbWF0dHJlc3N8ZW58MXx8fHwxNzU1NjEwOTI1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
            }
          ],
          createdAt: '2024-01-01T00:00:00.000Z',
          updatedAt: '2024-01-01T00:00:00.000Z',
          publishedAt: '2024-01-01T00:00:00.000Z',
          image: {
            data: {
              id: 1,
              attributes: {
                name: 'matelas-premium.jpg',
                alternativeText: 'Matelas Confort Premium',
                caption: '',
                width: 1080,
                height: 1080,
                url: 'https://images.unsplash.com/photo-1648634158203-199accfd7afc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtYXR0cmVzcyUyMGJlZHJvb218ZW58MXx8fHwxNzU1NjQyNDUwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
                hash: 'matelas_premium_hash',
                ext: '.jpg',
                mime: 'image/jpeg',
                size: 245.6,
                provider: 'cloudinary',
                createdAt: '2024-01-01T00:00:00.000Z',
                updatedAt: '2024-01-01T00:00:00.000Z'
              }
            }
          },
          category: {
            data: {
              id: 1,
              attributes: {
                name: 'Matelas',
                slug: 'matelas',
                description: 'Matelas de qualité premium',
                icon: '🛏️',
                featured: true,
                createdAt: '2024-01-01T00:00:00.000Z',
                updatedAt: '2024-01-01T00:00:00.000Z',
                publishedAt: '2024-01-01T00:00:00.000Z'
              }
            }
          }
        }
      },
      {
        id: 2,
        attributes: {
          title: 'Matelas Mémoire de Forme Luxe',
          slug: 'matelas-memoire-forme-luxe',
          description: 'Matelas 100% mousse mémoire de forme avec technologie de refroidissement gel-infusé. Épouse parfaitement les contours du corps pour un soutien personnalisé optimal.',
          shortDescription: 'Matelas mousse mémoire avec gel refroidissant',
          price: 699,
          originalPrice: 899,
          discount: 22,
          sku: 'MAT-MEM-002',
          stock: 18,
          featured: true,
          bestSeller: false,
          new: true,
          rating: 4.6,
          reviewsCount: 8942,
          specifications: {
            firmness: 'Medium',
            thickness: '28cm',
            materials: ['Mousse mémoire gel', 'Mousse haute densité', 'Housse bambou'],
            warranty: '15 ans',
            trialPeriod: '14 nuits'
          },
          sizes: [
            { name: 'Single', price: 699, originalPrice: 899, dimensions: '90x200cm', available: true },
            { name: 'Queen', price: 849, originalPrice: 1099, dimensions: '160x200cm', available: true },
            { name: 'King', price: 999, originalPrice: 1299, dimensions: '180x200cm', available: true },
            { name: 'California King', price: 1149, originalPrice: 1499, dimensions: '180x210cm', available: true }
          ],
          createdAt: '2024-01-15T00:00:00.000Z',
          updatedAt: '2024-01-15T00:00:00.000Z',
          publishedAt: '2024-01-15T00:00:00.000Z',
          image: {
            data: {
              id: 2,
              attributes: {
                name: 'matelas-memoire.jpg',
                alternativeText: 'Matelas Mémoire de Forme Luxe',
                caption: '',
                width: 1080,
                height: 1080,
                url: 'https://images.unsplash.com/photo-1691703011149-5fc5a062319d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxsYXRleCUyMG1hdHRyZXNzJTIwbmF0dXJhbHxlbnwxfHx8fDE3NTU2NDI0NjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
                hash: 'matelas_memoire_hash',
                ext: '.jpg',
                mime: 'image/jpeg',
                size: 198.3,
                provider: 'cloudinary',
                createdAt: '2024-01-15T00:00:00.000Z',
                updatedAt: '2024-01-15T00:00:00.000Z'
              }
            }
          },
          category: {
            data: {
              id: 1,
              attributes: {
                name: 'Matelas',
                slug: 'matelas',
                description: 'Matelas de qualité premium',
                icon: '🛏️',
                featured: true,
                createdAt: '2024-01-01T00:00:00.000Z',
                updatedAt: '2024-01-01T00:00:00.000Z',
                publishedAt: '2024-01-01T00:00:00.000Z'
              }
            }
          }
        }
      },
      {
        id: 3,
        attributes: {
          title: 'Matelas Bio Natural',
          slug: 'matelas-bio-natural',
          description: 'Matelas écologique en latex naturel 100% biologique avec garnissage en fibres de coco et laine de mouton. Idéal pour les dormeurs sensibles aux allergies.',
          shortDescription: 'Matelas latex naturel 100% bio',
          price: 799,
          originalPrice: 999,
          discount: 20,
          sku: 'MAT-BIO-003',
          stock: 12,
          featured: false,
          bestSeller: false,
          new: true,
          rating: 4.5,
          reviewsCount: 3421,
          specifications: {
            firmness: 'Firm',
            thickness: '22cm',
            materials: ['Latex naturel', 'Fibres de coco', 'Laine de mouton'],
            warranty: '12 ans',
            trialPeriod: '14 nuits'
          },
          sizes: [
            { name: 'Single', price: 799, originalPrice: 999, dimensions: '90x200cm', available: true },
            { name: 'Queen', price: 949, originalPrice: 1199, dimensions: '160x200cm', available: true },
            { name: 'King', price: 1099, originalPrice: 1399, dimensions: '180x200cm', available: true },
            { name: 'California King', price: 1249, originalPrice: 1599, dimensions: '180x210cm', available: false }
          ],
          createdAt: '2024-02-01T00:00:00.000Z',
          updatedAt: '2024-02-01T00:00:00.000Z',
          publishedAt: '2024-02-01T00:00:00.000Z',
          image: {
            data: {
              id: 3,
              attributes: {
                name: 'matelas-bio.jpg',
                alternativeText: 'Matelas Bio Natural',
                caption: '',
                width: 1080,
                height: 1080,
                url: 'https://images.unsplash.com/photo-1691703028663-c5ff8cbb07c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW1vcnklMjBmb2FtJTIwbWF0dHJlc3N8ZW58MXx8fHwxNzU1NjEwOTI1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
                hash: 'matelas_bio_hash',
                ext: '.jpg',
                mime: 'image/jpeg',
                size: 167.8,
                provider: 'cloudinary',
                createdAt: '2024-02-01T00:00:00.000Z',
                updatedAt: '2024-02-01T00:00:00.000Z'
              }
            }
          },
          category: {
            data: {
              id: 1,
              attributes: {
                name: 'Matelas',
                slug: 'matelas',
                description: 'Matelas de qualité premium',
                icon: '🛏️',
                featured: true,
                createdAt: '2024-01-01T00:00:00.000Z',
                updatedAt: '2024-01-01T00:00:00.000Z',
                publishedAt: '2024-01-01T00:00:00.000Z'
              }
            }
          }
        }
      },

      // === SOMMIERS ===
      {
        id: 4,
        attributes: {
          title: 'Sommier Tapissier Prestige',
          slug: 'sommier-tapissier-prestige',
          description: 'Sommier tapissier haut de gamme avec suspension à ressorts biconiques. Structure en bois massif et tissu noble pour une élégance intemporelle et un soutien parfait.',
          shortDescription: 'Sommier tapissier à ressorts biconiques',
          price: 329,
          originalPrice: 429,
          discount: 23,
          sku: 'SOM-TAP-001',
          stock: 22,
          featured: true,
          bestSeller: true,
          new: false,
          rating: 4.3,
          reviewsCount: 5672,
          specifications: {
            firmness: 'Medium',
            thickness: '15cm',
            materials: ['Bois massif', 'Ressorts biconiques', 'Tissu noble'],
            warranty: '5 ans',
            trialPeriod: '30 nuits'
          },
          sizes: [
            { name: 'Single', price: 329, originalPrice: 429, dimensions: '90x200cm', available: true },
            { name: 'Queen', price: 429, originalPrice: 559, dimensions: '160x200cm', available: true },
            { name: 'King', price: 529, originalPrice: 689, dimensions: '180x200cm', available: true },
            { name: 'California King', price: 629, originalPrice: 819, dimensions: '180x210cm', available: true }
          ],
          colors: [
            { 
              name: 'Gris Perle', 
              hex: '#C0C0C0',
              image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWQlMjBmcmFtZSUyMHdvb2R8ZW58MXx8fHwxNzU1NjEwOTI1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
            },
            { 
              name: 'Beige Naturel', 
              hex: '#F5F5DC',
              image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZGp1c3RhYmxlJTIwYmVkfGVufDF8fHx8MTc1NTYxMDkyNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
            }
          ],
          createdAt: '2024-01-01T00:00:00.000Z',
          updatedAt: '2024-01-01T00:00:00.000Z',
          publishedAt: '2024-01-01T00:00:00.000Z',
          image: {
            data: {
              id: 4,
              attributes: {
                name: 'sommier-tapissier.jpg',
                alternativeText: 'Sommier Tapissier Prestige',
                caption: '',
                width: 1080,
                height: 1080,
                url: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWQlMjBmcmFtZSUyMHdvb2R8ZW58MXx8fHwxNzU1NjEwOTI1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
                hash: 'sommier_tapissier_hash',
                ext: '.jpg',
                mime: 'image/jpeg',
                size: 234.1,
                provider: 'cloudinary',
                createdAt: '2024-01-01T00:00:00.000Z',
                updatedAt: '2024-01-01T00:00:00.000Z'
              }
            }
          },
          category: {
            data: {
              id: 2,
              attributes: {
                name: 'Sommiers',
                slug: 'sommiers',
                description: 'Sommiers robustes et élégants',
                icon: '🏠',
                featured: true,
                createdAt: '2024-01-01T00:00:00.000Z',
                updatedAt: '2024-01-01T00:00:00.000Z',
                publishedAt: '2024-01-01T00:00:00.000Z'
              }
            }
          }
        }
      },
      {
        id: 5,
        attributes: {
          title: 'Sommier Électrique Relaxation',
          slug: 'sommier-electrique-relaxation',
          description: 'Sommier électrique de relaxation avec 2 moteurs silencieux. Position massage et relevage tête et pieds pour un confort personnalisé. Télécommande sans fil incluse.',
          shortDescription: 'Sommier électrique 2 moteurs avec massage',
          price: 899,
          originalPrice: 1199,
          discount: 25,
          sku: 'SOM-ELE-002',
          stock: 8,
          featured: true,
          bestSeller: false,
          new: true,
          rating: 4.7,
          reviewsCount: 1843,
          specifications: {
            firmness: 'Adjustable',
            thickness: '12cm',
            materials: ['Métal renforcé', 'Moteurs Okin', 'Lattes multiplis'],
            warranty: '3 ans',
            trialPeriod: '30 nuits'
          },
          sizes: [
            { name: 'Single', price: 899, originalPrice: 1199, dimensions: '90x200cm', available: true },
            { name: 'Queen', price: 1199, originalPrice: 1599, dimensions: '160x200cm', available: true },
            { name: 'King', price: 1499, originalPrice: 1999, dimensions: '180x200cm', available: true },
            { name: 'California King', price: 1699, originalPrice: 2299, dimensions: '180x210cm', available: false }
          ],
          createdAt: '2024-01-20T00:00:00.000Z',
          updatedAt: '2024-01-20T00:00:00.000Z',
          publishedAt: '2024-01-20T00:00:00.000Z',
          image: {
            data: {
              id: 5,
              attributes: {
                name: 'sommier-electrique.jpg',
                alternativeText: 'Sommier Électrique Relaxation',
                caption: '',
                width: 1080,
                height: 1080,
                url: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZGp1c3RhYmxlJTIwYmVkfGVufDF8fHx8MTc1NTYxMDkyNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
                hash: 'sommier_electrique_hash',
                ext: '.jpg',
                mime: 'image/jpeg',
                size: 198.7,
                provider: 'cloudinary',
                createdAt: '2024-01-20T00:00:00.000Z',
                updatedAt: '2024-01-20T00:00:00.000Z'
              }
            }
          },
          category: {
            data: {
              id: 2,
              attributes: {
                name: 'Sommiers',
                slug: 'sommiers',
                description: 'Sommiers robustes et élégants',
                icon: '🏠',
                featured: true,
                createdAt: '2024-01-01T00:00:00.000Z',
                updatedAt: '2024-01-01T00:00:00.000Z',
                publishedAt: '2024-01-01T00:00:00.000Z'
              }
            }
          }
        }
      },

      // === OREILLERS ===
      {
        id: 6,
        attributes: {
          title: 'Oreiller Ergonomique Mémoire',
          slug: 'oreiller-ergonomique-memoire',
          description: 'Oreiller ergonomique en mousse mémoire de forme avec double contour cervical. Maintien optimal de la nuque et des cervicales pour réduire les tensions et améliorer la qualité du sommeil.',
          shortDescription: 'Oreiller mémoire de forme double contour',
          price: 79,
          originalPrice: 99,
          discount: 20,
          sku: 'ORE-ERG-001',
          stock: 45,
          featured: true,
          bestSeller: true,
          new: false,
          rating: 4.4,
          reviewsCount: 12456,
          specifications: {
            firmness: 'Medium-Firm',
            thickness: '12cm',
            materials: ['Mousse mémoire', 'Housse bambou', 'Gel refroidissant'],
            warranty: '2 ans',
            trialPeriod: '30 nuits'
          },
          sizes: [
            { name: 'Standard', price: 79, originalPrice: 99, dimensions: '60x40cm', available: true }
          ],
          createdAt: '2024-01-01T00:00:00.000Z',
          updatedAt: '2024-01-01T00:00:00.000Z',
          publishedAt: '2024-01-01T00:00:00.000Z',
          image: {
            data: {
              id: 6,
              attributes: {
                name: 'oreiller-ergonomique.jpg',
                alternativeText: 'Oreiller Ergonomique Mémoire',
                caption: '',
                width: 1080,
                height: 1080,
                url: 'https://images.unsplash.com/photo-1586047844853-e2044ab00b8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaWxsb3clMjBtZW1vcnklMjBmb2FtfGVufDF8fHx8MTc1NTYxMDkyNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
                hash: 'oreiller_ergonomique_hash',
                ext: '.jpg',
                mime: 'image/jpeg',
                size: 123.4,
                provider: 'cloudinary',
                createdAt: '2024-01-01T00:00:00.000Z',
                updatedAt: '2024-01-01T00:00:00.000Z'
              }
            }
          },
          category: {
            data: {
              id: 3,
              attributes: {
                name: 'Oreillers',
                slug: 'oreillers',
                description: 'Oreillers ergonomiques pour tous les dormeurs',
                icon: '💤',
                featured: true,
                createdAt: '2024-01-01T00:00:00.000Z',
                updatedAt: '2024-01-01T00:00:00.000Z',
                publishedAt: '2024-01-01T00:00:00.000Z'
              }
            }
          }
        }
      },
      {
        id: 7,
        attributes: {
          title: 'Oreiller Duvet Premium',
          slug: 'oreiller-duvet-premium',
          description: 'Oreiller en duvet d\'oie 90% avec plumettes 10%. Gonflant exceptionnel et douceur incomparable. Enveloppe 100% coton percale 200 fils pour une respirabilité optimale.',
          shortDescription: 'Oreiller duvet d\'oie 90% premium',
          price: 129,
          originalPrice: 179,
          discount: 28,
          sku: 'ORE-DUV-002',
          stock: 32,
          featured: true,
          bestSeller: false,
          new: false,
          rating: 4.6,
          reviewsCount: 7891,
          specifications: {
            firmness: 'Soft',
            thickness: '15cm',
            materials: ['Duvet d\'oie 90%', 'Plumettes 10%', 'Coton percale'],
            warranty: '3 ans',
            trialPeriod: '30 nuits'
          },
          sizes: [
            { name: 'Standard', price: 129, originalPrice: 179, dimensions: '65x65cm', available: true },
            { name: 'King Size', price: 149, originalPrice: 199, dimensions: '50x70cm', available: true }
          ],
          createdAt: '2024-01-10T00:00:00.000Z',
          updatedAt: '2024-01-10T00:00:00.000Z',
          publishedAt: '2024-01-10T00:00:00.000Z',
          image: {
            data: {
              id: 7,
              attributes: {
                name: 'oreiller-duvet.jpg',
                alternativeText: 'Oreiller Duvet Premium',
                caption: '',
                width: 1080,
                height: 1080,
                url: 'https://images.unsplash.com/photo-1520637836862-4d197d17c50a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaWxsb3clMjBmbHVmZnl8ZW58MXx8fHwxNzU1NjEwOTI1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
                hash: 'oreiller_duvet_hash',
                ext: '.jpg',
                mime: 'image/jpeg',
                size: 156.2,
                provider: 'cloudinary',
                createdAt: '2024-01-10T00:00:00.000Z',
                updatedAt: '2024-01-10T00:00:00.000Z'
              }
            }
          },
          category: {
            data: {
              id: 3,
              attributes: {
                name: 'Oreillers',
                slug: 'oreillers',
                description: 'Oreillers ergonomiques pour tous les dormeurs',
                icon: '💤',
                featured: true,
                createdAt: '2024-01-01T00:00:00.000Z',
                updatedAt: '2024-01-01T00:00:00.000Z',
                publishedAt: '2024-01-01T00:00:00.000Z'
              }
            }
          }
        }
      },

      // === LINGE DE LIT ===
      {
        id: 8,
        attributes: {
          title: 'Parure Satin de Coton Luxe',
          slug: 'parure-satin-coton-luxe',
          description: 'Parure de lit en satin de coton 120 fils avec finition satinée brillante. Douceur soyeuse et élégance raffinée pour transformer votre chambre en suite présidentielle.',
          shortDescription: 'Parure satin de coton 120 fils',
          price: 149,
          originalPrice: 199,
          discount: 25,
          sku: 'LIN-SAT-001',
          stock: 28,
          featured: true,
          bestSeller: true,
          new: false,
          rating: 4.5,
          reviewsCount: 6734,
          specifications: {
            firmness: 'N/A',
            thickness: 'N/A',
            materials: ['Satin de coton 120 fils', 'Finition satinée'],
            warranty: '2 ans',
            trialPeriod: '30 nuits'
          },
          sizes: [
            { name: 'Queen', price: 149, originalPrice: 199, dimensions: '220x240cm', available: true },
            { name: 'King', price: 169, originalPrice: 229, dimensions: '240x260cm', available: true }
          ],
          colors: [
            { 
              name: 'Blanc Pur', 
              hex: '#FFFFFF',
              image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWQlMjBzaGVldHMlMjBzYXRpbnxlbnwxfHx8fDE3NTU2MTA5MjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
            },
            { 
              name: 'Gris Perle', 
              hex: '#E5E5E5',
              image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW1ib28lMjBiZWQlMjBzaGVldHN8ZW58MXx8fHwxNzU1NjEwOTI1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
            },
            { 
              name: 'Bleu Nuit', 
              hex: '#1E3A8A',
              image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWQlMjBzaGVldHMlMjBzYXRpbnxlbnwxfHx8fDE3NTU2MTA5MjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
            }
          ],
          createdAt: '2024-01-01T00:00:00.000Z',
          updatedAt: '2024-01-01T00:00:00.000Z',
          publishedAt: '2024-01-01T00:00:00.000Z',
          image: {
            data: {
              id: 8,
              attributes: {
                name: 'parure-satin.jpg',
                alternativeText: 'Parure Satin de Coton Luxe',
                caption: '',
                width: 1080,
                height: 1080,
                url: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWQlMjBzaGVldHMlMjBzYXRpbnxlbnwxfHx8fDE3NTU2MTA5MjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
                hash: 'parure_satin_hash',
                ext: '.jpg',
                mime: 'image/jpeg',
                size: 189.3,
                provider: 'cloudinary',
                createdAt: '2024-01-01T00:00:00.000Z',
                updatedAt: '2024-01-01T00:00:00.000Z'
              }
            }
          },
          category: {
            data: {
              id: 4,
              attributes: {
                name: 'Linge de lit',
                slug: 'linge-de-lit',
                description: 'Linge de lit de luxe en matières naturelles',
                icon: '🌿',
                featured: true,
                createdAt: '2024-01-01T00:00:00.000Z',
                updatedAt: '2024-01-01T00:00:00.000Z',
                publishedAt: '2024-01-01T00:00:00.000Z'
              }
            }
          }
        }
      },
      {
        id: 9,
        attributes: {
          title: 'Drap-Housse Bambou Bio',
          slug: 'drap-housse-bambou-bio',
          description: 'Drap-housse en fibres de bambou biologique ultra-douces et naturellement antibactériennes. Thermorégulateur pour un sommeil frais été comme hiver. Élastique renforcé.',
          shortDescription: 'Drap-housse bambou bio thermorégulateur',
          price: 59,
          originalPrice: 79,
          discount: 25,
          sku: 'LIN-BAM-002',
          stock: 67,
          featured: true,
          bestSeller: false,
          new: true,
          rating: 4.3,
          reviewsCount: 4521,
          specifications: {
            firmness: 'N/A',
            thickness: 'N/A',
            materials: ['Fibres bambou bio', 'Élastique renforcé'],
            warranty: '1 an',
            trialPeriod: '30 nuits'
          },
          sizes: [
            { name: 'Single', price: 59, originalPrice: 79, dimensions: '90x200cm', available: true },
            { name: 'Queen', price: 69, originalPrice: 89, dimensions: '160x200cm', available: true },
            { name: 'King', price: 79, originalPrice: 99, dimensions: '180x200cm', available: true }
          ],
          createdAt: '2024-02-05T00:00:00.000Z',
          updatedAt: '2024-02-05T00:00:00.000Z',
          publishedAt: '2024-02-05T00:00:00.000Z',
          image: {
            data: {
              id: 9,
              attributes: {
                name: 'drap-bambou.jpg',
                alternativeText: 'Drap-Housse Bambou Bio',
                caption: '',
                width: 1080,
                height: 1080,
                url: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW1ib28lMjBiZWQlMjBzaGVldHN8ZW58MXx8fHwxNzU1NjEwOTI1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
                hash: 'drap_bambou_hash',
                ext: '.jpg',
                mime: 'image/jpeg',
                size: 145.7,
                provider: 'cloudinary',
                createdAt: '2024-02-05T00:00:00.000Z',
                updatedAt: '2024-02-05T00:00:00.000Z'
              }
            }
          },
          category: {
            data: {
              id: 4,
              attributes: {
                name: 'Linge de lit',
                slug: 'linge-de-lit',
                description: 'Linge de lit de luxe en matières naturelles',
                icon: '🌿',
                featured: true,
                createdAt: '2024-01-01T00:00:00.000Z',
                updatedAt: '2024-01-01T00:00:00.000Z',
                publishedAt: '2024-01-01T00:00:00.000Z'
              }
            }
          }
        }
      },

      // === ACCESSOIRES ===
      {
        id: 10,
        attributes: {
          title: 'Surmatelas Rafraîchissant',
          slug: 'surmatelas-rafraichissant',
          description: 'Surmatelas avec technologie de refroidissement par gel et fibres thermorégulatrices. Améliore le confort de votre matelas existant tout en maintenant une température optimale.',
          shortDescription: 'Surmatelas gel refroidissant thermorégulateur',
          price: 199,
          originalPrice: 269,
          discount: 26,
          sku: 'ACC-SUR-001',
          stock: 19,
          featured: true,
          bestSeller: true,
          new: false,
          rating: 4.4,
          reviewsCount: 3672,
          specifications: {
            firmness: 'Medium',
            thickness: '5cm',
            materials: ['Gel refroidissant', 'Mousse mémoire', 'Fibres thermorégulatrices'],
            warranty: '3 ans',
            trialPeriod: '30 nuits'
          },
          sizes: [
            { name: 'Single', price: 199, originalPrice: 269, dimensions: '90x200cm', available: true },
            { name: 'Queen', price: 249, originalPrice: 339, dimensions: '160x200cm', available: true },
            { name: 'King', price: 299, originalPrice: 399, dimensions: '180x200cm', available: true }
          ],
          createdAt: '2024-01-01T00:00:00.000Z',
          updatedAt: '2024-01-01T00:00:00.000Z',
          publishedAt: '2024-01-01T00:00:00.000Z',
          image: {
            data: {
              id: 10,
              attributes: {
                name: 'surmatelas-gel.jpg',
                alternativeText: 'Surmatelas Rafraîchissant',
                caption: '',
                width: 1080,
                height: 1080,
                url: 'https://images.unsplash.com/photo-1586880244386-8b3345c9bca8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXR0cmVzcyUyMHRvcHBlcnxlbnwxfHx8fDE3NTU2MTA5MjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
                hash: 'surmatelas_gel_hash',
                ext: '.jpg',
                mime: 'image/jpeg',
                size: 176.4,
                provider: 'cloudinary',
                createdAt: '2024-01-01T00:00:00.000Z',
                updatedAt: '2024-01-01T00:00:00.000Z'
              }
            }
          },
          category: {
            data: {
              id: 5,
              attributes: {
                name: 'Accessoires',
                slug: 'accessoires',
                description: 'Accessoires pour optimiser votre sommeil',
                icon: '✨',
                featured: true,
                createdAt: '2024-01-01T00:00:00.000Z',
                updatedAt: '2024-01-01T00:00:00.000Z',
                publishedAt: '2024-01-01T00:00:00.000Z'
              }
            }
          }
        }
      },
      {
        id: 11,
        attributes: {
          title: 'Protège-Matelas Imperméable',
          slug: 'protege-matelas-impermeable',
          description: 'Protège-matelas imperméable et respirant avec membrane polyuréthane. Protection totale contre les liquides tout en laissant passer l\'air. Silencieux et ultra-confortable.',
          shortDescription: 'Protège-matelas imperméable et respirant',
          price: 45,
          originalPrice: 65,
          discount: 31,
          sku: 'ACC-PRO-002',
          stock: 88,
          featured: false,
          bestSeller: false,
          new: false,
          rating: 4.2,
          reviewsCount: 9834,
          specifications: {
            firmness: 'N/A',
            thickness: '0.5cm',
            materials: ['Membrane polyuréthane', 'Coton jersey', 'Élastique tour'],
            warranty: '2 ans',
            trialPeriod: '30 nuits'
          },
          sizes: [
            { name: 'Single', price: 45, originalPrice: 65, dimensions: '90x200cm', available: true },
            { name: 'Queen', price: 55, originalPrice: 75, dimensions: '160x200cm', available: true },
            { name: 'King', price: 65, originalPrice: 85, dimensions: '180x200cm', available: true }
          ],
          createdAt: '2024-01-15T00:00:00.000Z',
          updatedAt: '2024-01-15T00:00:00.000Z',
          publishedAt: '2024-01-15T00:00:00.000Z',
          image: {
            data: {
              id: 11,
              attributes: {
                name: 'protege-matelas.jpg',
                alternativeText: 'Protège-Matelas Imperméable',
                caption: '',
                width: 1080,
                height: 1080,
                url: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXR0cmVzcyUyMHByb3RlY3RvcnxlbnwxfHx8fDE3NTU2MTA5MjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
                hash: 'protege_matelas_hash',
                ext: '.jpg',
                mime: 'image/jpeg',
                size: 134.6,
                provider: 'cloudinary',
                createdAt: '2024-01-15T00:00:00.000Z',
                updatedAt: '2024-01-15T00:00:00.000Z'
              }
            }
          },
          category: {
            data: {
              id: 5,
              attributes: {
                name: 'Accessoires',
                slug: 'accessoires',
                description: 'Accessoires pour optimiser votre sommeil',
                icon: '✨',
                featured: true,
                createdAt: '2024-01-01T00:00:00.000Z',
                updatedAt: '2024-01-01T00:00:00.000Z',
                publishedAt: '2024-01-01T00:00:00.000Z'
              }
            }
          }
        }
      }
    ],

    testimonials: [
      {
        id: 1,
        attributes: {
          name: 'Marcus',
          location: 'Lyon, France',
          avatar: '👨‍💼',
          rating: 5,
          content: 'Vivant à Lyon avec des étés chauds, ce matelas est un must absolu. La sensation de fraîcheur et le toucher du matelas me donnent globalement le meilleur sommeil que j\'aie jamais eu.',
          productName: 'Matelas Confort Premium',
          verified: true,
          createdAt: '2024-01-01T00:00:00.000Z',
          updatedAt: '2024-01-01T00:00:00.000Z',
          publishedAt: '2024-01-01T00:00:00.000Z'
        }
      },
      {
        id: 2,
        attributes: {
          name: 'Sophie',
          location: 'Paris, France',
          avatar: '👩‍🦰',
          rating: 5,
          content: 'Le sommier électrique a changé ma vie ! Après des problèmes de dos, je peux enfin dormir confortablement. La position massage est un vrai plus.',
          productName: 'Sommier Électrique Relaxation',
          verified: true,
          createdAt: '2024-01-15T00:00:00.000Z',
          updatedAt: '2024-01-15T00:00:00.000Z',
          publishedAt: '2024-01-15T00:00:00.000Z'
        }
      },
      {
        id: 3,
        attributes: {
          name: 'Jean-Pierre',
          location: 'Marseille, France',
          avatar: '👨‍🦳',
          rating: 4,
          content: 'L\'oreiller ergonomique a résolu mes problèmes de cervicales. Maintien parfait et confort exceptionnel. Je le recommande à tous !',
          productName: 'Oreiller Ergonomique Mémoire',
          verified: true,
          createdAt: '2024-02-01T00:00:00.000Z',
          updatedAt: '2024-02-01T00:00:00.000Z',
          publishedAt: '2024-02-01T00:00:00.000Z'
        }
      }
    ],

    heroSlides: [
      {
        id: 1,
        attributes: {
          title: 'Des nuits de rêve vous attendent',
          subtitle: 'EXCELLENCE LITERIE',
          description: 'Découvrez notre gamme premium de matelas, oreillers et accessoires pour un sommeil réparateur.',
          ctaPrimary: 'Découvrir nos produits',
          ctaSecondary: 'Solutions B2B',
          badge: 'NOUVEAUTÉ',
          order: 1,
          active: true,
          createdAt: '2024-01-01T00:00:00.000Z',
          updatedAt: '2024-01-01T00:00:00.000Z',
          publishedAt: '2024-01-01T00:00:00.000Z',
          image: {
            data: {
              id: 1,
              attributes: {
                name: 'hero-slide-1.jpg',
                alternativeText: 'Hero slide 1',
                caption: '',
                width: 1080,
                height: 720,
                url: 'https://images.unsplash.com/photo-1648634158203-199accfd7afc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtYXR0cmVzcyUyMGJlZHJvb218ZW58MXx8fHwxNzU1NjQyNDUwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
                hash: 'hero_slide_1_hash',
                ext: '.jpg',
                mime: 'image/jpeg',
                size: 345.2,
                provider: 'cloudinary',
                createdAt: '2024-01-01T00:00:00.000Z',
                updatedAt: '2024-01-01T00:00:00.000Z'
              }
            }
          }
        }
      }
    ]
  };

  // MÉTHODES API

  // Récupérer tous les produits
  async getProducts(params: StrapiQueryParams = {}): Promise<StrapiCollectionResponse<StrapiProduct>> {
    await this.delay();
    
    let filteredProducts = [...this.mockData.products];
    
    // Appliquer les filtres
    if (params.filters) {
      if (params.filters.category?.slug?.$eq) {
        filteredProducts = filteredProducts.filter(
          p => p.attributes.category.data.attributes.slug === params.filters?.category?.slug?.$eq
        );
      }
      
      if (params.filters.featured !== undefined) {
        filteredProducts = filteredProducts.filter(
          p => p.attributes.featured === params.filters?.featured
        );
      }
      
      if (params.filters.bestSeller !== undefined) {
        filteredProducts = filteredProducts.filter(
          p => p.attributes.bestSeller === params.filters?.bestSeller
        );
      }

      if (params.filters.id?.$ne) {
        filteredProducts = filteredProducts.filter(
          p => p.id !== params.filters?.id?.$ne
        );
      }
    }
    
    // Appliquer le tri
    if (params.sort) {
      const sortField = Array.isArray(params.sort) ? params.sort[0] : params.sort;
      if (sortField === 'createdAt:desc') {
        filteredProducts.sort((a, b) => 
          new Date(b.attributes.createdAt).getTime() - new Date(a.attributes.createdAt).getTime()
        );
      } else if (sortField === 'featured:desc') {
        filteredProducts.sort((a, b) => {
          if (a.attributes.featured && !b.attributes.featured) return -1;
          if (!a.attributes.featured && b.attributes.featured) return 1;
          return 0;
        });
      } else if (sortField === 'price:asc') {
        filteredProducts.sort((a, b) => a.attributes.price - b.attributes.price);
      } else if (sortField === 'price:desc') {
        filteredProducts.sort((a, b) => b.attributes.price - a.attributes.price);
      }
    }
    
    // Pagination
    const page = params.pagination?.page || 1;
    const pageSize = params.pagination?.pageSize || 25;
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const paginatedProducts = filteredProducts.slice(startIndex, endIndex);
    
    return {
      data: paginatedProducts as StrapiProduct[],
      meta: {
        pagination: {
          page,
          pageSize,
          pageCount: Math.ceil(filteredProducts.length / pageSize),
          total: filteredProducts.length
        }
      }
    };
  }

  // Récupérer un produit par ID
  async getProduct(id: number, params: StrapiQueryParams = {}): Promise<StrapiResponse<StrapiProduct>> {
    await this.delay();
    
    const product = this.mockData.products.find(p => p.id === id);
    if (!product) {
      throw new Error(`Product with ID ${id} not found`);
    }

    return {
      data: product as StrapiProduct,
      meta: {}
    };
  }

  // Récupérer un produit par slug
  async getProductBySlug(slug: string, params: StrapiQueryParams = {}): Promise<StrapiResponse<StrapiProduct>> {
    await this.delay();
    
    const product = this.mockData.products.find(p => p.attributes.slug === slug);
    if (!product) {
      throw new Error(`Product with slug ${slug} not found`);
    }

    return {
      data: product as StrapiProduct,
      meta: {}
    };
  }

  // Récupérer les produits par catégorie
  async getProductsByCategory(categorySlug: string, params: StrapiQueryParams = {}): Promise<StrapiCollectionResponse<StrapiProduct>> {
    await this.delay();
    
    const filteredProducts = this.mockData.products.filter(
      p => p.attributes.category.data.attributes.slug === categorySlug
    );

    // Appliquer les paramètres de tri
    let sortedProducts = [...filteredProducts];
    if (params.sort) {
      const sortField = Array.isArray(params.sort) ? params.sort[0] : params.sort;
      if (sortField === 'featured:desc') {
        sortedProducts.sort((a, b) => {
          if (a.attributes.featured && !b.attributes.featured) return -1;
          if (!a.attributes.featured && b.attributes.featured) return 1;
          return 0;
        });
      }
    }

    return {
      data: sortedProducts as StrapiProduct[],
      meta: {
        pagination: {
          page: 1,
          pageSize: 25,
          pageCount: 1,
          total: sortedProducts.length
        }
      }
    };
  }

  // Récupérer toutes les catégories
  async getCategories(params: StrapiQueryParams = {}): Promise<StrapiCollectionResponse<StrapiCategory>> {
    await this.delay();
    
    let filteredCategories = [...this.mockData.categories];
    
    // Appliquer les filtres
    if (params.filters?.slug?.$eq) {
      filteredCategories = filteredCategories.filter(
        c => c.attributes.slug === params.filters?.slug?.$eq
      );
    }
    
    return {
      data: filteredCategories as StrapiCategory[],
      meta: {
        pagination: {
          page: 1,
          pageSize: 25,
          pageCount: 1,
          total: filteredCategories.length
        }
      }
    };
  }

  // Récupérer les témoignages
  async getTestimonials(params: StrapiQueryParams = {}): Promise<StrapiCollectionResponse<StrapiTestimonial>> {
    await this.delay();
    
    return {
      data: this.mockData.testimonials as StrapiTestimonial[],
      meta: {
        pagination: {
          page: 1,
          pageSize: 25,
          pageCount: 1,
          total: this.mockData.testimonials.length
        }
      }
    };
  }

  // Récupérer les slides du hero
  async getHeroSlides(params: StrapiQueryParams = {}): Promise<StrapiCollectionResponse<StrapiHeroSlide>> {
    await this.delay();
    
    return {
      data: this.mockData.heroSlides as StrapiHeroSlide[],
      meta: {
        pagination: {
          page: 1,
          pageSize: 25,
          pageCount: 1,
          total: this.mockData.heroSlides.length
        }
      }
    };
  }

  // Créer une commande
  async createOrder(orderData: Omit<StrapiOrder['attributes'], 'orderNumber' | 'createdAt' | 'updatedAt'>): Promise<StrapiResponse<StrapiOrder>> {
    await this.delay();
    
    const order: StrapiOrder = {
      id: Date.now(),
      attributes: {
        ...orderData,
        orderNumber: `FIMA-${Date.now()}`,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      }
    };

    return {
      data: order,
      meta: {}
    };
  }

  // Méthode générique pour faire des appels API réels (à utiliser avec un vrai Strapi)
  private async apiCall<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`;
    
    const response = await fetch(url, {
      ...options,
      headers: {
        ...this.headers,
        ...options.headers
      }
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }

    return response.json();
  }

  // Exemple d'implémentation avec de vrais appels API (décommenté quand vous avez un vrai Strapi)
  /*
  async getProducts(params: StrapiQueryParams = {}): Promise<StrapiCollectionResponse<StrapiProduct>> {
    const queryString = this.buildQueryString(params);
    const endpoint = `/products${queryString ? `?${queryString}` : ''}`;
    return this.apiCall<StrapiCollectionResponse<StrapiProduct>>(endpoint);
  }
  */
}

// Instance singleton
export const strapiApi = new StrapiApiService();