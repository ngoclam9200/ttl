"use client";
import Image from "next/image";
import ProductCard from "../product-card/product-card";
import SearchFilter from "../search-filter/search-filter";
import Headline from "@/componnents/headline";
// import { useEffect, useState } from "react";

interface Product {
  id: number;
  title: string;
  category: string;
  price: number;
  discount?: boolean;
  rating: number;
  discounted_price: number;
  image: string;
}
const AllProduct = () => {
  const sampleProducts: Product[] = [
    {
      id: 1,
      title: "Bộ thẻ học thông minh cho bé FLASHCA...",
      category: "Flashcard & Dụng cụ học tập",
      rating: 4.9,
      price: 868000,
      discount: false,
      discounted_price: 0,
      image: "feature/product4.png",
    },
    {
      id: 2,
      title: "Ghi chép thông minh - thuộc bài tại lớp",
      category: "Khóa học online - Phương pháp học tập",
      rating: 4.9,
      price: 268000,
      discount: true,
      discounted_price: 0,
      image: "feature/product4.png",
    },
    {
      id: 3,
      title: "FLASHCARD PHONETICS",
      category: "Flashcard & Dụng cụ học tập",
      rating: 4.9,
      price: 250000,
      discount: false,
      discounted_price: 0,
      image: "feature/product4.png",
    },
    {
      id: 4,
      title: "Sách con chữ biến hình",
      category: "Sách & Ấn phẩm",
      rating: 4.9,
      price: 108000,
      discount: false,
      discounted_price: 0,
      image: "feature/product4.png",
    },
    {
      id: 5,
      title: "Sách kích hoạt thiên tài sáng tạo",
      category: "Sách & Ấn phẩm",
      rating: 4.9,
      price: 500000,
      discount: false,
      discounted_price: 0,
      image: "feature/product4.png",
    },
    {
      id: 6,
      title: "Bút Lông Màu 2 Đầu 5 Phút Thuộc Bài - Ar",
      category: "Flashcard & Dụng cụ học tập",
      rating: 4.9,
      price: 198000,
      discount: false,
      discounted_price: 0,
      image: "feature/product4.png",
    },
    {
      id: 7,
      title: "Flashcard cờ 200 quốc gia",
      category: "Flashcard & Dụng cụ học tập",
      rating: 4.9,
      price: 868000,
      discount: true,
      discounted_price: 668000,
      image: "feature/product4.png",
    },
    {
      id: 8,
      title: "Hita Family",
      category: "Ươm mầm thiên tài",
      rating: 4.9,
      price: 2868000,
      discount: false,
      discounted_price: 0,
      image: "feature/product4.png",
    },
    {
      id: 9,
      title: "Học siêu trí nhớ cùng kỷ lục gia thế giới",
      category: "Khóa học online - Phương pháp học tập",
      rating: 4.9,
      price: 868000,
      discount: false,
      discounted_price: 0,
      image: "feature/product4.png",
    },
  ];

  return (
    <>
      <div className="  w-full flex flex-col py-[2rem] py:[1rem] md:gap-[2rem] gap-[1rem] bg-gray ">
        <div className=" w-full flex flex-col items-left md:items-center md:justify-center md:md:gap-[1.5rem] gap-[1rem]  gap-[1rem]  ">
          <Headline title="Danh mục sản phẩm" src="icons/app.png" titleHeading="Tất cả sản phẩm của chúng tôi" />
        </div>
        <div className="  mx-auto w-full">
          <SearchFilter />
        </div>
        <div className="w-full flex flex-col items-center md:gap-[1.5rem] gap-[1rem] justify-center mx-auto grid-container">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3 lg:gap-6">
            {sampleProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-4">
          <span className="text-center text-[#259bd4] text-base font-medium mr-2">Xem thêm sản phẩm</span>
          <img src="icons/arrow-right.png" />
        </div>
      </div>
    </>
  );
};

export default AllProduct;
