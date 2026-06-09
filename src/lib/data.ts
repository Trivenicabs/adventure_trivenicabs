import { type ImgKey } from "./images";

export type Category =
  | "activity"
  | "rafting-stretch"
  | "package"
  | "rental"
  | "bike-tour"
  | "yatra"
  | "haridwar"
  | "nearby"
  | "guide";

export interface Item {
  slug: string; // path on adventure.trivenicabs.in (no leading slash)
  title: string;
  keyword: string;
  category: Category;
  image: ImgKey;
  tagline: string;
  priceFrom?: number; // INR
  unit?: string; // per person / per day
  duration?: string;
  meta?: { label: string; value: string }[];
  highlights?: string[];
  emoji?: string;
  badge?: string;
  parent?: string; // for sub-pages (e.g. rafting stretch -> river-rafting-in-rishikesh)
}

/* ------------------------------------------------------------------ */
/* 4.2 Adventure Activity Hub Pages (26)                               */
/* ------------------------------------------------------------------ */
export const activities: Item[] = [
  {
    slug: "river-rafting-in-rishikesh",
    title: "River Rafting in Rishikesh",
    keyword: "river rafting in rishikesh",
    category: "activity",
    image: "rafting",
    emoji: "🛶",
    badge: "Most Popular",
    tagline: "Ride grade I–IV rapids on the holy Ganga across 9, 16, 26 & 36 km stretches.",
    priceFrom: 600,
    unit: "per person",
    duration: "1–4 hrs",
    meta: [
      { label: "Rapids", value: "Grade I – IV" },
      { label: "Min age", value: "14 yrs" },
      { label: "Season", value: "Sep – Jun" },
    ],
    highlights: ["Roller Coaster & Golf Course rapids", "Certified guides + safety kayak", "Cliff jump & body surf included", "Photos & GoPro add-on"],
  },
  {
    slug: "bungee-jumping-in-rishikesh",
    title: "Bungee Jumping in Rishikesh",
    keyword: "bungee jumping in rishikesh",
    category: "activity",
    image: "bungeeJump",
    emoji: "🪂",
    badge: "Adrenaline",
    tagline: "India's highest fixed-platform jump — a 83 m free-fall over a Himalayan gorge.",
    priceFrom: 3700,
    unit: "per jump",
    duration: "2–3 hrs",
    meta: [
      { label: "Height", value: "83 m" },
      { label: "Max weight", value: "110 kg" },
      { label: "Min age", value: "12 yrs" },
    ],
    highlights: ["Australian-engineered cantilever", "Certified master jumpers", "Free-fall video included", "Reverse bungee & swing nearby"],
  },
  { slug: "camping-in-rishikesh", title: "Camping in Rishikesh", keyword: "camping in rishikesh", category: "activity", image: "camping", emoji: "🏕️", tagline: "Riverside Swiss tents, bonfire nights and a sky full of Himalayan stars.", priceFrom: 999, unit: "per person", duration: "1 night", highlights: ["Riverside Swiss tents", "Bonfire + music", "Veg/non-veg meals", "Rafting combo available"] },
  { slug: "kayaking-in-rishikesh", title: "Kayaking in Rishikesh", keyword: "kayaking in rishikesh", category: "activity", image: "kayak", emoji: "🚣", tagline: "Learn to read the Ganga on a guided kayak course for beginners to pros.", priceFrom: 1500, unit: "per person", duration: "2–4 hrs", highlights: ["Beginner to advanced", "Multi-day courses", "Safety boat support"] },
  { slug: "zipline-in-rishikesh", title: "Zipline over the Ganga", keyword: "zipline rishikesh ganga", category: "activity", image: "air", emoji: "🔗", tagline: "Fly 400 m across the river valley at up to 140 m height.", priceFrom: 1799, unit: "per person", duration: "1 hr", highlights: ["400 m span", "Up to 140 m high", "Combo with giant swing"] },
  { slug: "giant-swing-in-rishikesh", title: "Giant Swing in Rishikesh", keyword: "giant swing rishikesh", category: "activity", image: "bungeeJump", emoji: "🎢", tagline: "A heart-in-mouth pendulum swing into a 83 m gorge.", priceFrom: 3500, unit: "per person", duration: "2 hrs", highlights: ["83 m swing arc", "Solo or tandem", "Pro video included"] },
  { slug: "reverse-bungee-in-rishikesh", title: "Reverse Bungee in Rishikesh", keyword: "reverse bungee rishikesh", category: "activity", image: "bungeeJump", emoji: "🚀", tagline: "Catapult skyward at 4G in this ejection-seat thrill.", priceFrom: 1000, unit: "per person", duration: "30 min", highlights: ["4G launch", "Tandem ride", "Quick & intense"] },
  { slug: "flying-fox-in-rishikesh", title: "Flying Fox in Rishikesh", keyword: "flying fox rishikesh", category: "activity", image: "air", emoji: "🦊", tagline: "A 1 km tandem glide soaring above the Shivpuri valley.", priceFrom: 1699, unit: "per person", duration: "1 hr", highlights: ["1 km cable", "Up to 3 riders", "Valley views"] },
  { slug: "cliff-jumping-in-rishikesh", title: "Cliff Jumping in Rishikesh", keyword: "cliff jumping rishikesh", category: "activity", image: "whitewater", emoji: "🏊", tagline: "Leap from riverside cliffs into the cool Ganga, guide-supervised.", priceFrom: 600, unit: "with rafting", duration: "incl. rafting", highlights: ["Supervised jumps", "Part of rafting trip", "Life jackets provided"] },
  { slug: "body-surfing-in-rishikesh", title: "Body Surfing in Rishikesh", keyword: "body surfing rishikesh", category: "activity", image: "whitewater", emoji: "🌊", tagline: "Float feet-first through gentle rapids — the purest river thrill.", priceFrom: 600, unit: "with rafting", duration: "incl. rafting", highlights: ["Guide-led", "Calm rapids", "Family friendly"] },
  { slug: "superman-shot-in-rishikesh", title: "Superman Zipline in Rishikesh", keyword: "superman zipline rishikesh", category: "activity", image: "air", emoji: "🦸", tagline: "Fly face-down, arms out, in a true superman harness across the gorge.", priceFrom: 1500, unit: "per person", duration: "45 min", highlights: ["Face-down flight", "Harnessed superman pose", "Photo set included"] },
  { slug: "scad-jump-in-rishikesh", title: "SCAD Jump in Rishikesh", keyword: "scad jump rishikesh", category: "activity", image: "bungeeJump", emoji: "😱", tagline: "A no-rope free-fall into a giant net — the ultimate fear test.", priceFrom: 2500, unit: "per person", duration: "1 hr", highlights: ["Rope-free fall", "Net landing", "Pure free-fall rush"] },
  { slug: "rope-course-in-rishikesh", title: "Rope Course in Rishikesh", keyword: "rope course rishikesh", category: "activity", image: "climbing", emoji: "🧗", tagline: "Burma bridges, wobbly logs and high-rope challenges for all ages.", priceFrom: 500, unit: "per person", duration: "1–2 hrs", highlights: ["High & low elements", "Team building", "Kid friendly"] },
  { slug: "rock-climbing-in-rishikesh", title: "Rock Climbing in Rishikesh", keyword: "rock climbing rishikesh", category: "activity", image: "climbing", emoji: "🪨", tagline: "Scale natural granite faces with certified instructors and full gear.", priceFrom: 800, unit: "per person", duration: "2 hrs", highlights: ["Natural rock faces", "Gear + belay included", "Beginner routes"] },
  { slug: "rappelling-in-rishikesh", title: "Rappelling in Rishikesh", keyword: "rappelling in rishikesh", category: "activity", image: "climbing", emoji: "⛰️", tagline: "Descend sheer cliffs and waterfalls on rope with expert guides.", priceFrom: 800, unit: "per person", duration: "2 hrs", highlights: ["Cliff & waterfall", "Full safety gear", "All levels"] },
  { slug: "wall-climbing-in-rishikesh", title: "Wall Climbing in Rishikesh", keyword: "wall climbing rishikesh", category: "activity", image: "climbing", emoji: "🧱", tagline: "Artificial wall climbing — perfect first taste of vertical adventure.", priceFrom: 400, unit: "per person", duration: "1 hr", highlights: ["Artificial wall", "Auto-belay", "Great for kids"] },
  { slug: "tree-climbing-in-rishikesh", title: "Tree Climbing in Rishikesh", keyword: "tree climbing rishikesh", category: "activity", image: "trek", emoji: "🌳", tagline: "Canopy climbing through Himalayan forest with arborist gear.", priceFrom: 600, unit: "per person", duration: "1–2 hrs", highlights: ["Forest canopy", "Arborist ropes", "Eco adventure"] },
  { slug: "sky-cycling-in-rishikesh", title: "Sky Cycling in Rishikesh", keyword: "sky cycling rishikesh", category: "activity", image: "air", emoji: "🚲", tagline: "Pedal a cycle along a high wire suspended above the valley.", priceFrom: 700, unit: "per person", duration: "30 min", highlights: ["High-wire cycle", "Valley views", "Harnessed"] },
  { slug: "go-karting-in-rishikesh", title: "Go Karting in Rishikesh", keyword: "go karting rishikesh", category: "activity", image: "gokart", emoji: "🏎️", tagline: "Race petrol karts on a twisting outdoor circuit near Rishikesh.", priceFrom: 500, unit: "per ride", duration: "10 laps", highlights: ["Outdoor track", "Petrol karts", "Family racing"] },
  { slug: "paintball-in-rishikesh", title: "Paintball in Rishikesh", keyword: "paintball rishikesh", category: "activity", image: "paintball", emoji: "🎯", tagline: "Team battle on a themed arena with markers, masks and bunkers.", priceFrom: 400, unit: "per person", duration: "1 hr", highlights: ["Themed arena", "Gear + 50 balls", "Great for groups"] },
  { slug: "water-zorbing-in-rishikesh", title: "Water Zorbing in Rishikesh", keyword: "water zorbing rishikesh", category: "activity", image: "whitewater", emoji: "🫧", tagline: "Roll across water inside a giant transparent orb.", priceFrom: 300, unit: "per ride", duration: "15 min", highlights: ["Giant orb", "Fun for kids", "Cool-off splash"] },
  { slug: "mountain-biking-in-rishikesh", title: "Mountain Biking in Rishikesh", keyword: "mountain biking rishikesh", category: "activity", image: "mtb", emoji: "🚵", tagline: "Single-track forest trails and ridge rides on geared MTBs.", priceFrom: 1200, unit: "per person", duration: "Half day", highlights: ["Forest single-track", "Geared MTBs + helmet", "Guided trails"] },
  { slug: "waterfall-trekking-in-rishikesh", title: "Waterfall Trekking in Rishikesh", keyword: "neer waterfall trek rishikesh", category: "activity", image: "waterfall", emoji: "💦", tagline: "Trek to Neer Garh & Patna waterfalls through forest paths.", priceFrom: 500, unit: "per person", duration: "Half day", highlights: ["Neer Garh falls", "Forest trail", "Swim pools"] },
  { slug: "ganga-river-expedition-rishikesh", title: "Ganga River Expedition", keyword: "ganga river expedition rafting", category: "activity", image: "rafting", emoji: "⛵", tagline: "A multi-day camping + rafting expedition down the upper Ganga.", priceFrom: 6500, unit: "per person", duration: "2–3 days", highlights: ["Multi-day raft + camp", "Remote beaches", "Full crew & meals"] },
  { slug: "night-camping-bonfire-in-rishikesh", title: "Night Camping & Bonfire", keyword: "night camping bonfire rishikesh", category: "activity", image: "bonfire", emoji: "🔥", tagline: "Music, bonfire and BBQ under the stars at a riverside camp.", priceFrom: 1199, unit: "per person", duration: "1 night", highlights: ["Bonfire + music", "BBQ dinner", "Riverside tents"] },
  { slug: "hot-air-balloon-in-rishikesh", title: "Hot Air Balloon in Rishikesh", keyword: "hot air balloon rishikesh", category: "activity", image: "balloon", emoji: "🎈", badge: "New", tagline: "Drift over the Himalayan foothills at sunrise — a once-in-a-lifetime view.", priceFrom: 5500, unit: "per person", duration: "1–2 hrs", highlights: ["Sunrise flight", "Aerial Ganga views", "Certified pilots"] },
];

