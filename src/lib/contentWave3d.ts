import type { Wave3Content } from "./contentWave3";

/* =====================================================================
 * Wave 3, part D — seven yatra pages, four Haridwar, four nearby
 * getaways and the seven remaining guides.
 *
 * The yatra pages were the ones where boilerplate did the most damage.
 * All seven said the same thing about comfortable vehicles and verified
 * stays, which left a reader unable to tell that Badrinath has a road to
 * the temple door while Kedarnath has a sixteen-kilometre walk, or that
 * Gangotri is not where the Ganga actually comes out of the ice. Those
 * are the facts that decide whether somebody's parents can make the trip,
 * and they were absent from every page.
 *
 * So each shrine page now leads with the physical demand and the season,
 * because those are the two things that stop people going. Registration
 * is stated as required rather than mentioned as a service, trek lengths
 * are given honestly, and the pages say plainly when a pony, a porter or
 * a helicopter is the sensible choice rather than treating them as a
 * failure of nerve.
 *
 * Dates are deliberately framed as "announced each year, ask us" rather
 * than printed. Shrine opening and closing move annually, and a date
 * written into a page is a date that will be wrong next season.
 *
 * The four nearby pages had a cab-booking paragraph where they needed a
 * reason to go. The Corbett page in particular now says the thing a
 * wildlife page should say and usually does not: that permits sell out,
 * that the zone decides the trip, and that nobody can promise a tiger.
 * ===================================================================== */

