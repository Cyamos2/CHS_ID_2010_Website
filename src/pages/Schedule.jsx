import { useState, useEffect } from 'react';

export default function Schedule() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Load schedule data
    import('../data/schedule.json').then(module => {
      setEvents(module.default);
    });
  }, []);

  return (
    <div className="page-container">
      <h1 className="section-title">Reunion Schedule</h1>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <p className="text-gray-700 text-lg">
          Tentative schedule for the reunion weekend. Specific dates and locations will be announced soon.
        </p>
      </div>

      <div className="space-y-6">
        {events.map((item, index) => (
          <div key={index} className="card">
            <div className="p-6 flex items-start">
              <div className="bg-maroon-700 text-white px-4 py-3 rounded-lg mr-6 min-w-[100px] text-center">
                <span className="font-bold text-lg">{item.time}</span>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-maroon-800 mb-2">{item.event}</h3>
                <p className="text-gray-600">{item.description}</p>
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
