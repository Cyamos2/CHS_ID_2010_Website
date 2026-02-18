import RSVPForm from '../components/RSVPForm';

export default function RSVP() {
  return (
    <div className="page-container">
      <h1 className="section-title text-center">RSVP for the Reunion</h1>
      
      <div className="max-w-2xl mx-auto mb-8 text-center">
        <p className="text-gray-700 text-lg mb-4">
          We&apos;d love to see you at our 20 year reunion! Please fill out the form below to let us know 
          if you&apos;ll be joining us.
        </p>
        <p className="text-gray-600">
          Date and RSVP deadline will be announced soon
        </p>
      </div>

      <RSVPForm />

      <div className="max-w-2xl mx-auto mt-8 bg-maroon-50 border-l-4 border-maroon-600 p-6 rounded-r-lg">
        <h3 className="text-lg font-bold text-maroon-800 mb-2">Payment Information</h3>
        <p className="text-gray-700 mb-2">
          Registration fee: <strong>$75 per person</strong>
        </p>
        <p className="text-gray-700">
          After submitting your RSVP, you will receive an email with payment instructions.
        </p>
      </div>

      <div className="max-w-2xl mx-auto mt-6 text-center">
        <p className="text-gray-600">
          Questions about RSVP or registration? <a href="/contact" className="text-maroon-600 hover:text-maroon-800 underline">Contact us</a>
        </p>
      </div>
    </div>
  );
}
