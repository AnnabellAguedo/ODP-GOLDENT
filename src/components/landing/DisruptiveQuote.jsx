import React from 'react';
import { motion } from 'framer-motion';
import { Info } from 'lucide-react';

const DisruptiveQuote = ({ text }) => {
  return (
    <section className="py-16 bg-brand-dark">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.5 }}
          className="flex flex-col md:flex-row items-center justify-center text-center gap-6"
        >
          <Info className="w-10 h-10 text-gold" />
          <p className="text-2xl font-medium text-white max-w-3xl">
            "{text}"
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default DisruptiveQuote;