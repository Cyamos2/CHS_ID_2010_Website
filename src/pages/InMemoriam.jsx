import React, { useEffect, useState } from 'react';
import TributeCard from '../components/TributeCard';

const InMemoriam = () => {
  const [tributes, setTributes] = useState([]);

  useEffect(() => {
    // TODO: Load from inMemoriam.json
    setTributes([]);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-maroon mb-4 text-center">
        In Memoriam
      </h1>
      <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
        Remembering our classmates who are no longer with us. 
        Their memories will always be a part of our class story.
      </p>

      <div className="max-w-4xl mx-auto space-y-6">
        {tributes.length > 0 ? (
          tributes.map((tribute, index) => (
            <TributeCard key={index} tribute={tribute} />
          ))
        ) : (
          <div className="text-center text-gray-600 py-12">
            <p>A space to honor our classmates.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default InMemoriam;
