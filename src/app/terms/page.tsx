import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms & Conditions | Lumière Salon & Spa",
  description: "Terms and appointment etiquette at Lumière Salon & Spa.",
};

export default function TermsPage() {
  return (
    <div className="bg-[#FAF7F2] text-[#2A0E1D] min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-semibold text-[#381124] hover:text-[#C8A97E] mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Homepage</span>
        </Link>

        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#C8A97E]/30 shadow-xl space-y-6">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#B38E5D]">
            House Etiquette
          </span>
          <h1 className="text-3xl sm:text-4xl font-serif text-[#2A0E1D]">
            Terms & Salon Etiquette
          </h1>
          <p className="text-xs text-[#7C6B73]">Last Updated: October 2026</p>

          <div className="space-y-4 text-sm text-[#5E4F55] leading-relaxed pt-4 border-t border-[#FAF3E8]">
            <h3 className="font-serif text-lg text-[#2A0E1D] font-semibold">
              1. Arrival Time & Tranquility
            </h3>
            <p>
              We recommend arriving 15 minutes prior to your scheduled reservation to enjoy
              a complimentary botanical tea or champagne infusion and complete your consultation.
              To preserve our acoustic sanctuary, please keep mobile devices silenced in spa lounges.
            </p>

            <h3 className="font-serif text-lg text-[#2A0E1D] font-semibold">
              2. Cancellation Policy
            </h3>
            <p>
              Your appointment is reserved exclusively for you. We kindly request at least
              24 hours advance notice for cancellations or modifications. For bridal parties
              and private suite reservations, 48 hours notice is required.
            </p>

            <h3 className="font-serif text-lg text-[#2A0E1D] font-semibold">
              3. Gratuity & Service Values
            </h3>
            <p>
              Gratuity is at the sole discretion of our patrons and may be added upon check-out.
              For private suites and group bookings of 4 or more, a customary 20% concierge
              service charge is included.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
