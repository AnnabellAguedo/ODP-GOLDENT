import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const FloatingWhatsApp = ({ isVisible, onClick }) => {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: isVisible ? 1 : 0, opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="fixed bottom-6 right-6 z-50"
    >
      <button
        onClick={onClick}
        className="bg-green-500 hover:bg-green-600 text-white rounded-full px-6 py-4 shadow-2xl flex items-center gap-2 transition-all duration-300"
      >
        <MessageCircle className="w-5 h-5" />
        <span className="font-semibold text-sm"> AGENDAR por WhatsApp</span>
      </button>
    </motion.div>
  );
};

export default FloatingWhatsApp;
