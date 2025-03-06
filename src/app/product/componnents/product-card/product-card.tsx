import Image from "next/image";
import { Star } from "lucide-react"; // Icon đánh giá sao
import React from 'react';
import { Product } from "@/api/product.api";

interface ProductProps {
    data: Product;
  }
const ProductCard: React.FC<Product> = () => {
  return (
    // <div className="bg-white rounded-xl shadow-md overflow-hidden lg:p-4">
    //   <div className="relative">
    //     {discount && (
    //       <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
    //         GIẢM GIÁ
    //       </span>
    //     )}
    //     <img
    //       src={image}
    //       alt={title}
    //       className="w-full h-[128px] lg:h-[180px] object-cover rounded-lg"
    //     />
    //   </div>

    //   <p className="text-[#259bd4] text-sm font-bold mt-2">{category}</p>
    //   <h3 className="text-[#001416] text-sm lg:text-lg font-normal  mt-1">{title}</h3>

    //   <div className="flex items-center justify-between mt-2">
    //     <p className="text-[#001416] text-lg lg:text-lg font-bold">
    //       {price.toLocaleString()} đ
    //     </p>
    //     {oldPrice && (
    //       <p className="text-sm text-gray-400 line-through">
    //         {oldPrice.toLocaleString()} đ
    //       </p>
    //     )}
    //   </div>

    //   <div className="flex items-center mt-2">
    //     <Star className="w-4 h-4 text-yellow-400" />
    //     <p className="text-sm text-gray-700 ml-1">{rating}</p>
    //   </div>
    // </div>
    <></>
  );
};

export default ProductCard;
