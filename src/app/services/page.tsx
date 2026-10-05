"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  Search,
  Scissors,
} from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import { servicesData, SERVICE_CATEGORIES, ServiceCategory } from "@/data/services";

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategory>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredServices = useMemo(() => {
    return servicesData.filter((service) => {
      const matchesCategory =
        selectedCategory === "All" || service.category === selectedCategory;
      const matchesSearch =
        service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="bg-[#FAF7F2] text-[#2A0E1D] min-h-screen">
      {/* 1. Header Banner */}
      <section className="relative py-24 bg-[#1A0812] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=2000&q=85"
            alt="Services at Lumière"
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
              Curated Treatment Menu
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-serif font-normal text-white">
            Haute Coiffure &{" "}
            <span className="italic font-serif text-[#DFC28D]">
              Sensory Wellness
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-rose-100/80 leading-relaxed max-w-2xl mx-auto">
            Explore our comprehensive suite of couture hair design, cellular dermal
            facials, restorative hydrotherapies, and bridal glam.
          </p>
        </div>
      </section>

      {/* 2. Filter & Search Controls */}
      <section className="sticky top-20 z-30 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#C8A97E]/20 py-4 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search rituals (e.g. balayage, gold, massage)..."
                className="w-full pl-10 pr-4 py-2.5 rounded-full bg-white border border-[#C8A97E]/30 text-xs text-[#2A0E1D] placeholder-[#7C6B73] focus:outline-none focus:border-[#381124] shadow-sm transition-colors"
              />
              <Search className="w-4 h-4 text-[#7C6B73] absolute left-3.5 top-1/2 -translate-y-1/2" />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-[#7C6B73] hover:text-[#2A0E1D]"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Total Results Count */}
            <div className="text-xs text-[#5E4F55] hidden md:block">
              Showing <span className="font-semibold text-[#381124]">{filteredServices.length}</span> curated experiences
            </div>
          </div>

          {/* Category Tabs (Scrollable on Mobile) */}
          <div className="mt-4 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none no-scrollbar">
            {SERVICE_CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all flex items-center gap-1.5 shrink-0 ${
                    isSelected
                      ? "bg-[#381124] text-white shadow-md border border-[#C8A97E]"
                      : "bg-white text-[#5E4F55] border border-[#C8A97E]/20 hover:bg-[#FAF3E8] hover:text-[#2A0E1D]"
                  }`}
                >
                  {isSelected && <Sparkles className="w-3 h-3 text-[#DFC28D]" />}
                  <span>{cat}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Services Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredServices.length === 0 ? (
          <div className="py-20 text-center bg-white rounded-3xl border border-[#C8A97E]/30 p-8 max-w-lg mx-auto">
            <Scissors className="w-12 h-12 text-[#C8A97E] mx-auto mb-4" />
            <h3 className="font-serif text-2xl text-[#2A0E1D]">No Rituals Found</h3>
            <p className="text-sm text-[#5E4F55] mt-2 mb-6">
              We couldn&apos;t find any service matching &ldquo;{searchQuery}&rdquo; in {selectedCategory}.
            </p>
            <button
              onClick={() => {
                setSelectedCategory("All");
                setSearchQuery("");
              }}
              className="px-6 py-2.5 rounded-full bg-[#381124] text-white text-xs font-semibold hover:bg-[#4A1530]"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {filteredServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        )}
      </section>

      {/* 4. Custom Package Inquiry Banner */}
      <section className="py-16 bg-[#FAF3E8] border-t border-[#C8A97E]/30">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#B38E5D]">
            Need Custom Tailoring?
          </span>
          <h2 className="text-3xl font-serif text-[#2A0E1D] mt-2 mb-4">
            Curate a Personalized Beauty & Wellness Day
          </h2>
          <p className="text-sm text-[#5E4F55] max-w-xl mx-auto leading-relaxed mb-8">
            Looking for a half-day private retreat, customized bridal trial, or corporate
            wellness gifting? Speak with our head concierge to arrange a private suite.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-3.5 rounded-full bg-[#381124] text-white text-sm font-semibold hover:bg-[#4A1530] transition-colors shadow-md"
            >
              Contact Head Concierge
            </Link>
            <Link
              href="/offers"
              className="px-8 py-3.5 rounded-full bg-white border border-[#C8A97E] text-[#381124] text-sm font-semibold hover:bg-[#FAF7F2] transition-colors shadow-sm"
            >
              View Pre-Curated Packages
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
