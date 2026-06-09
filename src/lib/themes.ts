import type { Item } from "./data";

export type Vibe =
  | "water" // rafting, kayak, body surf, zorbing, expedition
  | "adrenaline" // bungee, swing, reverse bungee, scad
  | "air" // zipline, flying fox, superman, sky cycling, balloon
  | "fire" // camping, bonfire
  | "earth" // climbing, rappel, trek, rope, paintball, MTB
  | "ride" // rentals, bike tours, karting, atv, nearby
  | "pilgrim" // yatra, haridwar
  | "guide";

export interface Theme {
  vibe: Vibe;
  a: string; // primary accent
  b: string; // secondary accent
  label: string; // vibe word shown in UI
  ink: string; // text color on accent buttons
}

const THEMES: Record<Vibe, Theme> = {
  water: { vibe: "water", a: "#2ee6c8", b: "#3aa0ff", label: "White-water", ink: "#04110f" },
  adrenaline: { vibe: "adrenaline", a: "#ff5a3c", b: "#ff2e74", label: "Free-fall", ink: "#1a0606" },
  air: { vibe: "air", a: "#5cc8ff", b: "#a78bfa", label: "Take flight", ink: "#06121a" },
  fire: { vibe: "fire", a: "#ffae3b", b: "#ff5a3c", label: "Firelit nights", ink: "#1a0d02" },
  earth: { vibe: "earth", a: "#86e08a", b: "#2ee6c8", label: "On the rock", ink: "#06140a" },
  ride: { vibe: "ride", a: "#ff8a1e", b: "#f5ce2e", label: "Open road", ink: "#1a0d02" },
  pilgrim: { vibe: "pilgrim", a: "#f5ce2e", b: "#ff9e2c", label: "Sacred trail", ink: "#1a1304" },
  guide: { vibe: "guide", a: "#f5ce2e", b: "#2ee6c8", label: "Know before you go", ink: "#0a1410" },
};

const SLUG_VIBE: Record<string, Vibe> = {
  "river-rafting-in-rishikesh": "water",
  "kayaking-in-rishikesh": "water",
  "cliff-jumping-in-rishikesh": "water",
  "body-surfing-in-rishikesh": "water",
  "water-zorbing-in-rishikesh": "water",
  "ganga-river-expedition-rishikesh": "water",
  "bungee-jumping-in-rishikesh": "adrenaline",
  "giant-swing-in-rishikesh": "adrenaline",
  "reverse-bungee-in-rishikesh": "adrenaline",
  "scad-jump-in-rishikesh": "adrenaline",
  "zipline-in-rishikesh": "air",
  "flying-fox-in-rishikesh": "air",
  "superman-shot-in-rishikesh": "air",
  "sky-cycling-in-rishikesh": "air",
  "hot-air-balloon-in-rishikesh": "air",
  "camping-in-rishikesh": "fire",
  "night-camping-bonfire-in-rishikesh": "fire",
  "rock-climbing-in-rishikesh": "earth",
  "rappelling-in-rishikesh": "earth",
  "wall-climbing-in-rishikesh": "earth",
  "tree-climbing-in-rishikesh": "earth",
  "rope-course-in-rishikesh": "earth",
  "paintball-in-rishikesh": "earth",
  "mountain-biking-in-rishikesh": "earth",
  "waterfall-trekking-in-rishikesh": "earth",
  "go-karting-in-rishikesh": "ride",
  "atv-quad-biking-in-rishikesh": "ride",
};

export function themeFor(item: Item): Theme {
  // explicit per-slug override first
  const direct = SLUG_VIBE[item.slug];
  if (direct) return THEMES[direct];

  // rafting stretch sub-pages → water
  if (item.category === "rafting-stretch") return THEMES.water;

  const byCat: Record<string, Vibe> = {
    activity: "earth",
    package: "fire",
    rental: "ride",
    "bike-tour": "ride",
    yatra: "pilgrim",
    haridwar: "pilgrim",
    nearby: "ride",
    guide: "guide",
  };
  return THEMES[byCat[item.category] ?? "guide"];
}
