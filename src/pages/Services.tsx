import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  Wrench, 
  Shield, 
  PenTool as Tool, 
  Zap, 
  Settings, 
  Layers, 
  Wind, 
  Link as LinkIcon,
  ArrowRight
} from 'lucide-react';

const allServices = [
  {
    title: "New Garage Door Sales & Installation",
    description: "Upgrade your home's curb appeal with top-tier brands and professional installation.",
    icon: Shield,
    image: "https://static.wixstatic.com/media/b65567_1f59b8e7a9f041f5a8bba6aa39ccd29c~mv2.png"
  },
  {
    title: "Preventative Maintenance",
    description: "Keep your system running smoothly and avoid costly emergency repairs with routine care.",
    icon: Tool,
    image: "https://static.wixstatic.com/media/b65567_65aca00ec35c437fa6e74a9185dd27b8~mv2.jpg"
  },
  {
    title: "Repairs on Doors and Operators",
    description: "From broken panels to malfunctioning motors, we fix all makes and models.",
    icon: Wrench,
    image: "https://static.wixstatic.com/media/b65567_274e3d117289493b9ab928955ca2cdef~mv2.png"
  },
  {
    title: "Diagnostic Service Calls",
    description: "Expert troubleshooting to identify the root cause of any garage door issue.",
    icon: Zap,
    image: "https://static.wixstatic.com/media/b65567_dcc336c418e9406a9772ba5b4b1de224~mv2.png"
  },
  {
    title: "Spring Replacements",
    description: "Safe and professional replacement of high-tension springs. $75 OFF PROMO AVAILABLE!",
    icon: Layers,
    image: "https://static.wixstatic.com/media/b65567_32345225d9e34090bc5d4e388955056f~mv2.png",
    promo: true
  },
  {
    title: "Rollers & Cables",
    description: "Smooth out noisy operation and ensure safety with fresh rollers and heavy-duty cables.",
    icon: LinkIcon,
    image: "https://static.wixstatic.com/media/b65567_1ae0b94007f749a8a7f7065a850674c1~mv2.png"
  },
  {
    title: "Weather Seals",
    description: "Protect your garage from pests, dust, and drafts with professional weather stripping.",
    icon: Wind,
    image: "https://static.wixstatic.com/media/b65567_06fa02bc94a94643a19819f98ccbf682~mv2.png"
  },
  {
    title: "Operator Replacements",
    description: "Modern, quiet, and smart-connected garage door openers from LiftMaster and Chamberlain.",
    icon: Settings,
    image: "https://static.wixstatic.com/media/b65567_606cf941e067450e830ecda8194ab119~mv2.png"
  }
];

export default function Services() {
  return (
    <div className="bg-slate-50">
      {/* Page Header */}
      <section className="bg-primary py-24 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-5xl md:text-6xl font-black mb-6">Our Services</h1>
          <p className="text-xl text-blue-100 max-w-3xl leading-relaxed">
            At Legacy Doors, we are committed to ensuring your garage door operates safely and efficiently — from preventative maintenance to full installations.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all group flex flex-col"
              >
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  {service.promo && (
                    <div className="absolute top-4 right-4 bg-accent text-white px-4 py-1 rounded-full font-bold text-sm shadow-lg animate-pulse">
                      $75 OFF
                    </div>
                  )}
                  <div className="absolute bottom-4 left-4">
                    <div className="bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-lg">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <h3 className="text-2xl font-bold mb-4 leading-tight">{service.title}</h3>
                  <p className="text-slate-600 mb-8 flex-grow">
                    {service.description}
                  </p>
                  <Link 
                    to="/book-online" 
                    className="bg-slate-100 hover:bg-primary hover:text-white text-primary px-6 py-3 rounded-xl font-bold text-center transition-all flex items-center justify-center gap-2"
                  >
                    Book Now
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-slate-900 rounded-[3rem] overflow-hidden shadow-2xl flex flex-col md:flex-row">
            <div className="md:w-1/3 bg-primary p-12 text-white flex flex-col justify-center">
              <h2 className="text-3xl font-black mb-6">Get a Free Quote</h2>
              <p className="text-blue-100 mb-8">
                Tell us about your project and we'll get back to you with a professional estimate.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <Shield className="w-5 h-5" />
                  </div>
                  <span className="font-bold">No Obligation</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <Zap className="w-5 h-5" />
                  </div>
                  <span className="font-bold">Fast Response</span>
                </div>
              </div>
            </div>
            <div className="md:w-2/3 p-12">
              <form className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-400 uppercase tracking-wider">First Name</label>
                  <input type="text" className="w-full bg-slate-800 border-none rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-primary outline-none" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-400 uppercase tracking-wider">Last Name</label>
                  <input type="text" className="w-full bg-slate-800 border-none rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-primary outline-none" placeholder="Doe" />
                </div>
                <div className="sm:col-span-2 space-y-2">
                  <label className="text-sm font-bold text-slate-400 uppercase tracking-wider">Email Address</label>
                  <input type="email" className="w-full bg-slate-800 border-none rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-primary outline-none" placeholder="john@example.com" />
                </div>
                <div className="sm:col-span-2 space-y-2">
                  <label className="text-sm font-bold text-slate-400 uppercase tracking-wider">Message</label>
                  <textarea rows={4} className="w-full bg-slate-800 border-none rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-primary outline-none resize-none" placeholder="How can we help?"></textarea>
                </div>
                <div className="sm:col-span-2">
                  <button className="w-full bg-accent hover:bg-orange-600 text-white py-4 rounded-xl font-black text-lg transition-all shadow-lg shadow-orange-900/20">
                    Send Request
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
