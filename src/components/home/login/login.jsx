"use client";
import { useState } from 'react';

export default function AuthModal({ onClose, isOpen }) {
  const [isSignIn, setIsSignIn] = useState(true);
  const [formData, setFormData] = useState({ email: '', password: '' });

  // Return null if modal shouldn't be open
  if (!isOpen) return null;

  const toggleForm = () => {
    setIsSignIn(!isSignIn);
    setFormData({ email: '', password: '' }); // Clear form on toggle
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignIn) {
      // Simulate sign in success
      alert(`Signed In with Email: ${formData.email}`);
      onClose(); // Close modal after sign in
    } else {
      // Simulate register success
      alert(`Registered with Email: ${formData.email}`);

      // After registering, switch to sign in form
      setIsSignIn(true);
      setFormData({ email: '', password: '' });
    }
  };

  const handleCloseClick = (e) => {
    e.preventDefault();
    console.log('Close button clicked');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-blue-900/20 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="relative w-full max-w-md">
        {/* Glassmorphism container */}
        <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-2xl">
          {/* Close button - adjusted position and styling */}
          <button
            onClick={handleCloseClick}
            className="absolute top-4 right-4 w-8 h-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white/80 hover:bg-white/20 hover:text-white transition-all duration-300"
          >
            ✕
          </button>

          <h2 className="text-3xl font-bold mb-6 text-center text-white drop-shadow-lg">
            {isSignIn ? 'Login' : 'Join Us'}
          </h2>

          <div className="space-y-5">
            <div className="relative">
              <input
                type="email"
                placeholder="Email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/50 transition-all duration-300"
              />
            </div>
            
            <div className="relative">
              <input
                type="password"
                placeholder="Password"
                required
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="w-full px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/50 transition-all duration-300"
              />
            </div>
            
            <button
              onClick={handleSubmit}
              className="w-full py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400/50 transform hover:scale-[1.02] transition-all duration-300 shadow-lg backdrop-blur-sm"
            >
              {isSignIn ? ' Login' : 'Create Account'}
            </button>
          </div>

          {/* Toggle section */}
          <div className="mt-6 text-center">
            <p className="text-white/80 mb-2">
              {isSignIn ? "Don't have an account?" : 'Already have an account?'}
            </p>
            <button 
              onClick={toggleForm} 
              className="text-blue-300 font-semibold hover:text-blue-200 transition-colors duration-300 underline decoration-blue-300/50 hover:decoration-blue-200 underline-offset-2"
            >
              {isSignIn ? 'Create Account' : 'Sign In'}
            </button>
          </div>

          {/* Decorative elements */}
          <div className="absolute -top-4 -left-4 w-20 h-20 bg-blue-400/20 rounded-full blur-xl"></div>
          <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-white/20 rounded-full blur-lg"></div>
        </div>
      </div>
    </div>
  );
}