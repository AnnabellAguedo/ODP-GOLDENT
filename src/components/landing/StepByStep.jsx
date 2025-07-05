import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    title: "Bienvenida y Triaje",
    description:
      "Recibimos a tu hijo con una gran sonrisa, lo hacemos sentir seguro desde el primer momento y realizamos un breve triaje para conocerlo mejor.",
  },
  {
    title: "Apertura de Historia y Radiografía",
    description:
      "Para niños desde los 6 años tomamos una radiografía panorámica, abriendo su historia clínica con todo el cuidado y paciencia que merecen.",
  },
  {
    title: "Revisión Interactiva",
    description:
      "Convertimos la consulta en un juego: usamos espejos, cámaras y peluches para que tu hijo explore y aprenda sobre sus dientes divirtiéndose.",
  },
  {
    title: "¡La Maleta de Premios!",
    description:
      "Al terminar, cada niño elige un premio mágico como reconocimiento por su valentía y cooperación. ¡Siempre se van felices!",
  },
];

const StepByStep = () => {
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
            Así es una visita en Goldent
          </h2>
          <p className="text-xl text-brand-gray max-w-3xl mx-auto">
            Un proceso diseñado paso a paso para garantizar la comodidad y confianza de tu hijo.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* VIDEO EN FORMATO VERTICAL */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.5 }}
            className="flex justify-center items-center rounded-3xl shadow-2xl bg-black p-4"
          >
            <div className="w-full max-w-[380px] aspect-[9/16] rounded-2xl overflow-hidden shadow-xl">
              <video
                src="/visita-goldent.MP4"//
                className="w-full h-full object-contain"
                controls
                autoPlay
                muted={false}
                playsInline
              />
            </div>
          </motion.div>

          {/* PASOS EXPLICATIVOS */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, amount: 0.5 }}
            className="space-y-8"
          >
            {steps.map((step, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-gold to-amber-400 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-md">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-gold-dark drop-shadow-sm hover:drop-shadow-md transition-all duration-300">
                    {step.title}
                  </h3>
                  <p className="text-brand-gray mt-1 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StepByStep;
