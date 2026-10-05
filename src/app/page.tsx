"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Sparkles,
  Calendar,
  ArrowRight,
  ShieldCheck,
  Award,
  HeartHandshake,
  Clock,
  CheckCircle2,
} from "lucide-react";
import { InstagramIcon } from "@/components/SocialIcons";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import OfferCard from "@/components/OfferCard";
import TeamCard from "@/components/TeamCard";
import TestimonialSlider from "@/components/TestimonialSlider";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import AnimatedCounter from "@/components/AnimatedCounter";
import { servicesData } from "@/data/services";
import { offersData } from "@/data/offers";
import { teamMembersData } from "@/data/team";
import { galleryItemsData } from "@/data/gallery";

export default function HomePage() {
  const popularServices = servicesData.filter((s) => s.featured).slice(0, 4);
  const featuredOffers = offersData.slice(0, 3);
  const featuredTeam = teamMembersData.slice(0, 3);
  const instagramImages = galleryItemsData.slice(0, 6);

  return (
    <div className="relative overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[92vh] flex items-center justify-center bg-[#1A0812] text-white overflow-hidden">
        {/* Luxury Background Image with Soft Parallax Zoom */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=2000&q=85"
            alt="Lumière Luxury Salon and Spa Lounge"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-35 scale-105 animate-pulse duration-[10000ms]"
          />
          {/* Gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A0812] via-[#2A0E1D]/70 to-[#1A0812]/90" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#C8A97E]/10 via-transparent to-transparent" />
        </div>

        {/* Floating Decorative Shapes / Orbs */}
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-[#C8A97E]/10 rounded-full blur-3xl pointer-events-none animate-float" />
        <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-[#5D1D3D]/30 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center flex flex-col items-center">
          {/* Luxury Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#C8A97E]/40 mb-6 shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#DFC28D]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#E7CB9B] font-medium">
              Luxury Beauty & Wellness Experience
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-normal tracking-tight text-white leading-[1.08] max-w-4xl"
          >
            Relax. Refresh. <br />
            <span className="italic font-serif text-transparent bg-clip-text bg-gradient-to-r from-[#F2E3C6] via-[#DFC28D] to-[#C8A97E]">
              Rediscover Yourself.
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="mt-6 text-base sm:text-xl text-rose-100/80 max-w-2xl font-light leading-relaxed"
          >
            An intimate sanctuary where world-class haute coiffure, medical-grade
            aesthetics, and meditative spa therapies harmonize to unlock your authentic radiance.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.45 }}
            className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <Link
              href="/book"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-[#DFC28D] to-[#C8A97E] text-[#1A0812] text-sm font-semibold hover:from-[#F2E3C6] hover:to-[#DFC28D] transition-all shadow-xl hover:shadow-2xl hover:scale-105 duration-200"
            >
              <Calendar className="w-4 h-4 text-[#1A0812]" />
              <span>Book Your Appointment</span>
              <ArrowRight className="w-4 h-4 text-[#1A0812]" />
            </Link>

            <Link
              href="/services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm font-medium backdrop-blur-md border border-white/20 hover:border-[#C8A97E] transition-all"
            >
              <span>Explore Our Services</span>
            </Link>
          </motion.div>

          {/* Quick Stats Highlights */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-16 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-12 text-center w-full max-w-3xl"
          >
            <div>
              <div className="text-2xl sm:text-3xl font-serif text-[#DFC28D] font-medium">
                <AnimatedCounter end={14} suffix="+" />
              </div>
              <div className="text-[11px] uppercase tracking-wider text-rose-100/70 mt-1">
                Years of Mastery
              </div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-serif text-[#DFC28D] font-medium">
                <AnimatedCounter end={18000} suffix="+" />
              </div>
              <div className="text-[11px] uppercase tracking-wider text-rose-100/70 mt-1">
                Pampered Guests
              </div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-serif text-[#DFC28D] font-medium">
                <AnimatedCounter end={24} suffix="+" />
              </div>
              <div className="text-[11px] uppercase tracking-wider text-rose-100/70 mt-1">
                Master Stylists
              </div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-serif text-[#DFC28D] font-medium">
                <AnimatedCounter end={4.98} decimals={2} suffix="/5" />
              </div>
              <div className="text-[11px] uppercase tracking-wider text-rose-100/70 mt-1">
                Client Rating
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. ABOUT PREVIEW SECTION */}
      <section className="py-24 bg-[#FAF7F2] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Visual Image Grid */}
            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[4/5] w-full rounded-3xl overflow-hidden shadow-2xl border border-[#C8A97E]/30">
                <Image
                  src="https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1200&q=85"
                  alt="Lumière Salon interior lounge"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              {/* Overlapping Floating Accent Card */}
              <div className="absolute -bottom-8 -right-4 sm:-right-8 bg-white/95 backdrop-blur-md p-6 rounded-2xl border border-[#C8A97E]/40 shadow-xl max-w-xs hidden sm:block">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-[#381124] flex items-center justify-center text-[#E7CB9B]">
                    <Award className="w-5 h-5 text-[#DFC28D]" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-[#2A0E1D] text-base">
                      Vogue Beauty Awards
                    </h4>
                    <p className="text-xs text-[#7C6B73]">Winner, Best Luxury Spa 2024</p>
                  </div>
                </div>
                <p className="text-xs text-[#5E4F55] leading-relaxed">
                  Celebrated globally for unparalleled salon hospitality and holistic dermal revitalization.
                </p>
              </div>
            </div>

            {/* Text Description */}
            <div className="lg:col-span-6 space-y-6">
              <SectionHeading
                eyebrow="The House of Lumière"
                title="A Private Haven of"
                highlightedText="Refined Elegance"
                align="left"
                description="Founded on the European philosophy that true beauty is born from tranquility, Lumière is designed as an escape from urban momentum. Every service is a curated sensorial ritual."
              />

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3.5">
                  <div className="w-6 h-6 rounded-full bg-[#FAF3E8] border border-[#C8A97E]/40 flex items-center justify-center shrink-0 mt-1">
                    <CheckCircle2 className="w-4 h-4 text-[#B38E5D]" />
                  </div>
                  <div>
                    <h4 className="font-serif font-semibold text-lg text-[#2A0E1D]">
                      Bespoke Master Craftsmanship
                    </h4>
                    <p className="text-sm text-[#5E4F55] leading-relaxed">
                      Our international stylists and aestheticians train continuously in Paris, London, and Tokyo to deliver contemporary precision.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-6 h-6 rounded-full bg-[#FAF3E8] border border-[#C8A97E]/40 flex items-center justify-center shrink-0 mt-1">
                    <CheckCircle2 className="w-4 h-4 text-[#B38E5D]" />
                  </div>
                  <div>
                    <h4 className="font-serif font-semibold text-lg text-[#2A0E1D]">
                      Cruelty-Free, Organic Formulations
                    </h4>
                    <p className="text-sm text-[#5E4F55] leading-relaxed">
                      We curate exclusively clean, sustainable ingredients—from rare botanical caviar extracts to cold-pressed organic damask rose oils.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-6 h-6 rounded-full bg-[#FAF3E8] border border-[#C8A97E]/40 flex items-center justify-center shrink-0 mt-1">
                    <CheckCircle2 className="w-4 h-4 text-[#B38E5D]" />
                  </div>
                  <div>
                    <h4 className="font-serif font-semibold text-lg text-[#2A0E1D]">
                      Private Suites & Acoustic Sanctuary
                    </h4>
                    <p className="text-sm text-[#5E4F55] leading-relaxed">
                      Each treatment suite is acoustically treated with private dimmable lighting, aromatherapy diffusers, and warm plush cashmere wraps.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex items-center gap-6">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#381124] text-white text-sm font-medium hover:bg-[#4A1530] transition-colors shadow-md"
                >
                  <span>Our Heritage & Story</span>
                  <ArrowRight className="w-4 h-4 text-[#DFC28D]" />
                </Link>
                <Link
                  href="/team"
                  className="text-sm font-medium text-[#381124] hover:text-[#C8A97E] underline underline-offset-4 transition-colors"
                >
                  Meet Our Artisans
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. POPULAR SERVICES SECTION */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <SectionHeading
              eyebrow="Signature Portfolio"
              title="Our Most Coveted"
              highlightedText="Beauty Rituals"
              align="left"
              description="Each treatment is tailored to accentuate your individual grace while nurturing your body and senses."
            />
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#381124] hover:text-[#C8A97E] transition-colors shrink-0 group"
            >
              <span>View Full Service Menu</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {popularServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE US SECTION */}
      <section className="py-24 bg-[#2A0E1D] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-[#C8A97E]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading
            eyebrow="The Lumière Standard"
            title="Why Discerning Guests"
            highlightedText="Choose Lumière"
            description="Our obsessive dedication to hygiene, craftsmanship, and holistic hospitality ensures an unrivaled salon journey."
            dark
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-[#C8A97E]/50 transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-[#381124] border border-[#C8A97E] flex items-center justify-center mb-6">
                <ShieldCheck className="w-6 h-6 text-[#DFC28D]" />
              </div>
              <h4 className="font-serif text-xl font-medium text-white mb-2">
                Hospital-Grade Hygiene
              </h4>
              <p className="text-sm text-rose-100/70 leading-relaxed">
                Medical autoclaves, single-use sterilized file packs, and air purification guarantee your absolute safety.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-[#C8A97E]/50 transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-[#381124] border border-[#C8A97E] flex items-center justify-center mb-6">
                <Award className="w-6 h-6 text-[#DFC28D]" />
              </div>
              <h4 className="font-serif text-xl font-medium text-white mb-2">
                Certified Master Talent
              </h4>
              <p className="text-sm text-rose-100/70 leading-relaxed">
                Our team averages over 10 years of haute coiffure and clinical dermal experience at top European academies.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-[#C8A97E]/50 transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-[#381124] border border-[#C8A97E] flex items-center justify-center mb-6">
                <HeartHandshake className="w-6 h-6 text-[#DFC28D]" />
              </div>
              <h4 className="font-serif text-xl font-medium text-white mb-2">
                Bespoke Consultations
              </h4>
              <p className="text-sm text-rose-100/70 leading-relaxed">
                Every appointment begins with in-depth bone structure and trichology diagnostics to formulate your unique look.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-[#C8A97E]/50 transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-[#381124] border border-[#C8A97E] flex items-center justify-center mb-6">
                <Clock className="w-6 h-6 text-[#DFC28D]" />
              </div>
              <h4 className="font-serif text-xl font-medium text-white mb-2">
                Unrushed Luxury Time
              </h4>
              <p className="text-sm text-rose-100/70 leading-relaxed">
                We never double-book. Your dedicated artist commits 100% of their attention solely to your comfort and beauty.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SPECIAL OFFERS PREVIEW */}
      <section className="py-24 bg-[#FAF7F2] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Curated Indulgences"
            title="Seasonal Privileges &"
            highlightedText="Signature Packages"
            description="Experience our most cherished beauty packages at an exclusive introductory investment."
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredOffers.map((offer) => (
              <OfferCard key={offer.id} offer={offer} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/offers"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-[#381124] text-[#381124] hover:bg-[#381124] hover:text-white transition-all text-sm font-semibold shadow-sm"
            >
              <span>Explore All Seasonal Packages</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. BEFORE / AFTER TRANSFORMATION GALLERY */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Dramatic Artistry"
            title="Witness the"
            highlightedText="Transformation"
            description="Interact with our real client before-and-after showcase to appreciate our master color correction and restorative rituals."
          />

          <div className="mt-12">
            <BeforeAfterSlider
              beforeImage="https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1200&q=85"
              afterImage="https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1200&q=85"
              title="French Balayage & Couture Cut Makeover"
              subtitle="From brassy damaged ends to a luminous, multidimensional honey blonde with mirror-like shine."
            />
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#381124] hover:text-[#C8A97E] transition-colors"
            >
              <span>View Full Transformation Portfolio</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. CUSTOMER TESTIMONIALS */}
      <section className="py-24 bg-[#FAF7F2] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Client Love"
            title="Stories of"
            highlightedText="Rejuvenation"
            description="Read verified testimonials from society figures, brides, and wellness seekers who entrust their beauty to us."
          />

          <div className="mt-14">
            <TestimonialSlider />
          </div>
        </div>
      </section>

      {/* 8. MASTER TEAM MEMBERS PREVIEW */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <SectionHeading
              eyebrow="Our Artisans"
              title="Meet Our"
              highlightedText="Master Specialists"
              align="left"
              description="Passionate, internationally trained beauty masters committed to perfecting your unique aesthetic."
            />
            <Link
              href="/team"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#381124] hover:text-[#C8A97E] transition-colors shrink-0 group"
            >
              <span>View Full Stylist Roster</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredTeam.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* 9. INSTAGRAM & SOCIAL GALLERY */}
      <section className="py-20 bg-[#FAF7F2] relative border-t border-[#C8A97E]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#B38E5D] font-semibold mb-2">
            <InstagramIcon className="w-3.5 h-3.5" />
            Follow @LumiereSalonSpa
          </div>
          <h3 className="text-3xl font-serif text-[#2A0E1D]">
            Moments of Luminous Beauty
          </h3>
          <p className="text-sm text-[#5E4F55] mt-1">
            Tag #LumiereMoments to be featured on our editorial journal.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {instagramImages.map((img) => (
              <Link
                key={img.id}
                href="/gallery"
                className="group relative aspect-square rounded-2xl overflow-hidden shadow-sm border border-[#C8A97E]/30"
              >
                <Image
                  src={img.image}
                  alt={img.title}
                  fill
                  sizes="(max-width: 768px) 50vw, 16vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-[#381124]/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                  <InstagramIcon className="w-6 h-6 text-[#DFC28D]" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 10. BOOKING CTA BANNER */}
      <section className="py-24 bg-gradient-to-r from-[#2A0E1D] via-[#381124] to-[#4A1530] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#C8A97E]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#C8A97E]/40 mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[#DFC28D]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#E7CB9B] font-medium">
              Reserve Your Serenity
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif font-normal leading-tight">
            Ready to Experience the{" "}
            <span className="italic font-serif text-[#DFC28D]">
              Art of Pure Pampering?
            </span>
          </h2>

          <p className="mt-6 text-base sm:text-lg text-rose-100/80 max-w-2xl mx-auto leading-relaxed">
            Our concierge is standing by to curate your personalized escape. Select your
            treatment online or contact us directly for bespoke bridal and private party bookings.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/book"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-[#DFC28D] to-[#C8A97E] text-[#1A0812] text-sm font-semibold hover:from-[#F2E3C6] hover:to-[#DFC28D] transition-all shadow-xl hover:scale-105"
            >
              <Calendar className="w-4 h-4 text-[#1A0812]" />
              <span>Book Appointment Online</span>
            </Link>

            <a
              href="tel:+15557892345"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm font-medium backdrop-blur-md border border-white/20 hover:border-[#C8A97E] transition-all"
            >
              <span>Call Concierge: +1 (555) 789-2345</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
