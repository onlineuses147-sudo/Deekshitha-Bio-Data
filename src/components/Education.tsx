import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { ArrowDown } from 'lucide-react';

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });

  return (
    <section className="py-32 px-6 md:px-12 bg-ivory relative">
      <div className="max-w-3xl mx-auto text-center relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="font-serif text-3xl md:text-5xl text-maroon mb-6">Education & Profession</h2>
          <div className="w-16 h-[1px] bg-gold mx-auto" />
        </motion.div>

        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="p-8 glass rounded-3xl min-w-[280px]"
          >
            <h3 className="font-sans text-xs tracking-widest uppercase text-brown/50 mb-2">Education</h3>
            <p className="font-serif text-3xl text-brown">BAMS</p>
          </motion.div>

          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={isInView ? { height: 64, opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.6 }}
            className="w-[1px] bg-gold my-4 flex flex-col justify-end items-center"
          >
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 1.4 }}
              className="translate-y-4 text-gold"
            >
              <ArrowDown size={16} strokeWidth={2} />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="p-8 glass rounded-3xl min-w-[280px] mt-4 bg-cream/80"
          >
            <h3 className="font-sans text-xs tracking-widest uppercase text-brown/50 mb-2">Profession</h3>
            <p className="font-serif text-3xl text-maroon">-</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
