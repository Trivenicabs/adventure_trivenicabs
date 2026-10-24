import type { Wave3Content } from "./contentWave3";

/* =====================================================================
 * Wave 3, part C — nine rentals and six Himalayan bike tours.
 *
 * The rental pages shared a paragraph about fully serviced vehicles and
 * 24x7 roadside support, which told a reader nothing about whether a
 * Classic 350 or an Activa was the right thing to hire for what they
 * intended to do. That is the only question these pages exist to answer,
 * and the differences are real: a CVT scooter and a 400 cc adventure
 * bike behave completely differently on a hill descent.
 *
 * The honest content here is mostly about engine braking, weight and
 * paperwork. Scooters have almost no engine braking, which matters on a
 * long Himalayan descent far more than any spec on a listing. A Classic
 * 350 is heavy at walking pace, which is what catches inexperienced
 * riders on a hairpin. And a self-drive hire anywhere in India involves
 * paperwork a renter should look at rather than assume — so these pages
 * tell people what to check, including the things it is awkward for a
 * booking site to raise.
 *
 * The bike tours had the opposite problem: six genuinely different
 * expeditions, from a two-day run to Chopta to a ten-day Spiti circuit,
 * all described with one sentence about a lead captain and a backup
 * vehicle. What distinguishes them is altitude, season and whether the
 * road is even open — so that is what each page now leads with, with
 * dates framed as "check before you book" rather than stated as fact,
 * because Himalayan pass and temple openings move every year.
 * ===================================================================== */

