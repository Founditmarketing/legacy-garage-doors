import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="bg-slate-900 py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=1920" 
            alt="Background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-5xl md:text-6xl font-black mb-6">About Us</h1>
          <p className="text-xl text-slate-300 max-w-2xl">
            Family-owned and operated, serving Southern Mississippi with integrity for over a decade.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-black mb-8">Servicing Garage Doors for <span className="text-primary">Over 10 Years</span></h2>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  Legacy Garage Doors was founded with a simple vision: to provide trusted service and effective solutions for garage door issues across Mississippi. As a family-owned and operated business, we understand the importance of safety and reliability for your home.
                </p>
                <p>
                  With 11 years of hands-on experience, our team is passionate about building strong customer relationships. We don't just fix doors; we provide peace of mind. Whether it's a simple repair or a full custom installation, we bring the same level of precision and care to every job.
                </p>
                <p>
                  Proudly serving all of Southern Mississippi, we are committed to being the experts you can count on — 24 hours a day, 7 days a week.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
                {[
                  "Family Owned & Operated",
                  "10+ Years Experience",
                  "24/7 Emergency Service",
                  "Licensed & Insured",
                  "Serving Southern MS",
                  "Quality Brand Partner"
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 font-bold text-slate-800">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-12">
                <Link 
                  to="/book-online" 
                  className="bg-accent hover:bg-orange-600 text-white px-10 py-4 rounded-full font-black text-lg inline-flex items-center gap-2 transition-all shadow-xl shadow-orange-900/20"
                >
                  Book Your Service
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://static.wixstatic.com/media/b65567_a4475a5f068c45e0a6d0a998ccdceb50~mv2.jpg" 
                  alt="Legacy Garage Doors Team" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-primary text-white p-8 rounded-3xl shadow-xl hidden md:block">
                <p className="text-4xl font-black mb-1">11+</p>
                <p className="font-bold uppercase tracking-wider text-sm opacity-80">Years of Excellence</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
