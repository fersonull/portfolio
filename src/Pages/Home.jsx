import React, { useState, useEffect } from "react";
import NavBar from "../Components/ui/NavBar";
import Hero from "../Components/Hero";
import About from "../Components/About";
import AboutMe from "../Components/AboutMe";

const Home = () => {
  return (
    <div className="scroll-smooth">
      <NavBar />
      <Hero />
      {/* <About /> */}
      <AboutMe />
    </div>
  );
};

export default Home;
