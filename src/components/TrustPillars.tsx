import React from 'react';
import { motion } from 'motion/react';

const items = [
  {
    num: '01',
    title: 'Always Open',
    desc: '24/7 emergency response, every day of the year. Your safety doesn\'t keep business hours.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="12" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M14 8v6l4 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Lifetime Warranty',
    desc: 'Every installation backed by our lifetime guarantee. We stand behind every bolt.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 3L5 7v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M10 14l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Expert Technicians',
    desc: '10+ years of hands-on experience. SSA-certified, BBB-accredited professionals.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M12 4.5l-1.5 4H6L10 12l-1.5 4L12 13l3.5 3L14 12l4-3.5h-4.5L12 4.5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" transform="translate(2,2)"/>
      </svg>
    ),
  },
];

export default function TrustPillars() {
  return (
    <section
      className="dot-grid"
      style={{
        padding: '80px 0',
        background: '#07080d',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Ambient gradient glow */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '80%',
        height: '60%',
        background: 'radial-gradient(ellipse at center, rgba(62,106,225,0.06) 0%, transparent 70%)',
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
          }}>Why Legacy</p>
          <h2 style={{
            fontSize: 'clamp(28px, 3.5vw, 42px)', fontWeight: 500, color: '#f0f2f5',
            letterSpacing: '-0.03em', lineHeight: 1.12,
          }}>
            Built on trust.<br />
            <span style={{ color: 'rgba(255,255,255,0.35)' }}>Proven by results.</span>
          </h2>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 20,
        }}>
          {items.map((p, i) => (
            <motion.div key={p.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              style={{
                background: 'rgba(255,255,255,0.03)',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: 16,
                padding: '36px 32px',
                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                cursor: 'default',
                position: 'relative',
                overflow: 'hidden',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = 'rgba(62,106,225,0.2)';
                el.style.boxShadow = '0 0 40px rgba(62,106,225,0.1), 0 8px 32px rgba(0,0,0,0.3)';
                el.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = 'rgba(255,255,255,0.06)';
                el.style.boxShadow = 'none';
                el.style.transform = 'translateY(0)';
              }}
            >
              {/* Top gradient line */}
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: 1,
                background: 'linear-gradient(90deg, transparent, rgba(62,106,225,0.3), transparent)',
              }} />

              <div style={{
                display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24,
              }}>
                <div style={{
                  width: 48, height: 48, borderRadius: 12,
                  background: 'rgba(62,106,225,0.1)',
                  border: '1px solid rgba(62,106,225,0.15)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#3E6AE1',
                  flexShrink: 0,
                }}>
                  {p.icon}
                </div>
                <span style={{
                  fontSize: 11, fontWeight: 600, color: 'rgba(255,255,255,0.2)',
                  letterSpacing: '0.12em',
                }}>{p.num}</span>
              </div>

              <h3 style={{ fontSize: 20, fontWeight: 600, color: '#f0f2f5', marginBottom: 10, letterSpacing: '-0.02em' }}>
                {p.title}
              </h3>
              <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)', lineHeight: 1.7, fontWeight: 300 }}>
                {p.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
