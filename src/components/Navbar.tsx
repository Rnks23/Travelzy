import React from 'react';
import { Plane, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollPosition } from '@/hooks/useScrollPosition';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const scrollPosition = useScrollPosition();

  const navVariants = {
    initial: { 
      backgroundColor: 'rgba(44, 62, 80, 0)',
      backdropFilter: 'blur(0px)'
    },
    scrolled: { 
      backgroundColor: 'rgba(44, 62, 80, 0.95)',
      backdropFilter: 'blur(8px)'
    }
  };

  const menuItemVariants = {
    closed: { opacity: 0, x: -20 },
    open: { opacity: 1, x: 0 }
  };

  return (
    <motion.nav
      className="fixed w-full z-50 shadow-lg"
      initial="initial"
      animate={scrollPosition > 50 ? "scrolled" : "initial"}
      variants={navVariants}
      transition={{ duration: 0.3 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Plane className="h-8 w-8 text-marigold" />
            <span className="ml-2 text-xl font-bold text-white">Travelzy</span>
          </motion.div>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {['Home', 'Destinations', 'Services', 'Contact'].map((item, index) => (
                <motion.a
                  key={item}
                  href={item === 'Home' ? '#' : `#${item.toLowerCase()}`}
                  className="text-white/80 hover:text-marigold transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item}
                </motion.a>
              ))}
              <motion.button
                className="bg-rose-600 text-white px-4 py-2 rounded-md hover:bg-rose-700"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Book Now
              </motion.button>
            </div>
          </div>

          <div className="md:hidden">
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </motion.button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden bg-peacock/95 backdrop-blur-md"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {['Home', 'Destinations', 'Services', 'Contact'].map((item, index) => (
                <motion.a
                  key={item}
                  href={item === 'Home' ? '#' : `#${item.toLowerCase()}`}
                  className="block px-3 py-2 text-white/80 hover:text-marigold"
                  variants={menuItemVariants}
                  initial="closed"
                  animate="open"
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </motion.a>
              ))}
              <motion.button
                className="w-full text-left bg-rose-600 text-white px-3 py-2 rounded-md hover:bg-rose-700"
                variants={menuItemVariants}
                initial="closed"
                animate="open"
                transition={{ delay: 0.4 }}
                onClick={() => setIsMenuOpen(false)}
              >
                Book Now
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}