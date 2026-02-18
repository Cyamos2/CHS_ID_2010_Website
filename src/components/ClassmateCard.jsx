import React from 'react';

const ClassmateCard = ({ classmate }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-center space-x-4">
        {classmate.photo ? (
          <img
            src={classmate.photo}
            alt={classmate.name}
            className="w-20 h-20 rounded-full object-cover"
          />
        ) : (
          <div className="w-20 h-20 rounded-full bg-silver flex items-center justify-center text-white text-2xl font-bold">
            {classmate.name.charAt(0)}
          </div>
        )}
        <div className="flex-1">
          <h3 className="text-xl font-bold text-maroon">{classmate.name}</h3>
          {classmate.location && (
            <p className="text-gray-600">{classmate.location}</p>
          )}
          {classmate.occupation && (
            <p className="text-gray-500 text-sm">{classmate.occupation}</p>
          )}
        </div>
      </div>
      {classmate.bio && (
        <p className="mt-4 text-gray-700">{classmate.bio}</p>
      )}
    </div>
  );
};

export default ClassmateCard;
