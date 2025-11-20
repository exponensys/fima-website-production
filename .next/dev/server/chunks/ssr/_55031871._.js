module.exports = [
"[project]/src/components/SEOContentHub.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "SEOContentHub",
    ()=>SEOContentHub
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [ssr] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [ssr] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-open.js [ssr] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [ssr] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [ssr] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [ssr] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useBlogs$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useBlogs.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLanguage$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useLanguage.ts [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLanguage$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLanguage$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
function SEOContentHub({ onNavigate, onArticleClick, onBack }) {
    const { selectedLanguage } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLanguage$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useLanguage"])();
    const [activeCategory, setActiveCategory] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])("tous");
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])("");
    // Récupérer les blogs depuis le CMS
    const { blogs, loading, error } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useBlogs$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useBlogs"])(selectedLanguage === "en" ? "en" : "fr", undefined, true // Seulement les articles publiés
    );
    console.log('📚 SEOContentHub - Blogs loaded from CMS:', blogs);
    // Mapper les blogs du CMS vers le format attendu par la page
    const cmsArticles = blogs.map((blog)=>({
            id: blog.id,
            title: selectedLanguage === "en" ? blog.titleEn : blog.titleFr,
            subtitle: "",
            category: blog.category,
            type: "article",
            readTime: `${blog.readTime} min`,
            author: blog.author,
            authorRole: "",
            publishDate: blog.publishedDate || blog.createdAt,
            excerpt: selectedLanguage === "en" ? blog.summaryEn : blog.summaryFr,
            image: blog.featuredImage || "https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=1080",
            featured: false,
            keywords: blog.tags || [],
            tags: blog.tags || [],
            likes: blog.likes || 0,
            comments: 0,
            shares: 0,
            content: selectedLanguage === "en" ? blog.contentEn : blog.contentFr,
            slug: blog.slug
        }));
    // Compter les articles par catégorie depuis le CMS
    const categoryCounts = {
        tous: cmsArticles.length,
        guides: cmsArticles.filter((a)=>a.category.toLowerCase().includes('guide')).length,
        conseils: cmsArticles.filter((a)=>a.category.toLowerCase().includes('conseil')).length,
        tendances: cmsArticles.filter((a)=>a.category.toLowerCase().includes('tendance')).length,
        technique: cmsArticles.filter((a)=>a.category.toLowerCase().includes('technique')).length
    };
    const contentCategories = [
        {
            key: "tous",
            name: "Tous les contenus",
            count: categoryCounts.tous
        },
        {
            key: "guides",
            name: "Guides d'achat",
            count: categoryCounts.guides
        },
        {
            key: "conseils",
            name: "Conseils sommeil",
            count: categoryCounts.conseils
        },
        {
            key: "tendances",
            name: "Tendances déco",
            count: categoryCounts.tendances
        },
        {
            key: "technique",
            name: "Fiches techniques",
            count: categoryCounts.technique
        }
    ];
    // Filtrer les articles du CMS selon la catégorie et la recherche
    const filteredContent = cmsArticles.filter((item)=>{
        const matchesCategory = activeCategory === "tous" || activeCategory === "guides" && item.category.toLowerCase().includes("guide") || activeCategory === "conseils" && item.category.toLowerCase().includes("conseil") || activeCategory === "tendances" && item.category.toLowerCase().includes("tendance") || activeCategory === "technique" && item.category.toLowerCase().includes("technique");
        const matchesSearch = !searchQuery || item.title.toLowerCase().includes(searchQuery.toLowerCase()) || item.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) || item.keywords.some((keyword)=>keyword.toLowerCase().includes(searchQuery.toLowerCase()));
        return matchesCategory && matchesSearch;
    });
    // Articles en vedette (les 3 premiers du CMS)
    const featuredContent = cmsArticles.slice(0, 3);
    // États de chargement et d'erreur
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-white flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"
                    }, void 0, false, {
                        fileName: "[project]/src/components/SEOContentHub.tsx",
                        lineNumber: 114,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                        style: {
                            color: "#6E6E6E"
                        },
                        children: "Chargement des articles..."
                    }, void 0, false, {
                        fileName: "[project]/src/components/SEOContentHub.tsx",
                        lineNumber: 115,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/SEOContentHub.tsx",
                lineNumber: 113,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/SEOContentHub.tsx",
            lineNumber: 112,
            columnNumber: 7
        }, this);
    }
    if (error) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-white flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "text-center max-w-md mx-auto px-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                        className: "w-16 h-16 mx-auto mb-4 text-gray-400"
                    }, void 0, false, {
                        fileName: "[project]/src/components/SEOContentHub.tsx",
                        lineNumber: 125,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-bold mb-2",
                        style: {
                            fontFamily: "Montserrat"
                        },
                        children: "Impossible de charger les articles"
                    }, void 0, false, {
                        fileName: "[project]/src/components/SEOContentHub.tsx",
                        lineNumber: 126,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                        style: {
                            color: "#6E6E6E"
                        },
                        className: "mb-4",
                        children: error
                    }, void 0, false, {
                        fileName: "[project]/src/components/SEOContentHub.tsx",
                        lineNumber: 129,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                        onClick: onBack,
                        className: "px-6 py-3 text-white rounded-lg",
                        style: {
                            backgroundColor: "#0EA5E9"
                        },
                        children: "Retour à l'accueil"
                    }, void 0, false, {
                        fileName: "[project]/src/components/SEOContentHub.tsx",
                        lineNumber: 130,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/SEOContentHub.tsx",
                lineNumber: 124,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/SEOContentHub.tsx",
            lineNumber: 123,
            columnNumber: 7
        }, this);
    }
    if (cmsArticles.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-white flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "text-center max-w-md mx-auto px-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                        className: "w-16 h-16 mx-auto mb-4 text-gray-400"
                    }, void 0, false, {
                        fileName: "[project]/src/components/SEOContentHub.tsx",
                        lineNumber: 146,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-bold mb-2",
                        style: {
                            fontFamily: "Montserrat"
                        },
                        children: "Aucun article disponible"
                    }, void 0, false, {
                        fileName: "[project]/src/components/SEOContentHub.tsx",
                        lineNumber: 147,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                        style: {
                            color: "#6E6E6E"
                        },
                        className: "mb-4",
                        children: "Les articles seront bientôt disponibles. Revenez plus tard !"
                    }, void 0, false, {
                        fileName: "[project]/src/components/SEOContentHub.tsx",
                        lineNumber: 150,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                        onClick: onBack,
                        className: "px-6 py-3 text-white rounded-lg",
                        style: {
                            backgroundColor: "#0EA5E9"
                        },
                        children: "Retour à l'accueil"
                    }, void 0, false, {
                        fileName: "[project]/src/components/SEOContentHub.tsx",
                        lineNumber: 153,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/SEOContentHub.tsx",
                lineNumber: 145,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/SEOContentHub.tsx",
            lineNumber: 144,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: " border-b",
                style: {
                    borderColor: "#0EA5E9"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "container mx-auto px-4 bg-gray-50",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "flex items-center py-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                onClick: onBack,
                                className: "flex items-center gap-2 p-2 rounded-lg transition-colors mr-4",
                                onMouseEnter: (e)=>e.currentTarget.style.backgroundColor = "rgba(14, 165, 233, 0.2)",
                                onMouseLeave: (e)=>e.currentTarget.style.backgroundColor = "transparent",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/SEOContentHub.tsx",
                                        lineNumber: 186,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                        children: "Accueil"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/SEOContentHub.tsx",
                                        lineNumber: 187,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/SEOContentHub.tsx",
                                lineNumber: 174,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "w-16 h-16 rounded-full bg-gradient-to-r flex items-center justify-center text-white",
                                        style: {
                                            backgroundColor: "#0EA5E9"
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                                            className: "w-8 h-8"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/SEOContentHub.tsx",
                                            lineNumber: 195,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/SEOContentHub.tsx",
                                        lineNumber: 191,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                                                className: "text-3xl font-bold",
                                                style: {
                                                    fontFamily: "Montserrat",
                                                    color: "#000000"
                                                },
                                                children: "Centre de Ressources FIMA"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/SEOContentHub.tsx",
                                                lineNumber: 198,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                style: {
                                                    color: "#6E6E6E"
                                                },
                                                children: "Guides • Conseils • Expertise • 40 ans de savoir-faire"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/SEOContentHub.tsx",
                                                lineNumber: 207,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/SEOContentHub.tsx",
                                        lineNumber: 197,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/SEOContentHub.tsx",
                                lineNumber: 190,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/SEOContentHub.tsx",
                        lineNumber: 173,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/SEOContentHub.tsx",
                    lineNumber: 172,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/SEOContentHub.tsx",
                lineNumber: 168,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                className: "py-16 bg-gradient-to-b from-blue-50 to-white",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "container mx-auto px-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "max-w-3xl mx-auto text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                className: "text-4xl font-bold mb-6",
                                style: {
                                    fontFamily: "Montserrat",
                                    color: "#0EA5E9"
                                },
                                children: "Tout savoir sur l'habitat et l'aménagement"
                            }, void 0, false, {
                                fileName: "[project]/src/components/SEOContentHub.tsx",
                                lineNumber: 221,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                className: "text-xl mb-8",
                                style: {
                                    color: "#6E6E6E",
                                    textAlign: "justify"
                                },
                                children: "Inspirez-vous. Découvrez. Passez à l’action. Avec plus de 40 ans d’expertise, FIMA partage avec vous ses meilleurs conseils, astuces pratiques et tendances du moment pour sublimer votre intérieur. Apprenez à choisir la literie idéale, à harmoniser votre mobilier, ou à réussir vos projets de construction avec les recommandations de nos experts. Explorez nos guides et trouvez l’inspiration pour vos projets dès aujourd’hui !"
                            }, void 0, false, {
                                fileName: "[project]/src/components/SEOContentHub.tsx",
                                lineNumber: 230,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "relative max-w-xl mx-auto mb-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                        className: "absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/SEOContentHub.tsx",
                                        lineNumber: 247,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        placeholder: "Rechercher dans nos guides et conseils...",
                                        value: searchQuery,
                                        onChange: (e)=>setSearchQuery(e.target.value),
                                        className: "w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/SEOContentHub.tsx",
                                        lineNumber: 248,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/SEOContentHub.tsx",
                                lineNumber: 246,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap justify-center gap-3",
                                children: contentCategories.map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setActiveCategory(category.key),
                                        className: `px-6 py-3 rounded-full font-medium transition-all ${activeCategory === category.key ? "text-white shadow-lg" : "bg-white text-gray-700 border border-gray-300"}`,
                                        style: activeCategory === category.key ? {
                                            backgroundColor: "#0EA5E9"
                                        } : {},
                                        onMouseEnter: (e)=>{
                                            if (activeCategory !== category.key) {
                                                e.currentTarget.style.backgroundColor = "rgba(14, 165, 233, 0.05)";
                                            }
                                        },
                                        onMouseLeave: (e)=>{
                                            if (activeCategory !== category.key) {
                                                e.currentTarget.style.backgroundColor = "white";
                                            }
                                        },
                                        children: [
                                            category.name,
                                            " (",
                                            category.count,
                                            ")"
                                        ]
                                    }, category.key, true, {
                                        fileName: "[project]/src/components/SEOContentHub.tsx",
                                        lineNumber: 260,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/SEOContentHub.tsx",
                                lineNumber: 258,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/SEOContentHub.tsx",
                        lineNumber: 220,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/SEOContentHub.tsx",
                    lineNumber: 219,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/SEOContentHub.tsx",
                lineNumber: 218,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                className: "py-16",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "container mx-auto px-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                            className: "text-3xl font-bold mb-8",
                            style: {
                                fontFamily: "Montserrat",
                                color: "#000000"
                            },
                            children: "À la une"
                        }, void 0, false, {
                            fileName: "[project]/src/components/SEOContentHub.tsx",
                            lineNumber: 299,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("article", {
                            className: "bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow mb-12",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 lg:grid-cols-2 gap-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "relative h-64 lg:h-[400px]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("img", {
                                                src: featuredContent[0].image,
                                                alt: featuredContent[0].title,
                                                className: "w-full h-full object-cover"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/SEOContentHub.tsx",
                                                lineNumber: 313,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "absolute top-4 left-4",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                    className: "px-3 py-1 text-white rounded-full text-xs font-medium",
                                                    style: {
                                                        backgroundColor: "#0EA5E9"
                                                    },
                                                    children: featuredContent[0].category
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/SEOContentHub.tsx",
                                                    lineNumber: 319,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/SEOContentHub.tsx",
                                                lineNumber: 318,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/SEOContentHub.tsx",
                                        lineNumber: 312,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "lg:p-6 flex flex-col justify-center pt-[0px] pr-[40px] pb-[40px] pl-[40px]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                                onClick: ()=>onArticleClick(featuredContent[0]),
                                                className: "text-3xl font-bold mb-4 cursor-pointer",
                                                style: {
                                                    color: "#000000"
                                                },
                                                onMouseEnter: (e)=>e.currentTarget.style.color = "#0EA5E9",
                                                onMouseLeave: (e)=>e.currentTarget.style.color = "#000000",
                                                children: featuredContent[0].title
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/SEOContentHub.tsx",
                                                lineNumber: 329,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                className: "text-lg mb-6",
                                                style: {
                                                    color: "#6E6E6E"
                                                },
                                                children: featuredContent[0].excerpt
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/SEOContentHub.tsx",
                                                lineNumber: 345,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between text-sm text-gray-500 mb-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                                        className: "w-4 h-4"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/SEOContentHub.tsx",
                                                                        lineNumber: 355,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                        children: featuredContent[0].author
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/SEOContentHub.tsx",
                                                                        lineNumber: 356,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/SEOContentHub.tsx",
                                                                lineNumber: 354,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                                        className: "w-4 h-4"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/SEOContentHub.tsx",
                                                                        lineNumber: 359,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                        children: featuredContent[0].readTime
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/SEOContentHub.tsx",
                                                                        lineNumber: 360,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/SEOContentHub.tsx",
                                                                lineNumber: 358,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/SEOContentHub.tsx",
                                                        lineNumber: 353,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>onArticleClick(featuredContent[0]),
                                                        className: "font-medium flex items-center gap-1",
                                                        style: {
                                                            color: "#0EA5E9"
                                                        },
                                                        onMouseEnter: (e)=>e.currentTarget.style.color = "#0c93d1",
                                                        onMouseLeave: (e)=>e.currentTarget.style.color = "#0EA5E9",
                                                        children: [
                                                            "Lire l'article",
                                                            " ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                                className: "w-4 h-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/SEOContentHub.tsx",
                                                                lineNumber: 378,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/SEOContentHub.tsx",
                                                        lineNumber: 364,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/SEOContentHub.tsx",
                                                lineNumber: 352,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "flex flex-wrap gap-2",
                                                children: featuredContent[0].keywords.map((keyword, keywordIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                        className: "px-3 py-1 bg-gray-100 text-gray-600 rounded text-sm",
                                                        children: keyword
                                                    }, keywordIndex, false, {
                                                        fileName: "[project]/src/components/SEOContentHub.tsx",
                                                        lineNumber: 386,
                                                        columnNumber: 23
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/SEOContentHub.tsx",
                                                lineNumber: 383,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/SEOContentHub.tsx",
                                        lineNumber: 328,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/SEOContentHub.tsx",
                                lineNumber: 311,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/SEOContentHub.tsx",
                            lineNumber: 310,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
                            children: featuredContent.slice(1).map((content, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("article", {
                                    className: "bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "aspect-[4/3] relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("img", {
                                                    src: content.image,
                                                    alt: content.title,
                                                    className: "w-full h-full object-cover"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/SEOContentHub.tsx",
                                                    lineNumber: 407,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    className: "absolute top-4 left-4",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                        className: "px-3 py-1 text-white rounded-full text-xs font-medium",
                                                        style: {
                                                            backgroundColor: "#0EA5E9"
                                                        },
                                                        children: content.category
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/SEOContentHub.tsx",
                                                        lineNumber: 413,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/SEOContentHub.tsx",
                                                    lineNumber: 412,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/SEOContentHub.tsx",
                                            lineNumber: 406,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "p-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                                    onClick: ()=>onArticleClick(content),
                                                    className: "text-lg font-bold mb-3 cursor-pointer",
                                                    style: {
                                                        color: "#000000"
                                                    },
                                                    onMouseEnter: (e)=>e.currentTarget.style.color = "#0EA5E9",
                                                    onMouseLeave: (e)=>e.currentTarget.style.color = "#000000",
                                                    children: content.title
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/SEOContentHub.tsx",
                                                    lineNumber: 423,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                    className: "mb-4",
                                                    style: {
                                                        color: "#6E6E6E"
                                                    },
                                                    children: content.excerpt
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/SEOContentHub.tsx",
                                                    lineNumber: 437,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between text-sm text-gray-500",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                                            className: "w-4 h-4"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/SEOContentHub.tsx",
                                                                            lineNumber: 447,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                            children: content.author
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/SEOContentHub.tsx",
                                                                            lineNumber: 448,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/SEOContentHub.tsx",
                                                                    lineNumber: 446,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                                            className: "w-4 h-4"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/SEOContentHub.tsx",
                                                                            lineNumber: 451,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                            children: content.readTime
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/SEOContentHub.tsx",
                                                                            lineNumber: 452,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/SEOContentHub.tsx",
                                                                    lineNumber: 450,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/SEOContentHub.tsx",
                                                            lineNumber: 445,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>onArticleClick(content),
                                                            className: "font-medium flex items-center gap-1",
                                                            style: {
                                                                color: "#0EA5E9"
                                                            },
                                                            onMouseEnter: (e)=>e.currentTarget.style.color = "#0c93d1",
                                                            onMouseLeave: (e)=>e.currentTarget.style.color = "#0EA5E9",
                                                            children: [
                                                                "Lire ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                                    className: "w-4 h-4"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/SEOContentHub.tsx",
                                                                    lineNumber: 469,
                                                                    columnNumber: 28
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/SEOContentHub.tsx",
                                                            lineNumber: 456,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/SEOContentHub.tsx",
                                                    lineNumber: 444,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    className: "mt-4 flex flex-wrap gap-2",
                                                    children: content.keywords.map((keyword, keywordIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                            className: "px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs",
                                                            children: keyword
                                                        }, keywordIndex, false, {
                                                            fileName: "[project]/src/components/SEOContentHub.tsx",
                                                            lineNumber: 477,
                                                            columnNumber: 25
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/SEOContentHub.tsx",
                                                    lineNumber: 474,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/SEOContentHub.tsx",
                                            lineNumber: 422,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, content.id, true, {
                                    fileName: "[project]/src/components/SEOContentHub.tsx",
                                    lineNumber: 402,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/SEOContentHub.tsx",
                            lineNumber: 400,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/SEOContentHub.tsx",
                    lineNumber: 298,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/SEOContentHub.tsx",
                lineNumber: 297,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                className: "py-16 bg-gray-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "container mx-auto px-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between mb-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                    className: "text-3xl font-bold",
                                    style: {
                                        fontFamily: "Montserrat",
                                        color: "#0EA5E9"
                                    },
                                    children: "Tous nos contenus"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SEOContentHub.tsx",
                                    lineNumber: 497,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "text-sm text-gray-600",
                                    children: [
                                        filteredContent.length,
                                        " résultat",
                                        filteredContent.length > 1 ? "s" : ""
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/SEOContentHub.tsx",
                                    lineNumber: 506,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/SEOContentHub.tsx",
                            lineNumber: 496,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
                            children: filteredContent.map((content)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("article", {
                                    className: "bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 mb-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                    className: "px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium",
                                                    children: content.category
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/SEOContentHub.tsx",
                                                    lineNumber: 519,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                    className: "px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs",
                                                    children: content.type
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/SEOContentHub.tsx",
                                                    lineNumber: 522,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/SEOContentHub.tsx",
                                            lineNumber: 518,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                            onClick: ()=>onArticleClick(content),
                                            className: "font-bold text-lg mb-3 hover:text-blue-600 cursor-pointer",
                                            style: {
                                                color: "#000000"
                                            },
                                            children: content.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/SEOContentHub.tsx",
                                            lineNumber: 527,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                            className: "mb-4 text-sm",
                                            style: {
                                                color: "#6E6E6E"
                                            },
                                            children: content.excerpt
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/SEOContentHub.tsx",
                                            lineNumber: 535,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between text-sm text-gray-500 mb-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                            className: "w-4 h-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/SEOContentHub.tsx",
                                                            lineNumber: 544,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                            children: content.author
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/SEOContentHub.tsx",
                                                            lineNumber: 545,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/SEOContentHub.tsx",
                                                    lineNumber: 543,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                            className: "w-4 h-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/SEOContentHub.tsx",
                                                            lineNumber: 548,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                            children: content.readTime
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/SEOContentHub.tsx",
                                                            lineNumber: 549,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/SEOContentHub.tsx",
                                                    lineNumber: 547,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/SEOContentHub.tsx",
                                            lineNumber: 542,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                            onClick: ()=>onArticleClick(content),
                                            className: "w-full py-2 text-blue-600 hover:text-blue-700 font-medium flex items-center justify-center gap-1 border border-blue-200 rounded-lg hover:bg-blue-50 transition-colors",
                                            children: [
                                                "Lire l'article",
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/SEOContentHub.tsx",
                                                    lineNumber: 558,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/SEOContentHub.tsx",
                                            lineNumber: 553,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, content.id, true, {
                                    fileName: "[project]/src/components/SEOContentHub.tsx",
                                    lineNumber: 514,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/SEOContentHub.tsx",
                            lineNumber: 512,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/SEOContentHub.tsx",
                    lineNumber: 495,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/SEOContentHub.tsx",
                lineNumber: 494,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                className: "py-16"
            }, void 0, false, {
                fileName: "[project]/src/components/SEOContentHub.tsx",
                lineNumber: 567,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                className: "py-16 text-white",
                style: {
                    background: "linear-gradient(to right, #0EA5E9, #0c93d1)"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "container mx-auto px-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "max-w-2xl mx-auto text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                className: "text-3xl font-bold mb-4",
                                style: {
                                    fontFamily: "Montserrat"
                                },
                                children: "Restez informé de nos derniers conseils"
                            }, void 0, false, {
                                fileName: "[project]/src/components/SEOContentHub.tsx",
                                lineNumber: 579,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                className: "text-xl mb-8 opacity-90",
                                children: "Recevez chaque mois nos guides exclusifs, tendances et conseils d'experts directement dans votre boîte mail."
                            }, void 0, false, {
                                fileName: "[project]/src/components/SEOContentHub.tsx",
                                lineNumber: 585,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "flex flex-col sm:flex-row gap-4 max-w-lg mx-auto",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                        type: "email",
                                        placeholder: "Votre adresse email",
                                        className: "flex-1 px-4 py-3 bg-white rounded-lg text-gray-900 focus:outline-none"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/SEOContentHub.tsx",
                                        lineNumber: 592,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                        className: "px-6 py-3 rounded-lg font-semibold transition-colors",
                                        style: {
                                            backgroundColor: "#FFF",
                                            color: "#0EA5E9"
                                        },
                                        children: "S'abonner"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/SEOContentHub.tsx",
                                        lineNumber: 597,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/SEOContentHub.tsx",
                                lineNumber: 591,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                className: "text-sm mt-4 opacity-75",
                                children: "✓ Gratuit • ✓ Sans spam • ✓ Désabonnement en un clic"
                            }, void 0, false, {
                                fileName: "[project]/src/components/SEOContentHub.tsx",
                                lineNumber: 608,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/SEOContentHub.tsx",
                        lineNumber: 578,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/SEOContentHub.tsx",
                    lineNumber: 577,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/SEOContentHub.tsx",
                lineNumber: 570,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/SEOContentHub.tsx",
        lineNumber: 166,
        columnNumber: 5
    }, this);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/node_modules/lucide-react/dist/esm/icons/clock.js [ssr] (ecmascript)", ((__turbopack_context__) => {
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
    ()=>Clock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [ssr] (ecmascript)");
;
const __iconNode = [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "polyline",
        {
            points: "12 6 12 12 16 14",
            key: "68esgv"
        }
    ]
];
const Clock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])("clock", __iconNode);
;
 //# sourceMappingURL=clock.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/clock.js [ssr] (ecmascript) <export default as Clock>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Clock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [ssr] (ecmascript)");
}),
];

//# sourceMappingURL=_55031871._.js.map