import React from "react";
interface User {
  name: string;
  image: string;
  description: string;
}
const ItemShare = ({ user, content }: { user?: User; content?: string }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 sm:min-w-auto min-w-[100%]">
      {/* Header */}
      <div className="flex items-center space-x-3">
        <img
          src={user?.image}
          alt="Avatar"
          className="w-12 h-12 rounded-full"
        />
        <div>
          <p className="font-semibold text-sm">{user?.name}</p>
          <p className="text-xs text-blue-600">{user?.description}</p>
        </div>
      </div>
      {/* Nội dung */}
      <p className="text-sm text-gray-700 mt-3">{content}</p>

      {/* Nút "Xem thêm" */}
     
        <div className="text-blue-500 text-sm font-medium mt-3 flex justify-between">
          <a href="#">Xem thêm</a>
          <a> →</a>
        </div>
   
    </div>
  );
};

export default ItemShare;
