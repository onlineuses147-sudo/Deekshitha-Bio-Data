import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

const family = [
  { role: 'Father', name: 'Ramesh Babu Gaddam', occupation: 'RTC Employee' },
  { role: 'Mother', name: 'Madhavi Gaddam', occupation: 'Housewife' },
  { role: 'Sibling', name: '1 Younger Brother', occupation: 'Currently pursuing B.Tech' },
];

export default function Family() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="family" className="py-32 px-6 md:px-12 bg-ivory relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-champagne/40 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-rose/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="font-serif text-3xl md:text-5xl text-maroon mb-6">Her Family</h2>
          <div className="w-16 h-[1px] bg-gold mx-auto" />
        </motion.div>

        <div className="relative flex flex-col items-center">
          {/* Animated vertical connecting line */}
          <motion.div 
            initial={{ height: 0 }}
            animate={isInView ? { height: '100%' } : {}}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute top-0 bottom-0 w-[1px] bg-gradient-to-b from-gold/0 via-gold/40 to-gold/0 left-1/2 -translate-x-1/2"
          />

          {family.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: idx * 0.4 + 0.5 }}
              className={`relative flex items-center w-full mb-16 last:mb-0 ${
                idx % 2 === 0 ? 'justify-start md:justify-end' : 'justify-start'
              }`}
            >
              {/* Desktop layout uses alternating sides, mobile is stacked left with connecting lines adjusted */}
              
              {/* Connecting node dot */}
              <motion.div 
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.4, delay: idx * 0.4 + 1 }}
                className="absolute left-1/2 -translate-x-1/2 w-3 h-3 bg-ivory border-2 border-gold rounded-full z-10 hidden md:block"
              />

              <div className={`w-full md:w-5/12 ${idx % 2 === 0 ? 'md:pl-12' : 'md:pr-12 md:text-right'}`}>
                <div className="glass p-8 rounded-3xl hover:bg-ivory transition-colors duration-300 relative group overflow-hidden">
                  <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    <h3 className="font-sans text-xs tracking-widest uppercase text-gold-dark mb-2">{member.role}</h3>
                    <h4 className="font-serif text-2xl text-brown mb-2">{member.name}</h4>
                    <p className="font-sans text-sm text-brown/60 uppercase tracking-wider">{member.occupation}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
