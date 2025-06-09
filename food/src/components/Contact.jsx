const Contact = () => {
  return (
    <div className="min-h-screen bg-green-50 px-6 py-10">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-green-700 mb-4">📞 Contact Us</h1>
        <p className="text-gray-600 text-lg mb-8">
          We'd love to hear from you! Whether you have questions, feedback, or need help — reach out to us.
        </p>
      </div>

      {/* Contact Form */}
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-md">
        <form className="grid grid-cols-1 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Name</label>
            <input
              type="text"
              placeholder="Your full name"
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Message</label>
            <textarea
              placeholder="Type your message here..."
              className="w-full border border-gray-300 px-4 py-2 rounded-lg h-28 resize-none focus:outline-none focus:ring-2 focus:ring-green-400"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-green-600 text-white py-2 px-6 rounded-lg hover:bg-green-700 transition-all duration-200"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Support Info */}
      <div className="text-center text-sm text-gray-500 mt-10">
        Or email us at <span className="font-medium text-green-700">support@foodapp.com</span>
      </div>
    </div>
  );
};

export default Contact;
