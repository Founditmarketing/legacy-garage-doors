import React from 'react';
import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const reviews = [
  {
    text: 'I had such a great experience with Legacy garage door company! From the very first call, everyone was super nice and easy to work with. The installers showed up right on time, got straight to work, and honestly made the whole thing look effortless. They were friendly, answered all my random questions, and made sure everything worked perfectly before they left. Great people, great service, and a super smooth install. If you\'re thinking about getting a new garage door, these are absolutely the folks to call!',
    name: 'Cory A.', location: 'Google Review', initials: 'CA',
  },
  {
    text: 'I have used other garage door company\'s in the past but Legacy Garage Doors is by far the best. The owner Seth and his employee Benjamin completed the work I needed and were extremely professional. They took the time to explain their processes and what I needed to do to maintain my garage door and opener in the future. The price was more than competitive and very fair. I would never hesitate to hire Legacy Garage Doors again and would tell everyone to do the same.',
    name: 'Lowell P.', location: 'Google Review', initials: 'LP',
  },
  {
    text: 'Appointment scheduled within 24 hours and door was fixed the same day. Very timely and reasonably priced. Would recommend and will use again if needed.',
    name: 'Michelle J.', location: 'Google Review', initials: 'MJ',
  },
];

export default function Testimonial() {
  return (
    <section style={{
      padding: '80px 0',
      background: '#f7f8fc',
      position: 'relative',
    }}>
      {/* Top gradient accent */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 1,
        background: 'linear-gradient(90deg, transparent, rgba(62,106,225,0.15), transparent)',
      }} />

      <div className="section-wrap">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 56 }}
        >
          <p style={{
            fontSize: 11, fontWeight: 600, letterSpacing: '0.14em',
            textTransform: 'uppercase', color: '#3E6AE1', marginBottom: 16,
          }}>Reviews</p>
          <h2 style={{
            fontSize: 'clamp(28px, 3.5vw, 42px)', fontWeight: 500,
            color: '#0d1b2a', letterSpacing: '-0.03em',
          }}>
            Trusted across Southern Mississippi.
          </h2>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: 20,
        }}>
          {reviews.map((r, i) => (
            <motion.div key={r.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              style={{
                background: '#fff',
                padding: '36px 32px',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: 16,
                border: '1px solid rgba(0,0,0,0.04)',
                boxShadow: '0 4px 20px rgba(50,50,93,0.06), 0 2px 8px rgba(0,0,0,0.04)',
                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                cursor: 'default',
                position: 'relative',
                overflow: 'hidden',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.boxShadow = '0 16px 48px rgba(50,50,93,0.12), 0 8px 24px rgba(0,0,0,0.08)';
                el.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.boxShadow = '0 4px 20px rgba(50,50,93,0.06), 0 2px 8px rgba(0,0,0,0.04)';
                el.style.transform = 'translateY(0)';
              }}
            >
              {/* Decorative quote mark */}
              <div style={{
                position: 'absolute', top: 20, right: 24,
                fontSize: 72, lineHeight: 1, fontWeight: 700,
                color: 'rgba(62,106,225,0.06)',
                fontFamily: 'Georgia, serif',
                pointerEvents: 'none',
              }}>"</div>

              <div style={{ display: 'flex', gap: 2, marginBottom: 20 }}>
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={14} style={{ color: '#3E6AE1', fill: '#3E6AE1' }} />
                ))}
              </div>
              <p style={{
                fontSize: 15, color: '#4a5568', lineHeight: 1.75,
                flexGrow: 1, marginBottom: 28, fontWeight: 300,
                position: 'relative',
              }}>"{r.text}"</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <div style={{
                  width: 40, height: 40, borderRadius: '50%',
                  background: 'linear-gradient(135deg, #3E6AE1, #818cf8)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#fff', fontSize: 12, fontWeight: 600, flexShrink: 0,
                  boxShadow: '0 4px 12px rgba(62,106,225,0.25)',
                }}>{r.initials}</div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: '#0d1b2a' }}>{r.name}</div>
                  <div style={{ fontSize: 12, color: '#718096' }}>{r.location}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
