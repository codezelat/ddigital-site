"use client";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const worksData = [
  {
    imageSrc: "/img/work/1.jpg",
    hoverImageSrc: "/img/work-hover/1.jpg",
    title: "Rumikmart",
    category: "Branding",
    href: "/work/Rumikmart - Work With Ddigital_compressed.pdf",
  },
  {
    imageSrc: "/img/work/2.jpg",
    hoverImageSrc: "/img/work-hover/2.jpg",
    title: "Osthar",
    category: "Branding",
    href: "/work/Osthar - Work With Ddigital_compressed.pdf",
  },
  {
    imageSrc: "/img/work/3.jpg",
    hoverImageSrc: "/img/work-hover/3.jpg",
    title: "Dataleed",
    category: "UI Design",
    href: "/work/Dataleed - Work With Ddigital_compressed.pdf",
  },
  {
    imageSrc: "/img/work/4.jpg",
    hoverImageSrc: "/img/work-hover/4.jpg",
    title: "Monster",
    category: "UI Design",
    href: "/work/Monster - Work With Ddigital_compressed.pdf",
  },
  {
    imageSrc: "/img/work/5.jpg",
    hoverImageSrc: "/img/work-hover/5.jpg",
    title: "Yeti",
    category: "Illustrations",
    href: "/work/Yeti - Work With Ddigital_compressed.pdf",
  },
  {
    imageSrc: "/img/work/6.jpg",
    hoverImageSrc: "/img/work-hover/6.jpg",
    title: "EhaKade",
    category: "Branding",
    href: "/work/EhaKade - Work With Ddigital_compressed.pdf",
  },
  {
    imageSrc: "/img/work/7.jpg",
    hoverImageSrc: "/img/work-hover/7.jpg",
    title: "Ceylumin",
    category: "Photography",
    href: "/work/Ceylumin - Work With Ddigital_compressed.pdf",
  },
  {
    imageSrc: "/img/work/8.jpg",
    hoverImageSrc: "/img/work-hover/8.jpg",
    title: "Codezela",
    category: "Illustrations",
    href: "/work/Codezela Illustrations - Work With Ddigital_compressed.pdf",
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
            {/* <Link href="/all-projects">
              <FontAwesomeIcon
                icon={faArrowRight}
                className="bg-black rounded-2xl text-white p-3 lg:p-4 mr-4"
                height={24}
                width={24}
              />
              Explore All Projects
            </Link> */}
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
                <div className="flex flex-col items-center text-center">
                  <div className="absolute left-[55%] top-[15%] bg-black text-white text-md text-center font-semibold px-3 py-3 rounded-md z-40 w-32">
                    {data.category}
                  </div>
                  <div className="flex flex-col bg-center bg-cover items-center justify-center">
                    <Image
                      className="rounded-xl"
                      src={data.imageSrc}
                      alt="Hover Image Description"
                      width={500}
                      height={500}
                      loading="lazy"
                      objectFit="cover"
                    />
                    <Link
                      href={data.href}
                      target="_blank"
                      className="-mt-[100%]"
                    >
                      <div className="inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity m-4 md:m-6">
                        <Image
                          className="object-cover rounded-xl w-95 h-95"
                          src={data.hoverImageSrc}
                          alt="Hover Image Description"
                          width={500}
                          height={500}
                          loading="lazy"
                        />
                      </div>
                    </Link>
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
