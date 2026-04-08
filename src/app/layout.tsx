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
    "Family-owned garage door experts serving Southern Mississippi. 24/7 emergency service, lifetime warranty, 5.0★ Google rated. Call 601-913-5975.",
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
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <MobileBottomDock />
      </body>
    </html>
  );
}
