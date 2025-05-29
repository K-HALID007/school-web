"use client";
import { motion } from 'framer-motion';
import  Link  from 'next/link';

const Learning = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section 
    id='learning'
    className="relative bg-gray-50">
      {/* Header Section */}
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
            Learning at Success High School
          </motion.h1>
        </div>
      </motion.section>

      {/* Main Content */}
      <div className="relative z-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-16">
          {/* Academic Programs Section */}
          <motion.div
            className="mb-24"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Academic Programs</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Program Cards */}
              <motion.div
                className="bg-white p-6 rounded-lg shadow-sm"
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)"
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Core Academics</h3>
                <p className="text-gray-600">
                  Comprehensive courses in Mathematics, Science, English, and Social Studies aligned with state standards.
                </p>
              </motion.div>

              <motion.div
                className="bg-white p-6 rounded-lg shadow-sm"
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)"
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Advanced Placement</h3>
                <p className="text-gray-600">
                  College-level courses offering advanced academic content and potential college credits.
                </p>
              </motion.div>

              <motion.div
                className="bg-white p-6 rounded-lg shadow-sm"
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)"
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">STEM Focus</h3>
                <p className="text-gray-600">
                  Specialized programs in Science, Technology, Engineering, and Mathematics.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Learning Approach Section */}
          <motion.div
            className="mb-24"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
          >
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <motion.div 
                className="lg:w-1/2"
                variants={fadeInLeft}
                initial="hidden"
                animate="visible"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Learning Approach</h2>
                <p className="text-gray-600 mb-6">
                  At Success High School, we believe in a comprehensive approach to education that 
                  combines traditional academic excellence with innovative teaching methods. Our 
                  students benefit from:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    <span className="text-gray-600">Small class sizes for personalized attention</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    <span className="text-gray-600">Project-based learning opportunities</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    <span className="text-gray-600">Integration of technology in learning</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div 
                className="lg:w-1/2"
                variants={fadeInRight}
                initial="hidden"
                animate="visible"
              >
                <motion.div 
                  className="bg-gray-200 rounded-lg overflow-hidden shadow-lg h-96"
                  whileHover={{ scale: 1.03, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img 
                    src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                    alt="Students learning"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* Educational Resources Section */}
          <motion.div
            className="mb-24"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Educational Resources</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Library Card */}
              <motion.div
                className="bg-white p-8 rounded-lg shadow-sm"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3 className="text-2xl font-semibold text-blue-600 mb-4">Modern Library</h3>
                <p className="text-gray-600 mb-6">
                  Our state-of-the-art library features:
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-blue-600 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <span>Over 20,000 books and digital resources</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-blue-600 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <span>Quiet study spaces and collaboration rooms</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-blue-600 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <span>Digital research tools and databases</span>
                  </li>
                </ul>
              </motion.div>

              {/* Technology Card */}
              <motion.div
                className="bg-white p-8 rounded-lg shadow-sm"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3 className="text-2xl font-semibold text-blue-600 mb-4">Technology Integration</h3>
                <p className="text-gray-600 mb-6">
                  Modern learning tools include:
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-blue-600 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <span>1:1 Student device program</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-blue-600 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <span>Smart classrooms with interactive displays</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-blue-600 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <span>Online learning management system</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </motion.div>

          {/* Statistics Section */}
          <motion.div
            className="mb-24 bg-blue-50 py-16 px-8 rounded-2xl"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Success in Numbers</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <motion.div
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-4xl font-bold text-blue-600 mb-2">96%</div>
                <div className="text-gray-600">Graduation Rate</div>
              </motion.div>

              <motion.div
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-4xl font-bold text-blue-600 mb-2">15:1</div>
                <div className="text-gray-600">Student-Teacher Ratio</div>
              </motion.div>

              <motion.div
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-4xl font-bold text-blue-600 mb-2">92%</div>
                <div className="text-gray-600">College Acceptance</div>
              </motion.div>

              <motion.div
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-4xl font-bold text-blue-600 mb-2">25+</div>
                <div className="text-gray-600">AP Courses</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Call to Action Section */}
          <motion.div
            className="text-center"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Join Our Learning Community?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Experience the difference at Success High School. Apply now to begin your journey with us.
            </p>
            <Link href="/admission">
              <motion.button
                className="bg-blue-600 text-white px-12 py-4 rounded-md font-medium hover:bg-blue-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Apply Now
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Learning;