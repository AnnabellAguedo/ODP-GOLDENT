import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { MapPin, Navigation } from 'lucide-react';

const MapSection = () => {
  const mapUrl = "https://www.google.com/maps/search/?api=1&query=Jr.+Teresa+Gonz%C3%A1les+de+Fanning+136,+Independencia,+Huaraz,+Per%C3%BA";

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-brand-dark mb-4">
            ¡Visítanos!
          </h2>
          <p className="text-xl text-brand-gray max-w-3xl mx-auto">
            Estamos ubicados en el corazón de Huaraz, listos para recibirte con una sonrisa.
          </p>
        </motion.div>

        {/* Contenido: texto + imagen */}
        <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          
          {/* Bloque de texto e info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, amount: 0.5 }}
            className="lg:col-span-2 bg-white p-8 rounded-3xl shadow-lg border"
          >
            <div className="flex items-start space-x-4 mb-6">
              <MapPin className="w-12 h-12 text-gold mt-1" />
              <div>
                <h3 className="text-2xl font-bold text-brand-dark">Nuestra Ubicación</h3>
                <p className="text-brand-gray">
                  Jr. Teresa Gonzáles de Fanning 136, INDEPENDENCIA, Huaraz, Ancash, Perú.
                </p>
              </div>
            </div>

            <p className="text-brand-gray mb-6">
              Encuéntranos fácilmente en el centro de la ciudad. Contamos con un ambiente seguro,
              moderno y especialmente diseñado para los más pequeños.
            </p>

            <Button
              asChild
              className="w-full bg-gradient-to-r from-gold to-amber-500 hover:from-gold-dark hover:to-amber-600 text-white px-8 py-4 rounded-full shadow-xl"
            >
              <a href={mapUrl} target="_blank" rel="noopener noreferrer">
                <Navigation className="w-5 h-5 mr-2" />
                Cómo llegar en Google Maps
              </a>
            </Button>
          </motion.div>

          {/* Imagen clickeable */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true, amount: 0.5 }}
            className="lg:col-span-3 rounded-3xl overflow-hidden shadow-2xl"
          >
            <a href={mapUrl} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
              <img
                src="/ubicacion-goldent.jpeg"
                alt="Ubicación de la clínica Goldent en Huaraz"
                className="w-full h-96 object-cover"
              />
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default MapSection;
