export default function Consultation() {
  return (
    <main className="min-h-screen p-10">
      <h1 className="text-4xl font-bold mb-6">Free Consultation</h1>
      <p className="mb-4 text-lg">
        Schedule a free consultation with our experts to discuss your business needs.
      </p>
      <iframe
        src="https://calendly.com/YOUR_CALENDLY_USERNAME"
        width="100%"
        height="700"
        frameBorder="0"
        title="Schedule Consultation"
      ></iframe>
    </main>
  );
}
