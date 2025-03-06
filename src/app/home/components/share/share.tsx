"use client";
import Headline from "../../../../componnents/headline";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState } from "react";
import ItemShare from "@/componnents/item-share";
import CustomArrow from "@/componnents/custom-arrow-slider";

export default function Share() {
 

  const [activeIndex, setActiveIndex] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesPerRow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    rows: 2,
    arrows: false,
    nextArrow: <CustomArrow direction="next" />,
    prevArrow: <CustomArrow direction="prev" />,
    beforeChange: (oldIndex: any, newIndex: any) => setActiveIndex(newIndex),
    appendDots: (dots: any) => (
      <div className="flex justify-center">
        <ul className="flex items-center justify-center px-[0.375rem] py-[0.5rem] rounded-[1rem]">{dots}</ul>
      </div>
    ),
    customPaging: (i: any) => (
      <div className={`transition-all duration-300 ${i === activeIndex ? "w-[1.5rem] bg-blue-500 h-[0.5rem] rounded-md" : "w-[0.5rem] bg-gray-300 h-[0.5rem] rounded-full"}`} />
    ),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesPerRow: 1,
          slidesToShow: 1,
          arrows: false,
          rows: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-linear w-full flex flex-col py-[2rem] gap-[2rem]">
      <div className="w-full flex flex-col items-left gap-[1.5rem] justify-left m-auto grid-container">
        <Headline title="Cảm nhận" src="icons/star.svg" titleHeading="Chia sẻ của Phụ huynh - Outliers" />
      </div>

      <div className="w-full pt-[0rem] m-auto grid-container">
        <Slider {...settings}>
          <div className="p-[0.5rem]">
            <ItemShare />
          </div>
          <div className="p-[0.5rem]">
            <ItemShare />
          </div>
          <div className="p-[0.5rem]">
            <ItemShare />
          </div>
          <div className="p-[0.5rem]">
            <ItemShare />
          </div>
          <div className="p-[0.5rem]">
            <ItemShare />
          </div>
          <div className="p-[0.5rem]">
            <ItemShare />
          </div>
          <div className="p-[0.5rem]">
            <ItemShare />
          </div>
        </Slider>
      </div>
    </div>
  );
}
