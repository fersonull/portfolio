import React from "react";
import ImageRound from "./ui/ImageRound";
import AnimatedText from "./ui/AnimatedText";
import AnimatedDiv from "./ui/AnimatedDiv";
import { FiArrowUpRight } from "react-icons/fi";
import { MdOutlineFileDownload } from "react-icons/md";

const Hero = () => {
  return (
    <div
      className="font-ovo h-full flex flex-col items-center justify-center px-4"
      id="home"
    >
      <AnimatedDiv className="flex flex-col items-center justify-center gap-3 md:mb-4 mb-2">
        <ImageRound
          src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
          size={100}
        />
        <AnimatedText delay={0.3} className="md:text-xl">
          Hello! I am Jasfer Monton.
        </AnimatedText>
      </AnimatedDiv>
      <AnimatedText
        delay={0.6}
        className="md:text-5xl text-2xl md:max-w-xl text-center md:mb-4 mb-2"
      >
        Full-stack web developer based on Philippines.
      </AnimatedText>

      <AnimatedText
        delay={0.9}
        className="text-sm max-w-md md:max-w-lg text-center mb-5"
      >
        Full-Stack Web Developer crafting responsive, scalable, and
        user-friendly web applications from front to back.
      </AnimatedText>

      <AnimatedDiv
        delay={1.2}
        className="flex items-center justify-center gap-4"
      >
        <a className="cursor-pointer md:text-sm text-xs font-nunito md:px-6 px-4 py-2 bg-zinc-900 rounded-full text-white flex items-center justify-center gap-2 border">
          contact me <FiArrowUpRight size={17} />
        </a>
        <a className="cursor-pointer md:text-sm text-xs font-nunito md:px-6 px-4 py-2 border border-zinc-900 rounded-full flex items-center justify-center gap-2 hover:text-white hover:bg-zinc-700 transition-all">
          my resume <MdOutlineFileDownload size={17} />
        </a>
      </AnimatedDiv>
    </div>
  );
};

export default Hero;
