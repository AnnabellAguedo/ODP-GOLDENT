import React from 'react';

const Footer = ({ logoUrl }) => {
  return (
    <>
      <footer className="bg-gray-100 text-brand-dark py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            <div className="flex flex-col items-center md:items-start">
              <div className="flex items-center mb-4">
                <img src={logoUrl} alt="Logo de Goldent" className="h-16 w-auto" />
              </div>
              <p className="text-brand-gray mb-4 max-w-xs">
                Especialistas en Atención Dental especializada a Niños en Huaraz con más de 18 años cuidando las sonrisas de los más pequeños.
              </p>
              <p className="text-sm text-gray-600">Goldent te atiende y te cuida.</p>
            </div>

            <div>
              <p className="text-lg font-semibold mb-4 block">Contacto</p>
              <div className="space-y-2 text-brand-gray">
                <p>📍 Huaraz, Ancash, Perú</p>
                <p>📞 +51 932405447</p>
              </div>
            </div>

            <div>
              <p className="text-lg font-semibold mb-4 block">Horario de atención</p>
              <div className="space-y-2 text-brand-gray">
                <p>Lunes a Sábado: 8:00 a.m. - 8:00 p.m.</p>
                <p>Domingos: 8:00 a.m. - 2:00 p.m.</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;