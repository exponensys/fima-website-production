(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/Breadcrumb.tsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Breadcrumb",
    ()=>Breadcrumb
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/house.js [client] (ecmascript) <export default as Home>");
;
;
function Breadcrumb({ items, accentColor = '#B5C233' }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "flex items-center gap-2 text-sm py-3 px-4 bg-gray-50 border-b border-gray-200",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: items[0]?.onClick,
                className: "flex items-center gap-1 hover:opacity-70 transition-opacity",
                style: {
                    color: '#6E6E6E'
                },
                "aria-label": "Accueil",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"], {
                    className: "w-4 h-4"
                }, void 0, false, {
                    fileName: "[project]/src/components/Breadcrumb.tsx",
                    lineNumber: 23,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Breadcrumb.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                className: "w-4 h-4",
                style: {
                    color: '#6E6E6E'
                }
            }, void 0, false, {
                fileName: "[project]/src/components/Breadcrumb.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            items.slice(1).map((item, index)=>{
                const isLast = index === items.length - 2;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2",
                    children: [
                        item.onClick ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: item.onClick,
                            className: "hover:opacity-70 transition-opacity truncate max-w-[200px]",
                            style: {
                                color: isLast ? accentColor : '#6E6E6E'
                            },
                            children: item.label
                        }, void 0, false, {
                            fileName: "[project]/src/components/Breadcrumb.tsx",
                            lineNumber: 36,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "truncate max-w-[200px]",
                            style: {
                                color: isLast ? accentColor : '#6E6E6E',
                                fontWeight: isLast ? '600' : '400'
                            },
                            children: item.label
                        }, void 0, false, {
                            fileName: "[project]/src/components/Breadcrumb.tsx",
                            lineNumber: 44,
                            columnNumber: 15
                        }, this),
                        !isLast && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                            className: "w-4 h-4",
                            style: {
                                color: '#6E6E6E'
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/Breadcrumb.tsx",
                            lineNumber: 57,
                            columnNumber: 15
                        }, this)
                    ]
                }, index, true, {
                    fileName: "[project]/src/components/Breadcrumb.tsx",
                    lineNumber: 34,
                    columnNumber: 11
                }, this);
            })
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Breadcrumb.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_c = Breadcrumb;
var _c;
__turbopack_context__.k.register(_c, "Breadcrumb");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/business-units/UniversGlassPage.tsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UniversGlassPage",
    ()=>UniversGlassPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$figma$2f$ImageWithFallback$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/figma/ImageWithFallback.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Breadcrumb$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Breadcrumb.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useCMSCategories$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useCMSCategories.ts [client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
const universGlassLogo = '/f0de3e8715f2ded08408ceda5ecebe082177873c.png';
;
function UniversGlassPage({ onNavigate, onBack, onQuoteRequest }) {
    _s();
    const { categories } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useCMSCategories$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["useCMSCategories"])();
    const [activeCategory, setActiveCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])("");
    // Breadcrumb items
    const breadcrumbItems = [
        {
            label: 'Accueil',
            onClick: onBack
        },
        {
            label: 'Univers Glass'
        }
    ];
    // Charger les catégories Univers Glass depuis Supabase
    const productCategories = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "UniversGlassPage.useMemo[productCategories]": ()=>{
            return categories.filter({
                "UniversGlassPage.useMemo[productCategories]": (cat)=>cat.business_unit === 'univers-glass' && cat.is_active
            }["UniversGlassPage.useMemo[productCategories]"]).sort({
                "UniversGlassPage.useMemo[productCategories]": (a, b)=>a.order_index - b.order_index
            }["UniversGlassPage.useMemo[productCategories]"]).slice(0, 4) // Limiter aux 4 premiers
            .map({
                "UniversGlassPage.useMemo[productCategories]": (cat)=>({
                        key: cat.slug,
                        name: cat.name,
                        description: cat.description,
                        image: cat.thumbnail || cat.images?.[0] || 'https://images.unsplash.com/photo-1749815362047-373af7e61072?w=400&h=400&fit=crop'
                    })
            }["UniversGlassPage.useMemo[productCategories]"]);
        }
    }["UniversGlassPage.useMemo[productCategories]"], [
        categories
    ]);
    // Initialiser activeCategory avec la première catégorie
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "UniversGlassPage.useEffect": ()=>{
            if (!activeCategory && productCategories.length > 0) {
                setActiveCategory(productCategories[0].key);
            }
        }
    }["UniversGlassPage.useEffect"], [
        productCategories,
        activeCategory
    ]);
    const expertisePoints = [
        {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                className: "fa-solid fa-building text-2xl"
            }, void 0, false, {
                fileName: "[project]/src/components/business-units/UniversGlassPage.tsx",
                lineNumber: 50,
                columnNumber: 13
            }, this),
            title: "Projets d'envergure",
            description: "Spécialistes des grands chantiers et bâtiments complexes"
        },
        {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                className: "fa-solid fa-shield text-2xl"
            }, void 0, false, {
                fileName: "[project]/src/components/business-units/UniversGlassPage.tsx",
                lineNumber: 56,
                columnNumber: 13
            }, this),
            title: "Normes et sécurité",
            description: "Conformité aux standards techniques les plus exigeants"
        },
        {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                className: "fa-solid fa-award text-2xl"
            }, void 0, false, {
                fileName: "[project]/src/components/business-units/UniversGlassPage.tsx",
                lineNumber: 62,
                columnNumber: 13
            }, this),
            title: "Matériaux premium",
            description: "Profilés aluminium haute qualité et verres techniques"
        },
        {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                className: "fa-solid fa-users text-2xl"
            }, void 0, false, {
                fileName: "[project]/src/components/business-units/UniversGlassPage.tsx",
                lineNumber: 68,
                columnNumber: 13
            }, this),
            title: "Équipe technique",
            description: "Ingénieurs, techniciens et poseurs certifiés"
        }
    ];
    const references = [
        {
            id: 1,
            title: "Centre Commercial Playce Marcory",
            category: "Façade commerciale",
            image: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4Mjl8MHwxfHNlYXJjaHwxfHxnbGFzcyUyMGJ1aWxkaW5nfGVufDB8fHx8MTc1NTYxMDkyNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            description: "Façade complète en mur-rideau avec verrière d'accueil",
            surface: "2,500 m²"
        },
        {
            id: 2,
            title: "Immeuble de bureaux - Plateau",
            category: "Façade tertiaire",
            image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4Mjl8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBidWlsZGluZ3xlbnwwfHx8fDE3NTU2MTA5MjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            description: "Tour de bureaux avec façade structurelle vitrée",
            surface: "4,200 m²"
        },
        {
            id: 3,
            title: "Résidence haut standing - Cocody",
            category: "Résidentiel premium",
            image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4Mjl8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3VzZXxlbnwwfHx8fDE3NTU2MTA5MjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            description: "Baies vitrées sur-mesure et garde-corps design",
            surface: "800 m²"
        }
    ];
    const technicalSpecs = [
        {
            category: "Profilés Aluminium",
            specs: [
                "Série 40-50-60mm",
                "Rupture de pont thermique",
                "Anodisation classe 1",
                "Laquage RAL"
            ]
        },
        {
            category: "Vitrages",
            specs: [
                "Double vitrage 4/16/4",
                "Verres feuilletés sécurit",
                "Contrôle solaire",
                "Isolation thermique renforcée"
            ]
        },
        {
            category: "Quincaillerie",
            specs: [
                "Ferrures européennes",
                "Serrures multipoints",
                "Systèmes de ventilation",
                "Accessoires design"
            ]
        },
        {
            category: "Finitions",
            specs: [
                "Joints EPDM",
                "Calfeutrements étanches",
                "Habillages sur-mesure",
                "Couleurs personnalisées"
            ]
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Breadcrumb$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["Breadcrumb"], {
                items: breadcrumbItems,
                accentColor: "#0EA5E9"
            }, void 0, false, {
                fileName: "[project]/src/components/business-units/UniversGlassPage.tsx",
                lineNumber: 150,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-b",
                style: {
                    borderColor: "#0EA5E9"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto px-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center py-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onBack,
                                className: "flex items-center gap-2 p-2 rounded-lg transition-colors mr-4",
                                style: {
                                    ":hover": {
                                        backgroundColor: "rgba(14, 165, 233, 0.2)"
                                    }
                                },
                                onMouseEnter: (e)=>e.currentTarget.style.backgroundColor = "rgba(14, 165, 233, 0.2)",
                                onMouseLeave: (e)=>e.currentTarget.style.backgroundColor = "transparent",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                        className: "fa-solid fa-arrow-left"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/business-units/UniversGlassPage.tsx",
                                        lineNumber: 176,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Accueil"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/business-units/UniversGlassPage.tsx",
                                        lineNumber: 177,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/business-units/UniversGlassPage.tsx",
                                lineNumber: 159,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-20 h-24 rounded-lg overflow-hidden bg-white shadow-lg",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: universGlassLogo,
                                            alt: "Univers Glass Logo",
                                            className: "w-full h-full object-contain p-2"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/business-units/UniversGlassPage.tsx",
                                            lineNumber: 182,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/business-units/UniversGlassPage.tsx",
                                        lineNumber: 181,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                color: "#6E6E6E"
                                            },
                                            children: "Vitrerie & Aluminium • Solutions techniques"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/business-units/UniversGlassPage.tsx",
                                            lineNumber: 189,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/business-units/UniversGlassPage.tsx",
                                        lineNumber: 188,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/business-units/UniversGlassPage.tsx",
                                lineNumber: 180,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/business-units/UniversGlassPage.tsx",
                        lineNumber: 158,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/business-units/UniversGlassPage.tsx",
                    lineNumber: 157,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/business-units/UniversGlassPage.tsx",
                lineNumber: 153,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-16 bg-gradient-to-b from-blue-50 to-white",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto px-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 lg:grid-cols-2 gap-12 items-start",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pt-[25px] pr-[0px] pb-[0px] pl-[0px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "inline-block mb-3",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "px-4 py-2 text-sm font-bold text-white",
                                            style: {
                                                backgroundColor: "#0EA5E9"
                                            },
                                            children: "SOLUTIONS TECHNIQUES B2B"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/business-units/UniversGlassPage.tsx",
                                            lineNumber: 204,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/business-units/UniversGlassPage.tsx",
                                        lineNumber: 203,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-3xl lg:text-4xl font-bold mb-4",
                                        style: {
                                            fontFamily: "Montserrat",
                                            color: "#0EA5E9"
                                        },
                                        children: "Expertise technique en vitrerie et aluminium"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/business-units/UniversGlassPage.tsx",
                                        lineNumber: 212,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mb-6 leading-relaxed",
                                        style: {
                                            color: "#6E6E6E",
                                            textAlign: "justify"
                                        },
                                        children: "L'alliance parfaite du verre et de l'aluminium pour sublimer vos espaces. De la vitre décorative aux façades modernes, UNIVERS GLASS conçoit et installe des solutions sur mesure qui allient design, sécurité et durabilité. Professionnels ou particuliers, transformez vos projets en réalisations d'exception avec un partenaire de confiance."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/business-units/UniversGlassPage.tsx",
                                        lineNumber: 222,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col sm:flex-row gap-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: onQuoteRequest,
                                            className: "px-8 py-4 text-lg flex items-center justify-center gap-3 bg-[rgb(14,165,233)] text-[rgb(255,255,255)] transition-all",
                                            style: {
                                                border: "none"
                                            },
                                            onMouseEnter: (e)=>{
                                                e.currentTarget.style.backgroundColor = "white";
                                                e.currentTarget.style.color = "#0EA5E9";
                                                e.currentTarget.style.border = "2px solid #0EA5E9";
                                            },
                                            onMouseLeave: (e)=>{
                                                e.currentTarget.style.backgroundColor = "rgb(14,165,233)";
                                                e.currentTarget.style.color = "rgb(255,255,255)";
                                                e.currentTarget.style.border = "none";
                                            },
                                            children: [
                                                "Demande une Étude technique",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                    className: "fa-solid fa-chevron-right"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/business-units/UniversGlassPage.tsx",
                                                    lineNumber: 260,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/business-units/UniversGlassPage.tsx",
                                            lineNumber: 240,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/business-units/UniversGlassPage.tsx",
                                        lineNumber: 239,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/business-units/UniversGlassPage.tsx",
                                lineNumber: 202,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-blue-50 p-4 lg:hidden",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-lg mb-3",
                                                style: {
                                                    fontFamily: "Montserrat",
                                                    color: "#000000"
                                                },
                                                children: "Nos catégories de produits"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/business-units/UniversGlassPage.tsx",
                                                lineNumber: 268,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-4 gap-2",
                                                children: productCategories.map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>{
                                                            setActiveCategory(category.key);
                                                            onNavigate("all-products", category.key);
                                                        },
                                                        className: "flex flex-col items-center text-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-16 h-16 rounded-full overflow-hidden bg-gray-100 flex-shrink-0",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$figma$2f$ImageWithFallback$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["ImageWithFallback"], {
                                                                    src: category.image,
                                                                    alt: category.name,
                                                                    className: "w-full h-full object-cover"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/business-units/UniversGlassPage.tsx",
                                                                    lineNumber: 288,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/business-units/UniversGlassPage.tsx",
                                                                lineNumber: 287,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-xs",
                                                                style: {
                                                                    fontFamily: "Montserrat",
                                                                    color: "#000000"
                                                                },
                                                                children: category.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/business-units/UniversGlassPage.tsx",
                                                                lineNumber: 294,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, category.key, true, {
                                                        fileName: "[project]/src/components/business-units/UniversGlassPage.tsx",
                                                        lineNumber: 279,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/business-units/UniversGlassPage.tsx",
                                                lineNumber: 277,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/business-units/UniversGlassPage.tsx",
                                        lineNumber: 267,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "hidden lg:block lg:max-w-3xl",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-blue-50 self-start pt-[24px] pr-[24px] pb-[46px] pl-[24px]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-xl mb-4 text-center",
                                                    style: {
                                                        fontFamily: "Montserrat",
                                                        color: "#000000"
                                                    },
                                                    children: "Nos catégories de produits"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/business-units/UniversGlassPage.tsx",
                                                    lineNumber: 312,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-4 gap-4 mb-6",
                                                    children: productCategories.map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            onClick: ()=>{
                                                                setActiveCategory(category.key);
                                                                onNavigate("all-products", category.key);
                                                            },
                                                            className: "group cursor-pointer flex flex-col items-center text-center",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "w-24 h-24 rounded-full overflow-hidden mb-3 bg-gray-100 flex-shrink-0 transition-transform duration-300 group-hover:scale-110",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$figma$2f$ImageWithFallback$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["ImageWithFallback"], {
                                                                        src: category.image,
                                                                        alt: category.name,
                                                                        className: "w-full h-full object-cover"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/business-units/UniversGlassPage.tsx",
                                                                        lineNumber: 334,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/business-units/UniversGlassPage.tsx",
                                                                    lineNumber: 333,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                    className: "text-sm mb-1",
                                                                    style: {
                                                                        fontFamily: "Montserrat",
                                                                        color: "#000000"
                                                                    },
                                                                    children: category.name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/business-units/UniversGlassPage.tsx",
                                                                    lineNumber: 340,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, category.key, true, {
                                                            fileName: "[project]/src/components/business-units/UniversGlassPage.tsx",
                                                            lineNumber: 325,
                                                            columnNumber: 23
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/business-units/UniversGlassPage.tsx",
                                                    lineNumber: 323,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-center mb-8"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/business-units/UniversGlassPage.tsx",
                                                    lineNumber: 359,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/business-units/UniversGlassPage.tsx",
                                            lineNumber: 311,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/business-units/UniversGlassPage.tsx",
                                        lineNumber: 309,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute -bottom-6 -right-6 bg-white rounded-lg p-6 shadow-xl lg:hidden",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-3xl font-bold",
                                                style: {
                                                    color: "#0EA5E9"
                                                },
                                                children: "500+"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/business-units/UniversGlassPage.tsx",
                                                lineNumber: 385,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm",
                                                style: {
                                                    color: "#6E6E6E"
                                                },
                                                children: "Projets réalisés"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/business-units/UniversGlassPage.tsx",
                                                lineNumber: 391,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs text-gray-500",
                                                children: "Depuis 1994"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/business-units/UniversGlassPage.tsx",
                                                lineNumber: 397,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/business-units/UniversGlassPage.tsx",
                                        lineNumber: 384,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "hidden lg:block absolute -bottom-4 -right-4 bg-white rounded-lg p-4 shadow-xl",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-2xl font-bold",
                                                style: {
                                                    color: "#0EA5E9"
                                                },
                                                children: "500+"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/business-units/UniversGlassPage.tsx",
                                                lineNumber: 404,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm",
                                                style: {
                                                    color: "#6E6E6E"
                                                },
                                                children: "Projets réalisés"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/business-units/UniversGlassPage.tsx",
                                                lineNumber: 410,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs text-gray-500",
                                                children: "Depuis 1994"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/business-units/UniversGlassPage.tsx",
                                                lineNumber: 416,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/business-units/UniversGlassPage.tsx",
                                        lineNumber: 403,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/business-units/UniversGlassPage.tsx",
                                lineNumber: 265,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/business-units/UniversGlassPage.tsx",
                        lineNumber: 201,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/business-units/UniversGlassPage.tsx",
                    lineNumber: 200,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/business-units/UniversGlassPage.tsx",
                lineNumber: 199,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-12  bg-gray-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto px-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-4xl mx-auto p-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-3xl mb-3 text-center",
                                style: {
                                    fontFamily: "Montserrat",
                                    color: "#0EA5E9"
                                },
                                children: "Transparence, Résistance, Modernité"
                            }, void 0, false, {
                                fileName: "[project]/src/components/business-units/UniversGlassPage.tsx",
                                lineNumber: 429,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-2xl mb-6 text-center",
                                style: {
                                    fontFamily: "Montserrat",
                                    color: "#6E6E6E"
                                },
                                children: "L'excellence dans la précision et la finition."
                            }, void 0, false, {
                                fileName: "[project]/src/components/business-units/UniversGlassPage.tsx",
                                lineNumber: 439,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4 mb-8",
                                style: {
                                    color: "#6E6E6E",
                                    textAlign: "justify"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "Véritable symbole de la modernité du Groupe FIMA, UNIVERS GLASS offre des solutions techniques et esthétiques parfaitement adaptées aux exigences du marché contemporain."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/business-units/UniversGlassPage.tsx",
                                        lineNumber: 453,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "Nous réalisons des ouvrages sur mesure : façades vitrées, portes coulissantes, garde-corps, vitrines, fenêtres et cloisons en aluminium, alliant élégance et performance."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/business-units/UniversGlassPage.tsx",
                                        lineNumber: 459,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "Nos installations reposent sur l’utilisation de verres trempés, laqués ou double vitrage, associés à des profilés aluminium de haute qualité, garantissant isolation, sécurité et design moderne."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/business-units/UniversGlassPage.tsx",
                                        lineNumber: 465,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-center italic",
                                        style: {
                                            color: "#0EA5E9",
                                            fontFamily: "Montserrat",
                                            textAlign: "justify"
                                        },
                                        children: "Alliant la maîtrise technique à une finition irréprochable, FIMA Vitrerie & Aluminium redéfinit les standards de la construction moderne en Afrique."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/business-units/UniversGlassPage.tsx",
                                        lineNumber: 472,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/business-units/UniversGlassPage.tsx",
                                lineNumber: 449,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 gap-6 mb-12",
                                children: expertisePoints.map((point, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-4 p-4 bg-blue-50 rounded-lg",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-16 h-16 rounded-full flex items-center justify-center text-white flex-shrink-0",
                                                style: {
                                                    backgroundColor: "#0EA5E9"
                                                },
                                                children: point.icon
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/business-units/UniversGlassPage.tsx",
                                                lineNumber: 494,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "font-semibold mb-1",
                                                        style: {
                                                            color: "#0EA5E9",
                                                            fontFamily: "Montserrat"
                                                        },
                                                        children: point.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/business-units/UniversGlassPage.tsx",
                                                        lineNumber: 501,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-sm",
                                                        style: {
                                                            color: "#6E6E6E"
                                                        },
                                                        children: point.description
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/business-units/UniversGlassPage.tsx",
                                                        lineNumber: 510,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/business-units/UniversGlassPage.tsx",
                                                lineNumber: 500,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, index, true, {
                                        fileName: "[project]/src/components/business-units/UniversGlassPage.tsx",
                                        lineNumber: 490,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/business-units/UniversGlassPage.tsx",
                                lineNumber: 488,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-12",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-2xl mb-6 text-center",
                                        style: {
                                            fontFamily: "Montserrat",
                                            color: "#0EA5E9"
                                        },
                                        children: "Caractéristiques techniques"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/business-units/UniversGlassPage.tsx",
                                        lineNumber: 523,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative overflow-hidden p-4 bg-white border-2",
                                                style: {
                                                    borderColor: "#0EA5E9"
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "text-sm font-semibold mb-3",
                                                            style: {
                                                                fontFamily: "Montserrat",
                                                                color: "#0EA5E9"
                                                            },
                                                            children: "Profilés Aluminium"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/business-units/UniversGlassPage.tsx",
                                                            lineNumber: 543,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                            className: "space-y-1 flex flex-col items-center",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    className: "flex items-center gap-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                            className: "fa-solid fa-check text-xs flex-shrink-0",
                                                                            style: {
                                                                                color: "#0EA5E9"
                                                                            }
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/business-units/UniversGlassPage.tsx",
                                                                            lineNumber: 551,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-xs",
                                                                            style: {
                                                                                color: "#0EA5E9"
                                                                            },
                                                                            children: "Série 40-50-60mm"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/business-units/UniversGlassPage.tsx",
                                                                            lineNumber: 552,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/business-units/UniversGlassPage.tsx",
                                                                    lineNumber: 550,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    className: "flex items-center gap-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                            className: "fa-solid fa-check text-xs flex-shrink-0",
                                                                            style: {
                                                                                color: "#0EA5E9"
                                                                            }
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/business-units/UniversGlassPage.tsx",
                                                                            lineNumber: 557,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-xs",
                                                                            style: {
                                                                                color: "#0EA5E9"
                                                                            },
                                                                            children: "Rupture thermique"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/business-units/UniversGlassPage.tsx",
                                                                            lineNumber: 558,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/business-units/UniversGlassPage.tsx",
                                                                    lineNumber: 556,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    className: "flex items-center gap-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                            className: "fa-solid fa-check text-xs flex-shrink-0",
                                                                            style: {
                                                                                color: "#0EA5E9"
                                                                            }
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/business-units/UniversGlassPage.tsx",
                                                                            lineNumber: 563,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-xs",
                                                                            style: {
                                                                                color: "#0EA5E9"
                                                                            },
                                                                            children: "Anodisation classe 1"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/business-units/UniversGlassPage.tsx",
                                                                            lineNumber: 564,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/business-units/UniversGlassPage.tsx",
                                                                    lineNumber: 562,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    className: "flex items-center gap-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                            className: "fa-solid fa-check text-xs flex-shrink-0",
                                                                            style: {
                                                                                color: "#0EA5E9"
                                                                            }
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/business-units/UniversGlassPage.tsx",
                                                                            lineNumber: 569,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-xs",
                                                                            style: {
                                                                                color: "#0EA5E9"
                                                                            },
                                                                            children: "Powdercoating"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/business-units/UniversGlassPage.tsx",
                                                                            lineNumber: 570,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/business-units/UniversGlassPage.tsx",
                                                                    lineNumber: 568,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/business-units/UniversGlassPage.tsx",
                                                            lineNumber: 549,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/business-units/UniversGlassPage.tsx",
                                                    lineNumber: 542,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/business-units/UniversGlassPage.tsx",
                                                lineNumber: 536,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative overflow-hidden p-4 bg-white border-2",
                                                style: {
                                                    borderColor: "#0EA5E9"
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-center text-[#B5C233]",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "text-sm font-semibold mb-3",
                                                            style: {
                                                                fontFamily: "Montserrat",
                                                                color: "#0EA5E9"
                                                            },
                                                            children: "Vitrages"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/business-units/UniversGlassPage.tsx",
                                                            lineNumber: 586,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                            className: "space-y-1 flex flex-col items-center",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    className: "flex items-center gap-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                            className: "fa-solid fa-check text-xs flex-shrink-0",
                                                                            style: {
                                                                                color: "#0EA5E9"
                                                                            }
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/business-units/UniversGlassPage.tsx",
                                                                            lineNumber: 594,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-xs",
                                                                            style: {
                                                                                color: "#0EA5E9"
                                                                            },
                                                                            children: "Double vitrage"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/business-units/UniversGlassPage.tsx",
                                                                            lineNumber: 595,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/business-units/UniversGlassPage.tsx",
                                                                    lineNumber: 593,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    className: "flex items-center gap-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                            className: "fa-solid fa-check text-xs flex-shrink-0",
                                                                            style: {
                                                                                color: "#0EA5E9"
                                                                            }
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/business-units/UniversGlassPage.tsx",
                                                                            lineNumber: 600,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-xs",
                                                                            style: {
                                                                                color: "#0EA5E9"
                                                                            },
                                                                            children: "Verres sécurit"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/business-units/UniversGlassPage.tsx",
                                                                            lineNumber: 601,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/business-units/UniversGlassPage.tsx",
                                                                    lineNumber: 599,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    className: "flex items-center gap-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                            className: "fa-solid fa-check text-xs flex-shrink-0",
                                                                            style: {
                                                                                color: "#0EA5E9"
                                                                            }
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/business-units/UniversGlassPage.tsx",
                                                                            lineNumber: 606,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-xs",
                                                                            style: {
                                                                                color: "#0EA5E9"
                                                                            },
                                                                            children: "Triplex"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/business-units/UniversGlassPage.tsx",
                                                                            lineNumber: 607,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/business-units/UniversGlassPage.tsx",
                                                                    lineNumber: 605,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    className: "flex items-center gap-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                            className: "fa-solid fa-check text-xs flex-shrink-0",
                                                                            style: {
                                                                                color: "#0EA5E9"
                                                                            }
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/business-units/UniversGlassPage.tsx",
                                                                            lineNumber: 612,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-xs",
                                                                            style: {
                                                                                color: "#0EA5E9"
                                                                            },
                                                                            children: "Isolation thermique"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/business-units/UniversGlassPage.tsx",
                                                                            lineNumber: 613,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/business-units/UniversGlassPage.tsx",
                                                                    lineNumber: 611,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/business-units/UniversGlassPage.tsx",
                                                            lineNumber: 592,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/business-units/UniversGlassPage.tsx",
                                                    lineNumber: 585,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/business-units/UniversGlassPage.tsx",
                                                lineNumber: 579,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative overflow-hidden p-4 bg-white border-2",
                                                style: {
                                                    borderColor: "#0EA5E9"
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "text-sm font-semibold mb-3",
                                                            style: {
                                                                fontFamily: "Montserrat",
                                                                color: "#0EA5E9"
                                                            },
                                                            children: "Quincaillerie"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/business-units/UniversGlassPage.tsx",
                                                            lineNumber: 629,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                            className: "space-y-1 flex flex-col items-center",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    className: "flex items-center gap-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                            className: "fa-solid fa-check text-xs flex-shrink-0",
                                                                            style: {
                                                                                color: "#0EA5E9"
                                                                            }
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/business-units/UniversGlassPage.tsx",
                                                                            lineNumber: 637,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-xs",
                                                                            style: {
                                                                                color: "#0EA5E9"
                                                                            },
                                                                            children: "Ferrures européennes"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/business-units/UniversGlassPage.tsx",
                                                                            lineNumber: 638,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/business-units/UniversGlassPage.tsx",
                                                                    lineNumber: 636,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    className: "flex items-center gap-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                            className: "fa-solid fa-check text-xs flex-shrink-0",
                                                                            style: {
                                                                                color: "#0EA5E9"
                                                                            }
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/business-units/UniversGlassPage.tsx",
                                                                            lineNumber: 643,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-xs",
                                                                            style: {
                                                                                color: "#0EA5E9"
                                                                            },
                                                                            children: "Serrures multipoints"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/business-units/UniversGlassPage.tsx",
                                                                            lineNumber: 644,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/business-units/UniversGlassPage.tsx",
                                                                    lineNumber: 642,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    className: "flex items-center gap-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                            className: "fa-solid fa-check text-xs flex-shrink-0",
                                                                            style: {
                                                                                color: "#0EA5E9"
                                                                            }
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/business-units/UniversGlassPage.tsx",
                                                                            lineNumber: 649,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-xs",
                                                                            style: {
                                                                                color: "#0EA5E9"
                                                                            },
                                                                            children: "Ventilation intégrée"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/business-units/UniversGlassPage.tsx",
                                                                            lineNumber: 650,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/business-units/UniversGlassPage.tsx",
                                                                    lineNumber: 648,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    className: "flex items-center gap-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                            className: "fa-solid fa-check text-xs flex-shrink-0",
                                                                            style: {
                                                                                color: "#0EA5E9"
                                                                            }
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/business-units/UniversGlassPage.tsx",
                                                                            lineNumber: 655,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-xs",
                                                                            style: {
                                                                                color: "#0EA5E9"
                                                                            },
                                                                            children: "Accessoires design"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/business-units/UniversGlassPage.tsx",
                                                                            lineNumber: 656,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/business-units/UniversGlassPage.tsx",
                                                                    lineNumber: 654,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/business-units/UniversGlassPage.tsx",
                                                            lineNumber: 635,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/business-units/UniversGlassPage.tsx",
                                                    lineNumber: 628,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/business-units/UniversGlassPage.tsx",
                                                lineNumber: 622,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative overflow-hidden p-4 bg-white border-2",
                                                style: {
                                                    borderColor: "#0EA5E9"
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "text-sm font-semibold mb-3",
                                                            style: {
                                                                fontFamily: "Montserrat",
                                                                color: "#0EA5E9"
                                                            },
                                                            children: "Finitions"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/business-units/UniversGlassPage.tsx",
                                                            lineNumber: 672,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                            className: "space-y-1 flex flex-col items-center",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    className: "flex items-center gap-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                            className: "fa-solid fa-check text-xs flex-shrink-0",
                                                                            style: {
                                                                                color: "#0EA5E9"
                                                                            }
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/business-units/UniversGlassPage.tsx",
                                                                            lineNumber: 680,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-xs",
                                                                            style: {
                                                                                color: "#0EA5E9"
                                                                            },
                                                                            children: "Joints EPDM"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/business-units/UniversGlassPage.tsx",
                                                                            lineNumber: 681,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/business-units/UniversGlassPage.tsx",
                                                                    lineNumber: 679,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    className: "flex items-center gap-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                            className: "fa-solid fa-check text-xs flex-shrink-0",
                                                                            style: {
                                                                                color: "#0EA5E9"
                                                                            }
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/business-units/UniversGlassPage.tsx",
                                                                            lineNumber: 686,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-xs",
                                                                            style: {
                                                                                color: "#0EA5E9"
                                                                            },
                                                                            children: "Calfeutrements"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/business-units/UniversGlassPage.tsx",
                                                                            lineNumber: 687,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/business-units/UniversGlassPage.tsx",
                                                                    lineNumber: 685,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    className: "flex items-center gap-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                            className: "fa-solid fa-check text-xs flex-shrink-0",
                                                                            style: {
                                                                                color: "#0EA5E9"
                                                                            }
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/business-units/UniversGlassPage.tsx",
                                                                            lineNumber: 692,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-xs",
                                                                            style: {
                                                                                color: "#0EA5E9"
                                                                            },
                                                                            children: "Sur-mesure"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/business-units/UniversGlassPage.tsx",
                                                                            lineNumber: 693,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/business-units/UniversGlassPage.tsx",
                                                                    lineNumber: 691,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    className: "flex items-center gap-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                            className: "fa-solid fa-check text-xs flex-shrink-0",
                                                                            style: {
                                                                                color: "#0EA5E9"
                                                                            }
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/business-units/UniversGlassPage.tsx",
                                                                            lineNumber: 698,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-xs",
                                                                            style: {
                                                                                color: "#0EA5E9"
                                                                            },
                                                                            children: "Couleurs RAL"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/business-units/UniversGlassPage.tsx",
                                                                            lineNumber: 699,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/business-units/UniversGlassPage.tsx",
                                                                    lineNumber: 697,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/business-units/UniversGlassPage.tsx",
                                                            lineNumber: 678,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/business-units/UniversGlassPage.tsx",
                                                    lineNumber: 671,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/business-units/UniversGlassPage.tsx",
                                                lineNumber: 665,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/business-units/UniversGlassPage.tsx",
                                        lineNumber: 534,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/business-units/UniversGlassPage.tsx",
                                lineNumber: 522,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/business-units/UniversGlassPage.tsx",
                        lineNumber: 428,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/business-units/UniversGlassPage.tsx",
                    lineNumber: 427,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/business-units/UniversGlassPage.tsx",
                lineNumber: 426,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-16",
                id: "nos-references",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto px-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center mb-12",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-3xl font-bold mb-4",
                                    style: {
                                        fontFamily: "Montserrat",
                                        color: "#0EA5E9"
                                    },
                                    children: "Nos références marquantes"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/business-units/UniversGlassPage.tsx",
                                    lineNumber: 716,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-lg max-w-2xl mx-auto",
                                    style: {
                                        color: "#6E6E6E"
                                    },
                                    children: "Découvrez quelques-uns de nos projets emblématiques qui témoignent de notre expertise technique et de notre capacité à relever les défis les plus complexes."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/business-units/UniversGlassPage.tsx",
                                    lineNumber: 725,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/business-units/UniversGlassPage.tsx",
                            lineNumber: 715,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
                            children: references.map((reference)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "aspect-video relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$figma$2f$ImageWithFallback$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["ImageWithFallback"], {
                                                    src: reference.image,
                                                    alt: reference.title,
                                                    className: "w-full h-full object-cover"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/business-units/UniversGlassPage.tsx",
                                                    lineNumber: 743,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute top-4 left-4",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "px-3 py-1 rounded-full text-xs font-bold text-white",
                                                        style: {
                                                            backgroundColor: "#0EA5E9"
                                                        },
                                                        children: reference.category
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/business-units/UniversGlassPage.tsx",
                                                        lineNumber: 749,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/business-units/UniversGlassPage.tsx",
                                                    lineNumber: 748,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute bottom-4 right-4 bg-white rounded-lg px-3 py-1",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs font-bold text-blue-600",
                                                        children: reference.surface
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/business-units/UniversGlassPage.tsx",
                                                        lineNumber: 757,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/business-units/UniversGlassPage.tsx",
                                                    lineNumber: 756,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/business-units/UniversGlassPage.tsx",
                                            lineNumber: 742,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "font-bold text-lg mb-2",
                                                    style: {
                                                        color: "#000000"
                                                    },
                                                    children: reference.title
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/business-units/UniversGlassPage.tsx",
                                                    lineNumber: 763,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm mb-4",
                                                    style: {
                                                        color: "#6E6E6E"
                                                    },
                                                    children: reference.description
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/business-units/UniversGlassPage.tsx",
                                                    lineNumber: 769,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "flex items-center gap-2 transition-colors",
                                                    style: {
                                                        color: "#0EA5E9"
                                                    },
                                                    onMouseEnter: (e)=>e.currentTarget.style.color = "#0c93d1",
                                                    onMouseLeave: (e)=>e.currentTarget.style.color = "#0EA5E9",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                            className: "fa-solid fa-eye text-sm"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/business-units/UniversGlassPage.tsx",
                                                            lineNumber: 785,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-sm font-medium",
                                                            children: "Voir le projet"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/business-units/UniversGlassPage.tsx",
                                                            lineNumber: 786,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/business-units/UniversGlassPage.tsx",
                                                    lineNumber: 775,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/business-units/UniversGlassPage.tsx",
                                            lineNumber: 762,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, reference.id, true, {
                                    fileName: "[project]/src/components/business-units/UniversGlassPage.tsx",
                                    lineNumber: 738,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/business-units/UniversGlassPage.tsx",
                            lineNumber: 736,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center mt-12",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "px-8 py-3 rounded-xl font-semibold text-white transition-colors",
                                style: {
                                    backgroundColor: "#0EA5E9"
                                },
                                onMouseEnter: (e)=>e.currentTarget.style.backgroundColor = "#0891c7",
                                onMouseLeave: (e)=>e.currentTarget.style.backgroundColor = "#0EA5E9",
                                children: "Voir toutes nos références"
                            }, void 0, false, {
                                fileName: "[project]/src/components/business-units/UniversGlassPage.tsx",
                                lineNumber: 796,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/business-units/UniversGlassPage.tsx",
                            lineNumber: 795,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/business-units/UniversGlassPage.tsx",
                    lineNumber: 714,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/business-units/UniversGlassPage.tsx",
                lineNumber: 713,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-16 text-white",
                style: {
                    background: "linear-gradient(to right, #0EA5E9, #0c93d1)"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto px-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-3xl font-bold mb-4",
                                style: {
                                    fontFamily: "Montserrat"
                                },
                                children: "Un projet technique à réaliser ?"
                            }, void 0, false, {
                                fileName: "[project]/src/components/business-units/UniversGlassPage.tsx",
                                lineNumber: 824,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xl mb-8 max-w-2xl mx-auto opacity-90",
                                children: "Nos ingénieurs et techniciens sont à votre disposition pour étudier vos besoins et vous proposer la solution optimale."
                            }, void 0, false, {
                                fileName: "[project]/src/components/business-units/UniversGlassPage.tsx",
                                lineNumber: 830,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col sm:flex-row gap-4 justify-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: onQuoteRequest,
                                        className: "px-8 py-4 bg-white rounded-xl font-semibold transition-colors",
                                        style: {
                                            color: "#0EA5E9"
                                        },
                                        onMouseEnter: (e)=>e.currentTarget.style.backgroundColor = "#f3f4f6",
                                        onMouseLeave: (e)=>e.currentTarget.style.backgroundColor = "white",
                                        children: "Demander une étude technique"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/business-units/UniversGlassPage.tsx",
                                        lineNumber: 837,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "px-8 py-4 border-2 border-white text-white rounded-xl font-semibold transition-colors",
                                        onMouseEnter: (e)=>{
                                            e.currentTarget.style.backgroundColor = "white";
                                            e.currentTarget.style.color = "#0EA5E9";
                                        },
                                        onMouseLeave: (e)=>{
                                            e.currentTarget.style.backgroundColor = "transparent";
                                            e.currentTarget.style.color = "white";
                                        },
                                        children: "Contacter un expert"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/business-units/UniversGlassPage.tsx",
                                        lineNumber: 852,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/business-units/UniversGlassPage.tsx",
                                lineNumber: 836,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/business-units/UniversGlassPage.tsx",
                        lineNumber: 823,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/business-units/UniversGlassPage.tsx",
                    lineNumber: 822,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/business-units/UniversGlassPage.tsx",
                lineNumber: 815,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/business-units/UniversGlassPage.tsx",
        lineNumber: 148,
        columnNumber: 5
    }, this);
}
_s(UniversGlassPage, "kKa0HbrUyJ8ufiR8R/Wjq6xBBgI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useCMSCategories$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["useCMSCategories"]
    ];
});
_c = UniversGlassPage;
var _c;
__turbopack_context__.k.register(_c, "UniversGlassPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_components_715ad293._.js.map