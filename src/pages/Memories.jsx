import React, { useEffect, useState } from 'react';
import MemoryCard from '../components/MemoryCard';

const Memories = () => {
  const [memories, setMemories] = useState([]);

  useEffect(() => {
    // TODO: Load from memories.json
    setMemories([]);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-maroon mb-4 text-center">
        Class Memories
      </h1>
      <p className="text-center text-gray-600 mb-8">
        Share your favorite moments from our time together
      </p>

      <div className="text-center mb-8">
        <button className="bg-maroon text-white px-6 py-3 rounded-lg font-bold hover:bg-opacity-90">
          Submit a Memory
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {memories.length > 0 ? (
          memories.map((memory, index) => (
            <MemoryCard key={index} memory={memory} />
          ))
        ) : (
          <div className="col-span-full text-center text-gray-600 py-12">
            No memories shared yet. Be the first to share!
          </div>
        )}
      </div>
    </div>
  );
};

export default Memories;
