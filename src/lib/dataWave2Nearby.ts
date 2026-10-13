import type { Item } from "./data";

/* ====================================================================
 * Wave 2, nearby destinations — October 2026
 *
 * Ten cab trips out of Rishikesh, added to the four that existed
 * (Mussoorie, Nainital, Jim Corbett, Dhanaulti).
 *
 * NOTE ON PRICING — deliberately absent.
 *
 * None of these sets `priceFrom`, so the price table does not render and
 * the FAQ answers that a figure is shared on WhatsApp. That is a choice,
 * not an omission:
 *
 *   - A trip price is a commercial decision, not a derived number.
 *   - The existing nearby pages are priced on a basis the main cab rate
 *     card does not reproduce. Mussoorie sits at ₹3,499 for a 1–2 day
 *     trip; the published outstation model on the main site would put a
 *     return run well above that. Deriving these from the rate card
 *     would therefore contradict the four pages already live, and
 *     guessing a figure that sits "about right" between them would be
 *     inventing a price on a page people budget against.
 *
 * Every other fact on these pages — distance, drive time, altitude, what
 * is actually at the other end, when the road is open — is real and
 * checkable. Add `priceFrom` and `unit: "per cab"` to each when the real
 * figures are set, and the price table appears with no other change.
 *
 * Several carry `notFor`, because a good number of these are genuinely
 * the wrong trip for the person searching: Harsil and Chakrata are long
 * days for quiet places, and Auli out of season is a cable car to a
 * green hillside.
 * ================================================================== */

