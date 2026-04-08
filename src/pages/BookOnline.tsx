import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, ChevronRight, ArrowLeft, ArrowRight } from 'lucide-react';

/* Custom service icons */
const WrenchIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M8 16l8-8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M14 4l4 4-2 2-4-4 2-2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/><path d="M4 18l3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
);
const SpringIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M4 3c3 0 3 3 6 3s3-3 6-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M4 8c3 0 3 3 6 3s3-3 6-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M4 13c3 0 3 3 6 3s3-3 6-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
);
const ShieldIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 2L4 5v4c0 4 2.5 7.5 6 8.5 3.5-1 6-4.5 6-8.5V5l-6-3z" stroke="currentColor" strokeWidth="1.5"/><path d="M7 10l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
);
const CalIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><rect x="2" y="4" width="16" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/><path d="M2 8h16M6 2v4M14 2v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
);

const serviceTypes = [
  { id: 'repair', name: 'General Repair', Icon: WrenchIcon, desc: 'Fixing issues with doors, tracks, or openers.' },
  { id: 'spring', name: 'Spring Replacement', Icon: SpringIcon, desc: 'Professional replacement of broken springs. $75 OFF!' },
  { id: 'maintenance', name: 'Preventive Maintenance', Icon: ShieldIcon, desc: 'Routine checkup, lubrication, and safety test.' },
  { id: 'install', name: 'New Installation Quote', Icon: CalIcon, desc: 'Get a free quote for a new garage door.' },
];

