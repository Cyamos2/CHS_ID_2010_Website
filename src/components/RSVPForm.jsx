import React, { useState } from 'react';

const RSVPForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    attending: 'yes',
    guests: 0,
    dietaryRestrictions: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('RSVP submitted:', formData);
    // TODO: Send to backend API
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md">
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-lg"
          required
        />
      </div>
      
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-lg"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Will you attend?</label>
        <select
          name="attending"
          value={formData.attending}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-lg"
        >
          <option value="yes">Yes</option>
          <option value="no">No</option>
          <option value="maybe">Maybe</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Number of Guests</label>
        <input
          type="number"
          name="guests"
          value={formData.guests}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-lg"
          min="0"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Dietary Restrictions</label>
        <textarea
          name="dietaryRestrictions"
          value={formData.dietaryRestrictions}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-lg"
          rows="3"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-maroon text-white py-3 rounded-lg font-bold hover:bg-opacity-90"
      >
        Submit RSVP
      </button>
    </form>
  );
};

export default RSVPForm;
