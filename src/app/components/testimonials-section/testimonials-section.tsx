"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faQuoteRightAlt,
  faQuoteLeftAlt,
} from "@fortawesome/free-solid-svg-icons";

const testimonials = [
  {
    id: 1,
    quote:
      "Ddigital's creative touch and attention to detail during UI design and photography made a difference. The final outcome they designed exceeded our expectations and have driven real results. Thank you team for the great work!",
    author: "Sayon De Silva",
    title: "Founder | Ceylumin",
    image: "/img/clients/ceylumin.png",
  },
  {
    id: 2,
    quote:
      "Ddigital took our vision and brought it to life with their creative branding and graphic designs. They've given Rumikmart a unique and appealing identity. We highly recommend their services!",
    author: "Kalana Erandika",
    title: "Founder | Rumikmart",
    image: "/img/clients/rumikmart.png",
  },
  {
    id: 3,
    quote:
      "Ddigital's designs have taken our online presence to the next level. They've created stunning graphics and social media content that truly engage our audience. Their team members have been a pleasure to work with and we look forward to continuing our partnership.",
    author: "Cader Rahmathulla",
    title: "CEO | SITC Campus",
    image: "/img/clients/sitc.png",
  },
  {
    id: 4,
    quote:
      "Ddigital's digital illustrations and character designs have been a game-changer for our brand. Their creativity and attention to detail shine through in their work. It's really exciting to have such a talented team under our team.",
    author: "Aruna Amarasinghe",
    title: "DMA | CodeZela",
    image: "/img/clients/codezela.png",
  },
];

export default function TestimonialsSection() {
  const [currentCommentIndex, setCurrentCommentIndex] = useState(0);
  const currentComment = testimonials[currentCommentIndex];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentCommentIndex(
        (prevIndex) => (prevIndex + 1) % testimonials.length
      );
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const handlePrevComment = () => {
    setCurrentCommentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const handleNextComment = () => {
    setCurrentCommentIndex(
      (prevIndex) => (prevIndex + 1) % testimonials.length
    );
  };

  return (
    <div
      id="feedback"
      className="m-2 sm:m-10 mt-20 lg:mt-32 lg:p-5 lg:pb-20"
    >
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-3/4">
          <h2 className="flex items-center text-4xl md:text-6xl lg:text-8xl leading-tight mb-8 md:mb-12 sm:mb-20 font-semibold s-full sm:w-2/3">
            Hear why our clients love us
            <FontAwesomeIcon
              icon={faHeart}
              height={80}
              width={80}
              className="text-rose-300"
              beat
            />
          </h2>
          <p className="text-lg lg:text-3xl mb-4 md:mb-6 lg:mb-8 font-medium min-h-[12rem] lg:min-h-[14rem]">
            <FontAwesomeIcon
              icon={faQuoteLeftAlt}
              height={80}
              width={80}
              className="text-black-300"
            />
            {`${currentComment.quote}`}
            <FontAwesomeIcon
              icon={faQuoteRightAlt}
              height={80}
              width={80}
              className="text-black-300"
            />
          </p>
          <div className="flex lg:flex-row items-center pt-6 md:pt-4 lg:pt-0 gap-4">
            <div className="flex flex-col">
              <h1 className="text-lg sm:text-2xl font-semibold">
                {currentComment.author}
              </h1>
              <p className="text-md sm:text-lg">{currentComment.title}</p>
            </div>
            <div className="lg:w-1/3 flex flex-col ml-5 lg:ml-16">
              <Image
                className="h-16 w-28 sm:h-20 sm:w-32 float-right object-contain"
                src={currentComment.image}
                alt="Logo"
                width={100}
                height={100}
              />
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 flex items-end gap-3 lg:mr-30 sm:flex justify-center mt-8 lg:mt-0">
          <div className="flex flex-col">
            <span
              className="inline-flex items-center rotate-180 transition-transform duration-100 ease-in-out hover:-translate-x-5"
              onClick={handlePrevComment}
            >
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
            </span>
          </div>
          <div className="flex flex-col">
            <span
              className="inline-flex items-center transition-transform duration-100 ease-in-out hover:translate-x-8"
              onClick={handleNextComment}
            >
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
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
