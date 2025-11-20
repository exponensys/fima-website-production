module.exports = [
"[project]/src/components/QuoteRequestModal.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "QuoteRequestModal",
    ()=>QuoteRequestModal
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
function QuoteRequestModal({ isOpen, onClose }) {
    const [step, setStep] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(1);
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])({
        // Informations client
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        // Type de projet
        projectType: '',
        businessUnit: [],
        budget: '',
        timeline: '',
        // Détails projet
        description: '',
        location: '',
        surface: '',
        specificRequirements: '',
        // Préférences contact
        preferredContact: 'email',
        preferredTime: 'morning',
        hasPlans: false,
        planFiles: []
    });
    const [emailError, setEmailError] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])('');
    const [phoneError, setPhoneError] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])('');
    const [fileError, setFileError] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])('');
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
    // Validation des fichiers (PDF, JPG, PNG uniquement)
    const validateFiles = (files)=>{
        if (!files || files.length === 0) {
            setFileError('');
            return null;
        }
        const allowedTypes = [
            'application/pdf',
            'image/jpeg',
            'image/jpg',
            'image/png'
        ];
        const allowedExtensions = [
            '.pdf',
            '.jpg',
            '.jpeg',
            '.png'
        ];
        const validFiles = [];
        const invalidFiles = [];
        Array.from(files).forEach((file)=>{
            const fileExtension = '.' + file.name.split('.').pop()?.toLowerCase();
            const isValidType = allowedTypes.includes(file.type);
            const isValidExtension = allowedExtensions.includes(fileExtension);
            if (isValidType || isValidExtension) {
                validFiles.push(file);
            } else {
                invalidFiles.push(file.name);
            }
        });
        if (invalidFiles.length > 0) {
            setFileError(`Formats non acceptés : ${invalidFiles.join(', ')}. Seuls les formats PDF, JPG et PNG sont autorisés.`);
            return null;
        }
        setFileError('');
        return validFiles;
    };
    const handleFileChange = (e)=>{
        const validFiles = validateFiles(e.target.files);
        if (validFiles) {
            handleInputChange('planFiles', validFiles);
        }
    };
    const businessUnits = [
        {
            id: 'fima-couchage',
            name: 'FIMA Couchage',
            icon: '🛏️',
            description: 'Literie & mobilier de chambre'
        },
        {
            id: 'fima-design',
            name: 'FIMA Design',
            icon: '🔨',
            description: 'Menuiserie & ameublement'
        },
        {
            id: 'univers-glass',
            name: 'UNIVERS GLASS',
            icon: '🏗️',
            description: 'Vitrerie & aluminium'
        }
    ];
    const projectTypes = [
        {
            id: 'residential',
            name: 'Projet résidentiel',
            description: 'Maison, appartement, villa'
        },
        {
            id: 'commercial',
            name: 'Projet commercial',
            description: 'Bureau, magasin, restaurant'
        },
        {
            id: 'hospitality',
            name: 'Hôtellerie',
            description: 'Hôtel, résidence, guesthouse'
        },
        {
            id: 'institutional',
            name: 'Institutionnel',
            description: 'Administration, école, clinique'
        },
        {
            id: 'industrial',
            name: 'Industriel',
            description: 'Usine, entrepôt, atelier'
        }
    ];
    const budgetRanges = [
        {
            id: 'under-5m',
            name: 'Moins de 5M FCFA'
        },
        {
            id: '5m-15m',
            name: '5M - 15M FCFA'
        },
        {
            id: '15m-50m',
            name: '15M - 50M FCFA'
        },
        {
            id: '50m-100m',
            name: '50M - 100M FCFA'
        },
        {
            id: 'over-100m',
            name: 'Plus de 100M FCFA'
        },
        {
            id: 'to-discuss',
            name: 'À discuter'
        }
    ];
    const timelineOptions = [
        {
            id: 'urgent',
            name: 'Urgent (< 1 mois)'
        },
        {
            id: '1-3months',
            name: '1 à 3 mois'
        },
        {
            id: '3-6months',
            name: '3 à 6 mois'
        },
        {
            id: '6-12months',
            name: '6 à 12 mois'
        },
        {
            id: 'flexible',
            name: 'Flexible'
        }
    ];
    const handleInputChange = (field, value)=>{
        setFormData((prev)=>({
                ...prev,
                [field]: value
            }));
    };
    const handleBusinessUnitToggle = (unitId)=>{
        setFormData((prev)=>({
                ...prev,
                businessUnit: prev.businessUnit.includes(unitId) ? prev.businessUnit.filter((id)=>id !== unitId) : [
                    ...prev.businessUnit,
                    unitId
                ]
            }));
    };
    const handleSubmit = ()=>{
        // Ici, vous ajouteriez la logique d'envoi du formulaire
        console.log('Données du formulaire:', formData);
        setStep(4); // Étape de confirmation
    };
    const handleClose = ()=>{
        setStep(1);
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            company: '',
            projectType: '',
            businessUnit: [],
            budget: '',
            timeline: '',
            description: '',
            location: '',
            surface: '',
            specificRequirements: '',
            preferredContact: 'email',
            preferredTime: 'morning',
            hasPlans: false,
            planFiles: []
        });
        setEmailError('');
        setPhoneError('');
        setFileError('');
        onClose();
    };
    if (!isOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between p-6 border-b border-gray-200",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                    className: "text-2xl font-bold",
                                    style: {
                                        fontFamily: 'Montserrat',
                                        color: '#000000'
                                    },
                                    children: "Demande de devis"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/QuoteRequestModal.tsx",
                                    lineNumber: 194,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                    style: {
                                        color: '#6E6E6E'
                                    },
                                    children: [
                                        "Étape ",
                                        step,
                                        " sur 3 • Réponse sous 24h garantie"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/QuoteRequestModal.tsx",
                                    lineNumber: 197,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/QuoteRequestModal.tsx",
                            lineNumber: 193,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                            onClick: handleClose,
                            className: "p-2 hover:bg-gray-100 rounded-full transition-colors",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$react$2d$fontawesome__$5b$external$5d$__$2840$fortawesome$2f$react$2d$fontawesome$2c$__esm_import$29$__["FontAwesomeIcon"], {
                                icon: __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons__$5b$external$5d$__$2840$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2c$__esm_import$29$__["faXmark"],
                                className: "w-6 h-6"
                            }, void 0, false, {
                                fileName: "[project]/src/components/QuoteRequestModal.tsx",
                                lineNumber: 205,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/QuoteRequestModal.tsx",
                            lineNumber: 201,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/QuoteRequestModal.tsx",
                    lineNumber: 192,
                    columnNumber: 9
                }, this),
                step < 4 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "px-6 py-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "w-full bg-gray-200 rounded-full h-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "h-2 rounded-full transition-all duration-300",
                            style: {
                                width: `${step / 3 * 100}%`,
                                backgroundColor: '#B5C233'
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/QuoteRequestModal.tsx",
                            lineNumber: 213,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/QuoteRequestModal.tsx",
                        lineNumber: 212,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/QuoteRequestModal.tsx",
                    lineNumber: 211,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "p-6",
                    children: [
                        step === 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "space-y-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-semibold mb-4",
                                            style: {
                                                color: '#000000'
                                            },
                                            children: "Vos informations"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/QuoteRequestModal.tsx",
                                            lineNumber: 226,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                                            className: "block text-sm font-medium mb-2",
                                                            style: {
                                                                color: '#000000'
                                                            },
                                                            children: "Prénom *"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/QuoteRequestModal.tsx",
                                                            lineNumber: 231,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                            className: "relative",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$react$2d$fontawesome__$5b$external$5d$__$2840$fortawesome$2f$react$2d$fontawesome$2c$__esm_import$29$__["FontAwesomeIcon"], {
                                                                    icon: __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons__$5b$external$5d$__$2840$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2c$__esm_import$29$__["faUser"],
                                                                    className: "absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/QuoteRequestModal.tsx",
                                                                    lineNumber: 235,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                                                    type: "text",
                                                                    value: formData.firstName,
                                                                    onChange: (e)=>handleInputChange('firstName', e.target.value),
                                                                    className: "w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500",
                                                                    placeholder: "Votre prénom",
                                                                    required: true
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/QuoteRequestModal.tsx",
                                                                    lineNumber: 236,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/QuoteRequestModal.tsx",
                                                            lineNumber: 234,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/QuoteRequestModal.tsx",
                                                    lineNumber: 230,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                                            className: "block text-sm font-medium mb-2",
                                                            style: {
                                                                color: '#000000'
                                                            },
                                                            children: "Nom *"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/QuoteRequestModal.tsx",
                                                            lineNumber: 248,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            value: formData.lastName,
                                                            onChange: (e)=>handleInputChange('lastName', e.target.value),
                                                            className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500",
                                                            placeholder: "Votre nom",
                                                            required: true
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/QuoteRequestModal.tsx",
                                                            lineNumber: 251,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/QuoteRequestModal.tsx",
                                                    lineNumber: 247,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                                            className: "block text-sm font-medium mb-2",
                                                            style: {
                                                                color: '#000000'
                                                            },
                                                            children: "Email *"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/QuoteRequestModal.tsx",
                                                            lineNumber: 262,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                            className: "relative",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$react$2d$fontawesome__$5b$external$5d$__$2840$fortawesome$2f$react$2d$fontawesome$2c$__esm_import$29$__["FontAwesomeIcon"], {
                                                                    icon: __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons__$5b$external$5d$__$2840$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2c$__esm_import$29$__["faEnvelope"],
                                                                    className: "absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/QuoteRequestModal.tsx",
                                                                    lineNumber: 266,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                                                    type: "email",
                                                                    value: formData.email,
                                                                    onChange: (e)=>{
                                                                        handleInputChange('email', e.target.value);
                                                                        validateEmail(e.target.value);
                                                                    },
                                                                    className: "w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500",
                                                                    placeholder: "votre@email.com",
                                                                    required: true
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/QuoteRequestModal.tsx",
                                                                    lineNumber: 267,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/QuoteRequestModal.tsx",
                                                            lineNumber: 265,
                                                            columnNumber: 21
                                                        }, this),
                                                        emailError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                            className: "text-red-500 text-sm mt-1",
                                                            children: emailError
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/QuoteRequestModal.tsx",
                                                            lineNumber: 279,
                                                            columnNumber: 36
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/QuoteRequestModal.tsx",
                                                    lineNumber: 261,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                                            className: "block text-sm font-medium mb-2",
                                                            style: {
                                                                color: '#000000'
                                                            },
                                                            children: "Téléphone *"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/QuoteRequestModal.tsx",
                                                            lineNumber: 283,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                            className: "relative",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$react$2d$fontawesome__$5b$external$5d$__$2840$fortawesome$2f$react$2d$fontawesome$2c$__esm_import$29$__["FontAwesomeIcon"], {
                                                                    icon: __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons__$5b$external$5d$__$2840$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2c$__esm_import$29$__["faPhone"],
                                                                    className: "absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/QuoteRequestModal.tsx",
                                                                    lineNumber: 287,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                                                    type: "tel",
                                                                    value: formData.phone,
                                                                    onChange: (e)=>{
                                                                        handleInputChange('phone', e.target.value);
                                                                        validatePhone(e.target.value);
                                                                    },
                                                                    className: "w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500",
                                                                    placeholder: "+225 XX XX XX XX",
                                                                    required: true
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/QuoteRequestModal.tsx",
                                                                    lineNumber: 288,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/QuoteRequestModal.tsx",
                                                            lineNumber: 286,
                                                            columnNumber: 21
                                                        }, this),
                                                        phoneError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                            className: "text-red-500 text-sm mt-1",
                                                            children: phoneError
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/QuoteRequestModal.tsx",
                                                            lineNumber: 300,
                                                            columnNumber: 36
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/QuoteRequestModal.tsx",
                                                    lineNumber: 282,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    className: "md:col-span-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                                            className: "block text-sm font-medium mb-2",
                                                            style: {
                                                                color: '#000000'
                                                            },
                                                            children: "Entreprise / Organisation"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/QuoteRequestModal.tsx",
                                                            lineNumber: 304,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                            className: "relative",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$react$2d$fontawesome__$5b$external$5d$__$2840$fortawesome$2f$react$2d$fontawesome$2c$__esm_import$29$__["FontAwesomeIcon"], {
                                                                    icon: __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons__$5b$external$5d$__$2840$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2c$__esm_import$29$__["faBuilding"],
                                                                    className: "absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/QuoteRequestModal.tsx",
                                                                    lineNumber: 308,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                                                    type: "text",
                                                                    value: formData.company,
                                                                    onChange: (e)=>handleInputChange('company', e.target.value),
                                                                    className: "w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500",
                                                                    placeholder: "Nom de votre entreprise (optionnel)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/QuoteRequestModal.tsx",
                                                                    lineNumber: 309,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/QuoteRequestModal.tsx",
                                                            lineNumber: 307,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/QuoteRequestModal.tsx",
                                                    lineNumber: 303,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/QuoteRequestModal.tsx",
                                            lineNumber: 229,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/QuoteRequestModal.tsx",
                                    lineNumber: 225,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "flex justify-end",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setStep(2),
                                        disabled: !formData.firstName || !formData.lastName || !formData.email || !formData.phone,
                                        className: "fima-btn-primary px-8 py-3 disabled:opacity-50 disabled:cursor-not-allowed",
                                        children: "Continuer"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/QuoteRequestModal.tsx",
                                        lineNumber: 322,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/QuoteRequestModal.tsx",
                                    lineNumber: 321,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/QuoteRequestModal.tsx",
                            lineNumber: 224,
                            columnNumber: 13
                        }, this),
                        step === 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "space-y-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-semibold mb-4",
                                            style: {
                                                color: '#000000'
                                            },
                                            children: "Votre projet"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/QuoteRequestModal.tsx",
                                            lineNumber: 337,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "mb-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-medium mb-3",
                                                    style: {
                                                        color: '#000000'
                                                    },
                                                    children: "Type de projet *"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/QuoteRequestModal.tsx",
                                                    lineNumber: 343,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-1 md:grid-cols-2 gap-3",
                                                    children: projectTypes.map((type)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>handleInputChange('projectType', type.id),
                                                            className: "p-4 border-2 rounded-lg text-left transition-colors",
                                                            style: {
                                                                borderColor: formData.projectType === type.id ? '#B5C233' : '#d1d5db',
                                                                backgroundColor: formData.projectType === type.id ? 'rgba(181, 194, 51, 0.05)' : 'transparent'
                                                            },
                                                            onMouseEnter: (e)=>{
                                                                if (formData.projectType !== type.id) e.currentTarget.style.borderColor = '#B5C233';
                                                            },
                                                            onMouseLeave: (e)=>{
                                                                if (formData.projectType !== type.id) e.currentTarget.style.borderColor = '#d1d5db';
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                    className: "font-medium",
                                                                    style: {
                                                                        color: '#000000'
                                                                    },
                                                                    children: type.name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/QuoteRequestModal.tsx",
                                                                    lineNumber: 363,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                    className: "text-sm text-gray-600",
                                                                    children: type.description
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/QuoteRequestModal.tsx",
                                                                    lineNumber: 366,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, type.id, true, {
                                                            fileName: "[project]/src/components/QuoteRequestModal.tsx",
                                                            lineNumber: 348,
                                                            columnNumber: 23
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/QuoteRequestModal.tsx",
                                                    lineNumber: 346,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/QuoteRequestModal.tsx",
                                            lineNumber: 342,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "mb-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-medium mb-3",
                                                    style: {
                                                        color: '#000000'
                                                    },
                                                    children: "Métiers concernés * (plusieurs choix possibles)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/QuoteRequestModal.tsx",
                                                    lineNumber: 376,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-1 md:grid-cols-3 gap-3",
                                                    children: businessUnits.map((unit)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>handleBusinessUnitToggle(unit.id),
                                                            className: "p-4 border-2 rounded-lg text-left transition-colors",
                                                            style: {
                                                                borderColor: formData.businessUnit.includes(unit.id) ? '#B5C233' : '#d1d5db',
                                                                backgroundColor: formData.businessUnit.includes(unit.id) ? 'rgba(181, 194, 51, 0.05)' : 'transparent'
                                                            },
                                                            onMouseEnter: (e)=>{
                                                                if (!formData.businessUnit.includes(unit.id)) e.currentTarget.style.borderColor = '#B5C233';
                                                            },
                                                            onMouseLeave: (e)=>{
                                                                if (!formData.businessUnit.includes(unit.id)) e.currentTarget.style.borderColor = '#d1d5db';
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-3 mb-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                            className: "text-2xl",
                                                                            children: unit.icon
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/QuoteRequestModal.tsx",
                                                                            lineNumber: 397,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                            className: "font-medium",
                                                                            style: {
                                                                                color: '#000000'
                                                                            },
                                                                            children: unit.name
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/QuoteRequestModal.tsx",
                                                                            lineNumber: 398,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/QuoteRequestModal.tsx",
                                                                    lineNumber: 396,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                    className: "text-sm text-gray-600",
                                                                    children: unit.description
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/QuoteRequestModal.tsx",
                                                                    lineNumber: 402,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, unit.id, true, {
                                                            fileName: "[project]/src/components/QuoteRequestModal.tsx",
                                                            lineNumber: 381,
                                                            columnNumber: 23
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/QuoteRequestModal.tsx",
                                                    lineNumber: 379,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/QuoteRequestModal.tsx",
                                            lineNumber: 375,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                                            className: "block text-sm font-medium mb-3",
                                                            style: {
                                                                color: '#000000'
                                                            },
                                                            children: "Budget envisagé"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/QuoteRequestModal.tsx",
                                                            lineNumber: 413,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("select", {
                                                            value: formData.budget,
                                                            onChange: (e)=>handleInputChange('budget', e.target.value),
                                                            className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                                    value: "",
                                                                    children: "Sélectionner une fourchette"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/QuoteRequestModal.tsx",
                                                                    lineNumber: 421,
                                                                    columnNumber: 23
                                                                }, this),
                                                                budgetRanges.map((range)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                                        value: range.id,
                                                                        children: range.name
                                                                    }, range.id, false, {
                                                                        fileName: "[project]/src/components/QuoteRequestModal.tsx",
                                                                        lineNumber: 423,
                                                                        columnNumber: 25
                                                                    }, this))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/QuoteRequestModal.tsx",
                                                            lineNumber: 416,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/QuoteRequestModal.tsx",
                                                    lineNumber: 412,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                                            className: "block text-sm font-medium mb-3",
                                                            style: {
                                                                color: '#000000'
                                                            },
                                                            children: "Délai souhaité"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/QuoteRequestModal.tsx",
                                                            lineNumber: 431,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("select", {
                                                            value: formData.timeline,
                                                            onChange: (e)=>handleInputChange('timeline', e.target.value),
                                                            className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                                    value: "",
                                                                    children: "Sélectionner un délai"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/QuoteRequestModal.tsx",
                                                                    lineNumber: 439,
                                                                    columnNumber: 23
                                                                }, this),
                                                                timelineOptions.map((timeline)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                                        value: timeline.id,
                                                                        children: timeline.name
                                                                    }, timeline.id, false, {
                                                                        fileName: "[project]/src/components/QuoteRequestModal.tsx",
                                                                        lineNumber: 441,
                                                                        columnNumber: 25
                                                                    }, this))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/QuoteRequestModal.tsx",
                                                            lineNumber: 434,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/QuoteRequestModal.tsx",
                                                    lineNumber: 430,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/QuoteRequestModal.tsx",
                                            lineNumber: 411,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/QuoteRequestModal.tsx",
                                    lineNumber: 336,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setStep(1),
                                            className: "fima-btn-secondary px-8 py-3",
                                            style: {
                                                backgroundColor: '#6E6E6E',
                                                color: '#B5C233'
                                            },
                                            children: "Précédent"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/QuoteRequestModal.tsx",
                                            lineNumber: 451,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setStep(3),
                                            disabled: !formData.projectType || formData.businessUnit.length === 0,
                                            className: "fima-btn-primary px-8 py-3 disabled:opacity-50 disabled:cursor-not-allowed",
                                            children: "Continuer"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/QuoteRequestModal.tsx",
                                            lineNumber: 458,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/QuoteRequestModal.tsx",
                                    lineNumber: 450,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/QuoteRequestModal.tsx",
                            lineNumber: 335,
                            columnNumber: 13
                        }, this),
                        step === 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "space-y-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-semibold mb-4",
                                            style: {
                                                color: '#000000'
                                            },
                                            children: "Détails de votre projet"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/QuoteRequestModal.tsx",
                                            lineNumber: 473,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "space-y-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                                            className: "block text-sm font-medium mb-2",
                                                            style: {
                                                                color: '#000000'
                                                            },
                                                            children: "Description du projet *"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/QuoteRequestModal.tsx",
                                                            lineNumber: 479,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                            className: "relative",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$react$2d$fontawesome__$5b$external$5d$__$2840$fortawesome$2f$react$2d$fontawesome$2c$__esm_import$29$__["FontAwesomeIcon"], {
                                                                    icon: __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons__$5b$external$5d$__$2840$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2c$__esm_import$29$__["faFileText"],
                                                                    className: "absolute left-3 top-3 w-5 h-5 text-gray-400"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/QuoteRequestModal.tsx",
                                                                    lineNumber: 483,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("textarea", {
                                                                    value: formData.description,
                                                                    onChange: (e)=>handleInputChange('description', e.target.value),
                                                                    className: "w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 min-h-[120px]",
                                                                    placeholder: "Décrivez votre projet en détail : objectifs, contraintes, préférences...",
                                                                    required: true
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/QuoteRequestModal.tsx",
                                                                    lineNumber: 484,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/QuoteRequestModal.tsx",
                                                            lineNumber: 482,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/QuoteRequestModal.tsx",
                                                    lineNumber: 478,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                                                    className: "block text-sm font-medium mb-2",
                                                                    style: {
                                                                        color: '#000000'
                                                                    },
                                                                    children: "Localisation"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/QuoteRequestModal.tsx",
                                                                    lineNumber: 496,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                                                    type: "text",
                                                                    value: formData.location,
                                                                    onChange: (e)=>handleInputChange('location', e.target.value),
                                                                    className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500",
                                                                    placeholder: "Ville, quartier..."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/QuoteRequestModal.tsx",
                                                                    lineNumber: 499,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/QuoteRequestModal.tsx",
                                                            lineNumber: 495,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                                                    className: "block text-sm font-medium mb-2",
                                                                    style: {
                                                                        color: '#000000'
                                                                    },
                                                                    children: "Surface approximative"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/QuoteRequestModal.tsx",
                                                                    lineNumber: 509,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                                                    type: "text",
                                                                    value: formData.surface,
                                                                    onChange: (e)=>handleInputChange('surface', e.target.value),
                                                                    className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500",
                                                                    placeholder: "Ex: 150 m², 50 chambres..."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/QuoteRequestModal.tsx",
                                                                    lineNumber: 512,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/QuoteRequestModal.tsx",
                                                            lineNumber: 508,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/QuoteRequestModal.tsx",
                                                    lineNumber: 494,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                                            className: "block text-sm font-medium mb-2",
                                                            style: {
                                                                color: '#000000'
                                                            },
                                                            children: "Exigences particulières"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/QuoteRequestModal.tsx",
                                                            lineNumber: 523,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("textarea", {
                                                            value: formData.specificRequirements,
                                                            onChange: (e)=>handleInputChange('specificRequirements', e.target.value),
                                                            className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500",
                                                            placeholder: "Normes spécifiques, contraintes techniques, préférences de style...",
                                                            rows: 3
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/QuoteRequestModal.tsx",
                                                            lineNumber: 526,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/QuoteRequestModal.tsx",
                                                    lineNumber: 522,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    className: "bg-gray-50 rounded-lg p-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h4", {
                                                            className: "font-medium mb-3",
                                                            style: {
                                                                color: '#000000'
                                                            },
                                                            children: "Préférences de contact"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/QuoteRequestModal.tsx",
                                                            lineNumber: 537,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                            className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                                                            className: "block text-sm font-medium mb-2",
                                                                            style: {
                                                                                color: '#000000'
                                                                            },
                                                                            children: "Mode de contact préféré"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/QuoteRequestModal.tsx",
                                                                            lineNumber: 543,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("select", {
                                                                            value: formData.preferredContact,
                                                                            onChange: (e)=>handleInputChange('preferredContact', e.target.value),
                                                                            className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                                                    value: "email",
                                                                                    children: "Email"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/QuoteRequestModal.tsx",
                                                                                    lineNumber: 551,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                                                    value: "phone",
                                                                                    children: "Téléphone"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/QuoteRequestModal.tsx",
                                                                                    lineNumber: 552,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                                                    value: "whatsapp",
                                                                                    children: "WhatsApp"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/QuoteRequestModal.tsx",
                                                                                    lineNumber: 553,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                                                    value: "visit",
                                                                                    children: "Visite sur site"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/QuoteRequestModal.tsx",
                                                                                    lineNumber: 554,
                                                                                    columnNumber: 27
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/QuoteRequestModal.tsx",
                                                                            lineNumber: 546,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/QuoteRequestModal.tsx",
                                                                    lineNumber: 542,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                                                            className: "block text-sm font-medium mb-2",
                                                                            style: {
                                                                                color: '#000000'
                                                                            },
                                                                            children: "Meilleur moment pour vous contacter"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/QuoteRequestModal.tsx",
                                                                            lineNumber: 559,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("select", {
                                                                            value: formData.preferredTime,
                                                                            onChange: (e)=>handleInputChange('preferredTime', e.target.value),
                                                                            className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                                                    value: "morning",
                                                                                    children: "Matin (8h-12h)"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/QuoteRequestModal.tsx",
                                                                                    lineNumber: 567,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                                                    value: "afternoon",
                                                                                    children: "Après-midi (12h-17h)"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/QuoteRequestModal.tsx",
                                                                                    lineNumber: 568,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                                                    value: "evening",
                                                                                    children: "Soirée (17h-20h)"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/QuoteRequestModal.tsx",
                                                                                    lineNumber: 569,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                                                    value: "anytime",
                                                                                    children: "N'importe quand"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/QuoteRequestModal.tsx",
                                                                                    lineNumber: 570,
                                                                                    columnNumber: 27
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/QuoteRequestModal.tsx",
                                                                            lineNumber: 562,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/QuoteRequestModal.tsx",
                                                                    lineNumber: 558,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/QuoteRequestModal.tsx",
                                                            lineNumber: 541,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                            className: "mt-4",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                                                className: "flex items-center gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                                                        type: "checkbox",
                                                                        checked: formData.hasPlans,
                                                                        onChange: (e)=>handleInputChange('hasPlans', e.target.checked),
                                                                        className: "rounded border-gray-300 focus:ring-green-500"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/QuoteRequestModal.tsx",
                                                                        lineNumber: 577,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                        className: "text-sm",
                                                                        style: {
                                                                            color: '#000000'
                                                                        },
                                                                        children: "J'ai des plans ou documents techniques à partager"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/QuoteRequestModal.tsx",
                                                                        lineNumber: 583,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/QuoteRequestModal.tsx",
                                                                lineNumber: 576,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/QuoteRequestModal.tsx",
                                                            lineNumber: 575,
                                                            columnNumber: 21
                                                        }, this),
                                                        formData.hasPlans && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                            className: "mt-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                                                    className: "block text-sm font-medium mb-2",
                                                                    style: {
                                                                        color: '#000000'
                                                                    },
                                                                    children: "Télécharger les plans ou documents techniques (PDF, JPG, PNG uniquement)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/QuoteRequestModal.tsx",
                                                                    lineNumber: 591,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                    className: "space-y-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                            className: "flex items-center gap-4",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                                                                    type: "file",
                                                                                    multiple: true,
                                                                                    accept: ".pdf,.jpg,.jpeg,.png,application/pdf,image/jpeg,image/png",
                                                                                    onChange: handleFileChange,
                                                                                    className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/QuoteRequestModal.tsx",
                                                                                    lineNumber: 596,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                                                    type: "button",
                                                                                    className: "fima-btn-secondary px-4 py-2 flex-shrink-0",
                                                                                    style: {
                                                                                        backgroundColor: '#6E6E6E',
                                                                                        color: '#B5C233'
                                                                                    },
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$react$2d$fontawesome__$5b$external$5d$__$2840$fortawesome$2f$react$2d$fontawesome$2c$__esm_import$29$__["FontAwesomeIcon"], {
                                                                                        icon: __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons__$5b$external$5d$__$2840$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2c$__esm_import$29$__["faUpload"],
                                                                                        className: "w-4 h-4"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/QuoteRequestModal.tsx",
                                                                                        lineNumber: 608,
                                                                                        columnNumber: 31
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/QuoteRequestModal.tsx",
                                                                                    lineNumber: 603,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/QuoteRequestModal.tsx",
                                                                            lineNumber: 595,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                                            className: "text-xs text-gray-500",
                                                                            children: "Formats acceptés : PDF, JPG, PNG • Taille max : 10 Mo par fichier"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/QuoteRequestModal.tsx",
                                                                            lineNumber: 611,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        fileError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                                            className: "text-red-500 text-sm",
                                                                            children: fileError
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/QuoteRequestModal.tsx",
                                                                            lineNumber: 614,
                                                                            columnNumber: 41
                                                                        }, this),
                                                                        formData.planFiles.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                            className: "mt-2",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                                                    className: "text-sm font-medium mb-1",
                                                                                    style: {
                                                                                        color: '#000000'
                                                                                    },
                                                                                    children: [
                                                                                        "Fichiers sélectionnés (",
                                                                                        formData.planFiles.length,
                                                                                        ") :"
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/components/QuoteRequestModal.tsx",
                                                                                    lineNumber: 617,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("ul", {
                                                                                    className: "text-xs space-y-1",
                                                                                    children: formData.planFiles.map((file, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                                                                            className: "flex items-center gap-2 text-gray-600",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$react$2d$fontawesome__$5b$external$5d$__$2840$fortawesome$2f$react$2d$fontawesome$2c$__esm_import$29$__["FontAwesomeIcon"], {
                                                                                                    icon: __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons__$5b$external$5d$__$2840$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2c$__esm_import$29$__["faFileText"],
                                                                                                    className: "w-3 h-3"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/components/QuoteRequestModal.tsx",
                                                                                                    lineNumber: 623,
                                                                                                    columnNumber: 37
                                                                                                }, this),
                                                                                                file.name,
                                                                                                " (",
                                                                                                (file.size / 1024).toFixed(1),
                                                                                                " Ko)"
                                                                                            ]
                                                                                        }, index, true, {
                                                                                            fileName: "[project]/src/components/QuoteRequestModal.tsx",
                                                                                            lineNumber: 622,
                                                                                            columnNumber: 35
                                                                                        }, this))
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/QuoteRequestModal.tsx",
                                                                                    lineNumber: 620,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/QuoteRequestModal.tsx",
                                                                            lineNumber: 616,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/QuoteRequestModal.tsx",
                                                                    lineNumber: 594,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/QuoteRequestModal.tsx",
                                                            lineNumber: 590,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/QuoteRequestModal.tsx",
                                                    lineNumber: 536,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/QuoteRequestModal.tsx",
                                            lineNumber: 477,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/QuoteRequestModal.tsx",
                                    lineNumber: 472,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setStep(2),
                                            className: "fima-btn-secondary px-8 py-3",
                                            style: {
                                                backgroundColor: '#6E6E6E',
                                                color: '#B5C233'
                                            },
                                            children: "Précédent"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/QuoteRequestModal.tsx",
                                            lineNumber: 638,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                            onClick: handleSubmit,
                                            disabled: !formData.description,
                                            className: "fima-btn-primary px-8 py-3 disabled:opacity-50 disabled:cursor-not-allowed",
                                            children: "Envoyer la demande"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/QuoteRequestModal.tsx",
                                            lineNumber: 645,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/QuoteRequestModal.tsx",
                                    lineNumber: 637,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/QuoteRequestModal.tsx",
                            lineNumber: 471,
                            columnNumber: 13
                        }, this),
                        step === 4 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "text-center space-y-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "w-20 h-20 rounded-full flex items-center justify-center mx-auto",
                                    style: {
                                        backgroundColor: 'rgba(181, 194, 51, 0.1)'
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$react$2d$fontawesome__$5b$external$5d$__$2840$fortawesome$2f$react$2d$fontawesome$2c$__esm_import$29$__["FontAwesomeIcon"], {
                                        icon: __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons__$5b$external$5d$__$2840$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2c$__esm_import$29$__["faCheckCircle"],
                                        className: "w-12 h-12",
                                        style: {
                                            color: '#B5C233'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/QuoteRequestModal.tsx",
                                        lineNumber: 660,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/QuoteRequestModal.tsx",
                                    lineNumber: 659,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                            className: "text-2xl font-bold mb-4",
                                            style: {
                                                fontFamily: 'Montserrat',
                                                color: '#000000'
                                            },
                                            children: "Demande envoyée avec succès !"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/QuoteRequestModal.tsx",
                                            lineNumber: 664,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                            className: "text-lg mb-4",
                                            style: {
                                                color: '#6E6E6E'
                                            },
                                            children: [
                                                "Merci ",
                                                formData.firstName,
                                                " pour votre confiance. Votre demande a été transmise à nos experts."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/QuoteRequestModal.tsx",
                                            lineNumber: 667,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/QuoteRequestModal.tsx",
                                    lineNumber: 663,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "rounded-lg p-6",
                                    style: {
                                        backgroundColor: 'rgba(181, 194, 51, 0.05)'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h4", {
                                            className: "font-semibold mb-3",
                                            style: {
                                                color: '#000000'
                                            },
                                            children: "Prochaines étapes :"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/QuoteRequestModal.tsx",
                                            lineNumber: 673,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "space-y-2 text-sm",
                                            style: {
                                                color: '#6E6E6E'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$react$2d$fontawesome__$5b$external$5d$__$2840$fortawesome$2f$react$2d$fontawesome$2c$__esm_import$29$__["FontAwesomeIcon"], {
                                                            icon: __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons__$5b$external$5d$__$2840$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2c$__esm_import$29$__["faCheckCircle"],
                                                            className: "w-4 h-4",
                                                            style: {
                                                                color: '#B5C233'
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/QuoteRequestModal.tsx",
                                                            lineNumber: 678,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                            children: "Réception de votre demande confirmée"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/QuoteRequestModal.tsx",
                                                            lineNumber: 679,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/QuoteRequestModal.tsx",
                                                    lineNumber: 677,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$react$2d$fontawesome__$5b$external$5d$__$2840$fortawesome$2f$react$2d$fontawesome$2c$__esm_import$29$__["FontAwesomeIcon"], {
                                                            icon: __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons__$5b$external$5d$__$2840$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2c$__esm_import$29$__["faCalendar"],
                                                            className: "w-4 h-4",
                                                            style: {
                                                                color: '#B5C233'
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/QuoteRequestModal.tsx",
                                                            lineNumber: 682,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                            children: "Étude technique sous 24h"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/QuoteRequestModal.tsx",
                                                            lineNumber: 683,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/QuoteRequestModal.tsx",
                                                    lineNumber: 681,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$react$2d$fontawesome__$5b$external$5d$__$2840$fortawesome$2f$react$2d$fontawesome$2c$__esm_import$29$__["FontAwesomeIcon"], {
                                                            icon: __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons__$5b$external$5d$__$2840$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2c$__esm_import$29$__["faUser"],
                                                            className: "w-4 h-4",
                                                            style: {
                                                                color: '#B5C233'
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/QuoteRequestModal.tsx",
                                                            lineNumber: 686,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                            children: "Contact par nos experts sous 48h"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/QuoteRequestModal.tsx",
                                                            lineNumber: 687,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/QuoteRequestModal.tsx",
                                                    lineNumber: 685,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$react$2d$fontawesome__$5b$external$5d$__$2840$fortawesome$2f$react$2d$fontawesome$2c$__esm_import$29$__["FontAwesomeIcon"], {
                                                            icon: __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons__$5b$external$5d$__$2840$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2c$__esm_import$29$__["faFileText"],
                                                            className: "w-4 h-4",
                                                            style: {
                                                                color: '#B5C233'
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/QuoteRequestModal.tsx",
                                                            lineNumber: 690,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                            children: "Devis détaillé sous 5 jours ouvrés"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/QuoteRequestModal.tsx",
                                                            lineNumber: 691,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/QuoteRequestModal.tsx",
                                                    lineNumber: 689,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/QuoteRequestModal.tsx",
                                            lineNumber: 676,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/QuoteRequestModal.tsx",
                                    lineNumber: 672,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "space-y-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                            className: "text-sm",
                                            style: {
                                                color: '#6E6E6E'
                                            },
                                            children: [
                                                "Un email de confirmation a été envoyé à ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("strong", {
                                                    children: formData.email
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/QuoteRequestModal.tsx",
                                                    lineNumber: 698,
                                                    columnNumber: 59
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/QuoteRequestModal.tsx",
                                            lineNumber: 697,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                            onClick: handleClose,
                                            className: "fima-btn-primary px-8 py-3",
                                            children: "Fermer"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/QuoteRequestModal.tsx",
                                            lineNumber: 700,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/QuoteRequestModal.tsx",
                                    lineNumber: 696,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/QuoteRequestModal.tsx",
                            lineNumber: 658,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/QuoteRequestModal.tsx",
                    lineNumber: 221,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/QuoteRequestModal.tsx",
            lineNumber: 190,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/QuoteRequestModal.tsx",
        lineNumber: 189,
        columnNumber: 5
    }, this);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=src_components_QuoteRequestModal_tsx_5a119b13._.js.map