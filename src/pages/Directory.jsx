import React, { useEffect, useState } from 'react';
import ClassmateCard from '../components/ClassmateCard';

const Directory = () => {
  const [classmates, setClassmates] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // TODO: Load from classmates.json
    setClassmates([]);
  }, []);

  const filteredClassmates = classmates.filter(classmate =>
    classmate?.name?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-maroon mb-8 text-center">
        Class Directory
      </h1>

      <div className="max-w-md mx-auto mb-8">
        <input
          type="text"
          placeholder="Search for classmates..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-3 border rounded-lg shadow-sm"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredClassmates.length > 0 ? (
          filteredClassmates.map((classmate, index) => (
            <ClassmateCard key={index} classmate={classmate} />
          ))
        ) : (
          <div className="col-span-full text-center text-gray-600 py-12">
            {searchTerm ? 'No classmates found matching your search.' : 'No classmates in the directory yet.'}
          </div>
        )}
      </div>
    </div>
  );
};

export default Directory;
