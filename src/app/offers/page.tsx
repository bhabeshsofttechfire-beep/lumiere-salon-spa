import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Gift } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import OfferCard from "@/components/OfferCard";
import { offersData } from "@/data/offers";

export const metadata: Metadata = {
  title: "Exclusive Packages & Offers | Lumière Salon & Spa",
  description:
    "Explore seasonal packages and introductory offers. Save on couture haircuts, bridal beauty packages, and couples spa retreats.",
};

export default function OffersPage() {
  return (
    <div className="bg-[#FAF7F2] text-[#2A0E1D] min-h-screen">
      {/* 1. Header Banner */}
      <section className="relative py-24 bg-[#1A0812] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=2000&q=85"
            alt="Lumière Offers"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A0812] via-[#2A0E1D]/80 to-[#1A0812]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#C8A97E]/40 mb-4">
            <Gift className="w-3.5 h-3.5 text-[#DFC28D]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#E7CB9B] font-medium">
              Limited Privileges
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-serif font-normal text-white">
            Curated Beauty & Spa{" "}
            <span className="italic font-serif text-[#DFC28D]">Packages</span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-rose-100/80 leading-relaxed max-w-2xl mx-auto">
            Indulge in our most sought-after multi-service combinations, crafted to
            deliver complete head-to-toe renewal at an exceptional client value.
          </p>
        </div>
      </section>

      {/* 2. Offers Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Special Invitations"
          title="Exclusive Seasonal"
          highlightedText="Indulgences"
          description="Copy your preferred promo code and select Claim to reserve your package with our concierge."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offersData.map((offer) => (
            <OfferCard key={offer.id} offer={offer} />
          ))}
        </div>
      </section>

      {/* 3. Gift Card / Gifting Section */}
      <section className="py-20 bg-white border-t border-[#C8A97E]/20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#381124] to-[#4A1530] rounded-3xl p-8 sm:p-12 text-white border border-[#C8A97E]/40 shadow-2xl relative overflow-hidden">
            <div className="absolute right-0 top-0 w-80 h-80 bg-[#C8A97E]/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#E7CB9B] font-semibold">
                  <Gift className="w-4 h-4 text-[#DFC28D]" />
                  The Gift of Unforgettable Rejuvenation
                </div>
                <h3 className="text-3xl font-serif text-white">
                  Lumière Couture Gift Cards
                </h3>
                <p className="text-sm text-rose-100/80 leading-relaxed max-w-xl">
                  Delight someone special with a physical gold-embossed keepsake card
                  or an instant digital certificate redeemable across all services,
                  salon boutique products, and private spa packages.
                </p>
              </div>

              <div className="md:col-span-4 flex justify-start md:justify-end">
                <Link
                  href="/contact"
                  className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#DFC28D] to-[#C8A97E] text-[#1A0812] text-sm font-semibold hover:from-[#F2E3C6] hover:to-[#DFC28D] transition-all shadow-xl"
                >
                  Purchase Gift Card
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
