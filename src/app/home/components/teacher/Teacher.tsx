"use client";
import Headline from "../../../../componnents/headline";
import ItemPerson from "../../../../componnents/item-person";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState } from "react";
import CustomArrow from "@/componnents/custom-arrow-slider";

export default function Student() {
  const [activeIndex, setActiveIndex] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    arrows: true,
    nextArrow: <CustomArrow direction="next" position="0.5rem" />,
    prevArrow: <CustomArrow direction="prev" position="0.5rem" />,
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
          slidesToShow: 2,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="  w-full flex flex-col   md:gap-[2.5rem] md:gap-[1.5rem] gap-[1rem] py-[2rem] mt-[2rem]">
      <div className="w-full flex flex-col   md:items-center md:justify-center md:md:gap-[1.5rem] gap-[1rem]  gap-[1rem]     mx-auto grid-container">
        <Headline title=" Đội ngũ " src="icons/ic_person.svg" titleHeading="Đội ngũ giảng viên" />
      </div>

      <div className="w-full grid-container pt-[0rem] mx-auto" style={{ backgroundImage: "url('bg-world.png')" }}>
        <Slider {...settings} className="flex gap-x-4">
          <div className="px-[0.5rem]">
            <ItemPerson src="teacher.png" />
          </div>
          <div className="px-[0.5rem]">
            <ItemPerson src="teacher.png" />
          </div>
          <div className="px-[0.5rem]">
            <ItemPerson src="teacher.png" />
          </div>
          <div className="px-[0.5rem]">
            <ItemPerson src="teacher.png" />
          </div>
          <div className="px-[0.5rem]">
            <ItemPerson src="teacher.png" />
          </div>
          <div className="px-[0.5rem]">
            <ItemPerson src="teacher.png" />
          </div>
          <div className="px-[0.5rem]">
            <ItemPerson src="teacher.png" />
          </div>
        </Slider>
      </div>
    </div>
  );
}
