import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Portfolio = ({ children }) => {
  const portfolioRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      portfolioRef.current,
      {
        y: 50,
        filter: "blur(10px)",
        opacity: 0,
      },
      {
        y: 0,
        filter: "blur(0px)",
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: portfolioRef.current, // this is key
          start: "top 80%",
          end: "top 30%",
          toggleActions: "play none none reverse",
          markers: true,
        },
      }
    );
  }, []);

  return (
    <section ref={portfolioRef} className="my-40 px-6 md:px-20">
      {children}
    </section>
  );
};

export default Portfolio;
