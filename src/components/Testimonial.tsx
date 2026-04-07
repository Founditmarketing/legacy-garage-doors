import React from 'react';
import { Star, Quote } from 'lucide-react';
import { motion } from 'motion/react';

export default function Testimonial() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto relative">
          <Quote className="absolute -top-12 -left-12 w-32 h-32 text-slate-50 -z-10" />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="flex justify-center gap-1 mb-8">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-accent fill-current" />
              ))}
            </div>
            
            <blockquote className="text-2xl md:text-3xl font-display font-medium text-slate-800 leading-relaxed mb-10 italic">
              "Our new Legacy garage doors surpassed our expectations! They are classic and sleek! The double door installation required a major adjustment on our 60-year-old home but was done in less than 1 day! This was a solid investment."
            </blockquote>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-black text-xl mb-4">
                AV
              </div>
              <h4 className="text-xl font-bold">Anne V.</h4>
              <p className="text-slate-500 font-medium">Hattiesburg Homeowner</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
