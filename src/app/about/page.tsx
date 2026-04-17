import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ExternalLink, CheckCircle } from "lucide-react";

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

const awards = [
  {
    title: "BBB Accredited Business",
    subtitle: "A- Rated · Accredited since 2026",
    icon: "★",
    href: "https://www.bbb.org/us/ms/purvis/profile/garage-door-repair/legacy-garage-doors-llc-0523-235906838",
  },
  {
    title: "Angi Super Service Award",
    subtitle: "5.0 Rating · Angi Approved",
    icon: "🏆",
    href: "https://www.homeadvisor.com/rated.legacygaragedoors.157120082.html",
  },
  {
    title: "5.0★ Google Rating",
    subtitle: "Top-rated in Southern Mississippi",
    icon: "⭐",
    href: undefined,
  },
  {
    title: "Thumbtack Pro",
    subtitle: "Verified & Reviewed",
    icon: "👍",
    href: "https://www.thumbtack.com/ms/purvis/garage-door-repair/legacy-garage-doors/service/559853482823909377",
  },
];

const brands = [
  { name: "Clopay", role: "Authorized Dealer" },
  { name: "Amarr", role: "Authorized Dealer" },
  { name: "LiftMaster", role: "Service Partner" },
  { name: "Chamberlain", role: "Service Partner" },
  { name: "Genie", role: "Service Partner" },
  { name: "Marantec", role: "Service Partner" },
  { name: "Linear", role: "Service Partner" },
];

