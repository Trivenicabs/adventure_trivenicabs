// Page-level transport links back to the main Triveni Cabs site.
//
// Every page on this site previously offered the same sidebar link to the parent
// homepage ("Need a cab from Delhi?"). That wastes the most useful thing we can
// tell a reader: the specific journey page for the trip they are already looking
// at. A reader on the Char Dham page wants the Char Dham cab page, not the
// homepage; a reader on the Haridwar tour wants Delhi to Haridwar.
//
// Every destination below was checked against the main site's build manifest, so
// each one resolves to a page that exists. Keep that true when adding entries —
// `node scripts/check-crosslinks.mjs` re-runs the check against the manifest and
// also catches a path repeated twice inside one transport set.
//
// WAVE 3 PASS
// -----------
// This file was first written when 28 pages carried their own writing and the
// other 79 rendered category boilerplate. Now that all 107 pages have their own
// prose, the fallbacks are doing far less work than they were: a page that
// explains the Shivpuri put-in is 30 to 45 minutes up the gorge road should not
// be offering the same "Delhi to Rishikesh, 240 km" link as a page about where
// to stay, and a page about the Kedarnath road should be offering the Kedarnath
// car page rather than the Char Dham landing page.
//
// So the links were re-chosen from what each page actually says. Where the page
// talks about the sites being spread out, the link is local transport. Where it
// names a dham, the link is that dham's own car page. Where it talks about the
// monsoon suspension, the link is what the monsoon does to hill roads. And where
// a page genuinely has nothing to add beyond "you have to get to Rishikesh", it
// keeps the category fallback rather than carrying a near-duplicate entry — the
// point of this file is relevance, not link count.
export type CrossLink = {
  /** Path on www.trivenicabs.in, including the leading slash. */
  path: string;
  /** What the reader is being offered, in their terms. */
  label: string;
  /** Short reason, shown under the label where there is room. */
  note?: string;
};

// Both of these point at the URL the main site actually serves, not the one it
// redirects away from. Checked 9 Oct 2026 against the live site with redirects
// unfollowed:
//
//   /delhi-to-haridwar              308 -> /one-way-cab/delhi-to-haridwar
//   /one-way-cab/delhi-to-rishikesh 308 -> /delhi-to-rishikesh
//
// They redirect in opposite directions, which is why the pair looks
// inconsistent: the main site's Week 43 booking-canonical rules consolidated
// each route onto whichever URL Google ranked better at the time, and that was
// the corridor page for Rishikesh and the one-way page for Haridwar.
//
// Worth re-checking whenever those rules change, since a redirected link costs
// a hop on every page carrying it — and /delhi-to-haridwar is in the footer,
// so it was costing one on all 88.
const MAIN = "https://www.trivenicabs.in";

/** Build the absolute URL for a main-site path. */
export const mainUrl = (path: string) => `${MAIN}${path}`;

