"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import AuthModal from '../login/login.jsx';

const Navbar = () => {
  const [showLogin, setShowLogin] = useState(false);

  const handleClose = () => {
    console.log('Closing modal');
    setShowLogin(false);
  };

  return (
    <>
      <nav className="bg-white shadow-sm border-b fixed top-0 left-0 right-0 z-50">
        <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
          {/* Logo Section - Left */}
          <Link href="/" className="flex items-center gap-4">
            <div className="bg-blue-600 text-white p-2 rounded">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/>
              </svg>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">SUCCESS</h1>
              <p className="text-sm text-gray-600">High School</p>
            </div>
          </Link>

          {/* Navigation Links - Center */}
          <div className="flex items-center gap-8">
            <Link 
              href="/#home"
              className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
            >
              {/* Home Icon - House */}
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z"/>
              </svg>
              Home
            </Link>
            
            <Link 
              href="/admission" 
              className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
            >
              {/* Admission Icon - Document with pen */}
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z M15.5,11.5L14.5,12.5L16.5,14.5L17.5,13.5L15.5,11.5M13.5,13.5L7.5,19.5H9.5L15.5,13.5H13.5Z"/>
              </svg>
              Admission
            </Link>
            
            <Link 
              href="/learning"
              className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
            >
              {/* Learning Icon - Open Book */}
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19,2L14,6.5V17.5L19,13V2M6.5,5C4.55,5 2.45,5.4 1,6.5V21.16C1,21.41 1.25,21.66 1.5,21.66C1.6,21.66 1.65,21.59 1.75,21.59C3.1,20.94 5.05,20.68 6.5,20.68C8.45,20.68 10.55,21.1 12,22C13.35,21.15 15.8,20.68 17.5,20.68C19.15,20.68 20.85,20.95 22.25,21.59C22.35,21.59 22.4,21.66 22.5,21.66C22.75,21.66 23,21.41 23,21.16V6.5C22.4,6.05 21.75,5.75 21,5.5V19.65C19.9,19.2 18.7,19 17.5,19C15.8,19 14.35,19.48 13,20.2V7.5L7.5,2H6.5Z"/>
              </svg>
              Learning
            </Link>
            
            <Link 
              href="/news"
              className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
            >
              {/* News Icon - Newspaper */}
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4,6H2V20A2,2 0 0,0 4,22H18A2,2 0 0,0 20,20V18H4V6M18,2A2,2 0 0,1 20,4V16A2,2 0 0,1 18,18H6A2,2 0 0,1 4,16V4A2,2 0 0,1 6,2H18M6,4V10H10V4H6M12,4V6H18V4H12M12,8V10H18V8H12M6,12V14H18V12H6M6,16H18V18H6V16Z"/>
              </svg>
              News & Events
            </Link>
            
            <Link 
              href="/contact"
              className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
            >
              {/* Contact Icon - Phone */}
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z"/>
              </svg>
              Contact
            </Link>
          </div>

          {/* Login Button - Right */}
          <button
            onClick={() => {
              console.log('Login button clicked');
              setShowLogin(true);
            }}
            className="bg-blue-600 text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors flex items-center gap-2"
          >
            {/* Login Icon - User */}
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z"/>
            </svg>
            Log In
          </button>
        </div>
      </nav>

      <AuthModal 
        isOpen={showLogin}
        onClose={handleClose}
      />
    </>
  );
};

export default Navbar;