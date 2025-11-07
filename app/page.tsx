export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero section */}
      <div
        className="relative flex-grow bg-contain bg-no-repeat"
        style={{
          backgroundImage: "url('/turbinebg.webp')",
          backgroundPosition: "center 80%", // moves the image downward
        }}
      >
        {/* Dark overlay for contrast */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Main content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center text-white px-4 py-20">
          <h1 className="text-5xl font-bold mb-4">Welcome to Materia Solutions</h1>
          <p className="text-lg max-w-xl">
            Innovative aviation solutions crafted for efficiency, safety, and precision.
          </p>
        </div>

        {/* Spacer at bottom for scroll */}
        <div className="h-64"></div>
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
              src="https://images.unsplash.com/photo-1591012911200-79f2d1d64e62?crop=entropy&cs=tinysrgb&fit=max&h=150&w=150"
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
              src="https://images.unsplash.com/photo-1581093588401-88d3ab9f61c3?crop=entropy&cs=tinysrgb&fit=max&h=150&w=150"
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
              src="https://images.unsplash.com/photo-1588776814546-7b5c54e34d65?crop=entropy&cs=tinysrgb&fit=max&h=150&w=150"
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
    </div>
  );
}
