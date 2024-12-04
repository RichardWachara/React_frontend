import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about-section bg-width-nav">
      <h2 className="about-title">About us</h2>
      <div className="about-description">
        <h2>
          Watch Trading Company is a luxury watch dealer, servicing customers
          throughout the world
        </h2>
        <p>
          We currently have locations in Fort Lauderdale and New York. We have
          over 15 years of experience specializing in luxury watches. We take
          pride in our products and are passionate about what we do.
        </p>
        <p>
          Watch Trading Company is an independent watch dealer. We are not
          sponsored by, associated with or affiliated with Rolex S.A., Rolex
          USA, or any of their subsidiaries, nor are we associated with any
          other brands we sell.
        </p>
      </div>
    </section>
  );
};

export default About;
