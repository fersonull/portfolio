import React, { useState, useEffect } from "react";
import NavBar from "../Components/ui/NavBar";
import Hero from "../Components/Hero";
import About from "../Components/About";
import AboutMe from "../Components/AboutMe";
import Services from "../Components/Services";

const Home = () => {
  return (
    <div className="scroll-smooth">
      <NavBar />
      <Hero />
      {/* <About /> */}
      <AboutMe />
      <Services />
    </div>
  );
};

export default Home;
