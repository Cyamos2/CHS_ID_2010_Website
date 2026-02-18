import { useState, useEffect } from 'react';
import ClassmateCard from '../components/ClassmateCard';

export default function Directory() {
  const [classmates, setClassmates] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterAttending, setFilterAttending] = useState(false);

  useEffect(() => {
    // Load classmates data
    import('../data/classmates.json').then(module => {
      setClassmates(module.default);
    });
  }, []);

  const filteredClassmates = classmates.filter(classmate => {
    const matchesSearch = 
      classmate.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      classmate.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (classmate.nickname && classmate.nickname.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesFilter = !filterAttending || classmate.isAttending;
    
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="page-container">
      <h1 className="section-title">Class Directory</h1>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="Search by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-maroon-500 focus:border-transparent"
          />
          <label className="flex items-center gap-2 px-4 py-2 bg-silver-100 rounded-lg cursor-pointer">
            <input
              type="checkbox"
              checked={filterAttending}
              onChange={(e) => setFilterAttending(e.target.checked)}
              className="w-5 h-5 text-maroon-600 border-gray-300 rounded focus:ring-maroon-500"
            />
            <span className="font-semibold text-gray-700">Attending Only</span>
          </label>
        </div>
      </div>

      <div className="mb-6 text-gray-700">
        <p>Showing {filteredClassmates.length} of {classmates.length} classmates</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredClassmates.map(classmate => (
          <ClassmateCard key={classmate.id} classmate={classmate} />
        ))}
      </div>

      {filteredClassmates.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-600 text-lg">No classmates found matching your search.</p>
        </div>
      )}

      <div className="mt-12 bg-maroon-50 border-l-4 border-maroon-600 p-6 rounded-r-lg">
        <h3 className="text-xl font-bold text-maroon-800 mb-3">Don&apos;t see your profile?</h3>
        <p className="text-gray-700 mb-4">
          Contact us to update your information or add your profile to the directory.
        </p>
        <a href="/contact" className="btn-primary">
          Contact Us
        </a>
      </div>
    </div>
  );
}
