import React from 'react';
import { Star } from 'lucide-react';

const destinations = [
  {
    id: 1,
    title: 'Santorini, Greece',
    image: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e',
    rating: 4.8,
    price: 1299,
    description: 'Experience the magical sunsets and white-washed buildings'
  },
  {
    id: 2,
    title: 'Bali, Indonesia',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4',
    rating: 4.7,
    price: 899,
    description: 'Discover tropical beaches and ancient temples'
  },
  {
    id: 3,
    title: 'Swiss Alps',
    image: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7',
    rating: 4.9,
    price: 1499,
    description: 'Adventure through breathtaking mountain landscapes'
  }
];

export function FeaturedDestinations() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-8" data-aos="fade-up">
          Featured Destinations
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <div
              key={destination.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="relative h-48">
                <img
                  src={destination.image}
                  alt={destination.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {destination.title}
                  </h3>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="ml-1 text-sm text-gray-600">
                      {destination.rating}
                    </span>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4">{destination.description}</p>
                
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-blue-800">
                    ${destination.price}
                  </span>
                  <button className="px-4 py-2 bg-blue-800 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}