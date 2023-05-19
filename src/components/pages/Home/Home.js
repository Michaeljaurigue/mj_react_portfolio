import React from "react";
import "../../App/App.css";
import Cards from "../Projects/Projects";
import HeroSection from "../../HeroSection/HeroSection";
import Footer from "../../Footer/Footer";

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
