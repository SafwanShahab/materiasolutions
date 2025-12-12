"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className="flex flex-col min-h-screen">

      {/* ===== Hero Section ===== */}
      <div className="relative h-[1000px] mt-28">
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
        <div className="relative z-10 flex flex-col items-center justify-center text-center text-white px-8 md:px-16 lg:px-32 h-[calc(100vh-120px)]">
          <h1 className="typing-title md:text-6xl font-bold mb-6 leading-tight tracking-wide">
            Materia Solutions
          </h1>
          <p className="fade-in text-xl md:text-1xl max-w-4xl text-gray-200 font-light">
            At Materia Solutions, we uncover hidden material and component issues before they become costly failures. From failure analysis to metallography and NDE, our expert engineers deliver fast, actionable insights to keep your programs on track.
          </p>
          <div className="flex justify-center gap-4">
            <button
              onClick={() => router.push("/request-quote")}
              className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-blue-300 transition mt-5"
            >
              Request a Quote
            </button>
            <button
              onClick={() => router.push("/consultation")}
              className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-blue-300 transition mt-5"
            >
              Schedule a Free Consultation
            </button>
          </div>
        </div>
      </div>

      {/* ===== Our Services Section ===== */}
      <section className="bg-white text-gray-800 pt-16 pb-16 px-5 md:px-10">
        {/* Image + Heading */}
        <div className="flex items-center gap-6 mb-8 -mt-8">
          <img
            src="/services.png"
            alt="Services Icon"
            className="h-24 w-auto object-contain"
          />
          <h2 className="text-5xl md:text-6xl font-bold text-[#223241]">
            Our Services
          </h2>
        </div>

        {/* ===== SERVICE CARDS ===== */}
        <div className="flex flex-wrap justify-center gap-10 md:gap-12 text-center">
          {[
            {
              title: "Our Services",
              img: "https://plus.unsplash.com/premium_photo-1661908759956-93c29efea72b?auto=format&fit=crop&q=60&w=600",
              text: "Advanced materials testing and analysis for aerospace, including failure analysis, metallography, and NDE delivered with clarity and precision.",
              button: "Services",
              link: "/services",
            },
            {
              title: "Request a Quote",
              img: "https://plus.unsplash.com/premium_photo-1664533227323-1502b504cac4?auto=format&fit=crop&q=60&w=600",
              text: "We make it easy to get started. Send us your part details, required analyses, and any applicable test standards, and we’ll provide a clear, competitive quote with fast turnaround options.",
              button: "Request Quote",
              link: "/request-quote",
            },
            {
              title: "Schedule a Free Consultation",
              img: "https://plus.unsplash.com/premium_photo-1675842663249-a8b70103dbaa?auto=format&fit=crop&q=60&w=600",
              text: "Speak with an engineer about your part, material, or failure analysis requirements. We’ll guide you to the correct test methods, applicable standards, and the right level of reporting for your project.",
              button: "Connect with us",
              link: "/consultation",
            },
            {
              title: "Contact Us",
              img: "https://images.unsplash.com/photo-1516387938699-a93567ec168e?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              text: "We’re here to help. Tell us about your project, testing needs, or timeline, and our team will follow up with clear next steps.",
              button: "Connect with us",
              link: "/contact",
            },
          ].map((card, index) => (
            <div
              key={index}
              className="p-8 md:p-10 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300 w-[300px] md:w-[380px] flex flex-col"
            >
              <img
                src={card.img}
                alt={card.title}
                className="mx-auto mb-6 rounded-2xl w-full h-[220px] object-cover"
              />

              <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-[#223241]">
                {card.title}
              </h3>

              <p className="mb-8 text-gray-600 text-lg min-h-[90px]">
                {card.text}
              </p>

              <button
                onClick={() => router.push(card.link)}
                className="bg-[#223241] text-white px-8 md:px-10 py-3 rounded-lg hover:bg-[#1a2733] transition mt-auto"
              >
                {card.button}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* ===== ANIMATION CSS ===== */}
      <style jsx>{`
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
          border-right: none !important;
        }

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
