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
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-gold to-amber-400 rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg">
                <service.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-3">{service.title}</h3>
              <p className="text-brand-gray leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;