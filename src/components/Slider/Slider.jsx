import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { DATES } from "./data";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true
  };
  return (
    <div className='relative'>
      <Slider {...settings} className="w-full">
        {DATES.map((item) => (
          <div key={item.id} className="h-screen w-full">
            <img className="w-full h-full" src={item.img} alt="" />
          </div>
        ))}
      </Slider>
      <div className="absolute top-0 h-full bg-gray-900 bg-opacity-50 w-full flex flex-col justify-center items-center">
        <h1 className="text-white text-xl mb-20 font-vibes">Приглашение</h1> 
        <p className="text-white text-lg font-vibes leading-none text-center"> Aзизжон  <br />&<br /> Наргиза</p>
      </div>
    </div>
  );
}
