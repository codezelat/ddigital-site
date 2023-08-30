"use client";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "./about-section.modules.css";

export default function AboutSection() {
  return (
    <div id="about" className="flex flex-col lg:flex-row mt-16 m-0 sm:m-5">
      <div className=" lg:w-3/5 bg-black text-white rounded-xl lg:m-5 p-5 shadow-2xl">
        <h2 className="text-3xl lg:text-4xl font-semibold text-center mt-12">
          About
        </h2>
        <p className="text-lg text-center">I am a subway</p>
        <p className="text-lg lg:text-xl mb-4 font-md text-justify mt-5 lg:m-10">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
      <div className="lg:w-2/5 bg-black text-white items-center justify-center rounded-xl lg:m-5 p-5 shadow-2xl">
        <LiteYouTubeEmbed
          id="HaEPXoXVf2k"
          title="Amazon DynamoDB Deep Dive"
          poster="hqdefault"
          webp
        />
      </div>
    </div>
  );
}