/* 4.3 River Rafting — Stretch Sub-Pages (4) */
export const raftingStretches: Item[] = [
  { slug: "river-rafting-in-rishikesh/9-km-brahmapuri-to-nimbeach", title: "9 km Rafting — Brahmapuri to Nim Beach", keyword: "9 km rafting rishikesh", category: "rafting-stretch", parent: "river-rafting-in-rishikesh", image: "rafting", emoji: "🛶", tagline: "The easiest stretch — 3–4 fun rapids, perfect for first-timers & families.", priceFrom: 600, unit: "per person", duration: "1 hr", meta: [{ label: "Distance", value: "9 km" }, { label: "Rapids", value: "Grade I–II" }, { label: "Best for", value: "Beginners" }] },
  { slug: "river-rafting-in-rishikesh/16-km-shivpuri-to-nimbeach", title: "16 km Rafting — Shivpuri to Nim Beach", keyword: "16 km rafting rishikesh", category: "rafting-stretch", parent: "river-rafting-in-rishikesh", image: "whitewater", emoji: "🛶", badge: "Most Popular", tagline: "The classic — Roller Coaster & Golf Course rapids, body surf & cliff jump.", priceFrom: 1000, unit: "per person", duration: "2–3 hrs", meta: [{ label: "Distance", value: "16 km" }, { label: "Rapids", value: "Grade II–III" }, { label: "Best for", value: "Everyone" }] },
  { slug: "river-rafting-in-rishikesh/26-km-marine-drive-tonim-beach", title: "26 km Rafting — Marine Drive to Nim Beach", keyword: "26 km rafting rishikesh", category: "rafting-stretch", parent: "river-rafting-in-rishikesh", image: "whitewater", emoji: "🛶", tagline: "Bigger water and more rapids for thrill-seekers wanting extra mileage.", priceFrom: 1500, unit: "per person", duration: "3–4 hrs", meta: [{ label: "Distance", value: "26 km" }, { label: "Rapids", value: "Grade III" }, { label: "Best for", value: "Thrill seekers" }] },
  { slug: "river-rafting-in-rishikesh/36-km-kaudiyala-to-nimbeach", title: "36 km Rafting — Kaudiyala to Nim Beach", keyword: "36 km rafting rishikesh", category: "rafting-stretch", parent: "river-rafting-in-rishikesh", image: "rafting", emoji: "🛶", badge: "Pro", tagline: "The ultimate full-day expedition with grade IV 'The Wall' & 'Daniel's Dip'.", priceFrom: 2000, unit: "per person", duration: "Full day", meta: [{ label: "Distance", value: "36 km" }, { label: "Rapids", value: "Grade III–IV" }, { label: "Best for", value: "Experienced" }] },
];