export const wave3Yatra: Record<string, Wave3Content> = {
  "char-dham-yatra-from-rishikesh": {
    body: [
      "All four shrines — Yamunotri, Gangotri, Kedarnath and Badrinath — over ten to eleven days from Rishikesh, from ₹18,999 per person. Rishikesh is the traditional starting point and this is the complete circuit.",
      "The four are usually done west to east in that order, which is both the traditional sequence and the sensible one geographically. Two of them involve walking: Yamunotri is a trek of several kilometres from the roadhead at Janki Chatti, and Kedarnath is about sixteen kilometres uphill from Gaurikund. Gangotri and Badrinath have roads to the temple.",
      "Ten days is the honest minimum. People try to compress it and the result is long driving days, no rest, and a trek at Kedarnath attempted by someone who has been in a car since dawn — which is where this yatra goes wrong.",
    ],
    sections: [
      {
        heading: "What each of the four actually asks of you",
        paragraphs: [
          "Yamunotri: the road ends at Janki Chatti and the temple is a climb of several kilometres from there. Ponies and palanquins are available. There are thermal springs at the top, which is the detail everybody remembers.",
          "Gangotri: the road goes to the temple, so no trek. Worth knowing that Gangotri is not the physical source of the river — the glacier snout at Gaumukh is a long trek beyond it and needs a separate permit. Most pilgrims visit the temple, and that is the yatra.",
          "Kedarnath: about sixteen kilometres uphill from Gaurikund, at altitude. This is the hard one. Ponies, porters and a seasonal helicopter from the valley are all available, and anyone who is not a confident long-distance walker should plan for one from the outset.",
          "Badrinath: the road climbs to the temple itself. Physically the easiest of the four, and Mana — the last village before the Tibet border — sits a short drive beyond it.",
        ],
      },
      {
        heading: "Registration is mandatory",
        paragraphs: [
          "Char Dham yatra registration goes through the Uttarakhand government system, it is checked en route, and it is not optional. We complete it as part of the booking, for every traveller in the party.",
          "Carry photo ID for everyone. The registration is tied to the individual rather than to the vehicle or the booking.",
        ],
      },
      {
        heading: "Season, and why dates are not printed here",
        paragraphs: [
          "The shrines open in spring and close in autumn, and the dates are announced each year rather than fixed. Any page that prints a date is printing one that will be wrong next season.",
          "The monsoon sits inside the open season and brings a real landslide risk on these roads. Routes close and reopen, sometimes for a day, sometimes longer. Build slack into the plan and treat a fixed return flight as a liability.",
          "Send us your dates and we will tell you what is open, what is likely and where the weather risk sits, including when the answer is to come a month later.",
        ],
      },
      {
        heading: "Altitude and health, said plainly",
        paragraphs: [
          "All four shrines are high, and the circuit gains and loses altitude repeatedly over ten days. Acute mountain sickness is a genuine risk, particularly at Kedarnath, and it does not correlate with fitness.",
          "Drink more water than feels necessary, do not rush ascents, and treat headache with nausea or breathlessness at rest as a reason to descend rather than to push on. Travellers with heart or respiratory conditions, and elderly pilgrims, should take medical advice before booking — not as a formality but because this is a demanding journey.",
        ],
      },
    ],
    ownFaqs: [
      {
        q: "How many days do you need for the full Char Dham yatra from Rishikesh?",
        a: "Ten to eleven, and ten is the honest minimum. Compressing it produces long driving days with no rest, and then a sixteen-kilometre uphill trek at Kedarnath attempted by someone who has been in a car since dawn. That is where this yatra goes wrong.",
      },
      {
        q: "Which Char Dham shrines require a trek?",
        a: "Two of the four. Yamunotri is a climb of several kilometres from the roadhead at Janki Chatti, with ponies and palanquins available. Kedarnath is about sixteen kilometres uphill from Gaurikund and is the hard one. Gangotri and Badrinath both have roads to the temple.",
      },
      {
        q: "Is Char Dham registration compulsory?",
        a: "Yes. It goes through the Uttarakhand government system, it is checked en route, and it is tied to each individual traveller rather than to the booking or the vehicle. We complete it for everyone in the party as part of the booking — carry photo ID.",
      },
      {
        q: "When do the Char Dham temples open and close?",
        a: "They open in spring and close in autumn, with dates announced each year rather than fixed — which is why this page does not print them. Send us your dates and we will tell you what will be open, where the monsoon landslide risk sits, and when the honest advice is to travel a month later.",
      },
      {
        q: "Is the Char Dham yatra suitable for elderly parents?",
        a: "Parts of it, with planning. Gangotri and Badrinath have roads to the temple and are manageable. Yamunotri needs a pony or palanquin for most older pilgrims, and Kedarnath realistically needs a pony or the seasonal helicopter. Decide that at the booking stage rather than at the roadhead, and take medical advice first — this is a demanding ten days at altitude.",
      },
    ],
    notFor: "Anyone with less than ten days. Also not a trip to book around a fixed return flight — monsoon landslides close these roads for a day or more at a time, and that is normal rather than exceptional. Travellers with heart or respiratory conditions should get medical advice before booking rather than after arriving.",
  },

  "do-dham-yatra-from-rishikesh": {
    body: [
      "Kedarnath and Badrinath together over six to seven days, from ₹11,999 per person. This is the Char Dham yatra's shorter half and it is the right choice for most people who cannot give ten or eleven days to the full circuit.",
      "The two shrines it keeps are the two that most pilgrims most want, and they are usefully different: Badrinath has a road to the temple door, and Kedarnath has about sixteen kilometres of uphill trekking from Gaurikund. One is a drive, the other is the hardest day of your trip.",
      "Dropping Yamunotri and Gangotri also removes the long westward leg, which is where much of the full circuit's driving time goes. Six days of Do Dham is a far less punishing week than six days of a compressed Char Dham.",
    ],
    sections: [
      {
        heading: "Why this is the sensible compromise",
        paragraphs: [
          "The full four-shrine circuit needs ten days and is a hard ten days. Attempting it in six means driving dawn to dusk and arriving at Kedarnath exhausted, and we would rather sell you a Do Dham than a Char Dham that does not work.",
          "If you have ten or eleven days, do all four. If you have a week, do these two properly.",
        ],
      },
      {
        heading: "The Kedarnath day is the whole plan",
        paragraphs: [
          "Sixteen kilometres uphill at altitude is the physical centre of this trip, and everything else should be arranged around arriving at Gaurikund rested. The itinerary builds in a night before rather than driving up and walking the same day.",
          "Ponies, porters and a seasonal helicopter from the valley are all available. Decide in advance — someone who starts walking at dawn and reconsiders at the halfway point is in the worst possible position.",
        ],
      },
      {
        heading: "Registration, season and weather",
        paragraphs: [
          "Char Dham registration applies to both shrines, through the Uttarakhand government system, checked en route, per traveller. We handle it with the booking.",
          "Both open in spring and close in autumn with dates set annually. The monsoon falls inside the season and landslides close these roads — plan slack and avoid tight onward travel.",
        ],
      },
    ],
    ownFaqs: [
      {
        q: "What is the Do Dham yatra?",
        a: "Kedarnath and Badrinath together, over six to seven days from Rishikesh — the Char Dham circuit's shorter half, keeping the two shrines most pilgrims most want and dropping the long westward leg to Yamunotri and Gangotri.",
      },
      {
        q: "Should I do Do Dham or the full Char Dham?",
        a: "If you have ten or eleven days, do all four. If you have a week, do these two properly. A Char Dham compressed into six days means driving dawn to dusk and then attempting a sixteen-kilometre uphill trek exhausted, and we would rather sell you the shorter trip than one that does not work.",
      },
      {
        q: "How do Kedarnath and Badrinath differ physically?",
        a: "Completely. Badrinath has a road to the temple door and is the easiest of the four shrines. Kedarnath is about sixteen kilometres uphill from Gaurikund at altitude and is the hardest day of the trip. Plan for a pony, porter or the seasonal helicopter in advance if you are not a confident long-distance walker.",
      },
    ],
    notFor: "Anyone with the full ten or eleven days available, who should do all four shrines instead. Also not a trip that works without planning for the Kedarnath trek — decide about the pony or helicopter before you travel, not halfway up.",
  },

  "kedarnath-tour-from-rishikesh": {
    body: [
      "Three to four days from Rishikesh, from ₹7,999 per person, with the cab, the stay and the guidance arranged. The drive takes you to Gaurikund; Kedarnath itself is about sixteen kilometres further on foot, uphill, at altitude.",
      "That trek is the trip. Everything else — the vehicle, the hotel, the registration — is logistics around a single hard day of walking, and the honest thing to tell you up front is that fit walkers do it in a long day and plenty of people find it the hardest physical thing they have attempted.",
      "There are three legitimate ways up: walk, take a pony, or fly from the valley on the seasonal helicopter service. None of them is cheating and all of them should be chosen before you arrive at the roadhead.",
    ],
    sections: [
      {
        heading: "The trek, in detail",
        paragraphs: [
          "Around sixteen kilometres from Gaurikund, climbing throughout, on a built path that is busy in season. Start before dawn — the weather is more settled in the morning and you want the descent done in daylight.",
          "Coming down is a separate effort and harder on knees than the climb is on lungs. People plan for the ascent and are surprised by the descent, and it is worth carrying a stick and taking it slowly.",
          "Ponies and porters are hired at Gaurikund. A palanquin carried by four bearers is available for those who cannot walk or ride. These are normal, long-established arrangements rather than last resorts.",
        ],
      },
      {
        heading: "The helicopter, honestly",
        paragraphs: [
          "A seasonal service flies from helipads in the valley and reduces the whole thing to a short flight and a walk from the Kedarnath helipad. It is weather-dependent, it books out, and in poor visibility it simply does not fly.",
          "If it is your plan, treat a grounded day as likely rather than unlucky, and have an answer for what you do instead. Do not build a tight itinerary around a Himalayan helicopter.",
        ],
      },
      {
        heading: "Altitude, registration and dates",
        paragraphs: [
          "Kedarnath is high and the ascent is quick if you drive up one day and walk the next. Altitude sickness is a real risk and unrelated to fitness. Spend a night lower on the way up where the itinerary allows, drink more than you want to, and descend if you get a headache with nausea or are breathless at rest.",
          "Registration through the Uttarakhand government system is required, checked, and per person. We do it with the booking.",
          "The temple opens in spring and closes in autumn, dates announced annually. Weather closes the route at both ends of the season and the monsoon brings landslides. Give us your dates early.",
        ],
      },
    ],
    ownFaqs: [
      {
        q: "How long is the Kedarnath trek and how hard is it?",
        a: "About sixteen kilometres from Gaurikund, uphill the whole way, at altitude. Fit walkers do it in a long day; many people find it the hardest physical thing they have attempted, and some turn back. Start before dawn, and plan for the descent as a separate effort — it is harder on knees than the climb is on lungs.",
      },
      {
        q: "Can I take a helicopter to Kedarnath?",
        a: "Yes, a seasonal service flies from helipads in the valley, leaving a short walk from the Kedarnath helipad. It is weather-dependent, it books out, and in poor visibility it does not fly at all — so treat a grounded day as likely rather than unlucky and do not build a tight itinerary around it.",
      },
      {
        q: "What if I cannot walk sixteen kilometres uphill?",
        a: "Take a pony, a porter or a palanquin from Gaurikund, or fly. These are long-established arrangements, not last resorts, and the important thing is deciding before you arrive — somebody who starts walking at dawn and reconsiders halfway is in the worst position of anyone on that path.",
      },
      {
        q: "Do I need registration for Kedarnath?",
        a: "Yes — through the Uttarakhand government system, checked en route, and per traveller rather than per booking. We complete it as part of the arrangement; carry photo ID.",
      },
    ],
    notFor: "Anyone unwilling to walk sixteen kilometres uphill or to arrange a pony, palanquin or helicopter instead. Also not for travellers with a history of altitude illness, or heart or respiratory conditions, without medical advice — and not bookable outside the temple's season.",
  },

  "badrinath-tour-from-rishikesh": {
    body: [
      "Three days from Rishikesh, from ₹7,499 per person. Of the four Char Dham shrines this is the one you can reach without walking — the road climbs to the temple itself, which makes it the achievable pilgrimage for older travellers and for anyone who cannot manage the Kedarnath trek.",
      "Three kilometres beyond the temple is Mana, described as the last village on this road before the Tibet border, and it is the part of the trip people talk about afterwards. The landscape there has already left Garhwal's forest behind for something much starker.",
      "Easier does not mean easy. It is a long drive, it climbs a long way, and it is cold at the top whatever the weather in Rishikesh.",
    ],
    sections: [
      {
        heading: "Why this is the accessible shrine",
        paragraphs: [
          "No trek. The temple is at the roadhead, so the physical demand is sitting in a vehicle on a winding mountain road rather than climbing. For elderly parents, that single fact is usually what decides which shrine a family can visit.",
          "Short walks around the temple complex and to the hot spring beside it are manageable for most people.",
        ],
      },
      {
        heading: "Mana, and what lies beyond",
        paragraphs: [
          "A short drive past Badrinath, Mana sits where the valley narrows and the vegetation gives out. It is a working village rather than an attraction, which is most of its appeal.",
          "The roads further on are restricted. Go where you are permitted and do not improvise near a border — this is one place where a wrong turn is a serious matter rather than an inconvenience.",
        ],
      },
      {
        heading: "Registration, season, weather",
        paragraphs: [
          "Char Dham registration via the Uttarakhand government system is required and checked, per traveller. We complete it with the booking.",
          "The temple opens in spring and closes in autumn with dates set each year. Landslides on this road during the monsoon are routine rather than exceptional, and they close it for anything from hours to days.",
          "Altitude still applies even without a trek, because a vehicle gains it faster than a body adjusts. Take it slowly on arrival, drink water, and do not dismiss a bad headache.",
        ],
      },
    ],
    ownFaqs: [
      {
        q: "Is there a trek to Badrinath temple?",
        a: "No. The road climbs to the temple itself, which makes Badrinath the achievable one of the four Char Dham shrines — and for families travelling with elderly parents, that single fact usually decides which shrine they can visit. Short walks around the complex and to the hot spring are manageable for most people.",
      },
      {
        q: "Is Badrinath suitable for elderly travellers?",
        a: "It is the most suitable of the four, because there is no trek. It is still a long, climbing drive on a winding mountain road and it is cold at the top whatever the weather below, so warm clothing and a slow first few hours on arrival matter. Take medical advice if there are heart or respiratory conditions.",
      },
      {
        q: "What is at Mana village?",
        a: "A working village a short drive beyond the temple, where the valley narrows and the vegetation gives out — described as the last village on this road before the Tibet border. It is the part of this trip people remember. Roads beyond are restricted; go only where you are permitted.",
      },
      {
        q: "How reliable is the road to Badrinath?",
        a: "Reliable outside the monsoon, and genuinely unpredictable inside it — landslides on this road during the rains are routine rather than exceptional and close it for hours or days. Do not plan tight onward travel around a monsoon visit.",
      },
    ],
    notFor: "Travellers on a tight schedule during the monsoon, when landslides routinely close this road for hours or days. Also closed entirely outside the temple's spring-to-autumn season.",
  },

  "gangotri-tour-from-rishikesh": {
    body: [
      "Two to three days from Rishikesh, from ₹6,999 per person, to the temple at Gangotri — the shrine dedicated to the Ganga's origin, with a road that goes all the way to it.",
      "One honest correction worth making before you book: Gangotri temple is not the physical source of the river. The glacier snout at Gaumukh, where the water actually emerges from the ice, is a substantial trek beyond the temple and requires a separate permit. Most pilgrims visit the temple, and that is the yatra as it is normally understood.",
      "With no trek and a shorter drive than Badrinath, this is the gentlest of the four shrines and the easiest to fit into a short trip.",
    ],
    sections: [
      {
        heading: "Temple or glacier",
        paragraphs: [
          "The temple is at the roadhead and the visit is a walk of minutes. That is what almost everyone comes for and it is a complete pilgrimage in itself.",
          "Gaumukh is a different undertaking — a long trek into a high, cold, permitted area, requiring fitness, time and a permit arranged in advance. If that is what you want, say so when you enquire, because it changes the trip entirely and it is not what the ₹6,999 covers.",
        ],
      },
      {
        heading: "What two to three days gets you",
        paragraphs: [
          "A day's drive up through the Bhagirathi valley, a night, the temple, and a day back. Three days makes it comfortable and lets you see the valley rather than only drive it.",
          "It pairs naturally with Yamunotri — the two western shrines are usually done together, and doing both takes little more than doing one.",
        ],
      },
      {
        heading: "Season and registration",
        paragraphs: [
          "Spring to autumn, dates announced each year. Char Dham registration through the Uttarakhand government system is required and checked, per traveller, and we complete it with the booking.",
          "Monsoon landslides affect this valley as they do the others. Plan slack.",
        ],
      },
    ],
    ownFaqs: [
      {
        q: "Is Gangotri the actual source of the Ganga?",
        a: "No, and it is the most common misunderstanding about this shrine. The temple is dedicated to the river's origin, but the water emerges from the ice at Gaumukh, the glacier snout, which is a substantial trek beyond the temple and needs a separate permit. Most pilgrims visit the temple — that is the yatra as normally understood.",
      },
      {
        q: "Is there a trek to Gangotri temple?",
        a: "No. The road goes to the temple and the visit is a walk of minutes, which makes this the gentlest of the four Char Dham shrines and the easiest to fit into a short trip.",
      },
      {
        q: "Can I trek to Gaumukh glacier?",
        a: "Yes, but it is an entirely different trip — a long trek into a high, cold, permitted area needing fitness, time and a permit arranged in advance. It is not included in the ₹6,999 temple tour, so tell us at the enquiry stage if that is what you actually want.",
      },
      {
        q: "Can Gangotri and Yamunotri be combined?",
        a: "Yes, and they usually are — the two western shrines sit together and doing both takes little more time than doing one. Ask us to quote the pair rather than booking them separately.",
      },
    ],
    notFor: "Anyone expecting to see the glacier itself; Gaumukh is a separate permitted trek and not part of this tour. Also closed outside the spring-to-autumn season.",
  },

  "yamunotri-tour-from-rishikesh": {
    body: [
      "Two to three days from Rishikesh, from ₹6,999 per person, to the source shrine of the Yamuna. The road ends at Janki Chatti and the temple is a climb of several kilometres from there — so unlike Gangotri, this one involves walking.",
      "The thermal springs at the top are the detail everyone remembers. Hot water emerging beside a freezing mountain river, used for cooking offerings, is a genuinely strange and memorable thing to come across after an uphill walk.",
      "The trek is shorter and less punishing than Kedarnath's but it is still a real climb, and ponies and palanquins are available at the roadhead for anyone who needs them.",
    ],
    sections: [
      {
        heading: "The walk up from Janki Chatti",
        paragraphs: [
          "Several kilometres of climbing on a built path. Most reasonably mobile people manage it in a few hours with stops; it is a fraction of Kedarnath's sixteen kilometres but it is not flat and it is not short.",
          "Ponies, porters and palanquins are hired at Janki Chatti and are in regular use by pilgrims of all ages. Decide before you set off rather than partway up.",
        ],
      },
      {
        heading: "The hot springs",
        paragraphs: [
          "Thermal water at the temple is hot enough to cook with, and rice tied in cloth is lowered into it as an offering. It sits a few metres from snowmelt, which is the contrast that makes it stick in the memory.",
          "There are bathing arrangements at the springs. They are busy in season.",
        ],
      },
      {
        heading: "Pairing it, and the season",
        paragraphs: [
          "Yamunotri and Gangotri are the two western shrines and are almost always done together — the additional time for the second is small and the drive overlaps.",
          "Spring to autumn, with dates announced each year. Char Dham registration through the Uttarakhand government system applies, is checked, and is per traveller; we handle it with the booking.",
        ],
      },
    ],
    ownFaqs: [
      {
        q: "Is there a trek to Yamunotri?",
        a: "Yes. The road ends at Janki Chatti and the temple is a climb of several kilometres from there on a built path — a few hours with stops for most reasonably mobile people. It is far shorter than Kedarnath's sixteen kilometres but it is a real climb, and ponies, porters and palanquins are available at the roadhead.",
      },
      {
        q: "What are the hot springs at Yamunotri?",
        a: "Thermal water at the temple, hot enough to cook with — rice is tied in cloth and lowered into it as an offering, a few metres from snowmelt. That contrast is what people remember about this shrine. There are bathing arrangements, and they are busy in season.",
      },
      {
        q: "Should I combine Yamunotri with Gangotri?",
        a: "Almost everyone does. They are the two western shrines, the drives overlap, and adding the second costs little extra time. Ask us to quote both together rather than booking them separately.",
      },
    ],
    notFor: "Anyone unable to climb several kilometres who is not willing to take a pony or palanquin from Janki Chatti. Also closed outside the spring-to-autumn season.",
  },

  "char-dham-by-bike-from-rishikesh": {
    body: [
      "All four shrines on a motorcycle over ten to twelve days, ₹24,999 per rider. It is the most demanding trip on this site after Spiti, and it combines two separate difficulties that each deserve respect on their own.",
      "The riding is ten days of Himalayan hill roads — sustained climbing and descending, hairpins, broken surfaces and landslide-prone stretches. The pilgrimage still includes the walking: several kilometres up to Yamunotri and about sixteen to Kedarnath, done after a day in the saddle rather than instead of one.",
      "Take the Himalayan. This is a route where ground clearance, suspension travel and an upright riding position stop being preferences.",
    ],
    sections: [
      {
        heading: "Riding and walking in the same trip",
        paragraphs: [
          "The thing riders underestimate is arriving at Gaurikund after days on a bike and then walking sixteen kilometres uphill. Riding is tiring in the shoulders, back and hands; trekking asks for legs and lungs. Doing both in one trip is harder than either alone.",
          "The itinerary builds in rest before the Kedarnath day for exactly this reason. Do not compress it, and consider a pony or the seasonal helicopter there even if you would normally walk.",
        ],
      },
      {
        heading: "Roads, weather and landslides",
        paragraphs: [
          "Garhwal's roads during the yatra season are busy with pilgrim traffic, and the monsoon brings landslides that close them without notice. On a bike, that means getting wet and waiting rather than sheltering in a vehicle.",
          "Carry proper wet-weather gear and warm layers. All four shrines are cold and two of them are a long way above where you started the morning.",
        ],
      },
      {
        heading: "Registration, permits and dates",
        paragraphs: [
          "Char Dham registration through the Uttarakhand government system is required for each rider and checked en route. We complete it with the booking.",
          "Shrine opening and closing dates are announced each year. Send us dates and rider details early — both the registration and the route advice depend on them.",
          "Included: lead captain, backup vehicle, fuel, stays on twin sharing, and permits where applicable.",
        ],
      },
    ],
    ownFaqs: [
      {
        q: "How hard is the Char Dham yatra by bike?",
        a: "It combines two separate difficulties. Ten days of Himalayan hill riding — sustained climbs and descents, hairpins, broken surfaces, landslide-prone stretches — plus the walking the pilgrimage still requires: several kilometres to Yamunotri and about sixteen to Kedarnath, done after days in the saddle rather than instead of them.",
      },
      {
        q: "Which bike should I take for Char Dham?",
        a: "The Himalayan. Over ten days of Garhwal hill roads the ground clearance, suspension travel and upright riding position stop being preferences and start deciding whether you enjoy the trip. A Classic 350 is a real compromise and a Duke 390 would be punishing.",
      },
      {
        q: "Do I still have to trek if I ride?",
        a: "Yes — the bike gets you to the roadheads, not the shrines. Yamunotri is a climb of several kilometres from Janki Chatti and Kedarnath is about sixteen from Gaurikund. Riders routinely underestimate walking uphill after days on a motorcycle, so consider a pony or the seasonal helicopter at Kedarnath even if you would normally walk.",
      },
      {
        q: "Is registration required for a bike yatra?",
        a: "Yes, exactly as for any other Char Dham traveller — through the Uttarakhand government system, per rider, checked en route. We complete it with the booking, so send us rider details and dates early.",
      },
    ],
    notFor: "Riders without multi-day hill experience, and anyone treating it as a ride rather than a ride plus two treks. Monsoon dates carry a real landslide risk that is considerably less comfortable on a bike than in a car.",
  },
};

