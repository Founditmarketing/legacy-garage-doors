import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Phone } from "lucide-react";

const serviceData: Record<string, {
  title: string;
  desc: string;
  image: string;
  imageAlt: string;
  paragraphs: string[];
  relatedServices: string[];
}> = {
  "new-installations": {
    title: "New Garage Door Sales & Installation",
    desc: "Premium garage door installation in Hattiesburg, MS. Clopay, Amarr, Chamberlain, LiftMaster.",
    image: "/images/service-new-installations.png",
    imageAlt: "Beautiful brown carriage-style garage door with arched windows on residential home",
    paragraphs: [
      "Whether you're building a new home or replacing an aging door, Legacy Garage Doors offers a full selection of premium residential and commercial garage doors from top manufacturers including Clopay, Amarr, Chamberlain, and LiftMaster. We work directly with you to match the right style, material, and insulation level to your home's architecture and your budget. Every installation is handled by our own trained technicians — never subcontracted — so you get consistent quality from start to finish.",
      "Our installation process includes a full structural assessment of your opening, precise measurements, and professional mounting with all hardware tested and adjusted before we leave. We don't cut corners: every spring is properly tensioned, every seal is flush, and every safety sensor is calibrated. The result is a door that operates quietly, looks sharp, and is backed by our lifetime warranty on labor.",
    ],
    relatedServices: ["preventive-maintenance", "operator-replacements", "weather-seals"],
  },
  "preventive-maintenance": {
    title: "Preventive Maintenance",
    desc: "Annual garage door maintenance and inspection services in Hattiesburg, MS.",
    image: "/images/service-preventive-maintenance.png",
    imageAlt: "Gray carriage-style garage door with decorative hardware and arched windows",
    paragraphs: [
      "Most garage door failures are preventable. Our maintenance program includes a full inspection of springs, cables, rollers, tracks, hinges, and weatherstripping — along with lubrication of all moving parts and a tension adjustment to ensure balanced operation. We catch small problems before they become expensive emergencies, which is why customers who schedule regular maintenance rarely need emergency repair calls.",
      "We recommend annual maintenance at a minimum, though homes in Southern Mississippi's humid climate benefit from biannual service. Each visit includes a written report of your door's condition so you always know where things stand. Our maintenance customers also receive priority scheduling and discounted parts if a component does need replacing down the line.",
    ],
    relatedServices: ["expert-repairs", "spring-replacements", "rollers-and-cables"],
  },
  "expert-repairs": {
    title: "Expert Repairs",
    desc: "Same-day garage door repair service in Hattiesburg, MS. All brands serviced.",
    image: "/images/service-expert-repairs.png",
    imageAlt: "Interior view of garage door mechanical system showing tracks, springs, and operator",
    paragraphs: [
      "Garage doors break at the worst possible times — that's why Legacy offers same-day repair service with 24/7 emergency availability. Whether it's a snapped cable, a motor that stops responding, a door that's jumped its track, or panels damaged by weather or impact, our technicians have the parts and experience to get you back up and running fast. We service all major brands and models, residential and commercial.",
      "Every repair starts with an honest diagnosis. We'll tell you exactly what's wrong, what it costs to fix, and whether repair or replacement makes more financial sense for your situation. There are no hidden fees, no upselling, and no pressure. Our trucks carry the most common replacement parts so the majority of repairs are completed in a single visit.",
    ],
    relatedServices: ["diagnostic-service", "spring-replacements", "rollers-and-cables"],
  },
  "diagnostic-service": {
    title: "Diagnostic Service Calls",
    desc: "Professional garage door diagnostic and inspection in Hattiesburg, MS.",
    image: "/images/service-diagnostic-service.png",
    imageAlt: "Luxury home with dual garage doors and stone column exterior",
    paragraphs: [
      "Not every garage door problem is obvious. Strange noises, intermittent failures, uneven movement, or a door that \"just doesn't feel right\" all point to underlying issues that need professional assessment. Our diagnostic service call is a thorough, systematic inspection where we test every component of your door system — mechanical, electrical, and structural — to identify exactly what's going on.",
      "You'll receive a clear, written explanation of our findings along with prioritized repair recommendations. We believe in transparency: you'll understand the problem and the options before any work begins. If you choose to proceed with repairs on the spot, the diagnostic fee is applied toward the cost of the work.",
    ],
    relatedServices: ["expert-repairs", "preventive-maintenance", "operator-replacements"],
  },
  "spring-replacements": {
    title: "Spring Replacements",
    desc: "Garage door spring replacement in Hattiesburg, MS. High-cycle springs, lifetime warranty.",
    image: "/images/service-spring-replacements.png",
    imageAlt: "Close-up of electrical wiring and circuit breakers for garage door system",
    paragraphs: [
      "Garage door springs are under extreme tension and are one of the most dangerous components to work with — this is never a DIY job. Legacy technicians are trained and equipped to safely remove and replace both torsion and extension springs. We use high-cycle springs rated for 20,000+ cycles, which means they'll last significantly longer than standard-grade components. Every spring replacement includes a full system rebalancing so your door tracks smoothly and your opener isn't working harder than it needs to.",
      "Most spring replacements are completed within an hour. We always replace springs in matched pairs — even if only one has broken — because the second spring is almost certainly near the end of its life as well. Replacing both at once saves you from a second service call and ensures even tension across the system. All spring work is covered by our lifetime labor warranty.",
    ],
    relatedServices: ["rollers-and-cables", "expert-repairs", "preventive-maintenance"],
  },
  "rollers-and-cables": {
    title: "Rollers & Cables",
    desc: "Garage door roller and cable replacement in Hattiesburg, MS. Nylon rollers, aircraft-grade cables.",
    image: "/images/service-rollers-and-cables.png",
    imageAlt: "Close-up detail of wooden garage door panels with glass windows",
    paragraphs: [
      "Worn rollers are the number one cause of noisy garage doors. Legacy replaces standard steel rollers with precision-bearing nylon rollers that reduce operating noise by up to 75%. The difference is immediate and dramatic — a door that used to rattle the house will glide open almost silently. We also inspect and replace frayed or damaged cables, which are critical safety components that prevent the door from free-falling if a spring fails.",
      "Cable and roller replacements are typically completed in under an hour. We use aircraft-grade galvanized steel cables that resist corrosion in Mississippi's humid conditions. During every roller or cable job, we also inspect the track alignment and hinges, since these components work together as a system. If anything else needs attention, we'll let you know before proceeding.",
    ],
    relatedServices: ["spring-replacements", "preventive-maintenance", "expert-repairs"],
  },
  "weather-seals": {
    title: "Weather Seals",
    desc: "Garage door weather stripping and seal replacement in Hattiesburg, MS.",
    image: "/images/service-weather-seals.png",
    imageAlt: "White garage door with raised panels and stone exterior showing weather seal at bottom",
    paragraphs: [
      "Mississippi's heat, humidity, and occasional storms take a toll on garage door weatherstripping. Cracked or missing seals let in rain, dust, insects, and hot air — turning your garage into an uncomfortable space and driving up cooling costs for the rest of your home. Legacy replaces bottom seals, side seals, and header seals with commercial-grade EPDM rubber that stays flexible and effective for years, even in extreme temperatures.",
      "Proper weather sealing also protects anything you store in your garage — tools, vehicles, seasonal items — from moisture damage and pest intrusion. Installation is fast and affordable, and the energy savings alone often pay for the service within the first season. We also check the threshold and floor contact during installation to make sure you get a tight seal all the way around.",
    ],
    relatedServices: ["preventive-maintenance", "new-installations", "expert-repairs"],
  },
  "operator-replacements": {
    title: "Operator Replacements",
    desc: "Garage door opener replacement in Hattiesburg, MS. LiftMaster, Chamberlain smart openers.",
    image: "/images/service-operator-replacements.png",
    imageAlt: "Interior view of garage door with ceiling-mounted operator and track system",
    paragraphs: [
      "If your garage door opener is more than 10 years old, it's likely louder, slower, and less secure than modern alternatives. Legacy installs smart-enabled operators from LiftMaster and Chamberlain that feature ultra-quiet belt-drive motors, built-in WiFi, battery backup, and integration with home automation systems. You can open, close, and monitor your garage from anywhere using your phone.",
      "We handle the full replacement process: removing your old unit, installing the new operator, programming remotes and keypads, setting force and travel limits, and testing safety reversal sensors. We'll also walk you through the app setup so you're comfortable using all the smart features before we leave. Every operator installation includes our lifetime labor warranty.",
    ],
    relatedServices: ["new-installations", "expert-repairs", "diagnostic-service"],
  },
};

