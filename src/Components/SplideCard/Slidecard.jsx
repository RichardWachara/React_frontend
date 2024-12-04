import React from "react";
import Profile from "../../assets/profileImage.jfif";
import { SplideSlide } from "@splidejs/react-splide";

const Slidecard = () => {
  return (
    <SplideSlide className="splide_splide">
      <img src={Profile} alt="Profile-picture" />
      <div className="content">
        <p className="text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos,
          assumenda praesentium corrupti cumque
        </p>
        <div className="rating-app">
          <p className="app-name">Instagram</p>
          <p className="customer-name">Joe Doe</p>
        </div>
      </div>
    </SplideSlide>
  );
};

export default Slidecard;
