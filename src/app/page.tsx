"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Feedbacks from "./components/feedbacks";
import style from "./styles/home.module.css";
import BrandSlider from "./components/clientslider";
import VideoPlayer from "./components/aboutvideo";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

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
      <div>
        <div className="flex flex-col lg:flex-row p-5 m-2 sm:m-5 lg:mt-20">
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
                className="p-2 mx-4 text-4xl lg:text-7xl text-white font-semibold bg-black rounded-full flex items-center justify-center lg:float-right w-24 h-24 lg:w-48 lg:h-48 mt-6 lg:mt-0 float-right"
              >
                <i className={`fas fa-play ${style.animate_zoom}`}></i>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row p-5 mt-0 lg:mt-14">
          <div className="w-full lg:w-3/5 hidden sm:block "></div>
          <div className="w-full lg:w-1/3 text-xl lg:text-2xl">
            At Zorro Design, we develop eye-catching brands, design beautiful
            websites, and deliver campaigns that stand out from the norm.
          </div>
        </div>
      </div>
      <div id="about" className="flex flex-col lg:flex-row mt-16 m-0 sm:m-5">
        <div className=" lg:w-3/5 bg-black text-white rounded-xl m-5 p-5 shadow-2xl">
          <h1 className="text-3xl lg:text-4xl mb-4 font-semibold text-center mt-12">
            About
          </h1>
          <p className="text-lg lg:text-xl mb-4 font-md text-justify  mt-12 m-2 lg:m-10">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <VideoPlayer />
      </div>
      <div id="services" className="p-5 m-2 sm:m-5 lg:mt-20">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-2/3 ">
            <h1 className="text-4xl lg:text-5xl mb-4 font-semibold">
              Our Services
            </h1>
          </div>
          <div className="lg:w-1/3">
            <div className=" text-lg lg:text-3xl text-black font-semibold flex items-center justify-center float-left lg:float-right">
              <Link href="/all-services">
                <i className="fas fa-arrow-right bg-black rounded-full text-white p-3 lg:p-4 mr-4"></i>{" "}
                View Services
              </Link>
            </div>
          </div>
        </div>
        <div className=" mt-20 lg:mt-20 text-white">
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
      <div id="projects" className="p-5 m-2 sm:m-5 lg:mt-20">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-2/3 ">
            <h1 className="text-4xl lg:text-5xl mb-4 font-semibold">
              Featured works
            </h1>
          </div>
          <div className="lg:w-1/3">
            <div className=" text-lg lg:text-3xl text-black font-semibold flex items-center justify-center float-left lg:float-right">
              <Link href="/all-projects">
                <i className="fas fa-arrow-right bg-black rounded-full text-white p-3 lg:p-4 mr-4"></i>{" "}
                View Projects
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row  mb-5 mt-20  text-white">
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, A11y, Autoplay]}
            spaceBetween={50}
            slidesPerView={2}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            navigation
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            {serviceLinks.map((link, index) => (
              <SwiperSlide key={index}>
                <div className="justify-center items-center m-0 lg:m-7 rounded-xl">
                  <Link key={index} href={link.href}>
                    <div className="flex items-center justify-center relative">
                      <Image
                        className="m-1 object-cover rounded-xl w-72 h-72"
                        src={link.imageSrc}
                        alt="Image Description"
                        width={500}
                        height={500}
                        loading="lazy"
                      />
                      <div className="absolute top-5 right-5 bg-black text-white text-md font-semibold px-2 py-1 rounded-md z-10 shadow-lg">
                        {link.category}
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity m-6">
                        <Image
                          className="object-cover rounded-xl w-64 h-64"
                          src={link.hoverImageSrc}
                          alt="Hover Image Description"
                          width={500}
                          height={500}
                          loading="lazy"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <div className="text-xl text-black font-bold text-center mt-5">
                        {link.title}
                      </div>
                    </div>
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <Feedbacks />
      <BrandSlider />
      <div id="contact" className="p-5 m-2 sm:m-5 lg:mt-20">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-2/3 ">
            <h1 className="text-4xl lg:text-5xl mb-4 font-semibold">
              Let&rsquo;s Talk
            </h1>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row mt-16 m-0 sm:m-5">
          <div className="lg:w-3/5 bg-black text-white rounded-xl m-0 sm:m-5 p-5 shadow-2xl">
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
              <form action="#" className="space-y-12">
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-3 text-lg sm:text-2xl font-bold text-white"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="shadow-sm bg-white border border-gray-300 text-black text-sm sm:text-md rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-1.5 sm:p-2.5 placeholder-gray-400 focus:ring-primary-500 focus:shadow-sm-light"
                    placeholder="name@flowbite.com"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-3 text-lg sm:text-2xl font-bold text-white"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="shadow-sm bg-white border border-gray-300 text-black text-sm sm:text-md rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-1.5 sm:p-2.5 placeholder-gray-400 focus:ring-primary-500 focus:shadow-sm-light"
                    placeholder="name@flowbite.com"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block mb-3 text-lg sm:text-2xl font-bold text-white"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="block p-1.5 sm:p-2.5 w-full text-sm sm:text-md text-black bg-white rounded-lg border border-gray-300 shadow-md focus:ring-primary-500 focus:border-primary-500 placeholder-gray-400 focus:ring-primary-500 focus:shadow-sm-light"
                    placeholder="Let us know how we can help you"
                    required
                  />
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block mb-3 text-lg sm:text-2xl font-bold text-white"
                  >
                    Your message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="block p-1.5 sm:p-2.5 w-full text-sm sm:text-md text-black bg-white rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 placeholder-gray-400 focus:ring-primary-500 focus:shadow-sm-light"
                    placeholder="Leave a comment..."
                  ></textarea>
                </div>
                <button
                  type="button"
                  className="w-full py-3 px-5 text-sm font-semibold text-center text-black rounded-lg bg-white sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 hover:bg-gray-900 focus:ring-black block lg:hidden"
                >
                  Send message
                </button>
              </form>
            </div>
          </div>
          <div className="lg:w-2/5 bg-black hover:bg-green text-white rounded-xl m-0 sm:m-5 p-5 shadow-2xl flex flex-col justify-center items-center h-full lg:block">
            <div className="w-full h-full flex flex-col justify-center items-center">
              <div className="w-full flex justify-center mb-24 mt-36">
                <h1 className="text-4xl lg:text-5xl font-semibold">
                  Have an Idea?
                </h1>
              </div>
              <div className="w-full flex justify-center mb-24">
                <Link
                  href="/add"
                  className="p-2 mx-4 text-4xl lg:text-7xl text-black font-semibold bg-white rounded-full flex items-center justify-center lg:float-right w-24 h-24 lg:w-48 lg:h-48 mt-6 lg:mt-0 float-right"
                >
                  <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
              <div className="w-full flex justify-center h-full mb-28">
                <h1 className="text-4xl lg:text-5xl mb-4 font-semibold">
                  Let&rsquo;s Talk
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
