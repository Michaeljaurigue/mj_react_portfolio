import React from "react";
import "../App/App.css";
import { Button } from "../Button/Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <h1>Hi, I'm Michael</h1>
      <p>Software Developer</p>
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
  );
}

export default HeroSection;
