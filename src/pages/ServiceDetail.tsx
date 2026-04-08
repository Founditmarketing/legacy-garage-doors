import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, Phone } from 'lucide-react';

const serviceData: Record<string, { title: string; paragraphs: string[]; relatedServices: string[] }> = {
  'new-installations': {
    title: 'New Garage Door Sales & Installation',
    paragraphs: [
      'Whether you\'re building a new home or replacing an aging door, Legacy Garage Doors offers a full selection of premium residential and commercial garage doors from top manufacturers including Clopay, Amarr, Chamberlain, and LiftMaster. We work directly with you to match the right style, material, and insulation level to your home\'s architecture and your budget. Every installation is handled by our own trained technicians — never subcontracted — so you get consistent quality from start to finish.',
      'Our installation process includes a full structural assessment of your opening, precise measurements, and professional mounting with all hardware tested and adjusted before we leave. We don\'t cut corners: every spring is properly tensioned, every seal is flush, and every safety sensor is calibrated. The result is a door that operates quietly, looks sharp, and is backed by our lifetime warranty on labor.',
    ],
    relatedServices: ['preventive-maintenance', 'operator-replacements', 'weather-seals'],
  },
  'preventive-maintenance': {
    title: 'Preventive Maintenance',
    paragraphs: [
      'Most garage door failures are preventable. Our maintenance program includes a full inspection of springs, cables, rollers, tracks, hinges, and weatherstripping — along with lubrication of all moving parts and a tension adjustment to ensure balanced operation. We catch small problems before they become expensive emergencies, which is why customers who schedule regular maintenance rarely need emergency repair calls.',
      'We recommend annual maintenance at a minimum, though homes in Southern Mississippi\'s humid climate benefit from biannual service. Each visit includes a written report of your door\'s condition so you always know where things stand. Our maintenance customers also receive priority scheduling and discounted parts if a component does need replacing down the line.',
    ],
    relatedServices: ['expert-repairs', 'spring-replacements', 'rollers-and-cables'],
  },
  'expert-repairs': {
    title: 'Expert Repairs',
    paragraphs: [
      'Garage doors break at the worst possible times — that\'s why Legacy offers same-day repair service with 24/7 emergency availability. Whether it\'s a snapped cable, a motor that stops responding, a door that\'s jumped its track, or panels damaged by weather or impact, our technicians have the parts and experience to get you back up and running fast. We service all major brands and models, residential and commercial.',
      'Every repair starts with an honest diagnosis. We\'ll tell you exactly what\'s wrong, what it costs to fix, and whether repair or replacement makes more financial sense for your situation. There are no hidden fees, no upselling, and no pressure. Our trucks carry the most common replacement parts so the majority of repairs are completed in a single visit.',
    ],
    relatedServices: ['diagnostic-service', 'spring-replacements', 'rollers-and-cables'],
  },
  'diagnostic-service': {
    title: 'Diagnostic Service Calls',
    paragraphs: [
      'Not every garage door problem is obvious. Strange noises, intermittent failures, uneven movement, or a door that "just doesn\'t feel right" all point to underlying issues that need professional assessment. Our diagnostic service call is a thorough, systematic inspection where we test every component of your door system — mechanical, electrical, and structural — to identify exactly what\'s going on.',
      'You\'ll receive a clear, written explanation of our findings along with prioritized repair recommendations. We believe in transparency: you\'ll understand the problem and the options before any work begins. If you choose to proceed with repairs on the spot, the diagnostic fee is applied toward the cost of the work.',
    ],
    relatedServices: ['expert-repairs', 'preventive-maintenance', 'operator-replacements'],
  },
  'spring-replacements': {
    title: 'Spring Replacements',
    paragraphs: [
      'Garage door springs are under extreme tension and are one of the most dangerous components to work with — this is never a DIY job. Legacy technicians are trained and equipped to safely remove and replace both torsion and extension springs. We use high-cycle springs rated for 20,000+ cycles, which means they\'ll last significantly longer than standard-grade components. Every spring replacement includes a full system rebalancing so your door tracks smoothly and your opener isn\'t working harder than it needs to.',
      'Most spring replacements are completed within an hour. We always replace springs in matched pairs — even if only one has broken — because the second spring is almost certainly near the end of its life as well. Replacing both at once saves you from a second service call and ensures even tension across the system. All spring work is covered by our lifetime labor warranty.',
    ],
    relatedServices: ['rollers-and-cables', 'expert-repairs', 'preventive-maintenance'],
  },
  'rollers-and-cables': {
    title: 'Rollers & Cables',
    paragraphs: [
      'Worn rollers are the number one cause of noisy garage doors. Legacy replaces standard steel rollers with precision-bearing nylon rollers that reduce operating noise by up to 75%. The difference is immediate and dramatic — a door that used to rattle the house will glide open almost silently. We also inspect and replace frayed or damaged cables, which are critical safety components that prevent the door from free-falling if a spring fails.',
      'Cable and roller replacements are typically completed in under an hour. We use aircraft-grade galvanized steel cables that resist corrosion in Mississippi\'s humid conditions. During every roller or cable job, we also inspect the track alignment and hinges, since these components work together as a system. If anything else needs attention, we\'ll let you know before proceeding.',
    ],
    relatedServices: ['spring-replacements', 'preventive-maintenance', 'expert-repairs'],
  },
  'weather-seals': {
    title: 'Weather Seals',
    paragraphs: [
      'Mississippi\'s heat, humidity, and occasional storms take a toll on garage door weatherstripping. Cracked or missing seals let in rain, dust, insects, and hot air — turning your garage into an uncomfortable space and driving up cooling costs for the rest of your home. Legacy replaces bottom seals, side seals, and header seals with commercial-grade EPDM rubber that stays flexible and effective for years, even in extreme temperatures.',
      'Proper weather sealing also protects anything you store in your garage — tools, vehicles, seasonal items — from moisture damage and pest intrusion. Installation is fast and affordable, and the energy savings alone often pay for the service within the first season. We also check the threshold and floor contact during installation to make sure you get a tight seal all the way around.',
    ],
    relatedServices: ['preventive-maintenance', 'new-installations', 'expert-repairs'],
  },
  'operator-replacements': {
    title: 'Operator Replacements',
    paragraphs: [
      'If your garage door opener is more than 10 years old, it\'s likely louder, slower, and less secure than modern alternatives. Legacy installs smart-enabled operators from LiftMaster and Chamberlain that feature ultra-quiet belt-drive motors, built-in WiFi, battery backup, and integration with home automation systems. You can open, close, and monitor your garage from anywhere using your phone.',
      'We handle the full replacement process: removing your old unit, installing the new operator, programming remotes and keypads, setting force and travel limits, and testing safety reversal sensors. We\'ll also walk you through the app setup so you\'re comfortable using all the smart features before we leave. Every operator installation includes our lifetime labor warranty.',
    ],
    relatedServices: ['new-installations', 'expert-repairs', 'diagnostic-service'],
  },
};