const slugToTitle: Record<string, string> = Object.fromEntries(
  Object.entries(serviceData).map(([slug, data]) => [slug, data.title])
);

export function generateStaticParams() {
  return Object.keys(serviceData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceData[slug];
  if (!service) return { title: "Service Not Found" };
  return {
    title: service.title,
    description: service.desc,
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = serviceData[slug];
  if (!service) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.desc,
    provider: {
      "@type": "LocalBusiness",
      name: "Legacy Garage Doors",
      telephone: "601-913-5975",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Hattiesburg",
        addressRegion: "MS",
      },
    },
    areaServed: "Hattiesburg, MS and surrounding areas",
    image: `https://legacy-garage-doors.vercel.app${service.image}`,
  };

  return (
    <div className="page-enter">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Image */}
      <section className="relative h-[340px] md:h-[420px] overflow-hidden">
        <Image
          src={service.image}
          alt={service.imageAlt}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1E] via-[#1C1C1E]/60 to-transparent" />
      </section>

      {/* Content */}
      <section className="relative -mt-20 z-10 pb-8">
        <div className="section-wrap">
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-sm text-white/40 hover:text-[#FF6B2C] transition-colors mb-8"
          >
            <ArrowLeft size={14} /> All Services
          </Link>

          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#FF6B2C] mb-4">
            Service Detail
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-3 max-w-2xl leading-[1.1]">
            {service.title}
          </h1>
          <div className="w-16 h-1 rounded-full bg-gradient-to-r from-[#FF6B2C] to-[#FF8A50] mt-6" />
        </div>
      </section>

      {/* Body */}
      <section className="pb-16">
        <div className="section-wrap max-w-3xl">
          {service.paragraphs.map((p, i) => (
            <p key={i} className="text-[17px] text-white/60 leading-[1.85] mb-7 font-light">
              {p}
            </p>
          ))}

          <div className="mt-12 flex flex-wrap gap-3">
            <Link href="/book-online" className="btn-primary">
              Schedule This Service <ArrowRight size={16} />
            </Link>
            <a href="tel:6019135975" className="btn-ghost">
              <Phone size={16} /> 601-913-5975
            </a>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-14 border-t border-white/[0.04]">
        <div className="section-wrap">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#FF6B2C] mb-5">
            Related Services
          </p>
          <div className="flex flex-wrap gap-3">
            {service.relatedServices.map((rs) => (
              <Link
                key={rs}
                href={`/services/${rs}`}
                className="px-5 py-3 rounded-xl bg-white/[0.03] border border-white/[0.06] text-sm text-white/50 hover:text-white hover:bg-[#FF6B2C]/10 hover:border-[#FF6B2C]/20 transition-all"
              >
                {slugToTitle[rs] || rs}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
