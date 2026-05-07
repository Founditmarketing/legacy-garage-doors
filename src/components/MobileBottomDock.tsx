"use client";
import { Phone, MessageCircle, Calendar } from "lucide-react";

export default function MobileBottomDock() {
  return (
    <div className="mobile-dock">
      <a
        href="tel:6014367907"
        className="flex-1 flex items-center justify-center gap-2 py-3 bg-[var(--color-brand)] text-white font-semibold text-sm rounded-xl transition-transform active:scale-95"
      >
        <Phone size={16} /> Call Now
      </a>
      <a
        href="sms:6014367907"
        className="flex-1 flex items-center justify-center gap-2 py-3 bg-[var(--color-surface)] text-white font-medium text-sm rounded-xl border border-white/[0.08] transition-transform active:scale-95"
      >
        <MessageCircle size={16} /> Text Expert
      </a>
      <a
        href="/book-online"
        className="flex-1 flex items-center justify-center gap-2 py-3 bg-white text-[var(--color-charcoal)] font-semibold text-sm rounded-xl transition-transform active:scale-95"
      >
        <Calendar size={16} /> Book Online
      </a>
    </div>
  );
}
