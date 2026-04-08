import type { Metadata } from "next";
import MultiStepForm from "@/components/MultiStepForm";

export const metadata: Metadata = {
  title: "Book Online",
  description: "Book a garage door service online. Same-day appointments available. Legacy Garage Doors, Hattiesburg, MS.",
};

export default function BookOnlinePage() {
  return (
    <div className="page-enter">
      <section className="pt-32 pb-16 text-center">
        <div className="section-wrap">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-brand)] mb-4">Book Online</p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Schedule Your Service.</h1>
          <p className="text-white/40 text-lg max-w-xl mx-auto font-light">
            Tell us what you need and we&apos;ll get back to you within 30 minutes. Same-day appointments available.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="section-wrap max-w-xl mx-auto">
          <div className="bg-[var(--color-surface)] border border-white/[0.06] rounded-2xl p-8">
            <MultiStepForm />
          </div>
          <p className="text-center text-xs text-white/20 mt-6">
            Prefer to call? <a href="tel:6019135975" className="text-[var(--color-brand)] hover:underline">601-913-5975</a> — available 24/7.
          </p>
        </div>
      </section>
    </div>
  );
}
