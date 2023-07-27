import React, { useState, useEffect } from "react";
import Image from "next/image";

const comments = [
  {
    id: 1,
    quote:
      "Loved working with Zorro! As a novice in setting up a website, the Zorro team was extremely patient with our team and adapted to all the pivots. Our site came out phenomenal, and we could not be more pleased.",
    author: "John Doe",
    title: "Founder | Yuno Botanicals",
    image:
      "https://img.freepik.com/free-vector/goat-logo-design-template_23-2150443193.jpg?w=740&t=st=1688967812~exp=1688968412~hmac=e23e2a5ca8e7ee753d1b633e8460683a06289f61a2ffea7a503a7d4d40497247",
  },
  {
    id: 2,
    quote:
      "Highly recommend Zorro for their exceptional service and top-notch expertise. The team went above and beyond to ensure our project's success. We're extremely satisfied with the results!",
    author: "Jane Smith",
    title: "CEO | ABC Corporation",
    image:
      "https://img.freepik.com/free-vector/goat-logo-design-template_23-2150443193.jpg?w=740&t=st=1688967812~exp=1688968412~hmac=e23e2a5ca8e7ee753d1b633e8460683a06289f61a2ffea7a503a7d4d40497247",
  },
  {
    id: 3,
    quote:
      "Working with Zorro was a game-changer for our business. Their attention to detail and creative approach transformed our online presence. We're now seeing significant growth in our customer base. Thank you, Zorro!",
    author: "David Johnson",
    title: "Co-Founder | XYZ Solutions",
    image:
      "https://img.freepik.com/free-vector/goat-logo-design-template_23-2150443193.jpg?w=740&t=st=1688967812~exp=1688968412~hmac=e23e2a5ca8e7ee753d1b633e8460683a06289f61a2ffea7a503a7d4d40497247",
  },
  {
    id: 4,
    quote:
      "Zorro exceeded our expectations in every way. Their professionalism, communication, and expertise made the entire process seamless. We're thrilled with the outcome and look forward to future collaborations.",
    author: "Sarah Wilson",
    title: "Marketing Director | PQR Industries",
    image:
      "https://img.freepik.com/free-vector/goat-logo-design-template_23-2150443193.jpg?w=740&t=st=1688967812~exp=1688968412~hmac=e23e2a5ca8e7ee753d1b633e8460683a06289f61a2ffea7a503a7d4d40497247",
  },
];

const Feedbacks: React.FC = () => {
  const [currentCommentIndex, setCurrentCommentIndex] = useState(0);
  const currentComment = comments[currentCommentIndex];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentCommentIndex((prevIndex) => (prevIndex + 1) % comments.length);
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const handlePrevComment = () => {
    setCurrentCommentIndex(
      (prevIndex) => (prevIndex - 1 + comments.length) % comments.length
    );
  };

  const handleNextComment = () => {
    setCurrentCommentIndex((prevIndex) => (prevIndex + 1) % comments.length);
  };

  return (
    <div id="feedback" className="m-0 sm:m-10 mt-20 lg:mt-32 lg:pb-20">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-3/4">
          <h2 className="text-4xl md:text-6xl lg:text-8xl mb-12 md:mb-12 sm:mb-32 font-semibold s-full sm:w-2/3 ">
            Hear why our clients love us{" "}
            <i className="fas fa-heart text-rose-300"></i>
          </h2>
          <p className="text-lg lg:text-3xl mb-2 md:mb-0 lg:mb-8 font-md h-48">
            {`&ldquo;${currentComment.quote}&rdquo;`}
          </p>
          <div className="flex lg:flex-row items-center pt-12 md:pt-0 lg:pt-0">
            <div className="flex flex-col">
              <h1 className="text-lg sm:text-2xl font-semibold">
                {currentComment.author}
              </h1>
              <p className="text-md sm:text-lg">{currentComment.title}</p>
            </div>
            <div className="lg:w-1/3 flex flex-col ml-5 lg:ml-24">
              <Image
                className="h-28 w-28 float-right"
                src={currentComment.image}
                alt="Logo"
                width={100}
                height={100}
              />
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 flex items-end gap-3 lg:mr-30 sm:flex justify-center ">
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
};

export default Feedbacks;
