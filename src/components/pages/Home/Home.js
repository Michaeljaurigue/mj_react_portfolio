import React from "react";
import "../../App/App.css";
import HeroSection from "../../HeroSection/HeroSection";
import Footer from "../../Footer/Footer";
import About from "../About/About";

function Home() {
  return (
    <>
      <HeroSection />
      <About />
      <Footer />
    </>
  );
}

export default Home;
