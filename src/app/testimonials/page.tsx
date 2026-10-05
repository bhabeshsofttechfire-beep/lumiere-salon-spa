"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  Star,
  ShieldCheck,
  MessageSquare,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import TestimonialSlider from "@/components/TestimonialSlider";
import { testimonialsData } from "@/data/testimonials";

export default function TestimonialsPage() {
  const [filterRating, setFilterRating] = useState<number | "all">("all");

  const filtered = testimonialsData.filter((item) =>
    filterRating === "all" ? true : item.rating === filterRating
  );

  return (
    <div className="bg-[#FAF7F2] text-[#2A0E1D] min-h-screen">
      {/* 1. Header Banner */}
      <section className="relative py-24 bg-[#1A0812] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=2000&q=85"
            alt="Lumière Testimonials"
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
              Verified Patron Feedback
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-serif font-normal text-white">
            Words of Reverence &{" "}
            <span className="italic font-serif text-[#DFC28D]">Gratitude</span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-rose-100/80 leading-relaxed max-w-2xl mx-auto">
            Discover why Lumière remains the sanctuary of choice for discerning
            patrons seeking exemplary hair design and restorative spa therapy.
          </p>
        </div>
      </section>

      {/* 2. Interactive Testimonials Carousel */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Featured Reviews"
          title="Spotlight Patron"
          highlightedText="Experiences"
          description="A carousel of heartfelt memories from our verified clientele."
        />

        <div className="mt-14">
          <TestimonialSlider />
        </div>
      </section>

      {/* 3. Full Review Wall */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-[#C8A97E]/20">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-12">
          <div>
            <h3 className="font-serif text-3xl text-[#2A0E1D]">
              Client Chronicle
            </h3>
            <p className="text-xs text-[#7C6B73] mt-1">
              Read all verified reflections and ratings
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs">
            <span className="text-[#7C6B73]">Filter by rating:</span>
            <button
              onClick={() => setFilterRating("all")}
              className={`px-3 py-1.5 rounded-full border transition-all ${
                filterRating === "all"
                  ? "bg-[#381124] text-white border-[#381124]"
                  : "bg-white text-[#5E4F55] border-[#C8A97E]/30"
              }`}
            >
              All (5.0)
            </button>
            <button
              onClick={() => setFilterRating(5)}
              className={`px-3 py-1.5 rounded-full border transition-all flex items-center gap-1 ${
                filterRating === 5
                  ? "bg-[#381124] text-white border-[#381124]"
                  : "bg-white text-[#5E4F55] border-[#C8A97E]/30"
              }`}
            >
              <Star className="w-3 h-3 fill-[#DFC28D] text-[#DFC28D]" />
              <span>5 Stars</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl p-8 border border-[#C8A97E]/30 shadow-md hover:shadow-xl transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-[#DFC28D] text-[#DFC28D]"
                      />
                    ))}
                  </div>
                  <span className="text-[11px] text-[#7C6B73]">{item.date}</span>
                </div>

                <p className="font-serif text-base sm:text-lg text-[#2A0E1D] italic leading-relaxed mb-6">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-[#FAF3E8] flex items-center gap-3">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border border-[#C8A97E]/40 shrink-0">
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1">
                    <h4 className="font-serif font-bold text-sm text-[#2A0E1D] truncate">
                      {item.name}
                    </h4>
                    <ShieldCheck className="w-3.5 h-3.5 text-[#B38E5D] shrink-0" />
                  </div>
                  <p className="text-xs text-[#7C6B73] truncate">{item.service}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Leave a Review CTA */}
      <section className="py-20 bg-white border-t border-[#C8A97E]/20 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <MessageSquare className="w-10 h-10 text-[#C8A97E] mx-auto mb-3" />
          <h3 className="text-2xl sm:text-3xl font-serif text-[#2A0E1D]">
            Have You Experienced Lumière?
          </h3>
          <p className="text-sm text-[#5E4F55] mt-2 mb-6">
            We value the reflections of our cherished guests. Share your journey with
            our managing directors.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#381124] text-white font-semibold text-sm hover:bg-[#4A1530] transition-colors shadow-md"
          >
            <span>Share Your Experience</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
