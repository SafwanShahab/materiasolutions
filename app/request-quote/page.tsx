import React from "react";

export default function RequestQuotePage() {
  return (
    <div className="w-full flex justify-center bg-white text-black pt-32 pb-20 px-6">
      <div className="max-w-4xl w-full space-y-16">

        {/* Header Section */}
        <section className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold">
            Request a Quote
          </h1>
          <p className="text-gray-700 text-lg leading-relaxed">
            Getting started with Materia Solutions is simple. Share the details of your part, material, or project, and our engineers will provide a tailored, competitive quote with fast turnaround options.
          </p>
        </section>

        {/* Info Section */}
        <section className="bg-gray-50 p-10 rounded-2xl shadow-lg border border-gray-200 space-y-6">
          <h2 className="text-2xl font-bold text-gray-900">What to Include:</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Part or material specifications</li>
            <li>Quantity and size of components</li>
            <li>Required testing or analysis (e.g., failure analysis, metallography, NDE)</li>
            <li>Applicable standards or certifications</li>
            <li>Any relevant drawings, images, or technical data</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-6">How It Works:</h2>
          <ol className="list-decimal pl-6 space-y-2 text-gray-700">
            <li>Fill out the form below with your project details.</li>
            <li>Our engineering team reviews your submission and may follow up with clarifying questions.</li>
            <li>Receive a clear, written quote with recommended testing options and turnaround times.</li>
          </ol>

          <p className="text-gray-700 mt-4">
            All submissions are confidential, and we handle EAR-controlled materials and technical data in full compliance with U.S. regulations.
          </p>
        </section>

        {/* Microsoft Form Embed Section */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center">
            Submit Your Request
          </h2>
          <p className="text-gray-700 text-center leading-relaxed">
            Please fill out the form below. We typically respond within 24 hours.
          </p>

          {/* Microsoft Form iframe */}
          <div className="w-full h-[900px]">
            <iframe
              src="https://forms.office.com/Pages/ResponsePage.aspx?id=YOUR_FORM_ID"
              width="100%"
              height="100%"
              frameBorder="0"
              className="rounded-xl shadow-md"
              title="Request a Quote Form"
            ></iframe>
          </div>
        </section>
      </div>
    </div>
  );
}
