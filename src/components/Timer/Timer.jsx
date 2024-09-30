import React from "react";
import CountTimer from "./CountTimer";
import AnimatedSection from "../Animation/Animation";
export default function Timer() {
  const textVariant = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <AnimatedSection
    animation={textVariant}
      className="bg-slate-100 pt-10 "
      
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
    </AnimatedSection>
  );
}
