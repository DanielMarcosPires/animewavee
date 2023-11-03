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
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        slidesPerView={1}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="text-center">
          <img src="/img/propaganda.webp" alt="banner the girl like forgot" />
        </SwiperSlide>
        <SwiperSlide className="text-center">
          <img
            src="/img/anime1.webp"
            alt="banner the Duke of Death and His maid"
          />
        </SwiperSlide>
        <SwiperSlide className="text-center">
          <img src="/img/anime2.webp" alt="malevolent spirits Monogartari" />
        </SwiperSlide>
        <SwiperSlide className="text-center">
          <img src="/img/hori.png" alt="Horimya - the`missing pieces-" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