/* 4.4 Adventure Packages & Combos (12) */
export const packages: Item[] = [
  { slug: "rishikesh-adventure-packages", title: "Rishikesh Adventure Packages", keyword: "rishikesh adventure packages", category: "package", image: "camping", emoji: "🎒", badge: "Best Value", tagline: "Hand-picked combos of rafting, camping, bungee & zipline at one price.", priceFrom: 1499, unit: "per person", duration: "1–3 days" },
  { slug: "rafting-and-camping-package-rishikesh", title: "Rafting + Camping Package", keyword: "rafting and camping rishikesh", category: "package", image: "camping", emoji: "🏕️", badge: "Bestseller", tagline: "16 km rafting + riverside Swiss tent + bonfire + all meals.", priceFrom: 1599, unit: "per person", duration: "1 night 2 days" },
  { slug: "zipline-rafting-camping-package-rishikesh", title: "Zipline + Rafting + Camping", keyword: "zipline rafting camping combo", category: "package", image: "zipline", emoji: "🔗", tagline: "Three thrills, one weekend — fly, raft and sleep by the Ganga.", priceFrom: 2199, unit: "per person", duration: "1 night 2 days" },
  { slug: "bungee-rafting-camping-combo-rishikesh", title: "Bungee + Rafting + Camping", keyword: "bungee rafting camping combo", category: "package", image: "bungeeJump", emoji: "🪂", badge: "Adrenaline", tagline: "The full adrenaline weekend including India's highest bungee.", priceFrom: 4999, unit: "per person", duration: "1 night 2 days" },
  { slug: "camping-and-kayaking-course-rishikesh", title: "Camping + Kayaking Course", keyword: "kayaking course rishikesh", category: "package", image: "kayak", emoji: "🚣", tagline: "Learn to kayak over 2–4 days with riverside camping included.", priceFrom: 6999, unit: "per person", duration: "2–4 days" },
  { slug: "rishikesh-1-night-2-day-package", title: "Rishikesh 1 Night 2 Day Package", keyword: "rishikesh 1 night 2 day package", category: "package", image: "bonfire", emoji: "🌙", tagline: "The perfect quick escape — adventure by day, bonfire by night.", priceFrom: 1799, unit: "per person", duration: "1N / 2D" },
  { slug: "rishikesh-2-night-3-day-package", title: "Rishikesh 2 Night 3 Day Package", keyword: "rishikesh 2 night 3 day package", category: "package", image: "camping", emoji: "🗓️", tagline: "More time, more thrills — multi-activity itinerary with stays & transfers.", priceFrom: 3499, unit: "per person", duration: "2N / 3D" },
  { slug: "weekend-adventure-package-rishikesh", title: "Weekend Adventure Package", keyword: "rishikesh weekend trip package", category: "package", image: "riverValley", emoji: "🚐", badge: "Popular", tagline: "Friday-to-Sunday adventure with Delhi pick-up option.", priceFrom: 2499, unit: "per person", duration: "Weekend" },
  { slug: "family-adventure-package-rishikesh", title: "Family Adventure Package", keyword: "family adventure trip rishikesh", category: "package", image: "camping", emoji: "👨‍👩‍👧", tagline: "Kid-safe activities, comfy tents and gentle rafting for the whole family.", priceFrom: 1999, unit: "per person", duration: "Flexible" },
  { slug: "corporate-team-outing-rishikesh", title: "Corporate Team Outing", keyword: "corporate team outing rishikesh", category: "package", image: "trek", emoji: "🏢", tagline: "Team-building, rope courses and adventure for groups of 10–200.", priceFrom: 2499, unit: "per person", duration: "1–2 days" },
  { slug: "college-group-trip-rishikesh", title: "College Group Trip", keyword: "college group trip rishikesh", category: "package", image: "bonfire", emoji: "🎓", tagline: "Budget group rates, DJ bonfire nights and non-stop adventure.", priceFrom: 1299, unit: "per person", duration: "1–2 days" },
  { slug: "delhi-to-rishikesh-adventure-tour", title: "Delhi to Rishikesh Adventure Tour", keyword: "delhi to rishikesh adventure tour", category: "package", image: "bikeRoad", emoji: "🚖", badge: "Cab + Adventure", tagline: "Round-trip Triveni cab from Delhi bundled with your adventure package.", priceFrom: 3999, unit: "per person", duration: "2–3 days" },
];

