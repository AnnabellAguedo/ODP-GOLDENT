import React from 'react';
import { motion } from 'framer-motion';
import { Play, Star } from 'lucide-react';

const VideoTestimonial = ({ onVideoClick }) => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.5 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl cursor-pointer group" onClick={() => onVideoClick("Testimonio de mamá")}>
              <img  
                alt="Mamá feliz hablando sobre su experiencia en Goldent"
                className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-300"
               src="https://images.unsplash.com/photo-1674027945656-1817fbeb5a30" />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xl">
                  <Play className="w-12 h-12 text-gold-dark ml-1" fill="currentColor" />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, amount: 0.5 }}
            className="space-y-6"
          >
             <div className="flex items-center">
                <Star className="w-6 h-6 text-yellow-400 fill-current" />
                <Star className="w-6 h-6 text-yellow-400 fill-current" />
                <Star className="w-6 h-6 text-yellow-400 fill-current" />
                <Star className="w-6 h-6 text-yellow-400 fill-current" />
                <Star className="w-6 h-6 text-yellow-400 fill-current" />
              </div>
            <h3 className="text-3xl font-bold text-brand-dark">
              "Mi hijo salió feliz de su cita. ¡Y yo más tranquila que nunca!"
            </h3>
            <p className="text-xl text-brand-gray">
              Escucha de primera mano por qué las familias de Huaraz nos eligen para cuidar la sonrisa de sus hijos. La confianza es nuestro pilar.
            </p>
            <p className="font-bold text-lg text-brand-dark">- Mamá de Luciana</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VideoTestimonial;