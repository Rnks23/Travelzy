import React, { useState, useCallback } from 'react';
import { Search, MapPin, Calendar, Users } from 'lucide-react';
import { getDestinationBackground } from '../../utils/destinationBackgrounds';

export function Hero() {
  const [destination, setDestination] = useState('');
  const [backgroundImage, setBackgroundImage] = useState(getDestinationBackground(''));

  const handleDestinationChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setDestination(value);
    setBackgroundImage(getDestinationBackground(value));
  }, []);

  return (
    <div className="relative min-h-screen flex items-center paper-texture">
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
        style={{
          backgroundImage: `url("${backgroundImage}")`,
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="absolute right-0 top-20 w-64 h-64 bg-cream-100 rounded-l-full opacity-10 transform rotate-45" />
      <div className="absolute left-0 bottom-40 w-48 h-48 bg-paper-light rounded-r-full opacity-10 transform -rotate-45" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="paper-cut bg-cream-100/90 backdrop-blur-sm p-8 rounded-2xl">
            <h1 className="text-4xl md:text-6xl font-bold text-accent-secondary mb-6">
              Discover Your Next Adventure
            </h1>
            <p className="text-xl text-accent-secondary/80 mb-8">
              Explore the world's most beautiful destinations with our curated travel experiences
            </p>

            <div className="paper-cut bg-white/80 backdrop-blur-sm rounded-xl p-6">
              <div className="grid md:grid-cols-4 gap-4">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-accent-secondary">Where to?</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-accent-primary" />
                    <input
                      type="text"
                      value={destination}
                      onChange={handleDestinationChange}
                      placeholder="Enter destination"
                      className="w-full pl-10 pr-4 py-2 border border-paper rounded-lg focus:ring-2 focus:ring-accent-primary focus:border-accent-primary bg-cream-50"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-accent-secondary">Check in</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-accent-primary" />
                    <input
                      type="date"
                      className="w-full pl-10 pr-4 py-2 border border-paper rounded-lg focus:ring-2 focus:ring-accent-primary focus:border-accent-primary bg-cream-50"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-accent-secondary">Check out</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-accent-primary" />
                    <input
                      type="date"
                      className="w-full pl-10 pr-4 py-2 border border-paper rounded-lg focus:ring-2 focus:ring-accent-primary focus:border-accent-primary bg-cream-50"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-accent-secondary">Travelers</label>
                  <div className="relative">
                    <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-accent-primary" />
                    <select className="w-full pl-10 pr-4 py-2 border border-paper rounded-lg focus:ring-2 focus:ring-accent-primary focus:border-accent-primary bg-cream-50">
                      {[1, 2, 3, 4, 5].map((num) => (
                        <option key={num} value={num}>
                          {num} {num === 1 ? 'Person' : 'People'}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <button className="mt-4 w-full bg-accent-primary text-white py-3 rounded-lg hover:bg-accent-secondary transition-colors flex items-center justify-center space-x-2">
                <Search className="w-5 h-5" />
                <span>Search Destinations</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="shape-divider">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
        </svg>
      </div>
    </div>
  );
}