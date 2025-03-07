"use client";
import { useState } from "react";
// import { Search } from "lucide-react";

const categories = [
  "Tất cả",
  "Khóa học online - Phương pháp học tập",
  "Sách & Ấn phẩm",
  "Flashcard & Dụng cụ học tập",
];

const SearchFilter = () => {
  const [selectedCategory, setSelectedCategory] = useState("Tất cả");

  return (
    <div className=" md:py-4 px-6 rounded-xl w-full flex items-center flex-col">
      {/* Ô tìm kiếm */}
      <div className="flex items-center bg-white   rounded-full md:px-4 py-2 shadow-sm w-full max-w-lg mx-auto sm:block hidden relative">
        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute left-4 top-1/2 transform -translate-y-1/2">
          <path
            d="M18 17.5L13 12.5M14.6667 8.33333C14.6667 9.09938 14.5158 9.85792 14.2226 10.5657C13.9295 11.2734 13.4998 11.9164 12.9581 12.4581C12.4164 12.9998 11.7734 13.4295 11.0657 13.7226C10.3579 14.0158 9.59938 14.1667 8.83333 14.1667C8.06729 14.1667 7.30875 14.0158 6.60101 13.7226C5.89328 13.4295 5.25022 12.9998 4.70854 12.4581C4.16687 11.9164 3.73719 11.2734 3.44404 10.5657C3.15088 9.85792 3 9.09938 3 8.33333C3 6.78624 3.61458 5.30251 4.70854 4.20854C5.80251 3.11458 7.28624 2.5 8.83333 2.5C10.3804 2.5 11.8642 3.11458 12.9581 4.20854C14.0521 5.30251 14.6667 6.78624 14.6667 8.33333Z"
            stroke="#374151"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <input type="text" placeholder="Nhập từ khóa tìm kiếm..." className="flex-1 outline-none border-none px-[1.5rem] text-[1rem] text-gray-700 bg-transparent outline-none" />
      </div>

      {/* Bộ lọc danh mục */}
      {/* <div className="flex justify-center gap-3 mt-4 md:flex-wrap sm:flex-nowrap sm:overflow-x-auto sm:whitespace-nowrap">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${
              selectedCategory === category ? "bg-[#259bd4] text-white" : "bg-white border border-gray-300 text-gray-700"
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div> */}
      <div className=" md:mt-4 overflow-x-auto whitespace-nowrap sm:pb-2 space-x-2">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-full text-sm font-medium transition flex-shrink-0 cursor-pointer hover:bg-[#259bd4] hover:text-white ${
              selectedCategory === category ? "bg-[#259bd4] text-white" : "bg-white border border-gray-300 text-gray-700"
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SearchFilter;
