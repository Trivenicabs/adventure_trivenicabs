import type { Item } from "./data";

export function intro(i: Item): string {
  const base = `${i.title} is one of Rishikesh's most loved experiences. ${i.tagline} `;
  const map: Record<string, string> = {
    activity: `Triveni partners with government-licensed operators so you get certified guides, well-maintained safety gear and a smooth, photo-worthy ride from start to finish. Book in minutes over WhatsApp — no advance payment needed.`,
    "rafting-stretch": `This stretch is run by certified river guides with rescue kayak support, life jackets and helmets included. Pick your slot, reach the start point, and we handle the rest.`,
    package: `Everything is bundled at one transparent price — activities, stay, meals and transfers where listed — so you save money and skip the planning. Customisable for couples, families and big groups.`,
    rental: `All Triveni rentals come fully serviced, with helmets, documents and 24×7 roadside support. Carry a valid licence and a deposit, and you're free to roam the hills.`,
    "bike-tour": `Our guided rides include a lead captain, backup vehicle, fuel, stays and permits where applicable — so you focus on the road and the views, not the logistics.`,
    yatra: `Triveni arranges comfortable vehicles, verified stays, darshan guidance and experienced drivers for the mountain roads — the same trusted service that powers our cab business.`,
    haridwar: `Travel in comfort with a Triveni cab and driver who knows every ghat and temple, timed perfectly for the famous Ganga Aarti.`,
    nearby: `An easy add-on to your Rishikesh trip with a Triveni cab and driver, planned around your pace and budget.`,
    guide: `Here's everything you need to know, kept honest and up to date by the Triveni team on the ground in Rishikesh.`,
  };
  return base + (map[i.category] ?? "");
}

export function includes(i: Item): string[] {
  const map: Record<string, string[]> = {
    activity: ["Certified guide / instructor", "All safety equipment & gear", "Briefing & demonstration", "Entry / activity fees"],
    "rafting-stretch": ["Certified river guide", "Life jacket, helmet & paddle", "Safety kayak support", "Changing room access"],
    package: ["All listed activities", "Accommodation as per plan", "Meals as specified", "On-ground coordination"],
    rental: ["Fully serviced vehicle", "Helmet(s)", "Basic insurance & papers", "24×7 roadside support"],
    "bike-tour": ["Lead captain & backup vehicle", "Fuel & tolls", "Stays on twin-sharing", "Permits where applicable"],
    yatra: ["AC vehicle & driver", "Verified accommodation", "Toll, parking & driver allowance", "Darshan route guidance"],
    haridwar: ["AC cab & driver", "All tolls & parking", "Aarti timing guidance", "Flexible pickup"],
    nearby: ["AC cab & driver", "All tolls & parking", "Sightseeing as per plan", "Flexible itinerary"],
    guide: [],
  };
  return map[i.category] ?? [];
}

export function excludes(i: Item): string[] {
  if (i.category === "guide") return [];
  return ["Personal expenses & tips", "Anything not mentioned in inclusions", "GST where applicable", "Photos/videos unless specified"];
}

export function carry(i: Item): string[] {
  const map: Record<string, string[]> = {
    activity: ["Comfortable clothes & a change", "Sports shoes / sandals", "Sunscreen & a cap", "Valid ID proof"],
    "rafting-stretch": ["Quick-dry clothes & towel", "Sandals with a strap", "Sunscreen", "A change of clothes"],
    rental: ["Original driving licence", "Govt ID for deposit", "Riding gloves (optional)"],
    "bike-tour": ["Valid licence & ID", "Warm layers & rain gear", "Riding gloves & boots", "Personal medication"],
  };
  return map[i.category] ?? ["Valid ID proof", "Comfortable clothing", "Water & sunscreen"];
}

const PHONE = "+91 76685 70551";
const inr = (n: number) => `₹${Math.round(n).toLocaleString("en-IN")}`;

