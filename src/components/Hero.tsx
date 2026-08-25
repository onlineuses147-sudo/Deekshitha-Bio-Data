import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';
import { useRef } from 'react';

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <section 
      id="home" 
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-cream to-ivory"
    >
      {/* Background Texture & Decor */}
      <div className="absolute inset-0 bg-noise opacity-50 mix-blend-overlay pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="relative z-10 flex flex-col items-center text-center mt-8 px-4">
        {/* Devotional float - Moved outside image group to prevent overlap */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          className="font-devanagari text-maroon/70 text-lg mb-10 tracking-widest"
        >
          ॥ श्री गणेशाय नमः ॥
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative mb-12 group"
        >
          {/* Animated Glow Rings */}
          <div className="absolute -inset-2 rounded-full border border-gold/40 animate-pulse opacity-70" />
          <div className="absolute -inset-6 rounded-full border border-gold/20 animate-pulse opacity-50" style={{ animationDelay: '1s' }} />
          <div className="absolute -inset-10 rounded-full border border-gold/10 scale-100 group-hover:scale-105 transition-transform duration-700 ease-out" />
          
          <div className="relative w-64 h-64 md:w-[340px] md:h-[340px] rounded-full overflow-hidden border-2 border-gold/60 shadow-[0_0_40px_rgba(212,175,55,0.3)] z-10 bg-ivory">
            <img 
              src="/WhatsApp Image 2026-08-24 at 10,47,04 PM-Picsart-AiImageEnhancer.jpeg" 
              alt="Gaddam Deekshitha" 
              className="w-full h-full object-cover object-[center_25%] scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
              onError={(e) => {
                // Fallback if image doesn't exist yet
                const target = e.target as HTMLImageElement;
                target.src = "/WhatsApp Image 2026-08-24 at 10,47,04 PM-Picsart-AiImageEnhancer.jpeg";
              }}
            />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-brown mb-6 tracking-tight"
        >
          Gaddam Deekshitha
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="flex flex-col items-center space-y-3"
        >
          <p className="font-sans text-xs md:text-sm tracking-[0.25em] uppercase text-rose font-semibold">
            BAMS <span className="mx-3 text-gold/60">|</span> House Surgeon
          </p>
          <p className="font-sans text-xs md:text-sm tracking-[0.2em] uppercase text-brown/50">
            Khammam, Telangana
          </p>
        </motion.div>
      </div>
    </section>
  );
}
