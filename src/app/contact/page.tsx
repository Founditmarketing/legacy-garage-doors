import type { Metadata } from "next";
import { Phone, Mail, Clock, MapPin } from "lucide-react";
import MultiStepForm from "@/components/MultiStepForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Legacy Garage Doors — 24/7 emergency service, free estimates. Call 601-913-5975. Hattiesburg, MS.",
};

const contactInfo = [
  { icon: Phone, label: "Phone", value: "601-913-5975", href: "tel:6019135975" },
  { icon: Mail, label: "Email", value: "legacygaragedoorsllc@gmail.com", href: "mailto:legacygaragedoorsllc@gmail.com" },
  { icon: MapPin, label: "Service Area", value: "Hattiesburg, Petal, Purvis, Laurel & surrounding areas", href: undefined },
  { icon: Clock, label: "Hours", value: "24/7 Emergency Service Available", href: undefined },
];

export default function ContactPage() {
  return (
    <div className="page-enter">
      <section className="pt-32 pb-16 text-center">
        <div className="section-wrap">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-orange)] mb-4">Contact</p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Let&apos;s Talk.</h1>
          <p className="text-white/40 text-lg max-w-xl mx-auto font-light">
            Questions, emergencies, or free estimates — we&apos;re here for you, 24/7.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="section-wrap">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <div className="w-12 h-0.5 bg-gradient-to-r from-[var(--color-orange)] to-transparent mb-6" />
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-orange)] mb-4">Get in Touch</p>
              <h2 className="text-3xl font-semibold tracking-tight mb-6">
                We&apos;d love to <span className="text-gradient-orange">hear from you</span>.
              </h2>
              <p className="text-[15px] text-white/50 leading-relaxed font-light mb-10">
                Whether you need an emergency repair at midnight or want to schedule a free estimate for a new installation, our team is ready to help.
              </p>
              <div className="space-y-4">
                {contactInfo.map((c) => {
                  const Icon = c.icon;
                  const inner = (
                    <div className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-[var(--color-orange)]/15 transition-colors">
                      <div className="w-10 h-10 rounded-xl bg-[var(--color-orange)]/10 flex items-center justify-center text-[var(--color-orange)] flex-shrink-0">
                        <Icon size={18} />
                      </div>
                      <div>
                        <div className="text-xs text-white/30 uppercase tracking-wider font-semibold mb-1">{c.label}</div>
                        <div className="text-sm text-white/70 font-light">{c.value}</div>
                      </div>
                    </div>
                  );
                  return c.href ? <a key={c.label} href={c.href}>{inner}</a> : <div key={c.label}>{inner}</div>;
                })}
              </div>
            </div>
            <div className="bg-[var(--color-surface)] border border-white/[0.06] rounded-2xl p-8">
              <MultiStepForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
