import React from 'react';
import { motion } from 'framer-motion';
import { Star, User } from 'lucide-react';

const testimonialsData = [
  {
    name: "Mamá de Luciana",
    text: "Mi hijo salió feliz de su cita. ¡Y yo más tranquila que nunca!",
    rating: 5
  },
  {
    name: "Papá de Mateo",
    text: "Desde que lo llevé a Goldent, ya no teme al dentista. ¡Hasta quiere volver!",
    rating: 5
  },
  {
    name: "Mamá de Camila",
    text: "Ver a mi hija confiando en la doctora desde el primer minuto no tiene precio.",
    rating: 5
  }
];

const Testimonials = ({ onTestimonialClick }) => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-brand-dark mb-4">
            Padres Tranquilos, Hijos Felices
          </h2>
          <p className="text-xl text-brand-gray max-w-3xl mx-auto">
            Testimonios reales de familias que confían en la experiencia Goldent.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.5 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100 flex flex-col"
              onClick={onTestimonialClick}
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-brand-gray mb-6 italic flex-grow">"{testimonial.text}"</p>
              <div className="flex items-center space-x-3 pt-4 border-t">
                <div className="w-12 h-12 bg-gradient-to-br from-gold to-amber-400 rounded-full flex items-center justify-center text-white">
                  <User className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-bold text-brand-dark">{testimonial.name}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;