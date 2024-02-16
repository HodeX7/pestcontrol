import Footer from "@/components/Footer";
import "./globals.css";
import NavBar from "@/components/NavBar";

export const metadata = {
  title: "PestControl",
  description: "Next Generation - Pest Control",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="root w-full h-full relative flex justify-center">
          <NavBar />
          {children}
        </div>

        <Footer />
      </body>
    </html>
  );
}
