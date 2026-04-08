import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  DoorOpen,
  ClipboardCheck,
  Wrench,
  Search,
  CircleDot,
  Zap,
  CloudRain,
  Cable,
  Settings,
} from 'lucide-react';

const services = [
  { title: 'New Installations', icon: DoorOpen, slug: 'new-installations', desc: 'Custom doors engineered for your home — premium brands, expert installation.' },
  { title: 'Preventive Maintenance', icon: ClipboardCheck, slug: 'preventive-maintenance', desc: 'Routine care to avoid costly breakdowns and extend door life.' },
  { title: 'Expert Repairs', icon: Wrench, slug: 'expert-repairs', desc: 'Same-day service. Any issue, any brand — resolved fast.' },
  { title: 'Diagnostic Service', icon: Search, slug: 'diagnostic-service', desc: 'Precision fault detection & detailed reporting.' },
  { title: 'Roller Replacement', icon: CircleDot, slug: 'rollers-and-cables', desc: 'Silent nylon rollers for buttery-smooth operation.' },
  { title: 'Spring Replacements', icon: Zap, slug: 'spring-replacements', desc: 'High-cycle springs with lifetime warranty.' },
  { title: 'Weather Seals', icon: CloudRain, slug: 'weather-seals', desc: 'Total protection from rain, pests, and drafts.' },
  { title: 'Cables', icon: Cable, slug: 'rollers-and-cables', desc: 'Aircraft-grade cables, properly tensioned.' },
  { title: 'Operator Replacements', icon: Settings, slug: 'operator-replacements', desc: 'Smart operators for the modern home.' },
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
                  to={`/services/${s.slug}`}
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
                    <Icon size={22} strokeWidth={1.5} />
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
