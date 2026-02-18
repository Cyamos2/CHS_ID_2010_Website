import React, { useEffect, useState } from 'react';

const Schedule = () => {
  const [scheduleData, setScheduleData] = useState([]);

  useEffect(() => {
    // TODO: Load from schedule.json
    setScheduleData([
      {
        time: '6:00 PM',
        event: 'Registration & Check-in',
        description: 'Pick up your name tag and reunion swag'
      },
      {
        time: '7:00 PM',
        event: 'Welcome Reception',
        description: 'Cocktails and appetizers'
      },
      {
        time: '8:00 PM',
        event: 'Dinner',
        description: 'Sit down dinner with classmates'
      },
      {
        time: '9:30 PM',
        event: 'Dancing & Entertainment',
        description: 'DJ playing hits from our era'
      },
    ]);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-maroon mb-8 text-center">
        Reunion Schedule
      </h1>

      <div className="max-w-3xl mx-auto">
        {scheduleData.map((item, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md mb-4">
            <div className="flex items-start">
              <div className="bg-maroon text-white px-4 py-2 rounded-lg mr-4">
                <span className="font-bold">{item.time}</span>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-maroon mb-2">{item.event}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <p className="text-gray-600">
          Schedule subject to change. Check back for updates!
        </p>
      </div>
    </div>
  );
};

export default Schedule;
