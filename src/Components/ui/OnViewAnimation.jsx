import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const OnViewAnimation = () => {
  const myElement = useRef(null);

  useEffect(() => {
    if (myElement.current) {
      gsap.to(myElement.current, {
        x: 100, // Animate x position
        rotation: 360, // Animate rotation
        scrollTrigger: {
          trigger: myElement.current,
          start: "top center", // Animation starts when the top of the element hits the center of the viewport
          end: "bottom center", // Animation ends when the bottom of the element leaves the top of the viewport
          scrub: true, // Link animation to scroll position
          markers: true, // Uncomment for debugging ScrollTrigger
        },
      });
    }
  }, []); // Empty dependency array means this runs once on mount
  return (
    <div
      ref={myElement}
      style={{
        height: "200px",
        width: "200px",
        background: "lightblue",
      }}
    >
      Scroll Me!
    </div>
  );
};

export default OnViewAnimation;