// Per-page overrides, keyed by this site's item slug. Most specific wins.
const BY_SLUG: Record<string, CrossLink> = {
  /* ---------------------------------------------------------------- */
  /* Activities                                                       */
  /* ---------------------------------------------------------------- */
  //
  // The arrival link is the category fallback and it is right for most of
  // these. The entries here are the activities where the travel answer is
  // genuinely different: the ones at a site outside town, the ones that start
  // at dawn, and the ones that are really a local-running problem rather than
  // a Delhi-to-Rishikesh problem.
  "river-rafting-in-rishikesh": {
    path: "/delhi-to-rishikesh",
    label: "Delhi to Rishikesh cab fares",
    note: "A morning slot usually means arriving the night before",
  },
  "bungee-jumping-in-rishikesh": {
    path: "/local-taxi/rishikesh",
    label: "Local cab to the jump site",
    note: "The platform is a drive out of Rishikesh town",
  },
  "giant-swing-in-rishikesh": {
    path: "/local-taxi/rishikesh",
    label: "Local cab to the jump site",
    note: "Same site as the bungee, a drive out of town",
  },
  "scad-jump-in-rishikesh": {
    path: "/local-taxi/rishikesh",
    label: "Local cab to the jump site",
    note: "Out of town, same as the bungee platform",
  },
  "reverse-bungee-in-rishikesh": {
    path: "/local-taxi/rishikesh",
    label: "Local cab in Rishikesh",
    note: "A short hop; not worth a day's vehicle on its own",
  },
  "camping-in-rishikesh": {
    path: "/delhi-to-rishikesh",
    label: "Delhi to Rishikesh cab fares",
    note: "Camp check-in is early afternoon, so leave Delhi in the morning",
  },
  "night-camping-bonfire-in-rishikesh": {
    path: "/delhi-to-rishikesh",
    label: "Delhi to Rishikesh cab fares",
    note: "Check-in is early afternoon; the bonfire starts early evening",
  },
  "ganga-river-expedition-rishikesh": {
    path: "/round-trip/delhi-to-rishikesh",
    label: "Round trip from Delhi",
    note: "One vehicle for the days you are on the river",
  },
  "kayaking-in-rishikesh": {
    path: "/rishikesh",
    label: "Rishikesh cab services",
    note: "Courses run several days; local transport by the day",
  },
  "zipline-in-rishikesh": {
    path: "/local-taxi/rishikesh",
    label: "Local cab in Rishikesh",
    note: "The cable sites are a drive from town",
  },
  "flying-fox-in-rishikesh": {
    path: "/local-taxi/rishikesh",
    label: "Local cab in Rishikesh",
    note: "The Shivpuri side, up the gorge road",
  },
  "superman-shot-in-rishikesh": {
    path: "/local-taxi/rishikesh",
    label: "Local cab in Rishikesh",
    note: "Same gorge site as the other cable rides",
  },
  "sky-cycling-in-rishikesh": {
    path: "/local-taxi/rishikesh",
    label: "Local cab in Rishikesh",
    note: "A short ride; pair it with the other cable activities",
  },
  "cliff-jumping-in-rishikesh": {
    path: "/delhi-to-rishikesh",
    label: "Delhi to Rishikesh cab fares",
    note: "Fix the rafting slot first, then the drive",
  },
  "body-surfing-in-rishikesh": {
    path: "/delhi-to-rishikesh",
    label: "Delhi to Rishikesh cab fares",
    note: "Fix the rafting slot first, then the drive",
  },
  "rock-climbing-in-rishikesh": {
    path: "/local-taxi/rishikesh",
    label: "Local cab in Rishikesh",
    note: "The rock faces are a short drive from town",
  },
  "rappelling-in-rishikesh": {
    path: "/local-taxi/rishikesh",
    label: "Local cab in Rishikesh",
    note: "Cliff and waterfall sites are both drives",
  },
  "wall-climbing-in-rishikesh": {
    path: "/local-taxi/rishikesh",
    label: "Local cab in Rishikesh",
    note: "A short hop, easily combined with another activity",
  },
  "tree-climbing-in-rishikesh": {
    path: "/local-taxi/rishikesh",
    label: "Local cab in Rishikesh",
    note: "The forest sites are outside town",
  },
  "rope-course-in-rishikesh": {
    path: "/4hr-40km-local-cab",
    label: "4 hr / 40 km local cab",
    note: "The smallest booking that covers a site visit and back",
  },
  "go-karting-in-rishikesh": {
    path: "/4hr-40km-local-cab",
    label: "4 hr / 40 km local cab",
    note: "Enough for the track and back",
  },
  "paintball-in-rishikesh": {
    path: "/4hr-40km-local-cab",
    label: "4 hr / 40 km local cab",
    note: "Enough for an arena session and back",
  },
  "water-zorbing-in-rishikesh": {
    path: "/4hr-40km-local-cab",
    label: "4 hr / 40 km local cab",
    note: "Fifteen minutes of zorbing is not worth a day's vehicle",
  },
  "mountain-biking-in-rishikesh": {
    path: "/local-taxi/rishikesh",
    label: "Local cab in Rishikesh",
    note: "Trailheads are out of town",
  },
  "waterfall-trekking-in-rishikesh": {
    path: "/sightseeing/rishikesh",
    label: "Rishikesh sightseeing by cab",
    note: "The falls are a drive and then a walk",
  },
  "hot-air-balloon-in-rishikesh": {
    path: "/delhi-to-rishikesh",
    label: "Delhi to Rishikesh cab fares",
    note: "A dawn launch means being here the day before",
  },

  /* ---------------------------------------------------------------- */
  /* Rafting stretches                                                */
  /* ---------------------------------------------------------------- */
  //
  // All four put in upstream of town, and the further upstream the start, the
  // earlier the pickup. That is the only travel difference between them, and
  // it is worth saying on each one.
  "river-rafting-in-rishikesh/9-km-brahmapuri-to-nimbeach": {
    path: "/delhi-to-rishikesh",
    label: "Delhi to Rishikesh cab fares",
    note: "The put-in is upstream of town; allow for that drive too",
  },
  "river-rafting-in-rishikesh/16-km-shivpuri-to-nimbeach": {
    path: "/delhi-to-rishikesh",
    label: "Delhi to Rishikesh cab fares",
    note: "Shivpuri is 30 to 45 minutes up the gorge road",
  },
  "river-rafting-in-rishikesh/26-km-marine-drive-tonim-beach": {
    path: "/delhi-to-rishikesh",
    label: "Delhi to Rishikesh cab fares",
    note: "Marine Drive is further upstream again",
  },
  "river-rafting-in-rishikesh/36-km-kaudiyala-to-nimbeach": {
    path: "/delhi-to-rishikesh",
    label: "Delhi to Rishikesh cab fares",
    note: "An early start, and the drive upstream comes first",
  },

  /* ---------------------------------------------------------------- */
  /* Packages                                                         */
  /* ---------------------------------------------------------------- */
  "rishikesh-adventure-packages": {
    path: "/delhi-to-rishikesh",
    label: "Delhi to Rishikesh cab fares",
    note: "Packages cover the activities; the journey is booked separately",
  },
  "rafting-and-camping-package-rishikesh": {
    path: "/delhi-to-rishikesh",
    label: "Delhi to Rishikesh cab fares",
    note: "Camp check-in is early afternoon; leave Delhi in the morning",
  },
  "zipline-rafting-camping-package-rishikesh": {
    path: "/delhi-to-rishikesh",
    label: "Delhi to Rishikesh cab fares",
    note: "Three sites in three directions; a vehicle makes the day work",
  },
  "bungee-rafting-camping-combo-rishikesh": {
    path: "/delhi-to-rishikesh",
    label: "Delhi to Rishikesh cab fares",
    note: "The jump site and the river are separate drives",
  },
  "camping-and-kayaking-course-rishikesh": {
    path: "/rishikesh",
    label: "Rishikesh cab services",
    note: "A multi-day course; hire locally by the day",
  },
  "rishikesh-1-night-2-day-package": {
    path: "/delhi-to-rishikesh",
    label: "Delhi to Rishikesh cab fares",
    note: "240 km each way; leave Delhi early on day one",
  },
  "rishikesh-2-night-3-day-package": {
    path: "/round-trip/delhi-to-rishikesh",
    label: "Round trip from Delhi",
    note: "One vehicle for all three days",
  },
  "weekend-adventure-package-rishikesh": {
    path: "/delhi-to-rishikesh",
    label: "Delhi to Rishikesh cab fares",
    note: "Leave Rishikesh by early afternoon on Sunday",
  },
  "family-adventure-package-rishikesh": {
    path: "/family-trip-rishikesh-from-delhi",
    label: "Family trip to Rishikesh by cab",
    note: "Planned around travelling with children",
  },
  "corporate-team-outing-rishikesh": {
    path: "/corporate-transportation-service",
    label: "Corporate transport booking",
    note: "Invoiced travel for teams",
  },
  "college-group-trip-rishikesh": {
    path: "/tempo-traveller/delhi-to-rishikesh",
    label: "Delhi to Rishikesh tempo traveller",
    note: "12 to 26 seats for the whole group",
  },
  "delhi-to-rishikesh-adventure-tour": {
    path: "/delhi-to-rishikesh",
    label: "Delhi to Rishikesh cab fares",
    note: "Published fares by vehicle",
  },

  /* ---------------------------------------------------------------- */
  /* Rentals                                                          */
  /* ---------------------------------------------------------------- */
  //
  // These pages sell self-drive, so the honest cross-link is not "book a cab
  // instead" — it is the main site's own comparison of the two, plus the
  // things a bike cannot do: luggage, airport runs, wet days.
  "bike-rental-in-rishikesh": {
    path: "/self-drive-vs-chauffeur",
    label: "Self-drive or a chauffeur-driven cab",
    note: "What each one actually suits",
  },
  "scooty-rental-in-rishikesh": {
    path: "/local-taxi/rishikesh",
    label: "Local cab in Rishikesh",
    note: "For the days you would rather not ride",
  },
  "bike-rental-in-rishikesh/royal-enfield-classic-350": {
    path: "/delhi-to-rishikesh",
    label: "Delhi to Rishikesh cab fares",
    note: "Cab in, ride once you are here",
  },
  "bike-rental-in-rishikesh/royal-enfield-himalayan": {
    path: "/delhi-to-rishikesh",
    label: "Delhi to Rishikesh cab fares",
    note: "Cab in, then take the hills on the bike",
  },
  "bike-rental-in-rishikesh/ktm-duke-390": {
    path: "/delhi-to-rishikesh",
    label: "Delhi to Rishikesh cab fares",
    note: "Cab in, self-drive once you arrive",
  },
  "scooty-rental-in-rishikesh/honda-activa": {
    path: "/dehradun-airport-to-rishikesh-taxi",
    label: "Jolly Grant airport transfer",
    note: "A scooter is no use with luggage",
  },
  "scooty-rental-in-rishikesh/tvs-jupiter": {
    path: "/local-taxi/rishikesh",
    label: "Local cab in Rishikesh",
    note: "The alternative on a wet day",
  },
  "atv-quad-biking-in-rishikesh": {
    path: "/4hr-40km-local-cab",
    label: "4 hr / 40 km local cab",
    note: "The track is out of town; this covers getting there",
  },
  "bike-rental-price-in-rishikesh": {
    path: "/taxi-fare/rishikesh",
    label: "Rishikesh taxi fares",
    note: "What the same day costs with a driver",
  },

  /* ---------------------------------------------------------------- */
  /* Bike tours                                                       */
  /* ---------------------------------------------------------------- */
  //
  // Each of these routes exists on the main site as a vehicle journey, which
  // is what a riding group wants for the backup car and what a reader who
  // decides not to ride wants instead.
  "bike-tour-rishikesh-to-kheerganga": {
    path: "/sightseeing/kasol-kheerganga-tour",
    label: "Kasol and Kheerganga by cab",
    note: "The same destination with a vehicle and driver",
  },
  "bike-tour-rishikesh-to-chopta-tungnath": {
    path: "/tempo-traveller/rishikesh-to-chopta",
    label: "Rishikesh to Chopta by road",
    note: "Support vehicle, or the same route without the bike",
  },
  "bike-tour-rishikesh-to-kedarnath": {
    path: "/chardham-yatra/rishikesh-to-kedarnath-by-car",
    label: "Rishikesh to Kedarnath by car",
    note: "Road transfer to the trek base",
  },
  "bike-tour-rishikesh-to-badrinath": {
    path: "/tempo-traveller/rishikesh-to-badrinath",
    label: "Rishikesh to Badrinath by road",
    note: "Backup transport for a riding group",
  },
  "bike-tour-rishikesh-to-auli": {
    path: "/tempo-traveller/rishikesh-to-auli",
    label: "Rishikesh to Auli by road",
    note: "Support vehicle on the same hill route",
  },
  "bike-tour-rishikesh-to-spiti-valley": {
    path: "/spiti-valley-road-trip-from-delhi",
    label: "Spiti road trip by car",
    note: "The same circuit with a driver",
  },

  /* ---------------------------------------------------------------- */
  /* Char Dham and the individual dhams                               */
  /* ---------------------------------------------------------------- */
  //
  // Each dham has its own car page on the main site. Pointing all seven at
  // /chardham-yatra, as this file used to, sent a reader researching Yamunotri
  // to a landing page and made them find it again.
  "char-dham-yatra-from-rishikesh": {
    path: "/chardham-yatra/rishikesh-to-chardham-yatra-by-car",
    label: "Rishikesh to Char Dham by car",
    note: "Multi-day vehicle with driver",
  },
  "do-dham-yatra-from-rishikesh": {
    path: "/chardham-yatra/rishikesh-to-do-dham-yatra-by-car",
    label: "Rishikesh to Do Dham by car",
    note: "Two-dham itineraries with driver",
  },
  "char-dham-by-bike-from-rishikesh": {
    path: "/chardham-yatra/rishikesh-to-chardham-yatra-by-car",
    label: "Char Dham support vehicle",
    note: "Backup transport for riding groups",
  },
  "kedarnath-tour-from-rishikesh": {
    path: "/chardham-yatra/rishikesh-to-kedarnath-by-car",
    label: "Rishikesh to Kedarnath by car",
    note: "Road transfer to the trek base",
  },
  "badrinath-tour-from-rishikesh": {
    path: "/chardham-yatra/badrinath-yatra-by-car",
    label: "Badrinath yatra by car",
    note: "Multi-day hill vehicle with driver",
  },
  "gangotri-tour-from-rishikesh": {
    path: "/chardham-yatra/gangotri-yatra-by-car",
    label: "Gangotri yatra by car",
    note: "Seasonal hill route transport",
  },
  "yamunotri-tour-from-rishikesh": {
    path: "/chardham-yatra/yamunotri-yatra-by-car",
    label: "Yamunotri yatra by car",
    note: "Road transfer to Janki Chatti",
  },

  /* ---------------------------------------------------------------- */
  /* Haridwar                                                         */
  /* ---------------------------------------------------------------- */
  //
  // These are tours from Rishikesh, so the relevant journey is the 25 km local
  // transfer rather than the Delhi run. The Delhi fare page is still in the
  // panel below for anyone starting further back.
  "haridwar-tour-from-rishikesh": {
    path: "/rishikesh-to-haridwar",
    label: "Rishikesh to Haridwar cab",
    note: "The local transfer, about 25 km",
  },
  "haridwar-ganga-aarti-tour": {
    path: "/rishikesh-to-haridwar",
    label: "Rishikesh to Haridwar cab",
    note: "Leave in good time — the ghats fill before sunset",
  },
  "things-to-do-in-haridwar": {
    path: "/haridwar-travel-guide",
    label: "Haridwar travel and transport guide",
    note: "Timings, ghats and getting around",
  },
  "rishikesh-haridwar-combo-tour": {
    path: "/sightseeing/haridwar-rishikesh-same-day",
    label: "Both towns in one day by cab",
    note: "The same itinerary with the car retained",
  },

  /* ---------------------------------------------------------------- */
  /* Nearby destinations                                              */
  /* ---------------------------------------------------------------- */
  //
  // Where the main site has a page for the destination, it gets it. Where it
  // does not — Tehri, Devprayag, Chakrata — the link is the nearest honest
  // thing rather than a synthesised URL: the day-trips page, or the road the
  // town actually sits on.
  "mussoorie-tour-from-rishikesh": {
    path: "/delhi-to-mussoorie",
    label: "Mussoorie cab fares",
    note: "Hill route with an experienced driver",
  },
  "dhanaulti-tour-from-rishikesh": {
    path: "/one-way-cab/delhi-to-dhanaulti",
    label: "Dhanaulti cab fares",
    note: "Dhanaulti sits beyond Mussoorie",
  },
  "nainital-tour-from-rishikesh": {
    path: "/delhi-to-nainital",
    label: "Nainital cab fares",
    note: "Lake district transfers",
  },
  "jim-corbett-tour-from-rishikesh": {
    path: "/delhi-to-jim-corbett",
    label: "Jim Corbett cab fares",
    note: "Park gate drops and safari timing",
  },
  "dehradun-tour-from-rishikesh": {
    path: "/rishikesh-to-dehradun",
    label: "Rishikesh to Dehradun cab",
    note: "About 45 km, an hour to an hour and a half",
  },
  "chopta-tour-from-rishikesh": {
    path: "/tempo-traveller/rishikesh-to-chopta",
    label: "Rishikesh to Chopta by road",
    note: "Vehicle with driver for the hill route",
  },
  "auli-tour-from-rishikesh": {
    path: "/sightseeing/rishikesh-to-auli-2-days",
    label: "Rishikesh to Auli, two days",
    note: "The same route with a vehicle and driver",
  },
  "kanatal-tour-from-rishikesh": {
    path: "/one-way-cab/delhi-to-kanatal",
    label: "Kanatal cab fares",
    note: "Kanatal sits on the Chamba road",
  },
  "lansdowne-tour-from-rishikesh": {
    path: "/one-way-cab/delhi-to-lansdowne",
    label: "Lansdowne cab fares",
    note: "Published fares by vehicle",
  },
  "rudraprayag-tour-from-rishikesh": {
    path: "/chardham-yatra/rishikesh-to-kedarnath-by-car",
    label: "Rishikesh to Kedarnath by car",
    note: "Rudraprayag is a stop on that road",
  },
  "harsil-tour-from-rishikesh": {
    path: "/chardham-yatra/gangotri-yatra-by-car",
    label: "Gangotri yatra by car",
    note: "Harsil is on the Gangotri road",
  },
  "chakrata-tour-from-rishikesh": {
    path: "/places-to-visit-near-dehradun",
    label: "Places to visit near Dehradun",
    note: "Chakrata is reached via Dehradun",
  },
  "devprayag-tour-from-rishikesh": {
    path: "/places-to-visit-near-rishikesh",
    label: "Places to visit near Rishikesh",
    note: "Day trips with distances and fares",
  },
  "tehri-lake-tour-from-rishikesh": {
    path: "/places-to-visit-near-rishikesh",
    label: "Places to visit near Rishikesh",
    note: "Day trips with distances and fares",
  },

  /* ---------------------------------------------------------------- */
  /* Guides                                                           */
  /* ---------------------------------------------------------------- */
  //
  // Several of these guides have an exact counterpart on the main site asking
  // the same question from the road side — what a trip costs, how many days it
  // needs, what the weather does month by month, how a company quotes a fare.
  // Those are the best cross-links on the property because the reader's
  // question carries straight across.
  //
  // The guides left out of this list — the rapid grades, what to wear, the
  // bungee limits, the non-swimmer question, how fit you need to be — have no
  // transport dimension at all, and they keep the category fallback rather
  // than being given a link for the sake of having one.
  "how-to-reach-rishikesh": {
    path: "/delhi-to-rishikesh",
    label: "Delhi to Rishikesh cab fares",
    note: "Door-to-door, 240 km, about 5-6 hours",
  },
  "rishikesh-travel-guide": {
    path: "/rishikesh",
    label: "Rishikesh cab services",
    note: "Local packages and outstation journeys",
  },
  "things-to-do-in-rishikesh": {
    path: "/sightseeing/rishikesh",
    label: "Rishikesh sightseeing by cab",
    note: "Full-day and half-day itineraries",
  },
  "where-to-stay-in-rishikesh": {
    path: "/delhi-to-rishikesh",
    label: "Getting to your Rishikesh stay",
    note: "Hotel drop included in the fare",
  },
  "rishikesh-adventure-sports-price-list": {
    path: "/rishikesh-trip-cost-from-delhi",
    label: "What a Rishikesh trip costs from Delhi",
    note: "The travel half of the same budget",
  },
  "best-time-for-river-rafting-in-rishikesh": {
    path: "/best-time-to-visit/rishikesh",
    label: "Best time to visit Rishikesh",
    note: "The same months from the road side",
  },
  "best-time-to-visit-rishikesh-month-by-month": {
    path: "/best-time-to-visit/rishikesh",
    label: "Best time to visit Rishikesh",
    note: "Weather and road conditions month by month",
  },
  "when-rafting-is-closed-in-rishikesh": {
    path: "/monsoon-landslide-risk-hill-roads",
    label: "Monsoon risk on hill roads",
    note: "What the same months do to the drive up",
  },
  "rishikesh-in-winter-what-stays-open": {
    path: "/when-do-hill-stations-get-snow",
    label: "When the hills get snow",
    note: "If you are going on from here in winter",
  },
  "how-many-days-do-you-need-in-rishikesh": {
    path: "/rishikesh-in-2-days-itinerary",
    label: "Rishikesh in two days",
    note: "The same question answered from the travel side",
  },
  "rishikesh-with-kids-what-they-can-do": {
    path: "/child-safety-seats-outstation-cab",
    label: "Child seats on outstation cabs",
    note: "Travelling the 240 km with young children",
  },
  "rafting-vs-bungee-which-first": {
    path: "/local-taxi/rishikesh",
    label: "Local cab in Rishikesh",
    note: "The two sites are in different directions",
  },
  "rishikesh-booking-mistakes-to-avoid": {
    path: "/triveni-cabs-pricing-transparency",
    label: "How Triveni quotes a fare",
    note: "The same honesty question, for the cab",
  },
  "rishikesh-for-solo-travellers": {
    path: "/travel-options/delhi-to-rishikesh",
    label: "Every way to reach Rishikesh",
    note: "Cab, bus and train side by side",
  },
  "rishikesh-adventure-for-large-groups": {
    path: "/tempo-traveller/delhi-to-rishikesh",
    label: "Delhi to Rishikesh tempo traveller",
    note: "12 to 26 seats for the whole group",
  },
  "getting-around-rishikesh-without-a-car": {
    path: "/local-taxi/rishikesh",
    label: "Local cab in Rishikesh",
    note: "Fares and packages for getting around",
  },
  "adventure-sports-safety-in-rishikesh": {
    path: "/triveni-cabs-safety-features",
    label: "Vehicle and driver safety checks",
    note: "How the road half of the trip is handled",
  },
  "camping-rules-on-the-ganga-beaches": {
    path: "/delhi-to-rishikesh",
    label: "Delhi to Rishikesh cab fares",
    note: "Camps are up the slope; send the map pin when booking",
  },
  "first-time-rafting-what-actually-happens": {
    path: "/delhi-to-rishikesh",
    label: "Delhi to Rishikesh cab fares",
    note: "A morning slot usually means arriving the night before",
  },

  /* ---------------------------------------------------------------- */
  /* Category index pages                                             */
  /* ---------------------------------------------------------------- */
  //
  // These are keyed by slug like any other page. The bike-tour and nearby
  // indexes are already served well by their category fallbacks — the hill
  // route set and the day-trips page respectively — so only the guides index
  // needs its own entry, pointing at the main site's equivalent planning
  // guide rather than at a fare page.
  "rishikesh-trip-planning-guides": {
    path: "/rishikesh-travel-guide",
    label: "Rishikesh travel guide",
    note: "The same planning job, from the travel side",
  },
};

