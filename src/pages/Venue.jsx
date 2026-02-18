import React, { useEffect, useState } from 'react';

const Venue = () => {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    // TODO: Load from hotels.json
    setHotels([]);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-maroon mb-8 text-center">
        Venue Information
      </h1>

      <div className="max-w-4xl mx-auto">
        <div className="bg-white p-8 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-bold text-maroon mb-4">Reunion Venue</h2>
          <p className="text-gray-600 mb-4">
            Details about the venue will be announced soon. Stay tuned!
          </p>
          <div className="border-t pt-4 mt-4">
            <p className="text-gray-700">
              <strong>Address:</strong> To be announced
            </p>
            <p className="text-gray-700">
              <strong>Parking:</strong> Information coming soon
            </p>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-maroon mb-4">Nearby Hotels</h2>
          {hotels.length > 0 ? (
            <div className="space-y-4">
              {hotels.map((hotel, index) => (
                <div key={index} className="border-l-4 border-maroon pl-4">
                  <h3 className="text-xl font-bold text-gray-800">{hotel.name}</h3>
                  <p className="text-gray-600">{hotel.address}</p>
                  {hotel.phone && (
                    <p className="text-gray-600">Phone: {hotel.phone}</p>
                  )}
                  {hotel.groupRate && (
                    <p className="text-maroon font-semibold">Group Rate: {hotel.groupRate}</p>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-600">Hotel information will be available soon.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Venue;
