import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { useInView } from "react-intersection-observer";

const FadeInOnView = () => {
  const el = useRef();
  const { ref: inViewRef, inView } = useInView({
    threshold: 0.3, // how much should be visible before triggering
    triggerOnce: true, // animate only once
  });

  // Combine both refs
  const setRefs = (node) => {
    el.current = node;
    inViewRef(node);
  };

  useEffect(() => {
    if (inView) {
      gsap.to(el.current, {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration: 0.,
        ease: "power3.out",
      });
    }
  }, [inView]);

  return (
    <div className="h-[200vh] p-10">
      <h1 className="text-4xl mb-64">Scroll down 👇</h1>

      <div
        ref={setRefs}
        className="text-3xl font-semibold text-center opacity-0 translate-y-10 blur-sm transition-all"
      >
        I animate when you see me!
      </div>
    </div>
  );
};

export default FadeInOnView;