// Category fallbacks for anything without its own entry.
const BY_CATEGORY: Record<string, CrossLink> = {
  activity: {
    path: "/delhi-to-rishikesh",
    label: "Delhi to Rishikesh cab fares",
    note: "Door-to-door, 240 km, about 5-6 hours",
  },
  "rafting-stretch": {
    path: "/delhi-to-rishikesh",
    label: "Delhi to Rishikesh cab fares",
    note: "Plan the drive around your rafting slot",
  },
  package: {
    path: "/delhi-to-rishikesh",
    label: "Delhi to Rishikesh cab fares",
    note: "Transport is booked separately",
  },
  rental: {
    path: "/self-drive-vs-chauffeur",
    label: "Self-drive or a chauffeur-driven cab",
    note: "What each one actually suits",
  },
  "bike-tour": {
    path: "/delhi-to-rishikesh",
    label: "Delhi to Rishikesh cab fares",
    note: "Reach the start point with your gear",
  },
  yatra: {
    path: "/chardham-yatra/rishikesh-to-chardham-yatra-by-car",
    label: "Rishikesh to Char Dham by car",
    note: "Multi-day vehicle with driver",
  },
  haridwar: {
    path: "/rishikesh-to-haridwar",
    label: "Rishikesh to Haridwar cab",
    note: "The local transfer, about 25 km",
  },
  nearby: {
    path: "/places-to-visit-near-rishikesh",
    label: "Places to visit near Rishikesh",
    note: "Day trips with distances and fares",
  },
  guide: {
    path: "/rishikesh",
    label: "Rishikesh cab services",
    note: "Local packages and outstation journeys",
  },
};

