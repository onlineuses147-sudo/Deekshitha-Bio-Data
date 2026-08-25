import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Calendar, Clock, MapPin, Moon, Star, Heart, Scroll, Fingerprint, Ruler, GraduationCap, Stethoscope } from 'lucide-react';
import { cn } from '../utils';

const details = [
  { label: 'Date of Birth', value: '18 May 2001', icon: Calendar },
  { label: 'Time of Birth', value: '04:35 PM', icon: Clock },
  { label: 'Place of Birth', value: 'Khammam', icon: MapPin },
  { label: 'Rashi', value: 'Meena', icon: Moon },
  { label: 'Nakshatra', value: 'Utharabadra 2', icon: Star },
  { label: 'Religion', value: 'Hindu', icon: Heart },
  { label: 'Caste', value: 'Padmasali', icon: Fingerprint },
  { label: 'Gotra', value: 'Bharadhwaja', icon: Scroll },
  { label: 'Height', value: '5 ft. 2 in.', icon: Ruler },
  { label: 'Education', value: 'BAMS', icon: GraduationCap },
  { label: 'Occupation', value: 'House Surgeon', icon: Stethoscope, colSpan: true },
];

export default function PersonalDetails() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } }
  };

  return (
    <section id="details" className="py-24 px-6 md:px-12 bg-cream relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl md:text-5xl text-maroon mb-6">Personal Details</h2>
          <div className="w-16 h-[1px] bg-gold mx-auto" />
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {details.map((detail, idx) => (
            <motion.div
              key={idx}
              variants={item}
              className={cn(
                "group p-6 rounded-2xl bg-ivory border border-white/50 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden",
                detail.colSpan ? "md:col-span-2 lg:col-span-1" : ""
              )}
            >
              {/* Hover effect background */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Border reveal on hover */}
              <div className="absolute inset-0 border border-gold/0 group-hover:border-gold/30 rounded-2xl transition-colors duration-500" />

              <div className="relative z-10 flex items-start space-x-4">
                <div className="p-3 rounded-full bg-cream text-maroon group-hover:bg-maroon group-hover:text-gold transition-colors duration-300">
                  <detail.icon size={20} strokeWidth={1.5} className="group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div>
                  <h3 className="font-sans text-xs tracking-widest uppercase text-brown/50 mb-1">{detail.label}</h3>
                  <p className="font-serif text-xl text-brown group-hover:text-maroon transition-colors duration-300">{detail.value}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
