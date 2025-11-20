(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/ProductCard.tsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductCard",
    ()=>ProductCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@fortawesome/react-fontawesome/dist/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@fortawesome/free-solid-svg-icons/index.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$AppContext$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/AppContext.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$figma$2f$ImageWithFallback$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/figma/ImageWithFallback.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$currency$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/currency.ts [client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
function ProductCard({ id, image, title, description, price, originalPrice, discount, badge, category, sourceCurrency, isCustom, onProductClick }) {
    _s();
    const { addToFavorites, removeFromFavorites, isFavorite } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$AppContext$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["useApp"])();
    const product = {
        id,
        image,
        title,
        description,
        price,
        originalPrice,
        discount,
        badge,
        category
    };
    const productIsFavorite = isFavorite(id);
    const handleFavoriteClick = (e)=>{
        e.stopPropagation(); // Empêcher le clic sur la carte
        if (productIsFavorite) {
            removeFromFavorites(id);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["toast"].success('Retiré des favoris');
        } else {
            addToFavorites(product);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["toast"].success('Ajouté aux favoris !');
        }
    };
    const handleCardClick = ()=>{
        onProductClick(product);
    };
    // Convertir les prix dans la devise sélectionnée
    const displayPrice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$currency$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["smartConvertPrice"])(price, sourceCurrency);
    const displayOriginalPrice = originalPrice ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$currency$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["smartConvertPrice"])(originalPrice, sourceCurrency) : null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer",
        onClick: handleCardClick,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$figma$2f$ImageWithFallback$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["ImageWithFallback"], {
                        src: image || 'https://images.unsplash.com/photo-1648634158203-199accfd7afc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtYXR0cmVzcyUyMGJlZHJvb218ZW58MXx8fHwxNzU1OTg4NDUyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
                        alt: title,
                        className: "w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProductCard.tsx",
                        lineNumber: 79,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-4 left-4 right-4 flex justify-between items-start",
                        children: [
                            (badge || discount) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: badge ? "fima-badge-green" : "fima-badge-red",
                                children: badge || `${discount} OFF`
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProductCard.tsx",
                                lineNumber: 88,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleFavoriteClick,
                                className: `p-2 backdrop-blur-sm transition-all ${productIsFavorite ? 'bg-red-500 text-white' : 'bg-white/80 text-gray-600 hover:bg-white hover:text-red-500'}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["faHeart"],
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProductCard.tsx",
                                    lineNumber: 101,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProductCard.tsx",
                                lineNumber: 93,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ProductCard.tsx",
                        lineNumber: 86,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ProductCard.tsx",
                lineNumber: 78,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 md:p-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "mb-2 transition-colors",
                        style: {
                            fontFamily: 'Montserrat',
                            color: '#000000'
                        },
                        onMouseEnter: (e)=>e.currentTarget.style.color = '#B5C233',
                        onMouseLeave: (e)=>e.currentTarget.style.color = '#000000',
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProductCard.tsx",
                        lineNumber: 107,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm mb-3 md:mb-4 line-clamp-2",
                        style: {
                            color: '#6E6E6E'
                        },
                        children: description
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProductCard.tsx",
                        lineNumber: 116,
                        columnNumber: 9
                    }, this),
                    !isCustom ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between mb-3 md:mb-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xl font-bold",
                                    style: {
                                        color: '#E30613'
                                    },
                                    children: displayPrice
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProductCard.tsx",
                                    lineNumber: 126,
                                    columnNumber: 15
                                }, this),
                                displayOriginalPrice && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm line-through",
                                    style: {
                                        color: '#6E6E6E'
                                    },
                                    children: displayOriginalPrice
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProductCard.tsx",
                                    lineNumber: 133,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ProductCard.tsx",
                            lineNumber: 125,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProductCard.tsx",
                        lineNumber: 124,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-3 md:mb-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-sm font-semibold",
                            style: {
                                color: '#0EA5E9'
                            },
                            children: "Sur mesure - Prix sur devis"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProductCard.tsx",
                            lineNumber: 144,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProductCard.tsx",
                        lineNumber: 143,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: (e)=>{
                            e.stopPropagation();
                            onProductClick(product);
                        },
                        className: "w-full fima-btn-secondary py-3.5 md:py-3 hover:shadow-lg transition-shadow text-[rgba(81,76,76,1)] pt-[5px] pr-[17px] pb-[14px] pl-[17px]",
                        children: "Voir détails"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProductCard.tsx",
                        lineNumber: 153,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ProductCard.tsx",
                lineNumber: 106,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ProductCard.tsx",
        lineNumber: 74,
        columnNumber: 5
    }, this);
}
_s(ProductCard, "v1b8c98JQmY/yTICLVPxxcMgf0c=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$AppContext$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["useApp"]
    ];
});
_c = ProductCard;
var _c;
__turbopack_context__.k.register(_c, "ProductCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/product-filters/ProductControls.tsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductControls",
    ()=>ProductControls
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/funnel.js [client] (ecmascript) <export default as Filter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$grid$2d$3x3$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/grid-3x3.js [client] (ecmascript) <export default as Grid>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__List$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/list.js [client] (ecmascript) <export default as List>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [client] (ecmascript) <export default as Search>");
;
;
function ProductControls({ filters, setFilters, viewMode, setViewMode, sortBy, setSortBy, showFilters, setShowFilters }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col space-y-4 lg:flex-row lg:items-center lg:justify-between lg:space-y-0",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setShowFilters(!showFilters),
                        className: "lg:hidden flex items-center gap-2 px-4 py-2 border rounded-lg",
                        style: {
                            borderColor: '#C0C0C0'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__["Filter"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/product-filters/ProductControls.tsx",
                                lineNumber: 34,
                                columnNumber: 11
                            }, this),
                            "Filtres"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/product-filters/ProductControls.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex border rounded-lg",
                        style: {
                            borderColor: '#C0C0C0'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setViewMode('grid'),
                                className: `p-2 rounded-l-lg transition-colors ${viewMode === 'grid' ? 'bg-primary text-white' : 'hover:bg-gray-50'}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$grid$2d$3x3$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid$3e$__["Grid"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/product-filters/ProductControls.tsx",
                                    lineNumber: 44,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/product-filters/ProductControls.tsx",
                                lineNumber: 40,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setViewMode('list'),
                                className: `p-2 rounded-r-lg transition-colors ${viewMode === 'list' ? 'bg-primary text-white' : 'hover:bg-gray-50'}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__List$3e$__["List"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/product-filters/ProductControls.tsx",
                                    lineNumber: 50,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/product-filters/ProductControls.tsx",
                                lineNumber: 46,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/product-filters/ProductControls.tsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/product-filters/ProductControls.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col space-y-4 sm:flex-row sm:items-center sm:space-y-0 sm:gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative flex-1 sm:flex-none",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                placeholder: "Rechercher...",
                                value: filters.search,
                                onChange: (e)=>setFilters({
                                        ...filters,
                                        search: e.target.value
                                    }),
                                className: "w-full sm:w-48 lg:w-64 pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2",
                                style: {
                                    borderColor: '#C0C0C0',
                                    '--tw-ring-color': '#B5C233'
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/product-filters/ProductControls.tsx",
                                lineNumber: 59,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                className: "absolute left-3 top-2.5 w-5 h-5",
                                style: {
                                    color: '#6E6E6E'
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/product-filters/ProductControls.tsx",
                                lineNumber: 67,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/product-filters/ProductControls.tsx",
                        lineNumber: 58,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        value: sortBy,
                        onChange: (e)=>setSortBy(e.target.value),
                        className: "w-full sm:w-auto px-4 py-2 border rounded-lg",
                        style: {
                            borderColor: '#C0C0C0'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "name",
                                children: "Trier par nom"
                            }, void 0, false, {
                                fileName: "[project]/src/components/product-filters/ProductControls.tsx",
                                lineNumber: 77,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "price-low",
                                children: "Prix croissant"
                            }, void 0, false, {
                                fileName: "[project]/src/components/product-filters/ProductControls.tsx",
                                lineNumber: 78,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "price-high",
                                children: "Prix décroissant"
                            }, void 0, false, {
                                fileName: "[project]/src/components/product-filters/ProductControls.tsx",
                                lineNumber: 79,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/product-filters/ProductControls.tsx",
                        lineNumber: 71,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/product-filters/ProductControls.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/product-filters/ProductControls.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
_c = ProductControls;
var _c;
__turbopack_context__.k.register(_c, "ProductControls");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/filters.ts [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "businessUnits",
    ()=>businessUnits,
    "categories",
    ()=>categories,
    "firmness",
    ()=>firmness,
    "materials",
    ()=>materials
]);
const categories = [
    {
        name: "Tous",
        value: "all"
    },
    // FIMA COUCHAGE
    {
        name: "Matelas",
        value: "matelas",
        business: "fima-couchage"
    },
    {
        name: "Sommiers",
        value: "sommiers",
        business: "fima-couchage"
    },
    {
        name: "Oreillers",
        value: "oreillers",
        business: "fima-couchage"
    },
    {
        name: "Linge de lit",
        value: "linge-de-lit",
        business: "fima-couchage"
    },
    {
        name: "Accessoires literie",
        value: "accessoires-literie",
        business: "fima-couchage"
    },
    // FIMA DESIGN
    {
        name: "Menuiserie",
        value: "menuiserie",
        business: "fima-design"
    },
    {
        name: "Ameublement",
        value: "ameublement",
        business: "fima-design"
    },
    {
        name: "Cuisines",
        value: "cuisines",
        business: "fima-design"
    },
    {
        name: "Dressings",
        value: "dressings",
        business: "fima-design"
    },
    {
        name: "Aménagements sur mesure",
        value: "amenagements-mesure",
        business: "fima-design"
    },
    // UNIVERS GLASS
    {
        name: "Vitrerie",
        value: "vitrerie",
        business: "univers-glass"
    },
    {
        name: "Menuiserie Aluminium",
        value: "menuiserie-aluminium",
        business: "univers-glass"
    },
    {
        name: "Fenêtres",
        value: "fenetres",
        business: "univers-glass"
    },
    {
        name: "Portes",
        value: "portes",
        business: "univers-glass"
    },
    {
        name: "Cloisons",
        value: "cloisons",
        business: "univers-glass"
    }
];
const businessUnits = [
    {
        name: "Tous les métiers",
        value: "all"
    },
    {
        name: "FIMA Couchage",
        value: "fima-couchage",
        color: "#B5C233"
    },
    {
        name: "FIMA Design",
        value: "fima-design",
        color: "#6E6E6E"
    },
    {
        name: "UNIVERS GLASS",
        value: "univers-glass",
        color: "#0EA5E9"
    }
];
const firmness = [
    {
        name: "Tous",
        value: "all"
    },
    {
        name: "Moelleux",
        value: "Moelleux"
    },
    {
        name: "Médium",
        value: "Médium"
    },
    {
        name: "Ferme",
        value: "Ferme"
    }
];
const materials = [
    {
        name: "Tous",
        value: "all"
    },
    // FIMA COUCHAGE
    {
        name: "Ressorts",
        value: "Ressorts"
    },
    {
        name: "Mémoire de forme",
        value: "Mémoire de forme"
    },
    {
        name: "Latex",
        value: "Latex"
    },
    {
        name: "Hybride",
        value: "Hybride"
    },
    {
        name: "Plumes",
        value: "Plumes"
    },
    {
        name: "Coton",
        value: "Coton"
    },
    // FIMA DESIGN
    {
        name: "Chêne massif",
        value: "Chêne massif"
    },
    {
        name: "Noyer massif",
        value: "Noyer massif"
    },
    {
        name: "MDF laqué",
        value: "MDF laqué"
    },
    {
        name: "Chêne laqué",
        value: "Chêne laqué"
    },
    {
        name: "Laque + Quartz",
        value: "Laque + Quartz"
    },
    {
        name: "Mélaminé",
        value: "Mélaminé"
    },
    {
        name: "Bois",
        value: "Bois"
    },
    // UNIVERS GLASS
    {
        name: "Verre sécurit",
        value: "Verre sécurit"
    },
    {
        name: "Verre feuilleté",
        value: "Verre feuilleté"
    },
    {
        name: "Aluminium",
        value: "Aluminium"
    },
    {
        name: "Alu + Verre",
        value: "Alu + Verre"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/product-filters/FilterSidebar.tsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FilterSidebar",
    ()=>FilterSidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$filters$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/filters.ts [client] (ecmascript)");
;
;
;
function FilterSidebar({ filters, setFilters, showFilters, setShowFilters, categories }) {
    const FilterSection = ({ title, options, filterKey, name })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                    className: "mb-3",
                    style: {
                        color: "#6E6E6E"
                    },
                    children: title
                }, void 0, false, {
                    fileName: "[project]/src/components/product-filters/FilterSidebar.tsx",
                    lineNumber: 35,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-2",
                    children: options.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "flex items-center gap-2 cursor-pointer",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "radio",
                                    name: name,
                                    value: option.value,
                                    checked: filters[filterKey] === option.value,
                                    onChange: (e)=>setFilters({
                                            ...filters,
                                            [filterKey]: e.target.value
                                        }),
                                    className: "text-primary focus:ring-primary"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/product-filters/FilterSidebar.tsx",
                                    lineNumber: 42,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm",
                                    style: {
                                        color: "#6E6E6E"
                                    },
                                    children: option.name
                                }, void 0, false, {
                                    fileName: "[project]/src/components/product-filters/FilterSidebar.tsx",
                                    lineNumber: 55,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, option.value, true, {
                            fileName: "[project]/src/components/product-filters/FilterSidebar.tsx",
                            lineNumber: 38,
                            columnNumber: 11
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/product-filters/FilterSidebar.tsx",
                    lineNumber: 36,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/product-filters/FilterSidebar.tsx",
            lineNumber: 34,
            columnNumber: 5
        }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            showFilters && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "lg:hidden fixed inset-0 z-50",
                style: {
                    backgroundColor: "rgba(181, 194, 51, 0.2)"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute left-0 w-80 max-w-[85vw] bg-white shadow-xl overflow-hidden flex flex-col",
                    style: {
                        top: "max(env(safe-area-inset-top, 0px), 20px)",
                        bottom: "env(safe-area-inset-bottom, 0px)",
                        height: "calc(100vh - max(env(safe-area-inset-top, 0px), 20px) - env(safe-area-inset-bottom, 0px))",
                        maxHeight: "calc(100vh - max(env(safe-area-inset-top, 0px), 20px) - env(safe-area-inset-bottom, 0px))"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-shrink-0 bg-white border-b p-4 sm:p-6",
                            style: {
                                borderColor: "#f1f5f9"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg sm:text-xl font-semibold",
                                        style: {
                                            fontFamily: "Montserrat",
                                            color: "#000000"
                                        },
                                        children: "Filtres"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/product-filters/FilterSidebar.tsx",
                                        lineNumber: 88,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setShowFilters(false),
                                        className: "p-2 hover:bg-gray-100 rounded-lg transition-colors flex-shrink-0",
                                        "aria-label": "Fermer les filtres",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                            className: "w-5 h-5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/product-filters/FilterSidebar.tsx",
                                            lineNumber: 102,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/product-filters/FilterSidebar.tsx",
                                        lineNumber: 97,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/product-filters/FilterSidebar.tsx",
                                lineNumber: 87,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/product-filters/FilterSidebar.tsx",
                            lineNumber: 83,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 overflow-y-auto",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4 sm:p-6 space-y-6",
                                style: {
                                    backgroundColor: "#B5C233"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FilterSection, {
                                        title: "Catégorie",
                                        options: categories,
                                        filterKey: "category",
                                        name: "category-mobile"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/product-filters/FilterSidebar.tsx",
                                        lineNumber: 113,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FilterSection, {
                                        title: "Fermeté",
                                        options: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$filters$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["firmness"],
                                        filterKey: "firmness",
                                        name: "firmness-mobile"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/product-filters/FilterSidebar.tsx",
                                        lineNumber: 119,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FilterSection, {
                                        title: "Matériau",
                                        options: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$filters$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["materials"],
                                        filterKey: "material",
                                        name: "material-mobile"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/product-filters/FilterSidebar.tsx",
                                        lineNumber: 125,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-20"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/product-filters/FilterSidebar.tsx",
                                        lineNumber: 133,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/product-filters/FilterSidebar.tsx",
                                lineNumber: 109,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/product-filters/FilterSidebar.tsx",
                            lineNumber: 108,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-shrink-0 p-4 sm:p-6 border-t bg-white",
                            style: {
                                borderColor: "#C0C0C0"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setShowFilters(false),
                                className: "w-full py-3 px-6 rounded-lg transition-colors font-medium text-base",
                                style: {
                                    backgroundColor: "#B5C233",
                                    color: "#6E6E6E",
                                    fontFamily: "Inter",
                                    fontWeight: "500"
                                },
                                onMouseEnter: (e)=>{
                                    e.currentTarget.style.backgroundColor = "#a3b030";
                                },
                                onMouseLeave: (e)=>{
                                    e.currentTarget.style.backgroundColor = "#B5C233";
                                },
                                children: "Valider les filtres"
                            }, void 0, false, {
                                fileName: "[project]/src/components/product-filters/FilterSidebar.tsx",
                                lineNumber: 142,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/product-filters/FilterSidebar.tsx",
                            lineNumber: 138,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/product-filters/FilterSidebar.tsx",
                    lineNumber: 71,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/product-filters/FilterSidebar.tsx",
                lineNumber: 66,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: " lg:block w-64 flex-shrink-0 mr-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "sticky top-0 max-h-[calc(100vh-2rem)]",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "overflow-y-auto max-h-full space-y-6 p-6 rounded-lg",
                        style: {
                            backgroundColor: "#B5C233"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                style: {
                                    fontFamily: "Montserrat",
                                    color: "#6E6E6E"
                                },
                                children: "Filtres"
                            }, void 0, false, {
                                fileName: "[project]/src/components/product-filters/FilterSidebar.tsx",
                                lineNumber: 176,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FilterSection, {
                                title: "Catégorie",
                                options: categories,
                                filterKey: "category",
                                name: "category-desktop"
                            }, void 0, false, {
                                fileName: "[project]/src/components/product-filters/FilterSidebar.tsx",
                                lineNumber: 185,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/product-filters/FilterSidebar.tsx",
                        lineNumber: 170,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/product-filters/FilterSidebar.tsx",
                    lineNumber: 169,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/product-filters/FilterSidebar.tsx",
                lineNumber: 168,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_c = FilterSidebar;
var _c;
__turbopack_context__.k.register(_c, "FilterSidebar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
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
"[project]/src/components/AllProductsPage.tsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AllProductsPage",
    ()=>AllProductsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductCard$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ProductCard.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$product$2d$filters$2f$ProductControls$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/product-filters/ProductControls.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$product$2d$filters$2f$FilterSidebar$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/product-filters/FilterSidebar.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Breadcrumb$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Breadcrumb.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useProducts$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useProducts.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useProductCategories$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useProductCategories.ts [client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
;
function AllProductsPage({ onProductClick, onBack, initialCategory }) {
    _s();
    const [filters, setFilters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])({
        category: initialCategory || "all",
        business: "all",
        firmness: "all",
        material: "all",
        priceRange: [
            0,
            1200
        ],
        search: ""
    });
    const [viewMode, setViewMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])('grid');
    const [sortBy, setSortBy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])('name');
    const [showFilters, setShowFilters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Charger les produits depuis Supabase
    const { products: allProducts, loading, error } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useProducts$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["useProducts"])();
    // Charger les catégories depuis le CMS
    const { categories: cmsCategories, loading: categoriesLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useProductCategories$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["useProductCategories"])();
    // Construire les options de filtre à partir des catégories CMS
    // Si cmsCategories est un objet groupé par business, on l'aplatit en array
    const categoriesArray = Array.isArray(cmsCategories) ? cmsCategories : [
        ...cmsCategories['fima-couchage'] || [],
        ...cmsCategories['fima-design'] || [],
        ...cmsCategories['univers-glass'] || []
    ];
    // Trier les catégories par ordre alphabétique (A à Z)
    const sortedCategories = [
        ...categoriesArray
    ].sort((a, b)=>a.name.localeCompare(b.name, 'fr', {
            sensitivity: 'base'
        }));
    // Filtrer pour n'afficher que les catégories qui ont des produits
    const categoriesWithProducts = sortedCategories.filter((cat)=>allProducts?.some((product)=>product.category === cat.slug));
    const dynamicCategories = [
        {
            name: "Tous",
            value: "all"
        },
        ...categoriesWithProducts.map((cat)=>({
                name: cat.name,
                value: cat.slug // Utilise le slug pour matcher les produits
            }))
    ];
    // Mettre à jour les filtres quand initialCategory change
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AllProductsPage.useEffect": ()=>{
            if (initialCategory) {
                setFilters({
                    "AllProductsPage.useEffect": (prev)=>({
                            ...prev,
                            category: initialCategory
                        })
                }["AllProductsPage.useEffect"]);
            }
        }
    }["AllProductsPage.useEffect"], [
        initialCategory
    ]);
    const filteredProducts = (allProducts || []).filter((product)=>{
        const productName = product.name || product.title || '';
        const productDescription = product.description || '';
        const searchLower = filters.search.toLowerCase();
        return (filters.category === "all" || product.category === filters.category) && (filters.business === "all" || product.business === filters.business) && (filters.firmness === "all" || !product.firmness || product.firmness === filters.firmness) && (filters.material === "all" || !product.material || product.material === filters.material) && (productName.toLowerCase().includes(searchLower) || productDescription.toLowerCase().includes(searchLower));
    }).sort((a, b)=>{
        // Extraction des prix numériques pour le tri
        const aPrice = typeof a.price === 'number' ? a.price : parseInt(String(a.price).replace(/[€,\\s/m²]/g, '')) || 0;
        const bPrice = typeof b.price === 'number' ? b.price : parseInt(String(b.price).replace(/[€,\\s/m²]/g, '')) || 0;
        switch(sortBy){
            case 'price-low':
                return aPrice - bPrice;
            case 'price-high':
                return bPrice - aPrice;
            case 'name':
                const aName = a.name || a.title || '';
                const bName = b.name || b.title || '';
                return aName.localeCompare(bName);
            default:
                return 0;
        }
    });
    // États de chargement et d'erreur
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-white",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-4 py-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onBack,
                        className: "flex items-center gap-2 mb-4 text-sm hover:opacity-70",
                        style: {
                            color: '#6E6E6E'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/AllProductsPage.tsx",
                                lineNumber: 113,
                                columnNumber: 13
                            }, this),
                            "Accueil"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/AllProductsPage.tsx",
                        lineNumber: 108,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-center py-16",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-16 h-16 border-4 rounded-full animate-spin mx-auto mb-4",
                                    style: {
                                        borderColor: '#B5C233',
                                        borderTopColor: 'transparent'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/AllProductsPage.tsx",
                                    lineNumber: 119,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        color: '#6E6E6E'
                                    },
                                    children: "Chargement des produits..."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/AllProductsPage.tsx",
                                    lineNumber: 125,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/AllProductsPage.tsx",
                            lineNumber: 118,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/AllProductsPage.tsx",
                        lineNumber: 117,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/AllProductsPage.tsx",
                lineNumber: 107,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/AllProductsPage.tsx",
            lineNumber: 106,
            columnNumber: 7
        }, this);
    }
    if (error) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-white",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-4 py-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onBack,
                        className: "flex items-center gap-2 mb-4 text-sm hover:opacity-70",
                        style: {
                            color: '#6E6E6E'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/AllProductsPage.tsx",
                                lineNumber: 142,
                                columnNumber: 13
                            }, this),
                            "Accueil"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/AllProductsPage.tsx",
                        lineNumber: 137,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-center py-16",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center max-w-md",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-red-600 text-2xl",
                                        children: "⚠"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AllProductsPage.tsx",
                                        lineNumber: 149,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/AllProductsPage.tsx",
                                    lineNumber: 148,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-xl mb-2",
                                    style: {
                                        color: '#000000'
                                    },
                                    children: "Erreur de chargement"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/AllProductsPage.tsx",
                                    lineNumber: 151,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        color: '#6E6E6E'
                                    },
                                    children: error
                                }, void 0, false, {
                                    fileName: "[project]/src/components/AllProductsPage.tsx",
                                    lineNumber: 152,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/AllProductsPage.tsx",
                            lineNumber: 147,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/AllProductsPage.tsx",
                        lineNumber: 146,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/AllProductsPage.tsx",
                lineNumber: 136,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/AllProductsPage.tsx",
            lineNumber: 135,
            columnNumber: 7
        }, this);
    }
    // Déterminer le nom de la catégorie pour le breadcrumb
    const getCategoryName = ()=>{
        if (filters.category === 'all') return null;
        const category = categoriesWithProducts.find((cat)=>cat.slug === filters.category);
        return category?.name;
    };
    // Breadcrumb items
    const breadcrumbItems = [
        {
            label: 'Accueil',
            onClick: onBack
        },
        {
            label: 'Produits'
        },
        ...getCategoryName() ? [
            {
                label: getCategoryName()
            }
        ] : []
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Breadcrumb$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["Breadcrumb"], {
                items: breadcrumbItems,
                accentColor: "#B5C233"
            }, void 0, false, {
                fileName: "[project]/src/components/AllProductsPage.tsx",
                lineNumber: 177,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-4 py-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onBack,
                        className: "flex items-center gap-2 mb-4 text-sm hover:opacity-70",
                        style: {
                            color: '#6E6E6E'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/AllProductsPage.tsx",
                                lineNumber: 186,
                                columnNumber: 11
                            }, this),
                            "Accueil"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/AllProductsPage.tsx",
                        lineNumber: 181,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        style: {
                                            fontFamily: 'Montserrat',
                                            color: '#000000'
                                        },
                                        children: getCategoryName() || 'Tous nos produits'
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AllProductsPage.tsx",
                                        lineNumber: 192,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            color: '#6E6E6E'
                                        },
                                        children: [
                                            filteredProducts.length,
                                            " produits trouvés"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/AllProductsPage.tsx",
                                        lineNumber: 195,
                                        columnNumber: 13
                                    }, this),
                                    ("TURBOPACK compile-time value", "development") === 'development' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-2 inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs",
                                        style: {
                                            backgroundColor: 'rgba(14, 165, 233, 0.1)',
                                            color: '#0EA5E9'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-2 h-2 rounded-full animate-pulse",
                                                style: {
                                                    backgroundColor: '#B5C233'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/AllProductsPage.tsx",
                                                lineNumber: 202,
                                                columnNumber: 17
                                            }, this),
                                            "Produits chargés dynamiquement depuis Supabase (",
                                            allProducts.length,
                                            " total)"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/AllProductsPage.tsx",
                                        lineNumber: 201,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/AllProductsPage.tsx",
                                lineNumber: 191,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$product$2d$filters$2f$ProductControls$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["ProductControls"], {
                                filters: filters,
                                setFilters: setFilters,
                                viewMode: viewMode,
                                setViewMode: setViewMode,
                                sortBy: sortBy,
                                setSortBy: setSortBy,
                                showFilters: showFilters,
                                setShowFilters: setShowFilters
                            }, void 0, false, {
                                fileName: "[project]/src/components/AllProductsPage.tsx",
                                lineNumber: 208,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/AllProductsPage.tsx",
                        lineNumber: 190,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/AllProductsPage.tsx",
                lineNumber: 180,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-4 py-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex relative",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$product$2d$filters$2f$FilterSidebar$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["FilterSidebar"], {
                            filters: filters,
                            setFilters: setFilters,
                            showFilters: showFilters,
                            setShowFilters: setShowFilters,
                            categories: dynamicCategories
                        }, void 0, false, {
                            fileName: "[project]/src/components/AllProductsPage.tsx",
                            lineNumber: 223,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 min-w-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: viewMode === 'grid' ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6" : "space-y-4",
                                    children: filteredProducts.map((product)=>{
                                        // Mapper le produit Supabase vers le format attendu par ProductCard
                                        const productCurrency = product.currency || 'FCFA';
                                        const mappedProduct = {
                                            id: product.id,
                                            image: product.images?.[0] || '',
                                            title: product.name || product.title || '',
                                            description: product.shortDescription || product.description || '',
                                            // Passer le prix numérique et la devise source
                                            price: product.price,
                                            originalPrice: product.compareAtPrice || undefined,
                                            discount: product.discount || undefined,
                                            badge: product.badge || (product.featured ? 'FEATURED' : undefined),
                                            category: product.category,
                                            sourceCurrency: productCurrency,
                                            isCustom: product.isCustom || false
                                        };
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductCard$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["ProductCard"], {
                                            ...mappedProduct,
                                            onProductClick: ()=>onProductClick(product)
                                        }, product.id, false, {
                                            fileName: "[project]/src/components/AllProductsPage.tsx",
                                            lineNumber: 256,
                                            columnNumber: 19
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/src/components/AllProductsPage.tsx",
                                    lineNumber: 233,
                                    columnNumber: 13
                                }, this),
                                filteredProducts.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center py-12",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            color: '#6E6E6E'
                                        },
                                        children: "Aucun produit ne correspond à vos critères"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AllProductsPage.tsx",
                                        lineNumber: 267,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/AllProductsPage.tsx",
                                    lineNumber: 266,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/AllProductsPage.tsx",
                            lineNumber: 232,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/AllProductsPage.tsx",
                    lineNumber: 222,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/AllProductsPage.tsx",
                lineNumber: 221,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/AllProductsPage.tsx",
        lineNumber: 175,
        columnNumber: 5
    }, this);
}
_s(AllProductsPage, "M4NsLZZF568Ve74IP0bFS/wvw3g=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useProducts$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["useProducts"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useProductCategories$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["useProductCategories"]
    ];
});
_c = AllProductsPage;
var _c;
__turbopack_context__.k.register(_c, "AllProductsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/lucide-react/dist/esm/icons/grid-3x3.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Grid3x3
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [client] (ecmascript)");
;
const __iconNode = [
    [
        "rect",
        {
            width: "18",
            height: "18",
            x: "3",
            y: "3",
            rx: "2",
            key: "afitv7"
        }
    ],
    [
        "path",
        {
            d: "M3 9h18",
            key: "1pudct"
        }
    ],
    [
        "path",
        {
            d: "M3 15h18",
            key: "5xshup"
        }
    ],
    [
        "path",
        {
            d: "M9 3v18",
            key: "fh3hqa"
        }
    ],
    [
        "path",
        {
            d: "M15 3v18",
            key: "14nvp0"
        }
    ]
];
const Grid3x3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])("grid-3x3", __iconNode);
;
 //# sourceMappingURL=grid-3x3.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/grid-3x3.js [client] (ecmascript) <export default as Grid>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Grid",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$grid$2d$3x3$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$grid$2d$3x3$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/grid-3x3.js [client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/list.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>List
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M3 12h.01",
            key: "nlz23k"
        }
    ],
    [
        "path",
        {
            d: "M3 18h.01",
            key: "1tta3j"
        }
    ],
    [
        "path",
        {
            d: "M3 6h.01",
            key: "1rqtza"
        }
    ],
    [
        "path",
        {
            d: "M8 12h13",
            key: "1za7za"
        }
    ],
    [
        "path",
        {
            d: "M8 18h13",
            key: "1lx6n3"
        }
    ],
    [
        "path",
        {
            d: "M8 6h13",
            key: "ik3vkj"
        }
    ]
];
const List = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])("list", __iconNode);
;
 //# sourceMappingURL=list.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/list.js [client] (ecmascript) <export default as List>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "List",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/list.js [client] (ecmascript)");
}),
]);

//# sourceMappingURL=_0350c205._.js.map