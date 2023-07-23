"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
  const texts = ["Stant Out", "Impress", "Wow", "Rebel"];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 1500);

    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <>
      <div className="flex flex-col lg:flex-row p-5 mt-0 lg:mt-20">
        <div className="w-full lg:w-2/3">
          <h1 className="text-6xl lg:text-9xl mb-4 font-semibold">Designs</h1>
          <h1 className="text-6xl lg:text-9xl font-semibold">That</h1>
          <h1 className="text-6xl lg:text-9xl font-semibold">
            {texts[currentTextIndex]}
          </h1>
        </div>
        <div className="w-full lg:w-1/3">
          <div className="mb-9 text-center lg:text-right flex items-center justify-center">
            <Link
              href="/add"
              className="p-2 mx-4 text-2xl lg:text-7xl text-white font-semibold bg-black rounded-full flex items-center justify-center lg:float-right w-24 h-24 lg:w-48 lg:h-48 mt-6 lg:mt-0 float-right"
            >
              <i className="fas fa-play"></i>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row p-5 mt-0 lg:mt-14">
        <div className="w-full lg:w-2/3"></div>
        <div className="w-full lg:w-1/3 text-xl lg:text-2xl">
          At Zorro Design, we develop eye-catching brands, design beautiful
          websites, and deliver campaigns that stand out from the norm.
        </div>
      </div>
    </>
  );
}
