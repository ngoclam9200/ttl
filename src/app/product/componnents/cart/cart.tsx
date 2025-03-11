"use client";

import { useState } from "react";
import { Button } from "antd";

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  discount?: string;
  quantity: number;
}

const CartModal = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "Hita Camp 2 Ngày 1 Đêm",
      price: 3868000,
      image: "/feature/product2.png", // Thay bằng ảnh thật
      discount: "Tiết kiệm 44%",
      quantity: 1,
    },
    {
      id: 2,
      name: "HITA FAMILY CAMP",
      price: 2868000,
      image: "/feature/product2.png", // Thay bằng ảnh thật
      quantity: 1,
    },
  ]);


  return (
    <div className="bg-blue-50 p-3 rounded-md">
     {cartItems.length === 0 ? (
            <p className="text-center">Giỏ hàng của bạn đang trống!</p>
          ) : (
            <>
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center justify-between border-b py-2">
                  <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded" />
                  <div className="flex-1 ml-2">
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-blue-600 text-sm">{item.discount}</p>
                    <p className="text-gray-600">{item.price.toLocaleString()} đ</p>
                  </div>
                  <div className="flex items-center">
                    <button className="px-2 py-1 bg-gray-200" >-</button>
                    <span className="mx-2">{item.quantity}</span>
                    <button className="px-2 py-1 bg-gray-200" >+</button>
                  </div>
                  <button className="text-red-500 ml-2">✕</button>
                </div>
              ))}
              <div className="mt-4">
                <p className="text-right text-lg font-semibold">
                  Tạm tính: 100.000.000 đ
                </p>
                <p className="text-sm text-red-500">Phí ship sẽ được thông báo ở trang Thanh toán</p>
              </div>
              <div className="mt-4">
                <Button type="primary" block className="bg-blue-600 text-white py-2">
                  🛒 Thanh toán: 100.000.000  đ
                </Button>
                
              </div>
            </>
          )}
    </div>
  );
};

export default CartModal;
