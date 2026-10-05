import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Clock,
  Star,
  CheckCircle2,
  Calendar,
  ArrowRight,
  Sparkles,
  ChevronRight,
  ShieldCheck,
  PlusCircle,
} from "lucide-react";
import { servicesData } from "@/data/services";
import ServiceCard from "@/components/ServiceCard";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);
  if (!service) return { title: "Service Not Found" };

  return {
    title: `${service.name} | Lumière Salon & Spa`,
    description: service.shortDescription,
    openGraph: {
      title: `${service.name} | Lumière Salon & Spa`,
      description: service.shortDescription,
      images: [{ url: service.image }],
    },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  // Recommended treatments (same category or others)
  const relatedServices = servicesData
    .filter((s) => s.id !== service.id)
    .slice(0, 3);

  return (
    <div className="bg-[#FAF7F2] text-[#2A0E1D] min-h-screen pb-24">
      {/* Breadcrumbs */}
      <div className="bg-white border-b border-[#C8A97E]/20 py-3.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-xs text-[#7C6B73]">
          <Link href="/" className="hover:text-[#381124] transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#C8A97E]" />
          <Link href="/services" className="hover:text-[#381124] transition-colors">
            Services
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#C8A97E]" />
          <span className="text-[#381124] font-medium truncate max-w-xs sm:max-w-none">
            {service.name}
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column (8 Cols): Main Service Information */}
          <div className="lg:col-span-8 space-y-10">
            {/* Main Featured Image */}
            <div className="relative aspect-[16/10] w-full rounded-3xl overflow-hidden border border-[#C8A97E]/30 shadow-xl bg-[#FAF3E8]">
              <Image
                src={service.image}
                alt={service.name}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 800px"
                className="object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/95 text-[#2A0E1D] shadow-md border border-[#C8A97E]/40">
                  {service.category}
                </span>
              </div>
            </div>

            {/* Title, Category & Ratings */}
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <div className="flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-[#381124] text-[#E7CB9B]">
                  <Star className="w-3.5 h-3.5 fill-[#DFC28D] text-[#DFC28D]" />
                  <span>{service.rating.toFixed(1)}</span>
                </div>
                <span className="text-xs text-[#7C6B73]">
                  ({service.reviewCount} verified client reviews)
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-serif text-[#2A0E1D] leading-tight">
                {service.name}
              </h1>

              <p className="mt-4 text-base sm:text-lg text-[#5E4F55] leading-relaxed">
                {service.fullDescription}
              </p>
            </div>

            {/* Key Benefits */}
            <div className="bg-white rounded-3xl p-8 border border-[#C8A97E]/30 shadow-md">
              <h3 className="font-serif text-2xl text-[#2A0E1D] mb-6 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#B38E5D]" />
                Key Benefits of this Treatment
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#FAF3E8] border border-[#C8A97E]/40 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#B38E5D]" />
                    </div>
                    <span className="text-sm text-[#42363B] leading-snug">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Step-by-Step Treatment Process */}
            <div className="bg-white rounded-3xl p-8 border border-[#C8A97E]/30 shadow-md">
              <h3 className="font-serif text-2xl text-[#2A0E1D] mb-6">
                The Treatment Journey
              </h3>

              <div className="space-y-6">
                {service.steps.map((step, idx) => (
                  <div key={idx} className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-full bg-[#381124] text-[#E7CB9B] flex items-center justify-center text-xs font-serif font-bold shrink-0 mt-0.5 shadow-sm">
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="font-serif text-lg font-semibold text-[#2A0E1D]">
                        {step.title}
                      </h4>
                      <p className="text-sm text-[#5E4F55] mt-1 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recommended Add-ons */}
            {service.recommendedAddons && (
              <div className="bg-[#FAF3E8]/70 rounded-3xl p-6 border border-[#C8A97E]/40">
                <h4 className="text-xs uppercase tracking-widest font-semibold text-[#B38E5D] mb-3">
                  Recommended Add-on Pairings
                </h4>
                <div className="flex flex-wrap gap-2.5">
                  {service.recommendedAddons.map((addon, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white text-xs text-[#381124] border border-[#C8A97E]/30 font-medium shadow-sm"
                    >
                      <PlusCircle className="w-3.5 h-3.5 text-[#B38E5D]" />
                      {addon}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column (4 Cols): Sticky Booking Widget */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 bg-white rounded-3xl p-6 sm:p-8 border border-[#C8A97E]/40 shadow-xl space-y-6">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#7C6B73]">
                  Treatment Investment
                </span>
                <div className="flex items-baseline gap-3 mt-1">
                  <span className="text-4xl font-serif font-bold text-[#381124]">
                    ${service.price}
                  </span>
                  {service.originalPrice && (
                    <span className="text-lg text-[#7C6B73] line-through">
                      ${service.originalPrice}
                    </span>
                  )}
                </div>
              </div>

              <div className="py-4 border-y border-[#FAF3E8] space-y-3 text-sm text-[#5E4F55]">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#C8A97E]" />
                    <span>Duration:</span>
                  </span>
                  <span className="font-semibold text-[#2A0E1D]">
                    {service.duration}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Category:</span>
                  <span className="font-semibold text-[#2A0E1D]">
                    {service.category}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Beverage Service:</span>
                  <span className="font-semibold text-[#2A0E1D]">
                    Included
                  </span>
                </div>
              </div>

              <Link
                href={`/book?service=${service.slug}`}
                className="w-full flex items-center justify-center gap-2 py-4 rounded-full bg-gradient-to-r from-[#381124] to-[#4A1530] text-white font-semibold text-sm hover:from-[#4A1530] hover:to-[#5D1D3D] transition-all shadow-lg group"
              >
                <Calendar className="w-4 h-4 text-[#DFC28D]" />
                <span>Reserve Appointment</span>
                <ArrowRight className="w-4 h-4 text-[#DFC28D] group-hover:translate-x-1 transition-transform" />
              </Link>

              <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#C8A97E]/30 space-y-2 text-xs text-[#5E4F55]">
                <div className="flex items-center gap-2 text-[#381124] font-medium">
                  <ShieldCheck className="w-4 h-4 text-[#B38E5D]" />
                  <span>100% Satisfaction Guarantee</span>
                </div>
                <p className="text-[11px] leading-relaxed text-[#7C6B73]">
                  All bookings include private changing suite, complimentary scalp diagnostics, and valet parking.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Recommended Rituals Section */}
        <div className="mt-24 pt-12 border-t border-[#C8A97E]/20">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-serif text-2xl sm:text-3xl text-[#2A0E1D]">
              You May Also Appreciate
            </h3>
            <Link
              href="/services"
              className="text-xs font-semibold uppercase tracking-wider text-[#381124] hover:text-[#C8A97E] transition-colors"
            >
              View Full Menu →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedServices.map((rel) => (
              <ServiceCard key={rel.id} service={rel} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
