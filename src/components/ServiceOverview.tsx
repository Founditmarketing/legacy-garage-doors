import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

/* ── Custom SVG Service Icons ────────────────────────── */
const GarageDoorIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
    <rect x="4" y="8" width="24" height="20" rx="2" stroke="currentColor" strokeWidth="1.5"/>
    <line x1="4" y1="13" x2="28" y2="13" stroke="currentColor" strokeWidth="1.2"/>
    <line x1="4" y1="18" x2="28" y2="18" stroke="currentColor" strokeWidth="1.2"/>
    <line x1="4" y1="23" x2="28" y2="23" stroke="currentColor" strokeWidth="1.2"/>
    <path d="M8 4h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <rect x="22" y="19" width="2" height="3" rx="0.5" fill="currentColor"/>
  </svg>
);

const MaintenanceIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
    <rect x="6" y="4" width="12" height="16" rx="1" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M9 9h6M9 12h4M9 15h5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
    <circle cx="22" cy="22" r="6" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M22 19v3l2 1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
  </svg>
);

const RepairIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
    <path d="M10 22l12-12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M20 6l6 6-3 3-6-6 3-3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M6 26l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="7" cy="25" r="2" stroke="currentColor" strokeWidth="1.2"/>
  </svg>
);

const DiagnosticIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
    <circle cx="14" cy="14" r="8" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M20 20l6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M11 14h6M14 11v6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
  </svg>
);

const RollerIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
    <circle cx="10" cy="22" r="5" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="10" cy="22" r="1.5" fill="currentColor"/>
    <circle cx="22" cy="22" r="5" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="22" cy="22" r="1.5" fill="currentColor"/>
    <path d="M10 17V8h12v9" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M15 22h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const SpringIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
    <path d="M8 6c4 0 4 4 8 4s4-4 8-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M8 12c4 0 4 4 8 4s4-4 8-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M8 18c4 0 4 4 8 4s4-4 8-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M8 24c4 0 4 4 8 4s4-4 8-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const WeatherIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
    <path d="M6 28V8a2 2 0 012-2h16a2 2 0 012 2v20" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M2 28h28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M10 14s2-3 6-3 6 3 6 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
    <path d="M12 20h8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
    <path d="M14 23h4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
  </svg>
);

const CableIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
    <path d="M8 4v24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M24 4v24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M8 10h16M8 16h16M8 22h16" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeDasharray="2 2"/>
    <circle cx="8" cy="4" r="2" stroke="currentColor" strokeWidth="1.2"/>
    <circle cx="24" cy="4" r="2" stroke="currentColor" strokeWidth="1.2"/>
  </svg>
);

const OperatorIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
    <rect x="8" y="6" width="16" height="10" rx="2" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M12 10h8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
    <path d="M16 16v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="16" cy="24" r="3" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M14.5 24l1.5 1.5 1.5-1.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const services = [
  { title: 'New Installations', icon: GarageDoorIcon, desc: 'Custom doors engineered for your home — premium brands, expert installation.' },
  { title: 'Preventive Maintenance', icon: MaintenanceIcon, desc: 'Routine care to avoid costly breakdowns and extend door life.' },
  { title: 'Expert Repairs', icon: RepairIcon, desc: 'Same-day service. Any issue, any brand — resolved fast.' },
  { title: 'Diagnostic Service', icon: DiagnosticIcon, desc: 'Precision fault detection & detailed reporting.' },
  { title: 'Roller Replacement', icon: RollerIcon, desc: 'Silent nylon rollers for buttery-smooth operation.' },
  { title: 'Spring Replacements', icon: SpringIcon, desc: 'High-cycle springs with lifetime warranty.' },
  { title: 'Weather Seals', icon: WeatherIcon, desc: 'Total protection from rain, pests, and drafts.' },
  { title: 'Cables', icon: CableIcon, desc: 'Aircraft-grade cables, properly tensioned.' },
  { title: 'Operator Replacements', icon: OperatorIcon, desc: 'Smart operators for the modern home.' },
];

