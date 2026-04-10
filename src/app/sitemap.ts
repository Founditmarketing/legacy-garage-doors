import type { MetadataRoute } from "next";

const services = [
  "new-installations", "preventive-maintenance", "expert-repairs",
  "diagnostic-service", "spring-replacements", "rollers-and-cables",
  "weather-seals", "operator-replacements",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://legacy-garage-doors.vercel.app";
  const pages = [
    { url: base, lastModified: new Date(), priority: 1.0 },
    { url: `${base}/services`, lastModified: new Date(), priority: 0.9 },
    { url: `${base}/service-areas`, lastModified: new Date(), priority: 0.85 },
    { url: `${base}/about`, lastModified: new Date(), priority: 0.7 },
    { url: `${base}/financing`, lastModified: new Date(), priority: 0.7 },
    { url: `${base}/contact`, lastModified: new Date(), priority: 0.8 },
    { url: `${base}/book-online`, lastModified: new Date(), priority: 0.9 },
    ...services.map((s) => ({
      url: `${base}/services/${s}`,
      lastModified: new Date(),
      priority: 0.8,
    })),
  ];
  return pages;
}
