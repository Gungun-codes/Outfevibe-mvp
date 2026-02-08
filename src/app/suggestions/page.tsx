"use client";

import React from "react";
import { useSearchParams } from "next/navigation";

/* -------------------- TYPES -------------------- */

export interface OutfitItem {
  name: string;
  type: "top" | "bottom" | "shoes" | "accessory" | "outerwear";
  desc?: string;
}

export interface OutfitSuggestion {
  id: string;
  title: string;
  description: string;
  occasion: "Casual" | "Work" | "Trendy" | "Date" | "Sport" | "Party";
  matchPercentage: number;
  image?: string;
  items: OutfitItem[];
}

/* -------------------- DATA -------------------- */

const OUTFITS_FEMALE: Record<string, OutfitSuggestion[]> = {
  "Minimalist Maven": [
        {
            id: "mm_1",
            title: "The Everyday Uniform",
            description: "Effortlessly chic with clean lines and neutral tones.",
            occasion: "Work",
            matchPercentage: 98,
            image: "/suggestions/mm-1.jpg",
            items: [
                { name: "White Crisp Button-Down", type: "top", desc: "Slightly oversized" },
                { name: "Straight Leg Blue Jeans", type: "bottom", desc: "High waisted, vintage wash" },
                { name: "Black Loafers", type: "shoes", desc: "Leather or faux leather" },
                { name: "Gold Hoop Earrings", type: "accessory", desc: "Small thick hoops" }
            ]
        },
        {
            id: "mm_2",
            title: "Monochrome Magic",
            description: "A sleek all-black or all-beige ensemble that screams sophistication.",
            occasion: "Date",
            matchPercentage: 96,
            image: "/suggestions/mm-2.jpg",
            items: [
                { name: "Black Turtleneck Bodysuit", type: "top" },
                { name: "Black Wide Leg Trousers", type: "bottom", desc: "Tailored fit" },
                { name: "Pointed Toe Ankle Boots", type: "shoes" },
                { name: "Structured Trench Coat", type: "outerwear", desc: "Beige or Camel" }
            ]
        }
    ],
    "Edgy Trendsetter": [
        {
            id: "et_1",
            title: "Leather & Lace",
            description: "Mixing tough textures with soft details for a bold look.",
            occasion: "Party",
            matchPercentage: 97,
            image: "/suggestions/et-1.jpg",
            items: [
                { name: "Oversized Graphic Tee", type: "top", desc: "Band tee or dark graphic" },
                { name: "Leather Mini Skirt", type: "bottom" },
                { name: "Chunky Combat Boots", type: "shoes", desc: "Dr. Martens style" },
                { name: "Fishnet Tights", type: "accessory" }
            ]
        },
        {
            id: "et_2",
            title: "Street Utility",
            description: "Functional fashion with a rebellious edge.",
            occasion: "Trendy",
            matchPercentage: 94,
            image: "/suggestions/et-2.jpg",
            items: [
                { name: "Cropped Hoodie", type: "top", desc: "Black or Neon" },
                { name: "Cargo Pants", type: "bottom", desc: "Baggy fit with many pockets" },
                { name: "High-Top Sneakers", type: "shoes", desc: "Jordans or similar" },
                { name: "Chain Necklace", type: "accessory", desc: "Silver chunky chain" }
            ]
        }
    ],
    "Playful Creative": [
        {
            id: "pc_1",
            title: "Color Block Pop",
            description: "Why choose one color when you can wear them all?",
            occasion: "Trendy",
            matchPercentage: 95,
            image: "/suggestions/pc-1.jpg",
            items: [
                { name: "Bright Striped Top", type: "top", desc: "Bold primary colors" },
                { name: "Colored Denim Jacket", type: "outerwear", desc: "Pink or Yellow" },
                { name: "Patterned Trousers", type: "bottom", desc: "Checkered or floral" },
                { name: "Chunky Sneakers", type: "shoes", desc: "Multi-colored" }
            ]
        },
        {
            id: "pc_2",
            title: "Mixed Prints",
            description: "Clashing patterns in the most stylish way.",
            occasion: "Work",
            matchPercentage: 88,
            image: "/suggestions/pc-2.jpg",
            items: [
                { name: "Polka Dot Blouse", type: "top" },
                { name: "Leopard Print Skirt", type: "bottom", desc: "Midi length" },
                { name: "Red Beret", type: "accessory" },
                { name: "Mary Jane Shoes", type: "shoes", desc: "With cute socks" }
            ]
        }
    ],
    "Romantic Softie": [
        {
            id: "rs_1",
            title: "Garden Party Dream",
            description: "Soft pastels and flowing fabrics for a whimsical vibe.",
            occasion: "Date",
            matchPercentage: 96,
            image: "/suggestions/rs-1.jpg",
            items: [
                { name: "Floral Midi Dress", type: "top", desc: "Puff sleeves, pastel colors" },
                { name: "Strappy Sandals", type: "shoes", desc: "White or nude" },
                { name: "Cardigan", type: "outerwear", desc: "Cropped knit" },
                { name: "Pearl Hair Clip", type: "accessory" }
            ]
        },
        {
            id: "rs_2",
            title: "Cozy Romance",
            description: "Warm and inviting layers for cooler days.",
            occasion: "Casual",
            matchPercentage: 93,
            image: "/suggestions/rs-2.jpg",
            items: [
                { name: "Cable Knit Sweater", type: "top", desc: "Cream or soft pink" },
                { name: "Pleated Skirt", type: "bottom", desc: "Midi length" },
                { name: "Ankle Boots", type: "shoes", desc: "Suede finish" },
                { name: "Heart Pendant Necklace", type: "accessory" }
            ]
        }
    ],
    "Comfort Queen": [
        {
            id: "cq_1",
            title: "Elevated Loungewear",
            description: "So comfy you could sleep in it, but cute enough for errands.",
            occasion: "Casual",
            matchPercentage: 99,
            image: "/suggestions/cq-1.jpg",
            items: [
                { name: "Matching Set", type: "top", desc: "Sweatshirt and joggers, neutral tone" },
                { name: "Denim Jacket", type: "outerwear", desc: "Oversized" },
                { name: "Clean White Sneakers", type: "shoes" },
                { name: "Baseball Cap", type: "accessory" }
            ]
        },
        {
            id: "cq_2",
            title: "Soft Layers",
            description: "Wrapper yourself in softness without looking sloppy.",
            occasion: "Casual",
            matchPercentage: 95,
            image: "/suggestions/cq-2.jpg",
            items: [
                { name: "Oversized Knit Sweater", type: "top" },
                { name: "Leggings", type: "bottom", desc: "Black high quality" },
                { name: "Fuzzy Slides or Uggs", type: "shoes" },
                { name: "Tote Bag", type: "accessory", desc: "Canvas" }
            ]
        }
    ],
    "Boho Spirit": [
        {
            id: "bs_1",
            title: "Festival Ready",
            description: "Free-spirited vibes with textures and earth tones.",
            occasion: "Party",
            matchPercentage: 94,
            image: "/suggestions/bs-1.jpg",
            items: [
                { name: "Crochet Top", type: "top", desc: "Cream or tan" },
                { name: "Denim Cut-offs", type: "bottom", desc: "Distressed" },
                { name: "Kimono", type: "outerwear", desc: "Floral or patterned" },
                { name: "Cowboy Boots", type: "shoes" }
            ]
        },
        {
            id: "bs_2",
            title: "Earthy Goddess",
            description: "Flowy silhouettes in nature-inspired colors.",
            occasion: "Casual",
            matchPercentage: 92,
            image: "/suggestions/bs-2.jpg",
            items: [
                { name: "Maxi Dress", type: "top", desc: "Paisley print, rust or olive" },
                { name: "Gladiator Sandals", type: "shoes", desc: "Tan leather" },
                { name: "Wide Brim Hat", type: "accessory" },
                { name: "Layered Necklaces", type: "accessory", desc: "Turquoise stones" }
            ]
        }
    ]
};