export default function ServiceOverview() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section style={{
      padding: '80px 0',
      background: '#07080d',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Ambient glow */}
      <div style={{
        position: 'absolute', top: 0, left: '30%', width: '40%', height: '60%',
        background: 'radial-gradient(ellipse at center, rgba(62,106,225,0.05) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="section-wrap" style={{ position: 'relative' }}>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 64 }}
        >
          <p style={{
            fontSize: 11, fontWeight: 600, letterSpacing: '0.14em',
            textTransform: 'uppercase', color: '#3E6AE1', marginBottom: 16,
          }}>Services</p>
          <h2 style={{
            fontSize: 'clamp(28px, 3.5vw, 42px)', fontWeight: 500, color: '#f0f2f5',
            letterSpacing: '-0.03em',
          }}>
            Everything your garage door needs.
          </h2>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: 16,
        }}>
          {services.map((s, i) => {
            const Icon = s.icon;
            const isHovered = hoveredIdx === i;
            return (
              <motion.div key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: (i % 3) * 0.06 }}
              >
                <Link
                  to="/services"
                  onMouseEnter={() => setHoveredIdx(i)}
                  onMouseLeave={() => setHoveredIdx(null)}
                  style={{
                    display: 'block',
                    padding: '32px 28px',
                    background: isHovered
                      ? 'rgba(255,255,255,0.05)'
                      : 'rgba(255,255,255,0.02)',
                    backdropFilter: 'blur(12px)',
                    border: `1px solid ${isHovered ? 'rgba(62,106,225,0.2)' : 'rgba(255,255,255,0.05)'}`,
                    borderRadius: 16,
                    transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                    textDecoration: 'none',
                    boxShadow: isHovered
                      ? '0 0 40px rgba(62,106,225,0.1), 0 8px 32px rgba(0,0,0,0.3)'
                      : 'none',
                    transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  {/* Top accent */}
                  <div style={{
                    position: 'absolute', top: 0, left: 0, right: 0, height: 1,
                    background: 'linear-gradient(90deg, transparent, rgba(62,106,225,0.25), transparent)',
                    opacity: isHovered ? 1 : 0,
                    transition: 'opacity 0.4s',
                  }} />

                  <div style={{
                    width: 52, height: 52, borderRadius: 14,
                    background: isHovered
                      ? 'rgba(62,106,225,0.15)'
                      : 'rgba(62,106,225,0.08)',
                    border: `1px solid ${isHovered ? 'rgba(62,106,225,0.25)' : 'rgba(62,106,225,0.1)'}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: 20,
                    transition: 'all 0.4s',
                    color: '#3E6AE1',
                    boxShadow: isHovered ? '0 0 20px rgba(62,106,225,0.2)' : 'none',
                  }}>
                    <Icon />
                  </div>
                  <h3 style={{
                    fontSize: 16, fontWeight: 600, color: '#f0f2f5',
                    marginBottom: 8, letterSpacing: '-0.01em',
                  }}>{s.title}</h3>
                  <p style={{
                    fontSize: 13, color: 'rgba(255,255,255,0.4)',
                    lineHeight: 1.65, fontWeight: 300,
                  }}>{s.desc}</p>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <div style={{ marginTop: 56, display: 'flex', gap: 14, flexWrap: 'wrap' }}>
          <Link to="/book-online" style={{
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8,
            height: 50, padding: '0 28px', background: '#3E6AE1', color: '#fff',
            fontSize: 14, fontWeight: 500, borderRadius: 12,
            boxShadow: '0 0 30px rgba(62,106,225,0.25)',
            transition: 'all 0.33s',
          }}
          onMouseEnter={e => {
            const el = e.currentTarget as HTMLElement;
            el.style.boxShadow = '0 0 45px rgba(62,106,225,0.4)';
            el.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={e => {
            const el = e.currentTarget as HTMLElement;
            el.style.boxShadow = '0 0 30px rgba(62,106,225,0.25)';
            el.style.transform = 'translateY(0)';
          }}
          >Book a Service</Link>
          <Link to="/services" style={{
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            height: 50, padding: '0 28px',
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.1)',
            color: '#fff', fontSize: 14, fontWeight: 500, borderRadius: 12,
            transition: 'all 0.33s', backdropFilter: 'blur(8px)',
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.08)'; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.04)'; }}
          >All Services</Link>
        </div>
      </div>
    </section>
  );
}
