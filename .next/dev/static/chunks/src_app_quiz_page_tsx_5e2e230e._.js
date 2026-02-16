(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/quiz/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "QUESTIONS_FEMALE",
    ()=>QUESTIONS_FEMALE,
    "QUESTIONS_MALE",
    ()=>QUESTIONS_MALE,
    "default",
    ()=>SuggestionsQuizPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
/* ================= ICONS ================= */ const Icons = {
    Sparkles: (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            ...props,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3L12 3Z"
            }, void 0, false, {
                fileName: "[project]/src/app/quiz/page.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/quiz/page.tsx",
            lineNumber: 41,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0)),
    Check: (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            ...props,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M20 6 9 17l-5-5"
            }, void 0, false, {
                fileName: "[project]/src/app/quiz/page.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/quiz/page.tsx",
            lineNumber: 46,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0)),
    Refresh: (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            ...props,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M3 12a9 9 0 0 1 9-9"
                }, void 0, false, {
                    fileName: "[project]/src/app/quiz/page.tsx",
                    lineNumber: 52,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M21 12a9 9 0 0 1-9 9"
                }, void 0, false, {
                    fileName: "[project]/src/app/quiz/page.tsx",
                    lineNumber: 53,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/quiz/page.tsx",
            lineNumber: 51,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
};
const QUESTIONS_FEMALE = [
    {
        id: 1,
        key: "style_vibe",
        question: "What's your vibe when you're feeling yourself?",
        type: "single",
        options: [
            {
                label: "Clean & Simple",
                icon: "🌟",
                persona: "Minimalist Maven",
                feedback: "Timeless elegance. Love it."
            },
            {
                label: "Bold & Edgy",
                icon: "🔥",
                persona: "Edgy Trendsetter",
                feedback: "Ooh, confidence looks good on you!"
            },
            {
                label: "Soft & Feminine",
                icon: "💖",
                persona: "Romantic Softie",
                feedback: "So dreamy and delicate."
            },
            {
                label: "Fun & Colorful",
                icon: "🌈",
                persona: "Playful Creative",
                feedback: "Yesss! We love a pop of color."
            },
            {
                label: "Comfy Chic",
                icon: "☁️",
                persona: "Comfort Queen",
                feedback: "Effortless is the best aesthetic."
            },
            {
                label: "Boho Spirit",
                icon: "🌸",
                persona: "Boho Spirit",
                feedback: "Free spirit energy detected! 🌿"
            }
        ]
    },
    {
        id: 2,
        key: "colors",
        question: "If you could only keep 3 colors in your wardrobe?",
        type: "multi",
        max: 3,
        options: [
            {
                label: "White",
                hex: "#FFFFFF"
            },
            {
                label: "Black",
                hex: "#000000"
            },
            {
                label: "Brown",
                hex: "#D2B48C"
            },
            {
                label: "Blue",
                hex: "#3B82F6"
            },
            {
                label: "Green",
                hex: "#10B981"
            },
            {
                label: "Pink",
                hex: "#EC4899"
            },
            {
                label: "Red",
                hex: "#EF4444"
            },
            {
                label: "Yellow",
                hex: "#EAB308"
            },
            {
                label: "Purple",
                hex: "#A855F7"
            },
            {
                label: "Grey",
                hex: "#6B7280"
            }
        ]
    },
    {
        id: 3,
        key: "body_challenge",
        question: "When shopping, what's your biggest challenge?",
        type: "single",
        options: [
            {
                label: "Finding tops that fit",
                icon: "👕",
                feedback: "We've got the perfect tops for you."
            },
            {
                label: "Jeans are a nightmare",
                icon: "👖",
                feedback: "We'll find you that perfect pair."
            },
            {
                label: "Dresses don't fit right",
                icon: "👗",
                feedback: "Let's fix those proportions!"
            },
            {
                label: "Height issues",
                icon: "📏",
                feedback: "Noted! Fit is everything."
            },
            {
                label: "Can't style it",
                icon: "✨",
                feedback: "Styling is our superpower. We got you."
            },
            {
                label: "No major issues",
                icon: "🤷",
                feedback: "Lucky you! Let's just have fun then."
            }
        ]
    },
    {
        id: 4,
        key: "height",
        question: "Reaching the top shelf is...",
        type: "single",
        options: [
            {
                label: "Easy! Tallest friend",
                icon: "🧍‍♀️",
                desc: "statuesque",
                feedback: "Model energy! 📸"
            },
            {
                label: "I can manage",
                icon: "🙋‍♀️",
                desc: "average height",
                feedback: "The perfect balance."
            },
            {
                label: "Where's my step stool?",
                icon: "🪜",
                desc: "petite",
                feedback: "Short & chic! ✨"
            },
            {
                label: "Accepted my fate",
                icon: "👧",
                desc: "short & sweet",
                feedback: "Petite power! We love it."
            }
        ]
    },
    {
        id: 5,
        key: "metals",
        question: "Which metals look best on you?",
        type: "single",
        options: [
            {
                label: "Gold",
                icon: "✨",
                feedback: "Gold really makes you glow!"
            },
            {
                label: "Silver",
                icon: "💎",
                feedback: "Cool and classy."
            },
            {
                label: "Rose Gold",
                icon: "🌟",
                feedback: "Soft and trendy."
            },
            {
                label: "Honestly, both!",
                icon: "🤷",
                feedback: "A neutral queen! You can wear anything."
            }
        ]
    },
    {
        id: 6,
        key: "face_shape",
        question: "Sunglasses that look best on you are...",
        type: "single",
        options: [
            {
                label: "Oversized/Round",
                icon: "😎"
            },
            {
                label: "Cat-eye/Angular",
                icon: "🕶️"
            },
            {
                label: "Aviators",
                icon: "🤓"
            },
            {
                label: "Rectangle/Square",
                icon: "👓"
            },
            {
                label: "I look weird in all",
                icon: "🤷"
            }
        ]
    },
    {
        id: 7,
        key: "hair",
        question: "Your hair on a good day is...",
        type: "single",
        options: [
            {
                label: "Straight & Sleek",
                icon: "💇‍♀️"
            },
            {
                label: "Wavy & Flowy",
                icon: "🌊"
            },
            {
                label: "Curly & Bouncy",
                icon: "🦱"
            },
            {
                label: "Coily & Textured",
                icon: "4️⃣"
            },
            {
                label: "Short/Buzz cut",
                icon: "🧑‍🦲"
            },
            {
                label: "Changes often",
                icon: "🎨"
            }
        ]
    },
    {
        id: 8,
        key: "fit",
        question: "Relationship with fitted clothes?",
        type: "single",
        options: [
            {
                label: "Love them! Tailored",
                icon: "👔",
                trait: "structured fits",
                feedback: "Sharp & sophisticated."
            },
            {
                label: "Depends on the day",
                icon: "👚",
                trait: "versatile silhouettes",
                feedback: "Versatility is key!"
            },
            {
                label: "Prefer loose & flowy",
                icon: "👕",
                trait: "breezy cuts",
                feedback: "Comfort meets style."
            },
            {
                label: "Oversized everything",
                icon: "☁️",
                trait: "relaxed comfort",
                feedback: "Cozy vibes all the way."
            }
        ]
    },
    {
        id: 9,
        key: "budget",
        question: "Outfit budget (top, bottom, shoes)...",
        type: "single",
        options: [
            {
                label: "Under ₹2,000",
                icon: "💵",
                feedback: "Style doesn't need to break the bank."
            },
            {
                label: "₹2,000 - ₹5,000",
                icon: "💳",
                feedback: "The sweet spot!"
            },
            {
                label: "₹5,000 - ₹10,000",
                icon: "💰",
                feedback: "Quality investment pieces."
            },
            {
                label: "₹10,000+",
                icon: "💎",
                feedback: "Treat yourself energy! 💅"
            },
            {
                label: "Varies wildly",
                icon: "🛍️",
                feedback: "We'll mix high & low for you."
            }
        ]
    },
    {
        id: 10,
        key: "scenario",
        question: "Scenario where you feel MOST confident:",
        type: "single",
        options: [
            {
                label: "Coffee date",
                icon: "☕",
                trait: "effortless casual",
                feedback: "Cute cafe vibes incoming!"
            },
            {
                label: "Presenting in meeting",
                icon: "💼",
                trait: "power dressing",
                feedback: "Boss mode activated. 💼"
            },
            {
                label: "Dancing at a party",
                icon: "🎉",
                trait: "magnetic energy",
                feedback: "Let's make you the main character."
            },
            {
                label: "Casual college day",
                icon: "📚",
                trait: "smart casual",
                feedback: "Campus cool."
            },
            {
                label: "Family gathering",
                icon: "👨‍👩‍👧",
                trait: "modest elegance",
                feedback: "Elegant and appropriate."
            },
            {
                label: "Weekend errands",
                icon: "🏃‍♀️",
                trait: "athleisure cool",
                feedback: "Chic on the go!"
            }
        ]
    }
];
const QUESTIONS_MALE = [
    {
        id: 1,
        key: "style_vibe",
        question: "What's your vibe when you're feeling yourself?",
        type: "single",
        options: [
            {
                label: "Clean & Minimal",
                icon: "🎯",
                persona: "Minimalist King",
                feedback: "Classic. Sharp. Respect."
            },
            {
                label: "Bold & Street",
                icon: "🔥",
                persona: "Streetwear Icon",
                feedback: "Fit check passed. 🔥"
            },
            {
                label: "Sharp & Polished",
                icon: "💼",
                persona: "Modern Gentleman",
                feedback: "Looking sharp, boss."
            },
            {
                label: "Laid-back Cool",
                icon: "🌊",
                persona: "Casual Cool",
                feedback: "Effortless is the best style."
            },
            {
                label: "Comfy King",
                icon: "☁️",
                persona: "Athleisure Pro",
                feedback: "Comfort is key."
            },
            {
                label: "Rugged & Outdoor",
                icon: "🏔️",
                persona: "Urban Explorer",
                feedback: "Ready for anything."
            }
        ]
    },
    {
        id: 2,
        key: "colors",
        question: "If you could only keep 3 colors in your closet?",
        type: "multi",
        max: 3,
        options: [
            {
                label: "Black",
                hex: "#000000"
            },
            {
                label: "White",
                hex: "#FFFFFF"
            },
            {
                label: "Grey",
                hex: "#6B7280"
            },
            {
                label: "Brown/Tan",
                hex: "#D2B48C"
            },
            {
                label: "Blue",
                hex: "#3B82F6"
            },
            {
                label: "Green",
                hex: "#3f6212"
            },
            {
                label: "Red/Maroon",
                hex: "#7f1d1d"
            },
            {
                label: "Mustard",
                hex: "#EAB308"
            },
            {
                label: "Rust",
                hex: "#c2410c"
            },
            {
                label: "Purple",
                hex: "#7e22ce"
            }
        ]
    },
    {
        id: 3,
        key: "build",
        question: "When buying clothes, what's your biggest struggle?",
        type: "single",
        options: [
            {
                label: "Shirts too tight (shoulders)",
                icon: "👕",
                build: "athletic",
                feedback: "We'll find fits that show off the work 💪"
            },
            {
                label: "Jeans don't fit right",
                icon: "👖",
                build: "lower-body focused",
                feedback: "The quad struggle is real. We got you."
            },
            {
                label: "Sleeves too short/long",
                icon: "📏",
                build: "tall/petite",
                feedback: "Proportions matter. Noted."
            },
            {
                label: "Too tight or too baggy",
                icon: "💪",
                build: "muscular",
                feedback: "Finding the sweet spot."
            },
            {
                label: "Can't put outfits together",
                icon: "✨",
                build: "balanced",
                feedback: "We'll be your personal stylist."
            },
            {
                label: "No major issues",
                icon: "🤷",
                build: "proportionate",
                feedback: "Lucky you! Easy shopping ahead."
            }
        ]
    },
    {
        id: 4,
        key: "height",
        question: "Reaching the top shelf is...",
        type: "single",
        options: [
            {
                label: "Easy! Tallest guy",
                icon: "🧍‍♂️",
                desc: "tall",
                feedback: "Big presence."
            },
            {
                label: "Yeah, I can manage",
                icon: "🙋‍♂️",
                desc: "average height",
                feedback: "Solid height."
            },
            {
                label: "Need a little help",
                icon: "🪜",
                desc: "short king",
                feedback: "Short Kings represent! 👑"
            },
            {
                label: "Step stool is bestie",
                icon: "👦",
                desc: "compact",
                feedback: "Confidence is height."
            }
        ]
    },
    {
        id: 5,
        key: "metals",
        question: "Which metals/watch colors look best on you?",
        type: "single",
        options: [
            {
                label: "Gold/Bronze",
                icon: "✨",
                feedback: "Warm tones suit you well."
            },
            {
                label: "Silver/Platinum",
                icon: "💎",
                feedback: "Clean and cool."
            },
            {
                label: "Black/Gunmetal",
                icon: "⚫",
                feedback: "Sleek choice."
            },
            {
                label: "Everything works",
                icon: "🤷",
                feedback: "Versatile!"
            }
        ]
    },
    {
        id: 6,
        key: "face_shape",
        question: "Sunglasses that look best on you are...",
        type: "single",
        options: [
            {
                label: "Aviators",
                icon: "😎",
                feedback: "Classic Top Gun vibes."
            },
            {
                label: "Wayfarers/Square",
                icon: "🕶️",
                feedback: "Timeless choice."
            },
            {
                label: "Round/Circle",
                icon: "🤓",
                feedback: "Very stylish."
            },
            {
                label: "Sport/Wraparound",
                icon: "🏃",
                feedback: "Active and sharp."
            },
            {
                label: "Don't wear them",
                icon: "🤷",
                feedback: "No worries, we'll focus on the clothes."
            }
        ]
    },
    {
        id: 7,
        key: "beard",
        question: "What's your facial hair situation?",
        type: "single",
        options: [
            {
                label: "Full beard",
                icon: "🧔",
                feedback: "Nice! We'll suggest rugged necklines."
            },
            {
                label: "Stubble/Short",
                icon: "🧔‍♂️",
                feedback: "The classic 5 o'clock shadow."
            },
            {
                label: "Goatee/Mustache",
                icon: "👨",
                feedback: "Distinguished look."
            },
            {
                label: "Clean shaven",
                icon: "🪒",
                feedback: "Sharp and clean."
            },
            {
                label: "Changes often",
                icon: "🎨",
                feedback: "We like an experimenter!"
            }
        ]
    },
    {
        id: 8,
        key: "hair",
        question: "Your hair on a regular day is...",
        type: "single",
        options: [
            {
                label: "Short/Fade/Crew",
                icon: "💈",
                feedback: "Got it! Your complete look is coming together 🔥"
            },
            {
                label: "Medium & Styled",
                icon: "🌊",
                feedback: "Flow on point."
            },
            {
                label: "Curly/Textured",
                icon: "🦱",
                feedback: "Texture adds character."
            },
            {
                label: "Bald/Shaved",
                icon: "🧑‍🦲",
                feedback: "Bold and low maintenance."
            },
            {
                label: "Long/Man bun",
                icon: "🎨",
                feedback: "Viking vibes."
            }
        ]
    },
    {
        id: 9,
        key: "fit",
        question: "How do you like your clothes to fit?",
        type: "single",
        options: [
            {
                label: "Fitted & tailored",
                icon: "👔",
                trait: "sharp tailoring",
                feedback: "Show off that shape."
            },
            {
                label: "Regular fit",
                icon: "👕",
                trait: "classic cuts",
                feedback: "Classic comfort."
            },
            {
                label: "Relaxed/loose",
                icon: "🏀",
                trait: "relaxed vibes",
                feedback: "Room to move."
            },
            {
                label: "Oversized",
                icon: "☁️",
                trait: "oversized streetwear",
                feedback: "Maximum comfort."
            },
            {
                label: "Depends",
                icon: "🎯",
                trait: "versatile fits",
                feedback: "Adaptable. We like it."
            }
        ]
    },
    {
        id: 10,
        key: "budget",
        question: "For a complete fit (top, bottom, shoes)...",
        type: "single",
        options: [
            {
                label: "Under ₹3,000",
                icon: "💵",
                feedback: "Smart shopper."
            },
            {
                label: "₹3,000 - ₹7,000",
                icon: "💳",
                feedback: "Solid sweet spot."
            },
            {
                label: "₹7,000 - ₹15,000",
                icon: "💰",
                feedback: "Quality focused."
            },
            {
                label: "₹15,000+",
                icon: "💎",
                feedback: "Premium drip only."
            },
            {
                label: "Depends",
                icon: "🛍️",
                feedback: "Flexible spending."
            }
        ]
    },
    {
        id: 11,
        key: "scenario",
        question: "Pick the scenario where you'd feel MOST confident:",
        type: "single",
        options: [
            {
                label: "Casual hangout",
                icon: "☕",
                trait: "chill vibes",
                feedback: "Easygoing cool."
            },
            {
                label: "Work meeting",
                icon: "💼",
                trait: "professional power",
                feedback: "Time to handle business."
            },
            {
                label: "Night out",
                icon: "🎉",
                trait: "nightlife energy",
                feedback: "Own the night."
            },
            {
                label: "Chill day",
                icon: "🎮",
                trait: "home comfort",
                feedback: "Relax mode activated."
            },
            {
                label: "Gym/Active",
                icon: "🏃‍♂️",
                trait: "performance",
                feedback: "Let's get it."
            }
        ]
    }
];
function SuggestionsQuizPage() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [gender, setGender] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [step, setStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [answers, setAnswers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [isFinished, setIsFinished] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [multiSelection, setMultiSelection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [feedbackMsg, setFeedbackMsg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const currentQuestions = gender === "male" ? QUESTIONS_MALE : QUESTIONS_FEMALE;
    /* ================= LOGIC (UNCHANGED) ================= */ const advanceWithFeedback = (msg)=>{
        setFeedbackMsg(msg);
        setTimeout(()=>{
            setFeedbackMsg(null);
            if (step < currentQuestions.length - 1) {
                setStep(step + 1);
            } else {
                setIsFinished(true);
            }
        }, 1200);
    };
    const handleSingleSelect = (question, option)=>{
        setAnswers({
            ...answers,
            [question.key]: option
        });
        advanceWithFeedback(option.feedback || "Nice choice ✨");
    };
    const handleMultiSelect = (option)=>{
        if (multiSelection.includes(option)) {
            setMultiSelection(multiSelection.filter((i)=>i !== option));
        } else {
            if (multiSelection.length < 3) {
                setMultiSelection([
                    ...multiSelection,
                    option
                ]);
            }
        }
    };
    const confirmMultiSelect = ()=>{
        setAnswers({
            ...answers,
            colors: multiSelection
        });
        setMultiSelection([]);
        advanceWithFeedback("Perfect palette 🔥");
    };
    const getPersonaResult = ()=>{
        const baseStyle = answers.style_vibe || currentQuestions[0].options[0];
        return {
            title: baseStyle.persona || "Style Icon",
            icon: baseStyle.icon || "✨",
            desc: "Your personalized fashion identity is ready.",
            rawColors: answers.colors || []
        };
    };
    /* ================= GENDER SCREEN ================= */ if (!gender) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-black text-white flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center space-y-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-5xl font-bold tracking-wide",
                        children: "OUTFEVIBE"
                    }, void 0, false, {
                        fileName: "[project]/src/app/quiz/page.tsx",
                        lineNumber: 335,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-6 justify-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setGender("female"),
                                className: "px-8 py-4 border border-white rounded-xl hover:bg-white hover:text-black transition",
                                children: "Style for Her"
                            }, void 0, false, {
                                fileName: "[project]/src/app/quiz/page.tsx",
                                lineNumber: 339,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setGender("male"),
                                className: "px-8 py-4 border border-white rounded-xl hover:bg-white hover:text-black transition",
                                children: "Style for Him"
                            }, void 0, false, {
                                fileName: "[project]/src/app/quiz/page.tsx",
                                lineNumber: 345,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/quiz/page.tsx",
                        lineNumber: 338,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/quiz/page.tsx",
                lineNumber: 334,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/quiz/page.tsx",
            lineNumber: 333,
            columnNumber: 7
        }, this);
    }
    /* ================= RESULT SCREEN ================= */ if (isFinished) {
        const result = getPersonaResult();
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-black text-white flex items-center justify-center px-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-md w-full bg-[#111] p-8 rounded-2xl border border-[#1f1f1f] text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-6xl mb-4",
                        children: result.icon
                    }, void 0, false, {
                        fileName: "[project]/src/app/quiz/page.tsx",
                        lineNumber: 366,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-sm uppercase tracking-widest text-gray-400",
                        children: "You Are"
                    }, void 0, false, {
                        fileName: "[project]/src/app/quiz/page.tsx",
                        lineNumber: 368,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-3xl font-bold mb-4",
                        children: result.title
                    }, void 0, false, {
                        fileName: "[project]/src/app/quiz/page.tsx",
                        lineNumber: 372,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-400 mb-8",
                        children: result.desc
                    }, void 0, false, {
                        fileName: "[project]/src/app/quiz/page.tsx",
                        lineNumber: 376,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            const persona = result.title;
                            localStorage.setItem("userPersona", result.title);
                            router.push("/suggestions");
                        },
                        className: "w-full py-4 bg-white text-black rounded-xl font-semibold hover:opacity-90 transition flex items-center justify-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icons.Sparkles, {
                                className: "w-5 h-5"
                            }, void 0, false, {
                                fileName: "[project]/src/app/quiz/page.tsx",
                                lineNumber: 388,
                                columnNumber: 13
                            }, this),
                            "Show Me My Fits"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/quiz/page.tsx",
                        lineNumber: 380,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            setGender(null);
                            setStep(0);
                            setAnswers({});
                            setIsFinished(false);
                        },
                        className: "mt-6 text-gray-500 hover:text-white text-sm flex items-center justify-center gap-2 mx-auto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icons.Refresh, {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/src/app/quiz/page.tsx",
                                lineNumber: 401,
                                columnNumber: 13
                            }, this),
                            "Start Over"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/quiz/page.tsx",
                        lineNumber: 392,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/quiz/page.tsx",
                lineNumber: 364,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/quiz/page.tsx",
            lineNumber: 363,
            columnNumber: 7
        }, this);
    }
    /* ================= QUESTIONS SCREEN ================= */ const currentQ = currentQuestions[step];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-black text-white flex flex-col items-center px-6 py-12",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: feedbackMsg && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    className: "fixed inset-0 flex items-center justify-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white text-black px-6 py-3 rounded-xl",
                        children: feedbackMsg
                    }, void 0, false, {
                        fileName: "[project]/src/app/quiz/page.tsx",
                        lineNumber: 424,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/quiz/page.tsx",
                    lineNumber: 418,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/quiz/page.tsx",
                lineNumber: 416,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full max-w-xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between text-sm text-gray-400 mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Outfevibe"
                            }, void 0, false, {
                                fileName: "[project]/src/app/quiz/page.tsx",
                                lineNumber: 434,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    step + 1,
                                    "/",
                                    currentQuestions.length
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/quiz/page.tsx",
                                lineNumber: 435,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/quiz/page.tsx",
                        lineNumber: 433,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-bold mb-8",
                        children: currentQ.question
                    }, void 0, false, {
                        fileName: "[project]/src/app/quiz/page.tsx",
                        lineNumber: 438,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: currentQ.options.map((opt, i)=>{
                            const isSelected = currentQ.type === "multi" ? multiSelection.includes(opt) : answers[currentQ.key]?.label === opt.label;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>currentQ.type === "multi" ? handleMultiSelect(opt) : handleSingleSelect(currentQ, opt),
                                className: `relative w-full p-4 rounded-xl border transition text-left flex items-center justify-between
      ${isSelected ? "border-green-500 bg-green-500/10 shadow-lg shadow-green-500/20" : "border-[#2a2a2a] hover:border-white"}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            opt.icon,
                                            " ",
                                            opt.label
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/quiz/page.tsx",
                                        lineNumber: 464,
                                        columnNumber: 17
                                    }, this),
                                    isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-green-400 font-bold text-lg",
                                        children: "✔"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/quiz/page.tsx",
                                        lineNumber: 469,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, i, true, {
                                fileName: "[project]/src/app/quiz/page.tsx",
                                lineNumber: 451,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/app/quiz/page.tsx",
                        lineNumber: 442,
                        columnNumber: 9
                    }, this),
                    currentQ.type === "multi" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: confirmMultiSelect,
                        disabled: multiSelection.length !== 3,
                        className: "mt-6 w-full py-3 bg-white text-black rounded-xl disabled:opacity-40",
                        children: "Confirm Colors"
                    }, void 0, false, {
                        fileName: "[project]/src/app/quiz/page.tsx",
                        lineNumber: 480,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/quiz/page.tsx",
                lineNumber: 431,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/quiz/page.tsx",
        lineNumber: 414,
        columnNumber: 5
    }, this);
}
_s(SuggestionsQuizPage, "j4JlutHHHima2DVm8K7uZant0vM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = SuggestionsQuizPage;
var _c;
__turbopack_context__.k.register(_c, "SuggestionsQuizPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_quiz_page_tsx_5e2e230e._.js.map