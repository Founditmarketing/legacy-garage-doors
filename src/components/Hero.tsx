import React, { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, ArrowRight } from 'lucide-react';

const SLIDES = [
  {
    image: 'https://static.wixstatic.com/media/4e542e_0bd57c4e9fb24a63a25bdb42bafcf067~mv2.jpg',
    words: ['Precision', 'Engineered.', 'Architecturally', 'Refined.'],
    sub: 'Garage doors that redefine your home — security, silence, and striking design in every panel.',
  },
  {
    image: '/images/garage-house-1.jpg',
    words: ['Whisper-Quiet.', 'Effortlessly', 'Smooth.'],
    sub: 'Belt-drive technology that eliminates noise. Your home stays peaceful, day or night.',
  },
  {
    image: '/images/garage-house-2.jpg',
    words: ['Built', 'to', 'Last.', 'Backed', 'for', 'Life.'],
    sub: 'Every installation includes our lifetime warranty. Over a decade of trusted craftsmanship.',
  },
];

const STATS = [
  { end: 24, suffix: '/7', label: 'Emergency Service' },
  { end: 10, suffix: '+', label: 'Years Experience' },
  { end: 5, suffix: '★', label: 'Google Rated' },
];

function Counter({ end, suffix, delay }: { end: number; suffix: string; delay: number }) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    const t = setTimeout(() => {
      const dur = 1200;
      const s = performance.now();
      const tick = (now: number) => {
        const p = Math.min((now - s) / dur, 1);
        const ease = 1 - Math.pow(1 - p, 3);
        setVal(Math.round(ease * end));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, delay);
    return () => clearTimeout(t);
  }, [end, delay]);
  return <>{val}{suffix}</>;
}

