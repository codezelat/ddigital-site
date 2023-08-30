import AboutSection from "./components/about-section/about-section";
import ContactSection from "./components/contact-section/contact-section";
import HeroSection from "./components/hero-section/hero-section";
import ServicesSection from "./components/services-section/services-section";
import TestimonialsSection from "./components/testimonials-section/testimonials-section";
import WorkSection from "./components/work-section/work-section";

export default function Home() {
  return (
    <main className="px-12">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WorkSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  );
}
