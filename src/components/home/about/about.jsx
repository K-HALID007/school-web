"use client";
import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 60 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const drawLine = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { 
      pathLength: 1, 
      opacity: 1,
      transition: { duration: 1.5, ease: "easeInOut" }
    }
  };

  return (
    <section id="about" className="relative bg-gray-50">
      {/* Welcome Section - Moved to top with fixed positioning */}
      <motion.section 
        className="sticky top-20 z-10 bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 px-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.h1 
            className="text-4xl lg:text-5xl font-bold mb-6 text-center"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3 }}
          >
            Welcome to Success High School
          </motion.h1>
        </div>
      </motion.section>

      {/* Main content */}
      <div className="relative z-20 bg-gray-50">
        <div className="flex">
          {/* Left Sidebar */}
          <aside className="w-80 bg-white shadow-sm min-h-screen relative">
            {/* White Header Section */}
            <div className="bg-white h-8 w-full"></div>
            
            <div className="px-8 -mt-4 pb-12 relative">
              {/* Animated Arrow Pointer */}
              <motion.div 
                className="flex justify-center"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="flex flex-col items-center">
                  <svg 
                    className="w-8 h-56 text-blue-600 transform hover:scale-y-110 transition-transform" 
                    viewBox="0 0 24 48"
                  >
                    {/* Animated vertical line */}
                    <motion.path 
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      d="M12 3v35"
                      fill="none"
                      variants={drawLine}
                      initial="hidden"
                      animate="visible"
                    />
                    {/* Animated triangle */}
                    <motion.path
                      d="M12 45L5 38L12 38L19 38L12 45Z"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinejoin="round"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 1.2 }}
                    />
                  </svg>
                </div>
              </motion.div>

              {/* Academic Programs */}
              <motion.div 
                className="mb-16 text-center"
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <motion.div 
                  className="flex justify-center mb-6"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <svg className="w-16 h-16 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                  </svg>
                </motion.div>
                <h3 className="text-xl font-semibold text-blue-600 mb-2">Academic</h3>
                <h3 className="text-xl font-semibold text-blue-600 mb-8">Programs</h3>
                
                {/* Animated Divider Line */}
                <motion.div 
                  className="w-24 h-1 bg-blue-600 mx-auto"
                  initial={{ width: 0 }}
                  animate={{ width: 96 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                ></motion.div>
              </motion.div>

              {/* Student Services */}
              <motion.div 
                className="mb-16 text-center"
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <motion.div 
                  className="flex justify-center mb-6"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <svg className="w-16 h-16 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                  </svg>
                </motion.div>
                <h3 className="text-xl font-semibold text-blue-600 mb-2">Student</h3>
                <h3 className="text-xl font-semibold text-blue-600 mb-8">Services</h3>
                
                {/* Animated Divider Line */}
                <motion.div 
                  className="w-24 h-1 bg-blue-600 mx-auto"
                  initial={{ width: 0 }}
                  animate={{ width: 96 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                ></motion.div>
              </motion.div>

              {/* Schedule */}
              <motion.div 
                className="mb-16 text-center"
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <motion.div 
                  className="flex justify-center mb-6"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <svg className="w-16 h-16 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </motion.div>
                <h3 className="text-xl font-semibold text-blue-600 mb-8">Schedule</h3>
                
                {/* Animated Divider Line */}
                <motion.div 
                  className="w-24 h-1 bg-blue-600 mx-auto"
                  initial={{ width: 0 }}
                  animate={{ width: 96 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                ></motion.div>
              </motion.div>

              {/* Library */}
              <motion.div 
                className="mb-16 text-center"
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <motion.div 
                  className="flex justify-center mb-6"
                  whileHover={{ scale: 1.1, rotate: 3 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <svg className="w-16 h-16 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                  </svg>
                </motion.div>
                <h3 className="text-xl font-semibold text-blue-600 mb-8">Library</h3>
                
                {/* Animated Divider Line */}
                <motion.div 
                  className="w-24 h-1 bg-blue-600 mx-auto"
                  initial={{ width: 0 }}
                  animate={{ width: 96 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                ></motion.div>
              </motion.div>

              {/* Athletics */}
              <motion.div 
                className="mb-16 text-center"
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <motion.div 
                  className="flex justify-center mb-6"
                  whileHover={{ scale: 1.1, rotate: -3 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <svg className="w-16 h-16 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25s4.544.16 6.75.471v1.515M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.228a25.665 25.665 0 004.509 1.78c.154.5.154 1.04 0 1.54a25.665 25.665 0 01-4.509 1.78m0-6.84v6.84m8.272-1.462a4.525 4.525 0 00-1.15-1.09l-.491-.319a11.616 11.616 0 00-4.708-1.149v6.84c0 .017.016.024.04.024h4.5c.969 0 1.371-.49 1.809-1.246l.006-.016a17.05 17.05 0 000-3.04zM3.97 3.342l4.5.829c.78.142 1.348.806 1.348 1.574v6.84c0 .017-.016.024-.04.024H5.25c-.969 0-1.371-.49-1.809-1.246l-.006-.016a17.05 17.05 0 010-3.04 4.525 4.525 0 011.536-1.965z" />
                  </svg>
                </motion.div>
                <h3 className="text-xl font-semibold text-blue-600 mb-2">Athletics &</h3>
                <h3 className="text-xl font-semibold text-blue-600 mb-8">Sports</h3>
                
                {/* Animated Divider Line */}
                <motion.div 
                  className="w-24 h-1 bg-blue-600 mx-auto"
                  initial={{ width: 0 }}
                  animate={{ width: 96 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                ></motion.div>
              </motion.div>

              {/* Technology */}
              <motion.div 
                className="mb-16 text-center"
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <motion.div 
                  className="flex justify-center mb-6"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <svg className="w-16 h-16 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                  </svg>
                </motion.div>
                <h3 className="text-xl font-semibold text-blue-600 mb-8">Technology</h3>
                
                {/* Animated Divider Line */}
                <motion.div 
                  className="w-24 h-1 bg-blue-600 mx-auto"
                  initial={{ width: 0 }}
                  animate={{ width: 96 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                ></motion.div>
              </motion.div>

              {/* Arts & Music */}
              <motion.div 
                className="mb-8 text-center"
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <motion.div 
                  className="flex justify-center mb-6"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <svg className="w-16 h-16 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m9 9 10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z" />
                  </svg>
                </motion.div>
                <h3 className="text-xl font-semibold text-blue-600 mb-2">Arts &</h3>
                <h3 className="text-xl font-semibold text-blue-600 mb-8">Music</h3>
                
                {/* Animated Divider Line */}
                <motion.div 
                  className="w-24 h-1 bg-blue-600 mx-auto"
                  initial={{ width: 0 }}
                  animate={{ width: 96 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                ></motion.div>
              </motion.div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            {/* Hero Section */}
            

            {/* Content Section */}
            <section className="py-16 px-8">
              <div className="flex flex-col lg:flex-row gap-12 max-w-6xl">
                {/* Text Content */}
                <motion.div 
                  className="lg:w-1/2 bg-yellow-100 p-8 rounded-lg"
                  variants={fadeInLeft}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 0.6, delay: 0.3 }}
                  whileHover={{ scale: 1.02 }}
                 
                >
                  <motion.h2 
                    className="text-2xl font-semibold mb-6 text-blue-800"
                    variants={fadeInUp}
                    viewport={{ once: true }}
                  >
                    An outstanding secondary school for 5th-15th grade students.
                  </motion.h2>
                  <motion.p 
                    className="text-gray-700 leading-relaxed mb-6"
                    variants={fadeInUp}
                    viewport={{ once: true }}
                  >
                    At Success High School, we are committed to providing an exceptional educational experience 
                    that prepares our students for success in college, careers, and life. Our dedicated faculty and 
                    staff work tirelessly to create a supportive learning environment where every student can thrive.
                  </motion.p>
                  <motion.p 
                    className="text-gray-700 leading-relaxed mb-6"
                    variants={fadeInUp}
                    viewport={{ once: true }}
                  >
                    We offer a comprehensive curriculum that combines rigorous academics with hands-on learning 
                    opportunities, ensuring our students develop both the knowledge and skills they need to excel 
                    in an ever-changing world.
                  </motion.p>
                  <motion.button 
                    className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    Learn More
                  </motion.button>
                </motion.div>

                {/* Image Section */}
                <motion.div 
                  className="lg:w-1/2"
                  variants={fadeInRight}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <motion.div 
                    className="bg-gray-200 rounded-lg overflow-hidden shadow-lg h-96"
                    whileHover={{ scale: 1.03, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <img 
                      src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                      alt="Students in classroom"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </motion.div>
              </div>
            </section>

            {/* Student Photo Introduction Section */}
            <motion.section 
              className="py-16 px-8 bg-white"
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="max-w-6xl mx-auto text-center">
                <motion.h2 
                  className="text-3xl font-bold text-gray-900 mb-4"
                  variants={fadeInUp}
                  viewport={{ once: true }}
                >
                  Meet Our Students
                </motion.h2>
                <motion.p 
                  className="text-gray-600 mb-12 text-lg"
                  variants={fadeInUp}
                  viewport={{ once: true }}
                >
                  See the joy and enthusiasm of our Success High School community
                </motion.p>
                
                {/* Grid of Student Photos */}
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                  {/* Student Photo 1 */}
                  <motion.div 
                    className="relative bg-gray-900 rounded-2xl overflow-hidden shadow-xl aspect-[4/5]"
                    variants={scaleIn}
                    whileHover={{ scale: 1.05, y: -10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <img 
                      src="1.jpeg"
                      alt="Emma - Student President"
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Overlay with student info */}
                    <motion.div 
                      className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <h3 className="text-white font-semibold text-lg">Emma</h3>
                      <p className="text-white/80 text-sm">Grade 11 - Student President</p>
                    </motion.div>
                  </motion.div>

                  {/* Student Photo 2 */}
                  <motion.div 
                    className="relative bg-gray-900 rounded-2xl overflow-hidden shadow-xl aspect-[4/5]"
                    variants={scaleIn}
                    whileHover={{ scale: 1.05, y: -10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <img 
                      src="2.jpeg"  
                      alt="Eacias- Basketball Team"
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Overlay with student info */}
                    <motion.div 
                      className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <h3 className="text-white font-semibold text-lg">Eacias</h3>
                      <p className="text-white/80 text-sm">Grade 10 - Basketball Team</p>
                    </motion.div>
                  </motion.div>

                  {/* Student Photo 3 */}
                  <motion.div 
                    className="relative bg-gray-900 rounded-2xl overflow-hidden shadow-xl aspect-[4/5]"
                    variants={scaleIn}
                    whileHover={{ scale: 1.05, y: -10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <img 
                      src="3.jpeg"
                      alt="Sofia - Debate Club"
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Overlay with student info */}
                    <motion.div 
                      className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                    >
                      <h3 className="text-white font-semibold text-lg">Sofia</h3>
                      <p className="text-white/80 text-sm">Grade 12 - Debate Club</p>
                    </motion.div>
                  </motion.div>
                </div>
                
                <motion.p 
                  className="text-gray-600 text-lg max-w-2xl mx-auto"
                  variants={fadeInUp}
                  viewport={{ once: true }}
                >
                  "Success High School has given me the confidence and skills to pursue my dreams. 
                  The supportive community here makes every day exciting!"
                </motion.p>
              </div>
            </motion.section>

            {/* Additional Info Section */}
            <motion.section 
              className="bg-gray-50 py-16 px-8"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="max-w-6xl">
                <div className="grid md:grid-cols-3 gap-8">
                  <motion.div 
                    className="bg-white p-6 rounded-lg shadow-sm"
                    variants={scaleIn}
                    whileHover={{ 
                      scale: 1.05, 
                      y: -10,
                      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.div 
                      className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/>
                      </svg>
                    </motion.div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">Academic Excellence</h3>
                    <p className="text-gray-600">
                      Our rigorous curriculum and experienced teachers ensure every student reaches their full potential.
                    </p>
                  </motion.div>

                  <motion.div 
                    className="bg-white p-6 rounded-lg shadow-sm"
                    variants={scaleIn}
                    whileHover={{ 
                      scale: 1.05, 
                      y: -10,
                      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.div 
                      className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A3.01 3.01 0 0 0 16.76 6c-.8 0-1.54.4-2 1.01l-2.54 7.63H14v6h6z"/>
                      </svg>
                    </motion.div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">Student Support</h3>
                    <p className="text-gray-600">
                      Comprehensive support services help students succeed academically and personally.
                    </p>
                  </motion.div>

                  <motion.div 
                    className="bg-white p-6 rounded-lg shadow-sm"
                    variants={scaleIn}
                    whileHover={{ 
                      scale: 1.05, 
                      y: -10,
                      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.div 
                      className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    </motion.div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">Community Focus</h3>
                    <p className="text-gray-600">
                      Strong partnerships with families and the community enhance the educational experience.
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.section>
          </main>
        </div>
      </div>
    </section>
  );
};

export default About;