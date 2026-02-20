(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/suggestions/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SuggestionsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$authContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/authContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
/* -------------------- PERSONA DATA -------------------- */ const PERSONA_OUTFITS = {
    "Minimalist Maven": [
        {
            id: "mm1",
            title: "Neutral Power",
            image: "/suggestions/mm-1.jpg",
            description: "Clean lines. Timeless vibe."
        },
        {
            id: "mm2",
            title: "Soft Monochrome",
            image: "/suggestions/mm-2.jpg",
            description: "Understated elegance."
        }
    ],
    "Edgy Trendsetter": [
        {
            id: "et1",
            title: "Street Rebel",
            image: "/suggestions/et-1.jpg",
            description: "Bold and fearless."
        },
        {
            id: "et2",
            title: "Night Slay",
            image: "/suggestions/et-2.jpg",
            description: "Main character energy."
        }
    ],
    "Playful Creative": [
        {
            id: "pc1",
            title: "Color Pop",
            image: "/suggestions/pc-1.jpg",
            description: "Fun meets fashion."
        },
        {
            id: "pc2",
            title: "Art Girl",
            image: "/suggestions/pc-2.jpg",
            description: "Creative soul vibes."
        }
    ],
    "Romantic Softie": [
        {
            id: "rs1",
            title: "Soft Pastel Dream",
            image: "/suggestions/rs-1.jpg",
            description: "Whimsical and gentle."
        },
        {
            id: "rs2",
            title: "Cozy Romance",
            image: "/suggestions/rs-2.jpg",
            description: "Soft layered beauty."
        }
    ],
    "Comfort Queen": [
        {
            id: "cq1",
            title: "Elevated Lounge",
            image: "/suggestions/cq-1.jpg",
            description: "Comfort but make it cute."
        },
        {
            id: "cq2",
            title: "Chill Fit",
            image: "/suggestions/cq-2.jpg",
            description: "Relaxed and confident."
        }
    ],
    "Boho Spirit": [
        {
            id: "bs1",
            title: "Earthy Vibes",
            image: "/suggestions/bs-1.jpg",
            description: "Free spirited energy."
        },
        {
            id: "bs2",
            title: "Festival Queen",
            image: "/suggestions/bs-2.jpg",
            description: "Bohemian charm."
        }
    ],
    "Minimalist King": [
        {
            id: "mk1",
            title: "Clean Authority",
            image: "/suggestions/mk-1.jpg",
            description: "Sharp and refined."
        },
        {
            id: "mk2",
            title: "Neutral Boss",
            image: "/suggestions/mk-2.jpg",
            description: "Understated dominance."
        }
    ],
    "Streetwear Icon": [
        {
            id: "si1",
            title: "Hype Drop",
            image: "/suggestions/si-1.jpg",
            description: "Street certified."
        },
        {
            id: "si2",
            title: "Layer King",
            image: "/suggestions/si-2.jpg",
            description: "Urban edge."
        }
    ],
    "Modern Gentleman": [
        {
            id: "mg1",
            title: "Smart Casual",
            image: "/suggestions/mg-1.jpg",
            description: "Classy but chill."
        },
        {
            id: "mg2",
            title: "Evening Sharp",
            image: "/suggestions/mg-2.jpg",
            description: "Polished presence."
        }
    ],
    "Casual Cool": [
        {
            id: "cc1",
            title: "Weekend Fit",
            image: "/suggestions/cc-1.jpg",
            description: "Effortless drip."
        },
        {
            id: "cc2",
            title: "Denim Classic",
            image: "/suggestions/cc-2.jpg",
            description: "Simple but strong."
        }
    ],
    "Athleisure Pro": [
        {
            id: "ap1",
            title: "Gym Street",
            image: "/suggestions/ap-1.jpg",
            description: "Performance meets fashion."
        },
        {
            id: "ap2",
            title: "Sport Luxe",
            image: "/suggestions/ap-2.jpg",
            description: "Comfort domination."
        }
    ],
    "Urban Explorer": [
        {
            id: "ue1",
            title: "Adventure Core",
            image: "/suggestions/ue-1.jpg",
            description: "Functional and stylish."
        },
        {
            id: "ue2",
            title: "Rugged Layer",
            image: "/suggestions/ue-2.jpg",
            description: "Outdoor ready."
        }
    ]
};
function SuggestionsPage() {
    _s();
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$authContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [persona, setPersona] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [saved, setSaved] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Set());
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SuggestionsPage.useEffect": ()=>{
            const storedPersona = localStorage.getItem("userPersona");
            setPersona(storedPersona);
        }
    }["SuggestionsPage.useEffect"], []);
    // Load previously saved suggestion outfits from Supabase
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SuggestionsPage.useEffect": ()=>{
            if (!user) return;
            const loadSaved = {
                "SuggestionsPage.useEffect.loadSaved": async ()=>{
                    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("ai_outfit_images").select("ai_suggestion").eq("user_id", user.id);
                    if (!error && data) {
                        const ids = new Set(data.map({
                            "SuggestionsPage.useEffect.loadSaved": (row)=>{
                                const match = row.ai_suggestion?.match(/\[SID:([^\]]+)\]/);
                                return match ? match[1] : null;
                            }
                        }["SuggestionsPage.useEffect.loadSaved"]).filter(Boolean));
                        setSaved(ids);
                    }
                }
            }["SuggestionsPage.useEffect.loadSaved"];
            loadSaved();
        }
    }["SuggestionsPage.useEffect"], [
        user
    ]);
    const toggleSave = async (outfit)=>{
        const isSaved = saved.has(outfit.id);
        if (isSaved) {
            // Unsave
            setSaved((prev)=>{
                const next = new Set(prev);
                next.delete(outfit.id);
                return next;
            });
            if (user) {
                const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("ai_outfit_images").delete().eq("user_id", user.id).like("ai_suggestion", `%[SID:${outfit.id}]%`);
                if (error) console.error("Error removing saved outfit:", error);
            }
        } else {
            // Save
            setSaved((prev)=>new Set(prev).add(outfit.id));
            if (user) {
                const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("ai_outfit_images").insert({
                    user_id: user.id,
                    image_url: outfit.image,
                    ai_suggestion: `${outfit.title} - ${outfit.description} [SID:${outfit.id}]`
                });
                if (error) console.error("Error saving outfit:", error);
            }
        }
    };
    if (!persona) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-black text-white flex items-center justify-center",
            children: "Loading your style..."
        }, void 0, false, {
            fileName: "[project]/src/app/suggestions/page.tsx",
            lineNumber: 273,
            columnNumber: 7
        }, this);
    }
    const outfits = PERSONA_OUTFITS[persona] || [];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-black text-white px-6 py-20",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-6xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-4xl font-bold",
                            children: "Your Curated Fits"
                        }, void 0, false, {
                            fileName: "[project]/src/app/suggestions/page.tsx",
                            lineNumber: 286,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-400 mt-3",
                            children: [
                                "Persona: ",
                                persona
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/suggestions/page.tsx",
                            lineNumber: 289,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>router.push("/"),
                            className: "mt-4 text-gray-500 hover:text-white text-sm transition",
                            children: "🏠 Go Home"
                        }, void 0, false, {
                            fileName: "[project]/src/app/suggestions/page.tsx",
                            lineNumber: 292,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/suggestions/page.tsx",
                    lineNumber: 285,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid md:grid-cols-2 gap-10",
                    children: outfits.map((outfit)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-[#111] border border-[#1f1f1f] rounded-2xl overflow-hidden hover:border-white transition",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: outfit.image,
                                    alt: outfit.title,
                                    className: "w-full h-64 object-cover"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/suggestions/page.tsx",
                                    lineNumber: 306,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-xl font-semibold mb-2",
                                            children: outfit.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/suggestions/page.tsx",
                                            lineNumber: 313,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-400 text-sm mb-4",
                                            children: outfit.description
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/suggestions/page.tsx",
                                            lineNumber: 316,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>toggleSave(outfit),
                                            className: `px-5 py-2 rounded-full text-sm border transition ${saved.has(outfit.id) ? "bg-white text-black border-white" : "border-gray-600 hover:border-white"}`,
                                            children: saved.has(outfit.id) ? "✓ Saved" : "Save"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/suggestions/page.tsx",
                                            lineNumber: 320,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/suggestions/page.tsx",
                                    lineNumber: 312,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, outfit.id, true, {
                            fileName: "[project]/src/app/suggestions/page.tsx",
                            lineNumber: 302,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/app/suggestions/page.tsx",
                    lineNumber: 300,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/suggestions/page.tsx",
            lineNumber: 283,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/suggestions/page.tsx",
        lineNumber: 282,
        columnNumber: 5
    }, this);
}
_s(SuggestionsPage, "aUQ/rwBjBDYlAxKR7d4jN7D5vLE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$authContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = SuggestionsPage;
var _c;
__turbopack_context__.k.register(_c, "SuggestionsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/next/navigation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=_5ab7a7d2._.js.map