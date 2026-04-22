import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight, DoorOpen, ClipboardCheck, Wrench, Search,
  Zap, CircleDot, CloudRain, Settings,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Our Services",
  description: "Full-service garage door experts — installations, repairs, springs, cables, weather seals, and more. 24/7 emergency service in Hattiesburg, MS.",
};

const allServices = [
  { title: "New Garage Door Sales & Installation", slug: "new-installations", desc: "Upgrade your home's curb appeal with premium brands — Clopay, Amarr, Chamberlain — and professional installation.", Icon: DoorOpen },
  { title: "Preventative Maintenance", slug: "preventive-maintenance", desc: "Keep your system running smoothly and avoid costly emergency repairs with routine care and inspection.", Icon: ClipboardCheck },
  { title: "Repairs on Doors & Operators", slug: "expert-repairs", desc: "Broken panels, malfunctioning motors, misaligned tracks — we repair all makes and models, same day.", Icon: Wrench },
  { title: "Diagnostic Service Calls", slug: "diagnostic-service", desc: "Expert troubleshooting that identifies the root cause before a single wrench turns.", Icon: Search },
  { title: "Spring Replacements", slug: "spring-replacements", desc: "Safe, professional replacement of high-tension springs by trained technicians.", Icon: Zap },
  { title: "Rollers & Cables", slug: "rollers-and-cables", desc: "Smooth out noisy operation and ensure safety with fresh nylon rollers and heavy-duty cables.", Icon: CircleDot },
  { title: "Weather Seals", slug: "weather-seals", desc: "Protect your garage from pests, dust, and drafts with professional weather stripping.", Icon: CloudRain },
  { title: "Operator Replacements", slug: "operator-replacements", desc: "Modern, quiet, smart-connected openers from LiftMaster and Chamberlain.", Icon: Settings },
];

export default function ServicesPage() {
  return (
    <div className="page-enter">
      {/* Hero */}
      <section className="pt-32 pb-16 text-center">
        <div className="section-wrap">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-brand)] mb-4">Our Services</p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Expert Care for Every Door.</h1>
          <p className="text-white/40 text-lg max-w-xl mx-auto font-light">
            From preventive maintenance to full custom installations — we ensure your garage door operates safely and efficiently.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="pb-20">
        <div className="section-wrap">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {allServices.map((s) => {
              const Icon = s.Icon;
              return (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="group block p-7 bg-white/[0.02] border border-white/[0.05] rounded-2xl transition-all duration-300 hover:bg-white/[0.05] hover:border-[var(--color-brand)]/20 hover:-translate-y-1"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[var(--color-brand)]/10 border border-[var(--color-brand)]/15 flex items-center justify-center mb-5 text-[var(--color-brand)] group-hover:bg-[var(--color-brand)]/15 transition-colors">
                    <Icon size={24} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 tracking-tight">{s.title}</h3>
                  <p className="text-sm text-white/40 leading-relaxed mb-5 font-light">{s.desc}</p>
                  <span className="text-sm font-medium text-[var(--color-brand)] flex items-center gap-1 group-hover:gap-2 transition-all">
                    Learn More <ArrowRight size={14} />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#141416] border-t border-white/[0.04]">
        <div className="section-wrap text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Not sure what you need?</h2>
          <p className="text-white/40 mb-8 max-w-md mx-auto font-light">Call us — we&apos;ll diagnose the issue and recommend the right solution. Free estimates, always.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/book-online" className="btn-primary">Book Online <ArrowRight size={16} /></Link>
            <a href="tel:6014367907" className="btn-ghost">Call (601) 436-7907</a>
          </div>
        </div>
      </section>
    </div>
  );
}
