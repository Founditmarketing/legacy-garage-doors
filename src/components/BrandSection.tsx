import React, { useState } from 'react';
import { motion } from 'motion/react';

const brands = [
  {
    name: 'LiftMaster',
    image: 'https://static.wixstatic.com/media/b65567_c38c3baf6f6e4ca2acfad0017691ac9b~mv2.png',
  },
  {
    name: 'Clopay',
    image: 'https://static.wixstatic.com/media/b65567_b39a2e54fcf247f59a4514dd02608698~mv2.png',
  },
  {
    name: 'Chamberlain',
    image: 'https://static.wixstatic.com/media/b65567_db2ec489655448e3a5538cd41109967a~mv2.png',
  },
  {
    name: 'Amarr',
    image: 'https://static.wixstatic.com/media/b65567_da75e81b714a4bbb9e94898d411d65e4~mv2.png',
  },
];

export default function BrandSection() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section style={{ padding: '48px 0', background: '#f7f8fc', position: 'relative' }}>
      {/* Top gradient line */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 1,
        background: 'linear-gradient(90deg, transparent, rgba(62,106,225,0.15), transparent)',
      }} />

      <div className="section-wrap" style={{ textAlign: 'center' }}>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: '#3E6AE1',
            marginBottom: 32,
          }}
        >
          Authorized Partners
        </motion.p>

        {/* Horizontal logo strip — NOT tall cards */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 'clamp(24px, 4vw, 56px)',
            flexWrap: 'wrap',
          }}
        >
          {brands.map((b, i) => (
            <motion.div
              key={b.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                padding: '20px 28px',
                cursor: 'default',
                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                transform: hovered === i ? 'translateY(-2px)' : 'translateY(0)',
                background: '#fff',
                borderRadius: 14,
                boxShadow: hovered === i
                  ? '0 8px 30px rgba(50,50,93,0.12), 0 3px 8px rgba(0,0,0,0.08)'
                  : '0 2px 10px rgba(50,50,93,0.06), 0 1px 3px rgba(0,0,0,0.04)',
              }}
            >
              <img
                src={b.image}
                alt={b.name}
                referrerPolicy="no-referrer"
                style={{
                  width: 'clamp(100px, 12vw, 160px)',
                  height: 'auto',
                  objectFit: 'contain',
                  opacity: hovered === null || hovered === i ? 1 : 0.5,
                  transition: 'opacity 0.4s',
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
