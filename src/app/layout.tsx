import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Rabbit & Sparrow — Luxury Design Studio | Delhi NCR",
    template: "%s | Rabbit & Sparrow",
  },
  description:
    "Luxury terrace gardens, AC gazebos, landscaping, pool design & interiors for Delhi NCR's most discerning homeowners. Where concept meets craft.",
  keywords: [
    "luxury terrace garden Delhi NCR",
    "AC gazebo Delhi",
    "prefab outdoor rooms India",
    "luxury landscape architect Delhi",
    "swimming pool designer Delhi NCR",
    "luxury interior designer Delhi",
    "terrace garden design",
    "outdoor living Delhi",
  ],
  openGraph: {
    title: "Rabbit & Sparrow — Luxury Design Studio",
    description:
      "Terrace gardens, AC gazebos, and luxury outdoor living environments for Delhi NCR.",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${dmSans.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
