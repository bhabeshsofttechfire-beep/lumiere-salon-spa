"use client";

import { useState } from "react";
import Image from "next/image";
import confetti from "canvas-confetti";
import {
  Calendar as CalendarIcon,
  Clock,
  User,
  Phone,
  Mail,
  MessageSquare,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  Scissors,
  Check,
  ChevronRight,
  RefreshCw,
} from "lucide-react";
import { servicesData } from "@/data/services";
import { teamMembersData } from "@/data/team";

const TIME_SLOTS = [
  "09:30 AM",
  "10:30 AM",
  "11:30 AM",
  "01:00 PM",
  "02:30 PM",
  "03:45 PM",
  "05:00 PM",
  "06:30 PM",
];

interface BookingFormProps {
  initialServiceSlug?: string;
  initialSpecialistId?: string;
  initialOfferId?: string;
  onSuccess?: () => void;
}

export default function BookingForm({
  initialServiceSlug,
  initialSpecialistId,
  onSuccess,
}: BookingFormProps) {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(() => {
    if (initialServiceSlug) {
      const matched = servicesData.find((s) => s.slug === initialServiceSlug);
      if (matched) return matched.id;
    }
    return servicesData[0]?.id || "";
  });
  const [selectedStaffId, setSelectedStaffId] = useState<string>(
    () => initialSpecialistId || "any"
  );
  const [selectedDate, setSelectedDate] = useState<string>(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split("T")[0];
  });
  const [selectedTime, setSelectedTime] = useState<string>(TIME_SLOTS[1]);
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [bookingReference, setBookingReference] = useState("");

  const selectedService = servicesData.find((s) => s.id === selectedServiceId);
  const selectedStaff = teamMembersData.find((t) => t.id === selectedStaffId);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!name.trim()) errs.name = "Please provide your full name";
    if (!email.trim() || !email.includes("@"))
      errs.email = "Please provide a valid email address";
    if (!phone.trim() || phone.length < 7)
      errs.phone = "Please provide a valid phone number";
    if (!selectedServiceId) errs.service = "Please select a service";
    if (!selectedDate) errs.date = "Please select an appointment date";
    if (!selectedTime) errs.time = "Please pick a preferred time slot";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate luxury booking reservation api
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      const ref = `LUM-${Math.floor(100000 + Math.random() * 900000)}`;
      setBookingReference(ref);

      // Trigger confetti celebration
      try {
        confetti({
          particleCount: 90,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#C8A97E", "#381124", "#DFC28D", "#EAD6D6"],
        });
      } catch {
        // Confetti fallback
      }

      if (onSuccess) onSuccess();
    }, 1200);
  };

  const resetForm = () => {
    setIsSuccess(false);
    setName("");
    setPhone("");
    setEmail("");
    setMessage("");
    setErrors({});
  };

  // Get minimum date (today)
  const minDate = new Date().toISOString().split("T")[0];

  if (isSuccess) {
    return (
      <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#C8A97E]/40 shadow-2xl text-center max-w-2xl mx-auto animate-in fade-in zoom-in duration-300">
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#FAF3E8] to-[#F5EBEB] border-2 border-[#C8A97E] flex items-center justify-center mx-auto mb-6 shadow-inner">
          <CheckCircle2 className="w-10 h-10 text-[#381124]" />
        </div>

        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#B38E5D]">
          Reservation Confirmed
        </span>
        <h3 className="text-3xl font-serif text-[#2A0E1D] mt-1 mb-3">
          We Await Your Arrival, {name.split(" ")[0]}
        </h3>
        <p className="text-sm text-[#5E4F55] max-w-md mx-auto leading-relaxed mb-6">
          Your reservation has been confirmed. A confirmation email and calendar invitation
          have been sent to <span className="font-semibold text-[#2A0E1D]">{email}</span>.
        </p>

        {/* Summary Receipt Box */}
        <div className="bg-[#FAF7F2] rounded-2xl p-6 border border-[#C8A97E]/30 text-left space-y-3 mb-8">
          <div className="flex justify-between items-center pb-3 border-b border-[#C8A97E]/20 text-xs text-[#7C6B73]">
            <span>Confirmation Code</span>
            <span className="font-mono font-bold text-[#381124] text-sm tracking-wider">
              {bookingReference}
            </span>
          </div>

          <div className="flex justify-between items-center text-sm">
            <span className="text-[#5E4F55]">Service Ritual:</span>
            <span className="font-medium text-[#2A0E1D]">
              {selectedService?.name || "Signature Treatment"}
            </span>
          </div>

          <div className="flex justify-between items-center text-sm">
            <span className="text-[#5E4F55]">Assigned Artisan:</span>
            <span className="font-medium text-[#2A0E1D]">
              {selectedStaffId === "any"
                ? "First Available Senior Specialist"
                : selectedStaff?.name}
            </span>
          </div>

          <div className="flex justify-between items-center text-sm">
            <span className="text-[#5E4F55]">Date & Time:</span>
            <span className="font-medium text-[#381124]">
              {selectedDate} at {selectedTime}
            </span>
          </div>

          <div className="flex justify-between items-center pt-3 border-t border-[#C8A97E]/20 text-sm font-semibold text-[#2A0E1D]">
            <span>Estimated Total:</span>
            <span className="font-serif text-lg text-[#381124]">
              ${selectedService?.price || 95}
            </span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={resetForm}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#381124] text-white text-sm font-medium hover:bg-[#4A1530] transition-colors shadow-md"
          >
            <RefreshCw className="w-4 h-4 text-[#DFC28D]" />
            <span>Book Another Appointment</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-3xl p-6 sm:p-10 border border-[#C8A97E]/30 shadow-2xl max-w-4xl mx-auto"
    >
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#B38E5D] font-semibold mb-1">
          <Sparkles className="w-3.5 h-3.5" />
          Bespoke Concierge Booking
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#2A0E1D]">
          Reserve Your Indulgence
        </h2>
        <p className="text-sm text-[#5E4F55] mt-1">
          Select your customized beauty ritual, preferred artisan, and desired schedule.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Form Fields (8 Cols) */}
        <div className="lg:col-span-8 space-y-6">
          {/* Step 1: Select Service */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#381124] mb-2">
              1. Select Service Ritual *
            </label>
            <div className="relative">
              <select
                value={selectedServiceId}
                onChange={(e) => setSelectedServiceId(e.target.value)}
                className={`w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border ${
                  errors.service ? "border-red-500" : "border-[#C8A97E]/30"
                } text-[#2A0E1D] text-sm focus:outline-none focus:border-[#C8A97E] transition-colors appearance-none`}
              >
                {servicesData.map((svc) => (
                  <option key={svc.id} value={svc.id}>
                    {svc.name} — {svc.duration} (${svc.price})
                  </option>
                ))}
              </select>
              <Scissors className="w-4 h-4 text-[#C8A97E] absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
            {errors.service && (
              <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> {errors.service}
              </p>
            )}
          </div>

          {/* Step 2: Select Specialist */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#381124] mb-2">
              2. Select Master Specialist
            </label>
            <div className="relative">
              <select
                value={selectedStaffId}
                onChange={(e) => setSelectedStaffId(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#C8A97E]/30 text-[#2A0E1D] text-sm focus:outline-none focus:border-[#C8A97E] transition-colors appearance-none"
              >
                <option value="any">Any Available Master Stylist / Therapist</option>
                {teamMembersData.map((staff) => (
                  <option key={staff.id} value={staff.id}>
                    {staff.name} — {staff.position}
                  </option>
                ))}
              </select>
              <User className="w-4 h-4 text-[#C8A97E] absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          {/* Step 3: Date & Time */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#381124] mb-2">
                3. Preferred Date *
              </label>
              <div className="relative">
                <input
                  type="date"
                  min={minDate}
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className={`w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border ${
                    errors.date ? "border-red-500" : "border-[#C8A97E]/30"
                  } text-[#2A0E1D] text-sm focus:outline-none focus:border-[#C8A97E] transition-colors`}
                />
              </div>
              {errors.date && (
                <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {errors.date}
                </p>
              )}
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#381124] mb-2">
                Preferred Time Slot *
              </label>
              <div className="relative">
                <select
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                  className={`w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border ${
                    errors.time ? "border-red-500" : "border-[#C8A97E]/30"
                  } text-[#2A0E1D] text-sm focus:outline-none focus:border-[#C8A97E] transition-colors appearance-none`}
                >
                  {TIME_SLOTS.map((slot) => (
                    <option key={slot} value={slot}>
                      {slot}
                    </option>
                  ))}
                </select>
                <Clock className="w-4 h-4 text-[#C8A97E] absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
              {errors.time && (
                <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {errors.time}
                </p>
              )}
            </div>
          </div>

          {/* Step 4: Contact Details */}
          <div className="pt-2 border-t border-[#FAF3E8]">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#381124] mb-3">
              4. Client Contact Details
            </p>

            <div className="space-y-4">
              <div>
                <label className="block text-xs text-[#5E4F55] mb-1">
                  Full Name *
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Lady Genevieve Vance"
                    className={`w-full pl-10 pr-4 py-3 rounded-xl bg-[#FAF7F2] border ${
                      errors.name ? "border-red-500" : "border-[#C8A97E]/30"
                    } text-sm text-[#2A0E1D] focus:outline-none focus:border-[#C8A97E]`}
                  />
                  <User className="w-4 h-4 text-[#C8A97E] absolute left-3.5 top-1/2 -translate-y-1/2" />
                </div>
                {errors.name && (
                  <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.name}
                  </p>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-[#5E4F55] mb-1">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+1 (555) 000-0000"
                      className={`w-full pl-10 pr-4 py-3 rounded-xl bg-[#FAF7F2] border ${
                        errors.phone ? "border-red-500" : "border-[#C8A97E]/30"
                      } text-sm text-[#2A0E1D] focus:outline-none focus:border-[#C8A97E]`}
                    />
                    <Phone className="w-4 h-4 text-[#C8A97E] absolute left-3.5 top-1/2 -translate-y-1/2" />
                  </div>
                  {errors.phone && (
                    <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.phone}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs text-[#5E4F55] mb-1">
                    Email Address *
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="genevieve@example.com"
                      className={`w-full pl-10 pr-4 py-3 rounded-xl bg-[#FAF7F2] border ${
                        errors.email ? "border-red-500" : "border-[#C8A97E]/30"
                      } text-sm text-[#2A0E1D] focus:outline-none focus:border-[#C8A97E]`}
                    />
                    <Mail className="w-4 h-4 text-[#C8A97E] absolute left-3.5 top-1/2 -translate-y-1/2" />
                  </div>
                  {errors.email && (
                    <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-xs text-[#5E4F55] mb-1">
                  Special Requests, Allergies or Notes (Optional)
                </label>
                <div className="relative">
                  <textarea
                    rows={2}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us about allergies, bridal dress tones, or preferred champagne..."
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#C8A97E]/30 text-sm text-[#2A0E1D] focus:outline-none focus:border-[#C8A97E]"
                  />
                  <MessageSquare className="w-4 h-4 text-[#C8A97E] absolute left-3.5 top-3.5" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Summary Card (4 Cols) */}
        <div className="lg:col-span-4">
          <div className="sticky top-28 bg-[#FAF7F2] rounded-2xl p-6 border border-[#C8A97E]/30 flex flex-col justify-between">
            <div>
              <h4 className="font-serif text-lg font-semibold text-[#2A0E1D] pb-3 border-b border-[#C8A97E]/20">
                Reservation Summary
              </h4>

              {selectedService && (
                <div className="mt-4">
                  <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden mb-3 border border-[#C8A97E]/30">
                    <Image
                      src={selectedService.image}
                      alt={selectedService.name}
                      fill
                      sizes="300px"
                      className="object-cover"
                    />
                  </div>
                  <h5 className="font-serif font-medium text-base text-[#2A0E1D]">
                    {selectedService.name}
                  </h5>
                  <p className="text-xs text-[#7C6B73] mt-0.5">
                    Category: {selectedService.category}
                  </p>
                </div>
              )}

              <div className="mt-4 space-y-2 text-xs text-[#5E4F55]">
                <div className="flex justify-between">
                  <span>Duration:</span>
                  <span className="font-medium text-[#2A0E1D]">
                    {selectedService?.duration || "60 mins"}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Stylist / Therapist:</span>
                  <span className="font-medium text-[#2A0E1D]">
                    {selectedStaffId === "any"
                      ? "First Available"
                      : selectedStaff?.name.split(" ")[0]}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Date:</span>
                  <span className="font-medium text-[#2A0E1D]">
                    {selectedDate || "Please pick"}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Time:</span>
                  <span className="font-medium text-[#2A0E1D]">
                    {selectedTime || "Please pick"}
                  </span>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-[#C8A97E]/20 flex items-baseline justify-between">
                <span className="text-xs uppercase font-semibold text-[#7C6B73]">
                  Total Investment
                </span>
                <span className="text-2xl font-serif font-bold text-[#381124]">
                  ${selectedService?.price || 95}
                </span>
              </div>

              <div className="mt-4 p-3 rounded-xl bg-white border border-[#C8A97E]/20 text-[11px] text-[#7C6B73] space-y-1">
                <div className="flex items-center gap-1.5 text-[#381124] font-medium">
                  <Check className="w-3.5 h-3.5 text-[#B38E5D]" />
                  <span>Complimentary Valet Parking</span>
                </div>
                <div className="flex items-center gap-1.5 text-[#381124] font-medium">
                  <Check className="w-3.5 h-3.5 text-[#B38E5D]" />
                  <span>Free Rescheduling up to 24h</span>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full bg-gradient-to-r from-[#381124] to-[#4A1530] text-white font-medium text-sm hover:from-[#4A1530] hover:to-[#5D1D3D] transition-all shadow-lg border border-[#C8A97E]/40 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <RefreshCw className="w-4 h-4 animate-spin text-[#DFC28D]" />
                    <span>Confirming with Concierge...</span>
                  </span>
                ) : (
                  <>
                    <CalendarIcon className="w-4 h-4 text-[#DFC28D]" />
                    <span>Book Appointment</span>
                    <ChevronRight className="w-4 h-4 text-[#DFC28D]" />
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
