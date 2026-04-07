import React from 'react';
import { motion } from 'motion/react';

const brands = [
  { name: 'Chamberlain', image: 'https://static.wixstatic.com/media/b65567_db2ec489655448e3a5538cd41109967a~mv2.png' },
  { name: 'LiftMaster', image: 'https://static.wixstatic.com/media/b65567_c38c3baf6f6e4ca2acfad0017691ac9b~mv2.png' },
  { name: 'Clopay', image: 'https://static.wixstatic.com/media/b65567_b39a2e54fcf247f59a4514dd02608698~mv2.png' },
  { name: 'Amarr', image: 'https://static.wixstatic.com/media/b65567_da75e81b714a4bbb9e94898d411d65e4~mv2.png' },
];

export default function BrandSection() {
  return (
    <section className="py-16 bg-[#F4F4F4]">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-8">
          <p className="text-[13px] font-medium text-[#5C5E62] tracking-widest uppercase">Trusted Partners</p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {brands.map((brand, index) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <img 
                src={brand.image} 
                alt={brand.name} 
                className="h-24 md:h-32 object-contain mix-blend-multiply contrast-[2] brightness-[1.1] grayscale opacity-70 hover:opacity-100 transition-all duration-300"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  // Fallback if logo fails to load
                  (e.target as HTMLImageElement).src = `https://via.placeholder.com/150x50?text=${brand.name}`;
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
