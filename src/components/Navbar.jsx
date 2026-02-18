import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-maroon-900 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-bold hover:text-silver-200 transition-colors">
            CHS Class of 2010
          </Link>
          
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-silver-200 transition-colors">Home</Link>
            <Link to="/schedule" className="hover:text-silver-200 transition-colors">Schedule</Link>
            <Link to="/directory" className="hover:text-silver-200 transition-colors">Directory</Link>
            <Link to="/memories" className="hover:text-silver-200 transition-colors">Memories</Link>
            <Link to="/in-memoriam" className="hover:text-silver-200 transition-colors">In Memoriam</Link>
            <Link to="/venue" className="hover:text-silver-200 transition-colors">Venue</Link>
            <Link to="/rsvp" className="hover:text-silver-200 transition-colors">RSVP</Link>
            <Link to="/superlatives" className="hover:text-silver-200 transition-colors">Superlatives</Link>
            <Link to="/contact" className="hover:text-silver-200 transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
