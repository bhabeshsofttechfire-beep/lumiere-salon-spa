export interface Service {
  id: string;
  slug: string;
  name: string;
  category: ServiceCategory;
  shortDescription: string;
  fullDescription: string;
  duration: string;
  price: number;
  originalPrice?: number;
  image: string;
  benefits: string[];
  steps: { title: string; description: string }[];
  featured?: boolean;
  rating: number;
  reviewCount: number;
  recommendedAddons?: string[];
}

export type ServiceCategory =
  | "All"
  | "Hair Styling"
  | "Hair Cut"
  | "Hair Coloring"
  | "Hair Spa"
  | "Facial"
  | "Skin Care"
  | "Manicure"
  | "Pedicure"
  | "Makeup"
  | "Bridal Makeup"
  | "Massage"
  | "Spa Treatments";

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  "All",
  "Hair Styling",
  "Hair Cut",
  "Hair Coloring",
  "Hair Spa",
  "Facial",
  "Skin Care",
  "Manicure",
  "Pedicure",
  "Makeup",
  "Bridal Makeup",
  "Massage",
  "Spa Treatments",
];

export const servicesData: Service[] = [
  {
    id: "hair-cut-signature",
    slug: "signature-couture-haircut",
    name: "Signature Couture Haircut & Styling",
    category: "Hair Cut",
    shortDescription:
      "Bespoke precision haircut tailored to your facial geometry, finished with our signature blowout.",
    fullDescription:
      "Our master stylists evaluate your facial contours, bone structure, and lifestyle to deliver a transformative cut. Includes an organic botanical scalp cleansing, sensory shiatsu massage, luxury Davines conditioning treatment, and a voluminous couture blowout.",
    duration: "60 mins",
    price: 95,
    originalPrice: 120,
    image:
      "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1000&q=80",
    benefits: [
      "Customized architecture matching your facial proportions",
      "Detoxifying botanical scalp massage for root stimulation",
      "Thermal protective finish with weightless mirror shine",
      "Personalized at-home maintenance guide",
    ],
    steps: [
      {
        title: "1. Aesthetic Consultation",
        description: "Dialogue with our senior stylist to assess texture, face shape, and desired aesthetic.",
      },
      {
        title: "2. Scalp Detox & Cleanse",
        description: "Warm towel wrap with botanical elixir and therapeutic scalp stimulation.",
      },
      {
        title: "3. Sculptural Cut",
        description: "Dry and wet precision shear work for effortless movement and texture.",
      },
      {
        title: "4. Velvet Blowout",
        description: "Ionized blowout paired with champagne finishing serums.",
      },
    ],
    featured: true,
    rating: 4.9,
    reviewCount: 148,
    recommendedAddons: ["Keratin Gloss Infusion", "Scalp Micro-peel"],
  },
  {
    id: "hair-color-balayage",
    slug: "french-balayage-gloss",
    name: "French Balayage & Melted Gloss",
    category: "Hair Coloring",
    shortDescription:
      "Hand-painted luminous sun-kissed gradients blended seamlessly with custom toner.",
    fullDescription:
      "The pinnacle of natural, dimensional color. Using ammonia-free French lighteners infused with bond-multiplying peptides, our colorists hand-sweep multidimensional highlights tailored to catch ambient light flawlessly.",
    duration: "150 mins",
    price: 240,
    originalPrice: 280,
    image:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1000&q=80",
    benefits: [
      "Seamless regrowth with zero harsh lines",
      "Bond-repairing Olaplex peptide protection built-in",
      "High-shine acidic gloss sealing the cuticles",
      "Resistant to brassiness for up to 12 weeks",
    ],
    steps: [
      {
        title: "1. Chromatic Mapping",
        description: "Evaluating skin undertones to formulate your custom pigment blend.",
      },
      {
        title: "2. Hand-Painted Application",
        description: "Artisanal freehand balayage for ultra-soft transitions.",
      },
      {
        title: "3. Acidic Gloss Glaze",
        description: "Translucent toning gloss to infuse depth, tone, and diamond luster.",
      },
      {
        title: "4. Moisture Lock Seal",
        description: "Nutritive lipid mask under gentle infrared heat.",
      },
    ],
    featured: true,
    rating: 5.0,
    reviewCount: 210,
    recommendedAddons: ["Express Scalp Hydration", "Post-Color Blowout"],
  },
  {
    id: "hair-spa-caviar",
    slug: "royal-caviar-hair-spa",
    name: "Royal Caviar Deep Hair Spa",
    category: "Hair Spa",
    shortDescription:
      "Intense restorative ritual utilizing genuine caviar extract and bio-keratin proteins.",
    fullDescription:
      "A decadent multi-step wellness cure for stressed, heat-styled, or fragile tresses. Rich caviar pearls burst onto the scalp releasing essential fatty acids, amino acids, and vitamins that recharge depleted hair fibers from core to cuticle.",
    duration: "75 mins",
    price: 130,
    image:
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1000&q=80",
    benefits: [
      "Reconstructs broken keratin bonds by up to 92%",
      "Restores natural lipid moisture barrier",
      "Soothes itchy or stressed scalp environments",
      "Silken, fluid movement with zero heaviness",
    ],
    steps: [
      {
        title: "1. Diagnostic Trichology",
        description: "Digital micro-camera analysis of hair health and scalp elasticity.",
      },
      {
        title: "2. Caviar Pearl Infusion",
        description: "Freshly crushed marine caviar pearls massaged into each strand.",
      },
      {
        title: "3. Warm Micro-Mist Therapy",
        description: "Ultrasonic warm mist opening cuticles for complete nutrient penetration.",
      },
      {
        title: "4. Cool Acupressure Rinse",
        description: "Closing cuticles with herbal infusion and iced rose quartz rollers.",
      },
    ],
    featured: true,
    rating: 4.9,
    reviewCount: 96,
  },
  {
    id: "facial-gold-radiance",
    slug: "24k-gold-cellular-facial",
    name: "24K Gold Cellular Glow Facial",
    category: "Facial",
    shortDescription:
      "Youth-regenerating elixir facial combining pure 24K gold foil and collagen therapy.",
    fullDescription:
      "The definitive luxury anti-aging ritual. Micro-current lifting, sonic pore clarification, and the application of 99.9% pure 24-karat gold sheets stimulate cellular renewal, boost microcirculation, and impart an ethereal porcelain luminescence.",
    duration: "90 mins",
    price: 185,
    originalPrice: 220,
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1000&q=80",
    benefits: [
      "Immediate plumping and fine-line reduction",
      "Stimulates natural fibroblast collagen production",
      "Deep lymphatic drainage depuffs eyes and jawline",
      "Iridescent, red-carpet-ready luminosity",
    ],
    steps: [
      {
        title: "1. Double Enzyme Cleanse",
        description: "Gentle papaya enzymes melt away impurities without stripping moisture.",
      },
      {
        title: "2. Ultrasound Exfoliation",
        description: "Ultrasonic waves clear congested pores and refine skin texture.",
      },
      {
        title: "3. 24K Gold Foil Mask",
        description: "Pure gold leaf applied and massaged to melt deep into the dermal layer.",
      },
      {
        title: "4. Cryo-Glow Sculpting",
        description: "Chilled jade and rose quartz tools sculpt contours and seal hydration.",
      },
    ],
    featured: true,
    rating: 5.0,
    reviewCount: 320,
    recommendedAddons: ["Collagen Lip Plump", "Neck & Décolleté Firming"],
  },
  {
    id: "facial-hydra-derm",
    slug: "aquaglow-hydraderm-infusion",
    name: "AquaGlow Hydra-Infusion Treatment",
    category: "Skin Care",
    shortDescription:
      "Vortex pore vacuuming paired with targeted hyaluronic acid and antioxidant serums.",
    fullDescription:
      "A clinical yet indulgent medical-spa treatment that purifies, painlessly extracts, and floods thirsty skin with peptides, antioxidants, and triple-weight hyaluronic acid for instant dewy glass skin.",
    duration: "60 mins",
    price: 150,
    image:
      "https://images.unsplash.com/photo-1512290900672-1f02e6a987d6?auto=format&fit=crop&w=1000&q=80",
    benefits: [
      "Zero downtime with instant pore clearing",
      "Reduces appearance of hyperpigmentation",
      "Restores skin water retention by 400%",
      "Safe for sensitive, acne-prone, and mature skin",
    ],
    steps: [
      {
        title: "1. Vortex Cleansing",
        description: "Gentle lactic acid solution dislodges sebum and debris.",
      },
      {
        title: "2. Painless Vortex Extraction",
        description: "Suction clears blackheads and impactions without pinching.",
      },
      {
        title: "3. Hyaluronic Bath",
        description: "Custom serum cocktail pushed deep into skin with pressurized oxygen.",
      },
      {
        title: "4. LED Phototherapy",
        description: "Red and near-infrared light calms redness and stimulates elastin.",
      },
    ],
    featured: false,
    rating: 4.8,
    reviewCount: 112,
  },
  {
    id: "massage-deep-aroma",
    slug: "lumiere-sensory-hot-stone-massage",
    name: "Lumière Sensory Hot Stone Massage",
    category: "Massage",
    shortDescription:
      "Volcanic basalt stones and organic aromatherapeutic essential oils melting deep tension.",
    fullDescription:
      "Allow all traces of stress to evaporate as smooth heated basalt stones release therapeutic warmth deep into tight muscle groups. Blended with organic damask rose, bergamot, and sandalwood oils, this full-body experience recalibrates your nervous system.",
    duration: "90 mins",
    price: 165,
    originalPrice: 195,
    image:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1000&q=80",
    benefits: [
      "Relieves chronic neck, lumbar, and shoulder tightness",
      "Dramatically enhances circulation and sleep quality",
      "Lowers cortisol while triggering deep endorphin release",
      "Aromatherapeutic sensory reset for mind and spirit",
    ],
    steps: [
      {
        title: "1. Scent Selection Ritual",
        description: "Inhalation ritual with your chosen botanical essential oil blend.",
      },
      {
        title: "2. Warm Towel Foot Compress",
        description: "Purifying foot soak and reflex point activation.",
      },
      {
        title: "3. Heated Basalt Flow",
        description: "Gliding stone therapy tracing meridian lines and tension nodes.",
      },
      {
        title: "4. Scalp & Temple Soothe",
        description: "Gentle acupressure around temples and occipital ridge.",
      },
    ],
    featured: true,
    rating: 5.0,
    reviewCount: 275,
  },
  {
    id: "spa-thalasso-detox",
    slug: "thalasso-mineral-body-wrap",
    name: "Thalasso Moroccan Clay & Silk Body Wrap",
    category: "Spa Treatments",
    shortDescription:
      "Full-body sea salt exfoliation, warm rhassoul clay cocoon, and cashmere hydration.",
    fullDescription:
      "An ancient Mediterranean wellness journey. We begin with a whole-body pink Himalayan salt and crushed jasmine scrub, followed by a warm cocoon of nutrient-dense Atlas Mountain Rhassoul clay, finishing with an elixir of whipped shea and argan butter.",
    duration: "105 mins",
    price: 195,
    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=80",
    benefits: [
      "Draws heavy toxins and metabolic impurities from tissue",
      "Polishes dry textured skin to velvet softness",
      "Improves skin tone and lymphatic fluid drainage",
      "Deeply sedative experience inducing tranquil rest",
    ],
    steps: [
      {
        title: "1. Jasmine Salt Polish",
        description: "Invigorating dry brushing and pink mineral scrub.",
      },
      {
        title: "2. Thermal Clay Cocoon",
        description: "Application of mineral-rich Moroccan rhassoul clay and thermal wrap.",
      },
      {
        title: "3. Hydro-Rain Rinse",
        description: "Warm Vichy rain shower cascading over the body.",
      },
      {
        title: "4. Argan Elixir Drench",
        description: "Gentle effleurage massage with warm scented organic argan balm.",
      },
    ],
    featured: false,
    rating: 4.9,
    reviewCount: 88,
  },
  {
    id: "bridal-makeup-couture",
    slug: "royal-bridal-couture-makeover",
    name: "Royal Bridal Couture Makeover",
    category: "Bridal Makeup",
    shortDescription:
      "Unrivaled 16-hour long-wear bridal glam, HD airbrushing, and complete aesthetic styling.",
    fullDescription:
      "Designed for the most memorable day of your life. Our senior bridal artists create a timeless, luminous, photo-ready masterpiece tailored to your wedding gown, jewelry, lighting conditions, and unique beauty. Includes trial consultation, lash extensions, and bridal emergency touchup kit.",
    duration: "180 mins",
    price: 350,
    originalPrice: 420,
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1000&q=80",
    benefits: [
      "16-hour waterproof, sweat-resistant HD airbrush formula",
      "Handmade bespoke silk lash clustering",
      "Décolleté and shoulder champagne body shimmer",
      "Complimentary luxury bridal touch-up clutch included",
    ],
    steps: [
      {
        title: "1. Bridal Skin Prep",
        description: "Hydrating hyaluronic sheet mask and lymphatic ice globe massage.",
      },
      {
        title: "2. Airbrush HD Base",
        description: "Micro-fine silicone-free airbrushing for a flawless second-skin veil.",
      },
      {
        title: "3. Eye & Brow Artistry",
        description: "Smudge-proof jewel tones, winged definition, and 3D silk lashes.",
      },
      {
        title: "4. Veil & Jewel Setting",
        description: "Securing dupattas, veils, tiaras, and fixing hair ornamentations.",
      },
    ],
    featured: true,
    rating: 5.0,
    reviewCount: 194,
    recommendedAddons: ["Mother of the Bride Glam", "Pre-Wedding Spa Package"],
  },
  {
    id: "makeup-evening-glam",
    slug: "red-carpet-evening-glam",
    name: "Red Carpet Evening Glamour",
    category: "Makeup",
    shortDescription:
      "Striking red carpet and gala makeup with sculpted contour and soft smokey eye.",
    fullDescription:
      "Whether attending a gala, charity ball, or milestone celebration, our celebrity-trained artists deliver showstopping beauty that turns heads and photographs with perfection under studio or flash lighting.",
    duration: "75 mins",
    price: 120,
    image:
      "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1000&q=80",
    benefits: [
      "Custom color harmony matched to your evening gown",
      "Transfer-proof matte or vinyl lip styling",
      "Sculpted cheekbone and jawline definition",
      "Individual cluster lashes for fluttery elegance",
    ],
    steps: [
      {
        title: "1. Prep & Prime",
        description: "Pore-smoothing primer and brightening eye treatment.",
      },
      {
        title: "2. Dimensional Contour",
        description: "Cream and powder highlighting sculpting your best angles.",
      },
      {
        title: "3. Luminous Eye Glamour",
        description: "Pigment-packed eyeshadows, gel liner, and fluttery lashes.",
      },
      {
        title: "4. Setting Veil",
        description: "Micro-fine setting spray for 12-hour budge-proof longevity.",
      },
    ],
    featured: false,
    rating: 4.9,
    reviewCount: 104,
  },
  {
    id: "nail-manicure-rose",
    slug: "rose-champagne-spa-manicure",
    name: "Rose & Champagne Gel Spa Manicure",
    category: "Manicure",
    shortDescription:
      "Rose-petal hand soak, organic sugar exfoliation, warm paraffin wax, and pristine gel lacquer.",
    fullDescription:
      "Elevate everyday nail care into a restorative luxury ceremony. Hands are soaked in damask rose essence, buffed with raw cane sugar and almond oil, treated to warm collagen paraffin, and adorned with chip-resistant vegan gel polish.",
    duration: "50 mins",
    price: 65,
    image:
      "https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=1000&q=80",
    benefits: [
      "Heals dry cuticles and restores nail plate strength",
      "Paraffin wax intensely softens cracked winter skin",
      "3+ weeks chip-free high-gloss Japanese gel finish",
      "Calming hand and forearm pressure point massage",
    ],
    steps: [
      {
        title: "1. Rosebud Herbal Bath",
        description: "Warm soak with organic botanical oils to soften cuticles.",
      },
      {
        title: "2. Precision Cuticle Work",
        description: "Russian or gentle waterless cuticle cleaning for clean nail beds.",
      },
      {
        title: "3. Warm Paraffin Glove",
        description: "Thermal paraffin therapy driving moisture deep into knuckles.",
      },
      {
        title: "4. Artisan Gel Polish",
        description: "High-grade UV/LED gel polish finished with organic cuticle nectar.",
      },
    ],
    featured: false,
    rating: 4.8,
    reviewCount: 160,
  },
  {
    id: "nail-pedicure-botanical",
    slug: "lavender-eucalyptus-spa-pedicure",
    name: "Lavender & Eucalyptus Wellness Pedicure",
    category: "Pedicure",
    shortDescription:
      "Hydrotherapy foot whirlpool, pumice heel buffing, cooling clay mask, and reflexology massage.",
    fullDescription:
      "Reclaim lightness in tired feet and calves. Enjoy a fragrant eucalyptus whirlpool bath, diamond foot paddle callus softening, volcanic clay foot mask wrapped in steaming towels, followed by 20 minutes of restorative reflexology.",
    duration: "60 mins",
    price: 80,
    image:
      "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=1000&q=80",
    benefits: [
      "Eliminates calluses and rough skin on heels",
      "Stimulates blood flow and drains lower-leg fluid",
      "Relaxes foot arches and restores walking comfort",
      "Immaculately shaped and polished toenails",
    ],
    steps: [
      {
        title: "1. Hydrotherapy Whirlpool",
        description: "Epsom salts and pure eucalyptus oil soak.",
      },
      {
        title: "2. Diamond Heel Smoothing",
        description: "Gentle hygienic buffing of dry heel calluses.",
      },
      {
        title: "3. Steaming Clay Mask",
        description: "Mint and lavender thermal mud wrapped in hot towels.",
      },
      {
        title: "4. Reflexology Rub & Polish",
        description: "Acupressure foot massage and smudge-proof long-wear color.",
      },
    ],
    featured: false,
    rating: 4.9,
    reviewCount: 142,
  },
  {
    id: "hair-styling-waves",
    slug: "hollywood-glamour-waves",
    name: "Hollywood Glamour Waves & Updo",
    category: "Hair Styling",
    shortDescription:
      "Red-carpet sculpted vintage waves, bridal chignons, or modern textured updos.",
    fullDescription:
      "Indulge in couture event hair crafted by styling artisans. Whether you desire cascading vintage Hollywood s-waves, an airy French chignon, or romantic boho braids, our structural setting ensures day-to-night hold with natural bounce.",
    duration: "60 mins",
    price: 85,
    image:
      "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1000&q=80",
    benefits: [
      "All-weather weather-proof thermal humidity shield",
      "Sculpted volume without crunchiness or stiffness",
      "Hair extensions styling and blending included",
      "Flawlessly accessorized with pearl or jewel pins",
    ],
    steps: [
      {
        title: "1. Texture Preparation",
        description: "Thermal texturizing spray and volume root boost.",
      },
      {
        title: "2. Pin-Curl Sculpting",
        description: "Precision hot barrel curling set with directional clip cooling.",
      },
      {
        title: "3. Brushout & Shaping",
        description: "Boar bristle brushout creating uniform liquid waves.",
      },
      {
        title: "4. Micro-Mist Lock",
        description: "Flexible hold botanical lacquer with gold reflective mist.",
      },
    ],
    featured: false,
    rating: 4.9,
    reviewCount: 118,
  },
];
