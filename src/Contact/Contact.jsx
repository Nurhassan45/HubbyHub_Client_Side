import Header from "../Component/Header";

const ContactUs = () => {
  return (<>
  <Header></Header>
    <section className="bg-[#f9f9f9] mt-20 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2563EB]">Contact Us</h2>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            Have a question or suggestion? We'd love to hear from you! Fill out the form or reach us through the info below.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Contact Form */}
          <form className="bg-white rounded-2xl shadow-md p-6 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Your Name</label>
              <input
                type="text"
                className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email Address</label>
              <input
                type="email"
                className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                rows="4"
                className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
                placeholder="Your message"
              />
            </div>
            <button
              type="submit"
              className="bg-[#22C55E] text-white px-6 py-2 rounded-lg hover:bg-green-600 font-medium"
            >
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-[#2563EB]">Reach Us</h3>
              <p className="text-gray-600 mt-2">
                📍 123 Hobby Street, Passion City, CreativeLand
              </p>
              <p className="text-gray-600">📧 support@hubbyhub.com</p>
              <p className="text-gray-600">📞 +123-456-7890</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#2563EB]">Follow Us</h3>
              <div className="flex space-x-4 mt-2">
                <a href="#" className="text-[#2563EB] hover:text-[#22C55E]">Facebook</a>
                <a href="#" className="text-[#2563EB] hover:text-[#22C55E]">Twitter</a>
                <a href="#" className="text-[#2563EB] hover:text-[#22C55E]">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section></>
  );
};

export default ContactUs;
