import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { cn } from '../utils';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Details', href: '#details' },
  { name: 'Family', href: '#family' },
  { name: 'Traditions', href: '#traditions' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Simple active section detection
      const sections = navItems.map(item => item.name.toLowerCase());
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.5 }}
        className={cn(
          'fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-in-out px-6 md:px-12 py-4 flex justify-between items-center',
          isScrolled ? 'glass py-3' : 'bg-transparent'
        )}
      >
        <a href="#home" className="font-serif text-xl md:text-2xl text-maroon font-medium tracking-wide">
          D<span className="text-gold">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={cn(
                "font-sans text-sm uppercase tracking-widest transition-colors hover:text-gold relative",
                activeSection === item.name.toLowerCase() ? "text-maroon font-semibold" : "text-brown/70"
              )}
            >
              {item.name}
              {activeSection === item.name.toLowerCase() && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute -bottom-2 left-0 right-0 h-[1px] bg-gold"
                />
              )}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-maroon"
          onClick={() => setIsOpen(true)}
          aria-label="Open Menu"
        >
          <Menu strokeWidth={1.5} size={28} />
        </button>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.4 }}
            className="fixed inset-0 z-50 bg-ivory flex flex-col justify-center items-center"
          >
            <button
              className="absolute top-6 right-6 text-maroon"
              onClick={() => setIsOpen(false)}
            >
              <X strokeWidth={1.5} size={32} />
            </button>
            <div className="flex flex-col space-y-8 text-center">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 + 0.2 }}
                  onClick={() => setIsOpen(false)}
                  className="font-serif text-3xl text-brown hover:text-gold transition-colors"
                >
                  {item.name}
                </motion.a>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="absolute bottom-12 font-devanagari text-gold text-lg"
            >
              ॥ श्री गणेशाय नमः ॥
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
