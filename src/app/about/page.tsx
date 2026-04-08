import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description: "Family-owned and operated, Legacy Garage Doors has served Southern Mississippi for over 10 years with honesty, precision, and 24/7 availability.",
};

const values = [
  { label: "Family Owned & Operated", emoji: "🏠" },
  { label: "10+ Years Experience", emoji: "⚡" },
  { label: "24/7 Emergency Service", emoji: "🕐" },
  { label: "Licensed & Insured", emoji: "✓" },
  { label: "BBB Accredited", emoji: "★" },
  { label: "SSA Certified", emoji: "🛡" },
];

export default function AboutPage() {
  return (
    <div className="page-enter">
      <section className="pt-32 pb-16 text-center">
        <div className="section-wrap">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-orange)] mb-4">About Legacy</p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Craftsmanship Meets Integrity.</h1>
          <p className="text-white/40 text-lg max-w-xl mx-auto font-light">
            Family-owned and operated, serving Southern Mississippi with honesty and precision for over a decade.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="section-wrap">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="w-12 h-0.5 bg-gradient-to-r from-[var(--color-orange)] to-transparent mb-6" />
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-orange)] mb-4">Our Story</p>
              <h2 className="text-3xl font-semibold tracking-tight mb-6">
                Servicing Garage Doors for <span className="text-gradient-orange">Over a Decade</span>
              </h2>
              <div className="space-y-5 text-[15px] text-white/50 leading-relaxed font-light">
                <p>
                  Legacy Garage Doors was founded on a simple idea: treat every customer&apos;s home like it&apos;s your own. What started as a one-man operation out of Hattiesburg, Mississippi, has grown into the region&apos;s most trusted garage door company — serving Pine Belt families and businesses with honest work, fair pricing, and genuine care.
                </p>
                <p>
                  Owner Seth and his team bring over a decade of hands-on experience to every job. Whether it&apos;s a late-night emergency or a full custom installation, we show up, do it right, and stand behind our work with a lifetime warranty. No shortcuts, no runarounds, no excuses.
                </p>
                <p>
                  We&apos;re proud to be BBB Accredited, SSA Certified, and backed by a 5.0-star Google rating. But the credential we value most? The families who call us back — year after year.
                </p>
              </div>
            </div>

            <div>
              <div className="grid grid-cols-2 gap-3">
                {values.map((v) => (
                  <div
                    key={v.label}
                    className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.05] text-center"
                  >
                    <div className="text-2xl mb-3">{v.emoji}</div>
                    <div className="text-sm font-medium text-white/70">{v.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#141416] border-t border-white/[0.04]">
        <div className="section-wrap text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Ready to work with the best?</h2>
          <p className="text-white/40 mb-8 max-w-md mx-auto font-light">See why Hattiesburg trusts Legacy for every garage door job.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/book-online" className="btn-primary">Book Online <ArrowRight size={16} /></Link>
            <Link href="/services" className="btn-ghost">Our Services</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
