import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { DATES } from "./data";

export default function SimpleSlider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
  };

  return (
    <div className="relative w-full">
      <Slider {...settings} className="w-full h-screen">
        {DATES.map((item) => (
          <div key={item.id} className="relative h-screen w-full">
            <img className="w-full h-full object-cover" src={item.img} alt="" />
            <div className="absolute inset-0  bg-black bg-opacity-20 flex flex-col justify-center items-center">
              <div className="flex items-center">
                <p className="text-m font-vibes text-white mr-5 text-center">Приглашаем вас</p>
              <h1 className="text-white text-xl mb-20 font-SpringBI  text-center flex justify-center items-center">
                A <span className="m-0 pt-16">N</span>
              </h1>
              <p className="text-m font-vibes text-white ml-5 text-center">На нашу свадьбу</p>
              </div>
            
              <p className="text-white text-lg font-SpringBI leading-none text-center">
                {" "}
                Azizjon vs Nargiza
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
