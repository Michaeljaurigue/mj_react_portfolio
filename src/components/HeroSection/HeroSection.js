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
          {/* <img
            className="hero__img-hello"
            src="images/img-hello.png"
            alt="Hello,"
          /> */}
          <h1>Hi there, I'm</h1>
          <img
            className="hero__img-michael"
            src="/images/img-michael.png"
            alt="Michael Jaurigue"
          />

          <p>
            "Crafting <span className="hero__subtile">Connections,</span>
          </p>
          <p>
            <span className="hero__subtile">Creativity, and Care</span>
          </p>
          <p>
            From <span className="hero__subtile">Pets to Pixels."</span>
          </p>
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
