import React from 'react';

const Superlatives = () => {
  const superlatives = [
    { category: 'Most Likely to be Famous', winner: 'TBD' },
    { category: 'Best Smile', winner: 'TBD' },
    { category: 'Class Clown', winner: 'TBD' },
    { category: 'Most Changed', winner: 'TBD' },
    { category: 'Hasn\'t Changed a Bit', winner: 'TBD' },
    { category: 'Traveled the Farthest', winner: 'TBD' },
    { category: 'Most Kids', winner: 'TBD' },
    { category: 'Still in the Area', winner: 'TBD' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-maroon mb-4 text-center">
        Class Superlatives
      </h1>
      <p className="text-center text-gray-600 mb-8">
        Celebrating our classmates - then and now!
      </p>

      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {superlatives.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-maroon mb-2">{item.category}</h3>
              <p className="text-gray-700 text-lg">{item.winner}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-silver bg-opacity-20 p-6 rounded-lg text-center">
          <p className="text-gray-700">
            Voting and winners will be announced at the reunion!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Superlatives;
