import Image from "next/image";
import React from "react";
interface Product {
  id: number;
  title: string;
  category: string;
  price: number;
  oldPrice?: number;
  discount?: boolean;
  rating: number;
  discounted_price: number;
  image: string;
}
const ProductCard = ({
  title,
  category,
  price,
  discounted_price,
  discount,
  rating,
  image,
}: Product) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shawdow-md">
      <div className="relative">
        {discount && (
          <span className="absolute top-2 left-0 bg-white text-black text-xs font-bold px-2 py-1 rounded-r flex gap-2 shadow-none border border-[#EBEBEB]">
            <img src="icons/fire-icon.png" alt="discount" className="w-4 h-4" />
            GIẢM GIÁ
          </span>
        )}
        <img
          src={image}
          alt={title}
          className="w-full h-[128px] lg:h-[180px]   rounded-t-lg"
        />
      </div>
      <div className="p-4">
        <div className="flex justify-between">
          <p className="text-[#259bd4] text-sm font-bold mt-2">{category}</p>
          <div className="flex items-center mt-2">
            <img src="icons/star.png" alt="star" className="w-4 h-4" />
            <p className="text-sm text-gray-700 ml-1">{rating}</p>
          </div>
        </div>

        <h3 className="text-[#001416] text-[1rem] mt-1">{title}</h3>

        <div className="flex items-center mt-2 gap-2">
          {discounted_price > 0 && (
            <p className="text-[1rem] lg:text-[1.25rem] font-bold text-gray-400 line-through">
              {discounted_price.toLocaleString()} đ
            </p>
          )}
          <p
            className={`text-[#001416] text-[1rem] lg:text-[1.25rem] font-bold ${discounted_price > 0 ? "text-red-600" : ""}`}
          >
            {price.toLocaleString()} đ
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
