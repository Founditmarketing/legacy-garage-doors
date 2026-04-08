"use client";
import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, ArrowRight } from "lucide-react";

const SLIDES = [
  {
    image: "/images/hero-craftsman.png",
    words: ["Precision", "Engineered.", "Architecturally", "Refined."],
    sub: "Garage doors that redefine your home — security, silence, and striking design in every panel.",
  },
  {
    image: "/images/garage-house-1.jpg",
    words: ["Open", "24/7.", "No", "Exceptions."],
    sub: "Emergency service when you need it. We answer the phone at midnight, weekends, and holidays.",
  },
  {
    image: "/images/garage-house-2.jpg",
    words: ["Built", "to", "Last.", "Backed", "for", "Life."],
    sub: "Every installation includes our lifetime warranty. Over a decade of trusted craftsmanship.",
  },
];

const STATS = [
  { end: 24, suffix: "/7", label: "Emergency Service" },
  { end: 10, suffix: "+", label: "Years Experience" },
  { end: 5, suffix: "★", label: "Google Rated" },
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
            display: "inline-block",
            width: 2,
            height: "1em",
            background: "#3E6AE1",
            marginLeft: 2,
            verticalAlign: "middle",
            animation: "cursorBlink 0.8s step-end infinite",
          }}
        />
      )}
    </span>
  );
}

export default function CinematicHero() {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);

  const advance = useCallback(() => {
    setIdx((p) => (p + 1) % SLIDES.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const iv = setInterval(advance, 7000);
    return () => clearInterval(iv);
  }, [advance, paused]);

  const slide = SLIDES[idx];

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Background Images */}
      <AnimatePresence mode="sync">
        <motion.div
          key={idx}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 z-0"
        >
          <Image
            src={slide.image}
            alt="Legacy Garage Doors"
            fill
            className="object-cover"
            priority={idx === 0}
            quality={85}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0c0d14]/90 via-[#0c0d14]/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c0d14] via-transparent to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 section-wrap py-32">
        <div className="max-w-2xl">
          {/* Staggered words */}
          <AnimatePresence mode="wait">
            <motion.div key={idx} className="mb-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]">
                {slide.words.map((word, i) => (
                  <motion.span
                    key={`${idx}-${i}`}
                    initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{
                      duration: 0.6,
                      delay: i * 0.12,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="inline-block mr-[0.3em]"
                  >
                    {word}
                  </motion.span>
                ))}
              </h1>
            </motion.div>
          </AnimatePresence>

          {/* Typewriter subtitle */}
          <AnimatePresence mode="wait">
            <motion.p
              key={`sub-${idx}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="text-lg text-white/50 max-w-lg mb-10 leading-relaxed font-light"
            >
              <Typewriter text={slide.sub} delay={600} />
            </motion.p>
          </AnimatePresence>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-wrap gap-4 mb-14"
          >
            <Link href="/book-online" className="btn-primary text-base">
              Book Appointment <ArrowRight size={18} />
            </Link>
            <Link href="/services" className="btn-ghost text-base">
              Explore Services
            </Link>
          </motion.div>

          {/* Stat counters */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="flex gap-8"
          >
            {STATS.map((s, i) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white">
                  <Counter end={s.end} suffix={s.suffix} delay={1400 + i * 200} />
                </div>
                <div className="text-xs text-white/30 mt-1 uppercase tracking-wider font-medium">
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-10 right-10 z-20 flex items-center gap-3">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            className={`transition-all duration-300 rounded-full ${
              i === idx
                ? "w-8 h-2 bg-[#3E6AE1]"
                : "w-2 h-2 bg-white/20 hover:bg-white/40"
            }`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-white/30 uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown size={18} className="text-white/30" />
        </motion.div>
      </motion.div>
    </section>
  );
}
