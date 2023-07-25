"use client";

import Feedbacks from "./components/section/feedbacks";
import BrandSlider from "./components/section/clientslider";
import VideoPlayer from "./components/aboutvideo";
import Services from "./components/section/services";
import Projects from "./components/section/projects";
import Hero from "./components/section/hero";
import About from "./components/section/about";
import Contact from "./components/section/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Projects />
      <Feedbacks />
      <BrandSlider />
      <Contact />
    </>
  );
}
