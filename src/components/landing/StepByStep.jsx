import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const steps = [
  {
    title: "Bienvenida Amigable",
    description: "Recibimos a tu hijo en un ambiente relajado y divertido para que se sienta cómodo desde el inicio."
  },
  {
    title: "Revisión Interactiva",
    description: "Usamos cámaras y espejos para que el niño vea sus propios dientes, convirtiendo la revisión en un juego."
  },
  {
    title: "Tratamiento sin Miedo",
    description: "Explicamos cada paso con palabras sencillas y técnicas de distracción para una experiencia positiva."
  },
  {
    title: "¡El Premio Final!",
    description: "Al terminar, cada niño valiente elige un premio de nuestra maleta mágica como recompensa."
  }
];

const StepByStep = ({ onVideoClick }) => {
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
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.5 }}
            className="relative rounded-3xl overflow-hidden shadow-2xl cursor-pointer group"
            onClick={() => onVideoClick("https://www.youtube.com/watch?v=dQw4w9WgXcQ")}
          >
            <img  alt="Video del paso a paso de una consulta dental infantil" className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-300" src="https://images.unsplash.com/photo-1674775372047-27fb6492c9a2" />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
              <div className="w-24 h-24 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xl">
                <Play className="w-12 h-12 text-gold-dark ml-1" fill="currentColor" />
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
            {steps.map((step, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-gold to-amber-400 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-md">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-dark">{step.title}</h3>
                  <p className="text-brand-gray">{step.description}</p>
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