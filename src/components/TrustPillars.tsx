import React from 'react';
import { motion } from 'motion/react';

const pillars = [
  {
    title: "Always Open",
    description: "24/7 emergency availability because your safety comes first.",
  },
  {
    title: "Unbeatable Value",
    description: "Honest pricing without compromising on premium quality.",
  },
  {
    title: "Expert Certified",
    description: "10+ years of precise, hands-on architectural experience.",
  }
];

export default function TrustPillars() {
  return (
    <section className="py-24 bg-[#F4F4F4]">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="flex flex-col md:flex-row gap-12 md:gap-8 justify-between">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="flex-1 text-center md:text-left"
            >
              <div className="w-8 h-[2px] bg-[#3E6AE1] mb-6 mx-auto md:mx-0"></div>
              <h3 className="text-xl font-medium text-[#171A20] mb-3">{pillar.title}</h3>
              <p className="text-[14px] text-[#5C5E62] leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
