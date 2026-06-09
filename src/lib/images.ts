// Curated, commercially-licensed Unsplash imagery (hotlinkable CDN, all verified).
// Any image that fails to load degrades to an aurora gradient (see SmartImage).
// Swap these for Triveni's own operator photos when available.
const U = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;
// Real Rishikesh / Uttarakhand photos (Wikimedia Commons, see ATTRIBUTIONS.md)
const L = (f: string) => `/images/rishikesh/${f}`;

export const img = {
  // mountains / scenery
  himalaya: U("1506905925346-21bda4d32df4", 2000),
  riverValley: L("ganges-view.jpg"), // real Ganga at Rishikesh
  valley: L("auli.jpg"), // Auli snow meadow, Uttarakhand
  peaks: L("nanda-devi.jpg"), // Nanda Devi
  mist: U("1483728642387-6c3bdd6c93e5"),
  // nearby getaways (real)
  mussoorie: L("mussoorie.jpg"),
  nainital: L("nainital.jpg"),
  corbett: L("corbett.jpg"),
  pineForest: L("pine-forest.jpg"),
  chopta: L("chopta.jpg"),
  triveniGhat: L("triveni-ghat.jpg"),
  ramjhulaNight: L("ramjhula-night.jpg"),
  // water / rafting — real Rishikesh rafting
  rafting: L("rafting.jpg"),
  whitewater: L("raft-ganga.jpg"),
  river3: U("1473773508845-188df298d2d1"),
  raft2: U("1591084728795-1149f32d9866"),
  kayak: L("kayak.jpg"), // real whitewater kayaker
  // camping / fire
  camping: U("1504280390367-361c6d9f38f4"),
  bonfire: U("1475483768296-6163e08872a1"),
  camp2: U("1496545672447-f699b503d270"),
  camp3: U("1510312305653-8ed496efae75"),
  // adrenaline / air — real activity photos
  bungeeJump: L("bungee.jpg"), // harnessed leap over a gorge
  air: L("paraglide.jpg"), // aerial / flying
  balloon: L("balloon.jpg"),
  zipline: U("1605540436563-5bca919ae766"),
  zip2: U("1622260614153-03223fb72052"),
  // earth / climb / trek
  climbing: L("climb.jpg"), // real rock climber
  climb2: U("1516592673884-4a382d1124c2"),
  gokart: L("gokart.jpg"),
  paintball: L("paintball.jpg"),
  mtb: L("mtb.jpg"),
  trek: U("1551632811-561732d1e306"),
  trek2: U("1454496406107-dc34337da8d6"),
  waterfall: L("neer-waterfall.jpg"), // real Neer Garh waterfall, Rishikesh
  fall2: U("1467890947394-8171244e5410"),
  // bikes / road
  enfield: L("enfield-himalaya.jpg"), // Royal Enfield in the Himalayas
  himalayanBike: U("1568772585407-9361f9bf3a87"),
  bikeRoad: L("uttarakhand-road.jpg"), // real Uttarakhand mountain road
  road2: U("1502920917128-1aa500764cbd"),
  road3: U("1449965408869-eaa3f722e40d"),
  ktm: U("1547549082-6bc09f2049ae"),
  scooter: U("1591637333184-19aa84b3e01f"),
  scooter2: U("1601758174114-e711c0cbaa69"),
  atv: U("1604868189265-219ba7bf7ea3"),
  // pilgrimage — real Rishikesh / Uttarakhand
  temple: L("lakshman.jpg"), // Lakshman Jhula + Tera Manzil temple
  temple2: L("ramjhula-night.jpg"), // Ram Jhula illuminated at night
  aarti: L("aarti.jpg"), // Ganga Aarti at Rishikesh
  aarti2: U("1561361513-2d000a50f0dc"),
  kedarnath: L("kedarnath.jpg"), // real Kedarnath temple
  yoga: U("1545205597-3d9d02c29597"),
} as const;

export type ImgKey = keyof typeof img;

// Gallery pools keyed by vibe (plain strings to avoid circular imports).
const POOLS: Record<string, ImgKey[]> = {
  water: ["rafting", "whitewater", "kayak", "river3", "raft2", "riverValley"],
  adrenaline: ["bungeeJump", "peaks", "climb2", "valley", "mist"],
  air: ["air", "balloon", "zip2", "peaks", "himalaya"],
  fire: ["camping", "bonfire", "camp2", "camp3", "riverValley"],
  earth: ["climbing", "climb2", "mtb", "trek", "waterfall", "paintball"],
  ride: ["enfield", "himalayanBike", "bikeRoad", "road2", "road3", "ktm", "scooter2"],
  pilgrim: ["temple", "temple2", "aarti", "aarti2", "kedarnath", "yoga"],
  guide: ["himalaya", "riverValley", "valley", "peaks", "yoga", "mist"],
};

function seedNum(s: string) {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
  return h;
}

// Distinct 5-image gallery per item: hero first, then rotated picks from its vibe pool.
export function galleryFor(hero: ImgKey, vibe: string, seed: string): string[] {
  const pool = POOLS[vibe] ?? POOLS.guide;
  const start = seedNum(seed) % pool.length;
  const ordered = [...pool.slice(start), ...pool.slice(0, start)];
  const keys: ImgKey[] = [hero];
  for (const k of ordered) {
    if (keys.length >= 5) break;
    if (!keys.includes(k)) keys.push(k);
  }
  return keys.map((k) => img[k]);
}
