export default function Contact() {
  return (
    <div className="page-container">
      <h1 className="section-title">Contact Us</h1>
      
      <div className="max-w-3xl mx-auto">
        <div className="card mb-8">
          <div className="p-8">
            <h2 className="text-2xl font-bold text-maroon-800 mb-6">Get in Touch</h2>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <span className="text-2xl">✉️</span>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">Email</h3>
                  <a 
                    href="mailto:reunion@chs2010.com"
                    className="text-maroon-600 hover:text-maroon-800 underline"
                  >
                    reunion@chs2010.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-2xl">💬</span>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">Social Media</h3>
                  <p className="text-gray-600">
                    Join our Facebook group: <strong>CHS Class of 2010 Reunion</strong>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-2xl">📱</span>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">Text Updates</h3>
                  <p className="text-gray-600">
                    Sign up for text message updates about reunion details
                  </p>
                </div>
              </div>
            </div>

            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-maroon-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-maroon-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Subject</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-maroon-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Message</label>
                <textarea
                  rows="5"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-maroon-500 focus:border-transparent"
                />
              </div>

              <button type="submit" className="btn-primary w-full">
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="bg-maroon-50 border-l-4 border-maroon-600 p-6 rounded-r-lg">
          <h3 className="text-xl font-bold text-maroon-800 mb-3">Reunion Committee</h3>
          <p className="text-gray-700 mb-4">
            Our reunion is organized by volunteers from our class. If you&apos;d like to help 
            with planning or have ideas to share, we&apos;d love to hear from you!
          </p>
          <p className="text-gray-700">
            Committee Members: [Names to be added]
          </p>
        </div>
      </div>
    </div>
  );
}