const DEFAULT: CrossLink = {
  path: "/delhi-to-rishikesh",
  label: "Delhi to Rishikesh cab fares",
  note: "Door-to-door, 240 km, about 5-6 hours",
};

/**
 * The transport link to offer on a given page. Falls back from the page's own
 * entry, to its category, to the Delhi-Rishikesh fare page — so every page has
 * something relevant rather than a generic homepage link.
 */
export function crossLinkFor(slug: string, category?: string): CrossLink {
  return BY_SLUG[slug] ?? (category ? BY_CATEGORY[category] : undefined) ?? DEFAULT;
}

/* ------------------------------------------------------------------ */
/* Transport panel: the full set of journey options for a page         */
/* ------------------------------------------------------------------ */
//
// The sidebar link above offers one journey — the most relevant one. A traveller
// actually planning arrival wants more than that: the fare, whether a one-way
// drop is cheaper, what the drive and the tolls come to, whether to fly into
// Dehradun instead, and what happens if the group is large enough to need a
// tempo traveller. Those are five different pages on the main site, and the
// Adventure site is where the reader is standing when the question arises.
//
// Every path below was checked against the main site's build manifest. Paths are
// unique within each set: the panel keys its list items on the path, so a
// repeated path is both a duplicate React key and a duplicate link offered twice
// under different labels. The first version of this file had exactly that in
// ARRIVE_RISHIKESH and ARRIVE_HARIDWAR, where "One-way drop" reused the fare
// page's own URL; both now point at the pages that explain one-way pricing.

export type TransportSet = {
  heading: string;
  intro: string;
  links: CrossLink[];
};

const ARRIVE_RISHIKESH: CrossLink[] = [
  { path: "/delhi-to-rishikesh", label: "Delhi to Rishikesh cab", note: "Published fares by vehicle, 240 km" },
  { path: "/one-way-vs-round-trip-cab", label: "One-way or round trip", note: "Which works out cheaper for your dates" },
  { path: "/dehradun-airport-to-rishikesh-taxi", label: "Jolly Grant airport transfer", note: "The nearest airport, between here and Dehradun" },
  { path: "/distance/delhi-to-rishikesh", label: "Distance and drive time", note: "Route, stops and how long it really takes" },
  { path: "/toll-cost/delhi-to-rishikesh", label: "Toll estimate", note: "Plaza-by-plaza planning figure" },
  { path: "/tempo-traveller/delhi-to-rishikesh", label: "Tempo traveller for groups", note: "12 to 26 seats" },
];

// Activities are spread between town, the gorge road and the jump site, so the
// local half of the problem belongs in the panel alongside the arrival half.
const ACTIVITY_SITES: CrossLink[] = [
  { path: "/delhi-to-rishikesh", label: "Delhi to Rishikesh cab", note: "Published fares by vehicle, 240 km" },
  { path: "/dehradun-airport-to-rishikesh-taxi", label: "Jolly Grant airport transfer", note: "The nearest airport, between here and Dehradun" },
  { path: "/local-taxi/rishikesh", label: "Local cab in Rishikesh", note: "The activity sites are genuinely spread out" },
  { path: "/4hr-40km-local-cab", label: "4 hr / 40 km local cab", note: "Enough for one site and back" },
  { path: "/taxi-fare/rishikesh", label: "Rishikesh taxi fares", note: "What local running actually costs" },
  { path: "/tempo-traveller/rishikesh", label: "Tempo traveller in Rishikesh", note: "Group transport once you arrive" },
];

const ARRIVE_HARIDWAR: CrossLink[] = [
  { path: "/one-way-cab/delhi-to-haridwar", label: "Delhi to Haridwar cab", note: "Published fares by vehicle" },
  { path: "/one-way-drop-charges-explained", label: "One-way drop charges", note: "Why a drop is not half a round trip" },
  { path: "/rishikesh-to-haridwar", label: "Rishikesh to Haridwar", note: "Local transfer, about 25 km" },
  { path: "/toll-cost/delhi-to-haridwar", label: "Toll estimate", note: "Plaza-by-plaza planning figure" },
  { path: "/haridwar-travel-guide", label: "Haridwar travel guide", note: "Ghats, timings and getting around" },
];

// For a reader already in Rishikesh who wants Haridwar for the day, the Delhi
// fare is the least useful thing on the page. This set leads with the transfer
// and the same-day itinerary instead.
const HARIDWAR_LOCAL: CrossLink[] = [
  { path: "/rishikesh-to-haridwar", label: "Rishikesh to Haridwar cab", note: "The local transfer, about 25 km" },
  { path: "/sightseeing/haridwar-rishikesh-same-day", label: "Both towns in one day", note: "Same-day itinerary with the car retained" },
  { path: "/sightseeing/haridwar", label: "Haridwar sightseeing by cab", note: "Ghats, temples and the aarti" },
  { path: "/local-taxi/haridwar", label: "Local cab in Haridwar", note: "Getting between the ghats" },
  { path: "/places-to-visit-near-haridwar", label: "Places to visit near Haridwar", note: "If you have a second day" },
  { path: "/haridwar-travel-guide", label: "Haridwar travel guide", note: "Timings and practicalities" },
];

const YATRA_TRANSPORT: CrossLink[] = [
  { path: "/chardham-yatra", label: "Char Dham cab packages", note: "Multi-day vehicle with driver" },
  { path: "/one-way-cab/delhi-to-haridwar", label: "Delhi to Haridwar cab", note: "The usual road start for the circuit" },
  { path: "/delhi-to-rishikesh", label: "Delhi to Rishikesh cab", note: "The alternative starting point" },
  { path: "/tempo-traveller/delhi-to-rishikesh", label: "Tempo traveller for groups", note: "Yatra groups of 12 and up" },
  { path: "/airport-service/dehradun", label: "Dehradun airport transfer", note: "Fly in, start the circuit by road" },
];

