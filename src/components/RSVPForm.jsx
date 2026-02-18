import { useState } from 'react';

export default function RSVPForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    attending: '',
    plusOne: false,
    plusOneName: '',
    dietaryRestrictions: '',
    comments: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement API call to backend
    console.log('Form submitted:', formData);
    alert('Thank you for your RSVP! We will send you a confirmation email.');
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-gray-700 font-semibold mb-2">First Name *</label>
          <input
            type="text"
            name="firstName"
            required
            value={formData.firstName}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-maroon-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-2">Last Name *</label>
          <input
            type="text"
            name="lastName"
            required
            value={formData.lastName}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-maroon-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-2">Email *</label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-maroon-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-2">Phone</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-maroon-500 focus:border-transparent"
          />
        </div>
      </div>

      <div className="mt-6">
        <label className="block text-gray-700 font-semibold mb-2">Will you be attending? *</label>
        <select
          name="attending"
          required
          value={formData.attending}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-maroon-500 focus:border-transparent"
        >
          <option value="">Select...</option>
          <option value="all">All Events</option>
          <option value="friday">Friday Only</option>
          <option value="saturday">Saturday Only</option>
          <option value="no">Cannot Attend</option>
        </select>
      </div>

      <div className="mt-6">
        <label className="flex items-center">
          <input
            type="checkbox"
            name="plusOne"
            checked={formData.plusOne}
            onChange={handleChange}
            className="w-5 h-5 text-maroon-600 border-gray-300 rounded focus:ring-maroon-500"
          />
          <span className="ml-2 text-gray-700 font-semibold">Bringing a plus one?</span>
        </label>
      </div>

      {formData.plusOne && (
        <div className="mt-4">
          <label className="block text-gray-700 font-semibold mb-2">Plus One Name</label>
          <input
            type="text"
            name="plusOneName"
            value={formData.plusOneName}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-maroon-500 focus:border-transparent"
          />
        </div>
      )}

      <div className="mt-6">
        <label className="block text-gray-700 font-semibold mb-2">Dietary Restrictions</label>
        <input
          type="text"
          name="dietaryRestrictions"
          value={formData.dietaryRestrictions}
          onChange={handleChange}
          placeholder="Vegetarian, Gluten-free, etc."
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-maroon-500 focus:border-transparent"
        />
      </div>

      <div className="mt-6">
        <label className="block text-gray-700 font-semibold mb-2">Comments or Questions</label>
        <textarea
          name="comments"
          value={formData.comments}
          onChange={handleChange}
          rows="4"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-maroon-500 focus:border-transparent"
        />
      </div>

      <div className="mt-8">
        <button type="submit" className="btn-primary w-full">
          Submit RSVP
        </button>
      </div>
    </form>
  );
}
