import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingAppointmentButton from "@/components/FloatingAppointmentButton";

export const metadata: Metadata = {
  title: {
    default: "Lumière Salon & Spa | Where Beauty Meets Relaxation",
    template: "%s | Lumière Salon & Spa",
  },
  description:
    "Experience luxury beauty and holistic wellness at Lumière Salon & Spa. Bespoke hair styling, revitalizing facials, bridal packages, and therapeutic spa treatments in an oasis of serenity.",
  keywords: [
    "luxury salon",
    "spa wellness",
    "hair styling",
    "bridal makeup",
    "facial treatment",
    "deep tissue massage",
    "manicure pedicure",
    "Lumière salon",
  ],
  authors: [{ name: "Lumière Salon & Spa" }],
  openGraph: {
    title: "Lumière Salon & Spa | Where Beauty Meets Relaxation",
    description:
      "Indulge in premier salon and spa treatments crafted for ultimate rejuvenation and elegance.",
    url: "https://lumieresalon.com",
    siteName: "Lumière Salon & Spa",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen flex flex-col bg-[#FDFBF7] text-[#2C2226] font-sans antialiased selection:bg-[#C8A97E]/30 selection:text-[#381124]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingAppointmentButton />
      </body>
    </html>
  );
}
