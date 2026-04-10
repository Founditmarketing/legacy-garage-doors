import Link from "next/link";
import {
  ArrowRight, Phone,
  DoorOpen, ClipboardCheck, Wrench, Search,
  Zap, CircleDot, CloudRain, Settings,
} from "lucide-react";
import CinematicHero from "@/components/CinematicHero";
import TrustMarquee from "@/components/TrustMarquee";
import ReviewMarquee from "@/components/ReviewMarquee";
import MultiStepForm from "@/components/MultiStepForm";

const services = [
  { title: "New Installations", icon: DoorOpen, slug: "new-installations", desc: "Custom doors engineered for your home — premium brands, expert installation." },
  { title: "Preventive Maintenance", icon: ClipboardCheck, slug: "preventive-maintenance", desc: "Routine care to avoid costly breakdowns and extend door life." },
  { title: "Expert Repairs", icon: Wrench, slug: "expert-repairs", desc: "Same-day service. Any issue, any brand — resolved fast." },
  { title: "Diagnostic Service", icon: Search, slug: "diagnostic-service", desc: "Precision fault detection & detailed reporting." },
  { title: "Spring Replacements", icon: Zap, slug: "spring-replacements", desc: "High-cycle springs with lifetime warranty." },
  { title: "Rollers & Cables", icon: CircleDot, slug: "rollers-and-cables", desc: "Silent nylon rollers for buttery-smooth operation." },
  { title: "Weather Seals", icon: CloudRain, slug: "weather-seals", desc: "Total protection from rain, pests, and drafts." },
  { title: "Operator Replacements", icon: Settings, slug: "operator-replacements", desc: "Smart operators for the modern home." },
];

export default function HomePage() {
  return (
    <div>
      {/* ── CINEMATIC HERO ─────────────────────── */}
      <CinematicHero />

      {/* ── TRUST BAR ──────────────────────────── */}
      <TrustMarquee />

      {/* ── SERVICES GRID ──────────────────────── */}
      <section className="py-20">
        <div className="section-wrap">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#3E6AE1] mb-3">
            What We Do
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-12">
            Everything your garage door needs.
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="group block p-6 bg-white/[0.02] border border-white/[0.05] rounded-2xl transition-all duration-300 hover:bg-white/[0.05] hover:border-[#3E6AE1]/20 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(62,106,225,0.08)]"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#3E6AE1]/10 border border-[#3E6AE1]/15 flex items-center justify-center mb-4 text-[#3E6AE1] group-hover:bg-[#3E6AE1]/15 transition-colors">
                    <Icon size={22} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-[15px] font-semibold mb-2">{s.title}</h3>
                  <p className="text-xs text-white/40 leading-relaxed font-light">{s.desc}</p>
                </Link>
              );
            })}
          </div>

          <div className="mt-10 flex gap-3 flex-wrap">
            <Link href="/book-online" className="btn-primary">
              Book a Service <ArrowRight size={16} />
            </Link>
            <Link href="/services" className="btn-ghost">
              All Services
            </Link>
          </div>
        </div>
      </section>

      {/* ── REVIEWS MARQUEE ────────────────────── */}
      <ReviewMarquee />

      {/* ── MULTI-STEP LEAD FORM ───────────────── */}
      <section className="py-20 bg-[#111219]">
        <div className="section-wrap">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#3E6AE1] mb-3">
                Get Started
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
                Tell us what you need.
              </h2>
              <p className="text-white/40 text-[15px] leading-relaxed font-light mb-8">
                Answer a few quick questions and we&apos;ll get back to you within 30 minutes with a plan and estimate. No pressure, no hidden fees.
              </p>

              <div className="space-y-4 text-sm text-white/30">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#3E6AE1]/10 flex items-center justify-center text-[#3E6AE1] text-xs">✓</div>
                  Free estimates — always
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#3E6AE1]/10 flex items-center justify-center text-[#3E6AE1] text-xs">✓</div>
                  Response within 30 minutes
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#3E6AE1]/10 flex items-center justify-center text-[#3E6AE1] text-xs">✓</div>
                  No hidden fees or upselling
                </div>
              </div>
            </div>

            <div className="bg-[#16171f] border border-white/[0.06] rounded-2xl p-8">
              <MultiStepForm />
            </div>
          </div>
        </div>
      </section>

      {/* ── BRAND PARTNERS ─────────────────────── */}
      <section className="py-16 border-y border-white/[0.04]">
        <div className="section-wrap text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/30 mb-8">
            Authorized Dealer & Service Partner
          </p>
          <div className="flex flex-wrap items-center justify-center gap-12 opacity-40">
            {["LiftMaster", "Clopay", "Chamberlain", "Amarr"].map((brand) => (
              <span key={brand} className="text-lg font-bold tracking-tight text-white/60">
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ──────────────────────────── */}
      <section className="py-20">
        <div className="section-wrap text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Your garage door won&apos;t fix itself.
          </h2>
          <p className="text-white/40 text-lg mb-8 max-w-lg mx-auto font-light">
            Call now for same-day service, or book online in 60 seconds.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="tel:6014367907" className="btn-primary text-base">
              <Phone size={18} /> Call (601) 436-7907
            </a>
            <Link href="/book-online" className="btn-ghost text-base">
              Book Online <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
