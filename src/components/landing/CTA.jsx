import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { MessageCircle, Phone } from 'lucide-react';

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
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Agenda una cita hoy y descubre por qué somos la clínica de confianza de las familias en Huaraz desde hace más de 18 años.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={onWhatsAppClick}
              size="lg"
              className="bg-gradient-to-r from-gold to-amber-500 hover:from-gold-dark hover:to-amber-600 text-white px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Agendar por WhatsApp
            </Button>
            <Button 
              onClick={() => window.location.href = 'tel:+51999999999'}
              variant="outline"
              size="lg"
              className="border-2 border-gold text-gold hover:bg-gold hover:text-white px-8 py-4 rounded-full transition-all duration-300"
            >
              <Phone className="w-5 h-5 mr-2" />
              Llamar Ahora
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;