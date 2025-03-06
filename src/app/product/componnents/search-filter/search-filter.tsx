"use client";
import { useState } from "react";
import { Search } from "lucide-react";

const categories = [
  "Tất cả",
  "Khóa học online - Phương pháp học tập",
  "Sách & Ấn phẩm",
  "Flashcard & Dụng cụ học tập",
];

const SearchFilter = () => {
  const [selectedCategory, setSelectedCategory] = useState("Tất cả");

  return (
    <div className=" py-4 px-6 rounded-xl">
      {/* Ô tìm kiếm */}
      <div className="flex items-center bg-white border rounded-full px-4 py-2 shadow-sm w-full max-w-lg mx-auto sm:block hidden">
        <Search className="w-5 h-5 text-gray-400 " />
        <input
          type="text"
          placeholder="Nhập từ khóa tìm kiếm..."
          className="flex-1 outline-none border-none px-2 text-gray-700 bg-transparent"
        />
      </div>

      {/* Bộ lọc danh mục */}
      <div className="flex justify-center gap-3 mt-4 flex-wrap sm:flex-nowrap sm:overflow-x-auto sm:whitespace-nowrap">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${
              selectedCategory === category
                ? "bg-[#259bd4] text-white"
                : "bg-white border border-gray-300 text-gray-700"
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
