module.exports = [
"[project]/src/components/ImageLightbox.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "ImageLightbox",
    ()=>ImageLightbox
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$motion$2f$react__$5b$external$5d$__$28$motion$2f$react$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/motion/react [external] (motion/react, esm_import)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$react$2d$fontawesome__$5b$external$5d$__$2840$fortawesome$2f$react$2d$fontawesome$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/@fortawesome/react-fontawesome [external] (@fortawesome/react-fontawesome, esm_import)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons__$5b$external$5d$__$2840$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/@fortawesome/free-solid-svg-icons [external] (@fortawesome/free-solid-svg-icons, esm_import)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$figma$2f$ImageWithFallback$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/figma/ImageWithFallback.tsx [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$motion$2f$react__$5b$external$5d$__$28$motion$2f$react$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$react$2d$fontawesome__$5b$external$5d$__$2840$fortawesome$2f$react$2d$fontawesome$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons__$5b$external$5d$__$2840$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$motion$2f$react__$5b$external$5d$__$28$motion$2f$react$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$react$2d$fontawesome__$5b$external$5d$__$2840$fortawesome$2f$react$2d$fontawesome$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons__$5b$external$5d$__$2840$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
function ImageLightbox({ images, startIndex, isOpen, onClose, alt = "Image agrandie" }) {
    const [currentIndex, setCurrentIndex] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(startIndex);
    // Réinitialiser l'index quand startIndex change
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        setCurrentIndex(startIndex);
    }, [
        startIndex
    ]);
    // Fermer avec la touche Escape
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        if (!isOpen) return;
        const handleKeyDown = (e)=>{
            if (e.key === "Escape") {
                onClose();
            } else if (e.key === "ArrowRight" && currentIndex < images.length - 1) {
                setCurrentIndex(currentIndex + 1);
            } else if (e.key === "ArrowLeft" && currentIndex > 0) {
                setCurrentIndex(currentIndex - 1);
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return ()=>window.removeEventListener("keydown", handleKeyDown);
    }, [
        isOpen,
        onClose,
        currentIndex,
        images.length
    ]);
    // Bloquer le scroll du body
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        if (!isOpen) return;
        document.body.style.overflow = "hidden";
        return ()=>{
            document.body.style.overflow = "unset";
        };
    }, [
        isOpen
    ]);
    const currentImage = images[currentIndex];
    const hasMultipleImages = images.length > 1;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$motion$2f$react__$5b$external$5d$__$28$motion$2f$react$2c$__esm_import$29$__["AnimatePresence"], {
        children: isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$motion$2f$react__$5b$external$5d$__$28$motion$2f$react$2c$__esm_import$29$__["motion"].div, {
            initial: {
                opacity: 0
            },
            animate: {
                opacity: 1
            },
            exit: {
                opacity: 0
            },
            className: "fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center",
            onClick: onClose,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                    onClick: onClose,
                    className: "absolute top-4 right-4 z-10 w-12 h-12 flex items-center justify-center bg-white/10 hover:border hover:border-gray-400 text-white transition-all",
                    "aria-label": "Fermer",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$react$2d$fontawesome__$5b$external$5d$__$2840$fortawesome$2f$react$2d$fontawesome$2c$__esm_import$29$__["FontAwesomeIcon"], {
                        icon: __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons__$5b$external$5d$__$2840$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2c$__esm_import$29$__["faXmark"],
                        className: "w-6 h-6"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ImageLightbox.tsx",
                        lineNumber: 76,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ImageLightbox.tsx",
                    lineNumber: 71,
                    columnNumber: 11
                }, this),
                hasMultipleImages && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                    onClick: (e)=>{
                        e.stopPropagation();
                        setCurrentIndex(currentIndex - 1);
                    },
                    className: "absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center bg-white/10 hover:border hover:border-gray-400 text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed",
                    disabled: currentIndex === 0,
                    "aria-label": "Image précédente",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$react$2d$fontawesome__$5b$external$5d$__$2840$fortawesome$2f$react$2d$fontawesome$2c$__esm_import$29$__["FontAwesomeIcon"], {
                        icon: __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons__$5b$external$5d$__$2840$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2c$__esm_import$29$__["faChevronLeft"],
                        className: "w-6 h-6"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ImageLightbox.tsx",
                        lineNumber: 90,
                        columnNumber: 15
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ImageLightbox.tsx",
                    lineNumber: 81,
                    columnNumber: 13
                }, this),
                hasMultipleImages && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                    onClick: (e)=>{
                        e.stopPropagation();
                        setCurrentIndex(currentIndex + 1);
                    },
                    className: "absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center bg-white/10 hover:border hover:border-gray-400 text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed",
                    disabled: currentIndex === images.length - 1,
                    "aria-label": "Image suivante",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$react$2d$fontawesome__$5b$external$5d$__$2840$fortawesome$2f$react$2d$fontawesome$2c$__esm_import$29$__["FontAwesomeIcon"], {
                        icon: __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons__$5b$external$5d$__$2840$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2c$__esm_import$29$__["faChevronRight"],
                        className: "w-6 h-6"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ImageLightbox.tsx",
                        lineNumber: 105,
                        columnNumber: 15
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ImageLightbox.tsx",
                    lineNumber: 96,
                    columnNumber: 13
                }, this),
                hasMultipleImages && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "absolute bottom-4 left-1/2 -translate-x-1/2 z-10 px-4 py-2 bg-white/10 text-white backdrop-blur-sm",
                    children: [
                        currentIndex + 1,
                        " / ",
                        images.length
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ImageLightbox.tsx",
                    lineNumber: 111,
                    columnNumber: 13
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$motion$2f$react__$5b$external$5d$__$28$motion$2f$react$2c$__esm_import$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        scale: 0.9
                    },
                    animate: {
                        opacity: 1,
                        scale: 1
                    },
                    exit: {
                        opacity: 0,
                        scale: 0.9
                    },
                    transition: {
                        duration: 0.2
                    },
                    className: "max-w-[90vw] max-h-[90vh] flex items-center justify-center",
                    onClick: (e)=>e.stopPropagation(),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$figma$2f$ImageWithFallback$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["ImageWithFallback"], {
                        src: currentImage,
                        alt: `${alt} ${currentIndex + 1}`,
                        className: "max-w-full max-h-[90vh] object-contain"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ImageLightbox.tsx",
                        lineNumber: 126,
                        columnNumber: 13
                    }, this)
                }, currentIndex, false, {
                    fileName: "[project]/src/components/ImageLightbox.tsx",
                    lineNumber: 117,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ImageLightbox.tsx",
            lineNumber: 63,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ImageLightbox.tsx",
        lineNumber: 61,
        columnNumber: 5
    }, this);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/components/CategoryDetailPage.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "CategoryDetailPage",
    ()=>CategoryDetailPage
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$figma$2f$ImageWithFallback$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/figma/ImageWithFallback.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useProductCategories$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useProductCategories.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuoteRequestModal$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/QuoteRequestModal.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ExpertConsultationModal$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ExpertConsultationModal.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImageLightbox$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ImageLightbox.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$react$2d$fontawesome__$5b$external$5d$__$2840$fortawesome$2f$react$2d$fontawesome$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/@fortawesome/react-fontawesome [external] (@fortawesome/react-fontawesome, esm_import)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons__$5b$external$5d$__$2840$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/@fortawesome/free-solid-svg-icons [external] (@fortawesome/free-solid-svg-icons, esm_import)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuoteRequestModal$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ExpertConsultationModal$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImageLightbox$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$react$2d$fontawesome__$5b$external$5d$__$2840$fortawesome$2f$react$2d$fontawesome$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons__$5b$external$5d$__$2840$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuoteRequestModal$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ExpertConsultationModal$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImageLightbox$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$react$2d$fontawesome__$5b$external$5d$__$2840$fortawesome$2f$react$2d$fontawesome$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons__$5b$external$5d$__$2840$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
;
;
;
function CategoryDetailPage({ categorySlug, onNavigate }) {
    const { categories: allCategories, loading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useProductCategories$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useProductCategories"])();
    const [category, setCategory] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const [categoryImages, setCategoryImages] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])([]);
    const [showQuoteModal, setShowQuoteModal] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [showExpertModal, setShowExpertModal] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [notFound, setNotFound] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [lightboxOpen, setLightboxOpen] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [lightboxIndex, setLightboxIndex] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(0);
    // Textes personnalisés par catégorie pour les 3 blocs avantages
    const categorySpecificTexts = {
        "amenagement-buanderie": {
            delivery: [
                "Service complet : conception, fabrication, livraison et pose"
            ],
            customization: [
                "Chaque création est unique, conçue sur mesure selon vos envies"
            ],
            quality: [
                "Fabrication locale avec des matériaux importés d'Europe"
            ]
        },
        bureau: {
            delivery: [
                "Nos équipes assurent la livraison et la pose clé en main"
            ],
            customization: [
                "Choisissez vos dimensions, vos couleurs et vos finitions"
            ],
            quality: [
                "Finition haut de gamme, qualité garantie par le Groupe FIMA"
            ]
        },
        cuisine: {
            delivery: [
                "Livraison et pose à domicile partout à Abidjan"
            ],
            customization: [
                "Du sur-mesure pour un intérieur qui vous ressemble"
            ],
            quality: [
                "FIMA DESIGN : de la conception à la réalisation, sans compromis sur la qualité"
            ]
        },
        dressing: {
            delivery: [
                "Nos équipes assurent la livraison et la pose clé en main"
            ],
            customization: [
                "Nos experts vous accompagnent dans la conception personnalisée de votre mobilier"
            ],
            quality: [
                "Un savoir-faire ivoirien reconnu depuis plusieurs générations"
            ]
        },
        "panneaux-decoratif": {
            delivery: [
                "Service complet : conception, fabrication, livraison et pose"
            ],
            customization: [
                "Chaque création est unique, conçue sur mesure selon vos envies"
            ],
            quality: [
                "Finition haut de gamme, qualité garantie par le Groupe FIMA"
            ]
        },
        "panneaux-decoratifs": {
            delivery: [
                "Service complet : conception, fabrication, livraison et pose"
            ],
            customization: [
                "Chaque création est unique, conçue sur mesure selon vos envies"
            ],
            quality: [
                "Finition haut de gamme, qualité garantie par le Groupe FIMA"
            ]
        },
        chambres: {
            delivery: [
                "Service complet : conception, fabrication, livraison et pose"
            ],
            customization: [
                "Un design qui s'adapte à votre espace et à votre style"
            ],
            quality: [
                "Design contemporain, robustesse et élégance à la fois"
            ]
        },
        portes: {
            delivery: [
                "Livré et installé sous 72H"
            ],
            customization: [
                "Choisissez vos dimensions, vos couleurs et vos finitions"
            ],
            quality: [
                "Fabrication locale avec des matériaux importés d'Europe"
            ]
        },
        "salle-a-manger": {
            delivery: [
                "Livraison et pose à domicile partout à Abidjan"
            ],
            customization: [
                "Un design qui s'adapte à votre espace et à votre style"
            ],
            quality: [
                "FIMA DESIGN : de la conception à la réalisation, sans compromis sur la qualité"
            ]
        },
        "salles-a-manger": {
            delivery: [
                "Livraison et pose à domicile partout à Abidjan"
            ],
            customization: [
                "Un design qui s'adapte à votre espace et à votre style"
            ],
            quality: [
                "FIMA DESIGN : de la conception à la réalisation, sans compromis sur la qualité"
            ]
        },
        salon: {
            delivery: [
                "Service complet : conception, fabrication, livraison et pose"
            ],
            customization: [
                "Choisissez vos dimensions, vos couleurs et vos finitions"
            ],
            quality: [
                "Finition haut de gamme, qualité garantie par le Groupe FIMA"
            ]
        },
        bureaux: {
            delivery: [
                "Nos équipes assurent la livraison et la pose clé en main"
            ],
            customization: [
                "Choisissez vos dimensions, vos couleurs et vos finitions"
            ],
            quality: [
                "Finition haut de gamme, qualité garantie par le Groupe FIMA"
            ]
        },
        panneaux: {
            delivery: [
                "Service complet : conception, fabrication, livraison et pose"
            ],
            customization: [
                "Chaque création est unique, conçue sur mesure selon vos envies"
            ],
            quality: [
                "Finition haut de gamme, qualité garantie par le Groupe FIMA"
            ]
        },
        "panneaux-decoratifs-interieurs": {
            delivery: [
                "Service complet : conception, fabrication, livraison et pose"
            ],
            customization: [
                "Chaque création est unique, conçue sur mesure selon vos envies"
            ],
            quality: [
                "Finition haut de gamme, qualité garantie par le Groupe FIMA"
            ]
        },
        "habillement-mural": {
            delivery: [
                "Service complet : conception, fabrication, livraison et pose"
            ],
            customization: [
                "Chaque création est unique, conçue sur mesure selon vos envies"
            ],
            quality: [
                "Finition haut de gamme, qualité garantie par le Groupe FIMA"
            ]
        }
    };
    // Textes par défaut si la catégorie n'a pas de textes spécifiques
    const defaultTexts = {
        delivery: [
            "Livraison et pose à domicile partout à Abidjan",
            "Livré et installé sous 48h",
            "Nos équipes assurent la livraison et la pose clé en main",
            "Livraison express avec installation professionnelle",
            "Service complet : conception, fabrication, livraison et pose"
        ],
        customization: [
            "Chaque création est unique, conçue sur mesure selon vos envies",
            "Choisissez vos dimensions, vos couleurs et vos finitions",
            "Un design qui s'adapte à votre espace et à votre style",
            "Du sur-mesure pour un intérieur qui vous ressemble",
            "Nos experts vous accompagnent dans la conception personnalisée de votre mobilier"
        ],
        quality: [
            "Fabrication locale avec des matériaux importés d'Italie et d'Europe",
            "Finition haut de gamme, qualité garantie par le Groupe FIMA",
            "Design contemporain, robustesse et élégance à la fois",
            "Un savoir-faire ivoirien reconnu depuis plusieurs générations",
            "FIMA DESIGN : de la conception à la réalisation, sans compromis sur la qualité"
        ]
    };
    // Récupérer les textes appropriés selon la catégorie
    const getTextsForCategory = ()=>{
        const slug = category?.slug || categorySlug;
        // Extraire le slug réel en enlevant le préfixe "category-detail/"
        const actualSlug = slug.replace("category-detail/", "");
        console.log("🔍 Getting texts for category slug:", slug);
        console.log("🔍 Actual slug (without prefix):", actualSlug);
        console.log("📝 Available specific texts:", Object.keys(categorySpecificTexts));
        const texts = categorySpecificTexts[actualSlug] || defaultTexts;
        console.log("✅ Using texts:", texts === defaultTexts ? "DEFAULT" : "SPECIFIC");
        return texts;
    };
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        console.log("🔍 CategoryDetailPage - Loading category:", categorySlug);
        console.log("📦 allCategories from hook:", allCategories);
        console.log("⏳ loading:", loading);
        // Si le slug est vide, marquer comme non trouvé
        if (!categorySlug || categorySlug.trim() === "") {
            console.error("❌ Category slug is empty");
            setNotFound(true);
            return;
        }
        // Si en cours de chargement, attendre
        if (loading) {
            console.log("⏳ Still loading, waiting...");
            return;
        }
        // Utiliser DEFAULT_CATEGORIES comme fallback si allCategories est vide ou invalide
        const categoriesToUse = allCategories && (Array.isArray(allCategories) ? allCategories.length > 0 : Object.keys(allCategories).length > 0) ? allCategories : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useProductCategories$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["DEFAULT_CATEGORIES"];
        console.log("📦 Using categories:", categoriesToUse);
        console.log("🔍 Type of categories:", typeof categoriesToUse);
        console.log("🔍 Is Array?:", Array.isArray(categoriesToUse));
        // Extraire les catégories FIMA Design
        const fimaDesignCategories = Array.isArray(categoriesToUse) ? categoriesToUse : categoriesToUse["fima-design"] || [];
        console.log("🗂️ FIMA Design categories:", fimaDesignCategories);
        console.log("🗂️ Number of categories:", fimaDesignCategories.length);
        // Trouver la catégorie correspondante par slug ou key
        const foundCategory = fimaDesignCategories.find((cat)=>cat.slug === categorySlug || cat.key === categorySlug);
        if (foundCategory) {
            console.log("✅ Category found:", foundCategory.name);
            setCategory(foundCategory);
            setNotFound(false);
            // Récupérer les images de la catégorie depuis les données dynamiques
            const images = foundCategory.images || [];
            console.log("📷 Images for category:", foundCategory.name, ":", images.length, "images");
            if (images.length > 0) {
                console.log("🖼️ First image:", images[0]);
                console.log("🖼️ All images:", images);
            } else {
                console.warn("⚠️ No images found for category:", foundCategory.name);
            }
            setCategoryImages(images);
        } else {
            // Si aucune catégorie trouvée après le chargement
            console.error("❌ Category not found for slug:", categorySlug);
            console.error("Available categories:", fimaDesignCategories.map((c)=>({
                    key: c.key,
                    slug: c.slug,
                    name: c.name
                })));
            setNotFound(true);
        }
    }, [
        categorySlug,
        allCategories,
        loading
    ]);
    // Message d'erreur si la catégorie n'existe pas
    if (notFound && !loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex items-center justify-center bg-white",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "text-center max-w-md px-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$react$2d$fontawesome__$5b$external$5d$__$2840$fortawesome$2f$react$2d$fontawesome$2c$__esm_import$29$__["FontAwesomeIcon"], {
                        icon: __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons__$5b$external$5d$__$2840$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2c$__esm_import$29$__["faCircleExclamation"],
                        className: "text-5xl mb-4",
                        style: {
                            color: "#E30613"
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/CategoryDetailPage.tsx",
                        lineNumber: 371,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                        className: "text-2xl mb-4",
                        style: {
                            fontFamily: "Montserrat",
                            color: "#000000"
                        },
                        children: "Catégorie introuvable"
                    }, void 0, false, {
                        fileName: "[project]/src/components/CategoryDetailPage.tsx",
                        lineNumber: 376,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                        className: "mb-6",
                        style: {
                            color: "#6E6E6E",
                            fontFamily: "Montserrat"
                        },
                        children: [
                            'La catégorie "',
                            categorySlug,
                            "\" n'existe pas ou n'est plus disponible."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/CategoryDetailPage.tsx",
                        lineNumber: 385,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                        onClick: ()=>onNavigate("fima-design"),
                        className: "px-6 py-3 transition-all",
                        style: {
                            backgroundColor: "#B5C233",
                            color: "#FFFFFF",
                            fontFamily: "Montserrat"
                        },
                        onMouseEnter: (e)=>e.currentTarget.style.backgroundColor = "#a0ad2a",
                        onMouseLeave: (e)=>e.currentTarget.style.backgroundColor = "#B5C233",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$react$2d$fontawesome__$5b$external$5d$__$2840$fortawesome$2f$react$2d$fontawesome$2c$__esm_import$29$__["FontAwesomeIcon"], {
                                icon: __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons__$5b$external$5d$__$2840$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2c$__esm_import$29$__["faArrowLeft"],
                                className: "mr-2"
                            }, void 0, false, {
                                fileName: "[project]/src/components/CategoryDetailPage.tsx",
                                lineNumber: 412,
                                columnNumber: 13
                            }, this),
                            "Retour à FIMA Design"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/CategoryDetailPage.tsx",
                        lineNumber: 395,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/CategoryDetailPage.tsx",
                lineNumber: 370,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/CategoryDetailPage.tsx",
            lineNumber: 369,
            columnNumber: 7
        }, this);
    }
    // Chargement en cours
    if (!category || loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex items-center justify-center bg-white",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$react$2d$fontawesome__$5b$external$5d$__$2840$fortawesome$2f$react$2d$fontawesome$2c$__esm_import$29$__["FontAwesomeIcon"], {
                        icon: __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons__$5b$external$5d$__$2840$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2c$__esm_import$29$__["faSpinner"],
                        className: "fa-spin text-4xl mb-4",
                        style: {
                            color: "#B5C233"
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/CategoryDetailPage.tsx",
                        lineNumber: 428,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                        style: {
                            color: "#6E6E6E",
                            fontFamily: "Montserrat"
                        },
                        children: "Chargement de la catégorie..."
                    }, void 0, false, {
                        fileName: "[project]/src/components/CategoryDetailPage.tsx",
                        lineNumber: 433,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/CategoryDetailPage.tsx",
                lineNumber: 427,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/CategoryDetailPage.tsx",
            lineNumber: 426,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "relative py-16 px-4",
                style: {
                    backgroundColor: "#F5F5F5"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "mb-8",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                onClick: ()=>onNavigate("fima-design"),
                                className: "flex items-center gap-2 transition-colors",
                                style: {
                                    color: "#6E6E6E",
                                    fontFamily: "Montserrat"
                                },
                                onMouseEnter: (e)=>e.currentTarget.style.color = "#B5C233",
                                onMouseLeave: (e)=>e.currentTarget.style.color = "#6E6E6E",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$react$2d$fontawesome__$5b$external$5d$__$2840$fortawesome$2f$react$2d$fontawesome$2c$__esm_import$29$__["FontAwesomeIcon"], {
                                        icon: __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons__$5b$external$5d$__$2840$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2c$__esm_import$29$__["faArrowLeft"]
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CategoryDetailPage.tsx",
                                        lineNumber: 470,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                        children: "Retour à FIMA Design"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CategoryDetailPage.tsx",
                                        lineNumber: 471,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CategoryDetailPage.tsx",
                                lineNumber: 456,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/CategoryDetailPage.tsx",
                            lineNumber: 455,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                            className: "text-4xl mb-4",
                            style: {
                                fontFamily: "Montserrat",
                                color: "#000000"
                            },
                            children: category.name
                        }, void 0, false, {
                            fileName: "[project]/src/components/CategoryDetailPage.tsx",
                            lineNumber: 476,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                            className: "text-xl max-w-3xl",
                            style: {
                                fontFamily: "Montserrat",
                                color: "#6E6E6E"
                            },
                            children: category.description || "Découvrez notre collection de mobilier sur mesure, conçue avec expertise et passion"
                        }, void 0, false, {
                            fileName: "[project]/src/components/CategoryDetailPage.tsx",
                            lineNumber: 485,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/CategoryDetailPage.tsx",
                    lineNumber: 453,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/CategoryDetailPage.tsx",
                lineNumber: 449,
                columnNumber: 7
            }, this),
            categoryImages.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "py-16 px-4 max-w-7xl mx-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                        className: "text-3xl mb-8",
                        style: {
                            fontFamily: "Montserrat",
                            color: "#000000"
                        },
                        children: "Notre collection"
                    }, void 0, false, {
                        fileName: "[project]/src/components/CategoryDetailPage.tsx",
                        lineNumber: 501,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                        children: categoryImages.map((image, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "aspect-square overflow-hidden bg-gray-100 group cursor-pointer",
                                onClick: ()=>{
                                    setLightboxOpen(true);
                                    setLightboxIndex(index);
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$figma$2f$ImageWithFallback$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["ImageWithFallback"], {
                                    src: image,
                                    alt: `${category.name} ${index + 1}`,
                                    className: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CategoryDetailPage.tsx",
                                    lineNumber: 520,
                                    columnNumber: 17
                                }, this)
                            }, index, false, {
                                fileName: "[project]/src/components/CategoryDetailPage.tsx",
                                lineNumber: 512,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/CategoryDetailPage.tsx",
                        lineNumber: 510,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/CategoryDetailPage.tsx",
                lineNumber: 500,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "py-12 px-4",
                style: {
                    backgroundColor: "#F5F5F5"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "max-w-4xl mx-auto text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                            className: "text-2xl mb-6",
                            style: {
                                fontFamily: "Montserrat",
                                color: "#000000"
                            },
                            children: "Prêt à concrétiser votre projet ?"
                        }, void 0, false, {
                            fileName: "[project]/src/components/CategoryDetailPage.tsx",
                            lineNumber: 537,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "flex flex-col sm:flex-row gap-4 justify-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setShowQuoteModal(true),
                                    className: "px-8 py-4 transition-all duration-300",
                                    style: {
                                        backgroundColor: "#B5C233",
                                        color: "#6E6E6E",
                                        fontFamily: "Montserrat"
                                    },
                                    onMouseEnter: (e)=>e.currentTarget.style.backgroundColor = "#a0ad2a",
                                    onMouseLeave: (e)=>e.currentTarget.style.backgroundColor = "#B5C233",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$react$2d$fontawesome__$5b$external$5d$__$2840$fortawesome$2f$react$2d$fontawesome$2c$__esm_import$29$__["FontAwesomeIcon"], {
                                            icon: __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons__$5b$external$5d$__$2840$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2c$__esm_import$29$__["faFileInvoice"],
                                            className: "mr-2"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CategoryDetailPage.tsx",
                                            lineNumber: 564,
                                            columnNumber: 15
                                        }, this),
                                        "Demander un devis"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/CategoryDetailPage.tsx",
                                    lineNumber: 547,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setShowExpertModal(true),
                                    className: "px-8 py-4 transition-all duration-300",
                                    style: {
                                        backgroundColor: "#6E6E6E",
                                        color: "#B5C233",
                                        border: "2px solid #6E6E6E",
                                        fontFamily: "Montserrat"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$react$2d$fontawesome__$5b$external$5d$__$2840$fortawesome$2f$react$2d$fontawesome$2c$__esm_import$29$__["FontAwesomeIcon"], {
                                            icon: __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons__$5b$external$5d$__$2840$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2c$__esm_import$29$__["faUserTie"],
                                            className: "mr-2"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CategoryDetailPage.tsx",
                                            lineNumber: 581,
                                            columnNumber: 15
                                        }, this),
                                        "Contacter un expert"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/CategoryDetailPage.tsx",
                                    lineNumber: 570,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/CategoryDetailPage.tsx",
                            lineNumber: 546,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/CategoryDetailPage.tsx",
                    lineNumber: 536,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/CategoryDetailPage.tsx",
                lineNumber: 532,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "py-16 px-4 max-w-7xl mx-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "grid md:grid-cols-3 gap-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "w-20 h-20 mx-auto mb-6 flex items-center justify-center",
                                    style: {
                                        backgroundColor: "#B5C233"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$react$2d$fontawesome__$5b$external$5d$__$2840$fortawesome$2f$react$2d$fontawesome$2c$__esm_import$29$__["FontAwesomeIcon"], {
                                        icon: __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons__$5b$external$5d$__$2840$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2c$__esm_import$29$__["faTruckFast"],
                                        className: "text-3xl",
                                        style: {
                                            color: "#6E6E6E"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CategoryDetailPage.tsx",
                                        lineNumber: 600,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CategoryDetailPage.tsx",
                                    lineNumber: 596,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                    className: "text-2xl mb-4",
                                    style: {
                                        fontFamily: "Montserrat",
                                        color: "#6E6E6E"
                                    },
                                    children: "Livraison & installation"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CategoryDetailPage.tsx",
                                    lineNumber: 606,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "space-y-3 text-left",
                                    style: {
                                        fontFamily: "Montserrat",
                                        color: "#6E6E6E"
                                    },
                                    children: getTextsForCategory().delivery.map((text, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                            className: "flex items-start gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$react$2d$fontawesome__$5b$external$5d$__$2840$fortawesome$2f$react$2d$fontawesome$2c$__esm_import$29$__["FontAwesomeIcon"], {
                                                    icon: __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons__$5b$external$5d$__$2840$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2c$__esm_import$29$__["faCheck"],
                                                    className: "mt-1 flex-shrink-0",
                                                    style: {
                                                        color: "#B5C233"
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CategoryDetailPage.tsx",
                                                    lineNumber: 628,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                    children: text
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CategoryDetailPage.tsx",
                                                    lineNumber: 633,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, index, true, {
                                            fileName: "[project]/src/components/CategoryDetailPage.tsx",
                                            lineNumber: 624,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CategoryDetailPage.tsx",
                                    lineNumber: 615,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/CategoryDetailPage.tsx",
                            lineNumber: 595,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "w-20 h-20 mx-auto mb-6 flex items-center justify-center",
                                    style: {
                                        backgroundColor: "#B5C233"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$react$2d$fontawesome__$5b$external$5d$__$2840$fortawesome$2f$react$2d$fontawesome$2c$__esm_import$29$__["FontAwesomeIcon"], {
                                        icon: __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons__$5b$external$5d$__$2840$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2c$__esm_import$29$__["faRulerCombined"],
                                        className: "text-3xl",
                                        style: {
                                            color: "#6E6E6E"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CategoryDetailPage.tsx",
                                        lineNumber: 646,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CategoryDetailPage.tsx",
                                    lineNumber: 642,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                    className: "text-2xl mb-4",
                                    style: {
                                        fontFamily: "Montserrat",
                                        color: "#6E6E6E"
                                    },
                                    children: "Personnalisation & sur mesure"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CategoryDetailPage.tsx",
                                    lineNumber: 652,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "space-y-3 text-left",
                                    style: {
                                        fontFamily: "Montserrat",
                                        color: "#6E6E6E"
                                    },
                                    children: getTextsForCategory().customization.map((text, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                            className: "flex items-start gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$react$2d$fontawesome__$5b$external$5d$__$2840$fortawesome$2f$react$2d$fontawesome$2c$__esm_import$29$__["FontAwesomeIcon"], {
                                                    icon: __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons__$5b$external$5d$__$2840$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2c$__esm_import$29$__["faCheck"],
                                                    className: "mt-1 flex-shrink-0",
                                                    style: {
                                                        color: "#B5C233"
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CategoryDetailPage.tsx",
                                                    lineNumber: 674,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                    children: text
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CategoryDetailPage.tsx",
                                                    lineNumber: 679,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, index, true, {
                                            fileName: "[project]/src/components/CategoryDetailPage.tsx",
                                            lineNumber: 670,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CategoryDetailPage.tsx",
                                    lineNumber: 661,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/CategoryDetailPage.tsx",
                            lineNumber: 641,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "w-20 h-20 mx-auto mb-6 flex items-center justify-center",
                                    style: {
                                        backgroundColor: "#B5C233"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$react$2d$fontawesome__$5b$external$5d$__$2840$fortawesome$2f$react$2d$fontawesome$2c$__esm_import$29$__["FontAwesomeIcon"], {
                                        icon: __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons__$5b$external$5d$__$2840$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2c$__esm_import$29$__["faCertificate"],
                                        className: "text-3xl",
                                        style: {
                                            color: "#6E6E6E"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CategoryDetailPage.tsx",
                                        lineNumber: 692,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CategoryDetailPage.tsx",
                                    lineNumber: 688,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                    className: "text-2xl mb-4",
                                    style: {
                                        fontFamily: "Montserrat",
                                        color: "#6E6E6E"
                                    },
                                    children: "Qualité & expertise"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CategoryDetailPage.tsx",
                                    lineNumber: 698,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "space-y-3 text-left",
                                    style: {
                                        fontFamily: "Montserrat",
                                        color: "#6E6E6E"
                                    },
                                    children: getTextsForCategory().quality.map((text, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                            className: "flex items-start gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$react$2d$fontawesome__$5b$external$5d$__$2840$fortawesome$2f$react$2d$fontawesome$2c$__esm_import$29$__["FontAwesomeIcon"], {
                                                    icon: __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons__$5b$external$5d$__$2840$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2c$__esm_import$29$__["faCheck"],
                                                    className: "mt-1 flex-shrink-0",
                                                    style: {
                                                        color: "#B5C233"
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CategoryDetailPage.tsx",
                                                    lineNumber: 720,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                    children: text
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CategoryDetailPage.tsx",
                                                    lineNumber: 725,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, index, true, {
                                            fileName: "[project]/src/components/CategoryDetailPage.tsx",
                                            lineNumber: 716,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CategoryDetailPage.tsx",
                                    lineNumber: 707,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/CategoryDetailPage.tsx",
                            lineNumber: 687,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/CategoryDetailPage.tsx",
                    lineNumber: 593,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/CategoryDetailPage.tsx",
                lineNumber: 592,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "py-16 px-4",
                style: {
                    backgroundColor: "#6E6E6E"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "max-w-4xl mx-auto text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                            className: "text-3xl mb-4",
                            style: {
                                fontFamily: "Montserrat",
                                color: "#B5C233"
                            },
                            children: "Transformons ensemble votre espace"
                        }, void 0, false, {
                            fileName: "[project]/src/components/CategoryDetailPage.tsx",
                            lineNumber: 740,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                            className: "text-xl mb-8",
                            style: {
                                fontFamily: "Montserrat",
                                color: "#B5C233"
                            },
                            children: "40 ans d'expertise au service de votre projet"
                        }, void 0, false, {
                            fileName: "[project]/src/components/CategoryDetailPage.tsx",
                            lineNumber: 749,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "flex flex-col sm:flex-row gap-4 justify-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setShowQuoteModal(true),
                                    className: "px-8 py-4 transition-all duration-300",
                                    style: {
                                        backgroundColor: "#B5C233",
                                        color: "#6E6E6E",
                                        fontFamily: "Montserrat"
                                    },
                                    onMouseEnter: (e)=>e.currentTarget.style.backgroundColor = "#a0ad2a",
                                    onMouseLeave: (e)=>e.currentTarget.style.backgroundColor = "#B5C233",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$react$2d$fontawesome__$5b$external$5d$__$2840$fortawesome$2f$react$2d$fontawesome$2c$__esm_import$29$__["FontAwesomeIcon"], {
                                            icon: __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons__$5b$external$5d$__$2840$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2c$__esm_import$29$__["faFileInvoice"],
                                            className: "mr-2"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CategoryDetailPage.tsx",
                                            lineNumber: 776,
                                            columnNumber: 15
                                        }, this),
                                        "Demander un devis"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/CategoryDetailPage.tsx",
                                    lineNumber: 759,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setShowExpertModal(true),
                                    className: "px-8 py-4 transition-all duration-300",
                                    style: {
                                        backgroundColor: "transparent",
                                        color: "#B5C233",
                                        border: "2px solid #6E6E6E",
                                        fontFamily: "Montserrat"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$react$2d$fontawesome__$5b$external$5d$__$2840$fortawesome$2f$react$2d$fontawesome$2c$__esm_import$29$__["FontAwesomeIcon"], {
                                            icon: __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons__$5b$external$5d$__$2840$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2c$__esm_import$29$__["faPhone"],
                                            className: "mr-2"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CategoryDetailPage.tsx",
                                            lineNumber: 793,
                                            columnNumber: 15
                                        }, this),
                                        "Parler à un expert"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/CategoryDetailPage.tsx",
                                    lineNumber: 782,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/CategoryDetailPage.tsx",
                            lineNumber: 758,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/CategoryDetailPage.tsx",
                    lineNumber: 739,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/CategoryDetailPage.tsx",
                lineNumber: 735,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuoteRequestModal$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["QuoteRequestModal"], {
                isOpen: showQuoteModal,
                onClose: ()=>setShowQuoteModal(false)
            }, void 0, false, {
                fileName: "[project]/src/components/CategoryDetailPage.tsx",
                lineNumber: 804,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ExpertConsultationModal$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["ExpertConsultationModal"], {
                isOpen: showExpertModal,
                onClose: ()=>setShowExpertModal(false)
            }, void 0, false, {
                fileName: "[project]/src/components/CategoryDetailPage.tsx",
                lineNumber: 808,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImageLightbox$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["ImageLightbox"], {
                isOpen: lightboxOpen,
                onClose: ()=>setLightboxOpen(false),
                images: categoryImages,
                startIndex: lightboxIndex
            }, void 0, false, {
                fileName: "[project]/src/components/CategoryDetailPage.tsx",
                lineNumber: 812,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/CategoryDetailPage.tsx",
        lineNumber: 447,
        columnNumber: 5
    }, this);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=src_components_dfd7850a._.js.map