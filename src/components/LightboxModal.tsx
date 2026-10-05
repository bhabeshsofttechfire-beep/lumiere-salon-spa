"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { GalleryItem } from "@/data/gallery";

interface LightboxModalProps {
  item: GalleryItem | null;
  items: GalleryItem[];
  onClose: () => void;
  onNavigate: (item: GalleryItem) => void;
}

export default function LightboxModal({
  item,
  items,
  onClose,
  onNavigate,
}: LightboxModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!item) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") {
        const currentIndex = items.findIndex((i) => i.id === item.id);
        const prev = items[(currentIndex - 1 + items.length) % items.length];
        onNavigate(prev);
      }
      if (e.key === "ArrowRight") {
        const currentIndex = items.findIndex((i) => i.id === item.id);
        const next = items[(currentIndex + 1) % items.length];
        onNavigate(next);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    if (item) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [item, items, onClose, onNavigate]);

  if (!item) return null;

  const currentIndex = items.findIndex((i) => i.id === item.id);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-6"
        onClick={onClose}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-6 right-6 z-50 p-2.5 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Previous Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            const prev = items[(currentIndex - 1 + items.length) % items.length];
            onNavigate(prev);
          }}
          aria-label="Previous image"
          className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors hidden sm:block"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Next Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            const next = items[(currentIndex + 1) % items.length];
            onNavigate(next);
          }}
          aria-label="Next image"
          className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors hidden sm:block"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Modal Dialog Content */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={(e) => e.stopPropagation()}
          className="relative max-w-5xl w-full bg-[#1A0812] rounded-3xl overflow-hidden border border-[#C8A97E]/30 shadow-2xl flex flex-col max-h-[90vh]"
        >
          <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-black">
            <Image
              src={item.image}
              alt={item.title}
              fill
              sizes="(max-width: 1200px) 100vw, 1200px"
              className="object-contain"
              priority
            />
          </div>

          <div className="p-6 bg-gradient-to-t from-[#1A0812] to-[#2A0E1D] border-t border-[#C8A97E]/20 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="px-3 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-[#C8A97E]/20 text-[#DFC28D] border border-[#C8A97E]/30">
                  {item.category}
                </span>
                <span className="text-xs text-rose-200/60">
                  {currentIndex + 1} of {items.length}
                </span>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl text-white">
                {item.title}
              </h3>
              <p className="text-sm text-rose-100/75 mt-1 max-w-2xl">
                {item.caption}
              </p>
              {item.details && (
                <p className="text-xs text-[#DFC28D]/80 mt-1 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#DFC28D]" />
                  {item.details}
                </p>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
