export interface TeamMember {
  id: string;
  name: string;
  position: string;
  specialization: string;
  experience: string;
  bio: string;
  image: string;
  rating: number;
  clientCount: string;
  specialties: string[];
  social: {
    instagram?: string;
    linkedin?: string;
  };
}

export const teamMembersData: TeamMember[] = [
  {
    id: "elena-rostova",
    name: "Elena Rostova",
    position: "Creative Director & Master Colorist",
    specialization: "French Balayage, Precision Cuts & Color Correction",
    experience: "14+ Years",
    bio: "Trained in Paris and Milan, Elena has styled for international fashion weeks and celebrity editorial shoots. She specializes in effortless dimensional color and modern architectural cutting.",
    image:
      "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&w=800&q=80",
    rating: 4.98,
    clientCount: "2,800+",
    specialties: ["Balayage Artistry", "Blonde Formulations", "Corrective Color"],
    social: {
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    id: "marcus-vance",
    name: "Marcus Vance",
    position: "Lead Aesthetician & Dermal Specialist",
    specialization: "24K Gold Facials, Micro-Needling & Cellular Rejuvenation",
    experience: "11+ Years",
    bio: "A certified medical aesthetician with advanced dermal certifications from Switzerland. Marcus blends holistic lymphatic therapies with cutting-edge non-invasive dermal technology.",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
    rating: 4.95,
    clientCount: "1,950+",
    specialties: ["Clinical Facials", "Peptide Infusions", "Lymphatic Sculpting"],
    social: {
      instagram: "https://instagram.com",
    },
  },
  {
    id: "sophia-laurent",
    name: "Sophia Laurent",
    position: "Senior Bridal & Glamour Artist",
    specialization: "Couture Bridal Glamour, Airbrush & Editorial Makeup",
    experience: "9+ Years",
    bio: "Sophia brings brides' dream looks to life with luminous, long-wear HD techniques that feel weightless on the skin while radiating timeless grandeur.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    rating: 5.0,
    clientCount: "1,200+",
    specialties: ["Royal Bridal Makeup", "Airbrush HD Skin", "Hollywood Waves"],
    social: {
      instagram: "https://instagram.com",
    },
  },
  {
    id: "adrian-chen",
    name: "Adrian Chen",
    position: "Senior Spa & Massage Therapist",
    specialization: "Deep Tissue, Hot Stone & Thalasso Hydrotherapy",
    experience: "12+ Years",
    bio: "Adrian holds degrees in Eastern kinesiology and neuromuscular therapy. His intuitive touch releases accumulated chronic fatigue and recalibrates muscular balance.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    rating: 4.97,
    clientCount: "3,100+",
    specialties: ["Hot Stone Therapy", "Myofascial Release", "Aromatherapy Detox"],
    social: {
      instagram: "https://instagram.com",
    },
  },
  {
    id: "chloe-bennett",
    name: "Chloe Bennett",
    position: "Master Nail Stylist & Spa Technician",
    specialization: "Russian Manicure, Japanese Gel Art & Paraffin Care",
    experience: "8+ Years",
    bio: "Chloe transforms nail wellness into high fashion art. Renowned for immaculate cuticle detailing, delicate minimalist nail art, and restorative botanical paraffin wraps.",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80",
    rating: 4.92,
    clientCount: "2,200+",
    specialties: ["Russian Manicures", "Luxury Pedicures", "Nail Architecture"],
    social: {
      instagram: "https://instagram.com",
    },
  },
  {
    id: "isabella-rossi",
    name: "Isabella Rossi",
    position: "Senior Hair Stylist & Trichology Specialist",
    specialization: "Caviar Scalp Rituals, Japanese Straightening & Blowouts",
    experience: "10+ Years",
    bio: "Isabella specializes in deep hair restoration and sculptural textured cutting. Her clients praise her signature blowout that maintains body and bounce for days.",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80",
    rating: 4.96,
    clientCount: "2,400+",
    specialties: ["Scalp Trichology", "Bouncy Blowouts", "Textured Bob Cuts"],
    social: {
      instagram: "https://instagram.com",
    },
  },
];
