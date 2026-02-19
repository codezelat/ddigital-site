"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

const texts = ["Stand Out", "Succeed", "Wow", "Convert"];

export default function HeroSection() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  const handleButtonClick = () => {
    let scrollDistance = 500;

    if (window.innerWidth < 768) {
      scrollDistance = 1000;
    }

    window.scrollTo({
      top: window.scrollY + scrollDistance,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div
        className="flex flex-col md:flex-row p-0 lg:p-5 m-2 sm:m-5 mt-40 md:mt-60 lg:mt-40 min-h-[50vh]"
        id="home"
      >
        <div className="w-full lg:w-2/3 text-center md:text-start flex flex-col justify-center">
          <p className="text-6xl md:text-7xl lg:text-9xl mb-4 font-semibold">
            Designs
          </p>
          <p className="text-6xl md:text-7xl lg:text-9xl font-semibold">That</p>
          <p className="text-6xl md:text-7xl lg:text-9xl font-semibold">
            {texts[currentTextIndex]}
          </p>
        </div>
        <div className="w-full lg:w-1/3 ">
          <div className="h-full flex items-center justify-center lg:justify-left">
            <button
              onClick={handleButtonClick}
              className="p-2 mx-4 text-4xl lg:text-7xl text-white font-semibold bg-black rounded-full flex items-center justify-center w-36 h-36 lg:w-48 lg:h-48 mt-6 lg:mt-0 "
            >
              <FontAwesomeIcon icon={faPlay} height={120} width={120} beat />
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row mt-10">
        <div className="w-full lg:w-3/5 hidden sm:block "></div>
        <div className="w-full lg:w-1/3 text-xl lg:text-2xl mx-4 md:mx-6 lg:mx-0">
          At Ddigital, our mission is to provide small businesses and startups
          in Sri Lanka with accessible, high-quality design and digital media
          solutions that propel their growth.
        </div>
      </div>
    </>
  );
}
