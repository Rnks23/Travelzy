import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plane, Mail, Lock, Loader } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-cream-100 paper-texture flex items-center justify-center p-4">
      <div className="absolute right-0 top-20 w-64 h-64 bg-paper rounded-l-full opacity-20 transform rotate-45" />
      <div className="absolute left-0 bottom-40 w-48 h-48 bg-paper-light rounded-r-full opacity-20 transform -rotate-45" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="paper-cut bg-white/80 backdrop-blur-sm rounded-2xl w-full max-w-md p-8 relative overflow-hidden"
      >
        {isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center z-50"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            >
              <Loader className="w-8 h-8 text-accent-primary" />
            </motion.div>
          </motion.div>
        )}

        <div className="text-center mb-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
            className="inline-block bg-cream-200 p-3 rounded-full mb-4"
          >
            <Plane className="w-8 h-8 text-accent-primary" />
          </motion.div>
          <h2 className="text-2xl font-bold text-accent-secondary">Welcome back</h2>
          <p className="text-accent-secondary/80 mt-1">Please sign in to continue</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-accent-secondary mb-1">
              Email
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-accent-primary" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-paper rounded-lg focus:ring-2 focus:ring-accent-primary focus:border-accent-primary bg-cream-50"
                placeholder="Enter your email"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-accent-secondary mb-1">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-accent-primary" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-paper rounded-lg focus:ring-2 focus:ring-accent-primary focus:border-accent-primary bg-cream-50"
                placeholder="Enter your password"
                required
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input type="checkbox" className="rounded border-paper text-accent-primary focus:ring-accent-primary" />
              <span className="ml-2 text-sm text-accent-secondary">Remember me</span>
            </label>
            <a href="#" className="text-sm text-accent-primary hover:text-accent-secondary">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-accent-primary text-white py-2 rounded-lg hover:bg-accent-secondary transition-colors"
            disabled={isLoading}
          >
            Sign In
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-accent-secondary">
          Don't have an account?{' '}
          <a href="#" className="text-accent-primary hover:text-accent-secondary">
            Sign up
          </a>
        </div>

        <Link
          to="/"
          className="mt-8 inline-block text-sm text-accent-secondary hover:text-accent-primary transition-colors"
        >
          ← Back to home
        </Link>
      </motion.div>
    </div>
  );
}