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
          Digital Marketer, Web Developer, and Graphic Designer. I create dynamic, user-friendly websites and impactful digital marketing campaigns.
        </p>
      </div>
      <div className="about__container-text">
        <p>
          As the founder of Sparky Steps, a successful pet care business in Chicago, I gained valuable experience in building and promoting brands. My passion for both design and development allows me to craft engaging digital solutions that resonate with audiences and drive results.
        </p>
      </div>
      <div className="about__container-text">
        <p>
          My other passions include visual arts, philosophy, digital marketing, and
          social entreprenuership.
        </p>
      </div>
      <div className="about__container-text">
        <p>
          I aspire to leverage technology to help build innovative solutions
          that address pressing societal needs, with the hopes to make the world
          a better place. 🌎
        </p>
        <br />
        <br />
        <br />
      </div>
    </div>
  );
}
