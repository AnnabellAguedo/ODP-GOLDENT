import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Award, Calendar, PlayCircle, Star } from 'lucide-react';

const Hero = ({ onWhatsAppClick, onVideoClick }) => {
  return (
    <section className="relative py-20 overflow-hidden bg-gray-50">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <div className="inline-flex items-center bg-gold-light/30 text-gold-dark px-4 py-2 rounded-full text-sm font-medium border border-gold/50">
                <Award className="w-4 h-4 mr-2" />
                +18 años de experiencia
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-brand-dark leading-tight">
                Sonrisas
                <span className="block bg-gradient-to-r from-gold to-amber-400 bg-clip-text text-transparent">
                  Saludables
                </span>
                para tus hijos
              </h1>
              <p className="text-xl text-brand-gray leading-relaxed">
  En <strong>Goldent</strong>, tu hijo es cuidado con amor. Porque su sonrisa merece <strong>paciencia</strong>, <strong>ternura</strong> y lo mejor de la <strong>tecnología</strong>.
  <br />
  Contamos con especialistas en <strong>odontopediatría</strong>, <strong>pediatría</strong> y <strong>anestesia</strong>, preparados para cuidar desde lo más simple hasta lo más complejo.<br /><strong>Estamos en Huaraz</strong> para que crezca feliz, sano… y sonriendo.

</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={onWhatsAppClick}
                size="lg"
                className="bg-gradient-to-r from-gold to-amber-500 hover:from-gold-dark hover:to-amber-600 text-white px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Agendar Cita Ahora
              </Button>
              <Button 
                onClick={onVideoClick}
                variant="outline"
                size="lg"
                className="border-2 border-gold text-gold-dark hover:bg-gold-light/20 px-8 py-4 rounded-full transition-all duration-300"
              >
                <PlayCircle className="w-5 h-5 mr-2" />
                Ver Video
              </Button>
            </div>

            <div className="flex items-center space-x-8 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-gold-dark">500+</div>
                <div className="text-sm text-brand-gray">Niños Atendidos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gold-dark">18+</div>
                <div className="text-sm text-brand-gray">Años Experiencia</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gold-dark">98%</div>
                <div className="text-sm text-brand-gray">Satisfacción</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
          <img
  alt="Niño sonriendo feliz en la clínica dental Goldent"
  className="w-full h-[500px] object-cover"
  src="/foto1LDPODP.jpg"
/>
<p className="mt-4 text-center italic text-gray-700">
  Aquí empezó todo... <strong>José Emilio</strong> fue mi primera inspiración para crear una Odontopediatría con alma.  
  Hoy, cientos de familias confían en <strong>Goldent</strong> para cuidar a sus pequeños como si fueran nuestros propios hijos.
</p>


              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="absolute bottom-[-6rem] -left-6 bg-white rounded-2xl p-4 shadow-xl border mt-20"
            >
              <div className="flex items-center space-x-3">
                <div className="flex -space-x-2">
                  <Star className="w-6 h-6 text-yellow-400 fill-current" />
                  <Star className="w-6 h-6 text-yellow-400 fill-current" />
                  <Star className="w-6 h-6 text-yellow-400 fill-current" />
                  <Star className="w-6 h-6 text-yellow-400 fill-current" />
                  <Star className="w-6 h-6 text-yellow-400 fill-current" />
                </div>
                <div>
                  <div className="font-bold text-brand-dark">5.0</div>
                  <div className="text-sm text-brand-gray">Calificación</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;