module.exports = [
"[project]/src/components/ui/utils.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$clsx__$5b$external$5d$__$28$clsx$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/clsx [external] (clsx, esm_import)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$tailwind$2d$merge__$5b$external$5d$__$28$tailwind$2d$merge$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/tailwind-merge [external] (tailwind-merge, esm_import)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$clsx__$5b$external$5d$__$28$clsx$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$tailwind$2d$merge__$5b$external$5d$__$28$tailwind$2d$merge$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$clsx__$5b$external$5d$__$28$clsx$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$tailwind$2d$merge__$5b$external$5d$__$28$tailwind$2d$merge$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$externals$5d2f$tailwind$2d$merge__$5b$external$5d$__$28$tailwind$2d$merge$2c$__esm_import$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$externals$5d2f$clsx__$5b$external$5d$__$28$clsx$2c$__esm_import$29$__["clsx"])(inputs));
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/components/ui/avatar.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "Avatar",
    ()=>Avatar,
    "AvatarFallback",
    ()=>AvatarFallback,
    "AvatarImage",
    ()=>AvatarImage
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$radix$2d$ui$2f$react$2d$avatar__$5b$external$5d$__$2840$radix$2d$ui$2f$react$2d$avatar$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/@radix-ui/react-avatar [external] (@radix-ui/react-avatar, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/utils.ts [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f40$radix$2d$ui$2f$react$2d$avatar__$5b$external$5d$__$2840$radix$2d$ui$2f$react$2d$avatar$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f40$radix$2d$ui$2f$react$2d$avatar__$5b$external$5d$__$2840$radix$2d$ui$2f$react$2d$avatar$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
"use client";
;
;
;
function Avatar({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$radix$2d$ui$2f$react$2d$avatar__$5b$external$5d$__$2840$radix$2d$ui$2f$react$2d$avatar$2c$__esm_import$29$__["Root"], {
        "data-slot": "avatar",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["cn"])("relative flex size-10 shrink-0 overflow-hidden rounded-full", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/avatar.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
function AvatarImage({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$radix$2d$ui$2f$react$2d$avatar__$5b$external$5d$__$2840$radix$2d$ui$2f$react$2d$avatar$2c$__esm_import$29$__["Image"], {
        "data-slot": "avatar-image",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["cn"])("aspect-square size-full", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/avatar.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
}
function AvatarFallback({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$radix$2d$ui$2f$react$2d$avatar__$5b$external$5d$__$2840$radix$2d$ui$2f$react$2d$avatar$2c$__esm_import$29$__["Fallback"], {
        "data-slot": "avatar-fallback",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["cn"])("bg-muted flex size-full items-center justify-center rounded-full", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/avatar.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/components/ui/input.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/utils.ts [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
const Input = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["forwardRef"](({ className, type, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
        type: type,
        "data-slot": "input",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["cn"])("file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 border px-3 py-1 text-base bg-input-background transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", className),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/input.tsx",
        lineNumber: 11,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
Input.displayName = "Input";
;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/components/figma/ImageWithFallback.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ImageWithFallback",
    ()=>ImageWithFallback,
    "extractImageUrl",
    ()=>extractImageUrl
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
;
;
const ERROR_IMG_SRC = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg==';
// FIMA brand fallback for logo
const FIMA_LOGO_FALLBACK = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjQwIiB2aWV3Qm94PSIwIDAgMTIwIDQwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMjAiIGhlaWdodD0iNDAiIGZpbGw9IiNCNUMyMzMiIHJ4PSI0Ii8+PHRleHQgeD0iNjAiIHk9IjI2IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSIgZm9udC1mYW1pbHk9Ik1vbnRzZXJyYXQsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTgiIGZvbnQtd2VpZ2h0PSJib2xkIj5GSU1BPC90ZXh0Pjwvc3ZnPg==';
// Map des URLs défaillantes vers leurs remplacements
const BROKEN_IMAGE_REPLACEMENTS = {
    'photo-1586880244386-8b3345c9bca8': 'https://images.unsplash.com/photo-1659986480984-9b7a847168d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBiZWRyb29tJTIwbHV4dXJ5JTIwbWF0dHJlc3N8ZW58MXx8fHwxNzU3NjMyMjA0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    'photo-1723111568816-48c31eca8132': 'https://images.unsplash.com/photo-1641893979088-87d4d9604c36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXJuaXR1cmUlMjBkZXNpZ24lMjB3b3Jrc2hvcHxlbnwxfHx8fDE3NTc2MzIyMDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    // URLs problématiques signalées dans les erreurs
    'photo-1586047844853-e2044ab00b8e': 'https://images.unsplash.com/photo-1585086287371-e455901ee81e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW1vcnklMjBmb2FtJTIwcGlsbG93JTIwY29tZm9ydHxlbnwxfHx8fDE3NTc5NDAzNjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    'photo-1520637836862-4d197d17c50a': 'https://images.unsplash.com/photo-1595622543083-5081cbe96e24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb3duJTIwZmVhdGhlciUyMHBpbGxvdyUyMGx1eHVyeXxlbnwxfHx8fDE3NTc5NDAzNzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    // Fallbacks supplémentaires pour différents contextes
    'broken-glass': 'https://images.unsplash.com/photo-1634412114581-6376e49ef8e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbGFzcyUyMGJ1aWxkaW5nJTIwbW9kZXJuJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc1NzYzMjIxMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    'broken-furniture': 'https://images.unsplash.com/photo-1641893979088-87d4d9604c36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXJuaXR1cmUlMjBkZXNpZ24lMjB3b3Jrc2hvcHxlbnwxfHx8fDE3NTc2MzIyMDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
};
// Fonction pour remplacer les URLs défaillantes
const replaceBrokenImageUrl = (url)=>{
    for (const [brokenId, replacementUrl] of Object.entries(BROKEN_IMAGE_REPLACEMENTS)){
        if (url.includes(brokenId)) {
            if ("TURBOPACK compile-time truthy", 1) {
                console.log(`🔄 Replacing broken image URL: ${brokenId} → new image`);
            }
            return replacementUrl;
        }
    }
    // Vérification supplémentaire pour les URLs avec des paramètres différents mais même ID de photo
    const photoIdMatch = url.match(/photo-([a-f0-9-]+)/);
    if (photoIdMatch) {
        const photoId = `photo-${photoIdMatch[1]}`;
        if (BROKEN_IMAGE_REPLACEMENTS[photoId]) {
            if ("TURBOPACK compile-time truthy", 1) {
                console.log(`🔄 Replacing broken image URL by photo ID: ${photoId} → new image`);
            }
            return BROKEN_IMAGE_REPLACEMENTS[photoId];
        }
    }
    return url;
};
const extractImageUrl = (imageData)=>{
    // Cas 1: Structure Strapi complète { data: { attributes: { url: "..." } } }
    if (imageData?.data?.attributes?.url) {
        return replaceBrokenImageUrl(imageData.data.attributes.url);
    }
    // Cas 2: Structure simplifiée { attributes: { url: "..." } }
    if (imageData?.attributes?.url) {
        return replaceBrokenImageUrl(imageData.attributes.url);
    }
    // Cas 3: URL directe (string)
    if (typeof imageData === 'string') {
        return replaceBrokenImageUrl(imageData);
    }
    // Cas 4: URL dans la propriété url
    if (imageData?.url && typeof imageData.url === 'string') {
        return replaceBrokenImageUrl(imageData.url);
    }
    // Fallback par défaut - image moderne et fiable
    return 'https://images.unsplash.com/photo-1659986480984-9b7a847168d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBiZWRyb29tJTIwbHV4dXJ5JTIwbWF0dHJlc3N8ZW58MXx8fHwxNzU3NjMyMjA0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral';
};
function ImageWithFallback(props) {
    const [didError, setDidError] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(true);
    const handleError = ()=>{
        // Ne logger que si c'est une vraie erreur (pas un fallback prévu)
        const isBrokenUrl = Object.keys(BROKEN_IMAGE_REPLACEMENTS).some((brokenId)=>validImageUrl.includes(brokenId));
        if (("TURBOPACK compile-time value", "development") === 'development' && validImageUrl && !validImageUrl.includes('data:image') && !isBrokenUrl) {
            console.warn('🖼️ Image failed to load, switching to fallback:', validImageUrl);
        }
        setIsLoading(false);
        setDidError(true);
    };
    const handleLoad = ()=>{
        setIsLoading(false);
    };
    const { src, alt, style, className, ...rest } = props;
    // Choose appropriate fallback based on alt text
    const getFallbackImage = ()=>{
        if (alt && (alt.toLowerCase().includes('fima') || alt.toLowerCase().includes('logo'))) {
            return FIMA_LOGO_FALLBACK;
        }
        return ERROR_IMG_SRC;
    };
    // Obtenir l'URL valide
    const validImageUrl = extractImageUrl(src);
    // Debug: log seulement les erreurs critiques en développement
    __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].useEffect(()=>{
        if (("TURBOPACK compile-time value", "development") === 'development' && src && typeof src === 'object' && !validImageUrl) {
            // Éviter les erreurs de structure circulaire en ne loggant que le type
            const srcType = typeof src;
            const srcKeys = src && typeof src === 'object' ? Object.keys(src).join(', ') : '';
            console.warn('⚠️ Could not extract valid URL from image object. Type:', srcType, 'Keys:', srcKeys);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        validImageUrl
    ]); // On évite 'src' dans les dépendances car il peut contenir des références circulaires
    // Reset states when source changes
    __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].useEffect(()=>{
        setDidError(false);
        setIsLoading(true);
        // Timeout de sécurité : forcer l'affichage après 2 secondes si onLoad ne se déclenche pas
        // Ceci résout les problèmes avec les images Figma qui peuvent ne pas déclencher onLoad
        const timeoutId = setTimeout(()=>{
            if (isLoading) {
                console.log('⏱️ Image load timeout reached, forcing display:', validImageUrl);
                setIsLoading(false);
            }
        }, 2000);
        return ()=>clearTimeout(timeoutId);
    }, [
        validImageUrl
    ]);
    return didError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: `inline-block bg-muted text-center align-middle ${className ?? ''}`,
        style: style,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center w-full h-full",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("img", {
                src: getFallbackImage(),
                alt: alt || "Image non disponible",
                ...rest,
                "data-original-url": validImageUrl,
                onError: undefined,
                onLoad: undefined
            }, void 0, false, {
                fileName: "[project]/src/components/figma/ImageWithFallback.tsx",
                lineNumber: 140,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/figma/ImageWithFallback.tsx",
            lineNumber: 139,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/figma/ImageWithFallback.tsx",
        lineNumber: 135,
        columnNumber: 5
    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("img", {
        src: validImageUrl,
        alt: alt,
        className: `${className ?? ''} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`,
        style: style,
        ...rest,
        onError: handleError,
        onLoad: handleLoad
    }, void 0, false, {
        fileName: "[project]/src/components/figma/ImageWithFallback.tsx",
        lineNumber: 151,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/ProductsMegaMenu.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductsMegaMenu",
    ()=>ProductsMegaMenu
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$dom__$5b$external$5d$__$28$react$2d$dom$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react-dom [external] (react-dom, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$figma$2f$ImageWithFallback$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/figma/ImageWithFallback.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$5bb4257f511908ba6d68f0f0b3c015dccb725fae$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$5bb4257f511908ba6d68f0f0b3c015dccb725fae$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/assets/5bb4257f511908ba6d68f0f0b3c015dccb725fae.png.mjs { IMAGE => "[project]/src/assets/5bb4257f511908ba6d68f0f0b3c015dccb725fae.png (static in ecmascript, tag client)" } [ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useCMSCategories$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useCMSCategories.ts [ssr] (ecmascript)");
;
;
;
;
;
;
function ProductsMegaMenu({ onNavigate, onClose, position }) {
    const { categories } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useCMSCategories$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useCMSCategories"])();
    // Grouper et trier les catégories par business_unit et order_index
    const categoriesByBusinessUnit = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useMemo"])(()=>{
        const couchageCategories = categories.filter((cat)=>cat.business_unit === 'couchage' && cat.is_active).sort((a, b)=>a.order_index - b.order_index).slice(0, 4); // Limiter aux 4 premiers
        const designCategories = categories.filter((cat)=>cat.business_unit === 'design' && cat.is_active).sort((a, b)=>a.order_index - b.order_index).slice(0, 4); // Limiter aux 4 premiers
        const glassCategories = categories.filter((cat)=>cat.business_unit === 'univers-glass' && cat.is_active).sort((a, b)=>a.order_index - b.order_index).slice(0, 4); // Limiter aux 4 premiers
        return {
            couchage: {
                title: "FIMA Couchage",
                color: "#B5C233",
                items: couchageCategories
            },
            design: {
                title: "FIMA Design",
                color: "#6E6E6E",
                items: designCategories
            },
            glass: {
                title: "Univers Glass",
                color: "#0EA5E9",
                items: glassCategories
            }
        };
    }, [
        categories
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$dom__$5b$external$5d$__$28$react$2d$dom$2c$__cjs$29$__["createPortal"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: "fixed bg-white shadow-2xl z-[99999] border-t-4",
        style: {
            top: `${position.top}px`,
            left: "20px",
            right: "20px",
            borderTopColor: "#B5C233",
            maxHeight: "calc(100vh - 150px)",
            overflow: "auto"
        },
        onMouseDown: (e)=>e.stopPropagation(),
        onTouchStart: (e)=>e.stopPropagation(),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: "m-0 p-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "p-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-5 gap-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                    className: "font-bold mb-5 pb-3 border-b-2 text-base",
                                    style: {
                                        color: categoriesByBusinessUnit.couchage.color,
                                        borderBottomColor: categoriesByBusinessUnit.couchage.color,
                                        fontFamily: "Montserrat"
                                    },
                                    children: categoriesByBusinessUnit.couchage.title
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProductsMegaMenu.tsx",
                                    lineNumber: 75,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "space-y-4",
                                    children: categoriesByBusinessUnit.couchage.items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                            onClick: ()=>{
                                                onNavigate("all-products", item.slug);
                                                onClose();
                                            },
                                            className: "w-full text-left group transition-all hover:translate-x-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    className: "font-semibold text-sm group-hover:underline transition-colors",
                                                    style: {
                                                        color: "#2C2C2C"
                                                    },
                                                    children: item.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ProductsMegaMenu.tsx",
                                                    lineNumber: 97,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    className: "text-xs mt-0.5",
                                                    style: {
                                                        color: "#888"
                                                    },
                                                    children: item.description
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ProductsMegaMenu.tsx",
                                                    lineNumber: 103,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, item.id, true, {
                                            fileName: "[project]/src/components/ProductsMegaMenu.tsx",
                                            lineNumber: 89,
                                            columnNumber: 21
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProductsMegaMenu.tsx",
                                    lineNumber: 86,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ProductsMegaMenu.tsx",
                            lineNumber: 74,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                    className: "font-bold mb-5 pb-3 border-b-2 text-base",
                                    style: {
                                        color: categoriesByBusinessUnit.design.color,
                                        borderBottomColor: categoriesByBusinessUnit.design.color,
                                        fontFamily: "Montserrat"
                                    },
                                    children: categoriesByBusinessUnit.design.title
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProductsMegaMenu.tsx",
                                    lineNumber: 117,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "space-y-4",
                                    children: categoriesByBusinessUnit.design.items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                            onClick: ()=>{
                                                onNavigate("category-detail", item.slug);
                                                onClose();
                                            },
                                            className: "w-full text-left group transition-all hover:translate-x-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    className: "font-semibold text-sm group-hover:underline transition-colors",
                                                    style: {
                                                        color: "#2C2C2C"
                                                    },
                                                    children: item.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ProductsMegaMenu.tsx",
                                                    lineNumber: 138,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    className: "text-xs mt-0.5",
                                                    style: {
                                                        color: "#888"
                                                    },
                                                    children: item.description
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ProductsMegaMenu.tsx",
                                                    lineNumber: 144,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, item.id, true, {
                                            fileName: "[project]/src/components/ProductsMegaMenu.tsx",
                                            lineNumber: 130,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProductsMegaMenu.tsx",
                                    lineNumber: 128,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ProductsMegaMenu.tsx",
                            lineNumber: 116,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                    className: "font-bold mb-5 pb-3 border-b-2 text-base",
                                    style: {
                                        color: categoriesByBusinessUnit.glass.color,
                                        borderBottomColor: categoriesByBusinessUnit.glass.color,
                                        fontFamily: "Montserrat"
                                    },
                                    children: categoriesByBusinessUnit.glass.title
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProductsMegaMenu.tsx",
                                    lineNumber: 157,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "space-y-4",
                                    children: categoriesByBusinessUnit.glass.items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                            onClick: ()=>{
                                                onNavigate("all-products", item.slug);
                                                onClose();
                                            },
                                            className: "w-full text-left group transition-all hover:translate-x-1",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "font-semibold text-sm group-hover:underline transition-colors",
                                                style: {
                                                    color: "#2C2C2C"
                                                },
                                                children: item.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ProductsMegaMenu.tsx",
                                                lineNumber: 178,
                                                columnNumber: 21
                                            }, this)
                                        }, item.id, false, {
                                            fileName: "[project]/src/components/ProductsMegaMenu.tsx",
                                            lineNumber: 170,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProductsMegaMenu.tsx",
                                    lineNumber: 168,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ProductsMegaMenu.tsx",
                            lineNumber: 156,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "overflow-hidden relative group cursor-pointer h-[320px] col-span-2",
                            onClick: ()=>{
                                onNavigate("all-products");
                                onClose();
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$figma$2f$ImageWithFallback$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["ImageWithFallback"], {
                                    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$5bb4257f511908ba6d68f0f0b3c015dccb725fae$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$5bb4257f511908ba6d68f0f0b3c015dccb725fae$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                    alt: "Découvrez notre catalogue",
                                    className: "w-full h-full object-cover"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProductsMegaMenu.tsx",
                                    lineNumber: 203,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 bg-white/10 group-hover:bg-white/20 transition-all flex flex-col items-center justify-center p-6 text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h4", {
                                            className: "font-bold text-xl mb-3 text-white",
                                            style: {
                                                fontFamily: "Montserrat",
                                                textShadow: "0 2px 4px rgba(0,0,0,0.3)"
                                            },
                                            children: "Découvrez notre catalogue"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProductsMegaMenu.tsx",
                                            lineNumber: 209,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "px-6 py-3 bg-white font-semibold transition-all hover:scale-105",
                                            style: {
                                                color: "#6E6E6E"
                                            },
                                            children: "Voir tous les produits →"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProductsMegaMenu.tsx",
                                            lineNumber: 218,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ProductsMegaMenu.tsx",
                                    lineNumber: 208,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ProductsMegaMenu.tsx",
                            lineNumber: 196,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ProductsMegaMenu.tsx",
                    lineNumber: 72,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ProductsMegaMenu.tsx",
                lineNumber: 71,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/ProductsMegaMenu.tsx",
            lineNumber: 70,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ProductsMegaMenu.tsx",
        lineNumber: 57,
        columnNumber: 5
    }, this), document.body);
}
}),
"[project]/src/components/MobileScrollIndicator.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MobileScrollIndicator",
    ()=>MobileScrollIndicator
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [ssr] (ecmascript) <export default as ChevronDown>");
;
;
;
function MobileScrollIndicator({ showOnTop = true }) {
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(true);
    const [scrollProgress, setScrollProgress] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        const handleScroll = ()=>{
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = scrollTop / docHeight * 100;
            setScrollProgress(progress);
            // Masquer l'indicateur après 20% de scroll ou sur les grands écrans
            if (window.innerWidth >= 768 || progress > 20) {
                setIsVisible(false);
            } else if (progress < 5) {
                setIsVisible(true);
            }
        };
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleScroll);
        // Check initial state
        handleScroll();
        return ()=>{
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
        };
    }, []);
    const scrollToNext = ()=>{
        const sections = document.querySelectorAll('section');
        if (sections.length > 1) {
            sections[1].scrollIntoView({
                behavior: 'smooth'
            });
        }
    };
    if (!isVisible) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                onClick: scrollToNext,
                className: "scroll-indicator lg:hidden",
                style: {
                    background: '#B5C233',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                },
                "aria-label": "Faire défiler vers le bas",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                    className: "w-6 h-6"
                }, void 0, false, {
                    fileName: "[project]/src/components/MobileScrollIndicator.tsx",
                    lineNumber: 63,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/MobileScrollIndicator.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            showOnTop && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "fixed top-0 left-0 h-1 z-50 lg:hidden transition-all duration-300",
                style: {
                    width: `${scrollProgress}%`,
                    background: 'linear-gradient(90deg, #B5C233, #E30613)',
                    opacity: scrollProgress > 5 ? 1 : 0
                }
            }, void 0, false, {
                fileName: "[project]/src/components/MobileScrollIndicator.tsx",
                lineNumber: 68,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/src/components/BusinessUnitCard.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "BusinessUnitCard",
    ()=>BusinessUnitCard
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$figma$2f$ImageWithFallback$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/figma/ImageWithFallback.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$react$2d$fontawesome__$5b$external$5d$__$2840$fortawesome$2f$react$2d$fontawesome$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/@fortawesome/react-fontawesome [external] (@fortawesome/react-fontawesome, esm_import)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons__$5b$external$5d$__$2840$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/@fortawesome/free-solid-svg-icons [external] (@fortawesome/free-solid-svg-icons, esm_import)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$react$2d$fontawesome__$5b$external$5d$__$2840$fortawesome$2f$react$2d$fontawesome$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons__$5b$external$5d$__$2840$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$react$2d$fontawesome__$5b$external$5d$__$2840$fortawesome$2f$react$2d$fontawesome$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons__$5b$external$5d$__$2840$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
function BusinessUnitCard({ id, name, title, color, categories, onCategoryClick, onBusinessUnitClick, heroData }) {
    const handleCardClick = ()=>{
        onBusinessUnitClick(id);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: "bg-white shadow-lg hover:shadow-xl active:shadow-md transition-all duration-300 overflow-hidden group cursor-pointer flex flex-col h-full",
        style: {
            touchAction: "manipulation",
            WebkitTapHighlightColor: "transparent",
            userSelect: "none"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "relative h-24 text-white overflow-hidden flex items-center flex-shrink-0",
                style: {
                    backgroundColor: color
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "relative z-10 text-left pt-[0px] pr-[0px] pb-[0px] pl-[23px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                className: "text-xl font-bold mb-1",
                                style: {
                                    fontFamily: "Montserrat",
                                    color: name === "FIMA Design" ? "#B5C233" : name === "UNIVERS GLASS" ? "#FFFFFF" : "#6E6E6E",
                                    textTransform: "uppercase"
                                },
                                children: name
                            }, void 0, false, {
                                fileName: "[project]/src/components/BusinessUnitCard.tsx",
                                lineNumber: 60,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                className: "text-sm opacity-90",
                                style: {
                                    color: name === "FIMA Couchage" ? "#6E6E6E" : name === "FIMA Design" ? "#B5C233" : "rgba(219,213,213,1)"
                                },
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/src/components/BusinessUnitCard.tsx",
                                lineNumber: 75,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/BusinessUnitCard.tsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "absolute top-0 right-0 w-24 h-24 opacity-10",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "w-full h-full bg-white transform translate-x-8 -translate-y-8"
                        }, void 0, false, {
                            fileName: "[project]/src/components/BusinessUnitCard.tsx",
                            lineNumber: 91,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/BusinessUnitCard.tsx",
                        lineNumber: 90,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/BusinessUnitCard.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "p-6 flex flex-col flex-grow",
                children: [
                    heroData && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                className: "text-sm text-gray-600 mb-4",
                                style: {
                                    fontFamily: "Inter"
                                },
                                children: heroData.heroDescription
                            }, void 0, false, {
                                fileName: "[project]/src/components/BusinessUnitCard.tsx",
                                lineNumber: 101,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "space-y-2 mb-4",
                                children: heroData.heroFeatures.map((feature, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$react$2d$fontawesome__$5b$external$5d$__$2840$fortawesome$2f$react$2d$fontawesome$2c$__esm_import$29$__["FontAwesomeIcon"], {
                                                icon: __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons__$5b$external$5d$__$2840$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2c$__esm_import$29$__["faCircleCheck"],
                                                className: "w-4 h-4",
                                                style: {
                                                    color
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/BusinessUnitCard.tsx",
                                                lineNumber: 115,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                className: "text-sm text-gray-700",
                                                style: {
                                                    fontFamily: "Inter"
                                                },
                                                children: feature
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/BusinessUnitCard.tsx",
                                                lineNumber: 120,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, index, true, {
                                        fileName: "[project]/src/components/BusinessUnitCard.tsx",
                                        lineNumber: 111,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/BusinessUnitCard.tsx",
                                lineNumber: 109,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/BusinessUnitCard.tsx",
                        lineNumber: 99,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "mb-4 flex-grow",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h4", {
                                className: "text-sm font-medium mb-3 opacity-75",
                                style: {
                                    color: "#6E6E6E",
                                    fontFamily: "Inter"
                                },
                                children: "Nos spécialités :"
                            }, void 0, false, {
                                fileName: "[project]/src/components/BusinessUnitCard.tsx",
                                lineNumber: 134,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 gap-3",
                                style: {
                                    gridAutoRows: "1fr"
                                },
                                children: categories.slice(0, 4).map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                        onClick: (e)=>{
                                            e.stopPropagation();
                                            onCategoryClick(category.slug);
                                        },
                                        className: "group/cat relative overflow-hidden bg-gray-50 hover:bg-gray-100 active:bg-gray-200 transition-all duration-300 border border-gray-200 hover:border-gray-300 flex flex-col",
                                        style: {
                                            touchAction: "manipulation",
                                            WebkitTapHighlightColor: "transparent",
                                            userSelect: "none",
                                            cursor: "pointer",
                                            minHeight: "44px"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "relative w-full",
                                                style: {
                                                    paddingBottom: "100%"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$figma$2f$ImageWithFallback$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["ImageWithFallback"], {
                                                        src: category.image,
                                                        alt: category.name,
                                                        className: "absolute inset-0 w-full h-full object-cover group-hover/cat:scale-105 transition-transform duration-300"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/BusinessUnitCard.tsx",
                                                        lineNumber: 166,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                        className: "absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover/cat:opacity-100 transition-opacity duration-300"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/BusinessUnitCard.tsx",
                                                        lineNumber: 171,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                        className: "absolute bottom-0 left-0 right-0 p-2",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                            className: "text-white font-medium text-xs text-left opacity-0 group-hover/cat:opacity-100 transition-opacity duration-300 block",
                                                            style: {
                                                                fontFamily: "Inter"
                                                            },
                                                            children: category.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/BusinessUnitCard.tsx",
                                                            lineNumber: 173,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/BusinessUnitCard.tsx",
                                                        lineNumber: 172,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/BusinessUnitCard.tsx",
                                                lineNumber: 162,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "p-2 flex items-center justify-center",
                                                style: {
                                                    minHeight: "44px"
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                    className: "text-xs font-medium text-gray-700 group-hover/cat:text-black transition-colors",
                                                    style: {
                                                        fontFamily: "Inter"
                                                    },
                                                    children: category.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/BusinessUnitCard.tsx",
                                                    lineNumber: 185,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/BusinessUnitCard.tsx",
                                                lineNumber: 181,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, category.slug, true, {
                                        fileName: "[project]/src/components/BusinessUnitCard.tsx",
                                        lineNumber: 147,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/BusinessUnitCard.tsx",
                                lineNumber: 140,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/BusinessUnitCard.tsx",
                        lineNumber: 133,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                        onClick: (e)=>{
                            e.stopPropagation();
                            handleCardClick();
                        },
                        className: "business-unit-btn w-full py-3 px-4 font-medium border-2 transition-all duration-300 hover:shadow-lg mt-auto",
                        style: {
                            borderColor: color,
                            color: name === "FIMA Couchage" ? "#6E6E6E" : name === "FIMA Design" ? "#B5C233" : color,
                            fontFamily: "Inter",
                            backgroundColor: "transparent",
                            touchAction: "manipulation",
                            WebkitTapHighlightColor: "transparent",
                            userSelect: "none",
                            cursor: "pointer",
                            minHeight: "48px"
                        },
                        "data-hover-bg": color,
                        children: heroData?.heroCtaText || "Découvrir plus"
                    }, void 0, false, {
                        fileName: "[project]/src/components/BusinessUnitCard.tsx",
                        lineNumber: 198,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/BusinessUnitCard.tsx",
                lineNumber: 96,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/BusinessUnitCard.tsx",
        lineNumber: 46,
        columnNumber: 5
    }, this);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/components/ProductCategoryCarousel.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "ProductCategoryCarousel",
    ()=>ProductCategoryCarousel
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$react$2d$fontawesome__$5b$external$5d$__$2840$fortawesome$2f$react$2d$fontawesome$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/@fortawesome/react-fontawesome [external] (@fortawesome/react-fontawesome, esm_import)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons__$5b$external$5d$__$2840$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/@fortawesome/free-solid-svg-icons [external] (@fortawesome/free-solid-svg-icons, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$figma$2f$ImageWithFallback$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/figma/ImageWithFallback.tsx [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$react$2d$fontawesome__$5b$external$5d$__$2840$fortawesome$2f$react$2d$fontawesome$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons__$5b$external$5d$__$2840$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$react$2d$fontawesome__$5b$external$5d$__$2840$fortawesome$2f$react$2d$fontawesome$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons__$5b$external$5d$__$2840$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
function ProductCategoryCarousel({ categories, onCategoryClick, accentColor = "#0EA5E9" }) {
    const scrollContainerRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(null);
    const [canScrollLeft, setCanScrollLeft] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [canScrollRight, setCanScrollRight] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(true);
    // Vérifier si on peut scroller dans chaque direction
    const checkScrollButtons = ()=>{
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        checkScrollButtons();
        const container = scrollContainerRef.current;
        if (container) {
            container.addEventListener("scroll", checkScrollButtons);
            return ()=>container.removeEventListener("scroll", checkScrollButtons);
        }
    }, [
        categories
    ]);
    const scroll = (direction)=>{
        if (scrollContainerRef.current) {
            const scrollAmount = direction === "left" ? -300 : 300;
            scrollContainerRef.current.scrollBy({
                left: scrollAmount,
                behavior: "smooth"
            });
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: "relative w-full mb-6",
        children: [
            canScrollLeft && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                onClick: ()=>scroll("left"),
                className: "absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg",
                style: {
                    width: "32px",
                    height: "32px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "1px solid #E5E7EB",
                    touchAction: "manipulation",
                    WebkitTapHighlightColor: "transparent"
                },
                "aria-label": "Catégorie précédente",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$react$2d$fontawesome__$5b$external$5d$__$2840$fortawesome$2f$react$2d$fontawesome$2c$__esm_import$29$__["FontAwesomeIcon"], {
                    icon: __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons__$5b$external$5d$__$2840$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2c$__esm_import$29$__["faChevronLeft"],
                    style: {
                        fontSize: '20px',
                        color: '#6E6E6E'
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/ProductCategoryCarousel.tsx",
                    lineNumber: 80,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ProductCategoryCarousel.tsx",
                lineNumber: 65,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                ref: scrollContainerRef,
                className: "flex gap-4 overflow-x-auto scrollbar-hide px-4 py-2",
                style: {
                    scrollSnapType: "x mandatory",
                    WebkitOverflowScrolling: "touch",
                    scrollbarWidth: "none",
                    msOverflowStyle: "none"
                },
                children: categories.map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            console.log('🎯 ProductCategoryCarousel - Category clicked:', category.name, 'slug:', category.slug);
                            if (!category.slug) {
                                console.error('❌ ProductCategoryCarousel - Empty slug for category:', category.name);
                                return;
                            }
                            onCategoryClick?.(category.slug);
                        },
                        className: "flex-shrink-0 flex flex-col items-center gap-2",
                        style: {
                            scrollSnapAlign: "start",
                            touchAction: "manipulation",
                            WebkitTapHighlightColor: "transparent",
                            background: "none",
                            border: "none",
                            cursor: "pointer",
                            padding: 0
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "relative overflow-hidden",
                                style: {
                                    width: "100px",
                                    height: "100px",
                                    borderRadius: "50%",
                                    backgroundColor: "#F3F4F6",
                                    border: "3px solid #E5E7EB"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$figma$2f$ImageWithFallback$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["ImageWithFallback"], {
                                    src: category.image,
                                    alt: category.name,
                                    className: "w-full h-full object-cover"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProductCategoryCarousel.tsx",
                                    lineNumber: 128,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProductCategoryCarousel.tsx",
                                lineNumber: 118,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                style: {
                                    fontSize: "12px",
                                    fontFamily: "Inter, sans-serif",
                                    color: "#1F2937",
                                    textAlign: "center",
                                    maxWidth: "100px",
                                    lineHeight: "1.3",
                                    fontWeight: 500
                                },
                                children: category.name
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProductCategoryCarousel.tsx",
                                lineNumber: 136,
                                columnNumber: 13
                            }, this)
                        ]
                    }, category.id, true, {
                        fileName: "[project]/src/components/ProductCategoryCarousel.tsx",
                        lineNumber: 96,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/ProductCategoryCarousel.tsx",
                lineNumber: 85,
                columnNumber: 7
            }, this),
            canScrollRight && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                onClick: ()=>scroll("right"),
                className: "absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg",
                style: {
                    width: "32px",
                    height: "32px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "1px solid #E5E7EB",
                    touchAction: "manipulation",
                    WebkitTapHighlightColor: "transparent"
                },
                "aria-label": "Catégorie suivante",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$react$2d$fontawesome__$5b$external$5d$__$2840$fortawesome$2f$react$2d$fontawesome$2c$__esm_import$29$__["FontAwesomeIcon"], {
                    icon: __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons__$5b$external$5d$__$2840$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2c$__esm_import$29$__["faChevronRight"],
                    style: {
                        fontSize: '20px',
                        color: '#6E6E6E'
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/ProductCategoryCarousel.tsx",
                    lineNumber: 170,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ProductCategoryCarousel.tsx",
                lineNumber: 155,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "mt-3 mx-auto bg-gray-200",
                style: {
                    height: "3px",
                    width: "80%",
                    position: "relative",
                    borderRadius: "0"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "absolute left-0 top-0 transition-all duration-300",
                    style: {
                        height: "3px",
                        width: canScrollLeft ? "50%" : "0%",
                        borderRadius: "0",
                        backgroundColor: accentColor
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/ProductCategoryCarousel.tsx",
                    lineNumber: 184,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ProductCategoryCarousel.tsx",
                lineNumber: 175,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ProductCategoryCarousel.tsx",
        lineNumber: 62,
        columnNumber: 5
    }, this);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/components/ProductsSection.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "ProductsSection",
    ()=>ProductsSection
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$BusinessUnitCard$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/BusinessUnitCard.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductCategoryCarousel$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ProductCategoryCarousel.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useStrapiData$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useStrapiData.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$figma$2f$ImageWithFallback$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/figma/ImageWithFallback.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$react$2d$fontawesome__$5b$external$5d$__$2840$fortawesome$2f$react$2d$fontawesome$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/@fortawesome/react-fontawesome [external] (@fortawesome/react-fontawesome, esm_import)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons__$5b$external$5d$__$2840$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/@fortawesome/free-solid-svg-icons [external] (@fortawesome/free-solid-svg-icons, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useProductCategories$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useProductCategories.ts [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$BusinessUnitCard$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductCategoryCarousel$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$react$2d$fontawesome__$5b$external$5d$__$2840$fortawesome$2f$react$2d$fontawesome$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons__$5b$external$5d$__$2840$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$BusinessUnitCard$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductCategoryCarousel$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$react$2d$fontawesome__$5b$external$5d$__$2840$fortawesome$2f$react$2d$fontawesome$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons__$5b$external$5d$__$2840$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
;
;
;
function ProductsSection({ onProductClick, onNavigate, externalCategoryChange, onExternalCategoryHandled }) {
    const [activeCategory, setActiveCategory] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])("matelas");
    // Écouter les changements de catégorie externes (depuis MobileCategoryCards ou Hero)
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        if (externalCategoryChange) {
            setActiveCategory(externalCategoryChange);
            if (onExternalCategoryHandled) {
                onExternalCategoryHandled();
            }
        }
    }, [
        externalCategoryChange,
        onExternalCategoryHandled
    ]);
    // Récupération des catégories depuis Strapi
    const { data: categories, loading: categoriesLoading, error: categoriesError } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useStrapiData$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useCategories"])({
        populate: [],
        filters: {
            featured: true
        },
        sort: [
            "name:asc"
        ]
    });
    // Récupération des produits par catégorie depuis Strapi
    const { data: products, loading: productsLoading, error: productsError } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useStrapiData$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useProducts"])({
        populate: [
            "image",
            "category"
        ],
        filters: {
            category: {
                slug: {
                    $eq: activeCategory
                }
            }
        },
        sort: [
            "featured:desc",
            "createdAt:desc"
        ],
        pagination: {
            pageSize: 6
        }
    });
    const handleCategoryClick = (categorySlug, businessUnit)=>{
        // Navigation différente selon le business unit
        if (businessUnit === "fima-design") {
            // FIMA Design: vers category-detail (pages de détail de catégorie)
            if (onNavigate) {
                onNavigate("category-detail", categorySlug);
            }
        } else {
            // FIMA Couchage et Univers Glass: vers all-products avec filtre
            if (onNavigate) {
                onNavigate("all-products", categorySlug);
            }
        }
    };
    const handleViewAllClick = ()=>{
        if (onNavigate) {
            onNavigate("all-products");
        }
    };
    const handleViewCategoryClick = (categorySlug)=>{
        if (onNavigate) {
            onNavigate("category", categorySlug);
        }
    };
    const handleBusinessUnitClick = (businessUnit)=>{
        if (onNavigate) {
            onNavigate(businessUnit);
        }
    };
    // Charger les catégories dynamiques depuis le CMS
    const { categories: cmsCategories, loading: cmsLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useProductCategories$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useProductCategories"])();
    console.log('📦 ProductsSection - CMS Categories loaded:', cmsCategories);
    // Données organisées par métiers FIMA avec images réelles (maintenant dynamiques)
    const fimaBusinessUnits = [
        {
            id: "fima-couchage",
            name: "FIMA Couchage",
            title: "Literie premium depuis 1985",
            color: "#B5C233",
            heroData: {
                heroTitle: "FIMA Couchage",
                heroSubtitle: "Literie Premium",
                heroDescription: "Matelas, sommiers et accessoires",
                heroFeatures: [
                    "14 nuits d'essai",
                    "Livraison rapide sous 48h",
                    "Garantie 10 ans"
                ],
                heroCtaText: "Découvrir FIMA Couchage"
            },
            categories: (()=>{
                // Charger dynamiquement depuis le CMS uniquement
                if (cmsCategories && !Array.isArray(cmsCategories) && cmsCategories['fima-couchage']) {
                    return cmsCategories['fima-couchage'].map((cat)=>({
                            name: cat.name,
                            slug: cat.slug,
                            image: cat.thumbnail || `https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=400&h=400&fit=crop`
                        }));
                }
                // Retourner tableau vide si pas de catégories CMS
                return [];
            })()
        },
        {
            id: "fima-design",
            name: "FIMA Design",
            title: "Menuiserie & ameublement sur mesure",
            color: "#6E6E6E",
            heroData: {
                heroTitle: "FIMA Design",
                heroSubtitle: "Menuiserie & Ameublement",
                heroDescription: "Créations sur-mesure et mobilier contemporain",
                heroFeatures: [
                    "Design personnalisé",
                    "Bois nobles",
                    "Installation incluse"
                ],
                heroCtaText: "Découvrir FIMA Design"
            },
            categories: (()=>{
                // Charger dynamiquement depuis le CMS uniquement
                if (cmsCategories && !Array.isArray(cmsCategories) && cmsCategories['fima-design']) {
                    return cmsCategories['fima-design'].map((cat)=>({
                            name: cat.name,
                            slug: cat.slug,
                            image: cat.thumbnail || `https://images.unsplash.com/photo-1658595148963-13b7da6dcd6d?w=400&h=400&fit=crop`
                        }));
                }
                // Retourner tableau vide si pas de catégories CMS
                return [];
            })()
        },
        {
            id: "univers-glass",
            name: "UNIVERS GLASS",
            title: "Solutions vitrerie & aluminium",
            color: "#0EA5E9",
            heroData: {
                heroTitle: "UNIVERS GLASS",
                heroSubtitle: "Vitrerie & Aluminium",
                heroDescription: "Solutions techniques pour professionnels",
                heroFeatures: [
                    "Solutions B2B",
                    "Projets complexes",
                    "Expertise technique"
                ],
                heroCtaText: "Découvrir UNIVERS GLASS"
            },
            categories: (()=>{
                // Charger dynamiquement depuis le CMS uniquement
                if (cmsCategories && !Array.isArray(cmsCategories) && cmsCategories['univers-glass']) {
                    return cmsCategories['univers-glass'].map((cat)=>({
                            name: cat.name,
                            slug: cat.slug,
                            image: cat.thumbnail || `https://images.unsplash.com/photo-1749815362047-373af7e61072?w=400&h=400&fit=crop`
                        }));
                }
                // Retourner tableau vide si pas de catégories CMS
                return [];
            })()
        }
    ];
    // Données de fallback avec de vraies images
    const fallbackProducts = [
        {
            id: "fallback-1",
            title: "Matelas Confort Premium",
            description: "Matelas ressorts ensachés 7 zones de confort",
            price: "489€",
            originalPrice: "599€",
            discount: "18%",
            badge: "BEST SELLER",
            image: "https://images.unsplash.com/photo-1648634158203-199accfd7afc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtYXR0cmVzcyUyMGJlZHJvb218ZW58MXx8fHwxNzU4MTAyOTUzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            category: "Matelas"
        },
        {
            id: "fallback-2",
            title: "Matelas Mémoire de Forme Luxe",
            description: "Matelas mousse mémoire avec gel refroidissant",
            price: "699€",
            originalPrice: "899€",
            discount: "22%",
            badge: "NOUVEAU",
            image: "https://images.unsplash.com/photo-1691703028663-c5ff8cbb07c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW1vcnklMjBmb2FtJTIwbWF0dHJlc3N8ZW58MXx8fHwxNzU1OTg4NDU2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            category: "Matelas"
        },
        {
            id: "fallback-3",
            title: "Matelas Bio Natural",
            description: "Matelas latex naturel 100% bio",
            price: "799€",
            originalPrice: "999€",
            discount: "20%",
            badge: "NOUVEAU",
            image: "https://images.unsplash.com/photo-1691703028663-c5ff8cbb07c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmdhbmljJTIwbGF0ZXglMjBtYXR0cmVzc3xlbnwxfHx8fDE3NTU5ODg0NjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            category: "Matelas"
        },
        {
            id: "fallback-4",
            title: "Matelas Relax Ergonomique",
            description: "Matelas ergonomique à ressorts micro-ensachés",
            price: "549€",
            originalPrice: "699€",
            discount: "21%",
            badge: "PROMO",
            image: "https://images.unsplash.com/photo-1742319096912-7bb94fdfeb03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtYXR0cmVzcyUyMGJlZHJvb20lMjBjb21mb3J0fGVufDF8fHx8MTc1ODEwNDcyMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            category: "Matelas"
        },
        {
            id: "fallback-5",
            title: "Matelas Prestige Collection",
            description: "Matelas haut de gamme multi-zones de confort",
            price: "1299€",
            originalPrice: "1599€",
            discount: "19%",
            badge: "PRESTIGE",
            image: "https://images.unsplash.com/photo-1550926807-a6d0500b6502?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBiZWRyb29tJTIwbWF0dHJlc3MlMjBkZXNpZ258ZW58MXx8fHwxNzU4MTA0NzI0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            category: "Matelas"
        },
        {
            id: "fallback-6",
            title: "Matelas Pure Comfort",
            description: "Matelas hypoallergénique en fibres naturelles",
            price: "399€",
            originalPrice: "499€",
            discount: "20%",
            badge: "ECO+",
            image: "https://images.unsplash.com/photo-1691703011149-5fc5a062319d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwd2hpdGUlMjBtYXR0cmVzcyUyMGJlZGRpbmd8ZW58MXx8fHwxNzU4MTA0NzI4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            category: "Matelas"
        }
    ];
    // Convertir les données Strapi en format compatible
    const convertStrapiProduct = (strapiProduct)=>{
        const formattedPrice = `${strapiProduct.attributes.price}€`;
        const formattedOriginalPrice = strapiProduct.attributes.originalPrice ? `${strapiProduct.attributes.originalPrice}€` : undefined;
        // Extraire l'URL d'image AVANT le spread pour éviter l'écrasement
        const imageUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$figma$2f$ImageWithFallback$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["extractImageUrl"])(strapiProduct.attributes.image);
        // Créer une copie des attributes sans l'objet image original
        const { image: originalImage, category: originalCategory, ...cleanAttributes } = strapiProduct.attributes;
        return {
            // Données complètes pour la page produit (sans image et category originales)
            ...cleanAttributes,
            // Puis les données formatées (qui écrasent les valeurs brutes)
            id: strapiProduct.id.toString(),
            title: strapiProduct.attributes.title,
            description: strapiProduct.attributes.shortDescription || strapiProduct.attributes.description,
            price: formattedPrice,
            originalPrice: formattedOriginalPrice,
            discount: strapiProduct.attributes.discount ? `${strapiProduct.attributes.discount}%` : undefined,
            badge: strapiProduct.attributes.bestSeller ? "BEST SELLER" : strapiProduct.attributes.new ? "NOUVEAU" : undefined,
            image: imageUrl,
            category: strapiProduct.attributes.category?.data?.attributes?.name || "Produit",
            sourceCurrency: 'EUR'
        };
    };
    const convertStrapiCategory = (strapiCategory)=>({
            icon: strapiCategory.attributes.icon,
            name: strapiCategory.attributes.name,
            value: strapiCategory.attributes.slug,
            business: strapiCategory.attributes.business || "fima-couchage",
            color: strapiCategory.attributes.color || "#B5C233"
        });
    // Obtenir le nombre de produits pour la catégorie active
    const getCurrentCategoryName = ()=>{
        if (categories && Array.isArray(categories)) {
            const currentCategory = categories.find((c)=>c.attributes.slug === activeCategory);
            return currentCategory?.attributes.name || "Produits";
        }
        return "Produits";
    };
    // Gérer le changement externe de catégorie
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        if (externalCategoryChange) {
            setActiveCategory(externalCategoryChange);
            if (onExternalCategoryHandled) {
                onExternalCategoryHandled();
            }
            // Scroll vers la section produits après changement
            setTimeout(()=>{
                const productsSection = document.getElementById("products-section");
                if (productsSection) {
                    productsSection.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
                }
            }, 100);
        }
    }, [
        externalCategoryChange,
        onExternalCategoryHandled
    ]);
    // Données des 3 métiers avec le design Hero (avec features)
    const heroStyleBusinessUnits = [
        {
            key: "fima-couchage",
            title: "FIMA Couchage",
            subtitle: "Literie Premium",
            description: "Matelas, sommiers et accessoires",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$react$2d$fontawesome__$5b$external$5d$__$2840$fortawesome$2f$react$2d$fontawesome$2c$__esm_import$29$__["FontAwesomeIcon"], {
                icon: __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons__$5b$external$5d$__$2840$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2c$__esm_import$29$__["faBed"],
                className: "w-5 h-5"
            }, void 0, false, {
                fileName: "[project]/src/components/ProductsSection.tsx",
                lineNumber: 393,
                columnNumber: 9
            }, this),
            color: "#B5C233",
            features: [
                "14 nuits d'essai",
                "Livraison rapide sous 48h",
                "Garantie 10 ans"
            ],
            ctaText: "Découvrir FIMA Couchage"
        },
        {
            key: "fima-design",
            title: "FIMA Design",
            subtitle: "Menuiserie & Ameublement",
            description: "Créations sur-mesure et mobilier contemporain",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$react$2d$fontawesome__$5b$external$5d$__$2840$fortawesome$2f$react$2d$fontawesome$2c$__esm_import$29$__["FontAwesomeIcon"], {
                icon: __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons__$5b$external$5d$__$2840$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2c$__esm_import$29$__["faHouse"],
                className: "w-5 h-5"
            }, void 0, false, {
                fileName: "[project]/src/components/ProductsSection.tsx",
                lineNumber: 410,
                columnNumber: 9
            }, this),
            color: "#6E6E6E",
            features: [
                "Design personnalisé",
                "Bois nobles",
                "Installation incluse"
            ],
            ctaText: "Découvrir FIMA Design"
        },
        {
            key: "univers-glass",
            title: "UNIVERS GLASS",
            subtitle: "Vitrerie & Aluminium",
            description: "Solutions techniques pour professionnels",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$react$2d$fontawesome__$5b$external$5d$__$2840$fortawesome$2f$react$2d$fontawesome$2c$__esm_import$29$__["FontAwesomeIcon"], {
                icon: __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons__$5b$external$5d$__$2840$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2c$__esm_import$29$__["faBuilding"],
                className: "w-5 h-5"
            }, void 0, false, {
                fileName: "[project]/src/components/ProductsSection.tsx",
                lineNumber: 426,
                columnNumber: 9
            }, this),
            color: "#0EA5E9",
            features: [
                "Solutions B2B",
                "Projets complexes",
                "Expertise technique"
            ],
            ctaText: "Découvrir UNIVERS GLASS"
        }
    ];
    // État du carousel mobile
    const [currentSlide, setCurrentSlide] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(0);
    const scrollContainerRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(null);
    // Fonction pour scroller vers une slide spécifique
    const scrollToSlide = (index)=>{
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current;
            const slideWidth = container.offsetWidth;
            container.scrollTo({
                left: slideWidth * index,
                behavior: "smooth"
            });
            setCurrentSlide(index);
        }
    };
    // Dtecter le changement de slide au scroll
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        const container = scrollContainerRef.current;
        if (!container) return;
        const handleScroll = ()=>{
            const slideWidth = container.offsetWidth;
            const newIndex = Math.round(container.scrollLeft / slideWidth);
            setCurrentSlide(newIndex);
        };
        container.addEventListener("scroll", handleScroll);
        return ()=>container.removeEventListener("scroll", handleScroll);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
        className: "relative z-10 w-full mt-0 md:mt-0",
        id: "products-section",
        children: activeCategory && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: "mt-0 md:mt-24",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "md:py-12 rounded-t-xl mt-[10px] mr-[0px] mb-[0px] ml-[0px] py-[58px] px-[0px] pt-[80px] pr-[0px] pb-[48px] pl-[0px]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "md:hidden px-4 mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                    className: "text-2xl mb-1",
                                    style: {
                                        fontFamily: "Montserrat",
                                        color: "#000000"
                                    },
                                    children: "Nos Catégories"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProductsSection.tsx",
                                    lineNumber: 500,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                    className: "text-sm",
                                    style: {
                                        color: "#6E6E6E"
                                    },
                                    children: "Parcourez nos produits par métier"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProductsSection.tsx",
                                    lineNumber: 509,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ProductsSection.tsx",
                            lineNumber: 499,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "md:hidden space-y-8 mb-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "px-4 mb-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2 mb-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                width: "4px",
                                                                height: "24px",
                                                                backgroundColor: "#B5C233"
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ProductsSection.tsx",
                                                            lineNumber: 523,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                                            className: "text-xl",
                                                            style: {
                                                                fontFamily: "Montserrat",
                                                                color: "#B5C233",
                                                                fontWeight: 600
                                                            },
                                                            children: "FIMA Couchage"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ProductsSection.tsx",
                                                            lineNumber: 530,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/ProductsSection.tsx",
                                                    lineNumber: 522,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                    className: "text-sm ml-6",
                                                    style: {
                                                        color: "#6E6E6E"
                                                    },
                                                    children: "Literie premium"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ProductsSection.tsx",
                                                    lineNumber: 541,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ProductsSection.tsx",
                                            lineNumber: 521,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductCategoryCarousel$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["ProductCategoryCarousel"], {
                                            categories: fimaBusinessUnits.find((unit)=>unit.id === "fima-couchage")?.categories.map((cat, index)=>({
                                                    id: `couchage-${cat.slug}-${index}`,
                                                    name: cat.name,
                                                    image: cat.image,
                                                    slug: cat.slug
                                                })) || [],
                                            onCategoryClick: (slug)=>handleCategoryClick(slug, "fima-couchage"),
                                            accentColor: "#B5C233"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProductsSection.tsx",
                                            lineNumber: 548,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ProductsSection.tsx",
                                    lineNumber: 520,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "px-4 mb-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2 mb-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                width: "4px",
                                                                height: "24px",
                                                                backgroundColor: "#6E6E6E"
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ProductsSection.tsx",
                                                            lineNumber: 570,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                                            className: "text-xl",
                                                            style: {
                                                                fontFamily: "Montserrat",
                                                                color: "#6E6E6E",
                                                                fontWeight: 600
                                                            },
                                                            children: "FIMA Design"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ProductsSection.tsx",
                                                            lineNumber: 577,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/ProductsSection.tsx",
                                                    lineNumber: 569,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                    className: "text-sm ml-6",
                                                    style: {
                                                        color: "#6E6E6E"
                                                    },
                                                    children: "Menuiserie & ameublement"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ProductsSection.tsx",
                                                    lineNumber: 588,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ProductsSection.tsx",
                                            lineNumber: 568,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductCategoryCarousel$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["ProductCategoryCarousel"], {
                                            categories: fimaBusinessUnits.find((unit)=>unit.id === "fima-design")?.categories.map((cat, index)=>({
                                                    id: `design-${cat.slug}-${index}`,
                                                    name: cat.name,
                                                    image: cat.image,
                                                    slug: cat.slug
                                                })) || [],
                                            onCategoryClick: (slug)=>handleCategoryClick(slug, "fima-design"),
                                            accentColor: "#6E6E6E"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProductsSection.tsx",
                                            lineNumber: 595,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ProductsSection.tsx",
                                    lineNumber: 567,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "px-4 mb-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2 mb-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                width: "4px",
                                                                height: "24px",
                                                                backgroundColor: "#0EA5E9"
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ProductsSection.tsx",
                                                            lineNumber: 615,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                                            className: "text-xl",
                                                            style: {
                                                                fontFamily: "Montserrat",
                                                                color: "#0EA5E9",
                                                                fontWeight: 600
                                                            },
                                                            children: "UNIVERS GLASS"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ProductsSection.tsx",
                                                            lineNumber: 622,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/ProductsSection.tsx",
                                                    lineNumber: 614,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                    className: "text-sm ml-6",
                                                    style: {
                                                        color: "#6E6E6E"
                                                    },
                                                    children: "Vitrerie & aluminium"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ProductsSection.tsx",
                                                    lineNumber: 633,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ProductsSection.tsx",
                                            lineNumber: 613,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductCategoryCarousel$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["ProductCategoryCarousel"], {
                                            categories: fimaBusinessUnits.find((unit)=>unit.id === "univers-glass")?.categories.map((cat, index)=>({
                                                    id: `glass-${cat.slug}-${index}`,
                                                    name: cat.name,
                                                    image: cat.image,
                                                    slug: cat.slug
                                                })) || [],
                                            onCategoryClick: (slug)=>handleCategoryClick(slug, "univers-glass"),
                                            accentColor: "#0EA5E9"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProductsSection.tsx",
                                            lineNumber: 640,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ProductsSection.tsx",
                                    lineNumber: 612,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ProductsSection.tsx",
                            lineNumber: 518,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "mb-16 w-full max-w-full hidden md:block",
                            id: "business-categories",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "products-grid w-full",
                                children: fimaBusinessUnits.map((businessUnit)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$BusinessUnitCard$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["BusinessUnitCard"], {
                                        id: businessUnit.id,
                                        name: businessUnit.name,
                                        title: businessUnit.title,
                                        color: businessUnit.color,
                                        categories: businessUnit.categories.slice(0, 6),
                                        heroData: businessUnit.heroData,
                                        onCategoryClick: (slug)=>handleCategoryClick(slug, businessUnit.id),
                                        onBusinessUnitClick: handleBusinessUnitClick
                                    }, businessUnit.id, false, {
                                        fileName: "[project]/src/components/ProductsSection.tsx",
                                        lineNumber: 666,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProductsSection.tsx",
                                lineNumber: 664,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProductsSection.tsx",
                            lineNumber: 660,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "bg-white shadow-lg overflow-hidden",
                            id: "featured-products"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProductsSection.tsx",
                            lineNumber: 687,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "text-center px-4 py-8 md:py-12 bg-gradient-to-r from-gray-100 to-green-50 rounded-lg",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                    className: "text-lg md:text-2xl mb-3 md:mb-4",
                                    style: {
                                        fontFamily: "Montserrat",
                                        color: "#000000"
                                    },
                                    children: "3 métiers, une expertise reconnue depuis 1985"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProductsSection.tsx",
                                    lineNumber: 925,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                    className: "text-sm md:text-lg mb-6 md:mb-8 max-w-2xl mx-auto px-2",
                                    style: {
                                        color: "#6E6E6E"
                                    },
                                    children: "FIMA Couchage, FIMA Design et UNIVERS GLASS vous accompagnent dans tous vos projets. Découvrez nos solutions complètes et bénéficiez de nos conseils d'experts."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProductsSection.tsx",
                                    lineNumber: 934,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col gap-3 md:gap-4 md:flex-row md:justify-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                            onClick: handleViewAllClick,
                                            className: "w-full md:w-auto py-4 px-6 md:px-8 md:text-lg flex items-center justify-center gap-3 border-2 transition-all duration-300 hover:shadow-lg",
                                            style: {
                                                backgroundColor: "#6E6E6E",
                                                color: "#B5C233",
                                                borderColor: "#6E6E6E",
                                                touchAction: "manipulation",
                                                WebkitTapHighlightColor: "transparent",
                                                userSelect: "none",
                                                cursor: "pointer",
                                                minHeight: "48px"
                                            },
                                            children: "Découvrir tous nos produits"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProductsSection.tsx",
                                            lineNumber: 944,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                            className: "fima-btn-secondary w-full md:w-auto py-4 px-6 md:px-8 md:text-lg text-[rgb(246,246,246)] bg-[rgb(23,199,255)]",
                                            onClick: ()=>{
                                                // Ici on pourrait ouvrir le chat ou rediriger vers contact
                                                console.log("Contact expert");
                                            },
                                            children: "Parler à un expert"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProductsSection.tsx",
                                            lineNumber: 960,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ProductsSection.tsx",
                                    lineNumber: 943,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ProductsSection.tsx",
                            lineNumber: 924,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ProductsSection.tsx",
                    lineNumber: 497,
                    columnNumber: 11
                }, this),
                " "
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ProductsSection.tsx",
            lineNumber: 496,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ProductsSection.tsx",
        lineNumber: 477,
        columnNumber: 5
    }, this);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/components/Hero.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "Hero",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$motion$2f$react__$5b$external$5d$__$28$motion$2f$react$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/motion/react [external] (motion/react, esm_import)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$react$2d$fontawesome__$5b$external$5d$__$2840$fortawesome$2f$react$2d$fontawesome$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/@fortawesome/react-fontawesome [external] (@fortawesome/react-fontawesome, esm_import)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons__$5b$external$5d$__$2840$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/@fortawesome/free-solid-svg-icons [external] (@fortawesome/free-solid-svg-icons, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MobileScrollIndicator$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/MobileScrollIndicator.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductsSection$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ProductsSection.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useHeroSlides$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useHeroSlides.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLogoScrollAnimation$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useLogoScrollAnimation.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$videoUtils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/videoUtils.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$1da2d5f603cd62a74c69b55293bcdadb2f6d8468$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$1da2d5f603cd62a74c69b55293bcdadb2f6d8468$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/assets/1da2d5f603cd62a74c69b55293bcdadb2f6d8468.png.mjs { IMAGE => "[project]/src/assets/1da2d5f603cd62a74c69b55293bcdadb2f6d8468.png (static in ecmascript, tag client)" } [ssr] (structured image object with data url, ecmascript)');
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$motion$2f$react__$5b$external$5d$__$28$motion$2f$react$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$react$2d$fontawesome__$5b$external$5d$__$2840$fortawesome$2f$react$2d$fontawesome$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons__$5b$external$5d$__$2840$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductsSection$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useHeroSlides$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$motion$2f$react__$5b$external$5d$__$28$motion$2f$react$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$react$2d$fontawesome__$5b$external$5d$__$2840$fortawesome$2f$react$2d$fontawesome$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons__$5b$external$5d$__$2840$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductsSection$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useHeroSlides$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
;
;
;
;
;
function Hero({ onNavigate, onScrollToProducts, onProductClick, externalCategoryChange, onExternalCategoryHandled }) {
    const [currentSlide, setCurrentSlide] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(0);
    const [isPaused, setIsPaused] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [videoDuration, setVideoDuration] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const [isScrolled, setIsScrolled] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    // Animation du logo au scroll
    const logoRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(null);
    const { hasScrolled, isAnimating } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLogoScrollAnimation$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useLogoScrollAnimation"])();
    // Récupérer les slides depuis Supabase
    const { slides: heroSlidesData, loading, error } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useHeroSlides$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useHeroSlides"])();
    // Filtrer uniquement les slides actifs et les mapper au format attendu par le Hero
    const heroSlides = heroSlidesData.filter((slide)=>slide.is_active) // ✅ Filtrer les slides actifs uniquement
    .map((slide)=>({
            id: slide.id,
            title: slide.translation.title,
            subtitle: slide.translation.subtitle,
            description: slide.translation.description,
            ctaPrimary: slide.translation.cta_primary,
            badge: slide.translation.badge,
            background: slide.background_image_url,
            slideDuration: slide.slide_duration,
            isVideo: slide.is_video,
            videoUrl: slide.video_url,
            videoPlayDuration: slide.video_play_duration,
            videoLoop: slide.video_loop,
            ctaBgColor: slide.cta_bg_color || "#FFFFFF",
            ctaTextColor: slide.cta_text_color || "#B5C233"
        }));
    // Slides par défaut en cas de chargement ou d'erreur
    const defaultHeroSlides = [
        {
            id: "1",
            title: "FIMA Couchage",
            subtitle: "LITERIE PREMIUM",
            description: "Matelas, sommiers et accessoires. 14 nuits d'essai, livraison rapide sous 48h et garantie 10 ans.",
            ctaPrimary: "Découvrir nos produits",
            badge: "14 NUITS D'ESSAI",
            background: "https://images.unsplash.com/photo-1718939045285-b67f9e9f9f8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiZWRyb29tJTIwZGVzaWduJTIwY29tZm9ydGFibGV8ZW58MXx8fHwxNzU4MTA2MzMxfDA&ixlib=rb-4.1.0&q=80&w=1080",
            slideDuration: 5000,
            ctaBgColor: "#FFFFFF",
            ctaTextColor: "#B5C233"
        }
    ];
    // Utiliser les slides Supabase ou les slides par défaut
    const slidesToDisplay = loading || error || heroSlides.length === 0 ? defaultHeroSlides : heroSlides;
    // Définir currentHeroSlide avant les useEffect
    const currentHeroSlide = slidesToDisplay[currentSlide];
    // Validation du slide en mode développement
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        if (("TURBOPACK compile-time value", "development") === "development" && currentHeroSlide) {
            if (currentHeroSlide.isVideo && !currentHeroSlide.videoUrl) {
                console.warn(`⚠️ Slide "${currentHeroSlide.id}" configuré comme vidéo mais sans videoUrl. ` + `Le slide sera affiché en mode image. Ajoutez une URL vidéo dans le CMS.`);
            }
        }
    }, [
        currentHeroSlide
    ]);
    // Détecter le scroll pour cacher les boutons de navigation
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        const handleScroll = ()=>{
            const scrollY = window.scrollY || window.pageYOffset;
            setIsScrolled(scrollY > 5);
        };
        window.addEventListener('scroll', handleScroll, {
            passive: true
        });
        return ()=>window.removeEventListener('scroll', handleScroll);
    }, []);
    // Auto-défilement des slides
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        if (!isPaused && slidesToDisplay.length > 0) {
            const currentSlideDuration = currentHeroSlide.slideDuration || 5000;
            const interval = setInterval(()=>{
                setCurrentSlide((prev)=>(prev + 1) % slidesToDisplay.length);
            }, currentSlideDuration); // Utilise la durée personnalisée de chaque slide
            return ()=>clearInterval(interval);
        }
    }, [
        isPaused,
        slidesToDisplay.length,
        currentHeroSlide.slideDuration
    ]);
    // Gestion de la durée vidéo
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        if (currentHeroSlide.isVideo && currentHeroSlide.videoPlayDuration) {
            const videoElement = document.querySelector("video");
            if (videoElement) {
                // Timer pour arrêter la vidéo après la durée définie
                const stopTimer = setTimeout(()=>{
                    videoElement.pause();
                    console.log(`Vidéo arrêtée après ${currentHeroSlide.videoPlayDuration}ms`);
                }, currentHeroSlide.videoPlayDuration);
                return ()=>clearTimeout(stopTimer);
            }
        }
    }, [
        currentSlide,
        currentHeroSlide
    ]);
    const handleSlideChange = (slideIndex)=>{
        setCurrentSlide(slideIndex);
        setIsPaused(true); // Pause l'auto-défilement quand l'utilisateur clique
        // Reprend l'auto-défilement après 10 secondes
        setTimeout(()=>{
            setIsPaused(false);
        }, 10000);
    };
    const handlePrevSlide = ()=>{
        setCurrentSlide((prev)=>prev === 0 ? slidesToDisplay.length - 1 : prev - 1);
        setIsPaused(true);
        setTimeout(()=>setIsPaused(false), 10000);
    };
    const handleNextSlide = ()=>{
        setCurrentSlide((prev)=>prev === slidesToDisplay.length - 1 ? 0 : prev + 1);
        setIsPaused(true);
        setTimeout(()=>setIsPaused(false), 10000);
    };
    const handleCTAClick = (action)=>{
        // Tous les boutons des slides scrollent vers les catégories de produits (Business Units)
        const businessCategoriesSection = document.getElementById("business-categories");
        if (businessCategoriesSection) {
            businessCategoriesSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    };
    // Données des 3 métiers intégrées dans le hero
    const businessUnits = [
        {
            key: "fima-couchage",
            title: "FIMA Couchage",
            subtitle: "Literie Premium",
            description: "Matelas, sommiers et accessoires",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$react$2d$fontawesome__$5b$external$5d$__$2840$fortawesome$2f$react$2d$fontawesome$2c$__esm_import$29$__["FontAwesomeIcon"], {
                icon: __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons__$5b$external$5d$__$2840$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2c$__esm_import$29$__["faHouse"],
                className: "w-5 h-5"
            }, void 0, false, {
                fileName: "[project]/src/components/Hero.tsx",
                lineNumber: 224,
                columnNumber: 13
            }, this),
            color: "#B5C233",
            features: [
                "14 nuits d'essai",
                "Livraison rapide sous 48h",
                "Garantie 10 ans"
            ],
            ctaText: "Découvrir FIMA Couchage"
        },
        {
            key: "fima-design",
            title: "FIMA Design",
            subtitle: "Menuiserie & Ameublement",
            description: "Créations sur-mesure et mobilier contemporain",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$react$2d$fontawesome__$5b$external$5d$__$2840$fortawesome$2f$react$2d$fontawesome$2c$__esm_import$29$__["FontAwesomeIcon"], {
                icon: __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons__$5b$external$5d$__$2840$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2c$__esm_import$29$__["faWrench"],
                className: "w-5 h-5"
            }, void 0, false, {
                fileName: "[project]/src/components/Hero.tsx",
                lineNumber: 239,
                columnNumber: 13
            }, this),
            color: "#6E6E6E",
            features: [
                "Design personnalisé",
                "Bois nobles",
                "Installation incluse"
            ],
            ctaText: "Découvrir FIMA Design"
        },
        {
            key: "univers-glass",
            title: "UNIVERS GLASS",
            subtitle: "Vitrerie & Aluminium",
            description: "Solutions techniques pour professionnels",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$react$2d$fontawesome__$5b$external$5d$__$2840$fortawesome$2f$react$2d$fontawesome$2c$__esm_import$29$__["FontAwesomeIcon"], {
                icon: __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons__$5b$external$5d$__$2840$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2c$__esm_import$29$__["faBuilding"],
                className: "w-5 h-5"
            }, void 0, false, {
                fileName: "[project]/src/components/Hero.tsx",
                lineNumber: 253,
                columnNumber: 13
            }, this),
            color: "#0EA5E9",
            features: [
                "Solutions B2B",
                "Projets complexes",
                "Expertise technique"
            ],
            ctaText: "Découvrir UNIVERS GLASS"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
        className: "hero-full-width relative w-full overflow-visible force-zero-margin hidden md:block",
        style: {
            margin: 0,
            padding: 0,
            border: "none"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "relative w-full force-zero-margin",
                style: {
                    margin: 0,
                    padding: 0
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "relative h-[50vh] md:h-[55vh] lg:h-[60vh] flex items-start justify-center w-full pt-10 md:pt-24 lg:pt-32 overflow-hidden",
                        style: {
                            backgroundImage: `linear-gradient(135deg, 
              rgba(181, 194, 51, 0.9) 0%, 
              rgba(227, 6, 19, 0.8) 50%, \n              rgba(14, 165, 233, 0.9) 100%),
              url(${currentHeroSlide.background})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            backgroundBlendMode: "overlay",
                            margin: 0,
                            padding: 0,
                            paddingTop: "80px"
                        },
                        children: [
                            currentHeroSlide.isVideo && currentHeroSlide.videoUrl ? // Slide vidéo
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 z-10 w-full h-full flex items-start justify-center overflow-hidden",
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$videoUtils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["isYouTubeUrl"])(currentHeroSlide.videoUrl) ? // ✅ Vidéo YouTube avec iframe embed
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("iframe", {
                                            className: "absolute inset-0 w-full h-full",
                                            src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$videoUtils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["getYouTubeEmbedUrl"])(currentHeroSlide.videoUrl, true) || "",
                                            title: currentHeroSlide.title,
                                            frameBorder: "0",
                                            allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                                            allowFullScreen: true,
                                            style: {
                                                animation: "videoFadeIn 1.5s ease-out forwards",
                                                pointerEvents: "auto"
                                            },
                                            onLoad: ()=>{
                                                if ("TURBOPACK compile-time truthy", 1) {
                                                    console.log("✅ Vidéo YouTube chargée:", currentHeroSlide.videoUrl);
                                                }
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Hero.tsx",
                                            lineNumber: 302,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 top-0 bg-gradient-to-b from-black/30 via-black/20 to-black/10 pointer-events-none"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Hero.tsx",
                                            lineNumber: 331,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true) : // 🎬 Vidéo directe (MP4, WebM, etc.)
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("video", {
                                            className: "absolute inset-0 w-full h-full object-cover",
                                            autoPlay: true,
                                            muted: true,
                                            loop: currentHeroSlide.videoLoop !== false,
                                            playsInline: true,
                                            preload: "metadata",
                                            style: {
                                                animation: "videoZoomIn 15s ease-out infinite alternate, videoFadeIn 1.5s ease-out forwards",
                                                maxWidth: "100%",
                                                maxHeight: "100%"
                                            },
                                            onError: (e)=>{
                                                // Logger les informations utiles sans l'événement complet
                                                const videoElement = e.currentTarget;
                                                const errorInfo = {
                                                    slideId: currentHeroSlide.id,
                                                    configuredUrl: currentHeroSlide.videoUrl,
                                                    videoSrc: videoElement?.currentSrc || videoElement?.src || "Non défini",
                                                    networkState: videoElement?.networkState,
                                                    readyState: videoElement?.readyState,
                                                    error: videoElement?.error?.code,
                                                    errorMessage: videoElement?.error?.message
                                                };
                                                if ("TURBOPACK compile-time truthy", 1) {
                                                    console.error("🎥 Erreur de chargement vidéo:", errorInfo);
                                                }
                                                // Fallback vers l'image de background si la vidéo ne charge pas
                                                e.currentTarget.style.display = "none";
                                            },
                                            onLoadStart: ()=>{
                                                if ("TURBOPACK compile-time truthy", 1) {
                                                    console.log("🎥 Début de chargement de la vidéo:", currentHeroSlide.videoUrl?.substring(0, 60) + "...");
                                                }
                                            },
                                            onCanPlay: ()=>{
                                                if ("TURBOPACK compile-time truthy", 1) {
                                                    console.log("✅ Vidéo prête à être lue");
                                                }
                                            },
                                            onLoadedMetadata: (e)=>{
                                                const video = e.currentTarget;
                                                setVideoDuration(video.duration);
                                                if ("TURBOPACK compile-time truthy", 1) {
                                                    console.log(`📊 Durée de la vidéo: ${video.duration} secondes`);
                                                }
                                            },
                                            onTimeUpdate: (e)=>{
                                                const video = e.currentTarget;
                                                // Optionnel: log du temps de lecture
                                                if (currentHeroSlide.videoPlayDuration && video.currentTime * 1000 >= currentHeroSlide.videoPlayDuration) {
                                                    video.pause();
                                                }
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("source", {
                                                    src: currentHeroSlide.videoUrl,
                                                    type: "video/mp4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Hero.tsx",
                                                    lineNumber: 426,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("source", {
                                                    src: "https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4",
                                                    type: "video/mp4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Hero.tsx",
                                                    lineNumber: 430,
                                                    columnNumber: 21
                                                }, this),
                                                "Votre navigateur ne supporte pas les vidéos HTML5."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Hero.tsx",
                                            lineNumber: 336,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 top-0 bg-gradient-to-b from-black/70 via-black/50 to-black/30"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Hero.tsx",
                                            lineNumber: 439,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Hero.tsx",
                                lineNumber: 297,
                                columnNumber: 13
                            }, this) : // Slide classique - REMPLACÉ PAR LE LOGO
                            /*
            <div className="relative z-10 text-center text-white px-4 max-w-4xl">
              <div
                className="opacity-0"
                style={{
                  animation: "slideUp 0.8s ease-out forwards",
                  animationDelay: "0.2s",
                }}
              >
                <h2
                  className="text-base lg:text-lg font-medium mb-2 opacity-90"
                  style={{ color: "#B5C233" }}
                >
                  {currentHeroSlide.subtitle}
                </h2>
                <h1
                  className="text-3xl lg:text-4xl font-bold mb-4"
                  style={{
                    fontFamily: "Montserrat",
                    color: "#FFFFFF",
                    textShadow: "2px 2px 4px rgba(0,0,0,0.7)",
                  }}
                >
                  {currentHeroSlide.title}
                </h1>
              </div>

              <div
                className="opacity-0"
                style={{
                  animation: "fadeInUp 0.8s ease-out forwards",
                  animationDelay: "0.6s",
                }}
              >
                <button
                  onClick={() =>
                    handleCTAClick(currentHeroSlide.ctaPrimary)
                  }
                  className="px-6 py-3 font-semibold transition-all hover:shadow-lg flex items-center justify-center gap-2 hover:scale-105 mx-auto border"
                  style={{
                    backgroundColor:
                      currentHeroSlide.ctaBgColor || "#FFFFFF",
                    borderColor:
                      currentHeroSlide.ctaTextColor ||
                      "#B5C233",
                    color:
                      currentHeroSlide.ctaTextColor ||
                      "#B5C233",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.opacity = "0.9";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.opacity = "1";
                  }}
                >
                  <span>{currentHeroSlide.ctaPrimary}</span>
                  <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
                </button>
              </div>
            </div> */ // Logo FIMA - centré verticalement avec animation au scroll
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                ref: logoRef,
                                className: "relative z-10 flex items-center justify-center w-full h-full px-4 -mt-12 md:-mt-16",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "relative inline-block",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$motion$2f$react__$5b$external$5d$__$28$motion$2f$react$2c$__esm_import$29$__["motion"].img, {
                                        src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$1da2d5f603cd62a74c69b55293bcdadb2f6d8468$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$1da2d5f603cd62a74c69b55293bcdadb2f6d8468$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                        alt: "Group FIMA",
                                        className: "relative z-10 w-full max-w-lg md:max-w-2xl",
                                        style: {
                                            objectFit: "contain",
                                            willChange: isAnimating ? "transform, opacity" : "auto"
                                        },
                                        initial: {
                                            opacity: 1,
                                            y: 0,
                                            scale: 1
                                        },
                                        animate: {
                                            opacity: hasScrolled ? 0 : 1,
                                            y: hasScrolled ? -300 : 0,
                                            scale: hasScrolled ? 0.2 : 1
                                        },
                                        transition: {
                                            duration: 0.6,
                                            ease: [
                                                0.43,
                                                0.13,
                                                0.23,
                                                0.96
                                            ]
                                        }
                                    }, "hero-logo", false, {
                                        fileName: "[project]/src/components/Hero.tsx",
                                        lineNumber: 582,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Hero.tsx",
                                    lineNumber: 579,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Hero.tsx",
                                lineNumber: 575,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                onClick: handlePrevSlide,
                                className: `absolute left-4 top-[45%] -translate-y-1/2 z-10 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white transition-all duration-300 hover:scale-110 shadow-lg p-3 ${isScrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'}`,
                                "aria-label": "Slide précédent",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$react$2d$fontawesome__$5b$external$5d$__$2840$fortawesome$2f$react$2d$fontawesome$2c$__esm_import$29$__["FontAwesomeIcon"], {
                                    icon: __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons__$5b$external$5d$__$2840$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2c$__esm_import$29$__["faChevronLeft"],
                                    className: "w-6 h-6"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Hero.tsx",
                                    lineNumber: 614,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Hero.tsx",
                                lineNumber: 609,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                onClick: handleNextSlide,
                                className: `absolute right-4 top-[45%] -translate-y-1/2 z-10 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white p-3 transition-all duration-300 hover:scale-110 shadow-lg ${isScrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'}`,
                                "aria-label": "Slide suivant",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$react$2d$fontawesome__$5b$external$5d$__$2840$fortawesome$2f$react$2d$fontawesome$2c$__esm_import$29$__["FontAwesomeIcon"], {
                                    icon: __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons__$5b$external$5d$__$2840$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2c$__esm_import$29$__["faChevronRight"],
                                    className: "w-6 h-6"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Hero.tsx",
                                    lineNumber: 621,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Hero.tsx",
                                lineNumber: 616,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Hero.tsx",
                        lineNumber: 275,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "relative w-full",
                        style: {
                            backgroundImage: `linear-gradient(180deg, 
               rgba(181, 194, 51, 0.21) 0%, 
              rgba(227, 6, 19, 0.3) 20%, 
              rgba(14, 165, 233, 0.4) 40%,
              rgba(249, 250, 251, 0.9) 55%),
              url(${currentHeroSlide.background})`,
                            backgroundSize: "100% 192px",
                            backgroundPosition: "center top",
                            backgroundRepeat: "no-repeat",
                            backgroundAttachment: "scroll"
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/Hero.tsx",
                        lineNumber: 626,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Hero.tsx",
                lineNumber: 270,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "relative z-30 -mt-[300px] md:-mt-[350px] lg:-mt-[400px]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "container mx-auto px-4 md:px-6 lg:px-8 pt-[160px] pr-[32px] pb-[0px] pl-[32px] pointer-events-none",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "pointer-events-auto",
                        children: onProductClick && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductsSection$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["ProductsSection"], {
                            onProductClick: onProductClick,
                            onNavigate: onNavigate,
                            externalCategoryChange: externalCategoryChange,
                            onExternalCategoryHandled: onExternalCategoryHandled
                        }, void 0, false, {
                            fileName: "[project]/src/components/Hero.tsx",
                            lineNumber: 748,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Hero.tsx",
                        lineNumber: 746,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/Hero.tsx",
                    lineNumber: 745,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Hero.tsx",
                lineNumber: 744,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MobileScrollIndicator$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["MobileScrollIndicator"], {}, void 0, false, {
                fileName: "[project]/src/components/Hero.tsx",
                lineNumber: 762,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("style", {
                children: `
          @keyframes progress {
            from { width: 0%; }
            to { width: 100%; }
          }
          
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          
          @keyframes slideUp {
            from { 
              opacity: 0; 
              transform: translateY(20px); 
            }
            to { 
              opacity: 1; 
              transform: translateY(0); 
            }
          }
          
          @keyframes fadeInUp {
            from { 
              opacity: 0; 
              transform: translateY(10px); 
            }
            to { 
              opacity: 1; 
              transform: translateY(0); 
            }
          }

          @keyframes videoZoomIn {
            from { 
              transform: scale(1);
            }
            to { 
              transform: scale(1.08);
            }
          }

          @keyframes videoFadeIn {
            from { 
              opacity: 0;
            }
            to { 
              opacity: 1;
            }
          }

          .line-clamp-2 {
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
        `
            }, void 0, false, {
                fileName: "[project]/src/components/Hero.tsx",
                lineNumber: 765,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Hero.tsx",
        lineNumber: 265,
        columnNumber: 5
    }, this);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/components/Footer.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "Footer",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$react$2d$fontawesome__$5b$external$5d$__$2840$fortawesome$2f$react$2d$fontawesome$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/@fortawesome/react-fontawesome [external] (@fortawesome/react-fontawesome, esm_import)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons__$5b$external$5d$__$2840$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/@fortawesome/free-solid-svg-icons [external] (@fortawesome/free-solid-svg-icons, esm_import)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$free$2d$brands$2d$svg$2d$icons__$5b$external$5d$__$2840$fortawesome$2f$free$2d$brands$2d$svg$2d$icons$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/@fortawesome/free-brands-svg-icons [external] (@fortawesome/free-brands-svg-icons, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$1da2d5f603cd62a74c69b55293bcdadb2f6d8468$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$1da2d5f603cd62a74c69b55293bcdadb2f6d8468$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/assets/1da2d5f603cd62a74c69b55293bcdadb2f6d8468.png.mjs { IMAGE => "[project]/src/assets/1da2d5f603cd62a74c69b55293bcdadb2f6d8468.png (static in ecmascript, tag client)" } [ssr] (structured image object with data url, ecmascript)');
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$react$2d$fontawesome__$5b$external$5d$__$2840$fortawesome$2f$react$2d$fontawesome$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons__$5b$external$5d$__$2840$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$free$2d$brands$2d$svg$2d$icons__$5b$external$5d$__$2840$fortawesome$2f$free$2d$brands$2d$svg$2d$icons$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$react$2d$fontawesome__$5b$external$5d$__$2840$fortawesome$2f$react$2d$fontawesome$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons__$5b$external$5d$__$2840$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$free$2d$brands$2d$svg$2d$icons__$5b$external$5d$__$2840$fortawesome$2f$free$2d$brands$2d$svg$2d$icons$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
function Footer({ onNavigate }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("footer", {
        className: "border-t",
        style: {
            backgroundColor: "#565757",
            borderColor: "#C0C0C0"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4 pt-[48px] pr-[16px] pb-[15px] pl-[16px]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-y-8 gap-x-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "flex mt-0 mb-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("img", {
                                        src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$1da2d5f603cd62a74c69b55293bcdadb2f6d8468$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$1da2d5f603cd62a74c69b55293bcdadb2f6d8468$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                        alt: "GROUP FIMA - Literie - Menuiserie - Vitres - Aluminium",
                                        className: "w-auto object-contain ml-0",
                                        style: {
                                            maxWidth: "220px"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Footer.tsx",
                                        lineNumber: 40,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Footer.tsx",
                                    lineNumber: 39,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Footer.tsx",
                                lineNumber: 37,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                className: "text-sm mb-1 pr-24",
                                style: {
                                    color: "#B5C233",
                                    textAlign: "justify"
                                },
                                children: "Expert ivoirien en conception et fabrique des solutions en literie, menuiserie et vitrerie-aluminium depuis 1985, alliant savoir-faire local, innovation et qualité, GROUPFIMA équipe particuliers et professionnels avec des produits durables, élégants et 100 % confort. FIMA – De la conception à la réalisation."
                            }, void 0, false, {
                                fileName: "[project]/src/components/Footer.tsx",
                                lineNumber: 48,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-2 mb-6"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Footer.tsx",
                                lineNumber: 62,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "flex gap-4 mb-[24px] mt-[-9px] mr-[0px] ml-[0px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                        href: "#",
                                        className: "p-2 transition-colors hover:bg-gray-100",
                                        "aria-label": "Facebook",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$react$2d$fontawesome__$5b$external$5d$__$2840$fortawesome$2f$react$2d$fontawesome$2c$__esm_import$29$__["FontAwesomeIcon"], {
                                            icon: __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$free$2d$brands$2d$svg$2d$icons__$5b$external$5d$__$2840$fortawesome$2f$free$2d$brands$2d$svg$2d$icons$2c$__esm_import$29$__["faFacebook"],
                                            className: "w-5 h-5",
                                            style: {
                                                color: "#B5C233"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer.tsx",
                                            lineNumber: 90,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Footer.tsx",
                                        lineNumber: 85,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                        href: "#",
                                        className: "p-2 transition-colors hover:bg-gray-100",
                                        "aria-label": "Instagram",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$react$2d$fontawesome__$5b$external$5d$__$2840$fortawesome$2f$react$2d$fontawesome$2c$__esm_import$29$__["FontAwesomeIcon"], {
                                            icon: __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$free$2d$brands$2d$svg$2d$icons__$5b$external$5d$__$2840$fortawesome$2f$free$2d$brands$2d$svg$2d$icons$2c$__esm_import$29$__["faInstagram"],
                                            className: "w-5 h-5",
                                            style: {
                                                color: "#B5C233"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer.tsx",
                                            lineNumber: 101,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Footer.tsx",
                                        lineNumber: 96,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                        href: "#",
                                        className: "p-2 transition-colors hover:bg-gray-100",
                                        "aria-label": "LinkedIn",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$react$2d$fontawesome__$5b$external$5d$__$2840$fortawesome$2f$react$2d$fontawesome$2c$__esm_import$29$__["FontAwesomeIcon"], {
                                            icon: __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$free$2d$brands$2d$svg$2d$icons__$5b$external$5d$__$2840$fortawesome$2f$free$2d$brands$2d$svg$2d$icons$2c$__esm_import$29$__["faLinkedin"],
                                            className: "w-5 h-5",
                                            style: {
                                                color: "#B5C233"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer.tsx",
                                            lineNumber: 112,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Footer.tsx",
                                        lineNumber: 107,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                        href: "#",
                                        className: "p-2 transition-colors hover:bg-gray-100",
                                        "aria-label": "Twitter",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$react$2d$fontawesome__$5b$external$5d$__$2840$fortawesome$2f$react$2d$fontawesome$2c$__esm_import$29$__["FontAwesomeIcon"], {
                                            icon: __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$free$2d$brands$2d$svg$2d$icons__$5b$external$5d$__$2840$fortawesome$2f$free$2d$brands$2d$svg$2d$icons$2c$__esm_import$29$__["faTwitter"],
                                            className: "w-5 h-5",
                                            style: {
                                                color: "#B5C233"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer.tsx",
                                            lineNumber: 123,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Footer.tsx",
                                        lineNumber: 118,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Footer.tsx",
                                lineNumber: 84,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "text-sm",
                                style: {
                                    color: "#B5C233"
                                },
                                children: "© 2025 FIMA. Tous droits réservés."
                            }, void 0, false, {
                                fileName: "[project]/src/components/Footer.tsx",
                                lineNumber: 132,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Footer.tsx",
                        lineNumber: 36,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "mt-[0px] mr-[0px] mb-[0px] ml-[-31px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h4", {
                                className: "mb-6",
                                style: {
                                    fontFamily: "Montserrat",
                                    color: "#B5C233"
                                },
                                children: "Nos métiers"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Footer.tsx",
                                lineNumber: 142,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("ul", {
                                className: "space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                            onClick: ()=>onNavigate?.("fima-couchage"),
                                            className: "text-sm hover:underline transition-colors",
                                            style: {
                                                color: "#B5C233"
                                            },
                                            children: "FIMA Couchage"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer.tsx",
                                            lineNumber: 153,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Footer.tsx",
                                        lineNumber: 152,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                            onClick: ()=>onNavigate?.("fima-design"),
                                            className: "text-sm hover:underline transition-colors",
                                            style: {
                                                color: "#B5C233"
                                            },
                                            children: "FIMA Design"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer.tsx",
                                            lineNumber: 162,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Footer.tsx",
                                        lineNumber: 161,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                            onClick: ()=>onNavigate?.("univers-glass"),
                                            className: "text-sm hover:underline transition-colors",
                                            style: {
                                                color: "#B5C233"
                                            },
                                            children: "Univers Glass"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer.tsx",
                                            lineNumber: 171,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Footer.tsx",
                                        lineNumber: 170,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                            onClick: ()=>onNavigate?.("b2b-solutions"),
                                            className: "text-sm hover:underline transition-colors",
                                            style: {
                                                color: "#B5C233"
                                            },
                                            children: "Solutions B2B"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer.tsx",
                                            lineNumber: 180,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Footer.tsx",
                                        lineNumber: 179,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Footer.tsx",
                                lineNumber: 151,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Footer.tsx",
                        lineNumber: 141,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "mt-[0px] mr-[0px] mb-[0px] ml-[-59px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h4", {
                                className: "mb-6",
                                style: {
                                    fontFamily: "Montserrat",
                                    color: "#B5C233"
                                },
                                children: "Informations légales"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Footer.tsx",
                                lineNumber: 193,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("ul", {
                                className: "space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                            onClick: ()=>onNavigate?.("legal"),
                                            className: "text-sm hover:underline transition-colors",
                                            style: {
                                                color: "#B5C233"
                                            },
                                            children: "Mentions légales"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer.tsx",
                                            lineNumber: 204,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Footer.tsx",
                                        lineNumber: 203,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                            onClick: ()=>onNavigate?.("privacy-policy"),
                                            className: "text-sm hover:underline transition-colors",
                                            style: {
                                                color: "#B5C233"
                                            },
                                            children: "Politique de confidentialité"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer.tsx",
                                            lineNumber: 213,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Footer.tsx",
                                        lineNumber: 212,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                            onClick: ()=>onNavigate?.("terms"),
                                            className: "text-sm hover:underline transition-colors",
                                            style: {
                                                color: "#B5C233"
                                            },
                                            children: "CGV"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer.tsx",
                                            lineNumber: 222,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Footer.tsx",
                                        lineNumber: 221,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Footer.tsx",
                                lineNumber: 202,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Footer.tsx",
                        lineNumber: 192,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h4", {
                                className: "mb-6",
                                style: {
                                    fontFamily: "Montserrat",
                                    color: "#B5C233"
                                },
                                children: "Contact"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Footer.tsx",
                                lineNumber: 263,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "flex items-start gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$react$2d$fontawesome__$5b$external$5d$__$2840$fortawesome$2f$react$2d$fontawesome$2c$__esm_import$29$__["FontAwesomeIcon"], {
                                                icon: __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons__$5b$external$5d$__$2840$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2c$__esm_import$29$__["faMapPin"],
                                                className: "w-4 h-4 mt-1 flex-shrink-0",
                                                style: {
                                                    color: "#B5C233"
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer.tsx",
                                                lineNumber: 274,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "text-sm",
                                                style: {
                                                    color: "#B5C233"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                        style: {
                                                            color: "#B5C233"
                                                        },
                                                        children: "Abidjan, Yopougon"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Footer.tsx",
                                                        lineNumber: 283,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                        style: {
                                                            color: "#B5C233"
                                                        },
                                                        children: "Zone Industrielle"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Footer.tsx",
                                                        lineNumber: 286,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Footer.tsx",
                                                lineNumber: 279,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Footer.tsx",
                                        lineNumber: 273,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$react$2d$fontawesome__$5b$external$5d$__$2840$fortawesome$2f$react$2d$fontawesome$2c$__esm_import$29$__["FontAwesomeIcon"], {
                                                icon: __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons__$5b$external$5d$__$2840$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2c$__esm_import$29$__["faPhone"],
                                                className: "w-4 h-4 flex-shrink-0",
                                                style: {
                                                    color: "#B5C233"
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer.tsx",
                                                lineNumber: 293,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                                href: "tel:+2252723506102",
                                                className: "text-sm hover:underline transition-colors",
                                                style: {
                                                    color: "#B5C233"
                                                },
                                                children: "+225 27 23 50 61 02"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer.tsx",
                                                lineNumber: 299,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Footer.tsx",
                                        lineNumber: 292,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$react$2d$fontawesome__$5b$external$5d$__$2840$fortawesome$2f$react$2d$fontawesome$2c$__esm_import$29$__["FontAwesomeIcon"], {
                                                icon: __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons__$5b$external$5d$__$2840$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2c$__esm_import$29$__["faPhone"],
                                                className: "w-4 h-4 flex-shrink-0",
                                                style: {
                                                    color: "#B5C233"
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer.tsx",
                                                lineNumber: 308,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                                href: "tel:+2250788989998",
                                                className: "text-sm hover:underline transition-colors",
                                                style: {
                                                    color: "#B5C233"
                                                },
                                                children: "+225 07 88 98 99 98"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer.tsx",
                                                lineNumber: 314,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Footer.tsx",
                                        lineNumber: 307,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$react$2d$fontawesome__$5b$external$5d$__$2840$fortawesome$2f$react$2d$fontawesome$2c$__esm_import$29$__["FontAwesomeIcon"], {
                                                icon: __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons__$5b$external$5d$__$2840$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2c$__esm_import$29$__["faEnvelope"],
                                                className: "w-4 h-4 flex-shrink-0",
                                                style: {
                                                    color: "#B5C233"
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer.tsx",
                                                lineNumber: 324,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                                href: "mailto:contact@fima.fr",
                                                className: "text-sm hover:underline transition-colors",
                                                style: {
                                                    color: "#B5C233"
                                                },
                                                children: "contact@groupfima.com"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer.tsx",
                                                lineNumber: 329,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Footer.tsx",
                                        lineNumber: 323,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Footer.tsx",
                                lineNumber: 272,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Footer.tsx",
                        lineNumber: 262,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Footer.tsx",
                lineNumber: 34,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/Footer.tsx",
            lineNumber: 33,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Footer.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/components/CartModal.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "CartModal",
    ()=>CartModal
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [ssr] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/minus.js [ssr] (ecmascript) <export default as Minus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shopping-bag.js [ssr] (ecmascript) <export default as ShoppingBag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/truck.js [ssr] (ecmascript) <export default as Truck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$AppContext$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/AppContext.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$figma$2f$ImageWithFallback$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/figma/ImageWithFallback.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useCurrency$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useCurrency.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$currency$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/currency.ts [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$AppContext$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useCurrency$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$AppContext$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useCurrency$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
;
// Utility function to safely calculate item total
const calculateItemTotal = (price, quantity)=>{
    const safePrice = isNaN(price) ? 0 : price;
    const safeQuantity = isNaN(quantity) ? 0 : quantity;
    return safePrice * safeQuantity;
};
// Format a number in the selected currency without conversion
const formatInCurrency = (amount, currency)=>{
    const currencyInfo = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$currency$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["CURRENCIES"][currency];
    if (!currencyInfo) return amount.toFixed(2);
    switch(currency){
        case 'XOF':
            return `${Math.round(amount).toLocaleString('fr-FR')} F CFA`;
        case 'EUR':
            return `€${amount.toFixed(2)}`;
        case 'USD':
            return `$${amount.toFixed(2)}`;
        case 'GBP':
            return `£${amount.toFixed(2)}`;
        default:
            return amount.toFixed(2);
    }
};
function CartModal({ onNavigate } = {}) {
    const { isCartOpen, setIsCartOpen, cartItems, updateQuantity, removeFromCart, getCartCount } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$AppContext$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["useApp"])();
    const { selectedCurrency } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useCurrency$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useCurrency"])();
    const [isCheckingOut, setIsCheckingOut] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    if (!isCartOpen) return null;
    const handleCheckout = ()=>{
        if (onNavigate) {
            setIsCartOpen(false);
            onNavigate('checkout');
        } else {
            setIsCheckingOut(true);
            // Fallback si onNavigate n'est pas fourni
            setTimeout(()=>{
                alert('Redirection vers le checkout sécurisé...');
                setIsCheckingOut(false);
            }, 1000);
        }
    };
    // Calculer le sous-total en convertissant chaque item dans la devise sélectionnée
    const calculateSubtotalInSelectedCurrency = ()=>{
        return cartItems.reduce((total, item)=>{
            const itemPrice = isNaN(item.price) ? 0 : item.price;
            const itemQuantity = isNaN(item.quantity) ? 0 : item.quantity;
            const itemTotal = itemPrice * itemQuantity;
            // Convertir le prix de l'item vers la devise sélectionnée
            // On extrait la valeur numérique du prix converti
            const convertedPriceStr = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$currency$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["smartConvertPrice"])(itemTotal, item.currency || 'FCFA', selectedCurrency);
            const numericValue = parseFloat(convertedPriceStr.replace(/[^0-9.]/g, ''));
            return total + (isNaN(numericValue) ? 0 : numericValue);
        }, 0);
    };
    const subtotal = calculateSubtotalInSelectedCurrency();
    const safeSubtotal = isNaN(subtotal) ? 0 : Math.max(0, subtotal);
    // Calculer le seuil de livraison gratuite selon la devise
    const freeShippingThreshold = selectedCurrency === 'XOF' ? 500000 : selectedCurrency === 'EUR' ? 762 : selectedCurrency === 'USD' ? 830 : 650;
    const shippingCost = selectedCurrency === 'XOF' ? 49000 : selectedCurrency === 'EUR' ? 75 : selectedCurrency === 'USD' ? 82 : 65;
    const shipping = safeSubtotal > freeShippingThreshold ? 0 : shippingCost;
    const total = safeSubtotal + shipping;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-black/50 transition-opacity",
                onClick: ()=>setIsCartOpen(false)
            }, void 0, false, {
                fileName: "[project]/src/components/CartModal.tsx",
                lineNumber: 96,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl flex flex-col",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between p-6 border-b",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__["ShoppingBag"], {
                                        className: "w-6 h-6",
                                        style: {
                                            color: '#B5C233'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CartModal.tsx",
                                        lineNumber: 106,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                        style: {
                                            fontFamily: 'Montserrat',
                                            color: '#000000'
                                        },
                                        children: [
                                            "Panier (",
                                            getCartCount(),
                                            ")"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CartModal.tsx",
                                        lineNumber: 107,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CartModal.tsx",
                                lineNumber: 105,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                onClick: ()=>setIsCartOpen(false),
                                className: "p-2 hover:bg-gray-100 rounded-full transition-colors",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CartModal.tsx",
                                    lineNumber: 115,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/CartModal.tsx",
                                lineNumber: 111,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/CartModal.tsx",
                        lineNumber: 104,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "flex-1 overflow-y-auto p-6",
                        children: cartItems.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "text-center py-12",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__["ShoppingBag"], {
                                    className: "w-16 h-16 mx-auto mb-4",
                                    style: {
                                        color: '#C0C0C0'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CartModal.tsx",
                                    lineNumber: 123,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                    className: "mb-2",
                                    style: {
                                        fontFamily: 'Montserrat',
                                        color: '#000000'
                                    },
                                    children: "Votre panier est vide"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CartModal.tsx",
                                    lineNumber: 124,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                    style: {
                                        color: '#6E6E6E'
                                    },
                                    children: "Ajoutez des produits pour commencer vos achats"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CartModal.tsx",
                                    lineNumber: 127,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/CartModal.tsx",
                            lineNumber: 122,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: cartItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "flex gap-4 p-4 border rounded-lg",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$figma$2f$ImageWithFallback$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["ImageWithFallback"], {
                                            src: item.image,
                                            alt: item.title,
                                            className: "w-16 h-16 object-cover rounded-lg"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CartModal.tsx",
                                            lineNumber: 135,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "flex-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h4", {
                                                    className: "mb-1",
                                                    style: {
                                                        fontFamily: 'Montserrat',
                                                        color: '#000000'
                                                    },
                                                    children: item.title
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CartModal.tsx",
                                                    lineNumber: 141,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                    className: "text-sm mb-2",
                                                    style: {
                                                        color: '#6E6E6E'
                                                    },
                                                    children: [
                                                        "Taille: ",
                                                        item.size
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/CartModal.tsx",
                                                    lineNumber: 147,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>updateQuantity(item.id, item.size, item.quantity - 1),
                                                                    className: "w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__["Minus"], {
                                                                        className: "w-4 h-4"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/CartModal.tsx",
                                                                        lineNumber: 156,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/CartModal.tsx",
                                                                    lineNumber: 152,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                    className: "w-8 text-center",
                                                                    children: item.quantity
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/CartModal.tsx",
                                                                    lineNumber: 158,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>updateQuantity(item.id, item.size, item.quantity + 1),
                                                                    className: "w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                                        className: "w-4 h-4"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/CartModal.tsx",
                                                                        lineNumber: 163,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/CartModal.tsx",
                                                                    lineNumber: 159,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/CartModal.tsx",
                                                            lineNumber: 151,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                            className: "text-right",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                    className: "font-semibold",
                                                                    style: {
                                                                        color: '#E30613'
                                                                    },
                                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$currency$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["smartConvertPrice"])(calculateItemTotal(item.price, item.quantity), item.currency, selectedCurrency)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/CartModal.tsx",
                                                                    lineNumber: 167,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>removeFromCart(item.id, item.size),
                                                                    className: "text-sm text-gray-500 hover:text-red-600 transition-colors",
                                                                    children: "Supprimer"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/CartModal.tsx",
                                                                    lineNumber: 173,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/CartModal.tsx",
                                                            lineNumber: 166,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/CartModal.tsx",
                                                    lineNumber: 150,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/CartModal.tsx",
                                            lineNumber: 140,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, `${item.id}-${item.size}`, true, {
                                    fileName: "[project]/src/components/CartModal.tsx",
                                    lineNumber: 134,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/CartModal.tsx",
                            lineNumber: 132,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/CartModal.tsx",
                        lineNumber: 120,
                        columnNumber: 9
                    }, this),
                    cartItems.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "border-t p-6 space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 p-3 rounded-lg",
                                style: {
                                    backgroundColor: 'rgba(181, 194, 51, 0.05)'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__["Truck"], {
                                        className: "w-5 h-5",
                                        style: {
                                            color: '#B5C233'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CartModal.tsx",
                                        lineNumber: 193,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                        className: "text-sm",
                                        style: {
                                            color: '#B5C233'
                                        },
                                        children: shipping === 0 ? 'Livraison gratuite !' : `Livraison gratuite dès ${formatInCurrency(freeShippingThreshold, selectedCurrency)} (${formatInCurrency(Math.max(0, freeShippingThreshold - safeSubtotal), selectedCurrency)} restants)`
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CartModal.tsx",
                                        lineNumber: 194,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CartModal.tsx",
                                lineNumber: 192,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                style: {
                                                    color: '#6E6E6E'
                                                },
                                                children: "Sous-total"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CartModal.tsx",
                                                lineNumber: 205,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                children: formatInCurrency(safeSubtotal, selectedCurrency)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CartModal.tsx",
                                                lineNumber: 206,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CartModal.tsx",
                                        lineNumber: 204,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                style: {
                                                    color: '#6E6E6E'
                                                },
                                                children: "Livraison"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CartModal.tsx",
                                                lineNumber: 209,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                children: shipping === 0 ? 'Gratuite' : formatInCurrency(shipping, selectedCurrency)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CartModal.tsx",
                                                lineNumber: 210,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CartModal.tsx",
                                        lineNumber: 208,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between border-t pt-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontFamily: 'Montserrat',
                                                    color: '#000000'
                                                },
                                                children: "Total"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CartModal.tsx",
                                                lineNumber: 213,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                className: "text-xl font-bold",
                                                style: {
                                                    color: '#E30613'
                                                },
                                                children: formatInCurrency(total, selectedCurrency)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CartModal.tsx",
                                                lineNumber: 216,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CartModal.tsx",
                                        lineNumber: 212,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CartModal.tsx",
                                lineNumber: 203,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                onClick: handleCheckout,
                                disabled: isCheckingOut,
                                className: "w-full fima-btn-primary text-lg py-4 disabled:opacity-50",
                                children: isCheckingOut ? 'Traitement...' : 'Procéder au paiement'
                            }, void 0, false, {
                                fileName: "[project]/src/components/CartModal.tsx",
                                lineNumber: 226,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/CartModal.tsx",
                        lineNumber: 190,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/CartModal.tsx",
                lineNumber: 102,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/CartModal.tsx",
        lineNumber: 94,
        columnNumber: 5
    }, this);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/components/FavoritesModal.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "FavoritesModal",
    ()=>FavoritesModal
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart.js [ssr] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shopping-cart.js [ssr] (ecmascript) <export default as ShoppingCart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$AppContext$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/AppContext.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$sonner__$5b$external$5d$__$28$sonner$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/sonner [external] (sonner, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$figma$2f$ImageWithFallback$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/figma/ImageWithFallback.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useCurrency$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useCurrency.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$currency$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/currency.ts [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$AppContext$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$sonner__$5b$external$5d$__$28$sonner$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useCurrency$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$AppContext$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$sonner__$5b$external$5d$__$28$sonner$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useCurrency$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
;
// Fonction pour nettoyer et extraire un aperçu de la description HTML
const getDescriptionPreview = (htmlString, maxLength = 150)=>{
    if (!htmlString) return '';
    // Créer un élément temporaire pour extraire le texte
    const temp = document.createElement('div');
    temp.innerHTML = htmlString;
    const text = temp.textContent || temp.innerText || '';
    // Tronquer si nécessaire
    if (text.length > maxLength) {
        return text.substring(0, maxLength) + '...';
    }
    return text;
};
function FavoritesModal({ isOpen, onClose, onProductClick }) {
    const { favorites, removeFromFavorites, addToCart, setIsCartOpen } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$AppContext$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["useApp"])();
    const { selectedCurrency } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useCurrency$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useCurrency"])();
    if (!isOpen) return null;
    const handleAddToCart = (favorite)=>{
        // Ensure prices are properly formatted for cart
        const formattedPrice = typeof favorite.price === 'number' ? favorite.price : parseFloat(String(favorite.price).replace(/[€$,\s]/g, '')) || 0;
        const formattedOriginalPrice = favorite.originalPrice ? typeof favorite.originalPrice === 'number' ? favorite.originalPrice : parseFloat(String(favorite.originalPrice).replace(/[€$,\s]/g, '')) || 0 : undefined;
        const productForCart = {
            ...favorite,
            price: formattedPrice,
            originalPrice: formattedOriginalPrice
        };
        addToCart(productForCart, 'Taille unique', 1);
        // Show success notification
        __TURBOPACK__imported__module__$5b$externals$5d2f$sonner__$5b$external$5d$__$28$sonner$2c$__esm_import$29$__["toast"].success(`${favorite.title} ajouté au panier !`, {
            description: 'Depuis vos favoris',
            action: {
                label: "Voir le panier",
                onClick: ()=>setIsCartOpen(true)
            }
        });
    };
    const handleProductClick = (product)=>{
        // Fermer la modal avant de naviguer
        onClose();
        // Petit délai pour que la fermeture s'effectue avant la navigation
        setTimeout(()=>{
            onProductClick(product);
        }, 100);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-black/50 transition-opacity",
                onClick: onClose
            }, void 0, false, {
                fileName: "[project]/src/components/FavoritesModal.tsx",
                lineNumber: 78,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl flex flex-col",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between p-6 border-b",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                        className: "w-6 h-6",
                                        style: {
                                            color: '#E30613'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/FavoritesModal.tsx",
                                        lineNumber: 88,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                        style: {
                                            fontFamily: 'Montserrat',
                                            color: '#000000'
                                        },
                                        children: [
                                            "Mes favoris (",
                                            favorites.length,
                                            ")"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/FavoritesModal.tsx",
                                        lineNumber: 89,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/FavoritesModal.tsx",
                                lineNumber: 87,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                onClick: onClose,
                                className: "p-2 hover:bg-gray-100 rounded-full transition-colors",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/FavoritesModal.tsx",
                                    lineNumber: 97,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/FavoritesModal.tsx",
                                lineNumber: 93,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/FavoritesModal.tsx",
                        lineNumber: 86,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "flex-1 overflow-y-auto p-6",
                        children: favorites.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "text-center py-12",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                    className: "w-16 h-16 mx-auto mb-4",
                                    style: {
                                        color: '#C0C0C0'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/FavoritesModal.tsx",
                                    lineNumber: 105,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                    className: "mb-2",
                                    style: {
                                        fontFamily: 'Montserrat',
                                        color: '#000000'
                                    },
                                    children: "Aucun favori pour le moment"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/FavoritesModal.tsx",
                                    lineNumber: 106,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                    style: {
                                        color: '#6E6E6E'
                                    },
                                    children: "Ajoutez des produits à vos favoris pour les retrouver ici"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/FavoritesModal.tsx",
                                    lineNumber: 109,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/FavoritesModal.tsx",
                            lineNumber: 104,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 gap-6",
                            children: favorites.map((favorite)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "flex gap-4 p-4 border rounded-lg hover:shadow-md transition-shadow",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$figma$2f$ImageWithFallback$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["ImageWithFallback"], {
                                            src: favorite.image,
                                            alt: favorite.title,
                                            className: "w-24 h-24 object-cover rounded-lg cursor-pointer",
                                            onClick: ()=>handleProductClick(favorite)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/FavoritesModal.tsx",
                                            lineNumber: 117,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "flex-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between items-start mb-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h4", {
                                                            className: "cursor-pointer hover:underline",
                                                            style: {
                                                                fontFamily: 'Montserrat',
                                                                color: '#000000'
                                                            },
                                                            onClick: ()=>handleProductClick(favorite),
                                                            children: favorite.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/FavoritesModal.tsx",
                                                            lineNumber: 125,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>removeFromFavorites(favorite.id),
                                                            className: "p-1 hover:bg-red-50 rounded-full transition-colors",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                                                className: "w-5 h-5 fill-current",
                                                                style: {
                                                                    color: '#E30613'
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/FavoritesModal.tsx",
                                                                lineNumber: 136,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/FavoritesModal.tsx",
                                                            lineNumber: 132,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/FavoritesModal.tsx",
                                                    lineNumber: 124,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                    className: "text-sm mb-3",
                                                    style: {
                                                        color: '#6E6E6E'
                                                    },
                                                    children: getDescriptionPreview(favorite.description)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/FavoritesModal.tsx",
                                                    lineNumber: 140,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                    className: "text-lg font-bold",
                                                                    style: {
                                                                        color: '#E30613'
                                                                    },
                                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$currency$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["smartConvertPrice"])(favorite.price, favorite.currency, selectedCurrency)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/FavoritesModal.tsx",
                                                                    lineNumber: 146,
                                                                    columnNumber: 25
                                                                }, this),
                                                                favorite.originalPrice && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                    className: "line-through text-sm",
                                                                    style: {
                                                                        color: '#6E6E6E'
                                                                    },
                                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$currency$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["smartConvertPrice"])(favorite.originalPrice, favorite.currency, selectedCurrency)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/FavoritesModal.tsx",
                                                                    lineNumber: 153,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/FavoritesModal.tsx",
                                                            lineNumber: 145,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                            className: "flex gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>handleProductClick(favorite),
                                                                    className: "px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors",
                                                                    children: "Voir détails"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/FavoritesModal.tsx",
                                                                    lineNumber: 163,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>handleAddToCart(favorite),
                                                                    className: "flex items-center gap-2 fima-btn-secondary px-4 py-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__["ShoppingCart"], {
                                                                            className: "w-4 h-4"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/FavoritesModal.tsx",
                                                                            lineNumber: 173,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        "Ajouter"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/FavoritesModal.tsx",
                                                                    lineNumber: 169,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/FavoritesModal.tsx",
                                                            lineNumber: 162,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/FavoritesModal.tsx",
                                                    lineNumber: 144,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/FavoritesModal.tsx",
                                            lineNumber: 123,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, favorite.id, true, {
                                    fileName: "[project]/src/components/FavoritesModal.tsx",
                                    lineNumber: 116,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/FavoritesModal.tsx",
                            lineNumber: 114,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/FavoritesModal.tsx",
                        lineNumber: 102,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/FavoritesModal.tsx",
                lineNumber: 84,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/FavoritesModal.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/components/ExpertConsultationModal.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "ExpertConsultationModal",
    ()=>ExpertConsultationModal
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$react$2d$fontawesome__$5b$external$5d$__$2840$fortawesome$2f$react$2d$fontawesome$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/@fortawesome/react-fontawesome [external] (@fortawesome/react-fontawesome, esm_import)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons__$5b$external$5d$__$2840$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/@fortawesome/free-solid-svg-icons [external] (@fortawesome/free-solid-svg-icons, esm_import)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$sonner__$5b$external$5d$__$28$sonner$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/sonner [external] (sonner, esm_import)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$react$2d$fontawesome__$5b$external$5d$__$2840$fortawesome$2f$react$2d$fontawesome$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons__$5b$external$5d$__$2840$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$sonner__$5b$external$5d$__$28$sonner$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$react$2d$fontawesome__$5b$external$5d$__$2840$fortawesome$2f$react$2d$fontawesome$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons__$5b$external$5d$__$2840$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$sonner__$5b$external$5d$__$28$sonner$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
function ExpertConsultationModal({ isOpen, onClose, consultationType = 'expert' }) {
    const [step, setStep] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(1);
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])({
        // Informations personnelles
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        // Type de consultation
        serviceType: '',
        consultationType: consultationType,
        // Besoins spécifiques
        projectDescription: '',
        budget: '',
        timeline: '',
        // Préférences de rendez-vous (pour appointment)
        preferredDate: '',
        preferredTime: '',
        consultationMode: 'presential',
        // Consentements
        newsletter: false,
        dataProcessing: false
    });
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [emailError, setEmailError] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])('');
    const [phoneError, setPhoneError] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])('');
    // Validation d'email
    const validateEmail = (email)=>{
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setEmailError('Format email invalide (ex: example@email.com)');
            return false;
        }
        setEmailError('');
        return true;
    };
    // Validation de téléphone (indicatif + numéro)
    const validatePhone = (phone)=>{
        // Format attendu: +XXX XXXXXXXXX ou +XXX-XXXXXXXXX ou similaire
        const phoneRegex = /^\+\d{1,4}[\s-]?\d{6,}$/;
        if (!phoneRegex.test(phone)) {
            setPhoneError('Format invalide (ex: +225 01 23 45 67 89)');
            return false;
        }
        setPhoneError('');
        return true;
    };
    const services = [
        {
            id: 'literie',
            name: 'Literie & Couchage',
            icon: '🛏️',
            description: 'Matelas, sommiers, oreillers'
        },
        {
            id: 'menuiserie',
            name: 'Menuiserie & Design',
            icon: '🪚',
            description: 'Mobilier sur-mesure, cuisines'
        },
        {
            id: 'vitrerie',
            name: 'Vitrerie & Aluminium',
            icon: '🏢',
            description: 'Façades, baies vitrées'
        },
        {
            id: 'b2b',
            name: 'Solutions B2B',
            icon: '🏗️',
            description: 'Projets professionnels'
        },
        {
            id: 'autre',
            name: 'Autre projet',
            icon: '💡',
            description: 'Besoin spécifique'
        }
    ];
    const budgetRanges = [
        {
            id: 'small',
            label: 'Moins de 500 000 F CFA',
            value: '<500k'
        },
        {
            id: 'medium',
            label: '500k - 2M F CFA',
            value: '500k-2M'
        },
        {
            id: 'large',
            label: '2M - 10M F CFA',
            value: '2M-10M'
        },
        {
            id: 'enterprise',
            label: 'Plus de 10M F CFA',
            value: '10M+'
        },
        {
            id: 'discuss',
            label: 'À discuter',
            value: 'discuss'
        }
    ];
    const timelineOptions = [
        {
            id: 'urgent',
            label: 'Urgent (< 1 mois)',
            value: 'urgent'
        },
        {
            id: 'short',
            label: '1-3 mois',
            value: '1-3months'
        },
        {
            id: 'medium',
            label: '3-6 mois',
            value: '3-6months'
        },
        {
            id: 'long',
            label: '6+ mois',
            value: '6months+'
        },
        {
            id: 'flexible',
            label: 'Flexible',
            value: 'flexible'
        }
    ];
    const timeSlots = [
        '09:00',
        '09:30',
        '10:00',
        '10:30',
        '11:00',
        '11:30',
        '14:00',
        '14:30',
        '15:00',
        '15:30',
        '16:00',
        '16:30'
    ];
    if (!isOpen) return null;
    const handleInputChange = (field, value)=>{
        setFormData((prev)=>({
                ...prev,
                [field]: value
            }));
    };
    const handleSubmit = async ()=>{
        setIsSubmitting(true);
        try {
            // Simulation d'envoi
            await new Promise((resolve)=>setTimeout(resolve, 2000));
            __TURBOPACK__imported__module__$5b$externals$5d2f$sonner__$5b$external$5d$__$28$sonner$2c$__esm_import$29$__["toast"].success(consultationType === 'appointment' ? 'Rendez-vous planifié avec succès ! Vous recevrez une confirmation par email.' : 'Demande envoyée ! Un expert vous contactera dans les 24h.');
            onClose();
            setStep(1);
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                company: '',
                serviceType: '',
                consultationType: consultationType,
                projectDescription: '',
                budget: '',
                timeline: '',
                preferredDate: '',
                preferredTime: '',
                consultationMode: 'presential',
                newsletter: false,
                dataProcessing: false
            });
            setEmailError('');
            setPhoneError('');
        } catch (error) {
            __TURBOPACK__imported__module__$5b$externals$5d2f$sonner__$5b$external$5d$__$28$sonner$2c$__esm_import$29$__["toast"].error('Une erreur est survenue. Veuillez réessayer.');
        } finally{
            setIsSubmitting(false);
        }
    };
    const canProceedToStep2 = formData.firstName && formData.lastName && formData.email && formData.phone && formData.serviceType;
    const canProceedToStep3 = formData.projectDescription && formData.budget && formData.timeline;
    const canSubmit = consultationType === 'expert' ? canProceedToStep3 && formData.dataProcessing : canProceedToStep3 && formData.preferredDate && formData.preferredTime && formData.dataProcessing;
    const getStepTitle = ()=>{
        switch(step){
            case 1:
                return 'Vos informations';
            case 2:
                return 'Votre projet';
            case 3:
                return consultationType === 'appointment' ? 'Planification' : 'Finalisation';
            default:
                return '';
        }
    };
    const renderStep1 = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: "space-y-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-2 gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-medium mb-2",
                                    children: "Prénom *"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ExpertConsultationModal.tsx",
                                    lineNumber: 157,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    value: formData.firstName,
                                    onChange: (e)=>handleInputChange('firstName', e.target.value),
                                    className: "w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all",
                                    placeholder: "Votre prénom",
                                    required: true
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ExpertConsultationModal.tsx",
                                    lineNumber: 158,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ExpertConsultationModal.tsx",
                            lineNumber: 156,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-medium mb-2",
                                    children: "Nom *"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ExpertConsultationModal.tsx",
                                    lineNumber: 168,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    value: formData.lastName,
                                    onChange: (e)=>handleInputChange('lastName', e.target.value),
                                    className: "w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all",
                                    placeholder: "Votre nom",
                                    required: true
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ExpertConsultationModal.tsx",
                                    lineNumber: 169,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ExpertConsultationModal.tsx",
                            lineNumber: 167,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ExpertConsultationModal.tsx",
                    lineNumber: 155,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                            className: "block text-sm font-medium mb-2",
                            children: "Email *"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ExpertConsultationModal.tsx",
                            lineNumber: 181,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                            type: "email",
                            value: formData.email,
                            onChange: (e)=>{
                                handleInputChange('email', e.target.value);
                                validateEmail(e.target.value);
                            },
                            className: "w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all",
                            placeholder: "votre.email@exemple.com",
                            required: true
                        }, void 0, false, {
                            fileName: "[project]/src/components/ExpertConsultationModal.tsx",
                            lineNumber: 182,
                            columnNumber: 9
                        }, this),
                        emailError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                            className: "text-red-500 text-sm mt-1",
                            children: emailError
                        }, void 0, false, {
                            fileName: "[project]/src/components/ExpertConsultationModal.tsx",
                            lineNumber: 193,
                            columnNumber: 24
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ExpertConsultationModal.tsx",
                    lineNumber: 180,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-2 gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-medium mb-2",
                                    children: "Téléphone *"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ExpertConsultationModal.tsx",
                                    lineNumber: 198,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                    type: "tel",
                                    value: formData.phone,
                                    onChange: (e)=>{
                                        handleInputChange('phone', e.target.value);
                                        validatePhone(e.target.value);
                                    },
                                    className: "w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all",
                                    placeholder: "+225 XX XX XX XX",
                                    required: true
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ExpertConsultationModal.tsx",
                                    lineNumber: 199,
                                    columnNumber: 11
                                }, this),
                                phoneError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                    className: "text-red-500 text-sm mt-1",
                                    children: phoneError
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ExpertConsultationModal.tsx",
                                    lineNumber: 210,
                                    columnNumber: 26
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ExpertConsultationModal.tsx",
                            lineNumber: 197,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-medium mb-2",
                                    children: "Entreprise"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ExpertConsultationModal.tsx",
                                    lineNumber: 213,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    value: formData.company,
                                    onChange: (e)=>handleInputChange('company', e.target.value),
                                    className: "w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all",
                                    placeholder: "Nom de votre entreprise"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ExpertConsultationModal.tsx",
                                    lineNumber: 214,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ExpertConsultationModal.tsx",
                            lineNumber: 212,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ExpertConsultationModal.tsx",
                    lineNumber: 196,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                            className: "block text-sm font-medium mb-4",
                            children: "Domaine d'intérêt *"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ExpertConsultationModal.tsx",
                            lineNumber: 225,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 gap-3",
                            children: services.map((service)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                    className: "flex items-center p-4 border rounded-lg hover:bg-gray-50 cursor-pointer transition-colors",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                            type: "radio",
                                            name: "serviceType",
                                            value: service.id,
                                            checked: formData.serviceType === service.id,
                                            onChange: (e)=>handleInputChange('serviceType', e.target.value),
                                            className: "sr-only"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ExpertConsultationModal.tsx",
                                            lineNumber: 229,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: `w-5 h-5 rounded-full border-2 mr-4 flex items-center justify-center ${formData.serviceType === service.id ? 'border-green-500 bg-green-500' : 'border-gray-300'}`,
                                            children: formData.serviceType === service.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "w-2 h-2 rounded-full bg-white"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ExpertConsultationModal.tsx",
                                                lineNumber: 243,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ExpertConsultationModal.tsx",
                                            lineNumber: 237,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                            className: "text-2xl mr-3",
                                            children: service.icon
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ExpertConsultationModal.tsx",
                                            lineNumber: 246,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    className: "font-medium",
                                                    children: service.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ExpertConsultationModal.tsx",
                                                    lineNumber: 248,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    className: "text-sm text-gray-600",
                                                    children: service.description
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ExpertConsultationModal.tsx",
                                                    lineNumber: 249,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ExpertConsultationModal.tsx",
                                            lineNumber: 247,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, service.id, true, {
                                    fileName: "[project]/src/components/ExpertConsultationModal.tsx",
                                    lineNumber: 228,
                                    columnNumber: 13
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/ExpertConsultationModal.tsx",
                            lineNumber: 226,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ExpertConsultationModal.tsx",
                    lineNumber: 224,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ExpertConsultationModal.tsx",
            lineNumber: 154,
            columnNumber: 5
        }, this);
    const renderStep2 = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: "space-y-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                            className: "block text-sm font-medium mb-2",
                            children: "Description de votre projet *"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ExpertConsultationModal.tsx",
                            lineNumber: 261,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("textarea", {
                            value: formData.projectDescription,
                            onChange: (e)=>handleInputChange('projectDescription', e.target.value),
                            className: "w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all",
                            rows: 4,
                            placeholder: "Décrivez votre projet, vos besoins, vos objectifs...",
                            required: true
                        }, void 0, false, {
                            fileName: "[project]/src/components/ExpertConsultationModal.tsx",
                            lineNumber: 262,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ExpertConsultationModal.tsx",
                    lineNumber: 260,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                            className: "block text-sm font-medium mb-4",
                            children: "Budget approximatif *"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ExpertConsultationModal.tsx",
                            lineNumber: 273,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            children: budgetRanges.map((range)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                    className: "flex items-center p-3 border rounded-lg hover:bg-gray-50 cursor-pointer transition-colors",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                            type: "radio",
                                            name: "budget",
                                            value: range.value,
                                            checked: formData.budget === range.value,
                                            onChange: (e)=>handleInputChange('budget', e.target.value),
                                            className: "sr-only"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ExpertConsultationModal.tsx",
                                            lineNumber: 277,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: `w-4 h-4 rounded-full border-2 mr-3 flex items-center justify-center ${formData.budget === range.value ? 'border-green-500 bg-green-500' : 'border-gray-300'}`,
                                            children: formData.budget === range.value && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "w-1.5 h-1.5 rounded-full bg-white"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ExpertConsultationModal.tsx",
                                                lineNumber: 291,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ExpertConsultationModal.tsx",
                                            lineNumber: 285,
                                            columnNumber: 15
                                        }, this),
                                        range.label
                                    ]
                                }, range.id, true, {
                                    fileName: "[project]/src/components/ExpertConsultationModal.tsx",
                                    lineNumber: 276,
                                    columnNumber: 13
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/ExpertConsultationModal.tsx",
                            lineNumber: 274,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ExpertConsultationModal.tsx",
                    lineNumber: 272,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                            className: "block text-sm font-medium mb-4",
                            children: "Délai souhaité *"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ExpertConsultationModal.tsx",
                            lineNumber: 301,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            children: timelineOptions.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                    className: "flex items-center p-3 border rounded-lg hover:bg-gray-50 cursor-pointer transition-colors",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                            type: "radio",
                                            name: "timeline",
                                            value: option.value,
                                            checked: formData.timeline === option.value,
                                            onChange: (e)=>handleInputChange('timeline', e.target.value),
                                            className: "sr-only"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ExpertConsultationModal.tsx",
                                            lineNumber: 305,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: `w-4 h-4 rounded-full border-2 mr-3 flex items-center justify-center ${formData.timeline === option.value ? 'border-green-500 bg-green-500' : 'border-gray-300'}`,
                                            children: formData.timeline === option.value && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "w-1.5 h-1.5 rounded-full bg-white"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ExpertConsultationModal.tsx",
                                                lineNumber: 319,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ExpertConsultationModal.tsx",
                                            lineNumber: 313,
                                            columnNumber: 15
                                        }, this),
                                        option.label
                                    ]
                                }, option.id, true, {
                                    fileName: "[project]/src/components/ExpertConsultationModal.tsx",
                                    lineNumber: 304,
                                    columnNumber: 13
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/ExpertConsultationModal.tsx",
                            lineNumber: 302,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ExpertConsultationModal.tsx",
                    lineNumber: 300,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ExpertConsultationModal.tsx",
            lineNumber: 259,
            columnNumber: 5
        }, this);
    const renderStep3 = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: "space-y-6",
            children: [
                consultationType === 'appointment' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-medium mb-4",
                                    children: "Mode de consultation *"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ExpertConsultationModal.tsx",
                                    lineNumber: 335,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-3 gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>handleInputChange('consultationMode', 'presential'),
                                            className: `p-4 rounded-lg border-2 text-center transition-all ${formData.consultationMode === 'presential' ? 'border-green-500 bg-green-50' : 'border-gray-300 hover:border-gray-400'}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$react$2d$fontawesome__$5b$external$5d$__$2840$fortawesome$2f$react$2d$fontawesome$2c$__esm_import$29$__["FontAwesomeIcon"], {
                                                    icon: __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons__$5b$external$5d$__$2840$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2c$__esm_import$29$__["faUsers"],
                                                    className: "w-6 h-6 mx-auto mb-2"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ExpertConsultationModal.tsx",
                                                    lineNumber: 346,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    className: "text-sm font-medium",
                                                    children: "Présentiel"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ExpertConsultationModal.tsx",
                                                    lineNumber: 347,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ExpertConsultationModal.tsx",
                                            lineNumber: 337,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>handleInputChange('consultationMode', 'video'),
                                            className: `p-4 rounded-lg border-2 text-center transition-all ${formData.consultationMode === 'video' ? 'border-green-500 bg-green-50' : 'border-gray-300 hover:border-gray-400'}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$react$2d$fontawesome__$5b$external$5d$__$2840$fortawesome$2f$react$2d$fontawesome$2c$__esm_import$29$__["FontAwesomeIcon"], {
                                                    icon: __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons__$5b$external$5d$__$2840$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2c$__esm_import$29$__["faMessage"],
                                                    className: "w-6 h-6 mx-auto mb-2"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ExpertConsultationModal.tsx",
                                                    lineNumber: 358,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    className: "text-sm font-medium",
                                                    children: "Visio"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ExpertConsultationModal.tsx",
                                                    lineNumber: 359,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ExpertConsultationModal.tsx",
                                            lineNumber: 349,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>handleInputChange('consultationMode', 'phone'),
                                            className: `p-4 rounded-lg border-2 text-center transition-all ${formData.consultationMode === 'phone' ? 'border-green-500 bg-green-50' : 'border-gray-300 hover:border-gray-400'}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$react$2d$fontawesome__$5b$external$5d$__$2840$fortawesome$2f$react$2d$fontawesome$2c$__esm_import$29$__["FontAwesomeIcon"], {
                                                    icon: __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons__$5b$external$5d$__$2840$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2c$__esm_import$29$__["faPhone"],
                                                    className: "w-6 h-6 mx-auto mb-2"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ExpertConsultationModal.tsx",
                                                    lineNumber: 370,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    className: "text-sm font-medium",
                                                    children: "Téléphone"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ExpertConsultationModal.tsx",
                                                    lineNumber: 371,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ExpertConsultationModal.tsx",
                                            lineNumber: 361,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ExpertConsultationModal.tsx",
                                    lineNumber: 336,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ExpertConsultationModal.tsx",
                            lineNumber: 334,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium mb-2",
                                            children: "Date souhaitée *"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ExpertConsultationModal.tsx",
                                            lineNumber: 378,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                            type: "date",
                                            value: formData.preferredDate,
                                            onChange: (e)=>handleInputChange('preferredDate', e.target.value),
                                            min: new Date().toISOString().split('T')[0],
                                            className: "w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all",
                                            required: true
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ExpertConsultationModal.tsx",
                                            lineNumber: 379,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ExpertConsultationModal.tsx",
                                    lineNumber: 377,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium mb-2",
                                            children: "Heure souhaitée *"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ExpertConsultationModal.tsx",
                                            lineNumber: 389,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("select", {
                                            value: formData.preferredTime,
                                            onChange: (e)=>handleInputChange('preferredTime', e.target.value),
                                            className: "w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all",
                                            required: true,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                    value: "",
                                                    children: "Choisir un créneau"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ExpertConsultationModal.tsx",
                                                    lineNumber: 396,
                                                    columnNumber: 17
                                                }, this),
                                                timeSlots.map((time)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                        value: time,
                                                        children: time
                                                    }, time, false, {
                                                        fileName: "[project]/src/components/ExpertConsultationModal.tsx",
                                                        lineNumber: 398,
                                                        columnNumber: 19
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ExpertConsultationModal.tsx",
                                            lineNumber: 390,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ExpertConsultationModal.tsx",
                                    lineNumber: 388,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ExpertConsultationModal.tsx",
                            lineNumber: 376,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                            className: "flex items-start gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                    type: "checkbox",
                                    checked: formData.newsletter,
                                    onChange: (e)=>handleInputChange('newsletter', e.target.checked),
                                    className: "mt-1"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ExpertConsultationModal.tsx",
                                    lineNumber: 408,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                    className: "text-sm",
                                    children: "Je souhaite recevoir la newsletter FIMA avec les dernières actualités et offres spéciales."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ExpertConsultationModal.tsx",
                                    lineNumber: 414,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ExpertConsultationModal.tsx",
                            lineNumber: 407,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                            className: "flex items-start gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                    type: "checkbox",
                                    checked: formData.dataProcessing,
                                    onChange: (e)=>handleInputChange('dataProcessing', e.target.checked),
                                    className: "mt-1",
                                    required: true
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ExpertConsultationModal.tsx",
                                    lineNumber: 420,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                    className: "text-sm",
                                    children: "J'accepte le traitement de mes données personnelles pour cette demande. *"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ExpertConsultationModal.tsx",
                                    lineNumber: 427,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ExpertConsultationModal.tsx",
                            lineNumber: 419,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ExpertConsultationModal.tsx",
                    lineNumber: 406,
                    columnNumber: 7
                }, this),
                consultationType === 'expert' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "bg-green-50 border border-green-200 rounded-lg p-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "flex items-start gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$react$2d$fontawesome__$5b$external$5d$__$2840$fortawesome$2f$react$2d$fontawesome$2c$__esm_import$29$__["FontAwesomeIcon"], {
                                icon: __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons__$5b$external$5d$__$2840$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2c$__esm_import$29$__["faCheckCircle"],
                                className: "w-5 h-5 text-green-600 mt-0.5 flex-shrink-0"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ExpertConsultationModal.tsx",
                                lineNumber: 436,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h4", {
                                        className: "font-medium text-green-900 mb-1",
                                        children: "Prochaines étapes"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ExpertConsultationModal.tsx",
                                        lineNumber: 438,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-green-800",
                                        children: "Un de nos experts vous contactera dans les 24h pour discuter de votre projet et vous proposer des solutions adaptées."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ExpertConsultationModal.tsx",
                                        lineNumber: 439,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ExpertConsultationModal.tsx",
                                lineNumber: 437,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ExpertConsultationModal.tsx",
                        lineNumber: 435,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ExpertConsultationModal.tsx",
                    lineNumber: 434,
                    columnNumber: 9
                }, this),
                consultationType === 'appointment' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "bg-blue-50 border border-blue-200 rounded-lg p-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "flex items-start gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$react$2d$fontawesome__$5b$external$5d$__$2840$fortawesome$2f$react$2d$fontawesome$2c$__esm_import$29$__["FontAwesomeIcon"], {
                                icon: __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons__$5b$external$5d$__$2840$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2c$__esm_import$29$__["faCalendar"],
                                className: "w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ExpertConsultationModal.tsx",
                                lineNumber: 450,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h4", {
                                        className: "font-medium text-blue-900 mb-1",
                                        children: "Confirmation du rendez-vous"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ExpertConsultationModal.tsx",
                                        lineNumber: 452,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-blue-800",
                                        children: "Vous recevrez un email de confirmation avec tous les détails du rendez-vous et les instructions selon le mode choisi."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ExpertConsultationModal.tsx",
                                        lineNumber: 453,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ExpertConsultationModal.tsx",
                                lineNumber: 451,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ExpertConsultationModal.tsx",
                        lineNumber: 449,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ExpertConsultationModal.tsx",
                    lineNumber: 448,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ExpertConsultationModal.tsx",
            lineNumber: 331,
            columnNumber: 5
        }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-[rgba(43,42,42,0.72)] bg-opacity-50 flex items-center justify-center p-4 z-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between p-6 border-b border-gray-200",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                    className: "text-2xl font-bold text-gray-900",
                                    style: {
                                        fontFamily: 'Montserrat'
                                    },
                                    children: consultationType === 'appointment' ? 'Planifier un rendez-vous' : 'Parler à un expert'
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ExpertConsultationModal.tsx",
                                    lineNumber: 469,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                    className: "text-gray-600 mt-1",
                                    children: [
                                        getStepTitle(),
                                        " - Étape ",
                                        step,
                                        "/3"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ExpertConsultationModal.tsx",
                                    lineNumber: 472,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ExpertConsultationModal.tsx",
                            lineNumber: 468,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "p-2 hover:bg-gray-100 rounded-full transition-colors",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$react$2d$fontawesome__$5b$external$5d$__$2840$fortawesome$2f$react$2d$fontawesome$2c$__esm_import$29$__["FontAwesomeIcon"], {
                                icon: __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons__$5b$external$5d$__$2840$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2c$__esm_import$29$__["faXmark"],
                                className: "w-6 h-6"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ExpertConsultationModal.tsx",
                                lineNumber: 480,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/ExpertConsultationModal.tsx",
                            lineNumber: 476,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ExpertConsultationModal.tsx",
                    lineNumber: 467,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "px-6 py-4 bg-gray-50",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between mb-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                    className: "text-sm font-medium text-gray-700",
                                    children: "Progression"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ExpertConsultationModal.tsx",
                                    lineNumber: 487,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                    className: "text-sm text-gray-500",
                                    children: [
                                        Math.round(step / 3 * 100),
                                        "%"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ExpertConsultationModal.tsx",
                                    lineNumber: 488,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ExpertConsultationModal.tsx",
                            lineNumber: 486,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "w-full bg-gray-200 rounded-full h-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "h-2 rounded-full transition-all duration-300",
                                style: {
                                    width: `${step / 3 * 100}%`,
                                    backgroundColor: '#B5C233'
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/ExpertConsultationModal.tsx",
                                lineNumber: 491,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/ExpertConsultationModal.tsx",
                            lineNumber: 490,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ExpertConsultationModal.tsx",
                    lineNumber: 485,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "p-6 overflow-y-auto",
                    style: {
                        maxHeight: 'calc(90vh - 200px)'
                    },
                    children: [
                        step === 1 && renderStep1(),
                        step === 2 && renderStep2(),
                        step === 3 && renderStep3()
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ExpertConsultationModal.tsx",
                    lineNumber: 502,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between p-6 border-t border-gray-200 bg-gray-50",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                            onClick: ()=>step > 1 ? setStep(step - 1) : onClose(),
                            className: "px-6 py-3 text-gray-600 hover:text-gray-800 font-medium transition-colors",
                            children: step === 1 ? 'Annuler' : 'Précédent'
                        }, void 0, false, {
                            fileName: "[project]/src/components/ExpertConsultationModal.tsx",
                            lineNumber: 510,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "flex gap-3",
                            children: step < 3 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                onClick: ()=>setStep(step + 1),
                                disabled: step === 1 ? !canProceedToStep2 : !canProceedToStep3,
                                className: "px-8 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-all",
                                children: "Suivant"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ExpertConsultationModal.tsx",
                                lineNumber: 519,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                onClick: handleSubmit,
                                disabled: !canSubmit || isSubmitting,
                                className: "px-8 py-3 text-white rounded-lg font-medium disabled:bg-gray-400 disabled:cursor-not-allowed transition-all flex items-center gap-2",
                                style: {
                                    backgroundColor: canSubmit && !isSubmitting ? '#B5C233' : undefined
                                },
                                onMouseEnter: (e)=>{
                                    if (canSubmit && !isSubmitting) e.currentTarget.style.backgroundColor = '#a3af2e';
                                },
                                onMouseLeave: (e)=>{
                                    if (canSubmit && !isSubmitting) e.currentTarget.style.backgroundColor = '#B5C233';
                                },
                                children: isSubmitting ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ExpertConsultationModal.tsx",
                                            lineNumber: 537,
                                            columnNumber: 21
                                        }, this),
                                        "Envoi en cours..."
                                    ]
                                }, void 0, true) : consultationType === 'appointment' ? 'Planifier le rendez-vous' : 'Envoyer ma demande'
                            }, void 0, false, {
                                fileName: "[project]/src/components/ExpertConsultationModal.tsx",
                                lineNumber: 527,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/ExpertConsultationModal.tsx",
                            lineNumber: 517,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ExpertConsultationModal.tsx",
                    lineNumber: 509,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ExpertConsultationModal.tsx",
            lineNumber: 465,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ExpertConsultationModal.tsx",
        lineNumber: 464,
        columnNumber: 5
    }, this);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/components/ScrollManager.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScrollManager",
    ()=>ScrollManager
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
;
;
function ScrollManager({ children, scrollToTop = true }) {
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        if (scrollToTop) {
            // Méthode ultra-agressive pour s'assurer que le scroll fonctionne
            const forceScrollToTop = ()=>{
                // 1. Scroll synchrone immédiat multiple
                window.scrollTo(0, 0);
                document.documentElement.scrollTop = 0;
                document.body.scrollTop = 0;
                // 2. Force scroll avec requestAnimationFrame (double)
                requestAnimationFrame(()=>{
                    window.scrollTo({
                        top: 0,
                        behavior: 'instant'
                    });
                    document.documentElement.scrollTop = 0;
                    document.body.scrollTop = 0;
                    requestAnimationFrame(()=>{
                        window.scrollTo({
                            top: 0,
                            behavior: 'instant'
                        });
                        document.documentElement.scrollTop = 0;
                        document.body.scrollTop = 0;
                    });
                });
                // 3. Vérifications multiples avec délais
                [
                    0,
                    50,
                    100,
                    200
                ].forEach((delay)=>{
                    setTimeout(()=>{
                        if (window.scrollY > 0 || document.documentElement.scrollTop > 0) {
                            window.scrollTo({
                                top: 0,
                                behavior: 'instant'
                            });
                            document.documentElement.scrollTop = 0;
                            document.body.scrollTop = 0;
                        }
                    }, delay);
                });
            };
            forceScrollToTop();
            // Nettoyage au cas où
            return ()=>{
            // Pas de nettoyage nécessaire
            };
        }
    }, [
        scrollToTop
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
        children: children
    }, void 0, false);
}
}),
"[project]/src/components/VideoStoriesSection.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "VideoStoriesSection",
    ()=>VideoStoriesSection
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [ssr] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [ssr] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/play.js [ssr] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$figma$2f$ImageWithFallback$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/figma/ImageWithFallback.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useVideoStories$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useVideoStories.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLanguage$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useLanguage.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$videoUtils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/videoUtils.ts [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLanguage$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLanguage$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
;
function VideoStoriesSection() {
    const { selectedLanguage } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLanguage$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useLanguage"])();
    const [currentIndex, setCurrentIndex] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(0);
    const [visibleCount, setVisibleCount] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(3); // Nombre de vidéos visibles à la fois
    // Récupération des video stories depuis Supabase
    const { videoStories, loading, error } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useVideoStories$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useVideoStories"])(selectedLanguage === 'en' ? 'en' : 'fr', undefined, false, true // publishedOnly
    );
    // Récupérer la citation principale (depuis la vidéo featured avec quote)
    const mainQuote = videoStories.find((v)=>v.quoteFr || v.quoteEn);
    // Détecter la taille de l'écran pour le responsive
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        const updateVisibleCount = ()=>{
            if (window.innerWidth < 768) {
                setVisibleCount(1); // Mobile: 1 vidéo
                setCurrentIndex(0); // Reset index on resize
            } else {
                setVisibleCount(3); // Desktop: 3 vidéos
                setCurrentIndex(0); // Reset index on resize
            }
        };
        // Initial check
        updateVisibleCount();
        // Add resize listener
        window.addEventListener('resize', updateVisibleCount);
        // Cleanup
        return ()=>window.removeEventListener('resize', updateVisibleCount);
    }, []);
    const nextSlide = ()=>{
        setCurrentIndex((prev)=>prev + visibleCount >= videoStories.length ? 0 : prev + 1);
    };
    const prevSlide = ()=>{
        setCurrentIndex((prev)=>prev === 0 ? Math.max(0, videoStories.length - visibleCount) : prev - 1);
    };
    const handleVideoClick = (videoId, videoUrl)=>{
        // Ouvrir la vidéo dans une nouvelle fenêtre
        console.log(`Playing video ${videoId}:`, videoUrl);
        // TODO: Implémenter modal vidéo ou redirection
        if (videoUrl) {
            window.open(videoUrl, '_blank');
        }
    };
    // States de chargement et erreur
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
            className: "py-16 bg-white",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "text-center mb-12",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "h-8 bg-gray-200 w-64 mx-auto mb-6 animate-pulse"
                        }, void 0, false, {
                            fileName: "[project]/src/components/VideoStoriesSection.tsx",
                            lineNumber: 77,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/VideoStoriesSection.tsx",
                        lineNumber: 76,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "relative max-w-6xl mx-auto",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "overflow-hidden",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "flex gap-4 md:gap-6",
                                children: Array.from({
                                    length: 3
                                }).map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "flex-shrink-0 px-2 md:px-0",
                                        style: {
                                            width: `${100 / 3}%`
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "relative aspect-video bg-gray-200 animate-pulse",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-0 flex items-center justify-center",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    className: "w-16 h-16 bg-gray-300"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/VideoStoriesSection.tsx",
                                                    lineNumber: 90,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/VideoStoriesSection.tsx",
                                                lineNumber: 89,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/VideoStoriesSection.tsx",
                                            lineNumber: 88,
                                            columnNumber: 21
                                        }, this)
                                    }, index, false, {
                                        fileName: "[project]/src/components/VideoStoriesSection.tsx",
                                        lineNumber: 83,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/VideoStoriesSection.tsx",
                                lineNumber: 81,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/VideoStoriesSection.tsx",
                            lineNumber: 80,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/VideoStoriesSection.tsx",
                        lineNumber: 79,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/VideoStoriesSection.tsx",
                lineNumber: 75,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/VideoStoriesSection.tsx",
            lineNumber: 74,
            columnNumber: 7
        }, this);
    }
    if (error) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
            className: "py-16 bg-white",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "text-center py-12",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                        style: {
                            color: '#6E6E6E'
                        },
                        children: selectedLanguage === 'en' ? 'Unable to load video stories at this time.' : 'Impossible de charger les vidéos pour le moment.'
                    }, void 0, false, {
                        fileName: "[project]/src/components/VideoStoriesSection.tsx",
                        lineNumber: 108,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/VideoStoriesSection.tsx",
                    lineNumber: 107,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/VideoStoriesSection.tsx",
                lineNumber: 106,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/VideoStoriesSection.tsx",
            lineNumber: 105,
            columnNumber: 7
        }, this);
    }
    if (videoStories.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
            className: "hidden py-16 bg-white",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "text-center py-12",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                        style: {
                            color: '#6E6E6E'
                        },
                        children: selectedLanguage === 'en' ? 'No video stories available at this time.' : 'Aucune vidéo disponible pour le moment.'
                    }, void 0, false, {
                        fileName: "[project]/src/components/VideoStoriesSection.tsx",
                        lineNumber: 124,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/VideoStoriesSection.tsx",
                    lineNumber: 123,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/VideoStoriesSection.tsx",
                lineNumber: 122,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/VideoStoriesSection.tsx",
            lineNumber: 121,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
        className: "py-8 md:py-16 bg-white",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "text-center mb-8 md:mb-12",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                        className: "text-xl md:text-3xl mb-4 md:mb-6",
                        style: {
                            fontFamily: 'Montserrat',
                            color: '#000000'
                        },
                        children: selectedLanguage === 'en' ? 'Our story is your story.' : 'Notre histoire, c\'est votre histoire.'
                    }, void 0, false, {
                        fileName: "[project]/src/components/VideoStoriesSection.tsx",
                        lineNumber: 140,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/VideoStoriesSection.tsx",
                    lineNumber: 139,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "relative max-w-6xl mx-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "overflow-hidden",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "flex transition-transform duration-500 ease-in-out gap-4 md:gap-6",
                                style: {
                                    transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`
                                },
                                children: videoStories.map((video)=>{
                                    const title = selectedLanguage === 'en' ? video.titleEn : video.titleFr;
                                    const description = selectedLanguage === 'en' ? video.descriptionEn : video.descriptionFr;
                                    // ✅ Utiliser le thumbnail YouTube automatiquement si c'est une vidéo YouTube
                                    const thumbnailUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$videoUtils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["isYouTubeUrl"])(video.videoUrl) && !video.thumbnailUrl ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$videoUtils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["getYouTubeThumbnail"])(video.videoUrl, 'hq') : video.thumbnailUrl;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "flex-shrink-0 px-2 md:px-0",
                                        style: {
                                            width: `${100 / visibleCount}%`
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "relative aspect-video overflow-hidden cursor-pointer group shadow-lg hover:shadow-xl transition-all duration-300",
                                            onClick: ()=>handleVideoClick(video.id, video.videoUrl),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$figma$2f$ImageWithFallback$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["ImageWithFallback"], {
                                                    src: thumbnailUrl || 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1080',
                                                    alt: title,
                                                    className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/VideoStoriesSection.tsx",
                                                    lineNumber: 178,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/VideoStoriesSection.tsx",
                                                    lineNumber: 185,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-0 flex items-center justify-center",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                        className: "w-16 h-16 bg-white/90 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                                            className: "w-8 h-8 ml-1",
                                                            style: {
                                                                color: '#B5C233'
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/VideoStoriesSection.tsx",
                                                            lineNumber: 190,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/VideoStoriesSection.tsx",
                                                        lineNumber: 189,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/VideoStoriesSection.tsx",
                                                    lineNumber: 188,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    className: "absolute bottom-4 left-4 right-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h4", {
                                                            className: "text-white mb-1",
                                                            style: {
                                                                fontFamily: 'Montserrat'
                                                            },
                                                            children: title
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/VideoStoriesSection.tsx",
                                                            lineNumber: 199,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                            className: "text-white/80 text-sm",
                                                            style: {
                                                                fontFamily: 'Inter'
                                                            },
                                                            children: video.duration
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/VideoStoriesSection.tsx",
                                                            lineNumber: 205,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/VideoStoriesSection.tsx",
                                                    lineNumber: 198,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/VideoStoriesSection.tsx",
                                            lineNumber: 174,
                                            columnNumber: 21
                                        }, this)
                                    }, video.id, false, {
                                        fileName: "[project]/src/components/VideoStoriesSection.tsx",
                                        lineNumber: 169,
                                        columnNumber: 19
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/components/VideoStoriesSection.tsx",
                                lineNumber: 153,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/VideoStoriesSection.tsx",
                            lineNumber: 152,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                            onClick: prevSlide,
                            disabled: currentIndex === 0,
                            className: "absolute left-0 md:left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed z-10",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                className: "w-5 h-5 md:w-6 md:h-6",
                                style: {
                                    color: '#6E6E6E'
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/VideoStoriesSection.tsx",
                                lineNumber: 225,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/VideoStoriesSection.tsx",
                            lineNumber: 220,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                            onClick: nextSlide,
                            disabled: currentIndex + visibleCount >= videoStories.length,
                            className: "absolute right-0 md:right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed z-10",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                className: "w-5 h-5 md:w-6 md:h-6",
                                style: {
                                    color: '#6E6E6E'
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/VideoStoriesSection.tsx",
                                lineNumber: 233,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/VideoStoriesSection.tsx",
                            lineNumber: 228,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/VideoStoriesSection.tsx",
                    lineNumber: 151,
                    columnNumber: 9
                }, this),
                mainQuote && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "max-w-4xl mx-auto text-center mt-8 md:mt-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("blockquote", {
                            className: "text-base md:text-xl leading-relaxed mb-4 md:mb-6",
                            style: {
                                color: '#000000',
                                fontFamily: 'Montserrat',
                                fontWeight: '400',
                                fontStyle: 'italic'
                            },
                            children: [
                                '"',
                                selectedLanguage === 'en' ? mainQuote.quoteEn : mainQuote.quoteFr,
                                '"'
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/VideoStoriesSection.tsx",
                            lineNumber: 240,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("cite", {
                            style: {
                                color: '#B5C233',
                                fontFamily: 'Montserrat'
                            },
                            children: [
                                "- ",
                                selectedLanguage === 'en' ? mainQuote.quoteAuthorEn : mainQuote.quoteAuthorFr
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/VideoStoriesSection.tsx",
                            lineNumber: 251,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/VideoStoriesSection.tsx",
                    lineNumber: 239,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/VideoStoriesSection.tsx",
            lineNumber: 137,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/VideoStoriesSection.tsx",
        lineNumber: 136,
        columnNumber: 5
    }, this);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/components/NewsSection.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "NewsSection",
    ()=>NewsSection
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [ssr] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [ssr] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [ssr] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/funnel.js [ssr] (ecmascript) <export default as Filter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [ssr] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [ssr] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$figma$2f$ImageWithFallback$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/figma/ImageWithFallback.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useBlogs$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useBlogs.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$AppContext$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/AppContext.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLanguage$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useLanguage.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$slick__$5b$external$5d$__$28$react$2d$slick$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react-slick [external] (react-slick, cjs)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$AppContext$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLanguage$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$AppContext$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLanguage$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
;
;
const categoryKeys = [
    {
        key: "news.category.all",
        value: "all"
    },
    {
        key: "news.category.tendances",
        value: "tendances"
    },
    {
        key: "news.category.innovation",
        value: "innovation"
    },
    {
        key: "news.category.projets",
        value: "projets"
    },
    {
        key: "news.category.actualites",
        value: "actualites"
    }
];
function NewsSection({ onNavigate, onArticleClick }) {
    const [selectedCategory, setSelectedCategory] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])("all");
    const [showAllArticles, setShowAllArticles] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const { selectedLanguage } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$AppContext$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["useApp"])();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLanguage$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useLanguage"])();
    const sliderRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(null);
    const { blogs, loading, error } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useBlogs$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useBlogs"])(selectedLanguage, selectedCategory);
    // Détecter si on est sur mobile
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        const checkMobile = ()=>{
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return ()=>window.removeEventListener("resize", checkMobile);
    }, []);
    // Mapper les blogs au format attendu par le composant
    const articles = blogs.map((blog)=>({
            id: blog.id,
            title: selectedLanguage.toLowerCase() === "fr" ? blog.titleFr : blog.titleEn,
            excerpt: selectedLanguage.toLowerCase() === "fr" ? blog.summaryFr : blog.summaryEn,
            content: selectedLanguage.toLowerCase() === "fr" ? blog.contentFr : blog.contentEn,
            image: blog.featuredImage,
            date: blog.publishedDate ? new Date(blog.publishedDate).toLocaleDateString("fr-FR", {
                year: "numeric",
                month: "long",
                day: "numeric"
            }) : new Date(blog.createdAt).toLocaleDateString("fr-FR", {
                year: "numeric",
                month: "long",
                day: "numeric"
            }),
            author: blog.author,
            category: blog.category,
            read_time: `${blog.readTime} min`,
            slug: blog.slug,
            views: blog.views || 0,
            // Données complètes du blog pour passage au détail
            blogData: blog
        }));
    const displayedArticles = showAllArticles ? articles : articles.slice(0, 3);
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
            className: "py-16 bg-white",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "flex flex-col lg:flex-row lg:items-center lg:justify-between mb-12",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                    style: {
                                        fontFamily: "Montserrat",
                                        color: "#000000"
                                    },
                                    children: t("news.title")
                                }, void 0, false, {
                                    fileName: "[project]/src/components/NewsSection.tsx",
                                    lineNumber: 113,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                    className: "mt-4 max-w-2xl",
                                    style: {
                                        color: "#6E6E6E"
                                    },
                                    children: t("news.loading")
                                }, void 0, false, {
                                    fileName: "[project]/src/components/NewsSection.tsx",
                                    lineNumber: 121,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/NewsSection.tsx",
                            lineNumber: 112,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/NewsSection.tsx",
                        lineNumber: 111,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
                        children: [
                            ...Array(3)
                        ].map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "bg-white rounded-xl overflow-hidden shadow-lg animate-pulse",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "aspect-[16/10] bg-gray-200"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/NewsSection.tsx",
                                        lineNumber: 136,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "p-6 space-y-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "flex gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                        className: "h-3 bg-gray-200 rounded w-16"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/NewsSection.tsx",
                                                        lineNumber: 139,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                        className: "h-3 bg-gray-200 rounded w-20"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/NewsSection.tsx",
                                                        lineNumber: 140,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                        className: "h-3 bg-gray-200 rounded w-12"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/NewsSection.tsx",
                                                        lineNumber: 141,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/NewsSection.tsx",
                                                lineNumber: 138,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "h-6 bg-gray-200 rounded"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/NewsSection.tsx",
                                                lineNumber: 143,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "h-4 bg-gray-200 rounded"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/NewsSection.tsx",
                                                lineNumber: 144,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "h-4 bg-gray-200 rounded w-3/4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/NewsSection.tsx",
                                                lineNumber: 145,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/NewsSection.tsx",
                                        lineNumber: 137,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, index, true, {
                                fileName: "[project]/src/components/NewsSection.tsx",
                                lineNumber: 132,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/NewsSection.tsx",
                        lineNumber: 130,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/NewsSection.tsx",
                lineNumber: 110,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/NewsSection.tsx",
            lineNumber: 109,
            columnNumber: 7
        }, this);
    }
    // Affichage de l'erreur
    if (error) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
            className: "py-16 bg-white",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                            style: {
                                fontFamily: "Montserrat",
                                color: "#000000"
                            },
                            children: t("news.title")
                        }, void 0, false, {
                            fileName: "[project]/src/components/NewsSection.tsx",
                            lineNumber: 161,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "mt-4 max-w-md mx-auto p-4 bg-gray-50 border border-gray-200 rounded-lg",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-gray-600",
                                    children: "Les articles ne sont pas disponibles pour le moment."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/NewsSection.tsx",
                                    lineNumber: 171,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-gray-500 mt-2",
                                    children: ("TURBOPACK compile-time value", "development") === "development" && error
                                }, void 0, false, {
                                    fileName: "[project]/src/components/NewsSection.tsx",
                                    lineNumber: 174,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/NewsSection.tsx",
                            lineNumber: 170,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/NewsSection.tsx",
                    lineNumber: 160,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/NewsSection.tsx",
                lineNumber: 159,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/NewsSection.tsx",
            lineNumber: 158,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
        className: "py-16 bg-white",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "flex flex-col lg:flex-row lg:items-center lg:justify-between mb-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                    style: {
                                        fontFamily: "Montserrat",
                                        color: "#000000"
                                    },
                                    children: t("news.title")
                                }, void 0, false, {
                                    fileName: "[project]/src/components/NewsSection.tsx",
                                    lineNumber: 190,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                    className: "mt-4 max-w-2xl",
                                    style: {
                                        color: "#6E6E6E"
                                    },
                                    children: t("news.subtitle")
                                }, void 0, false, {
                                    fileName: "[project]/src/components/NewsSection.tsx",
                                    lineNumber: 198,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/NewsSection.tsx",
                            lineNumber: 189,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                            onClick: ()=>onNavigate?.("content-hub"),
                            className: "mt-6 lg:mt-0 inline-flex items-center gap-2 px-6 py-3 rounded-lg transition-colors",
                            style: {
                                backgroundColor: "#B5C233",
                                color: "#333333",
                                fontFamily: "Inter",
                                fontWeight: "500"
                            },
                            onMouseEnter: (e)=>{
                                e.currentTarget.style.backgroundColor = "#a3b030";
                                e.currentTarget.style.color = "#333333";
                            },
                            onMouseLeave: (e)=>{
                                e.currentTarget.style.backgroundColor = "#B5C233";
                                e.currentTarget.style.color = "#333333";
                            },
                            children: [
                                t("news.viewAll"),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/NewsSection.tsx",
                                    lineNumber: 224,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/NewsSection.tsx",
                            lineNumber: 205,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/NewsSection.tsx",
                    lineNumber: 188,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "flex flex-wrap gap-3 mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2 text-sm",
                            style: {
                                color: "#6E6E6E"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__["Filter"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/NewsSection.tsx",
                                    lineNumber: 234,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                    children: t("news.filterBy")
                                }, void 0, false, {
                                    fileName: "[project]/src/components/NewsSection.tsx",
                                    lineNumber: 235,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/NewsSection.tsx",
                            lineNumber: 230,
                            columnNumber: 11
                        }, this),
                        categoryKeys.map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    setSelectedCategory(category.value);
                                    setShowAllArticles(false);
                                },
                                className: `px-4 py-2 rounded-full text-sm transition-all ${selectedCategory === category.value ? "shadow-md" : "hover:shadow-md"}`,
                                style: {
                                    backgroundColor: selectedCategory === category.value ? "#B5C233" : "#f8f9fa",
                                    color: selectedCategory === category.value ? "#333333" : "#6E6E6E",
                                    fontFamily: "Inter",
                                    fontWeight: selectedCategory === category.value ? "600" : "500"
                                },
                                children: t(category.key)
                            }, category.value, false, {
                                fileName: "[project]/src/components/NewsSection.tsx",
                                lineNumber: 238,
                                columnNumber: 13
                            }, this))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/NewsSection.tsx",
                    lineNumber: 229,
                    columnNumber: 9
                }, this),
                isMobile ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "relative px-4 mb-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$slick__$5b$external$5d$__$28$react$2d$slick$2c$__cjs$29$__["default"], {
                            ref: sliderRef,
                            dots: true,
                            infinite: displayedArticles.length > 1,
                            speed: 500,
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            arrows: false,
                            autoplay: true,
                            autoplaySpeed: 5000,
                            dotsClass: "slick-dots !bottom-[-40px]",
                            children: displayedArticles.map((article)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "px-2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("article", {
                                        className: "bg-white border rounded-xl overflow-hidden shadow-lg cursor-pointer flex flex-col",
                                        onClick: ()=>onArticleClick?.(article),
                                        style: {
                                            height: "580px"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "relative aspect-[16/10] overflow-hidden flex-shrink-0",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$figma$2f$ImageWithFallback$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["ImageWithFallback"], {
                                                        src: article.image,
                                                        alt: article.title,
                                                        className: "w-full h-full object-cover"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/NewsSection.tsx",
                                                        lineNumber: 295,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                        className: "absolute top-4 left-4 px-3 py-1 rounded-full text-xs",
                                                        style: {
                                                            backgroundColor: "#B5C233",
                                                            color: "#333333"
                                                        },
                                                        children: (()=>{
                                                            const categoryKey = categoryKeys.find((c)=>c.value === article.category);
                                                            return categoryKey ? t(categoryKey.key) : article.category;
                                                        })()
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/NewsSection.tsx",
                                                        lineNumber: 300,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                        className: "absolute top-4 right-4 px-2 py-1 rounded text-xs",
                                                        style: {
                                                            backgroundColor: "rgba(0,0,0,0.7)",
                                                            color: "#FFFFFF"
                                                        },
                                                        children: [
                                                            article.views,
                                                            " ",
                                                            t("news.views")
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/NewsSection.tsx",
                                                        lineNumber: 318,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/NewsSection.tsx",
                                                lineNumber: 294,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "p-6 flex flex-col flex-grow",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-wrap items-center gap-3 mb-3 text-xs",
                                                        style: {
                                                            color: "#6E6E6E"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                                        className: "w-3 h-3"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/NewsSection.tsx",
                                                                        lineNumber: 337,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    article.date
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/NewsSection.tsx",
                                                                lineNumber: 336,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                                        className: "w-3 h-3"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/NewsSection.tsx",
                                                                        lineNumber: 341,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    article.author
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/NewsSection.tsx",
                                                                lineNumber: 340,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                children: article.read_time
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/NewsSection.tsx",
                                                                lineNumber: 344,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/NewsSection.tsx",
                                                        lineNumber: 332,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                                        className: "mb-3 line-clamp-2",
                                                        style: {
                                                            color: "#000000"
                                                        },
                                                        children: article.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/NewsSection.tsx",
                                                        lineNumber: 348,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                        className: "text-sm leading-relaxed flex-grow",
                                                        style: {
                                                            color: "#6E6E6E"
                                                        },
                                                        children: (()=>{
                                                            const words = article.excerpt.split(" ");
                                                            if (words.length > 15) {
                                                                return words.slice(0, 15).join(" ") + "...";
                                                            }
                                                            return article.excerpt;
                                                        })()
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/NewsSection.tsx",
                                                        lineNumber: 356,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                        className: "mt-4",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                            className: "text-sm font-medium inline-flex items-center gap-1",
                                                            style: {
                                                                color: "#B5C233"
                                                            },
                                                            children: [
                                                                t("news.readMore"),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                                    className: "w-3 h-3"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/NewsSection.tsx",
                                                                    lineNumber: 380,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/NewsSection.tsx",
                                                            lineNumber: 375,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/NewsSection.tsx",
                                                        lineNumber: 374,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/NewsSection.tsx",
                                                lineNumber: 330,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/NewsSection.tsx",
                                        lineNumber: 288,
                                        columnNumber: 19
                                    }, this)
                                }, article.id, false, {
                                    fileName: "[project]/src/components/NewsSection.tsx",
                                    lineNumber: 287,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/NewsSection.tsx",
                            lineNumber: 274,
                            columnNumber: 13
                        }, this),
                        displayedArticles.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                    onClick: ()=>sliderRef.current?.slickPrev(),
                                    className: "absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all",
                                    style: {
                                        backgroundColor: "#B5C233",
                                        color: "#333333"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/NewsSection.tsx",
                                        lineNumber: 400,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/NewsSection.tsx",
                                    lineNumber: 392,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                    onClick: ()=>sliderRef.current?.slickNext(),
                                    className: "absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all",
                                    style: {
                                        backgroundColor: "#B5C233",
                                        color: "#333333"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/NewsSection.tsx",
                                        lineNumber: 410,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/NewsSection.tsx",
                                    lineNumber: 402,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/NewsSection.tsx",
                    lineNumber: 272,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
                    children: displayedArticles.map((article)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("article", {
                            className: "bg-white border rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all cursor-pointer group",
                            onClick: ()=>onArticleClick?.(article),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "relative aspect-[16/10] overflow-hidden",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$figma$2f$ImageWithFallback$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["ImageWithFallback"], {
                                            src: article.image,
                                            alt: article.title,
                                            className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/NewsSection.tsx",
                                            lineNumber: 425,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "absolute top-4 left-4 px-3 py-1 rounded-full text-xs",
                                            style: {
                                                backgroundColor: "#B5C233",
                                                color: "#333333"
                                            },
                                            children: (()=>{
                                                const categoryKey = categoryKeys.find((c)=>c.value === article.category);
                                                return categoryKey ? t(categoryKey.key) : article.category;
                                            })()
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/NewsSection.tsx",
                                            lineNumber: 430,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "absolute top-4 right-4 px-2 py-1 rounded text-xs",
                                            style: {
                                                backgroundColor: "rgba(0,0,0,0.7)",
                                                color: "#FFFFFF"
                                            },
                                            children: [
                                                article.views,
                                                " ",
                                                t("news.views")
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/NewsSection.tsx",
                                            lineNumber: 448,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/NewsSection.tsx",
                                    lineNumber: 424,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "p-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-4 mb-3 text-xs",
                                            style: {
                                                color: "#6E6E6E"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                            className: "w-3 h-3"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/NewsSection.tsx",
                                                            lineNumber: 467,
                                                            columnNumber: 23
                                                        }, this),
                                                        article.date
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/NewsSection.tsx",
                                                    lineNumber: 466,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                            className: "w-3 h-3"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/NewsSection.tsx",
                                                            lineNumber: 471,
                                                            columnNumber: 23
                                                        }, this),
                                                        article.author
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/NewsSection.tsx",
                                                    lineNumber: 470,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                    children: article.read_time
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/NewsSection.tsx",
                                                    lineNumber: 474,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/NewsSection.tsx",
                                            lineNumber: 462,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                            className: "mb-3 group-hover:text-primary transition-colors",
                                            style: {
                                                color: "#000000"
                                            },
                                            children: article.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/NewsSection.tsx",
                                            lineNumber: 478,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                            className: "text-sm leading-relaxed",
                                            style: {
                                                color: "#6E6E6E"
                                            },
                                            children: article.excerpt
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/NewsSection.tsx",
                                            lineNumber: 486,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "mt-4",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                className: "text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all",
                                                style: {
                                                    color: "#B5C233"
                                                },
                                                children: [
                                                    t("news.readMore"),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                        className: "w-3 h-3"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/NewsSection.tsx",
                                                        lineNumber: 500,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/NewsSection.tsx",
                                                lineNumber: 495,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/NewsSection.tsx",
                                            lineNumber: 494,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/NewsSection.tsx",
                                    lineNumber: 460,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, article.id, true, {
                            fileName: "[project]/src/components/NewsSection.tsx",
                            lineNumber: 418,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/NewsSection.tsx",
                    lineNumber: 416,
                    columnNumber: 11
                }, this),
                articles.length > 3 && !showAllArticles && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "text-center mt-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                        onClick: ()=>setShowAllArticles(true),
                        className: "inline-flex items-center gap-2 px-6 py-3 rounded-lg border transition-colors",
                        style: {
                            borderColor: "#6E6E6E",
                            color: "#B5C233",
                            fontFamily: "Inter",
                            fontWeight: "500",
                            backgroundColor: "#6E6E6E"
                        },
                        onMouseEnter: (e)=>{
                            e.currentTarget.style.backgroundColor = "#B5C233";
                            e.currentTarget.style.color = "#333333";
                        },
                        children: [
                            t("news.viewMore"),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/NewsSection.tsx",
                                lineNumber: 530,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/NewsSection.tsx",
                        lineNumber: 512,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/NewsSection.tsx",
                    lineNumber: 511,
                    columnNumber: 11
                }, this),
                selectedCategory !== "all" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "text-center mt-6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                        className: "text-sm",
                        style: {
                            color: "#6E6E6E"
                        },
                        children: [
                            articles.length,
                            " article",
                            articles.length > 1 ? "s" : "",
                            " ",
                            selectedLanguage.toLowerCase() === "fr" ? "dans la catégorie" : "in category",
                            " ",
                            '"',
                            (()=>{
                                const categoryKey = categoryKeys.find((c)=>c.value === selectedCategory);
                                return categoryKey ? t(categoryKey.key) : selectedCategory;
                            })(),
                            '"'
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/NewsSection.tsx",
                        lineNumber: 538,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/NewsSection.tsx",
                    lineNumber: 537,
                    columnNumber: 11
                }, this),
                ("TURBOPACK compile-time value", "development") === "development" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "mt-8 text-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "w-2 h-2 bg-green-500 rounded-full animate-pulse"
                            }, void 0, false, {
                                fileName: "[project]/src/components/NewsSection.tsx",
                                lineNumber: 562,
                                columnNumber: 15
                            }, this),
                            "Articles chargés dynamiquement depuis Supabase"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/NewsSection.tsx",
                        lineNumber: 561,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/NewsSection.tsx",
                    lineNumber: 560,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/NewsSection.tsx",
            lineNumber: 186,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/NewsSection.tsx",
        lineNumber: 185,
        columnNumber: 5
    }, this);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/components/ProjectWithFimaSection.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "ProjectWithFimaSection",
    ()=>ProjectWithFimaSection
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [ssr] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [ssr] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [ssr] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [ssr] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/award.js [ssr] (ecmascript) <export default as Award>");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$figma$2f$ImageWithFallback$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/figma/ImageWithFallback.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useTestimonials$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useTestimonials.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$AppContext$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/AppContext.tsx [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$AppContext$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$AppContext$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
const processSteps = [
    {
        step: 1,
        title: "Consultation gratuite",
        description: "Analyse de vos besoins et étude de faisabilité",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"]
    },
    {
        step: 2,
        title: "Devis personnalisé",
        description: "Proposition détaillée adaptée à votre budget",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"]
    },
    {
        step: 3,
        title: "Réalisation & livraison",
        description: "Fabrication sur-mesure et installation professionnelle",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__["Award"]
    }
];
const projectTypes = [
    {
        title: "FIMA Couchage",
        description: "Hôtellerie, résidences seniors, chambres médicalisées",
        image: "https://images.unsplash.com/photo-1742039953129-e4edcc82d319?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMGx1eHVyeSUyMGJlZHJvb218ZW58MXx8fHwxNzU2MDA4ODAxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        projects: "150+ projets",
        business: "fima-couchage",
        color: "#B5C233",
        categories: [
            "Matelas",
            "Sommiers",
            "Oreillers",
            "Linge de lit",
            "Accessoires literie"
        ]
    },
    {
        title: "FIMA Design",
        description: "Menuiserie, ameublement, cuisines sur mesure",
        image: "https://images.unsplash.com/photo-1661446600373-125cfeadf275?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kJTIwZnVybml0dXJlJTIwY3JhZnRzbWFufGVufDF8fHx8MTc1ODExMTY2MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        projects: "200+ projets",
        business: "fima-design",
        color: "#6E6E6E",
        categories: [
            "Menuiserie",
            "Ameublement",
            "Cuisines",
            "Dressings",
            "Aménagements sur mesure"
        ]
    },
    {
        title: "UNIVERS GLASS",
        description: "Vitrerie, menuiserie aluminium, fenêtres",
        image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbGFzcyUyMHdpbmRvdyUyMG1vZGVybnxlbnwxfHx8fDE3NTU2NDI0ODd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        projects: "80+ projets",
        business: "univers-glass",
        color: "#0EA5E9",
        categories: [
            "Vitrerie",
            "Menuiserie Alu",
            "Fenêtres",
            "Portes",
            "Cloisons"
        ]
    }
];
function ProjectWithFimaSection({ onNavigate, onQuoteRequest }) {
    const [currentTestimonial, setCurrentTestimonial] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(0);
    const { selectedLanguage } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$AppContext$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["useApp"])();
    const { testimonials, loading: testimonialsLoading, error: testimonialsError } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useTestimonials$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useTestimonials"])(selectedLanguage, undefined, true, true);
    // Mapper les testimonials Supabase vers le format attendu
    const mappedTestimonials = testimonials.map((t)=>({
            id: t.id,
            name: t.clientName,
            company: t.clientCompany,
            location: t.clientLocation,
            image: t.clientPhoto || "https://images.unsplash.com/photo-1709715357519-2a84f9765e57?w=1080",
            comment: selectedLanguage === "fr" ? t.testimonialFr : t.testimonialEn,
            rating: t.rating,
            project: t.project || "",
            featured: t.featured,
            published: t.published
        }));
    const featuredTestimonials = mappedTestimonials.filter((t)=>t.featured && t.published);
    const currentTestimonialData = featuredTestimonials[currentTestimonial];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
        className: "py-16 bg-gradient-to-br from-gray-50 to-white",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "text-center mb-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                            style: {
                                fontFamily: "Montserrat",
                                color: "#000000"
                            },
                            children: "Votre projet avec FIMA"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectWithFimaSection.tsx",
                            lineNumber: 140,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                            className: "mt-4 max-w-3xl mx-auto text-lg",
                            style: {
                                color: "#6E6E6E"
                            },
                            children: "Depuis 1985, nous accompagnons les professionnels dans la réalisation de leurs projets d'ameublement et de literie"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectWithFimaSection.tsx",
                            lineNumber: 148,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ProjectWithFimaSection.tsx",
                    lineNumber: 139,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-3 gap-8 mb-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "text-4xl mb-2",
                                    style: {
                                        color: "#B5C233",
                                        fontFamily: "Montserrat",
                                        fontWeight: "700"
                                    },
                                    children: "40+"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProjectWithFimaSection.tsx",
                                    lineNumber: 161,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                    style: {
                                        color: "#6E6E6E"
                                    },
                                    children: "Années d'expérience"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProjectWithFimaSection.tsx",
                                    lineNumber: 171,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ProjectWithFimaSection.tsx",
                            lineNumber: 160,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "text-4xl mb-2",
                                    style: {
                                        color: "#B5C233",
                                        fontFamily: "Montserrat",
                                        fontWeight: "700"
                                    },
                                    children: "500+"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProjectWithFimaSection.tsx",
                                    lineNumber: 176,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                    style: {
                                        color: "#6E6E6E"
                                    },
                                    children: "Projets réalisés"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProjectWithFimaSection.tsx",
                                    lineNumber: 186,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ProjectWithFimaSection.tsx",
                            lineNumber: 175,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "text-4xl mb-2",
                                    style: {
                                        color: "#B5C233",
                                        fontFamily: "Montserrat",
                                        fontWeight: "700"
                                    },
                                    children: "98%"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProjectWithFimaSection.tsx",
                                    lineNumber: 189,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                    style: {
                                        color: "#6E6E6E"
                                    },
                                    children: "Clients satisfaits"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProjectWithFimaSection.tsx",
                                    lineNumber: 199,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ProjectWithFimaSection.tsx",
                            lineNumber: 188,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ProjectWithFimaSection.tsx",
                    lineNumber: 159,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-2xl p-8 md:p-12 shadow-xl",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 lg:grid-cols-2 gap-8 items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                        className: "mb-4",
                                        style: {
                                            fontFamily: "Montserrat",
                                            color: "#000000"
                                        },
                                        children: "Prêt à démarrer votre projet ?"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ProjectWithFimaSection.tsx",
                                        lineNumber: 509,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "space-y-3 mb-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                        className: "w-5 h-5",
                                                        style: {
                                                            color: "#B5C233"
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ProjectWithFimaSection.tsx",
                                                        lineNumber: 520,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                        className: "text-sm",
                                                        style: {
                                                            color: "#6E6E6E"
                                                        },
                                                        children: "Devis sous 48h"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ProjectWithFimaSection.tsx",
                                                        lineNumber: 524,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/ProjectWithFimaSection.tsx",
                                                lineNumber: 519,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                        className: "w-5 h-5",
                                                        style: {
                                                            color: "#B5C233"
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ProjectWithFimaSection.tsx",
                                                        lineNumber: 532,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                        className: "text-sm",
                                                        style: {
                                                            color: "#6E6E6E"
                                                        },
                                                        children: "Accompagnement personnalisé"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ProjectWithFimaSection.tsx",
                                                        lineNumber: 536,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/ProjectWithFimaSection.tsx",
                                                lineNumber: 531,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                        className: "w-5 h-5",
                                                        style: {
                                                            color: "#B5C233"
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ProjectWithFimaSection.tsx",
                                                        lineNumber: 544,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                        className: "text-sm",
                                                        style: {
                                                            color: "#6E6E6E"
                                                        },
                                                        children: "Garantie qualité FIMA"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ProjectWithFimaSection.tsx",
                                                        lineNumber: 548,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/ProjectWithFimaSection.tsx",
                                                lineNumber: 543,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ProjectWithFimaSection.tsx",
                                        lineNumber: 518,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col sm:flex-row gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                onClick: ()=>onQuoteRequest?.(),
                                                className: "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg transition-colors",
                                                style: {
                                                    backgroundColor: "#B5C233",
                                                    color: "#6E6E6E",
                                                    fontFamily: "Inter",
                                                    fontWeight: "500"
                                                },
                                                onMouseEnter: (e)=>{
                                                    e.currentTarget.style.backgroundColor = "#B5C233";
                                                },
                                                onMouseLeave: (e)=>{
                                                    e.currentTarget.style.backgroundColor = "#B5C233";
                                                },
                                                children: [
                                                    "Demander un devis",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                        className: "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ProjectWithFimaSection.tsx",
                                                        lineNumber: 576,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/ProjectWithFimaSection.tsx",
                                                lineNumber: 557,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                onClick: ()=>onNavigate?.("all-projects"),
                                                className: "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border transition-colors",
                                                style: {
                                                    backgroundColor: "#6E6E6E",
                                                    borderColor: "#6E6E6E",
                                                    color: "#B5C233",
                                                    fontFamily: "Inter",
                                                    fontWeight: "500"
                                                },
                                                onMouseEnter: (e)=>{
                                                    e.currentTarget.style.backgroundColor = "#B5C233";
                                                    e.currentTarget.style.color = "#333333";
                                                },
                                                children: "Voir nos projets"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ProjectWithFimaSection.tsx",
                                                lineNumber: 578,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ProjectWithFimaSection.tsx",
                                        lineNumber: 556,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ProjectWithFimaSection.tsx",
                                lineNumber: 508,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "relative",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$figma$2f$ImageWithFallback$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["ImageWithFallback"], {
                                    src: "https://jxikbrjmdmznoehhccdw.supabase.co/storage/v1/object/public/make-98c6ec1c-media/images/abd6e863-dab3-4e5a-9cca-5d58881ba6ac.png",
                                    alt: "Équipe FIMA en réunion projet",
                                    className: "w-full h-80 object-cover rounded-xl"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProjectWithFimaSection.tsx",
                                    lineNumber: 599,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProjectWithFimaSection.tsx",
                                lineNumber: 598,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ProjectWithFimaSection.tsx",
                        lineNumber: 507,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectWithFimaSection.tsx",
                    lineNumber: 506,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ProjectWithFimaSection.tsx",
            lineNumber: 137,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ProjectWithFimaSection.tsx",
        lineNumber: 136,
        columnNumber: 5
    }, this);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/components/PartnersSection.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "PartnersSection",
    ()=>PartnersSection
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$0830b98154b75ab80e3cd699a5e2aa2e1ec34152$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$0830b98154b75ab80e3cd699a5e2aa2e1ec34152$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/assets/0830b98154b75ab80e3cd699a5e2aa2e1ec34152.png.mjs { IMAGE => "[project]/src/assets/0830b98154b75ab80e3cd699a5e2aa2e1ec34152.png (static in ecmascript, tag client)" } [ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$4037f113fae77642415a905d8754f0d8f97275e0$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$4037f113fae77642415a905d8754f0d8f97275e0$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/assets/4037f113fae77642415a905d8754f0d8f97275e0.png.mjs { IMAGE => "[project]/src/assets/4037f113fae77642415a905d8754f0d8f97275e0.png (static in ecmascript, tag client)" } [ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$2e32728242ef61bf86f6ae110315f7b4aa3c42f0$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$2e32728242ef61bf86f6ae110315f7b4aa3c42f0$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/assets/2e32728242ef61bf86f6ae110315f7b4aa3c42f0.png.mjs { IMAGE => "[project]/src/assets/2e32728242ef61bf86f6ae110315f7b4aa3c42f0.png (static in ecmascript, tag client)" } [ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$c5289162cd684976dd7a7917d335170174c8652f$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$c5289162cd684976dd7a7917d335170174c8652f$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/assets/c5289162cd684976dd7a7917d335170174c8652f.png.mjs { IMAGE => "[project]/src/assets/c5289162cd684976dd7a7917d335170174c8652f.png (static in ecmascript, tag client)" } [ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$bc319577ff36e534afc433da243e1f45577b2ee8$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$bc319577ff36e534afc433da243e1f45577b2ee8$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/assets/bc319577ff36e534afc433da243e1f45577b2ee8.png.mjs { IMAGE => "[project]/src/assets/bc319577ff36e534afc433da243e1f45577b2ee8.png (static in ecmascript, tag client)" } [ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$f9f04472112108f54be0f6fac5b31408d105f61a$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$f9f04472112108f54be0f6fac5b31408d105f61a$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/assets/f9f04472112108f54be0f6fac5b31408d105f61a.png.mjs { IMAGE => "[project]/src/assets/f9f04472112108f54be0f6fac5b31408d105f61a.png (static in ecmascript, tag client)" } [ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$4673c7c573ce3de055ad9297c46aedc13b9bd55a$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$4673c7c573ce3de055ad9297c46aedc13b9bd55a$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/assets/4673c7c573ce3de055ad9297c46aedc13b9bd55a.png.mjs { IMAGE => "[project]/src/assets/4673c7c573ce3de055ad9297c46aedc13b9bd55a.png (static in ecmascript, tag client)" } [ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$0da4bee747388108bad21044a698ea1d39bed9f0$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$0da4bee747388108bad21044a698ea1d39bed9f0$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/assets/0da4bee747388108bad21044a698ea1d39bed9f0.png.mjs { IMAGE => "[project]/src/assets/0da4bee747388108bad21044a698ea1d39bed9f0.png (static in ecmascript, tag client)" } [ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$externals$5d2f$motion$2f$react__$5b$external$5d$__$28$motion$2f$react$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/motion/react [external] (motion/react, esm_import)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$motion$2f$react__$5b$external$5d$__$28$motion$2f$react$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$motion$2f$react__$5b$external$5d$__$28$motion$2f$react$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
;
;
;
;
;
function PartnersSection({ onNavigate }) {
    const partners = [
        {
            name: "Azalaï Hotels",
            logo: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$0830b98154b75ab80e3cd699a5e2aa2e1ec34152$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$0830b98154b75ab80e3cd699a5e2aa2e1ec34152$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"]
        },
        {
            name: "Ibis",
            logo: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$4037f113fae77642415a905d8754f0d8f97275e0$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$4037f113fae77642415a905d8754f0d8f97275e0$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"]
        },
        {
            name: "Sofitel Luxury Hotels",
            logo: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$bc319577ff36e534afc433da243e1f45577b2ee8$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$bc319577ff36e534afc433da243e1f45577b2ee8$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"]
        },
        {
            name: "Hôtel TIAMA",
            logo: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$f9f04472112108f54be0f6fac5b31408d105f61a$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$f9f04472112108f54be0f6fac5b31408d105f61a$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"]
        },
        {
            name: "Sogelux",
            logo: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$2e32728242ef61bf86f6ae110315f7b4aa3c42f0$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$2e32728242ef61bf86f6ae110315f7b4aa3c42f0$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"]
        },
        {
            name: "Partenaire Design",
            logo: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$c5289162cd684976dd7a7917d335170174c8652f$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$c5289162cd684976dd7a7917d335170174c8652f$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"]
        },
        {
            name: "BOYOOT Immobilier",
            logo: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$4673c7c573ce3de055ad9297c46aedc13b9bd55a$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$4673c7c573ce3de055ad9297c46aedc13b9bd55a$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"]
        },
        {
            name: "Zino",
            logo: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$0da4bee747388108bad21044a698ea1d39bed9f0$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$0da4bee747388108bad21044a698ea1d39bed9f0$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"]
        },
        // Duplicate for seamless loop
        {
            name: "Azalaï Hotels",
            logo: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$0830b98154b75ab80e3cd699a5e2aa2e1ec34152$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$0830b98154b75ab80e3cd699a5e2aa2e1ec34152$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"]
        },
        {
            name: "Ibis",
            logo: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$4037f113fae77642415a905d8754f0d8f97275e0$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$4037f113fae77642415a905d8754f0d8f97275e0$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"]
        },
        {
            name: "Sofitel Luxury Hotels",
            logo: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$bc319577ff36e534afc433da243e1f45577b2ee8$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$bc319577ff36e534afc433da243e1f45577b2ee8$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"]
        },
        {
            name: "Hôtel TIAMA",
            logo: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$f9f04472112108f54be0f6fac5b31408d105f61a$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$f9f04472112108f54be0f6fac5b31408d105f61a$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"]
        },
        {
            name: "Sogelux",
            logo: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$2e32728242ef61bf86f6ae110315f7b4aa3c42f0$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$2e32728242ef61bf86f6ae110315f7b4aa3c42f0$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"]
        },
        {
            name: "Partenaire Design",
            logo: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$c5289162cd684976dd7a7917d335170174c8652f$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$c5289162cd684976dd7a7917d335170174c8652f$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"]
        },
        {
            name: "BOYOOT Immobilier",
            logo: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$4673c7c573ce3de055ad9297c46aedc13b9bd55a$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$4673c7c573ce3de055ad9297c46aedc13b9bd55a$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"]
        },
        {
            name: "Zino",
            logo: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$0da4bee747388108bad21044a698ea1d39bed9f0$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$0da4bee747388108bad21044a698ea1d39bed9f0$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"]
        }
    ];
    const [isPaused, setIsPaused] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
        className: "py-16 bg-gray-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "text-center mb-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                            className: "mb-4",
                            style: {
                                fontFamily: "Montserrat",
                                color: "#0EA5E9"
                            },
                            children: "Nos Partenaires"
                        }, void 0, false, {
                            fileName: "[project]/src/components/PartnersSection.tsx",
                            lineNumber: 43,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                            className: "text-gray-600 max-w-2xl mx-auto",
                            children: "Ils nous font confiance pour leurs projets d'aménagement et d'équipement"
                        }, void 0, false, {
                            fileName: "[project]/src/components/PartnersSection.tsx",
                            lineNumber: 49,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/PartnersSection.tsx",
                    lineNumber: 42,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "max-w-6xl mx-auto overflow-hidden",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$motion$2f$react__$5b$external$5d$__$28$motion$2f$react$2c$__esm_import$29$__["motion"].div, {
                        className: "flex gap-8",
                        animate: {
                            x: isPaused ? undefined : [
                                0,
                                -3600
                            ]
                        },
                        transition: {
                            x: {
                                repeat: Infinity,
                                repeatType: "loop",
                                duration: 40,
                                ease: "linear"
                            }
                        },
                        onMouseEnter: ()=>setIsPaused(true),
                        onMouseLeave: ()=>setIsPaused(false),
                        children: partners.map((partner, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "flex-shrink-0 w-64",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-center bg-white p-8 hover:shadow-lg transition-shadow duration-300 h-40",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("img", {
                                        src: partner.logo,
                                        alt: partner.name,
                                        className: "w-full h-28 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/PartnersSection.tsx",
                                        lineNumber: 75,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/PartnersSection.tsx",
                                    lineNumber: 74,
                                    columnNumber: 17
                                }, this)
                            }, index, false, {
                                fileName: "[project]/src/components/PartnersSection.tsx",
                                lineNumber: 73,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/PartnersSection.tsx",
                        lineNumber: 56,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/PartnersSection.tsx",
                    lineNumber: 55,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/PartnersSection.tsx",
            lineNumber: 41,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/PartnersSection.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/components/NewsletterSection.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "NewsletterSection",
    ()=>NewsletterSection
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$react$2d$fontawesome__$5b$external$5d$__$2840$fortawesome$2f$react$2d$fontawesome$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/@fortawesome/react-fontawesome [external] (@fortawesome/react-fontawesome, esm_import)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons__$5b$external$5d$__$2840$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/@fortawesome/free-solid-svg-icons [external] (@fortawesome/free-solid-svg-icons, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useNewsletter$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useNewsletter.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLanguage$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useLanguage.ts [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$react$2d$fontawesome__$5b$external$5d$__$2840$fortawesome$2f$react$2d$fontawesome$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons__$5b$external$5d$__$2840$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLanguage$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$react$2d$fontawesome__$5b$external$5d$__$2840$fortawesome$2f$react$2d$fontawesome$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons__$5b$external$5d$__$2840$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLanguage$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
function NewsletterSection({ onNavigate }) {
    const { currentLanguage } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLanguage$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useLanguage"])();
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])("");
    const [isSubscribed, setIsSubscribed] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [emailError, setEmailError] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])("");
    const { subscribe, loading, error: subscriptionError } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useNewsletter$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useNewsletterSubscription"])();
    const { stats } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useNewsletter$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useNewsletterStats"])();
    // Validation d'email
    const validateEmail = (email)=>{
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setEmailError(currentLanguage === "en" ? "Invalid email format (ex: example@email.com)" : "Format email invalide (ex: example@email.com)");
            return false;
        }
        setEmailError("");
        return true;
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (!email || loading) return;
        // Valider l'email avant d'envoyer
        if (!validateEmail(email)) {
            return;
        }
        const result = await subscribe(email, {
            couchage: true,
            design: true,
            glass: true
        });
        if (result.success) {
            setIsSubscribed(true);
            setEmail("");
            setEmailError("");
        }
    };
    const benefits = [
        {
            icon: __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons__$5b$external$5d$__$2840$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2c$__esm_import$29$__["faBell"],
            titleFr: "Nouveautés FIMA Couchage",
            titleEn: "FIMA Couchage News",
            descriptionFr: "Matelas, sommiers, oreillers et accessoires literie",
            descriptionEn: "Mattresses, box springs, pillows and bedding accessories",
            color: "#B5C233"
        },
        {
            icon: __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons__$5b$external$5d$__$2840$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2c$__esm_import$29$__["faGift"],
            titleFr: "Projets FIMA Design",
            titleEn: "FIMA Design Projects",
            descriptionFr: "Menuiserie, ameublement et aménagements sur mesure",
            descriptionEn: "Carpentry, furnishings and custom layouts",
            color: "#6E6E6E"
        },
        {
            icon: __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons__$5b$external$5d$__$2840$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2c$__esm_import$29$__["faUser"],
            titleFr: "Solutions UNIVERS GLASS",
            titleEn: "UNIVERS GLASS Solutions",
            descriptionFr: "Vitrerie, menuiserie aluminium et cloisons",
            descriptionEn: "Glazing, aluminum joinery and partitions",
            color: "#0EA5E0"
        }
    ];
    // Get localized text
    const tagline = currentLanguage === "en" ? "FIMA Newsletter" : "Newsletter FIMA";
    const title = currentLanguage === "en" ? "Stay connected with FIMA" : "Restez connecté avec FIMA";
    const subtitle = currentLanguage === "en" ? "Follow the news of our 3 businesses: bedding, carpentry-furnishing, and glazing-aluminum" : "Suivez l'actualité de nos 3 métiers : literie, menuiserie-ameublement, et vitrerie-aluminium";
    const emailPlaceholder = currentLanguage === "en" ? "Your email address" : "Votre adresse email";
    const subscribeButton = currentLanguage === "en" ? "Subscribe" : "S'inscrire";
    const subscribingButton = currentLanguage === "en" ? "Subscribing..." : "Inscription...";
    const successTitle = currentLanguage === "en" ? "Subscription successful!" : "Inscription réussie !";
    const successMessage = currentLanguage === "en" ? "Thank you for subscribing! You will soon receive our first newsletter with our latest news." : "Merci de votre inscription ! Vous recevrez bientôt notre première newsletter avec nos dernières actualités.";
    const subscribeAnother = currentLanguage === "en" ? "Subscribe with another address" : "S'inscrire avec une autre adresse";
    const privacyText = currentLanguage === "en" ? "By subscribing, you agree to receive our marketing emails. You can unsubscribe at any time." : "En vous inscrivant, vous acceptez de recevoir nos emails marketing. Vous pouvez vous désabonner à tout moment.";
    const privacyLink = currentLanguage === "en" ? "Privacy Policy" : "Politique de confidentialité";
    const subscribersCount = stats ? stats.activeSubscribers : 2500;
    const subscribersText = currentLanguage === "en" ? `+${subscribersCount} subscribers • 3 businesses` : `+${subscribersCount} abonnés • 3 métiers`;
    const emailFrequency = currentLanguage === "en" ? "📧 1 email per week maximum" : "📧 1 email par semaine maximum";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
        className: "py-8 md:py-12 relative overflow-hidden",
        style: {
            backgroundColor: "#f8f9fa"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4 relative",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "max-w-3xl mx-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "text-center mb-6 md:mb-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-center gap-2 mb-3 md:mb-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$react$2d$fontawesome__$5b$external$5d$__$2840$fortawesome$2f$react$2d$fontawesome$2c$__esm_import$29$__["FontAwesomeIcon"], {
                                            icon: __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons__$5b$external$5d$__$2840$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2c$__esm_import$29$__["faEnvelope"],
                                            className: "w-5 h-5 md:w-6 md:h-6",
                                            style: {
                                                color: "#B5C233"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/NewsletterSection.tsx",
                                            lineNumber: 171,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                            className: "px-3 py-1 text-sm",
                                            style: {
                                                backgroundColor: "#B5C233",
                                                color: "#6E6E6E"
                                            },
                                            children: tagline
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/NewsletterSection.tsx",
                                            lineNumber: 176,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/NewsletterSection.tsx",
                                    lineNumber: 170,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                    className: "mb-2 md:mb-3",
                                    style: {
                                        fontFamily: "Montserrat",
                                        color: "#000000"
                                    },
                                    children: title
                                }, void 0, false, {
                                    fileName: "[project]/src/components/NewsletterSection.tsx",
                                    lineNumber: 187,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                    className: "text-sm md:text-base mb-4 md:mb-6",
                                    style: {
                                        color: "#6E6E6E",
                                        maxWidth: "600px",
                                        margin: "0 auto"
                                    },
                                    children: subtitle
                                }, void 0, false, {
                                    fileName: "[project]/src/components/NewsletterSection.tsx",
                                    lineNumber: 197,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/NewsletterSection.tsx",
                            lineNumber: 169,
                            columnNumber: 13
                        }, this),
                        !isSubscribed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("form", {
                            onSubmit: handleSubmit,
                            className: "space-y-3 md:space-y-4 max-w-2xl mx-auto",
                            children: [
                                subscriptionError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "p-3 border text-sm",
                                    style: {
                                        borderColor: "#E30613",
                                        backgroundColor: "#fff5f5",
                                        color: "#E30613"
                                    },
                                    children: subscriptionError
                                }, void 0, false, {
                                    fileName: "[project]/src/components/NewsletterSection.tsx",
                                    lineNumber: 241,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col sm:flex-row gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "flex-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                                    type: "email",
                                                    value: email,
                                                    onChange: (e)=>setEmail(e.target.value),
                                                    placeholder: emailPlaceholder,
                                                    required: true,
                                                    disabled: loading,
                                                    className: "w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 transition-all text-sm md:text-base",
                                                    style: {
                                                        backgroundColor: "#FFFFFF"
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/NewsletterSection.tsx",
                                                    lineNumber: 255,
                                                    columnNumber: 21
                                                }, this),
                                                emailError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-red-500",
                                                    style: {
                                                        color: "#E30613"
                                                    },
                                                    children: emailError
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/NewsletterSection.tsx",
                                                    lineNumber: 268,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/NewsletterSection.tsx",
                                            lineNumber: 254,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            disabled: loading || !email,
                                            className: "inline-flex items-center justify-center gap-2 px-4 md:px-6 py-3 transition-all disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap text-sm md:text-base",
                                            style: {
                                                backgroundColor: "#B5C233",
                                                color: "#6E6E6E"
                                            },
                                            onMouseEnter: (e)=>{
                                                if (!loading && email) {
                                                    e.currentTarget.style.backgroundColor = "#c5050f";
                                                }
                                            },
                                            onMouseLeave: (e)=>{
                                                e.currentTarget.style.backgroundColor = "#B5C233";
                                            },
                                            children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                        className: "w-4 h-4 border-2 border-white border-t-transparent animate-spin"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/NewsletterSection.tsx",
                                                        lineNumber: 297,
                                                        columnNumber: 25
                                                    }, this),
                                                    subscribingButton
                                                ]
                                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
                                                children: [
                                                    subscribeButton,
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$react$2d$fontawesome__$5b$external$5d$__$2840$fortawesome$2f$react$2d$fontawesome$2c$__esm_import$29$__["FontAwesomeIcon"], {
                                                        icon: __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons__$5b$external$5d$__$2840$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2c$__esm_import$29$__["faArrowRight"],
                                                        className: "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/NewsletterSection.tsx",
                                                        lineNumber: 303,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/NewsletterSection.tsx",
                                            lineNumber: 276,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/NewsletterSection.tsx",
                                    lineNumber: 253,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-center",
                                    style: {
                                        color: "#6E6E6E"
                                    },
                                    children: [
                                        privacyText,
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>onNavigate?.("privacy"),
                                            className: "underline hover:no-underline",
                                            style: {
                                                color: "#B5C233"
                                            },
                                            children: privacyLink
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/NewsletterSection.tsx",
                                            lineNumber: 317,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/NewsletterSection.tsx",
                                    lineNumber: 312,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/NewsletterSection.tsx",
                            lineNumber: 236,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "p-4 md:p-6 border-2 border-dashed max-w-2xl mx-auto",
                            style: {
                                borderColor: "#B5C233",
                                backgroundColor: "#f0f8e8"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col items-center text-center gap-2 md:gap-3 mb-3 md:mb-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$react$2d$fontawesome__$5b$external$5d$__$2840$fortawesome$2f$react$2d$fontawesome$2c$__esm_import$29$__["FontAwesomeIcon"], {
                                            icon: __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons__$5b$external$5d$__$2840$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2c$__esm_import$29$__["faCircleCheck"],
                                            className: "w-6 h-6 md:w-8 md:h-8",
                                            style: {
                                                color: "#B5C233"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/NewsletterSection.tsx",
                                            lineNumber: 336,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h4", {
                                            style: {
                                                color: "#000000"
                                            },
                                            children: successTitle
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/NewsletterSection.tsx",
                                            lineNumber: 341,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/NewsletterSection.tsx",
                                    lineNumber: 335,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                    className: "text-xs md:text-sm mb-3 md:mb-4 text-center",
                                    style: {
                                        color: "#6E6E6E"
                                    },
                                    children: successMessage
                                }, void 0, false, {
                                    fileName: "[project]/src/components/NewsletterSection.tsx",
                                    lineNumber: 345,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "text-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setIsSubscribed(false),
                                        className: "text-xs md:text-sm underline hover:no-underline",
                                        style: {
                                            color: "#B5C233"
                                        },
                                        children: subscribeAnother
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/NewsletterSection.tsx",
                                        lineNumber: 352,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/NewsletterSection.tsx",
                                    lineNumber: 351,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/NewsletterSection.tsx",
                            lineNumber: 328,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/NewsletterSection.tsx",
                    lineNumber: 168,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/NewsletterSection.tsx",
                lineNumber: 166,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/NewsletterSection.tsx",
            lineNumber: 165,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/NewsletterSection.tsx",
        lineNumber: 161,
        columnNumber: 5
    }, this);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/components/TestimonialsInitButton.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TestimonialsInitButton",
    ()=>TestimonialsInitButton
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$info$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/supabase/info.tsx [ssr] (ecmascript)");
;
;
;
function TestimonialsInitButton() {
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const initializeTestimonials = async ()=>{
        setLoading(true);
        setMessage(null);
        setError(null);
        try {
            const response = await fetch(`https://${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$info$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["projectId"]}.supabase.co/functions/v1/make-server-98c6ec1c/init-testimonials`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$info$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["publicAnonKey"]}`,
                    'Content-Type': 'application/json'
                }
            });
            if (!response.ok) {
                throw new Error(`Erreur ${response.status}: ${response.statusText}`);
            }
            const result = await response.json();
            if (result.success) {
                setMessage('✅ Testimonials initialisés avec succès !');
                // Recharger la page après 2 secondes
                setTimeout(()=>{
                    window.location.reload();
                }, 2000);
            } else {
                throw new Error(result.error || 'Erreur inconnue');
            }
        } catch (err) {
            console.error('Error initializing testimonials:', err);
            setError(err instanceof Error ? err.message : 'Erreur inconnue');
        } finally{
            setLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: "fixed bottom-4 right-4 z-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-lg shadow-xl p-4 border-2 border-red-500 max-w-sm",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                    className: "font-bold text-red-600 mb-2",
                    children: "⚠️ Données Testimonials manquantes"
                }, void 0, false, {
                    fileName: "[project]/src/components/TestimonialsInitButton.tsx",
                    lineNumber: 52,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                    className: "text-sm text-gray-600 mb-4",
                    children: "Les testimonials doivent être initialisés. Cliquez sur le bouton ci-dessous pour créer les données de démonstration."
                }, void 0, false, {
                    fileName: "[project]/src/components/TestimonialsInitButton.tsx",
                    lineNumber: 55,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                    onClick: initializeTestimonials,
                    disabled: loading,
                    className: "w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                    children: loading ? 'Initialisation...' : 'Initialiser les Testimonials'
                }, void 0, false, {
                    fileName: "[project]/src/components/TestimonialsInitButton.tsx",
                    lineNumber: 59,
                    columnNumber: 9
                }, this),
                message && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "mt-3 p-2 bg-green-50 border border-green-200 rounded text-sm text-green-700",
                    children: message
                }, void 0, false, {
                    fileName: "[project]/src/components/TestimonialsInitButton.tsx",
                    lineNumber: 68,
                    columnNumber: 11
                }, this),
                error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "mt-3 p-2 bg-red-50 border border-red-200 rounded text-sm text-red-700",
                    children: [
                        "❌ ",
                        error
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/TestimonialsInitButton.tsx",
                    lineNumber: 74,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/TestimonialsInitButton.tsx",
            lineNumber: 51,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/TestimonialsInitButton.tsx",
        lineNumber: 50,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/BedtimeStoriesSection.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "BedtimeStoriesSection",
    ()=>BedtimeStoriesSection
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [ssr] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useTestimonials$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useTestimonials.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLanguage$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useLanguage.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TestimonialsInitButton$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/TestimonialsInitButton.tsx [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLanguage$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLanguage$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
function BedtimeStoriesSection() {
    const { selectedLanguage } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLanguage$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useLanguage"])();
    // Récupération des témoignages depuis Supabase
    const { testimonials, loading, error } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useTestimonials$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useTestimonials"])(selectedLanguage === "en" ? "en" : "fr", undefined, false, true);
    // Limiter à 3 témoignages
    const displayedTestimonials = testimonials.slice(0, 3);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
        className: "py-8 md:py-16 bg-gray-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "text-center mb-8 md:mb-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                            className: "text-xl md:text-3xl mb-3 md:mb-4",
                            style: {
                                fontFamily: "Montserrat",
                                color: "#000000"
                            },
                            children: selectedLanguage === "en" ? "FIMA bedtime stories" : "Avis et expériences clients"
                        }, void 0, false, {
                            fileName: "[project]/src/components/BedtimeStoriesSection.tsx",
                            lineNumber: 26,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                            className: "text-sm md:text-lg max-w-2xl mx-auto",
                            style: {
                                color: "#6E6E6E"
                            },
                            children: selectedLanguage === "en" ? "Testimonials from our satisfied customers across West Africa." : "Témoignages de nos clients satisfaits."
                        }, void 0, false, {
                            fileName: "[project]/src/components/BedtimeStoriesSection.tsx",
                            lineNumber: 37,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/BedtimeStoriesSection.tsx",
                    lineNumber: 25,
                    columnNumber: 9
                }, this),
                loading ? // Skeleton pour les témoignages
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "products-grid w-full",
                    children: Array.from({
                        length: 3
                    }).map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "bg-white p-6 md:p-8 shadow-lg animate-pulse",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "flex items-start gap-4 mb-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "w-12 h-12 bg-gray-200"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/BedtimeStoriesSection.tsx",
                                            lineNumber: 57,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "flex-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    className: "flex gap-1 mb-2",
                                                    children: [
                                                        ...Array(5)
                                                    ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                            className: "w-4 h-4 bg-gray-200"
                                                        }, i, false, {
                                                            fileName: "[project]/src/components/BedtimeStoriesSection.tsx",
                                                            lineNumber: 61,
                                                            columnNumber: 25
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/BedtimeStoriesSection.tsx",
                                                    lineNumber: 59,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    className: "h-4 bg-gray-200 mb-1"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/BedtimeStoriesSection.tsx",
                                                    lineNumber: 67,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    className: "h-3 bg-gray-200 w-2/3"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/BedtimeStoriesSection.tsx",
                                                    lineNumber: 68,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/BedtimeStoriesSection.tsx",
                                            lineNumber: 58,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/BedtimeStoriesSection.tsx",
                                    lineNumber: 56,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "h-4 bg-gray-200 mb-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/BedtimeStoriesSection.tsx",
                                    lineNumber: 71,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "h-3 bg-gray-200"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/BedtimeStoriesSection.tsx",
                                            lineNumber: 73,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "h-3 bg-gray-200"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/BedtimeStoriesSection.tsx",
                                            lineNumber: 74,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "h-3 bg-gray-200 w-3/4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/BedtimeStoriesSection.tsx",
                                            lineNumber: 75,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/BedtimeStoriesSection.tsx",
                                    lineNumber: 72,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, index, true, {
                            fileName: "[project]/src/components/BedtimeStoriesSection.tsx",
                            lineNumber: 52,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/BedtimeStoriesSection.tsx",
                    lineNumber: 50,
                    columnNumber: 11
                }, this) : error ? // Message d'erreur avec bouton d'initialisation
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "text-center py-12",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                style: {
                                    color: "#6E6E6E"
                                },
                                children: selectedLanguage === "en" ? "Unable to load testimonials at this time." : "Impossible de charger les témoignages pour le moment."
                            }, void 0, false, {
                                fileName: "[project]/src/components/BedtimeStoriesSection.tsx",
                                lineNumber: 84,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/BedtimeStoriesSection.tsx",
                            lineNumber: 83,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TestimonialsInitButton$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["TestimonialsInitButton"], {}, void 0, false, {
                            fileName: "[project]/src/components/BedtimeStoriesSection.tsx",
                            lineNumber: 90,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true) : displayedTestimonials.length === 0 ? // Message vide
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "text-center py-12",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                        style: {
                            color: "#6E6E6E"
                        },
                        children: selectedLanguage === "en" ? "No testimonials available at this time." : "Aucun témoignage disponible pour le moment."
                    }, void 0, false, {
                        fileName: "[project]/src/components/BedtimeStoriesSection.tsx",
                        lineNumber: 95,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/BedtimeStoriesSection.tsx",
                    lineNumber: 94,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "products-grid w-full",
                    children: displayedTestimonials.map((testimonial, index)=>{
                        // Avatar emoji basé sur le nom ou photo
                        const avatar = testimonial.clientPhoto || "👤";
                        const testimonialText = selectedLanguage === "en" ? testimonial.testimonialEn : testimonial.testimonialFr;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "bg-white p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "flex items-start gap-4 mb-6",
                                    children: [
                                        testimonial.clientPhoto ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("img", {
                                            src: testimonial.clientPhoto,
                                            alt: testimonial.clientName,
                                            className: "w-12 h-12 object-cover rounded-full"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/BedtimeStoriesSection.tsx",
                                            lineNumber: 119,
                                            columnNumber: 23
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "w-12 h-12 rounded-full bg-[#B5C233] flex items-center justify-center text-white text-xl",
                                            children: testimonial.clientName.charAt(0)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/BedtimeStoriesSection.tsx",
                                            lineNumber: 125,
                                            columnNumber: 23
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "flex-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-1 mb-2",
                                                    children: [
                                                        ...Array(testimonial.rating)
                                                    ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                            className: "w-4 h-4 fill-current",
                                                            style: {
                                                                color: "#FFB800"
                                                            }
                                                        }, i, false, {
                                                            fileName: "[project]/src/components/BedtimeStoriesSection.tsx",
                                                            lineNumber: 133,
                                                            columnNumber: 29
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/BedtimeStoriesSection.tsx",
                                                    lineNumber: 130,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h4", {
                                                    className: "mb-1",
                                                    style: {
                                                        fontFamily: "Montserrat",
                                                        color: "#000000"
                                                    },
                                                    children: testimonial.clientName
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/BedtimeStoriesSection.tsx",
                                                    lineNumber: 141,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                    className: "text-sm",
                                                    style: {
                                                        color: "#6E6E6E"
                                                    },
                                                    children: testimonial.clientLocation
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/BedtimeStoriesSection.tsx",
                                                    lineNumber: 150,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/BedtimeStoriesSection.tsx",
                                            lineNumber: 129,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/BedtimeStoriesSection.tsx",
                                    lineNumber: 117,
                                    columnNumber: 19
                                }, this),
                                testimonial.project && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h5", {
                                    className: "mb-4",
                                    style: {
                                        fontFamily: "Montserrat",
                                        color: "#B5C233",
                                        fontSize: "1.1rem",
                                        fontWeight: "600"
                                    },
                                    children: testimonial.project
                                }, void 0, false, {
                                    fileName: "[project]/src/components/BedtimeStoriesSection.tsx",
                                    lineNumber: 161,
                                    columnNumber: 21
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("blockquote", {
                                    className: "text-base leading-relaxed",
                                    style: {
                                        color: "#000000",
                                        fontFamily: "Montserrat",
                                        fontWeight: "400",
                                        fontStyle: "italic"
                                    },
                                    children: [
                                        '"',
                                        testimonialText,
                                        '"'
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/BedtimeStoriesSection.tsx",
                                    lineNumber: 175,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, testimonial.id, true, {
                            fileName: "[project]/src/components/BedtimeStoriesSection.tsx",
                            lineNumber: 112,
                            columnNumber: 17
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/src/components/BedtimeStoriesSection.tsx",
                    lineNumber: 102,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/BedtimeStoriesSection.tsx",
            lineNumber: 23,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/BedtimeStoriesSection.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/components/ChatWidget.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "ChatWidget",
    ()=>ChatWidget
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-circle.js [ssr] (ecmascript) <export default as MessageCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/send.js [ssr] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [ssr] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$AppContext$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/AppContext.tsx [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$AppContext$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$AppContext$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
const initialMessages = [
    {
        id: '1',
        text: 'Bonjour ! Je suis Sophie, votre conseillère FIMA. Comment puis-je vous aider aujourd\'hui ?',
        sender: 'support',
        timestamp: new Date()
    }
];
const quickReplies = [
    'Informations sur les matelas',
    'Délais de livraison',
    'Retours et garanties',
    'Aide au choix'
];
const autoReplies = {
    'matelas': 'Notre gamme de matelas propose différents niveaux de fermeté et technologies. Quel type de confort recherchez-vous ?',
    'livraison': 'Nous livrons gratuitement en 3-5 jours ouvrés avec installation incluse. Dans quelle région êtes-vous ?',
    'garantie': 'Tous nos matelas bénéficient d\'une garantie de 10 ans et de 14 nuits d\'essai. Avez-vous des questions spécifiques ?',
    'prix': 'Nos prix commencent à 489€ pour un matelas Queen. Nous avons régulièrement des promotions. Quel budget avez-vous en tête ?',
    'taille': 'Nous proposons toutes les tailles standards : Single, Queen, King et California King. Quelle taille vous intéresse ?'
};
function ChatWidget() {
    const { isChatOpen, setIsChatOpen } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$AppContext$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["useApp"])();
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(initialMessages);
    const [inputValue, setInputValue] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])('');
    const [isTyping, setIsTyping] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const messagesEndRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(null);
    const scrollToBottom = ()=>{
        messagesEndRef.current?.scrollIntoView({
            behavior: 'smooth'
        });
    };
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        scrollToBottom();
    }, [
        messages
    ]);
    const getAutoReply = (userMessage)=>{
        const lowerMessage = userMessage.toLowerCase();
        for (const [keyword, reply] of Object.entries(autoReplies)){
            if (lowerMessage.includes(keyword)) {
                return reply;
            }
        }
        return 'Merci pour votre message ! Un conseiller va vous répondre dans quelques instants. En attendant, n\'hésitez pas à consulter notre FAQ.';
    };
    const sendMessage = (text)=>{
        if (!text.trim()) return;
        // Add user message
        const userMessage = {
            id: Date.now().toString(),
            text: text.trim(),
            sender: 'user',
            timestamp: new Date()
        };
        setMessages((prev)=>[
                ...prev,
                userMessage
            ]);
        setInputValue('');
        setIsTyping(true);
        // Simulate support response
        setTimeout(()=>{
            const supportMessage = {
                id: (Date.now() + 1).toString(),
                text: getAutoReply(text),
                sender: 'support',
                timestamp: new Date()
            };
            setMessages((prev)=>[
                    ...prev,
                    supportMessage
                ]);
            setIsTyping(false);
        }, 1000 + Math.random() * 2000);
    };
    const handleQuickReply = (reply)=>{
        sendMessage(reply);
    };
    const formatTime = (date)=>{
        return date.toLocaleTimeString('fr-FR', {
            hour: '2-digit',
            minute: '2-digit'
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
        children: [
            !isChatOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                onClick: ()=>setIsChatOpen(true),
                className: "fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center z-40 animate-pulse",
                style: {
                    backgroundColor: '#B5C233',
                    color: '#6E6E6E'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
                    className: "w-6 h-6"
                }, void 0, false, {
                    fileName: "[project]/src/components/ChatWidget.tsx",
                    lineNumber: 112,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ChatWidget.tsx",
                lineNumber: 107,
                columnNumber: 9
            }, this),
            isChatOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "fixed bottom-6 right-6 w-80 h-96 bg-white rounded-2xl shadow-2xl border flex flex-col z-50",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "p-4 rounded-t-2xl flex items-center justify-between",
                        style: {
                            backgroundColor: '#B5C233',
                            color: '#6E6E6E'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "w-8 h-8 bg-white/20 rounded-full flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                            className: "w-5 h-5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ChatWidget.tsx",
                                            lineNumber: 126,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ChatWidget.tsx",
                                        lineNumber: 125,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h4", {
                                                style: {
                                                    fontFamily: 'Montserrat'
                                                },
                                                children: "Support FIMA"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ChatWidget.tsx",
                                                lineNumber: 129,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                className: "text-xs opacity-90",
                                                children: "En ligne • Répond généralement en quelques minutes"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ChatWidget.tsx",
                                                lineNumber: 132,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ChatWidget.tsx",
                                        lineNumber: 128,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ChatWidget.tsx",
                                lineNumber: 124,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                onClick: ()=>setIsChatOpen(false),
                                className: "p-1 hover:bg-white/20 rounded-full transition-colors",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ChatWidget.tsx",
                                    lineNumber: 141,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ChatWidget.tsx",
                                lineNumber: 137,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ChatWidget.tsx",
                        lineNumber: 120,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "flex-1 p-4 overflow-y-auto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "space-y-4",
                                children: [
                                    messages.map((message)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: `flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "max-w-[80%] p-3 rounded-lg",
                                                style: {
                                                    backgroundColor: message.sender === 'user' ? '#0EA5E9' : '#f3f4f6',
                                                    color: message.sender === 'user' ? 'white' : '#1f2937'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                        className: "text-sm",
                                                        children: message.text
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ChatWidget.tsx",
                                                        lineNumber: 160,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                        className: "text-xs mt-1",
                                                        style: {
                                                            color: message.sender === 'user' ? 'rgba(14, 165, 233, 0.3)' : '#6b7280'
                                                        },
                                                        children: formatTime(message.timestamp)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ChatWidget.tsx",
                                                        lineNumber: 161,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/ChatWidget.tsx",
                                                lineNumber: 153,
                                                columnNumber: 19
                                            }, this)
                                        }, message.id, false, {
                                            fileName: "[project]/src/components/ChatWidget.tsx",
                                            lineNumber: 149,
                                            columnNumber: 17
                                        }, this)),
                                    isTyping && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "flex justify-start",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "bg-gray-100 text-gray-800 p-3 rounded-lg",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "flex space-x-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                        className: "w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ChatWidget.tsx",
                                                        lineNumber: 177,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                        className: "w-2 h-2 bg-gray-400 rounded-full animate-bounce",
                                                        style: {
                                                            animationDelay: '0.1s'
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ChatWidget.tsx",
                                                        lineNumber: 178,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                        className: "w-2 h-2 bg-gray-400 rounded-full animate-bounce",
                                                        style: {
                                                            animationDelay: '0.2s'
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ChatWidget.tsx",
                                                        lineNumber: 179,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/ChatWidget.tsx",
                                                lineNumber: 176,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ChatWidget.tsx",
                                            lineNumber: 175,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ChatWidget.tsx",
                                        lineNumber: 174,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ChatWidget.tsx",
                                lineNumber: 147,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                ref: messagesEndRef
                            }, void 0, false, {
                                fileName: "[project]/src/components/ChatWidget.tsx",
                                lineNumber: 185,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ChatWidget.tsx",
                        lineNumber: 146,
                        columnNumber: 11
                    }, this),
                    messages.length === 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "px-4 pb-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap gap-2",
                            children: quickReplies.map((reply, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                    onClick: ()=>handleQuickReply(reply),
                                    className: "text-xs px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors",
                                    style: {
                                        color: '#6E6E6E'
                                    },
                                    children: reply
                                }, index, false, {
                                    fileName: "[project]/src/components/ChatWidget.tsx",
                                    lineNumber: 193,
                                    columnNumber: 19
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/ChatWidget.tsx",
                            lineNumber: 191,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ChatWidget.tsx",
                        lineNumber: 190,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "p-4 border-t",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "flex gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    value: inputValue,
                                    onChange: (e)=>setInputValue(e.target.value),
                                    onKeyPress: (e)=>e.key === 'Enter' && sendMessage(inputValue),
                                    placeholder: "Tapez votre message...",
                                    className: "flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ChatWidget.tsx",
                                    lineNumber: 209,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                    onClick: ()=>sendMessage(inputValue),
                                    disabled: !inputValue.trim(),
                                    className: "p-2 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-colors",
                                    style: {
                                        backgroundColor: '#0EA5E9'
                                    },
                                    onMouseEnter: (e)=>{
                                        if (inputValue.trim()) e.currentTarget.style.backgroundColor = '#0c93d1';
                                    },
                                    onMouseLeave: (e)=>{
                                        if (inputValue.trim()) e.currentTarget.style.backgroundColor = '#0EA5E9';
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ChatWidget.tsx",
                                        lineNumber: 229,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ChatWidget.tsx",
                                    lineNumber: 217,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ChatWidget.tsx",
                            lineNumber: 208,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ChatWidget.tsx",
                        lineNumber: 207,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ChatWidget.tsx",
                lineNumber: 118,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/components/FimaSitemap.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FimaSitemap",
    ()=>FimaSitemap
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [ssr] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [ssr] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/house.js [ssr] (ecmascript) <export default as Home>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/package.js [ssr] (ecmascript) <export default as Package>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/building-2.js [ssr] (ecmascript) <export default as Building2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [ssr] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [ssr] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shopping-cart.js [ssr] (ecmascript) <export default as ShoppingCart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.js [ssr] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings.js [ssr] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.js [ssr] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [ssr] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/award.js [ssr] (ecmascript) <export default as Award>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$history$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__History$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/history.js [ssr] (ecmascript) <export default as History>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [ssr] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-open.js [ssr] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/camera.js [ssr] (ecmascript) <export default as Camera>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-square.js [ssr] (ecmascript) <export default as MessageSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [ssr] (ecmascript) <export default as ArrowLeft>");
;
;
;
const sitemapData = {
    id: "root",
    title: "FIMA - Site E-commerce B2B/B2C",
    type: "page",
    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"], {
        className: "w-5 h-5"
    }, void 0, false, {
        fileName: "[project]/src/components/FimaSitemap.tsx",
        lineNumber: 39,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0)),
    children: [
        {
            id: "home",
            title: "Accueil",
            type: "page",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"], {
                className: "w-4 h-4"
            }, void 0, false, {
                fileName: "[project]/src/components/FimaSitemap.tsx",
                lineNumber: 45,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            description: "Page principale avec toutes les sections",
            color: "#B5C233",
            children: [
                {
                    id: "hero",
                    title: "Section Héro",
                    type: "section",
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                        className: "w-4 h-4"
                    }, void 0, false, {
                        fileName: "[project]/src/components/FimaSitemap.tsx",
                        lineNumber: 53,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    description: "Bannière principale avec CTA"
                },
                {
                    id: "products-section",
                    title: "Section Produits",
                    type: "section",
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"], {
                        className: "w-4 h-4"
                    }, void 0, false, {
                        fileName: "[project]/src/components/FimaSitemap.tsx",
                        lineNumber: 60,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    description: "Aperçu catalogue produits"
                },
                {
                    id: "bedtime-stories",
                    title: "Bedtime Stories",
                    type: "section",
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                        className: "w-4 h-4"
                    }, void 0, false, {
                        fileName: "[project]/src/components/FimaSitemap.tsx",
                        lineNumber: 67,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    description: "Contenu lifestyle"
                },
                {
                    id: "video-stories",
                    title: "Vidéos Stories",
                    type: "section",
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__["Camera"], {
                        className: "w-4 h-4"
                    }, void 0, false, {
                        fileName: "[project]/src/components/FimaSitemap.tsx",
                        lineNumber: 74,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    description: "Contenus vidéo"
                },
                {
                    id: "company-presentation",
                    title: "Présentation Entreprise",
                    type: "section",
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"], {
                        className: "w-4 h-4"
                    }, void 0, false, {
                        fileName: "[project]/src/components/FimaSitemap.tsx",
                        lineNumber: 81,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    description: "Présentation du groupe FIMA"
                },
                {
                    id: "team-section",
                    title: "Section Équipe",
                    type: "section",
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                        className: "w-4 h-4"
                    }, void 0, false, {
                        fileName: "[project]/src/components/FimaSitemap.tsx",
                        lineNumber: 88,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    description: "Présentation de l'équipe"
                },
                {
                    id: "news-section",
                    title: "Section Actualités",
                    type: "section",
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                        className: "w-4 h-4"
                    }, void 0, false, {
                        fileName: "[project]/src/components/FimaSitemap.tsx",
                        lineNumber: 95,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    description: "Articles et news"
                },
                {
                    id: "projects-section",
                    title: "Projets avec FIMA",
                    type: "section",
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
                        className: "w-4 h-4"
                    }, void 0, false, {
                        fileName: "[project]/src/components/FimaSitemap.tsx",
                        lineNumber: 102,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    description: "Showcase de projets clients"
                },
                {
                    id: "newsletter",
                    title: "Newsletter",
                    type: "section",
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                        className: "w-4 h-4"
                    }, void 0, false, {
                        fileName: "[project]/src/components/FimaSitemap.tsx",
                        lineNumber: 109,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    description: "Inscription newsletter"
                },
                {
                    id: "about-section",
                    title: "Section À Propos",
                    type: "section",
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"], {
                        className: "w-4 h-4"
                    }, void 0, false, {
                        fileName: "[project]/src/components/FimaSitemap.tsx",
                        lineNumber: 116,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    description: "Informations générales"
                }
            ]
        },
        {
            id: "business-units",
            title: "Métiers du Groupe FIMA",
            type: "category",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"], {
                className: "w-4 h-4"
            }, void 0, false, {
                fileName: "[project]/src/components/FimaSitemap.tsx",
                lineNumber: 125,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            description: "3 unités d'affaires spécialisées",
            color: "#E30613",
            children: [
                {
                    id: "fima-couchage",
                    title: "FIMA Couchage",
                    type: "page",
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"], {
                        className: "w-4 h-4"
                    }, void 0, false, {
                        fileName: "[project]/src/components/FimaSitemap.tsx",
                        lineNumber: 133,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    description: "Spécialiste literie et matelas"
                },
                {
                    id: "fima-design",
                    title: "FIMA Design",
                    type: "page",
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
                        className: "w-4 h-4"
                    }, void 0, false, {
                        fileName: "[project]/src/components/FimaSitemap.tsx",
                        lineNumber: 140,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    description: "Menuiserie et ameublement"
                },
                {
                    id: "univers-glass",
                    title: "UNIVERS GLASS",
                    type: "page",
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                        className: "w-4 h-4"
                    }, void 0, false, {
                        fileName: "[project]/src/components/FimaSitemap.tsx",
                        lineNumber: 147,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    description: "Vitrerie et aluminium"
                }
            ]
        },
        {
            id: "catalog",
            title: "Catalogue Produits",
            type: "category",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"], {
                className: "w-4 h-4"
            }, void 0, false, {
                fileName: "[project]/src/components/FimaSitemap.tsx",
                lineNumber: 156,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            description: "Navigation produits complète",
            color: "#B5C233",
            children: [
                {
                    id: "all-products",
                    title: "Tous les Produits",
                    type: "page",
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"], {
                        className: "w-4 h-4"
                    }, void 0, false, {
                        fileName: "[project]/src/components/FimaSitemap.tsx",
                        lineNumber: 164,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    description: "Vue d'ensemble du catalogue"
                },
                {
                    id: "category-pages",
                    title: "Pages Catégories",
                    type: "page",
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                        className: "w-4 h-4"
                    }, void 0, false, {
                        fileName: "[project]/src/components/FimaSitemap.tsx",
                        lineNumber: 171,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    description: "Filtrage par catégorie"
                },
                {
                    id: "product-detail",
                    title: "Détail Produit",
                    type: "page",
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                        className: "w-4 h-4"
                    }, void 0, false, {
                        fileName: "[project]/src/components/FimaSitemap.tsx",
                        lineNumber: 178,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    description: "Galerie HD, zoom, vidéos 360°, avis"
                }
            ]
        },
        {
            id: "user-area",
            title: "Espace Utilisateur",
            type: "category",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                className: "w-4 h-4"
            }, void 0, false, {
                fileName: "[project]/src/components/FimaSitemap.tsx",
                lineNumber: 187,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            description: "Gestion compte et commandes",
            color: "#6E6E6E",
            children: [
                {
                    id: "auth",
                    title: "Authentification",
                    type: "page",
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                        className: "w-4 h-4"
                    }, void 0, false, {
                        fileName: "[project]/src/components/FimaSitemap.tsx",
                        lineNumber: 195,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    description: "Connexion / Inscription"
                },
                {
                    id: "account-dashboard",
                    title: "Tableau de Bord",
                    type: "page",
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
                        className: "w-4 h-4"
                    }, void 0, false, {
                        fileName: "[project]/src/components/FimaSitemap.tsx",
                        lineNumber: 202,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    description: "Gestion compte utilisateur"
                },
                {
                    id: "order-detail",
                    title: "Détail Commande",
                    type: "page",
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                        className: "w-4 h-4"
                    }, void 0, false, {
                        fileName: "[project]/src/components/FimaSitemap.tsx",
                        lineNumber: 209,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    description: "Informations complètes commande"
                },
                {
                    id: "order-tracking",
                    title: "Suivi Commande",
                    type: "page",
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                        className: "w-4 h-4"
                    }, void 0, false, {
                        fileName: "[project]/src/components/FimaSitemap.tsx",
                        lineNumber: 216,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    description: "Tracking en temps réel"
                },
                {
                    id: "checkout",
                    title: "Tunnel d'Achat",
                    type: "page",
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__["ShoppingCart"], {
                        className: "w-4 h-4"
                    }, void 0, false, {
                        fileName: "[project]/src/components/FimaSitemap.tsx",
                        lineNumber: 223,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    description: "Processus de commande"
                }
            ]
        },
        {
            id: "content-pages",
            title: "Pages de Contenu",
            type: "category",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                className: "w-4 h-4"
            }, void 0, false, {
                fileName: "[project]/src/components/FimaSitemap.tsx",
                lineNumber: 232,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            description: "Contenu éditorial et SEO",
            color: "#B5C233",
            children: [
                {
                    id: "content-hub",
                    title: "Hub de Contenu SEO",
                    type: "page",
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                        className: "w-4 h-4"
                    }, void 0, false, {
                        fileName: "[project]/src/components/FimaSitemap.tsx",
                        lineNumber: 240,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    description: "Articles et contenus optimisés"
                },
                {
                    id: "all-projects",
                    title: "Tous les Projets",
                    type: "page",
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
                        className: "w-4 h-4"
                    }, void 0, false, {
                        fileName: "[project]/src/components/FimaSitemap.tsx",
                        lineNumber: 247,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    description: "Galerie de réalisations"
                },
                {
                    id: "project-detail",
                    title: "Détail Projet",
                    type: "page",
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                        className: "w-4 h-4"
                    }, void 0, false, {
                        fileName: "[project]/src/components/FimaSitemap.tsx",
                        lineNumber: 254,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    description: "Showcase projet individuel"
                },
                {
                    id: "article-detail",
                    title: "Détail Article",
                    type: "page",
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                        className: "w-4 h-4"
                    }, void 0, false, {
                        fileName: "[project]/src/components/FimaSitemap.tsx",
                        lineNumber: 261,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    description: "Page article complète"
                }
            ]
        },
        {
            id: "corporate",
            title: "Pages Corporatives",
            type: "category",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"], {
                className: "w-4 h-4"
            }, void 0, false, {
                fileName: "[project]/src/components/FimaSitemap.tsx",
                lineNumber: 270,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            description: "Informations entreprise",
            color: "#6E6E6E",
            children: [
                {
                    id: "our-history",
                    title: "Notre Histoire",
                    type: "page",
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$history$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__History$3e$__["History"], {
                        className: "w-4 h-4"
                    }, void 0, false, {
                        fileName: "[project]/src/components/FimaSitemap.tsx",
                        lineNumber: 278,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    description: "Histoire de FIMA depuis 1985"
                },
                {
                    id: "our-certifications",
                    title: "Nos Certifications",
                    type: "page",
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__["Award"], {
                        className: "w-4 h-4"
                    }, void 0, false, {
                        fileName: "[project]/src/components/FimaSitemap.tsx",
                        lineNumber: 285,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    description: "Labels et certifications"
                },
                {
                    id: "careers",
                    title: "Carrières",
                    type: "page",
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                        className: "w-4 h-4"
                    }, void 0, false, {
                        fileName: "[project]/src/components/FimaSitemap.tsx",
                        lineNumber: 292,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    description: "Offres d'emploi et recrutement"
                }
            ]
        },
        {
            id: "b2b-solutions",
            title: "Solutions B2B",
            type: "page",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"], {
                className: "w-4 h-4"
            }, void 0, false, {
                fileName: "[project]/src/components/FimaSitemap.tsx",
                lineNumber: 301,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            description: "Landing page solutions professionnelles",
            color: "#E30613"
        },
        {
            id: "modals-widgets",
            title: "Modales & Widgets",
            type: "category",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"], {
                className: "w-4 h-4"
            }, void 0, false, {
                fileName: "[project]/src/components/FimaSitemap.tsx",
                lineNumber: 309,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            description: "Interactions utilisateur",
            color: "#B5C233",
            children: [
                {
                    id: "cart-modal",
                    title: "Panier",
                    type: "modal",
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__["ShoppingCart"], {
                        className: "w-4 h-4"
                    }, void 0, false, {
                        fileName: "[project]/src/components/FimaSitemap.tsx",
                        lineNumber: 317,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    description: "Gestion panier d'achat"
                },
                {
                    id: "favorites-modal",
                    title: "Favoris",
                    type: "modal",
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                        className: "w-4 h-4"
                    }, void 0, false, {
                        fileName: "[project]/src/components/FimaSitemap.tsx",
                        lineNumber: 324,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    description: "Liste des produits favoris"
                },
                {
                    id: "quote-request-modal",
                    title: "Demande de Devis",
                    type: "modal",
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                        className: "w-4 h-4"
                    }, void 0, false, {
                        fileName: "[project]/src/components/FimaSitemap.tsx",
                        lineNumber: 331,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    description: "Formulaire devis multi-étapes"
                },
                {
                    id: "expert-consultation-modal",
                    title: "Consultation Expert",
                    type: "modal",
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                        className: "w-4 h-4"
                    }, void 0, false, {
                        fileName: "[project]/src/components/FimaSitemap.tsx",
                        lineNumber: 338,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    description: "Prise de RDV expert"
                },
                {
                    id: "chat-widget",
                    title: "Chat Widget",
                    type: "modal",
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"], {
                        className: "w-4 h-4"
                    }, void 0, false, {
                        fileName: "[project]/src/components/FimaSitemap.tsx",
                        lineNumber: 345,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    description: "Support client en temps réel"
                }
            ]
        }
    ]
};
const SitemapNodeComponent = ({ node, level })=>{
    const [isExpanded, setIsExpanded] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(level < 2);
    const getTypeColor = (type)=>{
        switch(type){
            case "page":
                return "bg-blue-100 text-blue-800 border-blue-200";
            case "section":
                return "bg-green-100 text-green-800 border-green-200";
            case "modal":
                return "bg-purple-100 text-purple-800 border-purple-200";
            case "category":
                return "bg-orange-100 text-orange-800 border-orange-200";
            default:
                return "bg-gray-100 text-gray-800 border-gray-200";
        }
    };
    const getConnectorColor = (color)=>{
        return color || "#B5C233";
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: "relative",
        children: [
            level > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "absolute -left-4 top-6 w-4 h-px",
                style: {
                    backgroundColor: getConnectorColor(node.color)
                }
            }, void 0, false, {
                fileName: "[project]/src/components/FimaSitemap.tsx",
                lineNumber: 387,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            level > 0 && node.children && isExpanded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "absolute -left-4 top-6 w-px h-full",
                style: {
                    backgroundColor: getConnectorColor(node.color)
                }
            }, void 0, false, {
                fileName: "[project]/src/components/FimaSitemap.tsx",
                lineNumber: 397,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: `flex items-start gap-3 p-4 rounded-lg border transition-all duration-200 hover:shadow-md ${level === 0 ? "bg-gradient-to-r from-[#B5C233]/10 to-[#E30613]/10 border-[#B5C233]" : "bg-white border-gray-200"}`,
                children: [
                    node.children && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                        onClick: ()=>setIsExpanded(!isExpanded),
                        className: "flex-shrink-0 p-1 rounded hover:bg-gray-100 transition-colors",
                        style: {
                            color: getConnectorColor(node.color)
                        },
                        children: isExpanded ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                            className: "w-4 h-4"
                        }, void 0, false, {
                            fileName: "[project]/src/components/FimaSitemap.tsx",
                            lineNumber: 416,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                            className: "w-4 h-4"
                        }, void 0, false, {
                            fileName: "[project]/src/components/FimaSitemap.tsx",
                            lineNumber: 418,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/FimaSitemap.tsx",
                        lineNumber: 410,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "flex-1",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3 mb-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "p-2 rounded-lg",
                                    style: {
                                        backgroundColor: node.color ? `${node.color}15` : "#B5C23315",
                                        color: node.color || "#B5C233"
                                    },
                                    children: node.icon
                                }, void 0, false, {
                                    fileName: "[project]/src/components/FimaSitemap.tsx",
                                    lineNumber: 426,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "flex-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 mb-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                                    className: "font-semibold text-gray-900",
                                                    children: node.title
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/FimaSitemap.tsx",
                                                    lineNumber: 440,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                    className: `px-2 py-1 text-xs rounded-full border ${getTypeColor(node.type)}`,
                                                    children: node.type
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/FimaSitemap.tsx",
                                                    lineNumber: 443,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/FimaSitemap.tsx",
                                            lineNumber: 439,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        node.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-gray-600",
                                            children: node.description
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/FimaSitemap.tsx",
                                            lineNumber: 451,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/FimaSitemap.tsx",
                                    lineNumber: 438,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/FimaSitemap.tsx",
                            lineNumber: 425,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/FimaSitemap.tsx",
                        lineNumber: 424,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/FimaSitemap.tsx",
                lineNumber: 405,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            node.children && isExpanded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "ml-8 mt-4 space-y-4",
                children: node.children.map((child)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(SitemapNodeComponent, {
                        node: child,
                        level: level + 1
                    }, child.id, false, {
                        fileName: "[project]/src/components/FimaSitemap.tsx",
                        lineNumber: 464,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/src/components/FimaSitemap.tsx",
                lineNumber: 462,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/FimaSitemap.tsx",
        lineNumber: 384,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const FimaSitemap = ({ onNavigate })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: "max-w-6xl mx-auto p-6 bg-gray-50 min-h-screen",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "mb-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                    onClick: ()=>onNavigate?.("home"),
                    className: "flex items-center gap-2 px-4 py-2 bg-white border rounded-lg hover:bg-gray-50 transition-colors",
                    style: {
                        borderColor: "#B5C233",
                        color: "#6E6E6E"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                            className: "w-4 h-4"
                        }, void 0, false, {
                            fileName: "[project]/src/components/FimaSitemap.tsx",
                            lineNumber: 492,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                            children: "Retour à l'accueil"
                        }, void 0, false, {
                            fileName: "[project]/src/components/FimaSitemap.tsx",
                            lineNumber: 493,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/FimaSitemap.tsx",
                    lineNumber: 487,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/FimaSitemap.tsx",
                lineNumber: 486,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "text-center mb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                        className: "mb-4 bg-gradient-to-r from-[#B5C233] to-[#E30613] bg-clip-text text-transparent",
                        children: "Architecture de Navigation - Site FIMA"
                    }, void 0, false, {
                        fileName: "[project]/src/components/FimaSitemap.tsx",
                        lineNumber: 498,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                        className: "text-gray-600 max-w-2xl mx-auto",
                        children: "Cartographie complète du site e-commerce B2B/B2C FIMA avec ses 3 métiers : Couchage, Design et Univers Glass. Navigation structurée pour une expérience utilisateur optimale."
                    }, void 0, false, {
                        fileName: "[project]/src/components/FimaSitemap.tsx",
                        lineNumber: 501,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/FimaSitemap.tsx",
                lineNumber: 497,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 md:grid-cols-4 gap-4 mb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "bg-white p-4 rounded-lg border text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "text-2xl font-bold text-[#B5C233]",
                                children: "15+"
                            }, void 0, false, {
                                fileName: "[project]/src/components/FimaSitemap.tsx",
                                lineNumber: 512,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "text-sm text-gray-600",
                                children: "Pages Principales"
                            }, void 0, false, {
                                fileName: "[project]/src/components/FimaSitemap.tsx",
                                lineNumber: 515,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/FimaSitemap.tsx",
                        lineNumber: 511,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "bg-white p-4 rounded-lg border text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "text-2xl font-bold text-[#E30613]",
                                children: "3"
                            }, void 0, false, {
                                fileName: "[project]/src/components/FimaSitemap.tsx",
                                lineNumber: 520,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "text-sm text-gray-600",
                                children: "Métiers"
                            }, void 0, false, {
                                fileName: "[project]/src/components/FimaSitemap.tsx",
                                lineNumber: 523,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/FimaSitemap.tsx",
                        lineNumber: 519,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "bg-white p-4 rounded-lg border text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "text-2xl font-bold text-[#6E6E6E]",
                                children: "10+"
                            }, void 0, false, {
                                fileName: "[project]/src/components/FimaSitemap.tsx",
                                lineNumber: 526,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "text-sm text-gray-600",
                                children: "Sections"
                            }, void 0, false, {
                                fileName: "[project]/src/components/FimaSitemap.tsx",
                                lineNumber: 529,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/FimaSitemap.tsx",
                        lineNumber: 525,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "bg-white p-4 rounded-lg border text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "text-2xl font-bold text-[#B5C233]",
                                children: "5"
                            }, void 0, false, {
                                fileName: "[project]/src/components/FimaSitemap.tsx",
                                lineNumber: 532,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "text-sm text-gray-600",
                                children: "Modales/Widgets"
                            }, void 0, false, {
                                fileName: "[project]/src/components/FimaSitemap.tsx",
                                lineNumber: 535,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/FimaSitemap.tsx",
                        lineNumber: 531,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/FimaSitemap.tsx",
                lineNumber: 510,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "bg-white p-4 rounded-lg border mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                        className: "font-semibold mb-3 text-gray-900",
                        children: "Légende"
                    }, void 0, false, {
                        fileName: "[project]/src/components/FimaSitemap.tsx",
                        lineNumber: 543,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 md:grid-cols-4 gap-4 text-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                        className: "w-3 h-3 rounded bg-blue-500"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/FimaSitemap.tsx",
                                        lineNumber: 548,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                        children: "Page"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/FimaSitemap.tsx",
                                        lineNumber: 549,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/FimaSitemap.tsx",
                                lineNumber: 547,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                        className: "w-3 h-3 rounded bg-green-500"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/FimaSitemap.tsx",
                                        lineNumber: 552,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                        children: "Section"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/FimaSitemap.tsx",
                                        lineNumber: 553,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/FimaSitemap.tsx",
                                lineNumber: 551,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                        className: "w-3 h-3 rounded bg-purple-500"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/FimaSitemap.tsx",
                                        lineNumber: 556,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                        children: "Modale"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/FimaSitemap.tsx",
                                        lineNumber: 557,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/FimaSitemap.tsx",
                                lineNumber: 555,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                        className: "w-3 h-3 rounded bg-orange-500"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/FimaSitemap.tsx",
                                        lineNumber: 560,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                        children: "Catégorie"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/FimaSitemap.tsx",
                                        lineNumber: 561,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/FimaSitemap.tsx",
                                lineNumber: 559,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/FimaSitemap.tsx",
                        lineNumber: 546,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/FimaSitemap.tsx",
                lineNumber: 542,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "bg-white p-6 rounded-lg border",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(SitemapNodeComponent, {
                    node: sitemapData,
                    level: 0
                }, void 0, false, {
                    fileName: "[project]/src/components/FimaSitemap.tsx",
                    lineNumber: 568,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/FimaSitemap.tsx",
                lineNumber: 567,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "mt-8 bg-white p-6 rounded-lg border",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                        className: "font-semibold mb-4 text-gray-900",
                        children: "Détails Techniques"
                    }, void 0, false, {
                        fileName: "[project]/src/components/FimaSitemap.tsx",
                        lineNumber: 573,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "grid md:grid-cols-2 gap-6 text-sm text-gray-600",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h4", {
                                    className: "font-medium text-gray-900 mb-2",
                                    children: "Fonctionnalités Clés"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/FimaSitemap.tsx",
                                    lineNumber: 588,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("ul", {
                                    className: "space-y-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                            children: "• Panier et favoris persistants"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/FimaSitemap.tsx",
                                            lineNumber: 592,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                            children: "• Système d'avis modérés"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/FimaSitemap.tsx",
                                            lineNumber: 593,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                            children: "• Devis multi-étapes"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/FimaSitemap.tsx",
                                            lineNumber: 594,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                            children: "• Suivi de commandes"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/FimaSitemap.tsx",
                                            lineNumber: 595,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                            children: "• Chat support temps réel"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/FimaSitemap.tsx",
                                            lineNumber: 596,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/FimaSitemap.tsx",
                                    lineNumber: 591,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/FimaSitemap.tsx",
                            lineNumber: 587,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/FimaSitemap.tsx",
                        lineNumber: 576,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/FimaSitemap.tsx",
                lineNumber: 572,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/FimaSitemap.tsx",
        lineNumber: 484,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/src/components/MobileCategoryCards.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "MobileCategoryCards",
    ()=>MobileCategoryCards
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$react$2d$fontawesome__$5b$external$5d$__$2840$fortawesome$2f$react$2d$fontawesome$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/@fortawesome/react-fontawesome [external] (@fortawesome/react-fontawesome, esm_import)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons__$5b$external$5d$__$2840$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/@fortawesome/free-solid-svg-icons [external] (@fortawesome/free-solid-svg-icons, esm_import)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$react$2d$fontawesome__$5b$external$5d$__$2840$fortawesome$2f$react$2d$fontawesome$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons__$5b$external$5d$__$2840$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$react$2d$fontawesome__$5b$external$5d$__$2840$fortawesome$2f$react$2d$fontawesome$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons__$5b$external$5d$__$2840$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
function MobileCategoryCards({ onNavigate }) {
    const [currentSlide, setCurrentSlide] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(0);
    const scrollContainerRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(null);
    // Fonction pour naviguer vers tous les produits avec la catégorie sélectionnée
    const handleCategoryClick = (categorySlug)=>{
        // Navigation vers "all-products" avec la catégorie en paramètre
        onNavigate('all-products', categorySlug);
    };
    // Catégories de produits FIMA Couchage
    const categories = [
        {
            id: 'matelas-tissus-brode',
            title: 'Matelas Tissus Brodé',
            subtitle: 'FIMA Couchage',
            image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&q=80',
            color: '#B5C233'
        },
        {
            id: 'matelas-hopital',
            title: 'Matelas Hôpital',
            subtitle: 'FIMA Couchage',
            image: 'https://images.unsplash.com/photo-1631049035182-249067d7618e?w=800&q=80',
            color: '#B5C233'
        },
        {
            id: 'matelas-bebe',
            title: 'Matelas pour Bébé',
            subtitle: 'FIMA Couchage',
            image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&q=80',
            color: '#B5C233'
        },
        {
            id: 'coussins-traversins',
            title: 'Coussins et Traversins',
            subtitle: 'Tissus unis',
            image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80',
            color: '#B5C233'
        },
        {
            id: 'couette-housse',
            title: 'Couette et Housse de Couette',
            subtitle: 'FIMA Couchage',
            image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80',
            color: '#B5C233'
        },
        {
            id: 'kit-parure-lit',
            title: 'Kit de Parure de Lit',
            subtitle: 'FIMA Couchage',
            image: 'https://jxikbrjmdmznoehhccdw.supabase.co/storage/v1/object/public/make-98c6ec1c-media/images/8895139f-16cf-4424-9a58-671e1ff7e2ee.png',
            color: '#B5C233'
        }
    ];
    // Fonction pour scroller vers une slide spécifique
    const scrollToSlide = (index)=>{
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current;
            const slideWidth = container.offsetWidth;
            container.scrollTo({
                left: slideWidth * index,
                behavior: 'smooth'
            });
            setCurrentSlide(index);
        }
    };
    // Détecter le changement de slide au scroll
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        const container = scrollContainerRef.current;
        if (!container) return;
        const handleScroll = ()=>{
            const slideWidth = container.offsetWidth;
            const newIndex = Math.round(container.scrollLeft / slideWidth);
            setCurrentSlide(newIndex);
        };
        container.addEventListener('scroll', handleScroll);
        return ()=>container.removeEventListener('scroll', handleScroll);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: "md:hidden bg-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                ref: scrollContainerRef,
                className: "flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-3 pb-4",
                style: {
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none'
                },
                children: categories.map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "snap-center flex-shrink-0 w-[85%]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "relative overflow-hidden group bg-gray-100 min-h-[70vh]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105",
                                    style: {
                                        backgroundImage: `url(${category.image})`
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/MobileCategoryCards.tsx",
                                        lineNumber: 115,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/MobileCategoryCards.tsx",
                                    lineNumber: 108,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "relative h-full flex flex-col justify-between p-5 pt-12 text-white",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "mb-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                    className: "text-xm uppercase tracking-wider mb-1 opacity-90",
                                                    style: {
                                                        color: category.color
                                                    },
                                                    children: category.subtitle
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/MobileCategoryCards.tsx",
                                                    lineNumber: 121,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                                    className: "text-xl mb-2",
                                                    style: {
                                                        fontFamily: 'Montserrat'
                                                    },
                                                    children: category.title
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/MobileCategoryCards.tsx",
                                                    lineNumber: 127,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/MobileCategoryCards.tsx",
                                            lineNumber: 120,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                            onClick: (e)=>{
                                                e.stopPropagation();
                                                handleCategoryClick(category.id);
                                            },
                                            className: "flex items-center justify-between w-full py-2.5 px-4 transition-all duration-300 cursor-pointer",
                                            style: {
                                                backgroundColor: category.color,
                                                color: category.color === '#B5C233' ? '#333333' : category.color === '#6E6E6E' ? '#B5C233' : 'white',
                                                fontFamily: 'Inter'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                    className: "text-sm font-medium pt-[5px] pr-[0px] pb-[0px] pl-[0px]",
                                                    children: "Voir les produits"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/MobileCategoryCards.tsx",
                                                    lineNumber: 150,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$react$2d$fontawesome__$5b$external$5d$__$2840$fortawesome$2f$react$2d$fontawesome$2c$__esm_import$29$__["FontAwesomeIcon"], {
                                                    icon: __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons__$5b$external$5d$__$2840$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2c$__esm_import$29$__["faChevronRight"],
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/MobileCategoryCards.tsx",
                                                    lineNumber: 151,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/MobileCategoryCards.tsx",
                                            lineNumber: 136,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/MobileCategoryCards.tsx",
                                    lineNumber: 119,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/MobileCategoryCards.tsx",
                            lineNumber: 106,
                            columnNumber: 13
                        }, this)
                    }, category.id, false, {
                        fileName: "[project]/src/components/MobileCategoryCards.tsx",
                        lineNumber: 102,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/MobileCategoryCards.tsx",
                lineNumber: 96,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "flex justify-center gap-2 pb-8",
                children: categories.map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                        onClick: ()=>scrollToSlide(index),
                        className: "w-2 h-2 transition-all duration-300",
                        style: {
                            backgroundColor: currentSlide === index ? '#B5C233' : '#E0E0E0',
                            opacity: currentSlide === index ? 1 : 0.5,
                            minWidth: '8px',
                            minHeight: '8px',
                            width: '8px',
                            height: '8px',
                            padding: 0,
                            border: 'none'
                        },
                        "aria-label": `Aller à la catégorie ${index + 1}`
                    }, index, false, {
                        fileName: "[project]/src/components/MobileCategoryCards.tsx",
                        lineNumber: 162,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/MobileCategoryCards.tsx",
                lineNumber: 160,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "h-2 bg-gray-100"
            }, void 0, false, {
                fileName: "[project]/src/components/MobileCategoryCards.tsx",
                lineNumber: 182,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/MobileCategoryCards.tsx",
        lineNumber: 94,
        columnNumber: 5
    }, this);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/components/MobileHeaderV2.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "MobileHeaderV2",
    ()=>MobileHeaderV2
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$motion$2f$react__$5b$external$5d$__$28$motion$2f$react$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/motion/react [external] (motion/react, esm_import)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$react$2d$fontawesome__$5b$external$5d$__$2840$fortawesome$2f$react$2d$fontawesome$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/@fortawesome/react-fontawesome [external] (@fortawesome/react-fontawesome, esm_import)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons__$5b$external$5d$__$2840$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/@fortawesome/free-solid-svg-icons [external] (@fortawesome/free-solid-svg-icons, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$AppContext$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/AppContext.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$UserContext$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/UserContext.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLogoScrollAnimation$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useLogoScrollAnimation.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$f854c7794a9ab7d0c09684a330f067a2080edcf6$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$f854c7794a9ab7d0c09684a330f067a2080edcf6$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/assets/f854c7794a9ab7d0c09684a330f067a2080edcf6.png.mjs { IMAGE => "[project]/src/assets/f854c7794a9ab7d0c09684a330f067a2080edcf6.png (static in ecmascript, tag client)" } [ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$657c215f98beaa37718ea9d4ec19b4ef660894a8$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$657c215f98beaa37718ea9d4ec19b4ef660894a8$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/assets/657c215f98beaa37718ea9d4ec19b4ef660894a8.png.mjs { IMAGE => "[project]/src/assets/657c215f98beaa37718ea9d4ec19b4ef660894a8.png (static in ecmascript, tag client)" } [ssr] (structured image object with data url, ecmascript)');
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$motion$2f$react__$5b$external$5d$__$28$motion$2f$react$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$react$2d$fontawesome__$5b$external$5d$__$2840$fortawesome$2f$react$2d$fontawesome$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons__$5b$external$5d$__$2840$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$AppContext$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$UserContext$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$motion$2f$react__$5b$external$5d$__$28$motion$2f$react$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$react$2d$fontawesome__$5b$external$5d$__$2840$fortawesome$2f$react$2d$fontawesome$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons__$5b$external$5d$__$2840$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$AppContext$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$UserContext$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
;
;
;
;
function MobileHeaderV2({ onNavigate, onFavoritesClick }) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const { cart, favorites } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$AppContext$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["useApp"])();
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$UserContext$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["useUser"])();
    const { hasScrolled } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLogoScrollAnimation$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useLogoScrollAnimation"])();
    const totalItems = cart?.reduce((sum, item)=>sum + item.quantity, 0) || 0;
    const handleNavigateWithClose = (page, category)=>{
        setIsMobileMenuOpen(false);
        onNavigate(page, category);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("header", {
                style: {
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 1000,
                    backgroundColor: '#565757',
                    transform: 'translate3d(0, 0, 0)',
                    WebkitTransform: 'translate3d(0, 0, 0)',
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                    willChange: 'transform'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    style: {
                        padding: '0.625rem 0.75rem'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                gap: '0.5rem',
                                marginBottom: '0.5rem'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setIsMobileMenuOpen(!isMobileMenuOpen),
                                    style: {
                                        padding: '0.5rem',
                                        marginLeft: '-0.5rem',
                                        color: '#fff',
                                        background: 'none',
                                        border: 'none',
                                        minWidth: '44px',
                                        minHeight: '44px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        touchAction: 'manipulation',
                                        WebkitTapHighlightColor: 'transparent',
                                        cursor: 'pointer'
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$react$2d$fontawesome__$5b$external$5d$__$2840$fortawesome$2f$react$2d$fontawesome$2c$__esm_import$29$__["FontAwesomeIcon"], {
                                        icon: isMobileMenuOpen ? __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons__$5b$external$5d$__$2840$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2c$__esm_import$29$__["faXmark"] : __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons__$5b$external$5d$__$2840$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2c$__esm_import$29$__["faBars"],
                                        size: "lg"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/MobileHeaderV2.tsx",
                                        lineNumber: 85,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/MobileHeaderV2.tsx",
                                    lineNumber: 67,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    onClick: ()=>handleNavigateWithClose("home"),
                                    style: {
                                        flex: 1,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        cursor: 'pointer',
                                        touchAction: 'manipulation',
                                        WebkitTapHighlightColor: 'transparent',
                                        position: 'relative',
                                        height: '32px'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$motion$2f$react__$5b$external$5d$__$28$motion$2f$react$2c$__esm_import$29$__["motion"].img, {
                                            src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$f854c7794a9ab7d0c09684a330f067a2080edcf6$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$f854c7794a9ab7d0c09684a330f067a2080edcf6$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                            alt: "FIMA",
                                            style: {
                                                height: '24px',
                                                width: 'auto',
                                                objectFit: 'contain',
                                                position: 'absolute',
                                                willChange: hasScrolled ? 'opacity' : 'auto'
                                            },
                                            animate: {
                                                opacity: hasScrolled ? 0 : 1
                                            },
                                            transition: {
                                                duration: 0.3,
                                                ease: "easeOut"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/MobileHeaderV2.tsx",
                                            lineNumber: 104,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$motion$2f$react__$5b$external$5d$__$28$motion$2f$react$2c$__esm_import$29$__["motion"].img, {
                                            src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$657c215f98beaa37718ea9d4ec19b4ef660894a8$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$657c215f98beaa37718ea9d4ec19b4ef660894a8$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                            alt: "GROUP FIMA",
                                            style: {
                                                height: '24px',
                                                width: 'auto',
                                                objectFit: 'contain',
                                                willChange: hasScrolled ? 'opacity, transform' : 'auto'
                                            },
                                            initial: {
                                                opacity: 0,
                                                scale: 0.8
                                            },
                                            animate: {
                                                opacity: hasScrolled ? 1 : 0,
                                                scale: hasScrolled ? 1 : 0.8
                                            },
                                            transition: {
                                                duration: 0.5,
                                                delay: hasScrolled ? 0.2 : 0,
                                                ease: [
                                                    0.43,
                                                    0.13,
                                                    0.23,
                                                    0.96
                                                ]
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/MobileHeaderV2.tsx",
                                            lineNumber: 123,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/MobileHeaderV2.tsx",
                                    lineNumber: 89,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.25rem'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                            style: {
                                                padding: '0.25rem 0.5rem',
                                                color: '#fff',
                                                background: 'none',
                                                border: 'none',
                                                minHeight: '44px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                touchAction: 'manipulation',
                                                WebkitTapHighlightColor: 'transparent',
                                                cursor: 'pointer',
                                                fontSize: '14px',
                                                fontWeight: 600
                                            },
                                            children: "FR"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/MobileHeaderV2.tsx",
                                            lineNumber: 148,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                            onClick: ()=>{
                                                setIsMobileMenuOpen(false);
                                                if (onFavoritesClick) onFavoritesClick();
                                            },
                                            style: {
                                                position: 'relative',
                                                padding: '0.5rem',
                                                color: '#fff',
                                                background: 'none',
                                                border: 'none',
                                                minWidth: '44px',
                                                minHeight: '44px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                touchAction: 'manipulation',
                                                WebkitTapHighlightColor: 'transparent',
                                                cursor: 'pointer'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$react$2d$fontawesome__$5b$external$5d$__$2840$fortawesome$2f$react$2d$fontawesome$2c$__esm_import$29$__["FontAwesomeIcon"], {
                                                    icon: __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons__$5b$external$5d$__$2840$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2c$__esm_import$29$__["faHeart"],
                                                    size: "lg"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/MobileHeaderV2.tsx",
                                                    lineNumber: 190,
                                                    columnNumber: 17
                                                }, this),
                                                favorites && favorites.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        position: 'absolute',
                                                        top: '4px',
                                                        right: '4px',
                                                        width: '18px',
                                                        height: '18px',
                                                        borderRadius: '9px',
                                                        backgroundColor: '#E30613',
                                                        color: '#fff',
                                                        fontSize: '11px',
                                                        fontWeight: 600,
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center'
                                                    },
                                                    children: favorites.length
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/MobileHeaderV2.tsx",
                                                    lineNumber: 192,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/MobileHeaderV2.tsx",
                                            lineNumber: 169,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                            onClick: ()=>handleNavigateWithClose("checkout"),
                                            style: {
                                                position: 'relative',
                                                padding: '0.5rem',
                                                color: '#fff',
                                                background: 'none',
                                                border: 'none',
                                                minWidth: '44px',
                                                minHeight: '44px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                touchAction: 'manipulation',
                                                WebkitTapHighlightColor: 'transparent',
                                                cursor: 'pointer'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$react$2d$fontawesome__$5b$external$5d$__$2840$fortawesome$2f$react$2d$fontawesome$2c$__esm_import$29$__["FontAwesomeIcon"], {
                                                    icon: __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons__$5b$external$5d$__$2840$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2c$__esm_import$29$__["faShoppingCart"],
                                                    size: "lg"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/MobileHeaderV2.tsx",
                                                    lineNumber: 233,
                                                    columnNumber: 17
                                                }, this),
                                                totalItems > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        position: 'absolute',
                                                        top: '4px',
                                                        right: '4px',
                                                        width: '18px',
                                                        height: '18px',
                                                        borderRadius: '9px',
                                                        backgroundColor: '#B5C233',
                                                        color: '#000',
                                                        fontSize: '11px',
                                                        fontWeight: 600,
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center'
                                                    },
                                                    children: totalItems
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/MobileHeaderV2.tsx",
                                                    lineNumber: 235,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/MobileHeaderV2.tsx",
                                            lineNumber: 215,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                            onClick: ()=>handleNavigateWithClose(user ? "account" : "auth"),
                                            style: {
                                                padding: '0.5rem',
                                                color: '#fff',
                                                background: 'none',
                                                border: 'none',
                                                minWidth: '44px',
                                                minHeight: '44px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                touchAction: 'manipulation',
                                                WebkitTapHighlightColor: 'transparent',
                                                cursor: 'pointer'
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$react$2d$fontawesome__$5b$external$5d$__$2840$fortawesome$2f$react$2d$fontawesome$2c$__esm_import$29$__["FontAwesomeIcon"], {
                                                icon: __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons__$5b$external$5d$__$2840$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2c$__esm_import$29$__["faUser"],
                                                size: "lg"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/MobileHeaderV2.tsx",
                                                lineNumber: 275,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/MobileHeaderV2.tsx",
                                            lineNumber: 258,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/MobileHeaderV2.tsx",
                                    lineNumber: 146,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/MobileHeaderV2.tsx",
                            lineNumber: 65,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            style: {
                                position: 'relative'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                    type: "search",
                                    placeholder: "Rechercher...",
                                    style: {
                                        width: '100%',
                                        padding: '0.5rem 2.5rem 0.5rem 0.75rem',
                                        backgroundColor: '#fff',
                                        border: 'none',
                                        outline: 'none',
                                        fontSize: '16px',
                                        borderRadius: '0'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/MobileHeaderV2.tsx",
                                    lineNumber: 282,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$react$2d$fontawesome__$5b$external$5d$__$2840$fortawesome$2f$react$2d$fontawesome$2c$__esm_import$29$__["FontAwesomeIcon"], {
                                    icon: __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons__$5b$external$5d$__$2840$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2c$__esm_import$29$__["faSearch"],
                                    style: {
                                        position: 'absolute',
                                        right: '12px',
                                        top: '50%',
                                        transform: 'translateY(-50%)',
                                        color: '#6E6E6E',
                                        pointerEvents: 'none',
                                        fontSize: '16px'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/MobileHeaderV2.tsx",
                                    lineNumber: 295,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/MobileHeaderV2.tsx",
                            lineNumber: 281,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/MobileHeaderV2.tsx",
                    lineNumber: 63,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/MobileHeaderV2.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this),
            isMobileMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                style: {
                    position: 'fixed',
                    top: '100px',
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: '#fff',
                    zIndex: 999,
                    overflowY: 'auto',
                    overscrollBehavior: 'contain',
                    WebkitOverflowScrolling: 'touch'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("nav", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(MenuItem, {
                            onClick: ()=>handleNavigateWithClose("home"),
                            icon: "🏠",
                            children: "Accueil"
                        }, void 0, false, {
                            fileName: "[project]/src/components/MobileHeaderV2.tsx",
                            lineNumber: 328,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(MenuItem, {
                            onClick: ()=>handleNavigateWithClose("all-products"),
                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$react$2d$fontawesome__$5b$external$5d$__$2840$fortawesome$2f$react$2d$fontawesome$2c$__esm_import$29$__["FontAwesomeIcon"], {
                                icon: __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons__$5b$external$5d$__$2840$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2c$__esm_import$29$__["faBox"],
                                size: "lg"
                            }, void 0, false, {
                                fileName: "[project]/src/components/MobileHeaderV2.tsx",
                                lineNumber: 331,
                                columnNumber: 85
                            }, void 0),
                            children: "Nos Produits"
                        }, void 0, false, {
                            fileName: "[project]/src/components/MobileHeaderV2.tsx",
                            lineNumber: 331,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(MenuSeparator, {
                            children: "Nos Métiers"
                        }, void 0, false, {
                            fileName: "[project]/src/components/MobileHeaderV2.tsx",
                            lineNumber: 335,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(MenuItem, {
                            onClick: ()=>handleNavigateWithClose("fima-couchage"),
                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$react$2d$fontawesome__$5b$external$5d$__$2840$fortawesome$2f$react$2d$fontawesome$2c$__esm_import$29$__["FontAwesomeIcon"], {
                                icon: __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons__$5b$external$5d$__$2840$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2c$__esm_import$29$__["faBuilding"],
                                size: "lg",
                                style: {
                                    color: '#B5C233'
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/MobileHeaderV2.tsx",
                                lineNumber: 336,
                                columnNumber: 86
                            }, void 0),
                            children: "FIMA Couchage"
                        }, void 0, false, {
                            fileName: "[project]/src/components/MobileHeaderV2.tsx",
                            lineNumber: 336,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(MenuItem, {
                            onClick: ()=>handleNavigateWithClose("fima-design"),
                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$react$2d$fontawesome__$5b$external$5d$__$2840$fortawesome$2f$react$2d$fontawesome$2c$__esm_import$29$__["FontAwesomeIcon"], {
                                icon: __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons__$5b$external$5d$__$2840$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2c$__esm_import$29$__["faBuilding"],
                                size: "lg",
                                style: {
                                    color: '#6E6E6E'
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/MobileHeaderV2.tsx",
                                lineNumber: 339,
                                columnNumber: 84
                            }, void 0),
                            children: "FIMA Design"
                        }, void 0, false, {
                            fileName: "[project]/src/components/MobileHeaderV2.tsx",
                            lineNumber: 339,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(MenuItem, {
                            onClick: ()=>handleNavigateWithClose("univers-glass"),
                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$react$2d$fontawesome__$5b$external$5d$__$2840$fortawesome$2f$react$2d$fontawesome$2c$__esm_import$29$__["FontAwesomeIcon"], {
                                icon: __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons__$5b$external$5d$__$2840$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2c$__esm_import$29$__["faBuilding"],
                                size: "lg",
                                style: {
                                    color: '#0EA5E9'
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/MobileHeaderV2.tsx",
                                lineNumber: 342,
                                columnNumber: 86
                            }, void 0),
                            children: "Univers Glass"
                        }, void 0, false, {
                            fileName: "[project]/src/components/MobileHeaderV2.tsx",
                            lineNumber: 342,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(MenuItem, {
                            onClick: ()=>handleNavigateWithClose("all-projects"),
                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$react$2d$fontawesome__$5b$external$5d$__$2840$fortawesome$2f$react$2d$fontawesome$2c$__esm_import$29$__["FontAwesomeIcon"], {
                                icon: __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons__$5b$external$5d$__$2840$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2c$__esm_import$29$__["faFolderOpen"],
                                size: "lg"
                            }, void 0, false, {
                                fileName: "[project]/src/components/MobileHeaderV2.tsx",
                                lineNumber: 346,
                                columnNumber: 85
                            }, void 0),
                            children: "Nos Projets"
                        }, void 0, false, {
                            fileName: "[project]/src/components/MobileHeaderV2.tsx",
                            lineNumber: 346,
                            columnNumber: 13
                        }, this),
                        onFavoritesClick && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(MenuItem, {
                            onClick: ()=>{
                                setIsMobileMenuOpen(false);
                                onFavoritesClick();
                            },
                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$react$2d$fontawesome__$5b$external$5d$__$2840$fortawesome$2f$react$2d$fontawesome$2c$__esm_import$29$__["FontAwesomeIcon"], {
                                icon: __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons__$5b$external$5d$__$2840$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2c$__esm_import$29$__["faHeart"],
                                size: "lg"
                            }, void 0, false, {
                                fileName: "[project]/src/components/MobileHeaderV2.tsx",
                                lineNumber: 356,
                                columnNumber: 23
                            }, void 0),
                            children: [
                                "Mes Favoris (",
                                favorites?.length || 0,
                                ")"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/MobileHeaderV2.tsx",
                            lineNumber: 351,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(MenuItem, {
                            onClick: ()=>handleNavigateWithClose(user ? "account" : "auth"),
                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$react$2d$fontawesome__$5b$external$5d$__$2840$fortawesome$2f$react$2d$fontawesome$2c$__esm_import$29$__["FontAwesomeIcon"], {
                                icon: __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons__$5b$external$5d$__$2840$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2c$__esm_import$29$__["faUser"],
                                size: "lg"
                            }, void 0, false, {
                                fileName: "[project]/src/components/MobileHeaderV2.tsx",
                                lineNumber: 362,
                                columnNumber: 96
                            }, void 0),
                            children: user ? "Mon Compte" : "Se connecter"
                        }, void 0, false, {
                            fileName: "[project]/src/components/MobileHeaderV2.tsx",
                            lineNumber: 362,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/MobileHeaderV2.tsx",
                    lineNumber: 327,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/MobileHeaderV2.tsx",
                lineNumber: 313,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
// Helper components
function MenuItem({ children, icon, onClick }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
        onClick: onClick,
        style: {
            width: '100%',
            textAlign: 'left',
            padding: '0.75rem 1rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            background: 'none',
            border: 'none',
            borderBottom: '1px solid #f0f0f0',
            fontSize: '15px',
            color: '#000',
            touchAction: 'manipulation',
            WebkitTapHighlightColor: 'transparent',
            cursor: 'pointer'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                style: {
                    display: 'flex',
                    alignItems: 'center',
                    width: '20px'
                },
                children: icon
            }, void 0, false, {
                fileName: "[project]/src/components/MobileHeaderV2.tsx",
                lineNumber: 394,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/MobileHeaderV2.tsx",
                lineNumber: 395,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/MobileHeaderV2.tsx",
        lineNumber: 375,
        columnNumber: 5
    }, this);
}
function MenuSeparator({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        style: {
            padding: '0.5rem 1rem',
            fontSize: '12px',
            color: '#6E6E6E',
            textTransform: 'uppercase',
            fontWeight: 600,
            backgroundColor: '#f8f9fa'
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/MobileHeaderV2.tsx",
        lineNumber: 402,
        columnNumber: 5
    }, this);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=src_components_368f18fe._.js.map