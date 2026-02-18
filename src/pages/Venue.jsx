import { useState, useEffect } from 'react';

export default function Venue() {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    // Load hotels data
    import('../data/hotels.json').then(module => {
      setHotels(module.default);
    });
  }, []);

  return (
    <div className="page-container">
      <h1 className="section-title">Venue & Hotels</h1>
      
      {/* Main Venue */}
      <div className="card mb-8">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-maroon-800 mb-4">Main Event Venue</h2>
          <p className="text-gray-700 mb-4">
            Venue details will be announced soon. Check back for location information and directions.
          </p>
        </div>
      </div>

      {/* Hotels */}
      <h2 className="text-2xl font-bold text-maroon-800 mb-6">Recommended Hotels</h2>
      <p className="text-gray-700 mb-6">
        Hotel information and room block details will be announced closer to the reunion date.
      </p>

      <div className="space-y-6">
        {hotels.length > 0 ? (
          hotels.map(hotel => (
            <div key={hotel.id} className="card">
              <div className="p-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-maroon-800 mb-2">{hotel.name}</h3>
                    <p className="text-gray-600 mb-1">📍 {hotel.address}</p>
                    <p className="text-gray-600 mb-1">📞 {hotel.phone}</p>
                    <p className="text-gray-600 mb-2">🚗 {hotel.distance}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-maroon-700">{hotel.rate}</p>
                    <p className="text-sm text-gray-600">per night</p>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="font-semibold text-gray-700 mb-2">Amenities:</p>
                  <div className="flex flex-wrap gap-2">
                    {hotel.amenities.map((amenity, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-silver-200 text-gray-700 rounded-full text-sm"
                      >
                        {amenity}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <a 
                    href={hotel.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    Visit Website
                  </a>
                  {hotel.groupCode && (
                    <div className="flex items-center px-4 py-2 bg-maroon-50 rounded-lg">
                      <span className="text-sm">
                        <strong>Group Code:</strong> {hotel.groupCode}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="card p-6 text-center">
            <p className="text-gray-600">Hotel recommendations will be posted here once the venue is finalized.</p>
          </div>
        )}
      </div>

      <div className="mt-8 bg-silver-50 border border-silver-300 p-6 rounded-lg">
        <h3 className="text-xl font-bold text-maroon-800 mb-3">Booking Information</h3>
        <p className="text-gray-700">
          Hotel room block details and booking deadlines will be announced once available. 
          Check back soon for more information!
        </p>
      </div>
    </div>
  );
}
