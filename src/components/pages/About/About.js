import React from "react";
import "../../App/App.css";
import "./About.css";
import "../../HeroSection/HeroSection.css";

export default function About() {
  return (
    <div className="about-container">
      <div className="about__container-text">
        <h1>Career</h1>
      </div>
      <div className="about__container-text">
        <p>
          A Software Engineer. I love to create full stack experiences on the
          web.
        </p>
      </div>
      <div className="about__container-text">
        <p>
          Before software engineering, I studied and practice business and
          marketing. My proudest moment is Sparky Steps, we helped pet owners
          all across Chicago for 7 years.
        </p>
      </div>
      <div className="about__container-text">
        <p>
          My passions include visual arts, philosophy, digital marketing, and
          social entreprenuership.
        </p>
      </div>
      <div className="about__container-text">
        <p>
          I aspire to leverage technology to help build innovative solutions
          that address pressing societal needs, with the hopes to make the world
          a better place. 🌎
        </p>
      </div>
    </div>
  );
}
