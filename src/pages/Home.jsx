import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="page-container">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-5xl md:text-6xl font-bold text-maroon-900 mb-4">
          CHS Class of 2010
        </h1>
        <h2 className="text-3xl md:text-4xl text-maroon-700 mb-6">
          20 Year Reunion
        </h2>
        <p className="text-xl text-gray-700 mb-8">
          Date and Location To Be Announced
        </p>
        <Link to="/rsvp" className="btn-primary text-lg">
          RSVP Now
        </Link>
      </div>

      {/* Welcome Message */}
      <div className="bg-white rounded-lg shadow-md p-8 mb-12">
        <h2 className="section-title">Welcome Back!</h2>
        <p className="text-gray-700 text-lg mb-4">
          Can you believe it&apos;s been 20 years? We&apos;re excited to bring together the CHS Class of 2010 
          for an unforgettable weekend of reconnection, reminiscing, and celebration.
        </p>
        <p className="text-gray-700 text-lg">
          Join us for a weekend filled with great food, music, memories, 
          and the chance to catch up with old friends. Whether you&apos;ve kept in touch or it&apos;s been 
          years since we&apos;ve seen each other, we can&apos;t wait to see you there!
        </p>
      </div>

      {/* Quick Links */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link to="/schedule" className="card p-6 hover:shadow-xl transition-shadow">
          <div className="text-4xl mb-3">📅</div>
          <h3 className="text-xl font-bold text-maroon-800 mb-2">Schedule</h3>
          <p className="text-gray-600">View the weekend&apos;s events and activities</p>
        </Link>

        <Link to="/venue" className="card p-6 hover:shadow-xl transition-shadow">
          <div className="text-4xl mb-3">🏨</div>
          <h3 className="text-xl font-bold text-maroon-800 mb-2">Venue & Hotels</h3>
          <p className="text-gray-600">Location details and accommodation options</p>
        </Link>

        <Link to="/memories" className="card p-6 hover:shadow-xl transition-shadow">
          <div className="text-4xl mb-3">📸</div>
          <h3 className="text-xl font-bold text-maroon-800 mb-2">Memories</h3>
          <p className="text-gray-600">Share and view photos from our high school years</p>
        </Link>
      </div>

      {/* Important Info */}
      <div className="mt-12 bg-maroon-50 border-l-4 border-maroon-600 p-6 rounded-r-lg">
        <h3 className="text-xl font-bold text-maroon-800 mb-3">Important Information</h3>
        <ul className="space-y-2 text-gray-700">
          <li>✓ Date and location details coming soon</li>
          <li>✓ Registration fee: $75 per person (includes all events)</li>
          <li>✓ Questions? Contact us at reunion@chs2010.com</li>
        </ul>
      </div>
    </div>
  );
}
