import React from "react";
import "../../App/App.css";
import Cards from "../Projects/Projects";
import HeroSection from "../../HeroSection/HeroSection";
import Footer from "../../Footer/Footer";
import About from "../About/About";
import Work from "../Work/Work";

function Home() {
  return (
    <>
      <HeroSection />
      <About />
      <Cards />
      <Work />
      <Footer />
    </>
  );
}

export default Home;