export default function AboutPage() {
  return (
    <div className="page-enter">
      <section className="pt-32 pb-16 text-center">
        <div className="section-wrap">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-brand)] mb-4">About Legacy</p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Craftsmanship Meets Integrity.</h1>
          <p className="text-white/65 text-lg max-w-xl mx-auto font-light">
            Family-owned and operated, serving Southern Mississippi with honesty and precision for over a decade.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="section-wrap">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="w-12 h-0.5 bg-gradient-to-r from-[var(--color-brand)] to-transparent mb-6" />
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-brand)] mb-4">Our Story</p>
              <h2 className="text-3xl font-semibold tracking-tight mb-6">
                Servicing Garage Doors for <span className="text-gradient-brand">Over a Decade</span>
              </h2>
              <div className="space-y-5 text-[15px] text-white/75 leading-relaxed font-light mb-8">
                <p>
                  Legacy Garage Doors was founded on a simple idea: treat every customer&apos;s home like it&apos;s your own. What started as a small family operation out of Hattiesburg, Mississippi, has grown into the region&apos;s most trusted garage door company — serving Pine Belt families and businesses with honest work, fair pricing, and genuine care.
                </p>
                <p>
                  Owners Seth and Jessica Neumann and their team bring over a decade of hands-on experience to every job. Whether it&apos;s a late-night emergency or a full custom installation, they show up, do it right, and stand behind their work with a lifetime warranty. No shortcuts, no runarounds, no excuses.
                </p>
                <p>
                  We&apos;re proud to be BBB Accredited, SSA Certified, and backed by a 5.0-star Google rating. But the credential we value most? The families who call us back — year after year.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {values.map((v) => (
                  <div key={v.label} className="flex items-center gap-2.5">
                    <CheckCircle size={14} className="text-[var(--color-brand)] flex-shrink-0" />
                    <span className="text-sm text-white/75 font-medium">{v.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="/images/about-new-door.jpg"
                  alt="New garage door installation by Legacy Garage Doors"
                  fill
                  className="object-cover"
                  quality={85}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
              <div className="relative w-full aspect-[16/7] rounded-2xl overflow-hidden">
                <Image
                  src="/images/about-garage.jpg"
                  alt="Legacy Garage Doors premium craftsman installation"
                  fill
                  className="object-cover"
                  quality={85}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── AWARDS & RECOGNITION ────────────────── */}
      <section className="py-20 bg-[#111219] border-y border-white/[0.04]">
        <div className="section-wrap">
          <div className="text-center mb-14">
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-[var(--color-brand)] to-transparent mx-auto mb-6" />
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-brand)] mb-4">
              Awards & Recognition
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
              Trusted by <span className="text-gradient-brand">Industry Leaders</span>
            </h2>
            <p className="text-white/65 text-[15px] max-w-xl mx-auto font-light">
              Our work speaks for itself — but these organizations have recognized it too.
            </p>
          </div>

          {/* Award Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            {awards.map((award) => {
              const inner = (
                <div className="group relative p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:bg-[var(--color-brand)]/[0.06] hover:border-[var(--color-brand)]/20 transition-all duration-300 text-center h-full">
                  <div className="text-4xl mb-4">{award.icon}</div>
                  <h3 className="text-[15px] font-semibold text-white mb-2">{award.title}</h3>
                  <p className="text-xs text-white/40 font-light leading-relaxed">{award.subtitle}</p>
                  {award.href && (
                    <div className="mt-4 flex items-center justify-center gap-1 text-xs text-[var(--color-brand)] opacity-0 group-hover:opacity-100 transition-opacity">
                      <span>View Profile</span>
                      <ExternalLink size={10} />
                    </div>
                  )}
                </div>
              );

              return award.href ? (
                <a key={award.title} href={award.href} target="_blank" rel="noopener noreferrer">
                  {inner}
                </a>
              ) : (
                <div key={award.title}>{inner}</div>
              );
            })}
          </div>

          {/* Authorized Brands */}
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/30 mb-6">
              Authorized Dealer & Service Partner
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
              {brands.map((brand) => (
                <div key={brand.name} className="text-center group">
                  <span className="text-lg font-bold tracking-tight text-white/50 group-hover:text-white/70 transition-colors">
                    {brand.name}
                  </span>
                  <div className="text-[10px] text-white/20 uppercase tracking-wider mt-0.5 font-medium">
                    {brand.role}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Platform Links */}
          <div className="mt-14 pt-10 border-t border-white/[0.04]">
            <p className="text-center text-xs text-white/25 mb-5 uppercase tracking-wider font-semibold">
              Find Us On
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { name: "BBB", href: "https://www.bbb.org/us/ms/purvis/profile/garage-door-repair/legacy-garage-doors-llc-0523-235906838" },
                { name: "Angi", href: "https://www.homeadvisor.com/rated.legacygaragedoors.157120082.html" },
                { name: "Thumbtack", href: "https://www.thumbtack.com/ms/purvis/garage-door-repair/legacy-garage-doors/service/559853482823909377" },
                { name: "Yelp", href: "https://www.yelp.com/biz/legacy-garage-doors-purvis" },
                { name: "Nextdoor", href: "https://nextdoor.com/pages/legacy-garage-doors-purvis-ms/" },
                { name: "Porch", href: "https://pro.porch.com/purvis-ms/garage-door-specialists/legacy-garage-doors-167520379/pp" },
                { name: "Facebook", href: "https://www.facebook.com/p/Legacy-Garage-Doors-61578633631605/" },
                { name: "Instagram", href: "https://www.instagram.com/legacydoorsales/" },
              ].map((p) => (
                <a
                  key={p.name}
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.06] text-xs text-white/40 hover:text-white hover:bg-[var(--color-brand)]/10 hover:border-[var(--color-brand)]/20 transition-all font-medium flex items-center gap-1.5"
                >
                  {p.name}
                  <ExternalLink size={9} className="opacity-40" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="section-wrap text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Ready to work with the best?</h2>
          <p className="text-white/65 mb-8 max-w-md mx-auto font-light">See why Southern Mississippi trusts Legacy for every garage door job.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/book-online" className="btn-primary">Book Online <ArrowRight size={16} /></Link>
            <Link href="/services" className="btn-ghost">Our Services</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
