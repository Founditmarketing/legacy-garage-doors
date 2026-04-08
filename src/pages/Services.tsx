import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, DoorOpen, ClipboardCheck, Wrench, Search, Zap, CircleDot, CloudRain, Cable, Settings } from 'lucide-react';

const allServices = [
  { title: 'New Garage Door Sales & Installation', slug: 'new-installations', desc: 'Upgrade your home\'s curb appeal with premium brands — Clopay, Amarr, Chamberlain — and professional installation.', Icon: DoorOpen },
  { title: 'Preventative Maintenance', slug: 'preventive-maintenance', desc: 'Keep your system running smoothly and avoid costly emergency repairs with routine care and inspection.', Icon: ClipboardCheck },
  { title: 'Repairs on Doors & Operators', slug: 'expert-repairs', desc: 'Broken panels, malfunctioning motors, misaligned tracks — we repair all makes and models, same day.', Icon: Wrench },
  { title: 'Diagnostic Service Calls', slug: 'diagnostic-service', desc: 'Expert troubleshooting that identifies the root cause before a single wrench turns.', Icon: Search },
  { title: 'Spring Replacements', slug: 'spring-replacements', desc: 'Safe, professional replacement of high-tension springs with lifetime warranty.', Icon: Zap },
  { title: 'Rollers & Cables', slug: 'rollers-and-cables', desc: 'Smooth out noisy operation and ensure safety with fresh nylon rollers and heavy-duty cables.', Icon: CircleDot },
  { title: 'Weather Seals', slug: 'weather-seals', desc: 'Protect your garage from pests, dust, and drafts with professional weather stripping.', Icon: CloudRain },
  { title: 'Operator Replacements', slug: 'operator-replacements', desc: 'Modern, quiet, smart-connected openers from LiftMaster and Chamberlain.', Icon: Settings },
];

export default function Services() {
  return (
    <div style={{ background: '#07080d' }}>
      {/* Hero */}
      <section className="page-hero">
        <p style={{ position: 'relative', fontSize: 11, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#3E6AE1', marginBottom: 20 }}>Our Services</p>
        <h1>Expert Care for Every Door.</h1>
        <p>From preventive maintenance to full custom installations — we ensure your garage door operates safely and efficiently.</p>
      </section>

      {/* Grid */}
      <section style={{ padding: '100px 0' }}>
        <div className="section-wrap">
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
            gap: 16,
          }}>
            {allServices.map((s, i) => {
              const Icon = s.Icon;
              return (
                <motion.div key={s.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.4, delay: (i % 3) * 0.05 }}
                  style={{
                    background: 'rgba(255,255,255,0.02)',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(255,255,255,0.05)',
                    borderRadius: 16,
                    padding: '36px 32px',
                    transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = 'rgba(255,255,255,0.05)';
                    el.style.borderColor = 'rgba(62,106,225,0.2)';
                    el.style.boxShadow = '0 0 40px rgba(62,106,225,0.1), 0 8px 32px rgba(0,0,0,0.3)';
                    el.style.transform = 'translateY(-4px)';
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = 'rgba(255,255,255,0.02)';
                    el.style.borderColor = 'rgba(255,255,255,0.05)';
                    el.style.boxShadow = 'none';
                    el.style.transform = 'translateY(0)';
                  }}
                >
                  {/* Top gradient */}
                  <div style={{
                    position: 'absolute', top: 0, left: 0, right: 0, height: 1,
                    background: 'linear-gradient(90deg, transparent, rgba(62,106,225,0.2), transparent)',
                  }} />

                  {/* Icon */}
                  <div style={{
                    width: 56, height: 56, borderRadius: 14,
                    background: 'rgba(62,106,225,0.08)',
                    border: '1px solid rgba(62,106,225,0.12)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: 24,
                    color: '#3E6AE1',
                  }}>
                    <Icon size={24} strokeWidth={1.5} />
                  </div>

                  <h3 style={{ fontSize: 18, fontWeight: 600, color: '#f0f2f5', marginBottom: 10, letterSpacing: '-0.01em' }}>
                    {s.title}
                  </h3>
                  <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)', lineHeight: 1.7, marginBottom: 24, fontWeight: 300 }}>
                    {s.desc}
                  </p>
                  <Link to={`/services/${s.slug}`} style={{
                    display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 6,
                    height: 38, padding: '0 20px', fontSize: 13, fontWeight: 500,
                    background: 'rgba(62,106,225,0.1)',
                    border: '1px solid rgba(62,106,225,0.2)',
                    color: '#3E6AE1', borderRadius: 8,
                    transition: 'all 0.33s',
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = '#3E6AE1';
                    el.style.color = '#fff';
                    el.style.borderColor = '#3E6AE1';
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = 'rgba(62,106,225,0.1)';
                    el.style.color = '#3E6AE1';
                    el.style.borderColor = 'rgba(62,106,225,0.2)';
                  }}
                  >Learn More <ArrowRight size={12} /></Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section style={{ padding: '100px 0', background: '#0c0d14', position: 'relative' }}>
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: 1,
          background: 'linear-gradient(90deg, transparent, rgba(62,106,225,0.2), transparent)',
        }} />
        <div className="section-wrap" style={{ maxWidth: 720 }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#3E6AE1', marginBottom: 16 }}>Free Estimate</p>
            <h2 style={{ fontSize: 'clamp(26px, 3vw, 38px)', fontWeight: 500, color: '#f0f2f5', letterSpacing: '-0.02em' }}>Get a free quote today.</h2>
          </div>
          <div style={{
            background: 'rgba(255,255,255,0.02)',
            backdropFilter: 'blur(16px)',
            border: '1px solid rgba(255,255,255,0.06)',
            borderRadius: 20,
            padding: 'clamp(32px, 5vw, 48px)',
          }}>
            <form onSubmit={e => e.preventDefault()} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              <div>
                <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.3)', marginBottom: 8, letterSpacing: '0.06em', textTransform: 'uppercase' }}>First Name</label>
                <input className="lgd-input-dark" placeholder="John" />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.3)', marginBottom: 8, letterSpacing: '0.06em', textTransform: 'uppercase' }}>Last Name</label>
                <input className="lgd-input-dark" placeholder="Doe" />
              </div>
              <div style={{ gridColumn: 'span 2' }}>
                <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.3)', marginBottom: 8, letterSpacing: '0.06em', textTransform: 'uppercase' }}>Email</label>
                <input className="lgd-input-dark" type="email" placeholder="john@example.com" />
              </div>
              <div style={{ gridColumn: 'span 2' }}>
                <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.3)', marginBottom: 8, letterSpacing: '0.06em', textTransform: 'uppercase' }}>How can we help?</label>
                <textarea className="lgd-input-dark" placeholder="Describe your project or issue..." />
              </div>
              <div style={{ gridColumn: 'span 2' }}>
                <button type="submit" style={{
                  width: '100%', height: 48, background: '#3E6AE1', color: '#fff',
                  fontSize: 15, fontWeight: 500, borderRadius: 10, border: 'none',
                  cursor: 'pointer', transition: 'all 0.33s',
                  boxShadow: '0 0 25px rgba(62,106,225,0.25)',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.boxShadow = '0 0 40px rgba(62,106,225,0.4)';
                  el.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.boxShadow = '0 0 25px rgba(62,106,225,0.25)';
                  el.style.transform = 'translateY(0)';
                }}
                >Send Request</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