/* 4.5 Bike & Scooty Rentals — Hub & Model Pages (9) */
export const rentals: Item[] = [
  { slug: "bike-rental-in-rishikesh", title: "Bike Rental in Rishikesh", keyword: "bike rental in rishikesh", category: "rental", image: "enfield", emoji: "🏍️", badge: "Self-Drive", tagline: "Self-drive Royal Enfields, KTMs & more — hourly, daily or for the Himalayas.", priceFrom: 800, unit: "per day", duration: "Hourly / Daily" },
  { slug: "scooty-rental-in-rishikesh", title: "Scooty Rental in Rishikesh", keyword: "scooty rental in rishikesh", category: "rental", image: "scooter", emoji: "🛵", tagline: "Easy, fuel-light Activa & Jupiter scooters for exploring town & ghats.", priceFrom: 400, unit: "per day", duration: "Hourly / Daily" },
  { slug: "bike-rental-in-rishikesh/royal-enfield-classic-350", title: "Royal Enfield Classic 350 Rental", keyword: "royal enfield rental rishikesh", category: "rental", parent: "bike-rental-in-rishikesh", image: "enfield", emoji: "🏍️", badge: "Iconic", tagline: "The timeless thump — ideal for Rishikesh ghats and easy hill rides.", priceFrom: 1000, unit: "per day" },
  { slug: "bike-rental-in-rishikesh/royal-enfield-himalayan", title: "Royal Enfield Himalayan Rental", keyword: "himalayan rental rishikesh", category: "rental", parent: "bike-rental-in-rishikesh", image: "himalayanBike", emoji: "🗻", badge: "Tour Ready", tagline: "Purpose-built ADV for Chopta, Kedarnath, Spiti and high passes.", priceFrom: 1400, unit: "per day" },
  { slug: "bike-rental-in-rishikesh/ktm-duke-390", title: "KTM Duke 390 Rental", keyword: "ktm rental rishikesh", category: "rental", parent: "bike-rental-in-rishikesh", image: "bikeRoad", emoji: "🧡", tagline: "Sharp, fast and fun for spirited hill twisties.", priceFrom: 1600, unit: "per day" },
  { slug: "scooty-rental-in-rishikesh/honda-activa", title: "Honda Activa on Rent", keyword: "activa on rent rishikesh", category: "rental", parent: "scooty-rental-in-rishikesh", image: "scooter", emoji: "🛵", tagline: "The dependable city scooter — light, easy and economical.", priceFrom: 400, unit: "per day" },
  { slug: "scooty-rental-in-rishikesh/tvs-jupiter", title: "TVS Jupiter on Rent", keyword: "scooter on rent rishikesh", category: "rental", parent: "scooty-rental-in-rishikesh", image: "scooter", emoji: "🛵", tagline: "Comfy ride with big storage — perfect for two and a day-bag.", priceFrom: 400, unit: "per day" },
  { slug: "atv-quad-biking-in-rishikesh", title: "ATV / Quad Biking in Rishikesh", keyword: "atv quad biking rishikesh", category: "rental", image: "bikeRoad", emoji: "🏍️", tagline: "Rip around a dirt track on a 4-wheel quad — no licence needed.", priceFrom: 500, unit: "per ride" },
  { slug: "bike-rental-price-in-rishikesh", title: "Bike Rental Price in Rishikesh", keyword: "bike rent price rishikesh", category: "rental", image: "enfield", emoji: "💰", tagline: "Transparent hourly, daily & weekly rates for every model — no hidden fees.", priceFrom: 400, unit: "per day" },
];

