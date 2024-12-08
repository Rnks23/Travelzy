import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Custom Itineraries',
    description: 'Personalized travel plans tailored to your preferences and interests.',
    background: 'https://images.unsplash.com/photo-1598977123118-4e30ba3c4f5b?auto=format&fit=crop&q=80',
  },
  {
    title: 'Heritage Tours',
    description: 'Explore ancient temples, palaces, and historical monuments.',
    background: 'https://images.unsplash.com/photo-1606293926075-69a00dbfde81?auto=format&fit=crop&q=80',
  },
  {
    title: 'Cultural Experiences',
    description: 'Immerse yourself in traditional arts, music, and festivals.',
    background: 'https://images.unsplash.com/photo-1545350089-0d670460f82c?auto=format&fit=crop&q=80',
  },
  {
    title: 'Wellness Retreats',
    description: 'Rejuvenate with yoga, meditation, and Ayurvedic treatments.',
    background: 'https://images.unsplash.com/photo-1545389336-cf090694435e?auto=format&fit=crop&q=80',
  },
  {
    title: 'Culinary Adventures',
    description: 'Savor authentic Indian cuisines and cooking workshops.',
    background: 'https://images.unsplash.com/photo-1505253304499-671c55fb57fe?auto=format&fit=crop&q=80',
  },
  {
    title: 'Wildlife Safaris',
    description: 'Encounter India\'s diverse wildlife in natural habitats.',
    background: 'https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&q=80',
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-warm-light to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-peacock">Our Services</h2>
          <p className="mt-4 text-xl text-gray-600">
            Experience the richness of Indian hospitality
          </p>
        </motion.div>

        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 }
            }
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="relative group h-80 overflow-hidden rounded-xl"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 }
              }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0">
                <img
                  src={service.background}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
              </div>
              
              <div className="relative h-full flex flex-col justify-end p-6 text-white">
                <motion.h3
                  className="text-2xl font-bold mb-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: index * 0.1 }}
                >
                  {service.title}
                </motion.h3>
                <motion.p
                  className="text-white/90"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: false }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                >
                  {service.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}