export function faqs(i: Item): { q: string; a: string }[] {
  const name = i.title.replace(" in Rishikesh", "").replace(" from Rishikesh", "");
  const price = i.priceFrom
    ? `${inr(i.priceFrom)} ${i.unit ?? ""}`.trim()
    : "shared instantly on WhatsApp";
  const metaVal = (label: string) =>
    i.meta?.find((m) => m.label.toLowerCase().includes(label))?.value;
  const age = metaVal("age");
  const weight = metaVal("weight");
  const height = metaVal("height");
  const distance = metaVal("distance");
  const season = metaVal("season");

  // Core questions every page gets
  const core = [
    { q: `What is the price of ${name} in Rishikesh?`, a: `${name} starts from ${price}. Final pricing depends on the date, group size and any add-ons — see the price table above or message us on WhatsApp for a live quote.` },
    { q: `How do I book ${name} with Triveni?`, a: `Tap any "Book" button to chat on WhatsApp, use the enquiry form, or call ${PHONE}. We confirm your slot instantly — no app or advance payment required.` },
    { q: `Is ${name} safe?`, a: `Yes. We work only with government-licensed operators using certified guides and regularly inspected safety equipment. A full safety briefing is included before you begin.` },
    { q: `What is the best time of year for ${name}?`, a: season ? `The ideal season is ${season}. Rishikesh is enjoyable almost year-round — tell us your dates and we'll advise on conditions.` : `September to June is ideal for most Rishikesh adventures. Share your dates and we'll confirm the best window.` },
    { q: `How long does ${name} take?`, a: i.duration ? `Plan for approximately ${i.duration}, excluding travel to the start point. We'll share exact reporting times on confirmation.` : `Durations vary by option chosen — we'll confirm the schedule when you book.` },
    { q: `Can you arrange a cab from Delhi or Dehradun?`, a: `Absolutely — that's our origin. Triveni Cabs can bundle a Delhi–Rishikesh or Dehradun-airport transfer with your booking at a combined rate.` },
    { q: `Do I need to pay in advance?`, a: `No advance payment is needed to confirm most bookings — pay on arrival. For some peak-date slots a small token may apply, which we'll always tell you upfront.` },
  ];

  // Meta-derived questions (only when data exists)
  const metaQs: { q: string; a: string }[] = [];
  if (age) metaQs.push({ q: `What is the minimum age for ${name}?`, a: `The minimum age is ${age}. Participants under 18 need a parent or guardian's consent.` });
  if (weight) metaQs.push({ q: `Is there a weight limit?`, a: `Yes — the limit is ${weight}. This is a safety requirement set by the equipment manufacturer.` });
  if (height) metaQs.push({ q: `How high is ${name}?`, a: `${name} reaches ${height}. Don't worry — every participant is fully harnessed and briefed before the leap.` });
  if (distance) metaQs.push({ q: `How long is the ${distance} stretch?`, a: `This run covers ${distance} on the Ganga, including its rapids, calm pools and a chance to swim or cliff-jump where safe.` });

  // Category-specific questions
  const byCat: Record<string, { q: string; a: string }[]> = {
    activity: [
      { q: `Do I need any prior experience?`, a: `No experience needed — ${name} is beginner-friendly and led by trained instructors who guide you through every step.` },
      { q: `What should I wear and carry?`, a: `Wear comfortable clothes you don't mind getting wet/dusty, sports shoes or strapped sandals, and bring sunscreen and a valid ID. See "What to carry" above.` },
      { q: `Can non-swimmers participate?`, a: `For most activities, yes — life jackets and guides keep you safe. For water activities, just tell your guide; they'll position you accordingly.` },
      { q: `Are photos and videos available?`, a: `Yes, GoPro/action-cam photos and videos are available as a small add-on for most activities — ask while booking.` },
    ],
    "rafting-stretch": [
      { q: `Can beginners do this rafting stretch?`, a: distance ? `Yes — the ${distance} run is suited to its grade, and a certified guide steers every raft with safety-kayak support nearby.` : `Yes — certified guides steer every raft with safety-kayak support nearby.` },
      { q: `What happens if I fall out of the raft?`, a: `It's rare and rehearsed — you'll be wearing a life jacket and helmet, and guides are trained to pull you back in within seconds. You'll practice the drill before launch.` },
      { q: `Is there a changing room and locker?`, a: `Yes, changing rooms are available at the base. Carry a dry change of clothes and a towel; lockers/secure storage can be arranged.` },
      { q: `Does rafting run during monsoon?`, a: `Rafting typically pauses at peak monsoon (roughly July–August) when water levels are unsafe, then reopens. We'll confirm availability for your dates.` },
    ],
    package: [
      { q: `What's included in this package?`, a: `The listed activities, accommodation and meals as specified, plus on-ground coordination. Exact inclusions are confirmed in writing before you pay.` },
      { q: `What kind of accommodation is provided?`, a: `Most packages use riverside Swiss-tent camps or comfortable cottages on twin/triple sharing. Upgrades are available on request.` },
      { q: `Can the package be customised?`, a: `Yes — we tailor activities, duration and stay for couples, families, college groups and corporates. Tell us your group size and budget.` },
      { q: `Are group discounts available?`, a: `Yes, per-person rates drop for larger groups. Share your headcount on WhatsApp for the best price.` },
    ],
    rental: [
      { q: `What documents do I need to rent?`, a: `A valid driving licence and a government photo ID for the security deposit. The licence must permit the vehicle category you're renting.` },
      { q: `Is a security deposit required?`, a: `Yes, a refundable deposit (typically ₹2,000–₹5,000 depending on the model) is collected at pickup and returned when you return the vehicle undamaged.` },
      { q: `Is fuel included?`, a: `Vehicles are provided with minimal fuel; you refuel as you ride and return it with a similar level. Fuel is not included in the rental price.` },
      { q: `Can I take the vehicle to the mountains (Chopta, Kedarnath, etc.)?`, a: `Yes — our Himalayan and Classic models are cleared for hill routes. Tell us your itinerary so we hand over the right bike and paperwork.` },
      { q: `Are helmets provided?`, a: `Yes, ISI-marked helmets are included for the rider and pillion at no extra cost.` },
    ],
    "bike-tour": [
      { q: `Is this guided bike tour suitable for beginners?`, a: `It suits confident riders comfortable on hill roads. A lead captain and backup vehicle accompany the group, and we match the route to your experience.` },
      { q: `What's included in the tour price?`, a: `Lead captain and backup support, fuel, stays on twin-sharing, and permits where applicable. Bike rental can be bundled if you don't have your own.` },
      { q: `What should I pack for a Himalayan ride?`, a: `Warm layers, rain gear, riding gloves and boots, personal medication and your licence/ID. We'll send a full packing list on booking.` },
      { q: `What if there's a breakdown?`, a: `The backup vehicle carries spares and tools, and our captain handles roadside fixes. Major issues are covered by swap/support arrangements.` },
    ],
    yatra: [
      { q: `Do you handle registration and permits for the yatra?`, a: `Yes — we assist with the mandatory Char Dham registration and any permits, and our drivers know the darshan routes and timings.` },
      { q: `Is a helicopter option available?`, a: `Helicopter packages (e.g. for Kedarnath) can be arranged subject to availability and weather. Ask us for current slots and pricing.` },
      { q: `How physically demanding is the yatra?`, a: `It involves high altitude and some trekking (notably Kedarnath and Yamunotri). Ponies and palanquins are available; tell us about any health concerns.` },
      { q: `What are the best months for the yatra?`, a: `The dhams are open roughly late April/May to October/November (around Akshaya Tritiya to Diwali). May–June and September are the most comfortable.` },
    ],
    haridwar: [
      { q: `What time is the Ganga Aarti at Har Ki Pauri?`, a: `The evening aarti is held around sunset (approximately 6–7 pm, seasonal). We time your trip so you're seated with a good view.` },
      { q: `What type of cab is provided?`, a: `Clean, AC sedans and SUVs with experienced local drivers — the same standard as our core Triveni Cabs fleet.` },
      { q: `Can this be combined with Rishikesh sightseeing?`, a: `Yes — our Rishikesh + Haridwar combo covers both holy cities in one seamless itinerary.` },
    ],
    nearby: [
      { q: `Is this a day trip or overnight?`, a: i.duration ? `It works as a ${i.duration} trip; we tailor the pace to your schedule.` : `It can be done as a day trip or overnight — we'll plan it around your schedule.` },
      { q: `What type of vehicle is used?`, a: `Comfortable AC sedans and SUVs with drivers experienced on hill roads.` },
      { q: `Can I combine this with my Rishikesh adventure?`, a: `Definitely — it's a popular add-on. We'll bundle it with your activities or yatra in one booking.` },
    ],
    guide: [
      { q: `Is this information up to date?`, a: `Yes — our Rishikesh team keeps these guides current. For live availability and prices, message us on WhatsApp.` },
      { q: `Can Triveni plan my whole trip?`, a: `Absolutely. From the Delhi cab to activities, stays and yatra, we can arrange everything end-to-end under one brand.` },
    ],
  };

  // Universal closers
  const closers = [
    { q: `What is your cancellation policy?`, a: `Cancellations with reasonable notice are generally free or low-fee; weather/safety cancellations by the operator are fully refundable or rescheduled. See our Cancellation & Refund Policy.` },
  ];

  const all = [...core, ...metaQs, ...(byCat[i.category] ?? []), ...closers];
  // 8–14 questions
  return all.slice(0, 14);
}