export const wave3Rentals: Record<string, Wave3Content> = {
  "bike-rental-in-rishikesh": {
    body: [
      "Self-drive motorcycles from ₹800 a day, hourly or daily, for everything from an afternoon around the ghats to a week in the high Himalaya. Which bike you take should depend entirely on which of those two you are doing.",
      "For town, the ashram road, Tapovan and a run out to the waterfalls, almost anything works and the cheapest option is the right one. For Chopta, Kedarnath, Badrinath or anywhere with sustained climbing and descending, the bike matters a great deal and the cheapest option is the wrong one.",
      "Three things decide a good hire here: engine braking on long descents, weight at walking pace on hairpins, and paperwork that will survive a checkpoint. The listings below are ordered by what they are actually for.",
    ],
    sections: [
      {
        heading: "Engine braking is the thing nobody mentions",
        paragraphs: [
          "Coming down from Chopta or Kedarnath is forty minutes of continuous descent. On a geared motorcycle you drop a gear and the engine holds you back. On a CVT scooter there is almost no engine braking at all, so the whole job falls to the brakes, and brakes fade when you use them continuously.",
          "That is the single most important difference between hiring a scooter and hiring a motorcycle here, and it does not appear on any spec sheet. Scooters are genuinely good for town and genuinely poor for long hill descents.",
        ],
      },
      {
        heading: "What to check before you ride away",
        paragraphs: [
          "Look at the registration papers and the insurance, and photograph both along with the number plate and the odometer. Photograph any existing damage before you leave, with the renter present — this is the single thing that prevents a dispute at return, and it takes two minutes.",
          "Check the tyres and the brakes yourself rather than taking the word for it. On hill roads those are the two components that matter and the two most likely to be tired on a machine that has done a hard season.",
          "Carry your original licence. A helmet is mandatory and enforced in Uttarakhand, and the hire includes one — wear it even for the short run to a cafe, because the fine is real and the roads here are narrow and blind.",
        ],
      },
      {
        heading: "Deposit and the terms worth reading",
        paragraphs: [
          "Expect to leave a deposit and a government ID. Read what the agreement says about fuel level at return, kilometre limits, late return, and who pays for a breakdown versus damage — those four clauses are where every rental argument in India happens.",
          "Fuel is not included. Return it as you took it, and photograph the gauge at both ends.",
        ],
      },
    ],
    ownFaqs: [
      {
        q: "Which bike should I rent in Rishikesh for hill riding?",
        a: "A geared motorcycle, not a scooter — and for sustained hill work the Himalayan is the right tool. The reason is engine braking: coming down from Chopta or Kedarnath is forty minutes of continuous descent, and a geared bike holds you back on the engine while a CVT scooter leaves the whole job to the brakes, which fade.",
      },
      {
        q: "What do I need to rent a bike in Rishikesh?",
        a: "Your original driving licence, a government ID for the deposit, and the deposit itself. Helmets are provided and mandatory in Uttarakhand. Fuel is not included.",
      },
      {
        q: "What should I check before riding off?",
        a: "Registration papers and insurance, photographed along with the plate and odometer. Any existing damage, photographed with the renter present — this is what prevents a dispute at return. And the tyres and brakes yourself, because on hill roads those are the two components that matter most and the first to be tired at the end of a hard season.",
      },
      {
        q: "Can I take a rented bike from Rishikesh into the mountains?",
        a: "Usually yes, but it needs to be agreed at the counter rather than assumed — kilometre limits and the geography covered are in the rental terms. Say where you intend to ride when you book so you get a bike suited to it and an agreement that permits it.",
      },
    ],
    notFor: "Anyone without a valid licence, and anyone who has not ridden a geared motorcycle before who is planning hill roads — the Himalayan descents are not where to learn. Fuel and damage sit with you, so read the four clauses that matter: fuel level, kilometre limit, late return and breakdown versus damage.",
  },

  "scooty-rental-in-rishikesh": {
    body: [
      "An Activa or a Jupiter from ₹400 a day, which is the cheapest way to get around Rishikesh and genuinely the right choice for most visitors. Twist and go, light enough to park anywhere, and economical.",
      "For town this is the correct vehicle. The ashram road, Laxman Jhula, Tapovan, Triveni Ghat, a run to the waterfall trailhead — a scooter does all of that better than a motorcycle because it is easier to park and easier in traffic.",
      "What a scooter should not do is a long mountain descent. CVT transmissions give almost no engine braking, so on a sustained downhill the brakes do all the work and brakes fade when used continuously. For Chopta, Kedarnath or Badrinath, hire a geared motorcycle.",
    ],
    sections: [
      {
        heading: "Where a scooter is the better bike",
        paragraphs: [
          "In town, every time. You will park it four times in an afternoon and that is where a scooter wins outright. Two people and a day-bag fit comfortably on the Jupiter, which has the better storage of the two.",
          "Short local climbs are fine. The problem is duration, not gradient — a ten-minute hill is a non-issue and a forty-minute descent is a different matter.",
        ],
      },
      {
        heading: "The descent problem, concretely",
        paragraphs: [
          "Engine braking is what holds a geared motorcycle back on a long downhill. A CVT scooter effectively freewheels, so you ride the brakes, they heat up, and they progressively do less. On a Himalayan descent that is a genuine hazard rather than a performance quibble.",
          "If you are set on a scooter for a hill route anyway, descend slowly, alternate front and rear brakes, and stop to let them cool. Better still, take the motorcycle.",
        ],
      },
      {
        heading: "Practicalities",
        paragraphs: [
          "Original licence and a government ID for the deposit, helmet provided and mandatory, fuel not included. Photograph the scooter, the plate, the odometer and any existing scratches before you ride away.",
          "A scooter licence endorsement is the same licence requirement as any two-wheeler — you need a valid one, and 'it is only a scooter' is not a defence at a checkpoint.",
        ],
      },
    ],
    ownFaqs: [
      {
        q: "Is a scooty enough to get around Rishikesh?",
        a: "For town, yes, and it is the better vehicle — you will park it repeatedly in an afternoon and a scooter is easier in traffic and easier to leave anywhere. Activa or Jupiter at ₹400 a day covers the ashram road, Laxman Jhula, Tapovan, the ghats and the waterfall trailheads comfortably.",
      },
      {
        q: "Can I take a scooty to Kedarnath or Chopta?",
        a: "We would advise against it. CVT scooters give almost no engine braking, so a forty-minute Himalayan descent puts the entire job on the brakes and they fade when used continuously. That is a safety issue rather than a comfort one. Hire a geared motorcycle for hill routes.",
      },
      {
        q: "Activa or Jupiter?",
        a: "Both are ₹400 and both are fine. The Jupiter has the better storage and is the more comfortable of the two for a pillion plus a day-bag; the Activa is the more familiar. There is no meaningful difference for a day around town.",
      },
      {
        q: "Do I need a licence for a scooty?",
        a: "Yes — a valid two-wheeler licence, carried as the original. 'It is only a scooter' carries no weight at a checkpoint, and helmets are mandatory and enforced in Uttarakhand.",
      },
    ],
    notFor: "Any long mountain route — Chopta, Kedarnath, Badrinath, Auli. The lack of engine braking on a CVT makes sustained descents a brake-fade problem, and that is the one place a ₹400 saving is a bad trade.",
  },

  "bike-rental-in-rishikesh/royal-enfield-classic-350": {
    body: [
      "₹1,000 a day for the bike most people picture when they imagine riding in the Himalaya. The thump is real and so is the appeal, and for the ghat roads and easy hill runs around Rishikesh it is a genuinely good hire.",
      "What to know before you take one: it is heavy, and the weight is noticeable at walking pace. On a tight hairpin, in gravel, or doing a three-point turn on a narrow road, a Classic 350 asks more of an inexperienced rider than its relaxed character suggests.",
      "For Rishikesh, Chopta and the easier Garhwal roads it is the right amount of bike. For Spiti or anything with bad surfaces and real altitude, the Himalayan is the better tool and the ₹400 difference is well spent.",
    ],
    sections: [
      {
        heading: "Weight at low speed is the thing to respect",
        paragraphs: [
          "Moving, the Classic is stable, comfortable and easy. Stopped or nearly stopped on a slope with the front wheel turned, it is a lot of motorcycle, and that is the situation hill roads constantly produce.",
          "If you have ridden mostly commuter bikes, spend the first half hour on flat ground getting used to the mass before you point it uphill. It is not a difficult bike; it is just not a light one.",
        ],
      },
      {
        heading: "What it is good at",
        paragraphs: [
          "Long, flowing hill roads at an unhurried pace. The engine pulls from low revs so you are not changing gear constantly on a climb, and the riding position is comfortable for a full day.",
          "Engine braking is good, which is the real advantage over any scooter on a descent — drop a gear and the bike holds itself back.",
        ],
      },
      {
        heading: "Where the Himalayan is better",
        paragraphs: [
          "Broken surfaces, long unpaved sections, high passes and anything where ground clearance and suspension travel matter. The Classic is a road bike with hill-road competence; the Himalayan is built for the other thing.",
          "For Chopta, Kedarnath road or Badrinath, both are fine. For Spiti, take the Himalayan.",
        ],
      },
    ],
    ownFaqs: [
      {
        q: "Is the Royal Enfield Classic 350 good for hill riding?",
        a: "Yes, for sealed hill roads at an unhurried pace — it pulls from low revs so you are not constantly changing gear on a climb, it is comfortable all day, and the engine braking holds you back on descents. The thing to respect is the weight at walking pace, which is exactly what hairpins and narrow turns produce.",
      },
      {
        q: "Classic 350 or Himalayan for a Himalayan trip?",
        a: "Classic for Rishikesh, Chopta and the easier Garhwal roads. Himalayan for Spiti, long unpaved sections and high passes, where ground clearance and suspension travel start to matter. The ₹400 a day difference is worth it for the harder routes and wasted on the easy ones.",
      },
      {
        q: "Is the Classic 350 hard to ride for a beginner?",
        a: "Not while it is moving. The difficulty is low-speed handling — it is a heavy bike and you feel it stopped on a slope with the bars turned. If you have only ridden commuters, spend the first half hour on flat ground before heading uphill.",
      },
    ],
    notFor: "Riders who have never handled a heavy motorcycle, if the plan is to go straight onto hairpins. Also the wrong bike for Spiti or sustained rough surfaces — take the Himalayan.",
  },

  "bike-rental-in-rishikesh/royal-enfield-himalayan": {
    body: [
      "₹1,400 a day for the bike that is actually built for this. Long suspension travel, decent ground clearance, an upright riding position and a tank range that suits places where fuel is far apart.",
      "If your plan involves Spiti, high passes, long unpaved stretches or multiple days in the saddle, this is the hire and the premium over a Classic 350 is the best-spent ₹400 on this page.",
      "It is also, counter-intuitively, easier for a less experienced rider on bad roads than a heavier road bike — the suspension absorbs what would otherwise unsettle you, and the upright position gives you more control standing on the pegs.",
    ],
    sections: [
      {
        heading: "What the suspension actually buys you",
        paragraphs: [
          "On a broken surface, a road bike transmits every impact to you and to its own line. Longer travel soaks it up, which means less fatigue over a long day and less of the twitchiness that frightens people on gravel.",
          "The ground clearance matters in the specific situation of a water crossing or a rutted section — the places where a lower bike grounds out and stops being fun.",
        ],
      },
      {
        heading: "The trade-offs, honestly",
        paragraphs: [
          "It is tall. Shorter riders find the seat height a real consideration, particularly stopped on a camber. Sit on it before you commit to a week.",
          "It is not fast and does not want to be. On a highway stretch it is unexciting; on the kind of road it was designed for it is the best thing here.",
        ],
      },
      {
        heading: "For multi-day riding",
        paragraphs: [
          "The upright position and the seat make a difference on day four in a way that is hard to appreciate on day one. Long-distance comfort is the quiet argument for this bike over a sharper one.",
          "Luggage mounts and a rack suit panniers or a tail bag, which is the practical requirement for anything beyond a day trip.",
        ],
      },
    ],
    ownFaqs: [
      {
        q: "Is the Royal Enfield Himalayan worth the extra over a Classic 350?",
        a: "For Spiti, high passes, long unpaved stretches or several days in the saddle, yes — the suspension travel, ground clearance and upright position are the whole point and the ₹400 a day is the best-spent premium here. For Rishikesh town and easy Garhwal roads, the Classic is enough.",
      },
      {
        q: "Is the Himalayan good for an inexperienced rider?",
        a: "On bad roads it is often easier than a heavier road bike — the suspension absorbs what would otherwise unsettle you and the upright position gives you more control. The real consideration is seat height: it is tall, and shorter riders should sit on one before committing to a week.",
      },
      {
        q: "Is the Himalayan fast?",
        a: "No, and it is not trying to be. On a highway it is unexciting. On the kind of road it was built for — rough, high, remote — it is the best hire on this site.",
      },
    ],
    notFor: "Shorter riders who have not sat on one; the seat height is a genuine issue, particularly stopped on a camber. Also overkill and unnecessarily expensive if you are only riding around Rishikesh town.",
  },

  "bike-rental-in-rishikesh/ktm-duke-390": {
    body: [
      "₹1,600 a day and the fastest, sharpest thing on this page. On a good, sealed, twisting hill road the Duke is enormously entertaining and nothing else here comes close.",
      "It is also the least suitable bike on this page for a Himalayan tour, and it is worth being direct about why: hard suspension, a firm seat, an aggressive riding position and high-revving power delivery. All of those are virtues on a twisty tarmac road for two hours and liabilities on a rough road for eight.",
      "Hire it for the riding, over a day or two, on roads you know are good. Do not hire it for Spiti.",
    ],
    sections: [
      {
        heading: "What it is brilliant at",
        paragraphs: [
          "Sealed hill roads with corners. Light, powerful, sharp brakes and sharp steering — it flatters a competent rider and it is the only bike here that is fun rather than pleasant.",
          "Short days. Two or three hours of good road and then stopping is where this bike makes complete sense.",
        ],
      },
      {
        heading: "Why it is wrong for a long tour",
        paragraphs: [
          "The seat and the suspension are firm, which is fine for an hour and punishing on day three. The riding position puts weight on your wrists, which compounds over distance.",
          "Power delivery is high in the rev range, so slow technical climbing and rough surfaces ask for constant clutch and throttle work rather than the lazy low-end pull of the Enfields.",
          "Ground clearance and suspension travel are road-bike numbers. On an unpaved section you will be going slowly and not enjoying it.",
        ],
      },
    ],
    ownFaqs: [
      {
        q: "Is the KTM Duke 390 good for a Himalayan bike tour?",
        a: "No — it is the least suitable bike here for one. Hard suspension, firm seat, weight on your wrists and high-revving power are all virtues on a good road for two hours and liabilities on a rough road for eight. Hire it for the riding over a day or two, not for Spiti.",
      },
      {
        q: "What is the Duke 390 best for?",
        a: "Sealed, twisting hill roads for a couple of hours. It is light, fast and sharp, it flatters a competent rider, and it is the only bike on this page that is genuinely fun rather than merely pleasant.",
      },
      {
        q: "Duke 390 or Himalayan for three days of riding?",
        a: "Himalayan, comfortably. Over three days the Duke's seat, suspension and riding position stop being a joke and become the reason you are not enjoying yourself. The Duke is a day bike here.",
      },
    ],
    notFor: "Multi-day tours, rough roads, Spiti, and anyone who is not already a confident rider — it is the quickest and least forgiving machine on this page.",
  },

  "scooty-rental-in-rishikesh/honda-activa": {
    body: [
      "₹400 a day for the most familiar scooter in India, and for getting around Rishikesh that familiarity is the whole argument. Everybody has ridden one; nothing about it needs learning.",
      "It does town perfectly. Light, easy to park, economical, and it will carry two people and a bag along the ashram road and out to the ghats without complaint.",
      "The limit is the same as for any CVT scooter: it has almost no engine braking, so it is not the vehicle for a long mountain descent. Around Rishikesh, that never comes up.",
    ],
    sections: [
      {
        heading: "Why familiar matters",
        paragraphs: [
          "On narrow roads with unpredictable traffic, the best vehicle is the one you do not have to think about. If you have ridden an Activa before — and most people in India have — you are not spending attention on the machine.",
          "It is also the easiest thing here to park, which on the Laxman Jhula side matters more than any other quality.",
        ],
      },
      {
        heading: "Activa or Jupiter",
        paragraphs: [
          "Same price, same job. The Jupiter has more storage and a slightly more accommodating seat for a pillion; the Activa is the one you have ridden before. Neither choice is wrong for a day in town.",
        ],
      },
    ],
    ownFaqs: [
      {
        q: "Is the Honda Activa enough for Rishikesh?",
        a: "For town, entirely. It is light, economical, the easiest thing here to park, and it will carry two people and a bag along the ashram road and out to the ghats. Its only real limit is long mountain descents, which a day around Rishikesh never involves.",
      },
      {
        q: "Activa or Jupiter for two people?",
        a: "The Jupiter, marginally — more storage and a slightly better pillion seat at the same ₹400. The Activa's advantage is that you have almost certainly ridden one before, which on narrow unpredictable roads is worth something.",
      },
    ],
    notFor: "Hill routes with sustained descents — the lack of engine braking on a CVT puts all the work on the brakes. For Chopta or Kedarnath, hire a geared motorcycle.",
  },

  "scooty-rental-in-rishikesh/tvs-jupiter": {
    body: [
      "₹400 a day, and the better of the two scooters if there are two of you. More under-seat storage, a more accommodating pillion seat, and a slightly softer ride over the broken bits of road around town.",
      "It does exactly the same job as an Activa at exactly the same price, so the choice comes down to whether you are carrying a passenger and a bag — in which case take this one.",
      "Same caveat as every CVT scooter: fine for town and short climbs, wrong for a long Himalayan descent where the absence of engine braking leaves everything to the brakes.",
    ],
    sections: [
      {
        heading: "The storage is the actual difference",
        paragraphs: [
          "A day-bag, two helmets' worth of odds and ends, a towel from the waterfall walk — the under-seat space is where the Jupiter earns its place over the Activa, and it is a practical rather than a marginal difference.",
          "For a solo rider going four kilometres to a cafe, there is nothing to choose between them.",
        ],
      },
      {
        heading: "Two up around Rishikesh",
        paragraphs: [
          "The seat is a little kinder to a pillion over a day of short hops, which is what Rishikesh riding actually is — lots of stopping and starting rather than long stretches.",
          "It is still a 110-class scooter with two adults on it. Steep local climbs will be slow, which is fine, and steep local descents want care, which is the usual scooter point.",
        ],
      },
    ],
    ownFaqs: [
      {
        q: "Is the TVS Jupiter better than the Activa?",
        a: "For two people with a bag, yes — more under-seat storage and a slightly kinder pillion seat at the same ₹400. For a solo rider going a few kilometres, there is nothing to choose between them.",
      },
      {
        q: "Can two adults ride the Jupiter around Rishikesh comfortably?",
        a: "Yes, for the short hops that Rishikesh riding actually consists of. It is still a 110-class scooter, so steep local climbs will be slow and steep descents want care — the usual scooter caveat about engine braking applies.",
      },
    ],
    notFor: "Long mountain routes, for the same engine-braking reason as every CVT scooter. Take a geared motorcycle for Chopta, Kedarnath or Badrinath.",
  },

  "atv-quad-biking-in-rishikesh": {
    body: [
      "A four-wheel quad on a dirt track, ₹500 a ride, no licence needed. It is not transport and it is not road-legal — it is a short, loud, muddy go on a closed circuit, and it is better fun than it sounds.",
      "Four wheels and a low centre of gravity make it the most forgiving powered thing here. You cannot fall off it the way you can fall off a motorcycle, which is why it takes riders with no experience at all.",
      "Expect to get dirty. The track is dirt and the quads throw it, which is most of the appeal and worth knowing before you turn up in clean clothes.",
    ],
    sections: [
      {
        heading: "No licence, but limits",
        paragraphs: [
          "Because it is a closed circuit rather than a road, a driving licence is not required. What does apply is reach and control — a child needs to work the throttle and brake, so height matters more than age.",
          "Helmets are provided and worn. Closed shoes, and clothes you do not mind ruining.",
        ],
      },
      {
        heading: "A ride, not an activity",
        paragraphs: [
          "At ₹500 for a session this is an add-on rather than a plan, usually done alongside the go-karting or while somebody else in the group is on the zipline.",
          "It is also one of the few things here that works in the rain — a wet dirt track is messier and arguably better.",
        ],
      },
    ],
    ownFaqs: [
      {
        q: "Do I need a licence for quad biking in Rishikesh?",
        a: "No, because it runs on a closed dirt circuit rather than a road. What matters instead is reach and control — a child needs to be able to work the throttle and brake, so height is the real limit rather than age. Helmets are provided.",
      },
      {
        q: "Is ATV riding hard?",
        a: "It is the most forgiving powered thing here. Four wheels and a low centre of gravity mean you cannot fall off it the way you can a motorcycle, which is why it takes complete beginners. Expect to get muddy — the track is dirt and the quads throw it.",
      },
      {
        q: "Can I ride an ATV on the road in Rishikesh?",
        a: "No. These are track machines, not road-legal vehicles. If you want transport, hire a scooter or a motorcycle.",
      },
    ],
    notFor: "Anyone looking for transport — this is a circuit ride, not a vehicle hire. Also do not wear anything you care about.",
  },

  "bike-rental-price-in-rishikesh": {
    body: [
      "This page is the rate card. Hourly, daily and weekly pricing for every model, so you can work out the cost before you enquire rather than after.",
      "Scooters start at ₹400 a day and motorcycles at ₹800, rising to ₹1,000 for a Classic 350, ₹1,400 for a Himalayan and ₹1,600 for a KTM Duke 390. Weekly hire is meaningfully cheaper per day than seven single days — ask for the weekly rate rather than multiplying.",
      "What is not in the headline rate, on any rental anywhere: fuel, and the deposit. Both are standard and neither is a hidden charge, but both surprise people who budgeted from a daily figure alone.",
    ],
    sections: [
      {
        heading: "What the daily rate includes",
        paragraphs: [
          "The vehicle, serviced, with a helmet and its papers, and roadside support. That is it.",
          "Fuel is yours. Return the bike at the level you took it and photograph the gauge at both ends, which removes the most common argument at handover.",
        ],
      },
      {
        heading: "Deposit, and getting it back",
        paragraphs: [
          "A refundable deposit plus a government ID is standard. The deposit comes back when the bike does, in the condition it left, with the fuel it left with.",
          "The way to protect it is a two-minute photograph session before you ride away: the plate, the odometer, the fuel gauge and every existing scratch, with the renter standing there. Disputes at return are almost always about damage that was already present and undocumented.",
        ],
      },
      {
        heading: "Where the real cost difference is",
        paragraphs: [
          "Over a day, the gap between a ₹400 scooter and a ₹1,400 Himalayan looks large. Over a week of hill riding it is the difference between the right tool and the wrong one, and the wrong one costs more in brakes, fatigue and risk than the ₹7,000 saved.",
          "Conversely, for three days around Rishikesh town, the ₹400 scooter is not a compromise — it is the correct answer and the Himalayan is wasted money.",
        ],
      },
    ],
    ownFaqs: [
      {
        q: "How much does it cost to rent a bike in Rishikesh?",
        a: "Scooters from ₹400 a day, motorcycles from ₹800, a Royal Enfield Classic 350 at ₹1,000, a Himalayan at ₹1,400 and a KTM Duke 390 at ₹1,600. Weekly hire works out meaningfully cheaper per day than seven separate days — ask for the weekly rate rather than multiplying the daily one.",
      },
      {
        q: "Is fuel included in bike rental?",
        a: "No, on any rental here. Return the bike at the fuel level you took it and photograph the gauge at both ends — it is the simplest way to avoid the most common argument at handover.",
      },
      {
        q: "How much deposit do I need and how do I get it back?",
        a: "A refundable deposit plus a government ID, standard across rentals. It comes back when the bike does, in the same condition and with the same fuel. Protect it by photographing the plate, odometer, fuel gauge and every existing scratch before you ride off, with the renter present — disputes are almost always about pre-existing damage nobody documented.",
      },
      {
        q: "Is the cheapest bike the best value?",
        a: "For three days around Rishikesh town, yes — a ₹400 scooter is the correct answer and anything more is wasted. For a week of hill riding, no: the ₹1,000 a day saved on the wrong bike comes back out in brake wear, fatigue and risk on the descents.",
      },
    ],
    notFor: "Nobody — this is a reference page. If you already know which bike you want, go to its listing; this is here so you can budget first.",
  },
};

