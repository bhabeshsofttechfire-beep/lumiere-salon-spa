"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Phone,
  Clock,
  Menu,
  X,
  Calendar,
  ChevronRight,
} from "lucide-react";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Gallery", href: "/gallery" },
  { name: "Team", href: "/team" },
  { name: "Offers", href: "/offers" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 25) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  return (
    <>
      {/* Top Bar for announcement & quick contact */}
      <div className="bg-[#2A0E1D] text-[#E7CB9B] text-xs py-2 px-4 border-b border-[#381124] hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-xs text-rose-100/90 font-medium tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#C8A97E]" />
              Complimentary Champagne & Scalp Analysis with every reservation
            </span>
          </div>
          <div className="flex items-center gap-6 text-xs text-rose-100/80">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#C8A97E]" />
              Mon - Sat: 9:00 AM – 8:00 PM | Sun: 10:00 AM – 6:00 PM
            </span>
            <span className="text-[#C8A97E]/40">•</span>
            <a
              href="tel:+15557892345"
              className="flex items-center gap-1.5 hover:text-[#C8A97E] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#C8A97E]" />
              +1 (555) 789-2345
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#FAF7F2]/95 backdrop-blur-md shadow-md py-3.5 border-b border-[#C8A97E]/20"
            : "bg-[#FAF7F2] py-5 border-b border-[#2A0E1D]/5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <Link
              href="/"
              className="group flex items-center gap-3 focus:outline-none"
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#381124] to-[#2A0E1D] flex items-center justify-center border border-[#C8A97E]/50 group-hover:border-[#C8A97E] transition-all shadow-sm">
                <span className="font-serif text-lg font-bold text-[#E7CB9B] group-hover:scale-105 transition-transform">
                  L
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-semibold tracking-wider text-[#2A0E1D] group-hover:text-[#381124] transition-colors leading-none">
                  LUMIÈRE
                </span>
                <span className="text-[10px] tracking-[0.3em] uppercase text-[#B38E5D] font-medium mt-1">
                  Salon & Spa
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                      isActive
                        ? "text-[#381124] font-semibold"
                        : "text-[#5E4F55] hover:text-[#2A0E1D]"
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <motion.div
                        layoutId="navIndicator"
                        className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#C8A97E] rounded-full"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-4">
              <Link
                href="/book"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#381124] to-[#2A0E1D] text-[#FAF7F2] text-sm font-medium hover:from-[#4A1530] hover:to-[#381124] transition-all shadow-sm hover:shadow-md border border-[#C8A97E]/40 hover:border-[#C8A97E] group"
              >
                <Calendar className="w-4 h-4 text-[#C8A97E] group-hover:rotate-12 transition-transform" />
                <span>Book Appointment</span>
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-3 lg:hidden">
              <Link
                href="/book"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#381124] text-[#FAF7F2] text-xs font-medium border border-[#C8A97E]/40"
              >
                <Calendar className="w-3.5 h-3.5 text-[#C8A97E]" />
                <span>Book</span>
              </Link>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle navigation menu"
                className="p-2 rounded-lg text-[#2A0E1D] hover:bg-[#FAF3E8] focus:outline-none"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6 text-[#2A0E1D]" />
                ) : (
                  <Menu className="w-6 h-6 text-[#2A0E1D]" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 lg:hidden"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-[#FAF7F2] z-50 shadow-2xl flex flex-col justify-between overflow-y-auto border-l border-[#C8A97E]/30 lg:hidden"
            >
              <div className="p-6">
                <div className="flex items-center justify-between pb-6 border-b border-[#2A0E1D]/10">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-full bg-[#381124] flex items-center justify-center border border-[#C8A97E]">
                      <span className="font-serif text-base font-bold text-[#E7CB9B]">
                        L
                      </span>
                    </div>
                    <div>
                      <div className="font-serif text-lg font-semibold text-[#2A0E1D]">
                        LUMIÈRE
                      </div>
                      <div className="text-[9px] tracking-[0.25em] uppercase text-[#B38E5D]">
                        Salon & Spa
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    aria-label="Close menu"
                    className="p-2 text-[#5E4F55] hover:text-[#2A0E1D]"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Mobile Links */}
                <div className="mt-6 flex flex-col space-y-1">
                  {NAV_LINKS.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                      <Link
                        key={link.name}
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`flex items-center justify-between px-3.5 py-3 rounded-lg text-base font-medium transition-colors ${
                          isActive
                            ? "bg-[#381124] text-[#FAF7F2]"
                            : "text-[#2A0E1D] hover:bg-[#FAF3E8]"
                        }`}
                      >
                        <span>{link.name}</span>
                        <ChevronRight
                          className={`w-4 h-4 ${
                            isActive ? "text-[#C8A97E]" : "text-[#7C6B73]"
                          }`}
                        />
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Bottom Info & CTAs */}
              <div className="p-6 bg-[#FAF3E8]/70 border-t border-[#C8A97E]/30 space-y-4">
                <Link
                  href="/book"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-gradient-to-r from-[#381124] to-[#2A0E1D] text-[#FAF7F2] font-medium text-sm border border-[#C8A97E] shadow-md"
                >
                  <Calendar className="w-4 h-4 text-[#C8A97E]" />
                  <span>Reserve Appointment</span>
                </Link>

                <div className="text-xs text-[#5E4F55] space-y-2 text-center pt-2">
                  <p className="flex items-center justify-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-[#B38E5D]" />
                    <a href="tel:+15557892345" className="font-medium hover:underline">
                      +1 (555) 789-2345
                    </a>
                  </p>
                  <p>742 Evergreen Terrace, Beverly Hills, CA</p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
