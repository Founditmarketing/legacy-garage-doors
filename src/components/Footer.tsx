import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, Clock, Facebook, MapPin, ShieldCheck } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center group">
              <img 
                src="/images/logo-shield.png" 
                alt="Legacy Garage Doors Logo" 
                className="h-40 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </Link>
            <a 
              href="https://www.bbb.org/us/ms/purvis/profile/garage-door-repair/legacy-garage-doors-llc-0523-235906838" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:opacity-90 transition-opacity block"
            >
              <img 
                src="/images/bbb-accredited.png"
                alt="BBB Accredited Business"
                className="h-28 w-auto object-contain rounded-[4px] bg-white p-3"
                referrerPolicy="no-referrer"
              />
            </a>
            <p className="text-slate-400 leading-relaxed">
              Family-owned and operated, providing high-quality garage door solutions with honesty, integrity, and care for over 10 years.
            </p>
            <div className="flex gap-4">
              <a href="https://facebook.com" className="bg-slate-800 p-3 rounded-full hover:bg-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-slate-400">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Our Services</Link></li>
              <li><Link to="/financing" className="hover:text-white transition-colors">Financing Options</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link to="/book-online" className="hover:text-white transition-colors">Book Online</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg font-bold mb-6">Get In Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-400">
                <Phone className="w-5 h-5 text-accent shrink-0 mt-1" />
                <div>
                  <p className="text-white font-bold">Call Us</p>
                  <a href="tel:601-913-5975" className="hover:text-accent">601-913-5975</a>
                </div>
              </li>
              <li className="flex items-start gap-3 text-slate-400">
                <Mail className="w-5 h-5 text-accent shrink-0 mt-1" />
                <div>
                  <p className="text-white font-bold">Email Us</p>
                  <a href="mailto:seth@legacydoorsales.com" className="hover:text-accent">seth@legacydoorsales.com</a>
                </div>
              </li>
              <li className="flex items-start gap-3 text-slate-400">
                <Clock className="w-5 h-5 text-accent shrink-0 mt-1" />
                <div>
                  <p className="text-white font-bold">Hours</p>
                  <p>Open 24/7 for Emergencies</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Trust */}
          <div>
            <h4 className="font-display text-lg font-bold mb-6">Trusted & Certified</h4>
            <div className="space-y-6">
              <img 
                src="https://static.wixstatic.com/media/b65567_8c1ce9a7f493460ea6b054b12f5b8da4~mv2.png" 
                alt="SSA 2025 Badge" 
                className="h-24 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
              <div className="text-slate-400 text-sm">
                <p className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Serving Hattiesburg & Southern MS
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} Legacy Doors, LLC. All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
