import Link from 'next/link';


function Contact() {
  return (
    <div className="container mx-auto p-8">
      <section id="contact" className="relative py-16 w-full">
        {/* Background Image */}
       

        {/* Form Section */}
        <div className="relative w-full max-w-lg mx-auto bg-white shadow-lg rounded-lg p-8 text-center bg-opacity-80 z-10">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">
            Have a <span className="text-cyan-600">Question?</span>
          </h2>
          <h3 className="text-lg font-semibold text-gray-600 mb-6">Contact Us</h3>

          <form className="space-y-6">
            <div className="form-group">
              <input
                type="text"
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-lg"
                placeholder="Your Name"
                required
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-lg"
                placeholder="Your Email"
                required
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-lg"
                placeholder="Subject"
                required
              />
            </div>

            <div className="form-group">
              <textarea
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-lg"
                placeholder="Your Message"
                required
              ></textarea>
            </div>

            <div className="mt-6">
              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-cyan-500 to-cyan-700 text-white font-semibold rounded-lg hover:from-cyan-700 hover:to-cyan-500 transition-all duration-300 transform hover:scale-105"
              >
                <Link href="mailto:hirahammad34@gmail.com" className="block">Submit</Link>
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Contact;
