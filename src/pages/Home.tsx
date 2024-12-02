import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { Hero } from '../components/home/Hero';
import { Statistics } from '../components/home/Statistics';
import { FeaturedDestinations } from '../components/home/FeaturedDestinations';
import { WhyChooseUs } from '../components/home/WhyChooseUs';

export function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic'
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Statistics />
        <FeaturedDestinations />
        <WhyChooseUs />
      </main>
      <Footer />
    </div>
  );
}