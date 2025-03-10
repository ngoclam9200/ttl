"use client";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function HitaGameSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [
    "/feature/banner-product.png",
    "/feature/banner-product.png",
    "/feature/banner-product.png",
  ];
  const [sliderHeight, setSliderHeight] = useState(0);
  const [bannerHeight, setBannerHeight] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 100000,
    arrows: false,
    beforeChange: (oldIndex: any, newIndex: any) => setActiveIndex(newIndex),
    appendDots: (dots: any) => (
      <div className="flex justify-center mt-4">
        <ul className="flex items-center justify-center rounded-xl">{dots}</ul>
      </div>
    ),
    customPaging: (i: any) => (
      <div
        className={`transition-all duration-300 ${i === activeIndex ? "w-6 bg-blue-500 h-2 rounded-md" : "w-2 bg-white h-2 rounded-full"}`}
      />
    ),
  };

  useEffect(() => {
    const handleResize = () => {
      const banner = document.querySelector(".banner-product") as HTMLElement;
      const information1 = document.querySelector(
        ".information1",
      ) as HTMLElement;
      const information2 = document.querySelector(
        ".information2",
      ) as HTMLElement;

      if (banner && information1 && information2) {
        const bannerHeight = banner.offsetHeight;
        setBannerHeight(bannerHeight);
        const informationHeight1 = information1.offsetHeight;
        const informationHeight2 = information2.offsetHeight;
        setSliderHeight(
          bannerHeight + informationHeight1 + informationHeight2 + 90,
        );
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      className="w-full flex flex-col relative"
      style={{
        backgroundImage: "url('bg-banner.png')",
        backgroundSize: "cover",
      }}
    >
      <div
        style={{ paddingTop: `${bannerHeight / 10}px` }}
        className="banner-product absolute top-0 left-1/2 transform -translate-x-1/2 z-[9999] max-w-[100%] md:max-w-[768px]  xl:max-w-[80%] lg:max-w-[80%]"
      >
        <Slider {...settings}>
          {images.map((src, index) => (
            <div key={index} className="relative w-full">
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="w-full md:rounded-xl h-[250px] md:h-[400px]"
              />
            </div>
          ))}
        </Slider>
      </div>
      <div
        style={{
          height: `${sliderHeight - bannerHeight / 3}px`,
          marginTop: `${bannerHeight / 3}px`,
        }}
        className={`relative  bg-[#272727] md:mx-[1rem] text-white md:rounded-t-2xl  flex flex-col items-center justify-center `}
      >
        <div className=" information1 w-full grid grid-cols-1 md:grid-cols-2 gap-x-8 items-center justify-end mt-auto max-w-[100%] md:max-w-[768px] xl:max-w-[80%] lg:max-w-[80%]">
          <div className=" md:mx-0 mx-[1rem]">
            <div className="flex items-center space-x-2">
              <img src="Icon.png" className="w-6 h-6" />
              <p className="text-sm md:text-md  ">Tính năng</p>
            </div>
            <h2 className="md:text-[2rem] text-[1.5rem] font-bold">
              HITA GAME - Trò chơi của những hiền tài
            </h2>
          </div>
          <div className=" md:mx-0 mx-[1rem]  ">
            <p className="  text-[#D1D1D1] max-w-lg md:mx-auto">
              Dưới đây là cái nhìn gần hơn về các con số định nghĩa hệ thống
              thiết kế của chúng tôi. Xem chúng tôi đo lường như thế nào!
            </p>
          </div>
        </div>
        <div className="information2 w-[95%] mb-[2rem] py-4 md:mx-[1rem] grid lg:border lg:border-[#FFFFFF1F] grid-cols-2 lg:grid-cols-4 gap-4 text-white rounded-[1rem] lg:bg-gradient-to-b lg:from-transparent lg:to-[rgba(255,255,255,0.06)]">
          <div className="flex flex-col items-center lg:p-4 rounded-lg relative justify-center gap-2">
            <div className="rounded-full w-[2.5rem] h-[2.5rem] bg-[#272727]  bg-gradient-to-b from-transparent to-[rgba(255,255,255,0.12)] flex items-center justify-center">
              <svg
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 2.96411H4.66667L5 4.63078M5 4.63078H18L14.6667 11.2974H6.33333M5 4.63078L6.33333 11.2974M6.33333 11.2974L4.4225 13.2083C3.8975 13.7333 4.26917 14.6308 5.01167 14.6308H14.6667M14.6667 14.6308C14.2246 14.6308 13.8007 14.8064 13.4882 15.1189C13.1756 15.4315 13 15.8554 13 16.2974C13 16.7395 13.1756 17.1634 13.4882 17.476C13.8007 17.7885 14.2246 17.9641 14.6667 17.9641C15.1087 17.9641 15.5326 17.7885 15.8452 17.476C16.1577 17.1634 16.3333 16.7395 16.3333 16.2974C16.3333 15.8554 16.1577 15.4315 15.8452 15.1189C15.5326 14.8064 15.1087 14.6308 14.6667 14.6308ZM8 16.2974C8 16.7395 7.8244 17.1634 7.51184 17.476C7.19928 17.7885 6.77536 17.9641 6.33333 17.9641C5.89131 17.9641 5.46738 17.7885 5.15482 17.476C4.84226 17.1634 4.66667 16.7395 4.66667 16.2974C4.66667 15.8554 4.84226 15.4315 5.15482 15.1189C5.46738 14.8064 5.89131 14.6308 6.33333 14.6308C6.77536 14.6308 7.19928 14.8064 7.51184 15.1189C7.8244 15.4315 8 15.8554 8 16.2974Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <p className="lg:text-sm text-[0.85rem]">Tiện ích & Ví dụ</p>
            <p className="lg:text-[2rem] md:text-[2rem] text-[1.1rem] font-bold">
              200+
            </p>
            <div className="hidden   absolute right-0 lg:block ">
              <svg
                width="2"
                height="124"
                viewBox="0 0 2 124"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="1"
                  height="124"
                  transform="translate(0.75)"
                  fill="white"
                  fillOpacity="0.08"
                />
              </svg>
            </div>
          </div>
          <div className="flex flex-col items-center  lg:p-4 rounded-lg justify-center relative gap-2">
            <div className="rounded-full w-[2.5rem] h-[2.5rem] bg-[#272727]  bg-gradient-to-b from-transparent to-[rgba(255,255,255,0.12)] flex items-center justify-center">
              <svg
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 2.96411H4.66667L5 4.63078M5 4.63078H18L14.6667 11.2974H6.33333M5 4.63078L6.33333 11.2974M6.33333 11.2974L4.4225 13.2083C3.8975 13.7333 4.26917 14.6308 5.01167 14.6308H14.6667M14.6667 14.6308C14.2246 14.6308 13.8007 14.8064 13.4882 15.1189C13.1756 15.4315 13 15.8554 13 16.2974C13 16.7395 13.1756 17.1634 13.4882 17.476C13.8007 17.7885 14.2246 17.9641 14.6667 17.9641C15.1087 17.9641 15.5326 17.7885 15.8452 17.476C16.1577 17.1634 16.3333 16.7395 16.3333 16.2974C16.3333 15.8554 16.1577 15.4315 15.8452 15.1189C15.5326 14.8064 15.1087 14.6308 14.6667 14.6308ZM8 16.2974C8 16.7395 7.8244 17.1634 7.51184 17.476C7.19928 17.7885 6.77536 17.9641 6.33333 17.9641C5.89131 17.9641 5.46738 17.7885 5.15482 17.476C4.84226 17.1634 4.66667 16.7395 4.66667 16.2974C4.66667 15.8554 4.84226 15.4315 5.15482 15.1189C5.46738 14.8064 5.89131 14.6308 6.33333 14.6308C6.77536 14.6308 7.19928 14.8064 7.51184 15.1189C7.8244 15.4315 8 15.8554 8 16.2974Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <p className="lg:text-sm text-[0.85rem]">Thành phần & Biến thể</p>
            <p className="lg:text-[2rem] md:text-[2rem] text-[1.1rem] font-bold">
              5900+
            </p>
            <div className="hidden absolute right-0 lg:block">
              <svg
                width="2"
                height="124"
                viewBox="0 0 2 124"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="1"
                  height="124"
                  transform="translate(0.75)"
                  fill="white"
                  fillOpacity="0.08"
                />
              </svg>
            </div>
          </div>
          <div className="flex flex-col items-center lg:p-4 rounded-lg justify-center relative gap-2">
            <div className="rounded-full w-[2.5rem] h-[2.5rem] bg-[#272727]  bg-gradient-to-b from-transparent to-[rgba(255,255,255,0.12)] flex items-center justify-center">
              <svg
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 2.96411H4.66667L5 4.63078M5 4.63078H18L14.6667 11.2974H6.33333M5 4.63078L6.33333 11.2974M6.33333 11.2974L4.4225 13.2083C3.8975 13.7333 4.26917 14.6308 5.01167 14.6308H14.6667M14.6667 14.6308C14.2246 14.6308 13.8007 14.8064 13.4882 15.1189C13.1756 15.4315 13 15.8554 13 16.2974C13 16.7395 13.1756 17.1634 13.4882 17.476C13.8007 17.7885 14.2246 17.9641 14.6667 17.9641C15.1087 17.9641 15.5326 17.7885 15.8452 17.476C16.1577 17.1634 16.3333 16.7395 16.3333 16.2974C16.3333 15.8554 16.1577 15.4315 15.8452 15.1189C15.5326 14.8064 15.1087 14.6308 14.6667 14.6308ZM8 16.2974C8 16.7395 7.8244 17.1634 7.51184 17.476C7.19928 17.7885 6.77536 17.9641 6.33333 17.9641C5.89131 17.9641 5.46738 17.7885 5.15482 17.476C4.84226 17.1634 4.66667 16.7395 4.66667 16.2974C4.66667 15.8554 4.84226 15.4315 5.15482 15.1189C5.46738 14.8064 5.89131 14.6308 6.33333 14.6308C6.77536 14.6308 7.19928 14.8064 7.51184 15.1189C7.8244 15.4315 8 15.8554 8 16.2974Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <p className="lg:text-sm text-[0.85rem]">Bộ sưu tập Tài sản</p>
            <p className="lg:text-[2rem] md:text-[2rem] text-[1.1rem] font-bold">
              1200+
            </p>
            <div className="hidden absolute right-0 lg:block  ">
              <svg
                width="2"
                height="124"
                viewBox="0 0 2 124"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="1"
                  height="124"
                  transform="translate(0.75)"
                  fill="white"
                  fillOpacity="0.08"
                />
              </svg>
            </div>
          </div>
          <div className="flex flex-col items-center  lg:p-4 rounded-lg justify-center gap-2">
            <div className="rounded-full w-[2.5rem] h-[2.5rem] bg-[#272727]  bg-gradient-to-b from-transparent to-[rgba(255,255,255,0.12)] flex items-center justify-center">
              <svg
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 2.96411H4.66667L5 4.63078M5 4.63078H18L14.6667 11.2974H6.33333M5 4.63078L6.33333 11.2974M6.33333 11.2974L4.4225 13.2083C3.8975 13.7333 4.26917 14.6308 5.01167 14.6308H14.6667M14.6667 14.6308C14.2246 14.6308 13.8007 14.8064 13.4882 15.1189C13.1756 15.4315 13 15.8554 13 16.2974C13 16.7395 13.1756 17.1634 13.4882 17.476C13.8007 17.7885 14.2246 17.9641 14.6667 17.9641C15.1087 17.9641 15.5326 17.7885 15.8452 17.476C16.1577 17.1634 16.3333 16.7395 16.3333 16.2974C16.3333 15.8554 16.1577 15.4315 15.8452 15.1189C15.5326 14.8064 15.1087 14.6308 14.6667 14.6308ZM8 16.2974C8 16.7395 7.8244 17.1634 7.51184 17.476C7.19928 17.7885 6.77536 17.9641 6.33333 17.9641C5.89131 17.9641 5.46738 17.7885 5.15482 17.476C4.84226 17.1634 4.66667 16.7395 4.66667 16.2974C4.66667 15.8554 4.84226 15.4315 5.15482 15.1189C5.46738 14.8064 5.89131 14.6308 6.33333 14.6308C6.77536 14.6308 7.19928 14.8064 7.51184 15.1189C7.8244 15.4315 8 15.8554 8 16.2974Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <p className="lg:text-sm text-[0.85rem]">
              Phong cách, Biến & Token
            </p>
            <p className="lg:text-[2rem] md:text-[2rem] text-[1.1rem] font-bold">
              200+
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#272727] bg-gradient-to-b from-transparent to-white md:mx-[1rem] h-[20px] "></div>
    </section>
  );
}
