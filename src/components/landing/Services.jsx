import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Heart, Users, Star, Clock, CheckCircle } from 'lucide-react';

const servicesData = [
  { icon: Shield, title: "Prevención Dental", description: "Limpiezas dentales, selladores y fluorización para prevenir caries." },
  { icon: Heart, title: "Tratamiento de Caries", description: "Curaciones con materiales seguros y estéticos." },
  { icon: Users, title: "Ortodoncia Infantil", description: "Detección y correción temprana de problemas de mordida." },
  { icon: Star, title: "Sedación Consciente y Sedación Profunda", description: "Para niños con ansiedad dental, problemas sistémicos o traumas previos; todos manejados con máxima seguridad." },
  { icon: Clock, title: "Emergencias Dentales", description: "Atención inmediata para golpes o fracturas dentarias y dolores agudos, contamos con tomógrafo propio." },
  { icon: CheckCircle, title: "Educación Dental", description: "Enseñamos técnicas de higiene oral de forma divertida." }
];

const Services = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold text-brand-dark mb-4 uppercase tracking-wide">
            Cuidado Dental Integral para Bebés, Niños y Adolescentes
          </h2>
          <p className="text-xl text-brand-gray max-w-3xl mx-auto">
            Ofrecemos un cuidado completo y especializado para la salud bucal de tus hijos, en un ambiente de confianza y calidez.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.5 }}
              className="group bg-white rounded-3xl p-8 shadow-md hover:shadow-xl transition-transform duration-300 transform hover:-translate-y-2 border-2 border-gold/10 hover:border-gold"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-gold to-yellow-400 rounded-xl flex items-center justify-center mb-6 text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-brand-dark mb-3 uppercase tracking-tight group-hover:text-gold">
                {service.title}
              </h3>
              <p className="text-brand-gray leading-relaxed text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
