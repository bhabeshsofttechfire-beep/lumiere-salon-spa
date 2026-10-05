"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote, ShieldCheck } from "lucide-react";
import { testimonialsData } from "@/data/testimonials";

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  const total = testimonialsData.length;

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Autoplay timer
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  const current = testimonialsData[currentIndex];

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 80 : -80,
      opacity: 0,
      scale: 0.98,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] as const },
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -80 : 80,
      opacity: 0,
      scale: 0.98,
      transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] as const },
    }),
  };

  return (
    <div
      className="relative max-w-4xl mx-auto"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative min-h-[380px] sm:min-h-[340px] flex items-center justify-center">
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={current.id}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            className="w-full bg-white rounded-3xl p-8 sm:p-12 border border-[#C8A97E]/30 shadow-xl relative overflow-hidden"
          >
            {/* Background luxury watermark */}
            <Quote className="absolute right-6 bottom-6 w-32 h-32 text-[#FAF3E8] pointer-events-none -rotate-12" />

            <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center md:items-start">
              {/* Client Avatar with gold frame */}
              <div className="shrink-0 relative">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-[#C8A97E] p-1 bg-white shadow-lg relative">
                  <div className="relative w-full h-full rounded-full overflow-hidden">
                    <Image
                      src={current.avatar}
                      alt={current.name}
                      fill
                      sizes="96px"
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="absolute -bottom-1 -right-1 bg-[#381124] text-[#E7CB9B] p-1.5 rounded-full border border-[#C8A97E] shadow-sm">
                  <ShieldCheck className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Review Content */}
              <div className="flex-1 text-center md:text-left">
                {/* Stars & Tag */}
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(current.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-[#DFC28D] text-[#DFC28D]"
                      />
                    ))}
                  </div>
                  <span className="text-xs px-3 py-1 rounded-full bg-[#FAF3E8] text-[#381124] font-medium border border-[#C8A97E]/30">
                    {current.service}
                  </span>
                </div>

                {/* Quote */}
                <p className="font-serif text-lg sm:text-xl md:text-2xl text-[#2A0E1D] leading-relaxed italic">
                  &ldquo;{current.quote}&rdquo;
                </p>

                {/* Client Metadata */}
                <div className="mt-6 pt-4 border-t border-[#FAF3E8] flex flex-col sm:flex-row items-center justify-between gap-2">
                  <div>
                    <h4 className="font-serif text-lg font-semibold text-[#2A0E1D]">
                      {current.name}
                    </h4>
                    <p className="text-xs text-[#7C6B73]">{current.role}</p>
                  </div>
                  <span className="text-xs text-[#7C6B73]">{current.date}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Controls */}
      <div className="mt-8 flex items-center justify-between px-4">
        {/* Dot Indicators */}
        <div className="flex items-center gap-2">
          {testimonialsData.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setDirection(idx > currentIndex ? 1 : -1);
                setCurrentIndex(idx);
              }}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2 transition-all rounded-full ${
                idx === currentIndex
                  ? "w-8 bg-[#381124]"
                  : "w-2 bg-[#C8A97E]/40 hover:bg-[#C8A97E]"
              }`}
            />
          ))}
        </div>

        {/* Prev / Next Arrows */}
        <div className="flex items-center gap-3">
          <button
            onClick={prevSlide}
            aria-label="Previous testimonial"
            className="w-10 h-10 rounded-full bg-white border border-[#C8A97E]/40 hover:bg-[#381124] hover:text-white text-[#2A0E1D] flex items-center justify-center transition-colors shadow-sm focus:outline-none"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            aria-label="Next testimonial"
            className="w-10 h-10 rounded-full bg-white border border-[#C8A97E]/40 hover:bg-[#381124] hover:text-white text-[#2A0E1D] flex items-center justify-center transition-colors shadow-sm focus:outline-none"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
