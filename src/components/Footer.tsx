"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Sparkles,
  Phone,
  Mail,
  MapPin,
  Clock,
  Check,
  ArrowRight,
} from "lucide-react";
import { InstagramIcon, FacebookIcon } from "@/components/SocialIcons";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() && email.includes("@")) {
      setIsSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="bg-[#2A0E1D] text-[#FAF7F2] pt-16 pb-10 border-t border-[#381124]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Banner */}
        <div className="bg-gradient-to-r from-[#381124] to-[#4A1530] rounded-2xl p-8 md:p-10 mb-16 border border-[#C8A97E]/30 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-[#C8A97E]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#E7CB9B] mb-2 font-medium">
                <Sparkles className="w-3.5 h-3.5" />
                Lumière Privileged Society
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif text-white mb-2">
                Join our Inner Circle for Exclusive Privileges
              </h3>
              <p className="text-sm text-rose-100/80 leading-relaxed max-w-xl">
                Receive confidential private invitations to seasonal collections,
                priority booking windows, and a \$25 welcome gift towards your first signature ritual.
              </p>
            </div>

            <div className="lg:col-span-5">
              {isSubscribed ? (
                <div className="flex items-center gap-2 p-4 rounded-xl bg-[#2A0E1D]/60 border border-[#C8A97E]/40 text-[#E7CB9B]">
                  <Check className="w-5 h-5 text-[#C8A97E]" />
                  <span className="text-sm font-medium">
                    Welcome to the Lumière Privileged Circle. Please check your inbox.
                  </span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2.5">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="Enter your email address"
                    className="flex-1 px-4 py-3 rounded-full bg-[#FAF7F2]/10 border border-[#C8A97E]/40 text-white placeholder-rose-200/50 text-sm focus:outline-none focus:border-[#C8A97E] transition-colors"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 rounded-full bg-gradient-to-r from-[#DFC28D] to-[#C8A97E] text-[#2A0E1D] font-semibold text-sm hover:from-[#E7CB9B] hover:to-[#DFC28D] transition-all flex items-center justify-center gap-2 shadow-lg"
                  >
                    <span>Subscribe</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Main 4-column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#381124]">
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#381124] to-[#4A1530] flex items-center justify-center border border-[#C8A97E]">
                <span className="font-serif text-lg font-bold text-[#E7CB9B]">L</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold tracking-wider text-white">
                  LUMIÈRE
                </span>
                <span className="text-[10px] tracking-[0.3em] uppercase text-[#C8A97E]">
                  Salon & Spa
                </span>
              </div>
            </Link>
            <p className="text-sm text-rose-100/75 leading-relaxed max-w-sm">
              An oasis of haute coiffure, transformative aesthetic dermatology, and
              tranquil holistic spa wellness. Designed to awaken your inner radiance.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-[#381124] hover:bg-[#C8A97E] text-rose-200 hover:text-[#2A0E1D] flex items-center justify-center transition-all border border-[#C8A97E]/30"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-[#381124] hover:bg-[#C8A97E] text-rose-200 hover:text-[#2A0E1D] flex items-center justify-center transition-all border border-[#C8A97E]/30"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Pinterest"
                className="w-9 h-9 rounded-full bg-[#381124] hover:bg-[#C8A97E] text-rose-200 hover:text-[#2A0E1D] flex items-center justify-center transition-all border border-[#C8A97E]/30"
              >
                <Sparkles className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[#E7CB9B]">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm text-rose-100/80">
              <li>
                <Link href="/" className="hover:text-[#C8A97E] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#C8A97E] transition-colors">
                  About Our House
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#C8A97E] transition-colors">
                  Service Menu
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-[#C8A97E] transition-colors">
                  Curated Gallery
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-[#C8A97E] transition-colors">
                  Master Artisans
                </Link>
              </li>
              <li>
                <Link href="/offers" className="hover:text-[#C8A97E] transition-colors">
                  Exclusive Packages
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="hover:text-[#C8A97E] transition-colors">
                  Client Reviews
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Popular Services */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[#E7CB9B]">
              Signature Rituals
            </h4>
            <ul className="space-y-2.5 text-sm text-rose-100/80">
              <li>
                <Link href="/services/french-balayage-gloss" className="hover:text-[#C8A97E] transition-colors">
                  French Balayage & Gloss
                </Link>
              </li>
              <li>
                <Link href="/services/24k-gold-cellular-facial" className="hover:text-[#C8A97E] transition-colors">
                  24K Gold Cellular Facial
                </Link>
              </li>
              <li>
                <Link href="/services/royal-bridal-couture-makeover" className="hover:text-[#C8A97E] transition-colors">
                  Royal Bridal Couture
                </Link>
              </li>
              <li>
                <Link href="/services/lumiere-sensory-hot-stone-massage" className="hover:text-[#C8A97E] transition-colors">
                  Sensory Hot Stone Massage
                </Link>
              </li>
              <li>
                <Link href="/services/royal-caviar-hair-spa" className="hover:text-[#C8A97E] transition-colors">
                  Royal Caviar Hair Spa
                </Link>
              </li>
              <li>
                <Link href="/services/rose-champagne-spa-manicure" className="hover:text-[#C8A97E] transition-colors">
                  Rose Champagne Manicure
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Hours */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[#E7CB9B]">
              Salon & Sanctuary
            </h4>
            <div className="space-y-3 text-sm text-rose-100/80">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C8A97E] shrink-0 mt-0.5" />
                <span>742 Evergreen Terrace, Beverly Hills, CA 90210</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C8A97E] shrink-0" />
                <a href="tel:+15557892345" className="hover:text-[#C8A97E]">
                  +1 (555) 789-2345
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C8A97E] shrink-0" />
                <a href="mailto:concierge@lumieresalon.com" className="hover:text-[#C8A97E]">
                  concierge@lumieresalon.com
                </a>
              </div>
              <div className="pt-2 border-t border-[#381124]">
                <div className="flex items-start gap-2.5 text-xs text-rose-200/70">
                  <Clock className="w-4 h-4 text-[#C8A97E] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-white">Opening Hours</p>
                    <p>Mon – Sat: 9:00 AM – 8:00 PM</p>
                    <p>Sun: 10:00 AM – 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-rose-200/60 gap-4">
          <p>© {new Date().getFullYear()} Lumière Salon & Spa. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-[#C8A97E] transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="/terms" className="hover:text-[#C8A97E] transition-colors">
              Terms & Conditions
            </Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-[#C8A97E] transition-colors">
              Concierge
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
