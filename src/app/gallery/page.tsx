"use client";

import { useState } from "react";
import Image from "next/image";
import { Sparkles, ZoomIn } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import LightboxModal from "@/components/LightboxModal";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import {
  galleryItemsData,
  GALLERY_CATEGORIES,
  GalleryCategory,
  GalleryItem,
} from "@/data/gallery";

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] =
    useState<GalleryCategory>("All");
  const [activeLightboxItem, setActiveLightboxItem] =
    useState<GalleryItem | null>(null);

  const filteredItems = galleryItemsData.filter(
    (item) =>
      selectedCategory === "All" || item.category === selectedCategory
  );

  return (
    <div className="bg-[#FAF7F2] text-[#2A0E1D] min-h-screen">
      {/* 1. Header Banner */}
      <section className="relative py-24 bg-[#1A0812] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=2000&q=85"
            alt="Lumière Gallery"
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
              Aesthetic Portfolio
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-serif font-normal text-white">
            Curated Visual{" "}
            <span className="italic font-serif text-[#DFC28D]">Anthology</span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-rose-100/80 leading-relaxed max-w-2xl mx-auto">
            Glimpses into our private salon suites, transformative color changes,
            and the tranquil atmosphere where beauty takes form.
          </p>
        </div>
      </section>

      {/* 2. Interactive Before / After Spotlight */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Interactive Spotlight"
          title="Before & After"
          highlightedText="Metamorphosis"
          description="Slide across to witness true transformation crafted by our master colorists and aesthetic specialists."
        />

        <div className="mt-12">
          <BeforeAfterSlider
            beforeImage="https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1200&q=85"
            afterImage="https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1200&q=85"
            title="French Balayage & Architectural Cut"
            subtitle="Client received an organic scalp detox, multidimensional hand-painted highlights, and a mirror gloss glaze."
          />
        </div>
      </section>

      {/* 3. Category Filter Tabs */}
      <section className="py-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-2 flex-wrap">
          {GALLERY_CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                  isSelected
                    ? "bg-[#381124] text-white shadow-md border border-[#C8A97E]"
                    : "bg-white text-[#5E4F55] border border-[#C8A97E]/30 hover:bg-[#FAF3E8]"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </section>

      {/* 4. Masonry / Grid Gallery */}
      <section className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveLightboxItem(item)}
              className="group cursor-pointer bg-white rounded-3xl overflow-hidden border border-[#C8A97E]/30 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#FAF3E8]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-[#2A0E1D]/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/40 text-white flex items-center justify-center scale-90 group-hover:scale-100 transition-transform">
                    <ZoomIn className="w-5 h-5" />
                  </div>
                </div>

                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-white/95 text-[#2A0E1D] shadow-sm">
                    {item.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-serif text-xl font-medium text-[#2A0E1D] group-hover:text-[#381124] transition-colors">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs text-[#5E4F55] leading-relaxed line-clamp-2">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      <LightboxModal
        item={activeLightboxItem}
        items={filteredItems}
        onClose={() => setActiveLightboxItem(null)}
        onNavigate={(item) => setActiveLightboxItem(item)}
      />
    </div>
  );
}