export const nearbyWave2: Item[] = [
  {
    slug: "devprayag-tour-from-rishikesh",
    title: "Devprayag Tour from Rishikesh",
    keyword: "devprayag from rishikesh",
    category: "nearby",
    image: "riverValley",
    emoji: "🔀",
    tagline: "The confluence where the Ganga actually begins — the closest worthwhile trip out of Rishikesh.",
    duration: "Half / full day",
    meta: [
      { label: "Distance", value: "~70 km" },
      { label: "Drive", value: "2–2.5 hrs" },
      { label: "Shape", value: "Day trip" },
    ],
    highlights: [
      "Alaknanda and Bhagirathi meet",
      "The Ganga's official starting point",
      "Raghunath temple",
      "Easiest day trip from Rishikesh",
    ],
    body: [
      "Devprayag is where the Alaknanda and the Bhagirathi join, and it is the specific point at which the river below becomes the Ganga. Everything upstream of here is one of the two tributaries; everything downstream, including the river you rafted at Rishikesh, is the Ganga.",
      "You can see the join from a viewpoint above the confluence, and the two rivers arrive different colours — the Bhagirathi clearer and greener, the Alaknanda greyer with sediment — so the line where they meet is visible rather than theoretical.",
      "It is the shortest of the trips out of Rishikesh and the one that most changes how you think about the river you have been looking at all week.",
    ],
    sections: [
      {
        heading: "What is actually there",
        paragraphs: [
          "The confluence itself, reached by steps down to the sangam where people bathe at the meeting point, and the Raghunath temple above it — one of the older temple sites in the region. The town is small and steep and stacked on the hillside above the junction.",
          "This is not a resort destination and there is very little built for visitors. Half a day is the right amount of time, and the drive along the Alaknanda is a genuine part of the trip rather than the bit before it.",
        ],
      },
      {
        heading: "When to go",
        paragraphs: [
          "Any time the road is open, which is nearly always — this is the main Char Dham highway and is maintained accordingly. The colour difference between the two rivers is sharpest after the monsoon, roughly October onwards, when the Alaknanda is still carrying silt and the Bhagirathi has cleared.",
          "Avoid the peak Char Dham season mornings if you can. This road carries the entire yatra traffic and the stretch out of Rishikesh is slow when it is busy.",
        ],
      },
      {
        heading: "Combining it",
        paragraphs: [
          "Devprayag sits naturally with a Rishikesh trip that has a spare half day, and it pairs with Rudraprayag further up the same road if you want a full day of confluences.",
          "It is also the obvious stop on the way to anywhere up the Alaknanda — Rudraprayag, Chopta, Joshimath or Auli — rather than a separate journey.",
        ],
      },
    ],
    ownFaqs: [
      {
        q: "Why is Devprayag significant?",
        a: "It is where the Alaknanda and the Bhagirathi meet to form the Ganga. The river only carries that name downstream of this point, which makes it the Ganga's actual starting place.",
      },
      {
        q: "How far is Devprayag from Rishikesh?",
        a: "About 70 km, roughly two to two and a half hours each way on the main Char Dham road. It is comfortably a half-day trip.",
      },
      {
        q: "Can you see the two rivers meeting?",
        a: "Yes, and clearly — the Bhagirathi runs greener and the Alaknanda greyer, so the line where they join is visible. It is sharpest from October onwards.",
      },
      {
        q: "Is there anything to do there besides the confluence?",
        a: "The Raghunath temple above the sangam, and the steep old town. It is a half-day destination rather than a place to stay — the drive along the river is a real part of the appeal.",
      },
    ],
  },

  {
    slug: "chopta-tour-from-rishikesh",
    title: "Chopta Tour from Rishikesh",
    keyword: "chopta from rishikesh",
    category: "nearby",
    image: "chopta",
    emoji: "🏔️",
    tagline: "Meadows at 2,700 m and the trek to the highest Shiva temple in the world.",
    duration: "2–3 days",
    meta: [
      { label: "Distance", value: "~165 km" },
      { label: "Drive", value: "6–7 hrs" },
      { label: "Chopta", value: "~2,700 m" },
    ],
    highlights: [
      "Tungnath — highest Shiva temple",
      "3.5 km trek from the road",
      "Chandrashila summit at 4,000 m",
      "Snow in winter, meadows in summer",
    ],
    body: [
      "Chopta is a meadow rather than a town — a stretch of high pasture and rhododendron forest on the road above Ukhimath, at around 2,700 metres. There is no bazaar and not much infrastructure, which is the point of it.",
      "What people come for is the trek above it. Tungnath, at roughly 3,680 metres, is the highest temple to Shiva anywhere and it is a 3.5 km walk up from the roadhead — steep, paved in sections, and genuinely achievable for most people who take it slowly.",
      "Another 1.5 km above the temple is Chandrashila, at about 4,000 metres, with a Himalayan panorama that includes Nanda Devi, Trishul and Chaukhamba. That final stretch is harder and the altitude is real.",
    ],
    sections: [
      {
        heading: "Why this is not a day trip",
        paragraphs: [
          "Six to seven hours of mountain driving each way, plus a trek of three and a half kilometres up and the same back down, does not fit into a day from Rishikesh. Attempting it means arriving at the trailhead in the afternoon with no time to walk.",
          "Two nights is the honest shape: drive up and sleep at or near Chopta, trek early the next morning while the sky is clear, and drive back the following day. One night works if you are prepared for a hard pair of driving days.",
        ],
      },
      {
        heading: "When to come",
        paragraphs: [
          "April to June for the meadows, the rhododendrons and clear mornings. September to November for the sharpest Himalayan views of the year after the monsoon clears, which is when the Chandrashila panorama is at its best.",
          "December to March brings snow, and the trek becomes a snow walk that needs proper footwear and sometimes closes entirely. The road can also shut. Winter here is a real trip rather than an easy one.",
          "July and August are the monsoon: cloud, leeches in the forest, landslide risk on the approach and no view from the summit. We advise against it rather than quoting it.",
        ],
      },
      {
        heading: "The altitude, honestly",
        paragraphs: [
          "Chandrashila at 4,000 metres is high enough that altitude affects people, and you will have driven up from 340 metres at Rishikesh in a day. Headache and breathlessness on the final climb are common.",
          "Sleeping at Chopta the night before helps considerably. If anyone in the group has a heart or respiratory condition, Tungnath is a reasonable target and Chandrashila is worth leaving out.",
        ],
      },
    ],
    ownFaqs: [
      {
        q: "How far is Chopta from Rishikesh?",
        a: "About 165 km, but six to seven hours of mountain driving. Treat it as a two-night trip rather than a long day.",
      },
      {
        q: "How hard is the Tungnath trek?",
        a: "3.5 km of steady climbing from the road to about 3,680 m, paved in parts. Most reasonably mobile people manage it at a slow pace. Chandrashila adds 1.5 km and 300 m and is considerably harder.",
      },
      {
        q: "Can I do Chopta as a day trip from Rishikesh?",
        a: "No. The driving alone is twelve to fourteen hours return, which leaves no time for the trek that is the reason to go.",
      },
      {
        q: "Is Chopta worth visiting in the monsoon?",
        a: "Not really. July and August bring cloud with no summit view, leeches in the forest and landslide risk on the approach road. September onwards is a different place.",
      },
    ],
    notFor:
      "Anyone looking for a hill station with a market and a mall road — Chopta is a meadow with a trailhead and very little else. Also not for a group unwilling to give it two nights.",
  },

  {
    slug: "auli-tour-from-rishikesh",
    title: "Auli Tour from Rishikesh",
    keyword: "auli from rishikesh",
    category: "nearby",
    image: "valley",
    emoji: "🎿",
    tagline: "India's best-known ski slope, the long cable car, and why the season matters more than anything.",
    duration: "3 days",
    meta: [
      { label: "Distance", value: "~250 km" },
      { label: "Drive", value: "8–9 hrs" },
      { label: "Altitude", value: "2,500–3,050 m" },
    ],
    highlights: [
      "Skiing in January–March",
      "Cable car from Joshimath",
      "Nanda Devi and Dronagiri views",
      "Artificial lake at the top",
    ],
    body: [
      "Auli is a ski slope above Joshimath, running from roughly 2,500 to 3,050 metres, with one of the longer cable car systems in Asia connecting the two. In season it is the most serious skiing in the country; out of season it is a very beautiful green hillside with a chairlift.",
      "That distinction is the single most important thing to settle before booking. Most disappointment here comes from people arriving in April or October expecting snow and finding meadow.",
      "The views are the constant. Nanda Devi, Dronagiri and Mana Parbat are visible from the slope on a clear day, and those do not depend on the season.",
    ],
    sections: [
      {
        heading: "The season, precisely",
        paragraphs: [
          "Skiing is January to March, with February the most reliable month. December is a gamble — the snow may not have settled — and by late March the lower slopes are going. Equipment and instruction are available on site during the season.",
          "April to June is pleasant and green with excellent visibility, good for the cable car and walking but with no snow. September to November is the clearest window of the year for the Himalayan views. July and August are monsoon and the approach road is the problem rather than Auli itself.",
        ],
      },
      {
        heading: "Getting there, and why it is three days",
        paragraphs: [
          "Eight to nine hours of driving from Rishikesh up the Alaknanda through Devprayag, Rudraprayag and Chamoli to Joshimath, then the cable car or a road up to Auli. That is a full day each way, which makes three days the minimum and four comfortable.",
          "The road is the Char Dham highway as far as Joshimath and is generally good, but it is mountain driving with landslide-prone sections in and after the monsoon. Winter can bring snow on the final stretch.",
        ],
      },
      {
        heading: "What else is up there",
        paragraphs: [
          "The artificial lake at the top of the slope, built to feed snow-making equipment, which is a short walk and a good viewpoint. Joshimath below is the base town and a Char Dham waypoint, with Narsingh temple and the winter seat of Badrinath.",
          "From the same base, the Valley of Flowers and Hemkund Sahib open in the summer, which is a different and much more demanding trip that starts from Govindghat nearby.",
        ],
      },
    ],
    ownFaqs: [
      {
        q: "When can you ski in Auli?",
        a: "January to March, with February the most dependable. December is uncertain and by late March the lower slopes are thinning. Outside that window there is no snow.",
      },
      {
        q: "How far is Auli from Rishikesh?",
        a: "About 250 km and eight to nine hours of mountain driving to Joshimath, then the cable car or road up. Plan three days minimum, four comfortably.",
      },
      {
        q: "Is Auli worth visiting without snow?",
        a: "For the Himalayan views, the cable car and the walking, genuinely yes — September to November is the clearest time of year. But if you are coming for snow, only come in the season.",
      },
      {
        q: "Do you need skiing experience?",
        a: "No. Instruction and equipment hire operate on the slope during the season, and the gentler runs are built for beginners.",
      },
    ],
    notFor:
      "Anyone booking outside January to March who is picturing snow. Auli in October is a green hillside with a very good view — worth the trip on those terms, and a disappointment on any other.",
  },

  {
    slug: "kanatal-tour-from-rishikesh",
    title: "Kanatal Tour from Rishikesh",
    keyword: "kanatal from rishikesh",
    category: "nearby",
    image: "pineForest",
    emoji: "🌲",
    tagline: "A quiet ridge at 2,590 m, apple country, and the short trek to Surkanda Devi.",
    duration: "1–2 days",
    meta: [
      { label: "Distance", value: "~85 km" },
      { label: "Drive", value: "3 hrs" },
      { label: "Altitude", value: "~2,590 m" },
    ],
    highlights: [
      "Quieter than Mussoorie",
      "Surkanda Devi trek nearby",
      "Apple orchards and deodar",
      "Good camping country",
    ],
    body: [
      "Kanatal is a small settlement on the Mussoorie–Chamba road at about 2,590 metres, and its main appeal is negative: it has none of the traffic, hawkers or mall-road crowds of Mussoorie, which sits lower and an hour away.",
      "What it has is deodar forest, apple orchards, a ridge with a long view towards the snow line on a clear day, and a cluster of camps and small resorts. It is the easiest genuine hill escape from Rishikesh.",
      "Three hours of driving makes it workable as an overnight and perfectly reasonable as a long day, which is unusual for anywhere at this altitude.",
    ],
    sections: [
      {
        heading: "Surkanda Devi",
        paragraphs: [
          "The main thing to actually do. The temple sits at around 2,750 metres on a peak near Kaddukhal, about a 1.5 km climb from the road — steep but short, and there is now a ropeway for anyone who would rather not walk it.",
          "The summit view on a clear morning takes in a long stretch of the Garhwal Himalaya, and it is one of the better returns on a short walk anywhere in the region. Go early; cloud builds through the day.",
        ],
      },
      {
        heading: "When to come",
        paragraphs: [
          "March to June is the main season — comfortable days, cool nights, orchards in blossom in spring. September to November brings the clearest air and the best views.",
          "Winter is cold and occasionally snowy at this height, which is part of the appeal for people coming up from the plains. The monsoon is green and quiet with limited views and the usual hill-road caution.",
        ],
      },
      {
        heading: "How it compares with the alternatives",
        paragraphs: [
          "Against Mussoorie: quieter, higher, far less to do, much more pleasant. Against Dhanaulti, which is 20 km away and similar in character: Kanatal is slightly quieter still and better placed for Surkanda Devi.",
          "If the group wants shops, restaurants and things laid on, Mussoorie is the correct answer and this is not. If they want a ridge, a fire and a view, it is the other way round.",
        ],
      },
    ],
    ownFaqs: [
      {
        q: "How far is Kanatal from Rishikesh?",
        a: "About 85 km and roughly three hours on hill roads. It works as an overnight or as a long day trip.",
      },
      {
        q: "Is Kanatal better than Mussoorie?",
        a: "Quieter, higher and much less crowded, with far less to do. Better if you want a ridge and a bonfire, worse if you want shops and restaurants.",
      },
      {
        q: "What is there to do in Kanatal?",
        a: "The Surkanda Devi trek, walking in the deodar forest and orchards, camping and the ridge views. It is a place to be somewhere quiet rather than a place with a list of sights.",
      },
      {
        q: "Does it snow in Kanatal?",
        a: "Occasionally in the winter at around 2,590 m — it is not dependable, but it happens, which is more than can be said for Rishikesh.",
      },
    ],
  },

  {
    slug: "tehri-lake-tour-from-rishikesh",
    title: "Tehri Lake Tour from Rishikesh",
    keyword: "tehri lake from rishikesh",
    category: "nearby",
    image: "riverValley",
    emoji: "🚤",
    tagline: "A reservoir the size of a small sea, water sports, and the town underneath it.",
    duration: "Day / overnight",
    meta: [
      { label: "Distance", value: "~95 km" },
      { label: "Drive", value: "3 hrs" },
      { label: "Activities", value: "Water sports" },
    ],
    highlights: [
      "Jet skiing and boating",
      "Largest reservoir in the region",
      "Koteshwar below the dam",
      "Newer, less crowded",
    ],
    body: [
      "Tehri Lake is the reservoir behind the Tehri Dam on the Bhagirathi, and it is big — a long, deep, many-armed body of water in steep hills, which is not something the region otherwise has.",
      "It has become the local centre for flat-water activity: jet skis, speedboats, banana rides, kayaking and increasingly paragliding over the water. That makes it a useful counterpart to Rishikesh, where everything on the river is whitewater.",
      "It is also a recent destination rather than an established one, so it is less crowded and less organised than its size suggests.",
    ],
    sections: [
      {
        heading: "What there is to do",
        paragraphs: [
          "Water sports are the main draw and are concentrated at a few access points around the lake. Jet ski and speedboat rides are short and sold on the spot; kayaking and longer boat trips need a little arranging.",
          "Beyond the water, the dam itself is a substantial piece of engineering, and Koteshwar below it is a quieter secondary reservoir. The drive around the lake arms is scenic in its own right.",
        ],
      },
      {
        heading: "The town underneath",
        paragraphs: [
          "Old Tehri is under the water. The town was submerged when the reservoir filled and its population was resettled at New Tehri, higher up the hillside. It is worth knowing that as you look at the lake rather than discovering it afterwards.",
          "The project was contested for years on seismic and displacement grounds, and opinions locally are still mixed. It is a more interesting place for that history than for the jet skis.",
        ],
      },
      {
        heading: "When to come",
        paragraphs: [
          "October to June. The water is at its clearest and most pleasant after the monsoon and through the spring; summer is warm at this altitude but the lake makes it bearable.",
          "The monsoon raises the level and muddies the water, and the hill roads in are the usual consideration. Winter is cold but entirely workable for boating.",
        ],
      },
    ],
    ownFaqs: [
      {
        q: "What water sports are available at Tehri Lake?",
        a: "Jet skis, speedboats, banana rides and kayaking, with paragliding over the water increasingly offered. Rides are mostly sold at the access points on the day.",
      },
      {
        q: "How far is Tehri Lake from Rishikesh?",
        a: "About 95 km, roughly three hours. It works as a long day trip or a comfortable overnight.",
      },
      {
        q: "Is there a town under Tehri Lake?",
        a: "Yes. Old Tehri was submerged when the reservoir filled and the population was resettled at New Tehri above the waterline.",
      },
      {
        q: "When is the best time to visit Tehri Lake?",
        a: "October to June. After the monsoon the water clears and the views open up; the monsoon itself raises and muddies the lake.",
      },
    ],
  },

  {
    slug: "rudraprayag-tour-from-rishikesh",
    title: "Rudraprayag Tour from Rishikesh",
    keyword: "rudraprayag from rishikesh",
    category: "nearby",
    image: "riverValley",
    emoji: "🏞️",
    tagline: "The second confluence, the Kedarnath road junction, and Corbett's leopard.",
    duration: "Day / overnight",
    meta: [
      { label: "Distance", value: "~140 km" },
      { label: "Drive", value: "4–5 hrs" },
      { label: "Confluence", value: "Mandakini + Alaknanda" },
    ],
    highlights: [
      "Mandakini meets Alaknanda",
      "Junction for Kedarnath",
      "Second of the five prayags",
      "Jim Corbett's man-eater country",
    ],
    body: [
      "Rudraprayag is where the Mandakini, coming down from Kedarnath, joins the Alaknanda. It is the second of the five prayags on this road and the point at which the Kedarnath and Badrinath routes divide — straight on for Badrinath, left up the Mandakini for Kedarnath.",
      "That makes it a waypoint more than a destination, and most people pass through it on a yatra rather than visiting it. It is worth stopping for all the same: the confluence is dramatic, hemmed in by steep rock, and the two rivers meet at an angle that is easy to see.",
      "It is also the setting of one of the better-known pieces of Indian hill writing — Jim Corbett's account of the man-eating leopard that killed across these hillsides in the early 1920s.",
    ],
    sections: [
      {
        heading: "What to see",
        paragraphs: [
          "The sangam, reached by steps down from the road, with the Rudranath temple above it. Koteshwar Mahadev, a cave temple by the river a few kilometres back towards Rishikesh, is the better of the two stops and is often missed.",
          "The town is a strip along the highway and is functional rather than attractive. The scenery either side of it is the reason to come.",
        ],
      },
      {
        heading: "As part of a bigger trip",
        paragraphs: [
          "Rudraprayag works best as a stop rather than a target: on the way to Chopta, which branches off above it, or to Kedarnath, Joshimath or Auli, or as the far point of a confluence day that takes in Devprayag on the way.",
          "Paired with Devprayag it makes a full and genuinely interesting day — two confluences, the full length of the lower Alaknanda, and a clear sense of how the Ganga is assembled.",
        ],
      },
      {
        heading: "When to come, and the traffic",
        paragraphs: [
          "October to June. The one serious consideration is the Char Dham season, roughly late April to June and again in September and October, when this road carries very heavy yatra traffic and the journey time can stretch substantially.",
          "In the monsoon this stretch is landslide-prone and closures happen. Outside the yatra peak and the monsoon, it is a straightforward and well-surfaced drive.",
        ],
      },
    ],
    ownFaqs: [
      {
        q: "What is Rudraprayag known for?",
        a: "The confluence of the Mandakini and the Alaknanda, being the junction where the Kedarnath and Badrinath roads divide, and as the setting of Jim Corbett's account of the man-eating leopard of Rudraprayag.",
      },
      {
        q: "How far is Rudraprayag from Rishikesh?",
        a: "About 140 km and four to five hours on the Char Dham highway. It is a long day trip or an easy overnight.",
      },
      {
        q: "Is it worth visiting on its own?",
        a: "Honestly, it is better as a stop than a destination — on the way to Chopta, Kedarnath or Auli, or paired with Devprayag as a day of confluences.",
      },
      {
        q: "Will the road be busy?",
        a: "During the Char Dham season, late April to June and again in September and October, very. This is the main yatra route and journey times stretch considerably at the peak.",
      },
    ],
  },

  {
    slug: "lansdowne-tour-from-rishikesh",
    title: "Lansdowne Tour from Rishikesh",
    keyword: "lansdowne from rishikesh",
    category: "nearby",
    image: "pineForest",
    emoji: "🎖️",
    tagline: "A cantonment town with no commercial noise at all — the quietest hill trip from Rishikesh.",
    duration: "1–2 days",
    meta: [
      { label: "Distance", value: "~140 km" },
      { label: "Drive", value: "4–5 hrs" },
      { label: "Altitude", value: "~1,700 m" },
    ],
    highlights: [
      "Garhwal Rifles cantonment",
      "Tip-in-Top viewpoint",
      "Bhulla Tal lake",
      "Almost no tourist development",
    ],
    body: [
      "Lansdowne is a Garhwal Rifles cantonment at about 1,700 metres, and it is unlike every other hill station within reach of Rishikesh for one reason: the army runs it, so there is effectively no commercial development. No mall road, no hawkers, no traffic, no neon.",
      "What that leaves is pine forest, colonial-era buildings, parade grounds, a regimental museum and silence. People either find it the most restful place in Garhwal or wonder why they came, and which of those applies is entirely predictable in advance.",
      "It is also reached by a different road from everywhere else here — south and east through Kotdwar rather than up the Ganga — so it feels further from the yatra circuit than the distance suggests.",
    ],
    sections: [
      {
        heading: "What there is",
        paragraphs: [
          "Tip-in-Top, the main viewpoint, with a long Himalayan skyline on a clear day. Bhulla Tal, a small managed lake with boating, named for the regiment's young soldiers. St Mary's Church, now a small museum, and the Garhwali Mess and war memorial.",
          "Walking is the real activity — quiet metalled roads through pine forest with almost no vehicles on them, which is rarer and more pleasant than it sounds.",
        ],
      },
      {
        heading: "What to know before booking",
        paragraphs: [
          "It is a working cantonment. Parts are restricted, photography is limited in places, and the atmosphere is orderly rather than relaxed. This is the trade for the quiet, and it is not negotiable.",
          "Accommodation is limited and fills on weekends and holidays, partly because the army guest houses are not generally available. Book earlier than you would for Mussoorie.",
        ],
      },
      {
        heading: "When to come",
        paragraphs: [
          "March to June and September to November. The autumn window has the clearest views of the Himalaya from Tip-in-Top; spring is green and comfortable.",
          "Winter is cold and very quiet, with occasional snow. The monsoon is lush and view-free, and the Kotdwar approach has its share of landslip-prone stretches.",
        ],
      },
    ],
    ownFaqs: [
      {
        q: "Why is Lansdowne so quiet?",
        a: "It is a Garhwal Rifles cantonment, so commercial development is effectively absent — no mall road, no hawkers, very little traffic. The quiet is the reason to go.",
      },
      {
        q: "How far is Lansdowne from Rishikesh?",
        a: "About 140 km and four to five hours, by a different route from the other hill trips — south and east through Kotdwar rather than up the Ganga.",
      },
      {
        q: "What is there to do in Lansdowne?",
        a: "Tip-in-Top viewpoint, Bhulla Tal, the regimental museum and church, and walking on near-empty forest roads. It is a place to do very little, deliberately.",
      },
      {
        q: "Are there restrictions as it is a cantonment?",
        a: "Yes — some areas are restricted and photography is limited in places. Accommodation is also limited and books up on weekends, so plan further ahead than usual.",
      },
    ],
    notFor:
      "Anyone who wants a market, restaurants or things laid on. Lansdowne's appeal is that none of that exists, which makes it the wrong trip for a group looking for a lively weekend.",
  },

  {
    slug: "chakrata-tour-from-rishikesh",
    title: "Chakrata Tour from Rishikesh",
    keyword: "chakrata from rishikesh",
    category: "nearby",
    image: "waterfall",
    emoji: "💧",
    tagline: "Tiger Falls, deodar at 2,100 m, and a cantonment that restricts who can visit.",
    duration: "2 days",
    meta: [
      { label: "Distance", value: "~160 km" },
      { label: "Drive", value: "5–6 hrs" },
      { label: "Altitude", value: "~2,100 m" },
    ],
    highlights: [
      "Tiger Falls, around 50 m",
      "Deoban deodar forest",
      "Very few visitors",
      "Jaunsari hill culture",
    ],
    body: [
      "Chakrata is a cantonment at roughly 2,100 metres, west of Mussoorie and reached via Dehradun. It is one of the least visited places of its size in Uttarakhand, and the reason is partly that it is awkward to reach and partly that it is a restricted military area.",
      "The main draw is Tiger Falls, one of the highest waterfalls in the state at around 50 metres, reached by a walk down through forest from the road. The second is Deoban, a dense old deodar forest at around 2,800 metres with a view of the Western Himalaya.",
      "This is also Jaunsar-Bawar country, with a distinct hill culture, architecture and festival calendar that is noticeably different from the Garhwal you pass through getting here.",
    ],
    sections: [
      {
        heading: "The access restriction",
        paragraphs: [
          "Chakrata is an active cantonment and access is controlled. Foreign nationals in particular face restrictions on entering the area, and permission requirements change. If anyone in your group is not an Indian national, raise it when you enquire — this is the one destination on this list where the answer may simply be no.",
          "For Indian visitors the town is open, but parts of the surrounding area are not and photography near installations is not permitted.",
        ],
      },
      {
        heading: "Tiger Falls, realistically",
        paragraphs: [
          "The falls are about 5 km from Chakrata, with the last stretch on foot — a descent of a couple of kilometres through forest, which means a climb back up at the end. It is not difficult but it is not a roadside viewpoint either.",
          "They are at their most impressive after the monsoon, roughly September to November, and reduced to a thin stream by late spring. Going in May to see a waterfall here is a common mistake.",
        ],
      },
      {
        heading: "When to come",
        paragraphs: [
          "September to November for the falls and the clearest views, and March to June for comfortable weather in the forest. Winter brings snow at this height and some roads become difficult.",
          "The monsoon makes the falls spectacular and the roads unreliable, which is a genuine trade-off rather than a straightforward no. Ask us closer to the date.",
        ],
      },
    ],
    ownFaqs: [
      {
        q: "Can foreigners visit Chakrata?",
        a: "Access is restricted because it is an active cantonment, and restrictions on foreign nationals apply and change. Tell us at enquiry if anyone in the group is not an Indian national — here the answer may be no.",
      },
      {
        q: "How far is Chakrata from Rishikesh?",
        a: "About 160 km via Dehradun, five to six hours. It is a two-day trip rather than a long day.",
      },
      {
        q: "When is Tiger Falls at its best?",
        a: "September to November, after the monsoon has filled it. By late spring it is a thin stream, which disappoints people who go in May.",
      },
      {
        q: "Is there much tourist infrastructure?",
        a: "Very little, which is both the appeal and the catch. Accommodation is limited and basic by hill-station standards, so this suits people who want forest and quiet rather than comfort.",
      },
    ],
    notFor:
      "Groups including foreign nationals, until the current access position is confirmed — and anyone expecting hill-station comforts, which Chakrata does not have.",
  },

  {
    slug: "harsil-tour-from-rishikesh",
    title: "Harsil Tour from Rishikesh",
    keyword: "harsil from rishikesh",
    category: "nearby",
    image: "peaks",
    emoji: "🍎",
    tagline: "Apple valley at 2,600 m on the Bhagirathi, and the winter seat of Gangotri.",
    duration: "3 days",
    meta: [
      { label: "Distance", value: "~220 km" },
      { label: "Drive", value: "8–9 hrs" },
      { label: "Altitude", value: "~2,620 m" },
    ],
    highlights: [
      "Bhagirathi valley apples",
      "Mukhba — Gangotri's winter seat",
      "Deodar forest and meadows",
      "Very few visitors",
    ],
    body: [
      "Harsil sits at about 2,620 metres in the Bhagirathi valley, roughly 25 km short of Gangotri, and it is the quietest place on this list by a distance. Apple orchards, deodar, a river running clear and fast, and almost nobody.",
      "It is best known locally for its apples — a variety introduced in the nineteenth century by Frederick Wilson, an Englishman who settled here, logged the deodar and left a legacy that is still the valley's economy.",
      "Nearby Mukhba is the winter seat of Gangotri: when the shrine closes for the winter, the deity is brought down here and worshipped until the reopening in spring. That makes Harsil one of the few places on the Char Dham route with something to visit in the off season.",
    ],
    sections: [
      {
        heading: "Why it is a three-day trip",
        paragraphs: [
          "Eight to nine hours of driving up the Bhagirathi from Rishikesh through Uttarkashi, on a road that is mountain road for most of its length. That is a day each way and it does not compress.",
          "The reward for the distance is that the valley is genuinely undeveloped. There is no resort strip here, accommodation is limited and simple, and what you do is walk, look at the river and sit in orchards.",
        ],
      },
      {
        heading: "When the road is open",
        paragraphs: [
          "This is the key question. The road up the Bhagirathi is a Char Dham route and is maintained for the Gangotri season, roughly May to October or November. In deep winter snow closes the upper sections and Harsil can be cut off.",
          "September and October are the best weeks — the monsoon has gone, the apples are in, the air is clear and the yatra traffic has thinned. May and June are busy with Gangotri pilgrims. The monsoon brings real landslide risk on this road and we would rather not run it.",
        ],
      },
      {
        heading: "What is nearby",
        paragraphs: [
          "Gangotri itself, 25 km on, during the season. Mukhba for the winter seat. Dharali and the surrounding villages for the valley's architecture, and Sattal and the meadows above for walking.",
          "Uttarkashi on the way up is the district town and the practical stop for anything you have forgotten, since Harsil has very little.",
        ],
      },
    ],
    ownFaqs: [
      {
        q: "How far is Harsil from Rishikesh?",
        a: "About 220 km and eight to nine hours up the Bhagirathi valley through Uttarkashi. It is a three-day trip at minimum.",
      },
      {
        q: "Is Harsil open in winter?",
        a: "Access becomes difficult and the upper road can close with snow. The dependable window is roughly May to October or November, and September to October is the best of it.",
      },
      {
        q: "What is Mukhba?",
        a: "The winter seat of Gangotri, near Harsil. When the shrine closes for the winter the deity is brought down and worshipped here until spring, which makes the valley worth visiting out of the Gangotri season.",
      },
      {
        q: "Is there much to do in Harsil?",
        a: "Walking, the orchards, the river, the villages and Gangotri in season. It is a place to be somewhere remote and quiet, not a place with a list of attractions.",
      },
    ],
    notFor:
      "A short trip or a first visit to the hills. Eighteen hours of return driving for a valley whose appeal is that nothing happens there is a specific taste — and it is the wrong call in the monsoon on any terms.",
  },

  {
    slug: "dehradun-tour-from-rishikesh",
    title: "Dehradun Tour from Rishikesh",
    keyword: "dehradun from rishikesh",
    category: "nearby",
    image: "mussoorie",
    emoji: "🏙️",
    tagline: "An hour away, and the easiest half day out — caves, springs and the monastery.",
    duration: "Half / full day",
    meta: [
      { label: "Distance", value: "~45 km" },
      { label: "Drive", value: "1–1.5 hrs" },
      { label: "Airport", value: "Dehradun" },
    ],
    highlights: [
      "Robber's Cave river walk",
      "Sahastradhara sulphur springs",
      "Mindrolling Monastery and stupa",
      "Forest Research Institute",
    ],
    body: [
      "Dehradun is the state capital, an hour from Rishikesh, and it is the most straightforward trip on this list — a city rather than a hill station, with enough in it for a half day and a good deal more if you want one.",
      "It is also where most people's flight lands, which makes a Dehradun half day the natural use of a departure morning or an arrival afternoon rather than a separate expedition.",
      "The things worth seeing are scattered across the city and its edges, so this is a trip that genuinely works better with a car than without.",
    ],
    sections: [
      {
        heading: "The four worth the time",
        paragraphs: [
          "Robber's Cave, locally Guchhupani, is a narrow gorge you walk up with a stream running through it — ankle to knee deep, cold, and more fun than its description. Take footwear you can get wet.",
          "Sahastradhara is a set of sulphur springs and small cascades with a ropeway above them; busy at weekends and best early. Mindrolling Monastery has one of the larger stupas in India and a quiet, well-kept garden that is the most restful place in the city.",
          "The Forest Research Institute, in a vast colonial building set in its own grounds, is worth it for the architecture alone and has a set of small museums inside.",
        ],
      },
      {
        heading: "How to fit it in",
        paragraphs: [
          "As a half day from Rishikesh, pick two — Robber's Cave and the monastery make the best pairing, being at opposite ends in character and reachable in one loop.",
          "As a full day you can do all four comfortably. If you are flying out, the airport is at Jolly Grant between Rishikesh and the city, so a morning in Dehradun before an afternoon flight needs no backtracking at all.",
        ],
      },
      {
        heading: "When to come",
        paragraphs: [
          "Any time of year. Dehradun sits at around 600 metres in the Doon valley, so it is warm in summer and mild in winter rather than extreme in either direction.",
          "Robber's Cave is better in the warmer months, since the walk involves standing in cold water, and it can be closed or unpleasant in heavy monsoon flow. Weekdays are considerably quieter everywhere.",
        ],
      },
    ],
    ownFaqs: [
      {
        q: "How far is Dehradun from Rishikesh?",
        a: "About 45 km and an hour to an hour and a half. It is the easiest trip out of Rishikesh and works as a half day.",
      },
      {
        q: "What is Robber's Cave?",
        a: "A narrow gorge, locally Guchhupani, that you walk up with a stream running through it — ankle to knee deep and cold. Wear footwear you do not mind soaking.",
      },
      {
        q: "Is Dehradun worth visiting from Rishikesh?",
        a: "For a half day, yes, especially around a flight from Jolly Grant airport. It is a city rather than a hill station, so set expectations accordingly.",
      },
      {
        q: "Can I combine Dehradun with Mussoorie?",
        a: "Yes, and it is a common pairing — Mussoorie is about an hour above Dehradun. That becomes a full day or an overnight rather than a half day.",
      },
    ],
  },
];
