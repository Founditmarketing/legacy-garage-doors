import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Financing",
  description: "Flexible financing options for garage door installations and repairs. Quick application, instant decisions. Legacy Garage Doors, Hattiesburg, MS.",
};

const benefits = [
  { title: "Low Monthly Payments", desc: "Spread the cost over 12–60 months with payments that fit your budget." },
  { title: "Quick Application", desc: "Apply in under 5 minutes. Get an instant decision — no hard credit pull for pre-qualification." },
  { title: "0% Intro APR Available", desc: "Qualified buyers can enjoy interest-free financing for the first 12 months." },
  { title: "No Prepayment Penalties", desc: "Pay off your balance early whenever you want. No fees, no tricks." },
];

export default function FinancingPage() {
  return (
    <div className="page-enter">
      <section className="pt-32 pb-16 text-center">
        <div className="section-wrap">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-orange)] mb-4">Financing</p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Flexible Payment Options.</h1>
          <p className="text-white/40 text-lg max-w-xl mx-auto font-light">
            Get the garage door you want today with plans that fit your budget. Quick application, instant decisions.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="section-wrap">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="w-12 h-0.5 bg-gradient-to-r from-[var(--color-orange)] to-transparent mb-6" />
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-orange)] mb-4">Benefits</p>
              <h2 className="text-3xl font-semibold tracking-tight mb-6">
                Smart Financing for <span className="text-gradient-orange">Your Home Investment</span>
              </h2>
              <p className="text-[15px] text-white/50 leading-relaxed font-light mb-8">
                A new garage door is one of the best investments you can make in your home&apos;s value and security. We&apos;ve partnered with leading lenders to offer flexible solutions that make it easy.
              </p>
              <Link href="/book-online" className="btn-primary">
                Get Started <ArrowRight size={16} />
              </Link>
            </div>

            <div className="space-y-4">
              {benefits.map((b, i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:border-[var(--color-orange)]/15 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-lg bg-[var(--color-orange)]/10 flex items-center justify-center text-[var(--color-orange)] text-sm font-bold flex-shrink-0 mt-0.5">
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="text-base font-semibold mb-1">{b.title}</h3>
                      <p className="text-sm text-white/40 leading-relaxed font-light">{b.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
