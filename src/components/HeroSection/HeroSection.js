import React from "react";
import "../App/App.css";
import { Button } from "../Button/Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero__container">
      <div className="hero__container_items">
        <video src="/videos/video-1.mp4" autoPlay loop muted />
        <div className="hero__container_left">
          <h1>Hi, I'm Michael</h1>
          <p>Software Developer</p>
          <p>and Artist</p>
          <div className="hero-btns">
            <Button
              className="btns"
              buttonStyle="btn--outline"
              buttonSize="btn--large"
              path="/projects"
            >
              Contact Me
            </Button>
          </div>
        </div>
        <div className="hero__container_right">
          <div className="hero__container_right_img">
            <img
              className="hero-img"
              src="images/michael-jaurigue-img.jpg"
              alt="Michael Jaurigue"
            />
          </div>
        </div>
        {/* <div>
        <img
          className="hero-img"
          src="images/michael-jaurigue-img.jpg"
          alt="Michael Jaurigue"
        />
      </div> */}
      </div>
    </div>
  );
}

export default HeroSection;
