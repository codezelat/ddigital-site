import AboutSection from "./components/about-section/about-section";
import ContactSection from "./components/contact-section/contact-section";
import HeroSection from "./components/hero-section/hero-section";
import ServicesSection from "./components/services-section/services-section";
import TestimonialsSection from "./components/testimonials-section/testimonials-section";
import WorkSection from "./components/work-section/work-section";
import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Ddigital - Ultimate Digital Media Hub based in Sri Lanka',
  description: 'Discover a world of creativity, innovation, and excellence at Ddigital, your premier destination for all things media in Sri Lanka. Our passionate team at DDigital: Digital Media Hub based in Sri Lanka, specializes in digital design, photography, videography, and more, offering diverse solutions tailored to meet your unique media needs.',
  keywords: ['Ddigital', 'Media Agency', 'Graphic Design', 'Branding', 'Creative Content', 'Sri Lanka'],
  authors: [{ name: 'Codezela Technologies', url: 'https://codezela.com' }],
  openGraph: {
    title: 'Ddigital - Ultimate Digital Media Hub based in Sri Lanka',
    description: 'Discover a world of creativity, innovation, and excellence at Ddigital, your premier destination for all things media in Sri Lanka. Our passionate team at DDigital: Digital Media Hub based in Sri Lanka, specializes in digital design, photography, videography, and more, offering diverse solutions tailored to meet your unique media needs.',
    url: 'https://ddigital.lk',
    siteName: 'Ddigtial',
    images: [
      {
        url: 'https://ddigital.lk/img/brand/banner.jpg',
        width: 2000,
        height: 350,
        alt: 'Ddigital - Media Agency in Sri Lanka',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}

export default function Home() {
  return (
    <main className="px-4 md:px-8 lg:px-12">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WorkSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  );
}
