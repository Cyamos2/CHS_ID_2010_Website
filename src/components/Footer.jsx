export default function Footer() {
  return (
    <footer className="bg-maroon-900 text-white mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-3">CHS Class of 2010</h3>
            <p className="text-silver-200">20 Year Reunion - August 2030</p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/schedule" className="text-silver-200 hover:text-white transition-colors">Schedule</a></li>
              <li><a href="/rsvp" className="text-silver-200 hover:text-white transition-colors">RSVP</a></li>
              <li><a href="/venue" className="text-silver-200 hover:text-white transition-colors">Venue & Hotels</a></li>
              <li><a href="/contact" className="text-silver-200 hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-3">Connect</h3>
            <p className="text-silver-200">
              Questions? Email us at:<br />
              <a href="mailto:reunion@chs2010.com" className="text-silver-200 hover:text-white transition-colors underline">
                reunion@chs2010.com
              </a>
            </p>
          </div>
        </div>
        
        <div className="border-t border-maroon-800 mt-8 pt-6 text-center text-silver-200">
          <p>&copy; {new Date().getFullYear()} CHS Class of 2010. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