/* 4.6 Bike-Tour Routes — Himalayan Circuit (6) */
export const bikeTours: Item[] = [
  { slug: "bike-tour-rishikesh-to-kheerganga", title: "Rishikesh to Kheerganga Bike Trip", keyword: "rishikesh to kheerganga bike trip", category: "bike-tour", image: "himalayanBike", emoji: "🏔️", tagline: "Ride to Parvati Valley and trek to the hot springs of Kheerganga.", priceFrom: 8999, unit: "per rider", duration: "4–5 days" },
  { slug: "bike-tour-rishikesh-to-chopta-tungnath", title: "Rishikesh to Chopta–Tungnath Bike Trip", keyword: "rishikesh to chopta bike trip", category: "bike-tour", image: "chopta", emoji: "🏔️", badge: "Weekend", tagline: "The 'Mini Switzerland of India' and the world's highest Shiva temple.", priceFrom: 5999, unit: "per rider", duration: "2–3 days" },
  { slug: "bike-tour-rishikesh-to-kedarnath", title: "Rishikesh to Kedarnath Bike Trip", keyword: "rishikesh to kedarnath bike trip", category: "bike-tour", image: "kedarnath", emoji: "🛕", tagline: "Ride the Himalayas to the holy Kedarnath base, then trek up.", priceFrom: 7999, unit: "per rider", duration: "3–4 days" },
  { slug: "bike-tour-rishikesh-to-badrinath", title: "Rishikesh to Badrinath Bike Trip", keyword: "rishikesh to badrinath bike trip", category: "bike-tour", image: "kedarnath", emoji: "🛕", tagline: "A spiritual ride to Badrinath and the last village, Mana.", priceFrom: 8499, unit: "per rider", duration: "3–4 days" },
  { slug: "bike-tour-rishikesh-to-auli", title: "Rishikesh to Auli Bike Trip", keyword: "rishikesh to auli bike trip", category: "bike-tour", image: "himalaya", emoji: "🎿", tagline: "Ride to India's premier ski meadow with Nanda Devi views.", priceFrom: 6499, unit: "per rider", duration: "2–3 days" },
  { slug: "bike-tour-rishikesh-to-spiti-valley", title: "Rishikesh to Spiti Valley Bike Trip", keyword: "rishikesh to spiti bike trip", category: "bike-tour", image: "himalaya", emoji: "🏜️", badge: "Epic", tagline: "The ultimate high-altitude desert expedition over legendary passes.", priceFrom: 22999, unit: "per rider", duration: "8–10 days" },
];

