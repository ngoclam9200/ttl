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
    { label: "Sản phẩm", href: "/product" },
    { label: "Tin tức", href: "/news" },
    { label: "Kiểm tra đơn hàng", href: "/order-tracking" },
    { label: "Liên hệ", href: "/contact" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className={`w-full bg-white shadow-md bg-white/80 shadow-md backdrop-blur-[10px] z-[99999] ${isScrolled ? "fixed" : "relative"}`}
    >
      <div
        className="container mx-auto flex items-center justify-between p-4"
        style={{ maxWidth: "1190px" }}
      >
        <div className="flex items-center gap-2">
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="cursor-pointer flex md:hidden w-[2.5rem] h-[2.5rem] bg-white rounded-xl shadow-[0px_0px_0px_1px_rgba(235,235,235,1.00)]  items-center justify-center  "
          >
            {!isOpen ? (
              <img
                src="/icons/menu.png"
                alt="Menu"
                className="w-[1.25rem] h-[1.25rem]"
              />
            ) : (
              <img
                src="/icons/close-menu.png"
                alt="Menu"
                className="w-[1.25rem] h-[1.25rem]"
              ></img>
            )}
          </div>
          <img src="/feature/Logo.png" alt="Logo" className="h-[2.5rem]" />
        </div>

        <nav className="hidden md:flex space-x-6 text-gray-700">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={`text-base font-medium inline-block hover:text-[#259BD4]  ${item.isActive ? "text-[#259bd4]" : "text-[#001416]"}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {!isOpen && (
          <div className="flex items-center space-x-4">
            <div className="cursor-pointer flex md:hidden w-[2.5rem] h-[2.5rem] bg-white rounded-xl shadow-[0px_0px_0px_1px_rgba(235,235,235,1.00)]  items-center justify-center">
              <img
                src="/icons/search.png"
                alt="Menu"
                className="w-[1.25rem] h-[1.25rem]"
              />
            </div>

            <div className="flex items-center ">
              <div className="px-3 py-1.5 bg-white rounded-xl shadow-[0px_0px_0px_1px_rgba(235,235,235,1.00)] flex items-center gap-2 cursor-pointer min-w-[2.5rem] h-[2.5rem]">
                <img
                  src="/icons/cart.png"
                  alt="Menu"
                  className="w-[1.25rem] h-[1.25rem]"
                />

                <span className="hidden md:block text-[#001416] text-base">
                  0 ₫
                </span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className={`flex flex-col md:hidden bg-white border-t p-4 gap-[1.25rem] z-[99999] w-full ${!isScrolled ? "fixed" : ""}`}
        >
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={`text-base font-medium inline-block hover:text-[#259BD4]  ${item.isActive ? "text-[#259bd4]" : "text-[#001416]"}`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
