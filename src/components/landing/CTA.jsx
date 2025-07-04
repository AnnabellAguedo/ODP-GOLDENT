import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';

const CTA = ({ onWhatsAppClick }) => {
  return (
    <section className="py-20 bg-brand-dark">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-center text-white"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            ¿Listo para cuidar la sonrisa de tu hijo?
          </h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto opacity-90">
            AGENDA UN CITA HOY y descubre por qué somos la clínica de confianza de más de 500 familias en Huaraz desde hace más de 18 años.
          </p>

          <Button 
            onClick={onWhatsAppClick}
            size="lg"
            className="bg-gradient-to-r from-gold to-amber-500 hover:from-gold-dark hover:to-amber-600 text-white px-10 py-5 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            <MessageCircle className="w-6 h-6 mr-3" />
            Agendar por WhatsApp
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;

