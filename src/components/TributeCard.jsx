export default function TributeCard({ person }) {
  return (
    <div className="card bg-gray-50">
      <div className="flex flex-col md:flex-row gap-6 p-6">
        <img 
          src={person.photoUrl} 
          alt={`${person.firstName} ${person.lastName}`}
          className="w-full md:w-48 h-48 object-cover rounded-lg"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/200x200?text=Photo';
          }}
        />
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-maroon-800 mb-2">
            {person.firstName} {person.lastName}
          </h3>
          <p className="text-gray-600 mb-4">
            {new Date(person.dateOfBirth).toLocaleDateString()} - {new Date(person.dateOfPassing).toLocaleDateString()}
          </p>
          <p className="text-gray-700 mb-4">{person.biography}</p>
          {person.obituaryUrl && (
            <a 
              href={person.obituaryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-maroon-600 hover:text-maroon-800 underline"
            >
              Read Obituary
            </a>
          )}
        </div>
      </div>
      
      {person.tributes && person.tributes.length > 0 && (
        <div className="border-t border-gray-200 p-6">
          <h4 className="font-bold text-maroon-800 mb-4">Tributes</h4>
          <div className="space-y-4">
            {person.tributes.map((tribute, index) => (
              <div key={index} className="bg-white p-4 rounded-lg">
                <p className="text-gray-700 mb-2">{tribute.message}</p>
                <p className="text-sm text-gray-500">
                  - {tribute.author}, {new Date(tribute.date).toLocaleDateString()}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
