import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative h-screen flex flex-col justify-between overflow-hidden">
      {/* Background Image with Slow Zoom */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: "easeOut" }}
      >
        <img
          src="https://static.wixstatic.com/media/4e542e_0bd57c4e9fb24a63a25bdb42bafcf067~mv2.jpg"
          alt="Legacy Garage Door Hero"
          className="w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </motion.div>

      <div className="relative z-10 w-full pt-[14vh] flex flex-col items-center text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-[40px] md:text-[48px] font-display font-medium text-white leading-[1.1] mb-2"
        >
          Engineering Meets <br className="md:hidden" /> Architectural Elegance.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-[14px] md:text-[17px] text-white/90 font-normal max-w-xl mx-auto"
        >
          Precision-crafted garage doors that redefine your home's exterior. 
          Uncompromising security, silent operation, and striking design.
        </motion.p>
      </div>

      <div className="relative z-10 w-full pb-[8vh] flex flex-col items-center px-4">
        
        {/* Specs Bar */}
        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ duration: 1, delay: 0.6 }}
           className="flex gap-8 md:gap-16 mb-8 text-white text-center"
        >
           <div className="flex flex-col items-center">
              <span className="text-xl md:text-2xl font-medium font-display">Whisper</span>
              <span className="text-xs md:text-sm text-white/70">Quiet Drive</span>
           </div>
           <div className="flex flex-col items-center">
              <span className="text-xl md:text-2xl font-medium font-display">Smart</span>
              <span className="text-xs md:text-sm text-white/70">Home Enabled</span>
           </div>
           <div className="flex flex-col items-center">
              <span className="text-xl md:text-2xl font-medium font-display">Lifetime</span>
              <span className="text-xs md:text-sm text-white/70">Warranty</span>
           </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 w-full max-w-[420px] justify-center"
        >
          <Link
            to="/book-online"
            className="bg-[#3E6AE1] text-white w-full sm:w-[200px] h-[40px] rounded-[4px] font-medium text-[14px] flex items-center justify-center transition-colors duration-[0.33s] hover:bg-[#3E6AE1]/90"
          >
            Order Now
          </Link>
          <Link
            to="/services"
            className="bg-white/10 backdrop-blur-md text-white w-full sm:w-[200px] h-[40px] rounded-[4px] font-medium text-[14px] flex items-center justify-center transition-colors duration-[0.33s] hover:bg-white hover:text-[#171A20]"
          >
            Explore Features
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
