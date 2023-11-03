/* eslint-disable @next/next/no-img-element */
"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Autoplay } from "swiper/modules";
import "./css/style.css";
export default function Cards() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        autoplay={{
          delay: 5000,
        }}
        loop={true}
        centeredSlides={true}
        modules={[Autoplay]}
        className="Cards sombra bg-[#7e22ce] py-4"
      >
        <SwiperSlide className="m-0">
          <img
            src="/img/one piece.jpeg"
            alt="banner anime one piece"
            className="no-background border border-white"
            width={200}
          />
        </SwiperSlide>
        <SwiperSlide className="m-0">
          <img
            src="/img/chaysaw man.jpeg"
            alt="banner anime  chaysaw man"
            className="border border-white"
            width={200}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/img/hunterXhunter.jpeg"
            alt="banner anime hunterXhunter"
            className="border border-white"
            width={200}
          />
        </SwiperSlide>
        <SwiperSlide className="m-0">
          <img
            src="/img/demon slayer.jpeg"
            alt=" Banner- Demon slayer"
            className="border border-white"
            width={200}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/img/jujutsu kaisen.jpeg"
            alt="Banner- jujutsu kaisen"
            className="border border-white"
            width={200}
          />
        </SwiperSlide>
        <SwiperSlide className="m-0">
          <img
            src="/img/Lycoris.jpeg"
            alt="Licoris"
            className="border border-white"
            width={200}
          />
        </SwiperSlide>
        <SwiperSlide className="m-0">
          <img
            src="/img/okami .png"
            alt="okami"
            className="border border-white"
            width={200}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/img/naruto.jpeg"
            alt="naruto"
            className="border border-white"
            width={200}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