export const wave3Haridwar: Record<string, Wave3Content> = {
  "haridwar-tour-from-rishikesh": {
    body: [
      "Haridwar is about 25 km from Rishikesh, which makes it a half day if you want the temples and a full day if you want the evening aarti as well. ₹1,999 for the cab.",
      "The two cities are often spoken of together and they are not alike. Rishikesh is ashrams, rafting and cafes; Haridwar is a working pilgrimage city, denser and louder, built around the ghats at Har Ki Pauri where the Ganga is channelled through the middle of town.",
      "If you only have an evening, go for the aarti and nothing else. If you have a day, add the two hilltop temples, both of which have cable cars.",
    ],
    sections: [
      {
        heading: "Half day or full day",
        paragraphs: [
          "A half day covers Har Ki Pauri, a walk along the ghats and the bazaar behind them. That is the core of Haridwar and it is enough for many visitors.",
          "A full day adds Mansa Devi and Chandi Devi, the hilltop temples on either side of the city, each reached by cable car or on foot, plus Daksha Mahadev or Bharat Mata Mandir if you want more. Then the aarti in the evening and the drive back.",
        ],
      },
      {
        heading: "Timing it around the aarti",
        paragraphs: [
          "The evening Ganga Aarti at Har Ki Pauri is the reason most people come, and it happens at dusk — so the time changes through the year. Arrive early for a place near the water; the ghats fill well before it starts.",
          "That also means a full-day trip gets back to Rishikesh late. A 25 km drive is nothing, but allow for the traffic leaving Haridwar after the aarti, which is substantial.",
        ],
      },
      {
        heading: "Practicalities",
        paragraphs: [
          "Shoes come off at temples and at the ghats, and there are places to leave them. Carry as little as possible; the ghats are crowded and the bazaar is tight.",
          "Haridwar is a vegetarian city by convention and alcohol is not part of its character. That surprises visitors who have come from the cafes of Tapovan.",
        ],
      },
    ],
    ownFaqs: [
      {
        q: "How far is Haridwar from Rishikesh?",
        a: "About 25 km, which is a short drive — half a day if you want the ghats and temples, a full day if you want to stay for the evening aarti as well.",
      },
      {
        q: "What is worth seeing in Haridwar in half a day?",
        a: "Har Ki Pauri, a walk along the ghats, and the bazaar behind them. That is the core of the city and it is enough for many visitors. A full day adds the two hilltop temples, Mansa Devi and Chandi Devi, both reached by cable car or on foot.",
      },
      {
        q: "What time is the Ganga Aarti at Har Ki Pauri?",
        a: "At dusk, so the time shifts through the year. Arrive well before it starts if you want a place near the water — the ghats fill early. Allow for heavy traffic leaving Haridwar afterwards when planning the drive back.",
      },
      {
        q: "Is Haridwar similar to Rishikesh?",
        a: "No, and visitors are often surprised. Rishikesh is ashrams, rafting and cafes; Haridwar is a working pilgrimage city — denser, louder, vegetarian by convention and without the alcohol and cafe culture of Tapovan.",
      },
    ],
    notFor: "Anyone wanting the cafe-and-yoga side of Uttarakhand; that is Rishikesh. Haridwar is a busy pilgrimage city and it is not a relaxing afternoon.",
  },

  "haridwar-ganga-aarti-tour": {
    body: [
      "An evening trip from Rishikesh to Har Ki Pauri for the Ganga Aarti, ₹1,499 for the cab. It is 25 km each way and it is the single best evening available from Rishikesh.",
      "Hundreds of lamps are floated on the river at dusk while bells ring and the crowd sings, in a channel of the Ganga running through the middle of a city. It is genuinely moving regardless of what you believe, and it is free to attend.",
      "The practical part matters more than usual here. The aarti happens at dusk, so the time moves through the year; the ghats fill well before it begins; and getting out of Haridwar afterwards takes a while.",
    ],
    sections: [
      {
        heading: "Getting a place",
        paragraphs: [
          "Arrive early — an hour before is not excessive in season. The steps closest to the water go first and that is where you want to be.",
          "The ghats are crowded and the surface is wet stone. Hold on to children and to anything you are carrying, and leave valuables behind.",
        ],
      },
      {
        heading: "What actually happens",
        paragraphs: [
          "Lamps are lit and floated, bells and conches sound, and the priests perform the aarti at the water's edge. People buy small leaf boats with flowers and a lamp to set on the river themselves, which is the part most visitors want to do.",
          "It lasts well under an hour. The atmosphere before it, as the ghats fill and the light goes, is as much of the experience as the ceremony.",
        ],
      },
      {
        heading: "The drive back",
        paragraphs: [
          "Everyone leaves at once and the roads out of Haridwar are slow for a while afterwards. The 25 km back to Rishikesh takes longer than it should and that is normal.",
          "Having your own cab waiting is the main reason to book this rather than improvising it — finding transport at Har Ki Pauri immediately after the aarti is the hard part of the evening.",
        ],
      },
    ],
    ownFaqs: [
      {
        q: "What time should I arrive for the Ganga Aarti in Haridwar?",
        a: "An hour before dusk is not excessive in season. The aarti itself is at dusk so the time shifts through the year, and the steps nearest the water fill first — which is where you want to be.",
      },
      {
        q: "Is the Ganga Aarti free?",
        a: "Yes, attending costs nothing. People buy a small leaf boat with flowers and a lamp to float on the river themselves, which is what most visitors want to do, and that is a few rupees.",
      },
      {
        q: "Why book a cab rather than arranging it there?",
        a: "Because the hard part of the evening is leaving. Everyone departs at once, the roads out of Haridwar are slow afterwards, and finding transport at Har Ki Pauri immediately after the aarti is genuinely difficult. Having your own vehicle waiting is the whole value of this booking.",
      },
      {
        q: "Is the aarti suitable with children?",
        a: "Yes, and children generally love it — but the ghats are very crowded and the stone is wet, so hold on to them throughout, and leave anything valuable behind.",
      },
    ],
    notFor: "Anyone who dislikes dense crowds — the ghats are packed and that is inseparable from the experience. Also leave valuables behind; this is not a place to carry things.",
  },

  "things-to-do-in-haridwar": {
    body: [
      "Haridwar in a list, for anyone deciding whether it is worth the 25 km from Rishikesh. The short answer is that it is, for one evening, and that a full day is only worth it if temples interest you.",
      "The city is organised around Har Ki Pauri, the ghat where the Ganga is channelled through the centre of town and where the evening aarti happens. Everything else is either a temple on a hill above the city or a bazaar behind the ghats.",
      "It is a working pilgrimage city rather than a resort — vegetarian by convention, without alcohol, and considerably denser and louder than Rishikesh. Visitors who arrive expecting Tapovan's cafes are always surprised.",
    ],
    sections: [
      {
        heading: "The essentials",
        paragraphs: [
          "Har Ki Pauri and the evening Ganga Aarti. This is the reason to come and for many visitors it is the whole visit. Arrive early; the ghats fill well before dusk.",
          "The ghats by day, which are a completely different place — pilgrims bathing, families, barbers, and the river running fast and cold through the middle of it all.",
          "The bazaar behind the ghats: brass, puja items, sweets and rudraksha. It is tight, busy and good, and it is where to buy anything you want to take home.",
        ],
      },
      {
        heading: "The hilltop temples",
        paragraphs: [
          "Mansa Devi sits above the city on one side and Chandi Devi on the other, and both are reached by cable car or on foot. The rides are short, the views over the Ganga and the city are the point, and together they make a comfortable half day.",
          "Expect queues in season at both, and at the cable car stations in particular.",
        ],
      },
      {
        heading: "If you have more time",
        paragraphs: [
          "Daksha Mahadev temple at Kankhal, south of the centre, and Bharat Mata Mandir, a multi-storey temple dedicated to the nation, are both worth a stop for anyone whose interest in temples goes beyond the headline sites.",
          "Beyond that, Haridwar rewards walking more than ticking things off. The stretch of ghats either side of Har Ki Pauri in the late afternoon is the best hour in the city.",
        ],
      },
      {
        heading: "Practical notes",
        paragraphs: [
          "Shoes off at temples and ghats, with places to leave them. Carry little; the crowds are dense and the ghat stone is wet.",
          "Haridwar is dry and vegetarian by convention. Dress modestly, particularly at the ghats and temples, where it is a working religious site rather than a sight.",
        ],
      },
    ],
    ownFaqs: [
      {
        q: "Is Haridwar worth visiting from Rishikesh?",
        a: "For one evening, yes — the Ganga Aarti at Har Ki Pauri is the best evening available from Rishikesh and it is 25 km away. A full day is worth it if temples interest you, because the two hilltop shrines and the bazaar fill one comfortably.",
      },
      {
        q: "What are the main things to see in Haridwar?",
        a: "Har Ki Pauri and the evening aarti first. Then the ghats by day, which are a completely different place, and the bazaar behind them. Then Mansa Devi and Chandi Devi, the hilltop temples, both reached by cable car or on foot. Daksha Mahadev and Bharat Mata Mandir if you have longer.",
      },
      {
        q: "How is Haridwar different from Rishikesh?",
        a: "It is a working pilgrimage city rather than a travellers' town — denser, louder, vegetarian by convention and without alcohol or cafe culture. Rishikesh is ashrams, rafting and cafes. Visitors who arrive expecting Tapovan are always surprised.",
      },
      {
        q: "What should I wear in Haridwar?",
        a: "Modestly, particularly at the ghats and temples, which are working religious sites rather than sights. Shoes come off at both and there are places to leave them. Carry as little as you can — the crowds are dense and the ghat stone is wet.",
      },
    ],
    notFor: "Nobody in particular — but it is a guide rather than a booking. If you want the evening aarti arranged, the Ganga Aarti tour is the page for that.",
  },

  "rishikesh-haridwar-combo-tour": {
    body: [
      "Both cities in one itinerary with the same cab, ₹2,999, over one or two days. They are 25 km apart and they are completely unlike each other, which is the argument for seeing them together rather than choosing.",
      "The sensible shape is Rishikesh by day and Haridwar in the evening: the adventure, the ghats at Triveni and the cafes while it is light, then the drive down for the Ganga Aarti at Har Ki Pauri at dusk.",
      "Over two days it opens up properly — a full day of activities in Rishikesh, a night, and a Haridwar day with the hilltop temples before the aarti.",
    ],
    sections: [
      {
        heading: "One day, done well",
        paragraphs: [
          "Morning in Rishikesh — the Laxman Jhula and Tapovan side, or an activity if you have booked one. Early afternoon at Triveni Ghat or the cafes. Then down to Haridwar in time to be at Har Ki Pauri an hour before dusk.",
          "That is a full day and it works. What does not work is trying to add the Haridwar hilltop temples to it — the cable car queues in season will cost you the aarti.",
        ],
      },
      {
        heading: "Two days, and what the second buys",
        paragraphs: [
          "The hilltop temples, Mansa Devi and Chandi Devi, plus the bazaar and the ghats by daylight, which is a different Haridwar from the one you see at the aarti.",
          "It also means a Rishikesh activity does not have to be rushed. Rafting is most of a morning once the drive up to Shivpuri is counted, and on a one-day combo that is tight.",
        ],
      },
      {
        heading: "Why one vehicle matters",
        paragraphs: [
          "The two cities are close but the sites within them are not — Shivpuri is 30 to 45 minutes up the gorge from Rishikesh, and Haridwar's temples sit on hills at opposite ends of the city. Having the car with you is what makes a combined itinerary possible.",
          "It also solves the hard part of the evening, which is leaving Har Ki Pauri after the aarti when several thousand other people are doing the same thing.",
        ],
      },
    ],
    ownFaqs: [
      {
        q: "Can you see Rishikesh and Haridwar in one day?",
        a: "Yes — Rishikesh by day and Haridwar for the evening aarti is a full, workable day. What does not fit is adding Haridwar's hilltop temples as well: the cable car queues in season will cost you the aarti, which is the thing you came down for.",
      },
      {
        q: "What does the second day add?",
        a: "The Mansa Devi and Chandi Devi hilltop temples, the bazaar, and the Haridwar ghats in daylight — which are a completely different place from the ghats at the aarti. It also means a Rishikesh activity is not rushed; rafting alone is most of a morning once the drive to Shivpuri is counted.",
      },
      {
        q: "Why book both cities with one cab?",
        a: "Because the sites are spread out even though the cities are close — Shivpuri is 30 to 45 minutes up the gorge, and Haridwar's two temples are on hills at opposite ends of town. The car is what makes a combined itinerary possible, and it solves the worst part of the evening: leaving Har Ki Pauri when several thousand people leave at once.",
      },
    ],
    notFor: "Anyone trying to fit rafting, both hilltop temples and the aarti into a single day. Pick two of the three, or take the two-day version.",
  },
};

