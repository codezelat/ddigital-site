import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

const imagePaths = [
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png",
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png",
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png",
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png",
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png",
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png",
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png",
];
const Slider: React.FC = () => {
  return (
    <>
      <Swiper
        // install Swiper modules
        modules={[Pagination, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={3}
        loop={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {imagePaths.map((imagePath, index) => (
          <SwiperSlide key={index}>
            <div className="swiper-lazy-preloader"></div>
            <Image
              src={imagePath}
              height="100"
              width="250"
              alt={`Slide ${index + 1}`}
              loading="lazy"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Slider;
