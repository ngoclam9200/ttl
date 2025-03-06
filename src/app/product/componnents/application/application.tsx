import Image from "next/image";

const ProductCard = () => {
  return (
    <>
      <div className="bg-white rounded-2xl md:p-6 w-full md:px-16">
        <div className="flex items-center ml-4 space-x-2 mb-4 md:justify-center">
          <div className="flex items-center px-4 py-2 rounded-lg border border-black">
            <img
              src="/app.png"
              alt="icon"
              className="w-[20px] h-[20px] md:w-[24px] md:h-[24px]"
            />
            <p className="text-sm text-gray-500 ml-2">Ứng dụng</p>
          </div>
        </div>

        <div className="flex items-center ml-4 space-x-2 mb-4 md:justify-center">
          <h2 className="text-2xl font-bold text-gray-950">
            Ứng dụng học tập thông minh
          </h2>
        </div>
        <div className="block md:hidden">
          <span className="text-gray-500 ml-4 text-sm font-normal leading-tight">
            Một nền tảng mà bạn có thể tin cậy để tiếp cận khán giả của mình
          </span>
        </div>

        {/* Nội dung chính */}
        <div className="mt-8 px-6 md:items-center  mx-auto bg-white shadow-lg rounded-xl p-6 max-w-6xl 2xl:max-w-7xl">
          {/* Thông tin sản phẩm */}
          <div className="flex mb-4">
            <img src="/product3.png" alt="product" className="w-[30px] h-[30px] block" />
            <h3 className=" block text-lg font-semibold text-[#259bd4] ml-3">
              5 PHÚT HỌC BÀI
            </h3>
          </div>
          <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-x-8">
            <div className="space-y-4">
              <p className="text-sm text-gray-600">
                Bộ công cụ hỗ trợ con học tập từ lớp 1 tới lớp 12, được đào tạo
                bởi huấn luyện viên trưởng đội tuyển Siêu Trí Nhớ Việt Nam thầy
                Nguyễn Phùng Phong cùng các thầy cô giáo & chuyên gia tâm huyết
                trong nước và quốc tế.
              </p>

              <img
                src="/product2.png"
                alt="product"
                className="h-[158px] rounded-t-xl"
              />

              <div className="text-[#001416] text-sm font-normal leading-tight">
                5 phút thuộc bài 1 lớp (1 năm)
              </div>
              {/* Đánh giá và giá tiền */}

              <div className="mt-2 flex items-center justify-between">
                <div className="flex">
                  <Image src="/star.png" alt="start" width={20} height={15} />
                  <span className="text-yellow-500">4.9</span>
                </div>
              </div>
              <span className="text-lg font-bold text-gray-900">868.000 ₫</span>
            </div>

            {/* Hình ảnh banner */}
            <div className="">
              <img
                src="/product.png"
                alt="product banner"
                className="rounded-lg w-full"
              />
            </div>
          </div>
        </div>
        <div className="mt-8 px-6 md:items-center  mx-auto bg-white shadow-lg rounded-xl p-6 max-w-6xl 2xl:max-w-7xl">
          {/* Thông tin sản phẩm */}
          <div className="flex mb-4">
            <img src="/product3.png" alt="product" className="w-[30px] h-[30px] block" />
            <h3 className=" block text-lg font-semibold text-[#259bd4] ml-3">
              5 PHÚT HỌC BÀI
            </h3>
          </div>
          <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-x-8">
            <div className="space-y-4">
              <p className="text-sm text-gray-600">
                Bộ công cụ hỗ trợ con học tập từ lớp 1 tới lớp 12, được đào tạo
                bởi huấn luyện viên trưởng đội tuyển Siêu Trí Nhớ Việt Nam thầy
                Nguyễn Phùng Phong cùng các thầy cô giáo & chuyên gia tâm huyết
                trong nước và quốc tế.
              </p>

              <img
                src="/product2.png"
                alt="product"
                className="h-[158px] rounded-t-xl"
              />

              <div className="text-[#001416] text-sm font-normal leading-tight">
                5 phút thuộc bài 1 lớp (1 năm)
              </div>
              {/* Đánh giá và giá tiền */}

              <div className="mt-2 flex items-center justify-between">
                <div className="flex">
                  <Image src="/star.png" alt="start" width={20} height={15} />
                  <span className="text-yellow-500">4.9</span>
                </div>
              </div>
              <span className="text-lg font-bold text-gray-900">868.000 ₫</span>
            </div>

            {/* Hình ảnh banner */}
            <div className="">
              <img
                src="/product.png"
                alt="product banner"
                className="rounded-lg w-full"
              />
            </div>
          </div>
        </div>

        <div className="mt-8 px-6 md:items-center  mx-auto bg-white shadow-lg rounded-xl p-6 max-w-6xl 2xl:max-w-7xl">
          {/* Thông tin sản phẩm */}
          <div className="flex mb-4">
            <img src="/product3.png" alt="product" className="w-[30px] h-[30px] block" />
            <h3 className=" block text-lg font-semibold text-[#259bd4] ml-3">
              5 PHÚT HỌC BÀI
            </h3>
          </div>
          <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-x-8">
            <div className="space-y-4">
              <p className="text-sm text-gray-600">
                Bộ công cụ hỗ trợ con học tập từ lớp 1 tới lớp 12, được đào tạo
                bởi huấn luyện viên trưởng đội tuyển Siêu Trí Nhớ Việt Nam thầy
                Nguyễn Phùng Phong cùng các thầy cô giáo & chuyên gia tâm huyết
                trong nước và quốc tế.
              </p>

              <img
                src="/product2.png"
                alt="product"
                className="h-[158px] rounded-t-xl"
              />

              <div className="text-[#001416] text-sm font-normal leading-tight">
                5 phút thuộc bài 1 lớp (1 năm)
              </div>
              {/* Đánh giá và giá tiền */}

              <div className="mt-2 flex items-center justify-between">
                <div className="flex">
                  <Image src="/star.png" alt="start" width={20} height={15} />
                  <span className="text-yellow-500">4.9</span>
                </div>
              </div>
              <span className="text-lg font-bold text-gray-900">868.000 ₫</span>
            </div>

            {/* Hình ảnh banner */}
            <div className="">
              <img
                src="/product.png"
                alt="product banner"
                className="rounded-lg w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
