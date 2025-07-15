import React from "react";
import ImageRound from "./ImageRound";
import AnimatedText from "./AnimatedText";
import AnimatedDiv from "./AnimatedDiv";
import { FiArrowRight } from "react-icons/fi";
import { FiArrowUpRight } from "react-icons/fi";
import { MdOutlineFileDownload } from "react-icons/md";

const Hero = () => {
  return (
    <div className="font-ovo h-full flex flex-col items-center justify-center">
      <AnimatedDiv className="flex flex-col items-center justify-center gap-3 mb-4">
        <ImageRound
          src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
          size={100}
        />
        <AnimatedText delay={0.3} className="text-xl">
          Hello! I am Jasfer Monton.
        </AnimatedText>
      </AnimatedDiv>
      <AnimatedText delay={0.6} className="text-5xl max-w-xl text-center mb-4">
        Full-stack web developer based on Philippines.
      </AnimatedText>

      <AnimatedText delay={0.9} className="max-w-lg text-center mb-5">
        Full-Stack Web Developer crafting responsive, scalable, and
        user-friendly web applications from front to back.
      </AnimatedText>

      <AnimatedDiv
        delay={1.2}
        className="flex items-center justify-center gap-4"
      >
        <button className="cursor-pointer text-sm font-nunito px-6 py-2 bg-zinc-900 rounded-full text-white flex items-center justify-center gap-2">
          contact me <FiArrowUpRight size={17} />
        </button>
        <button className="cursor-pointer text-sm font-nunito px-6 py-2 border border-zinc-900 rounded-full flex items-center justify-center gap-2">
          my resume <MdOutlineFileDownload size={17} />
        </button>
      </AnimatedDiv>
    </div>
  );
};

export default Hero;
