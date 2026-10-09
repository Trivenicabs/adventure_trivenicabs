// Page-level transport links back to the main Triveni Cabs site.
//
// Every page on this site previously offered the same sidebar link to the parent
// homepage ("Need a cab from Delhi?"). That wastes the most useful thing we can
// tell a reader: the specific journey page for the trip they are already looking
// at. A reader on the Char Dham page wants the Char Dham cab page, not the
// homepage; a reader on the Haridwar tour wants Delhi to Haridwar.
//
// Every destination below was checked against the main site's build manifest, so
// each one resolves to a page that exists. Keep that true when adding entries.
export type CrossLink = {
  /** Path on www.trivenicabs.in, including the leading slash. */
  path: string;
  /** What the reader is being offered, in their terms. */
  label: string;
  /** Short reason, shown under the label where there is room. */
  note?: string;
};

const MAIN = "https://www.trivenicabs.in";

/** Build the absolute URL for a main-site path. */
export const mainUrl = (path: string) => `${MAIN}${path}`;

// Per-page overrides, keyed by this site's item slug. Most specific wins.
const BY_SLUG: Record<string, CrossLink> = {
  // The arrival question — the single most useful cross-link on the site.
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
  "best-time-for-river-rafting-in-rishikesh": {
    path: "/delhi-to-rishikesh",
    label: "Delhi to Rishikesh cab fares",
    note: "Plan the drive around your rafting slot",
  },

  // Char Dham and the individual dhams.
  "char-dham-yatra-from-rishikesh": {
    path: "/chardham-yatra",
    label: "Char Dham cab and tempo packages",
    note: "Multi-day vehicle with driver",
  },
  "do-dham-yatra-from-rishikesh": {
    path: "/chardham-yatra",
    label: "Char Dham cab and tempo packages",
    note: "Two-dham itineraries available",
  },
  "char-dham-by-bike-from-rishikesh": {
    path: "/chardham-yatra",
    label: "Char Dham support vehicle",
    note: "Backup transport for riding groups",
  },
  "kedarnath-tour-from-rishikesh": {
    path: "/chardham-yatra",
    label: "Kedarnath cab packages",
    note: "Road transfer to the trek base",
  },
  "badrinath-tour-from-rishikesh": {
    path: "/chardham-yatra",
    label: "Badrinath cab packages",
    note: "Multi-day hill vehicle with driver",
  },
  "gangotri-tour-from-rishikesh": {
    path: "/chardham-yatra",
    label: "Gangotri cab packages",
    note: "Seasonal hill route transport",
  },
  "yamunotri-tour-from-rishikesh": {
    path: "/chardham-yatra",
    label: "Yamunotri cab packages",
    note: "Road transfer to Janki Chatti",
  },

  // Haridwar.
  "haridwar-tour-from-rishikesh": {
    path: "/delhi-to-haridwar",
    label: "Delhi to Haridwar cab fares",
    note: "Or a Rishikesh-Haridwar local transfer",
  },
  "haridwar-ganga-aarti-tour": {
    path: "/delhi-to-haridwar",
    label: "Delhi to Haridwar cab fares",
    note: "Arrive before the evening aarti",
  },
  "things-to-do-in-haridwar": {
    path: "/haridwar-travel-guide",
    label: "Haridwar travel and transport guide",
    note: "Timings, ghats and getting around",
  },
  "rishikesh-haridwar-combo-tour": {
    path: "/delhi-to-haridwar",
    label: "Delhi to Haridwar cab fares",
    note: "Both towns in one booking",
  },

  // Nearby hill destinations.
  "mussoorie-tour-from-rishikesh": {
    path: "/delhi-to-mussoorie",
    label: "Mussoorie cab fares",
    note: "Hill route with an experienced driver",
  },
  "dhanaulti-tour-from-rishikesh": {
    path: "/delhi-to-mussoorie",
    label: "Mussoorie and Dhanaulti cabs",
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

  // Groups and corporate.
  "college-group-trip-rishikesh": {
    path: "/tempo-traveller/delhi-to-rishikesh",
    label: "Delhi to Rishikesh tempo traveller",
    note: "12 to 26 seats for the whole group",
  },
  "corporate-team-outing-rishikesh": {
    path: "/corporate-transportation-service",
    label: "Corporate transport booking",
    note: "Invoiced travel for teams",
  },
  "delhi-to-rishikesh-adventure-tour": {
    path: "/delhi-to-rishikesh",
    label: "Delhi to Rishikesh cab fares",
    note: "Published fares by vehicle",
  },

  // Price and planning pages.
  "rishikesh-adventure-sports-price-list": {
    path: "/delhi-to-rishikesh",
    label: "Cab fares to Rishikesh",
    note: "Budget the travel alongside the activity",
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
    path: "/delhi-to-rishikesh",
    label: "Getting to Rishikesh to collect it",
    note: "Cab in, self-drive once you arrive",
  },
  "bike-tour": {
    path: "/delhi-to-rishikesh",
    label: "Delhi to Rishikesh cab fares",
    note: "Reach the start point with your gear",
  },
  yatra: {
    path: "/chardham-yatra",
    label: "Char Dham cab and tempo packages",
    note: "Multi-day vehicle with driver",
  },
  haridwar: {
    path: "/delhi-to-haridwar",
    label: "Delhi to Haridwar cab fares",
    note: "Door-to-door transfers",
  },
  nearby: {
    path: "/rishikesh",
    label: "Rishikesh cab services",
    note: "Outstation journeys from Rishikesh",
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
// Every path below was checked against the main site's build manifest.

export type TransportSet = {
  heading: string;
  intro: string;
  links: CrossLink[];
};

const ARRIVE_RISHIKESH: CrossLink[] = [
  { path: "/delhi-to-rishikesh", label: "Delhi to Rishikesh cab", note: "Published fares by vehicle, 240 km" },
  { path: "/one-way-cab/delhi-to-rishikesh", label: "One-way drop", note: "No return fare charged" },
  { path: "/airport-service/dehradun", label: "Dehradun airport transfer", note: "Jolly Grant is the nearest airport" },
  { path: "/distance/delhi-to-rishikesh", label: "Distance and drive time", note: "Route, stops and how long it really takes" },
  { path: "/toll-cost/delhi-to-rishikesh", label: "Toll estimate", note: "Plaza-by-plaza planning figure" },
  { path: "/tempo-traveller/delhi-to-rishikesh", label: "Tempo traveller for groups", note: "12 to 26 seats" },
];

const ARRIVE_HARIDWAR: CrossLink[] = [
  { path: "/delhi-to-haridwar", label: "Delhi to Haridwar cab", note: "Published fares by vehicle" },
  { path: "/one-way-cab/delhi-to-haridwar", label: "One-way drop", note: "No return fare charged" },
  { path: "/rishikesh-to-haridwar", label: "Rishikesh to Haridwar", note: "Local transfer, about 25 km" },
  { path: "/toll-cost/delhi-to-haridwar", label: "Toll estimate", note: "Plaza-by-plaza planning figure" },
  { path: "/haridwar-travel-guide", label: "Haridwar travel guide", note: "Ghats, timings and getting around" },
];

const YATRA_TRANSPORT: CrossLink[] = [
  { path: "/chardham-yatra", label: "Char Dham cab packages", note: "Multi-day vehicle with driver" },
  { path: "/delhi-to-haridwar", label: "Delhi to Haridwar cab", note: "The usual road start for the circuit" },
  { path: "/delhi-to-rishikesh", label: "Delhi to Rishikesh cab", note: "The alternative starting point" },
  { path: "/tempo-traveller/delhi-to-rishikesh", label: "Tempo traveller for groups", note: "Yatra groups of 12 and up" },
  { path: "/airport-service/dehradun", label: "Dehradun airport transfer", note: "Fly in, start the circuit by road" },
];

const GROUP_TRANSPORT: CrossLink[] = [
  { path: "/tempo-traveller/delhi-to-rishikesh", label: "Delhi to Rishikesh tempo traveller", note: "12 to 26 seats with driver" },
  { path: "/tempo-traveller/rishikesh", label: "Tempo traveller in Rishikesh", note: "Local group transport once you arrive" },
  { path: "/corporate-transportation-service", label: "Corporate transport", note: "Invoiced travel for teams" },
  { path: "/delhi-to-rishikesh", label: "Delhi to Rishikesh cab", note: "For the smaller groups" },
];

const NEARBY_TRANSPORT: CrossLink[] = [
  { path: "/rishikesh", label: "Rishikesh cab services", note: "Local packages and outstation journeys" },
  { path: "/places-to-visit-near-rishikesh", label: "Places to visit near Rishikesh", note: "Day trips with distances and fares" },
  { path: "/delhi-to-mussoorie", label: "Mussoorie cab fares", note: "Hill route with an experienced driver" },
  { path: "/delhi-to-nainital", label: "Nainital cab fares", note: "Lake district transfers" },
  { path: "/delhi-to-jim-corbett", label: "Jim Corbett cab fares", note: "Park gate drops" },
];

const PLANNING_TRANSPORT: CrossLink[] = [
  { path: "/delhi-to-rishikesh", label: "Delhi to Rishikesh cab", note: "Published fares by vehicle" },
  { path: "/distance/delhi-to-rishikesh", label: "Distance and drive time", note: "Route, stops and timing" },
  { path: "/airport-service/dehradun", label: "Dehradun airport transfer", note: "Nearest airport, about 20 km" },
  { path: "/rishikesh", label: "Rishikesh cab services", note: "Getting around once you are here" },
  { path: "/sightseeing/rishikesh", label: "Rishikesh sightseeing", note: "Temples, ghats and bridges by cab" },
  { path: "/weekend-getaways-from-delhi-by-car", label: "Weekend getaways from Delhi", note: "If Rishikesh is one option among several" },
];

const TRANSPORT_BY_SLUG: Record<string, TransportSet> = {
  "how-to-reach-rishikesh": {
    heading: "Every way to get here, with fares",
    intro:
      "This is the question this page exists to answer, and the road options are run by Triveni Cabs. Fares, drive times and toll estimates are published on the pages below.",
    links: PLANNING_TRANSPORT,
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
  "things-to-do-in-haridwar": {
    heading: "Getting to Haridwar",
    intro: "Road transport to Haridwar and between Haridwar and Rishikesh is run by Triveni Cabs.",
    links: ARRIVE_HARIDWAR,
  },
  "haridwar-tour-from-rishikesh": {
    heading: "Getting to Haridwar",
    intro: "Road transport to Haridwar and between the two towns is run by Triveni Cabs.",
    links: ARRIVE_HARIDWAR,
  },
  "haridwar-ganga-aarti-tour": {
    heading: "Getting there in time for the aarti",
    intro:
      "The aarti is at sunset and the ghats fill well before it, so the arrival time matters more than usual. These are the journey options.",
    links: ARRIVE_HARIDWAR,
  },
  "rishikesh-haridwar-combo-tour": {
    heading: "Transport for both towns",
    intro: "Both towns in one trip works best with a vehicle retained for the day rather than two separate drops.",
    links: ARRIVE_HARIDWAR,
  },
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
  "mussoorie-tour-from-rishikesh": {
    heading: "Onward journeys from Rishikesh",
    intro: "Road transport beyond Rishikesh is run by Triveni Cabs.",
    links: NEARBY_TRANSPORT,
  },
  "dhanaulti-tour-from-rishikesh": {
    heading: "Onward journeys from Rishikesh",
    intro: "Road transport beyond Rishikesh is run by Triveni Cabs.",
    links: NEARBY_TRANSPORT,
  },
  "nainital-tour-from-rishikesh": {
    heading: "Onward journeys from Rishikesh",
    intro: "Road transport beyond Rishikesh is run by Triveni Cabs.",
    links: NEARBY_TRANSPORT,
  },
  "jim-corbett-tour-from-rishikesh": {
    heading: "Onward journeys from Rishikesh",
    intro: "Road transport beyond Rishikesh is run by Triveni Cabs.",
    links: NEARBY_TRANSPORT,
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
    heading: "Getting here",
    intro:
      "Confirm your activity slot first — its reporting time decides when you need to leave. These are the journey options.",
    links: ARRIVE_RISHIKESH,
  },
  "rafting-stretch": {
    heading: "Getting here",
    intro:
      "Rafting slots are timed, so fix the activity before the pickup. These are the journey options.",
    links: ARRIVE_RISHIKESH,
  },
  rental: {
    heading: "Getting here to collect it",
    intro:
      "Self-drive starts once you arrive. Most people take a cab in and ride locally from here.",
    links: ARRIVE_RISHIKESH,
  },
  "bike-tour": {
    heading: "Getting to the start point",
    intro:
      "Tours start from Rishikesh. If you are not riding in, these are the ways to reach the start with your gear.",
    links: ARRIVE_RISHIKESH,
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
  { path: "/delhi-to-haridwar", label: "Delhi to Haridwar cab" },
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
