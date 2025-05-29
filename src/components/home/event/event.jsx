"use client";
import React from 'react';

const UpcomingEvents = () => {
  const events = [
    {
      id: 1,
      title: "Innovation Meetup",
      date: "Sun, 01 Apr",
      location: "500 Terry A Francois Blvd",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Join our students for an innovative collaboration session focusing on technology and creative problem-solving."
    },
    {
      id: 2,
      title: "Volunteering Day",
      date: "Fri, 15 Jun",
      location: "500 Terry A Francois Blvd",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Make a difference in our community! Students will participate in various volunteer activities throughout the city."
    },
    {
      id: 3,
      title: "Fall Orientation Week",
      date: "Sun, 05 Aug",
      location: "500 Terry A Francois Blvd",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Welcome new students and families to Success High School with a week of activities and information sessions."
    },
    {
      id: 4,
      title: "Science Fair 2025",
      date: "Wed, 10 Sep",
      location: "Success High School Auditorium",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Students showcase their scientific research and experiments in our annual science fair competition."
    },
    {
      id: 5,
      title: "Parent-Teacher Conference",
      date: "Sat, 22 Sep",
      location: "Success High School Classrooms",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Meet with teachers to discuss your child's academic progress and development throughout the semester."
    },
    {
      id: 6,
      title: "Homecoming Dance",
      date: "Fri, 04 Oct",
      location: "Success High School Gymnasium",
      image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Join us for an unforgettable evening of music, dancing, and celebration with friends and classmates."
    }
  ];

  return (
    <section className="py-16 px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-600 mb-4">Upcoming Events</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div key={event.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              {/* Event Image */}
              <div className="h-48 overflow-hidden">
                <img 
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              {/* Event Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-600 mb-3">{event.title}</h3>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600">
                    <svg className="w-4 h-4 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-sm">{event.date}</span>
                  </div>
                  
                  <div className="flex items-center text-gray-600">
                    <svg className="w-4 h-4 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-sm">{event.location}</span>
                  </div>
                </div>
                
                <p className="text-gray-700 text-sm mb-4 line-clamp-3">
                  {event.description}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-2">
                  <button className="flex-1 text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors">
                    More info
                  </button>
                  <button className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-md font-medium text-sm hover:bg-blue-700 transition-colors">
                    Register Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Events Button */}
        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors">
            View All Events
          </button>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;