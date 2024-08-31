import React from "react";
import "./About.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

const About = ({ setPlayState }) => {
  return (
    <div className="about">
      <div className="about_left">
        <img src={about_img} alt="" className="about_img" />
        <img
          src={play_icon}
          alt=""
          className="play_icon"
          onClick={() => setPlayState(true)}
        />
      </div>
      <div className="about_right">
        <h3>about university</h3>
        <h2>nuturing tommorow's leaders today</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea culpa
          placeat soluta at! Eveniet temporibus neque distinctio nulla
          consequuntur culpa magni vel repellendus sint, nisi, in totam eaque
          impedit molestias!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea culpa
          placeat soluta at! Eveniet temporibus neque distinctio nulla
          consequuntur culpa magni vel repellendus sint, nisi, in totam eaque
          impedit molestias!
        </p>
      </div>
    </div>
  );
};

export default About;
