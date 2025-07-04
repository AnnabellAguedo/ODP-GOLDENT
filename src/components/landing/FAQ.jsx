import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from 'lucide-react';

const faqData = [
  {
    question: "¿Cuándo debe ser la primera visita de mi hijo al dentista?",
    answer: "La Academia Americana de Odontopediatría recomienda la primera visita cuando aparece el primer diente o, a más tardar, antes de su primer cumpleaños. Esto nos permite prevenir problemas y que tu hijo se familiarice con nosotros."
  },
  {
    question: "¿Qué pasa si mi hijo tiene miedo o no coopera?",
    answer: "El temor de un niño a alguien o a algo que no conoce es completamente normal. Nuestro equipo de especialistas y asistentes son expertos en técnicas de manejo de la conducta. Usamos juegos, distracciones y mucha paciencia. Es muy importante para nosotros que procures traerlo a su primera consulta cuando no aún no hay dolor o problemas agudos."
  },
  {
    question: "¿Son realmente necesarios los tratamientos en dientes de leche?",
    answer: "¡Absolutamente! Los dientes de leche guardan y aseguran el espacio para los dientes adultos y son clave para hablar y masticar correctamente. Una caries no tratada puede causar dolor, infecciones y afectar la salud general del niño y también al diente de adulto que viene."
  },
  {
    question: "¿Cómo puedo preparar a mi hijo para su primera cita?",
    answer: "Habla de la visita de forma positiva, nunca como una amenaza. Puedes leerle un cuento sobre ir al dentista o ver un video amigable. Evita usar palabras como 'dolor', 'aguja' o 'miedo'. ¡Nosotros nos encargamos del resto!"
  }
];

const FAQ = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && videoRef.current) {
          videoRef.current.play().catch(() => {});
        }
      },
      { threshold: 0.5 }
    );

    const currentRef = videoRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <section className="py-20 bg-[#FFFDF7]">
      <div className="container mx-auto px-4">

        {/* Video vertical */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.5 }}
          className="w-full flex justify-center mb-12"
        >
          <div className="w-[300px] sm:w-[350px] md:w-[400px] rounded-2xl overflow-hidden shadow-lg">
            <h3 className="text-2xl font-semibold text-center text-brand-dark mb-4 flex items-center justify-center gap-2">
              🎥 Nuestra mini doctora te explica...
            </h3>
            <video
              ref={videoRef}
              src="/doctora-bebe.mp4"
              muted
              playsInline
              controls
              className="w-full h-auto object-contain"
            >
              Tu navegador no soporta el video.
            </video>
          </div>
        </motion.div>

        {/* Título de sección */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-brand-dark mb-4 flex justify-center items-center gap-2">
            <HelpCircle className="w-8 h-8 text-gold" /> Resolviendo tus Dudas
          </h2>
          <p className="text-xl text-brand-gray max-w-3xl mx-auto">
            Todo lo que siempre quisiste saber antes de llevar a tu peque al dentista… ¡resuelto aquí!
          </p>
        </motion.div>

        {/* Preguntas tipo acordeón */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqData.map((item, index) => (
              <AccordionItem
                value={`item-${index}`}
                key={index}
                className="bg-white border-l-4 border-gold rounded-xl mb-4 px-6 py-4 shadow-md hover:shadow-lg transition-shadow"
              >
                <AccordionTrigger className="text-lg text-left font-semibold text-brand-dark hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-brand-gray text-base pt-2">
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
