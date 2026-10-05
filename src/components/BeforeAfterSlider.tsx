"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { MoveHorizontal, Sparkles } from "lucide-react";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  title?: string;
  subtitle?: string;
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = "Before",
  afterLabel = "After",
  title = "Signature Hair & Color Metamorphosis",
  subtitle = "Interactive transformation slider. Drag across to inspect the hair cuticle repair and gloss.",
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  }, [isDragging, handleMove]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  }, [isDragging, handleMove]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchmove", handleTouchMove);
      window.addEventListener("touchend", handleMouseUp);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp, handleTouchMove]);

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#C8A97E]/30 shadow-xl max-w-4xl mx-auto">
      <div className="mb-6 text-center">
        <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-[#B38E5D] font-semibold mb-1">
          <Sparkles className="w-3.5 h-3.5" />
          Real Client Transformation
        </div>
        <h3 className="text-2xl sm:text-3xl font-serif text-[#2A0E1D]">{title}</h3>
        <p className="text-sm text-[#5E4F55] mt-1">{subtitle}</p>
      </div>

      <div
        ref={containerRef}
        className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-2xl overflow-hidden select-none cursor-ew-resize border border-[#C8A97E]/40 shadow-inner"
        onMouseDown={() => setIsDragging(true)}
        onTouchStart={() => setIsDragging(true)}
      >
        {/* AFTER Image (Full width background) */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={afterImage}
            alt="After treatment"
            fill
            sizes="(max-width: 1024px) 100vw, 800px"
            className="object-cover"
            priority
          />
          <div className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full bg-[#381124]/90 text-[#E7CB9B] text-xs font-semibold uppercase tracking-wider backdrop-blur-sm border border-[#C8A97E]/50 shadow-md">
            {afterLabel}
          </div>
        </div>

        {/* BEFORE Image (Clipped from left using clip-path) */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <Image
            src={beforeImage}
            alt="Before treatment"
            fill
            sizes="(max-width: 1024px) 100vw, 800px"
            className="object-cover"
            priority
          />
          <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-black/80 text-white text-xs font-semibold uppercase tracking-wider backdrop-blur-sm border border-white/20 shadow-md">
            {beforeLabel}
          </div>
        </div>

        {/* Vertical Divider Line and Handle */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] z-20 pointer-events-none"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#381124] text-[#E7CB9B] border-2 border-white shadow-xl flex items-center justify-center pointer-events-auto cursor-ew-resize">
            <MoveHorizontal className="w-5 h-5 text-[#DFC28D]" />
          </div>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between text-xs text-[#7C6B73]">
        <span className="font-medium">← Drag left to reveal &ldquo;After&rdquo;</span>
        <span className="font-medium">Drag right to reveal &ldquo;Before&rdquo; →</span>
      </div>
    </div>
  );
}
