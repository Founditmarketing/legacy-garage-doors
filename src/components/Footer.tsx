import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, Clock, MapPin, ExternalLink } from "lucide-react";

const serviceLinks = [
  { name: "New Installations", href: "/services/new-installations" },
  { name: "Expert Repairs", href: "/services/expert-repairs" },
  { name: "Spring Replacements", href: "/services/spring-replacements" },
  { name: "Preventive Maintenance", href: "/services/preventive-maintenance" },
  { name: "Weather Seals", href: "/services/weather-seals" },
  { name: "Operator Replacements", href: "/services/operator-replacements" },
];

const companyLinks = [
  { name: "About", href: "/about" },
  { name: "Service Areas", href: "/service-areas" },
  { name: "Financing", href: "/financing" },
  { name: "Contact", href: "/contact" },
  { name: "Book Online", href: "/book-online" },
];

export default function Footer() {
  return (
    <footer className="bg-[#111219] border-t border-white/[0.04]">
      <div className="section-wrap py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link href="/">
              <Image
                src="/images/logo-shield.png"
                alt="Legacy Garage Doors"
                width={240}
                height={240}
                className="h-44 w-auto mb-4"
                style={{ filter: "brightness(1.15)" }}
              />
            </Link>
            <p className="text-sm text-white/65 leading-relaxed max-w-[220px] mb-4 font-light">
              Family-owned &amp; operated. Serving Hattiesburg &amp; Southern MS for over 10 years.
            </p>
            <a
              href="https://www.facebook.com/legacygaragedoorsllc"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-white/30 hover:text-[var(--color-brand)] transition-colors"
            >
              <ExternalLink size={16} /> Facebook
            </a>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-brand)] mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((s) => (
                <li key={s.name}>
                  <Link
                    href={s.href}
                    className="text-sm text-white/65 hover:text-white transition-colors font-light"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-brand)] mb-5">
              Company
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((c) => (
                <li key={c.name}>
                  <Link
                    href={c.href}
                    className="text-sm text-white/65 hover:text-white transition-colors font-light"
                  >
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-brand)] mb-5">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-white/65 font-light">
                <Phone size={15} className="mt-0.5 flex-shrink-0 text-[var(--color-brand)]" />
                <a href="tel:6014367907" className="hover:text-white transition-colors">
                  (601) 436-7907
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/65 font-light">
                <Mail size={15} className="mt-0.5 flex-shrink-0 text-[var(--color-brand)]" />
                <a href="mailto:seth@legacydoorsales.com" className="hover:text-white transition-colors">seth@legacydoorsales.com</a>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/65 font-light">
                <MapPin size={15} className="mt-0.5 flex-shrink-0 text-[var(--color-brand)]" />
                <span>Hattiesburg, MS &amp; surrounding areas</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/65 font-light">
                <Clock size={15} className="mt-0.5 flex-shrink-0 text-[var(--color-brand)]" />
                <span>24/7 Emergency Service</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.04]">
        <div className="section-wrap py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/20 font-light">
            © {new Date().getFullYear()} Legacy Garage Doors LLC. All rights reserved.
          </p>
          <p className="text-xs text-white/20 font-light">
            Licensed &amp; Insured · BBB Accredited · SSA Certified
          </p>
        </div>
      </div>
    </footer>
  );
}
