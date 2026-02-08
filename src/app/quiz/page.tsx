"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

/* ================= TYPES ================= */

interface Option {
  label: string;
  icon?: string | React.ReactNode;
  hex?: string;
  persona?: string;
  feedback?: string;
  desc?: string;
  trait?: string;
  build?: string;
  sub?: string;
}

interface Question {
  id: number;
  key: string;
  question: string;
  type: "single" | "multi";
  options: Option[];
  max?: number;
}

interface PersonaResult {
  title: string;
  icon: string | React.ReactNode;
  desc: string;
  rawColors: Option[];
}

/* ================= ICONS ================= */

const Icons = {
  Sparkles: (props: any) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3L12 3Z" />
    </svg>
  ),
  Check: (props: any) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  ),
  Refresh: (props: any) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 12a9 9 0 0 1 9-9" />
      <path d="M21 12a9 9 0 0 1-9 9" />
    </svg>
  )
};

/* ================= YOUR QUESTIONS (UNCHANGED) ================= */

export const QUESTIONS_FEMALE: Question[] = [
    {
        id: 1, key: "style_vibe", question: "What's your vibe when you're feeling yourself?", type: "single",
        options: [
            { label: "Clean & Simple", icon: "🌟", persona: "Minimalist Maven", feedback: "Timeless elegance. Love it." },
            { label: "Bold & Edgy", icon: "🔥", persona: "Edgy Trendsetter", feedback: "Ooh, confidence looks good on you!" },
            { label: "Soft & Feminine", icon: "💖", persona: "Romantic Softie", feedback: "So dreamy and delicate." },
            { label: "Fun & Colorful", icon: "🌈", persona: "Playful Creative", feedback: "Yesss! We love a pop of color." },
            { label: "Comfy Chic", icon: "☁️", persona: "Comfort Queen", feedback: "Effortless is the best aesthetic." },
            { label: "Boho Spirit", icon: "🌸", persona: "Boho Spirit", feedback: "Free spirit energy detected! 🌿" }
        ]
    },
    {
        id: 2, key: "colors", question: "If you could only keep 3 colors in your wardrobe?", type: "multi", max: 3,
        options: [
            { label: "White", hex: "#FFFFFF" }, { label: "Black", hex: "#000000" }, { label: "Brown", hex: "#D2B48C" },
            { label: "Blue", hex: "#3B82F6" }, { label: "Green", hex: "#10B981" }, { label: "Pink", hex: "#EC4899" },
            { label: "Red", hex: "#EF4444" }, { label: "Yellow", hex: "#EAB308" }, { label: "Purple", hex: "#A855F7" }, { label: "Grey", hex: "#6B7280" }
        ]
    },
    {
        id: 3, key: "body_challenge", question: "When shopping, what's your biggest challenge?", type: "single",
        options: [
            { label: "Finding tops that fit", icon: "👕", feedback: "We've got the perfect tops for you." },
            { label: "Jeans are a nightmare", icon: "👖", feedback: "We'll find you that perfect pair." },
            { label: "Dresses don't fit right", icon: "👗", feedback: "Let's fix those proportions!" },
            { label: "Height issues", icon: "📏", feedback: "Noted! Fit is everything." },
            { label: "Can't style it", icon: "✨", feedback: "Styling is our superpower. We got you." },
            { label: "No major issues", icon: "🤷", feedback: "Lucky you! Let's just have fun then." }
        ]
    },
    {
        id: 4, key: "height", question: "Reaching the top shelf is...", type: "single",
        options: [
            { label: "Easy! Tallest friend", icon: "🧍‍♀️", desc: "statuesque", feedback: "Model energy! 📸" },
            { label: "I can manage", icon: "🙋‍♀️", desc: "average height", feedback: "The perfect balance." },
            { label: "Where's my step stool?", icon: "🪜", desc: "petite", feedback: "Short & chic! ✨" },
            { label: "Accepted my fate", icon: "👧", desc: "short & sweet", feedback: "Petite power! We love it." }
        ]
    },
    {
        id: 5, key: "metals", question: "Which metals look best on you?", type: "single",
        options: [
            { label: "Gold", icon: "✨", feedback: "Gold really makes you glow!" },
            { label: "Silver", icon: "💎", feedback: "Cool and classy." },
            { label: "Rose Gold", icon: "🌟", feedback: "Soft and trendy." },
            { label: "Honestly, both!", icon: "🤷", feedback: "A neutral queen! You can wear anything." }
        ]
    },
    {
        id: 6, key: "face_shape", question: "Sunglasses that look best on you are...", type: "single",
        options: [
            { label: "Oversized/Round", icon: "😎" }, { label: "Cat-eye/Angular", icon: "🕶️" },
            { label: "Aviators", icon: "🤓" }, { label: "Rectangle/Square", icon: "👓" }, { label: "I look weird in all", icon: "🤷" }
        ]
    },
    {
        id: 7, key: "hair", question: "Your hair on a good day is...", type: "single",
        options: [
            { label: "Straight & Sleek", icon: "💇‍♀️" }, { label: "Wavy & Flowy", icon: "🌊" },
            { label: "Curly & Bouncy", icon: "🦱" }, { label: "Coily & Textured", icon: "4️⃣" },
            { label: "Short/Buzz cut", icon: "🧑‍🦲" }, { label: "Changes often", icon: "🎨" }
        ]
    },
    {
        id: 8, key: "fit", question: "Relationship with fitted clothes?", type: "single",
        options: [
            { label: "Love them! Tailored", icon: "👔", trait: "structured fits", feedback: "Sharp & sophisticated." },
            { label: "Depends on the day", icon: "👚", trait: "versatile silhouettes", feedback: "Versatility is key!" },
            { label: "Prefer loose & flowy", icon: "👕", trait: "breezy cuts", feedback: "Comfort meets style." },
            { label: "Oversized everything", icon: "☁️", trait: "relaxed comfort", feedback: "Cozy vibes all the way." }
        ]
    },
    {
        id: 9, key: "budget", question: "Outfit budget (top, bottom, shoes)...", type: "single",
        options: [
            { label: "Under ₹2,000", icon: "💵", feedback: "Style doesn't need to break the bank." },
            { label: "₹2,000 - ₹5,000", icon: "💳", feedback: "The sweet spot!" },
            { label: "₹5,000 - ₹10,000", icon: "💰", feedback: "Quality investment pieces." },
            { label: "₹10,000+", icon: "💎", feedback: "Treat yourself energy! 💅" },
            { label: "Varies wildly", icon: "🛍️", feedback: "We'll mix high & low for you." }
        ]
    },
    {
        id: 10, key: "scenario", question: "Scenario where you feel MOST confident:", type: "single",
        options: [
            { label: "Coffee date", icon: "☕", trait: "effortless casual", feedback: "Cute cafe vibes incoming!" },
            { label: "Presenting in meeting", icon: "💼", trait: "power dressing", feedback: "Boss mode activated. 💼" },
            { label: "Dancing at a party", icon: "🎉", trait: "magnetic energy", feedback: "Let's make you the main character." },
            { label: "Casual college day", icon: "📚", trait: "smart casual", feedback: "Campus cool." },
            { label: "Family gathering", icon: "👨‍👩‍👧", trait: "modest elegance", feedback: "Elegant and appropriate." },
            { label: "Weekend errands", icon: "🏃‍♀️", trait: "athleisure cool", feedback: "Chic on the go!" }
        ]
    }
];

