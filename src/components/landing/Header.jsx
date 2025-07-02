import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';

const Header = ({ onWhatsAppClick, logoUrl }) => {
  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white/80 backdrop-blur-lg shadow-md sticky top-0 z-50"
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex flex-col items-start">
            <img src={logoUrl} alt="Logo de Goldent" className="h-16 md:h-20 w-auto" />
                      </div>
          <Button 
            onClick={onWhatsAppClick}
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hidden sm:inline-flex"
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            WhatsApp
          </Button>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;