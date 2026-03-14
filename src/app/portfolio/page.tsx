import type { Metadata } from "next";
import Image from "next/image";
import { CTA } from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "View completed terrace gardens, AC gazebos, and luxury outdoor projects by Rabbit & Sparrow across Delhi NCR.",
};

const projects = [
  {
    src: "/images/hero-terrace.jpeg",
    alt: "Luxury terrace garden with wooden pergola and string lights at night",
    category: "Terrace Garden",
  },
  {
    src: "/images/terrace-night.jpeg",
    alt: "Night terrace garden with LED vertical wall and seating",
    category: "Terrace Garden",
  },
  {
    src: "/images/gazebo-blue.jpeg",
    alt: "Glass-enclosed AC gazebo with blue mood lighting",
    category: "AC Gazebo",
  },
  {
    src: "/images/gazebo-garden.jpeg",
    alt: "AC gazebo with vertical garden wall",
    category: "AC Gazebo",
  },
  {
    src: "/images/rooftop-gazebo.jpeg",
    alt: "Rooftop garden with AC gazebo and artificial grass",
    category: "Terrace Garden",
  },
  {
    src: "/images/interior-bar.jpeg",
    alt: "Luxury home theater and bar lounge interior",
    category: "Interior",
  },
  {
    src: "/images/interior-living.jpeg",
    alt: "Open plan living and dining with terrace view",
    category: "Interior",
  },
  {
    src: "/images/landscape-render.jpeg",
    alt: "Landscaped garden design with lotus pond and pergola",
    category: "Landscaping",
  },
  {
    src: "/images/glass-room.jpeg",
    alt: "Glass-walled outdoor room with vertical planters",
    category: "AC Gazebo",
  },
  {
    src: "/images/terrace-wicker.jpeg",
    alt: "Rooftop terrace with wicker furniture and vertical garden",
    category: "Terrace Garden",
  },
  {
    src: "/images/gazebo-terrace.jpeg",
    alt: "Modern terrace with glass gazebo and wooden pergola",
    category: "AC Gazebo",
  },
  {
    src: "/images/interior-render.jpeg",
    alt: "Industrial-style interior render with brick wall and home theater",
    category: "Interior",
  },
];

export default function PortfolioPage() {
  return (
    <main>
      <section className="bg-deep pt-32 pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-serif text-4xl md:text-6xl font-medium text-cream mb-4">
            Our Work
          </h1>
          <div className="w-14 h-0.5 bg-gold mb-6" />
          <p className="text-stone/70 text-base md:text-lg leading-relaxed max-w-xl">
            Every project was designed, sourced, and delivered by our team in
            Delhi NCR. These are finished spaces being lived in right now.
          </p>
        </div>
      </section>

      <section className="bg-cream py-6 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((project, i) => (
              <div
                key={i}
                className="relative aspect-[4/3] overflow-hidden group"
              >
                <Image
                  src={project.src}
                  alt={project.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading={i < 3 ? "eager" : "lazy"}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4">
                    <span className="text-[11px] tracking-[0.15em] uppercase text-gold">
                      {project.category}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}
