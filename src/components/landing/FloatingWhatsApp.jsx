import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';

const FloatingWhatsApp = ({ isVisible, onClick }) => {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: isVisible ? 1 : 0, opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="fixed bottom-6 right-6 z-50"
    >
      <Button
        onClick={onClick}
        className="bg-green-500 hover:bg-green-600 text-white rounded-full h-16 w-16 shadow-2xl flex items-center justify-center"
      >
        <MessageCircle className="w-8 h-8" />
      </Button>
    </motion.div>
  );
};

export default FloatingWhatsApp;