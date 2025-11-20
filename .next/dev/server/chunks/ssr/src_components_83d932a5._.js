module.exports = [
"[project]/src/components/ProductCard.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "ProductCard",
    ()=>ProductCard
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$react$2d$fontawesome__$5b$external$5d$__$2840$fortawesome$2f$react$2d$fontawesome$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/@fortawesome/react-fontawesome [external] (@fortawesome/react-fontawesome, esm_import)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons__$5b$external$5d$__$2840$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/@fortawesome/free-solid-svg-icons [external] (@fortawesome/free-solid-svg-icons, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$AppContext$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/AppContext.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$sonner__$5b$external$5d$__$28$sonner$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/sonner [external] (sonner, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$figma$2f$ImageWithFallback$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/figma/ImageWithFallback.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$currency$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/currency.ts [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$react$2d$fontawesome__$5b$external$5d$__$2840$fortawesome$2f$react$2d$fontawesome$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons__$5b$external$5d$__$2840$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$AppContext$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$sonner__$5b$external$5d$__$28$sonner$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$react$2d$fontawesome__$5b$external$5d$__$2840$fortawesome$2f$react$2d$fontawesome$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons__$5b$external$5d$__$2840$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$AppContext$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$sonner__$5b$external$5d$__$28$sonner$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
;
function ProductCard({ id, image, title, description, price, originalPrice, discount, badge, category, sourceCurrency, isCustom, onProductClick }) {
    const { addToFavorites, removeFromFavorites, isFavorite } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$AppContext$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["useApp"])();
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
            __TURBOPACK__imported__module__$5b$externals$5d2f$sonner__$5b$external$5d$__$28$sonner$2c$__esm_import$29$__["toast"].success('Retiré des favoris');
        } else {
            addToFavorites(product);
            __TURBOPACK__imported__module__$5b$externals$5d2f$sonner__$5b$external$5d$__$28$sonner$2c$__esm_import$29$__["toast"].success('Ajouté aux favoris !');
        }
    };
    const handleCardClick = ()=>{
        onProductClick(product);
    };
    // Convertir les prix dans la devise sélectionnée
    const displayPrice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$currency$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["smartConvertPrice"])(price, sourceCurrency);
    const displayOriginalPrice = originalPrice ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$currency$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["smartConvertPrice"])(originalPrice, sourceCurrency) : null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: "bg-white shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer",
        onClick: handleCardClick,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$figma$2f$ImageWithFallback$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["ImageWithFallback"], {
                        src: image || 'https://images.unsplash.com/photo-1648634158203-199accfd7afc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtYXR0cmVzcyUyMGJlZHJvb218ZW58MXx8fHwxNzU1OTg4NDUyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
                        alt: title,
                        className: "w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProductCard.tsx",
                        lineNumber: 79,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "absolute top-4 left-4 right-4 flex justify-between items-start",
                        children: [
                            (badge || discount) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                className: badge ? "fima-badge-green" : "fima-badge-red",
                                children: badge || `${discount} OFF`
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProductCard.tsx",
                                lineNumber: 88,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                onClick: handleFavoriteClick,
                                className: `p-2 backdrop-blur-sm transition-all ${productIsFavorite ? 'bg-red-500 text-white' : 'bg-white/80 text-gray-600 hover:bg-white hover:text-red-500'}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$react$2d$fontawesome__$5b$external$5d$__$2840$fortawesome$2f$react$2d$fontawesome$2c$__esm_import$29$__["FontAwesomeIcon"], {
                                    icon: __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons__$5b$external$5d$__$2840$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2c$__esm_import$29$__["faHeart"],
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "p-4 md:p-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
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
                    !isCustom ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between mb-3 md:mb-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
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
                                displayOriginalPrice && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
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
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "mb-3 md:mb-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
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
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/components/Breadcrumb.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Breadcrumb",
    ()=>Breadcrumb
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [ssr] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/house.js [ssr] (ecmascript) <export default as Home>");
;
;
function Breadcrumb({ items, accentColor = '#B5C233' }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("nav", {
        className: "flex items-center gap-2 text-sm py-3 px-4 bg-gray-50 border-b border-gray-200",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                onClick: items[0]?.onClick,
                className: "flex items-center gap-1 hover:opacity-70 transition-opacity",
                style: {
                    color: '#6E6E6E'
                },
                "aria-label": "Accueil",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"], {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
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
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2",
                    children: [
                        item.onClick ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
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
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
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
                        !isLast && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
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
}),
"[project]/src/components/StrapiDataWrapper.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductDetailSkeleton",
    ()=>ProductDetailSkeleton,
    "ProductsSkeleton",
    ()=>ProductsSkeleton,
    "StrapiDataWrapper",
    ()=>StrapiDataWrapper,
    "useStrapiErrorHandler",
    ()=>useStrapiErrorHandler
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [ssr] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [ssr] (ecmascript) <export default as RefreshCw>");
;
;
function StrapiDataWrapper({ loading, error, data, children, emptyMessage = "Aucune donnée disponible", onRetry, minHeight = "200px" }) {
    // État de chargement
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center",
            style: {
                minHeight
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "relative w-16 h-16 mx-auto mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 rounded-full border-4 border-transparent",
                                    style: {
                                        background: `conic-gradient(from 0deg, transparent, #B5C233, transparent)`,
                                        animation: 'spin 1.5s linear infinite'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/StrapiDataWrapper.tsx",
                                    lineNumber: 35,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-2 rounded-full border-3 border-transparent",
                                    style: {
                                        background: `conic-gradient(from 180deg, transparent, #0EA5E9, transparent)`,
                                        animation: 'spin 2s linear infinite reverse'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/StrapiDataWrapper.tsx",
                                    lineNumber: 44,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-4 rounded-full",
                                    style: {
                                        background: `radial-gradient(circle, #E30613, transparent)`,
                                        animation: 'pulse 1s ease-in-out infinite alternate'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/StrapiDataWrapper.tsx",
                                    lineNumber: 53,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "absolute w-2 h-2 rounded-full top-0 left-1/2 transform -translate-x-1/2",
                                            style: {
                                                backgroundColor: '#B5C233',
                                                transformOrigin: '0 32px',
                                                animation: 'spin 1.5s linear infinite'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/StrapiDataWrapper.tsx",
                                            lineNumber: 63,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "absolute w-1.5 h-1.5 rounded-full top-1 right-1",
                                            style: {
                                                backgroundColor: '#0EA5E9',
                                                transformOrigin: '-24px 24px',
                                                animation: 'spin 2.5s linear infinite reverse'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/StrapiDataWrapper.tsx",
                                            lineNumber: 71,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/StrapiDataWrapper.tsx",
                                    lineNumber: 62,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 rounded-full opacity-30",
                                    style: {
                                        background: `radial-gradient(circle, #B5C233, transparent 70%)`,
                                        animation: 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/StrapiDataWrapper.tsx",
                                    lineNumber: 82,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/StrapiDataWrapper.tsx",
                            lineNumber: 33,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                            style: {
                                color: '#6E6E6E',
                                marginTop: '8px'
                            },
                            children: "Chargement en cours..."
                        }, void 0, false, {
                            fileName: "[project]/src/components/StrapiDataWrapper.tsx",
                            lineNumber: 91,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "w-24 h-1 bg-gray-200 rounded-full mx-auto mt-2 overflow-hidden",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "h-full rounded-full",
                                style: {
                                    background: `linear-gradient(90deg, #B5C233, #E30613, #0EA5E9, #B5C233)`,
                                    backgroundSize: '200% 100%',
                                    animation: 'shimmer 2s ease-in-out infinite'
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/StrapiDataWrapper.tsx",
                                lineNumber: 97,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/StrapiDataWrapper.tsx",
                            lineNumber: 96,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/StrapiDataWrapper.tsx",
                    lineNumber: 31,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("style", {
                    dangerouslySetInnerHTML: {
                        __html: `
            @keyframes shimmer {
              0% { background-position: -200% 0; }
              100% { background-position: 200% 0; }
            }
          `
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/StrapiDataWrapper.tsx",
                    lineNumber: 109,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/StrapiDataWrapper.tsx",
            lineNumber: 27,
            columnNumber: 7
        }, this);
    }
    // État d'erreur
    if (error) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center",
            style: {
                minHeight
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "text-center max-w-md",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                        className: "w-12 h-12 mx-auto mb-4",
                        style: {
                            color: '#E30613'
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/StrapiDataWrapper.tsx",
                        lineNumber: 129,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                        className: "mb-2",
                        style: {
                            fontFamily: 'Montserrat',
                            color: '#000000'
                        },
                        children: "Erreur de chargement"
                    }, void 0, false, {
                        fileName: "[project]/src/components/StrapiDataWrapper.tsx",
                        lineNumber: 130,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                        className: "mb-4",
                        style: {
                            color: '#6E6E6E'
                        },
                        children: error
                    }, void 0, false, {
                        fileName: "[project]/src/components/StrapiDataWrapper.tsx",
                        lineNumber: 133,
                        columnNumber: 11
                    }, this),
                    onRetry && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                        onClick: onRetry,
                        className: "fima-btn-secondary flex items-center gap-2 mx-auto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/StrapiDataWrapper.tsx",
                                lineNumber: 141,
                                columnNumber: 15
                            }, this),
                            "Réessayer"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/StrapiDataWrapper.tsx",
                        lineNumber: 137,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/StrapiDataWrapper.tsx",
                lineNumber: 128,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/StrapiDataWrapper.tsx",
            lineNumber: 124,
            columnNumber: 7
        }, this);
    }
    // État vide
    if (!data || Array.isArray(data) && data.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center",
            style: {
                minHeight
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                            className: "text-2xl",
                            children: "📦"
                        }, void 0, false, {
                            fileName: "[project]/src/components/StrapiDataWrapper.tsx",
                            lineNumber: 159,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/StrapiDataWrapper.tsx",
                        lineNumber: 158,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                        style: {
                            color: '#6E6E6E'
                        },
                        children: emptyMessage
                    }, void 0, false, {
                        fileName: "[project]/src/components/StrapiDataWrapper.tsx",
                        lineNumber: 161,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/StrapiDataWrapper.tsx",
                lineNumber: 157,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/StrapiDataWrapper.tsx",
            lineNumber: 153,
            columnNumber: 7
        }, this);
    }
    // Rendu des données
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
        children: children
    }, void 0, false);
}
function ProductsSkeleton({ count = 6 }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
        children: Array.from({
            length: count
        }).map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-2xl shadow-lg overflow-hidden animate-pulse",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "h-48 bg-gray-200"
                    }, void 0, false, {
                        fileName: "[project]/src/components/StrapiDataWrapper.tsx",
                        lineNumber: 179,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "p-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "h-4 bg-gray-200 rounded mb-2"
                            }, void 0, false, {
                                fileName: "[project]/src/components/StrapiDataWrapper.tsx",
                                lineNumber: 181,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "h-3 bg-gray-200 rounded mb-4 w-3/4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/StrapiDataWrapper.tsx",
                                lineNumber: 182,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "h-6 bg-gray-200 rounded w-16"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/StrapiDataWrapper.tsx",
                                        lineNumber: 184,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "h-4 bg-gray-200 rounded w-12"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/StrapiDataWrapper.tsx",
                                        lineNumber: 185,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/StrapiDataWrapper.tsx",
                                lineNumber: 183,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "h-10 bg-gray-200 rounded"
                            }, void 0, false, {
                                fileName: "[project]/src/components/StrapiDataWrapper.tsx",
                                lineNumber: 187,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/StrapiDataWrapper.tsx",
                        lineNumber: 180,
                        columnNumber: 11
                    }, this)
                ]
            }, index, true, {
                fileName: "[project]/src/components/StrapiDataWrapper.tsx",
                lineNumber: 178,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/StrapiDataWrapper.tsx",
        lineNumber: 176,
        columnNumber: 5
    }, this);
}
function ProductDetailSkeleton() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: "container mx-auto px-4 py-8",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: "grid lg:grid-cols-2 gap-12",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "aspect-square rounded-2xl bg-gray-200 animate-pulse"
                        }, void 0, false, {
                            fileName: "[project]/src/components/StrapiDataWrapper.tsx",
                            lineNumber: 202,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "flex gap-4",
                            children: [
                                1,
                                2,
                                3
                            ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "w-20 h-20 rounded-lg bg-gray-200 animate-pulse"
                                }, i, false, {
                                    fileName: "[project]/src/components/StrapiDataWrapper.tsx",
                                    lineNumber: 205,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/StrapiDataWrapper.tsx",
                            lineNumber: 203,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/StrapiDataWrapper.tsx",
                    lineNumber: 201,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "space-y-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "h-8 bg-gray-200 rounded mb-2 animate-pulse"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/StrapiDataWrapper.tsx",
                                    lineNumber: 213,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "h-4 bg-gray-200 rounded w-3/4 animate-pulse"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/StrapiDataWrapper.tsx",
                                    lineNumber: 214,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/StrapiDataWrapper.tsx",
                            lineNumber: 212,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "h-8 bg-gray-200 rounded w-20 animate-pulse"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/StrapiDataWrapper.tsx",
                                    lineNumber: 218,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "h-6 bg-gray-200 rounded w-16 animate-pulse"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/StrapiDataWrapper.tsx",
                                    lineNumber: 219,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/StrapiDataWrapper.tsx",
                            lineNumber: 217,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "h-20 bg-gray-200 rounded animate-pulse"
                        }, void 0, false, {
                            fileName: "[project]/src/components/StrapiDataWrapper.tsx",
                            lineNumber: 222,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 gap-3",
                            children: [
                                1,
                                2,
                                3,
                                4
                            ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "h-16 bg-gray-200 rounded animate-pulse"
                                }, i, false, {
                                    fileName: "[project]/src/components/StrapiDataWrapper.tsx",
                                    lineNumber: 226,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/StrapiDataWrapper.tsx",
                            lineNumber: 224,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "h-12 bg-gray-200 rounded animate-pulse"
                        }, void 0, false, {
                            fileName: "[project]/src/components/StrapiDataWrapper.tsx",
                            lineNumber: 230,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/StrapiDataWrapper.tsx",
                    lineNumber: 211,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/StrapiDataWrapper.tsx",
            lineNumber: 199,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/StrapiDataWrapper.tsx",
        lineNumber: 198,
        columnNumber: 5
    }, this);
}
function useStrapiErrorHandler() {
    const handleError = (error)=>{
        if (error?.response?.data?.error) {
            const strapiError = error.response.data.error;
            switch(strapiError.status){
                case 404:
                    return 'Contenu non trouvé';
                case 403:
                    return 'Accès non autorisé';
                case 500:
                    return 'Erreur serveur. Veuillez réessayer plus tard.';
                default:
                    return strapiError.message || 'Une erreur est survenue';
            }
        }
        if (error?.message) {
            return error.message;
        }
        return 'Une erreur inattendue est survenue';
    };
    return {
        handleError
    };
}
}),
"[project]/src/components/CategoryPage.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "CategoryPage",
    ()=>CategoryPage
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/funnel.js [ssr] (ecmascript) <export default as Filter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$grid$2d$3x3$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/grid-3x3.js [ssr] (ecmascript) <export default as Grid>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__List$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/list.js [ssr] (ecmascript) <export default as List>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductCard$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ProductCard.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Breadcrumb$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Breadcrumb.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$StrapiDataWrapper$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/StrapiDataWrapper.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useStrapiData$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useStrapiData.ts [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductCard$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductCard$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
;
function CategoryPage({ category, onProductClick, onBack }) {
    const [sortBy, setSortBy] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])('featured');
    const [viewMode, setViewMode] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])('grid');
    const [priceRange, setPriceRange] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])([
        0,
        2000
    ]);
    const [showFilters, setShowFilters] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    // Breadcrumb items
    const breadcrumbItems = [
        {
            label: 'Accueil',
            onClick: onBack
        },
        {
            label: 'Produits',
            onClick: onBack
        },
        {
            label: category
        }
    ];
    // Convertir le nom de catégorie en slug pour l'API
    const categorySlug = getCategorySlug(category);
    // Récupération des données de la catégorie
    const { data: categoryData, loading: categoryLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useStrapiData$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useCategories"])({
        filters: {
            slug: {
                $eq: categorySlug
            }
        }
    });
    // Récupération des produits de la catégorie
    const { data: products, loading: productsLoading, error: productsError } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useStrapiData$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useProductsByCategory"])(categorySlug, {
        populate: [
            'image',
            'category'
        ],
        sort: getSortOrder(sortBy),
        pagination: {
            pageSize: 20
        }
    });
    function getCategorySlug(categoryName) {
        const slugMap = {
            // FIMA COUCHAGE
            'Matelas': 'matelas',
            'matelas': 'matelas',
            'Sommiers': 'sommiers',
            'sommiers': 'sommiers',
            'Oreillers': 'oreillers',
            'oreillers': 'oreillers',
            'Linge de lit': 'linge-de-lit',
            'linge-de-lit': 'linge-de-lit',
            'Accessoires': 'accessoires-literie',
            'accessoires-literie': 'accessoires-literie',
            // FIMA DESIGN
            'menuiserie': 'menuiserie',
            'ameublement': 'ameublement',
            'cuisines': 'cuisines',
            'dressings': 'dressings',
            'amenagements-mesure': 'amenagements-mesure',
            // UNIVERS GLASS
            'vitrerie': 'vitrerie',
            'menuiserie-aluminium': 'menuiserie-aluminium',
            'fenetres': 'fenetres',
            'portes': 'portes',
            'cloisons': 'cloisons'
        };
        return slugMap[categoryName] || categoryName.toLowerCase().replace(/\s+/g, '-');
    }
    function getSortOrder(sort) {
        switch(sort){
            case 'price-asc':
                return [
                    'price:asc'
                ];
            case 'price-desc':
                return [
                    'price:desc'
                ];
            case 'name':
                return [
                    'title:asc'
                ];
            case 'newest':
                return [
                    'createdAt:desc'
                ];
            case 'rating':
                return [
                    'rating:desc'
                ];
            default:
                return [
                    'featured:desc',
                    'createdAt:desc'
                ];
        }
    }
    // Convertir les données Strapi
    const convertStrapiProduct = (strapiProduct)=>({
            id: strapiProduct.id.toString(),
            title: strapiProduct.attributes.title,
            description: strapiProduct.attributes.shortDescription || strapiProduct.attributes.description,
            price: `${strapiProduct.attributes.price}€`,
            originalPrice: strapiProduct.attributes.originalPrice ? `${strapiProduct.attributes.originalPrice}€` : undefined,
            discount: strapiProduct.attributes.discount ? `${strapiProduct.attributes.discount}%` : undefined,
            badge: strapiProduct.attributes.bestSeller ? "BEST SELLER" : strapiProduct.attributes.new ? "NOUVEAU" : undefined,
            image: strapiProduct.attributes.image.data.attributes.url,
            category: strapiProduct.attributes.category.data.attributes.name,
            sourceCurrency: 'EUR',
            ...strapiProduct.attributes
        });
    // Obtenir les informations de la catégorie
    const getCurrentCategory = ()=>{
        if (categoryData && Array.isArray(categoryData) && categoryData.length > 0) {
            return categoryData[0];
        }
        return null;
    };
    const currentCategory = getCurrentCategory();
    const categoryName = currentCategory?.attributes.name || category;
    const categoryIcon = currentCategory?.attributes.icon || getCategoryIcon(categorySlug);
    const categoryDescription = currentCategory?.attributes.description || getCategoryDescription(categorySlug);
    // Filtrer les produits par prix
    const filteredProducts = products && Array.isArray(products) ? products.filter((product)=>{
        const price = product.attributes.price;
        return price >= priceRange[0] && price <= priceRange[1];
    }) : [];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gray-50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "bg-white border-b border-gray-200",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "container mx-auto px-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "flex items-center py-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Breadcrumb$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["Breadcrumb"], {
                            items: breadcrumbItems
                        }, void 0, false, {
                            fileName: "[project]/src/components/CategoryPage.tsx",
                            lineNumber: 140,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/CategoryPage.tsx",
                        lineNumber: 139,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/CategoryPage.tsx",
                    lineNumber: 138,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/CategoryPage.tsx",
                lineNumber: 137,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "bg-gradient-to-r from-green-50 to-blue-50 py-12",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "container mx-auto px-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "max-w-4xl mx-auto text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                className: "text-3xl mb-4",
                                style: {
                                    fontFamily: 'Montserrat',
                                    color: '#000000'
                                },
                                children: getCategoryHeroTitle(categorySlug)
                            }, void 0, false, {
                                fileName: "[project]/src/components/CategoryPage.tsx",
                                lineNumber: 149,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                className: "text-lg mb-8 max-w-2xl mx-auto",
                                style: {
                                    color: '#6E6E6E'
                                },
                                children: getCategoryHeroDescription(categorySlug)
                            }, void 0, false, {
                                fileName: "[project]/src/components/CategoryPage.tsx",
                                lineNumber: 155,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "text-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "text-2xl font-bold mb-2",
                                                style: {
                                                    color: '#B5C233'
                                                },
                                                children: [
                                                    filteredProducts.length,
                                                    "+"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/CategoryPage.tsx",
                                                lineNumber: 165,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                style: {
                                                    color: '#6E6E6E'
                                                },
                                                children: "Produits disponibles"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CategoryPage.tsx",
                                                lineNumber: 171,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CategoryPage.tsx",
                                        lineNumber: 164,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "text-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "text-2xl font-bold mb-2",
                                                style: {
                                                    color: '#B5C233'
                                                },
                                                children: "10 ans"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CategoryPage.tsx",
                                                lineNumber: 187,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                style: {
                                                    color: '#6E6E6E'
                                                },
                                                children: "Garantie"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CategoryPage.tsx",
                                                lineNumber: 193,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CategoryPage.tsx",
                                        lineNumber: 186,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CategoryPage.tsx",
                                lineNumber: 163,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/CategoryPage.tsx",
                        lineNumber: 148,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/CategoryPage.tsx",
                    lineNumber: 147,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/CategoryPage.tsx",
                lineNumber: 146,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "bg-white border-b border-gray-200 sticky top-20 z-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "container mx-auto px-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "flex flex-col md:flex-row justify-between items-center py-4 gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                            style: {
                                                color: '#6E6E6E'
                                            },
                                            children: [
                                                filteredProducts.length,
                                                " produit",
                                                filteredProducts.length > 1 ? 's' : ''
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/CategoryPage.tsx",
                                            lineNumber: 208,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setShowFilters(!showFilters),
                                            className: "flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__["Filter"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CategoryPage.tsx",
                                                    lineNumber: 216,
                                                    columnNumber: 17
                                                }, this),
                                                "Filtres"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/CategoryPage.tsx",
                                            lineNumber: 212,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/CategoryPage.tsx",
                                    lineNumber: 207,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("select", {
                                            value: sortBy,
                                            onChange: (e)=>setSortBy(e.target.value),
                                            className: "px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                    value: "featured",
                                                    children: "Recommandés"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CategoryPage.tsx",
                                                    lineNumber: 229,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                    value: "newest",
                                                    children: "Plus récents"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CategoryPage.tsx",
                                                    lineNumber: 230,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                    value: "price-asc",
                                                    children: "Prix croissant"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CategoryPage.tsx",
                                                    lineNumber: 231,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                    value: "price-desc",
                                                    children: "Prix décroissant"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CategoryPage.tsx",
                                                    lineNumber: 232,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                    value: "name",
                                                    children: "Nom A-Z"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CategoryPage.tsx",
                                                    lineNumber: 233,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                    value: "rating",
                                                    children: "Mieux notés"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CategoryPage.tsx",
                                                    lineNumber: 234,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/CategoryPage.tsx",
                                            lineNumber: 224,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "flex border border-gray-300 rounded-lg overflow-hidden",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setViewMode('grid'),
                                                    className: "p-2 transition-colors",
                                                    style: {
                                                        backgroundColor: viewMode === 'grid' ? '#B5C233' : 'white',
                                                        color: viewMode === 'grid' ? '#6E6E6E' : '#4b5563'
                                                    },
                                                    onMouseEnter: (e)=>{
                                                        if (viewMode !== 'grid') e.currentTarget.style.backgroundColor = '#f9fafb';
                                                    },
                                                    onMouseLeave: (e)=>{
                                                        if (viewMode !== 'grid') e.currentTarget.style.backgroundColor = 'white';
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$grid$2d$3x3$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid$3e$__["Grid"], {
                                                        className: "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CategoryPage.tsx",
                                                        lineNumber: 253,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CategoryPage.tsx",
                                                    lineNumber: 239,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setViewMode('list'),
                                                    className: "p-2 transition-colors",
                                                    style: {
                                                        backgroundColor: viewMode === 'list' ? '#B5C233' : 'white',
                                                        color: viewMode === 'list' ? '#6E6E6E' : '#4b5563'
                                                    },
                                                    onMouseEnter: (e)=>{
                                                        if (viewMode !== 'list') e.currentTarget.style.backgroundColor = '#f9fafb';
                                                    },
                                                    onMouseLeave: (e)=>{
                                                        if (viewMode !== 'list') e.currentTarget.style.backgroundColor = 'white';
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__List$3e$__["List"], {
                                                        className: "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CategoryPage.tsx",
                                                        lineNumber: 269,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CategoryPage.tsx",
                                                    lineNumber: 255,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/CategoryPage.tsx",
                                            lineNumber: 238,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/CategoryPage.tsx",
                                    lineNumber: 222,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/CategoryPage.tsx",
                            lineNumber: 205,
                            columnNumber: 11
                        }, this),
                        showFilters && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "border-t border-gray-200 py-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-3 gap-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                                className: "font-medium mb-3",
                                                style: {
                                                    color: '#000000'
                                                },
                                                children: "Prix (€)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CategoryPage.tsx",
                                                lineNumber: 281,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "space-y-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                                        type: "range",
                                                        min: "0",
                                                        max: "2000",
                                                        value: priceRange[1],
                                                        onChange: (e)=>setPriceRange([
                                                                priceRange[0],
                                                                parseInt(e.target.value)
                                                            ]),
                                                        className: "w-full"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CategoryPage.tsx",
                                                        lineNumber: 285,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between text-sm",
                                                        style: {
                                                            color: '#6E6E6E'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                children: [
                                                                    priceRange[0],
                                                                    "€"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/CategoryPage.tsx",
                                                                lineNumber: 294,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                children: [
                                                                    priceRange[1],
                                                                    "€"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/CategoryPage.tsx",
                                                                lineNumber: 295,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/CategoryPage.tsx",
                                                        lineNumber: 293,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/CategoryPage.tsx",
                                                lineNumber: 284,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CategoryPage.tsx",
                                        lineNumber: 280,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                                className: "font-medium mb-3",
                                                style: {
                                                    color: '#000000'
                                                },
                                                children: getCategoryFilterTitle(categorySlug)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CategoryPage.tsx",
                                                lineNumber: 302,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "space-y-2",
                                                children: getCategoryFilters(categorySlug).map((filter, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                                        className: "flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                                                type: "checkbox",
                                                                className: "rounded"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/CategoryPage.tsx",
                                                                lineNumber: 308,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                className: "text-sm",
                                                                style: {
                                                                    color: '#6E6E6E'
                                                                },
                                                                children: filter
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/CategoryPage.tsx",
                                                                lineNumber: 309,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, index, true, {
                                                        fileName: "[project]/src/components/CategoryPage.tsx",
                                                        lineNumber: 307,
                                                        columnNumber: 23
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CategoryPage.tsx",
                                                lineNumber: 305,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CategoryPage.tsx",
                                        lineNumber: 301,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                                className: "font-medium mb-3",
                                                style: {
                                                    color: '#000000'
                                                },
                                                children: "Matériaux"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CategoryPage.tsx",
                                                lineNumber: 319,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "space-y-2",
                                                children: [
                                                    'Mousse mémoire',
                                                    'Ressorts ensachés',
                                                    'Latex naturel',
                                                    'Coton bio'
                                                ].map((material, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                                        className: "flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                                                type: "checkbox",
                                                                className: "rounded"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/CategoryPage.tsx",
                                                                lineNumber: 325,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                className: "text-sm",
                                                                style: {
                                                                    color: '#6E6E6E'
                                                                },
                                                                children: material
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/CategoryPage.tsx",
                                                                lineNumber: 326,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, index, true, {
                                                        fileName: "[project]/src/components/CategoryPage.tsx",
                                                        lineNumber: 324,
                                                        columnNumber: 23
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CategoryPage.tsx",
                                                lineNumber: 322,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CategoryPage.tsx",
                                        lineNumber: 318,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CategoryPage.tsx",
                                lineNumber: 278,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/CategoryPage.tsx",
                            lineNumber: 277,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/CategoryPage.tsx",
                    lineNumber: 204,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/CategoryPage.tsx",
                lineNumber: 203,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-4 py-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$StrapiDataWrapper$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["StrapiDataWrapper"], {
                    loading: productsLoading,
                    error: productsError,
                    data: filteredProducts,
                    emptyMessage: `Aucun produit ${categoryName.toLowerCase()} disponible`,
                    minHeight: "400px",
                    children: productsLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$StrapiDataWrapper$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["ProductsSkeleton"], {
                        count: 8
                    }, void 0, false, {
                        fileName: "[project]/src/components/CategoryPage.tsx",
                        lineNumber: 349,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: viewMode === 'grid' ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" : "space-y-6",
                        children: filteredProducts.map((product)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductCard$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["ProductCard"], {
                                ...convertStrapiProduct(product),
                                onProductClick: (convertedProduct)=>{
                                    onProductClick({
                                        ...convertedProduct,
                                        strapiData: product
                                    });
                                }
                            }, product.id, false, {
                                fileName: "[project]/src/components/CategoryPage.tsx",
                                lineNumber: 357,
                                columnNumber: 17
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/CategoryPage.tsx",
                        lineNumber: 351,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/CategoryPage.tsx",
                    lineNumber: 341,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/CategoryPage.tsx",
                lineNumber: 340,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "bg-white py-12",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "container mx-auto px-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "max-w-4xl mx-auto text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                className: "text-2xl mb-4",
                                style: {
                                    fontFamily: 'Montserrat',
                                    color: '#000000'
                                },
                                children: getCategoryAdviceTitle(categorySlug)
                            }, void 0, false, {
                                fileName: "[project]/src/components/CategoryPage.tsx",
                                lineNumber: 377,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                className: "text-lg mb-6",
                                style: {
                                    color: '#6E6E6E'
                                },
                                children: getCategoryAdvice(categorySlug)
                            }, void 0, false, {
                                fileName: "[project]/src/components/CategoryPage.tsx",
                                lineNumber: 383,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                className: "fima-btn-secondary px-8 py-3",
                                children: "Parler à un expert"
                            }, void 0, false, {
                                fileName: "[project]/src/components/CategoryPage.tsx",
                                lineNumber: 389,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/CategoryPage.tsx",
                        lineNumber: 376,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/CategoryPage.tsx",
                    lineNumber: 375,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/CategoryPage.tsx",
                lineNumber: 374,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/CategoryPage.tsx",
        lineNumber: 135,
        columnNumber: 5
    }, this);
}
// Fonctions utilitaires pour le contenu spécifique à chaque catégorie
function getCategoryIcon(categorySlug) {
    switch(categorySlug){
        // FIMA COUCHAGE
        case 'matelas':
            return '🛏️';
        case 'sommiers':
            return '🏠';
        case 'oreillers':
            return '💤';
        case 'linge-de-lit':
            return '🌿';
        case 'accessoires-literie':
            return '✨';
        // FIMA DESIGN  
        case 'menuiserie':
            return '🪵';
        case 'ameublement':
            return '🪑';
        case 'cuisines':
            return '👩‍🍳';
        case 'dressings':
            return '👔';
        case 'amenagements-mesure':
            return '📐';
        // UNIVERS GLASS
        case 'vitrerie':
            return '🪟';
        case 'menuiserie-aluminium':
            return '🔧';
        case 'fenetres':
            return '🏠';
        case 'portes':
            return '🚪';
        case 'cloisons':
            return '🧱';
        default:
            return '📦';
    }
}
function getCategoryDescription(categorySlug) {
    switch(categorySlug){
        // FIMA COUCHAGE
        case 'matelas':
            return 'Matelas de qualité premium pour un sommeil optimal';
        case 'sommiers':
            return 'Sommiers robustes et élégants';
        case 'oreillers':
            return 'Oreillers ergonomiques pour tous les dormeurs';
        case 'linge-de-lit':
            return 'Linge de lit de luxe en matières naturelles';
        case 'accessoires-literie':
            return 'Accessoires pour optimiser votre sommeil';
        // FIMA DESIGN
        case 'menuiserie':
            return 'Menuiserie sur mesure et bois noble';
        case 'ameublement':
            return 'Mobilier design pour votre intérieur';
        case 'cuisines':
            return 'Cuisines équipées sur mesure';
        case 'dressings':
            return 'Dressings et rangements personnalisés';
        case 'amenagements-mesure':
            return 'Aménagements complets sur mesure';
        // UNIVERS GLASS
        case 'vitrerie':
            return 'Vitrages professionnels haute performance';
        case 'menuiserie-aluminium':
            return 'Menuiserie aluminium de précision';
        case 'fenetres':
            return 'Fenêtres sur mesure toutes finitions';
        case 'portes':
            return 'Portes d\'exception et sécurisées';
        case 'cloisons':
            return 'Cloisons modulaires et design';
        default:
            return 'Découvrez notre sélection premium';
    }
}
function getCategoryHeroTitle(categorySlug) {
    switch(categorySlug){
        // FIMA COUCHAGE
        case 'matelas':
            return 'Trouvez le matelas parfait pour vos nuits';
        case 'sommiers':
            return 'Des sommiers de qualité pour un soutien optimal';
        case 'oreillers':
            return 'L\'oreiller idéal pour chaque dormeur';
        case 'linge-de-lit':
            return 'Linge de lit luxueux pour un confort absolu';
        case 'accessoires-literie':
            return 'Accessoires pour optimiser votre sommeil';
        // FIMA DESIGN
        case 'menuiserie':
            return 'Menuiserie sur mesure et bois noble';
        case 'ameublement':
            return 'Mobilier design pour votre intérieur';
        case 'cuisines':
            return 'Cuisines équipées sur mesure';
        case 'dressings':
            return 'Dressings et rangements personnalisés';
        case 'amenagements-mesure':
            return 'Aménagements complets sur mesure';
        // UNIVERS GLASS
        case 'vitrerie':
            return 'Vitrages professionnels haute performance';
        case 'menuiserie-aluminium':
            return 'Menuiserie aluminium de précision';
        case 'fenetres':
            return 'Fenêtres sur mesure toutes finitions';
        case 'portes':
            return 'Portes d\'exception et sécurisées';
        case 'cloisons':
            return 'Cloisons modulaires et design';
        default:
            return 'Découvrez notre sélection premium';
    }
}
function getCategoryHeroDescription(categorySlug) {
    switch(categorySlug){
        // FIMA COUCHAGE
        case 'matelas':
            return 'Explorez notre gamme de matelas haute qualité : mousse mémoire, ressorts ensachés, latex naturel. Chaque matelas est conçu pour offrir le meilleur soutien et confort.';
        case 'sommiers':
            return 'Complétez votre literie avec nos sommiers tapissiers, à ressorts ou électriques. Un bon sommier prolonge la durée de vie de votre matelas.';
        case 'oreillers':
            return 'Trouvez l\'oreiller parfait selon votre position de sommeil et vos préférences : mémoire de forme, duvet, ergonomique ou bio.';
        case 'linge-de-lit':
            return 'Sublimez votre chambre avec notre linge de lit premium : parures en satin, draps en bambou bio, housse de couette de luxe.';
        case 'accessoires-literie':
            return 'Optimisez votre confort avec nos accessoires : surmatelas, protège-matelas, oreillers de voyage et produits d\'entretien.';
        // FIMA DESIGN
        case 'menuiserie':
            return 'Découvrez notre savoir-faire en menuiserie : bois massif, chêne, noyer, finitions sur mesure. Des créations uniques pour votre intérieur.';
        case 'ameublement':
            return 'Mobilier design et fonctionnel : tables, commodes, bibliothèques. Chaque pièce est conçue pour allier esthétique et durabilité.';
        case 'cuisines':
            return 'Cuisines équipées complètes : plans de travail quartz, électroménager intégré, rangements optimisés. Votre cuisine rêvée devient réalité.';
        case 'dressings':
            return 'Dressings sur mesure : walk-in, placards intégrés, éclairage LED. Optimisez votre espace de rangement avec style.';
        case 'amenagements-mesure':
            return 'Solutions d\'aménagement complètes : bibliothèques, placards, séparations. Nous transformons vos espaces selon vos besoins.';
        // UNIVERS GLASS
        case 'vitrerie':
            return 'Vitrages haute performance : double vitrage, verre sécurit, isolation thermique et phonique. Solutions professionnelles pour tous projets.';
        case 'menuiserie-aluminium':
            return 'Menuiserie aluminium de précision : profilés haute qualité, finitions durables, solutions techniques innovantes.';
        case 'fenetres':
            return 'Fenêtres sur mesure : aluminium, PVC, bois. Performances thermiques et acoustiques exceptionnelles pour votre confort.';
        case 'portes':
            return 'Portes d\'entrée et intérieures : sécurité renforcée, design contemporain, isolation optimale. L\'entrée parfaite pour votre foyer.';
        case 'cloisons':
            return 'Cloisons vitrées et séparations : modulaires, amovibles, design. Optimisez vos espaces avec nos solutions innovantes.';
        default:
            return 'Découvrez des produits de qualité exceptionnelle pour améliorer votre quotidien.';
    }
}
function getCategoryFilterTitle(categorySlug) {
    switch(categorySlug){
        case 'matelas':
            return 'Fermeté';
        case 'sommiers':
            return 'Type';
        case 'oreillers':
            return 'Garnissage';
        case 'linge-de-lit':
            return 'Matière';
        case 'accessoires-literie':
            return 'Fonction';
        default:
            return 'Caractéristiques';
    }
}
function getCategoryFilters(categorySlug) {
    switch(categorySlug){
        case 'matelas':
            return [
                'Ferme',
                'Mi-ferme',
                'Moelleux',
                'Très ferme'
            ];
        case 'sommiers':
            return [
                'Tapissier',
                'À lattes',
                'Électrique',
                'Coffre'
            ];
        case 'oreillers':
            return [
                'Duvet',
                'Synthétique',
                'Mémoire de forme',
                'Latex'
            ];
        case 'linge-de-lit':
            return [
                'Coton',
                'Lin',
                'Satin',
                'Bambou'
            ];
        case 'accessoires-literie':
            return [
                'Protection',
                'Confort',
                'Entretien',
                'Voyage'
            ];
        default:
            return [
                'Standard',
                'Premium',
                'Luxe'
            ];
    }
}
function getCategoryAdviceTitle(categorySlug) {
    switch(categorySlug){
        case 'matelas':
            return 'Besoin d\'aide pour choisir votre matelas ?';
        case 'sommiers':
            return 'Quel sommier pour votre matelas ?';
        case 'oreillers':
            return 'Comment choisir le bon oreiller ?';
        case 'linge-de-lit':
            return 'Quelle matière choisir ?';
        case 'accessoires-literie':
            return 'Optimisez votre literie';
        default:
            return 'Nos experts vous conseillent';
    }
}
function getCategoryAdvice(categorySlug) {
    switch(categorySlug){
        case 'matelas':
            return 'Nos experts vous accompagnent dans le choix de votre matelas selon votre morphologie, vos habitudes de sommeil et vos préférences de confort.';
        case 'sommiers':
            return 'Le choix du sommier est crucial pour optimiser votre confort et prolonger la durée de vie de votre matelas. Laissez-nous vous guider.';
        case 'oreillers':
            return 'Position de sommeil, problèmes cervicaux, préférences de fermeté... Nos conseillers vous aident à trouver l\'oreiller parfait.';
        case 'linge-de-lit':
            return 'Coton, lin, satin, bambou... Chaque matière a ses avantages. Découvrez celle qui vous convient le mieux avec nos experts.';
        case 'accessoires-literie':
            return 'Protège-matelas, surmatelas, oreillers ergonomiques... Complétez votre literie avec les bons accessoires pour un sommeil optimal.';
        default:
            return 'Bénéficiez de 40 ans d\'expertise pour faire le meilleur choix selon vos besoins et votre budget.';
    }
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=src_components_83d932a5._.js.map