export interface FAQ {
  question: string;
  answer: string;
  category: "General" | "Booking" | "Bridal" | "Spa";
}

export const faqsData: FAQ[] = [
  {
    category: "General",
    question: "What makes Lumière Salon & Spa different from traditional salons?",
    answer:
      "Lumière offers a multi-sensory private oasis experience. We pair European master craftsmanship with holistic botanical wellness. Each guest enjoys a complimentary consultation, organic aromatherapy ritual, artisanal beverage service, and a personalized post-care treatment plan.",
  },
  {
    category: "Booking",
    question: "How far in advance should I book my appointment?",
    answer:
      "For signature hair color, balayage, and master aesthetician facials, we recommend booking 1 to 2 weeks in advance. For bridal couture packages and group spa sessions, booking 4 to 8 weeks ahead guarantees your preferred senior artist and private suite.",
  },
  {
    category: "Booking",
    question: "What is your cancellation and rescheduling policy?",
    answer:
      "We understand plans can change. We kindly request at least 24 hours' notice for cancellations or date changes. For bridal parties and half-day spa packages, 48 hours' notice allows us to reallocate our dedicated specialists.",
  },
  {
    category: "Bridal",
    question: "Do you offer on-location services for bridal weddings?",
    answer:
      "Yes! Our couture bridal team travels regionally and internationally for luxury destination weddings. We also reserve our entire private penthouse lounge for brides who prefer getting ready in salon privacy.",
  },
  {
    category: "Spa",
    question: "What should I wear or bring to my spa treatment?",
    answer:
      "Simply bring yourself. We provide plush plush microfiber robes, sanitized spa slippers, private lockers, and complete vanity amenities (Davines styling essentials, dyson dryers, and organic skincare).",
  },
  {
    category: "General",
    question: "What products and product brands do you use?",
    answer:
      "We curate exclusively clean, cruelty-free, sustainable luxury formulations including Davines, Oribe, Kérastase Chronologiste, Augustinus Bader, and Biologique Recherche.",
  },
];
