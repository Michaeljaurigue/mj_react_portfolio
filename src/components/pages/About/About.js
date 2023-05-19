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
          A Software Engineer. I love to create full stack
          experiences on the web.
        </p>
      </div>
      <div className="about__container-text">
        <p>
          Before software engineering I started a pet sitting business in
          Chicago. It was a great experience but it's time for something new.
        </p>
      </div>
      <div className="about__container-text">
        <p>
          I'm also a visual artist, digital marketing enthusiast and social
          entreprenuership advocate.
        </p>
      </div>
      <div className="about__container-text">
        <p>
          I aspire to leverage technology to help build innovative solutions
          that address pressing societal needs, making the world a better place.
        </p>
      </div>
    </div>
  );
}
