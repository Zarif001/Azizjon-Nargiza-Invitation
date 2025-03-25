import React from "react";
import CountTimer from "./CountTimer";
import AnimatedSection from "../Animation/Animation";
export default function Timer() {
  const textVariant = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <AnimatedSection animation={textVariant} className="bg-slate-100 pt-10 ">
      <h2 className="font-vibes text-llg text-center">
        Sizni ko‘rishdan xursand bo‘lamiz!
      </h2>
      <div className="flex items-center justify-around   mt-[30px]">
        <p className="text-m font-vibes text-center  ">
          Siz bilan quvonchli xabarni baham ko‘rishdan juda xursandmiz! <br />Bo‘lajak
          to‘yimizni siz bilan birga nishonlash biz uchun katta sharaf bo‘ladi. <br /> 
          <b>Sana: 2025-yil 24-may <br />Joy: Oqshom restorani<br />
          Vaqt: 18:00</b>  <br /> Sizning ishtirokingiz biz uchun juda muhim. <br /> Siz bilan
          ushbu quvonchli kunni nishonlashni intiqlik bilan kutamiz! <br />Samimiy
          hurmat bilan, Xusainovlar oilasi
        </p>
      </div>
      <CountTimer />
    </AnimatedSection>
  );
}
