import React from "react";

const ItemShare = () => {
  return (
    <div className="  bg-white rounded-xl shadow-md p-4 ">
      {/* Header */}
      <div className="flex items-center space-x-3">
        <img src="feature/avt.png" alt="Avatar" className="w-12 h-12 rounded-full" />
        <div>
          <p className="font-semibold text-sm">Chị Vyna Oanh Nguyễn</p>
          <p className="text-xs text-blue-600">
            Giáo viên tại <span className="font-medium">Bang Texas, Hoa Kỳ</span>
          </p>
        </div>
      </div>

      {/* Nội dung */}
      <p className="text-sm text-gray-700 mt-3">"Em xin gửi lời BIẾT ƠN chân thành đến Thầy Nguyễn Phùng Phong – một người thầy HIỀN TRIẾT nhất của gia đình em..."</p>

      {/* Nút "Xem thêm" */}
      <div className="text-blue-500 text-sm font-medium mt-3 flex justify-between">
        <a href="#">Xem thêm</a>
        <a> →</a>
      </div>
    </div>
  );
};

export default ItemShare;
