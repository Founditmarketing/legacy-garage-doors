import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ArrowRight, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const serviceSubLinks = [
  { name: 'New Installations', href: '/services/new-installations' },
  { name: 'Preventive Maintenance', href: '/services/preventive-maintenance' },
  { name: 'Expert Repairs', href: '/services/expert-repairs' },
  { name: 'Diagnostic Service', href: '/services/diagnostic-service' },
  { name: 'Spring Replacements', href: '/services/spring-replacements' },
  { name: 'Rollers & Cables', href: '/services/rollers-and-cables' },
  { name: 'Weather Seals', href: '/services/weather-seals' },
  { name: 'Operator Replacements', href: '/services/operator-replacements' },
];

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services', hasDropdown: true },
  { name: 'Financing', href: '/financing' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const loc = useLocation();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);
  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
  }, [loc.pathname]);

  const isHome = loc.pathname === '/';
  const clear = isHome && !scrolled && !mobileOpen;

  const openDropdown = () => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setDropdownOpen(true);
  };
  const closeDropdown = () => {
    dropdownTimeout.current = setTimeout(() => setDropdownOpen(false), 150);
  };

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        {/* Backdrop layer */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: clear
              ? 'transparent'
              : 'rgba(7,8,13,0.82)',
            backdropFilter: clear ? 'none' : 'blur(24px) saturate(180%)',
            borderBottom: clear
              ? 'none'
              : '1px solid rgba(255,255,255,0.06)',
            transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        />

        {/* Gradient accent line at bottom */}
        {!clear && (
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: 1,
              background: 'linear-gradient(90deg, transparent, rgba(62,106,225,0.2), transparent)',
              opacity: scrolled ? 1 : 0,
              transition: 'opacity 0.4s',
            }}
          />
        )}

        <div
          style={{
            position: 'relative',
            zIndex: 1,
            maxWidth: 1400,
            margin: '0 auto',
            padding: '0 28px',
            height: 60,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* Logo */}
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0 }}>
            <img
              src="/images/logo-shield.png"
              alt="Legacy Garage Doors"
              style={{
                height: 114,
                width: 'auto',
                objectFit: 'contain',
                transition: 'filter 0.4s, opacity 0.4s',
                filter: 'brightness(1.2)',
                opacity: clear ? 1 : 0.9,
              }}
            />
          </Link>

          {/* Center nav — desktop */}
          <nav
            className="lg-only"
            style={{
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              alignItems: 'center',
              gap: 2,
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.06)',
              borderRadius: 100,
              padding: '3px 4px',
              backdropFilter: 'blur(12px)',
              transition: 'all 0.5s',
            }}
          >
            {navLinks.map((l) => {
              const active = loc.pathname === l.href || (l.hasDropdown && loc.pathname.startsWith('/services'));
              
              if (l.hasDropdown) {
                return (
                  <div
                    key={l.name}
                    style={{ position: 'relative' }}
                    onMouseEnter={openDropdown}
                    onMouseLeave={closeDropdown}
                  >
                    <Link
                      to={l.href}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 4,
                        padding: '7px 20px',
                        fontSize: 13,
                        fontWeight: 500,
                        borderRadius: 100,
                        color: active ? '#fff' : 'rgba(255,255,255,0.55)',
                        background: active ? 'rgba(62,106,225,0.15)' : 'transparent',
                        transition: 'all 0.3s',
                        whiteSpace: 'nowrap',
                        letterSpacing: '-0.01em',
                      }}
                    >
                      {l.name}
                      <ChevronDown
                        size={11}
                        style={{
                          transition: 'transform 0.25s',
                          transform: dropdownOpen ? 'rotate(180deg)' : 'rotate(0)',
                          opacity: 0.5,
                        }}
                      />
                    </Link>

                    {/* Dropdown */}
                    <AnimatePresence>
                      {dropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 6, scale: 0.97 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 6, scale: 0.97 }}
                          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                          style={{
                            position: 'absolute',
                            top: 'calc(100% + 10px)',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            width: 260,
                            background: 'rgba(12,13,20,0.95)',
                            backdropFilter: 'blur(24px) saturate(180%)',
                            border: '1px solid rgba(255,255,255,0.08)',
                            borderRadius: 14,
                            padding: '8px',
                            boxShadow: '0 16px 48px rgba(0,0,0,0.4), 0 0 1px rgba(255,255,255,0.05)',
                          }}
                        >
                          {/* Arrow */}
                          <div style={{
                            position: 'absolute',
                            top: -5,
                            left: '50%',
                            transform: 'translateX(-50%) rotate(45deg)',
                            width: 10,
                            height: 10,
                            background: 'rgba(12,13,20,0.95)',
                            border: '1px solid rgba(255,255,255,0.08)',
                            borderRight: 'none',
                            borderBottom: 'none',
                          }} />

                          <Link
                            to="/services"
                            style={{
                              display: 'block',
                              padding: '10px 14px',
                              fontSize: 13,
                              fontWeight: 600,
                              color: '#3E6AE1',
                              borderRadius: 8,
                              transition: 'background 0.2s',
                              borderBottom: '1px solid rgba(255,255,255,0.04)',
                              marginBottom: 4,
                            }}
                            onMouseEnter={e => (e.currentTarget.style.background = 'rgba(62,106,225,0.08)')}
                            onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
                          >
                            All Services →
                          </Link>

                          {serviceSubLinks.map((sub) => (
                            <Link
                              key={sub.name}
                              to={sub.href}
                              style={{
                                display: 'block',
                                padding: '9px 14px',
                                fontSize: 12.5,
                                fontWeight: 400,
                                color: loc.pathname === sub.href ? '#fff' : 'rgba(255,255,255,0.55)',
                                borderRadius: 8,
                                transition: 'all 0.2s',
                                letterSpacing: '-0.01em',
                              }}
                              onMouseEnter={e => {
                                e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
                                e.currentTarget.style.color = '#fff';
                              }}
                              onMouseLeave={e => {
                                e.currentTarget.style.background = 'transparent';
                                e.currentTarget.style.color = loc.pathname === sub.href ? '#fff' : 'rgba(255,255,255,0.55)';
                              }}
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <Link
                  key={l.name}
                  to={l.href}
                  style={{
                    padding: '7px 20px',
                    fontSize: 13,
                    fontWeight: 500,
                    borderRadius: 100,
                    color: active ? '#fff' : 'rgba(255,255,255,0.55)',
                    background: active ? 'rgba(62,106,225,0.15)' : 'transparent',
                    transition: 'all 0.3s',
                    whiteSpace: 'nowrap',
                    letterSpacing: '-0.01em',
                  }}
                  onMouseEnter={(e) => {
                    if (!active) {
                      (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.06)';
                      (e.currentTarget as HTMLElement).style.color = '#fff';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!active) {
                      (e.currentTarget as HTMLElement).style.background = 'transparent';
                      (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.55)';
                    }
                  }}
                >
                  {l.name}
                </Link>
              );
            })}
          </nav>

          {/* Right — desktop */}
          <div className="lg-only" style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <a
              href="tel:6019135975"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                fontSize: 12,
                fontWeight: 500,
                color: 'rgba(255,255,255,0.45)',
                transition: 'color 0.3s',
                letterSpacing: '0.02em',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = '#fff';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.45)';
              }}
            >
              <Phone size={11} /> 601-913-5975
            </a>
            <Link
              to="/book-online"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                height: 36,
                padding: '0 20px',
                fontSize: 12,
                fontWeight: 500,
                borderRadius: 100,
                background: '#3E6AE1',
                color: '#fff',
                border: 'none',
                transition: 'all 0.33s',
                letterSpacing: '0.02em',
                boxShadow: '0 0 20px rgba(62,106,225,0.25)',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = '#4d78e8';
                el.style.boxShadow = '0 0 30px rgba(62,106,225,0.4)';
                el.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = '#3E6AE1';
                el.style.boxShadow = '0 0 20px rgba(62,106,225,0.25)';
                el.style.transform = 'translateY(0)';
              }}
            >
              Book Online <ArrowRight size={11} />
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg-hide"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: '#fff',
              padding: 4,
            }}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile fullscreen drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 99,
              background: 'rgba(7,8,13,0.96)',
              backdropFilter: 'blur(30px)',
              paddingTop: 80,
              paddingLeft: 28,
              paddingRight: 28,
              overflow: 'auto',
            }}
          >
            <nav style={{ display: 'flex', flexDirection: 'column' }}>
              {/* Home link */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0 }}
              >
                <Link
                  to="/"
                  onClick={() => setMobileOpen(false)}
                  style={{
                    display: 'block',
                    padding: '20px 0',
                    fontSize: 24,
                    fontWeight: 500,
                    color: '#fff',
                    borderBottom: '1px solid rgba(255,255,255,0.06)',
                    letterSpacing: '-0.02em',
                  }}
                >
                  Home
                </Link>
              </motion.div>

              {/* Services with expandable sub-menu */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.04 }}
              >
                <div
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '20px 0',
                    fontSize: 24,
                    fontWeight: 500,
                    color: '#fff',
                    borderBottom: '1px solid rgba(255,255,255,0.06)',
                    letterSpacing: '-0.02em',
                    cursor: 'pointer',
                  }}
                >
                  Services
                  <ChevronDown
                    size={20}
                    style={{
                      transition: 'transform 0.3s',
                      transform: mobileServicesOpen ? 'rotate(180deg)' : 'rotate(0)',
                      opacity: 0.4,
                    }}
                  />
                </div>
                <AnimatePresence>
                  {mobileServicesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      style={{ overflow: 'hidden' }}
                    >
                      <Link
                        to="/services"
                        onClick={() => setMobileOpen(false)}
                        style={{
                          display: 'block',
                          padding: '14px 0 14px 16px',
                          fontSize: 15,
                          fontWeight: 600,
                          color: '#3E6AE1',
                          borderBottom: '1px solid rgba(255,255,255,0.03)',
                        }}
                      >
                        All Services →
                      </Link>
                      {serviceSubLinks.map((sub) => (
                        <Link
                          key={sub.name}
                          to={sub.href}
                          onClick={() => setMobileOpen(false)}
                          style={{
                            display: 'block',
                            padding: '12px 0 12px 16px',
                            fontSize: 15,
                            fontWeight: 400,
                            color: 'rgba(255,255,255,0.55)',
                            borderBottom: '1px solid rgba(255,255,255,0.03)',
                          }}
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Remaining links */}
              {[
                { name: 'Financing', href: '/financing' },
                { name: 'About', href: '/about' },
                { name: 'Contact', href: '/contact' },
              ].map((l, i) => (
                <motion.div
                  key={l.name}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: (i + 2) * 0.04 }}
                >
                  <Link
                    to={l.href}
                    onClick={() => setMobileOpen(false)}
                    style={{
                      display: 'block',
                      padding: '20px 0',
                      fontSize: 24,
                      fontWeight: 500,
                      color: '#fff',
                      borderBottom: '1px solid rgba(255,255,255,0.06)',
                      letterSpacing: '-0.02em',
                    }}
                  >
                    {l.name}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              style={{ marginTop: 32, display: 'flex', flexDirection: 'column', gap: 12 }}
            >
              <Link
                to="/book-online"
                onClick={() => setMobileOpen(false)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 6,
                  height: 52,
                  background: '#3E6AE1',
                  color: '#fff',
                  borderRadius: 12,
                  fontSize: 15,
                  fontWeight: 500,
                  boxShadow: '0 0 30px rgba(62,106,225,0.3)',
                }}
              >
                Book Online <ArrowRight size={14} />
              </Link>
              <a
                href="tel:6019135975"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 8,
                  fontSize: 15,
                  color: 'rgba(255,255,255,0.5)',
                  padding: '14px 0',
                }}
              >
                <Phone size={14} /> 601-913-5975
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
