import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";

const serviceLinks = [
  {
    imageSrc:
      "https://img.freepik.com/free-psd/business-company-landing-page-template_23-2148924995.jpg?w=1380&t=st=1688964129~exp=1688964729~hmac=5f4f1a1d5e243dc998ee58c745e139b8f5299bfcf261fc33b35e633c3c7a5d49",
    hoverImageSrc:
      "https://img.freepik.com/free-photo/web-design-technology-browsing-programming-concept_53876-163260.jpg?w=826&t=st=1688963719~exp=1688964319~hmac=1beb954c72a77cb66e1c7bad1cb41befc57fd8fcfa8704ae78362a4e306e2461",
    title: "GEMINI SKINCARE",
    category: "Web Design",
    href: "/post",
  },
  {
    imageSrc:
      "https://img.freepik.com/free-psd/business-company-landing-page-template_23-2148924995.jpg?w=1380&t=st=1688964129~exp=1688964729~hmac=5f4f1a1d5e243dc998ee58c745e139b8f5299bfcf261fc33b35e633c3c7a5d49",
    hoverImageSrc:
      "https://img.freepik.com/free-photo/web-design-technology-browsing-programming-concept_53876-163260.jpg?w=826&t=st=1688963719~exp=1688964319~hmac=1beb954c72a77cb66e1c7bad1cb41befc57fd8fcfa8704ae78362a4e306e2461",
    title: "GEMINI SKINCARE",
    category: "Web Design",
    href: "/post",
  },
  {
    imageSrc:
      "https://img.freepik.com/free-psd/business-company-landing-page-template_23-2148924995.jpg?w=1380&t=st=1688964129~exp=1688964729~hmac=5f4f1a1d5e243dc998ee58c745e139b8f5299bfcf261fc33b35e633c3c7a5d49",
    hoverImageSrc:
      "https://img.freepik.com/free-photo/web-design-technology-browsing-programming-concept_53876-163260.jpg?w=826&t=st=1688963719~exp=1688964319~hmac=1beb954c72a77cb66e1c7bad1cb41befc57fd8fcfa8704ae78362a4e306e2461",
    title: "GEMINI SKINCARE",
    category: "Web Design",
    href: "/post",
  },
  {
    imageSrc:
      "https://img.freepik.com/free-psd/business-company-landing-page-template_23-2148924995.jpg?w=1380&t=st=1688964129~exp=1688964729~hmac=5f4f1a1d5e243dc998ee58c745e139b8f5299bfcf261fc33b35e633c3c7a5d49",
    hoverImageSrc:
      "https://img.freepik.com/free-photo/web-design-technology-browsing-programming-concept_53876-163260.jpg?w=826&t=st=1688963719~exp=1688964319~hmac=1beb954c72a77cb66e1c7bad1cb41befc57fd8fcfa8704ae78362a4e306e2461",
    title: "GEMINI SKINCARE",
    category: "Web Design",
    href: "/post",
  },
];

const Services: React.FC = () => {

  return (
    <div id="services" className="p-5 m-2 sm:m-5 lg:mt-32">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-2/3 ">
            <h1 className="text-4xl lg:text-5xl mb-4 font-semibold">
              Our Services
            </h1>
          </div>
          <div className="lg:w-1/3">
            <div className=" text-lg lg:text-3xl text-black font-semibold flex items-center justify-center float-left lg:float-right">
              <Link href="/all-services">
                <i className="fas fa-arrow-right bg-black text-white rounded-2xl p-3 lg:p-4 mr-4"></i>{" "}
                View Services
              </Link>
            </div>
          </div>
        </div>
        <div className=" mt-20 text-white">
          <div className="flex flex-col lg:flex-row bg-black rounded-xl p-10 mb-5 shadow-2xl">
            <div className="lg:w-1/3 justify-center items-center m-2 rounded-xl">
              <Image
                className=" m-5 rounded-xl"
                src="https://img.freepik.com/free-vector/website-interface-development-planning-devops-team-flat-characters-working-ui-ux-content-design-computer-software-creation-web-development_335657-2645.jpg?w=740&t=st=1688927928~exp=1688928528~hmac=ec2bf68fb2551a3d937c04571991b7edc8ecccef4978fe5f186ea6424dabb6ea"
                alt="Image Description"
                width={500}
                height={500}
              />
            </div>
            <div className="lg:w-2/3 flex items-center justify-center">
              <h1 className="text-5xl lg:text-7xl font-semibold text-center text-white mb-5">
                Poster Design
              </h1>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row bg-white rounded-xl p-10 mb-5 shadow-2xl">
            <div className="lg:w-1/3 justify-center items-center m-2">
              <Image
                src="https://img.freepik.com/free-vector/website-interface-development-planning-devops-team-flat-characters-working-ui-ux-content-design-computer-software-creation-web-development_335657-2645.jpg?w=740&t=st=1688927928~exp=1688928528~hmac=ec2bf68fb2551a3d937c04571991b7edc8ecccef4978fe5f186ea6424dabb6ea"
                alt="Image Description"
                width={500}
                height={500}
              />
            </div>
            <div className="lg:w-2/3 flex flex-col justify-center items-center">
              <h1 className="text-5xl lg:text-7xl font-semibold text-center text-black mb-5">
                Poster Design
              </h1>
              <Link
                href="/all-services"
                className="text-xl lg:text-2xl font-semibold flex items-center text-center mt-4 text-black"
              >
                <i className="fas fa-arrow-right bg-black rounded-full text-white p-3 lg:p-4 mr-4"></i>{" "}
                View Services
              </Link>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Services;