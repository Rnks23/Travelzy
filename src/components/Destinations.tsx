import React, { useState, useMemo } from 'react';
import { DestinationCard } from './DestinationCard';
import { BookingModal } from './BookingModal';
import { destinations } from '../data/destinations';
import { motion, AnimatePresence } from 'framer-motion';

export function Destinations() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDestination, setSelectedDestination] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredDestinations = useMemo(() => {
    if (!searchQuery) return destinations;
    const query = searchQuery.toLowerCase();
    return destinations.filter(destination =>
      destination.title.toLowerCase().includes(query) ||
      destination.searchTerms.some(term => term.includes(query))
    );
  }, [searchQuery]);

  const handleBook = (destination: string) => {
    setSelectedDestination(destination);
    setIsModalOpen(true);
  };

  return (
    <section id="destinations" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1598977123118-4e30ba3c4f5b')] opacity-5 bg-repeat"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-rose-800">Explore Our Destinations</h2>
          <p className="mt-4 text-xl text-gray-600">
            Discover the magic of India's diverse landscapes
          </p>
          
          <motion.div
            className="mt-8 max-w-md mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.2 }}
          >
            <input
              type="text"
              placeholder="Search destinations..."
              className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 outline-none transition-colors"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </motion.div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            layout
          >
            {filteredDestinations.map((destination, index) => (
              <motion.div
                key={destination.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                viewport={{ once: false }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
              >
                <DestinationCard
                  destination={destination}
                  onBook={handleBook}
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        destination={selectedDestination}
      />
    </section>
  );
}