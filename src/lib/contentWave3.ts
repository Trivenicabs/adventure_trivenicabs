import type { Item } from "./data";
import { wave3Stretches, wave3Packages } from "./contentWave3b";
import { wave3Rentals, wave3BikeTours } from "./contentWave3c";
import {
  wave3Yatra,
  wave3Haridwar,
  wave3Nearby,
  wave3Guides,
} from "./contentWave3d";

/* =====================================================================
 * Wave 3 — October 2026
 *
 * The 79 pages that were still rendering category boilerplate.
 *
 * WHY THIS FILE EXISTS
 * --------------------
 * intro(), includes(), excludes(), carry() and faqs() in content.ts are
 * keyed on `category`. That meant all 26 activity pages opened with the
 * same paragraph about government-licensed operators, and answered the
 * same seven questions, with only the title swapped in. Measured across
 * the property, an original page was 6.4% unique against its siblings.
 *
 * A page whose only distinguishing text is its own title has nothing of
 * its own to rank on, and — more to the point — tells a reader nothing
 * they could not have guessed from the listing they clicked.
 *
 * WHAT IS IN HERE AND WHAT IS NOT
 * -------------------------------
 * Everything below is written from one of three sources:
 *
 *   1. The item's own data — the heights, weights, minimum ages, grades,
 *      distances, durations and prices already in data.ts. Where a page
 *      states a number, that number comes from the listing beside it.
 *   2. Facts already established elsewhere in this repository: Delhi to
 *      Rishikesh is 240 km and 5–6 hours, Haridwar is about 25 km, Jolly
 *      Grant is the nearest airport, the monsoon rafting suspension is
 *      administrative and runs from roughly late June to September, and
 *      the stretch grades are I–II / II–III / III / III–IV.
 *   3. Geography and logistics that are checkable by anyone standing in
 *      Rishikesh — where Shivpuri is relative to town, which bank Laxman
 *      Jhula crosses, that Neer Garh needs a walk.
 *
 * What is deliberately absent: operator names, certification numbers,
 * participant counts, review quotes, named instructors, and any height,
 * weight or age limit that is not already in the item's own meta. Triveni
 * books these activities through licensed operators rather than running
 * the towers and rafts itself, and the writing keeps that frame — it says
 * what an activity is and who it suits, not what our equipment is.
 *
 * `notFor` is used properly here. Every page that can sensibly turn a
 * reader away does so. A page that admits who should skip it is more
 * useful than one that claims to suit everybody, and it is the single
 * biggest difference between this writing and the boilerplate it replaces.
 * ===================================================================== */

export type Wave3Content = Pick<Item, "body" | "sections" | "ownFaqs" | "notFor">;

