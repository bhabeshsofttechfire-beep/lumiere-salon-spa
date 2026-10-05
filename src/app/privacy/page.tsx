import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Lumière Salon & Spa",
  description: "Our privacy policy and data security standards for salon and spa guests.",
};

export default function PrivacyPage() {
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
            Legal Transparency
          </span>
          <h1 className="text-3xl sm:text-4xl font-serif text-[#2A0E1D]">
            Privacy Policy & Patron Confidentiality
          </h1>
          <p className="text-xs text-[#7C6B73]">Effective Date: October 2026</p>

          <div className="space-y-4 text-sm text-[#5E4F55] leading-relaxed pt-4 border-t border-[#FAF3E8]">
            <h3 className="font-serif text-lg text-[#2A0E1D] font-semibold">
              1. Our Discretion Guarantee
            </h3>
            <p>
              At Lumière Salon & Spa, client confidentiality is paramount. Any personal
              information, phone numbers, treatment histories, allergy notes, or photographic
              records shared with our specialists are held in strict medical-grade confidence.
            </p>

            <h3 className="font-serif text-lg text-[#2A0E1D] font-semibold">
              2. Information We Collect
            </h3>
            <p>
              We collect information necessary to deliver exceptional, safe treatments:
              your name, contact email and telephone number, service preferences, and any
              contraindications (such as skin sensitivities or pregnancy).
            </p>

            <h3 className="font-serif text-lg text-[#2A0E1D] font-semibold">
              3. Protection of Payment Data
            </h3>
            <p>
              All online reservation authorizations are processed through encrypted, PCI-compliant
              payment gateways. Lumière does not store complete credit card credentials on local
              servers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
