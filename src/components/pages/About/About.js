import React from "react";
import "../../App/App.css";
import "./About.css";
import "../../HeroSection/HeroSection.css";

export default function About() {
  return (
    <div className="about-container">
      <div className="about__container-text">
        <br /><br /><br />
        <h1>Who is this guy?</h1>
      </div>
      <div className="about__container-text">
        <p>
          A Digital Marketer, Web Developer, Artist, and Graphic Designer. I create dynamic, user-friendly websites, graphic designs, and impactful digital marketing campaigns that help accomplish goals.
        </p>
      </div>
      <div className="about__container-text">
        <p>
          As the founder of Sparky Steps, a successful pet care business in Chicago, I gained valuable experience in building and promoting brands. My passion for both design and development allows me to craft engaging digital solutions that resonate with audiences and drive results.
        </p>
      </div>
      <div className="about__container-text">
        <p>
          I'm passionate about art, philosophy, digital marketing, and
          social entreprenuership.
        </p>
      </div>
      <div className="about__container-text">
        <p>
          I aim to blend technology and art to create innovative solutions, with a constant focus on making the world a better place, one meaningful action at a time. 🌎
        </p>
        <br />
        <br />

      </div>
    </div>
  );
}
