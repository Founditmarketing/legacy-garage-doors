import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Warehouse, ClipboardCheck, Wrench, ScanSearch, RotateCcw, Zap, Wind, Cable, Cpu } from 'lucide-react';

const services = [
  { title: "New Installations",        icon: Warehouse },
  { title: "Preventative Maintenance", icon: ClipboardCheck },
  { title: "Expert Repairs",           icon: Wrench },
  { title: "Diagnostic Service",       icon: ScanSearch },
  { title: "Rollers",                  icon: RotateCcw },
  { title: "Spring Replacements",      icon: Zap },
  { title: "Weather Seals",            icon: Wind },
  { title: "Cables",                   icon: Cable },
  { title: "Operator Replacements",    icon: Cpu },
];

export default function ServiceOverview() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <h2 className="text-[28px] md:text-[32px] font-medium text-[#171A20] mb-12 text-center md:text-left">
          Discover Our Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: (index % 3) * 0.1, duration: 0.6 }}
            >
              <Link to="/services" className="flex flex-col items-center text-center p-8 lg:p-12 bg-[#F4F4F4] rounded-[12px] group hover:bg-[#EEEEEE] transition-colors duration-[0.6s] h-full">
                <div className="w-20 h-20 mb-8 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:shadow-md group-hover:scale-110 transition-all duration-[0.6s] ease-out">
                  <service.icon className="w-9 h-9 text-[#3E6AE1]" strokeWidth={1.5} />
                </div>
                <h3 className="text-[17px] font-medium text-[#171A20]">{service.title}</h3>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
