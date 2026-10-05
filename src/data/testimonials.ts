export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  date: string;
  service: string;
  quote: string;
  verified: boolean;
}

export const testimonialsData: Testimonial[] = [
  {
    id: "test-1",
    name: "Victoria Kensington",
    role: "Fashion Director",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    rating: 5,
    date: "2 weeks ago",
    service: "French Balayage & Melted Gloss",
    quote:
      "Lumière is in a tier of its own. Elena executed the most seamless, sunlit balayage I've had in 15 years. The private salon ambiance, warm organic tea, and quiet luxury aesthetic makes every visit feel like a weekend getaway in Provence.",
    verified: true,
  },
  {
    id: "test-2",
    name: "Camille Dubois",
    role: "Architect & Interior Designer",
    avatar:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
    rating: 5,
    date: "1 month ago",
    service: "24K Gold Cellular Glow Facial",
    quote:
      "The 24K Gold facial transformed my fatigued, dry skin within 90 minutes. Marcus's touch and lymphatic sculpting technique gave me an instant lifting effect before my company gala. I received compliments the entire evening!",
    verified: true,
  },
  {
    id: "test-3",
    name: "Genevieve Sterling",
    role: "Bride",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
    rating: 5,
    date: "3 weeks ago",
    service: "Royal Bridal Couture Makeover",
    quote:
      "Sophia and the bridal team made my wedding morning pure serenity. My airbrush makeup stayed pristine through tears, dancing, and 14 hours of humidity. Every photo looked like Vogue. Truly the best investment of my wedding.",
    verified: true,
  },
  {
    id: "test-4",
    name: "Julian Thorne",
    role: "Managing Partner",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    rating: 5,
    date: "Last week",
    service: "Lumière Sensory Hot Stone Massage",
    quote:
      "As someone who travels internationally weekly, tension in my neck and shoulders was chronic. Adrian’s hot stone ritual is transcendent. The atmosphere, acoustics, and scent palette are world class.",
    verified: true,
  },
  {
    id: "test-5",
    name: "Aria Montgomery",
    role: "Creative Producer",
    avatar:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
    rating: 5,
    date: "2 months ago",
    service: "Rose & Champagne Gel Spa Manicure",
    quote:
      "Impeccable hygiene, serene aesthetic, and Chloe’s Russian manicure precision is unparalleled. My gel manicure remained without a single chip for nearly four weeks. Worth every single penny.",
    verified: true,
  },
];
