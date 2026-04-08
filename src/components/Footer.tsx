import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, Clock, MapPin, Facebook, ArrowRight } from 'lucide-react';

const nav = [
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Financing', href: '/financing' },
  { label: 'Contact', href: '/contact' },
  { label: 'Book Online', href: '/book-online' },
];

export default function Footer() {
  return (
    <footer style={{ background: '#07080d', color: 'rgba(255,255,255,0.4)', fontSize: 14 }}>
      {/* Top gradient line */}
      <div style={{
        height: 1,
        background: 'linear-gradient(90deg, transparent, rgba(62,106,225,0.3), transparent)',
      }} />

      {/* CTA bar */}
      <div style={{
        maxWidth: 1200, margin: '0 auto', padding: '56px 40px',
        display: 'flex', flexWrap: 'wrap', alignItems: 'center',
        justifyContent: 'space-between', gap: 24,
        borderBottom: '1px solid rgba(255,255,255,0.04)',
      }}>
        <div>
          <p style={{
            fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase',
            color: '#3E6AE1', marginBottom: 8, fontWeight: 600,
          }}>Ready to upgrade?</p>
          <h3 style={{
            fontSize: 'clamp(22px, 2.5vw, 30px)', fontWeight: 500, color: '#f0f2f5',
            letterSpacing: '-0.02em',
          }}>Get a free estimate today.</h3>
        </div>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <Link to="/book-online" style={{
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 6,
            height: 44, padding: '0 24px', background: '#3E6AE1', color: '#fff',
            fontSize: 14, fontWeight: 500, borderRadius: 10,
            boxShadow: '0 0 25px rgba(62,106,225,0.25)',
            transition: 'all 0.33s',
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
          >Book Online <ArrowRight size={13} /></Link>
          <a href="tel:6019135975" style={{
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            height: 44, padding: '0 24px',
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.08)',
            color: '#f0f2f5', fontSize: 14, fontWeight: 500, borderRadius: 10,
            backdropFilter: 'blur(8px)',
            transition: 'all 0.33s',
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.1)'; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.05)'; }}
          >601-913-5975</a>
        </div>
      </div>

      {/* Footer grid */}
      <div style={{
        maxWidth: 1200, margin: '0 auto', padding: '56px 40px',
        display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
        gap: 40,
      }}>
        {/* Brand */}
        <div>
          <Link to="/"><img src="/images/logo-shield.png" alt="Legacy" style={{
            height: 156, marginBottom: 16, filter: 'brightness(1.2)',
          }} /></Link>
          <p style={{ lineHeight: 1.7, maxWidth: 220, marginBottom: 16, fontSize: 13, fontWeight: 300 }}>
            Family-owned &amp; operated. Serving Hattiesburg &amp; Southern MS for over 10 years.
          </p>
          <a href="https://www.bbb.org/us/ms/purvis/profile/garage-door-repair/legacy-garage-doors-llc-0523-235906838" target="_blank" rel="noopener noreferrer">
            <img src="/images/bbb-accredited.png" alt="BBB" style={{
              height: 36, background: 'rgba(255,255,255,0.9)', padding: '4px 8px', borderRadius: 6,
            }} />
          </a>
        </div>

        {/* Nav */}
        <div>
          <h4 style={{
            fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.2)', marginBottom: 20,
          }}>Navigation</h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
            {nav.map(l => (
              <li key={l.label}>
                <Link to={l.href} style={{
                  color: 'rgba(255,255,255,0.4)',
                  transition: 'color 0.3s', fontSize: 13,
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#fff'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.4)'; }}
                >{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 style={{
            fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.2)', marginBottom: 20,
          }}>Contact</h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 16 }}>
            {[
              { icon: Phone, text: '601-913-5975', href: 'tel:6019135975' },
              { icon: Mail, text: 'seth@legacydoorsales.com', href: 'mailto:seth@legacydoorsales.com' },
              { icon: Clock, text: 'Open 24/7 Emergencies' },
              { icon: MapPin, text: 'Hattiesburg & Southern MS' },
            ].map((c, i) => (
              <li key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 13 }}>
                <c.icon size={13} style={{ color: '#3E6AE1', flexShrink: 0 }} />
                {c.href ? (
                  <a href={c.href} style={{
                    color: 'rgba(255,255,255,0.4)', transition: 'color 0.3s',
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#fff'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.4)'; }}
                  >{c.text}</a>
                ) : <span>{c.text}</span>}
              </li>
            ))}
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 style={{
            fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.2)', marginBottom: 20,
          }}>Follow</h4>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              width: 40, height: 40, borderRadius: 10,
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
      </div>

      {/* Bottom */}
      <div style={{
        maxWidth: 1200, margin: '0 auto', padding: '20px 40px',
        borderTop: '1px solid rgba(255,255,255,0.04)',
        display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between',
        gap: 12, fontSize: 12, color: 'rgba(255,255,255,0.2)',
      }}>
        <span>© {new Date().getFullYear()} Legacy Doors, LLC. All Rights Reserved.</span>
        <div style={{ display: 'flex', gap: 20 }}>
          <Link to="/privacy" style={{ color: 'rgba(255,255,255,0.2)', transition: 'color 0.3s' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.5)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.2)'; }}
          >Privacy</Link>
          <Link to="/terms" style={{ color: 'rgba(255,255,255,0.2)', transition: 'color 0.3s' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.5)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.2)'; }}
          >Terms</Link>
        </div>
      </div>
    </footer>
  );
}
