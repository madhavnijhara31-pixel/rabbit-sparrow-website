"use client";

import { FadeUp, LineGrow, TextReveal } from "@/components/motion";

export function About() {
  return (
    <section className="py-24 md:py-32 px-6 bg-cream">
      <div className="max-w-3xl mx-auto">
        <FadeUp>
          <h2 className="font-serif text-3xl md:text-5xl font-medium text-charcoal mb-4">
            <TextReveal text="Every space starts with an idea." />
          </h2>
        </FadeUp>
        <LineGrow className="w-14 h-0.5 bg-gold mb-8" delay={0.3} />
        <div className="space-y-5 text-charcoal/70 text-base md:text-lg leading-relaxed">
          <FadeUp delay={0.1}>
            <p>
              Most studios start with a mood board. We start with a question:{" "}
              <em className="font-serif text-charcoal text-lg md:text-xl">
                How do you want to live in this space?
              </em>
            </p>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p>
              Rabbit & Sparrow is a Delhi NCR design studio that works across
              terrace gardens, AC gazebos, landscaping, pools, and luxury
              interiors. We operate on a simple principle — every design decision
              should have a reason rooted in how the space is used, not just how
              it looks.
            </p>
          </FadeUp>
          <FadeUp delay={0.3}>
            <p>
              That means we think about Delhi summers before we pick materials.
              We think about monsoon drainage before we plan a layout. We source
              from Rajasthan stone quarries and Kirti Nagar workshops because we
              know what holds up in this climate — and what doesn&apos;t.
            </p>
          </FadeUp>
          <FadeUp delay={0.4}>
            <p>
              The result: outdoor and indoor spaces that look remarkable{" "}
              <em className="font-serif text-charcoal">and</em> work for the way
              you actually live — twelve months a year, in Delhi NCR conditions.
            </p>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
