import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Rabbit & Sparrow. Discuss your terrace garden, AC gazebo, or interior design project in Delhi NCR.",
};

export default function ContactPage() {
  return (
    <main>
      <section className="min-h-screen bg-deep pt-24">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Left — Info */}
            <div>
              <h1 className="font-serif text-4xl md:text-5xl font-medium text-cream mb-4">
                Let&apos;s talk about your space.
              </h1>
              <div className="w-14 h-0.5 bg-gold mb-8" />
              <p className="text-stone/70 text-base leading-relaxed mb-10">
                Whether you have a terrace that needs a complete transformation,
                a farmhouse landscape project, or just an idea you&apos;re not
                sure is possible — start with a conversation.
              </p>

              <div className="space-y-6">
                <div>
                  <span className="block text-[11px] tracking-[0.15em] uppercase text-gold mb-1">
                    WhatsApp (Preferred)
                  </span>
                  <a
                    href="https://wa.me/918860561855?text=Hi%2C%20I'm%20interested%20in%20learning%20more%20about%20Rabbit%20%26%20Sparrow's%20design%20services."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cream hover:text-gold transition-colors text-lg"
                  >
                    8860561855
                  </a>
                </div>
                <div>
                  <span className="block text-[11px] tracking-[0.15em] uppercase text-gold mb-1">
                    Phone
                  </span>
                  <a
                    href="tel:+919821100481"
                    className="text-cream hover:text-gold transition-colors text-lg"
                  >
                    98211 00481
                  </a>
                </div>
                <div>
                  <span className="block text-[11px] tracking-[0.15em] uppercase text-gold mb-1">
                    Email
                  </span>
                  <a
                    href="mailto:rabbit.sparrow31@gmail.com"
                    className="text-cream hover:text-gold transition-colors text-lg"
                  >
                    rabbit.sparrow31@gmail.com
                  </a>
                </div>
                <div>
                  <span className="block text-[11px] tracking-[0.15em] uppercase text-gold mb-1">
                    Instagram
                  </span>
                  <a
                    href="https://www.instagram.com/rabbit.sparrow/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cream hover:text-gold transition-colors text-lg"
                  >
                    @rabbit.sparrow
                  </a>
                </div>
                <div>
                  <span className="block text-[11px] tracking-[0.15em] uppercase text-gold mb-1">
                    Location
                  </span>
                  <span className="text-cream text-lg">Delhi NCR, India</span>
                </div>
              </div>

              <a
                href="https://wa.me/918860561855?text=Hi%2C%20I'm%20interested%20in%20learning%20more%20about%20Rabbit%20%26%20Sparrow's%20design%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-terracotta text-cream px-8 py-3.5 text-sm font-medium tracking-wider hover:bg-terracotta/80 transition-colors mt-10"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Start a Conversation on WhatsApp
              </a>
            </div>

            {/* Right — Form */}
            <div className="bg-charcoal p-8 md:p-10">
              <h3 className="font-serif text-2xl font-medium text-cream mb-6">
                Send us a message.
              </h3>
              <form className="space-y-5">
                <div>
                  <label className="block text-[11px] tracking-[0.15em] uppercase text-gold mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full bg-deep border border-white/10 text-cream px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-[11px] tracking-[0.15em] uppercase text-gold mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    required
                    className="w-full bg-deep border border-white/10 text-cream px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors"
                    placeholder="Your phone number"
                  />
                </div>
                <div>
                  <label className="block text-[11px] tracking-[0.15em] uppercase text-gold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full bg-deep border border-white/10 text-cream px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors"
                    placeholder="Your email (optional)"
                  />
                </div>
                <div>
                  <label className="block text-[11px] tracking-[0.15em] uppercase text-gold mb-2">
                    Project Type
                  </label>
                  <select
                    className="w-full bg-deep border border-white/10 text-cream px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    <option>Terrace Garden</option>
                    <option>AC Gazebo / Prefab Outdoor Room</option>
                    <option>Exterior Landscaping</option>
                    <option>Swimming Pool</option>
                    <option>Luxury Interior</option>
                    <option>Not sure yet</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] tracking-[0.15em] uppercase text-gold mb-2">
                    Tell us about your project
                  </label>
                  <textarea
                    rows={4}
                    className="w-full bg-deep border border-white/10 text-cream px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors resize-none"
                    placeholder="Location, budget range, timeline, or just an idea..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-terracotta text-cream px-8 py-3.5 text-sm font-medium tracking-wider hover:bg-terracotta/80 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
