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
"[project]/src/components/DeliveryInstallationModal.tsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DeliveryInstallationModal",
    ()=>DeliveryInstallationModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@fortawesome/react-fontawesome/dist/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@fortawesome/free-solid-svg-icons/index.mjs [client] (ecmascript)");
;
;
;
function DeliveryInstallationModal({ isOpen, onClose }) {
    if (!isOpen) return null;
    const deliveryPoints = [
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["faTruck"],
            text: "Livraison et pose à domicile partout à Abidjan"
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["faClock"],
            text: "Livré sous 48h"
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["faCheckCircle"],
            text: "Nos équipes assurent la livraison et la pose clé en main"
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["faCheckCircle"],
            text: "Service complet : conception, fabrication, livraison et pose"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center p-4",
        style: {
            backgroundColor: "rgba(0, 0, 0, 0.7)"
        },
        onClick: onClose,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white max-w-2xl w-full max-h-[90vh] overflow-y-auto relative",
            onClick: (e)=>e.stopPropagation(),
            style: {
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-6 border-b border-gray-200 flex items-center justify-between",
                    style: {
                        backgroundColor: "#6E6E6E"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-12 h-12 flex items-center justify-center",
                                    style: {
                                        backgroundColor: "#B5C233"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["faTruck"],
                                        className: "text-2xl",
                                        style: {
                                            color: "#6E6E6E"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DeliveryInstallationModal.tsx",
                                        lineNumber: 55,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/DeliveryInstallationModal.tsx",
                                    lineNumber: 51,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-2xl font-bold",
                                    style: {
                                        fontFamily: "Montserrat",
                                        color: "#B5C233"
                                    },
                                    children: "Livraison & Installation"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/DeliveryInstallationModal.tsx",
                                    lineNumber: 61,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/DeliveryInstallationModal.tsx",
                            lineNumber: 50,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "w-10 h-10 flex items-center justify-center hover:bg-white/10 transition-colors",
                            "aria-label": "Fermer",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["faXmark"],
                                className: "text-2xl",
                                style: {
                                    color: "#B5C233"
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/DeliveryInstallationModal.tsx",
                                lineNumber: 76,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/DeliveryInstallationModal.tsx",
                            lineNumber: 71,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/DeliveryInstallationModal.tsx",
                    lineNumber: 46,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xl mb-6",
                                style: {
                                    color: "#6E6E6E",
                                    fontFamily: "Montserrat"
                                },
                                children: "FIMA Design vous offre un service complet de livraison et d'installation professionnelle pour tous vos meubles sur-mesure."
                            }, void 0, false, {
                                fileName: "[project]/src/components/DeliveryInstallationModal.tsx",
                                lineNumber: 87,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/DeliveryInstallationModal.tsx",
                            lineNumber: 86,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: deliveryPoints.map((point, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-start gap-4 p-4 border-l-4 transition-all hover:bg-gray-50",
                                    style: {
                                        borderColor: "#B5C233"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-12 h-12 flex items-center justify-center flex-shrink-0",
                                            style: {
                                                backgroundColor: "#6E6E6E"
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                                icon: point.icon,
                                                className: "text-xl",
                                                style: {
                                                    color: "#B5C233"
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DeliveryInstallationModal.tsx",
                                                lineNumber: 111,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/DeliveryInstallationModal.tsx",
                                            lineNumber: 107,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-lg flex-1 pt-2",
                                            style: {
                                                color: "#6E6E6E"
                                            },
                                            children: point.text
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/DeliveryInstallationModal.tsx",
                                            lineNumber: 117,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, index, true, {
                                    fileName: "[project]/src/components/DeliveryInstallationModal.tsx",
                                    lineNumber: 102,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/DeliveryInstallationModal.tsx",
                            lineNumber: 100,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/DeliveryInstallationModal.tsx",
                    lineNumber: 85,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-6 border-t border-gray-200 flex justify-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onClose,
                        className: "px-8 py-3 font-semibold transition-colors",
                        style: {
                            backgroundColor: "#6E6E6E",
                            color: "#B5C233",
                            fontFamily: "Montserrat"
                        },
                        onMouseEnter: (e)=>{
                            e.currentTarget.style.backgroundColor = "#5a5a5a";
                        },
                        onMouseLeave: (e)=>{
                            e.currentTarget.style.backgroundColor = "#6E6E6E";
                        },
                        children: "Fermer"
                    }, void 0, false, {
                        fileName: "[project]/src/components/DeliveryInstallationModal.tsx",
                        lineNumber: 133,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/DeliveryInstallationModal.tsx",
                    lineNumber: 132,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/DeliveryInstallationModal.tsx",
            lineNumber: 40,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/DeliveryInstallationModal.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
}
_c = DeliveryInstallationModal;
var _c;
__turbopack_context__.k.register(_c, "DeliveryInstallationModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/PersonalizationModal.tsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PersonalizationModal",
    ()=>PersonalizationModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@fortawesome/react-fontawesome/dist/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@fortawesome/free-solid-svg-icons/index.mjs [client] (ecmascript)");
;
;
;
function PersonalizationModal({ isOpen, onClose }) {
    if (!isOpen) return null;
    const personalizationPoints = [
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["faLightbulb"],
            text: "Chaque création est unique, conçue sur mesure selon vos envies"
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["faPalette"],
            text: "Choisissez vos dimensions, vos couleurs et vos finitions"
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["faRulerCombined"],
            text: "Un design qui s'adapte à votre espace et à votre style"
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["faHeart"],
            text: "Du sur-mesure pour un intérieur qui vous ressemble"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center p-4",
        style: {
            backgroundColor: "rgba(0, 0, 0, 0.7)"
        },
        onClick: onClose,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white max-w-2xl w-full max-h-[90vh] overflow-y-auto relative",
            onClick: (e)=>e.stopPropagation(),
            style: {
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-6 border-b border-gray-200 flex items-center justify-between",
                    style: {
                        backgroundColor: "#6E6E6E"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-12 h-12 flex items-center justify-center",
                                    style: {
                                        backgroundColor: "#B5C233"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["faPalette"],
                                        className: "text-2xl",
                                        style: {
                                            color: "#6E6E6E"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/PersonalizationModal.tsx",
                                        lineNumber: 55,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/PersonalizationModal.tsx",
                                    lineNumber: 51,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-2xl font-bold",
                                    style: {
                                        fontFamily: "Montserrat",
                                        color: "#B5C233"
                                    },
                                    children: "Personnalisation & Sur Mesure"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/PersonalizationModal.tsx",
                                    lineNumber: 61,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/PersonalizationModal.tsx",
                            lineNumber: 50,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "w-10 h-10 flex items-center justify-center hover:bg-white/10 transition-colors",
                            "aria-label": "Fermer",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["faXmark"],
                                className: "text-2xl",
                                style: {
                                    color: "#B5C233"
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/PersonalizationModal.tsx",
                                lineNumber: 76,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/PersonalizationModal.tsx",
                            lineNumber: 71,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/PersonalizationModal.tsx",
                    lineNumber: 46,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xl mb-6",
                                style: {
                                    color: "#6E6E6E",
                                    fontFamily: "Montserrat"
                                },
                                children: "Nos experts vous accompagnent dans la conception personnalisée de votre mobilier."
                            }, void 0, false, {
                                fileName: "[project]/src/components/PersonalizationModal.tsx",
                                lineNumber: 87,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/PersonalizationModal.tsx",
                            lineNumber: 86,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: personalizationPoints.map((point, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-start gap-4 p-4 border-l-4 transition-all hover:bg-gray-50",
                                    style: {
                                        borderColor: "#B5C233"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-12 h-12 flex items-center justify-center flex-shrink-0",
                                            style: {
                                                backgroundColor: "#6E6E6E"
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                                icon: point.icon,
                                                className: "text-xl",
                                                style: {
                                                    color: "#B5C233"
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/PersonalizationModal.tsx",
                                                lineNumber: 111,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/PersonalizationModal.tsx",
                                            lineNumber: 107,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-lg flex-1 pt-2",
                                            style: {
                                                color: "#6E6E6E"
                                            },
                                            children: point.text
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/PersonalizationModal.tsx",
                                            lineNumber: 117,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, index, true, {
                                    fileName: "[project]/src/components/PersonalizationModal.tsx",
                                    lineNumber: 102,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/PersonalizationModal.tsx",
                            lineNumber: 100,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-8 p-6 border-2",
                            style: {
                                borderColor: "#B5C233",
                                backgroundColor: "rgba(181, 194, 51, 0.05)"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-center font-semibold",
                                style: {
                                    color: "#6E6E6E",
                                    fontFamily: "Montserrat"
                                },
                                children: [
                                    "FIMA DESIGN : Votre mobilier sur mesure",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/src/components/PersonalizationModal.tsx",
                                        lineNumber: 143,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: "#B5C233"
                                        },
                                        children: "Un projet unique pour chaque client"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/PersonalizationModal.tsx",
                                        lineNumber: 144,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/PersonalizationModal.tsx",
                                lineNumber: 135,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/PersonalizationModal.tsx",
                            lineNumber: 128,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/PersonalizationModal.tsx",
                    lineNumber: 85,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-6 border-t border-gray-200 flex justify-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onClose,
                        className: "px-8 py-3 font-semibold transition-colors",
                        style: {
                            backgroundColor: "#6E6E6E",
                            color: "#B5C233",
                            fontFamily: "Montserrat"
                        },
                        onMouseEnter: (e)=>{
                            e.currentTarget.style.backgroundColor = "#5a5a5a";
                        },
                        onMouseLeave: (e)=>{
                            e.currentTarget.style.backgroundColor = "#6E6E6E";
                        },
                        children: "Fermer"
                    }, void 0, false, {
                        fileName: "[project]/src/components/PersonalizationModal.tsx",
                        lineNumber: 153,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/PersonalizationModal.tsx",
                    lineNumber: 152,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/PersonalizationModal.tsx",
            lineNumber: 40,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/PersonalizationModal.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
}
_c = PersonalizationModal;
var _c;
__turbopack_context__.k.register(_c, "PersonalizationModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/QualityExpertiseModal.tsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "QualityExpertiseModal",
    ()=>QualityExpertiseModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@fortawesome/react-fontawesome/dist/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@fortawesome/free-solid-svg-icons/index.mjs [client] (ecmascript)");
;
;
;
function QualityExpertiseModal({ isOpen, onClose }) {
    if (!isOpen) return null;
    const qualityPoints = [
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["faStar"],
            text: "Finition haut de gamme, qualité garantie par le Groupe FIMA"
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["faGem"],
            text: "Design contemporain, robustesse et élégance à la fois"
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["faAward"],
            text: "Un savoir-faire ivoirien reconnu depuis plusieurs générations"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center p-4",
        style: {
            backgroundColor: "rgba(0, 0, 0, 0.7)"
        },
        onClick: onClose,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white max-w-2xl w-full max-h-[90vh] overflow-y-auto relative",
            onClick: (e)=>e.stopPropagation(),
            style: {
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-6 border-b border-gray-200 flex items-center justify-between",
                    style: {
                        backgroundColor: "#6E6E6E"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-12 h-12 flex items-center justify-center",
                                    style: {
                                        backgroundColor: "#B5C233"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["faShieldHalved"],
                                        className: "text-2xl",
                                        style: {
                                            color: "#6E6E6E"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/QualityExpertiseModal.tsx",
                                        lineNumber: 51,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/QualityExpertiseModal.tsx",
                                    lineNumber: 47,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-2xl font-bold",
                                    style: {
                                        fontFamily: "Montserrat",
                                        color: "#B5C233"
                                    },
                                    children: "Qualité & Expertise"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/QualityExpertiseModal.tsx",
                                    lineNumber: 57,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/QualityExpertiseModal.tsx",
                            lineNumber: 46,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "w-10 h-10 flex items-center justify-center hover:bg-white/10 transition-colors",
                            "aria-label": "Fermer",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["faXmark"],
                                className: "text-2xl",
                                style: {
                                    color: "#B5C233"
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/QualityExpertiseModal.tsx",
                                lineNumber: 72,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/QualityExpertiseModal.tsx",
                            lineNumber: 67,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/QualityExpertiseModal.tsx",
                    lineNumber: 42,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xl mb-6",
                                style: {
                                    color: "#6E6E6E",
                                    fontFamily: "Montserrat"
                                },
                                children: "Fabrication locale avec des matériaux importés d'Italie et d'Europe"
                            }, void 0, false, {
                                fileName: "[project]/src/components/QualityExpertiseModal.tsx",
                                lineNumber: 83,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/QualityExpertiseModal.tsx",
                            lineNumber: 82,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: qualityPoints.map((point, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-start gap-4 p-4 border-l-4 transition-all hover:bg-gray-50",
                                    style: {
                                        borderColor: "#B5C233"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-12 h-12 flex items-center justify-center flex-shrink-0",
                                            style: {
                                                backgroundColor: "#6E6E6E"
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                                icon: point.icon,
                                                className: "text-xl",
                                                style: {
                                                    color: "#B5C233"
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/QualityExpertiseModal.tsx",
                                                lineNumber: 107,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/QualityExpertiseModal.tsx",
                                            lineNumber: 103,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-lg flex-1 pt-2",
                                            style: {
                                                color: "#6E6E6E"
                                            },
                                            children: point.text
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/QualityExpertiseModal.tsx",
                                            lineNumber: 113,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, index, true, {
                                    fileName: "[project]/src/components/QualityExpertiseModal.tsx",
                                    lineNumber: 98,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/QualityExpertiseModal.tsx",
                            lineNumber: 96,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/QualityExpertiseModal.tsx",
                    lineNumber: 81,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-6 border-t border-gray-200 flex justify-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onClose,
                        className: "px-8 py-3 font-semibold transition-colors",
                        style: {
                            backgroundColor: "#6E6E6E",
                            color: "#B5C233",
                            fontFamily: "Montserrat"
                        },
                        onMouseEnter: (e)=>{
                            e.currentTarget.style.backgroundColor = "#5a5a5a";
                        },
                        onMouseLeave: (e)=>{
                            e.currentTarget.style.backgroundColor = "#6E6E6E";
                        },
                        children: "Fermer"
                    }, void 0, false, {
                        fileName: "[project]/src/components/QualityExpertiseModal.tsx",
                        lineNumber: 129,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/QualityExpertiseModal.tsx",
                    lineNumber: 128,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/QualityExpertiseModal.tsx",
            lineNumber: 36,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/QualityExpertiseModal.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
_c = QualityExpertiseModal;
var _c;
__turbopack_context__.k.register(_c, "QualityExpertiseModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ImageLightbox.tsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ImageLightbox",
    ()=>ImageLightbox
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@fortawesome/react-fontawesome/dist/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@fortawesome/free-solid-svg-icons/index.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$figma$2f$ImageWithFallback$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/figma/ImageWithFallback.tsx [client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
function ImageLightbox({ images, startIndex, isOpen, onClose, alt = "Image agrandie" }) {
    _s();
    const [currentIndex, setCurrentIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(startIndex);
    // Réinitialiser l'index quand startIndex change
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ImageLightbox.useEffect": ()=>{
            setCurrentIndex(startIndex);
        }
    }["ImageLightbox.useEffect"], [
        startIndex
    ]);
    // Fermer avec la touche Escape
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ImageLightbox.useEffect": ()=>{
            if (!isOpen) return;
            const handleKeyDown = {
                "ImageLightbox.useEffect.handleKeyDown": (e)=>{
                    if (e.key === "Escape") {
                        onClose();
                    } else if (e.key === "ArrowRight" && currentIndex < images.length - 1) {
                        setCurrentIndex(currentIndex + 1);
                    } else if (e.key === "ArrowLeft" && currentIndex > 0) {
                        setCurrentIndex(currentIndex - 1);
                    }
                }
            }["ImageLightbox.useEffect.handleKeyDown"];
            window.addEventListener("keydown", handleKeyDown);
            return ({
                "ImageLightbox.useEffect": ()=>window.removeEventListener("keydown", handleKeyDown)
            })["ImageLightbox.useEffect"];
        }
    }["ImageLightbox.useEffect"], [
        isOpen,
        onClose,
        currentIndex,
        images.length
    ]);
    // Bloquer le scroll du body
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ImageLightbox.useEffect": ()=>{
            if (!isOpen) return;
            document.body.style.overflow = "hidden";
            return ({
                "ImageLightbox.useEffect": ()=>{
                    document.body.style.overflow = "unset";
                }
            })["ImageLightbox.useEffect"];
        }
    }["ImageLightbox.useEffect"], [
        isOpen
    ]);
    const currentImage = images[currentIndex];
    const hasMultipleImages = images.length > 1;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onClose,
                    className: "absolute top-4 right-4 z-10 w-12 h-12 flex items-center justify-center bg-white/10 hover:border hover:border-gray-400 text-white transition-all",
                    "aria-label": "Fermer",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["faXmark"],
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
                hasMultipleImages && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: (e)=>{
                        e.stopPropagation();
                        setCurrentIndex(currentIndex - 1);
                    },
                    className: "absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center bg-white/10 hover:border hover:border-gray-400 text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed",
                    disabled: currentIndex === 0,
                    "aria-label": "Image précédente",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["faChevronLeft"],
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
                hasMultipleImages && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: (e)=>{
                        e.stopPropagation();
                        setCurrentIndex(currentIndex + 1);
                    },
                    className: "absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center bg-white/10 hover:border hover:border-gray-400 text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed",
                    disabled: currentIndex === images.length - 1,
                    "aria-label": "Image suivante",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["faChevronRight"],
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
                hasMultipleImages && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$figma$2f$ImageWithFallback$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["ImageWithFallback"], {
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
_s(ImageLightbox, "nejrqTLAxIBdqj7mimGAfFAOjLg=");
_c = ImageLightbox;
var _c;
__turbopack_context__.k.register(_c, "ImageLightbox");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/business-units/FimaDesignPage.tsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FimaDesignPage",
    ()=>FimaDesignPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$figma$2f$ImageWithFallback$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/figma/ImageWithFallback.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Breadcrumb$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Breadcrumb.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useProductCategories$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useProductCategories.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductCategoryCarousel$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ProductCategoryCarousel.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DeliveryInstallationModal$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/DeliveryInstallationModal.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PersonalizationModal$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/PersonalizationModal.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QualityExpertiseModal$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/QualityExpertiseModal.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImageLightbox$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ImageLightbox.tsx [client] (ecmascript)");
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
function FimaDesignPage({ onNavigate, onBack, onQuoteRequest }) {
    _s();
    const [activeCategory, setActiveCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])("mobilier");
    const [isDeliveryModalOpen, setIsDeliveryModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isPersonalizationModalOpen, setIsPersonalizationModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isQualityModalOpen, setIsQualityModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [lightboxOpen, setLightboxOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [lightboxImages, setLightboxImages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [lightboxIndex, setLightboxIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(0);
    // Récupérer les catégories de produits dynamiques depuis Supabase
    const { categories: allCategories } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useProductCategories$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["useProductCategories"])();
    // Breadcrumb items
    const breadcrumbItems = [
        {
            label: "Accueil",
            onClick: onBack
        },
        {
            label: "FIMA Design"
        }
    ];
    // Extraire les catégories FIMA Design avec fallback robuste
    const fimaDesignCategories = allCategories?.["fima-design"] && allCategories["fima-design"].length > 0 ? allCategories["fima-design"] : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useProductCategories$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["DEFAULT_CATEGORIES"]["fima-design"];
    // Helper pour mapper les catégories avec les vraies images
    const mapCategoriesWithImages = (prefix)=>{
        const mappedCategories = fimaDesignCategories.map((cat, index)=>{
            const slug = cat.slug || cat.key;
            console.log(`🗂️ Mapping category [${prefix}]:`, cat.name, "-> slug:", slug);
            return {
                id: `design-cat-${prefix}-${slug}-${index}`,
                name: cat.name,
                // Ne pas afficher d'image par défaut - attendre le chargement des vraies images
                image: cat.thumbnail || undefined,
                slug: slug,
                productCount: cat.count
            };
        });
        console.log(`📋 Total mapped categories [${prefix}]:`, mappedCategories.length);
        return mappedCategories;
    };
    const designCategories = [
        {
            key: "mobilier",
            name: "Mobilier sur-mesure",
            icon: "🪑",
            description: "Créations uniques en bois noble africain"
        },
        {
            key: "cuisines",
            name: "Cuisines équipées",
            icon: "🏠",
            description: "Aménagements complets et fonctionnels"
        },
        {
            key: "dressings",
            name: "Dressings & Rangements",
            icon: "👔",
            description: "Solutions d'organisation sur-mesure"
        },
        {
            key: "bureaux",
            name: "Mobilier de bureau",
            icon: "💼",
            description: "Espaces de travail contemporains"
        }
    ];
    const expertisePoints = [
        {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                className: "fa-solid fa-truck text-2xl"
            }, void 0, false, {
                fileName: "[project]/src/components/business-units/FimaDesignPage.tsx",
                lineNumber: 115,
                columnNumber: 13
            }, this),
            title: "Livraison & installation",
            description: "Livraison et pose à domicile partout à Abidjan",
            details: [
                "Livré et installé sous 48h",
                "Nos équipes assurent la livraison et la pose clé en main",
                "Livraison express avec installation professionnelle",
                "Service complet : conception, fabrication, livraison et pose"
            ]
        },
        {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                className: "fa-solid fa-ruler-combined text-2xl"
            }, void 0, false, {
                fileName: "[project]/src/components/business-units/FimaDesignPage.tsx",
                lineNumber: 128,
                columnNumber: 9
            }, this),
            title: "Personnalisation & sur mesure",
            description: "Chaque création est unique, conçue sur mesure selon vos envies",
            details: [
                "Choisissez vos dimensions, vos couleurs et vos finitions",
                "Un design qui s'adapte à votre espace et à votre style",
                "Du sur-mesure pour un intérieur qui vous ressemble",
                "Nos experts vous accompagnent dans la conception personnalisée de votre mobilier"
            ]
        },
        {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                className: "fa-solid fa-award text-2xl"
            }, void 0, false, {
                fileName: "[project]/src/components/business-units/FimaDesignPage.tsx",
                lineNumber: 141,
                columnNumber: 13
            }, this),
            title: "Qualité & expertise",
            description: "Fabrication locale avec des matériaux importés d'Italie et d'Europe",
            details: [
                "Finition haut de gamme, qualité garantie par le Groupe FIMA",
                "Design contemporain, robustesse et élégance à la fois",
                "Un savoir-faire ivoirien reconnu depuis plusieurs générations",
                "FIMA DESIGN : de la conception à la réalisation, sans compromis sur la qualité"
            ]
        }
    ];
    const realisations = [
        {
            id: 1,
            title: "Villa Moderne - Cocody",
            category: "Aménagement complet",
            image: "https://images.unsplash.com/photo-1680176832018-afc055ac7dc7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZGp1c3RhYmxlJTIwYmVkfGVufDF8fHx8MTc1ODExODg5M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            description: "Mobilier sur-mesure en acajou pour villa contemporaine"
        },
        {
            id: 2,
            title: "Bureau Exécutif - Plateau",
            category: "Mobilier professionnel",
            image: "https://images.unsplash.com/photo-1585086287371-e455901ee81e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaWxsb3clMjBtZW1vcnklMjBmb2FtfGVufDF8fHx8MTc1ODExODg5Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            description: "Aménagement bureau direction avec bibliothèque intégrée"
        },
        {
            id: 3,
            title: "Cuisine Équipée - Deux Plateaux",
            category: "Cuisine sur-mesure",
            image: "https://images.unsplash.com/photo-1688382575764-8a6a65d3821e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWQlMjBmcmFtZSUyMHdvb2R8ZW58MXx8fHwxNzU4MTE4OTAwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            description: "Cuisine moderne en bois massif avec îlot central"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Breadcrumb$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["Breadcrumb"], {
                items: breadcrumbItems,
                accentColor: "#6E6E6E"
            }, void 0, false, {
                fileName: "[project]/src/components/business-units/FimaDesignPage.tsx",
                lineNumber: 187,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto px-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center py-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onBack,
                                className: "flex items-center gap-2 hover:bg-gray-200 p-2 rounded-lg transition-colors mr-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                        className: "fa-solid fa-arrow-left"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/business-units/FimaDesignPage.tsx",
                                        lineNumber: 197,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Accueil"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/business-units/FimaDesignPage.tsx",
                                        lineNumber: 198,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/business-units/FimaDesignPage.tsx",
                                lineNumber: 193,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-20 h-20 rounded-lg overflow-hidden bg-white shadow-lg",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-center w-full h-full flex flex-col items-center justify-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        color: "#6E6E6E"
                                                    },
                                                    children: "FIMA"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/business-units/FimaDesignPage.tsx",
                                                    lineNumber: 204,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        color: "#6E6E6E"
                                                    },
                                                    children: "Design"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/business-units/FimaDesignPage.tsx",
                                                    lineNumber: 211,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/business-units/FimaDesignPage.tsx",
                                            lineNumber: 203,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/business-units/FimaDesignPage.tsx",
                                        lineNumber: 202,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                color: "#6E6E6E"
                                            },
                                            children: "Menuiserie & Ameublement • Sur-mesure"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/business-units/FimaDesignPage.tsx",
                                            lineNumber: 215,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/business-units/FimaDesignPage.tsx",
                                        lineNumber: 214,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/business-units/FimaDesignPage.tsx",
                                lineNumber: 201,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/business-units/FimaDesignPage.tsx",
                        lineNumber: 192,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/business-units/FimaDesignPage.tsx",
                    lineNumber: 191,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/business-units/FimaDesignPage.tsx",
                lineNumber: 190,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-16 bg-gradient-to-b from-gray-50 to-white",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto px-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-4xl mx-auto text-center mb-12",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "inline-block mb-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "px-4",
                                        style: {
                                            backgroundColor: "#6E6E6E",
                                            color: "#B5C233"
                                        },
                                        children: "MADE IN CÔTE D'IVOIRE"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/business-units/FimaDesignPage.tsx",
                                        lineNumber: 230,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/business-units/FimaDesignPage.tsx",
                                    lineNumber: 229,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "mb-6 text-2xl",
                                    style: {
                                        color: "#6E6E6E"
                                    },
                                    children: "L'art du bois noble au service de votre intérieur"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/business-units/FimaDesignPage.tsx",
                                    lineNumber: 241,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mb-8 text-lg max-w-3xl mx-auto",
                                    style: {
                                        color: "#6E6E6E"
                                    },
                                    children: "Créations sur-mesure en essences africaines nobles. Du mobilier contemporain aux aménagements complets, FIMA Design transforme vos espaces avec expertise et passion."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/business-units/FimaDesignPage.tsx",
                                    lineNumber: 250,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/business-units/FimaDesignPage.tsx",
                            lineNumber: 228,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-12",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-gray-50 p-4 lg:hidden",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "mb-3",
                                                style: {
                                                    color: "#000000"
                                                },
                                                children: "Nos catégories de produits"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/business-units/FimaDesignPage.tsx",
                                                lineNumber: 288,
                                                columnNumber: 17
                                            }, this),
                                            fimaDesignCategories.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductCategoryCarousel$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["ProductCategoryCarousel"], {
                                                categories: mapCategoriesWithImages("mobile"),
                                                onCategoryClick: (slug)=>{
                                                    console.log("📱 Mobile - Category clicked with slug:", slug);
                                                    if (!slug) {
                                                        console.error("❌ Mobile - Empty slug received!");
                                                        return;
                                                    }
                                                    console.log("✅ Mobile - Navigating to category-detail with slug:", slug);
                                                    // Redirection vers category-detail pour afficher les images de la catégorie
                                                    onNavigate("category-detail", slug);
                                                },
                                                accentColor: "#6E6E6E"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/business-units/FimaDesignPage.tsx",
                                                lineNumber: 297,
                                                columnNumber: 19
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                style: {
                                                    color: "#6E6E6E"
                                                },
                                                children: "Chargement..."
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/business-units/FimaDesignPage.tsx",
                                                lineNumber: 322,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/business-units/FimaDesignPage.tsx",
                                        lineNumber: 287,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "hidden lg:block",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-gray-50 p-6 self-start",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "mb-4 text-center text-3xl",
                                                    style: {
                                                        color: "#6E6E6E"
                                                    },
                                                    children: "Nos catégories de produits"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/business-units/FimaDesignPage.tsx",
                                                    lineNumber: 332,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "grid grid-cols-3 gap-4 mb-6",
                                                        children: mapCategoriesWithImages("desktop").map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                onClick: ()=>{
                                                                    console.log("🖱️ Desktop - Category clicked:", category.name, "with slug:", category.slug);
                                                                    if (!category.slug) {
                                                                        console.error("❌ Desktop - Empty slug for category:", category.name);
                                                                        return;
                                                                    }
                                                                    console.log("✅ Desktop - Navigating to category-detail with slug:", category.slug);
                                                                    // Redirection vers category-detail pour afficher les images de la catégorie
                                                                    onNavigate("category-detail", category.slug);
                                                                },
                                                                className: "group cursor-pointer flex flex-col items-center text-center",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "w-32 h-32 rounded-full overflow-hidden mb-3 bg-gray-100 flex-shrink-0 transition-transform duration-300 group-hover:scale-110",
                                                                        children: category.image ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$figma$2f$ImageWithFallback$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["ImageWithFallback"], {
                                                                            src: category.image,
                                                                            alt: category.name,
                                                                            className: "w-full h-full object-cover"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/business-units/FimaDesignPage.tsx",
                                                                            lineNumber: 377,
                                                                            columnNumber: 33
                                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "w-full h-full flex items-center justify-center bg-gray-200",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                className: "fa-solid fa-image",
                                                                                style: {
                                                                                    color: "#6E6E6E"
                                                                                }
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/business-units/FimaDesignPage.tsx",
                                                                                lineNumber: 384,
                                                                                columnNumber: 35
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/business-units/FimaDesignPage.tsx",
                                                                            lineNumber: 383,
                                                                            columnNumber: 33
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/business-units/FimaDesignPage.tsx",
                                                                        lineNumber: 375,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                        className: "mb-1 min-h-[2.5rem] flex items-center justify-center px-1",
                                                                        style: {
                                                                            color: "#000000",
                                                                            lineHeight: "1.3",
                                                                            wordWrap: "break-word",
                                                                            width: "100%"
                                                                        },
                                                                        children: category.name
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/business-units/FimaDesignPage.tsx",
                                                                        lineNumber: 393,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, category.id, true, {
                                                                fileName: "[project]/src/components/business-units/FimaDesignPage.tsx",
                                                                lineNumber: 347,
                                                                columnNumber: 27
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/business-units/FimaDesignPage.tsx",
                                                        lineNumber: 344,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/business-units/FimaDesignPage.tsx",
                                            lineNumber: 331,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/business-units/FimaDesignPage.tsx",
                                        lineNumber: 329,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute -bottom-6 -right-6 bg-white p-6 shadow-xl lg:hidden",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    color: "#6E6E6E"
                                                },
                                                children: "30+"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/business-units/FimaDesignPage.tsx",
                                                lineNumber: 424,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    color: "#6E6E6E"
                                                },
                                                children: "Années d'expertise"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/business-units/FimaDesignPage.tsx",
                                                lineNumber: 425,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-gray-500",
                                                children: "Menuiserie fine"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/business-units/FimaDesignPage.tsx",
                                                lineNumber: 428,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/business-units/FimaDesignPage.tsx",
                                        lineNumber: 423,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/business-units/FimaDesignPage.tsx",
                                lineNumber: 285,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/business-units/FimaDesignPage.tsx",
                            lineNumber: 284,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-[30px] mr-[0px] mb-[0px] ml-[0px]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "max-w-5xl mx-auto",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-gray-50 p-4 md:p-8 border-l-4",
                                    style: {
                                        borderLeftColor: "#6E6E6E"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "mb-6 text-center md:text-left text-2xl",
                                            style: {
                                                color: "#6E6E6E"
                                            },
                                            children: "Quand la créativité rencontre la précision."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/business-units/FimaDesignPage.tsx",
                                            lineNumber: 444,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-4",
                                            style: {
                                                color: "#6E6E6E"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: "FIMA DESIGN"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/business-units/FimaDesignPage.tsx",
                                                            lineNumber: 458,
                                                            columnNumber: 21
                                                        }, this),
                                                        " incarne l'alliance du design contemporain et de la tradition artisanale."
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/business-units/FimaDesignPage.tsx",
                                                    lineNumber: 457,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "Spécialisée dans la menuiserie moderne et la fabrication de meubles sur mesure, cette division propose des créations à la fois esthétiques, fonctionnelles et durables."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/business-units/FimaDesignPage.tsx",
                                                    lineNumber: 463,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "Ses ateliers utilisent des matériaux nobles et innovants, tels que le mélaminé de qualité supérieure, les vitres et accessoires importés d'Italie, ainsi que des bois sélectionnés avec soin pour leur résistance et leur élégance."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/business-units/FimaDesignPage.tsx",
                                                    lineNumber: 470,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "De la conception 3D à la réalisation finale, FIMA DESIGN transforme chaque espace en un lieu unique, à l'image de ceux qui l'habitent."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/business-units/FimaDesignPage.tsx",
                                                    lineNumber: 479,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-6",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "mb-3",
                                                            style: {
                                                                color: "#6E6E6E"
                                                            },
                                                            children: "Produits et services :"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/business-units/FimaDesignPage.tsx",
                                                            lineNumber: 487,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                            className: "space-y-2 pl-5 list-disc",
                                                            style: {
                                                                color: "#6E6E6E"
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    children: "Meubles sur mesure (bureaux, cuisines, chambres, dressings, etc.)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/business-units/FimaDesignPage.tsx",
                                                                    lineNumber: 499,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    children: "Agencements intérieurs et solutions d'ameublement haut de gamme"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/business-units/FimaDesignPage.tsx",
                                                                    lineNumber: 503,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    children: "Portes, placards et éléments décoratifs modernes"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/business-units/FimaDesignPage.tsx",
                                                                    lineNumber: 507,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/business-units/FimaDesignPage.tsx",
                                                            lineNumber: 495,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/business-units/FimaDesignPage.tsx",
                                                    lineNumber: 486,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "italic mt-6 pt-6 border-t border-gray-300",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: "FIMA DESIGN"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/business-units/FimaDesignPage.tsx",
                                                            lineNumber: 515,
                                                            columnNumber: 21
                                                        }, this),
                                                        ", c'est la signature du raffinement ivoirien, nourri par l'expertise internationale."
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/business-units/FimaDesignPage.tsx",
                                                    lineNumber: 514,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/business-units/FimaDesignPage.tsx",
                                            lineNumber: 453,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/business-units/FimaDesignPage.tsx",
                                    lineNumber: 440,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/business-units/FimaDesignPage.tsx",
                                lineNumber: 439,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/business-units/FimaDesignPage.tsx",
                            lineNumber: 438,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/business-units/FimaDesignPage.tsx",
                    lineNumber: 226,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/business-units/FimaDesignPage.tsx",
                lineNumber: 225,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-16 bg-gray-50",
                id: "nos-realisations",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto px-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center mb-12",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "mb-4",
                                    style: {
                                        color: "#6E6E6E"
                                    },
                                    children: "Nos dernières réalisations"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/business-units/FimaDesignPage.tsx",
                                    lineNumber: 568,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "max-w-2xl mx-auto",
                                    style: {
                                        color: "#6E6E6E"
                                    },
                                    children: "Découvrez quelques-uns de nos projets récents qui illustrent notre savoir-faire et notre attention aux détails."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/business-units/FimaDesignPage.tsx",
                                    lineNumber: 576,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/business-units/FimaDesignPage.tsx",
                            lineNumber: 567,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
                            children: realisations.map((realisation, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "aspect-video relative cursor-pointer group",
                                            onClick: ()=>{
                                                setLightboxImages(realisations.map((r)=>r.image));
                                                setLightboxIndex(index);
                                                setLightboxOpen(true);
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$figma$2f$ImageWithFallback$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["ImageWithFallback"], {
                                                    src: realisation.image,
                                                    alt: realisation.title,
                                                    className: "w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/business-units/FimaDesignPage.tsx",
                                                    lineNumber: 602,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute top-4 left-4",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "px-3 py-1",
                                                        style: {
                                                            backgroundColor: "#6E6E6E",
                                                            color: "#B5C233"
                                                        },
                                                        children: realisation.category
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/business-units/FimaDesignPage.tsx",
                                                        lineNumber: 608,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/business-units/FimaDesignPage.tsx",
                                                    lineNumber: 607,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/business-units/FimaDesignPage.tsx",
                                            lineNumber: 592,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "mb-2",
                                                    style: {
                                                        color: "#000000"
                                                    },
                                                    children: realisation.title
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/business-units/FimaDesignPage.tsx",
                                                    lineNumber: 620,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mb-4",
                                                    style: {
                                                        color: "#6E6E6E"
                                                    },
                                                    children: realisation.description
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/business-units/FimaDesignPage.tsx",
                                                    lineNumber: 626,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                            className: "fa-solid fa-eye"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/business-units/FimaDesignPage.tsx",
                                                            lineNumber: 633,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Voir le projet"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/business-units/FimaDesignPage.tsx",
                                                            lineNumber: 634,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/business-units/FimaDesignPage.tsx",
                                                    lineNumber: 632,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/business-units/FimaDesignPage.tsx",
                                            lineNumber: 619,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, realisation.id, true, {
                                    fileName: "[project]/src/components/business-units/FimaDesignPage.tsx",
                                    lineNumber: 588,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/business-units/FimaDesignPage.tsx",
                            lineNumber: 586,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center mt-12",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "fima-btn-secondary px-8 py-3",
                                style: {
                                    backgroundColor: "#6E6E6E",
                                    color: "#B5C233"
                                },
                                children: "Voir toutes nos réalisations"
                            }, void 0, false, {
                                fileName: "[project]/src/components/business-units/FimaDesignPage.tsx",
                                lineNumber: 642,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/business-units/FimaDesignPage.tsx",
                            lineNumber: 641,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/business-units/FimaDesignPage.tsx",
                    lineNumber: 566,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/business-units/FimaDesignPage.tsx",
                lineNumber: 562,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-16 bg-gradient-to-r",
                style: {
                    backgroundColor: "#6E6E6E",
                    color: "#B5C233"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto px-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "mb-4",
                                children: "Un projet d'aménagement en tête ?"
                            }, void 0, false, {
                                fileName: "[project]/src/components/business-units/FimaDesignPage.tsx",
                                lineNumber: 665,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mb-8 max-w-2xl mx-auto opacity-90",
                                children: "Nos experts vous accompagnent de la conception à la réalisation. Devis gratuit et conseil personnalisé."
                            }, void 0, false, {
                                fileName: "[project]/src/components/business-units/FimaDesignPage.tsx",
                                lineNumber: 668,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col sm:flex-row gap-4 justify-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: onQuoteRequest,
                                        className: "px-8 py-4 text-white rounded-xl transition-colors",
                                        style: {
                                            backgroundColor: "#B5C233",
                                            color: "#656565"
                                        },
                                        onMouseEnter: (e)=>e.currentTarget.style.backgroundColor = "#a3af2e",
                                        onMouseLeave: (e)=>e.currentTarget.style.backgroundColor = "#B5C233",
                                        children: "Demander un devis gratuit"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/business-units/FimaDesignPage.tsx",
                                        lineNumber: 675,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: " px-8 py-4 bg-gray text-[#B5C233] rounded-xl  transition-colors",
                                        style: {
                                            borderColor: "#0EA5E9",
                                            // borderBottomColor: "gray",
                                            boxShadow: "gray 0 0 4 0"
                                        },
                                        children: "Prendre rendez-vous"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/business-units/FimaDesignPage.tsx",
                                        lineNumber: 693,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/business-units/FimaDesignPage.tsx",
                                lineNumber: 674,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-8 flex items-center justify-center gap-8 opacity-75",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                className: "fa-solid fa-circle-check"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/business-units/FimaDesignPage.tsx",
                                                lineNumber: 707,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Devis "
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/business-units/FimaDesignPage.tsx",
                                                lineNumber: 708,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/business-units/FimaDesignPage.tsx",
                                        lineNumber: 706,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                className: "fa-solid fa-circle-check"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/business-units/FimaDesignPage.tsx",
                                                lineNumber: 711,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Conseil personnalisé"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/business-units/FimaDesignPage.tsx",
                                                lineNumber: 712,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/business-units/FimaDesignPage.tsx",
                                        lineNumber: 710,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                className: "fa-solid fa-circle-check"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/business-units/FimaDesignPage.tsx",
                                                lineNumber: 715,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Pose incluse"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/business-units/FimaDesignPage.tsx",
                                                lineNumber: 716,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/business-units/FimaDesignPage.tsx",
                                        lineNumber: 714,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/business-units/FimaDesignPage.tsx",
                                lineNumber: 705,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/business-units/FimaDesignPage.tsx",
                        lineNumber: 664,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/business-units/FimaDesignPage.tsx",
                    lineNumber: 663,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/business-units/FimaDesignPage.tsx",
                lineNumber: 656,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DeliveryInstallationModal$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["DeliveryInstallationModal"], {
                isOpen: isDeliveryModalOpen,
                onClose: ()=>setIsDeliveryModalOpen(false)
            }, void 0, false, {
                fileName: "[project]/src/components/business-units/FimaDesignPage.tsx",
                lineNumber: 724,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PersonalizationModal$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["PersonalizationModal"], {
                isOpen: isPersonalizationModalOpen,
                onClose: ()=>setIsPersonalizationModalOpen(false)
            }, void 0, false, {
                fileName: "[project]/src/components/business-units/FimaDesignPage.tsx",
                lineNumber: 730,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QualityExpertiseModal$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["QualityExpertiseModal"], {
                isOpen: isQualityModalOpen,
                onClose: ()=>setIsQualityModalOpen(false)
            }, void 0, false, {
                fileName: "[project]/src/components/business-units/FimaDesignPage.tsx",
                lineNumber: 736,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImageLightbox$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["ImageLightbox"], {
                isOpen: lightboxOpen,
                onClose: ()=>setLightboxOpen(false),
                images: lightboxImages,
                startIndex: lightboxIndex
            }, void 0, false, {
                fileName: "[project]/src/components/business-units/FimaDesignPage.tsx",
                lineNumber: 742,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/business-units/FimaDesignPage.tsx",
        lineNumber: 185,
        columnNumber: 5
    }, this);
}
_s(FimaDesignPage, "3oPwtpBGRO4rd7lFrI7l8fU3PPE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useProductCategories$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["useProductCategories"]
    ];
});
_c = FimaDesignPage;
var _c;
__turbopack_context__.k.register(_c, "FimaDesignPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_components_581a8959._.js.map