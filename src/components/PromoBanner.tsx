"use client";
import { useEffect, useState } from "react";

const PROMO_END = new Date("2026-07-16T00:00:00-05:00");

export default function PromoBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const active = new Date() < PROMO_END;
    setVisible(active);
    if (active) {
      document.documentElement.style.setProperty("--promo-banner-h", "36px");
      return () => {
        document.documentElement.style.setProperty("--promo-banner-h", "0px");
      };
    }
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-9 bg-[#D4A017] text-black font-medium flex items-center justify-center">
      {/* Desktop / tablet */}
      <div className="hidden sm:flex section-wrap items-center justify-center gap-x-5 text-sm whitespace-nowrap">
        <span><strong>$75 off</strong> spring replacements</span>
        <span aria-hidden className="opacity-40">·</span>
        <span>
          <strong>$400 off</strong> new double-car doors
          <span className="opacity-60"> / </span>
          <strong>$200 off</strong> single-car
        </span>
        <span aria-hidden className="opacity-40">·</span>
        <span className="uppercase tracking-wide text-xs">Ends July 15</span>
      </div>
      {/* Mobile */}
      <div className="sm:hidden text-xs px-3 whitespace-nowrap">
        <strong>$75 off springs</strong> · <strong>Up to $400 off doors</strong> · Ends Jul 15
      </div>
    </div>
  );
}
