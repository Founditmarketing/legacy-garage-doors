import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const values = [
  { label: 'Family Owned & Operated', icon: '🏠' },
  { label: '10+ Years Experience', icon: '⚡' },
  { label: '24/7 Emergency Service', icon: '🕐' },
  { label: 'Licensed & Insured', icon: '✓' },
  { label: 'BBB Accredited', icon: '★' },
  { label: 'SSA Certified', icon: '🛡' },
];

export default function About() {
  return (
    <div style={{ background: '#07080d' }}>
      {/* Hero */}
      <section className="page-hero">
        <p style={{ position: 'relative', fontSize: 11, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#3E6AE1', marginBottom: 20 }}>About Legacy</p>
        <h1>Craftsmanship Meets Integrity.</h1>
        <p>Family-owned and operated, serving Southern Mississippi with honesty and precision for over a decade.</p>
      </section>

      {/* Content — dark editorial section */}
      <section style={{ padding: '120px 0', background: '#0c0d14', position: 'relative' }}>
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: 1,
          background: 'linear-gradient(90deg, transparent, rgba(62,106,225,0.2), transparent)',
        }} />
        <div className="section-wrap">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: 64, alignItems: 'center' }}>
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div style={{ width: 48, height: 2, background: 'linear-gradient(90deg, #3E6AE1, transparent)', marginBottom: 20 }} />
              <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#3E6AE1', marginBottom: 16 }}>Our Story</p>
              <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 40px)', fontWeight: 500, color: '#f0f2f5', marginBottom: 24, lineHeight: 1.12, letterSpacing: '-0.03em' }}>
                Servicing Garage Doors for{' '}
                <span style={{
                  background: 'linear-gradient(135deg, #3E6AE1, #818cf8)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>Over 10 Years</span>
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16, fontSize: 15, color: 'rgba(255,255,255,0.45)', lineHeight: 1.75, fontWeight: 300 }}>
                <p>Legacy Garage Doors was founded with a simple vision: to provide trusted service and effective solutions for garage door issues across Mississippi. As a family-owned business, we understand the importance of safety and reliability for your home.</p>
                <p>With 11 years of hands-on experience, our team is passionate about building lasting customer relationships. We don't just fix doors — we provide peace of mind.</p>
                <p>From a simple repair to a full custom installation, we bring the same level of precision and care to every project. Proudly serving all of Southern Mississippi, 24/7.</p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '14px 24px', marginTop: 36 }}>
                {values.map(v => (
                  <div key={v.label} style={{
                    display: 'flex', alignItems: 'center', gap: 12, fontSize: 14, fontWeight: 500, color: '#f0f2f5',
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.05)',
                    borderRadius: 10,
                    padding: '10px 14px',
                  }}>
                    <span style={{ fontSize: 16 }}>{v.icon}</span>
                    {v.label}
                  </div>
                ))}
              </div>

              <div style={{ marginTop: 44 }}>
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
                >Book Your Service <ArrowRight size={14} /></Link>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}>
              <div style={{ position: 'relative', borderRadius: 20, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.06)' }}>
                <img
                  src="https://static.wixstatic.com/media/b65567_a4475a5f068c45e0a6d0a998ccdceb50~mv2.jpg"
                  alt="Legacy Garage Doors"
                  referrerPolicy="no-referrer"
                  style={{ width: '100%', aspectRatio: '4/5', objectFit: 'cover', display: 'block' }}
                />
                {/* Overlay gradient */}
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(180deg, transparent 50%, rgba(7,8,13,0.6) 100%)',
                }} />
                <div style={{
                  position: 'absolute', bottom: 28, left: 28,
                  background: 'rgba(7,8,13,0.8)',
                  backdropFilter: 'blur(16px)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  color: '#fff', padding: '20px 24px', borderRadius: 14,
                }}>
                  <div style={{ fontSize: 32, fontWeight: 600, lineHeight: 1, letterSpacing: '-0.03em' }}>11+</div>
                  <div style={{ fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginTop: 4, fontWeight: 600 }}>Years of Excellence</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
