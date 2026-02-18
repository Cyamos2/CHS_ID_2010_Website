import React from 'react';
import RSVPForm from '../components/RSVPForm';

const RSVP = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-maroon mb-4 text-center">
        RSVP for the Reunion
      </h1>
      <p className="text-center text-gray-600 mb-8">
        Please let us know if you'll be joining us for this special celebration
      </p>

      <RSVPForm />

      <div className="max-w-lg mx-auto mt-8 bg-silver bg-opacity-20 p-6 rounded-lg">
        <h3 className="font-bold text-lg mb-2">Important Information:</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>RSVP deadline: To be announced</li>
          <li>Ticket price: To be announced</li>
          <li>Guest policy: Limited to +1</li>
          <li>Questions? Contact the reunion committee</li>
        </ul>
      </div>
    </div>
  );
};

export default RSVP;
