"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Sparkles,
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  ChevronDown,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { faqsData } from "@/data/faqs";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "General Inquiry",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setIsSubmitted(true);
    }
  };

  return (
    <div className="bg-[#FAF7F2] text-[#2A0E1D] min-h-screen">
      {/* 1. Header Banner */}
      <section className="relative py-24 bg-[#1A0812] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=2000&q=85"
            alt="Lumière Salon lounge"
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
              Concierge & Location
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-serif font-normal text-white">
            Connect With Our{" "}
            <span className="italic font-serif text-[#DFC28D]">Concierge</span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-rose-100/80 leading-relaxed max-w-2xl mx-auto">
            Whether inquiring about bespoke bridal parties, private salon buyouts, or
            directions to our Beverly Hills sanctuary, our doors are always open.
          </p>
        </div>
      </section>

      {/* 2. Contact Details & Form Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column (5 Cols): Salon Details */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-[#B38E5D] font-semibold">
                Visit Lumière
              </span>
              <h2 className="text-3xl font-serif text-[#2A0E1D] mt-1">
                An Oasis in Beverly Hills
              </h2>
              <p className="text-sm text-[#5E4F55] mt-2 leading-relaxed">
                Conveniently located with dedicated private valet parking on arrival.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-[#C8A97E]/30 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-[#FAF3E8] border border-[#C8A97E]/40 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-[#381124]" />
                </div>
                <div>
                  <h4 className="font-serif font-semibold text-base text-[#2A0E1D]">
                    Sanctuary Address
                  </h4>
                  <p className="text-sm text-[#5E4F55] mt-0.5">
                    742 Evergreen Terrace, Suite 400
                  </p>
                  <p className="text-sm text-[#5E4F55]">Beverly Hills, CA 90210</p>
                  <span className="inline-block mt-2 text-xs text-[#B38E5D] font-medium">
                    Complimentary Valet Parking Available
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-[#C8A97E]/30 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-[#FAF3E8] border border-[#C8A97E]/40 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-[#381124]" />
                </div>
                <div>
                  <h4 className="font-serif font-semibold text-base text-[#2A0E1D]">
                    Direct Telephone
                  </h4>
                  <a
                    href="tel:+15557892345"
                    className="text-sm text-[#381124] font-medium hover:underline block mt-0.5"
                  >
                    +1 (555) 789-2345
                  </a>
                  <p className="text-xs text-[#7C6B73] mt-0.5">
                    Concierge available 7 days a week
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-[#C8A97E]/30 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-[#FAF3E8] border border-[#C8A97E]/40 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-[#381124]" />
                </div>
                <div>
                  <h4 className="font-serif font-semibold text-base text-[#2A0E1D]">
                    Electronic Concierge
                  </h4>
                  <a
                    href="mailto:concierge@lumieresalon.com"
                    className="text-sm text-[#381124] font-medium hover:underline block mt-0.5"
                  >
                    concierge@lumieresalon.com
                  </a>
                  <p className="text-xs text-[#7C6B73] mt-0.5">
                    Responses delivered within 2 hours
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-[#C8A97E]/30 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-[#FAF3E8] border border-[#C8A97E]/40 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-[#381124]" />
                </div>
                <div className="w-full">
                  <h4 className="font-serif font-semibold text-base text-[#2A0E1D]">
                    Operating Hours
                  </h4>
                  <div className="mt-2 space-y-1 text-xs text-[#5E4F55]">
                    <div className="flex justify-between">
                      <span>Monday – Friday:</span>
                      <span className="font-medium text-[#2A0E1D]">9:00 AM – 8:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday:</span>
                      <span className="font-medium text-[#2A0E1D]">9:00 AM – 7:30 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday:</span>
                      <span className="font-medium text-[#2A0E1D]">10:00 AM – 6:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (7 Cols): Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#C8A97E]/40 shadow-xl">
              {isSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#FAF3E8] border-2 border-[#C8A97E] flex items-center justify-center mx-auto text-[#381124]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-serif text-[#2A0E1D]">
                    Message Transmitted
                  </h3>
                  <p className="text-sm text-[#5E4F55] max-w-md mx-auto">
                    Thank you, {formData.name}. Our managing concierge will contact you
                    promptly via email or phone.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        phone: "",
                        subject: "General Inquiry",
                        message: "",
                      });
                    }}
                    className="mt-4 px-6 py-2.5 rounded-full bg-[#381124] text-white text-xs font-semibold"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <h3 className="font-serif text-2xl text-[#2A0E1D]">
                      Inquire with Concierge
                    </h3>
                    <p className="text-xs text-[#5E4F55] mt-1">
                      Fill out the form below and our hospitality desk will assist you.
                    </p>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#5E4F55] mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="e.g. Lady Genevieve Vance"
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#C8A97E]/30 text-sm focus:outline-none focus:border-[#381124]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-[#5E4F55] mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="genevieve@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#C8A97E]/30 text-sm focus:outline-none focus:border-[#381124]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-[#5E4F55] mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#C8A97E]/30 text-sm focus:outline-none focus:border-[#381124]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#5E4F55] mb-1">
                      Subject
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#C8A97E]/30 text-sm focus:outline-none focus:border-[#381124]"
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Bridal Party Booking">Bridal Party Booking</option>
                      <option value="Private Salon Buyout">Private Salon Buyout</option>
                      <option value="Corporate Wellness">Corporate Wellness</option>
                      <option value="Gift Card Assistance">Gift Card Assistance</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#5E4F55] mb-1">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Please let us know how we may assist you..."
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#C8A97E]/30 text-sm focus:outline-none focus:border-[#381124]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-full bg-gradient-to-r from-[#381124] to-[#4A1530] text-white font-semibold text-sm hover:from-[#4A1530] hover:to-[#5D1D3D] transition-all shadow-md flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4 text-[#DFC28D]" />
                    <span>Transmit Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Interactive Styled Google Maps Card */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="bg-white rounded-3xl overflow-hidden border border-[#C8A97E]/40 shadow-xl">
          <div className="p-6 bg-[#FAF3E8]/80 border-b border-[#C8A97E]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="text-[10px] uppercase tracking-widest text-[#B38E5D] font-bold">
                Interactive Coordinates
              </span>
              <h3 className="font-serif text-xl text-[#2A0E1D]">
                Lumière Flagship Maison & Private Penthouse
              </h3>
            </div>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-full bg-[#381124] text-white text-xs font-medium hover:bg-[#4A1530] transition-colors"
            >
              Open in Google Maps
            </a>
          </div>

          <div className="relative aspect-[21/9] sm:aspect-[21/8] w-full bg-[#E8CECF]/30 overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13224.237227447029!2d-118.4085303!3d34.0736204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bc04d6d147ab%3A0xd6c7c379fd081ed1!2sBeverly%20Hills%2C%20CA!5e0!3m2!1sen!2sus!4v1710000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "contrast(1.05) saturate(0.9)" }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lumière Salon location on Google Maps"
              className="w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* 4. Frequently Asked Questions Accordion */}
      <section className="py-20 bg-white border-t border-[#C8A97E]/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Guest Inquiries"
            title="Frequently Asked"
            highlightedText="Questions"
            description="Clear answers regarding appointment etiquette, parking, cancellations, and products."
          />

          <div className="mt-12 space-y-4">
            {faqsData.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-[#C8A97E]/30 overflow-hidden bg-[#FAF7F2] transition-colors"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  >
                    <span className="font-serif text-lg font-medium text-[#2A0E1D]">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#C8A97E] transition-transform duration-300 shrink-0 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-0 text-sm text-[#5E4F55] leading-relaxed border-t border-[#C8A97E]/10 animate-in fade-in duration-200">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