function Typewriter({ text, delay }: { text: string; delay: number }) {
  const [shown, setShown] = useState(0);
  useEffect(() => {
    const t = setTimeout(() => {
      let i = 0;
      const iv = setInterval(() => {
        i++;
        setShown(i);
        if (i >= text.length) clearInterval(iv);
      }, 18);
      return () => clearInterval(iv);
    }, delay);
    return () => clearTimeout(t);
  }, [text, delay]);
  return (
    <span>
      {text.slice(0, shown)}
      {shown < text.length && (
        <span
          style={{
            display: 'inline-block',
            width: 2,
            height: '1em',
            background: '#3E6AE1',
            marginLeft: 2,
            verticalAlign: 'middle',
            animation: 'cursorBlink 0.8s step-end infinite',
          }}
        />
      )}
    </span>
  );
}

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [clipRadius, setClipRadius] = useState(0);

  const next = useCallback(() => {
    setClipRadius(0);
    setCurrent((c) => (c + 1) % SLIDES.length);
  }, []);

  useEffect(() => {
    requestAnimationFrame(() => setClipRadius(150));
  }, [current]);

  useEffect(() => {
    const id = setInterval(next, 8000);
    return () => clearInterval(id);
  }, [next]);

  const slide = SLIDES[current];

  return (
    <section
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        minHeight: 640,
        overflow: 'hidden',
        background: '#050508',
      }}
    >
      {/* Animated gradient mesh behind everything */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          background: `
            radial-gradient(ellipse 80% 50% at 20% 80%, rgba(62,106,225,0.08) 0%, transparent 60%),
            radial-gradient(ellipse 60% 60% at 80% 20%, rgba(99,102,241,0.05) 0%, transparent 50%),
            radial-gradient(ellipse 40% 30% at 50% 50%, rgba(62,106,225,0.03) 0%, transparent 40%)
          `,
        }}
      />

      {/* Background images */}
      {SLIDES.map((s, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: i === current ? 1 : 0,
            opacity: i === current ? 1 : 0,
            clipPath:
              i === current
                ? `circle(${clipRadius}% at 50% 50%)`
                : 'circle(0% at 50% 50%)',
            transition:
              i === current
                ? 'clip-path 1.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s'
                : 'opacity 0.6s',
          }}
        >
          <img
            src={s.image}
            alt=""
            referrerPolicy="no-referrer"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              animation: i === current ? 'kenBurns 12s ease-out forwards' : 'none',
            }}
          />
        </div>
      ))}

      {/* Cinematic overlay — deep vignette + gradient */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 2,
          background: `
            radial-gradient(ellipse 70% 50% at 50% 40%, transparent 10%, rgba(5,5,8,0.5) 100%),
            linear-gradient(180deg, rgba(5,5,8,0.15) 0%, rgba(5,5,8,0) 30%, rgba(5,5,8,0.75) 100%)
          `,
        }}
      />

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 3,
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          maxWidth: 1200,
          margin: '0 auto',
          padding: '0 40px 64px',
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {/* Word cascade */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0 14px',
                marginBottom: 16,
                maxWidth: 700,
              }}
            >
              {slide.words.map((word, wi) => (
                <motion.span
                  key={`${current}-${wi}`}
                  initial={{ opacity: 0, y: 30, rotateX: 40 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.6 + wi * 0.12,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  style={{
                    fontSize: 'clamp(36px, 5vw, 68px)',
                    fontWeight: 500,
                    color: '#fff',
                    lineHeight: 1.08,
                    display: 'inline-block',
                    transformOrigin: 'bottom left',
                    letterSpacing: '-0.03em',
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </div>

            {/* Typewriter subtitle */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6, duration: 0.4 }}
              style={{
                fontSize: 16,
                color: 'rgba(255,255,255,0.45)',
                lineHeight: 1.7,
                maxWidth: 460,
                marginBottom: 40,
                minHeight: '2.5em',
                fontWeight: 300,
              }}
            >
              <Typewriter text={slide.sub} delay={1800} />
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.0, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}
            >
              <Link
                to="/book-online"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 8,
                  height: 50,
                  padding: '0 32px',
                  background: '#3E6AE1',
                  color: '#fff',
                  fontSize: 14,
                  fontWeight: 500,
                  borderRadius: 12,
                  transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                  boxShadow: '0 0 30px rgba(62,106,225,0.3), 0 4px 20px rgba(62,106,225,0.2)',
                  letterSpacing: '-0.01em',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = 'translateY(-2px) scale(1.02)';
                  el.style.boxShadow = '0 0 50px rgba(62,106,225,0.45), 0 8px 32px rgba(62,106,225,0.3)';
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = 'translateY(0) scale(1)';
                  el.style.boxShadow = '0 0 30px rgba(62,106,225,0.3), 0 4px 20px rgba(62,106,225,0.2)';
                }}
              >
                Book Appointment <ArrowRight size={14} />
              </Link>

              <Link
                to="/services"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: 50,
                  padding: '0 32px',
                  background: 'rgba(255,255,255,0.06)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  color: '#fff',
                  fontSize: 14,
                  fontWeight: 500,
                  borderRadius: 12,
                  transition: 'all 0.33s',
                  letterSpacing: '-0.01em',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = 'rgba(255,255,255,0.12)';
                  el.style.borderColor = 'rgba(255,255,255,0.2)';
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = 'rgba(255,255,255,0.06)';
                  el.style.borderColor = 'rgba(255,255,255,0.1)';
                }}
              >
                Explore Services
              </Link>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Bottom stats bar — glassmorphism */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 0.6 }}
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            marginTop: 48,
            paddingTop: 24,
            borderTop: '1px solid rgba(255,255,255,0.06)',
          }}
        >
          {/* Stats with glass pills */}
          <div style={{ display: 'flex', gap: 'clamp(16px, 3vw, 32px)' }}>
            {STATS.map((s, i) => (
              <div
                key={s.label}
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  borderRadius: 12,
                  padding: '12px 20px',
                }}
              >
                <div
                  style={{
                    fontSize: 20,
                    fontWeight: 600,
                    color: '#fff',
                    lineHeight: 1,
                    fontFeatureSettings: '"tnum"',
                  }}
                >
                  <Counter end={s.end} suffix={s.suffix} delay={2200 + i * 200} />
                </div>
                <div
                  style={{
                    fontSize: 11,
                    color: 'rgba(255,255,255,0.35)',
                    marginTop: 4,
                    letterSpacing: '0.04em',
                    fontWeight: 500,
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          {/* Right side: dots + scroll hint */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
            {/* Slide dots */}
            <div style={{ display: 'flex', gap: 6 }}>
              {SLIDES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setClipRadius(0);
                    setCurrent(i);
                  }}
                  aria-label={`Slide ${i + 1}`}
                  style={{
                    width: i === current ? 28 : 6,
                    height: 6,
                    borderRadius: 100,
                    border: 'none',
                    background: i === current ? '#3E6AE1' : 'rgba(255,255,255,0.2)',
                    cursor: 'pointer',
                    padding: 0,
                    transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                    position: 'relative',
                    overflow: 'hidden',
                    boxShadow: i === current ? '0 0 12px rgba(62,106,225,0.4)' : 'none',
                  }}
                >
                  {i === current && (
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(90deg, #3E6AE1, #818cf8)',
                        borderRadius: 100,
                        transformOrigin: 'left',
                        animation: 'dotFill 8s linear forwards',
                      }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Scroll indicator */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                animation: 'pulseDown 2s ease-in-out infinite',
              }}
            >
              <span
                style={{
                  fontSize: 10,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.3)',
                  marginBottom: 4,
                  fontWeight: 500,
                }}
              >
                Scroll
              </span>
              <ChevronDown size={14} style={{ color: 'rgba(255,255,255,0.3)' }} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
