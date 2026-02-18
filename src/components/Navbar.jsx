import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-maroon text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-bold">
            CHS Class of 2010
          </Link>
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-silver">Home</Link>
            <Link to="/schedule" className="hover:text-silver">Schedule</Link>
            <Link to="/directory" className="hover:text-silver">Directory</Link>
            <Link to="/memories" className="hover:text-silver">Memories</Link>
            <Link to="/in-memoriam" className="hover:text-silver">In Memoriam</Link>
            <Link to="/venue" className="hover:text-silver">Venue</Link>
            <Link to="/rsvp" className="hover:text-silver">RSVP</Link>
            <Link to="/superlatives" className="hover:text-silver">Superlatives</Link>
            <Link to="/contact" className="hover:text-silver">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
