import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import ContactDetialsStrip from "@/components/navbar/ContactDetialsStrip";
import Footer from "@/components/common/Footer";
import CursorFollower from "@/components/common/CursorFollower";

export const metadata = {
  title: "Tech Alphonic - Your Trusted IT Partner",
  description:
    "TechAlphonic - Digital Marketing, Web Development, AI Automation and Branding Solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground antialiased">
         <CursorFollower />

        <header className="fixed left-0 right-0 top-0 z-[9999]">
          <ContactDetialsStrip />
          <Navbar />
        </header>

        <main className="pt-[112px]">
          {children}
        </main>

        <Footer/>
      </body>
    </html>
  );
}