import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Gift, Zap } from 'lucide-react';
import CountdownTimer from './CountdownTimer';

const UrgencyOffer = ({ onWhatsAppClick }) => {
  return (
    <section className="py-16 bg-gradient-to-r from-brand-dark via-gray-900 to-brand-dark">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
          className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-gold/20 text-white text-center shadow-2xl"
        >
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center text-brand-dark">
              <Gift className="w-8 h-8" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-gold-light to-amber-400 bg-clip-text text-transparent">
            ¡Oferta por Tiempo Limitado!
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-6 opacity-90">
            Agenda una cita en los próximos minutos y obtén una <strong className="font-extrabold text-gold-light">Fluorización Gratuita</strong> con el tratamiento integral de tu hijo.
          </p>
          
          <div className="flex justify-center mb-8">
            <CountdownTimer initialMinutes={15} />
          </div>

          <Button 
            onClick={onWhatsAppClick}
            size="lg"
            className="bg-gradient-to-r from-gold to-amber-500 hover:from-gold-dark hover:to-amber-600 text-white px-10 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 text-lg"
          >
            <Zap className="w-5 h-5 mr-3 animate-pulse" />
            ¡Reclamar Oferta Ahora!
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default UrgencyOffer;