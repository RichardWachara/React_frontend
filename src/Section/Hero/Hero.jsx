import React from "react";
import "./Hero.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import HeroComponent from "../../Components/HeroComponent/HeroComponent";

const Hero = () => {
  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      autoplay={{
        delay: 6000,
        disableOnInteraction: false,
      }}
      speed={500}
      loop = {true}
    >
      <SwiperSlide>
        <HeroComponent />
      </SwiperSlide>
      <SwiperSlide>
        <HeroComponent />
      </SwiperSlide>
      <SwiperSlide>
        <HeroComponent />
      </SwiperSlide>
      <SwiperSlide>
        <HeroComponent />
      </SwiperSlide>
    </Swiper>
  );
};

export default Hero;
