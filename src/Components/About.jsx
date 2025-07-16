import React from "react";
import BlurBlob from "./BlurBlob";
import { about } from "../../constants";
import AnimateOnView from "./ui/AnimateOnView";
import Card from "./ui/Card";

const About = () => {
  return (
    <div
      className="h-full md:px-24 md:py-8 py-4 text-center font-ovo relative bg-gradient-to-br from-40% from-white to-pink-100"
      id="about"
    >
      <div className="mx-auto w-full md:mb-10 mb-5">
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
      </div>

      <div className="flex md:flex-row flex-col md:items-start items-center justify-center md:gap-10 gap-5">
        <AnimateOnView
          yInit={50}
          delay={0.5}
          className="rounded-lg overflow-hidden w-[17rem] md:w-md border border-zinc-900 "
        >
          <img src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D" />
        </AnimateOnView>
        <div className="flex flex-col items-start gap-5">
          <AnimateOnView
            yInit={50}
            delay={0.6}
            className="md:max-w-xl max-w-lg md:text-start text-center px-4 md:px-0"
          >
            Full-Stack Web Developer crafting{" "}
            <span className="font-bold">responsive</span>,{" "}
            <span className="font-bold">scalable</span>, and{" "}
            <span className="font-bold">user-friendly</span> web applications
            from front to back.
          </AnimateOnView>
          <AnimateOnView
            yInit={50}
            delay={1}
            className="flex flex-col font-arial w-full"
          >
            Cards here
          </AnimateOnView>
        </div>
      </div>
    </div>
  );
};

export default About;
