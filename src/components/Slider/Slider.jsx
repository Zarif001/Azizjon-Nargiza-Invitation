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
    fade: true,
    arrows: false
  };

  return (
    <div className='relative w-full'>
      <Slider {...settings} className="w-full h-screen">
        {DATES.map((item) => (
          <div key={item.id} className="relative h-screen w-full">
            <img className="w-full h-full object-cover" src={item.img} alt="" />
            <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex flex-col justify-center items-center">
              <h1 className="text-white text-xl mb-20 font-vibes">Приглашение</h1> 
              <p className="text-white text-lg font-vibes leading-none text-center"> Aзизжон  <br />&<br /> Наргиза</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
