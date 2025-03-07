"use client";
import Headline from "../../../../componnents/headline";
import ItemPerson from "../../../../componnents/item-person";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState } from "react";
import CustomArrow from "@/componnents/custom-arrow-slider";

interface BannerProps {
  data: { [key: string]: any };
}
export default function Student({ data }: BannerProps) {
  const teachers: any[] = data ? JSON.parse(data["teacher"]) : [];
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
    nextArrow: <CustomArrow direction="next" />,
    prevArrow: <CustomArrow direction="prev" />,
    beforeChange: (oldIndex: any, newIndex: any) => setActiveIndex(newIndex),
    appendDots: (dots: any) => (
      <div className="flex justify-center">
        <ul className="flex items-center justify-center px-[0.375rem] py-[0.5rem] rounded-[1rem]">
          {dots}
        </ul>
      </div>
    ),
    customPaging: (i: any) => (
      <div
        className={`transition-all duration-300 ${
          i === activeIndex
            ? "w-[1.5rem] bg-blue-500 h-[0.5rem] rounded-md"
            : "w-[0.5rem] bg-gray-300 h-[0.5rem] rounded-full"
        }`}
      />
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
    <div className="bg-linear w-full flex flex-col pt-[2rem] md:gap-[2.5rem] gap-[1.5rem]">
      <div className="w-full flex flex-col   md:items-center md:justify-center md:gap-[1.5rem]  gap-[1rem]     mx-auto grid-container">
        <Headline
          title=" Đội ngũ "
          src="icons/ic_person.svg"
          titleHeading="Đội ngũ giảng viên"
        />
      </div>

      <div
        className="w-full grid-container pt-[0rem] mx-auto"
        style={{ backgroundImage: "url('bg-world.png')" }}
      >
        <div className="md:text-[1rem] text-[0.875rem] text-[#6B7280] md:text-center pb-[1rem] md:pb-[1.5rem]">
          Và bạn cũng có thể là người tiếp theo
        </div>

        <Slider {...settings} className="flex gap-x-4">
          {teachers.map((item, index) => (
            <div className="px-[0.125rem]">
              <ItemPerson src={item.image} name={item.name} description={item.description} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