export const QUESTIONS_MALE: Question[] = [
    {
        id: 1, key: "style_vibe", question: "What's your vibe when you're feeling yourself?", type: "single",
        options: [
            { label: "Clean & Minimal", icon: "🎯", persona: "Minimalist King", feedback: "Classic. Sharp. Respect." },
            { label: "Bold & Street", icon: "🔥", persona: "Streetwear Icon", feedback: "Fit check passed. 🔥" },
            { label: "Sharp & Polished", icon: "💼", persona: "Modern Gentleman", feedback: "Looking sharp, boss." },
            { label: "Laid-back Cool", icon: "🌊", persona: "Casual Cool", feedback: "Effortless is the best style." },
            { label: "Comfy King", icon: "☁️", persona: "Athleisure Pro", feedback: "Comfort is key." },
            { label: "Rugged & Outdoor", icon: "🏔️", persona: "Urban Explorer", feedback: "Ready for anything." }
        ]
    },
    {
        id: 2, key: "colors", question: "If you could only keep 3 colors in your closet?", type: "multi", max: 3,
        options: [
            { label: "Black", hex: "#000000" }, { label: "White", hex: "#FFFFFF" }, { label: "Grey", hex: "#6B7280" },
            { label: "Brown/Tan", hex: "#D2B48C" }, { label: "Blue", hex: "#3B82F6" }, { label: "Green", hex: "#3f6212" },
            { label: "Red/Maroon", hex: "#7f1d1d" }, { label: "Mustard", hex: "#EAB308" }, { label: "Rust", hex: "#c2410c" }, { label: "Purple", hex: "#7e22ce" }
        ]
    },
    {
        id: 3, key: "build", question: "When buying clothes, what's your biggest struggle?", type: "single",
        options: [
            { label: "Shirts too tight (shoulders)", icon: "👕", build: "athletic", feedback: "We'll find fits that show off the work 💪" },
            { label: "Jeans don't fit right", icon: "👖", build: "lower-body focused", feedback: "The quad struggle is real. We got you." },
            { label: "Sleeves too short/long", icon: "📏", build: "tall/petite", feedback: "Proportions matter. Noted." },
            { label: "Too tight or too baggy", icon: "💪", build: "muscular", feedback: "Finding the sweet spot." },
            { label: "Can't put outfits together", icon: "✨", build: "balanced", feedback: "We'll be your personal stylist." },
            { label: "No major issues", icon: "🤷", build: "proportionate", feedback: "Lucky you! Easy shopping ahead." }
        ]
    },
    {
        id: 4, key: "height", question: "Reaching the top shelf is...", type: "single",
        options: [
            { label: "Easy! Tallest guy", icon: "🧍‍♂️", desc: "tall", feedback: "Big presence." },
            { label: "Yeah, I can manage", icon: "🙋‍♂️", desc: "average height", feedback: "Solid height." },
            { label: "Need a little help", icon: "🪜", desc: "short king", feedback: "Short Kings represent! 👑" },
            { label: "Step stool is bestie", icon: "👦", desc: "compact", feedback: "Confidence is height." }
        ]
    },
    {
        id: 5, key: "metals", question: "Which metals/watch colors look best on you?", type: "single",
        options: [
            { label: "Gold/Bronze", icon: "✨", feedback: "Warm tones suit you well." },
            { label: "Silver/Platinum", icon: "💎", feedback: "Clean and cool." },
            { label: "Black/Gunmetal", icon: "⚫", feedback: "Sleek choice." },
            { label: "Everything works", icon: "🤷", feedback: "Versatile!" }
        ]
    },
    {
        id: 6, key: "face_shape", question: "Sunglasses that look best on you are...", type: "single",
        options: [
            { label: "Aviators", icon: "😎", feedback: "Classic Top Gun vibes." },
            { label: "Wayfarers/Square", icon: "🕶️", feedback: "Timeless choice." },
            { label: "Round/Circle", icon: "🤓", feedback: "Very stylish." },
            { label: "Sport/Wraparound", icon: "🏃", feedback: "Active and sharp." },
            { label: "Don't wear them", icon: "🤷", feedback: "No worries, we'll focus on the clothes." }
        ]
    },
    {
        id: 7, key: "beard", question: "What's your facial hair situation?", type: "single",
        options: [
            { label: "Full beard", icon: "🧔", feedback: "Nice! We'll suggest rugged necklines." },
            { label: "Stubble/Short", icon: "🧔‍♂️", feedback: "The classic 5 o'clock shadow." },
            { label: "Goatee/Mustache", icon: "👨", feedback: "Distinguished look." },
            { label: "Clean shaven", icon: "🪒", feedback: "Sharp and clean." },
            { label: "Changes often", icon: "🎨", feedback: "We like an experimenter!" }
        ]
    },
    {
        id: 8, key: "hair", question: "Your hair on a regular day is...", type: "single",
        options: [
            { label: "Short/Fade/Crew", icon: "💈", feedback: "Got it! Your complete look is coming together 🔥" },
            { label: "Medium & Styled", icon: "🌊", feedback: "Flow on point." },
            { label: "Curly/Textured", icon: "🦱", feedback: "Texture adds character." },
            { label: "Bald/Shaved", icon: "🧑‍🦲", feedback: "Bold and low maintenance." },
            { label: "Long/Man bun", icon: "🎨", feedback: "Viking vibes." }
        ]
    },
    {
        id: 9, key: "fit", question: "How do you like your clothes to fit?", type: "single",
        options: [
            { label: "Fitted & tailored", icon: "👔", trait: "sharp tailoring", feedback: "Show off that shape." },
            { label: "Regular fit", icon: "👕", trait: "classic cuts", feedback: "Classic comfort." },
            { label: "Relaxed/loose", icon: "🏀", trait: "relaxed vibes", feedback: "Room to move." },
            { label: "Oversized", icon: "☁️", trait: "oversized streetwear", feedback: "Maximum comfort." },
            { label: "Depends", icon: "🎯", trait: "versatile fits", feedback: "Adaptable. We like it." }
        ]
    },
    {
        id: 10, key: "budget", question: "For a complete fit (top, bottom, shoes)...", type: "single",
        options: [
            { label: "Under ₹3,000", icon: "💵", feedback: "Smart shopper." },
            { label: "₹3,000 - ₹7,000", icon: "💳", feedback: "Solid sweet spot." },
            { label: "₹7,000 - ₹15,000", icon: "💰", feedback: "Quality focused." },
            { label: "₹15,000+", icon: "💎", feedback: "Premium drip only." },
            { label: "Depends", icon: "🛍️", feedback: "Flexible spending." }
        ]
    },
    {
        id: 11, key: "scenario", question: "Pick the scenario where you'd feel MOST confident:", type: "single",
        options: [
            { label: "Casual hangout", icon: "☕", trait: "chill vibes", feedback: "Easygoing cool." },
            { label: "Work meeting", icon: "💼", trait: "professional power", feedback: "Time to handle business." },
            { label: "Night out", icon: "🎉", trait: "nightlife energy", feedback: "Own the night." },
            { label: "Chill day", icon: "🎮", trait: "home comfort", feedback: "Relax mode activated." },
            { label: "Gym/Active", icon: "🏃‍♂️", trait: "performance", feedback: "Let's get it." }
        ]
    }
];

