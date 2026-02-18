export default function MemoryCard({ memory }) {
  return (
    <div className="card">
      <img 
        src={memory.imageUrl} 
        alt={memory.title}
        className="w-full h-64 object-cover"
        onError={(e) => {
          e.target.src = 'https://via.placeholder.com/400x300?text=Memory+Photo';
        }}
      />
      <div className="p-6">
        <h3 className="text-xl font-bold text-maroon-800 mb-2">{memory.title}</h3>
        <p className="text-gray-600 mb-3">{memory.description}</p>
        <div className="flex justify-between items-center text-sm text-gray-500">
          <span>By {memory.author}</span>
          <span>{new Date(memory.date).toLocaleDateString()}</span>
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {memory.tags.map((tag, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-silver-200 text-gray-700 rounded-full text-xs"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
