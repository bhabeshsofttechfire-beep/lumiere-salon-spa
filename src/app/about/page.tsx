import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  Heart,
  Shield,
  Leaf,
  Calendar,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import AnimatedCounter from "@/components/AnimatedCounter";
import TeamCard from "@/components/TeamCard";
import { teamMembersData } from "@/data/team";

export const metadata: Metadata = {
  title: "About Us | Our Story & Philosophy",
  description:
    "Discover the story behind Lumière Salon & Spa. European haute coiffure, medical aesthetics, and organic wellness rooted in beauty and mindful relaxation.",
};

export default function AboutPage() {
  return (
    <div className="bg-[#FAF7F2] text-[#2A0E1D]">
      {/* 1. Page Header */}
      <section className="relative py-24 bg-[#1A0812] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=2000&q=85"
            alt="Lumière Salon interior"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A0812] via-[#2A0E1D]/80 to-[#1A0812]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#C8A97E]/40 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#DFC28D]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#E7CB9B] font-medium">
              Our Heritage & Maison
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-serif font-normal text-white">
            Where Beauty Meets{" "}
            <span className="italic font-serif text-[#DFC28D]">Serenity</span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-rose-100/80 leading-relaxed max-w-2xl mx-auto">
            Founded with an enduring passion to redefine modern beauty through the
            lens of holistic wellness, European precision, and unhurried hospitality.
          </p>
        </div>
      </section>

      {/* 2. Salon Story & Origin */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 space-y-6">
            <SectionHeading
              eyebrow="Our Genesis"
              title="A Sanctuary Born from"
              highlightedText="Artisanal Passion"
              align="left"
              description="Lumière was born in 2012 out of a singular desire: to elevate personal grooming into a rejuvenating sanctuary experience."
            />

            <p className="text-sm sm:text-base text-[#5E4F55] leading-relaxed">
              We observed that traditional salons were fast-paced, noisy, and clinical.
              We envisioned something entirely different: a quiet Parisian-inspired salon
              and Mediterranean hydrotherapy retreat where guests can unwind with sensory
              aromatherapy, sip biodynamic teas or vintage champagne, and receive custom
              master hair cutting and dermal restoration tailored to their inner anatomy.
            </p>

            <p className="text-sm sm:text-base text-[#5E4F55] leading-relaxed">
              Today, Lumière has blossomed into an award-winning destination for
              creative directors, brides, and wellness seekers from across the country.
              Every touchpoint—from our bespoke cashmere robes to our filtered ionized
              rinse water—is curated for deep restoration.
            </p>

            <div className="pt-4 grid grid-cols-2 gap-6 border-t border-[#C8A97E]/30">
              <div>
                <h4 className="font-serif text-3xl font-semibold text-[#381124]">
                  <AnimatedCounter end={14} suffix="+" />
                </h4>
                <p className="text-xs text-[#7C6B73] uppercase tracking-wider mt-1">
                  Years of Excellence
                </p>
              </div>
              <div>
                <h4 className="font-serif text-3xl font-semibold text-[#381124]">
                  <AnimatedCounter end={18000} suffix="+" />
                </h4>
                <p className="text-xs text-[#7C6B73] uppercase tracking-wider mt-1">
                  Honored Clients Served
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg border border-[#C8A97E]/30">
                <Image
                  src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80"
                  alt="Stylist washing hair"
                  fill
                  sizes="300px"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg border border-[#C8A97E]/30">
                <Image
                  src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80"
                  alt="Spa massage treatment"
                  fill
                  sizes="300px"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="space-y-4 pt-8">
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg border border-[#C8A97E]/30">
                <Image
                  src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80"
                  alt="Facial skincare mask"
                  fill
                  sizes="300px"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg border border-[#C8A97E]/30">
                <Image
                  src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80"
                  alt="Balayage hair finishing"
                  fill
                  sizes="300px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Mission & Vision Pillars */}
      <section className="py-24 bg-white border-y border-[#C8A97E]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Guiding North Star"
            title="Mission, Vision &"
            highlightedText="Core Values"
            description="Built upon 4 enduring principles that guide every interaction at Lumière."
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-[#FAF7F2] p-8 rounded-3xl border border-[#C8A97E]/30 shadow-sm flex flex-col">
              <div className="w-12 h-12 rounded-full bg-[#381124] flex items-center justify-center text-[#E7CB9B] mb-6">
                <Sparkles className="w-6 h-6 text-[#DFC28D]" />
              </div>
              <h4 className="font-serif text-2xl font-medium text-[#2A0E1D] mb-2">
                Uncompromising Artistry
              </h4>
              <p className="text-sm text-[#5E4F55] leading-relaxed">
                We view hair styling, skincare, and nail wellness as bespoke fine art. Each client receives master precision.
              </p>
            </div>

            <div className="bg-[#FAF7F2] p-8 rounded-3xl border border-[#C8A97E]/30 shadow-sm flex flex-col">
              <div className="w-12 h-12 rounded-full bg-[#381124] flex items-center justify-center text-[#E7CB9B] mb-6">
                <Leaf className="w-6 h-6 text-[#DFC28D]" />
              </div>
              <h4 className="font-serif text-2xl font-medium text-[#2A0E1D] mb-2">
                Clean Botanical Purity
              </h4>
              <p className="text-sm text-[#5E4F55] leading-relaxed">
                Zero harmful toxins, parabens, or aggressive chemicals. We choose clean biodynamic luxury formulations.
              </p>
            </div>

            <div className="bg-[#FAF7F2] p-8 rounded-3xl border border-[#C8A97E]/30 shadow-sm flex flex-col">
              <div className="w-12 h-12 rounded-full bg-[#381124] flex items-center justify-center text-[#E7CB9B] mb-6">
                <Heart className="w-6 h-6 text-[#DFC28D]" />
              </div>
              <h4 className="font-serif text-2xl font-medium text-[#2A0E1D] mb-2">
                Empathetic Wellness
              </h4>
              <p className="text-sm text-[#5E4F55] leading-relaxed">
                We honor your mental relaxation. Gentle silence or warm conversation, unhurried attention, and deep hospitality.
              </p>
            </div>

            <div className="bg-[#FAF7F2] p-8 rounded-3xl border border-[#C8A97E]/30 shadow-sm flex flex-col">
              <div className="w-12 h-12 rounded-full bg-[#381124] flex items-center justify-center text-[#E7CB9B] mb-6">
                <Shield className="w-6 h-6 text-[#DFC28D]" />
              </div>
              <h4 className="font-serif text-2xl font-medium text-[#2A0E1D] mb-2">
                Absolute Discretion
              </h4>
              <p className="text-sm text-[#5E4F55] leading-relaxed">
                We provide private VIP suites, guarded privacy for celebrity guests, and a peaceful judgment-free sanctuary.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. The Artisans Roster */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our People"
          title="The Masters of"
          highlightedText="Lumière"
          description="Meet our senior stylists, colorists, dermal therapists, and bridal artists."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembersData.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      </section>

      {/* 5. Booking CTA */}
      <section className="py-20 bg-[#2A0E1D] text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-serif text-white">
            Experience the Lumière Difference
          </h2>
          <p className="text-rose-100/80 mt-4 text-base">
            Reserve your consultation with one of our master artisans today.
          </p>
          <div className="mt-8">
            <Link
              href="/book"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#DFC28D] to-[#C8A97E] text-[#1A0812] font-semibold text-sm hover:from-[#F2E3C6] hover:to-[#DFC28D] transition-all shadow-xl"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
