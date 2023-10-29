"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./services-section.module.css";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const servicesData = [
  {
    title: "Branding",
    imageUrl1: "/img/services-hover/1.jpg",
    imageUrl2: "/img/services/1.svg",
    link: "https://bit.ly/branding-with-ddigital",
    isHovered: false,
  },
  {
    title: "Graphic Design",
    imageUrl1: "/img/services-hover/2.jpg",
    imageUrl2: "/img/services/2.svg",
    link: "https://bit.ly/graphic-design-with-ddigital",
    isHovered: false,
  },
  {
    title: "Packaging Design",
    imageUrl1: "/img/services-hover/3.jpg",
    imageUrl2: "/img/services/3.svg",
    link: "https://bit.ly/packaging-design-with-ddigital",
    isHovered: false,
  },
  {
    title: "Creative Content",
    imageUrl1: "/img/services-hover/4.jpg",
    imageUrl2: "/img/services/4.svg",
    link: "https://bit.ly/creative-content-with-ddigital",
    isHovered: false,
  },
  {
    title: "Photography and Videography",
    imageUrl1: "/img/services-hover/5.jpg",
    imageUrl2: "/img/services/5.svg",
    link: "https://bit.ly/photography-and-videography-with-ddigital",
    isHovered: false,
  },
];

export default function ServicesSection() {
  const [showInnerDiv, setShowInnerDiv] = useState(null as any);

  const handleMouseEnter = (index: number) => {
    setShowInnerDiv(index);
  };

  const handleMouseLeave = () => {
    setShowInnerDiv(null);
  };

  return (
    <div id="services" className="lg:p-5 m-2 sm:mx-5 mt-24 lg:mt-32">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-2/3 ">
          <h1 className="text-4xl lg:text-5xl mb-4 font-semibold">
            Our Services
          </h1>
        </div>
        <div className="lg:w-1/3">
          <div className=" text-lg lg:text-3xl text-black font-semibold flex items-center justify-center float-left lg:float-right">
            {/* <Link href="/all-services">
              <FontAwesomeIcon
                icon={faArrowRight}
                className="bg-black rounded-2xl text-white p-3 lg:p-4 mr-4"
                height={24}
                width={24}
              />
              Explore All Services
            </Link> */}
          </div>
        </div>
      </div>
      {servicesData.map((service, index) => (
        <div
          className="mt-20 text-white relative overflow-hidden"
          key={index + 1}
        >
          <div
            className={`outer-service-div relative flex flex-col justify-end lg:justify-start items-center lg:flex-row bg-white rounded-xl w-full h-96`}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave()}
          >
            <Image
              className="rounded-xl"
              src={`${service.imageUrl1}`}
              alt={service.title}
              loading="lazy"
              objectFit="cover"
              layout="fill"
            />
            <div className="z-20 h-fit md:w-2/3 flex flex-col items-center justify-center bg-black bg-opacity-50 px-10 py-16 rounded-xl w-fit">
              <span className="text-3xl md:text-4xl lg:text-7xl font-semibold text-center text-white mb-8">
                {service.title}
              </span>
              <Link
                href={`${service.link}`}
                className="text-md lg:text-2xl font-semibold flex items-center text-center text-white"
              >
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="bg-white rounded-md text-black p-3 lg:p-4 mr-4"
                  height={18}
                  width={18}
                />
                Learn More
              </Link>
            </div>
          </div>

          <div
            className={`z-30 inner-service-div absolute top-0 left-0 flex flex-col lg:flex-row bg-[#222222] rounded-xl items-center justify-center content-center p-4 md:p-8 border-0 w-full h-96 ${
              showInnerDiv === index ? styles.hideInnerDiv : styles.showInnerDiv
            }`}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave()}
          >
            <div className="lg:w-1/3 justify-center items-center m-2 rounded-xl content-center flex p-4">
              <Image
                className="rounded-xl w-80 h-56 lg:h-72 object-contain"
                src={`${service.imageUrl2}`}
                alt="Image Description"
                width={200}
                height={200}
              />
            </div>
            <div className="lg:w-2/3 flex flex-col justify-center items-center">
              <span className="text-2xl lg:text-7xl font-semibold text-center text-white mb-5">
                {service.title}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
