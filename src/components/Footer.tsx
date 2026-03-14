import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-charcoal text-stone">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="font-serif text-lg tracking-[0.2em] uppercase text-gold mb-4">
              Rabbit & Sparrow
            </div>
            <p className="text-sm text-stone/70 max-w-sm leading-relaxed">
              Luxury terrace gardens, AC gazebos, and outdoor living
              environments for Delhi NCR&apos;s most discerning homeowners.
            </p>
            <p className="font-serif italic text-gold/80 mt-4 text-sm">
              Where concept meets craft.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-cream text-sm font-medium tracking-wide mb-4">
              Studio
            </h4>
            <div className="space-y-2.5">
              {[
                { href: "/about", label: "About Us" },
                { href: "/services", label: "Services" },
                { href: "/portfolio", label: "Portfolio" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-stone/60 hover:text-gold transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-cream text-sm font-medium tracking-wide mb-4">
              Contact
            </h4>
            <div className="space-y-2.5 text-sm text-stone/60">
              <a
                href="tel:+919821100481"
                className="block hover:text-gold transition-colors"
              >
                98211 00481
              </a>
              <a
                href="https://wa.me/918860561855"
                className="block hover:text-gold transition-colors"
              >
                WhatsApp: 8860561855
              </a>
              <a
                href="mailto:rabbit.sparrow31@gmail.com"
                className="block hover:text-gold transition-colors"
              >
                rabbit.sparrow31@gmail.com
              </a>
              <a
                href="https://www.instagram.com/rabbit.sparrow/"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-gold transition-colors"
              >
                @rabbit.sparrow
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 mt-12 pt-6 text-center text-xs text-stone/40">
          &copy; {new Date().getFullYear()} Rabbit & Sparrow. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
