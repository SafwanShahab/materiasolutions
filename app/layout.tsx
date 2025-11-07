import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import "./globals.css";

export const metadata = {
  title: "Materia Solutions",
  description: "Business solutions and consulting services.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        {/* Navbar */}
        <Navbar />

        {/* Page content grows to fill space */}
        <main className="flex-grow min-h-[200vh]">
          {children}
        </main>

        {/* Footer at the bottom */}
        <footer className="bg-[#223241] text-white py-6 text-center">
          <p>© Materia Solutions 2025. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}

