import React from 'react';
import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    question: "¿Cuándo debe ser la primera visita de mi hijo al dentista?",
    answer: "La Academia Americana de Odontopediatría recomienda la primera visita cuando aparece el primer diente o, a más tardar, en su primer cumpleaños. Esto nos permite prevenir problemas y que tu hijo se familiarice con nosotros."
  },
  {
    question: "¿Qué pasa si mi hijo tiene miedo o no coopera?",
    answer: "¡Es normal! Nuestros odontopediatras son expertos en técnicas de manejo de la conducta. Usamos juegos, distracciones y mucha paciencia. Contamos con un ambiente diseñado para que se sientan seguros y cómodos."
  },
  {
    question: "¿Son realmente necesarios los tratamientos en dientes de leche?",
    answer: "¡Absolutamente! Los dientes de leche guardan el espacio para los permanentes y son clave para hablar y masticar correctamente. Una caries no tratada puede causar dolor, infecciones y afectar al diente permanente que viene."
  },
  {
    question: "¿Cómo puedo preparar a mi hijo para su primera cita?",
    answer: "Habla de la visita de forma positiva. Puedes leerle un cuento sobre ir al dentista o ver un video amigable. Evita usar palabras como 'dolor', 'aguja' o 'miedo'. ¡Nosotros nos encargamos del resto!"
  }
];

const FAQ = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-brand-dark mb-4">
            Resolviendo tus Dudas
          </h2>
          <p className="text-xl text-brand-gray max-w-3xl mx-auto">
            Aquí encontrarás respuestas a las preguntas más comunes de los padres.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqData.map((item, index) => (
              <AccordionItem value={`item-${index}`} key={index} className="bg-gray-50/50 rounded-2xl mb-4 px-6 border border-gold/20 shadow-sm">
                <AccordionTrigger className="text-lg text-left font-semibold text-brand-dark hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-brand-gray text-base">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;