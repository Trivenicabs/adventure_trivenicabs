import type { Wave3Content } from "./contentWave3";

/* =====================================================================
 * Wave 3, part B — the four rafting stretches and the twelve packages.
 *
 * The stretches had the sharpest duplication problem on the property.
 * Four pages describing four different runs on one river shared a single
 * category paragraph about certified guides and rescue kayaks, so the
 * only thing distinguishing a 9 km beginner float from a Grade IV full
 * day was a number in the title. These are the pages where a reader is
 * making an actual decision, and they were the least equipped to help.
 *
 * Each stretch page now leads with what is different about that run:
 * the put-in, the grade, the named rapids, the time on the water, and
 * who it is wrong for. The grades and distances come from each item's
 * own meta, and the Grade IV features on the 36 km are the two already
 * named elsewhere in this repository.
 *
 * The package pages had a different failure. Every one of them said
 * "everything is bundled at one transparent price", which is true and
 * useless. What a reader needs is what is in the bundle, what is not,
 * and which package they should actually buy — including when the answer
 * is a cheaper one than the one they are looking at.
 * ===================================================================== */

export const wave3Stretches: Record<string, Wave3Content> = {
  "river-rafting-in-rishikesh/9-km-brahmapuri-to-nimbeach": {
    body: [
      "Nine kilometres from Brahmapuri down to Nim Beach, Grade I–II, about an hour on the water. This is the gentle run and it is the right answer far more often than its booking numbers suggest.",
      "Three or four small rapids, wide calm stretches between them, and a put-in close enough to town that the drive up is twenty minutes rather than an hour. Nobody is frightened on this stretch and nobody finishes it exhausted.",
      "It is the stretch for a first-ever raft, for a family where the adults are more nervous than they admit, for grandparents, and for a group where one person is quietly dreading the whole idea.",
    ],
    sections: [
      {
        heading: "What you give up, honestly",
        paragraphs: [
          "The big named rapids are upstream of here. Roller Coaster and Golf Course are on the 16 km run from Shivpuri, and the cliff jump stop is not a reliable feature of the short stretch either.",
          "So if you are reasonably confident in water and you have an extra ₹400 and two more hours, the 16 km is the better trip. The 9 km is not a lesser version of it — it is a different purchase, aimed at people for whom the 16 would be too much.",
        ],
      },
      {
        heading: "Still a real river",
        paragraphs: [
          "Grade I–II is gentle, not inert. You will get wet, you will paddle on command, and the safety briefing and the drill for going overboard happen exactly as they do on every other stretch.",
          "The minimum age is still 14. The short run does not come with a lower age limit, and that is the single most common misunderstanding we correct on this page.",
        ],
      },
    ],
    ownFaqs: [
      {
        q: "Is the 9 km rafting stretch too easy?",
        a: "For a confident adult who wants the named rapids, yes — take the 16 km from Shivpuri instead. For a first-ever raft, a nervous group, older participants or anyone quietly dreading it, the 9 km is the right trip rather than a watered-down one.",
      },
      {
        q: "Can children under 14 do the 9 km stretch?",
        a: "No. The minimum age is 14 on every commercial stretch here including this one, and it is the most frequent misunderstanding about the short run. For younger children, look at the rope course, the zipline or the waterfall trek.",
      },
      {
        q: "How long does the 9 km rafting take in total?",
        a: "About an hour on the water, plus roughly twenty minutes' drive each way to the Brahmapuri put-in and time to kit up and change. Allow two and a half hours door to door.",
      },
    ],
    notFor: "Confident adults chasing rapids — the named whitewater is upstream on the 16 km run, and you will finish this one wishing you had paid the extra ₹400. Still closed to under-14s, like every stretch here.",
  },

  "river-rafting-in-rishikesh/16-km-shivpuri-to-nimbeach": {
    body: [
      "Sixteen kilometres from Shivpuri, Grade II–III, two to three hours on the water. When somebody says they went rafting in Rishikesh, this is almost always the trip they mean, and it is the one we book most.",
      "It has the rapids people name afterwards — Roller Coaster and Golf Course among them — spaced across a run long enough to settle into and short enough that nobody is cold and bored by the end. The cliff jump and the body-surfing stop are both standard features where the water allows.",
      "It is also the stretch with the broadest suitability. A fit sixty-year-old enjoys it; so does a nervous first-timer, once the first rapid has happened.",
    ],
    sections: [
      {
        heading: "Why it is the default recommendation",
        paragraphs: [
          "Grade II–III is the band where rafting is exciting without being frightening. The rapids are big enough to soak the boat and to make the group shout, and small enough that nobody spends the gaps between them dreading the next one.",
          "Three hours is also about the limit of what a first-timer enjoys being wet, paddling and sitting on a tube. The 26 and 36 km runs are not more fun for most people — they are more of the same thing, for longer.",
        ],
      },
      {
        heading: "The drive, which nobody mentions",
        paragraphs: [
          "Shivpuri is thirty to forty-five minutes upstream of town on the gorge road, and that drive is part of your trip. Add it at both ends, plus kitting up and changing at Nim Beach, and a 'three hour' rafting trip is most of a morning.",
          "Book an early slot if you want the rest of the day. The river is also calmer and the light better before the middle of the day.",
        ],
      },
      {
        heading: "What is included on this run",
        paragraphs: [
          "Certified guide, life jacket, helmet and paddle, safety kayak support, and changing rooms at the exit. The cliff jump and body surfing are included rather than extra — they are stops on the trip, which is why they appear on this site at the rafting price.",
          "Both depend on water level and on the guide's call on the day. In a low-water month the jump spot can move or be dropped, and that decision is not negotiable.",
        ],
      },
    ],
    ownFaqs: [
      {
        q: "Is the 16 km rafting stretch good for first-timers?",
        a: "It is the best first trip on this river, and the one most people mean when they say they rafted in Rishikesh. Grade II–III is exciting without being frightening, two to three hours is about as long as a first-timer enjoys being wet, and it includes the cliff jump and body-surfing stops.",
      },
      {
        q: "Which rapids are on the 16 km stretch?",
        a: "The named whitewater of this run includes Roller Coaster and Golf Course, spread across the 16 km with calmer water between. Grades run II–III, which is the band where rafting is thrilling rather than alarming.",
      },
      {
        q: "How much time should I set aside for the 16 km rafting trip?",
        a: "Most of a morning. Two to three hours on the water, plus thirty to forty-five minutes' drive up to Shivpuri, the same coming back from Nim Beach, and kitting up and changing. The drive is the part nobody warns you about.",
      },
      {
        q: "Are the cliff jump and body surfing extra on this stretch?",
        a: "No — both are stops on the trip and included in the rate, which is why they appear on this site at the rafting price. Both depend on water level and the guide's judgement on the day, and in low water the jump can be moved or dropped.",
      },
    ],
    notFor: "Children under 14, who cannot raft here at all. Also not the stretch for somebody who genuinely wants Grade IV — that is the 36 km from Kaudiyala, and it is a different kind of day.",
  },

  "river-rafting-in-rishikesh/26-km-marine-drive-tonim-beach": {
    body: [
      "Twenty-six kilometres from Marine Drive, mostly Grade III, three to four hours on the water. This is the step up from the standard run: more distance, bigger water, and a longer drive to reach the start.",
      "What you are buying over the 16 km is sustained whitewater rather than a few highlights. The rapids come more often and hit harder, and there is less drifting between them.",
      "It is the right stretch for somebody who has rafted before, enjoyed it, and wants more — and the wrong one for a group containing a single reluctant participant, because there is no short version once you are on the water.",
    ],
    sections: [
      {
        heading: "The difference from the 16 km in practice",
        paragraphs: [
          "Grade III rather than II–III means the rapids are consistently substantial. The boat takes more water, the paddling matters more, and the guide's commands are less optional than they feel on the shorter run.",
          "Three to four hours is also long enough that cold becomes a factor in the cooler months. In December and January, this stretch is a genuinely chilly trip and the extra mileage stops being a bonus.",
        ],
      },
      {
        heading: "Commitment, which is the real consideration",
        paragraphs: [
          "Once you launch at Marine Drive, the only way out is downstream to Nim Beach. There is no shortening it, no stopping early and no road pickup in between.",
          "That is worth saying out loud for groups. If one person is unsure, put the group on the 16 km — four hours of Grade III with somebody who wanted two hours of Grade II is a bad day for everybody in the raft.",
        ],
      },
    ],
    ownFaqs: [
      {
        q: "What is the difference between the 16 km and 26 km rafting stretches?",
        a: "Ten kilometres, a grade, and about an hour. The 26 km from Marine Drive is mostly Grade III with rapids coming consistently rather than as highlights, where the 16 km is Grade II–III with calm water between. The 26 also means a longer drive upstream and a longer commitment once you launch.",
      },
      {
        q: "Should I book the 26 km if I have never rafted?",
        a: "No. Do the 16 km first. The 26 is the step up for somebody who has already rafted, enjoyed it and wants sustained whitewater rather than a few named rapids.",
      },
      {
        q: "Can we get off the 26 km stretch partway?",
        a: "No. Once you launch at Marine Drive the only way out is downstream to Nim Beach — there is no shortcut, no early exit and no road pickup in between. That matters if anyone in your group is unsure, in which case book the 16 km.",
      },
    ],
    notFor: "First-time rafters, and any group with one hesitant member — there is no way to cut this run short once you are on the water. Also a cold trip in December and January, when four hours wet stops being a bonus.",
  },

  "river-rafting-in-rishikesh/36-km-kaudiyala-to-nimbeach": {
    body: [
      "Thirty-six kilometres from Kaudiyala, Grade III–IV, a full day. This is the only commercial stretch on this river that touches Grade IV, and it includes The Wall and Daniel's Dip.",
      "It is a genuinely different undertaking from everything above it. The drive up to Kaudiyala is over an hour before you see a raft, the day starts early, and you are on the water long enough that lunch is part of the plan rather than something you do afterwards.",
      "We say this on the hub page and it is worth repeating here: this is not a first rafting trip. Booking the 36 km because it is the biggest number is the most common mistake made on this river, and people regularly finish it having had a worse time than the 16 km would have given them.",
    ],
    sections: [
      {
        heading: "What Grade IV means here",
        paragraphs: [
          "Grade IV is powerful, technical water where a swim is a serious event rather than a funny one, and where the raft depends on everybody paddling when told. It is not dangerous in competent hands; it is simply not casual.",
          "The Wall and Daniel's Dip are the features that earn the grading. Guides will brief them specifically rather than as part of a general safety talk, which tells you something about how they are regarded.",
        ],
      },
      {
        heading: "The full-day logistics",
        paragraphs: [
          "Early start, over an hour of driving up the gorge road to Kaudiyala, a long day on the water with a stop, then the drive back from Nim Beach. Reckon on the whole day being gone and on being tired at the end of it in a way the shorter runs do not produce.",
          "It is also the stretch most affected by water level. Early and late in the season the character changes considerably, and guides may decline to run it at all in some conditions.",
        ],
      },
      {
        heading: "Who should book it",
        paragraphs: [
          "People who have rafted Grade III before and want the harder water. Groups where everybody is fit, confident and actually keen rather than being carried along by one enthusiast.",
          "If any of that is in doubt, the 26 km gives you most of the water with far less of the commitment, and the 16 km gives you the best day most people will have on this river.",
        ],
      },
    ],
    ownFaqs: [
      {
        q: "Is the 36 km rafting stretch suitable for beginners?",
        a: "No, and this is the clearest 'no' on the site. It is Grade III–IV, a full day, and includes The Wall and Daniel's Dip. People book it because it is the biggest number and regularly finish having had a worse time than the 16 km would have given them.",
      },
      {
        q: "What makes the 36 km Grade IV?",
        a: "The Wall and Daniel's Dip, which guides brief specifically rather than folding into the general safety talk. Grade IV is powerful, technical water where a swim is a serious event and the raft genuinely depends on everyone paddling on command.",
      },
      {
        q: "How long is the full day on the 36 km stretch?",
        a: "The whole day. Early start, over an hour of driving up to Kaudiyala before you see a raft, a long run with a stop for lunch, then the drive back from Nim Beach. You will be tired in a way the shorter stretches do not produce.",
      },
      {
        q: "Does the 36 km always run?",
        a: "No. It is the stretch most sensitive to water level — the character changes considerably early and late in the season, and guides may decline to run it in some conditions. That is a judgement call on the day and not one to argue with.",
      },
    ],
    notFor: "Anyone who has not rafted Grade III before, and any group where somebody is being carried along by one keen member. Also closed to under-14s, and subject to the guide's call on water level — this is the stretch most likely to be declined.",
  },
};

