"use client";
import ItemShare from "@/componnents/item-share";
import React from "react";
import Slider from "react-slick";
interface ItemShareProps {
  name: string;
  title: string;
  avatar: string;
  comment: string;
}
const testimonials: ItemShareProps[] = [
  {
    name: "Guillermo Rauch",
    title: "CEO, Vercel",
    avatar: "guillermo.jpeg.png", // Thay bằng URL avatar
    comment: "The @mintlify team absolutely nailed combining docs search and AI Q&A in a delightful experience.",
  },
  {
    name: "Guillermo Rauch",
    title: "CEO, Vercel",
    avatar: "guillermo.jpeg.png",
    comment:
      "Mintlify is absolutely amazing! Their team has been such a pleasure to work with, and just look at our docs - they look gorgeous! I definitely think everyone should try Mintlify out!",
  },
  {
    name: "Guillermo Rauch",
    title: "CEO, Vercel",
    avatar: "guillermo.jpeg.png",
    comment: "Mintlify is amazing for us! Even as a small team we struggled to keep up with dev and update the docs on changes.",
  },
  {
    name: "Guillermo Rauch",
    title: "CEO, Vercel",
    avatar: "guillermo.jpeg.png",
    comment: "Why spend a week coding your own documentation when Mintlify brings you the best in docs?",
  },
  {
    name: "Guillermo Rauch",
    title: "CEO, Vercel",
    avatar: "guillermo.jpeg.png",
    comment: "Why spend a week coding your own documentation when Mintlify brings you the best in docs?",
  },
  {
    name: "Guillermo Rauch",
    title: "CEO, Vercel",
    avatar: "guillermo.jpeg.png",
    comment: "Why spend a week coding your own documentation when Mintlify brings you the best in docs?",
  },
];

const Testimonials = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 6000,
    arrows: false,
  };
  return (
    <section className="w-full flex flex-col py-[2rem] gap-[2rem]    grid-container mx-auto">
      <div className=" ">
        <h2 className="lg:text-center text-2xl lg:text-3xl font-bold text-gray-800 mb-8">Nhận xét của khách hàng</h2>

        <div className="flex  overflow-x-auto gap-6  sm:grid sm:grid-cols-2 lg:grid-cols-3   pb-2">
          {testimonials.map((testimonial, index) => (
            <ItemShare isSeeMore={false} key={index} {...testimonial} />
          ))}
        </div>
        {/* <div className="sm:hidden   ">
          <Slider {...settings} className="">
            {testimonials.map((testimonial, index) => (
              <ItemShare isSeeMore={false} key={index} {...testimonial} />
            ))}
          </Slider>
        </div> */}
      </div>
    </section>
  );
};

export default Testimonials;
