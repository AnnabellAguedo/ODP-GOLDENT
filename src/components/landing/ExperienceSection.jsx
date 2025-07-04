import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react'; // Asegúrate de tener lucide-react instalado

const ExperienceSection = () => {
  return (
    <section className="py-20 bg-yellow-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-brand-dark mb-4">
            Una Experiencia Mágica y Divertida
          </h2>

          <p className="text-xl text-brand-gray max-w-3xl mx-auto mb-4">
            Más que una consulta, creamos buenas relaciones con nuestros pequeños pacientes y sobre todo recuerdos felices.
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center justify-center gap-2 text-lg font-semibold text-yellow-700"
          >
            <Play className="w-6 h-6 fill-yellow-700" />
            <span>¡Dale play y vive la magia!</span>
          </motion.div>

          <p className="text-md text-brand-gray mt-2">
            Descubre por qué cientos de familias confían en Goldent para cuidar la sonrisa de sus hijos.
          </p>
        </motion.div>

        <div className="max-w-md mx-auto">
          <div className="aspect-[9/16] rounded-2xl overflow-hidden shadow-xl">
            <video
              src="/doctora-disfraz.mp4"
              controls
              className="w-full h-full object-cover"
            >
              Tu navegador no soporta el video.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
