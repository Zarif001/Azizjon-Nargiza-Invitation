import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { DATES } from "./data";
import {motion} from 'framer-motion' 

export default function SimpleSlider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 6000
  };
  const textAnimation = {
    initial: { x: -100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: 100, opacity: 0 },
    transition: { duration: 3 },
  };
  const bgAnimation = {
    initial: {opacity: 0},
    animate: {opacity: 1},
    transition: 1
  }


  return (
    <motion.div {...bgAnimation} className="relative w-full">
      <Slider {...settings} className="w-full h-screen">
        {DATES.map((item) => (
          <div key={item.id} className="relative h-screen w-full">
            <img className="w-full h-full object-cover" src={item.img} alt="" />
            <div  className="absolute inset-0  bg-black bg-opacity-20 flex flex-col justify-center items-center">
              <motion.div {...textAnimation} className="flex items-center">
              <h1 className="text-white text-xl mb-20 font-SpringBI  text-center flex justify-center items-center">
                A <span className="m-0 pt-16">N</span>
              </h1>
              </motion.div>
            
              <motion.p {...textAnimation} className="text-white text-lg font-SpringBI leading-none text-center">
                Azizjon <span className="font-vibes">&</span> Nargiza
              </motion.p>
              <div className="mt-5 flex ">
              <p className="text-m font-vibes text-white mr-5 text-center">Приглашаем вас</p>
              <p className="text-m font-vibes text-white ml-5 text-center">На нашу свадьбу</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </motion.div>
  );
}
