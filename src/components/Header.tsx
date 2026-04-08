"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ArrowRight, ChevronDown } from "lucide-react";

const serviceLinks = [
  { name: "New Installations", href: "/services/new-installations" },
  { name: "Preventive Maintenance", href: "/services/preventive-maintenance" },
  { name: "Expert Repairs", href: "/services/expert-repairs" },
  { name: "Diagnostic Service", href: "/services/diagnostic-service" },
  { name: "Spring Replacements", href: "/services/spring-replacements" },
  { name: "Rollers & Cables", href: "/services/rollers-and-cables" },
  { name: "Weather Seals", href: "/services/weather-seals" },
  { name: "Operator Replacements", href: "/services/operator-replacements" },
];

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services", hasDropdown: true },
  { name: "Financing", href: "/financing" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
  }, [pathname]);

  const isHome = pathname === "/";
  const clear = isHome && !scrolled && !mobileOpen;

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: clear ? "transparent" : "rgba(28,28,30,0.92)",
          backdropFilter: clear ? "none" : "blur(20px) saturate(180%)",
          borderBottom: clear ? "none" : "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div className="section-wrap flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/logo-shield.png"
              alt="Legacy Garage Doors"
              width={240}
              height={240}
              className="h-36 w-auto object-contain"
              style={{ filter: "brightness(1.15) invert(1) hue-rotate(180deg)" }}
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="nav-desktop flex items-center gap-1 bg-white/[0.04] border border-white/[0.06] rounded-full px-1 py-[3px] backdrop-blur-md">
            {navLinks.map((l) => {
              const active = pathname === l.href || (l.hasDropdown && pathname.startsWith("/services"));

              if (l.hasDropdown) {
                return (
                  <div
                    key={l.name}
                    className="relative"
                    onMouseEnter={() => {
                      if (dropdownTimer.current) clearTimeout(dropdownTimer.current);
                      setDropdownOpen(true);
                    }}
                    onMouseLeave={() => {
                      dropdownTimer.current = setTimeout(() => setDropdownOpen(false), 150);
                    }}
                  >
                    <Link
                      href={l.href}
                      className={`flex items-center gap-1 px-5 py-[7px] text-[13px] font-medium rounded-full whitespace-nowrap transition-all duration-200 ${
                        active
                          ? "text-white bg-[var(--color-brand)]/15"
                          : "text-white/55 hover:text-white hover:bg-white/[0.06]"
                      }`}
                    >
                      {l.name}
                      <ChevronDown
                        size={11}
                        className={`opacity-50 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
                      />
                    </Link>

                    {/* Dropdown */}
                    {dropdownOpen && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-[#1e1e22]/95 backdrop-blur-2xl border border-white/[0.08] rounded-2xl p-2 shadow-2xl"
                        style={{ animation: "fadeInUp 0.2s ease-out" }}
                      >
                        <Link
                          href="/services"
                          className="block px-3 py-2.5 text-[13px] font-semibold text-[var(--color-brand)] rounded-lg hover:bg-[var(--color-brand)]/10 mb-1 border-b border-white/[0.04] pb-3"
                        >
                          All Services →
                        </Link>
                        {serviceLinks.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            className={`block px-3 py-2 text-[12.5px] rounded-lg transition-all duration-200 ${
                              pathname === sub.href
                                ? "text-white bg-white/[0.06]"
                                : "text-white/55 hover:text-white hover:bg-white/[0.06]"
                            }`}
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={l.name}
                  href={l.href}
                  className={`px-5 py-[7px] text-[13px] font-medium rounded-full whitespace-nowrap transition-all duration-200 ${
                    active
                      ? "text-white bg-[var(--color-brand)]/15"
                      : "text-white/55 hover:text-white hover:bg-white/[0.06]"
                  }`}
                >
                  {l.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right */}
          <div className="nav-desktop flex items-center gap-3">
            <a
              href="tel:6019135975"
              className="flex items-center gap-1.5 text-xs font-medium text-white/45 hover:text-white transition-colors"
            >
              <Phone size={11} /> 601-913-5975
            </a>
            <Link
              href="/book-online"
              className="btn-primary !py-2 !px-5 !text-[12px] !rounded-full"
            >
              Book Online <ArrowRight size={11} />
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="nav-mobile-toggle text-white p-1"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-[var(--color-charcoal)]/[0.97] backdrop-blur-3xl pt-20 px-6 overflow-auto">
          <nav className="flex flex-col">
            <Link href="/" onClick={() => setMobileOpen(false)} className="py-5 text-2xl font-medium text-white border-b border-white/[0.06]">
              Home
            </Link>

            <div>
              <div
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="flex items-center justify-between py-5 text-2xl font-medium text-white border-b border-white/[0.06] cursor-pointer"
              >
                Services
                <ChevronDown size={20} className={`opacity-40 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
              </div>
              {mobileServicesOpen && (
                <div className="py-2">
                  <Link href="/services" onClick={() => setMobileOpen(false)} className="block pl-4 py-3 text-[15px] font-semibold text-[var(--color-brand)] border-b border-white/[0.03]">
                    All Services →
                  </Link>
                  {serviceLinks.map((s) => (
                    <Link key={s.name} href={s.href} onClick={() => setMobileOpen(false)} className="block pl-4 py-3 text-[15px] text-white/55 border-b border-white/[0.03]">
                      {s.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {["Financing", "About", "Contact"].map((n) => (
              <Link key={n} href={`/${n.toLowerCase()}`} onClick={() => setMobileOpen(false)} className="py-5 text-2xl font-medium text-white border-b border-white/[0.06]">
                {n}
              </Link>
            ))}
          </nav>

          <div className="mt-8 flex flex-col gap-3">
            <Link href="/book-online" onClick={() => setMobileOpen(false)} className="btn-primary justify-center !rounded-xl h-14 text-base">
              Book Online <ArrowRight size={16} />
            </Link>
            <a href="tel:6019135975" className="flex items-center justify-center gap-2 text-[15px] text-white/50 py-4">
              <Phone size={14} /> 601-913-5975
            </a>
          </div>
        </div>
      )}
    </>
  );
}
