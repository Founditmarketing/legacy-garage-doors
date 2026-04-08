import { Shield, Star, Clock, BadgeCheck, Award } from "lucide-react";

const badges = [
  { icon: Shield, label: "BBB Accredited" },
  { icon: Star, label: "5.0★ Google Rated" },
  { icon: Clock, label: "24/7 Emergency Service" },
  { icon: BadgeCheck, label: "Licensed & Insured" },
  { icon: Award, label: "SSA Certified" },
  { icon: Shield, label: "Lifetime Warranty" },
  { icon: Star, label: "Family Owned Since 2014" },
];

export default function TrustMarquee() {
  const doubled = [...badges, ...badges];

  return (
    <div className="border-y border-white/[0.06] bg-white/[0.02] overflow-hidden py-4">
      <div className="marquee-track">
        {doubled.map((b, i) => {
          const Icon = b.icon;
          return (
            <div
              key={`${b.label}-${i}`}
              className="flex items-center gap-2 px-8 whitespace-nowrap"
            >
              <Icon size={15} className="text-[var(--color-brand)]" />
              <span className="text-sm font-medium text-white/50">{b.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
