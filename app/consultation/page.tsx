import React from "react";

export default function FreeConsultationPage() {
  return (
    <div className="w-full flex justify-center bg-white text-black pt-32 pb-20 px-6">
      <div className="max-w-4xl w-full space-y-16">
        
        {/* Header */}
        <section className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold">
            Free Consultation
          </h1>
          <p className="text-gray-700 text-lg leading-relaxed">
            Schedule a <span className="font-bold">free consultation</span> with our materials engineers.
          </p>
        </section>

        {/* Info Section */}
        <section className="bg-gray-50 p-10 rounded-2xl shadow-lg border border-gray-200 space-y-6">
          <p className="text-gray-700 leading-relaxed">
            Have questions about materials testing, failure analysis, metallography, or nondestructive evaluation? Book a free consultation with our team to discuss your part, material, or project requirements.
          </p>

          <h2 className="text-2xl font-bold text-gray-900">During your consultation, we can:</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Review your project specifications and goals</li>
            <li>Recommend the appropriate test methods and standards</li>
            <li>Provide guidance on reporting and documentation</li>
            <li>Answer compliance questions related to EAR-controlled work</li>
          </ul>

          <p className="text-gray-700 leading-relaxed">
            All consultations are <span className="font-bold">free, confidential</span>, and handled by qualified U.S. personnel.
          </p>
        </section>

        {/* Booking Section */}
        <section className="text-center space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Book Your Free Consultation Below</h2>
          <p className="text-gray-700 leading-relaxed">
            Please select a date and time that works best for you. Once booked, you’ll receive a confirmation email with all the meeting details.
          </p>

          {/* Calendly Embed */}
          <div className="w-full h-[650px]">
            <iframe
              src="https://calendly.com/YOUR_CALENDLY_USERNAME/consultation"
              width="100%"
              height="100%"
              frameBorder="0"
              className="rounded-xl shadow-md"
            ></iframe>
          </div>
        </section>
      </div>
    </div>
  );
}
