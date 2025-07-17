import React from "react";
import { techStack } from "../../constants";
import AnimateOnView from "./ui/AnimateOnView";
import { motion } from "framer-motion";
import BlurBlob from "./BlurBlob";
import Blob from "../Components/ui/Blob";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 1.2, //
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0)",
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const AboutMe = () => {
  return (
    <section id="about" className=" px-6 md:px-24 py-20 text-zinc-800 relative">
      {/* <Blob top={500} left={200} width={300} /> */}

      <div className="max-w-4xl mx-auto mt-10">
        <AnimateOnView
          yInit={50}
          className="text-2xl md:text-4xl font-bold md:mb-6 mb-3 bg-gradient-to-br from-white to-pink-700 bg-clip-text text-transparent"
        >
          About Me
        </AnimateOnView>
        <AnimateOnView yInit={50} delay={0.3} className="md:text-lg leading-8">
          I'm a Full-Stack Web Developer passionate about building intuitive and
          scalable web applications. With a solid foundation in both front-end
          and back-end development, I create responsive interfaces using{" "}
          <strong>React</strong> and <strong>Tailwind CSS</strong>, and robust
          server-side solutions with <strong>Node.js</strong>,
          <strong> Express</strong>, <strong>MongoDB</strong>, and{" "}
          <strong>Laravel/PHP</strong>.
        </AnimateOnView>
        <AnimateOnView
          yInit={50}
          delay={0.6}
          className="md:text-lg leading-8 md:mt-4 mt-2"
        >
          I enjoy solving real-world problems, learning new technologies, and
          contributing to meaningful projects. Whether it's collaborating with
          teams or working independently, I strive to write clean, maintainable,
          and efficient code that delivers real impact.
        </AnimateOnView>
        <AnimateOnView
          yInit={50}
          delay={0.9}
          className="md:text-lg leading-8 md:mt-4 mt-2"
        >
          Beyond coding, I stay active in tech communities, continuously sharpen
          my skills, and explore design systems and DevOps practices to enhance
          development workflows and product quality.
        </AnimateOnView>

        {/* Tech Stack */}
        <div className="md:mt-9 mt-6">
          <AnimateOnView
            yInit={50}
            delay={1}
            className="md:text-3xl text-2xl md:text-start text-center font-semibold mb-4 bg-gradient-to-br from-white to-pink-700 bg-clip-text text-transparent"
          >
            Tech Stack
          </AnimateOnView>
          <motion.div
            className="flex flex-wrap md:gap-6 gap-4 items-center md:justify-start justify-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {techStack.map(({ name, icon }) => (
              <motion.div
                key={name}
                variants={itemVariants}
                className="flex flex-col items-center text-center w-20"
              >
                <img
                  src={icon}
                  alt={name}
                  className="w-10 h-10 object-contain"
                />
                <span className="text-sm mt-2">{name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
