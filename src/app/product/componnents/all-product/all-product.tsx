"use client";
import Image from "next/image";
import ProductCard from "../product-card/product-card";
import SearchFilter from "../search-filter/search-filter";
// import { useEffect, useState } from "react";
import { Product, getProduct } from "@/api/product.api";
const AllProduct = () => {
  // const [products, setProducts] = useState<Product[]>([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const data = await getProduct(1, 20);
  //       setProducts(data);
  //     } catch (error) {
  //       console.error("Lỗi khi lấy sản phẩm:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);
  return (
    <>
      <div className="bg-[#F9FAFB] rounded-2xl shadow-lg p-2 lg:p-6 w-full lg:px-16">
        <div className="flex items-center lg:space-x-2 mb-4 lg:justify-center">
          <div className="flex items-center lg:px-4 py-2 rounded-lg border border-black">
            <Image src="/all.png" alt="icon" width={24} height={24} />
            <p className="text-sm text-gray-500 ml-2">Danh mục sản phảm</p>
          </div>
        </div>

        <div className="flex items-center space-x-2 mb-4 lg:justify-center">
          <h2 className="text-2xl font-bold text-gray-950">
            Tất cả sản phẩm của chúng tôi
          </h2>
        </div>
        <div className="container mx-auto py-3 ">
          <SearchFilter />
        </div>
        <div className="container mx-auto lg:px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3 lg:gap-6">
            {/* {products.map((product, index) => (
              <ProductCard key={index}  />
            ))} */}
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-14">
        <span className="text-center text-[#259bd4] text-base font-medium mr-2">
          Xem thêm sản phẩm
        </span>
        <img src="right.png" />
      </div>
    </>
  );
};

export default AllProduct;
