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
      <h2 className="font-vibes text-llg text-center">
        Мы будем ради видеть вас
      </h2>
      <div className="flex items-center justify-around   mt-[30px]">
        <p className="text-ssm font-vibes text-center whitespace-nowrap mr-2">
        7 ноября - Navkar & Fotixa Toy, в 12:00 <br /> место: Загородный дом, Oltin
          Sarin 8,<br /> Gazalkent 
        </p> 
        <p className="text-ssm font-vibes text-center whitespace-nowrap ">
          9 ноября - свадебное торжество  в 17:00 <br /> место: Osiyo Grand Restaurant, <br />Tashkent
        </p>
      </div>
      <CountTimer />
    </AnimatedSection>
  );
}
