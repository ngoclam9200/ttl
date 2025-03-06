"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 120);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const menuItems = [
    { label: "Trang chủ", href: "/", isActive: true },
    { label: "Sản phẩm", href: "/products" },
    { label: "Tin tức", href: "/news" },
    { label: "Kiểm tra đơn hàng", href: "/order-tracking" },
    { label: "Liên hệ", href: "/contact" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={`w-full bg-white shadow-md bg-white/80 shadow-md backdrop-blur-[10px] z-[99999] ${isScrolled ? "fixed" : "relative"}`}>
      <div className="container mx-auto flex items-center justify-between p-4" style={{ maxWidth: "1190px" }}>
        <div className="flex items-center gap-2">
          <div
            onClick={() => setIsOpen(!isOpen)}
            className=" flex md:hidden w-[2.5rem] h-[2.5rem] bg-white rounded-xl shadow-[0px_0px_0px_1px_rgba(235,235,235,1.00)]  items-center justify-center  "
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 18H20M4 6H20H4ZM4 12H20H4Z" stroke="#001416" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <img src="/feature/Logo.png" alt="Logo" className="h-[2.5rem]" />
        </div>

        <nav className="hidden md:flex space-x-6 text-gray-700">
          {menuItems.map((item, index) => (
            <Link key={index} href={item.href} className={`text-base font-medium inline-block hover:text-blue-600  ${item.isActive ? "text-[#259bd4]" : "text-[#001416]"}`}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <div className=" flex md:hidden w-[2.5rem] h-[2.5rem] bg-white rounded-xl shadow-[0px_0px_0px_1px_rgba(235,235,235,1.00)]  items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M14.9386 13.3945L14.6203 13.8423L15.0088 14.2308L20.7844 20.0064C20.8826 20.1098 20.9369 20.2473 20.9356 20.39C20.9344 20.5342 20.8765 20.6722 20.7746 20.7741C20.6726 20.8761 20.5346 20.934 20.3904 20.9352C20.2477 20.9364 20.1102 20.8822 20.0069 20.784L14.2324 15.0095L13.8439 14.621L13.3961 14.9394C12.4162 15.6362 11.2634 16.0498 10.064 16.1349C8.86461 16.22 7.66494 15.9734 6.59645 15.4219C5.52796 14.8705 4.63187 14.0356 4.00639 13.0087C3.3809 11.9818 3.05016 10.8025 3.05039 9.60009L3.05039 9.59988C3.05026 8.56903 3.29344 7.55269 3.76016 6.63354C4.22688 5.71439 4.90396 4.91838 5.73632 4.31024C6.56869 3.7021 7.53284 3.29902 8.55037 3.13376C9.56789 2.9685 10.6101 3.04575 11.5921 3.35921C12.5741 3.67267 13.4683 4.21349 14.2019 4.9377C14.9356 5.6619 15.4879 6.54904 15.814 7.52695C16.1401 8.50487 16.2308 9.54595 16.0787 10.5655C15.9266 11.5851 15.536 12.5544 14.9386 13.3945ZM9.60039 4.14997C8.15496 4.14997 6.76873 4.72416 5.74666 5.74624C4.72458 6.76831 4.15039 8.15454 4.15039 9.59997C4.15039 11.0454 4.72458 12.4316 5.74666 13.4537C6.76873 14.4758 8.15496 15.05 9.60039 15.05C11.0458 15.05 12.432 14.4758 13.4541 13.4537C14.4762 12.4316 15.0504 11.0454 15.0504 9.59997C15.0504 8.15454 14.4762 6.76831 13.4541 5.74624C12.432 4.72416 11.0458 4.14997 9.60039 4.14997Z"
                stroke="#001416"
                strokeWidth="1.3"
              />
            </svg>
          </div>

          <div className="flex items-center ">
            <div className="px-3 py-1.5 bg-white rounded-xl shadow-[0px_0px_0px_1px_rgba(235,235,235,1.00)] flex items-center gap-2">
              <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M3 3.5H5L5.4 5.5M5.4 5.5H21L17 13.5H7M5.4 5.5L7 13.5M7 13.5L4.707 15.793C4.077 16.423 4.523 17.5 5.414 17.5H17M17 17.5C16.4696 17.5 15.9609 17.7107 15.5858 18.0858C15.2107 18.4609 15 18.9696 15 19.5C15 20.0304 15.2107 20.5391 15.5858 20.9142C15.9609 21.2893 16.4696 21.5 17 21.5C17.5304 21.5 18.0391 21.2893 18.4142 20.9142C18.7893 20.5391 19 20.0304 19 19.5C19 18.9696 18.7893 18.4609 18.4142 18.0858C18.0391 17.7107 17.5304 17.5 17 17.5ZM9 19.5C9 20.0304 8.78929 20.5391 8.41421 20.9142C8.03914 21.2893 7.53043 21.5 7 21.5C6.46957 21.5 5.96086 21.2893 5.58579 20.9142C5.21071 20.5391 5 20.0304 5 19.5C5 18.9696 5.21071 18.4609 5.58579 18.0858C5.96086 17.7107 6.46957 17.5 7 17.5C7.53043 17.5 8.03914 17.7107 8.41421 18.0858C8.78929 18.4609 9 18.9696 9 19.5Z"
                  stroke="#001416"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="hidden md:block text-[#001416] text-base">0 ₫</span>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className={`flex flex-col md:hidden bg-white border-t p-4 gap-2 z-[99999] w-full ${!isScrolled ? "fixed" : ""}`}>
          {menuItems.map((item, index) => (
            <Link key={index} href={item.href} className={`text-base font-medium inline-block hover:text-blue-600  ${item.isActive ? "text-[#259bd4]" : "text-[#001416]"}`}>
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
