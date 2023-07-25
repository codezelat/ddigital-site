"use client";

import Feedbacks from "./components/feedbacks";
import BrandSlider from "./components/clientslider";
import VideoPlayer from "./components/aboutvideo";
import Services from "./components/services";
import Projects from "./components/projects";
import Hero from "./components/hero";
import About from "./components/about";
import Contact from "./components/contact";

export default function Home() {
  return (
    <>
      <Hero/>
      <About/>
      <Services/>
      <Projects/>
      <Feedbacks/>
      <BrandSlider/>
      <Contact/>
    </>
  );
}
