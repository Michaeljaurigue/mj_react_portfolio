import React from "react";
import "../../App/App.css";
import { Button } from "../../Button/Button";
import "./About.css";
import "../../HeroSection/HeroSection.css";

export default function About() {
  return (
    <div className="about-container">
      <div className="about-img-wrap">
        <img
          className="about__item-img"
          src="images/michael-jaurigue-img.jpg"
          alt="About Me"
        />
      </div>
      <div className="about__item-info">
        <h1 className="about__item-header">Michael Jaurigue</h1>
        <div className="about__item-text">
          Software Engineer with the MERN stack, JavaScript | React | Express |
          MongoDB | Node.js! Seeking a Software Engineer role, eager to apply my
          skills and knowledge toward building innovative solutions. Currently
          enrolled at Practicum.com in their Software Engineer Bootcamp. 💻
          During my journey, I founded Sparky Steps, a reputable Chicago
          pet-sitting service and Cue The Humans, a company that explores
          philosophy. These experiences offered me valuable experience in
          business management, website development, digital marketing, and
          customer service. My diverse skill set, coupled with my passion for
          technology, has fuelled my interest in pursuing a career in the tech
          industry. I strongly believe that technology can bring people
          together, and it has the power to make a positive impact on humanity.
          ❤️ My desire to contribute to this cause motivates me to pursue a
          career in tech. Through my work, I aspire to leverage technology to
          help build innovative solutions that address pressing societal needs,
          making the world a better place. 🌏
        </div>
        <div className="hero-btns">
          <Button
            className="btns"
            buttonStyle="btn--primary"
            buttonSize="btn--large"
          >
            Contact Me
          </Button>
        </div>
      </div>

      {/* <Footer /> */}
    </div>
  );
}
