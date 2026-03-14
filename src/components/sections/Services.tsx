"use client";

import Image from "next/image";
import Link from "next/link";
import { FadeUp, FadeIn, ParallaxImage, LineGrow } from "@/components/motion";

const services = [
  {
    number: "01",
    title: "Turn your rooftop into the room you use most.",
    label: "Terrace Gardens",
    description:
      "Your terrace is not leftover space — it's unrealised living area. We design complete rooftop environments with hardscaping, planting, lighting, and seating zones that handle Delhi's dust, heat, and monsoon.",
    image: "/images/terrace-night.jpeg",
    alt: "Luxury rooftop terrace garden with LED lighting at night",
  },
  {
    number: "02",
    title: "A climate-controlled room — without the construction timeline.",
    label: "AC Gazebos",
    description:
      "Our prefab AC gazebos are factory-built, glass-enclosed outdoor rooms that extend your usable living space in weeks, not months. Home theaters, lounges, dining rooms — all with air conditioning.",
    image: "/images/gazebo-blue.jpeg",
    alt: "Glass-enclosed AC gazebo with blue mood lighting at night",
  },
  {
    number: "03",
    title: "Outdoor environments designed for Delhi's reality.",
    label: "Exterior Landscaping",
    description:
      "Full landscape design for villas, farmhouses, and residences — from hardscaping and planting to irrigation and outdoor lighting. We select plants that survive Delhi summers.",
    image: "/images/landscape-render.jpeg",
    alt: "Landscaped garden with lotus pond and wooden pergola",
  },
  {
    number: "04",
    title: "Pools that belong to the landscape, not beside it.",
    label: "Swimming Pools",
    description:
      "We design custom pools integrated into the broader outdoor vision — not dropped into a corner as an afterthought. Every design considers sightlines, drainage, and how the pool connects to your space.",
    image: "/images/gazebo-terrace.jpeg",
    alt: "Modern terrace with glass gazebo and wooden pergola",
  },
  {
    number: "05",
    title: "Interiors with the same concept-first thinking.",
    label: "Luxury Interiors",
    description:
      "End-to-end interior design for apartments, villas, and farmhouses. From Makrana marble sourcing to Italian hardware, we work across every quality tier without compromising the idea.",
    image: "/images/interior-bar.jpeg",
    alt: "Luxury home theater and bar lounge with herringbone flooring",
  },
];

export function Services() {
  return (
    <section>
      <div className="py-20 px-6 bg-stone text-center">
        <FadeUp>
          <h2 className="font-serif text-3xl md:text-5xl font-medium text-charcoal mb-3">
            Five ways we transform your space.
          </h2>
        </FadeUp>
        <LineGrow className="w-14 h-0.5 bg-gold mx-auto" delay={0.2} />
      </div>

      <div>
        {services.map((service, i) => {
          const isEven = i % 2 === 1;
          return (
            <div
              key={service.number}
              className={`grid grid-cols-1 md:grid-cols-2 min-h-[500px] ${
                isEven ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              {/* Parallax image */}
              <ParallaxImage className="min-h-[300px] md:min-h-[500px]">
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  loading={i < 2 ? "eager" : "lazy"}
                />
              </ParallaxImage>

              {/* Animated text */}
              <div className="flex flex-col justify-center p-8 md:p-14 bg-deep text-cream">
                <FadeIn direction={isEven ? "right" : "left"}>
                  <div className="font-serif text-5xl text-gold/30 mb-3">
                    {service.number}
                  </div>
                </FadeIn>
                <FadeIn direction={isEven ? "right" : "left"} delay={0.1}>
                  <span className="text-xs tracking-[0.2em] uppercase text-gold mb-3 block">
                    {service.label}
                  </span>
                </FadeIn>
                <FadeIn direction={isEven ? "right" : "left"} delay={0.2}>
                  <h3 className="font-serif text-2xl md:text-3xl font-medium text-cream leading-snug mb-4">
                    {service.title}
                  </h3>
                </FadeIn>
                <FadeIn direction={isEven ? "right" : "left"} delay={0.3}>
                  <p className="text-stone/80 text-sm leading-relaxed max-w-lg">
                    {service.description}
                  </p>
                </FadeIn>
                <FadeIn direction={isEven ? "right" : "left"} delay={0.4}>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 mt-6 text-gold text-sm tracking-wide group"
                  >
                    Discuss your project
                    <span className="inline-block group-hover:translate-x-1 transition-transform duration-300">
                      &rarr;
                    </span>
                  </Link>
                </FadeIn>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
