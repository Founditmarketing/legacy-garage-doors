import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const services = [
  { title: "New Installations", image: "https://static.wixstatic.com/media/b65567_1f59b8e7a9f041f5a8bba6aa39ccd29c~mv2.png" },
  { title: "Preventative Maintenance", image: "https://static.wixstatic.com/media/b65567_65aca00ec35c437fa6e74a9185dd27b8~mv2.jpg" },
  { title: "Expert Repairs", image: "https://static.wixstatic.com/media/b65567_274e3d117289493b9ab928955ca2cdef~mv2.png" },
  { title: "Diagnostic Service", image: "https://static.wixstatic.com/media/b65567_dcc336c418e9406a9772ba5b4b1de224~mv2.png" },
  { title: "Rollers", image: "https://static.wixstatic.com/media/b65567_1ae0b94007f749a8a7f7065a850674c1~mv2.png" },
  { title: "Spring Replacements", image: "https://static.wixstatic.com/media/b65567_32345225d9e34090bc5d4e388955056f~mv2.png" },
  { title: "Weather Seals", image: "https://static.wixstatic.com/media/b65567_06fa02bc94a94643a19819f98ccbf682~mv2.png" },
  { title: "Cables", image: "https://static.wixstatic.com/media/b65567_fdb13627c8f8466195d0a8e876812e85~mv2.png" },
  { title: "Operator Replacements", image: "https://static.wixstatic.com/media/b65567_606cf941e067450e830ecda8194ab119~mv2.png" },
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
                <div className="w-[140px] h-[140px] mb-8 overflow-hidden relative">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] max-w-none h-auto object-cover object-top group-hover:scale-[1.15] transition-transform duration-[0.6s] ease-out"
                    referrerPolicy="no-referrer"
                  />
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