export const wave3Activities: Record<string, Wave3Content> = {
  /* ================================================================
   * ACTIVITIES (26)
   * ================================================================ */

  "river-rafting-in-rishikesh": {
    body: [
      "Rafting at Rishikesh is one river run in four lengths. Everyone puts in upstream on the Ganga and takes out at Nim Beach; the only real decision is how far upstream you start, and that decision sets the grade, the price and most of your day.",
      "Nine kilometres from Brahmapuri is Grade I–II and genuinely gentle. Sixteen from Shivpuri is the one most people mean when they say they rafted in Rishikesh — Grade II–III, two to three hours on the water, with Roller Coaster and Golf Course in the middle of it. Twenty-six from Marine Drive adds mileage and more Grade III. Thirty-six from Kaudiyala is a full day and the only commercial stretch that touches Grade IV.",
      "All of it stops for the monsoon. The suspension is administrative rather than an operator's weather call, it usually runs from around the end of June until the river drops in September, and while it is in force nobody is rafting at any price.",
    ],
    sections: [
      {
        heading: "Choosing a stretch honestly",
        paragraphs: [
          "If it is your first time and you are bringing children or nervous adults, take the 9 km. It is short, the rapids are small, and nobody finishes it wishing they had done less.",
          "If you want the trip people describe afterwards, take the 16 km. It has the named rapids, it includes the cliff jump and the body-surfing stop where the water allows, and three hours is about as long as a first-timer enjoys being wet.",
          "The 26 and 36 km runs are for people who have rafted before and want water rather than scenery. The 36 in particular is a full day with an early start, a long drive upstream before you even see the raft, and sustained Grade III–IV — it is not a first rafting trip, and booking it as one is the most common mistake made on this river.",
        ],
      },
      {
        heading: "What the day actually looks like",
        paragraphs: [
          "You report in town, get kitted with a life jacket and helmet, and are driven upstream to the put-in. The drive is part of the trip and nobody mentions it in advance — reckon on 30 to 45 minutes for Shivpuri and over an hour for Kaudiyala, on a road that climbs along the gorge.",
          "The safety briefing before launch is not a formality. It covers paddling commands, what to do if you go in the water, and how to get back into the raft, and it is rehearsed rather than described. Guides steer; passengers paddle on command.",
          "You finish at Nim Beach, change there, and are driven back into town. Add an hour either side of the water time for all of this when you plan the rest of the day.",
        ],
      },
      {
        heading: "The minimum age is 14, and it is enforced",
        paragraphs: [
          "Fourteen is the floor on every commercial stretch here, including the easy one. Families travelling with younger children are better served by the rope course, the zipline or the waterfall trek, all of which take smaller participants.",
          "There is no upper age limit, but the stretches differ enormously in how physical they are. A fit 60-year-old will enjoy the 16 km. Nobody of any age enjoys the 36 km without having rafted before.",
        ],
      },
    ],
    ownFaqs: [
      {
        q: "Which rafting stretch should a first-timer book in Rishikesh?",
        a: "The 16 km from Shivpuri, unless you are bringing children or anxious adults — then the 9 km from Brahmapuri. The 16 km is Grade II–III, takes two to three hours on the water, and includes the rapids and the cliff jump that people actually remember. Avoid the 36 km: it is Grade III–IV and a full day, and it is the wrong introduction to the river.",
      },
      {
        q: "Can non-swimmers go rafting in Rishikesh?",
        a: "Yes. Everyone wears a life jacket regardless of ability, and the brief before launch covers exactly what happens if you end up in the water. Tell your guide at the start — not because you will be refused, but because they will seat you accordingly and keep an eye on you at the swim stop.",
      },
      {
        q: "What is the minimum age for rafting in Rishikesh?",
        a: "14 years, on every stretch including the 9 km. Participants under 18 need a parent or guardian's consent. If your group includes younger children, the rope course, zipline and waterfall trek are the activities to look at instead.",
      },
      {
        q: "Is rafting running on my dates?",
        a: "It runs from roughly September to June and is suspended through the monsoon by the local administration, usually from around the end of June. The reopening date moves each year because it follows the water level rather than the calendar. Send us your dates and we will tell you straight whether the river is open — including when the answer is no.",
      },
    ],
    notFor: "Children under 14, who cannot raft here at any price on any stretch. And if you are booking the 36 km as your first-ever rafting trip, reconsider — it is a full day of Grade III–IV and people regularly finish it having had a worse time than the 16 km would have given them.",
  },

  "bungee-jumping-in-rishikesh": {
    body: [
      "An 83-metre jump from a cantilever platform built out over a gorge, which makes it the highest fixed-platform bungee in India. The number matters less than the geometry: because the platform projects from the hillside rather than sitting on a bridge, there is nothing underneath you at the edge, and that is what people find hard.",
      "The limits are firm. Maximum weight 110 kg, minimum age 12, and you are weighed at check-in — the figure is written on your hand and it determines which cord you jump on. Nobody is talked up or down from it.",
      "Budget two to three hours for a jump that lasts a few seconds. Most of that is queueing, the weigh-in, the harness check and the walk out onto the platform.",
    ],
    sections: [
      {
        heading: "What happens at the edge",
        paragraphs: [
          "You are harnessed at the ankles, walked to the lip, and told to look out rather than down. The jump masters count you out. They will not push you and they will not argue with you for long — if you freeze, you get a short while to find it, and then you walk back.",
          "The free fall is about three seconds. The rebound is the part nobody describes: you come back up most of the way, fall again, and keep oscillating for longer than feels reasonable before the winch lowers you to the landing area.",
        ],
      },
      {
        heading: "Who gets turned away",
        paragraphs: [
          "Over 110 kg, under 12, or pregnant: no jump. Heart conditions, high blood pressure, epilepsy, recent fractures, neck or spinal injuries, and recent surgery are all disclosed on the waiver and all of them can end your day at the desk.",
          "This is worth knowing before you travel rather than after, because the jump is not in Rishikesh town — it is a drive out, and being turned away at the top after the trip up is a wasted morning.",
        ],
      },
      {
        heading: "On backing out",
        paragraphs: [
          "A meaningful number of people who pay do not jump, and the fee is not refunded if you walk back. That is the standard across fixed-platform operations everywhere and it is not a local sharp practice — the slot, the cord and the crew were committed the moment you were weighed.",
          "If you suspect you might not go through with it, the giant swing is the more forgiving purchase. It is a similar height and a similar arc, you are seated rather than standing on an edge, and far fewer people balk at it.",
        ],
      },
    ],
    ownFaqs: [
      {
        q: "How high is the bungee jump in Rishikesh?",
        a: "83 metres, from a cantilever platform built out over the gorge — the highest fixed-platform bungee in India. The platform projects from the hillside rather than sitting on a bridge, so there is open air directly below the edge.",
      },
      {
        q: "What are the weight and age limits for bungee jumping in Rishikesh?",
        a: "Maximum 110 kg and minimum 12 years. You are weighed at check-in and the figure decides which cord you jump on, so there is no way round it. Pregnancy, heart conditions, high blood pressure, epilepsy, spinal or neck injuries and recent surgery are all disqualifying and appear on the waiver.",
      },
      {
        q: "Do I get a refund if I back out at the top?",
        a: "No, and that is the universal rule for fixed-platform bungee rather than something specific to Rishikesh — your slot, cord and crew are committed once you are weighed. If you are genuinely unsure whether you will jump, the giant swing is a better-value decision: similar height, seated start, and far fewer people balk.",
      },
      {
        q: "How long does the whole bungee experience take?",
        a: "Two to three hours, for a jump measured in seconds. The time goes on travel to the site, the queue, the weigh-in, the harness check and the walk out. Do not book anything tight immediately afterwards.",
      },
    ],
    notFor: "Anyone over 110 kg or under 12 — the limits are checked, not estimated. Also not for anyone with a heart condition, high blood pressure, epilepsy, a neck or spinal injury, recent surgery, or who is pregnant. And if you already suspect you will not step off, the giant swing gives you the same height without the standing edge.",
  },

  "camping-in-rishikesh": {
    body: [
      "Swiss tents, a bonfire, dinner and a night outside within reach of the Ganga. It is the cheapest night in Rishikesh that still feels like something, and at ₹999 per person with meals included it is usually the best-value item on this site.",
      "One expectation to correct before you book: the camps are set back from the river rather than pitched on the sand. Beach camping on these banks was stopped years ago, and anyone selling you a tent on the water's edge is either describing something that no longer exists or is somewhere they should not be. What you get instead is a riverside property up the slope, usually with the water in view and a few minutes' walk away.",
      "Tents are twin or triple sharing with proper beds, and the sites run on generators and limited solar. Phone signal is patchy by design of the terrain rather than anyone's choice.",
    ],
    sections: [
      {
        heading: "What the night includes",
        paragraphs: [
          "Dinner, a bonfire with music, and breakfast the next morning, veg or non-veg as you prefer. Most camps run the bonfire from early evening until a cut-off — these are licensed sites under local noise rules, so music stops earlier than a group expecting a party tends to assume.",
          "Check-in is usually early afternoon and check-out mid-morning, which leaves the middle of the day free. Almost everyone pairs the night with rafting, and the combination is why this page exists as a separate booking at all.",
        ],
      },
      {
        heading: "Seasons change this a lot",
        paragraphs: [
          "October to March is the good window, and December and January are genuinely cold at night — you want a jacket, and the bonfire stops being decorative. April to June is warm and the river swim at the end of a rafting day is the point.",
          "Through the monsoon, camping continues at the sites that sit well above the river but the character changes completely: the bonfire is unreliable, the ground is wet, and the activity you came to pair it with is suspended. It is the one season where we will suggest a room instead.",
        ],
      },
      {
        heading: "Washrooms and the honest bit",
        paragraphs: [
          "Most tents in this price band share washroom blocks rather than having their own, and the hot water is a bucket or a limited-capacity geyser. Attached-bath tents exist and cost more; say so when you book and we will quote the right category rather than the cheapest one.",
          "If you have never slept under canvas and are not sure you will enjoy it, book one night rather than two. Almost nobody regrets one night. A fair number regret three.",
        ],
      },
    ],
    ownFaqs: [
      {
        q: "Are the camps actually on the riverbank in Rishikesh?",
        a: "No, and be wary of anyone who says they are. Camping on the sand of these banks was stopped years ago. The camps are riverside properties set back and above the water — usually with a view and a short walk down, which is a different thing from a tent on a beach.",
      },
      {
        q: "What does camping in Rishikesh include at ₹999?",
        a: "A twin or triple-sharing Swiss tent with beds, dinner, a bonfire with music, and breakfast. Washrooms are generally shared at this rate. Attached-bath tents are available in a higher category — ask and we will quote that specifically rather than defaulting to the cheapest.",
      },
      {
        q: "Until what time does the bonfire and music run?",
        a: "Early evening to a cut-off, which varies by site under local noise rules and is earlier than most groups expect. If a late night is the main reason you are booking, say so when you enquire — we will tell you honestly which sites can and cannot do it rather than letting you find out on arrival.",
      },
      {
        q: "Is camping worth it during the monsoon?",
        a: "Usually not. Sites above the river stay open, but the ground is wet, the bonfire is unreliable, and rafting — the thing most people pair camping with — is suspended. It is the one season where we will point you at a room instead of a tent.",
      },
    ],
    notFor: "Anyone expecting a tent pitched on the sand at the water's edge; that does not exist here any more. Also a poor fit if you need an attached bathroom and hot running water at the ₹999 rate, or if a late-night party is the point — the music stops earlier than you think.",
  },

  "kayaking-in-rishikesh": {
    body: [
      "Kayaking here is a skill you come to learn rather than an activity you turn up and consume. A single two-to-four-hour session gets you into a boat, onto flat water, and through the basics of paddling, edging and what to do when you tip over. It does not get you down a rapid.",
      "That is the honest frame, and it is why the multi-day courses exist and why most people who enjoy the first session come back for one. The Ganga is a generous teaching river in the right place and an unforgiving one fifty metres further on, and the difference is entirely about where your instructor puts you.",
      "The single most useful thing to practise is the wet exit — getting out of an upside-down boat calmly. Everyone capsizes early. People who have rehearsed the exit find it funny; people who have not find it frightening.",
    ],
    sections: [
      {
        heading: "Session or course",
        paragraphs: [
          "A single session suits someone curious, someone who paddles elsewhere and wants a look at this river, or someone filling a day when rafting is closed. You will be on calm water with a safety boat and you will finish able to move the kayak where you want it.",
          "A course of several days is what turns that into paddling. It adds the roll, bracing, reading moving water and eventually easy rapids. If you have any thought of kayaking properly, the course is the better purchase and the day session is a sampler.",
        ],
      },
      {
        heading: "Why it is harder than rafting",
        paragraphs: [
          "In a raft, a guide makes the decisions and the boat is forgiving. In a kayak you are the guide, the boat responds to everything you do including the things you do by accident, and nobody can correct your line for you.",
          "It is also more tiring than it looks. Two hours of learning to paddle works your back, shoulders and core harder than a three-hour rafting trip, because you are fighting the boat rather than riding it.",
        ],
      },
    ],
    ownFaqs: [
      {
        q: "Can a complete beginner kayak in Rishikesh?",
        a: "Yes — beginner sessions start on flat water with an instructor and a safety boat, and cover paddling, edging and the wet exit. What a beginner session does not do is take you through rapids. That needs a multi-day course.",
      },
      {
        q: "Do I need to be able to swim to kayak?",
        a: "You will be in a life jacket and helmet throughout, and the first thing taught is how to get out of a capsized boat. Being comfortable in water matters more than technique — tell the instructor where you stand and they will keep you within reach of the safety boat.",
      },
      {
        q: "Is one kayaking session enough, or should I book the course?",
        a: "One session is enough to find out whether you like it, and plenty of people book exactly that. If you already suspect you will, book the course: the roll, bracing and reading water all come after the first day, and that is where kayaking actually starts.",
      },
      {
        q: "Does kayaking run when rafting is closed?",
        a: "Flat-water instruction can continue outside the monsoon suspension in some conditions, but the high-water months shut down teaching on the Ganga as well. Ask us about your specific dates rather than assuming either way.",
      },
    ],
    notFor: "Anyone looking for a passive thrill — this is a lesson, and a tiring one. If you want to go through rapids this week rather than learn to over the next year, book rafting instead and come back to the kayak later.",
  },

  "zipline-in-rishikesh": {
    body: [
      "A 400-metre cable across the river valley, with up to 140 metres of air beneath you at the deepest point. You go seated in a harness, hands free, and the crossing takes under a minute.",
      "It is the activity we recommend most often to people who want the view and the height without the commitment of stepping off something. There is no moment of decision at the edge: you are clipped in, lifted off the platform by the cable, and then you are flying.",
      "An hour covers it, which makes it easy to pair with the giant swing at the same site or to slot in on an afternoon when you have already rafted.",
    ],
    sections: [
      {
        heading: "What it feels like, specifically",
        paragraphs: [
          "The first few seconds are the loudest part — the cable is noisy and the acceleration is immediate. Then it settles into something closer to flying than falling, which is why people who are frightened of bungee are usually fine here.",
          "You arrive at the far platform under brake and are brought back. Looking down is optional and entirely survivable; most people spend the crossing looking along the valley instead.",
        ],
      },
      {
        heading: "Good for mixed groups",
        paragraphs: [
          "This is the one height activity where a family or a group of friends with very different appetites can all do the same thing. Nobody has to be talked into it and nobody is left at the bottom holding bags.",
          "If somebody in the group definitely wants a bigger scare, the giant swing and the superman zipline are at hand, so you can split for twenty minutes and regroup.",
        ],
      },
    ],
    ownFaqs: [
      {
        q: "How long is the zipline in Rishikesh and how high?",
        a: "A 400-metre span, with up to 140 metres of drop below you at the deepest point of the valley. The crossing itself takes under a minute; allow an hour for the whole thing including harness and briefing.",
      },
      {
        q: "Is the zipline scary?",
        a: "Much less than bungee or the giant swing, because there is no moment where you have to step off. You sit in the harness and the cable takes you. People who know they will not jump off a platform almost always enjoy the zipline.",
      },
      {
        q: "Can children do the zipline?",
        a: "It has the widest suitability of the height activities here, but limits are set at the site and depend on harness fit rather than a single published age. Tell us the ages in your group when you enquire and we will confirm before you travel rather than at the gate.",
      },
    ],
    notFor: "Anyone chasing adrenaline rather than altitude. If you want to be genuinely frightened, this is not it — put the money toward the giant swing or the SCAD jump.",
  },

  "giant-swing-in-rishikesh": {
    body: [
      "You are dropped from the same 83-metre platform as the bungee, but on a long tether, so instead of bouncing you fall and then swing out across the gorge in a huge arc. Several people who have done both say the swing is worse. They mean it as a compliment.",
      "The difference is that the free fall is longer before anything catches you, and because you are seated and facing forward you watch the valley come at you rather than seeing the river below your feet. It lasts a good deal longer than a bungee rebound.",
      "You can go solo or in tandem, and tandem is genuinely easier — not because it is safer but because having somebody beside you shouting changes the whole experience.",
    ],
    sections: [
      {
        heading: "Why nervous people choose this over bungee",
        paragraphs: [
          "There is no standing on an edge. You are strapped into a seat harness on the platform and released, which removes the single hardest moment of a bungee jump — the voluntary step into nothing.",
          "That is why we point people here when they say they want the height but suspect they will freeze. The refusal rate is far lower, and a swing you actually do beats a jump you pay for and walk away from.",
        ],
      },
      {
        heading: "The limits are the same site limits",
        paragraphs: [
          "Weight, age and health restrictions at this site are set by the same operation that runs the bungee from the same platform, so if a condition rules you out of one it will usually rule you out of both. Disclose it before you travel, not at the desk.",
          "Pro video is included, which is worth more here than on most activities — the arc is photogenic in a way the jump is not, and you cannot film it yourself.",
        ],
      },
    ],
    ownFaqs: [
      {
        q: "Giant swing or bungee in Rishikesh — which is scarier?",
        a: "Opinions genuinely split, and plenty of people who have done both say the swing is the harder of the two: the free fall runs longer before the tether catches, and the arc across the gorge lasts far longer than a bungee rebound. What the swing removes is the voluntary step off an edge, which is the part most people fail at.",
      },
      {
        q: "Can I do the giant swing with someone else?",
        a: "Yes, tandem is available and most first-timers find it easier — not because it changes the physics but because having somebody next to you alters the whole experience. Solo is the more intense version.",
      },
      {
        q: "Are the weight and age limits the same as the bungee?",
        a: "Broadly yes — it is the same platform and the same operation, so the health, weight and age restrictions that rule you out of the jump will usually rule you out of the swing. Tell us about any condition before you travel rather than discovering it at check-in.",
      },
    ],
    notFor: "Anyone with the heart, blood-pressure, spinal or pregnancy restrictions that apply at this platform — they are the same here as for the bungee. Also not the activity to pick if you want a gentle introduction to height: the zipline is that.",
  },

  "reverse-bungee-in-rishikesh": {
    body: [
      "An ejection seat on elastic. You are strapped in at ground level, the cords are tensioned, and you are catapulted upward at around 4G before bouncing back down. Thirty minutes, ₹1,000, and the most adrenaline per rupee available here.",
      "It is the opposite experience to a bungee jump in the way that matters most: there is no decision. You cannot freeze, because you are not the one who initiates it. For people who want the sensation of a bungee without the psychology of a bungee, this is the answer.",
      "It is also ground-based, which means no trek to a platform and no long queue at height — you can do it in a gap between other things.",
    ],
    sections: [
      {
        heading: "Four G is the number that matters",
        paragraphs: [
          "The launch is the whole ride. 4G is enough to press the breath out of you and to make your face do something you would rather was not photographed, which is why these rides are always filmed.",
          "The descent and the subsequent bounces are mild by comparison. Total airtime is a handful of seconds and it is over before you have decided what you think.",
        ],
      },
      {
        heading: "Tandem and who it suits",
        paragraphs: [
          "Two seats, so you can go with somebody, and the shared version is the more popular. It is the easiest adrenaline activity in Rishikesh to talk a hesitant friend into.",
          "The 4G launch does mean the standard cardiac, blood-pressure, neck and pregnancy restrictions apply. A short ride is not a gentle one.",
        ],
      },
    ],
    ownFaqs: [
      {
        q: "What is reverse bungee and how is it different from bungee jumping?",
        a: "You are strapped into a seat at ground level and catapulted upward at about 4G, rather than jumping down from a platform. The crucial difference is that you do not initiate it — so unlike a bungee, there is no moment where you can freeze and walk away.",
      },
      {
        q: "Is reverse bungee safe for someone who has never done anything like this?",
        a: "It is the usual first adrenaline activity here, and the one people are most easily persuaded into. But 4G is a real load: the standard restrictions on heart conditions, high blood pressure, neck and back injuries and pregnancy all apply, short ride or not.",
      },
      {
        q: "How long does reverse bungee take?",
        a: "About 30 minutes including strapping in and the briefing, for a few seconds of airtime. It is ground-based with no climb to a platform, so it slots easily into a gap between other activities.",
      },
    ],
    notFor: "Anyone with a heart condition, high blood pressure, a neck or back injury, or who is pregnant. A 4G launch lasting seconds is still a 4G launch.",
  },

  "flying-fox-in-rishikesh": {
    body: [
      "A kilometre of cable above the Shivpuri valley, flown in a harness, with up to three people released together. It is the longest ride of its kind here and the gentlest way to spend time at height.",
      "Because three can go at once, it is the activity groups and families book when they want to do something together rather than taking turns watching. You are side by side for the whole crossing, which is most of what people like about it.",
      "An hour, including the walk to the launch point and the harness check. The flight itself runs well over the minute mark, which is a long time to be looking at that valley.",
    ],
    sections: [
      {
        heading: "How it differs from the zipline",
        paragraphs: [
          "The zipline is 400 metres and faster. The flying fox is a kilometre and slower, flown prone or seated depending on the rig, and the emphasis is on duration and view rather than speed.",
          "If you only have time for one and you want a thrill, take the zipline. If you want the valley and you are bringing people who are not here for adrenaline, take the flying fox.",
        ],
      },
      {
        heading: "Up to three at a time",
        paragraphs: [
          "Three harnesses on the same release means a family of three or a group of friends crosses as one, which matters more than it sounds — most height activities here are solitary by design and this one is not.",
          "It also means the per-person logistics are quicker: a group of six is two crossings rather than six.",
        ],
      },
    ],
    ownFaqs: [
      {
        q: "How long is the flying fox in Rishikesh?",
        a: "A kilometre of cable across the Shivpuri valley, with the flight itself running comfortably over a minute. Allow an hour in total for the walk to the launch point, the harness and the briefing.",
      },
      {
        q: "Can three people go on the flying fox together?",
        a: "Yes — up to three are released on the same crossing, which is why groups and families pick this over the single-rider activities. You fly side by side rather than taking turns watching from the platform.",
      },
      {
        q: "Flying fox or zipline — which should I book?",
        a: "Zipline if you want speed and a shorter sharper ride: 400 metres, faster, and the more exciting of the two. Flying fox if you want the longer crossing, the valley, and the option of going three-up with people who are not chasing adrenaline.",
      },
    ],
    notFor: "Anyone whose main goal is fear. This is a long, scenic, deliberately unhurried ride — the people who come away underwhelmed are the ones who wanted the SCAD jump.",
  },

  "cliff-jumping-in-rishikesh": {
    body: [
      "Jumping off a riverside rock into the Ganga, supervised, as a stop during a rafting trip rather than a booking of its own. That is why it is priced at ₹600 with rafting and not as a standalone — the raft is how you reach the rock.",
      "The height changes through the season. The same ledge that is a five-metre jump in October is a very different proposition in May when the river is lower, and guides pick the jump spot on the day based on water depth. If they say no, the answer is no.",
      "You keep your life jacket on. The jump is into moving water and the current takes you downstream to where the raft is waiting, which is the part first-timers do not expect and should.",
    ],
    sections: [
      {
        heading: "It is optional, and skipping it is normal",
        paragraphs: [
          "Nobody on the raft is required to jump, and on most trips a few people do not. There is no penalty, no discount lost, and the raft waits either way.",
          "The pressure that exists is social rather than operational. If you know you do not want to, say so at the briefing rather than at the top of the rock, and the guide will take the group's attention elsewhere.",
        ],
      },
      {
        heading: "Which stretch gets you the jump",
        paragraphs: [
          "The 16 km from Shivpuri is the run where the cliff jump is a standard stop, and the one to book if this is the part you want. The 9 km is shorter and does not reliably include it.",
          "Water level decides the rest. In a low-water month the guide may move the stop or drop it, and that is a safety call rather than a cost-saving one.",
        ],
      },
    ],
    ownFaqs: [
      {
        q: "Can I book cliff jumping in Rishikesh on its own?",
        a: "Not really — it is a supervised stop during a rafting trip, which is how you reach the rock, and that is why it is priced with rafting rather than separately. Book the 16 km stretch from Shivpuri if the cliff jump is the part you care about.",
      },
      {
        q: "How high is the cliff jump?",
        a: "It varies through the season, because the same ledge sits at a very different height above a high October river than a low May one. The guide chooses the spot on the day based on water depth, and sometimes decides against it entirely. That call is not negotiable.",
      },
      {
        q: "What happens after I jump?",
        a: "You keep your life jacket on and the current carries you downstream to the waiting raft — a short float rather than a swim, but it surprises people who expected to climb straight back out where they went in.",
      },
      {
        q: "Do I have to jump if I have booked rafting?",
        a: "No, and on most trips several people do not. Mention it at the briefing rather than at the top of the rock and the guide will quietly move the group along.",
      },
    ],
    notFor: "Anyone who is not already rafting — this is a stop on a river trip, not a standalone activity. Also skip it if you are uneasy in moving water: you float downstream to the raft after you land, which is not the same as jumping into a pool.",
  },

  "body-surfing-in-rishikesh": {
    body: [
      "Floating feet-first through a gentle rapid in a life jacket, with your guide calling the line. No boat, no paddle, no equipment beyond what you are already wearing on the raft.",
      "It is the quietest thing on this list and the one people most often name as their favourite part of the day. Being in the rapid rather than on it changes the scale of the river completely.",
      "Like the cliff jump, it is a stop on a rafting trip and is priced with it. Guides choose a calm rapid and a stretch with a clean run-out, and they go in with you.",
    ],
    sections: [
      {
        heading: "Feet first, and why",
        paragraphs: [
          "You float on your back with your feet downstream and your toes up. That keeps your feet from catching on anything on the bed and keeps your head clear of the water coming at you, and it is the single instruction that matters.",
          "The guide will tell you when to stand up and when not to. Standing up in moving water before it is shallow enough is how people get hurt in rivers, and it is the one rule worth remembering after the trip.",
        ],
      },
      {
        heading: "The family-friendly part of a rafting day",
        paragraphs: [
          "Of everything that happens on a rafting trip, this is the part nervous adults and younger participants enjoy most. It is slower than it looks from the raft and the life jacket does all the work.",
          "It also tends to be where the group stops performing for each other and actually looks at where they are, which is the Ganga coming out of the Himalaya.",
        ],
      },
    ],
    ownFaqs: [
      {
        q: "What is body surfing on the Ganga?",
        a: "Floating through a gentle rapid on your back, feet downstream, in the life jacket you are already wearing, with the guide alongside. No board and no equipment — it is you and the river, which is why people remember it.",
      },
      {
        q: "Is body surfing safe for non-swimmers?",
        a: "It is the part of a rafting day that nervous adults usually enjoy most, because the life jacket does the work and the guide picks a calm rapid with a clean run-out. Tell the guide you do not swim and they will stay within arm's reach.",
      },
      {
        q: "Is body surfing included in the rafting price?",
        a: "Yes, where conditions allow — it is a stop on the trip rather than a separate booking, which is why it is listed at the rafting rate. The 16 km stretch from Shivpuri is the run where it is a standard stop.",
      },
    ],
    notFor: "Nobody much, honestly — this is the gentlest thing on the river. It is simply not available as a standalone booking, so it is the wrong page if you are not rafting.",
  },

  "superman-shot-in-rishikesh": {
    body: [
      "A zipline flown face-down with your arms out, in a harness that holds you prone rather than seated. Same cable principle as a conventional zipline, entirely different sensation, because you are looking at the gorge instead of across it.",
      "Forty-five minutes and ₹1,500, including the photo set — which is the real reason most people book it. Flown in the superman position you are the subject of a photograph in a way you are not sitting upright in a harness.",
      "It suits someone who has done a standard zipline and wants the next thing without going near a bungee platform.",
    ],
    sections: [
      {
        heading: "Prone changes everything",
        paragraphs: [
          "Seated, your body tells you that you are travelling along a cable. Face-down with nothing in your field of view but the drop, it tells you that you are flying, and that illusion is the entire product.",
          "It is also why a few people find it harder than the seated zipline despite the mechanics being near-identical. You cannot avoid looking down, because down is where you are pointing.",
        ],
      },
      {
        heading: "The photographs",
        paragraphs: [
          "A photo set is included rather than sold as an add-on, which is unusual here. In the superman harness your arms are out and your face is visible, so the images are worth having in a way action-cam footage from a raft generally is not.",
          "If photographs are the point of your trip, this and the giant swing are the two activities that reliably produce them.",
        ],
      },
    ],
    ownFaqs: [
      {
        q: "What is the superman zipline in Rishikesh?",
        a: "A zipline flown face-down with your arms out in a prone harness, rather than seated upright. The cable mechanics are much the same as a standard zipline; the sensation is not, because you are looking straight down the gorge for the whole crossing.",
      },
      {
        q: "Is the superman zipline harder than the normal zipline?",
        a: "For some people, yes — not because of the equipment but because you cannot look away from the drop when you are pointed at it. If the standard zipline was comfortable and you want a step up without a bungee platform, this is the step.",
      },
      {
        q: "Are photos included in the superman zipline?",
        a: "Yes, a photo set comes with it rather than being an extra. That matters more here than on most activities: the prone position puts your arms out and your face in shot, which is why people book this one specifically for the pictures.",
      },
    ],
    notFor: "Anyone uneasy about looking down. On a seated zipline you can watch the horizon; here you are aimed at the gorge for the whole crossing and there is nowhere else to look.",
  },

  "scad-jump-in-rishikesh": {
    body: [
      "You are released from height with no rope attached at all and fall into a net. No cord, no harness arresting you partway, nothing connecting you to the structure — just a free fall and a catch at the bottom.",
      "This is a different fear from bungee. A bungee jump has something tied to you, and however irrational it is, that helps. A SCAD jump removes the reassurance entirely, which is the point of it, and why people who have done both often describe this as the worse one.",
      "You also have no control and nothing to do. On a bungee you jump; here you are released, in a position you did not choose, and you fall backwards without a horizon.",
    ],
    sections: [
      {
        heading: "The net is the whole system",
        paragraphs: [
          "Everything about a SCAD rig is in the release mechanism and the net. There is no equipment on your body doing anything during the fall, so there is nothing to check, adjust or hold on to.",
          "That is unusual enough that it is worth saying plainly before you book: if the thing that gets you through a height activity is feeling the harness, this activity takes that away deliberately.",
        ],
      },
      {
        heading: "Who should pick this over bungee",
        paragraphs: [
          "People who have already jumped and found it manageable, and want the version their nervous system cannot talk itself out of. It is a specialist purchase rather than a first adrenaline activity.",
          "If you have not done a bungee or a giant swing, do one of those first. SCAD is the deep end and it is not where to find out how you react to height.",
        ],
      },
    ],
    ownFaqs: [
      {
        q: "What is a SCAD jump?",
        a: "A free fall from height with nothing attached to you, landing in a net. There is no cord, no harness arresting you partway, and nothing connecting you to the structure during the fall — the net and the release mechanism are the entire system.",
      },
      {
        q: "Is a SCAD jump scarier than bungee jumping?",
        a: "Frequently, yes, and people who have done both tend to say so. A bungee has something tied to you, which helps however irrational that is. SCAD removes it on purpose, and you fall backwards with no horizon and nothing to hold.",
      },
      {
        q: "Should a first-timer do the SCAD jump?",
        a: "We would steer you to the bungee or the giant swing first. SCAD is the specialist end of this — fine once you know how you react to height, a poor way to find out.",
      },
    ],
    notFor: "First-timers at height, and anyone who copes with these activities by feeling the harness — there is nothing on your body doing anything during a SCAD fall, which is exactly the design. The usual heart, blood-pressure, spinal and pregnancy restrictions apply.",
  },

  "rope-course-in-rishikesh": {
    body: [
      "Burma bridges, wobbly logs, cargo nets and high-rope traverses, done in sequence on a harness and line. At ₹500 and one to two hours, it is the cheapest substantial activity here and the one with the widest age range.",
      "It is also the best answer to the most common problem groups bring us: a family with children under 14, who cannot raft, and who need something that is genuinely an adventure rather than a consolation.",
      "There are high and low elements, so a group with mixed nerve does not split. The low course is close to the ground and the high course is the same obstacles at height on a continuous line.",
    ],
    sections: [
      {
        heading: "Why it works for corporate groups",
        paragraphs: [
          "Rope courses are the one activity in Rishikesh with a real team-building mechanic rather than a claimed one: the obstacles need somebody holding, spotting, or talking a colleague across, and that happens without a facilitator asking anyone to do a trust exercise.",
          "For a company group of any size this is the element worth building the day around, with rafting as the afternoon and a bonfire in the evening.",
        ],
      },
      {
        heading: "Children and the honest limits",
        paragraphs: [
          "The low course takes genuinely small participants. The high course depends on harness fit rather than a flat age number, so it is worth telling us the ages and rough heights of the children in your group when you enquire.",
          "It is physical in a way that surprises adults — grip, balance and forearms, not fitness. Two hours is plenty.",
        ],
      },
    ],
    ownFaqs: [
      {
        q: "What is the minimum age for the rope course in Rishikesh?",
        a: "The low elements take genuinely young children; the high course depends on harness fit rather than a published age, so tell us the ages and rough heights in your group and we will confirm before you travel. It is the activity we recommend most for families with children under the rafting age of 14.",
      },
      {
        q: "Is the rope course good for a corporate team outing?",
        a: "It is the best element here for that, because the team-building is structural rather than claimed — the obstacles need somebody spotting, holding or talking a colleague across. Build the day around the course, add rafting in the afternoon and a bonfire at night.",
      },
      {
        q: "How hard is the rope course physically?",
        a: "Harder than adults expect, but in grip, balance and forearms rather than fitness. One to two hours is the right length; nobody needs more.",
      },
    ],
    notFor: "Anyone looking for a single big adrenaline moment — a rope course is a sequence of small ones. If you want to be frightened once and go home, this is not the purchase.",
  },

  "rock-climbing-in-rishikesh": {
    body: [
      "Climbing on natural granite with an instructor, a rope from above, and all the gear provided. Two hours, ₹800, and beginner routes that are genuinely beginner rather than a hard route somebody calls easy.",
      "Rishikesh has real rock, which is the difference between this and a climbing wall. The holds are where the rock put them, the route does not have coloured tape on it, and reading what to do next is most of the skill.",
      "You are on a top rope throughout, which means you cannot fall any distance — you sit in the harness and the rope holds you while you work out the next move.",
    ],
    sections: [
      {
        heading: "Natural rock versus a wall",
        paragraphs: [
          "A wall is a better place to learn the movement: holds are obvious, routes are graded consistently, and you can repeat a sequence until it works. Natural rock is a better place to find out whether you like climbing.",
          "If you have never done either and you are travelling with children, do the wall first — it is ₹400, an hour, and auto-belayed. Then come to the granite.",
        ],
      },
      {
        heading: "What the two hours includes",
        paragraphs: [
          "Harness, helmet, shoes, rope and belay are all provided and all included. The instructor sets the anchors, belays every climb, and teaches the knots and commands as you go.",
          "Expect to climb two or three routes rather than a dozen. The time goes on learning to move, not on volume.",
        ],
      },
    ],
    ownFaqs: [
      {
        q: "Do I need climbing experience to rock climb in Rishikesh?",
        a: "No. The beginner routes are genuinely beginner, you are on a top rope the whole time so a fall is a sit rather than a drop, and the instructor teaches the knots and commands as you climb. Gear — harness, helmet, shoes, rope, belay — is all included.",
      },
      {
        q: "Rock climbing or wall climbing — which first?",
        a: "Wall first if you have never climbed, especially with children: ₹400, an hour, auto-belayed, and the holds are obvious so you learn the movement. Natural rock is where you find out whether you actually enjoy climbing, which is a different question.",
      },
      {
        q: "How many routes will I climb in two hours?",
        a: "Two or three, not a dozen. The session is about learning to move on rock rather than racking up volume, and reading an ungraded natural route takes longer than pulling on coloured holds.",
      },
    ],
    notFor: "Anyone with a grip or shoulder injury, and anyone who wants a quick thrill — climbing is slow, cerebral and occasionally frustrating. It is also the wrong first stop for small children; the wall is that.",
  },

  "rappelling-in-rishikesh": {
    body: [
      "Walking backwards down a cliff or beside a waterfall on a rope you control yourself. Two hours, ₹800, full gear and an instructor at the top and bottom.",
      "It is the easier half of rope work. Climbing demands strength and problem-solving; rappelling asks you to lean back into a harness and trust it, which is a psychological task rather than a physical one. Most people find the first three metres the hardest part of the day and the rest straightforward.",
      "The waterfall option is the better one when there is water, and it is wet, cold and much more memorable than a dry rock face.",
    ],
    sections: [
      {
        heading: "The first lean is the whole thing",
        paragraphs: [
          "Stepping over the edge and putting your weight into the rope contradicts everything your body wants. Once you have done it the descent is controlled, unhurried and almost calm — you feed rope and walk down at whatever speed you choose.",
          "Instructors expect the hesitation and are good at it. Nobody is rushed off the top.",
        ],
      },
      {
        heading: "Cliff or waterfall",
        paragraphs: [
          "A dry cliff is the cleaner introduction and available year-round. A waterfall descent adds cold water, slippery rock and noise, and is the version worth travelling for — but it depends entirely on flow, which means it is at its best in and just after the monsoon and may not run at all in a dry month.",
          "Ask when you book. We would rather tell you the waterfall is low than have you discover it at the top.",
        ],
      },
    ],
    ownFaqs: [
      {
        q: "Is rappelling easier than rock climbing?",
        a: "Physically, much easier — rappelling is about leaning back into a harness and controlling your own descent rather than pulling yourself up. The difficulty is psychological and it is concentrated in the first three metres. After that most people find it calm.",
      },
      {
        q: "Can I rappel down a waterfall in Rishikesh?",
        a: "When there is enough flow, yes, and it is the better version — cold, loud and far more memorable than a dry rock face. It depends on water, so it is at its best in and just after the monsoon and may not run in a dry month. Ask us about your dates specifically.",
      },
      {
        q: "What gear do I need for rappelling?",
        a: "None of your own. Harness, helmet, rope, descender and gloves are provided and included, with an instructor at the top and the bottom. Bring shoes with grip and, for the waterfall option, a change of clothes.",
      },
    ],
    notFor: "Anyone who cannot put weight on their knees or ankles — the descent is a controlled walk backwards down rock, and it loads both. The waterfall version is also a poor idea in a dry month; check before you commit to it.",
  },

  "wall-climbing-in-rishikesh": {
    body: [
      "An artificial wall with coloured holds and an auto-belay, for ₹400 and an hour. It is the smallest purchase on this site and the right first vertical activity for a child.",
      "Auto-belay is what makes it work for families: the device takes up the slack as you climb and lowers you gently when you let go, so there is no second person holding your rope and no technique to learn before you start.",
      "It is also the honest answer for an adult who wants to find out whether they like climbing before paying for an instructor on real rock.",
    ],
    sections: [
      {
        heading: "Why it is the one to do with children",
        paragraphs: [
          "The holds are obvious, the routes are graded by colour, and a child can repeat the easy line until they have it. On natural granite none of that is true, and a frustrated eight-year-old on a real cliff is a wasted ₹800.",
          "Nobody has to belay anybody, which means a parent can stand and watch rather than being roped into a job.",
        ],
      },
      {
        heading: "After the wall",
        paragraphs: [
          "If it goes well, rock climbing on natural granite is the next step at ₹800 for two hours with an instructor, and the rope course is the lateral move for a group with mixed appetite.",
          "An hour is the right length here. The wall is a taster and it does not pretend otherwise.",
        ],
      },
    ],
    ownFaqs: [
      {
        q: "Is wall climbing suitable for kids in Rishikesh?",
        a: "It is the best vertical activity here for children. The auto-belay takes up slack as they climb and lowers them gently when they let go, so there is no belaying partner and nothing to learn first, and the colour-graded holds let them repeat an easy line until it works.",
      },
      {
        q: "What is auto-belay?",
        a: "A device at the top of the wall that keeps your rope tight as you climb and lowers you at a controlled speed when you come off. It removes the need for a second person on the ground holding your rope, which is what makes a wall workable for families and first-timers.",
      },
      {
        q: "Should I do wall climbing or go straight to rock climbing?",
        a: "Wall first if you have never climbed, and definitely first with children — ₹400 for an hour tells you whether you enjoy it. Natural rock at ₹800 for two hours is the better experience but a worse place to discover you do not like being off the ground.",
      },
    ],
    notFor: "Experienced climbers, who will have finished every route in twenty minutes. Go to the natural granite instead.",
  },

  "tree-climbing-in-rishikesh": {
    body: [
      "Climbing up into the forest canopy on arborist ropes — the same rope-and-harness system professional tree surgeons use, rather than branches and nerve. One to two hours, ₹600.",
      "It is the quietest activity on this list and the only one where the point is where you end up rather than how you got there. Sitting in a harness thirty feet up in Himalayan forest is a genuinely different experience from any of the cable rides.",
      "It is also the most ascent-per-effort of anything here: you are moving yourself up a rope with a foot loop and a hitch, which is slow, repetitive and oddly satisfying.",
    ],
    sections: [
      {
        heading: "Arborist technique, not scrambling",
        paragraphs: [
          "The rope goes over a high anchor and you ascend it directly rather than climbing the tree itself. That means the bark stays intact, you are on a rope from the first metre, and height is a function of patience rather than reach.",
          "Instructors set the anchor and teach the hitch. It takes most people a few minutes to get the rhythm and then it becomes automatic.",
        ],
      },
      {
        heading: "Who enjoys it",
        paragraphs: [
          "People who liked the rope course and want something slower. Birdwatchers. Anyone travelling with a child who found the wall too easy and the rafting age limit in the way.",
          "It is a poor fit for a group of eight who want to be entertained — this is an activity you sink into, not one that happens to you.",
        ],
      },
    ],
    ownFaqs: [
      {
        q: "What is tree climbing in Rishikesh?",
        a: "Ascending into the forest canopy on arborist ropes — the professional rope, harness and friction-hitch system used by tree surgeons — rather than scrambling up branches. You climb the rope over a high anchor, so you are protected from the first metre and the tree is undamaged.",
      },
      {
        q: "Is tree climbing suitable for children?",
        a: "Yes, and it is a good option for a child who is under the rafting age of 14 and found the climbing wall too easy. Tell us ages when you enquire so the anchor height and harness are set appropriately.",
      },
      {
        q: "How high do you go?",
        a: "Into the canopy — height depends on the tree and the anchor the instructor sets. Getting there is a slow, repetitive rope ascent rather than a quick climb, which is most of what people like about it.",
      },
    ],
    notFor: "A large group looking to be entertained for an hour. This is slow and absorbing, and it rewards one or two people far more than it rewards eight.",
  },

  "sky-cycling-in-rishikesh": {
    body: [
      "A bicycle fixed to a high wire above the valley, which you pedal across while harnessed to a separate safety line. Thirty minutes, ₹700.",
      "The trick of it is that the bike feels exactly like a bike, right up until you look down and there is nothing under the wheels. It is the most novel thing here and the one people least expect to find.",
      "It is also short, mild and entirely under your control — you set the speed and you can stop in the middle, which almost everybody does once.",
    ],
    sections: [
      {
        heading: "You are attached twice",
        paragraphs: [
          "The cycle is mounted on the wire and cannot leave it, and you wear a harness clipped to an independent line. Neither depends on the other, which is why a ride that looks precarious is not.",
          "Pedalling drives the cycle along the wire. Stopping stops you. There is no brake to misjudge and no momentum to manage.",
        ],
      },
      {
        heading: "Good for the hesitant",
        paragraphs: [
          "Because you control the speed and can stop, this suits people who dislike the loss of control in a zipline or a swing. Nothing is done to you.",
          "Thirty minutes and ₹700 also makes it an easy add-on rather than a decision — most people do it alongside the zipline at the same site.",
        ],
      },
    ],
    ownFaqs: [
      {
        q: "What is sky cycling?",
        a: "A bicycle mounted on a high wire above the valley, which you pedal across while clipped to a separate safety line. The cycle cannot leave the wire and your harness is on an independent rope, so two systems hold you rather than one.",
      },
      {
        q: "Is sky cycling frightening?",
        a: "Much less than it looks, because you control it entirely — you set the pace and you can stop mid-wire, which nearly everyone does once. It suits people who dislike the helplessness of a zipline or a swing.",
      },
      {
        q: "How long does sky cycling take?",
        a: "About 30 minutes, which makes it an easy addition to a day rather than a plan of its own. Most people do it at the same site as the zipline.",
      },
    ],
    notFor: "Anyone after a serious adrenaline hit — this is novelty rather than fear, and it is over in half an hour.",
  },

  "go-karting-in-rishikesh": {
    body: [
      "Petrol karts on an outdoor circuit, ten laps for ₹500. It is the one activity here with nothing to do with the river, the forest or height, and that is exactly why it gets booked — it is what a group does when half of them have had enough adventure.",
      "Outdoor and petrol rather than indoor and electric means more speed, more noise and a track surface that changes with the weather. It also means a wet day can close it.",
      "Ten laps is short. Nobody finishes a first stint satisfied, which is presumably the commercial design, and a second is usually worth it.",
    ],
    sections: [
      {
        heading: "Who can drive",
        paragraphs: [
          "No licence is needed and the karts are governed, but height and reach decide whether a child can drive one — they have to reach the pedals. Tell us the ages and heights in your group and we will confirm rather than guessing.",
          "Twin-seat karts, where available, let an adult take a small child round. Ask specifically; they are not at every track.",
        ],
      },
      {
        heading: "What to wear",
        paragraphs: [
          "Closed shoes, and tie long hair back. Helmets are provided. An open circuit throws up dust and grit, so this is not the activity to do in your good clothes or straight before a long drive home.",
        ],
      },
    ],
    ownFaqs: [
      {
        q: "Do I need a licence for go karting in Rishikesh?",
        a: "No. The karts are governed and helmets are provided. What decides whether a child can drive is reach — they need to get to the pedals — so tell us ages and heights when you enquire and we will confirm instead of guessing.",
      },
      {
        q: "How many laps do you get for ₹500?",
        a: "Ten, which is short enough that most people want a second stint. Worth knowing when you set the group's budget for the day.",
      },
      {
        q: "Does go karting run in the rain?",
        a: "It is an outdoor petrol circuit, so heavy rain can close it and a wet surface changes the session considerably. Check with us on the day if the weather looks poor.",
      },
    ],
    notFor: "Small children who cannot reach the pedals, unless a twin-seat kart is available at the track — ask first. Also not the thing to do immediately before a long drive: an open circuit is dusty.",
  },

  "paintball-in-rishikesh": {
    body: [
      "A themed arena with bunkers, markers, masks and fifty balls per person for ₹400 and an hour. It is the cheapest way to occupy a large group here and the one activity that gets better the more people you bring.",
      "Fifty balls sounds like a lot and goes in about two rounds. Groups that are enjoying themselves buy more, and it is worth deciding in advance whether that is in the budget rather than negotiating it mid-game.",
      "It stings. Not badly, and the mask and the arena rules deal with the real risks, but anybody who has not played should know that a hit is felt.",
    ],
    sections: [
      {
        heading: "Built for groups",
        paragraphs: [
          "Two teams and bunkered cover means this works at a scale nothing else here does — a college group or a company outing of thirty people can all play at once, which is rarely true of adventure activities.",
          "It also needs no skill, no fitness and no nerve, so nobody sits out. For a mixed group that is worth more than the activity itself.",
        ],
      },
      {
        heading: "Safety rules that are not optional",
        paragraphs: [
          "Masks stay on inside the arena, markers stay pointed down outside it, and there is a minimum engagement distance. Those three rules are the whole safety system and the marshals enforce them rather than suggesting them.",
          "Wear long sleeves and trousers you do not mind marking. Paint washes out of most things and not out of everything.",
        ],
      },
    ],
    ownFaqs: [
      {
        q: "How many paintballs do you get for ₹400?",
        a: "Fifty per person, which lasts around two rounds. Groups that are enjoying it almost always buy more, so decide in advance whether extra balls are in the budget rather than haggling mid-game.",
      },
      {
        q: "Does paintball hurt?",
        a: "You feel a hit. It is not injurious — the mask, the minimum engagement distance and the marshals handle the real risks — but anyone who has not played should go in expecting a sting rather than a tap.",
      },
      {
        q: "Is paintball good for a large group?",
        a: "It is the best activity here for one. Thirty people can play at once, it needs no skill, fitness or nerve, and nobody ends up sitting out — which is unusual among adventure activities and often matters more than the activity itself.",
      },
    ],
    notFor: "Anyone who does not want to be hit, and small children, for whom the sting and the marker weight are both a lot. Wear clothes you do not mind marking.",
  },

  "water-zorbing-in-rishikesh": {
    body: [
      "You get inside a large transparent sphere and roll about on water. Fifteen minutes, ₹300, and it is unambiguously the silliest thing on this site.",
      "It exists for two reasons: children love it, and it is the cheapest possible way to cool off after a hot afternoon of anything else. Neither is a criticism.",
      "There is no skill, no instruction worth the name and no risk beyond being extremely unable to stand up, which is the entire joke.",
    ],
    sections: [
      {
        heading: "Fifteen minutes is the right length",
        paragraphs: [
          "The orb is warm inside and the novelty is finite. A quarter of an hour is about where the laughing stops, and operators have worked that out.",
          "Expect to get wet rather than soaked, and to be dizzy for a minute afterwards.",
        ],
      },
      {
        heading: "An add-on, not a plan",
        paragraphs: [
          "At ₹300 this is something you do because it is there while somebody else in your group is doing the go-karting. Nobody travels to Rishikesh for it and nobody should budget a slot.",
          "With children it is often the highest-rated ₹300 of the trip, which is worth knowing when the rafting age limit has already ruled them out of the main event.",
        ],
      },
    ],
    ownFaqs: [
      {
        q: "What is water zorbing?",
        a: "You climb inside a large transparent sphere and roll around on water, entirely unable to stand up. Fifteen minutes, no skill involved, and the inability to stay upright is the whole point.",
      },
      {
        q: "Is water zorbing good for kids?",
        a: "It is often the best-value ₹300 of a family trip, particularly when the rafting minimum age of 14 has ruled children out of the main activity. Expect wet rather than soaked, and a dizzy minute at the end.",
      },
    ],
    notFor: "Anyone over about twelve looking for a real activity, and anyone prone to motion sickness — the inside of a rolling sphere is exactly as disorienting as it sounds.",
  },

  "mountain-biking-in-rishikesh": {
    body: [
      "Half a day on a geared mountain bike on forest single-track and ridge trails above town, with a guide and a helmet. ₹1,200.",
      "This is the activity on this list with the highest fitness requirement and the least adrenaline, and both facts get missed. There is climbing involved — the trails are above Rishikesh and you ride up to them — and the descent is the reward rather than the whole ride.",
      "Trails here are genuinely good: forest single-track with roots and loose rock, which is fun on a bike and unpleasant on an unfamiliar one. The bikes are geared and maintained; what varies is how recently you rode.",
    ],
    sections: [
      {
        heading: "Be honest about fitness",
        paragraphs: [
          "A half day on hill single-track asks more of you than a full day of rafting. If you have not been on a bike in a year, you will not enjoy the climbing, and the guide will end up waiting rather than riding.",
          "If that describes you, say so when you book. There are shorter, flatter routes and it is far better to ride the right one.",
        ],
      },
      {
        heading: "Seasons and surface",
        paragraphs: [
          "October to March is the window: cool, dry and grippy. Through the monsoon the trails are mud and leeches, and most guides stop running them rather than apologise for them afterwards.",
          "April to June is rideable early and late in the day and hard work in the middle of it.",
        ],
      },
    ],
    ownFaqs: [
      {
        q: "How fit do I need to be for mountain biking in Rishikesh?",
        a: "Fitter than for rafting, which catches people out. The trails are above town so there is real climbing before the descent, and a half day on hill single-track is demanding. If you have not ridden in a year, tell us — there are shorter and flatter routes and you will have a much better day on one.",
      },
      {
        q: "Are the bikes provided any good?",
        a: "Geared mountain bikes with helmets, maintained for trail use. The variable in how much you enjoy the ride is almost always rider fitness and recent saddle time rather than the machine.",
      },
      {
        q: "What is the best season for mountain biking here?",
        a: "October to March — cool, dry and grippy. Through the monsoon the single-track is mud and leeches and most guides simply stop running it. April to June works early and late in the day but not in the middle.",
      },
    ],
    notFor: "Anyone who has not ridden a bike in a long while, unless you ask for the short flat route. This is the most physically demanding activity on the site and it is not the one that produces the stories.",
  },

  "waterfall-trekking-in-rishikesh": {
    body: [
      "A half-day walk through forest to Neer Garh or Patna waterfall, with pools to swim in at the top. ₹500, and the best value on this site for anybody who would rather walk than be strapped to something.",
      "Both are proper walks rather than roadside stops — forest path, steps, a climb, and a return the same way. Neer Garh is the better known and has tiers you can work up through; Patna is quieter and the approach is longer.",
      "The season decides everything. In and just after the monsoon these are genuine waterfalls. In a dry April they can be a trickle over rock, and we will tell you that before you pay rather than after you have walked up.",
    ],
    sections: [
      {
        heading: "Why monsoon is the right answer here",
        paragraphs: [
          "Almost everything else in Rishikesh is worse in the rain and rafting is shut. Waterfalls are the exception — they are at their best precisely when the river is unrunnable, which makes this the activity that saves a monsoon trip.",
          "The trade-off is slippery rock and leeches on the forest sections. Shoes with grip matter more than anything else you bring.",
        ],
      },
      {
        heading: "What the walk involves",
        paragraphs: [
          "Reckon on a couple of hours of actual walking with a climb in it, plus time at the pools. It is manageable for most reasonably mobile people and for children who walk, and there are places to stop.",
          "Carry water, and take your rubbish back down. These are small sites and they show the traffic.",
        ],
      },
    ],
    ownFaqs: [
      {
        q: "Is the waterfall trek in Rishikesh worth it in the monsoon?",
        a: "It is the best time to do it, and almost the only activity here that improves in the rain — the falls are actually falling, while rafting is suspended. The cost is slippery rock and leeches on the forest path, so shoes with grip matter more than anything else you pack.",
      },
      {
        q: "Can you swim at Neer Garh waterfall?",
        a: "There are pools at the tiers and people swim in them, water level permitting. It is cold. The upper tiers are reached by continuing the climb rather than stopping at the first pool.",
      },
      {
        q: "How hard is the waterfall trek?",
        a: "A couple of hours of walking with a real climb in it, out and back the same way, plus time at the pools. Fine for most reasonably mobile people and for children who walk, with places to stop on the way up.",
      },
      {
        q: "Will there be water in the falls on my dates?",
        a: "In and after the monsoon, yes. In a dry April or May they can reduce to a trickle over rock. Ask us about your specific dates — we would rather say the falls are low than have you find out at the top.",
      },
    ],
    notFor: "Anyone who cannot manage a sustained climb on an uneven forest path, and anyone visiting in a dry spring month hoping for a big waterfall — ask us first, because the honest answer is sometimes no.",
  },

  "ganga-river-expedition-rishikesh": {
    body: [
      "Two to three days rafting down the upper Ganga, camping on beaches between the runs, with a full crew carrying the food and kit. ₹6,500 per person.",
      "This is the serious version of everything else on this site. You are not driven up, dropped in and bussed back — you travel downstream over days, sleeping where the raft stops, which is how this river was run before it became a day trip.",
      "The beaches are the point. They are only reachable by river, and an evening on one with no road, no shops and no signal is a different experience from any commercial camp.",
    ],
    sections: [
      {
        heading: "Who this is for",
        paragraphs: [
          "People who have rafted a day stretch and want the river rather than the rapids. The whitewater on an expedition is not necessarily harder than the 36 km day run; what changes is duration, remoteness and self-sufficiency.",
          "It suits a formed group better than an individual booking, because you will be living with whoever else is on the trip for two or three days.",
        ],
      },
      {
        heading: "Conditions, honestly",
        paragraphs: [
          "Beach camping on an expedition means tents on sand, a camp kitchen, and a toilet arrangement dug for the purpose. There is no electricity and no hot shower. Everything you bring gets wet at least once.",
          "It runs in the rafting season only and is most pleasant in the cooler, clearer months either side of winter. Dates are limited and it is not a booking you can make for tomorrow.",
        ],
      },
    ],
    ownFaqs: [
      {
        q: "What is a Ganga river expedition?",
        a: "Two to three days rafting downstream on the upper Ganga, camping on river beaches between runs, with a crew carrying food and kit. You travel down the river over days rather than being driven upstream for a single run — which is how this river was rafted before it became a day trip.",
      },
      {
        q: "Do I need rafting experience for the expedition?",
        a: "It is much better with some. The whitewater is not necessarily harder than the 36 km day stretch; what changes is spending two or three days on the water, far from a road, in a group you will be living with. Do a day stretch first.",
      },
      {
        q: "What are the camps like on an expedition?",
        a: "Tents on sand on beaches reachable only by river, with a camp kitchen and a dug toilet. No electricity, no hot shower, and everything you bring will get wet at least once. The remoteness is the reason to go.",
      },
    ],
    notFor: "Anyone who has not rafted before, and anyone who needs a bathroom, a plug socket or a dry bag that stays dry. It also cannot run during the monsoon suspension, and dates are limited even in season.",
  },

  "night-camping-bonfire-in-rishikesh": {
    body: [
      "A riverside camp with a bonfire, a barbecue dinner and music, at ₹1,199 per person. The difference from the standard camping listing is emphasis: this one is sold around the evening rather than around the tent.",
      "What you are buying is a few hours around a fire with food coming off a grill, in a valley, with people you came with. The tent is where you sleep afterwards.",
      "The constraint worth knowing in advance is the music cut-off. These camps operate under local noise rules and the sound goes off earlier than most groups expect — if a late night is the plan, tell us when you book and we will be straight with you about which sites can do it.",
    ],
    sections: [
      {
        heading: "What a bonfire night includes",
        paragraphs: [
          "Barbecue dinner, the fire, music until the cut-off, a tent on twin or triple sharing, and breakfast. Veg and non-veg are both standard; say which when you book so the kitchen counts are right.",
          "October to March is the season this is designed for. A bonfire in May is decorative; in December it is the reason everyone is sitting where they are sitting.",
        ],
      },
      {
        heading: "Groups and the honest trade-off",
        paragraphs: [
          "Camps are shared. A group of twelve wanting a loud night and a couple wanting a quiet one usually end up at the same fire, and the quieter party loses. If you are the couple, tell us and we will put you somewhere smaller.",
          "If you are the group of twelve, a whole-camp booking is often cheaper per head than you would guess and solves the problem entirely.",
        ],
      },
    ],
    ownFaqs: [
      {
        q: "What time does the bonfire and music stop at Rishikesh camps?",
        a: "Earlier than most groups expect — the camps run under local noise rules with a cut-off that varies by site. If a late night is the main point of the booking, say so when you enquire and we will tell you honestly which sites can accommodate it rather than letting you discover it on the night.",
      },
      {
        q: "What is the difference between this and regular camping in Rishikesh?",
        a: "Mostly emphasis. This is sold around the evening — bonfire, barbecue and music — at ₹1,199, where the ₹999 listing is sold around the tent and the night outside. Both end with you sleeping under canvas.",
      },
      {
        q: "Can we book a whole camp for our group?",
        a: "Yes, and for a group of about a dozen upwards it is often cheaper per head than expected. It also solves the main friction at shared camps, which is a loud group and a quiet couple ending up at the same fire.",
      },
    ],
    notFor: "Couples wanting a quiet evening at a shared camp during peak season — ask us for a smaller site instead. Also a weak choice in May and June, when a bonfire is just a warm thing in warm weather.",
  },

  "hot-air-balloon-in-rishikesh": {
    body: [
      "A sunrise flight over the Himalayan foothills, one to two hours, ₹5,500 per person. It is the most expensive activity here and the only one that is genuinely at the mercy of the weather.",
      "Balloons fly at dawn because that is when the air is calm, and they do not fly at all if the wind is wrong. Cancellation is a normal outcome rather than a failure, and anyone who guarantees you a flight on a specific morning is not telling you how ballooning works.",
      "Build it into your trip accordingly: put it on your first available morning, not your last, so a weather call leaves you a second chance.",
    ],
    sections: [
      {
        heading: "Plan for the cancellation",
        paragraphs: [
          "The decision is made at the launch site, early, by the pilot, on the day. Wind at altitude can differ from a still morning on the ground, which is why the call sometimes comes after you have arrived.",
          "If it is called off, you are not flying — there is no version of this where pressure changes the answer. Book it early in your stay and treat a flight as the good outcome rather than the plan.",
        ],
      },
      {
        heading: "What you actually see",
        paragraphs: [
          "The foothills at first light, the Ganga valley, and the plains behind you. It is quiet in a way that no other activity here is — there is no engine, and between burner bursts there is nothing to hear.",
          "A one to two hour window covers inflation, flight and packing down. The time in the air is the shorter part of that.",
        ],
      },
    ],
    ownFaqs: [
      {
        q: "Why do hot air balloon flights get cancelled?",
        a: "Because balloons only fly in calm air, and the pilot makes that call on the morning at the launch site — sometimes after you have arrived, since wind at altitude can differ from a still morning on the ground. Cancellation is a normal outcome, not a failure, and nobody who understands ballooning will guarantee you a specific date.",
      },
      {
        q: "When should I book the balloon flight in my trip?",
        a: "Your first available morning, never your last. That way a weather call still leaves you a second chance later in the stay, which is the single most useful piece of planning advice about this activity.",
      },
      {
        q: "What is the flight actually like?",
        a: "Quiet, which surprises people — there is no engine, so between burner bursts there is nothing to hear. You see the foothills at first light, the Ganga valley and the plains behind. The one to two hour window covers inflation and packing down as well as the time in the air.",
      },
    ],
    notFor: "Anyone on a tight single-day schedule, or travelling on fixed dates with no flexibility — the flight depends on a weather call made that morning and no amount of planning overrides it.",
  },
};

/* ------------------------------------------------------------------ *
 * The combined map. Parts B, C and D live in their own files only
 * because one file holding all 79 would be unreadable; the split is by
 * category and nothing else depends on it.
 * ------------------------------------------------------------------ */
export const wave3Content: Record<string, Wave3Content> = {
  ...wave3Activities,
  ...wave3Stretches,
  ...wave3Packages,
  ...wave3Rentals,
  ...wave3BikeTours,
  ...wave3Yatra,
  ...wave3Haridwar,
  ...wave3Nearby,
  ...wave3Guides,
};