export const wave3Nearby: Record<string, Wave3Content> = {
  "mussoorie-tour-from-rishikesh": {
    body: [
      "Mussoorie is the closest proper hill station to Rishikesh and the easiest one-or-two-day escape from it, ₹3,499 for the cab. A colonial-era town strung along a ridge, with a Mall Road, a view of the Doon valley on one side and the snows on the other when it is clear.",
      "It is also busy, and that is the thing to decide about in advance. In season and at weekends the Mall Road is crowded and the parking is worse, and visitors arriving from Rishikesh's relative calm sometimes wonder why they came.",
      "Go for the ridge walks, Landour and the views. Do not go expecting quiet — for that, Dhanaulti is the same price and an hour further.",
    ],
    sections: [
      {
        heading: "The good part of Mussoorie",
        paragraphs: [
          "Landour, above and behind the main town, is what Mussoorie was before it was busy — narrow lanes, deodar, old churches and a few good places to eat. If you do one thing here, walk the Landour loop.",
          "Lal Tibba for the view on a clear morning, Gun Hill by ropeway, and the Camel's Back Road walk around the ridge. The views are genuinely the reason to come and they are best early.",
        ],
      },
      {
        heading: "Kempty Falls, honestly",
        paragraphs: [
          "It is the headline attraction and it is extremely crowded in season — a developed site with shops and concrete rather than a waterfall in a forest. Plenty of people enjoy it; plenty wish they had spent the time in Landour instead.",
          "If you want a waterfall with nobody at it, do the Neer Garh trek in Rishikesh before you leave and skip Kempty.",
        ],
      },
      {
        heading: "One day or two",
        paragraphs: [
          "One day is a long drive up, a few hours and a drive back — fine, but you will spend much of it in the car and on the Mall.",
          "Two days lets you be there early, which is when Mussoorie is at its best: clear views, empty ridge walks, and the town before the day visitors arrive.",
        ],
      },
    ],
    ownFaqs: [
      {
        q: "Is Mussoorie worth visiting from Rishikesh?",
        a: "Yes for the ridge walks, Landour and the views, which are genuinely good. Not if you want quiet — in season and at weekends the Mall Road is crowded and the parking is worse. For quiet at the same price, Dhanaulti is an hour further on.",
      },
      {
        q: "What is the best part of Mussoorie?",
        a: "Landour, above the main town — narrow lanes, deodar, old churches and a few good places to eat, and much closer to what Mussoorie was before it got busy. If you do one thing here, walk the Landour loop. Lal Tibba and Camel's Back Road for views, best early.",
      },
      {
        q: "Is Kempty Falls worth it?",
        a: "Honestly, often not. It is a developed, very crowded site with shops and concrete rather than a waterfall in a forest. If an uncrowded waterfall is what you want, do the Neer Garh trek in Rishikesh and skip Kempty.",
      },
      {
        q: "Should I do Mussoorie in one day or two?",
        a: "Two if you can. One day is mostly the drive and the Mall. Two lets you be out early, which is when Mussoorie is at its best — clear views and empty ridge walks before the day visitors arrive.",
      },
    ],
    notFor: "Anyone looking for a quiet hill station; Mussoorie in season is busy and the Mall Road is the busiest part of it. Dhanaulti is the same price and the quieter answer.",
  },

  "dhanaulti-tour-from-rishikesh": {
    body: [
      "Dhanaulti is the quiet alternative to Mussoorie, about an hour further on from it, at the same ₹3,499. Deodar forest, eco-parks, almost no commerce and snow in the deep winter.",
      "The whole proposition is what it does not have. There is no Mall Road, no ropeway and not much to do, and people who go there go to walk under very tall trees and sit somewhere cold and silent.",
      "If that sounds thin, take Mussoorie instead. If Rishikesh has been loud and you want two days of nothing, this is the better booking and it is not close.",
    ],
    sections: [
      {
        heading: "What there is",
        paragraphs: [
          "The eco-parks — Amber and Dhara — which are managed deodar forest with walking paths, and genuinely lovely rather than municipal.",
          "Surkanda Devi, a hilltop temple nearby reached on foot or by ropeway, with a wide view from the top on a clear day.",
          "Beyond that: forest, cold air and quiet. That is the offer and it is honest.",
        ],
      },
      {
        heading: "Snow, and the winter trip",
        paragraphs: [
          "Dhanaulti gets snow in the deep winter months and is one of the closest places to Delhi where that reliably happens — which is why it fills up when a snowfall is reported.",
          "Reliability varies year to year, as Himalayan snow always does. If snow is the entire reason for the trip, ask us first rather than booking on hope.",
        ],
      },
      {
        heading: "Combining it with Mussoorie",
        paragraphs: [
          "The road to Dhanaulti goes through Mussoorie, so seeing both over two days costs almost nothing extra in driving and gives you the busy town and the quiet forest in one trip.",
          "The usual order is Mussoorie first for the Mall and the views, then on to Dhanaulti to sleep somewhere silent.",
        ],
      },
    ],
    ownFaqs: [
      {
        q: "Is Dhanaulti better than Mussoorie?",
        a: "Better if you want quiet, and that is the only reason to choose it. Dhanaulti has no Mall Road, no commerce and not much to do — it is deodar forest, cold air and silence. If you want a hill station with things in it, Mussoorie is the right pick.",
      },
      {
        q: "What is there to do in Dhanaulti?",
        a: "The Amber and Dhara eco-parks, which are managed deodar forest with walking paths and genuinely pleasant; Surkanda Devi temple nearby, on foot or by ropeway, with a wide view on a clear day; and after that, walking and sitting still. That is the honest list.",
      },
      {
        q: "Does Dhanaulti get snow?",
        a: "In the deep winter months, and it is one of the closest places to Delhi where that reliably happens — which is why it fills when snowfall is reported. Reliability varies year to year as Himalayan snow always does, so if snow is the whole reason for the trip, ask us before booking.",
      },
      {
        q: "Can I combine Dhanaulti with Mussoorie?",
        a: "Easily, and it is the trip we would recommend. The road to Dhanaulti goes through Mussoorie, so doing both over two days adds almost no driving — Mussoorie first for the Mall and the views, then on to Dhanaulti to sleep somewhere silent.",
      },
    ],
    notFor: "Anyone who needs things to do. Dhanaulti's whole appeal is the absence of them, and visitors who want a busy hill station reliably find it dull.",
  },

  "nainital-tour-from-rishikesh": {
    body: [
      "Nainital is in Kumaon, across on the other side of Uttarakhand, and it is a long drive from Rishikesh — which is why this is a two-to-three-day trip at ₹6,999 rather than a day out.",
      "What you get is a lake with a town built steeply around it, boating on Naini Lake, a Mall Road along the water, and the colonial hill-station character of Kumaon, which is noticeably different from Garhwal.",
      "Be clear-eyed about the drive. It is the longest of the nearby options by a distance and the road crosses from one side of the state to the other. Two days means a lot of car; three is the honest minimum for enjoying it.",
    ],
    sections: [
      {
        heading: "The drive is the deciding factor",
        paragraphs: [
          "This is not Mussoorie, an hour and a half away. Nainital is a different region and a long day's driving, and a two-day trip means driving up, one day there, and driving back.",
          "If you have three days it is a good trip. If you have two, Mussoorie or Dhanaulti give you far more hill time for far less road, and we will say so.",
        ],
      },
      {
        heading: "What to do there",
        paragraphs: [
          "Boating on Naini Lake is the thing, and it is better than it sounds — the town rises steeply on both sides and seeing it from the water is the best view of it.",
          "Snow View by cable car, the Mall Road walk along the lake, and Tiffin Top or Naina Peak for anyone who wants a climb. Kumaon's bigger attraction, Jim Corbett, is in the same direction and often combined.",
        ],
      },
      {
        heading: "Season",
        paragraphs: [
          "Spring and autumn are the best of it — clear, cool and without the peak-season crowds that fill the Mall and the lake in high summer.",
          "Winter is cold and quiet with occasional snow. The monsoon brings landslide risk on the approach roads, as everywhere in Uttarakhand.",
        ],
      },
    ],
    ownFaqs: [
      {
        q: "How long does it take to get to Nainital from Rishikesh?",
        a: "A long day's driving — Nainital is in Kumaon, on the other side of Uttarakhand, and this is much further than Mussoorie or Dhanaulti. That drive is why this is a two-to-three-day trip rather than a day out.",
      },
      {
        q: "Is Nainital worth the drive from Rishikesh?",
        a: "With three days, yes. With two, honestly no — you would spend most of it in the car, and Mussoorie or Dhanaulti give you far more hill time for far less road. We would rather tell you that than sell you the longer trip.",
      },
      {
        q: "What should I do in Nainital?",
        a: "Boat on Naini Lake, which is the best view of a town built steeply on both sides of the water. Snow View by cable car, the Mall Road along the lake, and Tiffin Top or Naina Peak if you want a climb. Jim Corbett is in the same direction and is often combined.",
      },
      {
        q: "Can I combine Nainital with Jim Corbett?",
        a: "Yes, and it is the sensible way to justify the drive — both are in Kumaon in the same direction from Rishikesh. Tell us if you want both and we will build it as one itinerary rather than two separate trips.",
      },
    ],
    notFor: "Two-day trips. The drive across the state eats most of a two-day window, and Mussoorie or Dhanaulti are the better bookings if that is all the time you have.",
  },

  "jim-corbett-tour-from-rishikesh": {
    body: [
      "India's oldest national park, in Kumaon, two to three days from Rishikesh at ₹7,999 for the cab. Jeep and canter safaris through sal forest and grassland, with tigers, elephants, deer and a great deal of birdlife.",
      "Two things decide whether a Corbett trip works, and neither is the cab. The first is permits: safari entry is by permit for a specific zone, date and slot, and they are limited and booked in advance — the popular zones go early in season and cannot be bought at the gate.",
      "The second is expectation. Nobody can promise you a tiger. Corbett has a healthy population and sightings happen, but a safari is a few hours in a very large forest and plenty of visitors see none. Anyone who guarantees you a sighting is selling you something they do not control.",
    ],
    sections: [
      {
        heading: "Zones, and why they matter more than anything",
        paragraphs: [
          "The park is divided into zones, and they are genuinely different: some are grassland with long sightlines, some are dense forest, some have a water body, and they do not all open at the same times of year. The zone you get is the single biggest factor in what your safari is like.",
          "Dhikala is the best known and the hardest to get, with limited capacity and advance allocation. The zones that stay open through the monsoon are a different proposition from the dry-season ones.",
          "Tell us your dates as early as you possibly can. Permits are the binding constraint on this trip and late bookings get whatever is left rather than what is best.",
        ],
      },
      {
        heading: "Safari timings and what to bring",
        paragraphs: [
          "Safaris run in the early morning and the late afternoon, which is when animals move. Early morning is cold in winter in an open jeep — genuinely cold, and visitors consistently underdress for it.",
          "Bring binoculars and a long lens if you have them, neutral clothing, and patience. The best wildlife hours are the quietest ones and the people who see most are the ones who stop talking.",
        ],
      },
      {
        heading: "Season",
        paragraphs: [
          "The dry months concentrate animals around water and make for the best sightings; the forest is also thinner and sightlines are longer. Later in the dry season is hot but productive.",
          "Parts of the park close in the monsoon and the zones that remain open are green, beautiful and harder for spotting. If a sighting is the whole point, do not come in the rains.",
        ],
      },
      {
        heading: "Combining it",
        paragraphs: [
          "Nainital is in the same direction and the two are frequently done together, which spreads the long drive from Rishikesh across a better itinerary.",
          "Three days is the right length for Corbett alone — a drive, two safaris on separate slots, and a drive back. Two days means one safari and a lot of car.",
        ],
      },
    ],
    ownFaqs: [
      {
        q: "Do I need to book Jim Corbett safari permits in advance?",
        a: "Yes, and this is the binding constraint on the whole trip. Entry is by permit for a specific zone, date and slot, numbers are limited, and the popular zones — Dhikala above all — go early in the season. They cannot be bought at the gate. Give us your dates as early as you can, because late bookings get what is left rather than what is best.",
      },
      {
        q: "Will I see a tiger at Jim Corbett?",
        a: "Nobody can promise that, and anyone who does is selling you something they do not control. Corbett has a healthy tiger population and sightings happen, but a safari is a few hours in a very large forest and plenty of visitors see none. Go for the forest and the birdlife and treat a tiger as a bonus.",
      },
      {
        q: "Which Corbett zone is best?",
        a: "They are genuinely different — some grassland with long sightlines, some dense forest, some with water — and they do not all open at the same times of year. The zone is the biggest single factor in what your safari is like. Dhikala is the best known and hardest to get. Which one you can have depends almost entirely on how early you book.",
      },
      {
        q: "What is the best season for Corbett?",
        a: "The dry months, when animals concentrate around water and the thinner forest gives longer sightlines. Parts of the park close in the monsoon, and the zones that stay open are green and beautiful but much harder for spotting — so if a sighting matters to you, do not come in the rains.",
      },
      {
        q: "How many days do I need for Corbett from Rishikesh?",
        a: "Three. That is a driving day, two safaris on separate slots, and a driving day back. Two days gets you one safari and a lot of car — and since sightings are a matter of chance, one safari is a thin bet.",
      },
    ],
    notFor: "Anyone booking late in the season and expecting a choice of zone — permits are limited and allocated in advance. Also not for visitors who need a guaranteed tiger: no operator anywhere can promise one, and a monsoon visit makes a sighting considerably less likely.",
  },
};

