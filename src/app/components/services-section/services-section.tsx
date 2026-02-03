"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./services-section.module.css";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import services from "../../data/services";

export default function ServicesSection() {
  const [showInnerDiv, setShowInnerDiv] = useState<number | null>(null);

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
            {/* Intentionally blank for now; CTA lives inside services page */}
          </div>
        </div>
      </div>
      {services.map((service, index) => (
        <div
          className="mt-20 text-white relative overflow-hidden"
          key={service.slug}
        >
          <div
            className="outer-service-div relative flex flex-col justify-end lg:justify-start items-center lg:flex-row bg-white rounded-xl w-full min-h-[26rem] md:min-h-[24rem] lg:min-h-[26rem]"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <Image
              className="rounded-xl object-cover"
              src={service.imageUrl1}
              alt={service.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={index === 0}
              placeholder="blur"
              blurDataURL={service.blurUrl}
            />
            <div className="z-20 h-fit md:w-2/3 flex flex-col items-center justify-center bg-black bg-opacity-50 px-6 md:px-10 py-10 md:py-16 rounded-xl w-[90%] md:w-fit text-center">
              <span className="text-3xl md:text-4xl lg:text-6xl font-semibold text-center text-white mb-6 md:mb-8">
                {service.title}
              </span>
              <Link
                href={`/services/${service.slug}`}
                className="text-md lg:text-2xl font-semibold flex items-center text-center text-white gap-3"
              >
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="bg-white rounded-md text-black p-3 lg:p-4"
                  height={18}
                  width={18}
                />
                Learn More
              </Link>
            </div>
          </div>

          <div
            className={`z-30 inner-service-div absolute top-0 left-0 flex flex-col lg:flex-row bg-[#222222] rounded-xl items-center justify-center content-center p-4 md:p-8 border-0 w-full min-h-[26rem] md:min-h-[24rem] lg:min-h-[26rem] ${
              showInnerDiv === index ? styles.hideInnerDiv : styles.showInnerDiv
            }`}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="lg:w-1/3 justify-center items-center m-2 rounded-xl content-center flex p-4">
              <Image
                className="rounded-xl w-80 h-56 lg:h-72 object-contain"
                src={service.imageUrl2}
                alt={service.title}
                width={200}
                height={200}
                placeholder="blur"
              blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
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
