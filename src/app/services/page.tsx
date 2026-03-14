import type { Metadata } from "next";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { CTA } from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Terrace gardens, AC gazebos, landscaping, swimming pools, and luxury interiors. Rabbit & Sparrow — luxury design services in Delhi NCR.",
};

export default function ServicesPage() {
  return (
    <main>
      <section className="bg-deep pt-32 pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-serif text-4xl md:text-6xl font-medium text-cream mb-4">
            Our Services
          </h1>
          <div className="w-14 h-0.5 bg-gold mb-6" />
          <p className="text-stone/70 text-base md:text-lg leading-relaxed max-w-xl">
            Five disciplines under one studio — each driven by the same
            concept-first approach, the same material expertise, and the same
            commitment to Delhi NCR conditions.
          </p>
        </div>
      </section>
      <Services />
      <Process />
      <CTA />
    </main>
  );
}
