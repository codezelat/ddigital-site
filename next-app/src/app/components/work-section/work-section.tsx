"use client";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { use } from "react";

const worksData = [
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
      "https://img.freepik.com/free-psd/busins-company-landing-page-template_23-2148924995.jpg?w=1380&t=st=1688964129~exp=1688964729~hmac=5f4f1a1d5e243dc998ee58c745e139b8f5299bfcf261fc33b35e633c3c7a5d49",
    hoverImageSrc:
      "https://img.freepik.com/free-photo/web-design-technology-browsing-programming-concept_53876-163260.jpg?w=826&t=st=1688963719~exp=1688964319~hmac=1beb954c72a77cb66e1c7bad1cb41befc57fd8fcfa8704ae78362a4e306e2461",
    title: "GEMINI SKINCARE",
    category: "Web Design",
    href: "/post",
  },
  {
    imageSrc:
      "https://img.freepik.com/free-psd/busness-company-landing-page-template_23-2148924995.jpg?w=1380&t=st=1688964129~exp=1688964729~hmac=5f4f1a1d5e243dc998ee58c745e139b8f5299bfcf261fc33b35e633c3c7a5d49",
    hoverImageSrc:
      "https://img.freepik.com/free-photo/web-design-technology-browsing-programming-concept_53876-163260.jpg?w=826&t=st=1688963719~exp=1688964319~hmac=1beb954c72a77cb66e1c7bad1cb41befc57fd8fcfa8704ae78362a4e306e2461",
    title: "GEMINI ",
    category: "Web Design",
    href: "/post",
  },
  {
    imageSrc:
      "https://img.freepik.com/fre-psd/business-company-landing-page-template_23-2148924995.jpg?w=1380&t=st=1688964129~exp=1688964729~hmac=5f4f1a1d5e243dc998ee58c745e139b8f5299bfcf261fc33b35e633c3c7a5d49",
    hoverImageSrc:
      "https://img.freepik.com/free-photo/web-design-technology-browsing-programming-concept_53876-163260.jpg?w=826&t=st=1688963719~exp=1688964319~hmac=1beb954c72a77cb66e1c7bad1cb41befc57fd8fcfa8704ae78362a4e306e2461",
    title: "GEMINI SKINCARE",
    category: "Web Design",
    href: "/post",
  },
  {
    imageSrc:
      "https://img.freepik.com/fre-psd/business-company-landing-page-template_23-2148924995.jpg?w=1380&t=st=1688964129~exp=1688964729~hmac=5f4f1a1d5e243dc998ee58c745e139b8f5299bfcf261fc33b35e633c3c7a5d49",
    hoverImageSrc:
      "https://img.freepik.com/free-photo/web-design-technology-browsing-programming-concept_53876-163260.jpg?w=826&t=st=1688963719~exp=1688964319~hmac=1beb954c72a77cb66e1c7bad1cb41befc57fd8fcfa8704ae78362a4e306e2461",
    title: "GEMINI SKINCARE",
    category: "Web Design",
    href: "/post",
  },
  {
    imageSrc:
      "https://img.freepik.com/fre-psd/business-company-landing-page-template_23-2148924995.jpg?w=1380&t=st=1688964129~exp=1688964729~hmac=5f4f1a1d5e243dc998ee58c745e139b8f5299bfcf261fc33b35e633c3c7a5d49",
    hoverImageSrc:
      "https://img.freepik.com/free-photo/web-design-technology-browsing-programming-concept_53876-163260.jpg?w=826&t=st=1688963719~exp=1688964319~hmac=1beb954c72a77cb66e1c7bad1cb41befc57fd8fcfa8704ae78362a4e306e2461",
    title: "GEMINI SKINCARE",
    category: "Web Design",
    href: "/post",
  },
  {
    imageSrc:
      "https://img.freepik.com/fre-psd/business-company-landing-page-template_23-2148924995.jpg?w=1380&t=st=1688964129~exp=1688964729~hmac=5f4f1a1d5e243dc998ee58c745e139b8f5299bfcf261fc33b35e633c3c7a5d49",
    hoverImageSrc:
      "https://img.freepik.com/free-photo/web-design-technology-browsing-programming-concept_53876-163260.jpg?w=826&t=st=1688963719~exp=1688964319~hmac=1beb954c72a77cb66e1c7bad1cb41befc57fd8fcfa8704ae78362a4e306e2461",
    title: "GEMINI SKINCARE",
    category: "Web Design",
    href: "/post",
  },
  {
    imageSrc:
      "https://img.freepik.com/fre-psd/business-company-landing-page-template_23-2148924995.jpg?w=1380&t=st=1688964129~exp=1688964729~hmac=5f4f1a1d5e243dc998ee58c745e139b8f5299bfcf261fc33b35e633c3c7a5d49",
    hoverImageSrc:
      "https://img.freepik.com/free-photo/web-design-technology-browsing-programming-concept_53876-163260.jpg?w=826&t=st=1688963719~exp=1688964319~hmac=1beb954c72a77cb66e1c7bad1cb41befc57fd8fcfa8704ae78362a4e306e2461",
    title: "GEMINI SKINCARE",
    category: "Web Design",
    href: "/post",
  },
];