export const wave3Guides: Record<string, Wave3Content> = {
  "rishikesh-adventure-sports-price-list": {
    body: [
      "Every price on this site in one place, so you can build a budget before you enquire. These are live 2026 rates rather than indicative ones.",
      "The cheapest substantial things here are water zorbing at ₹300, paintball and wall climbing at ₹400, and the rope course and go-karting at ₹500. Rafting starts at ₹600 for the 9 km stretch. A camp night with meals and a bonfire is ₹999.",
      "The expensive end is the bungee at ₹3,700, the giant swing at ₹3,500, the hot air balloon at ₹5,500 and the multi-day expeditions and bike tours above that. Almost everything else sits between ₹400 and ₹1,800.",
    ],
    sections: [
      {
        heading: "Where the real value is",
        paragraphs: [
          "The 16 km rafting run at ₹1,000 is the single best thing you can buy here, and it includes the cliff jump and body-surfing stops. Nothing else on this list gives you three hours of that for a four-figure sum.",
          "The rope course at ₹500 is the best value for families and for anybody travelling with children under the rafting age of 14.",
          "Rafting plus camping bundled at ₹1,599 is less than the two bought separately and fills a weekend properly, which is why it is the best-selling thing on the site.",
        ],
      },
      {
        heading: "Where people overspend",
        paragraphs: [
          "The ₹4,999 bungee bundle is ₹3,700 of bungee and about ₹1,300 of everything else. It is not a discount on the jump, and a meaningful number of people who pay to bungee do not jump and are not refunded.",
          "The hot air balloon at ₹5,500 is the most weather-dependent purchase here. Book it on your first available morning, not your last.",
          "The 36 km rafting stretch at ₹2,000 is twice the 16 km and is the wrong first rafting trip. People buy it for the number and finish having enjoyed it less.",
        ],
      },
      {
        heading: "What prices do not include",
        paragraphs: [
          "Travel to Rishikesh, unless you book the Delhi tour that bundles the cab. Fuel on any rental. GST where applicable. Photo and video add-ons on most activities.",
          "Where a package lists meals it specifies which ones — dinner and breakfast at a camp is standard, lunch on an activity day generally is not.",
        ],
      },
    ],
    ownFaqs: [
      {
        q: "What is the cheapest adventure activity in Rishikesh?",
        a: "Water zorbing at ₹300, then paintball and wall climbing at ₹400, and the rope course and go-karting at ₹500. Rafting starts at ₹600 for the 9 km stretch, and a camp night with meals and a bonfire is ₹999.",
      },
      {
        q: "What gives the best value in Rishikesh?",
        a: "The 16 km rafting run at ₹1,000 — three hours on the water including the cliff jump and body-surfing stops, and nothing else here comes close for the money. For families with children under 14, the ₹500 rope course. For a weekend, rafting plus camping bundled at ₹1,599.",
      },
      {
        q: "Is the bungee bundle good value?",
        a: "Not really. The ₹4,999 combo is ₹3,700 of bungee and about ₹1,300 of everything else — the rafting and camp night at close to cost rather than a discount on the jump. And a real proportion of people who pay to bungee do not jump, with no refund.",
      },
      {
        q: "What is not included in these prices?",
        a: "Travel to Rishikesh unless you book the Delhi tour, fuel on any rental, GST where applicable, and photo or video add-ons on most activities. Packages specify which meals are included — camp dinner and breakfast is standard, activity-day lunch generally is not.",
      },
    ],
    notFor: "Nobody — it is a reference page, here so you can budget before enquiring.",
  },

  "best-time-for-river-rafting-in-rishikesh": {
    body: [
      "Rafting on the Ganga here runs from roughly September to June, and stops for the monsoon. The suspension is administrative rather than an operator's weather call, and while it is in force nobody is rafting at any price.",
      "Within the open season the river changes a great deal. October and November are the clearest and most pleasant months with good water. December to February is cold — genuinely cold, and a wet three hours in January is a different experience from a wet three hours in April. March to June is warm, lower-water and the best time for swimming and the cliff jump.",
      "If you want one answer: October to early November, or March to April. Those are the windows where the water, the weather and the crowds are all reasonable at once.",
    ],
    sections: [
      {
        heading: "Month by month, roughly",
        paragraphs: [
          "September: the river reopens once levels drop, and the date moves every year because it follows the water rather than the calendar. Early September is often still closed.",
          "October and November: the best of the year. Strong water, clear air, comfortable temperatures, and the Himalaya visible on the drive up.",
          "December to February: cold. The rafting still runs and the water is good, but you are wet for three hours in winter and the cliff jump and swim stops lose their appeal. Wetsuits are worth asking about.",
          "March to June: warming up, water levels falling as the season goes on, and the best months for the swimming and body-surfing stops. June gets hot and the closure approaches.",
          "July and August: closed. See below.",
        ],
      },
      {
        heading: "The monsoon closure",
        paragraphs: [
          "It is usually in place from around the end of June until the river drops in September, and the exact dates move each year because they follow discharge rather than the calendar. They are announced locally rather than well in advance.",
          "What makes the monsoon unrunnable is not rain, it is volume. Rapids that are Grade III in October become something else entirely when the river carries several times the water, and the beaches used to launch and land disappear beneath it.",
          "Anyone offering you a firm reopening date months ahead is guessing. Anyone offering you rafting during the suspension should be avoided.",
        ],
      },
      {
        heading: "What to do if your dates fall in the closure",
        paragraphs: [
          "Most of Rishikesh is not on the water. Bungee, the giant swing, zipline, flying fox and the rope courses all run through the monsoon subject to the day's weather.",
          "Waterfall treks are at their best — Neer Garh is worth seeing when it is full rather than a trickle. Camping continues at sites above the river. And the town itself, the ghats and the aarti are unaffected.",
        ],
      },
    ],
    ownFaqs: [
      {
        q: "When is the best time for rafting in Rishikesh?",
        a: "October to early November, or March to April. Those are the windows where water, weather and crowds are all reasonable at once. October and November have the strongest water and clearest air; March and April are warmer and better for the swim and cliff-jump stops.",
      },
      {
        q: "Is rafting closed during the monsoon in Rishikesh?",
        a: "Yes, and it is an administrative suspension rather than a daily weather call — usually from around the end of June until the river drops in September. While it is in force nobody is running trips at any price. Anyone offering you rafting inside the closure should be avoided.",
      },
      {
        q: "Can you raft in Rishikesh in December and January?",
        a: "Yes, the river runs and the water is good — but you are wet for three hours in winter, which is colder than most people picture. The cliff jump and swim stops lose their appeal entirely. Ask about a wetsuit if you are booking in deep winter.",
      },
      {
        q: "Why do the reopening dates change every year?",
        a: "Because they follow the river rather than the calendar. Reopening depends on the water falling to a safe level and the launch and exit beaches re-emerging as it drops — a late monsoon pushes the restart back, an early withdrawal brings it forward. The same applies in reverse: a heavy June can bring the closure forward by a couple of weeks.",
      },
    ],
    notFor: "Nobody — but if your dates fall inside the monsoon closure, this page will tell you so rather than selling you a trip that cannot run.",
  },

  "how-to-reach-rishikesh": {
    body: [
      "Rishikesh sits where the Ganga leaves the Himalaya for the plains, about 240 km from Delhi — a drive of five to six hours door to door. The nearest airport is Jolly Grant, between Rishikesh and Dehradun, and the nearest major railway station is Haridwar, about 25 km away.",
      "For most visitors from Delhi and the NCR the cab is the right answer, not because it is cheapest but because of what happens after you arrive: the rafting put-in at Shivpuri is 30 to 45 minutes up the gorge road, the bungee site is a drive in another direction, and the waterfalls are in a third. Without a vehicle you pay for local transfers all weekend.",
      "The train is comfortable and gets you to Haridwar, 25 km short, with a transfer at both ends. The bus is cheap and slow.",
    ],
    sections: [
      {
        heading: "By road from Delhi",
        paragraphs: [
          "240 km, five to six hours, with a hill approach at the end. Leaving early gets you in by early afternoon with a usable half day; leaving in the evening gets you in at night and buys you a full first morning instead.",
          "Coming back, leave Rishikesh by early afternoon. The approach to Delhi on a Sunday evening is the worst part of the whole trip and getting ahead of it is worth sacrificing an activity for.",
        ],
      },
      {
        heading: "By air",
        paragraphs: [
          "Jolly Grant is the nearest airport, sitting between Rishikesh and Dehradun, which means a flight plus a short transfer rather than a flight plus an expedition. For anyone coming from beyond north India this is the sensible route.",
          "Dehradun city is close enough that a morning there before an afternoon flight needs no backtracking at all.",
        ],
      },
      {
        heading: "By train",
        paragraphs: [
          "Haridwar is the station with the service, about 25 km away, and it is well connected to Delhi. The gap at the end is the issue — a transfer to Rishikesh, and then transfers again to each activity site.",
          "If you are taking the train, consider hiring a vehicle locally for the days you are here rather than paying per trip. The sites are genuinely spread out.",
        ],
      },
      {
        heading: "Getting around once you are here",
        paragraphs: [
          "A scooter at ₹400 a day covers town — the ashram road, Laxman Jhula, Tapovan, the ghats — and is the cheapest and easiest way to do it.",
          "For the activity sites, you want either a cab or a geared motorcycle. Shivpuri is a proper hill drive and the descent is long enough that a CVT scooter's lack of engine braking becomes a real consideration.",
        ],
      },
    ],
    ownFaqs: [
      {
        q: "How far is Rishikesh from Delhi?",
        a: "About 240 km, five to six hours door to door, with a hill approach at the end. Leaving Delhi early gets you in by early afternoon; leaving in the evening gets you in at night and buys you a full first morning.",
      },
      {
        q: "What is the nearest airport to Rishikesh?",
        a: "Jolly Grant, which sits between Rishikesh and Dehradun — a flight plus a short transfer rather than a flight plus a journey. For anyone travelling from outside north India it is the sensible route, and a morning in Dehradun before an afternoon flight out needs no backtracking.",
      },
      {
        q: "Is there a railway station in Rishikesh?",
        a: "The station with the service is Haridwar, about 25 km away and well connected to Delhi. That last 25 km is the catch — you need a transfer at the end, and then transfers again to each activity site, which are spread out in three different directions.",
      },
      {
        q: "Do I need a vehicle in Rishikesh?",
        a: "For town, a ₹400-a-day scooter is enough and is the easiest option. For the activity sites, yes — Shivpuri is 30 to 45 minutes up the gorge, the bungee site is another direction and the waterfalls a third. Without a vehicle you pay for local transfers all weekend, which is why the Delhi cab package usually works out better than the train.",
      },
    ],
    notFor: "Nobody — this is the logistics page. If you want the Delhi drive arranged, the Delhi to Rishikesh adventure tour bundles the round-trip cab with a package.",
  },

  "where-to-stay-in-rishikesh": {
    body: [
      "Rishikesh divides into a few distinct areas and they suit completely different trips. Picking the wrong one is the most common planning mistake here, and it is entirely avoidable.",
      "Tapovan, on the Laxman Jhula side, is where the cafes, yoga schools and most of the budget and mid-range rooms are — it is the travellers' Rishikesh and the default right answer for a first visit. Swarg Ashram and the Ram Jhula side is quieter, more devotional, largely vegetarian and alcohol-free. Muni Ki Reti and the main town is where the practical hotels and the bus and taxi stands are. And the camps are strung along the gorge road upstream, near the rafting.",
      "If you are here for adventure and nightlife, stay in Tapovan. If you are here for yoga or an ashram, stay across the river. If you are here to raft and camp, stay upstream and accept that you are 30 minutes from a cafe.",
    ],
    sections: [
      {
        heading: "Tapovan and Laxman Jhula",
        paragraphs: [
          "The busiest and most useful area for a short trip — cafes, bakeries, rooftop restaurants, yoga schools, bike rentals and the widest choice of rooms in every price band.",
          "It is also noisy in season and the lanes are tight. If you want to walk to dinner and hire a scooter in the morning, this is the place.",
        ],
      },
      {
        heading: "Swarg Ashram and Ram Jhula",
        paragraphs: [
          "Quieter, more devotional, and the centre of the ashram scene. Vegetarian and alcohol-free by convention rather than by rule, which suits some visitors precisely and others not at all.",
          "The ghats and the evening aarti at Parmarth are here, and so are the long-stay yoga courses. It is the right side of the river for a contemplative trip.",
        ],
      },
      {
        heading: "The camps upstream",
        paragraphs: [
          "Camps sit along the gorge road toward Shivpuri and Brahmapuri, set back and above the river — beach camping on these banks was stopped years ago, so anyone offering a tent on the sand is describing something that no longer exists.",
          "Staying at a camp puts you next to the rafting and a long way from everything else. For a one-night rafting-and-bonfire trip that is exactly right. For a four-day stay it means a drive every time you want a coffee.",
        ],
      },
      {
        heading: "Choosing by trip, not by rating",
        paragraphs: [
          "A rafting weekend: one night at a camp upstream, or Tapovan with transfers. A yoga fortnight: Swarg Ashram. A family trip with children: a hotel in Tapovan or Muni Ki Reti rather than a shared camp, and ask about attached bathrooms.",
          "Tell us what the trip is for and we will say which area rather than which property. The area decision is the one that determines how the days actually work.",
        ],
      },
    ],
    ownFaqs: [
      {
        q: "Which area should I stay in in Rishikesh?",
        a: "Tapovan and the Laxman Jhula side for a first visit, adventure or nightlife — cafes, rentals and the widest choice of rooms. Swarg Ashram and Ram Jhula for yoga, ashrams and quiet, where it is vegetarian and alcohol-free by convention. A camp upstream if you are here to raft. Muni Ki Reti for practical hotels and transport links.",
      },
      {
        q: "Should I stay at a camp or in town?",
        a: "At a camp for a one-night rafting-and-bonfire trip, where being next to the river is the point. In town for anything longer — camps are a long way up the gorge road and a four-day stay there means driving every time you want a coffee.",
      },
      {
        q: "Are there camps on the riverbank in Rishikesh?",
        a: "Not on the sand. Beach camping on these banks was stopped years ago, so camps are riverside properties set back and above the water, usually with a view and a short walk down. Treat anyone advertising a tent at the water's edge with suspicion.",
      },
      {
        q: "Where should a family with young children stay?",
        a: "A hotel in Tapovan or Muni Ki Reti rather than a shared camp — and if you do take a camp, ask specifically about the attached-bathroom tent category, which costs more and is the thing parents most often wish they had known about.",
      },
    ],
    notFor: "Nobody — this is the page to read before booking a room, since the area matters more than the property and it is the most common planning mistake here.",
  },

  "rishikesh-travel-guide": {
    body: [
      "Rishikesh is two towns in one. On the Laxman Jhula side it is cafes, yoga schools, bike rentals and travellers; on the Ram Jhula and Swarg Ashram side it is ashrams, ghats and the evening aarti. Up the gorge road it is a third thing again — rafting camps and adventure sites.",
      "A first visit needs two full days to take in all three without rushing. Three is comfortable. One is the drive plus a single activity, which plenty of people do and most of them wish they had stayed longer.",
      "The single most useful planning fact: rafting is suspended through the monsoon, roughly from late June until the river drops in September. Everything else runs. If your dates fall inside that window, plan a different trip rather than a disappointing one.",
    ],
    sections: [
      {
        heading: "A first-timer's two days",
        paragraphs: [
          "Day one: arrive, walk across Laxman Jhula, spend the afternoon in Tapovan's cafes, and cross to the Ram Jhula side for the evening aarti at Parmarth. That is the town, done properly, and it costs nothing.",
          "Day two: rafting in the morning — the 16 km from Shivpuri, which is the run worth doing — then an afternoon activity or the Neer Garh waterfall walk, and a camp night or a bonfire if you have one booked.",
          "A third day adds either a height activity, the Haridwar aarti 25 km away, or simply not rushing.",
        ],
      },
      {
        heading: "What Rishikesh is genuinely good at",
        paragraphs: [
          "Whitewater rafting, which is the best in India at this accessibility, and the reason most people come.",
          "The town's two halves and the contrast between them — a cafe in Tapovan and an aarti at Parmarth on the same evening is the thing visitors remember.",
          "Yoga, in both the serious and the touristic senses. There are long-standing teaching institutions here alongside a great many week-long courses, and the difference between the two is worth researching before you pay.",
          "Being a base. The Char Dham shrines, Chopta, Haridwar, Mussoorie and Dhanaulti are all reachable from here, which is why the yatra traditionally starts in Rishikesh.",
        ],
      },
      {
        heading: "Food, drink and the local conventions",
        paragraphs: [
          "Rishikesh is vegetarian and alcohol-free by convention across much of the town, and strictly so on the ashram side. Tapovan's cafes are the exception in character but not generally in licensing.",
          "Dress modestly at the ghats, temples and ashrams, which are working religious places rather than attractions. Shoes come off and there are places to leave them.",
          "The Ganga here is fast and cold, and people drown in it every year. Swim where the rafting guides take you and not from the ghats.",
        ],
      },
      {
        heading: "Seasons, in one paragraph each",
        paragraphs: [
          "October to November: the best of the year. Clear, comfortable, good water, mountains visible. It is also busy.",
          "December to February: cold, quiet, and still fully operational apart from the comfort of being wet. Good for a town-and-aarti trip, harder for rafting.",
          "March to June: warm, then hot. Best months for swimming and the cliff jump, and the last of the rafting before the closure.",
          "July to mid-September: the monsoon. Rafting suspended, waterfalls at their best, landslide risk on the hill roads, and the town much quieter and greener.",
        ],
      },
    ],
    ownFaqs: [
      {
        q: "How many days do you need in Rishikesh?",
        a: "Two full days to see the town's two halves and do one proper activity without rushing; three to do it comfortably. One day is the drive plus a single activity — plenty of people do that and most wish they had stayed longer.",
      },
      {
        q: "What is the best itinerary for a first visit to Rishikesh?",
        a: "Day one: arrive, walk Laxman Jhula, an afternoon in Tapovan's cafes, then cross for the evening aarti at Parmarth. Day two: the 16 km rafting run in the morning, an afternoon activity or the Neer Garh waterfall walk, and a camp night. A third day adds a height activity, Haridwar, or simply not hurrying.",
      },
      {
        q: "Can you drink alcohol or eat meat in Rishikesh?",
        a: "Much of the town is vegetarian and alcohol-free by convention, and strictly so on the ashram side. Tapovan's cafes are the exception in character, though generally not in licensing. Visitors who arrive expecting a resort town are consistently surprised.",
      },
      {
        q: "Is it safe to swim in the Ganga at Rishikesh?",
        a: "Not from the ghats. The river here is fast and very cold and people drown in it every year. Swim at the stops where rafting guides take you, in a life jacket, and nowhere else.",
      },
      {
        q: "What is the worst time to visit Rishikesh?",
        a: "July to mid-September, if rafting is why you are coming — it is suspended through the monsoon. For everything else it is a quieter, greener and cheaper time to be here, with the waterfalls at their best and a real landslide risk on the hill roads.",
      },
    ],
    notFor: "Nobody — but if rafting is the whole reason for your trip and your dates fall between late June and September, read the rafting season page before you book anything.",
  },

  "adventure-sports-safety-in-rishikesh": {
    body: [
      "Rishikesh runs a lot of adventure activity, most of it well. This page explains how the safety side actually works, what we check before we book you onto something, and — more usefully — what you should check yourself.",
      "The honest summary: the regulated activities here are genuinely regulated. Rafting operates under licensing with a seasonal administrative suspension that nobody can override, and the fixed-platform jumps work to weight and age limits that are checked rather than estimated. Where risk creeps in is at the edges — an unlicensed camp, a worn rental bike, or a visitor who did not disclose a medical condition.",
      "Triveni books through licensed operators rather than running the towers and the rafts itself. That shapes what we can promise: we can tell you who is licensed and what the limits are, and we can refuse to book you onto something that is wrong for you.",
    ],
    sections: [
      {
        heading: "What is checked before you go",
        paragraphs: [
          "Rafting: certified guides, life jacket and helmet for every person, safety-kayak support on the stretch, and a briefing before launch that rehearses what to do if you go in the water. The minimum age is 14 on every stretch and it is enforced.",
          "Bungee and the giant swing: a weigh-in at check-in, a maximum of 110 kg, a minimum age of 12, and a health declaration covering heart conditions, blood pressure, epilepsy, neck and spinal injury, recent surgery and pregnancy. People are turned away at the desk, and that is the system working.",
          "Height activities generally: harness fit rather than a published age for children, which is why we ask for ages and rough heights at the booking stage and confirm before you travel rather than at the gate.",
        ],
      },
      {
        heading: "The monsoon suspension, and what it tells you",
        paragraphs: [
          "Rafting stops every monsoon by administrative order, roughly from the end of June until the river drops in September. It is not a weather judgement made each morning and it cannot be bought around.",
          "That matters as a test: an operator willing to put you on the Ganga during the suspension is telling you something about everything else they do. The same logic applies to anyone offering rafting to a twelve-year-old or a bungee to someone over the weight limit.",
        ],
      },
      {
        heading: "What you should check yourself",
        paragraphs: [
          "Disclose medical conditions honestly, and do it at the booking stage rather than on the waiver in front of a queue. Heart conditions, blood pressure, epilepsy, pregnancy, recent surgery and spinal or neck injury all matter, and nobody is judging you for having one.",
          "On a rental bike: registration papers, insurance, tyres and brakes, photographed before you ride away. Brakes and tyres are what matter on hill roads and are the first things to be tired at the end of a season.",
          "At a camp: whether it is a licensed site, and whether it is set back from the river. Beach camping on these banks was stopped years ago — a tent on the sand is a sign to walk away.",
          "In the water: swim where guides take you and not from the ghats. The Ganga here is fast and cold and the drownings that happen every year are almost all from the bank, not from rafts.",
        ],
      },
      {
        heading: "The things we will talk you out of",
        paragraphs: [
          "The 36 km Grade III–IV rafting stretch as a first-ever rafting trip. A CVT scooter for a long Himalayan descent, where the absence of engine braking is a genuine hazard. The Spiti bike tour as a first multi-day ride. Kedarnath's sixteen-kilometre trek without a plan for a pony or the helicopter.",
          "None of those is dangerous in the right hands. All of them go wrong when matched to the wrong person, and matching is the part of this job that actually matters.",
        ],
      },
    ],
    ownFaqs: [
      {
        q: "How safe is adventure sport in Rishikesh?",
        a: "The regulated activities are genuinely regulated — rafting runs under licensing with certified guides, mandatory jackets and helmets, safety-kayak support and a rehearsed briefing, and the fixed-platform jumps work to weight and age limits that are checked rather than estimated. Risk creeps in at the edges: unlicensed camps, worn rental bikes, and undisclosed medical conditions.",
      },
      {
        q: "What medical conditions should I declare?",
        a: "Heart conditions, high blood pressure, epilepsy, pregnancy, recent surgery, and neck or spinal injury — at the booking stage rather than on a waiver in front of a queue. They matter for the bungee, giant swing, SCAD and reverse bungee in particular, and nobody is judging you for having one.",
      },
      {
        q: "How do I tell a reputable operator from a bad one?",
        a: "Use the monsoon suspension as a test. Rafting stops by administrative order from roughly late June to September and cannot be bought around — anyone willing to put you on the river inside that window is telling you about everything else they do. The same goes for anyone offering rafting to an under-14 or a bungee above the 110 kg limit.",
      },
      {
        q: "Is it safe to swim in the Ganga?",
        a: "Only where rafting guides take you, in a life jacket. The river here is fast and very cold, and the drownings that happen every year are almost all from the bank rather than from rafts. Do not swim from the ghats.",
      },
      {
        q: "Will you refuse to book something?",
        a: "Yes, and we do. The 36 km Grade III–IV stretch as a first rafting trip, a CVT scooter for long Himalayan descents, Spiti as a first multi-day ride, or Kedarnath's sixteen-kilometre trek with no plan for a pony or a helicopter. None of those is dangerous in the right hands — they go wrong when matched to the wrong person.",
      },
    ],
    notFor: "Nobody — but if you have a medical condition and were planning to mention it on the waiver, read this page first and tell us at the booking stage instead.",
  },

  "things-to-do-in-rishikesh": {
    body: [
      "Thirty-odd things, sorted by what sort of day you want rather than by price. The adventure, the town, the river and the day trips are four different Rishikeshes and most visitors only find two of them.",
      "The short version: raft the 16 km stretch, walk Laxman Jhula and Tapovan, cross for the evening aarti at Parmarth, and walk up to Neer Garh waterfall. That is the four best things here and three of them are free or nearly so.",
      "If rafting is closed for the monsoon, everything on the land list still runs and the waterfalls are at their best.",
    ],
    sections: [
      {
        heading: "On the water",
        paragraphs: [
          "River rafting, which is the reason most people come. The 16 km from Shivpuri is the run to do; the 9 km is the gentle one and the 36 km is the Grade III–IV full day for people who have rafted before.",
          "Body surfing and cliff jumping, both included as stops on a rafting trip rather than booked separately.",
          "Kayaking, which is a lesson rather than an activity — a day session to try it, a multi-day course to actually learn.",
          "A multi-day Ganga expedition, camping on beaches reachable only by river. The serious version of all of the above.",
        ],
      },
      {
        heading: "In the air",
        paragraphs: [
          "Bungee from the 83 m cantilever platform, the giant swing from the same height, and the SCAD jump with no rope at all into a net. In roughly that order of how many people back out.",
          "Zipline across the valley at 400 m, the superman version flown face-down, the 1 km flying fox for up to three people at once, and sky cycling along a high wire. All of these are the height activities nobody has to be talked into.",
          "A sunrise hot air balloon, which is the most weather-dependent thing on this list — book it for your first morning, not your last.",
        ],
      },
      {
        heading: "On land",
        paragraphs: [
          "The rope course, which is the best thing here for families with children under the rafting age and for corporate groups. Rock climbing on natural granite, wall climbing for a first try, rappelling down a cliff or a waterfall, and tree climbing on arborist ropes.",
          "Mountain biking on forest single-track, which is the most physically demanding activity here. Go karting, paintball, quad biking and water zorbing for a group that has had enough adventure.",
          "The Neer Garh and Patna waterfall treks, which are the best-value half day in Rishikesh and the only activity that is better in the rain.",
        ],
      },
      {
        heading: "The town, which costs nothing",
        paragraphs: [
          "Walk across Laxman Jhula and Ram Jhula. Spend an afternoon in Tapovan's cafes. Sit at Triveni Ghat. Go to the evening Ganga Aarti at Parmarth Niketan on the Swarg Ashram side — it happens daily and it is free.",
          "The Beatles Ashram, the abandoned Maharishi Mahesh Yogi compound with its painted meditation cells, which is a ticketed site and worth an hour.",
          "Yoga, in every form from a drop-in class to a month-long course. The difference between the long-standing institutions and the week-long certifications is worth researching before you pay.",
        ],
      },
      {
        heading: "Day trips from here",
        paragraphs: [
          "Haridwar, 25 km away, for the Ganga Aarti at Har Ki Pauri — the best evening available from Rishikesh.",
          "Chopta and Tungnath, a day's drive for the best short Himalayan trip in the region. Mussoorie for a hill station, Dhanaulti if you want it quiet.",
          "The Char Dham shrines, for which Rishikesh is the traditional starting point. Kedarnath and Badrinath as a Do Dham week, or all four over ten to eleven days.",
        ],
      },
    ],
    ownFaqs: [
      {
        q: "What are the best things to do in Rishikesh?",
        a: "Raft the 16 km stretch from Shivpuri, walk Laxman Jhula and spend an afternoon in Tapovan, cross the river for the evening aarti at Parmarth, and walk up to Neer Garh waterfall. Those are the four best things here and three of them are free or nearly free.",
      },
      {
        q: "What is there to do in Rishikesh for free?",
        a: "The evening Ganga Aarti at Parmarth Niketan, daily and free. Walking Laxman Jhula and Ram Jhula. Sitting at Triveni Ghat. Tapovan's lanes and cafes cost only what you drink. The Beatles Ashram is ticketed but cheap and worth an hour.",
      },
      {
        q: "What can you do in Rishikesh when rafting is closed?",
        a: "Everything that is not on the river. Bungee, the giant swing, zipline, flying fox and the rope courses all run through the monsoon subject to the day's weather, camping continues at sites above the river, the town and the aarti are unaffected — and the waterfall treks are at their best, because the falls are actually falling.",
      },
      {
        q: "What is there to do in Rishikesh with children under 14?",
        a: "The rope course first, which is the best thing here for them. Wall climbing with its auto-belay, water zorbing, tree climbing, the Neer Garh waterfall walk, and usually the zipline depending on harness fit. Rafting is not an option — the minimum age is 14 on every stretch.",
      },
      {
        q: "How many of these can I fit into a weekend?",
        a: "One main activity, one small one, the town and the aarti. That is a full and good weekend. Trying to add a third activity is how people end up spending a Rishikesh trip in a car between sites that are in three different directions.",
      },
    ],
    notFor: "Nobody — it is the index. Pick the day you want and follow it through to the activity page.",
  },
};
