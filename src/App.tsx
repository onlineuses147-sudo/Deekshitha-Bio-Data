/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
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
        <About />
        <PersonalDetails />
        <Family />
        <Traditions />
        <Education />
        <Devotional />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

