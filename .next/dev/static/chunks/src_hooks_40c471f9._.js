(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/hooks/useSiteSettings.ts [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCertifications",
    ()=>useCertifications,
    "useCompanyDescription",
    ()=>useCompanyDescription,
    "useContactInfo",
    ()=>useContactInfo,
    "useCurrencies",
    ()=>useCurrencies,
    "useLanguages",
    ()=>useLanguages,
    "useSiteSettings",
    ()=>useSiteSettings,
    "useSocialLinks",
    ()=>useSocialLinks
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/index.js [client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature(), _s5 = __turbopack_context__.k.signature(), _s6 = __turbopack_context__.k.signature();
;
// Données de fallback locales
const DEFAULT_SETTINGS = {
    languages: [
        {
            code: "FR",
            name: "Français",
            flag: "🇫🇷"
        },
        {
            code: "EN",
            name: "English",
            flag: "🇬🇧"
        }
    ],
    currencies: [
        {
            code: "XOF",
            symbol: "F CFA",
            name: "Franc CFA"
        },
        {
            code: "EUR",
            symbol: "€",
            name: "Euro"
        },
        {
            code: "USD",
            symbol: "$",
            name: "US Dollar"
        },
        {
            code: "GBP",
            symbol: "£",
            name: "British Pound"
        }
    ],
    company_description: "Leader dans la litterie, l'ameublement et la vitrerie depuis plus de 40 ans. FIMA accompagne les professionnels et les particuliers avec expertise et innovation.",
    certifications: [
        "Entreprise du Patrimoine Vivant",
        "Certifié ISO 9001"
    ],
    social_links: {
        facebook: "#",
        instagram: "#",
        linkedin: "#",
        twitter: "#"
    },
    contact_info: {
        email: "contact@fima.ci",
        phone: "+225 27 22 12 34 56",
        address: "Zone Industrielle, Abidjan, Côte d'Ivoire",
        hours: "Lun-Ven: 8h-18h, Sam: 9h-13h"
    }
};
const useSiteSettings = (key)=>{
    _s();
    const [settings, setSettings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(key ? DEFAULT_SETTINGS[key] : DEFAULT_SETTINGS);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useSiteSettings.useEffect": ()=>{
            // TOUJOURS utiliser les données locales (pas d'appel API)
            // Les données Supabase ne sont pas configurées, donc on utilise les fallbacks
            console.log('📊 useSiteSettings: Utilisation des données locales');
            if (key) {
                setSettings(DEFAULT_SETTINGS[key]);
            } else {
                setSettings(DEFAULT_SETTINGS);
            }
            setError(null);
            setLoading(false);
        }
    }["useSiteSettings.useEffect"], [
        key
    ]);
    return {
        settings,
        loading,
        error
    };
};
_s(useSiteSettings, "K3eR8mlxmHYT2jqqB9fG/8LjrL0=");
const useLanguages = ()=>{
    _s1();
    const { settings, loading, error } = useSiteSettings('languages');
    return {
        languages: settings,
        loading,
        error
    };
};
_s1(useLanguages, "qbtev1WphqyplhnHpRsXH9kvGTo=", false, function() {
    return [
        useSiteSettings
    ];
});
const useCurrencies = ()=>{
    _s2();
    const { settings, loading, error } = useSiteSettings('currencies');
    return {
        currencies: settings,
        loading,
        error
    };
};
_s2(useCurrencies, "qbtev1WphqyplhnHpRsXH9kvGTo=", false, function() {
    return [
        useSiteSettings
    ];
});
const useCompanyDescription = ()=>{
    _s3();
    const { settings, loading, error } = useSiteSettings('company_description');
    return {
        description: settings,
        loading,
        error
    };
};
_s3(useCompanyDescription, "qbtev1WphqyplhnHpRsXH9kvGTo=", false, function() {
    return [
        useSiteSettings
    ];
});
const useCertifications = ()=>{
    _s4();
    const { settings, loading, error } = useSiteSettings('certifications');
    return {
        certifications: settings,
        loading,
        error
    };
};
_s4(useCertifications, "qbtev1WphqyplhnHpRsXH9kvGTo=", false, function() {
    return [
        useSiteSettings
    ];
});
const useSocialLinks = ()=>{
    _s5();
    const { settings, loading, error } = useSiteSettings('social_links');
    return {
        socialLinks: settings,
        loading,
        error
    };
};
_s5(useSocialLinks, "qbtev1WphqyplhnHpRsXH9kvGTo=", false, function() {
    return [
        useSiteSettings
    ];
});
const useContactInfo = ()=>{
    _s6();
    const { settings, loading, error } = useSiteSettings('contact_info');
    return {
        contactInfo: settings,
        loading,
        error
    };
};
_s6(useContactInfo, "qbtev1WphqyplhnHpRsXH9kvGTo=", false, function() {
    return [
        useSiteSettings
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useProductCategories.ts [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DEFAULT_CATEGORIES",
    ()=>DEFAULT_CATEGORIES,
    "useProductCategories",
    ()=>useProductCategories
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$info$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/supabase/info.tsx [client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
// Mapper le business_unit du CMS vers le format utilisé dans l'app
const mapBusinessUnit = (unit)=>{
    switch(unit){
        case 'couchage':
            return 'fima-couchage';
        case 'design':
            return 'fima-design';
        case 'univers-glass':
            return 'univers-glass';
        default:
            return 'fima-design';
    }
};
// Données de fallback locales (utilisées uniquement si le CMS est vide)
const DEFAULT_CATEGORIES = {
    "fima-couchage": [
        {
            id: '1',
            key: "matelas",
            slug: "matelas",
            name: "Matelas",
            icon: "🛏️",
            description: "Ressorts, mousse, latex naturel",
            count: "45 modèles",
            business: "fima-couchage"
        },
        {
            id: '2',
            key: "sommiers",
            slug: "sommiers",
            name: "Sommiers",
            icon: "🏠",
            description: "Tapissiers, électriques, à lattes",
            count: "32 modèles",
            business: "fima-couchage"
        },
        {
            id: '3',
            key: "oreillers",
            slug: "oreillers",
            name: "Oreillers",
            icon: "💤",
            description: "Mémoire de forme, duvet, ergonomiques",
            count: "28 modèles",
            business: "fima-couchage"
        },
        {
            id: '4',
            key: "linge-de-lit",
            slug: "linge-de-lit",
            name: "Linge de lit",
            icon: "🌿",
            description: "Parures, draps, couettes",
            count: "150+ articles",
            business: "fima-couchage"
        },
        {
            id: '5',
            key: "accessoires-literie",
            slug: "accessoires-literie",
            name: "Accessoires",
            icon: "✨",
            description: "Protections, surmatelas, coussins",
            count: "45 articles",
            business: "fima-couchage"
        }
    ],
    "fima-design": [
        {
            id: '6',
            key: "habillement-mural",
            slug: "habillement-mural",
            name: "Habillage mural",
            icon: "🎨",
            description: "Revêtements et finitions",
            count: "45+ références",
            business: "fima-design"
        },
        {
            id: '7',
            key: "portes",
            slug: "portes",
            name: "Portes",
            icon: "🚪",
            description: "Portes intérieures et menuiserie",
            count: "50+ modèles",
            business: "fima-design"
        },
        {
            id: '8',
            key: "chambres",
            slug: "chambres",
            name: "Chambres",
            icon: "🛏️",
            description: "Mobilier pour chambres",
            count: "35+ modèles",
            business: "fima-design"
        },
        {
            id: '9',
            key: "cuisine",
            slug: "cuisine",
            name: "Cuisine",
            icon: "🍳",
            description: "Cuisines équipées modernes",
            count: "40+ modèles",
            business: "fima-design"
        },
        {
            id: '10',
            key: "dressing",
            slug: "dressing",
            name: "Dressing",
            icon: "👔",
            description: "Rangements sur mesure",
            count: "30+ modèles",
            business: "fima-design"
        },
        {
            id: '11',
            key: "amenagement-buanderie",
            slug: "amenagement-buanderie",
            name: "Aménagement buanderie",
            icon: "🧺",
            description: "Espaces optimisés pour buanderie",
            count: "12+ modèles",
            business: "fima-design"
        },
        {
            id: '12',
            key: "bureaux",
            slug: "bureaux",
            name: "Bureaux",
            icon: "🖥️",
            description: "Mobilier de bureau professionnel",
            count: "25+ modèles",
            business: "fima-design"
        },
        {
            id: '13',
            key: "salles-a-manger",
            slug: "salles-a-manger",
            name: "Salles à manger",
            icon: "🍽️",
            description: "Mobilier salle à manger",
            count: "28+ ensembles",
            business: "fima-design"
        },
        {
            id: '14',
            key: "salon",
            slug: "salon",
            name: "Salon",
            icon: "🛋️",
            description: "Mobilier de salon",
            count: "42+ modèles",
            business: "fima-design"
        }
    ],
    "univers-glass": [
        {
            id: '15',
            key: "vitrerie",
            slug: "vitrerie",
            name: "Vitrerie",
            icon: "🪟",
            description: "Vitres et miroirs",
            count: "50+ types",
            business: "univers-glass"
        },
        {
            id: '16',
            key: "menuiserie-aluminium",
            slug: "menuiserie-aluminium",
            name: "Menuiserie Aluminium",
            icon: "🔩",
            description: "Cadres et structures",
            count: "45+ profils",
            business: "univers-glass"
        },
        {
            id: '17',
            key: "fenetres",
            slug: "fenetres",
            name: "Fenêtres",
            icon: "🏠",
            description: "Fenêtres sur mesure",
            count: "60+ modèles",
            business: "univers-glass"
        },
        {
            id: '18',
            key: "portes-vitrees",
            slug: "portes-vitrees",
            name: "Portes vitrées",
            icon: "🚪",
            description: "Portes vitrées et alu",
            count: "55+ modèles",
            business: "univers-glass"
        },
        {
            id: '19',
            key: "cloisons",
            slug: "cloisons",
            name: "Cloisons",
            icon: "🧱",
            description: "Séparations d'espaces",
            count: "30+ solutions",
            business: "univers-glass"
        }
    ]
};
;
const useProductCategories = (business)=>{
    _s();
    const [categories, setCategories] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(null);
    console.log('🔧 useProductCategories - business param:', business);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useProductCategories.useEffect": ()=>{
            const fetchCategories = {
                "useProductCategories.useEffect.fetchCategories": async ()=>{
                    try {
                        setLoading(true);
                        setError(null);
                        // Charger les catégories CMS
                        const response = await fetch(`https://${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$info$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["projectId"]}.supabase.co/functions/v1/make-server-98c6ec1c/categories`, {
                            headers: {
                                'Authorization': `Bearer ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$info$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["publicAnonKey"]}`,
                                'Content-Type': 'application/json'
                            }
                        });
                        if (!response.ok) {
                            throw new Error(`HTTP error! status: ${response.status}`);
                        }
                        const result = await response.json();
                        if (result.success && result.data && result.data.length > 0) {
                            console.log('✅ useProductCategories: Catégories CMS chargées', result.data);
                            // Convertir les catégories CMS au format ProductCategory
                            const cmsCategories = result.data.filter({
                                "useProductCategories.useEffect.fetchCategories.cmsCategories": (cat)=>cat.is_active !== false
                            }["useProductCategories.useEffect.fetchCategories.cmsCategories"]).map({
                                "useProductCategories.useEffect.fetchCategories.cmsCategories": (cat)=>({
                                        id: cat.id,
                                        key: cat.slug,
                                        slug: cat.slug,
                                        name: cat.name,
                                        icon: cat.icon_emoji || '📦',
                                        description: cat.description || '',
                                        business: cat.business_unit === 'all' ? 'fima-design' : mapBusinessUnit(cat.business_unit),
                                        images: cat.images || [],
                                        thumbnail: cat.thumbnail || '',
                                        color: cat.color,
                                        order_index: cat.order_index,
                                        is_active: cat.is_active
                                    })
                            }["useProductCategories.useEffect.fetchCategories.cmsCategories"]).sort({
                                "useProductCategories.useEffect.fetchCategories.cmsCategories": (a, b)=>{
                                    // Trier par order_index (les catégories sans order_index vont à la fin)
                                    const orderA = a.order_index ?? 9999;
                                    const orderB = b.order_index ?? 9999;
                                    return orderA - orderB;
                                }
                            }["useProductCategories.useEffect.fetchCategories.cmsCategories"]);
                            // Organiser par business unit si pas de filtre, sinon filtrer
                            if (business) {
                                const filteredCategories = cmsCategories.filter({
                                    "useProductCategories.useEffect.fetchCategories.filteredCategories": (cat)=>cat.business === business
                                }["useProductCategories.useEffect.fetchCategories.filteredCategories"]);
                                console.log(`✅ Catégories filtrées pour ${business}:`, filteredCategories);
                                setCategories(filteredCategories);
                            } else {
                                // Grouper par business unit (les catégories sont déjà triées)
                                const grouped = {
                                    'fima-couchage': cmsCategories.filter({
                                        "useProductCategories.useEffect.fetchCategories": (cat)=>cat.business === 'fima-couchage'
                                    }["useProductCategories.useEffect.fetchCategories"]),
                                    'fima-design': cmsCategories.filter({
                                        "useProductCategories.useEffect.fetchCategories": (cat)=>cat.business === 'fima-design'
                                    }["useProductCategories.useEffect.fetchCategories"]),
                                    'univers-glass': cmsCategories.filter({
                                        "useProductCategories.useEffect.fetchCategories": (cat)=>cat.business === 'univers-glass'
                                    }["useProductCategories.useEffect.fetchCategories"])
                                };
                                console.log('✅ Catégories groupées par business:', grouped);
                                setCategories(grouped);
                            }
                            setError(null);
                        } else {
                            // Si aucune catégorie CMS, utiliser les fallbacks
                            console.log('⚠️ Aucune catégorie CMS trouvée, utilisation des données par défaut');
                            if (business) {
                                setCategories(DEFAULT_CATEGORIES[business]);
                            } else {
                                setCategories(DEFAULT_CATEGORIES);
                            }
                        }
                    } catch (err) {
                        console.log('⚠️ useProductCategories: Erreur lors du chargement des catégories CMS, utilisation des données locales', err instanceof Error ? err.message : err);
                        // En cas d'erreur, utiliser les données locales
                        if (business) {
                            setCategories(DEFAULT_CATEGORIES[business]);
                        } else {
                            setCategories(DEFAULT_CATEGORIES);
                        }
                        setError(null); // Ne pas considérer comme une erreur car le fallback fonctionne
                    } finally{
                        setLoading(false);
                    }
                }
            }["useProductCategories.useEffect.fetchCategories"];
            fetchCategories();
        }
    }["useProductCategories.useEffect"], [
        business
    ]);
    return {
        categories,
        loading,
        error
    };
};
_s(useProductCategories, "PEFWK5NudK8G7IEShrERrFoV+TY=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useSupabaseBusinessUnits.ts [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSupabaseBusinessUnits",
    ()=>useSupabaseBusinessUnits
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/index.js [client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
// Données de fallback locales
const DEFAULT_BUSINESS_UNITS = [
    {
        id: 'fima-couchage',
        slug: 'fima-couchage',
        name: 'FIMA Couchage',
        name_fr: 'FIMA Couchage',
        name_en: 'FIMA Bedding',
        description: 'Solutions complètes pour literie professionnelle et particuliers',
        description_fr: 'Solutions complètes pour literie professionnelle et particuliers',
        description_en: 'Complete solutions for professional and residential bedding',
        icon: 'Bed',
        primary_color: '#B5C233',
        order_index: 1,
        is_active: true
    },
    {
        id: 'fima-design',
        slug: 'fima-design',
        name: 'FIMA Design',
        name_fr: 'FIMA Design',
        name_en: 'FIMA Design',
        description: 'Menuiserie et ameublement sur mesure',
        description_fr: 'Menuiserie et ameublement sur mesure',
        description_en: 'Custom carpentry and furniture',
        icon: 'Armchair',
        primary_color: '#6E6E6E',
        order_index: 2,
        is_active: true
    },
    {
        id: 'univers-glass',
        slug: 'univers-glass',
        name: 'UNIVERS GLASS',
        name_fr: 'UNIVERS GLASS',
        name_en: 'UNIVERS GLASS',
        description: 'Vitrerie et menuiserie aluminium',
        description_fr: 'Vitrerie et menuiserie aluminium',
        description_en: 'Glazing and aluminum carpentry',
        icon: 'Building2',
        primary_color: '#0EA5E9',
        order_index: 3,
        is_active: true
    }
];
const useSupabaseBusinessUnits = ()=>{
    _s();
    const [businessUnits, setBusinessUnits] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(DEFAULT_BUSINESS_UNITS);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useSupabaseBusinessUnits.useEffect": ()=>{
            const fetchBusinessUnits = {
                "useSupabaseBusinessUnits.useEffect.fetchBusinessUnits": async ()=>{
                    try {
                        // ⚠️ API TEMPORAIREMENT DÉSACTIVÉE - Utilisation des données locales uniquement
                        // Pour éviter l'erreur 404 jusqu'au redéploiement du serveur
                        console.log('🏢 Business Units: Mode local (API désactivée)');
                        console.log('💡 Pour activer l\'API: redéployez avec "supabase functions deploy server"');
                        // Utiliser directement les données de fallback
                        setBusinessUnits(DEFAULT_BUSINESS_UNITS);
                        setError(null);
                        setLoading(false);
                    /* 
        ==========================================
        CODE API À DÉCOMMENTER APRÈS REDÉPLOIEMENT
        ==========================================
        
        console.log('🏢 useSupabaseBusinessUnits: Récupération depuis l\'API...');
        
        const response = await fetch(
          `https://${projectId}.supabase.co/functions/v1/make-server-98c6ec1c/business-units`,
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
            console.log('💡 SOLUTION: Redéployez le serveur Supabase avec: supabase functions deploy server');
            console.log('📦 Utilisation des données de fallback en attendant');
          }
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        
        if (result.success && result.data && result.data.length > 0) {
          console.log('✅ Business Units récupérés depuis Supabase:', result.data);
          
          const sortedUnits = result.data.sort((a: BusinessUnit, b: BusinessUnit) => {
            return (a.order_index || 0) - (b.order_index || 0);
          });
          
          const activeUnits = sortedUnits.filter((unit: BusinessUnit) => unit.is_active !== false);
          
          setBusinessUnits(activeUnits);
          setError(null);
        } else {
          console.log('⚠️ Aucune business unit Supabase, utilisation des données locales');
          setBusinessUnits(DEFAULT_BUSINESS_UNITS);
          setError(null);
        }
        
        ==========================================
        FIN DU CODE À DÉCOMMENTER
        ==========================================
        */ } catch (err) {
                        console.error('❌ Erreur API Business Units:', err instanceof Error ? err.message : 'Erreur inconnue');
                        setBusinessUnits(DEFAULT_BUSINESS_UNITS);
                        setError(null);
                    } finally{
                        setLoading(false);
                    }
                }
            }["useSupabaseBusinessUnits.useEffect.fetchBusinessUnits"];
            fetchBusinessUnits();
        }
    }["useSupabaseBusinessUnits.useEffect"], []);
    return {
        businessUnits,
        loading,
        error
    };
};
_s(useSupabaseBusinessUnits, "0GOxyaFm82Jzs0RNKwHHVe810Zk=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useCMSCategories.ts [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCMSCategories",
    ()=>useCMSCategories
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$info$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/supabase/info.tsx [client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
function useCMSCategories() {
    _s();
    const [categories, setCategories] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const fetchCategories = async ()=>{
        try {
            setLoading(true);
            const response = await fetch(`https://${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$info$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["projectId"]}.supabase.co/functions/v1/make-server-98c6ec1c/categories`, {
                headers: {
                    'Authorization': `Bearer ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$info$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["publicAnonKey"]}`,
                    'Content-Type': 'application/json'
                }
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const result = await response.json();
            if (result.success && result.data) {
                setCategories(result.data);
                setError(null);
            } else {
                setCategories([]);
            }
        } catch (err) {
            console.error('Erreur lors du chargement des catégories:', err);
            setError(err instanceof Error ? err.message : 'Erreur inconnue');
            setCategories([]);
        } finally{
            setLoading(false);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useCMSCategories.useEffect": ()=>{
            fetchCategories();
        }
    }["useCMSCategories.useEffect"], []);
    return {
        categories,
        loading,
        error,
        refetch: fetchCategories
    };
}
_s(useCMSCategories, "PEFWK5NudK8G7IEShrERrFoV+TY=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useStrapiData.ts [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCategories",
    ()=>useCategories,
    "useCreateOrder",
    ()=>useCreateOrder,
    "useHeroSlides",
    ()=>useHeroSlides,
    "usePaginatedProducts",
    ()=>usePaginatedProducts,
    "useProduct",
    ()=>useProduct,
    "useProductBySlug",
    ()=>useProductBySlug,
    "useProductSearch",
    ()=>useProductSearch,
    "useProducts",
    ()=>useProducts,
    "useProductsByCategory",
    ()=>useProductsByCategory,
    "useStrapiData",
    ()=>useStrapiData,
    "useStrapiMutation",
    ()=>useStrapiMutation,
    "useTestimonials",
    ()=>useTestimonials
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$strapiApi$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/strapiApi.ts [client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature(), _s5 = __turbopack_context__.k.signature(), _s6 = __turbopack_context__.k.signature(), _s7 = __turbopack_context__.k.signature(), _s8 = __turbopack_context__.k.signature(), _s9 = __turbopack_context__.k.signature(), _s10 = __turbopack_context__.k.signature(), _s11 = __turbopack_context__.k.signature();
;
;
function useStrapiData(apiCall, dependencies = []) {
    _s();
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useStrapiData.useEffect": ()=>{
            let isMounted = true;
            const fetchData = {
                "useStrapiData.useEffect.fetchData": async ()=>{
                    try {
                        setLoading(true);
                        setError(null);
                        const response = await apiCall();
                        if (isMounted) {
                            // Vérifier si c'est une collection ou un élément unique
                            if ('data' in response && Array.isArray(response.data)) {
                                setData(response.data);
                            } else if ('data' in response) {
                                setData(response.data);
                            }
                        }
                    } catch (err) {
                        if (isMounted) {
                            setError(err instanceof Error ? err.message : 'Une erreur est survenue');
                        }
                    } finally{
                        if (isMounted) {
                            setLoading(false);
                        }
                    }
                }
            }["useStrapiData.useEffect.fetchData"];
            fetchData();
            return ({
                "useStrapiData.useEffect": ()=>{
                    isMounted = false;
                }
            })["useStrapiData.useEffect"];
        }
    }["useStrapiData.useEffect"], dependencies);
    return {
        data,
        loading,
        error
    };
}
_s(useStrapiData, "RiL7vLwmC7ZWXKL/bXt2EIBjBYk=");
function useProducts(params = {}) {
    _s1();
    return useStrapiData({
        "useProducts.useStrapiData": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$strapiApi$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["strapiApi"].getProducts(params)
    }["useProducts.useStrapiData"], [
        JSON.stringify(params)
    ]);
}
_s1(useProducts, "MRV/h9jOi06DywtNYE+kUVT4hPY=", false, function() {
    return [
        useStrapiData
    ];
});
function useProduct(id, params = {}) {
    _s2();
    return useStrapiData({
        "useProduct.useStrapiData": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$strapiApi$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["strapiApi"].getProduct(id, params)
    }["useProduct.useStrapiData"], [
        id,
        JSON.stringify(params)
    ]);
}
_s2(useProduct, "MRV/h9jOi06DywtNYE+kUVT4hPY=", false, function() {
    return [
        useStrapiData
    ];
});
function useProductBySlug(slug, params = {}) {
    _s3();
    return useStrapiData({
        "useProductBySlug.useStrapiData": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$strapiApi$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["strapiApi"].getProductBySlug(slug, params)
    }["useProductBySlug.useStrapiData"], [
        slug,
        JSON.stringify(params)
    ]);
}
_s3(useProductBySlug, "MRV/h9jOi06DywtNYE+kUVT4hPY=", false, function() {
    return [
        useStrapiData
    ];
});
function useProductsByCategory(categorySlug, params = {}) {
    _s4();
    return useStrapiData({
        "useProductsByCategory.useStrapiData": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$strapiApi$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["strapiApi"].getProductsByCategory(categorySlug, params)
    }["useProductsByCategory.useStrapiData"], [
        categorySlug,
        JSON.stringify(params)
    ]);
}
_s4(useProductsByCategory, "MRV/h9jOi06DywtNYE+kUVT4hPY=", false, function() {
    return [
        useStrapiData
    ];
});
function useCategories(params = {}) {
    _s5();
    return useStrapiData({
        "useCategories.useStrapiData": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$strapiApi$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["strapiApi"].getCategories(params)
    }["useCategories.useStrapiData"], [
        JSON.stringify(params)
    ]);
}
_s5(useCategories, "MRV/h9jOi06DywtNYE+kUVT4hPY=", false, function() {
    return [
        useStrapiData
    ];
});
function useTestimonials(params = {}) {
    _s6();
    return useStrapiData({
        "useTestimonials.useStrapiData": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$strapiApi$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["strapiApi"].getTestimonials(params)
    }["useTestimonials.useStrapiData"], [
        JSON.stringify(params)
    ]);
}
_s6(useTestimonials, "MRV/h9jOi06DywtNYE+kUVT4hPY=", false, function() {
    return [
        useStrapiData
    ];
});
function useHeroSlides(params = {}) {
    _s7();
    return useStrapiData({
        "useHeroSlides.useStrapiData": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$strapiApi$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["strapiApi"].getHeroSlides(params)
    }["useHeroSlides.useStrapiData"], [
        JSON.stringify(params)
    ]);
}
_s7(useHeroSlides, "MRV/h9jOi06DywtNYE+kUVT4hPY=", false, function() {
    return [
        useStrapiData
    ];
});
function useStrapiMutation(mutationFn) {
    _s8();
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const mutate = async (params)=>{
        try {
            setLoading(true);
            setError(null);
            const response = await mutationFn(params);
            return response.data;
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Une erreur est survenue');
            return null;
        } finally{
            setLoading(false);
        }
    };
    return {
        mutate,
        loading,
        error
    };
}
_s8(useStrapiMutation, "Iz3ozxQ+abMaAIcGIvU8cKUcBeo=");
function useCreateOrder() {
    _s9();
    return useStrapiMutation(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$strapiApi$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["strapiApi"].createOrder.bind(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$strapiApi$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["strapiApi"]));
}
_s9(useCreateOrder, "AIc8bCEcH2Tw4RwWbdd8E59/e+w=", false, function() {
    return [
        useStrapiMutation
    ];
});
function usePaginatedProducts(initialParams = {}) {
    _s10();
    const [params, setParams] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])({
        pagination: {
            page: 1,
            pageSize: 12
        },
        ...initialParams
    });
    const { data, loading, error } = useProducts(params);
    const [allProducts, setAllProducts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [hasMore, setHasMore] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "usePaginatedProducts.useEffect": ()=>{
            if (data && Array.isArray(data)) {
                if (params.pagination?.page === 1) {
                    setAllProducts(data);
                } else {
                    setAllProducts({
                        "usePaginatedProducts.useEffect": (prev)=>[
                                ...prev,
                                ...data
                            ]
                    }["usePaginatedProducts.useEffect"]);
                }
            }
        }
    }["usePaginatedProducts.useEffect"], [
        data,
        params.pagination?.page
    ]);
    const loadMore = ()=>{
        if (!loading && hasMore) {
            setParams((prev)=>({
                    ...prev,
                    pagination: {
                        ...prev.pagination,
                        page: (prev.pagination?.page || 1) + 1
                    }
                }));
        }
    };
    const updateFilters = (newFilters)=>{
        setParams({
            ...newFilters,
            pagination: {
                page: 1,
                pageSize: 12
            }
        });
        setAllProducts([]);
        setHasMore(true);
    };
    return {
        products: allProducts,
        loading,
        error,
        hasMore,
        loadMore,
        updateFilters
    };
}
_s10(usePaginatedProducts, "P0qu3MYYKjZc8sPqyMBvKrhyRfQ=", false, function() {
    return [
        useProducts
    ];
});
function useProductSearch(searchTerm, delay = 300) {
    _s11();
    const [debouncedTerm, setDebouncedTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(searchTerm);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useProductSearch.useEffect": ()=>{
            const timer = setTimeout({
                "useProductSearch.useEffect.timer": ()=>{
                    setDebouncedTerm(searchTerm);
                }
            }["useProductSearch.useEffect.timer"], delay);
            return ({
                "useProductSearch.useEffect": ()=>clearTimeout(timer)
            })["useProductSearch.useEffect"];
        }
    }["useProductSearch.useEffect"], [
        searchTerm,
        delay
    ]);
    const searchParams = {
        filters: debouncedTerm ? {
            $or: [
                {
                    title: {
                        $containsi: debouncedTerm
                    }
                },
                {
                    description: {
                        $containsi: debouncedTerm
                    }
                }
            ]
        } : {},
        populate: [
            'image',
            'category'
        ]
    };
    return useProducts(debouncedTerm ? searchParams : {});
}
_s11(useProductSearch, "hasM5aLy0gACvkxgGzUABJjCHo4=", false, function() {
    return [
        useProducts
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useLanguage.ts [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useLanguage",
    ()=>useLanguage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$AppContext$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/AppContext.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$translations$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/translations.ts [client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
function useLanguage() {
    _s();
    const { selectedLanguage, setSelectedLanguage } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$AppContext$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["useApp"])();
    /**
   * Traduit une clé selon la langue sélectionnée
   * @param key Clé de traduction
   * @returns Texte traduit
   */ const t = (key)=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$translations$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["getTranslation"])(key, selectedLanguage);
    };
    /**
   * Change la langue de l'application
   * @param language Code de la nouvelle langue
   */ const changeLanguage = (language)=>{
        setSelectedLanguage(language);
    };
    return {
        selectedLanguage,
        changeLanguage,
        t
    };
}
_s(useLanguage, "jMuiVPOHHnupZhwS6idFH7U9iCQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$AppContext$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["useApp"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useHeroSlides.ts [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useHeroSlides",
    ()=>useHeroSlides
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$info$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/supabase/info.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLanguage$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useLanguage.ts [client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
function useHeroSlides() {
    _s();
    const [slides, setSlides] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const { currentLanguage } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLanguage$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const fetchSlides = async ()=>{
        try {
            setLoading(true);
            setError(null);
            const locale = currentLanguage === 'en' ? 'en' : 'fr';
            const response = await fetch(`https://${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$info$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["projectId"]}.supabase.co/functions/v1/make-server-98c6ec1c/api/hero-slides?locale=${locale}`, {
                headers: {
                    'Authorization': `Bearer ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$info$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["publicAnonKey"]}`,
                    'Content-Type': 'application/json'
                }
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const result = await response.json();
            if (result.success && result.data) {
                setSlides(result.data);
            } else {
                throw new Error(result.error || 'Failed to fetch hero slides');
            }
        } catch (err) {
            // Log silencieux pour "Failed to fetch" (serveur non accessible)
            const errorMessage = err instanceof Error ? err.message : 'An error occurred';
            if (errorMessage.includes('Failed to fetch')) {
                console.log('ℹ️ Hero slides backend not available, using fallback slides');
            } else {
                console.error('Error fetching hero slides:', err);
            }
            setError(errorMessage);
            // Fallback vers un slide par défaut en cas d'erreur
            setSlides([
                {
                    id: 'fallback-1',
                    sort_order: 1,
                    background_image_url: 'https://images.unsplash.com/photo-1718939045285-b67f9e9f9f8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiZWRyb29tJTIwZGVzaWduJTIwY29tZm9ydGFibGV8ZW58MXx8fHwxNzU4MTA2MzMxfDA&ixlib=rb-4.1.0&q=80&w=1080',
                    is_video: false,
                    slide_duration: 5000,
                    video_loop: true,
                    is_active: true,
                    cta_bg_color: '#FFFFFF',
                    cta_text_color: '#B5C233',
                    translation: {
                        title: 'FIMA Couchage',
                        subtitle: 'LITERIE PREMIUM',
                        description: 'Matelas, sommiers et accessoires.',
                        cta_primary: 'Découvrir nos produits',
                        badge: '14 NUITS D\'ESSAI'
                    }
                }
            ]);
        } finally{
            setLoading(false);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useHeroSlides.useEffect": ()=>{
            fetchSlides();
        }
    }["useHeroSlides.useEffect"], [
        currentLanguage
    ]);
    return {
        slides,
        loading,
        error,
        refetch: fetchSlides
    };
}
_s(useHeroSlides, "UNSvnv51MasjUhFBg2NG6GLx5qQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLanguage$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useLogoScrollAnimation.ts [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useLogoScrollAnimation",
    ()=>useLogoScrollAnimation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/index.js [client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
function useLogoScrollAnimation(options = {}) {
    _s();
    const { threshold = 50 } = options;
    const [hasScrolled, setHasScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useLogoScrollAnimation.useEffect": ()=>{
            const handleScroll = {
                "useLogoScrollAnimation.useEffect.handleScroll": ()=>{
                    const scrollY = window.scrollY || window.pageYOffset;
                    if (scrollY > threshold) {
                        setHasScrolled(true);
                    } else {
                        setHasScrolled(false);
                    }
                }
            }["useLogoScrollAnimation.useEffect.handleScroll"];
            // Vérifier immédiatement au montage
            handleScroll();
            window.addEventListener('scroll', handleScroll, {
                passive: true
            });
            return ({
                "useLogoScrollAnimation.useEffect": ()=>{
                    window.removeEventListener('scroll', handleScroll);
                }
            })["useLogoScrollAnimation.useEffect"];
        }
    }["useLogoScrollAnimation.useEffect"], [
        threshold
    ]);
    return {
        hasScrolled
    };
}
_s(useLogoScrollAnimation, "6NwvVT3+fDIipYxYzAg125V9bBs=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useCurrency.ts [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCurrency",
    ()=>useCurrency
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$AppContext$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/AppContext.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$currency$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/currency.ts [client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
function useCurrency() {
    _s();
    const { selectedCurrency } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$AppContext$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["useApp"])();
    /**
   * Formate un prix selon la devise sélectionnée
   * @param eurPrice Prix en euros (base)
   * @returns Prix formaté avec symbole
   */ const formatPrice = (eurPrice)=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$currency$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["formatCurrency"])(eurPrice, selectedCurrency);
    };
    /**
   * Formate un prix avec prix barré optionnel
   * @param price Prix actuel en euros
   * @param originalPrice Prix original en euros (optionnel)
   * @returns Objet avec prix formatés
   */ const formatPriceWithDiscount = (price, originalPrice)=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$currency$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["formatPriceForDisplay"])(price, originalPrice, selectedCurrency);
    };
    return {
        selectedCurrency,
        formatPrice,
        formatPriceWithDiscount
    };
}
_s(useCurrency, "dAPtiZP9Bh0q3NHveJDXu+VOd/8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$AppContext$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["useApp"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useScrollToTop.ts [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAutoScrollToTop",
    ()=>useAutoScrollToTop,
    "useScrollToTop",
    ()=>useScrollToTop
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/index.js [client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
;
const useScrollToTop = ()=>{
    _s();
    const scrollToTop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useScrollToTop.useCallback[scrollToTop]": ()=>{
            // Scroll immédiat synchrone d'abord
            window.scrollTo(0, 0);
            // Force scroll pour les cas où le contenu n'est pas encore rendu
            requestAnimationFrame({
                "useScrollToTop.useCallback[scrollToTop]": ()=>{
                    window.scrollTo({
                        top: 0,
                        behavior: 'instant'
                    });
                    // Double sécurité après un délai minimal
                    setTimeout({
                        "useScrollToTop.useCallback[scrollToTop]": ()=>{
                            if (window.scrollY > 0) {
                                window.scrollTo({
                                    top: 0,
                                    behavior: 'instant'
                                });
                            }
                        }
                    }["useScrollToTop.useCallback[scrollToTop]"], 50);
                }
            }["useScrollToTop.useCallback[scrollToTop]"]);
        }
    }["useScrollToTop.useCallback[scrollToTop]"], []);
    return scrollToTop;
};
_s(useScrollToTop, "QMr8pWfNBsqpWl8qQNikAOqeqlA=");
const useAutoScrollToTop = (dependency)=>{
    _s1();
    const scrollToTop = useScrollToTop();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useAutoScrollToTop.useEffect": ()=>{
            scrollToTop();
        }
    }["useAutoScrollToTop.useEffect"], [
        dependency,
        scrollToTop
    ]);
};
_s1(useAutoScrollToTop, "/ZM36iZ4XyiWCwo0ov2o23l/lGI=", false, function() {
    return [
        useScrollToTop
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useNavigationPersistence.ts [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useNavigationPersistence",
    ()=>useNavigationPersistence
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/index.js [client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
const STORAGE_KEY = 'fima_navigation_state';
function useNavigationPersistence() {
    _s();
    /**
   * Sauvegarde l'état de navigation
   */ const saveNavigationState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useNavigationPersistence.useCallback[saveNavigationState]": (state)=>{
            try {
                // Sauvegarder dans localStorage
                localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
                // Mettre à jour l'URL sans recharger la page
                const url = getUrlFromState(state);
                if (url !== window.location.pathname + window.location.search) {
                    window.history.pushState({
                        ...state
                    }, '', url);
                }
            } catch (error) {
                console.error('Erreur lors de la sauvegarde de la navigation:', error);
            }
        }
    }["useNavigationPersistence.useCallback[saveNavigationState]"], []);
    /**
   * Restaure l'état de navigation depuis l'URL ou localStorage
   */ const restoreNavigationState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useNavigationPersistence.useCallback[restoreNavigationState]": ()=>{
            try {
                // D'abord, essayer de parser l'URL
                const urlState = getStateFromUrl();
                if (urlState) {
                    return urlState;
                }
                // Sinon, utiliser localStorage
                const stored = localStorage.getItem(STORAGE_KEY);
                if (stored) {
                    return JSON.parse(stored);
                }
            } catch (error) {
                console.error('Erreur lors de la restauration de la navigation:', error);
            }
            return null;
        }
    }["useNavigationPersistence.useCallback[restoreNavigationState]"], []);
    /**
   * Efface l'état de navigation
   */ const clearNavigationState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useNavigationPersistence.useCallback[clearNavigationState]": ()=>{
            try {
                localStorage.removeItem(STORAGE_KEY);
                window.history.pushState({}, '', '/');
            } catch (error) {
                console.error('Erreur lors de l\'effacement de la navigation:', error);
            }
        }
    }["useNavigationPersistence.useCallback[clearNavigationState]"], []);
    /**
   * Gère le bouton retour du navigateur
   */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useNavigationPersistence.useEffect": ()=>{
            const handlePopState = {
                "useNavigationPersistence.useEffect.handlePopState": (event)=>{
                    if (event.state) {
                        // L'état est déjà dans event.state, le composant parent devra le gérer
                        console.log('Navigation arrière détectée:', event.state);
                    }
                }
            }["useNavigationPersistence.useEffect.handlePopState"];
            window.addEventListener('popstate', handlePopState);
            return ({
                "useNavigationPersistence.useEffect": ()=>window.removeEventListener('popstate', handlePopState)
            })["useNavigationPersistence.useEffect"];
        }
    }["useNavigationPersistence.useEffect"], []);
    return {
        saveNavigationState,
        restoreNavigationState,
        clearNavigationState
    };
}
_s(useNavigationPersistence, "Iv4HR0Frb1/e9bRXA10jn5Qvsiw=");
/**
 * Convertit un état de navigation en URL
 */ function getUrlFromState(state) {
    switch(state.view){
        case 'home':
            return '/';
        case 'product':
            return `/product/${state.selectedProduct?.slug || state.selectedProduct?.id || ''}`;
        case 'all-products':
            return state.initialCategoryFilter ? `/products?category=${encodeURIComponent(state.initialCategoryFilter)}` : '/products';
        case 'category':
            return `/category/${encodeURIComponent(state.selectedCategory || '')}`;
        case 'category-detail':
            return `/category-detail/${encodeURIComponent(state.categoryDetailSlug || '')}`;
        case 'fima-couchage':
            return '/fima-couchage';
        case 'fima-design':
            return '/fima-design';
        case 'univers-glass':
            return '/univers-glass';
        case 'b2b-solutions':
            return '/b2b-solutions';
        case 'large-accounts':
            return '/large-accounts';
        case 'content-hub':
            return '/content-hub';
        case 'all-projects':
            return '/projects';
        case 'project-detail':
            return `/project/${state.selectedProject?.slug || state.selectedProject?.id || ''}`;
        case 'article-detail':
            return `/article/${state.selectedArticle?.slug || state.selectedArticle?.id || ''}`;
        case 'careers':
            return '/careers';
        case 'our-history':
            return '/our-history';
        case 'our-certifications':
            return '/our-certifications';
        case 'checkout':
            return '/checkout';
        case 'auth':
        case 'login':
            return '/login';
        case 'signup':
            return '/signup';
        case 'account':
            return '/account';
        case 'order-detail':
            return `/order/${state.selectedOrderId || ''}`;
        case 'order-tracking':
            return `/order-tracking/${state.selectedOrderId || ''}`;
        case 'sitemap':
            return '/sitemap';
        case 'brand-guidelines':
            return '/brand-guidelines';
        case 'cms':
            return '/cms';
        default:
            return '/';
    }
}
/**
 * Parse l'URL pour extraire l'état de navigation
 */ function getStateFromUrl() {
    const path = window.location.pathname;
    const params = new URLSearchParams(window.location.search);
    // Home
    if (path === '/' || path === '') {
        return {
            view: 'home'
        };
    }
    // Product detail
    if (path.startsWith('/product/')) {
        const id = path.replace('/product/', '');
        if (id) {
            // On ne peut pas restaurer le produit complet depuis l'URL
            // Le composant devra le charger depuis l'ID
            return {
                view: 'product',
                selectedProduct: {
                    id
                }
            };
        }
    }
    // All products
    if (path === '/products') {
        const category = params.get('category');
        return {
            view: 'all-products',
            initialCategoryFilter: category || undefined
        };
    }
    // Category
    if (path.startsWith('/category/') && !path.startsWith('/category-detail/')) {
        const category = decodeURIComponent(path.replace('/category/', ''));
        return {
            view: 'category',
            selectedCategory: category
        };
    }
    // Category detail
    if (path.startsWith('/category-detail/')) {
        const slug = decodeURIComponent(path.replace('/category-detail/', ''));
        return {
            view: 'category-detail',
            categoryDetailSlug: slug
        };
    }
    // Business units
    if (path === '/fima-couchage') return {
        view: 'fima-couchage'
    };
    if (path === '/fima-design') return {
        view: 'fima-design'
    };
    if (path === '/univers-glass') return {
        view: 'univers-glass'
    };
    if (path === '/b2b-solutions') return {
        view: 'b2b-solutions'
    };
    if (path === '/large-accounts') return {
        view: 'large-accounts'
    };
    // Content
    if (path === '/content-hub') return {
        view: 'content-hub'
    };
    if (path === '/projects') return {
        view: 'all-projects'
    };
    if (path.startsWith('/project/')) {
        const id = path.replace('/project/', '');
        return {
            view: 'project-detail',
            selectedProject: {
                id
            }
        };
    }
    if (path.startsWith('/article/')) {
        const id = path.replace('/article/', '');
        return {
            view: 'article-detail',
            selectedArticle: {
                id
            }
        };
    }
    // Company pages
    if (path === '/careers') return {
        view: 'careers'
    };
    if (path === '/our-history') return {
        view: 'our-history'
    };
    if (path === '/our-certifications') return {
        view: 'our-certifications'
    };
    // Auth & Account
    if (path === '/login') return {
        view: 'login'
    };
    if (path === '/signup') return {
        view: 'signup'
    };
    if (path === '/account') return {
        view: 'account'
    };
    if (path === '/checkout') return {
        view: 'checkout'
    };
    // Orders
    if (path.startsWith('/order/') && !path.startsWith('/order-tracking/')) {
        const orderId = path.replace('/order/', '');
        return {
            view: 'order-detail',
            selectedOrderId: orderId
        };
    }
    if (path.startsWith('/order-tracking/')) {
        const orderId = path.replace('/order-tracking/', '');
        return {
            view: 'order-tracking',
            selectedOrderId: orderId
        };
    }
    // Other pages
    if (path === '/sitemap') return {
        view: 'sitemap'
    };
    if (path === '/brand-guidelines') return {
        view: 'brand-guidelines'
    };
    if (path === '/cms' || path.startsWith('/cms/')) return {
        view: 'cms'
    };
    return null;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useFavicon.ts [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useFavicon",
    ()=>useFavicon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/index.js [client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
const useFavicon = (faviconUrl)=>{
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useFavicon.useEffect": ()=>{
            // Supprimer les anciens favicons
            const existingLinks = document.querySelectorAll("link[rel*='icon']");
            existingLinks.forEach({
                "useFavicon.useEffect": (link)=>link.remove()
            }["useFavicon.useEffect"]);
            // Créer le nouveau favicon principal
            const link = document.createElement('link');
            link.rel = 'icon';
            link.type = 'image/png';
            link.href = faviconUrl;
            document.head.appendChild(link);
            // Ajouter aussi apple-touch-icon pour iOS
            const appleLink = document.createElement('link');
            appleLink.rel = 'apple-touch-icon';
            appleLink.href = faviconUrl;
            document.head.appendChild(appleLink);
            // Mettre à jour le titre si nécessaire
            if (!document.title || document.title === 'React App') {
                document.title = 'FIMA - Literie, Menuiserie & Vitrerie depuis 1985';
            }
            // Cleanup
            return ({
                "useFavicon.useEffect": ()=>{
                // On ne supprime pas au démontage pour éviter de perdre le favicon
                }
            })["useFavicon.useEffect"];
        }
    }["useFavicon.useEffect"], [
        faviconUrl
    ]);
};
_s(useFavicon, "OD7bBpZva5O2jO+Puf00hKivP7c=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useProducts.ts [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useProduct",
    ()=>useProduct,
    "useProductMutation",
    ()=>useProductMutation,
    "useProducts",
    ()=>useProducts
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$info$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/supabase/info.tsx [client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
;
;
const API_BASE_URL = `https://${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$info$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["projectId"]}.supabase.co/functions/v1/make-server-98c6ec1c`;
const useProducts = (business, category, featuredOnly = false, refreshKey = 0, includeInactive = false)=>{
    _s();
    const [products, setProducts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useProducts.useEffect": ()=>{
            const fetchProducts = {
                "useProducts.useEffect.fetchProducts": async ()=>{
                    try {
                        setLoading(true);
                        setError(null);
                        const url = new URL(`${API_BASE_URL}/products`);
                        // Ajouter les paramètres de filtrage
                        if (business && business !== 'all') {
                            url.searchParams.append('business', business);
                        }
                        if (category && category !== 'all') {
                            url.searchParams.append('category', category);
                        }
                        if (featuredOnly) {
                            url.searchParams.append('featured', 'true');
                        }
                        const response = await fetch(url.toString(), {
                            method: 'GET',
                            headers: {
                                'Authorization': `Bearer ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$info$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["publicAnonKey"]}`,
                                'Content-Type': 'application/json'
                            }
                        });
                        if (!response.ok) {
                            const errorText = await response.text().catch({
                                "useProducts.useEffect.fetchProducts": ()=>response.statusText
                            }["useProducts.useEffect.fetchProducts"]);
                            console.error(`HTTP ${response.status}: ${errorText}`);
                            throw new Error(`Erreur HTTP ${response.status}`);
                        }
                        const result = await response.json();
                        if (!result.success) {
                            throw new Error(result.error || 'Erreur lors du chargement des produits');
                        }
                        let productsData = result.data || [];
                        // Filtrer les produits actifs uniquement (sauf si includeInactive est true)
                        // includeInactive = true pour le CMS, false pour la boutique
                        if (!includeInactive) {
                            productsData = productsData.filter({
                                "useProducts.useEffect.fetchProducts": (p)=>p.status === 'active'
                            }["useProducts.useEffect.fetchProducts"]);
                        }
                        // Trier par featured first, puis par nom
                        productsData.sort({
                            "useProducts.useEffect.fetchProducts": (a, b)=>{
                                // Featured first
                                if (a.featured && !b.featured) return -1;
                                if (!a.featured && b.featured) return 1;
                                // Then by name
                                return a.name.localeCompare(b.name);
                            }
                        }["useProducts.useEffect.fetchProducts"]);
                        setProducts(productsData);
                        setError(null);
                    } catch (err) {
                        const errorMessage = err instanceof Error ? err.message : 'Erreur inconnue';
                        console.error('Error fetching products:', errorMessage);
                        // En mode développement, retourner un tableau vide plutôt qu'une erreur
                        // pour éviter de bloquer l'interface
                        setError(errorMessage);
                        setProducts([]);
                    } finally{
                        setLoading(false);
                    }
                }
            }["useProducts.useEffect.fetchProducts"];
            fetchProducts();
        }
    }["useProducts.useEffect"], [
        business,
        category,
        featuredOnly,
        refreshKey,
        includeInactive
    ]);
    return {
        products,
        loading,
        error
    };
};
_s(useProducts, "3+N/VFIgZOBgubN9oS5aTzm2qqY=");
const useProduct = (sku)=>{
    _s1();
    const [product, setProduct] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useProduct.useEffect": ()=>{
            const fetchProduct = {
                "useProduct.useEffect.fetchProduct": async ()=>{
                    try {
                        setLoading(true);
                        setError(null);
                        const response = await fetch(`${API_BASE_URL}/products/${sku}`, {
                            method: 'GET',
                            headers: {
                                'Authorization': `Bearer ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$info$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["publicAnonKey"]}`,
                                'Content-Type': 'application/json'
                            }
                        });
                        if (!response.ok) {
                            throw new Error(`Erreur lors du chargement du produit: ${response.statusText}`);
                        }
                        const result = await response.json();
                        if (!result.success) {
                            throw new Error(result.error || 'Produit non trouvé');
                        }
                        setProduct(result.data);
                    } catch (err) {
                        console.error('Error fetching product:', err);
                        setError(err instanceof Error ? err.message : 'Erreur inconnue');
                        setProduct(null);
                    } finally{
                        setLoading(false);
                    }
                }
            }["useProduct.useEffect.fetchProduct"];
            if (sku) {
                fetchProduct();
            }
        }
    }["useProduct.useEffect"], [
        sku
    ]);
    return {
        product,
        loading,
        error
    };
};
_s1(useProduct, "OykZgolRXF5NMKIrRjnuAyPsifE=");
const useProductMutation = ()=>{
    _s2();
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const createProduct = async (productData)=>{
        try {
            setLoading(true);
            setError(null);
            const response = await fetch(`${API_BASE_URL}/products`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$info$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["publicAnonKey"]}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(productData)
            });
            if (!response.ok) {
                throw new Error(`Erreur lors de la création du produit: ${response.statusText}`);
            }
            const result = await response.json();
            if (!result.success) {
                throw new Error(result.error || 'Erreur lors de la création du produit');
            }
            return {
                success: true,
                data: result.data
            };
        } catch (err) {
            console.error('Error creating product:', err);
            const errorMessage = err instanceof Error ? err.message : 'Erreur inconnue';
            setError(errorMessage);
            return {
                success: false,
                error: errorMessage
            };
        } finally{
            setLoading(false);
        }
    };
    const updateProduct = async (id, productData)=>{
        try {
            setLoading(true);
            setError(null);
            const response = await fetch(`${API_BASE_URL}/products/${id}`, {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$info$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["publicAnonKey"]}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(productData)
            });
            if (!response.ok) {
                throw new Error(`Erreur lors de la mise à jour du produit: ${response.statusText}`);
            }
            const result = await response.json();
            if (!result.success) {
                throw new Error(result.error || 'Erreur lors de la mise à jour du produit');
            }
            return {
                success: true,
                data: result.data
            };
        } catch (err) {
            console.error('Error updating product:', err);
            const errorMessage = err instanceof Error ? err.message : 'Erreur inconnue';
            setError(errorMessage);
            return {
                success: false,
                error: errorMessage
            };
        } finally{
            setLoading(false);
        }
    };
    const deleteProduct = async (id)=>{
        try {
            setLoading(true);
            setError(null);
            const response = await fetch(`${API_BASE_URL}/products/${id}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$info$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["publicAnonKey"]}`,
                    'Content-Type': 'application/json'
                }
            });
            if (!response.ok) {
                throw new Error(`Erreur lors de la suppression du produit: ${response.statusText}`);
            }
            const result = await response.json();
            if (!result.success) {
                throw new Error(result.error || 'Erreur lors de la suppression du produit');
            }
            return {
                success: true
            };
        } catch (err) {
            console.error('Error deleting product:', err);
            const errorMessage = err instanceof Error ? err.message : 'Erreur inconnue';
            setError(errorMessage);
            return {
                success: false,
                error: errorMessage
            };
        } finally{
            setLoading(false);
        }
    };
    return {
        createProduct,
        updateProduct,
        deleteProduct,
        loading,
        error
    };
};
_s2(useProductMutation, "Iz3ozxQ+abMaAIcGIvU8cKUcBeo=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useVideoStories.ts [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useVideoStories",
    ()=>useVideoStories,
    "useVideoStory",
    ()=>useVideoStory,
    "useVideoStoryMutation",
    ()=>useVideoStoryMutation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$info$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/supabase/info.tsx [client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
;
;
const API_BASE_URL = `https://${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$info$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["projectId"]}.supabase.co/functions/v1/make-server-98c6ec1c`;
const useVideoStories = (locale = 'fr', category, featuredOnly = false, publishedOnly = true)=>{
    _s();
    const [videoStories, setVideoStories] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const fetchVideoStories = async ()=>{
        try {
            setLoading(true);
            setError(null);
            const url = new URL(`${API_BASE_URL}/video-stories`);
            // Ajouter les paramètres de filtrage
            if (category) {
                url.searchParams.append('category', category);
            }
            if (featuredOnly) {
                url.searchParams.append('featured', 'true');
            }
            const response = await fetch(url.toString(), {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$info$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["publicAnonKey"]}`,
                    'Content-Type': 'application/json'
                }
            });
            if (!response.ok) {
                throw new Error(`Erreur lors du chargement des video stories: ${response.statusText}`);
            }
            const result = await response.json();
            if (!result.success) {
                throw new Error(result.error || 'Erreur lors du chargement des video stories');
            }
            let videoStoriesData = result.data || [];
            // Filtrer les vidéos publiées uniquement si demandé
            if (publishedOnly) {
                videoStoriesData = videoStoriesData.filter((v)=>v.published);
            }
            // Trier par ordre personnalisé, puis par featured, puis par date
            videoStoriesData.sort((a, b)=>{
                // Order first (si défini)
                if (a.order !== undefined && b.order !== undefined) {
                    if (a.order !== b.order) return a.order - b.order;
                }
                // Featured second
                if (a.featured && !b.featured) return -1;
                if (!a.featured && b.featured) return 1;
                // Then by date
                const dateA = new Date(a.publishedDate || a.createdAt).getTime();
                const dateB = new Date(b.publishedDate || b.createdAt).getTime();
                return dateB - dateA;
            });
            setVideoStories(videoStoriesData);
        } catch (err) {
            console.error('Error fetching video stories:', err);
            setError(err instanceof Error ? err.message : 'Erreur inconnue');
            setVideoStories([]);
        } finally{
            setLoading(false);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useVideoStories.useEffect": ()=>{
            fetchVideoStories();
        }
    }["useVideoStories.useEffect"], [
        locale,
        category,
        featuredOnly,
        publishedOnly
    ]);
    return {
        videoStories,
        loading,
        error,
        refetch: fetchVideoStories
    };
};
_s(useVideoStories, "u0o6eeFY6sYmsuooz+4QP0N2dF0=");
const useVideoStory = (id, locale = 'fr')=>{
    _s1();
    const [videoStory, setVideoStory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useVideoStory.useEffect": ()=>{
            const fetchVideoStory = {
                "useVideoStory.useEffect.fetchVideoStory": async ()=>{
                    try {
                        setLoading(true);
                        setError(null);
                        const response = await fetch(`${API_BASE_URL}/video-stories/${id}`, {
                            method: 'GET',
                            headers: {
                                'Authorization': `Bearer ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$info$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["publicAnonKey"]}`,
                                'Content-Type': 'application/json'
                            }
                        });
                        if (!response.ok) {
                            throw new Error(`Erreur lors du chargement de la video story: ${response.statusText}`);
                        }
                        const result = await response.json();
                        if (!result.success) {
                            throw new Error(result.error || 'Video story non trouvée');
                        }
                        setVideoStory(result.data);
                    } catch (err) {
                        console.error('Error fetching video story:', err);
                        setError(err instanceof Error ? err.message : 'Erreur inconnue');
                        setVideoStory(null);
                    } finally{
                        setLoading(false);
                    }
                }
            }["useVideoStory.useEffect.fetchVideoStory"];
            if (id) {
                fetchVideoStory();
            }
        }
    }["useVideoStory.useEffect"], [
        id,
        locale
    ]);
    return {
        videoStory,
        loading,
        error
    };
};
_s1(useVideoStory, "eCEOvs4dlLWFDnOwFx0tRr0qr+o=");
const useVideoStoryMutation = ()=>{
    _s2();
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const createVideoStory = async (videoStoryData)=>{
        try {
            setLoading(true);
            setError(null);
            const response = await fetch(`${API_BASE_URL}/video-stories`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$info$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["publicAnonKey"]}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(videoStoryData)
            });
            if (!response.ok) {
                throw new Error(`Erreur lors de la création de la video story: ${response.statusText}`);
            }
            const result = await response.json();
            if (!result.success) {
                throw new Error(result.error || 'Erreur lors de la création de la video story');
            }
            return {
                success: true,
                data: result.data
            };
        } catch (err) {
            console.error('Error creating video story:', err);
            const errorMessage = err instanceof Error ? err.message : 'Erreur inconnue';
            setError(errorMessage);
            return {
                success: false,
                error: errorMessage
            };
        } finally{
            setLoading(false);
        }
    };
    const updateVideoStory = async (id, videoStoryData)=>{
        try {
            setLoading(true);
            setError(null);
            const response = await fetch(`${API_BASE_URL}/video-stories/${id}`, {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$info$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["publicAnonKey"]}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(videoStoryData)
            });
            if (!response.ok) {
                throw new Error(`Erreur lors de la mise à jour de la video story: ${response.statusText}`);
            }
            const result = await response.json();
            if (!result.success) {
                throw new Error(result.error || 'Erreur lors de la mise à jour de la video story');
            }
            return {
                success: true,
                data: result.data
            };
        } catch (err) {
            console.error('Error updating video story:', err);
            const errorMessage = err instanceof Error ? err.message : 'Erreur inconnue';
            setError(errorMessage);
            return {
                success: false,
                error: errorMessage
            };
        } finally{
            setLoading(false);
        }
    };
    const deleteVideoStory = async (id)=>{
        try {
            setLoading(true);
            setError(null);
            const response = await fetch(`${API_BASE_URL}/video-stories/${id}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$info$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["publicAnonKey"]}`,
                    'Content-Type': 'application/json'
                }
            });
            if (!response.ok) {
                throw new Error(`Erreur lors de la suppression de la video story: ${response.statusText}`);
            }
            const result = await response.json();
            if (!result.success) {
                throw new Error(result.error || 'Erreur lors de la suppression de la video story');
            }
            return {
                success: true
            };
        } catch (err) {
            console.error('Error deleting video story:', err);
            const errorMessage = err instanceof Error ? err.message : 'Erreur inconnue';
            setError(errorMessage);
            return {
                success: false,
                error: errorMessage
            };
        } finally{
            setLoading(false);
        }
    };
    return {
        createVideoStory,
        updateVideoStory,
        deleteVideoStory,
        loading,
        error
    };
};
_s2(useVideoStoryMutation, "Iz3ozxQ+abMaAIcGIvU8cKUcBeo=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useBlogs.ts [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useBlog",
    ()=>useBlog,
    "useBlogMutation",
    ()=>useBlogMutation,
    "useBlogs",
    ()=>useBlogs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$info$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/supabase/info.tsx [client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
;
;
const API_BASE_URL = `https://${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$info$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["projectId"]}.supabase.co/functions/v1/make-server-98c6ec1c`;
const useBlogs = (locale = 'fr', category, publishedOnly = true)=>{
    _s();
    const [blogs, setBlogs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const fetchBlogs = async ()=>{
        try {
            setLoading(true);
            setError(null);
            const url = new URL(`${API_BASE_URL}/blogs`);
            const response = await fetch(url.toString(), {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$info$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["publicAnonKey"]}`,
                    'Content-Type': 'application/json'
                }
            });
            if (!response.ok) {
                throw new Error(`Erreur lors du chargement des blogs: ${response.statusText}`);
            }
            const result = await response.json();
            if (!result.success) {
                throw new Error(result.error || 'Erreur lors du chargement des blogs');
            }
            let blogsData = result.data || [];
            // Filtrer par catégorie si spécifié
            if (category && category !== 'all') {
                blogsData = blogsData.filter((blog)=>blog.category === category);
            }
            // Filtrer les articles publiés uniquement si demandé
            if (publishedOnly) {
                blogsData = blogsData.filter((blog)=>blog.published);
            }
            // Trier par date de publication décroissante
            blogsData.sort((a, b)=>{
                const dateA = new Date(a.publishedDate || a.createdAt).getTime();
                const dateB = new Date(b.publishedDate || b.createdAt).getTime();
                return dateB - dateA;
            });
            setBlogs(blogsData);
        } catch (err) {
            console.error('Error fetching blogs:', err);
            const errorMessage = err instanceof Error ? err.message : 'Erreur inconnue';
            // Si c'est une erreur de réseau (Failed to fetch), donner plus de détails
            if (errorMessage.includes('Failed to fetch')) {
                setError('Impossible de se connecter au serveur. Veuillez vérifier que le serveur backend est démarré.');
            } else {
                setError(errorMessage);
            }
            setBlogs([]);
        } finally{
            setLoading(false);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useBlogs.useEffect": ()=>{
            fetchBlogs();
        }
    }["useBlogs.useEffect"], [
        locale,
        category,
        publishedOnly
    ]);
    return {
        blogs,
        loading,
        error,
        refetch: fetchBlogs
    };
};
_s(useBlogs, "tdNJmSjY/kFqj7ChzV/5mp6bsYQ=");
const useBlog = (slug, locale = 'fr')=>{
    _s1();
    const [blog, setBlog] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useBlog.useEffect": ()=>{
            const fetchBlog = {
                "useBlog.useEffect.fetchBlog": async ()=>{
                    try {
                        setLoading(true);
                        setError(null);
                        const response = await fetch(`${API_BASE_URL}/blogs/${slug}`, {
                            method: 'GET',
                            headers: {
                                'Authorization': `Bearer ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$info$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["publicAnonKey"]}`,
                                'Content-Type': 'application/json'
                            }
                        });
                        if (!response.ok) {
                            throw new Error(`Erreur lors du chargement du blog: ${response.statusText}`);
                        }
                        const result = await response.json();
                        if (!result.success) {
                            throw new Error(result.error || 'Blog non trouvé');
                        }
                        setBlog(result.data);
                    } catch (err) {
                        console.error('Error fetching blog:', err);
                        setError(err instanceof Error ? err.message : 'Erreur inconnue');
                        setBlog(null);
                    } finally{
                        setLoading(false);
                    }
                }
            }["useBlog.useEffect.fetchBlog"];
            if (slug) {
                fetchBlog();
            }
        }
    }["useBlog.useEffect"], [
        slug,
        locale
    ]);
    return {
        blog,
        loading,
        error
    };
};
_s1(useBlog, "CVqeuEd6T/aUItc0SY0fEZt0sSU=");
const useBlogMutation = ()=>{
    _s2();
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const createBlog = async (blogData)=>{
        try {
            setLoading(true);
            setError(null);
            const response = await fetch(`${API_BASE_URL}/blogs`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$info$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["publicAnonKey"]}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(blogData)
            });
            if (!response.ok) {
                throw new Error(`Erreur lors de la création du blog: ${response.statusText}`);
            }
            const result = await response.json();
            if (!result.success) {
                throw new Error(result.error || 'Erreur lors de la création du blog');
            }
            return {
                success: true,
                data: result.data
            };
        } catch (err) {
            console.error('Error creating blog:', err);
            const errorMessage = err instanceof Error ? err.message : 'Erreur inconnue';
            setError(errorMessage);
            return {
                success: false,
                error: errorMessage
            };
        } finally{
            setLoading(false);
        }
    };
    const updateBlog = async (id, blogData)=>{
        try {
            setLoading(true);
            setError(null);
            const response = await fetch(`${API_BASE_URL}/blogs/${id}`, {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$info$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["publicAnonKey"]}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(blogData)
            });
            if (!response.ok) {
                throw new Error(`Erreur lors de la mise à jour du blog: ${response.statusText}`);
            }
            const result = await response.json();
            if (!result.success) {
                throw new Error(result.error || 'Erreur lors de la mise à jour du blog');
            }
            return {
                success: true,
                data: result.data
            };
        } catch (err) {
            console.error('Error updating blog:', err);
            const errorMessage = err instanceof Error ? err.message : 'Erreur inconnue';
            setError(errorMessage);
            return {
                success: false,
                error: errorMessage
            };
        } finally{
            setLoading(false);
        }
    };
    const deleteBlog = async (id)=>{
        try {
            setLoading(true);
            setError(null);
            const response = await fetch(`${API_BASE_URL}/blogs/${id}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$info$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["publicAnonKey"]}`,
                    'Content-Type': 'application/json'
                }
            });
            if (!response.ok) {
                throw new Error(`Erreur lors de la suppression du blog: ${response.statusText}`);
            }
            const result = await response.json();
            if (!result.success) {
                throw new Error(result.error || 'Erreur lors de la suppression du blog');
            }
            return {
                success: true
            };
        } catch (err) {
            console.error('Error deleting blog:', err);
            const errorMessage = err instanceof Error ? err.message : 'Erreur inconnue';
            setError(errorMessage);
            return {
                success: false,
                error: errorMessage
            };
        } finally{
            setLoading(false);
        }
    };
    return {
        createBlog,
        updateBlog,
        deleteBlog,
        loading,
        error
    };
};
_s2(useBlogMutation, "Iz3ozxQ+abMaAIcGIvU8cKUcBeo=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useTestimonials.ts [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useTestimonial",
    ()=>useTestimonial,
    "useTestimonialMutation",
    ()=>useTestimonialMutation,
    "useTestimonials",
    ()=>useTestimonials
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$info$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/supabase/info.tsx [client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
;
;
const API_BASE_URL = `https://${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$info$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["projectId"]}.supabase.co/functions/v1/make-server-98c6ec1c`;
const useTestimonials = (locale = 'fr', category, featuredOnly = false, publishedOnly = true)=>{
    _s();
    const [testimonials, setTestimonials] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const fetchTestimonials = async ()=>{
        try {
            setLoading(true);
            setError(null);
            const url = new URL(`${API_BASE_URL}/testimonials`);
            // Ajouter les paramètres de filtrage
            if (category) {
                url.searchParams.append('category', category);
            }
            if (featuredOnly) {
                url.searchParams.append('featured', 'true');
            }
            const response = await fetch(url.toString(), {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$info$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["publicAnonKey"]}`,
                    'Content-Type': 'application/json'
                }
            });
            if (!response.ok) {
                console.error(`Testimonials API error: ${response.status} ${response.statusText}`);
                // Ne pas throw l'erreur, juste retourner un tableau vide
                setTestimonials([]);
                setError(`Erreur API: ${response.statusText}. Veuillez initialiser les données depuis le CMS.`);
                setLoading(false);
                return;
            }
            const result = await response.json();
            // DEBUG: Afficher ce qui est retourné par l'API
            console.log('🔍 Testimonials API Response:', result);
            console.log('🔍 Number of testimonials:', result.data?.length);
            if (!result.success) {
                console.error('Testimonials API returned error:', result.error);
                setTestimonials([]);
                setError(result.error || 'Aucune donnée disponible. Veuillez initialiser les testimonials depuis le CMS.');
                setLoading(false);
                return;
            }
            let testimonialsData = result.data || [];
            // Filtrer les testimonials publiés uniquement si demandé
            if (publishedOnly) {
                testimonialsData = testimonialsData.filter((t)=>t.published);
            }
            // Trier par date de publication décroissante, puis par featured
            testimonialsData.sort((a, b)=>{
                // Featured first
                if (a.featured && !b.featured) return -1;
                if (!a.featured && b.featured) return 1;
                // Then by date
                const dateA = new Date(a.publishedDate || a.createdAt).getTime();
                const dateB = new Date(b.publishedDate || b.createdAt).getTime();
                return dateB - dateA;
            });
            setTestimonials(testimonialsData);
        } catch (err) {
            console.error('Error fetching testimonials:', err);
            const errorMessage = err instanceof Error ? err.message : 'Erreur de connexion au serveur';
            setError(errorMessage);
            setTestimonials([]);
        } finally{
            setLoading(false);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useTestimonials.useEffect": ()=>{
            fetchTestimonials();
        }
    }["useTestimonials.useEffect"], [
        locale,
        category,
        featuredOnly,
        publishedOnly
    ]);
    return {
        testimonials,
        loading,
        error,
        refetch: fetchTestimonials
    };
};
_s(useTestimonials, "U03SjZEWC455BY21wOagGS14oXg=");
const useTestimonial = (id, locale = 'fr')=>{
    _s1();
    const [testimonial, setTestimonial] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useTestimonial.useEffect": ()=>{
            const fetchTestimonial = {
                "useTestimonial.useEffect.fetchTestimonial": async ()=>{
                    try {
                        setLoading(true);
                        setError(null);
                        const response = await fetch(`${API_BASE_URL}/testimonials/${id}`, {
                            method: 'GET',
                            headers: {
                                'Authorization': `Bearer ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$info$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["publicAnonKey"]}`,
                                'Content-Type': 'application/json'
                            }
                        });
                        if (!response.ok) {
                            throw new Error(`Erreur lors du chargement du testimonial: ${response.statusText}`);
                        }
                        const result = await response.json();
                        if (!result.success) {
                            throw new Error(result.error || 'Testimonial non trouvé');
                        }
                        setTestimonial(result.data);
                    } catch (err) {
                        console.error('Error fetching testimonial:', err);
                        setError(err instanceof Error ? err.message : 'Erreur inconnue');
                        setTestimonial(null);
                    } finally{
                        setLoading(false);
                    }
                }
            }["useTestimonial.useEffect.fetchTestimonial"];
            if (id) {
                fetchTestimonial();
            }
        }
    }["useTestimonial.useEffect"], [
        id,
        locale
    ]);
    return {
        testimonial,
        loading,
        error
    };
};
_s1(useTestimonial, "TmmdgQSnYBYGoZYYBlUQi+ZsEhk=");
const useTestimonialMutation = ()=>{
    _s2();
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const createTestimonial = async (testimonialData)=>{
        try {
            setLoading(true);
            setError(null);
            const response = await fetch(`${API_BASE_URL}/testimonials`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$info$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["publicAnonKey"]}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(testimonialData)
            });
            if (!response.ok) {
                throw new Error(`Erreur lors de la création du testimonial: ${response.statusText}`);
            }
            const result = await response.json();
            if (!result.success) {
                throw new Error(result.error || 'Erreur lors de la création du testimonial');
            }
            return {
                success: true,
                data: result.data
            };
        } catch (err) {
            console.error('Error creating testimonial:', err);
            const errorMessage = err instanceof Error ? err.message : 'Erreur inconnue';
            setError(errorMessage);
            return {
                success: false,
                error: errorMessage
            };
        } finally{
            setLoading(false);
        }
    };
    const updateTestimonial = async (id, testimonialData)=>{
        try {
            setLoading(true);
            setError(null);
            const response = await fetch(`${API_BASE_URL}/testimonials/${id}`, {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$info$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["publicAnonKey"]}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(testimonialData)
            });
            if (!response.ok) {
                throw new Error(`Erreur lors de la mise à jour du testimonial: ${response.statusText}`);
            }
            const result = await response.json();
            if (!result.success) {
                throw new Error(result.error || 'Erreur lors de la mise à jour du testimonial');
            }
            return {
                success: true,
                data: result.data
            };
        } catch (err) {
            console.error('Error updating testimonial:', err);
            const errorMessage = err instanceof Error ? err.message : 'Erreur inconnue';
            setError(errorMessage);
            return {
                success: false,
                error: errorMessage
            };
        } finally{
            setLoading(false);
        }
    };
    const deleteTestimonial = async (id)=>{
        try {
            setLoading(true);
            setError(null);
            const response = await fetch(`${API_BASE_URL}/testimonials/${id}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$info$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["publicAnonKey"]}`,
                    'Content-Type': 'application/json'
                }
            });
            if (!response.ok) {
                throw new Error(`Erreur lors de la suppression du testimonial: ${response.statusText}`);
            }
            const result = await response.json();
            if (!result.success) {
                throw new Error(result.error || 'Erreur lors de la suppression du testimonial');
            }
            return {
                success: true
            };
        } catch (err) {
            console.error('Error deleting testimonial:', err);
            const errorMessage = err instanceof Error ? err.message : 'Erreur inconnue';
            setError(errorMessage);
            return {
                success: false,
                error: errorMessage
            };
        } finally{
            setLoading(false);
        }
    };
    return {
        createTestimonial,
        updateTestimonial,
        deleteTestimonial,
        loading,
        error
    };
};
_s2(useTestimonialMutation, "Iz3ozxQ+abMaAIcGIvU8cKUcBeo=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useNewsletter.ts [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useNewsletterStats",
    ()=>useNewsletterStats,
    "useNewsletterSubscription",
    ()=>useNewsletterSubscription
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$info$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/supabase/info.tsx [client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
;
;
const API_BASE_URL = `https://${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$info$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["projectId"]}.supabase.co/functions/v1/make-server-98c6ec1c`;
// Statistiques par défaut pour fallback
const DEFAULT_NEWSLETTER_STATS = {
    totalSubscribers: 2500,
    activeSubscribers: 2500,
    lastUpdated: new Date().toISOString()
};
const useNewsletterStats = ()=>{
    _s();
    const [stats, setStats] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useNewsletterStats.useEffect": ()=>{
            const fetchStats = {
                "useNewsletterStats.useEffect.fetchStats": async ()=>{
                    try {
                        setLoading(true);
                        setError(null);
                        try {
                            const response = await fetch(`${API_BASE_URL}/newsletter/stats`, {
                                method: 'GET',
                                headers: {
                                    'Authorization': `Bearer ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$info$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["publicAnonKey"]}`,
                                    'Content-Type': 'application/json'
                                }
                            });
                            if (response.ok) {
                                const result = await response.json();
                                if (result.success && result.data) {
                                    setStats(result.data);
                                    return;
                                }
                            }
                        } catch (fetchErr) {
                            console.log('Backend unavailable, using fallback stats:', fetchErr);
                        }
                        // Utiliser les statistiques par défaut si l'API échoue
                        console.log('Using default newsletter stats');
                        setStats(DEFAULT_NEWSLETTER_STATS);
                    } catch (err) {
                        console.error('Error fetching newsletter stats:', err);
                        // Même en cas d'erreur, utiliser les stats par défaut
                        setStats(DEFAULT_NEWSLETTER_STATS);
                        setError(null); // Ne pas afficher d'erreur car on a les stats par défaut
                    } finally{
                        setLoading(false);
                    }
                }
            }["useNewsletterStats.useEffect.fetchStats"];
            fetchStats();
        }
    }["useNewsletterStats.useEffect"], []);
    return {
        stats,
        loading,
        error
    };
};
_s(useNewsletterStats, "wn5GnbEWSpy3babVhLIjrKhKWKg=");
const useNewsletterSubscription = ()=>{
    _s1();
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const subscribe = async (email, preferences)=>{
        try {
            setLoading(true);
            setError(null);
            // Validation de l'email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                throw new Error('Adresse email invalide');
            }
            try {
                const response = await fetch(`${API_BASE_URL}/newsletter/subscribe`, {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$info$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["publicAnonKey"]}`,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        email,
                        preferences
                    })
                });
                if (response.ok) {
                    const result = await response.json();
                    if (result.success) {
                        return {
                            success: true,
                            data: result.data
                        };
                    }
                }
            } catch (fetchErr) {
                console.log('Backend unavailable for subscription:', fetchErr);
            }
            // Si le backend n'est pas disponible, simuler le succès
            console.log('Simulating successful subscription (backend unavailable)');
            return {
                success: true,
                data: {
                    id: `sim-${Date.now()}`,
                    email,
                    subscribedAt: new Date().toISOString(),
                    active: true,
                    preferences: preferences || {
                        couchage: true,
                        design: true,
                        glass: true
                    }
                }
            };
        } catch (err) {
            console.error('Error subscribing to newsletter:', err);
            const errorMessage = err instanceof Error ? err.message : 'Erreur inconnue';
            setError(errorMessage);
            return {
                success: false,
                error: errorMessage
            };
        } finally{
            setLoading(false);
        }
    };
    const unsubscribe = async (email)=>{
        try {
            setLoading(true);
            setError(null);
            try {
                const response = await fetch(`${API_BASE_URL}/newsletter/unsubscribe`, {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$info$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["publicAnonKey"]}`,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        email
                    })
                });
                if (response.ok) {
                    const result = await response.json();
                    if (result.success) {
                        return {
                            success: true
                        };
                    }
                }
            } catch (fetchErr) {
                console.log('Backend unavailable for unsubscription:', fetchErr);
            }
            // Si le backend n'est pas disponible, simuler le succès
            console.log('Simulating successful unsubscription (backend unavailable)');
            return {
                success: true
            };
        } catch (err) {
            console.error('Error unsubscribing from newsletter:', err);
            const errorMessage = err instanceof Error ? err.message : 'Erreur inconnue';
            setError(errorMessage);
            return {
                success: false,
                error: errorMessage
            };
        } finally{
            setLoading(false);
        }
    };
    return {
        subscribe,
        unsubscribe,
        loading,
        error
    };
};
_s1(useNewsletterSubscription, "Iz3ozxQ+abMaAIcGIvU8cKUcBeo=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_hooks_40c471f9._.js.map