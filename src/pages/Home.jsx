import Hero from "@/components/home/Hero";
import TrustedByAndStats from "@/components/home/TrustedByAndStats";
import ServicesSection from "@/components/home/Servicessection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ProcessSection from "@/components/home/ProcessSection";
import TestimonialsNewsletter from "@/components/home/TestimonialsNewsletter";
import BlogSection from "@/components/home/BlogSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <TrustedByAndStats />
      <ServicesSection />
      <WhyChooseUs />
      <ProcessSection />
      <TestimonialsNewsletter />
      <BlogSection />
    </main>
  );
}