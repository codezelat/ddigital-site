import AboutSection from "./components/about-section/about-section";
import ContactSection from "./components/contact-section/contact-section";
import HeroSection from "./components/hero-section/hero-section";
import ServicesSection from "./components/services-section/services-section";
import TestimonialsSection from "./components/testimonials-section/testimonials-section";
import WorkSection from "./components/work-section/work-section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ddigital - Ultimate Digital Media Hub based in Sri Lanka",
  description:
    "Discover a world of creativity, innovation, and excellence at Ddigital, your premier destination for all things media in Sri Lanka. Our passionate team specializes in digital design, photography, videography, and more, offering diverse solutions tailored to meet your unique media needs.",
  keywords: [
    "ddigital Sri Lanka",
    "digital media hub",
    "creative agency",
    "photography services",
    "videography services",
    "digital design Sri Lanka",
    "media production",
    "content creation",
  ],
  openGraph: {
    title: "Ddigital - Ultimate Digital Media Hub based in Sri Lanka",
    description:
      "Discover a world of creativity, innovation, and excellence at Ddigital, your premier destination for all things media in Sri Lanka. Our passionate team specializes in digital design, photography, videography, and more, offering diverse solutions tailored to meet your unique media needs.",
    url: "https://ddigital.lk",
    siteName: "Ddigital - Digital Media Hub",
    images: [
      {
        url: "/img/brand/banner.jpg",
        width: 2000,
        height: 350,
        alt: "Ddigital - Ultimate Digital Media Hub in Sri Lanka",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ddigital - Ultimate Digital Media Hub based in Sri Lanka",
    description:
      "Discover creativity, innovation, and excellence at Ddigital, your premier destination for media services in Sri Lanka. Digital design, photography, videography, and more.",
    images: ["/img/brand/banner.jpg"],
    site: "@ddigital_lk",
    creator: "@ddigital_lk",
  },
  alternates: {
    canonical: "https://ddigital.lk",
  },
};

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
