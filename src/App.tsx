/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef, ReactNode } from 'react';
import { AnimatePresence, motion, useInView } from 'motion/react';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import PersonalDetails from './components/PersonalDetails';
import Family from './components/Family';
import Traditions from './components/Traditions';
import Education from './components/Education';
import Devotional from './components/Devotional';
import Contact from './components/Contact';
import Footer from './components/Footer';

function SectionFadeUp({ children }: { children: ReactNode }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Auto-hide loading screen after animation completes (approx 3.5 seconds) if not skipped
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative selection:bg-gold/30 selection:text-maroon">
      
      <AnimatePresence>
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      <Navbar />
      
      <main>
        <Hero />
        <SectionFadeUp><About /></SectionFadeUp>
        <SectionFadeUp><PersonalDetails /></SectionFadeUp>
        <SectionFadeUp><Family /></SectionFadeUp>
        <SectionFadeUp><Traditions /></SectionFadeUp>
        <SectionFadeUp><Education /></SectionFadeUp>
        <SectionFadeUp><Devotional /></SectionFadeUp>
        <SectionFadeUp><Contact /></SectionFadeUp>
      </main>

      <Footer />
    </div>
  );
}

