import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import { useToast } from '@/components/ui/use-toast';

import Header from '@/components/landing/Header';
import Hero from '@/components/landing/Hero';
import UrgencyOffer from '@/components/landing/UrgencyOffer';
import Services from '@/components/landing/Services';
import DisruptiveQuote from '@/components/landing/DisruptiveQuote';
import StepByStep from '@/components/landing/StepByStep';
import ExperienceSection from '@/components/landing/ExperienceSection';
import VideoTestimonial from '@/components/landing/VideoTestimonial';
import Testimonials from '@/components/landing/Testimonials';
import BeforeAfter from '@/components/landing/BeforeAfter';
import FAQ from '@/components/landing/FAQ';
import MapSection from '@/components/landing/MapSection';
import CTA from '@/components/landing/CTA';
import Footer from '@/components/landing/Footer';
import VideoPlayerModal from '@/components/landing/VideoPlayerModal';
import FloatingWhatsApp from '@/components/landing/FloatingWhatsApp';

function App() {
  const { toast } = useToast();
  const newLogoUrl = "https://storage.googleapis.com/hostinger-horizons-assets-prod/72c020e3-c01b-4192-9706-52e8153c422a/558122308b0a5942a916cc1c29e02d19.png";

  const [videoUrl, setVideoUrl] = useState('');
  const [showFloatingButton, setShowFloatingButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = (scrollPosition / pageHeight) * 100;
      
      if (scrollPercentage > 50) {
        setShowFloatingButton(true);
      } else {
        setShowFloatingButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleVideoClick = (url) => {
    if (url) {
      setVideoUrl(url);
    } else {
      toast({
        title: `🚧 ¡Video no disponible!`,
        description: "Aún no hemos añadido un video para esta sección. ¡Puedes solicitarlo en tu próximo mensaje! 🚀",
      });
    }
  };

  const closeVideoModal = () => {
    setVideoUrl('');
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("¡Hola! Me interesa agendar una cita de odontopediatría para mi hijo/a. ¿Podrían ayudarme con más información?");
    window.open(`https://wa.me/51999999999?text=${message}`, '_blank');
  };

  const handleWhatsAppOfferClick = () => {
    const message = encodeURIComponent("¡Hola! Quiero agendar una cita y reclamar la oferta de Fluorización Gratuita. ¿Me ayudan por favor?");
    window.open(`https://wa.me/51999999999?text=${message}`, '_blank');
  };

  const handleGenericClick = (feature) => {
    toast({
      title: `🚧 ¡${feature} próximamente!`,
      description: "Esta función no está implementada aún—¡pero no te preocupes! ¡Puedes solicitarla en tu próximo mensaje! 🚀",
    });
  };

  return (
    <>
      <Helmet>
        <title>Odontopediatría Goldent - ¡Oferta Especial! Fluorización Gratis</title>
        <meta name="description" content="¡Oferta por tiempo limitado! Agenda una cita de odontopediatría en Goldent Huaraz y obtén una fluorización gratuita. +18 años de experiencia." />
      </Helmet>

      <div className="min-h-screen bg-white">
        <Header onWhatsAppClick={handleWhatsAppClick} logoUrl={newLogoUrl} />
        <main>
          <Hero onWhatsAppClick={handleWhatsAppClick} onVideoClick={() => handleVideoClick("https://www.youtube.com/watch?v=ysz5S6PUM-U")} />
          <UrgencyOffer onWhatsAppClick={handleWhatsAppOfferClick} />
          <DisruptiveQuote text="¿Sabías que la primera visita al dentista debería ser apenas salen los primeros dientecitos?" />
          <Services />
          <StepByStep onVideoClick={handleVideoClick} />
          <ExperienceSection onVideoClick={handleVideoClick} />
          <DisruptiveQuote text="Contamos con odontopediatras certificados, expertos en tratar niños con amor, paciencia y conocimiento." />
          <VideoTestimonial onVideoClick={() => handleVideoClick("https://www.youtube.com/watch?v=gC3w22s-4uA")} />
          <Testimonials onTestimonialClick={() => handleGenericClick("Testimonios")} />
          <DisruptiveQuote text="Cuidar la sonrisa de tu hijo desde pequeño, es una decisión que cambia su futuro." />
          <BeforeAfter />
          <FAQ />
          <MapSection />
          <CTA onWhatsAppClick={handleWhatsAppClick} />
        </main>
        <Footer logoUrl={newLogoUrl} />
        <Toaster />
        <VideoPlayerModal videoUrl={videoUrl} onClose={closeVideoModal} />
        <FloatingWhatsApp isVisible={showFloatingButton} onClick={handleWhatsAppClick} />
      </div>
    </>
  );
}

export default App;