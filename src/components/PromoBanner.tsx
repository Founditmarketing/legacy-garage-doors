import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function PromoBanner() {
  return (
    <section
      className="animated-gradient-bg"
      style={{
        padding: '80px 40px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Dot grid overlay */}
      <div className="dot-grid" style={{
        position: 'absolute', inset: 0, opacity: 0.5, pointerEvents: 'none',
      }} />

      {/* Ambient glow */}
      <div style={{
        position: 'absolute', top: '40%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 500, height: 300,
        background: 'radial-gradient(ellipse at center, rgba(62,106,225,0.12) 0%, transparent 70%)',
        pointerEvents: 'none',
        animation: 'glowPulse 4s ease-in-out infinite',
      }} />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        style={{ maxWidth: 640, margin: '0 auto', position: 'relative' }}
      >
        {/* Badge */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          background: 'rgba(62,106,225,0.12)',
          border: '1px solid rgba(62,106,225,0.2)',
          borderRadius: 100,
          padding: '6px 16px',
          marginBottom: 28,
        }}>
          <div style={{
            width: 6, height: 6, borderRadius: '50%',
            background: '#3E6AE1',
            boxShadow: '0 0 8px rgba(62,106,225,0.5)',
            animation: 'glowPulse 2s ease-in-out infinite',
          }} />
          <span style={{ fontSize: 12, fontWeight: 600, color: '#3E6AE1', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            Limited Offer
          </span>
        </div>

        <p style={{ fontSize: 20, color: '#3E6AE1', fontWeight: 600, marginBottom: 16, letterSpacing: '-0.02em' }}>
          $75 OFF Spring Replacement
        </p>
        <h2 style={{
          fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 500,
          color: '#fff', lineHeight: 1.08, marginBottom: 16,
          letterSpacing: '-0.03em',
        }}>
          Limited time offer.
        </h2>
        <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.4)', marginBottom: 44, fontWeight: 300 }}>
          Schedule before the end of the month to lock in your discount.
        </p>
        <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/book-online" style={{
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8,
            height: 52, padding: '0 32px', background: '#3E6AE1', color: '#fff',
            fontSize: 15, fontWeight: 500, borderRadius: 12,
            boxShadow: '0 0 35px rgba(62,106,225,0.35)',
            transition: 'all 0.33s',
          }}
          onMouseEnter={e => {
            const el = e.currentTarget as HTMLElement;
            el.style.boxShadow = '0 0 50px rgba(62,106,225,0.5)';
            el.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={e => {
            const el = e.currentTarget as HTMLElement;
            el.style.boxShadow = '0 0 35px rgba(62,106,225,0.35)';
            el.style.transform = 'translateY(0)';
          }}
          >Claim Discount <ArrowRight size={15} /></Link>
          <Link to="/services" style={{
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            height: 52, padding: '0 32px',
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.1)',
            color: '#fff', fontSize: 15, fontWeight: 500, borderRadius: 12,
            transition: 'all 0.33s', backdropFilter: 'blur(8px)',
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.1)'; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.04)'; }}
          >Learn More</Link>
        </div>
      </motion.div>
    </section>
  );
}
