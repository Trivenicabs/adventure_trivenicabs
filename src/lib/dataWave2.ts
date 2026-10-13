import type { Item } from "./data";

/* ====================================================================
 * Wave 2 — October 2026
 *
 * Twenty-eight pages added to a site that had eighty-one. Every one of
 * them sets `body`, `sections`, `ownFaqs` and usually `notFor`, so each
 * renders its own writing rather than the paragraph its category shares
 * with its siblings. The reason is in the Item comment in data.ts: the
 * generated body is identical across a category, so a page that does not
 * bring its own text has only its title to distinguish it.
 *
 * Two deliberate choices worth recording:
 *
 * 1. The `nearby` items carry NO priceFrom. A trip price is a commercial
 *    decision, and the existing nearby pages are priced on a basis the
 *    main cab rate card does not reproduce — Mussoorie at ₹3,499 is well
 *    under what ₹11/km return would give. Rather than invent a number or
 *    contradict the existing set, these pages let the FAQ say the price
 *    is shared on WhatsApp. Add priceFrom when the real figures are set.
 *
 * 2. Several pages argue against a booking. The monsoon page says not to
 *    come for rafting in July; the one-day page says a Delhi day trip is
 *    a bad idea; the beach-camping page explains why the thing people
 *    search for is not legal to sell. An enquiry that arrives already
 *    knowing this is cheaper to serve than one that has to be corrected.
 * ================================================================== */

