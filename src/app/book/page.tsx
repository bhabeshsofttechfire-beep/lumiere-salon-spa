"use client";

import { Suspense } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { Sparkles, Phone, ShieldCheck, Clock, RefreshCw } from "lucide-react";
import BookingForm from "@/components/BookingForm";

function BookingContent() {
  const searchParams = useSearchParams();
  const serviceSlug = searchParams.get("service") || undefined;
  const specialistId = searchParams.get("specialist") || undefined;
  const offerId = searchParams.get("offer") || undefined;

  return (
    <BookingForm
      initialServiceSlug={serviceSlug}
      initialSpecialistId={specialistId}
      initialOfferId={offerId}
    />
  );
}

export default function BookPage() {
  return (
    <div className="bg-[#FAF7F2] text-[#2A0E1D] min-h-screen pb-24">
      {/* 1. Page Header */}
      <section className="relative py-20 bg-[#1A0812] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=2000&q=85"
            alt="Lumière Booking Sanctuary"
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
              Appointments & Reservations
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-serif font-normal text-white">
            Reserve Your{" "}
            <span className="italic font-serif text-[#DFC28D]">
              Sanctuary Experience
            </span>
          </h1>

          <p className="mt-4 text-sm sm:text-base text-rose-100/80 leading-relaxed max-w-2xl mx-auto">
            Choose your bespoke hair design, dermal aesthetician, or spa therapy.
            Our salon concierge will prepare your private suite upon arrival.
          </p>
        </div>
      </section>

      {/* 2. Main Booking Container */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <Suspense
          fallback={
            <div className="bg-white rounded-3xl p-16 border border-[#C8A97E]/30 text-center shadow-xl">
              <RefreshCw className="w-8 h-8 animate-spin text-[#C8A97E] mx-auto mb-3" />
              <p className="text-sm text-[#5E4F55]">Loading reservation system...</p>
            </div>
          }
        >
          <BookingContent />
        </Suspense>
      </section>

      {/* 3. Concierge Guarantees */}
      <section className="mt-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="p-6 rounded-2xl bg-white border border-[#C8A97E]/20 shadow-sm">
            <div className="w-10 h-10 rounded-full bg-[#FAF3E8] border border-[#C8A97E]/30 flex items-center justify-center mx-auto mb-3">
              <Clock className="w-5 h-5 text-[#B38E5D]" />
            </div>
            <h4 className="font-serif font-medium text-lg text-[#2A0E1D]">
              Seamless Flexibility
            </h4>
            <p className="text-xs text-[#5E4F55] mt-1 leading-relaxed">
              Complimentary rescheduling up to 24 hours prior to appointment time.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#C8A97E]/20 shadow-sm">
            <div className="w-10 h-10 rounded-full bg-[#FAF3E8] border border-[#C8A97E]/30 flex items-center justify-center mx-auto mb-3">
              <Phone className="w-5 h-5 text-[#B38E5D]" />
            </div>
            <h4 className="font-serif font-medium text-lg text-[#2A0E1D]">
              Personal Concierge
            </h4>
            <p className="text-xs text-[#5E4F55] mt-1 leading-relaxed">
              Questions or special group booking? Call us anytime at +1 (555) 789-2345.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#C8A97E]/20 shadow-sm">
            <div className="w-10 h-10 rounded-full bg-[#FAF3E8] border border-[#C8A97E]/30 flex items-center justify-center mx-auto mb-3">
              <ShieldCheck className="w-5 h-5 text-[#B38E5D]" />
            </div>
            <h4 className="font-serif font-medium text-lg text-[#2A0E1D]">
              Private Valet & Bar
            </h4>
            <p className="text-xs text-[#5E4F55] mt-1 leading-relaxed">
              Complimentary valet arrival, organic tea bar, and sparkling champagne.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
