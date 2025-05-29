"use client";
import React, { useEffect, useState } from 'react';

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.pageYOffset);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const parallaxOffset = scrollY * 0.3;

  return (
    <div id="home" className="relative min-h-screen flex items-center px-5 overflow-hidden">
      {/* Fixed Background */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80')`
        }}
      />
                  
      {/* Overlay */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-black/70 to-black/30" />
                  
      {/* Hero Content with Parallax Movement */}
      <div 
        className="max-w-2xl z-10 animate-slide-in"
        style={{
          transform: `translateY(${parallaxOffset}px)`
        }}
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-4 leading-tight tracking-tight">
          <span className="block bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Success
          </span>
          <span className="drop-shadow-lg">High School</span>
        </h1>
                        
        <p className="text-lg md:text-xl lg:text-2xl text-gray-200 mb-8 font-light leading-relaxed drop-shadow-md">
          Empowering minds, building futures, and creating tomorrow's leaders through excellence in education and character development.
        </p>
                        
        {/* Stats */}
        <div className="flex flex-wrap gap-8 justify-center md:justify-start">
          <div className="text-center">
            <span className="block text-3xl font-bold text-yellow-400 drop-shadow-md">500+</span>
            <span className="text-sm text-gray-200 drop-shadow-sm">Students</span>
          </div>
          <div className="text-center">
            <span className="block text-3xl font-bold text-yellow-400 drop-shadow-md">95%</span>
            <span className="text-sm text-gray-200 drop-shadow-sm">Graduation Rate</span>
          </div>
          <div className="text-center">
            <span className="block text-3xl font-bold text-yellow-400 drop-shadow-md">50+</span>
            <span className="text-sm text-gray-200 drop-shadow-sm">Expert Teachers</span>
          </div>
        </div>
      </div>
                  
      {/* Custom Styles */}
      <style jsx>{`
        @keyframes slide-in {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
                        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }
                        
        .animate-slide-in {
          animation: slide-in 1s ease-out;
        }
                        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
                        
        @media (max-width: 768px) {
          .hero-content {
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
};

export default HeroSection;