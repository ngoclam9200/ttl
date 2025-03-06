"use client";
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CustomArrow from "@/componnents/custom-arrow-slider";

export default function HitaGameSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = ["/feature/banner-product.png", "/feature/banner-product.png", "/feature/banner-product.png"];

  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    arrows: false,
    beforeChange: (oldIndex: any, newIndex: any) => setActiveIndex(newIndex),
    appendDots: (dots: any) => (
      <div className="flex justify-center mt-4">
        <ul className="flex items-center justify-center      rounded-xl">{dots}</ul>
      </div>
    ),
    customPaging: (i: any) => <div className={`transition-all duration-300 ${i === activeIndex ? "w-6 bg-blue-500 h-2 rounded-md" : "w-2 bg-white h-2 rounded-full"}`} />,
  };

  return (
    <section className="w-full flex flex-col gap-[4rem]  relative " style={{ backgroundImage: "url('bg-banner.png')", backgroundSize: "cover" }}>
      <div className=" banner-product md:pt-[2rem]  absolute top-0 left-1/2 transform -translate-x-1/2  z-[9999]" style={{ maxWidth: "1024px" }}>
        <Slider {...settings}>
          {images.map((src, index) => (
            <div key={index} className="relative w-full">
              <img src={src} alt={`Slide ${index + 1}`} className="w-full rounded-xl h-[250px] md:h-[400px]" />
            </div>
          ))}
        </Slider>
      </div>
      <div className="relative mt-[100px] h-[40rem]  bg-[#272727] mx-[1rem] text-white rounded-2xl md:pt-[2rem] flex flex-col  items-center justify-center">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-8 items-center justify-end mt-auto " style={{ maxWidth: "1024px" }}>
          <div className=" ">
            <div className="flex items-center space-x-2">
              <img src="Icon.png" className="w-6 h-6" />
              <p className="text-sm  ">Tính năng</p>
            </div>
            <h2 className="text-[2rem] font-bold">HITA GAME - Trò chơi của những hiền tài</h2>
          </div>
          <div className="   ">
            <p className="  text-[#D1D1D1] max-w-lg mx-auto">
              Dưới đây là cái nhìn gần hơn về các con số định nghĩa hệ thống thiết kế của chúng tôi. Xem chúng tôi đo lường như thế nào!
            </p>
          </div>
        </div>
        <div className="grid   grid-cols-2 lg:grid-cols-4 gap-4 text-white w-full " style={{backgroundColor:"linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.06) 100%)"}}>
          <div className="flex flex-col items-center  p-4 rounded-lg">
            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M3 2.96411H4.66667L5 4.63078M5 4.63078H18L14.6667 11.2974H6.33333M5 4.63078L6.33333 11.2974M6.33333 11.2974L4.4225 13.2083C3.8975 13.7333 4.26917 14.6308 5.01167 14.6308H14.6667M14.6667 14.6308C14.2246 14.6308 13.8007 14.8064 13.4882 15.1189C13.1756 15.4315 13 15.8554 13 16.2974C13 16.7395 13.1756 17.1634 13.4882 17.476C13.8007 17.7885 14.2246 17.9641 14.6667 17.9641C15.1087 17.9641 15.5326 17.7885 15.8452 17.476C16.1577 17.1634 16.3333 16.7395 16.3333 16.2974C16.3333 15.8554 16.1577 15.4315 15.8452 15.1189C15.5326 14.8064 15.1087 14.6308 14.6667 14.6308ZM8 16.2974C8 16.7395 7.8244 17.1634 7.51184 17.476C7.19928 17.7885 6.77536 17.9641 6.33333 17.9641C5.89131 17.9641 5.46738 17.7885 5.15482 17.476C4.84226 17.1634 4.66667 16.7395 4.66667 16.2974C4.66667 15.8554 4.84226 15.4315 5.15482 15.1189C5.46738 14.8064 5.89131 14.6308 6.33333 14.6308C6.77536 14.6308 7.19928 14.8064 7.51184 15.1189C7.8244 15.4315 8 15.8554 8 16.2974Z"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <p className="text-sm">Tiện ích & Ví dụ</p>
            <p className="text-2xl font-bold">200+</p>
          </div>
          <div className="flex flex-col items-center  p-4 rounded-lg">
            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M3 2.96411H4.66667L5 4.63078M5 4.63078H18L14.6667 11.2974H6.33333M5 4.63078L6.33333 11.2974M6.33333 11.2974L4.4225 13.2083C3.8975 13.7333 4.26917 14.6308 5.01167 14.6308H14.6667M14.6667 14.6308C14.2246 14.6308 13.8007 14.8064 13.4882 15.1189C13.1756 15.4315 13 15.8554 13 16.2974C13 16.7395 13.1756 17.1634 13.4882 17.476C13.8007 17.7885 14.2246 17.9641 14.6667 17.9641C15.1087 17.9641 15.5326 17.7885 15.8452 17.476C16.1577 17.1634 16.3333 16.7395 16.3333 16.2974C16.3333 15.8554 16.1577 15.4315 15.8452 15.1189C15.5326 14.8064 15.1087 14.6308 14.6667 14.6308ZM8 16.2974C8 16.7395 7.8244 17.1634 7.51184 17.476C7.19928 17.7885 6.77536 17.9641 6.33333 17.9641C5.89131 17.9641 5.46738 17.7885 5.15482 17.476C4.84226 17.1634 4.66667 16.7395 4.66667 16.2974C4.66667 15.8554 4.84226 15.4315 5.15482 15.1189C5.46738 14.8064 5.89131 14.6308 6.33333 14.6308C6.77536 14.6308 7.19928 14.8064 7.51184 15.1189C7.8244 15.4315 8 15.8554 8 16.2974Z"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <p className="text-sm">Thành phần & Biến thể</p>
            <p className="text-2xl font-bold">5900+</p>
          </div>
          <div className="flex flex-col items-center  p-4 rounded-lg">
            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M3 2.96411H4.66667L5 4.63078M5 4.63078H18L14.6667 11.2974H6.33333M5 4.63078L6.33333 11.2974M6.33333 11.2974L4.4225 13.2083C3.8975 13.7333 4.26917 14.6308 5.01167 14.6308H14.6667M14.6667 14.6308C14.2246 14.6308 13.8007 14.8064 13.4882 15.1189C13.1756 15.4315 13 15.8554 13 16.2974C13 16.7395 13.1756 17.1634 13.4882 17.476C13.8007 17.7885 14.2246 17.9641 14.6667 17.9641C15.1087 17.9641 15.5326 17.7885 15.8452 17.476C16.1577 17.1634 16.3333 16.7395 16.3333 16.2974C16.3333 15.8554 16.1577 15.4315 15.8452 15.1189C15.5326 14.8064 15.1087 14.6308 14.6667 14.6308ZM8 16.2974C8 16.7395 7.8244 17.1634 7.51184 17.476C7.19928 17.7885 6.77536 17.9641 6.33333 17.9641C5.89131 17.9641 5.46738 17.7885 5.15482 17.476C4.84226 17.1634 4.66667 16.7395 4.66667 16.2974C4.66667 15.8554 4.84226 15.4315 5.15482 15.1189C5.46738 14.8064 5.89131 14.6308 6.33333 14.6308C6.77536 14.6308 7.19928 14.8064 7.51184 15.1189C7.8244 15.4315 8 15.8554 8 16.2974Z"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <p className="text-sm">Bộ sưu tập Tài sản</p>
            <p className="text-2xl font-bold">1200+</p>
          </div>
          <div className="flex flex-col items-center  p-4 rounded-lg">
            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M3 2.96411H4.66667L5 4.63078M5 4.63078H18L14.6667 11.2974H6.33333M5 4.63078L6.33333 11.2974M6.33333 11.2974L4.4225 13.2083C3.8975 13.7333 4.26917 14.6308 5.01167 14.6308H14.6667M14.6667 14.6308C14.2246 14.6308 13.8007 14.8064 13.4882 15.1189C13.1756 15.4315 13 15.8554 13 16.2974C13 16.7395 13.1756 17.1634 13.4882 17.476C13.8007 17.7885 14.2246 17.9641 14.6667 17.9641C15.1087 17.9641 15.5326 17.7885 15.8452 17.476C16.1577 17.1634 16.3333 16.7395 16.3333 16.2974C16.3333 15.8554 16.1577 15.4315 15.8452 15.1189C15.5326 14.8064 15.1087 14.6308 14.6667 14.6308ZM8 16.2974C8 16.7395 7.8244 17.1634 7.51184 17.476C7.19928 17.7885 6.77536 17.9641 6.33333 17.9641C5.89131 17.9641 5.46738 17.7885 5.15482 17.476C4.84226 17.1634 4.66667 16.7395 4.66667 16.2974C4.66667 15.8554 4.84226 15.4315 5.15482 15.1189C5.46738 14.8064 5.89131 14.6308 6.33333 14.6308C6.77536 14.6308 7.19928 14.8064 7.51184 15.1189C7.8244 15.4315 8 15.8554 8 16.2974Z"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <p className="text-sm">Phong cách, Biến & Token</p>
            <p className="text-2xl font-bold">200+</p>
          </div>
        </div>
      </div>

      {/* <div className="text-center text-white">
        <h2 className="text-3xl font-bold">HITA GAME - Trò chơi của những hiền tài</h2>
        <p className="mt-2 text-gray-400 max-w-2xl mx-auto">Dưới đây là cái nhìn tổng quan về các con số định nghĩa hệ thống của chúng tôi. Xem chúng tôi đã làm được những gì!</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white text-center">
        <div>
          <p className="text-4xl font-bold">200+</p>
          <p className="text-gray-400 mt-1">Tính kết & Ví dụ</p>
        </div>
        <div>
          <p className="text-4xl font-bold">5900+</p>
          <p className="text-gray-400 mt-1">Thành phần & Biến thể</p>
        </div>
        <div>
          <p className="text-4xl font-bold">1200+</p>
          <p className="text-gray-400 mt-1">Bộ sưu tập tài sản</p>
        </div>
        <div>
          <p className="text-4xl font-bold">200+</p>
          <p className="text-gray-400 mt-1">Phong cách, Biến & Token</p>
        </div>
      </div> */}
    </section>
  );
}