export const wave3Packages: Record<string, Wave3Content> = {
  "rishikesh-adventure-packages": {
    body: [
      "This is the index of the combinations, not a package in itself. Below are the bundles we actually sell, with what each is for, so you can skip to the one that fits rather than reading all twelve.",
      "The shortest honest summary: if you have one night, book rafting plus camping at ₹1,599. If you have a weekend, the 1N/2D at ₹1,799 or the weekend package at ₹2,499. If you want the bungee in the bundle, that is ₹4,999 and the jump is most of the cost. If you are a family with children under 14, the family package at ₹1,999 exists because the rafting age limit rules the standard combos out.",
      "Bundles are cheaper than the same items bought separately, mainly because the transport and the camp night are shared across activities rather than because anybody is discounting the activities themselves.",
    ],
    sections: [
      {
        heading: "How to choose in one minute",
        paragraphs: [
          "Count your nights first. One night limits you to rafting plus camping, or rafting plus one height activity plus camping. Two nights is where multi-activity itineraries start making sense and where the 2N/3D at ₹3,499 earns its price.",
          "Then check the ages. Anybody under 14 cannot raft, which rules out most of these bundles as written — the family package is built around that constraint rather than ignoring it.",
          "Then decide whether you want the bungee. At ₹3,700 for the jump alone it dominates any bundle it is in, and the ₹4,999 combo is essentially the jump plus a cheap night rather than a discount on the jump.",
        ],
      },
      {
        heading: "What a package does not include",
        paragraphs: [
          "Travel to Rishikesh, unless you book the Delhi tour that bundles the cab. Personal expenses, GST where applicable, and photo or video add-ons sit outside every bundle.",
          "Where a package lists meals, it lists which ones. Dinner and breakfast at a camp is the norm; lunch on an activity day usually is not.",
        ],
      },
    ],
    ownFaqs: [
      {
        q: "Which Rishikesh adventure package should I book?",
        a: "One night and you want the classic: rafting plus camping at ₹1,599. A weekend: the 1N/2D at ₹1,799 or the weekend package at ₹2,499. Bungee included: ₹4,999, where the jump is most of the cost. Children under 14 in the group: the family package at ₹1,999, which is built around the fact that they cannot raft.",
      },
      {
        q: "Are packages actually cheaper than booking activities separately?",
        a: "Yes, but mostly because the transport and the camp night are shared across activities rather than because the activities themselves are discounted. The saving is real and it is largest on the multi-activity, multi-night bundles.",
      },
      {
        q: "Do packages include travel to Rishikesh?",
        a: "Not unless you book the Delhi to Rishikesh adventure tour, which bundles a round-trip Triveni cab with the package. Everything else assumes you arrive in Rishikesh under your own steam.",
      },
    ],
    notFor: "Nobody — but it is an index rather than a product. If you already know what you want, go straight to that package page; this is here to route you.",
  },

  "rafting-and-camping-package-rishikesh": {
    body: [
      "Sixteen kilometres of rafting, a riverside Swiss tent, a bonfire and all meals, for ₹1,599 per person over one night and two days. This is the best-selling combination here and the one we would pick ourselves.",
      "It works because the two halves solve each other's problem. Rafting on its own is most of a morning and leaves you with an afternoon and no plan; a camp night on its own is pleasant but thin. Together they fill a weekend properly.",
      "The rafting is the 16 km from Shivpuri — Grade II–III, the named rapids, the cliff jump and body surfing where water allows. It is the stretch most people should do and it is the one in this bundle.",
    ],
    sections: [
      {
        heading: "How the two days run",
        paragraphs: [
          "Most itineraries put the camp night first and the rafting on the morning of day two, which works better than the reverse: you arrive, settle, eat, sit by the fire, sleep, then raft and head home dry-ish rather than packing a wet bag into a tent.",
          "If your arrival is late, the order flips and the rafting moves to day one. Tell us your travel times and we will sequence it rather than handing you a fixed schedule.",
        ],
      },
      {
        heading: "What ₹1,599 covers and does not",
        paragraphs: [
          "Covered: the 16 km rafting with guide, jacket, helmet and safety kayak; a twin or triple-sharing Swiss tent; dinner, breakfast and the bonfire; transfers between camp and the river.",
          "Not covered: getting to Rishikesh, lunch on the rafting day, GoPro footage, and the attached-bathroom tent category if you want one. Ask for that last upgrade when you book rather than at check-in.",
        ],
      },
      {
        heading: "The age constraint",
        paragraphs: [
          "Rafting here has a minimum age of 14, so this bundle does not work for a family with younger children. The family package exists precisely for that case and substitutes activities they can actually do.",
          "For a group of adults with one person who does not want to raft, the camp half can be sold alone — say so and we will price it that way instead of charging for a seat in a boat nobody sits in.",
        ],
      },
    ],
    ownFaqs: [
      {
        q: "What does the rafting and camping package include at ₹1,599?",
        a: "The 16 km Shivpuri rafting run with guide and safety gear, a twin or triple-sharing Swiss tent, dinner, breakfast, the bonfire, and transfers between camp and river. Not included: travel to Rishikesh, lunch on the rafting day, GoPro footage, and the attached-bathroom tent category.",
      },
      {
        q: "Should we raft on day one or day two?",
        a: "Day two usually works better — arrive, camp, eat, sit by the fire, sleep, then raft and travel home. It avoids packing a wet bag into a tent. If you arrive late we flip it. Tell us your travel times and we will sequence the two days rather than giving you a fixed schedule.",
      },
      {
        q: "Can we book this package with children under 14?",
        a: "Not as written, because rafting here has a hard minimum age of 14. The family adventure package at ₹1,999 is built for exactly this situation and swaps in activities younger children can do.",
      },
    ],
    notFor: "Families with children under 14 — the rafting age limit makes this bundle unusable and the family package is the right page. Also not for anyone who needs an attached bathroom at the base rate; that is an upgrade worth asking for upfront.",
  },

  "zipline-rafting-camping-package-rishikesh": {
    body: [
      "Zipline, rafting and a camp night for ₹2,199 per person over one night and two days. It adds a height activity to the standard combination for six hundred rupees, which is the best-value upgrade on this site.",
      "The zipline is the right height activity to bundle. It is a 400-metre crossing with up to 140 metres below you, it takes about an hour, and — crucially — nobody has to step off anything. Mixed groups all do it without anyone needing persuading, which is not true of the bungee.",
      "That makes this the package we recommend for a group of friends where appetites differ. Everybody rafts, everybody flies, nobody is left holding bags.",
    ],
    sections: [
      {
        heading: "Why zipline rather than bungee in a bundle",
        paragraphs: [
          "The bungee costs ₹3,700 on its own, so a bundle containing it starts at ₹4,999 and is essentially the jump plus accommodation. The zipline costs ₹1,799 and bundles down to a ₹600 increment here.",
          "The other reason is refusal. A meaningful number of people who pay for a bungee do not jump and do not get a refund. Nobody balks at a zipline, so the money in this package is money actually spent on things you will do.",
        ],
      },
      {
        heading: "Fitting three things into two days",
        paragraphs: [
          "The usual shape is: arrive, zipline in the afternoon, camp and bonfire at night, raft on the morning of day two. That puts the two water-adjacent things on separate days and keeps the morning slot — the better rafting slot — for the river.",
          "It is a full two days. If you are arriving from Delhi on the morning of day one, expect the zipline to be tight and tell us, because moving it to day two is usually possible.",
        ],
      },
    ],
    ownFaqs: [
      {
        q: "What is included in the zipline, rafting and camping package?",
        a: "The 400-metre zipline over the river valley, the 16 km rafting run with guide and gear, a Swiss tent on twin or triple sharing, dinner, breakfast and the bonfire, plus transfers between the camp and the activity sites. ₹2,199 per person over one night and two days.",
      },
      {
        q: "Why does this package use the zipline instead of bungee?",
        a: "Price and refusal rate. The zipline is ₹1,799 standalone and bundles here for about a ₹600 increment, where a bungee bundle starts at ₹4,999 because the jump alone is ₹3,700. And nobody backs out of a zipline, whereas a significant number of people pay for a bungee and do not jump — with no refund.",
      },
      {
        q: "Is two days enough for all three activities?",
        a: "Yes, as zipline on the afternoon of day one, camp overnight, raft on the morning of day two. If you are travelling up from Delhi on the morning of day one it gets tight — tell us and we will usually move the zipline to day two.",
      },
    ],
    notFor: "Anyone whose main goal is the bungee; this is the deliberately gentler, cheaper bundle. If the jump is the point of the trip, pay for the ₹4,999 combo instead of hoping the zipline scratches the same itch.",
  },

  "bungee-rafting-camping-combo-rishikesh": {
    body: [
      "The 83-metre bungee, the 16 km rafting run and a camp night, for ₹4,999 per person over one night and two days. It is the most expensive package here and it is worth understanding what you are paying for.",
      "The jump is ₹3,700 of it. This bundle is the bungee plus a rafting trip and a night's accommodation at close to cost — it is not a discount on the jump, and nobody should book it expecting one.",
      "Book it if the bungee is the reason you are coming to Rishikesh. Do not book it as a way to get a cheap bungee, and do not book it for a group where one person is unsure about jumping.",
    ],
    sections: [
      {
        heading: "The refusal problem, stated plainly",
        paragraphs: [
          "A real proportion of people who pay to bungee do not step off, and the fee is not refunded — the slot, the cord and the crew were committed the moment they were weighed. That is the universal rule for fixed-platform bungee, not a local practice.",
          "In a bundle, that risk is concentrated: if one person in your group of four walks back, you have paid ₹3,700 for them to look at a gorge. For a group with any doubt, the zipline bundle at ₹2,199 or a separately purchased giant swing is the better structure.",
        ],
      },
      {
        heading: "Limits to clear before you book",
        paragraphs: [
          "Maximum weight 110 kg, minimum age 12, and the usual exclusions for heart conditions, high blood pressure, epilepsy, neck and spinal injuries, recent surgery and pregnancy. You are weighed at check-in and the figure is not negotiable.",
          "Check these for everybody in your group before you pay for a bundle built around the jump. Being turned away at the desk is a bad outcome in a package and an expensive one.",
        ],
      },
      {
        heading: "How the two days sit",
        paragraphs: [
          "Bungee on day one, camp and bonfire overnight, raft on the morning of day two is the standard order, and it is the right one — the jump wants a clear head and a morning, and nobody wants to be weighed after a night by a fire.",
          "Allow two to three hours for the bungee site including travel, queue and weigh-in. It is a drive out of town rather than a stop in it.",
        ],
      },
    ],
    ownFaqs: [
      {
        q: "Is the bungee combo package cheaper than booking the bungee separately?",
        a: "Barely, and that is the honest answer. The jump alone is ₹3,700 of the ₹4,999 — you are getting the rafting and the camp night close to cost rather than a discount on the bungee. Book it because the jump is why you are coming, not as a way to get the jump cheaply.",
      },
      {
        q: "What happens if someone in our group refuses to jump?",
        a: "The fee is not refunded, which is the universal rule for fixed-platform bungee — the slot and cord were committed at the weigh-in. In a bundle that risk is concentrated: one person walking back means ₹3,700 spent on looking at a gorge. For a group with any doubt, the ₹2,199 zipline bundle is the better structure.",
      },
      {
        q: "What are the bungee limits in this package?",
        a: "Maximum 110 kg, minimum age 12, and exclusions for heart conditions, high blood pressure, epilepsy, neck and spinal injury, recent surgery and pregnancy. You are weighed at check-in. Check these for everyone in the group before paying for a package built around the jump.",
      },
    ],
    notFor: "Anyone hoping for a cheap bungee — the jump is ₹3,700 of the ₹4,999 and this is not a discount on it. Also a poor structure for a group containing anybody unsure about jumping, since there is no refund for walking back.",
  },

  "camping-and-kayaking-course-rishikesh": {
    body: [
      "Two to four days learning to kayak, with riverside camping throughout, from ₹6,999. This is the only package here that teaches you something you keep.",
      "Everything else on this site is an experience you consume. A kayaking course is a skill, and at the end of a few days you can paddle a boat where you want it to go — which is why this is the one bundle where the length is the point rather than the cost.",
      "It is also the most demanding. Learning to kayak is physically tiring in the back, shoulders and core, and mentally tiring because you capsize repeatedly on the way to not capsizing.",
    ],
    sections: [
      {
        heading: "What you learn, and in what order",
        paragraphs: [
          "Day one is the boat, the paddle, flat water and the wet exit — getting out of an upside-down kayak calmly, which everybody needs and everybody uses.",
          "After that it builds: edging and bracing, reading moving water, ferry glides, and eventually easy rapids with a safety boat. A four-day course gets meaningfully further than a two-day one, and if you have the time the longer version is the better purchase.",
        ],
      },
      {
        heading: "Camping as part of the course",
        paragraphs: [
          "Staying at a riverside camp for the duration means you are at the water each morning rather than commuting to it, and it is why the course and the camping are sold together.",
          "Expect tent accommodation with shared washrooms, meals included, and to be tired enough each evening that the bonfire is a place to sit rather than an event.",
        ],
      },
    ],
    ownFaqs: [
      {
        q: "How long does it take to learn to kayak in Rishikesh?",
        a: "A two-day course gets you paddling competently on flat water with a reliable wet exit. Four days gets you into moving water with edging, bracing and easy rapids. If you have the time, the longer course is distinctly better value — the useful part starts on about day two.",
      },
      {
        q: "Do I need to be fit for a kayaking course?",
        a: "Fitter than for rafting. Learning to kayak works your back, shoulders and core hard because you are fighting the boat rather than riding it, and you capsize repeatedly on the way to not capsizing. Expect to be genuinely tired each evening.",
      },
      {
        q: "What is the accommodation on the kayaking course?",
        a: "A riverside camp for the duration — tents, generally shared washrooms, meals included. Staying at the water rather than commuting to it is the reason the course and the camping are sold as one package.",
      },
    ],
    notFor: "Anyone looking for a passive holiday. This is lessons, repetition and capsizing, and the reward is a skill rather than a story. If you want to be on the river this week without working for it, book rafting.",
  },

  "rishikesh-1-night-2-day-package": {
    body: [
      "One night, two days, ₹1,799 per person, with adventure through the day and a bonfire at night. It is the standard short break and the package most weekend bookings end up on.",
      "The difference from the rafting-plus-camping bundle at ₹1,599 is flexibility: this one is built to be assembled around what you actually want rather than fixed to one activity. Rafting is the usual centrepiece, but it does not have to be.",
      "Two days is less time than it sounds once travel is counted. If you are coming from Delhi, day one is substantially a travel day — 240 km and five to six hours each way.",
    ],
    sections: [
      {
        heading: "What one night realistically fits",
        paragraphs: [
          "One main activity and one small one, plus the camp night. Rafting in the morning of day two and a zipline or rope course on the afternoon of day one is the shape that works.",
          "What does not fit is rafting, bungee and a trek. People try, and the result is a rushed two days with three hours in a car. Pick the two things you most want and do them properly.",
        ],
      },
      {
        heading: "Arriving from Delhi",
        paragraphs: [
          "Leaving Delhi early gets you to Rishikesh by early afternoon, which leaves a usable afternoon. Leaving after work gets you in at night, and day one becomes nothing but the drive.",
          "If your travel is from Delhi and you only have a weekend, the Delhi to Rishikesh adventure tour bundles the round-trip cab and is worth comparing — the car is the expensive part otherwise.",
        ],
      },
    ],
    ownFaqs: [
      {
        q: "What can you actually fit into a 1 night 2 day Rishikesh package?",
        a: "One main activity and one small one, plus the camp night. Rafting on the morning of day two with a zipline or rope course on the afternoon of day one is the shape that works. Rafting, bungee and a trek in two days does not — people try and end up rushing.",
      },
      {
        q: "How is this different from the rafting and camping package?",
        a: "Flexibility. The ₹1,599 rafting-plus-camping bundle is fixed around the 16 km run; this one at ₹1,799 is assembled around whichever activities you want, with rafting as the usual but not compulsory centrepiece.",
      },
      {
        q: "Is 1 night enough if we are coming from Delhi?",
        a: "It is tight. Delhi to Rishikesh is 240 km and five to six hours each way, so day one is largely travel unless you leave early. If you only have a weekend, compare the Delhi to Rishikesh adventure tour, which bundles the round-trip cab.",
      },
    ],
    notFor: "Anyone travelling from Delhi who wants to fit three activities in — the maths does not work with 240 km at each end. Book the 2N/3D or accept doing two things well.",
  },

  "rishikesh-2-night-3-day-package": {
    body: [
      "Two nights, three days, ₹3,499 per person, with a multi-activity itinerary, stays and transfers. This is the first package on this site with enough time in it to do Rishikesh properly rather than efficiently.",
      "Three days means a full activity day in the middle that is not compromised by arriving or leaving. That is the whole value proposition, and it is why this is the bundle we push people towards when they are deciding between it and the 1N/2D.",
      "It also makes the harder things possible. The 36 km rafting stretch, a waterfall trek, a mountain bike half day — anything that eats a full day fits here and does not fit in two.",
    ],
    sections: [
      {
        heading: "The middle day is what you are buying",
        paragraphs: [
          "Day one is arrival and something light. Day three is a morning activity and the journey home. Day two is the one with no travel in it, and it is where the full-day options live.",
          "Use it deliberately. A 36 km raft, or a trek plus an evening at the ghats, or bungee in the morning and the giant swing after lunch — things that do not fit around a drive.",
        ],
      },
      {
        heading: "How transfers work here",
        paragraphs: [
          "Local transfers between your stay and the activity sites are included, which matters more over three days than two — Shivpuri, the bungee site and the waterfalls are in three different directions and all of them are drives.",
          "Travel to and from Rishikesh is not included unless you add it. Say where you are coming from and we will quote the cab alongside.",
        ],
      },
      {
        heading: "Mixed groups do better with three days",
        paragraphs: [
          "Over two days a group has to agree. Over three there is room for the people who want the bungee to do it while the people who want the ghats and a cafe do that, and for everybody to raft together on the morning of day three.",
          "That is worth the ₹1,700 difference for most groups of friends or families, and it is the single most common reason people upgrade after talking to us.",
        ],
      },
    ],
    ownFaqs: [
      {
        q: "Is the 2 night 3 day package worth the extra over 1 night 2 days?",
        a: "For most groups, yes. The difference is a middle day with no travel in it, which is where the full-day options live — the 36 km raft, a waterfall trek, a mountain bike half day. It is also what lets a mixed group split up for a day instead of having to agree on everything.",
      },
      {
        q: "What does the 2N/3D package include?",
        a: "Two nights' stay, a multi-activity itinerary built around your preferences, meals as specified, and local transfers between your accommodation and the activity sites — which matters over three days because Shivpuri, the bungee site and the waterfalls are in three different directions.",
      },
      {
        q: "Does it include travel from Delhi?",
        a: "Not unless you add it. Tell us where you are travelling from and we will quote the cab alongside the package — Delhi is 240 km and five to six hours each way.",
      },
    ],
    notFor: "Anybody on a strict two-day window; the whole point here is the third day, and paying for it without being able to use it makes no sense.",
  },

  "weekend-adventure-package-rishikesh": {
    body: [
      "Friday to Sunday, ₹2,499 per person, with a Delhi pick-up option. This is the 1N/2D package rebuilt around the way most people actually travel — leaving after work on Friday and getting back on Sunday evening.",
      "The Friday-night arrival is the design feature. Rather than losing a day to the drive, you travel in the evening, sleep at the camp, and wake up with two usable days in front of you.",
      "It is the package for working people in Delhi and the NCR, and the Delhi pick-up is what makes it work — 240 km each way is the part that ruins a weekend if you have to arrange it yourself.",
    ],
    sections: [
      {
        heading: "The Friday night drive",
        paragraphs: [
          "Leaving Delhi in the evening puts you in Rishikesh late — five to six hours on the road, and it is a hill approach at the end. Most people sleep on the way and arrive at camp ready for bed rather than a bonfire.",
          "The trade-off is a full Saturday. That is the difference between this and a 1N/2D starting Saturday morning, where half of Saturday is the drive.",
        ],
      },
      {
        heading: "What fits in a weekend",
        paragraphs: [
          "Saturday is the big day: rafting in the morning, a height activity in the afternoon, bonfire at night. Sunday morning takes one more thing — a trek, a zipline, or a slow breakfast and the ghats — before the drive home.",
          "Leave Rishikesh by early afternoon on Sunday. The Delhi road on a Sunday evening is the worst part of this trip and getting ahead of it is worth sacrificing an activity for.",
        ],
      },
    ],
    ownFaqs: [
      {
        q: "How does the weekend package work with a Friday night start?",
        a: "You leave Delhi in the evening, drive five to six hours, and sleep at the camp — which buys you a full Saturday instead of losing half of it to the road. That is the whole design, and it is the difference between this and a Saturday-morning start.",
      },
      {
        q: "What can we do in a Rishikesh weekend?",
        a: "Saturday carries the load: rafting in the morning, a height activity in the afternoon, bonfire at night. Sunday morning fits one more thing before the drive. Leave by early afternoon on Sunday — the Delhi road on a Sunday evening is worth sacrificing an activity to avoid.",
      },
      {
        q: "Is the Delhi pick-up included?",
        a: "It is an option on this package rather than baked into the ₹2,499, and it is the part that makes a weekend workable — 240 km each way is what otherwise ruins the trip. Tell us where in Delhi or the NCR you are starting and we will quote it.",
      },
    ],
    notFor: "Anyone who cannot sleep in a moving car, since the design depends on a Friday-night drive. If that is you, take a Saturday-morning start and accept losing half a day.",
  },

  "family-adventure-package-rishikesh": {
    body: [
      "₹1,999 per person, built around one hard constraint: rafting in Rishikesh has a minimum age of 14, and that rules children out of almost every other package on this site.",
      "So this one does not pretend otherwise. It substitutes activities that younger children can genuinely do — the rope course, the climbing wall, the zipline, water zorbing, a waterfall walk — and keeps the camp night and the bonfire, which is the part children remember anyway.",
      "If your children are 14 or over, you do not need this package. Book the rafting-plus-camping bundle and save the money.",
    ],
    sections: [
      {
        heading: "What children under 14 can actually do here",
        paragraphs: [
          "The low rope course takes genuinely small participants and the high course depends on harness fit. Wall climbing is auto-belayed and is the best first vertical activity for a child. Water zorbing is fifteen rupees-per-minute of pure silliness and often the highest-rated thing of the trip.",
          "The zipline has the widest suitability of the height activities, set by harness fit rather than a published age — tell us ages and rough heights and we will confirm before you travel rather than at the gate.",
          "The waterfall walk is fine for children who walk, with places to stop. In and after the monsoon it is the best-value half day on this site.",
        ],
      },
      {
        heading: "The camp night with children",
        paragraphs: [
          "Ask for a quieter site. Shared camps in peak season mix families with groups of twelve who came for a loud night, and the family loses that negotiation every time.",
          "Also ask about the attached-bathroom tent category. It costs more and with young children it is usually worth it — the shared-block arrangement at the base rate is the thing parents most often wish they had known about.",
        ],
      },
      {
        heading: "Gentle rafting, when it applies",
        paragraphs: [
          "If some of your party is 14 or over, the 9 km Brahmapuri stretch is the gentle run — Grade I–II, about an hour, no big rapids. It is the right first raft for a family where the adults are more nervous than they are letting on.",
          "The under-14s still cannot go. There is no stretch here with a lower limit and anyone offering one should be treated with suspicion.",
        ],
      },
    ],
    ownFaqs: [
      {
        q: "Can children go rafting in Rishikesh?",
        a: "Not under 14 — the limit applies to every commercial stretch including the 9 km, and nobody here can waive it. That single rule is why this package exists: it substitutes the rope course, wall climbing, the zipline, water zorbing and a waterfall walk, all of which younger children can genuinely do.",
      },
      {
        q: "What adventure activities can young children do in Rishikesh?",
        a: "The low rope course takes small participants, wall climbing is auto-belayed and is the best first vertical activity for a child, water zorbing is fifteen minutes of silliness they will rate higher than anything else, and the waterfall walk is fine for children who walk. The zipline is usually possible and depends on harness fit — send us ages and heights and we will confirm before you travel.",
      },
      {
        q: "Should we book this package if our kids are over 14?",
        a: "No — book the rafting and camping bundle at ₹1,599 instead and save the money. This package exists specifically to work around the rafting age limit.",
      },
      {
        q: "What should we ask for at the camp with young children?",
        a: "A quieter site and the attached-bathroom tent category. Shared camps in peak season put families next to groups who came for a loud night, and the shared washroom block at the base rate is the thing parents most often wish they had asked about.",
      },
    ],
    notFor: "Families whose children are all 14 or over — you are paying ₹400 extra for a workaround you do not need. Book rafting and camping instead.",
  },

  "corporate-team-outing-rishikesh": {
    body: [
      "Team-building, rope courses and adventure for groups of ten to two hundred, from ₹2,499 per person over one or two days. We have a cab business behind this, which is usually the part that decides a corporate booking.",
      "The activity that actually works for a company group is the rope course, and it works because the team-building is structural rather than claimed: the obstacles need somebody spotting, holding or talking a colleague across, and that happens without a facilitator asking anyone to do a trust exercise.",
      "Build the day around that, put rafting in the afternoon and a bonfire at night, and you have a programme that does not feel like a programme.",
    ],
    sections: [
      {
        heading: "What scales and what does not",
        paragraphs: [
          "Scales well: rope courses, paintball, rafting, camping, bonfires. Two hundred people can do all of these in rotation without anybody waiting an hour.",
          "Scales badly: bungee, the giant swing, SCAD. These are one-at-a-time activities with a weigh-in and a queue, and a group of fifty will spend the day standing in line. Offer them as an optional add-on for the ten people who want them rather than as a group activity.",
        ],
      },
      {
        heading: "The age and health problem in a big group",
        paragraphs: [
          "At thirty people and up, you will have participants who cannot raft, cannot jump, or should not do either, and in a corporate setting nobody wants to disclose that in front of colleagues.",
          "Build an alternative into the schedule rather than handling it on the day. A rope course, a waterfall walk and a cafe afternoon give people somewhere to be that is not sitting out, which is what makes the difference to how the day is remembered.",
        ],
      },
      {
        heading: "Transport, invoicing and the practical side",
        paragraphs: [
          "Delhi and the NCR to Rishikesh is 240 km and five to six hours. For a group, that means coaches or multiple vehicles and a departure time that accounts for the hill approach at the end. We run this half of it as a cab business and quote it properly.",
          "GST invoicing, a single point of coordination on the ground, and a written itinerary are standard rather than requests — tell us the headcount and dates and the quote comes with all three.",
        ],
      },
    ],
    ownFaqs: [
      {
        q: "What is the best team-building activity in Rishikesh for a corporate group?",
        a: "The rope course, because the team-building is built into it rather than bolted on — the obstacles require spotting, holding and talking colleagues across, which happens without anyone being asked to do a trust exercise. Build the day around it with rafting in the afternoon and a bonfire at night.",
      },
      {
        q: "How large a group can you handle?",
        a: "Up to around two hundred. Rope courses, paintball, rafting, camping and bonfires all rotate well at that scale. What does not scale is bungee, the giant swing and SCAD — they are one-at-a-time with a weigh-in, so offer them as an optional add-on rather than a group activity, or fifty people will spend the day in a queue.",
      },
      {
        q: "How do you handle people in the group who cannot raft or jump?",
        a: "By building an alternative into the schedule rather than dealing with it on the day. Above thirty people you will have participants who cannot or should not do the headline activities, and in a work setting nobody wants to say so in front of colleagues. A rope course, waterfall walk and cafe afternoon give them somewhere to be that is not sitting out.",
      },
      {
        q: "Do you provide GST invoicing and transport for corporate groups?",
        a: "Yes, both as standard — GST invoicing, a single on-ground coordinator and a written itinerary come with the quote. Transport is our own business: Delhi and the NCR to Rishikesh is 240 km and five to six hours, so group travel means coaches or multiple vehicles, quoted properly rather than estimated.",
      },
    ],
    notFor: "Small groups under about ten, who will get better value booking activities directly. Also the wrong structure if the bungee is meant to be the group's shared experience — it is a queue, not an event.",
  },

  "college-group-trip-rishikesh": {
    body: [
      "₹1,299 per person, which is the lowest rate on this site, with group pricing, bonfire nights and a schedule built for people who want to do everything. One or two days.",
      "College groups are the easiest bookings we take and the ones where the honest advice matters most, because the thing that goes wrong is always the same: a group of forty assumes everybody can do everything, and then discovers at the river that two people cannot swim and one has never mentioned their asthma.",
      "Collect the ages and anything medical before you travel, not at the put-in. It is the whole difference between a good trip and a day of improvising.",
    ],
    sections: [
      {
        heading: "Where the rate comes from",
        paragraphs: [
          "Group pricing at ₹1,299 works by sharing the fixed costs — transport, the camp, the guide ratio — across a large headcount. It is genuinely cheaper rather than a stripped-down product, but it depends on the group actually being large and travelling together.",
          "A whole-camp booking is usually the right structure above about twenty people. It is cheaper per head than individual tents and it means the music and the cut-off are your problem rather than a negotiation with a family at the next fire.",
        ],
      },
      {
        heading: "The bonfire, and the cut-off",
        paragraphs: [
          "Camps run under local noise rules and the music stops earlier than a college group expects. This is the single most common disappointment, and it is avoidable: tell us a loud night matters and we will put you somewhere that can do it rather than letting you find out at eleven.",
          "A whole-camp booking helps here too, because the limit then comes from the licence rather than from other guests.",
        ],
      },
      {
        heading: "Getting forty people organised",
        paragraphs: [
          "One person as the single contact, a WhatsApp group, and the medical and age list before departure. That is all the structure a college trip needs and the absence of it is what makes them stressful.",
          "Rafting has a minimum age of 14, which rarely binds for a college group, but the health exclusions for bungee do — heart conditions, blood pressure, epilepsy, spinal injury. Ask once, privately, in writing, before anybody pays for a jump.",
        ],
      },
    ],
    ownFaqs: [
      {
        q: "What is the cheapest Rishikesh trip for a college group?",
        a: "The college group rate at ₹1,299 per person, which works by spreading transport, camp and guide costs across a large headcount. It is genuinely cheaper rather than a cut-down product, but it needs the group to actually be large and travelling together.",
      },
      {
        q: "Can we book a whole camp for our college group?",
        a: "Yes, and above about twenty people it is usually the right structure — cheaper per head than individual tents, and it means the music cut-off is set by the site licence rather than by a family at the next fire.",
      },
      {
        q: "Will the music really stop early?",
        a: "Earlier than your group expects, under local noise rules, and it is the most common disappointment on college trips. It is also avoidable — tell us a loud night is the priority and we will put you somewhere that can accommodate it instead of letting you discover the limit at eleven.",
      },
      {
        q: "What should we collect from the group before we travel?",
        a: "Ages, swimming ability and anything medical — in writing, privately, before anybody pays. The thing that goes wrong on big group trips is always discovering at the river that two people cannot swim and one has asthma nobody mentioned.",
      },
    ],
    notFor: "Groups under about fifteen, where the per-head pricing stops working and a standard package is better value. Also the wrong booking if nobody in the group is willing to be the single point of contact.",
  },

  "delhi-to-rishikesh-adventure-tour": {
    body: [
      "A round-trip Triveni cab from Delhi bundled with your Rishikesh adventure package, from ₹3,999 per person over two to three days. This is the one package on this site where the transport is the product.",
      "Delhi to Rishikesh is 240 km and five to six hours each way, and for most people arranging that is the hardest part of the trip. A train gets you to Haridwar and leaves you 25 km short; a bus is cheap and slow; driving yourself means doing the hill approach after five hours at the wheel.",
      "This is also where the two halves of our business actually join up — Triveni Cabs is the cab company, and the adventure side is this property. The vehicle is ours rather than subcontracted.",
    ],
    sections: [
      {
        heading: "Why the cab usually wins over the train",
        paragraphs: [
          "The train to Haridwar is comfortable and then you are still 25 km from Rishikesh, with a transfer to arrange at both ends and your activity sites a further 30 to 45 minutes up the gorge road.",
          "A cab goes door to door, carries the bags, and — the part that matters most — can take you to Shivpuri, the bungee site and the waterfalls, which are in three different directions and all of them drives. Without a vehicle in Rishikesh you are paying for local transfers all weekend anyway.",
        ],
      },
      {
        heading: "Departure timing",
        paragraphs: [
          "Leaving Delhi early on day one gets you to Rishikesh by early afternoon with a usable half day. Leaving in the evening gets you there at night and buys you a full first morning instead — both work, and which is better depends on whether you can sleep in a car.",
          "Coming back, leave Rishikesh by early afternoon. The Delhi approach on a Sunday evening is genuinely bad and getting ahead of it is worth dropping an activity for.",
        ],
      },
      {
        heading: "What is bundled",
        paragraphs: [
          "The round-trip vehicle with driver, tolls, parking and driver allowance, plus the adventure package and stay you choose. Local running in Rishikesh to the activity sites is included because the car is with you.",
          "Vehicle choice matters for a group — a sedan for two, an SUV for four, a tempo traveller above that. Tell us the headcount and the luggage and we will put you in the right one rather than the cheapest.",
        ],
      },
    ],
    ownFaqs: [
      {
        q: "How far is Delhi to Rishikesh and how long does it take?",
        a: "240 km, about five to six hours door to door, with a hill approach at the end. That drive is why this package exists — for most people, arranging the travel is harder than arranging the adventure.",
      },
      {
        q: "Is a cab better than the train for Rishikesh?",
        a: "Usually, yes. The train gets you to Haridwar and leaves you 25 km short with transfers at both ends, and your activity sites are another 30 to 45 minutes up the gorge road. A cab goes door to door and then takes you to Shivpuri, the bungee site and the waterfalls — three different directions, all drives. Without a vehicle you pay for local transfers all weekend anyway.",
      },
      {
        q: "When should we leave Delhi?",
        a: "Early morning gets you in by early afternoon with a usable half day. Evening gets you in at night and buys you a full first morning. Both work — it depends on whether you can sleep in a car. Coming back, leave Rishikesh by early afternoon to get ahead of the Sunday evening approach to Delhi.",
      },
      {
        q: "What vehicle will we get?",
        a: "Sedan for two, SUV for four, tempo traveller above that — with driver, tolls, parking and driver allowance included, plus local running to the activity sites. Tell us headcount and luggage and we will put you in the right vehicle rather than the cheapest one that technically fits.",
      },
    ],
    notFor: "Anyone already in or near Rishikesh, or travelling from somewhere other than Delhi — tell us where you are starting and we will quote that route instead rather than selling you a Delhi round trip.",
  },
};
