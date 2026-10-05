import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, Calendar, Award } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import TeamCard from "@/components/TeamCard";
import { teamMembersData } from "@/data/team";

export const metadata: Metadata = {
  title: "Master Artisans & Specialists | Lumière Salon & Spa",
  description:
    "Meet our team of internationally trained master colorists, aesthetic dermatology specialists, and wellness therapists.",
};

export default function TeamPage() {
  return (
    <div className="bg-[#FAF7F2] text-[#2A0E1D] min-h-screen">
      {/* 1. Header Banner */}
      <section className="relative py-24 bg-[#1A0812] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&w=2000&q=85"
            alt="Lumière Team"
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
              The Masters of Craft
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-serif font-normal text-white">
            World-Class Artisans &{" "}
            <span className="italic font-serif text-[#DFC28D]">
              Aestheticians
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-rose-100/80 leading-relaxed max-w-2xl mx-auto">
            Each specialist at Lumière brings a decade of international training,
            an intuitive eye for facial symmetry, and heartfelt dedication to your comfort.
          </p>
        </div>
      </section>

      {/* 2. Team Cards Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Resident Masters"
          title="Curated Roster of"
          highlightedText="Styling Maestros"
          description="Click any artisan to reserve your appointment directly with their private suite."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembersData.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      </section>

      {/* 3. Apprenticeship & Philosophy Callout */}
      <section className="py-20 bg-white border-t border-[#C8A97E]/20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="w-14 h-14 rounded-full bg-[#FAF3E8] border border-[#C8A97E] flex items-center justify-center mx-auto text-[#381124]">
            <Award className="w-6 h-6 text-[#B38E5D]" />
          </div>

          <h3 className="text-3xl font-serif text-[#2A0E1D]">
            The Lumière Continuous Mastery Guild
          </h3>

          <p className="text-sm sm:text-base text-[#5E4F55] max-w-2xl mx-auto leading-relaxed">
            Every artisan at Lumière completes over 120 hours of annual advanced masterclasses
            in Paris, Zurich, and Milan. From micro-dermal infusions to the latest Japanese
            keratin treatments, our skills represent the pinnacle of modern beauty science.
          </p>

          <div className="pt-4">
            <Link
              href="/book"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#381124] text-white font-semibold text-sm hover:bg-[#4A1530] transition-colors shadow-md"
            >
              <Calendar className="w-4 h-4 text-[#DFC28D]" />
              <span>Book with a Specialist</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
