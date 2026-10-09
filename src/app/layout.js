import { Playfair_Display, Inter } from "next/font/google";
import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import ContactDetialsStrip from "@/components/navbar/ContactDetialsStrip";
import Footer from "@/components/common/Footer";
import CursorFollower from "@/components/common/CursorFollower";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Tech Alphonic - Your Trusted IT Partner",
  description:
    "TechAlphonic - Digital Marketing, Web Development, AI Automation and Branding Solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-background text-foreground antialiased font-sans">
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