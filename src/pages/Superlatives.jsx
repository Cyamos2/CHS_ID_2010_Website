export default function Superlatives() {
  const superlatives = [
    { category: "Most Likely to Succeed", winners: ["Name TBD", "Name TBD"] },
    { category: "Best Smile", winners: ["Name TBD", "Name TBD"] },
    { category: "Class Clown", winners: ["Name TBD", "Name TBD"] },
    { category: "Most Athletic", winners: ["Name TBD", "Name TBD"] },
    { category: "Best Dressed", winners: ["Name TBD", "Name TBD"] },
    { category: "Most Changed", winners: ["Name TBD", "Name TBD"] },
    { category: "Most Likely to be Famous", winners: ["Name TBD", "Name TBD"] },
    { category: "Best Hair", winners: ["Name TBD", "Name TBD"] },
  ];

  return (
    <div className="page-container">
      <h1 className="section-title">Class Superlatives</h1>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <p className="text-gray-700 text-lg mb-4">
          Remember voting for these back in 2010? Let&apos;s see who won what!
        </p>
        <p className="text-gray-600">
          Vote for new &quot;Where Are They Now?&quot; superlatives at the reunion!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {superlatives.map((item, index) => (
          <div key={index} className="card">
            <div className="bg-maroon-700 text-white p-4">
              <h3 className="text-xl font-bold text-center">{item.category}</h3>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {item.winners.map((winner, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-silver-200 rounded-full flex items-center justify-center text-2xl">
                      👤
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">{winner}</p>
                      <p className="text-sm text-gray-600">Class of 2010</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-maroon-50 border-l-4 border-maroon-600 p-6 rounded-r-lg">
        <h3 className="text-xl font-bold text-maroon-800 mb-3">2030 Reunion Superlatives</h3>
        <p className="text-gray-700 mb-4">
          At the reunion, we&apos;ll be voting on new superlatives! Categories include:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Most Changed Since High School</li>
          <li>Traveled the Farthest</li>
          <li>Most Kids</li>
          <li>Still Looks Like a Senior</li>
          <li>Best Career Glow-Up</li>
        </ul>
      </div>
    </div>
  );
}
