import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Financing', href: '/financing' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const transparentNavPages = ['/'];
  const isTransparentNav = transparentNavPages.includes(location.pathname) && !isScrolled && !isOpen;
  
  const textColor = isTransparentNav ? 'text-white hover:bg-white/10' : 'text-carbon hover:bg-black/5';

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-[0.33s]">
      <nav className={cn(
        "transition-all duration-[0.33s] w-full",
        isTransparentNav ? "bg-transparent" : "bg-white/95 backdrop-blur-md shadow-sm"
      )}>
        <div className="container mx-auto px-6 h-28 md:h-36 flex justify-between items-center transition-all duration-300">
          <Link to="/" className="transition-all duration-300 flex items-center">
            <img 
              src="/images/logo-shield.png" 
              alt="Legacy Garage Doors" 
              className="h-20 md:h-24 lg:h-28 w-auto object-contain transition-all duration-500"
              referrerPolicy="no-referrer"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center absolute left-1/2 -translate-x-1/2 space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  "px-4 py-1.5 text-sm font-medium transition-colors duration-[0.33s] rounded-[4px]",
                  textColor
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>
          
          <div className="hidden lg:flex items-center">
             <Link
                to="/book-online"
                className={cn(
                   "px-4 py-1.5 text-sm font-medium transition-colors duration-[0.33s] rounded-[4px]",
                   textColor
                )}
             >
                Book Online
             </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className={cn("lg:hidden p-1.5 backdrop-blur-sm rounded-[4px] transition-colors duration-[0.33s]", isTransparentNav ? "text-white bg-white/10" : "text-carbon bg-black/5")}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white overflow-hidden"
          >
            <div className="px-6 py-10 flex flex-col gap-6 h-full">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-[17px] font-medium text-carbon hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/book-online"
                className="text-[17px] font-medium text-carbon hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Book Online
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
