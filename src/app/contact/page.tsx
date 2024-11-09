export default function ContactForm() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-12 bg-gray-100">
        <div className="w-full max-w-[80%] p-8 space-y-6 rounded shadow-lg">
          <h2 className="text-4xl font-semibold text-center text-gray-800">Contact Us</h2>
            <div>
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                required
                className="w-full px-4 py-2 border rounded focus:outline-none focus:border-[#ff5f87]"
              />
            </div>
            <div>
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-2 border rounded focus:outline-none focus:border-[#ff5f87]"
              />
            </div>
            <div>
              <label className="block text-gray-700">Message</label>
              <textarea
                name="message"
                required
                className="w-full px-4 py-2 border rounded focus:outline-none focus:border-[#ff5f87]"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 font-bold text-white bg-[#ff5f87] rounded hover:bg-[#f53868]"
            >
              Send Message
            </button>
        </div>

      </div>
    );
  }