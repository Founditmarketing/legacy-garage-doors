import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock, ChevronRight, CheckCircle2, Shield, Wrench, Zap } from 'lucide-react';

const serviceTypes = [
  { id: 'repair', name: 'General Repair', icon: Wrench, description: 'Fixing issues with doors, tracks, or openers.' },
  { id: 'spring', name: 'Spring Replacement', icon: Zap, description: 'Professional replacement of broken springs.' },
  { id: 'maintenance', name: 'Preventative Maintenance', icon: Shield, description: 'Routine checkup and lubrication.' },
  { id: 'install', name: 'New Installation Quote', icon: Calendar, description: 'Get a quote for a new garage door.' },
];

export default function BookOnline() {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState('');

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-black mb-4">Book Your Service</h1>
            <p className="text-lg text-slate-600">Quick and easy online scheduling. Choose your service to get started.</p>
          </div>

          {/* Progress Bar */}
          <div className="flex items-center justify-between mb-12 relative">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-slate-200 -translate-y-1/2 z-0"></div>
            {[1, 2, 3].map((s) => (
              <div 
                key={s} 
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold relative z-10 transition-all duration-500 ${
                  step >= s ? 'bg-primary text-white scale-110 shadow-lg' : 'bg-white text-slate-400 border-2 border-slate-200'
                }`}
              >
                {step > s ? <CheckCircle2 className="w-6 h-6" /> : s}
              </div>
            ))}
          </div>

          <div className="bg-white rounded-[2rem] shadow-xl p-8 md:p-12">
            {step === 1 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-8"
              >
                <h2 className="text-2xl font-bold mb-6">Select Service Type</h2>
                <div className="grid grid-cols-1 gap-4">
                  {serviceTypes.map((service) => (
                    <button
                      key={service.id}
                      onClick={() => {
                        setSelectedService(service.id);
                        setStep(2);
                      }}
                      className={`flex items-center gap-6 p-6 rounded-2xl border-2 text-left transition-all group ${
                        selectedService === service.id 
                          ? 'border-primary bg-blue-50' 
                          : 'border-slate-100 hover:border-primary/30 hover:bg-slate-50'
                      }`}
                    >
                      <div className={`p-4 rounded-xl transition-colors ${
                        selectedService === service.id ? 'bg-primary text-white' : 'bg-slate-100 text-slate-500 group-hover:bg-primary/10 group-hover:text-primary'
                      }`}>
                        <service.icon className="w-6 h-6" />
                      </div>
                      <div className="flex-grow">
                        <h3 className="font-bold text-lg">{service.name}</h3>
                        <p className="text-slate-500 text-sm">{service.description}</p>
                      </div>
                      <ChevronRight className={`w-6 h-6 transition-transform ${
                        selectedService === service.id ? 'text-primary translate-x-1' : 'text-slate-300'
                      }`} />
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-8"
              >
                <h2 className="text-2xl font-bold mb-6">Your Information</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-500 uppercase tracking-wider">Full Name</label>
                    <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary outline-none" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-500 uppercase tracking-wider">Phone Number</label>
                    <input type="tel" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary outline-none" placeholder="(601) 000-0000" />
                  </div>
                  <div className="sm:col-span-2 space-y-2">
                    <label className="text-sm font-bold text-slate-500 uppercase tracking-wider">Service Address</label>
                    <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary outline-none" placeholder="123 Main St, Hattiesburg, MS" />
                  </div>
                  <div className="sm:col-span-2 space-y-2">
                    <label className="text-sm font-bold text-slate-500 uppercase tracking-wider">Preferred Date & Time</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input type="date" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary outline-none" />
                      <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary outline-none">
                        <option>Morning (8am - 12pm)</option>
                        <option>Afternoon (12pm - 5pm)</option>
                        <option>Emergency (ASAP)</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="flex gap-4 pt-6">
                  <button 
                    onClick={() => setStep(1)}
                    className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-600 py-4 rounded-xl font-bold transition-all"
                  >
                    Back
                  </button>
                  <button 
                    onClick={() => setStep(3)}
                    className="flex-[2] bg-primary hover:bg-blue-800 text-white py-4 rounded-xl font-black text-lg transition-all shadow-lg shadow-primary/20"
                  >
                    Confirm Booking
                  </button>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
                  <CheckCircle2 className="w-12 h-12" />
                </div>
                <h2 className="text-3xl font-black mb-4">Booking Confirmed!</h2>
                <p className="text-lg text-slate-600 mb-10 max-w-md mx-auto">
                  Thank you for choosing Legacy Garage Doors. We've received your request and will contact you shortly to confirm the exact time.
                </p>
                <button 
                  onClick={() => {
                    setStep(1);
                    setSelectedService('');
                  }}
                  className="bg-primary hover:bg-blue-800 text-white px-10 py-4 rounded-xl font-black text-lg transition-all"
                >
                  Done
                </button>
              </motion.div>
            )}
          </div>

          <div className="mt-12 flex items-center justify-center gap-8 opacity-50">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5" />
              <span className="text-sm font-bold">Secure Booking</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span className="text-sm font-bold">24/7 Support</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
