"use client";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import worksData from "../../data/works";


export default function WorkSection() {
  return (
    <div id="work" className="lg:p-5 m-2 sm:m-5 mt-24 md:mt-28 lg:mt-32">
      <div className="flex flex-col lg:flex-row mb-6 ">
        <div className="lg:w-2/3 ">
          <h1 className="text-4xl lg:text-5xl mb-4 font-semibold">Our Work</h1>
        </div>
        <div className="lg:w-1/3">
          <div className=" text-lg lg:text-3xl text-black font-semibold flex items-center justify-center float-left lg:float-right">
            {/* <Link href="/all-work">
              <FontAwesomeIcon
                icon={faArrowRight}
                className="bg-black rounded-2xl text-white p-3 lg:p-4 mr-4"
                height={24}
                width={24}
              />
              Explore All Work
            </Link> */}
          </div>
        </div>
      </div>
      <div className="mt-20">
        <Swiper
          modules={[Navigation, A11y, Autoplay]}
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
              <div className="relative flex flex-col items-center text-center h-full">
                <div className="absolute left-4 top-4 lg:left-4 lg:top-4 bg-black text-white text-md text-center font-semibold px-3 py-3 rounded-md z-40 w-32">
                  {data.category}
                </div>
                <div className="flex flex-col bg-center bg-cover items-center justify-center">
                  <Image
                    className="rounded-xl w-full h-auto"
                    src={data.imageSrc}
                    alt={data.title}
                    width={500}
                    height={500}
                    placeholder="blur"
                    blurDataURL={data.blurImage}
                  />
                  <Link href={data.href} target="_blank" className="-mt-[100%]">
                    <div className="inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity m-4 md:m-6">
                      <Image
                        className="object-cover rounded-xl w-full h-auto"
                        src={data.hoverImageSrc}
                        alt={data.title}
                        width={500}
                        height={500}
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={data.blurImage}
                      />
                    </div>
                  </Link>
                </div>
                <div className="flex flex-col">
                  <div className="text-xl text-black font-bold mt-5">
                    {data.category}
                  </div>
                </div>
              </div>
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
