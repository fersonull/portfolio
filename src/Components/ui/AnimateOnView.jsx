import React from "react";
import { motion } from "framer-motion";

const AnimateOnView = ({
  children,
  className,
  xInit = 0,
  yInit = 0,
  xEnd = 0,
  yEnd = 0,
  delay = 0,
}) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: yInit, x: xInit, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: yEnd, x: xEnd, filter: "blur(0px)" }}
      transition={{ duration: 0.8, delay: delay, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimateOnView;
