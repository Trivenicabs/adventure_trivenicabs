// Central brand + contact config for adventure.trivenicabs.in
export const site = {
  name: "Triveni Adventure",
  parent: "Triveni Cabs",
  domain: "adventure.trivenicabs.in",
  baseUrl: "https://adventure.trivenicabs.in",
  tagline: "Rishikesh Adventure Sports, Camping, Yatra & Rentals",
  description:
    "Book river rafting, bungee jumping, camping, ziplining, Char Dham yatra, Haridwar tours and self-drive bike & scooty rentals in Rishikesh — by Triveni.",
  phone: "+918923534551",
  phoneDisplay: "+91 89235 34551",
  whatsapp: "918923534551",
  email: "adventuretrivenicabs@gmail.com",
  // Canonical host for the main site. The bare domain redirects to www, so
  // linking straight to www saves every cross-site link a redirect hop.
  parentUrl: "https://www.trivenicabs.in",
  // The verified Google Business Profile figures for the business.
  //
  // reviewCount was 10000. Nothing supported it, and it was reaching
  // readers in the footer and answer engines in two AggregateRating
  // nodes. 354 is the number on the profile, which is the number a
  // customer sees when they check.
  //
  // These belong to the BUSINESS. Do not attach them to an item: a
  // per-tour rating claims that this many people reviewed that one
  // tour, and there is no per-tour review data behind it.
  rating: 4.9,
  reviewCount: 354,
  social: {
    instagram: "https://instagram.com/trivenicabs",
    facebook: "https://facebook.com/trivenicabs",
  },
} as const;

export const waLink = (msg?: string) =>
  `https://wa.me/${site.whatsapp}${
    msg ? `?text=${encodeURIComponent(msg)}` : ""
  }`;

export const telLink = () => `tel:${site.phone}`;
