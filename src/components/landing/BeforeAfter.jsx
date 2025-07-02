import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const cases = [
  {
    title: "Tratamiento de Caries y Manchas",
    description: "Restauración completa con materiales estéticos y seguros.",
    beforeImg: "/imgs/before1.jpg",
    beforeImgAlt: "Diente de niño con caries antes del tratamiento",
    beforeImgDesc: "Primer plano de un molar infantil mostrando una caries",
    afterImg: "/imgs/after1.jpg",
    afterImgAlt: "Diente de niño sano y restaurado después del tratamiento",
    afterImgDesc: "El mismo molar infantil después de una restauración dental limpia"
  },
  {
    title: "Ortodoncia Preventiva",
    description: "Corrección temprana de mordida para una buena masticación y futuro saludable.",
    beforeImg: "/imgs/ortodoncia-before.jpg",
    beforeImgAlt: "Sonrisa de niño con dientes desalineados antes de ortodoncia",
    beforeImgDesc: "Sonrisa infantil mostrando apiñamiento dental inicial",
    afterImg: "/imgs/ortodoncia-after.jpg",
    afterImgAlt: "Sonrisa de niño alineada y saludable después de ortodoncia preventiva",
    afterImgDesc: "Sonrisa infantil radiante con dientes correctamente alineados"
  },
  {
    title: "Selladores de Fisuras",
    description: "Protección eficaz contra las caries en los molares permanentes.",
    beforeImg: "/imgs/sellantesantes.jpg",
    beforeImgAlt: "Molar de niño sin protección de sellador",
    beforeImgDesc: "Superficie de un molar con surcos profundos",
    afterImg: "/imgs/sellantesdespues.jpg",
    afterImgAlt: "Molar de niño protegido con sellador dental",
    afterImgDesc: "Superficie de un molar lisa y protegida por un sellador"
  }
];

const BeforeAfter = () => {
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
            Resultados que 
            <span className="block bg-gradient-to-r from-gold to-amber-400 bg-clip-text text-transparent">
              Hablan por Sí Mismos
            </span>
          </h2>
          <p className="text-xl text-brand-gray max-w-3xl mx-auto">
            Transformaciones reales en la sonrisa de nuestros pequeños pacientes.
          </p>
        </motion.div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {cases.map((case_, index) => (
              <CarouselItem key={index} className="md:basis-1/2">
                <div className="p-1">
                  <Card className="bg-white rounded-3xl p-6 shadow-xl border overflow-hidden">
                    <CardContent className="flex flex-col p-0">
                      <h3 className="text-2xl font-bold text-brand-dark mb-2">{case_.title}</h3>
                      <p className="text-brand-gray mb-6">{case_.description}</p>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <h4 className="text-lg font-semibold text-brand-dark mb-3 text-center">Antes</h4>
                          <div className="relative rounded-xl overflow-hidden">
                            <img alt={case_.beforeImgAlt} className="w-full h-48 object-cover" src={case_.beforeImg} />
                            <p className="text-sm text-center mt-2 text-brand-gray">{case_.beforeImgDesc}</p>
                          </div>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-brand-dark mb-3 text-center">Después</h4>
                          <div className="relative rounded-xl overflow-hidden">
                            <img alt={case_.afterImgAlt} className="w-full h-48 object-cover" src={case_.afterImg} />
                            <p className="text-sm text-center mt-2 text-brand-gray">{case_.afterImgDesc}</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default BeforeAfter;
