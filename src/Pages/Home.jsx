import React from "react";
import NavBar from "../Components/ui/NavBar";
import Hero from "../Components/Hero";
import About from "../Components/About";

const Home = () => {
  return (
    <div className="h-screen">
      <NavBar />
      <Hero />
      <About />
    </div>
  );
};

export default Home;
