"use client";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "./about-section.modules.css";

export default function AboutSection() {
  return (
    <div id="about" className="flex flex-col lg:flex-row mt-16 m-0 sm:m-5">
      <div className=" lg:w-3/5 bg-[#222222] text-white rounded-xl lg:m-5 p-5 shadow-2xl">
        <h2 className="text-3xl lg:text-4xl font-semibold text-center mt-12">
          Who We Are
        </h2>
        <p className="text-lg lg:text-xl text-center mt-2">
          &ldquo;Digitally Designed, Diversely Developed, Dedicated to Excellence!&rdquo;
        </p>
        <p className="text-md lg:text-lg mb-4 font-md text-justify mt-4 lg:m-6">
          <span className="font-semibold">Ddigital</span> is a dynamic design
          agency and digital media services provider based in the vibrant heart
          of Colombo, Sri Lanka. Our journey is deeply intertwined with the rich
          heritage and innovative spirit of this beautiful island nation. Our
          Vision is to be the catalyst for transformation in the digital
          landscape of Sri Lanka, empowering small businesses and startups with
          affordable, industry-grade design and digital media services. We
          aspire to nurture and elevate fresh talent, bridging the gap between
          creativity and professionalism, while leaving an indelible mark of
          success on our clients&apos; endeavors.
        </p>
      </div>
      <div className="lg:w-2/5 mt-20 lg:mt-5 bg-black text-white items-center justify-center rounded-xl lg:m-5 p-5 shadow-2xl">
        <LiteYouTubeEmbed
          id="A90XpRc5ke0"
          title="Ddigital - Your One-Spot Digital Media Hub"
          poster="hqdefault"
          webp
        />
      </div>
      <div id="about-video-player" className="d-none"></div>
    </div>
  );
}
