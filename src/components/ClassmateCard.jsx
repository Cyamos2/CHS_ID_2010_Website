export default function ClassmateCard({ classmate }) {
  return (
    <div className="card">
      <img 
        src={classmate.photoUrl} 
        alt={`${classmate.firstName} ${classmate.lastName}`}
        className="w-full h-48 object-cover"
        onError={(e) => {
          e.target.src = 'https://via.placeholder.com/300x200?text=Photo';
        }}
      />
      <div className="p-4">
        <h3 className="text-lg font-bold text-maroon-800">
          {classmate.firstName} {classmate.lastName}
        </h3>
        {classmate.nickname && (
          <p className="text-gray-600 text-sm mb-2">&quot;{classmate.nickname}&quot;</p>
        )}
        <div className="text-sm text-gray-700 space-y-1">
          {classmate.city && classmate.state && (
            <p>📍 {classmate.city}, {classmate.state}</p>
          )}
          {classmate.occupation && (
            <p>💼 {classmate.occupation}</p>
          )}
        </div>
        {classmate.isAttending && (
          <span className="inline-block mt-3 px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-semibold">
            Attending ✓
          </span>
        )}
      </div>
    </div>
  );
}
