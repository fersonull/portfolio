import React, { useRef, useEffect } from "react";
import gsap from "gsap";

const AnimatedPar = ({ children, className, delay = 0 }) => {
  const textRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
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
        stagger: 0.2,
        delay: delay,
      }
    );
  }, []);

  return (
    <p ref={textRef} className={className}>
      {children}
    </p>
  );
};

export default AnimatedPar;
