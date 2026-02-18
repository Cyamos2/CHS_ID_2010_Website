import { useState, useEffect } from 'react';
import MemoryCard from '../components/MemoryCard';

export default function Memories() {
  const [memories, setMemories] = useState([]);

  useEffect(() => {
    // Load memories data
    import('../data/memories.json').then(module => {
      setMemories(module.default);
    });
  }, []);

  return (
    <div className="page-container">
      <h1 className="section-title">Memories</h1>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <p className="text-gray-700 text-lg mb-4">
          Relive the best moments from our high school years! Browse through photos and stories 
          shared by our classmates.
        </p>
        <button className="btn-primary">
          Upload Your Memory
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {memories.map(memory => (
          <MemoryCard key={memory.id} memory={memory} />
        ))}
      </div>

      {memories.length === 0 && (
        <div className="text-center py-12 bg-white rounded-lg shadow-md">
          <p className="text-gray-600 text-lg mb-4">No memories have been shared yet.</p>
          <p className="text-gray-500">Be the first to share a memory from our high school days!</p>
        </div>
      )}
    </div>
  );
}
