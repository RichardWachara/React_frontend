import React from "react";
import "./Testimonial.css";
import { Splide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import Slidecard from "../../Components/SplideCard/Slidecard";

const Testimonial = () => {
  return (
    <section className="testimonial-section bg-width">
      <div className="bg-width testimonial-title">
        <h2>Testimonial</h2>
        <p>What are Members Saying About Us</p>
      </div>
      <div className="slider-container">
        <Splide options={{ perPage: 1 }}>
          <Slidecard />
          <Slidecard />
          <Slidecard />
          <Slidecard />
        </Splide>
      </div>
    </section>
  );
};

export default Testimonial;