export interface PriceRow {
  label: string;
  note?: string;
  price: string;
}

export function priceTable(i: Item): { caption: string; rows: PriceRow[] } | null {
  if (!i.priceFrom || i.category === "guide") return null;
  const p = i.priceFrom;
  const c = i.category;

  if (c === "rental") {
    return {
      caption: "Indicative self-drive rates (excl. fuel)",
      rows: [
        { label: "Per hour", note: "min. 2 hrs", price: inr(Math.max(150, p / 8)) },
        { label: "Per day", note: "24 hours", price: inr(p) },
        { label: "Weekly", note: "per day, 7+ days", price: `${inr(p * 0.8)} / day` },
        { label: "Security deposit", note: "refundable", price: "₹2,000–₹5,000" },
      ],
    };
  }
  if (c === "package") {
    return {
      caption: "Per-person price by group size",
      rows: [
        { label: "Couple", note: "2 pax, twin sharing", price: inr(p * 1.1) },
        { label: "Small group", note: "4–6 pax", price: inr(p) },
        { label: "Large group", note: "10+ pax", price: inr(p * 0.85) },
        { label: "Custom / private", note: "your itinerary", price: "On request" },
      ],
    };
  }
  if (c === "yatra" || c === "bike-tour" || c === "nearby" || c === "haridwar") {
    return {
      caption: "Indicative pricing",
      rows: [
        { label: i.unit?.includes("rider") ? "Per rider (group)" : "Per person (group)", price: inr(p) },
        { label: "Private / family", note: "per vehicle", price: "On request" },
        { label: "Custom dates", note: "flexible", price: "On request" },
      ],
    };
  }
  // activities & rafting stretches
  return {
    caption: "Per-person price",
    rows: [
      { label: "Per person", price: inr(p) },
      { label: "Group of 5+", note: "per person", price: inr(p * 0.9) },
      { label: "Student / college group", note: "per person", price: inr(p * 0.85) },
      { label: "Private / custom slot", price: "On request" },
    ],
  };
}