const slugToTitle: Record<string, string> = Object.fromEntries(
  Object.entries(serviceData).map(([slug, data]) => [slug, data.title])
);

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? serviceData[slug] : null;

  if (!service) {
    return (
      <div style={{ background: '#07080d', minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', flexDirection: 'column', gap: 20, paddingTop: 80 }}>
        <h1 style={{ fontSize: 32, fontWeight: 600 }}>Service Not Found</h1>
        <Link to="/services" style={{ color: '#3E6AE1', display: 'flex', alignItems: 'center', gap: 6 }}>
          <ArrowLeft size={16} /> Back to All Services
        </Link>
      </div>
    );
  }

  return (
    <div style={{ background: '#07080d' }}>
      {/* Hero */}
      <section style={{
        padding: '140px 0 60px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Ambient glow */}
        <div style={{
          position: 'absolute', top: '30%', left: '20%',
          width: 500, height: 400,
          background: 'radial-gradient(ellipse at center, rgba(62,106,225,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div className="section-wrap" style={{ position: 'relative' }}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/services"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                fontSize: 13, fontWeight: 500, color: 'rgba(255,255,255,0.5)',
                marginBottom: 32, transition: 'color 0.3s',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = '#3E6AE1')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}
            >
              <ArrowLeft size={14} /> All Services
            </Link>

            <p style={{
              fontSize: 11, fontWeight: 600, letterSpacing: '0.14em',
              textTransform: 'uppercase', color: '#3E6AE1', marginBottom: 16,
            }}>
              Service Detail
            </p>

            <h1 style={{
              fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 600,
              letterSpacing: '-0.03em', lineHeight: 1.1,
              color: '#fff', marginBottom: 8, maxWidth: 700,
            }}>
              {service.title}
            </h1>

            {/* Accent line */}
            <div style={{
              width: 60, height: 3, borderRadius: 4,
              background: 'linear-gradient(90deg, #3E6AE1, #818cf8)',
              marginTop: 24,
            }} />
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section style={{ paddingBottom: 80 }}>
        <div className="section-wrap">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            style={{ maxWidth: 720 }}
          >
            {service.paragraphs.map((p, i) => (
              <p key={i} style={{
                fontSize: 17, lineHeight: 1.8, color: 'rgba(255,255,255,0.7)',
                marginBottom: 28, fontWeight: 300,
              }}>
                {p}
              </p>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{
              marginTop: 48, display: 'flex', flexWrap: 'wrap', gap: 14,
            }}
          >
            <Link
              to="/book-online"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '14px 32px', borderRadius: 10,
                background: '#3E6AE1', color: '#fff',
                fontSize: 15, fontWeight: 500,
                boxShadow: '0 0 25px rgba(62,106,225,0.3)',
                transition: 'all 0.3s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = '#4d78e8';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = '#3E6AE1';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Schedule This Service <ArrowRight size={16} />
            </Link>
            <a
              href="tel:6019135975"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '14px 32px', borderRadius: 10,
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                color: '#fff', fontSize: 15, fontWeight: 500,
                transition: 'all 0.3s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
              }}
            >
              <Phone size={16} /> 601-913-5975
            </a>
          </motion.div>
        </div>
      </section>

      {/* Related Services */}
      <section style={{ padding: '60px 0 100px', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
        <div className="section-wrap">
          <p style={{
            fontSize: 11, fontWeight: 600, letterSpacing: '0.14em',
            textTransform: 'uppercase', color: '#3E6AE1', marginBottom: 24,
          }}>
            Related Services
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
            {service.relatedServices.map(rs => (
              <Link
                key={rs}
                to={`/services/${rs}`}
                style={{
                  padding: '12px 24px', borderRadius: 10,
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  color: 'rgba(255,255,255,0.7)',
                  fontSize: 14, fontWeight: 500,
                  transition: 'all 0.3s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'rgba(62,106,225,0.1)';
                  e.currentTarget.style.borderColor = 'rgba(62,106,225,0.2)';
                  e.currentTarget.style.color = '#fff';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
                  e.currentTarget.style.color = 'rgba(255,255,255,0.7)';
                }}
              >
                {slugToTitle[rs] || rs}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
