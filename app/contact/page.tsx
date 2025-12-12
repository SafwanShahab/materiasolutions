import React from "react";

export default function AboutUsPage() {
  return (
    <div className="w-full flex justify-center bg-white text-black pt-32 pb-20 px-6">
      <div className="max-w-5xl w-full space-y-16">

        {/* Intro Section */}
        <section className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-center">
            About Materia Solutions
          </h1>
          <p className="text-gray-700 text-lg leading-relaxed">
            At Materia Solutions, we specialize in <span className="font-bold">advanced materials testing, characterization, and failure analysis</span> for aerospace components, materials, and assemblies. Our mission is to provide <span className="font-bold">clear, actionable insights</span> that help manufacturers and suppliers ensure quality, reliability, and regulatory compliance.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            We combine engineering expertise with state-of-the-art laboratory capabilities, including optical and electron microscopy, metallography, hardness testing, and advanced nondestructive evaluation (NDE) methods such as X-ray, CT scanning, and C-SAM acoustic microscopy. Our services are designed to support both commercial aerospace programs and EAR-controlled projects, providing clients with the data and analysis they need to make informed decisions.
          </p>
        </section>

        {/* Why Choose Section */}
        <section className="space-y-6 bg-gray-50 rounded-2xl p-10 shadow-lg border border-gray-200">
          <h2 className="text-3xl font-bold text-gray-900">Why Choose Materia Solutions</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li><span className="font-semibold">Expertise:</span> Our engineers bring hands-on experience in aerospace materials, failure analysis, and quality assurance.</li>
            <li><span className="font-semibold">Comprehensive Services:</span> From metallography and microstructure analysis to nondestructive evaluation and failure investigations, we offer end-to-end materials solutions.</li>
            <li><span className="font-semibold">Compliance Awareness:</span> We operate in full adherence with the U.S. Export Administration Regulations (EAR), ensuring all controlled materials and technical data are handled securely by authorized personnel.</li>
            <li><span className="font-semibold">Actionable Insights:</span> Our reports and analyses are designed to be clear, defensible, and directly useful for engineering, design, and quality teams.</li>
            <li><span className="font-semibold">Fast, Responsive Service:</span> We understand the pace of aerospace programs and strive to deliver timely, accurate results to support critical project timelines.</li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            At Materia Solutions, we are committed to advancing the safety, performance, and reliability of aerospace materials and components. Whether you need failure analysis, metallography, or nondestructive evaluation, we work closely with you to provide engineering solutions that meet your technical and regulatory requirements.
          </p>
        </section>

        {/* Contact Section */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center">Contact Us</h2>
          <p className="text-gray-700 text-center leading-relaxed">
            We’re here to help. Whether you have questions about our materials testing capabilities, need a quote, or want to schedule a consultation, our team is ready to assist.
          </p>
          <p className="text-gray-700 text-center mt-4">
            Email: info@materiasolutions.com
          </p>
          <p className="text-gray-700 text-center mt-4">
            Phone: [your phone number]
          </p>
          <p className="text-gray-700 text-center mt-4">
            Address: [your office/lab address]
          </p>
        </section>

        {/* EAR Compliance Section */}
        <section className="space-y-6 bg-gray-50 rounded-2xl p-10 shadow-lg border border-gray-200">
          <h2 className="text-3xl font-bold text-gray-900">EAR Compliance & Security</h2>
          <p className="text-gray-700 leading-relaxed">
            Our company adheres strictly to the U.S. Export Administration Regulations (EAR). To protect sensitive aerospace information, we implement:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>U.S.-person-only handling of controlled hardware and technical data</li>
            <li>Secure file transfer and storage for drawings, test data, and reports</li>
            <li>Controlled access protocols to prevent unauthorized disclosure</li>
            <li>Documented chain-of-custody for all received parts</li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            These procedures ensure that your EAR-governed components, materials, and technical information remain fully compliant and protected during all stages of testing and analysis.
          </p>
          <h3 className="text-xl font-semibold text-gray-900">ITAR Status</h3>
          <p className="text-gray-700 leading-relaxed">
            At this time, we support EAR-controlled projects only. We do not accept ITAR-restricted parts or technical data until ITAR registration is complete. If your organization is unsure whether a component or drawing falls under ITAR or EAR, we are happy to review classification guidance and help you determine the appropriate path before any data is transferred.
          </p>
          <h3 className="text-xl font-semibold text-gray-900">Security & Confidentiality</h3>
          <p className="text-gray-700 leading-relaxed">
            Your data, designs, and hardware are handled with the highest level of protection expected in aerospace and defense. We implement secure file transfer, encrypted storage, limited-access digital vaults, NDAs on request, and confidential disposal of temporary files.
          </p>
          <h3 className="text-xl font-semibold text-gray-900">Chain-of-Custody Procedures</h3>
          <p className="text-gray-700 leading-relaxed">
            We follow a documented chain-of-custody protocol to ensure aerospace components and material samples are tracked from arrival to final shipment. This ensures complete traceability and accountability for every part entrusted to us.
          </p>
        </section>
      </div>
    </div>
  );
}
