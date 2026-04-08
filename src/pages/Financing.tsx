import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

/* Custom icons */
const DollarIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/><path d="M12 6v12M15 9.5c0-1.1-1.3-2-3-2s-3 .9-3 2 1.3 2 3 2 3 .9 3 2-1.3 2-3 2-3-.9-3-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
);
const CalendarIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="3" y="5" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.5"/><path d="M3 10h18M8 3v4M16 3v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
);
const CheckIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/><path d="M8 12l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
);
const CreditIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><rect x="3" y="7" width="22" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/><path d="M3 12h22" stroke="currentColor" strokeWidth="1.5"/><path d="M7 17h4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>
);

export default function Financing() {
  return (
    <div style={{ background: '#07080d' }}>
      {/* Hero */}
      <section className="page-hero">
        <p style={{ position: 'relative', fontSize: 11, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#3E6AE1', marginBottom: 20 }}>Financing</p>
        <h1>Flexible Payment Options.</h1>
        <p>Get the garage door you want today with plans that fit your budget. Quick application, instant decisions.</p>
      </section>

      {/* Content */}
      <section style={{ padding: '120px 0', background: '#0c0d14', position: 'relative' }}>
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: 1,
          background: 'linear-gradient(90deg, transparent, rgba(62,106,225,0.2), transparent)',
        }} />
        <div className="section-wrap">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: 64, alignItems: 'start' }}>
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div style={{ width: 48, height: 2, background: 'linear-gradient(90deg, #3E6AE1, transparent)', marginBottom: 20 }} />
              <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#3E6AE1', marginBottom: 16 }}>Benefits</p>
              <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 40px)', fontWeight: 500, color: '#f0f2f5', marginBottom: 24, lineHeight: 1.12, letterSpacing: '-0.03em' }}>
                Smart Financing for{' '}
                <span style={{
                  background: 'linear-gradient(135deg, #3E6AE1, #818cf8)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>Your Home Investment</span>
              </h2>
              <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.45)', marginBottom: 32, lineHeight: 1.75, fontWeight: 300 }}>
                A new garage door is one of the best investments you can make in your home's value and security. We've partnered with leading lenders to offer flexible solutions that make it easy.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {[
                  'Low monthly payments',
                  'Quick and easy application',
                  'No hidden fees or prepayment penalties',
                  'Competitive interest rates',
                  'Flexible terms to fit your budget',
                ].map(item => (
                  <div key={item} style={{
                    display: 'flex', alignItems: 'center', gap: 12, fontSize: 14, fontWeight: 500, color: '#f0f2f5',
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.05)',
                    borderRadius: 10,
                    padding: '12px 16px',
                  }}>
                    <div style={{
                      width: 22, height: 22, borderRadius: 6,
                      background: 'rgba(62,106,225,0.15)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      flexShrink: 0,
                    }}>
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M2 6l3 3 5-5" stroke="#3E6AE1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
              <div style={{
                background: 'rgba(255,255,255,0.03)',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(255,255,255,0.06)',
                padding: 'clamp(36px, 4vw, 48px)',
                borderRadius: 20,
                position: 'relative',
                overflow: 'hidden',
              }}>
                {/* Top accent */}
                <div style={{
                  position: 'absolute', top: 0, left: 0, right: 0, height: 2,
                  background: 'linear-gradient(90deg, #3E6AE1, #818cf8, #3E6AE1)',
                }} />

                <div style={{
                  width: 56, height: 56, borderRadius: 14,
                  background: 'rgba(62,106,225,0.1)',
                  border: '1px solid rgba(62,106,225,0.15)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: 28, color: '#3E6AE1',
                }}>
                  <CreditIcon />
                </div>
                <h3 style={{ fontSize: 22, fontWeight: 600, color: '#f0f2f5', marginBottom: 12, letterSpacing: '-0.02em' }}>Ready to Apply?</h3>
                <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)', lineHeight: 1.7, marginBottom: 28, fontWeight: 300 }}>
                  The application process is fast, secure, and won't affect your credit score for pre-qualification.
                </p>
                <button style={{
                  width: '100%', height: 50, background: '#3E6AE1', color: '#fff',
                  fontSize: 15, fontWeight: 500, borderRadius: 12, border: 'none',
                  cursor: 'pointer', transition: 'all 0.33s',
                  boxShadow: '0 0 25px rgba(62,106,225,0.25)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
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
                >Apply Now <ArrowRight size={14} /></button>
                <p style={{ textAlign: 'center', fontSize: 12, color: 'rgba(255,255,255,0.25)', marginTop: 16 }}>
                  *Subject to credit approval. Terms and conditions apply.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Bottom features */}
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: 20, borderTop: '1px solid rgba(255,255,255,0.04)', paddingTop: 80, marginTop: 80,
          }}>
            {[
              { Icon: DollarIcon, title: 'Budget Friendly', desc: 'Spread the cost over manageable monthly installments.' },
              { Icon: CalendarIcon, title: 'Flexible Terms', desc: 'Choose the repayment period that works best for you.' },
              { Icon: CheckIcon, title: 'Instant Decisions', desc: 'Most applications receive approval in minutes.' },
            ].map((item, i) => (
              <motion.div key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{
                  textAlign: 'center',
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.05)',
                  borderRadius: 16,
                  padding: '36px 28px',
                  transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = 'rgba(62,106,225,0.15)';
                  el.style.transform = 'translateY(-4px)';
                  el.style.boxShadow = '0 0 30px rgba(62,106,225,0.08)';
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = 'rgba(255,255,255,0.05)';
                  el.style.transform = 'translateY(0)';
                  el.style.boxShadow = 'none';
                }}
              >
                <div style={{
                  margin: '0 auto 20px', width: 52, height: 52, borderRadius: 14,
                  background: 'rgba(62,106,225,0.08)',
                  border: '1px solid rgba(62,106,225,0.12)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#3E6AE1',
                }}>
                  <item.Icon />
                </div>
                <h4 style={{ fontSize: 16, fontWeight: 600, color: '#f0f2f5', marginBottom: 8, letterSpacing: '-0.01em' }}>{item.title}</h4>
                <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)', lineHeight: 1.65, maxWidth: 280, margin: '0 auto', fontWeight: 300 }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
