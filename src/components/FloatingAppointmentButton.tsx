"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Calendar, Phone } from "lucide-react";

export default function FloatingAppointmentButton() {
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled down a bit
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Don't show on the booking page itself
  if (pathname === "/book") return null;

  return (
    <div
      className={`fixed bottom-6 right-6 z-40 flex items-center gap-2.5 transition-all duration-300 ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-8 pointer-events-none"
      }`}
    >
      {/* Quick Phone Call Button */}
      <a
        href="tel:+15557892345"
        aria-label="Call salon concierge"
        className="w-12 h-12 rounded-full bg-white text-[#381124] border border-[#C8A97E] shadow-xl flex items-center justify-center hover:bg-[#FAF3E8] hover:scale-105 transition-all"
      >
        <Phone className="w-5 h-5 text-[#B38E5D]" />
      </a>

      {/* Floating Book Appointment Button */}
      <Link
        href="/book"
        className="flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-[#381124] to-[#2A0E1D] text-white text-sm font-medium border border-[#C8A97E] shadow-2xl hover:scale-105 hover:from-[#4A1530] hover:to-[#381124] transition-all group"
      >
        <Calendar className="w-4 h-4 text-[#DFC28D] group-hover:rotate-12 transition-transform" />
        <span className="font-medium tracking-wide">Book Appointment</span>
      </Link>
    </div>
  );
}