// The per-dham pages need the vehicle page for their own dham, the registration
// requirement and the road-condition question — not a generic arrival list.
const DHAM_TRANSPORT: CrossLink[] = [
  { path: "/chardham-yatra/rishikesh-to-chardham-yatra-by-car", label: "Rishikesh to Char Dham by car", note: "Multi-day vehicle with driver" },
  { path: "/chardham-yatra/rishikesh-to-do-dham-yatra-by-car", label: "Rishikesh to Do Dham by car", note: "If you are doing two rather than four" },
  { path: "/tempo-traveller/rishikesh-to-chardham-yatra-tempo-traveller", label: "Char Dham by tempo traveller", note: "Groups of 12 and up" },
  { path: "/uttarakhand-yatra-registration", label: "Yatra registration", note: "What has to be done before you travel" },
  { path: "/best-time-for-char-dham-by-road", label: "Best time for Char Dham by road", note: "Weather and road conditions, not shrine dates" },
  { path: "/char-dham-yatra-cost-by-car", label: "What the circuit costs by car", note: "Vehicle budget for the full route" },
];

const GROUP_TRANSPORT: CrossLink[] = [
  { path: "/tempo-traveller/delhi-to-rishikesh", label: "Delhi to Rishikesh tempo traveller", note: "12 to 26 seats with driver" },
  { path: "/tempo-traveller/rishikesh", label: "Tempo traveller in Rishikesh", note: "Local group transport once you arrive" },
  { path: "/12-seater-tempo-traveller", label: "12-seater tempo traveller", note: "The common size for a small group" },
  { path: "/26-seater-tempo-traveller", label: "26-seater tempo traveller", note: "For a full college group" },
  { path: "/tempo-traveller-or-two-sedans", label: "One tempo or two cars?", note: "Which works out better at your headcount" },
  { path: "/corporate-transportation-service", label: "Corporate transport", note: "Invoiced travel for teams" },
];

// Families ask different questions: child seats, pacing, whether grandparents
// will manage the drive.
const FAMILY_TRANSPORT: CrossLink[] = [
  { path: "/family-trip-rishikesh-from-delhi", label: "Family trip to Rishikesh", note: "Planned around travelling with children" },
  { path: "/child-safety-seats-outstation-cab", label: "Child seats on outstation cabs", note: "What can be fitted, and to which vehicles" },
  { path: "/delhi-to-rishikesh", label: "Delhi to Rishikesh cab", note: "240 km, about 5-6 hours" },
  { path: "/travelling-with-elderly-parents-by-cab", label: "Travelling with elderly parents", note: "Stops, pacing and vehicle choice" },
  { path: "/tempo-traveller/delhi-to-rishikesh", label: "Tempo traveller", note: "When it is two families rather than one" },
  { path: "/local-taxi/rishikesh", label: "Local cab in Rishikesh", note: "Short hops between the activity sites" },
];

const NEARBY_TRANSPORT: CrossLink[] = [
  { path: "/rishikesh", label: "Rishikesh cab services", note: "Local packages and outstation journeys" },
  { path: "/places-to-visit-near-rishikesh", label: "Places to visit near Rishikesh", note: "Day trips with distances and fares" },
  { path: "/weekend-getaways-from-rishikesh-by-car", label: "Weekend getaways from Rishikesh", note: "Short drives out of town" },
  { path: "/uttarakhand-hills-circuit-by-car", label: "Uttarakhand hills circuit by car", note: "Several of these in one trip" },
  { path: "/hill-stations-near-haridwar-rishikesh", label: "Hill stations near Rishikesh", note: "The honest shortlist" },
  { path: "/sedan-or-suv-for-hill-roads", label: "Sedan or SUV on hill roads", note: "Which to ask for on these routes" },
];

// The Mussoorie road carries three of the nearby destinations — Mussoorie,
// Dhanaulti and Kanatal — and a reader on any of them is choosing between them.
const MUSSOORIE_ROAD: CrossLink[] = [
  { path: "/delhi-to-mussoorie", label: "Mussoorie cab fares", note: "Hill route with an experienced driver" },
  { path: "/mussoorie-travel-guide", label: "Mussoorie travel guide", note: "What is actually worth the drive" },
  { path: "/one-way-cab/delhi-to-dhanaulti", label: "Dhanaulti cab fares", note: "Quieter, and beyond Mussoorie" },
  { path: "/one-way-cab/delhi-to-kanatal", label: "Kanatal cab fares", note: "On the Chamba road" },
  { path: "/mussoorie-to-rishikesh", label: "Mussoorie to Rishikesh", note: "The return leg, with fares" },
  { path: "/sedan-or-suv-for-hill-roads", label: "Sedan or SUV on hill roads", note: "Which to ask for" },
];

// Nainital and Corbett are the two Kumaon trips, far enough that they are a
// different kind of journey from the Garhwal day trips.
const KUMAON_TRANSPORT: CrossLink[] = [
  { path: "/delhi-to-nainital", label: "Nainital cab fares", note: "Lake district transfers" },
  { path: "/nainital-travel-guide", label: "Nainital travel guide", note: "Timings and what to see" },
  { path: "/delhi-to-jim-corbett", label: "Jim Corbett cab fares", note: "Park gate drops" },
  { path: "/sightseeing/corbett-jeep-safari-tour", label: "Corbett jeep safari tour", note: "Safari and transport together" },
  { path: "/nainital-vs-jim-corbett", label: "Nainital or Corbett?", note: "If you can only fit one in" },
  { path: "/nainital-to-rishikesh", label: "Nainital to Rishikesh", note: "The return leg, with fares" },
];

// Devprayag, Rudraprayag, Tehri and Harsil are stops on the Char Dham roads
// rather than destinations with their own cab pages, so the panel offers the
// roads they sit on.
const YATRA_ROAD_TOWNS: CrossLink[] = [
  { path: "/chardham-yatra/rishikesh-to-chardham-yatra-by-car", label: "Rishikesh to Char Dham by car", note: "These towns are stops on that road" },
  { path: "/chardham-yatra/rishikesh-to-kedarnath-by-car", label: "Rishikesh to Kedarnath by car", note: "The Rudraprayag and Devprayag road" },
  { path: "/chardham-yatra/gangotri-yatra-by-car", label: "Gangotri yatra by car", note: "The Uttarkashi and Harsil road" },
  { path: "/places-to-visit-near-rishikesh", label: "Places to visit near Rishikesh", note: "Day trips with distances and fares" },
  { path: "/uttarakhand-hills-circuit-by-car", label: "Uttarakhand hills circuit by car", note: "Several of these in one trip" },
  { path: "/rishikesh", label: "Rishikesh cab services", note: "Local packages and outstation journeys" },
];

const AULI_TRANSPORT: CrossLink[] = [
  { path: "/sightseeing/rishikesh-to-auli-2-days", label: "Rishikesh to Auli, two days", note: "The same route with a vehicle and driver" },
  { path: "/tempo-traveller/rishikesh-to-auli", label: "Rishikesh to Auli tempo traveller", note: "For a group of 12 and up" },
  { path: "/force-urbania/rishikesh-to-auli", label: "Rishikesh to Auli by Urbania", note: "The more comfortable group vehicle" },
  { path: "/one-way-cab/delhi-to-auli", label: "Delhi to Auli cab", note: "If you are starting from Delhi" },
  { path: "/dehradun-airport-to-auli-taxi", label: "Jolly Grant to Auli taxi", note: "Fly in and go straight up" },
  { path: "/family-trip-auli-from-delhi", label: "Auli as a family trip", note: "Pacing for a longer hill drive" },
];

const CHOPTA_TRANSPORT: CrossLink[] = [
  { path: "/tempo-traveller/rishikesh-to-chopta", label: "Rishikesh to Chopta tempo traveller", note: "For a group of 12 and up" },
  { path: "/force-urbania/rishikesh-to-chopta", label: "Rishikesh to Chopta by Urbania", note: "The more comfortable group vehicle" },
  { path: "/sightseeing/chopta-tungnath-trek-tour", label: "Chopta and Tungnath trek tour", note: "Road transport plus the trek base" },
  { path: "/sightseeing/chopta", label: "Chopta sightseeing by cab", note: "What is worth stopping for" },
  { path: "/one-way-cab/delhi-to-chopta", label: "Delhi to Chopta cab", note: "If you are starting from Delhi" },
  { path: "/dehradun-airport-to-chopta-taxi", label: "Jolly Grant to Chopta taxi", note: "Fly in and go straight up" },
];

const DEHRADUN_TRANSPORT: CrossLink[] = [
  { path: "/rishikesh-to-dehradun", label: "Rishikesh to Dehradun cab", note: "About 45 km, an hour to an hour and a half" },
  { path: "/dehradun-travel-guide", label: "Dehradun travel guide", note: "What is worth the trip" },
  { path: "/sightseeing/dehradun", label: "Dehradun sightseeing by cab", note: "Half-day and full-day itineraries" },
  { path: "/places-to-visit-near-dehradun", label: "Places to visit near Dehradun", note: "Including Chakrata and Mussoorie" },
  { path: "/airport-service/dehradun", label: "Jolly Grant airport transfers", note: "The airport sits between the two towns" },
  { path: "/distance/rishikesh-to-dehradun", label: "Distance and drive time", note: "Route and how long it really takes" },
];

