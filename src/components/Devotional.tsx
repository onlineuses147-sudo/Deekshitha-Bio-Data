import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

export default function Devotional() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <section className="py-40 px-6 relative bg-cream overflow-hidden flex flex-col items-center justify-center text-center">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-noise opacity-[0.03] mix-blend-multiply" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 rounded-full blur-[100px] pointer-events-none" />
      
      {/* Subtle architecture silhouette suggestion via CSS gradients */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-ivory to-transparent opacity-80" />

      <div className="max-w-2xl mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-devanagari text-2xl md:text-4xl text-maroon mb-12 drop-shadow-sm"
        >
          ॥ श्री गणेशाय नमः ॥
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-sans text-xs md:text-sm tracking-[0.4em] uppercase text-gold-dark mb-10 font-semibold"
        >
          With Divine Blessings
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1.5, delay: 0.8 }}
          className="font-serif text-2xl md:text-3xl text-brown/80 leading-relaxed text-balance italic"
        >
          "May every new beginning be blessed with wisdom, happiness, harmony and grace."
        </motion.p>
      </div>

      {/* Floating particles specific to this section */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-2 h-2 bg-gold/40 rounded-full blur-[1px]"
      />
      <motion.div
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-1/3 right-1/4 w-3 h-3 bg-gold/30 rounded-full blur-[2px]"
      />
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-gold/50 rounded-full blur-[1px]"
      />
    </section>
  );
}
