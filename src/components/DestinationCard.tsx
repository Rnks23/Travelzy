import React from 'react';
import { Calendar, Users, MapPin } from 'lucide-react';
import { Destination } from '../types';

interface Props {
  destination: Destination;
  onBook: (destination: string) => void;
}

export function DestinationCard({ destination, onBook }: Props) {
  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-64 overflow-hidden">
        <img
          src={destination.image}
          alt={destination.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent">
          <div className="absolute bottom-4 left-4">
            <span className="inline-block px-3 py-1 bg-rose-600 text-white text-sm font-semibold rounded-full">
              {destination.price}
            </span>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{destination.title}</h3>
        <p className="text-gray-600 mb-4">{destination.description}</p>
        
        <div className="space-y-2 mb-6">
          <div className="flex items-center text-gray-500">
            <Calendar className="h-5 w-5 mr-2" />
            <span>{destination.duration}</span>
          </div>
          <div className="flex items-center text-gray-500">
            <MapPin className="h-5 w-5 mr-2" />
            <span>Guided tours included</span>
          </div>
          <div className="flex items-center text-gray-500">
            <Users className="h-5 w-5 mr-2" />
            <span>Small groups</span>
          </div>
        </div>
        
        <button
          onClick={() => onBook(destination.title)}
          className="w-full bg-rose-600 text-white px-4 py-2 rounded-lg hover:bg-rose-700 transition-colors"
        >
          Book Now
        </button>
      </div>
    </div>
  );
}