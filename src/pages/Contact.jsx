import React from 'react';

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-maroon mb-8 text-center">
        Contact Us
      </h1>

      <div className="max-w-2xl mx-auto">
        <div className="bg-white p-8 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-bold text-maroon mb-4">Reunion Committee</h2>
          <p className="text-gray-700 mb-4">
            Have questions about the reunion? Need to update your contact information? 
            Want to volunteer to help? We'd love to hear from you!
          </p>
          
          <div className="space-y-3 text-gray-700">
            <p>
              <strong>Email:</strong>{' '}
              <a href="mailto:reunion@chs2010.com" className="text-maroon hover:underline">
                reunion@chs2010.com
              </a>
            </p>
            <p>
              <strong>Phone:</strong> (555) 123-4567
            </p>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-maroon mb-4">Get Involved</h2>
          <p className="text-gray-700 mb-4">
            Want to help make this reunion amazing? We're looking for volunteers to assist with:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Event planning and coordination</li>
            <li>Social media and communications</li>
            <li>Tracking down classmates</li>
            <li>Day-of event support</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
