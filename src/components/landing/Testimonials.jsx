import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    video: '/testimonio-mama-luciana.mp4',
    quote: 'Mi hija salió feliz de su cita. ¡Y nosotros nos sentimos más tranquilos!',
    author: 'Papá de Shantall',
    description: 'Nos sentimos muy bien atendidos y seguros durante toda la consulta. Tienen mucha paciencia para explicarte y resolver dudas, la atención fue excelente.'
  },
  {
    video: '/testimonio-anquiloglosia.mp4',
    quote: 'Me ahorré tener que irme hasta la ciudad de Lima para poder hacerle el tratamiento a mi niño.',
    author: 'Mamá de Gean Carlo',
    description: 'Aquí encontramos una solución oportuna y profesional sin necesidad de viajar. La operación fue un éxito y estamos muy agradecidos.'
  },
  {
    video: '/testimonio-sergio.mp4',
    quote: 'Estoy muy contenta por la atención, la empatía y la paciencia que tienen. ¡Gracias!',
    author: 'Mamá de Mathias',
    description: 'Mi hijo tenía miedo, pero lo trataron con tanto amor que salió feliz. Agradezco mucho al equipo por su dedicación.'
  },
];

const Testimonials = () => {
  return (
    <section id="testimonios" className="py-20 bg-white">
      <div className="container mx-auto px-4 space-y-16">
        {testimonials.map((item, index) => (
          <div key={index} className="grid lg:grid-cols-2 gap-12 items-center">
            {/* VIDEO */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <video
                autoPlay={index === 0}
                muted={index !== 0}
                loop={index === 0}
                controls
                playsInline
                className="rounded-3xl shadow-2xl w-full h-auto"
              >
                <source src={item.video} type="video/mp4" />
                Tu navegador no soporta el video.
              </video>
            </motion.div>

            {/* TEXTO */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true, amount: 0.5 }}
              className="space-y-6"
            >
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <h3 className="text-2xl font-bold text-brand-dark">
                "{item.quote}"
              </h3>
              <p className="text-lg text-brand-gray">
                {item.description}
              </p>
              <p className="font-bold text-md text-brand-dark">- {item.author}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
