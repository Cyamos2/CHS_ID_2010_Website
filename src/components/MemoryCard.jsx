import React from 'react';

const MemoryCard = ({ memory }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      {memory.image && (
        <img
          src={memory.image}
          alt={memory.title}
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
      )}
      <h3 className="text-xl font-bold text-maroon mb-2">{memory.title}</h3>
      <p className="text-gray-600 mb-2">{memory.description}</p>
      <div className="text-sm text-silver">
        <span className="font-semibold">Submitted by:</span> {memory.author}
      </div>
      {memory.date && (
        <div className="text-sm text-gray-500 mt-1">
          {new Date(memory.date).toLocaleDateString()}
        </div>
      )}
    </div>
  );
};

export default MemoryCard;
