import { motion } from 'motion/react';

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-ivory bg-noise"
    >
      <div className="flex flex-col items-center justify-center text-center">
        {/* Subtle Mandala / Lotus (using SVG) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -45 }}
          animate={{ opacity: 0.15, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="absolute text-gold"
        >
          <svg width="200" height="200" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 0C50 0 60 30 50 50C40 30 50 0 50 0Z" fill="currentColor"/>
            <path d="M50 100C50 100 60 70 50 50C40 70 50 100 50 100Z" fill="currentColor"/>
            <path d="M100 50C100 50 70 60 50 50C70 40 100 50 100 50Z" fill="currentColor"/>
            <path d="M0 50C0 50 30 60 50 50C30 40 0 50 0 50Z" fill="currentColor"/>
            <path d="M85 15C85 15 70 40 50 50C60 30 85 15 85 15Z" fill="currentColor"/>
            <path d="M15 85C15 85 30 60 50 50C40 70 15 85 15 85Z" fill="currentColor"/>
            <path d="M85 85C85 85 60 70 50 50C70 60 85 85 85 85Z" fill="currentColor"/>
            <path d="M15 15C15 15 40 30 50 50C30 40 15 15 15 15Z" fill="currentColor"/>
          </svg>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="font-devanagari text-xl md:text-2xl text-maroon mb-6 z-10"
        >
          ॥ श्री गणेशाय नमः ॥
        </motion.div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.8, duration: 0.6, ease: 'easeInOut' }}
          className="h-[1px] w-24 bg-gold mb-6 origin-center z-10"
        />

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8, ease: 'easeOut' }}
          className="font-serif text-3xl md:text-5xl lg:text-6xl text-brown tracking-widest uppercase mb-4 z-10"
        >
          Gaddam Deekshitha
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.6 }}
          className="font-sans text-sm md:text-base text-rose tracking-wider uppercase z-10"
        >
          A Journey of Grace, Values & Family
        </motion.p>
      </div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.6 }}
        onClick={onComplete}
        className="absolute bottom-12 px-6 py-2 border border-gold/30 text-brown/70 hover:text-brown hover:bg-gold/10 transition-colors rounded-full font-sans text-sm tracking-widest uppercase z-20"
      >
        Skip Intro
      </motion.button>
    </motion.div>
  );
}