/* ================= COMPONENT ================= */

export default function SuggestionsQuizPage() {
  const router = useRouter();

  const [gender, setGender] = useState<"male" | "female" | null>(null);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const [isFinished, setIsFinished] = useState(false);
  const [multiSelection, setMultiSelection] = useState<Option[]>([]);
  const [feedbackMsg, setFeedbackMsg] = useState<string | null>(null);

  const currentQuestions =
    gender === "male" ? QUESTIONS_MALE : QUESTIONS_FEMALE;

  /* ================= LOGIC (UNCHANGED) ================= */

  const advanceWithFeedback = (msg: string) => {
    setFeedbackMsg(msg);
    setTimeout(() => {
      setFeedbackMsg(null);
      if (step < currentQuestions.length - 1) {
        setStep(step + 1);
      } else {
        setIsFinished(true);
      }
    }, 1200);
  };

  const handleSingleSelect = (question: Question, option: Option) => {
    setAnswers({ ...answers, [question.key]: option });
    advanceWithFeedback(option.feedback || "Nice choice ✨");
  };

  const handleMultiSelect = (option: Option) => {
    if (multiSelection.includes(option)) {
      setMultiSelection(multiSelection.filter((i) => i !== option));
    } else {
      if (multiSelection.length < 3) {
        setMultiSelection([...multiSelection, option]);
      }
    }
  };

  const confirmMultiSelect = () => {
    setAnswers({ ...answers, colors: multiSelection });
    setMultiSelection([]);
    advanceWithFeedback("Perfect palette 🔥");
  };

  const getPersonaResult = (): PersonaResult => {
    const baseStyle =
      answers.style_vibe || currentQuestions[0].options[0];

    return {
      title: baseStyle.persona || "Style Icon",
      icon: baseStyle.icon || "✨",
      desc: "Your personalized fashion identity is ready.",
      rawColors: answers.colors || []
    };
  };

  /* ================= GENDER SCREEN ================= */

  if (!gender) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center space-y-6">
          <h1 className="text-5xl font-bold tracking-wide">
            OUTFEVIBE
          </h1>
          <div className="flex gap-6 justify-center">
            <button
              onClick={() => setGender("female")}
              className="px-8 py-4 border border-white rounded-xl hover:bg-white hover:text-black transition"
            >
              Style for Her
            </button>
            <button
              onClick={() => setGender("male")}
              className="px-8 py-4 border border-white rounded-xl hover:bg-white hover:text-black transition"
            >
              Style for Him
            </button>
          </div>
        </div>
      </div>
    );
  }

  /* ================= RESULT SCREEN ================= */

  if (isFinished) {
    const result = getPersonaResult();

    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">
        <div className="max-w-md w-full bg-[#111] p-8 rounded-2xl border border-[#1f1f1f] text-center">

          <div className="text-6xl mb-4">{result.icon}</div>

          <h2 className="text-sm uppercase tracking-widest text-gray-400">
            You Are
          </h2>

          <h1 className="text-3xl font-bold mb-4">
            {result.title}
          </h1>

          <p className="text-gray-400 mb-8">
            {result.desc}
          </p>

          <button
            onClick={() => {
              const persona = result.title;
              router.push(
                `/suggestions?persona=${encodeURIComponent(persona)}&gender=${gender}`
              );
            }}
            className="w-full py-4 bg-white text-black rounded-xl font-semibold hover:opacity-90 transition flex items-center justify-center gap-2"
          >
            <Icons.Sparkles className="w-5 h-5" />
            Show Me My Fits
          </button>

          <button
            onClick={() => {
              setGender(null);
              setStep(0);
              setAnswers({});
              setIsFinished(false);
            }}
            className="mt-6 text-gray-500 hover:text-white text-sm flex items-center justify-center gap-2 mx-auto"
          >
            <Icons.Refresh className="w-4 h-4" />
            Start Over
          </button>
        </div>
      </div>
    );
  }

  /* ================= QUESTIONS SCREEN ================= */

  const currentQ = currentQuestions[step];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center px-6 py-12">

      <AnimatePresence>
        {feedbackMsg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center"
          >
            <div className="bg-white text-black px-6 py-3 rounded-xl">
              {feedbackMsg}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="w-full max-w-xl">

        <div className="flex justify-between text-sm text-gray-400 mb-6">
          <span>Outfevibe</span>
          <span>{step + 1}/{currentQuestions.length}</span>
        </div>

        <h2 className="text-2xl font-bold mb-8">
          {currentQ.question}
        </h2>

        <div className="space-y-4">
          {currentQ.options.map((opt, i) => (
            <button
              key={i}
              onClick={() =>
                currentQ.type === "multi"
                  ? handleMultiSelect(opt)
                  : handleSingleSelect(currentQ, opt)
              }
              className="w-full p-4 border border-[#2a2a2a] rounded-xl hover:border-white transition text-left"
            >
              {opt.icon} {opt.label}
            </button>
          ))}
        </div>

        {currentQ.type === "multi" && (
          <button
            onClick={confirmMultiSelect}
            disabled={multiSelection.length !== 3}
            className="mt-6 w-full py-3 bg-white text-black rounded-xl disabled:opacity-40"
          >
            Confirm Colors
          </button>
        )}

      </div>
    </div>
  );
}