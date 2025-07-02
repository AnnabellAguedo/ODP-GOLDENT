import React from 'react';
import { motion } from 'framer-motion';

const ExperienceSection = () => {
  return (
    <section className="py-20 bg-gray-50">
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
          <p className="text-xl text-brand-gray max-w-3xl mx-auto">
            Más que una consulta, creamos recuerdos felices. Mira cómo lo hacemos.
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