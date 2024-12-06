import React from 'react';
import { motion } from 'framer-motion';

const culturalIcons = [
  {
    name: 'Ashoka Chakra',
    image: 'https://images.unsplash.com/photo-1532375810709-75b1da00537c?auto=format&fit=crop&q=80',
    description: 'Symbol of dharma and justice'
  },
  {
    name: 'Lotus',
    image: 'https://images.unsplash.com/photo-1606293926075-69a00dbfde81?auto=format&fit=crop&q=80',
    description: 'National flower representing purity'
  },
  {
    name: 'Peacock',
    image: 'https://images.unsplash.com/photo-1511208687438-2c5a5abb810c?auto=format&fit=crop&q=80',
    description: 'National bird of India'
  },
  {
    name: 'Tiger',
    image: 'https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&q=80',
    description: 'National animal symbolizing strength'
  }
];

export function CulturalIcons() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
      {culturalIcons.map((icon, index) => (
        <motion.div
          key={icon.name}
          className="relative group cursor-pointer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="relative h-40 overflow-hidden rounded-lg">
            <img
              src={icon.image}
              alt={icon.name}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-lg font-semibold">{icon.name}</h3>
                <p className="text-sm text-white/80">{icon.description}</p>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}