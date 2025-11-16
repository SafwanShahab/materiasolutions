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

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Main Hero Text */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center text-white px-16 h-[calc(100vh-120px)]">
          <h1 className="typing-title text-6xl font-bold mb-6 leading-tight tracking-wide">
            Welcome to Materia Solutions
          </h1>
          <p className="fade-in text-xl max-w-2xl text-gray-200 font-light">
            Delivering next-generation aviation solutions — engineered for
            efficiency, safety, and precision.
          </p>
        </div>
      </div>

      {/* ===== Our Services Section ===== */}
      <section className="bg-white text-gray-800 md:py-10 md:px-5">
        <h2 className="text-4xl font-bold text-center mb-16 text-[#223241]">
          <img class = "object-scale-down" src="/services.png" />
          Our Services
        </h2>

        <div className="flex justify-center gap-12 text-center">
          {/* ===== SERVICE CARD TEMPLATE ===== */}
          {[
            {
              title: "Free Consultation",
              img: "https://plus.unsplash.com/premium_photo-1661908759956-93c29efea72b?auto=format&fit=crop&q=60&w=600",
              text: "Schedule a complimentary consultation with our aviation experts to explore your project needs.",
              button: "Book Now",
            },
            {
              title: "Request a Quote",
              img: "https://plus.unsplash.com/premium_photo-1664533227323-1502b504cac4?auto=format&fit=crop&q=60&w=600",
              text: "Receive a customized quote tailored to your aviation engineering or manufacturing requirements.",
              button: "Request Quote",
            },
            {
              title: "Contact Us",
              img: "https://plus.unsplash.com/premium_photo-1675842663249-a8b70103dbaa?auto=format&fit=crop&q=60&w=600",
              text: "Have questions or inquiries? Reach out to our team for prompt and professional assistance.",
              button: "Connect with us",
            },
          ].map((card, index) => (
            <div
              key={index}
              className="p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 w-[380px] flex flex-col"
            >
              <img
                src={card.img}
                alt={card.title}
                className="mx-auto mb-6 rounded-2xl w-[320px] h-[220px] object-cover"
              />

              <h3 className="text-3xl font-semibold mb-4 text-[#223241]">
                {card.title}
              </h3>

              <p className="mb-8 text-gray-600 text-lg min-h-[90px]">
                {card.text}
              </p>

              <button className="bg-[#223241] text-white px-10 py-3 rounded-lg hover:bg-[#1a2733] transition mt-auto">
                {card.button}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* ===== ANIMATION CSS ===== */}
      <style jsx>{`
        /* Typing animation — slower, smoother, NO cursor */
        @keyframes typing {
          0% {
            width: 0;
            opacity: 0;
          }
          20% {
            opacity: 1;
          }
          100% {
            width: 100%;
          }
        }

        .typing-title {
          display: inline-block;
          overflow: hidden;
          white-space: nowrap;
          animation: typing 4.5s ease forwards;
          border-right: none !important; /* Hide cursor */
        }

        /* Fade in paragraph after typing completes */
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .fade-in {
          opacity: 0;
          animation: fadeIn 1s ease 3s forwards;
        }
      `}</style>
    </div>
  );
}
