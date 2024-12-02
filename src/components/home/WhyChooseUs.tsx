import React from 'react';
import { Shield, Clock, Heart, Compass } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Safe Travel Guarantee',
    description: 'Your safety is our top priority with comprehensive travel insurance and local support.'
  },
  {
    icon: Clock,
    title: '24/7 Customer Support',
    description: 'Round-the-clock assistance for any questions or concerns during your journey.'
  },
  {
    icon: Heart,
    title: 'Personalized Experience',
    description: 'Customized travel plans tailored to your preferences and interests.'
  },
  {
    icon: Compass,
    title: 'Expert Local Guides',
    description: 'Knowledgeable guides who know the hidden gems of each destination.'
  }
];

export function WhyChooseUs() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Why Choose Us
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors">
                  <feature.icon className="w-8 h-8 text-blue-800" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 text-center mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-center">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}