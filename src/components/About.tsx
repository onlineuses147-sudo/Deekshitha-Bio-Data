import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });

  return (
    <section id="about" className="py-32 px-6 md:px-12 relative overflow-hidden bg-ivory">
      {/* Subtle texture */}
      <div className="absolute inset-0 bg-noise opacity-[0.03]" />
      
      <div className="max-w-4xl mx-auto relative" ref={ref}>
        {/* Large Decorative Initial */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: -50 }}
          animate={isInView ? { opacity: 0.03, scale: 1, x: 0 } : {}}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute -top-20 -left-10 text-[20rem] font-serif text-maroon leading-none select-none pointer-events-none"
        >
          D
        </motion.div>

        <div className="relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-12"
          >
            <h2 className="font-sans text-xs tracking-[0.3em] uppercase text-gold font-semibold mb-4">A Glimpse Into Her Journey</h2>
            <div className="w-12 h-[1px] bg-gold/50 mx-auto" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-2xl md:text-4xl text-brown leading-relaxed text-balance"
          >
            <span className="text-maroon">Gaddam Deekshitha</span> is a BAMS graduate from Khammam, Telangana. Her biodata reflects her education, family values, traditions, and the journey that has shaped her.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