/* 4.7 Char Dham & Yatra from Rishikesh (7) */
export const yatra: Item[] = [
  { slug: "char-dham-yatra-from-rishikesh", title: "Char Dham Yatra from Rishikesh", keyword: "char dham yatra from rishikesh", category: "yatra", image: "kedarnath", emoji: "🛕", badge: "Pilgrimage", tagline: "Yamunotri, Gangotri, Kedarnath & Badrinath — the complete sacred circuit.", priceFrom: 18999, unit: "per person", duration: "10–11 days" },
  { slug: "do-dham-yatra-from-rishikesh", title: "Do Dham Yatra from Rishikesh", keyword: "do dham yatra from rishikesh", category: "yatra", image: "kedarnath", emoji: "🛕", tagline: "Kedarnath & Badrinath together in one guided journey.", priceFrom: 11999, unit: "per person", duration: "6–7 days" },
  { slug: "kedarnath-tour-from-rishikesh", title: "Kedarnath Tour from Rishikesh", keyword: "kedarnath tour from rishikesh", category: "yatra", image: "kedarnath", emoji: "🛕", badge: "Popular", tagline: "Cab, stay and guidance for the Kedarnath darshan & trek.", priceFrom: 7999, unit: "per person", duration: "3–4 days" },
  { slug: "badrinath-tour-from-rishikesh", title: "Badrinath Tour from Rishikesh", keyword: "badrinath tour from rishikesh", category: "yatra", image: "temple", emoji: "🛕", tagline: "Visit the abode of Vishnu and the mystical Mana village.", priceFrom: 7499, unit: "per person", duration: "3 days" },
  { slug: "gangotri-tour-from-rishikesh", title: "Gangotri Tour from Rishikesh", keyword: "gangotri tour from rishikesh", category: "yatra", image: "temple", emoji: "🛕", tagline: "Journey to the source of the Ganga at Gangotri Dham.", priceFrom: 6999, unit: "per person", duration: "2–3 days" },
  { slug: "yamunotri-tour-from-rishikesh", title: "Yamunotri Tour from Rishikesh", keyword: "yamunotri tour from rishikesh", category: "yatra", image: "temple", emoji: "🛕", tagline: "Reach the origin of the Yamuna with thermal springs at Janki Chatti.", priceFrom: 6999, unit: "per person", duration: "2–3 days" },
  { slug: "char-dham-by-bike-from-rishikesh", title: "Char Dham by Bike from Rishikesh", keyword: "char dham by bike rishikesh", category: "yatra", image: "himalayanBike", emoji: "🏍️", badge: "Riders", tagline: "The four dhams on two wheels — a guided Himalayan pilgrimage ride.", priceFrom: 24999, unit: "per rider", duration: "10–12 days" },
];

