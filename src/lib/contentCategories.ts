import type { Category } from "./data";
import type { ImgKey } from "./images";

/* =====================================================================
 * Category-level writing — October 2026
 *
 * WHY THIS FILE EXISTS
 * --------------------
 * `categoryMeta` in data.ts carried a label and a one-line blurb per
 * category — "Rafting, bungee, zipline & more", "Save more, do more".
 * That is enough to label a card and nothing more. It tells a reader
 * who has just decided they want "adventure sports" absolutely nothing
 * about which of the twenty-six to pick, and the only page that tried
 * to help was the rafting hub, which does it for its own four stretches.
 *
 * So each of the nine categories now has the same shape of content an
 * item has — `body`, `sections`, `ownFaqs`, `notFor` — written to do one
 * job: get a reader from "I want this kind of thing" to "I want that
 * specific one". The sections that do the real work are the ones headed
 * "choosing", and they choose on the reader's terms: how many days they
 * have, who is coming, how far they are willing to drive.
 *
 * WHAT IS IN HERE AND WHAT IS NOT
 * -------------------------------
 * Same rule as contentWave3.ts, and for the same reason. Everything
 * below comes from one of three sources:
 *
 *   1. The listings' own data — the prices, units, durations, distances,
 *      drive times, grades and age limits already in data.ts,
 *      dataWave2.ts and dataWave2Nearby.ts. Every figure printed here is
 *      a figure a reader can check against the card beside it.
 *   2. Facts already established elsewhere in this repository: Delhi to
 *      Rishikesh is 240 km and five to six hours, Haridwar is about
 *      25 km, Jolly Grant is the nearest airport, Shivpuri is 30 to 45
 *      minutes up the gorge road, rafting's minimum age is 14 on every
 *      stretch, bungee is 83 m with a 110 kg maximum and a minimum age
 *      of 12, and the monsoon rafting suspension is administrative and
 *      follows the water level rather than the calendar.
 *   3. Geography anybody standing in Rishikesh can check — which bank
 *      Laxman Jhula crosses, that the activity sites lie in three
 *      different directions, that Haridwar is downstream.
 *
 * Deliberately absent: operator names, certification claims, participant
 * counts, review quotes, instructor names, and any limit or price not
 * already on a listing. Char Dham shrine opening dates are announced
 * annually and are not printed anywhere here — the yatra category says
 * so explicitly rather than staying silent about it.
 *
 * `notFor` is used the same way it is on item pages: every category that
 * can sensibly turn a reader away does so. A category index that admits
 * who should be looking at a different one is more useful than a menu.
 * ===================================================================== */

export interface CategoryContent {
  /** One sentence, shown under the heading on listings and cards. */
  lede: string;
  /** Lead paragraphs for the category index, in order. */
  body: string[];
  sections: { heading: string; paragraphs: string[] }[];
  ownFaqs: { q: string; a: string }[];
  /** Who should honestly be looking somewhere else. */
  notFor: string;
}

