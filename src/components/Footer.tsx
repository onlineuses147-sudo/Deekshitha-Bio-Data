import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <footer className="py-24 px-6 text-center bg-cream relative overflow-hidden flex flex-col items-center">
      <div className="absolute inset-0 bg-noise opacity-10 pointer-events-none" />

      <motion.div
        ref={ref}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="text-gold opacity-50 mb-12"
      >
        <svg width="60" height="60" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M50 20C50 20 60 40 50 50C40 40 50 20 50 20Z" fill="currentColor"/>
          <path d="M50 80C50 80 60 60 50 50C40 60 50 80 50 80Z" fill="currentColor"/>
          <path d="M80 50C80 50 60 60 50 50C60 40 80 50 80 50Z" fill="currentColor"/>
          <path d="M20 50C20 50 40 60 50 50C40 40 20 50 20 50Z" fill="currentColor"/>
        </svg>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: 0.3 }}
        className="font-serif text-2xl md:text-4xl text-brown mb-6"
      >
        Thank You for Visiting
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: 0.5 }}
        className="font-sans text-sm tracking-widest uppercase text-brown/60 mb-12"
      >
        With warm wishes and blessings
      </motion.p>

      <motion.h3
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 0.8 }}
        className="font-serif text-3xl md:text-5xl text-maroon"
      >
        Gaddam Deekshitha
      </motion.h3>

      <div className="absolute bottom-4 text-[10px] text-brown/30 font-sans tracking-widest uppercase">
        &copy; {new Date().getFullYear()}
      </div>
    </footer>
  );
}
