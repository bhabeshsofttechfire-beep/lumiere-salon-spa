# ✨ Lumière Salon & Spa — Haute Coiffure & Wellness Maison

A modern, attractive, fully responsive luxury Salon & Spa web application built with **Next.js (App Router)**, **React 19**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

---

## 🎨 Luxury Aesthetic & Design System

- **Primary**: Deep Plum / Burgundy (`#1A0812`, `#2A0E1D`, `#381124`, `#4A1530`)
- **Secondary**: Soft Rose / Dusty Pink (`#DDA7A5`, `#F5EBEB`, `#EAD6D6`)
- **Accent**: Champagne Gold (`#C8A97E`, `#DFC28D`, `#F2E3C6`, `#B38E5D`)
- **Background**: Warm Ivory / Cream (`#FDFBF7`, `#FAF7F2`, `#FAF3E8`)
- **Typography**: Cormorant Garamond (Editorial Serif) & Plus Jakarta Sans (Clean Modern Sans)

---

## 🏛️ Pages & Features

1. **Home (`/`)**:
   - **Hero Section**: Atmospheric parallax background, luxury badge, typography, CTAs, and animated counters.
   - **About Preview**: Genesis story, award badges, and European master craftsmanship principles.
   - **Popular Services**: Grid of curated treatments with instant booking and detail links.
   - **Why Choose Us**: 4 pillars of excellence (Hospital-grade hygiene, certified master talent, bespoke diagnostics, unrushed appointments).
   - **Special Offers Preview**: Featured packages with savings badges and copyable promo codes.
   - **Before/After Gallery**: Interactive draggable before-and-after image comparison slider.
   - **Testimonial Slider**: Animated carousel with verified patron reviews and star ratings.
   - **Master Artisans Preview**: Stylist cards with experience, specialties, and social links.
   - **Instagram Gallery**: Editorial photography showcase.
   - **Booking CTA Banner**: High-conversion reservation banner.

2. **About Us (`/about`)**:
   - The House of Lumière heritage & origins.
   - Mission, Vision, and 4 Core Pillars (Uncompromising Artistry, Clean Botanical Purity, Empathetic Wellness, Absolute Discretion).
   - Experience statistics with animated counters.
   - Full master artisan team showcase.

3. **Services (`/services`)**:
   - 12 comprehensive categories: Hair Styling, Hair Cut, Hair Coloring, Hair Spa, Facial, Skin Care, Manicure, Pedicure, Makeup, Bridal Makeup, Massage, Spa Treatments.
   - Live interactive search and responsive category tabs.
   - Pricing, duration, and direct booking links.

4. **Service Details (`/services/[slug]`)**:
   - Pre-rendered static pages (SSG) for all 12 services.
   - High-resolution imagery, detailed descriptions, key treatment benefits.
   - Numbered step-by-step treatment journey.
   - Recommended add-on pairings.
   - Sticky booking widget with instant price and scheduling.

5. **Gallery (`/gallery`)**:
   - Interactive masonry grid filterable by category (Salon Interior, Hair Styling, Makeup, Spa, Facial Treatments, Transformations).
   - Interactive Before/After slider showcase.
   - Fullscreen **Lightbox Modal** with smooth image zoom, navigation arrows, captions, and keyboard escape support.

6. **Team (`/team`)**:
   - Profiles of senior stylists, master colorists, aesthetic dermatology specialists, and massage therapists.
   - Specialization badges, verified client rating, client count, and "Book with Specialist" action.

7. **Offers (`/offers`)**:
   - Promotional offer cards with percentage discounts, validity periods, and package inclusions.
   - One-click promo code copy with visual feedback.
   - Luxury gift card section.

8. **Testimonials (`/testimonials`)**:
   - Interactive testimonial slider.
   - Full review wall with 5-star rating filter and verified patron badges.

9. **Appointment Booking (`/book`)**:
   - Multi-step luxury reservation form.
   - Service selection (supports pre-selection via URL parameters, e.g. `?service=french-balayage-gloss`).
   - Specialist selection (or "Any Available Master Specialist").
   - Date picker & time slot selector.
   - Client contact details & special requests.
   - Real-time reservation summary card with transparent pricing.
   - Celebration confetti burst on confirmation with unique booking reference code (`LUM-XXXXXX`).

10. **Contact (`/contact`)**:
    - Beverly Hills maison coordinates, phone, email, operating hours.
    - Interactive Google Maps embed.
    - Inquiry form with department selection and submission feedback.
    - Collapsible FAQ accordion.

11. **Privacy & Terms (`/privacy`, `/terms`)**:
    - Discretion policies, appointment etiquette, and cancellation guidelines.

---

## 🛠️ Technology Stack

- **Framework**: Next.js 16 (App Router with Turbopack)
- **Library**: React 19 & TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React & Custom SVG Social Icons
- **Celebration**: Canvas-Confetti
- **Images**: Next.js `<Image>` optimized for responsive devices

---

## 🚀 Running Locally

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Production build & run
npm run build
npm run start
```
