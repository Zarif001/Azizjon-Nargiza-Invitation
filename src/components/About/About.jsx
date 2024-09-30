import React from "react";
export default function About() {
  return (
    <div className="bg-slate-100 pt-24">
      <div className="grid grid-cols-2 items-center h-[300px] md:h-auto">
        <h2 className="">Something</h2>
        <img className='w-full h-full object-cover'src="/images/bg.png" alt="picture" />
      </div>
      <div  className="grid grid-cols-2 items-center  ">
        <img className="w-full h-full object-cover" src="/images/image1.png" alt="picture-1" />
        <h2>Something</h2>
      </div>
      <div  className="grid grid-cols-2 items-center ">
        <h2>Something</h2>
        <img className="w-full h-full object-cover" src="/images/image2.png" alt="picture-2" />
      </div>
    </div>
  );
}
