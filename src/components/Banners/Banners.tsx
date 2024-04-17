/* eslint-disable @next/next/no-img-element */
"use client";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "./styles.css";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export function Banners() {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2000,
      }}
      pagination={{
        clickable: true,
      }}
      loop={true}
      slidesPerView={1}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper bg-black"
    >
      <SwiperSlide className="text-center">
        <img
          className=" w-[90%] object-cover"
          src="/img/propaganda.webp"
          alt="banner the girl like forgot"
        />
      </SwiperSlide>
      <SwiperSlide className="text-center">
        <img
          src="/img/anime1.webp"
          alt="banner the Duke of Death and His maid"
          className="w-[90%] object-cover"
        />
      </SwiperSlide>
      <SwiperSlide className="text-center">
        <img
          src="/img/anime2.webp"
          alt="malevolent spirits Monogartari"
          className="obje-object-coverll w-[90%]"
        />
      </SwiperSlide>
      <SwiperSlide className="text-center">
        <img
          src="/img/hori.png"
          alt="Horimya - the`missing pieces-"
          className="obje-object-coverll w-[90%]"
        />
      </SwiperSlide>
    </Swiper>
  );
}
