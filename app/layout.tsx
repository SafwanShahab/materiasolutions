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
      <body className="pt-20">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
