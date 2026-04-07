import React from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, Clock, MapPin, Facebook } from 'lucide-react';

export default function Contact() {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="bg-slate-900 py-24 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-5xl md:text-6xl font-black mb-6">Contact Us</h1>
          <p className="text-xl text-slate-300 max-w-2xl">
            We're here to help with all your garage door needs. Reach out to us anytime.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-4xl font-black mb-8">Get in <span className="text-primary">Touch</span></h2>
              <p className="text-lg text-slate-600 mb-12 leading-relaxed">
                Whether you have a question about our services, need an emergency repair, or want to schedule a free estimate, our team is ready to assist you.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="bg-blue-50 p-4 rounded-2xl text-primary">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">Phone</h4>
                    <p className="text-slate-600 mb-1">Main: <a href="tel:601-913-5975" className="font-bold text-slate-900 hover:text-primary transition-colors">601-913-5975</a></p>
                    <p className="text-slate-600">Alt: <a href="tel:601-436-7907" className="font-bold text-slate-900 hover:text-primary transition-colors">601-436-7907</a></p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="bg-orange-50 p-4 rounded-2xl text-accent">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">Email</h4>
                    <p className="text-slate-600 mb-1"><a href="mailto:seth@legacydoorsales.com" className="font-bold text-slate-900 hover:text-primary transition-colors">seth@legacydoorsales.com</a></p>
                    <p className="text-slate-600"><a href="mailto:jessica@legacydoorsales.com" className="font-bold text-slate-900 hover:text-primary transition-colors">jessica@legacydoorsales.com</a></p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="bg-green-50 p-4 rounded-2xl text-green-600">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">Business Hours</h4>
                    <p className="text-slate-600 font-bold">Open 24/7 for Emergency Services</p>
                    <p className="text-slate-600">Standard Hours: Mon-Fri, 8am - 5pm</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="bg-purple-50 p-4 rounded-2xl text-purple-600">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">Service Area</h4>
                    <p className="text-slate-600">Proudly serving Hattiesburg, MS and all of Southern Mississippi.</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 flex gap-4">
                <a href="https://facebook.com" className="bg-slate-100 p-4 rounded-2xl text-slate-600 hover:bg-primary hover:text-white transition-all">
                  <Facebook className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Form */}
            <div className="bg-slate-50 p-12 rounded-[3rem] border border-slate-100 shadow-xl">
              <h3 className="text-2xl font-bold mb-8">Send us a Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-500 uppercase tracking-wider">First Name</label>
                    <input type="text" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary outline-none transition-all" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-500 uppercase tracking-wider">Last Name</label>
                    <input type="text" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary outline-none transition-all" placeholder="Doe" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-500 uppercase tracking-wider">Email Address</label>
                  <input type="email" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary outline-none transition-all" placeholder="john@example.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-500 uppercase tracking-wider">Phone Number</label>
                  <input type="tel" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary outline-none transition-all" placeholder="(601) 000-0000" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-500 uppercase tracking-wider">Message</label>
                  <textarea rows={5} className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary outline-none transition-all resize-none" placeholder="How can we help?"></textarea>
                </div>
                <button className="w-full bg-primary hover:bg-blue-800 text-white py-4 rounded-xl font-black text-lg transition-all shadow-lg shadow-primary/20">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-[500px] bg-slate-200 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Service Area Map</h3>
            <p className="text-slate-600">Centred on Hattiesburg, MS</p>
            <div className="mt-8 bg-white p-6 rounded-2xl shadow-xl inline-block">
              <p className="font-bold text-primary">Serving all of Southern Mississippi</p>
            </div>
          </div>
        </div>
        {/* In a real app, embed Google Maps here */}
        <img 
          src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1920" 
          alt="Map Background" 
          className="w-full h-full object-cover opacity-30 grayscale"
          referrerPolicy="no-referrer"
        />
      </section>
    </div>
  );
}
