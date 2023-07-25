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
      "https://img.freepik.com/free-psd/busins-company-landing-page-template_23-2148924995.jpg?w=1380&t=st=1688964129~exp=1688964729~hmac=5f4f1a1d5e243dc998ee58c745e139b8f5299bfcf261fc33b35e633c3c7a5d49",
    hoverImageSrc:
      "https://img.freepik.com/freephoto/web-design-technology-browsing-programming-concept_53876-163260.jpg?w=826&t=st=1688963719~exp=1688964319~hmac=1beb954c72a77cb66e1c7bad1cb41befc57fd8fcfa8704ae78362a4e306e2461",
    title: "GEMINI SKINCARE",
    category: "Web Design",
    href: "/post",
  },
  {
    imageSrc:
      "https://img.freepik.com/free-psd/busness-company-landing-page-template_23-2148924995.jpg?w=1380&t=st=1688964129~exp=1688964729~hmac=5f4f1a1d5e243dc998ee58c745e139b8f5299bfcf261fc33b35e633c3c7a5d49",
    hoverImageSrc:
      "https://img.freepik.com/free-photo/we-design-technology-browsing-programming-concept_53876-163260.jpg?w=826&t=st=1688963719~exp=1688964319~hmac=1beb954c72a77cb66e1c7bad1cb41befc57fd8fcfa8704ae78362a4e306e2461",
    title: "GEMINI ",
    category: "Web Design",
    href: "/post",
  },
  {
    imageSrc:
      "https://img.freepik.com/fre-psd/business-company-landing-page-template_23-2148924995.jpg?w=1380&t=st=1688964129~exp=1688964729~hmac=5f4f1a1d5e243dc998ee58c745e139b8f5299bfcf261fc33b35e633c3c7a5d49",
    hoverImageSrc:
      "https://img.freepik.com/free-photo/web-design-technology-browsing-programming-concept_53876-1658.jpg?w=826&t=st=1688963719~exp=1688964319~hmac=1beb954c72a77cb66e1c7bad1cb41befc57fd8fcfa8704ae78362a4e306e2461",
    title: "GEMINI SKINCARE",
    category: "Web Design",
    href: "/post",
  },
];

const Projects: React.FC = () => {
  return (
    <div id="projects" className="p-5 m-2 sm:m-5 lg:mt-20">
      <div className="flex flex-col lg:flex-row mb-6">
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
      <div>
        <Swiper
          modules={[Navigation, Pagination, A11y, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            768: {
              slidesPerView: 1,
            },
            992: {
              slidesPerView: 2,
            }
          }
          }
        >
          {serviceLinks.map((link, index) => (
            <SwiperSlide key={index}>
              <>
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
              </>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Projects;
