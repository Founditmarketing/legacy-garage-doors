import React from 'react';
import { motion } from 'motion/react';

const features = [
  {
    title: "Silent Operation",
    description: "Advanced belt-drive systems practically eliminate noise, ensuring your home remains peaceful regardless of how often you come and go.",
    image: "/images/garage-house-1.jpg"
  },
  {
    title: "Thermal Insulation",
    description: "Multi-layered polyurethane insulation maintains ideal garage temperatures year-round, increasing home energy efficiency and cutting utility costs.",
    image: "/images/garage-house-2.jpg"
  }
];

export default function FeatureShowcase() {
  return (
    <section className="w-full bg-[#171A20] text-white">
      {features.map((feature, index) => {
        const isEven = index % 2 === 0;
        return (
          <div key={index} className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center min-h-[70vh]`}>
            {/* Text Panel */}
            <div className="w-full md:w-1/2 p-12 md:p-24 flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <h2 className="text-[28px] md:text-[32px] font-medium font-display mb-6">
                  {feature.title}
                </h2>
                <p className="text-[14px] md:text-[16px] text-white/80 leading-relaxed max-w-md">
                  {feature.description}
                </p>
              </motion.div>
            </div>
            
            {/* Image Panel */}
            <div className="w-full md:w-1/2 h-[50vh] md:h-[70vh] relative overflow-hidden">
              <motion.img
                initial={{ scale: 1.1 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                src={feature.image}
                alt={feature.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        );
      })}
    </section>
  );
}
