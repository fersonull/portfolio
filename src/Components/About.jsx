import React from "react";
import BlurBlob from "./BlurBlob";
import { about } from "../../constants";
import AnimateOnView from "./ui/AnimateOnView";
import Card from "./ui/Card";

const About = () => {
  return (
    <div
      className="min-h-screen md:px-24 md:py-8 py-4 text-center font-ovo relative"
      id="about"
    >
      {/* <div className="mx-auto w-full md:mb-10 mb-5 md:mt-20 mt-15">
        <AnimateOnView yInit={50} className="font-ovo md:text-xl md:mb-3 mb-1">
          Introduction
        </AnimateOnView>
        <AnimateOnView
          yInit={50}
          delay={0.3}
          className="font-ovo text-2xl md:text-5xl"
        >
          About me
        </AnimateOnView>
      </div> */}

      <div className="md:mt-42 mt-15 flex md:flex-row flex-col md:items-start items-center justify-between md:gap-10 gap-5 bg-gradient-to-b from-white to-pink-100 font-arial overflow-hidden rounded-2xl">
        <AnimateOnView
          yInit={50}
          delay={0.1}
          className="rounded-lg overflow-hidden w-[17rem] md:w-md "
        >
          <img src="/profile.png" />
        </AnimateOnView>
        <div className="flex-1 flex flex-col justify-center items-center gap-5">
          <div className="md:max-w-xl max-w-lg md:text-start text-center px-4 md:px-0">
            <AnimateOnView yInit={50} delay={0.3} className="text-5xl font-ovo">
              About me
            </AnimateOnView>
            <AnimateOnView yInit={50} delay={0.6}>
              I'm a Full-Stack Web Developer skilled in building modern,
              responsive web applications using technologies like React,
              Node.js, and MongoDB. I focus on clean UI/UX, efficient back-end
              systems, and scalable architecture. Passionate about solving
              real-world problems through code, I enjoy working on both
              collaborative and independent projects, and I'm always eager to
              learn and grow in the ever-evolving tech landscape.
            </AnimateOnView>
          </div>
          <AnimateOnView
            yInit={50}
            delay={0.9}
            className="flex flex-col font-arial w-full"
          ></AnimateOnView>
        </div>
      </div>
    </div>
  );
};

export default About;
