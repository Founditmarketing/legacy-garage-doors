"use client";
import { useEffect, useState } from "react";

const PROMO_END = new Date("2026-07-16T00:00:00-05:00");
const URGENCY_DAYS = 14;

function daysUntil(end: Date): number {
  const ms = end.getTime() - Date.now();
  return Math.ceil(ms / (1000 * 60 * 60 * 24));
}

function endLabel(daysLeft: number): string {
  if (daysLeft > URGENCY_DAYS) return "Ends July 15";
  if (daysLeft > 1) return `${daysLeft} days left`;
  if (daysLeft === 1) return "Ends tomorrow";
  return "Ends today";
}

export default function PromoBanner() {
  const [daysLeft, setDaysLeft] = useState<number | null>(null);

  useEffect(() => {
    const tick = () => {
      const d = daysUntil(PROMO_END);
      setDaysLeft(d > 0 ? d : 0);
    };
    tick();
    const id = setInterval(tick, 60 * 60 * 1000);
    document.documentElement.style.setProperty("--promo-banner-h", "36px");
    return () => {
      clearInterval(id);
      document.documentElement.style.setProperty("--promo-banner-h", "0px");
    };
  }, []);

  if (daysLeft === null || daysLeft <= 0) return null;

  const urgent = daysLeft <= URGENCY_DAYS;
  const label = endLabel(daysLeft);

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
        <span className={`uppercase tracking-wide text-xs ${urgent ? "font-bold" : ""}`}>
          {label}
        </span>
      </div>
      {/* Mobile */}
      <div className="sm:hidden text-xs px-3 whitespace-nowrap">
        <strong>$75 off springs</strong> · <strong>Up to $400 off doors</strong>
        <span className={urgent ? " font-bold" : ""}> · {label}</span>
      </div>
    </div>
  );
}