export const guidesWave2: Item[] = [
  {
    slug: "when-rafting-is-closed-in-rishikesh",
    title: "When River Rafting Is Closed in Rishikesh",
    keyword: "rishikesh rafting closed season",
    category: "guide",
    image: "whitewater",
    emoji: "🚫",
    tagline: "The monsoon shutdown, when it starts, and what to do if your dates fall inside it.",
    meta: [
      { label: "Closed", value: "Monsoon" },
      { label: "Runs", value: "Sep–Jun" },
      { label: "Decided by", value: "Administration" },
    ],
    body: [
      "Rafting on the Ganga at Rishikesh stops every monsoon. This is not an operator preference or a weather call made on the morning — it is an administrative suspension, and when it is in force nobody is running trips, at any price, however the listing reads.",
      "The closure is usually in place from around the end of June until the river drops in September. The exact dates move each year because they follow the water rather than the calendar, and they are announced locally rather than well in advance.",
      "What makes the monsoon different is not rain, it is discharge. The same rapids that are a Grade III ride in October become unrunnable when the river is carrying several times the water, and the beaches used to launch and land disappear under it.",
    ],
    sections: [
      {
        heading: "Why the dates move",
        paragraphs: [
          "Reopening depends on the river falling to a safe level and the launch and exit beaches re-emerging as the water drops. A late monsoon pushes the restart later; an early withdrawal brings it forward. Anyone who gives you a firm reopening date in May is guessing.",
          "The same applies in reverse at the start of the closure. A heavy June can bring the suspension forward by a couple of weeks, which catches out people who booked around a date they read last year.",
        ],
      },
      {
        heading: "What still runs when the river does not",
        paragraphs: [
          "Most of what people come to Rishikesh for is not on the water. Bungee, the giant swing, zipline, the flying fox and the rope courses all operate through the monsoon, subject to the day's weather. Waterfall treks are at their best — Neer Garh is actually worth seeing when it is full rather than a trickle.",
          "Camping continues away from the riverbank, and the town itself — the ghats, the aarti, the Beatles Ashram, the cafes — is quieter and greener than at any other time of year.",
        ],
      },
      {
        heading: "If your dates are fixed inside the closure",
        paragraphs: [
          "Tell us before you book anything. We will say plainly whether rafting is likely to be running, and if it is not, we would rather rebuild the trip around what does run than sell you a package with a rafting line in it that we expect to cancel.",
          "If the rafting is the whole point of the trip and the dates cannot move, the honest answer is to go somewhere the season is different rather than to come here and hope.",
        ],
      },
    ],
    ownFaqs: [
      {
        q: "Is rafting in Rishikesh closed in July and August?",
        a: "Yes. The monsoon suspension is normally in force through July and August and into early September. Treat any July or August rafting booking as a red flag — nobody can legitimately confirm one.",
      },
      {
        q: "When exactly does rafting reopen in Rishikesh?",
        a: "Usually September, once the river drops and the launch beaches reappear, but the date is set by conditions each year rather than fixed. Message us close to your dates and we will tell you where things stand rather than guess.",
      },
      {
        q: "Can I raft in the monsoon if I sign a waiver?",
        a: "No. The suspension is not a liability question that a signature can settle — while it is in force no operator is permitted to run, and one offering to is not somebody to get into a raft with.",
      },
      {
        q: "Is it worth coming to Rishikesh during the monsoon at all?",
        a: "For the bungee, the swing, the ziplines, the waterfalls and the town, yes — and it is quieter and cheaper. For rafting, no. It depends entirely on which of those you were coming for.",
      },
    ],
    notFor:
      "Anyone whose trip only makes sense with rafting in it and whose dates fall in July or August. We would rather tell you now than take the booking.",
  },

  {
    slug: "is-rafting-safe-for-non-swimmers",
    title: "Is Rafting Safe If You Cannot Swim?",
    keyword: "rishikesh rafting non swimmers",
    category: "guide",
    image: "rafting",
    emoji: "🦺",
    tagline: "The honest answer, what the life jacket actually does, and the one part you can decline.",
    meta: [
      { label: "Swimming", value: "Not required" },
      { label: "Jacket", value: "Mandatory" },
      { label: "Best stretch", value: "9 km" },
    ],
    body: [
      "You do not need to be able to swim to go rafting at Rishikesh. Most people in most rafts cannot, and the trip is built on that assumption rather than around it.",
      "The reason is the life jacket. A properly fitted jacket does not keep you level and treading water — it floats you on your back with your face clear, which is a position you hold without doing anything. Swimming ability changes how comfortable you feel, not whether you float.",
      "That said, two things are worth knowing before you commit, and no amount of reassurance replaces them: you will probably get wet, and you may end up in the water whether you planned to or not.",
    ],
    sections: [
      {
        heading: "What happens if you come out of the raft",
        paragraphs: [
          "It happens, it is not an emergency, and it is covered in the briefing before you launch. You float, you keep your feet up rather than trying to stand, and you let the guide or the safety kayak come to you. The thing that causes problems is trying to swim to the bank or stand up in moving water, which is exactly what untrained instinct tells you to do.",
          "Every trip runs with a safety kayaker whose only job is this. On the commercial stretches the river has long calm sections between rapids, which is where a recovery happens.",
        ],
      },
      {
        heading: "The part you can decline",
        paragraphs: [
          "Body surfing and cliff jumping are optional add-ons on the standard stretches, and they are the parts that genuinely involve being in the water on purpose. You can say no to both and still do the whole raft.",
          "Say it to the guide at the start rather than at the moment, and nobody will make a thing of it. Groups talk each other into these, which is fine for people who want to be talked into them and not fine for anyone else.",
        ],
      },
      {
        heading: "Which stretch to pick",
        paragraphs: [
          "If not swimming is making you hesitate, start on the 9 km Brahmapuri run. It has three or four rapids at Grade I–II, long flat stretches, and it is the trip families and first-timers are put on.",
          "The 16 km Shivpuri stretch is the popular one and is still well within reach for a non-swimmer, with bigger rapids. The 26 km and 36 km runs are for people who already know they like this.",
        ],
      },
    ],
    ownFaqs: [
      {
        q: "Do I need to know swimming for Rishikesh rafting?",
        a: "No. The life jacket does the floating for you, and the majority of people on the river cannot swim. Tell your guide at the briefing so they can seat you accordingly.",
      },
      {
        q: "What if I fall out of the raft and cannot swim?",
        a: "You float on your back with your feet up and wait — the jacket holds your face clear without any effort. A safety kayaker accompanies every trip for exactly this. The briefing covers it before you launch.",
      },
      {
        q: "Can I skip the cliff jump and body surfing?",
        a: "Yes, both are optional and you can do the full rafting trip without either. Tell the guide at the start rather than at the cliff.",
      },
      {
        q: "Is there an age or health reason not to raft even with a jacket?",
        a: "Yes — the real limits are not about swimming. Recent surgery, a heart condition, pregnancy, a back or shoulder injury, or a fear of water severe enough to cause panic are all better reasons to sit it out. Tell us and we will suggest something else.",
      },
    ],
    notFor:
      "Anyone whose fear of water is strong enough that being tipped in would cause panic rather than a fright. A life jacket solves buoyancy, not that — and a panicking passenger is the one genuine hazard on a commercial raft.",
  },

  {
    slug: "rafting-rapid-grades-explained",
    title: "Rafting Rapid Grades, Explained",
    keyword: "ganga rafting rapid grades",
    category: "guide",
    image: "whitewater",
    emoji: "🌊",
    tagline: "What Grade I to Grade IV actually means on the Ganga, and which stretch holds which.",
    meta: [
      { label: "Scale", value: "Grade I–VI" },
      { label: "On the Ganga", value: "I–IV" },
      { label: "Beginner", value: "Grade I–II" },
    ],
    body: [
      "Rapids are graded on an international scale from I to VI. The commercial stretches at Rishikesh run Grade I to Grade IV, and the difference between the ends of that range is much larger than the numbers suggest.",
      "The grade is not a measure of how frightening a rapid looks. It describes how technical the water is — how much the raft has to be actively steered, how long the consequences of a mistake last, and how hard a recovery is. A Grade II rapid can soak everyone aboard and still be a Grade II.",
      "Grades also move with the water level. The same feature can be a comfortable Grade II in late October and a serious Grade III in March, which is why a stretch is quoted as a range rather than a single number.",
    ],
    sections: [
      {
        heading: "What each grade means in the boat",
        paragraphs: [
          "Grade I is moving water with small waves and a clear path through. You get splashed and the guide barely works. Grade II has defined waves and rocks that need avoiding, with wide obvious channels — this is where most first-timers spend their day.",
          "Grade III is where it starts to feel like whitewater: irregular waves big enough to swamp a raft, a route that has to be picked correctly, and paddling that has to be on command rather than enthusiastic. Grade IV is powerful and continuous, with a line that must be hit and a recovery that is genuinely hard work.",
          "Grade V and VI exist and are not run commercially here. If somebody offers you one, they are selling the number rather than the river.",
        ],
      },
      {
        heading: "Which stretch holds which",
        paragraphs: [
          "The 9 km Brahmapuri run is Grade I–II — three or four rapids, long flat water, the family trip. The 16 km Shivpuri stretch is Grade II–III and includes the two rapids everybody has heard of, Roller Coaster and Golf Course; it is the default for a reason.",
          "The 26 km run from Marine Drive adds mileage and more Grade III. The 36 km from Kaudiyala is the full day and the only commercial stretch touching Grade IV, including The Wall and Daniel's Dip. That one is not a first rafting trip.",
        ],
      },
      {
        heading: "Picking by grade rather than by distance",
        paragraphs: [
          "Most people choose a stretch by its length, which is the wrong axis. The 36 km is not simply more of the 16 km — it is harder water with a different level of commitment, and a full day in the raft rather than a couple of hours.",
          "If you want the most whitewater you can comfortably handle on a first trip, that is the 16 km. If you want distance and scenery over difficulty, the 26 km gives both. Tell us which of those you are actually after and we will point you at the right one.",
        ],
      },
    ],
    ownFaqs: [
      {
        q: "What grade are the rapids in Rishikesh rafting?",
        a: "Grade I to Grade IV, depending on the stretch. The 9 km run is I–II, the 16 km is II–III, the 26 km is mostly III, and the 36 km from Kaudiyala reaches Grade IV.",
      },
      {
        q: "Which stretch should a first-timer book?",
        a: "The 16 km Shivpuri run for most people — real Grade II–III rapids with long calm sections between them. The 9 km if you have children along or you are unsure about the water.",
      },
      {
        q: "Does the grade change through the season?",
        a: "Yes. The same rapid is easier in late October as the river drops and harder in the higher water of spring, which is why every stretch is published as a range rather than one number.",
      },
      {
        q: "Is Grade IV dangerous?",
        a: "It is demanding rather than reckless — run with experienced guides, rescue kayak support and a briefing that matters. But it is not a first trip, and a raft full of beginners on Grade IV is a badly sold trip.",
      },
    ],
  },

  {
    slug: "camping-rules-on-the-ganga-beaches",
    title: "Why You Cannot Camp on the Ganga Beaches",
    keyword: "rishikesh beach camping ban",
    category: "guide",
    image: "camping",
    emoji: "⛺",
    tagline: "The riverbank camping everybody searches for, why it stopped, and what replaced it.",
    meta: [
      { label: "Beach camping", value: "Not permitted" },
      { label: "Camps now", value: "Off the bank" },
      { label: "Still includes", value: "Bonfire, tents" },
    ],
    body: [
      "A great deal of what is written about Rishikesh online describes pitching a tent on a white sand beach at the edge of the Ganga, waking up with the river a few steps away. That is a real description of how camping here used to work, and it is no longer how it works.",
      "Riverbank camping on these stretches was stopped on environmental grounds — the cumulative effect of a large number of camps sitting directly on the banks, with the waste and sanitation that came with them, on a river that matters to a great many people for reasons that have nothing to do with adventure.",
      "The camps did not disappear. They moved back from the water onto land above the bank, and that is what is being sold today when you book camping at Rishikesh.",
    ],
    sections: [
      {
        heading: "What camping here looks like now",
        paragraphs: [
          "Swiss tents with proper beds and attached or shared washrooms, on terraced land in the hills above the river rather than on the sand. Most sites are a short walk or a short drive from a river access point, and the better ones have the view without being on the bank.",
          "The bonfire, the meals, the music and the rafting combo are all unchanged. What has changed is the specific image of a tent pitched on sand at the water's edge.",
        ],
      },
      {
        heading: "How to read a camping listing",
        paragraphs: [
          "'Riverside camping' is used loosely and usually means a view of the river or a short walk to it. 'Beach camping' in current listings is either out-of-date copy or a site that should not be operating. Neither is worth an argument on arrival, so ask the direct question before you pay: how far is the tent from the water, and is there a washroom.",
          "We will answer that specifically for any camp we book, including when the answer is a ten-minute walk uphill.",
        ],
      },
      {
        heading: "What this is actually better at",
        paragraphs: [
          "Being off the bank has made camping here more comfortable rather than less. Permanent sites have real beds, plumbing, electricity and kitchens, none of which a tent on sand had, and none of which has to be carried in and out.",
          "It is also a good deal safer. The Ganga here can rise quickly, and a site above the bank does not have to be evacuated when it does.",
        ],
      },
    ],
    ownFaqs: [
      {
        q: "Can you camp on the beach at Rishikesh?",
        a: "No. Camping directly on the Ganga's banks on these stretches is not permitted. Camps operate on land set back from the river, which is what a Rishikesh camping booking means today.",
      },
      {
        q: "Is riverside camping in Rishikesh still available?",
        a: "Yes, in the sense of camps near the river with river views and river access — not in the sense of a tent on the sand. Ask how far the tent is from the water and you will get a straight answer from us.",
      },
      {
        q: "Does the camping still include a bonfire and rafting?",
        a: "Yes. Bonfire nights, meals and the rafting-plus-camping combination all run as before. Only the position of the tents changed.",
      },
      {
        q: "Why was beach camping stopped?",
        a: "Environmental grounds — the waste and sanitation load of many camps sitting directly on the banks of a river that is a drinking-water source and a place of worship for millions of people.",
      },
    ],
    notFor:
      "Anyone whose picture of this trip is specifically a tent on sand at the water's edge. That is not on offer here any more, and a listing promising it is either stale or not legitimate.",
  },

  {
    slug: "first-time-rafting-what-actually-happens",
    title: "Your First Rafting Trip, Hour by Hour",
    keyword: "first time rafting rishikesh what to expect",
    category: "guide",
    image: "rafting",
    emoji: "⏱️",
    tagline: "From the reporting point to the last rapid — what the day is really made of.",
    meta: [
      { label: "On the water", value: "2–3 hrs" },
      { label: "Whole trip", value: "4–5 hrs" },
      { label: "Paddling", value: "Yes, you" },
    ],
    body: [
      "Most first-timers arrive with a reasonable idea of rafting and no idea of the day around it. The water is two to three hours of a four to five hour commitment, and almost everything people find surprising happens outside the raft.",
      "This is the 16 km Shivpuri trip, which is the one most people do. The shape is the same on the other stretches with the distances changed.",
      "Nothing here is a warning. It is just the part that listings leave out, and knowing it is the difference between a good morning and a mildly annoying one.",
    ],
    sections: [
      {
        heading: "Before the water",
        paragraphs: [
          "You report to an office in town, not to the river. Paperwork and payment happen there, you leave what you are carrying in a locker or with the office, and you change into what you are going to get wet in. Then you are driven upstream to the launch point, which takes thirty to forty-five minutes on a hill road.",
          "At the launch you are fitted with a jacket and a helmet and given the briefing, which is where the paddle commands and what to do in the water are covered. The briefing is the five minutes of the day that genuinely matters, and it is the five minutes people talk through.",
        ],
      },
      {
        heading: "On the water",
        paragraphs: [
          "You paddle. This is the commonest surprise — a raft is not a ride, it is steered by the people in it on the guide's commands, and on the bigger rapids that paddling has to be immediate and in time with everyone else. It is not exhausting, but it is work.",
          "Between rapids there are long flat sections where very little happens and the valley is the point. That is where the cliff jump and the body surfing get offered, both optional.",
        ],
      },
      {
        heading: "After, and the things worth knowing",
        paragraphs: [
          "You land at NIM Beach and are driven back to town. Changing facilities at the office are basic — a cubicle, not a spa — so bring a towel and dry clothes and expect to be damp for a while.",
          "Phones do not come on the raft. Leave yours in the locker rather than in a pocket, buy the GoPro package if you want pictures, and accept that the one photo you wanted of the big rapid is the one the river took.",
        ],
      },
    ],
    ownFaqs: [
      {
        q: "How long does a Rishikesh rafting trip take in total?",
        a: "Four to five hours door to door for the 16 km stretch, of which two to three are on the water. The rest is paperwork, changing, the drive upstream and the drive back.",
      },
      {
        q: "Do I have to paddle, or does the guide do it?",
        a: "You paddle. The guide steers and calls commands, and the raft goes where the people in it make it go. It is not hard, but it is participation rather than a ride.",
      },
      {
        q: "Can I take my phone on the raft?",
        a: "No — leave it in the locker at the office. Even in a pouch it is a bad bet. Most operators sell a GoPro photo and video package, which is the realistic way to get pictures.",
      },
      {
        q: "What do I do with my bag and dry clothes?",
        a: "They stay at the office in town, which is where you start and finish. Bring a towel and a full change, and expect the changing facilities to be functional rather than comfortable.",
      },
    ],
  },

  {
    slug: "how-many-days-do-you-need-in-rishikesh",
    title: "How Many Days Do You Need in Rishikesh?",
    keyword: "how many days in rishikesh",
    category: "guide",
    image: "riverValley",
    emoji: "📅",
    tagline: "What one, two, three and five nights actually buy, and where the wasted day usually falls.",
    meta: [
      { label: "Minimum", value: "1 night" },
      { label: "Comfortable", value: "2 nights" },
      { label: "From Delhi", value: "+1 day each way" },
    ],
    body: [
      "The honest answer is two nights for most people, one night if that is all you have, and three or more only if you are adding something outside Rishikesh itself.",
      "What drives this is not the number of activities — it is that the big ones are half-day commitments that cannot be stacked, and that getting here eats a day at each end unless you fly.",
      "The commonest planning mistake is not booking too few days. It is booking three nights and spending the third one looking for something to do, because the two or three things worth doing were done on the first two.",
    ],
    sections: [
      {
        heading: "One night",
        paragraphs: [
          "Enough for exactly one headline activity and the town. Arrive in the afternoon, do the evening aarti at Triveni Ghat, raft the following morning, leave after lunch. That is a real and satisfying trip and it is what most weekend groups from Delhi actually do.",
          "What it will not take is rafting and bungee on the same day. Both are half-day commitments with a drive at either end, and trying to do both is how people end up rushing one and enjoying neither.",
        ],
      },
      {
        heading: "Two nights",
        paragraphs: [
          "The sweet spot. Rafting on one morning, bungee or the swing on the other, the ghats and the cafes in the evenings, and enough slack that a cancelled activity does not ruin the trip. Camping fits naturally into this shape.",
          "If you only read one line of this page, it is this one: two nights is the length at which Rishikesh stops feeling rushed and does not yet start feeling long.",
        ],
      },
      {
        heading: "Three nights and more",
        paragraphs: [
          "Three nights works if the extra day goes somewhere — Devprayag and the confluence, a waterfall trek, a day up towards Chopta, or Haridwar for the evening aarti. It does not work as a third day in Rishikesh town.",
          "Five nights or more only makes sense for something with its own shape: a kayaking course, a yoga or ashram stay, or using Rishikesh as the base for a yatra leg. Those are different trips that happen to start here.",
        ],
      },
    ],
    ownFaqs: [
      {
        q: "Is one day enough for Rishikesh?",
        a: "One night and two part-days is enough for one major activity plus the town. A single day with no night is not — the drive alone takes most of it.",
      },
      {
        q: "Can I do rafting and bungee on the same day?",
        a: "Technically sometimes, realistically no. Each is a half-day with travel at both ends, and doing both in a day means rushing both. Give them a morning each.",
      },
      {
        q: "How many days from Delhi including travel?",
        a: "Add a day at each end by road. A two-night Rishikesh trip is a three-day block from Delhi, which is why the Friday-to-Sunday shape is so common.",
      },
      {
        q: "Is three nights too long in Rishikesh?",
        a: "Only if all three are spent in town. With a day trip out to Devprayag, Haridwar or a waterfall trek, three nights is comfortable rather than long.",
      },
    ],
    notFor:
      "Anyone planning a single day trip from Delhi with no overnight. It is roughly six hours of driving each way for a couple of hours on the ground, and we will say so rather than sell it.",
  },

  {
    slug: "rishikesh-in-winter-what-stays-open",
    title: "Rishikesh in Winter: What Stays Open",
    keyword: "rishikesh in winter activities",
    category: "guide",
    image: "mist",
    emoji: "❄️",
    tagline: "December to February — cold water, clear skies, thin crowds and everything running.",
    meta: [
      { label: "Rafting", value: "Open" },
      { label: "Crowds", value: "Lowest" },
      { label: "Water", value: "Cold" },
    ],
    body: [
      "Winter is the most underrated time to come here and the season people talk themselves out of. Rafting runs, every land activity runs, the air is clear enough to see the hills properly, and the town is at its quietest.",
      "The trade is the water temperature. The Ganga at Rishikesh in January is snowmelt, and that changes rafting from a hot-weather splash into something genuinely bracing. It does not stop it, and most operators will have a wetsuit if you ask.",
      "Rishikesh itself does not get snow — it sits low, in the foothills. Cold mornings and pleasant afternoons, not a snowbound hill station.",
    ],
    sections: [
      {
        heading: "What winter is better at",
        paragraphs: [
          "Visibility and crowds. The haze that sits over the valley through much of the year clears, which matters for the zipline, the swing, the balloon flight and any viewpoint. The rafts are not queuing, the cafes have tables and the ghats are calm.",
          "Prices are softer too, outside the Christmas and New Year week, which is the one genuinely busy stretch of the winter and should be booked well ahead.",
        ],
      },
      {
        heading: "What to actually wear",
        paragraphs: [
          "For rafting, a wetsuit if one is offered, otherwise quick-dry synthetics rather than cotton, and a full change of warm clothes waiting at the office. The cold hits after you get out, not during.",
          "Off the water, layers. Mornings and evenings are genuinely cold by the river and afternoons are mild, and the difference between the two is larger than visitors expect.",
        ],
      },
      {
        heading: "The one thing to reconsider",
        paragraphs: [
          "Cliff jumping and body surfing are optional in any season and are a much bigger ask in January. Plenty of people still do both; plenty more do the raft and skip them, which is entirely reasonable and nobody will comment.",
          "If a January visit is mainly about being in the water rather than on it, the season is working against you and it is worth moving the dates to October or March.",
        ],
      },
    ],
    ownFaqs: [
      {
        q: "Is rafting open in Rishikesh in December and January?",
        a: "Yes. The rafting season runs through the winter — the monsoon is the closed period, not the cold. The water is very cold, so ask about a wetsuit.",
      },
      {
        q: "Does it snow in Rishikesh?",
        a: "No. Rishikesh is in the foothills at low altitude — cold mornings, mild afternoons, no snow. For snow you need to go considerably higher, towards Auli or Chopta.",
      },
      {
        q: "Is winter a good time to visit Rishikesh?",
        a: "It is arguably the best, for clear air and small crowds, as long as you are prepared for cold water if you are rafting. The exception is Christmas and New Year week, which is busy and needs booking ahead.",
      },
      {
        q: "What should I wear for winter rafting?",
        a: "A wetsuit if the operator has one, otherwise quick-dry synthetics and never cotton, plus warm dry clothes waiting for you at the office. The cold bites when you get out.",
      },
    ],
  },

  {
    slug: "alcohol-and-non-veg-rules-in-rishikesh",
    title: "Alcohol and Non-Veg Rules in Rishikesh",
    keyword: "alcohol rishikesh rules",
    category: "guide",
    image: "triveniGhat",
    emoji: "🚯",
    tagline: "What the town restricts, what that means for your camp, and how groups get this wrong.",
    meta: [
      { label: "Alcohol in town", value: "Restricted" },
      { label: "Meat in town", value: "Restricted" },
      { label: "Applies to", value: "Camps too" },
    ],
    body: [
      "Rishikesh and Haridwar are religious cities and both restrict the sale of alcohol and meat within their limits. This is not a guideline or a local preference that a tip resolves — it is a civic restriction, and it is the single thing group bookings most often fail to check.",
      "In practice this means you should not plan on buying either in town, and you should not assume your camp can serve them. Many camps are explicitly dry, including camps whose listings mention a bonfire and music in the same paragraph.",
      "None of this is hidden or awkward to ask about. It just has to be asked before the booking rather than discovered at the camp on a Friday night with twenty people.",
    ],
    sections: [
      {
        heading: "What this means for a camp booking",
        paragraphs: [
          "Ask two direct questions: is the camp licensed for alcohol, and is the kitchen vegetarian. Both answers vary by camp and by exactly where it sits, and both are easy to confirm. We will tell you plainly for any camp we book, including when the answer is no.",
          "Carrying your own into a dry camp is not a workaround — it is grounds for being asked to leave, and on a group booking that is an expensive way to find out.",
        ],
      },
      {
        heading: "Why college and corporate groups get caught",
        paragraphs: [
          "Because the trip is sold on bonfire-and-music photographs and the group assumes the rest. A bonfire night at a dry vegetarian camp is a genuinely good night; it is just a different night from the one some of the group pictured, and the gap between those two is where the complaints come from.",
          "If drinking is central to what the group wants from the weekend, say so when you enquire. That changes which camps are even worth quoting, and it is a much better conversation to have at the enquiry stage.",
        ],
      },
      {
        heading: "The wider point about the town",
        paragraphs: [
          "The restrictions exist because a very large number of people come to Rishikesh for reasons that have nothing to do with adventure, and the town is organised around that first. The ghats at aarti time are the clearest illustration.",
          "Visitors who get this are not inconvenienced by it for long. Visitors who treat it as an obstacle have a worse time than they needed to.",
        ],
      },
    ],
    ownFaqs: [
      {
        q: "Is alcohol banned in Rishikesh?",
        a: "Its sale is restricted within the city limits as a religious city, so do not plan on buying it in town. Whether your camp can serve it depends on the individual camp and its location — ask before booking.",
      },
      {
        q: "Can we drink at our camp near Rishikesh?",
        a: "Some camps permit it and many are dry. It is entirely camp-specific, so make it an explicit question at enquiry rather than an assumption. We will give you a straight answer per camp.",
      },
      {
        q: "Is non-vegetarian food available in Rishikesh?",
        a: "It is restricted within the city limits, and many camp kitchens are vegetarian. If this matters to your group, raise it when you enquire so we quote camps that suit.",
      },
      {
        q: "Can we bring our own alcohol to a dry camp?",
        a: "No. In a dry camp it is grounds for being asked to leave, which on a group booking is a costly way to test the rule.",
      },
    ],
    notFor:
      "A group whose weekend is built around drinking. Say so at enquiry and we will tell you honestly whether what you want exists here, rather than booking you into a dry camp and letting you find out.",
  },

  {
    slug: "rishikesh-with-kids-what-they-can-do",
    title: "Rishikesh with Kids: What They Can Actually Do",
    keyword: "rishikesh with kids activities",
    category: "guide",
    image: "camping",
    emoji: "👧",
    tagline: "Which activities take children, which have hard limits, and the age that changes everything.",
    meta: [
      { label: "Rafting", value: "9 km run" },
      { label: "Bungee", value: "Age limited" },
      { label: "Best base", value: "Camp" },
    ],
    body: [
      "Rishikesh works well with children, but not in the shape the adult itinerary takes. The headline activities split cleanly into ones a child can join, ones with a hard limit that no amount of asking moves, and ones that are fine in principle and miserable in practice.",
      "The dividing line sits around the early teens. Below it, the trip is built around the gentle rafting stretch, the ground-level activities and the camp. Above it, most of the adult list opens up.",
      "Limits on the aerial and jumping activities are set by equipment ratings rather than by operator caution, which is why they are not negotiable. A harness has a weight range, and that is the end of the conversation.",
    ],
    sections: [
      {
        heading: "What works well",
        paragraphs: [
          "The 9 km Brahmapuri rafting run is the family stretch — a few Grade I–II rapids, lots of flat water, short enough that nobody gets cold or bored. Camping is the other reliable win: tents, a bonfire, open space and other children.",
          "On land, the rope courses, wall climbing, water zorbing and go-karting all take younger children. The waterfall trek to Neer Garh is an easy walk with a payoff at the end, and the ghats at aarti time hold children's attention better than most sightseeing.",
        ],
      },
      {
        heading: "What has a hard limit",
        paragraphs: [
          "Bungee, the giant swing, the scad jump and the reverse bungee all carry minimum age and weight requirements, and children below them cannot do these regardless of how keen they are or who signs. Ask us for the current figures before you build a day around one, because a teenager turned away at the platform is a bad afternoon.",
          "The longer rafting stretches, the 26 km and 36 km, are also not children's trips — a full day in a raft on Grade III water is a different proposition from the 9 km run.",
        ],
      },
      {
        heading: "How to shape the trip",
        paragraphs: [
          "Two nights at a camp, the 9 km raft on one morning, a rope course or the waterfall walk on the other, and the aarti one evening. That fills the time without anybody being dragged along.",
          "If the group mixes ages — a nine-year-old and a fifteen-year-old, say — split one morning rather than compromising both. One parent takes the teenager to the swing while the other does the gentle raft, and everybody gets the trip they came for.",
        ],
      },
    ],
    ownFaqs: [
      {
        q: "What is the minimum age for rafting in Rishikesh?",
        a: "Operators set a minimum for the gentle 9 km stretch and a higher one for the longer runs. Tell us your children's ages when you enquire and we will confirm the current figures rather than have you turned away at the river.",
      },
      {
        q: "Can children do bungee jumping in Rishikesh?",
        a: "Only above the operator's minimum age and weight, which are set by the equipment's rating and are not negotiable. Check with us before planning a day around it.",
      },
      {
        q: "Is camping in Rishikesh suitable for young children?",
        a: "Yes, and it is usually the best part of the trip for them. Current camps are permanent sites with real beds and washrooms rather than tents on sand, which makes them much more workable with children.",
      },
      {
        q: "Which rafting stretch is best for a family?",
        a: "The 9 km Brahmapuri run — three or four small rapids, plenty of calm water and short enough that nobody gets cold. Skip the 26 km and 36 km entirely with children.",
      },
    ],
  },

  {
    slug: "what-to-wear-for-river-rafting",
    title: "What to Wear for River Rafting",
    keyword: "what to wear rafting rishikesh",
    category: "guide",
    image: "rafting",
    emoji: "👕",
    tagline: "The one fabric to avoid, the footwear that gets lost, and what to leave at the office.",
    meta: [
      { label: "Avoid", value: "Cotton" },
      { label: "Footwear", value: "Strapped" },
      { label: "Bring", value: "Full change" },
    ],
    body: [
      "Rafting kit comes down to three decisions: what you wear in the raft, what is on your feet, and what you do not bring at all. Each one has a clear right answer and each is routinely got wrong.",
      "The single most useful rule is to avoid cotton. A cotton t-shirt and jeans soak up water, hold it, stop stretching and get cold — and they stay that way for the drive back. Anything synthetic and quick-drying is better, which includes most sportswear you already own.",
      "Everything else follows from the fact that you will be wet, in the sun, and then in a vehicle.",
    ],
    sections: [
      {
        heading: "On your body",
        paragraphs: [
          "Quick-dry shorts or leggings and a synthetic t-shirt or rash guard. Women who would rather not be in a wet t-shirt usually wear a swimsuit or sports kit under a quick-dry layer, which also solves the changing-room question at the end.",
          "In winter, add a thermal layer underneath or ask the operator for a wetsuit. In summer the sun off the water is strong, so a long-sleeved synthetic layer beats sunscreen that washes off in the first rapid.",
        ],
      },
      {
        heading: "On your feet",
        paragraphs: [
          "Sandals with a heel strap, or an old pair of trainers you do not mind soaking. The strap is the whole point: flip-flops and slides come off in the water, and a rapid is where they come off.",
          "Bare feet are allowed in the raft and are a poor idea at the beaches, which are stony rather than sandy at both ends of the trip.",
        ],
      },
      {
        heading: "What stays at the office",
        paragraphs: [
          "Phones, wallets, watches, sunglasses without a strap, jewellery and anything you would be upset to lose. All of it goes into a locker at the office in town where the trip starts, not into a pocket.",
          "Bring a towel and a complete change of clothes and leave them there too. The changing facility is a cubicle, so plan to be quick rather than comfortable, and be glad of dry socks.",
        ],
      },
    ],
    ownFaqs: [
      {
        q: "Can I wear jeans for rafting?",
        a: "You can, and you will regret it. Denim and cotton soak, stay heavy and get cold for the whole drive back. Wear anything synthetic and quick-drying instead.",
      },
      {
        q: "What footwear should I wear for rafting?",
        a: "Sandals with a heel strap, or old trainers. Flip-flops and slides come off in the rapids, and the beaches at each end are stony rather than sandy.",
      },
      {
        q: "Will my phone be safe on the raft?",
        a: "No. Leave it in the locker at the office — even a pouch is a bad bet. Buy the operator's GoPro package if you want photographs of the trip.",
      },
      {
        q: "Do I need a wetsuit?",
        a: "Not in the warmer months. From roughly December to February the water is snowmelt and a wetsuit makes a real difference, so ask whether the operator has one when you book.",
      },
    ],
  },

  {
    slug: "bungee-jumping-weight-and-age-limits",
    title: "Bungee Weight and Age Limits, and Why They Do Not Bend",
    keyword: "rishikesh bungee weight limit",
    category: "guide",
    image: "bungeeJump",
    emoji: "⚖️",
    tagline: "Where the numbers come from, what happens at the weigh-in, and what to do if you are close.",
    meta: [
      { label: "Set by", value: "Equipment rating" },
      { label: "Checked", value: "On the day" },
      { label: "Negotiable", value: "No" },
    ],
    body: [
      "Every jumping activity here — the bungee, the giant swing, the scad jump — carries a minimum and maximum weight and a minimum age. People assume these are the operator being careful. They are not: they are the rated working range of a specific cord and harness, and operating outside it is operating outside the equipment's design.",
      "That is why nobody at the platform can make an exception, and why it is a poor thing to discover on the day. You are weighed before you jump, on a scale, in front of everybody.",
      "The exact figures belong to the operator and are revised when equipment is, so the useful thing this page can do is explain how they work and tell you to confirm the current numbers before you build a trip around a jump.",
    ],
    sections: [
      {
        heading: "Why there is a minimum as well as a maximum",
        paragraphs: [
          "The maximum is intuitive — a cord has a load limit. The minimum surprises people, and it matters just as much: a bungee cord is chosen to decelerate a particular mass over a particular distance, and someone too light for it does not get a gentler jump, they get a worse one, with more rebound and a harness that does not sit correctly.",
          "This is the reason children below the minimum cannot jump no matter who consents. It is not a question of permission.",
        ],
      },
      {
        heading: "If you are close to the limit",
        paragraphs: [
          "Ask us for the operator's current figures and weigh yourself honestly before you travel. If you are within a kilo or two of either end, treat the jump as unconfirmed when you plan the day, and have the swing, the zipline or the rafting as the thing the morning is actually built around.",
          "Do not try to game the weigh-in. The number on the scale decides, the staff have seen every version of the argument, and a refund is a much better outcome than the alternative.",
        ],
      },
      {
        heading: "What you can do instead",
        paragraphs: [
          "The giant swing and the flying fox have their own ranges, which are not identical to the bungee's — being outside one does not automatically rule out the others, so it is worth asking about each rather than assuming.",
          "The zipline, the sky cycle, rafting and the rope courses have far wider tolerances, and between them they make a full day without going near the platform.",
        ],
      },
    ],
    ownFaqs: [
      {
        q: "What is the weight limit for bungee jumping in Rishikesh?",
        a: "The operator sets both a minimum and a maximum, based on the rated range of the cord and harness in use. Ask us for the current figures before you plan around a jump — they change when equipment does.",
      },
      {
        q: "Why is there a minimum weight for bungee?",
        a: "The cord is specified to decelerate a particular mass. Too light for it is not a gentler jump — it is a worse one, with excess rebound and a harness that does not seat properly.",
      },
      {
        q: "Can the staff make an exception if I am just over?",
        a: "No. It is the equipment's rated limit rather than a policy, you are weighed on the day, and nobody at the platform has the authority to waive it.",
      },
      {
        q: "What can I do if I am outside the bungee limits?",
        a: "Check the giant swing and flying fox separately, since their ranges differ. The zipline, sky cycling, rope courses and rafting have much wider tolerances and easily fill a day.",
      },
    ],
    notFor:
      "Anybody whose trip depends on a jump and who is near either end of the weight range. Confirm the figures first — being turned away at the weigh-in after paying for the drive is the worst version of this.",
  },

  {
    slug: "rafting-vs-bungee-which-first",
    title: "Rafting or Bungee First?",
    keyword: "rafting or bungee rishikesh",
    category: "guide",
    image: "bungeeJump",
    emoji: "🤔",
    tagline: "If you only have one morning, or two, which order actually works better.",
    meta: [
      { label: "Each takes", value: "Half day" },
      { label: "Same day", value: "Not advised" },
      { label: "If one only", value: "Rafting" },
    ],
    body: [
      "These are the two things nearly everyone comes to Rishikesh for, they are both half-day commitments in opposite directions from town, and they are the reason a one-night trip has to choose.",
      "If you can only do one, do the rafting. It lasts two to three hours rather than a few seconds, it works for a group of mixed nerve, it has no weight limit to fall foul of, and nobody has ever regretted it.",
      "If you have two mornings, the order genuinely matters, and the better order is the one most people do not pick.",
    ],
    sections: [
      {
        heading: "Why bungee first, if you are doing both",
        paragraphs: [
          "Because the jump is the one you can talk yourself out of, and a night of anticipation after a brilliant day of rafting is how that happens. Get it done on the first morning and the rest of the trip is downhill in the good sense.",
          "There is a practical reason too. If the weather or a weight check stops the jump on day one, you still have day two to try again. Leave it to the last morning and a cancellation ends the trip with the thing you most wanted undone.",
        ],
      },
      {
        heading: "Why not both in one day",
        paragraphs: [
          "Each is a half-day once the drive at either end is counted, and they are in different directions from town. Stacking them means a rushed raft, a rushed jump, and four hours in a vehicle.",
          "People do attempt it and the usual outcome is arriving at the second activity tired, late and no longer enjoying it. If the trip is genuinely one day, pick one.",
        ],
      },
      {
        heading: "How they actually differ",
        paragraphs: [
          "Rafting is a shared, sustained, participatory thing — you paddle, the group works together, there are long calm stretches and conversation. It is sociable.",
          "The bungee is the opposite: a long wait, a short private moment of commitment, and a very large feeling afterwards. One is an experience you have with people; the other is one you have on your own with an audience. Which appeals is a better basis for choosing than which is more famous.",
        ],
      },
    ],
    ownFaqs: [
      {
        q: "Should I do rafting or bungee if I only have time for one?",
        a: "Rafting. It runs two to three hours rather than seconds, suits a mixed group, has no weight limit to fail, and almost nobody comes away disappointed.",
      },
      {
        q: "Can I do bungee and rafting on the same day?",
        a: "Not well. Each is a half-day with travel at both ends and they lie in different directions from town. Give them a morning each, or pick one.",
      },
      {
        q: "If I am doing both, which should come first?",
        a: "The bungee. It is the one nerves can talk you out of overnight, and doing it first leaves a spare morning if weather or a weight check stops the jump.",
      },
      {
        q: "Which is scarier?",
        a: "The bungee, comfortably — but it is a few seconds of fear after a long wait. Rafting is exciting rather than frightening, and most people who are nervous about water are fine once the jacket is on.",
      },
    ],
  },

  {
    slug: "rishikesh-booking-mistakes-to-avoid",
    title: "Six Ways People Get a Rishikesh Booking Wrong",
    keyword: "rishikesh booking mistakes",
    category: "guide",
    image: "mist",
    emoji: "⚠️",
    tagline: "The errors we see every week, in the order they cost the most.",
    meta: [
      { label: "Commonest", value: "Monsoon dates" },
      { label: "Costliest", value: "Group assumptions" },
      { label: "Fixable", value: "All of them" },
    ],
    body: [
      "These are not hypothetical. They are the six things that actually go wrong on enquiries that reach us, ordered by how much trouble they cause, and every one of them is avoided by a single question asked a week earlier.",
      "Most of them come from the same root: Rishikesh is written about enthusiastically and described accurately much less often, so people arrive with a picture assembled from listings rather than from how the place works.",
    ],
    sections: [
      {
        heading: "The three that ruin a trip",
        paragraphs: [
          "Booking rafting inside the monsoon closure. The river is shut from roughly the end of June into September and no price confirms a trip. Anyone who takes that booking is either not reading the dates or not intending to honour them.",
          "Assuming a camp can serve alcohol and non-vegetarian food. Both are restricted in town and many camps are dry and vegetarian. On a twenty-person booking this is the difference between the weekend the group pictured and a row at the gate.",
          "Planning a day around a jump without checking the weight and age limits. They are equipment ratings, not preferences, they are checked on a scale on the day, and nobody at the platform can waive one.",
        ],
      },
      {
        heading: "The three that just waste money",
        paragraphs: [
          "Stacking rafting and bungee into one day. Both are half-days in opposite directions, and the result is two rushed activities and four hours in the car.",
          "Booking three nights for a town that two nights covers, unless the third day goes somewhere — Devprayag, Haridwar, a waterfall trek. A third day in Rishikesh itself is usually a day spent looking for something to do.",
          "Taking the single-day trip from Delhi. It is roughly six hours of driving each way for a couple of hours on the ground, and it is the one enquiry we routinely argue people out of.",
        ],
      },
      {
        heading: "The question that prevents all six",
        paragraphs: [
          "Tell us the dates, the group, and the one thing the trip is really for, before asking for a price. Those three facts are enough for us to say which of the above is about to happen.",
          "We would rather lose a booking at the enquiry stage than take one we expect to go wrong, because the second kind costs more to fix than the first kind was worth.",
        ],
      },
    ],
    ownFaqs: [
      {
        q: "What is the most common Rishikesh booking mistake?",
        a: "Booking rafting for July or August, when the river is closed. The second commonest is assuming a camp can serve alcohol and meat, which many cannot.",
      },
      {
        q: "Why do you advise against a one-day Rishikesh trip from Delhi?",
        a: "Around six hours of driving each way leaves a couple of usable hours. One night turns the same journey into a real trip, which is why we suggest it even though the day trip is an easier sale.",
      },
      {
        q: "What should I tell you when I enquire?",
        a: "Your dates, your group size and ages, and the one activity the trip is really about. That is enough for us to flag anything that is going to go wrong before you pay for it.",
      },
    ],
  },

  {
    slug: "rishikesh-for-solo-travellers",
    title: "Rishikesh on Your Own",
    keyword: "rishikesh solo travel",
    category: "guide",
    image: "yoga",
    emoji: "🧍",
    tagline: "What works alone, what is priced against you, and how the rafts get shared.",
    meta: [
      { label: "Rafting", value: "Shared raft" },
      { label: "Priced per", value: "Person" },
      { label: "Hardest alone", value: "Nearby trips" },
    ],
    body: [
      "Rishikesh is one of the easier places in North India to arrive alone. The activities are sold per person rather than per group, the town is walkable, and a steady flow of solo travellers means nothing about turning up by yourself is unusual.",
      "The one thing to understand is which costs are per person and which are per vehicle, because that is where travelling alone gets expensive and it is not where people expect.",
    ],
    sections: [
      {
        heading: "What is easy alone",
        paragraphs: [
          "Rafting, because rafts are filled from whoever is booked on that slot. You join a boat with other people, which is also the fastest way to meet anybody here. Nobody books out a raft for one.",
          "The bungee, swing, zipline and rope courses are all individual by nature and completely unaffected. So is camping — most camps sell a bed in a shared tent, and the bonfire is a communal thing by design.",
        ],
      },
      {
        heading: "What is priced against you",
        paragraphs: [
          "Anything involving a vehicle. A cab to Devprayag, Chopta or Haridwar costs the same whether one person or four are in it, which makes the day trips the one part of a solo itinerary that stings.",
          "The fix is to ask whether anything is already running on your dates that you can join, or to build the trip around the per-person activities and leave the driving to a day when there are more of you. Tell us you are solo and we will say which of the two makes sense.",
        ],
      },
      {
        heading: "A practical note on the town",
        paragraphs: [
          "The ghats at aarti time, the Beatles Ashram, the cafes on both sides of the river and the walk across Ram Jhula and Lakshman Jhula are all better alone than in a group, and they fill the evenings without planning.",
          "Rishikesh is a dry, vegetarian, early-rising sort of town. Solo evenings here are quiet by the standards of most tourist places, which suits some people exactly and others not at all.",
        ],
      },
    ],
    ownFaqs: [
      {
        q: "Can I do rafting in Rishikesh alone?",
        a: "Yes, and it is the normal way to do it solo. Rafts are filled from everyone booked on that slot, so you join a boat with other people rather than paying for one.",
      },
      {
        q: "Is anything more expensive if I travel alone?",
        a: "Anything with a vehicle. Day trips to Devprayag, Haridwar or Chopta cost the same for one person as for four. The activities themselves are priced per person and are unaffected.",
      },
      {
        q: "Is Rishikesh a good place to travel solo?",
        a: "One of the easier ones — walkable, used to solo visitors, and activities sold individually. It is also dry, vegetarian and quiet in the evenings, which suits some solo travellers and not others.",
      },
    ],
  },

  {
    slug: "rishikesh-adventure-for-large-groups",
    title: "Rishikesh for Groups of Thirty and Up",
    keyword: "rishikesh large group adventure booking",
    category: "guide",
    image: "camp2",
    emoji: "👥",
    tagline: "What breaks at scale, what has to be booked in waves, and the two questions to settle first.",
    meta: [
      { label: "Rafts hold", value: "6–8" },
      { label: "Jumps run", value: "In sequence" },
      { label: "Book ahead", value: "Weeks" },
    ],
    body: [
      "A group of eight and a group of eighty are different logistical problems, and nearly everything that goes wrong on a large booking comes from treating the second as a bigger version of the first.",
      "Two constraints drive the whole plan. A raft holds six to eight people, so a large group is several rafts and they do not all launch at once. And a jump platform processes one person at a time, which means a group of fifty at the bungee is a queue measured in hours, not a slot.",
      "Everything else — rooms, meals, vehicles — scales predictably. These two do not.",
    ],
    sections: [
      {
        heading: "How a large group actually runs",
        paragraphs: [
          "Rafting is split into waves across the morning. Your group will not be on the water simultaneously and should not expect to be; the realistic shape is two or three departures with the rest at the camp or in town.",
          "The jumping activities are worse and need deciding early: either a subset of the group jumps while the others do something else, or you accept a long rotation. Pretending fifty people will all jump in a morning is how a schedule collapses.",
        ],
      },
      {
        heading: "The two questions to settle before quoting",
        paragraphs: [
          "First, is the camp dry and vegetarian, and is that acceptable to this group. On a large college or corporate booking this is the single most frequent cause of a bad weekend, and it is a one-line question at the enquiry stage.",
          "Second, is the group doing everything together or splitting. A group that is willing to split into activity bands fits far more into the same two days, and costs less, than one that insists on moving as a block.",
        ],
      },
      {
        heading: "Lead time, and why it is longer than you think",
        paragraphs: [
          "Camps with thirty-plus beds in one place are limited, and the good ones go weeks ahead for weekends, long weekends and the Christmas–New Year window. Rafting slots for multiple rafts on the same morning need the same notice.",
          "Last-minute large bookings are possible and usually mean splitting across two camps, which is workable but is not what the group pictured. Tell us the headcount early even if the dates are soft.",
        ],
      },
    ],
    ownFaqs: [
      {
        q: "How many people fit in one raft?",
        a: "Six to eight including the guide. A group of forty is six or seven rafts, and they launch in waves across the morning rather than all together.",
      },
      {
        q: "Can a group of fifty all do the bungee in one day?",
        a: "Not realistically — the platform takes one person at a time. Either a subset jumps while the rest do something else, or you plan for a long rotation. Decide which before the day.",
      },
      {
        q: "How far ahead should a large group book?",
        a: "Weeks for a weekend, more for a long weekend or the Christmas and New Year period. Camps that sleep thirty-plus in one place are limited and go early.",
      },
      {
        q: "What is the biggest group you can handle?",
        a: "Groups well into the hundreds, but above roughly thirty the plan changes shape — waves rather than one departure, and sometimes two camps. Give us the headcount early and we will tell you what it looks like.",
      },
    ],
    notFor:
      "A large group that insists on doing every activity together, at the same time, on one day. The constraint is the equipment rather than the booking, and a group willing to split gets a better weekend for less money.",
  },

  {
    slug: "how-fit-do-you-need-to-be",
    title: "How Fit Do You Need to Be?",
    keyword: "rishikesh adventure fitness requirement",
    category: "guide",
    image: "trek",
    emoji: "💪",
    tagline: "Which activities ask something of your body, which ask nothing, and the conditions that matter more than fitness.",
    meta: [
      { label: "Most activities", value: "No fitness bar" },
      { label: "Real limits", value: "Medical" },
      { label: "Hardest", value: "36 km raft" },
    ],
    body: [
      "For most of what is on offer here, the honest answer is that fitness is not the gate. The jumping and flying activities ask nothing physical at all — you are harnessed and gravity does the work — and the standard rafting stretches ask for some paddling rather than any particular condition.",
      "What does matter, and matters much more than fitness, is a short list of medical conditions. Those are the real limits, they apply regardless of how fit you are, and they are worth declaring rather than working around.",
    ],
    sections: [
      {
        heading: "What asks nothing of you",
        paragraphs: [
          "Bungee, the giant swing, the scad jump, the zipline, the flying fox, sky cycling and the balloon flight are all passive once you are clipped in. Weight limits apply; fitness does not.",
          "The 9 km rafting stretch, water zorbing, go-karting, paintball and the wall climbing are all comfortably within reach of anyone who can walk over uneven ground, which is the actual requirement — the beaches and approaches are stony.",
        ],
      },
      {
        heading: "What genuinely asks something",
        paragraphs: [
          "The 26 km and particularly the 36 km rafting stretches. A full day in a raft on Grade III–IV water involves sustained paddling on command, and a tired paddler in a big rapid is a problem for the whole boat. Those two are for people who have rafted before.",
          "Rappelling and rock climbing need some upper-body strength and a head for height. The waterfall treks are easy walks; the longer hill treks out of Rishikesh are proper walking and should be treated as such.",
        ],
      },
      {
        heading: "The conditions that override fitness",
        paragraphs: [
          "Heart conditions, high blood pressure, recent surgery, a back, neck or shoulder injury, epilepsy, vertigo and pregnancy are all reasons to rule out specific activities regardless of how fit somebody is. The jumping activities in particular put a sharp load through the spine and harness.",
          "Tell us at enquiry rather than at the platform. There is almost always something else on the list that works, and the conversation is much easier before money has changed hands.",
        ],
      },
    ],
    ownFaqs: [
      {
        q: "Do I need to be fit for Rishikesh adventure activities?",
        a: "For most of them, no. The jumping and flying activities are passive once harnessed, and the standard rafting stretches need willingness to paddle rather than any particular fitness.",
      },
      {
        q: "Which activity is the most physically demanding?",
        a: "The 36 km rafting stretch — a full day of sustained paddling on Grade III–IV water. The 26 km is next. Neither is a first rafting trip.",
      },
      {
        q: "I have a back problem. What should I avoid?",
        a: "The bungee, giant swing, scad jump and reverse bungee all load the spine sharply. Tell us the specifics and we will point you at what is sensible, which is usually most of the rest of the list.",
      },
      {
        q: "Can I do these activities if I am overweight?",
        a: "Most of them, yes. The constraint on the jumping activities is a stated weight range rather than fitness, so ask us for the current figures. Rafting, ziplines and the land activities have far wider tolerances.",
      },
    ],
  },

  {
    slug: "best-time-to-visit-rishikesh-month-by-month",
    title: "The Best Time to Visit Rishikesh, Month by Month",
    keyword: "best time to visit rishikesh",
    category: "guide",
    image: "riverValley",
    emoji: "🗓️",
    tagline: "Twelve months, what runs, what it costs and what the river is doing.",
    meta: [
      { label: "Best overall", value: "Oct–Nov" },
      { label: "Avoid", value: "Jul–Aug" },
      { label: "Quietest", value: "Jan" },
    ],
    body: [
      "Rishikesh has one closed season and one perfect one, and the ten months in between are better differentiated than most people realise. This is the whole year rather than just the rafting window.",
      "The short version: October and November are the best weeks of the year, March is the second-best, July and August are closed for the river, and the winter is quietly excellent if you do not mind cold water.",
    ],
    sections: [
      {
        heading: "October to December",
        paragraphs: [
          "October and November are the peak for good reason — the monsoon has cleared the air, the river has settled to a strong but manageable level, the temperature is pleasant in the day and cool at night, and everything is running. Book ahead; this is also when everybody else comes.",
          "December is colder and quieter and still fully operational. The Christmas and New Year week is the single busiest period of the winter and needs booking well in advance at prices that reflect it.",
        ],
      },
      {
        heading: "January to June",
        paragraphs: [
          "January and February are the quietest and clearest weeks of the year. Rafting runs, the water is snowmelt-cold, and a wetsuit is worth asking for. Prices are at their softest.",
          "March and April are excellent — warming up, high clean water from the early melt, everything open, and fewer people than the autumn. May and June get genuinely hot in the valley, which pushes activity to early morning, and late June is when the river starts rising towards the closure.",
        ],
      },
      {
        heading: "July to September",
        paragraphs: [
          "July and August are the monsoon closure for rafting. Land activities continue subject to weather, the waterfalls are at their best, the valley is green, and the town is empty and cheap. It is a real option if the river is not the point.",
          "September is the turn. Early September is usually still closed; by late September the river has dropped and the season restarts, often with very good value before the October rush.",
        ],
      },
    ],
    ownFaqs: [
      {
        q: "What is the best month to visit Rishikesh?",
        a: "October or November — clear air, settled river, pleasant temperatures and everything running. March is the next best and is less crowded.",
      },
      {
        q: "What is the worst time to visit Rishikesh?",
        a: "July and August if you want to raft, because the river is closed. If you do not, they are green, quiet and cheap, with the waterfalls at their best.",
      },
      {
        q: "Is Rishikesh too hot in May and June?",
        a: "The valley gets genuinely hot, so activities move to early morning and the afternoons are for shade. The river is at a good level, so it is workable — just start early.",
      },
      {
        q: "When is Rishikesh cheapest?",
        a: "January and February, and the monsoon months. The expensive windows are October to November and the Christmas to New Year week.",
      },
    ],
  },

  {
    slug: "getting-around-rishikesh-without-a-car",
    title: "Getting Around Rishikesh Without a Car",
    keyword: "how to get around rishikesh",
    category: "guide",
    image: "ramjhulaNight",
    emoji: "🛺",
    tagline: "The two sides of the river, the bridges you can and cannot drive, and what you genuinely need a vehicle for.",
    meta: [
      { label: "Bridges", value: "Foot only" },
      { label: "In town", value: "Walkable" },
      { label: "Need a car", value: "Activities" },
    ],
    body: [
      "Rishikesh is two towns with a river between them, and the thing that catches people out is that the famous bridges — Ram Jhula and Lakshman Jhula — are footbridges. You cross them on foot or on two wheels, not in a car.",
      "That single fact shapes how you get around. The core areas are compact and walkable; anything involving a vehicle means a road crossing well away from where you are standing, which takes much longer than the map suggests.",
    ],
    sections: [
      {
        heading: "Within the town",
        paragraphs: [
          "Walk. The stretch from Ram Jhula to Lakshman Jhula along either bank, with the cafes, ashrams and the Beatles Ashram, is a walking distance and is better that way. Shared autos run the main roads cheaply for anything longer.",
          "A scooter is the local answer and the reason scooter rental is a category here. It handles the footbridges, parks anywhere and turns the two sides of the river into one place. If you are comfortable riding, it changes the trip.",
        ],
      },
      {
        heading: "What genuinely needs a vehicle",
        paragraphs: [
          "All of the activities. The rafting reporting point is in town but the launch is thirty to forty-five minutes upstream, the bungee is out at Mohanchatti, and the camps are up in the hills. Every one of those includes transfer in the booking, which is the simplest reason not to arrange your own.",
          "Day trips to Haridwar, Devprayag, Neer Garh and anywhere further are cab journeys. Those are priced per vehicle rather than per person, which is the one place travelling in a small group costs more per head.",
        ],
      },
      {
        heading: "Arriving and leaving",
        paragraphs: [
          "The nearest airport is Dehradun's, about an hour away, and the railway station is in Rishikesh itself with Haridwar a larger hub half an hour off. All three are straightforward cab runs and all three are worth pre-booking rather than negotiating on arrival.",
          "If you are coming from Delhi by road, the drive is long enough that it owns a day at each end — which is the main argument for not attempting Rishikesh as a single day trip.",
        ],
      },
    ],
    ownFaqs: [
      {
        q: "Can you drive across Ram Jhula and Lakshman Jhula?",
        a: "No, both are footbridges — people and two-wheelers only. Crossing by car means a road bridge some distance away, which takes much longer than the map implies.",
      },
      {
        q: "Is Rishikesh walkable?",
        a: "The core areas on both banks are, and the walk between the two bridges is one of the better things to do here. Shared autos cover longer hops on the main roads.",
      },
      {
        q: "Do I need to arrange transport to the rafting or bungee?",
        a: "No — transfers are part of the booking. The rafting launch is thirty to forty-five minutes upstream of the office and the bungee is well out of town, so this is one less thing to organise.",
      },
      {
        q: "Should I rent a scooter in Rishikesh?",
        a: "If you are comfortable riding, yes. It crosses the footbridges, parks anywhere and effectively joins the two sides of the river. If you are not, autos and walking cover the town perfectly well.",
      },
    ],
  },
];
