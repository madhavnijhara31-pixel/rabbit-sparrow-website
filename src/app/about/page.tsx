import type { Metadata } from "next";
import Image from "next/image";
import { CTA } from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Rabbit & Sparrow is a concept-first luxury design studio in Delhi NCR, creating terrace gardens, AC gazebos, and outdoor living environments.",
};

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-end bg-deep">
        <Image
          src="/images/gazebo-garden.jpeg"
          alt="Rabbit & Sparrow terrace garden project"
          fill
          className="object-cover brightness-[0.35]"
          priority
          sizes="100vw"
        />
        <div className="relative z-10 px-6 md:px-12 pb-16 pt-32">
          <h1 className="font-serif text-4xl md:text-6xl font-medium text-cream mb-4">
            About Us
          </h1>
          <p className="font-serif italic text-gold text-lg">
            Concept over decoration.
          </p>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 px-6 bg-cream">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-charcoal mb-6">
            We don&apos;t decorate spaces. We redesign how you live in them.
          </h2>
          <div className="w-14 h-0.5 bg-gold mb-8" />
          <div className="space-y-5 text-charcoal/70 text-base md:text-lg leading-relaxed">
            <p>
              Rabbit & Sparrow was founded on a simple observation: most outdoor
              spaces in Delhi NCR are either ignored or decorated without
              thought. Terraces become storage. Gardens become maintenance
              headaches. Rooftops sit empty in a city where every square foot
              counts.
            </p>
            <p>
              We exist to change that. Every project we take on begins with a
              concept — an idea about how the space should function, feel, and
              fit into the way you actually live. The aesthetic follows from
              there, not the other way around.
            </p>
            <p>
              This approach means we think about Delhi&apos;s brutal summers
              before we pick your flooring. We plan for monsoon drainage before
              we finalize a layout. We source from Rajasthan quarries and Kirti
              Nagar workshops because we know what lasts in this climate.
            </p>
            <p>
              The result is spaces that look intentional — because they are.
              Spaces that work in May heat and July rain. Spaces your family
              gravitates toward, twelve months a year.
            </p>
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="py-24 px-6 bg-stone">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-charcoal mb-6 text-center">
            What we bring to every project.
          </h2>
          <div className="w-14 h-0.5 bg-gold mx-auto mb-12" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Concept-First Design",
                text: "Every decision has a reason. We design around how you live, not just how things look. The idea comes first — materials, colours, and layout follow.",
              },
              {
                title: "Delhi NCR Expertise",
                text: "We know this climate, these materials, these suppliers. Dust, monsoon, extreme heat — our designs are engineered for the conditions your space actually faces.",
              },
              {
                title: "End-to-End Execution",
                text: "From concept and 3D visualization through material sourcing to on-site construction with skilled Karigars. One studio, one team, one accountable point of contact.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-cream p-8 border-t-[3px] border-gold">
                <h3 className="font-serif text-xl font-medium text-charcoal mb-3">
                  {item.title}
                </h3>
                <p className="text-charcoal/60 text-sm leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="py-20 px-6 bg-cream text-center">
        <h2 className="font-serif text-2xl md:text-3xl font-medium text-charcoal mb-3">
          Trusted by homeowners across Delhi NCR.
        </h2>
        <p className="text-charcoal/50 text-sm">
          Greater Kailash &middot; Chattarpur &middot; Sainik Farms &middot;
          Vasant Kunj &middot; Noida &middot; Gurgaon
        </p>
      </section>

      <CTA />
    </main>
  );
}
