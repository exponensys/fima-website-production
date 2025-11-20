(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/cms/layouts/CMSLayout.tsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CMSLayout",
    ()=>CMSLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cms$2f$components$2f$CMSSidebar$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/cms/components/CMSSidebar.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cms$2f$components$2f$CMSHeader$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/cms/components/CMSHeader.tsx [client] (ecmascript)");
;
;
;
function CMSLayout({ children, currentPage, onNavigate, onBackToSite }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gray-50 flex",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cms$2f$components$2f$CMSSidebar$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["CMSSidebar"], {
                currentPage: currentPage,
                onNavigate: onNavigate
            }, void 0, false, {
                fileName: "[project]/src/cms/layouts/CMSLayout.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 flex flex-col ml-64",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cms$2f$components$2f$CMSHeader$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["CMSHeader"], {
                        onBackToSite: onBackToSite
                    }, void 0, false, {
                        fileName: "[project]/src/cms/layouts/CMSLayout.tsx",
                        lineNumber: 22,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                        className: "flex-1 p-8 overflow-y-auto",
                        children: children
                    }, void 0, false, {
                        fileName: "[project]/src/cms/layouts/CMSLayout.tsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/cms/layouts/CMSLayout.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/cms/layouts/CMSLayout.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_c = CMSLayout;
var _c;
__turbopack_context__.k.register(_c, "CMSLayout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/cms/CMSApp.tsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CMSApp",
    ()=>CMSApp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cms$2f$layouts$2f$CMSLayout$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/cms/layouts/CMSLayout.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cms$2f$pages$2f$CMSDashboard$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/cms/pages/CMSDashboard.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cms$2f$pages$2f$CMSProducts$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/cms/pages/CMSProducts.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cms$2f$pages$2f$CMSHeroSlides$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/cms/pages/CMSHeroSlides.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cms$2f$pages$2f$CMSArticles$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/cms/pages/CMSArticles.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cms$2f$pages$2f$CMSArticleCategories$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/cms/pages/CMSArticleCategories.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cms$2f$pages$2f$CMSTestimonials$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/cms/pages/CMSTestimonials.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cms$2f$pages$2f$CMSTeam$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/cms/pages/CMSTeam.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cms$2f$pages$2f$CMSVideos$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/cms/pages/CMSVideos.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cms$2f$pages$2f$CMSOrders$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/cms/pages/CMSOrders.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cms$2f$pages$2f$CMSClients$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/cms/pages/CMSClients.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cms$2f$pages$2f$CMSSettings$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/cms/pages/CMSSettings.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cms$2f$pages$2f$CMSLogin$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/cms/pages/CMSLogin.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cms$2f$pages$2f$CMSBusinessUnits$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/cms/pages/CMSBusinessUnits.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cms$2f$pages$2f$CMSCategories$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/cms/pages/CMSCategories.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cms$2f$pages$2f$CMSProjects$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/cms/pages/CMSProjects.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cms$2f$pages$2f$CMSCallToAction$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/cms/pages/CMSCallToAction.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cms$2f$pages$2f$CMSMediaLibrary$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/cms/pages/CMSMediaLibrary.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$UserContext$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/UserContext.tsx [client] (ecmascript)");
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
;
function CMSApp({ onBackToSite }) {
    _s();
    const [currentPage, setCurrentPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])('dashboard');
    const { user, isLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$UserContext$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["useUser"])();
    const [isAuthenticated, setIsAuthenticated] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CMSApp.useEffect": ()=>{
            // Vérifier si l'utilisateur est connecté et a les droits admin
            if (user && user.role === 'admin') {
                setIsAuthenticated(true);
            } else {
                setIsAuthenticated(false);
            }
        }
    }["CMSApp.useEffect"], [
        user
    ]);
    // Afficher la page de login si non authentifié
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex items-center justify-center bg-gray-50",
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
                        fileName: "[project]/src/cms/CMSApp.tsx",
                        lineNumber: 63,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-600",
                        children: "Chargement..."
                    }, void 0, false, {
                        fileName: "[project]/src/cms/CMSApp.tsx",
                        lineNumber: 69,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/cms/CMSApp.tsx",
                lineNumber: 62,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/cms/CMSApp.tsx",
            lineNumber: 61,
            columnNumber: 7
        }, this);
    }
    if (!isAuthenticated) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cms$2f$pages$2f$CMSLogin$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["CMSLogin"], {
            onLogin: ()=>setIsAuthenticated(true),
            onBackToSite: onBackToSite
        }, void 0, false, {
            fileName: "[project]/src/cms/CMSApp.tsx",
            lineNumber: 76,
            columnNumber: 12
        }, this);
    }
    const renderPage = ()=>{
        switch(currentPage){
            case 'dashboard':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cms$2f$pages$2f$CMSDashboard$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["CMSDashboard"], {
                    onNavigate: setCurrentPage
                }, void 0, false, {
                    fileName: "[project]/src/cms/CMSApp.tsx",
                    lineNumber: 82,
                    columnNumber: 16
                }, this);
            case 'products':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cms$2f$pages$2f$CMSProducts$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["CMSProducts"], {}, void 0, false, {
                    fileName: "[project]/src/cms/CMSApp.tsx",
                    lineNumber: 84,
                    columnNumber: 16
                }, this);
            case 'hero-slides':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cms$2f$pages$2f$CMSHeroSlides$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["CMSHeroSlides"], {}, void 0, false, {
                    fileName: "[project]/src/cms/CMSApp.tsx",
                    lineNumber: 86,
                    columnNumber: 16
                }, this);
            case 'business-units':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cms$2f$pages$2f$CMSBusinessUnits$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["CMSBusinessUnits"], {}, void 0, false, {
                    fileName: "[project]/src/cms/CMSApp.tsx",
                    lineNumber: 88,
                    columnNumber: 16
                }, this);
            case 'categories':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cms$2f$pages$2f$CMSCategories$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["CMSCategories"], {}, void 0, false, {
                    fileName: "[project]/src/cms/CMSApp.tsx",
                    lineNumber: 90,
                    columnNumber: 16
                }, this);
            case 'call-to-action':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cms$2f$pages$2f$CMSCallToAction$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["CMSCallToAction"], {}, void 0, false, {
                    fileName: "[project]/src/cms/CMSApp.tsx",
                    lineNumber: 92,
                    columnNumber: 16
                }, this);
            case 'articles':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cms$2f$pages$2f$CMSArticles$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["CMSArticles"], {}, void 0, false, {
                    fileName: "[project]/src/cms/CMSApp.tsx",
                    lineNumber: 94,
                    columnNumber: 16
                }, this);
            case 'article-categories':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cms$2f$pages$2f$CMSArticleCategories$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["CMSArticleCategories"], {}, void 0, false, {
                    fileName: "[project]/src/cms/CMSApp.tsx",
                    lineNumber: 96,
                    columnNumber: 16
                }, this);
            case 'projects':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cms$2f$pages$2f$CMSProjects$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["CMSProjects"], {}, void 0, false, {
                    fileName: "[project]/src/cms/CMSApp.tsx",
                    lineNumber: 98,
                    columnNumber: 16
                }, this);
            case 'testimonials':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cms$2f$pages$2f$CMSTestimonials$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["CMSTestimonials"], {}, void 0, false, {
                    fileName: "[project]/src/cms/CMSApp.tsx",
                    lineNumber: 100,
                    columnNumber: 16
                }, this);
            case 'team':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cms$2f$pages$2f$CMSTeam$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["CMSTeam"], {}, void 0, false, {
                    fileName: "[project]/src/cms/CMSApp.tsx",
                    lineNumber: 102,
                    columnNumber: 16
                }, this);
            case 'videos':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cms$2f$pages$2f$CMSVideos$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["CMSVideos"], {}, void 0, false, {
                    fileName: "[project]/src/cms/CMSApp.tsx",
                    lineNumber: 104,
                    columnNumber: 16
                }, this);
            case 'orders':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cms$2f$pages$2f$CMSOrders$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["CMSOrders"], {}, void 0, false, {
                    fileName: "[project]/src/cms/CMSApp.tsx",
                    lineNumber: 106,
                    columnNumber: 16
                }, this);
            case 'clients':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cms$2f$pages$2f$CMSClients$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["CMSClients"], {}, void 0, false, {
                    fileName: "[project]/src/cms/CMSApp.tsx",
                    lineNumber: 108,
                    columnNumber: 16
                }, this);
            case 'settings':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cms$2f$pages$2f$CMSSettings$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["CMSSettings"], {}, void 0, false, {
                    fileName: "[project]/src/cms/CMSApp.tsx",
                    lineNumber: 110,
                    columnNumber: 16
                }, this);
            case 'media-library':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cms$2f$pages$2f$CMSMediaLibrary$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["CMSMediaLibrary"], {}, void 0, false, {
                    fileName: "[project]/src/cms/CMSApp.tsx",
                    lineNumber: 112,
                    columnNumber: 16
                }, this);
            default:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cms$2f$pages$2f$CMSDashboard$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["CMSDashboard"], {
                    onNavigate: setCurrentPage
                }, void 0, false, {
                    fileName: "[project]/src/cms/CMSApp.tsx",
                    lineNumber: 114,
                    columnNumber: 16
                }, this);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cms$2f$layouts$2f$CMSLayout$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["CMSLayout"], {
        currentPage: currentPage,
        onNavigate: setCurrentPage,
        onBackToSite: onBackToSite,
        children: renderPage()
    }, void 0, false, {
        fileName: "[project]/src/cms/CMSApp.tsx",
        lineNumber: 119,
        columnNumber: 5
    }, this);
}
_s(CMSApp, "1u6foPbr8NsW0oNrIm0rrFVvqWc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$UserContext$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["useUser"]
    ];
});
_c = CMSApp;
var _c;
__turbopack_context__.k.register(_c, "CMSApp");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_cms_fe0b905d._.js.map