import React, { useState, useEffect } from 'react';
import { ArrowRight, Search } from 'lucide-react';
import { getDestinationImage } from '@/utils/search';
import { motion } from 'framer-motion';

export function Hero() {
  const [searchQuery, setSearchQuery] = useState('');
  const [backgroundImage, setBackgroundImage] = useState('https://images.unsplash.com/photo-1524492412937-b28074a5d7da');

  useEffect(() => {
    if (searchQuery) {
      const timeoutId = setTimeout(() => {
        const newImage = getDestinationImage(searchQuery);
        setBackgroundImage(newImage);
      }, 300);

      return () => clearTimeout(timeoutId);
    }
  }, [searchQuery]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  return (
    <div className="relative min-h-screen">
      <motion.div 
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img
          src={backgroundImage}
          alt="Destination"
          className="w-full h-full object-cover transition-all duration-700 ease-in-out"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent"></div>
      </motion.div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen">
        <div className="flex flex-col justify-center min-h-screen pt-20">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-white max-w-3xl leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Discover the Spirit of <span className="text-saffron">India</span>
          </motion.h1>
          
          <motion.p 
            className="mt-6 text-xl text-gray-200 max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Embark on a journey through ancient traditions, vibrant cultures, and breathtaking landscapes.
          </motion.p>
          
          <motion.form 
            onSubmit={handleSearch} 
            className="mt-8 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Where do you want to explore in India?"
                  className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/90 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-saffron"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="bg-saffron text-white px-8 py-3 rounded-lg hover:bg-saffron/90 transition-colors flex items-center justify-center whitespace-nowrap"
              >
                Explore Now <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </motion.form>

          <motion.div 
            className="mt-12 flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
              <p className="text-white"><span className="font-bold">1000+</span> Destinations</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
              <p className="text-white"><span className="font-bold">10k+</span> Happy Travelers</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
              <p className="text-white"><span className="font-bold">5★</span> Rated Experience</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}