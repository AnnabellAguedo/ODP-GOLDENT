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
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src={logoUrl} alt="Logo de Goldent" className="h-16 md:h-20 w-auto" />
          </div>

          {/* Eslogan más grande */}
          <div className="flex-1 text-center hidden md:block">
            <p className="text-gold-dark font-bold text-2xl md:text-3xl tracking-wide">
              Goldent te atiende y te cuida
            </p>
          </div>

          {/* Botón WhatsApp */}
          <Button 
            onClick={onWhatsAppClick}
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hidden sm:inline-flex"
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            AGENDAR por WhatsApp
          </Button>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;

