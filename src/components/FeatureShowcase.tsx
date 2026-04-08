import React from 'react';
import { motion } from 'motion/react';

const features = [
  {
    tag: 'Technology',
    title: 'Silent\nOperation',
    desc: 'Advanced belt-drive systems practically eliminate mechanical noise. Your home stays peaceful — whether it\'s midnight or sunrise. Motors engineered for zero-compromise performance.',
    image: '/images/garage-house-1.jpg',
  },
  {
    tag: 'Engineering',
    title: 'Thermal\nInsulation',
    desc: 'Multi-layered polyurethane insulation maintains ideal garage temperatures year-round. Your energy bill drops, your comfort rises, and everything inside stays protected.',
    image: '/images/garage-house-2.jpg',
  },
];

export default function FeatureShowcase() {
  return (
    <section style={{ background: '#07080d' }}>
      {features.map((f, i) => {
        const flip = i % 2 !== 0;
        return (
          <div key={i} style={{
            display: 'flex', flexWrap: 'wrap',
            flexDirection: flip ? 'row-reverse' : 'row',
            minHeight: '60vh',
            position: 'relative',
          }}>
            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: flip ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              style={{
                flex: '1 1 420px', display: 'flex', flexDirection: 'column',
                justifyContent: 'center', padding: 'clamp(48px, 8vw, 120px)',
                position: 'relative',
                zIndex: 2,
              }}
            >
              {/* Accent line */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                style={{
                  width: 48, height: 2,
                  background: 'linear-gradient(90deg, #3E6AE1, rgba(62,106,225,0.2))',
                  marginBottom: 20,
                  transformOrigin: 'left',
                }}
              />

              <p style={{
                fontSize: 11, fontWeight: 600, letterSpacing: '0.14em',
                textTransform: 'uppercase', color: '#3E6AE1', marginBottom: 20,
              }}>{f.tag}</p>
              <h2 style={{
                fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 500,
                color: '#f0f2f5', marginBottom: 24, lineHeight: 1.08,
                letterSpacing: '-0.03em', whiteSpace: 'pre-line',
              }}>{f.title}</h2>
              <p style={{
                fontSize: 16, color: 'rgba(255,255,255,0.4)',
                lineHeight: 1.75, maxWidth: 420, fontWeight: 300,
              }}>{f.desc}</p>
            </motion.div>

            {/* Image */}
            <div style={{
              flex: '1 1 420px', position: 'relative', overflow: 'hidden',
              minHeight: 400,
            }}>
              <motion.img
                initial={{ scale: 1.12 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.6, ease: 'easeOut' }}
                src={f.image} alt={f.title}
                style={{
                  position: 'absolute', inset: 0, width: '100%', height: '100%',
                  objectFit: 'cover',
                }} />
              {/* Cinematic bleed */}
              <div style={{
                position: 'absolute', inset: 0,
                background: flip
                  ? 'linear-gradient(to left, rgba(7,8,13,0.6) 0%, transparent 40%)'
                  : 'linear-gradient(to right, rgba(7,8,13,0.6) 0%, transparent 40%)',
              }} />
              {/* Bottom gradient */}
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0, height: '30%',
                background: 'linear-gradient(to top, rgba(7,8,13,0.4), transparent)',
              }} />
            </div>

            {/* Separator line */}
            <div style={{
              position: 'absolute',
              bottom: 0, left: '10%', right: '10%',
              height: 1,
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.04), transparent)',
            }} />
          </div>
        );
      })}
    </section>
  );
}
