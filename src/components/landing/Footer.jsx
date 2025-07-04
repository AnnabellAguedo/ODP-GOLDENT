import React from 'react';

const Footer = ({ logoUrl }) => {
  return (
    <>
      <footer className="bg-gradient-to-br from-white via-gray-100 to-yellow-50 text-brand-dark py-16 rounded-t-3xl shadow-inner">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12 text-center md:text-left items-start">

            {/* Logo y slogan */}
            <div className="flex flex-col items-center md:items-start">
              <img src={logoUrl} alt="Logo de Goldent" className="h-16 w-auto mb-4" />
              <p className="text-brand-gray mb-4 max-w-xs">
                <strong>CENTRO ODONTOLÓGICO CATEGORIZADO</strong> en Huaraz, con más de 18 años cuidando las sonrisas de los más pequeños.
              </p>
              <p className="text-base text-gold font-semibold italic">
                Goldent te atiende y te cuida.
              </p>
            </div>

            {/* Contacto */}
            <div>
              <h3 className="text-xl font-bold text-brand-dark mb-4 border-b border-gold pb-2 inline-block">📞 Contacto</h3>
              <div className="space-y-2 text-brand-gray text-base">
                <p><span className="font-semibold text-brand-dark">📍 Dirección:</span> Huaraz, Ancash, Perú</p>
                <p><span className="font-semibold text-brand-dark">📱 Teléfonos:</span> +51 932405447 / 043 591283</p>
              </div>
            </div>

            {/* Horario */}
            <div>
              <h3 className="text-xl font-bold text-brand-dark mb-4 border-b border-gold pb-2 inline-block">⏰ Horario de atención</h3>
              <div className="space-y-2 text-brand-gray text-base">
                <p><strong>Lunes a Sábado:</strong> 8:00 a.m. - 8:00 p.m.</p>
                <p><strong>Domingos:</strong> 8:00 a.m. - 2:00 p.m.</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