const LANSDOWNE_TRANSPORT: CrossLink[] = [
  { path: "/one-way-cab/delhi-to-lansdowne", label: "Delhi to Lansdowne cab", note: "Published fares by vehicle" },
  { path: "/delhi-to-lansdowne-by-road", label: "Lansdowne by road", note: "The route and what it is like to drive" },
  { path: "/distance/delhi-to-lansdowne", label: "Distance and drive time", note: "How long it really takes" },
  { path: "/sightseeing/delhi-to-lansdowne-2-days", label: "Lansdowne in two days", note: "A workable weekend itinerary" },
  { path: "/round-trip/delhi-to-lansdowne", label: "Round trip from Delhi", note: "The car stays with you" },
  { path: "/rishikesh", label: "Rishikesh cab services", note: "If you are starting from here instead" },
];

// Bike tours: the rider's questions are about the road rather than the fare —
// what the monsoon does to it, what happens if it closes, and what a support
// vehicle can carry.
const HILL_ROUTE_TRANSPORT: CrossLink[] = [
  { path: "/delhi-to-rishikesh", label: "Delhi to Rishikesh cab", note: "Reach the start point with your gear" },
  { path: "/tempo-traveller/rishikesh", label: "Tempo traveller in Rishikesh", note: "Backup vehicle for a riding group" },
  { path: "/monsoon-landslide-risk-hill-roads", label: "Monsoon risk on hill roads", note: "Landslide season on exactly these routes" },
  { path: "/what-if-the-road-closes-mid-trip", label: "If the road closes mid-trip", note: "How a closure is actually handled" },
  { path: "/luggage-capacity-by-vehicle", label: "Luggage by vehicle", note: "What a support vehicle can carry" },
  { path: "/sedan-or-suv-for-hill-roads", label: "Sedan or SUV on hill roads", note: "If part of the group drives instead" },
];

const SPITI_TRANSPORT: CrossLink[] = [
  { path: "/spiti-valley-road-trip-from-delhi", label: "Spiti road trip by car", note: "The same circuit with a driver" },
  { path: "/inner-line-permit-kinnaur-spiti", label: "Inner Line Permit for Kinnaur and Spiti", note: "Who needs one and where it is issued" },
  { path: "/how-to-reach-kaza-from-delhi", label: "How to reach Kaza", note: "Both approaches into the valley" },
  { path: "/when-does-rohtang-and-atal-tunnel-open", label: "When Rohtang and the Atal Tunnel open", note: "What decides the riding season" },
  { path: "/spiti-in-7-days-itinerary", label: "Spiti in seven days", note: "A workable day-by-day" },
  { path: "/commercial-vehicle-state-permits", label: "State permits for vehicles", note: "Crossing into Himachal with a support car" },
];

const KHEERGANGA_TRANSPORT: CrossLink[] = [
  { path: "/sightseeing/kasol-kheerganga-tour", label: "Kasol and Kheerganga by cab", note: "The same destination with a driver" },
  { path: "/one-way-cab/delhi-to-kasol", label: "Delhi to Kasol cab", note: "Published fares by vehicle" },
  { path: "/kasol-trip-cost-from-delhi", label: "What a Kasol trip costs", note: "Budget for the Parvati valley" },
  { path: "/places-to-visit-near-kasol", label: "Places to visit near Kasol", note: "What else is in the valley" },
  { path: "/monsoon-landslide-risk-hill-roads", label: "Monsoon risk on hill roads", note: "The Parvati road in a wet year" },
  { path: "/delhi-to-rishikesh", label: "Delhi to Rishikesh cab", note: "Reaching the start point" },
];

// Rentals sell self-drive. The useful cross-links are the main site's own
// comparison of the two and the jobs a bike cannot do.
const SELF_DRIVE_TRANSPORT: CrossLink[] = [
  { path: "/self-drive-vs-chauffeur", label: "Self-drive or a chauffeur-driven cab", note: "What each one actually suits" },
  { path: "/delhi-to-rishikesh", label: "Delhi to Rishikesh cab", note: "Cab in, ride once you are here" },
  { path: "/dehradun-airport-to-rishikesh-taxi", label: "Jolly Grant airport transfer", note: "A scooter is no use with luggage" },
  { path: "/local-taxi/rishikesh", label: "Local cab in Rishikesh", note: "For wet days and luggage days" },
  { path: "/taxi-fare/rishikesh", label: "Rishikesh taxi fares", note: "Compare against a day's rental" },
  { path: "/monthly-car-rental-rishikesh", label: "Monthly car rental in Rishikesh", note: "If you are staying a while" },
];

// For the guides about getting around rather than getting here.
const LOCAL_TRANSPORT: CrossLink[] = [
  { path: "/local-taxi/rishikesh", label: "Local cab in Rishikesh", note: "Point-to-point fares" },
  { path: "/4hr-40km-local-cab", label: "4 hr / 40 km local cab", note: "The smallest local booking" },
  { path: "/half-day-cab-rental", label: "Half-day cab", note: "A morning or an afternoon block" },
  { path: "/full-day-cab-rental", label: "Full-day cab", note: "The car stays with you all day" },
  { path: "/taxi-fare/rishikesh", label: "Rishikesh taxi fares", note: "What local running costs" },
  { path: "/local-package-or-outstation-which-applies", label: "Local or outstation rate?", note: "Which one applies to your day" },
];

// For the price list and the booking-mistakes guide: the same questions about
// what a quote includes, asked on the travel side.
const COST_TRANSPORT: CrossLink[] = [
  { path: "/rishikesh-trip-cost-from-delhi", label: "What a Rishikesh trip costs", note: "The travel half of the budget" },
  { path: "/fare-calculator", label: "Fare calculator", note: "Estimate the cab before you book" },
  { path: "/triveni-cabs-pricing-transparency", label: "How a fare is quoted", note: "What is and is not included" },
  { path: "/one-way-drop-charges-explained", label: "One-way drop charges", note: "Why a drop is not half a round trip" },
  { path: "/driver-night-charges-explained", label: "Driver night charges", note: "The late-arrival line item" },
  { path: "/toll-cost/delhi-to-rishikesh", label: "Toll estimate", note: "Plaza-by-plaza planning figure" },
];

// For the seasonal guides — the monsoon suspension, winter, month by month.
const SEASON_TRANSPORT: CrossLink[] = [
  { path: "/best-time-to-visit/rishikesh", label: "Best time to visit Rishikesh", note: "The same months from the road side" },
  { path: "/monsoon-landslide-risk-hill-roads", label: "Monsoon risk on hill roads", note: "What the suspension months do to the drive" },
  { path: "/fog-season-on-north-india-highways", label: "Winter fog on the highways", note: "Why a December drive starts late" },
  { path: "/when-do-hill-stations-get-snow", label: "When the hills get snow", note: "If you are going on from here" },
  { path: "/delhi-to-rishikesh", label: "Delhi to Rishikesh cab", note: "Published fares by vehicle, 240 km" },
  { path: "/weekend-getaways-from-delhi-by-car", label: "Weekend getaways from Delhi", note: "If the river is closed for your dates" },
];

const PLANNING_TRANSPORT: CrossLink[] = [
  { path: "/delhi-to-rishikesh", label: "Delhi to Rishikesh cab", note: "Published fares by vehicle" },
  { path: "/distance/delhi-to-rishikesh", label: "Distance and drive time", note: "Route, stops and timing" },
  { path: "/airport-service/dehradun", label: "Dehradun airport transfer", note: "Nearest airport, about 20 km" },
  { path: "/rishikesh", label: "Rishikesh cab services", note: "Getting around once you are here" },
  { path: "/sightseeing/rishikesh", label: "Rishikesh sightseeing", note: "Temples, ghats and bridges by cab" },
  { path: "/weekend-getaways-from-delhi-by-car", label: "Weekend getaways from Delhi", note: "If Rishikesh is one option among several" },
];

// How-to-reach is the one page where the comparison between road, rail, bus and
// air is the whole point, so it gets the comparison pages rather than the fares.
const ARRIVAL_OPTIONS: CrossLink[] = [
  { path: "/how-to-reach/rishikesh-from-delhi", label: "How to reach Rishikesh from Delhi", note: "Every option, compared" },
  { path: "/travel-options/delhi-to-rishikesh", label: "Travel options from Delhi", note: "Cab, bus and train side by side" },
  { path: "/bus-vs-cab/delhi-to-rishikesh", label: "Bus or cab?", note: "Cost against time on this route" },
  { path: "/delhi-to-rishikesh", label: "Delhi to Rishikesh cab", note: "240 km, about 5-6 hours door to door" },
  { path: "/dehradun-airport-to-rishikesh-taxi", label: "Jolly Grant airport transfer", note: "A flight plus a short transfer" },
  { path: "/rishikesh-to-haridwar", label: "Rishikesh to Haridwar", note: "If you arrive by train, the last 25 km" },
];

