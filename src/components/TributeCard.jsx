import React from 'react';

const TributeCard = ({ tribute }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-maroon">
      <div className="flex items-start space-x-4">
        {tribute.photo && (
          <img
            src={tribute.photo}
            alt={tribute.name}
            className="w-24 h-24 rounded-full object-cover"
          />
        )}
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-maroon mb-1">{tribute.name}</h3>
          {tribute.years && (
            <p className="text-gray-600 mb-3">{tribute.years}</p>
          )}
          {tribute.message && (
            <p className="text-gray-700 italic mb-3">"{tribute.message}"</p>
          )}
          {tribute.memories && (
            <p className="text-gray-600">{tribute.memories}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TributeCard;
