(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/hooks/useProjects.ts [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useProject",
    ()=>useProject,
    "useProjectMutation",
    ()=>useProjectMutation,
    "useProjects",
    ()=>useProjects
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$info$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/supabase/info.tsx [client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
;
;
const API_BASE_URL = `https://${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$info$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["projectId"]}.supabase.co/functions/v1/make-server-98c6ec1c`;
const useProjects = (category, featuredOnly = false, limit)=>{
    _s();
    const [projects, setProjects] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useProjects.useEffect": ()=>{
            const fetchProjects = {
                "useProjects.useEffect.fetchProjects": async ()=>{
                    try {
                        setLoading(true);
                        setError(null);
                        const url = new URL(`${API_BASE_URL}/projects`);
                        // Ajouter les paramètres de filtrage
                        if (category && category !== 'tous') {
                            url.searchParams.append('category', category);
                        }
                        if (featuredOnly) {
                            url.searchParams.append('featured', 'true');
                        }
                        if (limit) {
                            url.searchParams.append('limit', limit.toString());
                        }
                        const response = await fetch(url.toString(), {
                            method: 'GET',
                            headers: {
                                'Authorization': `Bearer ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$info$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["publicAnonKey"]}`,
                                'Content-Type': 'application/json'
                            }
                        });
                        if (!response.ok) {
                            throw new Error(`Erreur lors du chargement des projets: ${response.statusText}`);
                        }
                        const result = await response.json();
                        if (!result.success) {
                            throw new Error(result.error || 'Erreur lors du chargement des projets');
                        }
                        let projectsData = result.data || [];
                        // Filtrer les projets publiés uniquement
                        projectsData = projectsData.filter({
                            "useProjects.useEffect.fetchProjects": (p)=>p.published
                        }["useProjects.useEffect.fetchProjects"]);
                        // Trier par featured first, puis par année décroissante
                        projectsData.sort({
                            "useProjects.useEffect.fetchProjects": (a, b)=>{
                                // Featured first
                                if (a.featured && !b.featured) return -1;
                                if (!a.featured && b.featured) return 1;
                                // Then by year (descending)
                                return parseInt(b.year) - parseInt(a.year);
                            }
                        }["useProjects.useEffect.fetchProjects"]);
                        setProjects(projectsData);
                    } catch (err) {
                        console.error('Error fetching projects:', err);
                        setError(err instanceof Error ? err.message : 'Erreur inconnue');
                        setProjects([]);
                    } finally{
                        setLoading(false);
                    }
                }
            }["useProjects.useEffect.fetchProjects"];
            fetchProjects();
        }
    }["useProjects.useEffect"], [
        category,
        featuredOnly,
        limit
    ]);
    return {
        projects,
        loading,
        error
    };
};
_s(useProjects, "D01YWZOqXtPgB8Jf7trLNzFYnAg=");
const useProject = (slug)=>{
    _s1();
    const [project, setProject] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useProject.useEffect": ()=>{
            const fetchProject = {
                "useProject.useEffect.fetchProject": async ()=>{
                    try {
                        setLoading(true);
                        setError(null);
                        const response = await fetch(`${API_BASE_URL}/projects/${slug}`, {
                            method: 'GET',
                            headers: {
                                'Authorization': `Bearer ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$info$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["publicAnonKey"]}`,
                                'Content-Type': 'application/json'
                            }
                        });
                        if (!response.ok) {
                            throw new Error(`Erreur lors du chargement du projet: ${response.statusText}`);
                        }
                        const result = await response.json();
                        if (!result.success) {
                            throw new Error(result.error || 'Projet non trouvé');
                        }
                        setProject(result.data);
                    } catch (err) {
                        console.error('Error fetching project:', err);
                        setError(err instanceof Error ? err.message : 'Erreur inconnue');
                        setProject(null);
                    } finally{
                        setLoading(false);
                    }
                }
            }["useProject.useEffect.fetchProject"];
            if (slug) {
                fetchProject();
            }
        }
    }["useProject.useEffect"], [
        slug
    ]);
    return {
        project,
        loading,
        error
    };
};
_s1(useProject, "abtfuQwl+lYmcs52cirIR9Q50qo=");
const useProjectMutation = ()=>{
    _s2();
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const createProject = async (projectData)=>{
        try {
            setLoading(true);
            setError(null);
            const response = await fetch(`${API_BASE_URL}/projects`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$info$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["publicAnonKey"]}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(projectData)
            });
            if (!response.ok) {
                throw new Error(`Erreur lors de la création du projet: ${response.statusText}`);
            }
            const result = await response.json();
            if (!result.success) {
                throw new Error(result.error || 'Erreur lors de la création du projet');
            }
            return {
                success: true,
                data: result.data
            };
        } catch (err) {
            console.error('Error creating project:', err);
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
    const updateProject = async (id, projectData)=>{
        try {
            setLoading(true);
            setError(null);
            const response = await fetch(`${API_BASE_URL}/projects/${id}`, {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$info$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["publicAnonKey"]}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(projectData)
            });
            if (!response.ok) {
                throw new Error(`Erreur lors de la mise à jour du projet: ${response.statusText}`);
            }
            const result = await response.json();
            if (!result.success) {
                throw new Error(result.error || 'Erreur lors de la mise à jour du projet');
            }
            return {
                success: true,
                data: result.data
            };
        } catch (err) {
            console.error('Error updating project:', err);
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
    const deleteProject = async (id)=>{
        try {
            setLoading(true);
            setError(null);
            const response = await fetch(`${API_BASE_URL}/projects/${id}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$info$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["publicAnonKey"]}`,
                    'Content-Type': 'application/json'
                }
            });
            if (!response.ok) {
                throw new Error(`Erreur lors de la suppression du projet: ${response.statusText}`);
            }
            const result = await response.json();
            if (!result.success) {
                throw new Error(result.error || 'Erreur lors de la suppression du projet');
            }
            return {
                success: true
            };
        } catch (err) {
            console.error('Error deleting project:', err);
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
        createProject,
        updateProject,
        deleteProject,
        loading,
        error
    };
};
_s2(useProjectMutation, "Iz3ozxQ+abMaAIcGIvU8cKUcBeo=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/AllProjectsPage.tsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AllProjectsPage",
    ()=>AllProjectsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$grid$2d$3x3$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/grid-3x3.js [client] (ecmascript) <export default as Grid>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__List$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/list.js [client] (ecmascript) <export default as List>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/building-2.js [client] (ecmascript) <export default as Building2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.js [client] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/award.js [client] (ecmascript) <export default as Award>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useProjects$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useProjects.ts [client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
function AllProjectsPage({ onProjectClick, onNavigate, onBack }) {
    _s();
    const [activeCategory, setActiveCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])("tous");
    const [viewMode, setViewMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])("grid");
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])("");
    // Charger les projets depuis Supabase
    const { projects: allProjectsFromDB, loading, error } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useProjects$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["useProjects"])();
    // Calculer les compteurs par catégorie
    const projectCategories = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AllProjectsPage.useMemo[projectCategories]": ()=>{
            const projects = allProjectsFromDB || [];
            return [
                {
                    key: "tous",
                    name: "Tous les projets",
                    count: projects.length
                },
                {
                    key: "residential",
                    name: "Résidentiel",
                    count: projects.filter({
                        "AllProjectsPage.useMemo[projectCategories]": (p)=>p.category === "residential"
                    }["AllProjectsPage.useMemo[projectCategories]"]).length,
                    icon: "🏘️"
                },
                {
                    key: "commercial",
                    name: "Commercial",
                    count: projects.filter({
                        "AllProjectsPage.useMemo[projectCategories]": (p)=>p.category === "commercial"
                    }["AllProjectsPage.useMemo[projectCategories]"]).length,
                    icon: "🏢"
                },
                {
                    key: "hospitality",
                    name: "Hôtellerie",
                    count: projects.filter({
                        "AllProjectsPage.useMemo[projectCategories]": (p)=>p.category === "hospitality"
                    }["AllProjectsPage.useMemo[projectCategories]"]).length,
                    icon: "🏨"
                },
                {
                    key: "institutional",
                    name: "Institutionnel",
                    count: projects.filter({
                        "AllProjectsPage.useMemo[projectCategories]": (p)=>p.category === "institutional"
                    }["AllProjectsPage.useMemo[projectCategories]"]).length,
                    icon: "🏛️"
                }
            ];
        }
    }["AllProjectsPage.useMemo[projectCategories]"], [
        allProjectsFromDB
    ]);
    // Mapper les projets au format attendu (compatible avec l'ancien format)
    const allProjects = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AllProjectsPage.useMemo[allProjects]": ()=>{
            const projects = allProjectsFromDB || [];
            return projects.map({
                "AllProjectsPage.useMemo[allProjects]": (project)=>({
                        id: project.id,
                        title: project.title,
                        category: project.category,
                        categoryName: project.categoryName,
                        location: project.location,
                        year: project.year,
                        client: project.client,
                        description: project.description,
                        image: project.featuredImage || (project.images && project.images.length > 0 ? project.images[0] : ""),
                        budget: project.budget,
                        surface: project.surface,
                        businessUnits: project.businessUnits || [],
                        featured: project.featured,
                        awards: project.awards || [],
                        tags: project.tags || []
                    })
            }["AllProjectsPage.useMemo[allProjects]"]);
        }
    }["AllProjectsPage.useMemo[allProjects]"], [
        allProjectsFromDB
    ]);
    const filteredProjects = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AllProjectsPage.useMemo[filteredProjects]": ()=>{
            return allProjects.filter({
                "AllProjectsPage.useMemo[filteredProjects]": (project)=>{
                    const matchesCategory = activeCategory === "tous" || project.category === activeCategory;
                    const matchesSearch = !searchQuery || project.title.toLowerCase().includes(searchQuery.toLowerCase()) || project.location.toLowerCase().includes(searchQuery.toLowerCase()) || project.client.toLowerCase().includes(searchQuery.toLowerCase());
                    return matchesCategory && matchesSearch;
                }
            }["AllProjectsPage.useMemo[filteredProjects]"]);
        }
    }["AllProjectsPage.useMemo[filteredProjects]"], [
        allProjects,
        activeCategory,
        searchQuery
    ]);
    // Calculer les statistiques depuis les données réelles
    const stats = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AllProjectsPage.useMemo[stats]": ()=>{
            const totalAwards = allProjects.reduce({
                "AllProjectsPage.useMemo[stats].totalAwards": (sum, p)=>sum + (p.awards?.length || 0)
            }["AllProjectsPage.useMemo[stats].totalAwards"], 0);
            return {
                totalProjects: allProjects.length,
                totalBudget: "10.5Mds FCFA",
                totalSurface: "55,250 m²",
                awards: totalAwards
            };
        }
    }["AllProjectsPage.useMemo[stats]"], [
        allProjects
    ]);
    // État de chargement
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex items-center justify-center bg-gray-50",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-16 h-16 border-4 rounded-full animate-spin mx-auto mb-4",
                        style: {
                            borderColor: "#B5C233",
                            borderTopColor: "transparent"
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/AllProjectsPage.tsx",
                        lineNumber: 152,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-600",
                        children: "Chargement des projets..."
                    }, void 0, false, {
                        fileName: "[project]/src/components/AllProjectsPage.tsx",
                        lineNumber: 159,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/AllProjectsPage.tsx",
                lineNumber: 151,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/AllProjectsPage.tsx",
            lineNumber: 150,
            columnNumber: 7
        }, this);
    }
    // État d'erreur
    if (error) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex items-center justify-center bg-gray-50",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center max-w-md mx-auto p-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-red-600 text-2xl",
                            children: "⚠"
                        }, void 0, false, {
                            fileName: "[project]/src/components/AllProjectsPage.tsx",
                            lineNumber: 173,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/AllProjectsPage.tsx",
                        lineNumber: 172,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-xl mb-2",
                        style: {
                            fontFamily: "Montserrat"
                        },
                        children: "Erreur"
                    }, void 0, false, {
                        fileName: "[project]/src/components/AllProjectsPage.tsx",
                        lineNumber: 175,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-600 mb-4",
                        children: error
                    }, void 0, false, {
                        fileName: "[project]/src/components/AllProjectsPage.tsx",
                        lineNumber: 181,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onBack,
                        className: "px-6 py-2 rounded-lg hover:opacity-90 transition-colors",
                        style: {
                            backgroundColor: "#B5C233",
                            color: "#6E6E6E"
                        },
                        children: "Accueil"
                    }, void 0, false, {
                        fileName: "[project]/src/components/AllProjectsPage.tsx",
                        lineNumber: 182,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/AllProjectsPage.tsx",
                lineNumber: 171,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/AllProjectsPage.tsx",
            lineNumber: 170,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gray-50",
        children: [
            allProjects.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-b-2 text-center py-2 px-4",
                style: {
                    backgroundColor: "rgba(181, 194, 51, 0.1)",
                    borderColor: "#B5C233"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-semibold",
                            style: {
                                color: "#B5C233"
                            },
                            children: "✅ Projets chargés dynamiquement depuis Supabase"
                        }, void 0, false, {
                            fileName: "[project]/src/components/AllProjectsPage.tsx",
                            lineNumber: 209,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-green-700 ml-2",
                            children: [
                                "(",
                                allProjects.length,
                                " total,",
                                " ",
                                filteredProjects.length,
                                " affichés)"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/AllProjectsPage.tsx",
                            lineNumber: 215,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/AllProjectsPage.tsx",
                    lineNumber: 208,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/AllProjectsPage.tsx",
                lineNumber: 201,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-gray-100 border-b border-gray-200",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto px-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center py-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onBack,
                                className: "flex items-center gap-2 hover:bg-gray-100 p-2 rounded-lg transition-colors mr-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AllProjectsPage.tsx",
                                        lineNumber: 231,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Accueil"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AllProjectsPage.tsx",
                                        lineNumber: 232,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/AllProjectsPage.tsx",
                                lineNumber: 227,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-12 h-12 rounded-full flex items-center justify-center text-white",
                                        style: {
                                            background: "linear-gradient(to right, #0EA5E9, #0c93d1)"
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"], {
                                            className: "w-6 h-6"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AllProjectsPage.tsx",
                                            lineNumber: 243,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AllProjectsPage.tsx",
                                        lineNumber: 236,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                className: "text-2xl",
                                                style: {
                                                    fontFamily: "Montserrat",
                                                    color: "#000000"
                                                },
                                                children: "Nos Projets & Réalisations"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/AllProjectsPage.tsx",
                                                lineNumber: 246,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                style: {
                                                    color: "#6E6E6E"
                                                },
                                                children: "Portfolio complet • 40 ans d'expertise"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/AllProjectsPage.tsx",
                                                lineNumber: 255,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/AllProjectsPage.tsx",
                                        lineNumber: 245,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/AllProjectsPage.tsx",
                                lineNumber: 235,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/AllProjectsPage.tsx",
                        lineNumber: 226,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/AllProjectsPage.tsx",
                    lineNumber: 225,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/AllProjectsPage.tsx",
                lineNumber: 224,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "py-8",
                style: {
                    background: "#0EA5E9"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto px-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-4xl mx-auto text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl mb-4",
                                style: {
                                    fontFamily: "Montserrat",
                                    color: "#FFF"
                                },
                                children: "Plus de trois décennies d'excellence"
                            }, void 0, false, {
                                fileName: "[project]/src/components/AllProjectsPage.tsx",
                                lineNumber: 273,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mb-6 max-w-2xl mx-auto",
                                style: {
                                    color: "#FFF"
                                },
                                children: "Découvrez nos réalisations marquantes à travers la Côte d'Ivoire."
                            }, void 0, false, {
                                fileName: "[project]/src/components/AllProjectsPage.tsx",
                                lineNumber: 282,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/AllProjectsPage.tsx",
                        lineNumber: 272,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/AllProjectsPage.tsx",
                    lineNumber: 271,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/AllProjectsPage.tsx",
                lineNumber: 265,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white py-12",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto px-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-4xl mx-auto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-3xl mb-2 text-center uppercase",
                                style: {
                                    fontFamily: "Montserrat",
                                    color: "#6E6E6E"
                                },
                                children: "NOS PROJETS & RÉALISATIONS"
                            }, void 0, false, {
                                fileName: "[project]/src/components/AllProjectsPage.tsx",
                                lineNumber: 342,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-2xl mb-6 text-center",
                                style: {
                                    fontFamily: "Montserrat",
                                    color: "#0EA5E9"
                                },
                                children: "Des œuvres qui parlent d'elles-mêmes"
                            }, void 0, false, {
                                fileName: "[project]/src/components/AllProjectsPage.tsx",
                                lineNumber: 352,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4 mb-8",
                                style: {
                                    color: "#6E6E6E"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "Depuis sa création, le Groupe FIMA a mené à bien plus de 500 projets à travers la Côte d'Ivoire et dans plusieurs pays d'Afrique de l'Ouest."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AllProjectsPage.tsx",
                                        lineNumber: 366,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "Nos réalisations reflètent la diversité et la maîtrise de nos métiers : des chambres d'hôtel luxueuses aux sièges d'entreprises, en passant par des résidences privées, établissements scolaires ou lieux de culte."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AllProjectsPage.tsx",
                                        lineNumber: 371,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "Chaque projet est une collaboration étroite entre nos équipes techniques, nos designers et nos clients, afin de garantir un résultat à la hauteur des attentes les plus élevées."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AllProjectsPage.tsx",
                                        lineNumber: 378,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/AllProjectsPage.tsx",
                                lineNumber: 362,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-xl mb-4",
                                        style: {
                                            fontFamily: "Montserrat",
                                            color: "#6E6E6E"
                                        },
                                        children: "Quelques exemples de réalisations :"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AllProjectsPage.tsx",
                                        lineNumber: 387,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "space-y-3",
                                        style: {
                                            color: "#6E6E6E"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "flex items-start gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[#B5C233] mt-1",
                                                        children: "✓"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/AllProjectsPage.tsx",
                                                        lineNumber: 401,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Aménagements intérieurs pour résidences de standing et villas modernes"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/AllProjectsPage.tsx",
                                                        lineNumber: 402,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/AllProjectsPage.tsx",
                                                lineNumber: 400,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "flex items-start gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[#B5C233] mt-1",
                                                        children: "✓"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/AllProjectsPage.tsx",
                                                        lineNumber: 408,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Fabrication et pose de menuiserie et mobilier sur mesure pour bureaux et hôtels"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/AllProjectsPage.tsx",
                                                        lineNumber: 409,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/AllProjectsPage.tsx",
                                                lineNumber: 407,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "flex items-start gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[#B5C233] mt-1",
                                                        children: "✓"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/AllProjectsPage.tsx",
                                                        lineNumber: 415,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Installation de vitrines, cloisons et façades en aluminium et verre trempé"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/AllProjectsPage.tsx",
                                                        lineNumber: 416,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/AllProjectsPage.tsx",
                                                lineNumber: 414,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "flex items-start gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[#B5C233] mt-1",
                                                        children: "✓"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/AllProjectsPage.tsx",
                                                        lineNumber: 422,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Fourniture et installation de literie complète pour structures hôtelières et institutions publiques"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/AllProjectsPage.tsx",
                                                        lineNumber: 423,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/AllProjectsPage.tsx",
                                                lineNumber: 421,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/AllProjectsPage.tsx",
                                        lineNumber: 396,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/AllProjectsPage.tsx",
                                lineNumber: 386,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-center italic",
                                style: {
                                    color: "#6E6E6E"
                                },
                                children: "Nos réalisations sont notre meilleure carte de visite : elles témoignent d'un engagement constant pour la perfection et la satisfaction totale du client."
                            }, void 0, false, {
                                fileName: "[project]/src/components/AllProjectsPage.tsx",
                                lineNumber: 432,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/AllProjectsPage.tsx",
                        lineNumber: 341,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/AllProjectsPage.tsx",
                    lineNumber: 340,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/AllProjectsPage.tsx",
                lineNumber: 339,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white border-b border-gray-200 sticky top-20 z-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto px-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "py-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative max-w-xl mx-auto mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                        className: "absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AllProjectsPage.tsx",
                                        lineNumber: 451,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        placeholder: "Rechercher un projet...",
                                        value: searchQuery,
                                        onChange: (e)=>setSearchQuery(e.target.value),
                                        className: "w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AllProjectsPage.tsx",
                                        lineNumber: 452,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/AllProjectsPage.tsx",
                                lineNumber: 450,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap justify-center gap-2 mb-4",
                                children: projectCategories.map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setActiveCategory(category.key),
                                        className: `flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === category.key ? "text-white shadow-lg" : "bg-gray-100 text-gray-700"}`,
                                        style: activeCategory === category.key ? {
                                            backgroundColor: "#0EA5E9"
                                        } : {},
                                        onMouseEnter: (e)=>{
                                            if (activeCategory !== category.key) {
                                                e.currentTarget.style.backgroundColor = "rgba(14, 165, 233, 0.1)";
                                            }
                                        },
                                        onMouseLeave: (e)=>{
                                            if (activeCategory !== category.key) {
                                                e.currentTarget.style.backgroundColor = "#f3f4f6";
                                            }
                                        },
                                        children: [
                                            category.icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: category.icon
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/AllProjectsPage.tsx",
                                                lineNumber: 493,
                                                columnNumber: 21
                                            }, this),
                                            category.name,
                                            " (",
                                            category.count,
                                            ")"
                                        ]
                                    }, category.key, true, {
                                        fileName: "[project]/src/components/AllProjectsPage.tsx",
                                        lineNumber: 464,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/AllProjectsPage.tsx",
                                lineNumber: 462,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: "#6E6E6E"
                                        },
                                        children: [
                                            filteredProjects.length,
                                            " projet",
                                            filteredProjects.length > 1 ? "s" : ""
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/AllProjectsPage.tsx",
                                        lineNumber: 502,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex border border-gray-300 rounded-lg overflow-hidden",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setViewMode("grid"),
                                                className: `p-2 transition-colors ${viewMode === "grid" ? "text-white" : "bg-white text-gray-600 hover:bg-gray-50"}`,
                                                style: viewMode === "grid" ? {
                                                    backgroundColor: "#0EA5E9"
                                                } : {},
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$grid$2d$3x3$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid$3e$__["Grid"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AllProjectsPage.tsx",
                                                    lineNumber: 522,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/AllProjectsPage.tsx",
                                                lineNumber: 509,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setViewMode("list"),
                                                className: `p-2 transition-colors ${viewMode === "list" ? "text-white" : "bg-white text-gray-600 hover:bg-gray-50"}`,
                                                style: viewMode === "list" ? {
                                                    backgroundColor: "#0EA5E9"
                                                } : {},
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__List$3e$__["List"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AllProjectsPage.tsx",
                                                    lineNumber: 537,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/AllProjectsPage.tsx",
                                                lineNumber: 524,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/AllProjectsPage.tsx",
                                        lineNumber: 508,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/AllProjectsPage.tsx",
                                lineNumber: 501,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/AllProjectsPage.tsx",
                        lineNumber: 448,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/AllProjectsPage.tsx",
                    lineNumber: 447,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/AllProjectsPage.tsx",
                lineNumber: 446,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-4 py-6",
                children: [
                    allProjects.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center py-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4",
                                style: {
                                    backgroundColor: "rgba(14, 165, 233, 0.1)"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"], {
                                    className: "w-8 h-8",
                                    style: {
                                        color: "#0EA5E9"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/AllProjectsPage.tsx",
                                    lineNumber: 556,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/AllProjectsPage.tsx",
                                lineNumber: 550,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-xl mb-2",
                                style: {
                                    fontFamily: "Montserrat"
                                },
                                children: "Aucun projet disponible"
                            }, void 0, false, {
                                fileName: "[project]/src/components/AllProjectsPage.tsx",
                                lineNumber: 561,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-600 mb-4",
                                children: "Les projets n'ont pas encore été initialisés dans la base de données."
                            }, void 0, false, {
                                fileName: "[project]/src/components/AllProjectsPage.tsx",
                                lineNumber: 567,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/AllProjectsPage.tsx",
                        lineNumber: 549,
                        columnNumber: 11
                    }, this),
                    allProjects.length > 0 && filteredProjects.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center py-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                    className: "w-8 h-8 text-gray-400"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/AllProjectsPage.tsx",
                                    lineNumber: 582,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/AllProjectsPage.tsx",
                                lineNumber: 581,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-xl mb-2",
                                style: {
                                    fontFamily: "Montserrat"
                                },
                                children: "Aucun projet trouvé"
                            }, void 0, false, {
                                fileName: "[project]/src/components/AllProjectsPage.tsx",
                                lineNumber: 584,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-600 mb-6",
                                children: "Essayez de modifier vos filtres ou votre recherche."
                            }, void 0, false, {
                                fileName: "[project]/src/components/AllProjectsPage.tsx",
                                lineNumber: 590,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    setActiveCategory("tous");
                                    setSearchQuery("");
                                },
                                className: "px-6 py-3 rounded-lg hover:opacity-90 transition-colors",
                                style: {
                                    backgroundColor: "#B5C233",
                                    color: "#6E6E6E"
                                },
                                children: "Réinitialiser les filtres"
                            }, void 0, false, {
                                fileName: "[project]/src/components/AllProjectsPage.tsx",
                                lineNumber: 594,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/AllProjectsPage.tsx",
                        lineNumber: 580,
                        columnNumber: 13
                    }, this),
                    filteredProjects.length > 0 && viewMode === "grid" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                        children: filteredProjects.map((project)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                className: "bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105",
                                onClick: ()=>onProjectClick(project),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "aspect-video relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: project.image,
                                                alt: project.title,
                                                className: "w-full h-full object-cover",
                                                loading: "lazy"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/AllProjectsPage.tsx",
                                                lineNumber: 619,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute top-3 left-3",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "px-2 py-1 text-white rounded-full text-xs font-medium",
                                                    style: {
                                                        backgroundColor: "#0EA5E9"
                                                    },
                                                    children: project.categoryName
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AllProjectsPage.tsx",
                                                    lineNumber: 626,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/AllProjectsPage.tsx",
                                                lineNumber: 625,
                                                columnNumber: 19
                                            }, this),
                                            project.featured && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute top-3 right-3",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "px-2 py-1 rounded-full text-xs font-bold",
                                                    style: {
                                                        backgroundColor: "#B5C233",
                                                        color: "#6E6E6E"
                                                    },
                                                    children: "PHARE"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AllProjectsPage.tsx",
                                                    lineNumber: 635,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/AllProjectsPage.tsx",
                                                lineNumber: 634,
                                                columnNumber: 21
                                            }, this),
                                            project.awards.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute bottom-3 right-3",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-yellow-500 text-white rounded-full p-1",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__["Award"], {
                                                        className: "w-3 h-3"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/AllProjectsPage.tsx",
                                                        lineNumber: 649,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AllProjectsPage.tsx",
                                                    lineNumber: 648,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/AllProjectsPage.tsx",
                                                lineNumber: 647,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/AllProjectsPage.tsx",
                                        lineNumber: 618,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-bold text-lg mb-2 transition-colors line-clamp-2 cursor-pointer",
                                                style: {
                                                    color: "#000000"
                                                },
                                                onMouseEnter: (e)=>e.currentTarget.style.color = "#0EA5E9",
                                                onMouseLeave: (e)=>e.currentTarget.style.color = "#000000",
                                                children: project.title
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/AllProjectsPage.tsx",
                                                lineNumber: 656,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-3 mb-2 text-sm text-gray-500",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                                className: "w-3 h-3"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/AllProjectsPage.tsx",
                                                                lineNumber: 671,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: project.location
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/AllProjectsPage.tsx",
                                                                lineNumber: 672,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/AllProjectsPage.tsx",
                                                        lineNumber: 670,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                                className: "w-3 h-3"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/AllProjectsPage.tsx",
                                                                lineNumber: 675,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: project.year
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/AllProjectsPage.tsx",
                                                                lineNumber: 676,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/AllProjectsPage.tsx",
                                                        lineNumber: 674,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/AllProjectsPage.tsx",
                                                lineNumber: 669,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mb-3 line-clamp-2 text-sm",
                                                style: {
                                                    color: "#6E6E6E"
                                                },
                                                children: project.description
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/AllProjectsPage.tsx",
                                                lineNumber: 680,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-sm font-bold text-green-600",
                                                        children: project.budget
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/AllProjectsPage.tsx",
                                                        lineNumber: 688,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "flex items-center gap-1 font-medium text-sm transition-colors",
                                                        style: {
                                                            color: "#0EA5E9"
                                                        },
                                                        onMouseEnter: (e)=>e.currentTarget.style.color = "#0c93d1",
                                                        onMouseLeave: (e)=>e.currentTarget.style.color = "#0EA5E9",
                                                        children: [
                                                            "Voir ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                                className: "w-3 h-3"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/AllProjectsPage.tsx",
                                                                lineNumber: 703,
                                                                columnNumber: 28
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/AllProjectsPage.tsx",
                                                        lineNumber: 691,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/AllProjectsPage.tsx",
                                                lineNumber: 687,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/AllProjectsPage.tsx",
                                        lineNumber: 655,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, project.id, true, {
                                fileName: "[project]/src/components/AllProjectsPage.tsx",
                                lineNumber: 613,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/AllProjectsPage.tsx",
                        lineNumber: 611,
                        columnNumber: 11
                    }, this),
                    filteredProjects.length > 0 && viewMode === "list" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: filteredProjects.map((project)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                className: "bg-white rounded-xl shadow-lg p-4 hover:shadow-xl transition-shadow cursor-pointer",
                                onClick: ()=>onProjectClick(project),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 lg:grid-cols-4 gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "lg:col-span-1",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "aspect-video rounded-lg overflow-hidden",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: project.image,
                                                    alt: project.title,
                                                    className: "w-full h-full object-cover",
                                                    loading: "lazy"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AllProjectsPage.tsx",
                                                    lineNumber: 723,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/AllProjectsPage.tsx",
                                                lineNumber: 722,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AllProjectsPage.tsx",
                                            lineNumber: 721,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "lg:col-span-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-start justify-between mb-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                    className: "font-bold text-lg mb-1 transition-colors cursor-pointer",
                                                                    style: {
                                                                        color: "#000000"
                                                                    },
                                                                    onMouseEnter: (e)=>e.currentTarget.style.color = "#0EA5E9",
                                                                    onMouseLeave: (e)=>e.currentTarget.style.color = "#000000",
                                                                    children: project.title
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/AllProjectsPage.tsx",
                                                                    lineNumber: 735,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-3 mb-2 text-sm text-gray-500",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "px-2 py-1 rounded-full text-xs font-medium",
                                                                            style: {
                                                                                backgroundColor: "rgba(14, 165, 233, 0.1)",
                                                                                color: "#0EA5E9"
                                                                            },
                                                                            children: project.categoryName
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/AllProjectsPage.tsx",
                                                                            lineNumber: 751,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex items-center gap-1",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                                                    className: "w-3 h-3"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/AllProjectsPage.tsx",
                                                                                    lineNumber: 762,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    children: project.location
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/AllProjectsPage.tsx",
                                                                                    lineNumber: 763,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/AllProjectsPage.tsx",
                                                                            lineNumber: 761,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex items-center gap-1",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                                                    className: "w-3 h-3"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/AllProjectsPage.tsx",
                                                                                    lineNumber: 766,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    children: project.year
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/AllProjectsPage.tsx",
                                                                                    lineNumber: 767,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/AllProjectsPage.tsx",
                                                                            lineNumber: 765,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/AllProjectsPage.tsx",
                                                                    lineNumber: 750,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/AllProjectsPage.tsx",
                                                            lineNumber: 734,
                                                            columnNumber: 23
                                                        }, this),
                                                        project.featured && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "px-2 py-1 rounded-full text-xs font-bold",
                                                            style: {
                                                                backgroundColor: "#B5C233",
                                                                color: "#6E6E6E"
                                                            },
                                                            children: "PHARE"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/AllProjectsPage.tsx",
                                                            lineNumber: 773,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/AllProjectsPage.tsx",
                                                    lineNumber: 733,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mb-3 text-sm",
                                                    style: {
                                                        color: "#6E6E6E"
                                                    },
                                                    children: project.description
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AllProjectsPage.tsx",
                                                    lineNumber: 785,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-sm",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "font-medium",
                                                                            children: "Budget:"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/AllProjectsPage.tsx",
                                                                            lineNumber: 795,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "font-bold text-green-600 ml-1",
                                                                            children: project.budget
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/AllProjectsPage.tsx",
                                                                            lineNumber: 798,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/AllProjectsPage.tsx",
                                                                    lineNumber: 794,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-sm",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "font-medium",
                                                                            children: "Surface:"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/AllProjectsPage.tsx",
                                                                            lineNumber: 803,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-gray-600 ml-1",
                                                                            children: project.surface
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/AllProjectsPage.tsx",
                                                                            lineNumber: 806,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/AllProjectsPage.tsx",
                                                                    lineNumber: 802,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/AllProjectsPage.tsx",
                                                            lineNumber: 793,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            className: "flex items-center gap-2 px-3 py-1 text-white rounded-lg transition-colors text-sm",
                                                            style: {
                                                                backgroundColor: "#0EA5E9"
                                                            },
                                                            onMouseEnter: (e)=>e.currentTarget.style.backgroundColor = "#0c93d1",
                                                            onMouseLeave: (e)=>e.currentTarget.style.backgroundColor = "#0EA5E9",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                                                    className: "w-3 h-3"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/AllProjectsPage.tsx",
                                                                    lineNumber: 824,
                                                                    columnNumber: 25
                                                                }, this),
                                                                "Voir"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/AllProjectsPage.tsx",
                                                            lineNumber: 812,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/AllProjectsPage.tsx",
                                                    lineNumber: 792,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/AllProjectsPage.tsx",
                                            lineNumber: 732,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/AllProjectsPage.tsx",
                                    lineNumber: 720,
                                    columnNumber: 17
                                }, this)
                            }, project.id, false, {
                                fileName: "[project]/src/components/AllProjectsPage.tsx",
                                lineNumber: 715,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/AllProjectsPage.tsx",
                        lineNumber: 713,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/AllProjectsPage.tsx",
                lineNumber: 546,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "py-12 bg-gradient-to-r text-white",
                style: {
                    backgroundColor: "#0EA5E9"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto px-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center max-w-2xl mx-auto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl mb-4",
                                style: {
                                    fontFamily: "Montserrat"
                                },
                                children: "Votre projet nous intéresse"
                            }, void 0, false, {
                                fileName: "[project]/src/components/AllProjectsPage.tsx",
                                lineNumber: 843,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-lg mb-6 opacity-90",
                                children: "Rejoignez nos clients qui nous font confiance."
                            }, void 0, false, {
                                fileName: "[project]/src/components/AllProjectsPage.tsx",
                                lineNumber: 849,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col sm:flex-row gap-3 justify-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>onNavigate("quote-request"),
                                        className: "px-6 py-3 rounded-xl font-semibold transition-colors",
                                        style: {
                                            backgroundColor: "#0EA5E9",
                                            color: "#FFF"
                                        },
                                        children: "Soumettre un projet"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AllProjectsPage.tsx",
                                        lineNumber: 854,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>onNavigate("b2b-solutions"),
                                        className: "px-6 py-3 bg-white text-[rgb(21,198,252)] rounded-xl font-semibold hover:bg-gray-100 transition-colors",
                                        children: "Solutions B2B"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AllProjectsPage.tsx",
                                        lineNumber: 864,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/AllProjectsPage.tsx",
                                lineNumber: 853,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/AllProjectsPage.tsx",
                        lineNumber: 842,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/AllProjectsPage.tsx",
                    lineNumber: 841,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/AllProjectsPage.tsx",
                lineNumber: 837,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/AllProjectsPage.tsx",
        lineNumber: 198,
        columnNumber: 5
    }, this);
}
_s(AllProjectsPage, "euOevVxnxYoAlHRqsw+CRvV8+N0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useProjects$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["useProjects"]
    ];
});
_c = AllProjectsPage;
var _c;
__turbopack_context__.k.register(_c, "AllProjectsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_e6eab054._.js.map