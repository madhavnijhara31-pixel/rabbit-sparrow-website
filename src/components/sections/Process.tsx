"use client";

import {
  FadeUp,
  StaggerContainer,
  StaggerItem,
  LineGrow,
} from "@/components/motion";

const steps = [
  {
    number: "01",
    title: "Concept",
    description:
      "We start with your space and your life. How do you use the outdoors? Who gathers there? Before we sketch anything, we build the idea that will drive every decision.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "The concept becomes a full design — 3D visualizations, material selections, lighting plans, and planting schemes. You see exactly what you're getting before a single stone is laid.",
  },
  {
    number: "03",
    title: "Source",
    description:
      "We source from workshops and quarries we've worked with for years — Rajasthan stone, Kirti Nagar timber, premium import hardware. Selected for looks, durability, and Delhi conditions.",
  },
  {
    number: "04",
    title: "Build",
    description:
      "Our skilled Karigars bring the design to life on site. We manage every detail — timelines, quality checks, and a final walkthrough that matches the renders.",
  },
];

export function Process() {
  return (
    <section className="py-24 md:py-32 px-6 bg-deep text-cream overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">
        <FadeUp>
          <h2 className="font-serif text-3xl md:text-5xl font-medium mb-3">
            How we work.
          </h2>
        </FadeUp>
        <LineGrow className="w-14 h-0.5 bg-gold mx-auto mb-4" delay={0.2} />
        <FadeUp delay={0.3}>
          <p className="text-stone/70 text-base md:text-lg mb-16">
            Four stages from first conversation to final walkthrough.
          </p>
        </FadeUp>

        <StaggerContainer
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10"
          staggerDelay={0.15}
        >
          {steps.map((step, i) => (
            <StaggerItem key={step.number} className="relative text-center">
              {/* Animated connector line */}
              {i < steps.length - 1 && (
                <LineGrow
                  className="hidden lg:block absolute top-10 right-0 translate-x-1/2 w-full h-px bg-gold/20"
                  delay={0.3 + i * 0.15}
                />
              )}

              <div className="font-serif text-4xl md:text-5xl text-gold/40 mb-4">
                {step.number}
              </div>
              <h3 className="font-serif text-xl md:text-2xl font-medium text-cream mb-3">
                {step.title}
              </h3>
              <p className="text-stone/60 text-sm leading-relaxed max-w-[280px] mx-auto">
                {step.description}
              </p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
