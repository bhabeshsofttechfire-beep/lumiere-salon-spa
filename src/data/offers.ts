export interface Offer {
  id: string;
  badge: string;
  title: string;
  tagline: string;
  description: string;
  price: number;
  originalPrice: number;
  discountPercentage: number;
  promoCode: string;
  validUntil: string;
  image: string;
  inclusions: string[];
  popular?: boolean;
}

export const offersData: Offer[] = [
  {
    id: "first-visit-welcome",
    badge: "New Client Exclusive",
    title: "First Visit Grand Welcome Offer",
    tagline: "Experience the Lumière difference with an introductory luxury indulgence.",
    description:
      "Indulge in a signature couture haircut, luxury hair conditioning mask, and scalp shiatsu massage, paired with a glass of champagne.",
    price: 85,
    originalPrice: 135,
    discountPercentage: 35,
    promoCode: "LUMIEREFIRST",
    validUntil: "Ongoing for new clients",
    image:
      "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1000&q=80",
    inclusions: [
      "Precision Couture Cut & Consultation",
      "Organic Botanicals Scalp Detox & Massage",
      "Signature Bouncy Blowout & Thermal Gloss",
      "Welcome Glass of Moët & Chandon Champagne",
    ],
    popular: true,
  },
  {
    id: "bridal-radiance-package",
    badge: "Bridal Signature",
    title: "Imperial Bridal Glow & Glamour Package",
    tagline: "Complete pre-wedding pampering and wedding day couture makeover.",
    description:
      "A curated 3-session bridal transformation including 24K Gold facial, bespoke hair styling trial, French gel manicure & pedicure, and wedding day HD airbrush glamour.",
    price: 490,
    originalPrice: 650,
    discountPercentage: 25,
    promoCode: "BRIDALLUXE",
    validUntil: "Book at least 3 weeks ahead",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1000&q=80",
    inclusions: [
      "Pre-Wedding 24K Gold Cellular Facial (Day -3)",
      "Rose Champagne Gel Spa Manicure & Pedicure",
      "Full Bridal HD Airbrush Artistry & Lash Clustering",
      "Luxury Couture Updo & Veil Fitting",
      "Emergency Bridal Touch-up Clutch Box",
    ],
    popular: true,
  },
  {
    id: "hair-spa-rejuvenate",
    badge: "Best Seller",
    title: "Hair Revive + Deep Spa Duo",
    tagline: "Complete head-to-toe relaxation and intense hair reconstruction.",
    description:
      "Combine our Royal Caviar Hair Spa with a 60-minute Swedish Aromatherapy tension relief back and shoulder massage.",
    price: 195,
    originalPrice: 275,
    discountPercentage: 30,
    promoCode: "REVIVEDUO",
    validUntil: "Valid through this month",
    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=80",
    inclusions: [
      "Royal Caviar Micro-Mist Hair Spa",
      "60-Min Targeted Aromatherapy Body Massage",
      "Collagen Eye Sheet Treatment during rinse",
      "Artisan Herbal Tea & Organic Truffle Pairing",
    ],
  },
  {
    id: "weekend-radiance-glow",
    badge: "Weekend Special",
    title: "Weekend Radiance Glow Escape",
    tagline: "Saturday & Sunday sanctuary escape for instant rejuvenation.",
    description:
      "Escape the urban rush with an AquaGlow Hydra-infusion facial followed by an express couture blowout and express rose manicure.",
    price: 180,
    originalPrice: 245,
    discountPercentage: 26,
    promoCode: "WEEKENDGLOW",
    validUntil: "Fridays, Saturdays & Sundays",
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1000&q=80",
    inclusions: [
      "AquaGlow Vortex Dermal Cleansing & Serum Infusion",
      "Express Couture Blowout & Heat Shield",
      "Rose Petal Express Gel Manicure",
      "Complimentary Rose Spritzer Drink",
    ],
  },
  {
    id: "couples-deluxe-spa",
    badge: "Romance & Wellness",
    title: "Couple's Deluxe Sanctuary Retreat",
    tagline: "Side-by-side indulgence in our private VIP couple's suite.",
    description:
      "Immerse together in a private floral hydrotherapy bath followed by dual 75-minute hot stone massages and chilled Prosecco with hand-dipped chocolate strawberries.",
    price: 360,
    originalPrice: 480,
    discountPercentage: 25,
    promoCode: "COUPLESLUXE",
    validUntil: "Advance reservation required",
    image:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1000&q=80",
    inclusions: [
      "Private VIP Suite with Candlelight & Rose Petals",
      "30-Min Mineral Hydrotherapy Jacuzzi Bath",
      "75-Min Dual Volcanic Hot Stone Massages",
      "Artisanal Strawberries & Prosecco Service",
    ],
  },
];
