import React, { useState, useEffect } from "react";
import style from "../../styles/home.module.css";
import Link from "next/link";

const Hero: React.FC = () => {
  const texts = ["Stand Out", "Impress", "Wow", "Rebel"];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 1500);

    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <>
      <div className="flex flex-col md:flex-row p-0 lg:p-5 m-2 sm:m-5 mt-40 md:mt-60 lg:mt-40">
        <div className="w-full lg:w-2/3 text-center md:text-start">
          <h1 className="text-6xl md:text-7xl lg:text-9xl mb-4 font-semibold">Designs</h1>
          <h1 className="text-6xl md:text-7xl lg:text-9xl font-semibold">That</h1>
          <h1 className="text-6xl md:text-7xl lg:text-9xl font-semibold">
            {texts[currentTextIndex]}
          </h1>
        </div>
        <div className="w-full lg:w-1/3 ">
          <div className="h-full flex items-center justify-center lg:justify-left">
            <Link
              href="#about-video"
              className="p-2 mx-4 text-4xl lg:text-7xl text-white font-semibold bg-black rounded-full flex items-center justify-center w-36 h-36 lg:w-48 lg:h-48 mt-6 lg:mt-0 "
            >
              <i className={`fas fa-play ${style.animate_zoom}`}></i>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row mt-10">
        <div className="w-full lg:w-3/5 hidden sm:block "></div>
        <div className="w-full lg:w-1/3 text-xl lg:text-2xl">
          At D. Digital, we develop eye-catching brands, design beautiful
          websites, and deliver campaigns that stand out from the norm.
        </div>
      </div>
    </>
  );
};

export default Hero;
