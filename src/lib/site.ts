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
  parentUrl: "https://trivenicabs.in",
  rating: 4.9,
  reviewCount: 10000,
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
