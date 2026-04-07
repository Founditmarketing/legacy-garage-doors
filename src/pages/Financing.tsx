import React from 'react';
import { motion } from 'motion/react';
import { CreditCard, CheckCircle2, DollarSign, Calendar } from 'lucide-react';

export default function Financing() {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="bg-white pt-8 pb-16 relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
          <h1 className="text-[40px] md:text-[56px] font-medium text-[#171A20] mb-6 tracking-tight">Financing Options</h1>
          <p className="text-[18px] text-[#5C5E62] max-w-2xl mx-auto">
            Get the garage door you want today with flexible payment plans that fit your budget.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 pb-32">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center mb-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-[28px] md:text-[32px] font-medium text-[#171A20] mb-8 leading-tight">
                Smart Financing for <br /><span className="text-[#3E6AE1]">Your Home Investment</span>
              </h2>
              <p className="text-[16px] text-[#5C5E62] mb-10 leading-relaxed font-light">
                A new garage door is one of the best investments you can make in your home's value and security. We've partnered with leading lenders to offer flexible financing solutions that make it easier than ever to get the service you need without the immediate overhead.
              </p>
              <div className="space-y-5">
                {[
                  "Low monthly payments",
                  "Quick and easy application process",
                  "No hidden fees or prepayment penalties",
                  "Competitive interest rates",
                  "Flexible terms to fit your budget"
                ].map((item) => (
                  <div key={item} className="flex items-center gap-4 text-[#171A20] font-medium text-[15px]">
                    <CheckCircle2 className="w-5 h-5 text-[#3E6AE1]" strokeWidth={1.5} />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-[#F4F4F4] p-10 md:p-14 rounded-[8px]"
            >
              <div className="bg-white w-14 h-14 rounded-full flex items-center justify-center shadow-sm mb-8">
                <CreditCard className="w-6 h-6 text-[#171A20]" strokeWidth={1.5} />
              </div>
              <h3 className="text-[22px] font-medium text-[#171A20] mb-4">Ready to Apply?</h3>
              <p className="text-[15px] text-[#5C5E62] mb-10 font-light leading-relaxed">
                The application process is fast, secure, and won't affect your credit score for pre-qualification.
              </p>
              <button className="w-full bg-[#3E6AE1] hover:bg-[#3457B2] text-white py-3.5 rounded-[4px] font-medium text-[15px] transition-colors duration-300">
                Apply Now
              </button>
              <p className="text-center text-[12px] text-[#5C5E62] mt-6">
                *Subject to credit approval. Terms and conditions apply.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-[#EEEEEE] pt-24">
            {[
              {
                icon: DollarSign,
                title: "Budget Friendly",
                description: "Spread the cost of your project over manageable monthly installments."
              },
              {
                icon: Calendar,
                title: "Flexible Terms",
                description: "Choose the repayment period that works best for your financial situation."
              },
              {
                icon: CheckCircle2,
                title: "Instant Decisions",
                description: "Most applications receive an approval decision in minutes."
              }
            ].map((item, index) => (
              <motion.div 
                key={item.title} 
                className="text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="mx-auto w-12 h-12 mb-6 flex items-center justify-center">
                  <item.icon className="w-8 h-8 text-[#171A20]" strokeWidth={1.5} />
                </div>
                <h4 className="text-[18px] font-medium text-[#171A20] mb-3">{item.title}</h4>
                <p className="text-[15px] text-[#5C5E62] font-light leading-relaxed max-w-xs mx-auto">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
