"use client";

import Image from "next/image";
import Link from "next/link";
import { Clock, Star, ArrowRight, Calendar } from "lucide-react";
import { Service } from "@/data/services";

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-[#C8A97E]/20 shadow-sm hover:shadow-xl hover:border-[#C8A97E]/60 transition-all duration-300 flex flex-col h-full">
      {/* Image Container with Zoom */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#FAF3E8]">
        <Image
          src={service.image}
          alt={service.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

        {/* Category Badge */}
        <div className="absolute top-3.5 left-3.5">
          <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/90 backdrop-blur-md text-[#2A0E1D] border border-[#C8A97E]/30 shadow-sm">
            {service.category}
          </span>
        </div>

        {/* Rating */}
        <div className="absolute top-3.5 right-3.5 flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-[#2A0E1D]/80 backdrop-blur-md text-[#E7CB9B] border border-[#C8A97E]/40 shadow-sm">
          <Star className="w-3 h-3 fill-[#DFC28D] text-[#DFC28D]" />
          <span>{service.rating.toFixed(1)}</span>
        </div>

        {/* Duration badge at bottom of image */}
        <div className="absolute bottom-3.5 left-3.5 flex items-center gap-1.5 text-xs text-white/95 font-medium drop-shadow-md">
          <Clock className="w-3.5 h-3.5 text-[#DFC28D]" />
          <span>{service.duration}</span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6 flex flex-col flex-1 justify-between">
        <div>
          <h3 className="font-serif text-xl font-medium text-[#2A0E1D] group-hover:text-[#381124] transition-colors line-clamp-1">
            <Link href={`/services/${service.slug}`} className="hover:underline">
              {service.name}
            </Link>
          </h3>

          <p className="mt-2 text-sm text-[#5E4F55] line-clamp-2 leading-relaxed">
            {service.shortDescription}
          </p>
        </div>

        {/* Pricing and Action Links */}
        <div className="mt-6 pt-4 border-t border-[#FAF3E8] flex items-center justify-between">
          <div>
            <span className="text-xs text-[#7C6B73] uppercase tracking-wider block">
              Investment
            </span>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-serif font-bold text-[#381124]">
                ${service.price}
              </span>
              {service.originalPrice && (
                <span className="text-sm text-[#7C6B73] line-through">
                  ${service.originalPrice}
                </span>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Link
              href={`/services/${service.slug}`}
              className="p-2.5 rounded-full border border-[#C8A97E]/40 text-[#5E4F55] hover:text-[#2A0E1D] hover:bg-[#FAF3E8] transition-colors"
              title="View Service Details"
              aria-label={`View details for ${service.name}`}
            >
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href={`/book?service=${service.slug}`}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#381124] text-white text-xs font-semibold hover:bg-[#4A1530] transition-colors shadow-sm"
            >
              <Calendar className="w-3.5 h-3.5 text-[#DFC28D]" />
              <span>Book</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