export default function BookOnline() {
  const [step, setStep] = useState(1);
  const [selected, setSelected] = useState('');
  const [formData, setFormData] = useState({ name: '', phone: '', address: '', date: '', time: 'Morning (8am - 12pm)' });

  return (
    <div style={{ background: '#07080d' }}>
      {/* Hero */}
      <section className="page-hero">
        <p style={{ position: 'relative', fontSize: 11, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#3E6AE1', marginBottom: 20 }}>Schedule</p>
        <h1>Book Your Service.</h1>
        <p>Quick online scheduling. Choose your service, fill in your info, and you're done.</p>
      </section>

      <section style={{ padding: '60px 0 120px', background: '#0c0d14', position: 'relative' }}>
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: 1,
          background: 'linear-gradient(90deg, transparent, rgba(62,106,225,0.2), transparent)',
        }} />

        <div className="section-wrap" style={{ maxWidth: 680 }}>
          {/* Progress bar */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginBottom: 48 }}>
            {[1, 2, 3].map(s => (
              <React.Fragment key={s}>
                <div style={{
                  width: 36, height: 36, borderRadius: 10,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 13, fontWeight: 600,
                  background: step >= s
                    ? 'linear-gradient(135deg, #3E6AE1, #818cf8)'
                    : 'rgba(255,255,255,0.04)',
                  border: `1px solid ${step >= s ? 'transparent' : 'rgba(255,255,255,0.06)'}`,
                  color: step >= s ? '#fff' : 'rgba(255,255,255,0.3)',
                  transition: 'all 0.33s',
                  boxShadow: step >= s ? '0 4px 15px rgba(62,106,225,0.3)' : 'none',
                }}>
                  {step > s ? <CheckCircle2 size={14} /> : s}
                </div>
                {s < 3 && <div style={{
                  width: 40, height: 2, borderRadius: 1,
                  background: step > s
                    ? 'linear-gradient(90deg, #3E6AE1, #818cf8)'
                    : 'rgba(255,255,255,0.04)',
                  transition: 'background 0.33s',
                }} />}
              </React.Fragment>
            ))}
          </div>

          {/* Card container */}
          <div style={{
            background: 'rgba(255,255,255,0.02)',
            backdropFilter: 'blur(16px)',
            border: '1px solid rgba(255,255,255,0.06)',
            borderRadius: 20,
            padding: 'clamp(32px, 5vw, 48px)',
            position: 'relative',
            overflow: 'hidden',
          }}>
            <div style={{
              position: 'absolute', top: 0, left: 0, right: 0, height: 2,
              background: 'linear-gradient(90deg, #3E6AE1, #818cf8, #3E6AE1)',
            }} />

            <AnimatePresence mode="wait">
              {/* Step 1 */}
              {step === 1 && (
                <motion.div key="s1" initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -16 }} transition={{ duration: 0.25 }}>
                  <h2 style={{ fontSize: 22, fontWeight: 600, color: '#f0f2f5', marginBottom: 24, letterSpacing: '-0.02em' }}>Select Service Type</h2>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                    {serviceTypes.map(s => {
                      const active = selected === s.id;
                      return (
                        <button key={s.id} onClick={() => { setSelected(s.id); setStep(2); }}
                          style={{
                            display: 'flex', alignItems: 'center', gap: 16,
                            padding: '18px 20px', borderRadius: 14,
                            border: `1px solid ${active ? 'rgba(62,106,225,0.3)' : 'rgba(255,255,255,0.06)'}`,
                            background: active ? 'rgba(62,106,225,0.1)' : 'rgba(255,255,255,0.02)',
                            cursor: 'pointer', textAlign: 'left',
                            transition: 'all 0.3s',
                          }}
                          onMouseEnter={e => {
                            if (!active) {
                              (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.04)';
                              (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.1)';
                            }
                          }}
                          onMouseLeave={e => {
                            if (!active) {
                              (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.02)';
                              (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.06)';
                            }
                          }}
                        >
                          <div style={{
                            width: 44, height: 44, borderRadius: 12,
                            background: active ? 'rgba(62,106,225,0.2)' : 'rgba(62,106,225,0.08)',
                            border: `1px solid ${active ? 'rgba(62,106,225,0.3)' : 'rgba(62,106,225,0.1)'}`,
                            display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                            color: '#3E6AE1',
                          }}>
                            <s.Icon />
                          </div>
                          <div style={{ flexGrow: 1 }}>
                            <div style={{ fontSize: 15, fontWeight: 600, color: '#f0f2f5' }}>{s.name}</div>
                            <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', marginTop: 2, fontWeight: 300 }}>{s.desc}</div>
                          </div>
                          <ChevronRight size={16} style={{ color: 'rgba(255,255,255,0.2)', flexShrink: 0 }} />
                        </button>
                      );
                    })}
                  </div>
                </motion.div>
              )}

              {/* Step 2 */}
              {step === 2 && (
                <motion.div key="s2" initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -16 }} transition={{ duration: 0.25 }}>
                  <h2 style={{ fontSize: 22, fontWeight: 600, color: '#f0f2f5', marginBottom: 24, letterSpacing: '-0.02em' }}>Your Information</h2>
                  <form onSubmit={e => { e.preventDefault(); setStep(3); }} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                      <div>
                        <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.3)', marginBottom: 8, letterSpacing: '0.06em', textTransform: 'uppercase' }}>Full Name</label>
                        <input className="lgd-input-dark" placeholder="John Doe" required
                          value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} />
                      </div>
                      <div>
                        <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.3)', marginBottom: 8, letterSpacing: '0.06em', textTransform: 'uppercase' }}>Phone</label>
                        <input className="lgd-input-dark" type="tel" placeholder="(601) 000-0000" required
                          value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} />
                      </div>
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.3)', marginBottom: 8, letterSpacing: '0.06em', textTransform: 'uppercase' }}>Service Address</label>
                      <input className="lgd-input-dark" placeholder="123 Main St, Hattiesburg, MS" required
                        value={formData.address} onChange={e => setFormData({ ...formData, address: e.target.value })} />
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                      <div>
                        <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.3)', marginBottom: 8, letterSpacing: '0.06em', textTransform: 'uppercase' }}>Preferred Date</label>
                        <input className="lgd-input-dark" type="date" required
                          value={formData.date} onChange={e => setFormData({ ...formData, date: e.target.value })} />
                      </div>
                      <div>
                        <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.3)', marginBottom: 8, letterSpacing: '0.06em', textTransform: 'uppercase' }}>Time Slot</label>
                        <select className="lgd-input-dark" value={formData.time} onChange={e => setFormData({ ...formData, time: e.target.value })}
                          style={{
                            width: '100%', padding: '14px 18px', fontSize: 14,
                            color: '#f0f2f5',
                            background: 'rgba(255,255,255,0.04)',
                            border: '1px solid rgba(255,255,255,0.06)',
                            borderRadius: 8, outline: 'none',
                            cursor: 'pointer', appearance: 'none',
                          }}>
                          <option style={{ background: '#16171f' }}>Morning (8am - 12pm)</option>
                          <option style={{ background: '#16171f' }}>Afternoon (12pm - 5pm)</option>
                          <option style={{ background: '#16171f' }}>Emergency (ASAP)</option>
                        </select>
                      </div>
                    </div>
                    <div style={{ display: 'flex', gap: 12, marginTop: 8 }}>
                      <button type="button" onClick={() => setStep(1)} style={{
                        flex: 1, height: 48,
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        color: '#f0f2f5',
                        fontSize: 14, fontWeight: 500, borderRadius: 10,
                        cursor: 'pointer',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
                        transition: 'all 0.3s',
                      }}
                      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.08)'; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.04)'; }}
                      >
                        <ArrowLeft size={14} /> Back
                      </button>
                      <button type="submit" style={{
                        flex: 2, height: 48, background: '#3E6AE1', color: '#fff',
                        fontSize: 15, fontWeight: 500, borderRadius: 10, border: 'none',
                        cursor: 'pointer', transition: 'all 0.33s',
                        boxShadow: '0 0 25px rgba(62,106,225,0.25)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
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
                      >Confirm Booking <ArrowRight size={14} /></button>
                    </div>
                  </form>
                </motion.div>
              )}

              {/* Step 3 */}
              {step === 3 && (
                <motion.div key="s3" initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3 }}
                  style={{ textAlign: 'center', padding: '48px 0' }}>
                  <div style={{
                    width: 72, height: 72, borderRadius: '50%',
                    background: 'rgba(62,106,225,0.1)',
                    border: '1px solid rgba(62,106,225,0.2)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    margin: '0 auto 24px',
                    boxShadow: '0 0 40px rgba(62,106,225,0.15)',
                  }}>
                    <CheckCircle2 size={32} strokeWidth={1.5} style={{ color: '#3E6AE1' }} />
                  </div>
                  <h2 style={{ fontSize: 26, fontWeight: 600, color: '#f0f2f5', marginBottom: 8, letterSpacing: '-0.02em' }}>Booking Confirmed</h2>
                  <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.45)', maxWidth: 380, margin: '0 auto 32px', lineHeight: 1.65, fontWeight: 300 }}>
                    Thank you for choosing Legacy Garage Doors. We've received your request and will contact you shortly to confirm the exact time.
                  </p>
                  <button onClick={() => { setStep(1); setSelected(''); setFormData({ name: '', phone: '', address: '', date: '', time: 'Morning (8am - 12pm)' }); }}
                    style={{
                      height: 48, padding: '0 28px', background: '#3E6AE1', color: '#fff',
                      fontSize: 15, fontWeight: 500, borderRadius: 10, border: 'none', cursor: 'pointer',
                      boxShadow: '0 0 25px rgba(62,106,225,0.25)',
                    }}>Done</button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Trust badges */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: 32, marginTop: 32, opacity: 0.4 }}>
            {[
              { text: 'Secure Booking' },
              { text: '24/7 Support' },
            ].map(b => (
              <div key={b.text} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, fontWeight: 500, color: 'rgba(255,255,255,0.5)' }}>
                <ShieldIcon /> {b.text}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
