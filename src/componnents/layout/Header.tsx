"use client";
import CartModal from "@/app/product/componnents/cart/cart";
import { Drawer } from "antd";
import Link from "next/link";
import { useState, useEffect } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpenCart, setIsOpenCart] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 120);
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

  return (
    <>
      <header className={`w-full bg-white shadow-md backdrop-blur-[10px] z-[99999] ${isScrolled ? "fixed" : "relative"}`}>
        <div className="container mx-auto flex items-center justify-between p-4" style={{ maxWidth: "1190px" }}>
          <div className="flex items-center gap-2">
            {/* Mobile menu button */}
            <div onClick={() => setIsOpen(!isOpen)} className="flex md:hidden w-[2.5rem] h-[2.5rem] bg-white rounded-xl shadow items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 18H20M4 6H20H4ZM4 12H20H4Z" stroke="#001416" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <img src="/feature/Logo.png" alt="Logo" className="h-[2.5rem]" />
          </div>

          {/* Navigation Menu */}
          <nav className="hidden md:flex space-x-6 text-gray-700">
            {menuItems.map((item, index) => (
              <Link key={index} href={item.href} className={`text-base font-medium hover:text-blue-600 ${item.isActive ? "text-[#259bd4]" : "text-[#001416]"}`}>
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Cart & Icons */}
          <div className="flex items-center space-x-4">
            <div className="px-3 py-1.5 bg-white rounded-xl shadow flex items-center gap-2 cursor-pointer" onClick={() => setIsOpenCart(true)}>
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
      </header>

      {/* Sidebar Drawer for Cart */}
      <Drawer
        title="Giỏ hàng"
        placement="right"
        onClose={() => setIsOpenCart(false)}
        open={isOpenCart}
        width={400}
      >
        <CartModal />
      </Drawer>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-[99999]" onClick={() => setIsOpen(false)}>
          <div className="absolute top-0 left-0 w-3/4 h-full bg-white p-4 shadow-lg">
            {menuItems.map((item, index) => (
              <Link key={index} href={item.href} className={`block py-2 text-lg font-medium hover:text-blue-600 ${item.isActive ? "text-[#259bd4]" : "text-[#001416]"}`}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
