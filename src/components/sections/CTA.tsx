"use client";

import Link from "next/link";
import { FadeUp, LineGrow, StaggerContainer, StaggerItem } from "@/components/motion";

export function CTA() {
  return (
    <section className="py-24 md:py-32 px-6 bg-deep text-cream text-center overflow-hidden">
      <div className="max-w-2xl mx-auto">
        <FadeUp>
          <h2 className="font-serif text-3xl md:text-5xl font-medium mb-4">
            Ready to rethink your space?
          </h2>
        </FadeUp>
        <LineGrow className="w-14 h-0.5 bg-gold mx-auto mb-6" delay={0.2} />
        <FadeUp delay={0.3}>
          <p className="text-stone/70 text-base md:text-lg leading-relaxed mb-10">
            Whether you have a terrace that needs a complete transformation or an
            idea you&apos;re not sure is possible — start with a conversation.
            We&apos;ll tell you what&apos;s realistic, what it involves, and
            whether we&apos;re the right studio for it.
          </p>
        </FadeUp>

        <FadeUp delay={0.4}>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://wa.me/918860561855?text=Hi%2C%20I'm%20interested%20in%20learning%20more%20about%20Rabbit%20%26%20Sparrow's%20design%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-2 bg-terracotta text-cream px-8 py-3.5 text-sm font-medium tracking-wider overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Talk to us on WhatsApp
              </span>
              <span className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </a>
            <Link
              href="/contact"
              className="group relative border border-gold text-gold px-8 py-3.5 text-sm font-medium tracking-wider overflow-hidden"
            >
              <span className="relative z-10 group-hover:text-deep transition-colors duration-300">
                Other Ways to Reach Us
              </span>
              <span className="absolute inset-0 bg-gold translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </Link>
          </div>
        </FadeUp>

        <StaggerContainer
          className="flex flex-wrap gap-8 justify-center mt-12 text-sm text-stone/50"
          staggerDelay={0.1}
        >
          {[
            {
              label: "Phone",
              value: "98211 00481",
              href: "tel:+919821100481",
            },
            {
              label: "Email",
              value: "rabbit.sparrow31@gmail.com",
              href: "mailto:rabbit.sparrow31@gmail.com",
            },
            {
              label: "Instagram",
              value: "@rabbit.sparrow",
              href: "https://www.instagram.com/rabbit.sparrow/",
              external: true,
            },
          ].map((item) => (
            <StaggerItem key={item.label}>
              <div>
                <span className="block text-[11px] tracking-[0.15em] uppercase text-gold/60 mb-1">
                  {item.label}
                </span>
                <a
                  href={item.href}
                  {...(item.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="hover:text-gold transition-colors duration-300"
                >
                  {item.value}
                </a>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
