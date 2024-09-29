import React from "react";
import CountTimer from "./CountTimer";
export default function Timer() {
  return (
    <div className="bg-slate-100 pt-10 ">
        <img src="/images/flower.png" alt="flower" className="w-[100px]" />
      <h2 className="font-vibes text-llg text-center">Церемония брако сочетания состоится</h2>
      <div className="flex items-center justify-around mt-[30px]">
        <p className="text-sm font-vibes w-[150px] text-center">
          7 ноября - Navkar & Fotixa Toy , 12:00 место: Загородный дом, Oltin
          Sarin 8, Gazalkent
        </p>
        <p className="text-sm font-vibes w-[150px] text-center">
          9 ноября - свадебное торжество, 17:00 место: Osiyo Grand Restaurant
        </p>
      </div>
      <CountTimer/>
    </div>
  );
}
