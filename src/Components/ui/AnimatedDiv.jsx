import React, { useRef, useEffect } from "react";
import gsap from "gsap";

const AnimatedDiv = ({ delay, className, children }) => {
  const elRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      elRef.current,
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
    <div ref={elRef} className={className}>
      {children}
    </div>
  );
};

export default AnimatedDiv;
