import { useState, useEffect } from 'react';
import TributeCard from '../components/TributeCard';

export default function InMemoriam() {
  const [tributes, setTributes] = useState([]);

  useEffect(() => {
    // Load in memoriam data
    import('../data/inMemoriam.json').then(module => {
      setTributes(module.default);
    });
  }, []);

  return (
    <div className="page-container">
      <h1 className="section-title">In Memoriam</h1>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <p className="text-gray-700 text-lg italic">
          In loving memory of our classmates who are no longer with us. 
          They will forever remain in our hearts and memories.
        </p>
      </div>

      <div className="space-y-8">
        {tributes.map(person => (
          <TributeCard key={person.id} person={person} />
        ))}
      </div>

      {tributes.length === 0 && (
        <div className="text-center py-12 bg-white rounded-lg shadow-md">
          <p className="text-gray-600 text-lg">
            We are blessed that all of our classmates are still with us.
          </p>
        </div>
      )}

      <div className="mt-12 bg-maroon-50 border-l-4 border-maroon-600 p-6 rounded-r-lg">
        <h3 className="text-xl font-bold text-maroon-800 mb-3">Share a Memory</h3>
        <p className="text-gray-700 mb-4">
          If you would like to add a tribute or share memories of a classmate we&apos;ve lost, 
          please contact us.
        </p>
        <a href="/contact" className="btn-primary">
          Contact Us
        </a>
      </div>
    </div>
  );
}
