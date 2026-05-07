import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Service Areas",
  description:
    "Legacy Garage Doors proudly serves 44+ cities across Southern Mississippi — from Hattiesburg to Gulfport, Biloxi, Natchez, and beyond. 24/7 garage door service.",
  keywords: [
    "garage door service Southern Mississippi",
    "garage door repair Hattiesburg",
    "garage door Gulfport",
    "garage door Biloxi",
    "garage door repair near me",
    "Legacy Garage Doors locations",
  ],
};

const cities = [
  "Bay St. Louis",
  "Biloxi",
  "Brandon",
  "Brookhaven",
  "Byram",
  "Collins",
  "Columbia",
  "Crystal Springs",
  "D'Iberville",
  "Diamondhead",
  "Ellisville",
  "Fayette",
  "Florence",
  "Flowood",
  "Gautier",
  "Gulf Hills",
  "Gulf Park Estates",
  "Gulfport",
  "Hattiesburg",
  "Hazlehurst",
  "Laurel",
  "Leaksville",
  "Liberty",
  "Long Beach",
  "Lucedale",
  "McComb",
  "Moss Point",
  "Natchez",
  "Ocean Springs",
  "Pascagoula",
  "Pass Christian",
  "Pearl",
  "Petal",
  "Picayune",
  "Poplarville",
  "Richton",
  "St. Martin",
  "Sumrall",
  "Tylertown",
  "Vancleave",
  "Waveland",
  "Waynsboro",
  "Wiggins",
  "Woodville",
];

const regions = [
  {
    name: "Gulf Coast",
    cities: [
      "Bay St. Louis", "Biloxi", "D'Iberville", "Diamondhead", "Gautier",
      "Gulf Hills", "Gulf Park Estates", "Gulfport", "Long Beach", "Moss Point",
      "Ocean Springs", "Pascagoula", "Pass Christian", "Waveland",
    ],
  },
  {
    name: "Pine Belt",
    cities: [
      "Collins", "Ellisville", "Hattiesburg", "Laurel", "Petal", "Richton",
      "Sumrall", "Wiggins",
    ],
  },
  {
    name: "Southwest Mississippi",
    cities: [
      "Brookhaven", "Columbia", "Crystal Springs", "Fayette", "Hazlehurst",
      "Liberty", "McComb", "Natchez", "Tylertown", "Woodville",
    ],
  },
  {
    name: "Central Mississippi",
    cities: [
      "Brandon", "Byram", "Florence", "Flowood", "Pearl",
    ],
  },
  {
    name: "Southeast Mississippi",
    cities: [
      "Leaksville", "Lucedale", "Picayune", "Poplarville", "St. Martin",
      "Vancleave", "Waynsboro",
    ],
  },
];

export default function ServiceAreasPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Legacy Garage Doors",
    telephone: "(601) 436-7907",
    url: "https://www.legacydoorsales.com",
    areaServed: cities.map((city) => ({
      "@type": "City",
      name: city,
      containedInPlace: {
        "@type": "State",
        name: "Mississippi",
      },
    })),
  };

  return (
    <div className="page-enter">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="pt-32 pb-16 text-center">
        <div className="section-wrap">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-brand)] mb-4">
            Service Areas
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Serving <span className="text-gradient-brand">All of Southern Mississippi.</span>
          </h1>
          <p className="text-white/40 text-lg max-w-2xl mx-auto font-light">
            From the Gulf Coast to Central MS — Legacy Garage Doors provides expert installation,
            repair, and 24/7 emergency service to {cities.length} cities and growing.
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="pb-12">
        <div className="section-wrap">
          <div className="grid grid-cols-3 gap-4 max-w-xl mx-auto">
            <div className="text-center p-5 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
              <div className="text-3xl font-bold text-white mb-1">{cities.length}</div>
              <div className="text-xs text-white/30 uppercase tracking-wider font-medium">Cities Served</div>
            </div>
            <div className="text-center p-5 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
              <div className="text-3xl font-bold text-white mb-1">24/7</div>
              <div className="text-xs text-white/30 uppercase tracking-wider font-medium">Emergency Service</div>
            </div>
            <div className="text-center p-5 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
              <div className="text-3xl font-bold text-white mb-1">5.0★</div>
              <div className="text-xs text-white/30 uppercase tracking-wider font-medium">Google Rated</div>
            </div>
          </div>
        </div>
      </section>

      {/* Regions */}
      <section className="pb-20">
        <div className="section-wrap">
          <div className="space-y-10">
            {regions.map((region) => (
              <div key={region.name}>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-8 h-8 rounded-lg bg-[var(--color-brand)]/10 flex items-center justify-center text-[var(--color-brand)]">
                    <MapPin size={16} />
                  </div>
                  <h2 className="text-xl font-semibold tracking-tight">{region.name}</h2>
                  <div className="flex-1 h-px bg-white/[0.06]" />
                  <span className="text-xs text-white/20 font-medium">{region.cities.length} cities</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                  {region.cities.map((city) => (
                    <div
                      key={city}
                      className="group p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:bg-[var(--color-brand)]/[0.06] hover:border-[var(--color-brand)]/20 transition-all duration-300"
                    >
                      <div className="flex items-center gap-2">
                        <MapPin
                          size={12}
                          className="text-[var(--color-brand)] opacity-40 group-hover:opacity-100 transition-opacity flex-shrink-0"
                        />
                        <span className="text-sm text-white/60 group-hover:text-white transition-colors font-light">
                          {city}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full city list for SEO (optional h3 reference) */}
      <section className="py-16 bg-[#111219] border-t border-white/[0.04]">
        <div className="section-wrap">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-brand)] mb-4">
              Complete Coverage
            </p>
            <h2 className="text-3xl font-semibold tracking-tight mb-4">
              All {cities.length} Cities We Serve
            </h2>
            <p className="text-white/40 text-[15px] max-w-xl mx-auto font-light">
              Don&apos;t see your city? Give us a call — we frequently service areas beyond this list and are always expanding our coverage.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
            {cities.map((city, i) => (
              <span
                key={city}
                className="px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.06] text-sm text-white/50 font-light"
              >
                {city}{i < cities.length - 1 ? "" : ""}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="section-wrap text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Need garage door service in your area?
          </h2>
          <p className="text-white/40 mb-8 max-w-md mx-auto font-light">
            Book online in 60 seconds or call us directly — we service your area with same-day availability.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/book-online" className="btn-primary">
              Book Online <ArrowRight size={16} />
            </Link>
            <a href="tel:6014367907" className="btn-ghost">
              <Phone size={16} /> Call (601) 436-7907
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
