import Image from "next/image";

const Course = () => {
  return (
    <>
      <div className="bg-white rounded-2xl p-6 w-full lg:px-16">
        <div className="flex items-center space-x-2 mb-4 lg:justify-center">
          <div className="flex items-center px-4 py-2 rounded-lg border border-black">
            <Image src="/icon3.png" alt="icon" width={24} height={24} />
            <p className="text-sm text-gray-500 ml-2">Bắt đầu từ hôm nay</p>
          </div>
        </div>

        <div className="flex items-center space-x-2 mb-4 md:justify-center">
          <h2 className="text-2xl font-bold text-gray-950">ƯƠM MẦM HIỀN TÀI</h2>
        </div>
        <div className="lg:flex items-center lg:space-x-20 mb-4 lg:justify-center">
          <span className="font-light text-gray-950 max-w-[50%] text-center">
            Một lộ trình đào tạo được thiết kế rõ ràng từng ngày để phụ huynh
            biết cách dạy con làm chủ cuộc đời, sống khỏe mạnh, An vui, sung túc
            và nhân ái
          </span>
        </div>
      </div>
      <section className="mt-12 px-6 flex flex-col lg:flex-row items-center max-w-6xl mx-auto bg-white shadow-lg rounded-xl p-6">
        {/* Hình ảnh */}
        <div className="w-full lg:w-2/3">
          <img
            src="/course.png"
            alt="Ươm mầm hiền tài"
            className="rounded-lg"
          />
        </div>
        {/* Nội dung */}
        <div className="w-full lg:w-1/3 mt-6 lg:mt-0 lg:pl-6">
          <p className="text-sm text-green-600 font-semibold">
            🌿 KHAI GIẢNG: 19H00 ngày 05 tháng...
          </p>
          <h2 className="text-2xl font-bold mt-2 text-gray-950">
            HÀNH TRÌNH ƯƠM MẦM HIỀN TÀI
          </h2>
          <ul className="mt-4 space-y-2 text-gray-600">
            <div className="flex">
              <img src="/check.png" alt="" className="h-6 w-6" />
              <li className="ml-2">
                Giúp con học nhẹ nhàng, hiểu và nhớ dễ dàng các môn học ở trường
                mỗi ngày với ứng dụng 5’ Thuộc Bài.
              </li>
            </div>
            <div className="flex">
              <img src="/check.png" alt="" className="h-6 w-6" />
              <li className="ml-2">
                Giúp con Rèn giũa phẩm chất bản thân mỗi ngày với giáo trình
                thực chứng đã được áp dụng thành công cho cộng đồng Tâm Trí Lực
                và các thành viên đội tuyển Siêu trí nhớ, Siêu trí tuệ Việt Nam
                trong hơn 10 năm qua.
              </li>
            </div>
            <div className="flex">
              <img src="/check.png" alt="" className="h-6 w-6" />
              <li className="ml-2">
                Cùng con rèn luyện thể lực với hành trình Hiền tài khỏe mạnh.
              </li>
            </div>
            <div className="flex">
              <img src="/check.png" alt="" className="h-6 w-6" />
              <li className="ml-2">
                Dạy con góp trách nhiệm với xã hội với chương trình Hiền Tài
                Nhân Ái.
              </li>
            </div>
            <div className="flex">
              <img src="/check.png" alt="" className="h-6 w-6" />
              <li className="ml-2">
                Cha mẹ Vui học và trải nghiệm hạnh phúc gia đình với chương
                trình GIA ĐÌNH HIỀN TÀI hàng tuần.
              </li>
            </div>
          </ul>
          <button className="mt-4 px-6 py-3 bg-[#259bd4] text-white rounded-lg font-semibold hover:bg-blue-700 transition">
            Xem chi tiết
          </button>
        </div>
      </section>

      {/* HITA Camp */}
      <section className="mt-12 px-6 flex flex-col-reverse md:flex-col lg:flex-row items-center max-w-6xl mx-auto bg-white shadow-lg rounded-xl p-6">
        {/* Nội dung */}
        <div className="w-full lg:w-1/3">
          <p className="text-sm text-green-600 font-semibold">
            🌿 Khởi đầu cho một hành trình phát triển toàn diện
          </p>
          <h2 className="text-2xl font-bold mt-2 text-gray-950">
            HITA CAMP 2 NGÀY 1 ĐÊM
          </h2>
          <ul className="mt-4 space-y-2 text-gray-600">
            <div className="flex">
              <img src="/check.png" alt="" className="h-6 w-6" />
              <li className="ml-2">
                NẮM BẮT KỸ NĂNG SỐNG CẦN THIẾT CHO TƯƠNG LAI Học cách giao tiếp
                tự tin, làm việc nhóm và giải quyết vấn đề.
              </li>
            </div>
            <div className="flex">
              <img src="/check.png" alt="" className="h-6 w-6" />
              <li className="ml-2">
                {" "}
                NUÔI DƯỠNG ĐẠO ĐỨC, BIẾT YÊU THƯƠNG VÀ GIÚP ĐỠ BA MẸ, BẠN BÈ
              </li>
            </div>
            <div className="flex">
              <img src="/check.png" alt="" className="h-6 w-6" />
              <li className="ml-2">
                Tham gia các hoạt động thiện nguyện và học cách chia sẻ.
              </li>
            </div>
            <div className="flex">
              <img src="/check.png" alt="" className="h-6 w-6" />
              <li className="ml-2">
                TRẢI NGHIỆM TUỔI THƠ Ý NGHĨA VÀ ĐÁNG NHỚ Vui chơi, giao lưu với
                bạn bè, khám phá thiên nhiên thay vì chỉ học lý thuyết.
              </li>
            </div>
          </ul>
          <div className="mt-4 text-lg">
            <span className="text-gray-500 line-through">6.868.000đ</span>
            <span className="text-red-600 font-bold ml-2">3.868.000đ</span>
          </div>
          <button className="mt-4 px-6 py-3 bg-[#259bd4] text-white rounded-lg font-semibold hover:bg-blue-700 transition">
            Thêm vào giỏ hàng
          </button>
        </div>
        {/* Hình ảnh */}
        <div className="w-full lg:w-2/3 mt-6 p-3 lg:mt-0 lg:pl-6">
          <img src="/course2.png" alt="HITA Camp" className="rounded-lg" />
          <div>
            <span className="text-center sm:block hidden text-gray-500 text-sm font-normal">
              Hita Camp là một chương trình huấn luyện ngoại khóa, nhằm giúp các
              con:
            </span>
          </div>
        </div>
      </section>
      <div className="flex justify-center mt-14">
        <span className="text-center text-[#259bd4] text-base font-medium mr-2">
          Tải thêm hành trình
        </span>
        <img src="right.png" />
      </div>
    </>
  );
};

export default Course;
