module.exports = [
"[project]/src/cms/pages/CMSCategories.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "CMSCategories",
    ()=>CMSCategories
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [ssr] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/square-pen.js [ssr] (ecmascript) <export default as Edit>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [ssr] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/save.js [ssr] (ecmascript) <export default as Save>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [ssr] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/image.js [ssr] (ecmascript) <export default as Image>");
var __TURBOPACK__imported__module__$5b$externals$5d2f$sonner__$5b$external$5d$__$28$sonner$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/sonner [external] (sonner, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useCMSCategories$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useCMSCategories.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$info$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/supabase/info.tsx [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$sonner__$5b$external$5d$__$28$sonner$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$sonner__$5b$external$5d$__$28$sonner$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
function CMSCategories() {
    const { categories, loading, refetch } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useCMSCategories$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useCMSCategories"])();
    const [editingId, setEditingId] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const [isCreating, setIsCreating] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [isInitializing, setIsInitializing] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [uploadingImage, setUploadingImage] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [selectedFilter, setSelectedFilter] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])('all');
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])({
        name: '',
        slug: '',
        description: '',
        parent_id: null,
        color: '#B5C233',
        icon_emoji: '📦',
        order_index: 0,
        is_active: true,
        business_unit: 'all',
        images: [],
        thumbnail: ''
    });
    // Fonction pour initialiser des catégories par défaut
    const initializeDefaultCategories = async ()=>{
        setIsInitializing(true);
        try {
            const defaultCategories = [
                // FIMA Couchage
                {
                    name: 'Matelas',
                    slug: 'matelas',
                    business_unit: 'couchage',
                    icon_emoji: '🛏️',
                    color: '#B5C233',
                    order_index: 1,
                    is_active: true
                },
                {
                    name: 'Sommiers',
                    slug: 'sommiers',
                    business_unit: 'couchage',
                    icon_emoji: '📐',
                    color: '#B5C233',
                    order_index: 2,
                    is_active: true
                },
                {
                    name: 'Oreillers',
                    slug: 'oreillers',
                    business_unit: 'couchage',
                    icon_emoji: '🎯',
                    color: '#B5C233',
                    order_index: 3,
                    is_active: true
                },
                {
                    name: 'Linge de lit',
                    slug: 'linge-de-lit',
                    business_unit: 'couchage',
                    icon_emoji: '🧺',
                    color: '#B5C233',
                    order_index: 4,
                    is_active: true
                },
                // FIMA Design
                {
                    name: 'Bureaux',
                    slug: 'bureaux',
                    business_unit: 'design',
                    icon_emoji: '🪑',
                    color: '#6E6E6E',
                    order_index: 5,
                    is_active: true
                },
                {
                    name: 'Chaises',
                    slug: 'chaises',
                    business_unit: 'design',
                    icon_emoji: '💺',
                    color: '#6E6E6E',
                    order_index: 6,
                    is_active: true
                },
                {
                    name: 'Tables',
                    slug: 'tables',
                    business_unit: 'design',
                    icon_emoji: '🪵',
                    color: '#6E6E6E',
                    order_index: 7,
                    is_active: true
                },
                {
                    name: 'Rangements',
                    slug: 'rangements',
                    business_unit: 'design',
                    icon_emoji: '🗄️',
                    color: '#6E6E6E',
                    order_index: 8,
                    is_active: true
                },
                // Univers Glass
                {
                    name: 'Vitrines',
                    slug: 'vitrines',
                    business_unit: 'univers-glass',
                    icon_emoji: '🪟',
                    color: '#0EA5E9',
                    order_index: 9,
                    is_active: true
                },
                {
                    name: 'Miroirs',
                    slug: 'miroirs',
                    business_unit: 'univers-glass',
                    icon_emoji: '🪞',
                    color: '#0EA5E9',
                    order_index: 10,
                    is_active: true
                },
                {
                    name: 'Portes vitrées',
                    slug: 'portes-vitrees',
                    business_unit: 'univers-glass',
                    icon_emoji: '🚪',
                    color: '#0EA5E9',
                    order_index: 11,
                    is_active: true
                },
                {
                    name: 'Verrières',
                    slug: 'verrieres',
                    business_unit: 'univers-glass',
                    icon_emoji: '🏠',
                    color: '#0EA5E9',
                    order_index: 12,
                    is_active: true
                }
            ];
            // Créer chaque catégorie via l'API
            const promises = defaultCategories.map((cat)=>fetch(`https://${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$info$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["projectId"]}.supabase.co/functions/v1/make-server-98c6ec1c/categories`, {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$info$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["publicAnonKey"]}`,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(cat)
                }));
            await Promise.all(promises);
            __TURBOPACK__imported__module__$5b$externals$5d2f$sonner__$5b$external$5d$__$28$sonner$2c$__esm_import$29$__["toast"].success(`${defaultCategories.length} catégories initialisées avec succès !`);
            refetch();
        } catch (error) {
            console.error('Erreur lors de l\'initialisation:', error);
            __TURBOPACK__imported__module__$5b$externals$5d2f$sonner__$5b$external$5d$__$28$sonner$2c$__esm_import$29$__["toast"].error('Erreur lors de l\'initialisation des catégories');
        } finally{
            setIsInitializing(false);
        }
    };
    const generateSlug = (name)=>{
        return name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        try {
            const slug = formData.slug || generateSlug(formData.name || '');
            const method = editingId ? 'PUT' : 'POST';
            const url = editingId ? `https://${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$info$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["projectId"]}.supabase.co/functions/v1/make-server-98c6ec1c/categories/${editingId}` : `https://${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$info$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["projectId"]}.supabase.co/functions/v1/make-server-98c6ec1c/categories`;
            const response = await fetch(url, {
                method,
                headers: {
                    'Authorization': `Bearer ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$info$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["publicAnonKey"]}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    ...formData,
                    slug
                })
            });
            const result = await response.json();
            if (!result.success) {
                throw new Error(result.error || 'Erreur lors de la sauvegarde');
            }
            __TURBOPACK__imported__module__$5b$externals$5d2f$sonner__$5b$external$5d$__$28$sonner$2c$__esm_import$29$__["toast"].success(editingId ? 'Catégorie mise à jour' : 'Catégorie créée');
            resetForm();
            refetch();
        } catch (error) {
            console.error('Erreur lors de la sauvegarde:', error);
            __TURBOPACK__imported__module__$5b$externals$5d2f$sonner__$5b$external$5d$__$28$sonner$2c$__esm_import$29$__["toast"].error(error instanceof Error ? error.message : 'Erreur lors de la sauvegarde');
        }
    };
    const handleEdit = (category)=>{
        setEditingId(category.id);
        setFormData(category);
        setIsCreating(false);
    };
    const handleDelete = async (id)=>{
        if (!confirm('Êtes-vous sûr de vouloir supprimer cette catégorie ?')) return;
        try {
            const response = await fetch(`https://${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$info$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["projectId"]}.supabase.co/functions/v1/make-server-98c6ec1c/categories/${id}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$info$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["publicAnonKey"]}`,
                    'Content-Type': 'application/json'
                }
            });
            const result = await response.json();
            if (!result.success) {
                throw new Error(result.error || 'Erreur lors de la suppression');
            }
            __TURBOPACK__imported__module__$5b$externals$5d2f$sonner__$5b$external$5d$__$28$sonner$2c$__esm_import$29$__["toast"].success('Catégorie supprimée');
            refetch();
        } catch (error) {
            console.error('Erreur lors de la suppression:', error);
            __TURBOPACK__imported__module__$5b$externals$5d2f$sonner__$5b$external$5d$__$28$sonner$2c$__esm_import$29$__["toast"].error(error instanceof Error ? error.message : 'Erreur lors de la suppression');
        }
    };
    const resetForm = ()=>{
        setFormData({
            name: '',
            slug: '',
            description: '',
            parent_id: null,
            color: '#B5C233',
            icon_emoji: '📦',
            order_index: 0,
            is_active: true,
            business_unit: 'all',
            images: [],
            thumbnail: ''
        });
        setEditingId(null);
        setIsCreating(false);
    };
    const getBusinessUnitLabel = (unit)=>{
        switch(unit){
            case 'couchage':
                return 'FIMA Couchage';
            case 'design':
                return 'FIMA Design';
            case 'univers-glass':
                return 'Univers Glass';
            case 'all':
                return 'Tous les métiers';
            default:
                return unit;
        }
    };
    const getBusinessUnitColor = (unit)=>{
        switch(unit){
            case 'couchage':
                return '#B5C233';
            case 'design':
                return '#6E6E6E';
            case 'univers-glass':
                return '#0EA5E9';
            default:
                return '#B5C233';
        }
    };
    // Filtrer les catégories selon le métier sélectionné
    const filteredCategories = selectedFilter === 'all' ? categories : categories.filter((cat)=>cat.business_unit === selectedFilter || cat.business_unit === 'all');
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center h-64",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "w-16 h-16 border-4 rounded-full animate-spin mx-auto mb-4",
                        style: {
                            borderColor: '#B5C233',
                            borderTopColor: 'transparent'
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/cms/pages/CMSCategories.tsx",
                        lineNumber: 200,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                        className: "text-gray-600",
                        children: "Chargement..."
                    }, void 0, false, {
                        fileName: "[project]/src/cms/pages/CMSCategories.tsx",
                        lineNumber: 203,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/cms/pages/CMSCategories.tsx",
                lineNumber: 199,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/cms/pages/CMSCategories.tsx",
            lineNumber: 198,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: "p-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "mb-8 flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                                className: "text-3xl text-gray-900 mb-2",
                                children: "Catégories"
                            }, void 0, false, {
                                fileName: "[project]/src/cms/pages/CMSCategories.tsx",
                                lineNumber: 213,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                className: "text-gray-600",
                                children: "Gérez les catégories de produits par métier"
                            }, void 0, false, {
                                fileName: "[project]/src/cms/pages/CMSCategories.tsx",
                                lineNumber: 214,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/cms/pages/CMSCategories.tsx",
                        lineNumber: 212,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                        onClick: ()=>setIsCreating(true),
                        className: "flex items-center space-x-2 px-4 py-2 text-white hover:opacity-90 transition-opacity",
                        style: {
                            backgroundColor: '#B5C233'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                className: "w-5 h-5"
                            }, void 0, false, {
                                fileName: "[project]/src/cms/pages/CMSCategories.tsx",
                                lineNumber: 221,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                children: "Nouvelle catégorie"
                            }, void 0, false, {
                                fileName: "[project]/src/cms/pages/CMSCategories.tsx",
                                lineNumber: 222,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/cms/pages/CMSCategories.tsx",
                        lineNumber: 216,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/cms/pages/CMSCategories.tsx",
                lineNumber: 211,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                        className: "text-sm text-gray-600 mb-3",
                        children: "Filtrer par métier :"
                    }, void 0, false, {
                        fileName: "[project]/src/cms/pages/CMSCategories.tsx",
                        lineNumber: 228,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                onClick: ()=>setSelectedFilter('all'),
                                className: `px-4 py-2 transition-all ${selectedFilter === 'all' ? 'text-white shadow-md' : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'}`,
                                style: selectedFilter === 'all' ? {
                                    backgroundColor: '#B5C233'
                                } : {},
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                    className: "flex items-center space-x-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                            children: "🏢"
                                        }, void 0, false, {
                                            fileName: "[project]/src/cms/pages/CMSCategories.tsx",
                                            lineNumber: 240,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                            children: "Tous les métiers"
                                        }, void 0, false, {
                                            fileName: "[project]/src/cms/pages/CMSCategories.tsx",
                                            lineNumber: 241,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                            className: "ml-1 px-2 py-0.5 text-xs rounded-full bg-white/20",
                                            children: categories.length
                                        }, void 0, false, {
                                            fileName: "[project]/src/cms/pages/CMSCategories.tsx",
                                            lineNumber: 242,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/cms/pages/CMSCategories.tsx",
                                    lineNumber: 239,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/cms/pages/CMSCategories.tsx",
                                lineNumber: 230,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                onClick: ()=>setSelectedFilter('couchage'),
                                className: `px-4 py-2 transition-all ${selectedFilter === 'couchage' ? 'text-white shadow-md' : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'}`,
                                style: selectedFilter === 'couchage' ? {
                                    backgroundColor: '#B5C233'
                                } : {},
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                    className: "flex items-center space-x-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                            children: "🛏️"
                                        }, void 0, false, {
                                            fileName: "[project]/src/cms/pages/CMSCategories.tsx",
                                            lineNumber: 258,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                            children: "FIMA Couchage"
                                        }, void 0, false, {
                                            fileName: "[project]/src/cms/pages/CMSCategories.tsx",
                                            lineNumber: 259,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                            className: "ml-1 px-2 py-0.5 text-xs rounded-full bg-white/20",
                                            children: categories.filter((c)=>c.business_unit === 'couchage' || c.business_unit === 'all').length
                                        }, void 0, false, {
                                            fileName: "[project]/src/cms/pages/CMSCategories.tsx",
                                            lineNumber: 260,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/cms/pages/CMSCategories.tsx",
                                    lineNumber: 257,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/cms/pages/CMSCategories.tsx",
                                lineNumber: 248,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                onClick: ()=>setSelectedFilter('design'),
                                className: `px-4 py-2 transition-all ${selectedFilter === 'design' ? 'text-white shadow-md' : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'}`,
                                style: selectedFilter === 'design' ? {
                                    backgroundColor: '#6E6E6E'
                                } : {},
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                    className: "flex items-center space-x-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                            children: "🪑"
                                        }, void 0, false, {
                                            fileName: "[project]/src/cms/pages/CMSCategories.tsx",
                                            lineNumber: 276,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                            children: "FIMA Design"
                                        }, void 0, false, {
                                            fileName: "[project]/src/cms/pages/CMSCategories.tsx",
                                            lineNumber: 277,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                            className: "ml-1 px-2 py-0.5 text-xs rounded-full bg-white/20",
                                            children: categories.filter((c)=>c.business_unit === 'design' || c.business_unit === 'all').length
                                        }, void 0, false, {
                                            fileName: "[project]/src/cms/pages/CMSCategories.tsx",
                                            lineNumber: 278,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/cms/pages/CMSCategories.tsx",
                                    lineNumber: 275,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/cms/pages/CMSCategories.tsx",
                                lineNumber: 266,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                onClick: ()=>setSelectedFilter('univers-glass'),
                                className: `px-4 py-2 transition-all ${selectedFilter === 'univers-glass' ? 'text-white shadow-md' : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'}`,
                                style: selectedFilter === 'univers-glass' ? {
                                    backgroundColor: '#0EA5E9'
                                } : {},
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                    className: "flex items-center space-x-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                            children: "🪟"
                                        }, void 0, false, {
                                            fileName: "[project]/src/cms/pages/CMSCategories.tsx",
                                            lineNumber: 294,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                            children: "Univers Glass"
                                        }, void 0, false, {
                                            fileName: "[project]/src/cms/pages/CMSCategories.tsx",
                                            lineNumber: 295,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                            className: "ml-1 px-2 py-0.5 text-xs rounded-full bg-white/20",
                                            children: categories.filter((c)=>c.business_unit === 'univers-glass' || c.business_unit === 'all').length
                                        }, void 0, false, {
                                            fileName: "[project]/src/cms/pages/CMSCategories.tsx",
                                            lineNumber: 296,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/cms/pages/CMSCategories.tsx",
                                    lineNumber: 293,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/cms/pages/CMSCategories.tsx",
                                lineNumber: 284,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/cms/pages/CMSCategories.tsx",
                        lineNumber: 229,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/cms/pages/CMSCategories.tsx",
                lineNumber: 227,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "mb-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "bg-blue-50 border border-blue-200 p-4 flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-blue-900 font-medium",
                                    children: "Besoin de catégories par défaut ?"
                                }, void 0, false, {
                                    fileName: "[project]/src/cms/pages/CMSCategories.tsx",
                                    lineNumber: 308,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-blue-700",
                                    children: "Initialise 12 catégories prêtes à l'emploi pour les 3 métiers"
                                }, void 0, false, {
                                    fileName: "[project]/src/cms/pages/CMSCategories.tsx",
                                    lineNumber: 309,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/cms/pages/CMSCategories.tsx",
                            lineNumber: 307,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                            onClick: initializeDefaultCategories,
                            disabled: isInitializing || categories.length > 0,
                            className: "flex items-center space-x-2 px-4 py-2 text-white hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed",
                            style: {
                                backgroundColor: '#0EA5E9'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                    className: `w-4 h-4 ${isInitializing ? 'animate-spin' : ''}`
                                }, void 0, false, {
                                    fileName: "[project]/src/cms/pages/CMSCategories.tsx",
                                    lineNumber: 317,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                    children: isInitializing ? 'Initialisation...' : 'Initialiser catégories'
                                }, void 0, false, {
                                    fileName: "[project]/src/cms/pages/CMSCategories.tsx",
                                    lineNumber: 318,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/cms/pages/CMSCategories.tsx",
                            lineNumber: 311,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/cms/pages/CMSCategories.tsx",
                    lineNumber: 306,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/cms/pages/CMSCategories.tsx",
                lineNumber: 305,
                columnNumber: 7
            }, this),
            (isCreating || editingId) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-black/50 transition-opacity",
                        onClick: resetForm
                    }, void 0, false, {
                        fileName: "[project]/src/cms/pages/CMSCategories.tsx",
                        lineNumber: 327,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "absolute inset-y-0 right-0 w-full max-w-3xl bg-white shadow-xl flex flex-col",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between p-6 border-b",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                        className: "text-xl text-gray-900",
                                        children: editingId ? 'Modifier la catégorie' : 'Nouvelle catégorie'
                                    }, void 0, false, {
                                        fileName: "[project]/src/cms/pages/CMSCategories.tsx",
                                        lineNumber: 336,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                        onClick: resetForm,
                                        className: "text-gray-500 hover:text-gray-700 p-2 hover:bg-gray-100 rounded-full transition-colors",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                            className: "w-5 h-5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/cms/pages/CMSCategories.tsx",
                                            lineNumber: 343,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/cms/pages/CMSCategories.tsx",
                                        lineNumber: 339,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/cms/pages/CMSCategories.tsx",
                                lineNumber: 335,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "flex-1 overflow-y-auto p-6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("form", {
                                    onSubmit: handleSubmit,
                                    className: "space-y-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                                            className: "block text-sm text-gray-700 mb-2",
                                                            children: "Nom *"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/cms/pages/CMSCategories.tsx",
                                                            lineNumber: 352,
                                                            columnNumber: 17
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            required: true,
                                                            value: formData.name,
                                                            onChange: (e)=>{
                                                                const name = e.target.value;
                                                                setFormData({
                                                                    ...formData,
                                                                    name,
                                                                    slug: generateSlug(name)
                                                                });
                                                            },
                                                            className: "w-full px-3 py-2 border border-gray-300 focus:outline-none focus:border-gray-500",
                                                            placeholder: "Ex: Matelas"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/cms/pages/CMSCategories.tsx",
                                                            lineNumber: 355,
                                                            columnNumber: 17
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/cms/pages/CMSCategories.tsx",
                                                    lineNumber: 351,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                                            className: "block text-sm text-gray-700 mb-2",
                                                            children: "Slug (URL)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/cms/pages/CMSCategories.tsx",
                                                            lineNumber: 373,
                                                            columnNumber: 17
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            value: formData.slug,
                                                            onChange: (e)=>setFormData({
                                                                    ...formData,
                                                                    slug: e.target.value
                                                                }),
                                                            className: "w-full px-3 py-2 border border-gray-300 focus:outline-none focus:border-gray-500",
                                                            placeholder: "matelas"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/cms/pages/CMSCategories.tsx",
                                                            lineNumber: 376,
                                                            columnNumber: 17
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/cms/pages/CMSCategories.tsx",
                                                    lineNumber: 372,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    className: "md:col-span-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                                            className: "block text-sm text-gray-700 mb-2",
                                                            children: "Description"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/cms/pages/CMSCategories.tsx",
                                                            lineNumber: 386,
                                                            columnNumber: 17
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("textarea", {
                                                            value: formData.description,
                                                            onChange: (e)=>setFormData({
                                                                    ...formData,
                                                                    description: e.target.value
                                                                }),
                                                            rows: 3,
                                                            className: "w-full px-3 py-2 border border-gray-300 focus:outline-none focus:border-gray-500",
                                                            placeholder: "Description de la catégorie..."
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/cms/pages/CMSCategories.tsx",
                                                            lineNumber: 389,
                                                            columnNumber: 17
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/cms/pages/CMSCategories.tsx",
                                                    lineNumber: 385,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                                            className: "block text-sm text-gray-700 mb-2",
                                                            children: "Métier"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/cms/pages/CMSCategories.tsx",
                                                            lineNumber: 399,
                                                            columnNumber: 17
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("select", {
                                                            value: formData.business_unit,
                                                            onChange: (e)=>setFormData({
                                                                    ...formData,
                                                                    business_unit: e.target.value
                                                                }),
                                                            className: "w-full px-3 py-2 border border-gray-300 focus:outline-none focus:border-gray-500",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                                    value: "all",
                                                                    children: "Tous les métiers"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/cms/pages/CMSCategories.tsx",
                                                                    lineNumber: 407,
                                                                    columnNumber: 19
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                                    value: "couchage",
                                                                    children: "FIMA Couchage"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/cms/pages/CMSCategories.tsx",
                                                                    lineNumber: 408,
                                                                    columnNumber: 19
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                                    value: "design",
                                                                    children: "FIMA Design"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/cms/pages/CMSCategories.tsx",
                                                                    lineNumber: 409,
                                                                    columnNumber: 19
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                                    value: "univers-glass",
                                                                    children: "Univers Glass"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/cms/pages/CMSCategories.tsx",
                                                                    lineNumber: 410,
                                                                    columnNumber: 19
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/cms/pages/CMSCategories.tsx",
                                                            lineNumber: 402,
                                                            columnNumber: 17
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/cms/pages/CMSCategories.tsx",
                                                    lineNumber: 398,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                                            className: "block text-sm text-gray-700 mb-2",
                                                            children: "Catégorie parente"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/cms/pages/CMSCategories.tsx",
                                                            lineNumber: 415,
                                                            columnNumber: 17
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("select", {
                                                            value: formData.parent_id || '',
                                                            onChange: (e)=>setFormData({
                                                                    ...formData,
                                                                    parent_id: e.target.value || null
                                                                }),
                                                            className: "w-full px-3 py-2 border border-gray-300 focus:outline-none focus:border-gray-500",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                                    value: "",
                                                                    children: "Aucune (catégorie racine)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/cms/pages/CMSCategories.tsx",
                                                                    lineNumber: 423,
                                                                    columnNumber: 19
                                                                }, this),
                                                                categories.filter((cat)=>cat.id !== editingId).map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                                        value: cat.id,
                                                                        children: cat.name
                                                                    }, cat.id, false, {
                                                                        fileName: "[project]/src/cms/pages/CMSCategories.tsx",
                                                                        lineNumber: 427,
                                                                        columnNumber: 23
                                                                    }, this))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/cms/pages/CMSCategories.tsx",
                                                            lineNumber: 418,
                                                            columnNumber: 17
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/cms/pages/CMSCategories.tsx",
                                                    lineNumber: 414,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                                            className: "block text-sm text-gray-700 mb-2",
                                                            children: "Icône (Emoji)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/cms/pages/CMSCategories.tsx",
                                                            lineNumber: 433,
                                                            columnNumber: 17
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            value: formData.icon_emoji,
                                                            onChange: (e)=>setFormData({
                                                                    ...formData,
                                                                    icon_emoji: e.target.value
                                                                }),
                                                            className: "w-full px-3 py-2 border border-gray-300 focus:outline-none focus:border-gray-500",
                                                            placeholder: "📦"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/cms/pages/CMSCategories.tsx",
                                                            lineNumber: 436,
                                                            columnNumber: 17
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/cms/pages/CMSCategories.tsx",
                                                    lineNumber: 432,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                                            className: "block text-sm text-gray-700 mb-2",
                                                            children: "Couleur"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/cms/pages/CMSCategories.tsx",
                                                            lineNumber: 446,
                                                            columnNumber: 17
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                                            type: "color",
                                                            value: formData.color,
                                                            onChange: (e)=>setFormData({
                                                                    ...formData,
                                                                    color: e.target.value
                                                                }),
                                                            className: "w-full h-10 px-1 py-1 border border-gray-300"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/cms/pages/CMSCategories.tsx",
                                                            lineNumber: 449,
                                                            columnNumber: 17
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/cms/pages/CMSCategories.tsx",
                                                    lineNumber: 445,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                                            className: "block text-sm text-gray-700 mb-2",
                                                            children: "Ordre d'affichage"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/cms/pages/CMSCategories.tsx",
                                                            lineNumber: 458,
                                                            columnNumber: 17
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                                            type: "number",
                                                            value: formData.order_index,
                                                            onChange: (e)=>setFormData({
                                                                    ...formData,
                                                                    order_index: parseInt(e.target.value)
                                                                }),
                                                            className: "w-full px-3 py-2 border border-gray-300 focus:outline-none focus:border-gray-500"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/cms/pages/CMSCategories.tsx",
                                                            lineNumber: 461,
                                                            columnNumber: 17
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/cms/pages/CMSCategories.tsx",
                                                    lineNumber: 457,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                                        className: "flex items-center space-x-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                                                type: "checkbox",
                                                                checked: formData.is_active,
                                                                onChange: (e)=>setFormData({
                                                                        ...formData,
                                                                        is_active: e.target.checked
                                                                    }),
                                                                className: "w-4 h-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/cms/pages/CMSCategories.tsx",
                                                                lineNumber: 471,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                className: "text-sm text-gray-700",
                                                                children: "Catégorie active"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/cms/pages/CMSCategories.tsx",
                                                                lineNumber: 477,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/cms/pages/CMSCategories.tsx",
                                                        lineNumber: 470,
                                                        columnNumber: 17
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/cms/pages/CMSCategories.tsx",
                                                    lineNumber: 469,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/cms/pages/CMSCategories.tsx",
                                            lineNumber: 350,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "border-t border-gray-200 pt-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                                    className: "text-lg text-gray-900 mb-4 flex items-center space-x-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__["Image"], {
                                                            className: "w-5 h-5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/cms/pages/CMSCategories.tsx",
                                                            lineNumber: 485,
                                                            columnNumber: 17
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                            children: "Images de la catégorie"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/cms/pages/CMSCategories.tsx",
                                                            lineNumber: 486,
                                                            columnNumber: 17
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/cms/pages/CMSCategories.tsx",
                                                    lineNumber: 484,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    className: "space-y-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                                                    className: "block text-sm text-gray-700 mb-2",
                                                                    children: "Image miniature (URL) *"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/cms/pages/CMSCategories.tsx",
                                                                    lineNumber: 492,
                                                                    columnNumber: 19
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                                                    type: "url",
                                                                    value: formData.thumbnail || '',
                                                                    onChange: (e)=>setFormData({
                                                                            ...formData,
                                                                            thumbnail: e.target.value
                                                                        }),
                                                                    className: "w-full px-3 py-2 border border-gray-300 focus:outline-none focus:border-gray-500",
                                                                    placeholder: "https://exemple.com/image.jpg"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/cms/pages/CMSCategories.tsx",
                                                                    lineNumber: 495,
                                                                    columnNumber: 19
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs text-gray-500 mt-1",
                                                                    children: "Cette image sera utilisée comme vignette et image principale de la catégorie"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/cms/pages/CMSCategories.tsx",
                                                                    lineNumber: 502,
                                                                    columnNumber: 19
                                                                }, this),
                                                                formData.thumbnail && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                    className: "mt-2",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("img", {
                                                                        src: formData.thumbnail,
                                                                        alt: "Aperçu",
                                                                        className: "w-32 h-32 object-cover border border-gray-300",
                                                                        onError: (e)=>{
                                                                            e.target.style.display = 'none';
                                                                        }
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/cms/pages/CMSCategories.tsx",
                                                                        lineNumber: 507,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/cms/pages/CMSCategories.tsx",
                                                                    lineNumber: 506,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/cms/pages/CMSCategories.tsx",
                                                            lineNumber: 491,
                                                            columnNumber: 17
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                                                    className: "block text-sm text-gray-700 mb-2",
                                                                    children: "Galerie d'images (URLs séparées par des virgules)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/cms/pages/CMSCategories.tsx",
                                                                    lineNumber: 521,
                                                                    columnNumber: 19
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("textarea", {
                                                                    value: (formData.images || []).join(', '),
                                                                    onChange: (e)=>{
                                                                        const urls = e.target.value.split(',').map((url)=>url.trim()).filter((url)=>url.length > 0);
                                                                        setFormData({
                                                                            ...formData,
                                                                            images: urls
                                                                        });
                                                                    },
                                                                    rows: 3,
                                                                    className: "w-full px-3 py-2 border border-gray-300 focus:outline-none focus:border-gray-500",
                                                                    placeholder: "https://exemple.com/image1.jpg, https://exemple.com/image2.jpg, ..."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/cms/pages/CMSCategories.tsx",
                                                                    lineNumber: 524,
                                                                    columnNumber: 19
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs text-gray-500 mt-1",
                                                                    children: "Ajoutez plusieurs URLs d'images séparées par des virgules pour créer une galerie"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/cms/pages/CMSCategories.tsx",
                                                                    lineNumber: 537,
                                                                    columnNumber: 19
                                                                }, this),
                                                                formData.images && formData.images.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                    className: "mt-3 grid grid-cols-4 gap-2",
                                                                    children: formData.images.map((url, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                            className: "relative",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("img", {
                                                                                    src: url,
                                                                                    alt: `Image ${index + 1}`,
                                                                                    className: "w-full h-24 object-cover border border-gray-300",
                                                                                    onError: (e)=>{
                                                                                        e.target.src = 'https://via.placeholder.com/150?text=Erreur';
                                                                                    }
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/cms/pages/CMSCategories.tsx",
                                                                                    lineNumber: 544,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                                                    type: "button",
                                                                                    onClick: ()=>{
                                                                                        const newImages = formData.images?.filter((_, i)=>i !== index) || [];
                                                                                        setFormData({
                                                                                            ...formData,
                                                                                            images: newImages
                                                                                        });
                                                                                    },
                                                                                    className: "absolute top-1 right-1 bg-red-500 text-white p-1 hover:bg-red-600",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                                                        className: "w-3 h-3"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/cms/pages/CMSCategories.tsx",
                                                                                        lineNumber: 560,
                                                                                        columnNumber: 29
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/cms/pages/CMSCategories.tsx",
                                                                                    lineNumber: 552,
                                                                                    columnNumber: 27
                                                                                }, this)
                                                                            ]
                                                                        }, index, true, {
                                                                            fileName: "[project]/src/cms/pages/CMSCategories.tsx",
                                                                            lineNumber: 543,
                                                                            columnNumber: 25
                                                                        }, this))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/cms/pages/CMSCategories.tsx",
                                                                    lineNumber: 541,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/cms/pages/CMSCategories.tsx",
                                                            lineNumber: 520,
                                                            columnNumber: 17
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                            className: "bg-blue-50 border border-blue-200 p-4",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                                className: "text-xs text-blue-900",
                                                                children: [
                                                                    "💡 ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("strong", {
                                                                        children: "Astuce :"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/cms/pages/CMSCategories.tsx",
                                                                        lineNumber: 570,
                                                                        columnNumber: 24
                                                                    }, this),
                                                                    " Vous pouvez télécharger vos images sur des services comme",
                                                                    ' ',
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                                                        href: "https://imgur.com",
                                                                        target: "_blank",
                                                                        rel: "noopener noreferrer",
                                                                        className: "underline",
                                                                        children: "Imgur"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/cms/pages/CMSCategories.tsx",
                                                                        lineNumber: 571,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    ",",
                                                                    ' ',
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                                                        href: "https://imgbb.com",
                                                                        target: "_blank",
                                                                        rel: "noopener noreferrer",
                                                                        className: "underline",
                                                                        children: "ImgBB"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/cms/pages/CMSCategories.tsx",
                                                                        lineNumber: 572,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    " ou",
                                                                    ' ',
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                                                        href: "https://cloudinary.com",
                                                                        target: "_blank",
                                                                        rel: "noopener noreferrer",
                                                                        className: "underline",
                                                                        children: "Cloudinary"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/cms/pages/CMSCategories.tsx",
                                                                        lineNumber: 573,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    ",",
                                                                    ' ',
                                                                    "puis coller les URLs ici. Pour de meilleures performances, utilisez des images optimisées (JPG, WebP) d'environ 1200x800px."
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/cms/pages/CMSCategories.tsx",
                                                                lineNumber: 569,
                                                                columnNumber: 19
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/cms/pages/CMSCategories.tsx",
                                                            lineNumber: 568,
                                                            columnNumber: 17
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/cms/pages/CMSCategories.tsx",
                                                    lineNumber: 489,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/cms/pages/CMSCategories.tsx",
                                            lineNumber: 483,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "flex items-center space-x-4 pt-4 border-t",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                    type: "submit",
                                                    className: "flex items-center space-x-2 px-6 py-2 text-white hover:opacity-90 transition-opacity",
                                                    style: {
                                                        backgroundColor: '#B5C233'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"], {
                                                            className: "w-4 h-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/cms/pages/CMSCategories.tsx",
                                                            lineNumber: 586,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                            children: "Enregistrer"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/cms/pages/CMSCategories.tsx",
                                                            lineNumber: 587,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/cms/pages/CMSCategories.tsx",
                                                    lineNumber: 581,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: resetForm,
                                                    className: "px-6 py-2 border border-gray-300 text-gray-700 hover:bg-gray-50",
                                                    children: "Annuler"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/cms/pages/CMSCategories.tsx",
                                                    lineNumber: 589,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/cms/pages/CMSCategories.tsx",
                                            lineNumber: 580,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/cms/pages/CMSCategories.tsx",
                                    lineNumber: 349,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/cms/pages/CMSCategories.tsx",
                                lineNumber: 348,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/cms/pages/CMSCategories.tsx",
                        lineNumber: 333,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/cms/pages/CMSCategories.tsx",
                lineNumber: 325,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "bg-white border border-gray-200",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "overflow-x-auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("table", {
                        className: "w-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("thead", {
                                className: "bg-gray-50 border-b border-gray-200",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("th", {
                                            className: "px-6 py-3 text-left text-xs uppercase tracking-wider text-gray-500",
                                            children: "Catégorie"
                                        }, void 0, false, {
                                            fileName: "[project]/src/cms/pages/CMSCategories.tsx",
                                            lineNumber: 609,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("th", {
                                            className: "px-6 py-3 text-left text-xs uppercase tracking-wider text-gray-500",
                                            children: "Métier"
                                        }, void 0, false, {
                                            fileName: "[project]/src/cms/pages/CMSCategories.tsx",
                                            lineNumber: 612,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("th", {
                                            className: "px-6 py-3 text-left text-xs uppercase tracking-wider text-gray-500",
                                            children: "Slug"
                                        }, void 0, false, {
                                            fileName: "[project]/src/cms/pages/CMSCategories.tsx",
                                            lineNumber: 615,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("th", {
                                            className: "px-6 py-3 text-left text-xs uppercase tracking-wider text-gray-500",
                                            children: "Ordre"
                                        }, void 0, false, {
                                            fileName: "[project]/src/cms/pages/CMSCategories.tsx",
                                            lineNumber: 618,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("th", {
                                            className: "px-6 py-3 text-left text-xs uppercase tracking-wider text-gray-500",
                                            children: "Statut"
                                        }, void 0, false, {
                                            fileName: "[project]/src/cms/pages/CMSCategories.tsx",
                                            lineNumber: 621,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("th", {
                                            className: "px-6 py-3 text-right text-xs uppercase tracking-wider text-gray-500",
                                            children: "Actions"
                                        }, void 0, false, {
                                            fileName: "[project]/src/cms/pages/CMSCategories.tsx",
                                            lineNumber: 624,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/cms/pages/CMSCategories.tsx",
                                    lineNumber: 608,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/cms/pages/CMSCategories.tsx",
                                lineNumber: 607,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("tbody", {
                                className: "divide-y divide-gray-200",
                                children: filteredCategories.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("tr", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("td", {
                                        colSpan: 6,
                                        className: "px-6 py-8 text-center text-gray-500",
                                        children: selectedFilter === 'all' ? 'Aucune catégorie. Créez-en une pour commencer.' : `Aucune catégorie pour ${getBusinessUnitLabel(selectedFilter)}.`
                                    }, void 0, false, {
                                        fileName: "[project]/src/cms/pages/CMSCategories.tsx",
                                        lineNumber: 632,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/cms/pages/CMSCategories.tsx",
                                    lineNumber: 631,
                                    columnNumber: 17
                                }, this) : filteredCategories.sort((a, b)=>a.order_index - b.order_index).map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("tr", {
                                        className: "hover:bg-gray-50",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("td", {
                                                className: "px-6 py-4",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center space-x-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                            className: "text-2xl",
                                                            children: category.icon_emoji
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/cms/pages/CMSCategories.tsx",
                                                            lineNumber: 646,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                    className: "text-sm text-gray-900",
                                                                    children: category.name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/cms/pages/CMSCategories.tsx",
                                                                    lineNumber: 648,
                                                                    columnNumber: 27
                                                                }, this),
                                                                category.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                    className: "text-xs text-gray-500",
                                                                    children: category.description
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/cms/pages/CMSCategories.tsx",
                                                                    lineNumber: 650,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/cms/pages/CMSCategories.tsx",
                                                            lineNumber: 647,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/cms/pages/CMSCategories.tsx",
                                                    lineNumber: 645,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/cms/pages/CMSCategories.tsx",
                                                lineNumber: 644,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("td", {
                                                className: "px-6 py-4 whitespace-nowrap text-sm text-gray-600",
                                                children: getBusinessUnitLabel(category.business_unit)
                                            }, void 0, false, {
                                                fileName: "[project]/src/cms/pages/CMSCategories.tsx",
                                                lineNumber: 655,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("td", {
                                                className: "px-6 py-4 whitespace-nowrap",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("code", {
                                                    className: "text-xs bg-gray-100 px-2 py-1 text-gray-800",
                                                    children: [
                                                        "/",
                                                        category.slug
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/cms/pages/CMSCategories.tsx",
                                                    lineNumber: 659,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/cms/pages/CMSCategories.tsx",
                                                lineNumber: 658,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("td", {
                                                className: "px-6 py-4 whitespace-nowrap text-sm text-gray-900",
                                                children: category.order_index
                                            }, void 0, false, {
                                                fileName: "[project]/src/cms/pages/CMSCategories.tsx",
                                                lineNumber: 663,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("td", {
                                                className: "px-6 py-4 whitespace-nowrap",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                    className: `inline-flex px-2 py-1 text-xs ${category.is_active ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`,
                                                    children: category.is_active ? 'Active' : 'Inactive'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/cms/pages/CMSCategories.tsx",
                                                    lineNumber: 667,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/cms/pages/CMSCategories.tsx",
                                                lineNumber: 666,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("td", {
                                                className: "px-6 py-4 whitespace-nowrap text-right text-sm space-x-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>handleEdit(category),
                                                        className: "text-blue-600 hover:text-blue-800 inline-flex items-center",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit$3e$__["Edit"], {
                                                            className: "w-4 h-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/cms/pages/CMSCategories.tsx",
                                                            lineNumber: 682,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/cms/pages/CMSCategories.tsx",
                                                        lineNumber: 678,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>handleDelete(category.id),
                                                        className: "text-red-600 hover:text-red-800 inline-flex items-center ml-3",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                            className: "w-4 h-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/cms/pages/CMSCategories.tsx",
                                                            lineNumber: 688,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/cms/pages/CMSCategories.tsx",
                                                        lineNumber: 684,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/cms/pages/CMSCategories.tsx",
                                                lineNumber: 677,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, category.id, true, {
                                        fileName: "[project]/src/cms/pages/CMSCategories.tsx",
                                        lineNumber: 643,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/cms/pages/CMSCategories.tsx",
                                lineNumber: 629,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/cms/pages/CMSCategories.tsx",
                        lineNumber: 606,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/cms/pages/CMSCategories.tsx",
                    lineNumber: 605,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/cms/pages/CMSCategories.tsx",
                lineNumber: 604,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/cms/pages/CMSCategories.tsx",
        lineNumber: 210,
        columnNumber: 5
    }, this);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=src_cms_pages_CMSCategories_tsx_03dff6a1._.js.map