const TRANSPORT_BY_SLUG: Record<string, TransportSet> = {
  /* ---- guides: arrival, local logistics, cost, season ------------- */
  "how-to-reach-rishikesh": {
    heading: "Every way to get here, with fares",
    intro:
      "This is the question this page exists to answer, and the road options are run by Triveni Cabs. Fares, drive times and toll estimates are published on the pages below.",
    links: ARRIVAL_OPTIONS,
  },
  "rishikesh-travel-guide": {
    heading: "Getting here and getting around",
    intro:
      "Arrival and local transport are handled by Triveni Cabs. These are the pages with the actual fares and journey times.",
    links: PLANNING_TRANSPORT,
  },
  "where-to-stay-in-rishikesh": {
    heading: "Reaching your stay",
    intro:
      "Wherever you book, the drop is included in the cab fare. Send the property's map location when booking — some riverside camps are not reachable by a large vehicle.",
    links: ARRIVE_RISHIKESH,
  },
  "things-to-do-in-rishikesh": {
    heading: "Getting here, and getting between activities",
    intro:
      "Most of the activities on this page are spread along the Shivpuri and Tapovan road. Transport is run by Triveni Cabs.",
    links: PLANNING_TRANSPORT,
  },
  "getting-around-rishikesh-without-a-car": {
    heading: "What hiring locally actually costs",
    intro:
      "This page covers the no-vehicle options. If you decide the sites are too spread out to manage without one, these are the local hire rates on the main site.",
    links: LOCAL_TRANSPORT,
  },
  "rafting-vs-bungee-which-first": {
    heading: "Two sites, two directions",
    intro:
      "The river and the jump platform are not near each other, which is the practical reason the order matters. Local transport between them is run by Triveni Cabs.",
    links: LOCAL_TRANSPORT,
  },
  "rishikesh-adventure-sports-price-list": {
    heading: "Budgeting the travel alongside the activities",
    intro:
      "The prices on this page are the activity half. These are the pages that put a number on the other half, and explain what a cab quote does and does not include.",
    links: COST_TRANSPORT,
  },
  "rishikesh-booking-mistakes-to-avoid": {
    heading: "The same mistakes on the travel side",
    intro:
      "Most of what goes wrong with a booking is a quote that did not include something. These pages set out how the cab side is priced, for the same reason this page exists.",
    links: COST_TRANSPORT,
  },
  "when-rafting-is-closed-in-rishikesh": {
    heading: "What those months do to the roads",
    intro:
      "The suspension is about water level, but the same weeks change the drive up as well. These are the road-condition pages for the same window.",
    links: SEASON_TRANSPORT,
  },
  "best-time-for-river-rafting-in-rishikesh": {
    heading: "The same calendar, from the road",
    intro:
      "Water level decides the rafting. Weather and road condition decide the journey, and they do not line up exactly — these are the pages for the travel half.",
    links: SEASON_TRANSPORT,
  },
  "best-time-to-visit-rishikesh-month-by-month": {
    heading: "The same months, from the road",
    intro:
      "A month that is good for the river is not automatically a good month to drive up. These are the road-side pages for the same calendar.",
    links: SEASON_TRANSPORT,
  },
  "rishikesh-in-winter-what-stays-open": {
    heading: "Winter on the roads",
    intro:
      "Winter here is about what is open and how cold the nights get. On the drive it is about fog and, if you are going further up, snow.",
    links: SEASON_TRANSPORT,
  },
  "rishikesh-with-kids-what-they-can-do": {
    heading: "Travelling with children",
    intro:
      "The activity side is on this page. The 240 km with young children is the other half of it, and these are the pages that deal with it properly.",
    links: FAMILY_TRANSPORT,
  },
  "rishikesh-for-solo-travellers": {
    heading: "Getting here on your own",
    intro:
      "Alone, the cost of a private cab is the whole question, so it is worth seeing it next to the bus and the train rather than on its own.",
    links: ARRIVAL_OPTIONS,
  },
  "rishikesh-adventure-for-large-groups": {
    heading: "Group transport",
    intro:
      "Above about six people the vehicle decision changes completely, and it is priced per vehicle rather than per seat. These are the group options.",
    links: GROUP_TRANSPORT,
  },
  "adventure-sports-safety-in-rishikesh": {
    heading: "The road half of the same question",
    intro:
      "This page is about how the activities are run safely. These are the equivalent pages for the vehicle and the driver that get you here.",
    links: PLANNING_TRANSPORT,
  },
  "how-many-days-do-you-need-in-rishikesh": {
    heading: "What the travel days cost you",
    intro:
      "Five to six hours each way is most of two half-days, which is the real reason a one-night trip feels short. These pages put the journey into the itinerary.",
    links: ARRIVAL_OPTIONS,
  },

  /* ---- Haridwar -------------------------------------------------- */
  "things-to-do-in-haridwar": {
    heading: "Getting to Haridwar and around it",
    intro: "Road transport to Haridwar, between the two towns and between the ghats is run by Triveni Cabs.",
    links: HARIDWAR_LOCAL,
  },
  "haridwar-tour-from-rishikesh": {
    heading: "Getting to Haridwar",
    intro: "Road transport to Haridwar and between the two towns is run by Triveni Cabs.",
    links: HARIDWAR_LOCAL,
  },
  "haridwar-ganga-aarti-tour": {
    heading: "Getting there in time for the aarti",
    intro:
      "The aarti is at sunset and the ghats fill well before it, so the arrival time matters more than usual. These are the journey options.",
    links: HARIDWAR_LOCAL,
  },
  "rishikesh-haridwar-combo-tour": {
    heading: "Transport for both towns",
    intro: "Both towns in one trip works best with a vehicle retained for the day rather than two separate drops.",
    links: HARIDWAR_LOCAL,
  },

  /* ---- packages and groups --------------------------------------- */
  "college-group-trip-rishikesh": {
    heading: "Group transport",
    intro:
      "A college group almost always needs a tempo traveller rather than cars. These are the group options, priced per vehicle rather than per seat.",
    links: GROUP_TRANSPORT,
  },
  "corporate-team-outing-rishikesh": {
    heading: "Corporate transport",
    intro:
      "Team travel can be invoiced and booked against a company account. These are the relevant pages.",
    links: GROUP_TRANSPORT,
  },
  "family-adventure-package-rishikesh": {
    heading: "Travelling as a family",
    intro:
      "The package covers what the family does here. These pages cover the drive, which with small children or grandparents along is the part worth planning.",
    links: FAMILY_TRANSPORT,
  },
  "delhi-to-rishikesh-adventure-tour": {
    heading: "The cab side of this package",
    intro:
      "This is the one page on the site where the transport is the product, so it is worth seeing the published fares, distances and toll estimates behind it.",
    links: ARRIVE_RISHIKESH,
  },

  /* ---- yatra ------------------------------------------------------ */
  "char-dham-yatra-from-rishikesh": {
    heading: "Vehicles for the circuit",
    intro:
      "The yatra is a road journey from here on, and the vehicle is with you for the whole of it. Registration and road conditions are on the pages below too.",
    links: DHAM_TRANSPORT,
  },
  "do-dham-yatra-from-rishikesh": {
    heading: "Vehicles for the circuit",
    intro:
      "Two dhams is the same road for less of it. Vehicles, drivers and the registration requirement are covered on the pages below.",
    links: DHAM_TRANSPORT,
  },
  "kedarnath-tour-from-rishikesh": {
    heading: "Road transport to the trek base",
    intro:
      "The vehicle takes you as far as the road goes; the rest is on foot, by pony or by helicopter. These are the road pages for that leg.",
    links: DHAM_TRANSPORT,
  },
  "badrinath-tour-from-rishikesh": {
    heading: "Road transport to Badrinath",
    intro:
      "Badrinath is reachable by road the whole way, which makes the vehicle choice and the road condition the two things worth reading about.",
    links: DHAM_TRANSPORT,
  },
  "gangotri-tour-from-rishikesh": {
    heading: "Road transport to Gangotri",
    intro:
      "The Gangotri road is the Uttarkashi and Harsil road, and it is a long hill drive. These are the vehicle and road pages for it.",
    links: DHAM_TRANSPORT,
  },
  "yamunotri-tour-from-rishikesh": {
    heading: "Road transport to Janki Chatti",
    intro:
      "The road ends at Janki Chatti and the shrine is a trek from there. These are the pages for the road part.",
    links: DHAM_TRANSPORT,
  },
  "char-dham-by-bike-from-rishikesh": {
    heading: "Support vehicle for a riding group",
    intro:
      "Most groups riding the circuit want a vehicle behind them for luggage, spares and anyone who stops riding. These are the options.",
    links: DHAM_TRANSPORT,
  },

  /* ---- bike tours ------------------------------------------------- */
  "bike-tour-rishikesh-to-spiti-valley": {
    heading: "Permits, passes and the support vehicle",
    intro:
      "Spiti is the one route here where paperwork and road-opening dates decide whether the trip happens at all. These are the main site's pages on both.",
    links: SPITI_TRANSPORT,
  },
  "bike-tour-rishikesh-to-kheerganga": {
    heading: "The Parvati valley by road",
    intro:
      "Kheerganga is a trek from the road head, and the road head is in Himachal rather than Uttarakhand. These are the vehicle pages for the same destination.",
    links: KHEERGANGA_TRANSPORT,
  },

  /* ---- nearby destinations ---------------------------------------- */
  "mussoorie-tour-from-rishikesh": {
    heading: "The Mussoorie road",
    intro: "Mussoorie, Dhanaulti and Kanatal are all on the same road out, and the choice between them is mostly about how far you want to drive.",
    links: MUSSOORIE_ROAD,
  },
  "dhanaulti-tour-from-rishikesh": {
    heading: "The Mussoorie road",
    intro: "Dhanaulti sits beyond Mussoorie on the same road, which is why most people compare the two before booking either.",
    links: MUSSOORIE_ROAD,
  },
  "kanatal-tour-from-rishikesh": {
    heading: "The Mussoorie and Chamba road",
    intro: "Kanatal is further along the same road as Mussoorie and Dhanaulti. These are the fare pages for all three.",
    links: MUSSOORIE_ROAD,
  },
  "nainital-tour-from-rishikesh": {
    heading: "The Kumaon trips",
    intro: "Nainital and Corbett are both in Kumaon and both long enough that they are a different kind of trip from the Garhwal day runs.",
    links: KUMAON_TRANSPORT,
  },
  "jim-corbett-tour-from-rishikesh": {
    heading: "The Kumaon trips",
    intro: "Corbett and Nainital are close enough together to combine and far enough from Rishikesh to need a proper vehicle booking.",
    links: KUMAON_TRANSPORT,
  },
  "auli-tour-from-rishikesh": {
    heading: "Getting to Auli",
    intro: "Auli is a long hill drive and the last stretch is a cable car or a road climb. These are the vehicle options for the road part.",
    links: AULI_TRANSPORT,
  },
  "chopta-tour-from-rishikesh": {
    heading: "Getting to Chopta",
    intro: "Chopta is the trek base for Tungnath, reached by a full day of hill driving. These are the vehicle options.",
    links: CHOPTA_TRANSPORT,
  },
  "dehradun-tour-from-rishikesh": {
    heading: "Rishikesh to Dehradun",
    intro: "The shortest trip on this list, and the one most people combine with an airport transfer at one end.",
    links: DEHRADUN_TRANSPORT,
  },
  "chakrata-tour-from-rishikesh": {
    heading: "Via Dehradun",
    intro: "Chakrata is reached through Dehradun rather than directly from Rishikesh, so the Dehradun pages are the useful ones.",
    links: DEHRADUN_TRANSPORT,
  },
  "lansdowne-tour-from-rishikesh": {
    heading: "Getting to Lansdowne",
    intro: "Lansdowne is off the main hill corridor, which is most of its appeal and all of its logistics. These are the road pages.",
    links: LANSDOWNE_TRANSPORT,
  },
  "devprayag-tour-from-rishikesh": {
    heading: "On the Char Dham road",
    intro: "Devprayag is the first confluence on the road to the dhams, which is why almost everyone who sees it is on their way somewhere else.",
    links: YATRA_ROAD_TOWNS,
  },
  "rudraprayag-tour-from-rishikesh": {
    heading: "On the Kedarnath road",
    intro: "Rudraprayag is a junction on the way to Kedarnath, and most visits to it are part of a longer road journey.",
    links: YATRA_ROAD_TOWNS,
  },
  "tehri-lake-tour-from-rishikesh": {
    heading: "On the Tehri road",
    intro: "The lake sits on the way up towards the Gangotri side, and a vehicle for the day is the only practical way to see it.",
    links: YATRA_ROAD_TOWNS,
  },
  "harsil-tour-from-rishikesh": {
    heading: "On the Gangotri road",
    intro: "Harsil is on the Gangotri road, well past Uttarkashi, and it is a long enough drive to need planning.",
    links: YATRA_ROAD_TOWNS,
  },
};