export default function WorkSection() {
  return (
    <div id="projects" className="lg:p-5 m-2 sm:m-5 mt-24 md:mt-28 lg:mt-32">
      <div className="flex flex-col lg:flex-row mb-6 ">
        <div className="lg:w-2/3 ">
          <h1 className="text-4xl lg:text-5xl mb-4 font-semibold">Our Work</h1>
        </div>
        <div className="lg:w-1/3">
          <div className=" text-lg lg:text-3xl text-black font-semibold flex items-center justify-center float-left lg:float-right">
            <Link href="/all-projects">
              <i className="fas fa-arrow-right bg-black rounded-2xl text-white p-3 lg:p-4 mr-4"></i>{" "}
              Explore All Projects
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-20">
        <Swiper
          modules={[Navigation, Pagination, A11y, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          centeredSlides={true}
          centerInsufficientSlides={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: ".arrow-right",
            prevEl: ".arrow-left",
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            768: {
              slidesPerView: 1,
            },
            992: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {worksData.map((data, index) => (
            <SwiperSlide key={index}>
              <>
                <div className="flex flex-col relative  items-center text-center ">
                  <div className="absolute left-[48%] lg:left-[57%] top-[5%] bg-black text-white text-md text-center font-semibold px-3 py-3 rounded-md z-40 w-32">
                    {data.category}
                  </div>
                  <div
                    className="flex flex-col items-center justify-center h-96 w-96 rounded-xl"
                    style={{ backgroundImage: `url(${data.imageSrc})` }}
                  >
                    <div className="inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity m-6">
                      <Image
                        className="object-cover rounded-xl w-80 h-80"
                        src={data.hoverImageSrc}
                        alt="Hover Image Description"
                        width={500}
                        height={500}
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="text-xl text-black font-bold mt-5">
                      {data.title}
                    </div>
                  </div>
                </div>
              </>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-2/3"></div>
          <div className="lg:w-1/3 flex items-end justify-center mt-10  gap-3 lg:mr-30">
            <button className="arrow-left rotate-180 transition-transform duration-100 ease-in-out hover:-translate-x-5">
              <svg
                width="70"
                height="80"
                viewBox="0 0 84 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M82 10.8905L1 10.8905"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M73.9805 0.999816L82.5363 10.8897L73.9805 20.7812"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button className="arrow-right transition-transform duration-100 ease-in-out hover:translate-x-8">
              <svg
                width="150"
                height="80"
                viewBox="0 0 84 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M82 10.8905L1 10.8905"
                  stroke="black"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M73.9805 0.999816L82.5363 10.8897L73.9805 20.7812"
                  stroke="black"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