const OUTFITS_MALE: Record<string, OutfitSuggestion[]> = {
  "Minimalist King": [
        {
            id: "mk_1",
            title: "The Scandinavian",
            description: "Clean, functional, and effortlessly cool.",
            occasion: "Work",
            matchPercentage: 97,
            image: "/suggestions/mk-1.jpg",
            items: [
                { name: "White Heavyweight Tee", type: "top", desc: "High quality cotton" },
                { name: "Black Trousers", type: "bottom", desc: "Slim cropped fit" },
                { name: "Common Projects / Minimal Sneakers", type: "shoes", desc: "All white leather" },
                { name: "Silver Minimal Watch", type: "accessory" }
            ]
        },
        {
            id: "mk_2",
            title: "Tonal Grey",
            description: "Mastering the monochrome look.",
            occasion: "Date",
            matchPercentage: 94,
            image: "/suggestions/mk-2.jpg",
            items: [
                { name: "Grey Crewneck Sweater", type: "top" },
                { name: "Charcoal Chinos", type: "bottom" },
                { name: "Chelsea Boots", type: "shoes", desc: "Black suede" },
                { name: "Long Wool Coat", type: "outerwear", desc: "Black or dark grey" }
            ]
        }
    ],
    "Streetwear Icon": [
        {
            id: "si_1",
            title: "Hype Beast Essentials",
            description: "Bold logos and oversized fits.",
            occasion: "Trendy",
            matchPercentage: 96,
            image: "/suggestions/si-1.jpg",
            items: [
                { name: "Graphic Hoodie", type: "top", desc: "Oversized, branded" },
                { name: "Cargo Joggers", type: "bottom", desc: "Black with straps" },
                { name: "Air Jordan 1s", type: "shoes", desc: "High tops" },
                { name: "Beanie", type: "accessory", desc: "Fisherman style" }
            ]
        },
        {
            id: "si_2",
            title: "Layered Look",
            description: "Mixing textures and lengths.",
            occasion: "Casual",
            matchPercentage: 93,
            image: "/suggestions/si-2.jpg",
            items: [
                { name: "Oversized Flannel", type: "top", desc: "Worn over a tee" },
                { name: "Distressed Jeans", type: "bottom", desc: "Light wash" },
                { name: "Dunk Lows", type: "shoes" },
                { name: "Crossbody Bag", type: "accessory" }
            ]
        }
    ],
    "Modern Gentleman": [
        {
            id: "mg_1",
            title: "Smart Casual",
            description: "Polished but not stuffy.",
            occasion: "Work",
            matchPercentage: 98,
            image: "/suggestions/mg-1.jpg",
            items: [
                { name: "Oxford Button-Down", type: "top", desc: "Light blue or white, tucked in" },
                { name: "Navy Chinos", type: "bottom", desc: "Tailored fit" },
                { name: "Brown Leather Loafers", type: "shoes" },
                { name: "Leather Belt", type: "accessory", desc: "Matches shoes" }
            ]
        },
        {
            id: "mg_2",
            title: "Weekend Polo",
            description: "Classic style for downtime.",
            occasion: "Casual",
            matchPercentage: 92,
            image: "/suggestions/mg-2.jpg",
            items: [
                { name: "Knit Polo Shirt", type: "top", desc: "Navy or dark green" },
                { name: "Beige Trousers", type: "bottom", desc: "Linen blend" },
                { name: "Suede Loafers", type: "shoes" },
                { name: "Sunglasses", type: "accessory", desc: "Wayfarer style" }
            ]
        }
    ],
    "Casual Cool": [
        {
            id: "cc_1",
            title: "The Weekend Uniform",
            description: "Reliable, comfortable, and always looks good.",
            occasion: "Casual",
            matchPercentage: 99,
            image: "/suggestions/cc-1.jpg",
            items: [
                { name: "Plain Grey Tee", type: "top", desc: "Well fitted" },
                { name: "Blue Jeans", type: "bottom", desc: "Straight leg, classic wash" },
                { name: "Canvas Sneakers", type: "shoes", desc: "Converse or Vans" },
                { name: "Bomber Jacket", type: "outerwear", desc: "Olive green" }
            ]
        },
        {
            id: "cc_2",
            title: "Denim on Denim",
            description: "Rocking the Canadian tuxedo the right way.",
            occasion: "Date",
            matchPercentage: 85,
            image: "/suggestions/cc-2.jpg",
            items: [
                { name: "Black Denim Jacket", type: "outerwear" },
                { name: "White Tee", type: "top" },
                { name: "Black Jeans", type: "bottom", desc: "Slim fit" },
                { name: "White Leather Sneakers", type: "shoes" }
            ]
        }
    ],
    "Athleisure Pro": [
        {
            id: "ap_1",
            title: "Gym to Street",
            description: "Performance fabrics meeting street style.",
            occasion: "Sport",
            matchPercentage: 97,
            image: "/suggestions/ap-1.jpg",
            items: [
                { name: "Performance Tee", type: "top", desc: "Moisture wicking, fitted" },
                { name: "Tech Fleece Joggers", type: "bottom", desc: "Tapered" },
                { name: "Running Shoes", type: "shoes", desc: "Ultra boost or similar" },
                { name: "Gym Bag", type: "accessory", desc: "Duffle" }
            ]
        },
        {
            id: "ap_2",
            title: "Cozy Rest Day",
            description: "Maximum comfort without looking sloppy.",
            occasion: "Casual",
            matchPercentage: 95,
            image: "/suggestions/ap-2.jpg",
            items: [
                { name: "Matching Hoodie Set", type: "top", desc: "Grey or earth tone" },
                { name: "Puffer Vest", type: "outerwear", desc: "Black" },
                { name: "Slides with Socks", type: "shoes", desc: "The ultimate flex" },
                { name: "Baseball Cap", type: "accessory" }
            ]
        }
    ],
    "Urban Explorer": [
        {
            id: "ue_1",
            title: "Gorpcore Vibes",
            description: "Functional outdoor gear worn in the city.",
            occasion: "Trendy",
            matchPercentage: 94,
            image: "/suggestions/ue-1.jpg",
            items: [
                { name: "Waterproof Shell Jacket", type: "outerwear", desc: "North Face or Arc'teryx" },
                { name: "Cargo Pants", type: "bottom", desc: "Technical fabric" },
                { name: "Trail Sneakers", type: "shoes", desc: "Salomon or similar" },
                { name: "Beanie", type: "accessory" }
            ]
        },
        {
            id: "ue_2",
            title: "Rugged Layers",
            description: "Ready for whatever the weather throws at you.",
            occasion: "Casual",
            matchPercentage: 92,
            image: "/suggestions/ue-2.jpg",
            items: [
                { name: "Flannel Shirt", type: "top", desc: "Heavyweight buffalo check" },
                { name: "Raw Denim Jeans", type: "bottom", desc: "Dark indigo" },
                { name: "Work Boots", type: "shoes", desc: "Red Wings or Timberland" },
                { name: "Canvas Backpack", type: "accessory" }
            ]
        }
    ]
};