export const categoryContent: Record<Category, CategoryContent> = {
  /* ================================================================
   * ACTIVITY (26)
   * ================================================================ */
  activity: {
    lede:
      "Twenty-six activities on and around the Ganga, from a ₹300 zorbing ride to a ₹5,500 sunrise balloon flight.",
    body: [
      "Twenty-six activities sit under this one heading and they are not variations on each other. Six are on the water. Five are rope-and-harness work on rock or a wall. Four are cable rides across the gorge. Four are jumps. Two are a track and an arena, two are trails, two are nights under canvas, and one is a balloon. The price range tells you how far apart they are: ₹300 for fifteen minutes of water zorbing at one end, ₹5,500 for a sunrise flight at the other.",
      "The thing most people get wrong is assuming all of it is in Rishikesh. It is not. The town has the ghats, the bridges and the ashram road; almost everything on this list is a drive out of it. The rafting put-ins are upstream — Shivpuri alone is 30 to 45 minutes up the gorge road — the jump platform is in a different direction, and the waterfalls are in a third. Two activities in a day is comfortable. Four is a day spent in a car.",
      "Everything on the river stops for the monsoon. The suspension is administrative rather than an operator's weather call, it usually runs from around the end of June until the water drops in September, and it follows the water level rather than the calendar. While it is in force the rafting, the cliff jump and the body surf are all off; the climbing, the cable rides, the track and the camping keep running.",
    ],
    sections: [
      {
        heading: "Where to start if it is your first time",
        paragraphs: [
          "Rafting, and the 16 km stretch specifically. It is ₹1,000, two to three hours, Grade II–III, and it is what people mean when they say they rafted in Rishikesh. The one thing that rules it out is age: the minimum is 14 on every stretch.",
          "If your dates fall inside the closure, or somebody in the group is under 14, the rope course at ₹500 and wall climbing at ₹400 take almost anybody, and the zipline at ₹1,799 gives you the gorge without asking anything of you physically.",
        ],
      },
      {
        heading: "The jumps, honestly",
        paragraphs: [
          "Bungee is 83 metres from a cantilever platform at ₹3,700, with a maximum weight of 110 kg and a minimum age of 12. A meaningful number of people who pay do not jump, and the fee is not refunded if you walk back from the edge.",
          "The giant swing at ₹3,500 is a similar height and a similar arc, and you are seated rather than standing on a lip, which is why far fewer people balk at it. The SCAD jump at ₹2,500 is a rope-free fall into a net. The reverse bungee at ₹1,000 lasts about thirty seconds and is the cheapest way to find out how you react to any of this.",
        ],
      },
      {
        heading: "What a day actually holds",
        paragraphs: [
          "One big activity and one small one is a realistic morning and afternoon. Rafting plus a cable ride works because the sites are near each other. Rafting plus bungee means two drives in opposite directions and is better split across two days.",
          "Camping at ₹999 a night is the cheapest way to buy yourself a second morning, which is why most people book it alongside something else rather than on its own.",
        ],
      },
    ],
    ownFaqs: [
      {
        q: "Which Rishikesh activity should I book if I only do one?",
        a: "The 16 km rafting stretch, at ₹1,000 per person. It runs two to three hours, it holds the named rapids, and the cliff jump and body surf come with it where the water allows. The only thing that rules it out is age — the minimum is 14 on every stretch.",
      },
      {
        q: "How many activities can I fit into one day?",
        a: "Two comfortably, if they are near each other. The sites are genuinely spread out — the rafting put-ins upstream, the jump platform in another direction, the waterfalls in a third — so four activities in a day is mostly a day spent in a car.",
      },
      {
        q: "Which activities are closed during the monsoon?",
        a: "Everything on the river: rafting, cliff jumping and body surfing. The suspension is administrative rather than a weather call, it usually runs from around late June until the water drops in September, and it follows the water level rather than a date. Climbing, the cable rides, the track activities and camping all keep running.",
      },
      {
        q: "What is the cheapest activity in Rishikesh?",
        a: "Water zorbing at ₹300 for a fifteen-minute ride, then paintball and wall climbing at ₹400. At the other end of the list the hot air balloon is ₹5,500 per person, and the bungee ₹3,700 per jump.",
      },
    ],
    notFor:
      "If you want everything within walking distance of your hotel, this is the wrong list — almost every activity here is a drive out of town.",
  },

  /* ================================================================
   * RAFTING STRETCH (4)
   * ================================================================ */
  "rafting-stretch": {
    lede: "One river in four lengths — 9, 16, 26 and 36 km, from ₹600 to ₹2,000.",
    body: [
      "Rafting at Rishikesh is one river run in four lengths. Every stretch takes out at Nim Beach; the only real decision is how far upstream you put in, and that decision sets the grade, the price and most of your day.",
      "Nine kilometres from Brahmapuri is ₹600 and about an hour, Grade I–II and genuinely gentle. Sixteen from Shivpuri is ₹1,000 and two to three hours — the one most people mean, Grade II–III, with Roller Coaster and Golf Course in the middle of it. Twenty-six from Marine Drive is ₹1,500 and three to four hours. Thirty-six from Kaudiyala is ₹2,000 and a full day, and it is the only commercial stretch that touches Grade IV.",
      "Minimum age is 14 on all four, with no exception for the easy one. The monsoon suspension applies to all four as well: administrative rather than a weather call, usually from around the end of June until the river drops in September, and while it is in force nobody is rafting at any price.",
    ],
    sections: [
      {
        heading: "Choosing between them honestly",
        paragraphs: [
          "First time, or with nervous adults: the 9 km. Three or four small rapids, an hour on the water, and nobody finishes it wishing they had done less.",
          "The trip people describe afterwards: the 16 km. The named rapids are in it, the cliff jump and the body-surfing stop come with it where the water allows, and three hours is about as long as a first-timer enjoys being wet.",
          "The 26 and 36 km runs are for people who have rafted before and want water rather than scenery. The 36 in particular is a full day with an early start and a long drive upstream before you even see the raft — booking it as a first rafting trip is the most common mistake made on this river.",
        ],
      },
      {
        heading: "What the extra money buys",
        paragraphs: [
          "Mileage and time on the water, not a different quality of trip. ₹2,000 against ₹600 buys you twenty-seven more kilometres and the better part of a day.",
          "The drive is the hidden cost. Shivpuri is 30 to 45 minutes up the gorge road and Kaudiyala is further still, so the longer stretches start earlier in the morning than people expect them to.",
        ],
      },
    ],
    ownFaqs: [
      {
        q: "Which rafting stretch is best for a first-timer?",
        a: "The 16 km from Shivpuri, at ₹1,000. It is Grade II–III over two to three hours, it holds the rapids people have heard of, and it is long enough to feel like a trip without being long enough to stop being fun. Take the 9 km at ₹600 instead if anyone in the group is nervous.",
      },
      {
        q: "What is the minimum age for rafting in Rishikesh?",
        a: "Fourteen, on all four stretches including the 9 km. It is the single most common reason a family booking falls through, so it is worth settling before anything else.",
      },
      {
        q: "Is the 36 km stretch worth ₹2,000?",
        a: "If you have rafted before and want sustained Grade III–IV water, yes. If this is your first time, no — it is a full day with an early start and a long drive upstream, and it is not the trip to learn on.",
      },
      {
        q: "Do all four stretches close in the monsoon?",
        a: "Yes. The suspension is administrative and applies to the whole river rather than stretch by stretch, it usually runs from around late June into September, and it lifts when the water level drops rather than on a fixed date.",
      },
    ],
    notFor:
      "If anyone in your group is under 14, none of these four work — the minimum age is the same on all of them, and the 9 km is no exception.",
  },

  /* ================================================================
   * PACKAGE (12)
   * ================================================================ */
  package: {
    lede: "Twelve bundles, from a ₹1,299 college group rate to a ₹6,999 kayaking course.",
    body: [
      "A package here is the same activities bought together with a bed and meals, at one price. There are twelve, from ₹1,299 per person for a college group up to ₹6,999 for a two-to-four-day kayaking course with camping included.",
      "They exist partly because the arithmetic works. Rafting at ₹1,000 and camping at ₹999 bought separately come to just under ₹2,000; the rafting and camping package is ₹1,599. But the saving is not the main reason to book one. The main reason is that somebody else has sequenced the day, so the rafting slot and the camp check-in do not collide.",
      "What a package does not include, with one exception, is getting to Rishikesh. The exception is the Delhi to Rishikesh adventure tour at ₹3,999, which bundles the round-trip cab with the package — the only listing on this site where the transport is the product rather than the thing you arrange separately.",
    ],
    sections: [
      {
        heading: "Choosing by who is coming",
        paragraphs: [
          "Two or three friends with one weekend: the ₹2,199 zipline, rafting and camping package, or the ₹1,599 rafting and camping if the budget is tight.",
          "A family: the ₹1,999 family package, which is built around what children can actually do. That matters more here than it sounds, because rafting has a minimum age of 14 and bungee a minimum of 12 — a family package is partly a way of not booking something half the group will be turned away from.",
          "A college group: ₹1,299 per person, which assumes numbers. A corporate team: ₹2,499, which assumes an invoice and a rope course rather than a bonfire, and is quoted for groups from ten upwards.",
        ],
      },
      {
        heading: "Choosing by how long you have",
        paragraphs: [
          "One night and two days at ₹1,799 is the standard weekend. Two nights and three days at ₹3,499 is the one that stops feeling rushed, because five to six hours each way from Delhi eats most of two half-days whatever you book.",
          "The ₹4,999 bungee, rafting and camping combo is the expensive one, and the jump is most of the price — ₹3,700 of it if you bought the jump on its own. The ₹6,999 kayaking course is the longest at two to four days and the only package that teaches you something rather than showing you something.",
        ],
      },
    ],
    ownFaqs: [
      {
        q: "Do Rishikesh packages include transport from Delhi?",
        a: "No, with one exception. The Delhi to Rishikesh adventure tour at ₹3,999 bundles the round-trip cab with the package. Every other package covers the activities, the stay and the meals, and the journey is booked separately.",
      },
      {
        q: "Is a package cheaper than booking the activities separately?",
        a: "Usually, but modestly — rafting and camping separately come to just under ₹2,000 against ₹1,599 as a package. The bigger gain is that the sequencing is done for you, so the activity slot and the check-in time fit together.",
      },
      {
        q: "Which package suits a family with children?",
        a: "The ₹1,999 family package, which is built around activities children can actually join. Check the ages first: rafting has a hard minimum of 14 on every stretch and bungee a minimum of 12, so a younger child changes which package makes sense.",
      },
      {
        q: "What is the cheapest package?",
        a: "The college group rate at ₹1,299 per person, but it assumes a group — it is a volume price rather than an individual one. For two or three people the ₹1,599 rafting and camping package is the cheapest realistic option.",
      },
    ],
    notFor:
      "If you would rather decide each morning what you feel like doing, book the activities separately — fixing the sequence is the whole point of a package.",
  },

  /* ================================================================
   * RENTAL (9)
   * ================================================================ */
  rental: {
    lede: "Self-drive from ₹400 a day for a scooter to ₹1,600 for a KTM Duke 390.",
    body: [
      "Nine listings: two hubs, five specific machines, a price page and a quad-bike track. A scooter is ₹400 a day, a Royal Enfield Classic 350 is ₹1,000, a Himalayan ₹1,400 and a KTM Duke 390 ₹1,600. The ATV at ₹500 a ride is not a rental in the same sense at all — it is a track activity that happens to have an engine.",
      "The decision is almost entirely about where you are going. A scooter at ₹400 covers town — the ashram road, Laxman Jhula, Tapovan, the ghats — and for that job nothing else on this list is better value. The moment you want Chopta or Kedarnath you want a geared motorcycle, and the Himalayan is the one built for it.",
      "What a rental cannot do is carry luggage or meet a flight. Jolly Grant is the nearest airport and a scooter is no use with bags, which is why plenty of people who rent here still take a cab in and ride once they have arrived.",
    ],
    sections: [
      {
        heading: "Choosing the machine",
        paragraphs: [
          "Town, the ghats and the two bridges: a scooter at ₹400. The Activa and the Jupiter are the same price, and the Jupiter has the bigger storage — for a day-bag that is the only thing between them.",
          "Easy hill rides, and the thump: the Royal Enfield Classic 350 at ₹1,000. Serious hills — Chopta, Kedarnath, Spiti: the Himalayan at ₹1,400, which is the purpose-built one and the machine the bike tours on this site are designed around. Twisties for their own sake: the Duke 390 at ₹1,600.",
        ],
      },
      {
        heading: "What people get wrong",
        paragraphs: [
          "Taking a scooter up the gorge road. It will do it, and it is unpleasant — the Shivpuri side is a proper hill climb rather than a ride along the river, and a 110 cc scooter two-up feels every metre of it.",
          "Not reading the paperwork line. Self-drive means your licence, your deposit and your responsibility for the machine, which is a materially different arrangement from a cab where none of those are yours. It is worth knowing which one you have booked.",
        ],
      },
    ],
    ownFaqs: [
      {
        q: "Scooter or motorcycle for Rishikesh?",
        a: "A scooter at ₹400 a day if you are staying in and around town — the ashram road, Laxman Jhula, Tapovan and the ghats. A geared motorcycle from ₹1,000 if you are going up into the hills, where a scooter is slow, tiring and no fun two-up.",
      },
      {
        q: "Which rental bike is right for Chopta, Kedarnath or Spiti?",
        a: "The Royal Enfield Himalayan at ₹1,400 a day. It is the adventure machine on this list and the one the guided bike tours are built around. The Classic 350 at ₹1,000 will manage easier hill roads; the Duke 390 is a road bike rather than a long-haul one.",
      },
      {
        q: "Is renting cheaper than hiring a cab?",
        a: "For town, comfortably — ₹400 for a scooter against a local cab fare for the same running. For a day of spread-out activity sites with luggage or in the rain, less obviously, and that is the comparison worth making rather than assuming.",
      },
      {
        q: "What do I need to rent a bike here?",
        a: "A valid licence and a deposit, and you take responsibility for the machine for the duration. Those are the terms that distinguish a self-drive rental from a cab, so confirm them at the counter rather than afterwards.",
      },
    ],
    notFor:
      "If you are arriving with luggage, or want to be driven home after a day on the river, a rental is the wrong product for those days — take a cab for them and rent for the rest.",
  },

  /* ================================================================
   * BIKE TOUR (6)
   * ================================================================ */
  "bike-tour": {
    lede: "Six guided rides out of Rishikesh — two to ten days, ₹5,999 to ₹22,999 per rider.",
    body: [
      "Six routes, all starting in Rishikesh, all guided, all priced per rider. Two to three days for Chopta–Tungnath at ₹5,999 and Auli at ₹6,499. Three to four for Kedarnath at ₹7,999 and Badrinath at ₹8,499. Four to five for Kheerganga at ₹8,999. Eight to ten for Spiti at ₹22,999.",
      "Price and day count move together, which makes the choice simpler than it looks: you are mostly deciding how many days you have. The exception is Spiti, which costs nearly three times the next most expensive trip because it is a different kind of journey — high-altitude desert, Himachal rather than Uttarakhand, and passes that decide for themselves when the season starts.",
      "Five of the six stay in Garhwal and follow roads that Triveni Cabs runs as vehicle journeys too, which is where a support car comes from if the group wants one. Kheerganga is the odd one out: it is in the Parvati valley in Himachal, and it ends with a trek up from the road head rather than at the road head.",
    ],
    sections: [
      {
        heading: "Choosing by the days you have",
        paragraphs: [
          "A long weekend: Chopta–Tungnath at ₹5,999 over two to three days, or Auli at ₹6,499. Both are ridge-and-meadow rides with a short walk at the end, and both are close enough to Rishikesh that the riding days are not punishing.",
          "A week: Kedarnath at ₹7,999 or Badrinath at ₹8,499, three to four days each, or Kheerganga at ₹8,999 over four to five. Badrinath is the one you can ride the whole way to; Kedarnath ends at the trek base and the shrine is a walk, a pony or a helicopter beyond that.",
          "More than a week, and some experience: Spiti at ₹22,999 over eight to ten days. It is the only trip on this list that is an expedition rather than a tour, and it is not the one to make your first loaded hill ride.",
        ],
      },
      {
        heading: "Choosing by what you want from it",
        paragraphs: [
          "If the riding is the point, Spiti first and Kheerganga second — both are long days on roads that are the reason you came. If where you end up is the point, Kedarnath and Badrinath: these are pilgrimage roads and they feel like it, with the traffic and the crowds that go with that. If the view is the point, Auli for the Nanda Devi side and Chopta for the meadows.",
          "Two of the six double as yatra routes, and the Char Dham by bike trip at ₹24,999 over ten to twelve days is the full version of that idea. If a dham is the actual reason you want to ride, start on the yatra listings instead of here.",
        ],
      },
      {
        heading: "What decides whether the trip happens",
        paragraphs: [
          "Weather, mostly. The monsoon is landslide season on every one of these roads, and a closure mid-route is a real outcome rather than a theoretical one — which is the practical argument for having a vehicle behind the group rather than just a guide in front of it.",
          "Spiti adds paperwork to that: an Inner Line Permit is required for the Kinnaur side, and the high passes open and close on their own schedule rather than a published one. Neither is something a tour can promise around, and an operator who does is overselling.",
        ],
      },
    ],
    ownFaqs: [
      {
        q: "Which bike tour from Rishikesh is best for a first guided ride?",
        a: "Chopta–Tungnath at ₹5,999 over two to three days. It is the shortest and cheapest of the six, the riding days are manageable, and it still ends somewhere worth the trip. Auli at ₹6,499 is the same length and a comparable choice.",
      },
      {
        q: "Why is the Spiti trip so much more expensive than the others?",
        a: "₹22,999 against ₹8,999 for the next most expensive, because it is eight to ten days rather than four to five, it crosses into Himachal, it runs at high altitude over open passes, and it needs an Inner Line Permit for the Kinnaur side. It is a different category of trip rather than a longer version of the same one.",
      },
      {
        q: "Do I need to bring my own motorcycle?",
        a: "The tours are priced per rider. If you are not bringing a machine, the rental listings on this site cover it — the Royal Enfield Himalayan at ₹1,400 a day is the one these routes are built around. Say which you need when you book, because it changes the quote.",
      },
      {
        q: "What happens if the road closes mid-route?",
        a: "It is a real possibility on all six routes and the likeliest cause is monsoon landslip. The answer is the support vehicle and a rerouted or shortened itinerary, not a guarantee — anyone promising you an unbroken route through the monsoon on these roads is promising something they do not control.",
      },
    ],
    notFor:
      "If you have never ridden a loaded motorcycle on a hill road, start with Chopta or Auli rather than Spiti — eight to ten days at altitude is not where you want to find out how that feels.",
  },

  /* ================================================================
   * YATRA (7)
   * ================================================================ */
  yatra: {
    lede: "The four dhams together or one at a time — 2 to 12 days, ₹6,999 to ₹24,999.",
    body: [
      "Seven listings covering the same geography at different lengths. The full Char Dham circuit is ₹18,999 over ten to eleven days. Do Dham — Kedarnath and Badrinath — is ₹11,999 over six to seven. Each dham on its own runs from ₹6,999 for Gangotri or Yamunotri to ₹7,999 for Kedarnath over three to four days. The circuit by motorcycle is ₹24,999 over ten to twelve days.",
      "The order on the ground is Yamunotri, Gangotri, Kedarnath, Badrinath — west to east — and that is why the full circuit takes ten or eleven days rather than a week. It is one long road journey with four stops, not four separate trips, and shortening it means dropping a dham rather than driving faster.",
      "Two of the four ask you to walk. Kedarnath ends where the road ends and the shrine is a trek, a pony or a helicopter from there. Yamunotri's road ends at Janki Chatti and the shrine is a walk up from it. Gangotri and Badrinath are reachable by vehicle.",
    ],
    sections: [
      {
        heading: "Choosing how much of it to do",
        paragraphs: [
          "If this is the pilgrimage you have been planning for years, the full circuit at ₹18,999. Ten or eleven days is what the road actually takes.",
          "If you have a week, Do Dham at ₹11,999. Kedarnath and Badrinath are the two most people choose, they sit next to each other on the route, and the pairing is a standard itinerary rather than a compromise.",
          "If you have a long weekend, one dham. Gangotri and Yamunotri at ₹6,999 over two to three days are the shortest. Kedarnath at ₹7,999 needs three to four because of the trek at the end.",
        ],
      },
      {
        heading: "The practical things that decide the trip",
        paragraphs: [
          "Registration. Uttarakhand requires yatra registration and it is done before you travel, not arranged at the gate. It is the one piece of paperwork that can stop a trip that is otherwise ready.",
          "Dates. The shrines open and close seasonally and the dates are announced each year rather than being fixed, which is why no page on this site prints them. Confirm the current year's dates with the official source before you book flights, leave or anything else around them.",
          "Weather. The monsoon is landslide season on all four roads. A yatra booked inside it is a yatra that may be rerouted, and that is worth knowing when you choose your dates rather than when you are on the road.",
        ],
      },
      {
        heading: "By vehicle or by bike",
        paragraphs: [
          "Almost everybody does this by road vehicle, and the circuit pages on the main Triveni Cabs site cover the car and tempo traveller versions with the fares and the day counts.",
          "The bike version at ₹24,999 is a real option and a considerably harder one: ten to twelve days of hill riding, with exactly the same registration requirement and the same weather risk as the car. It is a riding trip that happens to end at shrines, and it suits people who want it to be.",
        ],
      },
    ],
    ownFaqs: [
      {
        q: "How long does the Char Dham yatra from Rishikesh take?",
        a: "Ten to eleven days for the full circuit at ₹18,999. The four shrines run west to east — Yamunotri, Gangotri, Kedarnath, Badrinath — and the day count is set by the roads between them rather than by the itinerary, so it cannot usefully be compressed.",
      },
      {
        q: "Which two dhams should I do if I only have a week?",
        a: "Kedarnath and Badrinath, as Do Dham at ₹11,999 over six to seven days. They are adjacent on the route, which is why the pairing exists as a standard itinerary rather than as a cut-down version of the full circuit.",
      },
      {
        q: "Do I need to register for the Char Dham yatra?",
        a: "Yes. Uttarakhand requires yatra registration and it is completed before you travel rather than on arrival. Treat it as the first step after fixing your dates, not the last.",
      },
      {
        q: "When do the Char Dham shrines open?",
        a: "The opening and closing dates are announced each year rather than being fixed, so we do not publish them anywhere on this site — a date printed here would be wrong sooner or later. Check the current year with the official Uttarakhand source before booking anything around them.",
      },
      {
        q: "Which dhams require a trek?",
        a: "Kedarnath and Yamunotri. Kedarnath's road ends below the shrine and the rest is a trek, a pony or a helicopter; Yamunotri's road ends at Janki Chatti and the shrine is a walk up from there. Gangotri and Badrinath can be reached by vehicle.",
      },
    ],
    notFor:
      "If you are hoping to fit all four dhams into under a week, this is not the page that will tell you it is possible — the road does not allow it, and an itinerary that claims otherwise is cutting something out.",
  },

  /* ================================================================
   * HARIDWAR (4)
   * ================================================================ */
  haridwar: {
    lede:
      "Four ways to do Haridwar from Rishikesh, 25 km away — from a ₹1,499 evening aarti run to a ₹2,999 two-town itinerary.",
    body: [
      "Haridwar is about 25 km from Rishikesh, which makes it the shortest trip anybody takes from here and the only one that works as an evening out. Four listings: the evening Ganga Aarti run at ₹1,499 per cab, a half or full-day tour at ₹1,999, both towns together at ₹2,999 over one to two days, and a guide to what is actually there.",
      "The prices are per cab rather than per person, which is unusual on this site and is the right unit for a trip this short — what you are buying is the vehicle and the driver's time, not a ticket. A group of four pays the same as a couple.",
      "The two towns are not interchangeable. Rishikesh is the river and the activities. Haridwar is Har Ki Pauri, the ghats, the temples, the markets and the aarti. People who turn up in Haridwar expecting rafting, or in Rishikesh expecting the aarti at Har Ki Pauri, are disappointed in both.",
    ],
    sections: [
      {
        heading: "Choosing between the four",
        paragraphs: [
          "The aarti alone, at ₹1,499: leave in the late afternoon, be at the ghats well before sunset, come back afterwards. It is the cheapest and the one with a real deadline, because the ghats fill long before the aarti begins.",
          "A fuller day at ₹1,999: temples, the ropeway, the markets and the ghats, with the aarti at the end if you time it right. This is the one to take if Haridwar is the point rather than an add-on to a rafting trip.",
          "Both towns at ₹2,999 over one to two days: worth it if the spiritual side matters to you as much as the adventure, and the vehicle stays with you for the whole of it rather than dropping you twice.",
        ],
      },
      {
        heading: "Timing, which matters more here than anywhere else",
        paragraphs: [
          "The aarti is at sunset and sunset moves through the year, so there is no fixed departure time — it is set backwards from the ghats filling up. The walk from wherever a vehicle can stop to where you want to stand is part of the trip and part of the timing.",
          "Festival periods change everything about this journey: the road, the parking and the crowd at the ghats. If your dates fall inside one, say so when booking rather than assuming the usual timings will hold.",
        ],
      },
    ],
    ownFaqs: [
      {
        q: "How far is Haridwar from Rishikesh?",
        a: "About 25 km, which makes it the shortest trip out of Rishikesh and the only one that works comfortably as a single evening.",
      },
      {
        q: "Can I see the Ganga Aarti and be back in Rishikesh the same night?",
        a: "Yes — that is exactly what the ₹1,499 aarti run is. You leave in the late afternoon, reach the ghats well before sunset because they fill early, and return afterwards.",
      },
      {
        q: "Is Haridwar worth a separate day?",
        a: "If the temples, the ghats and the markets are part of why you came to Uttarakhand, yes, and the ₹1,999 half or full-day tour is the right shape for it. If you are here for the river and have one spare evening, the aarti run alone is enough.",
      },
      {
        q: "Why are these priced per cab rather than per person?",
        a: "Because on a trip this short the cost is the vehicle and the driver's time rather than a per-head ticket. A group of four pays the same ₹1,499 for the aarti run as a couple does, which makes it the cheapest outing here for a full car.",
      },
    ],
    notFor:
      "If you are here for the rafting and have one spare evening, take the aarti run — a full Haridwar day at the cost of an activity day is not a trade most people are glad they made.",
  },

  /* ================================================================
   * NEARBY (14)
   * ================================================================ */
  nearby: {
    lede:
      "Fourteen trips out of Rishikesh — from a 45 km half-day to Dehradun to 250 km and three days to Auli.",
    body: [
      "Fourteen destinations, and the number that really orders them is the drive. Dehradun is about 45 km and an hour to an hour and a half. Devprayag is about 70 km. Kanatal is about 85, Tehri about 95. Rudraprayag and Lansdowne are both about 140, Chakrata about 160, Chopta about 165, Harsil about 220, and Auli about 250 — eight to nine hours of hill driving.",
      "That spread is the whole decision. Anything under about 100 km works as a day trip and you sleep in Rishikesh. Past that you are booking a night somewhere. Past about 160 km you are booking two, and the drive stops being a cost and becomes part of the holiday.",
      "They also split by what they are. Dehradun is a city. Mussoorie, Dhanaulti and Kanatal are hill stations on the same road out. Devprayag and Rudraprayag are confluences on the Char Dham road. Chopta and Auli are meadow and ski country. Nainital and Corbett are Kumaon, far enough east to be a different trip altogether. Harsil is apple country on the Gangotri road, Chakrata a cantonment that restricts who can visit, Lansdowne a quiet one, and Tehri a reservoir with the old town underneath it.",
    ],
    sections: [
      {
        heading: "If you have one day",
        paragraphs: [
          "Dehradun at about 45 km is the easiest of the fourteen — caves, springs, a monastery, and back in Rishikesh for dinner. Devprayag at about 70 km is the one worth doing for its own sake rather than on the way somewhere: it is the confluence where the Ganga starts being called the Ganga, and it is the closest genuinely worthwhile trip out of town.",
          "Tehri Lake at about 95 km is a day if you leave early, and the water sports are the reason to bother. Rudraprayag at about 140 km is a long day and better taken as an overnight.",
        ],
      },
      {
        heading: "If you have a weekend",
        paragraphs: [
          "Mussoorie or Dhanaulti at ₹3,499 per cab over one to two days. They are on the same road, Dhanaulti is further out and quieter, and most people choose between them rather than trying to do both.",
          "Kanatal at about 85 km is the third on that road — a ridge at 2,590 m, apple country and a short trek up to Surkanda Devi. Lansdowne at about 140 km is the quietest trip on this list, with no commercial noise at all, which is the entire reason to go.",
        ],
      },
      {
        heading: "If you have three days",
        paragraphs: [
          "Auli at about 250 km, Chopta at about 165, Harsil at about 220, or Nainital and Corbett at ₹6,999 and ₹7,999 per cab. On these the drive is a real part of the trip rather than a tax on it.",
          "Season decides Auli and Chopta more than distance does. Auli is India's best-known ski slope and its own listing is explicit that the season matters more than anything else about the trip; Chopta's meadows and the Tungnath trek above them are a different proposition in snow than in clear weather. Corbett is the other one where dates matter, for safari reasons rather than snow.",
        ],
      },
    ],
    ownFaqs: [
      {
        q: "What is the closest worthwhile trip from Rishikesh?",
        a: "Dehradun at about 45 km is the nearest and the easiest half-day. Devprayag at about 70 km and two to two and a half hours is the closest one most people are glad they made the journey for — it is the confluence where the Ganga begins.",
      },
      {
        q: "Which nearby trips work as a single day from Rishikesh?",
        a: "Roughly anything under 100 km: Dehradun at about 45, Devprayag at about 70, Kanatal at about 85 and Tehri Lake at about 95. Beyond that the driving starts eating the day, and Rudraprayag at about 140 km is the point where an overnight becomes the sensible choice.",
      },
      {
        q: "How far is Auli from Rishikesh?",
        a: "About 250 km, which is eight to nine hours of hill driving — the longest trip on this list and a three-day one. It is also the one where the time of year decides most of what you get.",
      },
      {
        q: "Which is the quietest trip from Rishikesh?",
        a: "Lansdowne, about 140 km out. It is a cantonment town with no commercial noise, and that is the whole of its appeal — if you want a mall road and cafes, it is the wrong choice and Mussoorie is the right one.",
      },
      {
        q: "Do I need to stay overnight on these trips?",
        a: "Under about 100 km, no — Dehradun, Devprayag, Kanatal and Tehri all work as days out of Rishikesh. Past that, yes, and past about 160 km you want two nights rather than one.",
      },
    ],
    notFor:
      "If you have one spare day inside a three-day Rishikesh trip, spending eight hours of it driving to Auli is a poor trade — keep the long ones for a trip where they are the point.",
  },

  /* ================================================================
   * GUIDE (25)
   * ================================================================ */
  guide: {
    lede:
      "Twenty-five guides to the questions people actually ask before booking — prices, seasons, age limits, and what goes wrong.",
    body: [
      "Twenty-five guides, and none of them is selling anything. They exist because the same questions arrive every week, and most of them have answers the asker was not hoping for: the river closes for the monsoon, rafting has a hard minimum age of 14, you cannot camp on the Ganga beaches any more, and a one-night trip from Delhi is mostly driving.",
      "They divide roughly four ways. Planning — when to come, how many days, how to reach Rishikesh, where to stay, what the whole thing costs. The river — rapid grades, the closure, non-swimmers, what to wear, what a first trip is actually made of, hour by hour. Limits and rules — bungee weight and age, how fit you need to be, what the town restricts, why the beach camping stopped. And who you are travelling with — children, a group of thirty, or nobody.",
      "If you read one before booking, read the booking-mistakes guide. It is the shortest route to not wasting money here, and it is ordered by what each mistake costs rather than by how often it happens.",
    ],
    sections: [
      {
        heading: "Start here if you have not booked anything",
        paragraphs: [
          "How many days do you need, then the month-by-month guide, then how to reach Rishikesh — in that order. The length of the trip decides the dates, the dates decide what is actually running, and only then does the journey matter.",
          "If your dates are already fixed and they fall between late June and September, read the closure guide first instead. It changes what you book rather than how you book it.",
        ],
      },
      {
        heading: "The guides that most often change a decision",
        paragraphs: [
          "The minimum age for rafting is 14 on every stretch, and the guide on Rishikesh with children is where that lands hardest. Bungee is a minimum age of 12 and a maximum of 110 kg, and the limits guide explains why neither number bends at the desk.",
          "The camping-rules guide answers the question people search for most and like least: the riverbank camping in the photographs is not on offer any more, and what replaced it is a property up the slope with the water in view.",
          "The price list is the only page on the site with every figure in one place, which makes it the fastest way to sanity-check a quote you have been given anywhere else.",
        ],
      },
      {
        heading: "The ones written for a specific trip",
        paragraphs: [
          "Travelling alone, travelling with thirty people, and travelling without a vehicle each have their own guide, because each of them changes the arithmetic rather than just the mood. Rafts get shared when you are solo; group bookings have to be made in waves; and without a vehicle the spread of the activity sites becomes the trip's defining problem.",
          "The two comparison guides — rafting or bungee first, and how fit you need to be — exist for people who have already decided to come and are now deciding what to do with the mornings they have.",
        ],
      },
    ],
    ownFaqs: [
      {
        q: "Which Rishikesh guide should I read first?",
        a: "How many days you need, then the month-by-month guide, then how to reach Rishikesh. If your dates are already fixed and fall between late June and September, read the rafting closure guide before any of them.",
      },
      {
        q: "Is there a guide to the monsoon rafting closure?",
        a: "Yes — it covers when the suspension usually starts, why it is administrative rather than an operator's weather call, and what is worth booking instead if your dates fall inside it. The short version is that it follows the water level rather than the calendar.",
      },
      {
        q: "Do these guides include prices?",
        a: "The price list guide carries every activity, package and rental figure in one place. The others quote prices where a price is part of the answer rather than listing them exhaustively.",
      },
      {
        q: "Are these guides only about Rishikesh?",
        a: "Almost entirely, with Haridwar covered where the two towns overlap — it is about 25 km away and most visitors consider both. The day trips and hill destinations have their own listings rather than being folded into the guides.",
      },
    ],
    notFor:
      "These are planning pages rather than booking pages. If you already know what you want, the activity and package listings will get you there faster.",
  },
};

