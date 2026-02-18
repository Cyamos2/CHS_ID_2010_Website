import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-maroon text-white mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">CHS Class of 2010</h3>
            <p className="text-silver">Celebrating 20 years together!</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/rsvp" className="text-silver hover:text-white">RSVP</a></li>
              <li><a href="/schedule" className="text-silver hover:text-white">Schedule</a></li>
              <li><a href="/venue" className="text-silver hover:text-white">Venue</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <p className="text-silver">Questions? Reach out to us!</p>
          </div>
        </div>
        <div className="border-t border-silver mt-8 pt-6 text-center text-silver">
          <p>&copy; 2030 CHS Class of 2010 Reunion. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
