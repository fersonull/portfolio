import React from "react";
import { techStack } from "../../constants";
import AnimateOnView from "./ui/AnimateOnView";
import { motion } from "framer-motion";
import BlurBlob from "./BlurBlob";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 1.3, //
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
      <div className="max-w-4xl mx-auto">
        <AnimateOnView
          yInit={50}
          className="text-3xl md:text-4xl font-bold mb-6"
        >
          About Me
        </AnimateOnView>
        <AnimateOnView yInit={50} delay={0.3} className="text-lg leading-8">
          I'm a Full-Stack Web Developer passionate about building intuitive and
          scalable web applications. With a solid foundation in both front-end
          and back-end development, I create responsive interfaces using{" "}
          <strong>React</strong> and <strong>Tailwind CSS</strong>, and robust
          server-side solutions with <strong>Node.js</strong>,
          <strong> Express</strong>, and <strong>MongoDB</strong>.
        </AnimateOnView>
        <AnimateOnView
          yInit={50}
          delay={0.6}
          className="text-lg leading-8 mt-4"
        >
          I enjoy solving real-world problems, learning new technologies, and
          contributing to meaningful projects. Whether it's collaborating with
          teams or working independently, I strive to write clean, maintainable,
          and efficient code that delivers real impact.
        </AnimateOnView>
        <AnimateOnView
          yInit={50}
          delay={0.9}
          className="text-lg leading-8 mt-4"
        >
          When I'm not coding, you'll find me exploring tech communities,
          refining my skills, or diving into design systems and DevOps
          practices.
        </AnimateOnView>

        {/* Tech Stack */}
        <div className="mt-12">
          <AnimateOnView
            yInit={50}
            delay={1}
            className="md:text-3xl text-2xl md:text-start text-center font-semibold mb-4 "
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
