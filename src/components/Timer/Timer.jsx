import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CountTimer from "./CountTimer";
export default function Timer() {
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

  const textVariant = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <motion.div
      className="bg-slate-100 pt-10 "
      initial="hidden"
      animate={controls}
      ref={ref}
      variants={textVariant}
    >
      <img src="/images/flower.png" alt="flower" className="w-[100px]" />
      <h2 className="font-vibes text-llg text-center">
        Церемония брако сочетания состоится
      </h2>
      <div className="flex items-center justify-around mt-[30px]">
        <p className="text-sm font-vibes w-[150px] text-center">
          7 ноября - Navkar & Fotixa Toy , 12:00 место: Загородный дом, Oltin
          Sarin 8, Gazalkent
        </p>
        <p className="text-sm font-vibes w-[150px] text-center">
          9 ноября - свадебное торжество, 17:00 место: Osiyo Grand Restaurant
        </p>
      </div>
      <CountTimer />
    </motion.div>
  );
}
