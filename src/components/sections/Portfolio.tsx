"use client";

import Image from "next/image";
import Link from "next/link";
import { FadeUp, ScaleIn, LineGrow } from "@/components/motion";

const portfolioImages = [
  {
    src: "/images/hero-terrace.jpeg",
    alt: "Luxury terrace with wooden pergola and string lights at night",
    featured: true,
    label: "Terrace Garden",
  },
  {
    src: "/images/gazebo-garden.jpeg",
    alt: "AC gazebo with vertical garden wall",
    label: "AC Gazebo",
  },
  {
    src: "/images/glass-room.jpeg",
    alt: "Glass-walled outdoor room with vertical planters",
    label: "Outdoor Room",
  },
  {
    src: "/images/interior-bar.jpeg",
    alt: "Luxury home theater and bar interior",
    label: "Interior",
  },
  {
    src: "/images/terrace-wicker.jpeg",
    alt: "Rooftop terrace with wicker furniture and vertical garden",
    label: "Terrace Garden",
  },
  {
    src: "/images/rooftop-gazebo.jpeg",
    alt: "Rooftop garden with AC gazebo and artificial grass",
    label: "AC Gazebo",
  },
  {
    src: "/images/gazebo-terrace.jpeg",
    alt: "Modern terrace with glass gazebo and wooden pergola",
    label: "AC Gazebo",
  },
  {
    src: "/images/terrace-night.jpeg",
    alt: "Night terrace garden with LED vertical wall",
    featured: true,
    label: "Terrace Garden",
  },
  {
    src: "/images/landscape-render.jpeg",
    alt: "Landscaped garden design with lotus pond",
    label: "Landscaping",
  },
];

export function Portfolio() {
  return (
    <section>
      <div className="py-20 px-6 bg-cream text-center">
        <FadeUp>
          <h2 className="font-serif text-3xl md:text-5xl font-medium text-charcoal mb-3">
            Built, not just rendered.
          </h2>
        </FadeUp>
        <LineGrow className="w-14 h-0.5 bg-gold mx-auto mb-6" delay={0.2} />
        <FadeUp delay={0.3}>
          <p className="text-charcoal/60 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Every project was designed, sourced, and delivered by our team in
            Delhi NCR. From rooftop terraces in Greater Kailash to farmhouse
            landscapes in Chattarpur.
          </p>
        </FadeUp>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-1 bg-cream">
        {portfolioImages.map((img, i) => (
          <ScaleIn
            key={i}
            delay={i * 0.08}
            className={`relative overflow-hidden group cursor-pointer ${
              img.featured
                ? "col-span-2 row-span-2 aspect-auto min-h-[300px] md:min-h-[500px]"
                : "aspect-[4/3]"
            }`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-[1.2s] ease-out"
              sizes={
                img.featured
                  ? "(max-width: 768px) 100vw, 66vw"
                  : "(max-width: 768px) 50vw, 33vw"
              }
              loading="lazy"
            />
            {/* Hover overlay with label */}
            <div className="absolute inset-0 bg-gradient-to-t from-deep/80 via-deep/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-5">
              <span className="text-[11px] tracking-[0.2em] uppercase text-gold translate-y-3 group-hover:translate-y-0 transition-transform duration-500">
                {img.label}
              </span>
            </div>
          </ScaleIn>
        ))}
      </div>

      <div className="py-12 bg-cream text-center">
        <FadeUp>
          <Link
            href="/portfolio"
            className="group relative inline-block border border-charcoal text-charcoal px-8 py-3.5 text-sm font-medium tracking-wider overflow-hidden"
          >
            <span className="relative z-10 group-hover:text-cream transition-colors duration-300">
              View Full Portfolio
            </span>
            <span className="absolute inset-0 bg-charcoal translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </Link>
        </FadeUp>
      </div>
    </section>
  );
}
