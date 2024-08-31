import React from "react";
import "./Hero.css";
import dark_arrow from "../../assets/dark-arrow.png";

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero_text">
        <h1>We Ensure better education for a better world.</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae
          assumenda debitis numquam quibusdam, molestiae minima asperiores?
          Consectetur suscipit atque, nemo voluptatibus aliquid odio veniam
          necessitatibus tenetur doloribus labore quia minima!
        </p>
        <button className="btn">
          Explore more <img src={dark_arrow} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
