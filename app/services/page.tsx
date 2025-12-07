import React from "react";

export default function ServicesPage() {
  return (
    <div className="w-full flex justify-center bg-white text-black pt-32 pb-20 px-6">
      <div className="max-w-4xl w-full">
        {/* Header */}
        <h1 className="text-4xl font-extrabold tracking-tight mb-6 text-center">
          Our Services
        </h1>

        {/* Intro Paragraph */}
        <p className="text-lg leading-relaxed text-gray-700 mb-12 text-center">
          At Materia Solutions, we provide advanced materials testing, characterization, and
          failure analysis services tailored for aerospace components, materials, and assemblies.
          Our team combines engineering expertise with state-of-the-art laboratory capabilities to
          deliver actionable, defensible insights that support quality assurance, supplier
          management, and product improvement.
        </p>

        {/* Section Container */}
        <div className="bg-gray-50 shadow-xl rounded-2xl p-10 border border-gray-200">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            1. Failure Analysis Services
          </h2>

          <p className="text-gray-700 leading-relaxed mb-8">
            We provide comprehensive failure analysis for aerospace components, materials, and
            assemblies. Our capabilities include optical imaging, scanning electron microscopy (SEM),
            EDS elemental analysis, metallographic sectioning, hardness testing, and advanced
            nondestructive evaluation (NDE) techniques such as C-SAM (acoustic microscopy), industrial
            X-ray, and CT scanning.
          </p>

          {/* Bulleted List */}
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
            <li>Fractures and crack initiation</li>
            <li>Fatigue and overload failures</li>
            <li>Overtemperature events and thermal degradation</li>
            <li>Corrosion and environmental degradation</li>
            <li>Material defects, inclusions, and porosity</li>
            <li>Wear, abrasion, and fretting</li>
            <li>Heat-treatment and processing issues</li>
            <li>Coating failures and delamination</li>
          </ul>

          <h3 className="text-xl font-semibold mb-4 text-gray-900">Each investigation includes:</h3>

          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
            <li>High-resolution imaging and documentation</li>
            <li>Root-cause determination</li>
            <li>Analysis of contributing factors</li>
            <li>Recommendations to prevent recurrence</li>
            <li>Optional design or manufacturing feedback</li>
          </ul>

          <p className="text-gray-700 leading-relaxed border-t pt-6">
            Our goal is to deliver clear, defensible engineering conclusions that support quality
            assurance, supplier management, incident investigations, and product improvement efforts.
          </p>
        </div>
      </div>
    </div>
  );
}