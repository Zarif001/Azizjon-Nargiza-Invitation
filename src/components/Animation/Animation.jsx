import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function AnimatedSection ({ children, animation, className }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      initial="hidden"
      animate={controls}
      ref={ref}
      variants={animation}
      className={className}
    >
      {children}
    </motion.div>
  );
};