import React from 'react';
import { Link } from 'react-router-dom';
import { Tag, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function PromoBanner() {
  return (
    <section className="py-12 bg-accent text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-md">
              <Tag className="w-10 h-10" />
            </div>
            <div>
              <h3 className="text-3xl md:text-4xl font-black mb-2">Limited Time Offer!</h3>
              <p className="text-xl font-medium text-white/90">$75 OFF Spring Replacement</p>
            </div>
          </div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              to="/services" 
              className="bg-white text-accent px-10 py-4 rounded-full font-black text-lg uppercase tracking-wider shadow-xl shadow-black/10 flex items-center gap-2 group"
            >
              Claim Discount
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
