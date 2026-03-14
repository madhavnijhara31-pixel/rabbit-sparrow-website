"use client";

import {
  FadeUp,
  StaggerContainer,
  StaggerItem,
  LineGrow,
} from "@/components/motion";

const testimonials = [
  {
    quote:
      "Rabbit & Sparrow transformed our terrace into the most-used room in the house. The AC gazebo was the decision that changed everything — we use it year-round now, even in peak summer. Our friends can't believe it's on a rooftop.",
    client: "Residential client",
    location: "Greater Kailash",
  },
  {
    quote:
      "What set them apart was the thinking behind every choice. They didn't show up with a mood board — they asked us how we entertain, how our kids use the terrace, what time of day we're outside. The design came from that, and it shows.",
    client: "Villa client",
    location: "Chattarpur",
  },
  {
    quote:
      "From the 3D renders to the final walkthrough, everything matched. The night lighting alone gets us compliments every time we host. And the fact that they managed the whole build — sourcing, Karigars, timeline — meant we didn't have to.",
    client: "Farmhouse client",
    location: "Sainik Farms",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 md:py-32 px-6 bg-stone overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <FadeUp>
            <h2 className="font-serif text-3xl md:text-5xl font-medium text-charcoal mb-3">
              What our clients say.
            </h2>
          </FadeUp>
          <LineGrow className="w-14 h-0.5 bg-gold mx-auto" delay={0.2} />
        </div>

        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          staggerDelay={0.15}
        >
          {testimonials.map((t, i) => (
            <StaggerItem key={i}>
              <div className="bg-cream p-8 md:p-10 border-t-[3px] border-gold group hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
                <div className="font-serif text-4xl text-gold/20 mb-3 leading-none">
                  &ldquo;
                </div>
                <blockquote className="font-serif italic text-charcoal text-lg leading-relaxed mb-6">
                  {t.quote}
                </blockquote>
                <cite className="not-italic text-sm font-medium text-terracotta tracking-wide">
                  {t.client}, {t.location}
                </cite>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
