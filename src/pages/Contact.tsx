import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, Clock, MapPin, Facebook, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div style={{ background: '#07080d' }}>
      {/* Hero */}
      <section className="page-hero">
        <p style={{ position: 'relative', fontSize: 11, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#3E6AE1', marginBottom: 20 }}>Contact</p>
        <h1>Let's Talk.</h1>
        <p>Questions, emergencies, or free estimates — we're here for you, 24/7.</p>
      </section>

      {/* Content */}
      <section style={{ padding: '100px 0', background: '#0c0d14', position: 'relative' }}>
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: 1,
          background: 'linear-gradient(90deg, transparent, rgba(62,106,225,0.2), transparent)',
        }} />
        <div className="section-wrap">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: 64 }}>
            {/* Info */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div style={{ width: 48, height: 2, background: 'linear-gradient(90deg, #3E6AE1, transparent)', marginBottom: 20 }} />
              <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#3E6AE1', marginBottom: 16 }}>Get in Touch</p>
              <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 40px)', fontWeight: 500, color: '#f0f2f5', marginBottom: 24, letterSpacing: '-0.03em', lineHeight: 1.12 }}>
                We'd love to{' '}
                <span style={{
                  background: 'linear-gradient(135deg, #3E6AE1, #818cf8)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>hear from you</span>.
              </h2>
              <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.45)', lineHeight: 1.75, marginBottom: 40, fontWeight: 300 }}>
                Whether you need an emergency repair at midnight or want to schedule a free estimate for a new installation, our team is ready to help.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {[
                  { icon: Phone, label: 'Phone', lines: [
                    { text: '601-913-5975', href: 'tel:6019135975' },
                    { text: '601-436-7907', href: 'tel:6014367907' },
                  ]},
                  { icon: Mail, label: 'Email', lines: [
                    { text: 'seth@legacydoorsales.com', href: 'mailto:seth@legacydoorsales.com' },
                    { text: 'jessica@legacydoorsales.com', href: 'mailto:jessica@legacydoorsales.com' },
                  ]},
                  { icon: Clock, label: 'Hours', lines: [
                    { text: 'Open 24/7 for Emergencies' },
                    { text: 'Standard: Mon–Fri 8am–5pm' },
                  ]},
                  { icon: MapPin, label: 'Area', lines: [
                    { text: 'Hattiesburg & all of Southern MS' },
                  ]},
                ].map(c => {
                  const Icon = c.icon;
                  return (
                    <div key={c.label} style={{
                      display: 'flex', gap: 16, alignItems: 'flex-start',
                      background: 'rgba(255,255,255,0.02)',
                      border: '1px solid rgba(255,255,255,0.05)',
                      borderRadius: 14,
                      padding: '18px 20px',
                      transition: 'all 0.3s',
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = 'rgba(62,106,225,0.15)';
                      (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.04)';
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.05)';
                      (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.02)';
                    }}
                    >
                      <div style={{
                        width: 42, height: 42, borderRadius: 12,
                        background: 'rgba(62,106,225,0.1)',
                        border: '1px solid rgba(62,106,225,0.15)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                      }}>
                        <Icon size={16} strokeWidth={1.5} style={{ color: '#3E6AE1' }} />
                      </div>
                      <div>
                        <div style={{ fontSize: 13, fontWeight: 600, color: '#f0f2f5', marginBottom: 4 }}>{c.label}</div>
                        {c.lines.map((l, i) => (
                          l.href ? (
                            <a key={i} href={l.href} style={{ display: 'block', fontSize: 14, color: 'rgba(255,255,255,0.45)', lineHeight: 1.6, transition: 'color 0.25s', fontWeight: 300 }}
                              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#3E6AE1'; }}
                              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.45)'; }}
                            >{l.text}</a>
                          ) : <div key={i} style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)', lineHeight: 1.6, fontWeight: 300 }}>{l.text}</div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div style={{ marginTop: 24 }}>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  width: 42, height: 42, borderRadius: 12,
                  border: '1px solid rgba(255,255,255,0.06)',
                  background: 'rgba(255,255,255,0.03)',
                  color: 'rgba(255,255,255,0.4)',
                  transition: 'all 0.3s',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = 'rgba(62,106,225,0.3)';
                  el.style.color = '#3E6AE1';
                  el.style.boxShadow = '0 0 20px rgba(62,106,225,0.15)';
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = 'rgba(255,255,255,0.06)';
                  el.style.color = 'rgba(255,255,255,0.4)';
                  el.style.boxShadow = 'none';
                }}
                ><Facebook size={16} /></a>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
              <div style={{
                background: 'rgba(255,255,255,0.02)',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(255,255,255,0.06)',
                padding: 'clamp(32px, 4vw, 48px)',
                borderRadius: 20,
                position: 'relative',
                overflow: 'hidden',
              }}>
                <div style={{
                  position: 'absolute', top: 0, left: 0, right: 0, height: 2,
                  background: 'linear-gradient(90deg, #3E6AE1, #818cf8, #3E6AE1)',
                }} />

                {submitted ? (
                  <div style={{ textAlign: 'center', padding: '40px 0' }}>
                    <div style={{
                      width: 64, height: 64, borderRadius: '50%',
                      background: 'rgba(62,106,225,0.1)',
                      border: '1px solid rgba(62,106,225,0.2)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      margin: '0 auto 24px',
                    }}>
                      <CheckCircle2 size={28} strokeWidth={1.5} style={{ color: '#3E6AE1' }} />
                    </div>
                    <h3 style={{ fontSize: 22, fontWeight: 600, color: '#f0f2f5', marginBottom: 8 }}>Message Sent</h3>
                    <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)', marginBottom: 24, fontWeight: 300 }}>We'll get back to you within one business day.</p>
                    <button onClick={() => setSubmitted(false)} style={{
                      height: 44, padding: '0 28px', background: '#3E6AE1', color: '#fff',
                      fontSize: 14, fontWeight: 500, borderRadius: 10, border: 'none', cursor: 'pointer',
                      boxShadow: '0 0 20px rgba(62,106,225,0.25)',
                    }}>Send Another</button>
                  </div>
                ) : (
                  <>
                    <h3 style={{ fontSize: 20, fontWeight: 600, color: '#f0f2f5', marginBottom: 28, letterSpacing: '-0.02em' }}>Send us a message</h3>
                    <form onSubmit={e => { e.preventDefault(); setSubmitted(true); }} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                        <div>
                          <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.3)', marginBottom: 8, letterSpacing: '0.06em', textTransform: 'uppercase' }}>First Name</label>
                          <input className="lgd-input-dark" placeholder="John" required />
                        </div>
                        <div>
                          <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.3)', marginBottom: 8, letterSpacing: '0.06em', textTransform: 'uppercase' }}>Last Name</label>
                          <input className="lgd-input-dark" placeholder="Doe" required />
                        </div>
                      </div>
                      <div>
                        <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.3)', marginBottom: 8, letterSpacing: '0.06em', textTransform: 'uppercase' }}>Email</label>
                        <input className="lgd-input-dark" type="email" placeholder="john@example.com" required />
                      </div>
                      <div>
                        <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.3)', marginBottom: 8, letterSpacing: '0.06em', textTransform: 'uppercase' }}>Phone</label>
                        <input className="lgd-input-dark" type="tel" placeholder="(601) 000-0000" />
                      </div>
                      <div>
                        <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.3)', marginBottom: 8, letterSpacing: '0.06em', textTransform: 'uppercase' }}>Message</label>
                        <textarea className="lgd-input-dark" placeholder="How can we help?" required />
                      </div>
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
                      >Send Message</button>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
