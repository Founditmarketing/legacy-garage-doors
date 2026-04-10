import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBottomDock from "@/components/MobileBottomDock";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Legacy Garage Doors | 24/7 Service — Hattiesburg, MS",
    template: "%s | Legacy Garage Doors",
  },
  description:
    "Family-owned garage door experts serving Southern Mississippi. 24/7 emergency service, lifetime warranty, 5.0★ Google rated. Call (601) 436-7907.",
  keywords: [
    "garage door repair",
    "garage door installation",
    "Hattiesburg MS",
    "emergency garage door service",
    "garage door springs",
    "Legacy Garage Doors",
  ],
  openGraph: {
    title: "Legacy Garage Doors | 24/7 Service — Hattiesburg, MS",
    description:
      "Family-owned garage door experts. 24/7 emergency service, lifetime warranty, 5.0★ Google rated.",
    type: "website",
    locale: "en_US",
    siteName: "Legacy Garage Doors",
    images: [
      {
        url: "https://legacy-garage-doors.vercel.app/images/og-image.png",
        width: 1024,
        height: 1024,
        alt: "Legacy Garage Doors — Service You Can Trust",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Legacy Garage Doors | 24/7 Service — Hattiesburg, MS",
    description:
      "Family-owned garage door experts. 24/7 emergency service, lifetime warranty, 5.0★ Google rated.",
    images: ["https://legacy-garage-doors.vercel.app/images/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable} data-scroll-behavior="smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Legacy Garage Doors",
              description: "Family-owned garage door experts serving Southern Mississippi. 24/7 emergency service, lifetime warranty.",
              telephone: "(601) 436-7907",
              email: "seth@legacydoorsales.com",
              url: "https://legacy-garage-doors.vercel.app",
              image: "https://legacy-garage-doors.vercel.app/images/logo-shield.png",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Hattiesburg",
                addressRegion: "MS",
                addressCountry: "US",
              },
              geo: { "@type": "GeoCoordinates", latitude: 31.3271, longitude: -89.2903 },
              areaServed: ["Bay St. Louis","Biloxi","Brandon","Brookhaven","Byram","Collins","Columbia","Crystal Springs","D'Iberville","Diamondhead","Ellisville","Fayette","Florence","Flowood","Gautier","Gulf Hills","Gulf Park Estates","Gulfport","Hattiesburg","Hazlehurst","Laurel","Leaksville","Liberty","Long Beach","Lucedale","McComb","Moss Point","Natchez","Ocean Springs","Pascagoula","Pass Christian","Pearl","Petal","Picayune","Poplarville","Richton","St. Martin","Sumrall","Tylertown","Vancleave","Waveland","Waynsboro","Wiggins","Woodville"],
              openingHoursSpecification: { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], opens: "00:00", closes: "23:59" },
              aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "13", bestRating: "5" },
              priceRange: "$$",
              sameAs: ["https://www.facebook.com/legacygaragedoorsllc"],
            }),
          }}
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <MobileBottomDock />
      </body>
    </html>
  );
}
