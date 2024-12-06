import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-peacock to-peacock/90 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-marigold">Contact Us</h2>
          <p className="mt-4 text-xl text-white/90">
            Let's plan your Indian adventure
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            className="bg-white/10 backdrop-blur-sm p-8 rounded-lg"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white/90">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md bg-white/20 border-transparent placeholder-white/50 text-white focus:border-marigold focus:ring-marigold focus:bg-white/30 transition-colors"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white/90">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md bg-white/20 border-transparent placeholder-white/50 text-white focus:border-marigold focus:ring-marigold focus:bg-white/30 transition-colors"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white/90">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md bg-white/20 border-transparent placeholder-white/50 text-white focus:border-marigold focus:ring-marigold focus:bg-white/30 transition-colors"
                ></textarea>
              </div>
              <motion.button
                type="submit"
                className="w-full bg-marigold text-peacock px-4 py-2 rounded-md hover:bg-marigold/90 transition-colors font-semibold"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {[
              { Icon: Mail, title: 'Email Us', content: 'namaste@wanderlust.com' },
              { Icon: Phone, title: 'Call Us', content: '+91 (555) 123-4567' },
              { Icon: MapPin, title: 'Visit Us', content: '123 MG Road\nNew Delhi, 110001' }
            ].map(({ Icon, title, content }, index) => (
              <motion.div
                key={title}
                className="flex items-start"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Icon className="h-6 w-6 text-marigold mt-1" />
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-marigold">{title}</h3>
                  <p className="mt-1 text-white/90 whitespace-pre-line">{content}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}