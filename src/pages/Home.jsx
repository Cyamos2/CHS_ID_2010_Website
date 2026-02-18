import React from 'react';

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-maroon mb-4">
          Welcome to the Class of 2010 Reunion!
        </h1>
        <p className="text-xl text-gray-700 mb-6">
          Join us in celebrating 20 years since graduation
        </p>
        <div className="text-lg text-gray-600">
          <p className="mb-2">📅 Date: Summer 2030</p>
          <p className="mb-2">📍 Location: To Be Announced</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h3 className="text-2xl font-bold text-maroon mb-3">RSVP</h3>
          <p className="text-gray-600 mb-4">Let us know if you'll be joining us!</p>
          <a href="/rsvp" className="bg-maroon text-white px-6 py-2 rounded-lg inline-block hover:bg-opacity-90">
            RSVP Now
          </a>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h3 className="text-2xl font-bold text-maroon mb-3">Schedule</h3>
          <p className="text-gray-600 mb-4">View the reunion schedule and activities</p>
          <a href="/schedule" className="bg-maroon text-white px-6 py-2 rounded-lg inline-block hover:bg-opacity-90">
            View Schedule
          </a>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h3 className="text-2xl font-bold text-maroon mb-3">Memories</h3>
          <p className="text-gray-600 mb-4">Share and relive our best moments</p>
          <a href="/memories" className="bg-maroon text-white px-6 py-2 rounded-lg inline-block hover:bg-opacity-90">
            View Memories
          </a>
        </div>
      </div>

      <div className="bg-silver bg-opacity-20 p-8 rounded-lg">
        <h2 className="text-3xl font-bold text-maroon mb-4 text-center">
          It's Been 20 Years!
        </h2>
        <p className="text-gray-700 text-center max-w-3xl mx-auto">
          We can't wait to reconnect with everyone from our graduating class. 
          Whether you've stayed in touch or it's been years, this reunion is the 
          perfect opportunity to catch up, share stories, and celebrate our journey 
          since walking across that stage in 2010.
        </p>
      </div>
    </div>
  );
};

export default Home;
