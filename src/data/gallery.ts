export interface GalleryItem {
  id: string;
  title: string;
  category: GalleryCategory;
  image: string;
  beforeImage?: string;
  caption: string;
  details?: string;
}

export type GalleryCategory =
  | "All"
  | "Salon Interior"
  | "Hair Styling"
  | "Makeup"
  | "Spa"
  | "Facial Treatments"
  | "Customer Transformations";

export const GALLERY_CATEGORIES: GalleryCategory[] = [
  "All",
  "Salon Interior",
  "Hair Styling",
  "Makeup",
  "Spa",
  "Facial Treatments",
  "Customer Transformations",
];

export const galleryItemsData: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Lumière Grand Salon & Styling Lounge",
    category: "Salon Interior",
    image:
      "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1200&q=85",
    caption:
      "Modern minimalist styling stations with Italian leather armchairs and warm ambient cove lighting.",
    details: "Designed with acoustic dampening for an intimate, tranquil atmosphere.",
  },
  {
    id: "gal-2",
    title: "Sculpted French Caramel Balayage",
    category: "Hair Styling",
    image:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=85",
    caption:
      "Multidimensional hand-painted balayage with warm golden toffee transitions.",
    details: "Stylist: Elena Rostova | Formulation: Acidic Gloss Glaze",
  },
  {
    id: "gal-3",
    title: "Private VIP Hydrotherapy Suite",
    category: "Spa",
    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=85",
    caption:
      "Botanical soaking tub surrounded by natural travertine and aromatic eucalyptus mist.",
    details: "Dedicated couples and individual deep immersion suite.",
  },
  {
    id: "gal-4",
    title: "24K Gold Cellular Radiance Mask",
    category: "Facial Treatments",
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=85",
    caption:
      "Bio-identical 24K gold foil infused under therapeutic microcurrent stimulation.",
    details: "Therapist: Marcus Vance | Skin Type: All skin types",
  },
  {
    id: "gal-5",
    title: "Royal Bridal HD Couture Glamour",
    category: "Makeup",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1200&q=85",
    caption:
      "Ethereal luminous complexion, rose-gold lids, and bespoke individual silk lashes.",
    details: "Lead Artist: Sophia Laurent | 16-Hour Transfer Proof Base",
  },
  {
    id: "gal-6",
    title: "Aromatherapeutic Volcanic Hot Stone Ritual",
    category: "Spa",
    image:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1200&q=85",
    caption:
      "Warm basalt stones aligned along energy meridians with pure organic essential oils.",
    details: "Duration: 90 Minutes | Therapist: Adrian Chen",
  },
  {
    id: "gal-7",
    title: "Precision Textured Bob & Gloss",
    category: "Customer Transformations",
    image:
      "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1200&q=85",
    beforeImage:
      "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1200&q=85",
    caption:
      "From damaged bleached ends to a revitalized, razor-sharp architectural bob.",
    details: "Colorist: Elena Rostova | Completed in one 2.5 hour appointment",
  },
  {
    id: "gal-8",
    title: "Champagne & Rose Nail Wellness Studio",
    category: "Salon Interior",
    image:
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=85",
    caption:
      "Ergonomic marble manicure bars with state-of-the-art medical-grade sterilization.",
    details: "Featuring cruelty-free, 10-free non-toxic Japanese gel lacquers.",
  },
  {
    id: "gal-9",
    title: "Vintage Hollywood Glamour Waves",
    category: "Hair Styling",
    image:
      "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1200&q=85",
    caption:
      "Liquid s-wave set crafted with boar bristle finishing and golden reflective mist.",
    details: "Stylist: Isabella Rossi | Event: Met Gala Gala Preview",
  },
  {
    id: "gal-10",
    title: "Dermal Hydra-Infusion Glass Skin",
    category: "Customer Transformations",
    image:
      "https://images.unsplash.com/photo-1512290900672-1f02e6a987d6?auto=format&fit=crop&w=1200&q=85",
    beforeImage:
      "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1200&q=85",
    caption:
      "Congested, dull skin revitalized to clean poreless clarity in a single treatment.",
    details: "Therapy: AquaGlow Infusion | Client: Victoria K.",
  },
  {
    id: "gal-11",
    title: "Red Carpet Sculpted Evening Makeup",
    category: "Makeup",
    image:
      "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1200&q=85",
    caption:
      "Chiseled cheekbones, velvet nude lips, and warm bronze smokey eyes.",
    details: "Artist: Sophia Laurent | Products: Charlotte Tilbury & Tom Ford",
  },
  {
    id: "gal-12",
    title: "Zen Herbal Tea & Relaxation Sanctuary",
    category: "Salon Interior",
    image:
      "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=1200&q=85",
    caption:
      "Post-treatment lounge serving organic biodynamic teas and fresh almond pastries.",
    details: "Complimentary access for all spa and salon guests.",
  },
];
