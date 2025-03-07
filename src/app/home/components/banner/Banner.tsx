"use client";
import CustomArrow from "@/componnents/custom-arrow-slider";
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

interface BannerProps {
  data: { [key: string]: any };
}
export default function Banner({ data }: BannerProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [data["banner"], data["banner"], data["banner"]];
  const partners = [data['partner'], data['partner'], data['partner'], data['partner'], data['partner'] , data['partner']];
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    nextArrow: <CustomArrow direction="next" />,
    prevArrow: <CustomArrow direction="prev" />,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
    ],
    beforeChange: (oldIndex: any, newIndex: any) => setActiveIndex(newIndex),
    appendDots: (dots: any) => (
      <div className="flex justify-center">
        <ul className="flex items-center justify-center bg-[#00141699] px-[0.375rem] py-[0.5rem] rounded-[1rem]">
          {dots}
        </ul>
      </div>
    ),
    customPaging: (i: any) => (
      <div
        className={`transition-all duration-300 ${
          i === activeIndex
            ? "w-[1.5rem] bg-blue-500 h-[0.5rem] rounded-md"
            : "w-[0.5rem] bg-white h-[0.5rem] rounded-full"
        }`}
      />
    ),
  };
  return (
    <div
      className="w-full flex flex-col gap-[4rem] pb-[2rem] "
      style={{
        backgroundImage: "url('bg-banner.png')",
        backgroundSize: "cover",
      }}
    >
      <div className="banner w-full  mx-auto md:pt-[2rem]  grid-container">
        <Slider {...settings}>
          {images.map((src, index) => (
            <div key={index} className="relative w-full outline-none">
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="w-full rounded-[1.5rem] h-[10.9375rem]  md:h-[25rem] object-fill"
              />
            </div>
          ))}
        </Slider>
      </div>
      <div className="flex flex-col w-full mx-auto grid-container gap-[0.5rem]">
        <div className="text-[1rem] font-medium text-[#6B7280]">
          Đối tác đồng hành
        </div>
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 w-full">
          {partners.map((src, index) => (
            <img
              src={src}
              className="w-full h-[4.25rem] object-contain"
              alt="Partner logo"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
