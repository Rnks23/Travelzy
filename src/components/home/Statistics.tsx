import React from 'react';
import { Users, Map, Globe2, Award } from 'lucide-react';

const stats = [
  {
    icon: Users,
    value: '50K+',
    label: 'Happy Travelers',
    description: 'Satisfied customers worldwide'
  },
  {
    icon: Map,
    value: '100+',
    label: 'Destinations',
    description: 'Unique places to explore'
  },
  {
    icon: Globe2,
    value: '150+',
    label: 'Local Guides',
    description: 'Expert travel companions'
  },
  {
    icon: Award,
    value: '15+',
    label: 'Years Experience',
    description: 'Of travel excellence'
  }
];

export function Statistics() {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-800 to-blue-600">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center text-white"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="flex justify-center mb-4">
                <stat.icon className="w-12 h-12 opacity-90" />
              </div>
              <div className="text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-lg font-semibold mb-1">{stat.label}</div>
              <div className="text-blue-100">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}