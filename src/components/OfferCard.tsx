"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, Check, Copy, CheckCheck, ArrowRight, Calendar } from "lucide-react";
import { Offer } from "@/data/offers";

interface OfferCardProps {
  offer: Offer;
}

export default function OfferCard({ offer }: OfferCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(offer.promoCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="relative group bg-white rounded-3xl overflow-hidden border border-[#C8A97E]/30 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col">
      {/* Popular Ribbon */}
      {offer.popular && (
        <div className="absolute top-4 right-4 z-20">
          <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-gradient-to-r from-[#381124] to-[#4A1530] text-[#E7CB9B] border border-[#C8A97E] shadow-lg flex items-center gap-1.5">
            <Sparkles className="w-3 h-3 text-[#DFC28D]" />
            Guest Favorite
          </span>
        </div>
      )}

      {/* Image Header */}
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#FAF3E8]">
        <Image
          src={offer.image}
          alt={offer.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
          <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-white/95 text-[#2A0E1D] shadow-sm">
            {offer.badge}
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#C8A97E] text-[#2A0E1D] shadow-sm">
            Save {offer.discountPercentage}%
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 sm:p-8 flex flex-col flex-1 justify-between">
        <div>
          <div className="flex items-baseline gap-3 mb-2">
            <span className="text-3xl font-serif font-bold text-[#381124]">
              ${offer.price}
            </span>
            <span className="text-base text-[#7C6B73] line-through">
              ${offer.originalPrice}
            </span>
          </div>

          <h3 className="font-serif text-2xl font-medium text-[#2A0E1D] group-hover:text-[#381124] transition-colors leading-snug">
            {offer.title}
          </h3>

          <p className="mt-2 text-sm text-[#5E4F55] leading-relaxed">
            {offer.description}
          </p>

          {/* Inclusions List */}
          <div className="mt-6 space-y-2.5">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#B38E5D]">
              Package Inclusions:
            </p>
            {offer.inclusions.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs text-[#42363B]">
                <div className="w-4 h-4 rounded-full bg-[#FAF3E8] flex items-center justify-center shrink-0 mt-0.5 border border-[#C8A97E]/40">
                  <Check className="w-2.5 h-2.5 text-[#B38E5D]" />
                </div>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Promo code & CTA */}
        <div className="mt-8 pt-6 border-t border-[#FAF3E8] space-y-4">
          <div className="flex items-center justify-between p-3 rounded-xl bg-[#FAF6F0] border border-dashed border-[#C8A97E]/60 text-xs">
            <div>
              <span className="text-[#7C6B73] block text-[10px] uppercase tracking-wider">
                Promo Code
              </span>
              <span className="font-mono font-bold text-[#381124] tracking-wider text-sm">
                {offer.promoCode}
              </span>
            </div>
            <button
              onClick={handleCopyCode}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white hover:bg-[#FAF3E8] text-[#381124] font-medium text-xs transition-colors border border-[#C8A97E]/30"
            >
              {copied ? (
                <>
                  <CheckCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-[#B38E5D]" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>

          <Link
            href={`/book?offer=${offer.id}`}
            className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-gradient-to-r from-[#381124] to-[#4A1530] text-white text-sm font-semibold hover:from-[#4A1530] hover:to-[#5D1D3D] transition-all shadow-md group/btn"
          >
            <Calendar className="w-4 h-4 text-[#DFC28D]" />
            <span>Claim & Book Package</span>
            <ArrowRight className="w-4 h-4 text-[#DFC28D] group-hover/btn:translate-x-1 transition-transform" />
          </Link>

          <p className="text-[11px] text-center text-[#7C6B73]">
            {offer.validUntil}
          </p>
        </div>
      </div>
    </div>
  );
}