export const wave3BikeTours: Record<string, Wave3Content> = {
  "bike-tour-rishikesh-to-kheerganga": {
    body: [
      "Four to five days, ₹8,999 per rider, from Rishikesh across into Himachal's Parvati Valley, ending with a trek on foot up to the hot springs at Kheerganga.",
      "This is the longest-distance tour here relative to its duration — you cross from Uttarakhand into Himachal, which is a lot of road, and the riding days are long. Then you park the bike at the end of the motorable road and walk.",
      "The trek is the part people underestimate. Kheerganga is reached on foot from the roadhead and it is a real uphill walk of several hours, not a stroll. You ride for days and then you hike, and both halves need to be in your plan.",
    ],
    sections: [
      {
        heading: "Two different trips in one",
        paragraphs: [
          "Days one and two are distance: getting from the Garhwal foothills across to the Parvati Valley is a long haul on mixed roads, and the pleasure is in the riding rather than in stopping.",
          "Then the Parvati Valley itself is the destination — a narrow green valley with the bike parked and a trek at the end of it. Plan a day for the walk up, a night at the top, and the walk down.",
        ],
      },
      {
        heading: "The hot springs at the top",
        paragraphs: [
          "Kheerganga's hot springs are the reason for the trek, and arriving at them after several hours of climbing is most of the point. Accommodation at the top is simple — basic guesthouses and tents rather than hotels.",
          "Carry warm layers for the night regardless of season. It is considerably colder up there than in the valley you started from.",
        ],
      },
      {
        heading: "What is included",
        paragraphs: [
          "A lead captain, a backup vehicle, fuel, stays on twin sharing and permits where applicable. The trek portion is on foot and self-carried unless you arrange a porter locally.",
          "Tell us your riding experience honestly when you book. Long days on mixed Himachal roads are a different proposition from a weekend run to Chopta.",
        ],
      },
    ],
    ownFaqs: [
      {
        q: "How hard is the Kheerganga trek after the ride?",
        a: "Harder than people expect. Kheerganga is reached on foot from the roadhead — a real uphill walk of several hours, not a stroll — and it comes after two days of long riding. Both halves need to be in your plan and your fitness.",
      },
      {
        q: "How long is the ride from Rishikesh to the Parvati Valley?",
        a: "It is the longest distance-per-day tour here: crossing from Uttarakhand into Himachal takes two long riding days on mixed roads before you reach the valley. The pleasure is in the riding rather than in stopping, so it suits riders who actually want to cover ground.",
      },
      {
        q: "What is the accommodation like at Kheerganga?",
        a: "Simple — basic guesthouses and tents rather than hotels, at the top of a trek. Carry warm layers for the night whatever the season, because it is considerably colder up there than in the valley below.",
      },
    ],
    notFor: "Riders who want short days, and anyone not prepared to walk uphill for several hours at the end of the ride. If you want a Himalayan bike trip without a trek, take Chopta or Auli.",
  },

  "bike-tour-rishikesh-to-chopta-tungnath": {
    body: [
      "Two to three days, ₹5,999 per rider, and the best short Himalayan ride from Rishikesh. Chopta is a high meadow in Garhwal, and from it a well-made stone path climbs to the Tungnath temple — generally held to be the highest Shiva temple in the world — with Chandrashila summit a further climb above.",
      "This is the tour we recommend first. The riding is a manageable day each way on good hill roads, the trek at the top is a few kilometres rather than a day, and the view from Chandrashila on a clear morning is the best thing in this list.",
      "Short enough for a long weekend, high enough to feel like a Himalayan trip, and it needs no permits and no expedition planning.",
    ],
    sections: [
      {
        heading: "The ride up",
        paragraphs: [
          "A day's riding from Rishikesh on sealed hill roads through Garhwal, climbing steadily. It is a proper hill day — hairpins, blind corners and a long descent on the way back — which is exactly why we tell people to hire a geared motorcycle rather than a scooter for it.",
          "The last section into Chopta is quieter and more forested than what comes before, and it is the stretch people remember.",
        ],
      },
      {
        heading: "Tungnath and Chandrashila",
        paragraphs: [
          "The walk from Chopta to Tungnath is a few kilometres on a built path, climbing the whole way. It is not technical and it is not long, but it is high, which makes it harder than the same distance at sea level — go slowly and it is fine.",
          "Chandrashila is another push above the temple and it is where the panoramic view is. Start early: the mountains are usually clear in the morning and cloud in by the middle of the day.",
          "The temple itself has a season — it closes for winter like the other high Garhwal shrines. Ask us about your dates, because the ride to Chopta remains lovely when the temple is shut but it is a different trip.",
        ],
      },
      {
        heading: "Altitude, briefly",
        paragraphs: [
          "Chopta and Tungnath are high enough that unfit or unacclimatised visitors notice it on the climb. Walking slowly, drinking water and not rushing the ascent deals with it for almost everybody.",
          "Anyone who has had altitude problems before should tell us. This is a mild case by Himalayan standards but it is not sea level.",
        ],
      },
    ],
    ownFaqs: [
      {
        q: "Is the Chopta–Tungnath bike trip good for a first Himalayan ride?",
        a: "It is the best one here for that. A manageable day's riding each way on sealed hill roads, a trek of a few kilometres rather than a full day, no permits and no expedition planning — and from Chandrashila above the temple, the best view on this list.",
      },
      {
        q: "How long is the trek from Chopta to Tungnath?",
        a: "A few kilometres on a built stone path, climbing the whole way, with Chandrashila a further push above the temple. Not technical and not long, but high enough that it is harder than the same walk at low altitude. Go slowly and start early — the mountains are clear in the morning and cloud in later.",
      },
      {
        q: "Is Tungnath temple open all year?",
        a: "No — like the other high Garhwal shrines it closes for the winter. The ride to Chopta is still beautiful when the temple is shut but it is a different trip, so tell us your dates and we will say what will actually be open.",
      },
      {
        q: "Do I need a geared bike for Chopta?",
        a: "Yes, we would insist on it. The route is a proper hill day with a long descent coming back, and a CVT scooter has almost no engine braking — which puts the whole job on the brakes for forty minutes at a time. Take a Classic 350 or a Himalayan.",
      },
    ],
    notFor: "Anyone wanting a flat, easy ride — this is hairpins and sustained climbing. Also check your dates if the temple itself is the goal, since it closes for winter.",
  },

  "bike-tour-rishikesh-to-kedarnath": {
    body: [
      "Three to four days, ₹7,999 per rider. You ride to the roadhead at Gaurikund and then the bike stops — Kedarnath itself is reached on foot, on a long uphill trek of about sixteen kilometres, or by helicopter from the valley.",
      "This is the single most important thing to understand before booking: this is a bike tour plus a serious mountain trek. The riding is a day each way on good Garhwal roads. The trek is the hard part and it is the part people are unprepared for.",
      "The temple also has a season. Kedarnath opens in spring and closes in autumn, and the dates are set each year rather than fixed — so the first question we will ask is your dates, and sometimes the honest answer is that the temple will be shut.",
    ],
    sections: [
      {
        heading: "The trek, honestly",
        paragraphs: [
          "Around sixteen kilometres uphill from Gaurikund, gaining a great deal of height, at altitude. Fit walkers do it in a long day. Many people find it the hardest physical thing they have done, and a significant number turn back.",
          "Ponies and porters are available at the roadhead, and a helicopter service runs from the valley in season, subject to weather. Both are legitimate choices rather than cheating, and if you are not a confident long-distance walker you should plan for one of them from the start rather than deciding halfway up.",
          "Start before dawn. Allow for the descent as a separate effort — coming down sixteen kilometres is hard on knees in a different way from going up.",
        ],
      },
      {
        heading: "Registration and dates",
        paragraphs: [
          "Yatra registration is required for the Char Dham shrines and is handled through the Uttarakhand government system. We do this as part of the booking; it is not optional and it is checked.",
          "Opening and closing dates are announced each year and move. Weather closes the route at both ends of the season. Give us your dates early and we will tell you plainly whether they work.",
        ],
      },
      {
        heading: "Altitude",
        paragraphs: [
          "Kedarnath is high and the ascent is rapid if you ride up in a day and walk up the next. That combination is what causes problems — altitude sickness is a real risk here rather than a theoretical one.",
          "Build in a night at a lower elevation on the way up, drink more water than feels necessary, and go up slowly. Anyone with a history of altitude illness, or with heart or respiratory conditions, should treat this trip as a medical question first.",
        ],
      },
    ],
    ownFaqs: [
      {
        q: "Can you ride a bike all the way to Kedarnath?",
        a: "No. The road ends at Gaurikund and Kedarnath is about sixteen kilometres further on foot, uphill, at altitude — or by helicopter from the valley in season. This is a bike tour plus a serious mountain trek, and the trek is the part people are unprepared for.",
      },
      {
        q: "How hard is the Kedarnath trek?",
        a: "Around sixteen kilometres of sustained uphill at altitude. Fit walkers manage it in a long day; many people find it the hardest physical thing they have done and some turn back. Ponies, porters and a seasonal helicopter are all available and all legitimate — decide before you start rather than halfway up.",
      },
      {
        q: "Is registration required for Kedarnath?",
        a: "Yes. Char Dham yatra registration goes through the Uttarakhand government system, it is checked, and it is not optional. We handle it as part of the booking.",
      },
      {
        q: "When is Kedarnath open?",
        a: "It opens in spring and closes in autumn, with dates announced each year rather than fixed, and weather can close the route at either end of the season. Send us your dates early — sometimes the honest answer is that the temple will be shut and the trip should be something else.",
      },
      {
        q: "Is altitude sickness a risk on this trip?",
        a: "A real one, because riding up in a day and walking up the next is a rapid ascent. Build in a night lower down, drink more water than feels necessary and climb slowly. Anyone with a history of altitude illness or a heart or respiratory condition should treat this as a medical question before a travel one.",
      },
    ],
    notFor: "Anyone who cannot walk sixteen kilometres uphill and is not willing to take a pony or the helicopter. Also not for riders with a history of altitude sickness, or heart or respiratory conditions, without medical advice first — and not bookable at all outside the temple's season.",
  },

  "bike-tour-rishikesh-to-badrinath": {
    body: [
      "Three to four days, ₹8,499 per rider, and the one Char Dham shrine you can ride to. The road goes all the way to Badrinath temple, which makes this the accessible one of the four and a completely different proposition from Kedarnath.",
      "Three kilometres beyond the temple is Mana, the last village on this road before the Tibet border, and riding up to it is the part most people remember more than the temple.",
      "Like Kedarnath, it has a season and requires yatra registration. Unlike Kedarnath, there is no sixteen-kilometre trek — if you can ride a hill road, you can get there.",
    ],
    sections: [
      {
        heading: "Why this is the achievable one",
        paragraphs: [
          "No trek. The road climbs to the temple itself, so the physical demand is riding rather than walking, and that makes Badrinath the Char Dham shrine that a rider with ordinary fitness can actually reach.",
          "It is a long way and a high one, on a road that climbs steadily through Garhwal. Expect long days in the saddle and a genuinely cold arrival whatever the season at the bottom.",
        ],
      },
      {
        heading: "Mana and the border road",
        paragraphs: [
          "The last village before the border sits a short ride beyond the temple, and the landscape there is already changing from Garhwal green into something more austere. It is the closest this tour comes to the high desert that the Spiti trip is made of.",
          "Roads beyond a point are restricted. Go where you are permitted and do not improvise near a border.",
        ],
      },
      {
        heading: "Registration, dates and weather",
        paragraphs: [
          "Char Dham registration through the Uttarakhand government system is required and checked. We handle it with the booking.",
          "The temple opens in spring and closes in autumn, with dates set each year. The road is also weather-dependent at both ends of the season and landslides are a normal feature of the Garhwal monsoon rather than an exception.",
          "Altitude is real here even without a trek, because you gain a lot of it in a day on a bike. Go up in stages where the itinerary allows and drink more than you want to.",
        ],
      },
    ],
    ownFaqs: [
      {
        q: "Can you ride all the way to Badrinath temple?",
        a: "Yes — the road goes to the temple itself, which makes Badrinath the accessible one of the four Char Dham shrines and a completely different trip from Kedarnath. If you can ride a long hill road, you can get there; there is no trek.",
      },
      {
        q: "What is Mana village?",
        a: "The last village on this road before the Tibet border, a short ride beyond Badrinath temple, where the landscape has already started turning from Garhwal green into something far more austere. Most riders remember it more than the temple. Roads beyond a point are restricted — go only where you are permitted.",
      },
      {
        q: "Do I need registration for Badrinath?",
        a: "Yes. Char Dham yatra registration through the Uttarakhand government system is required and checked, and we handle it as part of the booking.",
      },
      {
        q: "When is Badrinath open and is the road reliable?",
        a: "It opens in spring and closes in autumn, with dates set each year. The road is weather-dependent at both ends of the season, and landslides are a normal feature of the Garhwal monsoon rather than an exception — build slack into your plan and tell us your dates early.",
      },
    ],
    notFor: "Riders travelling outside the temple's open season, and anyone expecting a warm trip — it is cold at the top whatever the weather in Rishikesh. Monsoon dates carry a real landslide risk on this road.",
  },

  "bike-tour-rishikesh-to-auli": {
    body: [
      "Two to three days, ₹6,499 per rider, to the ski slopes above Joshimath. Auli is a meadow turned ski resort with a cable car running up from the town below it, and it is the only winter-sports destination on this list.",
      "The riding is a day each way through Garhwal on the Badrinath road as far as Joshimath, then up. It is the same good hill road as the Badrinath run without going all the way to the top.",
      "Season decides what this trip is. In the deep winter months Auli is about snow, and in the clear months either side it is about the view — the panorama from up there is the reason people come when there is nothing to ski on.",
    ],
    sections: [
      {
        heading: "Winter or not",
        paragraphs: [
          "For snow, the deep winter is the window, and conditions vary year to year — snow cover in the Himalaya is not a schedule. Ask us before booking a trip whose whole purpose is skiing, because the honest answer in a thin year is that there is not enough of it.",
          "Outside winter, Auli is a high meadow with a very large view, a cable car ride and easy walking. That is a good two-day trip in its own right and most of our bookings here are exactly that.",
        ],
      },
      {
        heading: "The ride and the road",
        paragraphs: [
          "A full day from Rishikesh to Joshimath on the Badrinath highway, climbing steadily, with a shorter climb up to Auli itself. Long, hairpinned and genuinely enjoyable on a geared bike.",
          "In winter the top section can be snow-affected, which is the point at which the cable car from Joshimath becomes the sensible way up rather than a tourist activity.",
        ],
      },
      {
        heading: "Two days or three",
        paragraphs: [
          "Two days means riding up, one night, riding back, and it works. Three means a full day actually at Auli, which is what the trip deserves — particularly in winter when getting up and down takes time.",
          "If you are deciding, take three. The riding is the same either way and the difference is whether you see the place or just reach it.",
        ],
      },
    ],
    ownFaqs: [
      {
        q: "Can you ski at Auli?",
        a: "In the deep winter months, when there is snow — and cover varies year to year, because Himalayan snowfall is not a schedule. If skiing is the entire purpose of your trip, ask us before booking: in a thin year the honest answer is that there is not enough of it.",
      },
      {
        q: "Is Auli worth visiting outside winter?",
        a: "Yes, and most of our bookings are exactly that. Out of season it is a high meadow with a very large view, a cable car up from Joshimath and easy walking — a good two-day trip that happens not to involve snow.",
      },
      {
        q: "Should I book two days or three for Auli?",
        a: "Three. Two days is ride up, one night, ride back, and it works — but three gives you a full day actually at Auli, which is the difference between seeing the place and merely reaching it. The riding is identical either way.",
      },
    ],
    notFor: "Anyone booking specifically to ski without checking conditions first — snow cover varies year to year and we would rather tell you in advance. Also a thin trip at two days; take three if you can.",
  },

  "bike-tour-rishikesh-to-spiti-valley": {
    body: [
      "Eight to ten days, ₹22,999 per rider, and the most serious thing on this entire site. Spiti is high-altitude cold desert on the far side of the Himalaya, reached over passes that are only open for part of the year, and this trip is a genuine expedition rather than a long weekend.",
      "Everything about it is harder than the other tours here: the days are longer, the altitude is higher and sustained rather than touched, the roads are rougher, and help is further away. That is also precisely why people do it.",
      "Two things to settle before anything else — whether the route is open on your dates, and whether you are acclimatising properly. Both are discussed below and neither is negotiable.",
    ],
    sections: [
      {
        heading: "The route is seasonal, and the season is short",
        paragraphs: [
          "Spiti is reached over high passes, and those passes carry snow for much of the year. The circuit route is open for a limited window in the warmer months; outside it, access is restricted to one side and sometimes not at all.",
          "Opening and closing are decided by snow and by the authorities, not by a calendar, and they move every year. Tell us your dates first and we will tell you what is actually possible — including when the answer is that your dates do not work.",
        ],
      },
      {
        heading: "Altitude is the real risk on this trip",
        paragraphs: [
          "Spiti is high and you stay high, which is different from the day-trip altitude of Chopta or Badrinath. Acute mountain sickness is a serious and genuine risk here, and it does not respect fitness — strong young riders get it as often as anybody.",
          "The itinerary is built to gain height gradually for exactly this reason. Do not shortcut it, do not try to compress the schedule, and do not ride on through worsening symptoms. Headache, nausea, breathlessness at rest and confusion mean going down, immediately, and that decision overrides the plan.",
          "Anyone with a heart or respiratory condition, or a history of altitude illness, should take medical advice before booking rather than after arriving.",
        ],
      },
      {
        heading: "The bike and the riding",
        paragraphs: [
          "Take the Himalayan. This is the trip the ground clearance, suspension travel and upright position were designed for, and it is the one tour on this site where the bike choice genuinely changes the outcome. A Duke 390 would be miserable and a Classic 350 is a compromise.",
          "Expect long days, rough and unpaved sections, water crossings and fuel stops far apart. A lead captain, a backup vehicle, fuel and stays on twin sharing are included, plus permits where applicable — and in this region permit requirements vary by nationality and by stretch, so tell us who is riding.",
        ],
      },
      {
        heading: "Who should book this",
        paragraphs: [
          "Riders with real multi-day experience who have ridden rough roads before. This is not a first Himalayan tour and it is not the trip on which to discover how you handle gravel or altitude.",
          "If you want the Himalaya and you have not done this kind of riding, do Chopta first. It is ₹5,999, it is two to three days, and it will tell you honestly whether Spiti is for you.",
        ],
      },
    ],
    ownFaqs: [
      {
        q: "When is the Spiti circuit open?",
        a: "For a limited window in the warmer months. Spiti is reached over high passes that hold snow much of the year, and opening and closing are decided by snow and the authorities rather than a calendar — the dates move every year. Give us your dates first and we will tell you what is genuinely possible, including when the answer is no.",
      },
      {
        q: "How serious is altitude sickness on the Spiti trip?",
        a: "Serious and genuine, and it is the main risk on this tour. You go high and stay high, which is unlike the day-trip altitude of Chopta or Badrinath, and fitness is no protection — strong riders get it as often as anyone. The itinerary gains height gradually on purpose. Headache, nausea, breathlessness at rest or confusion mean descending immediately, and that decision overrides the plan.",
      },
      {
        q: "Which bike should I take to Spiti?",
        a: "The Himalayan, and this is the one tour here where the bike genuinely changes the outcome — ground clearance, suspension travel and the upright riding position are all exactly what the route demands. A Duke 390 would be miserable; a Classic 350 is a real compromise.",
      },
      {
        q: "Is Spiti suitable as a first Himalayan bike tour?",
        a: "No. It needs real multi-day experience and previous riding on rough surfaces — it is not the trip on which to find out how you handle gravel or altitude. Do the ₹5,999 Chopta tour first; two to three days there will tell you honestly whether Spiti is for you.",
      },
      {
        q: "What permits do I need for Spiti?",
        a: "It varies by nationality and by stretch of the route, which is why we ask who is riding when you book. Permits where applicable are included and arranged — but the requirement is not uniform, so the rider list matters.",
      },
    ],
    notFor: "First-time Himalayan riders, anyone who has not ridden rough roads over several days, and anyone with a heart or respiratory condition or a history of altitude illness without medical advice first. Also not bookable on dates when the passes are closed — and that is decided by snow, not by us.",
  },
};
