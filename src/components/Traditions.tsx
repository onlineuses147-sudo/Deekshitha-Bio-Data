import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

const traditions = [
  { label: 'Rashi', value: 'Meena' },
  { label: 'Nakshatra', value: 'Utharabadra 2' },
  { label: 'Gotra', value: 'Bharadhwaja' },
];

export default function Traditions() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });

  return (
    <section id="traditions" className="py-32 px-6 md:px-12 relative overflow-hidden bg-maroon text-ivory">
      {/* Background Rotating Mandala */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-10 pointer-events-none select-none text-gold"
      >
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M50 0C50 0 60 30 50 50C40 30 50 0 50 0Z" fill="currentColor"/>
          <path d="M50 100C50 100 60 70 50 50C40 70 50 100 50 100Z" fill="currentColor"/>
          <path d="M100 50C100 50 70 60 50 50C70 40 100 50 100 50Z" fill="currentColor"/>
          <path d="M0 50C0 50 30 60 50 50C30 40 0 50 0 50Z" fill="currentColor"/>
          <path d="M85 15C85 15 70 40 50 50C60 30 85 15 85 15Z" fill="currentColor"/>
          <path d="M15 85C15 85 30 60 50 50C40 70 15 85 15 85Z" fill="currentColor"/>
          <path d="M85 85C85 85 60 70 50 50C70 60 85 85 85 85Z" fill="currentColor"/>
          <path d="M15 15C15 15 40 30 50 50C30 40 15 15 15 15Z" fill="currentColor"/>
          <circle cx="50" cy="50" r="35" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="50" cy="50" r="25" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
        </svg>
      </motion.div>

      <div className="max-w-5xl mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl md:text-5xl text-gold-light mb-6">Her Traditions</h2>
          <div className="w-16 h-[1px] bg-gold/50 mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {traditions.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className="flex flex-col items-center text-center p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm"
            >
              <h3 className="font-sans text-xs tracking-widest uppercase text-gold/70 mb-4">{item.label}</h3>
              <p className="font-serif text-2xl md:text-3xl text-ivory">{item.value}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
