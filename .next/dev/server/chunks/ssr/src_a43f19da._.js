module.exports = [
"[project]/src/utils/initHeroSlidesData.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "checkHeroSlidesExist",
    ()=>checkHeroSlidesExist,
    "getHeroSlides",
    ()=>getHeroSlides,
    "initHeroSlides",
    ()=>initHeroSlides
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$info$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/supabase/info.tsx [ssr] (ecmascript)");
;
async function initHeroSlides() {
    try {
        console.log('🎬 Initialisation des Hero Slides...');
        const response = await fetch(`https://${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$info$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["projectId"]}.supabase.co/functions/v1/make-server-98c6ec1c/api/init-hero-slides`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$info$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["publicAnonKey"]}`,
                'Content-Type': 'application/json'
            }
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        if (result.success) {
            console.log('✅ Hero Slides initialisés avec succès !');
            console.log(`📊 Total: ${result.data.total_slides} slides`);
            console.log(`🎥 Vidéos: ${result.data.video_slides}`);
            console.log(`🖼️ Images: ${result.data.image_slides}`);
            console.log('📋 Détails:', result.data.slides);
        }
        return result;
    } catch (error) {
        console.error('❌ Erreur lors de l\'initialisation des Hero Slides:', error);
        return {
            success: false,
            error: error instanceof Error ? error.message : 'Unknown error'
        };
    }
}
async function getHeroSlides(locale = 'fr') {
    try {
        const response = await fetch(`https://${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$info$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["projectId"]}.supabase.co/functions/v1/make-server-98c6ec1c/api/hero-slides?locale=${locale}`, {
            headers: {
                'Authorization': `Bearer ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$info$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["publicAnonKey"]}`,
                'Content-Type': 'application/json'
            }
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        return result;
    } catch (error) {
        console.error('❌ Erreur lors de la récupération des Hero Slides:', error);
        return {
            success: false,
            error: error instanceof Error ? error.message : 'Unknown error'
        };
    }
}
async function checkHeroSlidesExist() {
    try {
        const result = await getHeroSlides();
        return result.success && result.data && result.data.length > 0;
    } catch (error) {
        console.error('Erreur lors de la vérification des slides:', error);
        return false;
    }
} /**
 * 🔄 Guide d'utilisation rapide
 * 
 * INITIALISATION (À faire une seule fois) :
 * ```typescript
 * import { initHeroSlides } from './utils/initHeroSlidesData';
 * 
 * // Dans votre composant ou console
 * await initHeroSlides();
 * ```
 * 
 * VÉRIFICATION :
 * ```typescript
 * import { checkHeroSlidesExist, getHeroSlides } from './utils/initHeroSlidesData';
 * 
 * const exists = await checkHeroSlidesExist();
 * if (exists) {
 *   const { data } = await getHeroSlides('fr');
 *   console.log('Slides disponibles:', data);
 * }
 * ```
 * 
 * NOTES IMPORTANTES :
 * - Les slides sont stockés dans Supabase KV Store avec le préfixe 'hero-slides:'
 * - Chaque slide a un UUID unique
 * - Les vidéos utilisent des URLs publiques (remplacer par vos propres vidéos)
 * - Le composant Hero utilise automatiquement ces données via useHeroSlides()
 */ 
}),
"[project]/src/utils/initTestimonialsData.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "initTestimonials",
    ()=>initTestimonials
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$info$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/supabase/info.tsx [ssr] (ecmascript)");
;
async function initTestimonials() {
    try {
        console.log('📤 Envoi de la requête d\'initialisation des témoignages...');
        const response = await fetch(`https://${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$info$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["projectId"]}.supabase.co/functions/v1/make-server-98c6ec1c/init-testimonials`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$info$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["publicAnonKey"]}`,
                'Content-Type': 'application/json'
            }
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        if (result.success) {
            console.log('✅ Témoignages initialisés avec succès !', result.data);
            return {
                success: true,
                message: `${result.data?.testimonials || 0} témoignages créés`,
                data: result.data
            };
        } else {
            console.error('❌ Erreur lors de l\'initialisation des témoignages:', result.error);
            return {
                success: false,
                error: result.error || 'Erreur inconnue'
            };
        }
    } catch (error) {
        console.error('❌ Erreur fatale lors de l\'initialisation des témoignages:', error);
        return {
            success: false,
            error: error instanceof Error ? error.message : 'Erreur inconnue'
        };
    }
}
}),
"[project]/src/hooks/useMediaLibrary.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useMediaLibrary",
    ()=>useMediaLibrary
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$info$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/supabase/info.tsx [ssr] (ecmascript)");
;
;
function useMediaLibrary() {
    const [media, setMedia] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const fetchMedia = async ()=>{
        try {
            setLoading(true);
            setError(null);
            const response = await fetch(`https://${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$info$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["projectId"]}.supabase.co/functions/v1/make-server-98c6ec1c/api/media`, {
                headers: {
                    'Authorization': `Bearer ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$info$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["publicAnonKey"]}`,
                    'Content-Type': 'application/json'
                }
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const result = await response.json();
            if (result.success && result.data) {
                setMedia(result.data);
            } else {
                throw new Error(result.error || 'Failed to fetch media');
            }
        } catch (err) {
            console.error('Error fetching media:', err);
            setError(err instanceof Error ? err.message : 'An error occurred');
            setMedia([]);
        } finally{
            setLoading(false);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        fetchMedia();
    }, []);
    return {
        media,
        loading,
        error,
        refetch: fetchMedia
    };
}
}),
"[project]/src/hooks/useArticleCategories.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useArticleCategories",
    ()=>useArticleCategories,
    "useArticleCategoryMutation",
    ()=>useArticleCategoryMutation
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$info$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/supabase/info.tsx [ssr] (ecmascript)");
;
;
const API_BASE_URL = `https://${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$info$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["projectId"]}.supabase.co/functions/v1/make-server-98c6ec1c`;
const useArticleCategories = ()=>{
    const [categories, setCategories] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const fetchCategories = async ()=>{
        try {
            setLoading(true);
            setError(null);
            const response = await fetch(`${API_BASE_URL}/article-categories`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$info$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["publicAnonKey"]}`,
                    'Content-Type': 'application/json'
                }
            });
            if (!response.ok) {
                throw new Error(`Erreur lors du chargement des catégories: ${response.statusText}`);
            }
            const result = await response.json();
            if (!result.success) {
                throw new Error(result.error || 'Erreur lors du chargement des catégories');
            }
            // Trier par orderIndex
            const sortedCategories = (result.data || []).sort((a, b)=>a.orderIndex - b.orderIndex);
            setCategories(sortedCategories);
        } catch (err) {
            console.error('Error fetching article categories:', err);
            setError(err instanceof Error ? err.message : 'Erreur inconnue');
            setCategories([]);
        } finally{
            setLoading(false);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        fetchCategories();
    }, []);
    return {
        categories,
        loading,
        error,
        refetch: fetchCategories
    };
};
const useArticleCategoryMutation = ()=>{
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const createCategory = async (categoryData)=>{
        try {
            setLoading(true);
            setError(null);
            const response = await fetch(`${API_BASE_URL}/article-categories`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$info$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["publicAnonKey"]}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(categoryData)
            });
            if (!response.ok) {
                throw new Error(`Erreur lors de la création: ${response.statusText}`);
            }
            const result = await response.json();
            if (!result.success) {
                throw new Error(result.error || 'Erreur lors de la création');
            }
            return {
                success: true,
                data: result.data
            };
        } catch (err) {
            console.error('Error creating category:', err);
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
    const updateCategory = async (id, categoryData)=>{
        try {
            setLoading(true);
            setError(null);
            const response = await fetch(`${API_BASE_URL}/article-categories/${id}`, {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$info$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["publicAnonKey"]}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(categoryData)
            });
            if (!response.ok) {
                throw new Error(`Erreur lors de la mise à jour: ${response.statusText}`);
            }
            const result = await response.json();
            if (!result.success) {
                throw new Error(result.error || 'Erreur lors de la mise à jour');
            }
            return {
                success: true,
                data: result.data
            };
        } catch (err) {
            console.error('Error updating category:', err);
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
    const deleteCategory = async (id)=>{
        try {
            setLoading(true);
            setError(null);
            const response = await fetch(`${API_BASE_URL}/article-categories/${id}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$info$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["publicAnonKey"]}`,
                    'Content-Type': 'application/json'
                }
            });
            if (!response.ok) {
                throw new Error(`Erreur lors de la suppression: ${response.statusText}`);
            }
            const result = await response.json();
            if (!result.success) {
                throw new Error(result.error || 'Erreur lors de la suppression');
            }
            return {
                success: true
            };
        } catch (err) {
            console.error('Error deleting category:', err);
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
        createCategory,
        updateCategory,
        deleteCategory,
        loading,
        error
    };
};
}),
"[project]/src/components/ui/button.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$radix$2d$ui$2f$react$2d$slot__$5b$external$5d$__$2840$radix$2d$ui$2f$react$2d$slot$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/@radix-ui/react-slot [external] (@radix-ui/react-slot, esm_import)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$class$2d$variance$2d$authority__$5b$external$5d$__$28$class$2d$variance$2d$authority$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/class-variance-authority [external] (class-variance-authority, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/utils.ts [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f40$radix$2d$ui$2f$react$2d$slot__$5b$external$5d$__$2840$radix$2d$ui$2f$react$2d$slot$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$class$2d$variance$2d$authority__$5b$external$5d$__$28$class$2d$variance$2d$authority$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f40$radix$2d$ui$2f$react$2d$slot__$5b$external$5d$__$2840$radix$2d$ui$2f$react$2d$slot$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$class$2d$variance$2d$authority__$5b$external$5d$__$28$class$2d$variance$2d$authority$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$class$2d$variance$2d$authority__$5b$external$5d$__$28$class$2d$variance$2d$authority$2c$__esm_import$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            outline: "border bg-background text-foreground hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-9 px-4 py-2 has-[>svg]:px-3",
            sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
            lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
            icon: "size-9 rounded-md"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
const Button = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["forwardRef"](({ className, variant, size, asChild = false, ...props }, ref)=>{
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$externals$5d2f40$radix$2d$ui$2f$react$2d$slot__$5b$external$5d$__$2840$radix$2d$ui$2f$react$2d$slot$2c$__esm_import$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/button.tsx",
        lineNumber: 47,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
Button.displayName = "Button";
;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=src_a43f19da._.js.map