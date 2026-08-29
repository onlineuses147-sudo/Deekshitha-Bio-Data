import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { MapPin, Phone, MessageCircle } from 'lucide-react';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });

  return (
    <section id="contact" className="py-32 px-6 md:px-12 bg-ivory relative">
      <div className="max-w-4xl mx-auto text-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="font-serif text-3xl md:text-5xl text-maroon mb-6">Connect With The Family</h2>
          <div className="w-16 h-[1px] bg-gold mx-auto" />
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center max-w-sm"
          >
            <div className="p-4 bg-cream rounded-full text-maroon mb-6 border border-gold/20">
              <MapPin size={24} strokeWidth={1.5} />
            </div>
            <h3 className="font-sans text-xs tracking-widest uppercase text-brown/50 mb-4">Address</h3>
            <p className="font-serif text-xl text-brown text-balance">
              Lecturers Colony, Near BBM School, Khammam, Telangana
            </p>
          </motion.div>

          <div className="hidden md:block w-px h-32 bg-gold/30" />

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col items-center"
          >
            <div className="p-4 bg-cream rounded-full text-maroon mb-6 border border-gold/20">
              <Phone size={24} strokeWidth={1.5} />
            </div>
            <h3 className="font-sans text-xs tracking-widest uppercase text-brown/50 mb-4">Contact</h3>
            <p className="font-serif text-2xl text-brown mb-2">
              7989065720
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a href="tel:7989065720" className="w-full sm:w-auto px-8 py-4 bg-cream text-maroon border border-maroon/20 hover:border-maroon rounded-full flex items-center justify-center space-x-3 transition-all hover:bg-maroon hover:text-ivory group">
            <Phone size={18} strokeWidth={2} />
            <span className="font-sans text-sm tracking-widest uppercase font-semibold">Call</span>
          </a>
          <a href="https://wa.me/917989065720" target="_blank" rel="noreferrer" className="w-full sm:w-auto px-8 py-4 bg-[#25D366]/10 text-[#128C7E] border border-[#25D366]/30 hover:border-[#25D366] rounded-full flex items-center justify-center space-x-3 transition-all hover:bg-[#25D366] hover:text-white group">
            <MessageCircle size={18} strokeWidth={2} className="group-hover:animate-pulse" />
            <span className="font-sans text-sm tracking-widest uppercase font-semibold">WhatsApp</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