/* ---------------------------------------------------------------------
 * Category index pages
 * ---------------------------------------------------------------------
 * Seven of the nine categories already have a page that does the index
 * job, because the hub item and the category are the same thing in
 * practice: /river-rafting-in-rishikesh compares its own four stretches,
 * /things-to-do-in-rishikesh is the activity index, and the same is true
 * of /rishikesh-adventure-packages, /bike-rental-in-rishikesh,
 * /char-dham-yatra-from-rishikesh, /haridwar-tour-from-rishikesh and
 * /rishikesh-travel-guide. Giving those categories a second URL would
 * put two pages of ours in front of the same reader for the same query.
 *
 * Three categories have no such page. The six bike tours, the fourteen
 * nearby destinations and the twenty-five guides are reachable only
 * through a homepage anchor or a related-items rail, and nothing on the
 * site lists them together or helps anybody choose between them. Those
 * three get an index page; the other six categories' writing above is
 * used for their listing ledes and is ready to render if a hub is ever
 * split from its category.
 *
 * Slugs were picked to avoid colliding with a page that already owns the
 * query — `rishikesh-travel-guide` (singular) is an existing item, hence
 * `rishikesh-trip-planning-guides` rather than the obvious plural.
 */
export const categoryIndexes: {
  category: Category;
  slug: string;
  title: string;
  keyword: string;
  image: ImgKey;
  emoji: string;
}[] = [
  {
    category: "bike-tour",
    slug: "himalayan-bike-tours-from-rishikesh",
    title: "Himalayan Bike Tours from Rishikesh",
    keyword: "himalayan bike tours from rishikesh",
    image: "enfield",
    emoji: "🏍️",
  },
  {
    category: "nearby",
    slug: "day-trips-from-rishikesh",
    title: "Day Trips and Getaways from Rishikesh",
    keyword: "day trips from rishikesh",
    image: "mussoorie",
    emoji: "🗺️",
  },
  {
    category: "guide",
    slug: "rishikesh-trip-planning-guides",
    title: "Rishikesh Trip Planning Guides",
    keyword: "rishikesh trip planning guides",
    image: "triveniGhat",
    emoji: "📘",
  },
];
