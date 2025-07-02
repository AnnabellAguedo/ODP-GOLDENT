import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const VideoCard = ({ thumbnailSrc, title, description, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.5 }}
      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group cursor-pointer"
      onClick={onClick}
    >
      <div className="relative">
        <img 
          alt={description}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
          <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xl">
            <Play className="w-8 h-8 text-gold-dark ml-1" fill="currentColor" />
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-brand-dark mb-2">{title}</h3>
        <p className="text-brand-gray">{description}</p>
      </div>
    </motion.div>
  );
};

export default VideoCard;