const TRANSPORT_BY_CATEGORY: Record<string, TransportSet> = {
  yatra: {
    heading: "Transport for the yatra",
    intro:
      "The yatra is a road journey once you reach Haridwar or Rishikesh. Vehicles, drivers and multi-day packages are run by Triveni Cabs.",
    links: YATRA_TRANSPORT,
  },
  haridwar: {
    heading: "Getting to Haridwar",
    intro: "Road transport to Haridwar and between the two towns is run by Triveni Cabs.",
    links: ARRIVE_HARIDWAR,
  },
  nearby: {
    heading: "Onward journeys from Rishikesh",
    intro: "Road transport beyond Rishikesh is run by Triveni Cabs.",
    links: NEARBY_TRANSPORT,
  },
  guide: {
    heading: "Getting here and getting around",
    intro: "Arrival and local transport are run by Triveni Cabs. These pages carry the fares and journey times.",
    links: PLANNING_TRANSPORT,
  },
  package: {
    heading: "Getting here",
    intro:
      "Packages on this site cover the activities. The journey to Rishikesh is booked separately with Triveni Cabs.",
    links: ARRIVE_RISHIKESH,
  },
  activity: {
    heading: "Getting here, and getting to the site",
    intro:
      "Confirm your activity slot first — its reporting time decides when you need to leave. The sites are spread out, so local transport matters as much as the drive up.",
    links: ACTIVITY_SITES,
  },
  "rafting-stretch": {
    heading: "Getting here",
    intro:
      "Rafting slots are timed, so fix the activity before the pickup. These are the journey options.",
    links: ARRIVE_RISHIKESH,
  },
  rental: {
    heading: "Self-drive, or a driver?",
    intro:
      "Self-drive starts once you arrive, and there are days it does not suit — luggage, airport runs, rain. These are the alternatives for those days.",
    links: SELF_DRIVE_TRANSPORT,
  },
  "bike-tour": {
    heading: "The road, and the vehicle behind you",
    intro:
      "Tours start from Rishikesh. These pages cover reaching the start with your gear, the support vehicle, and what the road does in bad weather.",
    links: HILL_ROUTE_TRANSPORT,
  },
};

/**
 * The full transport panel for a page: several relevant journey pages on the
 * main site rather than the single sidebar link. Falls back by category so
 * every content page gets a relevant set.
 */
export function transportSetFor(slug: string, category?: string): TransportSet | null {
  return (
    TRANSPORT_BY_SLUG[slug] ??
    (category ? TRANSPORT_BY_CATEGORY[category] : undefined) ??
    null
  );
}

/** Footer links to the main site — the few journeys that matter most broadly. */
export const footerMainLinks: CrossLink[] = [
  { path: "/delhi-to-rishikesh", label: "Delhi to Rishikesh cab" },
  { path: "/rishikesh", label: "Rishikesh cab services" },
  { path: "/chardham-yatra", label: "Char Dham packages" },
  { path: "/one-way-cab/delhi-to-haridwar", label: "Delhi to Haridwar cab" },
  { path: "/tempo-traveller/delhi-to-rishikesh", label: "Tempo traveller for groups" },
];

/** Every main-site path referenced here, for checking against its manifest. */
export const allCrossLinkPaths = (): string[] =>
  Array.from(
    new Set([
      ...Object.values(BY_SLUG).map((c) => c.path),
      ...Object.values(BY_CATEGORY).map((c) => c.path),
      ...Object.values(TRANSPORT_BY_SLUG).flatMap((t) => t.links.map((l) => l.path)),
      ...Object.values(TRANSPORT_BY_CATEGORY).flatMap((t) => t.links.map((l) => l.path)),
      ...footerMainLinks.map((l) => l.path),
      DEFAULT.path,
    ]),
  );

/**
 * Every transport set, named, so the checker can report a duplicated path
 * inside one set — which the panel would render as two links to the same page
 * and React would warn about as a repeated key.
 */
export const allTransportSets = (): { name: string; links: CrossLink[] }[] => [
  ...Object.entries(TRANSPORT_BY_SLUG).map(([name, t]) => ({ name: `slug:${name}`, links: t.links })),
  ...Object.entries(TRANSPORT_BY_CATEGORY).map(([name, t]) => ({ name: `category:${name}`, links: t.links })),
];

/** Slugs that carry a link chosen for the page rather than its category. */
export const crossLinkedSlugs = (): string[] => Object.keys(BY_SLUG);