/* -------------------- COMPONENT -------------------- */

export default function SuggestionsPage() {
  const searchParams = useSearchParams();

  const gender = searchParams.get("gender");
  const persona = searchParams.get("persona");

  const outfitSource =
    gender === "male" ? OUTFITS_MALE : OUTFITS_FEMALE;

  const personaOutfits =
    persona && outfitSource[persona]
      ? outfitSource[persona]
      : Object.values(outfitSource).flat();

  const limitedOutfits = personaOutfits.slice(0, 4);

  return (
    <div className="min-h-screen bg-black text-white px-6 py-20">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold">
            Your Curated Fits
          </h1>
          {persona && (
            <p className="text-gray-400 mt-4 text-lg">
              Styled for:{" "}
              <span className="text-white font-semibold">
                {persona}
              </span>
            </p>
          )}
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {limitedOutfits.map((outfit) => (
            <div
              key={outfit.id}
              className="bg-[#111] border border-[#1f1f1f] rounded-2xl overflow-hidden hover:border-white transition"
            >
              {outfit.image && (
                <img
                  src={outfit.image}
                  alt={outfit.title}
                  className="w-full h-48 object-cover"
                />
              )}

              <div className="p-5 space-y-3">
                <h2 className="text-lg font-semibold">
                  {outfit.title}
                </h2>

                <p className="text-gray-400 text-sm">
                  {outfit.description}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{outfit.occasion}</span>
                  <span>{outfit.matchPercentage}% Match</span>
                </div>

                <button className="w-full mt-3 py-2 bg-white text-black rounded-full text-sm font-semibold hover:opacity-90 transition">
                  Try This Look
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
