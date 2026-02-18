import { useState, useEffect } from 'react';

export default function Schedule() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Load schedule data
    fetch('/src/data/schedule.json')
      .then(res => res.json())
      .then(data => setEvents(data))
      .catch(err => {
        console.error('Error loading schedule:', err);
        // Fallback to import
        import('../data/schedule.json').then(module => {
          setEvents(module.default);
        });
      });
  }, []);

  const formatTime = (time) => {
    const [hours, minutes] = time.split(':');
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour % 12 || 12;
    return `${displayHour}:${minutes} ${ampm}`;
  };

  return (
    <div className="page-container">
      <h1 className="section-title">Reunion Schedule</h1>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <p className="text-gray-700 text-lg">
          Join us for an amazing weekend! All times are in Pacific Time.
        </p>
      </div>

      <div className="space-y-6">
        {events.map(event => (
          <div key={event.id} className="card">
            <div className="p-6">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-maroon-800 mb-2">{event.title}</h2>
                  <p className="text-gray-600 mb-1">
                    📅 {new Date(event.date).toLocaleDateString('en-US', { 
                      weekday: 'long', 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </p>
                  <p className="text-gray-600">
                    🕐 {formatTime(event.startTime)} - {formatTime(event.endTime)}
                  </p>
                </div>
                <div className="mt-4 md:mt-0 text-right">
                  <span className="inline-block px-4 py-2 bg-maroon-100 text-maroon-800 rounded-full font-semibold">
                    {event.cost}
                  </span>
                </div>
              </div>

              <p className="text-gray-700 mb-4">{event.description}</p>

              <div className="border-t pt-4 space-y-2 text-sm text-gray-600">
                <p><strong>Location:</strong> {event.location}</p>
                <p><strong>Address:</strong> {event.address}</p>
                <p><strong>Dress Code:</strong> {event.dresscode}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-silver-50 border border-silver-300 p-6 rounded-lg">
        <h3 className="text-xl font-bold text-maroon-800 mb-3">Planning to Attend?</h3>
        <p className="text-gray-700 mb-4">
          Please RSVP so we can get an accurate headcount for each event.
        </p>
        <a href="/rsvp" className="btn-primary">
          RSVP Now
        </a>
      </div>
    </div>
  );
}
