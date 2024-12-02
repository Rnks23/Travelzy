import React, { useState, useEffect } from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Adventure Enthusiast',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    quote: 'The most seamless travel experience I\'ve ever had. Everything from booking to the actual trip was perfect!'
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Digital Nomad',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
    quote: 'Their local insights made my trip truly unique. I discovered hidden gems I wouldn\'t have found otherwise.'
  },
  {
    id: 3,
    name: 'Emma Williams',
    role: 'Family Traveler',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
    quote: 'Perfect for family trips! The attention to detail and customer service is outstanding.'
  }
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
          What Our Travelers Say
        </h2>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute -top-4 left-0 text-blue-800 opacity-20">
            <Quote className="w-16 h-16" />
          </div>

          <div className="relative">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`transition-opacity duration-500 absolute w-full ${
                  index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
              >
                <blockquote className="text-center">
                  <p className="text-xl text-gray-600 italic mb-8">
                    "{testimonial.quote}"
                  </p>
                  
                  <div className="flex flex-col items-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover mb-4"
                    />
                    <cite className="not-italic">
                      <span className="font-semibold text-gray-800 block">
                        {testimonial.name}
                      </span>
                      <span className="text-gray-500 text-sm">
                        {testimonial.role}
                      </span>
                    </cite>
                  </div>
                </blockquote>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-blue-800' : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}