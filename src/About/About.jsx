import Header from "../Component/Header";

const AboutUs = () => {
  return (
    <>
    <Header></Header>
    <section className="bg-white mt-20 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2563EB]">About HubbyHub</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Welcome to <span className="font-semibold text-[#22C55E]">HubbyHub</span> — where your hobbies come to life! We are a vibrant community built to connect people through shared passions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#2563EB] text-white rounded-2xl shadow-lg p-6 hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-2">🎯 Our Mission</h3>
            <p>
              To build a central hub where hobbyists can discover, share, and grow together — no matter the niche.
            </p>
          </div>
          <div className="bg-[#22C55E] text-white rounded-2xl shadow-lg p-6 hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-2">🤝 Community Driven</h3>
            <p>
              HubbyHub thrives on people. We empower users to create and join groups, host events, and inspire one another.
            </p>
          </div>
          <div className="bg-[#2563EB] text-white rounded-2xl shadow-lg p-6 hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-2">🚀 Why Choose Us?</h3>
            <p>
              Whether you're into painting, coding, gardening or gaming — HubbyHub gives your passion a home to grow.
            </p>
          </div>
        </div>
      </div>
    </section></>
  );
};

export default AboutUs;
