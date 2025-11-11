"use client";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* ===== Hero Section ===== */}
      <div className="relative flex-grow h-[1000px] mt-28">
        {/* Video Background */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/turbinevid.mp4"
          autoPlay
          loop
          muted
          playsInline
        ></video>

        {/* Dark overlay for contrast */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Main Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center text-white px-4 h-[calc(100vh-120px)]">
          <h1 className="text-5xl font-bold mb-4 typing-title">
          Welcome to Materia Solutions
          </h1>
        <p className="fade-in text-lg max-w-xl">
        Innovative aviation solutions crafted for efficiency, safety, and precision.
        </p>
        </div>
      </div>

      {/* ===== Our Services Section ===== */}
      <section className="bg-white text-gray-800 py-20 px-6 md:px-16">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#223241]">
          Our Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {/* Free Consultation */}
          <div className="p-8 rounded-2xl shadow-lg hover:shadow-2xl transition">
            <img
              src="https://plus.unsplash.com/premium_photo-1661908759956-93c29efea72b?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=500"
              alt="Free Consultation"
              className="mx-auto mb-4 rounded-full"
            />
            <h3 className="text-2xl font-semibold mb-4 text-[#223241]">
              Free Consultation
            </h3>
            <p className="mb-6 text-gray-600">
              Schedule a complimentary consultation with our aviation experts to explore your project needs.
            </p>
            <button className="bg-[#223241] text-white px-6 py-2 rounded-lg hover:bg-[#1a2733] transition">
              Book Now
            </button>
          </div>

          {/* Request a Quote */}
          <div className="p-8 rounded-2xl shadow-lg hover:shadow-2xl transition">
            <img
              src="https://plus.unsplash.com/premium_photo-1664533227323-1502b504cac4?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=500"
              alt="Request a Quote"
              className="mx-auto mb-4 rounded-full"
            />
            <h3 className="text-2xl font-semibold mb-4 text-[#223241]">
              Request a Quote
            </h3>
            <p className="mb-6 text-gray-600">
              Get a customized quote tailored to your unique aviation engineering or manufacturing requirements.
            </p>
            <button className="bg-[#223241] text-white px-6 py-2 rounded-lg hover:bg-[#1a2733] transition">
              Request Quote
            </button>
          </div>

          {/* Contact Us */}
          <div className="p-8 rounded-2xl shadow-lg hover:shadow-2xl transition">
            <img
              src="https://plus.unsplash.com/premium_photo-1675842663249-a8b70103dbaa?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=500"
              alt="Contact Us"
              className="mx-auto mb-4 rounded-full"
            />
            <h3 className="text-2xl font-semibold mb-4 text-[#223241]">
              Contact Us
            </h3>
            <p className="mb-6 text-gray-600">
              Have questions or inquiries? Reach out to our team for prompt and professional assistance.
            </p>
            <button className="bg-[#223241] text-white px-6 py-2 rounded-lg hover:bg-[#1a2733] transition">
              Get in Touch
            </button>
          </div>
        </div>
      </section>

      {/* ===== CSS for Typing & Fade-In ===== */}
      <style jsx>{`
        @keyframes typing {
          from { width: 0; opacity: 0; }
          to { width: 100%; opacity: 1; }
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .typing-title {
          display: inline-block;
          overflow: hidden;
          white-space: nowrap;
          animation: typing 4s ease-out forwards;
        }

        .fade-in {
          opacity: 0;
          animation: fadeIn 1s ease 3s forwards;
        }
      `}</style>
    </div>
  );
}

