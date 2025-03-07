"use client";
import React, { useState } from "react";
import Headline from "../../../../componnents/headline";
import Slider from "react-slick";

export default function News() {
  const [activeIndex, setActiveIndex] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    arrows: true,

    beforeChange: (oldIndex: any, newIndex: any) => setActiveIndex(newIndex),
    appendDots: (dots: any) => (
      <div className="flex justify-center">
        <ul className="flex items-center justify-center px-[0.375rem] py-[0.5rem] rounded-[1rem]">{dots}</ul>
      </div>
    ),
    customPaging: (i: any) => (
      <div className={`transition-all duration-300 ${i === activeIndex ? "w-[1.5rem] bg-blue-500 h-[0.5rem] rounded-md" : "w-[0.5rem] bg-gray-300 h-[0.5rem] rounded-full"}`} />
    ),
  };

  return (
    <div className="w-full flex flex-col py-[2rem] py:[1rem] md:gap-[2rem] gap-[1rem] mx-auto grid-container">
      <div className="w-full flex flex-col items-left md:items-center md:justify-center md:md:gap-[1.5rem] gap-[1rem]  gap-[1rem] mx-auto grid-container">
        <Headline title="Nơi chia sẻ kiến thức và góc nhìn" src="icons/star.svg" titleHeading="Tin tức mới cập nhật" />
      </div>
      <div className="bg-gray p-4  rounded-[1rem]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="relative     ">
            <img src="feature/bg-video.png" alt="Main News" className="w-full h-auto   object-cover" />
            <div className="absolute bottom-0 left-0 w-full h-full    flex flex-col w-full   justify-end  rounded-[2rem] " style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
              <p className=" pl-4 p-2 text-white left-3     py-1 text-[0.85rem] md:text-[0.875rem] ">2023-06-27 14:45:18</p>
              <p className="pl-4 p-2 text-white left-3 font-semibold text-[0.875rem] md:text-[1rem]  ">CÙNG HƠN 1000 PHỤ HUYNH ĐI TÌM PHƯƠNG PHÁP DẠY CON HIỀN TÀI</p>
            </div>
          </div>

          <div className="p-4">
            <h3 className="text-lg font-bold mb-4">Mới cập nhật</h3>
            <ul className="space-y-4">
              {[...Array(4)].map((_, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <img src="https://img.youtube.com/vi/ObPxP2WNKS8/hqdefault.jpg" alt="Thumbnail" className="w-16 h-10 rounded" />
                  <div>
                    <p className="text-[0.85rem] md:text-[0.875rem] text-gray-500">2023-03-27 08:57:52</p>
                    <p className="text-[0.875rem] md:text-[1rem] font-medium">CÔNG TY CỔ PHẦN ĐÀO TẠO TÂM TRÍ LỰC THAY ĐỔI ĐỊA CHỈ TRỤ SỞ</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="md:mt-[1.875rem] mt-[1.5rem]">
        <h2 className="md:text-center  font-semibold mb-6 text-[1.5rem] md:text-[2.5rem]">Báo chí nói về chúng tôi</h2>

        <div className="hidden sm:grid grid-cols-2 md:grid-cols-4 gap-4">
          {[...Array(8)].map((_, index) => (
            <div key={index} className="flex items-center justify-center p-4 bg-white rounded-lg shadow">
              <img src="feature/bao-thanh-nien.png" alt={`Logo ${index + 1}`} className="h-auto object-cover" />
            </div>
          ))}
        </div>

        <div className="sm:hidden">
          <Slider {...settings}>
            {[...Array(8)].map((_, index) => (
              <div key={index} className="px-2">
                <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow">
                  <img src="feature/bao-thanh-nien.png" alt={`Logo ${index + 1}`} className="h-auto object-cover" />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