/* 4.8 Haridwar Tours (4) */
export const haridwar: Item[] = [
  { slug: "haridwar-tour-from-rishikesh", title: "Haridwar Tour from Rishikesh", keyword: "haridwar tour from rishikesh", category: "haridwar", image: "aarti", emoji: "🪔", tagline: "Har Ki Pauri, temples and the Ganga Aarti — a half-day or full-day trip.", priceFrom: 1999, unit: "per cab", duration: "Half / full day" },
  { slug: "haridwar-ganga-aarti-tour", title: "Haridwar Ganga Aarti Tour", keyword: "haridwar ganga aarti tour", category: "haridwar", image: "aarti", emoji: "🪔", badge: "Evening", tagline: "Witness the spellbinding evening Ganga Aarti at Har Ki Pauri.", priceFrom: 1499, unit: "per cab", duration: "Evening" },
  { slug: "things-to-do-in-haridwar", title: "Things to Do in Haridwar", keyword: "things to do in haridwar", category: "haridwar", image: "temple", emoji: "🧭", tagline: "Temples, ropeway, ghats and markets — your complete Haridwar guide.", duration: "Guide" },
  { slug: "rishikesh-haridwar-combo-tour", title: "Rishikesh + Haridwar Combo Tour", keyword: "rishikesh haridwar combo tour", category: "haridwar", image: "aarti", emoji: "🚖", tagline: "Both holy cities in one seamless Triveni cab itinerary.", priceFrom: 2999, unit: "per cab", duration: "1–2 days" },
];

