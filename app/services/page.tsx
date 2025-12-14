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
          <ol className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
            <li>Fractures and crack initiation</li>
            <li>Fatigue and overload failures</li>
            <li>Overtemperature events and thermal degradation</li>
            <li>Corrosion and environmental degradation</li>
            <li>Material defects, inclusions, and porosity</li>
            <li>Wear, abrasion, and fretting</li>
            <li>Heat-treatment and processing issues</li>
            <li>Coating failures and delamination</li>
          </ol>

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

      
        {/* Section Container */}
        <div className="bg-gray-50 shadow-xl rounded-2xl p-10 border border-gray-200 mt-20">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            2. Metallography & Materials Characterization Services
          </h2>

          <p className="text-gray-700 leading-relaxed mb-8">
            We provide comprehensive metallography services to characterize the microstructure, surface
            condition, and material integrity of metals, alloys, and composites. Our analyses support
            aerospace manufacturers in quality assurance, failure investigations, supplier evaluation, and
            process verification.
          </p>

          {/* Bulleted List */}
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
            <li>General microstructure evaluation</li>
            <li>Grain size and distribution analysis</li>
            <li>Surface machining evaluation</li>
            <li>Overtemperature event assessment and thermal degradation</li>
            <li>Plating and coating thickness measurement</li>
            <li>Micro-cleanliness and contamination analysis</li>
            <li>Macrostructure and grain flow examination</li>
            <li>Carbide distribution analysis</li>
            <li>Intergranular attack (IGA) / intergranular oxidation (IGO) assessment</li>
            <li>Decarburization and alloy depletion evaluation</li>
            <li>Casting/mold reactions and defects</li>
            <li>Dendritic arm spacing (DAS) analysis</li>
            <li>Statistical area and shape analysis</li>
            <li>Weld evaluations and joint characterization</li>
            <li>Porosity measurement</li>
            <li>Alpha case evaluation</li>
            <li>Diffusion layer analysis</li>
            <li>Carburization assessment</li>
            <li>Near-surface condition evaluation</li>
            <li>Volume fraction determination</li>
            <li>Phase transformation analysis</li>
            <li>Plus many other specialized metallography and materials examinations</li>
          </ul>


          <h3 className="text-xl font-semibold mb-4 text-gray-900">Our services include:</h3>

          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
            <li>High-resolution imaging and documentation</li>
            <li>Detailed reporting with observations and quantitative analysis</li>
            <li>Insights to support design decisions, process optimization, and failure prevention</li>
          </ul>

          <p className="text-gray-700 leading-relaxed border-t pt-6">
            We combine advanced metallographic techniques with our expertise in aerospace materials to provide actionable, defensible data for engineers and quality teams
          </p>
        </div>

      </div>
    </div>
  );
}