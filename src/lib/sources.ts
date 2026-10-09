// Official sources for the changeable facts these pages state.
//
// This site makes claims a traveller acts on: that Char Dham requires
// registration, that rafting runs in a defined season, that activities are
// regulated. Until now none of them was sourced — the whole site cited nothing
// external, while the main Triveni Cabs site cites NHAI, Parivahan, the state
// tourism boards and the Archaeological Survey across hundreds of pages.
//
// Sourcing a changeable fact does three things: it shows the reader where the
// figure came from, it dates the claim, and it gives us a reason to be reading
// those sources regularly rather than letting a season or a rule go stale.
//
// Every URL here was checked to resolve before being added. Do the same when
// adding one — a citation to a dead page is worse than no citation.
export type Source = {
  label: string;
  url: string;
  /** What this source is being cited for, so a reader knows why to follow it. */
  forWhat: string;
};

const UK_TOURISM: Source = {
  label: "Uttarakhand Tourism (official)",
  url: "https://uttarakhandtourism.gov.in/",
  forWhat: "Yatra registration, seasonal opening and adventure-activity regulation",
};

const TEMPLE_COMMITTEE: Source = {
  label: "Shri Badrinath–Kedarnath Temple Committee",
  url: "https://badrinath-kedarnath.gov.in/",
  forWhat: "Darshan arrangements and temple opening and closing dates",
};

const HARIDWAR_DISTRICT: Source = {
  label: "Haridwar District Administration",
  url: "https://haridwar.nic.in/",
  forWhat: "Local advisories, ghat arrangements and event dates",
};

// Keyed by this site's item slug. Only pages that make a sourceable factual
// claim get an entry; a page about what a zipline feels like does not need one.
const BY_SLUG: Record<string, Source[]> = {
  // Yatra — the most consequential claims on the site. Registration is a
  // requirement, not a recommendation, and the season is fixed by the temples.
  "char-dham-yatra-from-rishikesh": [UK_TOURISM, TEMPLE_COMMITTEE],
  "do-dham-yatra-from-rishikesh": [UK_TOURISM, TEMPLE_COMMITTEE],
  "char-dham-by-bike-from-rishikesh": [UK_TOURISM, TEMPLE_COMMITTEE],
  "kedarnath-tour-from-rishikesh": [UK_TOURISM, TEMPLE_COMMITTEE],
  "badrinath-tour-from-rishikesh": [UK_TOURISM, TEMPLE_COMMITTEE],
  "gangotri-tour-from-rishikesh": [UK_TOURISM],
  "yamunotri-tour-from-rishikesh": [UK_TOURISM],

  // Rafting season and activity regulation are both set by the state.
  "river-rafting-in-rishikesh": [UK_TOURISM],
  "best-time-for-river-rafting-in-rishikesh": [UK_TOURISM],
  "adventure-sports-safety-in-rishikesh": [UK_TOURISM],
  "ganga-river-expedition-rishikesh": [UK_TOURISM],

  // Haridwar — ghat arrangements and aarti timings are local-administration matters.
  "haridwar-tour-from-rishikesh": [HARIDWAR_DISTRICT],
  "haridwar-ganga-aarti-tour": [HARIDWAR_DISTRICT],
  "things-to-do-in-haridwar": [HARIDWAR_DISTRICT],
  "rishikesh-haridwar-combo-tour": [HARIDWAR_DISTRICT],

  // Planning guides that quote seasons, access and regulation.
  "how-to-reach-rishikesh": [UK_TOURISM],
  "rishikesh-travel-guide": [UK_TOURISM],
  "things-to-do-in-rishikesh": [UK_TOURISM],
};

// Category fallback for the yatra family, so a new dham page is sourced by default.
const BY_CATEGORY: Record<string, Source[]> = {
  yatra: [UK_TOURISM, TEMPLE_COMMITTEE],
  haridwar: [HARIDWAR_DISTRICT],
};

/** Sources to cite on a page, or an empty list if it makes no sourceable claim. */
export function sourcesFor(slug: string, category?: string): Source[] {
  return BY_SLUG[slug] ?? (category ? BY_CATEGORY[category] : undefined) ?? [];
}

/** Every source URL referenced here, for link checking. */
export const allSourceUrls = (): string[] =>
  Array.from(
    new Set(
      [...Object.values(BY_SLUG), ...Object.values(BY_CATEGORY)]
        .flat()
        .map((s) => s.url),
    ),
  );