/* 4.9 Nearby Tour Add-ons (4) */
export const nearby: Item[] = [
  { slug: "mussoorie-tour-from-rishikesh", title: "Mussoorie Tour from Rishikesh", keyword: "mussoorie tour from rishikesh", category: "nearby", image: "mussoorie", emoji: "🏞️", tagline: "The Queen of the Hills — Mall Road, Kempty Falls and misty views.", priceFrom: 3499, unit: "per cab", duration: "1–2 days" },
  { slug: "dhanaulti-tour-from-rishikesh", title: "Dhanaulti Tour from Rishikesh", keyword: "dhanaulti tour from rishikesh", category: "nearby", image: "pineForest", emoji: "🌲", tagline: "Quiet deodar forests, eco-parks and snow in winter.", priceFrom: 3499, unit: "per cab", duration: "1–2 days" },
  { slug: "nainital-tour-from-rishikesh", title: "Nainital Tour from Rishikesh", keyword: "nainital tour from rishikesh", category: "nearby", image: "nainital", emoji: "🚣", tagline: "Boating on Naini Lake and the colonial charm of the Kumaon hills.", priceFrom: 6999, unit: "per cab", duration: "2–3 days" },
  { slug: "jim-corbett-tour-from-rishikesh", title: "Jim Corbett Tour from Rishikesh", keyword: "jim corbett tour from rishikesh", category: "nearby", image: "corbett", emoji: "🐅", tagline: "Jungle safaris and tiger country in India's oldest national park.", priceFrom: 7999, unit: "per cab", duration: "2–3 days" },
];

/* 4.10 Supporting SEO Guides (7) */
export const guides: Item[] = [
  { slug: "rishikesh-adventure-sports-price-list", title: "Rishikesh Adventure Sports Price List", keyword: "rishikesh adventure sports price", category: "guide", image: "rafting", emoji: "💸", tagline: "Live 2026 prices for every activity, package and rental in one place." },
  { slug: "best-time-for-river-rafting-in-rishikesh", title: "Best Time for River Rafting in Rishikesh", keyword: "best time for rafting rishikesh", category: "guide", image: "whitewater", emoji: "📅", tagline: "Month-by-month water levels, weather and what to expect on the Ganga." },
  { slug: "how-to-reach-rishikesh", title: "How to Reach Rishikesh", keyword: "how to reach rishikesh", category: "guide", image: "bikeRoad", emoji: "🧭", tagline: "By air, train, bus and cab from Delhi, Dehradun and beyond." },
  { slug: "where-to-stay-in-rishikesh", title: "Where to Stay in Rishikesh", keyword: "where to stay in rishikesh", category: "guide", image: "camping", emoji: "🏨", tagline: "Camps, hostels, resorts and ashrams — by area and budget." },
  { slug: "rishikesh-travel-guide", title: "Rishikesh Travel Guide", keyword: "rishikesh travel guide", category: "guide", image: "himalaya", emoji: "🗺️", tagline: "Everything a first-timer needs — itineraries, tips, food and culture." },
  { slug: "adventure-sports-safety-in-rishikesh", title: "Adventure Sports Safety in Rishikesh", keyword: "rishikesh adventure safety", category: "guide", image: "climbing", emoji: "🦺", tagline: "How we keep you safe — certifications, gear, guides and guidelines." },
  { slug: "things-to-do-in-rishikesh", title: "Things to Do in Rishikesh", keyword: "things to do in rishikesh", category: "guide", image: "riverValley", emoji: "✨", tagline: "30+ adventures, cafes, ghats, yoga and day trips around Rishikesh." },
];

export const allItems: Item[] = [
  ...activities,
  ...raftingStretches,
  ...packages,
  ...rentals,
  ...bikeTours,
  ...yatra,
  ...haridwar,
  ...nearby,
  ...guides,
];

export const itemBySlug = (slug: string) =>
  allItems.find((i) => i.slug === slug);

export const categoryMeta: Record<
  Category,
  { label: string; blurb: string }
> = {
  activity: { label: "Adventure Sports", blurb: "Rafting, bungee, zipline & more" },
  "rafting-stretch": { label: "Rafting Stretches", blurb: "9 / 16 / 26 / 36 km" },
  package: { label: "Packages & Combos", blurb: "Save more, do more" },
  rental: { label: "Bike & Scooty Rentals", blurb: "Self-drive freedom" },
  "bike-tour": { label: "Himalayan Bike Tours", blurb: "Epic guided routes" },
  yatra: { label: "Char Dham & Yatra", blurb: "Sacred Himalayan circuits" },
  haridwar: { label: "Haridwar Tours", blurb: "Ganga Aarti & ghats" },
  nearby: { label: "Nearby Getaways", blurb: "Hills & wildlife" },
  guide: { label: "Travel Guides", blurb: "Plan like a local" },
};
